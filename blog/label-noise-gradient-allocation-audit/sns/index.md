# SNS 홍보 글: 라벨 노이즈 진단법 분석, 틀린 답까지 외운 모델로 오답 비율 추정

> 소스: blog/label-noise-gradient-allocation-audit/ko/index.html
> 생성일: 2026-11-28
> URL (KO): https://blog.pebblous.ai/blog/label-noise-gradient-allocation-audit/ko/
> URL (EN): https://blog.pebblous.ai/blog/label-noise-gradient-allocation-audit/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

학습을 마친 분류 모델 하나로 학습 데이터의 틀린 라벨 비율을 추정하는 방법이 arXiv에 공개됐다.

시드니대학교 Yuchen Li 등 다섯 명이 11월 17일 제출한 프리프린트(동료 심사 전)는 예시마다 기울기가 어느 파라미터로 쏠리는지를 같은 라벨 예시들의 평균과 비교한다. 틀린 라벨까지 거의 다 외운 모델에서 예측 기반 추정은 실제 오답 비율의 6% 이하만 잡았다. 이 방법은 CIFAR-10에서 54~96%를 잡았다. 표시된 예시를 빼고 다시 학습하자 시험 정확도는 최대 47%p 올랐다.

데이터를 가진 쪽은 원본 대신 예시당 숫자 몇 개만 넘기면 되고, 5,000장 진단은 GPU 1장으로 14~27초에 끝났다. 전문은 이 추정치를 ISO/IEC 5259-2 데이터 라벨 정확성 항목의 하한으로 보고하는 방안을 짚었다.

다만 신뢰도 학습(confident learning)과 맞붙인 11개 설정에서 판별력 차이는 유의하지 않았고, 비율 추정은 신뢰도 학습이 실제 값에 더 가까웠다.

▶ 전문: https://blog.pebblous.ai/blog/label-noise-gradient-allocation-audit/ko/
#라벨노이즈 #데이터품질 #ISO5259 #arXiv #페블러스

---

## LinkedIn · Facebook (EN)

A single trained classifier is enough to estimate how many of its training labels are wrong, according to a new preprint on arXiv.

The paper, submitted on November 17 by five researchers led by Yuchen Li at the University of Sydney and not yet peer reviewed, compares where each example's gradient pushes the model's parameters with the average for its labeled class. Once a model has memorized nearly all of its wrong labels, estimates built on predictions catch at most 6% of the true error rate. The new method caught 54–96% on CIFAR-10. Dropping the flagged examples and retraining raised test accuracy by up to 47 points.

The data owner never hands over images or text, only a few numbers per example, and auditing five thousand images took 14 to 27 seconds on one GPU. The full analysis reads the estimate as a lower bound for data label accuracy under ISO/IEC 5259-2.

The method does not clearly beat confident learning. Across 11 noisy settings the gap in detection was not statistically significant, and confident learning came closer to the true error rate.

▶ Read: https://blog.pebblous.ai/blog/label-noise-gradient-allocation-audit/en/
#LabelNoise #DataQuality #ISO5259 #arXiv #Pebblous
