'use strict';

/**
 * Tests for tools/check-indexability.js — 새 글 색인 조건 + 공용 자산 꼬리 정규화
 * (2026-11-15 blog-indexing WORKORDER I4).
 *
 * Run: node --test tools/check-indexability.test.js
 */

const { test } = require('node:test');
const assert = require('node:assert');
const { spawnSync } = require('child_process');
const crypto = require('crypto');
const fs = require('fs');
const os = require('os');
const path = require('path');

const TOOL = path.join(__dirname, 'check-indexability.js');
const SITE = 'https://blog.pebblous.ai/';
const CSS = 'body{color:#F86825}';
const JS = 'console.log(1)';
const h8 = (s) => crypto.createHash('sha1').update(s).digest('hex').slice(0, 8);

/** 임시 레포: 공용 자산 두 개 + 글 파일들. */
function makeRepo(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'indexability-'));
  const all = { 'styles/common-styles.css': CSS, 'scripts/common-utils.js': JS, ...files };
  for (const [rel, body] of Object.entries(all)) {
    const p = path.join(root, rel);
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, body);
  }
  return root;
}

function run(root, args) {
  const res = spawnSync('node', [TOOL, '--json', ...args], { cwd: root, encoding: 'utf8' });
  const out = res.stdout ? JSON.parse(res.stdout) : null;
  const codes = out ? out.results.flatMap((r) => r.issues.filter((i) => i.level !== 'info').map((i) => i.code)) : [];
  return { status: res.status, out, codes };
}

/** 정상 글 HTML. opt 로 한 군데씩 망가뜨린다. */
function page(lang, opt = {}) {
  const base = 'blog/sample-post/';
  const v = opt.v === undefined ? null : opt.v;
  const q = (asset, body) => (v === null ? `?v=${h8(body)}` : v);
  return `<!DOCTYPE html><html lang="${opt.lang || lang}"><head>
<meta name="robots" content="${opt.robots || 'index, follow'}">
${opt.noCanonical ? '' : `<link rel="canonical" href="${opt.canonical || SITE + base + lang + '/'}">`}
<link rel="alternate" hreflang="ko" href="${opt.hrefKo || SITE + base + 'ko/'}">
${opt.noEn ? '' : `<link rel="alternate" hreflang="en" href="${SITE + base}en/">`}
<link rel="alternate" hreflang="x-default" href="${SITE + base}ko/">
<link rel="stylesheet" href="/styles/common-styles.css${q('css', CSS)}">
</head><body><script src="/scripts/common-utils.js${q('js', JS)}"></script></body></html>`;
}

const pair = (ko, en) => ({ 'blog/sample-post/ko/index.html': ko, 'blog/sample-post/en/index.html': en });
const FILES = ['blog/sample-post/ko/index.html', 'blog/sample-post/en/index.html'];

test('정상 글 → 차단 0, exit 0 (반례: 멀쩡한 글을 막지 않는다)', () => {
  const r = run(makeRepo(pair(page('ko'), page('en'))), FILES);
  assert.strictEqual(r.status, 0);
  assert.deepStrictEqual(r.codes, []);
});

test('발행일 꼬리 ?v=20261115 → asset-version 차단 (양성: 지금 엔진 글)', () => {
  const r = run(makeRepo(pair(page('ko', { v: '?v=20261115' }), page('en'))), FILES);
  assert.strictEqual(r.status, 1);
  assert.deepStrictEqual(r.codes, ['asset-version']);
});

test('--fix → 꼬리를 내용 해시로 고치고 통과, 파일에 반영', () => {
  const root = makeRepo(pair(page('ko', { v: '?v=20261115' }), page('en', { v: '?v=20261101' })));
  const r = run(root, ['--fix', ...FILES]);
  assert.strictEqual(r.status, 0);
  const ko = fs.readFileSync(path.join(root, FILES[0]), 'utf8');
  assert.ok(ko.includes(`/styles/common-styles.css?v=${h8(CSS)}`));
  assert.ok(ko.includes(`/scripts/common-utils.js?v=${h8(JS)}`));
  assert.ok(!ko.includes('20261115'));
  assert.strictEqual(run(root, FILES).status, 0, '고친 뒤 재검사 통과');
});

test('--no-asset → 옛 글 꼬리는 보지 않는다 (옛 글 교정 PR 용)', () => {
  const r = run(makeRepo(pair(page('ko', { v: '?v=20260301' }), page('en'))), ['--no-asset', ...FILES]);
  assert.strictEqual(r.status, 0);
});

test('noindex → robots-noindex 차단', () => {
  const r = run(makeRepo(pair(page('ko', { robots: 'noindex, follow' }), page('en'))), FILES);
  assert.deepStrictEqual(r.codes, ['robots-noindex']);
});

test('canonical 없음 / 다른 주소 → 차단', () => {
  assert.deepStrictEqual(run(makeRepo(pair(page('ko', { noCanonical: true }), page('en'))), FILES).codes, ['canonical-missing']);
  const r = run(makeRepo(pair(page('ko'), page('en', { canonical: SITE + 'blog/sample-post/ko/' }))), FILES);
  assert.deepStrictEqual(r.codes, ['canonical-mismatch']);
});

test('hreflang en 없음 / ko 가 다른 글 → 차단', () => {
  assert.deepStrictEqual(run(makeRepo(pair(page('ko', { noEn: true }), page('en'))), FILES).codes, ['hreflang-missing']);
  const r = run(makeRepo(pair(page('ko', { hrefKo: SITE + 'blog/other/ko/' }), page('en'))), FILES);
  assert.deepStrictEqual(r.codes, ['hreflang-mismatch']);
});

test('html lang 이 폴더와 다름 → lang-mismatch 차단', () => {
  const r = run(makeRepo(pair(page('ko'), page('en', { lang: 'ko' }))), FILES);
  assert.deepStrictEqual(r.codes, ['lang-mismatch']);
});

test('짝 파일 없음 → 경고만, exit 0', () => {
  const r = run(makeRepo({ 'blog/sample-post/ko/index.html': page('ko') }), [FILES[0]]);
  assert.strictEqual(r.status, 0);
  assert.deepStrictEqual(r.codes, ['sibling-missing']);
});

test('입력 파일 없음 → exit 3, 옵션 오류 → exit 2', () => {
  const root = makeRepo({});
  assert.strictEqual(spawnSync('node', [TOOL, 'nope/index.html'], { cwd: root }).status, 3);
  assert.strictEqual(spawnSync('node', [TOOL, '--bad', 'x'], { cwd: root }).status, 2);
});
