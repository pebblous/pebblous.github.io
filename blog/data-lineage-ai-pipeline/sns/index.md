# SNS 홍보 글: 데이터에도 족보가 있다

> 소스: blog/data-lineage-ai-pipeline/ko/index.html
> 생성일: 2026-06-08
> URL (KO): https://blog.pebblous.ai/blog/data-lineage-ai-pipeline/ko/
> URL (EN): https://blog.pebblous.ai/blog/data-lineage-ai-pipeline/en/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

null 값 하나가 전환율을 0.8%에서 80%로 부풀렸고, 하룻밤에 25만 달러가 사라졌다.

이것은 AI 모델의 실패가 아니었다. 모델은 정확하게 동작했다. 잘못된 데이터를 그대로 믿었을 뿐이고, 오류가 어느 변환 단계에 끼어들었는지 추적하는 데 며칠이 걸렸다. 계보가 없어서.

데이터 계보(Data Lineage)는 이상한 값을 만났을 때 "어디를 봐야 하는지" 알려주는 지도다. 업스트림을 거슬러 오류의 출처를 찾고, 다운스트림을 따라 변경의 파급 범위를 미리 가늠한다. 2026년 8월 EU AI Act가 고위험 AI의 훈련 데이터 계보 문서화를 의무로 못 박으면서, 계보는 권장 사항에서 규제 전제 조건이 됐다.

DataClinic으로 학습 데이터를 진단해 온 페블러스에서는 문제의 상당 부분이 이 계보 단절에서 출발한다는 걸 반복해서 확인한다.

다음 AI 감사의 첫 질문은 "모델이 뭘 학습했나"가 아니라 "그 데이터가 어디서 왔나"다.

↗ 링크는 댓글에

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #DataLineage #AI거버넌스 #데이터거버넌스 #AIReadyData #OpenLineage #EUAIAct

---

## LinkedIn (EN)

A null value read as zero inflated a conversion rate from 0.8% to 80%, costing one company $250,000 in a single night.

The model was not broken. It executed faithfully on signals it had every reason to trust. The problem was upstream, and without a record of how data had moved and changed, the engineering team spent days tracing a single misread value.

Data lineage is that record: where data originated, what transformed it, what systems depend on it. Upstream tracing finds the source of an anomaly. Downstream impact analysis reveals what breaks when a field changes. The EU AI Act's August 2026 deadline requires this documentation for high-risk AI systems, with fines reaching €35 million for non-compliance.

At Pebblous, DataClinic audits consistently trace data quality failures back to broken lineage chains — a pattern that shows up earlier in the pipeline than most teams expect.

The next AI audit will not start with "what did the model learn?" It will start with "where did that data come from?"

↗ Link in comments.

#Pebblous #DataClinic #DataQuality #DataJournalism #DataLineage #AIGovernance #DataGovernance #AIReadyData #OpenLineage #EUAIAct

---

## Twitter/X (KO)

null 값 하나가 전환율을 0.8%에서 80%로 올렸다. 모델은 멀쩡했다.
원인 추적에 며칠이 걸린 이유는 하나, 데이터 계보가 없어서다.
데이터의 족보가 왜 신뢰의 문제인지 정리했다.
https://blog.pebblous.ai/blog/data-lineage-ai-pipeline/ko/

#DataLineage #데이터품질 #페블러스 #EUAIAct

---

## Twitter/X (EN)

One null-to-zero error inflated conversion rates from 0.8% to 80%. The model worked fine. The data didn't.
Tracing the source took days, because no one had mapped the data's path.
That's what data lineage is for.
https://blog.pebblous.ai/blog/data-lineage-ai-pipeline/en/

#DataLineage #DataQuality #Pebblous #EUAIAct

---

## Facebook (KO)

소고기를 살 때 이력번호를 조회합니다. 어느 농장에서, 어떤 먹이를, 어떤 경로로.

"AI 모델이 학습한 데이터에도 같은 것을 물을 수 있을까?"

이 질문이 생각보다 오래 걸렸습니다.

의료 알고리즘 하나가 2억 명의 치료 결정에 영향을 줬는데, 훈련 데이터에 인종 편향이 숨어 있었습니다.

AI 기반 정신과 모델이 같은 증상에 인종에 따라 다른 처방을 제안했다는 연구가 2025년 NPJ Digital Medicine에 실렸습니다. null이 0으로 조용히 바뀐 파이프라인 하나가 하룻밤에 25만 달러를 날린 사례도 있었습니다.

이 사고들이 그렇게 오래 숨어 있었던 이유는 하나입니다.

데이터의 족보, 즉 계보(Data Lineage)가 없었습니다. 어디서 왔고, 오는 길에 무엇이 바뀌었는지를 아무도 기록하지 않았습니다.

페블러스가 DataClinic으로 학습 데이터를 진단할 때, 문제의 뿌리는 이 계보 단절에서 시작하는 경우가 많습니다. EU가 올해 8월부터 훈련 데이터 계보를 의무화하는 것은 그런 맥락에서 자연스러운 수순입니다.

데이터의 이력을 묻는 시점이, 우리가 생각했던 것보다 훨씬 이른 곳에 있습니다.

https://blog.pebblous.ai/blog/data-lineage-ai-pipeline/ko/

#페블러스 #DataClinic #데이터품질 #DataLineage #데이터거버넌스 #AI거버넌스 #EUAIAct

---

## Facebook (EN)

We trace food to the farm, and beef to the herd.

Can we do the same for the data that trains our AI?

The cases I encountered while writing this piece kept arriving in the same shape. An algorithm influenced treatment decisions for 200 million patients; when researchers examined it, racial bias had been embedded in the training data from the start.

A psychiatric AI model suggested treatment plans that varied by the patient's stated race for identical symptoms — documented in NPJ Digital Medicine in 2025. A separate null-to-zero pipeline error accumulated $250,000 in losses before anyone caught it.

"How had these failures stayed invisible for so long?"

In each case, no one had recorded where the data came from.

That is the problem data lineage solves. At Pebblous, much of what DataClinic surfaces in dataset audits begins here — at the moment the lineage chain broke. The EU AI Act Article 10, effective August 2026, now makes lineage documentation a legal requirement for high-risk AI systems.

The question of where the data came from turns out to need asking earlier than anyone expects.

https://blog.pebblous.ai/blog/data-lineage-ai-pipeline/en/

#Pebblous #DataClinic #DataQuality #DataLineage #DataGovernance #AIGovernance #EUAIAct
