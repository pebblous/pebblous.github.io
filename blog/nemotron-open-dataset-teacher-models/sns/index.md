# SNS 홍보 글: 엔비디아 네모트론 공개 데이터, 답변을 쓴 건 경쟁사 AI다

> 소스: blog/nemotron-open-dataset-teacher-models/ko/index.html
> 생성일: 2026-10-20
> URL: https://blog.pebblous.ai/blog/nemotron-open-dataset-teacher-models/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

엔비디아가 개방 모델과 함께 푼 학습 데이터에는 답을 써 준 모델의 이름이 적혀 있는데, 그 자리에 엔비디아의 모델은 한 번도 나오지 않습니다.

10월 15일 공개된 Nemotron 3.5 Super VL은 가중치와 데이터와 조리법을 함께 연다고 밝혔습니다. 가장 큰 385만 건짜리 데이터의 답을 쓴 것은 문샷AI의 Kimi, 구글의 Gemma 4, 알리바바의 Qwen입니다. 열한 벌 중 어떤 모델로 만들었는지 적어 둔 것은 다섯 벌이고, 그 다섯이 모두 엔비디아 밖의 모델을 가리킵니다.

이미 잘하는 모델에게 질문을 던져 답을 받고 그 문답을 새 모델의 교재로 쓰는 방식은 이제 드물지 않습니다. 달라지는 것은 출처를 묻는 자리입니다. 데이터가 어느 웹페이지에서 왔는지가 아니라, 어느 모델의 약관 아래서 나왔는지를 봐야 합니다.

데이터셋 카드에 걸린 라이선스는 OpenMDW-1.1 한 줄인데, 그 뒤에 서로 다른 약관이 셋 겹쳐 있습니다. 셋 다 학습 결과물에 조건을 남기지 않았습니다. 다만 그중 한 곳은 그 답이 약관 본문이 아니라 저장소 토론 글에 있었고, 그마저도 이번에 쓰인 판본이 아니라 한 세대 앞선 판본의 저장소에 달려 있었습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 쓸 수 있는 상태로 만드는 일은 결측을 메우고 라벨을 고치는 데서 끝나지 않습니다. 이 데이터가 어디서 왔고 무엇을 지고 왔는지를 같이 적어 두지 않으면, 되짚어야 할 때 되짚을 자리가 남지 않습니다.

▶ 전문: https://blog.pebblous.ai/blog/nemotron-open-dataset-teacher-models/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #합성데이터 #데이터거버넌스 #NVIDIA #Nemotron #Gemma4 #OpenMDW

---

## LinkedIn (EN)

The training data NVIDIA released alongside its open model names the models that wrote the answers, and an NVIDIA model never appears in that slot.

Nemotron 3.5 Super VL arrived on October 15 with what NVIDIA described as the weights, the data and the recipe together. The answers in the largest set, 3.85 million records of instruction following and chat, were written by Moonshot AI's Kimi, Google's Gemma 4 and Alibaba's Qwen. Five of the eleven sets name the model behind them, and all five name a model from outside NVIDIA.

Putting questions to a strong model and using the answers as a textbook for a new one is no longer unusual. What moves is where the provenance question lands. It is no longer which web page the data was scraped from, but under whose model terms it was produced.

The license on the dataset card is a single line, OpenMDW-1.1, and three different sets of terms sit behind it. None of the three leaves a condition on a model trained with this data. For one of them, though, that answer is absent from the license text. It turned up in a repository discussion thread, and on the repository of the previous generation of the model rather than the version actually used.

Pebblous verifies the quality of AI training data with DataClinic. Getting data into a usable state does not end with filling gaps and fixing labels. Unless you record where a dataset came from and what it carries with it, there is nothing left to trace on the day you need to trace it.

▶ Read: https://blog.pebblous.ai/blog/nemotron-open-dataset-teacher-models/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #SyntheticData #DataGovernance #NVIDIA #Nemotron #Gemma4 #OpenMDW

---

## Twitter/X (KO)

엔비디아가 개방 모델과 함께 학습 데이터 열한 벌을 풀었습니다. 어떤 AI로 만들었는지 적힌 다섯 벌은 전부 다른 회사 모델을 가리킵니다.

합성 데이터가 재료의 기본이 되면, 데이터의 출처를 묻는 일은 웹페이지를 되짚는 일에서 다른 모델의 약관을 되짚는 일로 옮겨 갑니다.

https://blog.pebblous.ai/blog/nemotron-open-dataset-teacher-models/ko/

#페블러스 #데이터품질 #NVIDIA #Nemotron #합성데이터

---

## Twitter/X (EN)

NVIDIA opened eleven training datasets alongside its new open model. All five that name the model behind their answers name a rival's.

Once synthetic data is the default material, asking where data came from stops being a question about web pages and becomes one about another model's terms.

https://blog.pebblous.ai/blog/nemotron-open-dataset-teacher-models/en/

