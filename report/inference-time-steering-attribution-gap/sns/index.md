# SNS 홍보 글: 토큰을 고르기 직전에 답을 바꾸는 AI 배포 계층

> 소스: report/inference-time-steering-attribution-gap/ko/index.html
> 생성일: 2026-08-27
> URL (KO): https://blog.pebblous.ai/report/inference-time-steering-attribution-gap/ko/
> URL (EN): https://blog.pebblous.ai/report/inference-time-steering-attribution-gap/en/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective · Medium = sns-cover(long)

---

## LinkedIn (KO)

구글은 학습에도 가중치에도 손대지 않고 토큰 확률만 흔드는 개입을 이미 제미나이에 배포해 두었다. 네이처에 실린 프로덕션 실측에서 그 비용은 토큰당 0.57퍼센트였고, 약 2,000만 건의 실사용 응답에서 사용자 만족도 차이는 잡음 범위였다.

목적은 출처 표시, 그러니까 워터마킹이다. 8월 25일 arXiv에 올라온 개념 논문 한 편이 그 옆에서 한 걸음을 더 간다. 같은 계층에 다른 목적의 점수표를 얹어도 기술은 똑같이 작동하고, 그때는 아무 흔적도 남지 않는다는 것이다.

흔적이 없다는 말은 수사가 아니다. 정렬 학습은 가중치에 남고, 시스템 프롬프트는 컨텍스트에 남고, 검색 증강은 인용 목록에 남는다. 확률을 미는 개입만 어디에도 남지 않는다. 2025년 5월 그록 사건이 이틀 만에 드러난 것은 감사 체계가 작동해서가 아니라, 개입이 유출되고 반복되는 거친 계층에서 일어났기 때문이다.

지금 누가 확률로 광고를 심고 있다는 이야기가 아니다. 상업이나 정치 목적의 로짓 조향은 관측된 적이 없고, 팔리는 AI 광고 형식은 전부 라벨이 붙은 별도 자산이다. 문제는 그것을 밖에서 확인할 방법이다. 로그확률을 주는 곳도 상위 20개까지인데 어휘는 10만 단위이고, 한 곳은 창구 자체가 없다. 그나마도 API 전용이라 사람들이 실제로 답을 읽는 소비자용 챗 인터페이스에는 아무것도 노출되지 않는다.

학습 데이터에서 모델까지의 계보를 완벽히 밝혀도 모델에서 사용자까지의 구간은 그대로 남는다. 데이터 프로버넌스는 필요조건이지 충분조건이 아니다.

▶ 전문: https://blog.pebblous.ai/report/inference-time-steering-attribution-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI거버넌스 #추론정책 #데이터프로버넌스 #SynthID #Grok #AI기본법

---

## LinkedIn (EN)

Google already ships an intervention that shifts token probabilities without touching training or weights. It runs inside Gemini, and the production measurement published in Nature put the cost at 0.57 percent of latency per token, with user satisfaction across some 20 million live responses moving no further than noise.

Its purpose is provenance. It is a watermark. A conceptual paper posted to arXiv on 25 August takes the next step from there: load a different objective onto the same layer and the machinery works identically, except that nothing is left behind.

That absence is literal. Alignment training leaves a trace in the weights. A hidden system prompt leaves one in the context window. Retrieval leaves one in the citation list. A logit-level nudge leaves none of these. When Grok's prompt was altered without authorization in May 2025, it surfaced within two days not because an audit regime caught it but because the intervention sat in a coarse layer that leaks and repeats.

None of this says anyone is currently placing advertising into probabilities. Commercial or political logit steering has never been observed, and every AI ad format on sale today is a labeled, separate asset. The problem is verification. Log probabilities, where offered at all, stop at the top 20 candidates of a vocabulary running to six figures, and one major provider offers no window whatsoever. Even that window is API-only, absent from the consumer chat interfaces where people actually read answers.

Establish the full lineage from training data to model and the stretch from model to user still remains. Data provenance is a necessary condition, not a sufficient one.

▶ Read: https://blog.pebblous.ai/report/inference-time-steering-attribution-gap/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIGovernance #InferencePolicy #DataProvenance #SynthID #Grok #EUAIAct

---

## Twitter/X (KO)

구글은 학습에도 가중치에도 손대지 않고 토큰 확률만 흔드는 개입을 제미나이에 이미 배포해 두었다. 프로덕션 실측에서 그 비용은 토큰당 0.57퍼센트였고, 사용자는 차이를 알아채지 못했다.

목적이 출처 표시가 아닐 때 같은 개입을 밖에서 확인할 방법은 아직 없다.

https://blog.pebblous.ai/report/inference-time-steering-attribution-gap/ko/

#페블러스 #AI거버넌스 #SynthID #데이터품질

---

## Twitter/X (EN)

Google already ships an intervention that shifts token probabilities inside Gemini without touching training or weights. The production measurement put it at 0.57 percent of latency per token, and users could not tell.

When the purpose is something other than provenance, there is no way to check from outside.

https://blog.pebblous.ai/report/inference-time-steering-attribution-gap/en/

