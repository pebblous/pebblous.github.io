---
title: "시험방법 지침서 ISO/IEC 25024:2015(E)"
label: "ISO/IEC 25024 시험방법 지침서"
password: "pblsWiki2026!"
created: 2019-07-01
updated: 2026-04-19
---

# 시험방법 지침서

## ISO/IEC 25024:2015(E)

**Systems and software engineering - Systems and software Quality Requirements and Evaluation (SQuaRE) - Measurement of data quality**

| 항목 | 내용 |
|------|------|
| 문서번호(개정번호) | Kdata-TI-01(00) |
| 제정일자 | 2019.07.01. |
| 페이지수 | 177 |

| 구분 | 작성자 | 검토자 (기술책임자) | 검토자 (품질책임자) | 승인자 (경영책임자) |
|------|------|------|------|------|
| 직위 | 주임 | 팀장 | 연구위원 | 실장 |
| 성명 | 김영국 | 임성준 | 이창한 | 박재현 |
| 일자 | 2019.07.01. | 2019.07.01. | 2019.07.01. | 2019.07.01. |

**한국데이터산업진흥원 (Kdata)**

---

## 머리말

시험방법 지침서 ISO/IEC 25024:2015(E)는 데이터를 ISO/IEC 25024에 근거하여 시험하기 위한 지침서로 작성되었다. 신규 실무자도 이 문서의 지침에 따라 ISO/IEC 25024:2015(E) 기반의 시험이 가능하도록 ISO/IEC 25024:2015(E)의 내용을 해석하여 실무에 맞게 적용하였다. 본 문서는 ISO/IEC 25024:2015(E) 원문 내용을 본문에 삽입하여 국문의 해석만으로 이해가 어려운 경우 원문을 참고할 수 있도록 하였다.

### SQuaRE series

시스템과 소프트웨어 제품의 품질 표준 체계인 SQuaRE (Systems and software Quality Requirements and Evaluation)는 아래와 같이 6개의 부문으로 구성되어 있다.

- ISO/IEC 2500n - *Quality Management Division*
- ISO/IEC 2501n - *Quality Model Division*
- ISO/IEC 2502n - *Quality Measurement Division*
- ISO/IEC 2503n - *Quality Requirements Division*
- ISO/IEC 2504n - *Quality Evaluation Division*
- ISO/IEC 25050 to ISO/IEC 25099 - *SQuaRE Extension*

ISO/IEC 25024는 데이터 품질 모델을 다루는 ISO/IEC 25012를 참조하여 데이터 품질을 측정하고 평가하는 데 사용할 수 있는 일련의 데이터 품질 측정지표 (Data quality measures)를 제공한다.

### ISO/IEC 2502n series

품질 측정 부문 (Quality Measurement Division)인 ISO/IEC 2502n은 아래와 같이 구성되어 있다.

- **ISO/IEC 25020** - Measurement reference model and guide: ISO/IEC 2501n에 정의된 품질 특성을 측정하기 위한 기준 모델과 가이드를 제공한다.
- **ISO/IEC 25021** - Quality measure elements: 품질 측정 요소를 지정하기 위한 형식과 소프트웨어 품질 측정을 구성하는데 사용할 수 있는 품질 측정 요소의 몇 가지 예시를 제공한다.
- **ISO/IEC 25022** - Measurement of quality in use: 연관된 측정 방법을 포함하는 측정지표와 사용 품질 모델의 품질 특성에 대한 품질 측정 요소를 제공한다.
- **ISO/IEC 25023** - Measurement of system and software product quality: 연관된 측정 방법을 포함하는 측정지표와 제품 품질 모델의 품질 특성에 대한 품질 측정 요소를 제공한다.
- **ISO/IEC 25024** - Measurement of data quality: 연관된 측정 방법을 포함하는 측정지표와 데이터 품질 모델의 품질 특성에 대한 품질 측정 요소를 제공한다.

---

## 1. 적용범위

이 지침서는 ISO/IEC 25012에 정의된 특성 측면에서 데이터 품질을 정량적으로 측정하기 위한 데이터 품질 측정 방법을 정의한다.

이 지침서는 다음을 포함한다.

- 각 특성에 대한 기본적인 일련의 데이터 품질 측정지표 (a basic set of data quality measures for each characteristic)
- 데이터 수명 주기 동안 품질 측정지표가 적용되는 기본적인 일련의 대상 개체 (a basic set of target entities to which the quality measures are applied during the data-life-cycle)
- 데이터 품질 측정지표를 적용하는 방법에 대한 설명 (an explanation of how to apply data quality measures)
- 데이터 품질 요구사항과 평가에 대한 자체 평가지표를 정의하는 조직을 위한 지침 (a guidance for organizations defining their own measures for data quality requirements and evaluation)

ISO/IEC 25024 국제 표준은 모든 종류의 응용 프로그램에 사용되는 컴퓨터 시스템 내에서 구조화된 형식으로 보존된 모든 종류의 데이터에 적용될 수 있다.

ISO/IEC 25024 국제 표준은 책임을 추구하면서 데이터 품질 측정지표를 만들어 내고/내거나 사용해야 하는 사람에게 이용되도록 작성되었다:

- Acquirer, Evaluator, Developer, Maintainer, Supplier, User, Quality manager, Owner

이 국제 표준은 대상 개체에 대한 광범위한 데이터를 고려하며 아래와 같은 여러 유형의 정보 시스템에 적용될 수 있다:

- legacy information system
- data warehouse
- distributed information system
- cooperative information system
- world wide web

아래는 본 적용 범위에 포함되지 않는다:

- knowledge representation
- data mining techniques
- statistical significance for random sample

---

## 2. 적합요건

