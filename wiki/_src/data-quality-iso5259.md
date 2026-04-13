---
title: ISO/IEC 5259 데이터 품질 표준
sources: [ISO_IEC_5259_품질표준_설명서_v.1.1.pdf]
related: [pebblous-strategic-overview.md, unstructured-data-management.md]
updated: 2026-04-13
tags: [데이터품질, ISO, 표준, DataClinic]
---

# ISO/IEC 5259 데이터 품질 표준

Analytics 및 Machine Learning(ML) 맥락에서 데이터 품질을 측정·보고하기 위한 국제 표준 시리즈. Pebblous가 DataClinic 진단에 준거하는 핵심 표준이다.

## 표준 구성

| 표준 | 발행 | 내용 |
|------|------|------|
| ISO/IEC 5259-2:2024 | 2024-11 | 데이터 품질 특성 정의 및 측정 방법 — 23개 품질 특성 |
| ISO/IEC 25024:2015 | 2015-10 | 데이터 품질 측정 지표(QM) 세부 산식 (SQuaRE 시리즈) |
| ISO/IEC 25012:2008 | 2008 | 데이터 품질 모델 — 15개 기본 품질 특성 (5259-2의 기반) |

ISO/IEC 5259-2는 25012의 15개 기본 특성 중 기밀성(Confidentiality)을 ML 전용 **식별성(Identifiability)**으로 대체하고 9개 ML 전용 특성을 추가해 총 **23개 품질 특성**, **66개 측정 지표(QM)**를 정의한다.

---

## 품질 특성 분류 체계

### 측정 관점 분류 (ISO/IEC 25012 계승)

| 관점 | 해당 특성 |
|------|-----------|
| 고유(Inherent) | 정확성·완전성·일관성·신뢰성·최신성 |
| 고유 + 시스템 의존 | 접근성·준수성·효율성·정밀성·추적성·이해가능성 |
| 시스템 의존(System-dependent) | 가용성·이식성·복구성 |
| 추가 특성(ML·Analytics 전용) | 감사가능성·균형성·다양성·효과성·식별성·관련성·대표성·유사성·적시성 |

> 시스템 의존 특성(가용성·이식성·복구성)은 데이터셋 파일만 대상으로 하는 진단에서는 운영 환경 검토 없이 측정 불가.

### Annex C — 데이터셋 품질 4대 관점

| 관점 | 해당 특성 |
|------|-----------|
| Maintainability(유지보수성) | 접근성·감사가능성·효율성·이식성·식별성·복구성·이해가능성 |
| Validity(유효성) | 가용성·최신성·효과성 |
| Reliability(신뢰성) | 정확성·준수성·신뢰성(Credibility)·정밀성·추적성 |
| Fidelity(충실도) | 완전성·균형성·일관성·다양성·관련성·대표성·유사성·적시성 |

### Annex D — 대안적 그룹 분류

| 그룹 | 특성 |
|------|------|
| Technicality(기술성) | 이식성·효율성·감사가능성·추적성·복구성 |
| Legality(합법성) | 준수성·식별성 |
| User Orientation(사용자 지향성) | 접근성·가용성·이해가능성 |
| Reality Orientation(현실 지향성) | 정확성·완전성·일관성·신뢰성·최신성·정밀성·효과성·관련성·적시성·대표성·균형성·유사성·다양성 |

---

## 23개 품질 특성 전체 목록

