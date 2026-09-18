---
title: When AI Reads the Charts in Research Papers, What Goes Missing?
subtitle: A Rochester-led team
date: 2026-09-19
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When AI Reads the Charts in Research Papers, What Goes Missing?

_A Rochester-led team_

## Executive Summary

> [!callout]
> This article looks at a study that pulled experimental records back out of the figures they had been locked inside. Afnan Mostafa and Niaz Abdolrahim of the Department of Mechanical Engineering at the University of Rochester, William Ratcliff of the NIST Center for Neutron Research, and Simon Billinge of the Department of Materials at UC Santa Barbara posted it to arXiv on 16 September and revised it once the following day. They call the framework ERAF4XRD, for Experiment Reader Agentic Framework for X-Ray Diffraction.

> Of the 3,150 candidate figures pulled from 273 materials-science papers, only 282 turned out to be genuine X-ray diffraction plots. Finding them meant sorting roughly one real figure out of every eleven candidates, and the best model reached 98.7% accuracy at that job. The system then attached 1,400 values across 22 fields to the figures it kept. When a person rescored 443 of those fields by hand, precision came out at 98.5%, and not a single value appeared that the source document did not support. The twist sits on the other side of the ledger. Recall of 90.7% points to 35 misses, and those misses did not scatter. They gathered in lattice parameters, radiation type and wavelength, the conditions you would need to run the measurement again.

> Sections 1 through 4 follow the design, the numbers and the limits the authors set out for themselves. Section 5 reads the result more broadly, as a question about reusing the data a laboratory already owns. That reading is ours, and where the paper says something similar, we say so.

### Key Numbers

Source: [Mostafa, A. et al. (2026), arXiv:2609.18583v2](https://arxiv.org/abs/2609.18583) · per-field scored counts from Figure 5 of the same paper

<!-- stat-card -->
**98.7%** — Accuracy at picking out XRD figures — Only 282 of 3,150 candidates were real. GPT-5.2 hit this accuracy on a pool where about one figure in eleven qualified

<!-- stat-card -->
**1,400** — Values that survived validation — Spread across 22 fields. What remains after 71 unsupported values were stripped from an initial 1,471

<!-- stat-card -->
**98.5% ↔ 90.7%** — Precision and recall — Measured on 443 fields rescored by hand. Nearly all the values it reported held up, so the gap is in what never got written down

<!-- stat-card -->
**10 of 35** — Misses in lattice parameters — The biggest single pile by count. As a rate it looks milder, because 48 values were scored in that field

## Decades of measurements survive only as pictures

The first sentence of the abstract states the problem the study set out to solve. The scientific literature holds decades of experimental measurements, and those measurements remain hard to reach as structured data for modern AI and data-driven research. Half the difficulty is that the information never sits in one place. The measurement lives in a figure, what the figure measured lives in the caption, how the sample was made lives in the body text, and the rest of the conditions live in a table. Each piece has to be found, joined to the others and checked against the source before any of it becomes reusable.
