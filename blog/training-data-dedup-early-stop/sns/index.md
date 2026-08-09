# SNS 홍보 글: 학습 데이터 중복 제거를 8배 앞당긴 조기 중단 규칙

> 소스: blog/training-data-dedup-early-stop/ko/index.html
> 생성일: 2026-08-10
> URL (KO): https://blog.pebblous.ai/blog/training-data-dedup-early-stop/ko/
> URL (EN): https://blog.pebblous.ai/blog/training-data-dedup-early-stop/en/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

1억 건 학습 데이터의 중복 검색을 8.38배 앞당긴 것은 새 인덱스가 아니라 검색을 언제 그만둘지 정하는 규칙 한 줄이었습니다.

SieveIVF는 유사도 임계값을 넘는 후보가 정해진 개수의 파티션에서 연속으로 나오지 않으면 그 쿼리를 포기합니다. 학습된 예측기도 인덱스 변경도 필요 없고, Hunyuan의 실제 워크로드에서 조건을 만족하는 이웃은 대부분 첫 여덟 파티션 안에 있었습니다. 그 뒤의 탐색은 클라우드 청구서로만 남고 있었습니다.

대가는 논문에 함께 적혀 있습니다. DEEP-100M에서 윈도우를 8로 두면 임계값을 넘는 top-10 이웃의 2.29%p를 놓치고, 윈도우를 넓히면 손실과 속도 이득이 같이 깎입니다. 놓친 중복은 삭제되지 않고 학습 코퍼스에 그대로 남기 때문에, 위험을 정하는 것은 놓친 비율이 아니라 그 항목이 코퍼스 안에서 몇 번 반복되느냐입니다.

그런데 그 손실 폭을 정한 윈도우는 데이터셋 카드 어디에도 적히지 않습니다. 임계값과 임베딩 모델, 조기 중단 윈도우, 중심점 할당 방식, 측정된 재현율 손실과 측정 방법. 다섯 줄이면 몇 달 뒤 모델에서 암기나 평가셋 오염이 의심될 때 정제 단계를 용의선상에 올릴 수 있습니다. 페블러스가 AI-Ready Data를 이야기할 때 데이터 품질과 나란히 두는 것이 이 공정 기록입니다.

▶ 전문: https://blog.pebblous.ai/blog/training-data-dedup-early-stop/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #학습데이터 #중복제거 #벡터검색 #데이터거버넌스 #SieveIVF #Hunyuan

---

## LinkedIn (EN)

What made deduplication of a 100-million-vector training corpus 8.38x faster was not a new index. It was a rule about when to stop searching.

SieveIVF abandons a query once a set number of consecutive partitions return no candidate above the similarity threshold. No trained predictor and no change to the index: on Hunyuan's production workloads the qualifying neighbours were almost always inside the first eight partitions, and everything probed after that showed up only on the cloud bill.

The cost is printed next to the gain. On DEEP-100M with the window set to 8, the search misses 2.29 points of the top-10 neighbours that clear the threshold, and widening the window shrinks the loss along with the speedup. Missed duplicates are not deleted: they stay in the training corpus, where the risk is set by the repetition count of what was missed rather than by the miss rate itself.

The window that fixed that loss appears on no dataset card. Threshold and embedding model, early-stop window, whether centroid assignment was exact or approximate, the measured recall loss and how it was measured. Five lines, and a cleaning step stays on the suspect list months later when memorisation or eval contamination turns up. When Pebblous talks about AI-Ready Data, this record of the pipeline sits right next to data quality.

▶ Read: https://blog.pebblous.ai/blog/training-data-dedup-early-stop/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #TrainingData #Deduplication #VectorSearch #DataGovernance #SieveIVF #Hunyuan

---

## Twitter/X (KO)

학습 데이터 중복 검색을 8배 앞당긴 것은 새 인덱스가 아니라 검색을 언제 그만둘지 정하는 규칙 한 줄이었습니다. 대가는 놓친 이웃 2.29%p입니다.

정직한 거래입니다. 다만 그 손실 폭을 정한 설정값은 데이터셋 카드 어디에도 적히지 않습니다.

https://blog.pebblous.ai/blog/training-data-dedup-early-stop/ko/

#페블러스 #SieveIVF #학습데이터 #데이터거버넌스

---

## Twitter/X (EN)

Deduplicating training data got 8x faster not from a new index but from a rule about when to stop searching. The price is 2.29 points of missed neighbours.

An honest trade. The setting that fixed that loss appears on no dataset card.

https://blog.pebblous.ai/blog/training-data-dedup-early-stop/en/

#Pebblous #SieveIVF #TrainingData #DataGovernance

---

## Facebook (KO)

데이터 정제 일정표에서 가장 늦게 끝나는 칸이 중복 제거인 경우가 있습니다.

