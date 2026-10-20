# SNS 홍보 글: 국영매체 데이터셋 WorldStateMedia, 빠져나간 건 독립 언론

> 소스: report/worldstatemedia-state-media-web-corpus-2026-10/
> 생성일: 2026-10-21
> URL: https://blog.pebblous.ai/report/worldstatemedia-state-media-web-corpus-2026-10/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

영어 웹 크롤에 남은 국영매체 글 가운데 편집 통제를 받는 매체의 몫이 열두 해 사이 39%에서 93%로 올랐습니다. 같은 그림 안에서 전체 웹 대비 국영매체의 몫은 오히려 절반 가까이 내려갔습니다.

이달 arXiv에 올라온 WorldStateMedia는 웹을 새로 긁은 자료가 아닙니다. 이미 공개돼 있던 LLM 사전학습 말뭉치 FineWeb을 열어, 136개국 국영·공영매체가 쓴 글만 도로 집어낸 데이터셋입니다. 매체 640곳과 그들이 쓰는 도메인 1,183개에 이름표를 붙이는 일이 그 작업의 뼈대였습니다.

93%가 올라간 까닭을 논문은 유보하지 않고 본문에서 단정합니다. 2024년부터의 급등은 발행사가 크롤러를 막고 빠져나가면서 생겼습니다. 그동안 독립 매체 페이지는 여러 배로 줄었고 통제 매체 페이지는 훨씬 덜 줄었습니다. 밀고 들어온 쪽이 있어서 생긴 수가 아니라 옆자리가 비어서 생긴 수입니다. 덧셈이 아니라 뺄셈입니다.

라벨 쪽도 직관과 어긋납니다. 영어 말뭉치에서 편집 통제 라벨이 붙은 가장 큰 단일 덩어리는 러시아도 중국도 아니라 미국 정부가 재원을 대는 USAGM이고, 그렇게 된 것은 2025년에 라벨 하나가 바뀌었기 때문입니다. 반대로 국영매체 쏠림 상위 목록에 오른 노르웨이 뉘노르스크와 마오리어, 스코틀랜드 게일어는 셋 다 통제 비율이 0입니다. 그 언어로 꾸준히 대량 발행하는 곳이 공영방송뿐이어서 그렇습니다.

논문은 여기에 검색을 물려 봅니다. 영토 분쟁에 대한 질문에 외국을 겨냥해 영어로 쓴 국영매체 기사를, 그것도 질의 언어와 묶인 나라의 것만 골라 넣자, 네 모델 가운데 둘에서 지정학 편향 지표가 기준선의 네 배 가까이 뛰었습니다. 여러 청구국의 매체를 한데 섞으면 쏠림은 열두 쌍 전부에서 줄었는데, 사실성이 가장 낮게 나온 설정도 바로 그 설정이었습니다. 섞는 조치와 정확도를 지키는 조치는 따로 재야 한다는 뜻입니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 이번 논문이 센 축은 라벨 품질도 분포 편중도 아니라 출처 구성이었고, 그 절차는 도메인에 발행 주체 이름표를 붙이고 구성비를 세는 것이 전부입니다. 외부 데이터셋 없이 사내 검색 인덱스에 그대로 옮길 수 있습니다.

말뭉치에 남은 글은 많이 발행된 글이 아니라 아무도 울타리를 치지 않은 글입니다.

▶ 전문: https://blog.pebblous.ai/report/worldstatemedia-state-media-web-corpus-2026-10/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #WorldStateMedia #국영매체 #사전학습데이터 #RAG #FineWeb

---

## LinkedIn (EN)

Among the state media pages left in English web crawls, the share published by editorially controlled outlets rose from 39% to 93% over twelve years. Across the same span, state media's share of the web as a whole fell by almost half.

WorldStateMedia, posted to arXiv this month, crawled nothing. The researchers opened FineWeb, an existing LLM pretraining corpus, and pulled back out everything written by state and public-service outlets across 136 countries. The spine of the work was a registry: 640 outlets and the 1,183 domains they publish on, each one labelled.

The paper does not hedge on why the 93% rose. It states the cause in the body. The jump from 2024 onward came from publishers opting out of web crawlers. Independent outlet pages fell several-fold over that stretch while controlled outlet pages barely moved by comparison. Nobody pushed in. The seat beside them emptied. Subtraction, not addition.

