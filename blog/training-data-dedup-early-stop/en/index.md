---
title: The Early-Stop Rule That Made Training Data Deduplication 8x Faster
subtitle: Speed bought with 2.3 points of recall, from a setting that never reaches the dataset card
date: 2026-08-10
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Early-Stop Rule That Made Training Data Deduplication 8x Faster

_Speed bought with 2.3 points of recall, from a setting that never reaches the dataset card_

## Executive Summary

> [!callout]
> Stripping duplicates out of training data is mostly an embedding search problem now. Vectors are split into partitions ahead of time, and every query probes a fixed number of those partitions looking for neighbors above a similarity threshold. SieveIVF, a new paper built on production Hunyuan workloads, argues that this search can stop far earlier. If W partitions in a row turn up no candidate above the threshold, the query is simply abandoned.

> On DEEP-100M, a public dataset of 100 million vectors, that rule ran 8.38 times faster than fixed probing. In exchange it missed 2.29 percentage points of the top-10 neighbors above the threshold. Speed and loss move together through a single knob, W, which means the real design order is not how fast you want the job to run but how much you can afford to miss.

> Nobody has priced what comes next. Neither the paper nor any documentation standard tells you what those missing 2.29 points leave behind in the model trained on that corpus, or why the W that sized the loss appears on no dataset card anywhere.

### Key Numbers

Of the four numbers below, the first three are the terms of the trade the paper measured. The speed you gain, the recall you give up, and the extra loss that shows up in real deployments. The last one comes from a separate line of research and shows why the duplicates you miss matter later.

Sources: [SieveIVF (arXiv:2608.03199)](https://arxiv.org/abs/2608.03199), [Lee et al. 2022](https://arxiv.org/abs/2107.06499)

<!-- stat-card -->
**8.38x** — Speedup on DEEP-100M — 100M vectors, W=8, against fixed probing

<!-- stat-card -->
**2.29 pts** — Recall lost under the same setup — top-10 neighbors above the threshold

<!-- stat-card -->
**0.27–2.88 pts** — Extra loss under approximate assignment — Experiments assumed exact centroid assignment

<!-- stat-card -->
**about 10x** — Memorization cut by deduplication — Lee et al. 2022, verbatim reproduction

## Deduplication Quietly Eats Your Compute

Deduplication is the step nobody watches in a data cleaning pipeline. It takes nowhere near the human labor that labeling does, and it does not change the output as dramatically as filtering. But once a training corpus reaches hundreds of millions of records, this is the step that holds the cluster longest, because every one of those vectors has to be checked against the others for near neighbors.

The standard answer is IVF, the inverted file index. Vectors are sorted into thousands of partitions in advance, and when a query arrives, only the few most promising partitions get searched. The problem is that those few are handed out identically to every query. Deduplication only needs neighbors above a similarity threshold, and fixed-probe IVF allocates its budget with no knowledge of that condition. An easy query finds its answer in the first partition and keeps digging through the rest anyway; a hard query runs out of budget without finding anything.

When the authors took apart four production Hunyuan workloads, the scale of the waste became visible. The exact top-10 neighbors that satisfied the threshold were scattered as deep as rank 16 at the 90th percentile, yet between 93.76% and 99.95% of them already sat inside the first eight partitions. For most queries, eight partitions were enough.

The subjects of that analysis were four indexes of 10 million 768-dimensional vectors each, with the vectors spread across 2,400 partitions. The similarity threshold for calling something a duplicate ranged from 0.85 to 0.93 depending on the character of the workload. At corpus scale the same structure simply grows. A few wasted partitions per query, repeated a hundred million times.

What makes the waste quiet is that it never surfaces as a failure. The search completes normally and the duplicates get filtered properly. The excess just drains into the cloud bill and the cleaning lead time. It is a cost nobody opens a ticket for.

## One Rule Buys 8x and Pays 2.3 Points

The rule SieveIVF introduces fits in one sentence. If W partitions in a row produce no candidate that satisfies the threshold, the query stops searching. Any qualifying result along the way resets the counter to zero and the search continues. Because each query now stops at a different point, partition access scatters, so the authors preserved cache locality by regrouping queries on the fly whenever they were ready to visit the same partition.

Ending a search early is not a new idea in itself. Earlier work trained a separate predictor to guess when a given query should stop. SieveIVF removes that training. No training queries, no predictor, just a count of how many partitions in a row came back empty. Adoption costs almost nothing, but the basis for the decision is thin in exactly the same proportion. All the information behind the stop is whatever has already been searched.

The diagram below shows how fixed probing and early stopping handle the same query differently. The top row is the conventional approach burning through its entire partition budget. The bottom row is a query that satisfies the threshold at the third partition, then hits eight empty partitions in a row and stops at the eleventh.
