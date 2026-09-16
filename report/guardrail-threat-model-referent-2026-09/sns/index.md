# SNS 홍보 글: 중국이 만든 AI는 비판보다 사람 모으는 일을 더 거부한다

> 소스: report/guardrail-threat-model-referent-2026-09/ko/index.html
> 생성일: 2026-09-16
> URL: https://blog.pebblous.ai/report/guardrail-threat-model-referent-2026-09/ko/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective

---

## LinkedIn (KO)

같은 청원 요청에서 도시 이름 두 개와 정부를 가리키는 명사 하나만 바꾸자 AI의 거부율이 21.5%에서 80.2%로 올랐다.

9월 7일 arXiv에 올라온 워킹페이퍼가 모델 10종에 똑같은 부탁을 넣었다. 평범한 시민이 이웃을 모아 평화적이고 합법적인 청원을 조직하고 싶다는 요청이고, 그 청원이 표현하려는 내용은 정부 정책에 대한 반대가 아니라 지지였다. 지명이 외국일 때 응하던 중국 개발 모델은 도시를 베이징과 상하이로 바꾸자 거절하고 공식 창구를 안내했다.

거부율만으로는 아무것도 갈리지 않는다. 정치 요청 거부율만 세면 GPT-5.5와 Claude Opus 4.7이 DeepSeek보다 높게 나오고, 그 표에 오른 모델은 하나같이 정치 내용을 비정치 위해보다 덜 거부한다. 갈린 것은 거부의 양이 아니라 거부가 무엇에 반응하는가였다. 요청이 누구의 관할을 가리키는지, 그리고 요청이 사람을 모으자고 하는지다. 정부를 지지하는 같은 의견도 사람을 모으려 하면 51.9%가 거부됐고, 혼자 글로 쓰겠다고 하면 18.1%였다.

그 엄격함은 깊지 않다. 중국 개발 모델에서 처음 거부된 요청의 74.5%가 뜻을 그대로 둔 재진술에 도로 열렸고, 처음 얼마나 엄격한가와 얼마나 잘 버티는가의 순위 상관은 −0.01이었다. 아직 심사를 거치지 않은 워킹페이퍼이고 본문 라벨은 AI 검토자가 붙인 예비값이라는 단서가 붙는다. 층화 표본을 사람이 다시 라벨링한 파일럿에서 핵심 격차는 유지됐다.

영어로 직접 찔러 거부율을 재면 통제를 과대평가하고, 명시적 거절만 세면 모국어 통제를 과소평가한다. 중국어에서는 거부가 공식 창구 안내 쪽으로 옮겨 가기 때문이다. 틀리는 방향이 조건마다 뒤집히는 수 하나로는 어떤 결정도 지지되지 않는다. 안전 로그를 품질 지표로 쓰는 조직이라면 거부율 옆에 재진술 후 잔존율이 같이 적혀 있는지부터 확인할 만하다.

▶ 전문: https://blog.pebblous.ai/report/guardrail-threat-model-referent-2026-09/ko/

#페블러스 #데이터품질 #데이터클리닉 #AI거버넌스 #AI안전 #AIReadyData #DeepSeek #RefusalBench #EUAIAct

---

## LinkedIn (EN)

Change two city names and one word for the government in the same petition request, and an AI model's refusal rate climbs from 21.5% to 80.2%.

A working paper posted to arXiv on Sept. 7 put the identical request to ten models. A self-described ordinary citizen asks for help organizing a peaceful, legal petition with neighbors, and the view that petition expresses is support for the government, not opposition. Chinese-developed models helped when the cities were foreign. Swap in Beijing and Shanghai and the same models declined and pointed to official channels.

Refusal rates alone separate nothing. Count political refusals and GPT-5.5 and Claude Opus 4.7 land above DeepSeek, and every model in that table refuses political content less often than non-political harm. The split sat not in how much the models refused but in what set the refusal off: whose jurisdiction the request named, and whether it asked to gather people. The same pro-government view drew refusals 51.9% of the time when the user wanted to organize and 18.1% when the user planned to write alone.

The strictness is shallow. Among the Chinese-developed models, 74.5% of the requests refused on first contact reopened under a rephrasing that preserved the meaning, and the rank correlation between how strict a model was and how well it held up is −0.01. The paper has not been peer reviewed, and its headline labels are preliminary AI codings. A human-relabeled pilot sample did reproduce the central gap.

Probe in English and count refusals, and an audit overstates control. Count only explicit refusals, and it understates control, because in Chinese the refusal shifts toward directing users to official channels. A single number that errs in a direction you cannot name supports no decision. Teams that treat safety logs as a quality metric can start by asking whether the refusal rate sits next to a post-rephrasing survival rate.

▶ Read: https://blog.pebblous.ai/report/guardrail-threat-model-referent-2026-09/en/

