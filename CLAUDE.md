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
node tools/generate-og-image.js --from-html <path.html>  # Auto-extract title/subtitle/theme
node tools/generate-og-image.js --from-html <path.html> --force  # Regenerate existing
node tools/generate-og-image.js --light "Title" "Sub" output.png  # Manual light mode
```

## Architecture

### Initialization System — `PebblousPage.init(config)`

Every article page uses a single entry point in `scripts/common-utils.js`:

```javascript
PebblousPage.init({
  mainTitle: "메인 제목",          // REQUIRED — h1에 렌더링 (3rem, bold)
  subtitle: "부제목",              // REQUIRED — h1 아래 렌더링 (1.875rem, normal)
  pageTitle: "제목 | 페블러스",    // <title> 태그용
  category: "tech",               // tech | business | art | story
  publishDate: "2026-02-28",
  publisher: "(주)페블러스 데이터 커뮤니케이션팀",
  defaultTheme: "light",          // light | dark | beige
  articlePath: "project/.../index.html",
  tags: ["tag1", "tag2"],
  faqs: [                         // FAQ Schema (JSON-LD only, auto-injected)
    { question: "Q?", answer: "A." }
  ]
});
```

**Key fields:** `mainTitle` + `subtitle` must both exist for Hero h1, Breadcrumbs, Article Schema to render. Do NOT use `title` — the field name is `mainTitle`.

This auto-loads: Header, Footer, BreadcrumbList Schema, FAQ Schema (JSON-LD), Related Posts, Hero Section (dynamic `<h1>`).

**Critical rules:**
- Hero `<h1 id="page-h1-title">` must exist in HTML — needed for breadcrumbs injection point
- **Breadcrumbs = Hero badge**: `PebblousBreadcrumbs` renders a hero-badge-style pill (`Home / Category`) with navigation links + Google BreadcrumbList Schema. Do NOT add static `<span class="hero-badge">` — breadcrumbs replace it.
- **Hero meta info** (below subtitle): 2-line compact format, centered, `text-sm themeable-muted`:
  ```html
  <!-- Korean -->
  <p class="text-sm themeable-muted">2026.01 · (주)페블러스 데이터 커뮤니케이션팀</p>
  <p class="text-sm themeable-muted mt-1">읽는 시간: ~15분 · <a href="../en/" class="text-orange-400 hover:text-orange-300 transition-colors">English</a></p>
  <!-- English -->
  <p class="text-sm themeable-muted">2026.01 · Pebblous Data Communication Team</p>
  <p class="text-sm themeable-muted mt-1">Reading time: ~15 min · <a href="../ko/" class="text-orange-400 hover:text-orange-300 transition-colors">한국어</a></p>
  ```
  Line 1: `YYYY.MM · team name` / Line 2: `reading time · language switch link`
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
| `PebblousAuth` | Password protection (separate file: `scripts/pbls-auth.js`) |

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

### Password Protection (`scripts/pbls-auth.js`)

Confidential IR pages use `PebblousAuth` for session-based password protection. CSS for the password modal lives in `styles/common-styles.css` (not inline).

**For new password-protected pages**, add to HTML:
```html
<body class="antialiased content-locked">
    <!-- Password overlay HTML (lock icon, form, error msg) -->
    <div class="password-overlay" id="password-overlay">...</div>

    <!-- At end of body: -->
    <script src="/scripts/pbls-auth.js?v=YYYYMMDD"></script>
    <script>
        PebblousAuth.initPageProtection({
            password: 'pageSpecificPassword',
            sessionKey: 'page_specific_session_key',
            pageName: 'Page Name for GTM'
        });
    </script>
