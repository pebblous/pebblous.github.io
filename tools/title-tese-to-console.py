#!/usr/bin/env python3
"""
title-tese-to-console.py — 번역체(§0.2) 판정을 제목 검토 콘솔용으로 변환.

title-census.py(정규식 형태 게이트)가 못 잡는 "번역체 골격"(§0.2 — ①한자어 명사 조립·
②영어 통사 복사·③완결 설명문 과적재)은 Claude(의미 판단)로만 판정된다. 그 전수조사 결과
(tools/title-audit-data/translationese-verdicts-*.json)를 콘솔(/admin/titles)의
loadTese()가 읽는 형식 titles_translationese.json 으로 변환한다.

본문 제목(mainTitle)과 OG 이미지 제목(og-image-title)은 **독립적으로** 판정된다. 본문은
멀쩡한데 OG만 번역체인 글, 그 반대인 글이 모두 있으므로 한쪽만 걸려도 콘솔에 올린다.

변환 시 라이브 대조·과검출 제외를 함께 수행:
  - 라이브 mainTitle ≠ 판정 당시 title 이면 이미 고쳐진 것 → 본문 판정만 해제
  - 라이브 og-image-title ≠ 판정 당시 og 이면 이미 고쳐진 것 → OG 판정만 해제
  - ② 단독이면서 "~한 X" 관형절이면 한국어 SOV 정상(§0.2 ② 오해 방지) → 본문 판정 해제
  - 대안이 §0.0(주어 실종)/§0.2①(추상명사 종결) 게이트에 걸리면 gate 표시(수락 버튼 숨김용)
  - 둘 다 해제되면 그 글은 출력에서 빠진다

출력은 콘솔 loadTese() 데이터 계약:
  [{slug, verdict, skeleton:[...], reason, suggest, gate:[...],
    ogVerdict, og, ogSuggest}]
  verdict/ogVerdict 는 "translationese" 또는 "" — 빈 문자열이면 해당 축은 문제없음.

판정 파일은 tools/title-audit-data/translationese-verdicts-<날짜>.json 이며 **여러 개를 병합**한다.
전수조사 1개 + 이후 신규 글 증분 판정 N개 구조라, 따라잡기는 작은 파일 하나만 추가하면 된다.
같은 slug가 겹치면 파일명 날짜가 늦은 쪽이 이긴다(재판정 반영).

사용:
  python3 tools/title-tese-to-console.py                       # 전체 병합 → 사본 _workspace
  python3 tools/title-tese-to-console.py --repo <clone경로>
  python3 tools/title-tese-to-console.py --verdicts <판정json>  # 병합 없이 이 파일만
  python3 tools/title-tese-to-console.py --dry-run             # 파일 안 쓰고 통계만
"""
import argparse
import glob
import json
import os
import re
import sys


# 엔진 title-review.ts RX_OGTITLE 과 동일 패턴 — 라이브 값을 같은 방식으로 읽어야 대조가 맞다.
_RX_MAINTITLE = re.compile(r'mainTitle:\s*"([^"]*)"')
_RX_OGTITLE = re.compile(r'<meta[^>]*name="og-image-title"[^>]*content="([^"]*)"', re.I)


def live_fields(repo, slug):
    """slug의 라이브 (mainTitle, ogTitle). 파일 없으면 None. ogTitle 없으면 ''.

    OG 제목은 HTML 속성값 그대로 반환한다(줄바꿈이 &#10; 로 들어있는 글이 있어
    언이스케이프하면 판정 당시 값과 대조가 어긋난다)."""
    for rel in (f"{slug}/ko/index.html", f"{slug}/index.html"):
        p = os.path.join(repo, rel)
        if os.path.exists(p):
            html = open(p, encoding="utf-8").read()
            mt = _RX_MAINTITLE.search(html)
            og = _RX_OGTITLE.search(html)
            return (mt.group(1) if mt else None), (og.group(1) if og else "")
    return None, ""


# ── §0.2 ② 관형절 과검출 판별 ────────────────────────────────────────────────
# "~한 X"(관형절이 명사 수식)는 한국어 SOV 정상. 영어 통사 복사(of/How/What/콜론 리스티클)만 진짜 ②.
_REAL2 = ("어떻게", "말하는 것", "한 가지:", "의 경제학", "는가")

def is_overcaught_2(title, skeleton):
    if skeleton != ["②"]:
        return False
    return not any(k in title for k in _REAL2)


