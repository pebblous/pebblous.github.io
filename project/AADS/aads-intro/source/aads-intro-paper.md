# 데이터클리닉에서 피지컬 AI까지: AADS 기반 합성데이터 플랫폼의 설계와 진화

**저자:** 이정원, 이주행
**소속:** (주)페블러스
**교신저자:** joohaeng@pebblous.ai
**투고일:** 2026년 3월

---

## 초록

피지컬 AI의 부상으로 제조, 로봇, 국방 등 물리적 환경에서 동작하는 AI 시스템의 수요가 급증하고 있으나, 이들 도메인의 학습 데이터는 구조적 희소성과 품질 관리의 어려움이라는 근본적 한계를 지닌다. 특히 데이터 과학자 업무 시간의 80%가 수동적 데이터 준비 작업에 소요되는 현실은 자동화된 데이터 품질 관리 체계의 필요성을 시사한다 [1]. 본 논문에서는 에이전틱 AI 데이터 사이언티스트(Agentic AI Data Scientist, AADS) 기술을 기반으로, 데이터 품질 진단에서 합성데이터 생성, 시뮬레이션까지를 통합하는 두 플랫폼, Data Greenhouse와 PebbloSim의 설계와 진화 경로를 제시하였다. AADS는 뉴로-심볼릭 AI 접근을 통해 신경망 기반 데이터 임베딩 분석과 온톨로지 기반 논리적 추론을 결합함으로써, 설명 가능한 진단과 자율적 처방을 수행한다 [2]. 페블러스 데이터클리닉의 품질 검증 역량이 AADS로 소프트웨어화되어 Data Greenhouse의 자율 순환 루프와 PebbloSim의 고충실도 시뮬레이션 환경으로 확장됨을 확인하였다. 본 연구는 데이터 희소 도메인에서 합성데이터 기반 피지컬 AI 개발의 실현 가능한 아키텍처를 제안하였다는 점에서 의의를 가진다.

**키워드:** 피지컬AI, 합성데이터, AADS, Data Greenhouse, PebbloSim, 뉴로-심볼릭, 에이전틱AI

---

## 1. 서론

### 1.1 피지컬 AI 시대의 데이터 문제

인공지능은 디지털 챗봇과 텍스트 처리 중심의 패러다임을 넘어, 제조, 로봇, 국방 등 물리적 세계와 직접 상호작용하는 피지컬 AI(Physical AI) 시대로 전환되고 있다 [3][4]. NVIDIA의 Jensen Huang은 "피지컬 AI의 다음 물결이 도래했다"고 선언하며, Omniverse, Isaac Sim, Cosmos 등의 통합 플랫폼을 통해 로봇과 자율 시스템을 위한 인프라를 구축하고 있다 [4]. 2026년에는 합성데이터 생성-증강-평가를 통합한 Physical AI Data Factory Blueprint를 발표하였다 [5]. Tesla Optimus, Figure AI 등 휴머노이드 로봇 기업은 시뮬레이션 기반 Sim-to-Real 전이 학습을 핵심 전략으로 채택하고 있다 [6][7].

이러한 전환의 배경에는 시뮬레이션과 합성데이터의 결정적 역할이 자리한다. Gartner는 2026년까지 AI 및 애널리틱스 개발에 사용되는 데이터의 60%가 합성데이터로 대체될 것으로 전망하였다 [8]. 글로벌 피지컬 AI 시장 규모는 2025년 약 52억 달러에서 2033년 497억 달러 이상으로 성장할 것으로 예측되며(CAGR 32.5%) [3], 이에 따른 고난이도 멀티모달 데이터 수요가 폭증하고 있다.

그러나 국방, 의료, 에너지 등 데이터 희소 도메인에서는 실세계 데이터 확보가 구조적으로 제한된다 [4]. 보안 제약, 윤리적 한계, 물리적 실험 비용 등으로 인하여 충분한 학습 데이터를 수집하는 것이 사실상 불가능하며, 이는 피지컬 AI의 산업적 확산을 저해하는 핵심 병목으로 작용한다. AI 개발의 병목이 모델이 아닌 데이터 품질에 있음이 명확해짐에 따라 [9], Andrew Ng이 제창한 데이터 중심 AI(Data-Centric AI) 패러다임 [31]은 모델 아키텍처보다 데이터 품질이 AI 성능의 핵심 결정 요인임을 강조하며, 자동화된 합성데이터 생성과 품질 보증 체계의 필요성을 촉구하고 있다.

### 1.2 연구 배경 및 목적

(주)페블러스는 데이터클리닉 서비스를 통해 AI 학습 데이터의 품질 진단과 개선 역량을 축적하여 왔다. 데이터클리닉은 ISO/IEC 5259 국제 표준에 기반한 품질 측정 기준을 내재화하여, 진단 결과가 국제 표준에 부합하는 품질 증적(Evidence)으로 활용될 수 있도록 설계되었다 [10]. 현대자동차, LG전자, LG유플러스, 한화비전 등 주요 기업과의 협업을 통해 제조, 로봇, 국방 분야의 데이터 품질 검증 사례를 축적하였으며, 조달청 혁신시제품 지정(2025)과 세계 최초 ISO/IEC 5259-3 인증을 획득하였다. KOLAS 공인시험기관 인정을 통해 규제 환경이 엄격한 국방·의료·에너지 도메인에서 합성데이터의 공식적 품질 인증이 가능한 인프라를 확보하였다. Gartner는 페블러스를 '결합 서비스 모델(Paired Services Model)'의 대표 사례로 명시한 바 있다 [9].

그러나 기존 데이터클리닉의 수작업 중심 운영 방식은 확장성의 한계를 지닌다. 데이터 과학자 업무 시간의 80%가 데이터 준비에 소요되는 현실에서 [1], 수동적 진단-처방 프로세스로는 급증하는 피지컬 AI 데이터 수요에 대응하기 어렵다. 이에 본 연구에서는 AADS 기술을 도입하여, 데이터 품질 진단에서 개선까지의 전 과정을 자율적으로 수행하는 소프트웨어 플랫폼으로의 전환을 제안하였다. AADS는 과학기술정보통신부 '글로벌 빅테크 육성사업'으로 (주)페블러스(주관)와 KISTI(공동연구)가 2025년부터 3년간 총사업비 61억 원 규모로 수행하는 국가 과제이다 [11][12].

