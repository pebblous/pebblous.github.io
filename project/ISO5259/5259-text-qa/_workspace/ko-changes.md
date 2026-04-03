# KO 변경 내역

## 제목 (mainTitle + subtitle)
- Before: `ISO/IEC 5259 표준 기반` / `LLM 텍스트 데이터 품질 평가 가이드`
- After: `LLM의 편향은 모델이 아니라` / `데이터 품질의 문제다`

## pageTitle
- Before: `ISO/IEC 5259 표준 기반 LLM 텍스트 데이터 품질 평가 | Pebblous`
- After: `LLM의 편향은 모델이 아니라 데이터 품질의 문제다 | Pebblous`

## `<title>` 태그
- Before: `ISO/IEC 5259 표준 기반 LLM 텍스트 데이터 품질 평가 | Pebblous`
- After: `LLM의 편향은 모델이 아니라 데이터 품질의 문제다 | Pebblous`

## og:title / twitter:title
- Before: `ISO/IEC 5259 표준 기반 LLM 텍스트 데이터 품질 평가 | Pebblous`
- After: `LLM의 편향은 모델이 아니라 데이터 품질의 문제다 | Pebblous`

## og:description / twitter:description
- Before: `ISO/IEC 5259 표준은 AI/ML 환경에 특화된 데이터 품질 평가의 새로운 패러다임을 제시합니다. 이 표준을 활용하여 LLM 텍스트 데이터의 품질을 평가하는 방법론과 실제 사례를 다룹니다.`
- After: `LLM을 학습시킨 뒤 편향, 환각, 일반화 실패가 반복된다면 원인은 모델이 아닐 수 있습니다. ISO/IEC 5259로 텍스트 데이터를 진단하고 개선하는 실무 가이드.`

## JSON-LD headline / description
- Before headline: `ISO/IEC 5259 표준 기반 LLM 텍스트 데이터 품질 평가`
- After headline: `LLM의 편향은 모델이 아니라 데이터 품질의 문제다`
- Before description: (og:description과 동일)
- After description: (og:description과 동일)

## 요약 섹션 (합쇼체 통일)
- Before: `ISO/IEC 5259 표준은 인공지능(AI) 및 머신러닝(ML) 환경에 특화된 데이터 품질 평가 및 관리의 새로운 패러다임을 제시하는 국제 표준이다. 이 표준을 활용하여 LLM(거대 언어 모델) 텍스트 데이터의 품질을 평가하는 방법론, 실제 사례를 다룬다.`
- After: `LLM을 학습시킨 뒤 편향, 환각, 일반화 실패가 반복된다면 원인은 모델이 아닐 수 있습니다. ISO/IEC 5259는 AI 시대의 데이터 품질을 수치로 측정하고 체계적으로 개선하는 국제 표준입니다. 이 글에서 텍스트 데이터 품질을 진단하는 8가지 핵심 기준과 실무 적용 사례를 확인하세요.`

## 섹션 헤딩

| 섹션 | Before | After |
|------|--------|-------|
| section-1 | 1. ISO/IEC 5259 표준 및 LLM 데이터 품질 개요 | LLM 데이터 품질, 왜 별도의 국제 표준이 필요한가 |
| section-2 | 2. LLM 텍스트 데이터 품질 평가 방법론 (ISO/IEC 5259-2 기반) | 품질을 수치로 만든다는 것: 8가지 핵심 측정 기준 |
| section-3 | 3. LLM 학습 데이터셋에 대한 평가 및 개선 프로세스 | 진단에서 개선까지, 순환의 논리 |
| section-4 | 4. 실제 사례: ISO/IEC 5259 기반 LLM 학습 데이터셋 평가 및 관리 | AADS가 보여주는 자동화된 품질 관리의 실제 |
| section-5 | 5. 거버넌스 및 규제 대응을 통한 신뢰 확보 | AI 규제 시대, 데이터 신뢰는 어떻게 증명하는가 |

## TOC (사이드바 + 모바일)

| 섹션 | Before | After |
|------|--------|-------|
| section-1 | 1. ISO/IEC 5259 개요 | 왜 별도의 국제 표준이 필요한가 |
| section-2 | 2. 평가 방법론 | 8가지 핵심 측정 기준 |
| section-3 | 3. 평가 및 개선 프로세스 | 진단에서 개선까지 |
| section-4 | 4. 실제 사례 | AADS 실제 사례 |
| section-5 | 5. 거버넌스 및 규제 | 데이터 신뢰 증명 |

## section-1 인트로 문단 (Warm Expert Tone 적용)
- Before: 100자 이상 장문 1개 문단 + 설명적 나열. 해라체/수동태 혼재.
- After: 역설 도입("LLM이 틀린 답을 내놓을 때, 우리는 보통 모델을 탓합니다") → 문제 핵심("학습 데이터의 품질이죠") → 기존 표준 대비 차별점 → 페블러스 DataClinic 복선 삽입. 합쇼체 통일, 문장 분리.
