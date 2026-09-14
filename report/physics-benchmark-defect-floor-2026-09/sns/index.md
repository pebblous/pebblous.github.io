# SNS 홍보 글: AI가 물리를 못 푸는 걸까, 문제가 틀린 걸까?

> 소스: report/physics-benchmark-defect-floor-2026-09/ko/index.html
> 생성일: 2026-09-15
> URL (KO): https://blog.pebblous.ai/report/physics-benchmark-defect-floor-2026-09/ko/
> URL (EN): https://blog.pebblous.ai/report/physics-benchmark-defect-floor-2026-09/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

물리 벤치마크에서 오답으로 기록된 응답 250건을 물리학자들이 한 건씩 다시 채점했습니다. 모델이 실제로 물리를 틀린 것은 12건이었습니다.

예일대를 중심으로 한 연구진이 널리 쓰이는 물리 벤치마크 여섯 종을 열어 9월 11일 arXiv에 결과를 올렸습니다. 나머지 238건은 문제 서술이나 정답지 자체가 잘못됐거나, 맞는 답을 채점기가 알아보지 못한 경우였습니다.

분모를 함께 읽어야 합니다. 250건은 전체 문항이 아니라 이미 오답으로 기록된 응답이고, 표본도 모델이 여러 번 내리 틀린 문항 쪽으로 치우쳐 있습니다. 물리 문제의 대부분이 결함이라는 이야기가 아닙니다.

정답지를 고치자 점수는 크게 올랐습니다. 다만 화살표마다 고칠 수 없는 문항을 빼낸 효과가 섞여 있습니다. 가장 크게 인용될 상승은 47.3%에서 78.7%로 간 쪽인데, 그 벤치마크에서는 결함으로 판정된 문항 86개가 함께 빠졌습니다.

문항을 거의 그대로 둔 비교가 하나 있습니다. CMT-Benchmark는 50문항 가운데 29문항을 보수하고 한 문항만 제외했습니다.

그 조건에서 점수가 61.0%에서 87.2%로 올랐습니다. 문항을 빼서 점수가 올랐다는 설명이 성립하지 않는 유일한 자리입니다.

채점기만 떼어 보면 순서가 뒤집힙니다. 자동 채점의 엄밀함을 가장 크게 내세운 두 벤치마크가 채점기 오류율 1위와 2위였습니다. 채점 정확성에 관해 아무 주장도 하지 않은 파이프라인이 가장 낮았습니다. 일관된 규칙은 흔들리지 않고 일관되게 틀리기도 합니다.

이 감사도 자기 한계를 부록에 적어 두었습니다. 두 사람이 본 문항의 28.57%에서 판정이 갈렸습니다. 일부 문항은 한 사람만 봤고, 검토자들은 AI가 미리 써 둔 예비 검토를 곁에 두고 판정했습니다.

남는 한 줄은 이것입니다. 어떤 모델의 측정 오답률도 시험지의 결함률 아래로 내려갈 수 없습니다. 모델이 좋아질수록 점수판에 남는 오답은 점점 더 모델의 것이 아니라 시험지의 것이 됩니다.

페블러스는 데이터를 진단하고 품질 성적서를 발급합니다. 그래서 조직이 AI 도입을 판단하며 들여다보는 점수표에도 같은 물음이 그대로 돌아옵니다. 그 정답은 누가 검수했고, 결함률은 얼마이며, 그 수를 점수 옆에 적어 둔 사람이 있습니까.

▶ 전문: https://blog.pebblous.ai/report/physics-benchmark-defect-floor-2026-09/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI평가 #벤치마크 #라벨오류 #물리AI #HLE #CritPt

---

## LinkedIn (EN)

Physicists reopened 250 responses that six widely used physics benchmarks had recorded as wrong. Twelve were cases where the model actually got the physics wrong.

A team based mainly at Yale posted the audit to arXiv on September 11. The other 238 split between defective items, where the problem statement or the reference answer was itself wrong, and graders that failed to recognize a correct answer.

