# SNS 홍보 글: 촉각 장갑 TouchScale, 로봇 성공률을 두 배 넘게 올린다

> 소스: blog/touchscale-tactile-glove-dataset/ko/index.html
> 생성일: 2026-10-09
> URL: https://blog.pebblous.ai/blog/touchscale-tactile-glove-dataset/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

같은 16시간을 학습시켰는데 한쪽은 0.134가 나오고 다른 쪽은 0.181이 나왔다. 달라진 것은 분량이 아니라, 그 16시간을 모은 장비가 한 종류였다는 사실뿐이다.

10월 7일 arXiv에 올라온 TouchScale 이야기다. 스물여섯 명이 이름을 올린 이 논문이 내놓은 것은 새 모델이 아니라 데이터셋이다. 사람이 양손에 촉각 장갑을 끼고 물건을 다루는 동안 머리에 쓴 카메라와 손목 카메라가 같은 시간축으로 돌아간 기록 500시간이다. 장갑 한 짝에 감지점 880개가 다섯 손가락과 손바닥에 흩어져 있다.

저자들이 선행 촉각 데이터셋의 약점으로 지목한 것은 분량이 아니었다. 큰 자료일수록 서로 다른 센서로 찍고 서로 다른 주석 절차를 거친 기록을 합쳐 만들어진 탓에, 성능이 올라도 그것이 데이터를 늘려서인지 중간에 섞인 더 좋은 센서 덕분인지 가를 수 없었다. 그래서 장비와 절차를 하나로 고정했다. 학습에 쓰지 않은 다른 촉각 센서를 상대로 한 제로샷 접촉 예측 정확도는 0.134에서 0.383으로 올랐다.

그 간격 안에 성격이 다른 두 몫이 섞여 있다. 분량을 맞춘 비교에서 갈린 0.047이 규격을 하나로 묶어 얻은 몫이고, 나머지는 그 규격을 유지한 채 분량을 끝까지 늘려 얻은 몫이다. 양이 올리는 폭은 뒤로 갈수록 눕는다. 50시간에서 이미 0.311이 나왔고, 거기서 열 배를 더 채워 얻은 것이 나머지 폭이다.

로봇에서도 확인했다. xArm6 팔에 BrainCo Revo 2 손을 붙여 접촉이 많은 과제를 시켰더니 네 과제 평균 성공률이 22.5%에서 57.5%로 올랐고, 가장 많이 오른 쪽은 무른 물건과 단단한 물건을 만져서 갈라 담는 과제였다. 다만 논문이 스스로 적은 한계가 작지 않다. 평가는 플랫폼 하나와 과제 네 가지에 머물렀고, 촉각을 잘 맞히는 모델이 곧 잘 움직이는 로봇이 되는지는 저자들도 열린 질문으로 남겨 두었다.

데이터를 모으는 쪽이 이 논문에서 먼저 볼 대목은 500이라는 숫자가 아니라 장비를 한 벌로 묶었다는 조건이다. 수집 규격을 통일하는 일은 많이 모은 뒤에는 되돌릴 수 없고, 서로 다른 장비로 쌓인 기록은 아무리 커도 양을 늘린 효과를 분리해 주지 못한다. 페블러스가 AI-Ready Data를 말할 때 앞에 두는 전제가 같은 자리에 있다. 데이터의 값어치는 분량만으로 정해지지 않고, 어떤 규격으로 모였는지가 함께 기록돼야 쓸 수 있는 자료가 된다.

▶ 전문: https://blog.pebblous.ai/blog/touchscale-tactile-glove-dataset/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #TouchScale #촉각장갑 #PhysicalAI #로봇조작 #학습데이터 #AIReadyData

---

## LinkedIn (EN)

Two models trained on the same sixteen hours. One scored 0.134, the other 0.181. What separated them was not volume but the fact that one of those sixteen hours came in through a single set of equipment.

The paper is TouchScale, posted to arXiv on October 7. What its twenty-six authors released is a dataset rather than a model: 500 hours of people wearing tactile gloves on both hands and handling objects while a head-mounted camera and wrist cameras ran on the same clock. One glove carries 880 sensing points across the five fingers and the palm.

