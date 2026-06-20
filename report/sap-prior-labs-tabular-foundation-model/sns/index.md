# SNS 홍보 글: 모델은 준비됐다, 그런데 당신의 테이블은?

> 소스: report/sap-prior-labs-tabular-foundation-model/ko/index.html
> 생성일: 2026-06-20
> URL: https://blog.pebblous.ai/report/sap-prior-labs-tabular-foundation-model/ko/
> voice: LinkedIn/Twitter = sns-cover, Facebook = reflective

---

## LinkedIn (KO)

세계 최대 ERP 사업자가 창업 18개월 된 독일 스타트업에 4년간 €10억(약 $1.16B) 투자를 약속했다. SAP가 5월 4일 인수한 Prior Labs가 만드는 것은 챗봇도 이미지 모델도 아니다. 표를 다루는 파운데이션 모델이다.

TabPFN은 합성 데이터로 한 번 사전학습한 뒤, 추론 시점에 실제 표를 통째로 읽어 재학습 없이 곧바로 예측한다. 표를 프롬프트처럼 읽는 셈이다. 2025년 Nature는 단일 추론 2.8초가 4시간 튜닝한 앙상블의 정확도를 능가했다고 보고했다. 같은 날 SAP는 데이터 레이크하우스 Dremio도 사들여 모델 레이어와 데이터 레이어를 동시에 확보했다.

다만 이 성능에는 "소~중형 표(대략 1만 행 이하)"라는 단서가 붙는다. 대규모 데이터에서는 0.8% 정확도 향상을 얻으려 최대 4만 배의 추론 지연을 감수할 수도 있다. 모든 곳에서 XGBoost를 대체하는 것이 아니라, 작은 표에서 빠르고 강하다.

그런데 모델이 재학습을 건너뛰는 순간, 입력 표의 결함은 희석되지 않고 예측에 그대로 흐른다. 결측·스키마 드리프트·비표준 코드값·라벨 노이즈가 곧 성능 저하다. 제조 ERP 중 AI-ready 비율은 44%에 불과하고, 불량 데이터는 기업당 연평균 $12.9M의 손실을 부른다.

모델이 강력해질수록 데이터 품질이 덜 중요해지는 것이 아니라 더 중요해진다. 이번 인수가 남기는 진짜 질문이다.

▶ 전문: https://blog.pebblous.ai/report/sap-prior-labs-tabular-foundation-model/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #데이터거버넌스 #SAP #TabPFN

---

## LinkedIn (EN)

The world's largest ERP vendor just committed more than €1B (about $1.16B) over four years to an 18-month-old German startup. What Prior Labs, acquired by SAP on May 4, builds is neither a chatbot nor an image model. It is a foundation model for tables.

TabPFN is pretrained once on synthetic data, then reads a real table whole at inference time and predicts immediately, with no retraining — reading the table like a prompt. In 2025 Nature reported that a single 2.8-second inference surpassed the accuracy of an ensemble tuned for four hours. On the same day, SAP also bought the data lakehouse Dremio, securing the model layer and the data layer at once.

That performance carries a qualifier: small-to-mid tables, roughly under 10,000 rows. On large data, a TFM may accept up to a 40,000× latency penalty to gain 0.8% in accuracy. It does not replace XGBoost everywhere; it is fast and strong on small tables.

But the moment a model skips retraining, flaws in the input table are no longer diluted — they flow straight into the prediction. Missing values, schema drift, non-standard code values, and label noise all become degraded performance. Only 44% of manufacturing ERP data is AI-ready, and bad data costs the average company an estimated $12.9M a year.

The stronger the model gets, the more data quality matters, not less. That is the real question this deal leaves behind.

▶ Read: https://blog.pebblous.ai/report/sap-prior-labs-tabular-foundation-model/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DataGovernance #SAP #TabPFN

---

## Twitter/X (KO)

SAP가 창업 18개월 된 Prior Labs에 4년간 €10억 투자를 약속했다. 챗봇이 아니라 '표를 읽는' 파운데이션 모델 TabPFN이다.

모델은 재학습을 건너뛴다. 그래서 입력 표의 결함이 예측에 그대로 흐른다. 모델이 강해질수록 데이터 품질은 더 중요해진다.

