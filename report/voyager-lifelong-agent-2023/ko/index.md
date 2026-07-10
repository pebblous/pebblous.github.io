---
title: Voyager: 스스로 배우는 AI의 기원
subtitle: GPT-4 기반 Minecraft 평생학습 에이전트가 열어젖힌 자율 에이전트 시대의 설계도
date: 2026-05-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Voyager: 스스로 배우는 AI의 기원

_GPT-4 기반 Minecraft 평생학습 에이전트가 열어젖힌 자율 에이전트 시대의 설계도_

2026.05 · 페블러스 데이터 커뮤니케이션팀

읽는 시간: ~15분 · [English](../en/)

## Executive Summary

> [!callout]
> 2023년 NeurIPS에서 발표된 Voyager는 GPT-4 기반으로 Minecraft 세계에서 인간 개입 없이 스스로 기술을 축적하는 최초의 오픈 엔디드 평생학습 에이전트다. Automatic Curriculum, Skill Library, Self-Verification이라는 3요소 아키텍처를 통해 "관찰 - 계획 - 실행 - 검증"의 보편적 학습 루프를 코드로 구현한 이 시스템은, 이후 등장한 자율 에이전트 계보 전체의 설계 템플릿이 되었다.

> Voyager는 기존 baseline(ReAct, Reflexion, AutoGPT) 대비 유일 아이템 발견 **3.3배**, 기술 트리 달성 속도 **15.3배**, 탐험 거리 **2.3배**를 달성했으며, 다이아몬드 채굴에는 유일하게 성공했다. 새로운 월드로의 zero-shot 전이에서도 **100% 성공률**을 기록한 반면, 모든 baseline은 0%에 머물렀다.

> 그러나 "GPT-4가 자신의 성공을 스스로 판단하는" 자가 검증 구조는 근본적 질문을 남겼다. 에이전트가 자율적으로 학습할수록, 그 학습 데이터를 누가 검증할 것인가. Voyager에서 시작되어 AI Scientist, Hermes로 이어지는 이 질문에 대해, DataClinic은 독립적 외부 검증 기준선이라는 해답을 제시한다.

Voyager의 성과는 네 가지 수치로 압축된다. 기존 baseline 대비 유일 아이템 발견 3.3배, 완전 자율 학습(인간 개입 0회), 다이아몬드 채굴 유일 달성(전체 기술 트리의 최고 단계), 그리고 학술 커뮤니티의 폭넓은 인정(1,641회 인용)이 그것이다. 이 수치들은 Voyager가 단순한 성능 개선이 아닌 패러다임 전환임을 정량적으로 입증한다.

<!-- stat-card -->
**3.3x** — 유일 아이템 발견 — vs ReAct baseline

<!-- stat-card -->
**15.3x** — 기술 트리 달성 속도 — 다이아몬드 유일 도달

<!-- stat-card -->
**0** — 인간 개입 횟수 — 완전 자율 학습

<!-- stat-card -->
**1,641** — 학술 인용 수 — Semantic Scholar 기준

## Voyager가 열어젖힌 문 — LLM 에이전트가 처음으로 "스스로 배웠다"

2023년, Minecraft라는 3차원 오픈 월드에서 하나의 실험이 이루어졌다. NVIDIA와 Caltech 연구팀이 GPT-4를 탑재한 에이전트를 이 세계에 놓아두고 관찰한 것이다. 목표를 미리 정해주지 않았다. 보상 함수도 설계하지 않았다. 인간의 개입도 없었다. 에이전트는 나무를 캐는 법부터 시작해, 돌 도구를 만들고, 철을 제련하고, 마침내 다이아몬드를 채굴하는 데까지 스스로 도달했다.

이것이 Voyager다. Wang et al.이 NeurIPS 2023에서 발표한 이 논문은 Semantic Scholar 기준 **1,641회** 인용되었고(2026년 5월), GitHub에서 약 **6,900개**의 스타를 획득했다. Voyager가 중요한 이유는 "Minecraft에서 다이아몬드를 캤다"는 결과 자체가 아니다. 중요한 것은 이 에이전트가 보여준 **학습 방식**이다.

