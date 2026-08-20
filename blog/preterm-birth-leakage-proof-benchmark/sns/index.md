# SNS 홍보 글: 같은 산모의 기록을 갈라 담아 부풀린 조산 예측 성능

> 소스: blog/preterm-birth-leakage-proof-benchmark/ko/index.html
> 생성일: 2026-08-21
> URL (KO): https://blog.pebblous.ai/blog/preterm-birth-leakage-proof-benchmark/ko/
> URL (EN): https://blog.pebblous.ai/blog/preterm-birth-leakage-proof-benchmark/en/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

자궁 근전도로 조산을 예측하는 모델들은 AUROC 0.80에서 0.97을 보고해 왔습니다. 같은 공개 데이터에서 훈련과 검증을 가르는 선만 옮기자 0.493이 나왔습니다.

오리건주립대의 Sunday A. Adetunji와 라고스 Alifort Hospital의 Rhoda O. Oyewusi가 산모 300명의 기록으로 다시 계산한 값입니다. 신뢰구간을 넉넉히 잡아도 동전 던지기와 구분되지 않았습니다. 논문은 EMBC 2026 게재가 확정됐습니다.

30분짜리 기록 하나를 여러 개의 창으로 쪼개는 것이 이 분야의 표준 전처리입니다. 그 창들을 서로 독립인 표본처럼 취급해 나누면 같은 산모의 조각이 훈련과 검증 양쪽에 들어갑니다. 모델이 배우는 것은 조산으로 이어지는 자궁의 생리가 아니라 이 산모의 신호가 어떻게 생겼는지입니다. 저자들이 남긴 원칙은 한 문장입니다. 재표집의 단위는 성능이 일반화되기를 바라는 단위와 같아야 한다.

성능이 없는 이유가 특징을 잘못 골라서일 가능성은 따로 확인했습니다. 특징 조합을 바꾸고 일부를 무작위로 버려 봐도 결과는 0.478에서 0.504 사이를 벗어나지 않았습니다. 다만 문헌의 높은 성적은 이 논문이 같은 파이프라인으로 재현한 값이 아니라 보고된 값이고, 기록 단위로 묶어 평가한 선행 연구 중에는 우연보다 분명히 나은 성적을 낸 사례도 있습니다. 제대로 나누면 무조건 무너진다는 이야기는 아닙니다.

저자들은 반증에서 멈추지 않았습니다. 모델이 답을 미룰 수 있게 하자 네 건 중 세 건에서 두 답을 모두 담은 집합을 내고 임상 판단으로 넘겼고, 하나의 답을 낸 나머지에서는 유병률의 4.9배에 해당하는 정확도가 나왔습니다.

이 결함은 값에 있지 않습니다. 결측도 이상치도 없는 파일에서, 틀린 것은 그 값들을 어디에서 갈랐는가입니다. 페블러스가 데이터 자산을 볼 때 쓰는 지표도 대부분 파일 안을 보기 때문에, 데이터셋 안에 몇 개의 개체가 들어 있고 한 개체가 몇 행을 차지하는지가 적혀 있지 않으면 받는 쪽은 나눌 선을 그을 근거 없이 시작하게 됩니다.

▶ 전문: https://blog.pebblous.ai/blog/preterm-birth-leakage-proof-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #데이터누수 #교차검증 #벤치마크신뢰성 #조산예측 #EMBC2026

---

## LinkedIn (EN)

Models that read preterm birth risk out of uterine electrical activity have reported AUROCs between 0.80 and 0.97 for close to two decades. On the same public dataset, changing only where the line between training and validation falls returns 0.493.

Sunday A. Adetunji of Oregon State University and Rhoda O. Oyewusi of Alifort Hospital in Lagos recomputed the benchmark on 300 maternal records. Even at the generous end of the confidence interval, the result stays indistinguishable from a coin flip. The paper has been accepted for EMBC 2026.

Standard preprocessing chops a single 30-minute recording into many windows. Treat those windows as independent samples when dividing the data, and segments from the same mother land on both sides. What the model learns is the shape of one mother's signal rather than the physiology that precedes preterm labor. The authors put the principle in one line: the unit of resampling has to be the unit you want performance to generalize to.

A bad choice of features was ruled out separately. Swapping feature combinations and discarding some at random never moved the result outside 0.478 to 0.504. The high figures in the literature, though, are reported values rather than something this paper reproduced under its own pipeline, and earlier work that grouped by record has landed clearly above chance. Splitting properly does not collapse every result by default.

The authors did not stop at the refutation. Once the model was allowed to withhold an answer, it withheld in three cases out of four and handed both labels to clinical judgment. On the quarter where it committed, accuracy ran 4.9 times the prevalence.

The defect does not live in the values. Nothing is missing, nothing is out of range, and the labels can be correct. What is wrong is where those rows were cut. Most of the metrics Pebblous uses on a data asset also look inside the file, so a dataset that arrives without a record of how many entities it holds and how many rows each entity occupies leaves the receiving side with no basis for drawing the line.

▶ Read: https://blog.pebblous.ai/blog/preterm-birth-leakage-proof-benchmark/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DataLeakage #CrossValidation #BenchmarkIntegrity #PretermBirth #EMBC2026