Read the denominator alongside the finding. Those 250 are responses already marked wrong, drawn from a sample skewed toward items a model had missed repeatedly. This is not a claim that most physics questions are broken.

Repairing the answer keys raised scores sharply, but every headline arrow also carries items that were removed rather than repaired. The most quotable jump runs from 47.3% to 78.7%, and that benchmark also shed 86 items judged defective.

One comparison holds the item set nearly fixed. CMT-Benchmark repaired 29 of its 50 items and dropped exactly one.

Under those conditions the score moved from 61.0% to 87.2%. It is the one place where "they deleted the hard questions" does not explain the gain.

Isolate the graders and the ranking inverts. The two benchmarks that advertised the most rigorous automatic marking posted the highest grader-error rates in this audit, while the pipeline that made no accuracy claim at all posted the lowest. A consistent rule can be consistently wrong.

The audit also audits itself, in an appendix. Reviewers disagreed on 28.57% of the items two people saw, some items were reviewed by one person only, and every reviewer worked with an AI-generated preliminary review on screen.

The line that survives the scores is this. No measured error rate can sit below the defect rate of the test itself. As models improve, more of what a scoreboard calls model error belongs to the paper it was graded against.

Pebblous diagnoses data and issues quality reports, so the question comes back to us as much as to anyone reading a vendor scorecard. Who checked these answer keys, what is the defect rate, and did anyone print that number next to the score.

▶ Read: https://blog.pebblous.ai/report/physics-benchmark-defect-floor-2026-09/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIEvaluation #Benchmarks #LabelErrors #PhysicsAI #HLE #CritPt

---

## Twitter/X (KO)

물리 벤치마크에서 오답으로 기록된 응답 250건을 물리학자들이 다시 채점했습니다. 모델이 실제로 물리를 틀린 것은 12건이었습니다.

나머지는 틀린 정답지였거나, 맞는 답을 알아보지 못한 채점기였습니다.

점수를 깎은 쪽은 모델이 아니라 시험지였습니다.

▶ https://blog.pebblous.ai/report/physics-benchmark-defect-floor-2026-09/ko/

#페블러스 #데이터품질 #AI평가 #물리AI

---

## Twitter/X (EN)

Physicists re-graded 250 responses that physics benchmarks had recorded as wrong. Twelve were the model's fault.

The rest were broken answer keys, or graders that could not see that a correct answer was correct.

What lowered the score was not the model. It was the test.

▶ https://blog.pebblous.ai/report/physics-benchmark-defect-floor-2026-09/en/

#Pebblous #DataQuality #AIEvaluation #PhysicsAI

---

## Facebook (KO)

"주어진 정보로는 결정할 수 없다."

전자의 비행 시간을 묻는 객관식 문제 앞에서 어떤 모델이 내놓은 답입니다. 보기 셋 가운데 하나를 고르는 대신 이렇게 답했고, 채점 결과는 오답이었습니다.

그 문항을 나중에 다시 열어 본 검토자가 남긴 메모는 한 줄이었습니다.

"문제에 정보가 충분히 주어져 있지 않다."

모델은 문제의 결함을 정확히 짚었고, 정확했기 때문에 점수를 잃었습니다.

예일대를 중심으로 한 연구진이 널리 쓰이는 물리 벤치마크 여섯 종을 열었습니다. 오답으로 기록된 응답 250건을 물리학 박사과정생들이 한 건씩 다시 채점했고, 모델이 실제로 물리를 틀린 것은 12건이었습니다.

나머지는 틀린 정답지였거나, 맞는 답을 알아보지 못한 채점기였습니다. 분모를 유리화하면 완전히 같은 식인데 0점이 매겨진 경우가 있었고, 곱하는 순서만 다른 같은 곱에 0점이 매겨진 경우도 있었습니다.

