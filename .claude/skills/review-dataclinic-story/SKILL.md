---
name: review-dataclinic-story
description: Review a DataClinic story PR for quality and convention compliance
argument-hint: "[PR-number]"
---

When this skill is invoked with a PR number:

## Overview

DataClinic 스토리 PR을 체크리스트 기반으로 리뷰합니다. NanoClaw가 생성한 포스트의 품질과 규칙 준수 여부를 검증합니다.

## Steps

### 1. PR 정보 수집

```bash
gh pr view {PR-number}
gh pr diff {PR-number}
```

- 변경된 파일 목록 확인
- 새 HTML 파일 경로 식별
- articles.json 변경 사항 확인

### 2. HTML 파일 읽기 및 체크리스트 검증

새로 추가된 HTML 파일을 읽고, 아래 체크리스트를 **하나씩** 검증합니다.

---

## 체크리스트 (22항목)

### A. PebblousPage.init config (5항목)

| # | 항목 | 검증 방법 |
|---|------|-----------|
| A1 | `mainTitle` 존재 | config에 `mainTitle:` 필드 확인 |
| A2 | `subtitle` 존재 | config에 `subtitle:` 필드 확인 |
| A3 | `category: "story"` | DataClinic 스토리는 항상 story |
| A4 | `publishDate` ISO 8601 | `"YYYY-MM-DD"` 형식 |
| A5 | `articlePath` 정확 | 실제 파일 경로와 일치 |

### B. 구조 & TOC (4항목)

| # | 항목 | 검증 방법 |
|---|------|-----------|
| B1 | `<h1 id="page-h1-title">` 비어있음 | Hero h1이 빈 태그인지 확인 (PebblousPage가 동적 렌더링) |
| B2 | TOC: `<ul id="toc-links">` 구조 | `<ul id="toc-links"><li><a>` 형태인지 확인. `<nav>` 직접 사용 금지 |
| B3 | Executive Summary ID: `executive-summary` | `id="executive-summary"` 정확히 일치 |
| B4 | Executive Summary에 DataClinic 리포트 URL | `dataclinic.ai/en/report/{reportId}` 링크 포함 |

### C. 데이터셋 소개 섹션 (3항목)

| # | 항목 | 검증 방법 |
|---|------|-----------|
| C1 | **Collage 이미지 존재** | `cdn.dataclinic.ai/...collage.png` img 태그 확인 |
| C2 | Collage 크기 제한 클래스 | `max-w-[560px] max-h-[480px] object-contain mx-auto` 포함 |
| C3 | 데이터셋 출처 링크 | Kaggle/AIHub/기타 출처 `<a>` 태그. 자사 데이터(PBLS_*)는 면제 |
| C4 | **L1 대표이미지 병행** | 평균 이미지(meanimage) 옆에 실제 샘플 이미지가 나란히 배치 (`class-card` 또는 `dual-img-row`). Issue #20 참조 |
| C5 | **L2/L3 밀도+대표이미지 병행** | 밀도 차트 옆에 대표 이미지가 2:1 비율로 배치 (`density-card` with `den-imgs`). story-style-guide §8 참조 |

### D. CDN 이미지 규칙 (3항목)

| # | 항목 | 검증 방법 |
|---|------|-----------|
| D1 | 분석 이미지 크기 제한 | PCA, 밀도 분포 등 단독 배치 이미지에 `max-w-[560px] max-h-[480px]` |
| D2 | L3 경로 버전 확인 | `level-3.X` 경로가 실제 CDN에서 접근 가능한지 확인. API 레포 `scripts/check_chart_images.md` 참조 |
| D3 | 그리드 내 이미지 제외 | `grid-cols-*` 안의 이미지는 크기 제한 불필요 (셀 크기로 이미 제한됨) |

### E. SEO & Meta (7항목)

