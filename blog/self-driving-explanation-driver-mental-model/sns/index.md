# SNS 홍보 글: 설명을 읽은 운전자가 자율주행차의 다음 행동을 더 잘 맞혔다

> 소스: blog/self-driving-explanation-driver-mental-model/ko/index.html
> 생성일: 2026-09-04
> URL: https://blog.pebblous.ai/blog/self-driving-explanation-driver-mental-model/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

계기판에 설명을 띄웠더니, 차가 왜 멈췄는지에 대한 안전운전자의 짐작이 세 번 모두 틀린 것으로 드러났습니다.

9월 2일 네이처에 실린 MIT와 Motional의 공동 연구입니다. 연구진은 학습을 마친 블랙박스 주행 플래너에서 마지막 보상층 하나만 사람이 읽을 수 있는 개념 분류기로 갈아 끼우고 실제 자율주행차에 실었습니다. 주행 성능은 모든 지표에서 1% 미만 차이로 유지됐습니다.

채점 방식이 낯섭니다. 이 연구는 성적표를 모델의 정확도가 아니라 사람의 예측력으로 매겼습니다. 같은 장면을 영상으로 본 온라인 참가자 가운데 전문가 9명 중 8명, 일반인 30명 중 27명이 차의 행동에 대한 판단을 고쳐 잡았고, 공공도로 기록으로 돌린 상황인식 실험에서는 뜻밖의 상황에서만 효과가 나타났습니다. 평범한 상황에서는 유의한 차이가 없었습니다.

정작 개념 분류기 자체는 엉성합니다. 평균 정확도가 54%에 그치고 자전거 개념은 거의 잡아내지 못하는데, 저자들은 낮은 정확도의 개념이 오히려 차의 결함을 짚어 준다고 봅니다. 실제로 그 자전거 확률이 플래너가 자전거 입력을 쓰지 않는다는 사실을 드러냈습니다.

그런데 차가 말할 수 있는 이름표 여덟에서 열 개의 경계는 모델이 배운 것이 아니라 연구팀이 손으로 그은 것입니다. CLOSE는 다른 차와 3미터 이내라는 식입니다. 설명의 품질 상한은 그 축을 세우고 라벨을 붙이는 쪽에서 정해집니다.

▶ 전문: https://blog.pebblous.ai/blog/self-driving-explanation-driver-mental-model/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #설명가능AI #자율주행 #PhysicalAI #CWNet #Motional #MIT

---

## LinkedIn (EN)

Put an explanation on the dashboard, and the safety driver's own account of why the car had stopped turned out to be wrong all three times.

The finding comes from a paper published in Nature on 2 September by researchers at MIT and Motional. They took a trained black-box driving planner, replaced only its final reward layer with a classifier that outputs human-readable concepts, and ran the result on a real autonomous vehicle. Driving performance stayed within 1% of the original on every measure.

The unusual part is the grading. The work was scored not by model accuracy but by human predictive ability. In an online replication using the same footage, 8 of 9 Motional experts and 27 of 30 lay participants revised their judgement about the car's behaviour, and a situational-awareness study built from public-road recordings found gains only in surprising events. In routine driving there was no significant difference.

The classifier itself is coarse. It averages 54% accuracy and barely registers the concept for a bicycle, yet the authors argue that a low-accuracy concept is often the most useful one, since it exposes what the car handles badly. That near-zero bicycle probability is what revealed the planner was not using bicycle input at all.

The eight to ten labels the car can speak in, though, were drawn by hand rather than learned: CLOSE means within three metres of another vehicle. The ceiling on explanation quality is set by whoever defines that vocabulary and does the labelling.

▶ Read: https://blog.pebblous.ai/blog/self-driving-explanation-driver-mental-model/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #ExplainableAI #AutonomousVehicles #PhysicalAI #CWNet #Motional #MIT

---

## Twitter/X (KO)

차가 왜 멈췄는지에 대한 안전운전자의 짐작은 세 번 모두 틀렸습니다. 계기판에 뜬 개념 확률이 진짜 이유를 짚었습니다.

9월 2일 네이처에 실린 MIT·Motional 연구는 설명의 성적을 모델 정확도가 아니라 사람의 예측력으로 매겼습니다.

https://blog.pebblous.ai/blog/self-driving-explanation-driver-mental-model/ko/

#페블러스 #자율주행 #설명가능AI #데이터품질

---

## Twitter/X (EN)

A safety driver guessed why the car had stopped. Three times, three wrong answers. The concept probabilities on the dashboard named the real reason.

