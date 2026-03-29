# HTML Conventions — blog.pebblous.ai

blog-write 스킬의 상세 HTML 구조 레퍼런스.
레이아웃 레퍼런스 구현: `/workspace/extra/repos/pebblous.github.io/report/blog-2026/ko/index.html`
HTML 체크리스트: `docs/blog-html-checklist.md`

## 목차
1. [HTML 뼈대](#1-html-뼈대)
2. [head 필수 태그](#2-head-필수-태그)
3. [Hero 섹션](#3-hero-섹션)
4. [TOC + 레이아웃](#4-toc--레이아웃)
5. [Executive Summary](#5-executive-summary)
6. [섹션 구조](#6-섹션-구조)
7. [PebblousPage.init() 전체](#7-pebblouspage-init-전체)

---

## 1. HTML 뼈대

```html
<!DOCTYPE html>
<html lang="ko" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- SEO 메타 (2번 섹션 참조) -->

    <!-- Stylesheets -->
    <link rel="stylesheet" href="/css/styles.css?v=YYYYMMDD">
    <link rel="stylesheet" href="/styles/common-styles.css?v=YYYYMMDD">
    <link rel="stylesheet" href="/styles/tailwind-build.css?v=YYYYMMDD">

    <!-- GTM -->
    <script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-57L9F58B');</script>
</head>
<body class="antialiased themeable-bg">
    <!-- GTM noscript -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57L9F58B" ...></iframe></noscript>

    <div id="header-placeholder"></div>

    <main>
        <!-- Hero 섹션 (3번 참조) -->
        <!-- 레이아웃 wrapper -->
        <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div class="lg:flex lg:gap-8 lg:justify-center lg:items-start">
                <!-- TOC (4번 참조) -->
                <!-- Main content -->
                <article class="max-w-[800px] w-full px-4 sm:px-6">
                    <!-- Executive Summary (5번) -->
                    <!-- 섹션들 (6번) -->
                </article>
            </div>
        </div>
    </main>

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
<title>[제목] | 페블러스</title>
<meta name="description" content="[120-155자 설명]">
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

<!-- Favicon -->
<link rel="icon" href="/favicon.ico">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

---

## 3. Hero 섹션

```html
<section class="py-16 themeable-hero-bg">
    <div class="max-w-[800px] mx-auto px-4 sm:px-6 text-center">
        <!-- h1: JS가 mainTitle로 채움 — 비워둔다 -->
        <h1 id="page-h1-title" class="text-4xl sm:text-5xl font-bold themeable-heading mb-4"></h1>

        <!-- meta info: 2줄 형식 -->
        <p class="text-sm themeable-muted">2026.03 · (주)페블러스 데이터 커뮤니케이션팀</p>
        <p class="text-sm themeable-muted mt-1">
            읽는 시간: ~10분 ·
            <a href="../en/" class="text-orange-400 hover:text-orange-300 transition-colors">English</a>
        </p>
    </div>
</section>
```

**주의:**
- `<h1>` 내부 텍스트 금지 (JS 덮어씀)
- `hero-badge` 정적 요소 추가 금지 (PebblousBreadcrumbs가 자동 생성)

---

## 4. TOC + 레이아웃

```html
<!-- TOC (lg 이상만 표시) -->
<aside class="hidden lg:block lg:w-[240px] lg:shrink-0 sticky top-20 self-start">
    <nav>
        <p class="text-sm font-semibold themeable-muted mb-3">목차</p>
        <ul class="space-y-1 text-sm">
            <li><a href="#executive-summary" class="themeable-toc-link">Executive Summary</a></li>
            <li><a href="#section-1" class="themeable-toc-link">섹션 1 제목</a></li>
            <!-- 모든 h2 섹션 포함 -->
        </ul>
    </nav>
</aside>

<!-- Main content -->
<article class="max-w-[800px] w-full min-w-0">
    ...
</article>
```

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
    <h2 class="text-3xl font-bold themeable-heading mb-8">[섹션 제목]</h2>

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
