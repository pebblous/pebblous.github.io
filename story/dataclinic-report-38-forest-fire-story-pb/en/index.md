---
title: The AI That Read a Clear River as Smoke
subtitle: A DataClinic Diagnosis of 15,751 Forest Fire Images
date: 2026-06-09
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The AI That Read a Clear River as Smoke

_A DataClinic Diagnosis of 15,751 Forest Fire Images_

## Executive Summary

> [!callout]
> This story is built on the analysis in **[DataClinic Report #38](https://dataclinic.ai/report/38)**.
>                             The subject is **Forest Fire**, a wildfire image dataset published on Kaggle. It holds three labels — fire, smoke, and normal — across **15,751 images** in total. But of these photos gathered to detect fire, **82.8% were smoke**, while actual fire came to just 7.2% (1,127 images). The thing that most needs to be detected was collected the least.

> DataClinic first views the data through a 1,280-dimensional general-purpose lens (L2), then looks again through a specialized lens (L3) that keeps only the **17 dimensions** that actually help tell the classes apart. This compression pulled apart a boundary where smoke and normal had been almost fully overlapping. And yet two scenes refused to resolve. The third "most smoke-like" view the AI found was a **clear river with not a wisp of smoke** (normal_457), and the fire it judged "least fire-like" was a **grassland blaze** buried under smoke (fire_392).

> These two scenes foreshadow two failures pointing in opposite directions. A wildfire AI trained on this data will raise false alarms over a clear sky (false positives) and miss a grass fire that has just begun to spread (false negatives). In wildfire detection, where a miss costs lives and a false alarm costs trust, two opposite dangers sit side by side inside a single dataset. From here, we pull those two borderline scenes out one at a time, straight from the dataset's own images.

15,751

Total images

3 classes: fire · smoke · normal

82.8%

Smoke share

13,045 images — majority class

7.2%

Fire share

1,127 images — rarest

1,280→17

Dimension optimization

~75× compression (L2→L3)

※ DataClinic's composite score and grade require authenticated access, so this story does not cover them. The diagnosis is based on the publicly available L1, L2, and L3 analysis content.

## Forest Fire: 15,751 Images — What Was Collected

## Three Average Faces — Level 1

## What 1,280 Dimensions Saw — Level 2

## Compressed to 17 Dimensions — Level 3

## The 'Normal' That Looked Most Like Smoke — Seed of False Positives

## The 'Fire' That Looked Least Like Fire — Seed of False Negatives

## Two Faces of Wildfire AI — If This Were Live

## Conclusion — On Diagnosing the Ambiguity of Real-World Data

| Axis | #38 Forest Fire (this story) | #225 Military 3-class |
| --- | --- | --- |
| Classes | fire / smoke / normal | self-propelled gun / truck (covered) / truck (uncovered) |
| Data nature | Real photos · web-collected (Kaggle) | Synthetic · curated |
| Class balance | Severe imbalance (smoke 82.8%) | Balanced by design (equal per class) |
| Boundary ambiguity | smoke↔fog↔normal blur naturally | Per-angle subclusters (controlled by design) |
| Duplicates | Many consecutive frames | Controlled |

## References

- 1.Kutlu, K. (2020). [Forest Fire](https://www.kaggle.com/datasets/kutaykutlu/forest-fire). Kaggle.
- 2.Pebblous. (2026). [DataClinic Diagnosis Report #38: Forest Fire](https://dataclinic.ai/report/38). Pebblous Inc.
