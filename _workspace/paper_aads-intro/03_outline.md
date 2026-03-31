# 논문 아웃라인 (사용자 제공)

## 제목
데이터클리닉에서 피지컬 AI까지: AADS 기반 합성데이터 플랫폼의 설계와 진화

## 출력 경로
`project/AADS/aads-intro/source/aads-intro-paper.md`

## 목표 분량
6페이지 (한국어, 약 4,000~5,000 단어)

---

## 핵심 기여 (Contribution)
1. 데이터클리닉 품질 검증 역량 → AADS 기술 접목 → Data Greenhouse + PebbloSim 설계 진화 경로 제시
2. 피지컬 AI 시대 합성데이터 기반 접근의 필요성 및 시장 가능성 분석
3. 뉴로-심볼릭 + Agentic AI 결합으로 데이터 희소 도메인 문제 해결 아키텍처 소개

---

## 섹션별 상세 계획

### [writer-A 담당] 초록 + 1. 서론
**초록** (~200단어)
- 피지컬 AI 시대 → 고품질 데이터 문제
- AADS 기반 두 플랫폼 (Data Greenhouse + PebbloSim) 소개
- 합성데이터 시장 가능성 논의
- 키워드: 피지컬AI, 합성데이터, AADS, Data Greenhouse, PebbloSim, 뉴로-심볼릭, 에이전틱AI

**1.1 피지컬 AI 시대의 데이터 문제** (~250단어)
- 디지털 AI → 피지컬 AI 패러다임 전환
- 시뮬레이션·합성데이터의 결정적 역할
- 데이터 희소 도메인(국방, 의료, 에너지) 구조적 한계

**1.2 연구 배경 및 목적** (~250단어)
- 페블러스 데이터클리닉 품질 검증 사례 축적
- 에이전틱 데이터클리닉으로의 전환
- Data Greenhouse + PebbloSim 통한 피지컬 AI 시장 진출
- 논문 구성 소개

소스: `project/AADS/source/`, `project/PhysicalAI/source/`, `project/DataGreenhouse/source/`

---

### [writer-B 담당] 2. 관련 산업 동향
**2.1 피지컬 AI 시장 동향** (~300단어)
- NVIDIA Omniverse, Isaac Sim, Cosmos
- Tesla Optimus, Figure AI 휴머노이드 로봇
- Sim-to-Real 확산
- 글로벌 피지컬 AI 시장 규모·전망 (수치 필수)

**2.2 합성데이터 시장 동향** (~200단어)
- Gartner 전망 (2030년 대부분 합성데이터)
- 주요 기업 동향
- Physical AI 합성데이터 수요

**2.3 AI 에이전트와 데이터 자동화** (~200단어)
- 에이전틱 AI 부상
- LLM 기반 데이터 생성·검증·거버넌스
- 멀티에이전트 시스템 데이터과학 적용

소스: `project/PhysicalAI/source/`, `project/DataGreenhouse/source/`, `project/IR/source/`, 외부 문헌

---

### [writer-C 담당] 3. 데이터클리닉 + 4. AADS
**3.1 데이터클리닉 서비스 개요** (~200단어)
- 진단 → 처방 → 치료 클리닉 모델
- ISO/IEC 5259 기반 품질 검증

**3.2 데이터클리닉의 한계와 진화** (~150단어)
- 수작업 확장성 한계
- 에이전틱 전환 필요성

**4.1 AADS 기술 개요** (~200단어)
- AADS 정의·설계 철학 (Agentic AI Data Scientist)
- 자율 에이전트 아키텍처 (수집→정제→생성→검증→거버넌스)
- 뉴로-심볼릭 접근

**4.2 핵심 기술 요소** (~250단어)
- 뉴로-심볼릭 합성 엔진
- RLHF 기반 품질 보증
- 커리큘럼 러닝
- 멀티에이전트 강화학습(MARL)

소스: `project/AADS/source/`, `project/ISO5259/source/`, `project/NeuroSymbolicAI/source/`

---

### [writer-D 담당] 5. Data Greenhouse + 6. PebbloSim
**5.1 Data Greenhouse 설계 철학** (~150단어)
- "데이터가 자라는 온실" — 재배 관점
- 데이터 생애주기 전체 거버넌스
- AADS 자율 육성·검증·배포

**5.2 Data Greenhouse 아키텍처** (~250단어)
- 도메인 온톨로지·지식 그래프 계층
- 합성데이터 생성 파이프라인
- 품질 검증 자동화 (ISO/IEC 5259)
- 데이터 카탈로그·메타데이터
- AI-Ready 데이터 패키지

**6.1 PebbloSim 설계 철학** (~150단어)
- 고충실도 시뮬레이션
- Sim-to-Real 전이
- Data Greenhouse 연동

**6.2 PebbloSim 아키텍처** (~200단어)
- 시뮬레이션 환경 (OpenAI Gym 호환)
- 멀티모달 합성데이터 생성
- 뉴로-심볼릭 검증

**6.3 적용 사례** (~150단어)
- 군사 의사결정 지원 (MDMP)
- 자율주행 에지 케이스
- 로봇 조작

소스: `project/DataGreenhouse/`, `project/PebbloSim/`, `project/AADS/demo01/`

---

### [writer-E 담당] 7. 진화 경로 + 8. 결론 + 참고문헌
**7.1 세 단계 연결 구조** (~200단어)
- 데이터클리닉(진단·치료) → Data Greenhouse(재배·거버넌스) → PebbloSim(시뮬레이션·합성)

**7.2 AADS가 만든 차별화** (~200단어)
- 도메인 지식 + 자율 에이전트 = 확장 가능 플랫폼
- 품질 검증 노하우 → 합성데이터 신뢰성 보증
- 수직 통합 구조

**8.1 요약** (~150단어)
- 기여 3가지 재요약

**8.2 향후 연구** (~150단어)
- 2026~ 추진 계획
- 합성 엔진 라이선싱 + AI-Ready 데이터 패키지
- 피지컬 AI 생태계 포지셔닝
- 한계점 명시 필수

**참고문헌**
- 내부 자료 (페블러스 문서) + 외부 학술 논문 통합
- IEEE 형식

---

## 인용 소스 인덱스 (내부)
[P1] `project/AADS/source/AADS 기술 기반 데이터 클리닉 2.0 및 AI-Ready 데이터 플랫폼 비전.pdf`
[P2] `project/AADS/source/대한민국 인공지능 국가전략과 페블러스 AADS의 연계 분석 및 전략 제언.pdf`
[P3] `project/AADS/demo01/251212_AADS 1차년도 발표자료_v1.11 main.pdf`
[P4] `project/DataGreenhouse/source/2025 데이터 품질관리 시장 분석 및 페블러스 AADS 차세대 전략.pdf`
[P5] `project/ISO5259/source/AI 데이터 품질 표준과 페블러스 데이터클리닉.pdf`
[P6] `project/NeuroSymbolicAI/source/뉴로-심볼릭 AI_ 엔터프라이즈 인텔리전스를 위한 코그니티브 데이터 아키텍처 v1.1.pdf`
[P7] `project/PhysicalAI/source/Physical AI 시대의 패권 경쟁_ 데이터 중심 생존 전략과 페블러스의 역할.pdf`
[P8] `project/IR/source/페블러스 투자 유치 제안서 v1.5.pdf`
[P9] `project/AADS/source/AADS LLM 파인튜닝용 QA 데이터셋 구축_ 로봇 분야 데이터품질 관점.md`
[P10] `project/AADS/source/AADS LLM 파인튜닝용 QA 데이터셋 구축_ 제조 분야.md`
