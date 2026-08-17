---
title: The AI Routing Gateway Stripe Is Buying for Over $7 Billion
subtitle: OpenRouter was valued at $1.3 billion in May, splits requests across more than 500 models, and takes its fee on credit purchases rather than inference
date: 2026-08-18
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The AI Routing Gateway Stripe Is Buying for Over $7 Billion

_OpenRouter was valued at $1.3 billion in May, splits requests across more than 500 models, and takes its fee on credit purchases rather than inference_

## Executive Summary

> [!callout]
> Bloomberg reported on August 16 that Stripe had finalized a deal to buy OpenRouter for more than $7 billion, and TechCrunch picked up the report. OpenRouter is a routing gateway that spreads requests across hundreds of models through a single API. Three months earlier, in May, it raised a Series B at a $1.3 billion valuation. Stripe said it does not comment on rumor or speculation, and neither company has confirmed the deal.

> The jump in price makes more sense once you read how the company earns money. OpenRouter states in its own documentation that it adds no margin to inference pricing, and instead charges a 5.5% fee when users buy credits. What the payments company bought was a business that already earns on payment fees. The two had also been linked before any acquisition report, through a Stripe tool called Stripe Projects, where OpenRouter was a launch partner.

> This article is about what comes next. A gateway writes down, for every single request, how many tokens were used, how long it took, and which provider handled it. Storing the prompt itself can be switched on and off; this metering record cannot, because billing runs on top of it. Two questions remain. Who holds the rights to that record today, and does it travel with you when you switch models or gateways?

### Key Figures

Put the four numbers side by side and the character of the deal shows. The price multiplied five times in three months, and what holds it up is not a margin on inference but the fee on credit top-ups and the volume passing through the gateway. Behind that gateway stand more than 80 providers, each with a policy of its own.

