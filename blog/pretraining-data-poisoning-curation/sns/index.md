# SNS 홍보 글: 게시판 댓글로 심은 조작 정보가 AI 학습 데이터 정제를 뚫었다

> 소스: blog/pretraining-data-poisoning-curation/ko/index.html
> 생성일: 2026-07-21
> URL: https://blog.pebblous.ai/blog/pretraining-data-poisoning-curation/ko/
> voice: LinkedIn·Twitter=sns-cover / Facebook=reflective

---

## LinkedIn (KO)

위키피디아를 조작한 게 아니었다. 뉴스 기사 밑 댓글창이었다.

워싱턴대와 Ai2 연구진이 조작 댓글 한 줄이 사전학습 데이터 정제를 통과할 확률을 처음으로 측정했다. 중복 제거, 언어 필터, 품질 분류기를 차례로 지나 대형 모델의 학습 데이터에 도달할 최종 확률은 0.13%였다. 작아 보이지만 Common Crawl 규모에서는 위키피디아 전체가 차지하는 몫보다 더 많은 문서에 영향을 준다.

정작 오염을 가장 잘 통과시킨 관문은 오염을 가장 잘 걸러낼 것 같던 품질 필터였다. 오염이 저품질 문서로 들어오지 않고, 이미 품질 높음으로 판정된 좋은 기사에 무임승차하기 때문이다. 필터가 보는 건 "이 문서가 얼마나 그럴듯한가"라는 콘텐츠 신호이지, "이 텍스트를 누가 어떤 경로로 올렸나"라는 출처 신호가 아니다.

그래서 "정제됐다"는 인증은 문서가 품질 점수를 통과했다는 뜻일 뿐, 그 안의 모든 텍스트가 신뢰할 경로로 왔다는 보증은 아니다. 데이터가 깨끗하다는 말은 그것이 어디서 왔는지 말할 수 있을 때 비로소 검증 가능한 주장이 된다. 페블러스가 학습 데이터를 진단할 때 콘텐츠 품질만이 아니라 출처 계보(provenance)를 함께 보는 이유가 여기에 있다.

▶ 전문: https://blog.pebblous.ai/blog/pretraining-data-poisoning-curation/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #데이터계보 #AIReadyData #데이터오염 #LLM #FineWeb

---

## LinkedIn (EN)

The manipulated text wasn't planted in Wikipedia. It was planted in the comment section under a news article.

Researchers at the University of Washington and Ai2 have measured, for the first time, how often a poisoned comment survives the pipeline that cleans pretraining data. After passing deduplication, language filters, and a quality classifier in turn, its final odds of reaching a large model's training set were 0.13%. That sounds small, but at Common Crawl scale it touches more documents than all of Wikipedia does.

The gate that let poisoning through most easily was the one meant to catch it: the quality filter. Poisoning doesn't arrive as a low-quality document. It hitches a ride on a good article that already passed as high quality. The filter reads a content signal, how plausible the document looks, not a source signal, who submitted the text and along what path.

So a "curated" stamp means a document cleared a quality score, not that every line inside it arrived through a trusted path. "Clean data" only becomes a verifiable claim once you can say where the data came from. That is why, when Pebblous diagnoses training data, it looks at provenance alongside content quality, not just one or the other.

▶ Read: https://blog.pebblous.ai/blog/pretraining-data-poisoning-curation/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #DataProvenance #AIReadyData #DataPoisoning #LLM #FineWeb

---

## Twitter/X (KO)

조작 댓글이 대형 모델 학습 데이터까지 도달할 확률: 0.13%. 작아 보여도 Common Crawl 규모에서는 위키피디아 전체보다 많은 문서에 영향을 준다.

정제 필터는 "무엇이 쓰였나"만 볼 뿐 "누가 썼나"는 보지 않는다. 정제됐다는 말이 출처를 보증하지 않는 이유.

https://blog.pebblous.ai/blog/pretraining-data-poisoning-curation/ko/

