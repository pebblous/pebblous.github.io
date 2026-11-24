# SNS 홍보 글: 공격 실험 PIPETTE, 많이 뚫는 공격이 좋은 공격일까?

> 소스: blog/pipette-prompt-injection-purple-teaming/
> 생성일: 2026-11-25
> URL: https://blog.pebblous.ai/blog/pipette-prompt-injection-purple-teaming/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

공격을 두 배 많이 뚫은 레드팀의 기록으로 방어를 배운 에이전트가, 절반만 뚫은 기록으로 배운 쪽보다 처음 보는 공격에 더 많이 뚫렸다.

워털루대 연구진이 arXiv에 올린 PIPETTE는 프롬프트 인젝션 레드팀과 방어 학습을 한 바퀴로 묶어 돌린 뒤 이 역전을 수치로 보고한다. Qwen3-4B에서 학습 중 누적 성공률 68.75%를 낸 레드팀의 공격 기록으로 배운 에이전트는 처음 보는 공격에 최악 47.5%를 내줬고, 성공률이 그 절반이던 레드팀의 기록으로 배운 쪽은 27.5%였다.

원인으로 지목된 것은 전략 수준의 모드 붕괴다. 강화학습 공격자가 한 번 통하는 수법을 찾으면 낱말만 바꿔 그 변형을 계속 들고 오는 것이 보상을 받는 가장 확실한 길이 되고, 그래서 기록은 쌓여도 안에 든 수법은 몇 가지에 머문다. 전략의 새로움에 보상을 준 데이터로 가르치자 최악 성공률은 20.0%로 내려갔고, 공격이 없는 평범한 과제를 해내는 비율은 61.86%에서 64.95%로 오히려 올랐다.

조건은 좁다. 시험한 모델은 27B 이하이고 퍼플티밍은 한 라운드만 돌렸다. 지금까지 확인된 외부 논평 한 건인 클라우드 보안 연합의 리서치 노트는 평가 과제쌍이 40개라 2.5%p 차이가 과제 한 건이라는 점도 짚었다.

레드팀이 하는 일도 결국 학습 데이터를 만드는 작업이고, 그 데이터의 값어치는 몇 건을 모았는지가 아니라 서로 다른 무엇을 덮었는지에서 나온다. 페블러스가 DataClinic으로 AI 학습 데이터의 품질을 진단할 때 보는 축도 그쪽이다.

▶ 전문: https://blog.pebblous.ai/blog/pipette-prompt-injection-purple-teaming/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #PIPETTE #프롬프트인젝션 #AI에이전트 #AI안전 #강화학습 #AgentDojo

---

## LinkedIn (EN)

An agent that learned its defense from a red team with twice the attack success rate was breached more often by attacks it had never seen.

PIPETTE, posted to arXiv by researchers at the University of Waterloo, runs prompt-injection red teaming and defense training inside a single loop and reports that reversal in numbers. On Qwen3-4B, the agent trained on records from a red team with a 68.75% cumulative success rate gave up 47.5% in the worst case against unseen attacks. The agent trained on a red team that scored half as high gave up 27.5%.

The cause the authors name is mode collapse at the level of strategy. Once a reinforcement learning attacker finds a trick that works, rewording that trick is the surest way to keep earning reward, so the pile of records grows while the number of distinct methods inside it does not. Rewarding genuinely new strategies instead brought the worst case down to 20.0%, and the share of ordinary unattacked tasks the agent completed rose from 61.86% to 64.95%.

The conditions are narrow. No model above 27B was tested, and the purple-teaming loop was run once. The Cloud Security Alliance, in the one outside review published so far, notes that with 40 task pairs in the evaluation a 2.5-point gap is a single task.

Red teaming is, at bottom, a data collection job, and what that data is worth comes from how many distinct things it covers rather than how much of it there is. That is the axis Pebblous works on in diagnosing the quality of AI training data with DataClinic.

▶ Read: https://blog.pebblous.ai/blog/pipette-prompt-injection-purple-teaming/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #PIPETTE #PromptInjection #AIAgent #AISafety #RedTeaming #AgentDojo

---

## Twitter/X (KO)

공격을 두 배 많이 뚫은 레드팀의 기록으로 방어를 배운 에이전트가 처음 보는 공격에 47.5%를 내줬다. 절반만 뚫은 기록으로 배운 쪽은 27.5%였다.

레드팀도 결국 학습 데이터를 만드는 일이고, 건수와 성공률은 그 데이터의 쓸모를 재지 못한다.

https://blog.pebblous.ai/blog/pipette-prompt-injection-purple-teaming/ko/

#페블러스 #데이터품질 #PIPETTE #프롬프트인젝션

---

## Twitter/X (EN)