라벨링처럼 사람 손이 많이 가는 단계도 아니고, 필터링처럼 결과가 눈에 띄게 달라지는 단계도 아닌데 그렇습니다. 억 개의 벡터에서 서로 가까운 이웃을 찾는 일이기 때문입니다.

이 단계를 여덟 배 앞당긴 방법이 논문으로 나왔습니다. 인덱스를 새로 짜지도 않았고, 언제 멈출지 맞히는 예측기를 학습시키지도 않았습니다. 조건을 만족하는 후보가 여덟 번 연속 나오지 않으면 그 쿼리를 그냥 포기합니다. 그것이 전부입니다.

좋았던 것은 대가를 같이 적어 두었다는 점입니다. 8.38배를 벌고, 찾았어야 할 이웃의 2.29%p를 잃습니다. 윈도우를 넓히면 손실은 줄고 속도도 같이 줄어듭니다. 정직한 거래입니다.

속도 이야기를 다 읽고 나서도 정리되지 않은 것은 다른 쪽이었습니다.

"그 2.29%p는 어디로 갔습니까?"

지워지지 않았습니다. 학습 코퍼스에 그대로 남아 다음 단계로 넘어갑니다. 중복이 남으면 모델이 학습 문장을 그대로 뱉는 빈도가 올라간다는 것은 이미 여러 차례 측정됐고, 그 위험은 놓친 항목이 코퍼스 안에서 몇 번 반복되느냐에 따라 크게 갈립니다. 한 번씩만 등장하는 항목 2.29%p와 수백 번 반복되는 문서 뭉치 2.29%p는 같은 숫자가 아닙니다.

그런데 그 손실 폭을 정한 값은 어디에도 적히지 않습니다. 이런 값에는 이름이 없습니다. 굳이 붙이자면 '기록되지 않는 정제 파라미터'입니다.

출처와 수집 방법과 라이선스와 안전 필터링은 데이터셋 카드가 점점 요구합니다. 검색을 얼마나 일찍 멈췄는가는 그 목록에 오른 적이 없습니다. 로그에는 남고 문서에는 없는 값입니다. 몇 달 뒤 모델에서 이상한 것이 발견됐을 때, 그 배치의 정제 강도가 어땠는지 되짚을 방법이 없다는 뜻이기도 합니다.

임계값과 임베딩 모델, 조기 중단 윈도우, 중심점 할당 방식, 측정한 손실과 그 측정 방법. 다섯 줄이면 충분합니다. 페블러스가 AI-Ready Data를 이야기할 때 데이터 품질과 나란히 두는 것이 이 공정 기록입니다. 어떤 값을 골랐고 그 대가로 무엇을 포기했는지가 데이터와 함께 움직여야, 그 데이터로 만든 모델을 나중에 설명할 수 있습니다.

거래 자체는 나쁘지 않습니다. 조건을 적어 두지 않은 거래가 남을 뿐입니다.

▸ https://blog.pebblous.ai/blog/training-data-dedup-early-stop/ko/

#페블러스 #데이터클리닉 #SieveIVF #학습데이터 #중복제거 #데이터거버넌스

---

## Facebook (EN)

On some data cleaning schedules, the last box to be ticked is deduplication.

Not because anyone is labelling by hand, and not because the results shift dramatically the way filtering does. It is simply the job of finding, among a hundred million vectors, which ones sit close to which.

A paper has now made that step eight times faster. No new index, no predictor trained to guess when a query should stop. If eight consecutive partitions come back with nothing above the threshold, the query is abandoned. That is the whole rule.

What I liked was that the price is written down beside the gain. You get 8.38x, and you lose 2.29 points of the neighbours you were supposed to find. Widen the window and the loss falls along with the speed. An honest trade.

What stayed unsettled after the speed section was something else.

"Where did those 2.29 points go?"

They were not deleted. They remain in the training corpus and travel on to the next stage. That leftover duplicates raise how often a model reproduces its training text verbatim has been measured more than once, and the size of that risk turns on how often the missed items repeat. Missing 2.29 points of sequences that appear once is not the same number as missing a cluster that appears hundreds of times.

And the setting that fixed the size of that loss is written nowhere. There is no name for a value like this. Call it an unrecorded cleaning parameter.

Provenance, collection method, licence, safety filtering: dataset cards ask for more of these every year. How early the search was stopped has never been on the list. It lives in the logs and not in the documentation, which is another way of saying that months later, when something odd surfaces in the model, there is no way back to how hard that batch was cleaned.

Threshold and embedding model, early-stop window, exact or approximate centroid assignment, the measured loss and the method behind it. Five lines is enough. When Pebblous talks about AI-Ready Data, this record of the pipeline sits right next to data quality. What was chosen, and what was given up for it, has to travel with the data if the model built on it is to be explained later.

The trade itself is fine. What is left over is a trade with no terms written down.

▸ https://blog.pebblous.ai/blog/training-data-dedup-early-stop/en/

#Pebblous #DataClinic #SieveIVF #TrainingData #Deduplication #DataGovernance
