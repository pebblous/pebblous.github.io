![Pebblous_Brandmark_Orange quarter](assets/Pebblous_Brandmark_Orange%20quarter.png)

# **ISO/IEC 5259-2: 데이터 품질 측정 기준(QM) 핵심 요약**
- 기획: **페블러스** 데이터 커뮤니케이션팀 
- 작성: 2025-09-12
- 인터랙티브 콘텐츠: https://blog.pebblous.ai/

## **서론: AI 데이터 품질의 표준 이해**

> 
> 인공지능(AI) 및 머신러닝(ML) 프로젝트의 성공은 전적으로 데이터의 품질에 달려있다고 해도 과언이 아닙니다. **데이터는 분석과 머신러닝의 핵심 원료**이며, 데이터 품질 문제는 모델의 성능 저하, 편향된 결과, 심각한 오작동으로 직결될 수 있습니다. 이러한 문제를 체계적으로 관리하고 해결하기 위해 국제표준화기구(ISO)와 국제전기기술위원회(IEC)는 AI 데이터 품질 평가 및 개선을 위한 국제 표준 프레임워크인 **ISO/IEC 5259 시리즈를 제정했습니다**.
> 
> ISO/IEC 5259 시리즈는 데이터 품질 요구사항을 명시하고 평가하기 위한 프레임워크를 제공하는 ISO/IEC 25012 및 ISO/IEC 25024를 기반으로 합니다. 여기서 **ISO/IEC 25012는 컴퓨터 시스템 내부에 존재하는 데이터의 전통적 품질 모델을 정의하는 기초 표준**인 반면, **ISO/IEC 5259 시리즈는 이를 기반으로 하여 최신 인공지능(AI) 및 기계 학습(ML)의 맥락에 필수적인 데이터 품질 특성** (예: 다양성, 대표성, 유사성)을 **추가 및 확장하여 정의한 표준**입니다.
> 
> 본 치트시트는 이 표준의 핵심 문서 중 하나인 **ISO/IEC 5259-2에 명시된 데이터 품질 측정 기준(Quality Measures, QMs)에 대한 빠르고 쉬운 참조(Quick Access)를 제공**하는 것을 목표로 합니다. 이 문서는 AI 데이터 품질을 구성하는 수십 개의 복잡한 측정 기준을 네 가지 주요 특성 그룹으로 명확하게 분류하여 제시하며, 이를 통해 실무자들이 AI 프로젝트의 데이터 품질 요구사항을 정의하고, 현재 데이터셋의 상태를 진단하며, 개선 방향을 설정하는 데 실질적인 도움을 줄 것입니다.
> 
> 나아가 **AI 학습 데이터 품질 평가 솔루션인 페블러스 데이터 클리닉의 대부분의 품질 측정 방법이 이 ISO/IEC 5259-2 품질 측정 기준에 해당함**을 확인할 수 있습니다. 페블러스 데이터 클리닉은 **데이터렌즈(DataLens)와 데이터 이미징(Data Imaging) 기술을 활용**하여, AI 학습 데이터를 **임베딩 공간의 특징 벡터**로 변환하여 데이터를 **관찰 가능하고 측정 가능한** 형태로 분석합니다. 특히 페블러스 데이터 클리닉이 이 기술을 통해 수행하는 Level II/III 진단은, 표준이 ML 데이터셋에 추가적으로 요구하는 **충실도(Fidelity) 관련 특성들** (유사성, 다양성, 대표성, 균형)을 **정량적/시각적으로 진단하는 데 강력하게 대응**됩니다.

---

## **1\. 내재적 데이터 품질 특성 (Inherent Data Quality Characteristics)**

### **1.1. 전략적 중요성**

