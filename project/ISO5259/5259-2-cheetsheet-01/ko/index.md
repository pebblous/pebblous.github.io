---
title: ISO/IEC 5259-2
subtitle: 데이터 품질 측정 기준(QM) 핵심 요약
date: 2025년 9월 12일
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# ISO/IEC 5259-2

_데이터 품질 측정 기준(QM) 핵심 요약_

## 서론: AI 데이터 품질의 표준 이해

<!-- stat-card -->
**인공지능(AI) 및 머신러닝(ML) 프로젝트의 성공은 전적으로 데이터의 품질에 달려있다고 해도 과언이 아닙니다. **데이터는 분석과 머신러닝의 핵심 원료**이며, 데이터 품질 문제는 모델의 성능 저하, 편향된 결과, 심각한 오작동으로 직결될 수 있습니다. 이러한 문제를 체계적으로 관리하고 해결하기 위해 국제표준화기구(ISO)와 국제전기기술위원회(IEC)는 AI 데이터 품질 평가 및 개선을 위한 국제 표준 프레임워크인 **ISO/IEC 5259 시리즈를 제정했습니다**.** — ISO/IEC 5259 시리즈는 데이터 품질 요구사항을 명시하고 평가하기 위한 프레임워크를 제공하는 ISO/IEC 25012 및 ISO/IEC 25024를 기반으로 합니다. 여기서 **ISO/IEC 25012는 컴퓨터 시스템 내부에 존재하는 데이터의 전통적 품질 모델을 정의하는 기초 표준**인 반면, **ISO/IEC 5259 시리즈는 이를 기반으로 하여 최신 인공지능(AI) 및 기계 학습(ML)의 맥락에 필수적인 데이터 품질 특성** (예: 다양성, 대표성, 유사성)을 **추가 및 확장하여 정의한 표준**입니다. — 본 치트시트는 이 표준의 핵심 문서 중 하나인 **ISO/IEC 5259-2에 명시된 데이터 품질 측정 기준(Quality Measures, QMs)에 대한 빠르고 쉬운 참조(Quick Access)를 제공**하는 것을 목표로 합니다. 이 문서는 AI 데이터 품질을 구성하는 수십 개의 복잡한 측정 기준을 네 가지 주요 특성 그룹으로 명확하게 분류하여 제시하며, 이를 통해 실무자들이 AI 프로젝트의 데이터 품질 요구사항을 정의하고, 현재 데이터셋의 상태를 진단하며, 개선 방향을 설정하는 데 실질적인 도움을 줄 것입니다. — 나아가 **AI 학습 데이터 품질 평가 솔루션인 페블러스 데이터 클리닉의 대부분의 품질 측정 방법이 이 ISO/IEC 5259-2 품질 측정 기준에 해당함**을 확인할 수 있습니다. 페블러스 데이터 클리닉은 **데이터렌즈(DataLens)와 데이터 이미징(Data Imaging) 기술을 활용**하여, AI 학습 데이터를 **임베딩 공간의 특징 벡터**로 변환하여 데이터를 **관찰 가능하고 측정 가능한** 형태로 분석합니다. 특히 페블러스 데이터 클리닉이 이 기술을 통해 수행하는 Level II/III 진단은, 표준이 ML 데이터셋에 추가적으로 요구하는 **충실도(Fidelity) 관련 특성들** (유사성, 다양성, 대표성, 균형)을 **정량적/시각적으로 진단하는 데 강력하게 대응**됩니다.

## 1내재적 데이터 품질 특성 (Inherent Data Quality Characteristics)

### 1.1. 전략적 중요성

<!-- stat-card -->
****************

### 1.2. 품질 측정 기준 목록

