# SNS 홍보 글: 완벽한 데이터를 섞었는데 로봇이 더 나빠졌다

> 소스: report/robot-data-curation-closed-loop-gap/ko/index.html
> 생성일: 2026-07-17
> URL: https://blog.pebblous.ai/report/robot-data-curation-closed-loop-gap/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

물리적으로 완벽하게 일관된 합성데이터를 더 넣었더니, 로봇이 오히려 나빠졌다.

페블러스의 PebbloSim GR00T 실험에서 기존 시연에 겨냥 생산한 처방 데이터를 24% 더 부었다. 폐루프에서 로봇이 목표에 닿는 도달률이 73%에서 43%로 떨어졌다.

데이터가 더러워서가 아니었다. 로봇이 거의 움직이지 않는 '정지 시연'이 기존의 2배로 편중돼 있었고, 정책이 그 편향을 성실히 학습한 결과였다. 더 곤란한 것은 답안지 채점에 해당하는 오프라인 지표가 이 하락을 전혀 못 봤다는 점이다. 두 조건 모두 만점급으로 붙었고, 실기로 굴려 본 폐루프만 30%p의 격차를 드러냈다.

최신 연구를 훑어보면 혼합비 최적화, 시연 선별, 검색 증강 세 축이 모두 학습을 시작하기 전 데이터를 손질하는 단계에서 멈춘다. 실기 결과를 다시 데이터로 되먹이는 회로는 아직 아무도 닫지 못했다.

데이터 품질은 이제 "깨끗한가"를 넘어 "어떻게 섞고, 실기로 검증했는가"의 문제다.

▶ 전문: https://blog.pebblous.ai/report/robot-data-curation-closed-loop-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PebbloSim #로봇학습 #합성데이터 #모방학습 #GR00T #NVIDIA #PhysicalAI

---

## LinkedIn (EN)

We added more synthetic data that was physically flawless. The robot got worse.

In a PebbloSim GR00T experiment, we mixed prescription episodes into our existing demonstrations, about a quarter of the total. In closed-loop trials, the rate at which the robot reached its target fell from 73% to 43%.

The data wasn't dirty; the distribution was. The prescription set was twice as dense in "idle demonstrations," moments where the robot barely moves, and the policy learned that bias faithfully. The harder part was that offline metrics, the equivalent of grading an answer sheet, saw none of it. Both conditions scored near perfect. Only closed-loop rollouts exposed the 30-point gap.

Survey the recent work and a pattern appears. Mixture optimization, demonstration selection, retrieval augmentation all stop at data prep, before training begins. No one has closed the loop that feeds real rollout results back into the data.

Data quality is no longer "is it clean." It is "how did you mix it, and did you verify it in practice."

▶ Read: https://blog.pebblous.ai/report/robot-data-curation-closed-loop-gap/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #PebbloSim #RobotLearning #SyntheticData #ImitationLearning #GR00T #NVIDIA #PhysicalAI

---

## Twitter/X (KO)

완벽하게 일관된 합성데이터를 더 넣었더니 로봇이 나빠졌다. 폐루프 도달률 73%→43%. 그런데 답안지에 해당하는 오프라인 지표는 이 하락을 전혀 못 봤다.

데이터 품질은 "깨끗한가"가 아니라 "어떻게 섞고 실기로 검증했는가"다.

https://blog.pebblous.ai/report/robot-data-curation-closed-loop-gap/ko/

#페블러스 #데이터품질 #GR00T #로봇학습

---

## Twitter/X (EN)

We added flawless synthetic data and the robot got worse. Closed-loop reach fell 73% → 43%. Offline metrics never saw it.

Data quality isn't "is it clean." It's "how did you mix it, and did you test it for real."

https://blog.pebblous.ai/report/robot-data-curation-closed-loop-gap/en/

#Pebblous #DataQuality #GR00T #RobotLearning

---

## Facebook (KO)

데이터를 더 넣으면 로봇은 더 잘하게 될까요.

