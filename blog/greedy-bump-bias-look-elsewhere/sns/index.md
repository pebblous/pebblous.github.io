# SNS 홍보 글: 찾을 자리를 데이터에 맞춰 고르면 신호는 늘 조금 크다

> 소스: blog/greedy-bump-bias-look-elsewhere/ko/index.html
> 생성일: 2026-09-07
> URL: https://blog.pebblous.ai/blog/greedy-bump-bias-look-elsewhere/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

데이터에서 가장 잘 맞는 자리를 골라 신호를 재면 그 신호는 평균적으로 실제보다 큽니다. 얼마나 큰지도 셀 수 있습니다.

이탈리아 국립핵물리연구소(INFN)의 토마소 도리고가 9월 3일 arXiv에 올린 논문은 그 값을 D/(2Q)로 적었습니다. D는 위치나 폭처럼 데이터를 보고 고른 좌표의 개수, Q는 위치를 고정했을 때의 신호대잡음비입니다. 고르는 좌표가 많을수록, 그리고 신호가 약할수록 커집니다.

같은 D가 신호가 아예 없을 때도 나옵니다. 배경 요동을 신호로 오인할 확률을 다룰 때 국소 유의도에 물리는 시행 계수가 임계값의 D제곱으로 자라기 때문입니다. 논문의 기여는 두 값이 로그를 씌워 한 번 미분하는 것으로 정확히 이어진다는 데 있습니다. 다만 저자는 결론에서 두 문제가 같은 현상은 아니고 같은 기하가 만드는 서로 보완적인 두 극한이라고 선을 그어 두었습니다.

한계도 함께 적혀 있습니다. 계산은 전부 가우시안 잡음 모형 위에서 이뤄졌고 실제 공명 탐색은 대개 포아송 우도를 씁니다. 어느 결과가 그 조건에서 살아남는지는 저자가 다음 과제로 남겼습니다.

논문에는 없는 이야기지만 셈의 구조 자체는 물리학 밖에서도 같습니다. 대시보드에서 가장 튀는 구간을 잘라 보고하는 일도 시작과 끝을 데이터를 보고 정한 것이고, 페블러스가 데이터 품질을 진단하며 자주 만나는 장면도 그 구간을 누가 어떤 기준으로 골랐는지가 기록에 없는 표입니다. 탐색의 자유도를 세지 않으면 발견은 언제나 조금씩 큽니다.

▶ 전문: https://blog.pebblous.ai/blog/greedy-bump-bias-look-elsewhere/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #다중검정 #통계적유의성 #이상치탐지 #탐욕적봉우리편향 #LookElsewhereEffect #INFN #ATLAS

---

## LinkedIn (EN)

Measure a signal at the spot that fits the data best and the measurement comes out larger than the truth, on average. How much larger is a countable quantity.

A paper posted to arXiv on September 3 by Tommaso Dorigo of Italy's National Institute for Nuclear Physics writes that quantity as D/(2Q). D is the number of coordinates, such as position or width, that were chosen from the data. Q is the signal-to-noise ratio you would have had with the position held fixed. The more you choose and the weaker the signal, the larger the inflation.

The same D turns up when there is no signal at all, because the trials factor charged against a local significance grows as the D-th power of the threshold. The paper's contribution is that the two quantities are joined exactly by taking a logarithm and differentiating once. The author is careful in his conclusions to call them not identical phenomena but complementary limits of the same geometry.

The limits are stated as plainly. Every calculation sits on a Gaussian noise model, while real resonance searches are usually built on Poisson likelihoods, and establishing which results survive that move is left as the next step.

The paper does not go here, but the bookkeeping is not a physics matter. Clipping the most striking interval out of a dashboard also sets a start and an end by consulting the data, and the tables Pebblous meets in data quality work rarely record who picked the interval or on what basis. Fail to count the degrees of freedom in a search and the finding will always be a little too big.

▶ Read: https://blog.pebblous.ai/blog/greedy-bump-bias-look-elsewhere/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #MultipleTesting #StatisticalSignificance #AnomalyDetection #GreedyBumpBias #LookElsewhereEffect #INFN #ATLAS

---

## Twitter/X (KO)

데이터에서 가장 잘 맞는 자리를 골라 신호를 재면 그 세기는 평균적으로 참값보다 큽니다. INFN의 토마소 도리고는 부푸는 양이 고른 좌표의 개수를 신호대잡음비의 두 배로 나눈 값이고, 신호가 없을 때 헛것을 볼 확률도 같은 좌표 개수가 정한다는 것을 보였습니다.

탐색의 자유도를 세지 않으면 발견은 언제나 조금씩 큽니다.

https://blog.pebblous.ai/blog/greedy-bump-bias-look-elsewhere/ko/

#페블러스 #데이터품질 #탐욕적봉우리편향 #다중검정

---

## Twitter/X (EN)

Measure a signal where it fits the data best and it comes out bigger than it is. Tommaso Dorigo of INFN shows the inflation equals the number of coordinates you chose divided by twice the signal-to-noise ratio, and that the same count governs how often pure background looks like a find.

Fail to count the degrees of freedom in a search and the finding will always be a little too big.

https://blog.pebblous.ai/blog/greedy-bump-bias-look-elsewhere/en/

#Pebblous #DataQuality #GreedyBumpBias #MultipleTesting

---

## Facebook (KO)

보고서에 붙일 그래프를 고르다가 가장 눈에 띄는 구간에 커서를 대 본 적이 있으신지요.

지난 분기 어디쯤에서 지표가 유난히 튀고, 그 구간만 잘라 내면 이야기가 훨씬 선명해지는 그 순간 말입니다.