본 논문에서는 AADS 기술을 기반으로 한 두 플랫폼을 소개한다. 첫째, Data Greenhouse는 "관측-판단-행동-증명"의 4단계 자율 순환 루프를 통해 데이터가 스스로 진단하고 성장하는 무인화 데이터 운영 체계이다 [9]. 둘째, PebbloSim은 고충실도 시뮬레이션 환경에서 피지컬 AI를 위한 멀티모달 합성데이터를 생성하고 Sim-to-Real 전이를 지원하는 플랫폼이다 [1][11].

본 논문의 구성은 다음과 같다. 2장에서는 피지컬 AI, 합성데이터, AI 에이전트의 관련 산업 동향을 분석하고, 3장에서는 데이터클리닉 서비스의 개요와 한계를 논의한다. 4장에서는 AADS의 기술 개요와 핵심 기술 요소를 기술하며, 5장과 6장에서는 각각 Data Greenhouse와 PebbloSim의 설계 철학과 아키텍처를 상세히 기술한다. 7장에서는 데이터클리닉에서 두 플랫폼으로의 진화 경로를 분석하고, 8장에서 결론과 향후 연구 방향을 제시한다.

---

## 2. 관련 산업 동향

### 2.1 피지컬 AI 시장 동향

피지컬 AI(Physical AI)는 디지털 환경에 국한되었던 AI가 물리적 세계와 상호작용하는 단계로 확장된 패러다임을 의미하며, 2020년대 중반 이후 로봇공학, 자율주행, 제조 자동화 분야에서 핵심 의제로 부상하였다. SNS Insider에 따르면, 글로벌 피지컬 AI 시장 규모는 2025년 약 52.3억 달러에서 2033년 497.3억 달러로 연평균 32.5%의 성장이 전망되었다 [3]. 한편 MarketsandMarkets는 체화 AI(Embodied AI) 시장이 2025년 44.4억 달러에서 2030년 230.6억 달러로 연평균 39.0% 성장할 것으로 예측하였다 [13].

이러한 성장의 중심에는 NVIDIA의 피지컬 AI 생태계 전략이 위치하였다. NVIDIA는 Omniverse 플랫폼을 기반으로 3D 시뮬레이션 환경을 구축하고, Isaac Sim을 통해 로봇 학습용 합성데이터를 생성하며, 2024년 말 발표된 Cosmos World Foundation Model(WFM)로 텍스트·이미지·영상으로부터 물리 법칙에 기반한 가상 세계를 생성하는 파이프라인을 완성하였다 [4][5]. GTC 2026에서 발표된 Physical AI Data Factory Blueprint는 데이터 큐레이션, 증강, 평가를 단일 파이프라인으로 통합한 오픈 참조 아키텍처로, Skild AI, FieldAI, Uber 등이 조기 채택하였다 [5].

휴머노이드 로봇 시장 역시 피지컬 AI 확산의 주요 동인으로 작용하였다. MarketsandMarkets는 해당 시장이 2025년 29.2억 달러에서 2030년 152.6억 달러로 연평균 39.2% 성장할 것으로 전망하였다 [14]. Tesla는 Optimus 로봇의 2025년 5,000~10,000대 생산을 목표로 양산 라인을 구축 중이며, Figure AI는 Microsoft, NVIDIA, OpenAI 등으로부터 7.5억 달러 이상의 투자를 유치하고 BMW 제조 현장에 Figure 02를 배치하였다 [14]. Morgan Stanley Research는 휴머노이드 로봇 시장이 관련 공급망을 포함하여 2050년 5조 달러 규모에 도달할 것으로 전망하였다 [15].

**Table 1.** 피지컬 AI 관련 시장 전망 요약

| 시장 세그먼트 | 2025년 규모 | 2030~2033년 전망 | CAGR | 출처 |
|--------------|------------|-----------------|------|------|
| 피지컬 AI | $5.2B | $49.7B (2033) | 32.5% | SNS Insider [3] |
| 체화 AI (Embodied AI) | $4.4B | $23.1B (2030) | 39.0% | MarketsandMarkets [13] |
| 휴머노이드 로봇 | $2.9B | $15.3B (2030) | 39.2% | MarketsandMarkets [14] |

Sim-to-Real 전이 기술의 확산은 피지컬 AI의 산업 적용을 가속화하였다. CVPR 2025에서 발표된 RoboTwin 2.0은 MLLM 기반 태스크 생성과 도메인 랜덤화로 양팔 조작 분야의 고충실도 합성 데이터를 생성하여 cross-embodiment 일반화를 실증하였다 [6]. CoRL 2024에서 발표된 TRANSIC은 Human-in-the-Loop 보정을 통해 가구 조립 등 접촉 집약적 작업에서 sim-to-real 갭을 극복하였다 [7]. 이처럼 시뮬레이션 기반 합성데이터의 역할이 피지컬 AI 전반에서 확대됨에 따라, 합성데이터의 품질 관리 수요가 급증하고 있다.

### 2.2 합성데이터 시장 동향

합성데이터(Synthetic Data)는 실제 데이터의 통계적 특성을 모사하여 인위적으로 생성된 데이터를 의미하며, 개인정보 보호, 데이터 희소성, 클래스 불균형 등의 문제를 해결하는 핵심 수단으로 주목받았다. Gartner는 2024년 기준 AI 학습에 사용되는 데이터의 60%가 합성데이터일 것으로 예측하였으며, 2030년까지 합성데이터가 AI 모델 학습의 주된 데이터 소스가 될 것으로 전망하였다 [8]. Mordor Intelligence에 따르면, 글로벌 합성데이터 생성 시장은 2025년 약 5.1억 달러에서 2030년 26.7억 달러로 연평균 39.4%의 성장이 예상되었다 [16].

주요 기업 동향을 살펴보면, NVIDIA는 Cosmos WFM과 Omniverse 기반의 물리적 합성데이터 생성에 집중하였고, Synthesis AI(현 Synthesis Labs)는 얼굴·인체 합성 이미지, Datagen(NVIDIA 인수)은 실내 환경 합성데이터, AI.Reverie는 군사·국방 분야 합성 시뮬레이션에 특화하여 각자의 시장을 형성하였다. 이들은 공통적으로 "합성 데이터 팩토리(Synthetic Data Factory)" 모델을 지향하며, 대규모 자동화된 데이터 생성 파이프라인을 구축하고 있다 [4][5].

