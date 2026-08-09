---
title: The Proof Was Right. How It Got There Wasn
subtitle: The verification and provenance gap in AI mathematics, exposed by the Jacobian conjecture counterexample
date: 2026-08-09
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Proof Was Right. How It Got There Wasn

_The verification and provenance gap in AI mathematics, exposed by the Jacobian conjecture counterexample_

## Executive Summary

> [!callout]
> On a Sunday in July 2026, a mathematician posted a single three-variable polynomial map to social media. The Jacobian conjecture, open since 1939, was finished. The mathematical community accepted the counterexample that afternoon, and by the time a mathematician in London woke the next morning, a machine-checked verification was already done. The speed was startling. But it came from the nature of the object at hand. The counterexample was finite and exact, something anyone could recompute for themselves.

> The trouble starts after that. No record was released of which prompt produced it, how many attempts it took, or where the human intervened. Two weeks later another lab announced that it had solved ten open problems, and this time it published formal proofs and a narrative of the model's reasoning alongside them. The mathematician who had posed one of those problems said it gave him no understanding at all. We can confirm that a result is true, and nobody can reconstruct how it got there. **Checking whether a result is true and recording how it came to be are two different jobs, and only the first one is built.**

> So what mathematics is now building for itself is a norm for record-keeping. Comparison tables in formalization papers have grown a new column asking whether the logs were published, and at least one benchmark admits a system only if it can release its full logs and code. So far that column has one box filled out of nine. None of this is a story about mathematics alone. If output has outrun provenance infrastructure in the most rigorous verification culture on earth, then in looser fields it happened a long time ago.

<!-- stat-card -->
**87 years** — How long the Jacobian conjecture held — From Keller's 1939 statement to the 2026 counterexample, with at least five announced proofs that later collapsed

<!-- stat-card -->
**1 day vs 18 months** — The asymmetry in verification time — The counterexample was machine-checked by the next morning; a prime-number-theorem formalization sat unfinished for 18 months in human hands

<!-- stat-card -->
**1 of 9** — Formalization projects that published their logs — The comparison table now has a “logs released” column, and exactly one box in it is filled

<!-- stat-card -->
**0.1%** — Papers that explicitly disclosed AI use — 70% of journals have a disclosure policy, yet only 76 out of 75,000 papers disclosed

## The day 87 years ended in one line

On Sunday, July 19, 2026, the Harvard mathematician Levent Alpöge posted a short message on X: “hello there the jacobian conjecture is false thanx.” Between the greeting and the misspelled thanks sat a single three-variable polynomial map. That was the whole announcement. The Jacobian conjecture, which mathematicians had believed true for 87 years, became false with that one post.

You can state what the conjecture claimed without any mathematics. John D. Cook's headline about the episode is exactly the statement. **Locally invertible everywhere does not imply globally invertible.** Take a map defined by polynomials, and suppose that if you zoom in far enough anywhere, it can be undone at every point. That is what the condition “the Jacobian determinant is a nonzero constant” means. The conjecture said this local property lifts to a global one, so the map as a whole is one-to-one. Can a map that never folds up close still overlap when you step back? For 87 years nobody found an overlap.

This counterexample shows the overlap with three points. There is a degree-7 polynomial map F from complex 3-space to itself whose Jacobian determinant is the constant −2, so the hypothesis is met exactly. Yet three distinct points, (0, 0, −1/4), (1, −3/2, 13/2) and (−1, 3/2, 13/2), all land on the same point (−1/4, 0, 0). It is not one-to-one. Terence Tao reconstructed the map on his own blog and stated the conclusion: there exists a map F : ℂ³ → ℂ³ that has a nonzero constant Jacobian and is nevertheless not invertible.
