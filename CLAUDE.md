# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pebblous Blog (`blog.pebblous.ai`) — a static site on GitHub Pages for Pebblous Inc., covering AI-Ready Data, Physical AI, and Data Quality topics. Built with vanilla JavaScript + TailwindCSS (build, not CDN).

## ⛔ Branch Policy — 새 작업 시작 시 반드시 확인

여러 Claude 창이 병렬로 작업 중인 환경이다. 위험을 피하려면:

### 새 작업을 시작하기 전 — 항상 사용자에게 질문

새로운 작업(파일 수정, 새 글 작성, 스킬 변경 등) 요청을 받으면 **즉시 `git status`로 현재 브랜치를 확인하고 사용자에게 물어본다**:

```
현재 브랜치: <branch-name>
이 작업을 어디서 진행할까요?
1) 현재 브랜치에서 계속
2) 새 브랜치 생성 (제안: feat/xxx-yyy)
3) 다른 기존 브랜치로 이동
```

**예외 — 질문 생략해도 되는 경우:**
- 사용자가 명시적으로 브랜치를 지정한 경우 ("feat/foo에서 작업해")
- 단순 파일 읽기·조회·디버깅(쓰기 작업 없음)
- 같은 세션에서 이미 브랜치 결정을 한 후의 후속 작업

### 브랜치 네이밍 컨벤션

```
feat/<주제>     — 새 기능, 새 콘텐츠
fix/<주제>      — 버그 수정
chore/<주제>    — 빌드, 설정, 의존성
docs/<주제>     — 문서 변경
```

### main 브랜치 직접 작업 금지

`main`에 있을 때 쓰기 작업을 받으면 **반드시 새 브랜치를 만들도록 사용자에게 제안**한다.

### Push 규칙 (병렬 작업 환경)

- `git push --force` 단독 사용 금지 → 항상 `--force-with-lease` 사용
- rebase 후 push 전에 `git fetch`로 다른 에이전트의 새 커밋 확인
- 다른 에이전트가 같은 브랜치에 커밋했을 가능성이 보이면 push 보류하고 사용자에게 보고

### 같은 디렉토리 다른 세션과 분리 — git worktree

같은 컴퓨터에서 여러 Claude 세션이 같은 working tree를 공유할 때 한 세션이 브랜치 전환하면 다른 세션의 파일이 갑자기 바뀜. **`git status` 결과가 의도와 다르거나 미커밋 변경이 보이면 worktree로 분리**:

```bash
# 별도 디렉토리에 새 브랜치 + worktree 생성
git worktree add ~/Downloads/pebblous-<짧은이름> -b <branch> origin/main
cd ~/Downloads/pebblous-<짧은이름>
# ... 작업, 커밋, push, PR 머지 ...

# 머지는 gh pr merge 로 (로컬 main 안 건드림)
gh api -X PUT repos/pebblous/pebblous.github.io/pulls/<NUM>/merge -f merge_method=merge

# 정리
cd "/Users/joohaeng/BeerGraph Dropbox/Joo-Haeng Lee/Dev/github/pebblous.github.io"
git worktree remove ~/Downloads/pebblous-<짧은이름>
```

### 충돌 위험 파일 — 동시 수정 주의

