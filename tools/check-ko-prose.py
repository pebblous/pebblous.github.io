#!/usr/bin/env python3
"""한국어 산문 AI 문체 검사 — ko-prose-humanizer v5 검출 엔진.

스킬 본문에 흩어져 있던 grep 조각을 한 곳으로 모은 것이다. 같은 명령으로 같은 수가
나와야 규칙을 근거로 논의할 수 있다.

    python3 tools/check-ko-prose.py <파일…>                 # 상시 검사
    python3 tools/check-ko-prose.py <파일…> --light-verbs   # 경동사 정리 (요청 시)
    python3 tools/check-ko-prose.py <파일…> --json          # 기계 판독용

설계 근거: docs/ko-prose-checker-v5.md
"""

import argparse
import json
import re
import sys
from collections import Counter

# ─────────────────────────────────────────────────────────────────────────────
# 본문 추출
# ─────────────────────────────────────────────────────────────────────────────

_STRIP = (
    r"<script[^>]*>.*?</script>",
    r"<style[^>]*>.*?</style>",
    r"<head[^>]*>.*?</head>",
)


def extract_body(path):
    """HTML/Markdown에서 사람이 읽는 본문만 남긴다."""
    raw = open(path, encoding="utf-8").read()
    for pat in _STRIP:
        raw = re.sub(pat, " ", raw, flags=re.DOTALL)
    text = re.sub(r"<[^>]+>", " ", raw)
    return re.sub(r"\s+", " ", text).strip()


# ─────────────────────────────────────────────────────────────────────────────
# 상시 검사 항목
#
# 패턴은 좁게 잡는다. 넓게 잡으면 오탐이 정탐을 덮는다 — 경동사를 여섯 낱말로
# 잡았을 때 261건 중 195건이 정상이었다(docs/ko-prose-checker-v5.md §0).
# ─────────────────────────────────────────────────────────────────────────────

# 임계는 발행글 40편(47.6만 자) 실측의 **75분위**에 맞췄다. 상위 4분의 1만 걸린다.
# 중앙값에 맞추면 절반이 걸려 경고가 배경 소음이 된다.
# 분포 원본: docs/ko-prose-checker-v5.md §0-2
CHECKS = [
    # (코드, 이름, 등급, 정규식, 1만 자당 임계)
    ("T1", "줄표(—) 재진술", "S2", r"—", 20.0),
    ("T4", "메타 예고문", "S2",
     r"(옮긴다|풀어 쓰자면|짚어 본다|묶어 본다|한 발 더 들어가면|다시 읽어 본다"
     r"|한눈에 본다|또렷해진다|풀어 두면)", 0.0),
    ("T7", "고전 번역투", "S2",
     r"(에 있어서|을 부른다|라는 진단이다|을 가능하게 한다|되어진|지어진다)", 0.0),
    ("T12a", "명사화 ~하는 것", "S2",
     r"(하|되|있|없|드러나|나타나)는 것(이|을|은|으로|도|만)", 2.5),
    ("T12b", "격조사 겹침", "S2", r"(에서의|로의|으로의|로서의)", 1.5),
    ("T12c", "목적 ~기 위해", "S3", r"기 위(해|한|하여|해서)", 1.5),
    ("T12d", "무생물 복수 '들'", "S3",
     r"(데이터|모델|알고리즘|시스템|기업|기술|지표|요소|결과|사례|기준|방식|문제|영역|과제|측면)들",
     1.0),
    # 위키체·광고체 — voice-edit 공통 항목
    ("V1", "위키체", "S2", r"(본 보고서|규명한다|분석하고자|살펴본다|고찰한다)", 0.0),
    ("V2", "광고체", "S2", r"(혁신적|획기적|놀라운|차세대|게임 체인저)", 0.0),
    ("V3", "AI 접속부사", "S2", r"(흥미롭게도|주목할 만한|결론적으로|이러한 맥락에서)", 0.0),
]

# ⛔ 의도적으로 뺀 것 — 넣으면 사람 글을 AI 글로 오판한다
#   · "것이다" 단독 빈도 → 사람이 AI보다 2배 많이 쓴다. T2는 종결 분포로 본다
#   · "~를 통해"        → 비번역 한국어가 번역문보다 2배 많이 쓴다
#   · 과의·와의          → 대부분 정상이고 '인과의'처럼 낱말 내부가 걸린다


def check_endings(text):
    """T2 — 종결 어미의 다양도. 개별 낱말이 아니라 분포로 판정한다.

    최빈 종결이 전체의 40%를 넘으면 리듬이 한 형태로 쏠린 것이다.
    """
    # 한글로 끝나는 문장만 센다. "…(2026)." 같은 조각이 종결로 잡히면 분포가 흐려진다.
    sentences = [s.strip() for s in re.split(r"[.!?]\s", text)
                 if len(s.strip()) > 10 and re.search(r"[가-힣]$", s.strip())]
    if len(sentences) < 20:
        return None
    endings = Counter(s[-3:] for s in sentences)
    top, count = endings.most_common(1)[0]
    share = count / len(sentences)
    return {
        "sentences": len(sentences),
        "top_ending": top,
        "share": share,
        "flagged": share > 0.40,
        "distribution": endings.most_common(5),
    }


