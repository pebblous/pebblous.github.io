#!/usr/bin/env node
/**
 * OG Review Server — 로컬 스테이징 리뷰/승인 UI
 *
 * 목적: 새 OG 디자인을 사본(라이브)에 바로 넣기 전에, 로컬에서 전 아티클의
 *       OG 커버를 눈으로 확인하고 (긴 제목엔) 짧은 커버 제목(og-image-title)을
 *       직접 고쳐 재생성하고, 승인 여부를 기록한다.
 *
 * - 렌더는 puppeteer 브라우저 1개를 재사용(배치 빠름).
 * - 편집/승인은 모두 이 로컬 클론 안에서만 일어난다. 아무것도 push하지 않는다.
 * - 승인 결과: tools/.og-review/approvals.json
 *
 * 실행:
 *   PUPPETEER_EXECUTABLE_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
 *   node tools/og-review-server.js [port]
 */
const http = require('http');
const fs = require('fs');
const path = require('path');
const { URL } = require('url');
const puppeteer = require('puppeteer');
const { generateHTML, getTheme, getFontFaces, calcTitleFontSize } = require('./generate-og-image.js');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const PORT = parseInt(process.argv[2] || '8975', 10);
const START_LIMIT = process.argv[3] !== undefined ? parseInt(process.argv[3], 10) : 10; // 시작 시 미리 구울 샘플 수(0=끔)
const CONTENT_DIRS = ['blog', 'report', 'story', 'project', 'pebblopedia', 'event'];
const STAGE_DIR = path.join(__dirname, '.og-review');
const APPROVALS_FILE = path.join(STAGE_DIR, 'approvals.json');
const RENDERED_FILE = path.join(STAGE_DIR, 'rendered.json');

if (!fs.existsSync(STAGE_DIR)) fs.mkdirSync(STAGE_DIR, { recursive: true });

// ---------- persistent state ----------
function loadJSON(f, fallback) { try { return JSON.parse(fs.readFileSync(f, 'utf-8')); } catch { return fallback; } }
function saveJSON(f, obj) { fs.writeFileSync(f, JSON.stringify(obj, null, 2)); }
let approvals = loadJSON(APPROVALS_FILE, {});         // { relHtml: {status:'approved'|'rejected', note} }
let rendered = new Set(loadJSON(RENDERED_FILE, []));  // relHtml already re-rendered with new generator

// ---------- constant render assets (cached) ----------
const logoDataUri = (() => {
    const p = path.join(PROJECT_ROOT, 'image', 'Pebblous_BM_Orange_RGB.png');
    return 'data:image/png;base64,' + fs.readFileSync(p).toString('base64');
})();
const fontFaces = getFontFaces(PROJECT_ROOT);

