# SNS 홍보 글: AI는 데이터 분석을 갈수록 조용히 틀린다

> 소스: blog/longds-bench-agentic-data-analysis-failure/ko/index.html
> 생성일: 2026-07-04
> URL: https://blog.pebblous.ai/blog/longds-bench-agentic-data-analysis-failure/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

실제 Kaggle 과제 68개를 최신 AI 다섯 개에게 시켜 봤더니, 1위 모델의 정확도가 48%에 그쳤다.

과제당 평균 33턴, 전체 2,225턴에 걸친 긴 분석이었다. 짧은 질문 하나는 곧잘 풀던 모델들이, 분석이 길어질수록 조용히 틀려 갔다. 같은 과제 안에서 초반과 후반의 정확도 차이가 47%p에 달했다.

원인은 정보를 잊어서가 아니었다. 이전에 세운 정의와 필터, 가정 같은 '분석 상태'를 제때 붙잡지 못하면서, 한 번 어긋난 중간 결과가 뒤따르는 계산을 전부 오염시켰다.

스텝을 더 준다고 해결되지도 않았다. 가장 많이 시도한 모델이 오히려 1위보다 낮은 점수를 받았다.

길어지는 데이터 작업의 병목은 추론력이 아니라, 에이전트가 붙잡을 상태를 어떻게 설계했는가다. 그 상태는 결국 밖에서 명시적으로 관리해야 할 데이터다.

▶ 전문: https://blog.pebblous.ai/blog/longds-bench-agentic-data-analysis-failure/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #LongDSBench #AI에이전트 #롱호라이즌 #에이전트데이터분석 #AIReadyData #데이터거버넌스

---

## LinkedIn (EN)

The best AI model got fewer than half of real data-analysis tasks right.

Researchers pulled 68 tasks from actual Kaggle notebooks and ran five frontier models through them as multi-turn analyses, averaging 33 turns each. The models handled short questions well. But as the analysis stretched on, accuracy quietly collapsed, and the gap between early and late turns inside the same task reached 47 percentage points.

The cause wasn't forgetting. The models failed to hold onto their "analytical state" — the definitions, filters, and assumptions set in earlier turns — so a single wrong intermediate result contaminated everything downstream.

More steps didn't help. The model that tried the hardest scored below the leader.

In long-horizon data work, the bottleneck isn't reasoning power. It's how well you designed the state the agent has to hold, and that state is ultimately data you have to manage explicitly.

▶ Read: https://blog.pebblous.ai/blog/longds-bench-agentic-data-analysis-failure/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #LongDSBench #AIAgent #LongHorizon #AgenticDataAnalysis #AIReadyData

---

## Twitter/X (KO)

최신 AI 다섯 개에 실제 데이터 분석 과제 68개를 시켰더니, 1위 모델도 정확도 48%에 그쳤다. 분석이 길어질수록 조용히 틀려 간 것이다.

원인은 기억이 아니라 '분석 상태' 유지 실패였다.

▶ https://blog.pebblous.ai/blog/longds-bench-agentic-data-analysis-failure/ko/

#페블러스 #데이터품질 #LongDSBench #AI에이전트

---

## Twitter/X (EN)

Five frontier models, 68 real data-analysis tasks. The top model cleared just 48%, and accuracy quietly fell the longer each analysis ran.

The cause wasn't memory. It was failing to hold the analytical state.

▶ https://blog.pebblous.ai/blog/longds-bench-agentic-data-analysis-failure/en/

#Pebblous #DataQuality #LongDSBench #AIAgent

---

## Facebook (KO)

에이전트가 정리해 준 데이터 분석 리포트를, 앞부분만 훑어보고 "괜찮네" 하며 넘긴 적이 있으신가요.

실제 Kaggle 과제 68개를 최신 AI 다섯 개에게 여러 턴에 걸쳐 시켜 본 연구가 있었습니다. 과제 하나가 평균 서른 턴을 넘겼고, 다 합치면 2,225턴에 이르는 긴 분석이었습니다. 짧은 질문 하나는 다들 곧잘 풀었습니다. 그런데 같은 과제 안에서 뒤로 갈수록, 정확도가 조용히 주저앉았습니다. 초반과 후반의 격차가 절반 가까이 벌어졌습니다.

무너진 이유가 흥미로웠습니다. 흔히 걱정하는 "AI가 앞의 내용을 까먹어서"가 아니었습니다. 오히려 정보를 다시 꺼내는 일은 쉬웠습니다. 진짜 문제는 앞에서 세운 정의와 필터와 가정 가운데 지금 어느 것이 유효한지를 붙잡아, 다음 계산에 옳게 넘기는 일이었습니다.

한 번 어긋난 중간 결과가 뒤따르는 모든 턴을 물들이는 것. 저는 이걸 '조용한 오염'이라고 부르고 싶어졌습니다. 앞부분이 그럴듯해서 아무도 눈치채지 못하는 사이, 결론만 소리 없이 틀어져 있는 상태 말입니다. 스텝을 더 준다고 나아지지도 않았습니다. 가장 많이 시도한 모델이 오히려 1위보다 낮았으니까요.

에이전트가 붙잡아야 할 그 상태, 곧 정의와 범위와 가정과 중간 결과는 결국 밖에서 명시적으로 관리해야 할 데이터입니다. 페블러스가 데이터의 신뢰와 지속성을 오래 들여다봐 온 이유도 여기에 가깝습니다.

지금 우리가 에이전트에게 넘긴 긴 데이터 작업은, 앞부분이 멀쩡하다는 이유로 뒷부분의 조용한 오염을 놓치고 있지는 않을까요.

▶ 전문: https://blog.pebblous.ai/blog/longds-bench-agentic-data-analysis-failure/ko/

#페블러스 #LongDSBench #AI에이전트 #DataClinic #데이터품질 #AIReadyData

---

## Facebook (EN)

Have you ever skimmed the top of a report an agent handed you, thought "looks fine," and moved on?

There's a study that stays with me. Researchers pulled 68 tasks from real Kaggle notebooks and gave them to five frontier models as long, multi-turn analyses — 33 turns each on average, 2,225 turns in all. Short questions were easy for every model. But inside a single task, the further the analysis ran, the more quietly the answers slipped. Between the early turns and the late ones, accuracy fell by nearly half.

What broke was not what we usually fear. It wasn't that the model forgot. Pulling old information back up turned out to be the easy part. The hard part was holding onto which earlier definition, filter, or assumption was still in force, and carrying it correctly into the next calculation.

One wrong intermediate result staining every turn that follows. I've started calling it "quiet contamination" — the state where the opening looks convincing enough that no one notices the conclusion has silently gone wrong. And giving the agent more steps didn't fix it. The model that tried the hardest scored below the leader.

The state an agent has to hold, all those definitions and ranges and assumptions and intermediate results, is in the end just data that someone has to manage on the outside. That is close to why we at Pebblous keep looking at the trust and durability of data.

So the long data task you've already handed to an agent — is its convincing opening letting the quiet contamination in the second half slip past you?

▶ Read: https://blog.pebblous.ai/blog/longds-bench-agentic-data-analysis-failure/en/

#Pebblous #LongDSBench #AIAgent #DataClinic #DataQuality #AIReadyData
