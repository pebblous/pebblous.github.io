#!/usr/bin/env node
'use strict';

/**
 * inject-provenance.js 단위 테스트 — 삽입/멱등/force/init없음/들여쓰기 정합.
 * 실행: node tools/inject-provenance.test.js
 */
const { test } = require('node:test');
const assert = require('node:assert');
const ip = require('./inject-provenance.js');

const PROV = {
  mode: 'unattended',
  humanReviewed: false,
  trigger: { source: 'api', actor: 'e2e', at: '2026-06-05T00:00:00Z' },
  gates: [{ phase: 'write-ko', resolution: 'auto_passed', by: 'engine' }],
  engine: { runId: 'run-x', version: '0.1.0' },
  recordedAt: '2026-06-05T00:00:00Z',
  publishReview: { reviewed: true, reviewedAt: '2026-06-05', reviewedBy: 'JH (사실·논지 검토)' },
};

const HTML_BASE = `<!DOCTYPE html><html lang="ko"><head><title>T</title></head><body>
<h1 id="page-h1-title"></h1>
<script src="/scripts/common-utils.js"></script>
<script>
        PebblousPage.init({
        mainTitle: "제목",
        subtitle: "부제 \\"인용\\" 포함",
        category: "tech",
        publishDate: "2026-06-05",
        tags: ["a", "b"],
        faqs: [
            { question: "Q1?", answer: "A1." },
            { question: "Q2?", answer: "A2." }
        ]
    });
</script>
</body></html>`;

function provObj(html) {
  const loc = ip.findInitObject(html);
  const sp = ip.findProvenanceSpan(html, loc[0], loc[1]);
  const open = html.indexOf('{', sp[0]);
  return JSON.parse(html.slice(open, sp[1] + 1));
}

test('삽입: status=inserted, 키 존재, 기존 키·FAQ 보존', () => {
  const [out, status] = ip.inject(HTML_BASE, PROV, false);
  assert.strictEqual(status, 'inserted');
  assert.ok(ip.findProvenanceSpan(out, ...ip.findInitObject(out)));
  assert.ok(out.includes('mainTitle: "제목"'));
  assert.strictEqual((out.match(/question:/g) || []).length, 2);
  assert.ok(out.includes('사실·논지 검토'));
});

test('주입된 provenance 가 유효 JSON 이고 원본과 동일', () => {
  const [out] = ip.inject(HTML_BASE, PROV, false);
  assert.deepStrictEqual(provObj(out), PROV);
});

test('들여쓰기 == init 키 들여쓰기 (8칸)', () => {
  const [out] = ip.inject(HTML_BASE, PROV, false);
  const provLine = out.split('\n').find((l) => /^\s*provenance\s*:/.test(l));
  const mainLine = out.split('\n').find((l) => l.includes('mainTitle:'));
  const ind = (l) => l.length - l.trimStart().length;
  assert.strictEqual(ind(provLine), 8);
  assert.strictEqual(ind(provLine), ind(mainLine));
});

test('멱등: 이미 있으면 present, 무변경', () => {
  const [out] = ip.inject(HTML_BASE, PROV, false);
  const [out2, status2] = ip.inject(out, PROV, false);
  assert.strictEqual(status2, 'present');
  assert.strictEqual(out2, out);
});

test('force: replaced, 중복 없음, 새 값 반영, 다른 키 보존', () => {
  const [out] = ip.inject(HTML_BASE, PROV, false);
  const PROV2 = { ...PROV, humanReviewed: true };
  const [out3, status3] = ip.inject(out, PROV2, true);
  assert.strictEqual(status3, 'replaced');
  assert.strictEqual((out3.match(/\bprovenance\s*:/g) || []).length, 1);
  assert.strictEqual(provObj(out3).humanReviewed, true);
  assert.ok(out3.includes('mainTitle: "제목"'));
  assert.strictEqual((out3.match(/question:/g) || []).length, 2);
});

test('init 블록 없음: missing-init', () => {
  const [, status] = ip.inject('<html><body>no init</body></html>', PROV);
  assert.strictEqual(status, 'missing-init');
});

test('주석 init 무시, 실제 script init 에 주입', () => {
  const html = '<!-- PebblousPage.init({ faqs: [] }) -->\n' + HTML_BASE;
  const [out, status] = ip.inject(html, PROV);
  assert.strictEqual(status, 'inserted');
  assert.ok(out.includes('mainTitle: "제목"'));
});
