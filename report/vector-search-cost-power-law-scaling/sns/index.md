# SNS 홍보 글: 벡터 검색 비용은 데이터가 커질수록 거듭제곱으로 늘었다

> 소스: report/vector-search-cost-power-law-scaling/
> 생성일: 2026-09-05
> URL(KO): https://blog.pebblous.ai/report/vector-search-cost-power-law-scaling/ko/
> URL(EN): https://blog.pebblous.ai/report/vector-search-cost-power-law-scaling/en/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

벡터 검색 비용은 데이터가 커질수록 로그가 아니라 거듭제곱으로 늘었다. 토론토대 연구진이 데이터셋 여덟 개를, 그중 셋은 10억 건까지 키우며 잰 결과다.

실험 설계는 현장 관행을 그대로 옮겼다. 재현율을 목표에 붙들어 놓고 데이터만 키우면서 질의 한 번에 드는 거리 계산 횟수를 셌다. 로그 확장이었다면 로그 축 위에서 아래로 휘어야 할 곡선이 휘지 않고 곧게 뻗었다. 재현율 목표 90%부터 99%까지, 인덱스 설정 열여섯 가지, HNSW와 Vamana 양쪽에서 같은 모양이 나왔다.

비용은 여전히 선형보다 훨씬 느리게 늘기 때문에 벡터 DB가 규모를 감당하지 못한다는 이야기는 아니다. 흔들리는 것은 계획의 기준선이다. 가장 관대한 로그 가정은 데이터가 100배일 때 비용을 1.3배로 잡는다. 논문의 식과 계수로 계산하면 대부분의 데이터셋은 3배 안팎이었다(우리 계산).

그리고 곡선을 가른 것은 쌓인 벡터의 개수가 아니라 데이터의 내재 차원이었다. 10억 건까지 키운 SIFT는 끝까지 곧게 뻗었다. 전체가 232만 건뿐인 OpenAI 임베딩은 자기 크기의 끝에서 이미 처지는 조짐을 보였다. 다만 이 논문은 사흘 전 올라온 프리프린트다. 실무에서 가장 많이 쓰는 HNSW의 딱 맞는 상한은 저자들이 열린 문제로 남겨 두었다.

로그라는 결론은 벤더 문서 여섯 곳으로 옮겨 갔다. 그 근거였던 원 논문의 확장 실험이 8차원 합성 벡터 하나였다는 조건은 따라가지 않았다.

▶ 전문: https://blog.pebblous.ai/report/vector-search-cost-power-law-scaling/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #벡터검색 #벡터DB #HNSW #Vamana #내재차원

---

## LinkedIn (EN)

Vector search does not get logarithmically slower as data grows. It gets more expensive as a power of dataset size. University of Toronto researchers grew eight datasets, three of them to a billion points, to measure it.

The design copies what operators already do. Pin recall to a target, grow the data, and count the distance computations one query costs. Under logarithmic scaling the curve should bend downward on log-log axes. It stayed straight, at every recall target from 90% to 99%, across sixteen index configurations, on both HNSW and Vamana.

Cost still grows far slower than linearly, so this is not a story about vector databases buckling. What moves is where the planning baseline sits. The most generous logarithmic assumption budgets 1.3x when data grows 100x. Running the paper's formula and fitted coefficients puts most datasets near 3x (our calculation).

What separates those curves is not how many vectors have piled up but the data's intrinsic dimensionality. SIFT stayed straight all the way to a billion points. OpenAI embeddings, all 2.32 million of them, were already showing signs of drifting below the fitted power law at the end of their own size. The caveats are real. The paper is a three-day-old preprint, and the authors leave a tight upper bound for HNSW, the index most teams actually run, as an open question.

Six vendor documents carried the logarithmic conclusion forward. The condition behind it did not travel with it: the scaling experiment in the original HNSW paper used a single set of 8-dimensional synthetic vectors.

▶ Read: https://blog.pebblous.ai/report/vector-search-cost-power-law-scaling/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #VectorSearch #VectorDatabase #HNSW #Vamana #IntrinsicDimensionality

---

## Twitter/X (KO)

벡터 검색 비용은 데이터가 커질수록 로그가 아니라 거듭제곱으로 늘었다. 토론토대 연구진이 데이터셋 여덟 개를 키우며 잰 결과다.

곡선을 가른 것은 쌓인 벡터의 개수가 아니라 데이터의 내재 차원이었다.

▶ https://blog.pebblous.ai/report/vector-search-cost-power-law-scaling/ko/

#페블러스 #벡터검색 #HNSW #벡터DB

---

## Twitter/X (EN)

Vector search cost grew as a power of dataset size, not a logarithm. University of Toronto researchers measured it across eight datasets.

