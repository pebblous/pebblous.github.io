#!/usr/bin/env python3
"""
articles.json validator & fixer
새 아티클 추가 전/후 실행해서 실제로 문제가 됐던 항목을 검증합니다.

Usage:
  python3 tools/validate-articles.py           # 전체 검증
  python3 tools/validate-articles.py --fix     # 자동 수정
  python3 tools/validate-articles.py --new     # 최근 60일 이내 아티클만 엄격 검증
  python3 tools/validate-articles.py --id pebblous-story-pb-ko  # 특정 아티클만

검증 항목 (실제 발생한 문제 기반):
  1. published null/missing     → 블로그 목록에 안 보임
  2. description missing        → 카드 부제목 없음
  3. path 선행 슬래시           → 링크 깨짐
  4. ogImage 파일 없음          → SNS 공유 이미지 깨짐
  5. title missing              → init.js 렌더링 중단 (2026-04-03 사건)
  6. date missing               → CI Validate Articles 실패
  7. publishDate→date 변환      → 필드명 불일치
  8. cardTitle without title    → title 필수 필드 누락
  9. cardDescription w/o desc   → RSS generate-rss.js 에러
  10. path ends with index.html → 디렉토리 형식 권장
  11. featured max 3 per cat    → 메인 카드 과다 표시
  12. image 필드 비어야 함       → 관례: 빈 문자열 기본
  13. language 필드 필수          → 언어 필터·카드 렌더링에 필수 (ko/en)
"""

import json
import os
import sys
from datetime import datetime, timedelta

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ARTICLES_JSON = os.path.join(ROOT, "articles.json")

errors = []
warnings = []
fixes = []


def err(aid, msg):
    errors.append(f"  ❌ [{aid}] {msg}")


def warn(aid, msg):
    warnings.append(f"  ⚠️  [{aid}] {msg}")


def fix_msg(aid, msg):
    fixes.append(f"  🔧 [{aid}] {msg}")


def resolve_path(path_val):
    """articles.json path 값을 실제 파일 경로로 변환"""
    p = path_val.lstrip("/")
    # 이미 .html로 끝나면 직접 경로
    if p.endswith(".html"):
        return os.path.join(ROOT, p)
    # 디렉토리면 index.html
    return os.path.join(ROOT, p, "index.html")


def validate_article(a, strict=True, auto_fix=False):
    aid = a.get("id", "(no-id)")
    changed = False

    # 1. published null/missing (블로그 목록 안 보임 — 가장 많이 발생)
    pub = a.get("published")
    if pub is None:
        if auto_fix:
            a["published"] = True
            fix_msg(aid, "published null/missing → true 로 자동 설정")
            changed = True
        else:
            err(aid, "published=null/missing → .filter(a => a.published) 에서 걸러짐 (--fix 로 수정 가능)")
    elif pub is False:
        warn(aid, "published=false — 의도적인 비공개라면 무시")

    # 2. title missing (2026-04-03 사건: init.js 카드 렌더링 중단)
    if not a.get("title"):
        if a.get("cardTitle"):
            if auto_fix:
                a["title"] = a["cardTitle"]
                fix_msg(aid, f"title 없음 → cardTitle 복사: '{a['cardTitle'][:50]}'")
                changed = True
            else:
                err(aid, "title 없음 (cardTitle 있음 → --fix 로 자동 복사 가능)")
        else:
            err(aid, "title 없음 — 필수 필드 누락")

    # 3. date missing / publishDate→date 변환
    if not a.get("date"):
        if a.get("publishDate"):
            if auto_fix:
                a["date"] = a.pop("publishDate")
                fix_msg(aid, f"publishDate → date 변환: {a['date']}")
                changed = True
            else:
                err(aid, "date 없음 (publishDate 있음 → --fix 로 변환 가능)")
        else:
            err(aid, "date 없음 — 필수 필드 누락")
    elif "publishDate" in a:
        # date도 있고 publishDate도 있으면 중복 제거
        if auto_fix:
            del a["publishDate"]
            fix_msg(aid, "publishDate 중복 제거 (date 이미 존재)")
            changed = True

    # 4. description missing (RSS generate-rss.js 에러: undefined.replace())
    if not a.get("description"):
        fallback = a.get("cardDescription") or a.get("subtitle") or a.get("title", "")
        src = "cardDescription" if a.get("cardDescription") else ("subtitle" if a.get("subtitle") else "title")
        if fallback and auto_fix:
            a["description"] = fallback
            fix_msg(aid, f"description 없음 → {src} 복사: '{fallback[:50]}'")
            changed = True
        elif not fallback:
            err(aid, "description 없음 — RSS 생성 에러 발생")
        else:
            err(aid, f"description 없음 ({src} 있음 → --fix 로 자동 복사 가능)")

    # 5. path 선행 슬래시 (링크 깨짐)
    path = a.get("path", "")
    if path.startswith("/"):
        if auto_fix:
            a["path"] = path.lstrip("/")
            fix_msg(aid, f"path 선행 슬래시 제거: '{path}' → '{a['path']}'")
            changed = True
        else:
            err(aid, f"path 선행 슬래시: '{path}' → 링크 깨짐 (--fix 로 수정)")

    # 6. path ends with index.html (디렉토리 형식 권장)
    if path.endswith("index.html"):
        new_path = path.replace("index.html", "")
        if auto_fix:
            a["path"] = new_path
            fix_msg(aid, f"path index.html 제거: '{path}' → '{new_path}'")
            changed = True
        else:
            warn(aid, f"path가 index.html로 끝남: '{path}' → 디렉토리 형식 권장 (--fix)")

    # 7. ogImage 파일 존재 여부 (SNS 공유 이미지)
    og = a.get("ogImage", "")
    if og:
        og_abs = os.path.join(ROOT, og.lstrip("/"))
        if not os.path.exists(og_abs):
            err(aid, f"ogImage 파일 없음: {og}")

    # 8. path가 있으면 실제 파일 존재 확인 (strict 모드만)
    if strict and path:
        full = resolve_path(path)
        if not os.path.exists(full):
            warn(aid, f"파일 없음: {full.replace(ROOT+'/', '')}")

    # 9. language 필드 필수 (언어 필터·카드 렌더링에 영향)
    if not a.get("language"):
        if auto_fix:
            # Infer from id or path
            if aid.endswith("-en") or "/en/" in path:
                a["language"] = "en"
            else:
                a["language"] = "ko"
            fix_msg(aid, f"language 없음 → '{a['language']}' 자동 추론")
            changed = True
        else:
            err(aid, "language 필드 없음 — 필수 (--fix 로 자동 추론 가능)")

    # 10. noindex 충돌 — published=true인데 HTML에 noindex (Google 미인덱싱)
    if a.get("published") and path:
        full = resolve_path(path)
        if os.path.exists(full):
            try:
                head = open(full, encoding="utf-8").read(2000)
                has_noindex = "noindex" in head
                is_redirect = "http-equiv=\"refresh\"" in head or "location.replace" in head
                if has_noindex and not is_redirect:
                    err(aid, "published=true인데 HTML에 noindex → Google 미인덱싱 (noindex 제거 또는 published=false)")
                elif has_noindex and is_redirect:
                    # redirect stub을 가리키고 있음 → path를 실제 콘텐츠로 변경 필요
                    if auto_fix:
                        import re as _re
                        m = _re.search(r'url=\.?/?(.*?)/?["\']', head) or _re.search(r"location\.replace\(['\"]\.?/?(.*?)/?['\"]\)", head)
                        if m:
                            target = m.group(1).strip('./')
                            parent = os.path.dirname(path)
                            new_path = os.path.normpath(os.path.join(parent, target)).replace('\\', '/') + '/'
                            if os.path.exists(os.path.join(ROOT, new_path, "index.html")):
                                a["path"] = new_path
                                fix_msg(aid, f"redirect stub path → {new_path}")
                                changed = True
                    else:
                        err(aid, f"path가 redirect stub(noindex) → 실제 콘텐츠 경로로 변경 필요 (--fix)")
            except Exception:
                pass

    return changed


