---
title: HuggingBench Points Its Models at the Wrong Items
subtitle: Poland
date: 2026-11-05
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# HuggingBench Points Its Models at the Wrong Items

_Poland_

## Executive Summary

> [!callout]
> An audit of HuggingBench, the benchmark that scores how well systems recommend Hugging Face models and datasets, found that three of the four graphs shipped alongside it attach item IDs to the wrong things. Michał Podstawski of the NASK National Research Institute in Poland posted the paper to arXiv on November 1. The files had already passed all 34 single-file checks, and the error surfaces only when two files are matched by name.

> Once the links were repaired, every graph-aware recommender improved on all three misaligned graphs and every seed. Mean Recall@10 rose by 4 to 73 percent, and 10 of the 27 head-to-head comparisons between configurations flipped order. The gains concentrated in items that had collected only a handful of likes. Popular items barely moved, and the aggregate metric is the one popular items drive. The error had nowhere to show up in the average.

> Sections 1 through 4 follow what the paper measured and what it left open. Section 5 carries the result over to our own data pipeline design, and that reading belongs to this article rather than to the paper.

### Key Figures

Source: Podstawski, [Auditing a Model-Hub Benchmark](https://arxiv.org/abs/2611.03727), arXiv:2611.03727 (2026)

<!-- stat-card -->
**Zero** — Endpoints reaching their own item — The 1-hop and 2-hop graphs each carry 767,927 item endpoints, and not one of them lands on the item it describes

<!-- stat-card -->
**Up to 73%** — Score gain after the repair — Mean Recall@10. The smallest gain was 4 percent, and nothing scored worse than before

<!-- stat-card -->
**10 of 27** — Comparisons that reversed — Of 27 pairs of configurations, 10 swapped order across all three seeds

<!-- stat-card -->
**0.1860** — Simple model reading card text — Recall@10, 18 percent above the previous best of 0.1578. It trains on a CPU in six minutes

## What the Scoreboard Was Graded On

Hugging Face hosts hundreds of thousands of models, datasets and Spaces, and users press like on the ones they want to keep. In December 2024 a team at Nanjing University crawled the hub into HuggingKG, a graph of 2.6 million nodes and 6.2 million edges, and built three tasks on top of it: recommend the next resource to a user, classify which task a model is built for, and trace which base model a derivative came from. That bundle is HuggingBench, published at SIGIR 2025.

This audit concentrates on the first task. It splits 1.06 million likes from 38,624 users across 25,080 items into training, validation and test, then compares eleven recommenders by Recall@10 — how much of what a user actually pressed like on lands in the top ten suggestions. The items break down into 16,200 models, 3,634 datasets and 5,246 Spaces. Three of the eleven methods read more than the like history; they also read a graph of how items relate to one another, so the benchmark ships four separate external graphs.

The four differ in kind. One is a homogeneous graph joining items to items. One lifts the neighborhood a single step out from each item in the full hub graph, another takes two steps, and the fourth groups resources by who published them. The best score the original paper reported was 0.1578, from KGCL on the homogeneous graph. One method, KGIN, scored close to zero in every configuration, and the paper printed that number as a result.

The audit reproduced those numbers before touching anything. Running all eleven methods on the published configurations and grids unchanged, LightGCN and DCCF matched all eight reported values to four decimal places, and the rest landed within 0.0010 Recall@10, apart from one KGCL cell on the 2-hop graph. KGIN's 0.0004 came back too. The reported numbers are an accurate record of what the published code computes on the published data. What stays open is the question of what that code was measuring.

## Every Check Passed and the Join Still Broke

A graph-aware recommender carries the item ID straight out of the like file and into the graph. To explain item 17166 it pulls whatever facts entity 17166 holds. Same number, same thing — except that promise is written down in none of the files. It is a long-standing implementation convention in this field, resting on the assumption that items take the first block of entity IDs.

The homogeneous graph keeps the promise. The other three break it. On the 1-hop and 2-hop graphs, not one of the 25,080 items carries the ID it has in the like file; on the publisher graph, four do. Each of those two graphs holds 767,927 endpoints that attach a fact to an item, and none of them reach the item they belong to. No item receives even one correct fact. On the 1-hop graph 117,260 endpoints land on a different item that does not describe them, 99,312 do the same on the 2-hop graph, and the rest fall on entities that are not items at all. Among what falls away sit 278,358 endpoints recording lineage between models — fine-tunes, quantizations, adapters, merges. Those are precisely the facts that explain why the hub holds so many near-identical copies of one model.

And yet each file was sound. All 34 single-file checks the author ran pass: keys unique, values in range, training and test kept apart. The item name list and the entity name list are each flawless on their own terms. The error appears only at the moment the two lists are matched by name. The author notes that adding that one comparison to the validation code catches it in seconds.

How it happened is legible in the shape of the release. The same like records appear in six separate file bundles, and every bundle numbers them its own way. Pick any two of the graph bundles and at least 25,077 of the 25,080 items carry different IDs, with no mapping between bundles shipped. Matched by name, the splits in all four bundles turn out identical. The same data went out with fresh numbering per graph, and the reading side trusted that equal numbers meant equal things.

One model makes the consequence concrete. SmolLM2-1.7B-Instruct is item 17166 in the like file. In the 1-hop graph it is entity 366541, carrying 153 facts, one of which is a quantization relation to SmolVLM-Instruct. The recommender never received that fact. It followed the number to entity 17166 and found a Space named dpbos/postvalidation with a single fact attached.
