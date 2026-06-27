# SNS 홍보 글: 데이터브릭스가 AI 답변의 근거를 문서에서 데이터로 바꿨다

> 소스: blog/databricks-genie-one-governed-data/ko/index.html
> 생성일: 2026-06-27
> URL: https://blog.pebblous.ai/blog/databricks-genie-one-governed-data/ko/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

같은 모델에 같은 질문을 던졌는데, 정확도가 25%에서 84.5%로 벌어졌다. 바뀐 건 모델이 아니라 데이터였다.

2026년 6월 데이터브릭스가 Data + AI Summit에서 Genie One을 출시했다. 마케팅·재무·영업팀이 자연어로 사내 데이터를 묻는 에이전트 코워커다. 핵심은 챗봇이라는 형식이 아니라 그 답이 어디에서 나오는가에 있다. 문서를 임베딩해 비슷한 조각을 찾아오는 RAG 대신, Genie One은 거버넌스된 데이터를 SQL로 직접 쿼리한다.

엔진은 Genie Ontology다. 테이블·대시보드·연결 앱에서 비즈니스 컨텍스트를 지식 그래프로 엮고, OntoRank가 기업 안에 흩어진 데이터 정의 중 어느 것을 믿을지 자동으로 가린다. 비슷한 문서를 찾는 대신 맞는 데이터를 조회하는 구조다.

다만 84.5%는 데이터브릭스가 자사 환경에서 자사 제품으로 측정한 내부 벤치마크이고, 제3자 독립 검증은 아직 없다. 그럼에도 방향은 분명하다. 컨텍스트 경쟁의 진짜 승부처는 더 영리한 검색 알고리즘이 아니라 그 아래 깔린 데이터가 정제·거버넌스되어 있는가다. 페블러스가 줄곧 말해온 AI-Ready Data 명제를, 이번엔 시장에서 가장 큰 데이터 플랫폼이 제품으로 확인했다.

▶ 전문: https://blog.pebblous.ai/blog/databricks-genie-one-governed-data/ko/

#페블러스 #데이터클리닉 #데이터품질 #AIReadyData #데이터거버넌스 #온톨로지 #엔터프라이즈AI #Databricks #GenieOne #GenieOntology

---

## LinkedIn (EN)

Same model, same question, and the accuracy gap ran from 25% to 84.5%. What changed wasn't the model. It was the data.

In June 2026, Databricks launched Genie One at its Data + AI Summit: an agentic coworker that lets marketing, finance, and sales teams query internal data in plain language. The novelty isn't the chatbot format. It's where the answer comes from. Instead of embedding documents and retrieving lookalike chunks the way RAG does, Genie One queries governed data directly through SQL.

The engine is Genie Ontology. It weaves business context from tables, dashboards, and connected apps into a living knowledge graph, while OntoRank decides which of an enterprise's scattered data definitions to trust — the way PageRank once ranked web pages. The agent looks up the right data rather than the nearest-looking text.

One caveat: the 84.5% comes from an internal benchmark Databricks ran on its own products, with no third-party verification yet. Even so, the direction is clear. The real contest in the context layer isn't a smarter retrieval algorithm — it's whether the data underneath is clean and governed. The AI-Ready Data thesis Pebblous has argued for years just got confirmed, in product form, by the largest data platform in the market.

▶ Read: https://blog.pebblous.ai/blog/databricks-genie-one-governed-data/en/

#Pebblous #DataClinic #DataQuality #AIReadyData #DataGovernance #Ontology #EnterpriseAI #Databricks #GenieOne #GenieOntology

---

## Twitter/X (KO)

데이터브릭스 Genie One은 RAG처럼 문서를 임베딩하지 않는다. 거버넌스된 데이터를 SQL로 직접 쿼리한다.

같은 모델, 같은 질문에 정확도 25% → 84.5%. 격차를 만든 건 모델이 아니라 데이터였다.

컨텍스트 경쟁의 승부처는 검색 알고리즘이 아니라 데이터 품질이다.

https://blog.pebblous.ai/blog/databricks-genie-one-governed-data/ko/