What set the curves apart was not how many vectors had piled up, but the data's intrinsic dimensionality.

▶ https://blog.pebblous.ai/report/vector-search-cost-power-law-scaling/en/

#Pebblous #VectorSearch #HNSW #VectorDatabase

---

## Facebook (KO)

"지금 1천만 건인 인덱스가 내년에 1억 건이 되면, 서버를 얼마나 더 잡아야 하나."

용량 계획서의 이 칸 앞에서 한 번쯤 손이 멈춥니다. 그리고 대개 같은 문장에 기댑니다. 그래프 인덱스는 데이터가 늘어도 검색이 로그로만 느려진다는 문장입니다.

저도 그 문장을 오래 그냥 썼습니다.

토론토대학교 연구진이 그 문장을 크기를 바꿔 가며 실측했습니다. 재현율을 목표에 붙들어 놓고 데이터셋 여덟 개를 키우자, 질의 한 번의 거리 계산 횟수는 로그가 아니라 데이터 크기의 거듭제곱으로 자랐습니다.

곡선은 휘지 않았습니다.

더 오래 남은 건 그다음 관찰이었습니다. 10억 건까지 키운 SIFT는 끝까지 곧게 뻗었고, 전체가 232만 건뿐인 OpenAI 임베딩은 자기 크기의 끝에서 이미 처지는 조짐을 보였습니다. 둘 중 큰 쪽이 먼저 꺾이리라는 직관과 반대입니다. 곡선을 가른 것은 쌓인 개수가 아니라 데이터의 내재 차원이었습니다.

그러니까 계획서가 물어야 할 것은 임베딩을 얼마나 모을까가 아니었습니다.

"우리 데이터는 자기 분포를 얼마나 드러냈나?"

페블러스가 이 논문을 오래 붙들고 본 이유가 여기에 있습니다. 저희는 데이터를 진단하고 품질 성적서를 발급하는 일을 합니다. 지금까지의 진단이 결측과 중복과 라벨 오류 같은 '값의 문제'를 봤다면, 이 논문이 늘려 놓은 자리는 '분포의 문제'입니다. 같은 100만 건이라도 데이터가 놓인 구조가 다르면 내년의 비용 곡선이 다릅니다.

이 논문은 사흘 전 올라온 프리프린트이고, 실무에서 가장 많이 쓰는 HNSW의 딱 맞는 상한은 저자들도 열린 문제로 남겨 두었습니다. 결론을 그대로 옮겨 적기보다, 각자의 데이터에서 한 번 재 보는 쪽이 이 글의 쓸모에 가까울 것 같습니다.

크기를 바꿔 가며 내재 차원을 재는 일은 새 인프라 없이 지금 가진 임베딩만으로 할 수 있습니다. 오늘 오후에 할 수 있는 일이 하나쯤은 남아 있는 셈입니다.

▸ https://blog.pebblous.ai/report/vector-search-cost-power-law-scaling/ko/

#페블러스 #벡터검색 #HNSW #내재차원 #DataClinic #AIReadyData

---

## Facebook (EN)

"Our index holds ten million vectors today. Next year it holds a hundred million. How much more do we provision?"

Everyone writing a capacity plan pauses at that cell. And almost everyone leans on the same sentence: graph indexes only slow down logarithmically as data grows.

I leaned on it too, for a long time, without checking.

Researchers at the University of Toronto checked. They pinned recall to a target, grew eight datasets, and counted the distance computations each query costs. The count rose as a power of dataset size, not as a logarithm.

The curve did not bend.

What stayed with me was the next part. SIFT stayed straight all the way to a billion points. OpenAI embeddings, all 2.32 million of them, were already showing signs of drifting at the end of their own size. Of the two, the smaller one gave way first. What separated the curves was not how many vectors had accumulated but the intrinsic dimensionality of the data underneath them.

So the question a capacity plan should open with is not how many embeddings to collect.

"How much of its own distribution has our data actually revealed?"

That is why this paper stayed on our desk at Pebblous. We diagnose datasets and issue quality reports. Diagnosis has mostly meant problems of value: missing fields, duplicates, mislabeled rows. This paper widens the frame to problems of distribution. Two datasets of a million points each can sit on different structures, and next year they will bill differently.

The paper is a three-day-old preprint, and its authors leave a tight upper bound for HNSW, the index most teams actually run, as an open question. Carrying its conclusion into a plan verbatim would repeat the very habit the paper documents.

Measuring intrinsic dimensionality across sizes takes no new infrastructure. The embeddings you already have are enough to start this afternoon.

▸ https://blog.pebblous.ai/report/vector-search-cost-power-law-scaling/en/

#Pebblous #VectorSearch #HNSW #IntrinsicDimensionality #DataClinic #AIReadyData
