#!/usr/bin/env node

/**
 * inject-provenance.js — articles.json 의 provenance 를 각 글 HTML 의
 * PebblousPage.init({...}) config 에 주입한다.
 *
 * 배경: 본문 byline 고지(.ai-disclosure)는 `config.provenance` 에서 derive 한다
 * (fetch 없음 — hero-meta 렌더링 원칙). provenance 의 진실 소스는 articles.json
 * (엔진이 프롬프트로 주입 → blog-publish 스킬이 기록). 이 도구는 그 값을 HTML init 에
 * 동기화해 byline 이 실제 라이브에 노출되게 한다. 멱등(idempotent).
 *
 * ⚙️ 런타임: **node** (의도적). publish-prep 는 Engine 컨테이너(node:20-slim, python3
 * 부재 — issue #33)에서 도므로, 이 경로 도구는 node 여야 한다(#25/#33 합의:
 * 런타임 탈결합). precheck-gate.js 와 동형.
 *
 * 표준 근거·결정: docs/blog-service/ai-disclosure.md (이슈 #39)
 * byline derive 로직: scripts/common-utils.js 의 PebblousProvenance.deriveDisclosure
 *
 * 동작:
 *   - 기본    : init 에 provenance 가 없으면 삽입, 있으면 무변경(안전·멱등)
 *   - --force : articles.json 값으로 항상 덮어쓰기(재동기화)
 *   - --check : provenance 보유 글인데 HTML init 에 없으면 exit 1 (CI 게이트)
 *   - --dry-run : 변경 미리보기(쓰기 없음)
 *   - --id <article-id> : 특정 글만
 *
 * Usage:
 *   node tools/inject-provenance.js
 *   node tools/inject-provenance.js --dry-run
 *   node tools/inject-provenance.js --check
 *   node tools/inject-provenance.js --force --id data-freshness-checklist-ko
 *
 * 경로: BLOG_CONTENT_REPO env (없으면 repo root). scan-articles-meta.py 와 동일 규약.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = process.env.BLOG_CONTENT_REPO || path.resolve(__dirname, '..');
const ARTICLES_JSON = path.join(ROOT, 'articles.json');

// ── HTML init 파싱/주입 (순수 함수 — 테스트 용이) ──────────────────────────────

/** articles.json path → HTML 파일 경로 (scan-articles-meta.py 와 동일 규약). */
function resolveHtml(pathVal) {
  let p = pathVal.replace(/^\/+/, '');
  if (p.endsWith('.html')) return path.join(ROOT, p);
  if (!p.endsWith('/')) p += '/';
  return path.join(ROOT, p + 'index.html');
}

/** s[openIdx]==='{' 일 때 매칭되는 '}' 인덱스. 문자열/이스케이프 인지. 실패 시 -1. */
function balanceBraces(s, openIdx) {
  let depth = 0;
  let inStr = null;
  let esc = false;
  for (let i = openIdx; i < s.length; i++) {
    const c = s[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === inStr) inStr = null;
    } else if (c === "'" || c === '"' || c === '`') {
      inStr = c;
    } else if (c === '{') {
      depth++;
    } else if (c === '}') {
      depth--;
      if (depth === 0) return i;
    }
  }
  return -1;
}