> '내재적 데이터 품질 특성'은 데이터가 특정 시스템이나 응용 프로그램과 무관하게, 데이터 자체로서 본질적으로 지니는 속성을 의미합니다. 이는 단순히 사전 검토 항목이 아니라, 데이터 무결성의 초석입니다. 이 기반이 부실할 경우, 즉 데이터가 부정확하거나(**정확성**), 불완전하거나(**완전성**), 모순된다면(**일관성**) 그 결함은 프로젝트 전반에 걸쳐 연쇄적인 실패를 유발합니다. 이는 결국 막대한 비용의 재작업으로 이어지며, 근본적으로 신뢰할 수 없는 AI 모델을 양산하는 원인이 됩니다. 따라서 내재적 품질 관리를 소홀히 하는 것은 해결해야 할 기술적 과제인 '데이터 부채(data debt)'를 의도적으로 쌓는 것과 같으며, 이는 모든 AI 이니셔티브의 성공을 위협하는 가장 큰 리스크입니다.

### **1.2. 품질 측정 기준 목록**

| 소분류 (Sub-classification) | QM ID | QM 항목 (Name) (한/영 병기) | QM 설명/개념 |
| :---- | :---- | :---- | :---- |
| **정확성 (Accuracy)** | Acc-ML-1 | Syntactic data accuracy (구문 데이터 정확성) | 구문적으로 정확한 데이터 값 집합에 대해 데이터 값이 얼마나 가까운지를 측정합니다. |
|  | Acc-ML-2 | Semantic data accuracy (의미 데이터 정확성) | 의미적으로 정확한 데이터 값 집합에 대해 데이터 값이 얼마나 가까운지를 측정합니다. |
|  | Acc-ML-3 | Data accuracy assurance (데이터 정확성 보증) | 데이터가 정확하다고 보장되는 정도를 측정합니다. |
|  | Acc-ML-4 | Risk of dataset inaccuracy (데이터셋 부정확성 위험) | 데이터셋의 부정확성으로 인해 발생할 수 있는 잠재적 위험을 측정합니다. |
|  | Acc-ML-5 | Data model accuracy (데이터 모델 정확성) | 데이터 모델이 데이터의 실제 특성을 얼마나 정확하게 표현하는지 측정합니다. |
|  | Acc-ML-6 | Data accuracy range (데이터 정확성 범위) | 데이터 값의 정확성이 허용되는 범위를 측정합니다. |
|  | Acc-ML-7 | Data label accuracy (데이터 라벨 정확성) | 데이터셋 내 각 요소에 라벨이 정확하게 할당되었는지 측정합니다. |
| **완전성 (Completeness)** | Com-ML-1 | Value completeness (값 완전성) | 데이터 항목의 전체 수 대비 널(null) 값이 없는 데이터 항목의 비율을 측정합니다. |
|  | Com-ML-2 | Value occurrence completeness (값 발생 완전성) | 주어진 데이터 값의 발생 횟수와 데이터 품질 요구사항에 명시된 예상 발생 횟수의 비율을 측정합니다. |
|  | Com-ML-3 | Feature completeness (특징 완전성) | 특정 특징(feature)과 관련된 데이터 항목 중 널 값이 없는 데이터 항목의 비율을 측정합니다. |
|  | Com-ML-4 | Record completeness (레코드 완전성) | 데이터 레코드의 전체 수 대비 비어있지 않은(non-empty) 데이터 레코드의 비율을 측정합니다. |
|  | Com-ML-5 | Label completeness (라벨 완전성) | 데이터셋 내에서 라벨이 누락되거나 불완전하게 라벨링된 샘플의 비율을 측정합니다. |
| **일관성 (Consistency)** | Con-ML-1 | Data record consistency (데이터 레코드 일관성) | 데이터셋 내 중복된 데이터 레코드의 비율을 측정합니다. |
|  | Con-ML-2 | Data label consistency (데이터 라벨 일관성) | 유사한 데이터 항목에 동일한 라벨이 할당된 정도를 측정합니다. |
|  | Con-ML-3 | Data format consistency (데이터 포맷 일관성) | 데이터 항목들이 데이터 포맷 일관성 요구사항을 충족하는 정도를 측정합니다. |
|  | Con-ML-4 | Semantic consistency (의미 일관성) | 데이터 항목들이 의미 일관성 요구사항을 충족하는 정도를 측정합니다. |
| **신뢰성 (Credibility)** | Cre-ML-1 | Values credibility (값 신뢰성) | 데이터 값의 신뢰성을 측정합니다. |
|  | Cre-ML-2 | Source credibility (출처 신뢰성) | 데이터 출처의 신뢰성을 측정합니다. |
|  | Cre-ML-3 | Data dictionary credibility (데이터 사전 신뢰성) | 데이터 사전의 신뢰성을 측정합니다. |
|  | Cre-ML-4 | Data model credibility (데이터 모델 신뢰성) | 데이터 모델의 신뢰성을 측정합니다. |
| **최신성 (Currentness)** | Cur-ML-1 | Feature currentness (특징 최신성) | 특징(feature)에 대해 허용 가능한 날짜 범위 내에 있는 데이터 항목의 비율을 측정합니다. |
|  | Cur-ML-2 | Record currentness (레코드 최신성) | 데이터 레코드 내 모든 데이터 항목이 요구되는 연령 범위 내에 속하는 레코드의 비율을 측정합니다. |

