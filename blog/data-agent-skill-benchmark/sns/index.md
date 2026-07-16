# SNS 홍보 글: 데이터 분석 에이전트의 실력을 기능 단위로 채점하는 벤치마크

> 소스: blog/data-agent-skill-benchmark/
> 생성일: 2026-07-17
> URL: https://blog.pebblous.ai/blog/data-agent-skill-benchmark/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

성공률 높은 데이터 에이전트도 조인 한 번에서 조용히 미끄러진다. 그런데 리더보드의 총점은 그 미끄러짐을 잡아내지 못한다.

새 벤치마크 AgenticDataBench는 채점 단위를 바꿨다. 과제를 끝냈는지 하나의 성공률로 재는 대신, 정제·조인·이상탐지·스키마 탐색 같은 개별 스킬마다 정답 라벨을 붙여 채점한다. 스택오버플로의 고품질 해법 6,510개에서 433개 대표 스킬을 뽑고, 이를 조합해 15개 산업 도메인의 태스크 344개를 구성했다.

태스크 하나가 평균 23.5개 스킬을 건드리니, 총점이 같은 두 에이전트도 강한 지점과 약한 지점의 지도가 다르게 나온다. "82점"은 순위를 주지만, "정제는 안정적인데 비정형 추출에서 반복해 무너진다"는 진단을 준다.

배경에는 총점 자체가 흔들린다는 감사 결과가 있다. 널리 쓰이는 데이터 벤치마크의 정답 라벨 오류율이 절반을 넘겼고, 에이전틱 벤치마크 10개 중 7개가 모델 간 상대 성능을 잘못 추정했다.

그래서 에이전트에 데이터를 맡기기 전 조직이 물어야 할 질문이 바뀐다. 이 에이전트가 몇 점인가가 아니라, 우리 데이터에서 반복될 작업이 어떤 스킬인지, 그 스킬에서 이 에이전트가 어느 정도인지다. 검증의 대상이 결과에서 능력으로 옮겨 간다.

▶ 전문: https://blog.pebblous.ai/blog/data-agent-skill-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AgenticDataBench #AI에이전트 #LLM #AIReadyData #데이터파이프라인

---

## LinkedIn (EN)

A data agent with a high success rate can still slip quietly on a single join. The trouble is that a leaderboard's total score never catches that slip.

A new benchmark, AgenticDataBench, changes the unit of grading. Instead of one pass/fail success rate, it labels the right answer for each individual skill — cleaning, joining, anomaly detection, schema exploration — and scores them separately. Its 433 representative skills were mined from 6,510 high-quality Stack Overflow solutions and recombined into 344 tasks across 15 industry domains.

Because a single task touches 23.5 skills on average, two agents with the same total can show very different maps of strengths and weaknesses. "82 points" gives you a rank; "stable at cleaning but fails repeatedly at unstructured extraction" gives you a diagnosis.

Behind this sits an uncomfortable audit finding: annotation error rates in widely used data benchmarks have topped half, and 7 of 10 agentic benchmarks misestimated relative model performance. The single number was never as solid as it looked.

So the question a team should ask before handing data to an agent shifts. Not what it scores, but which skill your workload repeats, and how the agent does at exactly that skill. Verification moves from the result to the capability.

▶ Read: https://blog.pebblous.ai/blog/data-agent-skill-benchmark/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AgenticDataBench #AIAgent #LLM #AIReadyData

---

## Twitter/X (KO)

데이터 에이전트 벤치마크 AgenticDataBench는 과제 성공률 총점 대신 정제·조인·이상탐지 같은 스킬 단위로 채점한다. 스택오버플로 해법에서 뽑은 433개 스킬, 344개 태스크.

총점은 순위를, 스킬 지도는 "어디서 무너지는가"를 준다.

https://blog.pebblous.ai/blog/data-agent-skill-benchmark/ko/

#페블러스 #데이터품질 #AgenticDataBench #AI에이전트

---

## Twitter/X (EN)

AgenticDataBench grades data agents skill by skill (cleaning, joining, anomaly detection) instead of one success rate. 433 skills mined from Stack Overflow, 344 tasks.

A total score gives you a rank. A skill map tells you where the agent breaks.

https://blog.pebblous.ai/blog/data-agent-skill-benchmark/en/

#Pebblous #DataQuality #AgenticDataBench #AIAgent

---

## Facebook (KO)

에이전트가 매출 데이터를 정제해 부서별 보고서를 냈습니다. 표도 차트도 깔끔합니다.

그런데 그 안에서 중복 레코드가 두 번 세어졌는지, 통화 단위가 섞였는지는 보고서 표면에 드러나지 않습니다.

우리가 "성공률 88점"이라고 부르는 숫자는, 사실 "보고서가 나왔다"까지만 보증하는 것은 아닐까요.

이번에 본 벤치마크 AgenticDataBench는 그 지점을 정면으로 겨눕니다. 과제를 끝냈는지 하나의 총점으로 재는 대신, 정제·조인·이상탐지처럼 데이터를 다루는 개별 동작마다 정답을 따로 채점합니다. 스택오버플로에 쌓인 해법 수천 개에서 실제 반복되는 손동작 433가지를 역으로 뽑아, 그것들을 조합해 태스크를 만들었습니다.

그러자 총점이 같은 두 에이전트가 전혀 다른 얼굴을 보였습니다. 하나는 정제에 강하고 조인에서 미끄러지고, 다른 하나는 그 반대입니다. 저는 이 대목에서 오래 멈췄습니다. "이 에이전트를 믿는다"고 말할 때, 우리가 실제로 보고 있는 것은 결과일까요, 능력일까요.

데이터 품질이 무너지는 자리는 대개 모델의 크기가 아니라, 데이터를 만지는 손끝이었습니다. 정제에서 어긋난 한 줄, 잘못 맞춘 키 하나가 결과 전체의 신뢰를 흔듭니다. 페블러스가 DataClinic으로 학습 데이터의 품질을 정량 진단해 온 이유도 같은 자리에 있습니다. 그 손끝을 재는 첫 자가 이제 막 나왔습니다.

▶ 전문: https://blog.pebblous.ai/blog/data-agent-skill-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #AgenticDataBench #AI에이전트

---

## Facebook (EN)

An agent cleaned the sales data and produced a report broken out by department. The tables are tidy, the charts are clean.

But whether a duplicate record got counted twice, or whether two currencies quietly got mixed in — none of that shows up on the surface of the report.

The number we call "88% success," maybe it only ever certified that a report came out at all.

The benchmark I read this week, AgenticDataBench, aims straight at that gap. Instead of one total score for finishing the task, it grades each individual move of handling data (cleaning, joining, anomaly detection) against its own answer key. It mined 433 recurring hand-motions from thousands of Stack Overflow solutions and recombined them into tasks.

And two agents with the same total turned out to have completely different faces. One is strong at cleaning and slips at joins; the other is the reverse. I stayed with this for a while. When we say we "trust" an agent, what are we actually looking at — the result, or the capability?

The place data quality breaks was rarely the size of the model. It was the fingertips that touch the data. One misaligned row in cleaning, one mismatched key, and the whole result loses its footing. That is the same place Pebblous has been working from, measuring training-data quality with DataClinic. A first ruler for those fingertips has just arrived.

▶ Read: https://blog.pebblous.ai/blog/data-agent-skill-benchmark/en/

#Pebblous #DataClinic #DataQuality #AgenticDataBench #AIAgent
