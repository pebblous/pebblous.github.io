---
name: biz-report-produce
description: >
  BizReport (비즈 인사이트) 기업 분석 아티클 기획부터 퍼블리싱까지 완전 자동화.
  기업명을 받아 기획 → 병렬 3트랙 리서치(재무/제품/시장) → 합성 → 이중언어 HTML 작성(KO+EN 병렬) → 퍼블리싱을
  멀티 에이전트로 일괄 실행.
  "BizReport 써줘", "기업 분석 해줘", "biz-report-produce 실행" 요청 시 이 스킬 사용.
---

# biz-report-produce: BizReport 기업 분석 파이프라인 오케스트레이터

## ⛔ Phase 0 필수 읽기 (스킬 실행 전 예외 없이)

HTML 작성 단계(Phase 4) 시작 전, biz-writer-ko / biz-writer-en 에이전트에게 다음 파일을 Read 툴로 읽도록 지시:

1. `docs/post-writing-lessons-for-pb.md` — 작성 규칙 (이중 불릿, SEO-check 등)
2. `.claude/skills/blog-write/references/html-conventions.md` — HTML 정본 (CSS 순서, Hero, 메타)
3. `docs/blog-html-checklist.md` — 완성 후 대조 체크리스트

Push 전 검증: `python3 tools/validate-articles.py` 실행 필수.

## 시리즈 정의

- **시리즈명:** 비즈 인사이트 (BizReport)
- **출력 경로:** `project/BizReport/[slug]/ko/index.html` + `project/BizReport/[slug]/en/index.html`
- **HTML 템플릿:** `project/BizReport/applied-intuition-analysis-01/ko/index.html`
- **대상 독자:** 외부 잠재 고객 및 투자자 (내부 팀 보고 아님)
- **톤:** 분석적 벤치마크 리포트 — 판매 피치 아님, 대상 기업 존중, 페블러스 포지셔닝은 구조적·간접적으로

## 실행 모드: 서브 에이전트 (Pipeline + 병렬 팬아웃)

## 에이전트 구성

| 에이전트 | subagent_type | 역할 | 출력 |
|---------|--------------|------|------|
| biz-planner | Explore | 조사 범위·구조 설계 + Pebblous 각도 정의 | `_workspace/biz-report/[slug]/00_plan.md` |
| financials-researcher | Explore | 재무·투자 트랙 A | `_workspace/biz-report/[slug]/02a_financials.md` |
| product-researcher | Explore | 제품·기술 트랙 B | `_workspace/biz-report/[slug]/02b_product.md` |
| market-researcher | Explore | 시장·경쟁 트랙 C | `_workspace/biz-report/[slug]/02c_market.md` |
| biz-synthesizer | general-purpose | 3트랙 통합 + Pebblous 전략 섹션 | `_workspace/biz-report/[slug]/03_synthesis.md` |
| biz-writer-ko | general-purpose | KO HTML 작성 | `project/BizReport/[slug]/ko/index.html` |
| biz-writer-en | general-purpose | EN HTML 작성/번역 | `project/BizReport/[slug]/en/index.html` |
| biz-publisher | general-purpose | OG + articles.json + git push | 퍼블리싱 완료 |

## 데이터 흐름

```
[사용자 입력: 기업명 + 슬러그]
        ↓
[Phase 0] git branch + workspace prep
        ↓
[Phase 1] biz-planner
        → _workspace/biz-report/[slug]/00_plan.md
        ↓ (병렬)
[Phase 2] financials-researcher  →  02a_financials.md
          product-researcher     →  02b_product.md
          market-researcher      →  02c_market.md
        ↓
[Phase 3] biz-synthesizer
        → _workspace/biz-report/[slug]/03_synthesis.md
        ↓ (병렬)
[Phase 4] biz-writer-ko  →  project/BizReport/[slug]/ko/index.html
          biz-writer-en  →  project/BizReport/[slug]/en/index.html
        ↓
[Phase 5] biz-publisher
        → OG 이미지 / articles.json / SEO / git push
        ↓
[완료 보고]
```

