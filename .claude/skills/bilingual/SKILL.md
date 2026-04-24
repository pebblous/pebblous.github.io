---
name: bilingual
description: Convert a mono-language (Korean) blog post to bilingual (KO + EN)
argument-hint: "<path-to-existing-html>"
---

When this skill is invoked with a path to an existing Korean HTML blog post:

## Overview

Converts `blog.html` → bilingual structure while preserving Google Search indexing:
```
blog.html                    → redirect to blog/ko/index.html (SEO-safe)
blog/
├── index.html               → redirect to ko/ (default language)
├── ko/
│   └── index.html           → Korean version (from original)
└── en/
    └── index.html           → English translation
```

## Steps

### 1. Read and analyze the original post
- Read the full HTML file
- Identify: title, description, canonical URL, OG tags, all meta tags
- Identify: PebblousPage.init config (category, tags, dates, etc.)
- Identify: sections, charts, interactive components, FAQ, JSON-LD schemas
- Note the current canonical URL (e.g., `https://blog.pebblous.ai/project/CURK/ontology/palantir-vs-classic-ontology.html`)

### 2. Create directory structure
```bash
mkdir -p blog/ko blog/en
```
(where `blog` = the original filename without `.html`)

### 3. Create `blog/ko/index.html` — Korean version
**Method: Copy original → apply minimal URL changes**
1. Copy the original HTML file to `blog/ko/index.html` using shell: `cp original.html blog/ko/index.html`
2. Use Edit tool to update ONLY these references (no structural changes):
   - `hreflang ko` → `blog/ko/` URL
   - `hreflang en` → `blog/en/` URL
   - `hreflang x-default` → `blog/en/` URL
   - `canonical` → new Korean URL (`blog/ko/`)
   - `og:url` → new Korean URL
   - `twitter:url` → new Korean URL
   - All remaining old `.html` URLs in JSON-LD schemas → new `/ko/` URL (use `replace_all`)
   - `articlePath` in PebblousPage.init config → new path with `/ko/`
   - Internal relative links to same-directory assets (PDFs, images) → adjust depth (e.g., `./file.pdf` → `../../file.pdf`)
   - **Replace hero meta info** with 2-line compact format (below subtitle, centered):
     ```html
     <!-- Korean -->
     <p class="text-sm themeable-muted">YYYY.MM · (주)페블러스 데이터 커뮤니케이션팀</p>
     <p class="text-sm themeable-muted mt-1">읽는 시간: ~N분 · <a href="../en/" class="text-orange-400 hover:text-orange-300 transition-colors">English</a></p>
     ```
     Line 1: `date · team` / Line 2: `reading time · language link`. Remove any old `<div class="flex ...">` publication info block.
   - Fix any existing HTML issues (e.g., broken tags)

### 4. Create `blog/en/index.html` — English translation

**CRITICAL: Copy-then-translate approach**

The English version MUST be created by **copying the completed KO file** and then **translating only text content**. This ensures both versions have identical CSS, HTML structure, SVG graphics, JavaScript logic, animations, and visual appearance.

**Method:**
1. Copy `blog/ko/index.html` to `blog/en/index.html` using shell: `cp blog/ko/index.html blog/en/index.html`
2. Use Edit tool to change ONLY the following (never modify CSS, class names, HTML structure, SVG elements, or JS logic):

**URL/language changes:**
- `<html lang="ko">` → `<html lang="en">`
- `<meta name="language" content="Korean">` → `English`
- `<meta http-equiv="content-language" content="ko">` → `en`
- `canonical`, `og:url`, `twitter:url` → change `/ko/` to `/en/`
- `og:locale` → `en_US`
- `articlePath` → change `/ko/` to `/en/`
- Language switcher: `href="../en/"` → `href="../ko/"`, text `English` → `한국어`
- ⛔ **`og:image`, `twitter:image`, JSON-LD `image`** → `/en/image/index.png` 경로로 변경 (KO의 `/ko/image/` 그대로 두면 EN 공유 시 한글 OG 이미지 노출)

**Text-only translations (using Edit tool for each):**
- `<title>` content
- `meta description`, `meta keywords` content
- `og:title`, `og:description`, `og:image:alt` content
- `twitter:title`, `twitter:description`, `twitter:image:alt` content
- `twitter:label1/data1`, `twitter:label2/data2` content
- JSON-LD schema text values (headline, description, articleBody, keywords, about descriptions, step names/texts, FAQ Q&As, inLanguage, BreadcrumbList names)
- TOC sidebar labels (목차 → Contents, section names)
- All body text: section headings, paragraphs, card content, badge text, list items
- Summary toggle text (요약 → Summary), if present
- Chart.js labels and dataset names in JavaScript
- PebblousPage.init config strings (mainTitle, subtitle, pageTitle, publishDate, publisher)
- Reference section phase labels and description texts
- Button/link text (보고서 다운로드 → Download Report, etc.)
- **Currency amounts**: Convert KRW to USD-primary with KRW supplementary. Format: `$12.4M (KRW 18B)`, `$435K (KRW 630M)`. Use approximate rate ~1,450 KRW/USD. Keep KRW in parentheses for reference.

