# **데이터클리닉에서 피지컬 AI까지: AADS 기반 합성데이터 플랫폼의 설계와 진화**

- **저자**: 이정원, 이주행
- **소속**: (주)페블러스
- **교신저자**: joohaeng@pebblous.ai

---

## 초록 (Abstract)

피지컬 AI 시대의 도래와 함께 고품질 데이터의 중요성이 급증하고 있으나, 로봇·제조·국방·의료 등 데이터 희소 도메인에서는 충분한 학습 데이터 확보가 구조적으로 어렵다. 본 논문에서는 데이터클리닉 서비스에서 축적한 데이터 품질 검증 역량을 기반으로, AADS(Agentic AI Data Scientist) 기술을 접목하여 설계한 두 가지 플랫폼 — 데이터 거버넌스 플랫폼 Data Greenhouse와 피지컬 AI 시뮬레이션 플랫폼 PebbloSim — 의 아키텍처와 설계 철학을 소개한다. 아울러 피지컬 AI 시장의 산업 동향을 분석하고, 합성데이터 기반 접근의 시장 가능성을 논의한다.

**키워드:** 피지컬 AI, 합성데이터, 에이전틱 AI, AI Scientist, 데이터 거버넌스, 뉴로-심볼릭 AI, Sim-to-Real

---

## 1. 서론

### 1.1 피지컬 AI 시대의 데이터 문제

인공지능 기술은 텍스트와 이미지를 생성하는 디지털 AI에서, 로봇·자율주행·디지털 트윈 등 현실 세계와 상호작용하는 피지컬 AI(Physical AI)로 패러다임이 전환되고 있다. NVIDIA의 Jensen Huang은 "피지컬 AI의 다음 물결이 도래했다"고 선언하며, Omniverse, Isaac Sim, Cosmos 등의 통합 플랫폼을 통해 로봇과 자율 시스템을 위한 인프라를 구축하고 있다 [1]. 피지컬 AI 시장은 2025년 약 52억 달러에서 2034년 500~830억 달러 규모로 연평균 31~36% 성장이 전망된다 [2].

피지컬 AI는 현실 세계의 물리 법칙을 이해해야 하므로, 시뮬레이션과 합성데이터의 역할이 결정적이다. 그러나 국방, 의료, 에너지 등 데이터 희소 도메인에서는 결함, 사고, 엣지 케이스 등 중요 데이터의 수집이 물리적·윤리적으로 제약된다. Andrew Ng이 제창한 데이터 중심 AI(Data-Centric AI) 패러다임 [3]은 모델 아키텍처보다 데이터 품질이 AI 성능의 핵심 결정 요인임을 강조하며, 이러한 구조적 데이터 부족 문제의 해결을 촉구하고 있다.

### 1.2 연구 배경 및 목적

(주)페블러스 [23]는 데이터클리닉(DataClinic) [24] 서비스를 통해 다양한 산업 도메인에서 AI 학습 데이터의 품질을 진단·검증하는 역량을 축적해 왔다. 현대자동차, LG전자, LG유플러스, 한화비전 등에서의 PoC 검증과 조달청 혁신시제품 지정(2025), 세계 최초 ISO/IEC 5259-3 인증 등은 이 역량의 산업적 검증을 대변한다.

본 논문은 데이터클리닉의 도메인 품질 검증 노하우를 AADS 기술로 확장하여 설계한 두 축의 플랫폼을 소개한다. Data Greenhouse는 데이터 생애주기 전체를 자율적으로 관리하는 거버넌스 플랫폼이며, PebbloSim은 피지컬 AI 학습을 위한 고충실도 합성데이터 시뮬레이션 플랫폼이다. 아울러 에이전틱 AI와 합성데이터 시장의 산업 동향을 분석하고, AADS 기반 접근이 갖는 차별화와 시장 가능성을 논의한다.

본 논문의 구성은 다음과 같다. 2장에서 피지컬 AI, 합성데이터, AI 에이전트 관련 산업 동향을 분석하고, 3장에서 AADS 이전 기반인 데이터클리닉을 소개한다. 4장에서 AADS의 기술 체계를 설명하고, 5장과 6장에서 각각 Data Greenhouse와 PebbloSim의 아키텍처를 기술한다. 7장에서 세 단계의 진화 경로를 논의하고, 8장에서 결론과 향후 전망을 제시한다.

