---
name: blog-write
description: "blog.pebblous.ai HTML 아티클 작성 — PebblousPage.init() 구조, 테마 시스템, SEO 4계층, 한국어 타이포그래피 규칙 포함. 블로그 아티클 HTML 작성 시 반드시 이 스킬을 사용할 것."
---

# Blog Write

> **이 파일이 블로그 HTML 작성의 정본입니다.** 레포 `.claude/skills/` 기준.

blog.pebblous.ai 아티클 HTML **신규 작성** 스킬.
상세 HTML 구조 예시는 `references/html-conventions.md` 참조.

`blog-polish`와의 역할 구분:
- **`blog-write` (이 스킬)**: 새 아티클 HTML을 처음부터 작성 — 구조, SEO, 컴포넌트 전체 포함
- **`blog-polish`**: 기존 아티클의 제목·리드·섹션 헤딩을 Warm Expert Tone으로 다듬기 — 콘텐츠 보존

## ⛔ 작성 시작 전 필수 읽기 (예외 없음, 기억에 의존 금지)

```
Read: docs/post-writing-lessons-for-pb.md          # 이중 불릿, SEO-check 절차
Read: references/html-conventions.md               # CSS 순서·Hero·메타 정본
Read: docs/blog-html-checklist.md                  # 완성 후 대조용
```

## ⛔ Push 전 필수 검증

```bash
python3 tools/validate-articles.py                 # 구조 검증
```

### SEO-check (새 페이지마다 필수 — 예외 없음)

```bash
agent-browser open <배포된 URL>
agent-browser wait --load networkidle
agent-browser eval "document.title"
agent-browser eval "document.querySelector('link[rel=canonical]')?.href"
agent-browser eval "document.querySelector('link[hreflang=en]')?.href"
agent-browser eval "document.querySelector('meta[property=\"og:image\"]')?.content"
agent-browser eval "!!document.getElementById('share-buttons-placeholder')"
agent-browser eval "document.querySelector('meta[name=\"twitter:site\"]')?.content"
agent-browser eval "document.querySelector('meta[http-equiv=\"content-language\"]')?.content"
```

통과 기준: title 60자 이내, description 120-160자, canonical = 현재 URL, hreflang 3개(bilingual 시), og:image URL 존재, share-btn = true, twitter:site = `@pebblous`

## 파일 경로 컨벤션

```
[category]/[slug]/ko/index.html         # 한국어
[category]/[slug]/en/index.html         # 영어
[category]/[slug]/ko/image/index.png    # KO OG 이미지
[category]/[slug]/en/image/index.png    # EN OG 이미지
```

**필수**: 단일 언어만 먼저 작성하더라도 `ko/` 또는 `en/` 디렉토리 구조로 생성.
루트에 직접 `[slug]/index.html` 생성 금지. 공유 이미지 경로 금지.
정본: `.claude/AGENT-POLICY.md` 섹션 3.

카테고리: `project/` | `blog/` | `report/` | `story/` | `event/`

## 제목 완성 절차 (blog-research 초안 → 최종 3슬롯)

작성 시작 전 `docs/title-strategy.md`를 읽고 아래 절차를 따른다:

1. **리서치 초안 확인**: `_workspace/01_research.md`의 `추천 제목` 섹션에서 mainTitle 후보, subtitle 후보, pageTitle 키워드 소재, 검색 의도를 확인
2. **3슬롯 최종 결정**:

| 슬롯 | 기준 | 글자 수 |
|------|------|---------|
| `pageTitle` | 핵심 키워드 앞배치 + 구체적 약속 + ` \| 페블러스` | 50-60자 |
| `mainTitle` | 감성 후킹 (은유/선언/대조) — 키워드 나열 금지 | 20-40자 |
| `subtitle` | 맥락 보충 + mainTitle에 없는 보조 키워드 | 30-60자 |

3. **검증 체크**:
   - [ ] `pageTitle ≠ mainTitle` (역할이 다르므로 반드시 다른 문장)
   - [ ] `pageTitle` 앞쪽 1/3에 핵심 키워드
   - [ ] `mainTitle` 소리 내어 읽었을 때 자연스러운가?
   - [ ] EN 제목은 한국어 직역이 아닌 영어 검색 의도에 맞게 재작성

