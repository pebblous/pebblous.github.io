# SNS 홍보 글: 복지·의료 배분 알고리즘은 정확해질수록 격차를 키웠다

> 소스: blog/accuracy-trap-scarce-allocation/
> 생성일: 2026-08-17
> URL: https://blog.pebblous.ai/blog/accuracy-trap-scarce-allocation/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

같은 모델, 같은 점수인데 예산만 줄었습니다.

토론토의 한 아동보호기관에서 대상 가구의 95%를 지원할 수 있을 때 두 지역 팀의 선발 확률은 사실상 같았습니다. 상위 5%만 지원할 수 있는 구간에서는 2.86배로 벌어졌습니다.

이달 arXiv에 공개된 논문 The Accuracy Trap이 이 관계를 D ∝ exp(t·ρ·Δ)로 정리합니다. 자원 희소성과 순위 정확도가 더해지지 않고 곱해져 지수 자리에 들어간다는 뜻입니다.

기제는 단순합니다. 부정확한 점수는 임계선 근처의 선발을 뒤섞어 아래쪽 집단의 몫을 0이 아닌 값으로 남겨 두는데, 모델이 정밀해지면 그 완충재가 걷힙니다.

저자들이 못 박는 대목은 편향 교정이 답이 되지 못한다는 것입니다. 식에 들어가는 Δ는 디바이어싱을 다 마친 뒤 남는 잔여이고, 정확도는 그 잔여를 지우는 대신 증폭합니다. 나라도 인구도 모델 구조도 겹치지 않는 미국 SEER 유방암 자료에서 같은 궤적이 나왔습니다.

페블러스가 데이터 품질 현장에서 반복해 만나는 장면도 여기에 가깝습니다. 지표를 올리는 일에는 담당자가 붙지만, 그 지표가 무엇을 나누는 데 쓰이는지는 대개 문서에 적혀 있지 않습니다.

남는 질문은 점수가 얼마나 정확한가가 아니라, 그 점수가 무엇을 나누는 데 쓰이는가입니다.

▶ 전문: https://blog.pebblous.ai/blog/accuracy-trap-scarce-allocation/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI거버넌스 #AI공정성 #알고리즘배분 #AccuracyTrap #arXiv #SEER

---

## LinkedIn (EN)

A risk score used to prioritise caseworkers in Toronto barely separated two regional teams while the agency could serve 95 percent of its families. In the band where only the top 5 percent get served, the same score from the same model split them 2.86 to one.

The Accuracy Trap, posted to arXiv this month, writes that relationship as D ∝ exp(t·ρ·Δ). Scarcity and ranking accuracy do not add. They multiply, and they sit in the exponent. Coarse scores scramble selection near the cutoff, which is what leaves the lower group with odds above zero. Sharpen the model and that buffer is gone.

Bias correction does not close it. The Δ in the formula is what remains after debiasing has done everything it can, and accuracy amplifies the remainder rather than erasing it. A U.S. breast cancer registry of 135,482 patients, sharing no country, population or model structure with the child welfare case, traced the same curve.

What we run into in data quality work at Pebblous is close to this. Someone is always assigned to raise a metric, while what that metric is used to divide is rarely written down anywhere.

For anyone approving a model, the question the paper leaves behind is not how accurate the score is. It is what the score is being used to divide.

▶ Read: https://blog.pebblous.ai/blog/accuracy-trap-scarce-allocation/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIGovernance #AIFairness #AlgorithmicAllocation #AccuracyTrap #arXiv #SEER

---

## Twitter/X (KO)

토론토 아동복지 기관의 위험 점수는 상위 5%만 지원할 수 있는 구간에서 두 지역의 선발 확률을 2.86배로 갈라놨습니다. 지원 여력이 넉넉할 때는 두 지역을 거의 구분하지 못하던 점수입니다.

모델은 그대로였습니다. 줄어든 건 자원입니다.

https://blog.pebblous.ai/blog/accuracy-trap-scarce-allocation/ko/

#페블러스 #데이터품질 #AI공정성 #AccuracyTrap

---

## Twitter/X (EN)

A child welfare risk score split two Toronto regions 2.86 to one once only the top 5 percent of families could be served. With funding to serve nearly everyone, the same score barely told them apart.

The model never changed. The resources did.

