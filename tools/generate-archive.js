#!/usr/bin/env node
'use strict';

/**
 * generate-archive.js — 전체 글 목록 쪽(archive/ko/, archive/en/)을 정적 HTML 로 만든다.
 * (2026-11-15 형님 지시 "실측과 사유별 처방에서 재발 방지까지" — blog-indexing-2026-11-15 WORKORDER I3·I4)
 *
 * 왜 있나:
 *   첫 화면·허브의 글 목록은 자바스크립트로만 그려진다. 첫 화면 HTML 에 글 링크가 0개라 구글은
 *   며칠에 한 번 읽는 사이트맵과 느린 렌더링에 기대 새 글을 찾는다(미색인 360쪽, 새 주소 발견은
 *   크롤의 4%). 자바스크립트 없이 읽히는 목록 한 쪽을 두면 모든 글이 첫 화면에서 두 번 클릭 안에 닿는다.
 *
 * 입력: articles.json (articles[] — published=true 만). 출력: archive/ko/index.html, archive/en/index.html.
 *   - 날짜 내림차순, 달마다 묶음. 각 항목 = 날짜 · 제목 링크 · 설명 한 줄.
 *   - canonical·hreflang·robots(index, follow) 를 갖추고, 공용 CSS 꼬리는 내용 해시(check-indexability.js 와 같은 규칙).
 *   - 결과가 같으면 파일을 다시 쓰지 않는다(빈 커밋 방지).
 *
 * 사용: node tools/generate-archive.js [--repo <root>] [--check]
 *   --check : 쓰지 않고, 최신이 아니면 exit 1.
 */

const fs = require('fs');
const path = require('path');
const { normalizeAssets } = require('./check-indexability.js');

const SITE = 'https://blog.pebblous.ai/';
const T = {
  ko: {
    title: '전체 글 목록 | 페블러스 블로그',
    h1: '전체 글 목록',
    lead: (n) => `페블러스 블로그의 한국어 글 ${n.toLocaleString('ko-KR')}편을 최신순으로 모았다.`,
    other: 'English archive',
    home: '블로그 첫 화면',
    month: (y, m) => `${y}년 ${Number(m)}월`,
    desc: '페블러스 블로그에 발행된 모든 한국어 글을 날짜순으로 모은 목록.',
  },
  en: {
    title: 'All Articles | Pebblous Blog',
    h1: 'All Articles',
    lead: (n) => `Every English article on the Pebblous blog, ${n.toLocaleString('en-US')} in all, newest first.`,
    other: '한국어 목록',
    home: 'Blog home',
    month: (y, m) => new Date(Date.UTC(Number(y), Number(m) - 1, 1)).toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }),
    desc: 'A dated list of every English article published on the Pebblous blog.',
  },
};

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function render(lang, items) {
  const t = T[lang];
  const other = lang === 'ko' ? 'en' : 'ko';
  const byMonth = new Map();
  for (const a of items) {
    const key = String(a.date || '').slice(0, 7) || '0000-00';
    if (!byMonth.has(key)) byMonth.set(key, []);
    byMonth.get(key).push(a);
  }
  const sections = [...byMonth.entries()].map(([key, list]) => {
    const [y, m] = key.split('-');
    const lis = list.map((a) => `        <li><time datetime="${esc(a.date)}">${esc(a.date)}</time> <a href="/${esc(a.path)}">${esc(a.title)}</a>${a.description ? `<p>${esc(a.description)}</p>` : ''}</li>`).join('\n');
    return `    <section id="m-${esc(key)}">\n      <h2>${esc(t.month(y, m))}</h2>\n      <ul>\n${lis}\n      </ul>\n    </section>`;
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="${lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${esc(t.title)}</title>
    <meta name="description" content="${esc(t.desc)}">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="${SITE}archive/${lang}/">
    <link rel="alternate" hreflang="ko" href="${SITE}archive/ko/">
    <link rel="alternate" hreflang="en" href="${SITE}archive/en/">
    <link rel="alternate" hreflang="x-default" href="${SITE}archive/ko/">
    <link rel="stylesheet" href="/css/theme-variables.css?v=AUTO">
    <link rel="stylesheet" href="/styles/common-styles.css?v=AUTO">
    <style>
      body{background:var(--bg-primary,#fff);color:var(--text-primary,#1a1a1a);margin:0;padding:0 16px}
      main{max-width:860px;margin:0 auto;padding:40px 0 80px;line-height:1.6}
      nav{display:flex;gap:16px;font-size:14px;margin-bottom:24px}
      nav a,li a{color:var(--accent-color,#F86825)}
      h1{font-size:28px;margin:0 0 8px}
      h2{font-size:18px;margin:32px 0 8px;border-bottom:1px solid var(--border-color,#e5e5e5);padding-bottom:4px}
      ul{list-style:none;padding:0;margin:0}
      li{padding:6px 0}
      li time{font-variant-numeric:tabular-nums;color:var(--text-secondary,#666);font-size:13px;margin-right:6px}
      li p{margin:2px 0 0;font-size:13px;color:var(--text-secondary,#666)}
    </style>
</head>
<body>
  <main>
    <nav><a href="/">${esc(t.home)}</a><a href="/archive/${other}/">${esc(t.other)}</a></nav>
    <h1>${esc(t.h1)}</h1>
    <p>${esc(t.lead(items.length))}</p>
${sections}
  </main>
</body>
</html>
`;
}

function main(argv) {
  let root = process.cwd();
  let check = false;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--repo') root = path.resolve(argv[++i]);
    else if (argv[i] === '--check') check = true;
    else { console.error(`알 수 없는 인자: ${argv[i]}`); return 2; }
  }
  const src = path.join(root, 'articles.json');
  if (!fs.existsSync(src)) { console.error(`articles.json 없음: ${src}`); return 3; }
  const data = JSON.parse(fs.readFileSync(src, 'utf8'));
  const all = Array.isArray(data) ? data : data.articles || [];
  let stale = 0;
  for (const lang of ['ko', 'en']) {
    const items = all
      .filter((a) => a && a.published === true && a.language === lang && a.path && a.title)
      .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')) || String(a.path).localeCompare(String(b.path)));
    const html = normalizeAssets(render(lang, items), root).html;
    const out = path.join(root, 'archive', lang, 'index.html');
    const cur = fs.existsSync(out) ? fs.readFileSync(out, 'utf8') : null;
    if (cur === html) { console.log(`archive/${lang}/ 최신 (${items.length}편)`); continue; }
    stale++;
    if (check) { console.log(`archive/${lang}/ 갱신 필요 (${items.length}편)`); continue; }
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    console.log(`archive/${lang}/ 썼다 (${items.length}편)`);
  }
  return check && stale ? 1 : 0;
}

if (require.main === module) process.exitCode = main(process.argv.slice(2));
module.exports = { render, main };
