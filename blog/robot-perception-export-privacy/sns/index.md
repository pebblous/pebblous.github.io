# SNS 홍보 글: 로봇에게 목표 이름 대신 영역을 주자 성공률은 그대로였다

> 소스: blog/robot-perception-export-privacy/ko/index.html
> 생성일: 2026-09-05
> URL: https://blog.pebblous.ai/blog/robot-perception-export-privacy/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

가정용 로봇이 밖으로 내보내는 목표 표시에서 물체의 이름을 지우고 그것이 놓인 영역만 남겼다. 로봇은 여전히 목표를 찾아갔고, 성공률은 움직이지 않았다.

케이스웨스턴리저브대의 Yuqiao Xu와 Erman Ayday가 9월 2일 arXiv에 공개한 실험이다. 카메라 원본을 로봇 안에만 두는 설계는 이제 표준에 가깝지만, 로봇은 인지 결과를 플래너와 클라우드 서비스, 로그와 학습 파이프라인으로 계속 넘긴다. 저자들은 그 경계를 넘어가는 요약 표현만 놓고 집 정보가 얼마나 복원되는지 쟀다.

성능 지표는 설계를 구분해 주지 못했다. 자유공간을 세 가지 방식으로 내보낸 내비게이션 실험에서 주행 성공률과 경로 품질은 소수점 셋째 자리까지 같았는데, 표현만 보고 어느 씬인지 맞히는 정확도는 0.532에서 0.970까지 벌어졌다. 무작위로 찍었을 때가 0.050이니 셋 다 기준선보다 한참 위다.

반대 방향의 결과도 나왔다. 목표 이름을 영역으로 바꾸자 목표가 무엇인지 알아내는 공격은 무너졌지만, 어느 방인지와 민감한 물건이 있는지를 알아내는 공격은 다섯 가지 참조 방식에서 똑같이 남았다. 실험은 모두 시뮬레이터 안에서 이뤄졌고, 저자들이 잰 것도 실제 가정의 재식별이 아니라 표현 수준의 연결가능성이다.

파이프라인 밖으로 무엇을 내보낼지 정하는 일은 성능 검증이 대신해 주지 않는다.

▶ 전문: https://blog.pebblous.ai/blog/robot-perception-export-privacy/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #로봇프라이버시 #AI2THOR #PhysicalAI #데이터최소화

---

## LinkedIn (EN)

Strip the object's name out of what a household robot exports, leave only the region it sits in, and the robot still gets there. The success rate does not move.

Yuqiao Xu and Erman Ayday of Case Western Reserve University posted the experiment to arXiv on September 2. Keeping raw camera frames inside the robot is close to standard practice by now, but the robot keeps handing its perception results to planners, cloud services, logging systems and training pipelines. The authors measured how much of a home can be reconstructed from those summaries alone.

Performance did not separate the designs. Across three ways of exporting free space in a navigation task, success rate and path quality matched to three decimal places, while the accuracy of matching a representation back to the scene it came from ranged from 0.532 to 0.970. Random guessing sits at 0.050, so all three stayed far above the floor.

The finding runs the other way as well. Replacing a target label with a target region collapsed the attack that recovers what the robot was going for, yet the attacks recovering which room it was in and whether privacy-sensitive objects were present held at identical values across all five reference schemes. Everything ran in simulation, and what the authors measured is representation-level linkability rather than re-identification of real homes.

Deciding what leaves the pipeline is not a question performance testing answers.

▶ Read: https://blog.pebblous.ai/blog/robot-perception-export-privacy/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #RobotPrivacy #AI2THOR #PhysicalAI #DataMinimization

---

## Twitter/X (KO)

가정용 로봇이 밖으로 내보내는 목표 표시에서 물체 이름을 지우고 영역만 남겼다. 목표가 무엇인지 알아내는 공격은 무너졌고, 주행 성공률은 그대로였다.

같은 실험에서 어느 방인지와 민감한 물건이 있는지를 알아내는 공격은 다섯 가지 방식 모두에서 똑같이 남았다. 한 채널을 막아도 나머지는 그대로다.

▶ https://blog.pebblous.ai/blog/robot-perception-export-privacy/ko/

#페블러스 #데이터품질 #AI2THOR #로봇프라이버시

---

## Twitter/X (EN)

A household robot exported the region around its target instead of the target's name. The attack that recovers what it was looking for collapsed. Navigation success did not change.

In the same experiment, the attacks recovering which room it was in and whether sensitive objects were present stayed identical across all five schemes. Closing one channel left the rest open.

▶ https://blog.pebblous.ai/blog/robot-perception-export-privacy/en/

