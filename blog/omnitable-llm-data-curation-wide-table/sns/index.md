# SNS 홍보 글: 앤트그룹이 LLM 데이터 큐레이션 한 바퀴를 14일에서 2.5일로 줄였다

> 소스: blog/omnitable-llm-data-curation-wide-table/ko/index.html
> 생성일: 2026-09-12
> URL: https://blog.pebblous.ai/blog/omnitable-llm-data-curation-wide-table/ko/
> voice: LinkedIn·Twitter → sns-cover / Facebook → reflective

---

## LinkedIn (KO)

피처 하나를 붙이려고 엔지니어가 작업 캔버스에 테이블 106장을 끌어다 놓아야 했다.

앤트그룹이 9월 10일 arXiv에 공개한 논문이 사내에서 실제로 있었던 일로 든 장면이다. 수십 개 출처에서 온 코퍼스가 수백 장의 물리 테이블에 흩어져 있었고, UDF 로직은 코드베이스 곳곳에 흩어져 중앙 버전 관리가 없었다. 같은 피처의 정의가 자리마다 어긋났다.

앤트그룹은 이 상태를 도메인마다 논리 테이블 한 장으로 갈아치웠다. 사용자에게는 표 한 장의 컬럼으로 보이고, 저장은 그 아래 열여섯 장으로 쪼개져 압축과 분할로 계속 재배치된다. 피처를 1급 메타데이터로 올린 것이 설계의 축이다. 계산이 끝나면 시스템이 피처 ID와 버전과 실행 엔진을 계보로 적고, 그 계보 자체가 조회 가능한 테이블로 남는다.

사람이 끼어드는 큐레이션 한 바퀴가 약 14일에서 약 2.5일로 줄었다. 지도 미세조정 데이터를 준비하는 시나리오 하나를 종단간으로 비교한 값이고, 코퍼스 전체를 2.5일에 처리한다는 뜻이 아니다. 줄어든 몫의 대부분은 피처를 되채우는 단계에서 나왔다.

같이 읽어야 할 선이 있다. 저자 19명이 전원 앤트그룹 소속이고, 비교 대상인 기존 방식도 외부 시스템이 아니라 사내 이력 기록과 운영 로그로 재구성한 자체 기준선이다. VLDB 산업 트랙 최우수 논문으로 뽑혔다는 사실이 그 구조를 바꾸지는 않는다.

데이터 준비도를 말할 때 먼저 나오는 숫자는 대개 용량이다. 몇 테라바이트를 모았는지는 세기 쉽고, 한 번 판단하고 다시 돌리기까지 며칠이 걸리는지는 대개 아무도 재지 않는다. 페블러스가 데이터 품질을 진단할 때 오래 걸리는 자리도 값을 모으는 쪽이 아니라, 그 값이 어떤 손을 거쳐 지금 모양이 됐는지를 기록으로 남기는 쪽이었다.

▶ 전문: https://blog.pebblous.ai/blog/omnitable-llm-data-curation-wide-table/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #데이터계보 #LLM #학습데이터 #데이터파이프라인 #앤트그룹 #OmniTable #VLDB #arXiv

---

## LinkedIn (EN)

To add a single feature, an engineer at Ant Group had to drag 106 tables onto a task canvas.

The scene comes from a paper the company posted to arXiv on September 10, quoted in its introduction as something that happened in house. Corpora from dozens of sources sat scattered across hundreds of physical tables, UDF logic lived wherever it had been written with no central versioning, and the same feature meant different things in different places.

Ant Group replaced that with one logical table per domain. Users see columns on a single table, while storage underneath stays split across sixteen physical tables that compaction and partitioning keep rearranging. Promoting features to first-class metadata is the axis of the design: when a computation finishes, the system writes the feature ID, version and execution engine into lineage, and that lineage is itself a queryable table.

The human-in-the-loop curation cycle fell from about 14 days to about 2.5. That compares one supervised fine-tuning scenario end to end, and it is not a claim that the whole corpus gets processed in 2.5 days. Most of the saving came out of the stage that backfills features.

The limits belong in the same breath. All 19 authors work at Ant Group, and the legacy workflow on the other side of the comparison is not an outside system but a baseline reconstructed from the company's own task records and operation logs. Being named VLDB's best industry paper does not change that structure.

Data readiness still gets reported in volume. Terabytes collected are easy to count, while the days between a person making one judgment and being able to run it again mostly go unmeasured. In data quality work at Pebblous, the slow part has never been collecting the values. It is keeping a record of how they came to look the way they do.

▶ Read: https://blog.pebblous.ai/blog/omnitable-llm-data-curation-wide-table/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #DataLineage #LLM #TrainingData #DataPipeline #AntGroup #OmniTable #VLDB #arXiv

---

## Twitter/X (KO)

학습 데이터가 수백 장의 물리 테이블에 흩어져 있으면, 어떤 필터가 어떤 코퍼스를 얼마나 깎았는지 되짚을 기록이 어디에도 남지 않는다.

앤트그룹은 도메인마다 논리 테이블 한 장을 세우고 계보를 자동으로 적게 했다. 사람이 끼어드는 큐레이션 한 바퀴가 약 14일에서 약 2.5일이 됐다. 지도 미세조정 시나리오 하나의 종단간 비교다.

https://blog.pebblous.ai/blog/omnitable-llm-data-curation-wide-table/ko/

#페블러스 #데이터품질 #데이터계보 #앤트그룹

---

## Twitter/X (EN)

When training data sits scattered across hundreds of physical tables, nothing records which filter trimmed which corpus by how much.

