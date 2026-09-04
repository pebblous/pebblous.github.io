---
title: Vector Search Cost Grew as a Power of Dataset Size
subtitle: University of Toronto researchers grew eight datasets, three of them to a billion points, and measured what HNSW and Vamana charge per query
date: 2026-09-05
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Vector Search Cost Grew as a Power of Dataset Size

_University of Toronto researchers grew eight datasets, three of them to a billion points, and measured what HNSW and Vamana charge per query_

## Executive Summary

> [!callout]
> Most vector database capacity plans rest on a single sentence: a graph index slows down only logarithmically as the data grows. Researchers at the University of Toronto took that sentence and measured it across scale. They grew eight datasets while holding recall to a target, and the distance computations a single query needs rose as a power of dataset size. The gentle bend that logarithmic scaling would have produced never appeared. The same shape held from a 90% recall target up to 99%, across the sixteen index configurations they benchmarked, and for hard and easy queries alike.

> This is not a story about vector databases falling over. The exponent sits between 0 and 1, so cost still grows far more slowly than linearly. What moves is not whether you can afford it but the baseline you plan against. Lean on the most generous logarithmic assumption and a hundredfold increase in data buys you a 1.3x increase in cost. Fix the recall target at 90% and work through the paper's own equation and coefficients, and most datasets land near 3x, while the hardest one passes 7x. What separates those numbers is less the count of vectors than the intrinsic dimensionality of the data. SIFT, grown all the way to a billion points, ran straight. An OpenAI embedding set of only 2.32 million was already beginning to sag.

> The chain of transmission this article retraces is what makes the finding land. When the original HNSW paper spoke of logarithmic scaling, the experiment that varied dataset size used a single 8-dimensional synthetic dataset, and its authors had already noted that their largest run departed from a pure logarithm. What traveled onward into six vendor documents was the conclusion, without the qualification. That said, the new paper is itself a preprint posted three days ago, its proofs address an idealized construction, and the upper bound for HNSW, the index most teams actually run, is left open by its authors.

<!-- stat-card -->
**46.5** — Intrinsic dimensionality of a dataset whose embedding dimension is 1536 — Measured at 1M points. The dimension that makes search hard is not the embedding dimension

<!-- stat-card -->
**0.31 → 0.52** — Cost exponent when the recall target moves from 90% to 99% — GloVe, HNSW, ef_construction 200, M 32. Our own calculation from the paper's equation and coefficients

<!-- stat-card -->
**1.3x vs 3x** — Cost multiplier at a hundredfold increase, logarithmic assumption against the measured curve — Our arithmetic, with the most generous logarithmic assumption as the baseline

<!-- stat-card -->
**1 billion** — Points reached without the curve ever bending — Two datasets, SIFT and DEEP, observed under a single Vamana configuration

## The Sentence Vector DB Capacity Plans Rest On

Any organization running retrieval-augmented generation or recommendations keeps piling up vectors. Documents accumulate, products accumulate, conversation logs accumulate, and the embeddings grow with them. Sooner or later everyone operating a vector database arrives at the same question. If the index holding ten million records today holds a hundred million next year, how much more will search cost? Almost everyone answers it from the same premise: a graph index slows down only logarithmically as the data grows.

The paper this article follows puts that premise on a test bench. "A Power Law in Logarithm's Clothing: On the Scalability of Graph-Based Vector Search" was posted to arXiv on 2 September 2026, and all three authors are at the University of Toronto. None of them works for a vector database vendor.

First, pin down a term. Search cost in this article means **the number of distance computations performed per query**. Not response time in milliseconds, not memory, not the cloud bill. The paper states its reason plainly: measuring in wall-clock time conflates algorithmic behavior with implementation idiosyncrasies such as cache evictions, prefetching, and hardware-optimized distance computations. Distance computations dominate graph traversal and hold steadier across implementations.

### 1.1. Grow the data and recall drops first

The paper's first experiment confirms something already known. Leave the index parameters alone and grow the data, and distance computations per query rise a little while **recall falls a lot**. Recall is the share of the true nearest neighbors that the search actually returns. The reason is intuitive. As the dataset grows, more points crowd near the query, beam search converges more slowly, and the true nearest neighbors face more competition for slots on the candidate list. Search quality quietly degrades.

So a practice has grown up around it. Run an exact search periodically, measure recall, raise the search candidate list size (efsearch) if the number falls short of the target, measure again, and repeat until the target is met. The paper cites vendor documentation and recent research as describing this practice widely. It matters here because it becomes the experimental design. Pin recall to a target while the data grows, and what moves shifts from quality to cost. The shape of that cost curve is the paper's question.

> [!callout]
> The question comes down to this. Holding recall constant, how fast do the distance computations for a single query grow as the dataset grows? Benchmarks generally do not answer it, the paper notes, because they measure the recall-cost trade-off at one dataset size.

