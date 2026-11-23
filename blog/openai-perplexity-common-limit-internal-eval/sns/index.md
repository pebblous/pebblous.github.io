# SNS 홍보 글: 오픈AI가 제안한 퍼플렉시티 한계선, 시험지는 자기 회사 코드

> 소스: blog/openai-perplexity-common-limit-internal-eval/ko/index.html
> 생성일: 2026-11-24
> URL: https://blog.pebblous.ai/blog/openai-perplexity-common-limit-internal-eval/ko/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

오픈AI가 AI 개발사들이 함께 지킬 안전 기준선을 숫자 하나로 긋자고 제안했다. 그 숫자를 재는 시험지는 오픈AI 안에만 있다.

수석과학자 야쿠프 파호츠키가 11월 22일 회사 블로그에 올린 글이다. 사전학습 단계에서 나오는 로그 퍼플렉시티를 업계 공통 지표로 삼고, AI를 이해하고 감시하는 능력이 미리 정해 둔 이정표에 닿기 전까지는 함께 그은 선 아래로 내려가지 말자는 제안이다. 내부 추적 곡선도 함께 공개했다. 최초의 챗GPT를 떠받친 GPT-3.5가 약 0.99였고 최근 모델은 0.8 밑이다.

각주에 시험지가 적혀 있다. GPT-3.5 때부터 줄곧 오픈AI 내부 코드베이스에서 가져온 고정 스냅샷이다. 개발사마다 평가 데이터와 학습 데이터 배합이 달라 회사 간 비교가 깨끗하지 않다는 말도 비판자가 아니라 같은 글이 먼저 적었다.

구조는 발표 다음 날 드러났다. 마이크로소프트가 자사 기반 모델 MAI-2 Base의 0.819를 같은 눈금 위에 올렸는데, 무스타파 술레이만은 오픈AI의 평가 데이터에 접근할 수 있었던 것 자체를 특례라고 밝혔다. 공개된 고정 코퍼스가 생겨서 가능해진 일이 아니다.

같은 시험지, 같은 측정 절차, 다시 계산해 볼 권한. 페블러스가 데이터 품질을 진단할 때 먼저 확인하는 세 가지도 이것이다. 공동으로 지키자는 선인데, 그 선이 어디인지 계산할 수 있는 곳은 아직 한 회사뿐이다.

▶ 전문: https://blog.pebblous.ai/blog/openai-perplexity-common-limit-internal-eval/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #퍼플렉시티 #AI안전 #평가데이터 #OpenAI #야쿠프파호츠키

---

## LinkedIn (EN)

OpenAI has asked the industry to agree on a single number as a safety floor. The data that produces that number sits inside OpenAI.

Chief scientist Jakub Pachocki published the proposal on November 22. He wants developers to adopt pretraining log-perplexity as a shared metric and to stay above an agreed line until the ability to understand and monitor AI reaches specified milestones. He released the internal curve alongside it: roughly 0.99 for GPT-3.5, under 0.8 for recent models.

A footnote names the test set. It is a fixed snapshot of OpenAI's own internal codebase, and every figure since GPT-3.5 was measured on it. The caveat that developers use different evaluation datasets and train on different data mixtures did not come from a critic. It is in the same post.

The shape of that became visible a day later. Microsoft placed its base model MAI-2 Base at 0.819 on the same scale, and Mustafa Suleyman described access to OpenAI's evaluation dataset as a special case. No public fixed corpus made it possible.

The same test set, the same measurement procedure, the right to recompute. Those are the three things Pebblous checks first when it audits data quality. A line the industry is asked to hold in common can still be computed at exactly one company.

▶ Read: https://blog.pebblous.ai/blog/openai-perplexity-common-limit-internal-eval/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #Perplexity #AISafety #EvaluationData #OpenAI #JakubPachocki

---

## Twitter/X (KO)

오픈AI가 사전학습 퍼플렉시티를 업계 공통 안전 지표로 삼자며 내부 곡선을 공개했다. GPT-3.5 0.99에서 최근 0.8 미만까지.

그 값을 잰 데이터는 오픈AI 내부 코드베이스의 고정 스냅샷이다. 공동으로 지킬 선을 지금은 한 회사만 계산할 수 있다.

https://blog.pebblous.ai/blog/openai-perplexity-common-limit-internal-eval/ko/

#퍼플렉시티 #OpenAI #AI안전 #페블러스

---

## Twitter/X (EN)

OpenAI published its internal pretraining curve and asked the industry to treat log-perplexity as a shared safety floor. GPT-3.5 at 0.99, recent models under 0.8.

