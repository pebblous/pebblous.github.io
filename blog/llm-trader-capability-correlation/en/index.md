---
title: LLM Traders Act More Alike the Smarter They Get
subtitle: MIT researchers put the same trading scenarios to seven LLMs, and the pairs with higher general-ability scores overlapped more in how they traded
date: 2026-11-08
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# LLM Traders Act More Alike the Smarter They Get

_MIT researchers put the same trading scenarios to seven LLMs, and the pairs with higher general-ability scores overlapped more in how they traded_

## Executive Summary

> [!callout]
> More capable LLMs turn out to behave more like one another. The measurement comes from a research team that includes Andrew W. Lo of MIT Sloan, known for the adaptive markets hypothesis, in a paper posted to arXiv this September, and the team calls what it found the capability paradox. The working assumption across the industry has been that building each model well makes the system those models add up to safer as well. The study shows a route along which that assumption fails. While individual accuracy climbs, behavior across models converges, and what converges does not cancel out when you run many of them side by side.

> The least comfortable part is that the usual remedy does not work. When the team gave each of seven LLMs the same sixty-four trading scenarios, with the conditions varied one at a time, and measured the overlap in each pair, the thing that predicted the overlap was the capability score, and whether the two models came from the same company predicted nothing. Overlap is not always harmful either. In the experiment that did run the simulated stock market, where the shared judgment was right, prices tracked fundamental value more closely as the LLM share rose. Plant adversarial commentary in the same market and that same overlap pushes the other way, with price deviation reaching five to seven times the baseline.

> Sections 1 to 5 follow what the paper measured, along with the places other research supports it or doubts it. Section 6, where the result is carried over into a question about data pipelines, is this article's reading rather than the paper's.

### Key Figures

