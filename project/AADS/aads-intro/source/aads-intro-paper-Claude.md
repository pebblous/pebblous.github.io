# 데이터클리닉에서 피지컬 AI까지: AADS 기반 합성데이터 플랫폼의 설계와 진화

**저자:** 이주행, 이정원
**소속:** (주)페블러스
**교신저자:** joohaeng@pebblous.ai
**투고일:** 2026년 3월

---

## 초록

피지컬 AI의 부상으로 제조, 로봇, 국방 등 물리적 환경에서 동작하는 AI 시스템의 수요가 급증하고 있으나, 이들 도메인의 학습 데이터는 구조적 희소성과 품질 관리의 어려움이라는 근본적 한계를 지닌다. 데이터 과학자 업무 시간의 80%가 수동적 데이터 준비 작업에 소요되는 현실은 자동화된 데이터 품질 관리 체계의 필요성을 시사한다 [1]. 본 논문에서는 에이전틱 AI 데이터 사이언티스트(Agentic AI Data Scientist, AADS) 기술을 기반으로, 데이터 품질 진단에서 합성데이터 생성, 시뮬레이션까지를 통합하는 두 플랫폼 — 데이터 거버넌스 플랫폼 Data Greenhouse와 피지컬 AI 시뮬레이션 플랫폼 PebbloSim — 의 설계와 진화 경로를 제시한다. AADS는 뉴로-심볼릭 AI 접근을 통해 신경망 기반 데이터 임베딩 분석과 온톨로지 기반 논리적 추론을 결합함으로써, 설명 가능한 진단과 자율적 처방을 수행한다 [2]. 아울러 피지컬 AI, 합성데이터, AI 에이전트 시장의 산업 동향을 분석하고, AADS 기반 접근의 차별화와 시장 가능성을 논의한다.

**키워드:** 피지컬 AI, 합성데이터, 에이전틱 AI, AI Scientist, 데이터 거버넌스, 뉴로-심볼릭 AI, Sim-to-Real

---

## 1. 서론

### 1.1 피지컬 AI 시대의 데이터 문제

인공지능 기술은 텍스트와 이미지를 생성하는 디지털 AI에서, 로봇·자율주행·디지털 트윈 등 현실 세계와 상호작용하는 피지컬 AI(Physical AI)로 패러다임이 전환되고 있다 [3][4]. NVIDIA는 Omniverse와 Isaac Sim을 통해 로봇 학습용 합성데이터를 대규모로 생성하는 체계를 구축하였으며, 2026년에는 합성데이터 생성-증강-평가를 통합한 Physical AI Data Factory Blueprint를 발표하였다 [5]. Tesla Optimus, Figure AI 등 휴머노이드 로봇 기업은 시뮬레이션 기반 Sim-to-Real 전이 학습을 핵심 전략으로 채택하고 있으며, Figure AI는 2024년 Series B에서 26억 달러, 2025년 Series C에서 390억 달러 기업가치를 기록하며 12개월 만에 15배 성장하였다 [6][7].

이러한 전환의 배경에는 시뮬레이션과 합성데이터의 결정적 역할이 자리한다. 그러나 국방, 의료, 에너지 등 데이터 희소 도메인에서는 보안 제약, 윤리적 한계, 물리적 실험 비용 등으로 인하여 충분한 학습 데이터를 수집하는 것이 사실상 불가능하다 [4]. Andrew Ng이 제창한 데이터 중심 AI(Data-Centric AI) 패러다임 [8]은 모델 아키텍처보다 데이터 품질이 AI 성능의 핵심 결정 요인임을 강조하며, 이러한 구조적 데이터 부족 문제의 해결을 촉구하고 있다.

### 1.2 연구 배경 및 목적

(주)페블러스 [29]는 데이터클리닉(DataClinic) [30] 서비스를 통해 다양한 산업 도메인에서 AI 학습 데이터의 품질을 진단·검증하는 역량을 축적해 왔다. ISO/IEC 5259 국제 표준에 기반한 품질 측정 기준을 내재화하여, 진단 결과가 국제 표준에 부합하는 품질 증적(Evidence)으로 활용될 수 있도록 설계되었다 [10]. 현대자동차, LG전자, LG유플러스, 한화비전 등에서의 PoC 검증과 조달청 혁신시제품 지정(2025), 세계 최초 ISO/IEC 5259-3 인증 등은 이 역량의 산업적 검증을 대변하며, Gartner는 페블러스를 진단과 개선을 결합한 '결합 서비스 모델(Paired Services Model)'의 대표 사례로 평가한 바 있다 [9].

본 논문은 데이터클리닉의 도메인 품질 검증 노하우를 AADS 기술로 확장하여 설계한 두 축의 플랫폼을 소개한다. Data Greenhouse는 데이터 생애주기 전체를 자율적으로 관리하는 거버넌스 플랫폼이며, PebbloSim은 피지컬 AI 학습을 위한 고충실도 합성데이터 시뮬레이션 플랫폼이다. 아울러 에이전틱 AI와 합성데이터 시장의 산업 동향을 분석하고, AADS 기반 접근이 갖는 차별화와 시장 가능성을 논의한다.

본 논문의 구성은 다음과 같다. 2장에서 피지컬 AI, 합성데이터, AI 에이전트 관련 산업 동향을 분석하고, 3장에서 AADS 이전 기반인 데이터클리닉을 소개한다. 4장에서 AADS의 기술 체계를 설명하고, 5장과 6장에서 각각 Data Greenhouse와 PebbloSim의 아키텍처를 기술한다. 7장에서 세 단계의 진화 경로를 논의하고, 8장에서 결론과 향후 전망을 제시한다.

