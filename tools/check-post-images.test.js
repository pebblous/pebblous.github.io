'use strict';

/**
 * Tests for tools/check-post-images.js — 새 글 본문 그림 검사 (2026-11-01 형님 결정:
 * 자체 생성이 아닌 그림은 원본 주소로 연결).
 *
 * Run: node --test tools/check-post-images.test.js
 */

const { test } = require('node:test');
const assert = require('node:assert');
const { spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const TOOL = path.join(__dirname, 'check-post-images.js');

/** 임시 글 폴더: { 'ko/index.html': '...', 'ko/image/a.png': Buffer|number } */
function makePost(files) {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'post-images-'));
  for (const [rel, body] of Object.entries(files)) {
    const p = path.join(root, rel);
    fs.mkdirSync(path.dirname(p), { recursive: true });
    fs.writeFileSync(p, typeof body === 'number' ? Buffer.alloc(body, 7) : body);
  }
  return root;
}

function run(root, rels) {
  const res = spawnSync('node', [TOOL, ...rels.map((r) => path.join(root, r)), '--json'], { encoding: 'utf8' });
  const out = res.stdout ? JSON.parse(res.stdout) : null;
  return { status: res.status, out, codes: out ? out.findings.map((f) => f.code) : [] };
}

const page = (body) => `<html><body><main>${body}</main></body></html>`;

const HOTLINK = `<figure class="my-8">
  <img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Robot.jpg" alt="로봇" loading="lazy" referrerpolicy="no-referrer" onerror="this.style.display='none'">
  <figcaption>▲ 로봇 | 출처: <a href="https://commons.wikimedia.org/wiki/File:Robot.jpg" target="_blank" rel="noopener">Wikimedia Commons</a></figcaption>
</figure>`;

const COPIED = `<figure class="my-8">
  <img src="./image/img-01-robot.jpg" alt="로봇" loading="lazy">
  <figcaption>▲ 로봇 | Source: <a href="https://nvidianews.nvidia.com/news/x" target="_blank">NVIDIA Newsroom</a></figcaption>
</figure>`;

test('반례: 원본 주소로 연결한 외부 그림은 통과', () => {
  const root = makePost({ 'ko/index.html': page(HOTLINK) });
  const r = run(root, ['ko/index.html']);
  assert.strictEqual(r.status, 0);
  assert.deepStrictEqual(r.codes, []);
});

test('양성: 외부 출처 그림을 로컬로 복사하면 차단', () => {
  const root = makePost({ 'ko/index.html': page(COPIED), 'ko/image/img-01-robot.jpg': 300_000 });
  const r = run(root, ['ko/index.html']);
  assert.strictEqual(r.status, 1);
  assert.deepStrictEqual(r.codes, ['external-copied']);
});

test('양성: 링크 없이 "Source:" 글자로만 출처를 댄 복사 그림도 차단, "출처: 페블러스" 는 통과', () => {
  const html = page(`<figure><img src="./image/img-02-footnote.png" alt="">
    <figcaption>▲ 각주 | Source: R. O'Donnell, Some exposition (2026)</figcaption></figure>
    <figure><img src="./image/chart.png" alt=""><figcaption>출처: 페블러스 분석</figcaption></figure>`);
  const root = makePost({ 'ko/index.html': html, 'ko/image/img-02-footnote.png': 50_000, 'ko/image/chart.png': 50_000 });
  const r = run(root, ['ko/index.html']);
  assert.strictEqual(r.status, 1);
  assert.deepStrictEqual(r.codes, ['external-copied']);
});

test('반례: 자체 생성 표시(data-origin=pebblous)면 논문 링크를 달아도 통과', () => {
  const html = page(`<figure><img src="./image/fig-1.png" data-origin="pebblous" alt="도식">
    <figcaption>페블러스 원본 도식 (Fig. 2 재해석) — <a href="https://arxiv.org/abs/2401.00001">arXiv:2401.00001</a></figcaption></figure>`);
  const root = makePost({ 'ko/index.html': html, 'ko/image/fig-1.png': 200_000 });
  const r = run(root, ['ko/index.html']);
  assert.strictEqual(r.status, 0);
  assert.deepStrictEqual(r.codes, []);
});

test('반례: 출처 링크 없는 로컬 그림·페블러스 링크·인라인 SVG·data URI 는 통과', () => {
  const html = page(`<figure><img src="./image/chart.png" alt="차트"><figcaption>페블러스 분석</figcaption></figure>
    <figure><img src="./image/b.png" alt="b"><figcaption><a href="https://blog.pebblous.ai/x/">관련 글</a></figcaption></figure>
    <svg viewBox="0 0 10 10"><rect width="10" height="10"/></svg>
    <img src="data:image/png;base64,AAAA" alt="">`);
  const root = makePost({ 'ko/index.html': html, 'ko/image/chart.png': 100_000, 'ko/image/b.png': 100_000 });
  const r = run(root, ['ko/index.html']);
  assert.strictEqual(r.status, 0);
  assert.deepStrictEqual(r.codes, []);
});

test('크기: 1MB 초과 차단, 500KB 초과 경고', () => {
  const html = page(`<img src="./image/big.png" alt=""><img src="./image/mid.jpg" alt="">`);
  const root = makePost({ 'ko/index.html': html, 'ko/image/big.png': 1_200_000, 'ko/image/mid.jpg': 600_000 });
  const r = run(root, ['ko/index.html']);
  assert.strictEqual(r.status, 1);
  assert.deepStrictEqual(r.codes.sort(), ['large', 'too-large']);
});

test('외부 그림: referrerpolicy·출처 링크가 없으면 차단', () => {
  const html = page(`<figure><img src="https://example.com/a.jpg" alt=""><figcaption>▲ 사진</figcaption></figure>`);
  const root = makePost({ 'ko/index.html': html });
  const r = run(root, ['ko/index.html']);
  assert.strictEqual(r.status, 1);
  assert.deepStrictEqual(r.codes.sort(), ['no-referrer', 'no-source']);
});

test('ko/en 같은 그림 두 벌은 경고, ../ko/image 참조는 조용', () => {
  const dup = page(`<img src="./image/c.png" alt="">`);
  const ref = page(`<img src="../ko/image/c.png" alt="">`);
  const same = Buffer.alloc(10_000, 3);
  const root = makePost({
    'ko/index.html': dup, 'ko/image/c.png': same,
    'en/index.html': dup, 'en/image/c.png': same,
  });
  let r = run(root, ['ko/index.html', 'en/index.html']);
  assert.strictEqual(r.status, 0);
  assert.deepStrictEqual(r.codes, ['ko-en-duplicate']);
  fs.writeFileSync(path.join(root, 'en/index.html'), ref);
  r = run(root, ['ko/index.html', 'en/index.html']);
  assert.deepStrictEqual(r.codes, []);
});

test('exit 2: 인자 없음 · exit 3: 파일 없음', () => {
  assert.strictEqual(spawnSync('node', [TOOL], { encoding: 'utf8' }).status, 2);
  assert.strictEqual(spawnSync('node', [TOOL, '/nonexistent/ko/index.html'], { encoding: 'utf8' }).status, 3);
});
