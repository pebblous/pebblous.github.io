---
title: AI Text Detectors Collapse When Model Generations Change
subtitle: Researchers had 23 LLM versions rewrite 4,000 journal abstracts; at one generation boundary, detection fell from above 99% to 3.8%
date: 2026-11-14
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Text Detectors Collapse When Model Generations Change

_Researchers had 23 LLM versions rewrite 4,000 journal abstracts; at one generation boundary, detection fell from above 99% to 3.8%_

## Executive Summary

> [!callout]
> A study has shown that the score sheet of an AI text detector comes with a shelf life. Kazuki Nakajima of Tokyo Metropolitan University and Takayuki Mizuno of the National Institute of Informatics took 4,000 journal abstracts published before ChatGPT existed and had each of 23 LLM versions, released between June 2023 and August 2026, rewrite them. Then they tracked how well a detector that had only seen the earlier versions could recognize text from the versions that came after.

> With the threshold set so that 1% of human-written abstracts are falsely flagged, detection ran above 99% on the version just before a generation boundary and landed at 3.8% on the first version past it. It does not give way like this every time. On most versions, a detector trained only on the past still did its job. What makes the exception awkward for anyone running review is that it falls on the newest model. The authors trace the drop to a shift in the distribution of words each version favors, rather than to models growing smarter.

> The facts and figures in sections 1 through 4 come from the arXiv preprint and from two video-detection benchmark papers cited alongside it. The release date and size of Meta's open-weight model were confirmed separately in contemporaneous reporting. Section 5, which ties the result to the shelf life of quality metrics, is this article's own reading.

### Key Figures

The first number marks the deepest point a detector fell to. The middle two are what it costs to cover all 23 versions at once, and the last comes from a detector sold as a product.

