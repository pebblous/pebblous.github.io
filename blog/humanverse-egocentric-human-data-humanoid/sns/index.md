# SNS 홍보 글: 휴머노이드를 가르친 영상 HumanVerse, 받아볼 수는 없다

> 소스: blog/humanverse-egocentric-human-data-humanoid/ko/index.html
> 생성일: 2026-10-16
> URL: https://blog.pebblous.ai/blog/humanverse-egocentric-human-data-humanoid/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

휴머노이드에게 집안일을 가르친 학습 데이터의 이름은 HumanVerse입니다. 그 500시간을 지금 받아볼 수 있는 사람은 없습니다.

알리바바 소속 Lambda-humanoid 팀이 10월 13일 공개한 λ₀ 연구입니다. 사람이 로봇을 직접 조종해 시연을 한 건씩 쌓는 대신, 머리에 카메라를 쓴 사람들이 집과 마트와 공장에서 하루 일과를 찍었습니다. 그 영상으로 가르친 유니트리 G1은 실물 과제 40회 시행에서 25회를 성공했습니다.

사람 영상을 그대로 먹일 수는 없습니다. 화면 속 사람 팔을 지우고 같은 자리에 로봇 팔을 렌더링해 끼웁니다. 사람 신체 모델은 로봇 키에 맞춰 줄이고, 실행에서 생긴 어긋남은 되먹여 동작 신호를 고칩니다. 이 과정으로 과제 평균 손끝 오차가 17cm에서 3.8cm로 줄었습니다. 수집이 싸진 만큼 가공이 비싸졌습니다.

이 데이터의 몫은 따로 측정됐습니다. 나머지를 그대로 두고 사람 영상만 학습에서 빼면 실물 성공률이 62.5%에서 22.5%로 내려갑니다. 성적의 대부분을 사람의 하루가 떠받치고 있었습니다.

받아볼 수 없는 쪽은 그 하루입니다. 코드 저장소는 아파치 2.0으로 열렸고 중간학습 체크포인트도 내려받을 수 있습니다. 다만 저장소 스스로 학습 데이터는 이번 공개에 포함되지 않는다고 적어 두었습니다. 지금 받을 수 있는 자료는 동작 정렬 예시 네 건입니다. 논문 제목의 '개방 환경(open-world)'은 촬영 장소가 실험실 밖이라는 뜻이지 데이터가 열렸다는 뜻이 아닙니다. 그리고 논문에도 저장소에도 촬영 참가자의 동의나 얼굴 처리를 다룬 문장이 없습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 이 팀의 에피소드 명세서는 꼼꼼한 편입니다. 출처와 촬영 메타데이터, 변환기 버전, 분할 배정이 건마다 적힙니다. 거기에 사람에 관한 칸만 없습니다. 공정의 이력과 사람의 이력은 같은 낱말을 쓰지만 서로를 대신하지 못합니다.

직원의 작업을 1인칭으로 찍어 로봇을 가르치려는 조직이 먼저 세울 항목은 카메라 대수가 아닙니다. 영상 한 건에 따라붙는 동의의 범위입니다.

▶ 전문: https://blog.pebblous.ai/blog/humanverse-egocentric-human-data-humanoid/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #PhysicalAI #HumanVerse #휴머노이드 #유니트리G1 #알리바바 #로봇학습데이터 #데이터프로버넌스

---

## LinkedIn (EN)

The dataset that taught a humanoid to do household chores is called HumanVerse. Nobody can download those 500 hours today.

The λ₀ research, released on 13 October by Alibaba's Lambda-humanoid team, replaces demonstrations built one at a time by driving a robot by hand. People wearing head-mounted cameras filmed their working day in homes, shops and factories instead. A Unitree G1 trained on that footage succeeded on 25 of 40 real-world task trials.

Human video cannot be fed to a robot as it is. The human arm is cut out of the frame and a rendered robot arm is composited into the same place. A human body model is scaled down to the robot's height, and the mismatch seen in execution is fed back to correct the motion signal. Task-averaged fingertip error fell from 17cm to 3.8cm. Collection grew cheaper and processing grew more expensive.