데이터 품질의 요구사항, 구현 또는 평가에 대한 모든 측정 프로세스는 ISO/IEC 25024 국제 표준을 준수해야 한다.

a) ISO/IEC 25012에 정의된 대로 명시되거나 평가되는 데이터 품질 특성 선택
b) 측정되어야 하는 데이터 품질 특성에 대한 대상 개체 선택
c) 8절에서 대상 개체와 관련된 각 데이터 품질 특성으로 정의된 적절한 데이터 품질 측정지표 선택
d) 데이터 품질 측정지표를 수정할 때 변경 사항에 대한 근거 제공
e) 본 국제 표준에 포함되지 않았지만 추가로 사용된 품질 측정지표 또는 품질 측정 요소 목록 작성

---

## 3. 인용표준

아래의 문서들은 전체적으로 또는 부분적으로 이 문서에서 표준적으로 참조되며 본 문서의 적용에 필수적인 내용입니다.

- ISO/IEC 25000, *Systems and software engineering - Systems and software Quality Requirements and Evaluation (SQuaRE) - Guide to SQuaRE*
- ISO/IEC 25012:2008, *Software engineering - Software product Quality Requirements and Evaluation (SQuaRE) - Data quality model*
- ISO/IEC 25021, *Systems and software engineering - Systems and software Quality Requirements and Evaluation (SQuaRE) - Quality measure elements*

---

## 4. 용어와 정의

이 문서의 목적에 따라 ISO/IEC 25000, ISO/IEC 25012, ISO/IEC 25021 및 다음에 주어진 용어와 정의가 적용된다.

### 4.1 architecture (아키텍쳐)

데이터와 관련된 특정 시스템의 관점으로 표현된 작업 제품인 아키텍처의 특정 뷰를 의미합니다. 데이터 아키텍처에는 컨텍스트 스키마 (4.4), 개념적, 논리적, 물리적 데이터 모델, 데이터 사전(4.6) 및 문서와 같은 아키텍처 요소가 포함됩니다.

### 4.2 attribute (속성)

데이터의 가장 작은 논리적 단위. 그 자체만으로는 중요한 의미를 가지지 못하며 단독으로 존재하기가 어려운 특성을 갖는다. 일반적으로 엔티티에 대한 식별자로서 엔티티에 관한 서술적 정보를 말한다.

### 4.3 computer system (컴퓨터 시스템)

프로그램의 일부와 또는 전체 그 프로그램의 실행에 필요한 데이터들을 위해 공용 기억 장소를 사용하는 기능적 단위.

### 4.4 contextual schema

데이터 모델 (4.10)이 적용되는 사용 컨텍스트의 경계에 대한 공식 설명이다.

### 4.5 data (데이터)

인간 또는 컴퓨터를 비롯한 자동 기기에 의해 행해지는 통신과 해석, 처리로 형식화된 사실과 개념, 명령을 표현한 것.

### 4.6 data dictionary (데이터 사전)

자료에 관한 정보를 모아 두는 저장소. 자료의 이름, 표현 방식, 자료의 의미와 사용 방식, 그리고 다른 자료와의 관계를 저장한다.

### 4.7 data file (데이터 파일)

레코드를 논리 레코드 단위로 처리하는 파일. 보통 작업용 파일과 구별해 자료 파일이라 한다.

### 4.8 data format (데이터 포맷)

시스템이 자료를 입출력하거나 기억할 때의 데이터 크기 또는 구조이다.

### 4.9 data item (데이터 아이템(필드))

데이터베이스의 레코드를 구성하는 데이터의 단위. 응용 프로그램이 처리하기 위한 데이터가 들어 있는 영역 중에서, 그 자신이 뜻을 갖는 데이터 영역이다. 컬럼 또는 필드라고도 한다.

### 4.10 data model (데이터 모델)

데이터 모델은 데이터, 데이터의 관계, 데이터의 의미 및 일관성, 제약조건 등을 기술하기 위한 개념적 도구들의 모임이다.

**데이터모델의 구성요소:**

- **개체(Entity)**: 데이터베이스에 표현하려는 것으로 사람이 생각하는 개념이나 정보 단위 같은 현실 세계의 대상체이다.
- **속성(Attribute)**: 데이터의 가장 작은 논리적 단위로서 개체를 구성하는 항목이다.
- **관계(Relation)**: 개체 간의 관계 또는 속성 간의 관계이다.
  - 일대일: 개체 집합 A의 각 원소가 개체 집합 B의 원소 한개와 대응하는 관계
  - 일대다: 개체 집합 A의 각 원소는 개체 집합 B의 원소 여러 개와 대응하고 있지만, 개체 집합 B의 각 원소는 개체 집합 A의 원소 한 개와 대응하는 관계
  - 다대다: 개체 집합 A의 각 원소는 개체 집합 B의 원소 여러개와 대응하고 개체 집합 B의 각 원소도 개체 집합 A의 원소 여러개와 대응하는 관계

**데이터 모델에 표시할 요소:**
- 구조(Structure): 논리적으로 표현된 개체 타입들 간의 관계로서 데이터 구조 및 정적 성질을 표현한다.
- 연산(Operation): 데이터베이스에 저장된 실제 데이터를 처리하는 작업에 대한 명세로서 데이터베이스를 조작하는 기본도구이다.
- 제약조건(Constraint): 데이터베이스에 저장될 수 있는 실제 데이터의 논리적인 제약 조건이다.

### 4.11 data quality

특정 조건에서 사용될 때 명시되고 암시된 요구사항을 데이터의 특성이 충족시키는 정도를 말한다.

### 4.12 data quality characteristic (데이이터 품질 특성)

