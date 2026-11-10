# SNS 홍보 글: 엔비디아 GR00T 2, 로봇이 배운 영상 대부분은 사람 것

> 소스: blog/nvidia-groot-2-human-video-data-provenance/ko/index.html
> 생성일: 2026-11-11
> URL: https://blog.pebblous.ai/blog/nvidia-groot-2-human-video-data-provenance/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

로봇 기반모델을 가르친 43만 시간 가운데 로봇이 만든 기록은 스무 시간에 한 시간 남짓이다.

엔비디아가 11월 9일 오스틴에서 열린 로봇 학습 학회 CoRL 2026에서 GR00T 2를 공개했다. 사전학습에 들어간 기록은 436,414시간이고, 그 가운데 사람이 로봇을 조종해 만든 원격조작은 23,500시간이다. 비율로는 5.4%다.

나머지는 사람의 몸에서 나왔다. 머리에 카메라를 달고 일하는 모습을 찍은 1인칭 영상이 402,730시간이다. 구조가 그 구성을 허락한다. 하나의 모델이 앞으로 장면이 어떻게 변할지와 로봇의 동작을 함께 추정하는데, 앞쪽을 훈련하는 데는 영상만 있으면 되고 그 영상에 로봇이 나올 필요가 없다.

엔비디아는 비교 실험도 함께 냈다. 나머지 조건을 고정한 채 사전학습의 사람 영상 비율만 없음에서 전부로 바꾸자 덱스터 과제 72개의 실물 로봇 진행률이 50%에서 70%로 올랐다. 학습의 주재료를 회사 스스로 지목한 셈이다.

그 재료의 이력서는 짧다. 허깅페이스에 공개된 10만 시간짜리 데이터 카드는 촬영자가 41,288명이라고 적고, 파일을 vendors/{vendor_id} 아래 업체별로 놓는다. 25주 납품 기간의 품질 감사 이력까지 있다. 동의와 프라이버시, 개인이라는 낱말은 본문에 한 번도 나오지 않는다.

서식이 없어서는 아니다. 같은 회사의 1인칭 손 동작 모델 EgoHand-v1에는 프라이버시 서브카드가 열세 줄로 채워져 있다. 열람·삭제 권리를 보장할 장치가 있느냐는 줄에는 그렇다고 답하고, 실제로 수정·삭제 요구가 들어오면 반영할 수 있느냐는 줄에는 외부에서 조달한 데이터라 불가능하다고 답한다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 학습에 넣기 전에 진단한다. 저 서브카드에서 권리의 경계를 그은 것은 데이터의 성격이 아니라 조달 경로였다. 직접 찍었는지 사 왔는지는 보통 계약서에만 적히고 데이터 명세에는 칸이 없다.

시간 수는 명세서에 적히고, 그 시간을 보낸 사람은 적히지 않는다.

▶ 전문: https://blog.pebblous.ai/blog/nvidia-groot-2-human-video-data-provenance/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PhysicalAI #AIReadyData #로봇학습데이터 #NVIDIA #GR00T2 #Human1M

---

## LinkedIn (EN)

Of the 436,414 hours that trained a new robot foundation model, a little over one hour in twenty came from a robot.

NVIDIA presented GR00T 2 on November 9 at CoRL 2026 in Austin. Teleoperation, the part a person produced by driving a robot, accounts for 23,500 of those pretraining hours, or 5.4%.

The rest came off human bodies, 402,730 hours of it first-person video of people working with a camera on their head. The architecture is what permits that mix. A single model predicts how a scene will change and what the robot should do next, and training the first half needs video and nothing more. No robot has to appear in it.

NVIDIA published an ablation beside the headline numbers. Holding everything else fixed and moving the share of human video in pretraining from none to all of it, progress on 72 Dexter tasks with a real robot rose from 50% to 70%. The company has pointed at its own main ingredient.

The résumé of that ingredient is short. The 100,000-hour data card on Hugging Face gives 41,288 collectors and files the release under vendors/{vendor_id}, with a quality audit history kept across 25 delivery weeks. Consent, privacy and personal appear nowhere in its body.

Not for want of a form. EgoHand-v1, the same company's egocentric hand-motion model, carries a thirteen-row Privacy Subcard. Asked whether a mechanism exists to honor access or deletion, it answers yes. Asked whether an actual correction or removal request can be complied with, it answers no, not possible for externally sourced data.

Pebblous assesses the fitness of AI training data with DataClinic. In that subcard, what drew the boundary of the right was the procurement path rather than anything about the data itself. Whether footage was shot in-house or bought tends to live in the contract and not in the spec sheet that travels with the data.

Hours get written down. Who spent them does not.

▶ Read: https://blog.pebblous.ai/blog/nvidia-groot-2-human-video-data-provenance/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #PhysicalAI #AIReadyData #RobotLearning #NVIDIA #GR00T2 #Human1M

---

## Twitter/X (KO)

엔비디아가 CoRL 2026에서 공개한 로봇 기반모델 GR00T 2는 43만 시간으로 배웠다. 로봇을 직접 움직여 얻은 기록은 그중 5.4%뿐이다.

