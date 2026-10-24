---
title: Meta Buys Sundial, but Can Analysis Skip the Data Team?
subtitle: Meta confirmed the acquisition on October 23. The analytics tool, used by OpenAI among others, takes no outside customers once the deal closes
date: 2026-10-25
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Meta Buys Sundial, but Can Analysis Skip the Data Team?

_Meta confirmed the acquisition on October 23. The analytics tool, used by OpenAI among others, takes no outside customers once the deal closes_

## Executive Summary

> [!callout]
> This article reads Meta's acquisition of Sundial, confirmed on October 23, not as deal news but as a sign that the work of analysis is moving to a different place. Sundial is an analytics company founded in 2021. It built a product that cleans up data, settles what a metric means, and writes the query that goes to the database, so that any team can ask in plain language and get an answer without going through a data team. Both co-founders worked at the company back in its Facebook years, and they now return with the startup they founded.

> The contrast in the numbers is what catches the eye. Sundial had raised $23 million in total, and neither side disclosed what Meta paid for it. Across from that sits the $130 billion to $145 billion Meta has set aside for capital expenditure this year, a sum the company says is not for AI alone but carries its existing core business too. What a company spending on that scale picked up this time was not another model but a tool for asking what the money did. Once the deal closes, OpenAI and every other outside customer loses access to the tool.

> Sections 1 through 3 follow what a Meta spokesperson confirmed, the announcement post from co-founder Julie Zhuo, and the org structure described by chief data officer Alex Schultz. Section 4, which asks who finds out first when automatically cleaned data turns out to be wrong, is this article's own reading and appears in none of the sources.

### Key Figures

Only four numbers are attached to this deal, and the most important one of them is blank.

