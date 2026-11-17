# SNS 홍보 글: AI 에이전트 인수인계 메모를 잘 써야 하는 이유 — Salesforce 연구의 실험

> 소스: blog/agent-handoff-note-false-completion/
> 생성일: 2026-11-16
> URL: https://blog.pebblous.ai/blog/agent-handoff-note-false-completion/ko/
> voice: sns-cover (LinkedIn·Twitter) / reflective (Facebook)

---

## LinkedIn (KO)

회의를 오후 4시로 잡아야 하는데 에이전트가 캘린더에 2시로 저장한 채 멈췄다. 다음 에이전트에게 넘길 메모를 "4시로 수정 완료"라고 줄이면 맞는 시간은 전달되지만, 캘린더를 열 이유는 같이 사라진다.

세일즈포스 AI 리서치가 이 차이를 두 실험에서 쟀다. 첫 실험은 에이전트가 틀린 값을 저장한 직후 작업을 멈추고, 저장된 값은 그대로 둔 채 다음 에이전트에게 넘길 기록만 바꿨다. 어디가 틀렸고 어떤 값으로 고쳐야 하는지 적은 메모를 받은 쪽은 남은 항목을 맞힌 비율이 약 51%에서 66%로 올라갔다. 반대로 같은 정답을 이미 저장한 것처럼 적은 메모를 받은 쪽은 44%였고, 기록을 손대지 않은 약 50%보다 낮았다.

다음 에이전트는 기록에서 정답만 읽지 않는다. 아직 손대야 할 자리가 어디인지도 같이 읽는다. 요약이 그 자리를 끝난 일로 표시하면 정답을 써 주고도 고칠 곳을 가릴 수 있다. 좋아진 점수도 대부분 메모가 직접 짚은 항목에서 나왔다.

두 번째 실험은 데이터베이스에서 돌았다. 저장이 실제로 안 됐는데 도구 응답에 성공이라고 적혀 있으면 과제 전체 성공률은 약 28%였고, 실패라고 적혀 있을 때는 45%였다. 방향을 뒤집어 이미 저장된 일을 실패라고 알리면, 다음 에이전트가 같은 행을 한 번 더 넣는 경우가 나왔다.

두 수치의 분모는 다르다. 앞쪽은 남은 항목을 맞힌 비율이고 뒤쪽은 과제 전체 성공률이다. 오류라고 표시만 하고 정답을 알려 주지 않는 방식은 추가 실험에서도 효과가 분명하게 나오지 않았다.

페블러스에서 AI 학습 데이터의 품질은 DataClinic이 판본마다 수치로 적어 둔다. 중복을 걷어낸 새 판본을 만들어도 다음 학습 작업이 어느 판본을 읽도록 걸려 있는지는 점수표가 아니라 작업 설정에 적혀 있다.

인수인계 기록은 짧아도 된다. 다만 짧게 줄일 때 가장 먼저 떨어져 나가는 칸이 아직 남은 일이다.

▶ 전문: https://blog.pebblous.ai/blog/agent-handoff-note-false-completion/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI에이전트 #에이전트핸드오프 #컨텍스트압축 #Salesforce

---

## LinkedIn (EN)

A meeting had to be set for 4 p.m. The agent handling it put 2 p.m. in the calendar and stopped there. Shorten the handoff note to "corrected to 4 p.m." and the next agent has the right time and no reason to open the calendar.

Two experiments out of Salesforce AI Research put a size on that difference. In the first, an agent was halted just after it saved a wrong value, the stored value was left alone, and only the record passed on to the next agent was rewritten. A note saying where the error sat and what the value should be raised the share of remaining items answered correctly from about 51% to 66%. Written in as a save that had already happened, that same value produced 44%, under the roughly 50% of a record nobody edited.

The next agent reads a record for two things. One is the right value. The other is which places still have work waiting in them. A summary that files the second one away as finished can hand over the right answer and still hide the spot that needs fixing. Most of the gain landed on the items the note pointed at by name.

A second setup ran against a database. Where a write had never landed, a tool response reading success left whole-task success at about 28%, against 45% for a response reading failure. Turned around, telling the next agent that an applied write had failed sometimes produced the same row twice.

Two cautions travel with those figures. The denominators are not the same: the first counts remaining items answered correctly, the second whole-task success. And whether flagging an error without saying what the value should be helps at all stayed unsettled in the additional experiment.

Pebblous keeps a figure next to AI training data, and DataClinic is what works it out. A figure like that belongs to one version of a dataset. Whether the next training job is pointed at that version sits in the job configuration, not on the scorecard.

A handoff record is allowed to be short. What drops out first when it gets shorter is the line about the work nobody has done yet.

▶ Read: https://blog.pebblous.ai/blog/agent-handoff-note-false-completion/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIAgent #AgentHandoff #ContextCompaction #Salesforce

---

## Twitter/X (KO)

인수인계 메모에 어디가 틀렸고 어떤 값으로 고쳐야 하는지 적으면, 다음 에이전트가 남은 항목을 맞힌 비율이 51%에서 66%로 오른다.

