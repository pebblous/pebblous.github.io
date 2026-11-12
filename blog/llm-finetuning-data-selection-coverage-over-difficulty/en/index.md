---
title: Data Selection by Difficulty Loses to Picking at Random
subtitle: A November 5 paper from Chicago, UT Austin and AI2 — five difficulty scores all lost to random, and clustering for even coverage beat full fine-tuning on two of three benchmarks at 5%
date: 2026-11-09
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Data Selection by Difficulty Loses to Picking at Random

_A November 5 paper from Chicago, UT Austin and AI2 — five difficulty scores all lost to random, and clustering for even coverage beat full fine-tuning on two of three benchmarks at 5%_

## Executive Summary

> [!callout]
> Trimming a training set to save compute by taking the hardest examples first turns out to be no better than drawing at random. The finding comes from a paper that researchers at the University of Chicago, the University of Texas at Austin and the Allen Institute for AI posted to arXiv on November 5. Five separate scores for measuring difficulty went into the test, and at every selection ratio the random baseline stayed competitive and was often the best performer of the lot.

> The explanation the authors give is coverage. Putting the hard cases first leaves a subset that occupies a narrow corner of the input data, while a random draw produces one shaped more like the whole. The researchers turned that resemblance into a number and set it against accuracy, and the relationship held in all six pairings of model and task. The paper is careful to say this is a correlation and that causality has not been established.

> Sections 1 through 4 follow the facts and figures the paper states. Section 5, on what a team cutting its training data should check its own selection rule against, is our reading.

### Key Numbers

The first card is how far coverage carried over into accuracy. The other three are what clustering-based selection gained, where it fell short, and what it cost.

Source: [arXiv 2611.07323](https://arxiv.org/abs/2611.07323) (November 5, 2026) · multi-domain figures are OLMo 2 7B fine-tuned on the Tülu 3 mixture

<!-- stat-card -->
**−0.71 to −0.90** — Correlation between coverage and accuracy — In all six pairings of model and task, the more evenly a subset covered the data, the better it scored

<!-- stat-card -->
**62.6%** — MMLU score from 5% of the data — Above the 62.2% of full fine-tuning, with random at the same ratio reaching 61.2%

<!-- stat-card -->
**40.2%** — HumanEval score from 25% of the data — Ahead of random at 37.5%, still short of the 45.9% of full fine-tuning

<!-- stat-card -->
**1 pass** — Forward passes clustering selection needs — Most difficulty scores need the model trained on the full set first, and PVI needs that twice

## Every Score but One Needs a Full Training Run First

Data selection is the idea that when you cannot afford to train on everything, you take the most valuable examples first, and the stand-in for value that has been used longest is difficulty. The intuition runs that an easy example holds little the model does not already know, so the harder ones carry more information, and in smaller classification models that intuition has held up. To see whether it survives in the fine-tuning of large language models, the researchers gathered five widely used difficulty scores and ran them under identical conditions.

The five measure slightly different things, and they do not cost the same to compute.

| Difficulty score | What it measures | Cost to compute |
| --- | --- | --- |
| Perplexity | The loss the model takes on that example. Picks the high-loss ones | One inference pass |
| Confidence | The average likelihood given to the correct answer throughout training. Picks the low ones | Training on the full set |
| Variability | How far that likelihood swung from epoch to epoch. Picks the large swings | Training on the full set |
| Variance of gradients (VoG) | How far the gradient swung during training. Picks the large swings | Training on the full set |
| PVI | The performance gap between a model shown the input and one denied it. Picks the examples where the input adds least | Training on the full set, twice |

The test bed was two models, Llama 3 8B and OLMo 2 7B, together with three generative tasks where fine-tuning lifts the score clearly: CommonsenseQA for everyday reasoning, CosmosQA for reading narrative context, and Social IQa for judging social situations. The five scores and random were compared side by side at selection ratios running from 1 percent of the training data up to 75 percent.

The paper states the result in one sentence. The random baseline stayed competitive across every selected percentage and every dataset, and was often the best performing method of all. Among the difficulty scores, variance of gradients had the highest average accuracy, and even that best showing did not clear random. Cost makes the picture more awkward. Every score except perplexity needs the model trained once on the whole dataset before it yields a number, and PVI needs that done twice. The compute a team hoped to save by cutting the data gets spent earlier, on the cutting.

> [!callout]
> Random is the easiest control group to set up and the hardest opponent to beat. When a rule somebody worked hard on cannot clear it, what that rule measures may not be the value of the data.

## Crowding Into the Hard Cases Narrows the Input Space

The hypothesis is simple. Selecting exclusively for hard cases leaves a subset that covers only a limited region of the input data, which is to say its coverage drops. A difficulty score is assigned example by example, so slicing off the top tends to gather examples that resemble one another. Random measures nothing at all, and in exchange the subset it draws comes out shaped like the data it came from.

Testing the hypothesis means turning coverage into a number. The researchers did it this way. First the whole training set is clustered using model embeddings, which gives every example a cluster label. That leaves two distributions over cluster labels, one for the full data and one for the selected subset. Measuring the gap between those two with Jensen-Shannon divergence produces a value where smaller means the subset covered the whole more evenly.

Setting that distance against actual fine-tuning accuracy makes the relationship plain. In all six pairings of two models with three tasks the Spearman correlation came out negative, landing between −0.71 and −0.90. The less a subset departed from the overall distribution, the better it scored. The strongest pairing was Social IQa with OLMo 2 7B, at −0.90.

> [!callout]
> What gives these numbers their weight is that all six pairings pointed the same way. The paper does not blur correlation into cause, though. It goes as far as a strong correlation between coverage and performance, and its limitations section leaves establishing causality to future work.

## Clustering-Based Selection Splits the Space Before It Draws

If coverage is what matters, a method aimed straight at it ought to do well. The one the researchers built adds no new model and no extra training. The training data is passed once through the very model about to be fine-tuned, the last-token vector of the final hidden layer is pulled out, those vectors are clustered with k-means, and one example is drawn at random from each cluster. The number of clusters is the target ratio times the total number of examples, divided by 100. Picking 5 percent out of 100,000 examples means building 5,000 clusters and taking one from each.

Randomness does not disappear from this design. Inside a cluster the draw is still random. All that changes is that the input space is divided into cells beforehand and no cell is allowed to stay empty. The diagram below puts the three approaches side by side on one input space.