// ---------- HTML parsing helpers ----------
function unescapeJs(s) {
    return s
        .replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
        .replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, '\\')
        .replace(/<br\s*\/?>/gi, ' ').trim();
}
function parseArticle(htmlAbs) {
    const html = fs.readFileSync(htmlAbs, 'utf-8');
    const rel = path.relative(PROJECT_ROOT, htmlAbs);
    const mtMatch = html.match(/mainTitle:\s*(["'])((?:\\.|(?!\1).)*)\1/);
    const mainTitle = mtMatch ? unescapeJs(mtMatch[2]) : '';
    const ovMatch = html.match(/<meta\s+name="og-image-title"\s+content="([^"]+)"/i);
    const override = ovMatch ? ovMatch[1].replace(/&#10;/g, '\n') : '';
    const ogTitle = (html.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i) || [])[1] || '';
    const titleTag = (html.match(/<title>([^<]+)<\/title>/i) || [])[1] || '';
    let cover = override || mainTitle || ogTitle || titleTag;
    cover = cover.replace(/\s*[|\-–—]\s*(Pebblous|Data Greenhouse|페블러스).*$/i, '').trim();
    // description
    let desc = (html.match(/<meta\s+property="og:description"\s+content="([^"]+)"/i) || [])[1]
        || (html.match(/<meta\s+name="description"\s+content="([^"]+)"/i) || [])[1] || '';
    // 자르지 않음 — 생성기의 fitSubtitle이 2줄 문구 경계로 정리
    // category
    let category = (html.match(/category:\s*['"](\w+)['"]/) || [])[1] || '';
    if (!category) {
        if (rel.includes('report/')) category = 'business';
        else if (rel.includes('story/')) category = 'story';
        else category = 'tech';
    }
    const lang = /\/en\/index\.html$/.test(rel) ? 'en' : (/\/ko\/index\.html$/.test(rel) ? 'ko' : 'ko');
    const font = calcTitleFontSize(override || cover);
    return {
        rel, mainTitle, override, cover, desc, category, lang,
        hasMain: !!mainTitle,
        needsShort: !override && font <= 54,   // 3줄+로 눌리는 진짜 긴 제목만 → 짧은 커버 후보
        font,
        image: path.join(path.dirname(rel), 'image', 'index.png'),
        rendered: rendered.has(rel),
        status: (approvals[rel] && approvals[rel].status) || 'pending',
    };
}
function walk(dir, out) {
    let entries;
    try { entries = fs.readdirSync(dir, { withFileTypes: true }); } catch { return; }
    for (const e of entries) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) walk(full, out);
        else if (e.name === 'index.html') out.push(full);
    }
}
function scanArticles() {
    const files = [];
    for (const d of CONTENT_DIRS) walk(path.join(PROJECT_ROOT, d), files);
    const list = [];
    for (const f of files) {
        try {
            const a = parseArticle(f);
            if (a.mainTitle || a.cover) list.push(a);   // 아티클로 보이는 것만
        } catch (err) { /* skip */ }
    }
    // 짧은제목 필요 → 미승인 → 나머지 순으로 정렬(작업 우선순위)
    list.sort((x, y) =>
        (y.needsShort - x.needsShort) ||
        ((x.status === 'approved') - (y.status === 'approved')) ||
        x.rel.localeCompare(y.rel));
    return list;
}

// ---------- rendering (shared browser) ----------
let browserP = null;
async function getBrowser() {
    if (!browserP) browserP = puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] });
    return browserP;
}
async function renderOne(relHtml) {
    const htmlAbs = path.join(PROJECT_ROOT, relHtml);
    const a = parseArticle(htmlAbs);
    const themeMatch = fs.readFileSync(htmlAbs, 'utf-8').match(/<html[^>]+data-theme="(\w+)"/);
    const light = themeMatch ? themeMatch[1] !== 'dark' : true;
    const theme = getTheme(a.category, light);
    const title = a.override || a.cover;
    const html = generateHTML(title, a.desc, theme, logoDataUri, fontFaces);
    const outAbs = path.join(PROJECT_ROOT, a.image);
    if (!fs.existsSync(path.dirname(outAbs))) fs.mkdirSync(path.dirname(outAbs), { recursive: true });
    const browser = await getBrowser();
    const page = await browser.newPage();
    try {
        await page.setViewport({ width: 1200, height: 630 });
        await page.setContent(html, { waitUntil: 'domcontentloaded' });
        await page.evaluate(() => document.fonts.ready);
        await new Promise(r => setTimeout(r, 150));
        await page.screenshot({ path: outAbs, type: 'png' });
    } finally { await page.close(); }
    rendered.add(relHtml);
    saveJSON(RENDERED_FILE, [...rendered]);
    return a.image;
}

