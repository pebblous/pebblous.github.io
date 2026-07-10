---
title: Great Expectations 완전 해부 — ML 파이프라인 데이터 품질의 첫 번째 방어선과 그 한계
subtitle: GX가 할 수 있는 것, 할 수 없는 것 — 그리고 그 너머
date: 2026-04-14
category: report
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Great Expectations 완전 해부 — ML 파이프라인 데이터 품질의 첫 번째 방어선과 그 한계

_GX가 할 수 있는 것, 할 수 없는 것 — 그리고 그 너머_

## Executive Summary

> [!callout]
> "좋은 모델은 좋은 데이터에서 시작한다." 이것은 구호가 아니라 측정 가능한 공학 명제다. 구글의 데이터 검증 시스템은 700개 이상의 ML 파이프라인에서 학습 실행의 6%에서 실제 데이터 오류를 자동 탐지했다(Schelter et al., MLSys 2019). 우리가 '검증된 벤치마크'라고 믿는 ML 데이터셋조차 평균 3.4%의 라벨이 틀려있다(Northcutt et al., NeurIPS 2021). 데이터 품질 문제는 "있을 수 있는 일"이 아니라 "반드시 일어나는 일"이다.

> Great Expectations(GX)는 이 문제를 엔지니어링으로 풀기 위해 등장한 가장 성숙한 오픈소스 데이터 검증 프레임워크다. 2024년 8월 v1.0 GA(General Availability)를 달성하며 프로덕션 레디 평가를 받았고, 현재 GitHub Stars 11,398개, 월간 PyPI 다운로드 약 2,835만 건을 기록한다. CSV, Parquet, SQL 테이블 등 정형 데이터의 스키마 검증, 통계 범위 검사, 자동 문서화(Data Docs), 파이프라인 게이트 역할에서 GX는 업계 표준으로 자리잡았다.

> 그러나 GX에는 구조적 한계가 있다. 이미지·음성·포인트클라우드 같은 비정형 데이터의 시각적 품질, 클래스 불균형의 AI 기반 진단, 라벨 오염 탐지 — ML 학습 데이터의 진짜 품질 문제들이 GX의 사각지대에 있다. 이 보고서는 GX가 무엇을 잘하고 무엇을 못하는지를 솔직하게 해부하고, GX(규칙 기반 검증 게이트) + DataClinic(AI 기반 ML 데이터 진단)의 이중 방어선이 진정한 AI-Ready Data 파이프라인을 완성하는 방법을 제시한다.

## GIGO의 시대 — 왜 지금 ML 데이터 품질인가

GIGO(Garbage In, Garbage Out). 컴퓨터 과학의 가장 오래된 원칙 중 하나이지만, 딥러닝 시대에 이르러 그 의미는 완전히 새로운 차원을 얻었다. 파라미터 수십억 개를 가진 모델이 잘못된 데이터로 학습한다면, 그 규모만큼 더 크고 확신에 찬 오류를 만들어낸다.

### 1.1 문제의 규모: 수치로 보는 데이터 품질 위기

데이터 품질 문제가 얼마나 광범위한지를 보여주는 수치들이 있다.

- •구글 데이터 파이프라인 6% 오류율: 구글은 TFX 기반 데이터 검증 시스템을 700개 이상의 ML 파이프라인에 배포했다. 30일간 관찰 결과, 학습 실행의 6%에서 실제 데이터 오류가 탐지됐다(Schelter et al., MLSys 2019). 구글 규모에서도 17건 중 1건의 학습이 오염된 데이터로 시작한다는 의미다.
- •벤치마크 데이터셋의 라벨 오류: MIT CSAIL의 Northcutt et al.(NeurIPS 2021)은 ImageNet, CIFAR-10 등 10개 주요 ML 벤치마크 데이터셋을 분석했다. 평균 라벨 오류율은 3.4%였다. CIFAR-100은 6%(약 3,000개 오류), QuickDraw는 10.12%에 달했다. 우리가 "정제된 기준점"이라고 믿는 데이터셋조차 10개 중 1개가 틀릴 수 있다.
- •데이터 준비에 소비되는 시간: CrowdFlower(2016) 조사에서 데이터 과학자 업무 시간의 60%가 데이터 정제에 소비된다는 수치가 널리 알려졌다. 최근 Anaconda의 State of Data Science(2023~2024) 조사에서도 데이터 준비 관련 작업이 전체 업무 시간의 45% 이상을 차지하는 것으로 나타났다. 데이터 준비가 데이터 과학자의 가장 큰 시간 소비 작업이라는 것은 조사마다 일관된 결론이다.
- •데이터 vs. 모델 — 승부는 데이터에서: DeepLearning.AI와 Landing AI가 주최한 Data-Centric AI Competition(2021)에서 참가자들은 동일한 모델 아키텍처로 데이터만 개선했다. 결과? 정확도가 64.4%에서 85.8%로 향상됐다. 약 33% 포인트 상승. 모델 아키텍처 경쟁이 성숙 단계에 접어든 지금, 경쟁 우위는 데이터 품질 엔지니어링에서 나온다.

