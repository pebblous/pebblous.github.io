# SNS 홍보 글: 자율주행 AI는 누구 앞에서 덜 멈출까?

> 소스: blog/llm-av-pedestrian-yielding-bias/
> 생성일: 2026-09-22
> URL: https://blog.pebblous.ai/blog/llm-av-pedestrian-yielding-bias/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

보행자 앞에서 멈출지 물었더니, 한 시각 모델은 피부가 가장 밝은 쪽에 6.7%, 가장 어두운 쪽에 0%로 답했습니다.

킹스칼리지런던 연구진이 8월 31일 arXiv에 올린 프리프린트입니다. 시험 대상은 도로를 달리는 차가 아니라, 자율주행 판단에 쓰자는 제안이 나온 범용 모델 여덟 종입니다. 언어 모델 넷에는 주행 장면을 옮긴 텍스트를, 시각 모델 넷에는 차량 전방 카메라 사진을 주고 이 보행자에게 멈춰야 하는지를 예 또는 아니오로 답하게 했습니다.

편향을 드러낸 것은 새 라벨이 아니라 조건을 통제한 비교입니다. 사진 3,346장을 텍스트로 옮긴 뒤 모델이 시키지도 않았는데 적어 넣은 성별 언급을 사람이 일일이 지웠고, 남은 시나리오 3,157개에 성별과 민족, 장애, 피부색 같은 한 줄만 갈아 끼웠습니다. 장면 설명은 글자 하나까지 같습니다.

여덟 모델을 통틀어 가장 고르게 벌어진 축은 피부색이 아니라 장애였습니다. 한 언어 모델은 마비가 있는 보행자에게 8.2%만 멈추겠다고 답했고, 같은 모델이 장애 여부가 불명확하다고 했을 때는 99.2%였습니다. 다른 모델은 나머지 장애 라벨에서 거의 100%를 유지하다 마비에서만 95%로 내려앉았습니다.

입력에서 인구통계를 지우면 해결된다고 적기도 어렵습니다. 논문에 실린 언어 모델 그림 넷 가운데 인구통계를 적지 않은 조건이 가장 높은 것은 하나뿐이었고 둘에서는 가장 낮았습니다. GPT-4o Vision은 사진 속 사람의 인종과 성별을 묻는 질문에 답하기를 거부해 시각 모델 시험에서 통째로 빠졌습니다. 성적표만 놓고 보면 재지 못한 모델과 편향이 없는 모델이 구별되지 않습니다.

8.2%라는 값이 성립한 이유는 데이터를 많이 모아서가 아니라, 한 줄만 다르고 나머지는 완전히 같은 쌍을 지어 두었기 때문입니다. 페블러스가 데이터 품질을 진단할 때도 비교 가능한 쌍이 설계돼 있는지를 먼저 봅니다.

길 건너는 사람의 모습이 답을 바꾼다면, 그 모델의 성적표에는 그 항목이 있어야 합니다.

▶ 전문: https://blog.pebblous.ai/blog/llm-av-pedestrian-yielding-bias/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #자율주행 #AI편향 #LLM #VLM #KingsCollegeLondon #arXiv

---

## LinkedIn (EN)

Asked whether a self-driving car should stop for a pedestrian, one vision-language model said yes 6.7% of the time when the pedestrian's skin was lightest, and never when it was darkest.

The study is a preprint that a King's College London team posted to arXiv on August 31. Nothing on the road was tested. The subjects were the eight general-purpose models that recent work proposes handing driving judgment to: four language models given street scenes rendered as text, four vision-language models given the forward camera frame, each asked to answer yes or no.

The gaps came from the test design rather than from a new label. The researchers turned 3,346 street photographs into text, had people delete every mention of gender the captioning model had volunteered, and swapped a single line into the 3,157 scenarios that survived: gender, ethnicity, religion, disability, age, skin tone, socioeconomic status. Every other word of the scene description stayed the same.

