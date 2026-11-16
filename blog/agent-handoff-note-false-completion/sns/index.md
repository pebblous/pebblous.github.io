# SNS 홍보 글: 캘린더는 아직 2시인데, AI는 "4시로 수정 완료"라고 했다

> 소스: blog/agent-handoff-note-false-completion/
> 생성일: 2026-11-16
> URL: https://blog.pebblous.ai/blog/agent-handoff-note-false-completion/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

회의를 오후 4시로 잡아야 하는데 AI 에이전트가 캘린더에 2시로 저장했다. 작업은 거기서 멈췄고, 다음 에이전트에게 넘어가는 것은 메모 한 줄뿐이다.

"2시로 잘못 저장했다. 4시로 옮겨야 한다." 이렇게 적힌 메모를 받으면 캘린더를 연다. 같은 메모를 "4시로 수정 완료"로 깔끔하게 줄이면 열 이유가 없어진다. 맞는 시간은 두 줄에 다 들어 있다.

세일즈포스 AI 리서치가 이 차이를 두 실험에서 쟀다. 틀린 값을 저장한 직후 작업을 멈추고, 저장된 값은 건드리지 않은 채 넘길 기록만 바꿨다. 어디가 틀렸고 어떤 값으로 고쳐야 하는지 적은 기록을 받은 쪽은 남은 항목을 맞힌 비율이 66%였다. 아무 정보도 주지 않는 메모를 받은 쪽에서는 약 51%였다.

같은 정답을 이미 저장한 것처럼 적은 기록을 받은 쪽은 44%로, 기록을 손대지 않았을 때의 약 50%보다 낮았다.

두 번째 실험은 데이터베이스에서 돌았다. 저장이 실제로 안 됐는데 도구 응답에 성공이라고 적혀 있으면 과제 전체 성공률은 약 28%였고, 실패라고 적혀 있을 때의 45%보다 낮았다. 방향을 뒤집어 이미 저장된 일을 실패라고 알려 주면 같은 행이 한 번 더 들어가기도 했다. 앞의 수치는 남은 항목을 맞힌 비율이고, 뒤의 수치는 과제 전체 성공률이다.

좋아지는 폭이 미치는 범위는 넓지 않다. 올라간 점수는 대부분 메모가 직접 짚은 항목에서 나왔고, 오류라고만 표시하고 정답을 주지 않은 기록의 효과는 추가 실험에서 분명하지 않았다.

메모를 줄이는 쪽은 대개 사람이 아니라 요약 단계다. 도구가 "요청을 받았다"고 답한 일을 요약문이 "처리했다"로 옮기면, 접수와 반영 사이의 거리가 사라진다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 판본마다 따로 진단한다. 검사 영상에서 중복을 걷어낸 새 판본을 만들어 두어도, 다음 학습 작업이 이전 판본을 읽고 있으면 중복 영상은 그대로 학습에 들어간다. 읽어야 할 것은 '완료'라는 낱말이 아니라 다음 작업이 집어 가는 판본이다.

▶ 전문: https://blog.pebblous.ai/blog/agent-handoff-note-false-completion/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI에이전트 #에이전트핸드오프 #데이터거버넌스 #Salesforce

---

## LinkedIn (EN)

A meeting had to go on the calendar at 4 p.m. The first AI agent saved it at 2 p.m. and stopped there. What passes to the next agent is a single note.

"Saved at 2 p.m. by mistake. It has to move to 4 p.m." An agent holding that note opens the calendar. Tidy the same note into "Updated to 4 p.m." and there is no reason to open anything. The correct time sits in both lines.

Salesforce AI Research measured the gap in two experiments. A job was frozen right after an agent saved a wrong value; the stored value stayed put, and only the record passed along was rewritten. Where the note named the error and the value that belonged there, the share of remaining items the next agent got right came to 66%, up from about 51% for a note carrying no information.

Where the same correct answer went in as something already saved, the share was 44%, below the roughly 50% of a record nobody touched.

The second experiment ran on a database. With no write actually committed, a tool response reading success left whole-task success at about 28%, against 45% for a response reading failure. Reversed, telling the next agent that a committed write had failed sometimes produced a second copy of the same row. The first set of figures is the share of remaining items answered correctly; the second is whole-task success.

The reach of the gain is narrow: most of the improvement sat in the items the note pointed at, and whether flagging an error without supplying the answer helps was not settled in a follow-up.

What shortens these notes is usually the summarizing step. Once a tool answers "request received" and the summary carries it over as "handled," the sentence loses the step between taking a request in and actually applying it.

A quality figure for AI training data at Pebblous is tied to the version it was measured on, and DataClinic is what produces it. Strip the duplicates out of inspection video into a new version B, mark the job done, and the duplicates still go into training if the next job reads the earlier version A. What to read is not the word done but the version the next job picks up.

▶ Read: https://blog.pebblous.ai/blog/agent-handoff-note-false-completion/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIAgent #AgentHandoff #DataGovernance #Salesforce

---

## Twitter/X (KO)

"2시로 잘못 저장했다. 4시로 옮겨야 한다." 이렇게 적힌 메모를 받은 에이전트는 캘린더를 연다. "4시로 수정 완료"로 줄여 적으면 열지 않는다.

