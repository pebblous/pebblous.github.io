---
title: One in Four Papers Can
subtitle: Stanford
date: 2026-09-21
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# One in Four Papers Can

_Stanford_

## Executive Summary

> [!callout]
> Paper2Agent, built by researchers at Stanford's medical school, appeared in Nature on September 16. Put a paper's text, code and data onto a single server and several AIs run that code themselves, keeping only the parts that actually work as tools. A paper finished that way becomes something that answers questions and applies its own method to somebody else's data. This article looks at how far that conversion goes and where it stops.

> The number the eye stays on is on the failure side rather than the success side. When the researchers ran the tool over 100 computational biology papers, 74 came out as agents. The 26 that stalled stopped at the material, not the model. The code was incomplete, or no documentation came with it, or an old runtime could not be rebuilt. The authors do not leave that failure as a defect. They read it as a measure of how reproducible the research was in the first place.

> Sections 1 through 3 follow what the paper and the coverage set out. Section 4 rereads the result as a problem of data handover, and that reading is this article's own rather than the paper's.

### Key Figures

Sources: Nature's news story, Stanford Report, and the authors' preprint. Where each figure comes from is linked in the body.

<!-- stat-card -->
**74 of 100** — Papers that became agents — The result of running the tool over 100 computational biology papers. The other 26 got caught in the code, the documentation or the runtime

<!-- stat-card -->
**22** — Tools drawn from the AlphaGenome paper — Built with no human hand in it. Nature's news story put the cost at 45 minutes and $14, and the preprint's figure differs

<!-- stat-card -->
**1 of 209** — ADHD candidates narrowed to one variant — Two papers' servers were attached to one AI, which swept 39 gene loci in under two hours. Experimental confirmation is still outstanding

<!-- stat-card -->
**More than 100** — Paper agents built so far — AlphaGenome and a single-cell analysis package are among the servers whose addresses are public, open to anyone who wants to attach one

## How a Paper Becomes Something You Can Talk To

James Zou, the professor who led the work, set out in [Stanford Report](https://news.stanford.edu/stories/2026/09/ai-agents-talk) how people have handled knowledge so far. Long ago it was carved into stone, now it is printed as letters on paper, and paper is not much of an improvement on stone. Either way it is a passive object that opens only when a reader comes to it. The proposal that followed was to turn a static record into a form where the knowledge moves on its own.

The method is built around a standard called MCP. Zou compared it to a filing cabinet holding a paper's PDF sorted into a shape an agent can find and use. Introduction, methods, results and conclusion each go into a different drawer, and the drawers sit inside one box called the paper.

Three kinds of thing go into that cabinet. Tools, which wrap the paper's methods as runnable functions. Resources, which hold the manuscript and the code and the supplementary material in a standard form. And prompts, which record what order a multi-step procedure runs in. That last one stands out. The server for the single-cell analysis package carries the whole sequence from quality control through normalization, feature selection, dimensionality reduction, clustering and cell-type assignment, and the authors state that nobody wrote this order out by hand; it was pulled from the paper and the codebase.