#페블러스 #데이터품질 #Databricks #GenieOne

---

## Twitter/X (EN)

Databricks Genie One doesn't embed documents like RAG. It queries governed data directly through SQL.

Same model, same questions: accuracy went from 25% to 84.5%. The gap came from the data, not the model.

The context-layer contest is won on data quality, not retrieval tricks.

https://blog.pebblous.ai/blog/databricks-genie-one-governed-data/en/

#Pebblous #DataQuality #Databricks #GenieOne

---

## Facebook (KO)

"지난 분기 서부 지역 매출이 얼마였죠?"

마케터가 사내 AI에게 묻습니다. 답은 곧바로, 자신 있게 돌아옵니다. 문제는 그 숫자가 어디에서 왔는지 아무도 모른다는 데 있습니다.

지난 2년 동안 "엔터프라이즈에 AI를 붙인다"는 말은 대체로 한 가지를 뜻했습니다. 사내 문서를 잘게 쪼개 벡터로 바꾸고, 질문이 들어오면 모양이 비슷한 조각을 찾아 모델에게 읽히는 것. RAG입니다. 그런데 비즈니스의 진짜 맥락은 어느 PDF의 한 문단이 아니라 거버넌스된 테이블 안에 있습니다. 벡터 검색은 질문과 비슷해 보이는 텍스트를 가져올 뿐, 어느 정의가 권위 있는지는 알지 못합니다. 그래서 에이전트는 종종 자신만만하게 틀립니다.

이번 6월 데이터브릭스가 내놓은 Genie One은 그 출발점을 바꿉니다. 답의 근거를 문서 더미가 아니라 거버넌스된 데이터에 둡니다. 같은 모델에 같은 질문을 줘도, 데이터를 정리하지 않으면 25%가 나오고 정리하면 84.5%가 나왔다고 합니다. 바꾼 건 모델이 아니라 데이터였다는 이야기입니다.

저는 이 발표에서 숫자보다 그 방향이 오래 남았습니다. 시장에서 가장 큰 데이터 플랫폼이, AI의 정확도는 모델이 아니라 데이터에서 시작된다고 제품으로 말한 셈이니까요. 페블러스가 DataClinic으로 데이터 준비도를 진단해 온 이유도 같은 자리에 있습니다. 화려한 에이전트를 붙이기 전에 바닥부터 점검하는 일 말입니다.

그래서 남는 질문은 하나입니다. "지금 우리 조직의 데이터는, AI가 답의 근거로 삼을 만큼 정돈되어 있나?"

▶ 전문: https://blog.pebblous.ai/blog/databricks-genie-one-governed-data/ko/

#페블러스 #데이터품질 #데이터거버넌스 #AIReadyData #Databricks #GenieOne #온톨로지

---

## Facebook (EN)

"What were our West region sales last quarter?"

A marketer asks the company's AI. The answer comes back fast, and confident. The trouble is that no one knows where the number came from.

For two years, "adding AI to the enterprise" mostly meant one thing: chop internal documents into vectors, and when a question arrives, fetch the chunks that look most similar and hand them to the model. That's RAG. But the real context of a business doesn't live in a paragraph of some PDF — it lives in governed tables. Vector search pulls back text that resembles the question; it has no idea which definition is authoritative. So the agent is often wrong, and sure of itself.

Genie One, which Databricks unveiled this June, moves that starting point. It grounds the answer in governed data rather than a pile of documents. Give the same model the same question, and Databricks says accuracy sat near 25% before the data was organized and rose to 84.5% once it was. What changed was the data, not the model.

What stayed with me wasn't the number, but the direction. The largest data platform in the market just said, in product form, that AI's accuracy begins in the data, not the model. That's the same place Pebblous has been working from, diagnosing data readiness with DataClinic before any agent gets bolted on top.

Which leaves one question. "Is our data organized well enough for an AI to stand its answers on?"

▶ Read: https://blog.pebblous.ai/blog/databricks-genie-one-governed-data/en/

#Pebblous #DataQuality #DataGovernance #AIReadyData #Databricks #GenieOne #Ontology
