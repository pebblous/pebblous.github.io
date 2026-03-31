# 2. 관련 산업 동향

## 2.1 피지컬 AI 시장 동향

피지컬 AI(Physical AI)는 디지털 환경에 국한되었던 AI가 물리적 세계와 상호작용하는 단계로 확장된 패러다임을 의미하며, 2020년대 중반 이후 로봇공학, 자율주행, 제조 자동화 분야에서 핵심 의제로 부상하였다. SNS Insider에 따르면, 글로벌 피지컬 AI 시장 규모는 2025년 약 52.3억 달러에서 2033년 497.3억 달러로 연평균 32.5%의 성장이 전망되었다 [1]. 한편 MarketsandMarkets는 체화 AI(Embodied AI) 시장이 2025년 44.4억 달러에서 2030년 230.6억 달러로 연평균 39.0% 성장할 것으로 예측하였다 [2].

이러한 성장의 중심에는 NVIDIA의 피지컬 AI 생태계 전략이 위치하였다. NVIDIA는 Omniverse 플랫폼을 기반으로 3D 시뮬레이션 환경을 구축하고, Isaac Sim을 통해 로봇 학습용 합성데이터를 생성하며, 2024년 말 발표된 Cosmos World Foundation Model(WFM)로 텍스트·이미지·영상으로부터 물리 법칙에 기반한 가상 세계를 생성하는 파이프라인을 완성하였다 [R07][R10]. GTC 2026에서 발표된 Physical AI Data Factory Blueprint는 데이터 큐레이션, 증강, 평가를 단일 파이프라인으로 통합한 오픈 참조 아키텍처로, Skild AI, FieldAI, Uber 등이 조기 채택하였다 [R10].

휴머노이드 로봇 시장 역시 피지컬 AI 확산의 주요 동인으로 작용하였다. MarketsandMarkets는 해당 시장이 2025년 29.2억 달러에서 2030년 152.6억 달러로 연평균 39.2% 성장할 것으로 전망하였다 [3]. Tesla는 Optimus 로봇의 2025년 5,000~10,000대 생산을 목표로 양산 라인을 구축 중이며, Figure AI는 Microsoft, NVIDIA, OpenAI 등으로부터 7.5억 달러 이상의 투자를 유치하고 BMW 제조 현장에 Figure 02를 배치하였다 [3]. Morgan Stanley Research는 휴머노이드 로봇 시장이 관련 공급망을 포함하여 2050년 5조 달러 규모에 도달할 것으로 전망하였다 [4].

**Table 1.** 피지컬 AI 관련 시장 전망 요약

| 시장 세그먼트 | 2025년 규모 | 2030~2033년 전망 | CAGR | 출처 |
|--------------|------------|-----------------|------|------|
| 피지컬 AI | $5.2B | $49.7B (2033) | 32.5% | SNS Insider [1] |
| 체화 AI (Embodied AI) | $4.4B | $23.1B (2030) | 39.0% | MarketsandMarkets [2] |
| 휴머노이드 로봇 | $2.9B | $15.3B (2030) | 39.2% | MarketsandMarkets [3] |

Sim-to-Real 전이 기술의 확산은 피지컬 AI의 산업 적용을 가속화하였다. CVPR 2025에서 발표된 RoboTwin 2.0은 MLLM 기반 태스크 생성과 도메인 랜덤화로 양팔 조작 분야의 고충실도 합성 데이터를 생성하여 cross-embodiment 일반화를 실증하였다 [R08]. CoRL 2024에서 발표된 TRANSIC은 Human-in-the-Loop 보정을 통해 가구 조립 등 접촉 집약적 작업에서 sim-to-real 갭을 극복하였다 [R09]. 이처럼 시뮬레이션 기반 합성데이터의 역할이 피지컬 AI 전반에서 확대됨에 따라, 합성데이터의 품질 관리 수요가 급증하고 있다.

## 2.2 합성데이터 시장 동향

