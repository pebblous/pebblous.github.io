---
title: AI Took the Survey: the Average Held, the Person Vanished
subtitle: Columbia Business School and a market research firm put 108 attitude questions to digital twins, and twins told nothing but age and gender still matched the topline
date: 2026-09-25
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI Took the Survey: the Average Held, the Person Vanished

_Columbia Business School and a market research firm put 108 attitude questions to digital twins, and twins told nothing but age and gender still matched the topline_

## Executive Summary

> [!callout]
> This article does not ask how accurate an AI is when it answers a survey in a person's place. It follows the question one step back: which tier that accuracy was established at. Oded Netzer of Columbia Business School and Rajan Sambandam, president of the American market research firm TRC Insights, published a paper in September that took roughly a hundred attitude questions and measured the same synthetic respondent with four different yardsticks. The four numbers said four different things.

> The heaviest finding fits inside one paragraph. Twins given nothing but demographics, age and gender and the like, barely recovered any individual's answers. Across all 108 questions the individual-level correlation never reached 0.5. Yet the topline those same twins produced, once everyone was averaged together, landed closer to the human topline than the condition that had also been handed five attitude questions from the same sector. The two numbers come from the same data at the same moment and both are true. The abstract names what that pairing does: aggregate measures hold up even when the model was told very little, and in holding up they mask the complete absence of respondent-level differentiation.

> So the question to put to a vendor of synthetic respondents is not what the accuracy percentage is. It is which of four families that number came from, which of three tiers your own decision sits at, and whether the two are the same tier. When they are not, "it matched well" remains true and stops having anything to do with your decision. No clause in the international norms already governing this industry requires anyone to answer that question yet.

0.08

How closely a twin told only age and gender tracked one person's answers

Across 108 questions, none of them reached 0.5

0.39 vs 0.48

Topline error, and the condition given less information is the smaller one

Same data, same moment, two numbers

46 of 108

Questions the screen clears for a twin to answer

The other 62 are flagged as needing new human data

18.9pp vs 11.6pp

A Korean panel's cell-level error against a baseline that uses no information

Uncalibrated, the synthetic panel came out behind the baseline

## Two Measures, Same Data, Opposite Directions

A word first, because it carries two unrelated meanings. The "digital twin" in this article is not the kind that rebuilds a factory line or an organ inside a computer so engineers can run it. It means getting a large language model to answer a survey in the place of one particular person, and it also means the fake respondent that results. The industry calls these synthetic respondents, synthetic consumers, synthetic panels. All three name the same object from slightly different angles, and this article reaches for whichever fits the sentence. The mirror-image problem, where a survey put to humans quietly fills up with answers that no human wrote, we covered separately in [You Asked People. Increasingly, AI Is Answering.](/blog/ai-survey-contamination-social-science/en/)

The starting point is a paper posted in September. It has two authors who stand in very different places. One is Oded Netzer, a professor at Columbia Business School. The other is Rajan Sambandam, president of TRC Insights, a market research firm that sells human sample for a living. The empirical material comes from a large 2025 survey run by the Center for Customer-Based Execution and Strategy at Rice University's Jones Graduate School of Business, and the firm that fielded it was that same company. Better to say the conflict out loud: a paper about the limits of synthetic responses is co-authored by someone whose business those responses would eat. The paper raises the structure itself in its introduction. Optimists have commercial incentives, it notes, and so do pessimists, since a great deal of the loudest skepticism originates with firms whose business is human sample.

The survey asked customers what they value across 18 sectors. There were 3,063 respondents, but no one rated all 18. Each person took up to three sectors, which leaves roughly 500 actual respondents per sector. Six attitude questions per sector makes 108 in all. From this material the researchers built two conditions side by side. In one, the twin was told only demographics, age and gender among them. In the other, the twin was also handed the five remaining attitude questions from the same sector. Then both conditions answered the same questions again.

Put the results in one table and the two measures walk in opposite directions. Individual-level correlation climbed sharply when the twin was given more to work with. The topline error, computed by averaging everyone into a per-question mean and comparing that mean against the human one, was smaller in the condition that had been told less.

| What the twin was given | Individual correlation | Questions above 0.5 | Topline error |
| --- | --- | --- | --- |
| Demographics only | 0.08 | 0 of 108 | 0.39 |
| Demographics plus 5 attitude questions from the same sector | 0.57 | 74.1% | 0.48 |

Netzer and Sambandam (2026), Table 1 and section 5.2. The correlation captures how well the twin recovered people's high-and-low ordering, question by question; the topline error is how far the per-question mean landed from the human mean. Lower error is better.

Read the top row. Given your age and your gender, the twin recovered essentially none of you as an individual. A correlation of 0.08 is close to zero, and all 108 questions sat below 0.5. Yet the per-question means that same twin generated were 0.39 away from the human means, and that is smaller than the 0.48 produced by the condition with five extra attitude questions in hand. More information pushed the topline further off.
