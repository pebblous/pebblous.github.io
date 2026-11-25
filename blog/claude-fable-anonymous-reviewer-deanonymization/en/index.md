---
title: Claude Fable 5.2 Names the Author of an Anonymous Peer Review
subtitle: Given one review and nothing else, it names the reviewer in 55.4% of 15,136 ICML 2020 reviews that have never been published
date: 2026-11-26
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Claude Fable 5.2 Names the Author of an Anonymous Peer Review

_Given one review and nothing else, it names the reviewer in 55.4% of 15,136 ICML 2020 reviews that have never been published_

## Executive Summary

> [!callout]
> A frontier model can read one unsigned text and name the person who wrote it. Twelve researchers across five institutions, among them the University of Maryland and Google DeepMind, [posted the paper to arXiv on November 19](https://arxiv.org/abs/2611.26216). Claude Fable 5.2, which Anthropic released on November 9, named the correct reviewer for 55.4% of 15,136 ICML 2020 reviews that have never been made public. It was given no web search, no list of candidates, and no sample of the writer's other work to compare against.

> Before these numbers travel any further, it is worth asking who each one counted. The widely quoted 69% from the Reddit experiment belongs to accounts that posted more than 500 times in the past year in a given subreddit. The average across that same experiment is 31%, and accounts that barely post sit at 2%. That spread is the paper's conclusion in miniature. What raised the hit rate was how much of the writer's text had gone into pretraining.

> Sections 1 through 4 set out what the paper and the press reports say. Section 5, which carries the question over to organizations that train on their own internal documents, is this article's reading.

### Key Numbers

Source: [arXiv:2611.26216v2](https://arxiv.org/html/2611.26216v2), revised 2026-11-23.

The first three figures are one model, Claude Fable 5.2, running the same task against different bodies of text. The fourth is the spread across models on the ICML set, with Fable 5.2 sitting at the top of it.

<!-- stat-card -->
**55.4%** — Reviewers named in private ICML 2020 reviews — 15,136 reviews by 3,342 reviewers. Counting only matches exact to the letter gives 50.1%

<!-- stat-card -->
**69%** — Accounts named among heavy Reddit posters — The band above 500 posts in the past year in a given subreddit. The overall average is 31%, and barely active accounts 2%

<!-- stat-card -->
**21.4%** — Reviewers named in already-public reviews — 1,559 reviews from 47 journals, lower than the private set. The 90 from Nature-family journals alone reach 78%

<!-- stat-card -->
**5.4–55.4%** — Spread across models on the same ICML task — DeepSeek V4.1 Flash 5.4%, GPT-6.1 Sol 22.3%, Gemini 4 Argon 37.7%, Opus 5.5 48.8%

## All the Model Got Was One Text and a Short Question

The paper is titled "Frontier models need only one text to unmask its human or AI author". It went up on arXiv on November 19 and was revised once on the 23rd. The twelve authors are spread across the University of Maryland, Simon Fraser University, the University of British Columbia, Pangram Labs, and Google DeepMind.

Three questions were put to the models. Did a human or an AI write this text? If an AI, which lab's model? If a human, who? This article is about the last one.

The conditions are what make the result worth reading. The model was handed one text and a short prompt. No web search was attached, no external tool was connected, no roster of candidates to pick from was supplied, and no sample of the author's other writing was provided for comparison. The queries went through the API rather than a chat app or a coding tool. The model returns a name, the reasoning behind that name, and a confidence level.

How the private reviews were handled is set out in the paper as well. Hal Daumé III, a program co-chair of ICML 2020, analyzed that material under IRB approval (#4656-1). He was the only person with access to the reviews, he ran that part of the experiment alone, and he did not share the reviews with his co-authors. What the paper publishes is aggregate results.

> [!callout]
> Why this design matters: when a model with search attached finds the author, that is the search working. Here the search was taken away and the names still came out. What the model had was the writing it had already read during training.

## 55% and 69%: Which Body of Text Does Each Come From?

The figures in this paper are easy to scramble in transit. The same task was run against four bodies of text with quite different characters, and the hit rate moves a long way between them.

The largest is the 15,136 private reviews from ICML 2020, written by 3,342 reviewers. Claude Fable 5.2 named the reviewer for 55.4% of them. That is the loose criterion, which accepts a middle name shortened or dropped; counting only matches that are exact to the letter brings it down to 50.1%.

One figure has to be kept clear of that one: 398 reviews at 56%. This is a small set made up of reviews written by four of the authors and two Maryland doctoral students, submitted to 26 double-blind venues between 2015 and 2026. It holds 266 standard reviews and 132 meta-reviews, and it is not the same material as the ICML 2020 set. The Korean outlet [AI Times reported on November 25](https://www.aitimes.com/news/articleView.html?idxno=217785) that the model identified 56% of 398 private reviews, and this is the set behind that line. It looks close to 55.4% of 15,136, but the two are percentages of different things.

The third body is reviews that are already public. Across 1,559 of them from 47 journals the hit rate drops to 21.4%. Taken on their own, though, the 90 from Nature-family journals climb to 78%. Communities differ in what gets written and in how much of it has piled up, so the variance is wide.

The fourth is Reddit. The material was 1,258 comments from 870 accounts across 32 subreddits, posted between October 18 and 29, 2026. These were not comments picked at random. Only comments running 200 words or more excluding quoted text were used, and the paper notes that subreddits where writing runs that long tend to be technical ones, on programming or mathematics. Given one such comment, the model named the account 31% of the time on average. The widely quoted 69% is the band of users who posted more than 500 times in the past year in a given subreddit; the 1-to-50 band comes in at 13%, and accounts that barely post at 2%.

> [!callout]
> Compressed into one sentence, the four bodies become "AI identifies more than half of anonymous writers", and the only place that sentence holds is the private review set. An ordinary Reddit poster sits at 31%, and someone who barely posts at 2%.

## The Hit Rate Follows How Much That Person Has Written

The paper's conclusion gives the reason the four bodies came apart in a single clause: "Attribution is easier when the model is familiar with the human author". Familiarity comes out of pretraining data.

The researchers turned that guess into a measurement. Ask the model first how well it knows a given person's writing, and the answer works as a signal for whether the identification will land. Giving the model more time to think points the same way. The largest gains showed up on accounts the model had said it knew only a little about. A writer the model knows faintly comes into range once it is allowed to think longer.

The bands in the Reddit experiment are the plainest evidence for this. Same model, same task, same amount of input, and the figure moves by more than thirty times depending on how much the writer has posted.
