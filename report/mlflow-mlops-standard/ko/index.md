---
title: MLOps의 사실상 표준이 된 MLflow
subtitle: Databricks가 바꾼 머신러닝 운영의 풍경
date: 2026-04-06
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# MLOps의 사실상 표준이 된 MLflow

_Databricks가 바꾼 머신러닝 운영의 풍경_

## Executive Summary

> [!callout]
> MLflow는 2018년 Databricks의 오픈소스 프로젝트로 시작하여, 2026년 현재 GitHub Star **20,000+**, 월간 PyPI 다운로드 **3,300만+**, 실험 추적 분야 채택률 **34.3%**(2위 W&B 13.4% 대비 2.5배)를 기록하며 MLOps의 사실상 표준(de facto standard)으로 자리 잡았습니다. 4개 주요 학술 서베이(Kreuzberger 2022, Eken 2024, Stone 2025, Marcos-Mercade 2026)가 이를 실증적으로 확인합니다.

> 2025년 MLflow 3.0의 출시는 전통 ML 도구에서 생성형 AI 전체 수명주기 관리 플랫폼으로의 전환점입니다. LoggedModel 엔티티, 프로덕션 스케일 트레이싱, Prompt Registry, LLM Judge 평가 등 GenAI 네이티브 기능이 대거 추가되었습니다. 같은 시기 Weights & Biases(CoreWeave 인수)와 Neptune.ai(OpenAI 인수, 2026년 3월 서비스 일몰)의 연이은 인수합병은 독립 MLOps 도구 시장을 재편하며, MLflow의 오픈소스 독립성을 차별적 강점으로 부상시켰습니다.

> 페블러스에게 이 변화는 직접적 시사점을 갖습니다. MLflow가 ML 파이프라인의 투명성 인프라라면, DataClinic은 그 파이프라인에 흘러드는 데이터의 투명성 인프라입니다. Budach et al.의 실증 연구(6개 품질 차원 x 19개 알고리즘)가 확인한 바와 같이, 데이터 품질 없이는 최고의 ML 알고리즘도 제대로 작동하지 않습니다. DataClinic은 MLflow Tracking의 업스트림에서 AI-Ready Data라는 개념 — MLflow가 전제하는 "실행 가능한 데이터 상태" — 의 안전장치 역할을 수행합니다.

## MLflow란 무엇인가 — 등장 배경과 의미

2018년, Databricks의 공동 창업자 Matei Zaharia와 동료들은 하나의 질문에서 출발했습니다. "왜 머신러닝 실험은 매번 카오스인가?" 연구실에서든 기업에서든, ML 팀들은 공통적인 문제에 직면하고 있었습니다. 실험 결과를 추적할 방법이 없고, 다른 환경에서 재현이 안 되며, 모델을 프로덕션에 올리는 데 수개월이 걸렸습니다.

Zaharia et al.의 창시 논문(IEEE Data Eng. Bull., 2018, 435회 인용)은 ML 라이프사이클의 3대 과제를 정의합니다. 첫째, 수많은 도구와 프레임워크를 넘나드는 **실험의 복잡성**. 둘째, 코드-데이터-환경의 조합이 결과를 결정하는 **재현성의 어려움**. 셋째, 연구에서 서비스로의 전환에 필요한 **배포의 장벽**. MLflow는 이 세 가지를 하나의 범용 API로 해결하려는 시도였습니다.

> [!callout]
> **MLflow의 핵심 설계 철학:** 어떤 ML 라이브러리, 프로그래밍 언어, 실행 환경에서도 동작하는 범용 인터페이스. TensorFlow, PyTorch, scikit-learn, XGBoost 등 어떤 프레임워크를 쓰든 동일한 방식으로 실험을 기록하고 모델을 관리할 수 있습니다.

Databricks와 MLflow의 관계는 독특합니다. MLflow는 Apache 2.0 라이선스의 완전한 오픈소스 프로젝트이며, `pip install mlflow` 한 줄로 누구나 즉시 사용할 수 있습니다. Databricks는 이 오픈소스 코어 위에 관리형 서비스(Managed MLflow)를 구축하여 엔터프라이즈 기능(접근 제어, 감사 로그, 자동 스케일링)을 추가로 제공합니다. 즉, 오픈소스의 투명성과 엔터프라이즈의 편의성이 공존하는 모델입니다.

