---
name: new-hub
description: Create a new bilingual hub page for a topic keyword
argument-hint: "[topic keyword] e.g. 'Synthetic Data', 'Physical AI'"
---

When this skill is invoked:

1. **Identify the topic keyword** from the argument (e.g., "Synthetic Data", "Physical AI").

2. **Scan `articles.json`** to find all published articles related to the keyword:
   - Search in `title`, `description`, `tags`, `path`, and `category`
   - Group by language (KO / EN)
   - Note which articles are `locked: true`
   - Select the best `pathFilter` and `extraPaths` for `PebblousHubCards.init()`

3. **Determine project directory**:
   - If articles already exist under `project/{ProjectName}/`, use that as the hub root
   - Hub pages go at: `project/{ProjectName}/ko/index.html` and `project/{ProjectName}/en/index.html`
   - If a root `project/{ProjectName}/index.html` exists (redirect), update it to redirect to the hub

4. **Create hub pages** (KO + EN) following this standard structure:

   ```
   project/{ProjectName}/
   ├── index.html          # Redirect → ./ko/ (or ./en/ if EN-first)
   ├── ko/
   │   └── index.html      # Korean hub page
   └── en/
       └── index.html      # English hub page
   ```

### Hub Page Template

Every hub page MUST follow this exact structure:

```html
<!DOCTYPE html>
<html lang="{ko|en}" data-theme="light">
<head>
    <!-- Standard meta tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Pebblous Data Communication Team">
    <meta name="language" content="{Korean|English}">
    <meta name="robots" content="index, follow">
    <meta name="revisit-after" content="7 days">

    <title>{Hub Title} | {페블러스|Pebblous}</title>
    <meta name="description" content="...">
    <meta name="keywords" content="...">

    <!-- Canonical + hreflang (REQUIRED for bilingual) -->
    <link rel="canonical" href="https://blog.pebblous.ai/project/{Project}/{lang}/">
    <link rel="alternate" hreflang="ko" href="https://blog.pebblous.ai/project/{Project}/ko/">
    <link rel="alternate" hreflang="en" href="https://blog.pebblous.ai/project/{Project}/en/">
    <link rel="alternate" hreflang="x-default" href="https://blog.pebblous.ai/project/{Project}/ko/">

    <!-- Open Graph -->
    <meta property="og:title" content="{Hub Title}">
    <meta property="og:description" content="...">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://blog.pebblous.ai/project/{Project}/{lang}/">
    <meta property="og:image" content="https://blog.pebblous.ai/project/{Project}/image/{og-image}.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:site_name" content="Pebblous Blog">
    <meta property="og:locale" content="{ko_KR|en_US}">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{Hub Title}">
    <meta name="twitter:description" content="...">
    <meta name="twitter:image" content="https://blog.pebblous.ai/project/{Project}/image/{og-image}.png">

    <!-- Favicon -->
    <link rel="icon" href="/image/favicon.ico" sizes="any">
    <link rel="icon" href="/image/Pebblous_BM_Orange_RGB.png" type="image/png">
    <link rel="apple-touch-icon" href="/image/Pebblous_BM_Orange_RGB.png">

    <!-- Google Tag Manager -->
    <script>(...GTM snippet...)</script>

    <!-- Styles (EXACT order) -->
    <link rel="stylesheet" href="/css/styles.css?v=YYYYMMDD">
    <link rel="stylesheet" href="/styles/common-styles.css?v=YYYYMMDD">
    <link rel="stylesheet" href="/styles/tailwind-build.css">
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css">
</head>
<body class="themeable-bg themeable-text font-sans">
    <!-- GTM noscript -->
    <noscript>...</noscript>

    <!-- Header -->
    <div id="header-placeholder"></div>

    <!-- Main Container -->
    <div class="container mx-auto px-6 py-8 md:py-12 max-w-6xl">

        <!-- Hero Section -->
        <header class="text-center mb-12">
            <h1 id="page-h1-title" class="text-4xl md:text-5xl font-bold themeable-heading mb-4 leading-tight" style="color: #F86825;"></h1>
            <p class="text-sm themeable-muted">{Team Name} · <a href="/project/{Project}/{otherLang}/" class="text-orange-400 hover:text-orange-300 transition-colors">{Language Switch}</a></p>
        </header>

        <!-- Intro Section (key-insight box, 2-3 paragraphs) -->
        <div class="intro-section">
            <div class="key-insight">
                <p class="themeable-text leading-relaxed">...</p>
                <p class="themeable-text leading-relaxed mt-4">...</p>
            </div>
        </div>

        <!-- Series Guide (manual card list linking to key articles) -->
        <div class="intro-section">
            <h2 class="text-2xl font-bold themeable-heading mb-6">{시리즈 가이드|Series Guide}</h2>
            <div class="space-y-4">
                <!-- Repeat for each article: -->
                <div class="themeable-card-bg rounded-lg p-4 border themeable-border">
                    <a href="{article-path}" class="text-lg font-semibold" style="color: #F86825;">
                        {Article Title}
                        <!-- If locked: add lock badge -->
                        <span class="card-lock-badge">...lock SVG...</span>
                    </a>
                    <p class="themeable-text text-sm mt-1 leading-relaxed">{Description}</p>
                </div>
            </div>
        </div>

        <!-- Dynamic Article Cards Grid -->
        <div class="hub-section">
            <h2 class="text-2xl font-bold themeable-heading mb-6">{관련 블로그 모음|Related Blog Posts}</h2>
            <div id="{cards-container-id}">
                <!-- Dynamically loaded from articles.json -->
            </div>
        </div>

    </div>

    <!-- Footer -->
    <div id="footer-placeholder"></div>

    <!-- Scripts (EXACT order) -->
    <script src="/scripts/card-particles.js"></script>
    <script src="/scripts/card-renderer.js"></script>
    <script src="/scripts/hub-cards.js"></script>
    <script src="/scripts/common-utils.js?v=YYYYMMDD"></script>

    <script>
        PebblousHubCards.init({
            containerId: '{cards-container-id}',
            pathFilter: '{pathFilter}',
            extraPaths: [...],
            language: '{ko|en}'
        });

        document.addEventListener('DOMContentLoaded', async function() {
            const config = {
                mainTitle: "{Hub Main Title}",      // REQUIRED
                subtitle: "{Hub Subtitle}",          // REQUIRED
                pageTitle: "{Page Title} | {페블러스|Pebblous}",
                publishDate: "{YYYY년 M월|Month YYYY}",
                publisher: "{(주)페블러스 데이터 커뮤니케이션팀|Pebblous Data Communication Team}",
                defaultTheme: "light",
                category: "{tech|business|art|story}",
                articlePath: "project/{Project}/{lang}/index.html",
                tags: [...],
                faqs: [
                    { question: "...", answer: "..." },
                    // 3-5 FAQs
                ]
            };

            if (typeof PebblousPage !== 'undefined') {
                await PebblousPage.init(config);
            }
        });
    </script>
</body>
</html>
```