| 파일 | 위험 | 대응 |
|------|------|------|
| **articles.json** | 여러 에이전트 동시 항목 추가 | 머지 충돌 시 **양쪽 다 살리기** (한쪽만 취하기 금지 — Issue #34) |
| **scripts/common-utils.js, styles/common-styles.css** | 사이트 전체 영향 | 수정 중에는 다른 PR 머지 잠시 보류 권장 |
| **CLAUDE.md, .claude/skills/** | 모든 에이전트 행동 영향 | 변경 후 영향 받는 에이전트 작업이 새 정책을 따르는지 확인 |
| **sitemap.xml, rss.xml** | CI 자동 생성 | 수동 편집 피하기 |
| `history/changelog.jsonl` | append-only지만 동시 append 충돌 가능 | 충돌 시 양쪽 라인 모두 보존 |
| 콘텐츠 폴더 (`blog/`, `report/`, `story/`, `project/`, `pebblopedia/`) | 보통 분리됨 | 한 글 = 한 PR 원칙 유지 |

### 세션 종료 시 untracked 정리 (Issue #129)

세션을 마무리하기 전 반드시 `git status`로 untracked 파일을 확인한다. 멀티 에이전트 환경에서 untracked 파일이 남으면 다음 세션의 `git pull`이나 `git checkout`에서 충돌을 일으킨다.

작업 상태별 처리:
- **작업 완료 + 커밋 가능** → feature branch에 커밋 후 push
- **작업 중단(WIP)** → `git stash push -u -m "WIP: <설명>"`으로 보관
- **이미 remote에 있는 파일과 동일** → `git status`로 확인 후 안전하게 삭제 (다음 pull에서 정상 받음)
- **불필요한 임시 파일** → 삭제 또는 `.gitignore` 추가

> ⚠️ **교훈 (2026-05-05, Issue #129)**: 다른 에이전트가 남긴 untracked 파일이 main의 동일 파일과 충돌하여 `git pull` 차단됨.

## Build & Development Commands

```bash
# Tailwind CSS build (REQUIRED after adding new Tailwind classes)
npm run build:css        # minified production build
npm run watch:css        # dev watch mode

# Local dev server
python3 -m http.server 8000
open http://localhost:8000

# Content pipeline
python3 scripts/scan-html-files.py   # Re-index HTML → articles.json (publisher, wordCount, modified)
python3 scripts/scan-html-files.py --clean  # + 비표준 필드 정리
python3 scripts/scan-html-files.py --dry-run  # 변경 없이 미리보기
node scripts/generate-rss.js         # Regenerate RSS feed
node scripts/generate-sitemap.js     # Regenerate sitemap.xml
python3 scripts/generate-llms-txt.py # Regenerate llms.txt (AI crawler index)

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
- **⛔ Hero meta info — 동적 생성 (HTML 하드코딩 금지)**:
  `PebblousPage.init()`이 config의 `publishDate`, `publisher`, `wordCount`에서 메타를 자동 생성한다.
  HTML에 `<p class="text-sm themeable-muted">` 메타 라인이나 `<div id="share-buttons-placeholder">`를 직접 넣지 말 것.
  렌더링 결과: `날짜 | 팀명 | ~N분 | English | [공유아이콘]` (1줄 가로, `.hero-meta-group`)
  - readTime은 `config.wordCount / 500`으로 자동 계산 (wordCount 없으면 `<main>` 텍스트에서 계산)
  - 언어 전환: fetch HEAD로 상대 언어 페이지 존재 확인, 없으면 한글로 fallback
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
  → python3 scripts/scan-html-files.py          (re-index: publisher, wordCount, modified 자동 추출)
  → python3 scripts/scan-html-files.py --clean   (비표준 필드 정리 포함)
  → node scripts/generate-rss.js
  → node scripts/generate-sitemap.js
  → python3 scripts/generate-llms-txt.py
  → git push → GitHub Pages auto-deploy
  (rss.xml, sitemap.xml, llms.txt 은 CI(`update-sitemap.yml`)가 push 후 자동 재생성 — 로컬에서 건드리지 않는다)
```

**메타데이터 아키텍처** (Single Source of Truth):
- `articles.json`이 메타데이터 DB 역할 (`publisher`, `wordCount`, `modified` 등)
- `PebblousPage.init(config)`의 config가 렌더링 시점에 사용 (fetch 없이 즉시)
- `scan-html-files.py`가 HTML → articles.json 동기화 보장
- HTML에 메타 하드코딩 금지 — JS가 config에서 동적 생성

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
- Article fields:
  - **필수**: `id`, `title`, `path` (relative), `date`, `category`, `published` (bool), `description`, `language`, `tags[]`
  - **선택**: `featured` (bool), `image` (relative, no leading `/`), `type` (`"hub"` for hub pages)
  - **자동 생성** (`scan-html-files.py`가 HTML에서 추출): `publisher`, `wordCount`, `modified`
  - `publisher`: PebblousPage.init() config에서 추출 — 메타 영역에 표시
  - `wordCount`: `<main>` 본문 글자 수 — readTime 계산용 (`Math.ceil(wordCount/500)`)
  - `modified`: git log 기반 최종 수정일 (YYYY-MM-DD)

**⛔ articles.json 필드명 규칙 (Issue #63 — 위반 시 CI 실패 + 카드 렌더링 중단):**

| ✅ 올바른 필드 | ❌ 금지 필드 (에이전트 오용 패턴) |
|---------------|----------------------------------|
| `title` | `cardTitle` |
| `date` | `publishDate` |
| `path` | `url` |
| `language` | `lang` |
| `published: true` | 생략 |

- `path`는 trailing slash 포함, 선행 `/` 없음: `"story/{slug}/ko/"`
- `published`는 반드시 boolean `true` 명시 (생략 시 블로그에서 미표시)
- `date`는 `"YYYY-MM-DD"` 형식

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
- Orange `#F86825` (primary/CTA), Slate `#475569` (neutral), Deep Blue `#020617` (dark bg)
- **⛔ 색상 원칙**: 흰색 + 검정 + 오렌지만. 틸(#14b8a6) 신규 사용 금지, 그라데이션 금지 (중간색 탁함)
- 기존 코드의 틸은 유지하되 새 작업에서는 오렌지로 대체

### Typography & Fonts
- **글꼴 체계** (`css/theme-variables.css`):
  - `--font-display`: 제목/디스플레이 — `Outfit`(영문) → `Wanted Sans Variable`(한글) → `Pretendard`
  - `--font-sans`: 본문 — `Pretendard`
  - 적용 범위: h1~h6, TOC, 헤더 메뉴, hero-meta-group → `var(--font-display)`
- **CDN**: Pretendard (jsdelivr), Wanted Sans (jsdelivr), Outfit (Google Fonts)
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

## ⛔ Blog Article Mandatory Protocol — ZERO EXCEPTIONS

**아티클 HTML을 새로 작성하거나 수정하기 전에 반드시 아래를 실행한다. 기억에 의존 금지.**

### Step 0: Pre-Write Read (매번, 예외 없음)

```
Read: docs/post-writing-lessons-for-pb.md
Read: .claude/skills/blog-write/references/html-conventions.md
Read: docs/blog-html-checklist.md
```

이 3개를 Read 툴로 직접 읽지 않으면 작업을 시작하지 않는다.

---

### ⛔ Forbidden Anti-Patterns — 발견 즉시 수정

아래 패턴이 코드에 있으면 **표준 미준수**. 커밋 전에 반드시 제거한다.

#### 1. DOMContentLoaded 비표준 스크립트 (금지)
```javascript
// ❌ 절대 금지
document.addEventListener('DOMContentLoaded', function() {
    const h1 = document.getElementById('page-h1-title');
    h1.textContent = ...;
});
<script src="/scripts/share-buttons.js" defer></script>
```
```javascript
// ✅ 유일한 정답
PebblousPage.init({ mainTitle: "...", subtitle: "...", faqs: [...] });
// share-buttons.js 별도 로드 금지 — common-utils.js가 포함
```

#### 2. H1 하드코딩 (금지)
```html
<!-- ❌ 절대 금지 -->
<h1 id="page-h1-title">제목을 여기에 직접 쓰면 안 된다</h1>

<!-- ✅ 유일한 정답 — 반드시 비어있어야 함 -->
<h1 id="page-h1-title" class="text-4xl md:text-5xl font-bold themeable-heading mb-4 leading-tight"></h1>
```

#### 3. h2 비표준 패턴 (금지)
```html
<!-- ❌ 절대 금지 -->
<h2 class="text-2xl font-bold themeable-heading mb-6">1. 섹션 제목</h2>

<!-- ✅ 유일한 정답 -->
<div class="flex items-center gap-4 mb-8">
    <span class="number-badge">1</span>
    <h2 class="text-3xl font-bold themeable-heading">섹션 제목</h2>
</div>
```

#### 3-1. h3 서브섹션 번호 (표준)
```html
<!-- ✅ 서브섹션 번호는 sub-number-badge 사용 -->
<h3 class="text-xl font-semibold themeable-heading mb-4"><span class="sub-number-badge">1.1</span>서브섹션 제목</h3>
```

#### 4. fade-in-card 누락 (금지)
```html
<!-- ❌ 절대 금지 -->
<section id="section-1" class="mb-16">

<!-- ✅ 유일한 정답 -->
<section id="section-1" class="mb-16 fade-in-card">
```

#### 5. FAQ 하드코딩 (금지)
```html
<!-- ❌ 절대 금지 — FAQ를 HTML에 직접 쓰면 안 됨 -->
<div class="themeable-card rounded-xl p-5">
    <p class="font-semibold">질문?</p>
    <p>답변.</p>
</div>

<!-- ✅ 유일한 정답 — placeholder + PebblousPage.init faqs[] -->
<section id="faq" class="mb-16 fade-in-card"></section>
// PebblousPage.init({ faqs: [ /* 7개 이상 */ ] })
```

#### 6. CSS 오로드 오류 (금지)
```html
<!-- ❌ 절대 금지 — 아티클에 index 전용 CSS 포함 금지 -->
<link rel="stylesheet" href="/css/styles.css">