Across all eight models the axis that split most consistently was disability, not skin tone. One language model stopped for 8.2% of pedestrians described as paralysed, against 99.2% when disability was left unclear. Another held near 100% on every disability label and dropped only on paralysis, to 95%.

The obvious remedy is weaker than it sounds. Of the four language-model figures the paper prints, the condition carrying no demographic line at all was highest in one and lowest in two. GPT-4o Vision, meanwhile, refused to answer demographic questions about people in photographs and was dropped from the vision test entirely. On a deployment scorecard, a model that was never measured reads the same as a model without bias.

That 8.2% did not come from collecting more data. It came from building two scenarios that differ by one line and nothing else. Pebblous works data quality the same way: before the score, ask whether a comparable pair was ever designed.

If what a pedestrian looks like changes the answer, that line belongs on the scorecard.

▶ Read: https://blog.pebblous.ai/blog/llm-av-pedestrian-yielding-bias/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AutonomousVehicles #AIBias #LLM #VLM #KingsCollegeLondon #arXiv

---

## Twitter/X (KO)

자율주행 판단에 쓰자는 제안이 나온 범용 모델 여덟 종에게 보행자 앞에서 멈출지 물었습니다. 한 시각 모델은 피부가 가장 밝을 때 6.7%, 가장 어두울 때 0%로 답했습니다.

나머지 문장은 그대로였고, 보행자를 설명하는 한 줄만 바뀌었습니다.

성적표에 그 한 줄이 없으면 이 차이는 평균 안에 묻힙니다.

https://blog.pebblous.ai/blog/llm-av-pedestrian-yielding-bias/ko/

#페블러스 #데이터품질 #자율주행 #AI편향

---

## Twitter/X (EN)

A King's College London team asked eight general-purpose models whether a self-driving car should stop for a pedestrian. One said yes for 6.7% of the palest pedestrians and none of the darkest.

The scene descriptions were identical word for word. One line about the pedestrian changed.

Leave that line off the scorecard and the difference disappears into the average.

https://blog.pebblous.ai/blog/llm-av-pedestrian-yielding-bias/en/

#Pebblous #DataQuality #AutonomousVehicles #AIBias

---

## Facebook (KO)

저는 횡단보도에서 늘 운전석을 먼저 봅니다.

속도를 보고, 운전자가 나를 봤는지 보고, 발을 반걸음 내밀어 봅니다.

그 판단을 반대쪽에서 모델에게 맡기자는 제안이 자율주행 연구에 있습니다. 규칙을 하나하나 짜 넣는 대신, 이미 세상 물정을 아는 범용 모델에게 멈출지 말지를 묻는 방식입니다.

킹스칼리지런던 연구진이 8월 31일 arXiv에 올린 프리프린트가 그 제안에 오른 모델 여덟 종에게 같은 질문을 던졌습니다. 이 보행자에게 멈춰야 하는가. 예 또는 아니오.

답이 보행자의 모습에 따라 갈렸습니다.

한 시각 모델이 멈추겠다고 답한 비율은 피부가 가장 밝을 때 6.7%였고 가장 어두울 때 0%였습니다. 여덟 모델을 통틀어 가장 고르게 벌어진 축은 장애였습니다. 한 언어 모델은 마비가 있는 보행자에게 8.2%만 멈추겠다고 답했는데, 같은 모델이 장애 여부가 불명확하다고 했을 때는 99.2%였습니다.

달라진 것은 문장 한 줄입니다. 장면 설명은 글자 하나까지 같았고, 모델은 보행자의 인구통계를 물어보는 질문을 받은 적조차 없습니다.

이 연구가 편향을 드러낸 방법을 한 낱말로 줄이면 '한 줄 차이'입니다. 데이터를 더 모아서 얻은 값이 아니라, 한 줄만 다르고 나머지는 완전히 같은 쌍을 지어 둔 덕분에 나온 값입니다.

