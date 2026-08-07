# SNS 홍보 글: 멀티에이전트 협업의 득실을 가른 건 단일 에이전트의 실력이었다

> 소스: blog/multi-agent-single-agent-threshold/ko/index.html
> 생성일: 2026-07-28
> URL: https://blog.pebblous.ai/blog/multi-agent-single-agent-threshold/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

구글 딥마인드와 MIT가 멀티에이전트 협업의 성패를 가장 잘 예측하는 변수를 찾아냈다. 아키텍처도 툴 개수도 아닌, 단일 에이전트가 혼자서 그 태스크를 얼마나 잘 푸는가였다.

연구팀은 프롬프트와 툴, 컴퓨트 예산을 고정한 채 조정 구조와 모델 능력만 바꾸는 260개 통제 실험으로 이를 확인했다. 에이전트를 늘리면 자원도 함께 늘어나는 교란을 걷어내자, 협업의 순수한 효과가 드러났다.

핵심은 능력 포화 임계값이다. 단일 에이전트의 기준 성능이 약 45%를 넘어서면 에이전트를 더 붙여도 개선이 거의 사라졌다. 아직 서툰 모델에는 협업이 채울 빈틈이 있지만, 이미 잘하는 모델에는 그 여지가 별로 남지 않기 때문이다.

방향을 가른 건 태스크 구조였다. 독립적인 조각으로 쪼갤 수 있는 금융 추론에서는 협업이 성능을 80% 넘게 끌어올렸지만, 앞 단계에 기대는 순차 계획에서는 오히려 70% 가까이 떨어뜨렸다.

그래서 '에이전트를 몇 개 붙일까'는 아키텍처 취향이 아니라 측정 가능한 결정이 된다. 단일 에이전트 기준선을 먼저 재고, 태스크가 분해 가능한지 보고, 임계값은 우리 도메인에서 다시 확인하면 된다. 페블러스가 에이전트와 자율화를 늘 데이터 문제로 읽어온 이유도 여기에 있다.

▶ 전문: https://blog.pebblous.ai/blog/multi-agent-single-agent-threshold/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI에이전트 #멀티에이전트 #AI에이전트오케스트레이션 #GoogleDeepMind #MIT

---

## LinkedIn (EN)

Google DeepMind and MIT have identified the variable that best predicts whether multi-agent collaboration pays off. It is not the architecture or the number of tools, but how well a single agent solves the task on its own.

The team confirmed this across 260 controlled configurations that held the prompt, the tools, and the compute budget fixed while varying only the coordination structure and model capability. Once the confound of added resources was stripped away, collaboration's real effect came into view.

The finding is a capability-saturation threshold. Once a single agent's baseline accuracy climbs past roughly 45%, adding more agents brings almost no gain. A still-shaky model leaves gaps for collaboration to fill; a capable one leaves little room.

Task structure decided the direction. The same collaboration lifted decomposable financial reasoning by more than 80%, yet cut sequential planning, where each step leans on the last, by nearly 70%.

So "how many agents should we add" is not a matter of architectural taste but a measurable decision: measure the single-agent baseline, judge whether the task decomposes, and re-confirm the threshold on your own domain. This is why Pebblous has always read agents and autonomy as a data problem.

▶ Read: https://blog.pebblous.ai/blog/multi-agent-single-agent-threshold/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIAgent #MultiAgent #AgentOrchestration #GoogleDeepMind #MIT

---

## Twitter/X (KO)

멀티에이전트를 더 붙일지 말지를 가른 건 아키텍처가 아니라 단일 에이전트의 실력이었다.

구글 딥마인드·MIT의 260개 통제 실험 결과, 단일 에이전트 기준 성능이 약 45%를 넘으면 협업 이득이 사라졌다.

'몇 개 붙일까'는 취향이 아니라 측정의 문제다.

https://blog.pebblous.ai/blog/multi-agent-single-agent-threshold/ko/

#페블러스 #AI에이전트 #멀티에이전트 #GoogleDeepMind

---

## Twitter/X (EN)

What decides whether to add more agents is not the architecture but the single agent's skill.

In Google DeepMind and MIT's 260 controlled runs, once single-agent baseline accuracy passed about 45%, the benefit of collaboration disappeared.

"How many to add" is measurement, not taste.

https://blog.pebblous.ai/blog/multi-agent-single-agent-threshold/en/

#Pebblous #AIAgent #MultiAgent #GoogleDeepMind

---

## Facebook (KO)

에이전트 하나로 안 되면, 습관처럼 하나를 더 붙였습니다.

둘이 하나보다, 셋이 둘보다 낫겠지. 오케스트레이터를 얹으면 더 낫겠지. 지난 2년간 우리가 멀티에이전트를 대해 온 방식은 대체로 이런 믿음에 가까웠습니다.

그런데 구글 딥마인드와 MIT가 이 믿음을 정면으로 들여다봤습니다.

프롬프트도 툴도 컴퓨트 예산도 똑같이 묶어 둔 채, 오직 협업 구조만 바꿔 260번을 실험했습니다. 그러자 그동안 '협업 덕'이라 믿었던 점수 상승의 상당 부분이, 사실은 그저 자원을 더 태운 결과였다는 게 드러났습니다.

가장 오래 마음에 남은 건 이 대목이었습니다. 협업이 이득이 될지 손해가 될지를 가장 잘 예측한 변수가, 다름 아닌 단일 에이전트가 혼자서 얼마나 잘하느냐였다는 것. 이미 45% 선을 넘어 제법 잘 푸는 모델에는, 동료를 붙여도 채워 줄 빈틈이 별로 남아 있지 않았습니다.

문득 궁금해집니다. 우리가 붙여 온 그 많은 에이전트들은, 정말 필요해서 붙인 것이었을까요. 아니면 '많을수록 낫겠지'라는 짐작이었을까요. 페블러스가 에이전트와 자율화를 늘 데이터 문제로 봐 온 것도, 같은 질문 앞에 서 있었기 때문입니다.

협업의 값어치는 구조의 화려함이 아니라, 그것이 실제로 무엇을 바꿨는지로 갈립니다. 몇 개를 붙일지는, 어쩌면 그리기 전에 재어 볼 수 있는 숫자였는지도 모릅니다.

https://blog.pebblous.ai/blog/multi-agent-single-agent-threshold/ko/

#페블러스 #데이터품질 #AI에이전트 #멀티에이전트 #GoogleDeepMind

---

## Facebook (EN)

When one agent falls short, we tend to add another out of habit.

Two must beat one, three must beat two, and surely an orchestrator on top makes it better still. For much of the past two years, that quiet belief was how most of us treated multi-agent systems.

Then Google DeepMind and MIT looked the belief straight in the eye.

They ran 260 experiments that held the prompt, the tools, and the compute budget fixed, changing only the shape of the collaboration. And much of the score gain we had credited to teamwork turned out to be little more than the effect of burning more resources.

What stayed with me longest was this. The variable that best predicted whether collaboration would help or hurt was simply how well a single agent did on its own. For a model that already clears the 45% mark, there is not much of a gap left for a teammate to fill.

It makes you wonder. All those agents we kept adding, did we add them because we needed to, or because we assumed more would be better? Pebblous has stood before the same question, which is why we have always read agents and autonomy as a matter of data.

The worth of collaboration is decided not by how elaborate the structure looks, but by what it actually changes. How many agents to add may be a number we can measure before we ever draw the diagram.

https://blog.pebblous.ai/blog/multi-agent-single-agent-threshold/en/

#Pebblous #DataQuality #AIAgent #MultiAgent #GoogleDeepMind