Sources: [Axios exclusive (Yahoo Finance syndication)](https://finance.yahoo.com/technology/ai/articles/exclusive-meta-acquires-ai-data-205220376.html) · [TokenPost, on funding and the org](https://www.tokenpost.com/news/business/39936) · [Meta's 2026 capital expenditure guidance](https://finance.yahoo.com/technology/ai/articles/meta-lifts-2026-capex-floor-203035634.html)

<!-- stat-card -->
**$130–145B** — Meta's capital expenditure guidance for this year — By the company's account, money that carries its AI work and its existing business together

<!-- stat-card -->
**$23M** — Everything Sundial raised since it was founded — Includes the $16M Series A from July 2025

<!-- stat-card -->
**Undisclosed** — What Meta paid for Sundial — Neither Meta nor Sundial named a figure

<!-- stat-card -->
**None** — Outside customers Sundial keeps after close — OpenAI, Gamma and the rest have to find another tool

## What Meta Bought Is Not a Model

A Meta spokesperson confirmed the Sundial acquisition on October 23. Axios broke the story, and later that night co-founder Julie Zhuo posted the announcement on X. Zhuo and Chandra Narayanan are both joining Meta, along with part of the team including Stanley Watt, Asa Levi and John Maier. Neither side named a price.

Both founders came out of Meta. Zhuo joined Facebook as an intern and rose to vice president of product design; Narayanan was an analytics director at Facebook and head of analytics at Instagram before running analytics at Sequoia Capital. Sundial is reported to have been founded outside Meta in 2021, and the announcement post dates that moment to "nearly six years ago." The same post says the company started before the AI wave arrived and then rebuilt itself to be AI-native. The company they grew outside now goes in with them.

![Julie Zhuo speaking on stage at a conference — former Facebook VP of Product Design and co-founder of Sundial](./image/img-01-julie-zhuo.jpg)
*▲ Sundial co-founder Julie Zhuo. She was Facebook's vice president of product design before co-founding the company with Narayanan in 2021, and now returns to Meta through this acquisition | Source: [Wikimedia Commons (Collision Conf, CC BY 2.0)](https://commons.wikimedia.org/wiki/File:Julie_Zhuo_Collision_Conf_2018_04.jpg)*

The shape of the deal gets a little clearer when the two numbers sit side by side. At its second-quarter earnings report at the end of July, Meta said it expects capital expenditure of $130 billion to $145 billion this year. Data centers and chips take the largest share, and the company wrote that the money supports its AI efforts and its core business. The shorter phrasing, "$130 billion on AI," comes from press and market commentary rather than from the company. Either way the scale is clear. What that company bought this time was neither a model nor data to feed one. It was a tool for putting questions to data that has already piled up. Answering which model, which cluster, which ad actually paid for itself now looks as urgent as building the model.

Once the deal closes, Sundial takes no outside customers. The product goes inside Meta and disappears from everywhere else. That includes the customers named in the announcement post, which said it had been a privilege to support fast-growing AI companies "from OpenAI to Gamma." A tool OpenAI used to analyze its own data has been bought by a competitor and shut down.

> [!callout]
> In a deal where a company buys a product and closes it immediately, what usually carries the price is not the product but the people who built it and the methods they accumulated. From what Meta has disclosed, this deal looks close to that shape. But Meta did not name a price, so whether this was paid for the people or for the technology cannot be settled from outside.

## Judgment Moves from People into Rules

The announcement post says Sundial "automated away many of the obstacles" on the path to meaningful analysis, and lists four of them: cleaning data, creating semantic layers, writing SQL, and telling the story of the result. When the company introduced itself at its funding announcement in July 2025, it described unifying dashboards, notebooks and data transformation pipelines into a single product; a chatbot plugin that let people ask from inside tools like Slack was the outward face of it.

What the automation actually carried away shows up in one line from a customer. In that same funding release, David Sasaki, VP of Analytics and Insights at OpenAI, said: "Sundial automated complex data engineering tasks that would have taken our small team months to build internally. We went from raw logging to comprehensive data visibility virtually overnight." That is a company document backing up the customer line in the announcement post, "from OpenAI to Gamma."

The second of the four matters most here. A semantic layer is a single place that holds what the words a company uses actually mean. Decide there once what "active user" refers to, from which day it starts counting, which accounts it leaves out, and the same question returns the same answer whether a person asks it or an AI does. Without that layer, different teams walk into the same meeting carrying different numbers.

Lay the four steps out one at a time and it becomes clear what the automation took with it. The left column is the four the announcement post listed; the right column is this article's own account of the judgment that used to sit inside each step.

| What Sundial did for you | The judgment a person used to make there |
| --- | --- |
| Cleaning data | Which rows to drop and what to put in which blanks, and whether a value that looks strange is an error or a fact |
| Creating semantic layers | Where the count of an "active user" starts and which accounts it leaves out, and what happens to past numbers when that rule changes |
| Writing SQL | Which tables and which joins the question turns into, and whether those tables hold data fit to answer the question being asked |
| Telling the story of the result | What to read a rising number as the result of, and whether another value that moved alongside it changes the explanation |

The judgments in the right column do not disappear once they are automated. They move. They used to sit in the head of the analyst writing the query; now they sit inside rules the tool settled in advance. The person asking never sees those rules, only the answer. That is why self-serve analytics is fast, and the risk this article turns to later comes from the same place.

## Opening It Up and Centralizing It at Once

Where the Sundial team lands says a little more about what Meta intends to do with the tool. Alex Schultz became Meta's first chief data officer on July 1, 2026, moving over from running marketing, with a brief to rework how the company learns and decides using AI. A new org called Data Analytics Tooling & Agents sits underneath, known internally by its initials, DATA. Narayanan leads the analytics tooling and agents side of it.

![Aerial view of Meta's headquarters — home to the newly formed DATA org the Sundial team is joining](./image/img-02-meta-hq.jpg)
*▲ Meta's headquarters in Menlo Park, California. The new DATA org under Schultz and the Sundial team merge here | Source: [Wikimedia Commons (CC BY-SA 4.0)](https://commons.wikimedia.org/wiki/File:Meta_HQ_2023.png)*

The org's remit is written in four parts: descriptive analysis of what is happening now, finding the questions the company has not yet asked, running experiments such as A/B tests, and watching the quality of AI and data products to raise an alert when something goes off. On LinkedIn, Schultz wrote that "AI has created effectively unlimited demand for insights, and we want to define the future of AI analytics."

One thing here looks like a contradiction. Sundial sold itself on letting each team ask directly without going through a central data team. Meta bought that tool and placed it inside a central org, and one of that org's jobs is to watch quality and raise an alert when something goes off. A product for bypassing the center and an org for building the center arrived in the same announcement on the same day.
