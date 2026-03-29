# 리서치: 하네스 (Harness) — AI 에이전트 협업 시스템

## 주제 정의

하네스(Harness)는 AI 에이전트 팀을 설계하고 조율하는 메타 시스템이다. 각 에이전트의 역할(누가)과 스킬(어떻게)을 분리하여 정의하고, 오케스트레이터가 이들을 하나의 워크플로우로 엮어 복잡한 작업을 자동으로 수행하게 한다. Anthropic의 Claude Agent SDK를 기반으로 하며, 에이전트 정의 파일(.claude/agents/)과 스킬 파일(.claude/skills/)로 구성된다. "하네스"라는 이름 자체가 여러 마리의 말을 하나의 마차에 연결하는 도구(馬具)에서 유래한다.

## L1 — 초등학생용 재료

### 비유 후보
- 요리팀: 셰프 한 명은 고기, 한 명은 샐러드, 주방장이 순서 조율. 하네스는 AI 요리사팀 + 주방장 시스템
- 오케스트라: 지휘자가 "바이올린 시작, 플루트 들어와" 지시. 하네스는 AI 연주자들에게 악보(스킬) + 지휘자(오케스트레이터)
- 축구팀: 공격수/미드필더/수비수/감독. 하네스는 AI 선수들에게 포지션(에이전트) + 플레이북(스킬) + 감독(오케스트레이터)

### 이야기 소재
- 한 명이 숙제를 다 하는 것 vs 친구 4명이 나눠서 하는 것
- 레고 세트를 여러 명이 동시에 만드는 모습

### 핵심 메시지
"AI 로봇 한 마리보다, 잘 조직된 AI 로봇 팀이 훨씬 잘한다."

## L2 — 중고등학생용 재료

### 핵심 원리
1. 분업(Division of Labor): 복잡한 작업을 전문 영역으로 나눈다
2. 에이전트(Agent) = 전문가 역할: 각 AI에게 구체적인 역할 부여
3. 스킬(Skill) = 작업 매뉴얼: 각 에이전트가 참조하는 상세 가이드
4. 오케스트레이션(Orchestration) = 전체 조율: 순서와 데이터 흐름 정의

### 대표 사례 / 기업
- ChatGPT Plugins (OpenAI): AI가 웹 검색, 코드 실행, 이미지 생성 등 여러 도구 사용
- GitHub Copilot Workspace: 코드 리뷰, 테스트, 리팩토링을 여러 AI가 협업
- Anthropic Claude Code: 파일 탐색, 코드 작성, 테스트 실행을 에이전트 루프에서 수행
- PebbloPedia 제작 파이프라인: 이 블로그 자체가 하네스로 만들어짐 — researcher → writer → publisher 3개 에이전트 순차 협업

### 실생활 접점
- 학교 조별과제: 역할 나누기, 중간 결과 공유, 최종 합치기
- 유튜브 영상 제작: 기획 → 촬영 → 편집 → 썸네일 → 업로드

## L3 — 전공 대학생용 재료

### 기술 스택
- Claude Agent SDK (Python/TypeScript): Anthropic 2025년 출시, 서브 에이전트 패턴 네이티브 지원
- Model Context Protocol (MCP): 2024년 11월 Anthropic 공개, AI와 외부 도구 연결 표준화. 2025년 3월 v2 (Streamable HTTP, OAuth 2.1). OpenAI, Google, Microsoft 모두 채택
- TeamCreate / SendMessage / TaskCreate: 에이전트 팀 생성, 팀원 간 통신, 공유 작업 목록 관리
- Agent Tool: subagent_type, model, run_in_background 파라미터로 서브 에이전트 스폰

### 아키텍처 패턴
| 패턴 | 구조 | 적합 사례 |
|------|------|----------|
| 파이프라인 | A→B→C→D | 소설 집필 (세계관→캐릭터→플롯→집필) |
| 팬아웃/팬인 | 분배→[A,B,C]→통합 | 종합 리서치 (4개 채널 병렬→통합) |
| 전문가 풀 | 라우터→{A|B|C} | 코드 리뷰 (보안/성능/아키텍처 중 선택) |
| 생성-검증 | 생성→검증→(재생성) | 웹툰 (artist→reviewer→fix) |
| 감독자 | 감독자↔[워커들] | 대규모 코드 마이그레이션 |
| 계층적 위임 | 총괄→팀장→실무자 | 풀스택 앱 개발 |

### 파일 구조
.claude/
├── agents/     # 에이전트 정의 (누가)
└── skills/     # 스킬 정의 (어떻게)

### 구현 포인트
- 에이전트와 스킬의 분리: 에이전트는 "누가"(페르소나+원칙), 스킬은 "어떻게"(절차+번들)
- Progressive Disclosure: Metadata(항상) → skill.md 본문(트리거 시) → references/(필요 시만)
- 데이터 전달: 메시지 기반(SendMessage) + 태스크 기반(TaskCreate) + 파일 기반(_workspace/)
- 실행 모드 이원화: 에이전트 팀(기본) vs 서브 에이전트(경량)

## L4 — 전문가용 재료

