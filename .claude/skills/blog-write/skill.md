---
name: blog-write
description: "blog.pebblous.ai HTML 아티클 작성 — PebblousPage.init() 구조, 테마 시스템, SEO 4계층, 한국어 타이포그래피 규칙 포함. 블로그 아티클 HTML 작성 시 반드시 이 스킬을 사용할 것."
---

# Blog Write

blog.pebblous.ai 아티클 HTML 작성 스킬.
상세 HTML 구조 예시는 `references/html-conventions.md` 참조.

## 파일 경로 컨벤션

```
[category]/[slug]/ko/index.html         # 한국어
[category]/[slug]/en/index.html         # 영어 (선택)
[category]/[slug]/ko/image/index.png    # OG 이미지 (generate-og-image.js 생성)
```

카테고리: `blog/` | `project/` | `report/` | `story/` | `event/`

## PebblousPage.init() — 필수 설정

```javascript
PebblousPage.init({
  mainTitle: "메인 제목",          // REQUIRED — h1에 렌더링
  subtitle: "부제목",              // REQUIRED — h1 아래
  pageTitle: "제목 | 페블러스",    // <title> 태그용
  category: "tech",               // tech|business|art|story
  publishDate: "2026-03-29",
  publisher: "(주)페블러스 데이터 커뮤니케이션팀",
  defaultTheme: "light",          // light|dark|beige
  articlePath: "[category]/[slug]/ko/",
  tags: ["태그1", "태그2"],
  faqs: [{ question: "Q?", answer: "A." }]  // 선택
});
```

**주의:**
- `title` 필드 사용 금지 → `mainTitle` 사용
- FAQ는 `config.faqs`만 — `<head>`에 FAQPage JSON-LD 직접 추가 금지
- `article-page.js` 사용 금지 → `common-utils.js` 사용

## HTML 필수 요소

```html
<!-- 스크립트 -->
<script src="/scripts/common-utils.js?v=YYYYMMDD"></script>

<!-- hero 내 h1 (id 필수) -->
<h1 id="page-h1-title">...</h1>

<!-- hero meta info (2줄 형식, KO) -->
<p class="text-sm themeable-muted">2026.03 · (주)페블러스 데이터 커뮤니케이션팀</p>
<p class="text-sm themeable-muted mt-1">읽는 시간: ~10분 · <a href="../en/" class="text-orange-400 hover:text-orange-300 transition-colors">English</a></p>

<!-- Executive Summary (hero 직후, 섹션 1 이전) -->
<section id="executive-summary" class="mb-16 fade-in-card">
  <h2 class="text-3xl font-bold themeable-heading mb-8">Executive Summary</h2>
  <div class="key-insight">
    <p class="themeable-text leading-relaxed">...</p>
  </div>
</section>
```

## 레이아웃

레퍼런스 구현: `report/blog-2026/index.html`

- Container: `max-w-[1400px] px-4 sm:px-6 lg:px-8`
- TOC sidebar: `lg:w-[240px] sticky top-20 self-start` (lg 이상)
- Main content: `max-w-[800px] px-4 sm:px-6`
- TOC 항목: 모든 H2 섹션 포함

## CSS 규칙

- 색상 하드코딩 금지 → `themeable-*` classes 사용
- 한국어에 italic 금지 → `font-weight: 600` 사용
- Brand: Orange `#F86825` (CTA), Teal `#14b8a6` (secondary)
- 본문: 18px, line-height 2.1 (단락), 2.0 (목록)

## SEO 4계층 (HTML head)

```html
<title>[제목] | 페블러스</title>
<meta name="description" content="[150자 설명]">
<link rel="canonical" href="https://blog.pebblous.ai/[path]">
<meta property="og:title" content="[제목]">
<meta property="og:description" content="[설명]">
<meta property="og:image" content="https://blog.pebblous.ai/[path]image/index.png">
<meta property="og:url" content="https://blog.pebblous.ai/[path]">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[제목]">
<meta name="twitter:description" content="[설명]">
<meta name="twitter:image" content="https://blog.pebblous.ai/[path]image/index.png">
```

## 콘텐츠 원칙

- **Text-First**: 차트/카드/다이어그램 앞에 설명 단락이 먼저
- 섹션 구조: `<h2>` → `<h3>` (더 깊은 계층 금지)
- 영어 아티클: publisher = "Pebblous Data Communication Team", "Reading time: ~Nmin"

상세 HTML 전체 구조 → `references/html-conventions.md`
