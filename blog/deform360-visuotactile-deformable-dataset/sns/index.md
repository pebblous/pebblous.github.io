# SNS 홍보 글: 변형 물체의 촉각까지 기록한 로봇 학습 데이터셋 Deform360

> 소스: blog/deform360-visuotactile-deformable-dataset/ko/index.html
> 생성일: 2026-07-29
> URL: https://blog.pebblous.ai/blog/deform360-visuotactile-deformable-dataset/ko/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

로봇 학습 데이터에는 눈은 넘쳤지만 손끝이 없었습니다.

브라운·컬럼비아·MIT 연구팀이 ECCV 2026에서 공개한 Deform360은 천·로프·곰인형 같은 변형 물체 198개를 41대 카메라와 양팔 촉각 그리퍼로 215시간 기록했습니다. 쥐는 동안 형태가 계속 바뀌는 물체의 촉각과 3D 형태를 이 규모로 함께 남긴 건 처음입니다.

더 중요한 기여는 같은 데이터 위에서 로봇 월드모델의 2D 방식과 3D 방식을 나란히 비교했다는 점입니다. 승자는 하나로 정해지지 않았습니다. 데이터가 적으면 물리 구조를 아는 3D가 앞섰고, 데이터가 많고 처음 보는 물체로 갈수록 확장성이 좋은 2D가 일반화에서 이겼습니다.

데이터를 다루는 사람에게는 곧바로 실전 질문이 됩니다. 내 데이터가 적은가 많은가에 따라, 표현 방식부터 달라져야 한다는 뜻이니까요.

AI-레디 데이터의 다음 경계는 '못 본 것'이 아니라 '못 만진 것'입니다.

▶ 전문: https://blog.pebblous.ai/blog/deform360-visuotactile-deformable-dataset/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PhysicalAI #AIReadyData #로봇학습 #월드모델 #변형물체 #Deform360 #ECCV2026

---

## LinkedIn (EN)

Robot-learning data has always had eyes but no fingertips.

Deform360, released at ECCV 2026 by teams from Brown, Columbia, and MIT, records 198 deformable objects (cloth, rope, plush toys) with 41 surround-view cameras and dual-arm tactile grippers over 215 hours. It is the first dataset to capture both the touch and the shifting 3D shape of objects that deform while being held, at this scale.

The bigger contribution is a controlled comparison. 2D video world models against 3D particle models, trained on the same data. Neither wins outright. With little data, the physics-grounded 3D model leads; as data grows and objects become unseen, the more scalable 2D model generalizes better.

For anyone building robot data, that turns into a practical question — how much data you have now decides which representation to reach for first.

The next frontier for AI-ready data isn't what robots can't see. It's what they can't touch.

▶ Read: https://blog.pebblous.ai/blog/deform360-visuotactile-deformable-dataset/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #PhysicalAI #AIReadyData #RobotLearning #WorldModel #Deform360 #ECCV2026

---

## Twitter/X (KO)

로봇 데이터는 눈만 있고 손끝이 없었습니다. Deform360은 천·로프·곰인형 같은 변형 물체 198개를 카메라와 촉각 센서로 대규모 기록했습니다.

같은 데이터로 2D·3D 월드모델을 비교했더니, 승자는 데이터 양에 따라 갈렸습니다.

▶ https://blog.pebblous.ai/blog/deform360-visuotactile-deformable-dataset/ko/

#페블러스 #Deform360 #로봇학습 #PhysicalAI

---

## Twitter/X (EN)

Robot data had eyes but no fingertips. Deform360 records 198 deformable objects, from cloth to rope to plush toys, with cameras and tactile grippers.

Trained on the same data, 2D versus 3D world models: the winner flips with how much data you have.

▶ https://blog.pebblous.ai/blog/deform360-visuotactile-deformable-dataset/en/

#Pebblous #Deform360 #RobotLearning #PhysicalAI

---

## Facebook (KO)

눈을 감고도 수건을 갤 수 있습니다.

손끝이 접히는 결을 읽고, 미끄러지는 순간을 잡아채기 때문입니다.

그런데 로봇에게서 그 감각을 지우면, 같은 동작이 갑자기 위태로워집니다.

로봇이 배워 온 데이터에는 오래 눈만 있고 손끝이 없었습니다. 카메라 영상은 넘쳤지만, 손이 물체에 닿는 순간의 저항과 미끄러짐은 대부분 기록되지 않았습니다.

브라운·컬럼비아·MIT 연구팀이 ECCV 2026에서 공개한 Deform360은 그 빈자리를 겨눴습니다. 천·로프·곰인형처럼 쥐는 동안 형태가 계속 바뀌는 변형 물체 198개를, 41대의 카메라와 양팔 촉각 그리퍼로 215시간 동안 기록했습니다.

흥미로운 건 데이터의 크기가 아니었습니다.

같은 데이터로 로봇의 두 가지 세계 표현을 나란히 세워 물은 대목이었습니다. 화면을 픽셀의 흐름으로 보는 2D, 물체를 3차원 입자로 보는 3D.

'어느 쪽이 변형 물체를 더 잘 배우는가?'

답은 하나로 정해지지 않았습니다. 데이터가 적을 때는 물리를 아는 3D가, 데이터가 많아질수록 확장성이 좋은 2D가 앞섰습니다.

데이터 진단을 오래 해 온 회사가 자연스럽게 도달하는 질문도 여기 있습니다. 얼마나 많이 모았느냐가 아니라, 무엇을 어떤 충실도로 남겼느냐.

로봇이 넘어야 할 다음 경계는 '못 본 것'이 아니라 '못 만진 것'인지도 모르겠습니다.

https://blog.pebblous.ai/blog/deform360-visuotactile-deformable-dataset/ko/

#페블러스 #데이터품질 #데이터클리닉 #Deform360 #PhysicalAI #로봇학습

---

## Facebook (EN)

You can fold a towel with your eyes closed.

Your fingertips read the crease and catch the moment the fabric starts to slip.

Take that sense away from a robot, and the same motion turns fragile.

For a long time, the data robots learned from had plenty of eyes and no fingertips. There was no shortage of camera footage, but the resistance and slippage of a hand meeting an object mostly went unrecorded.

Deform360, released at ECCV 2026 by teams from Brown, Columbia, and MIT, went after that empty space. It recorded 198 deformable objects — cloth, rope, plush toys that keep changing shape as you hold them — with 41 cameras and dual-arm tactile grippers, over 215 hours.

What stayed with me wasn't the size. It was that the same data was used to set two ways of seeing the world side by side. Pixels flowing across a screen, or particles moving in three dimensions.

'Which one learns a deformable object better?'

There was no single answer. With little data, the model that knows physics led; with more data, the one that scales pulled ahead.

A company that has spent years diagnosing data quality arrives at the same question naturally. Not how much you gathered, but what you kept, and with what fidelity.

Maybe the next frontier for a robot isn't what it cannot see. Maybe it's what it cannot touch.

https://blog.pebblous.ai/blog/deform360-visuotactile-deformable-dataset/en/

#Pebblous #DataQuality #DataClinic #Deform360 #PhysicalAI #RobotLearning
