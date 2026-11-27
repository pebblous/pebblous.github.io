# SNS 홍보 글: 구글 워크스페이스, AI 에이전트 전용 통로 의무화… 학습 금지

> 소스: blog/google-workspace-agent-mcp-addendum
> 생성일: 2026-11-28
> URL (KO): https://blog.pebblous.ai/blog/google-workspace-agent-mcp-addendum/ko/
> URL (EN): https://blog.pebblous.ai/blog/google-workspace-agent-mcp-addendum/en/
> 규격: sns-write v2 (회사형 · 링크드인·페이스북 공용)

---

## LinkedIn · Facebook (KO)

구글이 AI 에이전트가 워크스페이스 데이터에 닿는 길을 사람이 쓰는 앱과 갈라 놓았다.

11월 25일 정식 공개한 워크스페이스 MCP 서버와 명령줄 도구가 에이전트에게 열어 둔 유일한 문이고, 2027년 2월 1일부터 기술적으로 강제된다. 지메일과 드라이브를 비롯한 여덟 가지 앱이 이 통로로 연결되고, 구글 클라우드 콘솔의 OAuth 설정에는 해당 클라이언트를 에이전트에 쓴다는 표시가 붙었다. 같은 날 붙은 「Workspace AI Tools Addendum」은 받아 간 데이터로 모델을 학습시키거나 미세조정하는 일, 원본을 영구 보관하는 일, API를 긁어 가는 일을 금지했다.

구글이 댄 이유는 이렇다. 기존 REST API는 사람의 속도로 움직이는 앱을 위해 만들어졌고, 유효한 OAuth 토큰이 곧 사용자의 의도를 뜻했다. 기계 속도로 스스로 움직이는 에이전트 앞에서는 그 가정이 성립하지 않는다. 워크스페이스 API 호출은 한 달에 2조 8천억 번을 넘는다.

약관이 말하는 파생 데이터에는 벡터 임베딩과 메모리 색인이 들어가고, 보관 상한은 30일이다. 워크스페이스 문서로 검색용 색인을 만들어 몇 달씩 재사용해 온 팀이라면 보관 주기부터 다시 볼 일이다.

▶ 전문: https://blog.pebblous.ai/blog/google-workspace-agent-mcp-addendum/ko/
#구글워크스페이스 #MCP #AI에이전트 #데이터거버넌스 #페블러스

---

## LinkedIn · Facebook (EN)

Google has split the route AI agents take to Workspace data away from the one human-facing apps use.

The Workspace MCP servers and the Workspace CLI, released in general availability on November 25, are now the only door open to agents, and technical enforcement begins on February 1, 2027. The MCP servers connect eight apps, among them Gmail, Drive, Docs, Sheets and Calendar, and OAuth client settings in the Google Cloud console now carry a box marking a client as agentic. The Workspace AI Tools Addendum, published the same day, bars training or fine-tuning a model on data taken through that door, storing the raw data indefinitely, and scraping the APIs.

The reason Google gives is that an assumption broke. Traditional REST APIs were built for human-paced apps where a valid OAuth token implied user intent, and that no longer holds for agents acting on their own at machine speed. Workspace APIs now handle more than 2.8 trillion calls a month.

Derived information under the addendum covers vector embeddings and memory indexes, and may not be held past 30 days. Teams that build a search index from Workspace documents and reuse it for months have a retention schedule and a provenance record to revisit.

▶ Read: https://blog.pebblous.ai/blog/google-workspace-agent-mcp-addendum/en/
#GoogleWorkspace #MCP #AIAgents #DataGovernance #Pebblous
