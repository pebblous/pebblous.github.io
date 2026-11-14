---
title: ScholarCatalyst Shows AI Misses the Papers That Inspire Research
subtitle: 184 authors marked the prior work that actually helped their own projects, and the best search system found fewer than half of those papers
date: 2026-10-03
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# ScholarCatalyst Shows AI Misses the Papers That Inspire Research

_184 authors marked the prior work that actually helped their own projects, and the best search system found fewer than half of those papers_

## Executive Summary

> [!callout]
> This article looks at a test that isolates one ability: can AI retrieve the papers that genuinely inspired a piece of research. The benchmark is ScholarCatalyst, posted to arXiv on October 1 by researchers at Stanford, Seoul National University, Carnegie Mellon, the University of Washington, the Allen Institute for AI, and MIT. What makes it unusual is who wrote the answer key. The 184 people who authored the work went back over 207 of their own projects, marked which prior studies actually helped, and wrote down why each one did.

> The results cut against expectation. Searching 190,896 candidates for those papers, an agent that calls the retrieval tool directly landed at Recall@20 of 0.42, under the 0.48 of a single pass through the same retriever. Comprehension was never the limit. Supplying the agent with the source paper's full reference list lifts that same figure from 0.39 to 0.74.

> Sections 1 through 4 follow what the paper measured and the cautions its authors attached. Section 5 moves to evaluation data design, and that move is this article's reading rather than a claim in the paper.

### Key figures

Source: Kim et al., [ScholarCatalyst: A Benchmark for Retrieving Papers That Inspire New Research](https://arxiv.org/abs/2610.02202), arXiv:2610.02202v1 (2026-10-01), body and tables

<!-- stat-card -->
**0.42** — Recall@20 for the agent holding the search tool — One pass through that same retriever scores 0.48, higher than this

<!-- stat-card -->
**0.39→0.74** — Shift when the reference list is handed over — Recall@20 on core research queries. Give it the candidates and the score nearly doubles

<!-- stat-card -->
**43.6%** — Gold papers the source work never cited — Subfield queries. Follow citations alone and almost half of the inspiration stays invisible

<!-- stat-card -->
**43–60%** — Overlap between co-author labels and the lead author's — A figure the authors measured and published themselves. Answer keys carry human disagreement too

## Rewinding the question to before the work existed

The usual way to score a literature search tool is to feed it the title or abstract of a finished paper and check whether similar papers come back. That procedure takes the shape of completed research as its reference point. ScholarCatalyst pulls the reference point earlier. It reconstructs the question an author was holding while the project was still unfinished, then asks which prior papers helped at that moment, or would have helped had the author known about them.

Queries come in two layers. A core research query carries the central question of one project, and there are 207 of them. Subfield queries ask about the same project from a narrower angle, and there are 687. Together that makes 894. Core queries average 131.8 tokens and 3.19 gold papers each; subfield queries are shorter at 63.5 tokens and carry 6.09 gold papers. The haystack is 190,896 papers, built from the references the source papers cite plus roughly 181,000 computer science preprints posted to arXiv between 2020 and 2024.
