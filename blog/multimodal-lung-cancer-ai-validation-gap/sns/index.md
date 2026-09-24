# SNS 홍보 글: 폐암 AI, 값비싼 검사를 더해도 처음 보는 환자에겐 제자리

> 소스: blog/multimodal-lung-cancer-ai-validation-gap/ko/index.html
> 생성일: 2026-09-25
> URL: https://blog.pebblous.ai/blog/multimodal-lung-cancer-ai-validation-gap/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

네이처 메디신에 실린 폐암 AI 연구에서 가장 널리 인용된 수치는, 모델이 아직 만들어지는 중에 매겨진 값이었다.

I3LUNG 연구는 유럽과 미국의 여섯 기관에서 면역항암제를 받은 진행성 비소세포폐암 환자 2,396명을 모았다. CT 영상과 디지털 병리를 얹은 모델이 생존 예측에서 낸 AUC 0.88이 보도자료의 머리를 차지했다. 그 값은 학습 데이터를 접었다 펴며 재는 교차검증에서 나왔고, 논문은 이 향상이 독립 세트에서 일관되게 재현되지 않았다고 결과 절과 논의 절에 각각 적는다.

이유는 논문 안에 있다. 멀티모달 비교는 필요한 자료를 전부 갖춘 환자만 쓸 수 있는데, 네 종류를 모두 가진 환자는 339명으로 모집 인원의 14%였다. 봉인해 둔 독립 세트 안에서 그 조건을 만족하는 환자만 추리면 통계적 비교를 걸 만한 수가 남지 않는다.

정작 그 독립 세트를 통과해 PD-L1과 ECOG 같은 기존 지표를 앞선 쪽도, 의사 20명의 반응자 판별 민감도를 0.72에서 0.87로 끌어올린 쪽도, 값이 싸고 이미 병원에 쌓여 있는 자료만 쓴 모델이었다.

데이터를 더 모은다는 말 안에는 성격이 반대인 두 작업이 섞여 있다. 사람을 더 모으는 일은 표본을 키우고, 한 사람에게서 더 많은 종류를 모으는 일은 완전한 표본을 줄인다.

▶ 전문: https://blog.pebblous.ai/blog/multimodal-lung-cancer-ai-validation-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #I3LUNG #NatureMedicine #의료AI #멀티모달 #외부검증 #AIReadyData

---

## LinkedIn (EN)

The most quoted number in a new Nature Medicine lung cancer study was scored while the model was still being built.

I3LUNG pooled 2,396 patients with advanced non-small cell lung cancer treated with immunotherapy at six centers in Europe and the United States. The figure that led the coverage, an AUC of 0.88, belongs to the model that added CT imaging and digital pathology on top of clinical records and blood tests. It was measured in cross-validation, and the paper states twice, once in the results and once in the discussion, that the improvement was not consistently reproduced on the independent set.

The reason sits in the paper. A multimodal comparison can only use patients who have every required data type, and 339 of those enrolled, 14 percent, had all four. Narrow the sealed independent set down to patients meeting that condition and too few remain to run a statistical comparison on.

What did clear that independent set, beating PD-L1 and ECOG by a significant margin, and what lifted 20 physicians' sensitivity at spotting responders from 0.72 to 0.87, was the model running on the cheap material hospitals already hold.

Collecting more data covers two operations that pull in opposite directions. Enrolling more people grows the sample. Collecting more kinds of data from each person shrinks the complete one.

▶ Read: https://blog.pebblous.ai/blog/multimodal-lung-cancer-ai-validation-gap/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #I3LUNG #NatureMedicine #MedicalAI #Multimodal #ExternalValidation #AIReadyData

---

## Twitter/X (KO)

CT 영상과 디지털 병리를 더한 폐암 AI가 AUC 0.88을 냈다. 그 값은 모델을 만드는 동안 잰 것이고, 논문은 처음 보는 환자에게서 그 향상이 일관되게 재현되지 않았다고 적는다.

봉인해 둔 독립 세트를 통과한 쪽은 진료 기록과 혈액 검사만 쓴 모델이었다.

▶ https://blog.pebblous.ai/blog/multimodal-lung-cancer-ai-validation-gap/ko/

#페블러스 #I3LUNG #의료AI #멀티모달

---

## Twitter/X (EN)

A lung cancer AI scored an AUC of 0.88 once CT scans and pathology slides were added. That number came from cross-validation, and the paper reports the gain was not consistently reproduced on patients the model had never seen.

What cleared the sealed independent set was the model using only clinical records and blood tests.

▶ https://blog.pebblous.ai/blog/multimodal-lung-cancer-ai-validation-gap/en/

#Pebblous #I3LUNG #MedicalAI #Multimodal

---

## Facebook (KO)

"검사를 하나 더 해 보시죠."

