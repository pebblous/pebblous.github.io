---
title: AI의 교과서를 ISO 5259로 채점하면
subtitle: ImageNet \u00d7 ISO/IEC 5259-2 독립 평가 보고서
date: 2026년 4월 4일
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI의 교과서를 ISO 5259로 채점하면

_ImageNet \u00d7 ISO/IEC 5259-2 독립 평가 보고서_

🔬

평가 방법론

이 보고서는 **DataClinic의 3단계 진단 결과(Level I / II / III)**를
                            **ISO/IEC 5259-2:2024 품질측정기준(QM) 프레임**으로 재해석한 독립 평가입니다.
                            DataClinic이 측정한 수치와 차트를 각 ISO QM 항목의 정의에 따라 매핑하고,
                            Pass / Fail / 주의를 독자적으로 판정했습니다.
                            특히, DataClinic이 포착하지 못하는 영역(라벨 정확도, 의미론적 균형)은
                            학술 문헌(Northcutt et al. 2021)과 공개 클래스 목록을 교차 검증하여 보완했습니다.

DataClinic L1 진단→DataClinic L2/L3 진단→ISO 5259-2 QM 해석 · 판정

<!-- stat-card -->
****요약:**
                        ImageNet(ILSVRC)은 2009년부터 딥러닝 혁명의 기반이 된 1,431,167장, 1,000클래스 이미지 데이터셋입니다.
                        이 보고서는 DataClinic의 60점(보통) 진단 결과를 ISO/IEC 5259-2:2024 품질측정기준(QM)으로 독립 재해석합니다.
                        12개 QM 항목 중 **Fail 5개, 주의 4개, N/A 3개, Pass 0개**로 나타났습니다.
                        120개 개 품종의 의미론적 불균형, L2에서 공작새가 지배하는 대표성 왜곡, Northcutt et al.(2021)이 실증한 약 85,870장의 라벨 오류,
                        그리고 생물/비생물 특징 공간 편중이 핵심 문제입니다. DataClinic의 60점은 기술적 측면만의 점수이며,
                        의미론적 품질까지 포함하면 실제 품질은 이보다 상당히 낮습니다.**

<!-- stat-card -->
**0 / 12** — Pass 항목

<!-- stat-card -->
**5** — Fail 항목

<!-- stat-card -->
**4** — 주의 항목

<!-- stat-card -->
**3** — N/A (미측정)

## 1
                    데이터셋 개요

ImageNet은 2009년 프린스턴/스탠퍼드 대학의 페이페이 리(Fei-Fei Li) 교수팀이 구축한 대규모 이미지 인식 데이터셋입니다.
                    WordNet의 어휘 계층 구조를 기반으로 1,000개 시각 카테고리(synset)를 정의하고, 인터넷에서 크롤링한 이미지에
                    Amazon Mechanical Turk(AMT) 크라우드소싱으로 라벨을 부착했습니다.
                    2012년 AlexNet이 ImageNet Large Scale Visual Recognition Challenge(ILSVRC)에서 혁신적 성능을 달성한 이후,
                    VGGNet, GoogLeNet, ResNet 등 모든 랜드마크 딥러닝 모델이 이 데이터셋으로 학습 및 검증되었습니다.
                    사실상 현대 딥러닝의 교과서이자, 전이학습을 통해 수천 개의 후속 모델에 가중치를 전달한 원본 데이터셋입니다.

| 데이터셋명 | ImageNet (ILSVRC) |
| --- | --- |
| 출처 | ImageNet.org (Princeton/Stanford) |
| 최초 공개 | 2009년 |
| 전체 이미지 수 | 1,431,167장 |
| 클래스 수 | 1,000개 (WordNet synset) |
| 클래스당 평균 | 1,281.2장 (std 70.2) |
| 샘플 범위 | 732 ~ 1,300장 |
| 해상도 | 20×17 ~ 7,056×4,488 px |
| 채널 | RGB 98.43% / Grayscale 1.57% |
| DataClinic 점수 | 60 / 100 (보통) |

