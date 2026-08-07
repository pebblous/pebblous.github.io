#!/usr/bin/env node

/**
 * 진본↔사본 자산 2/3 갈라짐(reverse-divergence) 감사.
 *
 * 왜 필요한가: 사본(pebblous/pebblous.github.io)에서 자산 2/3을 직접 수정하면 진본 미러와
 * 갈라진다. 진본이 같은 파일을 바꾸는 순간 auto-sync PR이 충돌하고, 사본 main 이 그 변경을
 * 못 받은 채 남으니 다음 sync 도 같은 파일에서 같은 충돌을 낸다(캐스케이드). 그런데 어느
 * 파일이 갈라졌는지 알 방법이 없었다 — 이 도구가 그걸 목록으로 만든다.
 *
 * ⚙️ 런타임 = node. 이 레포에서 단위 테스트가 붙은 도구는 전부 node(node:test)이고,
 * PR #48(validate-articles → node)이 세운 방향을 따른다. 외부 의존성 없음.
 *
 * Usage:
 *   node tools/audit-sabon-divergence.js --sabon <사본경로>
 *   node tools/audit-sabon-divergence.js --sabon sabon --json report.json
 *   node tools/audit-sabon-divergence.js --sabon sabon --summary "$GITHUB_STEP_SUMMARY"
 *
 * 종료 코드: reverse-diverged 파일이 하나라도 있으면 1, 없으면 0.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

// ⛔ 이 목록은 .github/workflows/sync-to-sabon.yml 의 rsync 규칙과 1:1 대응해야 한다.
// 어긋나면 sync 가 건드리지도 않는 파일을 갈라졌다고 보고하는 오탐이 난다.
const SYNC_TARGETS = [
  { src: 'tools', kind: 'dir', exclude: [] },
  { src: '.claude/skills', kind: 'dir', exclude: [] },
  { src: '.claude/agents', kind: 'dir', exclude: [] },
  { src: 'CLAUDE.md', kind: 'file' },
  // docs/seo/ 는 사본에 내보내지 않는다 — disavow 등 스팸 도메인 목록이 public 사본에
  // 노출되면 안 됨. rsync --exclude='seo/' 와 같은 의미(경로 어디든 seo 디렉터리).
  { src: 'docs', kind: 'dir', exclude: ['seo'] },
  { src: '.gitattributes', kind: 'file' },
];

// sync 워크플로우가 사본에 커밋할 때 쓰는 정체. 이걸로 "사본이 고쳤다"와
// "진본 변경이 아직 안 들어갔다"를 가른다.
const SYNC_BOT_AUTHOR = 'blog-service-sync-bot';
const SYNC_SUBJECT_RE = /^auto-sync:/;

/** 디렉터리를 훑어 레포 루트 기준 상대경로 집합을 만든다. */
function walk(absDir, relDir, exclude, out) {
  let entries;
  try {
    entries = fs.readdirSync(absDir, { withFileTypes: true });
  } catch {
    return; // 한쪽에만 없는 디렉터리 — 정상
  }
  for (const e of entries) {
    if (exclude.includes(e.name)) continue; // rsync 의 비-앵커 패턴과 동일하게 이름으로 매치
    const abs = path.join(absDir, e.name);
    const rel = path.posix.join(relDir, e.name);
    if (e.isSymbolicLink()) continue; // rsync -a 는 링크를 보존하지만 내용 비교 대상은 아님
    if (e.isDirectory()) walk(abs, rel, exclude, out);
    else if (e.isFile()) out.add(rel);
  }
}

/** 한쪽 레포에서 sync 대상 경로 전체를 수집한다. */
function collectPaths(root) {
  const out = new Set();
  for (const t of SYNC_TARGETS) {
    const abs = path.join(root, t.src);
    if (t.kind === 'file') {
      if (fs.existsSync(abs)) out.add(t.src);
      continue;
    }
    walk(abs, t.src, t.exclude || [], out);
  }
  return out;
}