나머지는 사람이 머리에 카메라를 달고 일한 1인칭 영상이다. 그 영상을 누가 어떤 조건에서 찍었는지는 공개된 데이터 카드에 없다.

https://blog.pebblous.ai/blog/nvidia-groot-2-human-video-data-provenance/ko/

#페블러스 #데이터품질 #NVIDIA #GR00T2 #피지컬AI

---

## Twitter/X (EN)

NVIDIA's new robot foundation model GR00T 2 trained on 436,414 hours. Only 5.4% of that came from moving a robot.

The rest is first-person video of people at work with a camera on their head. Who shot it, and on what terms, is not in the published data card.

https://blog.pebblous.ai/blog/nvidia-groot-2-human-video-data-provenance/en/

#Pebblous #DataQuality #NVIDIA #GR00T2 #PhysicalAI

---

## Facebook (KO)

머리에 작은 카메라를 달고 만두피에 소를 넣는 사람이 있습니다.

같은 묶음 안에 오토바이 브레이크를 고치는 사람, 치과 크라운을 가는 사람, 토마토를 따는 사람이 있습니다.

누군가의 하루치 일입니다. 그리고 지금 로봇이 그 영상으로 배웁니다.

엔비디아가 11월 9일 공개한 GR00T 2의 사전학습 기록은 43만 시간이 넘습니다. 그 가운데 로봇을 조종해 만든 몫은 스무 시간에 한 시간 남짓이고, 나머지는 사람의 몸에서 나왔습니다.

사람 영상을 빼고 같은 모델을 다시 학습시키면 실물 로봇 성적이 20포인트 내려간다는 실험도 같이 나왔습니다. 영상이 많이 들어갔다는 이야기가 아니라, 그 영상이 성적을 떠받친다는 이야기입니다.

공개된 10만 시간의 데이터 카드에는 촬영자가 41,288명이라고 적혀 있습니다. 그다음 줄은 없습니다. 동의도 프라이버시도 개인도, 본문에서 한 번도 쓰이지 않은 낱말입니다.

그 칸을 묻는 서식이 없는 것도 아닙니다.

엔비디아의 모델 카드에는 프라이버시 서브카드라는 서식이 있고, 같은 회사의 1인칭 손 동작 모델에는 그 열세 줄이 실제로 채워져 있습니다. 개인정보를 썼고, 동의는 받았고, 직접 수집하지는 않았다고 적혀 있습니다.

마지막 줄에서 답이 갈립니다. 삭제 요구가 들어오면 반영할 수 있느냐는 물음에, 외부에서 조달한 데이터라 불가능하다고 적혀 있습니다.

'붙이지 않은 서식'.

"우리가 한 번 채워 본 점검 서식은, 가장 큰 자료 앞에서도 채워집니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 점검 서식은 대개 작은 자료에서 먼저 채워집니다. 제일 크고 제일 자주 쓰는 묶음일수록 나중으로 밀리고, 그 나중이 모델 공개일보다 뒤에 옵니다.

GR00T 2의 가중치와 모델 카드는 12월에 나온다고 합니다. 저 열세 줄이 그때 어떻게 채워지는지는, 성능 수치보다 늦게 읽히고 오래 남을 것 같습니다.

▶ 전문: https://blog.pebblous.ai/blog/nvidia-groot-2-human-video-data-provenance/ko/

#페블러스 #데이터클리닉 #데이터품질 #NVIDIA #GR00T2 #PhysicalAI #로봇학습데이터

---

## Facebook (EN)

Somewhere there is a person with a small camera on their head, filling dumpling wrappers.

In the same collection, someone repairs a motorcycle brake, someone polishes a dental crown, someone picks tomatoes.

Ordinary working days. And robots are now learning from the footage.

GR00T 2, which NVIDIA presented on November 9, was pretrained on more than 430,000 hours. A little over one hour in twenty of that was made by driving a robot. The rest came off human bodies.

An ablation arrived with it: retrain the same model without the human video and performance on a real robot falls by 20 points. The claim is not that a lot of video went in. It is that the video holds the score up.

The data card for the 100,000 published hours records 41,288 collectors. There is no line after that one. Consent, privacy, personal: none of those words appear in its body.

The form is not missing, and that is the part worth sitting with.

NVIDIA's model cards carry a Privacy Subcard, and on the company's own egocentric hand-motion model those thirteen rows are filled in. Personal data was used. Consent was obtained. NVIDIA did not collect it directly.

The last row is where the answers part. Asked whether a deletion request can be complied with, it reads: not possible for externally sourced data.

A form that was never attached.

"The checklist we have filled in once, does it also get filled in for our largest pile of data?"

Pebblous assesses the fitness of AI training data with DataClinic. Checklists tend to get filled in on the small collections first. The biggest and most used pile slides to later, and later often lands after the model has already shipped.

The weights and the model card are due in December. How those thirteen rows come back is going to be read later than the benchmark figures, and remembered longer.

▶ https://blog.pebblous.ai/blog/nvidia-groot-2-human-video-data-provenance/en/

#Pebblous #DataClinic #DataQuality #NVIDIA #GR00T2 #PhysicalAI #RobotLearning
