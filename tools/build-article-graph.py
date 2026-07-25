#!/usr/bin/env python3
"""블로그 지식그래프 exporter — PebbloScope Scholar constellation 규격.

블로그 글을 노드로 하는 그래프를 Scholar 규격(graph.json + corpus.json + meta.json)
으로 내보낸다. 규격·역할 분담: pebblousDev/PebbloScope-Scholar 이슈 #1 (2026-07-25).

엣지 3종:
  direct   = 본문 내 글→글 하이퍼링크 (저자 명시 인용; HTML에서 추출)
  coupling = 두 글의 공유 태그 수 (bibliographic coupling 유비)
  cocite   = related 리스트 상호참조 (compute-related.py 산출; 단방향 10 / 상호 20)

Louvain community·centrality·positions는 Scholar build가 계산하므로 여기서는
비워 둔다 (community=0).

사용:
  python3 tools/build-article-graph.py --site <사본클론경로> --output <출력디렉토리>
  python3 tools/build-article-graph.py --site . --sample 50 --output /tmp/blog-ko-50
    # --sample N: 가중 차수 상위 N개(허브 최소 3개 보장)의 유도 부분그래프
    # --lang ko(기본)|en, --coupling-min 2(기본): coupling 단독 엣지 최소 공유 태그 수
"""

import argparse
import json
import re
import sys
from collections import defaultdict
from itertools import combinations
from pathlib import Path

SITE_ORIGIN = "https://blog.pebblous.ai"
CONTENT_DIRS = ("blog", "report", "story", "project", "event", "pebblopedia", "wiki")
HREF_RE = re.compile(
    r'href="(/(?:' + "|".join(CONTENT_DIRS) + r')/[^"#?]*?)"'
)


def norm_path(p):
    """선행 / 제거, 후행 / 보장, index.html 제거."""
    p = p.strip().lstrip("/")
    if p.endswith("index.html"):
        p = p[: -len("index.html")]
    if p and not p.endswith("/"):
        p += "/"
    return p


def short_label(title, limit=16):
    t = re.split(r"\s*[—|:\-]\s*", title)[0].strip()
    return t if len(t) <= limit else t[: limit - 1] + "…"


def load_articles(site, lang):
    data = json.loads((site / "articles.json").read_text())
    total_published = sum(1 for a in data["articles"] if a.get("published"))
    out = []
    for a in data["articles"]:
        if not a.get("published"):
            continue
        p = norm_path(a.get("path", ""))
        art_lang = a.get("lang") or a.get("language")
        if art_lang:
            if art_lang != lang:
                continue
        elif f"/{lang}/" not in "/" + p:
            continue
        out.append({**a, "path": p})
    return out, total_published


def extract_direct_links(site, article, path_set):
    html_path = site / article["path"] / "index.html"
    if not html_path.exists():
        return set()
    try:
        html = html_path.read_text(encoding="utf-8", errors="replace")
    except OSError:
        return set()
    found = set()
    for href in HREF_RE.findall(html):
        p = norm_path(href)
        if p in path_set and p != article["path"]:
            found.add(p)
    return found


