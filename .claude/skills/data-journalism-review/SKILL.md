---
name: data-journalism-review
description: Evaluate a DataClinic story from a Data Journalism perspective — content quality, impact, and editorial depth
argument-hint: "[path-to-html]"
---

When this skill is invoked with an HTML file path:

## Overview

DataClinic 스토리를 **데이터 저널리즘** 관점에서 평가합니다. HTML/CSS 규칙 검증(`/review-dataclinic-story`)과는 별개로, **콘텐츠의 편집 품질과 임팩트**를 평가합니다.

## 5-Point Checklist

### 1. So What 테스트 — 임팩트 시나리오
- 진단 결과 나열에 그치지 않고, **실전 임팩트 시나리오**가 있는가?
- 독자가 "그래서 왜 중요한데?"라고 물을 여지가 없어야 함
- **평가**: ✅ 있음 / ⚠️ 부분적 / ❌ 없음

**구현 패턴 — `misclass-scenario` 인포그래픽:**

저밀도 이미지(AI가 못 본 조건) → 고밀도 이미지(AI가 가장 확신하는 패턴)로 오분류되는 시각적 시나리오를 만든다.

핵심 원칙:
- **동일 환경 매칭**: 두 이미지의 촬영 조건(배경, 각도, 환경)이 유사해야 시각적 설득력이 있음. 환경이 너무 다르면 "왜 혼동하지?" 반문이 생김
- **팩트 체크 필수**: 파라미터 코드(cm, en, bg 등)의 구체적 의미가 확인되지 않으면 단정하지 말 것. "야간/역광" 대신 "극단 환경"처럼 일반화
- **이미지로 설명 안 되면 텍스트로**: 동일 환경 이미지를 찾을 수 없으면 무리해서 넣지 말고 텍스트 한 문단으로 간결하게

참조 구현:
- **#225** (3종): 저밀도 K9(cm3·en1·bg5) → 동일 조건 M35A2(cm3·en1·bg5) 오판 — `story/dataclinic-report-225-pbls-military3-story-pb/ko/` `#field-scenario`
- **#224** (10종): 저밀도 T-80U(적 전차, 폭우) → 고밀도 K-9(아군 자주포, 안개) 피아식별 실패 — `story/dataclinic-report-224-pbls-military-story-pb/ko/` `#field-scenario`
- **역방향 텍스트**: 이미지 매칭이 안 되면 "반대 방향의 오류도 가능합니다" 텍스트로 보완 (#225 참조)

### 2. 비교 프레임 — 맥락 제공
- 동일 도메인 다른 데이터셋과 점수를 **나란히 비교**하는가?
- 예: "#225 3종 79점 vs #224 10종 64점 — 왜 클래스가 적은 쪽이 더 높은가?"
- 비교 대상이 없으면 독자는 79점이 좋은 건지 나쁜 건지 판단할 수 없음
- **평가**: ✅ 있음 / ⚠️ 부분적 / ❌ 없음

### 3. 시각적 증거 — 눈으로 확인
- 핵심 주장마다 독자가 **직접 눈으로 확인**할 이미지가 병행되는가?
- L1: 실제 샘플 + 평균 이미지 나란히 (`class-card` 또는 `dual-img-row`)
- L2/L3: 밀도 차트 + 대표 이미지 나란히 (`density-card` with `den-imgs`)
- 이상치 분석: 고밀도 vs 저밀도 실제 샘플 비교
- **평가**: ✅ 완전 / ⚠️ 일부 누락 / ❌ 차트만 있음

### 4. 재현 가능성 — 독자 탐색
- **Pebbloscope 스냅샷 링크**가 있어 독자가 직접 데이터를 탐색할 수 있는가?
- DataClinic 리포트 원본 링크(`dataclinic.ai/en/report/{id}`)가 있는가?
- 독자가 직접 검증할 수 있는 경로가 열려 있는가?
- **평가**: ✅ 있음 / ⚠️ 부분적 / ❌ 없음

### 5. 출처 투명성 — 데이터 원천
- 데이터셋 출처 플랫폼 링크 (AI Hub, Kaggle 등) — 자사 데이터(PBLS_*)는 생성 배경 설명으로 대체
- collage 이미지로 데이터셋 전체 모습 제공
- 클래스 수, 이미지 수, 생성 파라미터 등 기본 스펙 명시
- **평가**: ✅ 완전 / ⚠️ 부분적 / ❌ 없음

## Steps

### 1. HTML 파일 읽기
```bash
# Read the HTML file
Read <path>
```

### 2. 5개 항목 평가

각 항목별로:
- 해당 콘텐츠가 있는 위치 (section ID, line number)
- 현재 상태 평가 (✅ / ⚠️ / ❌)
- 구체적 개선 제안 (❌ 또는 ⚠️인 경우)

### 3. 결과 출력

```markdown
## 📰 Data Journalism Review — {포스트 제목}

| # | 항목 | 평가 | 비고 |
|---|------|------|------|
| 1 | So What 테스트 | ⚠️ | 임팩트 시나리오 부분적 |
| 2 | 비교 프레임 | ❌ | 동일 도메인 비교 없음 |
| 3 | 시각적 증거 | ✅ | L1/L2/L3 모두 대표이미지 병행 |
| 4 | 재현 가능성 | ✅ | Pebbloscope + DataClinic 링크 |
| 5 | 출처 투명성 | ✅ | collage + 스펙 명시 |

**총점: 3/5 ✅, 1 ⚠️, 1 ❌**

### 개선 제안

#### 1. [So What] 임팩트 시나리오 추가
- 현재: L2 분포가 다봉형이라는 진단으로 끝남
- 제안: "카메라 각도별 서브클러스터가 존재하면, 특정 각도에서 촬영된 K9를 AI가 M35A2로 오인할 수 있다"
- 삽입 위치: conclusion 섹션

#### 2. [비교 프레임] 동일 도메인 점수 비교
- 제안: "#224 (10종, 64점) vs #225 (3종, 79점)" 비교 카드 추가
- 삽입 위치: executive-summary 또는 conclusion
```

### 4. 개선 실행 여부

사용자에게 개선 제안을 보여주고, 실행 여부를 물음. 자동 수정하지 않음.

## 언제 사용하는가

- 새 DataClinic 스토리 PR 리뷰 시, `/review-dataclinic-story` 후에 선택적으로 실행
- 기존 스토리 품질 개선 시
- 콘텐츠 전략 논의 시
