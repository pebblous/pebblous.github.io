---
title: 비즈 인사이트: Snowflake
subtitle: 데이터 클라우드 위의 AI-Ready Data 전략 — 페블러스 관점 분석
date: 2026년 4월 6일
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 비즈 인사이트: Snowflake

_데이터 클라우드 위의 AI-Ready Data 전략 — 페블러스 관점 분석_

## 요약 (Executive Summary)

<!-- stat-card -->
**"데이터를 저장하는 거인, 데이터를 진단하지는 않는다"** — Snowflake는 2012년 설립 이후 **시가총액 $530억, FY2026 제품 매출 $44.7억, 12,600+ 고객**을 확보한 클라우드 데이터 플랫폼의 대표 기업입니다. 스토리지-컴퓨팅 분리 아키텍처, 소비 기반 과금, 그리고 Cortex AI로의 전환을 통해 데이터 웨어하우스에서 AI 데이터 플랫폼으로 진화 중입니다. — 페블러스 관점에서 Snowflake는 **엔터프라이즈 데이터 인프라의 표준**이지만, **비정형 데이터 품질 진단, 도메인 특화 AI-Ready Data 검증, 규제 증적 패키지**라는 핵심 레이어가 부재합니다. 이 공백이 곧 페블러스 DataClinic의 전략적 진입점입니다.

아래 세 가지 핵심 수치는 Snowflake의 규모와 데이터 생태계 장악력을 보여줍니다. 소비 기반 과금, NRR 125%의 Land & Expand, 그리고 $400M+ AI 파트너십 투자는 페블러스가 참고해야 할 플랫폼 전략의 교본입니다.

<!-- stat-card -->
**$530억** — 시가총액 (2026.03)

<!-- stat-card -->
**$44.7억** — FY2026 제품 매출 (YoY +29%)

<!-- stat-card -->
**125%** — 순매출유지율 (NRR)