저는 이런 것들을 '시험지가 낸 오답'이라고 부르게 됐습니다.

감사를 받은 여섯 벤치마크의 원 논문을 열어 보면, 만든 쪽은 모두 자기 정답지를 검증했다고 적어 두었습니다. 전문가가 설계했고, 답은 모호하지 않으며, 기계가 정확히 채점한다고.

"우리가 재고 있는 것은 모델의 실력입니까, 아니면 정답지의 상태입니까?"

정작 오래 걸린 것은 논문이 토의 절에 적어 둔 결론이었습니다. 어떤 모델의 측정 오답률도 시험지의 결함률 아래로 내려갈 수 없다는 것. 모델이 약할 때는 계측의 결함이 결과에 묻히고, 모델이 좋아지면 계측의 결함만 남습니다. 그 바닥은 모델이 무엇을 하든 사라지지 않습니다.

정직한 대목은 이 연구가 자기 감사의 약한 자리도 함께 적어 두었다는 점입니다. 두 사람이 본 문항의 28.57%에서 판정이 갈렸습니다. 일부 문항은 한 사람의 눈만 거쳤고, 검토자들은 AI가 미리 써 둔 예비 검토를 곁에 두고 있었습니다. 정답을 검수하는 층에도 품질 문제가 있고, 그 층을 감사한 사람은 아직 없습니다.

페블러스는 데이터를 진단하고 품질 성적서를 발급하는 일을 합니다. 그래서 이 이야기가 남의 업종 이야기로 읽히지 않습니다. 우리가 발급하는 성적서도 같은 질문을 피하지 못합니다.

다음에 점수표를 받게 되면 저는 아마 다른 것을 먼저 물을 것 같습니다. 이 정답은 누가 검수했습니까.

https://blog.pebblous.ai/report/physics-benchmark-defect-floor-2026-09/ko/

#페블러스 #데이터품질 #데이터클리닉 #AIReadyData #AI평가 #벤치마크 #물리AI

---

## Facebook (EN)

"It cannot be determined from the information given."

That was a model's answer to a multiple-choice question about the flight time of an electron. It declined to pick any of the three options, and the grader recorded the response as wrong.

The note left by the reviewer who later reopened that item runs to one line.

"The problem does not give enough information."

The model had identified the defect in the question exactly, and lost the point for being right about it.

A team based mainly at Yale opened six widely used physics benchmarks. Physics doctoral students re-graded 250 responses that had been recorded as wrong, one at a time, and 12 turned out to be cases where the model actually got the physics wrong.

The rest were broken answer keys, or graders that could not see a correct answer as correct. One response was scored zero for writing a fraction with the denominator unrationalized. Another was scored zero for multiplying the same three factors in a different order.

I have started calling these the wrong answers the test itself produced.

Open the original papers behind those six benchmarks and every one of them says its answer keys were checked. Expert-designed, unambiguous, machine-verifiable.

"Are we measuring how good the model is, or what condition the answer key is in?"

One line from the paper stays with me. No measured error rate can sit below the defect rate of the test itself. While a model is weak, flaws in the instrument hide inside its mistakes; as the model improves, the flaws in the instrument are most of what is left. That floor does not go away no matter what the model does.

The honest part is that the study wrote down the weak joints in its own audit. Reviewers disagreed on 28.57% of the items two people saw. Some items passed through a single pair of eyes. Every reviewer had an AI-written preliminary review open beside the question. The layer that checks the answers has quality problems of its own, and nobody has audited that layer yet.

Pebblous diagnoses data and issues quality reports, which is why none of this reads to me as somebody else's industry. The reports we issue cannot dodge the same question.

The next time a scorecard reaches me, I suspect I will ask something else first. Who checked these answers?

https://blog.pebblous.ai/report/physics-benchmark-defect-floor-2026-09/en/

#Pebblous #DataQuality #DataClinic #AIReadyData #AIEvaluation #Benchmarks #PhysicsAI
