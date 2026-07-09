# SNS 홍보 글: 사람 손동작만으로 로봇 학습 데이터를 합성하는 월드모델

> 소스: blog/world-model-robot-data-synthesis/ko/index.html
> 생성일: 2026-07-10
> URL: https://blog.pebblous.ai/blog/world-model-robot-data-synthesis/ko/
> voice: sns-cover (LinkedIn·Twitter) / reflective (Facebook)

---

## LinkedIn (KO)

영상 속 두 팔 로봇이 사과를 집고 블록을 순서대로 미는데, 정작 로봇 팔은 한 대도 돌아가지 않았다.

알리바바 다모 아카데미가 공개한 RynnWorld-Teleop 이야기다. 사람이 트래커와 데이터 글러브만 차고 허공에서 손을 움직이면, 생성형 월드모델이 그 로봇이 같은 동작을 했을 때의 시점 영상을 단일 H100에서 40FPS 이상으로 합성한다. 실제 로봇은 필요 없다.

로봇 학습의 진짜 병목은 모델 성능이 아니라 시연 수집이었다. 사람이 로봇을 하나씩 원격조종해 데이터를 쌓아야 하고, 그 데이터는 특정 하드웨어에 통째로 묶인다. 이 방식은 그 수집을 소프트웨어 문제로 옮긴다.

실제 데이터를 한 개도 쓰지 않고 합성 시연만으로 학습한 정책이 블록 밀기 82.86%를 기록했고, 실제와 합성을 섞자 정밀 뚜껑 배치 성공률이 20%포인트 올랐다. 다만 저자들은 액체나 크게 변형되는 물체 같은 복잡한 물리에서 생성이 여전히 취약하다고 스스로 인정했다.

데이터를 모으는 시대에서 생성하는 시대로 넘어가면, 품질의 질문은 라벨이 맞느냐에서 이 데이터가 실재를 대표하느냐로 옮겨 간다.

▶ 전문: https://blog.pebblous.ai/blog/world-model-robot-data-synthesis/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PebbloSim #PhysicalAI #합성데이터 #월드모델 #RynnWorldTeleop #AlibabaDAMO #VLA

---

## LinkedIn (EN)

The two-armed robot picks up an apple, pushes blocks in sequence, lifts a cushion with both arms. No robot arm ever moved.

Alibaba's DAMO Academy calls it "digital teleoperation." An operator wears trackers and a data glove, moves their hands in open air, and a robot-centric generative world model renders what that robot would have seen performing the same motion, in real time at over 40 FPS on a single H100.

The real bottleneck in robot learning was never the model. It was demonstration data, each clip collected by a human teleoperating one robot and locked to that hardware and camera rig. This approach turns that collection into a software problem.

A policy trained on synthetic demonstrations alone, with no real robot data at all, pushed blocks with an 82.86% zero-shot success rate. Mixing real and synthetic clips raised precise lid placement by 20 points. The authors are candid about the limits: generation still falters on liquids and highly deformable objects.

As data collection gives way to data generation, the quality question shifts from whether a label is correct to whether the data represents the real world.

▶ Read: https://blog.pebblous.ai/blog/world-model-robot-data-synthesis/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #PebbloSim #PhysicalAI #SyntheticData #WorldModel #RynnWorldTeleop #AlibabaDAMO #VLA

---

## Twitter/X (KO)

로봇이 사과를 집는 영상을 만든 사람은 로봇 곁에 있지도 않았다. 트래커와 데이터 글러브만 낀 채 허공에서 손을 움직였을 뿐.

알리바바 RynnWorld-Teleop은 사람 손동작을 로봇 시점 영상으로 합성한다. 합성 데이터만으로 학습한 정책이 블록 밀기 82.86%.

데이터를 모으는 시대에서 생성하는 시대로. 이제 품질의 질문은 "이 데이터가 진짜를 대표하는가"다.

https://blog.pebblous.ai/blog/world-model-robot-data-synthesis/ko/