### 최신 연구
1. "Multi-Agent Collaboration Mechanisms: A Survey of LLMs" (Tran et al., arXiv 2501.06322, 2025년 1월) — 협력/경쟁/공경쟁 유형과 peer-to-peer/중앙집중/분산 구조 프레임워크
2. "COPPER: Reflective Multi-Agent Collaboration based on LLMs" (NeurIPS 2024) — Counterfactual PPO로 에이전트 기여도 평가 (credit assignment problem 접근)
3. "Chain-of-Agents (CoA)" (NeurIPS 2024) — 순차 처리 worker + manager 통합. RAG 대비 최대 10% 성능 향상
4. "Multi-Agent Collaboration via Evolving Orchestration" (NeurIPS 2025) — RL 기반 동적 오케스트레이터
5. "On the Resilience of LLM-Based Multi-Agent Collaboration with Faulty Agents" (arXiv 2025) — star-topology가 분산 구조 대비 오류 전파 효과적 억제

### 프레임워크 비교 (2025-2026 기준)
| 프레임워크 | 개발사 | 강점 | 약점 |
|----------|--------|------|------|
| Claude Agent SDK | Anthropic | 네이티브 팀 통신, MCP 생태계 | Claude 전용 |
| LangGraph | LangChain | 세밀한 상태 관리, 옵저버빌리티 | 학습 곡선 |
| CrewAI | CrewAI Inc. | 빠른 프로토타이핑 | 동적 적응력 제한 |
| AutoGen | Microsoft Research | Human-in-the-loop | 복잡한 학습 곡선 |
| OpenAI Agents SDK | OpenAI | OpenAI 생태계 통합 | Swarm에서 전환 중 |
| Google ADK | Google | 에이전트별 내장 메모리 | 후발 |

### 산업 수치
- Gartner (2025.8): 2026년 말까지 엔터프라이즈 앱의 40%가 태스크 특화 AI 에이전트 통합 (2025년 기준 5% 미만)
- Gartner: 다중 에이전트 문의 2024 Q1 대비 2025 Q2까지 1,445% 급증
- Gartner: 2028년까지 AI 앱의 70%가 다중 에이전트 시스템 사용 전망
- Grand View Research: AI 에이전트 시장 2025년 76.3억 달러 → 2033년 1,829.7억 달러 (CAGR 49.6%)
- IDC: AI 투자 총액 2029년까지 1.3조 달러 (연 31.9% 성장)

### 미해결 문제
1. Credit Assignment Problem: 에이전트 기여도 정확 측정 범용 해법 부재
2. 결함 에이전트 견고성: 오류 에이전트가 전체 시스템 오염
3. 컨텍스트 윈도우 관리: 에이전트 수 증가 시 조율 오버헤드 급증
4. 보안: 프롬프트 인젝션, MCP 취약점 (2025년 4월 다수 공개)
5. 평가 표준 부재: 다중 에이전트 성능 비교 벤치마크 미확립

## L5 — 위자드용 재료

### 뒤집히는 가정
- "AI는 도구다" → 하네스 이후 인간은 AI 팀의 감독자. 존재론적 관계 전환
- "더 똑똑한 AI가 더 나은 결과" → 잘 조직된 보통 AI 팀이 더 나은 결과. 지능은 개체의 속성인가, 시스템의 속성인가?

### 철학적 의미
- 분업의 재발명: 애덤 스미스 『국부론』(1776) 핀 공장 분업 → 250년 후 AI 노동으로 확장. AI는 즉시 복제/재구성/해체 가능 — "순수한 분업" 실현
- 관리자의 역할: 인간에 남는 것은 순수한 의사결정과 가치 판단
- 메타 노트의 역설: 이 글 자체가 하네스로 만들어짐. 에셔의 그림처럼 그리는 손이 그려지는 손을 그린다

### 시적 이미지
- 마구(馬具)에서 신경망으로: 물리적 끈 → 논리적 끈, 근육의 조율 → 지능의 조율
- 지휘자 없는 오케스트라: 에이전트 팀은 클래식(지휘자)이 아니라 재즈 밴드(즉흥+상호반응)
- 1인 기업의 재발명: 혼자지만 10명의 AI 팀을 지휘하는 개인. 창업 비용이 아이디어의 질로 수렴

### 패러다임 전환
- 프로그래밍에서 오케스트레이션으로: 코드(구현) → 마크다운(설계). 자연어로 시스템 설계하는 시대

## SEO
- 메인 키워드: AI 에이전트 협업, 하네스
- 롱테일: AI 에이전트 팀 시스템이란, Claude Agent SDK, 멀티 에이전트 프레임워크 비교, LangGraph CrewAI AutoGen 차이점, MCP란, AI 오케스트레이터 설계

## 메타데이터
- tags: ["AI 에이전트", "멀티에이전트", "하네스", "Claude Agent SDK", "MCP", "오케스트레이션", "AI 협업", "LangGraph"]
- 예상 읽기 시간: ~12분
- 특이사항: meta_note 필수, PebbloPedia 파이프라인 자체가 하네스 실제 사례
