# SNS 홍보 글: 0이어야 할 압전 계수를 채워 넣은 소재 예측 모델

> 소스: blog/parity-label-impossible-piezoelectric-prediction/ko/index.html
> 생성일: 2026-08-23
> URL: https://blog.pebblous.ai/blog/parity-label-impossible-piezoelectric-prediction/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

같은 데이터와 같은 시드로 훈련한 두 모델이 물리 법칙 앞에서 정반대로 갈렸습니다. 달랐던 것은 모델 내부의 특징에 패리티 라벨, 그러니까 좌우를 뒤집으면 부호가 바뀌는 양인지를 적어 두었는가 한 비트였습니다.

8월 19일 arXiv에 올라온 논문에서 저자들은 NequIP과 Allegro, MACE를 그 한 비트만 빼고 두 벌씩 만들었습니다. 검증 대상은 중심대칭 결정의 압전 계수입니다. 이 값은 작을 것으로 기대되는 값이 아니라 노이만 원리가 정확히 0으로 못 박아 둔 값입니다. 그래서 0이 아닌 예측은 오차가 아니라 물리적으로 불가능한 값이 됩니다.

라벨을 단 쪽에서는 위반이 한 건도 나오지 않았습니다. 라벨을 뗀 쪽은 결정 2,000개의 90~96%에서 임계값을 넘었고, 넘은 값의 크기는 훈련 데이터에 들어 있던 진짜 압전 텐서와 같은 스케일이었습니다.

표현력이 모자라서 생긴 격차는 아닙니다. 모든 차수를 짝수로 선언하면 텐서곱 경로가 오히려 늘어나기 때문에, 라벨을 뗀 쪽이 파라미터를 0.2~39.8% 더 들고 있었습니다. 정확도를 내주고 산 안전장치도 아니었습니다. 압전 텐서에서는 라벨을 단 쪽이 세 모델 모두에서 더 낮은 오차를 냈습니다.

데이터로 메우는 경로는 닫혀 있었습니다. 정답 0을 붙여 훈련시킨 바로 그 결정들을 다시 예측시켜도 열 개 중 아홉 개꼴로 0이 아니었습니다. 0 라벨을 64배로 늘렸을 때 위반하는 결정의 비율은 0.895에서 0.858로 움직였습니다. 공개된 범용 포텐셜의 동결된 특징 위에 얹은 판독 헤드도 백본의 대칭군을 그대로 물려받았습니다.

저자들이 감사한 공개 아키텍처 18개 중 3랭크 텐서를 낼 수 있는 것은 12개였고, 그중 절반만 패리티를 타입으로 들고 있었습니다. 이 정보를 모델 카드에 적어 둔 곳은 하나도 없었습니다. 페블러스가 데이터 품질을 진단하며 반복해 확인하는 것도 같은 순서입니다. 데이터를 어디까지 다듬을지 정하기 전에, 그 데이터가 통과하는 표현이 무엇을 표현할 수 있게 지어져 있는지 먼저 봅니다.

▶ 전문: https://blog.pebblous.ai/blog/parity-label-impossible-piezoelectric-prediction/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #등변신경망 #패리티 #압전계수 #NequIP #MACE #AIReadyData

---

## LinkedIn (EN)

Two models trained on the same data with the same seed came out on opposite sides of a physical law. The only difference was one bit: whether the features inside the model carried a parity label, marking which quantities flip sign when space is inverted.

In a paper posted to arXiv on 19 August, the authors built NequIP, Allegro and MACE twice each, holding everything fixed except that bit. The test case was the piezoelectric response of centrosymmetric crystals. Symmetry pins that value at exactly zero rather than merely small, so any nonzero prediction is not an error margin but a physically impossible result.

The labelled models produced no violations at all. The unlabelled ones crossed the threshold on 90 to 96 percent of 2,000 crystals, and the magnitudes they produced sat on the same scale as the real piezoelectric tensors in the training set.

Capacity does not explain the gap. Declaring every degree even opens up additional tensor-product paths, so the unlabelled models actually carried 0.2 to 39.8 percent more parameters. Nor was the guarantee bought with accuracy: on the piezoelectric target, the labelled models scored lower error across all three architectures.

Training could not close it either. Retrained on centrosymmetric crystals labelled with exact zeros, the models still returned nonzero values on roughly nine out of ten of those same crystals. Scaling the zeros up 64-fold shrank the magnitudes but moved the violation rate only from 0.895 to 0.858. A readout head sitting on the frozen features of a public universal potential simply inherits the backbone's symmetry group.

Of the 18 public architectures the authors audited, 12 can emit rank-3 tensors, and exactly half of those carry parity as a type. Not one model card records it. That ordering is familiar from data quality work at Pebblous: before deciding how far to clean a dataset, look at what the representation it passes through was built to be able to express.

▶ Read: https://blog.pebblous.ai/blog/parity-label-impossible-piezoelectric-prediction/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #EquivariantNeuralNetworks #Parity #Piezoelectricity #NequIP #MACE #AIReadyData

---

## Twitter/X (KO)

중심대칭 결정의 압전 계수는 대칭성이 정확히 0으로 못 박아 둔 값입니다. 같은 데이터와 같은 시드로 훈련한 두 모델 중, 특징에 패리티 라벨이 없는 쪽은 결정 2,000개의 90~96%에서 0이 아닌 값을 냈습니다.

정답 0을 붙여 다시 훈련시켜도 위반은 줄기만 하고 사라지지 않았습니다. 데이터를 더 넣어서는 못 고치는 오류가 있습니다.