---

## 오케스트레이터 실행 절차

### Phase 0: 준비

```bash
mkdir -p /workspace/extra/repos/pebblous.github.io/_workspace/biz-report/[slug]
mkdir -p /workspace/extra/repos/pebblous.github.io/project/BizReport/[slug]/ko
mkdir -p /workspace/extra/repos/pebblous.github.io/project/BizReport/[slug]/en
cd /workspace/extra/repos/pebblous.github.io
git checkout main && git pull origin main
git checkout -b feat/biz-report-[slug]-pb
```

사용자 입력을 `_workspace/biz-report/[slug]/00_input.md`에 기록.

### Phase 1: 기획

```python
Agent(
  name="biz-planner",
  subagent_type="Explore",
  model="opus",
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/biz-planner.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    분석 대상 기업: [기업명]
    슬러그: [slug]
    특별 요구사항: [요구사항]

    출력: _workspace/biz-report/[slug]/00_plan.md

    ⛔ 필수 포함 항목:
    00_plan.md에 반드시 "## 페블러스 관심의 이유" 섹션을 포함할 것.
    다음 5가지 각도로 구체적으로 서술:
    1. DataClinic / 데이터 품질 진단 접점
    2. PebbloSim / 합성데이터 공백
    3. 규제 증적 기회 (EU AI Act, ISO 5259)
    4. 협력 가능 포인트 (파트너십 시나리오)
    5. 방어 논리 (structural moat — 거대 기업이 쉽게 페블러스 틈새를 채울 수 없는 이유)
    이 섹션이 없으면 Phase 3 합성 및 Phase 4 HTML 작성이 불완전해진다.
  """
)
```

### Phase 2: 병렬 리서치 (3-way 팬아웃)

Phase 1 완료 후 동시 실행:

```python
# 동시에 3개 스폰
Agent(
  name="financials-researcher",
  subagent_type="Explore",
  model="opus",
  run_in_background=True,
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/financials-researcher.md
    기획 문서: _workspace/biz-report/[slug]/00_plan.md (트랙 A 조사 지시 참조)
    저장소 루트: /workspace/extra/repos/pebblous.github.io/
    출력: _workspace/biz-report/[slug]/02a_financials.md

    조사 범위 (트랙 A):
    - ARR, 기업가치(Valuation), 펀딩 라운드 및 투자자 목록
    - 매출총이익률(Gross Margin), YoY 매출 성장률
    - 수익 모델 구조 (SaaS, Usage-based, Seat-based 등)
    - 최근 재무 공시 또는 언론 보도
    - 경쟁사 대비 재무 벤치마크
  """
)

Agent(
  name="product-researcher",
  subagent_type="Explore",
  model="opus",
  run_in_background=True,
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/product-researcher.md
    기획 문서: _workspace/biz-report/[slug]/00_plan.md (트랙 B 조사 지시 참조)
    저장소 루트: /workspace/extra/repos/pebblous.github.io/
    출력: _workspace/biz-report/[slug]/02b_product.md

    조사 범위 (트랙 B):
    - 제품 카탈로그 전체 (모듈별 기능, 가격 체계)
    - 기술 스택 및 플랫폼 아키텍처
    - 최근 제품 출시 및 업데이트 (최근 12개월)
    - M&A / 인수 내역
    - 특허 및 IP 포트폴리오 (주요 항목)
  """
)

Agent(
  name="market-researcher",
  subagent_type="Explore",
  model="opus",
  run_in_background=True,
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/market-researcher.md
    기획 문서: _workspace/biz-report/[slug]/00_plan.md (트랙 C 조사 지시 참조)
    저장소 루트: /workspace/extra/repos/pebblous.github.io/
    출력: _workspace/biz-report/[slug]/02c_market.md

    조사 범위 (트랙 C):
    - 주요 고객 목록 및 사례 연구
    - 시장 전략 (Land & Expand 패턴, 파트너십)
    - 경쟁 구도 (직접 경쟁사, 간접 경쟁사, 포지셔닝 맵)
    - 지역별 확장 타임라인 (수직 시장 확장 포함)
    - TAM/SAM/SOM 추정치
  """
)
```