| 소분류 | QM ID | QM 항목 (한/영) | QM 설명/개념 |
| --- | --- | --- | --- |
| 정확성(Accuracy) | Acc-ML-1 | 구문 데이터 정확성(Syntactic data accuracy) | 구문적으로 정확한 데이터 값 집합에 대해 데이터 값이 얼마나 가까운지를 측정합니다. |
| Acc-ML-2 | 의미 데이터 정확성(Semantic data accuracy) | 의미적으로 정확한 데이터 값 집합에 대해 데이터 값이 얼마나 가까운지를 측정합니다. |  |
| Acc-ML-3 | 데이터 정확성 보증(Data accuracy assurance) | 데이터가 정확하다고 보장되는 정도를 측정합니다. |  |
| Acc-ML-4 | 데이터셋 부정확성 위험(Risk of dataset inaccuracy) | 데이터셋의 부정확성으로 인해 발생할 수 있는 잠재적 위험을 측정합니다. |  |
| Acc-ML-5 | 데이터 모델 정확성(Data model accuracy) | 데이터 모델이 데이터의 실제 특성을 얼마나 정확하게 표현하는지 측정합니다. |  |
| Acc-ML-6 | 데이터 정확성 범위(Data accuracy range) | 데이터 값의 정확성이 허용되는 범위를 측정합니다. |  |
| Acc-ML-7 | 데이터 라벨 정확성(Data label accuracy) | 데이터셋 내 각 요소에 라벨이 정확하게 할당되었는지 측정합니다. |  |
| 완전성(Completeness) | Com-ML-1 | 값 완전성(Value completeness) | 데이터 항목의 전체 수 대비 널(null) 값이 없는 데이터 항목의 비율을 측정합니다. |
| Com-ML-2 | 값 발생 완전성(Value occurrence completeness) | 주어진 데이터 값의 발생 횟수와 데이터 품질 요구사항에 명시된 예상 발생 횟수의 비율을 측정합니다. |  |
| Com-ML-3 | 특징 완전성(Feature completeness) | 특정 특징(feature)과 관련된 데이터 항목 중 널 값이 없는 데이터 항목의 비율을 측정합니다. |  |
| Com-ML-4 | 레코드 완전성(Record completeness) | 데이터 레코드의 전체 수 대비 비어있지 않은(non-empty) 데이터 레코드의 비율을 측정합니다. |  |
| Com-ML-5 | 라벨 완전성(Label completeness) | 데이터셋 내에서 라벨이 누락되거나 불완전하게 라벨링된 샘플의 비율을 측정합니다. |  |
| 일관성(Consistency) | Con-ML-1 | 데이터 레코드 일관성(Data record consistency) | 데이터셋 내 중복된 데이터 레코드의 비율을 측정합니다. |
| Con-ML-2 | 데이터 라벨 일관성(Data label consistency) | 유사한 데이터 항목에 동일한 라벨이 할당된 정도를 측정합니다. |  |
| Con-ML-3 | 데이터 포맷 일관성(Data format consistency) | 데이터 항목들이 데이터 포맷 일관성 요구사항을 충족하는 정도를 측정합니다. |  |
| Con-ML-4 | 의미 일관성(Semantic consistency) | 데이터 항목들이 의미 일관성 요구사항을 충족하는 정도를 측정합니다. |  |
| 신뢰성(Credibility) | Cre-ML-1 | 값 신뢰성(Values credibility) | 데이터 값의 신뢰성을 측정합니다. |
| Cre-ML-2 | 출처 신뢰성(Source credibility) | 데이터 출처의 신뢰성을 측정합니다. |  |
| Cre-ML-3 | 데이터 사전 신뢰성(Data dictionary credibility) | 데이터 사전의 신뢰성을 측정합니다. |  |
| Cre-ML-4 | 데이터 모델 신뢰성(Data model credibility) | 데이터 모델의 신뢰성을 측정합니다. |  |
| 최신성(Currentness) | Cur-ML-1 | 특징 최신성(Feature currentness) | 특징(feature)에 대해 허용 가능한 날짜 범위 내에 있는 데이터 항목의 비율을 측정합니다. |
| Cur-ML-2 | 레코드 최신성(Record currentness) | 데이터 레코드 내 모든 데이터 항목이 요구되는 연령 범위 내에 속하는 레코드의 비율을 측정합니다. |  |

## 2내재적 및 시스템 의존적 데이터 품질 특성 (Inherent and System-dependent Characteristics)

### 2.1. 전략적 중요성

### 2.2. 품질 측정 기준 목록

