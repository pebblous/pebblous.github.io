---
title: Pebblous Blog February 2026 Review
subtitle: Simultaneous Growth in Content and Code
date: 2026-03-02
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Pebblous Blog February 2026 Review

_Simultaneous Growth in Content and Code_

## Executive Summary

> [!callout]
> Over three days from February 28 to March 2, 2026, the Pebblous Blog executed its most intensive agentic sprint to date. Published articles grew from 79 to 128, bilingual pairs jumped from 7 to 45, and Claude Skills expanded from 6 to 9. By GitHub code frequency metrics, +131,764 lines were added — 36.5% of the project's entire 24-week addition volume was concentrated in these three days.

> The biggest achievement was the "Bilingual Transformation." Over 47 posts were divided into 8 batches and converted to a KO/EN bilingual structure, raising the bilingual ratio from 8.2% to 52.9%. Simultaneously, card rendering, particle animation, and hub page loader code were extracted into shared modules, reducing code duplication by approximately 750 lines.

> This report is a follow-up to the [2026 Status Report](/report/blog-2026/en/), quantitatively documenting the blog's growth at the end-of-February milestone across three axes: content, code, and pipeline.

## 1. Key Metrics

These are the current figures (March 2) compared to the previous report (March 1). Numbers shaped by three days of change.

1,080

Total Commits

+67 from previous 1,013. 84 commits in 3 days (41 manual + 43 CI)

128

Published Articles

+49 from previous 79. Tech 53, Art 41, Business 20, Story 14

45

Bilingual Pairs

+38 from previous 7. 52.9% of 85 unique articles

9

Claude Skills

+3 from previous 6. Added changelog, new-hub, text-reinforce

### Before → After Comparison

March 1, 2026 (Previous Report)

- Published Articles79
- Bilingual7 pairs (8.2%)
- Commits1,013
- Claude Skills6
- Hub Pages0
- Shared JS Modules10 (index/)

March 2, 2026 (Current)

- Published Articles128 (+62%)
- Bilingual45 pairs (52.9%)
- Commits1,080 (+6.6%)
- Claude Skills9 (+50%)
- Hub Pages3 (ISO5259, IR, SyntheticData)
- Shared JS Modules13 (+3 new)

**Note:** Of 130 total entries in articles.json, 128 are published. There are 85 unique articles (by base ID), and the total count is higher because KO/EN versions are registered as separate entries through the bilingual conversion.

## 2. Bilingual Transformation

This is the core achievement of the sprint. Over 47 posts were divided into 8 batches over 3 days and converted to a KO/EN bilingual structure. This was not simple translation — it was a full-package conversion that restructured each post's directory from `post.html` to `post/{ko,en}/index.html`, including SEO redirect stubs, hreflang tags, and language switcher links.

### Batch Conversion Timeline

Batch 1~210 Tech posts

Bulk conversion of 10 Tech category posts. First production run of the bilingual pipeline.

Batch 3~410 Tech/Business posts

Expanded to the Business category. Header, TOC, and body layout alignment performed simultaneously across 58 posts.

Batch 5~69 SyntheticData, IR, PhysicalAI, AADS posts

Cross-category batch spanning multiple projects. Includes 4 AADS posts.

Batch 72 DataClinic + 4 ISO5259 posts

Focused conversion of ISO standard-related posts. Executed alongside the creation of a new ISO5259 hub page.

Batch 817 DAL posts (4 content + 13 gallery)

Bulk conversion of 13 Data Art Lab gallery items. The largest single batch.

47+

Posts Converted

8

Batches

52.9%

Bilingual Ratio

### Quality Enhancement Work

Alongside the bilingual conversion, we strengthened the content quality of existing posts. Using the `/text-reinforce` skill, 143 lines of narrative paragraphs were added across 7 posts, and Hero Section policy standardization along with header/TOC/body layout alignment was applied uniformly to 58 posts.

| Post | Lines Added |
| --- | --- |
| enterprise-ontology-paradigm (KO/EN) | +60 lines |
| digital-twin-physical-ai-market | +25 lines |
| pebblosim-design-strategy | +24 lines |
| physical-ai | +20 lines |
| data-greenhouse-strategy | +18 lines |
| palantir-vs-classic-ontology (KO/EN) | +16 lines |

## 3. Code Architecture Growth

As content grew, the code grew with it. We identified repeated card rendering and particle animation code across the index page, ISO5259 hub, and IR hub, and extracted them into 3 shared modules.

### New Shared Modules (3)

PebblousCardRendererNEW

scripts/card-renderer.js

Unified card rendering logic for index and hub pages. Image/video/GIF/particle cascade, tag scroll, featured badge, show more/less pagination. 636 lines → 350 lines (45% reduction).

PebblousHubCardsNEW

scripts/hub-cards.js

Hub page-specific card loader. A single line — `PebblousHubCards.init({ containerId, pathFilter, language })` — filters articles.json and renders a card grid. Used by all 4 hub pages.

CardParticle (shared)NEW

scripts/card-particles.js

Particle graph cluster animation. Consolidated duplicate code from 5 locations (index + ISO5259 ko/en + IR ko/en). ~470 lines saved. Customizable colors, speed, and density via `window.CardParticleConfig`.