---

## 2. 관련 산업 동향

### 2.1 피지컬 AI 시장 동향

피지컬 AI는 시각 언어 모델(VLM)과 시각 언어 행동 모델(VLA)을 기반으로 현실 세계에서 "보고 행동하는" 시스템을 구현한다. NVIDIA는 Omniverse를 피지컬 AI의 운영체제로 포지셔닝하고, Isaac Sim으로 로봇 시뮬레이션을, Cosmos 월드 파운데이션 모델로 합성 세계 생성을 지원한다 [4][5]. GTC 2026에서 발표된 Physical AI Data Factory Blueprint는 데이터 큐레이션, 증강, 평가를 단일 파이프라인으로 통합한 오픈 참조 아키텍처로, Skild AI, FieldAI, Uber 등이 조기 채택하였다 [5].

**Table 1.** 피지컬 AI 관련 시장 전망 요약

| 시장 세그먼트 | 2025년 규모 | 2030~2033년 전망 | CAGR | 출처 |
|--------------|------------|-----------------|------|------|
| 피지컬 AI | $5.2B | $49.7B (2033) | 32.5% | SNS Insider [3] |
| 체화 AI (Embodied AI) | $4.4B | $23.1B (2030) | 39.0% | MarketsandMarkets [13] |
| 휴머노이드 로봇 | $2.9B | $15.3B (2030) | 39.2% | MarketsandMarkets [14] |

시뮬레이션 기반 학습(Sim-to-Real)은 자율주행, 드론, 산업용 로봇에서 빠르게 확산되고 있다. CVPR 2025에서 발표된 RoboTwin 2.0 [6]은 MLLM 기반 태스크 생성과 도메인 랜덤화로 양팔 조작 분야의 고충실도 합성데이터를 생성하여 cross-embodiment 일반화를 실증하였고, CoRL 2024에서 발표된 TRANSIC [7]은 Human-in-the-Loop 보정을 통해 접촉 집약적 작업에서 sim-to-real 갭을 극복하였다. 다만 시뮬레이션과 현실 간의 격차(Reality Gap)는 여전히 핵심 과제로, 구조화된 반복 접근과 도메인별 파라미터 튜닝이 요구된다 [11].

### 2.2 합성데이터 시장 동향

Gartner는 2024년 AI 학습 데이터의 60%가 합성데이터이며, 2030년까지 합성데이터가 AI 모델 학습의 주된 데이터 소스가 될 것으로 전망하였다 [15]. 합성데이터 시장은 빠르게 성장하고 있으며, 복수의 시장 조사기관이 공통적으로 연평균 30% 이상의 성장률을 전망하고 있다.

**Table 2.** 합성데이터 시장 전망

| 출처 | 2025년 규모 | 2030년 전망 | CAGR |
|------|------------|------------|------|
| Mordor Intelligence [16] | $0.51B | $2.67B | 39.4% |
| Grand View Research [17] | $0.51B | $3.7B | ~42% |
| Fortune Business Insights | — | $2.34B | 31.1% |

피지컬 AI 분야에서 합성데이터 수요는 특히 급격하게 증가하고 있다. 로봇 학습에 필요한 3D 환경, 센서 시뮬레이션, 접촉 역학 데이터는 실제 수집이 극도로 고비용이며 위험하기 때문에, 시뮬레이션 기반 합성이 사실상 유일한 대안으로 자리 잡았다 [4]. EU AI Act 등 규제 환경 역시 개인정보를 포함한 실데이터 사용 전 합성 대안의 검토를 의무화하여, 합성데이터 시장의 성장을 촉진하고 있다.

그러나 합성데이터의 양적 확대에도 불구하고, 품질 관리에 대한 체계적 접근은 부족한 상태이다. Iskander et al. [18]은 소량의 고품질 합성데이터가 대량의 저품질 데이터를 능가함을 실증하였으며, Gartner는 합성데이터 관리 실패가 AI 거버넌스, 모델 정확도, 규제 준수에 심각한 리스크를 초래할 것이라고 경고하였다 [15]. 이는 합성데이터 생성 단계에서부터 품질 진단과 거버넌스를 내재화한 플랫폼의 필요성을 부각시킨다.

### 2.3 AI 에이전트와 데이터 자동화

에이전틱 AI(Agentic AI)는 자율적으로 목표를 설정하고, 계획을 수립하며, 도구를 활용하여 복잡한 과업을 수행하는 AI 시스템을 지칭한다 [19]. Yao et al.의 ReAct 프레임워크 [20]는 추론(Reasoning)과 행동(Acting)의 시너지를 통해 LLM 기반 에이전트의 기초를 확립했으며, Shinn et al.의 Reflexion [21]은 언어적 강화학습을 통해 에이전트의 자기 반성 능력을 구현하였다. AutoGen [22]과 같은 멀티에이전트 대화 프레임워크는 복수 에이전트의 협력적 과업 수행을 가능하게 했다.

**Table 3.** 에이전틱 AI 시장 전망

| 출처 | 2025년 규모 | 2030년 전망 | CAGR |
|------|------------|------------|------|
| MarketsandMarkets [23] | $7.8B | $52.6B | 46.3% |
| Omdia (엔터프라이즈) [24] | $1.5B | $41.8B | — |
| Precedence Research | $7.6B | $199.1B (2034) | 43.8% |

