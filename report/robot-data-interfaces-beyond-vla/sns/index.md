# SNS 홍보 글: 로봇이 못 배우는 건 데이터가 없어서가 아니다

> 소스: report/robot-data-interfaces-beyond-vla/ko/index.html
> 생성일: 2026-08-11
> URL: https://blog.pebblous.ai/report/robot-data-interfaces-beyond-vla/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

라벨이 없는 1인칭 인간 영상은 100만 시간대인데, 로봇이 알아들을 수 있게 행동 라벨이 붙은 공개 영상은 1만 시간대다.

6월 arXiv에 올라온 포지션 페이퍼 한 편은 로봇 학습의 병목이 더 큰 VLA도, 더 좋은 월드 모델도 아니라고 말한다. 사람의 영상을 로봇의 감독신호로 바꾸는 번역 장치가 없다는 것이다. 그 번역은 실제로 작동한다. 시연이 열 개뿐인 구간에서, 행동 라벨이 하나도 없는 영상으로 사전학습하는 것만으로 성공률이 11.9%에서 64.2%로 올랐다.

문제는 논문이 장치가 없다고 쓴 지 두 달 만에 장치가 출하됐다는 데 있다. 보상 판정 모델은 허깅페이스 LeRobot의 정식 설정 옵션이 됐고, 물리 판정기는 NVIDIA 합성 데이터 레시피의 채택 필터로 이미 돌고 있다. 어느 쪽도 자기 오답률은 공개하지 않는다. 학계가 같은 것을 재 보면, 판정기가 성공이라고 선언한 세 건 중 둘은 성공이 아니었다.

데이터를 더 모으는 경쟁은 데이터를 번역하는 경쟁으로 옮겨갔고, 번역이 맞았는지를 재는 자리는 아직 비어 있다.

▶ 전문: https://blog.pebblous.ai/report/robot-data-interfaces-beyond-vla/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #PhysicalAI #로봇학습 #VLA #월드모델 #LeRobot #NVIDIA

---

## LinkedIn (EN)

Unlabeled first-person video of people doing ordinary things runs to roughly 1,000,000 hours. Public footage carrying action labels a robot can actually read runs to about 10,000.

A position paper posted to arXiv in June argues that the bottleneck in robot learning is neither a bigger VLA nor a better world model, but the missing machinery that turns human video into supervision a robot can act on. The translation does work. With only ten demonstrations available, pretraining on video that carries no action labels at all lifted success from 11.9% to 64.2%.

The complication is that two months after the paper said the machinery was missing, it shipped. A reward model is now a one-line config option in Hugging Face LeRobot, and a physics judge already filters NVIDIA's synthetic data recipe, admitting only rollouts it scores as plausible. Neither publishes its own error rate. Measured independently, of three trajectories a judge called successful, two were not.

The race to collect more data has become a race to translate it, and the position after that, measuring whether the translation was right, is still open.

▶ Read: https://blog.pebblous.ai/report/robot-data-interfaces-beyond-vla/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #PhysicalAI #RobotLearning #VLA #WorldModels #LeRobot #NVIDIA

---

## Twitter/X (KO)

라벨 없는 인간 영상은 100만 시간, 로봇이 알아듣는 라벨이 붙은 영상은 1만 시간. 그 사이를 잇는 번역 장치는 올해 이미 출하됐다.

정작 공개되지 않은 것은 그 번역기들의 오답률이다.

https://blog.pebblous.ai/report/robot-data-interfaces-beyond-vla/ko/

#페블러스 #데이터품질 #로봇학습 #VLA

---

## Twitter/X (EN)

Unlabeled human video: about 1,000,000 hours. Robot video with real action labels: about 10,000. The machinery that translates one into the other shipped this year.

What did not ship is any number for how often it is wrong.

https://blog.pebblous.ai/report/robot-data-interfaces-beyond-vla/en/

#Pebblous #DataQuality #RobotLearning #VLA

---

## Facebook (KO)

가끔 요리 영상을 봅니다.

손이 냄비 손잡이를 쥐고, 각도를 조금 틀고, 불에서 내려놓습니다.

