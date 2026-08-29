# SNS 홍보 글: 시연으로 가르친 하네스 사용법이 새 환경에서 밀렸다

> 소스: report/agent-harness-policy-learning-2026-08/ko/index.html
> 생성일: 2026-08-29
> URL (KO): https://blog.pebblous.ai/report/agent-harness-policy-learning-2026-08/ko/
> URL (EN): https://blog.pebblous.ai/report/agent-harness-policy-learning-2026-08/en/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective

---

## LinkedIn (KO)

에이전트에게 외부 메모리를 잘 쓰는 법을 시연으로 가르쳤더니, 처음 보는 환경에서 성적이 오히려 내려갔다.

메타 AI와 일리노이대 어배너-샴페인 연구진이 8월 5일 공개한 EvoHarness-RL 논문이다. 에이전트가 외부 작업공간을 언제 읽고 언제 쓸지를, 사람이 프롬프트로 지정하는 대신 정책이 직접 배우게 했다.

하네스를 프롬프트로 붙여 준 소형 모델은 처음 보는 방 배치에서 77.6%를 냈다. 교사의 사용 습관을 지도학습으로 배우고 나자 69.4%로 내려갔다. 호출 한 번에 에피소드 스텝 하나를 물린 강화학습까지 거치고 나서야 86.6%로 올라섰다.

학습 데이터는 게임 500판을 돌려 성공한 87개 궤적이었다. 그 안에서 교사가 가장 자주 보여 준 행동은 진행 상황 기록이었는데, 비용을 물리자 가장 먼저 사라진 것도 그 행동이었다. 무엇을 버릴지는 사람이 규칙으로 정해 준 적이 없다.

다만 실험은 ALF월드 하나뿐이다. 이 벤치마크의 처음 보는 방 구간은 다른 논문이 보고한 평범한 LoRA 베이스라인이 이미 94%대에 올라 있는 판이다. 저자들도 부록에서 이 결과를 보편적인 하네스 사용 법칙으로 읽지 말라고 적어 두었다.

데이터를 다루는 쪽에서 이 논문의 핵심 숫자는 96.9%가 아니라 87이다. 데이터를 더 넣어서 갈린 것이 아니라, 그 데이터가 무엇을 시연하고 있었는지가 갈랐다.

▶ 전문: https://blog.pebblous.ai/report/agent-harness-policy-learning-2026-08/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI에이전트 #에이전트메모리 #강화학습 #EvoHarnessRL #Meta #ALFWorld

---

## LinkedIn (EN)

Teaching an agent how to use its external memory, by demonstration, made it worse in rooms it had never seen.

EvoHarness-RL, released on 5 August by Meta AI and the University of Illinois Urbana-Champaign, lets an 8B policy learn when to read and write its own external workspace, instead of having a human specify that in a prompt.

Given the harness through a prompt alone, the model scored 77.6% on unseen ALFWorld layouts. After supervised fine-tuning on a teacher's demonstrated harness use, it scored 69.4%. Only after reinforcement learning charged one episode step for every harness call did it reach 86.6%.

The training set was 87 successful trajectories filtered from 500 games, and the action the teacher demonstrated most often was committing progress. Once calls cost something, that was the first habit to disappear. No one wrote a rule about what to drop.

The caveats are real. The only environment is ALFWorld, whose unseen split already sits above 94% for a plain LoRA baseline reported by another lab. The authors state in an appendix that this should not be read as a universal law of harness use.

For anyone working on data, the number that matters here is not 96.9% but 87. What separated the runs was not how much data went in, but what that data was demonstrating.

▶ Read: https://blog.pebblous.ai/report/agent-harness-policy-learning-2026-08/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIAgents #AgentMemory #ReinforcementLearning #EvoHarnessRL #Meta #ALFWorld

---

## Twitter/X (KO)

하네스를 잘 쓰는 법을 시연으로 가르쳤더니 처음 보는 환경에서 성적이 내려갔다. 77.6%에서 69.4%로. 호출마다 비용을 물린 강화학습을 거치고 나서야 다시 올라섰다.

새 환경에서 갈린 것은 데이터의 양이 아니라 그 데이터가 무엇을 시연하고 있었는가였다.

https://blog.pebblous.ai/report/agent-harness-policy-learning-2026-08/ko/

#페블러스 #AI에이전트 #EvoHarnessRL #Meta

---

## Twitter/X (EN)

An agent taught to use its harness by demonstration got worse in unseen rooms. 77.6% down to 69.4%. It recovered only after reinforcement learning charged a step for every call.

