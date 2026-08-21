# SNS 홍보 글: 스무 번 모두 해낸 과제가 넷 중 하나뿐인 업무 에이전트 벤치마크

> 소스: blog/thinkingbox-stateful-agent-reliability/ko/index.html
> 생성일: 2026-08-22
> URL: https://blog.pebblous.ai/blog/thinkingbox-stateful-agent-reliability/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

업무 과제 507개를 스무 번씩 돌렸더니, 가장 성적이 좋은 모델이 매번 성공한 과제는 넷 중 하나였다.

마이크로소프트가 공개한 Thinkingbox-bench의 실측이다. 예약 변경이나 환불, 보험 청구처럼 처리 결과가 백엔드에 남는 업무를 리셋 가능한 데이터베이스 위에 올려 두고, 여러 모델을 과제마다 스무 번씩 독립 실행했다. 같은 모델의 평균 성공률은 65.36%였지만, 스무 번을 모두 통과한 비율은 25.25%로 내려갔다.

채점 기준을 최종 대화문이 아니라 작업이 끝난 뒤의 백엔드 상태에 둔 설계라 이 격차가 드러난다. 그 기준을 걷어 내면 그림이 반대로 보인다. 실패로 판정된 시행의 80.88%는 대화를 정상적으로 닫았고, 데이터베이스를 실제로 바꾸는 도구 호출까지 마친 상태였다. 응답 텍스트와 도구 호출 로그만 보는 점검으로는 걸러지지 않는 실패다.

읽을 때 붙는 조건도 있다. 과제는 비공개 기업 사례를 합성으로 재구성했고, 정답 상태가 하나로 정해지는 것만 남겼다. 8월 20일 arXiv에 올라온 프리프린트라 동료 심사도 아직 거치지 않았다.

도입 심사에 올릴 값은 성공 한 번이 아니라 몇 번 중 몇 번이라는 두 숫자이고, 그 판정은 로그가 아니라 최종 상태에서 떠야 한다.

▶ 전문: https://blog.pebblous.ai/blog/thinkingbox-stateful-agent-reliability/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI에이전트 #에이전트벤치마크 #Thinkingbox #MCP

---

## LinkedIn (EN)

Run 507 business tasks twenty times each, and the strongest model gets every single run right on just one task in four.

That is the measurement behind Thinkingbox-bench, the sandbox and benchmark Microsoft released this week. Tasks that leave a trace in a backend, such as changing a booking, issuing a refund or updating an insurance claim, sit on a resettable database, and each model runs every task twenty times in isolation. The same model averaged 65.36% across individual runs. Its rate for clearing all twenty attempts was 25.25%.

The gap shows up because grading looks at the state of the backend once the work is done, not at the closing message. Drop that standard and the picture inverts. Of the trials scored as failures, 80.88% ended the conversation normally and had already issued a tool call that changed the database. Checks built on response text and tool-call logs do not catch those.

Some caveats travel with the numbers. The tasks are synthetic reconstructions of private enterprise cases, narrowed to those with a single correct end state, and the paper is an August 20 preprint that has not been peer reviewed.

What belongs in a procurement review is not one success but two figures, how many runs out of how many, with the verdict read from the final state rather than the log.

▶ Read: https://blog.pebblous.ai/blog/thinkingbox-stateful-agent-reliability/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIAgent #AgentBenchmark #Thinkingbox #MCP

---

## Twitter/X (KO)

같은 업무 과제를 스무 번씩 돌리자, 가장 성적이 좋은 모델이 매번 성공한 과제는 넷 중 하나로 줄었다.

실패한 시행의 대다수는 대화를 정상 종료하고 데이터베이스까지 바꿔 놓았다. 로그가 조용한 것과 상태가 맞는 것은 서로 다른 사실이다.

▶ https://blog.pebblous.ai/blog/thinkingbox-stateful-agent-reliability/ko/

#페블러스 #AI에이전트 #Thinkingbox #데이터품질

---

## Twitter/X (EN)

