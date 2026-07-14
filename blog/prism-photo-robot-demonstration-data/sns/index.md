# SNS 홍보 글: 사진 한 장으로 만드는 로봇 시연 데이터

> 소스: blog/prism-photo-robot-demonstration-data/
> 생성일: 2026-07-15
> URL: https://blog.pebblous.ai/blog/prism-photo-robot-demonstration-data/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

사람이 로봇을 한 번도 조종하지 않았다. 그런데 그렇게 만든 데이터로 학습한 로봇이 실환경 조작 세 종에서 최대 100% 성공률을 기록했다.

경희대학교가 공개한 PRISM 이야기다. 사용자가 자기 작업 공간을 찍은 사진 한 장과 "우유를 바구니에 넣어라" 같은 지시문 하나를 주면, 그 장면을 닮은 '디지털 사촌'을 구성하고 실행 가능한 조작 시연을 자동으로 합성한다. 원격조종도, 사람 손도 필요 없다.

핵심은 복제가 아니라 사촌이다. 원본 물체를 그대로 베끼면 정책이 그 물체에만 과적합한다. PRISM은 카테고리와 배치는 원본을 따르되 개별 물체는 비슷한 다른 것으로 매번 바꿔, 현장과의 정렬과 다양성을 동시에 확보한다. 일반화를 재는 LIBERO 벤치마크에서 기존 방법을 최대 50%포인트 이상 앞선 이유가 여기 있다.

물론 아직 Franka 로봇팔과 강체 물체에 한정되고, 물체가 심하게 가려지면 재구성이 흔들린다. 사진 한 장이라는 강점이 곧 제약이기도 하다.

이 연구가 데이터를 다루는 사람에게 남기는 질문은 로봇공학 바깥에 있다. 데이터가 수집되는 게 아니라 현장에 맞게 생성되기 시작하면, 다음 관건은 그 생성된 데이터의 품질과 다양성을 무엇으로 보증하느냐다.

▶ 전문: https://blog.pebblous.ai/blog/prism-photo-robot-demonstration-data/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PebbloSim #AIReadyData #PhysicalAI #로봇학습 #합성데이터 #VLA #PRISM #디지털사촌

---

## LinkedIn (EN)

No human ever teleoperated the robot. Yet a policy trained entirely on the resulting data hit up to 100% success across three real-world manipulation tasks.

That is the claim behind PRISM, released by Kyung Hee University. A user photographs their own workspace once and adds one instruction, such as "put the milk in the basket." From that, PRISM builds a look-alike "digital cousin" scene and synthesizes an executable manipulation demo. No joystick, no operator.

The trick is not duplication but resemblance. Copying the exact object overfits the policy; PRISM keeps the original categories and layout while swapping each item for a similar but different one. That is why it beats prior methods by up to 50 points on the LIBERO generalization benchmark.

The limits are stated plainly: Franka arm only, rigid objects only, and heavy occlusion degrades the single-image reconstruction.

The question it leaves for data people sits outside robotics. Once training data is generated to fit a site rather than collected, the next problem is how you certify the quality and diversity of what you just made.

▶ Read: https://blog.pebblous.ai/blog/prism-photo-robot-demonstration-data/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #PebbloSim #AIReadyData #PhysicalAI #RobotLearning #SyntheticData #VLA #PRISM

---

## Twitter/X (KO)

사람이 로봇을 한 번도 조종하지 않았다. 작업 공간 사진 한 장과 지시문 하나로 만든 데이터로 학습한 로봇이 실환경 조작에서 최대 100% 성공.

경희대 PRISM. 데이터를 '모으는' 시대에서 '현장에 맞게 만드는' 시대로 넘어가는 신호다.

https://blog.pebblous.ai/blog/prism-photo-robot-demonstration-data/ko/

#페블러스 #PRISM #로봇학습 #합성데이터 #AIReadyData

---

## Twitter/X (EN)

