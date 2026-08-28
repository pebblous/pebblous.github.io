# SNS 홍보 글: 채점 척도의 바닥이 만들어 낸 LLM 판정 편향

> 소스: blog/llm-judge-scale-floor-manufactured-interaction/
> 생성일: 2026-08-29
> URL: https://blog.pebblous.ai/blog/llm-judge-scale-floor-manufactured-interaction/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

편향이 0이라고 손으로 묶어 둔 계산이, 감사가 찾아낸 편향의 79~85%를 그대로 다시 만들어 냈습니다.

8월 27일 arXiv에 올라온 사전등록 감사입니다. 튜터링 대화의 다음 발화를 채점하는 LLM 판정자에게 학습자 프로필을 붙였다 떼었다 하며 990번을 채점시켰습니다. 시스템 프롬프트는 그동안 한 글자도 바꾸지 않았습니다.

사전등록한 주 종점은 +0.085점으로 움직이지 않았습니다. 네 개 세부 항목 가운데 유의한 것은 하나뿐이었고, 저자들은 그 값을 편향 없이 다시 만들 수 있는지부터 시험했습니다.

이유는 척도에 있습니다. 판정자가 내놓는 점수는 1점과 5점 사이에서 잘립니다. 조작한 조건이 두 응답을 똑같은 양만큼 깎는다고 해 봅시다. 두 응답이 척도 경계에서 서로 다른 거리에 앉아 있으면, 깎인 몫이 점수에 남는 정도가 달라집니다. 관측된 상호작용은 선호의 차이가 아니라 감쇠의 차이를 재게 됩니다.

기하 구조는 자료 안에 그대로 보입니다. 유의했던 그 항목에서, 한쪽 응답이 세 조건 모두 정확히 바닥 점수였던 문항이 30개 중 17개였습니다. 움직일 수 없는 응답이 한쪽에 있으면, 두 번 빼는 설계는 반대쪽 응답 하나의 변화량과 같아집니다.

저자들은 이것이 분해가 아니라 반례라고 못 박습니다. 남은 몫이 진짜 편향이라는 뜻도, 판정자가 깨끗하다는 증명도 아닙니다.

페블러스가 데이터 품질 현장에서 반복해 만나는 착시도 여기서 멀지 않습니다. 라벨이 틀린 것도 아니고 표본이 치우친 것도 아닌데 결론이 흔들립니다.

감사 결과를 받아 드는 쪽에는 별표보다 먼저 물을 것이 하나 생겼습니다. 보고된 상호작용을 그 감사가 이미 가진 평점만으로 다시 세울 수 있는가.

▶ 전문: https://blog.pebblous.ai/blog/llm-judge-scale-floor-manufactured-interaction/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI평가 #LLM #LLMasaJudge #평가데이터 #측정타당도 #arXiv

---

## LinkedIn (EN)

A pre-registered audit of an LLM judge turned up exactly one significant bias effect. A construction that sets the bias to zero by hand rebuilt 79 to 85 percent of it.

The audit, posted to arXiv on August 27, ran a tutoring judge through 990 gradings, attaching and removing a learner profile while leaving every other word of the prompt untouched.

The pre-registered primary endpoint did not move, at +0.085 points. Of four rubric sub-scores only productive struggle reached significance, and the authors' first move was to test whether that number could be produced without any bias at all.

The reason it can is the scale. Ratings stop at 1 and 5. When a manipulation pushes both candidate responses down by the same amount, the two do not shed the same amount of visible score, because they sit at different distances from the boundary. The double difference then measures a difference in attenuation rather than a difference in preference.

The geometry is visible in the ratings themselves. On that sub-score, the low-scaffolding response sat at exactly the floor across all three arms on 17 of 30 items. Where one response cannot move, differencing twice returns the shift of the other response alone.

The authors are careful about what this licenses. It is a counterexample, not a decomposition. The residual is not the true bias, and none of it clears the judge.

What we run into in data quality work at Pebblous rhymes with this. Nothing is wrong with the labels, nothing is wrong with the sample, and the conclusion still moves.

For anyone receiving an audit report, one question now comes before the asterisks. Can the reported interaction be rebuilt from the ratings the audit already holds?

▶ Read: https://blog.pebblous.ai/blog/llm-judge-scale-floor-manufactured-interaction/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIEvaluation #LLM #LLMasaJudge #MeasurementValidity #arXiv

---

## Twitter/X (KO)

편향을 0으로 손수 묶어 둔 계산이, 사전등록 LLM 판정자 감사에서 유일하게 유의했던 값의 79~85%를 다시 만들어 냈습니다.