합성데이터(Synthetic Data)는 실제 데이터의 통계적 특성을 모사하여 인위적으로 생성된 데이터를 의미하며, 개인정보 보호, 데이터 희소성, 클래스 불균형 등의 문제를 해결하는 핵심 수단으로 주목받았다. Gartner는 2024년 기준 AI 학습에 사용되는 데이터의 60%가 합성데이터일 것으로 예측하였으며, 2030년까지 합성데이터가 AI 모델 학습의 주된 데이터 소스가 될 것으로 전망하였다 [5]. Mordor Intelligence에 따르면, 글로벌 합성데이터 생성 시장은 2025년 약 5.1억 달러에서 2030년 26.7억 달러로 연평균 39.4%의 성장이 예상되었다 [6].

주요 기업 동향을 살펴보면, NVIDIA는 Cosmos WFM과 Omniverse 기반의 물리적 합성데이터 생성에 집중하였고, Synthesis AI(현 Synthesis Labs)는 얼굴·인체 합성 이미지, Datagen(NVIDIA 인수)은 실내 환경 합성데이터, AI.Reverie는 군사·국방 분야 합성 시뮬레이션에 특화하여 각자의 시장을 형성하였다. 이들은 공통적으로 "합성 데이터 팩토리(Synthetic Data Factory)" 모델을 지향하며, 대규모 자동화된 데이터 생성 파이프라인을 구축하고 있다 [R07][R10].

피지컬 AI 분야에서 합성데이터 수요는 특히 급격하게 증가하였다. 로봇 학습에 필요한 3D 환경, 센서 시뮬레이션, 접촉 역학 데이터는 실제 수집이 극도로 비용이 높고 위험하기 때문에, 시뮬레이션 기반 합성이 사실상 유일한 대안으로 자리 잡았다 [P7]. EU AI Act 등 규제 환경 역시 개인정보를 포함한 실데이터 사용 전 합성 대안의 검토를 의무화하여, 합성데이터 시장의 성장을 촉진하였다 [6].

**Table 2.** 합성데이터 시장 전망

| 출처 | 2025년 규모 | 2030년 전망 | CAGR |
|------|------------|------------|------|
| Mordor Intelligence | $0.51B | $2.67B | 39.4% |
| Fortune Business Insights | — | $2.34B | 31.1% |
| Strategic Market Research | $1.3B (2024) | $9.7B | 37.4% |

그러나 합성데이터의 양적 확대에도 불구하고, 품질 관리에 대한 체계적 접근은 부족한 상태로 남아 있었다. Iskander et al. [R13]은 소량의 고품질 합성데이터가 대량의 저품질 데이터를 능가함을 실증하였으며, Gartner는 2025년 예측에서 합성데이터 관리 실패가 AI 거버넌스, 모델 정확도, 규제 준수에 심각한 리스크를 초래할 것이라고 경고하였다 [5]. 이는 합성데이터 생성 단계에서부터 품질 진단과 거버넌스를 내재화한 플랫폼의 필요성을 부각시킨다.

## 2.3 AI 에이전트와 데이터 자동화

에이전틱 AI(Agentic AI)는 대규모 언어 모델(LLM)을 기반으로 자율적 계획, 실행, 반성을 수행하는 에이전트 시스템을 의미하며, 2024~2025년 사이 산업 전반에서 급속히 부상하였다. MarketsandMarkets에 따르면, AI 에이전트 시장은 2025년 78.4억 달러에서 2030년 526.2억 달러로 연평균 46.3%의 성장이 전망되었다 [7]. Omdia는 2030년까지 에이전틱 AI가 전체 생성형 AI 시장의 31%를 차지할 것으로 예측하였다 [8].

LangChain, AutoGPT, CrewAI 등의 오픈소스 프레임워크가 멀티에이전트 시스템 구축의 진입 장벽을 낮추었으며, 이를 기반으로 데이터과학 영역에 에이전틱 접근이 확산되었다. Majumder et al. [R05]은 45개 LLM 기반 데이터과학 시스템을 6단계 라이프사이클에 매핑한 서베이를 통해, 데이터 수집부터 모델 배포까지 전 과정의 자동화가 진행되고 있음을 보고하였다. Trirat et al. [R03]의 AutoML-Agent는 검색 증강 계획(RAP) 전략으로 전체 ML 파이프라인의 자동화를 실증하였으며, DataFlow [R04]는 자연어 명령을 실행 가능한 데이터 준비 파이프라인으로 변환하는 LLM 기반 프레임워크를 제안하였다.

