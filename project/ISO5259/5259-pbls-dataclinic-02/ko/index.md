---
title: AI 데이터 품질 표준과 페블러스 데이터클리닉
subtitle: ISO/IEC 5259-2 품질측정기준(QM)과의 정량적 매핑 분석
date: 2025년 11월 16일
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI 데이터 품질 표준과 페블러스 데이터클리닉

_ISO/IEC 5259-2 품질측정기준(QM)과의 정량적 매핑 분석_

## 초록: AI 데이터 품질 관리의 필요성

<!-- stat-card -->
**AI 모델의 성능은 학습 데이터의 품질에 직접적으로 의존하며, 데이터 품질 관리는 더 이상 선택이 아닌 필수 요건이 되었다.
                        이에 본 분석은 **ISO/IEC 5259 시리즈**로 대표되는 국제 AI 데이터 품질 표준과 **페블러스 데이터 클리닉**의 기술적 상관관계를 심층 분석한다.** — **ISO/IEC 5259-2**는 기존 품질 특성 외에도 분석 및 ML에 필수적인 9가지 추가적인 데이터 품질 특성을 포함하여 60개 이상의 정량적 측정기준(QM)을 정의하며,
                        페블러스 데이터 클리닉은 이를 **DNN 기반 데이터렌즈(DataLens)**와 **데이터 이미징(Data Imaging)** 기술로 구현한다. — 본 분석을 통해 데이터 클리닉의 **Level I (기초 EDA)**, **Level II (일반 렌즈)**, **Level III (데이터 특이적 렌즈)** 진단 체계가
                        ISO/IEC 5259-2의 완전성, 유사성, 대표성, 다양성 등 핵심 QM 그룹을 포괄적으로 대응하여 측정하고 있음을 입증한다.
                        페블러스의 데이터렌즈 기법은 ISO 표준의 추상적인 품질 특성들을 고차원의 학습 데이터에 효과적으로 적용하기 위한 구체적인 측정 기능(Measurement function)을 제공하는 것으로 해석될 수 있다.

## 1배경: AI 데이터 품질의 중요성

### 1.1. 규제 환경

