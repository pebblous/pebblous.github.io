---
title: A Chest X-Ray Model Latched Onto Chest Drains at Block 13
subtitle: Copenhagen researchers attached 17 probes to MedCLIP
date: 2026-08-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A Chest X-Ray Model Latched Onto Chest Drains at Block 13

_Copenhagen researchers attached 17 probes to MedCLIP_

## Executive Summary

> [!callout]
> The complaint that chest X-ray models grab traces of the imaging room instead of the disease has been repeated for six years. Researchers at PURRlab, IT University of Copenhagen, asked at which depth of the network those traces get picked up, and answered it by freezing MedCLIP's vision encoder and attaching a linear probe to every layer. Posted to arXiv on August 12 and headed for a joint MICCAI 2026 workshop in Strasbourg as a poster, the paper reproduces on real clinical data a layer-wise shortcut pattern that had only been confirmed with synthetic bias.

> The accuracy figures were unremarkable across all three experiments: AUROC 0.839 on NIH-CXR14 pneumothorax and 0.905 on PadChest cardiomegaly. Follow the confidence layer by layer, though, and the curves that overlap through the first twelve blocks pull apart at block 13, with the images containing a chest drain staying on top from there on. A chest drain is not the pneumothorax. It is the mark left by treating one.

> What this article follows is what comes next. Neither NIH-CXR14 nor PadChest records anything beyond the disease name in its labels, so there is no field for a drain or a scanner model. The researchers had to borrow supplementary labels built by hand by another team, and three of the five they checked themselves turned out to be wrong.

### Key Figures

Source: Pedersen, Sydendal, Cheplygina & Sourget, [arXiv:2608.12086](https://arxiv.org/abs/2608.12086)

<!-- stat-card -->
**0.839** — AUROC, NIH-CXR14 pneumothorax — 0.840 on images with a drain, 0.812 on images without one

<!-- stat-card -->
**Block 13** — Depth where the confidence curves split — Through the first 12 blocks all four curves sat below 0.25

<!-- stat-card -->
**Block 3** — Depth where scanner differences spiked — The spike showed in PadChest pneumothorax and settled afterward

<!-- stat-card -->
**3 of 5** — Error rate in the no-drain label — Checked by hand, a drain was visible in the corner of the image

## Nothing looks wrong in the accuracy

Oakden-Rayner and colleagues laid out shortcut learning in chest X-ray models clearly back in 2020. A DenseNet-121 trained on NIH-CXR14 scored an AUROC of 0.940 on pneumothorax images that contained a chest drain, and dropped to 0.770 on images without one. A drain is the tube inserted to treat a pneumothorax, so it tags along with the positive images. The model had learned the mark of treatment rather than the disease, and the pooled average shows none of that split.

MedCLIP, the model in this paper, comes a generation later. It is a vision-language model pretrained on CheXpert, MIMIC-CXR, COVID and RSNA pneumonia data, and the core of its design is loosening the requirement that each image be matched to its own report. Paired images and text are scarce in clinical practice, and strict pairing pushes semantically similar cases into the negative pile for no better reason than the absence of a match. MedCLIP replaces that pairing with semantic similarity drawn from the Unified Medical Language System, which pulls unpaired data into training and scales the corpus up considerably. The outcome is still familiar. Probe accuracy landed at 0.839 for NIH-CXR14 pneumothorax, 0.905 for PadChest cardiomegaly and 0.875 for PadChest pneumothorax, all comfortable numbers.

Calibration is where the comfort ends. All three configurations were overconfident about their own predictions, and PadChest pneumothorax was the worst of them. Calibration was poorest in the IDC scanner group, which also holds the fewest positive cases, so the metric itself is fragile when positives are thin. Earlier work found the same shape: six CLIP-family models performed better on images with a drain and clustered their predicted probabilities near 0.5, while AUROC stayed in the normal range.

Set accuracy, subgroup gaps and calibration side by side across the three configurations and it looks like this.

| Configuration | Global AUROC | Subgroups | Calibration |
| --- | --- | --- | --- |
| NIH-CXR14 pneumothorax | 0.839 | Drain 0.840 / no drain 0.812 | Overconfident, poor overall |
| PadChest cardiomegaly | 0.905 | IDC 0.917 / PMS 0.893 | Best of the three, still overconfident |
| PadChest pneumothorax | 0.875 | IDC 0.852 / PMS 0.801 | Worst overall, IDC group worst of all |

Compiled by Pebblous from the results tables in arXiv:2608.12086. IDC stands for ImagingDynamicsCompany and PMS for PhilipsMedicalSystems, and only PadChest records the manufacturer.

## Confidence measured one layer at a time

A single pooled number cannot tell you what a model was looking at when it got the answer right. So rather than read the finished prediction, the researchers opened up the stages where that prediction gets built, one layer at a time. They froze the ResNet-50 that serves as MedCLIP's vision encoder and attached one linear classifier to each of its 16 internal blocks plus the final average pooling layer. That makes 17 probes, each taking the pooled features and predicting the presence of the finding through a single linear layer. Since the backbone weights never move and only the probes train, a probe that predicts well means the representation at that depth already carries the information.

The training loss is the sum of the cross-entropy of all 17 probes. With the backbone frozen and no weights shared between probes, each probe receives gradients only from its own loss. One layer's result cannot disturb another layer's probe, which is what makes the depths readable separately. All three dataset configurations ran under the same settings: 100 epochs, batch size 32, learning rate 0.00001, with early stopping if validation loss failed to improve for 15 epochs.
