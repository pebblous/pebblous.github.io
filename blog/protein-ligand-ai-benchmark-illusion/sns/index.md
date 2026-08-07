# SNS 홍보 글: 결합 여부는 98% 맞혀도 결합 부위는 못 짚는 신약 예측 AI

> 소스: blog/protein-ligand-ai-benchmark-illusion/
> 생성일: 2026-08-02
> URL: https://blog.pebblous.ai/blog/protein-ligand-ai-benchmark-illusion/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

결합 여부는 거의 완벽히 맞히는 신약 예측 AI가, 그 결합이 어디서 일어나는지는 다섯 번 중 한 번만 짚었다.

2026년 벤치마크 InteractBind는 최상위 모델이 이진 결합 예측에서 AUROC 98.3%를 내면서도 결합 부위는 21.6%만 정확히 국소화한다는 것을 보였다.

같은 해 Kopko 연구진은 표준 벤치마크에서 상관계수 0.8을 기록하던 스코어링 함수가, 학습 데이터와 닮지 않은 신규 표적 앞에서는 0.05 수준까지 무너지는 것을 확인했다.

서로 다른 태스크에서 출발한 두 결과가 같은 지점을 가리킨다. 모델이 학습한 것은 결합의 화학적 기전이 아니라 "이런 단백질에는 이런 리간드가 붙더라"는 통계적 분포다. 그래서 평가셋이 학습셋을 닮았을 때만 점수가 높게 나온다.

사전학습을 더 얹어도 격차는 줄어들 뿐 메워지지 않았다.

신약 AI의 병목은 모델 아키텍처가 아니라 성능을 재는 평가셋의 설계에 있다. AI-Ready Data의 정의가 학습셋을 넘어 누수 없는 평가셋까지 넓어져야 하는 이유다.

▶ 전문: https://blog.pebblous.ai/blog/protein-ligand-ai-benchmark-illusion/ko/

#페블러스 #데이터클리닉 #데이터품질 #AIReadyData #신약AI #AI벤치마크 #단백질리간드 #드러그디스커버리 #InteractBind #데이터편향

---

## LinkedIn (EN)

A drug-discovery AI that calls binding almost perfectly located where that binding happens only one time in five.

The 2026 benchmark InteractBind showed that a top model scoring an AUROC of 98.3% on binary binding prediction pinpointed the actual binding site just 21.6% of the time.

That same year, Kopko and colleagues found that scoring functions posting a correlation of 0.8 on the standard benchmark collapsed to roughly 0.05 on novel targets that did not resemble their training data.

Two results from different tasks point to the same conclusion. These models learned the statistical distribution of their training set — "this kind of protein tends to bind this kind of ligand" — rather than the chemistry of binding. The score stays high only while the test set mirrors the training set.

Adding self-supervised pretraining narrowed the gap but never closed it.

The bottleneck in scientific AI is not model architecture but the design of the set used to measure it. That is why AI-Ready Data has to extend past clean training data to a leakage-free evaluation set.

▶ Read: https://blog.pebblous.ai/blog/protein-ligand-ai-benchmark-illusion/en/

#Pebblous #DataClinic #DataQuality #AIReadyData #DrugDiscovery #AIBenchmark #ProteinLigand #InteractBind #DataBias

---

## Twitter/X (KO)

신약 예측 AI가 결합 여부는 98% 맞히면서 결합 부위는 다섯 번 중 한 번만 짚었다.

모델이 배운 건 결합의 원리가 아니라 학습 데이터의 분포였다. 병목은 모델이 아니라 성능을 재는 평가셋이다.

https://blog.pebblous.ai/blog/protein-ligand-ai-benchmark-illusion/ko/

#페블러스 #데이터품질 #신약AI #AI벤치마크 #InteractBind

---

## Twitter/X (EN)

A drug-discovery AI called binding at 98% but located the binding site only one time in five.

It learned the distribution of its training data, not the chemistry of binding. The bottleneck isn't the model. It's the set that scores it.

https://blog.pebblous.ai/blog/protein-ligand-ai-benchmark-illusion/en/

#Pebblous #DataQuality #DrugDiscovery #AIBenchmark #InteractBind

---

## Facebook (KO)

리더보드에서 98점을 받은 모델을 보면, 우리는 자연스럽게 그 모델이 문제를 이해했다고 믿습니다.

신약을 예측하는 AI도 그랬습니다. 단백질과 약물이 결합하는지 여부를 거의 완벽하게 맞혔으니까요.

그런데 올해 나온 두 벤치마크가 같은 모델에게 다른 질문을 던졌습니다.

"결합하는 건 알겠는데, 그래서 어디에 붙는데?"

답을 맞힌 비율은 다섯 번 중 한 번이었습니다. 결합 여부는 98%를 맞히던 모델이, 정작 결합이 일어나는 자리는 대부분 놓쳤습니다.

처음 보는 표적 앞에서는 더 선명해졌습니다. 표준 벤치마크에서 0.8을 자랑하던 상관계수가, 학습 데이터와 닮지 않은 새 포켓에서는 동전 던지기에 가까운 값으로 주저앉았습니다.

모델이 배운 것은 결합의 원리가 아니라 익숙한 데이터의 분포였던 셈입니다. 시험 문제가 공부한 내용과 닮아 있을 때만 좋은 점수가 나왔던 것이죠.

그래서 요즘 저희가 다시 들여다보는 질문은 이렇습니다. 과학 AI의 진짜 병목은 모델일까요, 아니면 그 실력을 재는 평가셋일까요. 깨끗한 데이터란 학습에 쓰는 데이터만이 아니라, 정직하게 채점하는 시험지까지를 뜻하는 게 아닐까요.

https://blog.pebblous.ai/blog/protein-ligand-ai-benchmark-illusion/ko/

#페블러스 #데이터품질 #신약AI #AI벤치마크 #AIReadyData #InteractBind

---

## Facebook (EN)

When a model scores 98 on a leaderboard, we tend to assume it understood the problem.

The drug-discovery AI looked that way too. It called whether a protein and a drug would bind almost perfectly.

Then two benchmarks this year asked the same model a different question.

"Fine, they bind — but where?"

It got the answer right one time in five. The model that nailed binding at 98% missed the actual site of that binding most of the time.

On targets it had never seen, the picture grew sharper. A correlation that reached 0.8 on the standard benchmark sank close to a coin toss on new pockets that did not resemble its training data.

What the model had learned was not the chemistry of binding but the shape of familiar data. Good scores appeared only when the exam looked like the material it had studied.

So the question we keep returning to is this one. Is the real bottleneck in scientific AI the model, or the set that measures it? Maybe clean data means not only what we train on, but the test sheet that grades it honestly.

https://blog.pebblous.ai/blog/protein-ligand-ai-benchmark-illusion/en/

#Pebblous #DataQuality #DrugDiscovery #AIBenchmark #AIReadyData #InteractBind
