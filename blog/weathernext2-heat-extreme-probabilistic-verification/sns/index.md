# SNS 홍보 글: 구글 날씨 AI WeatherNext2, 폭염엔 정말 약할까?

> 소스: blog/weathernext2-heat-extreme-probabilistic-verification/ko/index.html
> 생성일: 2026-10-18
> URL: https://blog.pebblous.ai/blog/weathernext2-heat-extreme-probabilistic-verification/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

라이프치히대와 엑서터대 연구진이 10월 14일 arXiv에 올린 논문은 새 모델을 만들지 않았습니다. 2022년 기록적 더위 예보를 채점하는 방식만 바꿨습니다.

72시간 앞선 예보에서 구글의 확률형 날씨 AI WeatherNext2는 유럽중기예보센터 IFS 앙상블보다 브라이어 기술점수가 24% 높게 나왔습니다. 구간 추정도 23~26%로 좁습니다.

점수보다 직관적인 수치가 하나 더 있습니다. 관측된 기록 가운데 예보 앙상블 멤버 전원보다 높았던 비율입니다. 앙상블 안에서 가장 더운 시나리오조차 실제에 못 미쳤다는 뜻이라, 사실상 경보를 놓친 경우입니다. IFS는 39~45%였고 WeatherNext2는 9~17%였습니다.

그동안 이 분야의 결론은 반대 방향이었습니다. 사이언스 어드밴시스에 실린 연구는 물리 기반 모델이 기록 경신 사건에서 AI 예보를 앞선다고 결론 냈습니다. 그때 맞댄 상대는 평균제곱오차로 학습한 결정론 AI와 유럽중기예보센터의 단일 고해상도 예보였습니다.

결정론 AI가 내놓는 값은 예측 분포의 조건부 평균입니다. 애초에 극단으로 가지 않도록 훈련된 값입니다. 평균을 찍으라고 배운 쪽에 가장 더운 날을 맞혀 보라고 하면 못 맞힙니다. 저자들은 그 비교가 예보의 종류와 예보의 품질을 뒤섞는다고 봅니다.

우위가 어디서나 유지되지는 않았습니다. 정답지를 ERA5로 바꾸면 운영 AI 모델의 개선이 지표마다 엇갈리고, 높은 임계값에서는 사라집니다. 분석 범위도 한 해, 한 변수입니다.

결론을 떠받치는 쪽은 따로 있습니다. 재분석을 거치지 않은 지상 관측소 5,778곳의 실측에서도 같은 방향이 나왔습니다. 어느 쪽 학습 자료에도 유리할 이유가 없는 자료입니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 현장 성적이 낮다는 보고가 올라오면 모델부터 손보게 되는데, 라벨 기준이 과제와 어긋나 있었다거나 평가 집합이 실제 분포와 달랐다는 사실은 한참 뒤에 드러납니다.

더 좋은 모델이 나와서 뒤집힌 결론이 아닙니다. 분포를 내놓는 예보를 분포용 지표로 쟀을 뿐입니다.

▶ 전문: https://blog.pebblous.ai/blog/weathernext2-heat-extreme-probabilistic-verification/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #WeatherNext2 #구글딥마인드 #ECMWF #기상AI #예보검증

---

## LinkedIn (EN)

The paper researchers at Leipzig University and the University of Exeter posted to arXiv on October 14 builds no new model. It changes only how forecasts of record heat in 2022 are scored.

At 72 hours of lead time, Google's probabilistic weather AI WeatherNext2 posted a Brier skill score 24% above the ECMWF IFS ensemble, inside a narrow interval of 23-26%.

One figure reads more directly than the scores: the share of observed records that came in above every member of the forecast ensemble. Even the hottest scenario the ensemble held fell short of what happened, which amounts to a missed alarm. For the IFS that share was 39-45%. For WeatherNext2 it was 9-17%.

The field had been concluding the opposite. A study in Science Advances found physics-based models ahead of AI on record-breaking events, setting deterministic AI models trained on mean squared error against the ECMWF's single high-resolution forecast.

A deterministic AI model issues the conditional mean of its predictive distribution, a value trained from the start not to run to the extremes. Ask it for the hottest day and it will not deliver one. The authors read that comparison as confounding the type of forecast with the quality of the forecast.

The advantage does not hold everywhere. Rescored against ERA5 as the answer key, the gain turns uneven from metric to metric and disappears at high thresholds. The scope is one year and one variable.

What holds the conclusion up sits elsewhere. Measurements from 5,778 HadISD surface stations, which never passed through a reanalysis and favor neither side's training data, point the same way.

Pebblous assesses the quality of AI training data with DataClinic. When a report says a model is scoring badly in the field, the first move is to go work on the model; that the labeling criteria were out of step with the task, or that the evaluation set differed from the real distribution, comes to light much later.

No better model arrived to overturn this. A forecast that issues a distribution was scored with a metric built for distributions.

▶ Read: https://blog.pebblous.ai/blog/weathernext2-heat-extreme-probabilistic-verification/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #WeatherNext2 #GoogleDeepMind #ECMWF #WeatherAI #ForecastVerification

---

## Twitter/X (KO)

라이프치히대와 엑서터대 연구진이 기록적 더위 예보를 확률 방식으로 다시 채점했습니다. 유럽중기예보센터 앙상블은 기록의 39~45%를 예보 범위 바깥에서 맞았고, 구글 WeatherNext2는 9~17%였습니다.

새 모델이 나와서 바뀐 결론이 아닙니다. 채점표를 바꾸자 순위가 뒤집혔습니다.