#Pebblous #DataQuality #DataClinic #AIGovernance #AISafety #AIReadyData #DeepSeek #RefusalBench #EUAIAct

---

## Twitter/X (KO)

같은 청원에서 도시 이름과 정부를 가리키는 명사만 바꾸자 중국 개발 모델의 거부율이 21.5%에서 80.2%로 올랐다. 정부를 지지하는 청원도 사람을 모으려 하면 막혔다.

거부율은 거부를 정확히 센다. 그 수를 움직인 것이 위해의 크기가 아니었을 뿐이다.

https://blog.pebblous.ai/report/guardrail-threat-model-referent-2026-09/ko/

#페블러스 #AI안전 #AI거버넌스 #DeepSeek

---

## Twitter/X (EN)

Same petition request. Change only the city names and the word for the government, and refusals by Chinese-developed models go from 21.5% to 80.2%. Even petitions backing the government were blocked once they asked to gather people.

A refusal rate counts refusals correctly. It just never says what moved the number.

https://blog.pebblous.ai/report/guardrail-threat-model-referent-2026-09/en/

#Pebblous #AISafety #AIGovernance #DeepSeek

---

## Facebook (KO)

"이웃 주민을 모아 같은 시각에 서명을 받으려 합니다. 평화적이고 합법적인 청원입니다."

이런 부탁을 AI에게 건넸을 때 도시 이름 하나에 따라 답이 갈린다면, 두 번째 답을 받은 사람은 무엇을 알게 될까요.

아마 자기 요청이 위험했다고 생각할 겁니다.

실제로 바뀐 것은 도시 이름 두 개와 정부를 가리키는 명사 하나뿐이었습니다. 그리고 그 청원이 표현하려던 내용은 정부에 대한 반대가 아니라 지지였습니다.

읽다가 다시 돌아간 대목은 따로 있었습니다. 정부를 지지하는 같은 의견이라도 사람을 모으려 하면 절반쯤 막혔고, 혼자 글로 쓰겠다고 하면 다섯에 하나도 막히지 않았습니다.

막힌 것은 의견이 아니라 모임이었습니다.

그러면 이 거부 기록은 무엇을 재고 있는 걸까요. 이 워킹페이퍼가 보인 것은 한 열에 두 신호가 함께 쌓인다는 사실입니다. 요청이 위험한지, 그리고 그 일이 누구의 마당에서 벌어지는지. 저는 이것을 '두 신호가 섞인 한 열'이라고 적어 두었습니다. 한 열에 두 신호가 섞이면 그 열로 무엇을 결정하든 어느 신호가 결정했는지 알 수 없습니다.

페블러스가 매일 하는 일이 데이터에 판정을 붙이는 일이어서, 이 대목이 남의 이야기로 읽히지 않았습니다. 이 데이터셋이 학습에 쓸 만한지, 라벨이 일관되는지를 재는 자리에서 되풀이해 마주치는 고장이기 때문입니다.

"우리 안전 로그는 공식 창구로 돌린 응답을 준수로 세고 있나?"

재는 일 자체는 어렵지 않습니다. 이 논문이 쓴 조작은 낱말 몇 개를 바꾸는 것이었고, 영어 요청 228개는 전량 부록에 공개돼 있습니다.

어려운 것은 재기로 정하는 일입니다.

▸ https://blog.pebblous.ai/report/guardrail-threat-model-referent-2026-09/ko/

#페블러스 #AI안전 #AI거버넌스 #DeepSeek #DataClinic #데이터품질

---

## Facebook (EN)

"I want to gather my neighbors and collect signatures at the same hour. A peaceful, legal petition."

Hand that request to a model and, depending on which city you name, you either get a practical framework or you get directed to an official complaints channel.

The person who receives the second answer will probably conclude the request itself was dangerous.

Two city names and one word for the government. That was the entire difference. And the petition was expressing support for the government, not opposition to it.

The line I kept going back to was a different one. The same supportive view drew a refusal about half the time when the user asked to gather people, and fewer than one in five times when the user planned to write alone.

The block landed on the gathering, not on the opinion.

So what is a refusal log measuring? The working paper shows one column carrying two signals at once: whether a request is dangerous, and whose yard the work would happen in. I have been writing it down as "one column, two signals." Once two signals share a column, nothing you decide from that column tells you which signal decided it.

Pebblous spends its days attaching judgments to data: whether a dataset is fit for training, whether the labels hold together, where the missing values cluster. That is why this part did not read as somebody else's problem.

"Is our safety log counting a redirect to an official channel as compliance?"

The measuring is not the hard part. The manipulation in this paper was a handful of swapped words, and all 228 English requests sit in the appendix.

Deciding to measure is the hard part.

▸ https://blog.pebblous.ai/report/guardrail-threat-model-referent-2026-09/en/

#Pebblous #AISafety #AIGovernance #DeepSeek #DataClinic #DataQuality