#Pebblous #DataQuality #AI2THOR #RobotPrivacy

---

## Facebook (KO)

로봇청소기를 집에 들이면서 제가 확인한 건 카메라가 달렸느냐 하나였습니다.

영상만 밖으로 안 나가면 됐다고 생각했습니다.

이번 주에 읽은 논문은 그 기준이 절반짜리였다고 말합니다.

로봇은 혼자 일하지 않습니다. 집 안을 다 훑고 나면 지도와 자유공간 구조, 물체의 크기와 위치, 목표가 어디쯤 있는지를 정리해서 밖으로 넘깁니다. 경로를 짜는 플래너에게, 클라우드 서비스에게, 로그를 쌓는 시스템에게, 다음 모델을 학습시키는 파이프라인에게.

원본 영상은 한 프레임도 나가지 않습니다. 나가는 것은 요약뿐입니다.

케이스웨스턴리저브대의 두 연구자는 그 요약만 손에 쥐고 집이 얼마나 읽히는지 재 봤습니다. 어느 방인지, 민감한 물건이 있는지, 이름표를 지운 상자가 원래 무엇이었는지까지 상당 부분 읽혔습니다.

제가 오래 붙잡고 있던 대목은 따로 있었습니다.

자유공간을 세 가지 방식으로 내보낸 실험에서 주행 성적은 소수점 셋째 자리까지 똑같았습니다. 성능만 놓고 보면 셋은 서로 바꿔 써도 되는 설계입니다. 그런데 그 표현만 보고 어느 씬인지 맞히는 정확도는 두 배 가까이 갈렸습니다.

성능 검증을 아무리 돌려도 이 차이는 나타나지 않습니다.

저는 이 자리를 '내보내기 목록'의 문제라고 부르고 싶습니다. 로봇이든 서비스든, 경계 밖으로 어떤 필드를 넘길지 적어 둔 한 줄짜리 목록. 대개는 일이 되는 쪽으로 정해지고, 한번 정해지면 다시 열어 보지 않습니다.

"우리 시스템이 밖으로 내보내는 필드 목록은 누가, 무엇을 근거로 정했나?"

페블러스에서 데이터 품질을 진단할 때 반복해 마주치는 질문도 결국 어떤 필드를 스키마에 세울 것인가입니다. 그 결정은 성능 지표에 아무 흔적을 남기지 않으면서 무엇이 밖에서 읽힐지를 정합니다. 이 논문은 같은 자리를 로봇 쪽에서 짚었습니다.

집 안에 두기로 한 것과 밖으로 내보내기로 한 것 사이. 그 짧은 목록이 생각보다 많은 것을 정하고 있었습니다.

▶ 전문: https://blog.pebblous.ai/blog/robot-perception-export-privacy/ko/

#페블러스 #로봇프라이버시 #AI2THOR #PhysicalAI #데이터품질 #데이터클리닉

---

## Facebook (EN)

When I brought a robot vacuum home, the only thing I checked was whether it had a camera.

As long as the video stayed inside, I figured we were fine.

A paper I read this week says that test covers about half the problem.

A robot does not work alone. Once it has been over the whole apartment, it packages up a map, the structure of the free space, the size and position of objects, roughly where the target sits, and hands all of it outward. To the planner that computes the route. To the cloud service. To the logging system. To the pipeline that trains the next model.

Not a single frame of raw video leaves. What leaves is the summary.

Two researchers at Case Western Reserve University took only those summaries and asked how much of a home they could read back. A good deal of it: which room this was, whether privacy-sensitive objects were present, what an unlabeled box had originally been.

The part I kept returning to was elsewhere.

In one experiment the same free space was exported three different ways. Driving performance was identical to three decimal places. On performance alone, the three are interchangeable designs. Yet the accuracy of matching those representations back to the scene they came from differed by nearly a factor of two.

No amount of performance testing surfaces that gap.

I have started thinking of this as the problem of the export list. Robot or service, it is the short list of which fields cross the boundary. It usually gets settled by whatever makes the task work, and once settled, nobody opens it again.

"Who wrote our export list, and on what grounds?"

The question we keep running into at Pebblous, diagnosing data quality, turns out to be the same one: which fields belong in the schema. That decision leaves no trace in any performance metric while quietly setting what can be read from outside. This paper found the same seat from the robotics side.

Between what stays in the house and what goes out of it, that short list decides more than it looks like it should.

▶ Full piece: https://blog.pebblous.ai/blog/robot-perception-export-privacy/en/

#Pebblous #RobotPrivacy #AI2THOR #PhysicalAI #DataQuality #DataClinic
