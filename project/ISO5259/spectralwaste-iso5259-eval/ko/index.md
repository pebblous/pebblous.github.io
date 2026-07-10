---
title: 재활용 데이터셋을 ISO 5259로 진단하면
subtitle: SpectralWaste × ISO/IEC 5259-2 독립 평가 보고서
date: 2026년 4월 4일
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 재활용 데이터셋을 ISO 5259로 진단하면

_SpectralWaste × ISO/IEC 5259-2 독립 평가 보고서_

🔬

평가 방법론

이 보고서는 **DataClinic의 3단계 진단 결과(Level I / II / III)**를
                            **ISO/IEC 5259-2:2024 품질측정기준(QM) 프레임**으로 재해석한 독립 평가입니다.
                            DataClinic이 측정한 수치·차트·이상치를 각 ISO QM 항목의 정의에 따라 매핑하고,
                            Pass / Fail / 주의를 독자적으로 판정했습니다.

DataClinic L1 진단→DataClinic L2/L3 진단→ISO 5259-2 QM 해석·판정

<!-- stat-card -->
****요약:** SpectralWaste 재활용 폐기물 이미지 데이터셋(2,794장, 6클래스)을 ISO/IEC 5259-2:2024 품질측정기준(QM)으로 독립 평가했습니다. DataClinic의 3단계 진단 수치와 차트를 ISO QM 항목에 매핑한 결과, 14개 QM 항목 중 Pass 3개, Fail 5개, 주의 3개로 나타났으며, 클래스 불균형(최대비 19.6:1)과 단일 촬영 환경에 의한 대표성·다양성 부족이 핵심 문제입니다. DataClinic의 "벌크업" 처방은 ISO Bal-ML-3·Eft-ML-1 Fail 판정과 정확히 일치합니다.**

<!-- stat-card -->
**3 / 10** — 측정 항목 Pass

<!-- stat-card -->
**5** — Fail 항목

<!-- stat-card -->
**2** — 주의 항목

<!-- stat-card -->
**3** — 미측정(로드맵)

## 1
                    데이터셋 개요

| 데이터셋명 | SpectralWaste |
| --- | --- |
| 출처 | Kaggle |
| 진단 이미지 수 | 1,709장 (전체 2,794장) |
| 클래스 수 | 6개 |
| 이미지 크기 | 276 × 256 px (RGB) |
| DataClinic 점수 | 68 / 100 (보통) |