같은 정답을 이미 고쳐 둔 일처럼 적으면 44%로 떨어진다. 맞는 값은 두 메모에 똑같이 들어 있는데, 가서 볼 이유를 남기는 쪽은 하나뿐이다.

▶ https://blog.pebblous.ai/blog/agent-handoff-note-false-completion/ko/

#페블러스 #데이터품질 #AI에이전트 #에이전트핸드오프 #Salesforce

---

## Twitter/X (EN)

Tell the next agent where the error sits and what the value should be: it gets 66% of the remaining items right, up from 51%.

Log it instead as a fix the agent already made: 44%.

Both notes carry the right value. Only one of them leaves a reason to go and look.

▶ https://blog.pebblous.ai/blog/agent-handoff-note-false-completion/en/

#Pebblous #DataQuality #AIAgent #AgentHandoff #Salesforce

---

## Facebook (KO)

참석자들 화면에는 아직 2시가 떠 있습니다.

회의는 4시로 잡기로 했고, 인수인계 메모에는 "4시로 수정 완료"라고 적혀 있습니다.

메모를 받은 쪽에게는 캘린더를 열어 볼 이유가 그 줄에 없습니다.

세일즈포스 AI 리서치가 바로 이 상황을 실험으로 만들어 보았습니다. 틀린 값을 저장한 직후 에이전트를 멈춰 세우고, 저장된 값은 손대지 않은 채 다음 에이전트가 읽을 기록만 바꿔 보았습니다.

어디가 틀렸고 어떤 값으로 고쳐야 하는지 적어 준 기록을 받은 쪽은 남은 항목의 정답률이 51%에서 66%로 올라갔습니다.

같은 정답을 이미 저장해 둔 일처럼 적어 준 기록을 받은 쪽은, 기록을 그대로 둔 쪽보다도 못했습니다.

두 메모에 적힌 시간은 같습니다. 다른 것은 그 시간이 아직 손대야 할 자리로 보이느냐입니다.

데이터 작업에도 같은 자리가 있습니다.

검사 영상에서 중복을 걷어내고 새 판본을 만들었습니다. 작업 기록에는 완료라고 적혀 있습니다. 그런데 다음 학습 작업이 여전히 이전 판본을 읽고 있다면, 중복 영상은 그대로 학습에 들어갑니다.

"지금 학습을 돌리는 그 작업은, 완료라고 적힌 그 판본을 읽고 있습니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 그 수치는 판본 하나에 붙습니다. 그 판본이 다음 작업의 입력으로 걸려 있는지는 점수표 바깥, 작업 설정 쪽에 적혀 있습니다.

에이전트 그린하우스의 시험으로 옮기면 물음이 구체적이 됩니다. 완료 기록과 실제 판본이 어긋날 때 에이전트가 알아차리는가. 실제 상태를 읽을 수 없을 때 확인이 필요하다고 남기는가.

인수인계 기록은 짧아도 됩니다. 다만 짧아질 때 가장 먼저 지워지는 칸이 아직 남은 일입니다.

"4시로 수정 완료"는 캘린더가 4시를 가리키는 걸 본 뒤에 적어도 늦지 않습니다.

▶ 전문: https://blog.pebblous.ai/blog/agent-handoff-note-false-completion/ko/

#페블러스 #데이터품질 #AI에이전트 #에이전트핸드오프 #Salesforce #데이터클리닉

---

## Facebook (EN)

The attendees still have 2 p.m. on their screens.

The meeting was set for 4. The handoff note reads, "corrected to 4 p.m."

Nothing in that line gives whoever picks the work up a reason to open the calendar.

Salesforce AI Research set that moment up as an experiment. An agent was halted just after it saved a wrong value, the stored value was left exactly where it sat, and only the record the next agent would read got rewritten.

Where the record named the error and the value it should carry, the next agent answered about 66% of the remaining items, up from roughly 51%.

Where the record logged that value as a save already made, the next agent did worse than it would have with a record nobody touched.

The time written in both notes is the same. What differs is whether that time still looks like a place somebody has to go to.

Data work has the same spot in it.

Duplicates are stripped out of the inspection footage and a new version is built. The work log reads done. If the next training run is still reading the earlier version, the duplicate footage goes into training anyway.

"Is the job training right now reading the version the log calls done?"

Pebblous reads AI training data for quality one version at a time, and DataClinic does the reading. What comes back belongs to that version and no other. Whether the next job is pointed at it lives in the job configuration, outside the scorecard.

Put into a test for the Agent Greenhouse, the questions stop being abstract. Does an agent catch it when the log says done and the stored version says otherwise? When the state cannot be read at all, does it leave word that somebody has to confirm?

A handoff record is allowed to be short. The line that goes first, when it gets shorter, is the one about what is still open.

"Corrected to 4 p.m." is a fine thing to write, once the calendar has been seen pointing at 4.

▶ Read: https://blog.pebblous.ai/blog/agent-handoff-note-false-completion/en/

#Pebblous #DataQuality #AIAgent #AgentHandoff #Salesforce #DataClinic