### Phase 3: 합성

3개 트랙 모두 완료 확인 후:

```python
Agent(
  name="biz-synthesizer",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/biz-synthesizer.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    입력 파일:
    - _workspace/biz-report/[slug]/00_plan.md
    - _workspace/biz-report/[slug]/02a_financials.md
    - _workspace/biz-report/[slug]/02b_product.md
    - _workspace/biz-report/[slug]/02c_market.md

    출력: _workspace/biz-report/[slug]/03_synthesis.md

    ⛔ 필수 포함 항목:
    - Executive Summary 핵심 수치 3개 (Quote card + Metric card 3개)
    - 6개 섹션별 콘텐츠 초안 (Takeaway 포함)
    - 전략 매트릭스 (2x2: Overlap/Gap/Coexist/Learn)
    - 방어 논리 카드 (거대 기업이 쉽게 틈새를 채울 수 없는 구조적 이유)
    - 위협/기회/교훈 인사이트 블록 (각 3개 이상)
    - CTA 블록 (DataClinic 데모 + 시리즈 링크)
    - FAQ 5~7개 (Schema.org markup용 Q&A)
    - 다음 분석 대상 기업 제안 1개
  """
)
```

### Phase 4: 이중언어 HTML 작성 (병렬)

Phase 3 완료 후 KO/EN 동시 실행:

```python
# 병렬 실행
Agent(
  name="biz-writer-ko",
  subagent_type="general-purpose",
  model="opus",
  run_in_background=True,
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/biz-writer-ko.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    입력 파일:
    - _workspace/biz-report/[slug]/00_plan.md
    - _workspace/biz-report/[slug]/03_synthesis.md

    HTML 템플릿: project/BizReport/applied-intuition-analysis-01/ko/index.html
    체크리스트: docs/blog-html-checklist.md

    출력:
    - project/BizReport/[slug]/ko/index.html
    - _workspace/biz-report/[slug]/04_write_meta.json

    ⛔ 시작 전 필수 읽기 (Read 툴 사용):
    1. docs/post-writing-lessons-for-pb.md
    2. .claude/skills/blog-write/references/html-conventions.md
    3. docs/blog-html-checklist.md
  """
)

Agent(
  name="biz-writer-en",
  subagent_type="general-purpose",
  model="opus",
  run_in_background=True,
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/biz-writer-en.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    입력 파일:
    - _workspace/biz-report/[slug]/00_plan.md
    - _workspace/biz-report/[slug]/03_synthesis.md

    KO 참조: project/BizReport/[slug]/ko/index.html (완성 후)
    EN 템플릿: project/BizReport/applied-intuition-analysis-01/en/index.html
    체크리스트: docs/blog-html-checklist.md

    출력:
    - project/BizReport/[slug]/en/index.html

    ⛔ 시작 전 필수 읽기 (Read 툴 사용):
    1. docs/post-writing-lessons-for-pb.md
    2. .claude/skills/blog-write/references/html-conventions.md
    3. docs/blog-html-checklist.md

    영어 번역 원칙:
    - 한국어 원본의 논리 구조와 데이터를 그대로 유지
    - 영어권 독자 관점에서 자연스러운 표현으로 의역
    - 한국 맥락 설명 (예: "페블러스") 영어권 독자용 주석 추가
    - PebblousPage.init()의 publisher를 "Pebblous Data Communication Team"으로
    - html lang="en", content-language="en"
  """
)
```

**주의:** biz-writer-en은 biz-writer-ko 완료를 기다릴 필요 없음. 두 에이전트는 03_synthesis.md를 공통 소스로 독립적으로 작성 가능. 단, KO가 먼저 완료되면 EN은 KO를 참고하여 일관성을 높일 수 있음.

### Phase 5: 퍼블리싱

KO/EN 모두 완료 확인 후:

