# SNS 홍보 글: 노이즈에 흔들리던 과학 AI를 1940년대 수학 한 겹이 붙잡았다

> 소스: blog/mollifier-layers-scientific-ai/ko/index.html
> 생성일: 2026-06-21
> URL: https://blog.pebblous.ai/blog/mollifier-layers-scientific-ai/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

과학 AI가 막혔던 진짜 벽은 알고리즘이 아니라 데이터의 노이즈였습니다.

펜실베이니아대 연구팀은 관측에서 원인을 역산하는 역 편미분방정식 학습에서, 노이즈 섞인 데이터를 미분할수록 오차가 폭발하고 메모리가 치솟는 문제를 풀었습니다. 해법은 더 깊은 신경망이 아니었습니다. 수학자 프리드릭스가 1940년대에 만든 평활 함수를 신경망 출력에 한 겹 얹어, 미분에 들어가기 전 노이즈를 먼저 깎은 것입니다.

아키텍처는 한 줄도 바꾸지 않았습니다. 그런데도 1차부터 4차 편미분방정식까지 정확도와 메모리, 학습 속도가 함께 좋아졌습니다. 보통 셋 중 하나를 얻으려면 다른 하나를 내주지만, 노이즈 증폭이라는 원인 자체를 없애자 그 트레이드오프가 사라졌습니다.

물론 평활화 한 겹이 모든 문제를 풀지는 않습니다. 노이즈가 본질인 역문제에 특히 잘 듣는 접근입니다.

병목은 모델의 크기가 아니라 데이터의 표현이었습니다. '모델보다 데이터가 먼저'라는 명제의 가장 수학적인 증거입니다.

▶ 전문: https://blog.pebblous.ai/blog/mollifier-layers-scientific-ai/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #과학AI #몰리파이어레이어 #물리정보신경망 #AIReadyData #역편미분방정식

---

## LinkedIn (EN)

The wall that kept breaking scientific AI was never the algorithm. It was noise in the data.

A team at the University of Pennsylvania tackled inverse PDE learning, where a network has to recover hidden causes from observations by differentiating the data over and over. With real, noisy measurements, those derivatives blew up and memory spiked. Instead of reaching for a deeper network, the researchers added a single layer that smooths the output before differentiation, built on a smoothing function the mathematician Kurt Otto Friedrichs defined back in the 1940s.

The architecture stayed untouched. Yet across first- through fourth-order PDEs, accuracy, memory, and training speed all improved at once. You usually trade one of those for another; here the trade-off vanished, because the root cause — noise amplification — was removed rather than managed.

Not every problem yields to one smoothing step. This works best where noise is intrinsic to the inverse problem.

The bottleneck was the representation of the data, not the size of the model. It is about the most mathematical evidence you can get for "data before model."

▶ Read: https://blog.pebblous.ai/blog/mollifier-layers-scientific-ai/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #ScientificAI #MollifierLayers #PINN #AIReadyData #InversePDE

---

## Twitter/X (KO)

과학 AI를 막던 벽은 알고리즘이 아니라 데이터의 노이즈였습니다.

펜실베이니아대 연구팀은 모델을 키우는 대신, 1940년대 평활 함수를 신경망 출력에 한 겹 얹었습니다. 아키텍처는 그대로 두고 정확도·메모리·속도가 함께 올랐습니다.

모델보다 데이터가 먼저, 그 가장 수학적인 증거.

https://blog.pebblous.ai/blog/mollifier-layers-scientific-ai/ko/

#페블러스 #데이터품질 #과학AI #몰리파이어레이어

---

## Twitter/X (EN)

The wall breaking scientific AI wasn't the algorithm. It was noise in the data.

Instead of a bigger network, a Penn team added one 1940s smoothing layer to the output. Architecture unchanged, yet accuracy, memory, and speed all improved together.

Data before model, mathematically proven.

https://blog.pebblous.ai/blog/mollifier-layers-scientific-ai/en/

#Pebblous #DataQuality #ScientificAI #MollifierLayers

---

## Facebook (KO)

"막혔으면 더 키워라."

AI 성능이 벽에 부딪힐 때마다 우리가 거의 반사적으로 떠올리는 처방입니다.

더 깊은 신경망, 더 많은 파라미터, 더 큰 연산.

그런데 펜실베이니아대 연구팀이 과학 AI의 오랜 난제를 푼 방식은 정반대였습니다.

관측값에서 숨은 원인을 거꾸로 알아내는 문제에서, 신경망은 노이즈 섞인 데이터를 자꾸 미분하다 오차가 폭발하곤 했습니다. 연구팀은 이 벽을 더 큰 모델로 뚫지 않았습니다. 데이터가 미분으로 넘어가기 전에, 노이즈를 먼저 부드럽게 깎는 한 겹을 얹었을 뿐입니다.

그 한 겹의 정체가 묘합니다. 수학자 프리드릭스가 1940년대에 PDE 이론을 다루려고 만든 평활 함수였습니다. 신경망도 자동 미분도 없던 시절의 도구가, 80년 뒤 첨단 과학 AI가 필요로 한 바로 그 성질을 이미 갖고 있었습니다.

"벽은 모델에 있었을까, 데이터에 있었을까?"

모델 구조는 한 줄도 바꾸지 않았는데 정확도와 메모리, 속도가 함께 좋아졌다는 결과가, 이 질문에 조용히 답합니다.

페블러스가 데이터의 품질과 표현을 먼저 들여다보는 이유도 여기에 있습니다. 더 큰 모델로 덮으려던 문제의 상당수는, 데이터 쪽에 얇은 한 겹을 두는 것으로 더 싸고 정확하게 풀리니 말입니다.

https://blog.pebblous.ai/blog/mollifier-layers-scientific-ai/ko/

#페블러스 #데이터품질 #데이터클리닉 #과학AI #몰리파이어레이어 #물리정보신경망

---

## Facebook (EN)

"If it's stuck, make it bigger."

That is the reflex almost every one of us reaches for when an AI model hits a wall.

A deeper network. More parameters. More compute.

But the way a University of Pennsylvania team solved one of scientific AI's older problems ran the other direction.

In problems where you have to work backward from observations to a hidden cause, the network keeps differentiating noisy data until the errors explode. The researchers did not break through that wall with a larger model. They simply placed one layer in front of the differentiation, smoothing the noise away first.

What is strange is where that layer came from. It rests on a smoothing function Kurt Otto Friedrichs defined in the 1940s, for pure PDE theory, long before neural networks or autodiff existed. A tool from that era already carried the exact property that cutting-edge scientific AI would need eighty years later.

"Was the wall in the model, or in the data?"

The fact that accuracy, memory, and speed all improved without touching a single line of the architecture answers that quietly.

This is also why we at Pebblous look at the quality and representation of data first. A surprising share of the problems we try to paper over with bigger models turn out cheaper and more accurate to solve with one thin layer on the data side.

https://blog.pebblous.ai/blog/mollifier-layers-scientific-ai/en/

#Pebblous #DataQuality #DataClinic #ScientificAI #MollifierLayers #PINN
