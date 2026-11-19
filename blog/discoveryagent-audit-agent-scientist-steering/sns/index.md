# SNS 홍보 글: DiscoveryAgent, AI의 연구를 다른 AI가 검사한다

> 소스: blog/discoveryagent-audit-agent-scientist-steering/
> 생성일: 2026-11-19
> URL: https://blog.pebblous.ai/blog/discoveryagent-audit-agent-scientist-steering/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

연구를 대신 돌린 AI 옆에 검사만 전담하는 AI를 하나 더 세웠더니, 같은 한 시간에 과학자가 되찾은 오류가 14배로 늘었다.

11월 16일 arXiv에 공개된 DiscoveryAgent는 스탠퍼드를 중심으로 UC버클리와 UCSF, SLAC 연구자가 함께 쓴 논문이다. 연구는 라운드 단위로 진행되고, 다음 라운드에 올릴 가설은 과학자가 고르거나 손보거나 통째로 바꾼다. 논문이 감사 에이전트라 부르는 쪽은 완성된 보고서에 평을 다는 역할이 아니다. 체크포인트와 코드와 로그를 직접 열어 주장 하나의 출처를 끝까지 따라가고, 숫자가 다시 나오는지 분석을 돌려 본다.

14배는 사람과 AI가 맞붙은 결과가 아니다. 양쪽 모두 과학자였다. 코드와 보고서만 받아 혼자 검토한 집단은 한 사람이 평균 0.25개를 되찾았고, 감사 에이전트를 함께 쓴 집단은 3.50개를 되찾았다.

두 집단은 각각 네 명이었고 검토 시간은 한 시간이었다. 차이의 방향은 분명하지만 폭의 크기는 더 큰 표본에서 다시 확인할 일이다. 같은 감사 에이전트를 Kosmos나 일반 코딩 에이전트의 기록에 붙였을 때는 정확도가 떨어졌고, Terra와 Luna 모델에서 낙폭이 특히 컸다.

성적을 가른 것은 검사하는 쪽의 똑똑함이 아니라 검사받는 쪽이 무엇을 남겨 두었는지였다. 페블러스는 AI 학습 데이터의 품질에 DataClinic으로 숫자를 매긴다. 자동 검수를 들이기 전에 먼저 답할 질문은 어떤 도구를 고를지가 아니라, 지금 돌아가는 과정이 되짚을 수 있는 기록을 남기고 있는지다.

▶ 전문: https://blog.pebblous.ai/blog/discoveryagent-audit-agent-scientist-steering/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #DiscoveryAgent #감사에이전트 #AI에이전트 #AI검증 #스탠퍼드 #arXiv

---

## LinkedIn (EN)

Put a second AI next to the one doing the research, give it no job except checking the work, and in one hour a scientist catches fourteen times as many errors.

A Stanford-led group released DiscoveryAgent on November 16, with co-authors at UC Berkeley, Gladstone-UCSF and SLAC. Work proceeds one round at a time, and the scientist decides between rounds which hypothesis goes in next, reshaping it or dropping it for another. The audit agent, as the paper names it, is no reviewer of finished reports. It opens the checkpoints, the code and the logs, traces one claim down to its origin, and runs an analysis again where a figure has to prove it reproduces.

The fourteen is not humans against AI. Both sides of that comparison were scientists. One group held nothing but code and a written report, and recovered 0.25 planted errors per person in an hour. The group sitting with the audit agent recovered 3.50.

Four people sat in each group, and the review lasted an hour. The direction holds; the width of the gap waits on a larger sample. Audit accuracy also fell on traces produced by Kosmos and by a general coding agent, dropping furthest on the Terra and Luna models.

The scores split on how much the checked side had written down, not on how clever the checker was. Pebblous counts how much of a training set is actually usable. DataClinic produces that count. Before any automated review arrives, the question to answer is not which tool to buy but whether today's pipeline leaves a record anyone could retrace.

▶ Read: https://blog.pebblous.ai/blog/discoveryagent-audit-agent-scientist-steering/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIReadyData #DiscoveryAgent #AuditAgent #AIAgents #AIVerification #Stanford #arXiv

---

## Twitter/X (KO)

연구를 대신 돌린 AI 옆에 검사만 전담하는 AI를 하나 더 세운 시스템이 공개됐다.

같은 한 시간에 한 사람이 되찾은 오류가 0.25개에서 3.50개로 늘었다. 맞붙은 양쪽 모두 과학자였다.

