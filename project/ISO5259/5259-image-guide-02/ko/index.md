---
title: 진단 데이터가 ISO 5259를 만날 때
subtitle: ISO/IEC 5259 이미지 데이터 품질 평가 가이드 — 2편: 실전
date: 2026-04-04
category: project
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 진단 데이터가 ISO 5259를 만날 때

_ISO/IEC 5259 이미지 데이터 품질 평가 가이드 — 2편: 실전_

## Executive Summary

> [!callout]
> DataClinic이 생성하는 L1 픽셀 히스토그램, L2 밀도 등고선, L3 클러스터 분포는 모두 ISO/IEC 5259-2의 품질측정기준(QM) 항목과 1:1 대응 관계를 가진다.
>                         이 기사는 세 개의 공개 데이터셋 — ImageNet(1,431,167장), WikiArt(81,444장), SpectralWaste(2,794장) — 의 실제 진단 결과를
>                         Bal-ML, Div-ML, Rep-ML 등 구체적인 QM 코드로 직접 매핑하는 방법론을 제시한다.
>                         세 데이터셋은 각각 다른 실패 패턴을 보여준다 — 규모가 품질을 보장하지 않는다(ImageNet), 편향은 숫자가 아닌 밀도에서 온다(WikiArt), 소규모 데이터셋에는 구조적 한계가 있다(SpectralWaste).

> DataClinic L1은 Com-ML-1, Con-ML-1/3, Bal-ML-1/2/3, Div-ML-1/2/3 항목을 자동으로 커버한다.
>                         L2/L3는 Sim-ML-1/2/3, Rep-ML-1, Eft-ML-1/2/3, Acc-ML-7을 신경망 기반으로 측정한다.
>                         DataClinic이 자동으로 커버하지 않는 Aud-ML, Cur-ML, Acc-ML-2(라벨 정확도) 등의 항목은
>                         메타데이터 분석, 시각적 샘플 검토, C2PA 툴킷 등 별도의 방법으로 측정할 수 있다.

> 이 기사를 읽고 나면 독자는 자신의 DataClinic 진단 리포트를 펼쳐서 "이 수치가 ISO 5259의 어떤 항목인지"를 즉시 대응시킬 수 있게 된다.
>                         DataClinic은 ISO 5259의 측정 도구이고, ISO 5259는 DataClinic의 해석 프레임이다.

## 1
                    DataClinic → ISO 5259 매핑 프레임워크

| 진단 레벨 | 무엇을 측정하는가 | ISO 5259-2 QM 항목 |
| --- | --- | --- |
| L1 — 픽셀 통계 | 클래스 수·샘플 수, 결측치, RGB 채널 분포, 해상도 범위, 클래스별 이미지 수 막대차트 | Com-ML-1,                                         Con-ML-1 Con-ML-3,                                         Bal-ML-1 Bal-ML-2 Bal-ML-3,                                         Div-ML-1 Div-ML-2 Div-ML-3 |
| L2 — 범용 임베딩 | Wolfram 1,280차원 특징 공간의 밀도 분포, 클러스터, 이상치, 유사도 쌍 | Sim-ML-1 Sim-ML-2 Sim-ML-3,                                         Rep-ML-1,                                         Eft-ML-1 Eft-ML-2 Eft-ML-3,                                         Acc-ML-7 |
| L3 — 도메인 임베딩 | BLIP 이미지-텍스트 매칭 기반 의미 밀도 분포, 클래스 간 의미 이동 | Rep-ML-1,                                         Acc-ML-2 (부분),                                         Rep-ML-1 (도메인 대표성 패턴) |
| DataClinic 미지원 | 라벨 정확도 직접 측정, 저작권·라이선스 감사, 수집 시점 메타데이터, 이식성 | Acc-ML-2,                                         Aud-ML-1,                                         Cur-ML-1,                                         Rel-ML-1,                                         Tml-ML-1,                                         Por-ML-1 |

