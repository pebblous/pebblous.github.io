# SNS 홍보 글: 노션 AI 대화 기록, 유출은 모델을 대신 돌린 회사에서 난다

> 소스: blog/notion-ai-fireworks-breach-transcripts/
> 생성일: 2026-11-13
> URL: https://blog.pebblous.ai/blog/notion-ai-fireworks-breach-transcripts/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

노션 이용자가 AI와 주고받은 대화 기록이 공격자 손에 넘어갔다. 뚫린 곳은 노션이 아니다.

침해를 당한 곳은 노션이 AI 기능 일부를 맡겨 온 미국 추론 업체 파이어웍스다. 영향받은 워크스페이스는 전체의 1% 미만이고, 빠져나간 것은 Insights 기능에 쓰인 대화 기록이다. 모델에 넣은 말과 모델이 돌려준 말 가운데 채팅에 적힌 것이 모두 들어 있다.

하필 그 기능인 데는 이유가 있다. Insights는 팀이 AI를 어떻게 쓰는지 관리자에게 보여 주는 기능이고, 집계를 하려면 대화를 종류별로 갈라야 한다. 노션은 그 분류를 파이어웍스에 맡겼다. 분류를 맡긴다는 것은 대화를 넘긴다는 뜻이다.

계약 쪽은 두 줄로 갈린다. 노션은 파이어웍스가 제로 데이터 보존을 계약으로 약속했다고 적으면서, 그 약속이 저장을 전제로 돌아가는 기능까지는 덮지 않는다고 같은 문답에 적었다. 그리고 쓰던 파이어웍스 엔드포인트에 데이터가 남아 있었다는 사실을 조사 과정에서 알게 됐다고도 적었다. 어느 기능이 그 기록을 들고 있었는지는 두 회사 모두 밝히지 않았다.

11월 2일 첫 통보는 합성 테스트 데이터로 보인다는 내용이었고, 고객 데이터가 확정된 것은 엿새 뒤인 8일이다. 그 사이 노션이 할 수 있는 일은 기다리는 것이었다. 벤더에 맡긴 데이터에서 사고가 나면 피해 범위를 세는 시계는 그쪽이 쥔다.

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 수치로 적어 진단한다. 그 수치보다 앞에 놓이는 질문은 이 데이터가 어느 회사의 설비를 지나왔고 어디에 남았는가다.

▶ 전문: https://blog.pebblous.ai/blog/notion-ai-fireworks-breach-transcripts/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #노션AI #FireworksAI #제로데이터보존 #AI거버넌스 #데이터보안 #데이터계보

---

## LinkedIn (EN)

An attacker came away with Notion AI chat transcripts without ever getting inside Notion.

The break-in was at Fireworks AI, the American company Notion pays to run part of its AI. Under 1% of Notion workspaces are affected. What went out were the transcripts behind Insights, and they carry both halves of the exchange as it was typed into the chat.

There is a reason it was that feature. Insights is the admin-facing report on how much AI a team is getting through, and producing those counts means sorting conversations by the kind of work each one represents. Notion gave the sorting job to Fireworks. Handing over the sorting means handing over the conversations.

The contract reads two ways at once. Notion says Fireworks committed to zero data retention, and in the same incident Q&A says that commitment covers the API calls that generate an answer, leaving out features that only function by storing what they process. Chat history and Insights are named as examples. The page then adds that Notion learned during the investigation that data had been retained at the Fireworks endpoints it was using. Which Fireworks feature was holding the records is a question neither company has answered.

The first call, on November 2, described what looked like synthetic test data. The confirmed dataset came six days later. For those six days there was nothing for Notion to do. When a breach happens inside data a vendor is holding for you, counting the damage runs on the vendor's schedule.

Pebblous reckons the quality of AI training data with DataClinic. Upstream of a number like that sits something plainer: whose hardware this data has already crossed, and what it left sitting there.

▶ Read: https://blog.pebblous.ai/blog/notion-ai-fireworks-breach-transcripts/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #NotionAI #FireworksAI #ZeroDataRetention #AISupplyChain #VendorRisk #DataLineage

---

## Twitter/X (KO)

노션 AI 대화 기록이 유출됐다. 뚫린 곳은 노션이 아니라 모델을 대신 돌리던 파이어웍스다.

전체 워크스페이스 1% 미만. 나간 것은 Insights에 쓰인 대화 전문이고, 제로 데이터 보존 약속은 저장이 전제인 그 기능까지 덮지 않았다. 무엇이 나갔는지 노션이 안 것은 통보 엿새 뒤다.

https://blog.pebblous.ai/blog/notion-ai-fireworks-breach-transcripts/ko/

#페블러스 #노션AI #FireworksAI #데이터품질

---

## Twitter/X (EN)

Notion AI chat transcripts leaked, and the company that was broken into was not Notion. It was Fireworks AI, which runs models on Notion's behalf.

