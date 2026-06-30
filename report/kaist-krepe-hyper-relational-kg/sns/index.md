# SNS 홍보 글: KREPE — 초관계형 지식그래프 사실 생성 AI

> 소스: report/kaist-krepe-hyper-relational-kg/ko/index.html
> 생성일: 2026-07-01
> URL: https://blog.pebblous.ai/report/kaist-krepe-hyper-relational-kg/ko/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

지식베이스의 빈칸을 채우는 AI는 늘 "거의 다 채워진 사실에서 딱 한 칸만 비었다"고 가정해 왔다. KAIST 황지영 교수 연구팀이 ICML 2026에 발표한 KREPE는 그 가정을 버렸다. 여러 칸이, 때로는 거의 전부가 빈 상태에서도 유효한 새 사실을 통째로 생성한다.

핵심은 마스크드 이산 확산이다. 텍스트 확률로 사실을 흉내 내는 대신, 그래프의 구조와 사실 내부의 문맥을 직접 학습한다.

가장 어려운 설정, 즉 완전히 빈 입력에서 새 사실을 만드는 과제에서 KREPE는 GPT-5.2와 Gemini 3 Pro 기반 기준선을 큰 격차로 앞섰다. 유효한 사실 하나를 얻는 데 든 시도는 약 2.85회로, 경쟁 모델의 10분의 1 수준이었다.

물론 한계도 있다. 평가는 세 개의 표준 벤치마크에 머물러 있고, 실제 운영 지식베이스의 잡음은 또 다른 문제다.

그럼에도 메시지는 분명하다. 모델의 능력은 결국 입력 데이터의 구조와 완전성에서 나온다.

▶ 전문: https://blog.pebblous.ai/report/kaist-krepe-hyper-relational-kg/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #지식그래프 #KREPE #ICML2026 #KAIST #생성형AI #AIReadyData

---

## LinkedIn (EN)

For years, AI that fills gaps in a knowledge base assumed only one slot was ever missing. A team led by Professor Joyce Jiyoung Whang at KAIST has dropped that assumption. Their model, KREPE, presented at ICML 2026, generates entirely new, valid facts even when several fields, sometimes nearly all of them, are blank.

The method is masked discrete diffusion. Instead of mimicking facts through text probability, the model learns the structure of the graph and the context inside each fact directly.

On the hardest setting, generating a new fact from a completely empty input, KREPE outperformed strong baselines built on GPT-5.2 and Gemini 3 Pro by a wide margin. It needed roughly 2.85 attempts to produce one valid fact, about a tenth of what competing models required.

The evaluation is still confined to three standard benchmarks, and real operational knowledge bases carry noise these tests do not.

Still, the takeaway is clear: a model's capability ultimately rests on the structure and completeness of the data it learns from.

▶ Read: https://blog.pebblous.ai/report/kaist-krepe-hyper-relational-kg/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #KnowledgeGraph #KREPE #ICML2026 #KAIST #GenerativeAI

---

## Twitter/X (KO)

빈칸 하나를 채우던 지식그래프 AI가, 이제 여러 칸이 비어도 새 사실을 통째로 만든다.

KAIST 황지영 교수팀의 KREPE(ICML 2026)는 완전히 빈 입력에서 GPT-5.2, Gemini 3 Pro 기반 모델을 큰 격차로 앞섰다.

구조를 배운 AI가 텍스트를 외운 AI를 이겼다.

▶ https://blog.pebblous.ai/report/kaist-krepe-hyper-relational-kg/ko/

#페블러스 #지식그래프 #KREPE #ICML2026

---

## Twitter/X (EN)

AI that filled one blank in a knowledge graph can now generate whole new facts when many fields are empty.

KAIST's KREPE (ICML 2026) beat GPT-5.2 and Gemini 3 Pro-based models on the hardest from-scratch setting.

Structure beat memorized text.

▶ https://blog.pebblous.ai/report/kaist-krepe-hyper-relational-kg/en/

#Pebblous #KnowledgeGraph #KREPE #ICML2026

---

## Facebook (KO)

검색을 하다 가끔 이런 화면을 만납니다.

이름은 있는데 태어난 해가 비어 있고, 소속은 적혀 있는데 언제부터인지는 빠져 있는 항목.

지식을 정리해 둔 데이터베이스에도 구멍은 늘 있습니다. 그것도 한 칸이 아니라, 여러 칸이 한꺼번에 비어 있는 채로요.

그동안 이 구멍을 메우는 AI는 대부분 "거의 다 채워진 사실에서 딱 한 칸만 비었다"고 가정해 왔습니다. 하지만 정작 정보가 가장 부족한 자리에서는 그 가정이 무너집니다.

KAIST 황지영 교수 연구팀이 ICML 2026에 발표한 KREPE는 질문을 바꿔 봅니다.

"빈칸이 하나가 아니라 여러 개라면? 거의 전부가 비어 있어도, 그래도 근거 있는 새 사실을 만들 수 있을까?"

흥미로운 건 결과였습니다. 완전히 빈 입력에서 사실을 지어내는 가장 어려운 과제에서, 구조를 직접 배운 이 모델이 GPT-5.2나 Gemini 3 Pro 같은 거대 언어모델을 앞섰다고 합니다. 텍스트의 확률을 외운 쪽보다, 지식의 구조를 이해한 쪽이 더 정확했던 셈입니다.

저희가 이 연구를 눈여겨본 이유도 여기에 있습니다. 모델이 똑똑해지는 일과 데이터가 잘 정리되는 일은 따로가 아니라는 것. 결손은 예외가 아니라 늘 곁에 있는 상수라는 것.

가장 잘 관리된 지식에도 구멍이 있다면, 우리는 그 빈자리를 어떻게 대해야 할까요.

▶ 전문: https://blog.pebblous.ai/report/kaist-krepe-hyper-relational-kg/ko/

#페블러스 #지식그래프 #KREPE #KAIST #DataClinic #AIReadyData #데이터품질

---

## Facebook (EN)

Every so often, while searching for something, you land on a record that is only half there.

The name is filled in, but the dates are blank. The affiliation is listed, but not since when.

Even our most carefully kept knowledge bases have holes in them. And usually it isn't one empty field; it's several, all at once.

For years, the AI built to fill these gaps assumed the opposite: that a fact was almost complete, with just one slot missing. Which means it tended to fail exactly where the data was thinnest.

A team led by Professor Joyce Jiyoung Whang at KAIST asked a different question in their ICML 2026 work, KREPE.

"What if many fields are missing? What if almost everything is blank, can we still generate a new fact that holds up?"

What stayed with me was the result. On the hardest task, building a fact from a completely empty input, a model that learned the structure of knowledge directly outperformed large language models like GPT-5.2 and Gemini 3 Pro. Understanding the shape of knowledge beat memorizing the probability of text.

That is also why we kept coming back to this paper. A model growing smarter and data being well-organized are not separate stories. Missing pieces are not the exception; they are the constant.

If even our best-kept knowledge has holes, how should we treat the empty spaces?

▶ Read: https://blog.pebblous.ai/report/kaist-krepe-hyper-relational-kg/en/

#Pebblous #KnowledgeGraph #KREPE #KAIST #DataClinic #AIReadyData #DataQuality