| # | 항목 | 검증 방법 |
|---|------|-----------|
| E1 | FAQ: `config.faqs` only | `<head>`에 FAQPage JSON-LD 없음. config.faqs 배열만 사용 |
| E2 | Hero 날짜: `YYYY.MM` | `2026.03` 형식. `2026년 3월` 등 한글 날짜 금지 |
| E3 | OG image 크기 | `og:image:width` 1200, `og:image:height` 630 |
| E4 | canonical URL 정확 | `https://blog.pebblous.ai/` + 파일 경로 |
| E5 | **제목 일관성** | `config.mainTitle` = `og:title` 앞부분 = `<title>` 앞부분 = `articles.json title` 앞부분 = OG 이미지 제목. 모두 동일한 메인 제목이어야 함 |
| E6 | **부제목 일관성** | `config.subtitle` = `og:title` 뒷부분(— 이후) = `articles.json title` 뒷부분. 부제목도 일관되어야 함 |
| E7 | **OG 이미지 제목 일치** | OG 이미지에 렌더링된 제목/부제목이 og:title과 일치하는지 확인. `og-image-title` meta 사용 시 줄바꿈만 다르고 내용은 동일해야 함 |

### F. articles.json (3항목)

| # | 항목 | 검증 방법 |
|---|------|-----------|
| F1 | 신규 항목 필수 필드 | `id`, `title`, `description`, `category`, `date`, `path`, `image`, `published`, `tags`, `language` |
| F2 | `language` 필드 존재 | `"language": "ko"` 또는 `"en"` |
| F3 | **기존 항목 미변경** | diff에서 기존 항목의 포맷 변경, 필드 추가/제거 없는지 확인 |

---

## 검증 방법: L3 CDN 경로

L3 이미지 경로(`level-3.X`)가 있으면 실제 접근 가능한지 확인:

```bash
# WebFetch로 확인 (200 OK vs 403 Forbidden)
# 또는 dataclinic-api-production 레포의 scripts/check_chart_images.md 참조
```

데이터셋별 올바른 L3 버전:
- 이 정보는 변경될 수 있으므로, **반드시 API 레포에서 확인** — 하드코딩 금지

## 출력 형식

```markdown
## 🔍 DataClinic 스토리 리뷰 — PR #{number}

### 체크리스트 결과

| 카테고리 | Pass | Fail | 항목 |
|----------|------|------|------|
| A. Config | 5/5 | 0 | |
| B. 구조 & TOC | 3/4 | 1 | B2: TOC 구조 비표준 |
| C. 데이터셋 | 2/3 | 1 | C1: collage 누락 |
| D. CDN 이미지 | 3/3 | 0 | |
| E. SEO & Meta | 4/4 | 0 | |
| F. articles.json | 2/3 | 1 | F3: 기존 항목 리포맷 |
| **총계** | **19/22** | **3** | |

### ❌ 수정 필요 (N건)

#### 1. [B2] TOC 구조 비표준
- 현재: `<nav id="toc-links"><a>...</a></nav>`
- 수정: `<ul id="toc-links"><li><a class="... themeable-toc-link">...</a></li></ul>`

#### 2. [C1] Collage 이미지 누락
- 추가 위치: 데이터셋 소개 섹션
- URL: `https://cdn.dataclinic.ai/{collageImagePath}`
- 참고: Issue #11

...

### ✅ 잘 반영된 항목
- [A1-A5] config 필수 필드 완비
- [D1] CDN 이미지 크기 제한 적용
- [E1] FAQ config.faqs only
...
```

### 3. PR 코멘트 게시

리뷰 결과를 `gh pr comment {PR-number} --body "..."` 로 PR에 게시합니다.

참고 잘 작성된 스토리 링크를 항상 포함:
- https://blog.pebblous.ai/story/report11-story/ko/

### 4. 판정

- **Fail 0건**: "승인 권장" 멘트 포함
- **Fail 1~3건**: "수정 후 재요청" + 구체적 수정 가이드
- **Fail 4건+**: "전면 재작성 검토" + 근본 원인 분석

### 5. Data Journalism 리뷰 (선택)

기술 체크리스트 통과 후, 콘텐츠 품질을 심화 평가하려면:
```
/data-journalism-review <path>
```
임팩트 시나리오, 비교 프레임, 시각적 증거, 재현 가능성, 출처 투명성 5개 항목 평가.
