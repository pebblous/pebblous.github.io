# 관련 연구 조사
수집일: 2026-03-31

## 그룹 A. 에이전틱 AI / 자율 데이터 파이프라인

| ID | 제목 | 저자 | 연도 | 출처 | 핵심 기여 | 한계 |
|----|-------|------|------|------|-----------|------|
| R01 | AURA: Label Curation Using Agentic AI | (arXiv 2602.02564) | 2026 | arXiv | 다중 AI 에이전트 협업으로 ground truth 없이 대규모 멀티모달 데이터 어노테이션 수행. EM 기반 confusion matrix로 annotator 신뢰도 추론. 기존 대비 최대 5.8% 정확도 향상. | 사전 정의된 라벨 체계 필요; 도메인 특화 품질 진단 미지원. |
| R02 | DCA-Bench: A Benchmark for Dataset Curation Agents | Ding et al. | 2024 | arXiv (2406.07275) | LLM 에이전트 기반 데이터셋 큐레이션 벤치마크 최초 제안. 힌트 없이 데이터 품질 이슈를 탐지하는 Curator 에이전트 평가. | 최고 성능 에이전트도 ~30% 이슈만 탐지; open-ended 문제 해결 한계. |
| R03 | AutoML-Agent: A Multi-Agent LLM Framework for Full-Pipeline AutoML | Trirat et al. | 2024 | arXiv (2410.02958) | 데이터 수집부터 모델 배포까지 전체 파이프라인 자동화. 검색 증강 계획(RAP) 전략으로 최적 계획 탐색. 14개 데이터셋에서 높은 성공률. | 데이터 품질 진단 자체에 대한 심층 분석 부재; 합성 데이터 생성 미포함. |
| R04 | DataFlow: An LLM-Driven Framework for Unified Data Preparation | (arXiv 2512.16676) | 2025 | arXiv | PyTorch 스타일 API로 모듈화된 데이터 변환. 자연어 → 실행 파이프라인 자동 생성(DataFlow-Agent). | 비정형 이미지/3D 데이터 파이프라인 미지원. |
| R05 | LLM-Based Data Science Agents: A Survey | Majumder et al. | 2025 | arXiv (2510.04023) | 45개 시스템을 6단계 DS 라이프사이클에 매핑한 최초의 포괄적 분류 체계. | 서베이 논문으로 자체 실험 없음; 데이터 생성 품질 평가 부재. |
| R06 | A Survey on LLM-based Agents for Statistics and Data Science | Gu et al. | 2024 | arXiv (2412.14222), American Statistician 2025 | 계획, 추론, 반성, 멀티에이전트 협업 등 LLM 에이전트 설계 원칙 체계적 정리. 실제 사례 분석 포함. | 피지컬 AI/합성데이터 도메인 미다룸. |

## 그룹 B. 합성 데이터 생성 (Physical AI / 로봇)

| ID | 제목 | 저자 | 연도 | 출처 | 핵심 기여 | 한계 |
|----|-------|------|------|------|-----------|------|
| R07 | Scaling Physical AI with Synthetic Data (NVIDIA Cosmos + Omniverse) | NVIDIA | 2025–2026 | NVIDIA Blog / GTC | Cosmos WFM + Omniverse로 물리 기반 합성데이터 대규모 생성. Isaac Sim 기반 로봇 시뮬레이션. Cosmos Evaluator로 물리적 정확성 자동 평가. | 폐쇄적 생태계; NVIDIA GPU 의존; 범용 데이터 품질 프레임워크 아님. |
| R08 | RoboTwin 2.0: Scalable Sim Framework for Bimanual Manipulation | (CVPR 2025) | 2025 | CVPR 2025 | MLLM 기반 태스크 생성 + 도메인 랜덤화로 고충실도 전문가 데이터 생성. cross-embodiment 일반화 실증. ECCV 2024 Workshop Best Paper. | 양팔 조작 특화; 범용 품질 진단 프레임워크 아님. |
| R09 | TRANSIC: Sim-to-Real Transfer via Human-in-the-Loop | (CoRL 2024) | 2024 | CoRL 2024 | 인간 개입(intervention + online correction)으로 sim-to-real 갭을 극복. 가구 조립 등 접촉 집약적 작업 성공. | 인간 전문가 개입 필요; 완전 자동화 아님. |
| R10 | Physical AI Data Factory Blueprint | NVIDIA | 2026 | NVIDIA Press | 합성데이터 생성-증강-평가를 통합 자동화하는 오픈 참조 아키텍처. FieldAI, Uber, Skild AI 등 선도 기업 채택. | 2026년 발표로 학술 검증 미완; NVIDIA 플랫폼 종속. |

