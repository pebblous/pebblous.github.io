---
name: text-reinforce
description: Reinforce blog post text from source MD — add narrative paragraphs before visuals
argument-hint: "<path-to-html-post>"
---

When this skill is invoked with a path to an existing blog post:

## Overview

Analyzes an HTML blog post against its source MD document and reinforces text content following the **Text-First, Visual-Second** principle. For bilingual (KO/EN) posts, both versions are reinforced together.

## Goals

- **Restore narrative backbone** from source MD that was lost during HTML conversion
- **Add explanation paragraphs** before every visual (chart, card grid, table, tab, diagram)
- **Preserve existing structure** — never remove or restructure visuals, only add text around them
- **Maintain visual identity** — no CSS, class, or layout changes

## Steps

### 1. Detect post structure and source MD

1. Read the provided HTML file
2. Detect if bilingual: check for sibling `ko/` and `en/` directories
3. Find source MD file(s):
   - Look in `source/` subdirectory relative to the post
   - Look in parent `source/` directory
   - Match by title keywords if multiple MD files exist
   - Source may have `(EN)` prefix for English-original documents
4. If no source MD found, inform the user and offer to reinforce from context alone

### 2. Analyze the gap (per language version)

For each HTML file, build a **section-by-section gap report**:

```
Section: "2.1 주요 시장 트렌드"
├── Source MD: 12 sentences of narrative
├── Current HTML: 3 bullet cards only (no intro paragraph)
├── Gap: Missing intro paragraph + missing transition text
└── Action: Add 2 paragraphs before card grid
```

Identify these gap patterns:
- **Naked visual**: Chart/card/table/tab with no preceding `<p>` tag
- **Bullet-only section**: Section has only `<ul>`/`<ol>` or card grid, no prose
- **Truncated narrative**: Source has 5+ sentences, HTML has only 1-2
- **Missing transition**: No connecting text between sections
- **Lost insight**: Source contains analysis/opinion text not present in HTML

### 3. Present the gap report to the user

Show a summary table before making changes:

```
┌─────────────────────────────────┬──────────┬──────────┐
│ Section                         │ Source   │ HTML     │
│                                 │ Sentences│ Sentences│
├─────────────────────────────────┼──────────┼──────────┤
│ 2.1 주요 시장 트렌드            │ 12       │ 3        │
│ 3. 가트너의 4대 통합 패턴       │ 18       │ 5        │
│ 4.2 AADS 2단계 목표             │ 8        │ 2        │
└─────────────────────────────────┴──────────┴──────────┘
Total: 14 sections analyzed, 6 need reinforcement
```

Ask user which sections to reinforce (all, or specific ones).

### 4. Reinforce text (per section)

For each section to reinforce:

1. **Extract relevant text** from source MD
2. **Compose paragraph(s)** following these rules:
   - Use source MD sentences as-is when possible (they are the narrative backbone)
   - Place explanation paragraph **before** the visual element
   - Keep the tone consistent with existing prose in the post
   - For Korean: use `font-weight: 600` for emphasis, never italic
   - Wrap in appropriate HTML: `<p class="themeable-text leading-relaxed mb-6">`
3. **Insert via Edit tool** — never rewrite the section, only add text

### 5. Handle bilingual posts

When both `ko/` and `en/` versions exist:

1. **Reinforce KO first** from the Korean source MD
2. **Then reinforce EN** with equivalent content:
   - If EN source MD exists (`(EN)` prefix), use it directly
   - If no EN source, translate the reinforced KO paragraphs to English
   - Match paragraph count and placement between KO and EN
3. **Verify parity**: Both versions should have the same number of paragraphs per section

### 6. Post-reinforcement checklist

After all edits:

- [ ] Every chart/canvas has a preceding explanation `<p>`
- [ ] Every card grid has a preceding context `<p>`
- [ ] Every tab component has a preceding overview `<p>`
- [ ] Every table has a preceding summary `<p>`
- [ ] Section intros exist (what this section covers)
- [ ] No orphaned visuals (visual without any surrounding text)
- [ ] KO and EN versions have matching paragraph structure (if bilingual)
- [ ] No CSS, class, or layout changes were made
- [ ] Source MD sentences were preserved verbatim where possible

## Text Insertion Patterns

### Before a chart
```html
<!-- ADD THIS -->
<p class="themeable-text leading-relaxed mb-6">
    [Context from source MD explaining what the chart shows and why it matters]
</p>
<!-- EXISTING chart stays unchanged -->
<canvas id="existingChart"></canvas>
```

### Before a card grid
```html
<!-- ADD THIS -->
<p class="themeable-text leading-relaxed mb-6">
    [Source MD text summarizing the key points the cards represent]
</p>
<!-- EXISTING card grid stays unchanged -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
```

### Section intro (after heading, before content)
```html
<h2>3. 가트너의 4대 통합 패턴</h2>
<!-- ADD THIS -->
<p class="themeable-text leading-relaxed mb-6">
    [Source MD opening paragraph for this section — sets context]
</p>
<!-- EXISTING content continues -->
```

## Post-Task Chain (MUST follow after completion)

After reinforcement is done:
1. **`/changelog`** — Record the text-reinforce action with sections and linesAdded
2. **`/publish`** — Rebuild CSS (if any new Tailwind classes) + prepare commit

## Important Rules

1. **Never remove existing content** — only add text
2. **Never restructure HTML** — insert paragraphs at precise locations
3. **Source MD is the authority** — use its sentences verbatim when they fit
4. **Text-First is the goal** — a reader should understand the section even without visuals
5. **Minimal formatting** — use `themeable-text leading-relaxed` classes, no fancy styling
6. **Korean typography** — line-height 2.1 for paragraphs, never use italic for Korean
7. **Show the gap report first** — always get user approval before making changes
8. **Bilingual parity** — if reinforcing one language, reinforce the other too
