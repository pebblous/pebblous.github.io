---
title: AI No Longer Buys Data. It Rents It.
subtitle: From one-time training dumps to real-time access — what 91 licensing deals reveal about the data market
date: 2026-06-20
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AI No Longer Buys Data. It Rents It.

_From one-time training dumps to real-time access — what 91 licensing deals reveal about the data market_

## Executive Summary

> [!callout]
> Over the past three years, the way AI companies acquire content has changed quietly but structurally. Licensing that attributes sources and grants live access to content grew from two deals in 2023 to roughly thirty by 2026, and more than ninety deals were disclosed publicly over the same window. What this report cares about is not the count but the unit of the deal. What AI companies want to buy has moved from a static dump you scrape once and feed into training, to a continually refreshed supply of sources, grounding, and real-time feeds. Instead of buying data once, they have started renting it continuously.

> This shift is close to the market confessing what data actually is. Data bought once begins to age the moment a model ships. When a model handles facts that postdate its training cutoff, the accuracy gap between a retrieval-augmented (RAG) model and one without it widens to 44% on standard benchmarks. That number is what the aging looks like in practice. Value does not sit in an asset frozen at one point in time; it lives in a flow that is continuously verified, refreshed, and supplied.

> When flow becomes the default, the data team's job changes too. It moves from cleaning a dataset once and handing it off, to perpetually guaranteeing the freshness, accuracy, and provenance of a feed that keeps moving. Yet the market has no standard for running that operation. How a correction propagates into a model, whether outputs can be linked back to their sources, how any of it should be priced — all remain unsettled. A flow that is not verified is not an asset; it is a liability.

<!-- stat-card -->
**2 → 34** — Real-time / attribution deals — From 2 in 2023 to 34 in 2026 (projected)

<!-- stat-card -->
**91 deals** — Disclosed licensing, cumulative — Jan 2023–Jun 2026, public deals only

<!-- stat-card -->
**+44%** — RAG accuracy gap — Retrieval's edge on post-cutoff data

<!-- stat-card -->
**77%** — Aimed at live retrieval — Primary use in 2025 licensing deals (52 analyzed)

## The Data You Bought, You Now Rent

The AI content licensing market that began in 2023 was simple at first. Deals like the Associated Press's archive of articles since 1985, or Axel Springer's bundle of political and business titles, handed over accumulated text once so a model could train on it. The content owner took a lump sum; the AI company absorbed the data into its weights. Transfer ownership once and you are done — closer to a real estate sale than anything else.

That structure flipped in three years. [Media and the Machine](https://mediaandthemachine.substack.com/p/ai-content-licensing-deals-june-2026), run by media analyst Rob Kelly, tallied every deal disclosed through June 2026 and found that deals involving attribution and live access grew from 2 in 2023 to 11 in 2024 and 18 in 2025, and are projected to reach 34 in 2026. Over the same period, 91 licensing deals were disclosed in total. What matters is less that the number of deals rose than that the nature of the new deals changed.

The chart below traces real-time and attribution deals by year. The 2026 figure is a projection based on the first half of the year.

Real-time / attribution licensing deals by year (count). 2026 is projected. Source: Media and the Machine, June 2026.

### When the Free Scraping Lane Closed, People Started Lining Up

Two forces drove this shift. The first was supply being cut off. When Cloudflare began blocking AI crawlers by default in July 2025, the lane that had been free to scrape narrowed. By Rob Kelly's count, 10 licensing deals had been reported before Cloudflare's block; 22 were reported after it. The causal line — scraping closes, demand moves to formal licenses — shows up in the numbers.

![Cloudflare logo — its July 2025 default AI crawler block triggered a doubling of formal licensing deals](./image/img-01-cloudflare.svg)
*▲ Cloudflare started blocking AI crawlers by default in July 2025. Disclosed licensing deals rose from 10 to 22 in the period that followed | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cloudflare_Logo.svg)*

The second was revenue being cut off. As AI search summarizes answers on the page, the clicks that used to flow to publishers collapsed. Media and the Machine estimates that AI summaries have cut website click-throughs by roughly 80%. With the model that turned traffic into ad revenue breaking down, licensing the content directly became all but the only alternative left. In Digiday, media strategist Paul Bannister put it this way: publishers "took the check, but realized that money wasn't going to save their business in five years." The recognition that a one-time advance is not enough turned into a demand for recurring revenue.

> [!callout]
> The direction and the speed hold up across different datasets. In an AI Watch.dog tally sampling early 2023 through 2024, real-time and attribution-type deals were 42%; in neudata's analysis of 52 contracts from 2025, that share climbed to 77%. The two counts use different scopes and cannot be compared on the same denominator, but both point the same way — from buying once to renting continuously.

## What "Real-Time Access" Actually Buys and Sells