The labels cut against intuition too. The largest single block carrying the controlled label in the English corpus is neither Russia nor China but USAGM, the outlets funded by the United States government, and it became the largest because one label changed in 2025. Meanwhile Norwegian Nynorsk, Māori and Scottish Gaelic all sit near the top of the concentration list at zero percent controlled, because a public broadcaster is close to the only high-volume publisher writing in them.

Then the paper attaches retrieval. Asked about territorial disputes, with retrieval restricted to foreign-facing English articles from the country tied to the query language, the geopolitical bias metric leapt to nearly four times baseline in two of the four models tested. Pooling outlets from several claimant countries lowered the skew in all twelve pairs, and that same pooled setting produced the lowest factuality scores in the study. Mixing sources and preserving accuracy are two separate measurements.

Pebblous examines the quality of AI training data with DataClinic. The axis this paper counted was neither label quality nor distribution skew but source composition, and the procedure amounts to labelling domains with their publishers and counting the mix. It transfers to an internal retrieval index without any external dataset.

What survives in a corpus is not what was published most. It is what nobody fenced off.

▶ Read: https://blog.pebblous.ai/report/worldstatemedia-state-media-web-corpus-2026-10/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #WorldStateMedia #StateMedia #PretrainingData #RAG #FineWeb

---

## Twitter/X (KO)

영어 웹 크롤에 남은 국영매체 글 가운데 편집 통제 매체의 몫이 39%에서 93%로 올랐습니다.

통제 매체가 밀고 들어와서가 아닙니다. 독립 매체가 크롤러를 막고 빠져나간 자리입니다. 덧셈이 아니라 뺄셈입니다.

https://blog.pebblous.ai/report/worldstatemedia-state-media-web-corpus-2026-10/ko/

#페블러스 #데이터품질 #WorldStateMedia #사전학습데이터

---

## Twitter/X (EN)

Among state media pages left in English web crawls, the editorially controlled share rose from 39% to 93%.

Controlled outlets did not push in. Independent ones blocked the crawlers and left. Subtraction, not addition.

https://blog.pebblous.ai/report/worldstatemedia-state-media-web-corpus-2026-10/en/

#Pebblous #DataQuality #WorldStateMedia #PretrainingData

---

## Facebook (KO)

같은 질문을 언어만 바꿔 두 번 던져 보신 적 있으십니까?

영토 분쟁처럼 예민한 주제라면 답이 조금 달라질 수 있다는 것까지는 짐작이 되실 겁니다. 그 차이가 어디서 오는지를 데이터 쪽에서 거슬러 올라가 본 연구가 이달 공개됐습니다.

연구진은 웹을 새로 긁지 않았습니다. 이미 공개돼 있던 LLM 사전학습 말뭉치를 열어, 136개국 국영·공영매체가 쓴 글만 도로 집어냈습니다.

가장 멀리 옮겨 다닐 숫자는 하나일 겁니다.

영어 웹 크롤에 남은 국영매체 글 가운데 편집 통제를 받는 매체의 몫이 39%에서 93%로 올랐다는 것.

읽으면 통제 매체가 밀고 들어오는 장면이 떠오릅니다.

논문이 적어 둔 까닭은 반대쪽이었습니다.

2024년부터 뉴스 발행사들이 크롤러를 막기 시작했고, 독립 매체 페이지가 여러 배로 줄어드는 동안 통제 매체 페이지는 훨씬 덜 줄었습니다. 두 쪽이 다 줄었는데 한쪽이 훨씬 빨리 줄었습니다.

93%는 누가 더 들어와서 생긴 수가 아니라 옆자리가 비어서 생긴 수입니다.

울타리를 칠 여력이 있는 쪽이 먼저 나갑니다. 그렇게 생긴 '빠져나간 자리'가 말뭉치의 구성을 정합니다.

이 데이터셋을 실제로 열어 보면 자극적인 요약에서 가장 먼저 잘려 나갈 항목이 줄줄이 나옵니다. 영어 말뭉치에서 편집 통제 라벨이 붙은 가장 큰 덩어리는 미국 정부가 재원을 대는 매체이고, 국영매체 쏠림 상위 목록에 오른 언어 가운데 셋은 통제 비율이 0입니다. 그 언어로 대량 발행하는 곳이 공영방송뿐이어서 그렇습니다.

