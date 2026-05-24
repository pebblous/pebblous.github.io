# SNS 홍보 글: Voyager: 스스로 배우는 AI의 기원

> 소스: report/voyager-lifelong-agent-2023/ko/index.html
> 생성일: 2026-05-24
> URL KO: https://blog.pebblous.ai/report/voyager-lifelong-agent-2023/ko/
> URL EN: https://blog.pebblous.ai/report/voyager-lifelong-agent-2023/en/
> voice: sns-cover (LinkedIn/Twitter/X), reflective (Facebook), sns-cover extended (Medium)

---

## LinkedIn (KO)

GPT-4가 처음으로 "스스로 배웠다"는 기록이 등장한 것은 게임 세계에서였습니다.

2023년 NeurIPS. NVIDIA와 Caltech 연구팀은 Minecraft라는 오픈 월드에 GPT-4를 얹은 에이전트를 놓아두었습니다. 목표도, 보상 함수도, 인간의 개입도 없었습니다. 에이전트는 나무를 캐는 법부터 시작해 다이아몬드 채굴까지 스스로 도달했고, 기존 baseline(ReAct, Reflexion, AutoGPT) 대비 유일 아이템 발견 **3.3배**, 기술 트리 달성 속도 **15.3배**, 새 월드 zero-shot transfer **100% 성공**(나머지 0%)을 기록했습니다.

왜 이 논문이 지금도 계속 인용(Semantic Scholar 1,641회)되는가. Voyager의 핵심 기여는 Minecraft에서 다이아몬드를 캤다는 결과가 아니라, 3요소 아키텍처(Automatic Curriculum + Skill Library + Self-Verification)가 "관찰 - 계획 - 실행 - 검증"이라는 보편적 학습 루프를 코드로 구현한 설계 청사진을 남겼기 때문입니다. 이 패턴은 Eureka(로보틱스), AI Scientist(과학), GR00T(휴머노이드), Hermes(다중 에이전트)로 그대로 이어졌습니다.

그러나 Voyager는 동시에 가장 중요한 질문을 남겼습니다. GPT-4가 자신의 성공을 스스로 판단하는 self-verification 구조는 Minecraft처럼 성공 기준이 명확한 환경에서는 작동하지만, 현실 세계로 이동할수록 "오염된 코드가 skill library에 축적되는" Error Fossilization 위험이 커집니다. 에이전트가 자율적일수록 독립적 데이터 품질 검증이 더 중요해집니다. 페블러스가 DataClinic을 통해 접근하는 지점이 바로 여기입니다.

전문 분석: https://blog.pebblous.ai/report/voyager-lifelong-agent-2023/ko/

#페블러스 #DataClinic #데이터품질 #데이터저널리즘 #AI에이전트 #LLM #강화학습 #평생학습 #Voyager #NeurIPS2023 #GPT4 #GR00T

---

## LinkedIn (EN)

The first recorded moment a GPT-4 agent genuinely taught itself something was inside a video game.

NeurIPS 2023. NVIDIA and Caltech researchers dropped an agent into Minecraft's open world with no predefined goals, no reward functions, no human stepping in. It learned to chop wood, smelt iron, and mine diamonds entirely on its own — discovering **3.3x** more unique items than the ReAct baseline, reaching the Diamond tier while every other agent stalled at Wood or Stone, and achieving **100% zero-shot transfer success** to new worlds (versus 0% across all baselines). The paper has since been cited 1,641 times.

What made Voyager matter was not the Minecraft achievement itself, but the blueprint it left behind. Its three-component architecture — Automatic Curriculum, Skill Library, Self-Verification — implemented the universal "observe–plan–execute–verify" learning loop in executable code. That exact pattern has since propagated to Eureka (robotics reward design), AI Scientist (automated research), GR00T (humanoid agents), and Hermes (multi-agent self-evolution). Jim Fan, a Voyager co-author, has led this lineage at NVIDIA's GEAR Lab from Minecraft all the way to real production lines at Foxconn.

Yet Voyager also left the field's most consequential open question. Its self-verification structure — GPT-4 judging its own success — works when success criteria are binary and clear. Move into the real world, and contaminated skills accumulate in the library without detection. Huang et al. (ICLR 2024) demonstrated that LLM intrinsic self-correction actually degrades performance; GPT-4's hallucination rate in medical reference generation reaches 28.6%. The more autonomous the agent, the more critical independent verification becomes. That is the gap DataClinic is built to close.

Full analysis: https://blog.pebblous.ai/report/voyager-lifelong-agent-2023/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIAgent #LLM #LifelongLearning #PhysicalAI #Voyager #NeurIPS2023 #GPT4 #GR00T

---

## Twitter/X (KO)

GPT-4 기반 Minecraft 에이전트 Voyager, NeurIPS 2023에서 기존 baseline 대비 유일 아이템 3.3배, 새 월드 zero-shot transfer 100%(경쟁 모두 0%). 이 아키텍처가 GR00T·Hermes로 이어진 자율 에이전트 설계의 기원점입니다.

