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

## 7. 제목/부제목 일관성 (Title Consistency Rule)

제목과 부제목은 **5곳에서 동일**해야 합니다:

| 위치 | 제목 | 부제목 |
|------|------|--------|
| `config.mainTitle` | ✅ 원본 | |
| `config.subtitle` | | ✅ 원본 |
| `config.pageTitle` | `{mainTitle} — {subtitle} \| 페블러스` | |
| `<title>` | `config.pageTitle`과 동일 | |
| `og:title` | `{mainTitle} — {subtitle}` | |
| `twitter:title` | `og:title`과 동일 | |
| `articles.json title` | `{mainTitle} — {subtitle}` | |
| OG 이미지 | `og:title`에서 렌더링 (줄바꿈만 다름) | |

**변경 시 체크리스트:**
1. `config.mainTitle` / `config.subtitle` 수정
2. `config.pageTitle` 수정
3. `<title>` 태그 수정
4. `og:title` + `twitter:title` 수정
5. `og:image:alt` + `twitter:image:alt` 수정
6. `articles.json` title + description 수정
7. OG 이미지 재생성 (`node tools/generate-og-image.js --from-html ... --force`)

## 7-1. PebblousPage.init

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

## 8. 이미지 컴포넌트 — 대표이미지 병행 (필수)

### 대표이미지 API

```javascript
// 클래스별 대표이미지 URL 가져오기
GET https://api.dataclinic.ai/report/classwise/chart/image
  ?diagnosis_report_id={reportId}
  &diagnosis_report_chart_id=6
  &offset=0&limit=2000

// CDN URL 패턴
https://cdn.dataclinic.ai/{representativeImagePath}
```

### 8-1. L1 — class-card (실제 + 평균 이미지 1:1)

```css
.class-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:.75rem; margin:1.5rem 0; }
@media(min-width:640px){ .class-grid { grid-template-columns:repeat(3,1fr); } }
.class-card { border-radius:.5rem; overflow:hidden; background-color:var(--bg-card); border:1px solid var(--border-color); }
.class-card-images { display:grid; grid-template-columns:1fr 1fr; gap:1px; background-color:var(--border-color); }
.class-card-img-wrap { position:relative; overflow:hidden; background-color:var(--bg-card); }
.class-card-img-wrap img { width:100%; aspect-ratio:1; object-fit:cover; display:block; }
.img-type-label {
    position:absolute; bottom:2px; left:2px;
    font-size:.5rem; font-weight:600;
    background:rgba(0,0,0,.65); color:#fff;
    padding:1px 3px; border-radius:2px; line-height:1.4;
}
.class-card .class-name { font-size:.75rem; text-align:center; padding:.3rem .25rem; color:var(--text-muted); line-height:1.3; }
```

```html
<div class="class-grid mb-6">
    <div class="class-card">
        <div class="class-card-images">
            <div class="class-card-img-wrap">
                <img src="https://cdn.dataclinic.ai/datasets/{dataset}/train/{class}/{file}"
                     alt="{class} 대표 이미지" loading="lazy">
                <span class="img-type-label">실제</span>  <!-- EN: Actual -->
            </div>
            <div class="class-card-img-wrap">
                <img src="https://cdn.dataclinic.ai/diagnosis_results/.../meanimage/{class}.png"
                     alt="{class} 평균 이미지" loading="lazy">
                <span class="img-type-label">평균</span>  <!-- EN: Mean -->
            </div>
        </div>
        <div class="class-name">{클래스명}</div>
    </div>
    <!-- ... -->
</div>
<p class="text-xs themeable-muted text-center mb-6">▲ 각 카드 왼쪽: 클래스 대표 이미지(실제 샘플) / 오른쪽: 평균 이미지</p>
```

### 8-2. L2/L3 — density-card (밀도 차트 + 대표이미지 2:1)

두 가지 구현 방식이 있음 (기존 포스트 구조에 따라 선택):

