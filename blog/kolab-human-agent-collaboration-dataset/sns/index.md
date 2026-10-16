# SNS 홍보 글: 전문가 화면을 녹화한 Kolab, AI는 자기 답이 쓰일지 알까?

> 소스: blog/kolab-human-agent-collaboration-dataset/ko/index.html
> 생성일: 2026-10-17
> URL: https://blog.pebblous.ai/blog/kolab-human-agent-collaboration-dataset/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

미네소타대 연구진이 10월 15일 공개한 Kolab이 모은 것은 대화 기록이 아니라 화면입니다. 40개 직종 전문가 50명이 평소 하던 업무를 AI 에이전트와 함께 처리하는 장면을 115시간 넘게 녹화했습니다.

100개 세션이 508단계로 나뉘고, 화면에 등장한 소프트웨어는 90개가 넘습니다. 누구나 쓰는 문서 도구만이 아니라 Revit이나 DaVinci Resolve처럼 그 직종에서만 쓰는 도구가 섞여 있습니다.

기존 에이전트 벤치마크는 모델이 과제를 혼자 끝냈는지를 셉니다. Kolab이 센 것은 그다음입니다. 에이전트의 답이 채팅창을 떠나 전문가의 손에 들어간 뒤에 무슨 일이 일어나는가.

라벨이 붙은 692건 가운데 전문가가 고치지 않고 그대로 쓴 답이 65.9%였습니다. 19.1%는 고쳐서 썼고 15.0%는 쓰지 않았습니다. 직종을 갈라 보면 채택률이 법률의 57%에서 과학과 컴퓨터·수학 분야의 79%까지 벌어집니다.

모델에게 이 결과를 미리 맞혀 보라고 하자 성적이 무너졌습니다. 가장 높은 F1이 0.513이고, 최빈값만 반복해 찍는 기준선이 0.265입니다. 워크플로우를 더 길게 보여 줘도 대부분의 설정에서 점수는 0.07도 움직이지 않았습니다.

틀리는 방향에도 버릇이 있습니다. 영상 입력을 받은 Gemini 3.8 Flash는 예제의 83.8%를 채택으로 예측했는데, 실제 채택 비율은 65.9%입니다. 자기 답이 받아들여질 가능성을 실제보다 높게 보는 쪽으로 기울어 있습니다.

읽을 때 조심할 자리도 있습니다. 폐기 라벨은 사용자가 거부한다고 분명히 말한 경우에만 붙습니다. 아무 말 없이 창을 닫은 응답은 15.0%에 들어오지 않으므로, 이 수치는 실제 거부의 하한에 가깝습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 품질을 수치로 매기려면 무엇이 쓰였고 무엇이 버려졌는지가 데이터에 함께 와야 합니다. AI 사용 기록이 질문과 답까지만 남으면, 그 판정은 나중에 사람이 따로 적어 넣는 일이 됩니다.

대화 로그가 몇 테라바이트씩 쌓여도, 판정이 일어나는 구간은 거기에 없습니다.

▶ 전문: https://blog.pebblous.ai/blog/kolab-human-agent-collaboration-dataset/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #Kolab #AI에이전트 #에이전트벤치마크 #휴먼AI협업 #미네소타대

---

## LinkedIn (EN)

What researchers at the University of Minnesota released on 15 October is not a set of transcripts but a set of screens. Kolab holds more than 115 hours of recordings of 50 professionals across 40 occupations, each working through their own job alongside an AI agent.

The footage breaks into 100 sessions and 508 steps, and more than 90 software applications appear in it. Not only the document tools everyone shares, but tools used in a single trade, such as Revit and DaVinci Resolve.

Existing agent benchmarks count whether a model finished a task on its own. Kolab counts what comes after that: what happens to the agent's answer once it leaves the chat window and reaches the professional's hands.

Across 692 labeled instances, 65.9% of the answers were used without a single change. Another 19.1% were revised first, and 15.0% were never used at all. Split by occupation, the adoption rate runs from 57% in law to 79% in science and in computing and mathematics.

Asked to forecast that outcome in advance, the models came apart. The best F1 was 0.513 against a majority-class baseline of 0.265, and showing more of the surrounding workflow moved most settings by less than 0.07.

The errors lean in a direction. Given video input, Gemini 3.8 Flash predicted adoption for 83.8% of examples, where the real adoption rate is 65.9%. Models read their own answers as more welcome than they turn out to be.

One figure deserves care. The Reject label was applied only when the user said plainly that they were refusing the response. Answers waved off in silence never enter the 15.0%, which makes that number closer to a floor on real refusal.

Pebblous scores the quality of AI training data with DataClinic. Putting quality into numbers requires the outcome to travel with the data: what was used, and what was thrown away. When a record of AI use stops at the question and the answer, that verdict has to be written in by hand afterwards.

Chat logs pile up by the terabyte, and the stretch where the verdict is reached is not in them.

▶ Read: https://blog.pebblous.ai/blog/kolab-human-agent-collaboration-dataset/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #Kolab #AIAgent #AgentBenchmark #HumanAICollaboration #UniversityOfMinnesota

---

## Twitter/X (KO)

미네소타대 연구진이 전문가들의 작업 화면을 115시간 녹화해 Kolab을 공개했습니다. AI가 내놓은 답이 채팅창을 떠난 뒤 그대로 쓰이는지, 고쳐 쓰이는지, 버려지는지를 센 데이터입니다.

