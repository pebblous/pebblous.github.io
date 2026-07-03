# SNS 홍보 글: 에이전트를 멈추는 여섯 가지 데이터 결함

> 소스: report/enterprise-ai-agent-pilot-gap/ko/index.html
> 생성일: 2026-07-03
> URL: https://blog.pebblous.ai/report/enterprise-ai-agent-pilot-gap/ko/
> voice: LinkedIn·Twitter = sns-cover / Facebook = reflective

---

## LinkedIn (KO)

같은 에이전트가 파일럿에서는 60% 정확도를 내고 운영에서는 25%로 떨어진다. 3배 저하의 원인은 모델이 갑자기 멍청해진 것이 아니다. 선별된 테스트 데이터에서 일관되게 처리되던 null과 중복이, 실데이터에서는 시스템마다 다른 뜻으로 흩어졌기 때문이다.

문제의 결함들은 공통점이 하나 있다. 전부 스키마 검증을 통과한다. 필드는 채워져 있고 타입도 맞다. 그런데 '활성 고객'의 정의가 부서마다 다르고, null이 0으로 읽히고, 벤더가 조용히 컬럼을 바꾼다. 형식적으로는 valid하지만 에이전트에게는 usable하지 않다.

룰 기반 시대에는 분석가가 이런 엣지 케이스를 손으로 잡았다. 자율 에이전트는 그 버퍼를 제거한다. 예외는 사라진 게 아니라 주인을 잃었다. 실제로 에이전트 확장 실패의 89%가 불명확한 소유권으로 귀인된다.

파일럿을 운영으로 넘기는 레버는 모델 튜닝이 아니라 결함에 이름을 붙이고 예외의 주인을 정하는 일이다. 예산과 측정 목표를 함께 쥔 오너를 둔 기업은 전환율이 2.7배 높았다.

▶ 전문: https://blog.pebblous.ai/report/enterprise-ai-agent-pilot-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AI에이전트 #엔터프라이즈AI #AIReadyData #데이터거버넌스 #데이터계약 #AI거버넌스

---

## LinkedIn (EN)

The same agent scores 60% accuracy in a pilot and drops to 25% in production. The model didn't get dumber. The nulls and duplicates that behaved consistently in curated test data scattered into system-specific meanings once real data arrived.

These defects share one trait: they all pass schema validation. Fields are populated, types check out. Yet "active customer" means something different in each department, nulls get read as zero, and a vendor quietly adds a column. Formally valid, but not usable by an agent.

In the rule-based era, analysts caught these edge cases by hand. Autonomous agents remove that buffer. The exceptions didn't disappear; they lost their owner. In fact, 89% of agent scaling failures trace back to unclear ownership.

The lever that moves a pilot into production isn't model tuning. It's naming the defects and assigning an owner to the exceptions. Companies with a named owner holding both budget and metrics converted 2.7x more often.

▶ Read: https://blog.pebblous.ai/report/enterprise-ai-agent-pilot-gap/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #AIAgent #EnterpriseAI #AIReadyData #DataGovernance #DataContract #AIGovernance

---

## Twitter/X (KO)

같은 AI 에이전트가 파일럿에선 60% 정확도, 운영에선 25%. 모델이 멍청해진 게 아니라 스키마 검증을 통과하는 데이터 결함이 원인이다.

null이 0으로 읽히고 '활성 고객' 정의가 부서마다 다른데, 그 예외엔 주인이 없다.

https://blog.pebblous.ai/report/enterprise-ai-agent-pilot-gap/ko/

#페블러스 #AI에이전트 #데이터품질 #엔터프라이즈AI

---

## Twitter/X (EN)

The same AI agent: 60% accuracy in a pilot, 25% in production. The model didn't get dumber; data defects that pass schema validation did the damage.

Nulls read as zero, "active customer" defined differently in every team, and no one owns the exceptions.

https://blog.pebblous.ai/report/enterprise-ai-agent-pilot-gap/en/

#Pebblous #AIAgent #DataQuality #EnterpriseAI

---

## Facebook (KO)

파일럿에서는 분명히 잘 됐습니다.

시연 자리에서 에이전트는 정확하게 답했고, 다들 고개를 끄덕였습니다. 그런데 실제 운영에 올리자 같은 에이전트가 자꾸 엉뚱한 결정을 내립니다. 모델은 그대로인데 말입니다.

무엇이 달라진 걸까요.

바뀐 건 모델이 아니라 데이터였습니다. 파일럿에서 쓰던 데이터는 누군가 미리 정리해 둔 것이었고, 운영 데이터는 시스템마다 조금씩 다른 얼굴을 하고 있었습니다. 어떤 시스템에선 '활성 고객'이 90일 내 구매한 사람이고, 다른 시스템에선 30일 내 로그인한 사람입니다. null은 '아직 모름'인데 에이전트는 그걸 '0'으로 읽습니다.

이상한 건, 이 결함들이 전부 검증을 통과한다는 점입니다. 필드는 채워져 있고 형식도 맞습니다. 예전 같으면 분석가가 "이거 정의가 뭐죠?" 하고 손을 들었을 자리인데, 자율 에이전트는 그냥 하나를 골라 자신 있게 답해 버립니다.

그래서 자꾸 이 질문이 남습니다. 예외는 정말 사라진 걸까요, 아니면 받아 줄 사람을 잃은 걸까요.

깨끗한 데이터와 쓸 수 있는 데이터 사이에는 생각보다 먼 거리가 있습니다. 그 거리를 좁히는 첫걸음은 더 똑똑한 모델이 아니라, 결함에 이름을 붙이고 그 예외를 누가 받을지 정하는 일인지도 모릅니다.

전문은 여기에 있습니다: https://blog.pebblous.ai/report/enterprise-ai-agent-pilot-gap/ko/

#페블러스 #데이터클리닉 #데이터품질 #AI에이전트 #엔터프라이즈AI

---

## Facebook (EN)

It worked in the pilot. That was the confusing part.

In the demo the agent answered cleanly, and everyone nodded. Then we moved it to production, and the same agent, unchanged, started making strange calls.

So what changed?

Not the model. The data. The pilot ran on numbers someone had quietly cleaned up beforehand. Production data wore a slightly different face in every system. In one, an "active customer" had bought something in the last 90 days; in another, they had simply logged in within 30. A null means "not yet known," but the agent reads it as zero.

The strange thing is that all of these pass validation. The fields are filled, the format checks out. Where an analyst would once have raised a hand and asked, "wait, which definition are we using?", the autonomous agent just picks one and answers with confidence.

Which leaves a question I keep coming back to: did the exceptions disappear, or did they just lose the person who used to catch them?

Between clean data and usable data there's a longer distance than it looks. And the first step across it may not be a smarter model, but naming the defects and deciding who owns the ones that slip through.

Read the full report: https://blog.pebblous.ai/report/enterprise-ai-agent-pilot-gap/en/

#Pebblous #DataClinic #DataQuality #AIAgent #EnterpriseAI