그런데 자가 검증 구조의 한계 — Error Fossilization — 는 지금도 해결되지 않았습니다.

https://blog.pebblous.ai/report/voyager-lifelong-agent-2023/ko/

#데이터품질 #AI에이전트 #Voyager #GPT4

---

## Twitter/X (EN)

Voyager (NeurIPS 2023): GPT-4 Minecraft agent with zero human intervention. 3.3x more unique items than ReAct. 100% zero-shot transfer to new worlds vs. 0% for every baseline. The blueprint that became GR00T and Hermes.

The open question it left — who verifies what a self-learning agent has learned — still stands.

https://blog.pebblous.ai/report/voyager-lifelong-agent-2023/en/

#DataQuality #AIAgent #Voyager #GPT4 #LifelongLearning

---

## Facebook (KO)

"스스로 배운다"는 말을 처음 들었을 때, 저는 그게 어떤 의미인지 한참 생각했습니다.

Voyager라는 이름의 에이전트가 Minecraft 세계에 놓였습니다.
아무도 목표를 알려주지 않았습니다.
아무도 보상을 설계하지 않았습니다.
그 에이전트는 나무를 캐는 법부터 시작했습니다.

그리고 인간의 개입 없이, 다이아몬드를 채굴하는 데까지 스스로 도달했습니다.

이 일이 벌어진 것은 2023년이었습니다.
NeurIPS에 발표된 논문 한 편이 이후 1,641번 인용되었고,
"관찰 - 계획 - 실행 - 검증"이라는 학습 루프의 설계 청사진이 되었습니다.

저는 이 논문에서 숫자만큼이나 하나의 질문이 오래 남았습니다.

"이 에이전트는 자신이 올바르게 배웠는지 어떻게 아는가?"

Voyager는 GPT-4에게 자기 성공을 스스로 판단하게 합니다.
Minecraft에서는 이것이 작동합니다.
다이아몬드를 캤는가, 아이템이 인벤토리에 들어왔는가 — 기준이 명확하기 때문입니다.

그러나 이 명확성이 사라지는 순간 무슨 일이 생기는가.
오염된 코드가 skill library에 축적되고,
그것이 다음 과제에 재사용되고,
오류가 전파됩니다.

연구자들은 이것을 'Error Fossilization'이라 불렀습니다.

Voyager에서 시작된 이 질문은 AI Scientist, Hermes, GR00T로 계보가 이어지는 내내 반복됩니다.
에이전트가 더 자율적이 될수록, 그 학습 데이터를 신뢰할 수 있는 기준선이 필요해집니다.

"에이전트가 스스로 학습할수록, 독립적인 검증이 더 중요해진다."

이 문장이 이 보고서의 결론입니다.
그리고 이 질문이 앞으로 어디까지 이어질지, 저는 아직 모릅니다.

https://blog.pebblous.ai/report/voyager-lifelong-agent-2023/ko/

#페블러스 #Voyager #AI에이전트 #DataClinic #DataGreenhouse #PebbloSim #데이터품질

---

## Facebook (EN)

When I first read the phrase "the agent taught itself," I wasn't sure what to make of it.

An agent named Voyager was placed into Minecraft.
No one told it what to achieve.
No one designed a reward.
It started by learning to chop wood.

And without a single human intervention, it reached diamond mining on its own.

This happened in 2023.
One NeurIPS paper. 1,641 citations and counting.
A learning loop — observe, plan, execute, verify — encoded not in abstract theory, but in running JavaScript.

What stayed with me wasn't the performance numbers.

It was a question the paper couldn't quite close:

"How does the agent know it has learned correctly?"

Voyager asks GPT-4 to judge its own success.
In Minecraft, this works.
The success criteria are binary — did you get the item or not?
That clarity is the condition that makes self-verification possible.

But what happens when that clarity disappears?

Contaminated code enters the skill library.
It gets retrieved and reused.
The error compounds.

The researchers called this phenomenon "Error Fossilization."

The question that originated in Voyager resurfaces in every step of the lineage that followed — AI Scientist, Hermes, GR00T.
Each system more autonomous than the last.
Each one more dependent on a verification layer it doesn't yet have.

"The more autonomously agents learn, the more critical independent verification becomes."

That is where this report lands.
Where the question goes from here, I think, is still open.

https://blog.pebblous.ai/report/voyager-lifelong-agent-2023/en/

#Pebblous #Voyager #AIAgent #DataClinic #DataGreenhouse #PebbloSim #DataQuality

---

## Medium (EN)

<!-- voice=sns-cover extended, ~900 words -->

**Voyager Taught Itself to Mine Diamonds. That Was the Easy Part.**

In 2023, NVIDIA and Caltech researchers placed a GPT-4-powered agent into Minecraft and watched what happened.

They gave it no instructions. No goals. No reward function. No human oversight.

The agent started by learning to chop wood. It progressed to crafting stone tools. Then iron. Then, without being told to, it mined diamonds — the highest tier in Minecraft's entire tech tree. Every other agent in the experiment — ReAct, Reflexion, AutoGPT — stopped at wood or stone.

