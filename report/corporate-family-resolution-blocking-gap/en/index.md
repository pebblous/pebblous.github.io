---
title: Subsidiaries whose names don
subtitle: In a public benchmark built from 6.63 million rows of US federal procurement, seven blocking schemes combined put only 6.8% of those links into the candidate set
date: 2026-09-08
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Subsidiaries whose names don

_In a public benchmark built from 6.63 million rows of US federal procurement, seven blocking schemes combined put only 6.8% of those links into the candidate set_

## Executive Summary

> [!callout]
> Deciding whether two rows in a supplier master belong to the same corporate group is the premise that spend consolidation, credit exposure aggregation and sanctions screening all stand on. The industry has filed this work under entity matching and graded it with a single F1 score. A public benchmark released in September 2026 argues that the scorecard has a missing column. Registrations that carry the same name are recovered almost completely by almost every method. Pairs whose names share not one meaningful word are recovered at no better than 4.7% by any of them.

> The matcher is not the reason. At the earlier stage that decides which pairs a matcher ever sees, not one of seven schemes cleared 3%, and all seven together stopped at 6.8%. The rest pass through the pipeline without ever entering the candidate set. That is territory no amount of matching accuracy reaches. And those links are real. Checked against the parent's own securities filings, documents that share no provenance whatsoever with a procurement registration, well over half of them are confirmed.

> So the practical question narrows to one line. Does our data integration metric count what we got wrong, or does it also count what we never looked at? A pipeline reporting matching F1 alone is not counting the second kind. The paper prescribes retrieving evidence from outside the records, which presupposes a registry of ownership relationships. Today that registry exempts domestically formed companies in the United States, names an ultimate parent for roughly one filer in twenty-five in the global legal entity identifier system, and covers only the very largest groups in Korea.

> Sections 1 through 5 and section 7 follow what the paper measured and what it declined to claim. Section 6, which asks whether the registry that prescription depends on actually exists, is not in the paper. Pebblous opened the regulatory texts and the agencies' published files on 8 September 2026 and counted.

<!-- stat-card -->
**93.2%** — Of links whose names share no distinctive token, the share that never enters the candidate set — 100 minus the 6.8% candidate inclusion of all seven blocking schemes unioned. Measured against all links, the loss is 23.8%

<!-- stat-card -->
**4.7%** — Best recall any of five matchers achieved on that stratum — In the same table, four of the five recover 100.0% on the identical-name stratum. The gap opens inside one table

<!-- stat-card -->
**6.8%** — Candidate inclusion on that stratum from all seven blocking schemes combined — Bought by proposing about 8.5 times as many candidate pairs. The best single scheme is embedding nearest neighbours at 2.89%

<!-- stat-card -->
**64.2%** — Share of those links corroborated by the parent's own SEC filing — 510 confirmed out of 794 checked. A lower bound, discounted by however much text the parser recovered

## Same company and same owner are different questions

Deduplication asks whether two records point to the same thing. Corporate-family resolution asks whether two records sit under the same owner. The two questions look alike, but the evidence lives in different places. For the first, how similar two strings are already carries part of the answer. For the second it does not. Heico Corporation and Blue Aerospace LLC really are parent and subsidiary, and no amount of staring at the two names produces that fact. The relationship sits outside both records, written into a filing the company made with the securities regulator.

The industry has long treated this as a branch of entity resolution and entity matching. Pebblous covered the diagnosis that [unstructured data pipelines break at resolution and provenance](/report/unstructured-to-semantic-layer-pipeline/en/) earlier. This paper steps one stage in front of that diagnosis. Instead of asking what breaks, it splits the data by stratum to measure where the break happens, and releases the result as a benchmark.

Grouping records into families supports more than spend consolidation. Credit exposure aggregation, beneficial-owner and sanctions screening, and supplier risk consolidation all rest on the same grouping, and on the revenue side the account hierarchy in a customer system has the same structure. The paper's related-work section explains why the task has not been measured in this shape before. A long line of research matches company names across sources, running through patent data, financial identifiers and learned name representations, but its concern is recognising the same company under spelling variation. Family resolution begins where that ends. Ownership itself has been studied too, in economics and network science, in bank holding structures, and in knowledge graphs of European business registers, and hierarchical linkage has been treated as link prediction over enterprise data. To the author's knowledge, none of that work released a reproducible public benchmark with held-out splits, and none split pairs by whether the relationship is recoverable from the records at all. The closest public resource the author names is CompanyKG, a graph of 1.17 million companies as nodes and 51.06 million edges across 15 types of inter-company relation. Its tasks are similarity prediction, competitor retrieval and similarity ranking. Because its nodes are already-resolved company entities, the linking problem this article is about is assumed solved before those tasks begin.

The raw material is the full-year archive of US federal contract award records for fiscal year 2025. It holds 6,638,350 rows covering 104,459 distinct entities. The ground truth is neither hand annotation nor model inference. It is the Unique Entity Identifier and name of the ultimate parent that each supplier declared for itself when registering for federal procurement. That this is self-reporting with legal liability for misstatement sets the character of the label. It has force behind it, and it also survives unchanged when the filer is careless. A sense of scale helps here. Aggregating the same API directly, Pebblous found $778.5 billion in federal contract obligations for fiscal year 2025. The 6.63 million rows in this paper are the ledger of where that money went.

### 1.1. 86.3% of registrations that named a parent named themselves

