# SNS 홍보 글: 표를 채우는 파운데이션 모델이 갖지 못한 물리 단위

> 소스: blog/tabular-foundation-model-physics-units/ko/index.html
> 생성일: 2026-09-06
> URL: https://blog.pebblous.ai/blog/tabular-foundation-model-physics-units/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

물리 방정식 316개로 짠 시험대에서 표 파운데이션 모델 네 종이 전통 방식 여섯 종을 모두 눌렀습니다.

몬트리올대와 Mila 연구진은 공개된 표를 내려받는 대신 방정식에서 표를 매번 새로 생성해 잡음과 표본 수를 직접 통제했습니다. 라이브러리 기본값으로도 앞섰고, 상대에게 튜닝과 앙상블을 붙여 줘도 순위는 뒤집히지 않았습니다. 학습 기반 모델에 가장 유리한 조건을 걸었을 때조차 평균 순위는 8.47 대 9.85로 격차가 좁아졌을 뿐입니다.

이 모델들은 표의 가려진 셀을 되살리도록 미리 학습해 두고, 새 표가 오면 컨텍스트에 넣어 한 번 통과시킵니다. 그 한 번의 통과가 사후예측분포의 근사이기 때문에, 물어야 할 것은 정확도가 아니라 사전분포에 무엇이 들어 있는가가 됩니다.

저자들이 승리의 속을 열자 두 자리가 비어 있었습니다. 잡음이 전혀 없는 데이터에서 정답 구간 폭은 0인데, 예측 분포를 내놓는 세 모델은 폭을 끝내 놓지 못했습니다. 물리량에 붙은 단위도 마찬가지여서, 차원으로 줄일 여지가 큰 과업에서 가장 강한 모델인 TabPFN-3는 오히려 유의하게 나빠졌습니다.

논문은 이들을 뛰어난 보간기라고 부르면서, 물리 모델이 되려면 물리를 담은 사전분포가 필요하다고 적고 끝납니다. 페블러스가 데이터 품질을 진단하며 자주 만나는 표도 값은 깨끗한데 그 값을 무엇으로 쟀는지가 어디에도 적혀 있지 않은 표입니다.

▶ 전문: https://blog.pebblous.ai/blog/tabular-foundation-model-physics-units/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #표파운데이션모델 #TabPFN #메타데이터 #물리단위 #Mila

---

## LinkedIn (EN)

Four tabular foundation models beat six conventional methods across a bench built from 316 physical equations.

Researchers at Université de Montréal and Mila loaded no published table. Every table was regenerated from its equation, which left noise level and sample count under their control. The foundation models led at library defaults, and the ordering survived after the baselines were handed tuning and ensembling. Under the conditions most favorable to those baselines the mean rank came in at 8.47 against 9.85, a narrower margin rather than a reversal.

These models are pretrained to recover masked cells, and a new table is answered by one forward pass through the context window. That pass approximates the posterior predictive, so the question worth asking is not how accurate the model is but what its prior contains.

Opening the win revealed two absences. On data carrying no noise at all the correct predictive width is zero, and the three models that emit a distribution never let go of theirs. Units fared no better: on tasks with the most room for dimensional reduction, TabPFN-3, the strongest model in the study, got significantly worse.

The paper calls them excellent interpolators and closes by saying that a physical model would need a prior containing physics. The tables Pebblous meets in data quality work look much the same, with clean values and no record of what those values were measured with.

▶ Read: https://blog.pebblous.ai/blog/tabular-foundation-model-physics-units/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #TabularFoundationModel #TabPFN #Metadata #PhysicalUnits #Mila

---

## Twitter/X (KO)

물리 방정식 316개로 만든 시험대에서 표 파운데이션 모델이 전통 방식 여섯 종을 모두 눌렀습니다. 그런데 잡음이 전혀 없는 데이터에서도 분포를 내놓는 모델들은 예측 구간 폭을 0으로 놓지 못했고, 열이 미터인지 피트인지는 사전분포에 없었습니다.

표는 잘 채우지만 아직 물리 모델은 아니라는 것이 논문의 결론입니다.

https://blog.pebblous.ai/blog/tabular-foundation-model-physics-units/ko/

#페블러스 #데이터품질 #TabPFN #표파운데이션모델

---

## Twitter/X (EN)

Tabular foundation models beat six conventional methods on a bench of 316 physical equations. Yet on data with no noise at all, the ones that emit a distribution never let their predictive width fall to zero, and nothing in the prior says whether a column is meters or feet.

Excellent at filling tables, the paper concludes, and not yet physical models.

https://blog.pebblous.ai/blog/tabular-foundation-model-physics-units/en/

#Pebblous #DataQuality #TabPFN #TabularFoundationModel

---

## Facebook (KO)

