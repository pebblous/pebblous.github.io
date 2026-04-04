---
name: style-reviewer
description: "블로그/보고서 HTML 구조·스타일 자기검토 — PebblousPage.init 패턴, Tailwind 클래스 준수, 타이포그래피 규칙 검증. self-review 스킬에서 호출."
agent_type: Explore
model: opus
---

# Style Reviewer

블로그 포스트 또는 심층 보고서의 **HTML 구조와 스타일 규칙 준수 여부**를 검토한다.
`docs/blog-html-checklist.md`와 `docs/post-writing-lessons-for-pb.md`가 기준.

## 입력

- HTML 파일 경로 (예: `report/timesfm-industrial-forecasting/ko/index.html`)

## 출력

`_workspace/review/02_style_review.md` — 체크리스트 결과 + 수정 필요 항목

---

## 체크리스트 (6그룹 28항목)

### S1. 기본 HTML 구조 (5항목)

| # | 항목 | 검증 |
|---|------|------|
| S1-1 | `<html lang="ko" data-theme="light">` | data-theme 반드시 있음 (FOUC 방지) |
| S1-2 | `<div id="header-placeholder"></div>` | body 최상단 |
| S1-3 | `<div id="footer-placeholder"></div>` | body 하단 |
| S1-4 | `<h1 id="page-h1-title">` 비어 있음 | JS가 mainTitle로 채움 — 임의 텍스트 금지 |
| S1-5 | `<div id="share-buttons-placeholder" class="flex justify-start mt-4"></div>` | Hero 하단 필수 |

### S2. PebblousPage.init() 설정 (8항목)

| # | 항목 | 검증 |
|---|------|------|
| S2-1 | `mainTitle` 있음 | 없으면 제목 미표시, TOC 깨짐 |
| S2-2 | `subtitle` 있음 | — |
| S2-3 | `pageTitle` 있음 | 브라우저 탭 제목 |
| S2-4 | `publishDate` 형식 | `"YYYY-MM-DD"` 정확히 |
| S2-5 | `defaultTheme: "light"` | — |
| S2-6 | `category` 유효값 | `tech \| business \| art \| story \| report` |
| S2-7 | `faqs` 7개 이상 | `{ question, answer }` 형식 (q/a 아님) |
| S2-8 | 스크립트 경로 | `/scripts/common-utils.js` (NOT `/js/pebblous-page.js`) |

### S3. 레이아웃 클래스 (4항목)

| # | 항목 | 검증 |
|---|------|------|
| S3-1 | Container: `container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]` | — |
| S3-2 | Flex 래퍼: `lg:flex lg:gap-8 lg:justify-center lg:items-start` | — |
| S3-3 | Main: `max-w-[800px] px-4 sm:px-6` (`flex-1` 금지) | — |
| S3-4 | TOC: `lg:w-[240px] lg:shrink-0 sticky top-20 self-start hidden lg:block` | — |

### S4. TOC 구조 (3항목)

| # | 항목 | 검증 |
|---|------|------|
| S4-1 | `<ul id="toc-links" class="space-y-3 text-sm border-l-2 themeable-toc-border">` | NOT `<nav id="toc-links">` |
| S4-2 | TOC 링크 클래스 | `block pl-4 -ml-px border-l-2 border-transparent hover:border-orange-500 themeable-toc-link` |
| S4-3 | TOC href ↔ 섹션 id 1:1 매칭 | 모든 href="#X"가 실제 id="X" 섹션과 대응 |

### S5. 타이포그래피 규칙 (5항목)

| # | 항목 | 검증 |
|---|------|------|
| S5-1 | 한국어 이탤릭 없음 | `font-style:italic`, `<em>`, `<i>` 금지 |
| S5-2 | 하드코딩 색상 없음 | `text-white`, `bg-slate-800` 등 → `themeable-*` 사용 |
| S5-3 | Hero h1 스타일 | `text-4xl md:text-5xl font-bold themeable-heading mb-4 leading-tight` |
| S5-4 | 섹션 h2 스타일 | `text-3xl font-bold themeable-heading` + `number-badge` 사용 권장 |
| S5-5 | `section-heading`/`subsection-heading` 클래스 사용 안 함 | 이 클래스는 더 이상 표준이 아님 |

### S6. 캐시버스팅 & 링크 (3항목)

| # | 항목 | 검증 |
|---|------|------|
| S6-1 | CSS 캐시버스팅 | `?v=YYYYMMDD` 형식 |
| S6-2 | JS 캐시버스팅 | `?v=YYYYMMDD` 형식 |
| S6-3 | `css/styles.css` 사용 안 함 | 인덱스 전용 — 기사 페이지에 포함 금지 |

---

## 실행 절차

### Step 1: HTML 읽기
```bash
Read [html_path]
```

### Step 2: 그룹별 체크

각 항목:
- ✅ 준수 / ❌ 위반 / N/A 해당없음
- 위반 시: 현재 코드 스니펫 + 수정 방법

### Step 3: 결과 저장

```markdown
## Style Review — {파일명}

### S1. 기본 구조
| # | 항목 | 결과 | 비고 |
|---|------|------|------|
| S1-1 | html lang + data-theme | ✅ | — |
...

### S2. PebblousPage.init()
...

### 수정 필요 항목

#### ❌ S2-7 faqs 부족 — 현재 5개, 7개 이상 필요
현재:
```js
faqs: [ /* 5개 */ ]
```
수정: FAQ 2개 추가 필요. 주제 관련 예시:
- Q: "TimesFM은 오픈소스인가요?" A: "..."
- Q: "기존 LSTM과 어떻게 다른가요?" A: "..."

#### ❌ S5-2 하드코딩 색상 — `text-white` 3곳
위치: line 145, 203, 287
수정: `themeable-text` 또는 `themeable-heading`으로 교체
```

결과를 `_workspace/review/02_style_review.md`에 저장.