병목은 검사 능력이 아니라 검사할 수 있게 남겨진 기록이었다.

https://blog.pebblous.ai/blog/discoveryagent-audit-agent-scientist-steering/ko/

#페블러스 #데이터품질 #DiscoveryAgent #감사에이전트

---

## Twitter/X (EN)

A research AI with a second AI beside it, whose only job is to check the work.

In one hour, the errors a reviewer recovered went from 0.25 to 3.50 per person. Both sides of that comparison were human scientists.

What ran out first was not the checking. It was how much of the run had been written down.

https://blog.pebblous.ai/blog/discoveryagent-audit-agent-scientist-steering/en/

#Pebblous #DataQuality #DiscoveryAgent #AuditAgent

---

## Facebook (KO)

다른 사람이 돌린 분석을 받아 들고, 맞는지만 봐 달라는 부탁을 받는 자리가 있습니다.

손에 들어오는 것은 대개 코드 한 벌과 보고서 한 장입니다.

읽다 보면 어느 지점에서 확인이 짐작으로 바뀝니다.

스탠퍼드의 연구진은 바로 그 자리를 실험으로 옮겨 놓았습니다. 과학자들을 네 명씩 두 집단으로 나누고, 오류를 일부러 심어 둔 연구 결과물을 한 시간 동안 검토하게 했습니다. 한쪽에는 코드와 보고서만 주었고, 다른 한쪽에는 체크포인트와 로그를 뒤져 주장 하나를 출처까지 되짚어 주는 에이전트를 붙여 주었습니다.

코드만 받은 쪽은 한 사람이 평균 0.25개를 찾아냈습니다. 에이전트를 함께 쓴 쪽은 3.50개였습니다.

같은 한 시간, 같은 결과물이었습니다.

눈이 더 간 대목은 그다음입니다. 같은 에이전트를 다른 시스템이 남긴 기록에 붙이자 점수가 내려갔습니다. 검사하는 도구는 그대로였고, 달라진 것은 검사받을 자료 쪽이었습니다.

"검사 도구를 고르기 전에, 우리 쪽은 '검사받을 준비'가 되어 있습니까?"

AI 학습 데이터가 어떤 상태인지를 숫자로 남겨 두는 일을 페블러스는 DataClinic으로 합니다. 라벨이 왜 그렇게 붙었는지, 어떤 규칙으로 걸러졌는지가 남아 있지 않으면, 검수를 자동화해도 늘어나는 것은 속도뿐입니다.

데이터가 AI를 쓸 준비가 되었다는 말은 형식이 깔끔하다는 뜻만은 아닐 것입니다. 왜 그렇게 되었는지를 나중에 다시 꺼내 볼 수 있다는 뜻도 됩니다.

▶ 전문: https://blog.pebblous.ai/blog/discoveryagent-audit-agent-scientist-steering/ko/

#페블러스 #데이터클리닉 #데이터품질 #DiscoveryAgent #감사에이전트 #AI에이전트

---

## Facebook (EN)

There is a particular request that comes around now and then. Someone hands over an analysis they ran and asks you to confirm it holds.

What arrives is usually a folder of code and a written report.

Somewhere in the reading, confirming quietly turns into assuming.

A Stanford group turned that situation into an experiment. Two groups of four scientists each were given an hour with a set of research results that had errors quietly planted in them. One group worked from the code and the report. The other had an agent beside it that could open the checkpoints and the logs and pull a single claim back to where it started.

Working from code alone, a reviewer recovered 0.25 errors on average. Alongside the agent, 3.50.

Same hour, same output.

The part I slowed down on came after that. Point the same audit agent at what other systems left behind and the score falls. Nothing changed about the checker. What changed was how much the checked side had written down.

"Before choosing a tool to check the work, is the work ready to be checked?"

At Pebblous the work is to say what state a training set is in before anything learns from it. That number comes back from DataClinic. Without a trace of why a label went on, or which rule dropped a row, automating the review buys speed and leaves the view as narrow as it was.

Calling data ready for AI probably carries more than tidy columns. It may also carry the ability to pull up, a year later, why a result came out the way it did.

▶ Read: https://blog.pebblous.ai/blog/discoveryagent-audit-agent-scientist-steering/en/

#Pebblous #DataClinic #DataQuality #DiscoveryAgent #AuditAgent #AIAgents
