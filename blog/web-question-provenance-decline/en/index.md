---
title: Did Anyone Actually Ask the Web
subtitle: In a study that counted 13.4 billion questions across twelve years of web crawls, the share posted where people write for people fell from 9.3% to 1.9%.
date: 2026-09-23
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Did Anyone Actually Ask the Web

_In a study that counted 13.4 billion questions across twelve years of web crawls, the share posted where people write for people fell from 9.3% to 1.9%._

## Executive Summary

> [!callout]
> A paper posted to arXiv on September 21 counted the questions written on the web, all of them. It pulled 13.4 billion sentences ending in a question mark out of 110 collections of web pages spanning 2013 to 2025, then sorted each one by the kind of page it sat on. Questions scraped off the web have long served as a stand-in for what people want to know. Question-answering training sets rest on that assumption, so do the benchmarks that score search, and so does content planning. This article looks at what happened when someone measured the assumption.

> The quietest number is 1.9%. That is the slice of 2025 question occurrences that came from forums, message boards and other places where people post their own writing. In 2013 it was 9.3%. The drop cannot be read straight, because the composition of the crawl itself changed a great deal over twelve years. The researchers applied two corrections: they recounted using only the hosts that stayed alive throughout, and they regressed out the effect of crawl size. What survives both is a decline of close to half. Over the same period questions themselves got shorter, and the share carrying a sentence of background around them went down with them.

> Sections 1 through 4 follow what the paper says. The conflict-of-interest discussion at the end of section 4 and the data quality reading in section 5 are this article's, not the paper's. The full text is public on arXiv, so anyone can check the figures.

### Key figures

Source: Zhou, McCloskey, Srinivasan, ["You Can Tell Who's Asking"](https://arxiv.org/abs/2609.24106), arXiv:2609.24106 (2026-09-21).

<!-- stat-card -->
**13.4 billion** — Question occurrences counted — Drawn from 110 snapshots, 2013 to 2025. Mean length of one occurrence is 12.8 tokens

<!-- stat-card -->
**93.2%** — Copied strings among the 1,000 most frequent questions — The 2024 figure. In 2015 it was 71.7%. The same class is 3–4% of distinct questions corpus-wide

<!-- stat-card -->
**9.3% → 1.9%** — Share of occurrences posted by people themselves — A 79% fall in twelve years. Adjusted for crawl composition it is 42–56%, and the researchers' best estimate is about 45%

<!-- stat-card -->
**0.725 → 0.554** — Accuracy (AUC) of telling provenance from form alone — The first is against copied strings, the second against commerce FAQ writing. A coin flip would score 0.5

## How to Put a Source Tag on 13.4 Billion Questions

The material is FineWeb, a public corpus built from the web pages Common Crawl collects by keeping the English body text and running it through quality filters. It is in wide use as pretraining data for today's large models. The researchers took 110 snapshots, from the 2013 crawls through the 2025 ones, and kept only the sentences that end in a question mark, run 5 to 100 words, and either open with a question word or carry an interrogative expression. After Unicode normalization and case folding, 13.4 billion were left.

Half of this study sits in the unit of counting. The researchers counted not how many different questions exist but how many times a question appeared on a page. The same sentence sitting on 100 pages counts as 100. Anyone scraping questions off the web has generally read that number as the size of a demand. Appear often, wanted often. The paper nails this down at the outset. Occurrence counts, it writes, "measure how often a string was published and not how often it was asked."

So each question got a tag for where it was written. Five classes, and the first rule that matches wins.

- **Posted by a person** — a host classified as a forum or message board, or a page whose address carries a path such as /forum, /thread, /topic or /community.
- **Copied** — not caught by the rule above, and the same sentence appears word for word on two or more different domains.
- **Commerce FAQ** — a host classified as a shop or a customer support page.
- **Editorial** — a host classified as news, a blog or a magazine.
- **Unclassified** — whatever matched none of the four.
