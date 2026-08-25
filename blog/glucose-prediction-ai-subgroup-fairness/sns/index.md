# SNS 홍보 글: 혈당 예측 AI 33종 모두 1형 당뇨에서 오차가 더 컸다

> 소스: blog/glucose-prediction-ai-subgroup-fairness/ko/index.html
> 생성일: 2026-08-25
> URL: https://blog.pebblous.ai/blog/glucose-prediction-ai-subgroup-fairness/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

혈당 예측 모델 33개를 같은 환자 데이터에 올렸더니 1형 당뇨 환자에서 오차가 더 컸습니다. 33개 중 예외는 없었습니다.

존스홉킨스 케어리 경영대학원과 당뇨 관리 앱 회사 웰닥이 300명 코호트를 세웠습니다. 연령과 성별, 당뇨 유형을 교차한 12개 층에 사람을 균형 있게 배치했습니다. 과제는 하루치 혈당 기록으로 두 시간 뒤를 맞히는 것이었습니다.

전체 코호트를 한 덩어리로 놓고 계산한 일반화 지표는 1.0 근처에서 안정적이었습니다. 통상적인 외부 검증 보고서라면 여기서 문장이 끝납니다. 그런데 같은 값을 층별로 갈라 계산하자 0.90에서 1.42까지 흩어졌습니다. 부호가 반대인 층들이 평균 안에서 서로를 지우고 있었습니다.

1형과 2형의 오차 차이는 6.3mg/dL였습니다. 통계 모델부터 프런티어 LLM까지 계열을 통째로 바꿔도 부등호는 뒤집히지 않았습니다. 식사와 운동 기록을 예측 시점 이후까지 미리 알려 주는 조건에서도 개선폭은 0.1mg/dL 남짓이었습니다.

모델을 서른세 개 갈아 봐도 닫히지 않는 격차라면, 손댈 자리는 코호트 구성과 보고 단위입니다.

▶ 전문: https://blog.pebblous.ai/blog/glucose-prediction-ai-subgroup-fairness/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #FairGlucose #존스홉킨스 #CGM #AI공정성 #헬스케어AI #AI검증

---

## LinkedIn (EN)

Thirty-three glucose forecasting models were scored on the same patient data, and every one of them was less accurate for people with type 1 diabetes. There were no exceptions.

Researchers at Johns Hopkins Carey Business School and Welldoc, a diabetes management app company, built a 300-patient cohort balanced across 12 strata crossing age, gender, and diabetes type. The task was to read a day of glucose readings and predict the value two hours ahead.

Measured on the cohort as a single block, generalization held steady near 1.0. That is where a conventional external validation report would stop. Recomputed stratum by stratum, the same figure scattered from 0.90 to 1.42, because strata moving in opposite directions were cancelling each other out inside the average.

The type 1 versus type 2 error gap came to 6.3mg/dL. It survived every switch of model family, from classical statistics to frontier LLMs. Even when meal and exercise logs from after the prediction point were handed to the models as an upper bound, the gain was about 0.1mg/dL.

If swapping all thirty-three models leaves the gap intact, what is left to change is the cohort design and the unit of reporting.

▶ Read: https://blog.pebblous.ai/blog/glucose-prediction-ai-subgroup-fairness/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #FairGlucose #JohnsHopkins #CGM #AIFairness #HealthcareAI #AIValidation

---

## Twitter/X (KO)

혈당 예측 모델 33개를 같은 코호트에 올렸더니 1형 당뇨 환자의 오차가 전부에서 더 컸습니다. 전체 지표는 안정적으로 보였고, 인구 층으로 갈라야 격차가 드러났습니다.

집계 단위를 바꾸지 않으면, 없는 격차가 됩니다.

https://blog.pebblous.ai/blog/glucose-prediction-ai-subgroup-fairness/ko/

#페블러스 #데이터품질 #FairGlucose #CGM #AI공정성

---

## Twitter/X (EN)

Thirty-three glucose forecasting models, one shared cohort, and every model was worse for type 1 diabetes. The aggregate metric looked steady. The gap only appeared once the cohort was split by subgroup.

Change the unit of reporting and the gap stops being invisible.

https://blog.pebblous.ai/blog/glucose-prediction-ai-subgroup-fairness/en/