Under 1% of workspaces. The records are the full Insights transcripts, and zero data retention never reached a feature that only functions by storing what it processes.

https://blog.pebblous.ai/blog/notion-ai-fireworks-breach-transcripts/en/

#Pebblous #NotionAI #FireworksAI #DataQuality

---

## Facebook (KO)

회사에서 AI를 얼마나 쓰고 있는지 알고 싶을 때, 관리자는 집계를 켭니다.

그 집계가 돌아가려면 누군가는 대화를 종류별로 갈라야 합니다.

노션은 그 분류를 파이어웍스라는 미국 추론 업체에 맡겼습니다. 분류를 맡긴다는 것은 대화를 보낸다는 뜻입니다.

이번에 공격자 손에 넘어간 기록이 그 대화입니다. 노션은 뚫리지 않았습니다. 뚫린 곳은 노션이 모델 구동을 맡겨 둔 회사였고, 그 회사를 고른 쪽은 노션을 쓰는 사람이 아닙니다.

노션은 피해 워크스페이스의 대다수에서 그 기록에 누가 썼는지도, 어느 워크스페이스에서 왔는지도 표시돼 있지 않았다고 밝혔습니다.

그래도 노션은 11월 11일에 대화 속에서 노출된 노션 API 키를 찾아 무효화했습니다. 꼬리표가 없어도 바로 쓸 수 있는 것이 그 안에 있었다는 뜻입니다.

거둬들일 수 있었던 것은 자기 서비스의 키까지입니다. 사내 서버나 결제 대행사의 자격 증명이 대화에 섞여 있었다면, 그것을 바꾸는 일은 붙여 넣은 사람 몫으로 남습니다.

노션이 공개한 내용은 자세한 편입니다. 연결을 끊은 날, 지운 범위, 기록의 상태, 바꾸라고 권한 것이 날짜와 함께 적혀 있습니다.

다만 11월 2일 첫 통보와 8일 확정 사이에는 엿새가 있습니다. 그 엿새 동안 노션이 할 수 있는 일은 기다리는 것이었습니다.

읽는 내내 걸린 것은 계약 쪽이었습니다.

제로 데이터 보존은 계약서에 적혀 있었습니다. 그리고 노션은 그 약속이 저장을 전제로 돌아가는 기능까지는 덮지 않는다고, 사고를 설명한 문답에 함께 적었습니다.

"데이터를 남기지 않기로 한 그 조항은, 우리가 실제로 쓰는 기능까지 덮습니까?"

페블러스는 DataClinic으로 AI 학습 데이터의 품질을 정량 진단합니다. 그 진단보다 앞에 놓이는 것은 이 데이터가 어느 회사의 설비를 지나왔는지를 기능 단위로 적어 두는 일입니다.

직원이 보는 것은 자기가 글을 쓰는 창 하나입니다. 그 뒤에 선 회사들의 이름은 대개 사고가 난 뒤에 알게 됩니다.

▶ 전문: https://blog.pebblous.ai/blog/notion-ai-fireworks-breach-transcripts/ko/

#페블러스 #노션AI #FireworksAI #제로데이터보존 #데이터품질 #데이터클리닉

---

## Facebook (EN)

An administrator who wants to know how much AI a team is actually using switches on a usage report.

For that report to add up, every conversation has to be filed under the sort of task it was.

Notion handed that filing job to Fireworks AI, an inference provider in the United States. Handing over the filing means handing over what is being filed.

Those conversations are what an attacker reached. Notion itself was not broken into. The company that was broken into is the one Notion had running models on its behalf, and nobody using Notion ever chose it.

Notion says that across most of the affected workspaces the transcripts arrived with no author on them and no workspace of origin.

Even so, on November 11 Notion went through those conversations looking for exposed Notion API keys and revoked the ones it found. A record with no name on it can still hold something that works.

And the keys Notion could reach were its own. If a credential for an internal server or a payment processor went into that window, changing it falls to the person who pasted it.

What Notion disclosed is on the detailed side. The day it pulled the connection, how much it deleted, what state the records were in, what it told people to rotate: every one of those carries a date.

Between the first call on November 2 and the confirmed dataset on the 8th, though, sit six days in which there was nothing for Notion to do.

It is the contract I keep returning to.

Zero data retention was written into it. Notion also writes, on the same page where it explains the incident, that the commitment does not reach features which only function by storing what they process.

"Does the clause we signed about keeping no data reach the features we actually use?"

Pebblous states the quality of AI training data as a number, with DataClinic. What comes before any such reading is a list, feature by feature, of whose hardware the data has already passed through.

What an employee sees is the one window they type into. The names of the companies standing behind that window usually arrive after something has gone wrong.

▶ Read: https://blog.pebblous.ai/blog/notion-ai-fireworks-breach-transcripts/en/

#Pebblous #NotionAI #FireworksAI #ZeroDataRetention #DataQuality #DataClinic