그 영상 어디에도 그 손이 얼마의 힘으로 쥐었는지는 적혀 있지 않습니다. 사람은 보면 알고, 로봇은 모릅니다.

이런 영상이 세상에는 100만 시간쯤 쌓여 있습니다. 로봇이 알아들을 수 있게 행동 라벨이 붙은 영상은 그 백분의 일입니다. 넘치는 쪽이 로봇에게 도착하지 못하고 있는 셈입니다.

6월에 나온 한 논문은 그 사이에 놓여야 할 것을 네 개의 '번역 장치'로 정리했습니다. 라벨 없는 영상에 행동을 붙이는 장치, 사람의 몸짓을 로봇의 관절로 옮기는 장치, 무게와 접촉을 아는 장치, 그리고 잘했는지를 판정하는 장치입니다.

자료를 하나씩 따라가며 확인한 건, 이 장치들이 이미 나와 있다는 사실이었습니다.

보상을 판정하는 모델은 오픈소스 로봇 스택에 설정 한 줄로 켜지는 옵션이 되어 있었고, 물리 타당성을 채점하는 모델은 합성 데이터를 걸러 내는 필터로 이미 돌고 있었습니다.

그런데 어느 쪽도, 자기가 얼마나 자주 틀리는지는 말하지 않습니다.

학계가 같은 것을 재어 본 숫자는 조금 서늘합니다. 성공이라고 선언한 세 건 중 둘이 사실은 성공이 아니었습니다. 실패를 성공이라 부르는 오류는 성공을 놓치는 오류보다 다섯 배 가까이 비쌌습니다. 정책은 잘못된 칭찬을 받은 그 행동을, 성실하게 강화합니다.

"번역기를 갖는 것과, 그 번역이 맞다는 것을 아는 것은 같은 일일까요?"

사람이 붙인 라벨에는 검수 절차가 있습니다. 기계가 붙인 라벨에는 아직 그 절차가 없습니다. 페블러스가 로봇 모델 경쟁이 아니라 그 옆자리를 오래 보고 있는 이유도 여기에 있습니다. 감독신호를 만드는 층과, 그 신호가 맞는지 보증하는 층은 다른 자리입니다.

번역기는 출하됐고, 잣대는 아직 없습니다.

로봇을 더 잘 만드는 일보다, 로봇에게 무엇을 잘했다고 말해 줄 것인지가 먼저인 시간이 온 것 같습니다.

https://blog.pebblous.ai/report/robot-data-interfaces-beyond-vla/ko/

#페블러스 #로봇학습 #VLA #PhysicalAI #DataClinic #PebbloSim #AIReadyData

---

## Facebook (EN)

Sometimes I watch cooking videos.

A hand takes the pot by the handle, turns it slightly, lifts it off the heat.

Nowhere in that video is it written how hard the hand was gripping. A person sees it and knows. A robot does not.

There are something like a million hours of video like this. Video labeled with actions a robot can actually read amounts to about a hundredth of that. The abundant side is the side that never arrives.

A paper posted in June sorted what belongs in between into four "translators." One that attaches actions to unlabeled video, one that carries a human motion into a robot's joints, one that knows weight and contact, and one that decides whether the task was done.

What we found, following the evidence one paper at a time, was that these translators already exist.

A reward model is now a config line in an open robot stack. A model that scores physical plausibility is already running as a filter over synthetic data.

Neither of them says how often it is wrong.

The academic numbers are colder. Of three trajectories a judge called successful, two were not. Calling a failure a success turned out to cost close to five times what missing a success costs. The policy takes that misplaced praise and faithfully learns from it.

"Is having a translator the same thing as knowing the translation was right?"

Labels written by people go through review. Labels written by machines have no such step yet. That gap is why Pebblous keeps watching the seat next to the robot models rather than the models themselves. Producing a supervision signal and vouching for it are two different jobs.

The translators shipped. The gauges didn't.

Maybe the question now isn't how to build a better robot, but who gets to tell it that it did well.

https://blog.pebblous.ai/report/robot-data-interfaces-beyond-vla/en/

#Pebblous #RobotLearning #VLA #PhysicalAI #DataClinic #PebbloSim #AIReadyData
