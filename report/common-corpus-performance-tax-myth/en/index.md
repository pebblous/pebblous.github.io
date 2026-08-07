---
title: Clean Data Paid No Performance Tax
subtitle: What a 2-trillion-token public corpus, Common Corpus, proved on multilingual grammar benchmarks — and what it means now that EU AI Act enforcement has begun.
date: 2026-08-07
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Clean Data Paid No Performance Tax

_What a 2-trillion-token public corpus, Common Corpus, proved on multilingual grammar benchmarks — and what it means now that EU AI Act enforcement has begun._

## Executive Summary

> [!callout]
> "Collect only rights-cleared data and your corpus shrinks; shrink the corpus and your model falls behind." The assumption that clean data carries a "performance tax" has been quietly shared across the AI industry for years. Common Corpus, an open dataset from the French startup Pleias, confronts that assumption head-on. By assembling roughly 2 trillion tokens of public-domain and openly licensed content and training 350M and 1.2B small models on it, Pleias found that on the multilingual grammaticality benchmark MultiBLiMP, the 350M model outscored a range of 1B-class models, some more than three times its size. This report dissects that evidence and, just as carefully, draws the line around how far it actually holds.

> The heaviest piece of evidence comes from an open-versus-open comparison. A 350M model reliably beat OLMo 1B, which was trained on open data too (Dolma), despite being a third of its size. What separated them was not total volume but what was selected and how it was assembled. Still, the rebuttal has a clear fence around it. The advantage concentrates in grammatical competence; on commonsense reasoning, which probes world knowledge, the models actually trail. And the authors themselves acknowledge an "open data paradox": with data alone at this scale, only small models are within reach.

> The core finding survives all of that. A legal corpus five-to-seven times smaller than license-agnostic web crawls delivered out-of-class performance through curation design alone. Now that enforcement of EU AI Act Chapter V began on 2 August 2026, that evidence forces a redefinition. The legality and quality of data may not be a "cost" that regulation imposes, but a "condition" that produces competitive advantage.

<!-- stat-card -->
**2.27T** — Common Corpus token scale — Entirely public-domain / open-licensed (current release)

<!-- stat-card -->
**350M > 1B** — MultiBLiMP size-class upset — 350M outscored OLMo 1B and XGLM 1.7B

<!-- stat-card -->
**5–7×** — Scale gap — The legal corpus is small next to FineWeb's 15T web crawl

<!-- stat-card -->
**2026-08-02** — EU AI Act enforcement begins — Chapter V supervisory and enforcement powers take effect

## The "Performance Tax" Assumption: Is Clean Data Really Expensive?

For the past few years there has been a quiet consensus among the people who build large language models. To make a good model you need a lot of data; to gather a lot of data you have to scrape the whole web; and if you scrape the whole web, copyrighted content inevitably comes along with it. So "rights-cleared data" came to mean "data that gives up scale." The logic runs in three steps: clearing rights shrinks the usable data, less data means less training, and less training means weaker performance. That is how the assumption was built — that clean data comes with a "performance tax" attached.

The assumption was plausible because real numbers backed it. FineWeb, a large dataset refined from web crawls, runs to about 15 trillion tokens; the Allen Institute's Dolma reaches roughly 3 trillion. Corpora that filtered for license from the outset, by contrast, stalled at a fifth to a seventh of that. The scale gap was undeniable, and the inference — "so the performance gap will be just as wide" — looked natural. The bars below show exactly that gap: the size difference between license-agnostic web-crawl datasets and rights-cleared legal corpora.