**Table 3.** 에이전틱 AI 시장 전망

| 출처 | 2025년 규모 | 2030년 전망 | CAGR |
|------|------------|------------|------|
| MarketsandMarkets | $7.8B | $52.6B | 46.3% |
| Omdia (엔터프라이즈) | $1.5B | $41.8B | — |
| Precedence Research | $7.6B | $199.1B (2034) | 43.8% |

데이터 품질 영역에서도 에이전틱 자동화가 적용되기 시작하였다. CleanAgent [R15]는 멀티에이전트 구조로 코드 없는 데이터 표준화를 구현하였고, AURA [R01]는 다중 AI 에이전트 협업으로 ground truth 없이 대규모 멀티모달 데이터 어노테이션을 수행하여 기존 대비 5.8%의 정확도 향상을 달성하였다. 그러나 Gu et al. [R06]이 지적한 바와 같이, 기존 LLM 에이전트 연구는 정형 데이터와 텍스트 중심에 편중되어 있으며, 피지컬 AI가 요구하는 멀티모달 합성데이터의 진단·생성·검증을 통합하는 에이전틱 시스템은 아직 미개척 영역으로 남아 있다.

---

## 참고문헌

[1] SNS Insider, "Physical AI Market Size, Share & Growth Report 2033," 2025.

[2] MarketsandMarkets, "Embodied AI Market Report 2025–2030," 2025.

[3] MarketsandMarkets, "Humanoid Robot Market Size, Share & Trends, 2025 To 2030," 2025.

[4] Morgan Stanley Research, "Humanoid Robot Market Expected to Reach $5 Trillion by 2050," 2025.

[5] Gartner, "Top Data & Analytics Predictions," Jun. 2025; Gartner, "Top Trends Shaping the Future of Data Science and Machine Learning," 2023.

[6] Mordor Intelligence, "Synthetic Data Market Size, Share, Trends & Research Report, 2030," 2025.

[7] MarketsandMarkets, "AI Agents Market Report 2025–2030," 2025.

[8] Omdia, "New Omdia Analysis Shows Agentic AI Outpacing Growth Rates of Traditional Generative AI," Sep. 2025.

[R01] AURA Authors, "AURA: Label Curation Using Agentic AI," arXiv preprint arXiv:2602.02564, 2026.

[R03] P. Trirat, W. Jeong, and S. J. Hwang, "AutoML-Agent: A Multi-Agent LLM Framework for Full-Pipeline AutoML," arXiv preprint arXiv:2410.02958, 2024.

[R04] DataFlow Authors, "DataFlow: An LLM-Driven Framework for Unified Data Preparation," arXiv preprint arXiv:2512.16676, 2025.

[R05] B. Majumder et al., "LLM-Based Data Science Agents: A Survey," arXiv preprint arXiv:2510.04023, 2025.

[R06] J. Gu et al., "A Survey on LLM-based Agents for Statistics and Data Science," arXiv preprint arXiv:2412.14222, 2024.

[R07] NVIDIA, "Scaling Physical AI with Synthetic Data," NVIDIA Technical Blog, 2025.

[R08] RoboTwin Authors, "RoboTwin 2.0: A Scalable Sim Framework for Bimanual Manipulation," in Proc. CVPR, 2025.

[R09] TRANSIC Authors, "TRANSIC: Sim-to-Real Policy Transfer by Learning from Online Correction," in Proc. CoRL, 2024.

[R10] NVIDIA, "NVIDIA Announces Open Physical AI Data Factory Blueprint," NVIDIA Press Release, Mar. 2026.

[R13] S. Iskander et al., "Quality Matters: Evaluating Synthetic Data for Tool-Using LLMs," in Proc. EMNLP, 2024.

[R15] Q. Qi et al., "CleanAgent: Automating Data Standardization with LLM-based Agents," 2024.

[P7] 페블러스, "Physical AI 시대의 패권 경쟁: 데이터 중심 생존 전략과 페블러스의 역할," 내부 문서, 2025.
