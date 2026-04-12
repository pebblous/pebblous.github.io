---
name: new-post
description: Create a new blog post (single or dual-language) from source MD/PDF
argument-hint: "[source-path or topic] [category: tech|business|art|story]"
---

When this skill is invoked:

1. **Read the workflow guide**: Read `docs/blog-creation-workflow.md` for the full 10-step process.

2. **Identify source material and language**:
   - Look for source files (MD/PDF) in the provided path or `source/` subdirectory
   - Detect source language from filename prefix: `(EN)` = English, `(KR)` = Korean, no prefix = Korean
   - The source language becomes the **default web language** (root redirect target)
   - If dual-language is requested, plan both versions

3. **Gather requirements** from the user:
   - Post title (in source language + translated)
   - Category: tech, business, art, or story
   - Single-language or dual-language (KR + EN)?
   - Whether FAQ section is needed

4. **Dual-language file structure** (when applicable):
   Follow the `event/2025/InvestKoreaSummit/` pattern:
   ```
   project/{Project}/{post-slug}/
   ├── index.html          # Redirect to default language
   ├── ko/
   │   └── index.html      # Korean version
   ├── en/
   │   └── index.html      # English version
   └── image/              # Shared image assets
   ```
   - `index.html`: Triple-layer redirect (meta refresh + canonical + JS) to default language
   - Default language = source language (EN source → redirect to `/en/`)
   - hreflang tags: `<link rel="alternate" hreflang="ko">`, `hreflang="en"`, `hreflang="x-default">`
   - hreflang x-default → English version (international SEO default)
   - Both versions share `image/` directory

5. **Create HTML files** following these rules:
   - Use `PebblousPage.init(config)` — never `article-page.js`
   - **CRITICAL**: config MUST include `mainTitle` and `subtitle` fields — these are REQUIRED for Hero h1 rendering, breadcrumbs, Article Schema, and TOC alignment. Without them, the title/subtitle will be blank and TOC positioning will break.
     ```javascript
     const config = {
         mainTitle: "메인 제목",       // REQUIRED — renders in h1 (3rem, bold)
         subtitle: "부제목",           // REQUIRED — renders below h1 (1.875rem, normal)
         pageTitle: "... | 페블러스",  // for <title> tag
         // ... other fields
     };
     ```
   - Hero `<h1 id="page-h1-title">` must be **empty** (filled dynamically by mainTitle/subtitle)
   - Include proper meta tags (title, description, OG, Twitter Cards)
   - Link to `/styles/tailwind-build.css` (not CDN script)
   - Link to `/scripts/common-utils.js`
   - Follow the layout: 240px TOC sidebar + max-w-[800px] main content
   - Apply themeable-* CSS classes (never hardcode colors)
   - For dual-lang: config.pagePath includes `/ko/` or `/en/`, generate counterpart URL via path replacement
   - **Executive Summary** (required): Place between hero/PDF viewer and Section 1.
     ```html
     <section id="executive-summary" class="mb-16 fade-in-card">
         <h2 class="text-3xl font-bold themeable-heading mb-8">Executive Summary</h2>
         <div class="key-insight">
             <p class="themeable-text leading-relaxed"><!-- para 1: core problem + solution --></p>
             <p class="themeable-text leading-relaxed mt-4"><!-- para 2: technical approach + evidence --></p>
             <p class="themeable-text leading-relaxed mt-4"><!-- para 3: business/regulatory urgency --></p>
         </div>
     </section>
     ```
     Add matching TOC entry: `<li><a href="#executive-summary" ...>Executive Summary</a></li>`

6. **Apply content rules** (from `.claude/CLAUDE-CONTENT.md`):
   - Text-First, Visual-Second: explanation paragraph before every visual
   - Preserve source document sentences as narrative backbone
   - Section numbering: 1, 2, 2.1, 2.2, 3...

7. **SEO checklist**:
   - FAQ only via `config.faqs` (JSON-LD auto-injected, no `<head>` duplication)
   - Canonical URL, BreadcrumbList (auto via PebblousPage)
   - For dual-lang: hreflang tags for both versions + x-default
   - Keywords: match page language (Korean page → Korean-first, English page → English-first)

8. **Generate OG image** (after HTML is written):
   ```bash
   node tools/generate-og-image.js --from-html <path-to-html>
   # --force to regenerate existing images
   ```
   - Category is auto-detected from `articles.json`
   - **Light/dark theme is auto-detected** from `data-theme="light"` in the HTML — no need to pass `--light` manually
   - Manual override: `--light` flag forces light background regardless of HTML attribute
   - Output goes to `{html-dir}/image/{html-name}.png`
   - Skips if image already exists (use `--force` to override)

9. **Register** both language versions in `articles.json` with all required fields.
   - **CRITICAL**: `articles.json` MUST be `{ "categories": {...}, "articles": [...] }` — NEVER a bare array `[...]`.
   - When adding entries, append to the `"articles"` array inside the wrapper. Do NOT strip the wrapper.
   - Do NOT set `"type": "hub"` — that field is reserved for hub pages only (see `/new-hub` skill).
   - **Password-protected pages**: If the page uses `PebblousAuth` / `content-locked`, MUST set `"locked": true` in articles.json. This enables the lock badge icon on blog main page cards. Without it, the card appears unlocked despite requiring a password.

10. **Reference implementations**:
   - Single-language: `project/DataClinic/data-quality.html`
   - Dual-language: `event/2025/InvestKoreaSummit/` (root redirect + `/ko/` subdirectory)

11. **Post-Task Chain** (MUST follow after completion):
   1. **`/seo-check`** on the new HTML — verify all 4 SEO layers
   2. **`/changelog`** — Record the new-post action
   3. **`/publish`** — Rebuild CSS + prepare commit