데이터 품질에 영향을 미치는 데이터 품질 속성 카테고리이다.

### 4.13 data quality measure (데이터 품질 측정 항목)

데이터 품질 특성 (4.12)의 측정 결과 (4.27)로 값이 있는 항목이다.

### 4.14 data quality model (데이터 품질 모델)

데이터 품질 요구사항을 지정하고 데이터 품질을 평가하기 위한 프레임워크를 제공하는 정의된 특성 세트를 말한다.

### 4.15 data record (데이터 레코드)

데이터 항목의 집합을 말하여 데이터베이스에서 행에 해당하는 데이터 셋을 말한다.

### 4.16 data type (데이터 타입)

데이터의 특성에 대한 값이다. 예를 들어 문자열, 텍스트, 이미지, 숫자, 사운드 등이 있다.

### 4.17 data value (데이터 값)

데이터 아이템(필드)의 값을 말한다. 실제 데이터를 의미한다.

### 4.18 database management system

organized collection of structured data

### 4.19 element (엘리먼트, 요소)

architecture(아키텍쳐) (4.1)의 작은 부분

### 4.20 form (폼)

데이터를 수집하는 모듈 또는 방식이다. 종이나 숫자일 수도 있다.

### 4.21 information (정보)

데이터가 현실 세계로부터 단순한 관찰이나 측정을 통해서 수집한 사실이나 값을 의미하는 데 반하여, 어떤 상황에 관한 의사 결정을 할 수 있게 하는 지식으로서 데이터의 유효한 해석이나 데이터 상호 간의 관계. 따라서 정보는 데이터를 처리, 가공한 결과라고 할 수 있다.

### 4.22 information item (정보 아이템)

인적 사용을 위해 생산, 저장 및 인도되는 별도로 식별 가능한 정보이다.

### 4.23 information item content (정보 콘텐츠)

요구사항 또는 필요성을 충족시키기 위해 시스템, 제품 또는 서비스와 관련된 정보 항목에 포함된 정보이다.

### 4.24 information system (정보 시스템)

하나 이상의 컴퓨터 시스템 및 통신 시스템과 함께 정보를 제공하는 시스템으로 정보의 수집/기록/처리/저장/검색, 그리고 보여 주기 위해 고안되고 제작되며, 조작되고 유지되는 장비/사람/절차의 총체적인 집합이다.

### 4.25 master data (마스터 데이터)

기업의 비즈니스 프로세스상에서 업무 관계자 사이에서 동일한 의미로 약속된 주요 정보이자, 주로 특정 인물이나 조직, 장소, 유형 및 무형의 사물을 표현하는 데이터로 비즈니스의 기본적인 요소로 구성된다.

### 4.26 measure (측정 치)

측정에 의해 개체의 속성에 할당된 값으로서 수치 또는 범주(측정의 결과 할당되는 값의 변수)

### 4.27 measurement (평가 항목)

개체의 속성에 등급 값(수치나 범주일 수 있음)을 배정하기 위한 동작으로 평가 항목에서 사용

### 4.28 measurement function (측정 함수)

알고리즘 또는 2 개 이상의 품질 측정 요소를 결합하도록 수행 된 계산식이다.

### 4.29 metadata (메타데이터)

데이터에 대한 구조화된 데이터, 데이터를 설명해 주는 데이터이다.

### 4.30 presentation device (출력 장치)

데이터를 표시하는 데 사용되는 장치

### 4.31 quality measure (품질 측정)

두 개 이상의 측정 요소 값의 측정 기능으로 정의된 측정 값이다.

### 4.32 quality measure element (품질 측정 요소)

측정 값 (4.26)과 그 값을 정량화하기 위한 측정 방법이다. (임의로 수학 함수에 의한 변환 포함).

### 4.33 quality model (품질 모델)

품질 요구사항을 명세하고 품질을 평가하는 기준을 제공하는 특성 집합과 그들 간의 상호관계이다.

### 4.34 relational database management system (관계형 데이터베이스 관리 시스템, RDBMS)

행과 열로 된 2차원의 표로 데이터를 표현하는 데이터베이스 관리 시스템.

### 4.35 semantics (의미론적)

문장을 문자(일반적으로 기호)의 배열로 보지 않고 문장이 포함하는 내용이나 의미를 문제로 삼는 것이다.

### 4.36 target entity (대상 엔티티)

정보가 유지되고 측정되는 대상으로 정보 제품 및 작업 제품이다. 예를 들어, 아키텍처, 컨텍스트 스키마, 개념 및 논리적 및 물리적 데이터 모델, 데이터 사전, 문서, 데이터 파일, 데이터베이스 관리, 관계형 데이터베이스 관리 시스템, 양식 및 프리젠테이션 장치 등이다.

### 4.37 tuple (투플)

관계 데이터베이스에서 관계(표) 내의 속성과 관계되는 값의 집합.

### 4.38 vocabulary (어휘)

속성들이 연관되어있는 양상의 집합이다.

---

## 5. 약어

ISO/IEC 25024 국제 표준에서는 다음과 같은 약어가 사용된다.

- **QM** : Quality Measure
- **QME** : Quality Measure Element
- **DLC** : Data-Life-Cycle
- **DBMS** : Database Management System
- **RDBMS** : Relational Database Management System

---

## 6. 데이터 품질 측정 항목의 사용

### 6.1 데이터 품질 측정 개념

시스템/소프트웨어 품질에 대한 명시적이고 암묵적인 요구사항은 시스템/소프트웨어 제품 품질, 사용 품질 및 데이터 품질 특성을 분류하는 품질 모델에 의해 SQuaRE 시리즈 표준으로 표현된다. 데이터 품질 특성의 개념은 데이터 품질을 15가지 특성으로 분류하는 ISO/IEC 25012에 정의되어 있다.

