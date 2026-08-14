# SNS 홍보 글: 항암제 반응 예측 AI, 처음 보는 약에서만 좋아졌다

> 소스: blog/improve-benchmark-drug-response-50k-compounds/ko/index.html
> 생성일: 2026-08-15
> URL: https://blog.pebblous.ai/blog/improve-benchmark-drug-response-50k-compounds/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

약물 반응 예측 벤치마크의 학습 데이터를 여덟 배 가까이 늘렸는데, 네 개 평가 설정 가운데 둘에서만 값이 올랐다.

아르곤 국립연구소 연구진이 arXiv에 공개한 IMPROVE 벤치마크 확장판이다. PharmacoDB를 중심으로 여러 소스를 통합해 화합물 5만 3천여 종, 약물 반응 측정 545만 건까지 키운 다음, 원본과 확장판을 같은 테스트셋으로 나란히 학습시켰다.

오른 자리는 한쪽에 몰려 있었다. 학습에서 한 번도 본 적 없는 약물을 예측하는 설정에서 UNO의 R²가 0.03에서 0.22로 올랐고, 약물과 세포주가 둘 다 처음인 가장 어려운 설정에서는 음수였던 값이 양수로 돌아섰다. 반면 처음 보는 세포주를 다루는 설정은 사실상 제자리였다.

늘린 것이 화합물 축이었기 때문이다. 약을 숫자 목록으로 읽는 모델과 분자 그래프로 읽는 모델이 같은 축에서 오르고 같은 축에서 멈췄으니, 원인은 모델 쪽보다 데이터 쪽에 있다.

저자들은 여기에 단서를 붙였다. 확장판 실험의 78%가 NCI60 한 소스에서 왔기 때문에, 개선이 화학 다양성에서 온 것인지 그 한 소스의 지배력에서 온 것인지 이 실험만으로는 갈라내지 못한다는 것이다. 이미 본 약과 본 세포주를 짝만 바꿔 묻는 쉬운 설정에서는 성능이 오히려 내려갔고, 아직 심사를 거치지 않은 프리프린트다.

데이터를 늘렸다는 보고는 어느 축을 늘렸는지 밝히지 않으면 성능이 어디서 오를지도 말해 주지 않는다. 페블러스가 DataClinic으로 학습·평가 데이터를 진단할 때 서는 자리도 여기다. 지난 분기에 늘린 데이터는 어느 축을 늘렸는가.

▶ 전문: https://blog.pebblous.ai/blog/improve-benchmark-drug-response-50k-compounds/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #약물반응예측 #신약개발AI #IMPROVE #NCI60 #GraphDRP

---

## LinkedIn (EN)

The training data behind a drug response prediction benchmark was grown nearly eightfold, and the numbers moved in only two of the four evaluation settings.

The dataset is the expanded IMPROVE benchmark, posted to arXiv by researchers at Argonne National Laboratory. Sources were integrated around PharmacoDB to reach 53,949 compounds and 5.4 million drug-response measurements, and the original and expanded versions were then trained side by side against the same test folds.

The gains clustered on one side. On the setting that asks a model to predict drugs it never met in training, UNO's R² rose from 0.03 to 0.22, and in the hardest setting, where the drug and the cell line are both new, a negative number turned positive. The setting that deals with unseen cell lines stayed essentially where it was.

What grew was the compound axis. A model that reads a drug as a list of numbers and a model that reads it as a molecular graph rose on the same axis and stalled on the same axis, which points at the data rather than the architecture.

The authors attach a caveat. Because 78 percent of the experiments in the expanded set come from a single source, NCI60, this experiment cannot separate a gain from chemical diversity from a gain from one source's dominance. On the easy setting, where familiar drugs and familiar cell lines are merely re-paired, performance actually fell. This is a preprint that has not been peer reviewed.

A report that data has grown says nothing about where performance will improve unless it names the axis that grew. It is the same ground Pebblous stands on when DataClinic examines training and evaluation data. The data you added last quarter: which axis did it add to?

▶ Read: https://blog.pebblous.ai/blog/improve-benchmark-drug-response-50k-compounds/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DrugResponsePrediction #DrugDiscovery #IMPROVE #NCI60 #GraphDRP