No teleoperation. One photo of your workspace plus one instruction, and a robot trained on the generated data hits up to 100% success on real manipulation tasks.

Kyung Hee University's PRISM. A signal that robot data is shifting from collected to generated.

https://blog.pebblous.ai/blog/prism-photo-robot-demonstration-data/en/

#Pebblous #PRISM #RobotLearning #SyntheticData #AIReadyData

---

## Facebook (KO)

로봇에게 물건 하나 집는 법을 가르치려면, 누군가는 그 동작을 수백 번 직접 보여 줘야 했습니다.

사람이 조이스틱을 잡고, 로봇 팔을 한 번에 하나씩 움직여, 성공한 시연을 하나하나 남기는 방식입니다.

정확하지만 느리고, 비쌉니다.

며칠 전 지나간 한 연구는 그 과정에서 사람을 아예 빼 보자고 말합니다.

경희대학교가 공개한 PRISM은 사용자가 자기 작업 공간을 찍은 사진 한 장과 "우유를 바구니에 넣어라" 같은 문장 하나만 받습니다. 그러고는 그 장면을 닮은 '디지털 사촌'을 만들어, 사람의 조종 없이 로봇이 따라 할 수 있는 시연을 스스로 채워 넣습니다.

흥미로운 건 원본을 똑같이 복제하지 않는다는 점입니다. 사진 속 그 우유팩이 아니라, 그 우유팩의 '사촌들'을 데려옵니다. 배치는 그대로 두고 물건만 조금씩 바꿔 가며, 로봇이 특정 물체 하나에 매이지 않도록 합니다.

그렇게 만든 데이터로 학습한 로봇은 실제 작업대에서 최대 100%까지 물건을 옮겼습니다. 사람이 단 한 번도 조종하지 않은 데이터였습니다.

그런데 여기서 저는 한 가지 질문 앞에 멈추게 됩니다.

"데이터를 모으던 시대에는 얼마나 많이 모았는지를 물었다면, 데이터를 만들어내는 시대에는 무엇을 물어야 할까?"

만드는 일이 쉬워질수록, 그럴듯하지만 현장과 어긋난 데이터를 대량으로 찍어내는 일도 그만큼 쉬워집니다. 페블러스가 AI-Ready Data를 이야기할 때 늘 돌아오는 자리도 여기입니다. 무엇을 만들 수 있는가 옆에, 만든 것을 어떻게 믿을 것인가라는 질문이 나란히 놓여 있습니다.

▶ 전문: https://blog.pebblous.ai/blog/prism-photo-robot-demonstration-data/ko/

#페블러스 #PRISM #PhysicalAI #AIReadyData #데이터품질 #로봇학습

---

## Facebook (EN)

Teaching a robot to pick up a single object used to mean someone had to show it the motion, over and over.

A person holding a controller, nudging the arm one grasp at a time, saving each successful attempt by hand.

Accurate, but slow. And expensive.

A study that crossed my feed this week asks what happens if you remove the person entirely.

PRISM, from Kyung Hee University, takes just one photo of your workspace and one sentence, like "put the milk in the basket." From there it builds a look-alike "digital cousin" of the scene and fills in a demonstration the robot can follow, with no one steering it.

What stayed with me is that it doesn't copy the original. Instead of that exact milk carton, it brings in the carton's cousins, keeping the layout but varying the objects so the robot never fixates on one specific thing.

A policy trained on that data moved objects with up to 100% success on a real workbench. From data no human ever teleoperated.

And that is where the study leaves me with a question.

"When we collected data, we asked how much we had. When we start generating it, what should we be asking instead?"

The easier generation gets, the easier it also becomes to mass-produce data that looks right but doesn't match the real site. That is the corner Pebblous keeps returning to when it talks about AI-Ready Data. Next to "what can we make" sits another question: how do we trust what we made.

▶ Read: https://blog.pebblous.ai/blog/prism-photo-robot-demonstration-data/en/

#Pebblous #PRISM #PhysicalAI #AIReadyData #DataQuality
