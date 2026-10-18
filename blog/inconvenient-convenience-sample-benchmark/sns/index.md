# SNS 홍보 글: INCONVENIENT 시험, 쉽게 모은 데이터가 AI를 무너뜨린다

> 소스: blog/inconvenient-convenience-sample-benchmark/
> 생성일: 2026-10-19
> URL: https://blog.pebblous.ai/blog/inconvenient-convenience-sample-benchmark/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

학습이 끝날 때까지 지표는 아무 이상도 알리지 않았습니다. 그런데 같은 모델을 원래 모집단에 올려 보니 성능이 평균 20~45%만큼 사라져 있었습니다.

10월 15일 arXiv에 올라온 INCONVENIENT는 미시간 주립대와 헨리 포드 헬스 연구진이 만든 표 데이터 벤치마크입니다. 표 형태 데이터셋 200종에서 변수와 정답의 관계를 의도적으로 비튼 학습 표본 약 1만 5500개를 만들고, 평가는 원래 모집단에서 그대로 합니다. 바꾼 것은 데이터를 어떻게 모았는가 하나뿐입니다.

기존 분포 변화 벤치마크는 병원이나 지역처럼 자연히 생긴 도메인으로 데이터를 갈랐습니다. 그러면 성적이 떨어져도 처음 보는 도메인에 적응하지 못한 탓인지, 치우친 표본에서 모집단의 관계를 복원하지 못한 탓인지 가릴 수 없습니다. 평가 쪽을 모집단에 고정하고 학습 표본만 비틀면 그 물음이 정리됩니다.

순위에는 직관을 거스르는 대목이 있습니다. 치우치지 않은 데이터에서 성적이 낮은 축에 있던 릿지 회귀와 다층 신경망이, 치우친 표본에서는 하락폭이 가장 컸습니다. 규제가 센 모델일수록 표본에 적힌 관계를 그대로 받아 적기 때문인데, 검증셋도 같은 표본에서 나오니 모델 안쪽에서는 이상 신호가 잡히지 않습니다.

한계도 논문에 적혀 있습니다. 여기서 비트는 것은 참조 선형모델의 계수이고, 현실의 수집 편향이 모두 그 모양을 하고 있지는 않습니다. 난이도 손잡이 셋 가운데 배율 하나는 저자들 스스로 일관되게 작동하지 않는다고 밝혔습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 라벨이 맞는지, 빈 칸이 얼마나 되는지는 표를 열면 셀 수 있습니다. 그 표가 어떤 사람들만 모아 만든 것인지는 표를 아무리 들여다봐도 세어지지 않습니다.

남는 물음은 벤치마크의 이름이 가리키는 자리에 있습니다. 우리 학습 데이터는 모집단을 닮아서 모인 것입니까, 그저 모으기 쉬워서 모인 것입니까.

▶ 전문: https://blog.pebblous.ai/blog/inconvenient-convenience-sample-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #INCONVENIENT #편의표본 #분포변화 #arXiv #ICLR2027

---

## LinkedIn (EN)

The metrics flagged nothing right up to the end of training. Put the same models back on the population they were built to serve, and 20% to 45% of their performance had gone on average.

INCONVENIENT, posted to arXiv on 15 October by researchers at Michigan State University and Henry Ford Health, is a tabular benchmark that varies exactly one thing: how the training data was gathered. It builds roughly 15,500 training samples out of 200 tabular datasets, each one with the relationship between features and target deliberately bent, and then evaluates on the original population as it stands.

Earlier distribution-shift suites split data along naturally occurring domains such as hospital or region. When a score falls under that design, a failure to adapt to an unseen domain cannot be told apart from a failure to recover the population's relationships out of a skewed sample. Pin the evaluation side and twist only the training side, and the question resolves.

The ranking holds the counterintuitive finding. Ridge regression and the multilayer neural network sat at the low end on in-distribution score, and on skewed samples they took the largest drops of the seven. Heavily regularised models copy down whatever relationship the sample records, and since the validation split comes out of that same sample, nothing inside the model objects.

The paper states its limits. What gets bent here are the coefficients of a reference linear model, and real collection bias does not always take that shape. Of the three difficulty dials the authors built, they report that the magnitude one does not behave consistently.

Pebblous rates the quality of AI training data with DataClinic. Whether the labels are right and how many cells are empty can be counted by opening the table. Which people the table was assembled from is not something counting inside it will reach.

Which leaves the question the benchmark is named for. Did your training data arrive because it resembles the population, or because it was the data you could get?

▶ Read: https://blog.pebblous.ai/blog/inconvenient-convenience-sample-benchmark/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #INCONVENIENT #ConvenienceSample #DistributionShift #arXiv #ICLR2027

---

## Twitter/X (KO)

