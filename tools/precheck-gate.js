#!/usr/bin/env node

/**
 * BlogScope precheck gate (Engine-side caller)
 * ────────────────────────────────────────────
 * blog-publish 파이프라인 Step 3.5 게이트. BlogScope 가 제공하는 결정론적
 * 기술 컴플라이언스 검사기(`bloglens.precheck`)를 호출 계약(§4.4)대로 spawn 하고,
 * 그 결과를 호출자(LLM publish-prep)가 오판하지 않도록 exit code 를 결정론적으로
 * 재해석한다.
 *
 * 합의 계약 정본: BlogScope `docs/CONTENT_GREENHOUSE.md §4.4 호출 계약`
 *   (joohaeng-pbls/blogscope, commit 31cef0d / blog-service issue #25)
 *
 * Usage:
 *   node tools/precheck-gate.js <html-path> [<html-path>...]
 *
 * 운반(transport) v1 = 서브프로세스 stdio. precheck 진입점은 환경변수로 주입:
 *   BLOG_PRECHECK_CMD   precheck CLI 명령. 기본값 "python3 -m bloglens.precheck".
 *                       공백으로 토큰 분리(셸 없이 argv 배열로 spawn).
 *                       빈 문자열("")로 설정하면 게이트를 명시적으로 SKIP.
 *   BLOG_PRECHECK_SKIP  "1"이면 무조건 SKIP(exit 0). 롤아웃/디버그용.
 *
 * ⚠️ 핵심 안전장치: precheck 본체가 아직 배포되지 않았을 수 있다(ENOENT,
 * module-not-found). 그런 "도구 부재/오류"는 절대 "콘텐츠 결함(exit 1)"으로
 * 번역하지 않는다 — 그래야 publish-prep 가 멀쩡한 글을 고치려다 재시도 폭주에
 * 빠지지 않는다. 도구측 실패는 exit 2(설정/경로 오류)로 분리한다.
 *
 * Exit codes (계약 §4.4 그대로 전파):
 *   0  blocking 없음 (warning 가능)        → 게이트 통과
 *   1  blocking ≥ 1                         → 콘텐츠 수정 후 재실행
 *   2  인자/사용법/도구 오류                → 파이프라인 설정 오류, 콘텐츠 고치지 말 것
 *   3  입력 파일 없음/읽기 실패             → 경로 오류, 콘텐츠 고치지 말 것
 */

'use strict';

const { spawnSync } = require('child_process');

const DEFAULT_PRECHECK_CMD = 'python3 -m bloglens.precheck';

// Exit code 어휘 (계약과 1:1).
const EXIT = {
  PASS: 0, // blocking 없음
  BLOCKING: 1, // 콘텐츠 결함
  TOOL: 2, // 인자/사용법/도구 오류 (콘텐츠 수정 금지)
  INPUT: 3, // 입력 파일 없음/읽기 실패 (콘텐츠 수정 금지)
};

function log(line) {
  process.stderr.write(line + '\n');
}

/**
 * precheck 가 stdout 으로 낸 봉투를 파싱·검증한다.
 * 계약 envelope: { tool, version, criteriaVersion, summary{files,blocking,warning}, results[] }
 * @returns {{ok:true, envelope:object} | {ok:false, reason:string}}
 */
function parseEnvelope(stdout) {
  const raw = (stdout || '').trim();
  if (!raw) return { ok: false, reason: 'precheck stdout 비어 있음' };
  let env;
  try {
    env = JSON.parse(raw);
  } catch (e) {
    return { ok: false, reason: 'precheck stdout JSON 파싱 실패: ' + e.message };
  }
  if (env === null || typeof env !== 'object' || Array.isArray(env)) {
    return { ok: false, reason: 'precheck 봉투가 객체가 아님' };
  }
  if (!Array.isArray(env.results)) {
    return { ok: false, reason: 'precheck 봉투에 results 배열 없음' };
  }
  return { ok: true, envelope: env };
}

/** 봉투를 사람이 읽을 수 있게 출력한다(호출자 LLM 의 자가수정 신호). */
function reportEnvelope(env) {
  const tool = env.tool || 'precheck';
  const ver = env.version || '?';
  const cver = env.criteriaVersion || '?';
  const s = env.summary || {};
  log(`[precheck] ${tool} v${ver} (criteria ${cver}) — files=${s.files ?? '?'} blocking=${s.blocking ?? '?'} warning=${s.warning ?? '?'}`);

  for (const fileResult of env.results) {
    const file = (fileResult && fileResult.file) || '(unknown)';
    const violations = (fileResult && Array.isArray(fileResult.violations)) ? fileResult.violations : [];
    if (violations.length === 0) continue;
    for (const v of violations) {
      const sev = (v && v.severity) || '?';
      const rule = (v && v.rule) || '?';
      const ln = v && v.line != null ? `:${v.line}` : '';
      const msg = (v && v.message) || '';
      const mark = sev === 'blocking' ? '⛔' : '⚠️';
      log(`  ${mark} [${sev}] ${file}${ln} — ${rule}: ${msg}`);
    }
  }
}

