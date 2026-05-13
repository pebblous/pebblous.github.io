---
name: seo-check
description: Audit an HTML page for Pebblous SEO compliance
argument-hint: "[file-path.html]"
---

When this skill is invoked:

1. **Read the target HTML file** specified by the user.

2. **Detect `noindex` pages**: Check for `<meta name="robots" content="noindex">` or `content="noindex, nofollow"`.
   - **Cross-check with articles.json**: Read `articles.json` and check if the page's path matches any article with `"published": true`. If a published article has `noindex`, report as **CRITICAL ERROR**: "This page is published in articles.json but has noindex — Google will NOT index it. Remove the noindex tag."
   - If `noindex` and NOT in articles.json (legitimate noindex): skip Layer 1 (canonical, keywords), Layer 2 (OG, Twitter Cards), and hreflang checks — these are N/A for non-indexed pages. Still check: `<title>`, `<meta description>` (basic hygiene), Layer 4 technical items (heading hierarchy, viewport). Report as "noindex page — reduced checklist applied".

3. **Read SEO reference**: Read `docs/seo.md` for the full 4-layer checklist.

4. **Check all 4 SEO layers** and report pass/fail for each (skip layers marked N/A for noindex pages):

   **Layer 0 — Title Quality** (참조: `docs/title-strategy.md`):
   - `pageTitle` (`<title>`) ≠ `mainTitle` (h1) — 같으면 WARN: "SEO 제목과 본문 제목의 역할이 다릅니다. 분리를 권장합니다."
   - `pageTitle` 핵심 키워드가 앞쪽 1/3에 위치하는가?
   - `mainTitle` 20-40자, 키워드 나열이 아닌 감성 후킹인가?
   - `subtitle`에 mainTitle에 없는 보조 키워드가 포함되었는가?
   - EN 제목이 KO 직역이 아닌가? (bilingual 시)

   **Layer 1 — Meta Tags**:
   - `<title>` (50-60 chars, Korean keyword first)
   - `<meta name="description">` (120-155 chars)
   - `<link rel="canonical">`
   - `<meta name="keywords">`

   **Layer 2 — Open Graph & Twitter Cards**:
   - `og:title`, `og:description`, `og:image`, `og:url`, `og:type`
   - `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
   - OG image dimensions (1200x630 recommended)
   - **OG image file exists**: Extract the path from `og:image` content, convert the URL to a local file path (e.g., `https://blog.pebblous.ai/story/.../image/index.png` → `story/.../image/index.png`), and verify the file exists on disk. FAIL if the file is missing — the image will be a broken link on social media shares.
   - **⛔ EN 페이지 OG 이미지 언어 불일치 검증**: `<html lang="en">` 페이지에서 `og:image` 또는 `twitter:image` 경로에 `/ko/image/`가 포함되어 있으면 **CRITICAL FAIL**: "EN 페이지가 KO OG 이미지를 참조 — SNS 공유 시 한글 이미지 노출. `/en/image/`로 수정 필요." (원인: KO 복사 후 경로 미변경)

   **Layer 3 — JSON-LD Schema & FAQ** (페블러스 표준: 동적 주입):

   이 사이트의 JSON-LD 스키마는 `PebblousSchema` (scripts/common-utils.js)가 런타임에 동적으로 주입한다. 검증된 사실(2026-05-13 Google Rich Results Test 확인): 동적 JSON-LD를 Google이 정상 인식하며 Rich Results 자격을 부여한다.

   - **BreadcrumbList**: `PebblousSchema.injectBreadcrumbSchema()`가 `config.category` + `config.mainTitle`에서 자동 주입. → config에 `mainTitle`과 `category` 있는지 확인.
   - **Article/TechArticle**: `PebblousSchema.injectArticleSchema()`가 `config.mainTitle` + `config.subtitle`에서 자동 주입. → **`<head>`에 직접 정적 JSON-LD를 작성하지 말 것** (PebblousSchema 동적 주입과 중복되어 Google Rich Results Test에서 "Articles 2 items" 중복 경고). config에 `mainTitle`+`subtitle` 있는지만 확인.
   - **FAQPage**: `config.faqs` 배열만 사용 (자동 주입). `<head>`에 직접 작성 금지.
   - **⛔ FAQ 렌더링 컨테이너 검증**: `config.faqs`가 있는데 `<section id="faq">`가 HTML에 없으면 **FAIL**: "FAQ가 config에 정의되었지만 렌더링 컨테이너(`<section id="faq">`)가 없어 페이지에 표시되지 않음. `</main>` 앞에 `<section id=\"faq\" class=\"mb-16 fade-in-card\"></section>` 추가 필요."
   - **⛔ 정적 JSON-LD 중복 검증**: `<head>`에 `@type: Article/TechArticle/BlogPosting` JSON-LD가 정적으로 존재하면 **FAIL** (PebblousSchema와 중복). 정적 블록 제거하고 PebblousPage.init config로 동작 위임할 것.

   **Layer 4 — Technical**:
   - Heading hierarchy (single H1, proper H2/H3 nesting)
   - Image alt attributes
   - Internal linking
   - Mobile responsive meta viewport

5. **Output a report** with:
   - Pass/Fail status per item
   - Specific fix suggestions for failures
   - Overall SEO score (items passed / total items)