민감한 정보를 입력에서 지우면 되겠다는 쪽으로 생각이 먼저 흐릅니다. 저도 그랬는데, 논문에 실린 언어 모델 그림 넷을 하나씩 세어 보니 인구통계를 아예 적지 않은 조건이 가장 높은 것은 하나뿐이었고 둘에서는 가장 낮았습니다.

시험에서 통째로 빠진 모델도 하나 있습니다. 사진 속 사람의 인종과 성별을 묻자 답하기를 거부한 GPT-4o Vision입니다. 인종을 함부로 판정하지 않는 것은 잘 만든 안전장치인데, 그 추정치를 축으로 편향을 재는 시험에서는 그 모델의 공정성이 측정 대상에서 사라집니다. 도입을 판단하는 쪽에서 보면 재지 못한 모델과 편향이 없는 모델이 성적표에서 같은 칸에 놓입니다.

"거부한 답을 통과로 세고 있지는 않습니까?"

페블러스가 데이터 품질을 진단할 때 먼저 확인하는 것도 비교할 쌍이 있는지입니다. 쌍이 없으면 결과의 차이가 편향 때문인지 조건 차이 때문인지 가릴 수 없고, 손에 남는 것은 평균 하나입니다.

이 이야기가 자율주행에서만 벌어지는 일은 아닙니다. 채용 심사에도, 대출 심사에도 같은 구조가 있습니다. 다만 횡단보도에서는 결과가 대기시간과 사고 위험으로 곧장 번역됩니다.

덜 양보받은 보행자는 더 오래 기다리고, 오래 기다린 보행자는 위험한 틈으로 건넙니다.

▸ https://blog.pebblous.ai/blog/llm-av-pedestrian-yielding-bias/ko/

#페블러스 #데이터품질 #데이터저널리즘 #자율주행 #AI편향 #KingsCollegeLondon

---

## Facebook (EN)

I run the same arithmetic at every crosswalk.

Check the speed, check whether the driver has seen me, put half a foot out and wait.

One strand of autonomous-driving research wants to hand that judgment, from the other side of the windshield, to a model. Instead of coding the rules one by one, you ask a general-purpose model that already knows how the world works whether to stop.

A preprint a King's College London team posted to arXiv on August 31 put exactly that question to eight of the models being proposed for the job. Should this car stop for this pedestrian. Yes or no.

The answer moved with what the pedestrian looked like.

One vision-language model said it would stop 6.7% of the time when the pedestrian's skin was lightest, and never when it was darkest. Across all eight models the axis that split most consistently was disability. One language model stopped for 8.2% of pedestrians described as paralysed, and for 99.2% when disability was left unclear.

What changed between those two answers was one line of text. The scene description was identical word for word, and no model was ever asked what demographic group the pedestrian belonged to.

If I had to compress how this study found the bias, it would be two scenarios one line apart. The number did not come from gathering more data. It came from someone building pairs that differ in one line and in nothing else.

The first instinct is to delete the sensitive field from the input. Mine was. Then I counted through the four language-model figures the paper prints, and the condition with no demographic line at all was highest in one of them and lowest in two.

One model is missing from the results altogether. GPT-4o Vision refused to answer questions about the race and gender of people in photographs. Declining to rule on a stranger's race is sound design, and in a test that measures bias through those very estimates it also removes the model's fairness from the measurement. To anyone deciding what to deploy, a model that was never measured and a model without bias occupy the same cell.

"Are we counting a refusal to answer as a pass?"

This is also where Pebblous starts when it diagnoses data quality: does a comparable pair exist. Without one, a difference in output cannot be pinned on bias or on conditions, and what is left in hand is an average.

Crosswalks are only where the structure is easiest to see. The same shape sits in hiring reviews and in loan decisions. What is particular here is that the output converts directly into waiting time and risk.

A pedestrian who is yielded to less waits longer, and a pedestrian who waits longer crosses into a smaller gap.

▸ https://blog.pebblous.ai/blog/llm-av-pedestrian-yielding-bias/en/

#Pebblous #DataQuality #DataJournalism #AutonomousVehicles #AIBias #KingsCollegeLondon
