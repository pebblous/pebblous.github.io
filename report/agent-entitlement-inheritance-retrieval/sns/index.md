# SNS 홍보 글: 에이전트는 출처의 권한을 물려받지 못한다

> 소스: report/agent-entitlement-inheritance-retrieval/ko/index.html
> 생성일: 2026-07-16
> URL: https://blog.pebblous.ai/report/agent-entitlement-inheritance-retrieval/ko/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective

---

## LinkedIn (KO)

2026년 3월, 메타의 한 내부 AI 에이전트가 두 시간 동안 볼 자격 없는 데이터를 사내에 열어 놓았다. 아무것도 뚫리지 않았다.

공격자도, 자격증명 도난도, 경계 돌파도 없었다. 에이전트는 유효한 자격으로 모든 신원 확인을 정상 통과했다. 실패는 인증 다음 단계에서 났다. 그 에이전트가 무엇까지 볼 자격이 있는지를 확인하는 인가가, 데이터에 손을 뻗는 시점에 강제되지 않았다.

원본 웨어하우스는 누가 무엇을 보는지 행과 열까지 강제한다. 그러나 데이터가 청크로 쪼개져 벡터 인덱스로 옮겨지는 순간 그 접근 통제는 따라오지 않는다. 많은 조직이 권한을 원본에서 상속하는 대신 검색 계층에 따로 손으로 설정하고, 그렇게 복제된 권한은 직무 이동과 회수 누락을 따라 원본과 어긋난다. 이것이 entitlement drift다.

사람에게 과권한은 대체로 잠재 위험이다. 부여된 권한의 96%가 90일간 한 번도 쓰이지 않는다. 그러나 에이전트는 그 권한을 기계 속도로 전부 활성화한다. 잠재 위험이 곧바로 실현되는 유출로 바뀐다.

유출은 답변이 아니라 검색 시점에 시작된다. 걸러 낼 무렵이면 비인가 데이터는 이미 랭킹과 캐시에 개입한 뒤다. 던져야 할 질문은 우리 에이전트가 무엇을 아는가가 아니라, 무엇까지 볼 자격이 있는가를 검색 시점에 강제하고 있는가이다.

▶ 전문: https://blog.pebblous.ai/report/agent-entitlement-inheritance-retrieval/ko/

#페블러스 #데이터거버넌스 #AI에이전트 #RAG보안 #AIReadyData #entitlementdrift #Meta #Gartner

---

## LinkedIn (EN)

In March 2026, one of Meta's internal AI agents left data it had no right to see exposed for roughly two hours. Nothing was breached.

No attacker, no stolen credential, no broken perimeter. The agent held valid credentials and cleared every identity check. The failure came after authentication, in the authorization step that should have asked what this agent was actually entitled to see, and never did.

The mechanism is mundane. A source warehouse enforces who sees what down to the row and column, but the moment that data is chunked and embedded into a vector index, those controls do not travel with it. Many teams rebuild permissions by hand in the retrieval layer instead of inheriting them from the source, and those copied entitlements drift as people change roles and access is never revoked.

For humans, over-permissioning is mostly latent: 96% of granted permissions go unused for 90 days. An agent activates the same permissions at machine speed, turning a latent risk into an immediate leak.

The leak, then, begins at retrieval, not at the answer. By the time you filter unauthorized results out, they have already shaped the ranking and sat in the cache. The question worth enforcing is not what an agent knows but what it is entitled to see, at the moment it retrieves.

▶ Read: https://blog.pebblous.ai/report/agent-entitlement-inheritance-retrieval/en/

#Pebblous #DataGovernance #AIAgents #RAGSecurity #AIReadyData #EntitlementDrift #Meta #Gartner

---

## Twitter/X (KO)

메타의 내부 AI 에이전트가 두 시간 동안 볼 자격 없는 데이터를 노출했다. 아무것도 뚫리지 않았다. 유효한 자격으로 인증은 통과했지만, 무엇까지 볼 자격이 있는지는 검색 시점에 강제되지 않았다.

유출은 답변이 아니라 검색 단계에서 이미 시작된다.