Sources: [TechCrunch (2026-08-16)](https://techcrunch.com/2026/08/16/stripe-will-reportedly-acquire-ai-gateway-startup-openrouter-for-7b/), [OpenRouter FAQ](https://openrouter.ai/docs/faq), [OpenRouter Series B (2026-05-28)](https://openrouter.ai/blog/announcements/series-b/), [OpenRouter homepage](https://openrouter.ai/)

<!-- stat-card -->
**$7B+** — Reported acquisition price — About five times the $1.3B Series B valuation in May

<!-- stat-card -->
**5.5%** — Fee on credit purchases — Documentation states no margin is added to inference pricing

<!-- stat-card -->
**25 trillion** — Tokens processed weekly — Five times the 5 trillion of six months earlier, per the company in May

<!-- stat-card -->
**80+** — Connected model providers — Retention and training policies apply provider by provider

## Five times the price in three months

What TechCrunch reported on August 16 is short. Citing Bloomberg, it wrote that Stripe had finalized the acquisition of OpenRouter, noted that The Wall Street Journal had reported the talks between the two companies a month earlier, and added that the price now known runs above $7 billion. A Stripe spokesperson said the company does not comment on rumor or speculation.

OpenRouter started in early 2023, calling itself the first LLM marketplace. It offers a single API so developers can move between models without touching their code, and helps them pick a model that fits the task and the budget. Founder and CEO Alex Atallah co-founded the NFT marketplace OpenSea in 2017. At the time of the May Series B he described OpenRouter as the Stripe of the AI world, on the grounds that it gives one point of access to many systems and keeps customers out of lock-in. Three months later, the original of that comparison is buying the company.

The figures the company published in May are the background you need to make sense of the price. The Series B was $113 million, led by CapitalG, Alphabet's growth fund. Nvidia's venture arm NVentures joined, along with the venture arms of ServiceNow, MongoDB, Snowflake, and Databricks. In the same post OpenRouter wrote that weekly throughput had grown from 5 trillion to 25 trillion tokens in six months, and that it was on pace to process more than a quadrillion tokens this year. As of August, the tallies on the company homepage read: more than 200 trillion tokens a month, more than 10 million users, over 80 providers, and more than 500 models.

![OpenRouter's official Series B announcement graphic showing the $113 million raise, investor logos for CapitalG, Andreessen Horowitz, Menlo Ventures, Nvidia, ServiceNow, MongoDB, Snowflake, and Databricks, and a token throughput growth chart](./image/img-01-openrouter-series-b.png)
*▲ OpenRouter's Series B announcement graphic | Source: [OpenRouter Blog](https://openrouter.ai/blog/announcements/series-b/)*

Read the investor list again and the character of the company shows through. These are not model builders; they are companies that use models. OpenRouter described its own position the same way in the Series B post: it sits between agents and model providers, handling routing, reliability, cost optimization, and compliance.

## Why a payments company buys a routing gateway

The argument that value migrates to the pipes once models become commodities has been made many times over the past two years. What is new in this deal is that a payments network bought the pipe. Read OpenRouter's pricing policy, though, and the distance between the two companies turns out to be shorter than it looks.

OpenRouter's FAQ describes the fee structure plainly. It passes through the underlying providers' pricing with no markup on inference, and instead charges a 5.5% fee when users purchase credits. The minimum fee is $0.80, crypto payments carry 5%, and bringing your own provider key also carries 5%. The gateway's margin comes not from a spread per token but from the payment at top-up. The income statement of the company the payments firm picked was already written in payment fees.

The fact that the two were already connected is recorded in OpenRouter's own documentation. In Stripe Projects, the CLI-based developer marketplace Stripe operates, OpenRouter is a launch partner. A single command creates an OpenRouter account, issues an API key, and drops it into the project's environment variables; hosting, database, and AI costs are managed from one Stripe account, the documentation explains. Keys are held in Stripe's encrypted vault, and a skill file is written into the project folder so a coding agent can wire up the service on the developer's behalf.

![Stripe Projects CLI screen showing the stripe projects add openrouter/api command provisioning the OpenRouter service and generating environment variables](./image/img-02-stripe-projects-cli.jpg)
*▲ Stripe Projects CLI, where OpenRouter is a launch partner | Source: [OpenRouter, Stripe Projects](https://openrouter.ai/docs/guides/overview/stripe-projects)*

Stripe's own product list points the same way. On the current Stripe site, the Revenue section lists Metronome, a usage-based billing product, alongside Billing, Invoicing, and Revenue Recognition. The developer guides put how to offer usage-based billing next to how to provision and manage services with an agent. Metering and payment already live inside one company, and if the report holds, the routing decision that sits upstream of both moves under the same roof.

The table below sets out what each of the three layers does. Nothing has been announced about how Stripe would package the combination as a product.

| Layer | What it does | Where it sits today |
| --- | --- | --- |
| Routing | Decides which model at which provider takes this request | OpenRouter (reported acquisition) |
| Metering | Counts consumed tokens and calls, turns them into billable items | Metronome (Stripe product family) |
| Settlement | Prices those items and moves the actual money | Stripe Billing and Payments |

Sources: [OpenRouter, Stripe Projects](https://openrouter.ai/docs/guides/overview/stripe-projects), [Stripe product list](https://stripe.com/)

Once the three layers sit inside one company, the routing log changes character. Today that log is an operational record of which model handled a request and how long it took. Bring metering and billing under the same roof and the same record becomes the supporting document behind an invoice. When an operational record is wrong, the numbers on a dashboard drift. When a settlement record is wrong, the money paid or received drifts. What goes into that record is set out in OpenRouter's own documentation.

## The usage ledger every request leaves

OpenRouter's data collection page states in its opening line that prompt retention is always opt-in. The company does not store prompts and responses; it keeps them only when a user turns on one of two settings. One is private input and output logging, which lets you look back at your own prompts and completions in your logs. The other allows the data to be used for product improvement in exchange for a 1% discount across all models. Both default to off.

The next paragraph of the same document is the subject of this article. OpenRouter writes that it stores metadata for every request: values such as the token counts of the prompt and completion and the latency, with a note that the content of prompts or responses is not included. Storing the body has a switch; this metering record has none. Billing happens on top of it.

The billing procedure appears in the FAQ as a single sentence. When you send a request, OpenRouter receives the total number of tokens processed from the provider, calculates the cost from that figure, and deducts it from your credits. The provider counts, and the gateway debits. What sits in between is the usage ledger, and the accuracy of the settlement depends on the accuracy of that ledger.
