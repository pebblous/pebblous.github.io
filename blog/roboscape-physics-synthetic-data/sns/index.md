# SNS 홍보 글: 로봇의 상상력에 물리 법칙을 새겨 넣다 — RoboScape

> 소스: blog/roboscape-physics-synthetic-data/ko/index.html
> 생성일: 2026-06-12
> URL: https://blog.pebblous.ai/blog/roboscape-physics-synthetic-data/ko/
> voice: LinkedIn/Twitter = sns-cover, Facebook = reflective

---

## LinkedIn (KO)

합성 영상 200개로 학습한 로봇 정책이, 실제 영상 200개로 학습한 정책과 거의 같은 성공률을 냈다. 91% 대 92%.

Tsinghua와 Manifold AI가 공개한 RoboScape는 합성 데이터를 만드는 순간 물리 타당성을 강제한다. 물리 엔진을 따로 붙이는 대신, 영상을 생성하는 모델이 RGB와 깊이를 동시에 그리고, 움직이는 점들에서 재질과 변형을 읽게 한다. 충분한 양을 갖추자 물리적으로 타당한 합성이 LIBERO 벤치마크에서 실제 데이터를 13.9%p 앞서기도 했다.

이유는 분명하다. 로봇은 화면을 배우지 않고 행동 규칙을 배운다. 데이터가 중력을 어기면, 로봇도 그 거짓 동역학을 진짜로 받아들인다.

물리를 읽는 두 장치를 모두 떼어 내자 행동 제어 능력은 40.6% 무너졌다. 물리는 영상의 장식이 아니라 데이터가 작동하는 조건이었다.

합성 데이터 품질의 기준에 정확성과 완전성에 더해 한 축이 붙는다. 물리적 타당성이다. 페블러스는 PebbloSim으로 물리 기반 합성 데이터를 만들고, DataClinic으로 학습 데이터 품질을 진단한다.

↗ 링크는 댓글에

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PebbloSim #합성데이터 #PhysicalAI #RoboScape #로봇학습 #월드모델

---

## LinkedIn (EN)

A robot policy trained on 200 synthetic videos matched one trained on 200 real videos almost exactly: 91% versus 92% success.

The system, RoboScape, comes from Tsinghua University and Manifold AI. Rather than bolting on a physics engine, it forces physical plausibility while the video is being generated: the model predicts RGB and depth together and reads material and deformation from how tracked points move. With enough data, physically grounded synthetic footage even beat real data by 13.9 points on the LIBERO benchmark.

The reason is simple. A robot does not learn the picture; it learns the action rule. If the data floats objects against gravity, the robot accepts that false dynamics as real.

Strip out both physics signals and control ability collapsed by 40.6%. Physics was not decoration. It was the condition under which the data worked.

For synthetic data quality, a new axis joins accuracy and completeness: physical plausibility. Pebblous builds physics-grounded synthetic data with PebbloSim and diagnoses training-data quality with DataClinic.

↗ Link in the comments

#Pebblous #DataClinic #DataQuality #DataJournalism #PebbloSim #SyntheticData #PhysicalAI #RoboScape #RobotLearning #WorldModel

---

## Twitter/X (KO)

로봇은 화면이 아니라 행동을 배운다. 합성 영상이 중력을 어기면 로봇도 거짓을 배운다.

RoboScape는 합성 데이터를 만들 때부터 물리 타당성을 강제한다. 합성 200개가 실제 200개와 거의 같은 성공률을 냈다(91% vs 92%).

sim-to-real 격차를 데이터 단계에서 줄이는 길.

https://blog.pebblous.ai/blog/roboscape-physics-synthetic-data/ko/

#페블러스 #RoboScape #합성데이터 #PhysicalAI

---

## Twitter/X (EN)

A robot learns actions, not pixels. If synthetic video breaks gravity, the robot learns a lie.

RoboScape enforces physical plausibility as the data is generated. 200 synthetic videos matched 200 real ones: 91% vs 92%.

Closing the sim-to-real gap at the data stage.

https://blog.pebblous.ai/blog/roboscape-physics-synthetic-data/en/