기존 강화학습 에이전트는 수천만 번의 시행착오를 통해 특정 과제를 해결했다. 한 과제를 풀면 다음 과제를 처음부터 다시 배워야 했다. 반면 Voyager는 한 번 학습한 기술을 JavaScript 코드로 저장하고, 이후 새로운 상황에서 그 코드를 검색해 재사용했다. 마치 프로그래머가 자신의 코드 라이브러리를 축적하듯, 에이전트가 스스로의 경험을 실행 가능한 코드로 변환해 쌓아간 것이다.

![Minecraft Beta 1.8.1 — 강·해변·숲의 오픈 월드, Voyager 에이전트가 처음 눈을 뜨는 환경](./image/img-01-voyager-minecraft-beta-gameplay.png)
*▲ Minecraft Beta 1.8.1 — 강·해변·숲이 펼쳐진 오픈 월드. Voyager는 아무런 사전 목표 없이 이 풍경 한가운데 놓였다 | Source: Xbox México, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Minecraft_Beta_1.8.1_Gameplay_Screenshot.png) (CC BY 3.0)*

> [!callout]
> Voyager의 핵심 기여는 단일 논문의 성과가 아니라, 이후 등장한 자율 에이전트 계보 전체의 설계 청사진이라는 점이다. "open-ended exploration + skill accumulation" 패턴은 게임을 넘어 과학(AI Scientist), 범용 에이전트(Hermes), 로보틱스(GR00T)로 확장되고 있다.

## 4단계 실행 루프 해부 — Automatic Curriculum, Skill Library, Self-Verification

Voyager의 3요소 아키텍처는 "관찰 - 계획 - 실행 - 검증"이라는 보편적 학습 루프를 코드로 구현한 것이다. 각 요소는 GPT-4를 블랙박스로 사용하며, 별도의 파인튜닝 없이 프롬프트만으로 작동한다는 점이 실용성의 핵심이다.

### 2.1 Automatic Curriculum

GPT-4가 에이전트의 현재 상태(보유 아이템, 기술 수준, 주변 환경)를 관찰하고, 다음으로 수행할 과제를 자동 생성한다. "나무를 캐라" 이후에는 "나무 판자를 만들어라", 그다음에는 "작업대를 만들어라"를 스스로 제안한다. 과제의 난이도는 현재 능력 대비 약간 어려운 수준으로 조절되며, 이는 교육학의 Zone of Proximal Development 원리와 유사하다.

### 2.2 Skill Library

성공한 행동은 JavaScript 코드로 변환되어 skill library에 저장된다. 각 skill은 자연어 설명과 함께 임베딩 벡터로 인덱싱되며, 새로운 과제가 주어지면 유사한 기존 skill을 검색해 재사용하거나 조합한다. 160회 반복 후 에이전트는 수십 개의 재사용 가능한 skill을 축적했고, 이 library가 zero-shot transfer의 핵심 자산이 되었다.

### 2.3 Iterative Prompting + Self-Verification

생성된 코드가 환경에서 실행된 후, 실행 결과(에러 메시지, 인벤토리 변화, 환경 피드백)가 GPT-4에게 다시 전달된다. GPT-4는 이 피드백을 기반으로 코드를 수정하고, 성공할 때까지 반복한다. 성공 여부는 GPT-4의 자가 판단과 환경의 객관적 피드백(아이템 획득 여부) 두 가지로 검증된다.

세 요소가 유기적으로 연결될 때, Voyager는 하나의 닫힌 피드백 루프를 형성한다. 각 단계는 이전 단계의 결과를 입력으로 받아 다음 단계를 구동하며, 루프가 반복될수록 skill library가 축적되고 에이전트의 능력이 성장한다. 이 루프 전체가 GPT-4 파인튜닝 없이 프롬프트 설계만으로 작동한다는 점이 Voyager 아키텍처의 핵심 실용성이다.

