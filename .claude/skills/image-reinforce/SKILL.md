---
name: image-reinforce
description: "Add contextual images to blog posts — auto mode finds, verifies, and links external images to their original URLs (no copying) without user intervention"
argument-hint: "<path-to-html-post> [--auto]"
---

# image-reinforce

When this skill is invoked with a path to an HTML blog post:

## Overview

Analyzes an HTML blog post and inserts contextual images that reinforce the narrative. Three modes:

- **Plan mode** (default): Analyze, propose placements, wait for approval
- **Auto mode** (`--auto`): Find → verify → link original URL → insert — no user intervention needed
- **Insert mode** (`--insert`): Replace existing placeholders with final URLs

## Goals

1. **그림은 꼭 필요한 곳에만 — 0~3개, 0개도 정상이다** (2026-11-01 형님: 위키미디어·공식 뉴스룸 같은 그림은 "별로 재미가 없어서 굳이 안 넣어도 될 듯")
   - 빈자리를 외부 그림으로 채우지 않는다. 위키미디어 일러스트·뉴스룸 홍보 사진·보도 사진·인물 사진은 넣지 않는다.
   - 기본은 **자체 도식**(페블러스 톤 인라인 SVG) — 글의 핵심 구조·비교·흐름을 우리가 직접 그린다.
   - 외부 그림은 **글이 그 그림 자체를 다룰 때만** 넣는다(예: 분석하는 논문의 핵심 그림, 처음 공개된 제품·로봇의 실물). 넣을 때는 아래 원본 연결 규칙을 따른다.
2. **⛔ 외부 그림은 레포에 복사하지 않는다 — 원본 그림 주소로 연결한다** (2026-11-01 형님 결정: "이미지는 자체 생성이 아니면, 원본을 링크로 연결하도록 해야 겠다.")
   - 이유: 내려받아 복사하던 시절 10월 KO 162편이 본문 그림 361장·149MB 를 넣었고, ko/en 이 같은 그림을 두 벌 가졌다. 사이트(GitHub Pages)는 1GB 를 넘겨 배포 경고가 났다.
   - 레포에 파일로 두는 것은 **자체 생성 그림**(페블러스가 그린 도식·차트·생성 이미지)뿐이다. 자체 생성 래스터 그림은 `data-origin="pebblous"` 를 달고, 긴 변 1,600px·1MB 이하로 줄여 넣는다. 도식은 인라인 SVG 가 우선이다.
   - 발행 전 `node tools/check-post-images.js <ko/index.html> <en/index.html>` 가 이 규칙을 검사한다(차단이면 exit 1).
3. Follow Text-First principle: images always appear **after** the explaining paragraph
4. Maintain 3-theme compatibility (dark/light/beige)

## Auto Mode (`--auto`)

When `--auto` is specified, run the entire pipeline without user interaction:

```
1. Analyze post → 자체 도식이 독자 이해를 실제로 돕는 자리만 고른다(0~3곳). 그런 자리가 없으면 아무것도 넣지 않고 끝낸다
2. 자체 도식 자리는 인라인 SVG 로 그린다(아래 "논문 figure 재해석" 규칙의 색·테마 규칙을 따른다)
3. 글이 외부 그림 자체를 다루는 자리만, for each:
   a. ⛔ 위키미디어·뉴스룸 홍보 사진으로 자리 채우기 금지 — 그 그림이 글의 대상일 때만
   b. 원본(논문 arXiv HTML 판·제품 공식 페이지)에서 찾는다
   c. Find the **direct image URL** (the file itself, e.g. 논문 arXiv HTML 판의 그림 파일 주소) and the **source page URL** (for the caption)
   d. Verify the direct URL works when embedded on our site (아래 "URL 사전 검증" 3단계 — Referer 를 붙여도 200 + image/* 이어야 한다)
   e. Verify image content: 확인용으로 **/tmp 에만** 받아 Read 툴로 본다 — 레포에 저장하지 않는다
   f. If wrong/failed/hotlink-blocked: skip slot, continue to next
4. Insert verified images into HTML with `src="<direct image URL>"` + `referrerpolicy="no-referrer"`
5. Report results (inserted / skipped / 넣지 않음 — 0개도 정상 보고)
6. Commit and push
```