---

## 2. 관련 산업 동향

### 2.1 피지컬 AI 시장 동향

피지컬 AI는 시각 언어 모델(VLM)과 시각 언어 행동 모델(VLA)을 기반으로 현실 세계에서 "보고 행동하는" 시스템을 구현한다. NVIDIA는 Omniverse를 피지컬 AI의 운영체제로 포지셔닝하고, Isaac Sim으로 로봇 시뮬레이션을, Cosmos 월드 파운데이션 모델로 합성 세계 생성을 지원한다 [1]. Tesla Optimus는 2026년 외부 고객 출하를 목표로 월 10만 대 생산 라인을 준비 중이며, Figure AI는 2024년 Series B에서 26억 달러, 2025년 Series C에서 390억 달러 기업가치를 기록하며 12개월 만에 15배 성장했다 [4].

시뮬레이션 기반 학습(Sim-to-Real)은 자율주행, 드론, 산업용 로봇에서 빠르게 확산되고 있다. 시뮬레이션 및 디지털 트윈 환경 부문은 피지컬 AI 시장의 20.3%를 점유하며 연평균 41.5% 성장률을 기록하고 있다 [2]. 다만 시뮬레이션과 현실 간의 격차(Reality Gap)는 여전히 핵심 과제로, 구조화된 반복 접근과 도메인별 파라미터 튜닝이 요구된다 [5].

### 2.2 합성데이터 시장 동향

Gartner는 2024년 AI 학습 데이터의 60%가 합성데이터이며, 2030년까지 AI 이미지·영상 데이터셋의 95% 이상이 합성데이터로 전환될 것으로 전망했다 [6]. 합성데이터 시장은 2025년 약 5.1억 달러에서 2030년 18~37억 달러로 연평균 35~42% 성장이 예상된다 [7]. 생성 AI를 활용한 합성데이터 기법에 대한 체계적 리뷰 [20][21]는 GAN, VAE, 확산 모델 등 다양한 접근법의 가능성과 한계를 분석하고 있다.

그러나 합성데이터 시장에서는 Datagen, Synthesis AI 등 초기 기업의 폐업·인수 사례가 나타나고 있어, 단순 데이터 생성보다는 플랫폼 임베디드 솔루션과 높은 전환비용(switching cost)이 지속 가능한 경쟁우위의 핵심 조건임이 확인되고 있다.

### 2.3 AI 에이전트와 데이터 자동화

에이전틱 AI(Agentic AI)는 자율적으로 목표를 설정하고, 계획을 수립하며, 도구를 활용하여 복잡한 과업을 수행하는 AI 시스템을 지칭한다 [8]. Yao et al.의 ReAct 프레임워크 [9]는 추론(Reasoning)과 행동(Acting)의 시너지를 통해 LLM 기반 에이전트의 기초를 확립했으며, AutoGen [10]과 같은 멀티에이전트 대화 프레임워크는 복수 에이전트의 협력적 과업 수행을 가능하게 했다. Shinn et al.의 Reflexion [19]은 언어적 강화학습을 통해 에이전트의 자기 반성 능력을 구현하였으며, Ma et al. [22]은 LLM 기반 에이전트의 아키텍처 분류 체계를 제안했다.

특히 과학 연구 자체를 자동화하려는 "AI Scientist" 연구가 부상하고 있다. Lu et al. [26]은 LLM 에이전트가 가설 수립, 실험 설계, 코드 작성, 결과 분석, 논문 작성까지 과학 연구의 전 과정을 자율 수행하는 시스템을 실증했으며, Huang et al. [27]은 ML 연구 과업에서 AI 에이전트의 성능을 체계적으로 벤치마킹하는 프레임워크를 제시했다. 이러한 AI Scientist 패러다임은 데이터 과학 분야에도 직접 적용 가능하며, AADS는 이를 데이터 품질 관리 도메인에 특화한 사례이다.