측정 기능을 적용하여 데이터 품질 특성을 정량화 할 수 있다. 측정 기능은 QME를 결합하는 데 사용되는 알고리즘이다. 측정 기능을 적용한 결과 QM을 얻습니다. 이러한 방식으로, QM은 데이터 품질 특성의 정량화가 됩니다.

ISO/IEC 25012에 따르면 데이터 품질은 "데이터 고유(Inherent) 관점" 및 "시스템 종속(System-dependent) 관점"에서 측정할 수 있다.

### 6.2 데이터 품질 측정 방법

ISO/IEC 25024 국제 표준에 기술된 QM은 데이터에 관한 것이고 모든 DLC 단계 및 다른 프로세스에서 사용될 수 있다.

대상 엔티티는 DLC의 작업 결과이며 대상 엔티티는 속성에 의해 정확하게 정의된다.

데이터 디자인 단계와 관련된 대상 엔티티: architecture, contextual schema, data models (conceptual, logical, physical), data dictionary, document

이러한 대상 엔티티에 대해 지정된 속성: attribute, element, information, metadata, vocabulary

DLC 데이터 수집, 외부 데이터 수집, 데이터 통합, 데이터 처리, 프레젠테이션, 기타 사용, 데이터 저장소, 삭제 중 다른 단계와 관련된 대상 엔티티: data file, DBMS, RDBMS, form, presentation device

이러한 대상 엔티티에 대해 지정된 속성: data format, data item, data value, information item, information item content, data record

---

## 7. 데이터에 대한 QM 문서화에 사용되는 형식

각 데이터 QM에 대해 다음 정보가 제공된다.

a) **ID**: identification code (or identifier) of a data QM; each ID consists of the following three parts:
   - abbreviated alphabetic code representing the quality characteristics
   - I ("Inherent") or D ("System dependent") expressing the point of view of data quality characteristics
   - serial number of sequential order within data quality characteristics and point of view

b) **Name**: QM name related to data

c) **Description**: the information provided by the data QM and (when useful) the purpose of the measure

d) **Measurement function**: formula showing how the QMEs are combined to produce the QM

e) **DLC, Target entities, Properties**: DLC includes stages of the DLC where the data QMEs are applicable, target entities and properties of target entities

f) **Note**: additional information such as an acceptable range of values, reference to other standards, explanations or interpretation or criteria, measurement method used to obtain the measures

---

## 8. 데이터 품질 측정 항목

### 8.1 일반 사항

ISO/IEC 25024 국제 표준은 DLC에서 식별된 대상 엔티티에 연결된 QME에 적용되는 측정 기능에 의해 생성된 기본 데이터 QM 세트를 제공한다.

일반적으로 측정 기능은 0.0에서 1.0 (또는 그 이상) 사이의 값을 표준화한다. 1, 0 (또는 상위 값의 부족의 경우보다 큰 값)으로 값을 증가시키면 더 나은 품질에 대한 요구사항이 점점 더 충족된다를 의미한다.

QME는 다른 한정자를 사용하여 하나 이상의 QM에서 고려될 수 있다. 여러 개의 엔티티에서 동일한 QM을 고려할 수 있다.

**붙임(Annexes) 요약:**
- 붙임1: ISO/IEC 25024:2015 (informative) QMEs used to define data QMs
- 붙임2: ISO/IEC 25024:2015 (informative) QMEs Target entities and QMs
- 붙임3: ISO/IEC 25024:2015 (informative) QMEs references
- 붙임4: ISO/IEC 25024:2015 (informative) QMs in alphabetic order
- 붙임5: ISO/IEC 25024:2015 (informative) QMs identifiers for data quality characteristics and target entities

---

### 8.2 QMs for accuracy (정확성)

정확도 측정은 데이터가 특정 컨텍스트에서 개념 또는 이벤트의 의도된 속성의 실제 값을 정확하게 나타내는 데이터 속성의 정도를 제공한다. 정확성은 데이터 파일 고유(Inherent) 관점에서만 측정할 수 있다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| ACC-I-1 | Syntactic data accuracy (구문 데이터 정확성) | 도메인에 정의된 값 집합에 대한 데이터 값의 근접 비율 | HR |
| ACC-I-2 | Semantic data accuracy (의미 데이터 정확성) | 특정 컨텍스트에서 의미론적 측정에서 데이터 값의 정확도 비율 | HR |
| ACC-I-3 | Data accuracy assurance (데이터 정확성 보증) | 정확한 데이터에 대한 측정 범위의 비율 | R |
| ACC-I-4 | Risk of data set inaccuracy (데이터 셋 부정확성의 위험) | 데이터 셋의 데이터 값 중에서 부정확해질 위험을 나타내는 이상치(outlier)의 수 | R |
| ACC-I-5 | Data model accuracy (데이터 모델 정확성) | 데이터 모델은 요구되는 정확도로 시스템을 설명 | R |
| ACC-I-6 | Metadata accuracy (메타데이터 정확성) | 메타데이터가 데이터를 필요한 정확도로 기술하고 있는가? | R |
| ACC-I-7 | Data accuracy range (데이터 범위 정확성) | 요구되는 범위 안에 데이터 값이 포함되는가? | HR |

---

### 8.3 QMs for completeness (완전성)