끝이 막힌 채점 척도 위에서는 두 응답이 경계에서 서로 다른 거리에 앉아 있기만 해도 없던 상호작용이 생깁니다.

https://blog.pebblous.ai/blog/llm-judge-scale-floor-manufactured-interaction/ko/

#페블러스 #데이터품질 #LLMasaJudge #arXiv

---

## Twitter/X (EN)

A construction that fixes differential preference at zero rebuilt 79 to 85 percent of the one significant effect in a pre-registered LLM judge audit.

On a scale that stops at both ends, two responses sitting at different distances from the boundary is enough to manufacture an interaction that was never there.

https://blog.pebblous.ai/blog/llm-judge-scale-floor-manufactured-interaction/en/

#Pebblous #DataQuality #LLMasaJudge #arXiv

---

## Facebook (KO)

감사 보고서를 받아 들면 눈이 먼저 가는 자리는 대개 정해져 있습니다.

유의하다고 표시된 줄.

이번에 읽은 LLM 판정자 감사에서도 그 줄은 하나였습니다. 네 개 항목 가운데 생산적 어려움에서 +0.378점, p값 0.002.

저자들이 그다음에 한 일이 이 논문의 본론이었습니다. 두 응답이 똑같은 양만큼 깎였다고 손으로 묶어 두어 편향을 0으로 만든 구성을 따로 계산해, 그 줄을 다시 세워 본 것입니다. 관측값의 85%가 그대로 나왔습니다. 판정자가 실제로 내놓는 정수로 반올림하면 79%입니다.

판정자가 내놓는 점수는 1점과 5점 사이에서 잘립니다. 두 응답이 척도의 서로 다른 끝에 앉아 있으면, 같은 크기의 하락도 한쪽에서만 점수에 남습니다. 그렇게 남은 차이에 '상호작용'이라는 이름이 붙습니다. 저는 이것을 '눈금이 만든 값'이라고 부르게 됐습니다.

"우리가 편향이라 부른 값은 모델의 성질입니까, 아니면 자의 눈금입니까?"

이 질문이 불편한 이유는 답이 자료 바깥에 있어서가 아닙니다. 저자들이 제시한 진단 절차는 감사가 이미 가진 평점만으로 돌아갑니다. 경계에 붙은 응답을 세고, 그 조건으로 표본을 갈라 보고, 자유로운 응답의 변화량을 붙박인 응답에 옮겨 붙여 잘라 보는 것. 물을 수 있었는데 묻지 않았던 쪽에 가깝습니다.

페블러스가 데이터 품질 현장에서 자주 보는 장면도 여기서 멀지 않습니다. 라벨 정확도에는 담당자가 붙습니다. 그 라벨을 담는 척도가 무엇을 잴 수 있게 만들어졌는지는 대개 어느 문서에도 적혀 있지 않습니다.

다음에 감사 결과를 받으면 별표 붙은 줄보다 먼저 물어보게 될 것 같습니다. 이 줄은 여기 있는 평점만으로 다시 세워지는 줄입니까.

▸ https://blog.pebblous.ai/blog/llm-judge-scale-floor-manufactured-interaction/ko/

#페블러스 #데이터클리닉 #데이터품질 #AI평가 #LLMasaJudge #arXiv

---

## Facebook (EN)

When an audit report lands, the eye goes to the same place every time.

The line marked significant.

In the LLM judge audit I read this week there was exactly one. Productive struggle, +0.378 points, p=0.002, out of four rubric sub-scores.

What the authors did next is the real body of the paper. They built a separate construction that holds both responses to the same loss, so differential preference is zero by hand, and used it to rebuild that line. It came back at 85 percent of the observed value, or 79 percent once you round to the integers the judge actually emits.

Ratings stop at 1 and 5. When two responses sit at opposite ends of that scale, a drop of the same size shows up in only one of them, and the leftover difference gets called an interaction. I have started thinking of it as a number the ruler made.

"Is what we called bias a property of the model, or a property of the ruler?"

The question stings not because the answer lies outside the data. The diagnostic the authors lay out runs on the ratings the audit already holds. Count the responses pinned to a boundary, split the sample on that condition, then transplant the free response's observed shift onto the pinned one and clip it. It was askable all along.

What we see in data quality work at Pebblous is not far from this. Someone is always assigned to label accuracy. What the scale holding those labels was built to measure is rarely written down anywhere.

The next time an audit report arrives, I think the question will come before the asterisk. Is this line one that can be rebuilt from the ratings sitting right here?

▸ https://blog.pebblous.ai/blog/llm-judge-scale-floor-manufactured-interaction/en/

#Pebblous #DataClinic #DataQuality #AIEvaluation #LLMasaJudge #arXiv
