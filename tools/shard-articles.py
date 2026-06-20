#!/usr/bin/env python3
"""
shard-articles.py — articles.json(단일 모놀리식)을 사이드카로 분해한다.

  articles.json
    → articles.categories.json        (categories 블록, 거의 안 변함)
    → articles.d/<id>.json × N         (글 하나당 한 파일)

일회성 마이그레이션 + 엔진/도구가 articles.json 을 직접 쓰던 과거 항목을 재분해할 때 사용.
분해 후 tools/assemble-articles.py 로 재조립하면 원본과 의미적으로 동일해야 한다(round-trip 검증).

사용:
  python3 tools/shard-articles.py [--root <경로>] [--force]
    --force: 기존 articles.d/ 사이드카를 모두 지우고 새로 생성(고아 제거).
"""
import argparse, json, sys, os, glob, re

CATEGORIES_FILE = "articles.categories.json"
SIDECAR_DIR = "articles.d"
SOURCE = "articles.json"

SAFE_ID = re.compile(r"^[A-Za-z0-9._\-]+$")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=".")
    ap.add_argument("--force", action="store_true", help="기존 사이드카 전체 삭제 후 재생성")
    args = ap.parse_args()
    root = args.root

    with open(os.path.join(root, SOURCE), encoding="utf-8") as f:
        data = json.load(f)
    if "categories" not in data or "articles" not in data:
        sys.exit("❌ articles.json 래퍼({categories, articles}) 아님 — 중단")

    # categories
    with open(os.path.join(root, CATEGORIES_FILE), "w", encoding="utf-8") as f:
        f.write(json.dumps(data["categories"], ensure_ascii=False, indent=2) + "\n")

    sidecar_dir = os.path.join(root, SIDECAR_DIR)
    os.makedirs(sidecar_dir, exist_ok=True)
    if args.force:
        for p in glob.glob(os.path.join(sidecar_dir, "*.json")):
            os.remove(p)

    seen = {}
    for a in data["articles"]:
        aid = a.get("id")
        if not aid:
            sys.exit(f"❌ id 없는 article: {a.get('path') or a.get('title')}")
        if not SAFE_ID.match(aid):
            sys.exit(f"❌ 파일명으로 부적합한 id '{aid}' — 슬러그 정규화 필요")
        if aid in seen:
            sys.exit(f"❌ 중복 id '{aid}'")
        seen[aid] = True
        with open(os.path.join(sidecar_dir, f"{aid}.json"), "w", encoding="utf-8") as f:
            f.write(json.dumps(a, ensure_ascii=False, indent=2) + "\n")

    print(f"✅ {len(seen)} 사이드카 생성 → {SIDECAR_DIR}/  + {CATEGORIES_FILE}")


if __name__ == "__main__":
    sys.exit(main())