![Minecraft 채굴 장면 — Voyager가 가장 처음 배우는 액션, 도구로 블록을 깨고 자원을 얻는 기본 루프](./image/img-02-voyager-mining-action.jpg)
*▲ "나무를 깬다 → 곡괭이를 만든다 → 돌을 깬다 → 더 좋은 곡괭이를 만든다." Voyager가 4단계 루프로 처음 익히는 기본 채굴 행위 | Source: Zach Copley, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Mining_in_Minecraft.jpg) (CC BY-SA 2.0)*

이 세 요소의 결합이 만들어내는 4단계 루프는 다음과 같다.

| 단계 | 구성 요소 | 역할 |
| --- | --- | --- |
| 1. 관찰 | Automatic Curriculum | 현재 상태 분석, 다음 과제 생성 |
| 2. 계획 | Skill Library 검색 | 유사 skill 탐색, 코드 조합 |
| 3. 실행 | Iterative Prompting | 코드 생성, 환경 실행, 오류 수정 |
| 4. 검증 | Self-Verification | 성공 판단, skill 저장 또는 재시도 |

이 설계에서 가장 주목할 점은 GPT-4를 파인튜닝 없이 블랙박스로 사용한다는 것이다. Voyager는 GPT-4의 모든 능력(코드 생성, 상황 판단, 자연어 이해)을 프롬프트 엔지니어링만으로 조합했다. 이는 새로운 LLM이 등장할 때마다 별도 학습 없이 즉시 교체할 수 있음을 의미하며, 후속 연구들이 이 접근법을 그대로 계승한 이유이기도 하다.

## 정량 비교 — "얼마나 더 잘했는가"를 숫자로 증명

Voyager의 우위는 추상적 주장이 아니라 정량적 데이터로 뒷받침된다. 연구팀은 ReAct, Reflexion, AutoGPT를 동일 조건에서 비교했으며, 결과는 일방적이었다.

아래 표는 160회 반복(iteration) 실험에서의 핵심 지표 비교 결과다.

| 지표 | Voyager | ReAct | Reflexion | AutoGPT |
| --- | --- | --- | --- | --- |
| 유일 아이템 발견 | 63개 | 19개 | 18개 | 24개 |
| 기술 트리 달성 | Diamond | Wood | Wood | Stone |
| 탐험 거리 | 2.3x | 1.0x | 0.8x | 1.2x |
| Zero-shot 전이 | 100% | 0% | 0% | 0% |

이 수치들이 의미하는 바는 명확하다. **코드 기반 기술 축적이 자연어 기반 추론 기록(ReAct)이나 언어적 반성(Reflexion)을 압도적으로 능가한다.** ReAct는 추론 과정을 텍스트로 기록하고, Reflexion은 실패 경험을 언어로 요약해 다음 시도에 활용한다. 반면 Voyager는 성공한 행동을 실행 가능한 코드로 변환해 저장한다. 코드는 실행 가능(executable)하고 검증 가능(verifiable)하다는 본질적 장점을 갖는다.

특히 zero-shot transfer 결과가 결정적이다. 새로운 Minecraft 월드에서 Voyager는 50회 반복 내에 모든 목표를 해결한 반면, 나머지 baseline은 단 하나의 목표도 달성하지 못했다. 이는 skill library가 단순한 경험 기록이 아니라, 환경 변화에 강건한 재사용 가능한 코드 자산임을 입증한다.

### 3.1 Ablation Study: 각 요소의 기여

연구팀은 Voyager의 세 가지 핵심 요소를 하나씩 제거하는 ablation study도 수행했다. Automatic Curriculum을 제거하면 아이템 발견 수가 급감했고, Skill Library를 제거하면 zero-shot transfer가 불가능해졌으며, Self-Verification을 제거하면 오류 코드가 library에 축적되기 시작했다. 세 요소 모두가 필수적이며, 어느 하나를 제거해도 시스템 전체의 성능이 붕괴한다는 결과다.

