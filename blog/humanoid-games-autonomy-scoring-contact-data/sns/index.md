# SNS 홍보 글: 볼트보다 빨라진 휴머노이드가 못은 박지 못했다

> 소스: blog/humanoid-games-autonomy-scoring-contact-data/ko/index.html
> 생성일: 2026-08-30
> URL (KO): https://blog.pebblous.ai/blog/humanoid-games-autonomy-scoring-contact-data/ko/
> URL (EN): https://blog.pebblous.ai/blog/humanoid-games-autonomy-scoring-contact-data/en/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

베이징 세계휴머노이드로봇대회에서 100m 우승 기록이 1년 만에 21.5초에서 8.64초로 줄었습니다. 같은 대회장에서 로봇들은 코르크판에 못을 곧게 박아 넣는 데 애를 먹었습니다. 팀원이 장갑을 끼고 로봇의 손을 직접 조종한 상태에서도 그랬습니다.

두 결과를 가르는 것은 학습 알고리즘이 아니라 데이터가 만들어지는 장소입니다. 스프린트와 백플립은 정해진 궤적을 따라가는 동작입니다. 실패 비용이 0에 가까운 시뮬레이터에서 거의 무제한으로 뽑아낼 수 있습니다. 못을 박는 일은 접촉이고, 접촉면이 좁고 힘이 큰 순간에는 마찰과 변형의 근사값이 그대로 실패로 나타납니다. 그래서 접촉 데이터는 현장에서 로봇이 실제로 시도한 횟수만큼만 쌓입니다.

조직위는 이 차이를 종목이 시작되기 전에 규칙으로 처리해 두었습니다. 시나리오 종목에서 과제를 스스로 끝낸 로봇에는 배점 전부를, 원격조작에 의존한 로봇에는 절반을 줬습니다. 결과물만 보면 침대는 정리되어 있고 책은 제자리에 꽂혀 있어, 그 둘이 구분되지 않기 때문입니다.

닷새 뒤 종합 메달 1위는 100m 기록을 세 번 갈아치운 팀이 아니었습니다. 정밀 손 조작과 시나리오 종목에서 메달을 쌓은 상하이의 아지봇이었습니다.

모델 학습에 쓰는 시연 데이터도 결과 궤적만 저장하면 누가 그 동작을 만들었는지가 사라집니다. 대회는 그 칸을 배점으로 강제했고, 데이터 파이프라인에서는 메타데이터로 남겨야 합니다.

▶ 전문: https://blog.pebblous.ai/blog/humanoid-games-autonomy-scoring-contact-data/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #PhysicalAI #AIReadyData #휴머노이드 #로봇자율성 #세계휴머노이드로봇대회 #톈궁울트라 #아지봇

---

## LinkedIn (EN)

The winning time in the 100 metres at Beijing's World Humanoid Robot Games fell from 21.5 seconds to 8.64 in a single year. In the same arena, robots struggled to drive nails straight into a corkboard, and they struggled even when team members wore gloves and steered the hands directly.

What separates those two results is not the learning algorithm but where the training data is made. A sprint is a fixed trajectory, so it can be generated inside a physics simulator where a failed attempt costs almost nothing. Hammering is contact, and at the instant a narrow surface takes a large force, the simulator's approximation of friction and deformation shows up as a miss. Contact data therefore accrues only as fast as real robots try in the field.

The organizers settled that difference in the rulebook before the events began. In scenario tasks, a robot that finished on its own scored full marks and one that leaned on teleoperation scored half. Judged on the output alone, the bed is made and the books are shelved either way.

The final medal table made the same point. It was topped not by the team that broke the 100-metre record three times in five days, but by AGIBOT of Shanghai, whose medals came from fine hand manipulation and scenario events.

Demonstration data carries the same blind spot. Store only the resulting trajectory and you lose who produced the motion. The games forced that field with a scoring rule; a data pipeline has to keep it as metadata.

▶ Read: https://blog.pebblous.ai/blog/humanoid-games-autonomy-scoring-contact-data/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #PhysicalAI #AIReadyData #Humanoid #RobotAutonomy #WorldHumanoidRobotGames #TiangongUltra #AGIBOT

---

## Twitter/X (KO)

베이징 휴머노이드 대회의 100m 우승 기록이 1년 만에 8.64초가 됐습니다. 볼트의 기록보다 빠릅니다. 같은 대회에서 코르크판에 못을 박는 일은 사람이 장갑으로 원격조작해도 잘 되지 않았습니다.

궤적은 시뮬레이터에서 무한히 뽑히고, 접촉은 현장에서만 쌓입니다.

https://blog.pebblous.ai/blog/humanoid-games-autonomy-scoring-contact-data/ko/