AI 에이전트 시장은 2024년 52.5억 달러에서 2034년 약 1,990억 달러로 연평균 43.8% 성장이 전망된다. 2025년 기준 기업의 79%가 에이전틱 AI를 일정 수준 도입했으며, 2026년까지 기업 애플리케이션의 40%가 과업 특화 AI 에이전트를 통합할 것으로 예측된다 [11]. 데이터 과학 분야에서도 LLM 기반 데이터 생성·검증·거버넌스의 자동화가 주목받고 있으며, Luo et al.의 Data Agent [12]는 데이터+AI 생태계 오케스트레이션을 위한 통합 아키텍처를 제안한 바 있다.

---

## 3. 데이터클리닉: AADS 이전의 기반

### 3.1 데이터클리닉 서비스 개요

데이터클리닉은 의료의 "진단 → 처방 → 치료" 모델을 데이터 품질 관리에 적용한 서비스로, 데이터셋의 편향, 개인정보, 품질 이슈를 체계적으로 식별하고 교정한다. 핵심 기술인 DataLens 엔진은 DNN 기반 아키텍처에서 뉴로-심볼릭 시스템으로 진화한 데이터 이미징(Data Imaging) 기술(미국 특허 US 12,481,720 B2)을 사용하여, 데이터 분포·이상치·결측·편향을 시각적 이미지로 변환해 직관적 품질 상태를 파악한다.

데이터클리닉은 ISO/IEC 5259 국제 표준이 정의하는 AI 데이터 품질 특성 — 완전성(Completeness), 정확성(Accuracy), 일관성(Consistency), 대표성(Representativeness) — 을 자동으로 계량한다 [13]. 특히 매니폴드 학습 기반 대표성 측정은 임베딩 공간에서의 위상적 공백(Hole) 탐지를 통해 데이터셋이 현실 분포를 얼마나 충실히 반영하는지를 정량화한다.

### 3.2 데이터클리닉의 한계와 진화 방향

데이터클리닉의 품질 검증 프레임워크는 산업적으로 검증되었으나, 수작업 중심의 진단·교정 프로세스는 확장성에 본질적 한계를 갖는다. 도메인별로 반복되는 품질 패턴(결측, 클래스 불균형, 라벨 오류 등)이 존재함에도 불구하고, 각 프로젝트마다 전문가가 개입해야 하는 구조는 서비스의 스케일링을 제약한다.

이 한계는 곧 "에이전틱 데이터클리닉"으로의 전환 필요성을 제기했다. 전문가의 도메인 지식과 판단 패턴을 자율 에이전트에 내재화하여, 데이터 품질 진단·교정·생성·검증의 전 과정을 자동화하는 것이 AADS의 출발점이다.

---

## 4. AADS: 에이전틱 AI 데이터 사이언티스트

### 4.1 AADS 기술 개요

AADS(Agentic AI Data Scientist)는 에이전틱 AI가 데이터 과학자의 역할 — 데이터 수집·정제·생성·검증·거버넌스 — 을 자율적으로 수행하는 플랫폼이다. 최근 Lu et al.의 "The AI Scientist" [26]는 LLM이 가설 수립에서 논문 작성까지 과학 연구의 전 과정을 자동화할 수 있음을 실증하였고, Huang et al.의 "MLAgentBench" [27]는 ML 연구 과업에서 에이전트의 벤치마킹 프레임워크를 제시하였다. AADS는 이러한 AI Scientist 패러다임을 데이터 품질 관리 도메인에 특화하여 적용한 사례로, 데이터 진단·치료·합성·인증의 전 과정을 자율 에이전트가 수행한다. 과학기술정보통신부 글로벌 빅테크 개발 사업으로 선정되어 KISTI를 공동 연구기관으로 하여 3개년(2025~) 61억 원 규모로 추진되고 있다.

AADS의 설계 철학은 "데이터 과학자의 자율화"이다. 기존에 인간 전문가가 수행하던 데이터 진단(Data Diagnosis), 데이터 다이어트(Data Diet — 저품질·중복 데이터 제거), 데이터 벌크업(Data Bulk-up — 클래스 불균형 해소를 위한 합성데이터 생성), 품질 인증(Quality Certification — ISO/IEC 5259 적합성 검증)의 4단계 프로세스를 에이전트가 자율적으로 수행한다.