</body>
```

**Master access (IR Press Room)**: `PebblousAuth.initPressRoom()` — one password unlocks all protected pages for the browser session via `sessionStorage('pbls_pressroom_auth')`.

**Key rules:**
- Password modal CSS is in `common-styles.css` — do NOT duplicate inline
- Master password works on any protected page (auto-grants session-wide access)
- Press Room pages must have `<meta name="robots" content="noindex, nofollow">`

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

**articles.json structure** — MUST be a wrapper object, NEVER a bare array:
```json
{
  "categories": {
    "art":      { "name": "Data Art",      "description": "...", "icon": "🎨" },
    "tech":     { "name": "Tech Insights", "description": "...", "icon": "⚙️" },
    "business": { "name": "Business",      "description": "...", "icon": "💼" },
    "story":    { "name": "Data Stories",   "description": "...", "icon": "📊" }
  },
  "articles": [ ... ]
}
```
- **CRITICAL**: `init.js` reads `data.categories` and `data.articles`. A bare array `[...]` breaks the index page.
- When editing `articles.json`, always preserve the `{ "categories": {...}, "articles": [...] }` wrapper.
- Article fields: `id`, `title`, `path` (relative), `date`, `category`, `published` (bool), `featured` (bool), `description`, `image` (relative, no leading `/`), `tags[]`, `type` (optional, `"hub"` for hub pages — auto-excluded from hub card grids)

**articles.json merge conflict 규칙 (MUST):**
- **절대 한쪽만 취하지 말 것** — `accept theirs` / `accept ours` 금지. 양쪽을 수동으로 병합할 것
- 병합 후 반드시 항목 수 검증: `python3 -c "import json; d=json.load(open('articles.json')); print(len(d['articles']), 'articles')"`
- 이전 커밋 대비 `published: true` 항목 수가 줄었으면 병합 오류 — 즉시 확인
- (배경: 2026-03-24 사고에서 merge conflict를 upstream만 취해 82개 항목 누락 발생, Issue #34)

## Key Conventions

### Layout
- **Reference implementation**: `report/blog-2026/index.html`
- Container: `max-w-[1400px]` + `px-4 sm:px-6 lg:px-8`
- Flex: `lg:flex lg:gap-8 lg:justify-center lg:items-start`
- TOC sidebar: `lg:w-[240px] lg:shrink-0 sticky top-20 self-start`
- Main content: `max-w-[800px] px-4 sm:px-6`
- Header: `#header-inner` max-width 1136px (CSS, lg only) — aligns logo with TOC, Contact with content edge
- TOC vertical alignment: JS `alignTOC()` in `common-utils.js` — "목차" starts at first section (Executive Summary)
- Responsive breakpoint at lg (1024px): TOC hidden below lg

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
- `docs/blog-html-checklist.md` — **Blog HTML 작성 전/중/후 검증 체크리스트** (필독)
- `docs/blog-creation-workflow.md` — 10-step blog post creation process
- `docs/seo.md` — Full SEO checklist and keyword strategy
- `docs/style.md` — UX/UI design rules and CSS conventions
- `docs/layout-guidelines.md` — Layout system details
- `docs/pebblous-modules.md` — PebblousChart & PebblousTabs API
- `docs/project.md` — Master project context and vision
- `docs/content-guidelines.md` — Text-First writing rules
- `docs/sns-writing-tone.md` — SNS "Warm Expert Tone" with data-farming metaphors
- `docs/index-renovation.md` — Index page renovation history (P0-P3)
- `docs/post-writing-lessons-for-pb.md` — pb(Pebblo Claw) 전용 포스팅 작성 가이드 (PR#23 리뷰 교훈)

## Skill Workflow Chain

콘텐츠 작업 후 반드시 아래 순서를 따른다. 스킬을 직접 호출하거나 수동으로 동일한 단계를 실행한다.

### Content Task → Post-Task Chain

```
1. 콘텐츠 작업 (new-post, bilingual, text-reinforce, fix, feature 등)
   ↓
2. /seo-check [수정된 HTML 경로]   ← SEO 4계층 검증
   ↓
3. /changelog                       ← 변경 이력 기록
   ↓
4. /publish                         ← Tailwind 빌드 + commit 준비
   ↓
5. /commit                          ← 커밋 + push
```

**핵심 규칙:**
- `/seo-check`은 새 페이지 생성 또는 메타태그 변경 시 **반드시** 실행
- `/changelog`은 모든 콘텐츠 변경 후 **반드시** 실행 (수동 echo 대신 스킬 사용 권장)
- `/publish`는 Tailwind 클래스 변경이 없어도 실행하면 안전 (빌드 + diff 확인)
- 단순 텍스트 수정은 2-3을 생략하고 4-5만 해도 됨

### Changelog (Post-Action Logging)

After completing **any task that modifies blog content** (whether via a skill or ad-hoc), use `/changelog` skill or manually append a JSON line to `history/changelog.jsonl`:

```bash
echo '{"timestamp":"...","post":"...","action":"...","summary":"..."}' >> history/changelog.jsonl
```

Required fields: `timestamp` (ISO 8601 UTC), `post` (relative path), `action` (text-reinforce|new-post|bilingual|style|fix|seo|feature|content), `summary`.
Optional fields: `sections[]`, `languages[]`, `files[]`, `skill`, `linesAdded`.

See `.claude/skills/changelog/SKILL.md` for full schema and examples.

## Changelog (Post-Action Logging)

After completing **any task that modifies blog content** (whether via a skill or ad-hoc), append a JSON line to `history/changelog.jsonl`:

```bash
echo '{"timestamp":"...","post":"...","action":"...","summary":"..."}' >> history/changelog.jsonl
```

Required fields: `timestamp` (ISO 8601 UTC), `post` (relative path), `action` (text-reinforce|new-post|bilingual|style|fix|seo|feature|content), `summary`.
Optional fields: `sections[]`, `languages[]`, `files[]`, `skill`, `linesAdded`.

See `.claude/skills/changelog/SKILL.md` for full schema and examples.

## Changelog (Post-Action Logging)

After completing **any task that modifies blog content** (whether via a skill or ad-hoc), append a JSON line to `history/changelog.jsonl`:

```bash
echo '{"timestamp":"...","post":"...","action":"...","summary":"..."}' >> history/changelog.jsonl
```

Required fields: `timestamp` (ISO 8601 UTC), `post` (relative path), `action` (text-reinforce|new-post|bilingual|style|fix|seo|feature|content), `summary`.
Optional fields: `sections[]`, `languages[]`, `files[]`, `skill`, `linesAdded`.

See `.claude/skills/changelog/SKILL.md` for full schema and examples.

## Prompt Files

- `.claude/CLAUDE-CONTENT.md` — Content writing rules (Text-First, source document utilization)
- `.claude/CLAUDE-SNS.md` — SNS writing tone (Warm Expert, agricultural metaphors)
