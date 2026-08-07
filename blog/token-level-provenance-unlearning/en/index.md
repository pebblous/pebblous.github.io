---
title: Erasing a Single Author from Training Data with Token-Level Provenance
subtitle: Why dataset-level deletion over-deletes up to 101× when enforcing GDPR
date: 2026-07-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Erasing a Single Author from Training Data with Token-Level Provenance

_Why dataset-level deletion over-deletes up to 101× when enforcing GDPR_

## Executive Summary

> [!callout]
> Suppose someone invokes GDPR's right to be forgotten, or a copyright holder files a takedown, demanding that "what I wrote be removed from the training data." That demand resolves into a single operation: cut out exactly one person's share from a training corpus where hundreds of millions of lines are tangled together. Yet the data version-control tools in use today mostly record provenance at the file or dataset level. So they can answer in only two ways — delete every file that person ever touched, or leave everything untouched.

> The OriginBlame paper, released in May 2026, measured the cost of that choice against real data. Across some 219,000 Chinese Wikipedia articles, honoring a takedown from a contributor who holds a 1% share at the dataset level erases 101 times more than what actually needs to go. The other 99% is innocent data that has nothing to do with the request. This article looks at why that over-deletion is structural, and how tracing author identity all the way down to the token level cuts the ratio to 1.3×.

> The catch is that this is information you cannot attach after the fact. Which token came from whom has to be recorded at the very moment the data is written; once a model has finished training, it cannot be reconstructed retroactively. That is why, on top of quality at the point of ingestion, precision at the point of removal is emerging as the next condition for AI-ready data.

Before we dig in, let four numbers sketch the shape of the problem. How many times over dataset-level deletion drags innocent data out along with the target, how many existing tools ever let you revoke a single author, how much a precise deletion target lifts machine unlearning quality, and how much the pipeline slows down to buy that precision.

<!-- stat-card -->
**101×** — Dataset-level over-deletion — For a 1%-share author's takedown · measured on 219K Wikipedia articles

<!-- stat-card -->
**0** — Tools supporting author revocation — DVC · LakeFS · MLflow — all file/dataset level

<!-- stat-card -->
**+42%** — NPO unlearning gain — Precise forget set vs. same-size random

<!-- stat-card -->
**1.3–19%** — Pipeline throughput cost — The price of recording provenance to the token · by integration mode

## Deletion requests arrive by author

For years, machine unlearning research has concentrated on one question: given a batch of data to erase (the forget set), how do you make a trained model forget its traces? Algorithms like NPO, RMU, and Gradient Ascent are all attempts to answer it. Flagship benchmarks such as TOFU and MUSE also start with the forget set already fixed. They hand you a synthetic author and a predefined corpus and say, "now go unlearn this."

But real deletion requests do not arrive in that shape. They come not as "forget these files" but as "forget that person." GDPR's right to be forgotten, a copyright holder's withdrawal of training data, the AI-training lawsuits now being fought across jurisdictions — all take the same form. They name a specific author and demand that exactly their share be removed. Which means the first job is to find where "that person's share" is scattered across the corpus — and the benchmarks skip precisely that upstream step.

The problem is that virtually no tool supports that upstream step. Line up the version-control and lineage-tracking tools common in data pipelines against the criterion of author revocation, and the gap is stark.

| Tool | Provenance granularity | Author revocation | License tracking |
| --- | --- | --- | --- |
| DVC | File / dataset | ✗ | ✗ |
| LakeFS | Dataset / table | ✗ | ✗ |
| Delta Lake | Table | ✗ | ✗ |
| MLflow · W&B | Experiment metadata (not source) | ✗ | ✗ |
| OriginBlame | Line (copyright unit) + token | ✓ | ✓ |

The ability to single out and revoke one author's contribution simply did not exist in any tool until now. And this gap is more than one paper's claim. A separate survey that systematically reviewed 95 works from the past decade reaches the same conclusion: there is still no general method for removing data that was wrongly absorbed into a trained language model, and the right to be forgotten is growing heavier in the LLM domain specifically. On a data infrastructure that was designed without that right in mind, the whole industry is now scrambling to catch up with the problem.

## Deleting 1% erases the other 99%

Why dataset-level deletion is so expensive becomes obvious the moment you look at Wikipedia. A single Wikipedia article is a collaborative work that hundreds of people have edited together, so it cannot be split by file. One person's contribution is spread thinly across the whole article, which makes file-level deletion and dataset-level deletion effectively the same thing. There is no middle option — throw out every article that person touched, or leave them all in place.

The OriginBlame team took 219,555 Chinese Wikipedia articles (about 480,000 real contributors, CC-BY-SA-4.0) and compared line-level deletion against dataset-level deletion for four authors with differing contribution shares. The result: the smaller the share, the steeper the over-deletion.

| Author requesting removal | Share of data | What actually must go | Dataset-level over-deletion |
| --- | --- | --- | --- |
| InternetArchiveBot | 79.5% | 7,953 lines | 1.3× |
| Walter Grassroot | 17.1% | 1,712 lines | 5.8× |
| KLBot2 | 5.0% | 499 lines | 20.0× |
| HuangQQ | 1.0% | 99 lines | 101.0× |

For a contributor with a 79.5% share, wiping the whole dataset wastes only 1.3× — most of those articles are theirs anyway. At the other end, handling HuangQQ's 1%-share request at the dataset level means that to remove the 99 lines that truly must go, up to 9,999 lines disappear alongside them. The remaining 99% is the work of hundreds of other people, entirely unrelated to the request. Erasing one small voice ends up burning the community's whole record.

In case this pattern was peculiar to wikis, the team cross-checked it against data of an entirely different character. On the Linux kernel source (6,964 contributors by git blame, roughly 44,000 files), file-level deletion again removed far more lines than necessary. The ratio eases as scale grows, but it does not converge to zero. Without line-level precision, over-deletion is a structural loss that persists regardless of domain or scale.