열 이름은 있는데 단위가 없는 표를 받아 본 적이 있으신지요.

숫자는 가지런한데, 이 값을 무엇으로 쟀는지는 아무 칸에도 적혀 있지 않은 표 말입니다.

요즘 나온 모델들은 그런 표의 빈칸도 아주 잘 채웁니다. 9월 2일 arXiv에 올라온 논문 한 편이 그 잘함이 어디까지인지를 실제로 재어 놓았습니다.

몬트리올대와 Mila 연구진은 물리 방정식 316개에서 표를 새로 뽑아 표 파운데이션 모델 네 종과 전통 방식 여섯 종을 겨루게 했습니다. 네 종이 모든 구간에서 앞섰습니다. 상대에게 튜닝과 앙상블을 붙여 줘도 순위는 뒤집히지 않았습니다.

비어 있는 자리는 저자들이 그 승리의 속을 열어 본 다음에 나왔습니다.

잡음을 전혀 넣지 않은 데이터를 주면 정답은 명확합니다. 불확실성의 폭은 0이어야 합니다. 그런데 예측 분포를 내놓는 세 모델은 표본을 아무리 늘려도 그 폭을 놓지 못했습니다. 사전학습에 쓰인 세계에는 잡음이 없는 자리가 아예 없었기 때문입니다. 없는 자리로는 아무리 데이터를 부어도 옮겨 갈 수 없습니다.

두 번째 자리가 단위입니다. 물리량에는 차원이 붙어 있어서, 변수 다섯 개로 쓰인 법칙이 실제로는 무차원군 두 개에만 기댈 수 있습니다. 물리 문제의 유효 차원은 열 개수보다 훨씬 낮은 경우가 많고, 학습 기반 모델 중에는 그 구조를 이득으로 바꿔 쓰는 것도 있었습니다. 열의 순서도 구분하지 않고 단위도 보지 못하는 모델에게는 그리로 들어갈 입구가 없습니다.

"이 열이 미터인지 피트인지, 모델은 어디서 알게 됩니까?"

저희는 이런 것들을 '값에 붙은 것들'이라고 부르고 있습니다. 단위, 정밀도, 이 열이 계측기에서 읽은 값인지 계산으로 유도된 값인지. 결측과 이상값은 데이터만 봐도 잡아낼 수 있지만, 값에 붙은 것들은 데이터에서 복원되지 않습니다. 페블러스가 데이터 품질을 진단하며 가장 자주 마주치는 공백도 여기입니다.

이 논문은 그 공백을 어떻게 메울지까지 시험하지는 않았습니다. 다만 모델이 애초에 표현할 수 없는 것이 무엇인지를 실측으로 좁혀 두었습니다.

스키마에 무엇을 남길지 정하는 일은 그다음에 오는 것 같습니다.

https://blog.pebblous.ai/blog/tabular-foundation-model-physics-units/ko/

#페블러스 #데이터품질 #데이터클리닉 #TabPFN #표파운데이션모델 #AIReadyData

---

## Facebook (EN)

Have you ever been handed a table where the columns have names but no units?

The numbers line up neatly, and nowhere in the sheet does it say what any of them were measured with.

Models are now very good at filling in the blanks of a table like that. A paper posted to arXiv on September 2 went and measured how far that goodness actually reaches.

Researchers at Université de Montréal and Mila regenerated tables from 316 physical equations and put four tabular foundation models against six conventional methods. The four led in every stratum. Handing the baselines tuning and ensembling did not reverse the ordering.

The absences turned up when the authors opened that win.

Give these models data with no noise in it at all and the right answer is unambiguous. The uncertainty should have zero width. The three models that emit a distribution never got there, no matter how many samples they were shown. The world they were pretrained on has no noiseless place in it, and no amount of data moves a model to a place its prior never allowed.

The second absence is units. Physical quantities carry dimensions, and a law written with five variables can turn out to depend on only two dimensionless groups. The effective dimension of a physical problem is often far below its column count, and some of the trained baselines converted that structure into a gain. A model that cannot see the units, and does not distinguish the order of its columns, has no door into it.

"Where would a model learn that this column is meters and not feet?"

We have taken to calling these things what is attached to the values. The unit, the precision, whether a column was read off an instrument or derived by calculation. Missing entries and outliers can be caught from the data itself. What is attached to the values cannot be recovered from it, and that is the gap we run into most often in data quality work at Pebblous.

The paper does not test how to close that gap. What it does is narrow down, by measurement, what these models were never able to represent in the first place.

Deciding what to keep in a schema seems to be the thing that comes after.

https://blog.pebblous.ai/blog/tabular-foundation-model-physics-units/en/

#Pebblous #DataQuality #DataClinic #TabPFN #TabularFoundationModel #AIReadyData
