# SNS 홍보 글: AI는 데이터의 이상을 봤고, 판단은 건너뛰었다

> 소스: blog/genebench-pro-ai-biology-judgment/ko/index.html
> 생성일: 2026-07-07
> URL: https://blog.pebblous.ai/blog/genebench-pro-ai-biology-judgment/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

OpenAI가 자사 최강 모델에게 실제 계산생물학 문제를 던졌더니 31.5%만 풀었다. 나머지 셋 중 둘은 틀린 셈이다.

정작 눈여겨볼 건 틀리는 방식이었다. 모델은 데이터에 이상치나 교란 변수가 섞였다는 걸 대부분 알아챘다. 그런데 그 사실을 이후 분석 결정에 반영하지 못했다. OpenAI는 이걸 '인식과 행동의 간극(noticing-to-acting gap)'이라 불렀다. 몰라서 틀린 게 아니라, 알고도 지나쳐서 틀린다.

GeneBench Pro의 문제는 지식을 묻지 않는다. 노이즈 섞인 유전체 데이터를 읽고, 다운스트림 결정에 맞는 추정값을 고르는 판단을 묻는다. 지식 시험에서 우등생이던 모델들이 여기서 무너진 이유다.

데이터 품질을 다루는 쪽에서 보면 이건 익숙한 질문의 뒷면이다. 데이터를 아무리 다듬어도 실제 연구 데이터에는 지저분함이 남고, 관건은 모델이 그 지저분함을 읽고 판단하도록 설계됐는가로 넘어간다. 결국 데이터 품질이 AI 과학 판단의 상한선을 긋는다.

▶ 전문: https://blog.pebblous.ai/blog/genebench-pro-ai-biology-judgment/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #GeneBenchPro #OpenAI #계산생물학 #AI판단력 #ClaudeOpus

---

## LinkedIn (EN)

OpenAI gave its strongest model real computational biology problems. It solved 31.5% of them. Two of every three answers were wrong.

The failure pattern is what stands out. The models generally noticed when the data held outliers or confounders, then failed to carry that recognition into their analytical decisions. OpenAI named it the "noticing-to-acting gap": the models weren't wrong because they didn't know, but because they knew and moved on anyway.

GeneBench Pro doesn't test knowledge. It tests judgment—reading noisy genomic data and choosing an estimate that fits the downstream decision. That is exactly where models who ace knowledge exams come apart.

For anyone working on data quality, this is the mirror image of a familiar question. No matter how well you clean real research data, mess remains, so the question becomes whether the model is built to read that mess and judge well. Data quality sets the ceiling on AI's scientific judgment.

▶ Read: https://blog.pebblous.ai/blog/genebench-pro-ai-biology-judgment/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #GeneBenchPro #OpenAI #ComputationalBiology #AIforScience #ClaudeOpus

---

## Twitter/X (KO)

OpenAI 최강 모델도 실제 유전체 데이터 문제를 31.5%만 풀었다. 지식이 부족해서가 아니다.

모델은 데이터 이상을 알아채고도 분석 결정에 반영하지 못했다. 데이터 품질이 AI 과학 판단의 상한선을 긋는다.

https://blog.pebblous.ai/blog/genebench-pro-ai-biology-judgment/ko/

#페블러스 #데이터품질 #GeneBenchPro #OpenAI

---

## Twitter/X (EN)

OpenAI's strongest model solved just 31.5% of real genomics problems. Not for lack of knowledge.

The models spotted data anomalies but failed to act on them in the analysis that followed. Data quality sets the ceiling on AI's scientific judgment.

https://blog.pebblous.ai/blog/genebench-pro-ai-biology-judgment/en/

#Pebblous #DataQuality #GeneBenchPro #OpenAI

---

## Facebook (KO)

시험은 잘 보던 학생이 실제 실험실 데이터 앞에서 멈춰 서는 장면을 상상해 봅니다.

지난달 말 OpenAI가 공개한 계산생물학 벤치마크에서, 그 장면이 숫자로 나타났습니다. 가장 높은 점수를 받은 모델이 31.5%. 셋 중 둘은 틀린 셈입니다.

그런데 오래 남은 건 점수가 아니라 틀리는 방식이었습니다.

모델은 데이터에 이상치가 섞였다는 걸 대부분 알아챘습니다. 교란 변수가 있다는 것도 서술했습니다. 다만 그 앎을 다음 분석 결정으로 밀고 나가지 못했습니다.

문제를 발견한 문장과, 분석을 수행한 문장 사이에서 판단이 조용히 끊깁니다.

OpenAI는 이 틈을 '인식과 행동의 간극'이라 불렀습니다. 몰라서 틀리는 게 아니라, 알고도 지나쳐서 틀린다는 뜻입니다.

저는 이 대목에서 익숙한 질문의 뒷면을 봤습니다. 우리는 늘 'AI가 쓸 수 있는 깨끗한 데이터'를 이야기해 왔는데, 데이터를 아무리 다듬어도 실제 연구 데이터에는 지저분함이 남습니다.

그렇다면 질문은 이렇게 바뀝니다. "모델은 그 지저분함을 읽고 판단하도록 설계됐는가?"

데이터 품질을 진단해 온 자리에서 보면, 이 31.5%는 성능 지표라기보다 데이터를 읽는 판단의 지도에 가깝습니다. 데이터가 정직하게 정리된 만큼만 판단도 멀리 갈 수 있다면, 모델을 키우는 일과 데이터를 다듬는 일은 결국 같은 상한선의 양쪽 끝을 붙잡고 있는 셈입니다.

https://blog.pebblous.ai/blog/genebench-pro-ai-biology-judgment/ko/

#페블러스 #데이터품질 #데이터클리닉 #GeneBenchPro #OpenAI #AIReadyData

---

## Facebook (EN)

Picture a student who aces every exam, then freezes the moment real lab data lands on the desk.

Late last month, that scene showed up as a number. In OpenAI's new computational biology benchmark, the top-scoring model cleared 31.5%. Two of every three answers were wrong.

What stayed with me wasn't the score. It was the shape of the failure.

The models usually noticed the mess. They flagged the outliers, described the confounders. And then they let that recognition slip, never carrying it into the analysis that followed.

Somewhere between seeing the problem and solving it, the judgment quietly breaks.

OpenAI called this the "noticing-to-acting gap." The models weren't wrong for lack of knowledge. They knew, and moved on anyway.

That is the mirror image of a question I keep returning to. We talk endlessly about clean data an AI can use. But real research data stays messy no matter how carefully we prepare it.

So the question turns around: "Is the model built to read that mess and judge well?"

Seen from a place that has spent its days diagnosing data quality, this 31.5% reads less like a performance score and more like a map of how far judgment can travel. And judgment travels only as far as the data is honestly arranged.

https://blog.pebblous.ai/blog/genebench-pro-ai-biology-judgment/en/

#Pebblous #DataQuality #DataClinic #GeneBenchPro #OpenAI #AIReadyData
