# SNS 홍보 글: 멈췄다 재개된 AI 에이전트가 다른 모델로 답을 완성한다

> 소스: blog/agent-semantic-isolation/ko/index.html
> 생성일: 2026-08-09
> URL: https://blog.pebblous.ai/blog/agent-semantic-isolation/ko/
> voice: sns-cover (LinkedIn/Twitter), reflective (Facebook)

---

## LinkedIn (KO)

승인 대기로 두 시간 멈춰 있던 에이전트가 다시 움직였을 때, 그사이 검색 인덱스는 다시 쌓였고 모델 별칭은 새 버전을 가리키고 있었습니다.

재개된 실행은 근거를 모을 때와 다른 전제 위에서 답을 마무리합니다. 그런데 호출은 하나도 실패하지 않습니다. 예외도 재시도도 없고, 관측 도구가 보여 주는 것은 정상 종료된 실행 하나뿐입니다. 코드에 적힌 이름은 그대로이고 그 이름이 오늘 가리키는 대상만 바뀌었기 때문입니다.

미시간대에서 데이터베이스 동시성 제어를 연구했던 바르잔 모자파리는 이 어긋남을 격리 문제로 정식화하고 네 개의 이름을 붙였습니다. semantic read skew, compatibility skew, context escape, merge skew. 트랜잭션이 동시에 일어나는 데이터 갱신을 제약하듯, 의미 계층에도 동시에 일어나는 리소스 배포를 제약하는 계약이 필요하다는 진단입니다.

이론에서 끝나지 않았습니다. 실행 가능한 LangGraph 코드를 담은 스타 상위 공개 저장소 100개를 감사한 결과, 상태를 이어 가는 워크플로우를 쓰는 코드베이스의 7.4%가 불변 바인딩 없이 리소스를 참조하고 있었습니다. 참고 구현으로 복사되는 저장소들이라 숫자보다 파급이 큽니다. 다만 프로토타입 SemIso가 보고한 마이크로초 단위 검사 비용은 다른 런타임에서 아직 검증되지 않았습니다.

네 가지 이상 현상은 모두 실행 시점의 리소스 식별자가 남아 있어야 판정됩니다. 데이터 버저닝과 계보 관리가 사후 감사용 문서에서 실행 중 판정의 입력으로 자리를 옮기는 중입니다.

▶ 전문: https://blog.pebblous.ai/blog/agent-semantic-isolation/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #AI에이전트 #데이터거버넌스 #LangGraph #SemanticIsolation #arXiv

---

## LinkedIn (EN)

An agent sat for two hours waiting on a human approval. By the time it resumed, the search index had been rebuilt and the model alias pointed at a new version.

The resumed run finished its answer on premises it had never gathered evidence under, and not one call failed. No exception, no retry, nothing in the observability stack but a clean completion. The names in the code held still. Only what those names pointed at had moved.

Barzan Mozafari, who spent years on database concurrency control at Michigan, formalizes the gap as an isolation problem and gives it four names: semantic read skew, compatibility skew, context escape, merge skew. Transactions constrain concurrent data updates; nothing yet constrains concurrent deployment of the prompts, models, and indexes a run depends on.

The paper does not stop at theory. A source audit of the 100 most-starred public repositories with runnable LangGraph code found that 7.4% of codebases using durable workflows reference live or runtime-selected resources with no immutable binding in sight. These are the repos other teams copy from. The prototype, SemIso, reports its checks in microseconds, though that figure has not been reproduced on other runtimes.

All four anomalies are detectable only if the resource identifiers from run time were recorded. Data versioning and lineage are moving from audit paperwork to a runtime input.

▶ Read: https://blog.pebblous.ai/blog/agent-semantic-isolation/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #AIAgent #DataGovernance #LangGraph #SemanticIsolation #DataLineage

---

## Twitter/X (KO)

승인을 기다리며 멈춰 있던 두 시간 사이 검색 인덱스가 다시 쌓였습니다. 재개된 에이전트는 다른 전제 위에서 답을 마무리하는데, 호출은 전부 성공하고 로그에는 정상 종료만 남습니다.

무엇을 근거로 판단했는지가 기록되지 않으면 어긋났다는 사실조차 물을 수 없습니다.

https://blog.pebblous.ai/blog/agent-semantic-isolation/ko/

#페블러스 #LangGraph #AI에이전트 #데이터계보

---

## Twitter/X (EN)

