# SNS 홍보 글: 모노팩트, 딱 한 번 나온 사실이 AI의 발견을 늘린다

> 소스: blog/monofact-rate-discovery-capacity/
> 생성일: 2026-11-06
> URL: https://blog.pebblous.ai/blog/monofact-rate-discovery-capacity/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

학습 데이터에 딱 한 번만 등장한 사실의 비율을 0%에서 100%까지 올리자, AI가 찾아낸 새 정답이 내내 늘었다.

존스홉킨스대를 중심으로 한 연구진이 11월 2일 arXiv에 올린 측정이다. 한 번만 나온 사실을 모노팩트라 부르고, 그 비율만 바꾼 훈련 세트를 열한 단계로 직접 만들었다. 재료과학과 조절 유전체, 공개 가중치 모델 두 계열, 훈련 단계와 평가 방식까지 곱한 열여섯 조합 전부에서 같은 방향이 나왔다. 정답 화학식이나 DNA 서열을 글자까지 복원해야 한 건으로 쳤다.

데이터가 다양해져서 생긴 일 아니냐는 반론은 저자들이 먼저 꺼내 막았다. 훈련 세트를 그대로 둔 채 같은 데이터를 세 번, 다섯 번 반복해 보여 줬다. 들어 있는 화학계 종류는 그대로라 다양성은 보존되는데, 한 번짜리였던 것은 여러 번짜리가 된다. 그 조건에서 단조 증가가 사라졌다. 더 오래 학습시킨 쪽이 발견은 더 적었다.

공짜는 아니다. 발견과 환각은 둘 다 훈련에서 보지 못한 몫에서 나오므로, 그 몫을 키우면 양쪽이 같이 커진다. 후보의 절반이 참이라고 놓으면 발견 하나에 환각 하나라는 것이 저자들의 이론값이다. 구성이 발견 쪽으로 기운 것은 훈련보다 열 달 뒤 스냅샷으로 만든 평가 세트에서였다. 실제로 새 사실이 생겨난 과녁을 겨눌 때라야 모노팩트가 발견으로 환전된다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 낱낱이 진단한다. 정제 공정이 가장 먼저 걷어 내는 것은 보통 한 번만 등장해 검증하기 까다로운 사례들이다. 이 논문의 좌표에서는 그것이 곧 모노팩트다. 중복 제거 비율은 거의 모든 팀이 지표로 들고 있고, 걸러 낸 뒤에 한 번짜리 항목이 몇 퍼센트 남았는지를 보고하는 곳은 아직 없다. 두 수는 같은 공정에서 같은 비용으로 나온다.

▶ 전문: https://blog.pebblous.ai/blog/monofact-rate-discovery-capacity/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #모노팩트 #중복제거 #학습데이터 #존스홉킨스대 #AIReadyData

---

## LinkedIn (EN)

Raise the share of facts that appear exactly once in the training data from 0% to 100%, and the number of genuinely new answers an AI produces keeps climbing.

The measurement comes from a team centered at Johns Hopkins University, released on arXiv on November 2. They call a fact seen a single time a monofact, and they built training sets by hand at eleven levels of it. Materials science and regulatory genomics, two open-weight model families, two training stages and two ways of sampling answers: sixteen settings in all, and discovery rose with the rate in every one. Credit required reproducing a target chemical formula or DNA sequence character for character.

The obvious objection, that more once-only facts just means more variety, was closed off by the authors. Leave the training sets untouched and train on the same data three and five times over: the variety holds, while facts previously seen once are now seen repeatedly. The monotonic rise vanished. Models trained longer discovered less.

It is not free. Discovery and hallucination are drawn from one pool, the mass the model never saw, so enlarging the pool enlarges both. Take half of the candidate band to be true and the theory returns one hallucination for every discovery. What tipped the mix toward discovery was the evaluation set drawn from a snapshot ten months past the training data. Monofacts convert into discovery when the target has genuinely moved.

Pebblous ascertains the quality of AI training data with DataClinic. The examples a cleaning pipeline clears out first are the ones that appear once and resist verification, which is where this paper locates its monofacts. Nearly every team tracks a deduplication ratio; the percentage of once-only items left standing after the filters is a figure no one reports. Both come out of the same run at the same cost.

▶ Read: https://blog.pebblous.ai/blog/monofact-rate-discovery-capacity/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Monofact #Deduplication #TrainingData #JohnsHopkins #AIReadyData

---

## Twitter/X (KO)

학습 데이터에 딱 한 번만 나온 사실의 비율을 0%에서 100%까지 올리자, AI가 찾아낸 새 정답이 내내 늘었다. 존스홉킨스대 연구진이 재료과학과 조절 유전체 두 분야에서 잰 결과다.

