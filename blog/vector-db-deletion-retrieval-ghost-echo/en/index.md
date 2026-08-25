---
title: Deleted Records Kept Reshaping Vector Search Results
subtitle: Trinity College researchers measured Top-5 centroid drift across 54 paired ChromaDB deletions against matched controls
date: 2026-08-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Deleted Records Kept Reshaping Vector Search Results

_Trinity College researchers measured Top-5 centroid drift across 54 paired ChromaDB deletions against matched controls_

## Executive Summary

> [!callout]
> Send a deletion request to a vector database and the API confirms completion within milliseconds. After that, the document never surfaces in any query result. Researchers at Trinity College in Hartford, Connecticut, added one more question at exactly that point. They set out to measure whether a document being absent from the results is the same thing as the system having forgotten it.

> After deleting a target document from ChromaDB and issuing the same queries again, the semantic centroid formed by the top five results had moved by a median of 0.1522. Against the 0.0412 recorded when a non-target neighbor in the same cluster was deleted instead, that is 3.7 times larger. The deleted identifier never came back in any of the 270 trials. What the numbers describe is a trace left behind while the deletion feature was working exactly as specified.

> This is not a story about the contents of a deleted document leaking out. No body text is reconstructed and no vector is recovered. What lingers is the bare fact that something vanished from that spot, and it lingers in the shape of the retrieval results, legible with 61.1% accuracy from five queries. It also matters that the experiment ran on a synthetic corpus the researchers generated rather than on real personal data.

### Key Numbers

Deletion worked flawlessly, and the search results changed anyway.

Source: Mukkuzhi et al., [arXiv:2608.20352](https://arxiv.org/abs/2608.20352)

<!-- stat-card -->
**270 of 270** — Trials where the deleted identifier stayed out of the results — Not once did it return inside the Top-40, across all five backends

<!-- stat-card -->
**0.1522** — Centroid drift of the Top-5 evidence base — Deleting a same-cluster neighbor gave 0.0412, an unrelated document 0.0000

<!-- stat-card -->
**61.1%** — Detection accuracy from a budget of five queries — The fact that something was deleted reads out without knowing what it was

<!-- stat-card -->
**0.34 to 0.38** — Residual drift after overwrite-then-delete — The most aggressive response grew the trace instead of shrinking it

## The Record Was Gone and the Results Changed

The paper opens in a hospital. A patient named Alice has an insulin prescription sitting inside a RAG system, and Alice invokes her right to erasure under GDPR Article 17. The operator sends a deletion request to the vector database and the API confirms completion within milliseconds. From every observable standpoint, the deletion looks complete. Yet a third party using the same query interface can tell that Alice's record was there, without ever retrieving it. The method is to watch how its absence reshapes what the system retrieves in its place.

The cause sits in the data structure vector databases use to make search fast. Most of them today rely on a proximity-graph index called HNSW. Every time a document is inserted, the nodes it will treat as neighbors get fixed, and those links become the traversal path for every query that follows. Deletion is usually closer to attaching a marker that says this node is gone. The node drops out of the results, but the neighbor links that were drawn when it arrived, and the older paths those links pushed aside, stay where they are. The authors call what remains a topological crater left behind by the deleted node.