> [!callout]
> Sculley et al.(NIPS 2015)은 "Hidden Technical Debt in Machine Learning Systems"에서 실제 ML 시스템의 대부분은 ML 코드가 아니라 데이터 인프라, 피처 엔지니어링, 설정 코드로 이루어져 있다고 지적했다. ML 코드는 빙산의 일각이고, 그 아래 가장 큰 덩어리가 바로 데이터 레이어다.

### 1.2 패러다임 전환: Model-Centric에서 Data-Centric으로

수년간 ML 커뮤니티는 더 큰 모델, 더 정교한 아키텍처를 향해 달렸다. 그러나 Andrew Ng이 2021년 Data-Centric AI 운동을 제창하면서 방향이 바뀌기 시작했다. 핵심 논지는 단순하다: 고정된 모델로 데이터를 체계적으로 개선하는 것이, 고정된 데이터로 모델을 개선하는 것보다 성능 향상에 더 효과적인 경우가 많다.

이 패러다임 전환은 새로운 도구 생태계를 만들었다. 데이터 품질을 코드처럼 테스트하고, 검증 결과를 자동으로 문서화하고, 파이프라인의 게이트로 활용하는 도구들이다. 그 중에서 가장 널리 채택된 것이 Great Expectations(GX)다.

### 1.3 왜 지금 GX인가 — v1.0 GA의 의미

GX는 2017년 등장 이후 오랜 기간 "강력하지만 복잡한 도구"로 알려져 있었다. v0.x 시대의 YAML 기반 설정, 복잡한 DataContext 구성, 방대한 보일러플레이트 코드가 진입장벽을 높였다. 그 불만이 누적된 끝에 2024년 8월 22일, GX는 v1.0 GA를 발표했다.

v1.x는 Python Fluent API 기반으로 데이터 소스 연결 방식을 전면 재설계했다. YAML 설정을 없애고, 코드 중심의 일관된 패턴으로 단순화했다. 커뮤니티 반응은 "API 방향성 자체는 호평"이다. v1.x는 GX가 드디어 프로덕션 환경에서 안정적으로 사용할 수 있는 단계에 진입했다는 신호다. 이 보고서가 지금 유효한 이유다.

## GX 핵심 개념 해부 — Expectations, Data Docs, Checkpoints

GX의 핵심 아이디어는 단순하다. 데이터가 "어떤 모양이어야 하는지"를 코드로 선언하라. 그러면 GX가 자동으로 검증하고, 결과를 HTML 리포트로 만들어준다. 검증 로직이 곧 문서다. 이 "단일 소스 오브 트루스" 설계가 다른 도구와의 결정적 차이다.

### 2.1 Expectations — 데이터를 위한 assert문

Expectations는 GX의 기본 단위다. 코드의 단위 테스트에서 `assert`를 사용하듯, 데이터에 대한 assertion을 선언형으로 표현한다.

