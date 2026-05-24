# Facebook KO — Voyager 사유

> 소스: report/voyager-lifelong-agent-2023/ko/index.html
> URL: https://blog.pebblous.ai/report/voyager-lifelong-agent-2023/ko/
> voice: reflective
> 생성일: 2026-05-24 · polish: 2026-05-24

---

"스스로 배운다"는 말을 처음 들었을 때, 저는 그게 어떤 의미인지 한참 생각했습니다.

Voyager라는 이름의 에이전트가 Minecraft 세계에 놓였습니다.
아무도 목표를 알려주지 않았습니다.
아무도 보상을 설계하지 않았습니다.
그 에이전트는 나무를 캐는 법부터 시작했습니다.

그리고 인간의 개입 없이, 다이아몬드를 채굴하는 데까지 스스로 도달했습니다.

이 일이 벌어진 것은 2023년이었습니다.
NeurIPS에 발표된 논문 한 편이 이후 1,641번 인용되었고,
"관찰 - 계획 - 실행 - 검증"이라는 학습 루프의 설계 청사진이 되었습니다.

저는 이 논문에서 숫자만큼이나 하나의 질문이 오래 남았습니다.

"이 에이전트는 자신이 올바르게 배웠는지 어떻게 아는가?"

Voyager는 GPT-4에게 자기 성공을 스스로 판단하게 합니다.
Minecraft에서는 이것이 작동합니다.
다이아몬드를 캤는가, 아이템이 인벤토리에 들어왔는가 — 기준이 명확하기 때문입니다.

그러나 이 명확성이 사라지는 순간 무슨 일이 생기는가.
오염된 코드가 skill library에 축적되고,
그것이 다음 과제에 재사용되고,
오류가 전파됩니다.

연구자들은 이것을 'Error Fossilization'이라 불렀습니다.

Voyager에서 시작된 이 질문은 AI Scientist, Hermes, GR00T로 계보가 이어지는 내내 반복됩니다.
에이전트가 더 자율적이 될수록, 그 학습 데이터를 신뢰할 수 있는 기준선이 필요해집니다.

"에이전트가 스스로 학습할수록, 독립적인 검증이 더 중요해진다."

이 문장이 이 보고서의 결론입니다.
그리고 이 질문이 앞으로 어디까지 이어질지, 저는 아직 모릅니다.

https://blog.pebblous.ai/report/voyager-lifelong-agent-2023/ko/

#페블러스 #Voyager #AI에이전트 #DataClinic #DataGreenhouse #PebbloSim #데이터품질

---
