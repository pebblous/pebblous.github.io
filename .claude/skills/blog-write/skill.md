---
name: blog-write
description: "blog.pebblous.ai HTML 아티클 작성 — PebblousPage.init() 구조, 테마 시스템, SEO 4계층, 한국어 타이포그래피 규칙 포함. 블로그 아티클 HTML 작성 시 반드시 이 스킬을 사용할 것."
---

# Blog Write

> **이 파일이 블로그 HTML 작성의 정본입니다.** 레포 `.claude/skills/` 기준.

blog.pebblous.ai 아티클 HTML **신규 작성** 스킬.
상세 HTML 구조 예시는 `references/html-conventions.md` 참조.

`blog-polish`와의 역할 구분:
- **`blog-write` (이 스킬)**: 새 아티클 HTML을 처음부터 작성 — 구조, SEO, 컴포넌트 전체 포함
- **`blog-polish`**: 기존 아티클의 제목·리드·섹션 헤딩을 Warm Expert Tone으로 다듬기 — 콘텐츠 보존

## ⛔ 작성 시작 전 필수 읽기 (예외 없음, 기억에 의존 금지)

```
Read: docs/post-writing-lessons-for-pb.md          # 이중 불릿, SEO-check 절차
Read: references/html-conventions.md               # CSS 순서·Hero·메타 정본
Read: docs/blog-html-checklist.md                  # 완성 후 대조용
```

## ⛔ Push 전 필수 검증

```bash
node tools/validate-articles.js                 # 구조 검증
```

### SEO-check (새 페이지마다 필수 — 예외 없음)

```bash
agent-browser open <배포된 URL>
agent-browser wait --load networkidle
agent-browser eval "document.title"
agent-browser eval "document.querySelector('link[rel=canonical]')?.href"
agent-browser eval "document.querySelector('link[hreflang=en]')?.href"
agent-browser eval "document.querySelector('meta[property=\"og:image\"]')?.content"
agent-browser eval "!!document.getElementById('share-buttons-placeholder')"
agent-browser eval "document.querySelector('meta[name=\"twitter:site\"]')?.content"
agent-browser eval "document.querySelector('meta[http-equiv=\"content-language\"]')?.content"
```

통과 기준: title 60자 이내, description 120-160자, canonical = 현재 URL, hreflang 3개(bilingual 시), og:image URL 존재, share-btn = true, twitter:site = `@pebblous`

## 파일 경로 컨벤션

```
[category]/[slug]/ko/index.html         # 한국어
[category]/[slug]/en/index.html         # 영어
[category]/[slug]/ko/image/index.png    # KO OG 이미지
[category]/[slug]/en/image/index.png    # EN OG 이미지
```

**필수**: 단일 언어만 먼저 작성하더라도 `ko/` 또는 `en/` 디렉토리 구조로 생성.
루트에 직접 `[slug]/index.html` 생성 금지. 공유 이미지 경로 금지.
정본: `.claude/AGENT-POLICY.md` 섹션 3.

카테고리: `project/` | `blog/` | `report/` | `story/` | `event/`

## 제목 완성 절차 (blog-research 초안 → 최종 3슬롯)

작성 시작 전 `docs/title-strategy.md`를 읽고 아래 절차를 따른다:

1. **리서치 초안 확인**: `_workspace/01_research.md`의 `추천 제목` 섹션에서 mainTitle 후보, subtitle 후보, pageTitle 키워드 소재, 검색 의도를 확인
2. **3슬롯 최종 결정**:

| 슬롯 | 기준 | 글자 수 |
|------|------|---------|
| `pageTitle` | mainTitle의 **검색 변형** — 핵심 키워드 앞배치 + 구체적 약속 + ` \| 페블러스` | 50-60자 |
| `mainTitle` | **보도 헤드라인** (전자신문/경향신문 결, 고급 매거진 톤) — 사실을 완결 구문으로. 완결 명사구 기본, 동사 종결은 발견일 때만 (`docs/title-strategy.md` §0·§3) | 20-40자 |
| `subtitle` | **리드문** — 누가·무엇을·왜 한 줄 + mainTitle에 없는 보조 키워드 | 30-60자 |

