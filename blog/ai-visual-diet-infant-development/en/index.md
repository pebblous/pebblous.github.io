---
title: We Fed AI Blurry Grayscale First — and It Started Seeing Shape
subtitle: It wasn
date: 2026-07-02
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# We Fed AI Blurry Grayscale First — and It Started Seeing Shape

_It wasn_

## Executive Summary

> [!callout]
> For the first few months of life, a human infant lives in a blurry, black-and-white world. Visual acuity, color vision, and the ability to tell light from dark all open slowly, over months. When we train an AI vision model, we do the opposite: we pour in sharp, full-color images at full resolution from day one. A 2026 study in _Nature Machine Intelligence_ suggests that difference may have been the problem all along. The point was not more data. It was a different order — feeding the model in the sequence a baby comes to see the world.

> The team created no new data. They filtered existing images so the training set moved from blurry to sharp, from grayscale to color, from low contrast to high — reproducing an infant's developmental order as a curriculum, nothing more. The result was the strongest shape bias reported to date, together with an eye that held up better against image corruption and adversarial attack. In a related study, shuffling that order at random pulled the effect all the way back to baseline.

> The Pebblous blog has argued more than once that clean data is not the same as usable data. This study pushes that argument one step further. Refining data until it is usable turns out not to be enough; what you expose, and in what order, is what builds robustness. It is a case for reading data quality not as a state (clean) but as a trajectory (curriculum).

<!-- stat-card -->
**22%** — Standard CNN shape bias — The other 78% leans on texture — fragile to corruption and attack

<!-- stat-card -->
**19.8→29.1%** — Shape bias (CATDiet) — +9.3 pts once fed in infant order

<!-- stat-card -->
**25.0→18.8%** — Corruption error (mCE) — VAC curriculum, improved on CIFAR-10-C

<!-- stat-card -->
**Shuffle → 0** — Effect vanishes — Random order regresses to baseline — the order itself is the point

## The Chronic Flaw in AI Vision — It Sees Texture, Not Shape

When we say an AI recognizes a cat, we tend to assume the model is looking at what a cat looks like. Often it isn't. A standard CNN trained on ImageNet leans on surface texture more than silhouette when it recognizes an object. It responds first to high-frequency patterns — the fine grain of cat fur, the repeating stripes of a zebra.

Geirhos and colleagues showed this cleanly in 2019. Show a CNN an image with the shape of a cat but the texture of elephant skin, and it answers "elephant." Show the same picture to a person, and most say "cat." When shape and texture conflict, people trust shape and machines trust texture. This is texture bias.

The numbers make the gap plain. A ResNet-50 trained on standard ImageNet has a shape bias of just 22%, meaning the other 78% rides on texture. Even a large Vision Transformer (ViT) sits at only around 55%, well short of the overwhelming shape-first preference people show.

Just how wide that gap is becomes clear when the texture is stripped away. On images that keep the shape cue but remove surface pattern, people held 76% accuracy while the CNN collapsed to 28%. People stay upright on shape when the pattern is gone; the machine, with no texture left to lean on, loses its way.