**Auto mode rules:**
- Do NOT wait for user approval — just do it
- Skip failed slots silently (onerror fallback handles it anyway)
- ⛔ 외부 그림을 `ko/image/`·`en/image/` 에 내려받지 않는다 (`img-{nn}-{slug}` 로컬 파일 금지)
- Report only at the end: "5/6 images inserted, 1 skipped (AlexNet: 404)"

## Step 1: Analyze Post Structure

Read the HTML post and identify:
- Sections and their topics
- Visual gaps: sections with only text (no chart, card, table, or image)
- Key concepts that benefit from visual illustration
- Existing visuals to avoid redundancy

## Step 2: Source & Reference Lookup

**Image source priority (CRITICAL — 반드시 이 순서):**

> ⚠️ **포스팅 유형에 따라 우선순위가 달라진다 — 반드시 먼저 판단하라.**

### 📌 심층보고서 / 논문 분석 포스팅 (report/, 특정 논문이 주요 참조인 경우)
1. **⭐ 논문 핵심 figure의 "원본 재해석 도식"** (최우선) — 논문의 핵심 그림(개념도·핵심 결과 플롯·구조도) 1~3개를
   **페블러스 톤 원본 인라인 SVG**로 직접 재현한다. 논문 figure를 그대로 복사하지 않고 *메시지를 재해석*해
   그린다. 저작권 안전 + 테마 일관(오렌지 #F86825·themeable) + 외부 파일 의존 0(깨질 일 없음). → 아래 "논문 figure 재해석" 참조.
2. ~~Wikimedia Commons~~ — 쓰지 않는다(2026-11-01 형님). 재해석이 어려우면 그림 없이 둔다
3. **논문 figure 연결** — ⚠️ 저작권 판단 영역(pebblous.ai=상업 사이트). 원본 재해석이 불가·부적합할 때만,
   arXiv HTML 판 등의 원본 그림 주소로 연결하고 출처 명기(`Figure from {저자} et al., arXiv:{id}`), 신중히. 복사 금지. 인물 사진·뉴스사 기사 이미지는 금지.
4. Unsplash — **절대 금지**

#### ⭐ 논문 figure 재해석 (원본 인라인 SVG) — 1순위 절차
1. 논문(arXiv) 정독으로 **핵심 figure 1~3개**를 고른다: ① 핵심 개념도(데이터/구조), ② 핵심 결과 플롯(상전이·스케일링),
   ③ 방법/구조도. *메타데이터성 그림(표지·로고)은 제외.*
2. 각 figure의 **메시지**를 한 줄로 추출 → 그 메시지를 전달하는 **원본 도식을 직접 그린다**(논문 그림 모사 X, 재해석 O).
3. **인라인 SVG**로 본문에 삽입(외부 파일 X). 규칙:
   - `viewBox` + `class="w-full max-w-[660px] h-auto mx-auto rounded-xl border themeable-border"`, 배경 옅게.
   - 색: 강조=오렌지 `#F86825`(고정 OK). **⛔ 보조 텍스트·연결선에 회색 하드코딩 금지** —
     `#94a3b8` 등은 *다크테마 값*이라 light/beige 흰 바탕에서 안 보인다(2026-06-22 대비 사고, 23글 일괄수정).
     **테마 변수 필수**: 보조 텍스트 `fill="var(--text-secondary)"`, 연결선·외곽 `stroke="var(--text-muted)"`
     (3테마 자동 적응 — light=#4B5563, dark=#94a3b8). 예외: **다크 박스**(`fill="#1e293b"`/`#334155` 등) *위에
     얹는* 텍스트만 `#e2e8f0`/`#cbd5e1` 고정 허용(박스가 항상 다크라 안전). SVG 배경은 `style="background:var(--card-bg,…)"`.
   - **⛔ 강조색 정책 (2026-06-22, 정본 design-tokens 기반)**: **강조=오렌지 `#F86825` 한 가지 + 중립 회색만**이 기본.
     **틸 `#14B8A6`(페블러스 토큰 아님)·보라·빨강(범용 부정용)·초록(범용)·앰버 사용 금지.** 부득이 색 구분이 꼭
     필요할 때만(정보/긍정 등) **공식 토큰**: 정보=파랑 `#0066FF`(blue-40), 성공/긍정=초록 `#51C57A`(pgreen-50).
     긍정/부정은 색 대신 **오렌지(강조) vs 회색 + ✓/✗·라벨**로 우선 표현. 진짜 오류/파괴적 의미만 빨강 `#CF1D21`(red-50).
     그라데이션 금지.
   - 폰트: KO `Pretendard`, EN `Outfit`. 라벨은 해당 언어로(KO/EN 각각).
   - `<figcaption>`에 **"페블러스 원본 도식 (Fig. N 재해석)"** 명기 — 원본임을 분명히.
   - 단순 CSS 도식(표·막대·grid)으로 충분한 정량 비교는 CSS로, 공간/구조/관계 개념은 SVG로.
4. KO·EN 동일 도식(라벨만 각 언어) — 양쪽에 삽입.
> 사례(2026-06-21, diffusion 저차원 리포트): "union-of-subspaces"(고차원 공간서 데이터가 저차원 부분공간 합집합 근방에만
> 밀집) 개념을 점선 ambient 박스 + 오렌지 부분공간 U₁·U₂ + 밀집/희박 점으로 원본 SVG 재현. 논문 figure 무단복사 회피 +
> onerror 빈 슬롯 제거 + 테마 일관 동시 달성.

### 📌 일반 블로그 포스팅 (blog/, story/, project/)
1. **자체 도식(인라인 SVG)** — 기본. 글의 구조·비교·흐름을 직접 그린다
2. **글이 다루는 대상 그 자체의 그림** — 분석하는 논문의 핵심 그림, 처음 공개된 제품·로봇의 실물. 원본 주소로 연결
3. 그 밖의 외부 그림(위키미디어 일러스트·뉴스룸 홍보 사진·보도 사진·인물 사진·Unsplash) — **넣지 않는다**(2026-11-01 형님 "재미가 없어서 굳이 안 넣어도 될 듯")

**CRITICAL: URL 사전 검증 (반드시 실행)**

이미지를 삽입하기 전에 반드시 아래 검증을 통과해야 한다:

```bash
# Step 1: HTTP 상태 확인
curl -sL -o /dev/null -w "%{http_code}" "[URL]"
# → 200이 아니면 사용 불가

# Step 2: 우리 사이트에 넣었을 때도 뜨는지 (핫링크 차단 확인)
curl -sL -o /dev/null -w "%{http_code} %{content_type}" -e "https://blog.pebblous.ai/" "[URL]"
# → 200 + image/* 가 아니면 사용 불가 (Referer 로 막는 서버는 이 단계에서 걸러진다)

# Step 3: 확인용 내려받기 — /tmp 에만, 레포에 두지 않는다
curl -sL -o /tmp/check-image.{ext} "[URL]"

# Step 4: 시각적 내용 확인 (Read tool)
# → 실제 이미지 내용이 의도한 것과 맞는지 확인
# → Cloudflare 에러 페이지, 로그인 화면, 다른 콘텐츠가 아닌지 확인
```

**4단계 모두 통과한 이미지만 사용한다.** 원본 주소는 오래 살아 있을 곳을 고른다 — arXiv 판 고정 주소, 제품 공식 페이지의 고정 주소. 서명·만료 쿼리(`?Expires=`, `X-Amz-Signature` 등)가 붙은 주소, 썸네일 캐시 주소는 쓰지 않는다. URL이 200을 반환해도 내용이 다를 수 있다 (Statista → EU 시민권 통계가 온 사례).

## Step 3: Link & Insert

### 원본 연결 규칙

- 외부 그림: `src` = 원본 그림의 직접 주소, `referrerpolicy="no-referrer"`, 캡션에 출처 **페이지** 링크(`<a href="https://...">`). 레포에 파일을 만들지 않는다.
- 자체 생성 래스터 그림만 레포에 둔다: `{post-dir}/ko/image/{slug}.{ext}` + `data-origin="pebblous"`, 긴 변 1,600px·1MB 이하. EN 글은 같은 파일을 `../ko/image/{slug}.{ext}` 로 참조한다(복사 금지).
- 깨졌을 때는 그림만 숨기고 캡션(출처 링크)은 남긴다: `onerror="this.style.display='none'"`.

### Standard Image Pattern

**CRITICAL: `max-h-[480px]` + `object-contain`을 반드시 포함**

```html
<!-- Image: [brief description] -->
<figure class="my-8">
    <img src="[direct original image URL — https://...]"
         alt="[descriptive alt text for SEO and accessibility]"
         class="w-full max-h-[480px] object-contain rounded-xl border themeable-border mx-auto"
         loading="lazy"
         referrerpolicy="no-referrer"
         onerror="this.style.display='none'">
    <figcaption class="text-xs themeable-muted text-center mt-2">
        ▲ [Korean caption] | 출처: <a href="[source page URL]" target="_blank" rel="noopener" class="underline">[source name]</a>
    </figcaption>
</figure>
```

### Size-Constrained Pattern (for smaller/portrait images)

```html
<figure class="my-8">
    <img src="[direct original image URL — https://...]"
         alt="[alt text]"
         class="max-w-[560px] max-h-[480px] object-contain w-full rounded-xl border themeable-border mx-auto"
         loading="lazy"
         referrerpolicy="no-referrer"
         onerror="this.style.display='none'">
    <figcaption class="text-xs themeable-muted text-center mt-2">
        ▲ [Caption] | 출처: <a href="[source page URL]" target="_blank" rel="noopener" class="underline">[source name]</a>
    </figcaption>
</figure>
```

### Plan Mode: Propose Table

In plan mode (no `--auto`), present to user:

| # | Section | Placement | Image concept | Source type |
|---|---------|-----------|---------------|-------------|

Wait for user approval before proceeding.

## Key Rules

### Placement
- **Always after** the paragraph that introduces the concept (Text-First)
- **Before** the next heading or visual element
- Target visual gap areas (text-only sections)
- Maximum 1 image per section (avoid visual overload)
- Never inside `key-insight`, `quote-box`, `highlight-box`, or `equation-box`

### Alt Text
- Descriptive, keyword-rich for SEO
- Korean for KO posts, English for EN posts
- Include the key concept the image illustrates

### Graceful Degradation
- `onerror="this.style.display='none'"` hides a broken image but keeps the caption (출처 링크가 남아 독자가 원본을 찾아갈 수 있다)
- `loading="lazy"` for performance
- The post must make complete sense without images (images are supplementary)

### Bilingual Posts
- KO and EN versions get equivalent images (same concept, different alt/caption language)
- Use the same original image URL for both versions — 외부 그림은 둘 다 원본 주소, 자체 생성 그림은 EN 이 `../ko/image/` 참조

### Theme Compatibility
- Use `themeable-border` for border color adaptation
- Use `rounded-xl` for consistent corner radius
- Avoid images with hardcoded white/dark backgrounds that clash with themes

## Verify (Auto mode: automatic)

After insertion:
- [ ] `node tools/check-post-images.js <ko/index.html> <en/index.html>` → exit 0 (차단 0)
- [ ] 외부 그림이 레포에 복사되지 않았다 (`git status` 에 `image/img-*` 새 파일 0)
- [ ] 자체 생성 로컬 그림은 `data-origin="pebblous"`·1MB 이하
- [ ] Alt text is descriptive and in the correct language
- [ ] Captions include source attribution
- [ ] Images appear after explaining text, not before
- [ ] 그림 0~3개 — 위키미디어·뉴스룸 홍보 사진으로 자리를 채우지 않았다
- [ ] `onerror` fallback on every `<img>` · `referrerpolicy="no-referrer"` on every external `<img>`
- [ ] `loading="lazy"` on every `<img>`
- [ ] Bilingual parity (if applicable)

## Post-Task Chain

```
1. /changelog — Record image-reinforce action
2. /publish   — Rebuild CSS + prepare commit
```