https://blog.pebblous.ai/report/sap-prior-labs-tabular-foundation-model/ko/

#페블러스 #데이터품질 #SAP #TabPFN

---

## Twitter/X (EN)

SAP committed €1B+ over four years to the 18-month-old Prior Labs. Not a chatbot — TabPFN, a foundation model that "reads" tables.

The model skips retraining, so flaws in the input table flow straight into the prediction. The stronger the model, the more data quality matters.

https://blog.pebblous.ai/report/sap-prior-labs-tabular-foundation-model/en/

#Pebblous #DataQuality #SAP #TabPFN

---

## Facebook (KO)

회사 안의 가장 중요한 숫자들은 대개 문장도 사진도 아니라, 행과 열로 짜인 표 안에 있습니다.

매출 전표, 고객 등급, 재무 원장 같은 것들이요.

지난 몇 해 동안 AI의 화제가 챗봇과 그림으로만 흘러가는 사이, 정작 그 표들은 여전히 XGBoost와 손으로 다듬는 작업의 자리에 남아 있었습니다.

그런데 5월 초, 세계에서 가장 큰 ERP 회사인 SAP가 창업 18개월 된 독일의 작은 연구실 Prior Labs를 인수하고, 4년간 €10억(약 $1.16B) 넘게 투자하겠다고 밝혔습니다. 이들이 만드는 것은 또 하나의 언어 모델이 아니라, 표 자체를 다루는 파운데이션 모델 TabPFN입니다. 합성 데이터로 한 번 학습해 둔 뒤, 실제 표를 통째로 읽어 재학습 없이 예측합니다. 표를 프롬프트처럼 읽는다고 하면 가까울까요.

저는 이 대목에서 한 문장에 오래 머물렀습니다.

모델이 재학습을 건너뛴다는 것은, 표에 담긴 결함이 학습 과정에서 걸러지지 않고 예측에 곧장 흐른다는 뜻이기도 했습니다. 결측, 부서마다 다른 코드값, 잘못 붙은 라벨이 그대로 답을 흔듭니다. 제조업 ERP 가운데 모델에 바로 태울 만큼 준비된 데이터는 절반에도 못 미친다는 집계를 봤습니다.

그렇다면 우리가 오래 되뇌어 온 "데이터가 자산이다"라는 말은, 조건을 하나 빠뜨리고 있었는지도 모르겠습니다. 쌓여 있다고 자산이 되는 것이 아니라, 깨끗할 때에만 자산이 되는 것이었을까요.

모델이 강해질수록 데이터 품질이 덜 중요해지는 게 아니라 더 중요해진다는 문장 앞에서, 한참을 다시 읽게 됩니다.

▶ 전문: https://blog.pebblous.ai/report/sap-prior-labs-tabular-foundation-model/ko/

#페블러스 #데이터품질 #데이터저널리즘 #SAP #TabPFN

---

## Facebook (EN)

The most important numbers inside a company usually live not in sentences or photographs, but in tables — rows and columns.

Sales ledgers, customer tiers, financial records.

While the AI conversation drifted toward chatbots and pictures these past few years, those tables stayed where they were: the domain of XGBoost and work done by hand.

Then, in early May, SAP — the largest ERP company in the world — acquired an 18-month-old German lab called Prior Labs and said it would invest more than €1B (about $1.16B) over four years. What they build is not another language model but TabPFN, a foundation model for tables themselves. Pretrained once on synthetic data, it reads a real table whole and predicts with no retraining. Reading the table like a prompt, you might say.

One sentence kept me there for a while.

That a model skips retraining also means the flaws inside a table are no longer filtered out during training; they flow straight into the prediction. Missing values, code values that differ by department, a mislabeled row — each one shakes the answer. Fewer than half of manufacturing ERP datasets, by one count, are ready enough to feed a model directly.

So maybe the line we've repeated for so long, "data is an asset," was missing a condition. Perhaps data isn't an asset because it has piled up, but only while it stays clean.

In front of the sentence that as models grow more powerful, data quality matters more rather than less, I find myself reading slowly again.

▶ Read: https://blog.pebblous.ai/report/sap-prior-labs-tabular-foundation-model/en/

#Pebblous #DataQuality #DataJournalism #SAP #TabPFN