#페블러스 #데이터품질 #데이터계보 #LLM

---

## Twitter/X (EN)

The odds a poisoned comment reaches a large model's training data: 0.13%. Small, until you learn that at Common Crawl scale it touches more documents than all of Wikipedia.

Curation filters check what was written, never who wrote it. That's why "curated" doesn't certify where the data came from.

https://blog.pebblous.ai/blog/pretraining-data-poisoning-curation/en/

#Pebblous #DataQuality #DataProvenance #LLM

---

## Facebook (KO)

뉴스 기사를 읽다 무심코 그 아래 댓글까지 눈으로 훑은 적이 있습니다.

기사와 댓글은 다른 세계처럼 느껴지지만, 웹을 긁어 오는 크롤러에게는 그저 한 페이지의 위아래일 뿐입니다.

누군가 자기 소유도 아닌 그 댓글창에 조작된 문장 몇 줄을 심습니다.

워싱턴대와 Ai2 연구진이 그 문장이 대형 모델의 학습 데이터까지 살아남을 확률을 처음으로 재어 봤습니다. 중복 제거를 지나고, 언어 필터를 지나고, 품질 분류기까지 지난 뒤 남는 확률은 0.13%. 작아 보이는 이 숫자가 실은 위키피디아 전체가 차지하는 몫보다 많은 문서에 닿는다는 사실이, 오래 마음에 남았습니다.

품질 필터가 오염을 가장 잘 통과시켰다는 대목에서 한 번 더 멈추게 됩니다. 오염은 허술한 문서로 들어오지 않고, 이미 좋은 글로 판정된 기사에 조용히 얹혀 옵니다. 필터가 채점하는 것은 문서가 얼마나 그럴듯한가일 뿐, 그 문장이 누구의 손을 거쳐 왔는가는 아니었습니다. 저는 이런 문장을 '출처 없는 문장'이라 불러 봅니다.

"'정제됐다'는 말은, 그래서 무엇을 보증하는 걸까요?"

문서가 품질 점수를 통과했다는 뜻이지, 그 안의 모든 문장이 믿을 만한 길로 왔다는 뜻은 아니었습니다. 데이터가 깨끗하다는 말은, 그것이 어디서 왔는지 말할 수 있을 때 비로소 확인 가능한 문장이 되는 게 아닐까 합니다. 무엇이 쓰였는지를 넘어 어디서 왔는지를 함께 묻는 일, 페블러스가 데이터를 들여다볼 때 놓지 않으려는 질문도 그 자리에 있습니다.

▶ https://blog.pebblous.ai/blog/pretraining-data-poisoning-curation/ko/

#페블러스 #데이터클리닉 #데이터계보 #AIReadyData

---

## Facebook (EN)

I've caught myself reading a news article and then, almost by reflex, scrolling into the comments beneath it.

To us, the article and the comments feel like two different worlds. To a web crawler, they are just the top and bottom of a single page.

Someone plants a few manipulated sentences in a comment box they don't even own.

Researchers at the University of Washington and Ai2 set out to measure how often those sentences survive all the way into a large model's training data. Past deduplication, past the language filter, past the quality classifier, what remains is 0.13%. What stayed with me was learning that this small-looking number reaches more documents than all of Wikipedia does.

I paused again at the part where the quality filter let poisoning through most easily. Poisoning doesn't arrive as a flimsy document. It rides quietly on an article already judged to be good. The filter grades how plausible a document looks, never whose hands the sentences passed through. I've started thinking of these as "sentences without a source."

"So what does a 'curated' stamp actually guarantee?"

That a document cleared a quality score, not that every sentence inside it traveled a trustworthy path. Perhaps "clean data" only becomes a sentence we can verify once we can say where the data came from. Asking not just what was written but where it came from is the question Pebblous tries to keep in view when it looks at data.

▶ https://blog.pebblous.ai/blog/pretraining-data-poisoning-curation/en/

#Pebblous #DataClinic #DataProvenance #AIReadyData
