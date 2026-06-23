---
name: image-reinforce
description: "Add contextual images to blog posts — auto mode finds, verifies, downloads, and inserts without user intervention"
argument-hint: "<path-to-html-post> [--auto]"
---

# image-reinforce

When this skill is invoked with a path to an HTML blog post:

## Overview

Analyzes an HTML blog post and inserts contextual images that reinforce the narrative. Three modes:

- **Plan mode** (default): Analyze, propose placements, wait for approval
- **Auto mode** (`--auto`): Find → verify → download → insert — no user intervention needed
- **Insert mode** (`--insert`): Replace existing placeholders with final URLs

## Goals

1. Add 4-6 relevant images per post that visually reinforce key concepts
2. **Download to local repo** (preferred) — eliminates hotlink/404 risks
3. Follow Text-First principle: images always appear **after** the explaining paragraph
4. Maintain 3-theme compatibility (dark/light/beige)

## Auto Mode (`--auto`)

When `--auto` is specified, run the entire pipeline without user interaction:

```
1. Analyze post → identify 4-6 visual gap slots
2. For each slot:
   a. Search Wikimedia Commons first (most stable)
   b. Fallback: official sites, Apple Newsroom, arxiv, etc.
   c. Verify URL: curl -sL -o /dev/null -w "%{http_code}" "[URL]"
   d. If 200: download to ko/image/ directory
   e. If 200: verify image content (Read tool — check it's the right image, not an error page)
   f. If wrong/failed: skip slot, continue to next
3. Insert verified local images into HTML
4. Report results (inserted / skipped)
5. Commit and push
```

**Auto mode rules:**
- Do NOT wait for user approval — just do it
- Skip failed slots silently (onerror fallback handles it anyway)
- Download to `ko/image/img-{nn}-{slug}.{ext}` naming convention
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
2. **Wikimedia Commons (CC/PD)** — 재해석이 어려운 일반 개념(예: manifold 일러스트) 보충용으로만
3. **논문 figure 직접 삽입** — ⚠️ 저작권 판단 영역(pebblous.ai=상업 사이트). 원본 재해석이 불가·부적합할 때만,
   fair-use 인용으로 출처 명기(`Figure from {저자} et al., arXiv:{id}`)하고 신중히. 인물 사진·뉴스사 기사 이미지는 금지.
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
     그라데이션·틸 금지.
   - 폰트: KO `Pretendard`, EN `Outfit`. 라벨은 해당 언어로(KO/EN 각각).
   - `<figcaption>`에 **"페블러스 원본 도식 (Fig. N 재해석)"** 명기 — 원본임을 분명히.
   - 단순 CSS 도식(표·막대·grid)으로 충분한 정량 비교는 CSS로, 공간/구조/관계 개념은 SVG로.
4. KO·EN 동일 도식(라벨만 각 언어) — 양쪽에 삽입.
> 사례(2026-06-21, diffusion 저차원 리포트): "union-of-subspaces"(고차원 공간서 데이터가 저차원 부분공간 합집합 근방에만
> 밀집) 개념을 점선 ambient 박스 + 오렌지 부분공간 U₁·U₂ + 밀집/희박 점으로 원본 SVG 재현. 논문 figure 무단복사 회피 +
> onerror 빈 슬롯 제거 + 테마 일관 동시 달성.

### 📌 일반 블로그 포스팅 (blog/, story/, project/)
1. **대상 소스/프로젝트의 실제 이미지** — 논문 figure, 프로젝트 스크린샷, 공식 프레스 이미지
2. **Official product screenshots** (Apple Newsroom, NVIDIA newsroom 등)
3. **Open-license technical diagrams**
4. **Wikimedia Commons** — 위 소스에서 적절한 이미지가 없을 때 보충용
5. Unsplash — **절대 금지**

**CRITICAL: URL 사전 검증 (반드시 실행)**

이미지를 삽입하기 전에 반드시 아래 검증을 통과해야 한다:

```bash
# Step 1: HTTP 상태 확인
curl -sL -o /dev/null -w "%{http_code}" "[URL]"
# → 200이 아니면 사용 불가

# Step 2: 다운로드
curl -sL -o /tmp/check-image.{ext} "[URL]"

# Step 3: 시각적 내용 확인 (Read tool)
# → 실제 이미지 내용이 의도한 것과 맞는지 확인
# → Cloudflare 에러 페이지, 로그인 화면, 다른 콘텐츠가 아닌지 확인
```

**3단계 모두 통과한 이미지만 사용한다.** URL이 200을 반환해도 내용이 다를 수 있다 (Statista → EU 시민권 통계가 온 사례).

## Step 3: Download & Insert

### Download Convention

```
{post-dir}/ko/image/img-01-{slug}.{ext}
{post-dir}/ko/image/img-02-{slug}.{ext}
...
```

예: `story/nvidia-story-pb/ko/image/img-01-dennys-founding.jpg`

### Standard Image Pattern

**CRITICAL: `max-h-[480px]` + `object-contain`을 반드시 포함**

```html
<!-- Image: [brief description] -->
<figure class="my-8">
    <img src="./image/img-01-{slug}.{ext}"
         alt="[descriptive alt text for SEO and accessibility]"
         class="w-full max-h-[480px] object-contain rounded-xl border themeable-border mx-auto"
         loading="lazy"
         onerror="this.parentElement.style.display='none'">
    <figcaption class="text-xs themeable-muted text-center mt-2">
        ▲ [Korean caption] | Source: <a href="[source page URL]" target="_blank" rel="noopener" class="underline">[source name]</a>
    </figcaption>
</figure>
```

### Size-Constrained Pattern (for smaller/portrait images)

```html
<figure class="my-8">
    <img src="./image/img-02-{slug}.{ext}"
         alt="[alt text]"
         class="max-w-[560px] max-h-[480px] object-contain w-full rounded-xl border themeable-border mx-auto"
         loading="lazy"
         onerror="this.parentElement.style.display='none'">
    <figcaption class="text-xs themeable-muted text-center mt-2">
        ▲ [Caption] | Source: [source]
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
- `onerror="this.parentElement.style.display='none'"` hides broken images
- `loading="lazy"` for performance
- The post must make complete sense without images (images are supplementary)

### Bilingual Posts
- KO and EN versions get equivalent images (same concept, different alt/caption language)
- Use the same image URLs for both versions when appropriate

### Theme Compatibility
- Use `themeable-border` for border color adaptation
- Use `rounded-xl` for consistent corner radius
- Avoid images with hardcoded white/dark backgrounds that clash with themes

## Verify (Auto mode: automatic)

After insertion:
- [ ] All local image files exist and are valid
- [ ] Alt text is descriptive and in the correct language
- [ ] Captions include source attribution
- [ ] Images appear after explaining text, not before
- [ ] No more than 6 images total
- [ ] `onerror` fallback on every `<img>`
- [ ] `loading="lazy"` on every `<img>`
- [ ] Bilingual parity (if applicable)

## Post-Task Chain

```
1. /changelog — Record image-reinforce action
2. /publish   — Rebuild CSS + prepare commit
```
