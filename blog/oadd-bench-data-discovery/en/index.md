---
title: AI Agents Find Fewer Than Half the Columns a Research Question Needs
subtitle: OADD-Bench turns 111 published studies into 160 questions that no retriever answers in full
date: 2026-08-09
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Agents Find Fewer Than Half the Columns a Research Question Needs

_OADD-Bench turns 111 published studies into 160 questions that no retriever answers in full_

## Executive Summary

> [!callout]
> The Health and Retirement Study, the leading US panel survey of older adults, has no column named social isolation. Hundreds of papers on isolation in later life have still been published from it. Researchers measured the concept by bundling household size, distance from children, religious attendance, and volunteering. This piece looks at a paper that treats the bundling itself as a task and turns it into a benchmark.

> Houming Chen and H. V. Jagadish posted the work to arXiv on August 6, naming the task Operationalization-Aware Data Discovery, or OADD. The team reverse-engineered 111 empirical papers built on HRS into 160 questions and 4,682 question-column labels, then ran established retrievers, schema linking methods, and their own LLM agent against it. Allowed to return up to five times as many columns as the answer contains, the best agent reached a recall of 0.465.

> Read as a number alone, that looks like something a larger model will fix. The paper argues otherwise. The agent read the codebook and the column descriptions directly and still missed half. When nothing records what a dataset can be used to measure, perfect descriptions and tags leave the data invisible to an agent.

### Key Figures

Source: [arXiv:2608.04536](https://arxiv.org/abs/2608.04536)

What the benchmark asks for is a bundle of columns rather than a single column, and today's methods stall around halfway through the bundle.

<!-- stat-card -->
**0.465** — Recall of the best agent — The GPT-5.5 OADD agent missed more than half of the ground-truth columns

<!-- stat-card -->
**0.185** — Best direct retrieval score — Embedding and keyword search did not reach a fifth of the answer

<!-- stat-card -->
**31.3%** — Questions answered in full — Every needed column was recovered for only 50 of 160 questions

<!-- stat-card -->
**21** — Median columns per question — The range runs from 2 to 136, so this is not single-column retrieval

## No Column Measures Social Isolation

The Health and Retirement Study (HRS) has followed tens of thousands of middle-aged and older Americans for decades, asking about health, income, and family ties. It is one of the most heavily used datasets in gerontology, and every item comes with a codebook entry. Suppose a researcher opens it to study how social isolation shapes healthy aging. Searching the catalog for social isolation returns nothing, because no column carries that name.

What the published papers actually did looks different. Researchers picked household size, physical distance from adult children, frequency of religious attendance, and volunteering, then combined them into a single measure. Taken separately the four items look unrelated to isolation. Household size is a question about living arrangements and religious attendance is a question about faith. Put together, they become a measure that survives peer review.

A useful column may bear no resemblance to the query. It carries meaning, the paper writes, only as a complementary indicator inside a defensible measure. What retrieval systems score is the similarity between names and descriptions, and that similarity has no bearing on the answer to begin with.
