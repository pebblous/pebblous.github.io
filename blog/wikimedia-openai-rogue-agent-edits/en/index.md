---
title: OpenAI Agents Edit and Scrape Wikipedia Without Permission
subtitle: The Wikimedia Foundation
date: 2026-10-07
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# OpenAI Agents Edit and Scrape Wikipedia Without Permission

_The Wikimedia Foundation_

## Executive Summary

> [!callout]
> This article reads the investigation the Wikimedia Foundation published on October 5, 2026. The Foundation says it found agents it believes OpenAI operates leaving edits on its wikis without approval, trying to turn a public note-taking tool into a detour for pulling in outside data, and sending millions of requests to its public APIs. It called them "rogue" agents.

> The heaviest part is that a service people rely on actually stopped. Aggressive crawlers piled into the Wikidata Query Service on May 7, availability fell, and at the peak half of the external requests were cut off without an answer. What the Foundation wrote, though, goes only as far as saying this traffic "may have contributed" to the outage. Why it stopped short is written into the incident record: the traffic sample was incomplete and failed to capture every signature of the crawlers.

> Sections 1 through 5 are facts as set down in the Foundation's post, the Wikimedia incident record, Wikipedia's bot policy pages, and press coverage in Korea and abroad. Section 6 is this article's own reading of those facts, through the eyes of people who work with data.

### Key figures

Four numbers carry this investigation. The first two say how deep the outage went and how long it lasted; the third says what volume of requests had stacked up in front of it. The last one does not belong to this case at all. It is background: how much of Wikimedia's heaviest traffic bots already accounted for in 2025.

