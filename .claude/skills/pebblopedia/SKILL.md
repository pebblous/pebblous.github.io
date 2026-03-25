---
name: pebblopedia
description: PebbloPedia 시리즈 작성 및 리뷰 — 하나의 AI·데이터 개념을 다섯 단계 난이도로 설명하는 지식 시리즈
argument-hint: "[topic] or [review path-to-html]"
---

## Overview

**PebbloPedia(페블로피디아)**는 하나의 AI·데이터 개념을 다섯 단계 난이도로 설명하는 페블러스의 지식 시리즈입니다.

## 5단계 구조

| 단계 | 이모지 | 대상 | 설명 |
|------|--------|------|------|
| 1단계 | 🧒 | 초등학생 | 비유와 이야기로 쉽게. 일상 사물로 설명 |
| 2단계 | 🎒 | 중고등학생 | 원리 탐구. 핵심 개념과 대표 사례 연결 |
| 3단계 | 🎓 | 전공 대학생 | 기술 스택. 프레임워크, 모델, 아키텍처 |
| 4단계 | 🔬 | 전문가 | 최신 연구, 미해결 문제, 산업 현황 |
| 5단계 | 🧙 | 위자드 | 위자드의 관점에서 쓰는 시적인 인사이트 |

## 제목 규칙

```
mainTitle: "{주제}"
subtitle: "[페블로피디아] 어린이부터 전문가까지, 다섯 단계 난이도로 배우는 핫 키워드"
pageTitle: "{주제} — [페블로피디아] 어린이부터 전문가까지, 다섯 단계 난이도로 배우는 핫 키워드 | 페블러스"
```

- mainTitle은 주제만 (예: "피지컬 AI", "Agentic AI")
- subtitle에 [페블로피디아] 시리즈 표기
- og-image-title은 mainTitle만 (짧게)

## 디렉토리 구조

```
pebblopedia/{topic}/
├── index.html          # → ./ko/ 리디렉트
├── ko/
│   ├── index.html      # 한국어 본문
│   └── image/
│       └── index.png   # OG 이미지 (자동 생성)
└── en/                  # (선택) 영문 버전
    └── index.html
```

## HTML 구조 (표준 준수)

```html
<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]">
    <div class="lg:flex lg:gap-8 lg:justify-center lg:items-start">

        <!-- TOC (표준 nav, sticky) -->
        <nav class="hidden lg:block lg:w-[240px] lg:shrink-0 sticky top-20 self-start">
            <h3 class="font-bold themeable-heading mb-4 text-lg">목차</h3>
            <ul id="toc-links" class="space-y-3 text-sm border-l-2 themeable-toc-border">
                <li><a href="#executive-summary" class="block pl-4 -ml-px border-l-2 border-transparent hover:border-orange-500 themeable-toc-link">이 글 소개</a></li>
                <li><a href="#level-1" class="block pl-4 ...">🧒 1단계: 초등학생</a></li>
                <li><a href="#level-2" ...>🎒 2단계: 중고등학생</a></li>
                <li><a href="#level-3" ...>🎓 3단계: 전공 대학생</a></li>
                <li><a href="#level-4" ...>🔬 4단계: 전문가</a></li>
                <li><a href="#level-5" ...>🧙 5단계: 위자드</a></li>
            </ul>
        </nav>

        <!-- Main -->
        <main class="max-w-[800px] px-4 sm:px-6">
            <!-- Hero (표준: text-left, main 안) -->
            <header class="text-left mb-12">
                <h1 id="page-h1-title" class="text-4xl md:text-5xl font-bold themeable-heading mb-4 leading-tight" style="line-height: 1.4;"></h1>
                <p class="text-sm themeable-muted">YYYY.MM · (주)페블러스 데이터 커뮤니케이션팀</p>
                <p class="text-sm themeable-muted mt-1">읽는 시간: ~N분 · <a href="../en/">English</a></p>
                <div id="share-buttons-placeholder" class="flex justify-start"></div>
            </header>

            <!-- 이 글 소개 (Executive Summary) -->
            <section id="executive-summary" class="mb-16 fade-in-card">
                <h2>이 글 소개</h2>
                <div class="key-insight">...</div>
                <!-- 5단계 가이드 카드 그리드 -->
            </section>

            <!-- 5개 레벨 섹션 -->
            <section id="level-1" class="mb-16 fade-in-card">...</section>
            <section id="level-2" class="mb-16 fade-in-card">...</section>
            <section id="level-3" class="mb-16 fade-in-card">...</section>
            <section id="level-4" class="mb-16 fade-in-card">...</section>
            <section id="level-5" class="mb-16 fade-in-card">...</section>

            <!-- 시리즈 안내 -->
            <section class="mb-12">
                <div class="themeable-card" style="border: 1.5px solid #a855f7;">
                    📚 PebbloPedia 시리즈 안내 + 다음 편 예고
                </div>
            </section>
        </main>
    </div>
</div>
```

