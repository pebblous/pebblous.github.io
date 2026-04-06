# Blog HTML Writing Checklist

> **Purpose**: docs/*.md를 "읽었지만 따르지 않는" 실수를 방지하기 위한 대조 검증표.
> 작성 전/중/후 3단계로 사용한다. 각 항목은 기존 docs의 상세 설명 대신 "확인했는가?"만 묻는다.

## Phase 1: Before Writing

- [ ] **Reference 읽기**: `docs/blog-creation-workflow.md` 10단계 확인
- [ ] **Template 확인**: 유사 포스트(같은 카테고리, 같은 언어 구조) 1개 열어 패턴 확인
- [ ] **Source MD/PDF 확인**: 원본 문서가 있으면 텍스트를 그대로 쓸 준비 (재작성 금지)

## Phase 2: During Writing — Structure

### Head
- [ ] `<html lang="ko">` 또는 `<html lang="en">` + `data-theme="light"`
- [ ] `<title>` 50-60자, 핵심 키워드 앞배치
- [ ] `<meta name="description">` 120-155자
- [ ] `<link rel="canonical">` 절대 URL
- [ ] hreflang 3개: `ko`, `en`, `x-default`
- [ ] OG 태그 6종: title, description, type, url, image(1200x630), locale
- [ ] Twitter Card 4종: card, title, description, image
- [ ] GTM script (`GTM-57L9F58B`) in `<head>`
- [ ] Favicon 3종: .ico, .png, apple-touch-icon
- [ ] Stylesheets 3개 (순서 고정, `html-conventions.md` 참조): `css/theme-variables.css`, `styles/tailwind-build.css`, `styles/common-styles.css`
- [ ] **`css/styles.css` 미포함** (인덱스 전용 CSS — 아티클에 불필요)
- [ ] `twitter:site` + `twitter:creator` = `@pebblous`
- [ ] `<meta http-equiv="content-language" content="ko">` (또는 `en`)
- [ ] `<meta name="copyright" content="© 2026 Pebblous. All rights reserved.">`
- [ ] **인라인 `<style>` 최소화** — 공통 CSS는 styles 파일에

### Body
- [ ] GTM `<noscript>` 바로 `<body>` 뒤
- [ ] `<div id="header-placeholder"></div>`
- [ ] `<div id="footer-placeholder"></div>`

### Hero Section
- [ ] Hero가 `<header class="text-left mb-12">` 태그로 **`<main>` 첫 번째 자식**에 위치
- [ ] **`<section class="py-16 themeable-hero-bg text-center">` 구조 금지** (구버전 패턴)
- [ ] `<h1 id="page-h1-title">` **비어 있음** (JS가 채움)
- [ ] 메타 2줄: `YYYY.MM · 팀명` / `읽는 시간 · 언어 전환 링크`
- [ ] **공유 버튼**: `<div id="share-buttons-placeholder" class="flex justify-start"></div>` (필수, `mt-4` 없음)
- [ ] **Breadcrumbs**: 정적 `<span class="hero-badge">` 금지 → PebblousBreadcrumbs가 자동 생성

### TOC + Layout
- [ ] 외부 컨테이너: `class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]"`
- [ ] Flex: `lg:flex lg:gap-8 lg:justify-center lg:items-start`
- [ ] TOC: **`<nav>` 태그** (`<aside>` 금지), `lg:w-[240px] sticky top-20`, `hidden lg:block`
- [ ] Main content: **`<main class="max-w-[800px] px-4 sm:px-6">`** (`<article>` 금지)
- [ ] 모든 섹션 `id=`가 TOC `href="#"`과 1:1 매칭

### Executive Summary (필수)
- [ ] Hero 바로 뒤, Section 1 앞에 위치
- [ ] `<div class="key-insight">` 안에 3문단 (문제+해법, 기술+근거, 비즈니스 긴급성)
- [ ] TOC에 "Executive Summary" 항목 있음

## Phase 2: During Writing — Content

### Text-First 원칙
- [ ] **모든 차트/표/카드/다이어그램 앞에 설명 문단** 있음
- [ ] Source MD 문장을 그대로 사용 (재해석/재작성 금지)
- [ ] 텍스트만으로 내용 이해 가능한가?

### Typography & Korean
- [ ] **한국어에 italic 사용 안 함** → `font-weight: 600` 대체
- [ ] body 18px, line-height: p=2.1, list=2.0
- [ ] `<h2>` = 섹션, `<h3>` = 하위섹션

### Theme 호환
- [ ] **하드코딩 색상 없음**: `text-white` → `themeable-text`, `bg-slate-800` → `themeable-bg` 등
- [ ] 3개 테마(dark/light/beige)에서 텍스트 가독성 확인

## Phase 2: During Writing — Config

### PebblousPage.init() (CRITICAL)
- [ ] **`mainTitle`** 있음 (없으면 제목 미표시, TOC 깨짐)
- [ ] **`subtitle`** 있음
- [ ] `pageTitle`, `publishDate`, `publisher`
- [ ] `defaultTheme: "light"`
- [ ] `category`: tech | business | art | story
- [ ] `articlePath`: 정확한 상대 경로
- [ ] `tags[]`: 키워드 배열
- [ ] `faqs[]`: 7개 이상 Q&A
- [ ] **FAQ JSON-LD를 `<head>`에 직접 넣지 않음** → config.faqs만 사용

### Scripts
- [ ] `/scripts/common-utils.js` 사용 (NOT `/js/article-page.js`)
- [ ] **컴포넌트 우회 금지**: header, footer, share-buttons는 시스템 사용

## Phase 3: After Writing — Verification

### SEO 검증
- [ ] H1 1개만 (Hero에서 자동)
- [ ] H2/H3 계층 올바름
- [ ] 모든 `<img>`에 `alt` 있음
- [ ] canonical URL 정확
- [ ] `/seo-check` 스킬 실행

### Bilingual (해당 시)
- [ ] KO/EN 동일 HTML 구조 (±5줄)
- [ ] hreflang, canonical, og:url이 각각 올바른 언어 버전 가리킴
- [ ] `index.html` 리디렉트 stub 있음 (meta refresh + canonical + JS fallback)
- [ ] articles.json에 KO/EN 2개 항목 등록

### Pipeline
- [ ] `articles.json` 등록 (wrapper object 유지: `{ categories, articles }`)
- [ ] Featured: 카테고리당 최대 3개 확인
- [ ] `npm run build:css` 실행 (새 Tailwind 클래스 추가한 경우)
- [ ] changelog 기록 (`/changelog` 스킬 또는 수동)
- [ ] OG 이미지: `node tools/generate-og-image.js --from-html <path>`

---

**Related docs** (상세 설명):
- `docs/blog-creation-workflow.md` — 10단계 작성 프로세스
- `docs/seo.md` — SEO 4계층 전략
- `docs/style.md` — UX/UI 디자인 규칙
- `docs/layout-guidelines.md` — 레이아웃 시스템
- `docs/pebblous-modules.md` — Chart/Tabs API
- `docs/content-guidelines.md` — Text-First 작문 규칙