The weakness the authors named in earlier tactile datasets was not size. The bigger a corpus was, the more likely it had been pooled from recordings shot with different sensors and passed through different annotation procedures, so a rise in performance could not be attributed to more data rather than to a better sensor mixed in partway. Their answer was to hold the rig and the procedure to one. Zero-shot contact prediction against a tactile sensor the model had never trained on rose from 0.134 to 0.383.

Two components of a different nature sit inside that gap. The 0.047 that separates the size-matched runs is what one rig and one procedure bought. The rest was won by holding that rig steady and pushing the volume all the way up, and the curve keeps flattening as it climbs: 50 hours already returned 0.311, and ten times more data bought what remained of the distance.

The robot results follow the same direction. A BrainCo Revo 2 hand on an xArm6 arm ran contact-heavy tasks, and average success across the four rose from 22.5% to 57.5%, with the largest gain landing on the task that sorts soft objects from hard ones by feel. The limits the paper sets down for itself are not small. Evaluation stayed with one platform and four tasks, and whether a model that predicts touch well becomes a robot that moves well, the authors left open.

For a team collecting data, the part to read first is not the number 500 but the condition of a single set. Unifying a collection standard is work that cannot be undone once the gathering is finished, and hours piled up on mismatched equipment will not isolate the effect of volume however many of them there are. That is the premise Pebblous puts first in AI-Ready Data: the worth of data is not settled by volume alone, and a corpus becomes usable material only when the standard it was gathered under is recorded alongside it.

▶ Read: https://blog.pebblous.ai/blog/touchscale-tactile-glove-dataset/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #TouchScale #TactileSensing #PhysicalAI #RobotManipulation #TrainingData #AIReadyData

---

## Twitter/X (KO)

같은 분량을 학습시켰는데 접촉 예측이 0.134와 0.181로 갈렸다. 달라진 것은 그 기록을 모은 장비가 한 종류였다는 사실뿐이다.

TouchScale은 양손 촉각 장갑 한 종류로 500시간을 모아, 데이터를 늘린 효과를 따로 떼어 볼 수 있게 만든 데이터셋이다.

▶ https://blog.pebblous.ai/blog/touchscale-tactile-glove-dataset/ko/

#페블러스 #TouchScale #촉각장갑 #데이터품질

---

## Twitter/X (EN)

Same volume of training data, and contact prediction split 0.134 against 0.181. The only difference was that one side came in through a single model of glove.

TouchScale gathered 500 hours on one tactile rig, which is what makes the effect of volume possible to isolate at all.

▶ https://blog.pebblous.ai/blog/touchscale-tactile-glove-dataset/en/

#Pebblous #TouchScale #TactileSensing #DataQuality

---

## Facebook (KO)

가방 안을 보지 않고 손만 넣어 열쇠를 찾아 본 적 있으실 겁니다.

눈은 아무것도 보지 않았는데 손은 압니다. 금속인지 천인지, 모서리인지 면인지.

그런데 그 '손이 아는 것'은 어디에도 기록되지 않습니다.

로봇에게 몸 쓰는 법을 가르치려는 연구자들은 지난 몇 해 동안 사람 시점 영상을 수천 시간 모았습니다. 컵을 쥔 화면은 남습니다. 손가락 어디가 얼마나 눌렸는지는 남지 않습니다.

10월 7일 arXiv에 TouchScale이라는 데이터셋이 올라왔습니다.

사람이 양손에 촉각 장갑을 끼고 물건을 다루는 동안 머리 카메라와 손목 카메라가 같은 시간축으로 돌아간 기록, 500시간입니다.

장갑 한 짝에는 감지점이 880개 흩어져 있습니다.

그런데 이 논문에서 저를 붙든 것은 500이라는 숫자가 아니었습니다.

저자들이 앞선 촉각 데이터셋의 약점으로 지목한 것은 분량이 아니었습니다. 큰 자료일수록 서로 다른 센서와 서로 다른 주석 절차의 기록을 한데 합쳐 만들어졌다는 점이었습니다.

그런 자료로 학습해 성능이 올랐다면, 여기서 답하기 어려운 질문 하나가 남습니다.

"성능이 올랐다면, 무엇 덕분에 오른 것입니까?"