#페블러스 #데이터품질 #RynnWorldTeleop #PhysicalAI

---

## Twitter/X (EN)

The robot picks up an apple, but the person who made the motion was nowhere near the robot. Just trackers and a data glove, hands moving in open air.

Alibaba's RynnWorld-Teleop synthesizes hand motion into robot-view demos. A policy trained on synthetic data alone pushed blocks at 82.86%.

From collecting data to generating it. The quality question is now: does this data represent the real thing?

https://blog.pebblous.ai/blog/world-model-robot-data-synthesis/en/

#Pebblous #DataQuality #RynnWorldTeleop #PhysicalAI

---

## Facebook (KO)

두 팔 로봇이 사과와 바나나를 집고, 블록을 순서대로 밉니다.

그런데 그 동작을 만든 사람은 로봇 근처에 있지도 않았습니다.

그는 트래커와 데이터 글러브를 낀 채 허공에서 손을 움직였을 뿐이고, 로봇이 수행하는 것처럼 보이는 영상은 생성 모델이 실시간으로 그려낸 것이었습니다. 알리바바 다모 아카데미는 이것을 '디지털 텔레오퍼레이션'이라고 부릅니다. 실제 로봇 대신 모델을 원격조종하는 셈입니다.

오래 로봇 학습을 붙잡아 온 병목은 모델이 아니라 데이터였습니다. 정책 하나를 훈련하려면 사람이 로봇을 하나씩 원격조종해 시연을 쌓아야 하고, 그렇게 모은 데이터는 특정 로봇과 카메라 배치에 통째로 묶입니다. 하드웨어가 바뀌면 처음부터 다시입니다.

합성 시연만으로 학습한 정책이 블록 밀기에서 82.86%를 기록했다는 대목에서, 저는 이 전환이 이미 시작됐다고 느꼈습니다. 동시에 저자들이 액체나 크게 변형되는 물체 앞에서는 생성이 아직 취약하다고 스스로 인정한 대목도 오래 남았습니다.

질문 하나가 남습니다.

"실제 로봇 없이 만든 이 데이터는 얼마나 진짜인가?"

데이터를 모으던 시대에는 품질이 라벨의 정확도였습니다. 데이터를 생성하는 시대에는 그 시연이 실재를 대표하는지, 그리고 물리를 어기지 않는지가 새 질문이 됩니다. 페블러스가 물리 데이터의 품질을 다뤄 온 자리도 바로 그 지점입니다.

https://blog.pebblous.ai/blog/world-model-robot-data-synthesis/ko/

#페블러스 #월드모델 #AlibabaDAMO #PebbloSim #DataClinic #PhysicalAI #합성데이터

---

## Facebook (EN)

The two-armed robot picks up an apple and a banana, then pushes blocks in order.

The person who produced that motion was never near the robot.

They wore trackers and a data glove and moved their hands through open air. The footage that looks like a robot at work was drawn by a generative model, in real time. Alibaba's DAMO Academy calls it "digital teleoperation": you remote-control a model instead of a machine.

The bottleneck that has held back robot learning was never the model. It was the data. Training a single policy means a human teleoperating one robot, clip by clip, and every clip stays tied to that robot and that camera rig. Change the hardware and you start over.

What stayed with me was a policy trained on synthetic demonstrations alone, no real robot data, pushing blocks at 82.86%. And right beside it, the authors' own admission that generation still breaks down on liquids and objects that deform.

One question is left open.

"How real is data made without a real robot?"

When we collected data, quality meant the accuracy of a label. When we generate it, the new questions are whether a demonstration represents reality, and whether it obeys physics. That is the same ground Pebblous has been working on in the quality of physical data.

https://blog.pebblous.ai/blog/world-model-robot-data-synthesis/en/

#Pebblous #WorldModel #AlibabaDAMO #PebbloSim #DataClinic #PhysicalAI #SyntheticData