The data's contribution was measured separately. Hold everything else fixed and remove only the human video, and the real-world success rate drops from 62.5% to 22.5%. Most of the score rests on footage of ordinary days.

What cannot be obtained is those days. The code repository is open under Apache 2.0 and the mid-training checkpoint can be downloaded, but the repository itself states that the training data is not part of this release. What is available now amounts to four action-alignment examples. The "open-world" in the paper's title refers to filming outside the lab, not to data being opened up. And neither the paper, its appendix nor the repository carries a sentence about participant consent or the handling of faces.

Pebblous quantifies the quality of AI training data at DataClinic. The episode specification this team keeps is a careful one: provenance, capture metadata, converter version and split assignment are recorded for every clip. The column about the person is the one that is missing. A processing history and a history about people use the same word and do not substitute for each other.

For any organization planning to film staff in first person and train robots on it, the first item to settle is not how many cameras to buy. It is how far the consent attached to a single clip extends.

▶ Read: https://blog.pebblous.ai/blog/humanverse-egocentric-human-data-humanoid/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #PhysicalAI #HumanVerse #Humanoid #UnitreeG1 #Alibaba #RobotLearning #DataProvenance

---

## Twitter/X (KO)

학습에서 사람 영상만 빼면 유니트리 G1의 실물 과제 성공률이 62.5%에서 22.5%로 내려갑니다. 알리바바 팀이 모은 1인칭 영상 HumanVerse가 성적의 대부분을 떠받치고 있었습니다.

그 영상은 공개되지 않았습니다. 논문 제목의 '개방 환경'은 촬영 장소를 가리키는 말이고, 촬영 동의를 다룬 문장은 어디에도 없습니다.

https://blog.pebblous.ai/blog/humanverse-egocentric-human-data-humanoid/ko/

#페블러스 #데이터품질 #HumanVerse #휴머노이드

---

## Twitter/X (EN)

Remove only the human video from training and a Unitree G1's real-world success rate falls from 62.5% to 22.5%. HumanVerse, the first-person footage Alibaba's team collected, carries most of the score.

That footage was not released. The "open world" in the title refers to where it was filmed, and no sentence anywhere covers filming consent.

https://blog.pebblous.ai/blog/humanverse-egocentric-human-data-humanoid/en/

#Pebblous #DataQuality #HumanVerse #Humanoid

---

## Facebook (KO)

설거지를 하다가 수건을 집으려고 반걸음 옆으로 옮기는 동작.

그 반걸음은 기존 1인칭 영상 데이터에 거의 남아 있지 않습니다. 손목과 손의 궤적만 기록해 왔기 때문입니다.

그런데 걷기와 집기가 한 동작으로 이어지는 과제에서는 그 빠진 절반이 더 중요합니다.

지금까지 그 데이터는 사람이 로봇을 직접 조종해 한 건씩 만들었습니다. 로봇이 있어야 데이터가 쌓이고, 데이터가 쌓여야 로봇이 늘어납니다.

알리바바의 한 팀이 그 순환을 사람 쪽에서 끊어 봤습니다.

머리에 카메라를 쓴 사람들이 집과 마트와 공장과 사무실에서 하루 일과를 찍었습니다. 500시간.

그 500시간의 이름이 HumanVerse입니다.

숫자 하나가 이 데이터의 몫을 보여 줍니다. 나머지 조건을 그대로 둔 채 이 영상만 학습에서 빼면, 유니트리 G1의 실물 과제 성공률이 62.5%에서 22.5%로 내려갑니다.

누군가의 평범한 하루가 로봇 성적의 대부분을 떠받치고 있었던 셈입니다.

그런데 읽다가 손이 멎은 곳은 성적표가 아니었습니다.

코드 저장소에 적힌 한 줄이었습니다. HumanVerse-500 학습 데이터는 이번 공개에 포함되지 않는다는 문장입니다.

지금 내려받을 수 있는 자료는 동작 정렬 예시 네 건입니다.