# ── 대안 게이트: §0.0(주어 실종)·§0.2①(추상명사 종결) ──────────────────────────
_ABSTRACT_END = re.compile(r'(적\s*)?(한계|원인|전환|분석|전략|시대|미래|경제학|지형|구조|가능성|조건|과제)\s*$')

def gate_flags(suggest):
    f = []
    if not suggest:
        return ["대안없음"]
    # §0.0: 순수 숫자·대조만 (도메인 명사 없음)
    if re.match(r'^[\d,]+.*중.*\d', suggest) and not re.search(r'AI|데이터|검사|모델|에이전트', suggest):
        f.append("§0.0주어")
    if _ABSTRACT_END.search(suggest):
        f.append("§0.2①명사종결")
    return f


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--repo", default=".")
    ap.add_argument("--verdicts", default=None, help="판정 JSON(기본: tools/title-audit-data/ 최신)")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    tools_dir = os.path.dirname(os.path.abspath(__file__))
    if args.verdicts:
        paths = [args.verdicts]
    else:
        # 전수조사 1개 + 이후 증분 판정 N개를 모두 읽는다(파일명 날짜 오름차순).
        # 같은 slug가 여러 파일에 있으면 나중 파일이 이긴다 — 재판정으로 갱신 가능.
        paths = sorted(glob.glob(os.path.join(tools_dir, "title-audit-data", "translationese-verdicts-*.json")))
        if not paths:
            print("판정 파일 없음: tools/title-audit-data/translationese-verdicts-*.json", file=sys.stderr)
            sys.exit(1)

    merged = {}
    for p in paths:
        for x in json.load(open(p, encoding="utf-8")):
            if x.get("slug"):
                merged[x["slug"]] = x
    verdicts = list(merged.values())
    verdicts_path = f"{len(paths)}개 파일 병합: " + ", ".join(os.path.basename(p) for p in paths)
    repo = os.path.abspath(args.repo)

    out = []
    skipped_fixed = skipped_over = skipped_nofile = skipped_og_fixed = 0
    for x in verdicts:
        body_t = x.get("verdict") == "translationese"
        og_t = x.get("og_verdict") == "translationese"
        if not (body_t or og_t):
            continue
        slug = x.get("slug", "")
        live_mt, live_og = live_fields(repo, slug)
        if live_mt is None:
            skipped_nofile += 1
            continue

        sk = x.get("skeleton", [])
        if body_t:
            if live_mt != x.get("title"):
                body_t = False           # 이미 라이브에서 고쳐짐
                skipped_fixed += 1
            elif is_overcaught_2(x.get("title", ""), sk):
                body_t = False           # ② 관형절 과검출
                skipped_over += 1
        if og_t and live_og != x.get("og"):
            og_t = False                 # OG만 이미 고쳐짐
            skipped_og_fixed += 1

        if not (body_t or og_t):
            continue

        suggest = x.get("suggest", "") if body_t else ""
        out.append({
            "slug": slug,
            "verdict": "translationese" if body_t else "",
            "skeleton": sk if body_t else [],
            "reason": ((x.get("reason", "") or "")[:90]) if body_t else "",
            "suggest": suggest,
            "gate": [g for g in gate_flags(suggest) if g != "통과"] if body_t else [],
            "ogVerdict": "translationese" if og_t else "",
            "og": x.get("og", "") if og_t else "",
            "ogSuggest": (x.get("og_suggest", "") if og_t else ""),
        })

    n_body = sum(1 for o in out if o["verdict"])
    n_og = sum(1 for o in out if o["ogVerdict"])
    gated = sum(1 for o in out if o["gate"])
    print(f"판정 원본: {verdicts_path}")
    print(f"콘솔 대상: {len(out)}개 글 (본문 번역체 {n_body}, OG 번역체 {n_og})")
    print(f"  본문 대안 — 통과 {n_body - gated}, 재검 {gated}")
    print(f"제외 — 본문 이미 고쳐짐 {skipped_fixed}, ② 관형절 과검출 {skipped_over}, "
          f"OG 이미 고쳐짐 {skipped_og_fixed}, 파일없음 {skipped_nofile}")

    if args.dry_run:
        return
    review_dir = os.path.join(repo, "_workspace", "title-review")
    os.makedirs(review_dir, exist_ok=True)
    dst = os.path.join(review_dir, "titles_translationese.json")
    json.dump(out, open(dst, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"작성: {dst}")


if __name__ == "__main__":
    main()