Source: Ross et al., [Why Better Models Can Create Riskier Systems](https://arxiv.org/abs/2609.04373), arXiv:2609.04373 (2026)

<!-- stat-card -->
**5 to 7x** — Price deviation under misinformation — Measured with every trader an LLM, against a market holding only uninformed noise traders

<!-- stat-card -->
**42%** — Lowest directional accuracy — Posted by Claude Sonnet 4.6, the highest-scoring model of the three, below the 50% you would get by guessing

<!-- stat-card -->
**0.010** — The floor that averaging never clears — Roughly half of 0.021, the residual variance of a single model. Growing the population does not take it lower

<!-- stat-card -->
**p=0.39** — Explanatory power of a shared vendor — Capability scores predicted the overlap at p=0.001, while sharing a provider family did not reach significance

## A Better Model Does Not Mean a Safer System

Choosing a model usually means reading a scoreboard. Swap in the model with the higher score and the service built on it is expected to improve by about as much. For one model in one seat, that arithmetic holds. This study takes aim at the other situation, where hundreds or thousands of models of much the same kind sit in one market, or at one review desk, at the same time. The authors set that scene in their opening line: "Large language models (LLMs) are being deployed at scale in consequential real-world systems, from financial markets to content moderation to hiring."

In that setting there is a second thing to watch besides individual accuracy, which is how closely the participants' errors move together. Errors that scatter average out as you add more participants, and errors that lean the same way do not. The team's hypothesis starts here: models that share much of their training data and their architecture extract the same patterns in the same way as they grow more capable, and so come to act more like one another. The word hypothesis should stay attached. The authors write it as one rather than as an established mechanism, and measure only the part where the overlap grows: "We hypothesize that shared training and architectures can lead more capable LLMs to behave more similarly, creating correlated actions that do not diversify away."

The named phenomenon appears when you lay those two trends on top of each other. A more capable model misses by less on its own task. At the same time it overlaps more with its neighbors. Where the second grows faster than the first shrinks, each participant gets more accurate while the risk the whole system carries goes up. The authors call that reversal the capability paradox, and they check it in three steps inside a simulated stock market.

## One Paper, Two Stages

Of the two, the market stage holds a single asset. Over 100 rounds the fundamental value of that asset is shocked twice: at round 33 it jumps from 100 to 120, and at round 66 it falls from 120 to 90. Three kinds of participant take part. LLM traders place orders after looking at the price, the recent history, their own inventory and a fair-value signal. Noise traders supply liquidity with random orders that average to zero. A market maker quotes with a fixed 0.5% spread. The price updates by taking net order flow divided by the number of participants, multiplying it by a depth coefficient, and adding the result to the previous price. A small coefficient means a deep market that absorbs orders, and a large one means a shallow market where the same orders swing the price hard.

No financial knowledge enters the way capability is measured. The two yardsticks the team uses are the MMLU-Pro score and the LMSYS Chatbot Arena ELO rating, and both measure general reasoning and knowledge. So the capability in this experiment means scoring highly on general tasks rather than trading well. The model table in the appendix runs from Llama-3.2-3B at 34.7% on MMLU-Pro up to Claude Sonnet 4.6 at 88.0%. Models from Meta, OpenAI, Google and Anthropic are mixed together, and seven of them go into the panel experiment that measures correlation, giving twenty-one pairs.

There are three questions. The first of them never runs the market. Sixty-four scenarios, with the gap to fundamental value, the momentum, the volatility and the analyst view varied a little at a time, are put to each model separately, and the five responses collected per scenario are averaged before pairs are compared. The two later questions are the ones that actually run the 100-round market. The LLMs that go into it are one kind at a time. Each condition fills the population with a single model and runs five independent seeds, dropping to three seeds for the condition with planted commentary. So the overlap between models is measured outside the market, and the market numbers show where the price goes once one model becomes many.

| What was asked | How it was measured | What came out |
| --- | --- | --- |
| Do more capable models resemble each other? | Seven LLMs each answered 64 scenarios with varied conditions, and the overlap across twenty-one pairs was regressed | Capability scores predicted the overlap, and a shared company did not |
| Does a market with more LLMs settle down? | The LLM share was raised from 0 to 1 in five steps while the distance between price and fundamental value was measured | The distance fell steeply and monotonically as the share rose |
| What happens once misinformation is planted? | The same setup, with eight commentary items per round claiming the fair-value signal was inflated | The same rising share widened the distance instead, up to five to seven times the baseline |

The three research questions of the study, set side by side. Source: arXiv:2609.04373, sections 3 and 4.

## What Makes Two Models Behave Alike

Two models placing the same order is not a problem in itself. When the price sits below fundamental value, buying is the right move for both, and agreement of that sort is a sign the market is working. So the team splits each model's behavior in two. A corrective component, the part explained by the gap between price and fundamental value, is estimated by a separate regression for every model and taken out, and what remains is treated as the non-corrective component. Pairwise correlation is measured between those residuals. The design keeps only the part where two models go wrong in the same place and in the same direction.

Both measures pointed the same way. Pairs with higher average capability shared more of their residuals, with t=3.94, p=0.001 and R² of 0.475 on Arena ELO, and t=4.88, p<0.001 and R² of 0.580 on MMLU-Pro. The variable for coming from the same company reached significance in neither setting, at p=0.39 on ELO and p=0.28 on MMLU. The authors call this the most uncomfortable part of what they found, and write it like this: "The most uncomfortable implication of our results is that the natural response to correlated failures — deploying more diverse models from more providers — does not address the dominant driver." Their reading of the coefficient follows in the results: "two high-capability models from different companies are more correlated with each other than two low-capability models from the same company."

One line of variance algebra explains why that overlap sets a floor under the risk. The variance of the average residual across N participants is a sum of two terms. The first is divided by N and heads toward zero as participants are added, while the second is the average correlation multiplied by the residual variance and stays where it is however large N grows. The floor the team measured is 0.010, roughly half of 0.021, the residual variance of a single model. Even if individual models improve and 0.021 comes down, the floor rises whenever the average correlation climbs faster.
