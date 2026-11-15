# SNS 홍보 글: AI 에이전트 기록 정리, 틀린 값이 환경에 남으면 해가 된다

> 소스: blog/agent-history-cleaning-record-world/
> 생성일: 2026-11-15
> URL: https://blog.pebblous.ai/blog/agent-history-cleaning-record-world/ko/
> voice: sns-cover (LinkedIn·Twitter) / reflective (Facebook)

---

## LinkedIn (KO)

멈춘 AI 에이전트의 기록에 같은 정답을 넣었는데, 적는 방식만 바꾸자 복구율이 66%와 44%로 갈렸다.

세일즈포스 AI 리서치의 연구진 여섯이 11월 10일 공개한 실험이다. 에이전트가 틀린 값을 영구 저장소에 써 넣은 장면에서 상태를 고정하고, 기록만 손본 다음 저장소는 그대로 둔 채 남은 일을 다른 모델에게 넘겼다. 틀린 값을 지우지 않고 맞는 값을 메모로 알린 기록은 복구율을 51%에서 66%로 올렸다. 같은 값을 에이전트가 이미 처리한 행동처럼 바꿔 적은 기록은 44%였고, 이는 아무것도 손대지 않았을 때보다 낮다.

내용이 없는 중립 메모를 붙인 대조군은 아무것도 하지 않은 쪽과 구별되지 않았다. 결과를 움직인 것은 메모가 붙었다는 사실이 아니라 메모가 말한 내용이다. 저자들은 기록이 값을 건네는 일과 할 일이 남았다고 알리는 일을 동시에 한다고 본다. 끝났다고 적힌 칸을 이어받은 모델은 다시 열지 않는다.

두 번째 실험은 조작의 방향을 뒤집었다. AppWorld에서 성공했다는 영수증은 데이터베이스에 쓰기 흔적이 없을 때 성공률을 16.92%포인트 깎았고, 흔적이 남아 있을 때는 10.38%포인트 끌어올렸다. 같은 한 줄의 값어치가 환경에 따라 27%포인트 벌어진다.

이득이 나는 자리는 생각보다 좁다. 15.20%포인트 상승분 가운데 11.57%포인트가 메모에 이름이 적힌 칸 하나에서 나왔고, 아무 칸도 지목하지 않은 47개 상태에서는 방향조차 판별되지 않았다. 여덟 개 수신 모델 가운데 주된 결과를 지탱하는 쪽도 소수다.

기록만 손대는 관행은 압축과 핸드오프다. 롤백과 재실행은 기록과 환경을 함께 되돌리므로 이 함정을 만들지 않는다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 한 벌의 수치로 진단한다. 그런데 품질 점검은 대개 기록 안쪽에서 끝난다. 결측과 스키마는 기록만 보고도 셀 수 있다. 그 기록이 설명한다는 쪽을 열어 보는 단계는 따로 설계하지 않으면 생기지 않는다.

▶ 전문: https://blog.pebblous.ai/blog/agent-history-cleaning-record-world/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI에이전트 #컨텍스트압축 #데이터거버넌스 #Salesforce #AgentCEBench #AppWorld

---

## LinkedIn (EN)

The same correct value, written into a stalled agent's record two different ways, produced recovery rates of 66% and 44%.

Salesforce AI Research published the experiment on November 10. Six authors froze an agent at the moment it committed a wrong value to storage, rewrote the history that recorded the moment, left the storage exactly as the agent had left it, and gave the unfinished job to a different model. One version of the history left the wrong entry visible and attached a note naming the correct value; recovery rose from 51% to 66%. Another version entered that same value as an action the agent had already completed; recovery fell to 44%, below the 50% baseline for histories that were not edited at all.

A control note carrying no information behaved like no edit at all. What moved the number was not the presence of a note but its content. The authors read a history as doing two jobs at once: handing over a value, and signalling what remains outstanding. No model reopens a cell that has been marked finished.

The second experiment reversed the manipulation. In AppWorld, a receipt reading success cost 16.92 points of task success when the database held no trace of the write, and added 10.38 points when the trace was there. The worth of one identical line swings 27 points on a fact recorded nowhere inside it.

The gains are narrower than the headline suggests. Of the 15.20-point rise, 11.57 points came from the single cell the note named, and across 47 states where no cell was named the direction could not be determined. Only a minority of the eight receiving models carries the main result.

Rollback and replay restore history and storage together, which is why they avoid this failure. Compaction and handoff work on the history alone.

Pebblous breaks the quality of AI training data into items and scores each one with DataClinic. Quality work mostly asks whether a record holds together on its own terms. Testing it against the system it claims to describe is a separate step, and nobody gets it for free.

▶ Read: https://blog.pebblous.ai/blog/agent-history-cleaning-record-world/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIAgent #AgentHandoff #ContextCompaction #Salesforce #AgentCEBench #AppWorld

---

## Twitter/X (KO)

