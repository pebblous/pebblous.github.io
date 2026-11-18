---
title: China
subtitle: Reuters reviewed over 300 Chinese papers, patents and job ads, and the paper it singled out closes by criticizing distillation
date: 2026-11-18
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# China

_Reuters reviewed over 300 Chinese papers, patents and job ads, and the paper it singled out closes by criticizing distillation_

## Executive Summary

> [!callout]
> Chinese researchers and companies ask a leading US model for answers and feed those answers to a smaller domestic model as training material. That work has left the experiment stage and become a production process. Reuters reported it exclusively on 17 November, after reviewing more than 300 Chinese academic papers, patents, corporate disclosures, recruitment notices and government documents. Software automates the collection of the answers, and there are staff assigned to nothing else.

> The documents Reuters counted were never hidden, though. They were published as papers, filed as patents, posted as job ads. And the paper the report held up as its leading example happens to be the one that criticizes distillation at the greatest length, and the one that built a scorecard for whether a project records where its data came from. Scored on that card, five of seven attempts in the same field came out at zero on the data-source item.

> What these teams are doing fills public documents to overflowing. Which model the answers came out of, and which model they went into, is the part that does not stay with the model. So the question a reader is left with is not who took something in secret. It is what the model we picked up was trained on, and where the fact that our own synthetic data came from another model's output gets written down.

<!-- stat-card -->
**5 of 7** — o1 replication attempts scoring zero on data source — Scored on the card the paper itself built. The limit is that the authors also graded their own work

<!-- stat-card -->
**300+** — Chinese documents Reuters reviewed — Papers, patents, corporate disclosures, job postings and government documents. Not one of them confidential

<!-- stat-card -->
**13 vs 12** — AIME2024, 30 problems: distilled model against o1-preview — o1-mini solved 21 in the same table. The margin behind "surpassing" is one problem

<!-- stat-card -->
**69.08 → 62.65** — Chinese factuality after distillation fine-tuning — They distilled to build a Chinese-language model, and of nine metrics this is the one that fell furthest

## The 300 Documents Reuters Reviewed Are All Public

The exclusive Reuters filed from Shenzhen on 17 November rests on a review of more than 300 documents out of China. The article states its own scope: "A Reuters review of more than 300 Chinese academic papers, patents, corporate disclosures, recruitment notices and government documents reveals how the practice — known as distillation — has expanded beyond academic experiments into mainstream industrial use in China." Five kinds of document, and every one of them sat where anyone could pick it up.

Distillation means asking a large model for answers and using those answers as training material for a smaller one. The technique is not new, and why it leaves the distiller leaning on whoever holds the original data was the subject of an earlier report, [You Can't Buy Sovereignty by Distilling It](/report/ai-distillation-sovereign-data/en/). What this story adds is not the technique but **the way the work is now run**. The records Reuters read describe Chinese researchers getting answers out of US models, generating code and finding solutions to hard problems, while Chinese companies build software that automates that loop and assign dedicated staff to refine the training material for their own smaller models. That is what "industrial scale" means here. Work one person used to do by hand, query by query, now has someone who owns the process.

Where this meets export controls is plain enough. Withhold advanced chips and compute goes down; copy down the answers another company's model produces and training data goes up. Reuters wrote that widespread distillation lets Chinese developers build capability on **US output** rather than US silicon, which blunts the effect of limiting chip sales. There are two channels, and the controls sit on one of them.