#Pebblous #DataQuality #NVIDIA #Nemotron #SyntheticData

---

## Facebook (KO)

이 글을 쓰면서 가장 오래 걸린 일은 숫자를 확인하는 쪽이 아니었습니다.

약관 세 건을 찾아 읽는 일이었습니다.

엔비디아가 10월 15일에 개방 모델 하나를 내면서, 학습에 쓴 데이터 열한 벌을 같이 풀었습니다. 가중치만 열고 데이터는 닫아 두는 쪽이 지금의 관행이라 드문 일입니다.

그중 가장 큰 한 벌을 열어 봤습니다. 385만 건이 들어 있는데, 그 안의 답을 쓴 것은 엔비디아의 모델이 아니었습니다. 문샷AI와 구글과 알리바바의 모델이 썼습니다.

데이터셋 카드 맨 위에 걸린 라이선스는 한 줄입니다. 그 한 줄 뒤에는 서로 다른 약관이 셋 있었습니다.

"이 데이터로 모델을 학습시키면, 답을 써 준 쪽의 조건이 내 모델까지 따라옵니까?"

셋 다 따라오지 않았습니다. 다만 그중 한 곳은 그 답이 약관 본문에 없었습니다. 저장소 토론 글까지 들어가야 나왔고, 그마저도 이번에 쓰인 판본이 아니라 한 세대 앞선 판본의 저장소에 달린 답이었습니다.

'네 칸'이라고 불러 보려 합니다.

사람이 남긴 대화가 한 칸, 그 대화로 학습한 모델이 한 칸, 그 모델이 써 준 답이 한 칸, 그 답으로 학습할 우리 모델이 또 한 칸입니다.

칸마다 라이선스가 따로 붙고, 뒤 칸의 표기가 앞 칸의 조건을 지우지 못합니다. 그런데 우리가 보는 것은 대개 맨 뒤 칸에 걸린 한 줄입니다.

되짚어 보니 조건이 실제로 남은 자리는 의심하던 자리가 아니었습니다. 경쟁사 모델이 써 준 답은 아무것도 남기지 않았고, 조건을 남긴 쪽은 그 아래에 깔린 사람의 기록이었습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 데이터를 쓸 수 있는 상태로 만드는 일은 결측을 메우고 라벨을 고치는 데서 끝나지 않습니다. 이 데이터가 어디서 왔고 무엇을 지고 왔는지를 같이 적어 두는 것까지가 그 일에 들어갑니다.

기록이 없으면 나중에 되짚을 수 없고, 되짚을 수 없는 데이터는 문제가 생긴 뒤에야 비싸집니다.

이번에는 엔비디아가 열어 준 덕분에 네 칸을 다 볼 수 있었습니다. 닫혀 있었다면 라이선스 한 줄을 믿는 것 말고 할 수 있는 일이 없었을 겁니다.

▶ 전문: https://blog.pebblous.ai/blog/nemotron-open-dataset-teacher-models/ko/

#페블러스 #데이터품질 #데이터저널리즘 #NVIDIA #Nemotron #합성데이터

---

## Facebook (EN)

The longest part of writing this was not checking the numbers.

It was finding and reading three sets of license terms.

On October 15 NVIDIA released an open model, and alongside it the eleven datasets used to tune it. Opening the weights while keeping the data closed is the habit, so this was unusual.

I opened the largest of the eleven. It holds 3.85 million records, and the answers inside were not written by an NVIDIA model. They came from Moonshot AI, Google and Alibaba.

The license at the top of the dataset card is one line. Behind that line sat three different sets of terms.

"If I train a model on this data, do the terms of whoever wrote the answers follow into my model?"

None of the three did. For one of them, though, the answer was nowhere in the license text. It took a discussion thread in the repository to find, and the thread sat on the repository of the previous generation of the model rather than the version actually used here.

Call it the four steps.

Conversations people wrote are one step. The model trained on those conversations is another. The answers that model produced are a third. And our model, trained on those answers, is a fourth.

Each step carries its own license, and a label on a later step does not erase the conditions on an earlier one. What we usually see is the single line attached to the last step.

Traced through, the step that leaves a condition was not the one I expected. The answers written by rival models leave none. What leaves conditions is the human record underneath them.

Pebblous verifies the quality of AI training data with DataClinic. Getting data into a usable state does not end with filling gaps and fixing labels. Recording where the data came from, and what it carries with it, belongs to the same job.

Without that record there is nothing to trace later, and data you cannot trace only gets expensive after something has already gone wrong.

This time all four steps were visible, because NVIDIA opened them. Had they stayed closed, there would have been nothing to do but trust one line.

▶ Read: https://blog.pebblous.ai/blog/nemotron-open-dataset-teacher-models/en/

#Pebblous #DataQuality #DataJournalism #NVIDIA #Nemotron #SyntheticData