An agent trained on red-team data with twice the attack success rate gave up 47.5% to unseen attacks. The data that scored half as high left an agent at 27.5%.

Red teaming is a data collection job, and counts do not measure what the data is worth.

https://blog.pebblous.ai/blog/pipette-prompt-injection-purple-teaming/en/

#Pebblous #DataQuality #PIPETTE #PromptInjection

---

## Facebook (KO)

레드팀을 한번이라도 돌려 본 팀이라면 보고서 맨 윗줄에 무엇이 올라가는지 아실 겁니다.

공격이 몇 번 통했는가.

이번 달에 몇 건을 뚫었고 지난달보다 얼마나 늘었는가. 저도 그 줄을 성과로 읽어 왔습니다.

PIPETTE라는 논문이 그 줄을 흔들었습니다. 공격을 두 배 많이 뚫은 레드팀의 기록으로 방어를 가르쳤더니, 절반만 뚫은 기록으로 가르친 쪽보다 처음 보는 공격에 더 많이 뚫렸습니다.

원인으로 지목된 것은 전략 수준의 모드 붕괴입니다. 강화학습으로 돌아가는 공격자가 한 번 통하는 수법을 찾으면, 그 수법의 낱말만 바꿔 계속 들고 오는 것이 보상을 받는 가장 확실한 길이 됩니다. 문장은 수천 개로 늘어나는데 안에 든 수법은 몇 가지에 머뭅니다. 적대적 학습 쪽에서 보면 교재에 같은 문제가 수천 번 들어 있는 상황입니다.

"우리가 쌓은 것은 양이 많은 겁니까, 골고루인 겁니까?"

데이터를 모으는 팀이면 어디서든 한 번쯤 받아 보는 질문입니다. 결측과 이상치는 한 행에서 보이지만, 중복과 편중은 행을 모아야 보입니다. 같은 수법의 변형 수천 건은 한 건씩 보면 전부 유효한 공격이고 전부 성공으로 기록되지만, 모아 놓고 보면 중복입니다. 그리고 중복은 가르칠 것이 없는 데이터입니다.

논문과 외부 논평이 같이 내놓은 축은 '덮은 범위'입니다. 성공 건수 옆에, 그 건수가 서로 구별되는 수법 몇 가지에서 나왔는지를 같이 적으라는 것입니다.

조건은 좁습니다. 27B 이하 모델, 퍼플티밍 한 라운드, 좁은 공격 예산 위에 선 결과입니다. 클라우드 보안 연합이 그 점을 먼저 짚기도 했습니다. 다만 조건이 좁다는 것과 교훈이 좁다는 것은 다른 말인 것 같습니다.

안전을 가르치는 데이터도 결국 데이터입니다. 페블러스가 데이터 품질을 진단하며 들고 다니는 질문도 같은 것이고, 이번에는 그 질문이 안전 영역에서 숫자를 달고 돌아왔습니다.

▸ https://blog.pebblous.ai/blog/pipette-prompt-injection-purple-teaming/ko/

#페블러스 #PIPETTE #프롬프트인젝션 #AI안전 #AI에이전트 #데이터품질

---

## Facebook (EN)

If you have ever run a red team, you know what goes on the top line of the report.

How many attacks got through.

How many this month, and how much more than last month. I had read that line as the result of the work too.

A paper called PIPETTE unsettled it. Train a defense on the records of a red team that broke through twice as often, and the agent came out weaker against attacks it had never seen than one trained on the records of a red team that broke through half as often.

The cause the authors name is mode collapse at the level of strategy. Once a reinforcement learning attacker finds a trick that works, rewording that same trick is the surest way to keep earning reward. The sentences multiply into the thousands while the methods inside them stay few. In adversarial training terms, it is a textbook with the same problem printed several thousand times.

"Is what we have collected large, or is it even?"

Anyone who gathers data for a living has been asked that. Missing values and outliers show up in a single row. Duplication and skew only appear once the rows are stacked. A thousand variants of one trick are, row by row, all valid attacks and all recorded as successes. Stacked, they are duplicates. And a duplicate has nothing left to teach.

The axis the paper and its one outside reviewer both propose is coverage: next to the count of successes, report how many genuinely distinct methods that count came from.

The conditions are narrow. Nothing above 27B, one round of the loop, a small attack budget. The Cloud Security Alliance said so before anyone else did. Still, a narrow set of conditions and a narrow lesson are not the same thing.

Data that teaches safety is data. The question Pebblous carries into diagnosing data quality is the same one, and this time it came back from the safety side with numbers attached.

▸ https://blog.pebblous.ai/blog/pipette-prompt-injection-purple-teaming/en/

#Pebblous #PIPETTE #PromptInjection #AISafety #AIAgent #DataQuality
