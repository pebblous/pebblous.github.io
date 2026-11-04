# SNS 홍보 글: Heirloom은 폰이 배운 내 취향을 옛 모델에게 물어 옮긴다

> 소스: blog/heirloom-on-device-personalization-transfer/
> 생성일: 2026-11-04
> URL: https://blog.pebblous.ai/blog/heirloom-on-device-personalization-transfer/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

폰이 몇 달에 걸쳐 나에 대해 배운 것은, 기반 모델이 한 세대 올라가는 날 대부분 사라진다. 영화 태깅 과제에서 제조사가 주는 개인화 없는 어댑터로 갈아 끼우면 2B 업그레이드에서 정확도가 15.4%p 떨어진다.

10월 31일 arXiv에 올라온 Heirloom은 그 자리를 라벨 없이 메운다. 기기에서 기반 모델을 바꾸는 짧은 순간에는 옛 모델과 그 위의 개인 어댑터가 아직 함께 남아 있다. 그 시간에 옛 모델을 선생으로 세워 정답이 붙지 않은 입력에 대한 대답만 받아 적고, 옛 모델을 메모리에서 내린 다음 새 어댑터가 그 대답을 따라 배운다. 받아 적은 자료는 태깅 프롬프트 128개 기준 3.8KB다. 라벨이 붙은 사용자 기록은 한 건도 보관하지 않는다.

세 번의 세대교체를 통틀어 라벨을 들고 다시 훈련한 쪽과의 차이는 최대 1.7%p였다.

비용은 OnePlus 15에서 4B 모델 기준 38분과 배터리 20%다. 저자들은 야간 충전 중에 끝나는 작업이라고 적는다.

그림자는 두 군데에 있다. 선생에게 던질 질문을 기기에 쌓인 입력이 아니라 제조사가 내려 주는 프롬프트로 대신하면 세 업그레이드에서 대체로 1.5점에서 3.1점 뒤처진다. 기기에 기록을 덜 남길수록 물어볼 거리도 줄어든다는 뜻이다. 실험 규모도 크지 않다. 영화 태깅은 사용자 19명이고, 모델 계열은 둘이다.

옛 어댑터의 숫자를 새 구조에 맞춰 옮겨 붙이는 길은 논문이 직접 걸어 보고 닫았다. 그렇게 옮긴 어댑터는 8.9%를 냈는데, 같은 자리에서 어댑터를 아예 안 붙인 새 모델이 26.3%다. 옮길 수 있는 것은 가중치가 아니라 그 가중치가 만들어 내던 행동이다.

페블러스는 AI 학습 데이터의 품질을 DataClinic으로 진단한다. 라벨이 사라진 구조에서 학습 자료 노릇을 하는 것은 선생에게 던진 질문 목록이다. 무엇을 물었느냐가 무엇을 물려받느냐를 정한다.

▶ 전문: https://blog.pebblous.ai/blog/heirloom-on-device-personalization-transfer/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #Heirloom #온디바이스AI #개인화 #지식증류 #LoRA #arXiv #AIReadyData

---

## LinkedIn (EN)

A phone spends months learning how one person tags films and rates products. On the day its base model moves up a generation, most of that is gone. Swapping in the generic adapter a manufacturer ships with the new model costs 15.4 percentage points of accuracy on the 2B upgrade.

Heirloom, posted to arXiv on October 31, fills that gap without keeping a single label. During the short window when a device replaces its base model, the old model and the personal adapter sitting on top of it are both still in memory. Heirloom uses that window: the old model answers unlabeled inputs as a teacher, those answers are written down, the old base model is unloaded, and a fresh adapter on the new base model learns to reproduce them. For 128 tagging prompts the stored answers come to 3.8KB. No labeled user records are retained at any point.

Across three generational upgrades, the gap to retraining on kept labels topped out at 1.7 percentage points. On a OnePlus 15, a 4B transfer ran for 38 minutes and drew 20% of the battery, which the authors describe as an overnight-charging job.

Two shadows. When the questions put to the teacher come from manufacturer-supplied prompts rather than inputs already on the device, scores trail by roughly 1.5 to 3.1 points across the three upgrades, so the cleaner the device, the thinner the material. And the study is small: 19 users for film tagging, two model families.

The obvious shortcut is closed. The authors reimplemented a published method for remapping old adapter weights onto the new architecture and got 8.9% accuracy, against 26.3% for the new model with no adapter at all. What transfers is not the weights but the behavior the weights used to produce.

Pebblous tallies the quality of AI training data with DataClinic. Once the labels are gone, the training material is the list of questions put to the teacher. What was asked decides what gets inherited.

▶ Read: https://blog.pebblous.ai/blog/heirloom-on-device-personalization-transfer/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Heirloom #OnDeviceAI #Personalization #KnowledgeDistillation #LoRA #arXiv #AIReadyData

---

## Twitter/X (KO)

