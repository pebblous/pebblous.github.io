# ISO/IEC 5259-2:2024 QM 코드 레퍼런스

> **목적**: 블로그에서 ISO/IEC 5259-2 QM 코드를 인용할 때 정확한 코드를 사용하기 위한 정본 문서.
> **최종 업데이트**: 2026-04-29
> **KOLAS 인증**: 2026-05-27 현장평가 대비

---

## 1. 자주 혼동되는 QM 코드 매핑

### ⛔ 이 표를 먼저 확인할 것

블로그에서 반복적으로 잘못 인용된 코드들. 2026-04-29 정정 메모(v0.1) 기준.

| 블로그 맥락 | ❌ 잘못 사용된 코드 | ✅ 정확한 코드 | 표준 근거 |
|------------|-------------------|--------------|----------|
| 클래스 불균형 (133:1 등) | Bal-ML-1 | **Bal-ML-3** | §6.5.2.2 Table 16 — Balance of images between categories |
| 픽셀 품질 (블러, 스파이크) | Con-ML-1 | **Cre-ML-1** | §6.2.4.2 Table 4 — Values credibility (BRISQUE·블러·워터마크) |
| RGB/Grayscale 혼재 | Con-ML-1 | **Con-ML-3** | §6.2.3.2 Table 3 — Data format consistency |
| 클러스터 분리·단층선 | Div-ML-2 | **Sim-ML-1** | §6.5.8.2 Table 22 — Sample similarity (클러스터링 결과 활용) |
| 도메인 대표성 편향 | Idn-ML-1 | **Rep-ML-1** | §6.5.7.2 Table 21 — Representativeness ratio |
| 환경 다양성 결여 | Eft-ML-3 | **Div-ML-1** | §6.5.3.2 Table 17 — Diversity (환경·조건 다양성) |

### 혼동 원인

- **Bal-ML-1** = Brightness balance (밝기 균형). 클래스 균형이 아님
- **Con-ML-1** = Data record consistency (중복 레코드 비율). 픽셀 일관성이 아님
- **Div-ML-2** = Relative label abundance (라벨 분포). 클러스터 다양성이 아님
- **Idn-ML-1** = Identifiability ratio (PII 식별 가능 비율). 도메인 출처가 아님
- **Eft-ML-3** = Label effectiveness (라벨 적정성). 수집 효율성이 아님

---

## 2. 주요 QM 코드 정의 (이미지 데이터셋 기준)

### 2.1 완전성 (Completeness) — §6.2.1

| 코드 | 이름 | 정의 |
|------|------|------|
| Com-ML-1 | File integrity | 파일 손상 없이 읽을 수 있는 비율 |
| Com-ML-3 | Metadata completeness | 메타데이터 필드 완성도 |
| Com-ML-5 | Label completeness | 라벨이 할당된 샘플 비율 |

### 2.2 일관성 (Consistency) — §6.2.3

| 코드 | 이름 | 정의 |
|------|------|------|
| Con-ML-1 | Data record consistency | 1 − (중복 레코드 / 전체) |
| Con-ML-3 | Data format consistency | 포맷(채널·해상도·비트) 통일성 |

### 2.3 신뢰성 (Credibility) — §6.2.4

| 코드 | 이름 | 정의 |
|------|------|------|
| Cre-ML-1 | Values credibility | 픽셀 품질 (BRISQUE·블러·워터마크·노이즈) |

### 2.4 균형성 (Balance) — §6.5.2

| 코드 | 이름 | 정의 |
|------|------|------|
| Bal-ML-1 | Brightness balance | 밝기 분포 균등성 (⚠️ 클래스 균형 아님) |
| Bal-ML-2 | Resolution balance | 해상도 분포 균등성 |
| **Bal-ML-3** | **Balance of images between categories** | **범주 간 이미지 수 균형 (= 클래스 균형)** |

### 2.5 다양성 (Diversity) — §6.5.3

| 코드 | 이름 | 정의 |
|------|------|------|
| **Div-ML-1** | **Diversity** | **환경·조건·배경 다양성** |
| Div-ML-2 | Relative label abundance | 특정 라벨 보유 비율 (⚠️ 클러스터 다양성 아님) |
| Div-ML-3 | Label diversity | 라벨 종류 다양성 (Shannon 엔트로피) |

### 2.6 효과성 (Effectiveness) — §6.5.4