#Pebblous #DataQuality #FairGlucose #CGM #AIFairness

---

## Facebook (KO)

팔 뒤쪽에 동전만 한 센서를 붙이고 지내는 분들이 있습니다.

센서는 5분마다 혈당을 재고, 요즘은 두 시간 뒤 값까지 미리 알려 줍니다. 저혈당이 오기 전에 알려 주는 기능이니, 잘 맞으면 밤잠이 편해집니다.

그런데 이런 예측 모델은 어떻게 "검증을 통과했다"는 판정을 받을까요.

대개 숫자 하나로 받습니다. 전체 환자를 한 덩어리로 놓고 계산한 평균 지표 하나.

존스홉킨스와 당뇨 관리 앱 회사 웰닥의 연구진이 그 숫자를 갈라 봤습니다. 연령과 성별, 1형·2형 당뇨를 교차한 열두 개 층에 사람을 균형 있게 배치해 두었습니다. 그 위에 서른세 개 모델을 같은 과제로 올렸습니다.

전체 평균은 안정적이었습니다. 층별로 다시 계산하니 0.90에서 1.42까지 흩어졌습니다. 어떤 층에서는 처음 보는 환자가 오히려 쉬웠고, 어떤 층에서는 사십 퍼센트 더 틀렸습니다. 부호가 반대인 층들이 평균 안에서 서로를 지우고 있었던 셈입니다.

1형 당뇨 쪽 오차가 더 컸다는 결과는 서른세 개 전부에서 같았습니다. 아키텍처를 바꿔도, 최신 LLM으로 갈아타도 부등호는 뒤집히지 않았습니다.

저는 이런 숫자를 '합격한 평균'이라고 부르고 싶어졌습니다.

틀린 숫자는 아닙니다. 다만 누구에게 잘 맞는지를 말해 주지 않을 뿐입니다.

"이 모델은 누구에게 가장 자주 틀리는가?"

이 질문에 답하려면 데이터를 모으기 전에 층을 정해 두어야 합니다. 나중에 갈라 보고 싶어도, 층마다 사람이 없으면 갈라볼 수가 없으니까요. 페블러스가 데이터 품질을 진단할 때 집계 단위부터 묻는 이유도 여기에 있습니다.

검증이 끝났다는 보고는 대개 숫자 하나로 도착합니다.

그 숫자가 어떤 단위로 모인 것인지는, 잘 따라오지 않습니다.

https://blog.pebblous.ai/blog/glucose-prediction-ai-subgroup-fairness/ko/

#페블러스 #데이터품질 #데이터클리닉 #FairGlucose #CGM #헬스케어AI

---

## Facebook (EN)

Some people go through the day with a sensor the size of a coin stuck to the back of their arm.

It reads glucose every five minutes, and now it also predicts where that number will be two hours from now. It is meant to warn you before a low arrives, which means that when it works, you sleep better.

So how does a model like that get told it has passed validation?

Usually with a single number. One average, computed over every patient at once.

Researchers at Johns Hopkins and Welldoc, a diabetes management app company, took that number apart. They balanced patients across twelve strata crossing age, gender, and type 1 versus type 2 diabetes, and put thirty-three models through the same forecasting task.

The overall average held steady. Recomputed stratum by stratum, it scattered from 0.90 to 1.42. In one group, unseen patients turned out to be slightly easier. In another, the models were forty percent further off. Strata pointing in opposite directions had been erasing each other inside the mean.

And the type 1 penalty showed up in all thirty-three. Change the architecture, move to a frontier LLM, and the inequality never flipped.

I have started thinking of a figure like that as a passing average.

It is not a false number. It simply declines to say who the model works for.

"Who does this model get wrong most often?"

Answering that means deciding on your strata before the data is collected. You cannot split a cohort later if there is nobody in half the cells. That is why, when Pebblous looks at data quality, the first question is what unit the numbers were gathered in.

A report saying validation is complete usually arrives as one number.

What that number was averaged over tends not to arrive with it.

https://blog.pebblous.ai/blog/glucose-prediction-ai-subgroup-fairness/en/

#Pebblous #DataQuality #DataClinic #FairGlucose #CGM #HealthcareAI