`import great_expectations as gx

# 데이터 소스 연결 (v1.x Fluent API)
context = gx.get_context()
data_source = context.data_sources.add_pandas("my_datasource")
data_asset = data_source.add_dataframe_asset("my_asset")

# Expectation Suite 정의
suite = context.suites.add(gx.ExpectationSuite(name="my_suite"))

# 핵심 Expectations 선언
suite.add_expectation(
    gx.expectations.ExpectColumnValuesToNotBeNull(column="user_id")
)
suite.add_expectation(
    gx.expectations.ExpectColumnMeanToBeBetween(
        column="age", min_value=18, max_value=90
    )
)
suite.add_expectation(
    gx.expectations.ExpectColumnValuesToBeBetween(
        column="score", min_value=0, max_value=100
    )
)`
                        v1.x 기준 공식 갤러리에는 핵심 47개의 Expectations이 정의되어 있다. v0.x 시대에는 300개 이상의 Expectations이 누적됐으나, "너무 많아서 오히려 혼란스럽다"는 사용자 피드백을 반영해 v1.x에서는 자주 사용되는 핵심 유형만 남기고 재설계했다. Python으로 커스텀 Expectation을 직접 작성하는 것도 가능하며, 커뮤니티 생태계를 통한 확장도 지원된다.

### 2.2 Data Docs — 검증 결과가 자동으로 문서가 된다

GX의 가장 독특한 기능 중 하나가 Data Docs다. Expectation Suite를 실행하면 GX는 검증 결과를 자동으로 HTML 문서로 생성한다. 어떤 Expectations이 정의되어 있고, 각 검증이 통과/실패했는지, 어떤 통계 분포를 가지는지가 시각화된 리포트로 만들어진다.

이 기능이 중요한 이유는 세 가지다. 첫째, 팀 공유가 쉽다. HTML 파일이므로 S3나 내부 위키에 올려두면 데이터 엔지니어, ML 엔지니어, 데이터 분석가 모두가 동일한 문서를 본다. 둘째, 감사 추적이 된다. 언제 어떤 데이터가 검증 기준을 통과했는지의 이력이 자동으로 쌓인다. 셋째, 규제 준수에 활용할 수 있다. 금융이나 의료 분야에서 데이터 품질 검증 이력을 제출해야 할 때 Data Docs가 증거 자료가 된다.

### 2.3 Checkpoints — 파이프라인 게이트 자동화

Checkpoint는 Expectation Suite 실행을 자동화하는 단위다. Airflow DAG, Dagster 잡, Vertex AI Kubeflow Pipeline에 Checkpoint를 삽입하면, 데이터가 다음 단계로 넘어가기 전에 자동으로 검증이 실행된다. 검증 실패 시 파이프라인이 자동으로 중단되고 알림이 발송된다.

> [!callout]
> Avanade의 실사용 사례가 이 가치를 잘 보여준다. 다수 소스를 통합하는 ML 파이프라인에서 upstream 데이터 모델 변경이 발생했을 때, GX Checkpoint가 핵심 피처 값이 0으로 귀락하는 이상을 자동 탐지했다. 스테이크홀더가 문제를 인지하기 전에 파이프라인이 멈췄고, 오염된 데이터가 모델 학습에 투입되는 것을 막았다(Avanade Case Study, Great Expectations 공식 블로그).

### 2.4 v0.x에서 v1.x로 — 반드시 알아야 할 변경점

한국어 GX 자료 대부분이 2021~2022년 v0.x 기준으로 작성되어 있다. v0.x 튜토리얼을 보고 v1.x를 설정하려 하면 반드시 오류를 만난다. 핵심 변경사항 세 가지:

- •데이터 소스 연결 방식 전면 교체: v0.x의 YAML 기반 datasource 설정이 Python Fluent Datasources API로 대체됐다. Block-style Data Sources는 완전히 삭제됐다.
- •Checkpoint 설정 구조 변경: v0.x의 "Validations 리스트" 방식이 v1.x에서는 "Expectation Bindings" 방식으로 변경됐다.
- •Databricks 환경 주의: EphemeralDataContext 사용 시 `.sources` 속성 오류가 빈번 보고된다. v1.x에서 API가 변경된 부분이며, 공식 v1.x 마이그레이션 가이드를 반드시 참조해야 한다.

### 2.5 GX Cloud — 오픈소스에서 SaaS로

GX Cloud는 오픈소스 GX의 완전 관리형 SaaS 레이어다. 2025년 2월에는 ExpectAI 기능을 출시했다. 자연어로 데이터 품질 요구사항을 입력하면 GX가 자동으로 Expectation을 생성하는 기능으로, Snowflake 환경을 우선 지원한다. Enterprise 플랜은 SLA 99.5% 업타임을 보장하며, Slack/PagerDuty 알림, 스케줄 자동 검증, 팀 협업 기능을 포함한다.