#페블러스 #휴머노이드 #PhysicalAI #로봇자율성

---

## Twitter/X (EN)

A humanoid took the 100 metres in 8.64 seconds in Beijing, faster than Bolt's record. In the same arena, driving a nail into a corkboard defeated robots even under human teleoperation.

Trajectories come free from a simulator. Contact only accrues in the field.

https://blog.pebblous.ai/blog/humanoid-games-autonomy-scoring-contact-data/en/

#Pebblous #Humanoid #PhysicalAI #RobotAutonomy

---

## Facebook (KO)

결승선에서 몇 미터 떨어진 자리에 두꺼운 매트가 깔려 있었습니다.

로봇들이 스스로 안전하게 멈추지 못할 것을 예상하고 조직위가 미리 깔아 둔 것입니다.

지난주 베이징에서 닫힌 2회 세계휴머노이드로봇대회의 100m 금메달 기록은 8.64초였습니다. 작년 1회 대회에서 같은 로봇이 우승했을 때는 21.5초였습니다. 열두 달 사이의 일입니다.

그런데 같은 대회장에서, 로봇들은 코르크판에 못 하나를 곧게 박아 넣는 데 애를 먹었습니다. 팀원이 장갑을 끼고 로봇의 손을 직접 조종한 상태에서도 그랬습니다.

"이 로봇이 잘한다고 할 때, 무엇을 잘한다는 뜻일까요?"

조직위는 이 질문을 종목이 시작되기 전에 규칙으로 먼저 처리해 두었습니다. 시나리오 종목에서 과제를 스스로 끝낸 로봇에는 배점 전부를, 사람이 원격조작한 로봇에는 절반을 줬습니다. 침대가 정리되어 있고 책이 제자리에 꽂혀 있는 결과물만으로는 그 둘이 구분되지 않기 때문입니다. 채점표에 '동작의 출처'를 적는 칸을 하나 만든 셈입니다.

이 칸이 데이터 쪽에서 낯설지 않게 읽혔습니다. 모델 학습에 쓰는 시연 데이터도 결과 궤적만 저장하면 같은 문제를 겪습니다. 그 동작을 자율 정책이 만들었는지 사람이 조종해 만들었는지가 남지 않고, 시뮬레이터에서 뽑았는지 현장에서 얻었는지도 남지 않습니다. 페블러스가 데이터를 얼마나 모았는가보다 무엇을 어떻게 남겼는가로 읽는 이유도 여기에 가깝습니다.

다음에 깨질 기록은 8.64초를 조금 더 줄이는 쪽이 아닐지도 모르겠습니다. 부품이 떨어지지도 않고 사람이 개입하지도 않은 채 평범한 한 교대를 끝내는 일에는 관중석의 환호가 붙지 않습니다. 대신 그 기록은, 출처를 적는 칸이 있어야 셀 수 있습니다.

https://blog.pebblous.ai/blog/humanoid-games-autonomy-scoring-contact-data/ko/

#페블러스 #데이터품질 #PhysicalAI #휴머노이드 #로봇자율성 #톈궁울트라

---

## Facebook (EN)

A few metres past the finish line, the organizers had laid down a thick crash mat.

They put it there because they expected the robots would not be able to slow themselves down safely.

At the second World Humanoid Robot Games, which closed in Beijing last week, the gold-medal time over 100 metres was 8.64 seconds. When the same robot won the same event a year ago, it took 21.5. Twelve months separate those two numbers.

And yet, in that same hall, robots had trouble driving a single nail straight into a corkboard. They had trouble even when a team member pulled on a glove and steered the robot's hand by hand.

"When we say a robot is good at something, what exactly is it good at?"

The organizers had answered that in the rulebook before any event began. In scenario tasks, a robot that finished on its own took full marks, and a robot driven by a person took half. Looking only at the result, the bed is made and the books are shelved, and the two are indistinguishable. So the scoresheet gained a column for what you might call the provenance of the motion.

That column reads familiar from the data side. Demonstration data has the same shape: keep only the resulting trajectory and you lose whether an autonomous policy produced it or a human hand did, whether it came out of a simulator or out of an afternoon in the field. It is close to why Pebblous reads data less as how much was gathered and more as what was kept, and with what written beside it.

The next record to fall may not be the one that shaves a little off 8.64 seconds. Finishing an ordinary shift with nothing broken and nobody stepping in draws no cheering from the stands. But that record can only be counted if someone has kept the column that says where the motion came from.

https://blog.pebblous.ai/blog/humanoid-games-autonomy-scoring-contact-data/en/

#Pebblous #DataQuality #PhysicalAI #Humanoid #RobotAutonomy #TiangongUltra
