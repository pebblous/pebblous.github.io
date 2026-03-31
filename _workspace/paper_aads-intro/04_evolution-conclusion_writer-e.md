# 7. 데이터클리닉에서 Data Greenhouse, PebbloSim으로: 진화 경로

## 7.1 세 단계의 연결 구조

페블러스의 기술 진화는 데이터클리닉 → Data Greenhouse → PebbloSim의 세 단계로 구성되며, 각 단계는 이전 단계의 역량을 흡수하면서 더 높은 수준의 자동화와 범위를 확보한다.

**데이터클리닉**은 데이터 품질의 '진단과 치료'를 수행하는 전문가 주도 서비스이다. ISO/IEC 5259 기반의 3-Level 진단(픽셀 통계 → 임베딩 분석 → 도메인 특화)을 통해 데이터의 과밀·공백·이상치를 탐지하고, 뉴로-심볼릭 접근으로 "왜 이 데이터가 문제인지"를 인과적으로 설명한다 [E01][E05]. 그러나 수작업 기반이라는 확장성 한계가 존재하였다.

**Data Greenhouse**는 데이터의 '재배와 거버넌스'를 자동화하는 플랫폼이다. AADS 에이전트가 "관측(Observe)–판단(Orchestrate)–행동(Action)–증명(Govern)"의 4단계 자율 순환 루프를 통해 데이터를 자율적으로 진단하고 개선한다 [E04]. 기존 데이터 플랫폼(Snowflake, Databricks 등) 위에 '책임 레이어(Responsibility Layer)'로 작동하며, 데이터클리닉의 품질 검증 노하우를 소프트웨어화하여 내재화하였다.

**PebbloSim**은 피지컬 AI를 위한 '시뮬레이션과 합성' 엔진이다. Data Diet(중복 제거), Data Bulk-up(합성 생성), Data Replica(비식별화)를 통합하며 [E01], Sim-to-Real 전이를 지원하여 군사 의사결정, 자율주행 에지 케이스, 로봇 조작 등 데이터 희소 도메인에 고충실도 합성데이터를 공급한다.

| 단계 | 역할 | 핵심 특성 | 자동화 수준 |
|------|------|-----------|-------------|
| 데이터클리닉 | 진단과 치료 | 뉴로-심볼릭 3-Level 진단, ISO 5259 기반 | 전문가 주도 (수작업) |
| Data Greenhouse | 재배와 거버넌스 | AADS 자율 순환 루프, 책임 레이어 | AADS 자율 + Human-in-the-Loop |
| PebbloSim | 시뮬레이션과 합성 | Sim-to-Real 전이, 멀티모달 생성 | 완전 자동화 (에이전트 기반) |

이 세 단계는 선형적 교체가 아닌 누적적 진화(cumulative evolution)이다. 데이터클리닉의 도메인 지식이 Data Greenhouse의 에이전트 판단 기준이 되고, Data Greenhouse의 품질 보증 체계가 PebbloSim의 합성데이터 신뢰성을 담보한다.

## 7.2 AADS가 만든 차별화

AADS(Agentic AI Data Scientist)는 세 단계를 관통하는 기술적 접착제(technological glue)로서, 페블러스의 차별화를 구성한다.

첫째, **도메인 지식과 자율 에이전트의 결합**이다. 데이터클리닉에서 축적된 산업별(로봇, 제조, 국방, 사회안전) 품질 진단 노하우가 AADS 에이전트의 판단 기준으로 내재화되어, 단순 자동화를 넘어 '맥락을 이해하는 자율 에이전트'를 구현한다. 4개 도메인에서 구축된 전문 QA 데이터셋(로봇 52개, 제조 28개)이 이 과정의 핵심 자산이다 [E01][E09][E10].

둘째, **품질 검증 노하우의 합성데이터 신뢰성 보증 구조 전환**이다. ISO/IEC 5259 기반 품질 측정 기준을 합성데이터 생성 과정에 선제적(proactive)으로 반영하여, 사후 필터링이 아닌 생성 단계에서부터 품질을 제어한다 [E06]. 이는 기존 연구들이 외재적(downstream task) 평가에 의존하는 것과 대비되는 접근이다.