## 그룹 C. LLM 파인튜닝 데이터 품질

| ID | 제목 | 저자 | 연도 | 출처 | 핵심 기여 | 한계 |
|----|-------|------|------|------|-----------|------|
| R11 | On LLMs-Driven Synthetic Data Generation, Curation, and Evaluation: A Survey | Long et al. | 2024 | ACL Findings 2024 (2406.15126) | LLM 기반 합성데이터의 생성-큐레이션-평가 통합 워크플로우를 체계화한 최초의 서베이. | 피지컬 AI / 이미지 합성데이터 미포함; 텍스트 중심. |
| R12 | The LLM Data Auditor: Metric-oriented Survey on Quality and Trustworthiness | (arXiv 2601.17717) | 2025 | arXiv | 6개 모달리티에 걸친 합성데이터 품질·신뢰성 평가 메트릭을 체계적 분류. 내재적(intrinsic) 평가 강조. | 메트릭 제안에 그침; 자동화된 진단 파이프라인 미구현. |
| R13 | Quality Matters: Evaluating Synthetic Data for Tool-Using LLMs | Iskander et al. | 2024 | EMNLP 2024 (2409.16341) | 소량 고품질 합성데이터가 대량 저품질 데이터를 능가함을 실증. ToolBench/ToolAlpaca에서 검증. | Tool-use 특화; 범용 데이터 품질 진단 프레임워크 아님. |
| R14 | Surveying the Effects of Quality, Diversity, and Complexity in Synthetic Data | (arXiv 2412.02980) | 2024 | arXiv | 합성데이터의 품질·다양성·복잡성이 LLM 학습에 미치는 영향 체계적 분석. 의미 트리(semantic tree) 기반 복잡도 측정. | 이미지/3D 데이터 미포함; 텍스트 한정. |
| R15 | CleanAgent: Automating Data Standardization with LLM-based Agents | Qi et al. | 2024 | 2024 | 멀티에이전트 구조로 프롬프트만으로 데이터 품질 문제 해결. 코드 없는(no-code) 데이터 표준화. | 정형 데이터 중심; 비전/센서 데이터 미지원. |

## 그룹 D. 뉴로-심볼릭 AI / 하이브리드 접근

| ID | 제목 | 저자 | 연도 | 출처 | 핵심 기여 | 한계 |
|----|-------|------|------|------|-----------|------|
| R16 | Neuro-Symbolic AI in 2024: A Systematic Review | (arXiv 2501.05435) | 2025 | arXiv | 2020–2024년 167편 논문 체계적 리뷰. 학습/추론(63%), 지식표현(44%), 논리/추론(35%) 분포 분석. | 데이터 생성/합성데이터에 대한 직접적 분석 부족. |
| R17 | AlphaGeometry: Neuro-Symbolic Synthetic Data Pipeline | Trinh et al. | 2024 | Nature 2024 | 10억 랜덤 기하학 다이어그램 → 기호 엔진 증명 → 1억 학습 샘플 생성. 합성데이터로 올림피아드 수준 기하 추론 달성. | 기하학 도메인 특화; 범용 데이터 품질 진단과 무관. |
| R18 | Neuro-symbolic Data Generation for Math Reasoning | (NeurIPS 2024) | 2024 | NeurIPS 2024 | 뉴로-심볼릭 방법으로 수학 추론 훈련 데이터 생성. 기호적 검증으로 데이터 정확성 보장. | 수학 도메인 한정; 비정형 데이터(이미지/센서) 미지원. |

## 그룹 E. Human-in-the-Loop 데이터 품질

| ID | 제목 | 저자 | 연도 | 출처 | 핵심 기여 | 한계 |
|----|-------|------|------|------|-----------|------|
| R19 | Human-in-the-loop RL for Data Quality Monitoring in Particle Physics | (arXiv 2405.15508) | 2024 | arXiv | PPO 기반 멀티에이전트 시스템으로 데이터 품질 자동 모니터링. 인간 개입은 필요시에만 요청. 노이즈 감소 효과 실증. | 입자물리 특화; 합성데이터/이미지 도메인 미적용. |

---

## Contribution Gap 분석