피지컬 AI 분야에서 합성데이터 수요는 특히 급격하게 증가하였다. 로봇 학습에 필요한 3D 환경, 센서 시뮬레이션, 접촉 역학 데이터는 실제 수집이 극도로 비용이 높고 위험하기 때문에, 시뮬레이션 기반 합성이 사실상 유일한 대안으로 자리 잡았다 [4]. EU AI Act 등 규제 환경 역시 개인정보를 포함한 실데이터 사용 전 합성 대안의 검토를 의무화하여, 합성데이터 시장의 성장을 촉진하였다 [16].

**Table 2.** 합성데이터 시장 전망

| 출처 | 2025년 규모 | 2030년 전망 | CAGR |
|------|------------|------------|------|
| Mordor Intelligence | $0.51B | $2.67B | 39.4% |
| Fortune Business Insights | — | $2.34B | 31.1% |
| Strategic Market Research | $1.3B (2024) | $9.7B | 37.4% |

그러나 합성데이터의 양적 확대에도 불구하고, 품질 관리에 대한 체계적 접근은 부족한 상태로 남아 있었다. Iskander et al. [17]은 소량의 고품질 합성데이터가 대량의 저품질 데이터를 능가함을 실증하였으며, Gartner는 2025년 예측에서 합성데이터 관리 실패가 AI 거버넌스, 모델 정확도, 규제 준수에 심각한 리스크를 초래할 것이라고 경고하였다 [8]. 이는 합성데이터 생성 단계에서부터 품질 진단과 거버넌스를 내재화한 플랫폼의 필요성을 부각시킨다.

### 2.3 AI 에이전트와 데이터 자동화

에이전틱 AI(Agentic AI)는 대규모 언어 모델(LLM)을 기반으로 자율적 계획, 실행, 반성을 수행하는 에이전트 시스템을 의미하며, 2024~2025년 사이 산업 전반에서 급속히 부상하였다. MarketsandMarkets에 따르면, AI 에이전트 시장은 2025년 78.4억 달러에서 2030년 526.2억 달러로 연평균 46.3%의 성장이 전망되었다 [18]. Omdia는 2030년까지 에이전틱 AI가 전체 생성형 AI 시장의 31%를 차지할 것으로 예측하였다 [19].

LangChain, AutoGPT, CrewAI 등의 오픈소스 프레임워크가 멀티에이전트 시스템 구축의 진입 장벽을 낮추었으며, Yao et al.의 ReAct [32]는 추론(Reasoning)과 행동(Acting)의 시너지를 통해 LLM 기반 에이전트의 기초를 확립하였다. Wu et al.의 AutoGen [33]은 멀티에이전트 대화 프레임워크로 복수 에이전트의 협력적 과업 수행을 가능하게 하였으며, Shinn et al.의 Reflexion [34]은 언어적 강화학습을 통해 에이전트의 자기 반성(self-reflection) 능력을 구현하였다. 이를 기반으로 데이터과학 영역에 에이전틱 접근이 확산되었다. Majumder et al. [20]은 45개 LLM 기반 데이터과학 시스템을 6단계 라이프사이클에 매핑한 서베이를 통해, 데이터 수집부터 모델 배포까지 전 과정의 자동화가 진행되고 있음을 보고하였다. Trirat et al. [21]의 AutoML-Agent는 검색 증강 계획(RAP) 전략으로 전체 ML 파이프라인의 자동화를 실증하였으며, DataFlow [22]는 자연어 명령을 실행 가능한 데이터 준비 파이프라인으로 변환하는 LLM 기반 프레임워크를 제안하였다.

**Table 3.** 에이전틱 AI 시장 전망

| 출처 | 2025년 규모 | 2030년 전망 | CAGR |
|------|------------|------------|------|
| MarketsandMarkets | $7.8B | $52.6B | 46.3% |
| Omdia (엔터프라이즈) | $1.5B | $41.8B | — |
| Precedence Research | $7.6B | $199.1B (2034) | 43.8% |

데이터 품질 영역에서도 에이전틱 자동화가 적용되기 시작하였다. CleanAgent [23]는 멀티에이전트 구조로 코드 없는 데이터 표준화를 구현하였고, AURA [24]는 다중 AI 에이전트 협업으로 ground truth 없이 대규모 멀티모달 데이터 어노테이션을 수행하여 기존 대비 5.8%의 정확도 향상을 달성하였다. 특히 과학 연구 자체를 자동화하려는 'AI Scientist' 연구가 부상하고 있다. Lu et al. [35]은 LLM 에이전트가 가설 수립, 실험 설계, 코드 작성, 결과 분석, 논문 작성까지 과학 연구의 전 과정을 자율 수행하는 시스템을 실증하였으며, Huang et al. [36]은 ML 연구 과업에서 AI 에이전트의 성능을 체계적으로 벤치마킹하는 프레임워크를 제시하였다. 이러한 AI Scientist 패러다임은 데이터 과학 분야에도 직접 적용 가능하며, AADS는 이를 데이터 품질 관리 도메인에 특화한 사례이다. 그러나 Gu et al. [25]이 지적한 바와 같이, 기존 LLM 에이전트 연구는 정형 데이터와 텍스트 중심에 편중되어 있으며, 피지컬 AI가 요구하는 멀티모달 합성데이터의 진단·생성·검증을 통합하는 에이전틱 시스템은 아직 미개척 영역으로 남아 있다.

---

## 3. 데이터클리닉: AADS 이전의 기반

### 3.1 데이터클리닉 서비스 개요

페블러스 데이터클리닉(DataClinic)은 AI 학습 데이터의 품질을 체계적으로 진단하고 개선하는 서비스로, 의료의 "진단 → 처방 → 치료" 모델을 데이터 품질 관리에 적용한다. 핵심 기술인 DataLens 엔진은 DNN 기반 아키텍처에서 뉴로-심볼릭 시스템으로 진화한 데이터 이미징(Data Imaging) 기술(미국 특허 US 12,481,720 B2)을 활용하여, 데이터 분포·이상치·결측·편향을 시각적 이미지로 변환해 직관적 품질 상태를 파악한다. 데이터 과학자가 업무 시간의 80%를 수동적 데이터 준비 작업에 소요하는 산업적 비효율 [1]을 해소하기 위해, 국제 표준 ISO/IEC 5259 시리즈의 품질 측정 기준(Quality Measures)을 내재화하여 정확성, 완전성, 일관성, 적시성 등을 정량적으로 평가한다 [10].

