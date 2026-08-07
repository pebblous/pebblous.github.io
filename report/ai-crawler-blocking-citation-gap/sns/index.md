# SNS 홍보 글: 크롤러를 막아도 인용은 줄지 않았다

> 소스: report/ai-crawler-blocking-citation-gap/ko/index.html
> 생성일: 2026-07-25
> URL: https://blog.pebblous.ai/report/ai-crawler-blocking-citation-gap/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

robots.txt로 AI 크롤러를 막은 사이트가 잃은 것은 방문자였고, 정작 지키지 못한 것은 인용이었다.

BuzzStream이 400만 건의 AI 인용을 분석했더니, 크롤러를 차단한 뒤에도 인용 유지율이 봇에 따라 70%에서 92%까지 남았다. 트레이닝봇을 막은 사이트조차 ChatGPT 인용 원천의 약 95%를 여전히 차지했다.

이유는 구조에 있다. 차단은 이미 학습된 지식의 저수지를 비우지 못하고, 앞으로 물을 대는 수도관만 잠근다. 모델은 굳은 파라미터와 별도의 검색 인덱스에서 답을 만들기 때문에, 지금 robots.txt를 바꿔도 고인 물은 그대로 남는다.

대가는 방문자 쪽에서 치른다. 대형 발행사의 트래픽 손실은 초기 추정 −23%에서 저자 후속 개정판 약 −7%로 폭이 논쟁적이지만, 방향은 두 수치 모두 같다. 방문은 잃고 인용은 남는다.

그렇다면 콘텐츠 소유자가 쥐어야 할 지렛대는 차단 스위치가 아니라, 가져간 만큼 값을 매기는 정산과 출처를 추적하는 프로비넌스다. Cloudflare의 pay-per-crawl이 수집 단계는 열었지만, 답변을 생성할 때마다의 추론 단계 정산은 아직 비어 있다.

▶ 전문: https://blog.pebblous.ai/report/ai-crawler-blocking-citation-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #데이터주권 #AI크롤러 #콘텐츠라이선싱 #robotstxt #CommonCrawl #Cloudflare

---

## LinkedIn (EN)

The news sites that blocked AI crawlers lost visitors. What they didn't lose was their citations.

An analysis of 4 million AI citations found that after a site blocked the crawlers, its citation rate held between 70% and 92%, depending on the bot. Even sites that blocked the training bots still accounted for roughly 95% of ChatGPT's cited sources.

The reason is structural. Blocking doesn't drain the reservoir of what a model has already learned; it only shuts the pipe feeding new water in. Answers are generated from frozen parameters and a separate search index, so changing robots.txt today leaves the standing water untouched.

The cost lands on the traffic side instead. The headline loss for large publishers moved from an early −23% to roughly −7% in the authors' later revision, but the direction is the same: visits go, citations stay.

Which means the lever content owners should hold is not a block switch but settlement — pricing what gets taken — and provenance that tracks where it came from. Cloudflare's pay-per-crawl opened the collection stage; the inference stage, billed each time an answer is generated, is still empty.

▶ Read: https://blog.pebblous.ai/report/ai-crawler-blocking-citation-gap/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #DataProvenance #AICrawlers #ContentLicensing #CommonCrawl #Cloudflare

---

## Twitter/X (KO)

AI 크롤러를 robots.txt로 막은 사이트조차, AI 답변 속 인용의 최대 92%가 그대로 남았다.

차단은 이미 학습된 '저수지'를 비우지 못한다. 앞으로 물을 대는 수도관만 잠글 뿐이다. 방문은 잃고 인용은 남는 역설.

진짜 지렛대는 차단이 아니라 정산이다.
https://blog.pebblous.ai/report/ai-crawler-blocking-citation-gap/ko/

#페블러스 #데이터품질 #AI크롤러 #CommonCrawl

---

## Twitter/X (EN)

Sites that blocked AI crawlers with robots.txt still saw up to 92% of their citations survive in AI answers.

Blocking never drains the reservoir a model already learned. It only shuts the pipe. You lose the visits and keep the citations.

The real leverage is settlement, not blocking.
https://blog.pebblous.ai/report/ai-crawler-blocking-citation-gap/en/

#Pebblous #DataQuality #AICrawlers #CommonCrawl

---

## Facebook (KO)

robots.txt에 한 줄을 더합니다.

GPTBot을 막고 Google-Extended를 막고 나면, 이제 내 글은 AI가 함부로 가져가지 못한다고 믿게 됩니다.

그런데 측정된 결과는 그 믿음의 반대편을 가리켰습니다.

크롤러를 막은 뉴스 사이트조차, AI 답변에서 인용되는 빈도는 거의 줄지 않았습니다. 봇에 따라 인용의 70%에서 90% 넘게가 차단 이후에도 그대로 남았습니다. 문을 잠갔는데, 안에 있던 내용이 계속 흘러나온 셈입니다.

왜 그럴까요. 답은 뜻밖에 단순했습니다.

차단이 비우는 것은 저수지가 아니라 수도관이었습니다. 모델이 답을 길어 올리는 물은 이미 학습을 마친 파라미터와 아카이브 안에 고여 있고, robots.txt는 앞으로 새로 대는 관 하나를 잠글 뿐입니다. 고인 물은 그대로 남습니다.

그래서 정말 물어야 할 질문은 이것일지 모릅니다. "내 데이터를 어떻게 잠글까"가 아니라, "가져간 만큼 어떻게 값을 매기게 할까."

문을 잠그는 손을 값을 매기는 손으로 바꾸는 일. 페블러스가 데이터의 출처와 계보를 추적 가능한 상태로 만드는 데 오래 매달려 온 이유도, 결국 같은 질문 앞에 서 있기 때문입니다.

전문은 여기에 담아 두었습니다.
https://blog.pebblous.ai/report/ai-crawler-blocking-citation-gap/ko/

#페블러스 #데이터품질 #데이터저널리즘 #데이터클리닉 #AI크롤러 #CommonCrawl

---

## Facebook (EN)

You add one line to robots.txt.

You block GPTBot, you block Google-Extended, and you tell yourself the work is safe now — that the machines can't just take it anymore.

The measurements pointed the other way.

Sites that blocked the crawlers were still being cited in AI answers, almost as often as before. Depending on the bot, somewhere between 70 and over 90 percent of the citations stayed. The door was locked, and the contents kept walking out.

Why? The answer turned out to be simple.

Blocking doesn't empty the reservoir. It only closes one pipe. The water a model draws from has already pooled inside frozen parameters and old archives, and a change to robots.txt today shuts off the inflow while the standing water stays exactly where it is.

So maybe the question worth asking isn't "how do I lock my data down," but "how do I make it pay when it's taken."

Turning the hand that locks the door into the hand that sets the price. That is the same question we keep standing in front of at Pebblous, where the work is making a dataset's origin and lineage something you can actually trace.

The full report is here.
https://blog.pebblous.ai/report/ai-crawler-blocking-citation-gap/en/

#Pebblous #DataQuality #DataJournalism #DataClinic #AICrawlers #CommonCrawl