완전성 측정은 대상 엔티티와 관련된 데이터가 특정 사용 컨텍스트에서 대상 엔티티의 모든 관련 속성에 대한 예상값을 갖는 정도를 제공한다. 완전성은 데이터 파일 고유한(Inherent) 관점에서만 측정할 수 있다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| Com-I-1 | Record completeness (레코드 완전성) | 데이터 파일 내에서 레코드의 데이터 아이템(필드)에 대한 완전성 | R |
| Com-I-2 | Attribute completeness (속성 완전성) | 데이터 파일 내 데이터 아이템(필드)에 대한 완전성 | R |
| Com-I-3 | Data file completeness (데이터 파일 완전성) | 데이터 파일 내에서 기대되는 레코드의 완전성 | HR |
| Com-I-4 | Data values completeness (데이터 값 완전성) | 데이터 파일의 데이터 아이템(필드) 값의 완전성 | R |
| Com-I-5 | Empty records in a data file (데이터 파일의 빈 레코드) | 데이터 파일 내의 레코드의 거짓 완전성 | R |
| Com-I-6 | Conceptual data model completeness (개념적 데이터 모델 완전성) | 개념 데이터 모델과 상황별 스키마에 설명된 엔티티의 완전성 | R |
| Com-I-7 | Conceptual data model attributes completeness (개념적 데이터 모델 속성 완전성) | 개념적 데이터 모델을 위해 정의된 속성의 완전성 | R |
| Com-I-8 | Metadata completeness (메타데이터 완전성) | 메타데이터에 대한 속성의 완전성 | REF |

---

### 8.4 QMs for consistency (일관성)

일관성 측정은 데이터가 모순이 없고 특정 사용 환경에서 다른 데이터와 일관된 속성을 갖는 정도를 제공한다. 일관성은 데이터 파일 고유한(Inherent) 관점에서만 측정할 수 있다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| Con-I-1 | Referential integrity (참조 무결성) | 테이블의 한 속성의 각 값은 다른 테이블에 같은 속성의 같은 값으로 존재 | R |
| Con-I-2 | Data format consistency (데이터 포맷 일관성) | 같은 데이터 아이템(필드)의 데이터 포맷의 일관성 | R |
| Con-I-3 | Risk of data inconsistency (데이터 불일치 위험) | 데이터 값의 중복으로 인한 불일치 발생 | R |
| Con-I-4 | Architecture consistency (아키텍처 일관성) | 아키텍처 요소(element)가 참조 아키텍처 요소(element)와 일치하는 정도 | REF |
| Con-I-5 | Data values consistency coverage (데이터 값 일관성 범위) | 데이터 값의 일관된 측정 범위 | REF |
| Con-I-6 | Semantic consistency (의미론적인 일관성) | 의미론적인 규칙이 존중받는 정도 | HR |

---

### 8.5 QMs for credibility (신뢰성)

신뢰성 측정은 데이터가 특정 상황에서 사용자에 의해 신뢰할 만한 것으로 간주되는 속성을 갖는 정도를 제공한다. 신뢰성은 데이터 파일 고유(Inherent) 관점에서만 측정할 수 있다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| Cre-I-1 | Values credibility (데이터 값 신뢰성) | 정보 아이템이 사실적, 현실적이며 그리고 신뢰할 수 있는 것으로 간주되는 정도 | R |
| Cre-I-2 | Source credibility (데이터 출처 신뢰성) | 자격을 갖춘 조직이 제공하는 데이터 값에 대한 정도 | R |
| Cre-I-3 | Data dictionary credibility (데이터 사전 신뢰성) | 데이터 사전이 신뢰할 수 있는 정보를 제공하는 정도 | REF |
| Cre-I-4 | Data model credibility (데이터 모델 신뢰성) | 데이터 모델이 신뢰할 수 있는 정보를 제공하는 정도 | R |

---

### 8.6 QMs for currentness (현재성)

현재도 측정은 데이터의 특정 사용 환경에서 적절한 시기의 속성을 가지는 정도를 제공한다. 현재성은 데이터 파일 고유한(Inherent) 관점에서만 측정할 수 있다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| Cur-I-1 | Update frequency (업데이트 빈도) | 데이터 아이템(필드)이 필요한 빈도로 업데이트되는 정도 | HR |
| Cur-I-2 | Timeliness of update (업데이트 적시성) | 데이터 아이템(필드)이 적시에 업데이트되는 정도 | H |
| Cur-I-3 | Update item requisition (아이템 요청 업데이트) | 명시적 업데이트 데이터 아이템(필드)의 빈도 요청이 존재하는 정도 | HR |

---

### 8.7 QMs for accessibility (접근성)

접근성은 장애로 인해 특정 지원 기술이나 특수 구성이 필요한 사람들이 특정 사용 환경에서 데이터에 액세스할 수 있는 정도를 측정한다. 접근성은 데이터 파일 고유한(Inherent) 관점 및 시스템 종속적인(System Dependent) 관점 모두에서 측정된다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| Acs-I-1 | User accessibility (사용자 접근성) | 의도된 사용자가 데이터 값에 접근할 수 있는 정도 | R |
| Acs-D-1 | Device accessibility (장치 접근성) | 특정 장치에 의해 접근이 허용되는 정도 (음성 또는 소리로 텍스트 표현) | R |
| Acs-D-2 | Data format accessibility (데이터 포맷 접근성) | 특정 포맷으로 인해 의도된 사용자가 데이터나 정보에 접근할 수 없는 정도 | R |

---

### 8.8 QMs for compliance (준수성)

준수성은 데이터가 표준을 준수하는 정도를 측정하며, 표준의 준수는 특정 컨텍스트에서 데이터 품질과 관련된 규칙 또는 규정 및 이와 유사한 규칙을 준수하는 것을 포함한다. 준수성은 데이터 파일 고유한(Inherent) 관점 및 시스템 종속적인(System Dependent) 관점 모두에서 측정된다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| Cmp-I-1 | Regulatory compliance of value and/or format (값/포맷 규정 준수성) | 데이터 값/포맷이 특정 표준, 관례 또는 규정을 준수하는 정도 | REF |
| Cmp-D-1 | Regulatory compliance due to technology (기술로 인한 규정 준수) | 데이터 아이템(필드)이 특정 표준, 협약, 규정을 준수하는 정도 | R |

