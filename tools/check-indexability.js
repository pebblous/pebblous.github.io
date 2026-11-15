#!/usr/bin/env node
'use strict';

/**
 * check-indexability.js — 새 글이 구글 색인 조건을 갖췄는지 검사하고, 공용 자산 꼬리(?v=)를 정규화한다.
 * (2026-11-15 형님 지시 "실측과 사유별 처방에서 재발 방지까지" — blog-indexing-2026-11-15 WORKORDER I4)
 *
 * 왜 있나:
 *   - 글마다 공용 CSS/JS 주소에 발행일 ?v=YYYYMMDD 를 붙여 왔다. 실제 파일 8개가 주소 1,253개로 갈라져
 *     구글이 같은 파일을 날짜마다 다시 받는다(90일 크롤 요청의 53% 가 JS·CSS, 새 주소 발견은 4%).
 *     → 꼬리를 "파일 내용 해시 앞 8자리"로 정한다. 파일이 바뀔 때만 꼬리가 바뀐다.
 *   - 색인 허용·대표 주소·한영 짝 표시가 틀린 글은 발행돼도 검색에 나오지 않는다. 지금 검수는 문체·제목만 본다.
 *
 * 차단(blocking):
 *   - robots-noindex     : <meta name="robots"> 에 noindex
 *   - canonical-missing  : <link rel="canonical"> 없음
 *   - canonical-mismatch : canonical 이 자기 주소(https://blog.pebblous.ai/<경로>/)가 아님
 *   - hreflang-missing   : ko·en 글인데 hreflang ko 또는 en 표시가 없음
 *   - hreflang-mismatch  : hreflang ko/en 이 같은 글의 ko/ · en/ 주소를 가리키지 않음
 *   - lang-mismatch      : <html lang> 이 폴더 언어(ko/en)와 다름
 *   - asset-version      : 공용 자산 꼬리가 내용 해시와 다름 (--fix 면 고치고 차단하지 않음)
 * 경고(warning):
 *   - sibling-missing    : ko 글에 en 짝 파일(또는 반대)이 없음
 *   - asset-missing      : 참조한 공용 자산 파일이 레포에 없음
 *
 * exit (check-post-images.js · precheck-gate.js 와 같은 뜻):
 *   0 차단 없음(경고 가능) · 1 차단 ≥ 1 → 콘텐츠 수정 · 2 사용법 오류 · 3 입력 파일 없음
 *
 * 런타임 = node (의도적) — publish-prep 와 같은 환경에서 돈다.
 *
 * 사용: node tools/check-indexability.js [--fix] [--no-asset] [--json] <ko/index.html> [<en/index.html> ...]
 *   --fix      : 자산 꼬리를 해시로 고쳐 쓴다(파일 수정). 나머지 차단은 고치지 않는다.
 *   --no-asset : 자산 꼬리 검사를 건너뛴다(옛 글을 고치는 PR 용 — 옛 글 일괄 정규화는 따로 결정).
 *   레포 루트 = 현재 작업 폴더.
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const SITE = 'https://blog.pebblous.ai/';
const ASSET_RE = /((?:href|src)\s*=\s*")(\/(?:css|styles|scripts)\/[^"?#]+\.(?:css|js))(\?v=[^"]*)?(")/gi;

function attr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i'));
  return m ? (m[2] !== undefined ? m[2] : m[3]) : null;
}

function tags(html, re) {
  const out = [];
  let m;
  while ((m = re.exec(html))) out.push(m[0]);
  return out;
}

const hashCache = new Map();
/** 레포 루트 기준 자산의 내용 해시 앞 8자리. 파일이 없으면 null. */
function assetHash(root, assetPath) {
  const key = path.join(root, assetPath);
  if (hashCache.has(key)) return hashCache.get(key);
  let h = null;
  try { h = crypto.createHash('sha1').update(fs.readFileSync(key)).digest('hex').slice(0, 8); } catch { h = null; }
  hashCache.set(key, h);
  return h;
}

/** html 의 공용 자산 꼬리를 해시로 바꾼 결과와 바뀐 목록. */
function normalizeAssets(html, root) {
  const changed = [];
  const missing = [];
  const out = html.replace(ASSET_RE, (all, pre, p, v, post) => {
    const h = assetHash(root, p);
    if (!h) { missing.push(p); return all; }
    const want = `?v=${h}`;
    if (v === want) return all;
    changed.push({ asset: p, from: v || '(없음)', to: want });
    return `${pre}${p}${want}${post}`;
  });
  return { html: out, changed, missing };
}

/** 퍼센트 인코딩 차이(공백=%20 등)는 같은 주소로 본다. */
function sameUrl(a, b) {
  const dec = (u) => { try { return decodeURI(u || ''); } catch { return u || ''; } };
  return dec(a) === dec(b);
}

/** 레포 상대 경로(예: blog/x/ko/index.html) → 기대 주소·언어·짝 경로. */
function describe(rel) {
  const norm = rel.split(path.sep).join('/');
  const m = norm.match(/^(.*\/)(ko|en)\/index\.html$/);
  const dir = norm.replace(/index\.html$/, '');
  return {
    url: SITE + dir,
    lang: m ? m[2] : null,
    base: m ? m[1] : null,
  };
}