데이터가 늘어서인지, 중간에 섞인 더 좋은 센서 때문인지, 주석 기준이 달라져서인지 가를 방법이 없습니다.

그래서 이 팀은 장비와 절차를 한 종류로 고정했습니다. 저는 이것을 '한 벌 규격'이라고 부르고 싶습니다.

한 벌 규격은 자료 하나하나를 좋게 만들지 않습니다. 대신 자료들 사이를 비교할 수 있게 만듭니다.

실제로 같은 16시간을 학습시킨 두 모델이 0.134와 0.181로 갈렸습니다. 분량은 같았으니, 그 차이는 장비를 묶은 몫입니다.

접촉이 많은 로봇 작업 네 가지에서는 평균 성공률이 22.5%에서 57.5%로 올랐습니다. 가장 많이 오른 쪽은 무른 것과 단단한 것을 만져서 갈라 담는 과제였습니다. 눌러 보지 않으면 알 수 없는 일입니다.

페블러스가 AI-Ready Data를 말할 때 앞에 두는 전제가 여기에 맞닿아 있습니다. 데이터의 값어치는 분량만으로 정해지지 않고, 어떤 규격으로 모였는지가 함께 기록돼야 비로소 쓸 수 있는 자료가 됩니다.

다만 한 벌 규격에는 순서가 있습니다. 많이 모은 뒤에는 되돌릴 수 없습니다.

서로 다른 장비로 쌓인 500시간은 아무리 많아도, 무엇을 더 해야 할지는 끝내 말해 주지 않습니다.

"우리 팀은 데이터를 모으기 전에 무엇부터 하나로 맞췄습니까?"

이 질문에 답할 수 있는 기록을 남기는 일이, 500시간을 채우는 일보다 먼저인 듯합니다.

▶ 전문: https://blog.pebblous.ai/blog/touchscale-tactile-glove-dataset/ko/

#페블러스 #TouchScale #촉각장갑 #PhysicalAI #데이터품질 #데이터클리닉 #AIReadyData

---

## Facebook (EN)

You have reached into a bag without looking and found your keys by hand.

The eyes saw nothing. The hand knew anyway. Metal or fabric, an edge or a face.

And none of what the hand knew was written down anywhere.

Teams trying to teach robots how to use a body have spent the past few years collecting first-person video, thousands of hours of it. The frame of a hand holding a cup survives. Which part of which finger was pressed, and how hard, does not.

A dataset called TouchScale went up on arXiv on October 7.

Five hundred hours of people wearing tactile gloves on both hands and handling objects, with a head-mounted camera and wrist cameras running on the same clock.

One glove carries 880 sensing points.

And yet the number 500 is not the part of this paper that counts most.

The weakness the authors named in earlier tactile datasets was not size. It was that the bigger a corpus grew, the more likely it had been pooled from recordings shot with different sensors and passed through different annotation procedures.

Train on material like that, watch the score rise, and one question has no way of being answered.

"If performance went up, what did it go up because of?"

More data, a better sensor mixed in partway, a shifted annotation standard. None of them can be told apart.

So this team held the rig and the procedure to one. I would call it a single-rig standard.

A single-rig standard does not make any one recording better. It makes recordings comparable to each other.

Two models trained on the same sixteen hours came out at 0.134 and 0.181. The volume was identical, so the distance between them belongs to the rig.

On four contact-heavy robot tasks, average success rose from 22.5% to 57.5%. The largest gain landed on sorting soft objects from hard ones by feel, which is the one thing you cannot settle without pressing.

This is where the premise Pebblous puts first in AI-Ready Data meets the question. The worth of data is not settled by volume alone; a corpus becomes usable material only when the standard it was gathered under is recorded alongside it.

A single-rig standard comes with an order, though. After the gathering is done, there is no going back.

Five hundred hours piled up on mismatched equipment, however many they are, will never tell you what to do next.

"What did our team unify first, before it started collecting?"

Leaving behind a record that can answer that seems to come before filling up the five hundred hours.

▶ Full piece: https://blog.pebblous.ai/blog/touchscale-tactile-glove-dataset/en/

#Pebblous #TouchScale #TactileSensing #PhysicalAI #DataQuality #DataClinic #AIReadyData