상식은 그렇다고 답합니다. 저희도 그렇게 믿고 데이터를 늘렸습니다.

기존 시연에, 물리적으로 완벽하게 일관된 처방 데이터를 전체의 4분의 1쯤 더 부었습니다.

결과는 반대였습니다. 폐루프에서 로봇이 목표에 닿는 비율이 73%에서 43%로 내려앉았습니다.

데이터가 더러워서가 아니었습니다. 로봇이 거의 움직이지 않는 시연, 저희가 '정지 시연'이라 부르게 된 그 데이터가 기존의 두 배로 몰려 있었습니다. 정책은 그 편향을 성실히 배워, 결정적인 순간에 가만히 있기를 택했습니다.

더 오래 마음에 남은 건 다른 지점이었습니다.

학습된 정책이 정답을 얼마나 잘 맞히는지 재는 오프라인 지표는, 이 하락을 전혀 보지 못했습니다. 답안지 채점만 보면 두 정책은 똑같은 우등생이었습니다. 실기로 굴려 본 폐루프만이 그 차이를 봤습니다.

"이 데이터로 학습한 로봇이 정말 더 나아졌는가?"

이 질문에 답하려면 답안지가 아니라 실기를 봐야 한다는 걸, 저희는 넘어지고 나서야 배웠습니다.

최신 연구를 한참 찾아 읽었습니다. 무엇을 얼마나 섞을지, 어떤 시연을 남길지, 부족한 상황을 어떻게 채울지. 재료를 다듬는 기술은 이미 정교했습니다. 그런데 손님상에 음식이 나간 뒤 그 반응을 보고 다음 재료를 다시 고르는 주방은, 아직 문을 열지 않았습니다.

폐루프는 바로 그 손님상의 반응입니다. 페블러스가 데이터 품질을 파일 안에서가 아니라 로봇의 실제 행동에서 판정하려는 이유도 여기에 있습니다.

저희의 1차전은 그 반응을 처음 마주한, 넘어짐을 포함한 기록입니다. 다음 질문은 얼마나 잘 손질했는가가 아니라, 손님상의 반응을 보고 다시 손질하는 회로를 닫았는가일지도 모릅니다.

https://blog.pebblous.ai/report/robot-data-curation-closed-loop-gap/ko/

#페블러스 #로봇학습 #GR00T #PebbloSim #DataClinic #DataGreenhouse #PhysicalAI

---

## Facebook (EN)

Does more data make a robot better?

Common sense says yes. We believed it too, and added more.

To our existing demonstrations we mixed in a batch of synthetic data, physically flawless, about a quarter of the total.

The robot got worse. In closed-loop trials, the rate at which it reached its target fell from 73 percent to 43 percent.

The data wasn't dirty. It was crowded with something we came to call "idle demonstrations," moments where the robot barely moves. The policy learned that bias faithfully, and chose to stay still at the very moments that mattered.

What stayed with me was something else.

The offline metrics, the ones that grade how well a policy predicts the right answer, saw none of this. On paper, both policies were honor students. Only the closed-loop rollout could tell them apart.

"Did the robot trained on this data actually get better?"

We learned, only after falling, that answering this means watching the practical test, not the answer sheet.

I read through the recent work for a while. How much to mix, which demonstrations to keep, how to fill the gaps. The craft of preparing ingredients has grown precise. But the kitchen that watches the diner's reaction and reconsiders the next course has not yet opened its doors.

Closed-loop feedback is that reaction. It is also why Pebblous judges data quality not inside the file, but in how the robot actually behaves.

Our first run is the record of meeting that reaction for the first time, falling included. Maybe the next question isn't how well we prepped the ingredients, but whether we ever closed the loop back to them.

https://blog.pebblous.ai/report/robot-data-curation-closed-loop-gap/en/

#Pebblous #RobotLearning #GR00T #PebbloSim #DataClinic #DataGreenhouse #PhysicalAI
