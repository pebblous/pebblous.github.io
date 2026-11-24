# SNS 홍보 글: GeniWorld는 로봇의 새 연습 장면을 어떻게 만드는가

> 소스: blog/geniworld-robot-visual-actions/
> 생성일: 2026-11-24
> URL: https://blog.pebblous.ai/blog/geniworld-robot-visual-actions/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

로봇의 동작을 숫자로 입력하는 대신, 팔 전체를 화면에 그려 넣었다.

GeniWorld 연구팀은 로봇 설계 정보(URDF)와 순기구학으로 팔과 그리퍼의 자세를 계산해 실제 카메라와 같은 시점에서 렌더링하고, 그 영상을 본 모델이 서랍과 주변 장면의 변화를 예측하게 했다. 로봇 시뮬레이션 벤치마크 RoboTwin 2.0에서 새 장면 예측을 평가한 점수는 동작을 숫자로 준 경우 51.49, 팔과 그리퍼의 몸체 전체를 그려 넣은 경우 63.54였다. 모델이 그리퍼의 위치와 물체에 접근하는 방향을 화면에서 직접 참조할 수 있다는 것이 연구팀의 설명이다.

실물 시험은 양팔 Xtrainer 로봇과 네 작업으로 했다. 원격 조작으로 모은 실측 시연만으로 학습한 정책의 전체 성공률은 40.8%, 여기에 생성한 시연을 두 종류 보태자 69.0%였다. 데이터 구성 하나당 400회를 시험해 얻은 숫자다.

다만 보강할 때마다 시연 수와 시연에 담긴 조건이 함께 바뀌었다. 둘 중 어느 쪽이 더 기여했는지는 추가 시연 수를 맞춘 비교가 있어야 갈린다. 조명이 달라진 조건의 최종 성공률은 52.5%로, 다섯 조건 가운데 가장 낮게 남았다.

생성 모델이 로봇 데이터로 쓰이는지는 만든 장면이 그럴듯한지가 아니라 그 장면으로 학습한 로봇이 실물에서 무엇을 끝냈는지로 갈린다. 페블러스가 피지컬 AI의 AI-Ready 데이터 인프라를 만들며 보는 기준도 그쪽이다.

▶ 전문: https://blog.pebblous.ai/blog/geniworld-robot-visual-actions/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #PhysicalAI #GeniWorld #월드모델 #합성데이터 #RoboTwin #로봇학습데이터

---

## LinkedIn (EN)

Instead of feeding the robot's action in as numbers, GeniWorld draws the whole arm on screen.

The team computes the pose of the arm and the gripper from the robot's URDF and forward kinematics, renders it from the same viewpoint as the real camera, and lets a video model that watches that footage predict how the drawer and the rest of the scene change. On RoboTwin 2.0, the robot simulation benchmark, actions given as numbers scored 51.49 on new-scene prediction; the rendered body of the arm and the gripper scored 63.54. The model can refer on screen, directly, to where the gripper is and from which direction it approaches the object.

The real-robot tests used a dual-arm Xtrainer and four tasks. A policy trained on the teleoperated demonstrations alone succeeded 40.8% of the time. With two rounds of generated demonstrations added, it reached 69.0%, across 400 trials per data configuration.

Each round changed both the number of demonstrations and the conditions they carried, so the two effects cannot be separated from this comparison. Under changed lighting the final success rate was 52.5%, the lowest of the five conditions tested.

A generative model earns its place in robotics not when its scenes look right, but when the robot trained on them finishes the job on a real bench. That is the bar Pebblous works to in building AI-Ready data infrastructure for physical AI.

▶ Read: https://blog.pebblous.ai/blog/geniworld-robot-visual-actions/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #PhysicalAI #GeniWorld #WorldModel #SyntheticData #RoboTwin #RobotLearning

---

## Twitter/X (KO)

로봇의 동작을 숫자로 주는 대신 팔 전체를 화면에 그려 넣었다. RoboTwin 2.0 비교에서 새 장면 예측 점수는 숫자 입력 51.49, 팔 전체 렌더링 63.54였다.

생성한 장면의 값어치는 그럴듯함이 아니라 실물 작업 완료율로 갈린다.

https://blog.pebblous.ai/blog/geniworld-robot-visual-actions/ko/

#페블러스 #데이터품질 #GeniWorld #월드모델