- Acc-ML-2 (라벨 정확도) —
                            DataClinic L3의 저밀도 샘플을 추출하여 시각적으로 검토한다. 저밀도 = 해당 클래스의 전형에서 멀리 떨어진 샘플 = 오라벨 후보다.
                            Northcutt et al.(2021)이 ImageNet에서 이 방식으로 85,870건의 오류를 발견했다.
- Aud-ML-1 (저작권·라이선스 감사) —
                            C2PA 메타데이터 툴킷으로 이미지별 출처 서명을 확인한다. WikiArt처럼 저작권 민감 데이터셋에서 특히 중요하다.
- Cur-ML-1 (특징 최신성) —
                            이미지 EXIF 메타데이터에서 촬영 연도를 추출하거나, 크롤링 수집 로그의 타임스탬프를 분석한다.
- Sim-ML-1 (중복 이미지) —
                            pHash(지각적 해시) 기반 유사도로 거의 동일한 이미지 쌍을 탐지한다. 소규모 데이터셋에서 특히 중요하다.

## 2
                    ImageNet — 규모가 품질을 보장하지 않는다

| DataClinic 진단 차트·수치 | ISO 5259-2 QM 코드 | 판정 |
| --- | --- | --- |
| L1 — 전체 이미지 수 1,431,167장, 결측치 0건 | Com-ML-1 (값 완전성) | Pass |
| L1 — 개 품종 120클래스 / 전체 1,000클래스의 12%, 의미론적 과밀집 | Bal-ML-3 (범주 간 이미지 균형) | Fail |
| L1 — Blue 채널 pixel=255에서 ~16억 스파이크, pixel=0에서 ~8.3억 스파이크 | Cre-ML-1 (픽셀 품질) | 주의 |
| L2 — 밀도 등고선에서 공작새(peacock) 클러스터가 생물 특징 공간을 지배 | Sim-ML-1 (샘플 유사성) | Fail |
| L3 — 공작새 중심 임베딩이 타란툴라 등 비생물 클래스로 이동하는 패턴 | Rep-ML-1 (도메인 대표성) | Fail |
| L3 — 저밀도 샘플(이상치) 집중 분석 → Northcutt et al.(2021) 85,870건 오류 교차검증 | Acc-ML-7 (라벨 이상 대리지표) | 주의 |

### Bal-ML-3: 수치 균형과 의미 균형의 차이

### Sim-ML-1 vs Rep-ML-1: L2와 L3가 잡는 것의 차이

### Acc-ML-2: DataClinic 외의 방법으로 라벨 정확도를 측정하는 방법

## 3
                    WikiArt — 편향은 숫자가 아닌 밀도에서 온다

| DataClinic 진단 차트·수치 | ISO 5259-2 QM 코드 | 판정 |
| --- | --- | --- |
| L1 — Impressionism 13,060장 vs Analytical_Cubism 98장 (133:1 비율) | Bal-ML-3 (범주 간 이미지 균형) | Fail |
| L1 — Red 채널 히스토그램 이중봉 분포 (인상파 붉은 톤 + 고전파 어두운 톤) | Cre-ML-1 (픽셀 품질) | Fail |
| L2 — Pop Art 클러스터가 나머지 사조와 분리된 고립 군집 형성 | Sim-ML-1 (샘플 유사성) | Fail |
| L3 — Antoine Blanchard(파리 거리 화가)가 인상파 구역에서 초고밀도 집중 | Rep-ML-1 (도메인 대표성) | 주의 |
| L3 — 인상파 임베딩 공간 전체가 블랑샤르의 시각적 특성으로 편향 | Rep-ML-1 (도메인 대표성) | Fail |
| L1 — 전체 81,444장, 결측치 0건 (완전성 자체는 양호) | Com-ML-1 (값 완전성) | Pass |

### Cre-ML-1: Red 채널 이중봉이 말하는 것

### L2 vs L3: 두 렌즈가 잡는 것이 다르다

### Aud-ML-1: WikiArt의 저작권 문제를 어떻게 측정하는가

## 4
                    SpectralWaste — 소규모 산업 데이터의 구조적 한계