The evaluation data behind those numbers is a fixed snapshot of OpenAI's own codebase. One company can compute the shared line.

https://blog.pebblous.ai/blog/openai-perplexity-common-limit-internal-eval/en/

#Perplexity #OpenAI #AISafety #Pebblous

---

## Facebook (KO)

0.76.

오픈AI의 글에서 이 숫자를 보고 가장 먼저 떠오른 것은 그 값이 얼마나 낮은지가 아니라, 무엇으로 쟀을까였습니다.

야쿠프 파호츠키가 11월 22일에 적은 수치입니다. 오래 풀리지 않던 수학 문제에서 전에 없던 결과가 나오기 시작한 모델의 값이라고 했습니다. 그러면서 개발사들이 이런 숫자를 공통 지표로 삼고, 어느 선 아래로는 함께 내려가지 말자고 제안했습니다.

답은 각주에 있었습니다.

그 값을 잰 데이터는 오픈AI 내부 코드베이스의 고정 스냅샷입니다. 회사마다 평가 데이터와 학습 배합이 달라 비교가 깨끗하지 않다는 말도, 비판하는 쪽이 아니라 같은 글이 먼저 써 두었습니다.

"공동으로 지킬 선을 한 회사만 잴 수 있다면, 그 선은 누구의 선입니까?"

저는 이것을 '시험지 문제'라고 불러 보려 합니다. 어떤 숫자를 믿을 수 있는지는 대개 무엇을 쟀는지가 아니라 무엇으로 쟀는지가 정합니다. 벤치마크 오염도, 공개하지 않는 홀드아웃 셋도 같은 모양이었습니다. 다른 점이 있다면, 이번 숫자는 마케팅 문구가 아니라 안전 규범의 자리에 놓였다는 것입니다.

발표 다음 날 마이크로소프트가 자사 모델의 값을 같은 눈금 위에 올렸습니다. 가능했던 이유는 공개된 코퍼스가 생겨서가 아니라, 오픈AI가 그 회사에 문을 열어 주었기 때문입니다. 무스타파 술레이만 본인이 그 경로를 특례라고 불렀습니다.

페블러스가 데이터를 진단할 때 모델보다 먼저 묻는 것도 같은 쪽입니다. 어떤 데이터로 쟀는가. 그 데이터를 누가 들고 있는가. 다른 사람이 같은 조건을 다시 밟을 수 있는가.

우리 업계는 누구의 데이터로 잰 숫자를 규범으로 받아들일 준비가 되어 있을까요.

파호츠키는 그 질문을 피하지 않고 각주에 적어 둔 뒤, 답하는 일은 나머지 모두에게 남겼습니다.

▸ https://blog.pebblous.ai/blog/openai-perplexity-common-limit-internal-eval/ko/

#페블러스 #퍼플렉시티 #OpenAI #AI안전 #데이터품질 #데이터클리닉

---

## Facebook (EN)

0.76.

When I came across that number in OpenAI's post, the first thing I wanted to know was not how low it was, but what it had been measured against.

Jakub Pachocki wrote it down on November 22. It is the log-perplexity of the model that began producing results on math problems that had resisted everything before it. On the strength of that curve, he asked AI developers to treat the number as a shared metric and to agree on a line none of them would cross.

The answer was in a footnote.

The data behind those figures is a fixed snapshot of OpenAI's own internal codebase. And the caveat that developers use different evaluation datasets and train on different data mixtures was not raised by a critic. It sits in the same post, written by the same author.

"If only one company can measure the line we are all supposed to hold, whose line is it?"

I have started calling this the exam-paper problem. Whether a number can be trusted usually depends less on what was measured than on what it was measured with. Benchmark contamination worked this way. So did held-out sets that nobody outside the organizer could ever score. What is different here is that the number has moved out of marketing and into the place where safety rules get written.

The day after the post, Microsoft put its own model on the same scale. That happened not because a public corpus had appeared, but because OpenAI opened the door for one company. Mustafa Suleyman called the route a special case himself.

When Pebblous looks at a dataset, the questions come before the model. What was this measured on. Who holds that data. Could someone else walk the same path and arrive at the same number.

So the question is not whether 0.76 is the right figure.

It is whose data we are willing to let a norm rest on. Pachocki put that question in his own footnote, and left the answering to everyone else.

▸ https://blog.pebblous.ai/blog/openai-perplexity-common-limit-internal-eval/en/

#Pebblous #Perplexity #OpenAI #AISafety #DataQuality #DataClinic