입자물리학자들은 같은 일을 오래 해 왔습니다. 새 입자를 찾는 일이 질량 분포 어딘가에 솟은 봉우리를 찾는 일인데, 그 봉우리가 어느 질량에 있는지는 아무도 모르기 때문입니다.

그래서 위치까지 데이터에 맞춰 고르게 됩니다. 그 순간 맞춰지는 템플릿이 그날의 잡음을 따라 조금씩 움직입니다. 움직임 자체에는 선호하는 방향이 없지만 어디로 옮길지는 적합도가 좋아지는 쪽으로 정해지므로, 재어 낸 봉우리는 평균적으로 참값보다 높습니다.

이탈리아 국립핵물리연구소의 토마소 도리고는 2009년 블로그 글에서 이 현상에 탐욕적 봉우리 편향이라는 이름을 붙였고, 9월 3일 arXiv에 올린 논문에서 그 값이 어디서 오는지를 적었습니다.

값은 신호가 약할수록 커집니다.

신호대잡음비가 1일 때 신호 자리에서만 생기는 편향은 0.527이었습니다. 뒤지는 구간의 반범위를 14σ까지 넓히면 다른 자리의 우연한 봉우리가 신호를 눌러 이기는 일이 잦아져 값이 1.053까지 올랐습니다. 두 배입니다.

신호가 세지면 이야기가 달라집니다. 신호대잡음비가 5에서 6쯤에 이르면 얼마나 넓게 뒤졌는지가 만드는 차이가 모의실험의 눈금에서 사라집니다. 눈에 겨우 띄는 이상 신호일수록 더 의심해야 한다는 뜻이기도 합니다.

크기 감각을 주는 사례가 하나 있습니다. 2015년 말 ATLAS가 보고한 750 GeV 부근의 초과는 국소 유의도 3.9σ였지만, 다른 질량에서도 비슷한 요동이 나올 수 있었다는 사실을 셈에 넣은 전역 유의도는 2.1σ였습니다. 이듬해 데이터에서 그 봉우리는 사라졌습니다.

"이 구간의 시작과 끝은 누가, 무엇을 보고 정했습니까?"

저희는 이런 것을 '골라낸 발견'이라고 부르고 있습니다. 구간의 경계, 임계값, 지표, 집단, 기간. 데이터를 보고 정한 것을 하나씩 세면 그것이 곧 탐색의 자유도이고, 그 개수만큼 발견은 조금씩 부풀어 있습니다.

페블러스가 데이터 품질을 진단하며 자주 만나는 장면도 여기입니다. 지표 하나가 유난히 튄 구간을 근거로 다음 결정이 내려지는데, 그 구간을 어떤 기준으로 골랐는지는 어디에도 남아 있지 않습니다. 같은 데이터를 다시 열어도 그 발견이 얼마나 큰지 되짚을 방법이 없습니다.

논문의 수식은 가우시안 잡음 모형 안에서 유도된 것이고, 대시보드로 옮기는 대목은 저희의 해석입니다. 다만 세어 보는 일은 지금도 할 수 있습니다.

무엇을 찾았는지 옆에 어떻게 찾았는지를 한 줄 더 남기는 일부터 시작해 볼까 합니다.

https://blog.pebblous.ai/blog/greedy-bump-bias-look-elsewhere/ko/

#페블러스 #데이터품질 #데이터클리닉 #탐욕적봉우리편향 #LookElsewhereEffect #INFN

---

## Facebook (EN)

Have you ever hovered over the most striking stretch of a chart while deciding which one to put in the report?

That moment somewhere in last quarter where one metric spikes, and clipping out just that stretch makes the story so much cleaner.

Particle physicists have been doing the same thing for a long time. Looking for a new particle means looking for a bump somewhere in a mass distribution, and nobody knows in advance which mass it sits at.

So the position gets chosen from the data too. The moment it is chosen, the fitted template drifts a little with that day's noise. There is no preferred direction in the drift, but you only ever move the way the fit improves, so the bump you measure stands on average higher than the true one.

Tommaso Dorigo of Italy's National Institute for Nuclear Physics gave this the name greedy bump bias in a 2009 blog post, and a paper he posted to arXiv on September 3 sets down where the number comes from.

The number grows as the signal weakens.

At a signal-to-noise ratio of 1, the bias attached to the signal's own bump was 0.527. Widen the half-range you sweep out to 14σ and a chance bump somewhere else beats the signal more often, and the value climbed to 1.053. Twice as large.

Strong signals behave differently. Once the ratio reaches 5 or 6, the difference the swept range makes disappears into the resolution of the simulation. Which is another way of saying that the more marginal an anomaly looks, the more it deserves suspicion.

There is one case that gives a sense of scale. The excess ATLAS reported near 750 GeV in late 2015 carried a local significance of 3.9σ, and the global figure, once the chance of seeing something similar at other masses was counted, was 2.1σ. The bump was gone from the following year's data.

"Who set the start and the end of this interval, and what were they looking at?"

We have taken to calling these things chosen findings. The interval boundaries, the threshold, the metric, the segment, the time window. Count what was set by looking at the data and that count is the search's degrees of freedom, and the finding is inflated by roughly that much.

This is the scene Pebblous runs into often in data quality work. A decision gets made on the strength of the one stretch where a metric spiked, and nothing records the basis on which that stretch was picked. Reopen the same data and there is no way to work out how big the finding really was.

The paper's formulas are derived inside a Gaussian noise model, and carrying them over to a dashboard is our own reading. The counting, though, is available today.

Keeping one more line next to what was found, saying how it was found, seems like the place to start.

https://blog.pebblous.ai/blog/greedy-bump-bias-look-elsewhere/en/

#Pebblous #DataQuality #DataClinic #GreedyBumpBias #LookElsewhereEffect #INFN
