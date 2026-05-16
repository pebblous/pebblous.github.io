# Hub Reverse-Link Policy

블로그 허브 페이지(`type:hub`)는 카드 그리드로 시리즈 글들을 묶는다.
그러나 허브 → 글 일방향만으로는 부족하다.
시리즈 글에서 허브로 돌아오는 **reverse-link**가 있어야 SEO PageRank가 흐르고, 독자 동선이 끊기지 않는다.

## 두 위치, 둘 다 단다

시리즈에 속한 모든 글(KO + EN 양쪽)은 아래 **두 위치 모두**에 허브 백링크를 단다. 하나만 다는 절충안은 쓰지 않는다.

### (A) Executive Summary 마지막 문단 끝 — inline 한 문장

요약을 읽는 사람에게 "이 글은 시리즈의 일부"라는 컨텍스트를 즉시 준다. 본문 상단 링크라 SEO 가중치도 높다.

```html
<p class="themeable-text leading-relaxed">
    ...요약 마지막 문장... 이 글은 <a href="/project/{HubProject}/{lang}/" class="text-orange-500 hover:text-orange-400 font-semibold">{허브 이름}</a>에서 큐레이션하는 시리즈의 일부로, {이 글의 시리즈 내 포지셔닝 한 줄}.
</p>
```

**핵심 규칙:**
- 새 문단을 추가하지 말고, Exec Summary 마지막 `<p>`의 끝에 한 문장으로 자연스럽게 이어 붙인다.
- "이 글의 시리즈 내 포지셔닝"은 글마다 달라야 한다 ("역사적 출발점", "핵심 아키텍처 편", "운영의 정치학을 보는 자리" 등). 같은 문구를 13개 글에 똑같이 붙이면 SEO가 중복으로 인식할 수 있다.
- 링크 스타일은 `text-orange-500 hover:text-orange-400 font-semibold`로 통일 (PhysicalAI 허브 사례 따름).

### (B) 본문 끝 — Series Notice 카드

글을 다 읽은 사람의 "다음 글로 어디 가지?" 동선을 받는다. 시각적 마무리감도 준다.

`</main>` 직전(또는 `<main>`이 없는 페이지면 footer-placeholder 직전)에 다음 블록을 삽입:

```html
<!-- Hub Series Notice -->
<div class="themeable-card rounded-xl p-6 mt-8 mb-8" style="border-left: 4px solid #F86825;">
    <p class="text-sm font-bold themeable-heading mb-2">📚 {허브 이름} 시리즈</p>
    <p class="text-sm themeable-text leading-relaxed">
        이 글은 <a href="/project/{HubProject}/{lang}/" class="text-orange-500 hover:text-orange-400 font-semibold">{허브 이름}</a>에서 큐레이션하는 시리즈의 일부입니다. {시리즈 한 줄 요약}.
    </p>
</div>
```

**핵심 규칙:**
- 좌측 보더 색은 `#F86825` (오렌지). 다른 색 쓰지 말 것.
- `📚` 이모지로 시작 (시리즈 표식).
- 카드 본문은 글마다 같아도 된다. (A)에서 차별화했으니 (B)는 일관성이 더 중요.
- 다크 테마 단일 .html 페이지에서는 `themeable-card`가 없을 수 있으니 `bg-slate-900/60 border border-slate-700` 등 같은 톤으로 대체한다.

## 배제 위치 — 여기는 달지 않는다

- **Section Breadcrumbs / Hero badge 옆** — Breadcrumbs는 사이트 계층 구조(Home / Category)다. 큐레이션 시리즈는 다른 의미론이고, Google BreadcrumbList Schema와 충돌하며 시각적으로도 hero가 복잡해진다.
- **별도 floating sticky bar** — UX 노이즈. 본문 흐름을 따르는 두 위치(A, B)로 충분하다.
- **사이드바 (TOC)** — TOC는 문서 내 네비게이션이다. 외부 페이지로 가는 링크는 두지 않는다.

## 다국어 처리

- KO 글은 KO 허브로(`/project/{HubProject}/ko/`), EN 글은 EN 허브로(`/project/{HubProject}/en/`) 연결.
- EN 버전이 없는 KO 단일 페이지(예: `.html` 단일 파일)는 EN 허브에서 카드로 노출할 때 `(Korean)` 태그를 달고, 페이지 자체에는 KO 허브 백링크만 단다.

## 적용 사례

- **뉴로-심볼릭 × 온톨로지 허브** (`/project/NeuroSymbolicOntology/`) — 13개 시리즈 글에 KO+EN 양쪽 모두 A+B 패턴 적용 (2026-05-15).
- **피지컬 AI 허브** (`/project/PhysicalAI/`) — 부분 적용 (`physical-ai/ko/index.html`만). 신규 글이나 개편 시 본 정책으로 정렬.

## 새 허브 만들 때 체크리스트

1. `new-hub` 스킬로 허브 페이지 생성
2. `articles.json`에 시리즈 글들이 `type:hub` 또는 `extraPaths`로 잡히는지 확인
3. **시리즈 글 N개 × 2언어에 (A) + (B) 백링크 추가** ← 이 문서의 핵심
4. `/seo-check`, `/publish`, `/commit`

3번을 건너뛰면 SEO가 허브로 흐르지 않는다.