구하기 쉬워서 모인 데이터로 학습하면 얼마나 손해인지만 따로 재는 벤치마크가 나왔습니다. 평가는 원래 모집단 그대로 두고 학습 표본만 비틉니다.

표준 모델 일곱 종이 평균적으로 성능의 20~45%를 잃었고, 학습 중의 검증 지표는 끝까지 아무 경고도 띄우지 않았습니다.

https://blog.pebblous.ai/blog/inconvenient-convenience-sample-benchmark/ko/

#페블러스 #데이터품질 #INCONVENIENT #AIReadyData

---

## Twitter/X (EN)

A new tabular benchmark isolates one cost: training on data that was gathered because it was easy to get. Only the training sample is skewed, and evaluation stays on the population.

Seven standard models lost 20% to 45% of their performance on average, and the validation metrics never raised a flag.

https://blog.pebblous.ai/blog/inconvenient-convenience-sample-benchmark/en/

#Pebblous #DataQuality #INCONVENIENT #AIReadyData

---

## Facebook (KO)

모델은 잘 맞는데 현장에 내보내면 이상하게 군다는 이야기를 가끔 듣습니다.

지표를 다시 뽑아 봐도 숫자는 멀쩡합니다. 학습할 때 보던 검증 점수도 그대로입니다.

이달 arXiv에 올라온 INCONVENIENT라는 벤치마크가 그 장면을 실험으로 재현했습니다.

표 형태 데이터셋 200종에서 학습 표본만 한쪽으로 치우치게 추려 내고, 평가는 원래 모집단에서 그대로 합니다. 바꾼 것은 데이터를 어떻게 모았는가 하나뿐입니다.

'손닿는 데서 모은 데이터'. 통계학은 그렇게 모인 표본을 편의표본이라 부릅니다. 한 병원의 환자, 한 플랫폼의 사용자, 답해 준 사람만 모인 설문이 다 여기에 들어갑니다.

표준 모델 일곱 종이 그런 표본 위에서 평균적으로 성능의 20~45%를 잃었습니다.

이름대로 불편한 대목은 손실의 크기가 아닙니다. 검증셋이 학습셋과 같은 표본에서 나왔기 때문에, 무너지는 내내 모델 안쪽에서는 아무 신호도 뜨지 않았다는 쪽입니다.

"우리가 보고 있는 점수는 세상에 붙은 점수입니까, 우리가 모을 수 있었던 데이터에 붙은 점수입니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 라벨이 맞는지, 빈 칸이 얼마나 되는지는 표를 열면 셀 수 있습니다. 그 표에 누가 빠져 있는지는 표 안에 적혀 있지 않습니다.

논문은 한계도 함께 적어 두었습니다. 여기서 비튼 것은 참조 선형모델의 계수이고, 현실의 수집 편향이 모두 그 모양을 하고 있지는 않습니다.

그래도 수집 방식 자체를 변수로 올려 재 보면, 품질 점검표의 어느 칸에도 없던 위험이 숫자로 나옵니다.

데이터가 어디서 왔고 누가 빠져 있는지를 적어 두는 한 줄이, 나중에 되짚을 자리를 남긴다는 뜻이기도 합니다.

▸ https://blog.pebblous.ai/blog/inconvenient-convenience-sample-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #AIReadyData #INCONVENIENT #편의표본

---

## Facebook (EN)

Every so often someone says the model tests well and then behaves strangely once it is out in the field.

Pull the metrics again and the numbers look fine. The validation score watched during training sits where it always sat.

A benchmark called INCONVENIENT, posted to arXiv this month, staged that scene as an experiment.

Out of 200 tabular datasets it skews only the training sample to one side, and evaluates on the original population untouched. The one thing it varies is how the data was gathered.

Data collected wherever hands can reach. Statistics has a name for a sample like that, a convenience sample. The patients of one hospital, the users of one platform, the people who happened to answer a survey all belong to it.

Seven standard models lost, on average, between 20% and 45% of their performance on samples built that way.

The inconvenient part, true to the name, is not the size of the loss. It is that the validation split came out of the same skewed sample, so all through the collapse nothing inside the model objected.

"Is the score in front of us attached to the world, or to the data we happened to be able to collect?"

Pebblous rates the quality of AI training data with DataClinic. Whether the labels are right and how many cells are empty can be counted by opening the table. Who is missing from that table is not written anywhere inside it.

The paper sets down its own limits as well. What gets bent here are the coefficients of a reference linear model, and real collection bias does not always take that shape.

Even so, make the collection method itself a variable and measure it, and a risk that sits under no column of the quality checklist comes out as a number.

Which is also to say that one line recording where the data came from and who is missing from it leaves somewhere to return to later.

▸ https://blog.pebblous.ai/blog/inconvenient-convenience-sample-benchmark/en/

#Pebblous #DataClinic #DataQuality #AIReadyData #INCONVENIENT #ConvenienceSample
