#!/usr/bin/env python3
"""SNS 문안 검사 — sns-write v2 규격(2026-11-25, 사본 명세서 E23).

sns/index.md 의 두 칸 `## LinkedIn · Facebook (KO)` / `## LinkedIn · Facebook (EN)` 을
길이·수치·해시태그·자기소개·1인칭·대조·문체·수치 출처·링크로 센다.
수치 출처는 같은 글 폴더의 ko/index.html·en/index.html 본문(없으면 라이브 주소)에서 찾는다.

사용: python3 tools/check-sns.py blog/<slug>/sns/index.md [...]
종료 코드: 0 통과 · 1 불합격 칸 있음 · 2 실행 오류(파일 없음 등)
"""
import html
import os
import re
import sys
import urllib.request

SITE = "https://blog.pebblous.ai"
SECTION = {"ko": "## LinkedIn · Facebook (KO)", "en": "## LinkedIn · Facebook (EN)"}
LENGTH = {"ko": (350, 600), "en": (700, 1300)}
QTY = {
    "ko": r"\d[\d,.]*\s*(?:%|억|만|천|달러|원|건|명|배|곳)|(?<![A-Za-z] )\b\d+\.\d+\b(?!\s*(?:%|억|만))",
    "en": r"(?<![A-Za-z] )\b\d+\.\d+\b(?!\s*(?:%|billion|million))|\$\d[\d,.]*(?:\s*(?:billion|million|trillion))?"
          r"|\d[\d,.]*\s*(?:%|billion|million|thousand|trillion|points|times)|\b\d{1,3}(?:,\d{3})+\b",
}
SELF = r"페블러스는\s.{0,40}(?:진단|측정|정량|셈|돕|만든)|Pebblous (?:diagnoses|quantifies|puts|measures|scores|builds|helps)"
FIRST = {"ko": r"(?:^|[\s(\"'“])(?:나는|내가|나도|나의|우리가|우리는|우리의|우리 )",
         "en": r"\b(?:I|I'm|I've|I'd|me|my|My|We|we|our|Our|us|We're|we're)\b"}
CONTRAST = {"ko": r"아니라", "en": r"\bnot\b[^.;]{0,80}\bbut\b|\brather than\b"}
POLITE_KO = r"(?:(?<!아)니다|해요|예요|에요|네요|세요|죠)[.!?](?:\s|$)"  # 합쇼체 자 = 정본 (?<!아)니다
PAGE_CACHE = {}


def page_text(art_dir, lang):
    key = (art_dir, lang)
    if key in PAGE_CACHE:
        return PAGE_CACHE[key]
    local = os.path.join(art_dir, lang, "index.html")
    if os.path.exists(local):
        raw = open(local, encoding="utf-8").read()
    else:
        rel = os.path.relpath(art_dir).replace(os.sep, "/").strip("./")
        try:
            raw = urllib.request.urlopen(f"{SITE}/{rel}/{lang}/", timeout=20).read().decode("utf-8", "replace")
        except Exception:
            raw = ""
    raw = re.sub(r"<script.*?</script>|<style.*?</style>", " ", raw, flags=re.S)
    text = re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", " ", raw)))
    PAGE_CACHE[key] = text
    return text


def core(q):
    """'약 5억 건' → '5억', '$12.9 billion' → '12.9 billion', '96.3%' → '96.3%'."""
    q = q.replace("$", "").strip()
    m = re.match(r"([\d,.]+)\s*(%|억|만|천|billion|million|thousand|trillion|points)?", q)
    if not m:
        return q
    num = m.group(1).rstrip(".,")
    unit = m.group(2)
    if not unit:
        return num
    return num + ("" if unit in ("%", "억", "만", "천") else " ") + unit


def section(md, lang):
    head = SECTION[lang]
    i = md.find(head + "\n")
    if i < 0:
        return None
    rest = md[i + len(head) + 1:]
    m = re.search(r"\n---\s*\n|\n## ", rest)
    return rest[: m.start()] if m else rest


def check_slot(body, lang, art_dir):
    lines = [l.rstrip() for l in body.strip().splitlines()]
    tags = [t for l in lines if l.startswith("#") for t in l.split() if t.startswith("#")]
    link = [l for l in lines if l.startswith("▶")]
    text = "\n".join(l for l in lines if l and not l.startswith("#") and not l.startswith("▶")).strip()
    n = len(text)
    qty = re.findall(QTY[lang], text)
    selfi = re.findall(SELF, text)
    sents = [s for s in re.split(r"(?<=[.?!])\s+", text) if s.strip()]
    fp = sum(1 for s in sents if re.search(FIRST[lang], s))
    contrast = len(re.findall(CONTRAST[lang], text))
    src = page_text(art_dir, lang)
    missing = [q for q in qty if src and core(q) not in src]
    brand = "#페블러스" if lang == "ko" else "#Pebblous"
    lo, hi = LENGTH[lang]
    checks = [
        (f"길이 {n}", lo <= n <= hi),
        (f"수치 {len(qty)}", len(qty) <= 3),
        (f"해시태그 {len(tags)}", 3 <= len(tags) <= 5),
        (f"{brand}", brand in tags),
        (f"자기소개 {len(selfi)}", not selfi),
        (f"1인칭 {fp}", fp == 0),
        (f"대조 {contrast}", contrast <= 1),
        (f"출처없는 수치 {missing}" if missing else "수치 출처", not missing and bool(src)),
        ("링크", any(f"/{lang}/" in l and l.startswith("▶") for l in link)),
    ]
    if lang == "ko":
        polite = len(re.findall(POLITE_KO, text))
        checks.append((f"해라체 위반 {polite}", polite == 0))
    return checks


def main(paths):
    if not paths:
        print(__doc__)
        return 2
    fails = 0
    for p in paths:
        if not os.path.exists(p):
            print(f"XX  {p}: 파일 없음")
            return 2
        md = open(p, encoding="utf-8").read()
        art_dir = os.path.dirname(os.path.dirname(os.path.abspath(p)))
        extra = [h for h in re.findall(r"^## (.+)$", md, re.M) if h not in (s[3:] for s in SECTION.values())]
        if extra:
            fails += 1
            print(f"XX  {p}: 규격 밖 절 {extra} — 두 칸(LinkedIn · Facebook KO/EN)만 둔다")
        for lang in ("ko", "en"):
            body = section(md, lang)
            if body is None:
                fails += 1
                print(f"XX  {p} {lang}: 절 '{SECTION[lang]}' 없음")
                continue
            checks = check_slot(body, lang, art_dir)
            bad = [k for k, ok in checks if not ok]
            fails += bool(bad)
            print(f"{'OK ' if not bad else 'XX '} {p} {lang}  " + " · ".join(k for k, _ in checks)
                  + (f"   ← 불합격: {bad}" if bad else ""))
    print(f"check-sns: 불합격 {fails}")
    return 1 if fails else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1:]))