소규모 팀이나 개인 프로젝트는 오픈소스로 시작하고, 팀 규모가 커지거나 알림·협업 기능이 필요할 때 Cloud로 이전하는 경로가 자연스럽다. GX의 오픈소스에서 엔터프라이즈로의 업셀 전략이기도 하다.

## GX가 잘하는 것 vs. 못하는 것 — 솔직한 한계 분석

GX를 만능 솔루션으로 도입하면 6개월 후 실망하게 된다. GX의 강점과 한계를 명확히 이해하고 사용해야 그 진짜 가치를 얻을 수 있다. 한계를 솔직하게 인정하는 것이 GX를 더 잘 쓰는 첫걸음이다.

### 3.1 GX가 잘하는 것

- •정형 데이터 스키마·통계 검증: CSV, Parquet, SQL 테이블의 컬럼 타입, null 비율, 값 범위, 통계 분포 검사에서 압도적이다. 수백만 행 데이터도 빠르게 검증할 수 있다.
- •파이프라인 게이트 역할: Checkpoint를 통해 검증 실패 시 파이프라인을 자동 중단할 수 있다. 오염된 데이터가 모델 학습이나 프로덕션에 도달하는 것을 방지한다.
- •자동 문서화(Data Docs): 검증 결과가 자동으로 HTML 문서가 된다. 팀 공유, 감사 추적, 규제 준수에 활용 가능한 단일 소스가 만들어진다.
- •생태계 통합: Airflow, Dagster, Vertex AI, dbt와의 공식 연동이 지원된다. Dagster용 공식 라이브러리도 제공된다(현재는 레거시 모드, v1.x 마이그레이션 권장).
- •합성 데이터 통계 검증: DataGreenhouse 등으로 생성한 합성 데이터의 컬럼별 평균, 표준편차, 값 범위, null 비율이 원본 데이터 특성을 보존하는지 자동 검증할 수 있다.

### 3.2 GX가 못하는 것 — ML 학습 데이터의 사각지대

Akande et al.(arXiv 2406.19614, 2024)의 데이터 품질 도구 조사에서 리뷰된 17개 도구 중 ML 전용으로 설계된 것은 단 4개뿐이었다. GX는 그 4개에 포함되지 않는다. GX는 강력하지만, 태생적으로 ML 학습 데이터 전용 도구가 아니다.

GX의 구조적 한계를 구체적으로 보면:

| 검증 유형 | GX | 더 나은 도구 |
| --- | --- | --- |
| 정형 데이터 스키마, null, 범위 검증 | 강점 | — |
| 파이프라인 게이트 (실패 시 자동 중단) | 강점 | — |
| 자동 문서화, 감사 추적 | 강점 | — |
| 합성 데이터 통계 분포 검증 | 가능 | — |
| 이미지, 음성 시각적 품질 진단 | 미지원 | DataClinic |
| 클래스 불균형 AI 기반 진단 | 미지원 | DataClinic |
| 라벨 오염 자동 탐지 | 미지원 | DataClinic, Cleanlab |
| 모델 서빙 후 드리프트 탐지 | 약함 | Evidently AI, Arize AI |
| Spark 대규모 처리 최적화 | 성능 이슈 보고 | — |

### 3.3 실사용자 고통 포인트 — "6개월 쓰다 포기" 패턴

GX 커뮤니티에서 실제로 보고되는 이탈 패턴이 있다. 이를 회피하지 않고 솔직하게 다루는 것이 더 현명한 도입 결정을 돕는다.

- •Expectations 과부하: 도입 초기에 Expectations를 한꺼번에 너무 많이 만들면 유지보수 부담이 폭발한다. 결국 아무도 관리하지 않는 Expectations 목록이 쌓인다. 처음에는 실제로 중요한 10~20개만 시작하라.
- •v0→v1 마이그레이션 혼란: v0.x 기준 튜토리얼을 보고 v1.x를 설정하려다 API 불일치로 막히는 케이스가 다수 보고됐다. 반드시 v1.x 공식 문서를 기준으로 시작해야 한다.
- •Spark 환경 성능 저하: 대규모 Spark 데이터셋에서 count/collect 연산이 2배 이상 지연되는 사례가 보고됐다. Spark 환경에서는 성능 테스트를 먼저 진행하는 것을 권장한다.

