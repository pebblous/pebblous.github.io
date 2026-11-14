---
title: Heirloom Asks the Old Model What Your Phone Learned About You
subtitle: No training labels are kept, yet accuracy stays within 1.7 points of retraining — arXiv paper
date: 2026-11-04
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Heirloom Asks the Old Model What Your Phone Learned About You

_No training labels are kept, yet accuracy stays within 1.7 points of retraining — arXiv paper_

## Executive Summary

> [!callout]
> A phone can now hand over what it has learned about its owner without keeping any of the data it learned from. The method is called Heirloom, and the paper describing it went up on arXiv on October 31. A small language model on a phone picks up its owner's taste through an adapter trained on personal data alone, and when the base model underneath moves up a generation and the layer count or the vocabulary changes, that adapter no longer fits the new model.

> Two options existed before this. Swapping in a generic adapter throws away most of what the phone had learned, and holding on to labeled user records for a fresh round of training protects accuracy while breaking the promise personalization was sold on. Heirloom opens a third route. The old personalized model stands as a teacher and answers unlabeled inputs, the answers are saved, the old model is unloaded from memory, and a new adapter learns to reproduce those answers. Across three generation changes in a movie-tagging task, the distance to a model retrained on the original labels never exceeded 1.7 points.

> Sections 1 through 4 follow the design and the measurements the paper reports. The authors are academics working with NEC Labs rather than a phone maker, and no product announcement has followed. Section 5 asks whose property a taste becomes once it lives in model weights instead of a file, and that part is this article's reading.

### Key Numbers

Four numbers carry the paper. The first two are what the method holds on to and what it costs, and the last two are the size of what stays on the phone and the result of copying the weights straight across.

Source: [arXiv:2611.00650](https://arxiv.org/abs/2611.00650) (2026-10-31)

<!-- stat-card -->
**1.7 points** — Largest accuracy gap to label retraining — Movie tagging, across all three generation changes

<!-- stat-card -->
**38 minutes** — Time to move to the 4B model — On the phone's neural processing unit, using 20% of the battery

<!-- stat-card -->
**3.8KB** — Size of what the teacher leaves behind — For 128 tagging prompts. Not one label is retained

<!-- stat-card -->
**8.9%** — Accuracy of an adapter remapped by formula — The same new model with no adapter at all scores 26.3%

## The Upgrade That Wipes Out Everything the Phone Learned

A language model running on a phone usually gets to know its owner through an adapter. The base model itself stays untouched, and a small bundle of weights sits on top of it, trained on personal data alone. Which tags you put on which films, how many points you give which products, all of that collects inside the bundle. Nothing leaves the device and the model still fits you, and that is the appeal of the arrangement.

The trouble is that the floor underneath gets replaced on a schedule. When a manufacturer moves the base model to its next generation, layer counts change, the vocabulary grows and token numbers shift. The Qwen upgrade the paper describes goes that way. The layer count drops from 28 to 24, and the vocabulary grows from about 150,000 entries to nearly 250,000. Three out of every four attention layers also become linear-attention layers, so the query, key and value projections the adapter used to ride on are no longer in place. An adapter is raised against particular layers and particular token numbers in one model, and against a change like that it becomes a block of numbers with nowhere to go.

Less upheaval produces the same outcome. The step from Phi-3.5-mini to Phi-4-mini keeps the layer count and the width, and all that changes is a sixfold larger vocabulary and a reorganization of the attention heads. The old adapter still cannot be used. A layer count that survives is no guarantee of compatibility.

Two paths were left. One is to swap in the generic adapter a manufacturer ships with the new model. In movie tagging that swap costs 15.4 points of accuracy on the 2B upgrade and 12.1 points on the 4B upgrade. Months of personalization disappear in a single update by that much. The other is to keep labeled user records and retrain from scratch on the new model. Accuracy survives, but a design that promised to handle personal data only on the device turns into a design that holds that data indefinitely.

> [!callout]
> When personalization is sold in the name of privacy, the promise has a back side. It also means deleting the original. With no original left, the way to recover what was learned disappears the moment the model changes.

## Two Phases With the Old Model in the Teacher's Chair

Heirloom reaches not for the labels but for the old model itself, which has not been deleted yet. At the moment the base model is replaced on the device, the old model and the personal adapter above it are both still present for a short while. Standing the old model up as a teacher during that window and collecting its answers lets those answers do the work the labels used to do.

The prompts put to the teacher come from three places: unlabeled inputs still held on the device, prompts the manufacturer ships alongside the update, and prompts the new base model generates for itself. None of them carry a correct answer. The slot where the answer belongs is filled by the old personalized model's response.

The three sources are not worth the same. Asking with inputs stored on the device works best, and the paper has the manufacturer's prompts and the new model's own prompts generally trailing that by 1.5 to 3.1 points across the three upgrades. A device that keeps no record at all is cleaner, and it also leaves fewer good questions to ask the old model. Once the labels are gone, what the device still holds decides what the old model can be asked.

The form of the record depends on the task. For tasks with a fixed set of choices, such as movie tagging or product ratings, the system collects the logits of the first token of each label and keeps a probability distribution normalized across the labels alone. The student adapter trains to shrink the KL divergence between that distribution and its own. For open-ended tasks such as headline generation, the teacher produces a sentence of up to 32 tokens and the student follows that sentence with cross-entropy inside its own tokenizer.

The split into two phases comes from the phone's memory. There is no room to hold two base models at once, so all the teacher's answers are collected first, the old base model is unloaded, and only then is the new one brought up. The stored material is light. The targets for 128 movie-tagging prompts come to about 3.8KB. The diagram below follows the two phases in order.
