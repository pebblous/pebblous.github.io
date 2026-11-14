---
title: Opus 5.5 Now Uses Fewer Em Dashes Than People Do
subtitle: In Graphite
date: 2026-10-05
category: not simply
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Opus 5.5 Now Uses Fewer Em Dashes Than People Do

_In Graphite_

## Executive Summary

> [!callout]
> This article rechecks a follow-up study by the marketing analytics firm Graphite, which ran its original measurements again on Claude Opus 5.5, against the primary sources and the raw data the firm published. The most quoted line says em dash use fell by 99%, from 2.92 to 0.015 per 1,000 words. The number the same study reports a few lines later is 2,548: the count of "AI tells," words and phrases and frames that the study flags, and only 4% below the previous version. One looks like a cliff and the other looks almost flat, but the two numbers were never counting the same thing. The first is the frequency of a single feature. The second is the size of a set fixed by a threshold.

> Open the raw data and one more number appears that the study text never prints. In the same corpus, human writing carries 3.14 em dashes per 1,000 words. That puts Opus 5.5 at roughly 1/205 of the human rate. All four current models sit below the human line without exception. In the same table, GPT-4.1 and GPT-5 sit above twice it. When readers were learning to treat the em dash as an AI marker, the folk rule was actually correct, and today it points the other way. Everything up to here is written in the study and its raw data.

> The reading we draw is this. Detection compares two distributions. In this study the machine-side distribution moves wholesale with every model version. The human-side distribution is pinned to 10,000 web articles published before ChatGPT, and there is no way to refresh it. The web after that date already mixes both kinds of writing, so any attempt to redraw the baseline contaminates the baseline. What deserves more attention is that the freeze is not peculiar to this one study. Open the evaluations that show detectors holding up across model generations, and the human writing they compare against is, every time, from before 2022.

> If one side moves, the other side sits still, and the still side cannot be fixed, then the labels "human-written" and "AI-written" produced between them acquire a shelf life as a matter of structure. And for data quality, a signal flipping sign is worse than a signal dying. A dead signal shows up as falling accuracy. An inverted signal keeps producing wrong labels quietly and with high confidence. This article is not a guide to spotting AI text. It is about how to store the labels that have already been applied.

<!-- stat-card -->
**1/205** — Opus 5.5 em dash rate, against human writing — 0.015 per 1,000 words. In the same corpus people use 3.14

<!-- stat-card -->
**2.27x** — GPT-4.1 em dash rate, against human writing — When the folk rule formed, the models above the human line. Same corpus

<!-- stat-card -->
**2,548** — AI tells counted in Opus 5.5 — 4% below the previous version. The size of a set fixed by a threshold

<!-- stat-card -->
**6% lower** — Mean strength of 11 well-known tells, against Opus 5 — Mean strength by Cohen's d. Against Opus 4 it is 53% lower

## When the folk rule formed, GPT used twice the human rate

Graphite is a content marketing growth agency. Its September 2026 study, "AI Tells," set 10,000 web articles published before ChatGPT against 90,000 AI articles written to the same topics, then counted which words and phrases ran disproportionately high on either side. The follow-up published on 1 October 2026 added Claude Opus 5.5 and GPT-6 Astra and applied the same yardstick again. This is not a peer-reviewed paper. It is research a company posted on its own blog. The method and the limitations are stated in the text, though, and the per-feature numbers were released as raw data under CC BY 4.0. Every figure in this article was read out of those files directly.

The most widely repeated line concerns the em dash, the long '**—**' that readers have been trained to watch for. The follow-up reports that Opus 5.5 went from 2.92 to 0.015 of them per 1,000 words. What the text never states is the comparison point. In the same measurement, human writing uses 3.137847 per 1,000 words. That value is sitting in the raw data. Set it as the reference, line up all eleven rows in one table, and a different picture appears than the quoted sentence suggests.

| Model | Em dashes / 1,000 words | vs. human (3.14) |
| --- | --- | --- |
| GPT-4.1 | 7.131936 | 2.27x |
| GPT-5 | 6.921365 | 2.21x |
| Human (published before 2022-11-30) | 3.137847 | reference |
| Claude Opus 5 | 2.924242 | 0.93x |
| Gemini 2.5 Pro | 1.430118 | 1/2.2 |
| Claude Opus 4 | 0.661113 | 1/4.7 |
| GPT-6 Astra | 0.368904 | 1/8.5 |
| GPT-5.6 Sol | 0.305514 | 1/10.3 |
| Claude Opus 4.6 | 0.202808 | 1/15.5 |
| Claude Opus 5.5 | 0.015347 | 1/204.5 |
| Gemini 3.1 Pro | 0.013723 | 1/228.7 |

************************

Source: the **layer1__punct_emdash_per1k** row of **ai_tells_features.csv.gz**, published by Graphite. Based on 9,974 aligned topics. The same file carries a second em dash feature under a different definition, but this row is the one that matches the 2.92 printed in the study text. Split the table at the human row and two models stand above it, eight below.

