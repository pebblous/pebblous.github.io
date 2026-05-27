# SNS 홍보 글: 스킬 문서가 학습하기 시작했다 — 행동 운영체제의 시대

> 소스: report/microsoft-skillopt-self-evolving-agents/ko/index.html
> 생성일: 2026-05-27
> URL (KO): https://blog.pebblous.ai/report/microsoft-skillopt-self-evolving-agents/ko/
> URL (EN): https://blog.pebblous.ai/report/microsoft-skillopt-self-evolving-agents/en/
> voice: LinkedIn/Twitter = sns-cover · Facebook = reflective

---

## LinkedIn (KO)

이번 달 가장 조용하게 좌표를 다시 그린 논문은 새 모델이 아니라 한 장의 마크다운이었습니다.

Microsoft Research가 2026년 5월 22일 arXiv에 올린 SkillOpt(arXiv:2605.23904). 모델은 frozen, 에이전트도 frozen. 학습되는 객체는 단 하나 — best_skill.md 라는 자연어 문서 한 장입니다. 옵티마이저 모델이 실행 궤적을 읽고 그 문서를 add·delete·replace 세 연산으로 다듬고, held-out validation gate가 통과시킬 때만 채택합니다.

결과는 단정적입니다. 6개 벤치마크 × 7개 모델 × 3개 실행 환경의 52/52 cells에서 best-or-tied. GPT-5.5 direct chat +23.5pt, Codex agentic loop +24.8pt, Claude Code +19.1pt. GPT-3.5→GPT-4 한 세대 점프(+15~+20pt)와 같거나 큰 폭을, frontier 학습 비용의 6~7 자릿수 아래 가격으로 만들어 냅니다. 그리고 스킬은 모델 사이를 옮겨다닙니다 — Codex에서 학습된 SpreadsheetBench 스킬이 Claude Code 환경에서 22.1→81.8(+59.7pt)로 작동합니다.

흥미로운 것은 진영의 분기입니다. 한쪽은 모델을 더 키웁니다(OpenAI·Meta·Google·xAI). 다른 한쪽은 모델은 그대로 두고 그 위의 스킬·메모리·트레이스를 학습 가능한 자산으로 다룹니다(Microsoft SkillOpt + Anthropic Claude Skills). 두 빅테크가 같은 시기에 스킬 계층을 MIT·open standard로 모두에게 개방했다는 사실이, AgentOps 안에 SkillOps라는 새 하위 범주가 태어나고 있음을 가리킵니다.

페블러스의 시각은 한 줄입니다 — AI-Ready Data → AI-Ready Behavior. 데이터를 진단 가능한 상태로 만든 회사가 이제 행동을 진단 가능한 상태로 만들 차례라는 명제. SkillOpt가 발표된 바로 그날 한국에서는 한컴·LG AI연구원이 ChatEXAONE 결합 협약을 체결했고, 한국 AI 기본법은 2026년 1월 22일 이미 시행되었습니다. "에이전트가 오판했을 때 그 오판이 어떤 스킬 문서의 어떤 줄에서 비롯되었는지"를 사람이 읽을 수 있는 형태로 증명할 수 있는 능력 — 그것이 다음 데이터 품질의 정의가 됩니다.

전체 분석 → https://blog.pebblous.ai/report/microsoft-skillopt-self-evolving-agents/ko/

#페블러스 #데이터클리닉 #데이터품질 #데이터저널리즘 #AIReadyData #SkillOpt #자기진화AI #AI에이전트 #AgentOps #SkillOps #Microsoft #Anthropic #한컴 #LGAI연구원 #AI기본법

---

## LinkedIn (EN)

The most quietly consequential paper this month wasn't a new model — it was a single markdown file.

Microsoft Research dropped SkillOpt on arXiv on May 22, 2026 (arXiv:2605.23904). The model is frozen. The agent is frozen. The only object that learns is one natural-language document — best_skill.md. An optimizer model reads execution traces, edits the document through three operations (add, delete, replace) within a textual learning rate, and a held-out validation gate accepts the edit only when it strictly improves performance.

