#!/usr/bin/env node
'use strict';

/**
 * validate-articles.js 단위 테스트 — --fix 분기 + provenance 형상 검증.
 * (전역검증·실데이터 일치는 differential 로 별도 확인: python vs node 출력 100% 동일)
 * 실행: node tools/validate-articles.test.js
 */
const { test } = require('node:test');
const assert = require('node:assert');
const v = require('./validate-articles.js');

// strict=false 로 파일존재 검사 비활성(합성 fixture). ogImage 미설정.

test('published 누락 + --fix → true 설정', () => {
  v._reset();
  const a = { id: 'x-ko', title: 'T', date: '2026-06-01', description: 'd', path: 'blog/x/ko/', language: 'ko' };
  const changed = v.validateArticle(a, false, true);
  assert.strictEqual(a.published, true);
  assert.strictEqual(changed, true);
  assert.ok(v.fixes.some((f) => f.includes('published')));
});

test('published 누락 + no-fix → error', () => {
  v._reset();
  const a = { id: 'x-ko', title: 'T', date: '2026-06-01', description: 'd', path: 'blog/x/ko/', language: 'ko' };
  v.validateArticle(a, false, false);
  assert.ok(v.errors.some((e) => e.includes('published')));
});

test('title 누락 + cardTitle + --fix → 복사', () => {
  v._reset();
  const a = { id: 'x-ko', cardTitle: '카드제목', date: '2026-06-01', description: 'd', path: 'p/', language: 'ko', published: true };
  v.validateArticle(a, false, true);
  assert.strictEqual(a.title, '카드제목');
});

test('publishDate → date 변환 + --fix', () => {
  v._reset();
  const a = { id: 'x-ko', title: 'T', publishDate: '2026-06-02', description: 'd', path: 'p/', language: 'ko', published: true };
  v.validateArticle(a, false, true);
  assert.strictEqual(a.date, '2026-06-02');
  assert.ok(!('publishDate' in a));
});

test('path 선행 슬래시 + --fix → 제거', () => {
  v._reset();
  const a = { id: 'x-ko', title: 'T', date: '2026-06-01', description: 'd', path: '/blog/x/ko/', language: 'ko', published: true };
  v.validateArticle(a, false, true);
  assert.strictEqual(a.path, 'blog/x/ko/');
});

test('language 누락 + --fix → id -en 으로 추론', () => {
  v._reset();
  const a = { id: 'x-en', title: 'T', date: '2026-06-01', description: 'd', path: 'blog/x/en/', published: true };
  v.validateArticle(a, false, true);
  assert.strictEqual(a.language, 'en');
});

test('description 누락 + subtitle fallback + --fix', () => {
  v._reset();
  const a = { id: 'x-ko', title: 'T', date: '2026-06-01', subtitle: '부제', path: 'p/', language: 'ko', published: true };
  v.validateArticle(a, false, true);
  assert.strictEqual(a.description, '부제');
});

test('provenance: mode 이상 → error', () => {
  v._reset();
  const a = { id: 'x-ko', title: 'T', date: '2026-06-01', description: 'd', path: 'p/', language: 'ko', published: true,
    provenance: { mode: 'bogus', humanReviewed: false, trigger: { source: 'api' } } };
  v.validateArticle(a, false, false);
  assert.ok(v.errors.some((e) => e.includes('provenance.mode')));
});

test('provenance: 유효 → 오류 없음', () => {
  v._reset();
  const a = { id: 'x-ko', title: 'T', date: '2026-06-01', description: 'd', path: 'p/', language: 'ko', published: true,
    provenance: { mode: 'unattended', humanReviewed: false, trigger: { source: 'api' }, gates: [{ phase: 'w', resolution: 'auto_passed' }] } };
  v.validateArticle(a, false, false);
  assert.deepStrictEqual(v.errors, []);
});

test('provenance: unattended + humanReviewed=true → warn(모순)', () => {
  v._reset();
  const a = { id: 'x-ko', title: 'T', date: '2026-06-01', description: 'd', path: 'p/', language: 'ko', published: true,
    provenance: { mode: 'unattended', humanReviewed: true, trigger: { source: 'api' } } };
  v.validateArticle(a, false, false);
  assert.ok(v.warnings.some((w) => w.includes('모순')));
});

test('provenance: publishReview.reviewed 비boolean → error', () => {
  v._reset();
  const a = { id: 'x-ko', title: 'T', date: '2026-06-01', description: 'd', path: 'p/', language: 'ko', published: true,
    provenance: { mode: 'unattended', humanReviewed: false, trigger: { source: 'api' }, publishReview: { reviewed: 'yes' } } };
  v.validateArticle(a, false, false);
  assert.ok(v.errors.some((e) => e.includes('publishReview.reviewed')));
});

test('정상 글 → 오류·경고·수정 없음', () => {
  v._reset();
  const a = { id: 'x-ko', title: 'T', date: '2026-06-01', description: 'd', path: 'blog/x/ko/', language: 'ko', published: true };
  const changed = v.validateArticle(a, false, false);
  assert.strictEqual(changed, false);
  assert.deepStrictEqual(v.errors, []);
  assert.deepStrictEqual(v.warnings, []);
});
