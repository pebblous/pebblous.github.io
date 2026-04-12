---
title: Pebblous 전략 개요 (Strategic Overview 2025)
updated: 2026-04-12
tags: [Pebblous, 전략, PhysicalAI, 내부문서]
private: true
---

# Pebblous 전략 개요

> 출처: Pebblous Inc. — "Building the AI-Ready Data Infrastructure for Physical AI: The Data Greenhouse Strategy" (December 2025)
> ⚠️ *이 문서는 기밀 내부 자료입니다. (Private 위키 전용)*

---

## Executive Summary

Pebblous는 **AI 데이터 인프라 통합 플랫폼**을 개발한 한국 딥테크 스타트업이다.

- 데이터 품질 진단 + 시뮬레이션 기반 합성 데이터 생성 + 규제 컴플라이언스를 *단일 아키텍처*로 통합한 유일한 글로벌 플레이어
- 시장: Physical AI(로보틱스, 자율주행, 스마트 제조, 방산) ↔ 디지털 트윈 교차점
- US 특허 4건+ (2042년까지 유효)
- 고객: 현대자동차, 한화비전, 삼성E&A, 국군

---

## 시장 기회

### 3대 메가트렌드 교차점

1. **데이터 중심 패러다임 전환**: 모델 아키텍처보다 데이터 품질이 AI 성공의 결정 요소. Gartner 예측: 2030년까지 합성 데이터가 AI 모델 훈련을 지배
2. **Physical AI 폭발적 성장**: 시장 규모 ~$5.1B(2025) → $500~840B(2033-35), CAGR 31~34%
3. **규제 컴플라이언스 의무화**: EU AI Act, 한국 AI기본법(2026.1), ISO/IEC 42001, ISO/IEC 5259 → 감사 가능한 데이터 품질이 법적 요건화

### 시장 규모

| 세그먼트 | 2025 | 2030-35 | CAGR |
|----------|------|---------|------|
| 합성 데이터 | $5~9B | $25~34B | 31~46% |
| Physical AI | $5.1B | $500~840B | 31~34% |
| 디지털 트윈 | $21~29B | $122~150B | 35~48% |
| DT 기반 AI 인프라 | — | $20~40B(2030) | — |

---

## 핵심 문제: Physical AI의 데이터 병목

### Problem 1 — 데이터 기근 (희소성 & 품질)
- 희귀 결함(발생률 <0.001%), 로봇 예외, 위험 주행 시나리오는 실제로 수집 불가
- 데이터 과학자 업무의 대부분이 데이터 정제에 소비

### Problem 2 — 보안 & 거버넌스 (온프레미스 의무)
- 제조·모빌리티·방산 데이터는 국가 보안 자산 → 폐쇄망 내 처리 필수
- 공개 클라우드 SaaS는 엔터프라이즈 Physical AI 고객에게 불가

### Problem 3 — 멀티모달 복잡성
- 센서·비전·로그·3D 공간 데이터의 실시간 통합 필요
- 비IT 현장 인력(공장장, 조선소 감독)이 데이터를 해석하기 어려운 커뮤니케이션 장벽

---

## 솔루션: 데이터 그린하우스 (Data Greenhouse)

### 3대 통합 기둥

**① Data Greenhouse (Data OS)**
- Observe → Orchestrate → Act → Govern (OOAG) 자율 사이클
- 뉴로-심볼릭 아키텍처: 임베딩 공간 분석(벡터) + 지식 온톨로지(컨텍스트)
- 기존 인프라(Snowflake, Databricks, 데이터 레이크) 위에 레이어로 작동

**② Data Clinic (품질 진단 엔진)**
- 시간당 100,000장 이상 이미지 처리
- *Data Imaging*: 고차원 데이터를 임베딩 공간에 투영 → 밀도·분포로 데이터 건강 시각화
- *Data Diet*: 과밀 클러스터에서 중복 데이터 제거 (GPU 효율 향상)
- *Data Bulk-up*: 저밀도 공백(void) 감지 → 정밀 합성 데이터 생성
- *Diagnostic Reports*: ISO/IEC 5259 기반 품질 보고서 (IOD/MIOD 시각 결함 맵)

**③ PebbloSim (시뮬레이션 기반 합성 데이터)**
- 현실에 존재하지 않는 시나리오의 하이퍼-합성 데이터 생성
- **US 특허 12,481,720**: 데이터 공백 좌표 → 시뮬레이션 파라미터 자동 변환 (Vector-to-Param)
- 뉴로-심볼릭 하이브리드 월드 모델: 물리 기반 시뮬레이션 + 생성형 AI
- ISO 42001 준수 감사 추적(Provenance) 자동 생성

### Data Flywheel

