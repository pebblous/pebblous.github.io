#!/usr/bin/env python3
"""
assemble-articles.py — 사이드카(articles.d/<id>.json)를 articles.json 에 병합한다.

샤딩 모델(articles.json 단일 핫스팟 충돌 근절):
  - 신규/수정 글 = 사이드카 파일 하나(articles.d/<id>.json). 각 PR은 자기 사이드카만 추가
    → 서로 다른 파일이라 git 충돌이 원천적으로 발생하지 않는다.
  - articles.json 은 CI가 생성하는 산출물. push 시 이 스크립트가(=CI가) 재조립해 커밋한다.

⭐ union(base + overlay) 모델 — mass 마이그레이션 불필요·순서 사고 안전:
  - base = 기존 articles.json 의 articles (있으면). 기존 612개는 base에 그대로 carry-forward.
  - overlay = 사이드카들. 같은 id면 사이드카가 base를 덮어쓴다(수정 반영).
  - 결과 = (base ∪ 사이드카) 를 date desc·id asc 로 결정적 정렬해 articles.json 으로 출력.
  → 옛 글을 한꺼번에 옮기지 않아도 된다. 신규 글만 사이드카로 추가하면 충돌이 사라진다.
  → 어떤 순서로 배포돼도 base가 받쳐주므로 라이브 인덱스가 비거나 항목이 유실되지 않는다.

categories: articles.categories.json 이 있으면 그걸, 없으면 기존 articles.json 의 categories 사용.

사용:
  python3 tools/assemble-articles.py            # 사이드카를 articles.json 에 병합(갱신)
  python3 tools/assemble-articles.py --check     # 갱신 없이, 현재 articles.json 과 차이 있으면 exit 1 (CI)
  python3 tools/assemble-articles.py --root <경로>
"""
import argparse, json, sys, glob, os

CATEGORIES_FILE = "articles.categories.json"
SIDECAR_DIR = "articles.d"
OUTPUT = "articles.json"


def sidecar_paths(root):
    return sorted(glob.glob(os.path.join(root, SIDECAR_DIR, "*.json")))


def load_sidecars(root):
    arts, seen = [], {}
    for p in sidecar_paths(root):
        with open(p, encoding="utf-8") as f:
            try:
                obj = json.load(f)
            except json.JSONDecodeError as e:
                sys.exit(f"❌ 사이드카 파싱 실패 {p}: {e}")
        aid = obj.get("id")
        if not aid:
            sys.exit(f"❌ 사이드카에 id 없음: {p}")
        if aid in seen:
            sys.exit(f"❌ 중복 id '{aid}': {p} vs {seen[aid]}")
        seen[aid] = p
        arts.append(obj)
    return arts


def load_base(root):
    """기존 articles.json 에서 (categories, {id: article}) 를 읽는다. 없으면 (None, {})."""
    p = os.path.join(root, OUTPUT)
    if not os.path.exists(p):
        return None, {}
    with open(p, encoding="utf-8") as f:
        d = json.load(f)
    base = {a["id"]: a for a in d.get("articles", []) if a.get("id")}
    return d.get("categories"), base


def assemble(root):
    base_categories, base = load_base(root)
    # categories 우선순위: 별도 파일 > 기존 articles.json
    cat_path = os.path.join(root, CATEGORIES_FILE)
    if os.path.exists(cat_path):
        with open(cat_path, encoding="utf-8") as f:
            categories = json.load(f)
    elif base_categories is not None:
        categories = base_categories
    else:
        sys.exit(f"❌ categories 출처 없음 ({CATEGORIES_FILE} 도 기존 articles.json 도 없음).")

    merged = dict(base)                       # base 먼저
    for s in load_sidecars(root):             # 사이드카가 덮어씀(수정 반영)
        merged[s["id"]] = s
    arts = list(merged.values())

    # path 중복 가드 — 같은 path·같은 published 상태 항목이 여럿이면 하나만 유지(2026-07-14).
    # merged는 id가 키라 id 중복만 막고 path 중복은 통과 → sitemap에 같은 URL이 2번 실림
    # (샤딩 이전 base에 옛 id와 -ko/-en 마이그레이션 id가 공존한 잔재). 정보 풍부한 쪽을 남긴다.
    # keeper 선정: 각 path에서 (tags 많음, 최신 date)를 우선. 나머지는 드롭.
    def richness(a):
        return (len(a.get("tags") or []), a.get("date") or "")   # 클수록 우선
    best = {}
    for a in arts:
        p = a.get("path")
        if not p:
            continue
        key = (p, a.get("published") is not False)
        if key not in best or richness(a) > richness(best[key]):
            best[key] = a
    keep_ids = {a["id"] for a in best.values()}
    dropped = [a["id"] for a in arts if a.get("path") and a["id"] not in keep_ids]
    if dropped:
        print(f"⚠ path 중복 제거: {len(dropped)}건 — {', '.join(dropped)}")
    arts = [a for a in arts if (not a.get("path")) or a["id"] in keep_ids]

    arts.sort(key=lambda a: (a.get("id") or ""))                 # 안정성: id asc
    arts.sort(key=lambda a: (a.get("date") or ""), reverse=True) # 1순위: date desc
    return {"categories": categories, "articles": arts}


def dump(obj):
    return json.dumps(obj, ensure_ascii=False, indent=2) + "\n"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=".")
    ap.add_argument("--check", action="store_true", help="갱신하지 않고 현재 articles.json 과 비교 (CI)")
    args = ap.parse_args()

    # ⛔ 안전 가드 — 사이드카가 하나도 없으면 articles.json 을 건드리지 않는다(no-op).
    # (마이그레이션/스킬 전환 전 워크플로가 먼저 돌아도 기존 인덱스를 재정렬·변경하지 않게.)
    if not sidecar_paths(args.root):
        print(f"⏭️  {SIDECAR_DIR}/ 에 사이드카 없음 — no-op (articles.json 미변경).")
        return 0

    assembled = dump(assemble(args.root))
    out_path = os.path.join(args.root, OUTPUT)

    if args.check:
        current = open(out_path, encoding="utf-8").read() if os.path.exists(out_path) else ""
        if current != assembled:
            print("❌ articles.json 이 사이드카와 불일치 — `python3 tools/assemble-articles.py` 재실행 필요")
            return 1
        print(f"✅ articles.json 이 사이드카와 일치 ({len(json.loads(assembled)['articles'])} articles)")
        return 0

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(assembled)
    n = len(json.loads(assembled)["articles"])
    print(f"✅ articles.json 재조립 완료 ({n} articles = base ∪ {SIDECAR_DIR}/)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