<!-- stat-card -->
**기본 정보** — [https://image-net.org](https://image-net.org)

| 카테고리 | 클래스 수 | 비율 |
| --- | --- | --- |
| 개 품종 | 120 | 12.0% |
| 기타 동물 (새, 파충류 등) | ~200 | ~20% |
| 식물, 음식, 자연 | ~80 | ~8% |
| 인공물 (도구, 기계, 악기) | ~450 | ~45% |
| 기타 (구조물, 장면 등) | ~150 | ~15% |

<!-- stat-card -->
**의미론적 클래스 분포** — * 개 품종 120개가 전체 클래스의 12%를 차지하는 구조적 편향

▵ ImageNet 데이터셋 대표 이미지 콜라주 — 1,000개 클래스의 다양한 시각 카테고리

<!-- stat-card -->
**ImageNet의 1,000개 클래스는 WordNet의 어휘 계층 구조에서 선정되었습니다.
                        이 선정 과정에서 생물학적 분류 체계가 과도하게 반영되어, 개 품종만 120개가 포함되었습니다.
                        요크셔 테리어(Yorkshire terrier)와 실키 테리어(silky terrier), 시베리안 허스키(Siberian husky)와
                        알래스칸 말라뮤트(Alaskan malamute) 등 전문가도 구분하기 어려운 세분류가 다수 포함되어 있습니다.
                        반면 인간 생활의 핵심 영역인 의료, 교통, 건축 등은 소수 클래스로만 대표됩니다.
                        이러한 구조는 모델에게 "개 전문가"가 되라고 요구하는 동시에, 나머지 세계는 대충 분류하라고 지시하는 셈입니다.**

## 2
                    ISO/IEC 5259-2 평가 프레임워크

ISO/IEC 5259-2:2024는 AI/ML 학습용 데이터의 품질을 측정하기 위한 국제 표준입니다.
                    본 보고서는 DataClinic의 3단계 진단 결과를 이 표준의 품질측정기준(QM)에 매핑하여 독립적으로 판정합니다.
                    DataClinic이 측정할 수 있는 영역과 측정할 수 없는 영역을 명확히 구분하고,
                    후자에 대해서는 학술 문헌과 공개 데이터를 활용하여 보완 평가합니다.

| DataClinic 진단 단계 | 측정 내용 | 매핑되는 ISO 5259-2 QM |
| --- | --- | --- |
| Level I | 클래스 수, 샘플 수, 결측치, 픽셀 통계, 채널 분포 | Con-ML-2, Bal-ML-1, Eft-ML-1 |
| Level II | Wolfram 1,280차원 임베딩 밀도, 이상치, 유사도 | Rep-ML-1, Sim-ML-2, Div-ML-1 |
| Level III | BLIP 이미지-텍스트 122차원 밀도, 클러스터 분석 | Rep-ML-3, Div-ML-1 |

## 3
                    내재적 품질 특성 — Con-ML

| QM ID | 항목 | ISO 정의 | 판정 |
| --- | --- | --- | --- |
| Con-ML-2 | 픽셀 채널 일관성 | 이미지 채널의 통계적 분포 일관성 | ⚠️ 주의 |

## 4
                    균형성 평가 — Bal-ML

| QM ID | 항목 | 측정값 | 판정 |
| --- | --- | --- | --- |
| Bal-ML-3 | 클래스 균형 | 수치상 732~1,300 범위, 그러나 의미론적 불균형 | ❌ Fail |
| Bal-ML-2 | 특징 공간 균형 | 렌즈 특성 교차 효과로 순수 측정 불가 | — N/A |

## 5
                    식별가능성 평가 — Eft-ML

| QM ID | 항목 | 측정값 | 판정 |
| --- | --- | --- | --- |
| Eft-ML-1 | 라벨러 식별가능성 | 비전문가 AMT 라벨러의 세분류 한계 | ⚠️ 주의 |
| Eft-ML-2 | 어노테이션 완전성 | 바운딩박스 등 미진단 | — N/A |

- 라벨러 대부분이 특정 도메인(동물 분류학, 악기 전문 지식) 비전문가
- 라벨링 가이드라인이 시각적 예시 위주이며, 세분류 기준(해부학적 차이 등)이 부족
- 작업 속도 인센티브가 정확도보다 우선되는 크라우드소싱 구조
- "potpourri", "stage" 같은 추상적 WordNet synset은 시각적으로 모호하여 라벨링 자체가 어려움

## 6
                    유사성 평가 — Sim-ML

| QM ID | 항목 | 측정값 | 판정 |
| --- | --- | --- | --- |
| Sim-ML-2 | 교차 클래스 유사성 | mousetrap↔piano, shovel↔plunger 등 | ⚠️ 주의 |
| Sim-ML-1 | 클래스 내 유사성 | 1,000클래스 전수 측정 불가 | — N/A |

## 7
                    대표성 평가 — Rep-ML

| QM ID | 항목 | 측정값 | 판정 |
| --- | --- | --- | --- |
| Rep-ML-1 | L2 대표성 | 고밀도 핵심 12개 중 10개가 공작새(peacock) | ❌ Fail |
| Rep-ML-3 | L3 대표성 | 고밀도 핵심 12개 중 10개가 타란툴라(tarantula) | ❌ Fail |

## 8
                    다양성 평가 — Div-ML

| QM ID | 항목 | 측정값 | 판정 |
| --- | --- | --- | --- |
| Div-ML-1 | L2 특징 공간 다양성 | 생물 카테고리가 비생물 대비 편중 | ❌ Fail |

## 9
                    라벨 정확도 — Acc-ML

| QM ID | 항목 | 측정값 | 판정 |
| --- | --- | --- | --- |
| Acc-ML-7 | 라벨 정확도 | Northcutt et al. 2021: ~6% 오류 = ~85,870장 | ❌ Fail |

- • 파일-라벨 매핑 존재 여부
- • 채널 분포 통계
- • 임베딩 밀도 분포
- • 클래스당 샘플 수 균형
- • 이상치 탐지 (밀도 기반)

- • 라벨이 실제 이미지와 일치하는가 (6% 오류)
- • 문화적/지리적 대표성 (서구 중심)
- • 의미론적 클래스 균형 (개 120종)
- • PII/윤리적 문제 (person 카테고리)
- • 전이학습 편향 전파

## 10
                    종합 평가 및 개선 처방

| DQC 그룹 | QM ID | 항목 | 판정 | 심각도 |
| --- | --- | --- | --- | --- |
| 균형성 | Bal-ML-3 | 클래스 균형 (의미론적) | ❌ Fail | 심각 |
| 대표성 | Rep-ML-1 | L2 대표성 (공작새 지배) | ❌ Fail | 심각 |
| 대표성 | Rep-ML-3 | L3 대표성 (타란툴라 지배) | ❌ Fail | 높음 |
| 정확도 | Acc-ML-7 | 라벨 정확도 (~6% 오류) | ❌ Fail | 심각 |
| 다양성 | Div-ML-1 | L2 특징 공간 다양성 | ❌ Fail | 높음 |
| 일관성 | Con-ML-2 | 픽셀 채널 일관성 | ⚠️ 주의 | 중 |
| 유사성 | Sim-ML-2 | 교차 클래스 유사성 | ⚠️ 주의 | 중 |
| 식별가능성 | Eft-ML-1 | 라벨러 식별가능성 | ⚠️ 주의 | 중 |
| 완전성 | Com-ML-1 | 클래스 완전성 (모호한 synset) | ⚠️ 주의 | 중 |
| 균형성 | Bal-ML-2 | 특징 공간 균형 | — N/A | — |
| 유사성 | Sim-ML-1 | 클래스 내 유사성 | — N/A | — |
| 식별가능성 | Eft-ML-2 | 어노테이션 완전성 | — N/A | — |

- **Acc-ML-7:** 체계적 라벨 감사 (CleanLab 등 활용). 최소 검증 세트 50,000장 수동 검토
- **Bal-ML-3:** 개 품종 120개를 상위 카테고리로 병합하는 클래스 재구성 검토
- **Rep-ML-1/3:** 고밀도 클러스터(공작새, 타란툴라) 다운샘플링 또는 증강 다양화

- **Div-ML-1:** 비생물 클래스의 다양한 촬영 각도/배경 이미지 보강
- **Con-ML-2:** 양극단 픽셀(0, 255) 클리핑 이미지 전처리 파이프라인 구축
- **Sim-ML-2:** 시각적으로 유사한 교차 클래스 쌍에 대한 라벨 가이드라인 강화

- **Eft-ML-1:** 세분류 클래스 라벨 품질 정기 감사
- **Com-ML-1:** 추상적 synset 클래스 정의 재검토
- **Eft-ML-2:** 바운딩박스, 세그멘테이션 등 추가 어노테이션 완전성 진단

> [!callout]

- [1] ISO/IEC JTC 1/SC 42. (2024). ISO/IEC 5259-2:2024 — Part 2: Data quality measures.
- [2] DataClinic Report #123 — ImageNet. [dataclinic.ai/en/report/123](https://dataclinic.ai/en/report/123)
- [3] Deng, J., Dong, W., Socher, R., Li, L.-J., Li, K., & Fei-Fei, L. (2009). ImageNet: A Large-Scale Hierarchical Image Database. CVPR 2009.
- [4] Northcutt, C. G., Athalye, A., & Mueller, J. (2021). Pervasive Label Errors in Test Sets Destabilize Machine Learning Benchmarks. NeurIPS 2021.
- [5] Pebblous. (2025). [AI 데이터 품질 표준과 페블러스 데이터클리닉: ISO/IEC 5259-2 정량적 매핑](/project/ISO5259/5259-pbls-dataclinic-02/ko/)
- [6] Russakovsky, O. et al. (2015). ImageNet Large Scale Visual Recognition Challenge. IJCV.