A run pauses for approval. The search index gets rebuilt. The run resumes on premises it never gathered evidence under, every call succeeds, and the log shows a clean completion.

If you never recorded what the run was standing on, you cannot even ask whether it drifted.

https://blog.pebblous.ai/blog/agent-semantic-isolation/en/

#Pebblous #LangGraph #AIAgent #DataLineage

---

## Facebook (KO)

승인 버튼 하나를 기다리느라 자동화가 두 시간 동안 그대로 멈춰 있는 일, 겪어 보신 분들이 계실 겁니다.

담당자가 결재를 누르고 작업이 다시 움직입니다. 그런데 그 두 시간 사이에 야간 배치가 검색 인덱스를 다시 쌓았고, 모델 별칭은 새 버전을 가리키게 됐습니다.

재개된 실행은 근거를 모을 때와는 다른 세계 위에서 답을 마무리합니다.

호출은 하나도 실패하지 않습니다. 예외도, 재시도도 없습니다. 로그에는 정상 종료만 남습니다.

저는 이런 종류의 실패를 '조용한 어긋남'이라고 부르게 됐습니다. 무엇 하나 고장 나지 않았는데 결과만 앞뒤가 맞지 않는 상태입니다.

바르잔 모자파리가 이달 arXiv에 발표한 논문은 여기에 네 개의 이름을 붙였습니다. 데이터베이스가 사십 년 전에 트랜잭션 격리로 풀어 둔 문제가, 프롬프트와 모델과 인덱스가 사는 의미 계층에서 되돌아왔다는 진단입니다. 공개 저장소 100개를 감사해 보니 상태를 이어 가는 워크플로우를 쓰는 코드베이스의 7.4%가 아무 방어 없이 리소스를 참조하고 있었습니다.

읽으면서 오래 붙들린 대목은 수치가 아니라 판정의 조건이었습니다. 네 가지 이상 현상은 모두 실행 시점의 리소스 식별자가 남아 있어야 검출됩니다. 기록이 없으면 어긋났는지조차 물을 수 없습니다.

"이 답은 어느 시점의 근거 위에서 나온 것인가?"

페블러스가 AI-Ready Data를 이야기할 때 품질과 함께 계보를 붙들어 온 이유도 여기에 가깝습니다. 어떤 데이터가 어떤 판단에 쓰였는지를 남기는 일은 오랫동안 사람이 나중에 확인하려고 두는 기록이었습니다. 이제는 실행 도중에 그 기록을 읽고 다음 단계를 멈출지 판단하는 쪽이 생겼습니다.

있으면 좋은 문서에서, 없으면 아무것도 물을 수 없는 배관으로. 자리가 옮겨 가는 중인 것 같습니다.

https://blog.pebblous.ai/blog/agent-semantic-isolation/ko/

#페블러스 #데이터품질 #데이터계보 #LangGraph #SemanticIsolation #DataClinic

---

## Facebook (EN)

If you have ever watched an automated job sit untouched for two hours because someone had to click approve, this will feel familiar.

The approval finally lands and the job moves again. In those two hours, though, a nightly batch rebuilt the search index and the model alias came to point at a new version.

The resumed run finishes its answer in a different world from the one its evidence came from.

Not one call fails. No exception, no retry. The log shows a clean completion.

I have started calling this kind of failure a quiet mismatch. Nothing broke, and the answer still does not agree with itself.

The paper Barzan Mozafari posted to arXiv this month gives the gap four names. His diagnosis is that a problem databases settled forty years ago with transaction isolation has come back one layer up, where prompts and models and indexes live. An audit of 100 public repositories found that 7.4% of codebases running durable workflows reach for their resources with nothing holding them still.

What stayed with me was not the number but the condition for detection. All four anomalies can be caught only if the resource identifiers from run time were written down somewhere. Without that record, you cannot even ask whether anything drifted.

"Which version of the evidence is this answer standing on?"

That is close to why Pebblous has held on to lineage alongside quality in every conversation about AI-Ready data. Recording which data informed which decision was, for a long time, something a person would read much later. Now something reads it mid-run and decides whether the next step should proceed.

From paperwork worth having to plumbing without which no question can be asked. The ground seems to be shifting that way.

https://blog.pebblous.ai/blog/agent-semantic-isolation/en/

#Pebblous #DataQuality #DataLineage #LangGraph #SemanticIsolation #DataClinic
