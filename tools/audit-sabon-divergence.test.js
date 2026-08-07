#!/usr/bin/env node
'use strict';

/**
 * audit-sabon-divergence.js 단위 테스트 — 4개 분류 + 책임 판정(reverse-divergence).
 * 임시 디렉터리에 진짜 git 레포 두 개를 만들어 실제 git log 로 판정을 검증한다.
 * 실행: node tools/audit-sabon-divergence.test.js
 */
const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const { execFileSync } = require('node:child_process');

const a = require('./audit-sabon-divergence.js');

const SYNC_BOT = 'blog-service-sync-bot';

function git(cwd, ...args) {
  execFileSync('git', ['-C', cwd, ...args], { stdio: 'ignore' });
}

function write(root, rel, content) {
  const abs = path.join(root, rel);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, content);
}

function commit(root, subject, author) {
  git(root, 'add', '-A');
  execFileSync(
    'git',
    ['-C', root, '-c', `user.name=${author}`, '-c', `user.email=${author}@example.com`,
     'commit', '-q', '--author', `${author} <${author}@example.com>`, '-m', subject],
    { stdio: 'ignore' }
  );
}

/**
 * 시나리오 픽스처. 사본은 먼저 sync 봇이 전량 커밋한 뒤, 일부만 사람이 덧칠한다 —
 * 실제 사본의 히스토리 형태와 같게 만들어야 책임 판정이 의미를 갖는다.
 */
function buildFixture() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'sabon-audit-'));
  const jinbon = path.join(tmp, 'jinbon');
  const sabon = path.join(tmp, 'sabon');
  fs.mkdirSync(jinbon);
  fs.mkdirSync(sabon);
  git(sabon, 'init', '-q', '-b', 'main');

  // --- 진본 ---
  write(jinbon, 'CLAUDE.md', '# 정책\n');                        // identical
  write(jinbon, 'tools/keep.js', 'console.log(1);\n');            // identical
  write(jinbon, '.claude/skills/edited/SKILL.md', '진본 버전\n');  // 사본이 덧칠 → reverse-diverged
  write(jinbon, 'docs/pending.md', '진본 최신\n');                 // 진본만 최신 → NOT reverse
  write(jinbon, 'tools/brand-new.js', 'fresh\n');                 // jinbon-only
  write(jinbon, 'docs/seo/disavow.txt', '진본 비밀\n');            // 제외돼야 함
  write(jinbon, '.gitattributes', 'articles.json merge=articles-union\n');

  // --- 사본: 먼저 봇이 미러링 (docs/seo/ 는 애초에 안 나감, brand-new 는 아직 없음) ---
  write(sabon, 'CLAUDE.md', '# 정책\n');
  write(sabon, 'tools/keep.js', 'console.log(1);\n');
  write(sabon, '.claude/skills/edited/SKILL.md', '진본 버전\n');
  write(sabon, 'docs/pending.md', '예전 내용\n');
  write(sabon, 'docs/leftover.md', '진본에서 지워진 문서\n');       // sabon-only, 봇 blame
  write(sabon, '.gitattributes', 'articles.json merge=articles-union\n');
  write(sabon, 'docs/seo/disavow.txt', '사본 쪽 다른 내용\n');      // 제외 확인용
  commit(sabon, 'auto-sync: 진본 blog-service@abc1234', SYNC_BOT);

  // --- 사본에서 사람이 직접 수정 (= reverse-divergence 발생) ---
  write(sabon, '.claude/skills/edited/SKILL.md', '사본에서 고친 버전\n');
  write(sabon, 'tools/sabon-added.js', '사본에만 있는 도구\n');     // sabon-only, 사람 blame
  commit(sabon, 'fix(skill): 사본에서 급히 수정', 'someone');

  return { tmp, jinbon, sabon };
}

const fx = buildFixture();
const { rows } = a.auditDivergence(fx.jinbon, fx.sabon);
const by = Object.fromEntries(rows.map((r) => [r.path, r]));