이 접근이 주효했습니다. 출시 8년 만에 MLflow는 GitHub Star 20,000+, 월간 다운로드 3,300만+를 달성했고, ML 컨퍼런스 논문의 코드 공유율이 21%에 불과한 현실(Semmelrock et al., 2024)에서 실험 추적의 표준으로 자리 잡았습니다. ML 활용 기업의 55%가 아직 모델을 프로덕션에 올리지 못하는 상황(Stone et al., 2025, 2020년 Algorithmia 조사 기준)에서, MLflow는 이 간극을 좁히는 가장 널리 채택된 도구가 되었습니다.

## 4가지 핵심 컴포넌트 심층 분석

MLflow의 구조를 이해하는 가장 좋은 방법은 ML 프로젝트의 시간 흐름을 따라가는 것입니다. 실험을 설계하고(Tracking), 코드를 패키징하고(Projects), 모델을 표준 형식으로 저장하고(Models), 버전을 관리하며 프로덕션에 배포합니다(Model Registry). 네 가지 컴포넌트가 실험에서 프로덕션까지의 전체 경로를 커버합니다.

### 2.1 MLflow Tracking — 실험의 기록

Tracking은 MLflow의 핵심이자 가장 많이 사용되는 컴포넌트입니다. 모든 ML 실험의 파라미터(학습률, 배치 크기, 에포크 수), 메트릭(정확도, 손실, AUC), 아티팩트(모델 파일, 시각화, 데이터 스냅샷)를 체계적으로 기록합니다. API 한 줄(`mlflow.log_param()`, `mlflow.log_metric()`)로 로깅이 시작되며, 웹 UI에서 실험 간 비교, 메트릭 시각화, 아티팩트 탐색이 가능합니다.

DataTalks.Club 2025 설문에서 실험 추적 도구 채택률 **34.3%**로 1위를 차지한 것은, 이 단순하면서도 범용적인 API 설계가 실무자들에게 받아들여졌음을 보여줍니다. 2위 W&B(13.4%)와의 격차가 2.5배에 달합니다.

### 2.2 MLflow Projects — 재현 가능한 패키징

Projects는 ML 코드를 재현 가능한 단위로 패키징하는 컴포넌트입니다. `MLproject` 파일에 의존성(Conda/Docker), 진입점, 파라미터를 선언하면, 누구든 동일한 환경에서 동일한 실험을 재현할 수 있습니다. ML 컨퍼런스 논문의 성능 분산 보고가 44%에 불과한 현실에서, 코드 수준의 재현성 보장은 학술과 산업 양쪽에서 필수적입니다.

### 2.3 MLflow Models — 표준 모델 포맷

Models 컴포넌트는 다양한 ML 프레임워크의 모델을 하나의 표준 형식으로 패키징합니다. 핵심은 **pyfunc**(Python Function) 인터페이스입니다. TensorFlow 모델이든 PyTorch 모델이든, `model.predict(data)`라는 동일한 인터페이스로 추론이 가능합니다. 이 표준화 덕분에 REST API 서빙, Docker 컨테이너 배포, 클라우드 플랫폼 연동이 프레임워크에 관계없이 일관된 방식으로 이루어집니다.

### 2.4 MLflow Model Registry — 버전 관리와 배포

Model Registry는 모델의 전체 생애주기를 관리하는 중앙 저장소입니다. 모델 버전 관리, 스테이지 전환(Staging, Production, Archived), 승인 워크플로우를 제공합니다. 모델 버전 관리 도구 채택률에서도 MLflow가 **32.3%**로 1위를 차지하고 있으며, 이는 Tracking에서 시작한 사용자들이 자연스럽게 Registry까지 확장하는 흐름을 보여줍니다.

> [!callout]
> **4개 컴포넌트의 핵심 가치:** 개별 기능보다 중요한 것은 이들의 연결입니다. Tracking에서 기록한 최고 성능 실험의 모델을, Models 형식으로 패키징하고, Registry에 등록하여, 승인 후 프로덕션에 배포하는 전체 경로가 단일 플랫폼 안에서 완성됩니다. 이 연결성이 MLflow를 단순한 로깅 도구가 아닌 MLOps 플랫폼으로 만든 핵심입니다.

## 생성형 AI 시대의 MLflow — MLflow 3.0