The top two rows are where this article starts. The models in circulation while readers were learning to treat the em dash as an AI marker were GPT-4.1 and GPT-5, and both really did use it at more than twice the human rate. The folk rule was true when people learned it. All four models in current use now sit below the human line: Claude Opus 5.5, Gemini 3.1 Pro, GPT-6 Astra and GPT-5.6 Sol. The signal has not faded. It has reversed direction. Graphite itself raised the possibility of **overcorrection** one version earlier, though the models it named then were GPT and Gemini, while Claude Opus 5 was sitting at roughly the human rate. One version later, Claude dropped below both of them.

"Claude Opus 4.6 uses fewer em dashes than Opus 4, but Opus 5 brings them back to about the human rate. **GPT and Gemini may have overcorrected for this well-known tell.** Their latest versions use em dashes far less often than human writers."
                        Graphite, **AI Tells** (2026-09-16). The follow-up study does not extend the overcorrection reading to Claude. It states only that both Opus 5.5 and Astra "have much lower em-dash usage rates than human articles published before ChatGPT."

### 1.1. Four conditions hold this number up

Lift the table out on its own and it turns false quickly. Four conditions travel with it. First, the human writing it compares against is web articles published before 30 November 2022. It is not writing produced by people in 2026. Second, the AI writing is SEO-style web articles generated from a single prompt. Third, the model versions are fixed. Change the names in the table and the values change with them.

The fourth condition is the one that goes missing most often. These are values measured **in this corpus**. Readers mostly learned the em dash heuristic from chat windows, and this study did not measure conversations. Graphite attaches the same caveat in its limitations section: tells may differ in other contexts, such as conversations with AI models. So the table cannot be restated as "chatbots have stopped using em dashes." How large that gap gets shows up numerically in the next subsection.

### 1.2. Three teams measured the same model and the baselines differed fivefold

The collapse in Opus 5.5's em dash use has been reproduced independently. All three measurements agree on direction. The absolute value for the previous version, Opus 5, varies sharply by who did the measuring. The three measurements below asked the models to write different kinds of text.

| Measured by | What the model was asked to write | Opus 5 | Opus 5.5 |
| --- | --- | --- | --- |
| Graphite | Single fixed prompt, SEO-style web articles | 2.92 | 0.015 |
| Arena | Text Arena high-reasoning production responses | 15.2 | 0.8 |
| Arize | 20 research briefs, 5 genres x 5 domains | 12.9 | 0.05 |
| (Human baseline, Graphite) | Web articles published before 2022-11-30 | 3.14 | · |

All units are em dashes per 1,000 words. The Arena figures come from a tally reported by BleepingComputer on 26 September 2026, and the Arize figures from that firm's own reproduction the same month. The three measurements do not contradict each other. They differ in what the models were asked to write.

In Graphite's corpus, Opus 5 used em dashes less often than people did. The same model used them four to five times the human rate in Arena's and Arize's corpora. The reversal in the Section 1 table still holds, then, but what reversed is not "the model across all contexts." It is **the model as measured in this corpus**. The independent reproductions strengthen the article rather than weakening it. Same model, same feature, and a fivefold swing depending on what it was compared against: that is the shortest available illustration of the argument this article reaches in Section 6.

The Arena measurement adds one more thing. It counted semicolons alongside em dashes, and over the same interval the semicolon rate fell from 6.10 to 1.64. The visible punctuation signals were suppressed together, which supports the overcorrection reading Graphite introduced. It should not be read as across-the-board improvement, though. In the same tally, mean response length rose from 453 to 481 words. Arize's closing sentence is neutral and accurate: "So the claim holds up halfway. 'Fixed' is too strong. 'Much better' is fair."

## The 99% and the 4% count different things

Two numbers out of the same study circulate side by side. One is 99% and the other is 4%. One says almost everything is gone; the other says almost nothing has changed. Put them on the same line and the study looks self-contradictory. The two numbers were never counting the same object.

The 99% is a drop in **the frequency of one feature**. Count how often a single trait, the em dash, appears per 1,000 words and divide by the previous version: 0.015347 over 2.924242 gives a 99.5% decrease. The 4% is a change in **the size of a set**. After length normalization, Graphite collects the words and phrases and frames that are used at least twice the human rate and that clear a minimum article count, and calls that collection the model's tells. The minimums are 500 articles for single words, 250 for two-word phrases, 100 for three-word phrases, and 120 for frames. The list assembled that way went from 2,666 for Opus 5 to 2,548 for Opus 5.5. Move the threshold slightly and the number moves with it.

So the two numbers cannot be divided into a ratio. Ninety-nine over four points at nothing: the numerator and the denominator live in different worlds. The figure below lays those two worlds over a shared horizontal axis. The top series is the em dash rate across four Claude versions; the bottom series is the tell count for the same four. The dashed line across the top is the human baseline of 3.14.
