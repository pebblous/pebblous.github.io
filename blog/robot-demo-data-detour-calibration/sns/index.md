# SNS 홍보 글: 로봇 학습 데이터, 사람이 헤맨 길까지 로봇이 따라 배운다

> 소스: blog/robot-demo-data-detour-calibration/ko/index.html
> 생성일: 2026-11-21
> URL (KO): https://blog.pebblous.ai/blog/robot-demo-data-detour-calibration/ko/
> URL (EN): https://blog.pebblous.ai/blog/robot-demo-data-detour-calibration/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

로봇 학습 데이터의 75%에서 관절 영점 기준이 어긋나 있어도 성공률은 66.7%였다. 어긋난 쪽은 그대로 두고 기준이 맞는 시연 25편만 덜어내자 26.7%로 내려앉았다.

실기 로봇 데이터를 20만 시간 넘게 모은 팀이 자기 수집 과정을 뜯어본 결과다. 11월 17일 공개된 논문(arXiv:2611.22388)으로, 시험관을 건네고 꽂는 과업에서 학습 데이터 구성을 넷으로 나눠 각각 30회씩 돌렸다.

성능은 어긋난 데이터의 비율을 따라가지 않았다. 추론에 쓸 로봇과 기준이 맞는 시연이 조금이라도 남아 있는지를 따라갔고, 그 시연이 닻 노릇을 한다. 오히려 가장 낮은 20%가 나온 구성은 오차가 한쪽으로 쏠리지 않고 양쪽으로 흩어져 평균이 0에 가까운 쪽이었다. 평균 오차가 없다는 것과 시연들이 같은 기준을 쓴다는 것은 다른 말이다.

반대쪽 조건은 더 매몰찼다. 학습 데이터가 전부 정상이어도 정책을 올려 돌리는 로봇의 영점이 수집 때와 다르면 30회 시행이 전부 실패했다. 학습 쪽 어긋남은 닻이 있으면 견디고, 추론 쪽 어긋남은 견디지 못한다. 다만 논문은 공개된 지 며칠밖에 되지 않아 동료 심사를 거치지 않았고, 이 값들은 한 과업과 단일 정책 모델에서 나왔다.

그래서 데이터 품질의 사슬은 데이터셋 안에서 끝나지 않고 그 데이터를 쓸 로봇 개체의 보정까지 이어진다. 페블러스는 DataClinic으로 AI 학습 데이터의 품질을 분포로 펴서 진단한다. 성패 라벨 한 칸으로는 같은 '성공'끼리 무엇이 다른지 적히지 않는다.

▶ 전문: https://blog.pebblous.ai/blog/robot-demo-data-detour-calibration/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PhysicalAI #AIReadyData #로봇학습데이터 #텔레오퍼레이션 #VLA #Pi05

---

## LinkedIn (EN)

Three quarters of the demonstrations in a robot training set can carry a joint-zero reference that does not match the robot running the policy, and the success rate still comes out at 66.7%. Leave all of that miscalibrated data in place and remove only the 25 demonstrations that do match, and the rate falls to 26.7%.

The figures belong to a team that has collected more than 200,000 hours of real-robot data and turned the analysis on its own collection pipeline. They posted the paper, arXiv:2611.22388, on November 17. On a test-tube handover and insertion task, four training mixes were each run 30 times on a real robot.

Performance did not track the share of miscalibrated data. It tracked whether the set still held demonstrations aligned with the robot that would run the policy, and those act as an anchor. The lowest score, 20%, came from the mix whose zero-point errors scattered in both directions so that they averaged out to near zero. An error that averages out to zero still does not put the demonstrations on one shared reference.

The reverse case is harsher. With every training demonstration correctly calibrated, a policy deployed on a robot whose joint zeros differed from the collection rig failed all 30 trials. Miscalibration on the training side is survivable while an anchor remains; miscalibration at inference is not. The paper went up days ago with no peer review behind it, and these numbers come from one task and a single policy model.

The chain of data quality therefore does not end at the dataset. It runs on into the calibration of each individual robot that will use it. Pebblous characterises the quality of AI training data with DataClinic. Success labels carry no column for what separates one success from another.

▶ Read: https://blog.pebblous.ai/blog/robot-demo-data-detour-calibration/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #PhysicalAI #AIReadyData #RobotTrainingData #Teleoperation #VLA #Pi05

---

## Twitter/X (KO)

조종자가 헤매며 돌아간 거리의 약 90%가 학습된 로봇 동작에 그대로 남았다.

