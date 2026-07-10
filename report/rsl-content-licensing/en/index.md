---
title: You Can Carve a Right Into Data. Can You Make It Follow the Data Into Inference?
subtitle: The traceability gap exposed by RSL, the standard that attaches machine-readable AI usage terms to content
date: 2026-06-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# You Can Carve a Right Into Data. Can You Make It Follow the Data Into Inference?

_The traceability gap exposed by RSL, the standard that attaches machine-readable AI usage terms to content_

## Executive Summary

> [!callout]
> For decades, content owners had exactly one thing they could say to a web crawler: "Stay out." The `Disallow` directive in robots.txt cannot express anything more nuanced than that. RSL — Really Simple Licensing, announced in September 2025 with its 1.0 spec finalized that December — is the most concrete attempt yet to change that one word into "Come in, on these terms." Led by a co-creator of the RSS lineage, this open XML standard inscribes a license directly onto content across five channels (robots.txt, HTTP headers, HTML, RSS, and file metadata), and it lets owners distinguish crawling, training, and inference inputs, each with its own usage terms and pricing model. More than 1,500 publishers have voiced support. This report argues that the standard is a signal not of success, but of asymmetry.

> **Declaring a right is easy; making that right follow the data all the way into inference is something no one has solved.** Charging for the act of crawling (pay-per-crawl) works because a crawl is a single, observable HTTP event on the network: a CDN can gate it at the door or bill for it. Charging for how that data is actually used to produce an answer (pay-per-inference) is a different animal. It requires attributing, inside the model, which training documents contributed to a given output. Even the academic state of the art, influence functions, costs roughly as much compute as pretraining, is only approximate, and has no standard runtime infrastructure. The more fundamental problem sits at the starting line: more than 70% of major training datasets are missing license information entirely, so the trail is already broken before tracing can begin.

> That is why the real question RSL raises is not a copyright headline but a data-infrastructure one: can you trace where data came from and which answer it ended up shaping, all the way through? Carving a license into metadata is the easy part. Making that license travel through training and inference is a different order of problem, and that empty layer is the subject of this report.

**Editor's note.** For the hard half of RSL (pay-per-inference) to work at all, you have to be able to trace which data shaped which output. That is fundamentally a problem of data provenance, lineage, and authenticity, and it overlaps directly with the territory Pebblous has been working on through DataClinic and AI-Ready Data. Beneath the layer that declares a license, the layer that makes data traceable enough for the right to follow is still empty. Pebblous wrote this report because data quality is the variable sitting at the center of that empty layer.

### Key Figures

The four numbers below trace the backbone of this report. The easy half, charging for crawls, already runs at a scale of a billion responses a day, while 70% of training datasets flow into models with their license information already lost, severing the trail at its origin. Not a single major AI company has yet formally pledged to honor these declarations, and in the meantime a $1.5 billion settlement has nailed down that the value of this gap is anything but abstract.

Sources: Data Provenance Initiative (Longpre et al., 2023; _Nature Machine Intelligence_, 2024), Cloudflare Radar (2025), Bartz v. Anthropic settlement (Courthouse News, 2025), industry reporting (as of 2026-06).

<!-- stat-card -->
**70%+** — Training datasets missing license info — Where the trail breaks at its origin

<!-- stat-card -->
**1B/day** — Cloudflare HTTP 402 responses — The scale at which pay-per-crawl already works

<!-- stat-card -->
**0** — Major AI firms formally pledging RSL compliance — As of 2026-06, the enforcement vacuum

<!-- stat-card -->
**$1.5B** — Bartz v. Anthropic settlement — Largest copyright settlement in U.S. history

## How robots.txt Became a Bargaining Table

Created in 1994, robots.txt is one of the longest-surviving conventions on the web. A single text file that tells search-engine crawlers "don't scrape these paths," it has stood in for the handshake between site operators and bots for thirty years. But it can express only two things: let in (`Allow`) or keep out (`Disallow`). In a world where the worst case was a search index scraping content meant for human eyes, that binary was enough.

### 1.1. The Moment the Binary Broke

Generative AI changed what crawling means. Even when the same page is fetched, gathering it for a search index and gathering it to train a large language model are entirely different events for the content owner. The former sends traffic back; the latter absorbs the content's value into the model and then produces answers that route around the original site. Content owners now want to say something more precise than "stay out," something like "search indexing is fine, but if you want to train on this, pay." The robots.txt binary has no way to express that sentence.

### 1.2. The `License:` Directive — From Blocking to Conditional Consent

What RSL did was add one line to robots.txt. Below the familiar `Disallow`, it places a `License:` directive that, instead of blocking, points to "follow the terms in this license document and you may use it." The signal shifts from binary (block / allow) to polynomial (allow on these terms, at this price).