특히 과학 연구 자체를 자동화하려는 "AI Scientist" 연구가 부상하고 있다. Lu et al. [25]은 LLM 에이전트가 가설 수립, 실험 설계, 코드 작성, 결과 분석, 논문 작성까지 과학 연구의 전 과정을 자율 수행하는 시스템을 실증했으며, Huang et al. [26]은 ML 연구 과업에서 AI 에이전트의 성능을 체계적으로 벤치마킹하는 프레임워크를 제시하였다. 이러한 AI Scientist 패러다임은 데이터 과학 분야에도 직접 적용 가능하며, AADS는 이를 데이터 품질 관리 도메인에 특화한 사례이다.

데이터 품질 영역에서도 에이전틱 자동화가 적용되기 시작하였다. CleanAgent [27]는 멀티에이전트 구조로 코드 없는 데이터 표준화를 구현하였고, AURA [28]는 다중 AI 에이전트 협업으로 ground truth 없이 대규모 멀티모달 데이터 어노테이션을 수행하여 기존 대비 5.8%의 정확도 향상을 달성하였다. 그러나 Gu et al. [33]이 지적한 바와 같이, 기존 LLM 에이전트 연구는 정형 데이터와 텍스트 중심에 편중되어 있으며, 피지컬 AI가 요구하는 멀티모달 합성데이터의 진단·생성·검증을 통합하는 에이전틱 시스템은 아직 미개척 영역으로 남아 있다.

---

## 3. 데이터클리닉: AADS 이전의 기반

### 3.1 데이터클리닉 서비스 개요

데이터클리닉은 의료의 "진단 → 처방 → 치료" 모델을 데이터 품질 관리에 적용한 서비스로, 데이터셋의 편향, 개인정보, 품질 이슈를 체계적으로 식별하고 교정한다. 핵심 기술인 DataLens 엔진은 DNN 기반 아키텍처에서 뉴로-심볼릭 시스템으로 진화한 데이터 이미징(Data Imaging) 기술(미국 특허 US 12,481,720 B2)을 사용하여, 데이터 분포·이상치·결측·편향을 시각적 이미지로 변환해 직관적 품질 상태를 파악한다.

데이터클리닉의 진단 체계는 세 단계(Level)로 구성된다. **Level 1**(기초 통계 진단)은 클래스 분포, 픽셀 히스토그램, 해상도 분포 등 기초 통계량을 산출하여 데이터셋의 구조적 특성을 파악한다. **Level 2**(매니폴드 진단)는 사전 학습된 신경망의 임베딩 공간에서 데이터의 밀도 분포, 이상치, 클래스 간 중첩을 분석하며, 차원 축소 시각화를 통해 데이터 공간의 과밀(over-density)과 공백(void) 영역을 탐지한다. **Level 3**(커스텀 도메인 진단)는 고객의 도메인 특화 규칙과 온톨로지를 반영한 맞춤형 진단으로, 제조 결함 분류 기준이나 군사 장비 식별 가이드라인 등 도메인 지식을 진단 파이프라인에 통합한다.

데이터클리닉은 ISO/IEC 5259 국제 표준이 정의하는 AI 데이터 품질 특성 — 완전성(Completeness), 정확성(Accuracy), 일관성(Consistency), 대표성(Representativeness) — 을 자동으로 계량한다 [10]. 특히 매니폴드 학습 기반 대표성 측정은 임베딩 공간에서의 위상적 공백(Hole) 탐지를 통해 데이터셋이 현실 분포를 얼마나 충실히 반영하는지를 정량화한다.

### 3.2 데이터클리닉의 한계와 진화 방향

데이터클리닉의 품질 검증 프레임워크는 산업적으로 검증되었으나, 수작업 중심의 진단·교정 프로세스는 확장성에 본질적 한계를 갖는다. 전문가가 진단 결과를 해석하고, 도메인 규칙을 수동으로 설정하며, 개선 방안을 직접 설계해야 하는 구조는 프로젝트 수가 증가할수록 선형적으로 인력이 필요하다는 확장성(scalability) 문제를 야기한다.

그러나 다양한 산업 도메인에 걸친 품질 검증 사례가 축적됨에 따라, 반복적으로 발생하는 패턴이 관찰되었다. 클래스 불균형 탐지 후 합성 데이터 증강을 처방하거나, 이상치 군집 발견 시 데이터 정제를 권고하는 일련의 "진단-처방" 시퀀스가 도메인을 초월하여 유사한 형태로 나타난 것이다. 이러한 패턴의 규칙성은 곧 자동화 가능성을 시사한다.

Gartner가 데이터 품질 시장의 핵심 과제로 "진단과 개선의 긴밀한 통합", "완전 자동화", "신뢰성 확보"를 제시한 것 [9]은 이 전환의 방향성과 일치한다. 데이터클리닉의 축적된 도메인 지식과 ISO 5259 기반 품질 프레임워크를 자율 에이전트가 운용하는 "에이전틱 데이터클리닉(Agentic DataClinic)"으로의 전환이 필연적 과제로 대두되었다.

---

## 4. AADS: 에이전틱 AI 데이터 사이언티스트

### 4.1 AADS 기술 개요

