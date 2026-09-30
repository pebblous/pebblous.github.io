# SNS 홍보 글: 로봇 AI OpenVLA는 틀린 지시를 받고도 멈추지 않는다

> 소스: blog/openvla-premise-conflict-bench/
> 생성일: 2026-10-01
> URL: https://blog.pebblous.ai/blog/openvla-premise-conflict-bench/ko/
> voice: sns-cover (LinkedIn·Twitter) / reflective (Facebook)

---

## LinkedIn (KO)

식탁에 없는 컵을 집으라고 시켰더니 로봇 팔은 멈추지도 거부하지도 않았다. 컵이 있어야 할 자리로 계속 다가갔다.

지린대 연구자 세 사람이 지난달 arXiv에 올린 벤치마크다. 로봇 조작 시뮬레이터 LIBERO의 과제 명세를 읽어 전제 자체가 틀린 과제 2,826개를 만들었다. 카메라 화면과 사람의 말을 함께 읽어 로봇 팔을 움직이는 모델 여덟 종이 이 과제를 차례로 받았다.

원래 목표 달성률은 여덟 모델 전부 떨어졌고 OpenVLA는 78.7%에서 22.5%로 내려갔다. 그런데 논문이 힘을 실은 곳은 이 하락폭이 아니다. 실패로 적힌 기록을 다시 열어 보니 집게 끝은 원래 목표 쪽으로 평소와 다르지 않게 다가가 있었고, 줄였어야 할 동작의 세기는 거의 줄지 않았다. 저자들이 Failed Persistence라 부르는 행동이다.

전제가 맞는지 먼저 확인하라는 문장을 지시 앞에 얹어도 나아지지 않았다. 과정 지표 네 개를 모두 의도한 방향으로 움직인 모델은 여덟 중 하나도 없었다. OpenVLA와 π₀-FAST는 멀쩡한 지시에서의 성공률까지 잃었다. 실험은 시뮬레이터 안에서 이루어졌고, 충돌 과제는 LIBERO 기본 과제 40개 위에 오류를 바꿔 심어 불린 것이다.

성공률 한 칸은 멈춘 로봇과 끝까지 밀어붙인 로봇을 같은 자리에 적는다. 페블러스가 데이터 품질을 진단할 때 결과 점수와 처리 과정의 흔적을 따로 세는 이유도 같은 자리에 있다.

▶ 전문: https://blog.pebblous.ai/blog/openvla-premise-conflict-bench/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #PhysicalAI #OpenVLA #ConflictVLABench #VLA #LIBERO #로봇데이터

---

## LinkedIn (EN)

Ask a robot for a cup that is not on the table and it neither stops nor refuses. It reaches toward where the cup should have been.

The benchmark went up on arXiv last month from three researchers at Jilin University. They read the task specifications inside LIBERO, a robot manipulation simulator, planted false premises to build 2,826 tasks, and ran eight models that turn a camera view and a human sentence into arm motion through all of them.

All eight lost ground on the original goal, and OpenVLA came down from 78.7% to 22.5%. The paper puts its weight elsewhere. Reopen the runs recorded as failures and the gripper had closed in on the original target about as steadily as usual, while the force of the motions barely eased. The authors call the behavior Failed Persistence.

Telling the model to check the premise first did not fix it. Not one of the eight moved as intended on all four process metrics, and OpenVLA and π₀-FAST lost success rate on valid instructions as well. The experiment ran inside a simulator, and the conflict tasks were grown on top of only 40 LIBERO base tasks.

A success rate writes the robot that stopped and the robot that pushed all the way through into the same cell. That is why Pebblous counts process traces separately from outcome scores when it diagnoses data quality.

▶ Read: https://blog.pebblous.ai/blog/openvla-premise-conflict-bench/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #PhysicalAI #OpenVLA #ConflictVLABench #VLA #LIBERO #RobotData

---

## Twitter/X (KO)

식탁에 없는 컵을 집으라고 시키자 로봇 팔은 멈추지도 되묻지도 않고 그 자리로 계속 다가갔다. 전제가 틀린 과제 2,826개로 시험한 로봇 제어 모델 여덟 종이 모두 그랬다.

실패라고 적힌 칸은 멈춘 로봇과 끝까지 밀어붙인 로봇을 구별해 주지 않는다.

▸ https://blog.pebblous.ai/blog/openvla-premise-conflict-bench/ko/

#페블러스 #데이터품질 #OpenVLA #ConflictVLABench

---

## Twitter/X (EN)

Told to pick up a cup that was not on the table, the robot arm neither stopped nor asked. It kept moving toward the spot. All eight control models tested on 2,826 false-premise tasks did the same.

A cell marked failure will not tell you which robot stopped and which one pushed all the way through.