---

## **2\. 내재적 및 시스템 의존적 데이터 품질 특성 (Inherent and System-dependent Characteristics)**

### **2.1. 전략적 중요성**

> '내재적 및 시스템 의존적 특성'은 데이터 자체의 속성과 이를 저장, 처리, 활용하는 시스템의 상호작용에 의해 결정되는 품질 차원입니다. 데이터가 아무리 정확하더라도(내재적 품질), 그 가치는 비즈니스 환경에서의 활용 가능성에 의해 결정됩니다. 예를 들어, 데이터에 대한 접근성이 낮으면(**`Acs-ML-3`**) 데이터 과학팀의 개발 속도를 저하시켜 AI 제품의 시장 출시(Time-to-market)를 직접적으로 지연시킵니다. 데이터 처리 효율성이 낮거나(**`Eff-ML`**), 공간 낭비 위험이 크다면(**`Eff-ML-3`**) 이는 즉각적인 클라우드 컴퓨팅 비용 증가와 투자수익률(ROI) 악화로 이어집니다. 따라서 이 특성들은 데이터의 잠재적 가치를 실질적인 비즈니스 성과로 전환하는 데 있어 핵심적인 관리 지표이며, 이를 무시하는 것은 곧 경쟁 우위를 포기하는 것과 같습니다.

### **2.2. 품질 측정 기준 목록**

