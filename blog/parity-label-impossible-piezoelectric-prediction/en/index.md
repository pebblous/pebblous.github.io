---
title: Materials Models Are Predicting Piezoelectric Coefficients That Must Be Zero
subtitle: What happened when NequIP, Allegro and MACE were rebuilt without parity labels and tested on 2,000 centrosymmetric crystals
date: 2026-08-23
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Materials Models Are Predicting Piezoelectric Coefficients That Must Be Zero

_What happened when NequIP, Allegro and MACE were rebuilt without parity labels and tested on 2,000 centrosymmetric crystals_

## Executive Summary

> [!callout]
> Whether a neural network for material properties can produce a physically impossible value is settled before training begins. A paper posted to arXiv on 19 August demonstrates it experimentally. The fork is a single bit: whether the model's internal features carry parity labels, which record whether a quantity flips sign when you invert the coordinates. The authors built NequIP, Allegro and MACE in two arms each, sharing one architecture, one data pipeline and one set of seeds, differing in that bit alone.

> The test property is the piezoelectric tensor of centrosymmetric crystals. This is not a quantity expected to be small; symmetry pins it to exactly zero, so a nonzero prediction is not an inaccuracy but a physical impossibility. The labelled arms stayed at the floating-point floor on all 2,000 crystals. The unlabelled arms crossed the threshold on 90 to 96 percent of them, and the size of what they crossed with matched the size of the genuine piezoelectric tensors sitting in the training data. These read as real responses, not as numerical residue.

> The trouble starts with what came next. Training on explicit zeros did not recover exactness, and weighting those rows a hundredfold in the loss reduced the violations without removing them. A readout head placed on the frozen features of a public universal potential simply inherited whatever symmetry group the backbone had. Some errors leave nothing further for the data side to do.

### Key figures

The four numbers mark the size of the error, the distance between the two arms, the part that data does not close, and how widely this design bit is spread.

Source: Polat et al., [arXiv:2608.18714](https://arxiv.org/abs/2608.18714) (19 Aug 2026)

<!-- stat-card -->
**90-96%** — Violation rate without parity labels — The share of 2,000 centrosymmetric crystals given a nonzero piezoelectric coefficient, against 0% for the matched labelled arms

<!-- stat-card -->
**2 million×** — Ratio of the two NequIP medians — The distance opened between two models sharing their architecture, data and seeds and differing in one parity bit

<!-- stat-card -->
**0.895 → 0.858** — Violation rate after 64× more zero labels — Going from 250 to 16,000 zero-labelled crystals shrank the violations 8.6-fold while the share of crystals violating barely moved

<!-- stat-card -->
**6 of 12** — Architectures carrying parity labels — An audit of 18 released architectures found labels in half of the 12 that can emit a rank-3 tensor, and in no model card

## In a centrosymmetric crystal the coefficient is exactly zero

A crystal's macroscopic properties have to survive every symmetry operation the crystal possesses. That is Neumann's principle, and it dates to the nineteenth century. The piezoelectric tensor is the kind of quantity that flips sign when coordinates are inverted through the origin, and a centrosymmetric crystal carries that inversion as one of its own symmetry operations. So the tensor must be unchanged under inversion and sign-reversed at the same time. Only one value satisfies both. This is an algebraic consequence of symmetry, not an empirical trend.

What makes the property useful for validation is that you can check it without computing the answer. Of the 230 space groups, 92 are centrosymmetric, so gathering those crystals gives you a large population where wrong answers can be identified with no labels and no reference calculation. Any nonzero value there is a confirmed error on its own terms.

The symmetry debate in machine learning has mostly run on rotations. Turn a molecule and the prediction should turn with it, and a model that breaks the requirement is somewhat wrong. That is a question of approximation. Inversion asks for something of a different order. Here exactly one answer is permitted, and a model that cannot produce it is not slightly off; it reports a property that cannot exist.

### 1.1. The parity gap names the exposed cases in advance

The paper's theoretical contribution is a quantity that computes, from group theory alone, which properties and which crystals are exposed. The authors call it the parity gap. It is the number of tensor components allowed when you account for rotations only, minus the number allowed once inversion is counted too. Where the gap is zero, rotation symmetry already forces the zero and parity labels are unnecessary. Where it is positive, parity is the only thing that can hold those components down.

The census is clean. Even-rank properties such as permittivity have a gap of zero everywhere, so they are exempt from the outset, and the elasticity tensor is exempt for the same reason. At rank 3, where the piezoelectric tensor lives, only one of the 11 centrosymmetric crystal families has a gap of zero, the cubic class m3̄m, and the other ten are all positive. In triclinic 1̄, the least symmetric case, the gap runs to 18, which leaves every independent component of the piezoelectric tensor resting on parity alone. Of the 2,000 crystals in the evaluation population, 91.7% sat in the positive-gap region and 8.3% in the safe m3̄m class.
