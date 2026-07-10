---
title: 예술을 데이터로 보면 무엇이 보일까
subtitle: WikiArt \u00d7 ISO/IEC 5259-2 독립 평가 보고서
date: 2026년 4월 4일
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 예술을 데이터로 보면 무엇이 보일까

_WikiArt \u00d7 ISO/IEC 5259-2 독립 평가 보고서_

🔬

평가 방법론

이 보고서는 **DataClinic의 3단계 진단 결과(Level I / II / III)**를
                            **ISO/IEC 5259-2:2024 품질측정기준(QM) 프레임**으로 재해석한 독립 평가입니다.
                            DataClinic이 측정한 수치, 차트, 이상치를 각 ISO QM 항목의 정의에 따라 매핑하고,
                            Pass / Fail / 주의를 독자적으로 판정했습니다.
                            특히 DataClinic API 설명과 실제 차트 데이터 사이의 불일치를 비판적으로 재해석합니다.

DataClinic L1 진단→DataClinic L2/L3 진단→ISO 5259-2 QM 해석 · 판정

<!-- stat-card -->
****요약:** WikiArt 미술 사조 이미지 데이터셋(81,444장, 27개 클래스)을 ISO/IEC 5259-2:2024 품질측정기준(QM)으로 독립 평가했습니다. DataClinic의 3단계 진단 수치와 차트를 ISO QM 항목에 매핑한 결과, 13개 평가 항목 중 **Fail 5개**, **주의 5개**, N/A 3개로 나타났으며, **Pass 항목은 0개**입니다. Impressionism 대 Analytical Cubism의 133배 불균형, L2 단일 구름 구조, L3 블랑샤르 효과(단일 화가가 "전형적 예술"을 정의), Pop Art의 매체 단층선이 핵심 문제입니다. DataClinic 점수 53/100(나쁨)은 ISO 관점에서도 재확인됩니다.**

<!-- stat-card -->
**0 / 13** — 측정 항목 Pass

<!-- stat-card -->
**5** — Fail 항목

<!-- stat-card -->
**5** — 주의 항목

<!-- stat-card -->
**3** — N/A (평가 유보)

## 1
                    데이터셋 개요

| 데이터셋명 | WikiArt |
| --- | --- |
| 출처 | HuggingFace (huggan/wikiart) |
| 전체 이미지 수 | 81,471장 (진단: 81,444장) |
| 클래스 수 | 27개 (미술 사조) |
| 이미지 크기 | 750×597 ~ 1382×17768 px |
| DataClinic 점수 | 53 / 100 (나쁨) |

