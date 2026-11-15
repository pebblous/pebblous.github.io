# SNS 홍보 글: 파킨슨병 진단 AI, 배운 환자가 시험에 나오면 점수가 오른다

> 소스: blog/parkinsons-diagnosis-ai-subject-level-leakage/
> 생성일: 2026-11-16
> URL: https://blog.pebblous.ai/blog/parkinsons-diagnosis-ai-subject-level-leakage/
> voice: LinkedIn·Twitter/X = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

파킨슨병을 가려내는 모델의 정확도가 0.892에서 0.780으로 내려갔다. 모델도 원본 데이터도 그대로 두고, 학습과 시험을 기록 단위가 아니라 사람 단위로 다시 가른 결과다.

오클랜드 공과대학 수리과학과의 남라타 다타와 빅토르 미란다 소베라니스가 쓴 감사 연구(arXiv:2611.14533)다. 새 모델을 제안하지 않는다. 기존 연구가 쓰던 공개 데이터 세 벌을 그대로 가져와, 어느 기록이 모델을 가르치고 어느 기록이 모델을 채점하는지를 정하는 방법만 바꿔 같은 모델을 두 번씩 돌렸다.

음성 자료에서는 32명이 한 사람당 여섯 일곱 개씩 녹음을 남겼다. 녹음을 통째로 섞어 나누면 같은 사람이 학습과 시험 양쪽에 앉고, 모델은 병을 알아보지 않고 그 사람의 목소리를 알아봐도 점수를 받는다.

혈액 유전자 자료에서는 방향이 반대로 벌어졌다. 환자와 대조군을 잘 가르는 유전자를 전체 코호트에서 먼저 추린 뒤 나누면 0.998이 나오고, 같은 추리기를 학습 폴드 안에 가두면 0.711이 된다. 정답 라벨을 전혀 보지 않는 필터로 같은 비교를 돌렸을 때는 숫자가 움직이지 않았다. 그래서 저자들이 적은 안전장치는 "분할 전에 고르지 마라"가 아니라 "라벨이 학습 폴드 밖으로 새어 나가지 않게 하라"다.

논문은 선을 넘지 않는다. 기존 음성 결과를 가짜가 아니라 부풀려진 것으로 불러야 한다고 적었다. 모집 시기 구성을 맞춘 36명에서도 혈액 진단 정확도는 0.838로 남았다. 결론마다 근거가 되는 코호트가 데이터 종류별로 하나씩이고 음성과 혈액의 대조군이 작다는 한계도 저자들이 직접 달았다.

성적표에 적힌 숫자가 병을 맞히는 능력인지 평가 설계가 만든 값인지는 모델 구조를 들여다봐서 갈리지 않는다. 데이터를 어디서 갈랐는지를 물어야 갈린다.

페블러스는 데이터를 AI가 쓸 수 있는 상태로 만들면서 값 옆에 붙은 기록도 품질 항목으로 센다. 이 연구가 환자 단위로 선을 그을 수 있었던 것은 그 데이터에 누구의 기록인지가 남아 있었기 때문이다.

▶ 전문: https://blog.pebblous.ai/blog/parkinsons-diagnosis-ai-subject-level-leakage/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #의료AI #데이터누출 #파킨슨병 #머신러닝평가 #AUROC #GroupKFold

---

## LinkedIn (EN)

Separating three public Parkinson's datasets by patient instead of by record cut the voice model's diagnostic accuracy from 0.892 to 0.780. The models and the raw data did not change.

The measurement comes from an audit by Namrata Datta and Victor Miranda Soberanis of the Department of Mathematical Sciences at Auckland University of Technology (arXiv:2611.14533). They wrote no new model. They reran existing ones on the same public datasets earlier work had used, and moved one thing only: the rule deciding which records teach a model and which records grade it.

In the voice set, 32 speakers left six or seven recordings each. Shuffle the recordings before splitting and one person sits on both sides, so a model that has learned to recognize a voice collects credit for detecting a disease.

The blood transcriptome ran the other way. Ranking the genes that best separate patients from controls across the whole cohort and splitting afterwards produced 0.998, while confining that ranking to the training fold produced 0.711. A filter that never looked at the labels moved the score neither way. That is why the authors state the safeguard as keeping labels out of any selection step outside the training fold, rather than as a ban on pre-split filtering.

The paper does not overreach. It says published voice results should be called inflated rather than spurious. In the 36 blood samples left after the recruitment waves were balanced, diagnostic accuracy held at 0.838. The authors also record their own limits: one public cohort per modality, and small control groups in the voice and blood data.

Whether a reported accuracy measures a disease or an evaluation design is not settled by inspecting the architecture. It is settled by asking where the data was cut.

Pebblous counts the record attached to a value as part of data quality, alongside the value itself. Splitting by patient was available in this study only because the data still carried whose record each row was.

▶ Read: https://blog.pebblous.ai/blog/parkinsons-diagnosis-ai-subject-level-leakage/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #MedicalAI #DataLeakage #Parkinsons #MLEvaluation #AUROC #GroupKFold

---

## Twitter/X (KO)

파킨슨병 진단 AI의 정확도가 0.892에서 0.780으로 내려갔다. 모델도 데이터도 그대로 두고, 학습과 시험을 기록 단위가 아니라 사람 단위로 다시 갈랐을 뿐이다.