시연 100편에서 돌아간 구간이 섞인 비율을 0%에서 80%로 올리자 시연의 손목 경로가 길어졌고, 그 데이터로 배운 정책의 경로도 함께 길어졌다. 라벨은 전부 '성공'이라 걸러 낼 근거가 없다.

▶ https://blog.pebblous.ai/blog/robot-demo-data-detour-calibration/ko/

#페블러스 #데이터품질 #로봇학습데이터 #PhysicalAI

---

## Twitter/X (EN)

Policies keep about 90% of the extra path length that operator detours put into robot demonstrations.

Raising the share of detour-contaminated episodes from 0% to 80% stretched the demonstrations, and the trained policy stretched with them. Every one of those episodes is labelled a success.

▶ https://blog.pebblous.ai/blog/robot-demo-data-detour-calibration/en/

#Pebblous #DataQuality #RobotTrainingData #PhysicalAI

---

## Facebook (KO)

같은 로그에 궤적 두 줄이 남아 있습니다. 둘 다 과업에 성공했고, 손목이 지나간 거리도 비슷하게 깁니다.

하나는 로봇이 고개를 돌려 눈앞에 없던 블록을 확인하고 나서 가까운 쪽 팔을 고른 기록입니다. 다른 하나는 조종 화면이 한 박자 늦게 따라오는 바람에, 사람이 한 번 지나친 지점으로 되돌아온 기록입니다.

경로 길이만 재면 둘은 같은 흠으로 보입니다. 지난 17일 공개된 논문은 이 둘을 반대로 다루라고 적었습니다. 20만 시간 넘는 로봇 조작 기록을 쌓아 온 팀이 자기들 데이터가 어떻게 만들어졌는지를 되짚어 본 글입니다. 앞의 것은 로봇이 판단에 쓸 정보를 얻는 동작이라 그 근거와 함께 남겨 두어야 합니다. 뒤의 것은 장비의 결함을 사람이 대신 메운 흔적이라, 데이터에서 걸러 내기 전에 수집 장비 쪽에서 먼저 고치라고 적혀 있습니다.

확인 동작이 빠진 시연으로 배운 정책은 팔 선택 정확도가 50% 언저리, 동전 던지기와 같은 자리에 머물렀습니다. 그 동작이 들어 있는 시연으로 배운 정책은 100%였습니다. 조종자는 자기 눈으로 이미 블록을 봤지만 로봇 카메라에 그 장면이 남지 않으면, 정책은 근거 없이 결과만 흉내 냅니다.

걷어 낼 동작과 남길 동작을 가르는 기준이 동작의 모양이 아니라는 대목에서 한참 멈췄습니다. 모양은 로그에 저절로 남습니다. 그 동작을 한 이유는 누군가 남기기로 해야 남습니다.

페블러스가 DataClinic으로 보는 것은 AI 학습 데이터가 무엇을 가르치고 있는가입니다. 성패 라벨은 그 질문에 답하지 않습니다.

▶ 전문: https://blog.pebblous.ai/blog/robot-demo-data-detour-calibration/ko/

#페블러스 #데이터클리닉 #데이터품질 #로봇학습데이터 #텔레오퍼레이션 #PhysicalAI

---

## Facebook (EN)

The same log holds two trajectories. Both tasks finished. Both wrists travelled about the same distance.

In one, the robot turned its head to find a block that had been outside its field of view, then reached with the nearer arm. In the other, the control display ran a beat behind, and the operator drifted past a point and had to come back for it.

Measured by path length alone, the two look like the same blemish. The paper that splits them apart went out on November 17, from a group whose own archive of robot manipulation runs past 200,000 hours. The first is the robot acquiring the information its choice depends on, and it belongs in the record along with that evidence. The second is a person compensating for a flaw in the rig. That one, the paper says, should be fixed at the collection hardware before anyone tries to filter it out of the data.

A policy trained on demonstrations with the look-first motion removed chose the right arm about half the time, which is where chance sits. With the motion present, arm selection was correct every time. The operator had already seen the block with their own eyes, but when that view never reaches the robot's cameras, the policy copies the outcome without the grounds for it.

The line between motion worth removing and motion worth keeping does not follow how the motion looks. I stopped on that for a while. How it looks ends up in the log on its own. Why it happened only ends up there if somebody decides to record it.

What Pebblous looks at through DataClinic is what a training set ends up teaching. A success label has nothing to say about it.

▶ Read: https://blog.pebblous.ai/blog/robot-demo-data-detour-calibration/en/

#Pebblous #DataClinic #DataQuality #RobotTrainingData #Teleoperation #PhysicalAI
