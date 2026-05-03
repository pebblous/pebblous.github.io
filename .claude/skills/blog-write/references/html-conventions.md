# HTML Conventions — blog.pebblous.ai

> **이 파일이 HTML 구조의 정본(Single Source of Truth)입니다.**
> 다른 문서(`blog-html-checklist.md`, `story-style-guide`)는 이 파일을 참조합니다.
> CSS 순서, 필수 메타 태그, Hero 구조 등이 충돌할 경우 이 파일을 따르세요.

레이아웃 레퍼런스 구현: `report/blog-2026/ko/index.html`
HTML 체크리스트: `docs/blog-html-checklist.md`

## 목차
1. [HTML 뼈대](#1-html-뼈대)
2. [head 필수 태그](#2-head-필수-태그)
3. [TOC (사이드바)](#3-toc-사이드바)
4. [Hero 섹션](#4-hero-섹션) — **`<header class="text-left mb-12">` inside `<main>` (text-center 금지)**
5. [Executive Summary](#5-executive-summary)
6. [섹션 구조](#6-섹션-구조)
7. [PebblousPage.init() 전체](#7-pebblouspage-init-전체)
8. [KaTeX 수식 렌더링 (선택)](#8-katex-수식-렌더링-선택)

---

## 1. HTML 뼈대

```html
<!DOCTYPE html>
<html lang="ko" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- SEO 메타 (2번 섹션 참조) -->

    <!-- Stylesheets (순서 고정 — css/styles.css는 인덱스 전용, 아티클에 포함 금지) -->
    <link rel="stylesheet" href="/css/theme-variables.css?v=YYYYMMDD">
    <link rel="stylesheet" href="/styles/tailwind-build.css?v=YYYYMMDD">
    <link rel="stylesheet" href="/styles/common-styles.css?v=YYYYMMDD">

    <!-- GTM -->
    <script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-57L9F58B');</script>
</head>
<body class="antialiased themeable-bg">
    <!-- GTM noscript -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57L9F58B" ...></iframe></noscript>

    <div id="header-placeholder"></div>

    <!-- 레이아웃 wrapper (Hero는 main 내부에 위치 — 별도 full-width section 금지) -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]">
        <div class="lg:flex lg:gap-8 lg:justify-center lg:items-start">
            <!-- TOC (3번 참조) -->
            <!-- Main content — Hero(4번) 포함 -->
            <main class="max-w-[800px] px-4 sm:px-6">
                <!-- Hero: <header class="text-left mb-12"> (4번 참조) -->
                <!-- Executive Summary (5번) -->
                <!-- 섹션들 (6번) -->
            </main>
        </div>
    </div>

    <div id="footer-placeholder"></div>

    <script src="/scripts/common-utils.js?v=YYYYMMDD"></script>
    <script>
        PebblousPage.init({ /* 7번 참조 */ });
    </script>
</body>
</html>
```

---

## 2. head 필수 태그

```html
<meta name="author" content="Pebblous Data Communication Team">
<meta name="language" content="Korean">
<meta http-equiv="content-language" content="ko">
<meta name="copyright" content="© 2026 Pebblous. All rights reserved.">
<meta name="robots" content="index, follow">

<title>[제목] | 페블러스</title>
<meta name="description" content="[120-155자 설명]">
<meta name="keywords" content="[키워드1, 키워드2, ...]">
<link rel="canonical" href="https://blog.pebblous.ai/[path]">

<!-- hreflang -->
<link rel="alternate" hreflang="ko" href="https://blog.pebblous.ai/[path]ko/">
<link rel="alternate" hreflang="en" href="https://blog.pebblous.ai/[path]en/">
<link rel="alternate" hreflang="x-default" href="https://blog.pebblous.ai/[path]ko/">

<!-- OG -->
<meta property="og:type" content="article">
<meta property="og:title" content="[제목]">
<meta property="og:description" content="[설명]">
<meta property="og:url" content="https://blog.pebblous.ai/[path]">
<meta property="og:image" content="https://blog.pebblous.ai/[path]image/index.png">
<meta property="og:locale" content="ko_KR">

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[제목]">
<meta name="twitter:description" content="[설명]">
<meta name="twitter:image" content="https://blog.pebblous.ai/[path]image/index.png">
<meta name="twitter:image:alt" content="[이미지 설명]">
<meta name="twitter:site" content="@pebblous_ai">
<meta name="twitter:creator" content="@pebblous_ai">

<!-- Favicon -->
<link rel="icon" href="/favicon.ico">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

---

## 3. TOC (사이드바)

`<main>` 의 왼쪽 형제 요소로 배치. `<aside>` 금지 — `<nav>` 사용.

```html
<nav class="hidden lg:block lg:w-[240px] lg:shrink-0 sticky top-20 self-start">
    <h3 class="font-bold themeable-heading mb-4 text-lg">목차</h3>
    <ul id="toc-links" class="space-y-3 text-sm border-l-2 themeable-toc-border">
        <li><a href="#executive-summary" class="block pl-4 themeable-toc-link transition-colors duration-200">Executive Summary</a></li>
        <li><a href="#section-1" class="block pl-4 themeable-toc-link transition-colors duration-200">섹션 1 제목</a></li>
        <!-- 모든 h2 섹션 포함 -->
    </ul>
</nav>
```

---

## 4. Hero 섹션

`<main>` 의 *첫 번째 자식*으로 배치. 별도 full-width `<section class="py-16 ...">` 금지.
**`text-center` 절대 금지** — 반드시 `text-left`.

```html
<main class="max-w-[800px] px-4 sm:px-6">
    <header class="text-left mb-12">
        <!-- h1: JS가 mainTitle로 채움 — 반드시 비워둔다 -->
        <h1 id="page-h1-title" class="text-4xl md:text-5xl font-bold themeable-heading mb-4 leading-tight"></h1>
        <!-- ⛔ 메타(날짜·팀명·읽기시간·언어전환·공유버튼) 하드코딩 금지
             PebblousPage.init()이 publishDate, publisher, wordCount에서 동적 생성 -->
    </header>

    <!-- Executive Summary, 섹션들 → 5·6번 참조 -->
</main>
```

**주의:**
- `<h1>` 내부 텍스트 금지 (JS 덮어씀)
- `hero-badge` 정적 요소 추가 금지 (PebblousBreadcrumbs가 자동 생성)

---

## 5. Executive Summary

모든 아티클 필수. Hero 직후, 섹션 1 이전.

```html
<section id="executive-summary" class="mb-16 fade-in-card">
    <h2 class="text-3xl font-bold themeable-heading mb-8">Executive Summary</h2>
    <div class="key-insight">
        <p class="themeable-text leading-relaxed">
            [문단 1: 핵심 문제 + 해결책 요약]
        </p>
        <p class="themeable-text leading-relaxed mt-4">
            [문단 2: 기술적 접근 + 근거]
        </p>
        <p class="themeable-text leading-relaxed mt-4">
            [문단 3: 비즈니스/실무적 의미]
        </p>
    </div>
</section>
```

---

## 6. 섹션 구조

```html
<section id="section-1" class="mb-16 fade-in-card">
    <!-- ⛔ number-badge: <h2> 안에 <div> 금지. 반드시 <div> 안에 <h2> -->
    <div class="flex items-center gap-4 mb-8">
        <span class="number-badge">1</span>
        <h2 class="text-3xl font-bold themeable-heading">[섹션 제목]</h2>
    </div>
    <!-- number-badge 없는 섹션(Executive Summary 등)은 기존 패턴 유지 -->
    <!-- <h2 class="text-3xl font-bold themeable-heading mb-8">[섹션 제목]</h2> -->

    <!-- Text-First: 설명 단락이 시각 요소 앞에 -->
    <p class="themeable-text leading-relaxed mb-6">[내용]</p>

    <!-- 서브섹션 (필요 시) -->
    <h3 class="text-xl font-semibold themeable-heading mb-4">[서브섹션]</h3>
    <p class="themeable-text leading-relaxed mb-4">[내용]</p>

    <!-- 하이라이트 박스 -->
    <div class="key-insight">
        <p class="themeable-text leading-relaxed">...</p>
    </div>

    <!-- 목록 -->
    <ul class="space-y-3 mb-6">
        <li class="flex items-start gap-3">
            <span class="text-teal-400 mt-1">•</span>
            <span class="themeable-text leading-relaxed">[항목]</span>
        </li>
    </ul>
</section>
```

---

## 7. PebblousPage.init() 전체

```javascript
PebblousPage.init({
    mainTitle: "메인 제목",
    subtitle: "부제목",
    pageTitle: "메인 제목 | 페블러스",
    category: "tech",                    // tech|business|art|story
    publishDate: "2026-03-29",
    publisher: "(주)페블러스 데이터 커뮤니케이션팀",
    defaultTheme: "light",               // light|dark|beige
    articlePath: "[category]/[slug]/ko/",
    tags: ["태그1", "태그2"],
    faqs: [
        { question: "자주 묻는 질문?", answer: "답변." }
    ]  // 선택 — FAQ가 없으면 생략
});
```

**영어 아티클:**
```javascript
PebblousPage.init({
    mainTitle: "Main Title",
    subtitle: "Subtitle",
    pageTitle: "Main Title | Pebblous",
    category: "tech",
    publishDate: "2026-03-29",
    publisher: "Pebblous Data Communication Team",
    defaultTheme: "light",
    articlePath: "[category]/[slug]/en/",
    tags: ["tag1", "tag2"],
});
```

---

## 8. KaTeX 수식 렌더링 (선택)

수식이 포함된 아티클에만 추가한다. 모든 아티클에 기본 포함하지 않는다.

### head에 추가 (CSS 3종 뒤, common-utils.js 전)

```html
<!-- KaTeX (수식이 있는 페이지만) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/contrib/auto-render.min.js"
        onload="renderMathInElement(document.body, {
            delimiters: [
                {left: '$$', right: '$$', display: true},
                {left: '$', right: '$', display: false}
            ]
        });"></script>
```

### 사용법

```html
<!-- 인라인 수식 -->
<p>Shannon Entropy는 $H(S) = -\sum_{i} p_i \log_2 p_i$ 로 정의된다.</p>

<!-- 블록 수식 (별도 줄) -->
<div class="my-6 text-center">
$$IG(S, A) = H(S) - \sum_{v \in \text{Values}(A)} \frac{|S_v|}{|S|} \cdot H(S_v)$$
</div>
```

### 규칙

- 인라인: `$...$` — 문장 안에 수식을 넣을 때
- 블록: `$$...$$` — 독립된 수식 블록. `<div class="my-6 text-center">` 로 감싸서 여백 확보
- 기존 `.formula-box` + Unicode 수식이 있는 글에 KaTeX를 적용할 때, `.formula-box`는 유지하고 내부 텍스트만 `$...$` 또는 `$$...$$`로 교체
- KaTeX CDN 버전은 `0.16.22` 고정 (호환성 보장)
