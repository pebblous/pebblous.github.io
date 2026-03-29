# 리서치 B: Vibe Coding & AI 연구 자동화 맥락

## Vibe Coding이란

### 정의와 기원

**Andrej Karpathy**가 2025년 2월 2일 X(구 Twitter)에 올린 포스트에서 최초 정의:

> "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes, embrace exponentials, and forget that the code even exists."

**핵심 특징:**
- Accept All을 항상 누르고, diff를 더 이상 읽지 않는다
- 에러 메시지가 나오면 코멘트 없이 복사-붙여넣기
- AI에게 완전 위임, 자연어 인터페이스, 결과 중심
- 원래 "주말 프로젝트용"으로 소개했으나 폭발적 반향

**문화적 임팩트:**
- Merriam-Webster 2025년 3월 "slang & trending" 등재
- Collins English Dictionary 2025년 올해의 단어 선정
- Y Combinator 2025년 Winter 배치의 25%가 코드베이스 95% AI 생성

### Vibe Coding의 한계

GenAI Code Security Report 2025(Veracode): AI 생성 코드의 **45%**에 보안 취약점
5개 주요 vibe coding 도구 비교 평가: 15개 앱에서 **69개 취약점** 발견 (critical 포함)

### Karpathy의 진화: Vibe Coding → Agentic Engineering (2026년 2월)

Karpathy 본인이 2026년 2월 vibe coding을 "passé"(구식)라 선언하고 **"agentic engineering"**으로 전환:
> "'agentic' — 에이전트가 99% 코드를 직접 쓰고 당신은 감독하기 때문. 'engineering' — 거기에 기술과 과학, 전문성이 있기 때문."

### Vibe Physics = Vibe Coding의 과학 버전

Harvard 물리학 교수 Matthew Schwartz가 Anthropic 블로그에 2026년 3월 23일 게스트 포스트 "Vibe Physics: The AI Grad Student"를 발표하면서 탄생.

| Vibe Coding | Vibe Physics |
|------------|-------------|
| AI가 코드를 생성 | AI가 수식을 유도하고 논문을 작성 |
| 개발자가 결과만 확인 | 물리학자가 물리적 타당성만 확인 |
| 보안 취약점 위험 | 물리적 오류 위험 |

**차이점:** Vibe Coding은 원래 "검증 없이 받아들이기"가 핵심이었지만, Vibe Physics에서 Schwartz는 매 단계를 엄격히 검증 — 이것이 "성공적" vibe physics의 조건.

---

## AI 연구 자동화 현황 (2026)

### 주요 사례들

| 프로젝트 | 기관 | 성과 | 한계 |
|---------|------|------|------|
| **AI Scientist v2** | Sakana AI / UBC / Oxford | Nature 게재 (2026.3), 논문 1편 $6-15 | 문헌 검토 피상적, "동기 없는 학부생" 수준 |
| **AlphaProof** | Google DeepMind | IMO 2024 은메달 수준 (4/6 문제) | 조합론 문제 미해결, Lean 번역 필요 |
| **Gemini Deep Think** | Google DeepMind | IMO 2025 금메달 (5/6, 35점), 4.5시간 | 조합론 1문제 미해결 |
| **FunSearch** | Google DeepMind | Cap Set 문제 신기록, bin-packing 개선 | 완전 자율 아님 |
| **Vibe Physics (Schwartz)** | Harvard + Claude | QFT 논문 2주 완성, 새 인수분해 정리 발견 | 오류 빈번, 도메인 전문가 감독 필수 |
| **Gluon 산란 발견** (2026.2) | arXiv (GPT-5.2 Pro) | 인간이 불가능하다 판단한 공식 발견 | 인간 연구자가 구체 사례 먼저 계산 |

### 공통 패턴

1. **인간-AI 협업이 핵심:** 완전 자율 연구는 아직 없음
2. **속도 가속:** 인간 혼자 수년 걸릴 작업을 수주 내 완료 (Schwartz: 10배)
3. **검증 병목:** AI가 틀린 답을 자신있게 제시 → 검증이 가장 비싼 단계
4. **형식 검증의 중요성:** Lean, 기하 공리 등 형식 시스템 있는 분야에서 가장 큰 성과

---

## 이론물리학 특수성

### AI에게 어려운 이유

1. **물리적 직관의 부재:** "어떤 근사가 적절한가" 판단 필요
2. **검증의 어려움:** 코드는 테스트로 검증 가능, 새로운 물리 이론은 수년~수십년 소요
3. **오류의 은폐성:** 물리적으로 틀린 답이 수학적으로 타당해 보임

### AI에게 쉬운 부분

1. **대규모 수식 계산:** 고차 적분, 산란 진폭 계산
2. **문헌 종합:** 방대한 논문에서 관련 결과 찾기
3. **교차 검증:** GPT로 Claude의 작업을 검증, 그 반대도 수행

---

## "PhD 수준 AI" 예측 타임라인

| 인물/기관 | 예측 | 시기 |
|----------|------|------|
| **Dario Amodei** (Anthropic) | "데이터센터 안의 천재 국가" | ~2027년 |
| **Sam Altman** (OpenAI) | "GPT-5는 어떤 분야든 진짜 PhD급 전문가" | 현재 주장 |
| **Demis Hassabis** (DeepMind) | "PhD AI 주장은 넌센스. 핵심 역량 빠져있다" | 5-10년 후 |
| **Matthew Schwartz** (Harvard) | G1(2025.8) → G2(2025.12) → **PhD(2027.3경)** | ~2027년 3월 |
| **OpenAI 공식** | "자율 AI 연구 인턴" 2026년 9월 | 2026-2028 |

**Hassabis의 반론:** "특정 방식으로 질문하면 고등학교 수학도 틀린다 — 진정한 AGI라면 이런 일이 없어야."

---

## 블로그에 쓸 맥락 소재 TOP 5

1. **"Vibe Coding → Vibe Physics" 서사 라인** — Karpathy 2025.2에서 Schwartz 2026.3까지의 자연스러운 확장
2. **G1→G2→PhD 등급 시스템** — 독자에게 가장 직관적인 프레임
3. **DeepMind IMO 도약 (은메달→금메달)** — 1년 만에 AI 연구 자동화 속도 증명
4. **AI Scientist $15 논문** — 혁명적이지만 "동기 없는 학부생" 수준이라는 양날의 검
5. **"천재 국가 vs 고등학교 수학 실수" 대비** — Amodei vs Hassabis 균형 시각
