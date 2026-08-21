# SNS 홍보 글: 심어 둔 결함 여섯 개가 하나도 못 들어온 지식그래프 저장소

> 소스: blog/agent-written-knowledge-graph-gate/ko/index.html
> 생성일: 2026-08-21
> URL: https://blog.pebblous.ai/blog/agent-written-knowledge-graph-gate/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

같은 스크립트를 두 번 돌렸습니다. 게이트를 켠 저장소의 최종 그래프에는 일부러 심어 둔 결함 여섯 개 중 하나도 남지 않았고, 게이트만 끈 대조군에는 여섯 개가 그대로 남았습니다.

8월 17일 arXiv에 올라온 Quipu 논문의 실험입니다. 에이전트가 쓰는 지식그래프 저장소를 겨냥한 설계인데, 갈림길은 게이트가 무엇을 보느냐에 있습니다. 요청도 쓰기 직전 상태도 아니라 쓰기가 반영된 다음의 상태를 판정합니다. 한 엔티티가 두 개의 배치를 동시에 가질 수 없다는 제약은 후보 사실을 일단 올려 둔 뒤에야 확인되기 때문입니다. 거부된 쓰기는 롤백되지만 거부했다는 판정은 서명된 사실로 남고, 감사는 로그를 발굴하는 일이 아니라 저장소 안의 질의가 됩니다.

신뢰 라벨은 격자로 합성됩니다. 지켜야 할 불변식은 하나, 합성은 절대 넓어지지 않는다는 것입니다. 검증을 마친 그래프와 격리해 둔 그래프를 조인하면 결과는 격리됨 쪽으로 접히고, 라벨을 선언하지 않은 구성원이 섞이면 커버리지가 부분으로 내려가 강제 기준에서 실패합니다. 논문은 이 반대편 현상을 신뢰 세탁이라고 부릅니다.

비용과 경계도 분명합니다. 정책 게이트를 거치는 쓰기는 중앙값 2.7밀리초로 거치지 않는 쓰기의 약 두 배였고, 결과는 시드를 하나로 고정한 단일 실행에서 나왔습니다. 클로드 모델로 돌린 에이전트 실험에서 유일하게 통과한 거짓 기록은 게이트가 약해서가 아니라 그 상황을 규정한 정책이 아예 없어서 통과했습니다.

게이트는 규칙이 이름 붙인 만큼만 좋고, 잔여 위험은 규칙이 침묵한 자리에 정확히 모입니다. 페블러스가 데이터 품질을 진단하며 반복해 만나는 장면도 값이 틀린 경우보다 출처가 적히지 않은 채 합쳐져 되짚을 수 없게 된 경우입니다.

▶ 전문: https://blog.pebblous.ai/blog/agent-written-knowledge-graph-gate/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #데이터거버넌스 #지식그래프 #AI에이전트 #Quipu #DEMMBench

---

## LinkedIn (EN)

The same script was run twice. The gated store's final graph held none of the six defects planted in it on purpose, and the control arm, the same script with its gates switched off, held all six.

That is the experiment in the Quipu paper posted to arXiv on August 17. The design targets knowledge graph stores that agents write into, and the decisive choice is what the gate looks at. Not the request, and not the state just before the write, but the state after the write has landed. A constraint such as one entity cannot hold two placements at once only becomes visible once the candidate fact is already staged. Refused writes are rolled back, yet the verdict that refused them persists as a signed fact, which turns audit from log excavation into a query inside the store.

Trust labels are composed through a lattice under a single invariant: composition never widens. Join a verified graph with a quarantined one and the result folds down to quarantined. Let a member that never declared a label into the mix and coverage drops to partial, which fails an enforcement bar on its own. The paper calls the failure mode this prevents trust laundering.

The cost and the limits are stated plainly. A write through the policy gate takes a median 2.7 ms against roughly half that ungated, and the figures come from a single run on one fixed seed. In the agent trials on Claude models, the one false record that got through did so not because the gate was weak but because no policy defined the situation at all.

A gate is only as good as what the rules can name, and residual risk collects precisely where they stay silent. The pattern is familiar from data quality work at Pebblous, where the recurring problem is less a wrong value than a value merged into another table with no provenance left to trace.

▶ Read: https://blog.pebblous.ai/blog/agent-written-knowledge-graph-gate/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DataGovernance #KnowledgeGraph #AIAgents #Quipu #DEMMBench

---

## Twitter/X (KO)

결함 여섯 개를 일부러 심고 같은 스크립트를 두 번 돌렸습니다. 게이트를 켠 저장소에는 하나도 남지 않았고, 게이트만 끈 대조군에는 전부 남았습니다.

거부된 쓰기는 롤백되지만 거부했다는 판정은 서명된 사실로 남습니다. 감사가 로그 발굴이 아니라 질의가 되는 지점입니다.