셋째, **수직 통합 구조**이다. 데이터 생성(PebbloSim) → 품질 검증(Data Greenhouse) → 시뮬레이션(Sim-to-Real) → 피지컬 AI 학습이라는 End-to-End 파이프라인을 단일 플랫폼 내에서 운영함으로써, NVIDIA Omniverse [E17]와 같은 특정 생태계에 종속되지 않는 플랫폼 독립적 합성데이터 품질 관리를 실현한다.

---

# 8. 결론 및 향후 전망

## 8.1 요약

본 논문은 데이터클리닉에서 피지컬 AI까지의 기술 진화 경로를 AADS 기반 합성데이터 플랫폼의 관점에서 설계하고 제시하였다. 주요 기여는 다음 세 가지로 요약된다.

첫째, 데이터클리닉의 전문가 주도 품질 검증 서비스에서 AADS 자율 에이전트 기반 플랫폼으로의 전환 설계 경로를 제시하였다. 뉴로-심볼릭 AI와 에이전틱 AI의 결합을 통해, 수작업의 확장성 한계를 극복하면서도 도메인 전문성을 보존하는 아키텍처를 설계하였다.

둘째, Data Greenhouse와 PebbloSim이라는 두 플랫폼의 아키텍처를 소개하였다. Data Greenhouse는 '관측–판단–행동–증명'의 4단계 자율 순환 루프로 데이터 거버넌스를 자동화하며, PebbloSim은 Sim-to-Real 전이를 지원하는 고충실도 합성데이터 생성 엔진으로 기능한다.

셋째, 피지컬 AI 시대의 합성데이터 시장 가능성을 분석하였다. 데이터 관리 소프트웨어 시장이 2025년 $69.2B 규모로 성장한 가운데 [E04], 데이터 품질 관리 도구가 AI 생태계의 핵심 인프라로 부상하고 있음을 확인하였다.

## 8.2 향후 연구 및 사업화 방향

2026년 이후의 추진 계획은 다음과 같다. AADS 플랫폼 베타 출시(2026년 4분기 목표) 이후, 합성 엔진 라이선싱과 AI-Ready 데이터 패키지 판매를 통한 사업화를 추진한다. 산업 특화 멀티모달 VLM(Visual CoT), Reasoning Router(추론 비용 70% 절감 목표), 소버린(Sovereign) 온프레미스 배포의 3대 기술 고도화를 병행한다 [E04][E08].

피지컬 AI 생태계 내에서의 포지셔닝은 '플랫폼 독립적 데이터 품질 인프라'를 지향한다. NVIDIA, Tesla 등 대형 플랫폼이 수직 통합 생태계를 구축하는 가운데, 페블러스는 이들 생태계와 보완적으로 작동하는 품질 보증 레이어로서의 역할을 목표로 한다 [E07].

본 연구의 한계로는 실험적 정량 평가 결과가 부재하며, 제안된 아키텍처의 실제 산업 환경 적용 검증이 아직 이루어지지 않았다는 점이 있다. AADS 1차년도는 PoC 단계에 머물러 있으며 [E03], 대규모 데이터셋에 대한 자동 진단 정확도, 합성데이터의 downstream task 성능 향상 효과 등에 대한 정량적 실증은 2차년도 이후 파일럿 프로그램을 통해 수행될 예정이다. 또한, 뉴로-심볼릭 통합의 실제 구현 복잡성과 대규모 온톨로지 구축·유지의 비용 [E05], 그리고 현실 세계 변수의 무한성으로 인한 합성데이터의 현실 반영도 한계 [E07]는 지속적으로 해결해야 할 과제이다.

---

# 참고문헌

## 내부 자료

[E01] 페블러스, "AADS 기술 기반 데이터 클리닉 2.0 및 AI-Ready 데이터 플랫폼 비전," 내부 기술문서, 2025.

[E02] 페블러스, "대한민국 인공지능 국가전략과 페블러스 AADS의 연계 분석 및 전략 제언," 내부 기술문서, 2025.

[E03] 페블러스, "AADS 1차년도 발표자료 v1.11," 내부 발표자료, 2025.

[E04] 페블러스, "2025 데이터 품질관리 시장 분석 및 페블러스 AADS 차세대 전략," 내부 기술문서, 2025.

[E05] 페블러스, "뉴로-심볼릭 AI: 엔터프라이즈 인텔리전스를 위한 코그니티브 데이터 아키텍처 v1.1," 내부 기술문서, 2025.

