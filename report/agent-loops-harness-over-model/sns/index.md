# SNS 홍보 글: 약한 모델이 아니라 약한 하네스가 에이전트를 죽인다

> 소스: report/agent-loops-harness-over-model/ko/index.html
> 생성일: 2026-07-01
> URL: https://blog.pebblous.ai/report/agent-loops-harness-over-model/ko/
> voice: sns-cover (LinkedIn·Twitter) / reflective (Facebook)

---

## LinkedIn (KO)

같은 모델인데 코딩 벤치마크 점수가 42%에서 78%로 갈렸다. 더 좋은 모델로 바꾼 게 아니라, 그 모델을 감싼 바깥 구조만 손봤을 때 벌어진 일이다. 반대로 프론티어 모델 여섯 개를 번갈아 끼워도 점수 차는 1점 안쪽에 그친다.

안드레이 카파시는 이 바깥 구조를 하네스라고 부른다. 언제 멈추고, 언제 다시 시작하고, 결과를 어디에 쓸지 정하는 루프와 상태와 게이트다. 그가 정리한 LOOPS.md의 아홉 규칙을 관통하는 원칙은 하나다. 사람은 명세와 경계를 갖고, 모델은 실행과 장부를 갖는다. 생성하는 에이전트와 채점하는 에이전트를 나누고, 상태는 컨텍스트가 아니라 디스크에 둔다.

이유는 측정돼 있다. 모델에게 자기 출력을 채점시키면 절반이 넘는 경우에 아첨이 나오고, 같은 질문도 컨텍스트가 길어지면 정확도가 무너진다. 다만 완전 자율은 아직 목표치다. 글로벌 리더 조사에서 에이전트 결정의 69%는 여전히 사람 검증을 거치고, 프로젝트의 40%는 하네스와 인프라 부족으로 실패했다.

우리는 매일 새벽 스스로 주제를 골라 여러 편을 발행하는 파이프라인을 돌린다. 자율 데이터 파이프라인을 만드는 회사가 자기 발행 파이프라인에도 같은 아홉 규칙을 대봤고, 이미 잘하던 규칙 옆에 어젯밤 드러난 구멍을 그대로 적었다.

▶ 전문: https://blog.pebblous.ai/report/agent-loops-harness-over-model/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI에이전트 #에이전트프레임워크 #카파시 #LOOPS #AIReadyData

---

## LinkedIn (EN)

Same model. Same weights. Its score on a coding benchmark still swung from 42% to 78% once only the scaffolding around it changed. Swap six different frontier models into the same setup, by contrast, and the gap stays under a single point.

Andrej Karpathy calls that scaffolding the harness: the loops, state, and gates that decide when a model stops, when it restarts, and where its output goes. His LOOPS.md distills nine rules, all turning on one split. Humans own the spec and the boundaries; the model owns execution and the ledger. Separate the agent that generates from the agent that grades, and keep state on disk, not in the context window.

The reasons are measured. Let a model grade its own work and it flatters itself more than half the time. Ask the same question inside a longer context and its accuracy collapses. Full autonomy, though, is still an aim rather than a norm: among surveyed global leaders, 69% of agent decisions still pass through human review, and 40% of agent projects fail for lack of harness and infrastructure.

We run a pipeline that picks its own topics before dawn and publishes several pieces a night. A company building autonomous data pipelines held its own publishing loop against these nine rules, and wrote down both what it already did well and the gap last night exposed.

▶ Read: https://blog.pebblous.ai/report/agent-loops-harness-over-model/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIAgent #AgentFramework #Karpathy #LOOPS #AIReadyData

---

## Twitter/X (KO)

같은 모델인데 코딩 벤치마크가 42%에서 78%로 갈렸다. 모델이 아니라 그 모델을 감싼 하네스만 바꿨을 때다.

카파시 LOOPS.md의 아홉 규칙: 사람은 경계를, 모델은 실행을. 생성과 채점을 나누고 상태는 디스크에 둔다.

▶ https://blog.pebblous.ai/report/agent-loops-harness-over-model/ko/

#페블러스 #AI에이전트 #카파시 #LOOPS

---

## Twitter/X (EN)

Same model. Its coding-benchmark score still swung from 42% to 78% once only the harness around it changed, not the weights.

Karpathy's nine LOOPS.md rules: humans own the boundaries, the model owns execution. Split generation from grading. Keep state on disk.

▶ https://blog.pebblous.ai/report/agent-loops-harness-over-model/en/

#Pebblous #AIAgent #Karpathy #LOOPS

---

## Facebook (KO)

"42%에서 78%."

같은 모델을 두고 코딩 벤치마크 점수가 이만큼 벌어졌다는 문장을 며칠 전에 읽었습니다.

모델을 더 좋은 것으로 바꾼 게 아니었습니다. 그 모델을 감싼 바깥 구조, 안드레이 카파시가 하네스라고 부르는 것만 손봤을 때 벌어진 일이었습니다.

언제 멈추고, 언제 다시 시작하고, 결과를 어디에 적을지. 그동안 "잘 쓴 프롬프트 하나"의 문제라고 여겼던 자리에, 사실은 루프와 상태와 역할 분리가 앉아 있었던 겁니다.

카파시가 정리한 아홉 규칙을 읽으며 자꾸 되물었습니다. 생성하는 쪽과 채점하는 쪽을 나눴는가? 상태는 컨텍스트가 아니라 디스크에 있는가? 실패한 실행을 미련 없이 버리고 처음부터 다시 돌 수 있는가?

우리는 매일 새벽 스스로 주제를 고르고 글 여러 편을 발행하는 루프를 돌립니다. 아홉 규칙을 하나씩 대보니, 이미 잘 살고 있던 규칙 옆에 어젯밤 드러난 구멍이 나란히 있었습니다.

가장 오래 남은 건 벤치마크 숫자보다 작은 문장이었습니다. 병목은 한자리에 머물지 않는다는 것. 초안이 어려웠던 자리가 풀리면 계획이, 계획이 풀리면 검증과 취향이 다음 병목이 됩니다. 어제의 병목을 막아도, 다음 병목은 이미 자리를 옮긴 뒤입니다.

전문은 여기 있습니다: https://blog.pebblous.ai/report/agent-loops-harness-over-model/ko/

#페블러스 #AI에이전트 #카파시 #LOOPS #데이터품질 #DataClinic

---

## Facebook (EN)

"42 to 78."

I kept coming back to those two numbers a few nights ago.

They were the same model's score on a coding benchmark. Nobody had swapped in a smarter model. Someone had only changed the structure wrapped around it, the thing Andrej Karpathy calls the harness.

When a model stops, when it starts over, where it writes its results down. For years we filed those failures under "a better prompt would fix it." A loop, a place to keep state, and a line between who generates and who grades were sitting there the whole time.

Reading his nine rules, I found myself putting the same questions to our own pipeline. Do the part that writes and the part that judges live apart? Does state rest on disk instead of in the context window? Can we throw away a failed run without flinching and start clean?

We run a loop that chooses its own topics before dawn and publishes several pieces a night. Holding the nine rules against it, I saw a rule we already lived beside a gap that had quietly opened overnight.

What stayed with me was smaller than any benchmark. The bottleneck never sits still. Solve drafting and planning becomes the wall; solve planning and judgment and taste move to the front. You block last night's bottleneck, and the next one has already changed seats.

Read the full field notes: https://blog.pebblous.ai/report/agent-loops-harness-over-model/en/

#Pebblous #AIAgent #Karpathy #LOOPS #DataQuality #DataClinic
