# SNS 홍보 글: 배울수록 무너지는 에이전트

> 소스: blog/self-evolving-agent-capability-collapse/ko/index.html
> 생성일: 2026-06-11
> URL(KO): https://blog.pebblous.ai/blog/self-evolving-agent-capability-collapse/ko/
> URL(EN): https://blog.pebblous.ai/blog/self-evolving-agent-capability-collapse/en/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

스스로 경험을 쌓아 똑똑해진다던 자가진화 AI 에이전트가, 자기 경험으로 반복 학습할수록 오히려 능력이 무너졌습니다.

2026년 6월 공개된 논문이 경험 전이를 한 번이 아니라 여러 번 돌려 봤더니, 한 설정에서 웹 추론 정확도가 1회차 23.2%에서 3회차 8.5%로 주저앉았습니다. 연구진은 이 퇴행에 점진적 능력 붕괴라는 이름을 붙였습니다.

붕괴는 세 자리에서 자랍니다. 무엇을 경험으로 남기는가, 언제 꺼내 쓰는가, 누구의 풀이를 보고 배우는가입니다. 세부 사실만 외운 경험은 다음 상황에서 재사용 가능한 비율이 3.7%에 그쳤고, 재사용 가능한 원칙으로 추상화한 경험은 84%였습니다.

처방은 의외로 단순했습니다. 잘 만들어진 교사의 성공 궤적에서 off-policy로 증류하게 했더니, 붕괴하던 곡선이 30.6%에서 33.1%로 향상하는 곡선으로 돌아섰습니다.

결국 자기학습의 안정성을 가른 것은 더 똑똑한 알고리즘이 아니라, 무엇을 경험으로 남기느냐는 데이터 품질이었습니다. 가장 자율적으로 보이는 학습조차 잘 정제된 외부 기준 없이는 표류합니다.

↗ 분석 전문은 댓글에

#페블러스 #데이터품질 #AIReadyData #데이터클리닉 #AI에이전트 #자가진화 #LLM #ContinualLearning #OffPolicyDistillation #에이전트학습

---

## LinkedIn (EN)

A self-evolving AI agent, the kind meant to get smarter by accumulating its own experience, instead grew weaker the more it relearned from itself.

A paper released in June 2026 ran experience transfer not once but repeatedly. In one setting, web-reasoning accuracy fell from 23.2% in the first iteration to 8.5% by the third. The researchers named the regression progressive capability collapse.

The collapse grows in three places: what the agent keeps as experience, when it pulls that experience back out, and whose trajectory it learns from. Experiences that memorized situational details stayed reusable only 3.7% of the time, while those abstracted into transferable principles held at 84%.

The cure was surprisingly plain. Distilling off-policy from a strong teacher's successful trajectories turned the collapsing curve into a rising one, from 30.6% to 33.1% across iterations.

What stabilized self-learning was not a cleverer algorithm but the quality of what the agent chose to keep. Even the most autonomous learning drifts without a well-curated external standard.

↗ Full analysis in the comments

#Pebblous #DataQuality #AIReadyData #DataClinic #AIAgent #SelfEvolving #LLM #ContinualLearning #OffPolicyDistillation #AgentLearning

---

## Twitter/X (KO)

스스로 배워 똑똑해진다던 AI 에이전트가, 자기 경험으로 반복 학습하자 정확도가 23.2%에서 8.5%로 무너졌습니다.

처방은 잘 정제된 교사 궤적에서 배우게 하는 것. 자기학습조차 결국 데이터 품질 문제였습니다.

https://blog.pebblous.ai/blog/self-evolving-agent-capability-collapse/ko/

#페블러스 #AI에이전트 #자가진화 #데이터품질 #OffPolicyDistillation

---

## Twitter/X (EN)

A self-evolving AI agent was supposed to get smarter on its own. Relearning from its own experience, its accuracy collapsed from 23.2% to 8.5%.

The cure: learn from well-curated teacher trajectories. Even self-learning came down to data quality.

https://blog.pebblous.ai/blog/self-evolving-agent-capability-collapse/en/

#Pebblous #AIAgent #SelfEvolving #DataQuality #OffPolicyDistillation

---

## Facebook (KO)

"스스로 배우는 AI"라는 말에는 묘한 안도감이 있습니다.

데이터를 일일이 정제하지 않아도, 에이전트가 알아서 경험을 쌓고 점점 유능해질 거라는 기대.

그런데 6월에 나온 한 논문은 그 안도감을 조용히 흔듭니다.

자기 경험으로 학습을 반복시켰더니, 에이전트는 나아지기는커녕 회를 거듭할수록 능력이 깎여 나갔습니다. 한 설정에서는 정확도가 23.2%에서 8.5%로 주저앉았습니다.

연구진이 찾아낸 자리는 세 군데였습니다. 무엇을 경험으로 남기는가, 언제 그것을 꺼내 쓰는가, 누구의 풀이를 보고 배우는가. 남이 쓴 일기를 자기 경험처럼 베껴 적다 보면 정작 자기 판단의 결이 흐려지는 것과 비슷한 일이, 에이전트 안에서 벌어지고 있었습니다.

처방은 거창한 알고리즘이 아니었습니다. 잘 만들어진 교사의 성공 궤적에서 배우게 하자, 무너지던 곡선이 다시 올라가기 시작했습니다. 자기학습의 닻은 자기 자신이 아니라, 무엇을 좋은 경험으로 남길지 가려 주는 외부의 기준이었던 셈입니다.

그래서 오래된 질문이 에이전트 시대의 언어로 다시 돌아옵니다.

"스스로 배우는 AI에게도 왜 여전히 잘 정제된 데이터가 필요한가?"

페블러스가 데이터의 품질을 들여다보는 이유도 여기서 멀지 않습니다.

#페블러스 #데이터품질 #AIReadyData #AI에이전트 #자가진화 #ContinualLearning

---

## Facebook (EN)

There is a quiet comfort in the phrase "AI that learns on its own."

The hope that an agent will accumulate its own experience and grow more capable, without anyone curating the data by hand.

A paper from June 2026 unsettles that comfort.

When the agent relearned repeatedly from its own experience, it did not improve. It degraded, iteration after iteration. In one setting, accuracy slid from 23.2% down to 8.5%.

The researchers traced the failure to three places. What the agent keeps as experience, when it pulls that experience back out, and whose trajectory it learns from. It was a little like someone copying another person's diary as if it were their own memory, slowly losing the texture of their own judgment in the process.

The cure was not a grander algorithm. When the agent learned from a strong teacher's successful trajectories instead of its own missteps, the collapsing curve began to climb again. The anchor of self-learning turned out to be not the self, but an external standard that decides what counts as good experience.

So an old question returns, now spoken in the language of the agent era.

"Why does an AI that learns on its own still need well-curated data?"

That question is not far from why we at Pebblous keep looking closely at the quality of data.

#Pebblous #DataQuality #AIReadyData #AIAgent #SelfEvolving #ContinualLearning