Source: [Nakajima & Mizuno (2026), arXiv:2610.11599](https://arxiv.org/abs/2610.11599)

<!-- stat-card -->
**3.8%** — Detection on the first version past the boundary — The same detector cleared 99% on the version just before

<!-- stat-card -->
**11.9%** — Human writing falsely flagged when every detector runs — One in eight human-written abstracts picks up an AI label

<!-- stat-card -->
**33.8%** — Newest-version rewrites missed by one pooled detector — False flags stay low at 0.8%, but one rewrite in three slips by

<!-- stat-card -->
**79.8%** — Newest-version rewrites missed by a commercial detector — It flagged 1 human-written abstract out of 5,000

## Abstracts Written Before ChatGPT Are the Human Baseline

Journals and conferences have started screening submitted manuscripts for text written with LLMs. Whether that screening can be trusted is settled by benchmark scores, and a benchmark is a number measured once against a fixed set of versions. The versions actually in use keep changing. That gap is what the paper aims at.

The material is 4,000 English abstracts published in the Proceedings of the National Academy of Sciences (PNAS) between 2009 and 2018. They were written before ChatGPT existed, so no separate proof is needed that a person wrote them. The researchers handed each abstract to 23 LLM versions, one at a time, and asked for a rewrite. The lineup is 14 versions from OpenAI, 4 from Meta, and 5 from Alibaba, released between June 2023 and August 2026. Anthropic's Claude was excluded in view of the vendor's requirements, as were the light and premium tiers that branch off inside a generation (mini, nano, pro) and the aliases that keep moving from one version to another.

The rewriting procedure was identical across all 23 versions. The model first compresses the original abstract into a list of its key points, then expands that list back into a single abstract-style paragraph. That sits closer to keeping the content and handing the wording to the model than to editing the author's sentences. Sampling temperature was fixed at 1.0, so each model's ordinary voice comes through.

Detectors were built one per version. Each human-written abstract was paired with that version's rewrite of it, RoBERTa-base (125 million parameters) was fine-tuned on the pairs, and the split was done at the paper level, 8 to 2, so that no paper appears in both training and evaluation. The decision threshold was set the same way every time: the point where 1 in 100 human-written abstracts is falsely flagged as AI. Given that a false flag in review means an author wrongly accused, that is a strict setting.

> [!callout]
> Set up this way, one question comes into focus. Can a detector that has only seen the versions released up to yesterday recognize text from a version released today? That is the condition of actual review. The detector a journal runs is always trained on the past, and the manuscripts arriving are always from the newest model.

## Detectors Learn One Version's Word Habits

Ordinary performance is fine. Across the 20 versions that had an earlier version available to learn from, detection stayed above 85% on 18. One version changing does not make a detector go blind. It broke down in exactly two places, and both sat where the models crossed from one generation into the next.

The first is the opening version of the GPT-5 generation, where detection fell to 26.6%. The second runs much deeper. Detection dropped to 3.8% on Muse-Glimmer, the first open-weight model of Meta's Muse family. Meta released it on 10 August 2026 under the Apache 2.0 license at 30 billion parameters, its first open-weight model since Llama 4. The chart below sets the three points side by side.

▲ Original Pebblous chart. Figures are those reported by Nakajima & Mizuno (2026).

Why generation boundaries in particular? The explanation the authors offer is vocabulary. Every version has its own distribution over the words it favors, and the wider the gap between two versions' distributions, the less a detector trained on the earlier one caught the later one. Measuring that gap with Jensen-Shannon divergence and comparing it against detection gives a rank correlation of −0.85 (p<0.001). The relationship holds after controlling for release timing, vendor, and rewrite length. The authors attach a caveat: moving together is not proof that one side causes the other.

Run the direction backward and the same thing happens. The detectors trained on the three latest OpenAI versions catch at most 0.2% of the rewrites of GPT-4, the earliest version in the experiment. A detector trained on a later version missed the rewrites of an earlier version from the same vendor nearly as often as the reverse, as the authors put it. Reading this as "newer models are harder to catch" gets it wrong. Move away from the versions a detector was trained on, in either direction, and it stops recognizing them.

> [!callout]
> Turned around, the result reads like this. The detector never learned what AI-written text looks like in general. It memorized the words favored by the particular versions in its training set. Once the word habits move, the same detector cannot do the same job. Less that its performance degraded, more that the thing it was measuring became something else.

## Every Way to Cover All the Versions Has a Price

If a detector tuned to one version gives way at the next generation, the obvious move is to build a screen that covers all 23. The authors built two such screens and measured what each one costs. One runs every per-version detector at once and calls a text AI if any of them fires. The other pools the rewrites from all 23 versions and trains a single detector.

Both of them work. The question is which price you would rather pay.

| Screening approach | Human writing falsely flagged | Muse-Glimmer rewrites missed |
| --- | --- | --- |
| Run every per-version detector at once | 11.9% ± 1.2% | 1.4% (catches 98.6% on average) |
| Pool all 23 versions into one detector | 0.8% ± 0.3% | 33.8% ± 3.4% |
| Use the commercial detector Pangram (v3.3.2) | 0.02% (1 in 5,000) | 79.8% (319 of 400) |

▲ How three ways of covering all 23 versions scored. Source: [Nakajima & Mizuno (2026)](https://arxiv.org/abs/2610.11599)

The first row is what choosing not to miss looks like. Even for Muse-Glimmer, the union catches 98.6% of the AI-rewritten abstracts on average. The cost is that roughly one in eight human-written abstracts picks up an AI label. A journal that screens submissions on this setting puts a fair number of authors who wrote their own text in the position of having to explain themselves.

The second row is the opposite choice. Hardly anyone gets wrongly accused, and a third of the rewrites from the newest model walk straight through. Either way you absorb a loss on one side, and this experiment holds no middle option.

Wondering whether a paid product fares better, the researchers put a commercial detector on the same bench. Pangram v3.3.2 flagged exactly 1 of 5,000 human-written abstracts. On false flags there is nothing to fault. Its miss rate, though, swung widely from version to version. It missed 26 of 400 GPT-5 texts (6.5%), and 319 of 400 Muse-Glimmer texts. Same product, same setting, and the result moves by more than a factor of ten depending on which model did the writing.

The field a manuscript comes from moves the result too. Sorting the same product's misses by the discipline of the original abstract, Pangram misses 45.2% in the Health Sciences and 26.5% in the Social Sciences, with the Life Sciences and the Physical Sciences in between. Those figures pool all 23 versions, so no single version can be blamed for them. When a detector's score gets written down in one line, that line has to say which versions it was measured against and which fields the texts came from.

## The Same Thing Happens in Video Detection

Text is not the only place this shows up. Deepfake video detection has the same shape of report piling up. [Deepfake-Eval-2024](https://arxiv.org/abs/2503.02857), released in 2025, is an evaluation set built not from academic datasets but from fakes that actually circulated on social media and through detection platforms during 2024. Run open-source state-of-the-art detectors against it and AUC decreases by 50% for video, 48% for audio, and 45% for image models compared with previous benchmarks.

[DF26](https://arxiv.org/abs/2609.07369), out in September 2026, goes a step further. It gathers 2,420 synthetic videos made by seven recent text-to-video and image-to-video models along with 271 real videos, and puts the same question to people and to detectors at once. Both came out close to guessing, the authors conclude. Their reading comes with a note that detection-side evaluation falls behind each time the generation side shifts its distribution.

The three studies handle different objects: journal abstracts, social media video, and video of people speaking in public. What overlaps is how the number was made. A classifier trained and calibrated on data from one point in time, with "accuracy of X percent" written beside it, cannot hold that number once the generation side moves its distribution. Text detection is simply the most visible case of it.

### 4.1. What This Study Does Not Cover

The limits the authors write down for themselves are plain. The result comes from one journal, one language, one kind of text: English abstracts published in PNAS between 2009 and 2018. An abstract is short and follows a set form, so none of this carries over as it stands to the body of a paper or to writing in another language. Anthropic's Claude is absent and the light tiers were left out, so the 23 versions do not stand in for every model in use today. And the co-movement of vocabulary distance with detection failure is an observed relationship, not a demonstrated cause.

The usage reproduced is singular as well. The experiment assumed a use in which a whole abstract is handed over and rewritten end to end. Out in real writing, an LLM gets used to fix grammar, to replace a text in its entirety, and often to trade sentences back and forth with an author over many exchanges. The detector sample is narrow too. What the authors trained themselves is one family, RoBERTa-base, and the commercial side is one product at its fixed operating point. The control group judged by human readers is 80 rewrites.

One fact survives all of that. The same detector at the same threshold swung between 99% and 3.8% across a single version. Whatever limits you attach, "accuracy of 99 percent" can no longer be read as a fixed property of a detector.

## Why Pebblous Is Watching This Paper

News like this usually gets filed under research ethics. From where data work sits, something else is left over. What the paper shook is not the performance of detectors but the standing of the number that records it. Accuracy of 99 percent was never a property a detector had. It was a measurement taken at one time, against one set of versions. When the thing being measured changes, the same number from the same instrument stops meaning the same thing.

That property is not attached to AI text detectors alone. Spam classifiers, content screening filters, data quality gates, in-house model scorecards: every one of them is a device trained and calibrated on data from some point in time and handed a number. The world keeps moving after the handover, and the number usually carries an issue date with no expiry date beside it. If you are reading last year's scorecard this year as though it means the same thing, you are running on an assumption nobody has checked, namely that the distribution stayed where it was.

This blog has covered [research arguing that detector false flags come from differences in how people write rather than from the state of the technology](/report/ai-text-detector-limits/en/). That was a limit that shows up when you cut across people at a single moment; this paper's shows up when you follow the same object along time. Put the two axes together and settling a judgment with one detector gets harder still.

For anyone running a classifier or a quality metric, reading this paper narrows the checklist to three items.

- When was that accuracy measured, and on what data? A metric with no recorded measurement date cannot even be asked about its shelf life.
- Who starts the re-measurement, and on what signal? In this paper the trigger is the release of a new model. For an in-house classifier, the equivalent is the moment the input distribution shifts.
- Does the re-measurement include the past versions? The authors write in their conclusion that benchmark accuracy should be re-verified with every LLM release, including earlier versions. Check only the new one and you never see that you have started missing the older texts.

When Pebblous makes data usable by AI, it treats quality verification as work on a cycle rather than an event you finish once, for the same reason. A score, once given, answers only for the data of the day it was given. What happened to the data after that is not something the score will tell you.

The paper closes on this sentence: "The question for the scientific community is therefore not only how accurate its detectors are, but against which LLM versions that accuracy was last verified." Put the name of a classifier your own company runs where the detectors are, and the sentence still stands.

## References

- 1.Nakajima, K. & Mizuno, T. (2026). "[Large Language Model Turnover Undermines Screening for Artificial Intelligence-Assisted Scientific Writing](https://arxiv.org/abs/2610.11599)." arXiv:2610.11599.
- 2.Chandra, N. A. et al. (2025). "[Deepfake-Eval-2024: A Multi-Modal In-the-Wild Benchmark of Deepfakes Circulated in 2024](https://arxiv.org/abs/2503.02857)." arXiv:2503.02857.
- 3.Shykula, S. et al. (2026). "[DF26: We Cannot Tell Fake From Real Anymore](https://arxiv.org/abs/2609.07369)." arXiv:2609.07369.