---

### 8.9 QMs for confidentiality (기밀성)

기밀성 측정은 권한 있는 사용자가 특정 컨텍스트에서 액세스하고 해석할 수 있도록 하는 특성을 가진 데이터의 정도를 나타낸다. 기밀성은 데이터 파일 고유한(Inherent) 관점 및 시스템 종속적인(System Dependent) 관점 모두에서 측정된다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| Cnf-I-1 | Encryption usage (암호화 사용) | 데이터 값이 암호화 요구사항을 충족시키는 정도 | R |
| Cnf-D-1 | Non vulnerability (비 취약점) | 기밀로 정의된 데이터 항목에 권한이 있는 사용자만 접근할 수 있는 정도 | R |

---

### 8.10 QMs for efficiency (효율성)

효율성 측정은 데이터가 처리될 수 있는 속성을 갖는 정도를 제공하고 특정 사용 환경에서 적절한 양과 유형의 자원을 사용하여 예상되는 수준의 성능을 제공한다. 효율성은 데이터 파일 고유한(Inherent) 관점 및 시스템 종속적인(System Dependent) 관점 모두에서 측정된다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| Eff-I-1 | Efficient data item format (효율적인 데이터 아이템(필드) 포맷) | 사용자가 효율적으로 작업을 수행할 수 있는 데이터 포맷 사용 비율 | REF |
| Eff-I-2 | Usable efficiency (사용 효율성) | 의도한 사용자가 쉽게 사용할 수 있는 데이터 값의 비율 | R |
| Eff-D-1 | Data format efficiency (데이터 포맷 효율성) | 데이터 포맷 정의로 인해 불필요한 공간 차지 비율 | R |
| Eff-D-2 | Data processing efficiency (데이터 처리 효율성) | 데이터 아이템(필드) 표현(데이터 포맷)으로 인해 손실된 작업 시간 | HR |
| Eff-D-3 | Risk of wasted space (낭비된 공간의 위험) | 벤치 마크된 평균 공간과 비교하여 낭비되는 공간 | R |
| Eff-D-4 | Space occupied by records duplication (레코드 중복이 차지하는 공간) | 레코드 중복 공간은 중복되어 기록된 공간보다 큼 | REF |
| Eff-D-5 | Time delay of data update (데이터 업데이트 지연 시간) | 시스템 A에서 데이터 항목의 값이 변경되는 시간과 시스템 B에서 동일한 데이터 항목의 값이 변경되는 시간 사이의 지연(차이) | HR |

---

### 8.11 QMs for precision (정밀성)

정밀 측정은 데이터가 정확한 속성을 가지고 있거나 특정 사용 환경에서 차별을 제공하는 정도를 나타낸다. 정밀도는 데이터 파일 고유한(Inherent) 관점 및 시스템 종속적인(System Dependent) 관점에서 측정된다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| Pre-I-1 | Precision of data values (데이터 값 정밀성) | 명세서에 따른 데이터 값 정밀성 | H |
| Pre-D-1 | Precision of data format (데이터 포맷 정밀성) | 명세서에 따른 데이터 포맷 정밀성 | HR |

---

### 8.12 QMs for traceability (추적성)

이력 추적성 측정은 데이터에 대한 액세스 추적 및 특정 사용 환경에서의 데이터 변경에 대한 감사 추적을 제공하는 특성을 가진 데이터의 정도를 제공한다. 이력 추적성은 데이터 파일 고유한(Inherent) 관점 및 시스템 종속적인(System Dependent) 관점 모두에서 측정된다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| Tra-I-1 | Traceability of data values (데이터 값의 추적성) | 데이터 값에 대한 사용자 접근 정보가 추적된 정도 | REF |
| Tra-D-1 | Users access traceability (사용자 접근 추적성) | 시스템 기능을 사용하여 데이터에 대한 사용자 접근 정보를 유지하고, 데이터 읽기/쓰기 권한을 유지할 가능성 | HR |
| Tra-D-2 | Data values traceability (데이터 값 추적성) | 시스템 기능을 사용하여 데이터 아이템(필드) 값의 내역을 추적할 수 있는 가능성 | R |

---

### 8.13 QMs for understandability (이해성)

이해성 측정은 사용자가 읽고 해석할 수 있는 특성을 갖는 데이터의 정도를 제공하며 특정 사용 환경에서 적절한 언어, 기호 및 단위로 표현된다. 이해성은 데이터 파일 고유한(Inherent) 관점 및 시스템 종속적인(System Dependent) 관점 모두에서 측정된다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| Und-I-1 | Symbols understandability (심볼 이해성) | 이해 가능한 기호(Symbol)가 사용되는 정도 | R |
| Und-I-2 | Semantic understandability (의미적 이해성) | 데이터 사전에 정의된 용어(Terms)로 사용되는 공통 인식 어휘 비율 | R |
| Und-I-3 | Master Data understandability (마스터 데이터 이해성) | 메타데이터로 인한 마스터 데이터의 이해성 | R |
| Und-I-4 | Data values understandability (데이터 값 이해성) | 의도된 사용자가 특정 사용 환경에서 이해할 수 있는 데이터 값 | R |
| Und-D-1 | Data model understandability (데이터 모델 이해성) | 데이터 모델이 이해할 수 있는 정보를 제공하는 정도 | HR |
| Und-D-2 | Data representation understandability (데이터 표현 이해성) | 시스템 및 소프트웨어 별로 사용자에게 이해할 수 있는 방식으로 데이터가 표현되는 정도 | R |
| Und-D-3 | Linked master data understandability (연결된 마스터 데이터 이해성) | 이해할 수 있는 메타데이터의 링크로 인해 마스터 데이터의 이해성 | HR |

