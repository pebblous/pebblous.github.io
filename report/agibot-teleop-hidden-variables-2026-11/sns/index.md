# SNS 홍보 글: 로봇 시연 데이터, 조작자가 돌아간 길도 로봇이 따라 한다

> 소스: report/agibot-teleop-hidden-variables-2026-11/
> 생성일: 2026-11-20
> URL: https://blog.pebblous.ai/report/agibot-teleop-hidden-variables-2026-11/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

조작자가 각도가 안 나와 한 번 돌아 들어간 거리. 그 가운데 약 90%를 로봇이 그대로 다시 걸었다.

아지봇 원격조작 팀이 지난 11월 17일 arXiv에 올린 기술보고서다.

멈칫거림과 우회가 든 궤적을 학습 데이터에 일부러 섞고 그 몫을 올려 가며 정책 네 벌을 만들었다. 조작자가 여분으로 걸은 0.215 m 중 0.194 m가 정책 쪽으로 넘어갔다.

함께 건너가지 않은 쪽이 더 까다롭다. 돌아설 때의 덜컹거림은 절반 넘게 걸러진다. 늘어난 저크 중 정책이 물려받은 몫은 45%다. 결함이 매끄럽고 거침없는 동작의 얼굴을 하고 나온다는 뜻이라, 롤아웃 영상을 돌려 보는 검수에는 잡히지 않는다. 사람 눈에 걸릴 만한 쪽이 먼저 사라진다.

아예 기록되지 않는 쪽도 있다. 블록이 로봇의 처음 시야 밖에 있을 때 조작자는 자기 눈으로 그것을 보고 가까운 팔을 골랐는데, 그 시연으로 배운 정책은 팔을 찍기와 같은 확률로 골랐다. 시연에 틀린 데가 있어서가 아니다. 조작자가 본 장면이 로봇의 카메라에는 한 번도 잡히지 않았을 뿐이다.

규모의 숫자와 결론의 숫자가 다른 자리에서 나왔다는 점은 같이 읽어야 한다. 20,253건·207,030시간은 이 팀이 가진 수집 장부이고, 보고된 실험은 거의 전부 조건당 30회다. 동료 심사를 거치지 않은 기술보고서이기도 하다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단한다. 이 보고서가 수집을 늘리기 전에 재라고 꼽은 다섯 축은 유효 작업공간, 제어 효율, 관측 완전성, 보정 정합, 동작 품질인데, 다섯 모두 데이터셋 파일을 열어서는 잴 수 없고 수집이 끝나면 흔적만 남는다. 데이터 품질이 결과의 속성이 아니라 과정의 기록이 되는 자리다.

▶ 전문: https://blog.pebblous.ai/report/agibot-teleop-hidden-variables-2026-11/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #PhysicalAI #AgiBot #LeRobot #원격조작 #로봇데이터 #시연데이터

---

## LinkedIn (EN)

A teleoperator, unable to get the angle, backs the arm out and comes in again. A policy trained on that demonstration retraces about 90% of that extra distance on its own.

The figure is from a technical report the AgiBot teleoperation team posted to arXiv on November 17. The team deliberately seeded training batches with trajectories containing pauses and detours, raised the share, and trained four policies. Of the 0.215 m of extra wrist path the human covered, 0.194 m stayed in the policy.

What did not carry over is the harder part. More than half the shakiness of doubling back disappears: only 45% of the added jerk survives into the policy. The defect turns up wearing the face of smooth, confident motion, and that is precisely why reviewing rollout video misses it. The symptom a human reviewer would flag is the first thing to go.

A second finding never reaches the data at all. With the block out of the robot's initial view, the operator looked at it directly and chose the nearer arm, and the resulting policy picked arms no better than chance. Nothing about the demonstrations was wrong. What the operator's eyes took in simply never entered the robot's cameras.

The scale figure and the result figures come from different places, and both deserve to be read. The 20,253 entries and 207,030 hours are the team's collection ledger; the reported experiments are almost all 30 trials per condition. It is a technical report, and it has not been peer reviewed.

Pebblous uses DataClinic to turn the quality of AI training data into a measurement. Before scaling collection, the report says, measure five things: effective workspace, control efficiency, observation completeness, calibration alignment, and motion quality. Not one of the five is legible from a dataset file, and after collection ends only their traces survive. Data quality stops being a property of the output and becomes a record of the process.

▶ Read: https://blog.pebblous.ai/report/agibot-teleop-hidden-variables-2026-11/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #PhysicalAI #AgiBot #LeRobot #Teleoperation #RobotData

---

## Twitter/X (KO)

조작자가 각도가 안 나와 돌아 들어간 거리. 로봇은 그 가운데 약 90%를 그대로 다시 걸었다. 그런데 돌아갈 때의 덜컹거림은 45%만 따라왔다.

결함이 매끄러운 동작의 모습으로 남는다. 영상을 눈으로 보는 검수로는 걸러지지 않는다.

https://blog.pebblous.ai/report/agibot-teleop-hidden-variables-2026-11/ko/

#페블러스 #로봇데이터 #원격조작 #PhysicalAI #데이터품질

---

## Twitter/X (EN)

A teleoperator backs out and comes in again. The policy trained on that demonstration retraces about 90% of the extra distance, but only 45% of the added shakiness comes with it.

The defect shows up as smooth motion. Watching rollout video will not catch it.

https://blog.pebblous.ai/report/agibot-teleop-hidden-variables-2026-11/en/

#Pebblous #RobotData #Teleoperation #PhysicalAI #DataQuality

---

## Facebook (KO)