| 코드 | 이름 | 정의 |
|------|------|------|
| Eft-ML-1 | Feature effectiveness | 특징 분리도 |
| Eft-ML-2 | Feature relevance | 특징 관련도 |
| Eft-ML-3 | Label effectiveness | 라벨 적정성 (⚠️ 수집 효율성 아님) |

### 2.7 식별성 (Identifiability) — §6.5.5

| 코드 | 이름 | 정의 |
|------|------|------|
| Idn-ML-1 | Identifiability ratio | PII 식별 가능 레코드 비율 (⚠️ 도메인 출처 아님) |

### 2.8 대표성 (Representativeness) — §6.5.7

| 코드 | 이름 | 정의 |
|------|------|------|
| **Rep-ML-1** | **Representativeness ratio** | **도메인 대표성 (출처 편향 포함)** |
| Rep-ML-3 | Feature representativeness | 특징 대표성 |

### 2.9 유사성 (Similarity) — §6.5.8

| 코드 | 이름 | 정의 |
|------|------|------|
| **Sim-ML-1** | **Sample similarity** | **샘플 간 유사도 (클러스터링 결과 활용) = 클러스터 분리** |
| Sim-ML-2 | Samples tightness | 밀집도 (클러스터 내 응집도) |
| Sim-ML-3 | Sample separability | 클래스 간 분리도 |

### 2.10 정확성 (Accuracy) — §6.5.1

| 코드 | 이름 | 정의 |
|------|------|------|
| Acc-ML-7 | Label accuracy | 라벨 정확도 |

---

## 3. DataClinic 레벨 → QM 매핑

| DataClinic 레벨 | 측정 내용 | 대응 QM |
|----------------|----------|---------|
| L1 정합성 | 파일 무결성, 크기/채널 통일, 클래스 균형 | Com-ML-1/3/5, Con-ML-3, **Bal-ML-3**, Cre-ML-1 |
| L2 범용 렌즈 | Wolfram 1,280차원 임베딩 분포 | **Sim-ML-1/2/3**, Rep-ML-1/3, Div-ML-1 |
| L3 도메인 렌즈 | 48차원 특화 임베딩 분포 | Eft-ML-1/2, **Sim-ML-1/2/3**, Rep-ML-1 |

---

## 4. 정정 이력

### 2026-04-29 — 정정 메모 v0.1 (KOLAS 인증 준비)

| 정정 | 변경 전 | 변경 후 | 영향 글 | 상태 |
|------|---------|---------|---------|------|
| 1 ★★★ | Bal-ML-1 (클래스 균형) | Bal-ML-3 | 6개 글 | 진행 중 |
| 2 ★★★ | Con-ML-1 (픽셀 일관성) | Cre-ML-1 / Con-ML-3 | 3개 글 | 대기 |
| 3 ★★★ | Div-ML-2 (클러스터 다양성) | Sim-ML-1 | 4개 글 | 진행 중 |
| 4 ★★ | Idn-ML-1 (데이터 출처) | Rep-ML-1 | 2개 글 | 대기 |
| 5 ★★ | Eft-ML-3 (수집 효율성) | Div-ML-1 | 2개 글 | 대기 |
| 6 일반 | Bal-ML-1 수치/의미 이분법 | Bal-ML-3 + Rep-ML-1 | 1개 글 | 대기 |

완료된 글:
- ✅ wikiart-iso5259-eval KO+EN (정정 1, 3)

---

## 5. 블로그 작성 규칙

### ISO 5259 관련 글 작성 시 필수

1. **이 문서를 먼저 Read** — QM 코드 인용 전 §1 혼동 매핑표 확인
2. **표준 인용 문구 삽입** — 각 글의 Executive Summary 또는 매핑표 앞에:

```html
<div class="key-insight">
    <p class="themeable-text leading-relaxed text-sm">
        본 글의 QM 코드 인용은 ISO/IEC 5259-2:2024 §6.X.Y Table N의 정의를 따른다.
        페블러스 자체 측정 방법론(예: 클래스 균형의 의미론적 해석)은 표준 코드와
        별도로 도메인 분석 차원에서 추가 제시된다.
    </p>
</div>
```

3. **"클래스 균형" = Bal-ML-3** — Bal-ML-1이 아님 (가장 빈번한 오류)
4. **"클러스터 분리" = Sim-ML-1** — Div-ML-2가 아님
5. **"도메인 대표성" = Rep-ML-1** — Idn-ML-1이 아님

---

*원본 정정 메모: `블로그_QM코드_정정메모_v0.1.md` (KOLAS 인증 준비팀, 2026-04-29)*