### Critical Rules

- **Container**: Always `container mx-auto px-6 py-8 md:py-12 max-w-6xl`
- **Hero h1**: Empty `<h1 id="page-h1-title">` — filled by `PebblousPage.init({ mainTitle, subtitle })`
- **`mainTitle` + `subtitle`**: MUST be in config — without them, title is blank and TOC breaks
- **Locked articles**: Show lock badge SVG inline next to title, append "(암호 필요)" / "(Password required)" to description
- **Lock badge SVG**: `<span class="card-lock-badge"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" /></svg></span>`
- **Script order**: card-particles.js → card-renderer.js → hub-cards.js → common-utils.js
- **Style order**: styles.css → common-styles.css → tailwind-build.css → Pretendard font
- **Cache busting**: Use `?v=YYYYMMDD` on CSS/JS files
- **SEO 4-Layer**: meta tags, OG, Twitter Cards, FAQ Schema (via config.faqs)
- **hreflang**: ko, en, x-default (→ ko version unless EN-primary)
- **Language switch**: KO page → English link, EN page → 한국어 link
- **Theme**: Always `data-theme="light"`, `defaultTheme: "light"`

5. **Update root redirect** (if exists):
   - Change `project/{Project}/index.html` to redirect to `./ko/` (or `./en/`)

6. **Register in `articles.json`**:
   - Add both KO and EN hub entries to the `"articles"` array
   - **CRITICAL**: Set `"type": "hub"` — this auto-excludes the hub from other hubs' card grids (no `excludePaths` needed)
   - Hub articles typically use `"category": "tech"` or `"business"` depending on topic
   - Set `"published": true`
   - **CRITICAL**: Preserve `{ "categories": {...}, "articles": [...] }` wrapper

7. **Post-Task Chain** (MUST follow after completion):
   1. **OG image**: `node tools/generate-og-image.js --from-html {hub-html-path} --light`
   2. **`/seo-check`** on both language versions
   3. **`/changelog`** — Record the new-hub action
   4. **`/publish`** — Run content pipeline (scan, RSS, sitemap, CSS build)

### Reference Implementations
- IR Hub: `project/IR/ko/index.html`, `project/IR/en/index.html`
- ISO5259 Hub: `project/ISO5259/ko/index.html`, `project/ISO5259/en/index.html`
