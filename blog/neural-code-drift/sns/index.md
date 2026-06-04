# SNS 홍보 글: 흔들리는 뉴런, 안정적인 뇌 — 뇌와 LLM이 공유하는 해석 난제

> 소스: blog/neural-code-drift/ko/index.html
> 생성일: 2026-06-05
> URL KO: https://blog.pebblous.ai/blog/neural-code-drift/ko/
> URL EN: https://blog.pebblous.ai/blog/neural-code-drift/en/
> voice: sns-cover (LinkedIn/Twitter) | reflective (Facebook)

---

## LinkedIn (KO)

뉴런이 어제와 오늘, 같은 자극에 다르게 반응한다.

오류가 아니다. Nature 2026은 이것을 **표상 드리프트(representational drift)**라고 부른다. 2025년 Climer 등은 감각 환경과 행동을 엄격하게 통제한 실험에서, 해마 장소세포의 반응 패턴이 외부 요인과 무관하게 수 일에 걸쳐 재구성된다는 것을 확인했다. 드리프트는 실험 잡음이 아니라 해마 코딩의 내재적 특성이었다.

같은 해 Doris Tsao 연구팀이 IT 피질에서 발견한 것은 더 충격적이었다. 단일 뉴런이 약 20밀리초 안에 코딩 방식을 전환한다. "이것이 얼굴인가?"를 처리하는 탐지 코드에서 "누구의 얼굴인가?"를 분류하는 식별 코드로. 반세기 동안 유지되어온 "뉴런은 고정 튜닝 함수를 갖는다"는 가정이 직접 반박된 것이다.

LLM도 같은 문제를 다른 축에서 겪는다. 하나의 인공 뉴런이 "야구"와 "식료품 목록"처럼 의미적으로 무관한 여러 개념에 동시 반응하는 polysemantic neuron 현상이다. 개별 뉴런이 하나의 역할을 한다는 직관은 뇌와 LLM 모두에서 무너지고 있다.

그런데 우리는 왜 안정적으로 세상을 인지하는가. 답은 집단 코딩의 기하학에 있다. 개별 뉴런이 흔들려도, 집단 활동의 내부 구조는 보존된다. 불안정한 부품에서 안정적인 패턴을 읽어내는 것. 데이터 진단이 다루는 문제와 구조적으로 같다.

https://blog.pebblous.ai/blog/neural-code-drift/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #신경과학 #LLM #표상드리프트 #해석가능성 #NatureJournal #뇌과학

---

## LinkedIn (EN)

The neuron that fired for Jennifer Aniston in 2005 may not respond the same way today.

That is not a measurement glitch. Nature reported in 2026 that **representational drift**, the gradual reorganization of neural response patterns over days to weeks, is intrinsic to how the hippocampus codes. Climer et al. confirmed in 2025 that even under rigorous multisensory VR control, drift proceeds independent of any external variable. The brain rewrites its own code, on a schedule no one chose.

What Doris Tsao's lab found inside the IT cortex is stranger still. A single neuron can switch its coding scheme entirely within about 20 milliseconds, moving from broad face detection to individual face identity. Half a century of neuroscience assumed each neuron has a fixed tuning function. That assumption is now directly contradicted by data from the very brain region it relied on most.

Large language models face a structurally identical problem along a different axis. A single artificial neuron activates for "baseball" and "grocery list" simultaneously — polysemantic neurons, a consequence of compressing more concepts than there are neurons to store them. One unit, many meanings. The brain does it across time. LLMs do it across semantic space.

The answer to why we still perceive a stable world seems to lie in population geometry: individual neurons drift, but the internal structure of population activity is preserved. Extracting stable patterns from unstable components is, it turns out, a problem data science has been working on for years.

https://blog.pebblous.ai/blog/neural-code-drift/en/

#Pebblous #DataClinic #DataQuality #Neuroscience #LLM #RepresentationalDrift #Interpretability #NatureJournal #BrainScience #MechanisticInterpretability

---

## Twitter/X (KO)

뇌와 LLM이 같은 문제를 풀고 있다.

뉴런은 생각보다 훨씬 불규칙하게 발화한다. IT 피질 단일 뉴런이 20ms 안에 코딩 방식을 전환하고(Nature 2026), 해마 장소세포는 수 일에 걸쳐 발화 패턴을 재구성한다. LLM의 polysemantic neuron과 구조적으로 같은 해석 난제다.