https://blog.pebblous.ai/blog/parity-label-impossible-piezoelectric-prediction/ko/

#페블러스 #데이터품질 #등변신경망 #NequIP

---

## Twitter/X (EN)

Symmetry pins the piezoelectric response of a centrosymmetric crystal at exactly zero. Of two models trained on identical data and seeds, the one without parity labels on its features returned nonzero values for 90 to 96 percent of 2,000 such crystals.

Retraining on exact zeros reduced the violations without removing them. Some errors do not close from the data side.

https://blog.pebblous.ai/blog/parity-label-impossible-piezoelectric-prediction/en/

#Pebblous #DataQuality #EquivariantNeuralNetworks #NequIP

---

## Facebook (KO)

"거의 0"과 "정확히 0"을 같은 값으로 취급한 적이 있습니다.

10의 마이너스 몇 승이면 넘어가도 된다고 생각했습니다.

이번 주 arXiv에 올라온 소재 예측 논문을 읽다가 그 습관이 다시 걸렸습니다.

중심대칭 결정의 압전 계수는 작을 것으로 기대되는 값이 아닙니다. 결정이 가진 대칭이 그 값을 정확히 0으로 못 박아 둡니다. 그래서 0이 아닌 예측은 조금 부정확한 값이 아니라, 존재할 수 없는 값이 됩니다.

저자들은 NequIP과 Allegro, MACE를 두 벌씩 만들었습니다.

데이터도 시드도 같고, 모델 내부의 특징에 '좌우를 뒤집으면 부호가 바뀌는 양인가'를 적어 두었는지 하나만 달랐습니다.

그 한 비트를 뗀 쪽은 중심대칭 결정 2,000개 가운데 열에 아홉 이상에서 0이 아닌 값을 냈습니다. 라벨을 단 쪽은 한 건도 내지 않았습니다.

오래 붙들린 대목은 그다음이었습니다.

정답 0을 붙여 훈련시킨 바로 그 결정들을 다시 물어봐도, 대부분 여전히 0이 아니었습니다. 0 라벨을 64배로 늘리자 값은 작아졌지만 위반하는 결정의 비율은 거의 제자리였습니다. 논문의 표현을 빌리면, 더 좋은 회귀 모델이 되었으되 여전히 불가능한 값을 예측합니다.

"이 모델은 0을 배울 수 있는가, 아니면 애초에 0을 말할 수 있게 지어져 있는가?"

저자들이 공개 아키텍처 18개를 뒤져 보니, 특징의 대칭군을 모델 카드에 적어 둔 곳은 하나도 없었습니다. 최대 각운동량 차수는 대개 공개되는데 패리티 플래그는 그렇지 않습니다. 저는 이것을 '적히지 않는 한 비트'라고 불러 두고 싶습니다. 상류에서 한 번 정해지고, 우리가 합류하기 전에, 기록되지 않은 채로 내려오는 결정입니다.

페블러스가 데이터 품질을 진단하며 자주 마주치는 장면과 겹칩니다. 결과가 어긋나면 팀이 가장 먼저 손대는 곳은 대개 데이터입니다. 더 모으고, 더 정제하고, 라벨을 다시 답니다. 그런데 이 논문이 보여 준 오류는 그 경로로 닫히지 않았습니다.

확인 자체는 어렵지 않다고 합니다. 무작위로 초기화한 모델에 반사를 한 번 걸어 출력이 어떻게 변하는지 보면 몇 초 만에 판정됩니다.

어려운 쪽은 그 몇 초를 쓸 생각이 언제 드는가일지도 모르겠습니다.

https://blog.pebblous.ai/blog/parity-label-impossible-piezoelectric-prediction/ko/

#페블러스 #등변신경망 #압전계수 #NequIP #데이터품질 #DataClinic

---

## Facebook (EN)

I have treated "almost zero" and "exactly zero" as the same number.

Ten to the minus something looked close enough to move on.

A materials prediction paper posted to arXiv this week brought that habit back to me.

The piezoelectric response of a centrosymmetric crystal is not a small quantity. The symmetry of the crystal pins it at exactly zero. So a nonzero prediction is not a slightly inaccurate value. It is a value that cannot exist.

The authors built NequIP, Allegro and MACE twice each.

Same data, same seeds, and one difference: whether the features inside the model recorded which quantities flip sign when space is inverted.

The models without that bit returned nonzero values for more than nine in ten of 2,000 centrosymmetric crystals. The models with it returned none.

What stayed with me was what came next.

Retrained on those exact crystals with exact zeros as the answer, the models still returned nonzero values on most of them. Scaling the zeros up 64-fold made the numbers smaller while the fraction of crystals in violation barely moved. In the paper's own words, the model becomes a better regressor and still predicts the impossible.

"Can this model learn zero, or was it built to be able to say zero in the first place?"

Across 18 public architectures the authors examined, not one model card records the symmetry group of its features. Maximum angular momentum is usually published. The parity flag is not. I have started thinking of it as the bit nobody writes down: decided once upstream, before we join the project, and inherited without a record.

It overlaps with something we keep meeting in data quality work at Pebblous. When results come out wrong, the first place a team reaches for is the data. Collect more, clean harder, relabel. The error in this paper does not close along that path.

Checking is not hard, apparently. Apply a single reflection to a randomly initialised model and watch what the output does, and you have your answer in seconds.

The harder part may be when it occurs to us to spend those seconds.

https://blog.pebblous.ai/blog/parity-label-impossible-piezoelectric-prediction/en/

#Pebblous #EquivariantNeuralNetworks #Piezoelectricity #NequIP #DataQuality #DataClinic
