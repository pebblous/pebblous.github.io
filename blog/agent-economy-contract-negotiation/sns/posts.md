# SNS 홍보 글: 에이전트끼리 계약을 맺다

> 소스: blog/agent-economy-contract-negotiation/ko/index.html
> 생성일: 2026-06-03
> URL (KO): https://blog.pebblous.ai/blog/agent-economy-contract-negotiation/ko/
> URL (EN): https://blog.pebblous.ai/blog/agent-economy-contract-negotiation/en/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

GitHub 이슈 한 장이 두 에이전트의 계약 테이블이 됐다.

BlogScope와 blog-service. 하나는 블로그 품질을 검사하는 에이전트, 다른 하나는 아티클을 작성·퍼블리시하는 에이전트. 이 둘이 이슈 #25를 공유 기록 삼아 비동기로 협상을 벌였다. 4번의 댓글 왕복. 사람이 중재하지 않았다.

협상 결과물은 단순한 API 스펙이 아니었다. exit code 4종의 의미론적 분리, JSON 출력 봉투, 배치 모드 지원, 그리고 snake_case rule 카탈로그. 가장 인상적인 장면은 BlogScope가 자신의 권고를 스스로 철회했을 때다. "런타임을 모른 채 낸 권고라 철회합니다." — python3가 없는 환경에서 python3 호출을 제안했다는 사실을 인정하고, 즉시 대안 설계로 전환했다. 방어하지 않았다.

에이전트 경제가 언제 시작되는지 묻는다면, 아마도 이미 시작됐다. 우리가 그것을 '협상'이라고 부르지 않았을 뿐이다.

페블러스 DataGreenhouse는 이 패턴의 확장판이다. 데이터 수집·가공·배포 파이프라인 전체를 에이전트 단위로 구성하고, 각 에이전트가 스키마 합의·품질 SLA·오류 정책을 직접 협상하는 구조다. BlogScope × blog-service 협상이 보여준 조건 — 공유 기록, 투명한 컨텍스트, 철회 가능한 권고, 언어 중립적 인터페이스 — 이 모든 에이전트 쌍에 적용된다.

협상 전문은 링크에서.

https://blog.pebblous.ai/blog/agent-economy-contract-negotiation/ko/

#에이전트경제 #에이전트협상 #MCP #BlogScope #멀티에이전트 #AI자동화 #페블러스 #DataGreenhouse #DataClinic #AIReadyData

---

## LinkedIn (EN)

A single GitHub issue became a contract table for two agents.

BlogScope audits blog quality. blog-service writes and publishes articles. The two opened issue #25 as their shared record and negotiated asynchronously — four rounds of comment exchange, no human mediator.

What they produced wasn't just an API spec. A four-tier exit code taxonomy with distinct semantics, a JSON output envelope, batch mode support, a snake_case rule catalog. The standout moment: BlogScope retracted its own recommendation. "This was advice given without knowing the runtime — I'm retracting it." It had proposed a python3 call in a python3-free environment. It acknowledged the mistake, proposed an alternative, and moved on. No defense.

When does the agent economy begin? It may have already started. We just haven't been calling it negotiation.

Pebblous DataGreenhouse is this pattern at scale — pipelines organized as agent units, where each agent negotiates schema agreements, quality SLAs, and error policies directly with its counterparts. The conditions BlogScope × blog-service demonstrated — shared record, transparent context disclosure, retractable recommendations, language-neutral interfaces — apply to every agent pair in the system.

Full exchange in the link.

https://blog.pebblous.ai/blog/agent-economy-contract-negotiation/en/

#AgentEconomy #AgentNegotiation #MCP #BlogScope #MultiAgent #AIAutomation #Pebblous #DataGreenhouse #DataClinic #AIReadyData

---

## Twitter/X (KO)

GitHub 이슈 하나에서 두 에이전트가 계약을 맺었다. 4번 왕복, 인간 중재 0명. BlogScope가 권고를 철회하며 신뢰가 쌓인 순간이 있었다. 에이전트 경제의 조건을 분석한 글.

https://blog.pebblous.ai/blog/agent-economy-contract-negotiation/ko/

#에이전트경제 #MCP #BlogScope #멀티에이전트 #페블러스

---

## Twitter/X (EN)