| 기존 연구 한계 | AADS 해결책 |
|----------------|-------------|
| 텍스트/정형 데이터 중심 품질 진단 (R02, R11, R14, R15) | DataClinic의 이미지/비전 데이터 특화 3-Level 진단 (픽셀 통계 → 임베딩 분석 → 도메인 특화) |
| 수동 또는 반자동 데이터 큐레이션 (R02, R09, R19) | AADS 에이전트가 진단-처방-실행을 자율 수행; 인간은 승인/감독 역할로 전환 |
| 개별 파이프라인 단계 자동화 (R03, R04, R06) | 진단(DataClinic) → 처방(Data Greenhouse) → 시뮬레이션 생성(PebbloSim)의 End-to-End 통합 |
| 합성데이터 품질 평가가 외재적(downstream task) 중심 (R12, R13) | 내재적 품질 메트릭 + 에이전트 자동 평가 루프 결합 |
| 피지컬 AI 합성데이터가 NVIDIA 생태계에 종속 (R07, R08, R10) | 플랫폼 독립적 합성데이터 품질 진단 + 다양한 시뮬레이터 연동 가능 |
| 뉴로-심볼릭 합성데이터가 특정 도메인(수학, 기하) 한정 (R17, R18) | 산업 범용 도메인(제조, 로봇, 국방)으로 확장; 도메인 지식 플러그인 아키텍처 |
| LLM 파인튜닝 데이터 품질 관리가 사후(post-hoc) 필터링 중심 (R13, R14) | 생성 단계에서부터 품질 가이드라인을 에이전트가 반영하는 proactive 접근 |

---

## 참고문헌 (IEEE 형식)

[R01] AURA Authors, "AURA: Label Curation Using Agentic AI," arXiv preprint arXiv:2602.02564, 2026.

[R02] Z. Ding et al., "DCA-Bench: A Benchmark for Dataset Curation Agents," arXiv preprint arXiv:2406.07275, 2024.

[R03] P. Trirat, W. Jeong, and S. J. Hwang, "AutoML-Agent: A Multi-Agent LLM Framework for Full-Pipeline AutoML," arXiv preprint arXiv:2410.02958, 2024.

[R04] DataFlow Authors, "DataFlow: An LLM-Driven Framework for Unified Data Preparation and Workflow Automation in the Era of Data-Centric AI," arXiv preprint arXiv:2512.16676, 2025.

[R05] B. Majumder et al., "LLM-Based Data Science Agents: A Survey of Capabilities, Challenges, and Future Directions," arXiv preprint arXiv:2510.04023, 2025.

[R06] J. Gu et al., "A Survey on Large Language Model-based Agents for Statistics and Data Science," arXiv preprint arXiv:2412.14222, 2024. Published in The American Statistician, 2025.

[R07] NVIDIA, "Scaling Physical AI with Synthetic Data," NVIDIA Technical Blog, 2025. [Online]. Available: https://blogs.nvidia.com/blog/scaling-physical-ai-omniverse/

[R08] RoboTwin Authors, "RoboTwin 2.0: A Scalable Simulation Framework for Bimanual Manipulation," in Proc. IEEE/CVF Conf. Computer Vision and Pattern Recognition (CVPR), 2025.

[R09] TRANSIC Authors, "TRANSIC: Sim-to-Real Policy Transfer by Learning from Online Correction," in Proc. Conf. Robot Learning (CoRL), 2024.

[R10] NVIDIA, "NVIDIA Announces Open Physical AI Data Factory Blueprint," NVIDIA Press Release, Mar. 2026. [Online]. Available: https://investor.nvidia.com/news/press-release-details/2026/

[R11] Q. Long et al., "On LLMs-Driven Synthetic Data Generation, Curation, and Evaluation: A Survey," in Findings of ACL, 2024.

[R12] LLM Data Auditor Authors, "The LLM Data Auditor: A Metric-oriented Survey on Quality and Trustworthiness in Evaluating Synthetic Data," arXiv preprint arXiv:2601.17717, 2025.

[R13] S. Iskander et al., "Quality Matters: Evaluating Synthetic Data for Tool-Using LLMs," in Proc. Conf. Empirical Methods in Natural Language Processing (EMNLP), 2024.

[R14] Synthetic Data Effects Survey Authors, "Surveying the Effects of Quality, Diversity, and Complexity in Synthetic Data From Large Language Models," arXiv preprint arXiv:2412.02980, 2024.

[R15] Q. Qi et al., "CleanAgent: Automating Data Standardization with LLM-based Agents," 2024.

[R16] Neuro-Symbolic Review Authors, "Neuro-Symbolic AI in 2024: A Systematic Review," arXiv preprint arXiv:2501.05435, 2025.

[R17] T. Trinh et al., "Solving Olympiad Geometry without Human Demonstrations," Nature, vol. 625, pp. 476–482, 2024.

[R18] Neuro-Symbolic Math Authors, "Neuro-symbolic Data Generation for Math Reasoning," in Proc. Advances in Neural Information Processing Systems (NeurIPS), pp. 23488–23515, 2024.

[R19] HITL-RL-DQM Authors, "Human-in-the-loop Reinforcement Learning for Data Quality Monitoring in Particle Physics Experiments," arXiv preprint arXiv:2405.15508, 2024.
