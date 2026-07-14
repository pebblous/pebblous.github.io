#!/usr/bin/env python3
"""
compute-related.py — articles.json 각 글에 `related: [path, ...]` 를 빌드타임에 굽는다.

배경 (2026-07-14, orphan 감사):
  라이브 Related Posts 는 런타임에 태그 유사도 상위 3개를 뽑는다. 이 "상위 N" 방식은
  인기 태그를 가진 소수 글이 인바운드를 독식(rich-get-richer)해, 827개 중 210개(25%)가
  '아무 글도 나를 관련글로 가리키지 않는' orphan 이었다. 부스트·idf 가중으로도 85개까지가
  한계였고, 근본책은 reverse-guarantee(각 orphan 을 그 best-match 글의 관련목록에 강제
  포함)뿐이다 — 시뮬레이션에서 210 → 16 (구제율 92%).

  reverse-guarantee 는 전역 배정이라 O(N^2). 방문자 브라우저에서 매 페이지 돌리면 ~660ms
  라 부담 → 빌드타임(=CI, assemble-articles 직후)에 1회 계산해 articles.json 에 굽는다.
  런타임(common-utils.js)은 `article.related` 가 있으면 O(1) 로 읽고, 없으면 기존 태그
  계산으로 fallback (하위호환).

알고리즘:
  1. 언어별로, 각 글 src 에 대해 태그 공통 개수 상위 N 을 관련글로 뽑는다(기존과 동일).
     동점은 최신 date 우선. 이걸로 인바운드 카운트를 센다.
  2. 인바운드 0 인 글(orphan)을 모아, 각 orphan 을 그 best-match 글(공통 태그 최다)의
     관련목록에 끼워넣는다. 단 한 글이 너무 많이 떠안지 않도록 스폰서당 캡(기본 3).
  3. 최종 각 글의 related = (상위 N 태그매칭) ∪ (스폰서로서 떠안은 orphan), path 리스트로.

  self(같은 base path 의 ko/en/ja 변형)는 제외. related 는 같은 언어 글만.

사용:
  python3 tools/compute-related.py                 # articles.json 갱신(related 필드 주입)
  python3 tools/compute-related.py --check          # 갱신 없이 diff 있으면 exit 1 (CI)
  python3 tools/compute-related.py --limit 3 --cap 3 --root .
  python3 tools/compute-related.py --report         # orphan 통계만 출력(변경 없음)
"""
import argparse, json, os, re, sys
from collections import Counter, defaultdict

OUTPUT = "articles.json"


def lang_of(a):
    return a.get("language") or ("en" if "/en/" in (a.get("path") or "") else "ko")


def base_path(p):
    p = p or ""
    p = re.sub(r"/(ko|en|ja)/(index\.html)?$", "", p)
    p = re.sub(r"/index\.html$", "", p)
    return p


def common_count(tags1, tags2):
    s = set(tags2)
    return sum(1 for t in tags1 if t in s)


def eligible(articles):
    """related 대상: published, path 있음, 태그 있음. (외부 링크 path 는 http 로 시작 → 제외)"""
    out = []
    for a in articles:
        if a.get("published") is not True:
            continue
        p = a.get("path")
        if not p or p.startswith("http"):
            continue
        if not a.get("tags"):
            continue
        out.append(a)
    return out