/** 첫 <script> 안 PebblousPage.init({...}) 객체의 [braceStart, braceEnd]. 없으면 null. */
function findInitObject(html) {
  const scriptRe = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
  let sm;
  while ((sm = scriptRe.exec(html)) !== null) {
    const inner = sm[1];
    const m = /PebblousPage\.init\(\s*\{/.exec(inner);
    if (!m) continue;
    // inner(group1) 의 절대 시작 = 매치 시작 + 여는태그 길이
    const groupStart = sm.index + (sm[0].length - inner.length - '</script>'.length);
    const braceStart = groupStart + m.index + m[0].length - 1;
    const braceEnd = balanceBraces(html, braceStart);
    return braceEnd !== -1 ? [braceStart, braceEnd] : null;
  }
  return null;
}

/** init 범위 내 top-level `provenance: {...}` 의 [keyStart, valueEnd]. 없으면 null. */
function findProvenanceSpan(html, braceStart, braceEnd) {
  const region = html.slice(braceStart, braceEnd + 1);
  const m = /\bprovenance\s*:\s*\{/.exec(region);
  if (!m) return null;
  const objOpen = braceStart + m.index + m[0].length - 1;
  const valueEnd = balanceBraces(html, objOpen);
  if (valueEnd === -1) return null;
  return [braceStart + m.index, valueEnd];
}

/** init '{' 다음 첫 키 줄의 들여쓰기 칸 수(기존 키와 정합). 기본 4. */
function detectIndent(html, braceStart) {
  const nl = html.indexOf('\n', braceStart);
  if (nl === -1) return 4;
  const m = /^[ \t]*/.exec(html.slice(nl + 1));
  const indent = m ? m[0].length : 0;
  return indent > 0 ? indent : 4;
}

/** init 안에 넣을 `provenance: {...},` 스니펫. articles.json 과 동일 JSON(따옴표 키). */
function formatProvenance(prov, baseIndent = 4) {
  const pad = ' '.repeat(baseIndent);
  const lines = JSON.stringify(prov, null, 2).split('\n');
  const out = [pad + 'provenance: ' + lines[0]];
  for (let i = 1; i < lines.length; i++) out.push(pad + lines[i]);
  return out.join('\n') + ',';
}

/** 기존 `provenance: {...}` + 뒤따르는 콤마/공백/개행 제거한 html. */
function removeSpan(html, span) {
  const [keyStart, valueEnd] = span;
  let tail = valueEnd + 1;
  const m = /^[ \t]*,?[ \t]*\n?/.exec(html.slice(tail));
  tail += m ? m[0].length : 0;
  const pre = html.slice(0, keyStart).replace(/\n[ \t]*$/, '\n');
  return pre + html.slice(tail);
}

/** 반환: [newHtml, status]. status ∈ inserted|replaced|present|missing-init. */
function inject(html, prov, force = false) {
  let loc = findInitObject(html);
  if (!loc) return [html, 'missing-init'];
  let [braceStart, braceEnd] = loc;
  const span = findProvenanceSpan(html, braceStart, braceEnd);

  if (span && !force) return [html, 'present'];

  if (span && force) {
    html = removeSpan(html, span);
    [braceStart, braceEnd] = findInitObject(html);
  }

  const snippet = formatProvenance(prov, detectIndent(html, braceStart));
  const newHtml = html.slice(0, braceStart + 1) + '\n' + snippet + html.slice(braceStart + 1);
  return [newHtml, span && force ? 'replaced' : 'inserted'];
}

// ── 메인 ──────────────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const check = args.includes('--check');
  const force = args.includes('--force');
  let filterId = null;
  const idIdx = args.indexOf('--id');
  if (idIdx !== -1 && idIdx + 1 < args.length) filterId = args[idIdx + 1];

  if (!fs.existsSync(ARTICLES_JSON)) {
    console.error(`❌ articles.json 없음: ${ARTICLES_JSON}`);
    process.exit(2);
  }

  const data = JSON.parse(fs.readFileSync(ARTICLES_JSON, 'utf8'));
  const articles = data.articles || [];

  let targets = articles.filter((a) => a.provenance && typeof a.provenance === 'object' && !Array.isArray(a.provenance));
  if (filterId) targets = targets.filter((a) => a.id === filterId);

  const mode = check ? '검사(--check)' : dryRun ? '미리보기(--dry-run)' : force ? '재동기화(--force)' : '주입';
  console.log(`\n🔖 inject-provenance [${mode}] — provenance 보유 ${targets.length}글\n`);

  let inserted = 0;
  let replaced = 0;
  let present = 0;
  let missingHtml = 0;
  let missingInit = 0;
  let checkFail = 0;

  for (const a of targets) {
    const aid = a.id || '?';
    const htmlFile = resolveHtml(a.path || '');
    if (!fs.existsSync(htmlFile)) {
      console.log(`  ⚠️  [${aid}] HTML 없음: ${path.relative(ROOT, htmlFile)}`);
      missingHtml++;
      continue;
    }

    const html = fs.readFileSync(htmlFile, 'utf8');

    if (check) {
      const loc = findInitObject(html);
      const has = loc && findProvenanceSpan(html, loc[0], loc[1]);
      if (!has) {
        console.log(`  ❌ [${aid}] init 에 provenance 없음`);
        checkFail++;
      }
      continue;
    }

    const [newHtml, status] = inject(html, a.provenance, force);
    if (status === 'missing-init') {
      console.log(`  ⚠️  [${aid}] PebblousPage.init 블록 없음 — 건너뜀`);
      missingInit++;
      continue;
    }
    if (status === 'present') {
      present++;
      continue;
    }

    const verb = status === 'inserted' ? '삽입' : '덮어씀';
    console.log(`  ${dryRun ? '·' : '🔧'} [${aid}] provenance ${verb} → ${a.path}`);
    if (status === 'inserted') inserted++;
    else replaced++;
    if (!dryRun) fs.writeFileSync(htmlFile, newHtml);
  }

  console.log();
  if (check) {
    console.log(`요약: 누락 ${checkFail} / 검사 대상 ${targets.length}`);
    if (checkFail) console.log('→ `node tools/inject-provenance.js` 로 주입 필요');
    process.exit(checkFail ? 1 : 0);
  }

  const parts = [];
  if (inserted) parts.push(`삽입 ${inserted}`);
  if (replaced) parts.push(`덮어씀 ${replaced}`);
  if (present) parts.push(`이미존재 ${present}`);
  if (missingHtml) parts.push(`HTML없음 ${missingHtml}`);
  if (missingInit) parts.push(`init없음 ${missingInit}`);
  console.log('요약: ' + (parts.length ? parts.join(', ') : '변경 없음') + (dryRun ? ' (dry-run, 미저장)' : ''));
  process.exit(0);
}

module.exports = {
  resolveHtml,
  balanceBraces,
  findInitObject,
  findProvenanceSpan,
  detectIndent,
  formatProvenance,
  removeSpan,
  inject,
};

if (require.main === module) main();