▸ https://blog.pebblous.ai/blog/openvla-premise-conflict-bench/en/

#Pebblous #DataQuality #OpenVLA #ConflictVLABench

---

## Facebook (KO)

없는 물건을 가져다 달라고 사람에게 부탁하면, 대개 손이 먼저 멈춥니다.

"그거, 여기 없는데요."

팔과 집게가 달린 기계는 그렇게 하지 않았습니다.

지린대 연구자 세 사람이 지난달 arXiv에 올린 실험에서, 로봇 제어 모델 여덟 종은 식탁에 없는 컵을 집으라는 지시를 받고도 멈추지 않았습니다. 이미 열려 있는 서랍을 열라는 지시에도, 아래에 깔린 접시를 먼저 치우라는 지시에도 같았습니다.

거부하지도, 되묻지도 않았습니다. 컵이 있어야 할 자리로 팔을 뻗었습니다.

성적표에는 이 일이 '실패'로 적힙니다. 지시가 이상하다는 걸 알아채고 손을 접은 경우도 같은 칸에 적힙니다. 두 경우는 구별되지 않습니다.

연구진은 그 둘을 가르려고 실행 과정을 따로 쟀습니다. 집게 끝이 원래 목표로 다가간 정도, 팔이 그린 경로가 정상 수행과 겹치는 정도, 줄였어야 할 동작의 세기를 실제로 줄인 정도. 앞의 두 값은 높게 유지됐고 마지막 값만 낮은 자리에 머물렀습니다.

논문이 붙인 이름은 Failed Persistence입니다. 우리말로 옮기면 '멈추지 않는 실패'에 가깝습니다.

성공률은 성적표의 맨 아랫줄이고, 과정 지표는 그 줄에 이르는 길을 적은 지도입니다. 아랫줄만 남기면 어느 길로 왔는지가 사라집니다.

페블러스가 데이터 품질을 진단할 때 부딪히는 자리도 여기와 겹칩니다. 이 칸이 왜 비었는지, 이 라벨이 어느 단계에서 뒤집혔는지는 결과 점수에 적혀 있지 않습니다. DataClinic이 결과 지표와 함께 처리 과정의 흔적을 같이 읽는 이유입니다.

"여러분 팀의 '실패' 한 칸은, 멈춘 것과 끝까지 밀어붙인 것을 구별해 줍니까?"

한 가지는 적어 두어야 하겠습니다. 이 실험은 시뮬레이터 안에서 이루어졌고, 충돌 과제도 LIBERO 기본 과제 40개 위에 오류를 바꿔 심어 불린 것입니다. 저자들도 결론을 거부 능력의 부재로 넓히지 않았습니다.

그래도 팔이 달린 기계에서는, 멈춘 것과 계속 다가간 것의 무게가 같지 않습니다.

▸ https://blog.pebblous.ai/blog/openvla-premise-conflict-bench/ko/

#페블러스 #데이터클리닉 #데이터품질 #OpenVLA #ConflictVLABench #PhysicalAI #AIReadyData

---

## Facebook (EN)

Ask a person for something that is not there and the hand usually stops first.

"That one isn't here."

A machine with an arm and a gripper did not do that.

In an experiment three researchers at Jilin University posted to arXiv last month, eight robot control models were told to pick up a cup that was not on the table, and none of them stopped. Open a drawer that is already open. Clear away the plate buried underneath first. The answer was the same.

No refusal, no question back. The arm went to where the cup should have been.

A score sheet writes this down as failure. It writes the same word for a robot that noticed the instruction was wrong and pulled its hand back. In that column the two are not distinguishable.

To separate them the researchers measured the run itself: how far the gripper closed in on the original target, how much the path overlapped a normal run, how much the force of the motions actually came down. The first two stayed high. Only the last sat near the floor.

The name the paper gives it is Failed Persistence. Put plainly, a failure that never stops.

A success rate is the bottom line of a score sheet, and the process metrics are a map of the road that reached it. Keep only the bottom line and the road is gone.

What we run into inside data work sits next to that. Why this cell is empty, or at which stage this label flipped, is not written in the outcome score. It is why DataClinic reads processing traces alongside outcome metrics.

"Does the failure column on your side separate the one that stopped from the one that pushed all the way through?"

One thing belongs on the record. The experiment ran inside a simulator, and the conflict tasks were grown on top of only 40 LIBERO base tasks. The authors did not widen their conclusion into an absence of refusal capability.

Still, for a machine with an arm, stopping and continuing do not weigh the same.

▸ https://blog.pebblous.ai/blog/openvla-premise-conflict-bench/en/

#Pebblous #DataClinic #DataQuality #OpenVLA #ConflictVLABench #PhysicalAI #AIReadyData