### JS Module Overview (13 modules, 3,749 lines)

| Module | Role | Status |
| --- | --- | --- |
| common-utils.js | PebblousPage, Theme, Chart, Tabs — main utilities | Existing |
| card-renderer.js | Unified card rendering | NEW |
| card-particles.js | Particle graph cluster | NEW |
| hub-cards.js | Hub page card loader | NEW |
| index/init.js | Index orchestrator | Existing |
| index/articles.js | Article rendering (refactored) | Modified |
| index/theme.js | FOUC-prevention theme (sync) | Existing |
| index/search.js | Search + categories | Existing |

### Hub Page System (3 hubs)

Three new hub pages were created to provide at-a-glance access to project-specific content. All hubs are bilingual (KO/EN) and use the PebblousHubCards shared module.

ISO5259

Data Quality Standards

FAQ Schema + SEO enhanced

IR

Investor Research

Press Coverage + Perfect SEO

SyntheticData

Synthetic Data

Auto-generated via /new-hub skill

## 4. Skills & Pipeline Expansion

Claude Skills grew from 6 to 9. Three new additions: automatic work history logging (`/changelog`), automatic hub page generation (`/new-hub`), and content quality enhancement (`/text-reinforce`).

/new-post

Article Generation

MD/PDF → HTML. Includes PebblousPage.init, Executive Summary, bilingual support

/bilingual

Bilingual Conversion

KO→KO/EN structure transformation. Batch processing of hreflang, redirect stubs, and SEO

/seo-check

SEO Verification

4-Layer (meta, OG, JSON-LD, heading) automated audit. 26-point scoring

/publish

Publishing Pipeline

Tailwind build + git status check + /commit integration

/commit

Smart Commit

File classification (auto-gen/content/config) + selective staging + commit

/sns-write

SNS Promotion

Auto-generates tailored posts for LinkedIn, Twitter/X, and Facebook

/text-reinforceNEW

Content Quality Enhancement

Adds narrative paragraphs before visual elements (charts, tables). Enforces the Text-First principle

/changelogNEW

Work History Logging

Automatically records work history to history/changelog.jsonl. 22 entries accumulated

/new-hubNEW

Hub Page Generation

Topic keyword → automatic bilingual hub page generation. PebblousHubCards integration

### Expanded Content Pipeline

📝

Source

MD/PDF

→

🤖

/new-post

HTML Generation

→

🌐

/bilingual

KO/EN Conversion

→

✍️

/text-reinforce

Quality Enhancement

→

🔍

/seo-check

SEO Audit

→

🚀

/publish

Build + Deploy

**New Pattern — Large-Scale Batch Conversion:**
                            Execute `/bilingual` in batch units (4~17 posts) → bulk register in articles.json → generate SEO redirect stubs → `/commit` batch commit → CI auto-deploy. This pattern converted 47+ posts in 3 days.

## 5. GitHub Statistics

Code Frequency data extracted via the GitHub API. This week (week of 3/1) saw the largest code change in the project's 24-week history.

+131,764

Lines Added

36.5% of total 24-week additions (360K)

-66,955

Lines Deleted

Refactoring + structural conversion deletions

+64,809

Net Lines Added

1.93x the previous peak week (+68K)

### Weekly Code Frequency Trend

### Manual Commit Breakdown (41 commits)

| Category | Count | Key Work |
| --- | --- | --- |
| Bilingual Conversion | 10 | Batch 1~8 (47+ posts) |
| Hub Pages | 5 | IR, ISO5259, SyntheticData hubs |
| Code Refactoring | 4 | CardRenderer, HubCards, Particles shared modules |
| Layout Standardization | 3 | Header/TOC alignment (58 posts), Hero policy, grid width |
| Content Enhancement | 3 | text-reinforce on 7 posts, new Robotic Painting post |
| Bug Fixes | 4 | Loading... bug, FAQ duplication, wrapper breakage |
| SEO + Misc | 12 | ISO5259 SEO, path cleanup, PDF restoration, etc. |

## 6. Issues & Fixes

Large-scale work comes with issues. Here are the 6 major issues discovered and resolved during this sprint.

1Redirect Stub Path Error

**Cause:** Relative path `./ko/` was misinterpreted on URLs without trailing slashes

**Fix:** Switched to absolute paths like `/project/IR/ko/`

2AADS Description Completely Wrong

**Cause:** "AI-ready Autonomous Data System" (incorrect acronym expansion)

**Fix:** Corrected to "Agentic AI Data Scientist" (MSIT R&D project codename)

3IR Hub Showing Only 1 Card

**Cause:** KO PitchBook article was not registered in articles.json

**Fix:** Added the missing KO entry, restoring 2 cards to normal display

4FAQ JSON-LD Duplication

**Cause:** Manual insertion in <head> + automatic injection via config.faqs → duplicate Schema

**Fix:** Removed manual insertion; established policy to use config.faqs exclusively

5articles.json Wrapper Breakage

**Cause:** During editing, the `{ categories, articles }` wrapper was converted to a bare array

**Fix:** Restored wrapper + documented structure policy in CLAUDE.md

6Index Category "Loading..." Bug

**Cause:** Asynchronous rendering timing prevented category titles from being replaced

**Fix:** Corrected rendering order for proper display