| 소분류 | QM ID | QM 항목 (한/영) | QM 설명/개념 |
| --- | --- | --- | --- |
| 접근성(Accessibility) | Acs-ML-1 | 사용자 접근성(User accessibility) | 권한이 있는 사용자가 필요한 데이터에 접근할 수 있는 비율을 측정합니다. |
| Acs-ML-2 | 데이터 포맷 접근성(Data format accessibility) | 표준 또는 공개된 데이터 포맷을 사용하여 데이터에 접근 가능한 정도를 측정합니다. |  |
| Acs-ML-3 | 데이터 접근성(Data accessibility) | 데이터셋 내 접근 가능한 레코드의 비율을 측정합니다. |  |
| 규정 준수(Compliance) | Cmp-ML-1 | 데이터 항목 규정 준수(Data item compliance) | 데이터 항목이 법규, 표준, 규칙 등 규정 준수 요구사항을 충족하는 정도를 측정합니다. |
| 효율성(Efficiency) | Eff-ML-1 | 데이터 포맷 효율성(Data format efficiency) | 데이터를 표현하는 데 사용되는 포맷의 저장 및 전송 효율성을 측정합니다. |
| Eff-ML-2 | 데이터 처리 효율성(Data processing efficiency) | 데이터를 처리하는 데 소요되는 시간 및 자원(CPU, 메모리)의 효율성을 측정합니다. |  |
| Eff-ML-3 | 공간 낭비 위험(Risk of wasted space) | 데이터 저장 시 불필요하게 낭비되는 저장 공간의 위험 정도를 측정합니다. |  |
| 정밀성(Precision) | Pre-ML-1 | 데이터 값 정밀성(Precision of data values) | 데이터 값이 실제 값을 얼마나 세밀하게 표현하는지의 정밀도(유효 자릿수)를 측정합니다. |
| 추적성(Traceability) | Tra-ML-1 | 데이터 값 추적성(Traceability of data values) | 데이터 값의 출처, 변경 이력, 생성 과정을 추적할 수 있는 정도를 측정합니다. |
| Tra-ML-2 | 사용자 접근 추적성(User access traceability) | 사용자의 데이터 접근, 수정, 삭제 기록을 감사 추적할 수 있는 정도를 측정합니다. |  |
| Tra-ML-3 | 데이터 값 추적성(Data values traceability) | 데이터 값의 생성부터 현재까지의 전체 이력을 추적할 수 있는 정도를 측정합니다. |  |
| 이해 가능성(Understandability) | Und-ML-1 | 기호 이해 가능성(Symbols understandability) | 데이터의 기호, 약어, 코드를 사용자가 쉽게 이해할 수 있는 정도를 측정합니다. |
| Und-ML-2 | 의미론적 이해 가능성(Semantic understandability) | 데이터의 의미와 맥락을 사용자가 명확하게 이해할 수 있는 정도를 측정합니다. |  |
| Und-ML-3 | 데이터 값 이해 가능성(Data values understandability) | 데이터 값 자체를 사용자가 해석하고 이해할 수 있는 정도를 측정합니다. |  |
| Und-ML-4 | 데이터 표현 이해 가능성(Data representation understandability) | 데이터가 표현되는 방식(차트, 그래프, 테이블 등)을 사용자가 이해할 수 있는 정도를 측정합니다. |  |

## 3시스템 의존적 데이터 품질 특성 (System-dependent Data Quality Characteristics)

### 3.1. 전략적 중요성

### 3.2. 품질 측정 기준 목록

| 소분류 | QM ID | QM 항목 (한/영) | QM 설명/개념 |
| --- | --- | --- | --- |
| 가용성(Availability) | Ava-ML-1 | 데이터 가용성 비율(Data availability ratio) | 필요할 때 데이터가 사용 가능한 시간의 비율(uptime)을 측정합니다. |
| 이식성(Portability) | Por-ML-1 | 데이터 이식성 비율(Data portability ratio) | 다른 시스템이나 환경으로 데이터를 성공적으로 이식할 수 있는 정도를 측정합니다. |
| Por-ML-2 | 예상 데이터 이식성(Prospective data portability) | 향후 다른 시스템으로 이식할 때 예상되는 호환성 및 이식 용이성을 측정합니다. |  |
| 복구 가능성(Recoverability) | Rec-ML-1 | 데이터 복구 가능성 비율(Data recoverability ratio) | 장애 또는 재해 발생 시 데이터를 복구할 수 있는 비율을 측정합니다. |
| Rec-ML-2 | 특징 복구 가능성 비율(Feature recoverability ratio) | 단계적으로 전송된 데이터셋 특징이 복구 가능한 정도를 측정합니다. |  |

## 4분석 및 ML을 위한 추가 데이터 품질 특성 (Additional Data Quality Characteristics)

### 4.1. 전략적 중요성

### 4.2. 품질 측정 기준 목록

