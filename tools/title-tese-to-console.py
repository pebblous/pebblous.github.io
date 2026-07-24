#!/usr/bin/env python3
"""
title-tese-to-console.py — 번역체(§0.2) 판정을 제목 검토 콘솔용으로 변환.

title-census.py(정규식 형태 게이트)가 못 잡는 "번역체 골격"(§0.2 — ①한자어 명사 조립·
②영어 통사 복사·③완결 설명문 과적재)은 Claude(의미 판단)로만 판정된다. 그 전수조사 결과
(tools/title-audit-data/translationese-verdicts-*.json)를 콘솔(/admin/titles)의
loadTese()가 읽는 형식 titles_translationese.json 으로 변환한다.

변환 시 라이브 대조·과검출 제외를 함께 수행:
  - 라이브 mainTitle ≠ 판정 당시 title 이면 이미 고쳐진 것 → 제외
  - ② 단독이면서 "~한 X" 관형절이면 한국어 SOV 정상(§0.2 ② 오해 방지) → 제외
  - 대안이 §0.0(주어 실종)/§0.2①(추상명사 종결) 게이트에 걸리면 gate 표시(수락 버튼 숨김용)

출력은 콘솔 loadTese() 데이터 계약:
  [{slug, verdict:"translationese", skeleton:[...], reason, suggest, gate:[...]}]

사용:
  python3 tools/title-tese-to-console.py                       # 최신 판정 → 사본 _workspace
  python3 tools/title-tese-to-console.py --repo <clone경로>
  python3 tools/title-tese-to-console.py --verdicts <판정json>  # 판정 파일 지정
  python3 tools/title-tese-to-console.py --dry-run             # 파일 안 쓰고 통계만
"""
import argparse
import glob
import json
import os
import re
import sys


def live_maintitle(repo, slug):
    """slug의 라이브 mainTitle (ko 우선, 없으면 루트)."""
    for rel in (f"{slug}/ko/index.html", f"{slug}/index.html"):
        p = os.path.join(repo, rel)
        if os.path.exists(p):
            m = re.search(r'mainTitle:\s*"([^"]*)"', open(p, encoding="utf-8").read())
            return m.group(1) if m else None
    return None


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
        verdicts_path = args.verdicts
    else:
        cands = sorted(glob.glob(os.path.join(tools_dir, "title-audit-data", "translationese-verdicts-*.json")))
        if not cands:
            print("판정 파일 없음: tools/title-audit-data/translationese-verdicts-*.json", file=sys.stderr)
            sys.exit(1)
        verdicts_path = cands[-1]

    verdicts = json.load(open(verdicts_path, encoding="utf-8"))
    repo = os.path.abspath(args.repo)

    out, skipped_fixed, skipped_over, skipped_nofile = [], 0, 0, 0
    for x in verdicts:
        if x.get("verdict") != "translationese":
            continue
        slug = x.get("slug", "")
        lm = live_maintitle(repo, slug)
        if lm is None:
            skipped_nofile += 1
            continue
        if lm != x.get("title"):
            skipped_fixed += 1  # 이미 라이브에서 고쳐짐
            continue
        sk = x.get("skeleton", [])
        if is_overcaught_2(x.get("title", ""), sk):
            skipped_over += 1  # ② 관형절 과검출
            continue
        suggest = x.get("suggest", "")
        out.append({
            "slug": slug,
            "verdict": "translationese",
            "skeleton": sk,
            "reason": (x.get("reason", "") or "")[:90],
            "suggest": suggest,
            "gate": [g for g in gate_flags(suggest) if g != "통과"],
        })

    gated = sum(1 for o in out if o["gate"])
    print(f"판정 원본: {verdicts_path}")
    print(f"번역체 → 콘솔 대상: {len(out)}개 "
          f"(대안 통과 {len(out) - gated}, 재검 {gated})")
    print(f"제외 — 이미 고쳐짐 {skipped_fixed}, ② 관형절 과검출 {skipped_over}, 파일없음 {skipped_nofile}")

    if args.dry_run:
        return
    review_dir = os.path.join(repo, "_workspace", "title-review")
    os.makedirs(review_dir, exist_ok=True)
    dst = os.path.join(review_dir, "titles_translationese.json")
    json.dump(out, open(dst, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print(f"작성: {dst}")


if __name__ == "__main__":
    main()
