# SNS 홍보 글: 모션캡처로 채점하니 고르게 정확한 물리 엔진은 없었다

> 소스: report/physics-engine-reality-gap-gauge/ko/index.html
> 생성일: 2026-08-10
> URL (KO): https://blog.pebblous.ai/report/physics-engine-reality-gap-gauge/ko/
> URL (EN): https://blog.pebblous.ai/report/physics-engine-reality-gap-gauge/en/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

로봇 시뮬레이터의 물리를 실제 측정 궤적으로 채점해 봤더니, 전 영역에서 고르게 정확한 엔진은 하나도 없었다.

2026년 8월 공개된 GAUGE 벤치마크는 적외선 모션캡처 16대로 실제 궤적을 붙잡고, 마찰과 반발 같은 물성을 별도 장비로 계측해 각 엔진의 파라미터로 번역해 넣은 뒤 Isaac Sim과 Genesis, Newton을 같은 과제에 세웠다.

채점의 눈금이 이 벤치마크의 핵심이다. 엔진끼리 견주는 것이 아니라, 같은 실험을 20회 반복했을 때 실측이 스스로에게서 벗어나는 폭을 1.0으로 두고 엔진이 그 몇 배만큼 벗어나는지를 잰다.

매끄럽게 미끄러지고 회전하는 강체 운동에서 세 엔진은 대체로 그 눈금 안팎에 들어왔다. 공이 튀는 순간에는 최고 성적조차 실측 반복오차의 15.6배로 벌어졌다. 같은 새틴 천도 천천히 늘일 때는 실측 산포 안쪽인데 손목을 털듯 빠르게 흔들면 128배까지 어긋난다. 재질도, 계측해 넣은 강성도, 솔버도 같다. 바뀐 것은 운동의 속도뿐이다.

순위도 물리마다 뒤집힌다. 회전 마찰이 지배하는 턴테이블에서 Isaac Sim은 실측 산포의 6분의 1까지 붙지만 Newton은 세 엔진 중 가장 나빴고, 천을 빠르게 털어내는 과제에서는 그 순서가 반대가 된다. "가장 정확한 엔진 하나를 고른다"는 전략이 성립하지 않는다는 뜻이다. 다만 이 표는 평가 시점의 버전을 고정해 찍은 사진이고, 엔진들은 계속 고쳐지고 있다.

곤란한 것은 엔진이 약한 물리가 부품 삽입이나 의류 취급처럼 자동화 수요가 가장 큰 작업과 겹친다는 점이다. 그리고 이것은 라벨이 틀린 데이터가 아니다. 라벨은 엔진이 직접 기록해 완벽하고 분포도 균형 잡혀 있는데, 그 둘이 함께 놓인 좌표계가 실제에서 벗어나 있다. 데이터 안쪽의 일관성만 보는 기존 품질 검사는 설계상 이 유형을 통과시킨다. 페블러스가 DataClinic으로 진단해 온 축 옆에, 직교하는 축이 하나 더 생긴 셈이다.

▶ 전문: https://blog.pebblous.ai/report/physics-engine-reality-gap-gauge/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #PhysicalAI #합성데이터 #GAUGE #IsaacSim #Genesis #Newton #로봇시뮬레이터

---

## LinkedIn (EN)

The first benchmark to grade robot simulators against physically measured motion found no engine that is accurate everywhere.

GAUGE, released in August 2026, captured reference trajectories with 16 infrared motion-capture cameras, measured properties such as friction and restitution on separate instruments, translated those values into each engine's parameters, and put Isaac Sim, Genesis and Newton through the same tasks.

The scale is what makes the result readable. It is not engine against engine. The spread of the measurement against itself over 20 repeated trials is set to 1.0, and each engine is scored as a multiple of that.

Smooth rigid motion mostly landed inside that spread. A bouncing ball did not, and there the best engine missed by 15.6 times the measured repeatability. The same satin cloth stayed inside the spread when stretched slowly and drifted by 128 times when flung. Same material, same measured stiffness, same solver. Only the speed of the motion changed.

Rankings also flip by physics. On a spinning turntable Isaac Sim tracked to a sixth of the measurement spread while Newton was the worst of the three, and on fast cloth the order reverses. Picking "the accurate engine" is not a strategy that survives the table. The table is also a snapshot of one pinned version of each engine, and all three keep shipping fixes.

The awkward part is where the weakness sits: impact-dominated contact and fast cloth handling are exactly the physics under part insertion and garment work. And none of this is a labeling failure. The labels are written by the engine itself and the distributions are balanced, yet the frame they sit in has drifted from the physical world. Label consistency checks and lineage tracking both look inside the dataset, so they pass this by design. Next to the axis Pebblous has been measuring with DataClinic, there is now a second one, orthogonal to it.

▶ Read: https://blog.pebblous.ai/report/physics-engine-reality-gap-gauge/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #PhysicalAI #SyntheticData #GAUGE #IsaacSim #Genesis #Newton #RobotSimulation

---

## Twitter/X (KO)

같은 새틴 천을 천천히 늘이면 물리 엔진의 궤적이 실측 산포 안에 들어온다. 손목 털듯 빠르게 흔들면 128배로 벌어진다. 재질도 파라미터도 솔버도 같고, 바뀐 것은 속도뿐이다.

정적 시험을 통과했다는 말은 동적 구간에 대해 아무것도 보증하지 않는다. GAUGE가 모션캡처로 세 엔진을 채점한 결과다.