멈춘 AI 에이전트의 기록에 정답을 메모로 덧붙이면 복구율이 66%로 오른다. 같은 정답을 이미 처리한 일처럼 고쳐 적으면 44%로 떨어진다.

넣은 값은 같다. 틀린 값은 저장소에 그대로 남아 있고, 뒤쪽 기록은 이어받은 모델에게 그 칸을 다시 열 이유가 없다고 말한다.

▶ https://blog.pebblous.ai/blog/agent-history-cleaning-record-world/ko/

#페블러스 #데이터품질 #AI에이전트 #Salesforce #AppWorld

---

## Twitter/X (EN)

Flag a stalled agent's wrong entry and name the fix: the next model recovers 66% of the time. Enter the same fix as work already done: 44%.

Identical value, opposite result. The error is still sitting in storage, and the second version tells the next model not to look.

▶ https://blog.pebblous.ai/blog/agent-history-cleaning-record-world/en/

#Pebblous #DataQuality #AIAgent #Salesforce #AppWorld

---

## Facebook (KO)

인수인계 메모를 받아 본 적이 있으실 겁니다.

"그 건은 처리했습니다."

한 줄이면 충분합니다. 받은 사람은 그 줄을 읽고 다음 일로 넘어갑니다.

세일즈포스 AI 리서치의 연구진이 그 장면을 실험으로 옮겨 놓았습니다. 작업 도중 멈춘 AI 에이전트의 기록만 손보고, 그 에이전트가 실제로 바꿔 놓은 저장소는 건드리지 않은 채 남은 일을 다른 모델에게 넘겼습니다.

틀린 값을 지우지 않고 그 옆에 맞는 값을 적어 둔 기록을 받은 쪽은 절반에서 셋 중 둘로 올라섰습니다.

같은 정답을 이미 처리한 일로 바꿔 적은 기록을 받은 쪽은 아무것도 고치지 않았을 때보다 못했습니다.

넣은 값은 똑같았습니다. 달라진 것은 그 값이 할 일로 적혔는가, 끝난 일로 적혔는가뿐이었습니다.

끝났다고 적힌 칸을 다시 열어 보는 모델은 없었습니다.

두 번째 실험은 반대쪽에서 같은 것을 재어 보았습니다.

기록에는 성공했다고 적혀 있는데 데이터베이스에는 아무 흔적이 없을 때, 그 한 줄은 성공률을 끌어내렸습니다. 같은 한 줄이 흔적과 맞아떨어질 때는 성적을 올렸습니다.

한 줄이 참인지 거짓인지는 그 한 줄 안에 적혀 있지 않았습니다.

"그 기록이 설명한다는 자리는, 지금도 기록과 같은 말을 하고 있습니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 품질이라는 말이 닿는 범위는 대개 기록 안쪽에서 끝납니다. 결측이 몇 퍼센트인지, 스키마가 맞는지. 그 기록이 설명한다는 쪽을 열어 보는 단계는 따로 설계하지 않으면 생기지 않습니다.

로그를 비우고 대화를 요약하는 일은 이제 매일 일어납니다.

비워진 자리가 정말 비어 있는지는 기록 바깥에서만 알 수 있습니다.

▶ 전문: https://blog.pebblous.ai/blog/agent-history-cleaning-record-world/ko/

#페블러스 #데이터품질 #AI에이전트 #에이전트핸드오프 #Salesforce #데이터클리닉

---

## Facebook (EN)

Most of us have picked up a job someone else left half-finished.

"That one's been handled."

One line, and you move on. You do not go back and look.

Researchers at Salesforce AI Research built an experiment around that exact moment. They stopped an AI agent in the middle of a task, just after it had written something wrong into storage. Then they edited the history of what it had done, left the storage as it was, and passed the unfinished work to a different model.

One version of the history left the wrong entry where it was and attached a note naming the correct value. Recovery climbed from about half the cases to two in three.

Another version entered that same correct value as something the agent had already taken care of. That version did worse than leaving the history alone.

The value sitting in the history was identical. What changed was whether it read as work outstanding or work closed.

Nothing goes back to a cell that has been marked done.

The second experiment measured the same thing from the other side.

When the history said a write had succeeded and the database held no trace of it, that one line pushed task success down. When the same line matched what the database actually held, it pushed the score up.

Nothing inside the line says which of the two it is.

"Does the system the record describes still say the same thing the record does?"

DataClinic is where Pebblous puts a figure on AI training data. Almost everything a quality check looks at lives inside the record itself: missing fields, schema, one line contradicting the next. Whether the system it describes still matches is a different question, and it has to be designed in on purpose.

Log compaction and conversation summaries run every day now, as ordinary housekeeping, often with nobody watching.

Whether the space they cleared is actually empty is not something a record can report on itself.

▶ Read: https://blog.pebblous.ai/blog/agent-history-cleaning-record-world/en/

#Pebblous #DataQuality #AIAgent #AgentHandoff #Salesforce #DataClinic