#Pebblous #RoboScape #SyntheticData #PhysicalAI

---

## Facebook (KO)

"접촉하는 순간 컵의 모서리가 살짝 뭉개졌습니다."

로봇을 가르치려고 만든 합성 영상에서는 이런 장면이 드물지 않습니다.

사람 눈에는 사소한 흠입니다. 하지만 로봇은 그 장면을 그림으로 보지 않습니다. "이렇게 밀면 저렇게 움직인다"는 행동 규칙으로 읽습니다.

데이터가 중력을 어기면, 그 데이터로 배운 로봇도 중력을 어기는 세계를 진짜라고 믿게 됩니다.

그래서 RoboScape 연구진이 던지는 질문이 오래 남았습니다. "합성 데이터의 품질을 무엇으로 재야 하는가?"

지금까지의 답은 대체로 "얼마나 진짜처럼 보이는가"였습니다. 이들은 칸을 하나 더 그립니다. "이 장면이 물리적으로 일어날 수 있는 일인가?"

방법은 의외로 담백합니다. 물리 시뮬레이터를 따로 붙이지 않고, 영상을 만드는 모델이 생성 도중에 물리를 함께 배우게 합니다. 화면의 색과 함께 깊이를 떠올리고, 움직이는 점들에서 재질의 성질을 읽습니다.

그렇게 만든 합성 영상 200개로 학습한 로봇이, 실제 영상 200개로 학습한 로봇과 거의 같은 성공률을 냈습니다.

물론 물리를 읽는 장치를 모두 떼어 내자 성능은 크게 무너졌습니다. 물리는 영상의 장식이 아니라, 데이터가 제대로 작동하기 위한 조건이었던 셈입니다.

데이터를 진단하고 다루는 일을 해 온 입장에서, "물리적 타당성"은 합성 데이터 품질 점검표에 새로 적어 둘 칸처럼 느껴집니다. 정확성과 완전성 옆에, 생성된 데이터가 세계의 규칙을 어기지 않았는지를 묻는 자리. 페블러스가 PebbloSim으로 물리 기반 합성 데이터를 만들고 DataClinic으로 데이터 품질을 진단하는 이유도 같은 자리에 있습니다.

Physical AI로 데이터의 무대가 넓어질수록, 데이터가 지켜야 할 규칙의 목록도 길어질 것입니다.

https://blog.pebblous.ai/blog/roboscape-physics-synthetic-data/ko/

#페블러스 #RoboScape #합성데이터 #PhysicalAI #PebbloSim #DataClinic #데이터품질

---

## Facebook (EN)

"At the moment of contact, the rim of the cup crumpled a little."

In synthetic video made to teach robots, scenes like this are not rare.

To a human eye it is a trivial flaw. But a robot does not see the scene as a picture. It reads it as a rule: push it this way, and it moves that way.

When the data breaks gravity, the robot trained on that data comes to believe a world that breaks gravity is real.

That is why the question RoboScape's researchers ask stayed with me. "What should we measure synthetic data quality by?"

The usual answer has been: how real does it look? They draw one more column. Could this scene actually happen, under the laws of physics?

The method is quieter than I expected. No separate physics engine. The model that generates the video learns physics as it goes, holding depth in mind alongside color, reading the nature of a material from how points move.

A robot trained on 200 such synthetic videos reached almost the same success rate as one trained on 200 real videos.

Remove the parts that read physics, and performance fell sharply. Physics was not an ornament on the footage. It was the condition for the data to work at all.

For someone who has spent time diagnosing and handling data, "physical plausibility" feels like a new column to add to the synthetic-data checklist. Beside accuracy and completeness, a place that asks whether generated data has broken the rules of the world. That is the same place from which Pebblous builds physics-grounded synthetic data with PebbloSim and diagnoses data quality with DataClinic.

As Physical AI widens the stage for data, the list of rules that data must keep will only grow longer.

https://blog.pebblous.ai/blog/roboscape-physics-synthetic-data/en/

#Pebblous #RoboScape #SyntheticData #PhysicalAI #PebbloSim #DataClinic #DataQuality
