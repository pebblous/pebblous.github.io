# SNS 홍보 글: 한 시간을 넘기면 무너지는 AI 에이전트의 장시간 완주율

> 소스: blog/long-horizon-agent-state-data-quality/ko/index.html
> 생성일: 2026-07-14
> URL: https://blog.pebblous.ai/blog/long-horizon-agent-state-data-quality/ko/
> voice: sns-cover (LinkedIn/Twitter) · reflective (Facebook)

---

## LinkedIn (KO)

짧은 데스크톱 조작에서 83.5%까지 올라갔던 AI 에이전트가, 작업을 실제 업무 길이로 늘리자 완주율 20% 아래로 주저앉았습니다.

OSWorld-V2는 중앙값 1.6시간짜리 실제 워크플로우로 에이전트를 시험했습니다. 최상위 모델조차 끝까지 완주한 작업은 20.6%뿐이었고, 세 시간을 넘긴 작업은 어떤 모델도 하나를 완주하지 못했습니다.

실패를 뜯어 보면 원인은 지능이 아니었습니다. 초반에 확인한 제약, 도중에 도착한 정보, 다시 확인해야 할 시점을 몇 시간 동안 붙들지 못해 무너졌습니다. 토큰을 더 쏟아도, 컨텍스트 창을 넓혀도 이 벽은 잘 움직이지 않았습니다.

병목은 상태입니다. 몇 시간에 걸쳐 쌓이는 맥락은 결국 하나의 데이터셋이고, 스키마도 신선도 점검도 검증 게이트도 없이 방치하면 사람이 짠 파이프라인처럼 오염됩니다. 긴 작업을 끝내는 힘은 더 큰 두뇌가 아니라 잘 관리된 상태에서 나옵니다.

▶ 전문: https://blog.pebblous.ai/blog/long-horizon-agent-state-data-quality/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #DataClinic #AI에이전트 #ComputerUse #에이전트프레임워크 #OSWorld #ContextRot

---

## LinkedIn (EN)

On short desktop tasks, AI agents had climbed to 83.5%. Stretch the same work to real-job length, and completion collapsed below 20%.

OSWorld-V2 tested agents on real workflows with a median length of 1.6 hours. The best model finished only 20.6% of them, and once a task ran past three hours, no model completed a single one.

The failures were not about knowledge. Agents lost the constraints set early, the information that arrived mid-task, and the moment to double-check. Spending more tokens or widening the context window barely moved the wall.

The bottleneck is state. Context that accumulates over hours is a dataset, and a dataset with no schema, no freshness check, and no validation gate rots the same way a hand-built pipeline does. Finishing long tasks takes well-managed state, not a bigger brain.

▶ Read: https://blog.pebblous.ai/blog/long-horizon-agent-state-data-quality/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIAgent #ComputerUse #OSWorld #ContextRot #LongHorizonAgents

---

## Twitter/X (KO)

짧은 작업에선 83.5%까지 풀렸던 AI 에이전트가, 실제 업무 길이로 늘리자 완주율 20% 아래로 떨어졌습니다.

병목은 지능이 아니라 상태입니다. 몇 시간에 걸쳐 쌓인 맥락을 데이터처럼 관리하지 못하면 유능한 모델도 헛돕니다.

https://blog.pebblous.ai/blog/long-horizon-agent-state-data-quality/ko/

#페블러스 #AI에이전트 #OSWorld #데이터품질

---

## Twitter/X (EN)

AI agents hit 83.5% on short tasks. At real-job length, completion fell below 20%.

The bottleneck isn't intelligence. It's state: hours of accumulated context is a dataset, and left unmanaged it rots.

https://blog.pebblous.ai/blog/long-horizon-agent-state-data-quality/en/

#Pebblous #AIAgent #OSWorld #DataQuality

---

## Facebook (KO)

몇 시간짜리 일을 AI 에이전트에게 통째로 맡겨 두고 자리를 비웠다가, 돌아와 결과를 보고 당황해 본 적이 있으신가요.

분명 처음엔 잘 하고 있었습니다.

그런데 두 시간 뒤 산출물을 열어 보면, 초반에 분명히 확인했던 조건 하나가 어느 순간 조용히 사라져 있습니다.

새로 나온 벤치마크 하나가 이 장면을 숫자로 붙잡았습니다. 짧은 조작 과제에서 83.5%까지 올라갔던 최상위 에이전트가, 작업을 실제 업무 길이로 늘리자 완주율 20% 아래로 주저앉았습니다. 세 시간을 넘긴 작업은 어떤 모델도 끝내지 못했고요.

흥미로운 건 실패의 결입니다. 모델이 몰라서가 아니었습니다. 초반에 세운 제약, 도중에 도착한 정보, 다시 확인해야 할 시점을 몇 시간 동안 붙들지 못해 무너졌습니다. 더 큰 모델도, 더 넓은 컨텍스트 창도 이 벽을 대신 넘어 주지 않았습니다.

그래서 저는 이 문제를 기억력이 아니라 데이터 품질의 문제로 봅니다. 몇 시간에 걸쳐 쌓이는 맥락은 결국 에이전트가 계속 다시 읽는 하나의 데이터셋입니다. 스키마도, 신선도 점검도, 검증 게이트도 없이 두면, 사람이 짠 파이프라인이 그러하듯 조용히 오염됩니다. 페블러스가 데이터 품질을 진단해 온 자리에서 이 장면이 유독 낯익었던 이유입니다.

긴 작업을 끝내는 힘은 더 큰 두뇌가 아니라, 몇 시간 동안 흘리지 않고 들고 가는 상태에 있는 게 아닐까요.

https://blog.pebblous.ai/blog/long-horizon-agent-state-data-quality/ko/

#페블러스 #데이터품질 #데이터클리닉 #OSWorld #AI에이전트 #ContextRot

---

## Facebook (EN)

Have you ever handed a multi-hour task to an AI agent, stepped away, and come back to something quietly wrong?

At first it was doing fine.

But two hours in, one of the constraints you clearly confirmed at the start has simply gone missing from the work.

A new benchmark put numbers to that scene. Agents that had reached 83.5% on short tasks fell below 20% once the work was stretched to real-job length, and nothing finished a task that ran past three hours.

What struck me was the shape of the failure. It wasn't ignorance. The agents lost the constraints set early, the information that arrived along the way, and the moment to check again. A bigger model or a wider context window didn't cross the wall for them.

So I've come to see this as a data-quality problem, not a memory one. The context that builds up over hours is a dataset the agent keeps re-reading, and left without a schema, a freshness check, or a validation gate, it rots the way any hand-built pipeline does. That scene felt familiar from the years Pebblous has spent diagnosing data quality.

Maybe the power to finish long work lives not in a bigger brain, but in state carried across hours without leaking.

https://blog.pebblous.ai/blog/long-horizon-agent-state-data-quality/en/

#Pebblous #DataQuality #DataClinic #OSWorld #AIAgent #ContextRot