"Real-time access" is easy to wave at vaguely, but inside a contract it breaks into five concrete rights. An **ongoing feed** that keeps delivering refreshed content via API; a **link** that connects an AI answer back to the source; **grounding** that ties the model's answers to current external material; **attribution** that displays and back-links the source in the answer; and **real-time data** that reflects changes the moment they happen. All five presuppose a refreshed flow, which is what structurally separates them from a training dump handed over once and done.

From what is sold to the billing unit to attribution duties, the one-time training license and the real-time access license diverge on nearly every dimension.

| Dimension | One-Time Training License | Real-Time Access License |
| --- | --- | --- |
| What is sold | Rights to a past archive | Access to refreshed content |
| Refresh | None (fixed at handover) | Continuous (via feed / API) |
| Billing unit | One-time advance | Per-query / crawl / annual subscription |
| Attribution | Usually none | Attribution / back-link required |
| Data aging | Begins the moment it ships | Offset by continuous refresh |
| Analogy | Buying property | Subscription / lease |

Abstract categories alone don't make the shift tangible. Three cases show how the language of the contracts has actually changed.

### Case 1. The Washington Post — Erasing "Training" From the Contract

The April 2025 deal between The Washington Post and OpenAI is the template for the shift. ChatGPT would summarize and quote Post articles and always show a link back to the original — but **would not use the content for model training**. Digiday summed up the deal as one in which "ChatGPT displays summaries, quotes and links, with no mention of using the Post's content to train OpenAI's LLMs." The Guardian's February 2025 deal had the same structure. As Digiday put it, later deals tilted toward "downplaying or omitting training clauses, while emphasizing attribution within ChatGPT search." At the level of contract wording, what is bought and sold has moved from owning the data to accessing the refreshed flow.

### Case 2. Reddit — The Prototype of the Subscription Feed

Rather than selling its past posts, Reddit subscribes buyers to a live, continually refreshed stream of posts via API. The data-API contracts are estimated at roughly $60M a year for Google and $70M a year for OpenAI. Together they put Reddit's AI licensing revenue near $130M a year — about 10% of total revenue. Because it sells a structured real-time feed rather than a plain training dump, Reddit is the supplier that shows the buy-to-rent turn most clearly.

![Reddit logo — sells a live, continually refreshed API stream to Google and OpenAI for an estimated $130M/year](./image/img-02-reddit.svg)
*▲ Reddit sells a structured real-time API stream rather than a past archive — the clearest example of the buy-to-rent turn | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Reddit_logo.svg)*

### Case 3. Wikimedia — Standing Access to 6.5 Billion Documents

In January 2026, Wikimedia announced the Wikimedia Enterprise partnership, joined by Amazon, Meta, Microsoft, Perplexity, and Mistral. The core of it is selling "high-volume, high-speed access designed for AI" as a formal product, in place of free scraping. According to [TechCrunch](https://techcrunch.com/2026/01/15/wikimedia-foundation-announces-new-ai-partnerships-with-amazon-meta-microsoft-perplexity-and-others/), Wikimedia said in April 2025 that bot traffic had driven multimedia bandwidth up 50% while human visits fell 8%. They reordered a chaotically scraped flow into structured, paid, real-time access. The market has started attaching a premium to a refined, structured flow.

![Wikimedia logo — January 2026 Wikimedia Enterprise partnerships with Amazon, Meta, Microsoft, Perplexity, and Mistral converted chaotic bot scraping into structured paid real-time access](./image/img-03-wikimedia.svg)
*▲ Wikimedia Foundation formalized AI partnerships with Amazon, Meta, Microsoft, Perplexity, and Mistral in January 2026 — converting chaotic bot traffic into structured, paid real-time access | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Wikimedia-logo.svg)*

### What Sells for the Most Tells You the Value of the Flow

The three cases are not exceptions; they are the whole market in miniature. When Media and the Machine breaks disclosed deals down by category, news and journalism leads with 48 deals — more than half the total and the largest single block. Music and audio (16) and image and video (12) follow. The very fact that text written fresh every day trades more actively than an archive piled up once is a signal: the market has started pricing a refreshed flow rather than a static holding.

The buy side is concentrated too. OpenAI leads with 24 disclosed deals — double the second tier (Microsoft and Meta, at roughly 12 each). It reads as a play to lock up access to fresh content earlier and in greater volume than rivals. If these were archives you buy once and forget, there would be little reason for one company to sweep up deals this aggressively. Because it is access that keeps refreshing, who grabs the flow first becomes a competitive question.

![OpenAI logo — leads disclosed AI licensing deals with 24, double the second-tier group of Microsoft and Meta](./image/img-04-openai.svg)
*▲ OpenAI leads disclosed AI licensing with 24 deals — double Microsoft and Meta's ~12 each. A strategy to pre-empt rivals on continually refreshed real-time access | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:OpenAI_Logo.svg)*

