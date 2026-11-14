# SNS 홍보 글: 셀렉트스타 다비, 모델을 골라 주면 정말 더 맞힐까?

> 소스: blog/selectstar-davi-routing-margin/ko/index.html
> 생성일: 2026-10-27
> URL: https://blog.pebblous.ai/blog/selectstar-davi-routing-margin/ko/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective

---

## LinkedIn (KO)

셀렉트스타가 10월 26일 판단 특화 AI 다비(DAVI)를 공개했다. 한국어 고난도 질문 870건에서 다비에게 모델을 고르게 한 쪽이 71.1%를 맞혔고, 가장 비싼 오퍼스만 쓴 쪽이 70.3%였다.

실행 비용은 28% 줄었다. 같은 실험에서 나온 두 수치지만 근거의 두께는 다르다. 비용은 모든 호출에 매겨진 값을 전부 더해 낸 비율이고, 정확도 간격은 맞은 개수의 차이로만 생긴다. 0.8%포인트를 개수로 되돌리면 정답 일곱 건이다.

일곱 건은 흔들리기 쉬운 크기다. 그중 넷만 반대로 떨어지면 순위가 뒤집힌다. 두 비율의 차이를 검정에 넣은 z값은 0.37로, 통상적인 문턱 1.96에 닿지 못한다. 같은 발표의 제브 비교에서 2.6%포인트로 전해진 간격도 231문항 중 여섯 문항이다.

문턱을 넘은 줄은 따로 있었다. 다섯 번 반복하는 동안 보내는 모델이 바뀐 문항이 다비는 174개 중 2개, 제브는 14개였다. 여기서 z값은 3.07이다. 라우터에 요구되는 성질은 판단이 흔들리지 않는 쪽인데, 발표도 보도도 정확도를 앞세웠다.

셀렉트스타는 결과표 여섯 줄과 측정 하네스, 자기가 적어 둔 한계까지 깃허브에 열어 두었다. 바깥에서 백분율을 개수로 되돌려 볼 수 있었던 것은 그 때문이다.

▶ 전문: https://blog.pebblous.ai/blog/selectstar-davi-routing-margin/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #셀렉트스타 #DAVI #JevBench #모델라우팅 #LLM평가 #AIReadyData

---

## LinkedIn (EN)

SelectStar released DAVI, a model built to judge rather than answer, on October 26. On 870 hard Korean questions, letting DAVI pick the model scored 71.1% correct, against 70.3% for Anthropic's Opus used throughout.

Cost fell 28%. Both figures come from one experiment, but they are not built alike. The cost ratio sums the price of every call in the run, while the accuracy gap is made of right answers alone. Converted back, 0.8 points is seven answers.

Seven is a fragile margin. Four of them falling the other way reverses the order. A test of two proportions puts the gap at z = 0.37, short of the 1.96 conventionally required. The Jev comparison reported the same day as 2.6 points is six items out of 231.

One line in the release does clear that bar. Across five repeats, the questions routed somewhere new numbered 2 out of 174 for DAVI and 14 for Jev, a gap carrying z = 3.07. Steady judgment is what a router is for, and the accuracy figure is what went into the headlines.

SelectStar published the six-row results table, the measurement harness and its own list of limitations on GitHub. That is the only reason the percentages could be turned back into counts from outside.

▶ Read: https://blog.pebblous.ai/blog/selectstar-davi-routing-margin/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #SelectStar #DAVI #JevBench #ModelRouting #LLMEvaluation #AIReadyData

---

## Twitter/X (KO)

셀렉트스타 다비가 오퍼스 단독을 앞섰다는 0.8%포인트는 870건 가운데 정답 일곱 건이다.

몇 건만 반대로 떨어져도 순위가 뒤집히는 크기다. 이번 발표에서 통계 문턱을 넘은 숫자는 정확도가 아니라, 다섯 번을 돌려도 같은 모델로 보냈는지 쪽이었다.

https://blog.pebblous.ai/blog/selectstar-davi-routing-margin/ko/

#페블러스 #데이터품질 #셀렉트스타 #DAVI

---

## Twitter/X (EN)

The 0.8 points by which SelectStar's DAVI led Opus alone is seven right answers out of 870.