![Minecraft 다이아몬드 채굴 — Voyager가 도달한 상징적 목표, 가장 깊은 광맥에서 다이아몬드를 채굴하는 장면](./image/img-03-voyager-diamond-mining.png)
*▲ 다이아몬드 채굴. Voyager가 baseline 대비 15.3배 빠르게 도달한 기술 트리의 정점. 곡괭이를 들고 가장 깊은 광맥에 닿기까지 필요한 모든 skill을 — 누구의 가르침도 없이 — 스스로 쌓아 올렸다 | Source: Xbox México, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Screenshot_of_a_player_mining_for_diamonds_in_Minecraft.png) (CC BY 3.0)*

## 계보의 기원점 — Code-as-Policies에서 Hermes까지

Voyager는 고립된 논문이 아니다. LLM이 환경과 상호작용하며 자율적으로 기술을 축적하는 패러다임의 최초 대규모 실증이며, 이 패러다임은 이후 도메인, 모달리티, 규모를 확장하며 하나의 계보를 형성했다.

아래는 이 계보의 핵심 노드와 각 연구의 기여를 시간순으로 정리한 것이다.

| 연도 | 연구 | 핵심 기여 | Voyager에서 확장된 점 |
| --- | --- | --- | --- |
| 2023 | Code-as-Policies | LLM 출력을 실행 가능한 코드로 | Voyager의 코드 기반 skill의 이론적 토대 |
| 2023 | ReAct | 추론(Reason)과 행동(Act) 결합 | Voyager가 비교 대상으로 삼은 baseline |
| 2023 | Voyager | 자율 기술 축적 + 평생학습 | 기원점 |
| 2024 | Eureka | LLM으로 로봇 보상 함수 자동 설계 | 게임 -> 로보틱스 도메인 확장 |
| 2024 | AI Scientist v2 | 과학 연구의 자동화 — 관련 보고서 | 게임 → 지식 도메인 확장 |
| 2025 | GR00T | 휴머노이드 범용 에이전트 | 시뮬레이션 → 현실 세계 전이 |
| 2025 | Hermes | 다중 에이전트 자가 진화 — 데이터 품질 리스크 · 사용자와 함께 성장 | 단일 → 다중 에이전트 확장 |

[../../../project/AgenticAI/ai-scientist-v2/ko/](../../../project/AgenticAI/ai-scientist-v2/ko/)[../../ai-science-new-era/ko/](../../ai-science-new-era/ko/)[../../../project/AgenticAI/isaac-groot/ko/](../../../project/AgenticAI/isaac-groot/ko/)[../../hermes-agent-data-quality-risk/ko/](../../hermes-agent-data-quality-risk/ko/)[../../hermes-agent-growth-with-user/ko/](../../hermes-agent-growth-with-user/ko/)

이 계보에서 특히 주목할 것은 Jim Fan 팀의 궤적이다. Voyager의 공동 저자인 Jim Fan은 NVIDIA에서 GEAR Lab을 이끌며, Voyager(2023) - Eureka(2024) - GR00T(2025~2026)로 이어지는 연구 경로를 직접 설계했다. 이는 학술 연구가 산업 제품으로 전환되는 실증 사례이며, Voyager의 아키텍처 원칙이 게임을 넘어 현실 로보틱스까지 확장될 수 있음을 보여준다.

각 후속 연구는 도메인을 확장하면서도 Voyager의 핵심 원칙 "curriculum - skill accumulation - self-verification"을 그대로 계승한다. AI Scientist는 과학 실험을 skill로 축적하고([관련 보고서](../../ai-science-new-era/ko/)), Hermes는 다중 에이전트 간 skill을 공유하며([관련 보고서](../../hermes-agent-data-quality-risk/ko/)), GR00T은 물리적 동작을 skill로 학습한다. 패턴은 동일하되, 규모와 복잡성이 기하급수적으로 증가한다.

![Minecraft 엔드 월드 — 게임의 끝점이자 자율 에이전트 계보의 분기점](./image/img-04-voyager-minecraft-end.png)
*▲ Minecraft 엔드 월드. 게임 자체의 종착점이지만, 자율 에이전트 계보는 이 너머에서 시작된다 — 게임에서 과학(AI Scientist), 로보틱스(Eureka·GR00T), 다중 에이전트(Hermes)로 | Source: Xbox México, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Screenshot_from_the_Minecraft_End.png) (CC BY 3.0)*

