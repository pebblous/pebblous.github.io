---
title: 89% of New Biomedical Papers Carry LLM Vocabulary
subtitle: Tübingen researchers remeasured 1.19 million PubMed full texts, and the traces split by section: 68% in Discussion, 32% in Methods
date: 2026-08-14
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 89% of New Biomedical Papers Carry LLM Vocabulary

_Tübingen researchers remeasured 1.19 million PubMed full texts, and the traces split by section: 68% in Discussion, 32% in Methods_

## Executive Summary

> [!callout]
> Nine in ten open-access biomedical papers published in December 2025 use the words LLMs favor more often than human authors used to. That figure comes from researchers at the University of Tübingen, who read through the full text of 1,194,287 papers in PubMed Central. The average across all of 2025 was 77%, and in 2023 it was 19%. For anyone who trains or retrieves on the literature, "written by a human" is no longer the default assumption.

> But the traces are not spread evenly inside a paper. Pick one paragraph at random and Discussion measures 68% while Methods measures 32%, a gap of more than two to one. Methods rises to 54% when the whole section is measured at once, so it cannot be called a clean zone either.

> Because the method watches only shifts in word frequency, it cannot separate a sentence that was polished from a passage that was generated from scratch. The 89% is not the share of papers written by AI. It is the share of papers where an LLM left a statistical trace.

### Key Numbers

The first two cards say how many papers carry a trace. The last two say where the traces cluster.

Source: [Holzwarth, González-Márquez, Kobak, arXiv:2608.10715 (2026-08-11)](https://arxiv.org/abs/2608.10715)

<!-- stat-card -->
**89%** — Papers published in December 2025 — 77% across all of 2025, 19% in 2023

<!-- stat-card -->
**1.19M** — Open-access papers analyzed — Full texts from 2017 to 2025, 379 marker words

<!-- stat-card -->
**68% vs 32%** — Discussion vs Methods paragraphs — Gap holds after matching text length

<!-- stat-card -->
**37% vs 72%** — English-speaking vs other countries — Korea highest at 85%, the UK lowest at 28%

## What the 89% Counts

The only raw material behind this estimate is how often certain words appear. The researchers took 379 words whose usage jumped after ChatGPT was released and used them as markers. A few of them stand out, such as delve, but many are style-carrying function words like these or potential. The point is not to catch a handful of buzzwords. It is to watch the total volume of the words that rise together whenever a sentence gets smoothed out.

That list was not built for this study. The same lab had already compiled it in earlier work by scanning PubMed abstracts for words whose usage rose sharply in 2024, and it was carried over to the full-text analysis as it stood. The only added step was checking that nearly all of those words rose again in the 2025 abstracts in this dataset. So the 89% rests on a word list chosen by an earlier paper. If a sentence was polished in a way that list does not cover, this yardstick will not register it.

What the approach needs is a baseline from the years when only humans wrote. The researchers extrapolated the pre-2023 trend to estimate how often these words would have appeared in 2025 without LLMs, then converted the amount by which the observed counts exceed that baseline into a share of papers. The material is 1,194,287 open-access papers in PubMed Central, published between 2017 and 2025.

Those 1.19 million papers are not everything in PMC. Starting from the open-access snapshot of 23 January 2026, which holds 7,125,722 papers, the researchers removed non-English papers and papers without a publication date, then kept only those with all four of Introduction, Methods, Results and Discussion, where each section and the abstract hold at least 250 characters of English. That leaves 1.60 million, of which 1.19 million were published in 2017 or later. The 89% comes out of that subset, so short reports without section headings and papers in journals that are not open access were never in the calculation.

The yearly figures rose three years running, and the same papers measured on their abstracts alone come out far lower.

| Period | Full text | Abstract only |
| --- | --- | --- |
| 2023 | 19% | 9% |
| 2024 | 52% | 31% |
| 2025 (annual average) | 77% | 53% |
| December 2025 | 89% | 68% |

Estimates based on full texts and on abstracts alone. Source: arXiv:2608.10715 Table 1

The gap between the two columns comes from length. The longer the text, the more chances a marker word has to show up at least once. So the 89% is closer to the share of papers judged to have an LLM's touch somewhere inside them. A paper with a few edited sentences and a paper with a fully generated passage do not separate under this method.

## Last Year the Number Was 12–16%

Readers who have seen numbers on this topic before will remember much lower ones. The same lab published a study in Science Advances in July 2025 that scanned 15.1 million PubMed abstracts and reported that at least 13.5% of 2024 abstracts had passed through an LLM. The press translated that into one paper in seven.

The two numbers are not in conflict. The earlier figure was a lower bound. If you count only the excess in word frequency, papers that used an LLM but happened not to use any of those words never enter the count. This study proposes a formula that fills the gap by dividing the excess by the probability that a human would not have used the word, which recovers the full share.

A single word shows how large the correction is. In December 2025 abstracts, these appeared in 50% of them, and the estimate for humans writing alone was 33%. Counting the frequency difference alone gives 17%. Correcting it gives 25%.