| 소분류 (Sub-classification) | QM ID | QM 항목 (Name) (한/영 병기) | QM 설명/개념 |
| :---- | :---- | :---- | :---- |
| **접근성 (Accessibility)** | Acs-ML-1 | User accessibility (사용자 접근성) | ISO/IEC 25024:2015, Table 6.1에 정의된 대로 사용자 접근성을 측정합니다. |
|  | Acs-ML-2 | Data format accessibility (데이터 포맷 접근성) | ISO/IEC 25024:2015, Table 6.2에 정의된 대로 데이터 포맷 접근성을 측정합니다. |
|  | Acs-ML-3 | Data accessibility (데이터 접근성) | 데이터셋 내 접근 가능한 레코드의 비율을 측정합니다. |
| **규정 준수 (Compliance)** | Cmp-ML-1 | Data item compliance (데이터 항목 규정 준수) | 데이터 항목이 법규, 표준, 규칙 등 규정 준수 요구사항을 충족하는 정도를 측정합니다. |
| **효율성 (Efficiency)** | Eff-ML-1 | Data format efficiency (데이터 포맷 효율성) | ISO/IEC 25024:2015, Table 9.2에 정의된 대로 데이터 포맷의 효율성을 측정합니다. |
|  | Eff-ML-2 | Data processing efficiency (데이터 처리 효율성) | ISO/IEC 25024:2015, Table 9.2에 정의된 대로 데이터 처리 효율성을 측정합니다. |
|  | Eff-ML-3 | Risk of wasted space (공간 낭비 위험) | ISO/IEC 25024:2015, Table 9.2에 정의된 대로 공간 낭비 위험을 측정합니다. |
| **정밀성 (Precision)** | Pre-ML-1 | Precision of data values (데이터 값 정밀성) | ISO/IEC 25024:2015, Table 10.1에 정의된 대로 데이터 값의 정확도를 측정합니다. |
| **추적성 (Traceability)** | Tra-ML-1 | Traceability of data values (데이터 값 추적성) | ISO/IEC 25024:2015, Table 11.1에 정의된 대로 데이터 값의 추적 가능성을 측정합니다. |
|  | Tra-ML-2 | User access traceability (사용자 접근 추적성) | ISO/IEC 25024:2015, Table 11.2에 정의된 대로 사용자 접근의 감사 추적 가능성을 측정합니다. |
|  | Tra-ML-3 | Data values traceability (데이터 값 추적성) | ISO/IEC 25024:2015, Table 11.2에 정의된 대로 데이터 값의 추적 가능성을 측정합니다. |
| **이해 가능성 (Understandability)** | Und-ML-1 | Symbols understandability (기호 이해 가능성) | ISO/IEC 25024:2015, Table 12.1에 정의된 대로 데이터의 기호 이해 가능성을 측정합니다. |
|  | Und-ML-2 | Semantic understandability (의미론적 이해 가능성) | ISO/IEC 25024:2015, Table 12.1에 정의된 대로 데이터의 의미론적 이해 가능성을 측정합니다. |
|  | Und-ML-3 | Data values understandability (데이터 값 이해 가능성) | ISO/IEC 25024:2015, Table 12.1에 정의된 대로 데이터 값의 이해 가능성을 측정합니다. |
|  | Und-ML-4 | Data representation understandability (데이터 표현 이해 가능성) | ISO/IEC 25024:2015, Table 12.2에 정의된 대로 데이터 표현의 이해 가능성을 측정합니다. |

---

## **3\. 시스템 의존적 데이터 품질 특성 (System-dependent Data Quality Characteristics)**

### **3.1. 전략적 중요성**

> '시스템 의존적 데이터 품질 특성'은 전적으로 데이터를 저장, 전송, 처리하는 IT 인프라의 성능과 아키텍처에 의해 좌우되는 품질 지표입니다. 데이터 기반 서비스의 신뢰성은 시스템의 안정성에 달려 있습니다. 데이터가 필요할 때 시스템 장애 없이 즉시 사용할 수 있는지(**가용성**), 다른 환경으로 쉽게 이전할 수 있는지(**이식성**), 그리고 재해 발생 시 신속하게 복구할 수 있는지(**복구 가능성**)는 비즈니스 연속성 계획(BCP)의 핵심 요소입니다. 이 특성들은 데이터 자산의 기술적 견고함을 나타내며, 안정적인 운영 리스크 관리의 핵심입니다. 특히 AI 및 ML 모델의 성능과 직결되는 추가적인 데이터 품질 특성을 평가하기 위해서는 이러한 시스템적 기반이 반드시 선행되어야 합니다.

### **3.2. 품질 측정 기준 목록**

| 소분류 (Sub-classification) | QM ID | QM 항목 (Name) (한/영 병기) | QM 설명/개념 |
| :---- | :---- | :---- | :---- |
| **가용성 (Availability)** | Ava-ML-1 | Data availability ratio (데이터 가용성 비율) | ISO/IEC 25024:2015, Table 13에 정의된 대로 데이터 가용성 비율을 측정합니다. |
| **이식성 (Portability)** | Por-ML-1 | Data portability ratio (데이터 이식성 비율) | ISO/IEC 25024:2015, Table 14에 정의된 대로 데이터 이식성 비율을 측정합니다. |
|  | Por-ML-2 | Prospective data portability (예상 데이터 이식성) | ISO/IEC 25024:2015, Table 14에 정의된 대로 예상 데이터 이식성을 측정합니다. |
| **복구 가능성 (Recoverability)** | Rec-ML-1 | Data recoverability ratio (데이터 복구 가능성 비율) | ISO/IEC 25024:2015, Table 15에 정의된 대로 데이터 복구 가능성 비율을 측정합니다. |
|  | Rec-ML-2 | Feature recoverability ratio (특징 복구 가능성 비율) | 단계적으로 전송된 데이터셋 특징이 복구 가능한 정도를 측정합니다. |