폰이 나에 대해 배운 것은 기반 모델이 세대를 넘을 때 어댑터와 함께 버려진다. Heirloom은 메모리에서 내려가기 직전의 옛 개인화 모델을 선생으로 세워, 라벨 없이 그 행동만 새 모델로 옮긴다. 라벨 재훈련과의 차이는 최대 1.7%p.

옮길 수 있는 것은 가중치가 아니라 행동이다.

https://blog.pebblous.ai/blog/heirloom-on-device-personalization-transfer/ko/

#페블러스 #데이터품질 #Heirloom #온디바이스AI

---

## Twitter/X (EN)

What your phone learned about you is thrown out with the adapter when its base model changes generation. Heirloom puts the old personalized model in the teacher's chair just before it is unloaded, and carries only its behavior over. No labels kept, 1.7 points off retraining.

Weights do not move. Behavior does.

https://blog.pebblous.ai/blog/heirloom-on-device-personalization-transfer/en/

#Pebblous #DataQuality #Heirloom #OnDeviceAI

---

## Facebook (KO)

폰을 새로 바꾼 뒤 한동안 추천이 어색했던 기억이 있으실 겁니다.

쓰다 보면 다시 맞아 들어가는데, 그사이에 무엇이 사라졌는지는 아무도 알려 주지 않습니다.

10월 31일 arXiv에 올라온 Heirloom 논문은 그 사라짐의 정체를 건조하게 적어 두었습니다. 기기 안 모델이 나에게 맞춰지는 자리는 기반 모델 위에 얹힌 작은 어댑터인데, 그 밑바닥이 다음 세대로 교체되면 층의 수도 어휘집도 달라져 어댑터가 붙을 자리 자체가 없어집니다.

되살릴 방법은 원래 하나뿐이었습니다. 학습에 쓴 기록을 그대로 들고 있다가 새 모델 위에서 다시 가르치는 것.

그런데 기기 안 개인화는 바로 그 기록을 남기지 않겠다는 약속으로 팔립니다.

약속을 지키면 되살릴 수 없고, 되살리려면 약속을 깨야 합니다.

Heirloom이 고른 길은 셋째였습니다. 메모리에서 내려가기 직전의 옛 모델을 선생으로 세워, 정답이 붙지 않은 입력에 대한 대답만 받아 적습니다. 그 대답이 라벨을 대신합니다. 폰이 자는 동안 38분, 배터리 20%.

'받아 적은 취향'.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 이 구조에서 품질을 따져 볼 대상은 라벨이 아니라 선생에게 던진 질문 목록입니다. 논문도 그 자리를 비워 두지 않았습니다. 기기에 쌓인 입력 대신 제조사가 준 프롬프트로 물으면 점수가 뒤처진다고 적어 두었습니다.

"내 폰이 밤사이 무엇을 물려받았고 무엇을 흘렸는지, 아침에 알 방법이 있습니까?"

조용히 처음으로 돌아가는 설계와 밤새 이어 붙이는 설계는 같은 제품이 아닙니다. 다만 아침에 손에 쥔 쪽에서 보면 둘은 똑같이 어제와 비슷한 폰 한 대입니다.

▶ 전문: https://blog.pebblous.ai/blog/heirloom-on-device-personalization-transfer/ko/

#페블러스 #데이터클리닉 #데이터품질 #Heirloom #온디바이스AI #개인화

---

## Facebook (EN)

You probably remember a stretch after switching phones when the recommendations felt slightly off.

They settle again after a while, and nobody tells you what went missing in between.

Heirloom, a paper that went up on arXiv on October 31, sets that disappearance down in plain terms. What bends a device model toward one person is a small adapter resting on the base model, and when that foundation is swapped for the next generation, the layer count and the vocabulary both shift until there is no longer a slot for the adapter to sit in.

There used to be one way back. Keep the records the adapter was trained on, and teach the new model from them again.

On-device personalization is sold on the promise of not keeping those records.

Keep the promise and nothing can be recovered. Recover it and the promise is broken.

Heirloom takes a third route. Just before the old model is unloaded, it is seated as a teacher and asked to answer inputs that carry no correct answer, and those answers stand in for the labels. Thirty-eight minutes while the phone sleeps, twenty percent of a battery.

'A taste taken down in dictation'.

Pebblous tallies the quality of AI training data with DataClinic. In this arrangement the thing worth examining is not a set of labels but the list of questions put to the teacher. The authors did not leave that corner empty either: asking with manufacturer-supplied prompts instead of inputs already sitting on the device costs several points.

"Is there any way, come morning, to know what the phone carried over and what it let slip?"

A design that quietly starts from zero and a design that stitches the learning back together overnight are not the same product. From the hand that picks it up in the morning, though, both look like the phone from yesterday.

▶ Read: https://blog.pebblous.ai/blog/heirloom-on-device-personalization-transfer/en/

#Pebblous #DataClinic #DataQuality #Heirloom #OnDeviceAI #Personalization
