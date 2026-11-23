---
title: The Riemann Hypothesis in Lean: What the Checks Established
subtitle: Two independent tools matched the theorem to Mathlib. Checking the proof and explaining its main ideas are separate tasks.
date: 2026-11-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Riemann Hypothesis in Lean: What the Checks Established

_Two independent tools matched the theorem to Mathlib. Checking the proof and explaining its main ideas are separate tasks._

## Executive Summary

> [!callout]
> On November 20, Levent Alpöge released a Lean proof of the Riemann Hypothesis developed with Claude. On November 21, the Lean and Mathlib communities reported that two independent tools matched Alpöge’s theorem to Mathlib’s existing statement of the Riemann Hypothesis.

> The [independent MIT record](https://math.mit.edu/~drew/grh/) distinguishes rebuilding the code from the proof checks. Michael Rubinstein’s 164-page Waterloo working guide covers the zeta-function case and relies on the Lean development for a central inequality.

> Sections 1 through 4 set out what public materials and news coverage establish, and Section 5 summarizes the answers 3Blue1Brown collected from mathematicians before the announcement. Section 6, which reads the episode as the distance between a verifiable output and a trustworthy one, is this article's own interpretation.

### Key Numbers

Sources: [Alpöge’s note](https://alpo.ge/remark.pdf) · [Lean and Mathlib statement](https://leanprover-community.github.io/blog/posts/riemann-hypothesis/) · [MIT verification](https://math.mit.edu/~drew/grh/) · [Waterloo guide](https://www.math.uwaterloo.ca/~mrubinst/alpoge_claude_grh/) · [Clay prize rules](https://www.claymath.org/millennium-problems/rules/)

These figures describe four different things: the released code, an unpublished rendition, assumptions used in the formal proof and a prize eligibility requirement.

<!-- stat-card -->
**175,187** — Lean source files released — MIT records a roughly 61.6 GB proof export

<!-- stat-card -->
**250,000+ pages** — Unpublished prose rendition — Not a lower bound for an explanation

<!-- stat-card -->
**3 axioms** — Assumptions the core theorems rest on — Sutherland confirmed nothing hidden beyond Lean's three standard axioms

<!-- stat-card -->
**2 years minimum** — Public scrutiny required for a Millennium Prize — A prize eligibility condition, not a test of proof validity

## A Four-Page Note and 175,187 Lean Files

On November 20, Levent Alpöge released a Lean proof of the Riemann Hypothesis developed with Claude. His [four-page note](https://alpo.ge/remark.pdf) accompanied the Lean source. The MIT verification record’s roughly 61.6 GB refers to the exported proof used for checking, not the unpacked source archive.

Alpöge produced but did not publish a prose rendition exceeding 250,000 pages. Michael Rubinstein’s 164-page Waterloo working guide covers the zeta-function case and relies on the Lean development for a central inequality.

The Riemann Hypothesis is a conjecture Bernhard Riemann arrived at in 1859 while trying to describe how prime numbers are distributed. It says that every non-trivial zero of the Riemann zeta function sits on a single line, the one where the real part is 1/2. If that holds, we can say far more precisely than we can today how primes scatter along the number line. For 167 years nobody has shown it either true or false, and in the meantime hundreds of theorems have been built on top of it by assuming it. This is the statement Alpöge says he has proved.

The formalization covers the classical Riemann Hypothesis and the Generalized Riemann Hypothesis for Dirichlet L-functions, not arbitrary L-functions.

Andrew Sutherland of MIT reported that 175,187 modules compiled without errors in an independent rebuild and that the five core theorems used only Lean’s three standard axioms.