이 과정에서 뉴로-심볼릭 접근 [14][15]이 핵심 역할을 한다. 신경망의 패턴 인식 능력과 심볼릭 추론의 논리적 일관성을 결합함으로써, 단순한 통계적 데이터 생성을 넘어 도메인 규칙과 물리 법칙을 준수하는 "의미 있는" 데이터를 생성한다.

### 4.2 핵심 기술 요소

**뉴로-심볼릭 합성 엔진.** 도메인별 규칙(프로토콜, 물리 법칙, 규제 요건)을 온톨로지로 체계화하고, 이를 신경망 기반 생성 모델의 제약 조건으로 주입한다. 예를 들어, 군사 의사결정 지원 데이터 생성 시 MDMP(Military Decision Making Process) 절차 규칙이 심볼릭 제약으로 작용하며, 신경망은 이 제약 하에서 다양한 시나리오 변이를 생성한다.

**RLHF 기반 품질 보증.** 합성데이터의 품질은 전문가 피드백을 통한 강화학습(RLHF) [16] 루프로 지속 개선된다. 전문가가 생성된 데이터의 현실성과 유용성을 평가하고, 이 피드백이 생성 모델의 보상 함수에 반영되어 점진적으로 품질이 향상된다.

**커리큘럼 러닝.** 단순 시나리오에서 복잡 시나리오로의 점진적 생성 전략을 채택한다. 기본적 물체 인식 데이터에서 시작하여 가려진 물체 추론, 다중 에이전트 상호작용 등으로 복잡도를 높여 가며, 학습 모델의 단계적 역량 향상을 지원한다.

**멀티에이전트 강화학습(MARL).** 복수 에이전트의 상호작용 시뮬레이션을 통해, 단일 에이전트로는 포착할 수 없는 창발적 행동 패턴과 협력·경쟁 시나리오 데이터를 생성한다 [17][18]. 배송 로봇의 비도로 주행, 다중 로봇 협업 조립 등의 복잡 시나리오에 적용된다.

---

## 5. Data Greenhouse: 데이터 거버넌스 플랫폼

### 5.1 설계 철학

Data Greenhouse는 "데이터가 자라는 온실"이라는 비유에서 출발한다. 데이터를 단순히 수집·저장하는 것이 아니라, 씨앗(원시 데이터)을 심고, 육성(품질 개선)하며, 수확(AI-Ready 데이터 패키지)하는 재배의 관점을 취한다. AADS 에이전트가 데이터 생애주기 전체를 자율적으로 관리하되, 중요 의사결정 지점에서는 인간 전문가의 승인을 받는 Human-in-the-Loop(HITL) 설계를 채택한다.

### 5.2 아키텍처

Data Greenhouse는 관측(Observe) → 판단(Orchestrate) → 행동(Action) → 증명(Govern)의 자율 순환 루프(Cycle-Loop)로 구동되며, 4개 계층으로 구성된다.

**플랫폼 어댑터 계층.** 데이터 이동을 최소화하면서 Snowflake, Databricks, Delta Lake 등 기존 데이터 플랫폼과 연동한다. 메타데이터, 비용, 로그 등의 메타 시그널을 관측하고, 개선 결과를 원본 플랫폼에 반영(write-back)한다.

**관측 계층.** 뉴로-심볼릭 이중 관측을 수행한다. 신경망 컴포넌트는 임베딩 기반으로 데이터 과밀·공백 영역을 시각화하고, 심볼릭 컴포넌트는 온톨로지 기반으로 맥락과 규제 리스크를 해석한다.

**오케스트레이션 계층(AADS).** 진단 결과를 기반으로 행동 계획을 수립한다. 데이터 다이어트(중복 제거), 데이터 벌크업(합성 생성), 데이터 레플리카(프라이버시 안전 분포 생성), RAG 최적화(의미적 중복 제거 및 커버리지 확장) 등의 행동을 자율적으로 기획하되, 주요 변경 사항에 대해서는 HITL 승인 게이트를 적용한다.

**거버넌스 계층.** ISO/IEC 5259(AI 데이터 품질) 및 ISO/IEC 42001(AI 관리 시스템) 표준을 내장하고, 모든 행동에 대한 감사 로그(audit log)를 자동 생성한다. 이를 통해 데이터 품질의 추적 가능성(traceability)과 규제 적합성을 보증한다.