```python
Agent(
  name="biz-publisher",
  subagent_type="general-purpose",
  model="opus",
  prompt="""
    에이전트 정의: /workspace/extra/repos/pebblous.github.io/.claude/agents/blog-publisher.md
    스킬: /workspace/extra/repos/pebblous.github.io/.claude/skills/blog-publish/skill.md
    저장소 루트: /workspace/extra/repos/pebblous.github.io/

    메타데이터: _workspace/biz-report/[slug]/04_write_meta.json

    퍼블리싱 경로:
    - KO: project/BizReport/[slug]/ko/index.html
    - EN: project/BizReport/[slug]/en/index.html
    - OG 이미지: project/BizReport/image/[slug].png

    articles.json 카테고리: "project" (BizReport 시리즈)

    ⛔ Push 전 필수:
    python3 tools/validate-articles.py
  """
)
```

### Phase 6: 완료 보고

사용자에게:
- 생성된 아티클 경로 (KO + EN)
- 블로그 URL (`https://blog.pebblous.ai/project/BizReport/[slug]/ko/`)
- articles.json 반영 확인
- git push / PR 생성 결과

---

## BizReport 시그니처 포맷 (6섹션 고정)

모든 BizReport 아티클은 아래 6섹션 구조를 정확히 따른다.

| # | 섹션 (KO) | 섹션 (EN) | 주요 요소 |
|---|-----------|-----------|-----------|
| 1 | 기업 프로필 | Company Profile | 설립·팀·핵심 지표 테이블, 핵심 포지셔닝 |
| 2 | 제품·기술 스택 | Product & Tech Stack | 제품 매트릭스 테이블, 기술 스택 다이어그램 |
| 3 | 시장 전략·확장 경로 | Market Strategy & Expansion | Land & Expand 패턴, 타임라인 |
| 4 | 수익 모델·재무 지표 | Revenue Model & Financials | ARR/마진/성장, "쉬운 설명" 섹션 |
| 5 | 겹침/공백 분석 | Overlap/Gap Analysis | 2x2 전략 매트릭스 + 방어 논리 카드 |
| 6 | 위협·기회·교훈 | Threats, Opportunities & Lessons | 인사이트 블록 (각 색상 구분) |

### 필수 고정 요소 (섹션 외)

- **Executive Summary** (상단): Quote card + 핵심 지표 카드 3개 + **주식/펀딩 현황 블록** (아래 규칙 참조)
- **Chapter Takeaway**: 각 섹션 말미 blockquote (`.key-insight` 또는 동등 클래스)
- **CTA 블록** (FAQ 직전): DataClinic 데모 링크 + 시리즈 링크
- **FAQ** (5~7개): Schema.org `FAQPage` markup 포함
- **PDF 다운로드 카드** (`.pdf-download-card`)
- **다음 분석 대상 미리보기 카드**
- **참고문헌** 섹션

### 📈 주식·펀딩 현황 블록 (Executive Summary 하단 필수)

핵심 지표 카드 3개 바로 아래, `</section>` 직전에 삽입.

#### 상장사 (Public) — TradingView 위젯 + 링크 배지

```html
<!-- 주식 현황 -->
<div class="themeable-card rounded-xl p-6" style="border-top: 4px solid #F86825;">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div class="flex items-center gap-3">
            <span class="text-xs font-bold px-3 py-1 rounded-full"
                  style="background:#F86825;color:#fff;letter-spacing:0.05em;">NASDAQ</span>
            <!-- 거래소가 NYSE이면 NYSE로 변경 -->
            <span class="text-2xl font-bold themeable-heading">PLTR</span>
            <span class="text-sm themeable-text-muted">Palantir Technologies Inc.</span>
        </div>
        <div class="flex gap-4 text-sm font-semibold">
            <a href="https://finance.yahoo.com/quote/PLTR/" target="_blank" rel="noopener"
               class="accent-text hover:underline">Yahoo Finance ↗</a>
            <a href="https://www.tradingview.com/symbols/NASDAQ-PLTR/" target="_blank" rel="noopener"
               class="teal-text hover:underline">TradingView ↗</a>
        </div>
    </div>
    <div class="tradingview-widget-container" style="height:220px;">
        <div class="tradingview-widget-container__widget" style="height:220px;width:100%;"></div>
        <script type="text/javascript"
                src="https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js" async>
        {
            "symbol": "NASDAQ:PLTR",
            "width": "100%",
            "height": 220,
            "locale": "en",
            "dateRange": "12M",
            "colorTheme": "dark",
            "isTransparent": true,
            "autosize": true
        }
        </script>
    </div>
</div>
```

