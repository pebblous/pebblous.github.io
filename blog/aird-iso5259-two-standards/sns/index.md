# SNS 홍보 글: AIRD와 ISO 5259, AI가 쓸 데이터를 준비하는 기준

> 소스: blog/aird-iso5259-two-standards/ko/index.html
> 생성일: 2026-11-19
> URL (KO): https://blog.pebblous.ai/blog/aird-iso5259-two-standards/ko/
> URL (EN): https://blog.pebblous.ai/blog/aird-iso5259-two-standards/en/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

모델을 학습시키려고 만든 자료가 아닌데, 학습용과 똑같은 품질 검사를 받았다.

국가기술표준원이 공공데이터포털에 올린 국내리콜 보고서다. 어떤 제품이 안전기준을 얼마나 넘겼는지가 행마다 적혀 있고, 공개 CSV는 844행이다. 누군가 이 자료를 검색 조각 843개로 잘라 물질과 초과 배율을 태그로 붙여 공개했다. 질문을 받은 프로그램이 찾아보고 세어 보도록 만든 입력이다.

판정은 AIRD라는 국내 체계가 내렸다. 데이터가 AI에 쓰일 준비를 갖췄는지 품질과 목적 두 갈래로 나눠 묻는다. 기록은 두 줄로 갈라졌다. 원천 자료는 10월 11일 품질 관문을 통과해 Tier3를 받았고, 같은 자료를 잘라 만든 검색용 꾸러미는 목적 판정이 '해당 없음'으로 남아 다음 판으로 미뤄졌다. 무엇에 쓸지를 적어 둔 기준이 등록되지 않았다. 가공한 결과물은 원천의 등급을 물려받지 못한다.

성적도 공개됐다. 리콜 질문의 정확 일치는 23/42에서 42/42로 올랐다. 단서는 운영 쪽이 같은 페이지에 먼저 달아 두었다. 정답을 꾸러미 만든 규칙으로 집계한 탓에 정확 일치에서는 꾸러미 조건이 구조적으로 유리하고, 질문 수가 적어 통계 검정은 하지 않았다는 것이다.

같은 시험에서 수소·연료 질문은 전후가 28/28로 같았다. 데이터를 손봐서 얻는 것이 업무마다 다르다.

AIRD는 아직 TTAK 초안 단계이고 확정 일정은 올해 12월이다. 나란히 놓이는 ISO/IEC 5259-2는 재작년 11월에 발행된 국제표준이다. 지위가 다른 두 기준이 같은 파일에 다른 질문을 던진다.

페블러스가 Data Greenhouse에 두는 자리는 여러 기준을 등록해 같은 데이터에 함께 걸어 보는 쪽이다. 측정·개선 기술은 ISO 5259를 바탕으로 쌓았고, AIRD 쪽은 어댑터와 평가 구현을 검증하는 계획 단계다. 에이전트가 회사 문서에서 답을 길어 오는 자리에서 먼저 볼 것은 점수의 높이가 아니라, 그 점수가 어떤 기준 판본과 어떤 증거 위에서 나왔는가다.

▶ 전문: https://blog.pebblous.ai/blog/aird-iso5259-two-standards/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #DataGreenhouse #AIReadyData #AIRD #ISO5259 #공공데이터 #데이터거버넌스 #RAG

---

## LinkedIn (EN)

A dataset assembled for an AI to search, not to train on, was put through a data-quality verdict.

The file is ordinary enough. Korea's Agency for Technology and Standards keeps a domestic recall report on the national open-data portal, 844 rows of products that crossed a safety limit. Someone cut it into 843 retrieval chunks, tagged each with the substance and how far over the limit it ran, and added seven evaluation questions. It is input for a program that has to look things up, not a textbook to memorise.

The verdict came from AIRD, a Korean framework that splits readiness into quality and purpose, behind a step asking whether the data can be found at all. The record split. The source cleared the quality gate on 11 October at Tier3. The pack cut out of it carries a purpose verdict of "not applicable," held for a later release: nothing records what that pack is for. A tier earned by a source does not transfer to what is processed out of it.

Scores were published too. Exact matches on the recall questions moved from 23/42 to 42/42. The operator put the caveat on the same page: the answer key was tallied with the rules that built the pack, which favours the pack on exact match, and the question count was too small for a statistical test.

On the hydrogen and fuel questions the comparison returned 28/28 both ways. What preparation buys differs from task to task.

AIRD remains a TTAK draft, with confirmation scheduled for December. ISO/IEC 5259-2, the standard it is set beside, was published in November 2024. Two frameworks of unequal standing, one file, two sets of questions.

What Pebblous builds into Data Greenhouse is not a choice between them but a place to register several sets of thresholds, run them over one dataset, and go back for whatever came up short. The measuring and repairing work rests on ISO 5259; the AIRD adapter and its evaluation implementation sit at the verification-plan stage. Where agents answer by reading in-house documents, what matters is not how high a score runs but which threshold version and which evidence produced it.

▶ Read: https://blog.pebblous.ai/blog/aird-iso5259-two-standards/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #DataGreenhouse #AIReadyData #AIRD #ISO5259 #OpenData #DataGovernance #RAG