---

## Twitter/X (EN)

Draw the whole robot arm on screen instead of passing the action in as numbers. In the RoboTwin 2.0 comparison, the new-scene score rose from 51.49 with numeric input to 63.54 with the full rendered arm.

Generated scenes are judged by what the robot finishes, not by how real they look.

https://blog.pebblous.ai/blog/geniworld-robot-visual-actions/en/

#Pebblous #DataQuality #GeniWorld #WorldModel

---

## Facebook (KO)

서랍을 오른팔로 열고, 왼팔로 마커를 집어 안에 넣고, 다시 서랍을 닫습니다.

사람에게는 한 동작이지만, 로봇에게는 첫 순간부터 두 가지가 맞아야 하는 일입니다. 그리퍼가 손잡이에 닿아야 하고, 당겼을 때 서랍이 실제로 열려야 합니다.

GeniWorld 연구팀이 일을 나눈 방식이 눈에 들어왔습니다. 팔의 움직임은 로봇 설계 정보로 직접 그려 주고, 나머지 장면이 어떻게 바뀌는지는 그 영상을 본 모델이 예측하게 했습니다. 로봇이 이미 아는 것은 로봇에게 맡기고, 모르는 것만 모델에게 물은 셈입니다.

"생성한 장면이 정말 쓸 만한가? 무엇으로 판정하나?"

글을 옮기며 가장 여러 번 다시 읽은 대목이 거기였습니다. 연구팀의 답은 영상이 얼마나 그럴듯한지가 아니었습니다. 그 장면으로 학습한 로봇을 실제 작업대에 올려 네 작업을 데이터 구성마다 400회 시켜 보고, 마커가 들어갔는지 서랍이 끝까지 닫혔는지로 셌습니다. 전체 성공률은 40.8%에서 69.0%로 올랐고, 조명이 달라진 조건은 52.5%로 가장 낮은 자리에 남았습니다.

낮은 자리를 지우지 않은 것이 이 논문의 성격 같습니다. 보강할 때마다 시연 수와 조건이 함께 바뀌었으니 둘 중 무엇이 기여했는지는 아직 갈리지 않는다고도 적어 두었습니다. '연습 장면'을 만드는 기술이 자리를 잡는다는 것은, 잘된 쪽을 내보이는 일보다 아직 안 되는 조건의 목록이 정확해지는 일에 가까운 것 같습니다.

페블러스가 피지컬 AI의 데이터 인프라를 보며 같은 질문을 안고 갑니다. 어떤 조건에 합성 시연을 쓰고, 어떤 조건에 사람이 현장으로 나가야 하는가.

▸ https://blog.pebblous.ai/blog/geniworld-robot-visual-actions/ko/

#페블러스 #GeniWorld #월드모델 #PhysicalAI #합성데이터 #데이터품질

---

## Facebook (EN)

Right arm opens the drawer. Left arm picks up a marker, drops it in, closes the drawer again.

One motion for a person. For a robot, two things have to hold from the first instant: the gripper has to reach the handle, and the drawer has to actually open when the handle is pulled.

What stayed with me in the GeniWorld paper was how the work is divided. The motion of the arm is drawn straight from the robot's own design data. Everything else in the scene is left to a video model that watches that motion and predicts what changes. What the robot already knows, the robot supplies. Only the rest is asked of the model.

"Is the generated scene actually usable? And what settles that?"

That is the passage I went back to most often. The answer the team gave was not about how convincing the footage looks. They put the policies trained on those scenes onto a real bench, ran four tasks 400 times per data configuration, and counted whether the marker went in and the drawer closed all the way. Overall success rose from 40.8% to 69.0%. Under changed lighting it stayed at 52.5%, the lowest of the five conditions.

The low number was left standing, and that tells you something about the paper. The team also wrote down that each round of augmentation changed both the count of demonstrations and the conditions they carried, so the two effects cannot be separated yet. A technique for building "practice scenes" may come of age less by showing its gains than by getting the list of conditions that still fail exactly right.

Pebblous carries the same question into data infrastructure for physical AI. Which conditions do you serve with synthetic demonstrations, and which ones still ask someone to go out and record them.

▸ https://blog.pebblous.ai/blog/geniworld-robot-visual-actions/en/

#Pebblous #GeniWorld #WorldModel #PhysicalAI #SyntheticData #DataQuality
