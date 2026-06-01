'use strict';

/**
 * Tests for tools/precheck-gate.js — the Engine-side caller of the §4.4
 * BlogScope precheck contract. Runs the gate as a real child process against
 * tools/__mocks__/mock-precheck.js so spawn/exit-code handling is exercised
 * end-to-end (not mocked at the module level).
 *
 * Run: node --test tools/precheck-gate.test.js
 */

const { test } = require('node:test');
const assert = require('node:assert');
const { spawnSync } = require('child_process');
const path = require('path');

const GATE = path.join(__dirname, 'precheck-gate.js');
const MOCK = path.join(__dirname, '__mocks__', 'mock-precheck.js');
const SAMPLE_HTML = ['tech/x/ko/index.html', 'tech/x/en/index.html'];

/** Run the gate with a given env, pointing BLOG_PRECHECK_CMD at the mock. */
function runGate({ env = {}, paths = SAMPLE_HTML, useMock = true } = {}) {
  const fullEnv = { ...process.env, ...env };
  if (useMock && fullEnv.BLOG_PRECHECK_CMD === undefined) {
    fullEnv.BLOG_PRECHECK_CMD = `node ${MOCK}`;
  }
  const res = spawnSync('node', [GATE, ...paths], {
    encoding: 'utf8',
    env: fullEnv,
  });
  return { status: res.status, stdout: res.stdout || '', stderr: res.stderr || '' };
}

test('exit 0: no blocking → gate passes', () => {
  const r = runGate({ env: { MOCK_EXIT: '0' } });
  assert.strictEqual(r.status, 0);
  assert.match(r.stderr, /게이트 통과/);
});

test('exit 0: warnings are surfaced loudly even on pass', () => {
  const r = runGate({ env: { MOCK_EXIT: '0' } });
  assert.strictEqual(r.status, 0);
  assert.match(r.stderr, /og_missing/);
  assert.match(r.stderr, /⚠️/);
});

test('exit 1: blocking violation → gate fails with code 1', () => {
  const r = runGate({ env: { MOCK_EXIT: '1' } });
  assert.strictEqual(r.status, 1);
  assert.match(r.stderr, /jsonld_missing/);
  assert.match(r.stderr, /blocking/);
  assert.match(r.stderr, /재실행/);
});

test('exit 2: tool/arg error → propagated as 2, no content blame', () => {
  const r = runGate({ env: { MOCK_EXIT: '2', MOCK_BODY: 'empty' } });
  assert.strictEqual(r.status, 2);
  assert.match(r.stderr, /콘텐츠 수정 금지/);
});

test('exit 3: input missing → propagated as 3, no content blame', () => {
  const r = runGate({ env: { MOCK_EXIT: '3', MOCK_BODY: 'empty' } });
  assert.strictEqual(r.status, 3);
  assert.match(r.stderr, /콘텐츠 수정 금지/);
});

test('exit 1 with garbage stdout → quarantined as tool error (2), not content (1)', () => {
  const r = runGate({ env: { MOCK_EXIT: '1', MOCK_BODY: 'garbage' } });
  assert.strictEqual(r.status, 2);
  assert.match(r.stderr, /계약 봉투를 못 읽음|계약 위반/);
});

test('exit 0 with empty stdout → quarantined as tool error (2)', () => {
  const r = runGate({ env: { MOCK_EXIT: '0', MOCK_BODY: 'empty' } });
  assert.strictEqual(r.status, 2);
});

test('exit 0 with non-object JSON → quarantined as tool error (2)', () => {
  const r = runGate({ env: { MOCK_EXIT: '0', MOCK_BODY: 'notobject' } });
  assert.strictEqual(r.status, 2);
});

test('exit 0 with envelope missing results[] → quarantined as tool error (2)', () => {
  const r = runGate({ env: { MOCK_EXIT: '0', MOCK_BODY: 'noresults' } });
  assert.strictEqual(r.status, 2);
});

test('unknown exit code → quarantined as tool error (2)', () => {
  const r = runGate({ env: { MOCK_EXIT: '42', MOCK_BODY: 'empty' } });
  assert.strictEqual(r.status, 2);
});

test('SKIP via BLOG_PRECHECK_SKIP=1 → passes without calling precheck', () => {
  const r = runGate({ env: { BLOG_PRECHECK_SKIP: '1', BLOG_PRECHECK_CMD: 'node /nonexistent/should-not-run.js' } });
  assert.strictEqual(r.status, 0);
  assert.match(r.stderr, /SKIP/);
});

test('SKIP via empty BLOG_PRECHECK_CMD → passes', () => {
  const r = runGate({ env: { BLOG_PRECHECK_CMD: '' }, useMock: false });
  assert.strictEqual(r.status, 0);
  assert.match(r.stderr, /SKIP/);
});

test('ENOENT (precheck binary not deployed) → tool error (2), not content block', () => {
  const r = runGate({ env: { BLOG_PRECHECK_CMD: 'definitely-not-a-real-binary-xyz' }, useMock: false });
  assert.strictEqual(r.status, 2);
  assert.match(r.stderr, /ENOENT|도구\/설정 오류/);
});

test('no HTML path args → tool error (2)', () => {
  const r = runGate({ paths: [] });
  assert.strictEqual(r.status, 2);
  assert.match(r.stderr, /사용법|HTML 경로/);
});
