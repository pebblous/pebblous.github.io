# SNS 홍보 글: 촉각 모델 LingBot-Touch, 센서가 달라도 합친다

> 소스: report/lingbot-touch-cross-sensor-tactile-2026-11/
> 생성일: 2026-11-17
> URL: https://blog.pebblous.ai/report/lingbot-touch-cross-sensor-tactile-2026-11/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

사전학습에 한 번도 들어가지 않은 로봇 손에 인코더를 그대로 붙였는데, 접촉이 일어난 지점을 평균 0.16 mm 안에서 찾았다.

앤트그룹 안에서 로봇을 움직이는 AI를 만드는 로비안트가 11월 10일 공개한 촉각 파운데이션 모델 LingBot-Touch다. 원리가 서로 다른 세 종류 센서에서 모은 4,983시간이 재료이고, 그 가운데 3분의 2는 로봇 손이 아니라 사람이 끼는 촉각 장갑에서 왔다. 같은 손에 전용 어댑터를 붙여 따로 학습한 비교 모델은 같은 과제에서 5.89 mm였다.

방법은 모델을 키우는 쪽이 아니었다. 센서마다 제조사가 배선 순서대로 매긴 감지점 번호를 버리고, 그 감지점이 손끝 표면 위 어디에 앉아 있는지를 좌표로 적었다. 번호가 좌표로 바뀌자 손가락 하나에 감지점 아홉 개를 둔 장갑과 240×240 이미지를 찍는 손끝이 같은 인코더로 들어간다. 기존 행동 모델 넷에 이 토큰을 얹었더니 스물여섯 개 실로봇 과제의 평균 점수가 넷 모두에서 올랐고, 같은 신호를 가공 없이 넣은 설정이 가져온 몫은 그 3분의 1에서 절반에 그쳤다.

그늘은 같은 논문 안에 있다. 쓸 수 있는 시간을 1,000시간으로 묶고 겨루면, 그 시간을 한 센서에 몰아 준 모델이 센서와 과제 여덟 쌍 가운데 일곱에서 이긴다. 힘과 움직임은 장비를 건너 옮겨 가지만, 공간 정밀도는 그 센서의 배열을 본래 해상도로 본 만큼만 나오기 때문이다. 합치기는 능력이 아니라 교환이다.

더 조용한 문장은 한계 절에 있다. 정전용량식 센서는 구할 수 있던 기록이 품질 요건을 넘지 못해 사전학습에서 통째로 빠졌다. 설계가 아무리 촘촘해도 기록이 기준 아래면 그 센서 종류는 합치는 자리에 끼지 못한다.

DataClinic은 페블러스가 AI 학습 데이터의 품질을 정량 진단할 때 쓰는 도구다. 로봇이든 설비든, 합쳐질 자격은 장비가 아니라 기록이 가진다. 어떤 눈금으로 쟀고 어디를 기준점으로 삼았는지를 남기지 않은 한 시간은, 장비가 바뀌는 순간 누구의 시간과도 더해지지 않는다.

▶ 전문: https://blog.pebblous.ai/report/lingbot-touch-cross-sensor-tactile-2026-11/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #PhysicalAI #LingBotTouch #촉각센서 #로봇데이터 #이종센서통합

---

## LinkedIn (EN)

A tactile encoder attached with no parameter changed to a robot hand absent from its pretraining located the point of contact to within 0.16 mm on average.

LingBot-Touch was released on November 10 by Robbyant, the embodied-AI company inside Ant Group. It was pretrained on 4,983 hours from three sensor families whose physics have nothing in common: grids whose resistance falls under pressure, magnets read by displacement, and gels filmed from behind. Two thirds of those hours came off gloves worn by people, not the robot fingertips the system will end up on. A rival approach that trains a bespoke adapter per device came in at 5.89 mm on that same hand.

The move was not scale. Every sensor numbers its taxels in whatever order the wiring ran, so the model throws the numbering away and writes down where on the fingertip each taxel sits, as a coordinate. Once an index becomes a position, a glove carrying nine taxels per finger and a fingertip returning a 240×240 image go into one encoder. Laid on top of four existing robot policies, the tokens raised the average score over twenty-six real-robot tasks for all four, while the same signal fed in unprocessed delivered a third to a half of that.

The cost is printed in the same paper. Cap the hours at a thousand and spend them all on one sensor, and that model takes seven of eight sensor-task pairs. Force and dynamics cross between devices. Spatial precision does not, because it comes from watching one layout at its own resolution, which a shared budget cuts short. Pooling buys reach and sells accuracy.

The quieter line sits in the limitations. Capacitive sensors are missing from pretraining altogether: the capacitive recordings the team could obtain did not meet its quality requirements.

DataClinic is the tool Pebblous reaches for when the quality of AI training data has to come back as a number. Admission to a pooled corpus is decided by the record, not by the hardware that made it. An hour logged without the scale it was read on, or the origin it was read from, will not add to anyone else's hours later.

▶ Read: https://blog.pebblous.ai/report/lingbot-touch-cross-sensor-tactile-2026-11/en/

#Pebblous #DataClinic #DataQuality #AIReadyData #PhysicalAI #LingBotTouch #TactileSensing #RobotData #SensorInteroperability

---

## Twitter/X (KO)

사전학습에 한 번도 없던 로봇 손에 그대로 붙였는데 접촉 지점을 평균 0.16 mm 안에서 찾았다. 감지점 번호를 버리고 손끝 위 좌표로 다시 적은 촉각 모델이다.

