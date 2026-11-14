# SNS 홍보 글: 답이 미리 새는 데이터 누수가 분석 AI의 점수를 올린다

> 소스: blog/agentic-data-science-silent-failures/
> 생성일: 2026-10-15
> URL: https://blog.pebblous.ai/blog/agentic-data-science-silent-failures/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

데이터 누수는 분석 AI의 성적을 떨어뜨리지 않습니다. 올립니다.

네덜란드 국립수학정보연구소(CWI) 연구진이 10월 9일 arXiv에 올린 논문입니다. 데이터 과학 에이전트 세 종에 언어모델 세 종을 붙여 과제 220개에 돌리고, 나온 분석 절차를 정확도가 아니라 절차 자체로 채점했습니다.

채점한 절차 1,761개에서 방법론 결함 4,557건이 나왔습니다. 절차 하나당 2.58건입니다.

방향이 두 갈래로 갈립니다. 평가용 데이터가 학습에 섞여 드는 누수 계열 여섯 가지는 전부 예측 순위를 끌어올렸고, 분할이나 정제를 건너뛰는 생략 계열 아홉 가지는 대체로 순위를 깎았습니다. 그중 학습과 검증을 아예 나누지 않는 결함이 순위를 가장 크게 떨어뜨렸습니다.

전담 안전장치도 막지 못했습니다. 누수를 점검하는 에이전트를 따로 둔 MLEvolve에 가장 센 모델을 붙였더니, 절차 절반에서 검증 데이터가 학습으로 새어 들었습니다. 반대로 누수 계열 네 가지가 모두 0으로 찍힌 조합은 가장 작은 모델을 붙인 쪽이었습니다. 같은 조합이 학습과 검증을 한 번도 나누지 않았고 특징 공학도 거의 하지 않았으니, 샐 통로 자체가 없었던 것입니다.

아직 동료심사를 거치지 않은 프리프린트이고, 채점은 언어모델 심판이 맡았습니다. 심판이 있는 결함을 놓치는 쪽이라 저자들은 이 비율을 과소 추정으로 봅니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 데이터 품질을 진단하는 자리에서 이 논문이 겨냥하는 것은 에이전트의 실력이 아니라 기록으로 읽힙니다. 어느 단계를 밟았고 각 단계에서 평가용 데이터를 어떻게 격리했는지가 남아 있지 않으면, 점수는 아무것도 증명하지 못합니다.

에이전트가 제출한 "검증 정확도 0.93"은 절차를 지켜서 나온 숫자일 수도 있고, 답이 새어 들어서 나온 숫자일 수도 있습니다. 숫자만으로는 둘을 가를 방법이 없습니다.

▶ 전문: https://blog.pebblous.ai/blog/agentic-data-science-silent-failures/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #데이터누수 #AI에이전트 #머신러닝검증 #CWI #MLEvolve #arXiv

---

## LinkedIn (EN)

Data leakage did not drag the AI's score down. It pushed the score up.

That is the finding in a paper posted to arXiv on 9 October by researchers at Centrum Wiskunde & Informatica (CWI) in Amsterdam. They paired three data science agents with three language models, ran them over 220 tasks, and graded the pipelines on procedure rather than on the accuracy those pipelines reported.

Across 1,761 graded pipelines the study detected 4,557 methodological failures, or 2.58 per pipeline.

From there the two families move in opposite directions. All six failures in the data leakage family lifted the predicted ranking. The nine failures of omission, such as never separating training data from validation data, mostly pushed it down, and that particular omission cost the most.

A dedicated safeguard did not stop it. MLEvolve ships a separate agent whose job is to check for leakage, and paired with the strongest model, half of its pipelines still let validation data into training. The configuration that scored zero on four leakage categories was the one running the smallest model. That same configuration never split the data and barely engineered a feature, so no channel was left to leak through.

The paper is a preprint, not yet peer reviewed, and the grading was done by a language model judge. The judge misses failures more often than it invents them, so the authors read their own rate as an undercount.

Pebblous quantifies the quality of AI training data through DataClinic. From that vantage the paper indicts the record rather than the agent. If nothing survives to show which steps were taken and how the evaluation data was isolated at each one, the score proves nothing.

A validation accuracy of 0.93 handed over by an agent may have come from procedure kept intact, or from the answer leaking in. The number by itself cannot tell the two apart.

▶ Read: https://blog.pebblous.ai/blog/agentic-data-science-silent-failures/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DataLeakage #AIAgent #MLValidation #CWI #MLEvolve #arXiv

---

## Twitter/X (KO)

데이터 누수는 분석 AI의 성적을 깎지 않았습니다. 올렸습니다.

네덜란드 CWI 연구진이 데이터 과학 에이전트를 과제 220개에 돌려 보니, 평가용 데이터가 학습에 섞여 드는 결함은 전부 예측 순위를 끌어올렸고 절차를 건너뛰는 결함은 대체로 순위를 깎았습니다. 성적표만 보면 답이 샌 쪽이 더 좋은 모델로 보입니다.

https://blog.pebblous.ai/blog/agentic-data-science-silent-failures/ko/

#페블러스 #데이터품질 #데이터누수 #CWI

---

## Twitter/X (EN)

Data leakage did not drag the AI's score down. It pushed the score up.