---

### 8.14 QMs for availability (가용성)

가용성 측정은 데이터가 특정 사용 환경에서인가 된 사용자 및/또는 응용 프로그램에 의해 검색될 수 있는 속성을 갖는 정도를 제공한다. 가용성은 시스템 종속적인(System Dependent) 관점에서만 측정할 수 있다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| Ava-D-1 | Data availability ratio (데이터 가용성 비율) | 필요한 경우 사용할 수 있는 데이터 아이템(필드)의 비율 | HR |
| Ava-D-2 | Probability of data available (사용 가능한 데이터 비율) | 요청된 기간 동안 데이터 아이템(필드) 사용 시 성공적인 요청 확률 | HR |
| Ava-D-3 | Architecture elements availability (아키텍처 엘리먼트 가용성) | 아키텍처 엘리먼트를 사용할 수 있는 정도 | HR |

---

### 8.15 QMs for portability (이식성)

이식성 측정은 특정 환경에서 기존 품질을 유지하면서 한 시스템에서 다른 시스템으로 설치하거나 이동시킬 수 있는 속성을 갖는 데이터의 정도를 제공한다. 이식성은 시스템 종속적인(System Dependent) 관점에서만 측정할 수 있다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| Por-D-1 | Data portability ratio (데이터 이식성 비율) | 포팅/마이그레이션 후 데이터 품질이 저하되지 않는 것 | R |
| Por-D-2 | Prospective data portability (예상 데이터 이식성) | 데이터 아이템(필드)의 이식성이 요구사항에 적합한 정도 | R |
| Por-D-3 | Architecture elements portability (아키텍처 엘리먼트 이식성) | 아키텍처 엘리먼트가 이식가능한 정도 | R |

---

### 8.16 QMs for recoverability (복구성)

복구성 측정은 특정 상황에서 장애 발생 시에도 특정 수준의 작업 및 품질을 유지 및 유지할 수 있는 특성을 가진 데이터의 정도를 제공한다. 복구성은 시스템 종속적인(System Dependent) 관점에서만 측정할 수 있다.

| ID | Name | Description | Level of Use |
|----|------|-------------|-------------|
| Rec-D-1 | Data recoverability ratio (데이터 복구 비율) | 디바이스에서 성공적이고 정확하게 회복되어 데이터가 저장된 정도 | HR |
| Rec-D-2 | Periodical backup (정기적인 백업) | 요구사항에 정의된 대로 데이터가 정기적으로 백업 | HR |
| Rec-D-3 | Architecture recoverability (아키텍처 복구성) | 아키텍처 엘리먼트의 회복 가능한 정도 | R |

---

## 붙임1 ISO/IEC 25024:2015 (informative) QMEs used to define QMs

To each QME, defined in this document, are associated: unique name, target entity, measurement method and a NOTE (see ISO/IEC 25021:2012).

| QME | Name | Target entity | Measurement method |
|-----|------|---------------|-------------------|
| A.1 | Number of accesses | All target entities | The count of attacks |
| A.2 | Number of attributes | Contextual schema, data models, data dictionary | The count of all different attributes that satisfy the condition |
| A.3 | Number of data items | Data file, RDBMS, Document, form, presentation devices | The count of different structures, classes, or formats of data item |
| A.4 | Number of data values | All target entities | The count of data values that satisfy a specified condition |
| A.5 | Number of elements | Architecture, data model, data dictionary | The count of elements of an architecture, data model or one of the parts |
| A.6 | Number of entities | Contextual schema, conceptual model | The count of real-world phenomena, fact or concept represented |
| A.7 | Number of information items | All target entities | The count of information items that satisfy a specified condition |
| A.8 | Number of metadata | Data dictionary | The count of data which describe other data |
| A.9 | Number of records | Data file, DBMS, RDBMS (tuples) | The count of records of the same structure, class or format |
| A.10 | Number of times | All target entities | The count of times that a specific periodic phenomenon or action occurs |
| A.11 | Size | Data file, DBMS, RDBMS | The amount of space used in bytes or multiple of them |
| A.13 | Time | Data file | The calculation of the duration of an event |

---

## 붙임4 ISO/IEC 25024:2015 (informative) QMs in alphabetic order

Level of use: **HR** = "Highly Recommendable" (19 QMs), **R** = "Recommendable" (36 QMs), **REF** = "for Reference" (8 QMs)