Gartner가 식별한 데이터 품질 시장의 주요 과제 — 자동 교정 부재, 검증 및 신뢰 부족, 기술 격차 및 통합 마찰 — 에 대해 Data Greenhouse는 각각 Cycle-Loop Action 계층의 완전 자동화, ISO/IEC 5259 표준화 + HITL 승인 게이트, 자연어 인터페이스 + 플랫폼 어댑터로 대응한다 [6].

---

## 6. PebbloSim: 피지컬 AI 시뮬레이션 플랫폼

### 6.1 설계 철학

PebbloSim은 피지컬 AI 학습을 위한 고충실도 시뮬레이션 환경으로, Sim-to-Real 전이를 고려한 합성데이터 생성에 특화된다. 핵심 설계 원칙은 "물리적 환각(Physical Hallucination)의 제거"이다. 생성 AI 모델이 현실에 존재하지 않는 물리적 상황을 만들어내는 문제를 뉴로-심볼릭 하이브리드 월드 모델로 해결한다.

### 6.2 아키텍처

PebbloSim의 아키텍처는 5개 컴포넌트로 구성된다.

**데이터클리닉(진단).** 기존 데이터셋의 뉴로-심볼릭 공간에서 데이터 공백(gap)을 탐지한다. 매니폴드 학습을 통해 어떤 시나리오·조건의 데이터가 부족한지를 벡터 공간의 빈 영역으로 정확히 지시한다.

**AADS(오케스트레이션).** 탐지된 공백을 기반으로 시뮬레이션 시나리오를 설계한다. 어떤 물리적 파라미터(강우량, 충돌 각도, 속도 등)를 변화시켜 공백을 메울지를 자율적으로 결정한다.

**GenSim Manager.** 추상적 시나리오 명령을 구체적 시뮬레이션 스크립트로 변환한다. 이 과정에서 Vector-to-Param 변환이 핵심적 역할을 한다 — 벡터 공간 공백의 좌표를 물리 시뮬레이션의 구체적 파라미터로 역변환하여, 필요한 데이터만 정밀하게 생성한다. 이는 무작위 합성데이터의 낭비적 과잉 생성을 제거한다.

**멀티모달 생성기(Action Engine).** 뉴로-심볼릭 하이브리드로 시뮬레이션을 수행한다. 심볼릭 시뮬레이션 컴포넌트는 물리 엔진을 통해 중력, 마찰, 충돌 등의 법칙을 구현하며 결정론적 재현성을 보장한다. 신경망 생성 컴포넌트는 VLM/생성 AI를 통해 사실적 텍스처, 조명, 엣지 케이스 시각 변이를 생성한다. 출력은 RGB 이미지, 3D CAD, 센서 로그(LiDAR/IMU/깊이), 라벨링 정보의 시공간 동기화된 멀티모달 데이터이다.

**인터랙티브 시각화.** HITL 모니터링과 승인을 위한 인터페이스로, 생성 과정의 실시간 확인과 품질 피드백을 지원한다.

### 6.3 적용 사례

PebbloSim의 적용 사례는 세 가지 도메인에서 검토되고 있다. 첫째, 군사 의사결정 지원 분야에서 MDMP 종단간 자동화를 위한 시나리오 데이터를 생성한다. 둘째, 자율주행 엣지 케이스 분야에서 악천후, 역주행, 보행자 돌발 출현 등 희귀 시나리오를 대량 생성한다. 셋째, 로봇 조작 분야에서 가려진 물체 추론, 비정형 지형 주행, 그리퍼 핸들링 등의 시뮬레이션 기반 행동 데이터를 생성한다. 각 사례에서 Data Greenhouse와의 연동을 통해 생성 데이터의 ISO/IEC 5259 적합성이 자동 검증된다.

---

## 7. 데이터클리닉 → Data Greenhouse → PebbloSim: 진화 경로

### 7.1 세 단계의 연결 구조

