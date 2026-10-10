# SNS 홍보 글: BrickBench 레고 설계 시험, 검사 도구를 빼면 AI가 무너진다

> 소스: blog/brickbench-lego-design-benchmark/ko/index.html
> 생성일: 2026-10-11
> URL: https://blog.pebblous.ai/blog/brickbench-lego-design-benchmark/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

레고 설계 과제 300개를 전부 조립 가능하게 통과한 에이전트가 있다. 검사 도구를 치우자 같은 모델의 유효 설계가 40%로 내려갔고, 다른 모델은 한 개만 남았다.

스탠퍼드대학과 막스플랑크 지능시스템연구소, 인리아 연구진이 10월 8일 arXiv에 공개한 BrickBench다. 텍스트 한 줄을 주고 코딩 에이전트에게 실제 LDraw 부품으로 지을 수 있는 모형을 설계하게 시킨 뒤, 부품 요건을 채웠는지와 중력 아래에서 서 있는지를 잰다. 벤치마크와 같이 공개한 BrickAgent라는 작업 환경에는 검사기가 붙어 있어, 연결이 끊긴 자리와 겹친 부품과 무너지는 지점을 해당 부품을 짚어 돌려준다. 가중치도 과제도 그대로 두고 그 환경만 뺀 결과가 위 숫자다.

같이 읽어야 할 대목은 떨어지지 않은 쪽이다. 프롬프트를 얼마나 충족했는지와 디자인 점수는 거의 그대로였고, 한 모델은 검사기를 빼앗긴 쪽이 오히려 높았다. 지을 수 없을 뿐 더 그럴듯한 모형을 냈다는 뜻이다. 검사기가 떠받치고 있던 것은 조립 가능성이라는 축 하나였다.

사람과의 거리도 남아 있다. 레고에 익숙한 평가자 다섯 명에게 에이전트 설계와 사람 설계를 부품 수를 맞춰 짝지어 보여 주자, 360회 가운데 323회에서 사람 것을 집어냈다. 논문 서론은 이 대비를 "작동하는 것은 배우고 있지만 무엇이 좋은 디자인인지는 아직"이라고 적었다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단한다. 이 실험이 남기는 질문은 우리 쪽에서도 같다. 에이전트에게 일을 맡길 때, 그 일이 제대로 됐는지를 작업 도중에 기계가 읽을 수 있는 형태로 돌려주고 있는가. 데이터 적재라면 스키마 위반과 중복 키가, 라벨링이라면 라벨 사이의 모순이 그 자리다. 사후 리뷰에만 있는 검사는 에이전트가 쓰지 못한다.

▶ 전문: https://blog.pebblous.ai/blog/brickbench-lego-design-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #BrickBench #BrickAgent #AI에이전트 #에이전트평가 #AIReadyData #arXiv

---

## LinkedIn (EN)

One agent made all 300 LEGO design tasks buildable. Take the checking tools away and the same model's valid-design rate falls to 40 percent; a second model is left with a single build.

The benchmark is BrickBench, released on arXiv on October 8 by researchers at Stanford, the Max Planck Institute for Intelligent Systems and Inria. It hands a coding agent one line of text, asks for a model that can be built from real LDraw parts, and scores whether the parts requirement is met and whether the result stands up under gravity. Released with it is BrickAgent, a working environment with a checker attached: it reports where a connection has broken, which parts collide, and where the structure gives way, pointing at the parts responsible. The weights and the tasks were held fixed; only that environment was removed.

The half that did not fall deserves equal attention. Prompt satisfaction and design scores stayed roughly where they were, and one model scored higher without the checker than with it. It produced a more convincing model that simply could not be built. What the checker was holding up was buildability, and buildability alone.

The distance to human designers also remains. Five evaluators familiar with LEGO, shown an agent design and a human design matched on part count, picked the human 323 times out of 360. The paper's introduction puts it this way: agents are learning to build what works, but not yet what makes a great design.

Pebblous diagnoses the quality of AI training data with DataClinic, and the question this experiment raises is the same one on our side. When work is handed to an agent, is the verdict on that work returned mid-task in a form a machine can read? For a data loading job that means schema violations and duplicate keys; for labeling, contradictions between labels. A check that exists only in a post-hoc review is one the agent never gets to use.

▶ Read: https://blog.pebblous.ai/blog/brickbench-lego-design-benchmark/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #BrickBench #BrickAgent #AIAgent #AgentEvaluation #AIReadyData #arXiv

---

## Twitter/X (KO)

레고 설계 과제 300개를 전부 조립 가능하게 통과한 에이전트가, 연결과 충돌과 안정성을 검사해 주던 도구를 빼자 40%로 내려갔다.

가중치도 과제도 그대로였다. 검사기가 떠받치고 있던 것은 조립 가능성 하나였다.

https://blog.pebblous.ai/blog/brickbench-lego-design-benchmark/ko/

#페블러스 #데이터품질 #BrickBench #AI에이전트

---