2025년 Data+AI Summit에서 공식 발표된 MLflow 3.0은 단순한 버전 업데이트가 아닙니다. 전통 ML 실험 추적 도구에서 생성형 AI 전체 수명주기 관리 플랫폼으로의 근본적 전환입니다. LLM, RAG, AI 에이전트를 포함하는 GenAI 워크로드가 폭발적으로 증가하는 현실에서, MLflow는 이 새로운 수요에 대응하기 위해 아키텍처를 재설계했습니다.

### 3.1 LoggedModel — 모델 중심 패러다임

기존 MLflow는 **run**(실험 실행)이 중심이었습니다. 하나의 run 안에서 파라미터를 기록하고 메트릭을 측정했습니다. MLflow 3.0은 **LoggedModel**이라는 새로운 1급(first-class) 엔티티를 도입하여 패러다임을 전환합니다. 이제 모델이 여러 run에 걸쳐 존재하며, 각 run의 메트릭·트레이스·평가 결과가 모델에 연결됩니다. GenAI 앱에서 하나의 모델이 다양한 프롬프트·설정·평가를 거치는 현실을 반영한 설계입니다.

### 3.2 프로덕션 스케일 Tracing

MLflow 3.0의 트레이싱은 OpenTelemetry 호환 표준으로 구축되었습니다. OpenAI, Anthropic, LangChain, LlamaIndex 등 **20개 이상의 GenAI 라이브러리**에 대해 단 한 줄의 코드 추가(`mlflow.openai.autolog()`)로 모든 LLM 호출, 프롬프트, 응답, 토큰 사용량, 비용을 자동으로 추적합니다. Databricks 외부 환경에서 실행되는 에이전트도 중앙 MLflow 서버에서 추적할 수 있어, 분산된 AI 시스템의 관측성(observability)을 확보합니다.

### 3.3 Prompt Registry

LLM 앱에서 프롬프트는 코드만큼 중요한 자산입니다. Prompt Registry는 프롬프트 템플릿의 버전 관리, A/B 테스트, 롤백을 지원합니다. "어제까지 잘 작동하던 프롬프트가 오늘 왜 다른 결과를 내는가"라는 질문에 프롬프트 변경 이력을 통해 답할 수 있게 합니다.

### 3.4 LLM Judge 평가

LLM-as-a-Judge는 2024년 이후 생성형 AI 평가의 학술적 주류로 부상했습니다(Gu et al., 2024). MLflow 3.0은 이를 실무에 즉시 적용할 수 있는 built-in judges를 제공합니다. **안전성(safety)**, **정확성(correctness)**, **관련성(relevance)**, **근거성(groundedness)** 등 사전 정의된 평가 기준으로 LLM 출력의 품질을 자동 측정하며, 커스텀 judge를 직접 정의할 수도 있습니다.

### 3.5 피드백 수집 API/UI

프로덕션 환경에서 사용자 피드백은 모델 개선의 핵심 신호입니다. MLflow 3.0은 API와 UI를 통해 엔드유저 피드백(좋아요/싫어요, 텍스트 평가)을 수집하고 이를 트레이스와 연결합니다. "사용자가 부정적 피드백을 준 응답의 트레이스를 역추적하여 원인을 분석"하는 워크플로우가 내장됩니다.

> [!callout]
> **MLflow 3.0의 핵심 전환:** 전통 ML에서 "모델 학습 → 평가 → 배포"가 선형 프로세스였다면, GenAI에서는 "프롬프트 설계 → LLM 호출 → 평가 → 피드백 → 개선"의 순환 프로세스입니다. MLflow 3.0은 이 순환 전체를 추적하고 관리하는 플랫폼으로 진화했습니다.

## Databricks Managed vs 오픈소스 — 무엇을 선택할까

MLflow를 도입하려는 기업이 가장 먼저 마주하는 질문입니다. "오픈소스를 직접 운영할 것인가, Databricks 관리형 서비스를 쓸 것인가?" 결론부터 말하면, 코어는 동일합니다. 차이는 거버넌스와 스케일에 있습니다.

