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

**⛔ 순서 고정: h2 → key-insight(2~3문단) → stat-card.** key-insight가 stat-card보다 **반드시 먼저** 온다.
stat-card에는 수치 + 라벨 + 맥락 설명(text-xs) 3줄 구조를 사용한다.

### ⛔ stat-card 자격 — 메타데이터 카드 금지 (가장 흔한 실패)

stat-card는 **주제 자체를 정량으로 이해시키는 수치**여야 한다. "이 글이 무엇을 다루는가"가 아니라 **"주제가 무엇을 할 수 있고/얼마나 크고/무엇이 한계인가"**를 한 숫자로 보여준다. 카드만 보고도 독자가 주제의 핵심을 정량적으로 잡을 수 있어야 한다.

**⛔ 카드 자격 없음 (메타데이터·서지·구조 정보)** — 이걸 카드에 넣으면 "AI가 형식만 채운 티"가 난다:
- 논문 페이지 수·그림 수·표 수 ("49 페이지", "6 그림")
- 분류 축/섹션/도메인 **개수** ("2대 축", "4 도메인") — 본문 소제목이 이미 말함, 중복
- 발표일·버전·게재처 ("v4", "ACM CSUR") — 출처 캡션에 쓸 것
- 글의 섹션 수·FAQ 수·참고문헌 수

**✅ 카드 자격 있음 (주제를 정량으로 이해시키는 신호)**:
- **능력**: 무엇을 얼마나 잘하게 됐나 (예: "62시간 → zero-shot 로봇 제어", "88% 토큰 절감")
- **규모**: 얼마나 큰가 (예: "110억 파라미터", "100만 시간 학습 영상")
- **변화량**: 전→후 (예: "1,195 → 41K 스타", "100만 → 62시간")
- **한계**: 가장 정직한 약점 (예: "표준 벤치마크 0개", "물리 일관성 실패")

| 나쁜 카드 (메타데이터) | 좋은 카드 (주제 정량) |
|---|---|
| `49 페이지` / ACM CSUR 서베이 | `0개` / 공인 평가 벤치마크 — "세계 이해"를 증명할 지표가 아직 없음 |
| `4 도메인` / 응용 영역 | `100만→62시간` / V-JEPA 2 — 인터넷 영상 사전학습 후 62시간 로봇 영상만으로 zero-shot |
| `2대 축` / 이해 vs 예측 | `110억` / Genie 파라미터 — 라벨 없는 영상에서 조작 가능한 가상세계 생성 |

### ⛔ stat-card 작성 시점 — 본문 완성 후 (초안에서 채우지 말 것)

stat-card를 **초안(최초 HTML 작성) 단계에서 채우면 거의 반드시 메타데이터 카드가 된다.** 그 시점엔 본문 전체가 없어, 작가가 손에 쥔 리서치 요약 맨 앞의 서지/구조 정보(페이지 수·분류 개수)를 집기 때문이다.

올바른 순서:
1. **초안 단계**: stat-card는 `<!-- STAT-CARD: 본문 완성 후 채움 -->` placeholder로 비워두거나, 임시 수치를 넣되 "임시"로 표시.
2. **본문 완성 후 (파이프라인 Phase 5 후반)**: 완성된 본문을 다시 읽어 **가장 강한 정량 신호 3~4개를 역추출**해 카드를 확정한다. 본문에 그 수치가 실제로 등장·설명되는지 확인(카드↔본문 일관성).
3. 카드 후보가 메타데이터뿐이라면 **카드 섹션을 빼는 것**이 형식적으로 채우는 것보다 낫다.

### ⛔ key-insight 산문 원칙 — 수치 덤프·전문 용어 나열 금지

key-insight는 **독자가 30초 안에 이 글의 핵심을 잡을 수 있는 산문**이다. 수치와 전문 용어를 나열하는 공간이 아니다. **수치는 stat-card가 담당한다.**

| 금지 패턴 | 이유 | 대안 |
|-----------|------|------|
| 한 문단에 수치 4개 이상 | 독자가 결론을 못 잡음 | 가장 충격적인 수치 1개만, 나머지는 stat-card·본문으로 |
| 버전·커밋·기여자 수 나열 | 릴리즈 노트가 됨 | 의미 중심 요약 ("두 달 만에 안정 릴리즈") |
| 전문 용어 무설명 연속 | 일반 독자 이탈 | 첫 등장만 짧게 설명, 이후 생략 |
| "A, B, C가 측정됐다" 수동 종결 3연속 | AI 문체 | 능동 주어 + 동사 |

**역피라미드 구조 (신문 리드형)**:
- 문단 1 (2~3문장): 가장 중요한 사실 1개 + 조건/배경. "이 글은 ~를 본다"로 맺어도 됨.
- 문단 2 (2~3문장): 핵심 수치 1개 + 그 수치가 나온 이유 + 반전/한계 1문장.
- 문단 3 (선택, 1~2문장): 독자 행동 또는 이 글의 범위.

```html
<section id="executive-summary" class="mb-16 fade-in-card">
    <h2 class="text-3xl font-bold themeable-heading mb-8">Executive Summary</h2>
    <div class="key-insight">
        <p class="themeable-text leading-relaxed">
            [리드: 핵심 사실 1개 + 조건/배경. "이 글은 ~를 다룬다"로 맺기]
        </p>
        <p class="themeable-text leading-relaxed mt-4">
            [본론: 가장 중요한 수치 1개 + 그 수치가 나온 이유 1문장 + 반전/한계 1문장]
        </p>
        <!-- 선택: 독자 행동 또는 글의 범위 1~2문장 -->
    </div>

    <!-- Stat Cards — 수치는 여기서 보여준다. key-insight에 수치 덤프 금지 -->
    <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mt-8">
        <div class="themeable-card rounded-xl p-4 text-center">
            <p class="text-2xl font-bold" style="color: #F86825;">[수치]</p>
            <p class="text-sm themeable-text-secondary mt-1">[라벨]</p>
            <p class="text-xs themeable-muted mt-1">[맥락 설명]</p>
        </div>
        <!-- 3~4개 반복. 5개 이상 금지 -->
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

### ⛔ 본문 SVG 도식/차트 배경 — 테마 변수만, 다크 하드코딩 금지

인라인 SVG 도식·차트 컨테이너의 배경은 **`var(--card-bg)`** 를 쓴다(theme-variables.css가
테마별로 정의: 라이트=#fff, 다크=#1e293b, 베이지=#FFFCF5). 도식 안의 텍스트도 `var(--text-secondary)`·
`var(--text-muted)`·`themeable-*` 등 **테마 인지 색**만 쓴다 — 하드코딩 #fff/#ccc 금지.

```html
<!-- ✅ 테마 대응: 라이트에선 흰 배경+어두운 글자, 다크에선 남색 배경+밝은 글자 -->
<div style="background:var(--card-bg)"> ... <text fill="var(--text-secondary)">...</text> ... </div>
```

⛔ **다크색 fallback 금지**: `background:var(--card-bg, #1e293b)`처럼 남색을 fallback으로 넣지 말 것.
라이트가 기본인데 fallback이 다크면, 변수가 안 잡히는 상황에서 라이트 글에 남색 도식이 박힌다
(2026-07-13 회귀: 라이트 39개 글 도식이 남색 배경으로 가시성 저하). fallback이 필요하면 `#ffffff`.

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