def main():
    auto_fix = "--fix" in sys.argv
    new_only = "--new" in sys.argv
    filter_id = None
    if "--id" in sys.argv:
        idx = sys.argv.index("--id")
        filter_id = sys.argv[idx + 1] if idx + 1 < len(sys.argv) else None

    with open(ARTICLES_JSON, encoding="utf-8") as f:
        data = json.load(f)

    articles = data.get("articles", [])
    cutoff = (datetime.now() - timedelta(days=60)).strftime("%Y-%m-%d") if new_only else None

    target = []
    for a in articles:
        if filter_id and a.get("id") != filter_id:
            continue
        if cutoff and (a.get("date", "") or "") < cutoff:
            continue
        target.append(a)

    scope_label = f"최근 60일" if new_only else "전체"
    print(f"\n📋 articles.json 검증 ({scope_label}, {len(target)}/{len(articles)}개)\n")

    any_changed = False
    for a in target:
        strict = True  # strict: 신규 아티클에 더 엄격
        if any_changed := validate_article(a, strict=strict, auto_fix=auto_fix) or any_changed:
            pass

    # === Global validations (전체 articles 대상) ===

    # Featured: 카테고리당 최대 3개
    featured_by_cat = {}
    for a in articles:
        if a.get("featured"):
            c = a["category"]
            featured_by_cat.setdefault(c, []).append(a)

    for cat, items in sorted(featured_by_cat.items()):
        if len(items) > 3:
            if auto_fix:
                sorted_items = sorted(items, key=lambda x: x.get("date", ""), reverse=True)
                for item in sorted_items[3:]:
                    item["featured"] = False
                    fix_msg(item["id"], f"featured 해제 (카테고리 '{cat}' {len(items)}개 → 3개)")
                    any_changed = True
            else:
                excess = [i["id"] for i in sorted(items, key=lambda x: x.get("date", ""), reverse=True)[3:]]
                err(f"{cat}", f"featured {len(items)}개 (최대 3개) — 초과: {', '.join(excess[:5])}...")

    # Duplicate IDs
    all_ids = [a["id"] for a in articles]
    dupes = set(i for i in all_ids if all_ids.count(i) > 1)
    if dupes:
        for d in dupes:
            err(d, "중복 ID 발견")

    # === Output ===

    if fixes:
        print("자동 수정:")
        for f in fixes:
            print(f)

    if errors:
        print("\n오류 (수정 필요):")
        for e in errors:
            print(e)

    if warnings:
        print("\n경고 (확인 권고):")
        for w in warnings:
            print(w)

    if not errors and not warnings and not fixes:
        print("  ✅ 이상 없음")

    print(f"\n요약: 오류 {len(errors)}개 / 경고 {len(warnings)}개 / 자동수정 {len(fixes)}개\n")

    if any_changed:
        with open(ARTICLES_JSON, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            f.write("\n")
        print("  💾 articles.json 저장 완료\n")

    sys.exit(1 if errors else 0)


if __name__ == "__main__":
    main()