3. **검증 체크**:
   - [ ] `pageTitle`은 mainTitle의 검색 변형인가 — **같은 사실**, 검색자의 언어. 완전 동일도, 억지 신규 문장 발명도 금지 (title-strategy §0)
   - [ ] `pageTitle` 앞쪽 1/3에 핵심 키워드
   - [ ] 세 슬롯 모두 따옴표("...")·대조공식("A가 아니라 B")·줄표 동격 없음 (§0 전 슬롯 공통 금지)
   - [ ] **`mainTitle`에 도메인 주어(무엇에 관한 글인지)가 있는가** — 대조·훅·여운이 주어를 대체하면 안 됨 (title-strategy §3.1 "주어 실종 훅" 금지). ❌"며칠은 이기고 몇 년은 지는 이유" → ✅"…밀리는 AI 날씨 모델"
   - [ ] `mainTitle` 소리 내어 읽었을 때 — 전자신문/경향신문 지면에 실려도 자연스러운가? **제목만으로 무슨 글인지 5초 안에 아는가?**
   - [ ] EN 제목은 한국어 직역이 아닌 영어 검색 의도에 맞게 재작성

4. **EN 제목** (bilingual 시): 한국어 제목을 번역하지 말고, 영어 검색 의도에 맞게 별도 작성. Title Case 적용.

## PebblousPage.init() — 필수 설정

```javascript
PebblousPage.init({
  mainTitle: "메인 제목",          // REQUIRED — h1에 렌더링 (보도 헤드라인)
  subtitle: "부제목",              // REQUIRED — h1 아래 (리드문 + 보조 키워드)
  pageTitle: "제목 | 페블러스",    // <title> 태그용 (mainTitle의 검색 변형)
  category: "tech",               // tech|business|art|story
  publishDate: "2026-03-29",
  publisher: "(주)페블러스 데이터 커뮤니케이션팀",
  defaultTheme: "light",          // light|dark|beige
  articlePath: "[category]/[slug]/ko/",
  tags: ["태그1", "태그2"],
  faqs: [{ question: "Q?", answer: "A." }]  // 선택
});
```

**주의:**
- `title` 필드 사용 금지 → `mainTitle` 사용
- FAQ는 `config.faqs`만 — `<head>`에 FAQPage JSON-LD 직접 추가 금지
- `article-page.js` 사용 금지 → `common-utils.js` 사용

**⚠️ articles.json과 필드명이 다름 (혼동 주의):**
- `PebblousPage.init()` → `publishDate` (HTML 렌더링용)
- `articles.json` → `date` (CI 스키마 검증 필수 필드)
- 전체 필드명 정본: `.claude/AGENT-POLICY.md` 섹션 3 참조

## HTML 필수 요소

```html
<!-- 스크립트 -->
<script src="/scripts/common-utils.js?v=YYYYMMDD"></script>

<!-- hero 내 h1 (id 필수) -->
<h1 id="page-h1-title">...</h1>

<!-- hero meta info (2줄 형식, KO) -->
<p class="text-sm themeable-muted">2026.03 · (주)페블러스 데이터 커뮤니케이션팀</p>
<p class="text-sm themeable-muted mt-1">읽는 시간: ~10분 · <a href="../en/" class="text-orange-400 hover:text-orange-300 transition-colors">English</a></p>

<!-- Executive Summary (hero 직후, 섹션 1 이전) -->
<section id="executive-summary" class="mb-16 fade-in-card">
  <h2 class="text-3xl font-bold themeable-heading mb-8">Executive Summary</h2>
  <div class="key-insight">
    <p class="themeable-text leading-relaxed">...</p>
  </div>
</section>
```

## 참고문헌 섹션 (조건부 — `references.json` 존재 시 **필수**)