// ---------- background batch render ----------
let queue = [];
let running = 0;
let progress = { total: 0, done: 0, active: false };
const CONCURRENCY = 4;
function pump() {
    while (running < CONCURRENCY && queue.length) {
        const rel = queue.shift();
        running++;
        renderOne(rel).catch(e => console.error('render fail', rel, e.message))
            .finally(() => { running--; progress.done++; if (!queue.length && running === 0) progress.active = false; pump(); });
    }
}
function enqueueList(rels) {
    queue = rels.filter(rel => !rendered.has(rel));
    progress = { total: queue.length, done: 0, active: queue.length > 0 };
    pump();
}
function enqueueAll() {
    enqueueList(scanArticles().map(a => a.rel));
}
// 대표 샘플: 짧은제목 후보 위주 + 정상 커버 몇 개(카테고리·언어 다양)
function sampleRels(limit) {
    const all = scanArticles();
    const need = all.filter(a => a.needsShort);
    const norm = all.filter(a => !a.needsShort);
    const nNeed = Math.min(need.length, Math.ceil(limit * 0.6));
    const picked = [...need.slice(0, nNeed), ...norm.slice(0, limit - nNeed)];
    return picked.slice(0, limit).map(a => a.rel);
}

// ---------- write cover title into HTML ----------
function setCoverTitle(relHtml, coverTitle) {
    const abs = path.join(PROJECT_ROOT, relHtml);
    let html = fs.readFileSync(abs, 'utf-8');
    const encoded = (coverTitle || '').replace(/\n/g, '&#10;').replace(/"/g, '&quot;');
    const metaRe = /\n?[ \t]*<meta\s+name="og-image-title"\s+content="[^"]*">/i;
    if (!coverTitle || !coverTitle.trim()) {
        html = html.replace(metaRe, '');                       // 비우면 override 제거 → mainTitle 사용
    } else if (metaRe.test(html)) {
        html = html.replace(metaRe, `\n    <meta name="og-image-title" content="${encoded}">`);
    } else {
        // og:title 앞에 삽입, 없으면 </head> 앞
        const tag = `    <meta name="og-image-title" content="${encoded}">\n`;
        if (/<meta\s+property="og:title"/i.test(html)) {
            html = html.replace(/([ \t]*<meta\s+property="og:title")/i, tag + '$1');
        } else {
            html = html.replace(/<\/head>/i, tag + '</head>');
        }
    }
    fs.writeFileSync(abs, html);
    rendered.delete(relHtml); // 재생성 필요
}

// ---------- HTTP ----------
function send(res, code, body, type = 'application/json') {
    res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-store' });
    res.end(typeof body === 'string' || Buffer.isBuffer(body) ? body : JSON.stringify(body));
}
async function readBody(req) {
    return new Promise(r => { let d = ''; req.on('data', c => d += c); req.on('end', () => r(d ? JSON.parse(d) : {})); });
}

const server = http.createServer(async (req, res) => {
    const u = new URL(req.url, `http://localhost:${PORT}`);
    try {
        if (u.pathname === '/') return send(res, 200, UI_HTML, 'text/html; charset=utf-8');
        if (u.pathname === '/api/list') return send(res, 200, { articles: scanArticles(), approvals, progress });
        if (u.pathname === '/api/progress') return send(res, 200, progress);
        if (u.pathname === '/img') {
            const rel = u.searchParams.get('path');
            const abs = path.join(PROJECT_ROOT, rel || '');
            if (!abs.startsWith(PROJECT_ROOT) || !fs.existsSync(abs)) return send(res, 404, 'not found', 'text/plain');
            return send(res, 200, fs.readFileSync(abs), 'image/png');
        }
        if (req.method === 'POST' && u.pathname === '/api/cover') {
            const { rel, cover } = await readBody(req);
            setCoverTitle(rel, cover);
            const img = await renderOne(rel);
            return send(res, 200, { ok: true, image: img, article: parseArticle(path.join(PROJECT_ROOT, rel)) });
        }
        if (req.method === 'POST' && u.pathname === '/api/render') {
            const { rel } = await readBody(req);
            const img = await renderOne(rel);
            return send(res, 200, { ok: true, image: img });
        }
        if (req.method === 'POST' && u.pathname === '/api/approve') {
            const { rel, status, note } = await readBody(req);
            if (status === 'pending') delete approvals[rel];
            else approvals[rel] = { status, note: note || '' };
            saveJSON(APPROVALS_FILE, approvals);
            return send(res, 200, { ok: true, status });
        }
        if (req.method === 'POST' && u.pathname === '/api/render-all') {
            enqueueAll();
            return send(res, 200, { ok: true, progress });
        }
        if (req.method === 'POST' && u.pathname === '/api/render-sample') {
            const n = (await readBody(req)).n || 10;
            enqueueList(sampleRels(n));
            return send(res, 200, { ok: true, progress });
        }
        return send(res, 404, 'not found', 'text/plain');
    } catch (e) {
        console.error(e);
        return send(res, 500, { error: e.message });
    }
});

