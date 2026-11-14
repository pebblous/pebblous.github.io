---
title: Adaption Labs Builds a Dataset Without a Labeling Guide. Who Reviews It?
subtitle: Adaption Labs
date: 2026-11-08
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Adaption Labs Builds a Dataset Without a Labeling Guide. Who Reviews It?

_Adaption Labs_

## Executive Summary

> [!callout]
> An API now exists that takes a single paragraph describing a task and returns tens of thousands of rows of training data. It is datasets.invent, from Adaption Labs, the company Sara Hooker and Sudip Roy founded. The sentence on the company blog reads: "You do not need to arrive with a seed corpus, predefined schema, or detailed labeling guide." Synthetic data generators have been around since the 2010s, but the step that dropped out this time is not generation. It is the structure definition that used to come before it.

> Every performance figure is one the company measured itself. That was true of the September claim of a 35 percent average improvement over configurations its own researchers had set, and it is true of the arXiv technical report revised on October 18, whose five authors all work at Adaption Labs. That report is a step up from the September announcement in one way: it put five outside models through the same test. Even so, on the score for relevance to the task, the report places its own system short of the lead.

> Sections 1 through 4 follow what Adaption Labs has published and the conditions those figures stand on. Section 5, which carries the question over to data quality practice, is this article's reading.

### Key Figures

Sources: [arXiv:2610.01674v2](https://arxiv.org/abs/2610.01674) and the [Adaption Labs blog](https://adaptionlabs.ai/blog/introducing-invent-a-dataset)

All four numbers trace back to Adaption Labs itself. No outside party has run the same conditions again.

<!-- stat-card -->
**0.0%** — Exact duplicates at 20,000 rows — The five model APIs compared in the same test ran from 6.5 to 18.8 percent

<!-- stat-card -->
**7.1–8.9** — Score band for matching the task as given — All six generators fell inside this band, with Invent in the middle of them

<!-- stat-card -->
**48→64%** — Win rate against the company's own researchers — An evaluation Adaption Labs ran itself across eight verticals at 5,000 to 100,000 rows

<!-- stat-card -->
**9.4–13.2%** — Win-rate edge of checklist-filtered data — Measured against 10,000 rows sampled at random. What the checklist contains is not public

## One Paragraph of Task Description Becomes a Dataset

Adaption Labs was founded by Sara Hooker and Sudip Roy at the end of 2025. Both came out of Cohere, and Hooker was at Google DeepMind before that. In February 2026 the company raised a $50 million seed round led by Emergence Capital, and it set its direction toward models that keep learning while in use rather than models that keep getting larger. AutoScientist, the fine-tuning automation product, arrived in May, and Invent a Dataset was attached in front of it in September.

Using it takes one call. You pass datasets.invent a piece of writing describing the data you want, up to 10,000 characters, along with a row count, and optionally a domain and subdomain code. The output comes in one of two shapes. An instruction_dataset pairs instructions with responses for supervised fine-tuning, and preference_pairs pairs a chosen answer with a rejected one for preference learning. Turn on the translation and localization option and the same data multiplies into other languages. The finished dataset downloads as JSON Lines, JSON, CSV or Parquet. There is nothing left to reshape, so the file that arrives can go straight into a training script.

The call runs asynchronously. The first response comes back as running, the caller polls datasets.get until succeeded appears, and then downloads. Switching on estimate returns a credit quote without generating anything, and when translation is applied the billing follows the multiplied row count. Hand the ID of the finished dataset to autoscientist.create and data generation runs into training setup in a single line.

Generation happens only on infrastructure Adaption Labs runs. The published API documentation describes no path for hosting it on your own servers. Both the process that makes the data and whatever that process filters out stay inside the company's perimeter.

## The Automated Step Moved One Place Earlier

Stamping out synthetic data by machine is not new in itself. The tools built until now automated only the step of drawing examples against a frame: a person first fixed the shape of the table, wrote down what share each kind of task should take, and put in a labeling guide what would count as a correct answer. Those first three were human judgment, and that judgment survived as a document.

Those three are what Invent a Dataset takes over. By the company's account the feature interprets the goal, settles on its own what dataset structure will carry that goal, and produces training examples to match. The document people used to write shrinks into one call parameter. The diagram below puts the two flows on the same axis to show where a human hand lands in each.