| 소분류 | QM ID | QM 항목 (한/영) | QM 설명/개념 |
| --- | --- | --- | --- |
| 감사 가능성(Auditability) | Aud-ML-1 | 감사된 레코드(Audited records) | 데이터셋 내 감사(audit)를 거친 레코드의 비율을 측정합니다. |
| Aud-ML-2 | 감사 가능한 레코드(Auditable records) | 데이터셋 내 감사에 활용 가능한 레코드의 비율을 측정합니다. |  |
| 균형(Balance) | Bal-ML-1 | 밝기 균형(Brightness balance) | 이미지 샘플의 평균 밝기 대비 이미지 샘플의 밝기 차이가 최대인 값의 역수를 측정합니다. |
| Bal-ML-2 | 해상도 균형(Resolution balance) | 이미지 샘플의 평균 해상도 대비 이미지 샘플의 해상도 차이가 최대인 값의 역수를 측정합니다. |  |
| Bal-ML-3 | 범주 간 이미지 균형(Balance of images between categories) | 데이터셋의 평균 범주 크기(샘플 수) 대비 최대 범주 크기 차이의 역수를 측정합니다. |  |
| Bal-ML-4 | 바운딩 박스 종횡비 균형(Bounding box height to width ratio balance) | 데이터셋 내 바운딩 박스 종횡비 평균 대비 최대 차이의 역수를 측정합니다. |  |
| Bal-ML-5 | 범주 바운딩 박스 영역 균형(Category bounding box area balance) | 데이터셋 내 모든 샘플의 평균 바운딩 박스 영역 대비 범주별 평균 영역의 최대 차이의 역수를 측정합니다. |  |
| Bal-ML-6 | 샘플 바운딩 박스 영역 균형(Sample bounding box area balance) | 데이터셋 내 모든 샘플의 평균 바운딩 박스 영역 대비 샘플별 바운딩 박스 영역의 최대 차이의 역수를 측정합니다. |  |
| Bal-ML-7 | 라벨 비율 균형(Label proportion balance) | 특정 라벨 값을 가진 두 범주 간 데이터 항목 비율의 차이를 측정합니다. |  |
| Bal-ML-8 | 라벨 분포 균형(Label distribution balance) | 라벨 분포와 균일(uniform) 라벨 분포 사이의 발산 정도를 측정합니다. |  |
| 다양성(Diversity) | Div-ML-1 | 라벨 풍부도(Label richness) | 데이터셋 내 고유한(distinct) 라벨의 비율을 측정합니다. |
| Div-ML-2 | 상대적 라벨 풍부도(Relative label abundance) | 데이터셋 내 특정 라벨을 가진 개별 데이터(항목, 레코드, 프레임)의 비율을 측정합니다. |  |
| Div-ML-3 | 범주 크기 다양성(Category size diversity) | 품질 요구사항에 정의된 임계값보다 범주화된 데이터 항목 수가 적은 범주의 비율을 측정합니다. |  |
| 유효성(Effectiveness) | Eft-ML-1 | 특징 유효성(Feature effectiveness) | 데이터셋 내 허용 가능한 특징(acceptable feature)을 가진 샘플의 비율을 측정합니다. |
| Eft-ML-2 | 범주 크기 유효성(Category size effectiveness) | 범주화된 샘플 수가 임계값보다 낮은 범주의 비율을 측정합니다. |  |
| Eft-ML-3 | 라벨 유효성(Label effectiveness) | 데이터셋 내 허용 가능한 라벨을 가진 샘플의 비율을 측정합니다. |  |
| 식별 가능성(Identifiability) | Idn-ML-1 | 식별 가능성 비율(Identifiability ratio) | 데이터셋 내 식별 가능성(PII)에 사용될 수 있는 데이터 레코드의 비율을 측정합니다. |
| 적합성(Relevance) | Rel-ML-1 | 특징 적합성(Feature relevance) | 주어진 맥락(context)에 적합한 데이터셋 내 특징(feature)의 비율을 측정합니다. |
| Rel-ML-2 | 레코드 적합성(Record relevance) | 주어진 맥락(context)에 적합한 데이터셋 내 레코드의 비율을 측정합니다. |  |
| 대표성(Representativeness) | Rep-ML-1 | 대표성 비율(Representativeness ratio) | 목표 모집단(Target Population)의 관련 속성 대비 데이터셋에서 발견된 관련 속성의 비율을 측정합니다. |
| 유사성(Similarity) | Sim-ML-1 | 샘플 유사성(Sample similarity) | 클러스터링 알고리즘 결과로 도출된 클러스터 수를 활용하여 데이터셋 내 유사 샘플의 비율을 측정합니다. |
| Sim-ML-2 | 샘플 밀집도(Samples tightness) | 정규화된 데이터셋의 최대 고유값과 최소 고유값 간의 차이를 측정합니다 (데이터셋의 밀집도를 기하학적으로 측정). |  |
| Sim-ML-3 | 샘플 독립성(Samples independency) | PCA(주성분 분석) 방법을 사용하여 데이터셋의 차원 축소 가능성(샘플 독립성)을 측정합니다. |  |
| 적시성(Timeliness) | Tml-ML-1 | 데이터 항목 적시성(Timeliness of data items) | 적시성 요구사항을 충족하는 데이터 항목의 비율을 측정합니다. |