4. **EN 제목** (bilingual 시): 한국어 제목을 번역하지 말고, 영어 검색 의도에 맞게 별도 작성. Title Case 적용.

## PebblousPage.init() — 필수 설정

```javascript
PebblousPage.init({
  mainTitle: "메인 제목",          // REQUIRED — h1에 렌더링 (감성 후킹)
  subtitle: "부제목",              // REQUIRED — h1 아래 (맥락 + 보조 키워드)
  pageTitle: "제목 | 페블러스",    // <title> 태그용 (SEO 키워드 중심)
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

**⚠️ articles.json과 필드명이 다름 (혼동 주의):**
- `PebblousPage.init()` → `publishDate` (HTML 렌더링용)
- `articles.json` → `date` (CI 스키마 검증 필수 필드)
- 전체 필드명 정본: `.claude/AGENT-POLICY.md` 섹션 3 참조

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

### ⛔ 인라인 CSS 금지 (CRITICAL)

`common-styles.css`에 이미 존재하는 컴포넌트를 `<style>` 블록에 재정의하지 말 것. 위반 시 글꼴·행간·색상이 표준과 달라지고 유지보수 부담이 생긴다.

**금지 패턴:**
```html
<!-- ❌ common-styles.css에 이미 있는 클래스를 인라인으로 재정의 -->
<style>
  .stat-card { ... }
  .key-insight { ... }
  .themeable-toc-link { ... }
</style>
```

**허용:** 해당 포스트에만 필요한 고유 컴포넌트 (`.timeline-box`, `.weapon-card` 등)는 인라인 `<style>`에 작성 가능.

### CSS 로드 순서 (정확히 이 순서 — CLAUDE.md 정본)

```html
<link rel="stylesheet" href="/css/theme-variables.css?v=YYYYMMDD">
<link rel="stylesheet" href="/styles/tailwind-build.css?v=YYYYMMDD">
<link rel="stylesheet" href="/styles/common-styles.css?v=YYYYMMDD">
```

> Tailwind utility → common-styles 커스텀 순서. common-styles가 나중에 로드되어야 Tailwind를 오버라이드 가능.

### 표준 클래스명

| 용도 | 표준 클래스 | ❌ 금지 |
|------|-----------|---------|
| 본문 텍스트 | `themeable-text` | `themeable-secondary` |
| 제목 | `themeable-heading` | `themeable-primary` |
| 보조 텍스트 | `themeable-muted` | 커스텀 색상 |
| 핵심 인사이트 | `key-insight` | `insight-box` |

### 색상·타이포그래피

- 색상 하드코딩 금지 → `themeable-*` classes 또는 CSS 변수 사용
- 허용 브랜드 색상: Orange `#F86825`, Teal `#14b8a6`, Blue `#3B82F6`
- 빨간색·임의 초록 등 비표준 색상 금지
- 한국어에 italic 금지 → `font-weight: 600` 사용
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

## ⚠️ 이중 불릿 버그 (자주 반복 — 반드시 준수)

`common-styles.css`가 `main ul { list-style-type: disc }` 자동 불릿을 붙인다.
`<li>` 안에 `•`를 하드코딩하면 불릿이 두 개 나온다.

```html
<!-- ❌ 이중 불릿 -->
<ul>
    <li>• 항목</li>
</ul>

<!-- ✅ 옵션 A: 하드코딩 불릿 + list-style:none -->
<ul style="list-style:none;margin-left:0;">
    <li>• 항목</li>
</ul>

<!-- ✅ 옵션 B: CSS 불릿만 사용 (• 제거) -->
<ul class="ml-6">
    <li>항목</li>
</ul>
```

또는 페블러스 표준 스타일 (teal 불릿):
```html
<ul class="space-y-3 mb-6">
    <li class="flex items-start gap-3">
        <span class="text-teal-400 mt-1">•</span>
        <span class="themeable-text leading-relaxed">항목</span>
    </li>
</ul>
```

완성 후 확인:
```bash
grep -n '<li>•\|<li> •' <파일>.html
# 결과가 있으면 해당 <ul>에 list-style:none 추가
```

상세 HTML 전체 구조 → `references/html-conventions.md`