> [!callout]
> "언제 GX를 쓰지 말아야 하는가" 가이드: 이미 dbt를 쓰고 소스 레이어 검증이 필요 없다면 dbt-expectations로 충분할 수 있다. 비기술 사용자가 주 사용자라면 Soda Core가 진입장벽이 낮다. Pandas DataFrame 타입 검증만 필요하다면 Pandera가 더 가볍다. 모델 서빙 후 모니터링이 주 목적이라면 Evidently AI나 Arize AI가 더 적합하다.

## MLOps 데이터 품질 도구 지형 2025 — GX가 서 있는 위치

데이터 품질 도구를 선택할 때 "누가 더 좋은가"는 잘못된 질문이다. "어느 레이어에서 무엇을 책임지는가"가 옳은 질문이다. 같은 "데이터 품질 도구"라는 이름 아래에도 역할이 완전히 다른 도구들이 섞여 있다.

### 4.1 오픈소스 검증 도구 비교

다음은 2026년 4월 14일 GitHub API 실측값 기준 주요 오픈소스 데이터 검증 도구 비교다.

| 도구 | 대상 데이터 | 접근 방식 | Stars | 담당 레이어 |
| --- | --- | --- | --- | --- |
| GX | 정형 (CSV/SQL/Parquet) | Python Fluent API, 규칙 기반 | 11.4k | 소스 입수·ML 파이프라인 |
| dbt Tests | 정형 SQL | SQL 선언형 | 12.6k | SQL 변환 레이어 |
| Soda Core | 정형 | YAML/SodaCL 선언형 | 2.3k | 검증·모니터링 |
| Pandera | 정형 DataFrame | Python 스키마 | 4.3k | 분석 코드 내 |
| whylogs | 정형+반정형 | 통계 프로파일링 | 2.8k | 서빙 모니터링 |
| DataClinic | 비정형(이미지 등) | AI 기반 진단 | 상용 | ML 학습 데이터 진단 |

### 4.2 2025~2026 업계 변화 3가지

도구 지형에서 주목할 변화가 세 가지 있다.

- •WhyLabs, 2025년 1월 Apple에 인수: WhyLabs Inc.의 상업 운영이 중단됐다. whylogs 오픈소스 라이브러리는 계속 유지되지만, WhyLabs SaaS 제품은 더 이상 존재하지 않는다. "WhyLabs"를 현재 운영 중인 경쟁 상용 도구로 언급하는 것은 오정보가 된다.
- •Soda Core v4, Data Contracts 채택 (2026년 1월): Soda v4는 단순 YAML 체크를 넘어 팀 간 데이터 품질 책임을 계약 형태로 명문화하는 Data Contracts 방식을 기본으로 채택했다. "데이터를 제공하는 팀이 품질 기준을 계약으로 보장한다"는 새로운 패러다임이다.
- •dbt의 내장 유닛 테스팅 강화 (2024): dbt Core 1.8 이후 내장 유닛 테스팅 프레임워크가 강화됐다. "dbt만으로 충분하다"는 팀이 늘고 있어, GX vs dbt-expectations 선택 논쟁이 실질적인 커뮤니티 이슈가 됐다.

### 4.3 레이어별 도구 선택 가이드

다음 원칙으로 도구를 선택하면 혼란을 줄일 수 있다.

- •소스에서 들어오는 데이터 검증 → GX
- •SQL 변환 후 검증 (dbt 생태계) → dbt Tests 또는 dbt-expectations
- •비기술 사용자 접근성 우선 → Soda Core
- •Python 데이터 과학 워크플로 타입 안전성 → Pandera
- •모델 서빙 후 드리프트 모니터링 → Evidently AI, Arize AI
- •ML 학습용 이미지·비정형 데이터 품질 진단 → DataClinic

실무에서 많이 사용되는 조합은 GX(소스 입수·ML 파이프라인 레이어) + dbt Tests(SQL 변환 레이어) + Soda(프로덕션 지속 모니터링)다. 각 도구가 서로 다른 레이어를 담당하기 때문에 경쟁이 아닌 보완 관계를 형성한다.