| 비교 항목 | 오픈소스 MLflow | Databricks Managed MLflow |
| --- | --- | --- |
| 인프라 | 직접 서버 구축/운영 | 자동 업데이트, 자동 스케일링 |
| 거버넌스 | 자체 접근 제어 구현 필요 | Unity Catalog 통합(ACL, 감사 로그) |
| 데이터 분석 | 외부 도구 연동 필요 | Lakehouse 네이티브 통합 |
| 보안 | 자체 보안 정책 적용 | 엔터프라이즈급 감사 로그, SSO |
| 비용 | 인프라 운영 비용만 (소프트웨어 무료) | Databricks 요금에 포함 |
| 데이터 포터빌리티 | 완전 보장 | 완전 보장 (동일 데이터 모델) |

### Unity Catalog 통합의 실질적 이점

Databricks Managed MLflow의 가장 큰 차별점은 Unity Catalog와의 통합입니다. Unity Catalog는 데이터에서 모델까지의 전체 리니지(lineage)를 추적합니다. "이 모델은 어떤 데이터셋으로 학습되었고, 누가 승인했으며, 언제 프로덕션에 배포되었는가"라는 질문에 하나의 인터페이스에서 답할 수 있습니다. 크로스 워크스페이스 모델 공유, 세분화된 접근 제어(ACL), 감사 로그도 포함됩니다.

> [!callout]
> **핵심 메시지:** 코어 데이터 모델과 API는 오픈소스와 Managed 버전이 동일합니다. Managed MLflow에서 시작하더라도, 데이터와 모델을 오픈소스 MLflow로 언제든 이전할 수 있습니다. 벤더 종속이 아닌, 필요에 따른 유연한 선택이 가능합니다.

## MLOps 시장에서 MLflow의 위치

MLOps 시장은 폭발적 성장 궤도에 있습니다. Grand View Research에 따르면 2024년 약 **$2.2B**에서 2030년 **$16.6B**(CAGR 40.5%)으로 성장이 예측됩니다. Precedence Research는 2035년 최대 $56.6B까지 전망하며, 조사 기관별로 범위 차이가 있으나 공통적으로 **CAGR 29~42%**의 고성장이 예측됩니다.

### 5.1 경쟁 구도의 격변

2025년은 MLOps 도구 시장의 판도가 바뀐 해였습니다. 두 가지 사건이 시장을 재편했습니다.

- 1.**Neptune.ai의 OpenAI 인수(2025년 12월, ~$400M):** Neptune은 실험 추적 분야 3위(3.5%)였으나, 2026년 3월 5일 외부 서비스가 일몰(sunset)되었습니다. Neptune 사용자들은 대체 도구를 찾아야 하는 상황에 놓였습니다.
- 2.**Weights & Biases의 CoreWeave 인수:** 실험 추적 2위(13.4%)였던 W&B는 GPU 클라우드 기업 CoreWeave에 인수되어, 독립 MLOps 도구에서 GPU 클라우드 생태계의 일부로 편입되었습니다. 팀 플랜 기준 사용자당 월 $200~250으로 비용이 급증할 가능성도 제기됩니다.

이 두 사건은 역설적으로 MLflow의 위치를 강화했습니다. 주요 경쟁사가 특정 기업에 종속되면서, MLflow는 **오픈소스 독립성과 데이터 포터빌리티를 유지하는 유일한 주요 MLOps 플랫폼**이 되었습니다. Marcos-Mercade et al.(2026)의 실증 평가에서도 MLflow가 종합 점수 최상위 그룹에 위치하며, 사용자 경험과 해석력에서 높은 평가를 받았습니다.

### 5.2 Databricks의 성장

MLflow의 상업적 기반인 Databricks의 성장세도 주목할 만합니다. ARR **$5.4B**(YoY 65%+), 기업 가치 **$134B**, Fortune 500 중 60% 이상이 사용하고 있습니다. AI 제품 매출이 $1B+ 런레이트(2025 Q3)에 도달했으며, 순 달러 유지율(NDR)이 140%+로 기존 고객의 지속적 확장을 보여줍니다. 약 10,000명 규모의 조직으로 성장한 Databricks의 성장은 곧 MLflow 사용자 기반의 확대를 의미합니다.

> [!callout]
> **시장의 메시지:** 경쟁사의 인수합병이 MLflow의 오픈소스 독립성을 최대 강점으로 만들었습니다. 벤더 종속을 피하려는 기업에게 MLflow는 사실상 유일한 선택지가 되고 있으며, 이 추세는 MLOps 시장이 성장할수록 더 강화될 것입니다.

## 페블러스가 이 기술에 주목하는 이유