논문 제목에는 '개방 환경(open-world)'이 붙어 있습니다. 그 말이 가리키는 것은 촬영 장소가 실험실 밖이라는 뜻이지, 데이터가 열렸다는 뜻이 아닙니다.

저는 이 둘을 '열린 환경'과 '열린 데이터'로 따로 적어 두었습니다. 같은 낱말을 쓰지만 서로 다른 약속입니다.

빈자리는 하나 더 있습니다. 논문 본문에도, 부록에도, 프로젝트 페이지에도, 코드 저장소에도 촬영 참가자의 동의나 얼굴 처리를 다룬 문장이 없습니다.

공정을 다루는 솜씨가 거친 팀이어서가 아닙니다. 에피소드마다 출처와 촬영 메타데이터, 변환기 버전, 분할 배정을 고정된 명세서에 적고, 좌표 규약과 타임스탬프까지 구조적으로 검사합니다.

사람에 관한 칸만 없습니다.

"공정의 이력과 사람의 이력은 같은 낱말을 씁니다. 그런데 한쪽이 다른 쪽을 대신할 수 있습니까?"

페블러스가 이 연구를 눈여겨보는 이유도 여기에 있습니다. DataClinic으로 학습 데이터의 품질을 정량 진단할 때, 점수보다 먼저 보는 것은 그 데이터가 어디서 왔고 무엇과 함께 기록됐는지입니다. 공장이나 매장에서 직원의 작업을 1인칭으로 찍어 로봇을 가르치려는 계획은 이미 여러 곳에서 검토되고 있습니다.

영상 한 건이 들어올 때, 거기에 사람에 관한 칸이 몇 개나 함께 붙어 들어오는지.

저희가 쌓고 있는 기록에도 그 칸이 있는지, 오늘 한 번 열어 볼 생각입니다.

▶ 전문: https://blog.pebblous.ai/blog/humanverse-egocentric-human-data-humanoid/ko/

#페블러스 #데이터클리닉 #데이터품질 #HumanVerse #휴머노이드 #PhysicalAI

---

## Facebook (EN)

Washing up, and taking half a step sideways to reach for a towel.

That half step is barely present in existing first-person video datasets. They kept the wrist and hand trajectory and little else.

For a task where walking and grasping are a single motion, that missing half is the more important one.

Until now that data was made one demonstration at a time, by a person driving a robot by hand. Robots have to exist for data to pile up, and data has to pile up for robots to multiply.

A team at Alibaba tried breaking that circle on the human side.

People wearing head-mounted cameras filmed their working day in homes, shops, factories and offices. Five hundred hours.

Those 500 hours are called HumanVerse.

One number shows what the data is worth. Hold every other condition fixed, take only this footage out of training, and a Unitree G1's real-world success rate falls from 62.5% to 22.5%.

Somebody's ordinary day was carrying most of the robot's score.

What stopped me, though, was not the results table.

It was a line in the code repository, saying that the HumanVerse-500 training data is not included in this release.

What can be downloaded today comes to four action-alignment examples.

The paper's title carries the phrase "open-world." It means the filming happened outside the lab. It does not mean the data was opened up.

I have written those two down separately, as "an open world" and "open data." The same word, holding two different promises.

There is one more empty space. Neither the body of the paper, nor its appendix, nor the project page, nor the repository carries a sentence about participant consent or the handling of faces.

Not because the team is careless with process. Every episode gets a fixed specification recording provenance, capture metadata, converter version and split assignment, and the coordinate conventions and timestamps are checked structurally.

Only the column about the person is absent.

"A processing history and a history about people use the same word. Can either one stand in for the other?"

This is where Pebblous keeps looking. When DataClinic puts the quality of training data into numbers, what comes before the score is where the data came from and what was recorded alongside it. Plans to film staff at work in first person and train robots on the footage are already under review in several places.

When a single clip arrives, how many entries about the person arrive with it.

Whether that column exists in the records we are keeping ourselves is something I intend to open up and check today.

▶ Full piece: https://blog.pebblous.ai/blog/humanverse-egocentric-human-data-humanoid/en/

#Pebblous #DataClinic #DataQuality #HumanVerse #Humanoid #PhysicalAI