## Pebblous 관점 — GX + DataClinic 이중 방어선

GX의 강점과 한계를 모두 이해하면 자연스럽게 하나의 질문에 도달한다. GX가 보지 못하는 것들 — 이미지의 시각적 결함, 클래스 불균형, 라벨 오염, 분포 드리프트 — 을 누가 담당하는가?

### 5.1 두 가지 질문, 두 개의 레이어

AI-Ready Data 파이프라인에는 두 가지 근본적으로 다른 질문이 있다.

- •레이어 1 (GX): "이 데이터가 형식에 맞는가?" — 스키마가 올바른가? null은 없는가? 값의 범위가 허용 범위 안인가? Checkpoint를 통과한 데이터는 다음 레이어로 진행한다.
- •레이어 2 (DataClinic): "이 데이터가 AI를 훈련시켜도 되는가?" — 이미지에 시각적 결함은 없는가? 클래스 분포가 심각하게 불균형하진 않은가? 라벨 오염은 없는가? 이 질문에는 AI 기반 진단이 필요하다.

GX가 막을 수 없는 것이 정확히 DataClinic이 탐지하는 문제다. 두 도구는 경쟁 관계가 아니라 레이어 분업 관계다.

### 5.2 이중 방어선 아키텍처

실무 AI-Ready Data 파이프라인에서 이 두 레이어는 순서대로 작동한다.

> [!callout]
> [데이터 소스] → GX Checkpoint  
>
>                                 ├── 스키마 검증  
>
>                                 ├── null 비율 검증  
>
>                                 ├── 통계 범위 검증  
>
>                                 └── 통과 → DataClinic 진단  
>
>                                     ├── AI 기반 이미지 품질 진단  
>
>                                     ├── 클래스 불균형 분석  
>
>                                     ├── 라벨 오염 탐지  
>
>                                     └── 통과 → ML 파이프라인 투입

### 5.3 DataGreenhouse 3단 플로우

> 합성 데이터 생성 워크플로에서도 GX는 중요한 역할을 한다. DataGreenhouse로 합성 데이터를 생성한 후, GX로 합성 데이터의 통계적 특성이 원본 데이터를 얼마나 보존하는지 자동 검증하고, 검증을 통과한 합성 데이터만 AI 파이프라인에 투입하는 3단 플로우가 가능하다.

> [!callout]
> DataGreenhouse (합성 데이터 생성)  
>
>                             → GX Checkpoint (통계 분포 검증)  
>
>                                 ├── 컬럼별 평균/표준편차 보존 여부  
>
>                                 ├── null 비율 일치 여부  
>
>                                 └── 카테고리 분포 보존 여부  
>
>                             → AI 파이프라인 투입

### 5.4 "AI-Ready Data" — GX와 Pebblous의 수렴점

> GX의 공식 블로그는 AI-Ready Data를 핵심 메시지로 전면에 내세운다. "좋은 데이터만이 좋은 AI 모델을 만든다." Pebblous의 브랜드 철학인 "좋은 모델은 좋은 데이터에서"와 동일한 명제다.

> 이 수렴점이 의미하는 것은 명확하다. GX를 깊이 이해하는 것이 곧 데이터 품질 문제 전체를 이해하는 것이다. 그리고 GX의 한계를 아는 팀이, GX를 넘어서는 레이어가 왜 필요한지도 안다. DataClinic은 GX가 멈추는 지점에서 시작한다.

> 데이터 품질 도구 시장은 2025년 약 27억 8천만 달러에서 2031년 73억 9천만 달러로 성장할 것으로 전망된다(Mordor Intelligence, CAGR 17.7%). MLOps 시장은 2030년 166억 달러에 달할 것으로 예상된다(Grand View Research, CAGR 40.5%). 이 시장의 성장은 데이터 품질에 대한 투자가 선택이 아닌 필수가 되고 있다는 신호다.

> GX + DataClinic 이중 방어선은 이 시대가 요구하는 AI-Ready Data 파이프라인의 현실적인 답이다. 형식에 맞는 데이터를 GX가 걸러내고, AI에 적합한 데이터를 DataClinic이 진단한다. 두 질문 모두에 답해야 진정한 AI-Ready Data 파이프라인이 완성된다.

## 자주 묻는 질문
