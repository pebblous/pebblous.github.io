# SNS 홍보 글: 챗봇이 앞 대화를 기억하게 만드는 다섯 가지 방법

> 소스: report/conversational-memory-context-frameworks/ko/index.html
> 생성일: 2026-07-16
> URL: https://blog.pebblous.ai/report/conversational-memory-context-frameworks/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

챗봇이 앞 대화를 자꾸 잊는다. 흔히 "기억력이 나쁘다"고 말하지만, 정확히는 앞의 대화가 애초에 프롬프트에 담기지 않았을 뿐이다.

이 진단은 해법의 난이도를 통째로 바꾼다. 문제가 "장기 기억의 부재"라면 벡터DB와 검색 파이프라인을 갖춘 무거운 시스템이 필요하지만, "앞 대화를 안 보낸 것"이라면 매 요청에 이전 대화를 함께 실어 보내는 것만으로 대부분 풀린다.

"이제 컨텍스트 윈도우가 1M이니 그냥 다 넣으면 된다"는 반론이 나올 법하다. 그러나 여러 독립 연구는 그 반대를 가리킨다. 광고된 컨텍스트의 실사용 구간은 절반 남짓에 그치고, 약 3만 토큰을 넘어서면 창 크기와 무관하게 성능 저하가 가속된다.

전문 도구 다섯(Letta·Mem0·Zep·LangGraph·LlamaIndex)을 대화 기억 관점에서 해부해 보면, 성능 주장은 대부분 벤더 자체 발표이고 서로 반박한다. 그래프 기억의 대표 격인 Zep은 2025년 4월 자체 호스팅판을 폐지해, 설치형·의존성 0 스택에서는 이제 쓸 수 없다.

그래서 결론은 절제된 순서다. 1순위는 프레임워크 없는 이력 전달과 요약 접기, 다음 단계는 고객별 기억이나 상담 그래프가 실제로 필요해질 때 Graphiti나 Mem0를 옆에 붙이는 것이다. 전면 도입이 아니라, 결핍이 나타나는 순서대로.

▶ 전문: https://blog.pebblous.ai/report/conversational-memory-context-frameworks/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #Letta #Mem0 #Zep #LangGraph #LlamaIndex #LLM메모리 #문맥관리

---

## LinkedIn (EN)

Chatbots keep forgetting the previous turn. We call it "bad memory," but the real cause is usually simpler: the earlier conversation was never sent in the prompt to begin with.

That distinction changes the difficulty of the fix entirely. If the problem were an absence of long-term memory, you would need a heavy stack of vector databases and retrieval pipelines. If the problem is that the prior conversation was never passed along, most of it resolves by simply carrying the history into each request.

The obvious rebuttal is that context windows now reach 1M tokens, so you can just stuff everything in. Independent studies point the other way. Only about half of an advertised window is usable in practice, and performance degradation accelerates past roughly 30K tokens regardless of window size.

Dissecting the five specialist tools (Letta, Mem0, Zep, LangGraph, LlamaIndex) on conversational memory, the benchmark claims are mostly vendor self-reported and rebut one another. Zep, the flagship of graph memory, discontinued its self-hosted edition in April 2025, putting it out of reach for a dependency-free, self-hosted stack.

The conclusion is a restrained roadmap. First, framework-free history plus summary folding. Then, only when per-customer memory or a support-record graph is genuinely needed, bolt Graphiti or Mem0 onto the side. Not a full adoption, but in the order the gaps actually appear.

▶ Read: https://blog.pebblous.ai/report/conversational-memory-context-frameworks/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #Letta #Mem0 #Zep #LangGraph #LlamaIndex #LLMMemory #ContextManagement

---

## Twitter/X (KO)

챗봇이 앞 대화를 잊는 건 기억력이 아니라, 앞 대화를 프롬프트에 안 보냈기 때문이다.

Letta·Mem0·Zep·LangGraph·LlamaIndex를 대화 기억 관점에서 해부했다. 가장 가벼운 해법은 이력 전달과 요약 접기, 그다음이 프레임워크다.

https://blog.pebblous.ai/report/conversational-memory-context-frameworks/ko/