Published in Nature this week, the MIT and Motional study graded explanations by human predictive ability rather than model accuracy.

https://blog.pebblous.ai/blog/self-driving-explanation-driver-mental-model/en/

#Pebblous #AutonomousVehicles #ExplainableAI #DataQuality

---

## Facebook (KO)

"차가 지금 왜 멈춘 걸까요?"

사설 주행로 위에서 안전운전자가 소리 내어 자기 짐작을 말합니다. 승하차 구역 때문일 것이다. 앞의 콘 때문일 것이다. 자전거를 봤을 것이다.

세 번 다 틀렸습니다.

계기판 옆에 뜬 개념 확률이 지목한 것은 다른 쪽이었습니다. 옆 차와 너무 가깝다는 신호였고, 눈앞에 있지도 않은 정차 차량이었습니다. 세 번째 장면에서는 자전거 확률이 내내 1% 아래에 머물러 있었습니다. 차는 자전거를 보고 멈춘 것이 아니었습니다. 개념 분류기와 무관한 별도의 안전 백업이 충돌 직전 제동을 걸고 있었을 뿐입니다.

9월 2일 네이처에 실린 MIT와 Motional의 연구입니다. 제 눈을 붙든 대목은 채점 방식이었습니다. 좋은 설명인지를 모델의 정확도로 묻지 않고, 그 설명을 읽은 사람이 차의 다음 행동을 더 잘 맞히는가로 물었습니다.

그런데 그 이름표는 어디에서 왔을까요.

CLOSE는 다른 차와 3미터 이내, SLOW는 초속 1~2미터. 여덟에서 열 개 남짓한 이 목록은 모델이 배운 것이 아니라 연구팀이 손으로 그은 선입니다. 저자들도 개념을 더 넓히는 일과 라벨링의 어려움을 향후 과제로 남겼습니다.

'설명의 어휘 목록'. 저는 이 대목을 그렇게 적어 두었습니다. 시스템이 가진 어휘가 여덟 개면, 그 시스템이 사람에게 건넬 수 있는 설명도 여덟 가지를 넘지 못합니다. 페블러스가 데이터 품질을 진단할 때 가장 자주 마주치는 질문도 어떤 항목을 라벨 체계에 세울 것인가입니다. 모델이 좋아지면 정확도는 오릅니다. 어휘 목록은 그렇게 늘지 않습니다.

논문이 다음 무대로 든 곳에는 드론 내비게이션과 수술로봇이 있습니다. 그곳에서도 사람이 읽을 이름의 목록은 처음부터 다시 쓰여야 할 것입니다. 설명이 필요한 기계가 늘어난다는 말은, 이름을 붙여야 할 자리가 그만큼 늘어난다는 말이기도 합니다.

▶ https://blog.pebblous.ai/blog/self-driving-explanation-driver-mental-model/ko/

#페블러스 #설명가능AI #자율주행 #CWNet #데이터품질 #DataClinic

---

## Facebook (EN)

"So why did it stop just now?"

On a private test track, a safety driver says the guess out loud. Must be the pick-up and drop-off zone. Must be the cone up ahead. Must have seen the cyclist.

Wrong all three times.

The concept probabilities beside the map pointed somewhere else. A signal that another vehicle was too close. A stopped vehicle that was not actually there. And in the third scene, the probability for a bicycle sat below 1% the whole time. The car had not stopped because it saw the cyclist. A separate safety backup, unrelated to the concept classifier, was braking at the last moment.

The study appeared in Nature on 2 September, from MIT and Motional. What stayed with me was how it was graded. Instead of asking whether the explanation was accurate, the researchers asked whether the person reading it could better predict what the car would do next.

But where did those labels come from?

CLOSE means within three metres of another vehicle. SLOW means one to two metres per second. The eight or ten entries on that list were not learned by the model; a research team drew the lines by hand. The authors leave widening the concept set, and the labelling difficulty that comes with it, as future work.

The vocabulary of explanation is what I wrote in the margin. If a system holds eight words, the explanations it can offer a person will not exceed eight. The question Pebblous runs into most often in data-quality work is the same one: which items belong in the label scheme at all. Better models raise accuracy. They do not lengthen the vocabulary.

Among the next stages the paper names are drone navigation and surgical robots. In each of those, the list of human-readable names will have to be written from scratch. More machines that owe us an explanation means more places where someone has to decide what to call things.

▶ https://blog.pebblous.ai/blog/self-driving-explanation-driver-mental-model/en/

#Pebblous #ExplainableAI #AutonomousVehicles #CWNet #DataQuality #DataClinic
