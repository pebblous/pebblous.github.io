---
name: image-reinforce
description: "Add contextual images to blog posts — web URL placeholders first, then final insertion"
argument-hint: "<path-to-html-post>"
---

# image-reinforce

When this skill is invoked with a path to an HTML blog post:

## Overview

Analyzes an HTML blog post and inserts contextual images from the web that reinforce the narrative. Works in two modes:

- **Plan mode** (default): Analyze the post, propose image placements with placeholder markup
- **Insert mode** (`--insert`): Replace placeholders with final verified image URLs

## Goals

1. Add 4-6 relevant images per post that visually reinforce key concepts
2. Use web images via URL (no repo copy) — reduces repo bloat
3. Follow Text-First principle: images always appear **after** the explaining paragraph
4. Maintain 3-theme compatibility (dark/light/beige)

## Step 1: Analyze Post Structure

Read the HTML post and identify:
- Sections and their topics
- Visual gaps: sections with only text (no chart, card, table, or image)
- Key concepts that benefit from visual illustration (architecture diagrams, product screenshots, concept photos, data visualizations)
- Existing visuals to avoid redundancy

## Step 2: Source & Reference Lookup

Check for source materials:
- `source/` subdirectory next to the HTML file
- Related project directories
- The post's topic keywords for web image search

**Image source priority:**
1. Official product/project screenshots or diagrams (e.g., from the tool's own site)
2. Open-license technical diagrams (architecture, workflow)
3. High-quality concept images from reputable sources (Unsplash, official docs)

**CRITICAL: Image URL rules**
- MUST be stable URLs (official sites, CDNs, Unsplash) — NOT temporary/generated URLs
- MUST be HTTPS
- MUST have appropriate licensing (open source, CC, official press/media kit)
- NEVER use images from Google Image search results directly (use the source page)
- NEVER use data: URIs or base64-encoded images
- Prefer SVG or PNG for diagrams, WebP/JPEG for photos

## Step 3: Propose Image Plan

Present to the user a table:

| # | Section | Placement (after which element) | Image concept | Source type |
|---|---------|-------------------------------|---------------|-------------|

Wait for user approval before proceeding.

## Step 4: Insert Images

### Standard Image Pattern

```html
<!-- Image: [brief description] -->
<figure class="my-8">
    <img src="[URL]"
         alt="[descriptive alt text for SEO and accessibility]"
         class="w-full rounded-xl border themeable-border mx-auto"
         loading="lazy"
         onerror="this.parentElement.style.display='none'">
    <figcaption class="text-xs themeable-muted text-center mt-2">
        ▲ [Korean caption] | Source: [source name]
    </figcaption>
</figure>
```

### Size-Constrained Pattern (for smaller images)

```html
<figure class="my-8">
    <img src="[URL]"
         alt="[alt text]"
         class="max-w-[560px] w-full rounded-xl border themeable-border mx-auto"
         loading="lazy"
         onerror="this.parentElement.style.display='none'">
    <figcaption class="text-xs themeable-muted text-center mt-2">
        ▲ [Caption] | Source: [source]
    </figcaption>
</figure>
```

### Placeholder Pattern (Plan mode)

When inserting placeholders before final URLs are decided:

```html
<!-- IMAGE-PLACEHOLDER: [concept description] -->
<!-- Section: [section-id] | After: [preceding element description] -->
<!-- Concept: [what the image should show] -->
<!-- Source candidates: [suggested sources] -->
<figure class="my-8" data-image-placeholder="true">
    <div class="w-full rounded-xl border themeable-border mx-auto bg-slate-100 dark:bg-slate-800 flex items-center justify-center py-12">
        <p class="text-sm themeable-muted italic">[Image placeholder: concept description]</p>
    </div>
    <figcaption class="text-xs themeable-muted text-center mt-2">
        ▲ [Planned caption]
    </figcaption>
</figure>
```

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
- Prefer images with transparent or neutral backgrounds

## Step 5: Verify

After insertion:
- [ ] All image URLs load correctly (test with curl or fetch)
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
