#!/usr/bin/env node
'use strict';

/**
 * generate-sitemap.js 단위 테스트 — lastmod 계산(작성일·modified·git 마지막 수정일·무시 목록·얕은 이력).
 * 실행: node tools/generate-sitemap.test.js
 */
const { test } = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const g = require('./generate-sitemap.js');

function git(repo, args, date) {
  const env = { ...process.env, GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date,
    GIT_AUTHOR_NAME: 't', GIT_AUTHOR_EMAIL: 't@t', GIT_COMMITTER_NAME: 't', GIT_COMMITTER_EMAIL: 't@t' };
  return execFileSync('git', ['-C', repo, ...args], { encoding: 'utf8', env }).trim();
}
function commitFile(repo, file, body, date) {
  fs.mkdirSync(path.dirname(path.join(repo, file)), { recursive: true });
  fs.writeFileSync(path.join(repo, file), body);
  git(repo, ['add', file], date);
  git(repo, ['commit', '-q', '-m', `edit ${file}`], date);
  return git(repo, ['rev-parse', 'HEAD'], date);
}
function fixtureRepo() {
  const repo = fs.mkdtempSync(path.join(os.tmpdir(), 'sitemap-'));
  execFileSync('git', ['init', '-q', repo]);
  commitFile(repo, 'blog/a/ko/index.html', 'v1', '2026-01-10T00:00:00Z');
  commitFile(repo, 'blog/a/ko/index.html', 'v2', '2026-03-05T00:00:00Z');
  commitFile(repo, 'blog/b/ko/index.html', 'v1', '2026-02-01T00:00:00Z');
  const cosmetic = commitFile(repo, 'blog/b/ko/index.html', 'v1-css', '2026-04-12T00:00:00Z');
  commitFile(repo, 'project/X/page.html', 'v1', '2026-02-20T00:00:00Z');
  return { repo, cosmetic };
}

test('htmlFileFor: 폴더 경로와 .html 경로', () => {
  assert.strictEqual(g.htmlFileFor('blog/a/ko/'), 'blog/a/ko/index.html');
  assert.strictEqual(g.htmlFileFor('blog/a/ko'), 'blog/a/ko/index.html');
  assert.strictEqual(g.htmlFileFor('project/X/page.html'), 'project/X/page.html');
});

test('gitLastModified: 파일마다 가장 최근 커밋 날짜', () => {
  const { repo } = fixtureRepo();
  const m = g.gitLastModified(repo);
  assert.strictEqual(m.get('blog/a/ko/index.html'), '2026-03-05');
  assert.strictEqual(m.get('blog/b/ko/index.html'), '2026-04-12');
  assert.strictEqual(m.get('project/X/page.html'), '2026-02-20');
});

test('한글·공백 폴더 이름도 글 경로 그대로 잡는다', () => {
  const { repo } = fixtureRepo();
  commitFile(repo, 'project/World Model/한글/index.html', 'v1', '2026-05-05T00:00:00Z');
  const m = g.gitLastModified(repo);
  assert.strictEqual(m.get(g.htmlFileFor('project/World Model/한글/')), '2026-05-05');
});

test('무시 목록의 꾸밈 커밋은 건너뛰고 그 전 수정일을 쓴다', () => {
  const { repo, cosmetic } = fixtureRepo();
  const m = g.gitLastModified(repo, new Set([cosmetic]));
  assert.strictEqual(m.get('blog/b/ko/index.html'), '2026-02-01');
});

test('얕은 클론이면 git 날짜를 쓰지 않는다(빈 Map)', () => {
  const { repo } = fixtureRepo();
  const shallow = fs.mkdtempSync(path.join(os.tmpdir(), 'sitemap-shallow-'));
  fs.rmSync(shallow, { recursive: true });
  execFileSync('git', ['clone', '-q', '--depth', '1', `file://${repo}`, shallow]);
  assert.strictEqual(g.gitLastModified(shallow).size, 0);
});

test('git 저장소가 아니면 빈 Map', () => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'sitemap-nogit-'));
  assert.strictEqual(g.gitLastModified(dir).size, 0);
});

test('computeLastmod: 작성일과 git 날짜 중 늦은 날, 미래는 오늘로', () => {
  const gm = new Map([['blog/a/ko/index.html', '2026-03-05']]);
  assert.strictEqual(g.computeLastmod({ path: 'blog/a/ko/', date: '2026-01-10' }, gm, '2026-11-06'), '2026-03-05');
  assert.strictEqual(g.computeLastmod({ path: 'blog/z/ko/', date: '2026-01-10', modified: '2026-06-01T09:00:00+09:00' }, gm, '2026-11-06'), '2026-06-01');
  assert.strictEqual(g.computeLastmod({ path: 'blog/z/ko/', date: '2026-02-02' }, gm, '2026-11-06'), '2026-02-02');
  assert.strictEqual(g.computeLastmod({ path: 'blog/z/ko/', date: '2027-01-01' }, gm, '2026-11-06'), '2026-11-06');
  assert.strictEqual(g.computeLastmod({ path: 'blog/z/ko/' }, gm, '2026-11-06'), '2026-11-06');
});

test('git 날짜가 있으면 modified 는 보지 않는다(무시한 꾸밈 커밋 날짜가 modified 로 되살아나지 않게)', () => {
  const gm = new Map([['blog/b/ko/index.html', '2026-02-01']]);
  assert.strictEqual(g.computeLastmod({ path: 'blog/b/ko/', date: '2026-01-10', modified: '2026-04-12' }, gm, '2026-11-06'), '2026-02-01');
});

test('git 날짜가 작성일보다 이르면 작성일을 쓴다', () => {
  const gm = new Map([['blog/a/ko/index.html', '2025-12-01']]);
  assert.strictEqual(g.computeLastmod({ path: 'blog/a/ko/', date: '2026-01-10' }, gm, '2026-11-06'), '2026-01-10');
});

test('무시 목록 파일: SHA 만 읽고 설명·빈 줄은 버린다', () => {
  const f = path.join(fs.mkdtempSync(path.join(os.tmpdir(), 'sitemap-ign-')), 'ign.txt');
  fs.writeFileSync(f, '# 머리\n\nabc123  # 설명\n def456\n');
  assert.deepStrictEqual([...g.loadIgnoreList(f)], ['abc123', 'def456']);
  assert.strictEqual(g.loadIgnoreList('/nonexistent/file').size, 0);
});

test('실제 무시 목록은 40자 SHA 만 담는다', () => {
  for (const sha of g.loadIgnoreList()) assert.match(sha, /^[0-9a-f]{40}$/);
});
