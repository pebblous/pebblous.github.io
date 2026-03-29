---
name: pebblopedia-write
description: "PebbloPedia 아티클 HTML 작성 스킬. 5단계 난이도 구조(초등학생~위자드)의 완성된 페이지를 생성한다. 페블로피디아 HTML 작성, 페블로피디아 글 쓰기 요청 시 반드시 이 스킬을 사용할 것."
---

# PebbloPedia Write

PebbloPedia HTML 아티클 작성 스킬. 상세 HTML 구조는 `.claude/skills/pebblopedia/SKILL.md` 참조.

## 파일 생성 목록

```
pebblopedia/{topic}/
├── index.html          # ./ko/ 리디렉트
└── ko/
    └── index.html      # 한국어 본문
```

### 리디렉트 index.html

```html
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="refresh" content="0;url=./ko/">
<link rel="canonical" href="https://blog.pebblous.ai/pebblopedia/{topic}/ko/">
</head>
<body>
<a href="./ko/">이동 중...</a>
</body>
</html>
```

## PebblousPage.init() — PebbloPedia 전용

```javascript
PebblousPage.init({
    mainTitle: "{주제}",
    subtitle: "[페블로피디아] 어린이부터 전문가까지, 다섯 단계 난이도로 배우는 핫 키워드",
    pageTitle: "{주제} — [페블로피디아] 어린이부터 전문가까지, 다섯 단계 난이도로 배우는 핫 키워드 | 페블러스",
    category: "tech",
    publishDate: "YYYY-MM-DD",
    publisher: "(주)페블러스 데이터 커뮤니케이션팀",
    defaultTheme: "light",
    articlePath: "pebblopedia/{topic}/ko/",
    tags: ["태그1", "태그2"]
});
```

- `mainTitle`: 주제명만 (짧게)
- `subtitle`: 항상 동일한 시리즈 문구
- `category`: 항상 `"tech"`
- `articlePath`: 끝에 `/` 필수, `index.html` 금지

## 5단계 섹션 구조

```html
<!-- 이 글 소개 (Executive Summary) -->
<section id="executive-summary" class="mb-16 fade-in-card">
    <h2 class="text-3xl font-bold themeable-heading mb-8">이 글 소개</h2>
    <div class="key-insight">
        <p class="themeable-text leading-relaxed">
            [이 글이 다루는 것, 누가 읽어야 하는지, 어떻게 구성되어 있는지]
        </p>
    </div>
    <!-- 5단계 가이드 카드 그리드 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        <div class="themeable-card p-4 border-l-4" style="border-left-color: #22c55e;">
            <div class="text-2xl mb-2">🧒</div>
            <div class="font-semibold themeable-heading">1단계</div>
            <div class="text-sm themeable-muted">초등학생</div>
        </div>
        <!-- 2단계(#3b82f6), 3단계(#f59e0b), 4단계(#F86825), 5단계(#a855f7) -->
    </div>
</section>

<!-- 레벨 섹션 (1~5) -->
<section id="level-{N}" class="level-section level-{N} mb-16 fade-in-card">
    <div class="flex items-center gap-3 mb-6">
        <span class="number-badge">{N}</span>
        <h2 class="text-3xl font-bold themeable-heading">{레벨 제목}</h2>
    </div>
    <div class="level-badge level-{N} mb-6">
        <span class="level-emoji">{이모지}</span>
        <span>{대상 설명}</span>
    </div>
    <div class="themeable-text leading-relaxed" style="line-height: 2.0;">
        [본문 — 해당 레벨 깊이로 충분히 작성]
    </div>
</section>
```

## 레벨별 콘텐츠 원칙

| 레벨 | 분량 | 어조 | 포함 요소 |
|------|------|------|----------|
| L1 🧒 | 400~600자 | 친근한 이야기체 | 비유, 대화, 상상 |
| L2 🎒 | 600~800자 | 탐구하는 어조 | 원리, 사례, "왜?" |
| L3 🎓 | 800~1200자 | 기술적·정확한 | 프레임워크명, 아키텍처, 코드 개념 |
| L4 🔬 | 1000~1500자 | 전문가 동료처럼 | 논문, 수치, 미해결 문제 |
| L5 🧙 | 500~700자 | 시적·사색적 | 산문시 또는 에세이 형식 |

## 메타 노트 섹션 (special_instructions: meta_note)

`_workspace/00_input.md`에 `meta_note: true`가 있으면 레벨5 다음에 추가:

```html
<section class="mb-12">
    <div class="themeable-card p-6" style="border: 1.5px dashed #a855f7; border-radius: 12px;">
        <div class="text-2xl mb-3">🤖</div>
        <h3 class="text-lg font-semibold themeable-heading mb-3">이 페이지는 하네스로 만들어졌어요</h3>
        <p class="themeable-text leading-relaxed text-sm">
            흥미로운 사실: 이 PebbloPedia 페이지는 페블러스의 <strong>하네스(Harness)</strong> 시스템으로 자동 생성되었습니다.
            리서처 에이전트가 5개 레벨 자료를 수집하고, 작성 에이전트가 HTML을 작성하고,
            퍼블리셔 에이전트가 배포까지 마쳤어요. 하네스에 대해 설명하는 이 페이지 자체가
            하네스의 작동 증거인 셈입니다. <em>글을 읽는 지금 이 순간, 당신은 하네스의 산출물을 보고 있습니다.</em>
        </p>
    </div>
</section>
```

## SEO 필수 태그

```html
<title>{주제} — [페블로피디아] 어린이부터 전문가까지... | 페블러스</title>
<meta name="description" content="[120-155자]">
<link rel="canonical" href="https://blog.pebblous.ai/pebblopedia/{topic}/ko/">
<meta property="og:title" content="{주제} — [페블로피디아]...">
<meta property="og:image" content="https://blog.pebblous.ai/pebblopedia/{topic}/ko/image/index.png">
<meta name="twitter:site" content="@pebblous">
<meta name="twitter:creator" content="@pebblous">
<meta property="article:published_time" content="YYYY-MM-DDT00:00:00+09:00">
```

## CSS 로드 규칙

```html
<!-- 3종만 로드 (styles.css 금지) -->
<link rel="stylesheet" href="/styles/theme-variables.css?v=YYYYMMDD">
<link rel="stylesheet" href="/styles/common-styles.css?v=YYYYMMDD">
<link rel="stylesheet" href="/styles/tailwind-build.css?v=YYYYMMDD">
```

## 출력 메타 파일

`_workspace/02_write_meta.json` 저장. 상세 구조는 `pebblopedia-publisher` 에이전트 정의 참조.

## 레퍼런스

HTML 전체 구조 + 리뷰 체크리스트: `.claude/skills/pebblopedia/SKILL.md`
실제 구현 예시: `pebblopedia/physical-ai/ko/index.html`