def compute(articles, limit=3, cap=3):
    arts = eligible(articles)
    by_path = {a["path"]: a for a in arts}

    # 1. 태그 유사도 상위 N (기존 알고리즘 재현) — related 초기값 + 인바운드 카운트
    related = {a["path"]: [] for a in arts}
    inbound = Counter()
    for src in arts:
        L, B = lang_of(src), base_path(src["path"])
        scored = []
        for a in arts:
            if lang_of(a) != L or base_path(a["path"]) == B:
                continue
            s = common_count(src["tags"], a["tags"])
            if s > 0:
                scored.append((s, a.get("date", ""), a["path"]))
        # score desc, date desc
        scored.sort(key=lambda x: (x[0], x[1]), reverse=True)
        top = [p for _, _, p in scored[:limit]]
        related[src["path"]] = top
        for p in top:
            inbound[p] += 1

    # 2. reverse-guarantee: orphan 을 best-match 글의 관련목록에 끼워넣는다(스폰서 캡)
    orphans = [a for a in arts if inbound.get(a["path"], 0) == 0]
    # 결정적 순서: 태그 적은(구제 어려운) orphan 먼저, 그다음 path
    orphans.sort(key=lambda a: (len(a["tags"]), a["path"]))
    sponsor_load = Counter()
    rescued = set()
    for o in orphans:
        L, B = lang_of(o), base_path(o["path"])
        cands = []
        for a in arts:
            if lang_of(a) != L or base_path(a["path"]) == B:
                continue
            s = common_count(o["tags"], a["tags"])
            if s > 0:
                cands.append((s, a.get("date", ""), a["path"]))
        if not cands:
            continue  # best-match 자체가 없음 → 구제 불가(태그 완전 고립)
        cands.sort(key=lambda x: (x[0], x[1]), reverse=True)
        for _, _, sp in cands:
            if sponsor_load[sp] < cap and o["path"] not in related[sp]:
                related[sp].append(o["path"])
                sponsor_load[sp] += 1
                inbound[o["path"]] += 1
                rescued.add(o["path"])
                break

    final_orphans = [p for p in by_path if inbound.get(p, 0) == 0]
    stats = {
        "total": len(arts),
        "orphans_before": len(orphans),
        "rescued": len(rescued),
        "orphans_after": len(final_orphans),
        "final_orphan_paths": sorted(final_orphans),
    }
    return related, stats


def apply_related(articles, related):
    """articles(원본 전체 리스트)의 각 항목에 related 필드를 주입/갱신한다. 리스트 in-place 반환."""
    for a in articles:
        p = a.get("path")
        if p in related and related[p]:
            a["related"] = related[p]
        elif "related" in a:
            # 더 이상 관련글 없으면(태그 제거 등) 필드 제거해 stale 방지
            del a["related"]
    return articles


def load(root):
    path = os.path.join(root, OUTPUT)
    with open(path, encoding="utf-8") as f:
        return json.load(f), path


def dump(obj):
    return json.dumps(obj, ensure_ascii=False, indent=2) + "\n"


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=".")
    ap.add_argument("--limit", type=int, default=3, help="글당 태그매칭 관련글 수 (기본 3)")
    ap.add_argument("--cap", type=int, default=3, help="스폰서 1글이 떠안는 orphan 최대 수 (기본 3)")
    ap.add_argument("--check", action="store_true", help="갱신 없이, 현재 articles.json 과 다르면 exit 1 (CI)")
    ap.add_argument("--report", action="store_true", help="orphan 통계만 출력하고 종료(변경 없음)")
    args = ap.parse_args()

    data, out_path = load(args.root)
    articles = data.get("articles", [])
    related, stats = compute(articles, limit=args.limit, cap=args.cap)

    print(
        f"📊 관련글 계산: 대상 {stats['total']}개 | "
        f"orphan {stats['orphans_before']} → {stats['orphans_after']} "
        f"(reverse-guarantee 구제 {stats['rescued']})"
    )
    if stats["orphans_after"]:
        print(f"   남은 orphan {stats['orphans_after']}개(태그 고립·스폰서 포화):")
        for p in stats["final_orphan_paths"][:30]:
            print(f"     - {p}")

    if args.report:
        return 0

    apply_related(articles, related)
    data["articles"] = articles
    assembled = dump(data)

    if args.check:
        current = open(out_path, encoding="utf-8").read() if os.path.exists(out_path) else ""
        if current != assembled:
            print("❌ articles.json 의 related 필드가 최신이 아님 — `python3 tools/compute-related.py` 재실행 필요")
            return 1
        print("✅ related 필드 최신")
        return 0

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(assembled)
    print(f"✅ articles.json 에 related 필드 주입 완료 ({out_path})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
