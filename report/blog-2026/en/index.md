---
title: Birth of the Agentic Blog
subtitle: From 57 to 79 articles, vibe coding to agentic automation — anatomy of an evolving blog
date: March 1, 2026
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Birth of the Agentic Blog

_From 57 to 79 articles, vibe coding to agentic automation — anatomy of an evolving blog_

## Executive Summary

> [!callout]
> The Pebblous blog, which began with its first commit in September 2025, achieved 57 articles and 753 commits within 3 months. Three months later, the blog has grown to 79 published articles, 1,013 commits, and 21 project directories. This is not merely a numerical increase — the very way the blog is built has fundamentally changed.

> The biggest transformation is the shift from "vibe coding" to "agentic automation." Six Claude Skills automate the entire process from article creation to SEO verification, RSS/sitemap publishing, and SNS copywriting, while 4 GitHub Actions compose the CI/CD pipeline. The PebblousPage.init() module system initializes 10+ components with a single config object.

> This report dissects the current state of the Pebblous blog. It documents what articles exist, how they are created, and what automation systems are in operation — archiving the birth of an agentic blog.

## 1. Key Metrics

Six months since the first commit on September 28, 2025. Here is the Pebblous blog by the numbers.

1,013

Total Commits

+260 vs Dec 2025. Average 5.6 commits per day over 6 months

79

Published Articles

Tech 35, Art 23, Business 14, Story 7. Including 7 bilingual pairs

21

Project Directories

21 independent projects including PhysicalAI, DataClinic, AADS, etc.

6

Claude Skills

new-post, seo-check, publish, commit, sns-write, bilingual skills

### Monthly Article Publication Trends

## 2. Growth Story: From 57 to 79

In the [2025 Year-End Report](/report/blog-2025-review/), we documented a "3-month sprint." 57 articles, 753 commits, 86,000 lines of code. It was the first milestone achieved through vibe coding and AI-assisted writing.

December 2025

- Published Articles57
- Commits753
- Projects12
- Bilingual0 pairs
- AutomationManual
- Dev ApproachVibe Coding

March 2026

- Published Articles79 (+38%)
- Commits1,013 (+35%)
- Projects21 (+75%)
- Bilingual7 pairs
- AutomationSkills 6 + Actions 4
- Dev ApproachAgentic Automation

Over 3 months, 22 new articles were added and 9 new project directories were created. Notably, new research areas such as NeuroSymbolicAI, World Model, BizReport, SyntheticData, AgenticAI, and PebbloSim appeared on the blog.

### Article Distribution by Category

But more important than these numbers is the change in how the blog is built. In December 2025, it was "vibe coding" — writing markdown and chatting with Claude to generate HTML. By March 2026, an agentic automation system is in place where a single `/new-post` command kicks off article creation, and `/publish` automatically regenerates the RSS feed and sitemap.

## 3. Agentic Blog Architecture

An "agentic blog" is a blog where an AI agent (Claude Code) can autonomously perform the entire process — from article creation, SEO optimization, and publishing to promotion. Humans provide the topic and manuscript; the agent handles the rest.

### 3.1 Claude Skills (6)

Claude Skills are reusable AI agent task units defined in the `.claude/skills/` directory. Each skill has its workflow specified in a SKILL.md file, enabling Claude Code to produce outputs of consistent quality.

/new-post

Article Creation

Generates HTML articles from MD/PDF sources. Includes PebblousPage.init, bilingual support, and Executive Summary

/seo-check

SEO Verification

4-Layer SEO check: auto-verifies meta, OG, JSON-LD, and heading hierarchy

/publish

Publish Automation

One-click: updates articles.json, regenerates RSS and sitemap, and runs Tailwind build

/commit

Git Commit

Analyzes changes and auto-generates conventional commit messages

/sns-write

SNS Promotion

Auto-generates platform-specific promotional posts for LinkedIn, Twitter/X, and Facebook

/bilingual

Bilingual Conversion

Automatically converts a single-language article into KO/EN bilingual structure with hreflang SEO

### 3.2 GitHub Actions (4)

A CI/CD pipeline that automatically runs on git push. Without human intervention, the sitemap, RSS, and search engine indexing are automatically updated.

validate-articles

articles.json schema validation. Auto-detects missing required fields, duplicate IDs, and invalid paths

scan-html-files

Scans all HTML files and auto-updates files-index.json

update-sitemap

Auto-generates sitemap.xml + rss.xml, sends Google ping. Includes daily cron

indexnow-submit

Auto-submits URLs to Bing, Yandex, Naver, etc. using the IndexNow protocol

