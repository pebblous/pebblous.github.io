---
name: og-image
description: Generate or regenerate OG images for blog posts — design rules, category badges, and batch operations
argument-hint: "[path-to-html | --all | --check]"
---

## Overview

`tools/generate-og-image.js`를 사용하여 OG 이미지를 생성/재생성합니다. 이 스킬은 디자인 규칙과 운영 가이드를 포함합니다.

## Usage

```bash
# 단일 파일 (자동 추출)
node tools/generate-og-image.js --from-html <path.html> --force

# 수동 지정
node tools/generate-og-image.js --light --category tech "제목" "부제목" output.png

# 전체 재생성 (rg 사용, World Model 공백 경로 별도 처리)
for f in $(rg -l 'PebblousPage.init' --glob '*.html' project/ story/ blog/); do
  node tools/generate-og-image.js --from-html "$f" --force
done
node tools/generate-og-image.js --from-html "project/World Model/world-model-comparison/en/index.html" --force
node tools/generate-og-image.js --from-html "project/World Model/world-model-comparison/ko/index.html" --force
```

## Design System (2026-03-22 개편)

### 카테고리 배지

| 카테고리 | 배지 텍스트 | 색상 | 배경 |
|---------|-----------|------|------|
| `tech` | **Tech Insight** | 파란 #3B82F6 | 밝은 슬레이트 그라데이션 |
| `business` | **Business Insight** | 오렌지 #F86825 | **회색 그라데이션** + 오렌지 섹션 바 |
| `story` | **Data Story** | 틸 #14B8A6 | 밝은 민트 그라데이션 |
| `art` | **Data Art Lab** | 오렌지 #F86825 | 따뜻한 크림 그라데이션 |

### 기본 테마: Light
- `data-theme` 속성 없으면 **light** 기본값
- `<html>` 태그의 `data-theme="dark"`만 dark로 감지
- CSS 블록의 `[data-theme="dark"]`와 혼동 방지

### 조약돌 장식 (Pebble Decorations)
- 제목 텍스트 해시 기반 **랜덤 생성** → 같은 제목 = 같은 배치
- 4~6개, 비정형 border-radius (40~60%), convex 형태
- 크기 50~230px, 투명도 6~18%
- 오른쪽 영역에 배치 (본문 텍스트와 겹치지 않음)

### Business 섹션 바
- Business 카테고리만 상단에 **6px 오렌지 바** 표시
- Art와 시각적 차별화 (둘 다 오렌지 계열이므로)

## 카테고리 감지 우선순위

```
1. articles.json의 category (authoritative)
2. HTML config.category (PebblousPage.init의 category 필드)
3. 경로 기반 fallback (최후 수단)
   - /report/, market, business → business
   - /story/, review → story
   - 기타 → tech
```

## 제목 추출 우선순위

```
1. <meta name="og-image-title"> (수동 줄바꿈 제어, &#10; → \n)
2. <meta property="og:title"> (자동)
3. <title> (자동)
4. articles.json title (fallback)
5. <h1> (최후 수단)
```

긴 제목(>50자)은 `og-image-title`으로 짧게 오버라이드 권장.

## OG 이미지 경로 규칙

- **경로**: `{post}/ko/image/index.png` 또는 `{post}/en/image/index.png`
- **루트 `{post}/image/index.png` 사용 금지** — 구버전 잔재
- EN 없으면 KO로 리디렉트

## 제목 일관성 (story-style-guide §7 참조)

OG 이미지 제목은 아래 5곳과 일치해야 합니다:
1. `config.mainTitle` + `config.subtitle`
2. `<title>` 태그
3. `og:title` 메타태그
4. `twitter:title` 메타태그
5. `articles.json` title

## 샘플 이미지

`docs/og-samples/`에 4개 카테고리 샘플 저장:
- `sample-tech-insight.png`
- `sample-business-insight.png`
- `sample-data-story.png`
- `sample-data-art-lab.png`