작성 시작 전에 article folder(`[category]/[slug]/`) 또는 run dir에 **`references.json` 파일이 있는지 반드시 확인**한다. 있으면:

1. **HTML에 reference-list 섹션 추가** — FAQ 섹션 다음 (또는 FAQ 없으면 마지막 본문 섹션 다음):
   ```html
   <section id="references" class="mb-16 fade-in-card">
       <div class="flex items-center gap-4 mb-8">
           <span class="number-badge">R</span>
           <h2 class="text-3xl font-bold themeable-heading">참고문헌</h2>
       </div>
       <ul class="reference-list mb-6">
           <li><span class="ref-num">1.</span><span class="ref-body">저자. (연도). "<a href="URL" target="_blank" rel="noopener">제목</a>." 출처.</span></li>
           ...
       </ul>
   </section>
   ```
   참고문헌이 4건 이상이면 **카테고리 분류** (학술 / 업계·보도 / 공식 문서) 필수 — 단일 리스트는 가독성 떨어짐.
2. **TOC 사이드바에 항목 추가**: `<li><a href="#references" class="...">참고문헌</a></li>`
3. **Google Scholar 메타 태그** — `<head>`에 `citation_*` 메타 추가 (상세: `bibliography` 스킬 §4)
4. **citation-download 버튼** — 참고문헌 섹션 하단에 `PebblousCitation.download()` 호출 버튼

상세 패턴·CSS 클래스·CSL-JSON 스키마는 `bibliography` 스킬 §2~§4 참조.

**EN 버전도 동일** — 같은 `references.json`을 fetch해서 영어 라벨로 렌더링.

