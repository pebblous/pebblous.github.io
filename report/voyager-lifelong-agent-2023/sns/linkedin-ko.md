# LinkedIn KO — Voyager: 스스로 배우는 AI의 기원

> 소스: report/voyager-lifelong-agent-2023/ko/index.html
> URL: https://blog.pebblous.ai/report/voyager-lifelong-agent-2023/ko/
> voice: sns-cover
> 생성일: 2026-05-24 · polish: 2026-05-24

---

GPT-4가 처음으로 "스스로 배웠다"는 기록이 등장한 것은 게임 세계에서였습니다.

2023년 NeurIPS. NVIDIA와 Caltech 연구팀은 Minecraft라는 오픈 월드에 GPT-4를 얹은 에이전트를 놓아두었습니다. 목표도, 보상 함수도, 인간의 개입도 없었습니다. 에이전트는 나무를 캐는 법부터 시작해 다이아몬드 채굴까지 스스로 도달했고, 기존 baseline(ReAct, Reflexion, AutoGPT) 대비 유일 아이템 발견 **3.3배**, 기술 트리 달성 속도 **15.3배**, 새 월드 zero-shot transfer **100% 성공**(나머지 0%)을 기록했습니다.

왜 이 논문이 지금도 계속 인용(Semantic Scholar 1,641회)되는가. Voyager의 핵심 기여는 Minecraft에서 다이아몬드를 캤다는 결과가 아니라, 3요소 아키텍처(Automatic Curriculum + Skill Library + Self-Verification)가 "관찰 - 계획 - 실행 - 검증"이라는 보편적 학습 루프를 코드로 구현한 설계 청사진을 남겼기 때문입니다. 이 패턴은 Eureka(로보틱스), AI Scientist(과학), GR00T(휴머노이드), Hermes(다중 에이전트)로 그대로 이어졌습니다.

그러나 Voyager는 동시에 가장 중요한 질문을 남겼습니다. GPT-4가 자신의 성공을 스스로 판단하는 self-verification 구조는 Minecraft처럼 성공 기준이 명확한 환경에서는 작동하지만, 현실 세계로 이동할수록 "오염된 코드가 skill library에 축적되는" Error Fossilization 위험이 커집니다. 에이전트가 자율적일수록 독립적 데이터 품질 검증이 더 중요해집니다. 페블러스가 DataClinic을 통해 접근하는 지점이 바로 여기입니다.

전문 분석: https://blog.pebblous.ai/report/voyager-lifelong-agent-2023/ko/

#페블러스 #DataClinic #데이터품질 #데이터저널리즘 #AI에이전트 #LLM #강화학습 #평생학습 #Voyager #NeurIPS2023 #GPT4 #GR00T

---
