---
title: When Agent Memory Runs Tight, Better Retrieval No Longer Helps
subtitle: Megagon Labs audited four eviction policies with a restore counterfactual, separating destruction from retrieval failure
date: 2026-09-13
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When Agent Memory Runs Tight, Better Retrieval No Longer Helps

_Megagon Labs audited four eviction policies with a restore counterfactual, separating destruction from retrieval failure_

## Executive Summary

> [!callout]
> An agent that works across many sessions has to throw away part of what it stored once the accumulated history passes a fixed token budget. Several papers already chart how much accuracy a tighter budget costs. That single number, though, holds two failures whose remedies point in opposite directions. The evidence a question needs may have been evicted already, or it may still sit in the store with retrieval failing to reach it. A paper posted to arXiv on September 8 offers an instrument that separates the two one question at a time.

> The method reinstates what was thrown away. Working from a store after eviction has run, the author collects the questions the reader missed, drops the evidence each one needs back in at read time, and runs the same model again under identical settings. Reading the change in correctness together with whether that evidence had been evicted sorts every error into three bins. At 80k tokens, a budget that sounds generous, between 0.60 and 0.73 of the errors restoration corrected traced to evidence that eviction had already destroyed. At 8k tokens the figure reaches 1.00 for all four policies.

> Sections 1 through 5 follow what the paper measured and the limits its author drew. Section 6 carries the finding over to deletion decisions in data governance, and that reading belongs to this article rather than to the paper.

### Key figures

Source: Chen Shen, [What Eviction Destroys: A Restore-Counterfactual Audit of Forgetting in Agent Memory](https://arxiv.org/abs/2609.08279), arXiv:2609.08279 (2026), Table 1, §5, and Appendix C

<!-- stat-card -->
**0.60–0.73** — Irreversible share at 80k tokens — The four policies, measured against errors that restoration corrected

<!-- stat-card -->
**1.00** — All four policies at 8k tokens — The point where a better retriever has almost no error left to fix

<!-- stat-card -->
**98%** — Still wrong with the whole retained store injected — Only 45 of the 2,276 irreversible cases flipped

<!-- stat-card -->
**+0.29 to +0.33** — Gap opened by the read-time regime alone — Three policies at 80k tokens, significant after Holm correction (p=.007)

## One Number Holds Two Different Failures

Over days and weeks with the same user, what an agent has been through outgrows its context window. The memory pipeline therefore decides in turn what to write down, what to keep and what to let go, and what to read back when a question arrives. The paper calls that middle step eviction: the moment the budget overflows and stored material gets selected for disposal. Curves that trace the accuracy lost as the budget shrinks already exist on both the theoretical and the empirical side. Those curves state the size of the loss and say nothing about its composition.

Prior work has piled up around this exact point. The optimal boundary for how much an agent may forget has been formalized. Cost and accuracy have been charted empirically on LoCoMo and LongMemEval. Other work goes further and learns what to retain inside a budget. The empirical line reports end-task accuracy without breaking down why that accuracy fell. Some papers do split failures apart. WhenLoss separates write-side mass from retrieval-side mass in aggregate, and the work the author names as closest injects paired oracle probes into an agent-written store to diagnose write, retrieval, and utilization failures. That one aims at aging mechanisms on custom scenarios rather than at eviction driven by a capacity bound. This paper differs on two counts: it splits at the level of a single question instead of an aggregate, and it attributes the error to one eviction decision.

Two identical drops in accuracy can have opposite causes. If the evidence a question needs has already been pushed out of the store, no retriever will bring it back and retention is the only lever. If the evidence survived and retrieval simply missed it, there is no reason to retain more and fixing the retriever is enough. The introduction puts the situation in a single line.

“A frontier point conflates two failure modes with opposite remedies. … An all-recoverable frontier and an all-irreversible frontier can look identical on the accuracy axis but require different interventions.”