## Twitter/X (EN)

An agent made all 300 LEGO tasks buildable. Remove the tools that check connection, collision and stability, and it drops to 40%.

Same weights, same tasks. The checker held up buildability, and nothing else.

https://blog.pebblous.ai/blog/brickbench-lego-design-benchmark/en/

#Pebblous #DataQuality #BrickBench #AIAgent

---

## Facebook (KO)

부품이 평균 156쌍 서로 겹쳐 있는 레고 설계를 내놓고, 모델은 다 지었다고 적었습니다.

거짓말을 한 것이 아닙니다. 확인할 방법이 없었을 뿐입니다.

스탠퍼드대학과 막스플랑크 지능시스템연구소, 인리아 연구진이 10월 8일 공개한 BrickBench 이야기입니다. 코딩 에이전트에게 텍스트 한 줄을 주고 실제 레고 부품으로 지을 수 있는 모형을 설계하게 시키는 시험입니다.

함께 공개한 BrickAgent라는 작업 환경에는 검사기가 붙어 있습니다. 어디가 끊겼는지, 어떤 부품끼리 겹쳤는지, 중력을 걸면 어디서 무너지는지를 그 부품을 짚어 돌려줍니다.

이 환경을 쥔 에이전트는 과제 300개 전부를 조립 가능하게 지었습니다. 같은 모델에게 부품 라이브러리와 파일 형식 안내서만 건네자 40%로 내려갔고, 다른 모델은 300개 가운데 하나만 남았습니다.

가중치는 그대로였습니다.

흥미로운 쪽은 떨어지지 않은 점수들입니다. 프롬프트를 얼마나 담아냈는지도, 보기에 얼마나 괜찮은지도 거의 그대로였고, 한 모델은 오히려 올랐습니다. 검사기를 빼앗기자 더 그럴듯한 모형을 냈고, 다만 그것을 지을 수 없었습니다.

검사기는 자기가 검사하는 축만 끌어올립니다.

그래서 이 실험이 남기는 질문은 이렇습니다. "우리는 에이전트에게 무엇을 검사 항목으로 쥐여 주고 있나? 쥐여 주지 않은 축에서는 무엇이 조용히 흐트러지고 있나?"

데이터 적재라면 스키마 위반과 중복 키가 그 자리입니다. 라벨링이라면 라벨 사이의 모순이 그 자리고요. 페블러스가 DataClinic으로 학습 데이터를 정량 진단하는 자리도 거기입니다. 다만 사후 리포트로만 남으면 에이전트는 작업 도중에 그것을 쓰지 못합니다.

평가자 다섯 명은 에이전트 설계와 사람 설계를 짝지어 보고 360회 가운데 323회에서 사람 것을 집어냈습니다. 작동하는 것은 배우고 있지만 무엇이 좋은 디자인인지는 아직이라고, 논문 서론은 적었습니다.

검사기가 돌려주지 않는 축은 아직 사람의 자리로 남아 있는 것 같습니다.

▶ 전문: https://blog.pebblous.ai/blog/brickbench-lego-design-benchmark/ko/

#페블러스 #BrickBench #BrickAgent #데이터품질 #데이터클리닉 #AI에이전트

---

## Facebook (EN)

A model handed in a LEGO design with 156 pairs of parts sitting inside one another, on average, and reported that it was finished.

It was not lying. It had no way to look.

This is BrickBench, released on October 8 by researchers at Stanford, the Max Planck Institute for Intelligent Systems and Inria. You give a coding agent one line of text and ask for a model that can actually be built out of real LEGO parts.

Released alongside it is BrickAgent, a working environment with a checker attached. It reports where a connection has broken, which parts collide with which, and where the structure gives way, pointing at the parts responsible.

With that environment in hand, the best agent made all 300 tasks buildable. Hand the same model only a parts library and a primer on the file format, and the rate falls to 40 percent. A second model was left with one build in 300.

The weights never changed.

The more interesting half is what did not fall. How well a design captured the prompt, and how good it looked, stayed roughly where they were. One model actually scored higher without the checker than with it. Stripped of it, that model produced a more convincing build, and one nobody could assemble.

A checker lifts only the axis it checks.

So the question this leaves is not whether agents can design. It is this: "What have we handed our agents to check themselves against? And on the axes where we handed them nothing, what is quietly coming apart?"

For a data loading job, schema violations and duplicate keys sit in that position. For labeling, it is contradictions between labels. That is where Pebblous puts DataClinic, which quantifies the quality of training data. A report that arrives after the fact, though, is one the agent cannot use while it works.

Five evaluators, shown an agent design beside a human one, picked the human 323 times out of 360. Agents are learning to build what works, the paper's introduction says, but not yet what makes a great design.

The axes a checker says nothing about still seem to belong to people.

▶ Full piece: https://blog.pebblous.ai/blog/brickbench-lego-design-benchmark/en/

#Pebblous #BrickBench #BrickAgent #DataQuality #DataClinic #AIAgent
