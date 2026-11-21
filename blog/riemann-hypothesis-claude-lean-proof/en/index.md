---
title: Claude
subtitle: An Anthropic mathematician released the proof as 175,187 files of code; outside mathematicians confirm it compiles, and no one yet knows why it is true
date: 2026-11-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Claude

_An Anthropic mathematician released the proof as 175,187 files of code; outside mathematicians confirm it compiles, and no one yet knows why it is true_

## Executive Summary

> [!callout]
> A mathematician at Anthropic says he has found a proof of the Riemann Hypothesis. On November 20, Levent Alpöge posted a four-page note and released the body of the proof as 175,187 files of [Lean 4](https://leanprover-community.github.io/) code, a language for writing mathematical statements so a computer can check them one step at a time. Andrew Sutherland of MIT and other outside mathematicians ran the code themselves and confirmed that it compiles with no errors.

> The machine letting it through does not mean a person has read it. Alpöge did not publish a human-readable account alongside the code. Written out in ordinary prose, he said, it would run past 250,000 pages, and he could not vouch for what came out. The objection Kevin Buzzard of Imperial College London raised was not about the code being wrong either. It was about whether the statement written inside the code is the statement we call the Riemann Hypothesis. A day later, after the verification groups said the proof is correct, Alpöge wrote that he does not know why the theorem is true.

> Sections 1 through 4 set out what public materials and news coverage establish. Section 5, which reads the episode as the distance between a verifiable output and a trustworthy one, is this article's own interpretation.

### Key Numbers

Sources: [Scientific American](https://www.scientificamerican.com/article/anthropic-mathematician-claims-to-prove-riemann-hypothesis-most-famous-problem-in-all-of-math/) (2026-11-20) · [the same outlet's follow-up](https://www.scientificamerican.com/article/the-ai-riemann-hypothesis-proof-is-almost-certainly-true-independent-mathematicians-attest/) (2026-11-21) · [Clay Mathematics Institute](https://www.claymath.org/millennium-problems/)

The first two numbers show how large this proof is from a human point of view. The third marks how far the machine side of the checking has gone, and the fourth is the time the institutions of mathematics require before any of this counts as settled.

<!-- stat-card -->
**175,187** — Lean source files released — Around 17 million lines, 239.3 MB compressed

<!-- stat-card -->
**250,000 pages** — Length if written out for human readers — Alpöge's own estimate, and his reason for not writing one

<!-- stat-card -->
**3 axioms** — Assumptions the core theorems rest on — Sutherland confirmed nothing hidden beyond Lean's three standard axioms

<!-- stat-card -->
**2 years minimum** — Public scrutiny required for a Millennium Prize — Peer-reviewed publication comes first, and that clock has not started

## A Four-Page Note and 175,187 Lean Files

What Alpöge put on his own website on November 20 was four pages long. It says he believes he has found a proof of the Riemann Hypothesis together with Claude, and the proof itself is not in it. What came with it instead were 175,187 source files written in Lean 4. They take up 239.3 MB compressed, more than 61.5 GB unpacked, and run to roughly 17 million lines. He discussed the release with Anthropic chief executive Dario Amodei beforehand, according to reporting.

The missing human-readable account was not an oversight. Alpöge said that writing this proof out in ordinary mathematical prose would take more than 250,000 pages, and that what came out of that exercise would not be worth reading. So the only published form of the proof is code that machines read.

The Riemann Hypothesis is a conjecture Bernhard Riemann arrived at in 1859 while trying to describe how prime numbers are distributed. It says that every non-trivial zero of the Riemann zeta function sits on a single line, the one where the real part is 1/2. If that holds, we can say far more precisely than we can today how primes scatter along the number line. For 167 years nobody has shown it either true or false, and in the meantime hundreds of theorems have been built on top of it by assuming it. This is the statement Alpöge says he has proved.

The scope is not the Riemann Hypothesis alone. Alpöge claims the work also covers the broader Generalized Riemann Hypothesis, which is a claim not about the zeta function on its own but about a whole family of functions defined the same way. The last piece reportedly fell into place on the night of November 15. He has described Claude as handling algebraic manipulation, trace formulas and technical lemmas, and as blowing past him entirely near the finish line. Which model was used has not been disclosed.

The response came within a day. Andrew Sutherland of MIT took the code and recompiled it independently, confirming that all 175,187 modules go through without errors. He also confirmed that five core theorems assume nothing beyond Lean's three standard axioms. Sutherland called it a historic moment.