MLflow가 ML 파이프라인의 **투명성 인프라**(실험에서 모델, 배포까지의 전 과정 추적)라면, DataClinic은 그 파이프라인에 흘러드는 **데이터의 투명성 인프라**(데이터 품질 진단, AI-Ready 상태 인증)입니다. 이 두 레이어는 경쟁이 아닌 보완 관계를 형성합니다.

### 업스트림 데이터 품질, 다운스트림 모델 성능

Budach et al.(2022/2025)의 실증 연구는 이 연결을 학술적으로 확립했습니다. 6가지 데이터 품질 차원(정확성, 완전성, 일관성, 적시성, 유일성, 유효성)과 19개 ML 알고리즘의 관계를 체계적으로 실험한 결과, **오염된 데이터가 학습 데이터에 투입되든, 테스트 데이터에 투입되든, 양쪽 모두에 투입되든, 모든 시나리오에서 예측 가능한 방향으로 성능이 저하**되었습니다.

이것이 DataClinic과 MLflow의 연결점입니다. MLflow Tracking에서 낮은 성능 지표가 관찰될 때, 그 원인을 DataClinic의 데이터 품질 진단으로 역추적할 수 있습니다. 반대로, DataClinic에서 높은 품질 점수를 받은 데이터로 훈련한 모델은 MLflow에서 일관되게 높은 메트릭을 기록합니다. "추적 없이 개선 없고, 품질 없이 추적 의미 없다"는 것이 이 관계의 핵심입니다.

### 기업이 겪는 현실적 문제

Databricks를 도입하여 MLflow를 사용하는 기업이 실무에서 가장 자주 겪는 문제는 세 가지입니다.

- 1.**데이터 품질 미검증 상태에서의 실험 반복** — 잘못된 데이터로 수백 번의 실험을 추적해도 의미 있는 모델을 얻을 수 없습니다.
- 2.**재현성 실패의 근본 원인 진단 부재** — MLflow가 "무엇이 달라졌는가"는 보여주지만 "왜 달라졌는가"(데이터 품질 변동)는 보여주지 못합니다.
- 3.**프로덕션 모니터링 미실시(57.9%)** — 모델 배포 후 데이터 드리프트를 감지하지 못하는 기업이 과반수입니다.

DataClinic은 이 세 가지 갭에 모두 대응할 수 있습니다. 실험 전 데이터 건강 검진, 성능 저하 시 데이터 원인 역추적, 프로덕션 데이터의 지속적 품질 모니터링. Zhou et al.(2024)가 제시한 데이터 품질의 4대 차원(내재적, 맥락적, 표현적, 접근성)은 DataClinic의 진단 체계와 직접 대응합니다.

### AI-Ready Data와 GenAI 시대의 확장

AI-Ready Data라는 개념은 MLflow가 전제하는 "실행 가능한 데이터 상태"와 정확히 대응합니다. MLflow가 모델 실험을 추적한다면, DataClinic은 그 실험에 투입되는 데이터의 건강 상태를 추적합니다. 둘이 합쳐져야 비로소 "왜 이 실험이 실패했는가"에 대한 완전한 답을 얻을 수 있습니다.

GenAI 시대에도 이 연결은 유효합니다. MLflow 3.0의 LLM Judge 평가에서 낮은 품질 점수가 나올 때, 훈련/파인튜닝 데이터의 품질 문제를 DataClinic으로 진단하는 확장 시나리오가 열립니다. LLM 훈련 데이터의 품질 진단이라는 신규 수요에 DataClinic이 대응할 수 있는 기회이기도 합니다.

> [!callout]
> **페블러스가 제공하는 고유 가치:** MLflow(오픈소스) + DataClinic(페블러스)의 조합은 특정 클라우드 벤더에 종속되지 않는 MLOps 스택을 가능하게 합니다. DataClinic이 ML 파이프라인의 첫 번째 관문에서 데이터 품질을 보장하여, MLflow 이후 단계의 효율을 근본적으로 높이는 **업스트림 안전장치** 역할을 합니다.

## 자주 묻는 질문 (FAQ)

## 참고문헌

논문/학술

