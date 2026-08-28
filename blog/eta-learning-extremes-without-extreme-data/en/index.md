---
title: A Generative Model That Draws Rainfall It Has Never Seen
subtitle: MIT
date: 2026-08-29
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# A Generative Model That Draws Rainfall It Has Never Seen

_MIT_

## Executive Summary

> [!callout]
> A city preparing for a once-in-a-century storm first has to know what that storm looks like. Yet most methods for estimating regional risk assume such a disaster already sits in the record. Learning an event that has never happened requires that event to be in the data, which is a circle. A paper by Kai Chang and Themistoklis Sapsis of MIT's Department of Mechanical Engineering, published in Nature Communications on August 20, argues that unprecedented extreme scenarios can be generated with that assumption removed.

> The method is called Extreme Event Aware learning, and the authors shorten it to η-learning. The idea is to add one term to the loss function. The correspondence between low-resolution and high-resolution maps is learned by ordinary supervised training, while the distribution of the extremes the model produces is held during training against a reference distribution fixed in advance. In the continental United States precipitation experiment, the only data used to learn that map-to-map correspondence were the pairs from the first six months of a 25-year record, a stretch that holds almost none of the heaviest rainfall. The distribution of extremes pushed forward by the model still landed on the tail of the 25-year truth. A model trained the ordinary way on the same data missed that tail entirely.

> The method does not make the requirement disappear, though. What used to demand labeled extreme events now demands an assumption about the shape of the tail. The authors include a sensitivity analysis that deliberately perturbs that assumption, and they write that misspecifying the tail makes the generated extremes wrong by the same amount. This article looks at what that trade is, and at what has to hold before the idea transfers to other datasets whose long tails are empty.

### Key figures

Source: Chang & Sapsis, [Nature Communications](https://www.nature.com/articles/s41467-026-76811-x) (2026-08-20) and [arXiv:2510.19161](https://arxiv.org/abs/2510.19161) v2

<!-- stat-card -->
**0.5 years** — Span used to learn the mapping — Only the first six months of paired maps out of the 25-year record went into learning the spatial correspondence between low and high resolution. That stretch holds few or no examples of the heaviest rainfall

<!-- stat-card -->
**9,044 pairs** — Total precipitation map pairs — ERA5-Land hourly precipitation over the continental United States from 1999 to 2023, pooled into daily maps. The point statistics of the extremes were computed from all 25 years

<!-- stat-card -->
**+8.13%** — What the tail cost — Full-grid RMSE rose from 2.878 to 3.112. SSIM, which measures spatial structure, fell only 0.30%, from 0.947 to 0.944

<!-- stat-card -->
**+20.55%** — When the tail is misspecified — Shifting the reference distribution's tail toward the heavier side raised RMSE from 2.926 to 3.527. The assumed distribution becomes the magnitude of the generated extremes

## A once-in-a-century storm cannot be answered with 25 years of records

Whether a city's seawall will hold against a blockbuster storm, whether a regional power grid will survive record heat, whether one town's fire-fighting resources can contain a major wildfire. Answering any of these means first knowing how the event would unfold. How far the wildfire spreads, how much of a region the storm covers, how many days the heat wave lasts. The question planners, policymakers, and insurers actually ask comes from the same place. What does a once-every-100-year storm look like for New York City?

The trouble lies in what the simulations that answer it feed on. To learn the conditions that lead to a once-in-a-century event, you have to train on data containing such events. Chang summarized the premise of existing methods in an interview with MIT News. "These methods assume there are very disastrous events that we have seen in the dataset, and they build a method to either estimate the risk of those events, or they try to predict exactly the events that have happened." Then he added his own question. "We are trying to see: What do unprecedented extreme events look like that are riskier than everything that has happened before and yet are still plausible?"