페블러스의 데이터 플랫폼은 세 단계의 진화 경로를 따른다. 데이터클리닉은 데이터 품질의 "진단과 치료"를 수작업·전문가 중심으로 수행하는 1단계이다. Data Greenhouse는 데이터의 "재배와 거버넌스"를 AADS 자동화·플랫폼 기반으로 수행하는 2단계이다. PebbloSim은 피지컬 AI를 위한 "시뮬레이션과 합성"으로 Sim-to-Real 전이를 구현하는 3단계이다.

이 세 단계는 독립적 제품이 아니라 유기적으로 연결된 파이프라인을 구성한다:

- 데이터클리닉이 기존 데이터의 공백과 품질 이슈를 진단한다
- AADS 에이전트가 진단 결과를 바탕으로 교정·생성 계획을 수립한다
- PebbloSim이 필요한 합성데이터를 물리 시뮬레이션으로 생성한다
- Data Greenhouse가 생성된 데이터의 품질을 인증하고 배포한다

이 순환은 GICO(Generate-Integrate-Certify-Operate) 프레임워크로 체계화되며, 데이터 생성 → 통합 → 인증 → 운영의 지속적 플라이휠을 형성한다.

### 7.2 AADS가 만든 차별화

이 통합 아키텍처의 핵심 차별화는 세 가지로 요약된다. 첫째, 데이터클리닉에서 축적한 도메인 품질 검증 노하우가 AADS 에이전트에 내재화됨으로써, 합성데이터의 신뢰성을 구조적으로 보증한다. Applied Intuition(기업가치 150억 달러)이나 NVIDIA 등의 경쟁자가 시뮬레이션이나 생성에 특화된 반면, 페블러스는 진단-생성-검증-거버넌스의 수직 통합을 제공한다 [25].

둘째, 뉴로-심볼릭 접근을 통해 도메인 규칙 준수와 물리적 현실성을 동시에 보장한다. 단순한 통계적 합성이나 GAN 기반 생성과 달리, 생성 데이터가 물리 법칙과 도메인 프로토콜에 부합하는지를 자동으로 검증한다.

셋째, ISO/IEC 5259 및 42001 표준 내장과 KOLAS 공인시험기관 인정을 통해, 규제 환경이 엄격한 국방·의료·에너지 도메인에서 합성데이터의 공식적 품질 인증이 가능하다. 데이터 이미징 기술(미국 특허 US 12,481,720 B2)이 ISO 5259 적합성 평가의 실질적 구현 수단이 됨으로써, 기술적 진입장벽이 형성된다.

---

## 8. 결론 및 향후 전망

### 8.1 요약

본 논문에서는 데이터클리닉 서비스에서 축적한 데이터 품질 검증 역량을 기반으로, AADS 기술을 접목하여 설계한 Data Greenhouse와 PebbloSim 두 축의 플랫폼 아키텍처를 소개했다. 데이터클리닉의 진단-처방-치료 모델이 Data Greenhouse의 자율 순환 루프로 확장되고, PebbloSim의 뉴로-심볼릭 시뮬레이션이 피지컬 AI 학습을 위한 고품질 합성데이터를 제공하는 구조를 제시했다.

피지컬 AI 시장이 2034년까지 500억 달러 이상으로 성장하고, 합성데이터가 AI 학습 데이터의 주류로 전환되는 산업 동향 속에서, 데이터 품질 검증 역량과 합성데이터 생성을 수직 통합한 접근은 유효한 시장 포지셔닝을 제공한다.

### 8.2 향후 연구 및 사업화 방향

AADS 프로젝트는 2025년 4분기 코어 에이전트 루프 PoC 완료, 2026년 2분기 파일럿 프로그램 출시, 2026년 4분기 AADS 플랫폼 베타 릴리스를 목표로 추진된다. Phase 2에서는 산업별 멀티모달 VLM(기술 문서, 결함 이미지 특화), 비용 최적화를 위한 추론 라우터(70% 비용 절감 목표), 국방·공공 부문을 위한 소버린 배포 환경을 개발할 계획이다.

사업화 모델은 합성 엔진 라이선싱과 AI-Ready 데이터 패키지 판매의 이중 구조를 지향한다. 피지컬 AI 생태계 내에서 "데이터 품질이 보증된 합성데이터 플랫폼"이라는 독자적 포지셔닝을 통해, 데이터 부족 문제를 구조적으로 해결하는 인프라 역할을 수행하고자 한다.