1. Zaharia, M. et al. (2018) — Accelerating the Machine Learning Lifecycle with MLflow. IEEE Data Eng. Bull. 41(4). [논문 링크](https://people.eecs.berkeley.edu/~matei/papers/2018/ieee_mlflow.pdf)
2. Kreuzberger, D. et al. (2022) — Machine Learning Operations (MLOps): Overview, Definition, and Architecture. [arXiv:2205.02302](https://arxiv.org/abs/2205.02302)
3. Marcos-Mercade, J. et al. (2026) — An Empirical Evaluation of Modern MLOps Frameworks. [arXiv:2601.20415](https://arxiv.org/abs/2601.20415)
4. Zampetti, F. et al. (2026) — How are MLOps Frameworks Used in Open Source Projects? [arXiv:2601.18591](https://arxiv.org/abs/2601.18591)
5. Eken, B. et al. (2024) — A Multivocal Review of MLOps Practices, Challenges and Open Issues. [arXiv:2406.09737](https://arxiv.org/abs/2406.09737)
6. Semmelrock, H. et al. (2024) — Reproducibility in ML-based Research. [arXiv:2406.14325](https://arxiv.org/abs/2406.14325)
7. Budach, L. et al. (2022/2025) — The Effects of Data Quality on ML Performance. [arXiv:2207.14529](https://arxiv.org/abs/2207.14529)
8. Zhou, Y. et al. (2024) — A Survey on Data Quality Dimensions and Tools for ML. [arXiv:2406.19614](https://arxiv.org/abs/2406.19614)
9. Stone, J. et al. (2025) — Navigating MLOps: Maturity, Lifecycle, Tools, and Careers. [arXiv:2503.15577](https://arxiv.org/abs/2503.15577)
10. Gu, J. et al. (2024) — A Survey on LLM-as-a-Judge. [arXiv:2411.15594](https://arxiv.org/abs/2411.15594)
11. Kapoor, S. & Narayanan, A. (2023) — Leakage and the Reproducibility Crisis in ML-based Science. [arXiv:2207.07048](https://arxiv.org/abs/2207.07048)
12. Chen, A. et al. (2020) — Developments in MLflow. DEEM'20. [ACM DL](https://dl.acm.org/doi/10.1145/3399579.3399867)

업계/제품

1. MLflow 3.0 공식 출시. [mlflow.org](https://mlflow.org/blog/mlflow-3-launch)
2. MLflow Releases. [mlflow.org/releases](https://mlflow.org/releases)
3. Databricks Managed MLflow. [databricks.com](https://www.databricks.com/product/managed-mlflow)
4. Databricks Mosaic AI Summit 2025. [databricks.com/blog](https://www.databricks.com/blog/mosaic-ai-announcements-data-ai-summit-2025)
5. OSS vs Managed MLflow 비교. [docs.databricks.com](https://docs.databricks.com/aws/en/mlflow3/genai/overview/oss-managed-diff)
6. Unity Catalog 모델 통합. [unitycatalog.io](https://www.unitycatalog.io/blogs/unity-catalog-0-2-introduces-models-mlflow-and-spark-integration-and-support-for-external-identity-providers)
7. OpenAI의 Neptune.ai 인수. [openai.com](https://openai.com/index/openai-to-acquire-neptune/)
8. MLflow vs W&B 비교. [zenml.io](https://www.zenml.io/blog/mlflow-vs-weights-and-biases)
9. MLflow 3.0 엔터프라이즈 MLOps. [sparity.com](https://www.sparity.com/blogs/mlflow-3-0-enterprise-mlops/)

시장 데이터

1. Grand View Research — MLOps Market Report. [grandviewresearch.com](https://www.grandviewresearch.com/industry-analysis/mlops-market-report)
2. Fortune Business Insights — MLOps Market. [fortunebusinessinsights.com](https://www.fortunebusinessinsights.com/mlops-market-108986)
3. Precedence Research — MLOps Market. [precedenceresearch.com](https://www.precedenceresearch.com/mlops-market)
4. Databricks ARR/성장 보도자료. [databricks.com](https://www.databricks.com/company/newsroom/press-releases/databricks-grows-65-yoy-surpasses-5-4-billion-revenue-run-rate)
5. DataTalks.Club MLOps 설문 (2025). [datatalks.club](https://datatalks.club/blog/how-do-data-professionals-use-ml-and-mlops-tools-and-practices.html)
6. GitHub — mlflow/mlflow. [github.com](https://github.com/mlflow/mlflow)
7. PyPI Stats — mlflow. [pypistats.org](https://pypistats.org/packages/mlflow)