Run the same business task twenty times and the strongest model clears every attempt on only one task in four.

Most failed trials closed the conversation normally and changed the database on the way out. A quiet log and a correct final state are not the same fact.

▶ https://blog.pebblous.ai/blog/thinkingbox-stateful-agent-reliability/en/

#Pebblous #AIAgent #Thinkingbox #DataQuality

---

## Facebook (KO)

"이번엔 잘 되네요."

시연이 한 번 깔끔하게 끝나면 회의실 공기가 대개 그 한마디에서 정리됩니다.

Thinkingbox-bench 논문을 읽는 동안 걸린 것은 성적표가 아니라 세는 방식이었습니다.

같은 과제를 스무 번씩 돌려 놓고, 한 번이라도 된 과제와 스무 번 다 된 과제를 따로 셌습니다. 앞의 값은 열에 아홉, 뒤의 값은 넷에 하나였습니다.

그 사이에 놓인 과제들을 저는 '갈리는 구간'이라고 부르게 됐습니다. 507개 중 3분의 2가 여기 있습니다. 시연에서 골라 보여 주기 가장 쉬운 것도, 운영에 올린 뒤 재현이 안 돼 문제가 되는 것도 같은 구간입니다.

더 오래 남은 것은 실패의 겉모습이었습니다.

논문 부록의 자동차보험 사례에서 에이전트는 납부 유예 이력이 이미 상한인 2회라는 값을 스스로 조회해 티켓에 적어 넣고, 그 옆에서 세 번째 유예를 승인합니다. 도구 호출은 에러 없이 끝났고, 대화도 매끄럽게 닫혔습니다. 어긋난 자리는 데이터베이스 한 칸뿐이었습니다.

"우리가 들여다보는 로그는 일이 됐다는 증거일까요, 조용히 끝났다는 증거일까요?"

페블러스가 데이터 품질을 진단할 때 서는 자리도 이 질문 근처입니다. 성공률 한 줄만 남기는 대신, 몇 번을 돌린 값인지와 판정 근거를 어디서 떴는지를 함께 남기는 일입니다.

한 번의 성공을 스무 번 세어 보는 습관이, 어쩌면 어떤 모델을 고를지보다 먼저 놓여야 할 것 같습니다.

(2026년 8월 20일 공개된 프리프린트라, 수치는 확정된 사실이 아니라 이 연구가 보고한 값으로 읽는 편이 맞겠습니다.)

▶ 전문: https://blog.pebblous.ai/blog/thinkingbox-stateful-agent-reliability/ko/

#페블러스 #데이터클리닉 #데이터품질 #AI에이전트 #Thinkingbox

---

## Facebook (EN)

"It worked."

When a demo lands cleanly, the room usually settles on those two words and moves on.

Reading the Thinkingbox-bench paper, what held me was not the scoreboard but the counting.

The same task was run twenty times, and two tallies were kept apart: tasks that succeeded at least once, and tasks that succeeded every single time. The first came to nine in ten. The second, one in four.

Everything between those two tallies is what I've started calling the flickering band. Two thirds of the 507 tasks live there. It is the easiest band to pick a demo from, and the one that breaks once the work is running for real.

What stayed with me longer was the shape of the failures.

In an auto insurance case from the appendix, the agent looks up the customer's deferral history, finds two on record against a cap of two, writes that number into the ticket, and then approves a third. Every tool call returned without an error. The conversation closed politely. The only thing out of place was a single cell in a database.

"Is the log in front of us evidence that the work got done, or evidence that it ended quietly?"

That question sits close to where Pebblous stands when it examines data quality: keeping not just a success rate, but how many runs produced it and where the verdict was read from.

Counting one success twenty times over may belong earlier in the process than choosing which model to buy.

(These figures come from a preprint posted on August 20, so they read best as what this study reports rather than settled fact.)

▶ Full piece: https://blog.pebblous.ai/blog/thinkingbox-stateful-agent-reliability/en/

#Pebblous #DataClinic #DataQuality #AIAgent #Thinkingbox