진료실에서 이 말을 들어 본 분이라면 그 뒤에 무엇이 따라오는지도 아실 겁니다. 예약 날짜, 비용, 그리고 며칠 뒤의 결과지.

같은 말이 AI에게도 통하는지를 물은 연구가 이번 달 네이처 메디신에 실렸습니다.

유럽과 미국의 여섯 기관이 면역항암제를 받은 진행성 폐암 환자 2,396명의 진료 기록을 모았습니다. 진료 기록과 혈액 검사만 쓰던 모델 위에 CT 영상과 병리 슬라이드를 얹자 24개월 생존 예측 점수가 0.68에서 0.88로 올랐습니다.

여기까지가 보도자료에 실린 문장입니다.

그런데 그 점수가 매겨진 자리는 모델을 만드는 중이었습니다. 학습에서 떼어 두었던 환자들, 모델이 처음 보는 사람들 앞에서는 그 향상이 따라오지 않았습니다. 논문은 이 사실을 결과 절과 논의 절에 각각 적어 두었습니다.

이유를 읽다가 한 문장에서 멈췄습니다. 네 종류 자료를 모두 갖춘 환자가 2,396명 가운데 339명이었다는 대목입니다.

자료의 종류를 늘리면 모델이 볼 수 있는 항목은 늘어납니다. 그런데 그 모든 항목을 다 가진 사람은 줄어듭니다.

'완전한 표본'이 줄어드는 것입니다. 사람을 더 모으는 일과 한 사람에게서 더 많은 것을 모으는 일은, 같은 방향이 아니었습니다.

정작 처음 보는 환자들 앞에서 기존 지표를 앞섰던 쪽은, 그리고 의사 20명의 판단을 실제로 끌어올린 쪽은, 값이 싸고 이미 병원에 쌓여 있던 자료만 쓴 모델이었습니다. 그 자료가 원래 깨끗해서는 아닙니다. 연구팀은 전자증례기록 1만 1천여 항목에서 출발해 아홉 개까지 좁혔고, 참여 기관들과 세 차례 검증을 돌렸습니다.

"우리가 지금 비용을 들여 늘리고 있는 자료는 성능을 올립니까, 아니면 개발 환경에서만 올라 보입니까?"

페블러스가 AI-Ready Data를 말할 때 수집량보다 기준의 일치를 먼저 묻는 이유도 여기에 닿습니다. 같은 이름이 붙은 자료라도 어디서 어떻게 만들어졌느냐에 따라 모델에게는 다른 자료입니다.

비싼 자료가 쓸모없다는 이야기는 아닙니다. 아직 그 값을 치를 자리에 도달하지 못했다는 이야기에 가깝습니다. 논문의 결론도 거기서 멈춰 있습니다. 유망하지만, 검증돼야 한다고.

▶ 전문: https://blog.pebblous.ai/blog/multimodal-lung-cancer-ai-validation-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #I3LUNG #의료AI #AIReadyData

---

## Facebook (EN)

"Let's run one more test."

Anyone who has heard that in an exam room knows what follows. A date, a bill, and a result sheet a few days later.

A study published in Nature Medicine this month asked whether the same logic holds for an AI.

Six centers in Europe and the United States pooled the records of 2,396 patients with advanced lung cancer on immunotherapy. Add CT scans and pathology slides on top of a model that had been running on clinical records and blood tests, and the 24-month survival score rose from 0.68 to 0.88.

That is the sentence the press release carried.

The score, though, was measured while the model was still being built. In front of the patients held back from training, people the model had never seen, the improvement did not follow. The paper says so twice, once in the results and once in the discussion.

One line in the explanation stopped me. Of the 2,396 patients enrolled, 339 had all four data types.

Add a kind of data and the model has more to look at. It also quietly subtracts the people who have all of it.

The complete sample shrinks. Enrolling more people and collecting more from each person turn out to pull in different directions.

What actually beat the established markers in front of unseen patients, and what actually lifted the judgment of twenty physicians, was the model running on the cheap material a hospital already holds. Not because that material was clean. The team began with more than 11,000 fields in the case report forms, narrowed them to nine, and ran validation with the participating centers three times over.

"Is the data you are paying to expand improving performance, or only appearing to in the place where it was built?"

This is also why Pebblous asks about agreement on standards before volume when it talks about AI-Ready Data. Two files carrying the same name are different data to a model, depending on where and how each was made.

None of this says the expensive data is useless. It says the evidence has not yet reached the place where that cost is settled. The paper's own conclusion stops there too: promising, and still to be validated.

▶ Full piece: https://blog.pebblous.ai/blog/multimodal-lung-cancer-ai-validation-gap/en/

#Pebblous #DataClinic #DataQuality #I3LUNG #MedicalAI #AIReadyData