데이터클리닉의 진단 체계는 세 단계(Level)로 구성된다. Level 1(기초 통계 진단)은 클래스 분포, 픽셀 히스토그램, 해상도 분포 등 기초 통계량을 산출하여 데이터셋의 구조적 특성을 파악한다. Level 2(매니폴드 진단)는 사전 학습된 신경망의 임베딩 공간에서 데이터의 밀도 분포, 이상치, 클래스 간 중첩을 분석하며, t-SNE 등 차원 축소 시각화를 통해 데이터 공간의 과밀(over-density)과 공백(void) 영역을 탐지한다. Level 3(커스텀 도메인 진단)는 고객의 도메인 특화 규칙과 온톨로지를 반영한 맞춤형 진단으로, 제조 결함 분류 기준이나 의료 영상 판독 가이드라인 등 도메인 지식을 진단 파이프라인에 통합한다.

이 서비스는 현대자동차, LG전자 등 주요 기업의 AI 학습 데이터 품질 검증에 적용되었으며, 진단 결과는 ISO/IEC 5259 표준에 부합하는 품질 증적(Evidence)으로 활용된다 [10]. Gartner는 페블러스를 진단과 개선을 결합한 '결합 서비스 모델(Paired Services Model)'의 대표 사례로 평가하였다 [9].

### 3.2 데이터클리닉의 한계와 진화

데이터클리닉은 수작업 중심의 품질 검증 프로세스에 의존한다. 전문가가 진단 결과를 해석하고, 도메인 규칙을 수동으로 설정하며, 개선 방안을 직접 설계해야 하는 구조적 한계가 존재한다. 이는 프로젝트 수가 증가할수록 선형적으로 인력이 필요하다는 확장성(scalability) 문제를 야기한다.

그러나 다양한 산업 도메인에 걸친 품질 검증 사례가 축적됨에 따라, 반복적으로 발생하는 패턴이 관찰되었다. 클래스 불균형 탐지 후 합성 데이터 증강을 처방하거나, 이상치 군집 발견 시 데이터 정제를 권고하는 일련의 "진단-처방" 시퀀스가 도메인을 초월하여 유사한 형태로 나타난 것이다. 이러한 패턴의 규칙성은 곧 자동화 가능성을 시사한다.

Gartner가 데이터 품질 시장의 핵심 과제로 "진단과 개선의 긴밀한 통합", "완전 자동화", "신뢰성 확보"를 제시한 것 [9]은 이 전환의 방향성과 일치한다. 데이터클리닉의 축적된 도메인 지식과 ISO 5259 기반 품질 프레임워크를 자율 에이전트가 운용하는 "에이전틱 데이터클리닉(Agentic DataClinic)"으로의 진화가 필연적 과제로 대두되었다.

---

## 4. AADS: 자율 에이전트 기반 데이터 과학

### 4.1 AADS 기술 개요

AADS(Agentic AI Data Scientist)는 데이터 품질 진단에서 개선까지 전 과정을 자율적으로 수행하는 에이전트형 AI 데이터 과학자이다 [1]. 과학기술정보통신부 '글로벌 빅테크 육성사업'으로 (주)페블러스(주관)와 KISTI(공동연구)가 2025년부터 3년간 총사업비 61억 원으로 수행하는 국가 R&D 과제의 핵심 기술이다 [11][12].

최근 Lu et al.의 "The AI Scientist" [35]는 LLM이 가설 수립에서 논문 작성까지 과학 연구의 전 과정을 자동화할 수 있음을 실증하였고, Huang et al.의 "MLAgentBench" [36]는 ML 연구 과업에서 에이전트의 벤치마킹 프레임워크를 제시하였다. AADS는 이러한 AI Scientist 패러다임을 데이터 품질 관리 도메인에 특화하여 적용한 사례이다. AADS의 설계 철학은 데이터 과학자의 전문적 판단 과정을 에이전트 루프로 소프트웨어화하는 것이다. 자율 에이전트가 "수집(Collect) → 정제(Refine) → 생성(Generate) → 검증(Validate) → 거버넌스(Govern)"의 전체 데이터 생애주기를 운용하며, 각 단계에서 플래너(Planner)가 작업을 분해하고, 전문 도구(Data Diagnosis, Data Diet, Data Bulk-up, Data Replica)가 실행하며, 검증기(Verifier)가 결과를 평가하는 구조이다 [1][11].

이 아키텍처의 핵심은 뉴로-심볼릭(Neuro-Symbolic) 접근의 채택이다. 신경망 기반 임베딩(Neural)이 데이터의 통계적 패턴과 밀도 분포를 포착하고, 온톨로지 기반 규칙 체계(Symbolic)가 도메인 지식과 인과 관계를 추론한다 [2]. 이 이중 구조를 통해 단순한 이상 탐지를 넘어 "왜 이 데이터가 문제인지"를 인과적으로 설명할 수 있다. 또한 Human-in-the-Loop 승인 게이트를 두어, 에이전트의 자율 판단이 일정 신뢰도 이하이거나 고위험 의사결정인 경우 인간 전문가의 승인을 요구함으로써 신뢰성과 안전성을 확보한다 [9].

### 4.2 핵심 기술 요소

AADS를 구성하는 핵심 기술 요소는 다음과 같다.

*뉴로-심볼릭 합성 엔진.* 데이터 품질 진단과 합성 데이터 생성의 기반 기술이다. Neural 레이어는 사전 학습 모델의 임베딩 공간에서 데이터 밀도, 클러스터링, 이상치를 분석하고, Symbolic 레이어는 도메인 온톨로지와 지식 그래프를 통해 논리적 제약 조건과 인과 규칙을 적용한다 [2]. 카우츠(Kautz)의 AI 분류 체계에서 다섯 번째 단계에 해당하는 이 접근은 신경망의 "빠른 사고(Fast Thinking)"와 심볼릭 AI의 "느린 사고(Slow Thinking)"를 결합하여 설명 가능하고 신뢰할 수 있는 진단-처방을 수행한다.