def build(args):
    site = Path(args.site).resolve()
    arts, total_published = load_articles(site, args.lang)
    lang_total = len(arts)
    print(f"{args.lang.upper()} 발행 글: {lang_total} (전체 발행 {total_published})")

    idx = {a["path"]: i for i, a in enumerate(arts)}
    n = len(arts)

    # --- 엣지 수집 ---
    # coupling: 태그 역색인으로 공유 태그 수 계산 (전수 쌍 비교 회피)
    pair_coupling = defaultdict(int)
    tag_index = defaultdict(list)
    for i, a in enumerate(arts):
        for t in {str(t).strip().lower() for t in a.get("tags", []) if str(t).strip()}:
            tag_index[t].append(i)
    for t, members in tag_index.items():
        if len(members) > args.tag_degree_cap:
            continue  # 초범용 태그(예: 'ai')는 coupling 신호가 아니라 노이즈
        for i, j in combinations(members, 2):
            pair_coupling[(i, j)] += 1

    # cocite: related 리스트 (단방향 10, 상호 20)
    pair_cocite = defaultdict(int)
    rel_sets = []
    for a in arts:
        rel_sets.append({norm_path(r) for r in (a.get("related") or [])})
    for i, a in enumerate(arts):
        for rp in rel_sets[i]:
            j = idx.get(rp)
            if j is None or j == i:
                continue
            key = (min(i, j), max(i, j))
            mutual = arts[i]["path"] in rel_sets[j]
            pair_cocite[key] = max(pair_cocite[key], 20 if mutual else 10)

    # direct: 본문 하이퍼링크
    pair_direct = set()
    missing_html = 0
    for i, a in enumerate(arts):
        links = extract_direct_links(site, a, set(idx))
        if not links and not (site / a["path"] / "index.html").exists():
            missing_html += 1
        for lp in links:
            j = idx[lp]
            if j != i:
                pair_direct.add((min(i, j), max(i, j)))

    # 병합: direct 또는 cocite가 있으면 무조건 포함, coupling 단독은 임계 이상만
    links = []
    keys = set(pair_direct) | set(pair_cocite) | {
        k for k, v in pair_coupling.items() if v >= args.coupling_min
    }
    for i, j in sorted(keys):
        coupling = pair_coupling.get((i, j), 0)
        cocite = pair_cocite.get((i, j), 0)
        direct = 1 if (i, j) in pair_direct else 0
        weight = float(coupling if coupling > 0 else (cocite / 10 if cocite else 1))
        links.append({"source": i, "target": j, "direct": direct,
                      "coupling": coupling, "cocite": cocite, "weight": weight})

    print(f"전체 그래프: 노드 {n} · 엣지 {len(links)} "
          f"(direct {len(pair_direct)} · cocite쌍 {len(pair_cocite)} · "
          f"coupling≥{args.coupling_min} {sum(1 for v in pair_coupling.values() if v >= args.coupling_min)})"
          f" · 본문 HTML 결측 {missing_html}")

    # --- 샘플링: 카테고리 비례 층화 + 가중 차수 상위 (허브 최소 보장) ---
    # 단순 차수 상위만 뽑으면 태그 클리크(예: Data Art 시리즈)가 독식해
    # 카테고리 분포가 왜곡된다 — 전체 코퍼스의 카테고리 비율을 유지한다.
    if args.sample and args.sample < n:
        wdeg = defaultdict(float)
        for l in links:
            wdeg[l["source"]] += l["weight"] + l["direct"] * 3
            wdeg[l["target"]] += l["weight"] + l["direct"] * 3
        hubs = [i for i, a in enumerate(arts) if a.get("type") == "hub"]
        hubs.sort(key=lambda i: -wdeg[i])
        keep = set(hubs[: max(3, min(len(hubs), args.sample // 10))])

        by_cat = defaultdict(list)
        for i, a in enumerate(arts):
            if i not in keep:
                by_cat[a.get("category", "tech")].append(i)
        remaining = args.sample - len(keep)
        for cat, members in sorted(by_cat.items(), key=lambda kv: -len(kv[1])):
            quota = max(1, round(remaining * len(members) / (n - len(keep))))
            members.sort(key=lambda i: -wdeg[i])
            keep.update(members[:quota])
        # 반올림 오차 보정: 전체 차수 순으로 채우거나 잘라냄
        for i in sorted(range(n), key=lambda i: -wdeg[i]):
            if len(keep) >= args.sample:
                break
            keep.add(i)
        if len(keep) > args.sample:
            hubset = set(hubs[: max(3, min(len(hubs), args.sample // 10))])
            for i in sorted(keep - hubset, key=lambda i: wdeg[i]):
                if len(keep) <= args.sample:
                    break
                keep.discard(i)
        remap = {old: new for new, old in enumerate(sorted(keep))}
        arts = [arts[old] for old in sorted(keep)]
        links = [
            {**l, "source": remap[l["source"]], "target": remap[l["target"]]}
            for l in links if l["source"] in remap and l["target"] in remap
        ]
        n = len(arts)
        print(f"샘플 부분그래프: 노드 {n} · 엣지 {len(links)} · "
              f"허브 {sum(1 for a in arts if a.get('type') == 'hub')}")

    # --- corpus.json ---
    wcs = [a.get("wordCount") for a in arts if a.get("wordCount")]
    wc_default = sorted(wcs)[len(wcs) // 2] if wcs else 5000
    papers = []
    for i, a in enumerate(arts):
        papers.append({
            "id": i,
            "title": a.get("title", a["path"]),
            "label": short_label(a.get("title", a["path"])),
            "authors": [{"name": "Pebblous"}],
            "authorString": "Pebblous",
            "year": int(str(a.get("date", "2026"))[:4]),
            "journal": a.get("category", "tech"),
            "citations": int(a.get("wordCount") or wc_default),
            "abstract": a.get("description", ""),
            "keywords": a.get("tags", []),
            "pdf_url": f"{SITE_ORIGIN}/{a['path']}",
            "doi": None,
            "is_hub": a.get("type") == "hub",
            "community": 0,
        })

    corpus = {
        "completeness": {
            "n_papers": n,
            "data_mode": "coupling + similarity + direct",
            "reference_source": "blog tags + related(compute-related) + in-body links",
        },
        "papers": papers,
    }
    graph = {"nodes": [{"id": i} for i in range(n)], "links": links}
    meta = {
        "schema_version": "1.0",
        "id": f"blog-{args.lang}" + (f"-{args.sample}" if args.sample and args.sample < 900 else ""),
        "name": "The Pebblous Blog Constellation",
        "short": f"Pebblous Blog ({args.lang.upper()})",
        "subtitle": "blog.pebblous.ai 발행 글의 지식 성운 — 태그·유사도·본문 인용으로 잇다",
        "domain": "AI-Ready Data / Physical AI / Data Quality (Pebblous blog corpus)",
        "modalities": "tech, business, story, art, hub",
        "n_papers": n,
        "n_communities": 0,
        "modularity_Q": 0.0,
        "direct_citation_edges": sum(l["direct"] for l in links),
        "data_mode": "coupling + similarity + direct",
        "prisma": {
            "identified": total_published,
            "screened": lang_total,
            "included": n,
            "labels": {
                "identified": "발행 글 전체 (KO+EN)",
                "screened": f"{args.lang.upper()} 발행 글",
                "included": "지식그래프 노드",
                "screened_out": "EN 판 글 — KO판 기준 그래프라 제외 (언어쌍의 KO 노드로 대표)",
            },
        },
    }

    out = Path(args.output)
    out.mkdir(parents=True, exist_ok=True)
    for name, obj in (("graph.json", graph), ("corpus.json", corpus), ("meta.json", meta)):
        (out / name).write_text(json.dumps(obj, ensure_ascii=False, indent=1))
    print(f"✅ 출력: {out}/graph.json corpus.json meta.json")
    return 0


def main():
    ap = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    ap.add_argument("--site", required=True, help="사본 클론 경로 (articles.json + 콘텐츠 HTML)")
    ap.add_argument("--output", required=True, help="출력 디렉토리")
    ap.add_argument("--lang", default="ko", choices=["ko", "en"])
    ap.add_argument("--sample", type=int, default=0, help="상위 N 노드 부분그래프 (0=전체)")
    ap.add_argument("--coupling-min", type=int, default=2,
                    help="coupling 단독 엣지 최소 공유 태그 수 (기본 2)")
    ap.add_argument("--tag-degree-cap", type=int, default=60,
                    help="이 수보다 많은 글에 붙은 태그는 coupling에서 제외 (기본 60)")
    return build(ap.parse_args())


if __name__ == "__main__":
    sys.exit(main())
