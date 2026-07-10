---
title: They Stopped Looking for Similar Proteins — and Prediction Got Better
subtitle: Nobody added more data. A representation that treats geometry like an image replaced the MSA dependency
date: 2026-07-02
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# They Stopped Looking for Similar Proteins — and Prediction Got Better

_Nobody added more data. A representation that treats geometry like an image replaced the MSA dependency_

## Executive Summary

> [!callout]
> We usually credit AlphaFold's uncanny accuracy at protein folding to the cleverness of the model. Yet a large share of that accuracy came from somewhere else: its ability to comb through vast databases and pull in hundreds to thousands of "look-alike proteins," a step known as multiple sequence alignment (MSA). This article looks at a 2026 _Nature Machine Intelligence_ study that cut that data dependency head-on.

> Strip those homologous sequences away and AlphaFold2's average TM-score collapses from about 0.80 to 0.41 — close to a halving. In other words, the bottleneck on accuracy was never model size; it was the richness of the reference data. TDFold uses none of that data. Instead it redefines a protein's geometry as a two-dimensional image and lets an image-generation model (a diffusion model) construct those relationships. The result reached the best accuracy among methods that use no MSA, and it pulled ahead by the largest margin on orphan proteins, which have no homologous sequences at all.

> One caveat has to be stated plainly. TDFold did not surpass an AlphaFold that had every homologous sequence at its disposal. "Removing the data made it more accurate" is a claim about the comparison with other single-sequence methods under the same conditions. Holding to that distinction, this article asks a broader question: can the gap we usually fill with more data be filled instead by how we represent the problem?

<!-- stat-card -->
**0.80 → 0.41** — AlphaFold2 TM-score when MSA is removed — Without homologs, accuracy collapses by nearly half — that was the real bottleneck

<!-- stat-card -->
**71.91** — TDFold CASP16 GDT-TS — Best among MSA-free single-sequence methods (ESMFold 70.33, OmegaFold 61.55)

<!-- stat-card -->
**10–100×** — Inference speed — Versus language-model methods on long sequences — no database search either

<!-- stat-card -->
**RTX 4090 · 1 week** — Full training cost — A single GPU stands in for the weeks a TPU cluster once took

## Did AlphaFold really solve this on its own?

A protein is a chain of amino acids strung in a single line that folds on its own into a three-dimensional shape. Guessing that final shape from the sequence alone is the structure-prediction problem. When people say AlphaFold2 essentially solved this decades-old challenge, they tend to overlook a quiet accomplice: multiple sequence alignment (MSA).

An MSA is, put simply, a "list of similar proteins." Proteins that branched from a common evolutionary root have sequences that resemble one another, and lining that list up side by side reveals a telling signal. Two positions that sit close together in the folded structure tend to change in tandem: when one mutates, the other mutates to match, preserving the fold. Read that co-evolution pattern and you can infer, indirectly, which two points along the sequence lie near each other in space. AlphaFold2's core engine is built precisely to extract that signal.
