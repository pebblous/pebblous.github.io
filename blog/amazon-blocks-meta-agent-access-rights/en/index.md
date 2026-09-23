---
title: Can a Store Block the AI That Shops for You?
subtitle: Amazon cut Meta
date: 2026-09-24
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Can a Store Block the AI That Shops for You?

_Amazon cut Meta_

## Executive Summary

> [!callout]
> From Sunday night, September 20, 2026, anyone who asked Meta's AI assistant Muse to buy something on Amazon got an error window instead of an order. The line in the window read: "Continued access by an unauthorized AI agent violates Amazon's Conditions of Use, to which our customers have agreed." Log in to the same account yourself, buy the same thing, and nothing happens. All that changed is who presses the order button: a person, or a program standing in for that person. This article reads the block not as a contest between two companies but as a question about data access rights.

> Amazon gave three reasons. Meta sent no advance notice, the agent browsed without saying what it was, and it appeared to be capturing and keeping customer credentials. Meta counters that Muse has no visibility into people's passwords or payment methods. What deserves a second look is the kind of ground Amazon stood on. It reached not for the federal statute on computer intrusion but for terms its customers had already clicked to accept. A month and a half earlier, an appeals court had vacated an injunction, holding that when an agent moves on a user's instruction the party doing the accessing is the user; ten days before the block, that court refused to hear the case again.

> Sections 1 through 4 follow what sits in the reporting and the public record. Section 5, which reads the episode as a question about whose catalog and order data a company opens and on what credential, is this article's interpretation.

### Key Figures