How a graph index walks a query, and why the edges of deleted documents linger in the graph, is something the Pebblous blog worked through once in [a piece on deleted records reshaping vector search results](/blog/vector-db-deletion-retrieval-ghost-echo/en/). The same store viewed from a security angle appears in [stored embeddings exposing the contents of emails](/report/embedding-translation-vector-db-exposure/en/). This article looks only at what that store costs as it grows.

## Behind That Sentence Were 8-Dimensional Synthetic Vectors

One of the paper's opening subsections is titled "The Logarithmic Folklore," its name for the received wisdom about logarithmic scaling. As the paper sorts it out, the folklore splits in two. For exactly constructed graphs there is a claim with a proof attached. For the heuristic indexes used in practice there is a claim with no proof. What we actually run is the second kind.

So what did the paper everyone cites actually measure? Rather than repeat the new paper's summary, we opened the original HNSW paper (Malkov & Yashunin, arXiv:1603.09320 v4) and checked. Two things turned out to be true.

### 2.1. The only experiment that measured scaling was a single pair of panels

In the original HNSW paper, the experiment that varies dataset size and plots a scaling curve is the pair of panels in Fig. 12(b) and (c). The data was synthetic vectors drawn from an 8-dimensional random hypercube, the task was 10-NN search, and recall was fixed at 0.95. And the paper's own wording was not a flat claim of logarithmic scaling but an upper bound: "not worse than logarithmic."

A qualification has to go with that. It is not the case that the whole HNSW paper was validated on low-dimensional synthetic data. Sections 5.2 through 5.4 compare performance broadly on real datasets including SIFT, GIST, and GloVe. The accurate statement is narrower: **among the experiments that varied dataset size to measure scaling**, there was one, and it used 8-dimensional synthetic vectors.

### 2.2. The authors already recorded the departure in their largest run

Section 5.4 of that same paper is the more interesting part. A 200-million-point subset of SIFT, embedding dimension 128, the largest experiment in the paper. The authors plotted query time against dataset size and wrote this alongside it.

> [!callout]
> "Note that the scaling deviates from the pure logarithm, possibly due to relatively high dimensionality of the dataset."

That sentence has been in print since 2018. It is important not to overstate it. The high dimensionality the HNSW authors invoke refers to **the embedding dimension of 128**, and that is not the same quantity as the intrinsic dimensionality the new paper casts as the driver of the curve. Writing that the two papers said the same thing would be wrong. What the original authors did was see a departure in their largest run and guess that dimensionality was behind it. Eight years later, this paper identifies which dimension and writes the shape of the curve as an equation.

Vamana's situation differs again. According to the new paper, the original Vamana work argued that the number of greedy search steps on an exactly constructed graph is logarithmic, but never measured search cost against dataset size.

### 2.3. What traveled into industry documentation was the conclusion

The new paper writes that the claim spread through industry documentation and surveys until it was restated as an established property. We opened those documents ourselves. All six do describe scaling as logarithmic, or as polylogarithmic, meaning a logarithm raised to some power. But **they are not equally strong statements**. Below is each document's own wording and the character of the claim, accessed on 5 September 2026. Only Milvus had to be read from a Wayback snapshot dated 12 May 2026, because the live page returns nothing to a bot.

| Document | Wording in the source | Character of the claim |
| --- | --- | --- |
| Milvus, Index Explained | "enabling efficient logarithmic-time search complexity" | Flat statement about its own product |
| Weaviate, Vector Indexing | "it scales well to large datasets as queries have a logarithmic time complexity" | Flat statement about its own product |
| OpenSearch, k-NN Performance Tuning | "the complexity of search for the HNSW algorithm is logarithmic with respect to the number of vectors" | Flat statement about its own product |
| Elastic, Vector search & kNN implementation guide | "The computational cost of search: logarithmic in the number of vectors, provided they are indexed through HNSW" | A flat statement, but the only one of the six that attaches a condition |
| Pinecone, HNSW | "search times are reduced to (poly/)logarithmic complexity" | Describes the design notion of a model family. The weakest of the six, leaving polylogarithmic open |
| Redis, How HNSW Algorithms Can Improve Search | "As Malkov and Yashunin write in the original paper, '…allows a logarithmic complexity scaling.'" | Quotes the original paper instead of asserting anything itself |

The last row completes the picture. The Redis document quotes the original paper rather than making its own claim. A vendor cites a paper, and the scaling experiment that paper rested on used 8-dimensional synthetic vectors. The whole chain is visible inside one document. Worth noting too: the new paper's own list of these documents differs between its Section 1 and Section 2. Milvus, Weaviate, Pinecone, Redis, and OpenSearch appear in both, while Section 1 adds FAISS and Section 2 adds Elastic.

What did not travel is easier to see laid out on one page.