AADS(Agentic AI Data Scientist)는 데이터 품질 진단에서 개선까지 전 과정을 자율적으로 수행하는 에이전트형 AI 데이터 과학자이다. 최근 Lu et al.의 "The AI Scientist" [25]는 LLM이 가설 수립에서 논문 작성까지 과학 연구의 전 과정을 자동화할 수 있음을 실증하였고, Huang et al.의 "MLAgentBench" [26]는 ML 연구 과업에서 에이전트의 벤치마킹 프레임워크를 제시하였다. AADS는 이러한 AI Scientist 패러다임을 데이터 품질 관리 도메인에 특화하여 적용한 사례로, 데이터 진단·치료·합성·인증의 전 과정을 자율 에이전트가 수행한다. 과학기술정보통신부 '글로벌 빅테크 육성사업'으로 (주)페블러스(주관)와 KISTI(공동연구)가 2025년부터 3년간 총사업비 61억 원 규모로 수행하는 국가 R&D 과제이다 [1][12].

AADS의 설계 철학은 데이터 과학자의 전문적 판단 과정을 에이전트 루프로 소프트웨어화하는 것이다. 자율 에이전트가 데이터 진단(Data Diagnosis), 데이터 다이어트(Data Diet — 저품질·중복 데이터 제거), 데이터 벌크업(Data Bulk-up — 클래스 불균형 해소를 위한 합성데이터 생성), 품질 인증(Quality Certification — ISO/IEC 5259 적합성 검증)의 4단계 프로세스를 자율적으로 수행한다. 각 단계에서 플래너(Planner)가 작업을 분해하고, 전문 도구가 실행하며, 검증기(Verifier)가 결과를 평가하는 구조이다.

이 과정에서 뉴로-심볼릭 접근 [2][34]이 핵심 역할을 한다. 신경망의 패턴 인식 능력과 심볼릭 추론의 논리적 일관성을 결합함으로써, 단순한 통계적 데이터 생성을 넘어 도메인 규칙과 물리 법칙을 준수하는 "의미 있는" 데이터를 생성한다. 카우츠(Kautz)의 AI 분류 체계에서 다섯 번째 단계에 해당하는 이 접근은 신경망의 "빠른 사고(Fast Thinking)"와 심볼릭 AI의 "느린 사고(Slow Thinking)"를 결합하여 설명 가능하고 신뢰할 수 있는 진단-처방을 수행한다. Human-in-the-Loop 승인 게이트를 두어, 에이전트의 자율 판단이 일정 신뢰도 이하이거나 고위험 의사결정인 경우 인간 전문가의 승인을 요구함으로써 신뢰성과 안전성을 확보한다.

### 4.2 핵심 기술 요소

**뉴로-심볼릭 합성 엔진.** 도메인별 규칙(프로토콜, 물리 법칙, 규제 요건)을 온톨로지로 체계화하고, 이를 신경망 기반 생성 모델의 제약 조건으로 주입한다. Neural 레이어는 사전 학습 모델의 임베딩 공간에서 데이터 밀도, 클러스터링, 이상치를 분석하고, Symbolic 레이어는 도메인 온톨로지와 지식 그래프를 통해 논리적 제약 조건과 인과 규칙을 적용한다. 예를 들어, 군사 의사결정 지원 데이터 생성 시 MDMP(Military Decision Making Process) 절차 규칙이 심볼릭 제약으로 작용하며, 신경망은 이 제약 하에서 다양한 시나리오 변이를 생성한다.

**RLHF 기반 품질 보증.** 합성데이터의 품질은 전문가 피드백을 통한 강화학습(RLHF) [35] 루프로 지속 개선된다. 전문가가 생성된 데이터의 현실성과 유용성을 평가하고, 이 피드백이 생성 모델의 보상 함수에 반영되어 도메인 요구사항에 점진적으로 정렬(alignment)된다.

**커리큘럼 러닝.** 단순 시나리오에서 복잡 시나리오로의 점진적 생성 전략을 채택한다. 기본적 물체 인식 데이터에서 시작하여 가려진 물체 추론, 다중 에이전트 상호작용 등으로 복잡도를 높여 가며, 학습 모델의 단계적 역량 향상을 지원한다.

**멀티에이전트 강화학습(MARL).** 진단 에이전트, 정제 에이전트, 생성 에이전트, 검증 에이전트가 공유 환경에서 협업하며, 각 에이전트가 독립적 보상 함수를 최적화하되 전체 데이터 품질이라는 공동 목표에 수렴하도록 설계된다 [36][37].

이들 기술이 통합되어 AADS의 자율 순환 아키텍처를 형성한다.

**Table 4.** AADS 자율 순환 아키텍처 단계별 구성

| 단계 | 기능 | 핵심 기술 | 산출물 |
|------|------|-----------|--------|
| 1. 진단(Diagnose) | 데이터 품질 자동 분석 | 뉴로-심볼릭 진단 엔진 (Level 1/2/3) | 품질 리포트, 이상치 목록 |
| 2. 처방(Prescribe) | 개선 전략 자동 생성 | 플래너 + 도메인 온톨로지 | 처방 계획(Diet/Bulk-up/Replica) |
| 3. 실행(Execute) | 데이터 정제·증강·생성 | 커리큘럼 러닝, MARL, Gen-VLM | 개선된 데이터셋 |
| 4. 검증(Verify) | 품질 재진단 및 평가 | RLHF 보증 루프, ISO 5259 메트릭 | 품질 증적, 승인/재처방 판정 |
| 5. 거버넌스(Govern) | 증적 관리 및 규정 준수 | ISO 42001, 메타데이터 카탈로그 | AI-Ready 데이터 패키지 |

