# SNS 홍보 글: 사람 영상을 로봇 데이터로 바꾸는 Chorus, 로봇은 배울까?

> 소스: blog/chorus-cross-embodiment-data-engine/
> 생성일: 2026-11-17
> URL: https://blog.pebblous.ai/blog/chorus-cross-embodiment-data-engine/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

사람이 일하는 모습을 한 시간 찍으면 로봇 열여섯 종이 따라 할 수 있는 궤적 13.6시간이 나온다는 데이터 엔진이 공개됐다.

중국의 로봇 기초 모델 회사 행원지능(行元智能)이 10월 26일 연구 페이지에 올린 Chorus다. 스마트 글라스와 손목 카메라, 넥밴드처럼 제각각인 장비로 찍은 영상을 작업 의미와 공간 운동이라는 하나의 중간 표현으로 모은 다음, 로봇마다 그 몸이 낼 수 있는 관절 각도로 다시 푼다.

13.6이라는 수의 산술은 단순하다. 선별을 통과한 영상 한 시간에 로봇 열여섯 종을 곱하고, 관절 한계와 충돌을 통과해 쓸 수 있게 남는 평균 85%를 곱한 값이다. 처리 비용은 입력 한 시간당 약 200위안, 산출된 궤적으로 환산하면 한 시간당 약 14.7위안으로 적혀 있다. 뒤쪽 값이 작은 까닭은 공정이 싸져서가 아니라 나눗셈의 분모가 한 시간에서 13.6시간으로 커졌기 때문이다.

원문이 적지 않은 것이 둘이다. 같은 장면을 몸만 바꿔 열여섯 벌로 적은 기록이 서로 얼마나 다른 학습 신호인지를 잰 대목이 없다. 그 데이터로 학습한 로봇이 더 잘하게 됐는지를 보여 주는 수치도 없다. 사람 영상을 쓰는 UMI와 EgoMimic, Phantom은 변환에서 멈추지 않고 학습이 어떻게 나왔는지까지 함께 공개했다.

페블러스가 DataClinic으로 AI 학습 데이터에 붙이는 것은 분량이 아니라 품질을 적은 숫자다. 변환을 마친 분량과 거기서 배울 수 있는 분량은 같은 수가 아니다.

로봇 열여섯 종의 몸으로 번역된 13.6시간이 무엇을 가르칠지는, 그 데이터로 한 번 배워 본 로봇만 답할 수 있다.

▶ 전문: https://blog.pebblous.ai/blog/chorus-cross-embodiment-data-engine/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #Chorus #ActionIntelligence #로봇학습데이터 #크로스임베디먼트 #PhysicalAI

---

## LinkedIn (EN)

A pipeline that turns one hour of video shot by a person at work into roughly 13.6 hours of trajectories, spread across 16 kinds of robot, is now public.

It is called Chorus, and Action Intelligence (行元智能), a Chinese robot foundation model company, posted it to its research page on October 26. Footage arrives from smart glasses, chest and wrist cameras, neckbands, head-worn rigs and UMI-style handles, in capture setups running from a single camera up to six. Chorus converges all of it into one intermediate representation, holding what task the person was performing alongside how the hand and the objects moved through space, then solves that representation into joint angles each robot can actually reach.

The arithmetic behind 13.6 is plain. One screened source hour is multiplied by 16 embodiments, and 85% of those conversions survive joint limits and collision checks.

Processing runs about RMB 200 per input hour, which the company restates as about RMB 14.7 per hour of trajectory. The second figure is the smaller one because the denominator grew from one hour to 13.6, not because the pipeline itself got cheaper.

Two things go unreported. How far the sixteen copies of a single scene diverge from one another, as training signal, is measured nowhere on the page. Neither is the performance of any robot trained on what comes out. UMI, EgoMimic and Phantom each went past conversion and reported how the learning came out.

Pebblous asks whether AI training data is in a state a model can learn from, and DataClinic is where that question comes back as a number. Volume converted and volume worth training on are not the same quantity.

What 13.6 hours of borrowed human motion will teach a robot is a question only a robot that has trained on it can answer.

▶ Read: https://blog.pebblous.ai/blog/chorus-cross-embodiment-data-engine/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #Chorus #ActionIntelligence #RobotTrainingData #CrossEmbodiment #PhysicalAI

---

## Twitter/X (KO)

사람이 찍은 작업 영상 한 시간이 로봇 열여섯 종의 궤적 13.6시간이 된다. 행원지능(行元智能)이 10월 26일 공개한 데이터 엔진 Chorus의 산술이다.

열여섯 벌이 서로 얼마나 다른지, 그 데이터로 학습한 로봇이 나아졌는지는 원문에 적혀 있지 않다.

