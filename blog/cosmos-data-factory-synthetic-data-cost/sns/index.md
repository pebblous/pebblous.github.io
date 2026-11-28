# SNS 홍보 글: 엔비디아 Cosmos Data Factory, '45배 저렴' 계산은 불일치

> 소스: blog/cosmos-data-factory-synthetic-data-cost/ko/index.html
> 생성일: 2026-11-28
> URL (KO): https://blog.pebblous.ai/blog/cosmos-data-factory-synthetic-data-cost/ko/
> URL (EN): https://blog.pebblous.ai/blog/cosmos-data-factory-synthetic-data-cost/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

엔비디아가 합성데이터 도구 Cosmos Data Factory를 내놓으며 자율주행 장면을 도로 수집보다 약 45배 싸게 만든다고 밝혔다.

11월 18일 엔비디아 개발자 블로그에 실린 발표에 따르면 이 도구는 블루프린트 5종과 스킬 6종으로 짜여 있다. 발표는 서버 하루 비용을 하루 산출량으로 나눠 단가를 냈다고 적었다. 이 계산법을 자율주행 블루프린트에 그대로 적용하면 배수는 17배 남짓으로 줄고, 다른 블루프린트 셋은 계산이 맞는다. 엔비디아는 단가에 연산비만 담았고 데이터 준비와 사람 검수 비용은 빠졌다고 스스로 적었다.

성능 근거로 실린 것은 점검 로봇 회사 ANYbotics 사례 하나다. 원 출처인 Encord 글에 따르면 기존 이상 탐지 모델의 기준을 합성 클립으로 보정해 물체 출현 장면의 재현율이 24% 올랐고, 정상 장면의 오경보도 함께 늘었다. 합성데이터로 학습한 모델과 실데이터로 학습한 모델을 견준 결과는 발표에 없다.

합성데이터 도구를 들이는 팀이 받아 봐야 할 것은 가격표보다, 합성 클립을 넣은 모델을 실제 사례로 다시 채점한 결과다.

▶ 전문: https://blog.pebblous.ai/blog/cosmos-data-factory-synthetic-data-cost/ko/
#엔비디아 #합성데이터 #피지컬AI #CosmosDataFactory #페블러스

---

## LinkedIn · Facebook (EN)

NVIDIA says its new Cosmos Data Factory produces synthetic autonomous-driving scenes about 45 times more cheaply than collecting them on the road.

The toolkit, announced on NVIDIA's developer blog on November 18, bundles five blueprints and six skills for generating physical AI training data. NVIDIA says it derived unit prices by dividing a daily server cost by daily output. Applied as written to the driving blueprint, that method gives a saving of a little over 17x, while three other blueprints in the same announcement check out. NVIDIA also notes that the prices cover compute alone and leave out data preparation and human review.

The only performance evidence is a case from inspection-robot maker ANYbotics, first published by Encord. Synthetic clips were used to recalibrate an existing anomaly detector, lifting recall on object-appearance scenes by 24%, and false alarms on normal scenes rose as well. The announcement contains no comparison between models trained on synthetic data and models trained on real data.

For teams buying synthetic data, the result worth asking for is how a model scores on real cases once the synthetic clips go in. The price list does not include it.

▶ Read: https://blog.pebblous.ai/blog/cosmos-data-factory-synthetic-data-cost/en/
#NVIDIA #SyntheticData #PhysicalAI #CosmosDataFactory #Pebblous
