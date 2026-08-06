# SNS 홍보 글: 깨끗한 데이터는 성능세를 물지 않았다

> 소스: report/common-corpus-performance-tax-myth/ko/index.html
> 생성일: 2026-08-07
> URL: https://blog.pebblous.ai/report/common-corpus-performance-tax-myth/ko/
> voice: sns-cover (LinkedIn/Twitter) + reflective (Facebook)

---

## LinkedIn (KO)

권리가 정리된 공개 데이터만 모으면 성능이 밀린다. AI 업계가 오래 공유해 온 이 통념이 실증 앞에서 흔들렸다.

프랑스 스타트업 Pleias가 퍼블릭도메인·오픈라이선스 콘텐츠만으로 약 2조 토큰을 모아 소형 모델을 학습시켰더니, 350M 모델이 다국어 문법성 벤치마크(MultiBLiMP)에서 자기 체급의 세 배가 넘는 1B급 모델까지 앞섰다. 가장 무거운 근거는 '공개 대 공개'의 비교다. 같은 공개 데이터로 학습한 OLMo 1B를, 3분의 1 크기의 모델이 안정적으로 앞섰다. 결과를 가른 것은 데이터의 총량이 아니라 무엇을 어떻게 골라 담았는가였다.

물론 경계는 분명하다. 우위는 문법에 집중되고, 세계지식을 묻는 상식추론에서는 오히려 밀렸다. 저자들도 지금 모을 수 있는 합법 데이터로는 소형 모델까지만 감당된다는 한계를 스스로 인정했다.

그럼에도 함의는 남는다. EU AI Act 집행이 며칠 전 시작된 지금, 데이터의 합법성과 품질은 규제가 강제하는 비용이 아니라 경쟁 우위를 만드는 조건일 수 있다.

▶ 전문: https://blog.pebblous.ai/report/common-corpus-performance-tax-myth/ko/

#페블러스 #데이터클리닉 #데이터품질 #AIReadyData #CommonCorpus #EUAIAct #저작권 #LLM

---

## LinkedIn (EN)

For years, one assumption held across the AI industry: strip a dataset down to only legally clean, openly licensed text and you pay for it in performance.

A French startup just put that assumption on a scale. Pleias assembled roughly 2 trillion tokens from public-domain and openly licensed sources, trained small models on it, and watched its 350M-parameter model outscore models three times its size on MultiBLiMP, a multilingual grammar benchmark. The sharpest data point is an open-vs-open comparison. The same 350M model beat OLMo 1B, which was trained on open data too. What separated them was not how much data, but which data and how it was curated.

The boundary is honest. The edge concentrates in grammar; on commonsense reasoning the model falls behind, and the authors concede that today's legally clean data only stretches far enough to pretrain small models.

Still, the timing matters. With EU AI Act enforcement now underway, the legality and quality of training data may be less a compliance cost than a condition for competitive advantage.

▶ Read: https://blog.pebblous.ai/report/common-corpus-performance-tax-myth/en/

#Pebblous #DataClinic #DataQuality #AIReadyData #CommonCorpus #EUAIAct #Copyright #LLM

---

## Twitter/X (KO)

권리를 정리한 공개 데이터만으로 학습한 소형 모델이, 세 배 큰 모델을 다국어 문법 벤치마크에서 앞섰다. 성능을 가른 건 데이터 총량이 아니라 큐레이션이었다.

'깨끗한 데이터는 성능세를 문다'는 통념이 실증 앞에서 흔들린다.

https://blog.pebblous.ai/report/common-corpus-performance-tax-myth/ko/

#페블러스 #CommonCorpus #데이터품질 #EUAIAct

---

## Twitter/X (EN)

A small model trained only on legally clean, openly licensed data just outscored models three times its size on a multilingual grammar benchmark.

What decided it wasn't data volume. It was curation. The "clean data = performance tax" assumption is starting to crack.

https://blog.pebblous.ai/report/common-corpus-performance-tax-myth/en/