*RLHF 기반 품질 보증 루프.* 에이전트가 생성한 합성 데이터의 품질을 인간 피드백 강화학습(Reinforcement Learning from Human Feedback)으로 지속 개선한다. 전문가의 품질 판단을 보상 신호로 활용하여, 생성 모델이 도메인 요구사항에 점진적으로 정렬(alignment)되는 메커니즘이다.

*커리큘럼 러닝(Curriculum Learning).* 합성 데이터 생성 시 단순한 사례에서 복잡한 사례로 점진적으로 난이도를 높여가는 전략이다. 이를 통해 생성 모델이 기본 패턴을 먼저 학습한 후 에지 케이스(edge case)와 희귀 시나리오를 안정적으로 생성할 수 있다.

*멀티에이전트 강화학습(MARL).* 진단 에이전트, 정제 에이전트, 생성 에이전트, 검증 에이전트가 공유 환경에서 협업하며, 각 에이전트가 독립적 보상 함수를 최적화하되 전체 데이터 품질이라는 공동 목표에 수렴하도록 설계된다.

이들 기술이 통합되어 AADS의 자율 순환 아키텍처(Autonomous Cycle-Loop)를 형성한다.

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

Data Greenhouse는 데이터를 단순히 수집·저장하는 대상이 아니라, 씨앗에서 수확까지 돌보는 '재배' 대상으로 바라보는 패러다임 전환에서 출발한다. 전통적 데이터 플랫폼이 저장과 처리에 집중했다면, Data Greenhouse는 데이터의 생애주기 전체 — 파종(수집), 육성(정제·증강), 검증(품질 보증), 수확(AI-Ready 패키지 배포) — 를 하나의 통합 거버넌스 체계 아래 관리한다.

이 플랫폼의 핵심은 AADS 에이전트가 "관측(Observe) – 판단(Orchestrate) – 행동(Action) – 증명(Govern)"의 4단계 자율 순환 루프를 수행한다는 점이다 [9]. 데이터가 스스로 진단하고 치료하여 성장하는 무인화 운영 체계를 지향하되, 중요한 의사결정 지점에는 Human-in-the-Loop 승인 게이트를 두어 자율성과 신뢰성의 균형을 확보한다. Data Greenhouse는 기존 데이터 플랫폼(Snowflake, Databricks 등)을 대체하지 않고, 그 위에 얹혀 데이터 운영의 책임을 지는 '책임 레이어(Responsibility Layer)'로 포지셔닝된다 [9][26].

### 5.2 아키텍처

Data Greenhouse의 아키텍처는 5개 계층으로 구성되며, 각 계층은 자율 순환 루프의 단계와 대응한다.

**Table 5.** Data Greenhouse 아키텍처 계층 구성

| 계층 | 역할 | 핵심 기능 |
|------|------|---------|
| Platform Adapter Layer | 기존 플랫폼 연결 | Snowflake/Databricks/DataLake 신호(메타데이터, 비용, 로그) 관찰 및 개선 결과 Write-back |
| Observation Layer | 데이터 현황 관측 | Neural(임베딩) 기반 과밀·공백 시각화 + Symbolic(온톨로지) 기반 맥락·규제 위험 해석 |
| Orchestration Layer | 판단 및 계획 수립 | AADS 에이전트의 진단 결과 기반 개선 계획 수립, Human-in-the-Loop 승인 게이트 |
| Action Layer | 품질 개선 실행 | Data Diet, Data Bulk-up(GenQA·Gen-VLM), Data Replica, RAG Optimization |
| Governance Layer | 증적 및 규제 준수 | ISO/IEC 5259·ISO 42001 기반 품질 매핑, 감사 로그 자동화 |

**도메인 온톨로지 및 지식 그래프 계층.** Observation Layer의 Symbolic 모듈은 도메인별 온톨로지와 지식 그래프를 유지하여 데이터의 의미적 맥락을 해석한다. 이를 통해 단순 통계적 이상 탐지를 넘어 "왜 이 데이터가 문제인지" 인과적으로 설명할 수 있다 [2].

**합성데이터 생성 파이프라인.** Action Layer는 뉴로-심볼릭 엔진을 활용한 이중 생성 전략을 채택한다. GenQA는 텍스트 LLM으로 희소 케이스의 추론 데이터를 합성하고, Gen-VLM은 Vision-Language Model을 적용하여 제조·로봇 현장의 시각적 상황 인지 데이터를 생성한다 [9][26].

**품질 검증 자동화 모듈.** Governance Layer는 ISO/IEC 5259 시리즈의 품질 측정 기준(정확성, 완전성, 일관성, 적시성)을 내재화하여, 모든 데이터 개선 활동의 결과가 국제 표준에 부합하는 품질 증적(Evidence)으로 자동 기록된다 [10].

**AI-Ready 데이터 패키지 배포 체계.** 검증을 통과한 데이터는 도메인·태스크별로 패키징되어 즉시 AI 학습에 투입 가능한 상태로 배포된다. Data Diet으로 중복을 제거하고, Data Bulk-up으로 클래스 불균형을 해소하며, Data Replica로 민감 정보를 비식별화한 상태의 최적화된 패키지가 산출물이다.

---

## 6. PebbloSim: 피지컬 AI 시뮬레이션 플랫폼

### 6.1 설계 철학

피지컬 AI는 현실 세계의 복잡한 물리 법칙과 상호작용해야 하므로, 실제 환경에서 충분한 학습 데이터를 확보하는 것이 구조적으로 어렵다 [4]. PebbloSim은 이 문제를 고충실도 시뮬레이션 기반 합성데이터 생성으로 해결한다. 핵심 설계 원칙은 "물리적 환각(Physical Hallucination)의 제거"이다. 생성 AI 모델이 현실에 존재하지 않는 물리적 상황을 만들어내는 문제를 뉴로-심볼릭 하이브리드 월드 모델로 해결하여, 생성된 합성데이터가 실제 물리 법칙과 도메인 규칙을 위반하지 않도록 보장한다.

설계 시 Sim-to-Real 전이(Transfer)를 최우선으로 고려하여, 시뮬레이션에서 학습한 정책이 실제 환경으로 이전될 때 성능 저하를 최소화하도록 도메인 랜덤화(Domain Randomization)와 물리 파라미터 변이를 체계적으로 적용한다 [38]. PebbloSim에서 생성된 합성데이터는 Data Greenhouse의 품질 검증 파이프라인으로 직접 연동되어, 뉴로-심볼릭 검증을 거친 후 AI-Ready 패키지로 배포된다.