https://blog.pebblous.ai/blog/chorus-cross-embodiment-data-engine/ko/

#페블러스 #데이터품질 #Chorus #로봇학습데이터

---

## Twitter/X (EN)

Chorus takes one hour of human demonstration video and hands back about 13.6 hours of robot trajectories, spread across 16 embodiments.

Action Intelligence published the pipeline on October 26. What it does not publish: how far those sixteen copies of one scene diverge, and how a robot trained on them performs.

https://blog.pebblous.ai/blog/chorus-cross-embodiment-data-engine/en/

#Pebblous #DataQuality #Chorus #RobotTrainingData

---

## Facebook (KO)

컵을 집으려다 놓치고, 다시 집고, 쏟은 자리를 손으로 훔쳐 내는 몇 초가 있습니다.

작업을 기록한 영상에서 그런 구간은 대개 지저분한 자리로 분류됩니다.

행원지능(行元智能)이 10월 26일 공개한 데이터 엔진 Chorus는 그 몇 초를 반대로 읽습니다. 언어 모델에게 다음 동작을 예측하게 한 다음 실제 관찰된 동작과 어긋난 정도를 재서, 어긋남이 큰 구간을 검토 우선순위 위로 올립니다. 예상 밖의 선택이나 전략 변경, 실수를 되돌리는 손이 거기 들어 있다고 보기 때문입니다.

회사가 이 축에 붙인 이름이 '행동 놀라움'입니다.

정작 크게 적힌 수는 다른 쪽에 있습니다. 사람이 찍은 영상 한 시간을 로봇 열여섯 종의 몸으로 옮겨 궤적 13.6시간을 얻는다는 산술입니다.

궤적 한 시간을 만드는 값은 약 14.7위안으로 적혀 있습니다. 입력 영상 한 시간을 처리하는 값 약 200위안을, 거기서 나온 13.6시간으로 나눈 자리입니다.

"같은 장면을 몸만 바꿔 열여섯 벌로 적어 두면, 서로 다른 기록은 몇 벌이 됩니까?"

원문은 변환된 분량을 시간으로 적을 뿐, 열여섯 벌이 서로 얼마나 겹치는지는 재어 두지 않았습니다. 그 데이터로 학습한 로봇이 어떻게 달라졌는지를 적은 줄도 아직 없습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 데이터를 고차원 공간에 펼쳐 놓으면 서로 다른 자리에 선 기록과 한자리에 겹쳐 선 기록이 갈립니다. 분량이 늘었다는 말은 그 두 가지 중 어느 쪽이 늘었는지를 아직 말하지 않습니다.

궤적 13.6시간 가운데 로봇이 처음 보는 것이 몇 시간인지는, 그 데이터로 한 번 배워 본 다음에야 적힙니다.

https://blog.pebblous.ai/blog/chorus-cross-embodiment-data-engine/ko/

#페블러스 #데이터클리닉 #데이터품질 #Chorus #로봇학습데이터 #크로스임베디먼트

---

## Facebook (EN)

There are a few seconds where a cup slips out of a hand, gets picked up again, and the spill is wiped away.

In footage of someone working, those seconds usually count as noise.

Chorus, the data engine Action Intelligence (行元智能) published on October 26, treats them as the valuable ones. A language model is asked to predict the next action, the gap between that prediction and the action actually observed is measured, and the stretches with the widest gap are moved up the review queue. An unexpected choice, a change of plan, a hand undoing its own mistake: those are what the company expects to find there.

The name it gave that axis is action surprise.

The number printed large, though, sits elsewhere. One hour of video shot by a person becomes about 13.6 hours of trajectory once it has been carried over into the bodies of 16 kinds of robot.

An hour of that trajectory is priced at about RMB 14.7. It is the roughly RMB 200 that processing an hour of input video costs, divided by the 13.6 hours that come out of it.

"Write one scene out sixteen times, changing only the body it is written for, and how many different records do you have?"

The research page sets down the converted volume in hours, and leaves unmeasured how much those sixteen versions overlap. Nor is there yet a line about how a robot trained on the result came out.

Pebblous measures whether data is fit to be learned from before it ever reaches a model, and DataClinic returns that measurement as a figure. Spread a body of data across a high-dimensional space and the records standing in their own place separate from the records standing on top of one another. More volume, on its own, does not say which of the two has grown.

How many of those 13.6 hours hold something a robot has not already seen is a figure that gets written only after a robot has trained on them.

https://blog.pebblous.ai/blog/chorus-cross-embodiment-data-engine/en/

#Pebblous #DataClinic #DataQuality #Chorus #RobotTrainingData #CrossEmbodiment
