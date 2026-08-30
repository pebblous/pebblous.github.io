---
title: Author Self-Rankings Beat Review Scores at Predicting Citations
subtitle: 1,342 ICML 2023 authors privately put their own submissions in order, and Nature Computational Science followed the citations for 16 months
date: 2026-08-31
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Author Self-Rankings Beat Review Scores at Predicting Citations

_1,342 ICML 2023 authors privately put their own submissions in order, and Nature Computational Science followed the citations for 16 months_

## Executive Summary

> [!callout]
> Right after the ICML submission deadline in January 2023, every author with more than one paper in the pile got a single request: put your own submissions in order, strongest first. The ordering went to no co-author, no reviewer and no chair, and it played no part in any acceptance decision. 1,342 researchers answered.

> Sixteen months of citations later, the papers an author had ranked first had drawn exactly twice as many citations as the ones that author had ranked last. The gap held among accepted papers and among rejected ones. In the same data, review scores showed no statistically significant relationship with citations on the rejected side. The result, published in Nature Computational Science on 24 August, is observational and does not establish cause.

> This is not only a story about scholarly publishing. Two kinds of label were attached to the same object, and the cheap one, produced by a few minutes of survey, tracked future citations better than the expensive one, produced by several reviewers over several weeks. What made the difference carries directly into a data pipeline.

### Key Numbers

Source: [Nature Computational Science (24 August 2026)](https://www.nature.com/articles/s43588-026-01039-0), main text and supplementary material

<!-- stat-card -->
**2.00×** — Citations to an author's top-ranked paper — 19.99 on average, twice the lowest-ranked mean

<!-- stat-card -->
**17/22** — Papers past 150 citations that someone ranked first — Screening the same 22 by review score catches 14

<!-- stat-card -->
**1.81×** — Association once review scores are controlled for — Moving from an author's lowest to highest rank

<!-- stat-card -->
**979** — Citations to the most-cited paper in the dataset — Its authors ranked it first; its review score was low

## Authors Were Asked to Put Their Own Papers in Order

Peer review at AI conferences is buckling under volume. Submissions to ICML rose from 1,676 in 2017 to 12,107 in 2025, and NeurIPS went from 3,240 to 21,575 over the same stretch. The pool of experienced reviewers has not grown at that rate, so conferences lean on graduate and undergraduate reviewers and on language models. How much the outcome wobbles has already been measured. NeurIPS 2021 sent 10 percent of its submissions through two independent committees, and the two disagreed on 23 percent of the accept-or-reject calls. Rerunning review from scratch, that experiment estimated, would change about half of the accepted list.