### 6.2 아키텍처

PebbloSim의 아키텍처는 시뮬레이션 환경, 데이터 생성, 에이전트 훈련, 검증의 4개 모듈로 구성된다.

**시뮬레이션 환경.** OpenAI Gym 호환 인터페이스를 제공하여 강화학습 에이전트가 표준 API로 환경과 상호작용할 수 있다. 물리 엔진 기반의 고충실도 렌더링으로 중력, 마찰, 충돌, 조명 변화 등 현실 세계의 물리 법칙을 정밀하게 시뮬레이션하며, 도메인 랜덤화를 통해 시나리오 다양성을 확보한다.

**멀티모달 합성데이터 생성.** 시뮬레이션 실행 중 RGB 이미지, 깊이 맵, LiDAR 포인트 클라우드, 관절 각도·토크 등의 멀티모달 데이터가 동기화되어 수집된다. 각 데이터 포인트에는 완전한 어노테이션(바운딩 박스, 세그멘테이션 마스크, 6DoF 포즈)이 자동으로 부여되어 수동 라벨링 비용을 제거한다.

**에이전트 훈련 및 행동 로그 수집.** 강화학습·모방학습 에이전트의 훈련 과정에서 상태-행동-보상 시퀀스가 체계적으로 기록된다. 커리큘럼 러닝 전략을 적용하여 난이도를 점진적으로 상승시키며, 멀티에이전트 강화학습(MARL) 시나리오를 통해 협업·경쟁 상황의 행동 데이터를 생성한다.

**GenSim Manager.** 탐지된 데이터 공백에 기반하여 추상적 시나리오 명령을 구체적 시뮬레이션 스크립트로 변환한다. 이 과정에서 Vector-to-Param 변환이 핵심적 역할을 한다. 벡터 공간의 공백 좌표를 물리 시뮬레이션의 구체적 파라미터(강우량, 충돌 각도, 속도 등)로 역변환하여, 실제로 부족한 시나리오만 정밀하게 생성한다. 이는 무작위 합성데이터 과잉 생성의 낭비를 제거하고, 데이터 공간에서 결핍된 영역을 타겟팅하는 효율적 생성을 가능하게 한다.

**뉴로-심볼릭 검증.** 생성된 합성데이터가 도메인 규칙에 적합한지 자동으로 검증한다. Neural 모듈이 데이터 분포의 통계적 적합성을 평가하고, Symbolic 모듈이 도메인 온톨로지 기반 규칙(물리 법칙 위반 여부, 안전 제약 준수 등)을 체크하여, 현실과 괴리된 합성 데이터를 필터링한다 [2][10].

### 6.3 적용 사례

**군사 의사결정 지원: MDMP 종단간 자동화.** 군사 의사결정 프로세스(MDMP: Military Decision-Making Process)의 각 단계를 시뮬레이션하여 종단간(End-to-End) 의사결정 데이터를 대량으로 생성한다. 지형, 기상, 적 배치 등의 변수를 조합한 수천 가지 작전 시나리오에서 에이전트가 COA(Course of Action)를 수립·평가하는 과정을 기록하여, 국방 AI 모델의 전술적 판단력 학습에 활용한다.

**자율주행 에지 케이스: 희귀 시나리오 대량 생성.** 역주행 차량, 갑작스런 보행자 출현, 극단적 기상 조건 등 실제 도로에서는 극히 드물지만 안전에 결정적인 에지 케이스를 체계적으로 생성한다. 도메인 랜덤화를 통해 조명·날씨·교통 밀도를 변이시키며, 각 시나리오에 대한 완전한 센서 데이터(카메라, LiDAR, 레이더)와 정답 라벨을 자동으로 산출한다.

**로봇 조작: 시뮬레이션 기반 행동 데이터.** 산업용 로봇의 물체 파지(Grasping), 조립, 정밀 배치 등 복잡한 매니퓰레이션 태스크를 시뮬레이션한다. 물체의 형상·무게·마찰 계수를 랜덤화하고 로봇 관절의 토크·위치 데이터를 수집하여, Sim-to-Real 전이를 통해 실제 로봇의 조작 정책 학습에 직접 활용한다. AADS 1차년도에 구축된 13개 로봇 데이터셋 그룹의 QA 프레임워크와 연계하여 생성 데이터의 도메인 적합성을 보장한다 [27].

---

## 7. 데이터클리닉 → Data Greenhouse → PebbloSim: 진화 경로

### 7.1 세 단계의 연결 구조

페블러스의 기술 진화는 데이터클리닉 → Data Greenhouse → PebbloSim의 세 단계로 구성되며, 각 단계는 이전 단계의 역량을 흡수하면서 더 높은 수준의 자동화와 범위를 확보한다.

**데이터클리닉**은 데이터 품질의 '진단과 치료'를 수행하는 전문가 주도 서비스이다. ISO/IEC 5259 기반의 3-Level 진단(픽셀 통계 → 임베딩 분석 → 도메인 특화)을 통해 데이터의 과밀·공백·이상치를 탐지하고, 뉴로-심볼릭 접근으로 "왜 이 데이터가 문제인지"를 인과적으로 설명한다 [1][2]. 그러나 수작업 기반이라는 확장성 한계가 존재하였다.

**Data Greenhouse**는 데이터의 '재배와 거버넌스'를 자동화하는 플랫폼이다. AADS 에이전트가 "관측–판단–행동–증명"의 4단계 자율 순환 루프를 통해 데이터를 자율적으로 진단하고 개선한다 [9]. 기존 데이터 플랫폼 위에 '책임 레이어'로 작동하며, 데이터클리닉의 품질 검증 노하우를 소프트웨어화하여 내재화하였다.

**PebbloSim**은 피지컬 AI를 위한 '시뮬레이션과 합성' 엔진이다. Data Diet(중복 제거), Data Bulk-up(합성 생성), Data Replica(비식별화)를 통합하며 [1], Sim-to-Real 전이를 지원하여 군사 의사결정, 자율주행 에지 케이스, 로봇 조작 등 데이터 희소 도메인에 고충실도 합성데이터를 공급한다.