크림반도를 다룬 사례에서는 숫자 하나가 오래 남았습니다.

영어로 쓰인 기사가 한쪽은 21만 건이 넘고 다른 쪽은 4천 건입니다. 쉰 배가 넘습니다. 그런데 양쪽이 각자의 언어로 쓴 기사는 3만 건 대 1만 8천 건으로 거의 같은 자릿수입니다.

영어 공간에서 한쪽 이야기만 검색되는 데에는, 영어로 수집할 글이 애초에 한쪽에만 쉰 배 많다는 사정이 먼저 깔려 있었습니다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 이번 논문에서 오래 멈춰 선 자리는 93%가 아니라 부록의 중복 표였습니다. 영어 기사 7,900만 건을 URL 기준으로 다시 지우면 2,100만 건이 남고, 표본으로 뽑아 본 중복본의 절반 이상은 글자 하나 다르지 않았습니다. 반복이 곧 가중치라면 무엇에 가중치가 걸렸는지를 아무도 적어 두지 않은 셈입니다.

이 글은 어느 매체가 참을 말하는지 판정하지 않습니다. 논문도 그런 작업이 아니라고 스스로 적어 두었습니다.

다만 읽고 나면 자리를 옮겨 오는 질문이 하나 있습니다.

"내 조직의 검색 인덱스는 지금 누구의 글을 길어 올리고 있습니까?"

세어 보기 전에는 답할 수 없는 질문이고, 세는 데 새 기술은 들지 않습니다.

▶ 전문: https://blog.pebblous.ai/report/worldstatemedia-state-media-web-corpus-2026-10/ko/

#페블러스 #데이터클리닉 #데이터품질 #WorldStateMedia #국영매체 #RAG

---

## Facebook (EN)

Type the same question into a model twice, and change nothing but the language you write it in.

Most of us would expect the two answers to differ a little, especially on something like a territorial dispute. What I had not seen before was somebody tracing that difference back down into the data.

A paper published this month does exactly that. The researchers crawled nothing. They opened an existing LLM pretraining corpus and pulled back out everything written by state and public-service outlets in 136 countries.

One number from it will travel further than the rest.

Among the state media pages left in English web crawls, the share held by editorially controlled outlets rose from 39% to 93%.

Read quickly, it looks like controlled outlets crowding in.

The paper writes down the opposite cause.

From 2024 onward, news publishers began blocking the crawlers. Independent outlet pages fell several-fold. Controlled outlet pages fell far less. Both sides shrank. One shrank much faster.

So the 93% is not a number about who arrived. It is a number about who left.

The outlets with the resources to build a fence go first, and the empty seats they leave behind decide what a corpus is made of.

Open the dataset and the findings that an alarming summary would cut first start piling up. The largest block carrying the controlled label in the English corpus belongs to outlets funded by the United States government. Three of the languages near the top of the concentration list sit at zero percent controlled, because a public broadcaster is the only one publishing in them at volume.

In the Crimea case study, one pair of counts stayed with me.

English-language articles: more than 215,000 on one side, about 4,000 on the other. Over fifty to one. Yet the articles each side wrote in its own language come to roughly 31,000 against 18,000, the same order of magnitude.

Before any model leans, the English-language pool it draws from is already fifty times deeper on one side.

Pebblous examines the quality of AI training data with DataClinic. The place I stopped longest in this paper was not the 93% but a deduplication table in the appendix. Dedupe the 79 million English articles by URL and 21 million remain, and more than half the duplicate samples are byte-for-byte identical. If repetition is weight, nobody wrote down what the weight landed on.

Neither the article nor the paper rules on which outlets tell the truth. The paper says plainly that this was never its purpose.

What does carry over is a question that changes address.

"Whose writing is my organization's retrieval index pulling up right now?"

It cannot be answered without counting, and the counting needs no new technology.

▶ Full piece: https://blog.pebblous.ai/report/worldstatemedia-state-media-web-corpus-2026-10/en/

#Pebblous #DataClinic #DataQuality #WorldStateMedia #StateMedia #RAG
