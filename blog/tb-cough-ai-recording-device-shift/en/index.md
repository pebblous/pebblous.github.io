---
title: Recording Devices Drove What TB Cough AI Predicted
subtitle: EPFL researchers swapped three public TB cough datasets for training and validation, and ROC-AUC fell from 0.755 to 0.581
date: 2026-08-28
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Recording Devices Drove What TB Cough AI Predicted

_EPFL researchers swapped three public TB cough datasets for training and validation, and ROC-AUC fell from 0.755 to 0.581_

## Executive Summary

> [!callout]
> Models that screen for tuberculosis from the sound of a cough have long been floated as a cheap triage tool. In 2024 alone an estimated 10.7 million people developed TB and 1.23 million died. Confirmatory diagnosis needs sputum-based molecular and microbiological testing plus chest imaging, and the places carrying the heaviest burden are the least able to run that equipment consistently. Early studies reported ROC-AUC around 0.95 inside their own datasets, and later work cleared 0.85 without much trouble. Almost all of those numbers came from small private datasets validated only against themselves. A paper posted to arXiv on August 26 by researchers at EPFL and the Basque Center for Applied Mathematics took three public TB cough datasets and swapped them for training and validation.

> The deep learning model trained on the Zambia data reached 0.755 inside its own dataset and 0.581 once it was carried over to CODA, a collection pooled from seven countries across Asia and Africa. Tracing the collapse led into the feature space, where the audio representations clustered by recording device and dataset source rather than by TB status. What the model had hold of was not the sound of the disease but the record of where and on what hardware that sound was captured.

> The familiar explanation is that people differ from country to country, so performance drops. The paper answers that explanation with a control. A logistic regression using only questionnaire variables such as age, sex, and HIV status faced the same cohort differences and still transferred more stably.

### Key Figures

Source: Zhang et al., [arXiv:2608.25846](https://arxiv.org/abs/2608.25846) (2026-08-26)

<!-- stat-card -->
**0.755 → 0.581** — ROC-AUC of the Zambia-trained model — The first value was measured inside its own dataset, the second by applying the same model to CODA

<!-- stat-card -->
**1.20 · 1.30** — Slope of predicted probability on country disease rate — Values for the TB-negative and TB-positive groups in the challenge-replication setting, with R² of 0.95 and 0.89

<!-- stat-card -->
**0.732** — Held-out device performance after training on three devices — Single-device training ran from 0.655 to 0.725, while subject counts moved only from 642 to 650

<!-- stat-card -->
**0.655–0.711** — External ROC-AUC of the questionnaire-only model — It held that range in the same settings where the acoustic model dropped below 0.6

## 0.755 Inside, 0.581 Outside

Three public TB cough datasets supply the raw material. CODA was assembled for a TB diagnosis challenge and holds Android smartphone recordings from 2,143 outpatients across India, Madagascar, the Philippines, South Africa, Tanzania, Uganda, and Vietnam, with the phone model differing from country to country. TBscreen was collected in a controlled recording room in Nairobi, Kenya, capturing 195 adults simultaneously on a smartphone, a boundary microphone, and a condenser microphone, and it keeps coughs that happened on their own separate from coughs produced on request. The Zambia CIDRZ data is the same data behind Google's HeAR benchmark, recording the same coughs from 599 adults on one professional audio recorder and three smartphones at once. In all three datasets the TB label rests on a microbiological reference standard such as sputum Xpert testing and culture.

The released data was not used whole. From CODA the researchers kept only Vietnam, Madagascar, and Tanzania, the countries where a single phone model was used consistently, and within those they kept only solicited coughs so that device effects could be read cleanly. In TBscreen, passive coughs went to training and forced coughs to validation only, because the original study found the two types behaved differently and models trained on passive coughs did not transfer well to forced ones. In Zambia one site with a single TB-positive participant was dropped, and the audio recorder subset, being a small portion of the data, was used for validation only. CODA itself was released as roughly half of the full collection, so the volume that actually entered the analysis is smaller than the participant counts quoted above.

The appendix table that counts only the analyzed subsets shows how far apart the TB-positive rates already are. The Chawama site in Zambia runs 9 to 10 percent depending on the device, and Kanyama runs 21 to 22 percent. Inside CODA the split is Tanzania 16 percent, Vietnam 40 percent, Madagascar 48 percent. TBscreen, which recruited TB patients alongside controls with other respiratory illnesses, sits at 70 to 74 percent for passive coughs. What a model meets when it crosses from one dataset to another is not only a difference in sound.

The validation design closed off the usual ways of inflating a score. Within-dataset performance came from nested cross-validation with 5 outer folds and 4 inner folds, repeated twice for 10 estimates reported as a mean and standard deviation, and every split was cut at the subject level rather than the cough level. Several coughs from one person landing on both sides of a split would push the score up. Model selection also happened only inside the training dataset, and the chosen configuration was carried to the other datasets and applied once.

The classical machine learning pipeline reached 0.700 on Zambia, 0.711 on TBscreen passive cough, and 0.631 on CODA within each dataset. In the deep learning pipeline, a VGGish backbone fed with mel spectrograms worked best, and the Zambia-trained model produced this study's high mark at 0.755. The problem starts there. Applying that same model to the Zambia audio recorder subset gave 0.717 and to TBscreen forced coughs 0.741, but TBscreen passive coughs returned 0.632 and CODA returned 0.581. Models trained on TBscreen or CODA scored below 0.6 on every external target.