server.listen(PORT, () => {
    const n = scanArticles().length;
    console.log(`\n🎨 OG Review Server  →  http://localhost:${PORT}`);
    console.log(`   아티클 ${n}개  ·  이미 지정된 커버제목 ${scanArticles().filter(a => a.override).length}개`);
    console.log(`   승인 기록: ${APPROVALS_FILE}`);
    console.log(`   (아무것도 push하지 않음 — 로컬 스테이징 전용)`);
    // 시작 시 대표 샘플만 미리 렌더(전체는 UI 버튼으로). START_LIMIT=0이면 끔.
    if (START_LIMIT > 0) {
        const s = sampleRels(START_LIMIT);
        console.log(`   샘플 ${s.length}개 미리 렌더 중… (전체는 UI 버튼)\n`);
        enqueueList(s);
    } else console.log('');
});

// ---------- UI ----------
const UI_HTML = `<!DOCTYPE html>
<html lang="ko"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>OG 커버 리뷰 · 페블러스</title>
<style>
  :root{ --org:#F86825; --org2:#C64900; --ink:#171719; --muted:#808080;
         --bd:rgba(112,115,124,.22); --bg:#FAFAFB; --card:#FFFFFF; }
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:'Pretendard',-apple-system,sans-serif;background:var(--bg);color:var(--ink);font-size:14px}
  header{position:sticky;top:0;z-index:10;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);
         border-bottom:1px solid var(--bd);padding:14px 24px}
  .hrow{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
  h1{font-size:18px;font-weight:800}
  h1 .p{color:var(--org)}
  .counts{color:var(--muted);font-size:13px}
  .counts b{color:var(--ink)}
  .filters{display:flex;gap:6px;margin-left:auto;flex-wrap:wrap}
  .filters button, .bar button{font:inherit;border:1px solid var(--bd);background:#fff;color:var(--ink);
         padding:6px 12px;border-radius:999px;cursor:pointer;font-size:13px}
  .filters button.on{background:var(--ink);color:#fff;border-color:var(--ink)}
  .bar{display:flex;align-items:center;gap:12px;margin-top:10px}
  .bar button{background:var(--org);color:#fff;border-color:var(--org);font-weight:700}
  .prog{flex:1;height:8px;background:#eee;border-radius:99px;overflow:hidden;max-width:360px}
  .prog i{display:block;height:100%;background:var(--org);width:0}
  input[type=search]{font:inherit;border:1px solid var(--bd);border-radius:8px;padding:6px 10px;width:220px}
  main{padding:20px 24px;display:grid;grid-template-columns:repeat(auto-fill,minmax(340px,1fr));gap:18px}
  .card{background:var(--card);border:1px solid var(--bd);border-radius:14px;overflow:hidden;display:flex;flex-direction:column}
  .card.approved{border-color:var(--org);box-shadow:0 0 0 2px rgba(248,104,37,.18)}
  .card.rejected{opacity:.6}
  .thumb{position:relative;aspect-ratio:1200/630;background:#f0f0f2;cursor:zoom-in}
  .thumb img{width:100%;height:100%;object-fit:cover;display:block}
  .tag{position:absolute;top:8px;left:8px;background:rgba(0,0,0,.6);color:#fff;font-size:11px;
       padding:2px 8px;border-radius:99px}
  .tag.old{background:#b0b0b0}
  .short{position:absolute;top:8px;right:8px;background:var(--org);color:#fff;font-size:11px;
       padding:2px 8px;border-radius:99px}
  .body{padding:12px 14px;display:flex;flex-direction:column;gap:8px}
  .rel{font-size:11px;color:var(--muted);word-break:break-all}
  .lbl{font-size:11px;color:var(--muted);margin-bottom:2px}
  .main{font-size:12px;color:var(--muted)}
  textarea{font:inherit;width:100%;border:1px solid var(--bd);border-radius:8px;padding:8px;resize:vertical;
       min-height:44px;font-size:14px;line-height:1.3}
  .acts{display:flex;gap:6px;flex-wrap:wrap}
  .acts button{font:inherit;font-size:13px;border:1px solid var(--bd);background:#fff;border-radius:8px;
       padding:6px 10px;cursor:pointer}
  .acts .save{background:var(--ink);color:#fff;border-color:var(--ink)}
  .acts .ok{background:var(--org);color:#fff;border-color:var(--org);font-weight:700}
  .acts .ok.on{background:#0a7d2c;border-color:#0a7d2c}
  .acts .no.on{background:#cf1d21;border-color:#cf1d21;color:#fff}
  #lb{position:fixed;inset:0;background:rgba(0,0,0,.8);display:none;align-items:center;justify-content:center;z-index:50;cursor:zoom-out}
  #lb img{max-width:92vw;max-height:92vh;border-radius:8px}
</style></head><body>
<header>
  <div class="hrow">
    <h1><span class="p">●</span> OG 커버 리뷰 <span style="font-weight:400;color:var(--muted)">로컬 스테이징</span></h1>
    <span class="counts" id="counts"></span>
    <div class="filters" id="filters">
      <button data-f="new" class="on">새로생성</button>
      <button data-f="all">전체</button>
      <button data-f="need">짧은제목 필요</button>
      <button data-f="override">지정됨</button>
      <button data-f="pending">미승인</button>
      <button data-f="approved">승인됨</button>
    </div>
  </div>
  <div class="bar">
    <input type="search" id="q" placeholder="경로·제목 검색">
    <button id="renderSample">샘플 10개 굽기</button>
    <button id="renderAll" style="background:#fff;color:var(--ink);border-color:var(--bd)">전체 굽기(오래 걸림)</button>
    <div class="prog"><i id="progbar"></i></div>
    <span class="counts" id="progtxt"></span>
  </div>
</header>
<main id="grid"></main>
<div id="lb"><img></div>
<script>
let DATA=[], FILTER='new', Q='';
const $=s=>document.querySelector(s);
function busty(rel){return '/img?path='+encodeURIComponent(rel)+'&t='+Date.now();}
async function load(){
  const r=await fetch('/api/list'); const j=await r.json();
  DATA=j.articles; render(); poll();
}
function counts(){
  const n=DATA.length, need=DATA.filter(a=>a.needsShort).length,
        ov=DATA.filter(a=>a.override).length, ap=DATA.filter(a=>a.status==='approved').length;
  $('#counts').innerHTML='총 <b>'+n+'</b> · 짧은제목필요 <b>'+need+'</b> · 지정됨 <b>'+ov+'</b> · 승인 <b>'+ap+'</b>';
}
function visible(){
  return DATA.filter(a=>{
    if(FILTER==='new'&&!a.rendered)return false;
    if(FILTER==='need'&&!a.needsShort)return false;
    if(FILTER==='override'&&!a.override)return false;
    if(FILTER==='pending'&&a.status!=='pending')return false;
    if(FILTER==='approved'&&a.status!=='approved')return false;
    if(Q&&!(a.rel.toLowerCase().includes(Q)||(a.cover||'').toLowerCase().includes(Q)))return false;
    return true;
  });
}
function card(a){
  const el=document.createElement('div');
  el.className='card'+(a.status==='approved'?' approved':'')+(a.status==='rejected'?' rejected':'');
  el.dataset.rel=a.rel;
  const oldTag=a.rendered?'':'<span class="tag old">구버전</span>';
  const shortTag=a.needsShort?'<span class="short">짧게?</span>':'';
  const mainLine=(a.override&&a.mainTitle&&a.override!==a.mainTitle)?'<div class="main">본문: '+esc(a.mainTitle)+'</div>':'';
  el.innerHTML=
    '<div class="thumb" data-img="'+encodeURIComponent(a.image)+'">'+oldTag+shortTag+
      '<img loading="lazy" src="'+busty(a.image)+'" onerror="this.style.opacity=.15"></div>'+
    '<div class="body">'+
      '<div class="rel">'+a.lang.toUpperCase()+' · '+esc(a.rel)+'</div>'+
      '<div><div class="lbl">커버 제목 (og-image-title · 비우면 본문제목 사용)</div>'+
      '<textarea>'+esc(a.override||a.cover)+'</textarea></div>'+
      mainLine+
      '<div class="acts">'+
        '<button class="save">저장 & 재생성</button>'+
        '<button class="ok'+(a.status==='approved'?' on':'')+'">승인</button>'+
        '<button class="no'+(a.status==='rejected'?' on':'')+'">보류</button>'+
      '</div>'+
    '</div>';
  const ta=el.querySelector('textarea');
  el.querySelector('.save').onclick=async()=>{
    const btn=el.querySelector('.save'); btn.textContent='굽는 중…'; btn.disabled=true;
    const r=await fetch('/api/cover',{method:'POST',headers:{'Content-Type':'application/json'},
       body:JSON.stringify({rel:a.rel,cover:ta.value})});
    const j=await r.json(); if(j.article){Object.assign(a,j.article);}
    el.querySelector('img').src=busty(a.image);
    el.querySelector('.tag.old')?.remove();
    btn.textContent='저장 & 재생성'; btn.disabled=false; counts();
  };
  el.querySelector('.ok').onclick=()=>setStatus(a,el,a.status==='approved'?'pending':'approved');
  el.querySelector('.no').onclick=()=>setStatus(a,el,a.status==='rejected'?'pending':'rejected');
  el.querySelector('.thumb').onclick=e=>{if(e.target.tagName!=='IMG'&&!e.target.classList.contains('thumb'))return;
     const lb=$('#lb');lb.querySelector('img').src=busty(a.image);lb.style.display='flex';};
  return el;
}
async function setStatus(a,el,status){
  await fetch('/api/approve',{method:'POST',headers:{'Content-Type':'application/json'},
     body:JSON.stringify({rel:a.rel,status})});
  a.status=status;
  el.className='card'+(status==='approved'?' approved':'')+(status==='rejected'?' rejected':'');
  el.querySelector('.ok').classList.toggle('on',status==='approved');
  el.querySelector('.no').classList.toggle('on',status==='rejected');
  counts();
}
function esc(s){return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function render(){
  counts();
  const g=$('#grid'); g.innerHTML='';
  const v=visible();
  for(const a of v) g.appendChild(card(a));
  if(!v.length) g.innerHTML='<p style="color:var(--muted)">해당 없음</p>';
}
$('#filters').onclick=e=>{const b=e.target.closest('button');if(!b)return;
  [...$('#filters').children].forEach(x=>x.classList.remove('on'));b.classList.add('on');FILTER=b.dataset.f;render();};
$('#q').oninput=e=>{Q=e.target.value.toLowerCase();render();};
$('#renderSample').onclick=async()=>{await fetch('/api/render-sample',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({n:10})});poll();};
$('#renderAll').onclick=async()=>{if(!confirm('전체 876개를 굽습니다. 몇 분 걸려요. 진행할까요?'))return;await fetch('/api/render-all',{method:'POST'});poll();};
$('#lb').onclick=()=>$('#lb').style.display='none';
async function poll(){
  const r=await fetch('/api/progress'); const p=await r.json();
  const pct=p.total?Math.round(p.done/p.total*100):100;
  $('#progbar').style.width=pct+'%';
  $('#progtxt').textContent=p.active?('렌더 '+p.done+'/'+p.total):(p.total?'완료':'');
  if(p.active){setTimeout(poll,1500);}
  else{ // 완료되면 목록 새로고침(rendered 반영) 후 갤러리 재구성
    const r=await fetch('/api/list');DATA=(await r.json()).articles;render();
  }
}
load();
</script>
</body></html>`;