### 3.3 PebblousPage.init() Module System

Every article page is initialized with a single config object. 10+ modules are automatically loaded, handling everything from header, footer, and theme to schema, related posts, and comments.

| Module | Purpose |
| --- | --- |
| PebblousTheme | 3-theme system (dark/light/beige) |
| PebblousPage | Page initialization, dynamic Hero section rendering |
| PebblousChart | Chart.js wrapper (bar, doughnut, pie, line) |
| PebblousTabs | Tab component |
| PebblousComponents | Collapsible, Accordion |
| PebblousUI | Progress bar, Back-to-top |
| PebblousComments | giscus comment integration |
| PebblousRelatedPosts | Related post recommendations based on articles.json |
| PebblousBreadcrumbs | Breadcrumb navigation |
| PebblousSchema | Auto-injection of JSON-LD schema (FAQ, Article, Breadcrumb) |

**Core Principle:** The `<h1 id="page-h1-title">` in the Hero section must be left **empty.**
                            PebblousPage.applyConfig() dynamically fills it from config.title. FAQs are managed exclusively via config.faqs — never through HTML microdata or <head> JSON-LD.

## 4. Content Pipeline

This is the complete process from a single markdown manuscript to a published blog article. At each step, Claude Skills or GitHub Actions operate automatically.

📝

Source

MD/PDF Manuscript

→

🤖

/new-post

HTML Generation

→

🔍

/seo-check

SEO Verification

→

📋

articles.json

Meta Registration

→

🚀

/publish

RSS·Sitemap

→

⚡

GitHub Actions

Auto Deploy

**Chain automation triggered by a single JSON:**`articles.json` is the Single Source of Truth for this blog.
                            Article titles, paths, categories, dates, and keywords all live here, and RSS generation, sitemap updates, index page rendering, and related post recommendations all derive from this single JSON file.
                            When a new article is registered in articles.json and pushed, GitHub Actions automatically regenerate sitemap.xml and rss.xml, ping Google, and notify search engines via IndexNow.

Optionally, you can add bilingual conversion with `/bilingual` and SNS promotional writing with `/sns-write`. Throughout the entire process, humans decide only the "what" — the agent handles the "how."

## 5. Blog Inventory

79 published articles are distributed across 4 categories and 21 project directories.

35

Tech

44.3%

Physical AI, ontology, data quality, neurosymbolic AI, etc.

23

Data Art Lab

29.1%

Code painting, AI art, visualization experiments, and digital artworks

14

Business

17.7%

Investment analysis, market outlook, IP portfolio, business strategy

7

Story

8.9%

Dataset guides, ISO standards practice, blog retrospectives

### Project Directory Map (21)

PhysicalAI

Physical AI

DataClinic

Data Clinic

AADS

AI Data Scientist

NeuroSymbolicAI

Neurosymbolic AI

CURK

Ontology

ISO5259

Data Quality Standards

ISO25024

Quality Measurement

SyntheticData

Synthetic Data

DAL

Data Art Lab

DataGreenhouse

Data Greenhouse

IR

Investment/IR

BizReport

Business Analysis

World Model

World Model

AgenticAI

Agentic AI

PebbloSim

Simulation

App

App Services

### Bilingual Articles (7 Pairs)

Seven pairs of Korean/English articles converted using the `/bilingual` skill. hreflang tags ensure language-specific exposure is separated in Google search results.

KO/ENData Quality Management Guidebook

KO/ENNeurosymbolic AI Architecture

KO/ENHenry Kautz AI History

KO/ENPalantir vs Traditional Ontology

KO/ENWorld Model Comparative Analysis

KO/ENPebbloSim Design Strategy

KO/ENMoLtBot Genie3 Metaverse Agent

### Full Article List

Dynamically loaded from articles.json. Organized by category.

#### Tech

#### Data Art Lab

#### Business

#### Story

## 6. Tech Stack Evolution

Here is how the tech stack has expanded compared to the 2025 year-end report. Newly added elements are marked with NEW.

### Frontend

- HTML5 + Tailwind CSS (build)
- Vanilla JavaScript (no framework)
- Chart.js (data visualization)
- 3-theme system (dark/light/beige)
- NEW PebblousPage module system (10+)
- NEW giscus comment integration

### Backend · CI/CD

- GitHub Pages (static hosting)
- GitHub Actions (CI/CD × 4)
- Node.js (Tailwind, Sitemap, RSS)
- NEW IndexNow protocol
- NEW OG image auto-generator

### Development Tools