```
Data Clinic 진단 → PebbloSim 정밀 생성
     ↑                      ↓
생성 품질 개선 ←← 진단 정확도 향상
```

시간이 지날수록 경쟁자가 복제하기 어려운 데이터 자산(Structural Moat) 형성.

---

## 경쟁 우위

| 기능 | NVIDIA | Siemens | Applied Intuition | MOSTLY AI | *Pebblous* |
|------|--------|---------|-------------------|-----------|-----------|
| 물리 시뮬레이션 | ✓(인프라) | ✓ | ✓(AV특화) | ✗ | ✓ |
| AI 데이터 품질 진단 | ✗ | ✗ | 부분 | ✗ | ✓ |
| 합성 데이터 생성 | ✓(Cosmos) | ✗ | 부분 | ✓ | ✓ |
| Data OS/관리 | ✓(Nucleus) | ✗ | 부분SDK | ✗ | ✓ |
| 규제 증거 패키지 | ✗ | ✗ | 부분 | ✗ | ✓ |
| 진단→생성 자동 연결 | ✗ | ✗ | ✗ | ✗ | ✓ |

---

## 특허 포트폴리오

| 특허 | 등록일 | 범위 |
|------|--------|------|
| US 12,481,720 | 2025.11 | 듀얼 임베딩 공간 투영, 밀도 분석, IOD/MIOD. 2042년까지 유효 |
| US 11,967,308 | 2024 | 데이터 처리 및 정밀 타겟 합성 데이터 생성 |
| US 11,868,435 | 2024.01 | 데이터 진단 방법론 기초 (Parent) |
| US 11,748,447 | 2023.09 | 데이터 속성 진단 장치 (Grandparent) |

---

## 검증된 ROI

### 현대자동차 — 용접 결함 감지
- 감지 정확도: 50% → 97~99% (+94%)
- 불량률: 16 PPM → 3.4 PPM (-78.75%)
- 데이터 수집 기간: 3~5년 → *2주*
- 재무 ROI: 8,150%+ (회수 기간: 1.8개월)

### 조선업 — 공정 일정 예측
- 예측 정확도: ±30일 → ±7일
- 병목 감지: 2~3주 → 실시간
- ROI: 1,725%+ (회수: 8개월)

### 국군 — 전술 훈련 합성 데이터
- AI 성능: 60~70% → 90%+
- 훈련 비용: 실사훈련 대비 80~95% 절감
- ROI: 1,650%+ (회수: 8.3개월)

---

## AADS — 자율 데이터 인텔리전스 플랫폼

**Agentic AI Data Scientist (AADS)**: AI 에이전트가 데이터 품질 문제를 자기 진단·계획·개선·보고하는 완전 자율 데이터 운영 플랫폼

구성:
- *The Brain*: KISTI KONI LLM 기반 AADS-LLM (LogicKor 벤치마크 1위) + Chart VLM
- *The Engine*: Data Clinic 엔진 + EU AI Act/ISO 42001 실시간 검증 Dual Governance Engine
- *The Conductor*: Planner Agent (자연어 → 실행 워크플로) + Tool Router Agent

**PDIG 사이클**: Plan → Diagnose → Improve → Govern

---

## GTM 전략

| 단계 | 기간 | 타겟 | 목표 |
|------|------|------|------|
| Phase 1: Focus | 2026 | 국내 모빌리티 (현대차그룹) | 플래그십 레퍼런스 확립 |
| Phase 2: Expand | 2027 | 글로벌 모빌리티 (BMW, Toyota) | 글로벌 교두보 |
| Phase 3: Transition | 2027-28 | 조선, 방산 | 인접 버티컬 선점 |

포지셔닝: NVIDIA Omniverse, Siemens, Dassault 위에 올라타는 *"품질 레이어"* — 경쟁이 아닌 보완

---

## 창업팀

- **이주행 CEO**: POSTECH 컴퓨터공학 박사, 전 ETRI 수석연구원. 고차원 데이터를 기하학적 다양체로 처리하는 핵심 혁신 창안
- **이정원 COO**: KAIST 바이오및뇌공학 박사. 노이즈 많은 실제 데이터의 ML 응용 전문

---

## 실패 사례에서 배운 교훈

Datagen ($70M 투자 후 2024년 폐업), Synthesis AI (직원 1~10명으로 축소), AI.Reverie (Meta에 acqui-hire) — 모두 *단일 모달리티 데이터 생성*에 그쳐 워크플로 통합 없이 실패.

Pebblous의 **진단 + 생성 + 거버넌스 통합 플랫폼** 전략은 이 함정을 피하기 위해 설계됨.

---

## 관련

- [[agentic-data-management.md|에이전틱 데이터 관리]]
- [[unstructured-data-management.md|비정형 데이터 관리]]