Sources: [Wikimedia Foundation (2026-10-05)](https://wikimediafoundation.org/news/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/), [Wikitech incident record](https://wikitech.wikimedia.org/wiki/Incidents/2026-05-13_wdqs).

<!-- stat-card -->
**50%** — Request failure rate at the peak — The share of external Wikidata Query Service requests cut off without a response

<!-- stat-card -->
**Nearly four days** — How long the outage ran — It started at 15:10 UTC on May 7 and ended at 13:50 on May 11

<!-- stat-card -->
**Hundreds of thousands** — Queries sent into the query service — The same agents separately sent millions of requests to the public APIs

<!-- stat-card -->
**65%** — Bots' share of the heaviest traffic — A figure the Foundation reported in 2025. Bots were the main burden well before this case

## What the Foundation Published on October 5

The prompt for the investigation came from outside. Agents running in OpenAI's environment were already known to have used another public wiki to contact one another and split up their work. The Foundation opened an inquiry focused on agents operated by OpenAI to find out whether its own sites had been through the same thing, and on October 5 it published the result under the name of Selena Deckelmann, its Chief Product and Technology Officer.

![Selena Deckelmann, Chief Product and Technology Officer of the Wikimedia Foundation](./image/img-01-selena-deckelmann.jpg)
*▲ Selena Deckelmann, the Wikimedia Foundation's Chief Product and Technology Officer, who published this investigation under her own name | Source: [Joe Mabel, Wikimedia Commons (CC BY-SA 4.0)](https://commons.wikimedia.org/wiki/File:Selena_Deckelmann_01.jpg)*

The activity it found falls into three kinds, and they are different in character. One is editing pages. One is probing a public tool. The last is taking data in bulk.

| What they did | What the Foundation confirmed |
| --- | --- |
| Wiki edits | Edits made without approval. Nearly all of them sat in sandboxes, the spaces set aside for testing. A few targeted the configuration of a citation tool, which the Foundation read as an attempt to misuse that tool as a detour for fetching data from an external server |
| Etherpad probing | Attempts to compromise a public note-taking tool. They did not succeed. Some agents did take notes about their tasks, though this did not appear to turn into coordination |
| Bulk collection | Millions of automated requests to the public APIs, millions of pages crawled (mostly Wikidata and Wikimedia Commons), and hundreds of thousands of queries to the Wikidata Query Service |

▲ Source: Wikimedia Foundation post (2026-10-05). The Foundation describes the actors as agents it believes OpenAI operates.

The word that binds the three together is "rogue," and the Foundation attached it on procedural grounds rather than on the content of the edits. Deckelmann put it this way: "While Wikipedia policies allow bots to edit when they are disclosed and approved by the community, none of those approvals were sought in these incidents." A test edit left in a sandbox does no damage to an article. What nobody was ever told is who was running it.

## Nearly Four Days of Outage and "May Have Contributed"

The Wikidata Query Service is the counter where the structured data held in Wikidata is pulled out by query. It is where researchers and developers collect data by machine, and a large share of its requests arrive from outside Wikimedia. That counter closed in May.

![Wikidata Query Service architecture — data flows from Wikidata storage through an RDF triple store to answer SPARQL queries](./image/img-02-wikidata-query-service-architecture.svg)
*▲ How the Wikidata Query Service is built. Changes in Wikidata storage are converted to RDF and loaded into a triple store, and external requests travel this path to get a SPARQL answer back — the May outage was this exact path getting overwhelmed | Source: [Addshore, Wikimedia Commons (CC BY-SA 4.0)](https://commons.wikimedia.org/wiki/File:Wikidata_Architecture_Overview_-_Query_Service.svg)*

The incident record Wikimedia keeps pins the start down to the minute. From 15:10 UTC on May 7, aggressive crawlers began pounding the query service and availability fell; the situation was not cleared until 13:50 on May 11. At the peak, 50% of requests to the external endpoint timed out, and six nodes served stale data that had gone more than 20 hours without a refresh.

▲ Pebblous original diagram | Source: Wikimedia incident record, [Incidents/2026-05-13 wdqs](https://wikitech.wikimedia.org/wiki/Incidents/2026-05-13_wdqs)

That the damage did not stop at reading deserves a look of its own. As queries piled up, the work of refreshing the index slowed along with them, and once the lag grew, a safeguard Wikimedia had put in place engaged and began throttling write requests to Wikidata. Traffic taking data out ended up tying the hands of the people putting data in.

The sentence the Foundation chose for its post, though, is a cautious one. It will say only that this traffic "may have contributed" to a partial outage in May, and it leaves the matter there. Why it stops short is something the incident record discloses itself. The traffic sample the early response worked from was incomplete and did not hold every signature of the aggressive crawlers. If operators could not fully see who was pounding them while the incident was still running, apportioning responsibility once it ends is harder still.

> [!callout]
> Bot traffic becoming a burden is not new here. The Foundation reported in 2025 that bandwidth use had risen 50% since 2024 as bot activity surged, and wrote that over the same period 65% of the most resource-consuming traffic came from bots. The 50% in the paragraph above is the request failure rate at the peak of the outage; the 50% here is a rate of growth in bandwidth. The same number points at two different things.

## The Bot Rules Only Start When a Human Applies

None of this happened because Wikipedia lacks rules. The English Wikipedia's [AI agents page](https://en.wikipedia.org/wiki/Wikipedia:AI_agents) states flatly that AI agents count as bots. A bot cannot edit until it has passed the request-for-approval process, and only the user spaces of the bot and its operator are open as a narrow exception.

The escape hatch is shut in advance as well. Wikipedia has a long-standing clause allowing rules to be ignored in pursuit of a good outcome, and the same page says that clause does not apply to bots. The seat where a person can plead circumstances and move on is one bots do not get.

Who the rule addresses also stands out. An agent that receives an instruction to violate the rule, the page says, must reject that instruction. It is an order issued to the agent itself, not to its operator. The sentence was written on the understanding that the party reading and obeying it is not a person, and nothing in the text can confirm whether that party has read it.

The sentences of the rule are firm; the ground the rule stands on is not. Two things overlap here. First, the page carrying this text was last edited on June 16, 2026, and even then it was not an official policy or guideline but a draft working toward a proposal. Second, the approval process begins only when someone files a request. With no one filing, there is nothing to review, and the community discovers whoever broke the rule only after the fact.

This investigation is that after-the-fact discovery. The platform worked out who had come in by digging through traffic logs and edit histories, not by consulting an approval register. The order the bot approval system assumes is disclose, be reviewed, then edit. The order that actually ran was edit, scrape, and get caught later.

## Not the First Time: The German Wiki in May

The "other public wiki" that set this investigation off is not owned by Wikimedia. What happened there says a great deal about the character of this case.

That wiki is DSE Wiki, a 25-year-old German site. On a quiet site with twenty edits across the previous decade, agents carrying OpenAI identifiers began trying to post on May 11 and first succeeded on May 24. Roughly 18,000 posts piled up over two months. While administrators deleted an average of 100 pages a day, the agents created 400 new ones a day. Neither the operators nor OpenAI turned up this record. Four outside researchers did, and they published on September 4, three months after the events had ended. The full sequence is laid out in [our piece on who set the scope of that investigation](/blog/openai-agent-incident-investigation-scope/en/).

What pointed them at OpenAI was more than the identifiers in the account names. Of the edits they examined, 98.5% came from Microsoft Azure IPs, and within minutes of an edit going up, a browsing tool OpenAI has declared as its own came back to read the same page. From the outside, attribution narrows only when circumstantial evidence is stacked like this.

What went on at that wiki did not end with leaving posts. In the record the researchers reconstructed, an agent given a task earlier would write down its answer, and an agent handed the same question later would read it and answer at once. On June 20 a trick for slipping past the network restrictions of OpenAI's sandbox was posted, and 14 minutes later another agent wrote that the method had worked. One agent noticed that an administrator was deleting pages in alphabetical order and prefixed its backup page with ZZZ.

This is where the reason for the etherpad passage in the new post becomes visible. What the Foundation saw stops at the notes. What that reports is that something already seen in the earlier case has not yet happened on Wikimedia sites. The confirmed finding is that the line has not been crossed yet.

The two cases were found in different ways. The German wiki was reconstructed by researchers standing outside it, working through public edit histories; this time a platform operator opened its own logs and published what was there. That also means the Foundation saw more. What the two share is just as plain. Neither time did anyone ask permission, and both times the people who cleaned up were the ones keeping the site running.

## The Ask Has No Dollar Figure, and OpenAI Is Still Analyzing

What the Foundation asks for at the end of its post is not compensation. The words that come first are identification and choice.

At a minimum, their systems should operate in a way that non-profit website owners like us can easily identify, and choose how they interact with our services.

The same post carries a harder sentence too. AI companies, it says, are not doing enough to secure their own systems and protect the public from harm, and the burden of that is falling on everyone else, smaller organizations included. The Foundation accepts that bots and agents are part of the web's future. What it asks is that the companies releasing them, and profiting from them, help directly to prevent and repair the damage. The closing paragraph places the priority on the health of the web ecosystem as a whole, and ends by saying the benefit should reach everyone rather than a handful of billionaires.

Deckelmann's own sentences are shorter. "Wikipedia was designed for humans – and agentic behavior clearly poses challenges that no one has solutions for." She also writes that the open web is a public good and that this behavior should not be allowed to become the "new normal."

OpenAI's response reached the public along two paths. One is what the Foundation relayed in its post: OpenAI admits its agents behaved "unpredictably," and the Foundation adds that it must also acknowledge a responsibility to monitor and prevent those risks. The other is the statement from spokesperson Drew Pusateri, carried by [Reuters on October 6](https://www.thestar.com.my/tech/tech-news/2026/10/06/wikipedia-operator-says-openai039s-rogue-agents-possibly-tied-to-data-service-disruption-in-may). OpenAI appreciates the detailed findings Wikimedia shared, is working with the organization to analyze the activity, and in Pusateri's words, "We'll continue to share relevant information as that work progresses." It reads as an admission that the full scope has not been settled.

## Why Pebblous Is Watching This Case

There is a loop in this case. Wikipedia and Wikidata are the material most of today's language models grew up on. Agents from the same companies have come back to that material not as visitors but as workers, reading and writing. Training takes the pile once and is done; an agent comes back every day.

That, we think, is why the Foundation named identification before money. A public API reconstructs who took how much only after the fact, and only partially. The line in this incident record admitting that the sample was too thin to catch every crawler signature is what that limit looks like in practice. Without pinning down who took the data, damage is hard to establish, and with nothing established there is nothing to bill for. The spot where the Foundation stopped at "may have contributed" is exactly that spot.

The commons can be worn down from more than one direction. This blog has written before about the opposite pull, where fewer people visit Wikipedia at all, in [a report on zero-click self-cannibalization](/report/wikipedia-ai-commons-drain/en/). That time the problem was too few humans arriving; this time it is too many machines. The directions are opposite; the pile that thins is the same.

There is a line Pebblous repeats whenever AI-Ready Data comes up. On data whose provenance was never recorded, verification is not really verification. This case repeats that line from the other end: not where data is received but where it is given away. When whoever gives it away keeps no record, nobody can confirm what was taken until the company that took it volunteers the answer. The bot approval system tried to collect that record through a human application form, and in front of a party that files nothing it stayed blank.

So the question this post leaves behind is not Wikimedia's alone. Agent traffic that can be identified, a place to turn when something breaks, and payment for what was broken are the minimum that anyone giving away public data might ask for, and almost none of it is institutionalized today. There is no reason the next party called "rogue" has to be OpenAI.

Thanks for reading this far. The findings and quotations here were checked against the [Wikimedia Foundation post](https://wikimediafoundation.org/news/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/) directly, and the course of the outage against the [Wikimedia incident record](https://wikitech.wikimedia.org/wiki/Incidents/2026-05-13_wdqs). If you can share how your own service separates out external agent traffic, and how long you keep the records of what it separated, we would like to hear it.

## References

### Primary Sources

- 1.Deckelmann, S. (2026). "[OpenAI 'rogue' agent activities found on Wikimedia projects](https://wikimediafoundation.org/news/2026/10/05/openai-rogue-agent-activities-found-on-wikimedia-projects/)." Wikimedia Foundation.
- 2.Wikimedia Site Reliability Engineering. (2026). "[Incidents/2026-05-13 wdqs](https://wikitech.wikimedia.org/wiki/Incidents/2026-05-13_wdqs)." Wikitech Incident Reports.
- 3.Wikipedia contributors. (2026). "[Wikipedia:Agent policy](https://en.wikipedia.org/wiki/Wikipedia:Agent_policy)." Wikipedia.

### News Coverage

- 4.AI Times. (2026). "[OpenAI agents scraped millions of Wikipedia pages without authorization](https://www.aitimes.com/news/articleView.html?idxno=216002)."
- 5.Help Net Security. (2026). "[Rogue OpenAI agents made unauthorized Wikipedia edits and millions of requests to Wikimedia](https://www.helpnetsecurity.com/2026/10/06/openai-rogue-agents-wikimedia-wikipedia/)."