The numbers are unambiguous. Best-or-tied on 52 of 52 cells across 6 benchmarks × 7 models × 3 harnesses. +23.5pt on GPT-5.5 direct chat. +24.8pt on Codex. +19.1pt on Claude Code. That is a full model-generation jump (GPT-3.5 → GPT-4 was typically +15 to +20pt) — delivered at six to seven orders of magnitude less cost than training a frontier model. And the skill travels: a SpreadsheetBench skill trained inside Codex jumps from 22.1 to 81.8 (+59.7pt) when carried over to Claude Code.

What's interesting is the split between camps. One side keeps scaling the model — OpenAI, Meta, Google, xAI. The other side freezes the model and trains the behavior assets that sit on top of it — Microsoft SkillOpt and Anthropic's Claude Skills. Two of the largest research labs opened the skill layer to everyone — MIT license, open standard — at the same moment. Inside the AgentOps market (projected to grow from $1.8B in 2025 to $58.4B by 2034), a new sub-category is being born: SkillOps.

The Pebblous read is one line — AI-Ready Data → AI-Ready Behavior. A company that has spent years making data diagnosable now has to make behavior diagnosable. On the same day SkillOpt was released, Hancom and LG AI Research signed their strategic ChatEXAONE alliance in Korea, where the AI Framework Act took effect on January 22, 2026 — placing one question at the center of the industry: when an agent misjudges, whose decision was it? Being able to point to the line in the skill document where the misjudgment came from, in plain text — that is the next definition of data quality.

Full analysis → https://blog.pebblous.ai/report/microsoft-skillopt-self-evolving-agents/en/

#Pebblous #DataClinic #DataQuality #DataJournalism #SkillOpt #MicrosoftResearch #SelfEvolvingAI #AIAgents #AgentOps #SkillOps #BehaviorOS #AIReadyBehavior

---

## Twitter/X (KO)

이번 달 가장 조용한 좌표 이동은 새 모델이 아니라 한 장의 마크다운.

Microsoft SkillOpt — 모델 frozen, best_skill.md 한 장만 학습. 52/52 cells, +23.5pt, frontier 비용 6~7 자릿수 아래.

스킬은 모델 사이를 옮겨다닙니다.

https://blog.pebblous.ai/report/microsoft-skillopt-self-evolving-agents/ko/

#페블러스 #SkillOpt #SkillOps

---

## Twitter/X (EN)

This month's quietest reframing wasn't a new model — it was one markdown file.

Microsoft SkillOpt: model frozen, only best_skill.md learns. 52/52 cells, +23.5pt. Skills travel between models.

https://blog.pebblous.ai/report/microsoft-skillopt-self-evolving-agents/en/

#SkillOpt #SkillOps

---

## Facebook (KO)

"학습되는 것은 단 한 장의 마크다운입니다."

며칠 전 arXiv에 올라온 한 문장을 한참 들여다봤습니다.

Microsoft Research의 SkillOpt. 모델은 그대로 두고, 에이전트도 그대로 두고, 학습되는 건 best_skill.md 라는 자연어 문서 한 장이라고 합니다.

옵티마이저 모델이 실행 궤적을 읽고 그 문서에 줄을 더하고 빼고 바꿉니다. 검증 게이트가 통과시킬 때만 그 수정이 살아남습니다. 가중치라는 수십억 차원의 연속 공간을 떠나, 사람이 읽을 수 있는 한 장의 종이로 학습 대상의 위상이 옮겨졌다는 이야기입니다.

같은 날 한국에서는 한컴과 LG AI연구원이 ChatEXAONE 결합 협약을 맺었습니다. 한국 AI 기본법은 이미 1월에 시행되었고, 시장은 "에이전트가 오판했을 때 그 책임은 누구의 것인가"를 묻기 시작했습니다.

"진단된 스킬 문서."

페블러스가 데이터에 대해 해온 일을, 이제 행동에 대해 해야 한다는 명제가 자꾸 마음에 머뭅니다. AI-Ready Data 다음 자리에 AI-Ready Behavior가 비어 있는 것 같습니다.

전체 글은 여기 있습니다 — https://blog.pebblous.ai/report/microsoft-skillopt-self-evolving-agents/ko/

#페블러스 #SkillOpt #AIReadyBehavior #DataClinic #PebbloSim #DataGreenhouse #PebbloScope
