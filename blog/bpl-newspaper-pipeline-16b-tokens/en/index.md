---
title: Boston Public Library Refined 1.47 Million Newspaper Scans on Its Own Servers
subtitle: A fifteen-step pipeline built with Harvard Law School
date: 2026-08-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Boston Public Library Refined 1.47 Million Newspaper Scans on Its Own Servers

_A fifteen-step pipeline built with Harvard Law School_

## Executive Summary

> [!callout]
> Boston Public Library and the Institutional Data Initiative at Harvard Law School Library published a technical report in August 2026. They ran 1,473,635 public domain newspaper scans, published between 1795 and 1930, through a fifteen-step pipeline and turned them into a structured dataset. The pipeline itself and the small models used inside it were released alongside the data.

> The part worth reading is not the scale but the cost. The report estimates that generating the same volume of tokens through frontier model APIs would have cost between $250,000 and $800,000. The work actually ran on a GPU node the team owns, and priced at rental rates that comes to roughly $25,000. One phrase in the abstract needs care, though. "Computationally frugal enough to run on workstation-level hardware" is a design goal, not the specification of the machine that did the work. The report says in the same passage that throughput is the price of that frugality.

> Of the fifteen steps, only the two OCR passes take any real time, and the rest mostly finish in a few minutes or less. Because the process was broken into separate steps, how long each one took and where its judgments wobble both survive as numbers. For a holding institution, running the refinement of its own material means holding those numbers too.

### Key Figures

The first two numbers are what this pipeline produced and what it took to produce. The next two show the unit the result is divided into and where it is still weak.

Source: [arXiv:2608.18972](https://arxiv.org/abs/2608.18972), Institutional Newspapers Pipeline technical report (2026-08)

<!-- stat-card -->
**16.3B** — Tokens pulled out by VLM OCR — 16,302,004,429 by o200k_base. Tesseract on the same scans yields 14.66 billion

<!-- stat-card -->
**$25,000** — Compute cost as the report figures it — About 1,650 hours priced as rented hardware. Frontier APIs would have run $250,000 to $800,000

<!-- stat-card -->
**83.1M** — Crops cut from the pages — Articles, advertisements and photographs, 56.4 per scan on average. The unit every later step works on

<!-- stat-card -->
**80.8%** — Reading order position accuracy — Micro figure. The macro figure, averaged per scan, drops to 72.1%

## 1.47 Million Scans, 16.3 Billion Tokens

Historical newspapers are awkward material for a computer. The pages are dense, the columns irregular, and decorative headings sit next to tables, so general-purpose tools do not cope well. The report states that difficulty first, then reports what its own pipeline produced when it was run against 1,473,635 scans from Boston Public Library's holdings, published between 1795 and 1930. Anything that might still be under copyright was left out from the start. Only issues published before 1931 went in, and that call was made using the issue-level metadata Boston Public Library holds.

![Front page of The Boston Post, August 23, 1922. Irregular columns, decorative headline typefaces, a photo, and advertisements all share one page, illustrating why general-purpose OCR struggles with historical newspapers](./image/img-01-boston-post-1922.jpg)
*▲ The Boston Post, August 23, 1922 — irregular columns, decorative headlines, a photo, and ads sharing one page | Source: [Wikimedia Commons (Public Domain)](https://commons.wikimedia.org/wiki/File:19220823_Rebels_Kill_Michael_Collins_-_The_Boston_Post.jpg)*

What came out is not a pile of scan images. The pages were cut into 83,147,041 crops, and each crop carries OCR text, coordinates, a type, a language, named entities, a subject and embeddings. A crop is the rectangle drawn around one uninterrupted run of text or one visual element, such as a single article or a single advertisement box. A headline is not severed from the article it introduces, and a picture-led advertisement usually sits whole inside a single crop.

The character of this collection shows in the language distribution. English accounts for 97.61% of the crops that carry a language code, but the tail behind it is not short. Yiddish covers 983,375 crops, or 1.18%, German 0.56%, Swedish 0.46% and French 0.09%. The report reads this as the trace of the immigrant press held at Boston Public Library. Seventy-three distinct language codes appear in total, and the ten most common account for 99.97% of them.

Once the material is cut up, things become countable. By final category the most common crop is not the article but the advertisement, while the majority of the tokens sit with articles. The gap between those two curves widens over time. Until the 1860s, the share of page area advertisements occupied was roughly the same as the share of text tokens they carried. From the 1870s onward the area runs ahead, and by the 1920s the gap reaches about 15 percentage points. The report reads this as advertising turning progressively more visual over the period. It is a question you cannot put to a pile of scans.

The builder is the Institutional Data Initiative at Harvard Law School Library, and Boston Public Library supplied the material and the domain knowledge. The two institutions also released Institutional Books, a corpus of library holdings, in 2025, and that corpus was later used by another team to train a language model. This release sits in a [Hugging Face collection](https://huggingface.co/collections/institutional/institutional-newspapers) and a [GitHub repository](https://github.com/institutional/institutional-newspapers-pipeline), and an Agent Skill file ships with it so that agents can put the data to use directly.

## How a Scan Becomes Data

The pipeline has fifteen steps. It fetches and caches the scan, cuts it into crops, runs two different OCR engines over each one, decides type and language, works out the reading order, attaches named entities and subjects, and computes embeddings last. The diagram below groups those fifteen steps into six blocks by purpose.
