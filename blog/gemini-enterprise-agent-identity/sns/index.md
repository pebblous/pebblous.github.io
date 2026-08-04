# SNS 홍보 글: 구글이 에이전트 하나하나에 암호화 신분증을 발급했다

> 소스: blog/gemini-enterprise-agent-identity/ko/index.html
> 생성일: 2026-08-05
> URL: https://blog.pebblous.ai/blog/gemini-enterprise-agent-identity/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

구글이 기업용 AI 에이전트 하나하나에 자기 이름의 암호화 신분증을 발급하기 시작했습니다.

4월 Google Cloud Next '26에서 공개한 Gemini Enterprise Agent Platform의 Agent Identity 이야기입니다. 지금까지 에이전트는 사람이 만든 서비스 계정을 여러 대가 나눠 쓰며 그 넓은 권한을 통째로 빌렸고, 사고가 나도 로그엔 공유 계정 이름 하나만 남았습니다. 이제 SPIFFE 기반 고유 식별자가 IAM 정책에 곧바로 최소 권한으로 묶이고, 24시간마다 갱신되는 인증서가 액세스 토큰과 암호학적으로 엮입니다. 토큰만 훔쳐서는 아무것도 재생할 수 없다는 뜻입니다.

다만 답은 절반에서 멈춥니다. '누가'와 '어떤 툴을 부를 자격이 있는가'는 확실히 잠겼지만, 그 툴이 돌려주는 데이터의 어느 행·열까지 볼 자격이 있는지는 여전히 하부 데이터 소스의 몫으로 남습니다. 벡터 검색이 원본 권한을 잃는 빈틈은 위임 OAuth 경로에서만 자동으로 메워지고, 그 밖에서는 인덱스에 붙은 ACL 메타데이터를 누군가 수작업으로 맞춰야 합니다.

신원과 툴 게이트는 인프라로 내려왔고, 데이터 한 조각의 권한은 아직 운영자의 손에 남아 있습니다.

▶ 전문: https://blog.pebblous.ai/blog/gemini-enterprise-agent-identity/ko/

#페블러스 #AIReadyData #Gemini #GoogleCloud #Okta #SPIFFE #AI에이전트 #데이터거버넌스 #AI거버넌스 #데이터클리닉

---

## LinkedIn (EN)

Google has started issuing every enterprise AI agent its own cryptographic ID, instead of letting them borrow a human's account.

Announced at Google Cloud Next '26 in April, Agent Identity in the Gemini Enterprise Agent Platform gives each agent a SPIFFE-based identifier that plugs straight into IAM as a least-privilege principal. It is backed by 24-hour certificates cryptographically bound to the access token, so a stolen token on its own is useless. That closes a real gap: shared service accounts used to leave a single name in the audit log, no matter which agent touched what.

But the answer stops halfway. "Who" and "which tool is it allowed to call" are now locked down; which rows and columns the returned data exposes still falls to the underlying data source. Vector retrieval that loses the original's row-level permissions is auto-preserved only on the delegated-OAuth path. Everywhere else, someone still has to hand-align the ACL metadata on the index with the source.

Identity and the tool gate moved into infrastructure. The entitlement of a single retrieved chunk did not.

▶ Read: https://blog.pebblous.ai/blog/gemini-enterprise-agent-identity/en/

#Pebblous #AIReadyData #Gemini #GoogleCloud #Okta #SPIFFE #AIAgent #DataGovernance #AIGovernance #DataClinic

---

## Twitter/X (KO)

구글이 기업용 AI 에이전트마다 자기 이름의 암호화 신분증을 발급했습니다. Gemini Enterprise Agent Platform의 Agent Identity입니다.

'누가'와 '어떤 툴까지'는 잠겼지만, 검색된 데이터 한 조각의 권한은 아직 하부 소스의 몫으로 남습니다.

▶ https://blog.pebblous.ai/blog/gemini-enterprise-agent-identity/ko/

#페블러스 #Gemini #AI에이전트 #데이터거버넌스

---

## Twitter/X (EN)

Google now issues every enterprise AI agent its own cryptographic ID, not a borrowed human account. That is Agent Identity in the Gemini Enterprise Agent Platform.

"Who" and "which tool" are locked. The permissions on a single retrieved data chunk still are not.

▶ https://blog.pebblous.ai/blog/gemini-enterprise-agent-identity/en/

#Pebblous #Gemini #AIAgent #DataGovernance

---

## Facebook (KO)

사고가 터진 뒤 로그를 열었는데, 거기 찍힌 이름이 팀 전체가 나눠 쓰던 계정 하나뿐이었던 적이 있습니다.

정확히 어느 에이전트가 그 데이터를 만졌는지는, 끝내 복원되지 않았습니다.

구글이 4월에 공개한 Gemini Enterprise Agent Platform을 읽다가 그 장면이 다시 떠올랐습니다. 이제 에이전트는 사람의 계정을 빌리지 않습니다. 자기 이름으로 발급받은 암호화 신분증을 들고, 관리자가 그 신분증에 직접 걸어 둔 권한 안에서만 움직입니다.

'누가 무슨 데이터를 만졌는가.'

이 질문을 두 조각으로 나눠 보면, 구글이 어디까지 답했는지가 보입니다. 앞의 '누가'는 이번에 인프라가 됐습니다. 신원과 툴 호출까지는 이제 확실히 잠깁니다.

그런데 뒤의 '무슨 데이터를 만질 자격이 있었는가'는 아직 열려 있습니다. 벡터 검색은 원본 문서를 잘게 쪼개 저장하면서, 원본이 갖고 있던 행·열 단위 권한을 함께 데려오지 못합니다. 원본에서 막힌 사람도 인덱스에 남은 조각으로 내용을 볼 수 있게 되는 자리입니다.

행위자에게 이름표를 붙이는 일과, 데이터 한 조각 한 조각에 출처와 권한을 새겨 두는 일은 서로 다른 계층의 작업입니다. 페블러스가 AI-Ready Data를 이야기할 때 붙잡는 지점도 여기입니다. 구글은 앞쪽을 인프라로 만들었습니다. 남은 한 걸음은, 데이터를 만드는 그 순간부터 시작되는 것 같습니다.

▶ https://blog.pebblous.ai/blog/gemini-enterprise-agent-identity/ko/

#페블러스 #AIReadyData #Gemini #AI에이전트 #데이터거버넌스 #데이터클리닉

---

## Facebook (EN)

I once opened an incident log hoping to find out which agent had touched the data. All it showed was one shared account, the one our whole team ran everything through.

Which agent it actually was, we never recovered.

That memory came back while I was reading Google's Gemini Enterprise Agent Platform, announced in April. Agents no longer borrow a person's account. Each one now carries a cryptographic ID issued in its own name, and moves only inside the permissions an admin has written directly onto that ID.

"Who touched what data."

Split that question in two, and you can see how far Google went. The "who" has become infrastructure. Identity and the tool call are now firmly locked.

The other half, "what data was it entitled to reach," is still open. Vector retrieval breaks a document into small pieces, and the row-level permissions the original carried do not travel with them. Someone blocked at the source can still read the fragment left in the index.

Naming the actor and inscribing provenance onto each piece of data are two different layers of work. That second layer is exactly where AI-Ready Data lives for us. Google turned the first half into infrastructure. The step that remains seems to begin the moment the data itself is made.

▶ https://blog.pebblous.ai/blog/gemini-enterprise-agent-identity/en/

#Pebblous #AIReadyData #Gemini #AIAgent #DataGovernance #DataClinic
