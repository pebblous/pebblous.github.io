# SNS 홍보 글: 내 옛 진료기록으로 배운 AI, 새 병은 더 자주 놓친다

> 소스: report/medical-ai-memorisation-bias-2026-09/ko/index.html
> 생성일: 2026-09-17
> URL: https://blog.pebblous.ai/report/medical-ai-memorisation-bias-2026-09/ko/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective

---

## LinkedIn (KO)

자기 옛 진료기록을 연구에 내놓은 환자가 전에 없던 병을 안고 돌아오자, 그 기록을 학습에 쓴 모델이 쓰지 않은 모델보다 그 병을 덜 찾아냈다.

9월 15일 arXiv에 올라온 프리프린트다. 뮌헨공대와 임피리얼 칼리지 런던 연구진이 심전도·흉부 X선·응급실 기록 네 데이터셋에서 설정마다 모델 200개를 학습시킨 뒤, 그 환자의 과거 기록을 본 절반과 보지 않은 절반에 같은 새 기록을 넣고 답을 비교했다. 아무도 공격하지 않았고 데이터가 새지도 않았다. 미래 기록은 학습에도 모델 선택에도 쓰이지 않았으니 분할도 올발랐다.

반대쪽이 더 까다롭다. 건강 상태가 그대로인 기록에서는 민감도와 특이도가 둘 다 부풀려졌다. 예측이 옛 상태 쪽으로 끌리는데 그때는 마침 그쪽이 정답이기 때문이다. 배포 현장에서 두 층은 섞여 있으니, 층을 나누지 않고 한 덩이로 성능을 재면 방향이 반대인 두 오차가 서로를 지운다. 지표에는 아무 일도 없었다고 찍힌다.

모델 선택에도 곧장 걸린다. 같은 응급실 데이터에서 랜덤포레스트, 로지스틱 회귀, 표 형식 ResNet의 테스트 성능은 서로 1%포인트도 벌어지지 않았다. 그런데 미래 기록에서 암기가 검출된 비율은 2.25%와 0.04%로 쉰여섯 배 갈렸다. 가장 많이 암기한 쪽은 신경망이 아니라 랜덤포레스트였고, 성능 지표만 보고 후보를 좁히면 이 차이는 선택에 들어오지 않는다.

규모는 저자들이 먼저 낮춰 잡는다. 놓친 진단의 수를 "modest"라 적고, 시간 분할이 전에 없던 질환 사례를 의도적으로 풍부하게 만들었으므로 배포 시의 발생률이 아니라고 못 박는다. 민감도 비교도 미래 기록 전체가 아니라 암기가 검출된 기록에서만 돌렸고, 아직 심사를 거치지 않은 v1 프리프린트다.

그런 유보를 다 달아도 한 가지는 남는다. 기록을 한 건씩 보호하는 차분 프라이버시는 가장 강한 예산에서도 흔적을 남겼고, 보호 단위를 사람으로 올리자 거의 사라졌다. 중복을 지울 때도 학습과 평가를 가를 때도 페블러스가 매번 정하는 값이 그것이다. 무엇을 한 단위로 셀 것인가.

▶ 전문: https://blog.pebblous.ai/report/medical-ai-memorisation-bias-2026-09/ko/

#페블러스 #데이터품질 #데이터클리닉 #의료AI #암기편향 #차분프라이버시 #데이터거버넌스 #환자데이터 #AI규제 #AIReadyData

---

## LinkedIn (EN)

A patient who had contributed old records to research came back carrying a condition those records never showed, and the models trained on her data found it less often than the models that had never seen her.

The preprint went up on arXiv on 15 September. Researchers at TU Munich and Imperial College London trained 200 models per setting across four datasets of ECGs, chest X-rays and emergency department records, then fed the same new record to the half that had seen the patient's history and the half that had not. Nobody attacked anything and nothing leaked. The future records were used neither for training nor for model selection, so the split was sound.

The other half of the finding is the harder one. Where the patient's health state was unchanged, both sensitivity and specificity came out inflated, because the prediction is pulled toward the old state and the old state happens to be correct. In deployment the two strata are mixed together. Measure performance in one block and the two errors, pointing in opposite directions, cancel. The metric reports that nothing happened.

It reaches model selection too. On the same emergency department data, a random forest, a logistic regression and a tabular ResNet landed within 0.89 percentage points of one another on test AUROC, while the share of future records showing detected memorisation split 2.25% against 0.04%, a factor of fifty-six. The heaviest memoriser was not the neural network but the random forest. Shortlist on performance alone and that column never enters the decision.

The authors size their own result down first. They call the number of missed diagnoses "modest" and state plainly that their temporal split deliberately enriched for new conditions, so this is evidence of direction, not an incidence rate for deployment. The sensitivity comparison ran only on records where memorisation had been detected, and this is an unreviewed v1 preprint.

With all of that granted, one thing holds. Differential privacy applied one record at a time left traces even at the strongest budget, and raising the unit of protection to the person made them all but disappear. Deduplication and train-test splitting turn on the same setting. What counts as one unit.

▶ Read: https://blog.pebblous.ai/report/medical-ai-memorisation-bias-2026-09/en/

#Pebblous #DataQuality #DataClinic #MedicalAI #MemorisationBias #DifferentialPrivacy #DataGovernance #PatientData #AIReadyData

---

## Twitter/X (KO)