Open the archive and the first trap shows up immediately. Of the entities that populated a parent field, 89,962 of them, or 86.3%, entered themselves as the ultimate parent. In a separately retrieved API sample of 4,806 records, 82.8% of child-level records pointed at themselves, and only 760 genuine parent–child links survived. With the self-references stripped out, 14,288 genuine links remain. Hand-adjudicating the largest families out of that population is what produces the benchmark's 13,716 positive pairs. The two numbers count different things and cannot be used interchangeably.

The finished benchmark consists of 54,864 candidate pairs over 10,307 corporate groups. Three negatives accompany each of the 13,716 positives, for 41,148 in total, and the negatives come in three grades: an unrelated family's parent drawn at random, an unrelated parent that shares a common token, and a parent falling into the same blocking key. That last grade is what a deployed pipeline actually adjudicates. Splits are drawn at the family level and checked for leakage along four axes, covering families, entities, normalised names and duplicate pairs, with a failed check aborting the build rather than quietly patching it.

### 1.2. Three strata, defined by how visible the name is

The design decision that shapes the benchmark is how to divide the positive pairs. Rather than lumping them under a label like difficulty, the author splits them into three strata by how many distinctive tokens the child's name shares with the parent's. A distinctive token is a word left after removing the boilerplate that attaches to any company: inc, holdings, international, services. Defining the strata this way means that which stratum is hard is fixed by definition rather than discovered by analysis.

| Stratum | Definition | Positive pairs | Share |
| --- | --- | --- | --- |
| Identical | Names are equal after case, punctuation and whitespace normalisation | 7,541 | 55.0% |
| Visible | Names differ but share at least one distinctive token | 2,953 | 21.5% |
| Invisible | Names share no distinctive token at all | 3,222 | 23.5% |
| All positives |  | 13,716 | 100.0% |

Composition of the benchmark's name-visibility strata. Source: arXiv:2609.04269v1, Table 1.

More than half, 55.0%, are pairs whose names become identical once normalised. The commercial value of data integration sits in the bottom row. That row is 23.5% of the total, 3,222 pairs, and they share not a single meaningful word between the two names. Heico and Blue Aerospace from the previous section live in this stratum, and so does Aerojet Rocketdyne under L3Harris Technologies. A real acquisition, entirely invisible in the names, and confirmable only by filing.

> [!callout]
> String similarity fails on this stratum not because the similarity function is weak. No function of the two strings can return the right answer, because the strings do not contain it. The evidence is not in either record.

## All seven schemes together reached 6.8%

An entity resolution pipeline runs in two stages. First it picks out the pairs worth comparing, then it adjudicates only the pairs it picked. The front half is candidate generation, or blocking. Arithmetic is why the stage exists. The recipient register the paper measured blocking against holds 114,230 entities, and pairing all of them gives 6,524,189,335 pairs. Six and a half billion pairs cannot go through a matcher, so blocking keeps a small fraction. Blocking is graded on two numbers: pair completeness, meaning how many true links survive into the candidate set, and reduction ratio, meaning how much of the comparison space was cut away. The author measured these against the whole recipient register rather than against only the entities appearing in the pair file. Narrowing to the pair file would mean measuring against a register already filtered down to entities of interest, which flatters both reduction ratio and candidate quality.

The author writes that the table below is the most consequential result in the paper. It runs seven blocking schemes over the same register and puts overall pair completeness next to per-stratum pair completeness. Summarised as one average, it swallows this article's argument whole.

| Blocking scheme | Candidate pairs | Overall | Reduction | Identical | Visible | Invisible |
| --- | --- | --- | --- | --- | --- | --- |
| Token blocking † | 1,534,063 | 68.7 | 99.977 | 92.22 | 83.68 | 0.00 |
| First-token blocking † | 636,042 | 52.9 | 99.990 | 78.70 | 44.80 | 0.00 |
| Character q-gram (q=4) | 9,022,384 | 71.4 | 99.862 | 97.83 | 78.84 | 2.79 |
| Sorted neighbourhood (w=20) | 2,170,180 | 71.2 | 99.967 | 99.95 | 73.48 | 2.05 |
| Phonetic key (Soundex) | 411,063 | 61.3 | 99.994 | 97.32 | 35.96 | 0.25 |
| Attribute key (ZIP, city, state) | 126,843 | 1.9 | 99.998 | 0.91 | 3.73 | 2.39 |
| Embedding nearest neighbours (MiniLM, k=20) | 1,761,025 | 72.5 | 99.973 | 99.89 | 78.67 | 2.89 |
| Union: name-keyed only | 11,875,526 | 75.2 | 99.818 | 100.00 | 89.98 | 3.82 |
| Union: every scheme | 13,074,120 | 76.2 | 99.800 | 100.00 | 91.03 | 6.77 |

****************

Pair completeness by blocking scheme (%). Measured over the 114,230 entities of the recipient register, against a naive comparison space of 6,524,189,335 pairs. Source: arXiv:2609.04269v1, Table 4.  
† The 0.00% on the two daggered rows is an identity, not an experimental result. The invisible stratum is defined as exactly the case where that token function's intersection is empty, so a blocking key built from the same function has no way to catch it. The author claims no credit for those entries.

Read the rightmost column top to bottom and the point of this article is there. Name-keyed schemes catch 60 to 72% overall and never clear 3% on that stratum. Character q-grams drop from 71.4 to 2.79, sorted neighbourhood from 71.2 to 2.05, phonetic keys from 61.3 to 0.25. Drop the two identity rows entirely and the conclusion holds. Even with the key detached from that token function, not one scheme cleared 3%.