**Table 6.** 데이터클리닉 → Data Greenhouse → PebbloSim 진화 비교

| 단계 | 역할 | 핵심 특성 | 자동화 수준 |
|------|------|-----------|-------------|
| 데이터클리닉 | 진단과 치료 | 뉴로-심볼릭 3-Level 진단, ISO 5259 기반 | 전문가 주도 (수작업) |
| Data Greenhouse | 재배와 거버넌스 | AADS 자율 순환 루프, 책임 레이어 | AADS 자율 + Human-in-the-Loop |
| PebbloSim | 시뮬레이션과 합성 | Sim-to-Real 전이, 멀티모달 생성 | 완전 자동화 (에이전트 기반) |

이 세 단계는 선형적 교체가 아닌 누적적 진화(cumulative evolution)이다. 데이터클리닉의 도메인 지식이 Data Greenhouse의 에이전트 판단 기준이 되고, Data Greenhouse의 품질 보증 체계가 PebbloSim의 합성데이터 신뢰성을 담보한다. 세 단계의 통합은 GICO(Generate-Integrate-Certify-Operate) 프레임워크로 체계화된다. 데이터 생성(Generate, PebbloSim) → 기존 데이터와 통합(Integrate, Data Greenhouse) → 품질 인증(Certify, ISO/IEC 5259 적합성 검증) → 운영 배포(Operate, AI-Ready 패키지)의 지속적 플라이휠이 데이터 희소 도메인에서 AI 역량을 누적적으로 강화한다.

### 7.2 AADS가 만든 차별화

AADS는 세 단계를 관통하는 기술적 접착제(technological glue)로서, 페블러스의 차별화를 구성한다.

첫째, **도메인 지식과 자율 에이전트의 결합**이다. 데이터클리닉에서 축적된 산업별(로봇, 제조, 국방, 사회안전) 품질 진단 노하우가 AADS 에이전트의 판단 기준으로 내재화되어, 단순 자동화를 넘어 '맥락을 이해하는 자율 에이전트'를 구현한다. 4개 도메인에서 구축된 전문 QA 데이터셋(로봇 52개, 제조 28개)이 이 과정의 핵심 자산이다 [1][27][28].

둘째, **품질 검증 노하우의 합성데이터 신뢰성 보증 구조 전환**이다. ISO/IEC 5259 기반 품질 측정 기준을 합성데이터 생성 과정에 선제적(proactive)으로 반영하여, 사후 필터링이 아닌 생성 단계에서부터 품질을 제어한다 [10]. 이는 기존 연구들이 외재적(downstream task) 평가에 의존하는 것과 대비되는 접근이다 [17].

셋째, **수직 통합 구조**이다. Applied Intuition(기업가치 $15B), NVIDIA 등 경쟁자가 시뮬레이션이나 생성에 특화된 반면, 페블러스는 진단-생성-검증-거버넌스의 수직 통합을 제공한다. 데이터 생성(PebbloSim) → 품질 검증(Data Greenhouse) → Sim-to-Real 전이 → 피지컬 AI 학습의 End-to-End 파이프라인을 단일 플랫폼 내에서 운영함으로써, 특정 생태계에 종속되지 않는 플랫폼 독립적 합성데이터 품질 관리를 실현한다. ISO/IEC 5259 및 42001 표준 내장과 KOLAS 공인시험기관 인정을 통해 규제 환경이 엄격한 국방·의료·에너지 도메인에서 합성데이터의 공식적 품질 인증이 가능하며, 데이터 이미징 기술(미국 특허 US 12,481,720 B2)이 ISO 5259 적합성 평가의 실질적 구현 수단으로서 기술적 진입장벽을 형성한다.

---

## 8. 결론 및 향후 전망

### 8.1 요약

본 논문은 데이터클리닉에서 피지컬 AI까지의 기술 진화 경로를 AADS 기반 합성데이터 플랫폼의 관점에서 설계하고 제시하였다. 주요 기여는 다음 세 가지로 요약된다.

첫째, 데이터클리닉의 전문가 주도 품질 검증 서비스에서 AADS 자율 에이전트 기반 플랫폼으로의 전환 설계 경로를 제시하였다. 뉴로-심볼릭 AI와 에이전틱 AI의 결합을 통해, 수작업의 확장성 한계를 극복하면서도 도메인 전문성을 보존하는 아키텍처를 설계하였다.

둘째, Data Greenhouse와 PebbloSim이라는 두 플랫폼의 아키텍처를 소개하였다. Data Greenhouse는 '관측–판단–행동–증명'의 4단계 자율 순환 루프로 데이터 거버넌스를 자동화하며, PebbloSim은 Sim-to-Real 전이를 지원하는 고충실도 합성데이터 생성 엔진으로 기능한다.

셋째, 피지컬 AI 시대의 합성데이터 시장 가능성을 분석하였다. 데이터 관리 소프트웨어 시장이 2025년 692억 달러 규모로 성장한 가운데 [9], 데이터 품질 관리 도구가 AI 생태계의 핵심 인프라로 부상하고 있음을 확인하였다.

### 8.2 향후 연구 및 사업화 방향

2026년 이후의 추진 계획은 다음과 같다. AADS 플랫폼 베타 출시(2026년 4분기 목표) 이후, 합성 엔진 라이선싱과 AI-Ready 데이터 패키지 판매를 통한 사업화를 추진한다. 산업 특화 멀티모달 VLM(Visual CoT), Reasoning Router(추론 비용 70% 절감 목표), 소버린(Sovereign) 온프레미스 배포의 3대 기술 고도화를 병행한다 [9][12].

피지컬 AI 생태계 내에서의 포지셔닝은 '플랫폼 독립적 데이터 품질 인프라'를 지향한다. NVIDIA, Tesla 등 대형 플랫폼이 수직 통합 생태계를 구축하는 가운데, 페블러스는 이들 생태계와 보완적으로 작동하는 품질 보증 레이어로서의 역할을 목표로 한다 [4].