**방식 A — 독립 CSS (industrialwaste #131 패턴)**:
```css
.density-grid { display:grid; grid-template-columns:1fr; gap:.75rem; margin:1.5rem 0; }
@media(min-width:640px){ .density-grid { grid-template-columns:repeat(2,1fr); } }
.density-card { border-radius:.5rem; overflow:hidden; background-color:var(--bg-card); border:1px solid var(--border-color); }
.density-card-images { display:grid; grid-template-columns:2fr 1fr; gap:1px; background-color:var(--border-color); }
/* class-card-img-wrap 재사용 */
```

**방식 B — 기존 density-card 확장 (military #225 패턴)**:
```css
/* 기존 density-card에 den-imgs 서브그리드 추가 */
.density-card .den-imgs { display:grid; grid-template-columns:2fr 1fr; gap:1px; background-color:var(--border-color); }
.density-card .den-imgs > div { position:relative; overflow:hidden; background-color:var(--bg-card); }
.density-card .den-imgs .den-chart img { aspect-ratio:4/3; }
.density-card .den-imgs .den-rep img { aspect-ratio:1; }
.density-card .den-imgs .den-label { /* img-type-label과 동일 스타일 */ }
```

**공통 HTML 구조**:
```html
<div class="density-card">
    <div class="den-imgs">
        <div class="den-chart">
            <img src="...densityPlot/{class}.png" alt="{class} L2 밀도" loading="lazy">
            <span class="den-label">밀도</span>  <!-- EN: Density -->
        </div>
        <div class="den-rep">
            <img src="https://cdn.dataclinic.ai/datasets/{dataset}/train/{class}/{file}"
                 alt="{class} 대표 이미지" loading="lazy">
            <span class="den-label">실제</span>  <!-- EN: Actual -->
        </div>
    </div>
    <div class="den-info">  <!-- 텍스트 설명 (선택) -->
        <div class="den-name">{클래스명}</div>
        <div class="den-note">{밀도 특성 한 줄 설명}</div>
    </div>
</div>
```

### 8-3. Pebbloscope 스냅샷 (L2/L3 섹션에 필수)

DataClinic이 "무엇이 다른지" 보여준다면, Pebbloscope는 "왜 다른지" 보여줍니다.
L2 또는 L3 밀도 플롯 다음에 Pebbloscope 시각화를 배치합니다.

```html
<div class="themeable-card rounded-xl p-6 mt-6">
    <h3 class="text-lg font-bold themeable-heading mb-3">🔬 페블로스코프로 본 {클래스명} — {발견 요약}</h3>
    <div class="themeable-text leading-relaxed prose prose-sm max-w-none mb-4">
        <p>... <a href="https://pebbloscope.ai" class="text-orange-500 hover:text-orange-400 font-semibold" target="_blank" rel="noopener">페블로스코프</a>는 ...
        <a href="https://pebbloscope.ai/snapshots/{snapshotId}" class="text-orange-500 hover:text-orange-400 font-semibold" target="_blank" rel="noopener">스냅샷</a>입니다.</p>
    </div>
    <a href="https://pebbloscope.ai/snapshots/{snapshotId}" target="_blank" rel="noopener">
        <img src="https://pebbloscope-prod-public-bucket.s3.ap-northeast-2.amazonaws.com/snapshot/{snapshotId}.png"
             alt="페블로스코프 — {클래스명} L2 임베딩 시각화"
             class="w-full rounded-lg" loading="lazy">
    </a>
    <!-- 클러스터 설명 (색상 범례 + 텍스트) -->
    <p class="text-sm themeable-text mt-4 leading-relaxed">
        {클러스터 형성 원인 설명 — 배경 계절, 카메라 각도, 환경 조건 등}
    </p>
    <p class="text-xs themeable-muted mt-3">▲ <a href="https://pebbloscope.ai/snapshots/{snapshotId}" class="text-orange-400 hover:text-orange-300" target="_blank" rel="noopener">페블로스코프 스냅샷에서 직접 탐색하기 →</a> 각 노드를 클릭하면 실제 이미지를 확인하고, 동료에게 코멘트를 남길 수 있습니다.</p>
</div>
```

**핵심 규칙:**
- 스냅샷 이미지 URL: `https://pebbloscope-prod-public-bucket.s3.ap-northeast-2.amazonaws.com/snapshot/{snapshotId}.png`
- 이미지를 `<a>` 태그로 감싸서 클릭 시 스냅샷 페이지로 이동
- 클러스터 색상 범례가 있으면 `<span class="inline-block w-3 h-3 rounded-full">` + 색상으로 표시
- "직접 탐색하기 →" 링크 필수

### 참조 구현

- **class-card**: `story/dataclinic-report-131-industrialwaste-story-pb/ko/`
- **density-card 방식A**: `story/dataclinic-report-131-industrialwaste-story-pb/ko/`
- **density-card 방식B**: `story/dataclinic-report-225-pbls-military3-story-pb/ko/`
- **weapon-card (dual-img-row)**: `story/dataclinic-report-225-pbls-military3-story-pb/ko/` — 클래스 수가 적을 때(3종) 더 큰 카드
- **Pebbloscope (2클러스터)**: `story/dataclinic-report-225-pbls-military3-story-pb/ko/` — M35A2 무개형 화염/일반 배경 클러스터
- **Pebbloscope (계절 클러스터)**: `story/dataclinic-report-224-pbls-military-story-pb/ko/` — K806 계절별 배경 클러스터
