# SNS 홍보 글: 가짜 표로만 배운 AI TabPFN, 더 키우면 진짜 표도 잘 풀까?

> 소스: blog/tabpfn-scaling-laws-synthetic-vs-real
> 생성일: 2026-11-26
> URL (KO): https://blog.pebblous.ai/blog/tabpfn-scaling-laws-synthetic-vs-real/ko/
> URL (EN): https://blog.pebblous.ai/blog/tabpfn-scaling-laws-synthetic-vs-real/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

표 데이터 모델 TabPFN의 규모 법칙이 합성 데이터에서는 맞았고 실제 데이터에서는 어긋났다.

프라이부르크 대학과 Prior Labs 연구진은 11월 18일 arXiv에 공개한 프리프린트(동료 심사 전)에서 크기와 학습 조건을 달리한 모델을 6,120회 학습시켰다. 약 80,500 GPU시간이 들었다. 적은 계산량으로 세운 공식을 열 배 바깥으로 끌고 나가자, 합성 표에서 잰 검증 손실은 예측한 자리에 그대로 떨어졌다. 같은 공식으로 실제 데이터 성적을 예측하면 0.020만큼 좋게 봤고, 어긋난 방향은 한쪽이었다. TabPFN 계열은 사전학습에 실제 표를 한 장도 쓰지 않고 생성기가 지어낸 표만 본다. Prior Labs는 TabPFN을 제품으로 만드는 회사다.

평가 쪽 결과는 더 직접적이다. 평가 데이터셋 몇 개로 고른 설정은 그 선택만으로 성적이 부풀려졌다. 부풀림이 측정 잡음에 묻히는 지점은 음의 로그가능도로 재면 8개, ROC AUC로 재면 20개였다. 20은 이 실험이 시험할 수 있던 가장 큰 값이기도 하다.

합성 데이터로 학습한 모델의 성적을 받는 팀이 지금 셀 것은 하나다. 그 성적을 확인한 실제 데이터셋이 몇 개인가.

▶ 전문: https://blog.pebblous.ai/blog/tabpfn-scaling-laws-synthetic-vs-real/ko/
#TabPFN #합성데이터 #스케일링법칙 #표데이터 #페블러스

---

## LinkedIn · Facebook (EN)

The scaling law of TabPFN, a tabular model pretrained only on invented tables, held on synthetic data and drifted on real data.

Researchers from the University of Freiburg, TU Delft and Prior Labs trained 6,120 models of varying size and setup over roughly 80,500 GPU-hours, in a preprint posted to arXiv on November 18 and not yet peer reviewed. A curve fitted on the cheaper runs was then carried an order of magnitude further out. On synthetic validation loss it landed almost exactly where it had predicted. On real tabular benchmarks the same curve overstated the model by 0.020 in negative log-likelihood, and it erred in one direction only. Prior Labs, which sells TabPFN as a product and was acquired by SAP in May, is among the author affiliations.

The evaluation finding is the blunter one. A configuration chosen on a handful of benchmark datasets scored better at selection time than on datasets held out from that choice. The inflation sank into measurement noise at eight datasets when scored by log-likelihood, and only at twenty when scored by ROC AUC. Twenty was also the largest number this design could test.

For teams taking delivery of models trained on synthetic data, the figure worth counting is how many real datasets stand behind the reported score.

▶ Read: https://blog.pebblous.ai/blog/tabpfn-scaling-laws-synthetic-vs-real/en/
#TabPFN #SyntheticData #ScalingLaws #TabularData #Pebblous