function main() {
  const htmlPaths = process.argv.slice(2).filter((a) => !a.startsWith('--'));

  // ── SKIP 분기 (롤아웃 안전장치) ──────────────────────────────
  // precheck 본체가 아직 배포 안 됐으면 게이트는 무해하게 통과한다.
  if (process.env.BLOG_PRECHECK_SKIP === '1') {
    log('[precheck] BLOG_PRECHECK_SKIP=1 → 게이트 SKIP (통과)');
    process.exit(EXIT.PASS);
  }
  const cmdRaw = process.env.BLOG_PRECHECK_CMD;
  if (cmdRaw !== undefined && cmdRaw.trim() === '') {
    log('[precheck] BLOG_PRECHECK_CMD 빈 문자열 → 게이트 SKIP (통과)');
    process.exit(EXIT.PASS);
  }
  const cmdParts = (cmdRaw && cmdRaw.trim() ? cmdRaw : DEFAULT_PRECHECK_CMD)
    .trim()
    .split(/\s+/);

  if (htmlPaths.length === 0) {
    log('[precheck] 사용법: node tools/precheck-gate.js <html-path> [<html-path>...]');
    log('[precheck] HTML 경로 인자가 없음 → 설정 오류로 처리');
    process.exit(EXIT.TOOL);
  }

  const [bin, ...binArgs] = cmdParts;
  const argv = [...binArgs, ...htmlPaths, '--format', 'json'];

  // 셸 없이 argv 배열로 spawn (인젝션·글로빙 방지).
  const res = spawnSync(bin, argv, {
    encoding: 'utf8',
    maxBuffer: 16 * 1024 * 1024,
  });

  // ── spawn 자체 실패(도구 부재) → 콘텐츠 결함 아님 ───────────────
  if (res.error) {
    const code = res.error.code || '';
    if (code === 'ENOENT') {
      log(`[precheck] 실행 파일 "${bin}" 없음 (ENOENT) — precheck 미배포로 판단.`);
      log('[precheck] → 도구/설정 오류(exit 2). 콘텐츠는 수정하지 말 것.');
    } else {
      log(`[precheck] spawn 실패: ${res.error.message}`);
      log('[precheck] → 도구/설정 오류(exit 2). 콘텐츠는 수정하지 말 것.');
    }
    process.exit(EXIT.TOOL);
  }

  const status = res.status;
  const stdout = res.stdout || '';
  const stderr = res.stderr || '';

  // ── exit 2/3: 도구·인자·경로 오류 — 그대로 전파, 콘텐츠 건드리지 않음 ──
  if (status === EXIT.TOOL || status === EXIT.INPUT) {
    if (stderr.trim()) log('[precheck] (precheck stderr) ' + stderr.trim());
    if (status === EXIT.TOOL) {
      log('[precheck] precheck exit 2 — 인자/사용법/도구 오류. 콘텐츠 수정 금지.');
    } else {
      log('[precheck] precheck exit 3 — 입력 파일 없음/읽기 실패. 경로 확인. 콘텐츠 수정 금지.');
    }
    process.exit(status);
  }

  // ── exit 0/1: 계약상 stdout 에 유효 봉투가 있어야 한다 ─────────────
  if (status === EXIT.PASS || status === EXIT.BLOCKING) {
    const parsed = parseEnvelope(stdout);
    if (!parsed.ok) {
      // exit 0/1 인데 봉투가 깨졌다 → 도구가 계약을 안 지킨 것. 콘텐츠 결함으로
      // 오판하면 안 되므로 도구 오류(exit 2)로 격리한다.
      log('[precheck] precheck 가 exit ' + status + ' 인데 계약 봉투를 못 읽음: ' + parsed.reason);
      if (stderr.trim()) log('[precheck] (precheck stderr) ' + stderr.trim());
      log('[precheck] → 계약 위반(도구 오류, exit 2). 콘텐츠 수정 금지.');
      process.exit(EXIT.TOOL);
    }
    reportEnvelope(parsed.envelope);
    if (status === EXIT.PASS) {
      log('[precheck] ✅ blocking 없음 — 게이트 통과.');
      process.exit(EXIT.PASS);
    }
    log('[precheck] ⛔ blocking 위반 — 위 항목을 수정한 뒤 publish 를 재실행할 것.');
    process.exit(EXIT.BLOCKING);
  }

  // ── 그 외 알 수 없는 exit code → 도구 오류로 격리 ────────────────
  if (stderr.trim()) log('[precheck] (precheck stderr) ' + stderr.trim());
  log(`[precheck] precheck 가 계약 밖 exit code(${status}) 반환 — 도구 오류(exit 2)로 처리. 콘텐츠 수정 금지.`);
  process.exit(EXIT.TOOL);
}

main();