이 순환 루프의 핵심 특징은 검증 단계에서 품질이 기준에 미달할 경우 자동으로 진단 단계로 회귀하여 개선 사이클을 반복하는 자기 교정(self-correcting) 구조라는 점이다. Human-in-the-Loop 게이트는 2단계(처방)와 4단계(검증)에 배치되어, 에이전트의 자율성과 인간의 감독 사이에서 균형을 유지한다.

---

## 5. Data Greenhouse: 데이터 거버넌스 플랫폼

### 5.1 설계 철학

Data Greenhouse는 "데이터가 자라는 온실"이라는 비유에서 출발한다. 전통적 데이터 플랫폼이 저장과 처리에 집중했다면, Data Greenhouse는 데이터의 생애주기 전체 — 파종(수집), 육성(정제·증강), 검증(품질 보증), 수확(AI-Ready 패키지 배포) — 를 하나의 통합 거버넌스 체계 아래 관리한다. AADS 에이전트가 데이터 생애주기 전체를 자율적으로 관리하되, 중요 의사결정 지점에서는 인간 전문가의 승인을 받는 Human-in-the-Loop(HITL) 설계를 채택한다. Data Greenhouse는 기존 데이터 플랫폼(Snowflake, Databricks 등)을 대체하지 않고, 그 위에 데이터 운영의 책임을 지는 '책임 레이어(Responsibility Layer)'로 포지셔닝된다 [9].

### 5.2 아키텍처

Data Greenhouse는 관측(Observe) → 판단(Orchestrate) → 행동(Action) → 증명(Govern)의 자율 순환 루프(Cycle-Loop)로 구동되며, 5개 계층으로 구성된다.

**Table 5.** Data Greenhouse 아키텍처 계층 구성

| 계층 | 역할 | 핵심 기능 |
|------|------|---------|
| Platform Adapter Layer | 기존 플랫폼 연결 | Snowflake/Databricks/DataLake 신호(메타데이터, 비용, 로그) 관찰 및 개선 결과 Write-back |
| Observation Layer | 데이터 현황 관측 | Neural(임베딩) 기반 과밀·공백 시각화 + Symbolic(온톨로지) 기반 맥락·규제 위험 해석 |
| Orchestration Layer | 판단 및 계획 수립 | AADS 에이전트의 진단 결과 기반 개선 계획 수립, HITL 승인 게이트 |
| Action Layer | 품질 개선 실행 | Data Diet, Data Bulk-up(GenQA·Gen-VLM), Data Replica, RAG Optimization |
| Governance Layer | 증적 및 규제 준수 | ISO/IEC 5259·ISO 42001 기반 품질 매핑, 감사 로그 자동화 |

**도메인 온톨로지 및 지식 그래프.** Observation Layer의 Symbolic 모듈은 도메인별 온톨로지와 지식 그래프를 유지하여 데이터의 의미적 맥락을 해석한다. 이를 통해 단순 통계적 이상 탐지를 넘어 "왜 이 데이터가 문제인지" 인과적으로 설명할 수 있다 [2].

**합성데이터 생성 파이프라인.** Action Layer는 뉴로-심볼릭 엔진을 활용한 이중 생성 전략을 채택한다. GenQA는 텍스트 LLM으로 희소 케이스의 추론 데이터를 합성하고, Gen-VLM은 Vision-Language Model을 적용하여 제조·로봇 현장의 시각적 상황 인지 데이터를 생성한다.

**AI-Ready 데이터 패키지 배포 체계.** 검증을 통과한 데이터는 도메인·태스크별로 패키징되어 즉시 AI 학습에 투입 가능한 상태로 배포된다. Data Diet으로 중복을 제거하고, Data Bulk-up으로 클래스 불균형을 해소하며, Data Replica로 민감 정보를 비식별화한 상태의 최적화된 패키지가 산출물이다.

Gartner가 식별한 데이터 품질 시장의 주요 과제 — 자동 교정 부재, 검증 및 신뢰 부족, 기술 격차 및 통합 마찰 — 에 대해 Data Greenhouse는 각각 Cycle-Loop Action 계층의 완전 자동화, ISO/IEC 5259 표준화 + HITL 승인 게이트, 자연어 인터페이스 + Platform Adapter로 대응한다 [9].

---

## 6. PebbloSim: 피지컬 AI 시뮬레이션 플랫폼

### 6.1 설계 철학

PebbloSim은 피지컬 AI 학습을 위한 고충실도 시뮬레이션 환경으로, Sim-to-Real 전이를 고려한 합성데이터 생성에 특화된다. 핵심 설계 원칙은 "물리적 환각(Physical Hallucination)의 제거"이다. 생성 AI 모델이 현실에 존재하지 않는 물리적 상황을 만들어내는 문제를 뉴로-심볼릭 하이브리드 월드 모델로 해결한다.

설계 시 Sim-to-Real 전이(Transfer)를 최우선으로 고려하여, 시뮬레이션에서 학습한 정책이 실제 환경으로 이전될 때 성능 저하를 최소화하도록 도메인 랜덤화(Domain Randomization)와 물리 파라미터 변이를 체계적으로 적용한다. PebbloSim에서 생성된 합성데이터는 Data Greenhouse의 품질 검증 파이프라인으로 직접 연동되어, 뉴로-심볼릭 검증을 거친 후 AI-Ready 패키지로 배포된다.

### 6.2 아키텍처

PebbloSim의 아키텍처는 5개 컴포넌트로 구성된다.

