---
title: Synthetic Respondents Given Two Identities Used Only One
subtitle: Twenty-one million responses simulated across 15 Pew Research surveys with eight language models
date: 2026-08-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Synthetic Respondents Given Two Identities Used Only One

_Twenty-one million responses simulated across 15 Pew Research surveys with eight language models_

## Executive Summary

> [!callout]
> Hand a large language model the profile of a 45-year-old Black woman, ask it to answer a survey question, and it will use only one of the two identities you gave it. That is what a new study measured, checking those answers against 15 waves of the Pew Research Center's American Trends Panel. In three cases out of four, a prediction built from a single attribute beat the prediction built from both combined. Seating a model in the chair instead of recruiting people is what the field calls silicon sampling. This is not an accuracy problem. The authors go to the trouble of showing separately that almost the entire accuracy gap comes from somewhere else. What remains is a representation problem: whose identity gets erased.

> The real respondents used as the benchmark were doing something much simpler. Take the opinion shift each identity produces on its own, add the two together, and you land almost exactly on the answer distribution of the actual group. Opinions do sharpen as identities overlap, but the sharpening is addition rather than emergence, and the surplus beyond addition was measured separately and came out essentially zero. So the models were asked for the easiest form of combination there is, and they slipped on it. Which identity survives and which gets dropped is close to a coin flip, yet the residue tilts in exactly one direction. Race and religion, the two axes that split opinion most sharply in the human data, survive least often. Rewriting the prompt did not change it, chain-of-thought did not change it, and switching to a newer model generation did not change it either.

> That shifts the audit question. Synthetic data today is checked axis by axis: does the gender split match, does the age split match, does the regional split match. What this paper shows is that every axis can match while information disappears at the level of combinations, and no published standard tells anyone to look there. The American Association for Public Opinion Research warned in May 2026 that filling sparse demographic clusters with synthetic respondents is the riskiest use of all, yet its report never uses the word intersectional. Korea's Personal Information Protection Commission guide stops its utility checks at per-column distributions and column-pair correlations. The paper proposes its own method as an audit standard and leaves three pieces behind: a noise floor, null calibration, and split-half confirmation. This report carries those three over into a checklist for auditing synthetic personas.

Four numbers carry this report. The first two say how much of an identity the models actually use; the second two say where the shortfall lands.

0.98 : 1.83

Identity budget  
models vs. people

75-82%

Two-identity cases better explained  
by a single attribute

7.8-10.0%

Three-identity cases explained  
by using all three

-9.5pp

How much less race survives  
than in people (religion -5.0pp)

The primary source here is a single paper posted on 24 August 2026, but the reading moves its results toward a practitioner's question: how do you audit synthetic data. When Pebblous covered [a Korean synthetic persona dataset](/report/nemotron-personas-korea-2026-04/en/) in April 2026, the question was why such a dataset is needed. This report asks what you would check that dataset's diversity with.

## An API That Hands You 1,000 People

Running a survey means recruiting people. Seating a large language model in those chairs has been a shipping product for a few years now. You give the model a demographic profile, have it answer the questionnaire, and put its answers where a real respondent's would go. The academic thread starts in 2023, when Argyle and colleagues named the practice silicon sampling and proposed algorithmic fidelity as the test it should pass. The terms used throughout this report, silicon sampling and synthetic respondents, both descend from that work.

The fastest way in is to read what the products promise. The two lines below are lifted verbatim from the public pages of two different vendors. One sells how finely you can specify a profile; the other says the rare groups you specify can be analyzed reliably.

Synthetic Users, official siteSpecify your target participant in as much detail as you need — demographics, behaviours, psychographics, profession.

Fairgen, official siteGet stable and realistic trends for rare groups. Reliably analyze underrepresented groups.

Cost is the second pillar under that promise. Synthetic Users puts an interview at $2 to $60 on its own pages, against $100 and up through a traditional fieldwork agency. Add the claim that a study lands in hours rather than weeks, and the temptation follows on its own: fill in cheaply the segments you used to cut because the sample was too thin. That is usually the first place synthetic respondents get called in.

