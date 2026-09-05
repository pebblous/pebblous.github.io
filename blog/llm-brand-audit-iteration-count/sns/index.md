# SNS 홍보 글: AI 브랜드 추천, 몇 번 재야 그 숫자를 믿을 수 있나

> 소스: blog/llm-brand-audit-iteration-count/ko/index.html
> 생성일: 2026-09-06
> URL: https://blog.pebblous.ai/blog/llm-brand-audit-iteration-count/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

같은 질문을 다섯 번 던져 얻은 "AI가 우리 브랜드를 추천하는 비율"의 신뢰도는 0.58이었다.

에스토니아 기업가응용과학대학교의 드미트리 자투힌이 이달 초 arXiv에 올린 논문의 값이다. 자신이 앞서 수행한 브랜드 추천 감사 다섯 건의 원자료를 꺼내, 교육 측정 분야의 일반화가능도 이론으로 다시 분석했다. 열다섯 번을 반복해야 0.81에 닿았다. 집단 수준 판단에 쓸 만하다고 보는 관례적 기준선이 0.80이다.

값이 이렇게 낮게 시작하는 이유는 분산의 생김새에 있다. 브랜드 개수를 재는 이 감사에서 모델과 프롬프트의 조합이 설명하는 몫은 전체의 21.8%였고, 나머지 78.2%는 같은 조합에 같은 질문을 다시 던질 때 생기는 흔들림이었다. 반복은 그 흔들림을 평균으로 눌러 아래에 깔린 신호를 드러낸다.

정작 횟수 자체는 남의 데이터로 옮겨 가지 않았다. 논문이 사전등록해 붙인 외부 검증에서, 다른 팀이 공개한 자료 세 벌 가운데 상당수 모델은 다섯 번만으로도 0.80을 넘었고 어떤 모델은 다섯 번에서 0.07에 그쳤다. 저자가 AI 브랜드 가시성 도구를 만드는 회사의 대표라는 이해상충도 논문에 함께 적혀 있다.

이식되는 것은 고정된 횟수가 아니라 열 번짜리 파일럿으로 분산을 갈라 보고 필요한 반복 횟수를 그 자리에서 푸는 절차다. 몇 번 쟀는지 적혀 있지 않은 점유율은 아직 지표가 아니라 관측 하나다.

▶ 전문: https://blog.pebblous.ai/blog/llm-brand-audit-iteration-count/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI가시성 #생성형엔진최적화 #LLM평가 #측정신뢰도 #AIReadyData

---

## LinkedIn (EN)

Ask a model the same question five times, and the share-of-recommendation number you get carries a reliability of 0.58.

The figure comes from a paper Dmitrij Żatuchin of Estonian Entrepreneurship University of Applied Sciences posted to arXiv this month. He took the raw data from five brand-recommendation audits he had run earlier and reanalyzed it with generalizability theory, a framework borrowed from educational measurement. Fifteen repeated queries were needed to reach 0.81. The conventional bar for group-level decisions is 0.80.

The reason the number starts that low is the shape of the variance. In this audit of brand counts, the model-and-prompt combination accounted for 21.8% of the total, while the remaining 78.2% came from asking the same combination the same question again. Repetition averages that churn down and lets the signal underneath show.

What did not travel was the count itself. In a pre-registered validation against three public datasets collected by other teams, many models cleared 0.80 after only five queries, and one sat at 0.07 after the same five. The paper also discloses that its author runs a company selling AI brand visibility tools.

What transfers is not a fixed number of queries but a procedure: run a ten-query pilot, split the variance, and solve for the count your own data requires. A share figure with no iteration count written next to it is an observation, not yet a metric.

▶ Read: https://blog.pebblous.ai/blog/llm-brand-audit-iteration-count/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIVisibility #GenerativeEngineOptimization #LLMEvaluation #AIReadyData

---

## Twitter/X (KO)

같은 질문을 다섯 번 던져 얻은 "AI가 우리 브랜드를 추천하는 비율"의 신뢰도는 0.58이었다.

몇 번 쟀는지 적혀 있지 않은 점유율은 아직 지표가 아니라 관측 하나다.

▶ https://blog.pebblous.ai/blog/llm-brand-audit-iteration-count/ko/

#페블러스 #데이터품질 #AI가시성 #LLM평가

---

## Twitter/X (EN)

Ask a model the same question five times, and the brand-recommendation number you get carries a reliability of 0.58.

A share figure with no iteration count next to it is an observation, not yet a metric.