> ⚠️ **누락 결함 (2026-05-26 PR #228 사례)**: research phase가 외부 사료 6건을 발견했으나 references.json이 없어 reference-list 누락. 학술·journalism 톤 글은 reference-list 부재가 신뢰도 손실 + SEO(Google Scholar) 누락으로 직결. `blog-produce` Phase 2.5 트리거 + 본 step이 결합되어야 chain 완성.

## 레이아웃

레퍼런스 구현: `report/blog-2026/index.html`

- Container: `max-w-[1400px] px-4 sm:px-6 lg:px-8`
- TOC sidebar: `lg:w-[240px] sticky top-20 self-start` (lg 이상)
- Main content: `max-w-[800px] px-4 sm:px-6`
- TOC 항목: 모든 H2 섹션 포함

## CSS 규칙

### ⛔ 인라인 CSS 금지 (CRITICAL)

`common-styles.css`에 이미 존재하는 컴포넌트를 `<style>` 블록에 재정의하지 말 것. 위반 시 글꼴·행간·색상이 표준과 달라지고 유지보수 부담이 생긴다.

**금지 패턴:**
```html
<!-- ❌ common-styles.css에 이미 있는 클래스를 인라인으로 재정의 -->
<style>
  .stat-card { ... }
  .key-insight { ... }
  .themeable-toc-link { ... }
</style>
```

**허용:** 해당 포스트에만 필요한 고유 컴포넌트 (`.timeline-box`, `.weapon-card` 등)는 인라인 `<style>`에 작성 가능.

### CSS 로드 순서 (정확히 이 순서 — CLAUDE.md 정본)

```html
<link rel="stylesheet" href="/css/theme-variables.css?v=YYYYMMDD">
<link rel="stylesheet" href="/styles/tailwind-build.css?v=YYYYMMDD">
<link rel="stylesheet" href="/styles/common-styles.css?v=YYYYMMDD">
```

> Tailwind utility → common-styles 커스텀 순서. common-styles가 나중에 로드되어야 Tailwind를 오버라이드 가능.

### 표준 클래스명

| 용도 | 표준 클래스 | ❌ 금지 |
|------|-----------|---------|
| 본문 텍스트 | `themeable-text` | `themeable-secondary` |
| 제목 | `themeable-heading` | `themeable-primary` |
| 보조 텍스트 | `themeable-muted` | 커스텀 색상 |
| 핵심 인사이트 | `key-insight` | `insight-box` |

### 색상·타이포그래피

- 색상 하드코딩 금지 → `themeable-*` classes 또는 CSS 변수 사용
- 허용 브랜드 색상: Orange `#F86825`, Teal `#14b8a6`, Blue `#3B82F6`
- 빨간색·임의 초록 등 비표준 색상 금지
- 한국어에 italic 금지 → `font-weight: 600` 사용
- 본문: 18px, line-height 2.1 (단락), 2.0 (목록)

## SEO 4계층 (HTML head)

```html
<title>[제목] | 페블러스</title>
<meta name="description" content="[150자 설명]">
<link rel="canonical" href="https://blog.pebblous.ai/[path]">
<meta property="og:title" content="[제목]">
<meta property="og:description" content="[설명]">
<meta property="og:image" content="https://blog.pebblous.ai/[path]image/index.png">
<meta property="og:url" content="https://blog.pebblous.ai/[path]">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[제목]">
<meta name="twitter:description" content="[설명]">
<meta name="twitter:image" content="https://blog.pebblous.ai/[path]image/index.png">
```

**meta description 작성 기준 (⛔ 여기가 유일한 생성 지점 — 카드/사이드카 description은 이 값을 복사한다):**
- **보도기사의 리드 문단**처럼: 핵심 사실 → 왜 중요한가, 120-160자, 평서문 2-3문장
- 따옴표·대조공식·줄표 동격 금지 (title-strategy §0 전 슬롯 공통 금지가 description에도 적용)
- 제목의 동격 재진술 금지 — 제목이 말한 사실에 **새 정보**(수치·출처·함의)를 더한다
- 끝맺음은 사실 서술로 — "~입니다/~합니다" 존댓말 유지, 광고 문구("확인하세요", "알아보세요") 금지

## 콘텐츠 원칙

- **Text-First**: 차트/카드/다이어그램 앞에 설명 단락이 먼저
- 섹션 구조: `<h2>` → `<h3>` (더 깊은 계층 금지)
- **h3 서브섹션 번호**: `<span class="sub-number-badge">1.1</span>제목` 형식 사용. number-badge(h2)와 시각 계층 통일.
  ```html
  <h3 class="text-xl font-semibold themeable-heading mb-4"><span class="sub-number-badge">1.1</span>서브섹션 제목</h3>
  ```
- 영어 아티클: publisher = "Pebblous Data Communication Team", "Reading time: ~Nmin"

## ⛔ AI 문체 예방 패턴 (2026-06-01 추가, 시리즈 5편 사후 검수 학습)

작성 단계에서 처음부터 피해야 할 패턴. **사후 검수에서 발견되어 5편 모두 약 50% em-dash
감소를 거친 케이스**. 작성 시점에서 의식하면 ko-prose-humanizer 단계가 가벼워진다.

자세한 정의: [`.claude/skills/ko-prose-humanizer/SKILL.md`](../ko-prose-humanizer/SKILL.md)

### 1. em-dash 동격 재진술 (T1) — 가장 빈번

⛔ `~다 — ~다` 패턴이 한 글에 20개 넘어가면 위험. 본문 1/500자 이상 유지.

| 안티 패턴 | 대안 |
|---|---|
| "결과는 abstract에 있다 — `verbatim`" | "결과는 abstract에 있다. 옮기면 다음과 같다. `verbatim`" |
| "—이 그 해석을 받쳐준다." | 인용 후 마침표로 닫고 다음 문장에서 풀이 |

### 2. 메타 예고문 (T4) — 글마다 0건 목표

다음 표현은 작성 시점에서 자제:
- "옮긴다 —", "옮겨 적어 본다", "한 줄로 옮기면 이렇다 —"
- "들여다 보자", "한 발 더 들어가면", "묶어 본다"
- "다음 표가 보여 준다", "다음 카드는 ~를 한눈에 보여 준다"

→ 예고 없이 바로 내용으로. 인용은 인용 자체로, 표는 표 자체로 말한다.

### 3. 자사 점프 (T11) — Exec Summary 마지막 단락 주의

Exec Summary 3단락(자사 연결 단락)이 분석의 **결론**으로 점프하면 카피 톤이 된다.

⛔ 작성 시점에서 피해야 할 표현:
- "페블러스는 이 공백을 정조준한다"
- "이번 글은 페블러스를 ~ 카테고리 리더로 격상한다"
- "AI 거버넌스 5부작의 마지막"
- "한국어 카테고리로 처음 선언하는 자산이 된다"
- "광고의 형태가 아니라 통찰의 형태로 그 자리를 적어 둔다" (메타 자기변호)

✅ 패턴: **Exec Summary는 분석으로 끝내고, 자사 연결은 별도 Editor's Note 카드로 분리**.
voice-edit/voices/default.md의 "본문 구조 패턴" 절 참조.

### 4. "본 보고서" 위키체 (T7)

⛔ "본 보고서는 ~을 분석한다" / "본 보고서가 인용한" / "본 보고서 §3 참조"
✅ "이 글은 ~을 본다" / "이 글이 인용한" / "§3 참조" (보고서 단어 없이)

5편 검수에서 한 글당 평균 8곳 발견. 작성 단계에서 처음부터 "이 글"로 통일하면
사후 검수가 불필요.

### 5. Stat Cards 4개 max (CLAUDE.md 정책)

⛔ 5개 만들고 싶어지면, 한 카드를 본문 단락으로 풀어 넣을 수 있는지부터 확인.
SkillOpt 케이스에서 5개 위반이 발생해 사후 정정 (5번째 카드 "2026-05-22 한미 동시일"을
§6 본문에 풀어 넣음).

### 6. "주요 수치" h3 — Stat Cards 위 도입문 표준

Stat Cards 위에 "한 결정문이 그은 좌표를 정량으로 풀어 두면 ..." 같은 메타 도입문 금지.

```html
<!-- 표준 -->
<h3 class="text-xl font-semibold themeable-heading mt-8 mb-3">주요 수치</h3>
<p class="themeable-text-secondary text-sm mb-3">출처: <a href="외부 링크">...</a></p>
<div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
  <!-- 4개 카드 -->
</div>
```

## ⚠️ 이중 불릿 버그 (자주 반복 — 반드시 준수)

`common-styles.css`가 `main ul { list-style-type: disc }` 자동 불릿을 붙인다.
`<li>` 안에 `•`를 하드코딩하면 불릿이 두 개 나온다.

```html
<!-- ❌ 이중 불릿 -->
<ul>
    <li>• 항목</li>
</ul>

<!-- ✅ 옵션 A: 하드코딩 불릿 + list-style:none -->
<ul style="list-style:none;margin-left:0;">
    <li>• 항목</li>
</ul>

<!-- ✅ 옵션 B: CSS 불릿만 사용 (• 제거) -->
<ul class="ml-6">
    <li>항목</li>
</ul>
```

또는 페블러스 표준 스타일 (teal 불릿):
```html
<ul class="space-y-3 mb-6">
    <li class="flex items-start gap-3">
        <span class="text-teal-400 mt-1">•</span>
        <span class="themeable-text leading-relaxed">항목</span>
    </li>
</ul>
```

완성 후 확인:
```bash
grep -n '<li>•\|<li> •' <파일>.html
# 결과가 있으면 해당 <ul>에 list-style:none 추가
```

### ⛔ EN OG 이미지 경로 검증 (bilingual 작성 시)

EN HTML을 KO에서 복사하여 만들 때, og:image/twitter:image 경로가 `/ko/image/`로 남는 실수가 반복된다.
EN HTML 생성 후 반드시 실행:
```bash
grep -n "/ko/image/" [EN HTML 파일]  # → 0줄이어야 함. 있으면 /en/image/로 수정
```

상세 HTML 전체 구조 → `references/html-conventions.md`
