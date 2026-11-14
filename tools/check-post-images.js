#!/usr/bin/env node
'use strict';

/**
 * check-post-images.js — 새 글 본문 그림 검사 (2026-11-01 형님 결정)
 *
 * 결정: "이미지는 자체 생성이 아니면, 원본을 링크로 연결하도록 해야 겠다."
 * 외부 그림을 내려받아 레포에 복사하면 사이트가 불어난다(10월 KO 162편 = 본문 그림
 * 361장·149MB). 외부 그림은 원본 주소로 연결하고, 레포에는 자체 생성 그림만 둔다.
 *
 * 차단(blocking):
 *   - external-copied : 캡션에 페블러스 밖 출처(링크 또는 "Source:/출처:" 글자)를 단 그림을 로컬 파일로 넣음
 *                       (자체 생성 표시 data-origin="pebblous" 가 있으면 예외)
 *   - too-large       : 로컬 래스터 그림 1MB 초과
 *   - no-referrer     : 외부 그림에 referrerpolicy="no-referrer" 없음
 *   - no-source       : 외부 그림에 출처 링크(캡션의 <a href="http...">) 없음
 * 경고(warning):
 *   - large           : 로컬 래스터 그림 500KB 초과
 *   - ko-en-duplicate : en 글이 ko/image 와 같은 바이트의 그림을 따로 가짐 → ../ko/image/ 참조
 *   - missing-file    : 로컬 그림 파일이 없음
 *
 * exit (precheck-gate.js 와 같은 뜻):
 *   0 차단 없음(경고 가능) · 1 차단 ≥ 1 → 콘텐츠 수정 · 2 사용법 오류 · 3 입력 파일 없음
 *
 * 런타임 = node (의도적) — publish-prep 는 Engine 컨테이너(python3 부재, #33)에서 돈다.
 *
 * 사용: node tools/check-post-images.js <ko/index.html> [<en/index.html> ...] [--json]
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BLOCK_BYTES = 1_000_000;
const WARN_BYTES = 500_000;
const RASTER = /\.(png|jpe?g|gif|webp)$/i;
const OWN_HOSTS = /(^|\.)pebblous\.ai$/i;

function attr(tag, name) {
  const m = tag.match(new RegExp(`\\s${name}\\s*=\\s*("([^"]*)"|'([^']*)')`, 'i'));
  return m ? (m[2] !== undefined ? m[2] : m[3]) : null;
}

function isExternal(url) {
  return /^(https?:)?\/\//i.test(url);
}

function hostOf(url) {
  try { return new URL(url.startsWith('//') ? `https:${url}` : url).hostname; } catch { return ''; }
}

/** 캡션 안의 페블러스 밖 http 링크들. */
function externalLinks(html) {
  const out = [];
  const re = /<a\b[^>]*>/gi;
  let m;
  while ((m = re.exec(html))) {
    const href = attr(m[0], 'href');
    if (href && isExternal(href) && !OWN_HOSTS.test(hostOf(href))) out.push(href);
  }
  return out;
}

/** 캡션이 페블러스 밖 출처를 대는가 — 링크, 또는 "Source:/출처:" 글자(링크 없는 인용도 있다). */
function citesOutside(caption) {
  if (externalLinks(caption).length > 0) return true;
  const text = caption.replace(/<[^>]+>/g, ' ');
  const m = text.match(/(source|출처|자료)\s*[:：]\s*(.{0,60})/i);
  return Boolean(m) && !/페블러스|pebblous/i.test(m[2]);
}

/** <img> 마다 { tag, src, caption } — 캡션은 감싼 <figure> 의 <figcaption>. */
function collectImages(html) {
  const items = [];
  const figRanges = [];
  const figRe = /<figure\b[\s\S]*?<\/figure>/gi;
  let f;
  while ((f = figRe.exec(html))) {
    const block = f[0];
    const cap = (block.match(/<figcaption\b[\s\S]*?<\/figcaption>/i) || [''])[0];
    figRanges.push([f.index, f.index + block.length]);
    const imgRe = /<img\b[^>]*>/gi;
    let i;
    while ((i = imgRe.exec(block))) items.push({ tag: i[0], caption: cap });
  }
  const imgRe = /<img\b[^>]*>/gi;
  let i;
  while ((i = imgRe.exec(html))) {
    const inFig = figRanges.some(([a, b]) => i.index >= a && i.index < b);
    if (!inFig) items.push({ tag: i[0], caption: '' });
  }
  return items.map((it) => ({ ...it, src: attr(it.tag, 'src') || '' }));
}

