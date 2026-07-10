---
title: An AI Wrote the Answer Key That Grades Other AIs
subtitle: Inside the IPO Finance Agent benchmark — automated rubric generation tested on SpaceX
date: 2026-06-24
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# An AI Wrote the Answer Key That Grades Other AIs

_Inside the IPO Finance Agent benchmark — automated rubric generation tested on SpaceX_

## Executive Summary

> [!callout]
> In June 2026, SpaceX went public at $135 a share, crossed a $2 trillion market cap on its first day, and recorded the largest IPO in history. Around the same time, a researcher ran a different experiment on that same registration filing (the S-1). He handed LLM financial analysts 1,000 due-diligence questions and graded which of them got closer to the truth. This article is about who wrote the answer key for that grading.

> No human wrote the answer key. Several LLMs answered the same questions, candidate facts were pulled from that ensemble of answers, and the grading rubric was generated automatically after auditing for omissions, hallucinations, and duplicates. A person only checked the quality at the final gate. Of the 1,000 questions built that way, 930 were never released — because the moment they go public, models learn the answers and the grading data is contaminated.

> One question follows the instant agents start doing real work: who, and with what, grades the result. The answer this study points to is clear. To trust AI, you first have to trust the data that grades it — and that grading data is itself an asset that has to be managed.

### Key Figures

Four numbers sum up the study: who was most accurate, what was locked away, how much one round of grading cost, and how many people wrote the answer key. That last number is where this article begins.

Source: Benhenda, [arXiv:2606.23032](https://arxiv.org/abs/2606.23032) (2026)

<!-- stat-card -->
**79.4%** — Qwen 3.7 Max accuracy — Prior ceiling 57.9% → +21.5pp

<!-- stat-card -->
**930** — questions kept locked — Only 70 released

<!-- stat-card -->
**$0.05** — MiMo-2.5 Pro cost per query — ~1/50 of Gemini's $2.51

<!-- stat-card -->
**0** — people who drafted the answer key — Written by an LLM ensemble; humans reviewed

## SpaceX's S-1: A 1,000-Question Exam

SpaceX filed its S-1 confidentially on April 1, 2026, made it public on May 20, and listed on June 12. The offering priced at $135 per share, with 555.6 million shares issued and a target raise of $75 billion. The first-day market cap opened at $1.77 trillion and crossed $2 trillion shortly after the open. By size alone, it is the largest IPO ever.

The filing itself was tricky. The S-1 folded in the full acquisition of xAI, completed in February 2026, so on a consolidated basis it bundled 2025 revenue of $18.67 billion with a net loss of $4.94 billion. Starlink was profitable, with $11.4 billion in revenue and $4.4 billion in operating income, while xAI spent $14 billion the same year and earned $3.2 billion. A profitable business and a loss-making one, acquisition accounting and governance — all overlapping inside one document.

An S-1 for an IPO is a different animal from the 10-K and 10-Q filings a public company files each quarter. On top of historical financial statements, it carries pro forma accounting, capital-raising structure, governance, and acquisition-risk disclosures, and it runs far longer. The existing financial-analysis benchmark, Finance Agent v2, covered only those periodic disclosures. Its retrieval was simple chunk search with no added context, so on a long document like an IPO filing it was easy to miss what mattered.

So this study built a separate exam tailored to IPO due diligence. Working from the SpaceX S-1, it generated 1,000 questions on financial-statement analysis, pro forma accounting, governance, capital structure, and risk disclosure. Of those, only 70 were released and 930 were kept private. The reason for locking them comes later.

> [!callout]
> The thing to watch here is not the exam questions but the grading criteria. Each of the 1,000 questions needs a correct answer before it can be graded. Who built that answer key, and how, is the study's real contribution.

## An AI Built the Answer Key

Usually the grading criteria for a benchmark are written by hand, by experts. In a field like financial analysis, an accountant or analyst defines, question by question, the facts that an answer must contain. Finance Agent v2 had 537 questions written directly by experts. It is an expensive, slow way to work.

This study automated that work. It had AI generate the grading rubric itself — the criteria that define what each correct answer must include. Instead of writing the answers, people only review the machine-made criteria at the end.

The pipeline runs in five stages. First, several LLMs answer the same question on their own. Candidate facts are extracted from that ensemble of answers, and overlapping criteria are merged into one. Then comes a three-way audit.