test('양쪽 동일 → identical, reverse-divergence 아님', () => {
  assert.strictEqual(by['CLAUDE.md'].status, 'identical');
  assert.strictEqual(by['CLAUDE.md'].reverseDiverged, false);
  assert.strictEqual(by['tools/keep.js'].status, 'identical');
});

test('사본에서 직접 수정 → diverged + reverse-divergence 확정', () => {
  const r = by['.claude/skills/edited/SKILL.md'];
  assert.strictEqual(r.status, 'diverged');
  assert.strictEqual(r.reverseDiverged, true);
  assert.strictEqual(r.commit.author, 'someone');
  assert.match(r.note, /충돌 원인/);
});

test('진본만 최신(사본 마지막 손길이 봇) → diverged 지만 reverse-divergence 아님', () => {
  const r = by['docs/pending.md'];
  assert.strictEqual(r.status, 'diverged');
  assert.strictEqual(r.reverseDiverged, false);
  assert.strictEqual(r.commit.author, SYNC_BOT);
  assert.match(r.note, /막힌 sync PR/);
});

test('사본에만 있고 사람이 만듦 → sabon-only + reverse-divergence', () => {
  const r = by['tools/sabon-added.js'];
  assert.strictEqual(r.status, 'sabon-only');
  assert.strictEqual(r.reverseDiverged, true);
});

test('사본에만 있고 봇이 마지막 → 진본에서 삭제된 잔여물 (조치 대상 아님)', () => {
  const r = by['docs/leftover.md'];
  assert.strictEqual(r.status, 'sabon-only');
  assert.strictEqual(r.reverseDiverged, false);
  assert.match(r.note, /잔여물/);
});

test('진본에만 있음 → jinbon-only, reverse-divergence 아님', () => {
  const r = by['tools/brand-new.js'];
  assert.strictEqual(r.status, 'jinbon-only');
  assert.strictEqual(r.reverseDiverged, false);
});

test('docs/seo/ 는 양쪽이 달라도 감사 대상에서 제외', () => {
  assert.strictEqual(by['docs/seo/disavow.txt'], undefined);
  assert.ok(!a.collectPaths(fx.jinbon).has('docs/seo/disavow.txt'));
});

test('봇 커밋 판정 — author 또는 auto-sync: subject', () => {
  assert.strictEqual(a.isSyncBotCommit({ author: SYNC_BOT, subject: '아무거나' }), true);
  assert.strictEqual(a.isSyncBotCommit({ author: 'someone', subject: 'auto-sync: 진본 x@1' }), true);
  assert.strictEqual(a.isSyncBotCommit({ author: 'someone', subject: 'fix: 수정' }), false);
  assert.strictEqual(a.isSyncBotCommit(null), false);
});

test('마크다운 리포트 — reverse-diverged 가 표 위쪽에 오고 ⛔ 로 표시', () => {
  const md = a.renderMarkdown(a.auditDivergence(fx.jinbon, fx.sabon));
  assert.match(md, /reverse-divergence: 2건/);
  const first = md.indexOf('| ⛔ |');
  const dot = md.indexOf('| · |');
  assert.ok(first > 0 && first < dot, 'reverse-diverged 행이 먼저 와야 한다');
  assert.match(md, /조치 필요/);
});

test('일치하는 레포끼리는 reverse-divergence 0 + 성공 메시지', () => {
  const { counts } = a.auditDivergence(fx.jinbon, fx.jinbon);
  assert.strictEqual(counts.reverseDiverged, 0);
  assert.match(a.renderMarkdown(a.auditDivergence(fx.jinbon, fx.jinbon)), /완전히 일치/);
});

test('인자 파싱', () => {
  assert.deepStrictEqual(a.parseArgs(['--sabon', 'x', '--json', 'y.json']),
    { jinbon: '.', sabon: 'x', json: 'y.json', summary: null });
  assert.throws(() => a.parseArgs(['--nope']), /알 수 없는 인자/);
});

process.on('exit', () => fs.rmSync(fx.tmp, { recursive: true, force: true }));
