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

   **Layer 3 — JSON-LD Schema**:
   - BreadcrumbList (auto via PebblousPage — verify config)
   - FAQPage: must be in `config.faqs` ONLY, NOT in `<head>` `<script type="application/ld+json">`
   - Article schema (if applicable)

   **Layer 4 — Technical**:
   - Heading hierarchy (single H1, proper H2/H3 nesting)
   - Image alt attributes
   - Internal linking
   - Mobile responsive meta viewport

5. **Output a report** with:
   - Pass/Fail status per item
   - Specific fix suggestions for failures
   - Overall SEO score (items passed / total items)