다만 쓸 수 있는 시간이 정해지면, 그 시간을 한 센서에 몰아 준 모델이 여덟 쌍 가운데 일곱에서 이긴다. 합치기는 능력이 아니라 교환이다.

https://blog.pebblous.ai/report/lingbot-touch-cross-sensor-tactile-2026-11/ko/

#페블러스 #촉각센서 #로봇데이터 #PhysicalAI #데이터품질

---

## Twitter/X (EN)

Attached to a robot hand absent from its pretraining, with no parameter changed, LingBot-Touch located contact to within 0.16 mm on average. It discards each sensor's taxel numbering and writes a fingertip coordinate instead.

Cap the hours, though, and a single-sensor model takes seven of eight pairs. Pooling buys reach and sells accuracy.

https://blog.pebblous.ai/report/lingbot-touch-cross-sensor-tactile-2026-11/en/

#Pebblous #TactileSensing #RobotData #PhysicalAI #DataQuality

---

## Facebook (KO)

같은 손끝이 같은 모서리를 눌러도, 그 일을 적는 장비가 다르면 남는 숫자끼리는 서로 할 말이 없습니다.

어떤 촉각 장갑은 손가락 하나에 감지점 아홉 개를 두고 초당 백 번 읽습니다. 어떤 로봇 손끝은 젤 뒤의 카메라로 240×240 이미지를 초당 서른 번 찍습니다. 같은 사건인데 자릿수도 단위도 겹치지 않습니다.

그래서 촉각 데이터는 장비마다 따로 쌓였고, 쌓인 뒤에도 서로 더해지지 않았습니다.

로비안트가 11월 10일 공개한 LingBot-Touch는 그 벽을 조금 다른 쪽에서 넘었습니다. 감지점에 붙은 번호를 버리고, 그 감지점이 손끝 위 어디에 앉아 있는지를 좌표로 적었습니다. 번호는 제조사가 배선 순서대로 매긴 이름표일 뿐이지만, 좌표는 장비가 달라도 같은 뜻입니다.

사전학습에 한 번도 들어가지 않은 손에 그대로 붙였더니, 접촉이 일어난 지점을 평균 0.16 mm 안에서 찾았습니다. 파라미터는 한 개도 고치지 않았습니다.

바로 다음 문단을 읽는 데 더 오래 걸렸습니다.

논문은 같은 절에 내주는 쪽도 적어 두었습니다. 쓸 수 있는 시간을 1,000시간으로 묶으면, 그 시간을 한 센서에 몰아 준 모델이 여덟 쌍 가운데 일곱에서 이깁니다.

힘이 얼마나 걸렸는지와 그 힘이 어떻게 변했는지는 장비를 건너 옮겨 갑니다. 그런데 어디에 닿았는지를 짚는 정밀도는 옮겨 가지 않습니다. 그 정밀도는 한 배열을 그 배열의 해상도로 본 시간에서만 나오고, 예산을 나누면 그 시간이 먼저 줄어듭니다.

그러니 합칠 수 있느냐는 물음은 반쯤만 맞습니다. 옮겨 가는 축과 옮겨 가지 않는 축이 따로 있고, 어느 쪽이 우리에게 필요한지는 데이터가 아니라 하려는 일에 달려 있습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 기록에서 숫자만큼 오래 찾는 두 줄이 있습니다. 어떤 눈금으로 쟀는지, 그리고 어디를 기준점으로 삼았는지입니다. 그 두 줄이 비어 있는 한 시간은, 장비가 바뀌는 날 아무 데에도 더해지지 않습니다.

"우리에게 필요한 정밀도는 어느 축에 있습니까?"

이 물음에 먼저 답한 조직만, 합치는 쪽과 몰아 주는 쪽 가운데 하나를 고를 수 있는 것 같습니다.

#페블러스 #데이터품질 #AIReadyData #PhysicalAI

---

## Facebook (EN)

Three devices can record the same press of a fingertip and leave behind three sets of numbers with nothing to say to one another.

A tactile glove might place nine sensing points on a single finger and read them a hundred times a second. A robot fingertip might film a gel from behind and return a 240×240 image thirty times a second. Same event, and not a digit, a unit or an order of magnitude in common.

So touch data has piled up device by device, and the piles have never added together.

LingBot-Touch, released by Robbyant on November 10, got over that wall from a different side. It throws out the number each sensing point carries and writes down where on the fingertip that point actually sits. The number is only a label a manufacturer assigned in wiring order. A coordinate means the same thing on any device.

Attached to a hand that had never entered pretraining, with no parameter changed, the model found the point of contact to within 0.16 mm on average.

I stopped reading at the paragraph after that one.

In the same section, the paper sets down what the method hands over. Cap the usable hours at a thousand, and a model that spent all of them on one sensor wins seven of eight sensor-task pairs. How hard a touch was, and how that force changed, both travel between devices. Precision about where the touch landed does not. That kind of precision is earned by watching one layout at its own resolution, hour after hour, and a shared budget is what cuts the hours.

So "can we pool it?" turns out to be only half of a question. Some axes travel and some do not, and which of them you need is settled by the job, not by the data.

Deciding whether AI training data is in good enough shape to train on is the work Pebblous does, and DataClinic is what turns that decision into a figure. The two lines we look for in a record are the scale it was read on and the origin it was read from. With those missing, an hour stops being addable on the day the equipment changes.

"Which axis does the precision we need actually sit on?"

It seems to me that only the teams who have answered that get to choose between pooling and concentrating at all.

#Pebblous #DataQuality #AIReadyData #PhysicalAI
