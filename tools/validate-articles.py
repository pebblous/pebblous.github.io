#!/usr/bin/env python3
"""
articles.json validator
새 아티클 추가 전/후 실행해서 실제로 문제가 됐던 항목을 검증합니다.

Usage:
  python3 tools/validate-articles.py           # 전체 검증
  python3 tools/validate-articles.py --fix     # 자동 수정 (subtitle→description, leading slash, published null 등)
  python3 tools/validate-articles.py --new     # 최근 60일 이내 아티클만 엄격 검증
  python3 tools/validate-articles.py --id pebblous-story-pb-ko  # 특정 아티클만

실제로 발생했던 문제:
  1. published null/missing  → 블로그 목록에 안 보임
  2. description missing     → 카드 부제목 없음
  3. path 선행 슬래시        → 링크 깨짐
  4. ogImage 파일 없음       → SNS 공유 이미지 깨짐
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

    # 2. description missing (카드 부제목 없음)
    if not a.get("description"):
        if a.get("subtitle"):
            if auto_fix:
                a["description"] = a["subtitle"]
                fix_msg(aid, f"description 없음 → subtitle 복사: '{a['subtitle'][:50]}'")
                changed = True
            else:
                err(aid, "description 없음 (subtitle 있음 → --fix 로 자동 복사 가능)")
        elif strict:
            err(aid, "description 없음 — 카드에 부제목이 안 나타남")

    # 3. path 선행 슬래시 (링크 깨짐)
    path = a.get("path", "")
    if path.startswith("/"):
        if auto_fix:
            a["path"] = path.lstrip("/")
            fix_msg(aid, f"path 선행 슬래시 제거: '{path}' → '{a['path']}'")
            changed = True
        else:
            err(aid, f"path 선행 슬래시: '{path}' → 링크 깨짐 (--fix 로 수정)")

    # 4. ogImage 파일 존재 여부 (SNS 공유 이미지)
    og = a.get("ogImage", "")
    if og:
        og_abs = os.path.join(ROOT, og.lstrip("/"))
        if not os.path.exists(og_abs):
            err(aid, f"ogImage 파일 없음: {og}")

    # 5. path가 있으면 실제 파일 존재 확인 (strict 모드만)
    if strict and path:
        full = resolve_path(path)
        if not os.path.exists(full):
            warn(aid, f"파일 없음: {full.replace(ROOT+'/', '')}")

    # 6. lang 없음 (신규 아티클 권고 — 언어 필터에 영향)
    if strict and not a.get("lang") and not a.get("language"):
        warn(aid, "lang 필드 없음 — 언어 필터 비적용 (모든 언어에서 노출됨)")

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
