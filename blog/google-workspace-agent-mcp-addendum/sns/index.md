# SNS 홍보 글: 구글 워크스페이스, AI 에이전트 전용 통로 의무화… 학습 금지

> 소스: blog/google-workspace-agent-mcp-addendum/ko/index.html
> 생성일: 2026-11-28
> URL: https://blog.pebblous.ai/blog/google-workspace-agent-mcp-addendum/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

구글이 지메일과 드라이브에 들어오는 AI 에이전트에게 따로 문을 만들었다. 2027년 2월부터 에이전트는 그 문으로만 들어와야 한다.

구글은 11월 25일 Workspace MCP 서버와 Workspace CLI를 정식 공개했다. 같은 날 약관 부속서 'Workspace AI Tools Addendum'도 내놨다. 에이전트는 기존 REST API 대신 이 두 통로로 워크스페이스에 접근해야 하고, 사람이 쓰는 일반 앱은 지금처럼 기존 API를 쓴다. 부속서는 가져간 데이터의 쓰임도 묶었다. 워크스페이스 데이터로 모델을 학습시킬 수 없고, 임베딩 같은 파생 데이터는 30일을 넘겨 보관할 수 없다. 연결을 끊으면 데이터도 지워야 한다.

구글이 밝힌 이유는 OAuth 토큰이다. 사람 속도로 움직이던 앱의 세계에서는 유효한 토큰이 곧 사용자의 의도였다. 쉬지 않고 기계 속도로 움직이는 에이전트 앞에서는 그 전제가 성립하지 않는다는 것이 구글의 설명이다. 새 통로는 호출마다 조직 권한과 DLP 규칙을 확인하고, 메일 발송 같은 민감한 작업에는 사람의 확인을 끼운다.

실무에 가장 크게 닿는 조항은 30일 한도다. 메일과 문서를 벡터 데이터베이스에 쌓아 두고 검색하는 에이전트라면 설계를 다시 봐야 한다. 기술적 강제는 2월 1일, 사용량 과금은 4월 1일부터다.

사내 데이터에 붙은 에이전트가 직원 계정을 빌려 들어오는지, 따로 받은 신원으로 들어오는지는 이제 약관이 묻는 질문이 됐다.

▶ 전문: https://blog.pebblous.ai/blog/google-workspace-agent-mcp-addendum/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #구글워크스페이스 #GoogleWorkspace #MCP #AI에이전트 #AI거버넌스 #데이터보안

---

## LinkedIn (EN)

Google has built a separate door for AI agents that reach into Gmail and Drive. From February 2027, that door is the only way in.

On November 25 Google made its Workspace MCP server and Workspace CLI generally available, and published the Workspace AI Tools Addendum alongside them. Agents must now use those two paths instead of the existing REST APIs. Ordinary apps built for people keep the APIs they have. The addendum also limits what agents may do with what they take. Workspace data cannot be used to train or fine-tune models, derived data such as embeddings cannot be kept beyond 30 days, and everything has to be deleted once a user disconnects.

Google's stated reason is the OAuth token. In a world of apps moving at human speed, a valid token stood in for the user's intent. Google argues that assumption no longer holds for agents acting on their own, around the clock, at machine speed. The new path checks organizational permissions and DLP rules on every call, and puts a human confirmation in front of sensitive actions like sending mail.

The 30-day cap is the clause most teams will feel first. Any agent that indexes mail and documents into a vector database for retrieval will need a second look. Technical enforcement starts February 1; usage billing begins April 1.

Whether an agent on your company's data borrows an employee's account or carries an identity of its own is now a contractual question, not just an architectural one.

▶ Read: https://blog.pebblous.ai/blog/google-workspace-agent-mcp-addendum/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #GoogleWorkspace #MCP #AIAgent #AIGovernance #DataSecurity

---

## Twitter/X (KO)

구글 워크스페이스가 2027년 2월부터 AI 에이전트를 전용 MCP 서버와 CLI로만 받는다. 워크스페이스 데이터로 모델 학습은 금지되고, 임베딩은 30일 안에 지워야 한다.

사람 계정을 빌려 쓰던 에이전트에게 따로 신원을 요구하는 쪽으로 기업 데이터 경로가 바뀐다.

▶ https://blog.pebblous.ai/blog/google-workspace-agent-mcp-addendum/ko/

#페블러스 #구글워크스페이스 #MCP #AI에이전트

---

## Twitter/X (EN)