- Visual Studio Code
- Claude Code (agent)
- NEW Claude Skills (×6)
- NEW CLAUDE.md (project guidelines)
- NEW 17 internal docs (docs/)

**Key Change:** In 2025, AI was an "assistant that writes code." In 2026, a "project rule system that AI understands" has been established.
                            CLAUDE.md, 17 internal documents, and 6 Skills combine so that the AI agent understands project conventions and produces outputs of consistent quality.
                            This is the difference between vibe coding and agentic automation.

## 7. 2026 Outlook

In the 2025 year-end report, we anticipated "publishing more than 200 articles." Now that the agentic automation system is in place, that goal is more realistic than ever.

### Content Expansion

- **200 articles goal** — agentic pipeline enables 15-20 publications per month
- **Bilingual content expansion** — expanding English versions of key articles for global reach
- **Data Art Lab expansion** — beyond code painting to interactive data art

### Technical Advancement

- **Deeper agentic automation** — AI performs topic suggestions and trend analysis
- **Automated SEO monitoring** — auto-improvement based on Google Search Console data
- **Community building** — expanding reader engagement through giscus comments and newsletter integration

**"A blog that leverages AI while retaining a distinctly human touch"** — this pledge from the 2025 year-end report remains in full effect.
                            Agentic automation is merely a tool; the direction and values of the blog are determined by people.
                            The Pebblous blog will continue to deliver deep insights on AI-Ready Data, Physical AI, and Data Quality — leveraging technology to the fullest for faster, more prolific, and more consistently high-quality output.

## 8. Future Works

The infrastructure and automation systems have matured. The next leap depends on **strategic content balance**, **enhanced art visibility**, and **data-driven decision-making**. The intersection of art, tech, and business — this is the moat that no other corporate blog can replicate, unique to Pebblous.

### 8-1. Rebalancing Content

Currently, the Tech category accounts for 49% of all content, while Story (8%) and Business (19%) are relatively weak. To realize the art-tech-business convergence the brand promises, the business narrative must be strengthened. Strategic content such as customer insights, market positioning, and "why data matters to the CEO" is the answer.

49%

Tech

50 articles — strong tech leadership

25%

Data Art

25 articles — differentiating asset but low discoverability

27%

Business + Story

27 articles — needs expansion to 35-40% target

### 8-2. Rediscovering Art

There are 25 data art pieces, but the Featured rate is only 12% (compared to 30% for Tech). Art content is a unique asset that no other corporate blog possesses. A gallery-style art showcase landing page should be created so this differentiating factor can speak for itself.

**Action Items:** Expand Featured art pieces to 6-8, create a new art showcase page with technique/theme filtering, extend Data Art Lab beyond code painting to interactive data art

### 8-3. Data-Driven Content Decisions

Content production automation is at a top level, but there is no visibility into what resonates. A `/content-analytics` skill that maps Google Analytics data to `articles.json` categories could close this loop. Which topics drive traffic, which language versions perform better — right now, there is no visibility.

#### Required New Skills

- **/content-analytics** — integrated analysis of GA data + articles.json
- **/content-calendar** — quarterly theme planning, category gap analysis

#### Measurement Metrics

- Traffic and dwell time by category
- Performance comparison by language version (KO/EN)
- Chart interaction and scroll depth tracking

### 8-4. Cross-Pillar Content — True Differentiation

Not art separately, tech separately, business separately — the magic of Pebblous lies at the **intersection** of these pillars. Content like "Visualizing ISO compliance data as generative art" or "The business case for data aesthetics" is something only Pebblous can create. This intersection is a unique territory that no competitor can replicate.

### 8-5. Bilingual Completion

Currently, 57% of posts are available in KO+EN bilingual format. Resolving the remaining 43% (19 articles) of single-language debt would significantly expand global reach. The `/bilingual` skill is already in place, so prioritizing high-performing articles for conversion maximizes the return on effort.

#### Priority Roadmap

P1: Immediate (within 2 weeks)

- - Expand Featured art pieces to 6-8
- - Establish content calendar (quarterly category targets)
- - Normalize changelog system usage

P2: Short-term (within 4 weeks)

- - Develop /content-analytics skill
- - Convert top 10 single-language articles to bilingual
- - Batch publish 4 business content pieces

P3: Mid-term (within 8 weeks)

- - Create art showcase landing page
- - International SEO audit (hreflang, per-language traffic)
- - Plan cross-pillar content series

P4: Long-term (Q2 2026+)

- - Explainer video content (tech topics)
- - Medium, Dev.to content syndication
- - Community forum/discussion channel expansion