<!-- stat-card -->
**기본 정보** — [https://www.kaggle.com/datasets/vijaynyayavn/spectralwaste](https://www.kaggle.com/datasets/vijaynyayavn/spectralwaste)

| 클래스 | 샘플 수 | 비율 |
| --- | --- | --- |
| video_tape | 646 | 37.8% |
| basket | 384 | 22.5% |
| film | 248 | 14.5% |
| cardboard | 199 | 11.6% |
| bag | 199 | 11.6% |
| filament | 33 | 1.9% |

<!-- stat-card -->
**클래스 분포 (L1 진단)** — 최대·최소 클래스 비율: 19.6 : 1 (video_tape vs filament)

▲ SpectralWaste 데이터셋 대표 이미지 콜라주 — 컨베이어 벨트 위 6종 재활용 폐기물

<!-- stat-card -->
**SpectralWaste는 프로토타입 컨베이어 벨트에서 RGB와 하이퍼스펙트럼 이미징을 동기화하여 수집된 재활용 폐기물 데이터셋입니다.
                        각 이미지에는 객체별 분광 스펙트럼을 요약한 막대그래프가 합성되어 있습니다.
                        실제 재활용 자동화 모델 학습을 목적으로 구성되었으나, 클래스 불균형과 촬영 환경의 단일성이 모델 성능에 영향을 줄 수 있습니다.**

## 2
                    ISO/IEC 5259-2 평가 프레임워크

| DataClinic 진단 단계 | 측정 내용 | 매핑되는 ISO 5259-2 QM |
| --- | --- | --- |
| Level I | 클래스 수·샘플 수, 결측치, 픽셀 통계, 평균 이미지 | Com-ML-1/3/5, Bal-ML-1, Eft-ML-1 |
| Level II | 범용 임베딩(1280차원) 밀도 분포, 이상치, 유사도 | Sim-ML-1/2, Rep-ML-1/3, Div-ML-1, Con-ML-2, Acc-ML-7 |
| Level III | 도메인 특화 렌즈(32차원) 밀도·클러스터 분석 | Rep-ML-1, Div-ML-1/2, Bal-ML-2 |

## 3
                    내재적 품질 특성 평가

| QM ID | 항목 | ISO 정의 | 판정 |
| --- | --- | --- | --- |
| Com-ML-1 | 값 완전성 | Null 값이 없는 데이터 항목의 비율 | ✅ Pass |
| Com-ML-3 | 특징 완전성 | 특정 특징과 관련된 항목 중 null 없는 비율 | ✅ Pass |
| Com-ML-5 | 라벨 완전성 | 누락·불완전 라벨 샘플의 비율 | ✅ Pass |
| Con-ML-2 | 라벨 일관성 | 유사 샘플 간 라벨이 일관적인 비율 | ⚠️ 주의 |
| Acc-ML-7 | 라벨 정확성 | 이상치 탐지를 통한 오라벨 추정 비율 | ⚠️ 주의 |

## 4
                    균형성 평가 — Bal-ML

| QM ID | 항목 | ISO 정의 | 측정값 | 판정 |
| --- | --- | --- | --- | --- |
| Bal-ML-3 | 범주 간 이미지 균형 | 클래스별 샘플 수의 균형 정도 | 표준편차 242.7, 최대비 19.6:1 | ❌ Fail |
| Bal-ML-2 | 특성 균형 | 데이터셋 내 특성 분포의 균형 | 색상·크기 편중 (L3 확인) | ❌ Fail |

## 5
                    유사성 평가 — Sim-ML

| QM ID | 항목 | ISO 정의 | 측정값 | 판정 |
| --- | --- | --- | --- | --- |
| Sim-ML-1 | 유사 인스턴스 비율 | 데이터셋 내 중복·유사 샘플의 비율 | L2 저밀도 → 중복 적음 | ✅ Pass |
| Sim-ML-2 | 클래스 내 평균 유사도 | 같은 클래스 내 샘플 간 평균 유사도 | video_tape 고밀도 집중 | ⚠️ 주의 |

## 6
                    대표성 평가 — Rep-ML

| QM ID | 항목 | ISO 정의 | 판정 |
| --- | --- | --- | --- |
| Rep-ML-1 | 타겟 도메인 커버리지 | 실제 응용 환경의 다양한 상황을 포괄하는 정도 | ❌ Fail |
| Rep-ML-3 | 분포 간 거리 (KL-divergence) | 학습 데이터 분포와 실제 환경 분포의 차이 | ❌ Fail |

## 7
                    다양성 평가 — Div-ML

| QM ID | 항목 | ISO 정의 | 판정 |
| --- | --- | --- | --- |
| Div-ML-1 | 고유차원 다양성 | 데이터의 실효 차원수 — 얼마나 다양한 특징이 존재하는가 | ⚠️ 주의 |
| Div-ML-2 | 특징 다양성 | 색상, 형태, 크기 등 시각 특징의 다양성 | ❌ Fail |

## 8
                    유효성 · 식별가능성 평가

| QM ID | 항목 | ISO 정의 | 측정값 | 판정 |
| --- | --- | --- | --- | --- |
| Eft-ML-1 | 유효 샘플 비율 | 학습 임계값을 충족하는 클래스 비율 | 최소 클래스 33장 (filament) | ❌ Fail |
| Idn-ML-1 | 식별가능성(PII) | 개인 식별 정보(PII) 포함 여부 | 폐기물 이미지 — PII 없음 | ✅ Pass |

## 9
                    미측정 항목 (감사가능성 · 적합성 · 적시성)

| QM ID | 항목 | ISO 정의 | 현황 | 판정 |
| --- | --- | --- | --- | --- |
| Aud-ML-1/2 | 감사가능성 | 데이터 계보 추적, 품질 감사 로그 | AADS 확장 예정 | — N/A |
| Rel-ML-1/2 | 적합성 | 맥락·목적 적합성, 아웃라이어 탐지 | AADS 확장 예정 | — N/A |
| Tml-ML-1 | 적시성 | 데이터 신선도, 수집 시점의 적절성 | 로드맵 | — N/A |

## 10
                    종합 평가 및 처방

| DQC 그룹 | QM ID | 항목 | 판정 | 심각도 |
| --- | --- | --- | --- | --- |
| 완전성 | Com-ML-1/3/5 | 값·특징·라벨 완전성 | ✅ Pass | — |
| 일관성 | Con-ML-2 | 라벨 일관성 | ⚠️ 주의 | 중 |
| 정확성 | Acc-ML-7 | 라벨 정확성 | ⚠️ 주의 | 중 |
| 균형성 | Bal-ML-3 | 범주 간 이미지 균형 | ❌ Fail | 🔴 심각 |
| 균형성 | Bal-ML-2 | 특성 균형 | ❌ Fail | 높음 |
| 유사성 | Sim-ML-1 | 유사 인스턴스 비율 | ✅ Pass | — |
| 유사성 | Sim-ML-2 | 클래스 내 유사도 | ⚠️ 주의 | 중 |
| 대표성 | Rep-ML-1 | 도메인 커버리지 | ❌ Fail | 🔴 심각 |
| 대표성 | Rep-ML-3 | KL-divergence | ❌ Fail | 높음 |
| 다양성 | Div-ML-1 | 고유차원 다양성 | ⚠️ 주의 | 중 |
| 다양성 | Div-ML-2 | 특징 다양성 | ❌ Fail | 높음 |
| 유효성 | Eft-ML-1 | 유효 샘플 비율 | ❌ Fail | 🔴 심각 |
| 식별가능성 | Idn-ML-1 | PII 리스크 | ✅ Pass | — |
| 감사가능성·적합성·적시성 | Aud/Rel/Tml | — | — N/A | — |

- **Bal-ML-3:** filament 클래스 데이터 수집 또는 합성 데이터 보강 (최소 300장 목표)
- **Eft-ML-1:** 전체 4개 클래스 벌크업 — 데이터 수집 or 증강

- **Rep-ML-1:** 다양한 조명·배경·각도의 추가 촬영 환경 확보
- **Div-ML-2:** 오염·구겨진·혼합 폐기물 샘플 포함
- **Bal-ML-2:** 색상·크기 특성 다변화 수집

- **Con-ML-2:** 유사 샘플 간 라벨 교차 검수
- **Acc-ML-7:** 저밀도 이상치 20개 수동 라벨 검토
- **Sim-ML-2:** video_tape 세션 다양화

- [1] ISO/IEC JTC 1/SC 42. (2024). ISO/IEC 5259-2:2024 — Part 2: Data quality measures.
- [2] DataClinic Report #223 — SpectralWaste. [dataclinic.ai/en/report/223](https://dataclinic.ai/en/report/223)
- [3] SpectralWaste Dataset. [Kaggle](https://www.kaggle.com/datasets/vijaynyayavn/spectralwaste)
- [4] Pebblous. (2025). [AI 데이터 품질 표준과 페블러스 데이터클리닉: ISO/IEC 5259-2 정량적 매핑](/project/ISO5259/5259-pbls-dataclinic-02/ko/)
