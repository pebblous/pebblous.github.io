---
title: Amazon Cuts the Spines Off Rare Books to Scan Them for AI Training
subtitle: A tracker hidden in one shipment stopped at Amazon
date: 2026-08-18
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Amazon Cuts the Spines Off Rare Books to Scan Them for AI Training

_A tracker hidden in one shipment stopped at Amazon_

## Executive Summary

> [!callout]
> A location tracker packed into a shipment of rare books stopped sending in Las Vegas. 404 Media planted it there and published what it found on August 17. The signal ended inside a facility where Amazon scans books for AI training. The facility is called VGT3, and the picture it uses for itself is a dinosaur holding a book in its claws.

> What happens inside is not only scanning. People who have worked at the site say the spines of the arriving books are cut off before scanning, and no print copy survives the process. The scan data goes into training Nova, Amazon's own model. One reason print copies are worth this much lies in the year of publication. A book published before 2022 cannot contain sentences written by an LLM, and training again on AI-generated text raises the risk of model collapse.

> The question this news leaves for anyone who works with data is not how to judge Amazon. Once the original is gone, what confirms which edition a given scan came from? With no print copy left to compare against, what guarantees the quality of that scan? This article follows those two questions.

### Key Figures

The first two numbers point to why print copies are now treated as raw material. The last two show that collecting that raw material has already been through a courtroom and a market.

Sources: [TechCrunch (2026-08-17)](https://techcrunch.com/2026/08/17/amazon-once-an-online-bookseller-is-destroying-rare-books-to-train-ai-models/), [404 Media (2026-07-31)](https://www.404media.co/ai-company-training-scanning-books-database-isbndb/), [Pebblous analysis of the Anthropic copyright settlement](/blog/anthropic-copyright-settlement-provenance/en/)

<!-- stat-card -->
**2022** — Purity baseline for the raw material — Nothing published earlier can contain sentences written by an LLM

<!-- stat-card -->
**0 copies** — Reference originals left after scanning — A print copy with its spine cut off cannot be used to re-verify anything

<!-- stat-card -->
**$1.5B** — Settlement on Anthropic's pirated-copy track — Lawful purchase followed by destructive scanning went the other way, as fair use

<!-- stat-card -->
**9 days** — Until ISBNdb took its brokerage page down — Nine days after the report it deleted the service pitch and denied the business

## Where the Tracked Book Stopped

The story began with talk among booksellers. Someone was buying rare books in bulk, not the way a collector buys but the way a list gets worked through. 404 Media chose to follow the goods on their way out rather than question the buyer. Reporters put a location tracker inside a shipment of rare books they suspected an AI company had purchased, then waited to see where the freight would stop after crossing the country.

It stopped at an Amazon facility in Las Vegas. 404 Media identifies the facility as VGT3 and writes that this is where Amazon scans books for AI training data. TechCrunch reported that the operation marks itself with a picture of a dinosaur holding a book in its claws. Amazon buying books in bulk, scanning them for AI training, and destroying them along the way had not been reported before.

![Large warehouse exterior wall with an Amazon logo — the type of Amazon fulfillment facility that VGT3 belongs to](./image/img-01-amazon-fc.jpg)
*▲ An Amazon fulfillment facility exterior (illustrative photo, not the actual VGT3 building) | Source: [Wikimedia Commons (CC BY 4.0)](https://commons.wikimedia.org/wiki/File:Amazon_Fulfillment_Center_Warehouse_in_Thornton,_Denver,_Colorado_(DEN3)_(55253052895).jpg)*

One tracker proved exactly one thing: where the book went. That one thing changes the character of everything else in the argument. Most of the discussion about where training data comes from has been about web crawling, licensing deals, and online routes such as shadow libraries. This time trucks, a warehouse, and a cutting machine enter the picture. When data acquisition becomes a physical process, it gains a step that cannot be undone.

## Cutting the Spine Makes the Scan Faster

The account from people who worked at the facility is simple. Cutting the spines off books that arrive in bulk turns them into loose sheets that feed faster, and print copies handled that way never return to their original form. Amazon uses the data to train Nova, its own model. The statement the company gave 404 Media was that it buys books through commercial channels to improve the products and services its customers use. That sentence speaks to whether the purchase is lawful. It is not an answer about what happens to a book after it is bought.

Why a choice about speed ends in destruction becomes visible at scale. Booksellers suspect the AI companies intend to work through essentially every book in order, by ISBN. Once filling out a list is the goal, careful handling of any single copy turns into a cost, and a process that scans while keeping the binding intact loses to throughput. The destruction is not an accident. It is a step included in the design.