Researchers at CWI ran data science agents over 220 tasks. Every failure that let evaluation data into training lifted the predicted ranking, while failures that skipped a step mostly lowered it. Read off the scorecard, the pipeline that saw the answer looks like the better model.

https://blog.pebblous.ai/blog/agentic-data-science-silent-failures/en/

#Pebblous #DataQuality #DataLeakage #CWI

---

## Facebook (KO)

"검증 정확도 0.93입니다."

이 한 줄을 보고받고 모델을 승인해 보신 적이 있다면, 그다음에 무엇을 더 물었어야 했는지 떠올려 보실 겁니다.

분할은 언제 했는지. 결측치를 채운 시점이 분할 앞인지 뒤인지. 지표를 왜 하필 그것으로 골랐는지.

사람이 절차를 설계하던 시절에는 이 질문들이 코드 리뷰 자리에서 나왔습니다. 묻는 사람이 따로 있었습니다.

이달 arXiv에 공개된 네덜란드 CWI 연구진의 논문은 그 자리가 비고 난 뒤에 무슨 일이 생기는지를 잽니다. 데이터 과학 에이전트가 짠 분석 절차를 정확도가 아니라 절차 자체로 채점했더니, 절차 하나당 방법론 결함이 평균 2.58건 나왔습니다.

불편한 쪽은 그다음입니다.

결함이 성적에 미치는 방향이 둘로 갈렸습니다. 평가용 데이터가 학습에 섞여 드는 누수는 예측 순위를 올렸고, 분할이나 정제를 건너뛴 생략은 대체로 순위를 깎았습니다.

성적표가 가장 잡아야 할 결함에 상을 주고 있었던 셈입니다. 연구진은 이것을 '조용한 실패'라 부릅니다.

누수 계열 네 가지가 모두 0으로 찍힌 조합이 하필 가장 작은 모델을 붙인 쪽이었다는 대목을 다시 읽었습니다. 지켜서 나온 0이 아니었습니다. 같은 조합이 학습과 검증을 한 번도 나누지 않았고 특징도 거의 만들지 않았으니, 샐 통로 자체가 없었던 것입니다.

전담 점검 장치를 붙인 쪽도 사정이 다르지 않았습니다. 누수를 점검하는 에이전트를 따로 둔 MLEvolve에 가장 센 모델을 붙였더니, 절차 절반에서 검증 데이터가 학습으로 새어 들었습니다.

"우리 팀이 에이전트에게 받은 '좋은 모델'은, 무엇을 지켰기에 좋은 겁니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 그 자리에서 자주 만나는 장면도 여기서 멀지 않습니다. 점수는 또렷하게 남아 있는데, 그 점수가 어떤 경계를 지키고 나온 것인지는 어디에도 남아 있지 않은 경우입니다.

이 논문이 센 열다섯 가지 실패는 그대로 점검 목록이 됩니다. 다만 결함을 몇 개 찾았는지로 채점하면, 단계를 가장 많이 건너뛴 절차가 가장 깨끗해 보입니다.

먼저 남겨야 하는 것은 무엇을 틀렸는지가 아니라 무엇을 했는지인 것 같습니다.

▸ https://blog.pebblous.ai/blog/agentic-data-science-silent-failures/ko/

#페블러스 #데이터클리닉 #데이터품질 #AIReadyData #데이터누수 #CWI

---

## Facebook (EN)

"Validation accuracy: 0.93."

If you have ever signed off on a model with that one line in front of you, you probably remember what you meant to ask next.

When was the split made. Was the imputation before it or after. Why that metric and not another one.

Back when people designed these pipelines by hand, those questions came up in code review. Someone was sitting there to ask them.

A paper posted to arXiv this month by researchers at CWI in Amsterdam measures what happens once that seat is empty. They graded the pipelines data science agents wrote on the procedure rather than on the accuracy, and found an average of 2.58 methodological failures in each one.

The uncomfortable part comes next.

The failures did not all push the same way. The ones that let evaluation data seep into training lifted the predicted ranking. The ones that skipped a step, such as never separating training from validation, mostly lowered it.

The scorecard was handing its prize to the failure that most needed catching. The authors call these silent failures.

I went back over the line where the configuration scoring zero on four leakage categories turned out to be the one running the smallest model. Not a zero earned by holding the line. That configuration never split the data and barely built a feature, so there was no channel left to leak through.

The framework carrying a dedicated safeguard fared no better. MLEvolve runs a separate agent whose only job is to check for leakage, and paired with the strongest model, half of its pipelines still let validation data into training.

"The 'good model' our team just received from an agent. What exactly was kept intact that makes it good?"

Pebblous quantifies the quality of AI training data through DataClinic. What we keep running into is not far from this. The score is there, legible and precise. What boundary was held to produce it is nowhere on the page.

The fifteen failures counted in this paper convert directly into a checklist. Though if the checklist grades on how many failures were found, the pipeline that skipped the most steps comes out looking cleanest.

What a quality record has to carry first, it seems, is not what went wrong but what was done.

▸ https://blog.pebblous.ai/blog/agentic-data-science-silent-failures/en/

#Pebblous #DataClinic #DataQuality #AIReadyData #DataLeakage #CWI
