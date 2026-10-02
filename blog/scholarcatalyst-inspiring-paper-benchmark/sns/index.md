# SNS 홍보 글: 논문 추천 시험 ScholarCatalyst, AI는 영감 준 논문을 놓친다

> 소스: blog/scholarcatalyst-inspiring-paper-benchmark/ko/index.html
> 생성일: 2026-10-03
> URL: https://blog.pebblous.ai/blog/scholarcatalyst-inspiring-paper-benchmark/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

검색 도구를 원하는 만큼 직접 불러 쓴 AI가, 같은 도구를 한 번만 돌린 단순 검색보다 논문을 더 못 찾았습니다.

10월 1일 arXiv에 올라온 ScholarCatalyst 벤치마크의 결과입니다. 스탠퍼드·서울대·카네기멜런 등의 연구진이 만들었고, 남다른 것은 정답지를 만든 사람입니다. 논문을 쓴 당사자 184명이 자기 프로젝트 207건을 다시 열어 보고 어떤 선행 연구가 실제로 도움이 됐는지 직접 표시했습니다. 표시에서 끝내지 않고 왜 도움이 됐는지 이유까지 적었습니다.

19만여 편 후보에서 그 논문을 찾는 시험에서 에이전트형 탐색은 Recall@20 0.42였고, 같은 검색기를 한 번 돌린 임베딩 검색은 0.48이었습니다.

병목은 모델의 이해력이 아니었습니다. 원 논문의 참고문헌 목록을 그대로 입력에 넣어 주자 같은 에이전트의 점수가 0.39에서 0.74로 올라갔습니다. 모델도 도구도 그대로이고, 어디를 봐야 하는지가 주어졌을 뿐입니다.

다만 그 목록에는 핵심 연구 질문의 정답 논문 95%가 이미 들어 있어 0.74를 도달 가능한 목표로 읽기는 어렵습니다. 저자들은 공저자 세 명에게 같은 논문의 라벨을 따로 달게 했을 때 제1저자와 겹친 비율이 43%에서 60% 사이였다는 사실도 함께 공개했습니다.

좋은 평가 데이터는 완벽한 데이터가 아니라, 어디까지 믿을 수 있는지를 라벨 옆에 함께 적어 둔 데이터입니다.

▶ 전문: https://blog.pebblous.ai/blog/scholarcatalyst-inspiring-paper-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #ScholarCatalyst #arXiv #벤치마크 #평가데이터 #AI에이전트 #AIReadyData

---

## LinkedIn (EN)

An AI agent free to call a search tool as many times as it wanted found fewer of the right papers than a single pass of plain embedding search.

The result comes from ScholarCatalyst, a benchmark posted to arXiv on October 1 by researchers at Stanford, Seoul National University, Carnegie Mellon and others. What makes it unusual is who wrote the answer key. 184 first and corresponding authors went back through 207 of their own projects, marked which prior work had actually helped, and wrote down why it helped.

Searching roughly 190,000 candidate papers for those marks, the agentic setup scored Recall@20 of 0.42. The same retriever, queried once, scored 0.48.

The bottleneck was not comprehension. Handed the source paper's own reference list, the agent's score on the core research questions moved from 0.39 to 0.74. Same model, same tools. The only thing that changed was knowing where to look.

That list already contains 95 percent of the gold papers for those core questions, so 0.74 is not a reachable target. The authors also published a harder number about their own data: when three co-authors labeled the same paper independently, they agreed with the first author on 43 to 60 percent of the picks.

Good evaluation data is not flawless data. It is data that records how far it can be trusted.

▶ Read: https://blog.pebblous.ai/blog/scholarcatalyst-inspiring-paper-benchmark/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #ScholarCatalyst #arXiv #Benchmark #EvalData #AIAgent #AIReadyData

---

## Twitter/X (KO)

연구자 184명이 자기 연구에 실제로 도움이 된 선행 논문을 직접 표시해 정답지를 만들었습니다. 검색 도구를 여러 번 직접 불러 쓴 AI는 Recall@20 0.42로, 같은 도구를 한 번만 돌린 단순 검색보다 낮았습니다.

못 찾은 이유는 읽고 판단하는 힘이 아니라, 애초에 눈앞에 올라온 후보의 범위였습니다.

https://blog.pebblous.ai/blog/scholarcatalyst-inspiring-paper-benchmark/ko/

#페블러스 #ScholarCatalyst #벤치마크 #AI에이전트