본 연구의 한계로는 실험적 정량 평가 결과가 부재하며, 제안된 아키텍처의 실제 산업 환경 적용 검증이 아직 이루어지지 않았다는 점이 있다. AADS 1차년도는 PoC 단계에 머물러 있으며 [11], 대규모 데이터셋에 대한 자동 진단 정확도, 합성데이터의 downstream task 성능 향상 효과 등에 대한 정량적 실증은 2차년도 이후 파일럿 프로그램을 통해 수행될 예정이다. 또한, 뉴로-심볼릭 통합의 실제 구현 복잡성과 대규모 온톨로지 구축·유지의 비용 [2], 그리고 현실 세계 변수의 무한성으로 인한 합성데이터의 현실 반영도 한계 [4]는 지속적으로 해결해야 할 과제이다.

---

## 참고문헌

[1] 페블러스, "AADS 기술 기반 데이터 클리닉 2.0 및 AI-Ready 데이터 플랫폼 비전," 내부 기술문서, 2025.

[2] 페블러스, "뉴로-심볼릭 AI: 엔터프라이즈 인텔리전스를 위한 코그니티브 데이터 아키텍처 v1.1," 내부 기술문서, 2025.

[3] SNS Insider, "Physical AI Market Size, Share & Growth Report 2033," 2025.

[4] NVIDIA, "Scaling Physical AI with Synthetic Data," NVIDIA Technical Blog, 2025.

[5] NVIDIA, "NVIDIA Announces Open Physical AI Data Factory Blueprint," NVIDIA Press Release, Mar. 2026.

[6] RoboTwin Authors, "RoboTwin 2.0: A Scalable Simulation Framework for Bimanual Manipulation," in Proc. IEEE/CVF Conf. Computer Vision and Pattern Recognition (CVPR), 2025.

[7] TRANSIC Authors, "TRANSIC: Sim-to-Real Policy Transfer by Learning from Online Correction," in Proc. Conf. Robot Learning (CoRL), 2024.

[8] Gartner, "Top Data & Analytics Predictions," Jun. 2025; A. White, "By 2024, 60% of the data used for the development of AI and analytics projects will be synthetically generated," Gartner Blog, Jul. 2021.

[9] 페블러스, "2025 데이터 품질관리 시장 분석 및 페블러스 AADS 차세대 전략," 내부 기술문서, 2025.

[10] 페블러스, "AI 데이터 품질 표준과 페블러스 데이터클리닉," 내부 기술문서, 2025.

[11] 페블러스, "AADS 1차년도 발표자료 v1.11," 내부 발표자료, 2025.

[12] 페블러스, "AADS CLI 시뮬레이션 페이지," 프로젝트 웹페이지, 2025.

[13] MarketsandMarkets, "Embodied AI Market Report 2025–2030," 2025.

[14] MarketsandMarkets, "Humanoid Robot Market Size, Share & Trends, 2025 To 2030," 2025.

[15] Morgan Stanley Research, "Humanoid Robot Market Expected to Reach $5 Trillion by 2050," 2025.

[16] Mordor Intelligence, "Synthetic Data Market Size, Share, Trends & Research Report, 2030," 2025.

[17] S. Iskander et al., "Quality Matters: Evaluating Synthetic Data for Tool-Using LLMs," in Proc. Conf. Empirical Methods in Natural Language Processing (EMNLP), 2024.

[18] MarketsandMarkets, "AI Agents Market Report 2025–2030," 2025.

[19] Omdia, "New Omdia Analysis Shows Agentic AI Outpacing Growth Rates of Traditional Generative AI," Sep. 2025.

[20] B. Majumder et al., "LLM-Based Data Science Agents: A Survey of Capabilities, Challenges, and Future Directions," arXiv preprint arXiv:2510.04023, 2025.

[21] P. Trirat, W. Jeong, and S. J. Hwang, "AutoML-Agent: A Multi-Agent LLM Framework for Full-Pipeline AutoML," arXiv preprint arXiv:2410.02958, 2024.

[22] DataFlow Authors, "DataFlow: An LLM-Driven Framework for Unified Data Preparation and Workflow Automation in the Era of Data-Centric AI," arXiv preprint arXiv:2512.16676, 2025.

[23] Q. Qi et al., "CleanAgent: Automating Data Standardization with LLM-based Agents," 2024.

[24] AURA Authors, "AURA: Label Curation Using Agentic AI," arXiv preprint arXiv:2602.02564, 2026.

[25] J. Gu et al., "A Survey on Large Language Model-based Agents for Statistics and Data Science," arXiv preprint arXiv:2412.14222, 2024; Published in The American Statistician, 2025.

[26] 페블러스, "Data Greenhouse 전략 소개 페이지," 프로젝트 웹페이지, 2026.

[27] 페블러스, "AADS LLM 파인튜닝용 QA 데이터셋 구축: 로봇 분야 데이터품질 관점," 내부 기술문서, 2025.

[28] 페블러스, "AADS LLM 파인튜닝용 QA 데이터셋 구축: 제조 분야," 내부 기술문서, 2025.

[29] 페블러스, "Physical AI 시대의 패권 경쟁: 데이터 중심 생존 전략과 페블러스의 역할," 내부 기술문서, 2025.

[30] 페블러스, "대한민국 인공지능 국가전략과 페블러스 AADS의 연계 분석 및 전략 제언," 내부 기술문서, 2025.

[31] A. Ng et al., "Data-Centric Artificial Intelligence: A Survey," arXiv preprint arXiv:2212.11854, 2022.

[32] S. Yao et al., "ReAct: Synergizing Reasoning and Acting in Language Models," in Proc. Int. Conf. Learning Representations (ICLR), 2023.

[33] Q. Wu et al., "AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation Framework," Microsoft Research Technical Report, 2023.

[34] N. Shinn et al., "Reflexion: Language Agents with Verbal Reinforcement Learning," in Proc. Advances in Neural Information Processing Systems (NeurIPS), 2023.

[35] C. Lu et al., "The AI Scientist: Towards Fully Automated Open-Ended Scientific Discovery," arXiv preprint arXiv:2408.06292, ICLR 2025.

[36] Q. Huang et al., "MLAgentBench: Evaluating Language Agents on Machine Learning Experimentation," in Proc. Int. Conf. Machine Learning (ICML), 2024.

[37] S. Luo et al., "Data Agent: A Holistic Architecture for Orchestrating Data+AI Ecosystems," Tsinghua University Technical Report, 2024.

[38] M. Salvato et al., "Crossing the Reality Gap: A Survey on Sim-to-Real Transferability of Robot Controllers in Reinforcement Learning," Applied Intelligence, Springer, 2024.