맞는 시간은 두 줄에 다 들어 있다. 세일즈포스 AI 리서치가 같은 구조를 실험으로 옮기자, 남은 항목을 맞힌 비율이 66%와 44%로 갈렸다.

▶ https://blog.pebblous.ai/blog/agent-handoff-note-false-completion/ko/

#페블러스 #데이터품질 #에이전트핸드오프 #Salesforce

---

## Twitter/X (EN)

Hand an agent a note reading "Saved at 2 p.m. by mistake. It has to move to 4 p.m." and it opens the calendar. Shorten the note to "Updated to 4 p.m." and it opens nothing.

Both lines carry the correct time. Salesforce AI Research ran that structure as an experiment, and the share of remaining items answered correctly split 66% against 44%.

▶ https://blog.pebblous.ai/blog/agent-handoff-note-false-completion/en/

#Pebblous #DataQuality #AgentHandoff #Salesforce

---

## Facebook (KO)

오후 4시에 모이기로 했는데, 참석자 화면에는 2시가 떠 있습니다.

캘린더에 시간을 저장한 쪽은 AI 에이전트였고, 그 에이전트는 작업 도중 멈췄습니다.

넘어가는 것은 메모 한 줄입니다.

"2시로 잘못 저장했다. 4시로 옮겨야 한다."

이렇게 적힌 줄을 받으면 캘린더를 열어 보게 됩니다. 그런데 메모를 깔끔하게 줄이다 보면 손은 이쪽으로 갑니다.

"4시로 수정 완료"

두 줄의 차이는 시간에 있지 않습니다. 동사에 있습니다. 한쪽은 옮겨야 한다고 말하고, 다른 쪽은 옮겼다고 말합니다.

세일즈포스 AI 리서치의 실험은 이 두 줄만 갈아 끼우고 나머지를 전부 고정해 두었습니다.

어디가 틀렸고 어떤 값으로 고쳐야 하는지 적은 기록을 받은 쪽은 남은 항목의 66%를 맞혔습니다. 아무 정보도 주지 않는 메모를 받은 쪽은 약 51%였습니다.

같은 정답을 이미 저장한 것처럼 적은 기록을 받은 쪽은 44%였고, 이는 기록을 손대지 않았을 때의 약 50%보다 낮습니다.

같은 질문을 데이터베이스에서 한 번 더 던졌습니다. 이번에는 응답 쪽이 거짓이었습니다.

저장이 실제로 안 됐는데 응답에 성공이라고 적혀 있을 때 과제 전체 성공률은 약 28%, 실패라고 적혀 있을 때는 45%였습니다. 반대로 이미 저장된 일을 실패라고 알려 주면, 같은 행이 한 번 더 들어가는 일이 있었습니다.

"오늘 돌아간 학습 작업은 어느 판본을 집어 갔습니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 검사 영상에서 중복을 걷어낸 새 판본을 만들어 두어도, 다음 학습 작업이 이전 판본을 읽고 있으면 중복 영상은 그대로 학습에 들어갑니다. 작업 기록에 완료라고 쓰여 있어도 그렇습니다.

인수인계 기록은 짧아도 됩니다.

캘린더가 4시를 가리키는 걸 보고 나서 "4시로 수정 완료"라고 쓰는 것과, 쓰고 나서 보지 않는 것은 같은 문장이 아닙니다.

▶ 전문: https://blog.pebblous.ai/blog/agent-handoff-note-false-completion/ko/

#페블러스 #데이터클리닉 #데이터품질 #AI에이전트 #에이전트핸드오프 #Salesforce

---

## Facebook (EN)

Four o'clock was the hour everyone agreed on. The attendees' screens still show two.

An AI agent put the time in the calendar, and that agent stopped partway through the job.

What travels onward is one line of a note.

"Saved at 2 p.m. by mistake. It has to move to 4 p.m."

A line like that sends you to the calendar. But notes get tidied, and the tidy version comes out like this.

"Updated to 4 p.m."

The two lines do not differ on the hour. They differ on the verb. One says the time has to be moved. The other says it was moved.

Salesforce AI Research swapped those two lines and held everything else still.

Where the record named the error and the value that belonged there, the next agent got 66% of the remaining items right. Where the note carried no information at all, the figure was about 51%.

Where the same correct answer was entered as something already saved, it was 44%, below the roughly 50% of a record left untouched.

A database version of the experiment put the falsehood in the response instead.

When nothing had actually been written and the response said success, whole-task success sat at about 28%; when the response said failure, 45%. Pushed the other way, an agent told that a committed write had failed would sometimes write the same row a second time.

"What did the training job that ran today actually open?"

Pebblous is in the business of saying, in figures, what state a set of AI training data is in, and DataClinic is what returns that figure. Take the duplicates out of inspection video, call the new version B, mark the job done. If the next training job still reads version A, the duplicate clips go in regardless.

A handoff record is allowed to be short.

Writing "Updated to 4 p.m." after seeing the calendar point at four is not the same act as writing it instead of looking.

▶ Read: https://blog.pebblous.ai/blog/agent-handoff-note-false-completion/en/

#Pebblous #DataClinic #DataQuality #AIAgent #AgentHandoff #Salesforce