내 옛 진료기록으로 배운 모델은 나를 남들처럼 보지 않는다. 전에 없던 병을 안고 돌아오면 덜 찾아내고, 건강이 그대로면 반대로 유난히 잘 맞힌다. 데이터가 샌 것도, 분할이 틀린 것도 아니다.

방향이 반대인 두 오차는 한 숫자로 합치면 서로를 지운다.

https://blog.pebblous.ai/report/medical-ai-memorisation-bias-2026-09/ko/

#페블러스 #의료AI #암기편향 #데이터품질

---

## Twitter/X (EN)

A model trained on your old medical records does not see you the way it sees everyone else. Come back with a new condition and it finds it less often. Come back unchanged and it scores you better than it should. Nothing leaked and the split was clean.

Two errors pointing opposite ways cancel inside one number.

https://blog.pebblous.ai/report/medical-ai-memorisation-bias-2026-09/en/

#Pebblous #MedicalAI #MemorisationBias #DataQuality

---

## Facebook (KO)

건강검진을 받고 "이 기록을 연구에 활용해도 좋다"는 칸에 표시해 본 적이 있으십니까.

저는 그 칸에 표시할 때 제가 무엇을 내주는지 안다고 생각했습니다. 이름과 주민번호만 지워 주면 되는 일. 그쯤으로 여겼습니다.

논문 한 편이 그 장면의 다른 쪽을 보여 주었습니다.

몇 해 뒤, 그때 내준 기록으로 배운 모델 앞에 다시 앉게 됩니다. 그 모델은 나를 남들과 똑같이 보지 않습니다.

전에 없던 병을 안고 돌아왔을 때는 그 병을 덜 찾아냅니다. 건강이 그대로일 때는 반대로 유난히 잘 맞힙니다. 예측이 옛 기록 쪽으로 끌리는데, 그때는 마침 그쪽이 정답이기 때문입니다.

아무도 공격하지 않았습니다. 데이터가 샌 것도 아니고, 학습과 평가를 가르는 절차도 정확히 지켜졌습니다.

다만 모델이 배운 단위는 '기록'이었고, 달라진 것은 '사람'의 다음 진료였습니다.

저는 이들을 '다시 찾아온 기여자'라고 부르기로 했습니다. 자기 데이터로 만든 모델을 환자로 다시 만나는 사람들.

오래 걸린 대목은 그다음입니다. 그러면 그 사람들에게만 이 모델을 쓰지 않으면 되지 않겠습니까. 그런데 그들을 지키려고 붙여 둔 비식별 조치 때문에, 지금 눈앞의 환자가 그 학습 데이터에 있었는지를 배포 시점에 알아낼 방법이 없습니다.

저자들의 문장은 이렇습니다. 익명화는 "누가 위험에 처해 있는지조차 가릴 수 있다".

한 줄이 더 남습니다. 기록을 한 건씩 보호하는 장치는 가장 강한 설정에서도 흔적을 남겼고, 보호의 단위를 사람으로 올리자 그 흔적이 거의 사라졌습니다.

페블러스가 데이터를 진단하며 매일 정하는 것도 결국 단위입니다. 무엇을 한 건으로 셀지, 무엇을 한 덩이로 묶을지. 공장 한 대에서 나온 검사 이미지도, 운전자 한 명의 주행 로그도 같은 모양을 하고 있습니다.

"우리가 성능을 잰 그 사람들과, 그 성능을 적용받는 사람들은 같은 사람입니까?"

검진 프로그램은 같은 사람을 몇 해에 한 번씩 다시 부릅니다. 이 질문은 그때마다 조용히 되돌아옵니다.

전문 → https://blog.pebblous.ai/report/medical-ai-memorisation-bias-2026-09/ko/

#페블러스 #의료AI #암기편향 #차분프라이버시 #데이터거버넌스 #데이터클리닉

---

## Facebook (EN)

Have you ever ticked the box on a hospital form that lets your scan be used for research?

I used to think I knew what I was handing over when I ticked it. Strip the name, strip the number, and the rest is a gift.

A paper I read this week showed me the other side of that moment.

Years later you sit down in front of a model that learned from the records you gave. It does not see you the way it sees everyone else.

Come back carrying something your old records never showed, and it finds that thing less often. Come back unchanged, and it scores you better than it should. The prediction leans toward your old state, and your old state happens to be the right answer.

Nobody attacked anything. Nothing leaked. The line between training and evaluation was drawn exactly where it should have been.

The model learned in units of records. What changed was a person's next appointment.

I have started calling them the returning contributors: people who meet the model built from their own data, this time as patients.

The part that stayed with me is what comes next. Just don't apply the model to those patients, then. Except that the de-identification put in place to protect them is precisely what makes it impossible, at deployment, to tell whether the person in front of you was in the training set.

The authors put it this way. Anonymisation "may even obscure who is at risk."

One more line. Protection applied one record at a time left traces behind even at the strictest setting, and raising the unit of protection to the person made those traces all but vanish.

Choosing units is what we do every day at Pebblous when we diagnose a dataset. What counts as one record, what belongs together as one group. Thousands of inspection images from a single machine, the driving logs of a single driver, all of it has the same shape.

"Are the people we measured the performance on the same people it gets applied to?"

Screening programmes call the same people back every few years. The question returns quietly with them.

Read the full piece → https://blog.pebblous.ai/report/medical-ai-memorisation-bias-2026-09/en/

#Pebblous #MedicalAI #MemorisationBias #DifferentialPrivacy #DataGovernance #DataClinic