| DataClinic 진단 차트·수치 | ISO 5259-2 QM 코드 | 판정 |
| --- | --- | --- |
| L1 — 전체 2,794장 (산업 배포 기준 충분한 절대 수량 미달) | Com-ML-1 (값 완전성 / 수량) | Fail |
| L1 — video_tape 646장 vs filament 33장 (19.6:1 불균형) | Bal-ML-3 (범주 간 이미지 균형) | Fail |
| L1 — 전체 결측치 0건, 라벨 완전성 100% | Com-ML-3 Com-ML-5 | Pass |
| L2 — 전체 임베딩이 단일 구름으로 밀집 (환경 다양성 없음) | Div-ML-1 (환경 다양성) | Fail |
| L3 — 고밀도 집중 → 컨베이어 벨트 단일 환경만 대표, 실제 재활용 현장 미반영 | Rep-ML-1 (도메인 대표성) | Fail |
| L2 — filament 클래스의 샘플이 basket·bag 임베딩 구역과 혼재 | Con-ML-2 (라벨 일관성) | 주의 |

### Com-ML-1 + Bal-ML-3: 수량 부족과 불균형의 이중고

### Div-ML-1: 임베딩 밀집이 보여주는 환경 다양성 부재

### Div-ML-1: 환경 다양성을 높이는 방법론

## 5
                    세 사례 비교 매트릭스

| QM 항목 | QM ID | ImageNet | WikiArt | SpectralWaste | 측정 방법 |
| --- | --- | --- | --- | --- | --- |
| 정확성 (Accuracy) |  |  |  |  |  |
| 라벨 정확도 | Acc-ML-2 | Fail~6% 오류 | 수동 검토 필요 | 수동 검토 필요 | L3 저밀도 샘플 시각 검토 |
| 라벨 이상 탐지 | Acc-ML-7 | 주의 | 주의 | 주의 | DataClinic L3 (자동 대리지표) |
| 완전성 (Completeness) |  |  |  |  |  |
| 값 완전성 | Com-ML-1 | Pass | Pass | Fail수량 부족 | DataClinic L1 (자동) |
| 균형성 (Balance) |  |  |  |  |  |
| 클래스 균형 | Bal-ML-3 | Fail의미론적 편중 | Fail133:1 | Fail19.6:1 | DataClinic L1 (자동) |
| 다양성 (Diversity) |  |  |  |  |  |
| 환경 다양성 | Div-ML-1 | 주의 | 주의 | Fail | DataClinic L2 (자동) |
| 샘플 유사성 | Sim-ML-1 | Fail공작새 지배 | Fail팝 아트 단층선 | 주의 | DataClinic L2 (자동) |
| 대표성 (Representativeness) |  |  |  |  |  |
| 도메인 대표성 | Rep-ML-1 | Fail | Fail블랑샤르 편향 | Fail단일 환경 | DataClinic L3 (자동) |
| 일관성 (Consistency) |  |  |  |  |  |
| 픽셀 품질 | Cre-ML-1 | 주의Blue 스파이크 | FailRed 이중봉 | Pass | DataClinic L1 (자동) |
| 유사성 (Similarity) |  |  |  |  |  |
| 중복 이미지 | Sim-ML-1 | Pass | 주의 | 수동 필요 | pHash 분석 보완 |
| 식별가능성 (Identifiability) |  |  |  |  |  |
| 도메인 대표성 (출처 편향) | Rep-ML-1 | 해당 없음 | 주의블랑샤르 패턴 | 해당 없음 | DataClinic L3 (부분) |
| 감사가능성 (Auditability) |  |  |  |  |  |
| 저작권·라이선스 | Aud-ML-1 | 수동 필요 | Fail저작권 위험 | 수동 필요 | C2PA 메타데이터 분석 |
| 최신성 (Currentness) |  |  |  |  |  |
| 특징 최신성 | Cur-ML-1 | 주의2009년 수집 | 주의 | 수동 필요 | EXIF 타임스탬프 분석 |
| 유효성 (Effectiveness) |  |  |  |  |  |
| 환경 다양성 | Div-ML-1 | Pass | 주의 | Fail단일 환경 | DataClinic L2/L3 + 보완 |

## 6
                    결론 — 두 레이어의 책임 분리

> [!callout]