https://blog.pebblous.ai/blog/weathernext2-heat-extreme-probabilistic-verification/ko/

#페블러스 #데이터품질 #WeatherNext2 #ECMWF

---

## Twitter/X (EN)

Researchers at Leipzig and Exeter rescored record heat forecasts as probabilities. The ECMWF ensemble put 39-45% of those records outside the range it allowed for. Google's WeatherNext2 put 9-17% outside.

No better model arrived. The scoring sheet changed, and the ranking turned over.

https://blog.pebblous.ai/blog/weathernext2-heat-extreme-probabilistic-verification/en/

#Pebblous #DataQuality #WeatherNext2 #ECMWF

---

## Facebook (KO)

2022년 7월 19일 오후 5시 47분, 파리의 한 가정용 온도계가 40.5도를 가리켰습니다.

같은 날 런던에서는 다른 일이 벌어지고 있었습니다.

사건 36시간 전에도, 12시간 전에도, 유럽중기예보센터 앙상블의 멤버 전원이 실제 기온보다 낮은 값을 내놓고 있었습니다.

앙상블을 아무리 많이 돌려도 그 안에서 가장 더운 시나리오가 실제에 못 미쳤다는 뜻입니다.

10월 14일 라이프치히대와 엑서터대 연구진이 그해 전 지구 육지의 기록적 더위를 다시 채점한 논문을 올렸습니다.

그동안 이 분야의 결론은 "AI 예보는 극값에 약하다"였습니다.

근거가 없지도 않았습니다. 실험은 재현됐고, 숫자는 맞았고, 설명도 그럴듯했습니다. 훈련 데이터 밖의 값을 외삽하지 못한다는 이야기는 머신러닝을 해 본 사람이면 고개를 끄덕일 만합니다.

그런데 이번 논문이 바꾼 것은 모델이 아니었습니다.

앞선 연구들이 한 줄에 세운 것은 평균을 맞히도록 훈련된 AI와, 물리 방정식을 한 번 끝까지 푼 예보 하나였습니다.

평균을 찍으라고 배운 쪽에 가장 더운 날을 맞혀 보라고 하면, 못 맞히는 것이 당연합니다.

모델이 모자란 것이 아니라 과녁이 달랐던 것입니다.

과녁을 맞춰 놓고 다시 재자, 기록을 놓친 비율이 39~45%에서 9~17%로 내려갔습니다.

저자들이 자기 결론에 그어 둔 선도 또렷합니다. 한 해, 한 변수입니다. 정답지를 바꾸면 순위가 다시 흔들립니다.

그래도 한 자리는 흔들리지 않았습니다. 재분석을 거치지 않은 지상 관측소 5,778곳의 실측입니다. 어느 쪽 학습 자료에도 유리할 이유가 없는 자료에서도 같은 방향이 나왔습니다.

"성적이 낮다는 보고를 받았을 때, 가장 먼저 뜯어본 쪽이 모델이었습니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 라벨 기준이 과제와 어긋나 있었다거나 평가 집합이 실제 분포와 달랐다는 사실은, 모델을 몇 번 고쳐 본 뒤에야 드러나는 일이 많습니다.

날씨처럼 사람 목숨이 걸린 분야에서도 몇 년치 결론이 채점 방식 하나에 걸려 있었습니다.

채점표를 다시 보는 일은 모델을 다시 만드는 일보다 품이 적게 듭니다.

그런데 보통 나중에 합니다.

▶ 전문: https://blog.pebblous.ai/blog/weathernext2-heat-extreme-probabilistic-verification/ko/

#페블러스 #데이터클리닉 #데이터품질 #WeatherNext2 #ECMWF #기상AI

---

## Facebook (EN)

At 17:47 on July 19, 2022, a home thermometer in Paris read 40.5°C.

Something else was happening in London that same day.

At 36 hours out, and again at 12 hours out, every member of the ECMWF ensemble sat below the temperature that actually arrived.

However many members were run, the hottest scenario among them fell short of what happened.

On October 14, researchers at Leipzig University and the University of Exeter posted a paper rescoring the record heat across global land that year.

The field's verdict had been that AI forecasting is weak on extremes.

It was not groundless. The experiments reproduced, the numbers held, and the explanation sounded right. Anyone who has trained a model will nod at the idea that it cannot extrapolate past the values it was shown.

What this paper changed was not the model.

Earlier work had lined up an AI trained to hit the average against a single run of the physical equations, integrated once all the way through.

Ask something trained to produce the average for the hottest day, and of course it will not produce one.

The model was not falling short. The target was different.

Match the targets, score again, and the share of records that came in above every ensemble member drops from 39-45% to 9-17%.

The authors drew the lines around their own conclusion sharply. One year, one variable. Change the answer key and the ranking wobbles again.

One place held still. Measurements from 5,778 surface stations that never passed through a reanalysis, with no reason to favor either side's training data, pointed the same way.

"When the score came back low, what was the first thing you opened?"

Pebblous assesses the quality of AI training data with DataClinic. That the labeling criteria were out of step with the task, or that the evaluation set differed from the real distribution, tends to surface only after the model has been rebuilt a few times.

Even in a field where lives turn on the forecast, several years of conclusions were resting on one scoring choice.

Rechecking the scoring sheet costs less than rebuilding the model.

It usually comes second.

▶ Full piece: https://blog.pebblous.ai/blog/weathernext2-heat-extreme-probabilistic-verification/en/

#Pebblous #DataClinic #DataQuality #WeatherNext2 #ECMWF #WeatherAI