The paper, published at NeurIPS 2023 under the name **Voyager**, has since accumulated 1,641 citations on Semantic Scholar and roughly 6,900 GitHub stars. But the reason researchers keep returning to it isn't the Minecraft achievement. It's what the architecture reveals about how autonomous agents can actually learn.

**The Blueprint**

Voyager's architecture has three components, and each one does something that sounds deceptively simple.

The first is the **Automatic Curriculum**: GPT-4 observes the agent's current state and proposes the next task. After "mine wood" comes "craft wooden planks," then "build a crafting table." The difficulty is calibrated to be slightly above the agent's current ability — the same principle educators call the Zone of Proximal Development, applied to code.

The second is the **Skill Library**: every successful behavior is converted into JavaScript code and stored. Each skill is indexed as an embedding vector alongside a natural language description, so when a new task arrives, similar skills can be retrieved and reused. After 160 iterations, the agent had accumulated dozens of reusable skills. This library is what made zero-shot transfer possible.

The third is **Iterative Prompting with Self-Verification**: after generated code runs in the environment, execution results — error messages, inventory changes, environmental feedback — are fed back to GPT-4. It revises the code and repeats until success. Success is judged by GPT-4 itself, cross-checked against objective environmental feedback.

What ties these three components together is a closed feedback loop. Each stage drives the next. The skill library grows. The agent's capabilities compound. And critically, none of this requires fine-tuning GPT-4. The entire system runs on prompt engineering alone.

**The Numbers**

The performance gap between Voyager and its baselines was not incremental. It was categorical.

Compared to ReAct, Voyager discovered 3.3x more unique items (63 vs. 19). It was the only system to reach Diamond tier — all others stopped at Wood. In zero-shot transfer to a new Minecraft world, Voyager solved every objective within 50 iterations. Every baseline scored zero.

The research team also conducted an ablation study, removing one component at a time. Removing the Automatic Curriculum collapsed item discovery. Removing the Skill Library eliminated zero-shot transfer entirely. Removing Self-Verification led to buggy code accumulating unchecked. Each component is load-bearing.

**The Lineage It Created**

Voyager is not an isolated result. It is the origin point of a design pattern that has since propagated across domains.

Jim Fan, a Voyager co-author, has led the direct line from Minecraft to real-world robotics at NVIDIA's GEAR Lab. Eureka (2024) used LLMs to automatically design robot reward functions in simulation, outperforming human-written rewards on over 80% of tasks. GR00T N1 (2025) generated 11 hours of synthetic data equivalent to 6,500 hours of real-world teleoperation training — a 591x efficiency ratio. That translates to roughly $10K versus $884K in data collection cost.

Parallel lineages emerged in science and multi-agent systems. AI Scientist (Nature 651, 2024) automated the full scientific research loop. Hermes extended Voyager's pattern to networks of self-evolving agents. In each case, the core structure — curriculum, skill accumulation, self-verification — remained intact. The domain changed. The architecture did not.

**The Question Voyager Left Open**

Here is the part that tends to get less attention.

Voyager's self-verification structure works in Minecraft because success criteria are binary: did the item appear in the inventory or not? That clarity is not a given. It is the specific condition that makes self-assessment reliable.

Huang et al. (ICLR 2024) demonstrated that LLM intrinsic self-correction — without external feedback — actually degrades performance. When GPT-4 judges its own outputs as correct or incorrect, it frequently changes right answers to wrong ones. In medical reference generation, GPT-4's hallucination rate was 28.6%, with precision at 13.4%.

In Voyager's skill library, the implications are concrete. If GPT-4 declares "success" on code that only partially worked — or only works under specific conditions — a contaminated skill enters the library permanently. The next time that skill is retrieved and reused, the error propagates. Then compounds. Researchers have called this dynamic **Error Fossilization**.

The spectrum of risk scales with ambiguity. Simulated robots face continuous reward functions rather than binary outcomes — medium risk. Scientific research involves complex judgments about reproducibility and novelty — high risk. Real-world robots navigating ambiguous environments face the highest Error Fossilization risk of all.

The lesson Voyager encodes: the more autonomous the agent, the more critical independent verification becomes.

This is the question DataClinic is built around. Not whether agents can learn autonomously — Voyager proved they can. But whether the data those agents generate can be trusted, and how to verify it from outside the agent's own judgment loop. Training data quality sets the upper bound of model performance. That principle applies equally when the training data is generated by the model itself.

The Physical AI market is projected to reach $15.24B by 2032 at a 47.2% CAGR. Foxconn is already deploying AI robots on Blackwell production lines. The question Voyager left open in 2023 is now a practical engineering challenge — not a theoretical one.

**[Read the full analysis →](https://blog.pebblous.ai/report/voyager-lifelong-agent-2023/en/)**

#Pebblous #DataClinic #DataQuality #DataJournalism #AIAgent #LifelongLearning #PhysicalAI #Voyager #NeurIPS2023 #GPT4 #GR00T #LLM
