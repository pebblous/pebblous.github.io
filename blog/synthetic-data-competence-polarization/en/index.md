---
title: Training AI on Synthetic Data Polarizes Its Skills
subtitle: Why piling on synthetic data can trail the base model, and how KITE takes aim at a model
date: 2026-07-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Training AI on Synthetic Data Polarizes Its Skills

_Why piling on synthetic data can trail the base model, and how KITE takes aim at a model_

## Executive Summary

> [!callout]
> The story that training a model repeatedly on synthetic data breaks it is by now familiar. Pebblous has covered that risk several times as a matter of the economics of contamination and the price of data. Yet a paper posted to arXiv in July 2026 (arXiv:2607.17043) redraws the **shape** of that collapse. Collapse is not a uniform decay in which the whole rots evenly. It is a polarization of competence: skills that were already good get better, and skills that were already weak get worse.

> The cause lies in the generation process itself. When a model produces its own training data, it draws problems more easily and more often from areas where it is already confident. That bias, compounded across generations, feeds the strong skills while starving the weak ones. In practice, synthetic data scaled by volume alone and without direction (Self-Instruct) landed at 93.79% on GSM8K after five generations, roughly the same as, and arguably below, the untouched base model's 93.63%.

> This piece translates the paper's diagnosis and its fix into the language of data preparation. The fix is called KITE. It first diagnoses which skills are weak, then generates more problems at those points, and finally keeps only the borderline cases whose answers neither collapse to one solution nor scatter into noise. The key to preventing collapse is not pouring in more clean data but selecting fewer examples aimed precisely at the weak spots.

<!-- stat-card -->
**93.79%** — The volume myth — Directionless synthesis (Self-Instruct) at gen 5, near the base model's 93.63%

<!-- stat-card -->
**+2.8pp** — After applying KITE — Llama-3-8B GSM8K 78.3%→81.1%, gains instead of collapse

<!-- stat-card -->
**-1.9pp** — Without weakness targeting — Largest loss in the ablation — aim beats diversity

<!-- stat-card -->
**9 gens** — No collapse — Monotonic rise and saturation through nine generations, no reversal

## Collapse Does Not Arrive Evenly

The picture most people carry of model collapse is a gentle downhill slope. Train across generations on synthetic data, diversity narrows and bias accumulates, and performance slips a little across the board. That image of the whole eroding uniformly is intuitive, but it did not match what this study found when it looked at the level of individual skills.

The researchers split GSM8K problems by the skills they require, then compared Llama-3-8B-Instruct's mastery before and after fine-tuning on synthetic data. Collapse, it turned out, did not run evenly in one direction. Skills that were already strong grew stronger, and skills that started weak grew weaker. The paper pins this down not as uniform decay but as a **polarization of competence**.

| Skill | Base model | After synthetic training |
| --- | --- | --- |
| Data & financial calculation | Strong | Stronger ↑ |
| Money & finance | Strong | Stronger ↑ |
| Algebra | Weak | Weaker ↓ |
| Time & schedule calculation | Weak | Weaker ↓ |

The same training splits the fate of each skill. This distinction matters because it changes the diagnosis and the prescription entirely. If collapse were uniform, cleaning out contamination would be enough. But if collapse is rich-get-richer, no amount of filtering keeps the weak skills from staying starved and setting hard. The problem is not cleanliness but distribution.

> [!callout]
> **The core observation**: The risk of iterative training on synthetic data is not that everything slowly worsens, but that the gap widens while the good stays good and the poor stays poor. Look only at the average score and this polarization barely shows.

## Why the Strong Get Stronger

Why does it tilt in only one direction? The answer lies in how the data gets made. When a model generates the problems and answers it will feed itself, generation flows toward what is more probable. And high probability is exactly where the model is confident, and the areas it is confident in are the ones it already handles well. So generating without constraints pulls problems from the strong skills more easily and more often.

What follows is a self-reinforcing loop. Strong skills receive more training signal and grow stronger, while weak skills generate little data in the first place and grow weaker for want of signal. This is a different kind of problem from contamination, where the statistics of real and synthetic data drift apart. It is not that the data is dirty; it is that the hand drawing the data leans toward the strong side, a sampling bias.