#페블러스 #데이터품질 #LLM메모리 #Zep #문맥관리

---

## Twitter/X (EN)

A chatbot forgets the last turn not because its memory is weak, but because the prior turn was never sent in the prompt.

We compared Letta, Mem0, Zep, LangGraph, and LlamaIndex on conversational memory. The lightest fix is passing history and folding summaries. Frameworks come after.

https://blog.pebblous.ai/report/conversational-memory-context-frameworks/en/

#Pebblous #DataQuality #LLMMemory #Zep #ContextManagement

---

## Facebook (KO)

"그럼 그건 왜죠?"

상담 챗봇에게 한 번 더 물었을 뿐인데, 대답이 갑자기 엉뚱해지는 순간이 있습니다.

우리는 이걸 흔히 "이 챗봇은 기억력이 나쁘다"고 말합니다.

그런데 들여다보니 원인은 지능이 아니었습니다. 방금 나눈 앞 대화를, 애초에 다시 건네지 않았을 뿐이었습니다.

그래서 이번 리포트는 거창한 기억 시스템 다섯 개를 늘어놓기 전에 먼저 물었습니다. "이 챗봇에게 진짜 없는 것은 무엇인가."

Letta, Mem0, Zep 같은 도구들은 저마다 우아한 발상을 가지고 있습니다. 모델이 스스로 수첩을 고쳐 쓰고, 사용자별 기억을 얇게 쌓고, 시간이 흐르는 지식 그래프를 그립니다. 다만 그 무게와 철학이 저마다 다르고, 성능을 자랑하는 숫자들은 대부분 자기 발표라 서로 어긋납니다.

큰 컨텍스트 윈도우가 이 고민을 지워 줄 거라 기대하기도 합니다. 이제 1M 토큰이 들어가니까요. 그런데 여러 연구는 반대를 가리킵니다. 대략 3만 토큰을 넘어서면, 창이 아무리 커도 모델은 앞을 흐릿하게 봅니다.

"기억을 잘한다는 건 무엇일까요?"

리포트를 쓰는 내내 되돌아온 질문이었습니다. 답은 의외로 조용했습니다. 먼저 앞 대화를 잊지 않고 다시 건네는 일. 화려한 능력을 먼저 사는 게 아니라, 결핍이 드러나는 순서대로 필요한 만큼만 붙이는 일.

페블러스가 이 지형을 이렇게 정직하게 대보는 이유도 여기에 있습니다. 무엇을 사실로 남기고 언제 버릴지를 정하는 일은, 결국 데이터 품질의 문제이기 때문입니다.

https://blog.pebblous.ai/report/conversational-memory-context-frameworks/ko/

#페블러스 #데이터품질 #데이터클리닉 #LLM메모리 #Mem0 #문맥관리

---

## Facebook (EN)

"So why is that?"

You ask a support chatbot one more question, and the answer suddenly wanders off somewhere else.

We usually call this a chatbot with a poor memory.

But when I looked closer, the cause was not intelligence. The conversation we had just moments ago was simply never handed back to the model.

So before laying out five grand memory systems, this report asked a quieter question first. "What does this chatbot actually lack?"

Tools like Letta, Mem0, and Zep each carry an elegant idea. A model that rewrites its own notebook, a thin per-user memory, a knowledge graph that keeps time. Yet their weight and philosophy differ, and the numbers they boast are mostly self-reported, contradicting one another.

We sometimes hope a large context window will erase the whole problem. A million tokens fit now, after all. But study after study points the other way. Past roughly 30,000 tokens, no matter how wide the window grows, the model sees what came before only dimly.

"What does it really mean to remember well?"

That was the question I kept returning to. The answer turned out to be quiet. First, not forgetting the previous conversation, and handing it back. Not buying the flashiest capability first, but adding only as much as each gap demands, in the order the gaps appear.

That is also why Pebblous measures this landscape so plainly against its own constraints. Deciding what to keep as fact and when to let it go is, in the end, a question of data quality.

https://blog.pebblous.ai/report/conversational-memory-context-frameworks/en/

#Pebblous #DataQuality #DataClinic #LLMMemory #Mem0 #ContextManagement
