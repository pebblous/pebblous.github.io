---
title: REDI Pipeline Auto-Records Data Preparation
subtitle: Oak Ridge National Laboratory
date: 2026-07-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# REDI Pipeline Auto-Records Data Preparation

_Oak Ridge National Laboratory_

## Executive Summary

> [!callout]
> In scientific AI, the preprocessing that shapes raw data into something a model can train on almost always happens inside one researcher's notebook. The script never makes it into the paper, and the next person rebuilds the same work from scratch. REDI, from the U.S. Oak Ridge National Laboratory, standardizes that preprocessing into five stages — ingest, preprocess, transform, structure, output — and builds provenance instrumentation into the pipeline so that how the data changed at each stage is recorded automatically. This article looks at what "data that carries its own path" makes possible, rather than merely "clean data."

> The instrumentation yields an unexpected byproduct too. When every stage's runtime was measured, what dominated pipeline cost turned out to be not the algorithms but file I/O. Simply switching the storage format from NPZ to Zarr raised parallel-access throughput about threefold. The habit of keeping a record drew a map for optimization. That said, REDI does not automate deeply domain-specific transformations either.

> REDI exposes those five stages not as scripts a person rewrites each time, but as five operating modes an agent invokes through a standard interface. That is exactly the point where preprocessing moves from one-off manual labor to shared infrastructure that keeps a lineage.

<!-- stat-card -->
**~3×** — Zarr parallel throughput — vs NPZ. The first format lever the instrumentation revealed

<!-- stat-card -->
**86%** — Ingest share of fusion runtime — The bottleneck was file I/O, not computation

<!-- stat-card -->
**η ≥ 0.95** — Parallel efficiency, 20–800 workers — Near-ideal scaling at supercomputer scale

<!-- stat-card -->
**r = 1.000** — Transform validation correlation — Protein data. Provenance guarantees reproducibility numerically

## Why preprocessing was always trapped in private scripts

Scientific AI papers fill up with model architectures and performance metrics, yet the work that actually consumes the most time upstream is the preprocessing that turns data into a form a model can train on. The problem is that this preprocessing usually ran only inside one researcher's local setup. In what order the data was downloaded, how the grids were aligned, what was normalized, which format it was saved in: none of that makes it into the paper. Only the final numbers remain; the path to those numbers disappears. The next person picks up the same data and rewrites the script from the beginning.

The paper **"Automated Data Readiness for Scientific AI,"** from researchers affiliated with the U.S. Oak Ridge National Laboratory, takes aim at exactly this attrition. Its diagnosis is simple: until now, no single framework had tied together automated transformation, readiness assessment, provenance tracking, and agent integration. Separate tools existed for each, but there was no pipeline that let the full journey, from raw source to trainable state, flow through while being instrumented reproducibly.

What tries to fill that gap is **REDI**. It is a five-stage pipeline that automatically converts massive scientific datasets for AI training, beginning with **ingest** and passing through **preprocess**, **transform**, and **structure** before ending at **output**. Unpacked, the flow is: download the data (ingest), align the grids (preprocess), extract features and normalize them (transform), lay out the structure as tensors or graphs (structure), and save into a training-ready format (output). Each stage is encapsulated as a single **PipelineStep** class, and every time that step is initialized, provenance instrumentation automatically comes along with it. That is where this article's question arises: what, exactly, does that instrumentation leave behind, and what does it make possible?
