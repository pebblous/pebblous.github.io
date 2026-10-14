---
title: BOTANIC-1 Ranks the Melon Gene First, but the Answer Is Already Known
subtitle: Google
date: 2026-10-15
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# BOTANIC-1 Ranks the Melon Gene First, but the Answer Is Already Known

_Google_

## Executive Summary

> [!callout]
> This article reads two documents side by side: a paper posted to bioRxiv in September 2026, and the joint announcement Google published when it introduced the same work. Living Models, a bio AI company based in Paris, trained BOTANIC-1 on 314.6 billion base pairs drawn from the genomes of 320 plant species, and Google's Gemma 4 was wired to call that model the way it would call a command line tool. The agent assembled that way put one melon sex-determination variant first among 2,494 candidates.

> The number that stays longest is 0.90. It is the share of twenty runs of the same task that ranked the correct variant first, against 0.15 for classical tools with expert guidance added. Given sequence alone, the paper records, Gemma 4 ranked the causal variant no better than chance. Nothing about the reasoning changed to lift that figure; a layer trained separately on plant genomes was attached to it. The problem that produced the score, though, is one whose answer already sits in a published paper.

> The figures carried here come from the paper and from Google's joint announcement, and where a number appears only in press coverage this article says so. The later part of section 4 and all of section 5 turn the question toward data verification, and that turn is this article's reading rather than a claim either source makes.

### Key numbers

Four cells. The first two are what this pairing managed in the melon case. The second two are how widely that result was measured beyond the single case, and the condition attached to that measurement.

Source: [Google DeepMind and Living Models joint announcement](https://deepmind.google/models/gemma/gemmaverse/living-models/), [bioRxiv paper](https://www.biorxiv.org/content/10.64898/2026.09.04.749355v1.full).

<!-- stat-card -->
**1st of 2,494** — Result of scoring the melon variants — The agent removed 567 insertions, deletions and rearrangements from the chromosome 2 candidates, and BOTANIC-1 scored the 2,494 single-base variants left. The validated CmEIN3 variant came out first with no tie

<!-- stat-card -->
**0.15 → 0.90** — Share of twenty runs ranking it first — Expert-guided classical tools reached 0.15, and the setup that called BOTANIC-1 reached 0.90. Classical tools with no guidance reached 0.00

<!-- stat-card -->
**48.8% vs 33.9%** — Causal variant inside the top 1% — Measured on a set of more than 500 experimentally validated variants. The classical pipeline reached 33.9%. Turned around, more than half fall outside the top 1% on either method

<!-- stat-card -->
**All 545** — Evaluation sites with answers confirmed — The 545 sites across 14 species the paper evaluated on are all variants that experiment has already confirmed. A score measured on variants nobody has answered yet appears nowhere in this material

## At Best, Classical Tools Stop at a Two-Way Tie

In melon, the sex of the flowers a single plant produces differs by cultivar. Working out which single base changed to split that trait is an old problem in plant genetics, and it is the problem in this case too. The classical method is bulked segregant analysis. Collect plants with differing traits, compare their genomes, and the interval holding the cause narrows. In this melon case, 47,492 variants across the whole genome came down to one interval on chromosome 2 and 3,061 candidates.

It goes no further than that. The paper describes the state as one where the causal variant lies within the chromosomal interval while thousands of candidates stay unresolved. What this method measures is correlation in inheritance, not whether a variant actually alters how the plant works. Variants inside the interval are inherited together, so they score alike. With conventional bioinformatics tools, the authors write, the analysis reaches the limit of what current standard methods can do and yields a shortlist of variants that still require further experimental work.

The joint announcement puts a number on that limit. Handed only standard command line tools, Gemma 4 in its best runs narrowed the pool to two identical-scoring coding mutations and stopped. One was the validated CmEIN3 driver; the other was an unrelated gene. With equal scores there is no basis for choosing between them, and the only way out is to check both at the bench. The qualifier about best runs has to be read alongside the rest: across twenty runs, the share that ranked the correct variant first was 0.15, so even reaching a two-way tie was not something that happened every time.

Attaching BOTANIC-1 as a tool changed the route. In the second scenario Gemma 4 was given a single specialized tool, the local BOTANIC-1 scoring function. The agent filtered 567 insertions, deletions and rearrangements out of the chromosome 2 candidates and sent the remaining 2,494 single-base variants to that function. The validated CmEIN3 variant came back first, with no tie.