---

## **4\. 분석 및 ML을 위한 추가 데이터 품질 특성 (Additional Data Quality Characteristics)**

### **4.1. 전략적 중요성**

> '추가 데이터 품질 특성'은 더 이상 선택적이거나 부수적인 요소가 아닙니다. 이들은 공정하고, 견고하며, 일반화 가능한 AI 시스템을 구축하기 위한 **핵심적이고 정의적인 특성**입니다. 이 지표들은 데이터셋이 목표 현실 세계를 얼마나 충실히 반영하는지, 즉 **충실도(Fidelity)`Bal-ML`**), 목표 모집단을 충분히 대변하는지(**`Rep-ML-1`**), 다양한 시나리오를 포함하는지(**다양성**)는 모델의 성능을 넘어 사회적 책무와 직결됩니다. 이 영역에서의 실패는 단순히 성능 저하에 그치지 않고, 편향되거나 비대표적인 모델로 인해 심각한 평판 및 법적 리스크를 초래할 수 있습니다. 따라서 이 특성들은 현대 AI 프로젝트의 성공과 실패를 가르는 가장 중요한 기준점입니다.

### **4.2. 품질 측정 기준 목록**

| 소분류 (Sub-classification) | QM ID | QM 항목 (Name) (한/영 병기) | QM 설명/개념 |
| :---- | :---- | :---- | :---- |
| **감사 가능성 (Auditability)** | Aud-ML-1 | Audited records (감사된 레코드) | 데이터셋 내 감사(audit)를 거친 레코드의 비율을 측정합니다. |
|  | Aud-ML-2 | Auditable records (감사 가능한 레코드) | 데이터셋 내 감사에 활용 가능한 레코드의 비율을 측정합니다. |
| **균형 (Balance)** | Bal-ML-1 | Brightness balance (밝기 균형) | 이미지 샘플의 평균 밝기 대비 이미지 샘플의 밝기 차이가 최대인 값의 역수를 측정합니다. |
|  | Bal-ML-2 | Resolution balance (해상도 균형) | 이미지 샘플의 평균 해상도 대비 이미지 샘플의 해상도 차이가 최대인 값의 역수를 측정합니다. |
|  | Bal-ML-3 | Balance of images between categories (범주 간 이미지 균형) | 데이터셋의 평균 범주 크기(샘플 수) 대비 최대 범주 크기 차이의 역수를 측정합니다. |
|  | Bal-ML-4 | Bounding box height to width ratio balance (바운딩 박스 종횡비 균형) | 데이터셋 내 바운딩 박스 종횡비 평균 대비 최대 차이의 역수를 측정합니다. |
|  | Bal-ML-5 | Category bounding box area balance (범주 바운딩 박스 영역 균형) | 데이터셋 내 모든 샘플의 평균 바운딩 박스 영역 대비 범주별 평균 영역의 최대 차이의 역수를 측정합니다. |
|  | Bal-ML-6 | Sample bounding box area balance (샘플 바운딩 박스 영역 균형) | 데이터셋 내 모든 샘플의 평균 바운딩 박스 영역 대비 샘플별 바운딩 박스 영역의 최대 차이의 역수를 측정합니다. |
|  | Bal-ML-7 | Label proportion balance (라벨 비율 균형) | 특정 라벨 값을 가진 두 범주 간 데이터 항목 비율의 차이를 측정합니다. |
|  | Bal-ML-8 | Label distribution balance (라벨 분포 균형) | 라벨 분포와 균일(uniform) 라벨 분포 사이의 발산 정도를 측정합니다. |
| **다양성 (Diversity)** | Div-ML-1 | Label richness (라벨 풍부도) | 데이터셋 내 고유한(distinct) 라벨의 비율을 측정합니다. |
|  | Div-ML-2 | Relative label abundance (상대적 라벨 풍부도) | 데이터셋 내 특정 라벨을 가진 개별 데이터(항목, 레코드, 프레임)의 비율을 측정합니다. |
|  | Div-ML-3 | Category size diversity (범주 크기 다양성) | 품질 요구사항에 정의된 임계값보다 범주화된 데이터 항목 수가 적은 범주의 비율을 측정합니다. |
| **유효성 (Effectiveness)** | Eft-ML-1 | Feature effectiveness (특징 유효성) | 데이터셋 내 허용 가능한 특징(acceptable feature)을 가진 샘플의 비율을 측정합니다. |
|  | Eft-ML-2 | Category size effectiveness (범주 크기 유효성) | 범주화된 샘플 수가 임계값보다 낮은 범주의 비율을 측정합니다. |
|  | Eft-ML-3 | Label effectiveness (라벨 유효성) | 데이터셋 내 허용 가능한 라벨을 가진 샘플의 비율을 측정합니다. |
| **식별 가능성 (Identifiability)** | Idn-ML-1 | Identifiability ratio (식별 가능성 비율) | 데이터셋 내 식별 가능성(PII)에 사용될 수 있는 데이터 레코드의 비율을 측정합니다. |
| **적합성 (Relevance)** | Rel-ML-1 | Feature relevance (특징 적합성) | 주어진 맥락(context)에 적합한 데이터셋 내 특징(feature)의 비율을 측정합니다. |
|  | Rel-ML-2 | Record relevance (레코드 적합성) | 주어진 맥락(context)에 적합한 데이터셋 내 레코드의 비율을 측정합니다. |
| **대표성 (Representativeness)** | Rep-ML-1 | Representativeness ratio (대표성 비율) | 목표 모집단(Target Population)의 관련 속성 대비 데이터셋에서 발견된 관련 속성의 비율을 측정합니다. |
| **유사성 (Similarity)** | Sim-ML-1 | Sample similarity (샘플 유사성) | 클러스터링 알고리즘 결과로 도출된 클러스터 수를 활용하여 데이터셋 내 유사 샘플의 비율을 측정합니다. |
|  | Sim-ML-2 | Samples tightness (샘플 밀집도) | 정규화된 데이터셋의 최대 고유값과 최소 고유값 간의 차이를 측정합니다 (데이터셋의 밀집도를 기하학적으로 측정). |
|  | Sim-ML-3 | Samples independency (샘플 독립성) | PCA(주성분 분석) 방법을 사용하여 데이터셋의 차원 축소 가능성(샘플 독립성)을 측정합니다. |
| **적시성 (Timeliness)** | Tml-ML-1 | Timeliness of data items (데이터 항목 적시성) | 적시성 요구사항을 충족하는 데이터 항목의 비율을 측정합니다. |