<!-- ✅ 아티클 CSS 3개 (순서 고정) -->
<link rel="stylesheet" href="/css/theme-variables.css?v=YYYYMMDD">
<link rel="stylesheet" href="/styles/tailwind-build.css?v=YYYYMMDD">
<link rel="stylesheet" href="/styles/common-styles.css?v=YYYYMMDD">
```

---

### Pre-Commit Self-Check (커밋 전 grep 검증)

```bash
# 아래 명령어를 커밋 전에 실행한다. 출력이 있으면 수정 후 커밋.
grep -n "DOMContentLoaded" [html파일]        # → 0줄이어야 함
grep -n "share-buttons.js" [html파일]        # → 0줄이어야 함
grep -n "text-2xl.*mb-6" [html파일]          # → 0줄이어야 함 (h2 비표준)
grep -n "page-h1-title\">[^<]" [html파일]   # → 0줄이어야 함 (H1 하드코딩)
grep -n "class=\"mb-16\"" [html파일]         # → 0줄이어야 함 (fade-in-card 누락)
grep -c "question:" [html파일]               # → 7 이상이어야 함 (FAQ 수)
```

---

### Bilingual Parity Rules

- KO 완료 직후 EN도 완료해야 한다. "나중에"는 없다.
- articles.json에 KO/EN 2개 항목을 동시에 등록한다.
- EN 없이 KO만 push 금지 (articles.json EN 항목 누락 포함).

---

## Detailed Documentation

For deeper reference, see `docs/`:
- `docs/blog-html-checklist.md` — **Blog HTML 작성 전/중/후 검증 체크리스트** (필독)
- `docs/blog-creation-workflow.md` — 10-step blog post creation process
- `docs/seo.md` — Full SEO checklist and keyword strategy
- `docs/title-strategy.md` — **한국어/영어 제목 전략 가이드** (SEO 제목 vs 본문 제목 분리, CTR 패턴, 스킬 체인)
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

## Prompt Files

- `.claude/CLAUDE-CONTENT.md` — Content writing rules (Text-First, source document utilization)
- `.claude/CLAUDE-SNS.md` — SNS writing tone (Warm Expert, agricultural metaphors)
- `.claude/AGENT-POLICY.md` — **에이전트 거버넌스 정책** (지식 소스 계층, 스킬 자급자족 원칙, 필드명 정본, 협업 규칙)
