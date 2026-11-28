# SNS 홍보 글: 런웨이 로봇 모델 Praxis-1, 웹 영상 대체 근거는 부족

> 소스: blog/runway-praxis-1-world-action-model/ko/index.html
> 생성일: 2026-11-28
> URL (KO): https://blog.pebblous.ai/blog/runway-praxis-1-world-action-model/ko/
> URL (EN): https://blog.pebblous.ai/blog/runway-praxis-1-world-action-model/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

영상 생성 회사 런웨이가 로봇 제어 모델 Praxis-1의 가중치와 미세조정 코드를 Apache 2.0으로 공개했다.

런웨이가 11월 11일 낸 발표에 따르면 이 모델은 카메라 화면과 지시를 받아 앞으로 펼쳐질 영상과 1.6초 분량의 로봇 동작을 함께 내놓는다. 엔비디아 시뮬레이션 벤치마크 RoboLab-120에서는 46.2%로 공개 가중치 모델 가운데 가장 높았고, 전체 리더보드로는 5위다. 시험은 런웨이가 직접 돌렸다. 실물 로봇 시험은 Franka 팔 100회 중 88회 성공이 공개된 전부다.

런웨이는 웹 영상이 원격조종 로봇 영상과 맞먹는 사전학습 재료라고 밝혔다. 사실이라면 로봇 데이터를 모으는 비용 구조가 바뀐다. 그러나 연구 페이지에는 둘을 나란히 비교한 실험이 보이지 않는다. 중간학습 데이터의 58%는 사람 눈높이에서 찍은 1인칭 작업 영상이고, 학습 데이터의 전체 시간도 적혀 있지 않다.

전문은 모델이 상상한 미래 영상이 동작 오차의 대부분을 만든다는 런웨이 실험에 주목해, 현장 영상의 쓸모를 무엇으로 잴지 물었다.

▶ 전문: https://blog.pebblous.ai/blog/runway-praxis-1-world-action-model/ko/
#런웨이 #Praxis1 #피지컬AI #로봇학습데이터 #페블러스

---

## LinkedIn · Facebook (EN)

Runway, best known for AI video generation, has released the weights and fine-tuning code for Praxis-1, its robot control model, under the Apache 2.0 license.

Announced on November 11, the 27B-parameter model takes a camera frame and an instruction and predicts both a short clip of what happens next and 1.6 seconds of robot motion. On NVIDIA's RoboLab-120 simulation benchmark it scores 46.2%, the highest among open-weight models and fifth on the full leaderboard. Runway ran the tests itself. The only published real-robot result is 88 successes in 100 trials on a Franka arm.

Runway's announcement says web video works as well as teleoperated robot footage for pretraining. If that holds, the economics of collecting robot data change. Its research page, however, shows no experiment comparing the two directly. First-person video shot at human eye level makes up 58% of the mid-training mix, and total training hours go unreported.

The full analysis focuses on a Runway experiment showing that most motion error comes from the future the model imagines, and asks how companies should judge whether their own site footage is usable.

▶ Read: https://blog.pebblous.ai/blog/runway-praxis-1-world-action-model/en/
#Runway #PhysicalAI #RobotLearning #TrainingData #Pebblous