한 사람의 녹음이 양쪽에 앉으면 모델은 병 대신 그 목소리를 알아봐도 점수를 받는다.

성적표의 숫자는 어떤 선으로 나눠 쟀는지까지 같이 읽어야 한다.

https://blog.pebblous.ai/blog/parkinsons-diagnosis-ai-subject-level-leakage/ko/

#페블러스 #데이터품질 #의료AI #파킨슨병 #데이터누출

---

## Twitter/X (EN)

Separating three public Parkinson's datasets by patient rather than by record dropped the voice model's accuracy from 0.892 to 0.780. Same model, same data.

When one speaker's recordings sit on both sides, recognizing a voice scores as detecting a disease.

A reported accuracy carries the split that produced it.

https://blog.pebblous.ai/blog/parkinsons-diagnosis-ai-subject-level-leakage/en/

#Pebblous #DataQuality #MedicalAI #Parkinsons #DataLeakage

---

## Facebook (KO)

마이크 앞에서 모음 하나를 길게 끕니다.

같은 자리에서 그 일을 예닐곱 번 되풀이합니다.

서른두 사람이 그렇게 남긴 녹음 195개가 공개 데이터가 되었고, 파킨슨병을 가려내는 모델들이 오랫동안 이 자료 위에서 만들어졌습니다.

관행은 그 녹음을 한 덩어리로 섞은 다음 일부를 학습에, 일부를 채점에 쓰는 것이었습니다.

그러면 한 사람이 남긴 일곱 개 가운데 다섯 개쯤이 학습 쪽에, 두 개쯤이 채점 쪽에 앉습니다.

채점에 나온 목소리를 모델은 이미 들어 본 적이 있습니다. 그 사람의 진단명과 함께.

오클랜드 공과대학의 두 연구자가 그 관행을 걷어내고 같은 모델을 다시 돌렸습니다. 한 사람의 녹음은 전부 학습이거나 전부 채점이고, 양쪽에 걸치지 않게 했습니다.

정확도는 0.892에서 0.780이 되었습니다.

"이 점수는 한 번도 만난 적 없는 사람 앞에서도 같은 숫자입니까?"

혈액 유전자 자료에서는 방향이 반대였습니다. 나누기 전에 전체 사람을 놓고 쓸 만한 유전자를 먼저 추려 두면 0.998이 나왔고, 같은 추리기를 학습 쪽 안에만 가두자 0.711이 되었습니다. 정답을 이미 본 채로 고른 선택이 그 차이를 만들고 있었습니다.

그렇다고 남는 것이 없지는 않았습니다. 모집 시기 구성까지 맞춘 서른여섯 명에서도 진단 정확도는 0.838로 버텼습니다. 걷어내고 난 자리에도 숫자는 있었습니다.

페블러스는 데이터를 AI가 쓸 수 있는 상태로 만들면서, 값 옆에 붙은 기록도 품질 항목으로 봅니다. 이 연구가 환자 단위로 선을 그을 수 있었던 것은 그 데이터에 누구의 기록인지가 남아 있었기 때문입니다. 그 표식이 지워진 자료에서는 선을 어디에 그어야 하는지조차 물을 수 없습니다.

다시 마이크 앞으로 돌아가 봅니다.

한 사람이 낸 소리 가운데 어디까지가 병이고 어디부터가 그 사람인지, 우리가 모델에게 물어 둔 적이 있었는지 생각하게 됩니다.

▶ 전문: https://blog.pebblous.ai/blog/parkinsons-diagnosis-ai-subject-level-leakage/ko/

#페블러스 #데이터클리닉 #데이터품질 #의료AI #파킨슨병 #데이터누출

---

## Facebook (EN)

You hold a microphone and draw out a single vowel.

Then you do it again, six or seven times in the same sitting.

Thirty-two people left 195 recordings that way, the recordings became a public dataset, and models for telling Parkinson's disease apart were built on top of them for years.

The usual practice was to pool all the recordings, then send some to training and some to grading.

Five or so of a person's seven land on the training side, and two or so on the grading side.

The voice that turns up in grading is one the model has already heard, together with that person's diagnosis.

Two researchers at Auckland University of Technology took that practice out and ran the same models again. Every recording from one person went entirely to training or entirely to grading, never across both.

The accuracy went from 0.892 to 0.780.

"Is this score the same number in front of someone the model has never met?"

In the blood gene data it ran the other way. Picking the useful genes while all the people were still in view, and splitting afterwards, gave 0.998; keeping that same picking inside the training side gave 0.711. What made the difference was choosing with the answers already in view.

Something did stay. Among the thirty-six samples left once the recruitment waves were balanced, diagnostic accuracy held at 0.838. The clearing did not take everything with it.

Pebblous prepares data into a state AI can use, and treats the record attached to a value as part of its quality. Drawing the line by patient was possible in this study because the data still carried whose recording each one was. Where that marker has been stripped, there is no way even to ask where the line belongs.

I keep going back to that microphone.

How much of the sound is the disease, and where does the person begin? I am not sure we have ever put the question to the model that way.

▶ https://blog.pebblous.ai/blog/parkinsons-diagnosis-ai-subject-level-leakage/en/

#Pebblous #DataClinic #DataQuality #MedicalAI #Parkinsons #DataLeakage