전문가가 고치지 않고 그대로 쓴 답은 65.9%였습니다. 그런데 이 결과를 미리 맞혀 보라고 하자 프런티어 모델 어느 쪽도 안정적으로 맞히지 못했습니다.

https://blog.pebblous.ai/blog/kolab-human-agent-collaboration-dataset/ko/

#페블러스 #데이터품질 #Kolab #AI에이전트

---

## Twitter/X (EN)

Researchers at the University of Minnesota recorded 115 hours of professionals at work and released it as Kolab. It counts what happens to an AI's answer after it leaves the chat window: used as-is, revised, or thrown away.

Experts used 65.9% of the answers without a change. Asked to forecast that outcome in advance, not one frontier model got it reliably right.

https://blog.pebblous.ai/blog/kolab-human-agent-collaboration-dataset/en/

#Pebblous #DataQuality #Kolab #AIAgent

---

## Facebook (KO)

붙여 넣고 나서 절반쯤을 다시 고쳤습니다.

AI에게 받은 답을 쓸 때 제가 가장 자주 하는 일입니다.

그런데 고친 자리는 어디에도 남지 않습니다.

기록으로 남는 것은 제가 무엇을 물었고 AI가 무엇이라 답했는지, 거기까지입니다.

10월 15일 미네소타대 연구진이 바로 그 바깥을 녹화한 데이터셋을 공개했습니다.

40개 직종 전문가 50명이 평소 하던 업무를 AI 에이전트와 함께 처리하는 장면입니다. 115시간이 넘습니다.

논문에는 건축가 한 명의 작업이 예로 실려 있습니다.

골조 도면을 올리고 전체 실 배치를 요청한 것이 녹화 24분대의 일입니다. AI는 치수가 들어간 평면 레이아웃을 돌려줬습니다.

그리고 58분 40초부터 72분 59초까지, 건축가는 마음에 든 조닝만 남기고 로비와 수납 동선을 고쳐 Revit에서 벽과 칸막이를 다시 세웠습니다.

논문은 이 장면을 에이전트가 직접 관찰할 수 없는 행동이라고 적었습니다.

이렇게 라벨을 붙여 보니 전문가가 고치지 않고 그대로 쓴 답이 65.9%였습니다.

나머지는 고쳐 쓰거나 버렸습니다.

다만 버렸다고 센 것은 거부한다고 입 밖에 낸 경우뿐입니다. 아무 말 없이 창을 닫은 쪽은 이 숫자에 들어오지 않습니다.

그리고 모델들에게 자기 답이 어느 쪽이 될지 미리 맞혀 보라고 했을 때, 여섯 모델 가운데 어느 쪽도 제대로 맞히지 못했습니다.

한 모델은 예제의 83.8%가 그대로 쓰일 것이라고 예측했습니다. 실제 비율보다 한참 높습니다.

자기 답이 환영받으리라고 믿는 쪽으로 기울어 있는 셈입니다.

"지난달 우리 팀이 AI에게 받은 답 가운데, 실제로 쓰인 것은 몇 개였습니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 품질을 수치로 매기려면 무엇이 쓰였고 무엇이 버려졌는지가 데이터에 함께 와야 합니다.

AI 사용 기록이 질문과 답까지만 남으면, 그 판정은 나중에 사람이 따로 적어 넣는 일이 됩니다.

쌓이는 쪽은 대화 로그이고, 비어 있는 쪽은 그 답이 그 뒤에 어떻게 됐는지입니다.

▶ 전문: https://blog.pebblous.ai/blog/kolab-human-agent-collaboration-dataset/ko/

#페블러스 #데이터클리닉 #데이터품질 #Kolab #AI에이전트 #미네소타대

---

## Facebook (EN)

I pasted the answer in, then rewrote about half of it.

That is the thing I do most often with what an AI hands me.

And the half I rewrote is recorded nowhere.

What survives is the question I asked and the answer that came back. That is where the record stops.

On 15 October, researchers at the University of Minnesota released a dataset built out of everything past that point.

Fifty professionals across 40 occupations, working through their ordinary jobs alongside an AI agent. More than 115 hours of it.

The paper walks through one architect's afternoon.

They uploaded a structural drawing and asked for a full room layout, around the 24-minute mark of the recording, and the agent returned a dimensioned floor plan.

Then, from 58:40 to 72:59, the architect kept the zoning they liked, reworked the lobby and storage circulation, and rebuilt the walls and partitions in Revit.

The paper calls that stretch an action the agent cannot directly observe.

Label all of it and 65.9% of the agent's answers turn out to have been used without a single change.

The rest were revised, or set aside.

Though the ones counted as set aside are only those the user refused out loud. Answers waved off in silence never reach the number.

Then the models were asked to say in advance which way their own answer would go, and none of the six could do it with any reliability.

One predicted that 83.8% of the examples would be used as they stood. The real share is a good deal lower.

They lean toward believing their work will be welcome.

"Of the answers our team took from an AI last month, how many were actually used?"

Pebblous scores the quality of AI training data with DataClinic. Putting quality into numbers requires the outcome to arrive with the data: what was used, and what was discarded.

When a record of AI use stops at the question and the answer, that verdict has to be written in by hand afterwards.

What accumulates is the conversation. What stays empty is what became of the answer.

▶ Full piece: https://blog.pebblous.ai/blog/kolab-human-agent-collaboration-dataset/en/

#Pebblous #DataClinic #DataQuality #Kolab #AIAgent #UniversityOfMinnesota