## Minecraft에서 현실로 — Physical AI와 Sim-to-Real Gap

"Minecraft에서 잘 작동하면 현실 세계에서도 작동하는가?" 이 질문은 Voyager 발표 이후 가장 빈번하게 제기된 의문이다. 답은 아직 "부분적"이지만, 그 격차는 빠르게 좁혀지고 있다.

Jim Fan 팀의 연구 궤적이 이를 실증한다. Voyager가 Minecraft에서 자율 기술 축적을 증명한 후, Eureka(2024)는 시뮬레이션 환경(Isaac Gym)에서 로봇 보상 함수를 자동 설계하여 인간 작성 보상보다 **80% 이상의 과제**에서 우수한 성능을 달성했다. 그리고 GR00T N1(2025)은 **11시간의 합성 데이터 생성**으로 6,500시간 등가의 실제 훈련 데이터를 확보했다. 이는 **591배**의 효율 비율이다.

이 효율 차이의 경제적 함의는 막대하다. 실세계 텔레오퍼레이션으로 6,500시간의 로봇 학습 데이터를 수집하면 약 $884K(약 12억 원)가 소요되지만, Isaac Sim에서 11시간이면 약 $10K(약 1,400만 원) 수준이다. Voyager가 증명한 "제어된 환경에서의 효율적 학습"이 산업적으로 실현되고 있는 것이다.

> [!callout]
> Physical AI 시장은 CAGR **47.2%**로 성장하여 2032년 **$15.24B**에 달할 것으로 전망된다(MarketsandMarkets). 휴머노이드 기업의 2025년 조달액은 **$3.2B**로, 이전 6년 합계를 초과했다. Foxconn이 실제 Blackwell 생산 라인에 AI 로봇을 배포하는 등, 파일럿에서 양산으로의 전환이 시작되었다. 이 시장의 핵심 인프라 계층에 시뮬레이션 기반 학습과 합성 데이터가 자리잡고 있으며, 그 학술적 원형이 Voyager의 Minecraft 실험이다.

그러나 sim-to-real gap은 여전히 핵심 도전 과제다. Minecraft는 물리 법칙이 단순화되어 있고, 센서 노이즈가 없으며, 행동 공간이 이산적이다. 현실 세계의 로봇은 연속적 동작 공간, 부정확한 센서, 예측 불가능한 환경 변동에 직면한다. GR00T N2의 World Action Model(WAM)이 새 환경 적응 성공률을 **2배** 높였다는 것은 이 격차를 좁히려는 공학적 노력의 결과이지, 격차가 사라졌다는 의미는 아니다.

흥미로운 점은 후속 연구들이 Voyager의 텍스트 전용 한계를 멀티모달로 확장하면서도, 핵심 아키텍처 패턴은 그대로 유지하고 있다는 것이다. Optimus-2(CVPR 2025)는 시각 정보를 통합했고, V-JEPA 2는 62시간의 무라벨 로봇 데이터로 zero-shot 제어를 달성했다. 도메인과 모달리티가 달라져도 "curriculum - skill accumulation - self-verification" 패턴은 보편적으로 적용된다.

![Minecraft 네더 — 빨간 용암과 검은 돌의 극단적 가상 환경, 시뮬레이션과 현실의 간극 은유](./image/img-05-voyager-minecraft-nether.png)
*▲ Minecraft 네더 — 빨간 용암, 검은 돌, 천장이 닫힌 지하 차원. Voyager는 이런 가상의 극단 환경에서도 안전하게 학습하지만, 현실의 로봇이 마주하는 센서 노이즈·예측 불가능한 변동은 여전히 다른 차원의 문제다 | Source: Xbox México, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Screenshot_from_the_Minecraft_Nether.png) (CC BY 3.0)*

## 자가 학습의 아킬레스건 — 자동 평가의 데이터 품질 문제