**데이터클리닉(진단).** 기존 데이터셋의 뉴로-심볼릭 공간에서 데이터 공백(gap)을 탐지한다. 매니폴드 학습을 통해 어떤 시나리오·조건의 데이터가 부족한지를 벡터 공간의 빈 영역으로 정확히 지시한다.

**AADS(오케스트레이션).** 탐지된 공백을 기반으로 시뮬레이션 시나리오를 설계한다. 어떤 물리적 파라미터(강우량, 충돌 각도, 속도 등)를 변화시켜 공백을 메울지를 자율적으로 결정한다.

**GenSim Manager.** 추상적 시나리오 명령을 구체적 시뮬레이션 스크립트로 변환한다. 이 과정에서 Vector-to-Param 변환이 핵심적 역할을 한다 — 벡터 공간 공백의 좌표를 물리 시뮬레이션의 구체적 파라미터로 역변환하여, 필요한 데이터만 정밀하게 생성한다. 이는 무작위 합성데이터의 낭비적 과잉 생성을 제거한다.

**멀티모달 생성기(Action Engine).** 뉴로-심볼릭 하이브리드로 시뮬레이션을 수행한다. 심볼릭 시뮬레이션 컴포넌트는 물리 엔진을 통해 중력, 마찰, 충돌 등의 법칙을 구현하며 결정론적 재현성을 보장한다. 신경망 생성 컴포넌트는 VLM/생성 AI를 통해 사실적 텍스처, 조명, 엣지 케이스 시각 변이를 생성한다. OpenAI Gym 호환 인터페이스를 제공하여 강화학습 에이전트가 표준 API로 환경과 상호작용할 수 있다. 출력은 RGB 이미지, 3D CAD, 센서 로그(LiDAR/IMU/깊이), 라벨링 정보의 시공간 동기화된 멀티모달 데이터이다.

**뉴로-심볼릭 검증.** 생성된 합성데이터가 도메인 규칙에 적합한지 자동으로 검증한다. Neural 모듈이 데이터 분포의 통계적 적합성을 평가하고, Symbolic 모듈이 도메인 온톨로지 기반 규칙(물리 법칙 위반 여부, 안전 제약 준수 등)을 체크하여, 현실과 괴리된 합성 데이터를 필터링한다.

### 6.3 적용 사례

PebbloSim의 적용 사례는 세 가지 도메인에서 검토되고 있다.

**군사 의사결정 지원: MDMP 종단간 자동화.** 군사 의사결정 프로세스(MDMP)의 각 단계를 시뮬레이션하여 종단간 의사결정 데이터를 대량으로 생성한다. 지형, 기상, 적 배치 등의 변수를 조합한 수천 가지 작전 시나리오에서 에이전트가 COA(Course of Action)를 수립·평가하는 과정을 기록하여, 국방 AI 모델의 전술적 판단력 학습에 활용한다.

**자율주행 엣지 케이스: 희귀 시나리오 대량 생성.** 역주행 차량, 갑작스런 보행자 출현, 극단적 기상 조건 등 실제 도로에서는 극히 드물지만 안전에 결정적인 엣지 케이스를 체계적으로 생성한다. 도메인 랜덤화를 통해 조명·날씨·교통 밀도를 변이시키며, 각 시나리오에 대한 완전한 센서 데이터(카메라, LiDAR, 레이더)와 정답 라벨을 자동으로 산출한다.

**로봇 조작: 시뮬레이션 기반 행동 데이터.** 산업용 로봇의 물체 파지(Grasping), 조립, 정밀 배치 등 복잡한 매니퓰레이션 태스크를 시뮬레이션한다. 물체의 형상·무게·마찰 계수를 랜덤화하고 로봇 관절의 토크·위치 데이터를 수집하여, Sim-to-Real 전이를 통해 실제 로봇의 조작 정책 학습에 직접 활용한다. AADS 1차년도에 구축된 13개 로봇 데이터셋 그룹의 QA 프레임워크와 연계하여 생성 데이터의 도메인 적합성을 보장한다 [38].

각 사례에서 Data Greenhouse와의 연동을 통해 생성 데이터의 ISO/IEC 5259 적합성이 자동 검증된다.

---

## 7. 데이터클리닉 → Data Greenhouse → PebbloSim: 진화 경로

### 7.1 세 단계의 연결 구조

페블러스의 기술 진화는 데이터클리닉 → Data Greenhouse → PebbloSim의 세 단계로 구성되며, 각 단계는 이전 단계의 역량을 흡수하면서 더 높은 수준의 자동화와 범위를 확보한다.

**Table 6.** 데이터클리닉 → Data Greenhouse → PebbloSim 진화 비교

| 단계 | 역할 | 핵심 특성 | 자동화 수준 |
|------|------|-----------|-------------|
| 데이터클리닉 | 진단과 치료 | 뉴로-심볼릭 3-Level 진단, ISO 5259 기반, 데이터 이미징 기술 | 전문가 주도 (수작업) |
| Data Greenhouse | 재배와 거버넌스 | AADS 자율 순환 루프, 책임 레이어, 플랫폼 어댑터 | AADS 자율 + Human-in-the-Loop |
| PebbloSim | 시뮬레이션과 합성 | Sim-to-Real 전이, 멀티모달 생성, Vector-to-Param 변환 | 완전 자동화 (에이전트 기반) |