> symbol 형식: `"NASDAQ:PLTR"`, `"NYSE:SNOW"` 등 거래소 접두사 필수.
> EN 파일도 동일 위젯 삽입 (영어 locale 동일).

#### 비상장사 (Private) — 펀딩 카드 + Crunchbase 링크

TradingView 위젯 대신 펀딩 현황 카드:

```html
<!-- 펀딩 현황 -->
<div class="themeable-card rounded-xl p-6" style="border-top: 4px solid #14b8a6;">
    <div class="flex flex-wrap items-center justify-between gap-3 mb-3">
        <div class="flex items-center gap-3">
            <span class="text-xs font-bold px-3 py-1 rounded-full"
                  style="background:#14b8a6;color:#fff;letter-spacing:0.05em;">PRIVATE</span>
            <span class="text-lg font-bold themeable-heading">최신 펀딩 현황</span>
        </div>
        <a href="https://www.crunchbase.com/organization/[slug]" target="_blank" rel="noopener"
           class="text-sm font-semibold teal-text hover:underline">Crunchbase ↗</a>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
        <div><p class="text-xl font-bold accent-text">$XXB</p><p class="text-xs themeable-text-muted">기업가치 (Series X)</p></div>
        <div><p class="text-xl font-bold themeable-heading">$X.XB+</p><p class="text-xs themeable-text-muted">총 투자유치</p></div>
        <div><p class="text-xl font-bold teal-text">X개</p><p class="text-xs themeable-text-muted">투자 라운드</p></div>
    </div>
</div>
```

> 비상장사라도 Exec Summary 내 펀딩 테이블에 이미 상세 정보가 있는 경우, 이 카드는 생략 가능. 중복 방지 우선.

---

## Pebblous 전략 각도 (Phase 1·3 필수 분석)

모든 BizReport에서 아래 5가지 각도를 반드시 분석:

1. **DataClinic / 데이터 품질 진단 접점** — 대상 기업의 데이터 파이프라인에서 자동화된 품질 진단이 빠져 있는 지점
2. **PebbloSim / 합성데이터 공백** — 대상 기업이 다루지 않거나 취약한 합성데이터 생성/검증 영역
3. **규제 증적 기회** — EU AI Act, ISO 5259, ISO 42001 등 규제 대응 증적 자동화 가능 지점
4. **협력 가능 포인트** — OEM/통합/파트너십 시나리오 (경쟁보다 보완)
5. **방어 논리** — 구조적 해자: 거대 기업이 왜 이 틈새를 쉽게 채울 수 없는가

---

## HTML 필수 규칙 요약

### CSS 로드 순서 (고정)
```html
<link rel="stylesheet" href="/css/theme-variables.css?v=YYYYMMDD">
<link rel="stylesheet" href="/styles/tailwind-build.css">
<link rel="stylesheet" href="/styles/common-styles.css?v=YYYYMMDD">
```
`/css/styles.css`는 인덱스 전용 — BizReport 아티클에 절대 포함 금지.

### 레이아웃 구조 (절대 불변)
```html
<div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]">
    <div class="lg:flex lg:gap-8 lg:justify-center lg:items-start">
        <nav class="hidden lg:block lg:w-[240px] lg:shrink-0 sticky top-20 self-start">
            <!-- TOC: summary, section-1~6, conclusion, faq, pdf-download, references -->
        </nav>
        <main class="max-w-[800px] px-4 sm:px-6">
            <header class="text-left mb-16">
                <h1 id="page-h1-title" ...></h1>
                <!-- 날짜·퍼블리셔·읽는 시간·언어 링크 -->
                <div id="share-buttons-placeholder" class="flex justify-start"></div>
            </header>
            <!-- Executive Summary (#summary) -->
            <!-- 섹션 1~6 (#section-1 ~ #section-6) -->
            <!-- CTA 블록 -->
            <!-- FAQ (#faq) -->
            <!-- PDF 카드 (#pdf-download) -->
            <!-- 다음 대상 미리보기 -->
            <!-- 참고문헌 (#references) -->
        </main>
    </div>
</div>
```
`<section class="py-16 themeable-hero-bg text-center">`, `<aside>`, `<article>` 금지.