## From Asset to Flow: Redefining the Economics of Data

The real reason the deal structure changed lies in the economic nature of data. Economics splits value two ways: a stock, the quantity accumulated at one point in time, and a flow, the quantity moving over time. A one-time training license treats data as a stock. It assumes that once you buy it, value persists for as long as you hold it. But data starts leaking value the moment you hold it.

### Data Has a Shelf Life

A model's knowledge stops at its training cutoff. From cutoff to actual release usually takes six to eighteen months, and the world keeps moving after release. So when you ask about facts that postdate the cutoff, accuracy drops. One study measured the accuracy gap between a model with retrieval augmentation (RAG) and one without it at 16.3% on pre-cutoff data, but 44.16% on post-cutoff data. The more a model has to answer from bought data alone, the more badly it errs in the face of current facts.

Below is that gap compared before and after the cutoff. For the same model, the further the facts sit from the moment of training, the sharper the advantage of real-time retrieval.

#### +16.3%

Pre-cutoff data

A period already baked into training. Retrieval's edge is relatively small.

#### +44.16%

Post-cutoff data

A period absent from training. Without real-time access, accuracy collapses.

If data is a flow, the way it's traded has to follow the flow — from ownership to subscription, the SaaS-ification of data. Just as software licenses you buy once and use forever turned into monthly subscriptions, data is moving toward a subscription model that assumes ongoing refresh.

### The Price Tag Evolved Across Four Generations

The evolution of billing compresses this turn toward flow. The first generation was a fixed annual fee — the AP, Axel Springer, and the early Reddit–Google contract belong here. The second layered usage-based variability on top of a fixed base, as with Taylor & Francis or Dotdash Meredith. The third is usage-based billing keyed to the number of queries or crawls. The fourth, now being negotiated, is outcome-linked — Reddit's demand that Google price by the share of citations in AI answers is the prime example.

The infrastructure layer supporting this change has grown alongside it. TollBit bills per crawl, Cloudflare per request, and ProRata runs a revenue-sharing model with more than 500 participating publishers. It is infrastructure-level evidence that the center of gravity in data cost is shifting from one-time purchase (CAPEX) to ongoing operating expense (OPEX).

> [!callout]
> "Data is an asset" is only half right. Data is not an asset you hold but a flow that yields value only while it moves. Buy it once and pile it up and value leaks away; keep refreshing, verifying, and supplying it and value holds. The market is admitting this fact by changing its price tags.

## From Batch to Real-Time: The Data Infrastructure Changes

When deals turn into flows, the pipelines that handle that data change with them. A one-time training dump lived in the world of batch ETL. You periodically gathered data, cleaned it once, fed it into training, and inspected it once before shipping. A real-time feed lives in the world of streaming and retrieval. Data comes in continuously, and the model retrieves it the moment it reasons and folds it into the answer.

How data quality works in the two structures is fundamentally different.

![Apache Kafka architecture diagram — distributed event-streaming platform, the de facto infrastructure standard for real-time data pipelines](./image/img-05-kafka.svg)
*▲ Apache Kafka — the distributed event-streaming platform that replaced batch ETL as the standard infrastructure for real-time data supply | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Apache_Kafka_logo.svg)*

#### Batch ETL — One-Time Training

- •Periodic bulk loading
- •A single inspection before shipping
- •Defects averaged out and diluted across the weights
- •Cost as one-time purchase (CAPEX)

#### Streaming / Retrieval — Real-Time Access

- •Continuous supply and retrieval
- •Always-on monitoring of the flow
- •Defects exposed as-is at inference time
- •Cost as ongoing operating expense (OPEX)

The crux of the difference is the last item. In batch training, a single dirty record was averaged out and diluted across countless weights. In a real-time feed, that one record becomes the answer as-is. A data defect is not buried in the training stage but exposed instantly at inference time. The burden of quality shifts from once before training to all the way through the flow.

### Four Unsolved Problems Created by Real-Time Supply