Voyager의 가장 강력한 특징은 동시에 가장 취약한 지점이다. Self-verification, 즉 "GPT-4가 자신의 성공을 스스로 판단하는" 구조가 그것이다. Minecraft에서는 성공 기준이 비교적 명확하다. 다이아몬드를 채굴했는가, 인벤토리에 아이템이 추가되었는가 등의 이진(binary) 피드백이 존재하기 때문이다. 그러나 이 명확성이 Voyager의 self-verification이 작동하는 필요 조건이라는 사실을 간과해서는 안 된다.

Huang et al.(ICLR 2024)은 외부 피드백 없는 LLM의 intrinsic self-correction이 오히려 성능을 저하시킴을 실증했다. LLM은 자신의 출력이 올바른지 스스로 판단할 때, 올바른 답을 틀린 답으로 바꾸는 경우가 상당히 발생한다. 의학 참조 생성에서 GPT-4의 환각률은 **28.6%**, 정밀도(precision)는 **13.4%**에 불과했다.

이 문제가 Voyager의 skill library에 어떻게 작용하는지 생각해보자. 에이전트가 코드를 실행하고, GPT-4가 "성공"이라고 판단하면, 그 코드는 library에 영구적으로 저장된다. 만약 이 판단이 잘못되었다면 -- 실제로는 부분적으로만 성공했거나, 특정 조건에서만 작동하는 코드였다면 -- 오염된 skill이 library에 축적된다. 이후 이 skill이 새로운 과제에서 검색되어 재사용될 때, 오류가 전파되고 증폭된다.

이것이 **Error Fossilization(오류 화석화)**의 원형이다. 한 번 "성공"으로 기록된 오류 코드는 library에서 제거되지 않으며, 시간이 지날수록 compound error를 일으킨다. 이 현상은 페블러스가 [hermes-agent 데이터 품질 위험 분석 보고서](../../hermes-agent-data-quality-risk/ko/)에서 상세히 분석한 Feedback Loop Contamination의 학술적 원형에 해당한다.

![Minecraft 크리퍼 — 한 번의 폭발로 누적된 skill을 무너뜨리는 위험의 상징](./image/img-06-voyager-creeper.png)
*▲ 크리퍼는 Minecraft에서 가장 유명한 폭발 위험. 자가 검증으로만 학습한 에이전트가 누적해온 skill library도 검증 안 된 한 코드가 폭발하면 한꺼번에 무너진다 — Error Fossilization의 시각적 은유 | Source: Xbox México, [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Minecraft_Creeper_(Crop).png) (CC BY 3.0)*

### 6.1 자가 검증 신뢰도의 스펙트럼

자가 검증의 신뢰도는 환경의 성공 기준 명확성에 비례한다. 아래는 이 스펙트럼을 정리한 것이다.

| 환경 | 성공 기준 | 자가 검증 신뢰도 | Error Fossilization 위험 |
| --- | --- | --- | --- |
| Minecraft | 이진(아이템 획득 여부) | 높음 | 낮음 |
| 시뮬레이션 로봇 | 연속적(보상 함수) | 중간 | 중간 |
| 과학 연구 | 복합적(재현성, 참신성) | 낮음 | 높음 |
| 현실 세계 로봇 | 모호(안전, 효율, 적응) | 매우 낮음 | 매우 높음 |

Minecraft에서 Voyager의 self-verification이 효과적이었던 것은 이 환경이 스펙트럼의 가장 안전한 끝에 위치하기 때문이다. 현실 세계로 이동할수록 성공 기준의 모호성이 증가하고, 자가 검증만으로는 데이터 품질을 보장할 수 없게 된다. 에이전트가 자율적일수록 독립적 검증이 더 중요해진다 -- 이것이 Voyager가 우리에게 남긴 핵심 교훈이다.

## 페블러스가 이 연구에 주목하는 이유

Voyager에서 AI Scientist, Hermes까지 이어지는 자율 에이전트 계보를 관통하는 하나의 질문이 있다. **"자가 학습하는 에이전트의 학습 데이터를 신뢰할 수 있는가."** 페블러스는 이 질문에 대한 구조적 해답을 제시하는 위치에 있다.

### 아키텍처의 구조적 동형성