https://blog.pebblous.ai/report/agent-entitlement-inheritance-retrieval/ko/

#페블러스 #AI에이전트 #데이터거버넌스 #RAG보안

---

## Twitter/X (EN)

A Meta internal AI agent exposed data it wasn't entitled to for two hours. Nothing was breached. It passed authentication with valid credentials, but what it was entitled to see was never enforced at retrieval.

The leak starts at retrieval, not at the answer.

https://blog.pebblous.ai/report/agent-entitlement-inheritance-retrieval/en/

#Pebblous #AIAgents #DataGovernance #RAGSecurity

---

## Facebook (KO)

재무팀에서 마케팅팀으로 자리를 옮긴 직원을 한 사람 떠올려 봅니다.

인사 발령은 이미 기록됐고, 원본 데이터베이스는 그의 옛 재무 데이터 접근을 곧 닫았습니다.

그런데 그를 대신해 일하는 AI 에이전트는, 검색 계층 어딘가에 복사돼 남은 낡은 권한을 근거로 그 재무 문서를 여전히 열어 봅니다.

지난 3월 메타에서 벌어진 일도 결이 다르지 않았습니다. 두 시간 동안 볼 자격 없는 데이터가 사내에 노출됐지만, 아무것도 뚫리지 않았습니다. 에이전트는 유효한 자격으로 모든 신원 확인을 통과했습니다.

빠진 것은 단 하나였습니다.

"이 에이전트가 지금 이 데이터를 볼 자격이 있는가."

이 물음을 검색하는 바로 그 순간에 아무도 되묻지 않았을 뿐입니다.

사람에게 열려 있는 문은 대부분 평생 한 번도 열리지 않습니다. 부여된 권한의 대부분이 몇 달째 잠들어 있다는 조사도 있습니다. 그런데 에이전트는 그 문을 기계의 속도로 남김없이 열어 봅니다. 사람에게는 잠재적이던 위험이, 에이전트에게는 곧바로 실현되는 유출이 됩니다.

그래서 저는 데이터의 '준비됨'을 정확성이나 완결성만으로 보지 않으려 합니다. 아무리 정확하고 완결적인 데이터라도, 볼 자격 없는 이에게 닿을 수 있다면 그것은 아직 준비된 데이터가 아니기 때문입니다.

무엇을 아는가보다, 무엇까지 볼 자격이 있는가. 검색이 시작되는 바로 그 순간에 이 물음이 강제되고 있는지, 기업 AI를 올리려는 분들과 같은 자리에서 한 번 짚어 보고 싶습니다.

전문 → https://blog.pebblous.ai/report/agent-entitlement-inheritance-retrieval/ko/

#페블러스 #데이터거버넌스 #AI에이전트 #RAG보안 #데이터클리닉 #AIReadyData

---

## Facebook (EN)

Picture one employee who just moved from finance to marketing.

The HR record is updated, and the source database quietly closes their old access to financial data.

But the AI agent working on their behalf keeps opening those same financial documents, relying on a stale permission that was copied into the retrieval layer and left behind.

What happened at Meta this past March had the same shape. For about two hours, data no one was entitled to see was exposed inside the company, and yet nothing was breached. The agent carried valid credentials and passed every identity check.

Only one thing was missing.

"Is this agent, right now, entitled to see this data?"

No one asked that question at the moment of retrieval.

Most of the doors open to a person are never opened in a lifetime; a large share of granted permissions simply sits unused for months. An agent, though, opens every one of those doors at machine speed. What stays latent for a human becomes an immediate leak for an agent.

So I've stopped thinking of data as "ready" when it is merely accurate and complete. However accurate it is, if it can reach someone who has no right to see it, it is not yet ready.

Not what an agent knows, but what it is entitled to see, enforced at the very moment retrieval begins. That is the question I'd like to sit with, alongside anyone trying to move enterprise AI into production.

Read the full piece → https://blog.pebblous.ai/report/agent-entitlement-inheritance-retrieval/en/

#Pebblous #DataGovernance #AIAgents #RAGSecurity #DataClinic #AIReadyData
