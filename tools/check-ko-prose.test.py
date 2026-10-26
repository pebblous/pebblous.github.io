#!/usr/bin/env python3
"""check-ko-prose.py — M1·M2·T13·R2 시험 (2026-10-25). 실행: python3 tools/check-ko-prose.test.py

합성 HTML 조각으로 항목마다 양성(잡혀야)·반례(안 잡혀야)·인용 제외를 본다.
CI 가 이 파일을 돌리지 않으므로 검사기를 고치면 직접 실행한다.
"""
import importlib.util, os, sys, tempfile

spec = importlib.util.spec_from_file_location("ck", os.path.join(os.path.dirname(__file__), "check-ko-prose.py"))
ck = importlib.util.module_from_spec(spec); spec.loader.exec_module(ck)
passed = failed = 0


def check(name, cond):
    global passed, failed
    if cond:
        passed += 1; print(f"  ✓ {name}")
    else:
        failed += 1; print(f"  ✗ {name}")


def page(es="", body="", faqs="", nav="", svg=""):
    return f"""<html><head><title>t</title></head><body>
<nav>{nav}</nav><main>
<section id="executive-summary"><h2>Executive Summary</h2><div class="key-insight"><p>{es}</p></div></section>
{body}{svg}</main>
<script>PebblousPage.init({{ faqs: [ {faqs} ] }});</script></body></html>"""


def run(html_text):
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False, encoding="utf-8") as f:
        f.write(html_text); p = f.name
    raw = open(p, encoding="utf-8").read()
    main, _ = ck.extract_main_for_register(p)
    text, detect = ck.extract_body(p)
    out = {"M1": ck.check_meta_reads(main), "M2": ck.check_lead(raw), "R2": ck.check_aux_register(raw),
           "T13": [r for r in ck.run_checks(text, detect) if r["code"] == "T13"][0]}
    os.unlink(p); return out


print("M1 메타 '읽는다'")
r = run(page(es="이 글은 스노클AI가 발표한 투자 유치를 읽는다. 받은 돈은 3억 달러다."))
check("'이 글은 ~을 읽는다' 를 잡는다", r["M1"]["count"] == 1)
r = run(page(body="<p>여기서부터는 데이터를 다루는 쪽에서 이 소식을 다시 읽는다.</p>"))
check("'여기서부터는 … 다시 읽는다' 를 잡는다", r["M1"]["count"] == 1)
r = run(page(body="<p>논문은 이 성적을 다섯 평가축으로 나눠 읽는다. 모델은 문장을 읽는다.</p>"))
check("저자 해석·글자 그대로의 '읽는다' 는 안 잡는다", r["M1"]["count"] == 0)
r = run(page(body='<p>그는 "이 글은 이렇게 읽는다."라고 말했다.</p>'))
check("따옴표 안은 안 잡는다", r["M1"]["count"] == 0)

print("M2 초록 첫 문장 리드")
r = run(page(es="2026년 10월 20일 중국에서 회사 하나가 문을 열었다. 이름은 국가데이터그룹이다."))
check("날짜로 시작하면 잡는다", r["M2"]["flagged"])
r = run(page(es="이 리포트는 독파모 평가를 다룬다. 둘째 문장이다."))
check("'이 리포트는' 으로 시작하면 잡는다", r["M2"]["flagged"])
r = run(page(es="중국이 국가 주도로 데이터를 공급하는 회사를 설립했다는 소식이다. 10월 20일 문을 열었다."))
check("소식으로 시작하면 안 잡는다(둘째 문장의 날짜는 무관)", not r["M2"]["flagged"])
r = run("<html><body><main><p>초록 없는 글이다.</p></main></body></html>")
check("초록이 없으면 판정하지 않는다", not r["M2"]["flagged"] and not r["M2"]["has_summary"])

print("T13 부정 대조")
dense = "<p>" + "이것은 사고가 아니라 설계다. 그것은 우연이 아니다. " * 30 + "</p>"
sparse = "<p>" + "이 회사는 데이터를 만들어 판다. 매출은 해마다 늘었다. 고객은 연구소와 기업이다. " * 30 + "</p>"
check("반복되면 임계를 넘는다", run(page(body=dense))["T13"]["flagged"])
check("없으면 안 넘는다", not run(page(body=sparse))["T13"]["flagged"])

print("R2 FAQ·목차·도식 종결체")
faq_bad = '{ question: "이 회사는 무엇을 파나요?", answer: "데이터를 팝니다. 모델은 팔지 않습니다." }'
faq_ok = '{ question: "이 회사는 무엇을 파나?", answer: "데이터를 판다. 모델은 팔지 않는다. 그게 전부는 아니다." }'
r = run(page(faqs=faq_bad))
check("FAQ 합쇼체·해요체 질문을 잡는다", r["R2"]["hapsyo"] == 2 and r["R2"]["haeyo"] == 1)
check("FAQ 해라체는 안 잡는다('아니다' 포함)", run(page(faqs=faq_ok))["R2"]["count"] == 0)
r = run(page(nav='<a href="#a">2. 제본을 자르면 스캔이 빨라집니다</a>'))
check("목차 합쇼체(마침표 없음)를 잡는다", r["R2"]["by_zone"].get("toc") == 1)
r = run(page(svg='<svg><text x="1">원본이 없습니다</text></svg>'))
check("도식 글자 합쇼체를 잡는다", r["R2"]["by_zone"].get("svg") == 1)
r = run(page(faqs='{ question: "정부는 무엇이라 했나?", answer: "차관은 \\"결정적이었다고 보기 어렵습니다\\"라고 답했다." }'))
check("FAQ 안 따옴표 인용은 안 잡는다", r["R2"]["count"] == 0)

r = run(page(faqs='{"question":"무엇인가요?","answer":"데이터입니다."}'))
check("따옴표 친 키(json.dumps FAQ)도 잰다", r["R2"]["count"] == 2)
r = run(page(nav='<a href="/">홈</a></nav><nav class="toc-nav"><a href="#a">데이터가 필요합니다</a>'))
check("<nav> 가 여럿이면 뒤쪽 목차도 잰다", r["R2"]["by_zone"].get("toc") == 1)

print(f"\n{passed} passed, {failed} failed")
sys.exit(1 if failed else 0)