| No | 영문 | 한국어 | QM 수 | 비고 |
|----|------|--------|-------|------|
| 01 | Accuracy | 정확성 | 7 | 구문적·의미적 정확성 포함 |
| 02 | Completeness | 완전성 | 5 | 라벨·특징·레코드·값 완전성 |
| 03 | Consistency | 일관성 | 4 | 중복 레코드, 라벨 비일관성 |
| 04 | Credibility | 신뢰성 | 4 | 출처·모델·사전 신뢰성 |
| 05 | Currentness | 최신성 | 2 | 데이터 기록 시점(T₂) 기준 |
| 06 | Accessibility | 접근성 | 3 | 보조기술 포함 |
| 07 | Compliance | 준수성 | 1 | 법규·표준·협약 |
| 08 | Efficiency | 효율성 | 3 | 포맷·처리 효율성 |
| 09 | Precision | 정밀성 | 1 | 소수점 자릿수 등 |
| 10 | Traceability | 추적성 | 3 | 접근·변경 감사 추적 |
| 11 | Understandability | 이해가능성 | 4 | 기호·언어·표현 |
| 12 | Availability | 가용성 | 1 | 시스템 의존 |
| 13 | Portability | 이식성 | 2 | 시스템 간 이동 |
| 14 | Recoverability | 복구성 | 2 | 장애 복구 |
| 15 | Auditability | 감사가능성 | 2 | **ML 전용 신규** |
| 16 | Balance | 균형성 | 8 | **ML 전용 신규** — 밝기·해상도·라벨 분포 균형 |
| 17 | Diversity | 다양성 | 3 | **ML 전용 신규** |
| 18 | Effectiveness | 효과성 | 3 | **ML 전용 신규** |
| 19 | Identifiability | 식별성 | 1 | **ML 전용 신규** — Confidentiality 대체 |
| 20 | Relevance | 관련성 | 2 | **ML 전용 신규** |
| 21 | Representativeness | 대표성 | 1 | **ML 전용 신규** |
| 22 | Similarity | 유사성 | 3 | **ML 전용 신규** |
| 23 | Timeliness | 적시성 | 1 | **ML 전용 신규** — 최신성(Currentness)과 구별 |

---

## 핵심 개념 설명

### 최신성(Currentness) vs 적시성(Timeliness)

- **최신성(ΔT₂)**: 데이터가 *기록된* 시점과 현재 사용 시점 간의 간격
- **적시성(ΔT₁)**: 현상이 *발생한* 시점과 데이터가 사용 가능해지는 시점 간의 지연

두 개념은 다른 시간 기준을 사용하며, 특히 실시간 데이터 파이프라인에서 구별이 중요하다.

### 균형성(Balance) — 이미지 데이터셋에 특히 중요

밝기·해상도·범주별 샘플 수·바운딩박스 크기·라벨 분포 등 **8개 QM**을 가진 가장 복합적인 특성. DataClinic의 IOD/MIOD 시각화와 직결.

### 유사성(Similarity) — 3가지 측정 방법

1. **샘플 유사성**: 클러스터 수 대비 전체 샘플 비율
2. **샘플 밀착도**: 그람 행렬(Gram Matrix) 고유값 범위로 기하학적 측정
3. **샘플 독립성**: PCA 주성분 비율

---

## Pebblous 적용 방침

- 23개 특성·66개 QM 중 데이터셋 유형·도메인·활용 목적에 따라 적용 항목 선택
- 일부 특성은 표준 방법론 기반 + Pebblous 고유 방법론 적용 가능 (보고서에 명시)
- DataClinic 진단 보고서 = ISO/IEC 5259 기준 **감사가능한 품질 증거 패키지**
- EU AI Act·한국 AI 기본법 규제 준수 증거로 활용

---

## 관련 표준

| 표준 | 역할 |
|------|------|
| ISO/IEC 25012 | 데이터 품질 모델 (기반) |
| ISO/IEC 25024 | QM 산식 세부 정의 |
| ISO/IEC 42001 | AI 관리 시스템 (Pebblous의 규제 준수 레이어) |
| ISO/IEC 29100 | 식별성(Identifiability) 정의 원용 |
| ISO/IEC TR 24027 | 데이터 편향(Bias) 별도 처리 기준 |

---

## 참고

- Pebblous 내부 해설서 — "ISO/IEC 5259 품질표준 설명서 v.1.1"
- 관련: [[pebblous-strategic-overview.md|Pebblous 전략 개요]], [[unstructured-data-management.md|비정형 데이터 관리]]