이 세 단계는 선형적 교체가 아닌 누적적 진화(cumulative evolution)이다. 데이터클리닉의 도메인 지식이 Data Greenhouse의 에이전트 판단 기준이 되고, Data Greenhouse의 품질 보증 체계가 PebbloSim의 합성데이터 신뢰성을 담보한다. 이 순환은 GICO(Generate-Integrate-Certify-Operate) 프레임워크로 체계화되며, 데이터 생성 → 통합 → 인증 → 운영의 지속적 플라이휠을 형성한다.

### 7.2 AADS가 만든 차별화

AADS는 세 단계를 관통하는 기술적 접착제(technological glue)로서, 페블러스의 차별화를 구성한다.

첫째, **도메인 지식과 자율 에이전트의 결합**이다. 데이터클리닉에서 축적된 산업별(로봇, 제조, 국방, 사회안전) 품질 진단 노하우가 AADS 에이전트의 판단 기준으로 내재화되어, 단순 자동화를 넘어 '맥락을 이해하는 자율 에이전트'를 구현한다. 4개 도메인에서 구축된 전문 QA 데이터셋(로봇 52개, 제조 28개)이 이 과정의 핵심 자산이다 [38][39].

둘째, **품질 검증 노하우의 합성데이터 신뢰성 보증 구조**이다. ISO/IEC 5259 기반 품질 측정 기준을 합성데이터 생성 과정에 선제적(proactive)으로 반영하여, 사후 필터링이 아닌 생성 단계에서부터 품질을 제어한다 [10]. 이는 기존 연구들이 외재적(downstream task) 평가에 의존하는 것과 대비되는 접근이다 [18]. 데이터 이미징 기술(미국 특허 US 12,481,720 B2)이 ISO 5259 적합성 평가의 실질적 구현 수단이 됨으로써, 기술적 진입장벽이 형성된다.

셋째, **수직 통합 구조**이다. 데이터 생성(PebbloSim) → 품질 검증(Data Greenhouse) → 시뮬레이션(Sim-to-Real) → 피지컬 AI 학습이라는 End-to-End 파이프라인을 단일 플랫폼 내에서 운영함으로써, NVIDIA Omniverse [4]와 같은 특정 생태계에 종속되지 않는 플랫폼 독립적 합성데이터 품질 관리를 실현한다 [31].

---

## 8. 결론 및 향후 전망

### 8.1 요약

본 논문은 데이터클리닉에서 피지컬 AI까지의 기술 진화 경로를 AADS 기반 합성데이터 플랫폼의 관점에서 설계하고 제시하였다. 주요 기여는 다음 세 가지로 요약된다.

첫째, 데이터클리닉의 전문가 주도 품질 검증 서비스에서 AADS 자율 에이전트 기반 플랫폼으로의 전환 설계 경로를 제시하였다. 뉴로-심볼릭 AI와 에이전틱 AI의 결합을 통해, 수작업의 확장성 한계를 극복하면서도 도메인 전문성을 보존하는 아키텍처를 설계하였다.

둘째, Data Greenhouse와 PebbloSim이라는 두 플랫폼의 아키텍처를 소개하였다. Data Greenhouse는 '관측–판단–행동–증명'의 4단계 자율 순환 루프로 데이터 거버넌스를 자동화하며, PebbloSim은 Sim-to-Real 전이를 지원하는 고충실도 합성데이터 생성 엔진으로 기능한다.

셋째, 피지컬 AI 시대의 합성데이터 시장 가능성을 분석하였다. 피지컬 AI 시장이 2033년까지 500억 달러 이상으로 성장하고, 합성데이터가 AI 학습 데이터의 주류로 전환되는 산업 동향 속에서, 데이터 품질 검증 역량과 합성데이터 생성을 수직 통합한 접근은 유효한 시장 포지셔닝을 제공한다.

### 8.2 향후 연구 및 사업화 방향

AADS 프로젝트는 2025년 4분기 코어 에이전트 루프 PoC 완료, 2026년 2분기 파일럿 프로그램 출시, 2026년 4분기 AADS 플랫폼 베타 릴리스를 목표로 추진된다. Phase 2에서는 산업별 멀티모달 VLM(Visual CoT), 비용 최적화를 위한 추론 라우터(Reasoning Router, 추론 비용 70% 절감 목표), 국방·공공 부문을 위한 소버린(Sovereign) 온프레미스 배포 환경을 개발할 계획이다.

피지컬 AI 생태계 내에서의 포지셔닝은 '플랫폼 독립적 데이터 품질 인프라'를 지향한다. NVIDIA, Tesla 등 대형 플랫폼이 수직 통합 생태계를 구축하는 가운데, 페블러스는 이들 생태계와 보완적으로 작동하는 품질 보증 레이어로서의 역할을 목표로 한다.

본 연구의 한계로는 실험적 정량 평가 결과가 부재하며, 제안된 아키텍처의 실제 산업 환경 적용 검증이 아직 이루어지지 않았다는 점이 있다. AADS 1차년도는 PoC 단계에 머물러 있으며, 대규모 데이터셋에 대한 자동 진단 정확도, 합성데이터의 downstream task 성능 향상 효과 등에 대한 정량적 실증은 2차년도 이후 파일럿 프로그램을 통해 수행될 예정이다. 또한, 뉴로-심볼릭 통합의 실제 구현 복잡성과 대규모 온톨로지 구축·유지의 비용, 그리고 현실 세계 변수의 무한성으로 인한 합성데이터의 현실 반영도 한계는 지속적으로 해결해야 할 과제이다.

---

## 참고문헌

[1] 페블러스, "AADS 기술 기반 데이터 클리닉 2.0 및 AI-Ready 데이터 플랫폼 비전," 내부 기술문서, 2025.