## 각 레벨 섹션 구조

```html
<section id="level-{N}" class="mb-16 fade-in-card">
    <!-- 레벨 번호 뱃지 -->
    <div class="flex items-center gap-3 mb-6">
        <span class="number-badge">{N}</span>
        <h2 class="text-3xl font-bold themeable-heading">{레벨 제목}</h2>
    </div>

    <!-- 레벨 뱃지 (대상 표시) -->
    <div class="level-badge level-{N}">
        <span class="level-emoji">{이모지}</span>
        <span>{대상 설명}</span>
    </div>

    <!-- 본문 -->
    <div class="themeable-text leading-relaxed" style="line-height: 2.0;">
        ...
    </div>
</section>
```

## 레벨별 색상 (CSS)

```css
.level-section.level-1 { border-left-color: #22c55e; }  /* 초록 — 쉬움 */
.level-section.level-2 { border-left-color: #3b82f6; }  /* 파랑 — 탐구 */
.level-section.level-3 { border-left-color: #f59e0b; }  /* 노랑 — 기술 */
.level-section.level-4 { border-left-color: #ef4444; }  /* 빨강 → 오렌지 #F86825 권장 */
.level-section.level-5 { border-left-color: #a855f7; }  /* 보라 — 위자드 */
```

## 리뷰 체크리스트

PebbloPedia 포스트 리뷰 시:

### 구조
- [ ] 5개 레벨 섹션 모두 존재 (level-1 ~ level-5)
- [ ] Executive Summary에 5단계 가이드 카드 포함
- [ ] 5단계가 "위자드"(🧙)로 명명
- [ ] TOC: `id="toc-links"` + 표준 `border-l-2` 구조 + 스크롤 연동
- [ ] Hero: `<main>` 안, `text-left`, `h1 text-4xl md:text-5xl font-bold`
- [ ] 레이아웃: `container max-w-[1400px]` > `flex` > `nav sticky` + `main max-w-[800px]`

### 콘텐츠
- [ ] 1단계: 비유 중심, 전문 용어 없음
- [ ] 2단계: 원리 설명, 대표 기업/사례 연결
- [ ] 3단계: 기술 스택, 프레임워크, 모델명 포함
- [ ] 4단계: 최신 연구, 미해결 문제, 산업 현황 (연도 명시)
- [ ] 5단계: 시적 인사이트, 산문시 또는 에세이 형식
- [ ] 각 단계 독립적으로 읽을 수 있으면서 순서대로 깊어짐

### SEO (CLAUDE.md + seo-check 스킬 필수 실행)
- [ ] mainTitle = 주제만, subtitle = [페블로피디아] + 설명
- [ ] og:title, twitter:title, `<title>`, articles.json 5곳 일관성
- [ ] og:image:alt + twitter:image:alt 존재
- [ ] twitter:site + twitter:creator = @pebblous
- [ ] article:published_time 존재
- [ ] publisher = "(주)페블러스 데이터 커뮤니케이션팀"
- [ ] articlePath = 디렉토리 형식 (끝에 `/`, `index.html` 금지)
- [ ] `css/styles.css` 미포함 (인덱스 전용 CSS — 기사 페이지에 불필요)
- [ ] CSS 3종만 로드: `theme-variables.css`, `common-styles.css`, `tailwind-build.css`
- [ ] 캐시 버스팅: CSS/JS에 `?v=YYYYMMDD`
- [ ] **작성 완료 후 반드시 `/seo-check` 실행** — 4계층 검증

### articles.json
- [ ] category: "tech" (PebbloPedia는 교육 콘텐츠이므로 tech)
- [ ] cardTitle에 [페블로피디아] 포함
- [ ] image, language 필드 존재

## 참조 구현

- **첫 편**: `pebblopedia/physical-ai/ko/index.html` — Physical AI 5단계