집으려던 물건 바로 앞에서 팔이 한 번 멈칫합니다. 각도가 안 나와 손목을 틀고, 몇 센티미터를 돌아 들어갑니다.

그래도 물건은 집힙니다. 그 시연은 성공으로 저장됩니다.

수십만 시간어치 원격조작 기록을 가진 팀이, 그 기록이 아니라 조건당 30회짜리 통제 실험으로 자기 수집 설비를 들여다본 보고서를 11월 17일 arXiv에 올렸습니다. 아지봇 원격조작 팀입니다.

잰 것은 그 몇 센티미터의 행방이었습니다.

조작자가 돌아가느라 더 걸은 거리의 약 90%를, 그 시연으로 배운 로봇이 그대로 다시 걸었습니다.

저를 더 오래 붙든 줄은 그 다음이었습니다.

돌아갈 때의 덜컹거림은 절반 넘게 사라집니다. 늘어난 저크 가운데 정책에 남는 것은 45%입니다. 로봇은 사람의 망설임을 다듬어 내고, 돌아간 거리만 가져갑니다.

그래서 영상으로 보면 괜찮아 보입니다. 매끄럽고, 망설임이 없고, 자신 있어 보입니다. 다만 먼 길입니다.

사람 눈에 걸릴 만한 쪽이 먼저 사라지는 셈입니다.

기록되지 않는 쪽도 있습니다. 블록이 로봇의 처음 시야 밖에 놓였을 때, 조작자는 자기 눈으로 그것을 보고 가까운 쪽 팔을 골랐습니다. 그 시연으로 배운 정책의 팔 선택 정확도는 찍기와 같았습니다. 조작자의 눈에 들어온 것이 로봇의 카메라에는 들어가지 않았기 때문입니다.

이런 것을 '수집 설비가 남긴 자국'이라고 불러 봅니다. 데이터에 적힌 것은 해야 할 일인데, 같이 적힌 것은 그 일을 그 장비로 그 사람이 했다는 사실입니다. 우회가 섞인 시연도 성공한 시연이고, 조작자가 눈으로 보고 옳은 팔을 고른 시연도 성공한 시연입니다. 둘 다 "성공"이라는 같은 칸에 들어갑니다.

페블러스가 DataClinic으로 하는 일은 학습 데이터의 상태를 숫자로 돌려주는 일입니다. 그래서 성공 여부 옆에 무엇이 같이 적혀 있는지를 오래 봅니다. 완료 시간, 궤적 길이, 교정 횟수, 그리고 이 데이터를 만든 로봇과 그 데이터로 움직일 로봇의 영점이 같은지입니다.

같은 보고서에 이런 대조가 있습니다. 수집한 로봇과 실행하는 로봇의 관절 영점이 어긋난 조건에서는 30번이 모두 실패했습니다. 한편 LeRobot 저장소에 11월에 열린 제안은, 그 영점을 에피소드마다 적어 두는 데 드는 값을 약 120바이트로 계산합니다. 같은 에피소드 영상 용량의 0.001%입니다.

적는 값과 적지 않아 치르는 값의 거리가 그만큼입니다.

"우리 데이터의 어느 부분이 현상이고, 어느 부분이 우리가 모은 방식입니까?"

기록은 사후에 만들 수 없으니, 이 물음은 수집을 시작하기 전에 한 번쯤 지나가야 하는 것 같습니다.

#페블러스 #데이터품질 #AIReadyData #PhysicalAI #AgiBot #로봇데이터

---

## Facebook (EN)

The arm hesitates just short of the object. The angle will not come, so the wrist twists, backs out a few centimeters, and comes in again.

The object gets picked up. The demonstration is filed as a success.

On November 17 the AgiBot teleoperation team posted a report to arXiv. A group sitting on several hundred thousand hours of logs had turned around to examine its own rigs, and not through those logs: through controlled runs of thirty attempts each.

What they measured was where those few centimeters end up.

About 90% of the extra distance the operator covered on the way around is walked again by the robot that learned from the demonstration.

It was the line after that one that kept me.

More than half of the shakiness of doubling back disappears. Only 45% of the added jerk stays in the policy. The robot smooths out the human's hesitation and keeps only the detour.

So on video it looks fine. Smooth, unhesitating, confident. Just long.

The part a reviewer's eye would have caught is the part that goes first.

Something else never gets recorded at all. With the block sitting out of the robot's first view, the operator looked at it and chose the nearer arm. The policy that learned from those runs picked arms no better than chance. What reached the operator's eyes never reached the robot's cameras.

I have taken to calling this "the mark the collection rig leaves." What the data records is the job. What it records alongside the job is that this rig, and this person, were the ones who did it. A demonstration laced with detours is a successful demonstration. A demonstration where the operator saw the block and chose correctly is a successful demonstration. Both go into the same column marked "success."

What Pebblous does with DataClinic is return the condition of training data as a figure. So we spend a long time on what sits next to the success flag. Completion time, path length, number of corrections, and whether the two machines on either end of the dataset were ever zeroed the same way.

The report sets two numbers beside each other. When the robot that made the data and the robot running it disagreed on joint zero, every one of 30 attempts failed. Meanwhile a proposal opened on the LeRobot repository this month puts the cost of writing that zero into each episode at roughly 120 bytes, about 0.001% of the video in that same episode.

That is the distance between what it costs to write it down and what it costs not to.

"How much of this data is the phenomenon, and how much of it is the rig we used?"

Nothing here can be written down later, so it seems to me the question belongs somewhere before collection starts.

#Pebblous #DataQuality #AIReadyData #PhysicalAI #AgiBot #RobotData