function checkFile(file, opts) {
  const root = process.cwd();
  const abs = path.resolve(file);
  const rel = path.relative(root, abs);
  const issues = [];
  let html = fs.readFileSync(abs, 'utf8');
  const d = describe(rel);

  // 자산 꼬리
  if (!opts.noAsset) {
    const r = normalizeAssets(html, root);
    for (const p of r.missing) issues.push({ level: 'warning', code: 'asset-missing', detail: p });
    if (r.changed.length) {
      if (opts.fix) {
        fs.writeFileSync(abs, r.html);
        html = r.html;
        issues.push({ level: 'info', code: 'asset-version-fixed', detail: r.changed.map((c) => `${c.asset} ${c.from}→${c.to}`).join(', ') });
      } else {
        issues.push({ level: 'blocking', code: 'asset-version', detail: r.changed.map((c) => `${c.asset} ${c.from}≠${c.to}`).join(', ') });
      }
    }
  }

  // robots
  for (const t of tags(html, /<meta\b[^>]*>/gi)) {
    const name = (attr(t, 'name') || '').toLowerCase();
    if ((name === 'robots' || name === 'googlebot') && /noindex/i.test(attr(t, 'content') || '')) {
      issues.push({ level: 'blocking', code: 'robots-noindex', detail: t });
    }
  }

  // canonical
  const links = tags(html, /<link\b[^>]*>/gi);
  const canon = links.filter((t) => (attr(t, 'rel') || '').toLowerCase() === 'canonical');
  if (!canon.length) issues.push({ level: 'blocking', code: 'canonical-missing', detail: `기대값 ${d.url}` });
  else {
    const href = attr(canon[0], 'href');
    if (!sameUrl(href, d.url)) issues.push({ level: 'blocking', code: 'canonical-mismatch', detail: `${href} ≠ ${d.url}` });
  }

  // 언어·hreflang
  if (d.lang) {
    const htmlTag = (html.match(/<html\b[^>]*>/i) || [''])[0];
    const lang = (attr(htmlTag, 'lang') || '').toLowerCase();
    if (!lang.startsWith(d.lang)) issues.push({ level: 'blocking', code: 'lang-mismatch', detail: `<html lang="${lang}"> · 폴더 ${d.lang}` });

    const alt = {};
    for (const t of links) {
      if ((attr(t, 'rel') || '').toLowerCase() !== 'alternate') continue;
      const hl = (attr(t, 'hreflang') || '').toLowerCase();
      if (hl) alt[hl] = attr(t, 'href');
    }
    const other = d.lang === 'ko' ? 'en' : 'ko';
    const hasSibling = fs.existsSync(path.join(root, d.base, other, 'index.html'));
    if (!hasSibling) issues.push({ level: 'warning', code: 'sibling-missing', detail: `${d.base}${other}/index.html 없음` });
    // 짝이 있을 때만 두 언어 표시를 모두 요구한다(한 언어뿐인 글은 자기 언어 표시만 맞으면 된다).
    for (const l of hasSibling ? ['ko', 'en'] : [d.lang]) {
      const want = `${SITE}${d.base}${l}/`;
      if (!alt[l]) issues.push({ level: 'blocking', code: 'hreflang-missing', detail: `hreflang="${l}" 없음 (기대 ${want})` });
      else if (!sameUrl(alt[l], want)) issues.push({ level: 'blocking', code: 'hreflang-mismatch', detail: `hreflang="${l}" ${alt[l]} ≠ ${want}` });
    }
  }
  return { file: rel, url: d.url, issues };
}

function main(argv) {
  const opts = { fix: false, json: false, noAsset: false };
  const files = [];
  for (const a of argv) {
    if (a === '--fix') opts.fix = true;
    else if (a === '--json') opts.json = true;
    else if (a === '--no-asset') opts.noAsset = true;
    else if (a.startsWith('--')) { console.error(`알 수 없는 옵션: ${a}`); return 2; }
    else files.push(a);
  }
  if (!files.length) { console.error('사용: node tools/check-indexability.js [--fix] [--no-asset] [--json] <index.html> ...'); return 2; }
  for (const f of files) if (!fs.existsSync(f)) { console.error(`입력 파일 없음: ${f}`); return 3; }

  const results = files.map((f) => checkFile(f, opts));
  const blocking = results.reduce((n, r) => n + r.issues.filter((i) => i.level === 'blocking').length, 0);
  if (opts.json) console.log(JSON.stringify({ blocking, results }, null, 2));
  else {
    for (const r of results) {
      console.log(`${r.file}`);
      if (!r.issues.length) console.log('  ✓ 색인 조건 통과');
      for (const i of r.issues) console.log(`  ${i.level === 'blocking' ? '✗' : i.level === 'warning' ? '△' : '·'} ${i.code}: ${i.detail}`);
    }
    console.log(blocking ? `→ 차단 ${blocking}건` : '→ 차단 0건');
  }
  return blocking ? 1 : 0;
}

// process.exit() 는 파이프로 나가는 긴 출력(64KB 넘는 --json)을 자른다 → exitCode 로 끝낸다.
if (require.main === module) process.exitCode = main(process.argv.slice(2));
module.exports = { normalizeAssets, describe, checkFile, main };