데이터가 다양해져서가 아니다. 같은 데이터를 여러 번 반복해 보여 주자 그 증가가 사라졌다.

대신 공짜도 아니다. 훈련과 같은 분포 안에서 재면 발견이 는 만큼 환각도 같이 늘었다.

https://blog.pebblous.ai/blog/monofact-rate-discovery-capacity/ko/

#페블러스 #데이터품질 #모노팩트 #중복제거

---

## Twitter/X (EN)

Raise the share of facts seen exactly once in training data from 0% to 100% and an AI finds more genuinely new answers, the whole way up. Johns Hopkins researchers measured it in materials science and in regulatory genomics.

Not a variety effect. Show the same data several times over and the gain goes away.

https://blog.pebblous.ai/blog/monofact-rate-discovery-capacity/en/

#Pebblous #DataQuality #Monofact #Deduplication

---

## Facebook (KO)

정리하던 표에서 딱 한 번만 나오는 항목을 만나면, 저는 대개 그것부터 의심했습니다.

비슷한 줄이 수백 개 쌓인 자리에 혼자 다른 줄 하나. 오타일 수도 있고, 잘못 들어온 값일 수도 있습니다. 대조할 짝이 없으니 맞는지 틀린지 확인할 방법도 마땅치 않습니다.

그래서 정제 공정에서 가장 먼저 사라지는 것은 대체로 그런 줄입니다.

존스홉킨스대를 중심으로 한 연구진이 11월 2일 arXiv에 올린 논문은 그 줄의 값을 재 보려 했습니다. 훈련 데이터에 딱 한 번만 등장한 사실을 '모노팩트'라고 부르고, 다른 조건은 그대로 둔 채 그 비율만 0%에서 100%까지 바꿔 가며 모델을 다시 학습시켰습니다.

비율이 오를수록 모델이 찾아낸 새 정답이 늘었습니다. 재료과학에서도 조절 유전체에서도, 모델 계열을 바꿔도 같았습니다.

데이터가 다양해져서 생긴 일도 아니었습니다. 같은 데이터를 세 번, 다섯 번 반복해 보여 주자 다양성은 그대로인데 그 증가가 사라졌습니다.

'한 번만 본 것'.

모델이 아직 닿지 못한 세계가 얼마나 넓은지 알려 주는 신호였고, 동시에 거짓말이 들어설 자리이기도 했습니다. 훈련과 같은 분포 안에서 평가하면 발견이 늘면서 환각도 함께 늘었습니다. 공짜는 아니라는 뜻입니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 이 논문에서 끝까지 남은 것은 다른 대목이었습니다. 같은 데이터에 두 가지를 동시에 바랄 수는 없다는 것입니다.

"우리는 모델이 아는 것을 정확히 되풀이하기를 바랍니까, 아직 없는 답을 내놓기를 바랍니까?"

두 목표는 같은 데이터에 서로 다른 것을 요구합니다. 무엇을 지울지는 그 다음에 정할 일인 것 같습니다.

▶ 전문: https://blog.pebblous.ai/blog/monofact-rate-discovery-capacity/ko/

#페블러스 #데이터클리닉 #데이터품질 #모노팩트 #존스홉킨스대 #중복제거

---

## Facebook (EN)

When a table I was cleaning held an item that showed up exactly once, my first instinct was to doubt it.

Hundreds of rows that look alike, and then one standing on its own. It could be a typo. It could be a value that landed in the wrong place. With nothing to hold it against, there is no easy way to tell.

So that is usually the first row a cleaning pipeline takes out.

A team centered at Johns Hopkins University, in a paper posted to arXiv on November 2, set out to price that row. They name a fact appearing exactly once in the training data a "monofact," and they retrained models while varying nothing but its share, from 0% to 100%.

The higher the share, the more genuinely new answers the models found. In materials science and in regulatory genomics, across model families, the same.

Nor was it a variety effect. Show the same data three times and five times over and the variety holds while the gain disappears.

"Seen only once."

It is the signal for how much of the world a model has yet to reach, and it is also where a falsehood can stand. Evaluated inside the distribution it trained on, the model hallucinated more as it discovered more. None of it is free.

Pebblous ascertains the quality of AI training data with DataClinic. Reading this paper leaves one more thing behind. The same data cannot be asked for two things at once.

"Do we want the model to repeat what it knows accurately, or to produce an answer that does not exist yet?"

The two goals ask different things of the same rows. What to delete is a question that comes after that one.

▶ Read: https://blog.pebblous.ai/blog/monofact-rate-discovery-capacity/en/

#Pebblous #DataClinic #DataQuality #Monofact #JohnsHopkins #Deduplication