**Never change:**
- CSS styles, CSS variables, theme definitions
- HTML structure, class names, ids
- SVG graphics (paths, shapes, colors, viewBox)
- JavaScript logic (observers, event listeners, init patterns)
- `defaultTheme` value (keep same as KO version)
- Chart data values (only translate label strings)
- External resource references (CDN URLs, font links)
- Animation keyframes and timing
- `<script>` loading order and cache-busting query strings

### 5. Create `blog/index.html` — directory redirect
Triple-layer redirect to Korean (original language = default):
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Redirecting...</title>
    <meta http-equiv="refresh" content="0; url=./ko/">
    <link rel="canonical" href="./ko/">
    <script>window.location.replace('./ko/');</script>
</head>
<body>
    <p>Redirecting... <a href="./ko/">Click here if not redirected</a>.</p>
</body>
</html>
```

### 6. Replace original `blog.html` — SEO redirect
Replace the original file content with a redirect that preserves Google indexing:
```html
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>Redirecting...</title>
    <!-- SEO: Tell Google the content has moved -->
    <meta http-equiv="refresh" content="0; url=./blog/ko/">
    <link rel="canonical" href="https://blog.pebblous.ai/.../blog/ko/">
    <meta name="robots" content="noindex, follow">
    <script>window.location.replace('./blog/ko/');</script>
</head>
<body>
    <p>Redirecting... <a href="./blog/ko/">Click here if not redirected</a>.</p>
</body>
</html>
```
Key SEO signals:
- `canonical` → points to the new Korean URL (tells Google where content moved)
- `robots: noindex, follow` → Google will drop the old URL from index and follow the redirect
- Meta refresh with 0 delay → acts like a redirect for users

### 7. Update `articles.json`
- Update the existing Korean entry: change `path` to new `blog/ko/` path
- Add a new English entry with the translated title, description, and `blog/en/` path
- Both entries share the same `image` path

### 8. Add Executive Summary
If the original post does not have an Executive Summary section, add one to both versions following the standard pattern (see CLAUDE.md "Article Page Structure").

### 9. Verify
- Check all relative paths resolve correctly (CSS, JS, images, PDFs)
- Verify hreflang tags match between KO and EN versions
- **CRITICAL**: Confirm PebblousPage.init config includes `mainTitle` and `subtitle` in BOTH versions — these are REQUIRED for Hero h1 rendering, breadcrumbs, Article Schema, and TOC alignment. If the original post was missing them, add them now.

### 10. Post-Task Chain (MUST follow after completion)
1. **`/seo-check`** on both KO and EN versions — verify hreflang, canonical, OG tags
2. **`/changelog`** — Record the bilingual conversion action
3. **`/publish`** — Rebuild CSS + prepare commit

---

## Important Notes

### Visual Consistency (CRITICAL)
- **EN must be a TEXT-ONLY translation of KO** — both versions must look visually identical except for language
- **Never rewrite the EN file from scratch** — always copy KO first, then translate text strings using Edit tool
- If using Agent tool for translation: explicitly instruct it to "copy KO file first via shell, then use Edit tool for text-only changes"
- After completion, verify: both files should have the same line count (±5 lines), same CSS block, same HTML structure, same SVG graphics

### i18n in Shared JS/Components (Already Handled)
The following Korean labels in shared files are **automatically switched to English** when `<html lang="en">` is detected — no per-page edits needed:
- **`scripts/common-utils.js`**: `발행일:` → `Published:`, `기획:` → `By:`, `읽는 시간: 약 N분` → `Reading time: ~N min`
- **`components/share-buttons.html`**: `공유하기:` → `Share:`, tooltip titles (`URL 복사` → `Copy URL`, `Twitter에 공유` → `Share on Twitter`, etc.)

These work via `document.documentElement.lang === 'en'` check. As long as the EN file has `<html lang="en">`, no additional translation is needed for these labels.

### Password-Protected Pages (`pbls-auth.js`)
- The copy-based approach naturally preserves auth script tags — no special handling needed
- **sessionKey must be the same** for both ko/en versions (e.g., `pebblosim_design_auth` for both)
- When translating the EN version, update only the `pageName` in `PebblousAuth.initPageProtection()` (e.g., add `(EN)` suffix)
- Do NOT change: `password`, `sessionKey`, or the `pbls-auth.js` script reference
- Password modal overlay text (placeholder, button, error message) should be translated to English

### Files & Assets
- The original `.html` file is **replaced** with a redirect — never deleted (preserves URL for bookmarks/backlinks)
- Image directory stays in the original location; both `ko/` and `en/` reference it via `../image/`
- Chart data values and interactive component code stays the same; only label strings are translated
- FAQ in JSON-LD should use `config.faqs` pattern (not manual `<head>` injection) if possible
- Shared assets (PDF downloads, etc.) stay in the parent directory
- Keep `defaultTheme` value the same in both versions (usually `"light"`)