function hashFile(root, rel) {
  return crypto.createHash('sha256').update(fs.readFileSync(path.join(root, rel))).digest('hex');
}

/** 사본에서 해당 경로를 마지막으로 건드린 커밋. 히스토리가 없으면 null. */
function lastCommit(sabonRoot, rel) {
  let out;
  try {
    out = execFileSync(
      'git',
      ['-C', sabonRoot, 'log', '-1', '--format=%H%x09%ad%x09%an%x09%s', '--date=short', '--', rel],
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    ).trim();
  } catch {
    return null; // git 레포가 아니거나 shallow clone
  }
  if (!out) return null;
  const parts = out.split('\t');
  return {
    sha: (parts[0] || '').slice(0, 7),
    date: parts[1] || '',
    author: parts[2] || '',
    subject: parts.slice(3).join('\t'),
  };
}

function isSyncBotCommit(c) {
  if (!c) return false;
  return c.author === SYNC_BOT_AUTHOR || SYNC_SUBJECT_RE.test(c.subject);
}

/**
 * 파일 하나를 분류한다.
 *
 * status:
 *   identical   — 정상 상태
 *   diverged    — 양쪽 존재, 내용 다름
 *   sabon-only  — 사본에만 존재 (rsync --delete 미사용이라 보존됨)
 *   jinbon-only — 진본에만 존재 → sync 가 아직 안 들어감
 *
 * reverseDiverged: 사본 쪽 마지막 손길이 sync 봇이 아닐 때만 참.
 *   내용이 다르다는 사실만으로는 "사본이 고쳤다"와 "진본 변경이 못 들어갔다"를 구분할 수 없다.
 */
function classifyOne(rel, { inJinbon, inSabon, sameContent, commit }) {
  let status;
  if (inJinbon && inSabon) status = sameContent ? 'identical' : 'diverged';
  else if (inSabon) status = 'sabon-only';
  else status = 'jinbon-only';

  const byBot = isSyncBotCommit(commit);
  const reverseDiverged = (status === 'diverged' || status === 'sabon-only') && !byBot;

  let note = '';
  if (status === 'diverged') {
    note = reverseDiverged
      ? '사본에서 직접 수정됨 — 충돌 원인'
      : '진본의 최신 변경이 사본에 못 들어감 (막힌 sync PR)';
  } else if (status === 'sabon-only') {
    note = reverseDiverged
      ? '사본에만 추가됨 — 진본에 없음'
      : '진본에서 삭제된 잔여물 (rsync --delete 미사용)';
  } else if (status === 'jinbon-only') {
    note = '진본에 새로 생겼고 사본에 아직 없음 (sync 대기/실패)';
  }

  return { path: rel, status, reverseDiverged, note, commit: commit || null };
}

/** 두 레포를 비교해 전체 리포트를 만든다. */
function auditDivergence(jinbonRoot, sabonRoot) {
  const j = collectPaths(jinbonRoot);
  const s = collectPaths(sabonRoot);
  const all = [...new Set([...j, ...s])].sort();

  const rows = all.map((rel) => {
    const inJinbon = j.has(rel);
    const inSabon = s.has(rel);
    const sameContent =
      inJinbon && inSabon && hashFile(jinbonRoot, rel) === hashFile(sabonRoot, rel);
    // git log 는 사본에만 물어본다 — 판정 대상이 "사본 쪽 마지막 손길"이라서.
    const needsBlame = !(inJinbon && inSabon && sameContent) && inSabon;
    const commit = needsBlame ? lastCommit(sabonRoot, rel) : null;
    return classifyOne(rel, { inJinbon, inSabon, sameContent, commit });
  });

  const counts = rows.reduce((acc, r) => {
    acc[r.status] = (acc[r.status] || 0) + 1;
    return acc;
  }, {});
  counts.reverseDiverged = rows.filter((r) => r.reverseDiverged).length;

  return { rows, counts };
}