#Pebblous #AIGovernance #SynthID #DataQuality

---

## Facebook (KO)

답이 한 글자씩 찍혀 나오는 그 몇 초를, 저는 모델이 생각하는 시간이라고 여겨 왔습니다.

그런데 모델은 낱말을 고르지 않습니다.

모델이 하는 일은 사전에 실린 낱말마다 점수를 매기는 데까지입니다. 그 점수표에서 낱말 하나를 실제로 뽑는 것은 그다음 단계입니다.

점수를 매기는 일과 뽑는 일 사이에는 한 뼘의 틈이 있습니다.

구글은 이미 그 틈에서 일하고 있습니다. 학습에도 가중치에도 손대지 않고 샘플링 절차만 바꾸어 토큰 확률을 흔드는 워터마킹이 제미나이에 배포돼 있습니다. 네이처에 실린 프로덕션 실측에서 비용은 토큰당 0.57퍼센트였고, 약 2,000만 건의 실사용 응답에서 사용자는 차이를 알아채지 못했습니다.

목적이 출처 표시라서, 방식도 비용도 학술지에 실렸습니다.

며칠 전 arXiv에 올라온 논문 한 편이 그 옆에 질문을 하나 세워 두었습니다.

"같은 자리에 다른 목적의 점수표를 얹으면, 우리는 그것을 알아챌 수 있을까?"

이 질문이 무거운 까닭은 그 계층이 아무 데도 흔적을 남기지 않는다는 데 있습니다. 정렬 학습은 가중치에 남고, 시스템 프롬프트는 컨텍스트에 남고, 검색 증강은 인용 목록에 남습니다. 확률을 미는 개입만 어디에도 남지 않습니다.

2025년 5월 그록의 프롬프트가 무단으로 바뀌었을 때 이틀 만에 드러난 것은, 감사 체계가 작동해서가 아니었습니다. 개입이 유출되고 반복되는 '거친 계층'에서 일어났기 때문입니다. 우리가 아는 배포 계층 사고는 전부 들킬 수 있는 자리에서 일어난 사고였습니다.

페블러스가 지난 몇 달 써 온 글은 대체로 한 방향을 향해 있었습니다. 학습 데이터의 출처, 라벨링의 증거화, 토큰 단위의 계보. 전부 모델이 만들어지기까지의 이야기입니다. 이 논문은 그 뒤에 남는 구간을 가리킵니다. 모델에서 사용자까지, 계보 장치가 하나도 없는 구간입니다.

데이터 프로버넌스는 필요조건이지 충분조건이 아니라는 말은, 프로버넌스를 다루는 쪽에서 먼저 꺼내는 편이 낫다고 생각했습니다.

한국은 생성물 표시 의무를 세계에서 처음으로 전면 시행했습니다. 그 표시가 답하는 질문은 이것을 AI가 만들었는가입니다.

남은 질문은 아직 아무도 묻지 않고 있습니다. 이 답은 어떤 추론 정책 아래에서 뽑혔는가.

전문 → https://blog.pebblous.ai/report/inference-time-steering-attribution-gap/ko/

#페블러스 #AI거버넌스 #추론정책 #SynthID #데이터클리닉 #데이터품질

---

## Facebook (EN)

The few seconds while an answer types itself out, one character at a time, I had always taken for the model thinking.

But the model does not choose words.

What the model does is assign a score to every word in its vocabulary. Drawing one word from that table of scores is a separate step that comes after.

Between the scoring and the drawing there is a gap about a hand's width across.

Google is already working inside that gap. A watermark that touches neither training nor weights, altering only the sampling procedure to shift token probabilities, ships inside Gemini today. The production measurement published in Nature put the cost at 0.57 percent of latency per token, and across roughly 20 million live responses users could not tell the difference.

Because the purpose is provenance, both the method and the cost were published in a journal.

A paper posted to arXiv a few days ago sets a question down beside it.

"If a score table with a different purpose were loaded into the same place, would we notice?"

The weight of that question comes from where it sits. Alignment training leaves a trace in the weights. A system prompt leaves one in the context window. Retrieval leaves one in the citation list. Only the nudge to probabilities leaves nothing anywhere.

When Grok's prompt was altered without authorization in May 2025, it came to light within two days, and not because an audit regime caught it. The intervention had happened in what the report calls a "coarse layer," the kind that leaks and repeats itself. Every deployment-layer incident we know about happened somewhere it could be caught.

Most of what Pebblous has written these past months has pointed one direction. Where training data came from. How a labeling click becomes evidence. Provenance down to the token. All of it is the story of how a model gets made.

This paper points at what remains after that. The stretch from the model to the person reading, where no lineage instrument exists at all.

That data provenance is a necessary condition and not a sufficient one seemed better said by people who work on provenance.

Korea became the first country to bring a generated-content labeling duty into full force. The question that label answers is whether AI made this.

The question left over is one nobody is asking yet. Under which inference policy was this answer drawn.

Full report → https://blog.pebblous.ai/report/inference-time-steering-attribution-gap/en/

#Pebblous #AIGovernance #InferencePolicy #SynthID #DataClinic #DataQuality