function sha1(file) {
  return crypto.createHash('sha1').update(fs.readFileSync(file)).digest('hex');
}

function checkFile(htmlPath) {
  const findings = [];
  const html = fs.readFileSync(htmlPath, 'utf8');
  const dir = path.dirname(htmlPath);
  const lang = path.basename(dir);
  const koImageDir = path.join(dir, '..', 'ko', 'image');
  let koHashes = null;

  for (const img of collectImages(html)) {
    const { src, tag, caption } = img;
    if (!src || src.startsWith('data:')) continue;
    const add = (level, code, msg) => findings.push({ file: htmlPath, level, code, src, msg });

    if (isExternal(src)) {
      if ((attr(tag, 'referrerpolicy') || '').toLowerCase() !== 'no-referrer') {
        add('blocking', 'no-referrer', '외부 그림에 referrerpolicy="no-referrer" 를 단다');
      }
      if (externalLinks(caption).length === 0) {
        add('blocking', 'no-source', '외부 그림 캡션에 출처 페이지 링크(<a href="https://...">)를 단다');
      }
      continue;
    }

    const clean = src.split(/[?#]/)[0];
    if (!RASTER.test(clean)) continue;
    const file = clean.startsWith('/') ? null : path.resolve(dir, clean);
    const own = (attr(tag, 'data-origin') || '').toLowerCase() === 'pebblous';

    if (!own && citesOutside(caption)) {
      add('blocking', 'external-copied',
        '외부 출처 그림을 복사해 넣었다 — 원본 그림 주소로 연결하거나(src="https://...", referrerpolicy="no-referrer") 그림을 뺀다. 자체 생성이면 data-origin="pebblous"');
    }
    if (!file) continue;
    if (!fs.existsSync(file)) {
      add('warning', 'missing-file', `로컬 그림 파일이 없다: ${path.relative(process.cwd(), file)}`);
      continue;
    }
    const size = fs.statSync(file).size;
    if (size > BLOCK_BYTES) {
      add('blocking', 'too-large', `${(size / 1e6).toFixed(1)}MB — 긴 변 1,600px·1MB 이하로 줄인다`);
    } else if (size > WARN_BYTES) {
      add('warning', 'large', `${Math.round(size / 1e3)}KB — 500KB 이하 권장`);
    }
    if (lang === 'en' && path.dirname(file) !== path.resolve(koImageDir) && fs.existsSync(koImageDir)) {
      if (!koHashes) {
        koHashes = new Set(fs.readdirSync(koImageDir)
          .filter((n) => RASTER.test(n))
          .map((n) => sha1(path.join(koImageDir, n))));
      }
      if (koHashes.has(sha1(file))) {
        add('warning', 'ko-en-duplicate', 'ko/image 에 같은 그림이 있다 — 복사하지 말고 ../ko/image/ 를 참조한다');
      }
    }
  }
  return findings;
}

function main(argv) {
  const json = argv.includes('--json');
  const files = argv.filter((a) => !a.startsWith('--'));
  if (files.length === 0) {
    process.stderr.write('사용: node tools/check-post-images.js <ko/index.html> [<en/index.html> ...] [--json]\n');
    return 2;
  }
  const missing = files.filter((f) => !fs.existsSync(f));
  if (missing.length) {
    process.stderr.write(`입력 파일 없음: ${missing.join(', ')}\n`);
    return 3;
  }
  const findings = files.flatMap(checkFile);
  const blocking = findings.filter((x) => x.level === 'blocking');
  if (json) {
    process.stdout.write(`${JSON.stringify({ blocking: blocking.length, findings }, null, 2)}\n`);
  } else {
    for (const x of findings) {
      process.stdout.write(`${x.level === 'blocking' ? '⛔' : '⚠️ '} ${x.code}\t${x.file}\t${x.src}\n    ${x.msg}\n`);
    }
    process.stderr.write(blocking.length
      ? `❌ 그림 검사 차단 ${blocking.length}건 — 콘텐츠(HTML)를 고친다\n`
      : `✅ 그림 검사 통과 (경고 ${findings.length}건)\n`);
  }
  return blocking.length ? 1 : 0;
}

if (require.main === module) process.exit(main(process.argv.slice(2)));

module.exports = { checkFile, collectImages, externalLinks, citesOutside };