What separated the runs was not how much data went in, but what that data was demonstrating.

https://blog.pebblous.ai/report/agent-harness-policy-learning-2026-08/en/

#Pebblous #AIAgents #EvoHarnessRL #Meta

---

## Facebook (KO)

"이 단계가 끝나면 진행 상황을 파일에 기록해 두세요."

에이전트를 붙여 본 팀이라면 프롬프트 어딘가에 이런 문장을 한 번쯤 적어 두었을 것입니다.

저도 그렇습니다. 언제 기록하고 언제 지난 기록을 다시 꺼내 볼지를, 결국 사람이 문장으로 정해 줍니다.

메타 AI와 일리노이대 연구진이 이달 초 공개한 논문은 그 문장을 걷어냈습니다. 교사 모델이 잘 해낸 게임 87판을 추려 그 사용 습관을 학생 모델에게 가르쳤고, 그다음에는 호출 한 번마다 걸음 하나를 쓰게 해서 값을 치르게 했습니다.

시연으로 배운 습관은 처음 보는 방에서 오히려 짐이 되었습니다. 잘 쓰는 법을 배우기 전이 배운 뒤보다 나았습니다.

교사에게서 그대로 옮겨 온 이 사용 리듬을 저는 '물려받은 습관'이라고 불러 봅니다. 익숙한 방에서는 유능하고, 낯선 방에서는 그저 낭비가 되는 것.

값을 치르게 하자 가장 먼저 지워진 것은, 교사가 가장 자주 보여 주었던 바로 그 습관이었습니다. 기록하기.

프롬프트에 대문자로 반드시 남기라고 못 박아 둔 메모도 함께 사라졌습니다.

"우리가 프롬프트에 적어 둔 규칙은, 모델에게 어떤 지위의 문장일까요?"

무엇을 버릴지 사람이 다시 정해 준 적은 없습니다. 비용이 알려 주었을 뿐입니다.

페블러스가 이 논문에서 가장 오래 들여다본 숫자는 96.9%가 아니라 87이었습니다. 500판에서 골라낸 87개. 그 87개가 무엇을 시연하고 있었는지가 새 환경의 성패를 갈랐습니다. 학습 데이터의 편향이 양에서 오지 않았다는 뜻이기도 합니다.

무엇을 남기고 무엇을 버릴 것인가, 그리고 그 판정의 근거를 어디에서 가져올 것인가. 데이터 품질을 진단해 온 자리에서 오래 붙들어 온 질문과 같습니다.

이 논문의 답은 비용이었습니다. 다른 답이 어디에 있을지, 에이전트를 운영해 보신 분들과 같이 생각해 보고 싶습니다.

전문 → https://blog.pebblous.ai/report/agent-harness-policy-learning-2026-08/ko/

#페블러스 #데이터클리닉 #AI에이전트 #에이전트메모리 #AIReadyData #EvoHarnessRL #Meta

---

## Facebook (EN)

"When this step is done, write the progress to the file."

If you have ever wired up an agent, a sentence like this is probably sitting somewhere in your prompt.

Mine too. When to log, and when to go back and read what was logged, is something a person still decides in a sentence.

A paper released earlier this month by Meta AI and the University of Illinois takes that sentence out and lets the model learn the decision instead. A teacher model played, 87 successful games were kept, the student was taught those habits directly, and then every call to the harness was made to cost one step of the episode.

The habits learned from demonstration became a burden in rooms the model had never seen. It did better before it was taught how to use the harness well than after.

I have started thinking of that borrowed rhythm as an "inherited habit": competent in the familiar room, pure waste in the unfamiliar one.

Once calls cost something, the first habit to be erased was the one the teacher had demonstrated most. Logging progress.

The notes the prompt had insisted on, in capital letters, went with it.

"What standing does a rule we wrote into a prompt actually have, for the model?"

Nobody rewrote the rule about what to keep and what to drop. A cost signal settled it.

The number we sat with longest was not 96.9% but 87. Eighty-seven trajectories kept out of 500 games. What those 87 were demonstrating is what decided the unfamiliar rooms, which is another way of saying the bias in training data did not come from its volume.

What to keep and what to discard, and where the grounds for that judgment come from. It is the same question we have been holding from the data quality side for years.

This paper's answer was cost. I would like to think about where the other answers are, alongside anyone running agents in production.

Read the full piece → https://blog.pebblous.ai/report/agent-harness-policy-learning-2026-08/en/

#Pebblous #DataClinic #AIAgents #AgentMemory #AIReadyData #EvoHarnessRL #Meta