def run_checks(text):
    chars = len(text)
    rows = []
    for code, name, sev, pat, threshold in CHECKS:
        n = len(re.findall(pat, text))
        per10k = n / chars * 10000 if chars else 0
        rows.append({
            "code": code, "name": name, "severity": sev,
            "count": n, "per_10k": round(per10k, 2),
            "threshold": threshold, "flagged": per10k > threshold,
        })
    return rows


# ─────────────────────────────────────────────────────────────────────────────
# 요청 시 실행 — 경동사 정리 (--light-verbs)
#
# 상시 항목이 아니다. 채택 결정이 없고 실측이 규칙을 지지하지 않는다.
# 근거·이력: docs/ko-prose-checker-v5.md §0-1
# ─────────────────────────────────────────────────────────────────────────────

LIGHT_VERBS = ("수행", "제공", "실행", "진행", "시행", "부여")

# ① 목적어에 '-하다'가 직접 붙는 서술성 명사만 후보로 삼는다.
#    레버리지·커넥터·코드처럼 안 붙는 말은 애초에 경동사 구문이 아니다.
PREDICATIVE = {
    "방어", "분류", "검사", "검증", "분석", "측정", "평가", "예측", "탐지", "추론",
    "학습", "삭제", "저장", "전송", "계산", "비교", "관리", "처리", "정리", "복구",
    "제거", "혼합", "변환", "생성", "추출", "선별", "감사", "점검", "인증", "배포",
}

# ② 실질 의미를 담아 남기는 자리 — 규모·완수·실제 집행의 뉘앙스
KEEP_CONTEXT = ("실험", "서비스", "기능", "역할", "코드", "쿼리", "명령")


def find_light_verbs(text):
    """판별 3단을 통과한 후보만 돌려준다."""
    hits = []
    pat = r"([가-힣A-Za-z0-9]{2,12})\s*(?:및\s*[가-힣]{2,10})?\s*(을|를)\s*(" \
          + "|".join(LIGHT_VERBS) + r")(하|한|해|했|합)"
    for m in re.finditer(pat, text):
        obj, verb, tail = m.group(1), m.group(3), m.group(4)
        window = text[max(0, m.start() - 40):m.end() + 20].strip()

        # ③ 관형절이면 건드리지 않는다 — 줄이면 수식 관계가 무너진다
        #    "동등한 작업을 수행하는 사람" → '수행하는'을 빼면 '동등한'이 갈 데를 잃는다
        if tail == "하" and re.match(r"하는", text[m.end() - 1:m.end() + 1]):
            continue

        obj_head = obj[-2:]
        if obj_head not in PREDICATIVE:
            continue                                   # ① 탈락
        if any(k in window for k in KEEP_CONTEXT):
            continue                                   # ② 탈락

        hits.append({"object": obj, "verb": verb, "context": window})
    return hits


# ─────────────────────────────────────────────────────────────────────────────
# 출력
# ─────────────────────────────────────────────────────────────────────────────

def report(path, text, rows, endings, lv):
    chars = len(text)
    print(f"\n{'=' * 72}\n{path}\n본문 {chars:,}자\n{'=' * 72}")
    print(f"{'코드':<6} {'등급':<4} {'항목':<18} {'건수':>5} {'1만 자당 빈도':>14}  판정")
    for r in rows:
        mark = "⚠️ " if r["flagged"] else "   "
        print(f"{r['code']:<6} {r['severity']:<4} {r['name']:<18} "
              f"{r['count']:>5} {r['per_10k']:>14.2f}  {mark}")

    if endings:
        mark = "⚠️  쏠림" if endings["flagged"] else "   정상"
        print(f"\nT2   S3   종결 다양도        최빈 '{endings['top_ending']}' "
              f"{endings['share']:.0%} ({endings['sentences']}문장)  {mark}")
        print("     분포:", ", ".join(f"{e}({n})" for e, n in endings["distribution"]))

    flagged = [r for r in rows if r["flagged"]]
    s2 = [r for r in flagged if r["severity"] == "S2"]
    print(f"\n→ 임계 초과 {len(flagged)}건 (자동 교정 대상 S2: {len(s2)}건)")

    if lv is not None:
        print(f"\n{'-' * 72}\n경동사 정리 (요청 시 실행) — 판별 3단 통과 {len(lv)}건")
        print("  ⚠️  절대 우위가 아니다. 문장을 짧게 가져갈 자리에서만 고른다.")
        for i, h in enumerate(lv, 1):
            print(f"  {i:2d}. [{h['object']}을/를 {h['verb']}하다] …{h['context']}…")
        if not lv:
            print("  후보 없음.")


def main():
    ap = argparse.ArgumentParser(description="한국어 산문 AI 문체 검사 (v5)")
    ap.add_argument("files", nargs="+")
    ap.add_argument("--light-verbs", action="store_true",
                    help="경동사 정리 — 상시 항목이 아니라 요청 시에만 실행")
    ap.add_argument("--json", action="store_true", help="기계 판독용 JSON 출력")
    args = ap.parse_args()

    out = []
    for path in args.files:
        try:
            text = extract_body(path)
        except OSError as e:
            print(f"건너뜀: {path} ({e})", file=sys.stderr)
            continue
        rows = run_checks(text)
        endings = check_endings(text)
        lv = find_light_verbs(text) if args.light_verbs else None
        if args.json:
            out.append({"path": path, "chars": len(text), "checks": rows,
                        "endings": endings, "light_verbs": lv})
        else:
            report(path, text, rows, endings, lv)

    if args.json:
        print(json.dumps(out, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
