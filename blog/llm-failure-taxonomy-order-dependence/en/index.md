---
title: Does an LLM Failure Taxonomy Measure the Model or the Order of Its Tests?
subtitle: Across 2,316 graded records from twelve models, the order of the classifier
date: 2026-11-12
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Does an LLM Failure Taxonomy Measure the Model or the Order of Its Tests?

_Across 2,316 graded records from twelve models, the order of the classifier_

## Executive Summary

> [!callout]
> Graders agree almost perfectly that a model got a problem wrong, and the agreement falls apart the moment they have to say why. That is the finding in a study by Madhu Sudhan Rao Beesetty of PayPal, accepted at IEEE CogMI 2026. It re-examines 2,316 graded records gathered from twelve models across eleven languages, together with 179 transcripts read by native speakers.

> Agreement on answer correctness came to Cohen's kappa 0.932. Measured on the same transcripts for whether a failure deserves the label Compositional Collapse, it drops to 0.093. The classifier is in worse shape still. Changing only the order in which three tests are applied swings Compositional Collapse's share of failures between 26.4% and 76.4%. The data is the same and so are the models. The author does not push this toward a verdict that AI cannot sort out reasons, though. Two humans agreed with each other at 0.659, and feeding the same judge model the humans' own instruction sheet lifted 0.147 to 0.636.

> Sections 1 through 5 report what the paper found. Section 6, which carries the result over to the people who build evaluation data, is this article's own reading.

### Key Numbers

Four numbers stand out. The first two show how unstable the "reason" label is, and the last two point at where that instability came from.

Source: Beesetty, M. S. R., ["Agreeing on the Answer but Not the Reason: Measurement Limits of LLM Reasoning Failure Taxonomies"](https://arxiv.org/abs/2611.13140), arXiv:2611.13140 (IEEE CogMI 2026).

<!-- stat-card -->
**0.093** — Agreement on why the model failed — On the same transcripts, agreement on whether the answer was right is 0.932. That is the distance from chance to near-total

<!-- stat-card -->
**26.4–76.4%** — Range of the Compositional Collapse share — What the six orderings of the tests produce. Nothing moved except the order

<!-- stat-card -->
**50.1%** — Failures carrying evidence for two categories or more — Fewer than half of the cases fit one category cleanly. That is where the order gets its power

<!-- stat-card -->
**0.147→0.636** — Agreement after the instructions changed — The same judge model, handed the instruction sheet the human raters had been working from

## The Answer Is Settled, the Reason Is Not

Model reports carry a familiar sentence. Something like: 40% of this model's reasoning failures were Compositional Collapse. It looks friendlier than an accuracy number. It tells you where the model stumbles, and what to fix next seems to follow from it. The question Beesetty put to that sentence is whether it is a measurement that reproduces.

The experiment ran on mGSM-Symbolic, a variant of GSM8K, the grade-school math word problem collection, rewritten into other languages with the numbers and names swapped as well. Twelve models of widely separated capability went onto it, from Claude Haiku 4.5 and Claude Sonnet 5 and DeepSeek-V4-Pro through to Mixtral-8x7b and Neural-Chat-7b, and the problems were solved in eleven languages: Chinese, Thai, Japanese, German, Spanish, French, Italian, Russian, Swahili, Bengali and Telugu. That produced 2,316 graded records. The count of records is not the count of problems. The items themselves number only 22, drawn from eight distinct structures, and 2,316 is what you get after substituting numbers into them and carrying them into eleven languages. The author states plainly that when describing the breadth of the design, the smaller figure is the one to write down.

The grading went to an "inspector" rather than a person. That is a judge model under a fixed prompt, handed the translated problem, the reference answer and the solution the model actually produced, and required to return a correct-or-incorrect verdict plus quoted evidence for each failure category in a set format. Claude Sonnet 5 filled the seat. That means the model doing the grading also sits in the list of twelve models being graded, and below, "inspector" always refers to the grading role.

Verification went to people. Native speakers of the eleven languages read 179 transcripts themselves and issued the same verdicts. On answer correctness, the inspector and the native speakers agreed at kappa 0.932. Two graders writing down nearly the same thing. Put the same transcripts in front of them and ask only "does this failure get the Compositional Collapse label," and kappa falls to 0.093. Kappa is agreement after the overlap you would expect by chance has been taken out, so a value near zero means the two graders might as well have been labeling independently of each other.

> [!callout]
> The practice of certifying label quality through answer agreement alone breaks off here. Same graders, same transcripts. All that changed is whether the question was "was this right" or "why was this wrong."

## Four Categories, but Half the Failures Fit Two or More

The taxonomy holds four categories. **Compositional Collapse** is when the model notices a required condition in the problem on its own and then, further down, drops it or applies it to the wrong thing. **Reasoning Drift** is when the early steps go correctly, an error appears at one middle step, and that error propagates through everything after it. **Format Instability** is when the required output format breaks, and everything left over is gathered into **Mismodeling**.

One spot invites confusion with a similarly named concept. Other research uses "compositional collapse" for a failure to connect two stable facts, and the author states in the body of the paper that his definition differs from that one. Collapse here does not come from failing to know a fact. It comes from the model discarding a condition it wrote down itself.

The trouble starts not with the categories but with the rule that narrows them to one. The classifier runs the three testable categories in order, Compositional Collapse then Reasoning Drift then Format Instability, and fixes the label of a case at whichever test fires first. The three tests are independent of one another, so a single case can carry evidence for several categories at once, and the classifier takes only the one that came earlier in the sequence. Cases like that are 50.1% of all failures. The ones that fit a single category cleanly come to fewer than half. And the overlap sits almost entirely on one pair: of the 775 cases carrying evidence for two categories or more, 761 hold Compositional Collapse and Reasoning Drift together.

> [!callout]
> If half the cases arrive holding two pieces of evidence, the final label is not set by the case. It is set by who stands at the front of the queue of tests. That bit of queueing, decided with barely a thought when a taxonomy is designed, reads in the results table as a property of the model.

## Reorder the Three Tests and the Most Common Failure Type Changes

The author ran all six orderings over the same data. Three tests means six ways to queue them. Swapping the position of just two tests changed the most common failure type in eleven of the twelve models. Lay all six orderings side by side and Compositional Collapse's share runs from 26.4% to 76.4%, while Reasoning Drift moves from 14.9% to 64.7%. A span close to fifty percentage points for each.

The one model of the twelve whose most common type did not budge was the inspector itself. Its share of failures with duplicate evidence is 10.9%, the lowest of the twelve, and 195 of the graded records are solutions this model wrote. The author records this as a limitation. Whether the evidence separated unusually cleanly, or the model tidied up the ambiguity in its own solutions in its own favor, is something this design cannot tell apart.

Where the overlap comes from is simple. One solution can hold two traces at once: a condition the model wrote down for itself and then let go of, and a middle step that went wrong and dragged the rest of the solution with it. Both traces are really there, so whichever test looks first is the one that finds something.