<!-- stat-card -->
**NYSESNOWSnowflake Inc.** — [Yahoo Finance ↗](https://finance.yahoo.com/quote/SNOW/)[TradingView ↗](https://www.tradingview.com/symbols/NYSE-SNOW/)

## 1. 기업 프로필

Snowflake는 2012년 프랑스 출신의 데이터베이스 전문가 Benoit Dageville와 Thierry Cruanes, 네덜란드 출신 Marcin Zukowski가 San Mateo에서 설립했습니다. "클라우드를 위해 처음부터 설계된 데이터 웨어하우스"라는 비전으로 출발해, 14년 만에 글로벌 데이터 인프라의 표준이 되었습니다. 아래 표는 기업의 핵심 지표입니다.

| 항목 | 내용 |
| --- | --- |
| 설립 | 2012년, San Mateo, CA |
| 창업자 | Benoit Dageville, Thierry Cruanes, Marcin Zukowski |
| CEO | Sridhar Ramaswamy (2024.02~, 전 Google Ads SVP, Neeva 창업자) |
| 본사 | Menlo Park, CA (2025년 Montana에서 이전) |
| IPO | 2020.09, NYSE: SNOW — $3.4B (소프트웨어 역사상 최대급 IPO) |
| 시가총액 | ~$530억 (2026.03) |
| FY2026 제품 매출 | $44.7억 (YoY +29%) |
| 비GAAP 제품 매출총이익률 | 75~76% |
| NRR | 125% (2025.10 기준) |
| RPO | $67억 (YoY +34%) |
| 직원 수 | ~10,995명 (2026.02) |
| 고객 수 | 12,600+ |
| 주요 투자자 (Pre-IPO) | Sequoia, ICONIQ, Dragoneer, Altimeter, Salesforce Ventures, Berkshire Hathaway |
| 최근 인수 | Neeva (2023, AI 검색), Observe (2026.01, AI 관측성) |

********************************

#### 핵심 포지셔닝: "AI Data Cloud"

<!-- stat-card -->
**Snowflake는 스스로를 "AI Data Cloud"로 정의합니다. 단순 데이터 웨어하우스를 넘어 **데이터 저장 → 공유 → AI/ML 활용**을 하나의 플랫폼에서 제공하며, Cortex AI를 통해 엔터프라이즈 AI의 기본 인프라로 자리잡겠다는 전략입니다. 소비 기반 과금 모델로 초기 진입 장벽을 낮추고, NRR 125%로 자연스럽게 확장하는 구조입니다.**

💡 Chapter Takeaway

**Snowflake는 소비 기반 과금과 NRR 125%로 12,600+ 고객을 확보한 데이터 인프라의 표준이다. CEO 교체 후 AI 중심 전환을 가속하며, "데이터가 있는 곳에 AI를"이라는 전략을 실행 중이다.**

## 2. 제품·기술 스택

Snowflake의 제품 포트폴리오는 **데이터 인프라 + AI 레이어 + 거버넌스 + 마켓플레이스**의 4층 구조입니다. 스토리지-컴퓨팅 분리라는 핵심 아키텍처 위에 Cortex AI, Horizon, Marketplace가 각각의 가치를 쌓아 올립니다.

### 2.1 Data Cloud Platform (핵심 인프라)

클라우드 네이티브 데이터 저장·처리·공유의 기본 레이어입니다. AWS, Azure, GCP 위에서 동작하며 스토리지와 컴퓨팅을 독립적으로 스케일링합니다.

| 기능 | 역할 |
| --- | --- |
| Data Warehousing | 구조화 데이터 저장·SQL 쿼리 — 핵심 매출 엔진 |
| Data Lake (Iceberg) | 반구조화·비구조화 데이터 지원, Apache Iceberg 오픈 테이블 포맷 |
| Snowpark | Python/Java/Scala 데이터 파이프라인 — 데이터 엔지니어링 확장 |
| Data Sharing | Zero-copy 데이터 공유 — 복제 없이 실시간 접근 |
| Marketplace | 2,700+ 리스팅, 670+ 프로바이더 — 데이터 생태계 |

### 2.2 Cortex AI (AI/ML 레이어)

Snowflake 플랫폼 내장 AI 서비스입니다. 데이터를 외부로 이동하지 않고 AI를 적용하는 "데이터에 AI를 가져온다"는 철학을 구현합니다. 9,100+ 계정이 활용 중이며, AI 워크로드는 200%+ 성장했습니다.

<!-- stat-card -->
**Cortex Analyst** — 자연어 → SQL 변환, 구조화 데이터 분석

<!-- stat-card -->
**Cortex Agents** — 에이전틱 AI — 구조화+비구조화 통합 오케스트레이션 (2025.11 GA)

<!-- stat-card -->
**Cortex Search** — 비구조화 데이터 검색 (문서, 텍스트)

<!-- stat-card -->
**Cortex Code** — AI 코딩 에이전트 — dbt/Airflow 확장 (2026.02)

### 2.3 Snowflake Intelligence

2025년 8월 퍼블릭 프리뷰로 출시된 에이전틱 AI 프레임워크입니다. 대화형 인터페이스로 데이터를 질의·분석·실행하며, CEO Sridhar Ramaswamy는 기존 BI 대비 3배 빠른 인사이트 생성을 강조했습니다.

### 2.4 Horizon (데이터 거버넌스)

Snowflake 내장 거버넌스 스위트입니다. 데이터 분류, 태깅, 보안, 프라이버시를 통합 관리합니다. 특히 Data Metric Functions(DMF)로 SQL 기반 데이터 품질 체크를 지원하지만, 그 범위가 제한적입니다.

| 기능 | 역할 | 깊이 |
| --- | --- | --- |
| Horizon Catalog | 유니버설 디스커버리 — 모든 Snowflake 객체 검색 | 충분 |
| 분류 & 태깅 | 데이터 분류, 객체 태깅, 민감 데이터 식별 | 충분 |
| 행/열 보안 | 세밀한 접근 제어, 동적 데이터 마스킹 | 충분 |
| DMF (품질 체크) | NULL, 중복, freshness 등 SQL 기반 기본 체크 | 기본 수준 |
| AI_REDACT | AI 기반 PII 자동 마스킹 | 충분 |
| 비정형 데이터 품질 | 이미지/영상/3D 데이터 품질 진단 | 미제공 |
| 도메인 특화 진단 | 제조·의료·농업별 데이터 품질 기준 | 미제공 |
| 규제 증적 패키지 | EU AI Act, ISO 42001 대응 증적 | 미제공 |

💡 Chapter Takeaway

**Snowflake는 "저장 → 공유 → AI"를 하나의 플랫폼에서 해결하는 4층 구조를 갖췄다. 그러나 데이터 거버넌스의 깊이는 정형 데이터 기본 체크 수준에 머문다. 비정형 데이터 품질, 도메인 진단, 규제 증적은 열려 있는 공백이다.**

## 3. 시장·재무 전략

Snowflake는 **소비 기반 과금 + Land & Expand + Marketplace 생태계**의 3축 전략으로 성장해왔습니다. 2020년 IPO 이후 매출이 7배 이상 성장했으며, Databricks와의 경쟁 속에서 AI 중심 전환을 가속하고 있습니다.

### 매출 성장 궤적

아래 타임라인은 Snowflake의 매출 성장과 전략적 전환점을 보여줍니다.

FY2023 (2023.01)

$20.7억 매출

데이터 웨어하우스 시장 선도, Frank Slootman CEO 체제

FY2024 (2024.01)

$28.0억 매출 (+35%)

Neeva 인수, AI 검색 역량 내재화. Sridhar Ramaswamy CEO 취임 준비

FY2025 (2025.01)

$34.3억 매출 (+23%)

Sridhar Ramaswamy CEO 취임. Cortex AI 본격화, Anthropic $200M 파트너십

FY2026 (2026.01)

$44.7억 제품 매출 (+29%)

OpenAI $200M 파트너십, Observe 인수, Cortex Code 출시. 성장 재가속

### 쉬운 설명: Snowflake의 돈 이야기

Snowflake의 사업 모델을 클라우드 저장소 임대업에 비유할 수 있습니다. 건물주가 층별로 공간을 임대하듯, Snowflake는 기업의 데이터를 저장하고 처리하는 "클라우드 공간"을 임대합니다. 특이한 점은 **월세가 아니라 사용한 만큼만 과금**한다는 것입니다.

#### Snowflake 비즈니스 모델 한눈에

- • **수익원**: 데이터 저장·처리·AI 서비스 사용량에 따른 과금 (크레딧 기반)
- • **매출총이익률 75~76%**: 클라우드 인프라 위에서 동작하므로 AWS/Azure/GCP에 비용을 지불하지만, 부가가치가 높아 마진이 좋음
- • **NRR 125%**: 기존 고객이 매년 25% 더 지출 → 별도 영업 없이도 매출 성장
- • **RPO $67억**: 이미 계약했지만 아직 매출로 인식하지 않은 금액 → 미래 매출 가시성 높음
- • **FCF 마진 61%**: 실제 현금 창출 능력이 매우 강함 (영업이익보다 현금이 더 많이 들어옴)

### Snowflake vs Databricks: 데이터 플랫폼 양강 구도

데이터 클라우드 시장은 Snowflake와 Databricks의 양강 구도입니다. 두 회사의 매출은 비슷한 수준에 수렴했지만, 강점 영역은 뚜렷하게 다릅니다.

| 차원 | Snowflake | Databricks |
| --- | --- | --- |
| 핵심 강점 | SQL 분석, 데이터 공유 | ML/AI, 데이터 엔지니어링 |
| 아키텍처 | SaaS (완전 관리형) | Lakehouse (오픈소스 기반) |
| FY2026 매출 | ~$45억 | ~$37억 ARR |
| 밸류에이션 | $530억 (상장) | ~$620억 (비상장) |
| AI 전략 | Cortex AI (파트너 모델 통합) | Mosaic ML (자체 모델 학습) |
| 데이터 품질 | DMF (SQL 기본 체크) | Unity Catalog (메타데이터) |

### $400M+ AI 파트너십 전략

Snowflake는 AI 모델을 직접 만들기보다, 최고의 모델을 플랫폼에 통합하는 전략을 선택했습니다. 이는 "데이터가 이미 여기 있으니, AI도 여기서 실행하라"는 강력한 포지셔닝입니다.

<!-- stat-card -->
**Anthropic — $200M** — Claude 모델 Cortex 내장, 12,600+ 고객 접근 (2025.12)

<!-- stat-card -->
**OpenAI — $200M** — GPT 모델 통합, 공동 GTM (2026.02)

<!-- stat-card -->
**Google Cloud — Gemini 3** — Cortex AI 네이티브 통합 (2025.01)

<!-- stat-card -->
**Palantir** — Foundry + AIP ↔ AI Data Cloud 통합 (2025.10)

💡 Chapter Takeaway

**Snowflake는 $400M+ AI 파트너십으로 "데이터가 있는 곳에 AI를"이라는 전략을 실행 중이다. 소비 기반 과금과 NRR 125%가 만드는 성장 플라이휠은 강력하지만, 데이터 품질 영역은 전략적 우선순위 밖에 있다.**

## 4. 페블러스 관점: 겹침·공백 분석

Snowflake는 "데이터 인프라"를, 페블러스는 "데이터 품질 진단"을 핵심으로 삼습니다. 아래 4분면은 두 회사의 전략적 관계를 구조화한 것입니다. 핵심 발견: **직접 경쟁보다 보완 관계가 압도적으로 넓다.**

### 겹침·공백·공존·학습 4분면

아래 4분면은 경쟁전략의 핵심 개념(Porter의 경쟁전략, Brandenburger-Nalebuff의 Co-opetition)을 하나의 매트릭스로 조합한 것입니다.

#### 기본 데이터 품질 모니터링

<!-- stat-card -->
**겹침 영역 — 경계 필요** — Snowflake의 DMF + Horizon이 NULL, 중복, freshness 등 기본 정형 데이터 품질 체크를 제공합니다. DataClinic의 정형 데이터 진단과 부분적으로 겹치지만, 목적(인프라 체크 vs AI 모델 성능 개선)과 깊이(SQL 체크 vs 뉴럴넷 진단)가 다릅니다.

#### 비정형 데이터 품질 + 규제 증적

<!-- stat-card -->
**공백 영역 — 페블러스 고유** — 이미지, 영상, 3D 포인트 클라우드의 품질 진단은 Snowflake가 전혀 다루지 않는 영역입니다. 도메인 특화(제조, 의료, 농업) 데이터 기준, EU AI Act/ISO 42001 규제 증적 패키지도 부재합니다. 이것이 페블러스의 가장 강력한 구조적 차별화입니다.

#### Cortex AI 투입 전 데이터 검증

<!-- stat-card -->
**공존 가능 — 파트너십 기회** — Snowflake 고객이 Cortex AI에 데이터를 투입하기 전, DataClinic으로 데이터 품질을 사전 검증하는 워크플로우가 자연스럽습니다. Snowflake Marketplace에 DataClinic을 네이티브 앱으로 리스팅하면 12,600+ 고객에 즉시 접근 가능합니다.

#### 소비 기반 과금 + 마켓플레이스 생태계

<!-- stat-card -->
**학습 포인트 — 벤치마크** — 초기 도입 장벽을 낮추는 사용량 기반 과금, NRR 125%의 자연 확장, Marketplace를 통한 네트워크 효과 — 모두 DataClinic이 채택할 수 있는 전략적 패턴입니다. AI 모델 파트너십($400M+)도 벤치마크 대상입니다.

#### 왜 $530억 거인도 이 공백을 쉽게 메우지 못하는가?

<!-- stat-card -->
**Snowflake의 핵심 철학은 **"데이터를 저장·처리·공유하는 수평 플랫폼"**입니다. 데이터 품질은 고객이 알아서 관리하는 영역으로 간주합니다. DataClinic이 제공하는 **비정형 데이터(이미지/영상/3D) 품질 진단**을 만들려면 CV/뉴럴넷 전문 역량이 필요한데, Snowflake의 핵심 팀은 SQL 엔진·분산 시스템 전문가입니다. **도메인 특화 진단**(제조·의료·농업)은 각 분야 데이터의 깊은 이해를 전제하며, 이는 수평 플랫폼의 DNA와 충돌합니다. 무엇보다 Snowflake는 Databricks와의 AI/ML 경쟁에 $400M+ 파트너십을 투자하는 중이라 **데이터 품질은 전략적 우선순위에서 밀려 있습니다.** 이 우선순위 갭이 곧 페블러스의 진입 공간입니다.**

💡 Chapter Takeaway

**Snowflake와 페블러스는 경쟁자가 아니라 보완재다. Snowflake가 "데이터를 저장·공유·AI 적용"하는 인프라를 제공한다면, 페블러스는 그 데이터의 "건강 상태를 진단하고 규제 증적으로 증명"하는 레이어를 쌓을 수 있다.**

## 5. 위협·기회·교훈

Snowflake가 페블러스에게 보내는 시그널을 위협, 기회, 교훈의 세 축으로 정리했습니다. Snowflake의 규모가 만드는 위협은 실재하지만, 플랫폼 기업이 구조적으로 비워둔 공간이 바로 페블러스의 기회입니다.

### 위협

<!-- stat-card -->
**THREAT 01** — Horizon 거버넌스의 점진적 강화 — Snowflake가 DMF와 Horizon을 강화하면서 "충분히 좋은" 데이터 품질을 기본 제공할 경우, 고객이 별도 솔루션 도입 동기가 감소합니다. 특히 정형 데이터 품질 영역은 Snowflake 자체 기능과 겹칠 수 있습니다.

<!-- stat-card -->
**THREAT 02** — 데이터 품질 전문 기업 인수 가능성 — Snowflake는 Observe(AI 관측성) 인수에서 보듯 기능 공백을 인수로 채우는 패턴이 있습니다. Monte Carlo, Great Expectations 같은 데이터 관측성/품질 전문 기업을 인수하면 경쟁 구도가 달라질 수 있습니다.

<!-- stat-card -->
**THREAT 03** — 생태계 잠금 효과 — 12,600+ 고객이 Snowflake 생태계에 깊이 임베딩되면, "이미 쓰는 플랫폼에서 다 되는데 왜 별도 솔루션을?"이라는 관성이 생깁니다. Cortex AI, Intelligence, Marketplace가 만드는 통합 경험이 외부 도구 도입 장벽을 높일 수 있습니다.

### 기회

<!-- stat-card -->
**OPPORTUNITY 01** — Snowflake Marketplace 네이티브 앱 — DataClinic을 Snowflake Marketplace에 네이티브 앱으로 리스팅하면 12,600+ 고객에 즉시 접근 가능합니다. Snowflake 데이터를 외부로 이동하지 않고 진단하는 구조는 "데이터 주권" 요구와 완벽히 맞습니다.

<!-- stat-card -->
**OPPORTUNITY 02** — "Cortex AI 정확도를 높이려면 DataClinic" — Snowflake 고객이 Cortex AI/ML 파이프라인을 도입할수록, 데이터 품질이 AI 성능의 병목이 됩니다. "Cortex에 넣기 전에 DataClinic으로 먼저 검증하세요"라는 포지셔닝이 자연스럽습니다. AI-Ready Data라는 공동 GTM 메시지가 가능합니다.

<!-- stat-card -->
**OPPORTUNITY 03** — 비정형 데이터 워크로드 확대 — Snowflake가 Iceberg, Cortex Search 등으로 비정형 데이터 워크로드를 확대할수록, 이미지/영상/문서의 품질 진단 수요도 함께 증가합니다. Snowflake가 비정형 데이터를 더 많이 저장할수록, DataClinic의 시장도 커집니다.

### 교훈

<!-- stat-card -->
**LESSON 01** — 소비 기반 과금으로 진입 장벽 제거 — Snowflake의 "사용한 만큼 지불" 모델이 12,600+ 고객을 만들었습니다. DataClinic도 데이터셋 진단 건수, 이미지 수 기반 과금으로 초기 도입 장벽을 낮출 수 있습니다. "무료로 첫 번째 데이터셋 진단 → 유료 전환"은 검증된 패턴입니다.

<!-- stat-card -->
**LESSON 02** — Marketplace로 네트워크 효과 창출 — Snowflake Marketplace의 핵심 가치는 "데이터 공급자와 소비자의 네트워크 효과"입니다. DataClinic도 진단 결과, 데이터 품질 점수, 벤치마크를 공유 자산으로 만들면 유사한 네트워크 효과를 기대할 수 있습니다.

<!-- stat-card -->
**LESSON 03** — "핵심은 직접 만들지 않는다" 파트너십 전략 — Snowflake는 AI 모델을 직접 만들지 않고 Anthropic/OpenAI/Google과 $400M+ 파트너십을 맺었습니다. 핵심 역량(데이터 플랫폼)에 집중하고 나머지는 최고 파트너와 통합하는 전략입니다. 페블러스도 데이터 진단에 집중하고, 인프라는 Snowflake/Databricks 같은 플랫폼과 통합하는 것이 효율적입니다.

<!-- stat-card -->
**LESSON 04** — NRR 125%의 Land & Expand — 1개 부서의 작은 워크로드로 진입 → 전사 확장하는 패턴입니다. DataClinic도 "1개 데이터셋 진단 → 전사 데이터 거버넌스 → 규제 증적 패키지"로의 확장 경로를 설계할 수 있습니다. 기존 고객 내 매출 확장이 신규 고객 확보보다 효율적이라는 검증된 교훈입니다.

💡 Chapter Takeaway

**Snowflake의 위협은 실재하지만, $530억 거인의 전략적 우선순위가 AI/ML 경쟁에 집중된 지금이 오히려 기회다. Marketplace 네이티브 앱, AI-Ready Data 공동 GTM, 소비 기반 과금 — 세 가지가 페블러스의 즉시 실행 가능한 전략이다.**

<!-- stat-card -->
**데이터 품질이 AI 성능의 시작입니다** — DataClinic으로 데이터 건강 상태를 진단하고, AI-Ready Data 파이프라인을 구축하세요. Snowflake 위에서도, 독립적으로도 작동합니다. — [DataClinic 데모 신청](https://dataclinic.ai)[비즈 인사이트 시리즈 전체 보기](/project/BizReport/ko/)

## 자주 묻는 질문 (FAQ)

### Snowflake는 어떤 회사인가요?

<!-- stat-card -->
**2012년 설립된 클라우드 네이티브 데이터 플랫폼 기업입니다. 데이터 웨어하우스, 데이터 레이크, AI/ML을 하나의 플랫폼에서 제공합니다. 시가총액 ~$530억, 12,600+ 고객을 보유하고 있으며, FY2026 제품 매출 $44.7억을 기록했습니다.**

### Snowflake와 Databricks의 차이점은 무엇인가요?

<!-- stat-card -->
**Snowflake는 SQL 분석·데이터 공유에 강하고 완전 관리형 SaaS 모델입니다. Databricks는 ML/AI·데이터 엔지니어링에 강하며 오픈소스 기반 Lakehouse 아키텍처입니다. 매출 규모는 비슷하지만 Databricks가 밸류에이션 프리미엄(~$620억 vs $530억)을 받고 있습니다.**

### Snowflake Cortex AI란 무엇인가요?

<!-- stat-card -->
**Snowflake 플랫폼 내장 AI 서비스입니다. 자연어 쿼리(Cortex Analyst), 에이전틱 AI(Cortex Agents), ML 파이프라인(Cortex ML), AI 코딩(Cortex Code) 등을 제공합니다. 9,100+ 계정이 활용 중이며, Anthropic, OpenAI, Google 모델이 통합되어 있습니다.**

### Snowflake의 데이터 거버넌스 기능은 어떤가요?

<!-- stat-card -->
**Horizon 스위트가 데이터 분류, 태깅, 행/열 보안, 접근 이력, Data Clean Rooms, DMF(데이터 품질 체크)를 제공합니다. 다만 비정형 데이터(이미지/영상) 품질 진단, 도메인 특화 진단, EU AI Act/ISO 42001 규제 증적은 제공하지 않습니다.**

### 페블러스 DataClinic과 Snowflake는 어떻게 연결되나요?

<!-- stat-card -->
**Snowflake가 데이터 저장·처리 인프라를 제공하고, DataClinic이 그 위의 데이터 품질을 진단합니다. 특히 Cortex AI 투입 전 데이터 검증, Snowflake Marketplace 네이티브 앱 리스팅, AI-Ready Data 공동 GTM이 핵심 연결점입니다.**

### Snowflake에서 AI-Ready Data를 어떻게 준비하나요?

<!-- stat-card -->
**Snowflake는 Cortex AI와 Snowpark로 AI 파이프라인을 제공하지만, 데이터 자체의 품질 진단은 기본 수준(DMF)에 머뭅니다. 특히 비정형 데이터의 경우 DataClinic 같은 전문 도구로 품질 사전 검증이 권장됩니다. "Garbage In, Garbage Out"을 방지하는 핵심 단계입니다.**

### Snowflake의 최근 AI 파트너십 전략은?

<!-- stat-card -->
**Anthropic $200M, OpenAI $200M, Google Gemini 3 통합, Palantir, Accenture 등과 파트너십을 체결했습니다. AI 모델을 직접 만들기보다 최고의 모델을 플랫폼에 통합하는 전략입니다. "데이터가 이미 여기 있으니, AI도 여기서 실행하라"는 강력한 포지셔닝입니다.**