[E06] 페블러스, "AI 데이터 품질 표준과 페블러스 데이터클리닉," 내부 기술문서, 2025.

[E07] 페블러스, "Physical AI 시대의 패권 경쟁: 데이터 중심 생존 전략과 페블러스의 역할," 내부 기술문서, 2025.

[E08] 페블러스, "페블러스 투자 유치 제안서 v1.5," 내부 문서, 2025.

[E09] 페블러스, "AADS LLM 파인튜닝용 QA 데이터셋 구축: 로봇 분야 데이터품질 관점," 내부 기술문서, 2025.

[E10] 페블러스, "AADS LLM 파인튜닝용 QA 데이터셋 구축: 제조 분야," 내부 기술문서, 2025.

## 외부 문헌

[E11] AURA Authors, "AURA: Label Curation Using Agentic AI," arXiv preprint arXiv:2602.02564, 2026.

[E12] Z. Ding et al., "DCA-Bench: A Benchmark for Dataset Curation Agents," arXiv preprint arXiv:2406.07275, 2024.

[E13] P. Trirat, W. Jeong, and S. J. Hwang, "AutoML-Agent: A Multi-Agent LLM Framework for Full-Pipeline AutoML," arXiv preprint arXiv:2410.02958, 2024.

[E14] DataFlow Authors, "DataFlow: An LLM-Driven Framework for Unified Data Preparation and Workflow Automation in the Era of Data-Centric AI," arXiv preprint arXiv:2512.16676, 2025.

[E15] B. Majumder et al., "LLM-Based Data Science Agents: A Survey of Capabilities, Challenges, and Future Directions," arXiv preprint arXiv:2510.04023, 2025.

[E16] J. Gu et al., "A Survey on Large Language Model-based Agents for Statistics and Data Science," arXiv preprint arXiv:2412.14222, 2024. Published in The American Statistician, 2025.

[E17] NVIDIA, "Scaling Physical AI with Synthetic Data," NVIDIA Technical Blog, 2025.

[E18] RoboTwin Authors, "RoboTwin 2.0: A Scalable Simulation Framework for Bimanual Manipulation," in Proc. IEEE/CVF Conf. Computer Vision and Pattern Recognition (CVPR), 2025.

[E19] TRANSIC Authors, "TRANSIC: Sim-to-Real Policy Transfer by Learning from Online Correction," in Proc. Conf. Robot Learning (CoRL), 2024.

[E20] NVIDIA, "NVIDIA Announces Open Physical AI Data Factory Blueprint," NVIDIA Press Release, Mar. 2026.

[E21] Q. Long et al., "On LLMs-Driven Synthetic Data Generation, Curation, and Evaluation: A Survey," in Findings of ACL, 2024.

[E22] LLM Data Auditor Authors, "The LLM Data Auditor: A Metric-oriented Survey on Quality and Trustworthiness in Evaluating Synthetic Data," arXiv preprint arXiv:2601.17717, 2025.

[E23] S. Iskander et al., "Quality Matters: Evaluating Synthetic Data for Tool-Using LLMs," in Proc. Conf. Empirical Methods in Natural Language Processing (EMNLP), 2024.

[E24] Synthetic Data Effects Survey Authors, "Surveying the Effects of Quality, Diversity, and Complexity in Synthetic Data From Large Language Models," arXiv preprint arXiv:2412.02980, 2024.

[E25] Q. Qi et al., "CleanAgent: Automating Data Standardization with LLM-based Agents," 2024.

[E26] Neuro-Symbolic Review Authors, "Neuro-Symbolic AI in 2024: A Systematic Review," arXiv preprint arXiv:2501.05435, 2025.

[E27] T. Trinh et al., "Solving Olympiad Geometry without Human Demonstrations," Nature, vol. 625, pp. 476–482, 2024.

[E28] Neuro-Symbolic Math Authors, "Neuro-symbolic Data Generation for Math Reasoning," in Proc. Advances in Neural Information Processing Systems (NeurIPS), pp. 23488–23515, 2024.

[E29] HITL-RL-DQM Authors, "Human-in-the-loop Reinforcement Learning for Data Quality Monitoring in Particle Physics Experiments," arXiv preprint arXiv:2405.15508, 2024.
