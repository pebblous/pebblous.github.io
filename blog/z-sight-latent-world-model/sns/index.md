# SNS 홍보 글: 로봇 모델 Z-sight, 다음 장면을 그리지 않고 떠올린다

> 소스: blog/z-sight-latent-world-model
> 생성일: 2026-11-26
> URL (KO): https://blog.pebblous.ai/blog/z-sight-latent-world-model/ko/
> URL (EN): https://blog.pebblous.ai/blog/z-sight-latent-world-model/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

메이븐 로보틱스와 서던캘리포니아대가 공개한 로봇 모델 Z-sight는 다음 장면을 영상으로 그리지 않고 떠올린다.

11월 18일 arXiv에 올라온 프리프린트이고 동료 심사는 거치지 않았다. 로봇 모델에 미래 예측을 붙일 때 지금까지는 몇 초 뒤의 화면을 실제로 생성했는데, Z-sight는 그 자리에 모델이 현재를 알아볼 때 쓰는 시각 토큰을 그대로 둔다. 사람 눈에는 아무것도 보이지 않는다. 휴머노이드 전신 조작 시뮬레이션 SIMPLE의 원격조작 과제에서 평균 81.9%로 비교 대상 가운데 가장 높았고, 유니트리 G1 실물 여섯 과제에서는 60회 중 44회를 끝까지 해내 73.3%였다. 비교 모델의 성적은 저자들이 직접 재현해 잰 값이다.

월드 모델은 아직 일어나지 않은 데이터를 만들어 쓰는 기술이다. 그 생성물이 토큰으로 옮겨 가면 사람이 열어 보던 검수의 창구가 닫힌다. 저자들은 예측을 일부러 망가뜨려 끼워 넣고 성공률이 어디까지 떨어지는지로 그 값을 쟀다.

전문은 이 개입 실험을 눈으로 볼 수 없는 생성 데이터의 품질 잣대로 읽었다.

▶ 전문: https://blog.pebblous.ai/blog/z-sight-latent-world-model/ko/
#Zsight #월드모델 #피지컬AI #로봇데이터 #페블러스

---

## LinkedIn · Facebook (EN)

Z-sight, a robot foundation model from Maven Robotics and the University of Southern California, anticipates the next scene without ever rendering it.

The preprint went up on arXiv on 18 November and has not been peer reviewed. Where earlier work bolts future prediction onto a robot model by generating the frames a few seconds ahead, Z-sight leaves the future in the visual tokens the model already uses to recognize the present. Nothing in that prediction is visible to a human eye. On the teleoperated tasks of SIMPLE, a simulation benchmark for humanoid whole-body manipulation, it averaged 81.9%, the highest of the models compared. On six real tasks with a Unitree G1 it finished 44 of 60 runs, a 73.3% success rate and 20 points above the model that renders the future as video. The baseline scores were reproduced and measured by the authors themselves.

A world model is a way of manufacturing data about something that has not happened yet. Once that output lives in tokens, the window for looking at it closes. The authors took the measure of it instead by corrupting the prediction on purpose and watching how far the success rate fell.

The full article reads that intervention test as a standard of quality for generated data nobody can inspect by eye.

▶ Read: https://blog.pebblous.ai/blog/z-sight-latent-world-model/en/
#Zsight #WorldModels #PhysicalAI #RobotData #Pebblous