---

## **5\. \[응용\] ISO 5259-2 QM의 실제적 측정 방법론: 페블러스 데이터 클리닉 사례**

### **5.1. 전략적 중요성**

> ISO/IEC 5259-2 표준은 데이터 품질을 위해 **'무엇을(What)'** 측정해야 하는지에 대한 명확한 프레임워크를 제공합니다. 그러나 실제 현장에서는, 특히 이미지나 텍스트와 같은 비정형 데이터의 복잡한 특성을 평가하기 위해 **'어떻게(How)'** 측정할 것인지에 대한 구체적인 방법론이 필수적입니다. 
> 
> **[페블러스](http://pebblous.ai)** 에서 2024년에 출시한 AI 학습데이터 품질관리도구인 **[데이터클리닉](http://dataclinic.ai)** 의 예를 들어 보겠습니다. ([http://dataclinic.ai](http://dataclinic.ai) ) **'데이터렌즈(DataLens)'** 기술은 이러한 도전 과제에 대한 구체적인 해결책을 제시하는 좋은 예시입니다. 이 기술은 데이터를 고차원 임베딩 공간으로 변환하여 추상적인 품질 표준을 실제 데이터 환경에서 정량적이고 시각적으로 진단할 수 있게 합니다. 이는 표준이 제시하는 개념적 요구사항과 실제 데이터를 분석하는 첨단 기술이 어떻게 결합하여 데이터 품질 관리의 실효성을 높이는지 보여주는 중요한 사례입니다.

### **5.2. 진단 레벨별 QM 대응 관계 분석**

#### **1\. Level I (기초 품질) 진단과 내재적 특성의 연관성**

페블러스의 Level I 진단은 데이터 정합성, 결측치, 클래스 균형 등 데이터셋의 기본적인 통계적, 물리적 특성을 평가하는 기초 분석 단계입니다. 이는 ISO 표준의 전통적인 **내재적 데이터 품질 특성** 그룹과 직접적으로 연결됩니다.

* **결측치 측정**: 데이터 값, 레코드, 라벨의 누락 여부를 확인하는 이 진단 항목은 ISO 표준의 **완전성(Completeness)** 특성, 특히 **`Com-ML-1` (값 완전성)**,  **`Com-ML-4` (레코드 완전성)**, **`Com-ML-5` (라벨 완전성)** 와 직접 대응됩니다.  
* **데이터 정합성 측정**: 데이터 형식, 크기, 라벨링 오류 등을 점검하는 것은 **일관성(Consistency)** 특성인 **`Con-ML-2` (라벨 일관성)**, **`Con-ML-3` (포맷 일관성)** 등을 평가하는 것과 같습니다.  
* **클래스 균형 측정**: 클래스별 데이터 개수를 확인하는 것은 **균형(Balance)** 특성인 **`Bal-ML-3` (범주 간 이미지 균형)**,  **`Bal-ML-8` (라벨 분포 균형)** 의 불균형 문제를 식별하는 핵심 활동입니다.  
* **통계 측정**: 데이터의 기본적인 분포와 속성을 파악하는 것은 데이터가 실제 값을 얼마나 잘 나타내는지 평가하는 **정확성(Accuracy)** 과 관련됩니다.

#### **2\. Level II/III (고급 품질) 진단과 추가 특성의 연관성**

Level II/III 진단은 페블러스의 핵심 기술인 ** 데이터렌즈(DataLens)** 를 활용하여 AI 학습 데이터를 임베딩 공간의 특징 벡터로 변환하고, 이를 기반으로 데이터의 기하학적 및 분포적 속성을 분석하는 고급 단계입니다. 이 방법론은 ISO 표준이 AI/ML을 위해 특별히 정의한 **'추가 데이터 품질 특성'** 그룹, 특히 데이터셋의 ** 충실도(Fidelity)** 를 평가하는 데 최적화되어 있습니다.

* **밀도(Density) 측정:** 데이터렌즈를 통해 임베딩 공간에서 데이터 포인트들의 밀집도를 정량화하면 **유사/중복 데이터**를 식별할 수 있습니다. 밀도가 비정상적으로 높은 영역은 중복 데이터일 가능성이 크며, 이는 ISO 표준의 **`Sim-ML-1` (샘플 유사성)** 및 **`Con-ML-1` (데이터 레코드 일관성)** 문제를 직접적으로 진단합니다. 이에 대한 실질적인 처방은 불필요한 데이터를 전략적으로 제거하는 **'데이터 다이어트(Data Diet)'** 입니다. 이는 나아가 GPU 사용량 및 저장 공간을 최적화하여 **효율성(Efficiency)** 특성, 특히 **`Eff-ML-2` (데이터 처리 효율성)** 를 직접적으로 개선하는 비즈니스 효과로 이어집니다.  
* **매니폴드 형상(Manifold Shape) 분석:** 데이터렌즈로 시각화된 매니폴드 형상은 데이터셋의 **다양성(`Div-ML`)** 과 **대표성(`Rep-ML-1`)** 을 판단하는 핵심 근거입니다. 특히, 매니폴드 내에 데이터가 희소하거나 비어있는 **저밀도 영역(gap)** 은 엣지 케이스(edge case)의 부족을 의미하며, 이는 **`Div-ML-3` (범주 크기 다양성)** 또는 **`Bal-ML-8` (라벨 분포 균형)** 문제로 진단될 수 있습니다. 이러한 데이터 공백에 대한 처방은 바로 부족한 데이터를 표적 생성하는 **'데이터 벌크업(Data Bulk-up)'** 으로, 이를 통해 데이터셋의 다양성과 균형을 보강합니다.  
* **내재적 차원(Intrinsic Dimension) 산출:** Level III 진단에서 맞춤형 렌즈를 사용하여 데이터의 고유한 특성을 반영하는 최소 차원(내재적 차원)을 산출하는 것은 데이터셋의 압축 가능성과 정보의 복잡도를 평가하는 과정입니다. 이는 PCA(주성분 분석)를 사용하여 데이터셋의 차원 축소 가능성을 측정하는 **`Sim-ML-3` (샘플 독립성)** 의 개념과 유사하게 연결되어, 데이터의 근본적인 복잡도를 평가하는 고급 측정 방법론으로 볼 수 있습니다.

### **5.3. 결론적 통찰**

ISO/IEC 5259-2 표준은 AI 데이터 품질을 평가하고 관리하기 위한 필수적인 **'건축 설계 도면'** 과 같은 역할을 합니다. 이 표준은 우리가 무엇을 측정하고 어떤 목표를 지향해야 하는지에 대한 명확한 청사진을 제공합니다. 반면, 페블러스의 데이터렌즈와 같은 고급 진단 기술은 그 설계 도면의 요구사항을 실제 데이터에서 정밀하게 측정하고, 건물의 숨겨진 결함을 파악하기 위해 **벽 속을 투시하고 구조적 스트레스를 측정하는 특수 초음파 장비**라고 비유할 수 있습니다.

결론적으로, 국제 표준이 제공하는 체계적인 프레임워크와 실제 데이터의 보이지 않는 구조적 결함까지 파헤치는 혁신적인 기술이 결합될 때, 비로소 AI 데이터 품질 관리는 추상적인 개념을 넘어 실질적이고 고도화된 수준으로 발전할 수 있습니다. 이 두 가지 요소의 시너지는 신뢰할 수 있고 공정하며 효율적인 AI 시스템을 구축하는 데 있어 가장 중요한 원동력이 될 것입니다.

---
## 참고 문헌 (References)
1. ISO/IEC 5259-1:2024. 인공지능 — 분석 및 기계 학습(ML)을 위한 데이터 품질 - 제1부: 개요, 용어 및 예시 (Artificial intelligence — Data quality for analytics and machine learning (ML) — Part 1: Overview, terminology, and examples). (ISO/IEC 5259 시리즈의 기초를 제공)
2. ISO/IEC 5259-2:2024. Artificial intelligence — Data quality for analytics and machine learning (ML) — Part 2: Data quality measures. (분석 및 ML을 위한 데이터 품질 모델, 측정 기준 및 보고 지침 명시)
3. ISO/IEC 25012:2008. 소프트웨어 공학 — 소프트웨어 제품 품질 요구사항 및 평가(SQuaRE) — 데이터 품질 모델 (Software engineering - Software product Quality Requirements and Evaluation (SQuaRE) - Data quality model). (ISO/IEC 5259-2의 데이터 품질 특성 기반 표준)
4. ISO/IEC 25024:2015. 시스템 및 소프트웨어 엔지니어링 - 시스템 및 소프트웨어 품질 요구사항 및 평가(SQuaRE) - 데이터 품질 측정 (Systems and software engineering - Systems and software Quality Requirements and Evaluation (SQuaRE) - Measurement of data quality). (ISO/IEC 5259-2의 측정 방법론 기반 표준)
5. 페블러스 (Pebblous) 공식 웹사이트. AI-Ready Data Solutions 및 기업 정보. URL: pebblous.ai
6. 페블러스 데이터 클리닉 (Pebblous Data Clinic) 정보. AI 학습데이터의 품질 진단 및 개선 올인원 솔루션. URL: pebblous.ai (Data Clinic 섹션 포함)
---
![Pebblous_Brandmark_Orange quarter](assets/Pebblous_Brandmark_Orange%20quarter.png)