---

## Twitter/X (KO)

같은 산모의 기록 조각을 훈련과 검증에 나눠 담던 관행을 걷어내고 산모 한 명을 통째로 한쪽에만 두자, 조산 예측 AUROC는 0.493이 됐습니다.

성능은 데이터가 아니라 데이터를 자른 방식에서 나왔습니다. 재표집의 단위는 성능이 일반화되기를 바라는 단위와 같아야 합니다.

https://blog.pebblous.ai/blog/preterm-birth-leakage-proof-benchmark/ko/

#페블러스 #데이터품질 #데이터누수 #교차검증

---

## Twitter/X (EN)

Keep every mother's recording on one side of the split instead of scattering her segments across both, and preterm birth prediction lands at AUROC 0.493.

The performance came from how the data was cut, not from the data. The unit you resample on has to be the unit you want performance to generalize to.

https://blog.pebblous.ai/blog/preterm-birth-leakage-proof-benchmark/en/

#Pebblous #DataQuality #DataLeakage #CrossValidation

---

## Facebook (KO)

산모의 배에 전극을 붙이고 30분 동안 자궁의 전기 활동을 기록하는 검사가 있습니다.

누워 있는 사람에게 그 30분은 하나의 시간입니다.

그런데 그 기록이 연구실로 넘어가면 대개 여러 조각으로 잘립니다. 300명의 기록이 수천 개의 표본처럼 보이게 되고, 그 조각들이 훈련용과 검증용으로 흩어져 담깁니다.

오리건주립대의 Sunday A. Adetunji와 라고스의 한 병원에서 일하는 Rhoda O. Oyewusi는 조각들을 다시 사람 단위로 모았습니다. 한 산모의 30분은 훈련과 검증 중 어느 한쪽에만 두기로 한 것입니다.

그렇게 다시 잰 조산 예측의 AUROC는 0.493이었습니다. 0.5는 동전 던지기입니다.

"신호 구간이 서로 독립이라는 것과, 환자가 서로 독립이라는 것은 같은 말일까요?"

저자들은 이것을 절차의 문제가 아니라 '추론의 문제'라고 적었습니다. 조각을 더 잘게 내는 일은 표본을 늘리는 게 아니라, 표본이 늘어난 것처럼 보이게 만드는 일이라는 것입니다.

이야기가 여기서 끝나지는 않습니다. 저자들은 모델이 답을 미룰 수 있게 해 두었고, 네 건 중 세 건에서 모델은 두 답을 모두 담은 채 임상 판단으로 넘겼습니다. 답을 하나로 좁힌 나머지에서는 유병률의 다섯 배 가까운 정확도가 남아 있었습니다. 모르는 자리를 모른다고 표시할 수 있게 하자, 아는 자리가 드러난 셈입니다.

페블러스가 데이터를 진단할 때 세는 것들은 대개 파일 안에 있습니다. 결측률, 중복, 라벨의 일관성. 그런데 이번 결함은 파일 안에 없었습니다. 값은 하나도 틀리지 않았고, 틀린 것은 그 값들을 어디에서 갈랐는가였습니다.

누워 있던 30분을 몇 조각으로 나누든 그 사람은 여전히 한 사람입니다. 모델을 평가하는 자리에서도 그 사실이 지켜지고 있는지는, 아직 잘 확인되지 않습니다.

https://blog.pebblous.ai/blog/preterm-birth-leakage-proof-benchmark/ko/

#페블러스 #데이터품질 #데이터누수 #교차검증 #EMBC2026 #DataClinic

---

## Facebook (EN)

There is a test where electrodes are placed on a pregnant woman's abdomen and the electrical activity of the uterus is recorded for thirty minutes.

To the person lying there, those thirty minutes are one stretch of time.

By the time the recording reaches a lab, it has usually been cut into pieces. Three hundred recordings start to look like several thousand samples, and the pieces get scattered between the training set and the validation set.

Sunday A. Adetunji of Oregon State University and Rhoda O. Oyewusi, who works at a hospital in Lagos, put the pieces back together by person. One mother's thirty minutes would sit on one side of the split, never both.

Measured that way, preterm birth prediction came out at an AUROC of 0.493. A coin flip is 0.5.

"Is a signal segment being independent the same claim as a patient being independent?"

The authors call this a question of inference rather than a question of procedure. Cutting the recording finer does not add samples. It makes it look as though samples were added.

The story does not end on that finding. The authors also let the model decline to answer, and in three cases out of four it handed both labels back to clinical judgment. Where it did narrow to a single answer, accuracy stayed close to five times the prevalence. Allowing it to mark what it did not know is what made the part it knew visible.

Most of what we count when we examine a dataset at Pebblous sits inside the file: missing values, duplicates, label consistency. This defect was not in the file. Not one value was wrong. What was wrong was where those values had been cut apart.

However many pieces those thirty minutes are divided into, the person is still one person. Whether that holds when the model is being scored is a question nobody is checking very carefully yet.

https://blog.pebblous.ai/blog/preterm-birth-leakage-proof-benchmark/en/

#Pebblous #DataQuality #DataLeakage #CrossValidation #EMBC2026 #DataClinic
