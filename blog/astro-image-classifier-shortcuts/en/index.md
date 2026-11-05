---
title: An Astronomical Image Classifier Still Gets Three in Four with the Galaxy Erased
subtitle: Across 370 objects, balanced accuracy holds between 0.73 and 0.80 when the center of the image is blacked out, and a model that sees no image at all reaches 0.72
date: 2026-11-06
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# An Astronomical Image Classifier Still Gets Three in Four with the Galaxy Erased

_Across 370 objects, balanced accuracy holds between 0.73 and 0.80 when the center of the image is blacked out, and a model that sees no image at all reaches 0.72_

## Executive Summary

> [!callout]
> The report card of an AI that sorts astronomical photographs into four classes may have little to do with how the objects look. Eraldo Pereira Marinho posted the re-evaluation to arXiv on November 4. It takes a classifier that separates galaxies, globular clusters, nebulae and open clusters, and measures it again on AstroClassifier, a dataset of 370 physical objects. The images come from the Digitized Sky Survey (DSS).

> Three subtractions sit at the center of the work. Change the architecture. Black out the object in the middle of the frame. Withhold the image entirely. None of the three brought the score down far. With the center zeroed, balanced accuracy never fell below 0.73, and a plain statistical model that saw no photograph at all, only the acquisition record and catalogue properties, landed in almost the same place. Guessing at random on a four-class task gives 0.25. The author's conclusion is that high accuracy cannot be read as evidence that a classifier learned the shapes of the objects.

> Sections 1 through 5 follow what the work measured and what its author declined to claim. Section 6, which moves the result onto the people who build evaluation data, is this article's reading rather than the paper's.

### Key numbers

Source: Marinho, [Object-independent evaluation of small-data astronomical image classifiers](https://arxiv.org/abs/2611.06484), arXiv:2611.06484 (2026).

<!-- stat-card -->
**0.007** — Distance between ResNet-50 and ViT-B/16 — The 95% interval runs from −0.048 to 0.062 and contains zero. Nothing here picks a winner

<!-- stat-card -->
**0.731–0.800** — Balanced accuracy with the object masked — The central 128×128 pixels set to zero, and the four classes asked again

<!-- stat-card -->
**0.721–0.735** — Score of the control that sees no image — Five numbers from the acquisition record and the catalogue, fed to logistic regression and a depth-3 tree

<!-- stat-card -->
**0.5827** — Share of field-of-view variance explained by class — Knowing the class alone accounts for more than half of how wide the exposure was

## Two Architectures, One Score

The comparison set an ImageNet-pretrained ResNet-50 and an ImageNet-pretrained ViT-B/16 against a custom CNN–Transformer hybrid trained from scratch. Three seeds were fixed in advance. On the test set, every prediction was written down once before an independent scoring step was allowed to open the labels. Taking the same exam several times and keeping the best attempt was ruled out by design.

Scores are kept in balanced accuracy, the mean of the four per-class recalls, so a class with more examples cannot pull the number toward itself. Random guessing gives 0.25. On the adaptive view, which leaves each object's own field of view intact, the three models reached 0.773 ± 0.014, 0.874 ± 0.054 and 0.866 ± 0.023. Only the model trained from scratch comes in a step lower; the two pretrained references land together.

The two are 0.007 apart. The 95% cluster-bootstrap interval around that difference runs from −0.048 to 0.062. Since it contains zero, nothing supports calling either model the better one, and across nine randomization tests under Holm correction not a single comparison rejected its null.

The visible gap lies elsewhere. The model trained from scratch trails at 0.773, and the class where it trails most clearly is nebulae. It got 27.5% of them right and sent 51.0% of them to the open-cluster class. On that same class ResNet-50 managed 76.5% and ViT-B/16 80.4%.

For that gap, several bootstrap intervals excluded zero while no test survived Holm correction. Marinho does not treat the mismatch as a contradiction. Unadjusted intervals around individual contrasts and a family-wise error rate across nine tests answer different inferential questions. The gaps therefore stay descriptive effect estimates rather than adjusted evidence that one architecture is superior.

Nor can the gap be credited to architecture. Only the custom model started out without ImageNet weights. Whatever advantage the two pretrained references hold mixes architecture together with parameterization, optimization and transfer learning. That is the sentence the abstract closes on: the comparison does not isolate architecture from pretraining.

> [!callout]
> The author steps back one pace here. Once overlapping fields are grouped, the 73 test objects collapse into 61 independent assignment units. The sample is that small, which is why the intervals are wide, and a failure to reject becomes evidence of uncertainty rather than of equivalence. The accurate reading is not that the two models are equally good, but that this test cannot tell them apart.

## The Cost of Erasing the Object

Images reach the models in two forms. The first keeps the original 512×512 field and shrinks it by exact area averaging. This is the adaptive view, and in it each object keeps the field of view it was photographed with, anywhere from 5 to 120 arcminutes. An arcminute is a small unit of angle: the full Moon is about 31 arcminutes across, so 5 arcminutes is a sixth of the Moon and 120 is four Moons laid side by side. The second form resamples every object onto a common 4-arcminute field, which wipes those differences out.

The masked controls black out the middle of each form. In the adaptive view the central 128×128 pixels are set to zero; in the common field the central 4×4 cells of the effective 16×16 grid are zeroed. Even the percentile stretch that sets the contrast is computed on unmasked pixels only. The place where the subject stood is cut out of the photograph and the background is left behind.