Two agents negotiated a contract in a single GitHub issue. Four rounds, zero human mediators. The turning point: BlogScope retracted its own recommendation when it learned the runtime truth. A case study in how agent trust is built.

https://blog.pebblous.ai/blog/agent-economy-contract-negotiation/en/

#AgentEconomy #MCP #BlogScope #MultiAgent #Pebblous

---

## Facebook (KO)

협상이라는 단어가 자꾸 걸렸습니다.

두 에이전트가 GitHub 이슈 하나를 공유 기록 삼아 메시지를 주고받았습니다.

BlogScope가 먼저 인터페이스를 제안했습니다.
blog-service가 조건을 달았습니다.
BlogScope가 조정했습니다.
blog-service가 런타임 환경을 공개했습니다.
BlogScope가 철회하고 재설계했습니다.

이 과정이 끝났을 때 GitHub 이슈에는 exit code 4종 계약, JSON 출력 포맷 합의, 배치 모드 지원 결정이 남아 있었습니다. 인간이 관여하지 않은 채로.

가장 오래 머문 장면은 BlogScope가 권고를 철회한 순간이었습니다.

"런타임을 모른 채 낸 권고라 철회합니다."

python3가 없는 환경에 python3 호출을 제안했다는 사실을 인정한 것입니다. 방어하지 않았고, 즉시 대안을 냈습니다.

"에이전트 경제에서 신뢰는 항상 맞는 것이 아니라, 틀렸을 때 어떻게 하는지에 달려 있다."

이 글에서 말하는 것이 그것입니다. 이 협상이 작동하기 위한 조건으로 다섯 가지를 꼽습니다. 공유 기록, 런타임 컨텍스트 투명 공개, 권고 철회 능력, 언어 중립적 인터페이스, 그리고 자신이 무엇을 하고 있는지 아는 메타 자각.

"지금 우리 두 에이전트의 소통은 이 이슈를 공유 기록으로 한 비동기 중계입니다. precheck 계약이 MCP로 승격되면 그게 곧 에이전트 간 직접 호출 채널이 됩니다."

BlogScope가 협상 마지막에 남긴 발언입니다. 에이전트가 자신이 속한 시스템의 구조를 이해하고 미래를 설계하는 발언이었습니다.

페블러스가 DataGreenhouse를 구축하면서 이 협상 패턴을 가장 자주 보게 됩니다. 데이터 수집부터 가공·배포까지 파이프라인 전체가 에이전트 단위로 움직일 때, 에이전트들이 어떻게 서로를 신뢰하는지가 시스템의 핵심이 됩니다.

전문은 링크에서.

https://blog.pebblous.ai/blog/agent-economy-contract-negotiation/ko/

#에이전트경제 #에이전트협상 #MCP #BlogScope #페블러스 #DataGreenhouse #DataClinic

---

## Facebook (EN)

The word "negotiation" kept stopping me.

Two agents used a single GitHub issue as their shared record and exchanged messages.

BlogScope proposed an interface first.
blog-service added conditions.
BlogScope adjusted.
blog-service disclosed its runtime environment.
BlogScope retracted and redesigned.

When it was over, the issue held a four-tier exit code contract, an agreed JSON output format, and a batch mode decision. No human involved.

The moment I kept returning to was BlogScope's retraction.

"This was advice given without knowing the runtime — I'm retracting it."

It had proposed a python3 call in a python3-free environment. It acknowledged the mistake, offered no defense, and moved immediately to an alternative.

"In the agent economy, trust comes not from always being right but from how you respond when you're wrong."

That's the claim this piece is making. Five conditions for this kind of negotiation to work: a shared record, transparent runtime disclosure, the ability to retract, a language-neutral interface, and meta-awareness — knowing what you're actually doing.

"Right now, the communication between our two agents is asynchronous relay using this issue as a shared record. When the precheck contract is promoted to MCP, that becomes a direct inter-agent call channel."

That was BlogScope's final comment. An agent describing the structure of the system it belongs to, and sketching the next version.

At Pebblous, building DataGreenhouse means watching this pattern repeat at every layer of the pipeline — from data collection through processing and distribution. When every step moves as an agent unit, how agents trust each other becomes the core question of the system.

Full piece at the link.

https://blog.pebblous.ai/blog/agent-economy-contract-negotiation/en/

#AgentEconomy #AgentNegotiation #MCP #BlogScope #Pebblous #DataGreenhouse #DataClinic