[2] 페블러스, "뉴로-심볼릭 AI: 엔터프라이즈 인텔리전스를 위한 코그니티브 데이터 아키텍처 v1.1," 내부 기술문서, 2025.

[3] SNS Insider, "Physical AI Market Size, Share & Growth Report 2033," 2025.

[4] NVIDIA, "Scaling Physical AI with Synthetic Data," NVIDIA Technical Blog, 2025.

[5] NVIDIA, "NVIDIA Announces Open Physical AI Data Factory Blueprint," NVIDIA Press Release, Mar. 2026.

[6] RoboTwin Authors, "RoboTwin 2.0: A Scalable Simulation Framework for Bimanual Manipulation," in Proc. IEEE/CVF CVPR, 2025.

[7] TRANSIC Authors, "TRANSIC: Sim-to-Real Policy Transfer by Learning from Online Correction," in Proc. CoRL, 2024.

[8] A. Ng et al., "Data-Centric Artificial Intelligence: A Survey," arXiv:2212.11854, 2022.

[9] 페블러스, "2025 데이터 품질관리 시장 분석 및 페블러스 AADS 차세대 전략," 내부 기술문서, 2025.

[10] 페블러스, "AI 데이터 품질 표준과 페블러스 데이터클리닉," 내부 기술문서, 2025.

[11] M. Salvato et al., "Crossing the Reality Gap: A Survey on Sim-to-Real Transferability of Robot Controllers in Reinforcement Learning," Applied Intelligence, Springer, 2024.

[12] 페블러스, "AADS CLI 시뮬레이션 페이지," 프로젝트 웹페이지, 2025.

[13] MarketsandMarkets, "Embodied AI Market Report 2025–2030," 2025.

[14] MarketsandMarkets, "Humanoid Robot Market Size, Share & Trends, 2025 To 2030," 2025.

[15] Gartner, "Top Data & Analytics Predictions," Jun. 2025; A. White, "By 2024, 60% of the data used for AI will be synthetically generated," Gartner Blog, Jul. 2021.

[16] Mordor Intelligence, "Synthetic Data Market Size, Share, Trends & Research Report, 2030," 2025.

[17] Grand View Research, "Synthetic Data Generation Market Report," 2025. https://www.grandviewresearch.com/industry-analysis/synthetic-data-generation-market-report

[18] S. Iskander et al., "Quality Matters: Evaluating Synthetic Data for Tool-Using LLMs," in Proc. EMNLP, 2024.

[19] M. Tan et al., "Agentic AI: A Comprehensive Survey of Architectures, Applications, and Future Directions," Artificial Intelligence Review, Springer Nature, 2025.

[20] S. Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models," ICLR 2023.

[21] N. Shinn et al., "Reflexion: Language Agents with Verbal Reinforcement Learning," NeurIPS 2023.

[22] Q. Wu et al., "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation Framework," Microsoft Research, 2023.

[23] MarketsandMarkets, "AI Agents Market Report 2025–2030," 2025.

[24] Omdia, "New Omdia Analysis Shows Agentic AI Outpacing Growth Rates of Traditional Generative AI," Sep. 2025.

[25] C. Lu et al., "The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery," arXiv:2408.06292, ICLR 2025.

[26] Q. Huang et al., "MLAgentBench: Evaluating Language Agents on Machine Learning Experimentation," ICML 2024.

[27] Q. Qi et al., "CleanAgent: Automating Data Standardization with LLM-based Agents," 2024.

[28] AURA Authors, "AURA: Label Curation Using Agentic AI," arXiv preprint arXiv:2602.02564, 2026.

[29] (주)페블러스, "Pebblous — AI-Ready Data Infrastructure," https://www.pebblous.ai

[30] (주)페블러스, "데이터클리닉: AI 데이터 품질 관리 플랫폼," Pebblous Blog, https://blog.pebblous.ai/project/DataClinic/

[31] (주)페블러스, "피지컬 AI 데이터 인프라의 전략적 기회: 페블러스 비즈니스 모델을 중심으로," Pebblous Blog, 2026. https://blog.pebblous.ai/project/PhysicalAI/physical-ai-data-infra-strategy/ko/

[32] ISO/IEC 5259-2:2024, "Artificial Intelligence — Data Quality for Analytics and Machine Learning (ML) — Part 2: Data Quality Measures," ISO, 2024.

[33] J. Gu et al., "A Survey on Large Language Model-based Agents for Statistics and Data Science," arXiv:2412.14222, 2024; Published in The American Statistician, 2025.

[34] M. K. Sarker et al., "A Review of Neuro-Symbolic AI Integrating Reasoning and Learning for Advanced Cognitive Systems," ScienceDirect, 2025.

[35] N. Lambert, RLHF Book: Reinforcement Learning from Human Feedback, 2025. https://rlhfbook.com/

[36] S. V. Albrecht, F. Christianos, and L. Schäfer, Multi-Agent Reinforcement Learning: Foundations and Modern Approaches, MIT Press, 2024.

[37] W. Chen et al., "LLM-based Multi-Agent Reinforcement Learning: Current and Future Directions," arXiv:2405.11106, 2024.

[38] 페블러스, "AADS LLM 파인튜닝용 QA 데이터셋 구축: 로봇 분야 데이터품질 관점," 내부 기술문서, 2025.

[39] 페블러스, "AADS LLM 파인튜닝용 QA 데이터셋 구축: 제조 분야," 내부 기술문서, 2025.
