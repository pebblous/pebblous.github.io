# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pebblous Blog (`blog.pebblous.ai`) — a static site on GitHub Pages for Pebblous Inc., covering AI-Ready Data, Physical AI, and Data Quality topics. Built with vanilla JavaScript + TailwindCSS (build, not CDN).

## Build & Development Commands

```bash
# Tailwind CSS build (REQUIRED after adding new Tailwind classes)
npm run build:css        # minified production build
npm run watch:css        # dev watch mode

# Local dev server
python3 -m http.server 8000
open http://localhost:8000

# Content pipeline
python3 scripts/scan-html-files.py   # Re-index all HTML → articles.json
node scripts/generate-rss.js         # Regenerate RSS feed
node scripts/generate-sitemap.js     # Regenerate sitemap.xml

# OG image generation
node tools/generate-og-image.js --from-html <path.html>  # Auto-extract title/subtitle
node tools/generate-og-image.js --title "Title" --subtitle "Sub"
```

## Architecture

### Initialization System — `PebblousPage.init(config)`

Every article page uses a single entry point in `scripts/common-utils.js`:

```javascript
PebblousPage.init({
  title: "페이지 제목",
  subtitle: "부제목",
  category: "tech",           // tech | business | art | story
  publishDate: "2026-02-28",
  faqs: [                     // FAQ Schema (JSON-LD only, auto-injected)
    { question: "Q?", answer: "A." }
  ]
});
```

This auto-loads: Header, Footer, BreadcrumbList Schema, FAQ Schema (JSON-LD), Related Posts, Hero Section (dynamic `<h1>`).

**Critical rules:**
- Hero `<h1 id="page-h1-title">` must be **empty** in HTML — filled dynamically by `PebblousPage.applyConfig()`
- FAQ: use ONLY `config.faqs` — NEVER add FAQPage JSON-LD in `<head>` (causes Google duplication errors)
- Always use `/scripts/common-utils.js` — never `/js/article-page.js` (deprecated)

### Module System (`scripts/common-utils.js`)

| Module | Purpose |
|--------|---------|
| `PebblousTheme` | 3-theme system (dark/light/beige) via `themeable-*` classes |
| `PebblousPage` | Page init, config, Hero section |
| `PebblousChart` | Chart.js wrapper (bar, doughnut, pie, bubble, line) |
| `PebblousTabs` | Tab component |
| `PebblousComponents` | Collapsible, accordion |
| `PebblousUI` | Progress bar, back-to-top |
| `PebblousComments` | giscus comment integration |
| `PebblousRelatedPosts` | Related posts from articles.json |
| `PebblousBreadcrumbs` | Breadcrumb navigation |
| `PebblousSchema` | JSON-LD schema injection |

### Index Page Modules (`scripts/index/`)

7 separate files using `window.IndexPage` namespace:
- `theme.js` (sync load in `<head>`, FOUC prevention), `modals.js`, `articles.js`, `search.js`, `stats.js`, `particles.js`, `init.js` (orchestrator, defer)

### CSS Structure

| File | Scope |
|------|-------|
| `css/styles.css` | Index page styles |
| `styles/common-styles.css` | Article page styles |
| `css/theme-variables.css` | Shared CSS variables (3 themes) |
| `styles/tailwind-build.css` | Built Tailwind (link, not CDN script) |

Cache busting: `?v=YYYYMMDD` query string on CSS/JS references.

### Theme System

Three themes: dark (default), light, beige. Use `themeable-*` CSS classes (e.g., `themeable-bg`, `themeable-text`). CSS variables defined in `css/theme-variables.css`. Never hardcode colors — always use theme variables.

## Content Pipeline

```
New HTML article
  → Register in articles.json (category, date, featured flag, etc.)
  → python3 scripts/scan-html-files.py (re-index)
  → node scripts/generate-rss.js
  → node scripts/generate-sitemap.js
  → git push → GitHub Pages auto-deploy
```

**articles.json schema**: `title`, `url` (relative), `date`, `category`, `featured` (bool), `description`, `image` (relative path, no leading `/`), `keywords[]`

## Key Conventions

### Layout
- Flex layout: 240px sticky TOC sidebar + max-w-[800px] main content
- Container max-w-[1400px], responsive breakpoint at lg (1024px)
- Reference implementation: `project/DataClinic/data-quality.html`

### SEO (4-Layer)
1. `<meta>` tags (title, description, canonical)
2. Open Graph + Twitter Cards
3. JSON-LD Schema (BreadcrumbList, FAQPage via config, Article)
4. Google Search Console

### Brand Colors
- Orange `#F86825` (primary/CTA), Teal `#14b8a6` (secondary), Slate `#475569` (neutral), Deep Blue `#020617` (dark bg)

### Typography & Korean
- Body 18px, line-height 2.1 (paragraphs), 2.0 (lists)
- **Never use italic for Korean text** — use `font-weight: 600` instead
- Headings: `<h2>` for sections, `<h3>` for subsections

### Article Page Structure
Every article/report page should include an **Executive Summary** section placed immediately after the hero (or PDF viewer, if present) and before Section 1. This is a standard component:

```html
<!-- TOC entry -->
<li><a href="#executive-summary" class="...themeable-toc-link">Executive Summary</a></li>

<!-- Section (between hero/PDF viewer and Section 1) -->
<section id="executive-summary" class="mb-16 fade-in-card">
    <h2 class="text-3xl font-bold themeable-heading mb-8">Executive Summary</h2>
    <div class="key-insight">
        <p class="themeable-text leading-relaxed"><!-- 3 paragraphs summarizing the article --></p>
    </div>
</section>
```

The `key-insight` box provides the teal-bordered highlight. Content should be 3 paragraphs: (1) core problem + solution, (2) technical approach + evidence, (3) business/regulatory urgency.

### Content Writing
- **Text-First, Visual-Second**: Always place explanation paragraph before any chart/card/diagram
- Source MD documents are the narrative backbone — preserve original sentences
- Featured articles: max 3 per category

### File Structure
```
/blog/           # Blog articles
/project/        # Project-specific content (subdirs per project)
/report/         # Report pages
/event/          # Event pages
/components/     # Reusable UI (header.html, footer.html)
/scripts/        # JS modules + Python tools
/tools/          # OG image generator, utilities
/docs/           # Internal documentation (17 files)
```

## Detailed Documentation

For deeper reference, see `docs/`:
- `docs/blog-creation-workflow.md` — 10-step blog post creation process
- `docs/seo.md` — Full SEO checklist and keyword strategy
- `docs/style.md` — UX/UI design rules and CSS conventions
- `docs/layout-guidelines.md` — Layout system details
- `docs/pebblous-modules.md` — PebblousChart & PebblousTabs API
- `docs/project.md` — Master project context and vision
- `docs/content-guidelines.md` — Text-First writing rules
- `docs/sns-writing-tone.md` — SNS "Warm Expert Tone" with data-farming metaphors
- `docs/index-renovation.md` — Index page renovation history (P0-P3)

## Prompt Files

- `.claude/CLAUDE-CONTENT.md` — Content writing rules (Text-First, source document utilization)
- `.claude/CLAUDE-SNS.md` — SNS writing tone (Warm Expert, agricultural metaphors)