A handful falling the other way reverses the order. The number in this release that clears the statistical bar is not accuracy but routing consistency.

https://blog.pebblous.ai/blog/selectstar-davi-routing-margin/en/

#Pebblous #DataQuality #SelectStar #DAVI

---

## Facebook (KO)

"모델을 바꿨더니 정확도가 1%포인트 올랐습니다." 이런 한 줄로 시작하는 보고를 받아 보신 적이 있을 겁니다.

그 1%포인트가 몇 건이었는지 되물어 보신 적은 있으신지요.

셀렉트스타가 10월 26일 판단 특화 AI 다비를 공개하면서 한국어 질문 870건의 성적을 함께 내놨습니다. 다비에게 모델을 고르게 한 쪽이 71.1%, 가장 비싼 모델만 쓴 쪽이 70.3%였습니다.

0.8%포인트. 그런데 이 간격을 개수로 되돌리면 870건 가운데 정답 일곱 건입니다. 그중 넷만 반대로 떨어졌다면 순위는 반대로 적혔을 겁니다.

'개수로 되돌리기'. 발표를 읽는 동안 제가 한 일은 그것뿐이었습니다. 비율에 분모를 곱하는, 암산으로 끝나는 계산입니다. 그런데 백분율은 분모가 클수록 간격을 작고 단정해 보이게 만들어서, 되돌리기 전까지는 그 숫자가 얼마나 흔들리는 크기인지 가늠이 되지 않습니다.

셀렉트스타를 탓하는 이야기가 아닙니다. 회사는 문항 수와 반복 횟수를 밝혔고, 결과표 여섯 줄과 자기가 적어 둔 한계까지 깃허브에 통째로 열어 두었습니다. 되돌려 보는 일이 가능했던 것은 그 때문입니다.

"우리가 올리는 평가 수치 옆에는 분모가 적혀 있습니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 점수를 내는 쪽에 서 있으니, 그 점수가 몇 건 위에서 나온 것인지를 같이 적어 두는 일도 저희 몫입니다.

이번 발표에서 통계의 문턱을 넘은 숫자는 정확도가 아니라 다른 줄이었습니다. 다섯 번을 돌리는 동안 보내는 모델이 바뀐 문항이 174개 가운데 둘뿐이었다는 기록인데, 그 줄을 옮긴 보도는 없었습니다. 가장 단단한 숫자가 가장 조용히 지나가는 일은 이 발표만의 사정은 아닐 겁니다.

▶ 전문: https://blog.pebblous.ai/blog/selectstar-davi-routing-margin/ko/

#페블러스 #데이터클리닉 #데이터품질 #셀렉트스타 #DAVI #모델라우팅

---

## Facebook (EN)

"We switched models and accuracy went up a point." You have probably been handed a report that opens on a line like that.

Did anyone ask how many answers that one point was?

On October 26 SelectStar released a judgment model called DAVI, and published its scores on 870 hard Korean questions. Letting DAVI pick the model scored 71.1%. Using the most expensive model throughout scored 70.3%.

Eight tenths of a point. Converted back into answers, that is seven out of 870. Had four of them fallen the other way, the order in the headline would have been the other way too.

'Converting back into answers.' That is all I did while reading the release: multiply a rate by its denominator, arithmetic you can finish in your head. A percentage with a large denominator makes a gap look small and settled, and until you convert it back there is no way to feel how far that number can move.

None of this is a complaint about SelectStar. The company reported the item count and the number of repeats, and put the full six-row table and its own list of limitations on GitHub. The conversion was possible only because of that.

"Is there a denominator written next to the evaluation numbers we circulate?"

Pebblous renders the quality of AI training data as a number, with DataClinic. Standing on the scoring side means the count a score was taken from belongs in the report alongside it.

The one figure in this release that did clear the statistical bar was not accuracy. Across five repeats, only two questions out of 174 were ever routed somewhere new, and no article carried that line. The sturdiest number passing by the most quietly is unlikely to be unique to this release.

▶ Read: https://blog.pebblous.ai/blog/selectstar-davi-routing-margin/en/

#Pebblous #DataClinic #DataQuality #SelectStar #DAVI #ModelRouting