<!-- stat-card -->
**기본 정보** — [https://huggingface.co/datasets/huggan/wikiart](https://huggingface.co/datasets/huggan/wikiart)

| 클래스 (사조) | 샘플 수 |
| --- | --- |
| Impressionism | 13,060 |
| Realism | 10,733 |
| Romanticism | 7,019 |
| Expressionism | 6,736 |
| Post_Impressionism | 6,450 |
| Art_Nouveau | 4,334 |
| Baroque | 4,241 |
| Symbolism | 3,421 |
| Abstract_Expressionism | 2,782 |
| Naive_Art | 2,405 |
| ... (17개 사조 생략) |  |
| Analytical_Cubism | 98 |

<!-- stat-card -->
**클래스 분포 상위 10개 (L1 진단)** — 최대 · 최소 클래스 비율: **133 : 1** (Impressionism vs Analytical_Cubism)

▲ WikiArt 데이터셋 대표 이미지 콜라주 — 르네상스부터 팝 아트까지 27개 미술 사조

<!-- stat-card -->
**WikiArt는 미술 사조(Art Movement) 분류를 위한 대규모 이미지 데이터셋으로, HuggingFace에서 가장 널리 사용되는 미술 AI 벤치마크 중 하나입니다.
                        르네상스부터 현대 미술까지 27개 사조, 81,000여 점의 작품을 포함합니다.
                        그러나 미술사의 고유한 시대별 작품 수 차이, 디지털화 편향, 서양 중심 큐레이션이 ML 학습용 데이터로서의 품질에 영향을 미칩니다.
                        DataClinic 종합 점수 53점(나쁨)은 이러한 구조적 문제를 반영합니다.**

## 2
                    ISO/IEC 5259-2 평가 프레임워크

| DataClinic 진단 단계 | 측정 내용 | 매핑되는 ISO 5259-2 QM |
| --- | --- | --- |
| Level I | 클래스 수 · 샘플 수, 결측치, 픽셀 통계(RGB), 해상도 범위 | Com-ML, Bal-ML-3, Eft-ML-1 |
| Level II | Wolfram ImageIdentify Net V2 임베딩(1280차원) — 범용 형태 인식 | Sim-ML, Rep-ML-1, Div-ML-1, Con-ML-2 |
| Level III | BLIP 이미지-텍스트 매칭(56차원) — 의미 기반 분석 | Rep-ML-3, Sim-ML-1, Acc-ML-7 |

## 3
                    내재적 품질 특성 평가

| QM ID | 항목 | ISO 정의 | 판정 |
| --- | --- | --- | --- |
| Com-ML-1 | 클래스 완전성 | 목표 도메인의 클래스 목록이 충분히 포함되었는가 | ⚠ 주의 |
| Con-ML-2 | 픽셀 채널 일관성 | RGB 채널 분포의 통계적 일관성 | ⚠ 주의 |

## 4
                    균형성 평가 — Bal-ML

| QM ID | 항목 | 측정값 | 판정 |
| --- | --- | --- | --- |
| Bal-ML-3 | 클래스 균형 | 133배 불균형, stdDev(3,269) > mean(3,016) | ✗ Fail |
| Bal-ML-2 | 특징 공간 균형 | L3 시대별 층화(고전 1.84-1.87, 현대 1.49-1.67) | — N/A |

## 5
                    식별가능성 · 라벨 정확도 평가

| QM ID | 항목 | 측정값 | 판정 |
| --- | --- | --- | --- |
| Eft-ML-1 | 식별가능성 | L2 클래스 분리 불가 (단일 구름) | ⚠ 주의 |
| Eft-ML-2 | 어노테이션 완전성 | 메타데이터(작가, 연도) 완전성 미진단 | — N/A |
| Acc-ML-7 | 라벨 정확도 | Dali → Abstract_Expressionism 오분류, Pop Art 매체 혼입 | ✗ Fail |

## 6
                    유사성 평가 — Sim-ML

| QM ID | 항목 | 측정값 | 판정 |
| --- | --- | --- | --- |
| Sim-ML-1 | 클래스 내 유사성 | 일부 클래스(Cubism 계열) 응집력 높으나 전체 정량 측정 불가 | — N/A |
| Sim-ML-2 | 교차 클래스 유사성 | Minimalism ≈ Color_Field_Painting (L2 동일 군집) | ⚠ 주의 |

## 7
                    대표성 평가 — Rep-ML

| QM ID | 항목 | ISO 정의 | 판정 |
| --- | --- | --- | --- |
| Rep-ML-1 | L2 대표성 | 특징 공간 핵심부가 전체 도메인을 대표하는가 | ✗ Fail |
| Rep-ML-3 | L3 대표성 | 의미 공간에서 "전형적" 샘플이 도메인을 대표하는가 | ✗ Fail |

## 8
                    다양성 평가 — Div-ML

| QM ID | 항목 | 판정 |
| --- | --- | --- |
| Div-ML-1 | L2 다양성 — 27개 클래스가 L2에서 단일 연속 구름 | ✗ Fail |
| Sim-ML-1 | L3 다양성 — Pop Art 극적 분리, 시대별 층화 존재 | ⚠ 주의 |

## 9
                    두 렌즈의 대조: L2 vs L3

| 구분 | L2 핵심 (범용 형태 AI) | L3 핵심 (의미 매칭 AI) |
| --- | --- | --- |
| 고밀도 핵심 | Minimalism / Color_Field_Painting시각적 단순성이 "보편적 패턴"으로 해석됨 | Antoine Blanchard 파리 가로수길의미적 일관성이 높은 구상 도시풍경 |
| 저밀도 이상치 | Degas 초상화, Ukiyo-e 판화, Mabe 추상범용 렌즈에서 "특이한" 시각 패턴 | Pop Art 설치사진, 현대 건축회화가 아닌 매체 → 의미 공간에서 이탈 |
| 클러스터 구조 | 하나의 구름 (클래스 분리 불가)모든 회화가 "이미지" 하나로 수렴 | Pop Art 극적 분리 + 시대별 층화의미 기반으로 시대 · 매체 구분 가능 |
| ISO 시사점 | Div-ML-1 Fail, Eft-ML-1 주의범용 렌즈로는 미술 사조 분류 불가 | Rep-ML-3 Fail, Sim-ML-1 주의의미 렌즈는 구조를 발견하나 대표성 편향 |

## 10
                    종합 평가 및 개선 처방

| DQC 그룹 | QM ID | 항목 | 판정 | 심각도 |
| --- | --- | --- | --- | --- |
| 균형성 | Bal-ML-3 | 클래스 균형 (133배) | ✗ Fail | 심각 |
| 대표성 | Rep-ML-1 | L2 Minimalism 편향 | ✗ Fail | 심각 |
| 대표성 | Rep-ML-3 | L3 블랑샤르 효과 | ✗ Fail | 높음 |
| 다양성 | Div-ML-1 | L2 단일 구름 | ✗ Fail | 심각 |
| 정확성 | Acc-ML-7 | Dali 오분류, Pop Art 매체 혼입 | ✗ Fail | 높음 |
| 완전성 | Com-ML-1 | 희귀 사조 98~120장 | ⚠ 주의 | 중 |
| 식별가능성 | Eft-ML-1 | L2 클래스 분리 불가 | ⚠ 주의 | 중 |
| 유사성 | Sim-ML-2 | Minimalism ≈ Color_Field | ⚠ 주의 | 중 |
| 다양성 | Sim-ML-1 | Pop Art 매체 단층선 | ⚠ 주의 | 중 |
| 일관성 | Con-ML-2 | RGB 채널 불일치 | ⚠ 주의 | 중 |
| 유사성 | Sim-ML-1 | 클래스 내 정량 측정 불가 | — N/A | — |
| 식별가능성 | Eft-ML-2 | 메타데이터 완전성 미진단 | — N/A | — |
| 균형성 | Bal-ML-2 | 시대별 층화(역사적 사실) | — N/A | — |

- **Bal-ML-3:** 희귀 사조(Analytical_Cubism, Action_Painting 등) 300장 이상 보강
- **Acc-ML-7:** 사조 라벨 전수 검수. Dali → Surrealism 등 체계적 오류 교정
- **Div-ML-1:** 클래스 체계 재설계 — 27개 사조 병합/계층화 검토

- **Rep-ML-1/3:** Blanchard 등 상업적 반복 작품 비율 조정 (다운샘플링 or 가중치)
- **Sim-ML-1:** Pop Art 클래스를 "회화"와 "비회화(설치/사진)" 서브클래스로 분리
- **Sim-ML-2:** Minimalism & Color_Field_Painting 병합 또는 계층적 라벨링

- **Con-ML-2:** RGB 채널 정규화 전략 수립 (회화 도메인 특화)
- **Eft-ML-1:** 도메인 특화 렌즈 기반 분류 파이프라인 검토
- **Com-ML-1:** 비서양 미술 사조(동양화, 이슬람 세밀화 등) 확장 검토

| # | DataClinic API 주장 | 실제 차트 데이터 | ISO 판정 영향 |
| --- | --- | --- | --- |
| D1 | "RGB 채널 일관적" | Blue 좌편향, Red 이중봉+255 스파이크 | Con-ML-2 주의로 상향 |
| D2 | "3개 고밀도 클러스터" | 1개 연결 질량 내 2개 밀도 중심 | Div-ML-1 Fail 유지 |
| D3 | L2 Geometry "좋음" | 27개 클래스 단일 구름, 분리 불가 | Eft-ML-1 주의 |
| D4 | L3 클러스터 "불명확" | Pop Art 극적 분리 + 시대별 층화 명확 | Sim-ML-1 주의 (과소평가 교정) |

- [1] ISO/IEC JTC 1/SC 42. (2024). ISO/IEC 5259-2:2024 — Part 2: Data quality measures.
- [2] DataClinic Report #115 — WikiArt. [dataclinic.ai/en/report/115](https://dataclinic.ai/en/report/115)
- [3] WikiArt Dataset (huggan/wikiart). [HuggingFace](https://huggingface.co/datasets/huggan/wikiart)
- [4] Pebblous. (2025). [AI 데이터 품질 표준과 페블러스 데이터클리닉: ISO/IEC 5259-2 정량적 매핑](/project/ISO5259/5259-pbls-dataclinic-02/ko/)
- [5] Pebblous. (2026). [SpectralWaste ISO/IEC 5259-2 독립 평가 보고서](/project/ISO5259/spectralwaste-iso5259-eval/ko/)