그래도 우리는 안정적으로 세상을 인지한다. 그 이유가 집단 기하학에 있다는 것이 흥미롭다.

https://blog.pebblous.ai/blog/neural-code-drift/ko/

#표상드리프트 #LLM #신경과학 #데이터클리닉

---

## Twitter/X (EN)

A single neuron can switch its entire coding scheme in 20 milliseconds (Nature 2026).

Turns out brains and LLMs face the exact same interpretability problem. Individual units are unreliable. Stability lives in the geometry of what they do together.

https://blog.pebblous.ai/blog/neural-code-drift/en/

#RepresentationalDrift #LLM #Neuroscience #DataClinic

---

## Facebook (KO)

"이 뉴런은 할머니를 인식한다."

1960년대 신경과학자 Jerry Lettvin의 반쯤 농담에서 시작된 이 상상은, 2005년 UCLA에서 Jennifer Aniston에게만 반응하는 뉴런이 실제로 발견되면서 잠시 진지하게 받아들여졌습니다. 한 뉴런, 한 역할. 단정하고 직관적인 그림이었습니다.

그런데 2026년 Nature가 보고한 것은 그 그림의 균열이었습니다.

같은 환경, 같은 행동, 같은 자극. 그런데 뉴런의 반응 패턴은 날마다 바뀌었습니다. Climer 연구팀은 감각 환경을 완벽하게 통제해도 해마 장소세포의 코드가 스스로 재구성된다는 것을 확인했고, Doris Tsao 연구팀은 단일 IT 피질 뉴런이 20밀리초 안에 코딩 방식을 전환한다는 것을 보여줬습니다. 뉴런은 고정된 역할을 갖고 있다는 가정이, 그 가정의 대표 증거였던 바로 그 영역에서 반박된 셈입니다.

이상한 것은, 우리가 여전히 안정적으로 세상을 인지한다는 사실입니다.

연구자들이 내놓는 답은 집단 기하학이었습니다. 개별 뉴런이 흔들려도, 수백 개 뉴런의 집단 활동이 그리는 기하학적 구조는 시간이 지나도 보존됩니다. 오케스트라 연주자들이 자리를 바꿔 앉아도 교향곡의 화성 구조가 사라지지 않는 것처럼. 불안정한 부품에서 안정적인 패턴이 나온다는 것, 이것이 어떻게 가능한지는 뇌과학도, AI 해석가능성 연구도, 데이터 진단도 지금 동시에 묻고 있는 질문입니다.

어쩌면 안정성이란 부품에서 오는 것이 아니라, 부품들이 함께 만드는 구조에서 오는 것일지도 모르겠습니다.

https://blog.pebblous.ai/blog/neural-code-drift/ko/

#페블러스 #데이터클리닉 #신경과학 #표상드리프트 #해석가능성

---

## Facebook (EN)

There was a moment, early in reading this material, where a simple question stopped me.

If the same neuron can respond differently to the same face tomorrow than it did today, not because the face changed or the experiment was flawed but simply because that is how the hippocampus works, then what exactly is a "memory"? What is the thing that persists?

The 2025 Climer study used virtual reality to hold every variable constant: the room, the smells, the task, the behavior. And still, the hippocampal place cells rewrote their firing patterns over days. Drift was not an artifact. It was, the researchers concluded, intrinsic to hippocampal coding. Meanwhile, Doris Tsao's lab found that in the inferotemporal cortex, a single neuron can switch its coding scheme entirely within about 20 milliseconds. Detection, then identification. Two different computations, one cell, a blink of time apart.

What I found quietly unsettling about all of this is how it mirrors a problem in large language models.

In LLMs, a single artificial neuron can activate for "baseball" and "grocery list" simultaneously, not because it is confused but because there are more concepts than neurons to hold them. The brain does something similar across time. LLMs do it across semantic space. The interpretability researchers who study each field have arrived, without coordinating, at the same tools: population-level analysis, geometric representations, feature decomposition rather than neuron-by-neuron inspection.

The reason we still perceive a stable world, despite all this, seems to lie in what population geometry preserves. Individual units are unreliable. The structure they create together, apparently, is not.

I keep thinking about what that means for how we build systems meant to understand things.

https://blog.pebblous.ai/blog/neural-code-drift/en/

#Pebblous #DataClinic #Neuroscience #RepresentationalDrift #Interpretability
