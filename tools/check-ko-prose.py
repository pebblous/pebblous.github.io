#!/usr/bin/env python3
"""한국어 산문 AI 문체 검사 — ko-prose-humanizer v5 검출 엔진.

스킬 본문에 흩어져 있던 grep 조각을 한 곳으로 모은 것이다. 같은 명령으로 같은 수가
나와야 규칙을 근거로 논의할 수 있다.

    python3 tools/check-ko-prose.py <파일…>                 # 상시 검사
    python3 tools/check-ko-prose.py <파일…> --light-verbs   # 경동사 정리 (요청 시)
    python3 tools/check-ko-prose.py <파일…> --json          # 기계 판독용

설계 근거: docs/ko-prose-checker-v5.md · 종결체(R1): docs/ko-style-standard.md §4-1
"""

import argparse
import html
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
    """HTML/Markdown에서 사람이 읽는 본문만 남긴다.

    (본문, 인용을 지운 본문) 두 벌을 돌려준다. 빈도의 분모는 본문 전체이고,
    검출은 인용을 지운 쪽에서 한다.
    """
    raw = open(path, encoding="utf-8").read()
    for pat in _STRIP:
        raw = re.sub(pat, " ", raw, flags=re.DOTALL)
    quoteless = re.sub(r"<blockquote[^>]*>.*?</blockquote>", " ", raw, flags=re.DOTALL)

    def plain(s):
        return re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", s)).strip()

    return plain(raw), mask_quotes(plain(quoteless))


def extract_main_for_register(path):
    """종결체 검사용 본문 — <main> 이 있으면 그 안만(리드·본문·목록·캡션), 없으면 문서 전체.

    블록 닫힘을 줄바꿈으로 바꿔 두어야 마침표 없는 목록 항목·캡션이 다음 문장과 붙지 않는다.
    인용(<blockquote>·따옴표 안)은 검출 전에 지운다 — 직접 인용문 안의 말투는 예외다.
    """
    raw = open(path, encoding="utf-8").read()
    m = re.search(r"<main[^>]*>(.*?)</main>", raw, flags=re.DOTALL | re.IGNORECASE)
    body = m.group(1) if m else raw
    for pat in _STRIP:
        body = re.sub(pat, " ", body, flags=re.DOTALL)
    body = re.sub(r"<blockquote[^>]*>.*?</blockquote>", " ", body, flags=re.DOTALL)
    body = re.sub(r"</(p|h[1-6]|li|div|section|article|tr|td|th|figcaption|dd|dt)>", "\n", body, flags=re.IGNORECASE)
    body = re.sub(r"<br\s*/?>", "\n", body, flags=re.IGNORECASE)
    body = re.sub(r"<[^>]+>", " ", body)
    body = html.unescape(body).replace("\xa0", " ")
    body = re.sub(r"[ \t]+", " ", body)
    return mask_quotes(body), bool(m)


def mask_quotes(text):
    """따옴표 안을 지운다.

    남의 말은 우리 문체가 아니다. 인용문을 고치는 것은 이 스킬의 제1 원칙
    (인용문 원문 보존) 위반이므로, 애초에 **검출되지 않아야** 한다.

    v5는 인용문 보존을 교정 *후* 불변식으로만 두었다. 그래서 발행글 426편
    전수 조사에서 잡스 발언("혁신적인 인터넷 소통 기기…"), 샌더스 발언,
    Epoch AI 지표명이 그대로 걸렸다. 검출 단계로 앞당긴다.

    길이 상한을 두는 이유: 닫는 따옴표가 없는 글에서 나머지 전체가 통째로
    지워지는 것을 막는다.
    """
    text = re.sub(r'[""“”]([^""“”]{1,400})[""“”]', " ", text)
    text = re.sub(r"[''‘’]([^''‘’]{1,200})[''‘’]", " ", text)
    return text


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
     r"(그대로 옮긴다|옮겨 적어 본다|옮겨 적는다|옮겨 본다|풀어 쓰자면|짚어 본다|묶어 본다"
     r"|한 발 더 들어가면|다시 읽어 본다|한눈에 본다|또렷해진다|풀어 두면)", 0.0),
    ("T7", "고전 번역투", "S2",
     r"((?<!관계)(?<!상태)(?<!위치)(?<!상황)에 있어서|라는 진단이다"
     r"|을 가능하게 한다|되어진|지어진다)", 0.0),
    # 위키체·광고체 — voice-edit 공통 항목
    ("V1", "위키체", "S2", r"(본 보고서|규명한다|분석하고자|살펴본다|고찰한다)", 0.0),
    ("V2", "광고체", "S2", r"(혁신적|획기적|게임 체인저)", 0.0),
    ("V3", "AI 접속부사", "S2",
     r"(흥미롭게도|주목할 만한(?! AI 모델)|결론적으로|이러한 맥락에서)", 0.0),
]

