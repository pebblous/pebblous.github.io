# SNS 홍보 글: 비슷한 단백질을 찾지 않았더니, 구조 예측이 더 정확해졌다

> 소스: blog/protein-structure-prediction-without-msa/ko/index.html
> 생성일: 2026-07-02
> URL: https://blog.pebblous.ai/blog/protein-structure-prediction-without-msa/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

단백질 구조 예측에서 '비슷한 단백질을 더 많이 찾는' 대신 그 데이터를 아예 걷어냈더니, 정확도가 오히려 올라갔습니다.

AlphaFold2의 정확도는 상당 부분 동종 서열(MSA) 검색에서 나왔습니다. 그 데이터를 빼면 평균 TM-score가 0.80에서 0.41로 반 토막 납니다. 정확도의 병목이 모델 크기가 아니라 참조 데이터였다는 뜻입니다.

Nature Machine Intelligence에 실린 TDFold는 그 자리를 데이터로 메우지 않았습니다. 잔기 사이의 거리와 방향을 2차원 이미지처럼 다시 정의하고, 스테이블 디퓨전으로 그 기하 지도를 생성했습니다. 검색으로 찾던 정보를 이미지 생성 모델이 대신 그려 낸 것입니다.

결과는 CASP16에서 GDT-TS 71.91. MSA 없는 단일 서열 방법 중 최고였고, 친척 서열이 아예 없는 고아 단백질에서 특히 앞섰습니다.

다만 동종 서열을 전부 쓴 AlphaFold를 넘어선 것은 아닙니다. 데이터를 걷어낸 같은 조건의 방법들 사이에서 가장 정확했다는 이야기입니다.

'데이터를 더 모을까'가 답이 되기 전에, '문제를 다르게 표현할 수 있나'를 먼저 물어볼 만한 사례입니다.

▶ 전문: https://blog.pebblous.ai/blog/protein-structure-prediction-without-msa/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #단백질구조예측 #단일서열 #diffusion #TDFold #AlphaFold

---

## LinkedIn (EN)

In protein structure prediction, removing the "find similar proteins" step, rather than scaling it up, made the predictions more accurate.

Much of AlphaFold2's accuracy came from searching databases for homologous sequences (MSA). Strip that away and its average TM-score collapses from 0.80 to 0.41. The real bottleneck was reference data, not model size.

A new method in Nature Machine Intelligence, TDFold, didn't refill that gap with data. It redefined the distances and orientations between residues as a 2D image, then fine-tuned Stable Diffusion to generate that geometric map. What used to be a database lookup became an image the model draws.

On CASP16 it scored 71.91 GDT-TS, the best of any single-sequence method, and pulled clearly ahead on orphan proteins with no known relatives.

It has not beaten full-MSA AlphaFold, which still leads at 74 to 79. The honest claim is narrower: with the data stripped away, TDFold beat every method working under the same constraint.

Before "we need more data" becomes the answer, it's worth asking whether the problem can simply be written down differently.

▶ Read: https://blog.pebblous.ai/blog/protein-structure-prediction-without-msa/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #ProteinStructurePrediction #SingleSequence #DiffusionModel #TDFold #AlphaFold

---

## Twitter/X (KO)

AlphaFold의 정확도는 상당 부분 '비슷한 단백질 찾기'(MSA)에서 나왔습니다. 그 데이터를 빼면 정확도가 반 토막 납니다.

TDFold는 그 데이터를 안 쓰는 대신 단백질 기하학을 이미지로 다시 정의하고 디퓨전으로 생성했습니다. 데이터가 부족한 문제가 실은 표현이 부족한 문제일 수 있습니다.

▶ https://blog.pebblous.ai/blog/protein-structure-prediction-without-msa/ko/

#페블러스 #데이터품질 #TDFold #AlphaFold #단백질구조예측

---

## Twitter/X (EN)

Much of AlphaFold's accuracy came from searching for similar proteins (MSA). Remove that data and accuracy roughly halves.

TDFold skips the search entirely. It redefines protein geometry as an image and generates it with diffusion. Sometimes a data-scarce problem is really a representation problem.

▶ https://blog.pebblous.ai/blog/protein-structure-prediction-without-msa/en/

#Pebblous #DataQuality #TDFold #AlphaFold #ProteinFolding

---

## Facebook (KO)

성능이 아쉬울 때 우리가 가장 먼저 떠올리는 답은 대개 하나입니다.

데이터를 더 모으자.

단백질 구조 예측도 오랫동안 그 길을 걸었습니다. AlphaFold이 그토록 정확했던 이유의 상당 부분은, 사실 거대한 데이터베이스를 뒤져 '비슷하게 생긴 단백질'을 수백, 수천 개씩 찾아 붙이는 능력에 있었습니다. 그 데이터를 걷어내면 정확도는 절반 가까이 무너졌습니다.

그런데 올해 한 연구팀은 반대로 움직였습니다. 그 데이터를 더 찾는 대신, 아예 걷어냈습니다. 대신 단백질의 기하학, 곧 어느 자리가 어느 자리와 얼마나 떨어져 있는지를 한 장의 이미지처럼 다시 적고, 그림을 그리는 AI인 스테이블 디퓨전에게 그 이미지를 그려 달라고 했습니다.

검색으로 찾던 것을, 생성으로 만든 것입니다.

결과는 조금 뜻밖이었습니다. 데이터를 걷어낸 조건에서, 오히려 같은 조건의 다른 방법들보다 더 정확했습니다. 친척 서열이 하나도 없어 참조할 목록조차 만들 수 없는 단백질에서 특히 그랬습니다.

'데이터가 부족한 문제'라고 믿었던 것이, 실은 '표현이 부족한 문제'였던 걸까요?

더 많이 모으기 전에, 다르게 적어 볼 수는 없을까. 페블러스가 AI-Ready Data를 이야기하며 오래 되짚어 온 질문도 여기서 멀지 않습니다. 데이터를 얼마나 모으느냐 못지않게, 그 데이터를 어떤 형태로 준비하고 어떻게 표현하느냐가 결과를 바꾼다는 것. 이 연구는 그 생각에 실험실 밖의 증거 하나를 조용히 더해 줍니다.

https://blog.pebblous.ai/blog/protein-structure-prediction-without-msa/ko/

#페블러스 #데이터품질 #AIReadyData #TDFold #AlphaFold #단백질구조예측

---

## Facebook (EN)

When something isn't accurate enough, our first instinct is almost always the same.

Get more data.

Protein structure prediction lived by that rule for years. A large part of why AlphaFold worked so well was its ability to search enormous databases and pull in hundreds, even thousands, of "similar-looking proteins." Take that data away, and its accuracy nearly halved.

This year, a team went the other direction. Instead of gathering more of that data, they removed it entirely. In its place, they wrote a protein's geometry, how far each position sits from every other, as if it were a single image, and asked an image-generating AI, Stable Diffusion, to draw it.

What used to be a search became something the model generates.

The result was quietly surprising. With the data stripped away, it was more accurate than other methods working under the same constraint. And it pulled ahead most clearly on proteins with no known relatives, where there is no list to look up at all.

Was it ever really a problem of too little data? Or a problem of how we chose to write it down?

That question isn't far from what we keep returning to at Pebblous when we talk about AI-Ready Data. How much data you gather matters, but so does the form you prepare it in and how you represent it. This work adds a quiet piece of evidence from outside the lab.

https://blog.pebblous.ai/blog/protein-structure-prediction-without-msa/en/

#Pebblous #DataQuality #AIReadyData #TDFold #AlphaFold #ProteinStructurePrediction
