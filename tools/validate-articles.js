#!/usr/bin/env node

/**
 * articles.json validator & fixer (node 포팅)
 * 새 아티클 추가 전/후 실행해서 실제로 문제가 됐던 항목을 검증한다.
 *
 * ⚙️ 런타임 = node (의도적). publish-prep 는 Engine 컨테이너(node:20-slim, python3
 * 부재 — 이슈 #33)에서 돈다. validate-articles 가 publish-prep 의 마지막 python
 * hard-dep 였으므로 node 로 포팅해 컨테이너 자급(#25/#33 런타임 탈결합 합의).
 * 기존 `validate-articles.py` 의 동작을 1:1 유지.
 *
 * Usage:
 *   node tools/validate-articles.js            # 전체 검증
 *   node tools/validate-articles.js --fix      # 자동 수정
 *   node tools/validate-articles.js --new      # 최근 60일 이내 아티클만 엄격 검증
 *   node tools/validate-articles.js --id <id>  # 특정 아티클만
 *
 * 검증 항목: published/title/date(publishDate변환)/description/path(슬래시·index.html)/
 *   ogImage 존재/파일 존재/language/noindex 충돌/provenance 형상 +
 *   전역(category 정의·featured≤3·중복 ID).
 */
'use strict';

const fs = require('fs');
const path = require('path');

// Asset 1(content repo) 위치. 파일 존재 검사는 TOOL_ROOT(도구가 사는 레포),
// articles.json 은 BLOG_CONTENT_REPO 기준 — 기존 .py 동작 그대로 보존.
const TOOL_ROOT = path.resolve(__dirname, '..');
const BLOG_CONTENT_REPO = process.env.BLOG_CONTENT_REPO || TOOL_ROOT;
const ARTICLES_JSON = path.join(BLOG_CONTENT_REPO, 'articles.json');

const errors = [];
const warnings = [];
const fixes = [];

const err = (aid, msg) => errors.push(`  ❌ [${aid}] ${msg}`);
const warn = (aid, msg) => warnings.push(`  ⚠️  [${aid}] ${msg}`);
const fixMsg = (aid, msg) => fixes.push(`  🔧 [${aid}] ${msg}`);

function _reset() {
  errors.length = 0;
  warnings.length = 0;
  fixes.length = 0;
}

/** os.path.join 의미 모방 — 경계에만 '/' 삽입, 컴포넌트 내부 '//'(예: https://)는 보존.
 *  node path.join 은 '//'를 정규화하므로 .py 와 출력이 어긋남(외부 URL path 레거시 글). */
function joinPy(...parts) {
  let out = parts[0];
  for (let i = 1; i < parts.length; i++) out += (out.endsWith('/') ? '' : '/') + parts[i];
  return out;
}

/** articles.json path 값을 실제 파일 경로로 변환 (.py resolve_path 와 동일, TOOL_ROOT 기준). */
function resolvePath(pathVal) {
  const p = pathVal.replace(/^\/+/, '');
  if (p.endsWith('.html')) return joinPy(TOOL_ROOT, p);
  return joinPy(TOOL_ROOT, p, 'index.html');
}