▶ https://blog.pebblous.ai/report/physics-engine-reality-gap-gauge/ko/

#페블러스 #GAUGE #IsaacSim #로봇시뮬레이터

---

## Twitter/X (EN)

Stretch a satin cloth slowly and the simulated trajectory sits inside the measurement spread. Flick it fast and it drifts by 128 times. Same material, same parameters, same solver. Only the speed changed.

Passing a quasi-static test guarantees nothing about the dynamic regime. That is what GAUGE found when it graded three engines against motion capture.

▶ https://blog.pebblous.ai/report/physics-engine-reality-gap-gauge/en/

#Pebblous #GAUGE #IsaacSim #RobotSimulation

---

## Facebook (KO)

책상 위에 놓인 뉴턴 요람을 한 번쯤 보셨을 겁니다.

끝의 공을 들었다 놓으면 반대쪽 공만 튀어 나가고, 가운데 공들은 그 자리에 서 있습니다.

실제 장치에서 그 정지는 0.38초 동안 이어집니다.

GAUGE 연구진이 물리 엔진에 같은 장치를 세워 봤더니, 그 0.38초가 아예 없었습니다. 가운데 공들이 한순간도 멈추지 않았습니다. 끝에서 끝으로 건너가야 할 운동량도 5분의 1 남짓만 도착했습니다. 화면으로 재생하면 공이 부딪히고 튀는 장면은 충분히 그럴듯합니다. 재 보면 다른 세계입니다.

이 대목이 오래 남은 이유는 따로 있습니다.

로봇을 학습시키는 데이터의 상당수가 이런 시뮬레이터에서 나옵니다. 사람이 붙이는 라벨이 아니라 엔진이 좌표를 직접 기록하니, 라벨 정합성으로 보면 흠잡을 데가 없습니다. 분포도 골고루 샘플링해 두었고, 언제 어떤 설정으로 만들었는지도 전부 추적됩니다. 기존의 품질 검사를 돌리면 대부분 통과합니다.

"라벨이 완벽한 데이터는, 그래서 좋은 데이터인가?"

GAUGE가 보여 준 것은 라벨과 데이터의 관계가 아니라 그 둘이 함께 놓인 좌표계 쪽의 문제였습니다. 저희는 이런 데이터를 '채점되지 않은 정답지'라고 불러 보기로 했습니다. 정답지 노릇을 오래 해 왔는데, 정작 그것을 채점해 본 사람이 없었다는 뜻으로요.

한 가지가 더 걸립니다. 엔진이 가장 크게 어긋난 물리는 충격이 지배하는 접촉과 빠르게 움직이는 천이었습니다. 부품 삽입이나 의류 취급처럼 자동화 수요가 가장 큰 작업이 하필 거기 놓여 있습니다.

데이터 품질을 진단해 오면서 저희가 봐 온 축은 대체로 라벨과 분포, 그리고 계통 추적이었습니다. 여기에 축이 하나 더 생겼습니다. 생성된 물리가 어느 영역에서 얼마나 어긋나는가. 앞의 축과 직교하는 질문이라, 기존 검사를 아무리 촘촘히 걸어도 대신 답해 주지 않습니다.

정답지를 채점하는 쪽이 없는 동안에도 데이터는 계속 쌓입니다. 얼마나 많이 만들었는지보다 그 눈금을 무엇으로 삼았는지를 먼저 적어 두는 편이, 나중에 덜 곤란하지 않을까 싶습니다.

전문은 여기에 있습니다: https://blog.pebblous.ai/report/physics-engine-reality-gap-gauge/ko/

#페블러스 #데이터클리닉 #GAUGE #IsaacSim #피지컬AI #합성데이터

---

## Facebook (EN)

You have probably watched a Newton's cradle sitting on someone's desk.

Lift the ball at one end, let it fall, and only the ball at the far end swings out. The ones in the middle stay where they are.

In the real device, that stillness lasts 0.38 seconds.

When the GAUGE team set the same device up inside physics engines, the 0.38 seconds was simply gone. The middle balls never held still for an instant. Of the momentum that should have crossed from one end to the other, only about a fifth arrived. Played back on a screen, the collisions look convincing enough. Measured, they describe a different world.

That is not the part that stayed with me, though.

A large share of the data used to train robots comes out of simulators like these. The labels are not written by a person; the engine records the coordinates itself. By label consistency, the data is spotless. The scenarios are evenly sampled, and every generation setting is traceable. Run the usual quality checks and almost everything passes.

"If the labels are perfect, is the data good?"

What GAUGE showed is that the trouble was never between the label and the data. It was in the frame the two of them sit in. We have started calling this an "ungraded answer key": a set of trajectories that has served as ground truth for years without anyone grading it.

One more thing lingers. The physics where the engines drifted furthest was impact-dominated contact and fast-moving fabric. Part insertion and garment handling, the tasks with the strongest pull toward automation, happen to sit right there.

In the work of diagnosing data quality, the axes we have looked along were labels, distribution and lineage. There is now one more. How far, and in which regimes, does the generated physics depart from the measured world. It runs orthogonal to the first three, so no amount of tightening the old checks will answer it.

The data keeps accumulating while the answer key goes ungraded. Writing down what scale you measured against may matter more, later, than writing down how much you produced.

The full piece is here: https://blog.pebblous.ai/report/physics-engine-reality-gap-gauge/en/

#Pebblous #DataClinic #GAUGE #IsaacSim #PhysicalAI #SyntheticData