Ant Group built one logical table per domain and made the system write lineage on its own. The human-in-the-loop curation cycle went from about 14 days to about 2.5, measured end to end on one supervised fine-tuning scenario.

https://blog.pebblous.ai/blog/omnitable-llm-data-curation-wide-table/en/

#Pebblous #DataQuality #DataLineage #AntGroup

---

## Facebook (KO)

모델 품질이 지난번보다 나빠졌을 때, 회의실에서 가장 먼저 나오는 질문은 대개 같습니다.

"지난번이랑 뭐가 달라졌죠?"

그런데 그 질문에 정확히 답할 수 있는 팀은 생각보다 적습니다. 어떤 필터를 언제 바꿨고, 그 필터가 어느 코퍼스를 얼마나 깎았는지가 어디에도 적혀 있지 않기 때문입니다.

그러면 남는 선택지는 둘뿐입니다. 전부 다시 돌리거나, 그냥 넘어가거나.

저는 이 상태를 '되짚을 수 없는 큐레이션'이라고 불러 보고 싶습니다. 데이터가 없는 것도 아니고 사람이 없는 것도 아닌데, 판단의 근거만 사라진 자리입니다.

앤트그룹이 9월 10일 arXiv에 공개한 논문은 자사 프로덕션이 바로 그 자리에 있었다고 적었습니다. 출처가 하나 붙으면 테이블이 몇 장 생기고, 피처를 하나 더 계산하면 그 테이블마다 작업이 붙습니다. 피처 하나 때문에 엔지니어가 작업 캔버스에 테이블 106장을 끌어다 놓은 일이 실제로 있었다고 합니다.

이 논문이 판 것은 저장 구조처럼 보이지만, 실제로는 다른 쪽이었다고 저는 읽었습니다.

사람이 한 번 판단하고 다시 돌리기까지 걸리는 시간입니다.

그 시간이 약 14일에서 약 2.5일이 됐습니다. 지도 미세조정 데이터를 준비하는 시나리오 하나를 처음부터 끝까지 비교한 값입니다.

14일이면 필터 기준을 바꿔 보자는 제안이 2주짜리 결정이 됩니다. 2.5일이면 같은 제안이 실험이 됩니다. 바꿔 보고 아니면 되돌리는 선택지가 생기는 지점이 그 사이 어딘가에 있습니다.

공짜로 얻은 속도는 아니었습니다. 레코드 단위로 장애를 가두는 데 실행 비용이 더 들고, 자주 읽는 컬럼을 미리 만들어 두는 데 저장 공간이 더 듭니다. 되짚을 수 있는 상태를 유지하는 값이 그 정도라는 뜻이고, 논문이 그 값을 숨기지 않은 점은 믿을 만합니다.

다만 저자 19명이 전원 앤트그룹 소속이고, 비교 대상인 기존 방식도 사내 기록으로 재구성한 자체 기준선이라는 점은 같이 읽어야 합니다.

"우리 팀의 큐레이션 한 바퀴는 며칠입니까?"

페블러스가 데이터 품질을 진단하면서 자주 멈추는 자리도 여기였습니다. 데이터가 몇 테라바이트인지는 대개 바로 답이 나옵니다. 그 데이터가 어떤 손을 거쳐 지금 모양이 됐는지는 답이 잘 나오지 않습니다.

용량은 세기 쉽고, 시간은 재 본 적이 없었습니다. 어느 쪽이 우리 데이터의 상태를 더 정확히 말해 주는지, 저도 아직 답을 정하지 못했습니다.

▸ https://blog.pebblous.ai/blog/omnitable-llm-data-curation-wide-table/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터계보 #앤트그룹 #OmniTable

---

## Facebook (EN)

When model quality comes back worse than last time, the first question in the room is almost always the same.

"What changed since the last run?"

Fewer teams can answer it precisely than you would expect. Which filter was changed, when, and how much of which corpus it trimmed is written down nowhere.

So two options remain. Rerun everything, or let it go.

I have started calling this state curation you cannot retrace. The data is there, the people are there, and only the grounds for the judgment have gone missing.

A paper Ant Group posted to arXiv on September 10 says its own production sat in exactly that state. A source arrives and a few tables appear with it; one more feature gets computed and a task attaches to every one of those tables. For a single feature, an engineer once had to drag 106 tables onto a task canvas.

What the paper dug into looks like storage architecture, but I read it as something else.

The time between a person making one judgment and being able to run it again.

That time went from about 14 days to about 2.5, measured from beginning to end on one scenario for preparing supervised fine-tuning data.

At 14 days, a proposal to change a filter threshold becomes a two-week decision. At 2.5 days, the same proposal becomes an experiment. Somewhere between the two sits the point where trying it and rolling it back turns into an option you actually have.

The speed was not free. Isolating failures at the record level costs more in execution, and materializing frequently read columns in advance costs more in storage. That is roughly the price of staying in a state you can retrace, and the paper printing that price counts in its favor.

It is worth reading alongside the fact that all 19 authors work at Ant Group, and that the legacy workflow on the other side of the comparison is a baseline the team reconstructed from its own records.

"How many days does one curation cycle take on our team?"

This is where data quality work at Pebblous tends to slow down too. How many terabytes we hold is usually answered on the spot. How that data came to look the way it does usually is not.

Volume is easy to count, and the time had never been measured at all. Which of the two says more about the state of our data, I have not settled either.

▸ https://blog.pebblous.ai/blog/omnitable-llm-data-curation-wide-table/en/

#Pebblous #DataClinic #DataQuality #DataLineage #AntGroup #OmniTable