# ⛔ 의도적으로 뺀 것 — 넣으면 사람 글을 AI 글로 오판한다
#   · "것이다" 단독 빈도 → 사람이 AI보다 2배 많이 쓴다. T2는 종결 분포로 본다
#   · "~를 통해"        → 비번역 한국어가 번역문보다 2배 많이 쓴다
#   · 과의·와의          → 대부분 정상이고 '인과의'처럼 낱말 내부가 걸린다
#
# ⛔ 426편 전수 정독으로 걷어낸 것 (2026-08-02) — 오탐률이 정탐을 덮었다
#   · "차세대"      오탐 84%. next-generation의 표준 번역이다.
#                   "차세대 원전", "차세대 Vera Rubin GPU"는 기술 세대 표기지 광고가 아니다
#   · "놀라운"      오탐 79%. 남의 연구 성과에 붙는 평가어는 광고체가 아니다
#                   ("놀라운 정확도로 풀었다"). 자사를 수식할 때만 문제인데 그건 T11이 본다
#   · "을 부른다"   오탐 88%. 그냥 우리말이다 — "반발을 부른다", "손실을 부른다"
#   · "옮긴다"      오탐 84%. 본동사와 메타 예고가 형태가 같다.
#                   "무게중심을 옮긴다"는 진짜 옮기는 것이다 → "그대로 옮긴다"류로 좁혔다
#   · "에 있어서"   "관계에 있어서" = '있+어서'. 번역투 구문이 아니라 본동사다 → 앞말 예외
#   · "주목할 만한" Epoch AI 지표명 "주목할 만한 AI 모델(notable AI models)"은 고유명사다
#
# ⛔ 표본 정독으로 걷어낸 것 (2026-08-02, 2차) — 항목 자체가 틀렸다
#   · T12a "~하는 것"  **항목 삭제.** 610건 중 74%가 분열문("X하는 것은 Y다")이다.
#                      분열문은 한국어에서 초점을 주는 필수 구문이라 없애면 강조가 사라진다
#                      ("클라리오가 겨냥하는 것은 ROT다"). 나머지 158건도 표본 22건에서
#                      전부 정상이었다 — 진짜 명사화 문제를 한 건도 찾지 못했다.
#                      명사화라는 현상 자체는 있으나 우리 글에는 없다
#   · "로의"           낱말 내부를 잡는다. 147건 중 51건(38%)이 오탐 —
#                      서로의·앞으로의·경로의·회로의·스스로의·이시구로의(인명)·그대로의.
#                      "인과의"와 똑같은 실패다.
#
# ⛔ T12 전체 삭제 (2026-08-02, 3차). 남은 셋도 표본을 읽으니 근거가 없었다.
#   · T12b 격조사 겹침  "임베딩 공간에서의 분산", "좁은 공간에서의 유지보수"는 정상이다.
#                      '으로의' 40건 중 13건은 "앞으로의"(부사+의)라 오탐이고, 나머지는
#                      "A에서 B로의 전환"이라는 방향 관용이다. '로서의' 20건은 자격을
#                      나타내는 정상 표현으로 하나도 고칠 것이 없었다
#   · T12c "~기 위해"   표본 12건 전부 정상. 목적을 나타내는 기본 문법이다
#   · T12d 무생물 복수  215건 중 204건이 복수를 명시할 이유가 있는 자리다. '기업들'(79)은
#                      조직=사람 집합이라 자연스럽고, '데이터들' 6건도 전부 개별 항목을
#                      가리킨다("이 데이터들이 모여 만든 분포")
#
#   v5 문서는 T12를 "실측으로 확인된 것만"이라 적었으나, 그 실측은 **빈도 계산**이었지
#   문맥 정독이 아니었다. 몇 건 나오는지만 세고 그것이 문제인지는 읽지 않았다.


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


# ─────────────────────────────────────────────────────────────────────────────
# R1 — 종결체 (2026-09-05 결정: 본문 종결은 해라체가 정본)
#
# 세는 자(검증됨 — 최근 60일 KO 289편 손 집계와 일치. 2026-09-05 리뷰로 '아니다' 구멍을 막았다):
#   합쇼체 = '(?<!아)니다[.!?]'          해라체 = '(?<!(?<!아)니)다[.!?]'   (합쇼체가 아닌 '-다' 전부)
#   해요체 = '(해요|예요|에요|죠|네요|거예요)[.!?]'
# ⚠️ 틀린 자: '[^습입]다.' 는 "니다." 를 해라체로 세고, '(?<!습니)(?<!입니)' 는 갑니다·합니다·봅니다를 해라체로 센다.
#   '니다[.!?]' 는 해라체 "아니다." 를 합쇼체로 센다(사본 592편에서 1,242문장).
# 판정: 합쇼체+해요체 비율이 10% 초과면 위반. 직접 인용문(따옴표·blockquote) 안은 세지 않는다.
# 엔진 계량기(service/blog-service-engine/vendor/im-not-ai/measure.py register_counts + strip_blockquotes)와 같은 자다 —
# 자를 바꾸면 둘과 docs/ko-style-standard.md §4-1 표를 같이 고친다.
# --json: `register` 키에 전부 실리고, `checks` 배열에도 같은 R1 행이 들어간다(위반 수를 checks 로 세는 소비자가
# 텍스트 출력의 '임계 초과 N건' 과 같은 수를 얻도록). count = 합쇼체+해요체 문장 수.
# ─────────────────────────────────────────────────────────────────────────────