https://blog.pebblous.ai/blog/agent-written-knowledge-graph-gate/ko/

#페블러스 #데이터품질 #지식그래프 #Quipu

---

## Twitter/X (EN)

Six defects were planted on purpose and the same script was run twice. The gated store kept every one of them out. The control arm with its gates off took all of them in.

A refused write is rolled back, but the verdict that refused it stays as a signed fact. That is where audit stops being log excavation and becomes a query.

https://blog.pebblous.ai/blog/agent-written-knowledge-graph-gate/en/

#Pebblous #DataQuality #KnowledgeGraph #Quipu

---

## Facebook (KO)

"이 값은 어디서 온 겁니까."

페블러스에서 데이터 품질을 들여다보는 자리에서 가장 자주 나오는 질문이고, 가장 자주 답이 없는 질문입니다.

값이 틀린 경우보다, 어디서 왔는지 적히지 않은 채 다른 테이블과 합쳐져 되짚을 수 없게 된 경우가 훨씬 자주 문제가 됩니다.

지금까지는 담당자의 기억이 그 공백을 메웠습니다. 쓰는 쪽이 에이전트로 바뀌면 메울 사람이 없습니다.

지난주 arXiv에 올라온 Quipu 논문이 그 자리를 정면으로 다룹니다. 정상 쓰기 100건 사이에 결함 여섯 개를 일부러 심어 두고 같은 스크립트를 두 번 돌렸습니다. 게이트를 켠 저장소의 최종 그래프에는 여섯 개 중 하나도 남지 않았고, 게이트만 끈 대조군에는 여섯 개가 그대로 남았습니다.

그런데 더 오래 남은 것은 이 대비가 아니었습니다.

거부된 쓰기는 롤백되어 저장소에 남지 않습니다. 그런데 거부했다는 판정은 서명되고 시각이 찍힌 사실로 남습니다. 감사자가 가장 보고 싶어 하는 기록이 하필 사라진 쪽에 있다는 이유에서입니다.

또 하나는 신뢰 라벨입니다. 검증을 마친 그래프와 출처가 불분명해 격리해 둔 그래프를 합치면, 결과물은 대개 검증된 쪽의 지위를 조용히 물려받습니다. 논문은 이것을 '신뢰 세탁'이라고 부르고, 합성이 절대 넓어지지 못하도록 격자로 막습니다.

"우리 파이프라인에서, 출처가 다른 데이터를 합친 결과물에는 어떤 등급이 남습니까?"

한계도 저자가 먼저 적어 두었습니다. 에이전트 실험에서 유일하게 통과한 거짓 기록은 게이트가 약해서가 아니라, 그 상황을 규정한 정책이 아예 없어서 통과했습니다. 잔여 위험은 규칙이 침묵한 자리에 정확히 모입니다.

품질을 나중에 청소할 문제로 두면 청소할 사람이 필요합니다. 에이전트가 쓰기 시작한 저장소에는 그 사람이 없습니다.

https://blog.pebblous.ai/blog/agent-written-knowledge-graph-gate/ko/

#페블러스 #DataClinic #데이터품질 #지식그래프 #데이터거버넌스 #Quipu

---

## Facebook (EN)

"Where did this value come from?"

It is the question that comes up most often in data quality work at Pebblous, and the one that most often has no answer.

The recurring problem is rarely a wrong value. It is a value with no provenance written down, merged into another table until there is nothing left to trace.

Someone's memory used to fill that gap. Once the writer is an agent, there is nobody left to fill it.

A paper posted to arXiv last week, called Quipu, walks straight into that gap. Six defects were planted on purpose among 100 clean writes, and the same script was run twice. The gated store's final graph held none of the six. The control arm, identical except that its gates were off, held all six.

What stayed with me was not that contrast.

A refused write is rolled back and leaves no trace in the store. The verdict that refused it, though, is kept as a signed and timestamped fact. The reasoning is that the record an auditor most wants to see is exactly the one on the side that disappeared.

Then there are the trust labels. Join a graph you have verified with one you quarantined because its provenance was unclear, and the result usually inherits the verified standing without anyone deciding that it should. The paper names this trust laundering, and it blocks the move with a lattice in which composition can never widen.

"In our own pipelines, what grade survives on a table built from sources of different provenance?"

The author marks the limits first. In the agent trials, the one false record that got through did not get through because the gate was weak. It got through because no policy described that situation at all. Residual risk collects precisely where the rules stay silent.

Treat quality as something to clean up later and you need someone to do the cleaning. In a store that agents have started writing to, that person is not there.

https://blog.pebblous.ai/blog/agent-written-knowledge-graph-gate/en/

#Pebblous #DataClinic #DataQuality #KnowledgeGraph #DataGovernance #Quipu