The research organization [Ithaka S+R](https://sr.ithaka.org/our-work/generative-ai-licensing-agreement-tracker/), in its licensing tracker, points to four operational problems still unsolved in the era of real-time access. None of them can be fixed by one-time cleaning; all require handling the flow continuously.

Correction propagation

When a source is corrected or retracted, how does that fact propagate into the model? There is no standard.

Author opt-out

No established mechanism lets an individual author ask for their work to be pulled.

Provenance

Whether outputs can provide citations and back-links to their sources is still unresolved.

No pricing / contract standard

No standard contract form for designing these deals has yet emerged in the market.

The four problems are not separate items but branches of a single trunk: the ability to track and guarantee, all the way through the flow, where data came from, how it changed, and whether it is accurate right now. It is a demand that static datasets never made.

## In the Age of Flowing Data, Quality Becomes an Operation

All the market data so far converges on one conclusion. If the value of data has moved from a held asset to something that flows, then data quality has to move too — from inspecting once to continuously guaranteeing the flow. The deal structure changed that way, and the way we handle data follows.

Move it into practice and the data team's job changes. The weight shifts from "clean a dataset once and hand it off" to "continuously guarantee the quality, freshness, and lineage of a moving feed." Procurement budgets turn from one-time costs into subscription operating expenses, and attribution, opt-out, and correction obligations enter as new contractual risk. In the age of real-time supply, four things are the first a data team should check.

- •**Freshness SLA** — Can you commit to how current the data you supply will be?
- •**Lineage / provenance tracking** — Can you trace which source fed which output?
- •**Correction-propagation process** — When a source changes, does that change reach the answer?
- •**Opt-out handling** — Can you process a request to be removed within the flow?

All four are always-on quality capabilities that one-time cleaning cannot fill. So in a world where real-time supply becomes the default, one sentence holds: a flow that is not verified is not an asset but a liability. When unclean data flows, that defect becomes the answer as-is at inference time and comes back as wrong answers and legal exposure.

> [!callout]
> It is no accident that Wikimedia sold "refined, structured, real-time access" as a product in place of free scraping. The market has begun, of its own accord, to price data that has been verified in a form that can flow. This is the point at which data-quality and lineage verification are elevated from a side task of one-time cleaning to the core of the always-on operation of handling flow.

Editor's Note

The problems Pebblous has been working on — diagnosing and cleaning data quality (DataClinic) and producing data in a flowable form (AI-Ready Data) — sit in the same place as the baseline demand this report maps out. We read this shift not from the vantage of a tool that cleans static data once, but from the perspective of operating the quality of flowing data continuously.

## References

### Primary Sources

- 1.Kelly, R. (2026, June). "[AI Content Licensing Deals (June 2026)](https://mediaandthemachine.substack.com/p/ai-content-licensing-deals-june-2026)." _Media and the Machine_.
- 2.Ithaka S+R. (2024). "[Generative AI Licensing Agreement Tracker](https://sr.ithaka.org/our-work/generative-ai-licensing-agreement-tracker/)." Ithaka S+R.

### Industry & News

- 3.Digiday. (2025). "[What the Washington Post's OpenAI deal says about the future of AI content licensing](https://digiday.com/media/media-briefing-what-the-washington-posts-deal-with-openai-says-about-the-future-of-ai-content-licensing/)." _Digiday_.
- 4.Digiday. (2025). "[A timeline of the major deals between publishers and AI tech companies in 2025](https://digiday.com/media/a-timeline-of-the-major-deals-between-publishers-and-ai-tech-companies-in-2025/)." _Digiday_.
- 5.TechCrunch. (2024, May 16). "[OpenAI inks deal to train AI on Reddit data](https://techcrunch.com/2024/05/16/openai-inks-deal-to-train-ai-on-reddit-data/)." _TechCrunch_.
- 6.TechCrunch. (2026, January 15). "[Wikimedia Foundation announces new AI partnerships](https://techcrunch.com/2026/01/15/wikimedia-foundation-announces-new-ai-partnerships-with-amazon-meta-microsoft-perplexity-and-others/)." _TechCrunch_.
- 7.NPR. (2025, September 5). "[Anthropic reaches $1.5 billion settlement with authors over AI training material](https://www.npr.org/2025/09/05/g-s1-87367/anthropic-authors-settlement-pirated-chatbot-training-material)." _NPR_.

### Technical & Market Analysis

- 8.Aya Data. (2025). "[The State of Retrieval-Augmented Generation (RAG) in 2025 and Beyond](https://www.ayadata.ai/the-state-of-retrieval-augmented-generation-rag-in-2025-and-beyond/)." _Aya Data_.
- 9.DataIntelo. (2024). "[Dataset Licensing for AI Training Market Research](https://dataintelo.com/report/dataset-licensing-for-ai-training-market)." DataIntelo.
- 10.MarketsandMarkets. (2025). "[Retrieval-Augmented Generation (RAG) Market — Global Forecast to 2030](https://www.marketsandmarkets.com/Market-Reports/retrieval-augmented-generation-rag-market-135976317.html)." MarketsandMarkets.
- 11.Yahoo Finance. (2024). "[Shutterstock AI licensing business generated $104M in 2023](https://finance.yahoo.com/news/shutterstock-ai-licensing-business-generated-120000890.html)." _Yahoo Finance_.

※ 2026 deal figures are projections based on first-half trends, and some estimates — such as the disclosed-to-undisclosed deal ratio (1:50–100) — are industry-insider approximations that are difficult to verify independently.
