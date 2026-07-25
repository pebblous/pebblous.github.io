# SNS 홍보 글: 정답지 오류로 AI 에이전트 실력을 낮게 매긴 벤치마크

> 소스: blog/elt-bench-answer-key-errors/
> 생성일: 2026-07-26
> URL(KO): https://blog.pebblous.ai/blog/elt-bench-answer-key-errors/ko/
> URL(EN): https://blog.pebblous.ai/blog/elt-bench-answer-key-errors/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

최신 코딩 에이전트가 ELT-Bench의 데이터 변환 과제에서 22.66%밖에 못 냈다. 낮은 점수를 만든 건 에이전트가 아니라 벤치마크였다.

IBM·ETH취리히·UIUC 연구팀이 실패로 기록된 작업을 한 열씩 다시 채점하자, 실패의 82.7%에 채점 스크립트나 정답지 오류가 섞여 있었다. 대표적으로 GNP 성장률 열에서 에이전트는 4.41%를 소수 0.0441로 냈다. 값의 의미는 같고 표기만 백분율과 달랐는데, 채점기는 100배 차이라며 178개 값 전부를 0점으로 처리했다.

에이전트 코드도 프롬프트도 그대로 두고 채점 로직과 정답지만 바로잡자 성공률은 32.51%로 올랐다. 설계가 전혀 다른 두 에이전트가 같은 숫자에 수렴했다. 움직인 것은 실력이 아니라 그것을 재던 자였다.

물론 수정판에서도 데이터 모델의 67.5%는 여전히 실패한다. 다만 실패의 상당 부분은 에이전트가 아니라 우리가 정답이라 믿은 라벨에서 나왔다. 정답지와 채점 로직도 하나의 데이터셋이고, 지금껏 감사 대상 바깥에 있었다.

▶ 전문: https://blog.pebblous.ai/blog/elt-bench-answer-key-errors/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #DataClinic #AIReadyData #AI에이전트 #LLM #벤치마크 #데이터파이프라인 #ELTBench #IBMResearch

---

## LinkedIn (EN)

A state-of-the-art coding agent scored just 22.66% on ELT-Bench's data-transformation tasks. The culprit behind the low score turned out to be the benchmark, not the agent.

When researchers at IBM, ETH Zurich and UIUC re-graded the failed tasks column by column, 82.7% of the failures carried a grading-script or answer-key error. In one telling case, the agent returned a GNP growth rate as the decimal 0.0441 while the answer key stored it as the percentage 4.41. Same value, different notation, yet the grader marked all 178 rows a 0% match.

Leaving the agent's code and prompts untouched and fixing only the grading logic and answer key lifted the score to 32.51%. Two agents of entirely different design converged on the same number. What moved was not the skill, but the ruler measuring it.

Even so, 67.5% of the data models still fail in the corrected benchmark. The point is narrower and sharper: the answer key and grading logic are themselves a dataset, and they had been sitting outside every audit.

▶ Read: https://blog.pebblous.ai/blog/elt-bench-answer-key-errors/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIAgent #LLM #Benchmark #DataPipeline #ELTBench #IBMResearch

---

## Twitter/X (KO)

데이터 변환 벤치마크에서 22.66%를 받은 AI 에이전트. 알고 보니 낮은 점수의 범인은 에이전트가 아니라 벤치마크였다.

실패의 82.7%에 정답지·채점 오류가 섞여 있었고, 벤치마크만 고치자 32.51%로 올랐다.

정답지도 감사 대상 데이터다.

https://blog.pebblous.ai/blog/elt-bench-answer-key-errors/ko/

#페블러스 #데이터품질 #AI에이전트 #ELTBench #벤치마크

---

## Twitter/X (EN)

An AI agent scored 22.66% on a data-transformation benchmark. The real culprit behind the low score was the benchmark, not the agent.

82.7% of failures held answer-key or grading errors. Fix the benchmark alone and the score climbs to 32.51%.

The answer key is a dataset that needs auditing too.

https://blog.pebblous.ai/blog/elt-bench-answer-key-errors/en/

#Pebblous #DataQuality #AIAgent #ELTBench #Benchmark

---

## Facebook (KO)

회의 테이블에 '22.66%'라는 숫자가 올라오면, 결론은 대개 하나로 모입니다.

'이 에이전트는 아직 못 맡기겠다.'

그런데 그 숫자가 정말 에이전트의 실력을 잰 것이었을까요.

한 연구팀이 실패로 기록된 작업들을 한 열씩 다시 채점했습니다. GNP 성장률을 담은 어떤 열에서, 에이전트는 4.41%를 소수 0.0441로 적었습니다. 정답지에는 백분율 4.41이 적혀 있었고요. 같은 값이었습니다. 표기 방식만 100배 달랐을 뿐인데, 채점기는 그 178개 값을 전부 0점으로 매겼습니다.

이런 오류를 걷어내자 점수는 32.51%로 올랐습니다. 에이전트는 아무것도 바꾸지 않았는데 말입니다. 움직인 것은 실력이 아니라, 그 실력을 재던 자였습니다.

흥미로운 건 점수 그 자체가 아니었습니다. 우리는 늘 입력 데이터를 의심합니다. 결측을 보고, 편향을 보고, 이상치를 봅니다. 그런데 그 데이터를 옳고 그름으로 가르는 '정답지' 자신은, 지금껏 아무도 의심하지 않았습니다.

정답이라 믿는 라벨도, 결국 사람이 만든 데이터입니다. 페블러스가 데이터 품질을 진단할 때 늘 마주하는 질문이 여기서도 되돌아옵니다. 우리가 재는 이 숫자는 대상의 실력일까요, 아니면 우리 자를 잰 것일까요.

▶ https://blog.pebblous.ai/blog/elt-bench-answer-key-errors/ko/

#페블러스 #데이터클리닉 #데이터품질 #AI에이전트 #ELTBench #벤치마크

---

## Facebook (EN)

There is a certain kind of number that ends a meeting.

'22.66%.' Put it on the table, and the room usually agrees: not ready yet.

But a group of researchers went back and asked what that number had actually measured. Task by task, column by column, they re-graded the failures.

In one column, an agent had written a GNP growth rate as the decimal 0.0441. The answer key held the same figure as 4.41, a percentage. The same value, off by a factor of a hundred in notation alone. The grader called all 178 of them wrong.

Clear those errors away and the score rises to 32.51%, though the agent never changed a line. What moved was not the skill. It was the ruler.

I keep returning to that. In data work we are trained to doubt the input: the missing rows, the skew, the outliers. But the answer key, the thing that decides right from wrong, we had never thought to doubt. A label we trust is still a dataset someone built. And the honest question is whether our benchmarks measure the world, or measure us.

▶ https://blog.pebblous.ai/blog/elt-bench-answer-key-errors/en/

#Pebblous #DataClinic #DataQuality #AIAgent #ELTBench #Benchmark