### SEO 필수 메타
```html
<meta name="twitter:site" content="@pebblous">
<meta http-equiv="content-language" content="ko">  <!-- EN이면 "en" -->
<meta name="copyright" content="© 2026 Pebblous. All rights reserved.">
<meta name="audience" content="[대상 독자 기술]">
```

### hreflang (양쪽 파일 모두 3개 필수)
```html
<link rel="alternate" hreflang="ko" href="https://blog.pebblous.ai/project/BizReport/[slug]/ko/">
<link rel="alternate" hreflang="en" href="https://blog.pebblous.ai/project/BizReport/[slug]/en/">
<link rel="alternate" hreflang="x-default" href="https://blog.pebblous.ai/project/BizReport/[slug]/en/">
```

### PebblousPage.init() (KO)
```javascript
PebblousPage.init({
    mainTitle: "비즈 인사이트: [기업명] 기업 분석 — 페블러스 전략 관점",
    subtitle: "[핵심 포지셔닝 한 줄]",
    pageTitle: "비즈 인사이트: [기업명] 기업 분석 — 페블러스 전략 관점 | Pebblous",
    category: "project",
    publishDate: "YYYY-MM-DD",
    publisher: "(주)페블러스 데이터 커뮤니케이션팀",
    defaultTheme: "light",
    articlePath: "project/BizReport/[slug]/ko/",
    tags: ["BizReport", "기업분석", "[기업명]", "..."],
    faqs: [
        { question: "Q?", answer: "A." }
    ]
});
```

---

## BizReport 전용 CSS 클래스 참조

(Applied Intuition 템플릿에 정의된 클래스 — 동일하게 재사용)

| 클래스 | 용도 |
|--------|------|
| `.interactive-card` | 호버 효과 카드 (지표 카드 등) |
| `.pdf-download-card` | PDF 다운로드 섹션 |
| `.comparison-table` | 제품·재무 비교표 |
| `.timeline-item` | 타임라인 요소 |
| `.strategy-matrix` | 2x2 전략 매트릭스 그리드 |
| `.matrix-cell.overlap / .gap / .coexist / .learn` | 매트릭스 4개 셀 |
| `.insight-block.threat / .opportunity / .lesson` | 위협/기회/교훈 블록 |
| `.accent-text` | 오렌지 강조 텍스트 |
| `.teal-text` | 틸 강조 텍스트 |
| `.status-yes / .partial / .no / .building` | 상태 표시 |

---

## 에러 핸들링

| 단계 | 실패 | 처리 |
|------|------|------|
| Phase 0 | git 브랜치 충돌 | 기존 브랜치 체크아웃 후 진행 |
| Phase 1 | biz-planner 미응답 | 기업명 기반 직접 기획 후 진행, 5각도 수동 작성 |
| Phase 2 | 리서치 트랙 1개 실패 | 2개 트랙만 완료 시 실패 트랙 명시 후 합성 진행 |
| Phase 3 | biz-synthesizer 미응답 | 3개 트랙 결과 직접 합산 후 진행 |
| Phase 4 | KO 또는 EN HTML 생성 실패 | 성공한 버전 먼저 퍼블리싱, 실패 버전 사용자에게 알리고 재시도 |
| Phase 5 | OG/articles/git 중 일부 실패 | 실패 단계 명시 후 나머지 진행 |
| validate-articles.py 오류 | HTML 구조 문제 | 오류 내용 확인 후 biz-writer-ko/en에 수정 지시 |
