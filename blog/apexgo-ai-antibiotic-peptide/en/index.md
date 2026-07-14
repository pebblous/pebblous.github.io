---
title: AI-Designed Antibiotic Peptides Matched a Last-Resort Drug in Mice
subtitle: Penn
date: 2026-07-15
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI-Designed Antibiotic Peptides Matched a Last-Resort Drug in Mice

_Penn_

## Executive Summary

> [!callout]
> Drug candidates designed by generative AI usually look good inside a computer and then fall apart in the lab. This time they didn't. ApexGO, built by César de la Fuente and Jacob Gardner's team at the University of Pennsylvania, started from antimicrobial peptides mined from extinct animals and edited them into new candidates — candidates that moved past the test tube and worked like medicine in living mice. This article looks less at the result itself and more at why the model's optimism was not betrayed in the lab this time, through the lens of data design.

> One number captures how unusual this is. 85% of the peptides the AI edited stopped bacterial growth in a test tube. When you optimize a generative model against the scores of another model, you usually get candidates that only look convincing inside a simulation — yet here most of them reproduced in real wet-lab experiments. Beyond that, in a mouse model infected with a multidrug-resistant pathogen, two of the optimized peptides matched or exceeded polymyxin B, an antibiotic often called the drug of last resort.

> What made the difference was not a bigger model but data design: verifiable activity data, the constraint of repeatedly editing a template, and selection that narrows what gets tested using uncertainty estimates. These three things pulled the generate-and-predict loop out of the computer. Set the result beside the opposite case we covered last month — a drug-discovery AI that overestimated activity because it learned only from successes — and the contrast comes into focus.

### Key Figures

The core of the study compresses into four numbers: the share that stopped bacterial growth in a test tube, the share that beat their original templates, the benchmark the peptides reached in an infected-mouse model, and the number of template peptides that served as the starting point for editing.

Source: [Nature Machine Intelligence (2026)](https://www.nature.com/articles/s42256-026-01237-5), [NIH Research Matters](https://www.nih.gov/news-events/nih-research-matters/ai-tool-could-speed-antibiotic-development)

<!-- stat-card -->
**85%** — Halted growth — Share of AI-edited peptides that inhibited bacteria in a test tube

<!-- stat-card -->
**72%** — Beat the original — Share more potent than the template they started from

<!-- stat-card -->
**Polymyxin B** — Mouse-model efficacy — Two peptides matched or exceeded the last-resort drug's bacterial reduction

<!-- stat-card -->
**10** — Template peptides — Editing starting points from extinct animals such as mammoth and ground sloth

## An AI Antibiotic That Worked in Mice

Antimicrobial resistance is a threat that grows quietly. Peptide antibiotics like polymyxin B and colistin remain the effective last card against multidrug-resistant Gram-negative bacteria. New candidates are needed fast, but synthesizing and testing them one by one in the lab is slow and expensive. ApexGO, built by César de la Fuente and Jacob Gardner's team at the University of Pennsylvania, is an attempt to break that bottleneck with AI.

The starting point is unusual in itself. In earlier work, this team mined the ancient proteomes of extinct creatures such as the mammoth and the ground sloth as a quarry for antibiotic candidates. ApexGO takes ten of those recovered antimicrobial peptides as templates and lets the AI edit their amino-acid sequences little by little to produce better candidates. The results showed up on two levels. In the test tube, 85% of the AI-designed peptides stopped bacterial growth, and 72% were more potent than the original templates.

![Woolly mammoth skeleton at the Smithsonian, one of the extinct animals ApexGO mined antimicrobial peptide templates from](./image/img-01-mammoth-skeleton.jpg)
*▲ Woolly mammoth skeleton at the Smithsonian National Museum of Natural History — one of the extinct animals ApexGO's template peptides were mined from | Source: [Wikimedia Commons (Kevin Burkett, CC BY-SA 2.0)](https://commons.wikimedia.org/wiki/File:Smithsonian_woolly_mammoth.jpg)*
