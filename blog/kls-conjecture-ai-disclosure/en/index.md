---
title: The KLS Conjecture Is Solved, but Each Paper Logs AI Use Differently
subtitle: The 140-page paper behind the announcement names the four AI tools it used, and the 32-page independent proof that followed three days later says ChatGPT found most of its proofs and ideas
date: 2026-10-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The KLS Conjecture Is Solved, but Each Paper Logs AI Use Differently

_The 140-page paper behind the announcement names the four AI tools it used, and the 32-page independent proof that followed three days later says ChatGPT found most of its proofs and ideas_

## Executive Summary

> [!callout]
> This article reads the October 2026 solution of the KLS conjecture, a problem posed in 1995, through three records that each describe the part AI played in the proof differently. Microsoft Research announced the result on its blog on October 21. The three are the paper behind that announcement, the independent proof that appeared three days after that paper's first version, and the company blog that introduced them both. Each filled in a different box.

> Zhao Song and Xinzhi Zhang's 140-page paper closes with a separate AI disclosure section and names the four tools it used. The 32-page proof posted three days later by Pierre Bizeul, Bo'az Klartag and Joseph Lehec says in its acknowledgements that most proofs and mathematical ideas in the paper were found by ChatGPT, and adds that the authors' role was mostly to understand those proofs and improve their exposition. The Microsoft blog, by contrast, sets out the search procedure and the human role in detail without naming a single model. Of the three records, the one that credits AI most generously is not the company announcement but the paper by mathematicians outside the company.

> Sections 1 through 3 follow what the blog and the papers themselves say. Section 4, where these records are read through the lens of data verification, is this article's interpretation and is not in the sources.

### Key Figures

The first two numbers give the mathematical gap that closed and the size of the search that found the way through. The last two come from the people who rewrote the result and checked it by machine.

Sources: [arXiv 2610.01447](https://arxiv.org/abs/2610.01447) (Song and Zhang), [arXiv 2610.05474](https://arxiv.org/abs/2610.05474) (Bizeul, Klartag and Lehec), [KLS500](https://github.com/HongruZhao/KLS500) Lean 4 repository

<!-- stat-card -->
**√n → constant** — The bound narrowed over 31 years — The 1995 bound grew along with the dimension n. The new result ties it to a value that does not depend on the dimension at all

<!-- stat-card -->
**More than 100** — Approaches tried with AI tools — Candidates were generated collaboratively and the authors decided which to prioritize, the paper says

<!-- stat-card -->
**140 → 32 pages** — Two proofs three days apart — The later one took the criterion the earlier one established and rewrote the argument along another route

<!-- stat-card -->
**500** — The machine-checked constant — The value verified in Lean 4. The optimal constant now sits between 4 and 500

## What the KLS Conjecture Asks

Take a lump of something and cut it in two. The smaller the cut surface, the better the cut. Two knives are available for the job. One is flat and comes down in a single straight stroke. The other bends freely to follow the shape and finds the most efficient surface. That the second cuts better is obvious. The question is how much better.

The conjecture Ravi Kannan, László Lovász and Miklós Simonovits put forward in 1995 says the flat knife's cut surface is larger than the bending knife's by no more than a single universal factor. The condition attached at the end is the heart of it. No matter what the dimension is. In two dimensions or in a million, the flat knife falls behind the bending knife by the same fixed factor. The objects in question are isotropic log-concave distributions, meaning probability distributions that are thick in the middle, thinner toward the edges, and scaled so that the spread measured along any direction comes out the same.

This ratio matters because it governs the speed of a random walk. To draw a point at random from a region you walk around inside it and gather samples, and if the region has a narrow neck somewhere, the walk fails to pass through and gets trapped on one side. The KLS constant bounds how narrow that neck can be. Song and Zhang write that the constant governs the complexity of sampling, volume computation and log-concave integration, and that convex optimization algorithms rest on it as well. The Mathematical Sciences Research Institute called it the central open problem in high-dimensional convex geometry in its 2017-18 annual report.