Voyager의 4단계 루프(관찰 - 계획 - 실행 - 검증)는 DataGreenhouse의 OOGA 루프(Observe - Orchestrate - Action - Govern)와 구조적으로 동형이다. Voyager가 Minecraft에서 skill을 축적하듯, AADS(Autonomous Agent Data System)는 데이터 파이프라인에서 품질 개선 액션을 자율적으로 축적한다. 동일한 원리가 다른 도메인에서 작동하고 있다.

### 데이터 품질: 에이전트 시대의 핵심 병목

Voyager의 가장 취약한 지점이 자동 평가라는 사실은, DataClinic의 핵심 가정 -- "훈련 데이터의 품질이 모델 성능의 상한을 결정한다" -- 이 에이전트 자가 생성 데이터에도 동일하게 적용됨을 보여준다. GPT-4 환각률 28.6%, LLM 검증기의 false positive 편향, intrinsic self-correction의 성능 저하 실증은 모두 같은 결론을 가리킨다. 에이전트가 스스로 생성한 데이터를 에이전트 자신이 검증하는 것에는 근본적 한계가 있다.

### 제조/로보틱스 도입 시 실무 프레임워크

Voyager의 실험 결과는 에이전트 기반 자동화를 도입하는 기업에게 명확한 판단 기준을 제시한다.

- •**자가 학습이 안전한 조건**: 제어된 환경(시뮬레이션), 명확한 성공 기준(binary outcome), 짧은 피드백 루프
- •**외부 검증이 필수인 조건**: 모호한 피드백, 장기 drift, 복합적 성공 기준, 실세계 배포

Foxconn이 Blackwell 생산 라인에 AI 로봇을 배포하는 시점에서, "로봇이 스스로 학습한 조작 기술의 품질을 어떻게 보장하는가"는 더 이상 학술적 질문이 아니라 실무적 과제다. DataClinic은 에이전트가 자가 생성한 데이터(skill code, 실험 결과, 학습 로그)의 품질을 에이전트 자신이 아닌 독립적 시스템으로 진단하는 외부 검증자 역할을 수행한다.

### 계보를 관통하는 하나의 메시지

Voyager - AI Scientist - Hermes 계보의 각 단계에서 "자가 생성 데이터의 품질 문제"가 반복적으로 등장한다. Voyager에서는 skill library에 오염된 코드가 축적되는 위험, AI Scientist에서는 자동 생성된 실험 결과의 검증 문제, Hermes에서는 다중 에이전트 간 오염 데이터 전파 위험이 그것이다.

> [!callout]
> 페블러스가 이 계보에서 확보한 메시지는 명확하다. **에이전트가 스스로 학습할수록, 독립적인 데이터 품질 검증이 더 중요해진다.** 본 보고서는 그 메시지의 학술적 기원점을 제공하며, 기발행 보고서들([Hermes 데이터 품질 위험](../../hermes-agent-data-quality-risk/ko/), [Hermes 에이전트 성장](../../hermes-agent-growth-with-user/ko/), [AI Scientist v2](../../../project/AgenticAI/ai-scientist-v2/ko/), [AI가 과학 논문을 쓰는 시대](../../ai-science-new-era/ko/), [AI가 틀렸는데 아무도 말하지 않는다](../../ai-psychosis-agentic-governance-2026-05/ko/))과 함께 "자율 에이전트 시대의 데이터 품질" 시리즈의 원점으로 기능한다.

## 참고문헌

### 핵심 논문