▶ https://blog.pebblous.ai/blog/llm-brand-audit-iteration-count/en/

#Pebblous #DataQuality #AIVisibility #LLMEvaluation

---

## Facebook (KO)

"지난주보다 2%p 올랐습니다."

AI가 우리 브랜드를 얼마나 추천하는지 보여 주는 대시보드를 앞에 두고, 요즘 이런 문장을 주고받는 자리가 늘고 있습니다.

그런데 그 숫자를 얻으려고 같은 질문을 몇 번 던졌는지는 화면 어디에도 적혀 있지 않은 경우가 많습니다.

에스토니아의 한 연구자가 이달 초 arXiv에 올린 논문은 그 횟수에 값을 붙였습니다. 자기가 앞서 수행한 브랜드 추천 감사 다섯 건의 원자료를 꺼내 다시 계산해 보니, 다섯 번 물어 얻은 값의 신뢰도가 0.58이었습니다. 열다섯 번이라야 0.81에 닿았습니다.

값이 이렇게 낮게 시작하는 이유는 흔들림의 크기에 있었습니다. 이 감사에서 모델과 프롬프트가 설명하는 몫은 전체 분산의 5분의 1 남짓이고, 나머지는 같은 모델에 같은 질문을 다시 던지는 동안 생긴 것이었습니다.

논문의 제목에 주사위가 들어가 있는 이유가 여기에 있습니다. 화면에 뜬 2%p가 변화인지 주사위 눈인지를, 한 번 굴린 값으로는 가릴 수 없습니다.

인상 깊었던 것은 저자가 열다섯 번을 표준으로 내세우지 않았다는 점입니다. 다른 팀이 공개한 자료 세 벌에 같은 잣대를 대 보니, 어떤 모델은 다섯 번으로도 충분했고 어떤 모델은 다섯 번에서 신뢰도가 0.07이었습니다. 옮겨 가는 것은 횟수가 아니라, 열 번짜리 파일럿으로 필요한 횟수를 그 자리에서 푸는 절차였습니다.

페블러스가 데이터 품질을 진단하며 자주 지나는 자리도 여기입니다. 지표는 이미 대시보드에 떠 있는데, 그 값이 어떤 조건에서 만들어졌는지는 아무도 적어 두지 않은 경우입니다.

"우리는 이 숫자를 몇 번 재고 있습니까? 그 횟수를 정한 근거는 무엇입니까?"

논문의 계산에서 반복을 다섯 번에서 열 번으로 늘리는 데 든 추가 비용은 18.75달러였습니다. 우리가 아직 그 값을 치르지 않은 이유가 비용이 아니라면, 무엇일까요.

▶ 전문: https://blog.pebblous.ai/blog/llm-brand-audit-iteration-count/ko/

#페블러스 #AI가시성 #생성형엔진최적화 #데이터품질 #데이터클리닉 #AIReadyData

---

## Facebook (EN)

"Up two points from last week."

Dashboards that track how often AI models recommend your brand are becoming a normal thing to sit in front of, and that is the kind of sentence people say to each other in front of them.

How many times the same question was asked to produce that number is usually written nowhere on the screen.

A paper an Estonian researcher posted to arXiv this month put a value on that count. He went back to the raw data from five brand-recommendation audits he had run and recalculated it. Five queries gave a reliability of 0.58. Fifteen were needed to reach 0.81.

The reason it starts that low was the size of the churn. In this audit, the model and the prompt together explained a little over a fifth of the total variance. The rest appeared while the same model was being asked the same question again.

That is why the paper has a dice roll in its title. Whether the two points on the screen are a change or a throw of the dice is not something a single roll can settle.

What struck me was that the author did not put fifteen forward as the standard. Held against three datasets other teams had published, some models were fine after five queries and one sat at 0.07 after the same five. What travels is not the count. It is the procedure: run a ten-query pilot and solve for the number your own data needs.

This is familiar ground for Pebblous, which diagnoses data quality for a living. The metric is already on the dashboard, and the conditions that produced it were never written down anywhere.

"How many times are we measuring this number? And what settled on that count?"

In the paper's own costing, going from five queries to ten added 18.75 dollars. If cost is not the reason we have not paid it yet, what is?

▶ Full piece: https://blog.pebblous.ai/blog/llm-brand-audit-iteration-count/en/

#Pebblous #AIVisibility #GenerativeEngineOptimization #DataQuality #DataClinic #AIReadyData