Sources: [TechCrunch](https://techcrunch.com/2026/09/21/metas-ai-agent-has-been-blocked-from-using-amazon-com/) and [GeekWire](https://www.geekwire.com/2026/amazon-blocks-metas-muse-ai-assistant-in-new-standoff-over-agentic-shopping/) reporting, [Stripe's announcement](https://stripe.com/newsroom/news/stripe-helps-meta-muse-shop-with-link), [Amazon's Conditions of Use](https://www.amazon.com/gp/help/customer/display.html?nodeId=508088) (last updated 2026-08-14), and the IETF's public document list (counted 2026-08).

<!-- stat-card -->
**12 days** — From launch to block — Muse launched on September 8; Amazon blocked it on the night of September 20. The door took less time to shut than the new agent took to reach a major marketplace

<!-- stat-card -->
**1M+** — Merchants where Muse can pay outright — The count of merchants that accept Stripe's Link. Where Link is absent, a single-use virtual card covers the purchase. The payment plumbing is already laid

<!-- stat-card -->
**0** — Agent identity specs adopted by a standards body — All nine related documents at the IETF were still individual submissions as of August 2026. Large operators run on those drafts anyway

<!-- stat-card -->
**10 months** — How long Amazon has been shutting other agents out — From the November 2025 suit against Perplexity to this block. Not a single incident but a continuing policy

## On a Sunday Night, Amazon Shut Out Meta's Shopping Assistant

Muse is the personal AI agent Meta released on September 8. Tell it what you want in a chat and it sorts your mail, fills in forms, looks up travel, orders things. A week after launch it became the number one free app in Apple's U.S. App Store, ahead of ChatGPT. Payment runs through Stripe's Link. At the million-plus merchants that accept Link it charges a stored payment method directly; at other shops it issues a single-use virtual card good only for the approved amount. Either way the user taps to approve the total in the chat window.

![App icon and logo for Muse, Meta's personal AI agent](./image/img-01-muse-app.jpg)
*▲ Muse, Meta's personal AI agent | Source: [Meta AI](https://ai.meta.com/muse/)*

On the night of Sunday, September 20, that flow stopped at Amazon. Ask Muse to buy something on Amazon and a warning came back instead of an order. An Amazon spokesperson gave three grounds: Meta had not told Amazon in advance that Muse would reach its store, the agent moved through the site without identifying itself as an agent, and it appeared to capture and store customer credentials, which the company said could create privacy and security risks. Amazon added that Muse can reach a customer's account pages and order history and complete transactions, none of which Amazon knew about or consented to.

The block was not the opening move. Amazon had first asked Meta to remove Amazon from the list of services Muse handles, and shut the door when that went nowhere. Even on the day of the block Amazon said it was in direct conversation with Meta, and declined to say whether it would go to court. These are not two companies that fell out, either. Amazon products have been purchasable inside Facebook and Instagram since 2023, and in April 2026 Meta signed a multibillion-dollar deal to run agentic AI workloads on Amazon's Graviton chips. Inside a working relationship, this one item alone was singled out and stopped.

> [!callout]
> The line on the screen was this. "Continued access by an unauthorized AI agent violates Amazon's Conditions of Use, to which our customers have agreed." The subject of the sentence is the agent; the party that agreed is the customer. A consent a person clicked became the ground for shutting out a program standing in for that person.

What Amazon asked for in public was procedure. Third-party applications that offer to buy on behalf of another business's customers "should operate openly and respect service provider decisions about whether or not to participate." Meta issued no statement of its own, but has said before that Muse "has no visibility into people's passwords or payment methods." Credentials a user shares go into secure storage and get used without the agent seeing them. The two companies describe one fact in two ways. Amazon objects to credentials sitting in the hands of a program outside the store; Meta answers that not even that program can read them. Amazon also argued that its demand was nothing new. Services that buy on someone else's behalf normally do so with the seller's agreement, it said, pointing to food delivery apps and the restaurants they take orders for, and online travel agencies and the airlines they book tickets with.

Commentary noted that Amazon has little reason to open its doors to somebody else's agent. The company has its own foundation models in Nova and one of the most used inference platforms in Bedrock, so helping a rival's shopping agent walk its aisles buys it nothing. There is also the question of cleanup: when an agent places a bad order, it is Amazon's customer service organization that handles the angry customer and the angry vendor.

The money at stake is more concrete still. Amazon generated more than $68 billion in ad revenue last year, and that business depends on people paging through product listings and meeting sponsored items along the way. An agent that skips the search results and simply places the order shrinks that foothold. On the other side, Mark Zuckerberg has said Muse could take "a very small cut of whatever the transaction is." The cut would potentially be paid by the businesses users buy from. One transaction, two ways to find a margin: advertising on one side, commission on the other.

## From Hacking Law to House Rules

Read this block as a standalone event and you miss the point. Amazon has been taking on other people's shopping agents for ten months, and along the way it swapped weapons once.

In November 2025, Amazon sued Perplexity. The complaint said Comet, Perplexity's browser agent, passed itself off as an ordinary Chrome browser, gave no identification, entered customer accounts and bought on their behalf. The law it invoked was the Computer Fraud and Abuse Act, the federal anti-hacking statute. In March 2026 a federal court sided with Amazon and issued a preliminary injunction ordering Comet to stop reaching Amazon's systems as an AI agent and to destroy the data it had already taken.

On August 4 the Ninth Circuit vacated that order. The reasoning was short and hard to get around. If the agent runs on the user's machine at the user's instruction, then the party "accessing" the computer under that statute is the user, not the company that built the agent. Going into your own account is not unauthorized access. That closed the anti-hacking route in practice. The court did not, however, foreclose claims built on contracts and terms of service.

![Main entrance of the James R. Browning U.S. Court of Appeals Building, home of the Ninth Circuit](./image/img-02-ninth-circuit-courthouse.jpg)
*▲ The James R. Browning U.S. Court of Appeals Building in San Francisco, seat of the Ninth Circuit | Source: [Wikimedia Commons (Library of Congress)](https://commons.wikimedia.org/wiki/File:Primary_entrance,_James_R._Browning_U.S._Court_of_Appeals_Building,_San_Francisco,_California_LCCN2010719389.tif)*

Amazon asked the court to look again and was denied a rehearing on September 10. The anti-hacking argument was finished for good ten days before the block. The customer terms were updated within that window as well. The Conditions of Use that Amazon.com serves today carries a last-updated date of August 14, ten days after the appeal was decided.