- 1.Wang, G., Xie, Y., Jiang, Y., et al. (2023). "Voyager: An Open-Ended Embodied Agent with Large Language Models." _NeurIPS 2023_. [arXiv:2305.16291](https://arxiv.org/abs/2305.16291)
- 2.Shinn, N., et al. (2023). "Reflexion: Language Agents with Verbal Reinforcement Learning." _NeurIPS 2023_. [arXiv:2303.11366](https://arxiv.org/abs/2303.11366)
- 3.Madaan, A., et al. (2023). "Self-Refine: Iterative Refinement with Self-Feedback." _NeurIPS 2023_. [arXiv:2303.17651](https://arxiv.org/abs/2303.17651)
- 4.Huang, J., et al. (2024). "Large Language Models Cannot Self-Correct Reasoning Yet." _ICLR 2024_. [arXiv:2310.01798](https://arxiv.org/abs/2310.01798)
- 5.Lu, C., et al. (2024). "The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery." _Nature 651_. [arXiv:2408.06292](https://arxiv.org/abs/2408.06292)
- 6.Li, Z., et al. (2025). "Optimus-2: Multimodal Minecraft Agent with GOAP." _CVPR 2025_. [arXiv:2502.19902](https://arxiv.org/abs/2502.19902)
- 7.Fan, L., et al. (2022). "MineDojo: Building Open-Ended Embodied Agents with Internet-Scale Knowledge." _NeurIPS 2022 Outstanding Paper_. [arXiv:2206.08853](https://arxiv.org/abs/2206.08853)
- 8.Ma, Y., et al. (2024). "Eureka: Human-Level Reward Design via Coding Large Language Models." _ICLR 2024_. [arXiv:2310.12931](https://arxiv.org/abs/2310.12931)
- 9.Liang, J., et al. (2023). "Code as Policies: Language Model Programs for Embodied Control." _ICRA 2023_. [arXiv:2209.07753](https://arxiv.org/abs/2209.07753)
- 10.Yao, S., et al. (2023). "ReAct: Synergizing Reasoning and Acting in Language Models." _ICLR 2023_. [arXiv:2210.03629](https://arxiv.org/abs/2210.03629)

### 후속 연구

- 11.Wang, Z., et al. (2023). "DEPS: Describe, Explain, Plan and Select." [arXiv:2302.01560](https://arxiv.org/abs/2302.01560)
- 12.Zhu, X., et al. (2023). "Ghost in the Minecraft (GITM)." [arXiv:2305.17144](https://arxiv.org/abs/2305.17144)
- 13.Wang, Z., et al. (2023). "JARVIS-1: Open-world Multi-task Agents with Memory-Augmented Multimodal Language Models." [arXiv:2311.05997](https://arxiv.org/abs/2311.05997)
- 14."RL-GPT: Integrating Reinforcement Learning and Code-as-Policy." _NeurIPS 2024_. [arXiv:2402.19299](https://arxiv.org/abs/2402.19299)
- 15."Odyssey: Empowering Minecraft Agents with Open-World Skills." _IJCAI 2025_. [IJCAI Proceedings](https://www.ijcai.org/proceedings/2025/)
- 16."AutoSkill: Experience-Driven Lifelong Learning via Skill Self-Evolution" (2025). [arXiv:2603.01145](https://arxiv.org/abs/2603.01145)
- 17."LifelongAgentBench: Evaluating LLM Agents as Lifelong Learners" (2025). [arXiv:2505.11942](https://arxiv.org/abs/2505.11942)

### 업계 및 시장 출처

- 18.NVIDIA Newsroom — GR00T N1/N2, Cosmos 발표 (GTC 2025~2026). [nvidianews.nvidia.com](https://nvidianews.nvidia.com/)
- 19.MarketsandMarkets — Physical AI Market $15.24B by 2032 (CAGR 47.2%). [marketsandmarkets.com](https://www.marketsandmarkets.com/Market-Reports/physical-ai-market.asp)
- 20.Goldman Sachs — 휴머노이드 로봇 시장 전망 ($38B~$154B by 2035). [goldmansachs.com](https://www.goldmansachs.com/insights/articles/the-global-market-for-robots-could-reach-38-billion-by-2035)
- 21.Stanford Vision and Robotics Center — Robot Data Collection Cost Breakdown (2026). [svrc.stanford.edu](https://svrc.stanford.edu/)

### 관련 페블러스 보고서

- 22.[Hermes 에이전트 데이터 품질 리스크 분석](../../hermes-agent-data-quality-risk/ko/)
- 23.[에이전트도 성장한다: Hermes Agent와 자율형 데이터 운영체제](../../hermes-agent-growth-with-user/ko/)
- 24.[AI가 과학 논문을 쓰는 시대](../../ai-science-new-era/ko/)

## FAQ
