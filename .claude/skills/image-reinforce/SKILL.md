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
1. **Wikimedia Commons** — 가장 안정적. 영구 URL. CC 라이선스. 항상 여기서 먼저 검색
2. **대상 소스/프로젝트의 실제 이미지** — 논문 figure, 프로젝트 스크린샷, 공식 프레스 이미지
3. Official product screenshots (Apple Newsroom, NVIDIA newsroom 등)
4. Open-license technical diagrams
5. Unsplash — **보조 용도로만**

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