| QM names | Identifiers | Level of use |
|----------|------------|-------------|
| Architecture consistency | Con-I-4 | REF |
| Architecture elements availability | Ava-D-3 | HR |
| Architecture elements portability | Por-D-3 | R |
| Architecture recoverability | Rec-D-3 | R |
| Attribute completeness | Com-I-2 | R |
| Conceptual data model attributes completeness | Com-I-7 | R |
| Conceptual data model completeness | Com-I-6 | R |
| Data accuracy assurance | Acc-I-3 | R |
| Data accuracy range | Acc-I-7 | HR |
| Data availability ratio | Ava-D-1 | HR |
| Data dictionary credibility | Cre-I-3 | REF |
| Data file completeness | Com-I-3 | HR |
| Data format accessibility | Acs-D-2 | R |
| Data format consistency | Con-I-2 | R |
| Data format efficiency | Eff-D-1 | R |
| Data model accuracy | Acc-I-5 | R |
| Data model credibility | Cre-I-4 | R |
| Data model understandability | Und-D-1 | HR |
| Data portability ratio | Por-D-1 | R |
| Data processing efficiency | Eff-D-2 | HR |
| Data recoverability ratio | Rec-D-1 | HR |
| Data representation understandability | Und-D-2 | R |
| Data values completeness | Com-I-4 | R |
| Data values consistency coverage | Con-I-5 | REF |
| Data values traceability | Tra-D-2 | R |
| Data values understandability | Und-I-4 | R |
| Device accessibility | Acs-D-1 | R |
| Efficient data item format | Eff-I-1 | REF |
| Empty records in a data file | Com-I-5 | R |
| Encryption usage | Cnf-I-1 | HR |
| Linked master data understandability | Und-D-3 | HR |
| Master data understandability | Und-I-3 | R |
| Metadata accuracy | Acc-I-6 | R |
| Metadata completeness | Com-I-8 | REF |
| Non vulnerability | Cnf-D-1 | R |
| Periodical backup | Rec-D-2 | HR |
| Precision of data format | Pre-D-1 | HR |
| Precision of data values | Pre-I-1 | R |
| Probability of data available | Ava-D-2 | HR |
| Prospective data portability | Por-D-2 | R |
| Record completeness | Com-I-1 | R |
| Referential integrity | Con-I-1 | R |
| Regulatory compliance due to technology | Cmp-D-1 | R |
| Regulatory compliance of value and/or format | Cmp-I-1 | REF |
| Risk of data inconsistency | Con-I-3 | R |
| Risk of data set inaccuracy | Acc-I-4 | R |
| Risk of wasted space | Eff-D-3 | R |
| Semantic consistency | Con-I-6 | HR |
| Semantic data accuracy | Acc-I-2 | HR |
| Semantic understandability | Und-I-2 | R |
| Source credibility | Cre-I-2 | R |
| Space occupied by records duplication | Eff-D-4 | REF |
| Symbols understandability | Und-I-1 | R |
| Syntactic data accuracy | Acc-I-1 | HR |
| Time delay of data update | Eff-D-5 | HR |
| Timeliness of update | Cur-I-2 | H |
| Traceability of data values | Tra-I-1 | REF |
| Update frequency | Cur-I-1 | HR |
| Update item requisition | Cur-I-3 | HR |
| Usable efficiency | Eff-I-2 | R |
| User accessibility | Acs-I-1 | R |
| Users access traceability | Tra-D-1 | HR |

---

## 붙임6 정규 표현식

### 정규 표현식의 용어

정규 표현식에서 사용되는 기호를 Meta 문자라고 표현한다.

| 표현식 | 의미 |
|--------|------|
| ^x | 문자열의 시작을 표현하며 x 문자로 시작됨을 의미한다. |
| x$ | 문자열의 종료를 표현하며 x 문자로 종료됨을 의미한다. |
| .x | 임의의 한 문자의 자리수를 표현하며 문자열이 x 로 끝난다는 것을 의미한다. |
| x+ | 반복을 표현하며 x 문자가 한번 이상 반복됨을 의미한다. |
| x? | 존재여부를 표현하며 x 문자가 존재할 수도, 존재하지 않을 수도 있음을 의미한다. |
| x* | 반복여부를 표현하며 x 문자가 0번 또는 그 이상 반복됨을 의미한다. |
| x\|y | or 를 표현하며 x 또는 y 문자가 존재함을 의미한다. |
| (x) | 그룹을 표현하며 x 를 그룹으로 처리함을 의미한다. |
| x{n} | 반복을 표현하며 x 문자가 n번 반복됨을 의미한다. |
| x{n,} | 반복을 표현하며 x 문자가 n번 이상 반복됨을 의미한다. |
| x{n,m} | 반복을 표현하며 x 문자가 최소 n번 이상 최대 m 번 이하로 반복됨을 의미한다. |
| [xy] | 문자 선택을 표현하며 x 와 y 중에 하나를 의미한다. |
| [^xy] | not 을 표현하며 x 및 y 를 제외한 문자를 의미한다. |
| [x-z] | range를 표현하며 x ~ z 사이의 문자를 의미한다. |
| \\b | word boundary를 표현하며 문자와 공백사이의 문자를 의미한다. |
| \\d | digit 를 표현하며 숫자를 의미한다. |
| \\D | non digit 를 표현하며 숫자가 아닌 것을 의미한다. |
| \\s | space 를 표현하며 공백 문자를 의미한다. |
| \\S | non space를 표현하며 공백 문자가 아닌 것을 의미한다. |
| \\w | word 를 표현하며 알파벳 + 숫자 + _ 중의 한 문자임을 의미한다. |
| \\W | non word를 표현하며 알파벳 + 숫자 + _ 가 아닌 문자를 의미한다. |

### 정규표현식 Flag

| Flag | 의미 |
|------|------|
| g | Global의 표현하며 대상 문자열 내에 모든 패턴을 검색하는 것을 의미한다. |
| i | Ignore case를 표현하며 대상 문자열에 대해서 대/소문자를 식별하지 않는 것을 의미한다. |
| m | Multi line을 표현하며 대상 문자열이 다중 라인의 문자열인 경우에도 검색하는 것을 의미한다. |

### 정규식 예제

- 휴대폰 번호: `^(?:(010-?(?:0[0-9]{4}))|(01[1|6|7|8|9]-?([0-9]{3,4})))-?([0-9]{4})$`
- XXXX-YY 포맷: `[0-9]{4}-[0-9]{2}`
- 이메일: `^[0-9a-zA-Z]([-_\W.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\W.]?[0-9a-zA-Z])*\W.[a-zA-Z]{2,3}$`