https://blog.pebblous.ai/blog/accuracy-trap-scarce-allocation/en/

#Pebblous #DataQuality #AIFairness #AccuracyTrap

---

## Facebook (KO)

지원 여력이 줄었다는 통보를 받은 담당자가 가장 먼저 하는 일은 명단을 다시 정렬하는 것입니다.

점수는 그대로입니다. 어제 쓰던 모델도 그대로입니다.

바뀌는 건 어디에 선을 긋느냐, 그 하나입니다.

토론토의 한 아동보호기관 데이터에서 그 선을 95%에서 5%로 옮기자 두 지역 팀이 맡은 가구의 선발 확률 비가 1.03배에서 2.86배가 됐습니다. 미국 유방암 등록 자료에서도 같은 모양의 곡선이 나왔습니다. 이달 arXiv에 공개된 논문이 확인한 궤적입니다.

읽다가 손이 멎은 문장은 따로 있었습니다. 부정확함이 그동안 형평의 완충재로 작동해 왔다는 대목입니다.

어설픈 점수는 경계선 근처를 무작위로 뒤섞습니다. 그 뒤섞임 덕분에 뒤쪽에 놓인 집단에게도 0이 아닌 확률이 남아 있었습니다.

모델이 정밀해지면 그 잡음이 걷힙니다. 남은 자리는 기대값에 충실하게 채워집니다.

"그렇다면 정확도를 올리는 일은 누구를 위한 개선입니까?"

논문은 이 질문에 답을 주지 않습니다. 대신 답을 미룰 수 없게 만드는 계산을 내놓습니다. 격차가 어느 구간에서 얼마나 빨리 벌어지는지를 미리 재 두면, 추첨을 섞을지 공급을 늘릴지가 취향의 문제에서 수치를 놓고 다투는 문제로 옮겨 갑니다. 저자들은 이 계산을 '배분 변동성'이라고 부릅니다.

페블러스가 데이터 품질 현장에서 자주 보는 장면도 여기서 멀지 않습니다. 지표를 올리는 일에는 담당자가 붙습니다. 그 지표가 무엇을 나누는 데 쓰이는지는 대개 어느 문서에도 적혀 있지 않습니다.

정확도는 오랫동안 그 자체로 선한 방향이었습니다. 그 전제가 흔들리는 자리를 하나 확인한 셈인데, 무엇을 정확히 맞힐 것인가보다 그 점수가 무엇을 나누는지를 먼저 적어 두는 편이 지금은 더 급해 보입니다.

▸ https://blog.pebblous.ai/blog/accuracy-trap-scarce-allocation/ko/

#페블러스 #데이터클리닉 #데이터품질 #AI공정성 #알고리즘배분 #AccuracyTrap

---

## Facebook (EN)

The first thing a caseworker does after being told the budget has shrunk is sort the list again.

The scores are unchanged. So is yesterday's model.

The only thing that moves is where the line gets drawn.

In data from a Toronto child protection agency, moving that line from 95 percent of families down to 5 percent changed the ratio of selection odds between two regional teams from 1.03 to 2.86. A U.S. cancer registry produced a curve of the same shape. A paper posted to arXiv this month traced both.

The sentence that stopped me was a different one. Inaccuracy, the authors write, has been working all along as an unintended buffer for equity.

A coarse score scrambles the region around the cutoff. That scrambling is what left the group behind the line with odds above zero.

Sharpen the model and the noise clears. The remaining places fill in faithfully with what the expectation predicts.

"So who is an accuracy improvement actually for?"

The paper does not answer that. It offers something else: a calculation that makes the question hard to postpone. Measure in advance how fast the gap widens and in which band, and the choice between mixing in a lottery and expanding supply moves from taste to arithmetic. The authors call the measurement allocative volatility.

What we see in data quality work at Pebblous is not far from this. Someone is always assigned to raise a metric. What that metric is used to divide is rarely written down anywhere.

Accuracy has long been a good direction on its own terms. Here is one place where that assumption gives way, and writing down what a score divides now looks more urgent than deciding what it should predict.

▸ https://blog.pebblous.ai/blog/accuracy-trap-scarce-allocation/en/

#Pebblous #DataClinic #DataQuality #AIFairness #AlgorithmicAllocation #AccuracyTrap