#Pebblous #CommonCorpus #DataQuality #EUAIAct

---

## Facebook (KO)

모델을 만드는 사람들 사이에는 오래된 체념 같은 것이 있었습니다.

법을 지키려면 성능을 조금 내려놓아야 한다는 것.

저작권이 걸리지 않은 데이터만 골라 담으면 양이 줄고, 양이 줄면 성능이 밀린다. 이 삼단논법은 너무 자연스러워서 아무도 굳이 시험해 보지 않았습니다.

프랑스의 한 팀이 그 시험을 실제로 해봤습니다. 퍼블릭도메인과 오픈라이선스 자료만으로 2조 토큰을 모으고, 그 데이터로 소형 모델을 학습시킨 겁니다. 결과를 보고 저는 표를 한 번 더 확인했습니다. 3억 5천만 개짜리 작은 모델이, 세 배나 큰 모델을 다국어 문법 시험에서 앞섰습니다. 더 눈에 걸린 건, 같은 공개 데이터로 학습한 다른 모델조차 이 작은 모델에 밀렸다는 대목이었습니다.

그러니까 결과를 가른 것은 데이터를 얼마나 모았느냐가 아니라, 무엇을 어떻게 골라 담았느냐였습니다.

물론 이 이야기에는 정직한 그림자도 있습니다. 이 모델은 문법에서는 앞섰지만, 세상의 상식을 묻는 문제에서는 밀렸습니다. 저자들도 지금 합법적으로 모을 수 있는 데이터로는 아직 작은 모델까지만 감당된다고 스스로 적어 두었습니다. 그래서 저는 이 실증을 '깨끗한 데이터가 다 이긴다'는 승전보로 읽지 않습니다.

다만 하나의 질문은 남습니다.

"데이터를 제대로 정리하는 일은, 정말 성능을 깎아먹는 비용이기만 할까요?"

EU AI Act의 집행이 며칠 전 시작됐습니다. 출처를 밝히고 라이선스를 정리하는 일이 규제가 강요하는 부담으로만 보이던 시절이, 어쩌면 저물고 있는지도 모르겠습니다. 페블러스가 DataClinic으로 데이터의 상태를 진단해 온 이유도 여기서 만납니다. 데이터를 준비하는 일이 비용이 아니라 조건이 되는 자리를, 저는 조금 더 지켜보려 합니다.

https://blog.pebblous.ai/report/common-corpus-performance-tax-myth/ko/

#페블러스 #데이터클리닉 #데이터품질 #CommonCorpus #EUAIAct #AIReadyData

---

## Facebook (EN)

There's a quiet resignation among people who build language models: to stay on the right side of copyright, you give up a little performance.

Strip a dataset down to only what you're clearly allowed to use, the reasoning goes, and it shrinks. Shrink the data, and the model falls behind. The logic was so tidy that almost no one bothered to test it.

A team in France finally did. They gathered around 2 trillion tokens from public-domain and openly licensed sources, trained small models on it, and checked the numbers twice. A 350-million-parameter model, a small one, outscored models three times its size on a multilingual grammar benchmark. Even a model trained on the same kind of open data came out behind it.

What set them apart, then, was not how much data was collected, but what was chosen and how.

There's an honest shadow here too. The little model leads on grammar and lags on the questions that require knowing how the world works. The authors themselves write that legally clean data, for now, only stretches far enough to pretrain small models. So I don't read this as a victory lap for clean data.

One question does stay with me, though.

"Is preparing your data properly really only a cost that eats into performance?"

EU AI Act enforcement began a few days ago. The era in which documenting your sources felt like nothing but a regulatory burden may be quietly ending. That is the same place Pebblous keeps arriving at, diagnosing the state of data with DataClinic. I want to watch a little longer as data preparation turns from a cost into a condition.

https://blog.pebblous.ai/report/common-corpus-performance-tax-myth/en/

#Pebblous #DataClinic #DataQuality #CommonCorpus #EUAIAct #AIReadyData
