---
title: Can Brave Sell Its Web Index to AI Companies?
subtitle: The New York Times and three other newspapers sued Brave in Manhattan federal court on November 2, saying its 30-billion-page index resold their articles to five AI companies
date: 2026-11-07
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Can Brave Sell Its Web Index to AI Companies?

_The New York Times and three other newspapers sued Brave in Manhattan federal court on November 2, saying its 30-billion-page index resold their articles to five AI companies_

## Executive Summary

> [!callout]
> The defendant in this copyright case is a middle supplier, the kind of company that hands raw material to AI rather than building models with it. The New York Times on its own, and the New York Daily News, the Chicago Tribune and the Orlando Sentinel together, sued Brave Software in Manhattan federal court on November 2, 2026. Brave is best known for a browser that blocks ads, and it also runs its own search engine along with the web index behind it.

> That index is what the complaints object to. The plaintiffs say Brave scraped their articles into an index of more than 30 billion pages and then resold access through a paid API to Anthropic, Perplexity, Mistral, xAI and Cohere. Counting only the three papers owned by Alden Global Capital, the complaint puts more than 2 million articles inside it. The claims run five ways: direct, contributory and vicarious copyright infringement, circumvention of technical protection measures under the DMCA, and unjust enrichment. The five companies that bought the index are not on the defendant list.

> Sections 1 through 4 are facts established by the complaints and the reporting on them. Section 5 is this article's reading of what the case means for anyone who buys data instead of collecting it. A filing is a plaintiff's claim, not yet a court's finding.

### Key Figures

Source: reporting on the two complaints filed on November 2, 2026, by [TNW](https://thenextweb.com/news/nyt-newspapers-sue-brave-ai-scraping), [Search Engine Journal](https://www.searchenginejournal.com/ny-times-accuses-brave-of-scraping-and-exploiting-content/595679/) and [CyberInsider](https://cyberinsider.com/new-york-times-brave-lawsuit-paywall-bypass-ai-scraping/)

<!-- stat-card -->
**30 billion pages** — Brave's web index — The complaints say the crawler that built it has never been identified, leaving publishers nothing to block

<!-- stat-card -->
**2 million** — Articles said to be caught in it — Across the three Alden papers. The Times counts its own separately

<!-- stat-card -->
**Five claims** — Causes of action filed — Direct, contributory and vicarious infringement, DMCA circumvention, unjust enrichment

<!-- stat-card -->
**Zero** — AI companies sued — Anthropic, Perplexity, Mistral, xAI and Cohere appear only as customers

## Two Complaints Arrived on the Same Day

Two complaints naming Brave Software as defendant reached Manhattan federal court on November 2, 2026. One is a 72-page filing from The New York Times alone, docketed as 26-cv-9549. The other is a 69-page filing brought jointly by the New York Daily News, the Chicago Tribune and the Orlando Sentinel, docketed as 26-cv-9554; all three of those papers belong to Alden Global Capital. There are two cases, but they point at the same company and lay out nearly the same facts.

The language the complaints use for Brave is not polite. The plaintiffs call the company a supplier, seller and distributor of stolen works, and reach for the image of a shop that moves stolen goods, labeling Brave an AI fence. A Times spokesperson said the paper supports the ethical and responsible use and development of AI, then said Brave had disregarded current copyright law and had not responded to the cease-and-desist requests the paper sent more than once. The complaint dates those requests to August 2025 and April 2026.

The complaints lead with the size of the index: more than 30 billion web pages, of which over 2 million are articles from the three Alden papers. The crawler that filled the index has never been publicly identified, the complaints say. That point is more than a grievance, because a publisher can block a particular crawler only if the crawler announces its own name. Against an unnamed collector there is no line to write in robots.txt.

Brave's answer on this point is already public. In its help documentation the company explains why its crawler carries no distinct user agent: a fair number of sites open their doors only to Google's crawler, and a separately labeled bot would be turned away in those places. Instead, Brave writes, its bot obeys whatever robots.txt rules apply to Googlebot. Read from the publisher's side, that answer means blocking Brave requires blocking Google too, which is not a road anyone who depends on search traffic can take.

## How Brave's Index Became a Product

A browser company holding a 30-billion-page web index may be the strangest part of the story. Five years of history stand behind it. In March 2021 Brave acquired Tailcat, formerly Cliqz, a German team that had been building an independent search engine. Brave Search opened that June, leaning on outside engines such as Bing for roughly 13 percent of its queries, and that share fell to 7 percent in 2022.

The turning point came in April 2023. Microsoft, newly partnered with OpenAI, raised the price of the Bing search API sharply, and Brave moved its text results to 100 percent of its own index. Images and video followed that August. Once the company stopped renting someone else's index, the next move was to sell its own. The Brave Search API launched in May 2023.

That API now reaches deep into generative AI. Alongside the endpoints that return web and news results, Brave sells LLM Context, which pulls out the passages that match a query and scores their relevance, and Answers, which hands back a finished AI answer with sources attached. This is the grounding step that runs behind a chatbot whenever it speaks about today. Brave has said its products handle more than 22 million AI answers a day.

The API is not the only Brave product the complaints go after. Ask Brave, which composes answers inside Brave Search off the same index, and the browser itself are both on the list. What the plaintiffs offer as evidence is the length of those answers. One Times article came back through the LLM Context endpoint with 1,291 of its 1,295 words intact, the complaint says. On the Ask Brave side, the plaintiffs point to a Chicago Tribune article reproduced at more than 1,200 words and a Daily News article at close to 600. That is nearer to the article itself than to a summary of a search result, the plaintiffs argue.

> [!callout]
> One of the exhibits the complaints draw on is a blog post Brave wrote itself. It recorded that Anthropic had used the Brave Search API while training Claude 2, the plaintiffs note. A customer story the seller posted as a credential became material for the infringement claim.