/** 단일 아티클 검증. a 를 (auto_fix 시) 변형. 반환: changed(bool). */
function validateArticle(a, strict = true, autoFix = false) {
  const aid = a.id || '(no-id)';
  let changed = false;

  // 1. published null/missing
  const pub = a.published;
  if (pub === undefined || pub === null) {
    if (autoFix) {
      a.published = true;
      fixMsg(aid, 'published null/missing → true 로 자동 설정');
      changed = true;
    } else {
      err(aid, 'published=null/missing → .filter(a => a.published) 에서 걸러짐 (--fix 로 수정 가능)');
    }
  } else if (pub === false) {
    warn(aid, 'published=false — 의도적인 비공개라면 무시');
  }

  // 2. title missing (cardTitle fallback)
  if (!a.title) {
    if (a.cardTitle) {
      if (autoFix) {
        a.title = a.cardTitle;
        fixMsg(aid, `title 없음 → cardTitle 복사: '${a.cardTitle.slice(0, 50)}'`);
        changed = true;
      } else {
        err(aid, 'title 없음 (cardTitle 있음 → --fix 로 자동 복사 가능)');
      }
    } else {
      err(aid, 'title 없음 — 필수 필드 누락');
    }
  }

  // 3. date missing / publishDate→date 변환
  if (!a.date) {
    if (a.publishDate) {
      if (autoFix) {
        a.date = a.publishDate;
        delete a.publishDate;
        fixMsg(aid, `publishDate → date 변환: ${a.date}`);
        changed = true;
      } else {
        err(aid, 'date 없음 (publishDate 있음 → --fix 로 변환 가능)');
      }
    } else {
      err(aid, 'date 없음 — 필수 필드 누락');
    }
  } else if ('publishDate' in a) {
    if (autoFix) {
      delete a.publishDate;
      fixMsg(aid, 'publishDate 중복 제거 (date 이미 존재)');
      changed = true;
    }
  }

  // 4. description missing (cardDescription/subtitle/title fallback)
  if (!a.description) {
    const fallback = a.cardDescription || a.subtitle || a.title || '';
    const src = a.cardDescription ? 'cardDescription' : (a.subtitle ? 'subtitle' : 'title');
    if (fallback && autoFix) {
      a.description = fallback;
      fixMsg(aid, `description 없음 → ${src} 복사: '${fallback.slice(0, 50)}'`);
      changed = true;
    } else if (!fallback) {
      err(aid, 'description 없음 — RSS 생성 에러 발생');
    } else {
      err(aid, `description 없음 (${src} 있음 → --fix 로 자동 복사 가능)`);
    }
  }

  // 5. path 선행 슬래시
  const path0 = a.path || '';
  if (path0.startsWith('/')) {
    if (autoFix) {
      a.path = path0.replace(/^\/+/, '');
      fixMsg(aid, `path 선행 슬래시 제거: '${path0}' → '${a.path}'`);
      changed = true;
    } else {
      err(aid, `path 선행 슬래시: '${path0}' → 링크 깨짐 (--fix 로 수정)`);
    }
  }

  // 6. path ends with index.html
  if (path0.endsWith('index.html')) {
    const newPath = path0.replace('index.html', '');
    if (autoFix) {
      a.path = newPath;
      fixMsg(aid, `path index.html 제거: '${path0}' → '${newPath}'`);
      changed = true;
    } else {
      warn(aid, `path가 index.html로 끝남: '${path0}' → 디렉토리 형식 권장 (--fix)`);
    }
  }

  // 7. ogImage 파일 존재 여부
  const og = a.ogImage || '';
  if (og) {
    const ogAbs = path.join(TOOL_ROOT, og.replace(/^\/+/, ''));
    if (!fs.existsSync(ogAbs)) err(aid, `ogImage 파일 없음: ${og}`);
  }

  // 8. path 실제 파일 존재 (strict 모드만, warn)
  if (strict && path0) {
    const full = resolvePath(path0);
    if (!fs.existsSync(full)) warn(aid, `파일 없음: ${full.replace(TOOL_ROOT + '/', '')}`);
  }

  // 9. language 필드 필수
  if (!a.language) {
    if (autoFix) {
      a.language = (aid.endsWith('-en') || path0.includes('/en/')) ? 'en' : 'ko';
      fixMsg(aid, `language 없음 → '${a.language}' 자동 추론`);
      changed = true;
    } else {
      err(aid, 'language 필드 없음 — 필수 (--fix 로 자동 추론 가능)');
    }
  }

  // 10. noindex 충돌 (published=true 인데 HTML 에 noindex)
  if (a.published && path0) {
    const full = resolvePath(path0);
    if (fs.existsSync(full)) {
      try {
        const head = fs.readFileSync(full, 'utf8').slice(0, 2000);
        const hasNoindex = head.includes('noindex');
        const isRedirect = head.includes('http-equiv="refresh"') || head.includes('location.replace');
        if (hasNoindex && !isRedirect) {
          err(aid, 'published=true인데 HTML에 noindex → Google 미인덱싱 (noindex 제거 또는 published=false)');
        } else if (hasNoindex && isRedirect) {
          if (autoFix) {
            const m = head.match(/url=\.?\/?(.*?)\/?["']/) || head.match(/location\.replace\(['"]\.?\/?(.*?)\/?['"]\)/);
            if (m) {
              const target = m[1].replace(/^[./]+|[./]+$/g, '');
              const parent = path.posix.dirname(path0);
              const newPath = path.posix.normalize(path.posix.join(parent, target)) + '/';
              if (fs.existsSync(path.join(TOOL_ROOT, newPath, 'index.html'))) {
                a.path = newPath;
                fixMsg(aid, `redirect stub path → ${newPath}`);
                changed = true;
              }
            }
          } else {
            err(aid, 'path가 redirect stub(noindex) → 실제 콘텐츠 경로로 변경 필요 (--fix)');
          }
        }
      } catch (_) { /* ignore */ }
    }
  }

  // 14. provenance 형상 검증 (optional)
  const prov = a.provenance;
  if (prov !== undefined && prov !== null) {
    if (typeof prov !== 'object' || Array.isArray(prov)) {
      err(aid, 'provenance 가 객체가 아님 — Engine 이 준 JSON 을 그대로 넣을 것');
    } else {
      const mode = prov.mode;
      if (mode !== 'attended' && mode !== 'unattended') {
        err(aid, `provenance.mode 값 이상: ${JSON.stringify(mode)} (attended|unattended 만 허용)`);
      }
      if (typeof prov.humanReviewed !== 'boolean') {
        err(aid, 'provenance.humanReviewed 는 boolean 이어야 함 (배지의 진실 소스)');
      }
      const trig = prov.trigger || {};
      if (!['manual', 'api', 'mcp', 'webhook', 'scheduled'].includes(trig.source)) {
        err(aid, `provenance.trigger.source 값 이상: ${JSON.stringify(trig.source)}`);
      }
      const gates = prov.gates;
      if (gates !== undefined && gates !== null && !Array.isArray(gates)) {
        err(aid, 'provenance.gates 는 배열이어야 함');
      } else if (Array.isArray(gates)) {
        for (const g of gates) {
          if (g && typeof g === 'object' && !['human_resumed', 'auto_passed'].includes(g.resolution)) {
            err(aid, `provenance.gates[].resolution 값 이상: ${JSON.stringify(g.resolution)}`);
          }
        }
      }
      const pubRev = prov.publishReview;
      if (pubRev !== undefined && pubRev !== null) {
        if (typeof pubRev !== 'object' || Array.isArray(pubRev)) {
          err(aid, 'provenance.publishReview 는 객체여야 함 {reviewed, reviewedAt?, reviewedBy?}');
        } else if (typeof pubRev.reviewed !== 'boolean') {
          err(aid, 'provenance.publishReview.reviewed 는 boolean 이어야 함');
        }
      }
      if (mode === 'unattended' && prov.humanReviewed === true) {
        warn(aid, 'provenance: mode=unattended 인데 humanReviewed=true — 모순. '
          + '발행 전 검토라면 humanReviewed=false + publishReview.reviewed=true 로 기록');
      }
    }
  }

  return changed;
}

function main() {
  const argv = process.argv.slice(2);
  const autoFix = argv.includes('--fix');
  const newOnly = argv.includes('--new');
  let filterId = null;
  const idIdx = argv.indexOf('--id');
  if (idIdx !== -1) filterId = idIdx + 1 < argv.length ? argv[idIdx + 1] : null;

  const data = JSON.parse(fs.readFileSync(ARTICLES_JSON, 'utf8'));
  const articles = data.articles || [];

  let cutoff = null;
  if (newOnly) {
    const d = new Date(Date.now() - 60 * 86400 * 1000);
    cutoff = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  }

  const target = [];
  for (const a of articles) {
    if (filterId && a.id !== filterId) continue;
    if (cutoff && (a.date || '') < cutoff) continue;
    target.push(a);
  }

  const scopeLabel = newOnly ? '최근 60일' : '전체';
  console.log(`\n📋 articles.json 검증 (${scopeLabel}, ${target.length}/${articles.length}개)\n`);

  let anyChanged = false;
  for (const a of target) {
    if (validateArticle(a, true, autoFix)) anyChanged = true;
  }

  // === 전역 검증 ===
  // Category 정의 (Issue #127)
  const definedCategories = new Set(Object.keys(data.categories || {}));
  if (definedCategories.size) {
    for (const a of articles) {
      const cat = a.category;
      if (cat && !definedCategories.has(cat)) {
        err(a.id || '?', `category '${cat}' 미정의 — 허용: ${JSON.stringify([...definedCategories].sort())}`);
      }
    }
  }

  // Featured: 카테고리당 최대 3
  const featuredByCat = {};
  for (const a of articles) {
    if (a.featured) (featuredByCat[a.category] = featuredByCat[a.category] || []).push(a);
  }
  for (const cat of Object.keys(featuredByCat).sort()) {
    const items = featuredByCat[cat];
    if (items.length > 3) {
      const sorted = [...items].sort((x, y) => (y.date || '').localeCompare(x.date || ''));
      if (autoFix) {
        for (const item of sorted.slice(3)) {
          item.featured = false;
          fixMsg(item.id, `featured 해제 (카테고리 '${cat}' ${items.length}개 → 3개)`);
          anyChanged = true;
        }
      } else {
        const excess = sorted.slice(3).map((i) => i.id);
        err(cat, `featured ${items.length}개 (최대 3개) — 초과: ${excess.slice(0, 5).join(', ')}...`);
      }
    }
  }

  // 중복 ID
  const allIds = articles.map((a) => a.id);
  const dupes = new Set(allIds.filter((i) => allIds.indexOf(i) !== allIds.lastIndexOf(i)));
  for (const d of dupes) err(d, '중복 ID 발견');

  // === 출력 ===
  if (fixes.length) {
    console.log('자동 수정:');
    fixes.forEach((f) => console.log(f));
  }
  if (errors.length) {
    console.log('\n오류 (수정 필요):');
    errors.forEach((e) => console.log(e));
  }
  if (warnings.length) {
    console.log('\n경고 (확인 권고):');
    warnings.forEach((w) => console.log(w));
  }
  if (!errors.length && !warnings.length && !fixes.length) console.log('  ✅ 이상 없음');

  console.log(`\n요약: 오류 ${errors.length}개 / 경고 ${warnings.length}개 / 자동수정 ${fixes.length}개\n`);

  if (anyChanged) {
    fs.writeFileSync(ARTICLES_JSON, JSON.stringify(data, null, 2) + '\n');
    console.log('  💾 articles.json 저장 완료\n');
  }

  process.exit(errors.length ? 1 : 0);
}

module.exports = { validateArticle, resolvePath, errors, warnings, fixes, _reset };

if (require.main === module) main();