---

## Twitter/X (EN)

184 researchers marked the prior papers that actually inspired their own work. An agent calling the search tool found them at Recall@20 of 0.42, below a single pass of plain embedding search.

The gap was not comprehension. It was which candidates ever reached the agent at all.

https://blog.pebblous.ai/blog/scholarcatalyst-inspiring-paper-benchmark/en/

#Pebblous #ScholarCatalyst #Benchmark #AIAgent

---

## Facebook (KO)

논문을 마치고 참고문헌 목록을 정리할 때, 거기 이름을 올리지 못한 논문이 꼭 한두 편 있습니다.

읽던 당시에는 방향을 바꿔 놓았는데, 정작 본문에 인용할 자리가 없었던 글들입니다.

ScholarCatalyst라는 시험은 그 한두 편을 찾아보려고 만들어졌습니다. 논문을 쓴 당사자 184명이 자기 프로젝트를 다시 열어 보고 어떤 선행 연구가 실제로 도움이 됐는지 직접 표시했습니다. 표시에서 끝내지 않고 왜 도움이 됐는지 이유까지 적었습니다.

그렇게 만든 정답지를 보니, 좁은 주제로 던진 질문에서는 정답 논문의 43.6%가 그 연구에 인용된 적이 없었습니다. 인용 기록만 따라가는 방식으로는 영감의 절반 가까이가 처음부터 보이지 않는다는 뜻입니다.

AI는 이 시험을 잘 치지 못했습니다. 눈에 남는 건 왜 못 쳤느냐입니다. 검색 도구를 여러 번 불러 쓴 쪽이 한 번만 돌린 쪽보다 오히려 낮았고, 원 논문의 참고문헌 목록을 통째로 쥐여 주자 점수가 거의 두 배가 됐습니다. 모자랐던 것은 읽고 판단하는 능력이 아니라 어디를 봐야 하는지였습니다.

저에게 더 오래 남은 건 성적표가 아니라 정답지 쪽이었습니다. 저자들은 같은 논문의 공저자 세 명에게 따로 라벨을 달게 해 봤고, 제1저자와 겹친 비율이 43%에서 60% 사이였다는 사실을 덮지 않고 함께 공개했습니다.

"이 라벨은 누가 달았고, 그 사람이 왜 그렇게 달았는지가 옆에 남아 있는가?"

페블러스에서 데이터 품질을 다룰 때 자주 되묻는 물음입니다. 좋은 평가 데이터가 완벽한 데이터라는 뜻은 아닐 것입니다. 다만 어디까지 믿을 수 있는지를 라벨 옆에 같이 적어 둔 데이터이기는 할 것입니다.

우리가 AI에게 시키는 일의 정답지는 지금 누가, 어떤 근거로 만들고 있을까요.

https://blog.pebblous.ai/blog/scholarcatalyst-inspiring-paper-benchmark/ko/

#페블러스 #데이터클리닉 #데이터품질 #ScholarCatalyst #평가데이터

---

## Facebook (EN)

When you finish a paper and assemble the reference list, there is usually a work or two that never makes it in.

Papers that changed your direction while you were reading them, and then found no place to be cited.

A benchmark called ScholarCatalyst was built to go looking for exactly those. 184 authors went back into their own projects and marked which earlier work had actually helped. They did not stop at marking it. They wrote down why.

Reading the answer key they produced, one number stays with me. On the narrower questions, 43.6 percent of the correct papers had never been cited by the work they inspired. Follow the citation trail alone and almost half of the influence was never visible to begin with.

The AI systems did poorly on the test. What is interesting is the shape of the failure. The setup that called the search tool again and again scored lower than the one that queried it once, and handing the agent the source paper's reference list nearly doubled its score. What was missing was not the ability to read and judge. It was knowing where to look.

What stayed with me longer than the scores was the answer key itself. The authors had three co-authors label the same paper independently, and they published the result rather than burying it: agreement with the first author ran between 43 and 60 percent.

"Who wrote this label, and is the reason they wrote it still sitting next to it?"

That is the question we keep returning to at Pebblous when we work on data quality. Good evaluation data may not mean flawless data. It may mean data that keeps a record of how far it can be trusted.

So who is writing the answer keys for the work we hand to AI, and on what grounds?

https://blog.pebblous.ai/blog/scholarcatalyst-inspiring-paper-benchmark/en/

#Pebblous #DataClinic #DataQuality #ScholarCatalyst #EvalData