---

## Twitter/X (KO)

학습용으로 만든 자료가 아닌데 품질 판정을 받았다. 에이전트가 찾아 읽도록 조각내 둔 리콜 자료다.

원천은 품질 관문을 통과했고, 그 원천을 잘라 만든 꾸러미는 목적 판정이 다음 판으로 미뤄졌다. 등급은 승계되지 않는다.

AI가 쓸 데이터는 학습자료만이 아니다.

https://blog.pebblous.ai/blog/aird-iso5259-two-standards/ko/

#페블러스 #데이터품질 #AIRD #ISO5259

---

## Twitter/X (EN)

A dataset assembled for an AI to search, not to train on, drew a data-quality verdict in Korea. It had been cut into chunks so a program could look things up and count them.

The source cleared the quality gate. The pack cut out of it still waits on a purpose verdict. The tier does not transfer.

Data an AI uses is not only the data it learned from.

https://blog.pebblous.ai/blog/aird-iso5259-two-standards/en/

#Pebblous #DataQuality #AIRD #ISO5259

---

## Facebook (KO)

'AI가 쓸 데이터를 준비한다'는 말을 들으면 저는 아직도 학습용 데이터를 먼저 떠올립니다.

고르고, 라벨을 붙이고, 모델에 넣는 그림입니다.

지난달 공개된 판정 기록 한 건이 그 그림의 바깥에 있습니다.

국가기술표준원이 공공데이터포털에 올려 둔 국내리콜 보고서입니다. 어떤 제품이 안전기준을 얼마나 넘겼는지가 행마다 적혀 있는 자료입니다.

누군가 이 자료를 조각으로 잘라 물질과 초과 배율을 태그로 붙이고, 평가 질문을 함께 묶어 공개했습니다.

모델에게 외우게 할 교재가 아닙니다. 질문을 받은 프로그램이 찾아보고 세어 보도록 만든 입력입니다.

학습시키려고 만든 자료가 아닌데, 품질을 따져 묻는 절차는 학습용과 똑같이 돌았습니다.

그리고 기록이 두 줄로 갈라졌습니다.

원천 자료는 품질 관문을 통과했습니다. 그런데 그 자료를 잘라 만든 꾸러미는 목적 판정이 '해당 없음'으로 남았습니다. 이 꾸러미를 무엇에 쓸 것인지가 아직 어디에도 등록되지 않았기 때문입니다.

품질이 좋다는 말과 이 일에 쓸 준비가 됐다는 말은 서로 다른 결론이었고, 둘 중 하나만 나와 있었습니다.

"지금 사내 에이전트가 뒤지고 있는 문서들은 둘 중 어느 쪽까지 확인돼 있습니까?"

페블러스가 Data Greenhouse에서 하려는 일도 여러 기준을 등록해 같은 데이터에 함께 걸어 보는 쪽입니다. 측정과 개선 기술은 ISO 5259를 바탕으로 쌓았고, AIRD 쪽은 아직 검증을 계획하는 단계입니다.

모델이 무엇을 배웠는지는 한 가지 질문입니다. 모델이 오늘 찾아 읽는 자료가 어디까지 검사를 받았는지는 다른 질문인 것 같습니다.

▶ 전문: https://blog.pebblous.ai/blog/aird-iso5259-two-standards/ko/

#페블러스 #데이터품질 #데이터클리닉 #AIRD #ISO5259 #공공데이터 #DataGreenhouse

---

## Facebook (EN)

When someone tells me data is being prepared for AI, I still picture a training set first.

Selected, labelled, fed to a model.

A verdict published in Korea last month sits outside that picture.

The file is an ordinary one. On Korea's national open-data portal sits a recall report from the Agency for Technology and Standards, where each row says which product crossed a safety limit and by how much.

Someone cut that file into chunks, tagged each one with the substance and the margin by which it went over, and published the result together with a set of evaluation questions.

Not a textbook for a model to memorise. Input for a program that has been handed a question and has to look things up and count what it finds.

It was never assembled to train anything. The procedure that interrogated its quality ran exactly as it would have for training material.

Then the record split in two.

The source dataset cleared the quality gate. The pack cut out of it came back with its purpose verdict marked "not applicable," held over for a later release, because nothing yet records what that pack is meant to be used for.

Good quality and ready for this particular job turned out to be two separate findings, and only one of them had been reached.

"The documents your agent is reading at work today — which of the two has anyone established?"

The missing half is the one the agent actually leans on. A model's answer can be decided by a file that never entered its training, and a tier earned by a source dataset does not travel to whatever gets processed out of it.

Pebblous builds Data Greenhouse so that several sets of thresholds can be registered and run over the same data, rather than picking one and calling the matter settled. The measuring and repairing work rests on ISO 5259. The AIRD side is still a verification plan.

What a model learned is one question. What it is reading right now, and how far that material was ever checked, seems to be a different one.

▶ Read: https://blog.pebblous.ai/blog/aird-iso5259-two-standards/en/

#Pebblous #DataQuality #DataClinic #AIRD #ISO5259 #OpenData #DataGreenhouse