From February 2027, Google Workspace will only accept AI agents through its own MCP server and CLI. No training on Workspace data, and embeddings must go within 30 days.

Agents that borrowed a person's account will need an identity of their own.

▶ https://blog.pebblous.ai/blog/google-workspace-agent-mcp-addendum/en/

#Pebblous #GoogleWorkspace #MCP #AIAgent

---

## Facebook (KO)

'허용'.

새 앱을 지메일에 연결할 때 화면에 뜨는 그 파란 버튼을 우리는 몇 번이나 눌렀을까요. 읽어 보지도 않고, 대개는 한 손으로.

그 버튼을 누르는 순간 앱은 토큰을 받습니다. 그리고 그 토큰은 오랫동안 "이 사람이 원해서 하는 일"이라는 뜻으로 읽혀 왔습니다.

구글이 이번 주에 낸 발표를 읽으며 그 버튼이 자꾸 떠올랐습니다.

2027년 2월부터 AI 에이전트는 워크스페이스에 들어올 때 구글이 따로 만든 MCP 서버나 CLI를 거쳐야 합니다. 사람이 쓰는 앱은 지금 쓰는 길을 그대로 씁니다. 구글은 이유를 숨기지 않았습니다. 사람 속도로 움직이던 시절에는 유효한 토큰이 곧 사용자의 의도였지만, 밤새 쉬지 않고 메일과 문서를 오가는 에이전트 앞에서는 한 번 띄운 동의 화면만으로 부족하다는 것입니다.

저는 지금까지의 방식을 '빌린 열쇠'라고 부르고 싶습니다. 사람이 문을 열어 준 그 열쇠를, 사람이 자리를 뜬 뒤에도 에이전트가 계속 쥐고 있는 모습입니다. 이번 약관은 그 열쇠를 거두고, 에이전트에게 자기 이름이 적힌 열쇠를 따로 쥐여 주는 쪽으로 움직입니다. 가져간 데이터로 모델을 학습시키지 말 것, 임베딩은 30일을 넘겨 들고 있지 말 것, 연결이 끊기면 지울 것이라는 조건도 함께 붙었습니다.

"지금 우리 데이터에 닿아 있는 에이전트는 누구의 열쇠를 들고 있고, 그 열쇠가 어디에 기록으로 남는가?"

페블러스가 데이터를 진단할 때 가장 오래 붙잡는 질문도 결국 비슷합니다. 데이터가 무엇인지만큼이나, 누가 언제 어떤 권한으로 그 데이터를 만졌는지가 남아 있어야 그 데이터를 믿을 수 있기 때문입니다.

문이 하나 더 생겼다는 소식이지만, 실은 문 앞에 선 이가 누구인지를 묻기 시작했다는 소식에 더 가까워 보입니다.

▶ 전문: https://blog.pebblous.ai/blog/google-workspace-agent-mcp-addendum/ko/

#페블러스 #데이터품질 #데이터클리닉 #구글워크스페이스 #MCP #AI에이전트

---

## Facebook (EN)

"Allow."

How many times have we pressed that blue button when connecting some new app to Gmail? Without reading, usually with one thumb.

The moment we press it, the app gets a token. And for years that token has been read as a quiet sentence: this person wants this done.

I kept thinking about that button this week, reading Google's announcement.

From February 2027, AI agents that want into Workspace will have to come through an MCP server and CLI that Google built for them. Apps built for people keep using the road they already use. Google was candid about why. When software moved at human speed, a valid token was a fair proxy for intent. An agent that moves through mail and documents all night, without pause, is another matter, and a consent screen shown once no longer covers it.

I have started calling the old arrangement "the borrowed key." A person unlocks the door, walks away, and the agent keeps holding the key. The new terms take that key back and hand the agent one with its own name on it. They come with conditions: no training models on what it takes, no holding embeddings past 30 days, and delete everything when the connection is cut.

"Which agents are touching our data right now, whose key are they carrying, and where is that written down?"

It is close to the question we spend the longest on at Pebblous when we examine a dataset. Knowing what the data is matters, but so does knowing who touched it, when, and under what authority. Without that record, it is hard to trust the data at all.

On its face this is news about a new door. It reads more like the moment someone started asking who is standing in front of it.

▶ Full piece: https://blog.pebblous.ai/blog/google-workspace-agent-mcp-addendum/en/

#Pebblous #DataQuality #DataClinic #GoogleWorkspace #MCP #AIAgent
