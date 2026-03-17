# 스토리 포스트 표준 스타일 가이드

DataClinic 스토리 포스트 생성 시 **반드시** 따라야 할 HTML/CSS 표준. 어기면 PR마다 수동 수정 발생.

> 참조 구현: https://blog.pebblous.ai/story/dataclinic-dataset-stats-story-pb/ko/

---

## PR 제출 전 체크리스트

- [ ] `<style>` 블록에 CSS 변수(`:root`, `[data-theme]`) 없음
- [ ] `<style>` 블록에 `.themeable-*` 재정의 없음
- [ ] `body {}`, `#header-placeholder {}` 인라인 재정의 없음
- [ ] 컨테이너: `container mx-auto ... max-w-[1400px]`
- [ ] TOC nav: `lg:w-[240px] lg:shrink-0 sticky top-20 self-start`
- [ ] TOC 제목: `<h3 class="font-bold themeable-heading mb-4 text-lg">목차</h3>`
- [ ] TOC ul: `space-y-3 text-sm border-l-2 themeable-toc-border`
- [ ] Hero: `text-left` (text-center 금지)
- [ ] Hero h1: `class="text-4xl md:text-5xl font-bold themeable-heading mb-4 leading-tight"` + `style="line-height: 1.4;"`
- [ ] Hero에 `<div id="share-buttons-placeholder" class="flex justify-start"></div>` 포함
- [ ] Publisher: `페블러스 데이터커뮤니케이션팀` ((주) 없음, 띄어쓰기 없음)
- [ ] Executive Summary: `key-insight` div, `text-3xl font-bold themeable-heading mb-8`, `fade-in-card`
- [ ] 일반 섹션 h2: `text-2xl font-bold themeable-heading mb-6 border-b-2 border-orange-500 pb-2`
- [ ] `section-heading` / `subsection-heading` 클래스 사용 없음
- [ ] `og:image:alt` 메타 태그 포함
- [ ] `twitter:image:alt` 메타 태그 포함
- [ ] `PebblousPage.init(config)` 직접 호출 (DOMContentLoaded 래퍼 없음, typeof 가드 없음)

---

## 1. CSS 링크 (순서 고정)

```html
<link rel="stylesheet" href="/css/theme-variables.css">
<link rel="stylesheet" href="/css/styles.css">
<link rel="stylesheet" href="/styles/common-styles.css">
<link rel="stylesheet" href="/styles/tailwind-build.css">
```

## 2. `<style>` 블록 규칙

**금지** (이미 theme-variables.css / common-styles.css가 처리):
```css
/* ❌ 절대 쓰지 말 것 */
:root { --bg-primary: ...; }
[data-theme="dark"] { ... }
[data-theme="beige"] { ... }
body { font-family: ...; background-color: ...; }
#header-placeholder { ... }
.themeable-card { ... }
.themeable-heading { ... }
.themeable-text { ... }
.themeable-muted { ... }
.themeable-border { ... }
```

**허용**: 해당 포스트 고유 클래스만
```css
/* ✅ 이런 것만 */
.drone-card { ... }
.sensor-tag { ... }
.stat-grid { ... }
```

## 3. 컨테이너 & 레이아웃 구조

```html
<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]">
    <div class="lg:flex lg:gap-8 lg:justify-center lg:items-start">

        <!-- Desktop TOC -->
        <nav class="hidden lg:block lg:w-[240px] lg:shrink-0 sticky top-20 self-start">
            <h3 class="font-bold themeable-heading mb-4 text-lg">목차</h3>
            <ul id="toc-links" class="space-y-3 text-sm border-l-2 themeable-toc-border">
                <li><a href="#section-id" class="block pl-4 -ml-px border-l-2 border-transparent hover:border-orange-500 themeable-toc-link">섹션 이름</a></li>
            </ul>
        </nav>

        <!-- Main Content -->
        <main class="max-w-[800px] px-4 sm:px-6">
            ...
        </main>

    </div>
</div>
```

**금지 패턴 → 표준 대체:**
| 금지 | 표준 |
|------|------|
| `<div class="flex justify-center pt-24 pb-16">` | `container mx-auto ... max-w-[1400px]` |
| `<nav class="... w-56 pr-8 ...">` | `lg:w-[240px] lg:shrink-0 sticky top-20 self-start` |
| `<h4 class="font-semibold ...">목차</h4>` | `<h3 class="font-bold themeable-heading mb-4 text-lg">` |
| TOC ul `space-y-2 themeable-muted` | `space-y-3 text-sm border-l-2 themeable-toc-border` |

## 4. Hero 헤더

```html
<header class="text-left mb-12">
    <h1 id="page-h1-title"
        class="text-4xl md:text-5xl font-bold themeable-heading mb-4 leading-tight"
        style="line-height: 1.4;"></h1>
    <p class="text-sm themeable-muted">2026.03 · 페블러스 데이터커뮤니케이션팀</p>
    <p class="text-sm themeable-muted mt-1">읽는 시간: ~N분 · <a href="../en/" class="text-orange-400 hover:text-orange-300 transition-colors">English</a></p>
    <div id="share-buttons-placeholder" class="flex justify-start"></div>
</header>
```

EN 버전:
```html
<p class="text-sm themeable-muted">2026.03 · Pebblous Data Communication Team</p>
<p class="text-sm themeable-muted mt-1">Reading time: ~N min · <a href="../ko/" ...>한국어</a></p>
```

**금지:**
- `text-center` (반드시 `text-left`)
- `<h1 id="page-h1-title"></h1>` (클래스 없는 빈 h1)
- `(주)페블러스 데이터 커뮤니케이션팀` → `페블러스 데이터커뮤니케이션팀`
- `share-buttons-placeholder` 누락

## 5. 섹션 제목

```html
<!-- Executive Summary -->
<h2 class="text-3xl font-bold themeable-heading mb-8">Executive Summary</h2>

<!-- 일반 섹션 -->
<h2 class="text-2xl font-bold themeable-heading mb-6 border-b-2 border-orange-500 pb-2">섹션 제목</h2>

<!-- 서브섹션 -->
<h3 class="text-xl font-semibold themeable-heading mb-4">서브섹션 제목</h3>
```

## 6. Executive Summary 표준

```html
<section id="executive-summary" class="mb-16 fade-in-card">
    <h2 class="text-3xl font-bold themeable-heading mb-8">Executive Summary</h2>
    <div class="key-insight">
        <p class="themeable-text leading-relaxed">...</p>
        <p class="themeable-text leading-relaxed mt-4">...</p>
    </div>
</section>
```

**금지:** `<div class="info-box">` → `key-insight` 사용

## 7. PebblousPage.init

```javascript
// ✅ 올바른 방법
const config = { ... };
PebblousPage.init(config);

// ❌ 금지
document.addEventListener('DOMContentLoaded', async function() {
    if (typeof PebblousPage !== 'undefined') {
        await PebblousPage.init(config);
    }
});
```