<!-- stat-card -->
************ — **EU AI Act**: 고위험 AI 시스템 데이터 품질 의무화 — [공식문서](https://eur-lex.europa.eu/eli/reg/2024/1689/oj/eng)|[데이터 거버넌스 해설](https://artificialintelligenceact.eu/article/10/) — ▸**미국 EO 14110**: AI 안전 표준 및 데이터 거버넌스 — [공식문서](https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence)|[2024 이행 평가](https://www.gao.gov/products/gao-24-107332) — ▸**한국 지능정보화법**: AI 윤리 기준 및 데이터 관리 — [공식문서](https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=233999)|[AI허브 품질관리 가이드라인 2025](https://www.aihub.or.kr/aihubnews/qlityguidance/view.do?currMenu=135&topMenu=103&nttSn=10404)

### 1.2. 기술적 과제

| 문제 | 정의 | 영향 (사례) | 대응 |
| --- | --- | --- | --- |
| 편향 데이터 | 특정 인구집단이나 상황에 편중된 학습 데이터 | 차별적 AI 결과 생성                                     사례 | 대표성, 균형성 검증 |
| 불완전 데이터 | 필수 클래스나 속성이 누락되거나 불충분한 데이터 | 특정 클래스 학습 실패                                     사례 | 완전성 측정 및 보완 |
| 유사 데이터 과다 | 중복되거나 지나치게 유사한 데이터 샘플의 과다 포함 | 과적합(Overfitting) 유발                                     사례 | 유사성 측정, 데이터 다이어트 |

<!-- stat-card -->
******[https://jtip.law.northwestern.edu/2025/01/30/algorithmic-bias-in-ai-employment-decisions/](https://jtip.law.northwestern.edu/2025/01/30/algorithmic-bias-in-ai-employment-decisions/)****[https://www.nature.com/articles/s41586-024-07566-y](https://www.nature.com/articles/s41586-024-07566-y)****[https://link.springer.com/article/10.1007/s10462-024-11040-6](https://link.springer.com/article/10.1007/s10462-024-11040-6)**

<!-- stat-card -->
****핵심 메시지:**
                        AI 데이터 품질 관리는 규제 준수뿐 아니라 모델 성능, 공정성, 신뢰성 확보를 위한 필수 기술 인프라다.
                        페블러스 데이터클리닉은 이러한 요구에 부응하는 국제 표준 기반 솔루션이다.**

## 2ISO/IEC 5259 시리즈 개요

<!-- stat-card -->
********

| Part | 제목 | 내용 |
| --- | --- | --- |
| Part 1 | 개요, 용어 및 사례 | 데이터 품질 특성(DQC), 품질 측정기준(QM), 평가 방법론 등 핵심 개념 정의 및 실제 예제 제시 |
| Part 2 | 데이터 품질 측정 | 24개 DQC와 65개 이상의 정량적 QM 제시. 본 보고서의 핵심 분석 대상 |
| Part 3 | 데이터 품질 관리 요구사항 및 가이드라인 | 조직의 데이터 품질 관리 시스템 구축, 구현, 유지 및 개선을 위한 요구사항과 지침 제공 |
| Part 4 | 데이터 품질 프로세스 프레임워크 | Part 3의 관리 요구사항을 충족하기 위한 운영 프로세스 프레임워크 제공 |
| Part 5 | 데이터 품질 거버넌스 프레임워크 | 데이터 생명주기 전반에 걸친 고품질 데이터 확보를 위한 거버넌스 수준의 프레임워크 (2025.02 발간) |
| Part 6 | 시각화 프레임워크 (Technical Report) | 데이터 품질 측정 결과를 시각화하는 방법론 제공 (발간 예정) |

<!-- stat-card -->
********************************

### 2.1. AI/ML 데이터 품질 특성: 내재적 및 추가 품질 특성

<!-- stat-card -->
************ — ********************[/project/ISO5259/5259-2-cheetsheet-01.html#section-4](/project/ISO5259/5259-2-cheetsheet-01.html#section-4)

| 분류 | 품질 특성 | 설명 | AI/ML 관련성 |
| --- | --- | --- | --- |
| 내재적 품질 특성(데이터 자체의 본질적 속성) | 정확성 (Accuracy) | 데이터 값과 라벨이 실제 값과 얼마나 일치하는가 | 부정확한 라벨은 모델 학습을 왜곡시킴 |
| 완전성 (Completeness) | 필요한 데이터와 라벨이 모두 존재하는가 | 결측치는 모델 성능 저하의 주요 원인 |  |
| 일관성 (Consistency) | 데이터 간 모순이 없고, 유사 데이터에 동일 라벨 부여 | 라벨 불일치는 모델 혼란 유발 |  |
| 신뢰성 (Credibility) | 데이터 출처와 값의 신뢰성 | 신뢰할 수 없는 데이터는 AI 결과의 신뢰도 하락 |  |
| 최신성 (Currentness) | 데이터가 허용 가능한 시간 범위 내에 있는가 | 오래된 데이터는 현재 환경과 불일치 유발 |  |
| 추가 품질 특성(AI/ML 특화, 총 9개) | 감사가능성 (Auditability) | 데이터가 감사를 받았거나 감사 가능한 정도 | 규제 준수 및 데이터 출처 추적 필요 |
| 균형성 (Balance) | 데이터셋 내 각 범주의 샘플 분포가 균등한 정도 | 불균형 데이터는 편향된 모델 생성 |  |
| 다양성 (Diversity) | 데이터셋이 다양한 범위의 특징과 값을 포함하는 정도 | 다양성 부족은 특정 상황에서만 작동하는 모델 생성 |  |
| 유효성 (Effectiveness) | 데이터셋이 특정 ML 작업의 요구사항을 충족하는 정도 | 유효하지 않은 데이터는 학습 성능 저하 |  |
| 식별가능성 (Identifiability) | PII(개인식별정보)를 통해 개인을 식별할 수 있는 정도 | 개인정보보호 및 프라이버시 위험 관리 필요 |  |
| 적합성 (Relevance) | 데이터셋이 주어진 맥락(목적)에 적합한 정도 | 부적합한 데이터는 학습 효율성 저하 |  |
| 대표성 (Representativeness) | 데이터셋이 타겟 모집단을 반영하는 정도 | 대표성 부족은 실제 환경에서 성능 저하 |  |
| 유사성 (Similarity) | 데이터셋 내 샘플 간 유사성의 정도 | 과도한 유사 데이터는 과적합 유발 |  |
| 적시성 (Timeliness) | 현상 발생과 데이터 기록 사이의 지연 시간 | 시간 지연은 데이터 신뢰성 및 적용성 저하 |  |

## 3ISO/IEC 5259-2 핵심 품질측정기준(QM) 분석

### 3.1. 완전성 (Completeness) QM

| QM ID | QM 항목 | 설명 | AI 모델 리스크 |
| --- | --- | --- | --- |
| Com-ML-1 | 값 완전성 (Value completeness) | 널(null) 값이 없는 데이터 항목의 비율 | 결측치로 인한 학습 실패 |
| Com-ML-3 | 특징 완전성 (Feature completeness) | 특정 특징과 관련된 데이터 항목 중 널 값이 없는 비율 | 특정 특성 학습 실패 |
| Com-ML-5 | 라벨 완전성 (Label completeness) | 라벨이 누락되거나 불완전하게 라벨링된 샘플의 비율 | 특정 클래스 분류 성능 저하 |

### 3.2. 유사성 (Similarity) QM

| QM ID | QM 항목 | 설명 | AI 모델 리스크 |
| --- | --- | --- | --- |
| Sim-ML-1 | 데이터셋 내 유사 인스턴스 비율 | 데이터셋 내 유사한 샘플의 비율 측정 | 과적합 (Overfitting) 유발 |
| Sim-ML-2 | 클래스 내 평균 유사도 | 같은 클래스 내 샘플 간 평균 유사도 | 일반화 성능 저하 |

### 3.3. 대표성 (Representativeness) QM

| QM ID | QM 항목 | 설명 | AI 모델 리스크 |
| --- | --- | --- | --- |
| Rep-ML-1 | 타겟 도메인 커버리지 | 실제 응용 환경의 다양한 상황을 얼마나 포괄하는가 | 실제 환경 성능 저하 |
| Rep-ML-3 | 분포 간 거리 (KL-divergence) | 학습 데이터 분포와 실제 데이터 분포 간의 차이 | 배포 후 예측 신뢰도 하락 |

### 3.4. 균형성 (Balance) QM

| QM ID | QM 항목 | 설명 | AI 모델 리스크 |
| --- | --- | --- | --- |
| Bal-ML-3 | 범주 간 이미지 균형 | 클래스별 샘플 수의 균형 정도 | 소수 클래스 무시, 편향 예측 |
| Bal-ML-2 | 특성 균형 | 데이터셋 내 특성 분포의 균형 | 특정 특성에 대한 과도한 의존 |

## 4핵심 분석: 데이터클리닉과 ISO/IEC 5259-2의 정량적 매핑

### 4.1. 내재적 품질 특성 매핑

| ISO 5259-2 특성 | QM ID | DataClinic 측정 기능 | 지원 상태 |
| --- | --- | --- | --- |
| 완전성 (Completeness) | Com-ML-5 | Level I: 결측치 측정, 라벨 완전성 분석 | 지원 |
| 일관성 (Consistency) | Con-ML-2 | Level II/III: 라벨 일관성 분석 (유사 샘플 라벨 비교) | 지원 |
| 정확성 (Accuracy) | Acc-ML-7 | Level II/III: 라벨 정확성 검증 (이상치 탐지) | 지원 |

### 4.2. AI/ML 추가 품질 특성 매핑 (9개 특성)

| ISO 5259-2 특성 | 대표 QM ID | DataClinic/AADS 측정 기능 | 지원 상태 |
| --- | --- | --- | --- |
| 균형성 (Balance) | Bal-ML-3, Bal-ML-8 | Level I: 클래스 분포 분석, 라벨 불균형 측정 | 지원 |
| 다양성 (Diversity) | Div-ML-1, Div-ML-2 | Level II/III: 고유차원 분석, 특징 다양성 측정 | 지원 |
| 대표성 (Representativeness) | Rep-ML-1 | Level II/III: 매니폴드 갭 분석, 모집단 커버리지 측정 | 지원 |
| 유사성 (Similarity) | Sim-ML-1, Sim-ML-2 | Level II/III: 샘플 밀도 측정, 중복 데이터 탐지 | 지원 |
| 적합성 (Relevance) | Rel-ML-1, Rel-ML-2 | Level II/III: 맥락 적합성 분석 (아웃라이어 탐지) | AADS 확장 |
| 유효성 (Effectiveness) | Eft-ML-1, Eft-ML-3 | Level I/II: 유효 샘플 비율, 품질 임계값 검증 | AADS 확장 |
| 감사가능성 (Auditability) | Aud-ML-1, Aud-ML-2 | AADS: 데이터 계보 추적, 품질 감사 로그 | AADS 확장 |
| 식별가능성 (Identifiability) | Idn-ML-1 | AADS: PII 탐지 및 익명화 수준 평가 | 로드맵 |
| 적시성 (Timeliness) | Tml-ML-1 | AADS: 데이터 신선도 측정, 시간 지연 분석 | 로드맵 |

- **현재 DataClinic**은 ISO/IEC 5259-2의 내재적 품질 특성 3개와 AI/ML 추가 특성 9개 중 4개를 직접 측정 및 개선 가능
- **2025년 수행중인 AADS 확장**을 통해 감사가능성, 유효성 등 3개 특성을 추가중
- **2025년 이후 로드맵**으로 식별가능성(PII 보호), 적시성(데이터 신선도) 기능 개발 예정
- 진단 결과에 따른 **데이터 다이어트**(중복 제거)와 **데이터 벌크업**(부족 영역 보강)은 표준이 요구하는 품질 개선 활동과 정확히 일치

## 5페블러스 데이터클리닉: 기술적 구현과 DNN 기반 접근법

### 5.1. 3단계 진단 체계

| Level | 명칭 | 측정 기능 | 대응 ISO QM |
| --- | --- | --- | --- |
| Level I | 기본 EDA | • 결측치 분석                                     • 클래스 분포                                     • 기본 통계량                                     • 이상치 탐지 | Com-ML (완전성)                                     Bal-ML (균형성) |
| Level II | 일반 렌즈 | • 범용 임베딩 사용                                     • 밀도 측정                                     • 거리 분포 분석                                     • 매니폴드 형태 | Sim-ML (유사성)                                     Rep-ML (대표성)                                     Div-ML (다양성) |
| Level III | 데이터별 렌즈 | • 맞춤 임베딩                                     • 고유 차원 분석                                     • 정밀 품질 측정                                     • 도메인별 진단 | Sim-ML, Rep-ML, Div-ML정밀 측정 |

### 5.2. DataLens: DNN 기반 데이터 분석

#### 핵심 기능

- **Data Imaging**: 원본 데이터 → 특성 벡터 → 임베딩 공간
- ▸**밀도 측정**: k-NN 거리 기반 밀집도 정량화
- ▸**매니폴드 분석**: 데이터 분포의 기하학적 구조 파악

#### 측정 함수

- ▸**Density(x)**: 샘플 x 주변 밀도
- ▸**Distance(x, C)**: 클래스 C까지의 최소 거리
- ▸**ManifoldShape(D)**: 데이터셋 D의 매니폴드 형태

### 5.3. 데이터 처방 시스템

| 처방 | 목적 | 방법 | 효과 |
| --- | --- | --- | --- |
| 데이터 다이어트 | 유사성(Similarity) 과다 해결 | • 중복 샘플 제거                                     • 밀집 영역 샘플링 | 과적합 위험 감소 |
| 데이터 벌크업 | 대표성(Representativeness) 부족 해결 | • 매니폴드 갭 보강                                     • 희소 영역 데이터 추가 | 일반화 성능 향상 |

## 6사례: 데이터클리닉의 ISO/IEC 5259-2 적용

### 6.1. 이미지 데이터셋 진단

| 단계 | ISO QM | 발견 사항 | 처방 및 결과 |
| --- | --- | --- | --- |
| 문제 발견 | Sim-ML-1 | Level III 밀도 측정 결과, 특정 영역에 40% 샘플 밀집 | 데이터 다이어트: 밀집 영역 25% 제거 → 훈련 시간 30% 단축 |
| 문제 발견 | Rep-ML-1 | 매니폴드 갭 분석에서 5개 희소 영역 발견 | 데이터 벌크업: 희소 영역 15% 보강 → 테스트 정확도 7% 향상 |

### 6.2. 텍스트 데이터셋 품질 검증

| 단계 | ISO QM | 발견 사항 | 처방 및 결과 |
| --- | --- | --- | --- |
| 문제 발견 | Com-ML-5 | Level I 결측치 분석에서 특정 클래스 20% 누락 | 자동 라벨링: 누락 클래스 보완 → 완전성 95% 달성 |
| 문제 발견 | Bal-ML-3 | 클래스 불균형 비율 1:15 발견 | 클래스 리샘플링: SMOTE 기반 합성 → F1-score 18% 개선 |

## 7정책 제언 및 결론

### 7.1. 정책 제언

#### 1. ISO/IEC 5259 국내 표준 채택 가속화

#### 2. 데이터 품질 검증 도구 생태계 조성

#### 3. AI 거버넌스 체계에 데이터 품질 통합

#### 4. 데이터 중심 AI 인력 양성

### 7.2. 결론

## 참고문헌

### 국제표준·법·정책

- ISO/IEC JTC 1/SC 42. (2024). [ISO/IEC 5259-1:2024 — Artificial intelligence — Data quality for analytics and machine learning (ML) — Part 1: Overview, terminology, and examples](https://www.iso.org/standard/81088.html).
- 2.ISO/IEC JTC 1/SC 42. (2024). [ISO/IEC 5259-2:2024 — Part 2: Data quality measures](https://www.iso.org/standard/81653.html).
- 3.ISO/IEC JTC 1/SC 42. (2024). [ISO/IEC 5259-3:2024 — Part 3: Data quality management requirements and guidelines](https://www.iso.org/standard/81654.html).
- 4.European Parliament. (2024). [Regulation (EU) 2024/1689 on Artificial Intelligence (AI Act)](https://eur-lex.europa.eu/eli/reg/2024/1689/oj).
- 5.The White House. (2023). [Executive Order 14110 on Safe, Secure, and Trustworthy Artificial Intelligence](https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/).
- 6.과학기술정보통신부. (2024). 인공지능 윤리기준 및 신뢰성 확보 가이드라인.
- 7.한국지능정보사회진흥원(NIA). (2023). AI 데이터 품질관리 가이드라인 v2.0.

### 학술 논문

- 8.Sambasivan, N., et al. (2021). "Everyone wants to do the model work, not the data work": Data Cascades in High-Stakes AI. _CHI 2021_. [doi.org/10.1145/3411764.3445518](https://dl.acm.org/doi/10.1145/3411764.3445518)
- 9.Gebru, T., et al. (2021). Datasheets for Datasets. _Communications of the ACM_, 64(12), 86–92. [arXiv:1803.09010](https://arxiv.org/abs/1803.09010)
- 10.Mitchell, M., et al. (2019). Model Cards for Model Reporting. _FAT* 2019_. [arXiv:1810.03677](https://arxiv.org/abs/1810.03677)