Both vendors post their own limits. It is only fair to say so plainly. Fairgen calls its output directional, not definitive. Synthetic Users describes itself as a discovery co-pilot rather than a replacement for real research. So the target here is not either company's copy. It is that nothing tells you how to verify the caveat.

The industry's temperature needs two numbers read together. In the Greenbook GRIT report, 87% of practitioners who had used synthetic data said they were satisfied with it. In the same report, worry about data quality rose 40% year over year, with synthetic respondents named as the main cause. Adoption and suspicion are accelerating at the same time. For scale, the insights industry where this argument is happening was worth roughly $153 billion in 2024.

The professional norms are moving too. In a May 2026 task force report, the American Association for Public Opinion Research laid out the various ways AI enters survey work and assigned synthetic responses the highest risk tier of the lot. Then it named, in one sentence, the condition under which that risk grows.

AAPOR, Responsible AI Integration in Survey Research, May 2026The risk increases when synthetic respondents are used to populate demographic clusters that are sparse or absent in the human data.

What the products sell and what the guidance warns about are the same spot: filling rare combinations cheaply. Which leaves one question. How do you check whether that risk actually materialized? The paper this report is built on is close to the first attempt at that check, and the answer key it chose is the American Trends Panel.

The answer key's credentials are worth a moment. The Pew Research Center's ATP is a standing panel created in 2014 with roughly 10,000 adults, recruited since 2018 by address-based probability sampling, which draws households at random from postal delivery addresses and invites them in. Unlike an online opt-in panel, that means you can calculate who the sample represents. The 15 waves the paper used ran between 2017 and 2021, with between 2,524 and 10,221 respondents per wave. Because respondent-level microdata is public, you can compute the actual answer distribution for cells where race, religion, and income overlap. Grading synthetic respondents requires a grading sheet, and datasets that qualify are not common.

In April 2026 Pebblous covered [a 7-million-strong Korean synthetic persona dataset](/report/nemotron-personas-korea-2026-04/en/), built by attaching seven kinds of narrative to one million records. The question then was why Korean training and evaluation data needs to exist in that form. This report looks at the same object from the other side: what would you use to confirm that the diversity of those personas is real?

## Give It Two Identities, It Uses One

The design explains itself without equations. Start with profiles carrying a single identity. Take a profile told only that the respondent is a woman, and measure how far and in which direction its answer distribution sits from the average across all respondents. Call that displacement a bias vector, and treat it as the fingerprint that identity leaves. Then take a profile carrying two identities and try to predict its actual displacement two ways: once by adding the two fingerprints, once by using only one of them. Count which prediction lands closer for every profile-by-question pairing, and you can see how many identities the model really used.

The scale runs like this. Closed-ended questions were pulled from 15 waves of the Pew American Trends Panel, and seven axes were combined into 1,791 profiles per question: age, gender, race, income, party, religion, and education. Of those profiles, 31 carry a single identity, 405 carry two, and 1,355 carry three. Eight models from five organizations were run against them, for 15.7 million simulated responses in the main pipeline and 21.1 million once the auxiliary conditions are included. The instruction to each model was to distribute 1,000 virtual respondents matching the profile across the answer options and return only the integer counts. The gap between two answer distributions is measured with total variation distance, which reads as the share of people who would have to change their answer to turn one distribution into the other.

The result points one way. In GPT-4o-mini, the reference model, **78.4%** of two-identity cases were explained better by a single feature than by the sum, with a confidence interval of 77.8% to 79.0%. Across all eight models the range was **75.3% to 81.2%**. The unit matters here and is easy to get wrong: this is not a share of subgroups. It is a share of cells, where each cell is one profile meeting one question.

### 2.1. 78% Means Nothing Without a Ruler

Read 78% straight and you conclude the other 22% is fine. It is not. This win rate has a chance level, and the chance level is not one half. The paper built a ruler by simulating both extremes. In a world where addition holds perfectly, the single-feature prediction still wins 40.3% of the time; in a world where only one identity is ever used, it wins 84.3%. Rescaling an observed value between those two endpoints gives the collapse index.