---

## 참고문헌

[1] NVIDIA, "Physical AI Open Models and Frameworks Advance Robots and Autonomous Systems," NVIDIA Blog, 2025. https://blogs.nvidia.com/blog/physical-ai-open-models-robot-autonomous-systems-omniverse/

[2] SNS Insider, "Physical AI Market Report," 2025. https://www.snsinsider.com/reports/physical-ai-market-9007

[3] A. Ng et al., "Data-Centric Artificial Intelligence: A Survey," arXiv:2212.11854, 2022.

[4] Figure AI, "Series C Press Release," 2025. https://www.figure.ai/news/series-c

[5] M. Salvato et al., "Crossing the Reality Gap: A Survey on Sim-to-Real Transferability of Robot Controllers in Reinforcement Learning," Applied Intelligence, Springer, 2024.

[6] Gartner, "Gartner Identifies Top Trends in Data and Analytics for 2025," Gartner Newsroom, 2025.

[7] Grand View Research, "Synthetic Data Generation Market Report," 2025. https://www.grandviewresearch.com/industry-analysis/synthetic-data-generation-market-report

[8] M. Tan et al., "Agentic AI: A Comprehensive Survey of Architectures, Applications, and Future Directions," Artificial Intelligence Review, Springer Nature, 2025.

[9] S. Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models," ICLR 2023.

[10] Q. Wu et al., "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation Framework," Microsoft Research, 2023.

[11] Gartner, "Gartner Predicts 40 Percent of Enterprise Apps Will Feature Task-Specific AI Agents by 2026," Gartner Press Release, 2025.

[12] S. Luo et al., "Data Agent: A Holistic Architecture for Orchestrating Data+AI Ecosystems," Tsinghua University, 2024.

[13] ISO/IEC 5259-2:2024, "Artificial Intelligence — Data Quality for Analytics and Machine Learning (ML) — Part 2: Data Quality Measures," ISO, 2024.

[14] M. K. Sarker et al., "A Review of Neuro-Symbolic AI Integrating Reasoning and Learning for Advanced Cognitive Systems," ScienceDirect, 2025.

[15] S. Mansouri et al., "A Comprehensive Review of Neuro-Symbolic AI for Robustness, Uncertainty Quantification, and Intervenability," Arabian Journal for Science and Engineering, Springer Nature, 2025.

[16] N. Lambert, RLHF Book: Reinforcement Learning from Human Feedback, 2025. https://rlhfbook.com/

[17] S. V. Albrecht, F. Christianos, and L. Schäfer, Multi-Agent Reinforcement Learning: Foundations and Modern Approaches, MIT Press, 2024.

[18] W. Chen et al., "LLM-based Multi-Agent Reinforcement Learning: Current and Future Directions," arXiv:2405.11106, 2024.

[19] N. Shinn et al., "Reflexion: Language Agents with Verbal Reinforcement Learning," NeurIPS 2023.

[20] J. M. Alves et al., "A Systematic Review of Synthetic Data Generation Techniques Using Generative AI," Electronics, MDPI, Vol. 13(17), 3509, 2024.

[21] X. He et al., "Generative AI for Synthetic Data Generation: Methods, Challenges and the Future," arXiv:2403.04190, 2024.

[22] K. Ma et al., "Agentic Artificial Intelligence (AI): Architectures, Taxonomies, and Evaluation of Large Language Model Agents," arXiv:2601.12560, 2025.

[23] (주)페블러스, "Pebblous — AI-Ready Data Infrastructure," https://www.pebblous.ai

[24] (주)페블러스, "데이터클리닉: AI 데이터 품질 관리 플랫폼," Pebblous Blog, https://blog.pebblous.ai/project/DataClinic/

[25] (주)페블러스, "피지컬 AI 데이터 인프라의 전략적 기회: 페블러스 비즈니스 모델을 중심으로," Pebblous Blog, 2026. https://blog.pebblous.ai/project/PhysicalAI/physical-ai-data-infra-strategy/ko/

[26] C. Lu et al., "The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery," arXiv:2408.06292, ICLR 2025.

[27] Q. Huang et al., "MLAgentBench: Evaluating Language Agents on Machine Learning Experimentation," ICML 2024.