/** 사람이 읽을 마크다운 리포트. 조치가 필요한 행만 표로 낸다. */
function renderMarkdown({ rows, counts }) {
  const L = [];
  L.push('## 진본↔사본 자산 2/3 갈라짐 감사');
  L.push('');
  L.push(
    `- 일치: **${counts.identical || 0}** / 갈라짐: **${counts.diverged || 0}** / ` +
      `사본에만: **${counts['sabon-only'] || 0}** / 진본에만: **${counts['jinbon-only'] || 0}**`
  );
  L.push(`- **reverse-divergence: ${counts.reverseDiverged}건**`);
  L.push('');

  const actionable = rows.filter((r) => r.status !== 'identical');
  if (!actionable.length) {
    L.push('✅ 진본과 사본의 자산 2/3이 완전히 일치한다.');
    return L.join('\n') + '\n';
  }

  // reverse-diverged 를 위로 — 그게 충돌을 만드는 행이다.
  actionable.sort((a, b) => Number(b.reverseDiverged) - Number(a.reverseDiverged) ||
    a.path.localeCompare(b.path));

  L.push('| | 파일 | 분류 | 사본 마지막 커밋 | 설명 |');
  L.push('|---|---|---|---|---|');
  for (const r of actionable) {
    const mark = r.reverseDiverged ? '⛔' : '·';
    const c = r.commit ? `\`${r.commit.sha}\` ${r.commit.date} ${r.commit.author}` : '—';
    L.push(`| ${mark} | \`${r.path}\` | ${r.status} | ${c} | ${r.note} |`);
  }
  L.push('');

  if (counts.reverseDiverged) {
    L.push('### ⛔ 조치 필요');
    L.push('');
    L.push('위 ⛔ 파일은 사본에서 직접 수정돼 진본과 갈라졌다. **사본 PR에서 충돌만 풀면');
    L.push('다음 sync 때 재발한다** — 살릴 변경이면 진본으로 reverse-sync 해야 끝난다.');
    L.push('절차: `docs/blog-service/sync.md` → "사본에 auto-sync PR이 열린 채 쌓여 있다"');
  }
  return L.join('\n') + '\n';
}

function parseArgs(argv) {
  const opts = { jinbon: '.', sabon: null, json: null, summary: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--jinbon') opts.jinbon = argv[++i];
    else if (a === '--sabon') opts.sabon = argv[++i];
    else if (a === '--json') opts.json = argv[++i];
    else if (a === '--summary') opts.summary = argv[++i];
    else if (a === '--help' || a === '-h') opts.help = true;
    else throw new Error(`알 수 없는 인자: ${a}`);
  }
  return opts;
}

function main() {
  let opts;
  try {
    opts = parseArgs(process.argv.slice(2));
  } catch (e) {
    console.error(`❌ ${e.message}`);
    process.exit(2);
  }
  if (opts.help || !opts.sabon) {
    console.error('Usage: node tools/audit-sabon-divergence.js --sabon <사본경로> [--jinbon <경로>] [--json <파일>] [--summary <파일>]');
    process.exit(opts.help ? 0 : 2);
  }
  if (!fs.existsSync(opts.sabon)) {
    console.error(`❌ 사본 경로를 찾을 수 없다: ${opts.sabon}`);
    process.exit(2);
  }

  const report = auditDivergence(opts.jinbon, opts.sabon);
  const md = renderMarkdown(report);
  process.stdout.write(md);

  if (opts.json) fs.writeFileSync(opts.json, JSON.stringify(report, null, 2) + '\n');
  if (opts.summary) fs.appendFileSync(opts.summary, md);

  process.exit(report.counts.reverseDiverged ? 1 : 0);
}

module.exports = {
  SYNC_TARGETS,
  collectPaths,
  classifyOne,
  isSyncBotCommit,
  lastCommit,
  auditDivergence,
  renderMarkdown,
  parseArgs,
};

if (require.main === module) main();