### 4.3. 추가 품질 특성의 심화 이해

#### 4.3.1. 데이터 생산자 관점 vs. 데이터 소비자 관점. ****

| 구분 | 전통적 표준 (ISO/IEC 25012 등) | ISO/IEC 5259 AI/ML 특성 |
| --- | --- | --- |
| 주요 관점 | 데이터 생산 및 관리 관점 | 데이터 소비자(AI/ML 사용자) 관점 |
| 측정 초점 | 데이터 자체의 내재적 속성 (정확성, 일관성 등) | 특정 AI 프로젝트 요구사항 충족 여부 |
| 맥락 의존성 | 맥락 독립적 측정 가능 | 사용 맥락 명시 필수 |
| 평가 기준 | 데이터 생산 표준 준수 여부 | AI 모델 성능 및 분석 결과 품질에 대한 기여도 |

#### 4.3.2. 사용자 관점(맥락) 의존적인 측정의 필요성. ****

#### 4.3.3. 추가 품질 특성의 맥락 의존 사례. ****

| 품질 특성 | QM 예시 | 맥락 의존성 설명 |
| --- | --- | --- |
| 대표성(Representativeness) | Rep-ML-1(대표성 비율) | 데이터셋이 '목표 모집단(Target Population)'의 관련 속성을 얼마나 반영하는지 측정.                                     목표 모집단은 AI 프로젝트가 추론하고자 하는 대상이므로,                                     사용자의 명확한 목표 없이는 측정 불가. |
| 적합성(Relevance) | Rel-ML-1/2(특징/레코드 적합성) | '주어진 맥락(given context)'에 적합한 특징 또는 레코드의 비율 측정.                                     예: 신용도 예측 모델에서 키와 몸무게 특징의 적합성 판단은 모델의 목적에 따라 달라짐. |
| 유효성(Effectiveness) | Eff-ML-1/2(정확도/재현율 기반) | 데이터셋이 '특정 ML 작업에서의 사용' 요구사항을 충족하는지 측정.                                     동일 데이터라도 분류/회귀/클러스터링 등 작업 유형에 따라 유효성이 다름. |
| 균형성(Balance) | Bal-ML-3/8(클래스 균형) | 각 범주의 샘플 분포가 균등한 정도를 측정하지만,                                     불균형 허용 정도는 모델의 학습 전략(오버샘플링, 가중치 조정 등)에 따라 달라짐. |

## 5[응용] ISO 5259-2 QM의 실제적 측정 방법론: 페블러스 데이터 클리닉 사례

### 5.1. 전략적 중요성

### 5.2. 진단 레벨별 QM 대응 관계 분석

#### 1. Level I (기초 품질) 진단과 내재적 특성의 연관성

- ********************
- ****************
- ****************
- ********

#### 2. Level II/III (고급 품질) 진단과 추가 특성의 연관성

- ********************
- ****************************
- ********

### 5.3. 결론적 통찰

## 참고 문헌 (References)

1. [https://www.iso.org/standard/81087.html](https://www.iso.org/standard/81087.html)
2. [https://www.iso.org/standard/81088.html](https://www.iso.org/standard/81088.html)
3. [https://www.iso.org/standard/35736.html](https://www.iso.org/standard/35736.html)
4. [https://www.iso.org/standard/35749.html](https://www.iso.org/standard/35749.html)
5. [https://pebblous.ai](https://pebblous.ai)
6. [https://dataclinic.ai](https://dataclinic.ai)

## 관련 자료

### ISO/IEC 5259-2 데이터 품질표준 요약표

### ISO/IEC 5259-2 데이터 품질 측정 기준(QM) 핵심 요약