REGISTER_MAX_NON_HAERA = 0.10
_RX_HAPSYO = re.compile(r"(?<!아)니다[.!?]")
_RX_HAERA = re.compile(r"(?<!(?<!아)니)다[.!?]")
_RX_HAEYO = re.compile(r"(?:해요|예요|에요|죠|네요|거예요)[.!?]")
_RX_SENT = re.compile(r"[^.!?\n]*[.!?]")


def check_register(text, example_limit=3):
    """R1 — 문장마다 종결을 하나로 분류해 센다. 위반 문장 예를 최대 3개 돌려준다."""
    hapsyo = haeyo = haera = 0
    examples = []
    for m in _RX_SENT.finditer(text):
        sent = m.group(0).strip()
        if not sent:
            continue
        tail = sent[-6:]
        if _RX_HAPSYO.search(tail):
            hapsyo += 1
            kind = "hapsyo"
        elif _RX_HAEYO.search(tail):
            haeyo += 1
            kind = "haeyo"
        elif _RX_HAERA.search(tail):
            haera += 1
            kind = "haera"
        else:
            continue
        if kind != "haera" and len(examples) < example_limit:
            examples.append(sent[:120])
    total = hapsyo + haeyo + haera
    ratio = (hapsyo + haeyo) / total if total else 0.0
    return {
        "code": "R1", "name": "종결체(해라체 정본)", "severity": "S2",
        "count": hapsyo + haeyo, "in_quote": 0,
        "hapsyo": hapsyo, "haeyo": haeyo, "haera": haera, "total": total,
        "non_haera_ratio": round(ratio, 4), "threshold": REGISTER_MAX_NON_HAERA,
        "flagged": ratio > REGISTER_MAX_NON_HAERA, "examples": examples,
    }


def run_checks(text, detect):
    """빈도의 분모는 본문 전체(text), 검출은 인용을 지운 쪽(detect)에서 한다."""
    chars = len(text)
    rows = []
    for code, name, sev, pat, threshold in CHECKS:
        n = len(re.findall(pat, detect))
        in_quote = len(re.findall(pat, text)) - n   # 인용 안이라 제외한 건수
        per10k = n / chars * 10000 if chars else 0
        rows.append({
            "code": code, "name": name, "severity": sev,
            "count": n, "in_quote": in_quote, "per_10k": round(per10k, 2),
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

def report(path, text, rows, endings, lv, register=None):
    chars = len(text)
    print(f"\n{'=' * 72}\n{path}\n본문 {chars:,}자\n{'=' * 72}")
    print(f"{'코드':<6} {'등급':<4} {'항목':<18} {'건수':>5} {'1만 자당 빈도':>14}  판정")
    for r in rows:
        mark = "⚠️ " if r["flagged"] else "   "
        q = f"  (인용 {r['in_quote']}건 제외)" if r.get("in_quote") else ""
        print(f"{r['code']:<6} {r['severity']:<4} {r['name']:<18} "
              f"{r['count']:>5} {r['per_10k']:>14.2f}  {mark}{q}")

    if endings:
        mark = "⚠️  쏠림" if endings["flagged"] else "   정상"
        print(f"\nT2   S3   종결 다양도        최빈 '{endings['top_ending']}' "
              f"{endings['share']:.0%} ({endings['sentences']}문장)  {mark}")
        print("     분포:", ", ".join(f"{e}({n})" for e, n in endings["distribution"]))

    if register:
        r = register
        mark = "⚠️  위반" if r["flagged"] else "   정상"
        print(f"\nR1   S2   종결체(해라체 정본)  합쇼체 {r['hapsyo']} · 해요체 {r['haeyo']} · 해라체 {r['haera']} "
              f"— 비해라체 {r['non_haera_ratio']:.0%} ({r['total']}문장, 상한 {r['threshold']:.0%})  {mark}")
        if r["flagged"]:
            for s in r["examples"]:
                print(f"     예: {s}")
        rows = rows + [r]

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
            text, detect = extract_body(path)
        except OSError as e:
            print(f"건너뜀: {path} ({e})", file=sys.stderr)
            continue
        rows = run_checks(text, detect)
        # 종결 분포·경동사도 인용을 뺀 쪽에서 본다 — 남의 말은 우리 문체가 아니다
        endings = check_endings(detect)
        lv = find_light_verbs(detect) if args.light_verbs else None
        # R1 종결체는 <main> 본문(인용 제외)에서 센다
        main_text, had_main = extract_main_for_register(path)
        register = check_register(main_text)
        register["had_main"] = had_main
        if args.json:
            out.append({"path": path, "chars": len(text), "checks": rows + [register],
                        "endings": endings, "register": register, "light_verbs": lv})
        else:
            report(path, text, rows, endings, lv, register)

    if args.json:
        print(json.dumps(out, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