---

## Twitter/X (KO)

항암제 반응 예측 벤치마크의 학습 데이터를 여덟 배 가까이 키웠다. 성능이 오른 것은 처음 보는 약물이 걸린 설정뿐이었고, 처음 보는 세포주는 제자리였다.

늘려야 할 것은 데이터의 양이 아니라 아직 비어 있는 축이었다.

▶ https://blog.pebblous.ai/blog/improve-benchmark-drug-response-50k-compounds/ko/

#페블러스 #데이터품질 #IMPROVE #NCI60

---

## Twitter/X (EN)

The training data behind a cancer drug response benchmark grew nearly eightfold. Performance rose only where the drug was one the model had never seen, and unseen cell lines stayed put.

What needs to grow is not the volume but the axis still left empty.

▶ https://blog.pebblous.ai/blog/improve-benchmark-drug-response-50k-compounds/en/

#Pebblous #DataQuality #IMPROVE #NCI60

---

## Facebook (KO)

"데이터를 더 모으면 좋아집니다."

회의에서 이 문장이 나오면, 대개 아무도 되묻지 않습니다.

저도 되물어 본 적이 없습니다. 더 모으는 쪽이 언제나 옳아 보이니까요.

아르곤 국립연구소 연구진이 항암제 반응 예측 벤치마크를 여덟 배 가까이 키우고, 원본과 확장판에 똑같은 시험지를 주었습니다.

값이 오른 자리는 한쪽에 몰려 있었습니다. 학습에서 한 번도 본 적 없는 약물을 예측하는 설정, 그리고 약물과 세포주가 둘 다 처음인 가장 어려운 설정. 처음 보는 세포주를 다루는 설정은 거의 그대로였습니다.

늘린 것이 화합물 쪽이었기 때문입니다.

늘리지 않은 축은 움직이지 않았습니다.

'비어 있는 축'이라고 불러 볼 수 있는 자리입니다.

건수로는 이 축이 보이지 않습니다. 545만 건이라는 숫자 안에서 실험의 78%는 한 소스에서 왔고, 그 소스가 세포주는 여든다섯 개만 가지고 있었습니다.

"지난 분기에 늘린 데이터는, 어느 축을 늘렸습니까?"

페블러스가 DataClinic으로 학습·평가 데이터를 살필 때 서 있는 자리도 여기서 멀지 않습니다.

건수는 저절로 늘어납니다. 그런데 어느 축이 비어 있는지는 저절로 드러나지 않고, 세어 보는 사람이 있어야 보입니다.

(아직 심사를 거치지 않은 프리프린트라, 수치는 확정된 사실이 아니라 이 연구가 보고한 값으로 읽는 편이 맞겠습니다.)

▶ 전문: https://blog.pebblous.ai/blog/improve-benchmark-drug-response-50k-compounds/ko/

#페블러스 #데이터클리닉 #데이터품질 #AIReadyData #IMPROVE #NCI60

---

## Facebook (EN)

"We just need more data."

When that sentence lands in a meeting, nobody usually asks it a question back.

I never have either. Collecting more always looks like the right side to be on.

Researchers at Argonne National Laboratory grew a cancer drug response benchmark nearly eightfold and then handed the original and the expanded version the exact same exam.

The gains sat on one side. The setting where the model has to predict a drug it never met in training, and the hardest setting of all, where the drug and the cell line are both new. The setting with unseen cell lines barely moved.

Because what grew was the chemistry.

The axis that did not grow did not move.

An empty axis, you might call it.

You cannot see that axis in a row count. Inside 5.4 million measurements, 78 percent came from one source, and that source held only eighty-five cell lines.

"The data you added last quarter: which axis did it add to?"

It is not far from where Pebblous stands when DataClinic looks over training and evaluation data.

Row counts grow on their own. Which axis is empty does not surface on its own, and someone has to go count.

(This is a preprint that has not been through review, so the figures read best as what this study reports rather than settled fact.)

▶ Full piece: https://blog.pebblous.ai/blog/improve-benchmark-drug-response-50k-compounds/en/

#Pebblous #DataClinic #DataQuality #AIReadyData #IMPROVE #NCI60
