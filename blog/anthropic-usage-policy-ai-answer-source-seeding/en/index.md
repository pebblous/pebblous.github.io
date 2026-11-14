---
title: Anthropic Usage Policy Bans Faking Sources That AI Will Cite
subtitle: The policy that took effect November 12 bans content that misrepresents its origin, authorship, or independence. The case behind the clause is a network of 70 fake local news sites.
date: 2026-11-12
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Anthropic Usage Policy Bans Faking Sources That AI Will Cite

_The policy that took effect November 12 bans content that misrepresents its origin, authorship, or independence. The case behind the clause is a network of 70 fake local news sites._

## Executive Summary

> [!callout]
> Anthropic has written one new prohibition into its usage policy. It covers planting writing into the sources a search engine or an AI system draws its answers from, writing that misstates where it came from, who wrote it, and whom it is independent of. The update was published on October 8 and took effect on November 12.

> The case that produced the clause is set down in a threat report released in September. A French advertising agency used Claude to run 70 fabricated local news sites, pushing out 8,913 articles in about 20 languages, with a paired social account and a layer of commenting accounts attached to each site. Yet the same report says most of that content drew little observable engagement from real audiences. The outcome the clause is written against has not been confirmed in any public document.

> The clause wording, dates, and case figures carried in sections 1 through 4 come from Anthropic's usage policy text, its announcement of October 8, and its threat report of September 10. The reading in the second half of section 4, that the axis of the ban has moved from whether the writing was generated automatically to whether its author was hidden, and all of section 5 are this article's own.

### Key Figures

Four numbers. The first two give the size of the case that produced the clause. The third gives how far that case actually reached. The last is the size of the high-risk list that changed in the same update.

Sources: [Anthropic Usage Policy (effective 2026-11-12)](https://www.anthropic.com/legal/aup), [Countering misuse of AI: September 2026](https://www.anthropic.com/threat-intelligence-report-september-2026).

<!-- stat-card -->
**70** — Fabricated local news sites — Each dressed to look like an outlet of its own, all of them tied to a single operator account

<!-- stat-card -->
**8,913** — Articles the network published — Written in about 20 languages, with near-identical pieces going up across several sites within three minutes

<!-- stat-card -->
**Category Two** — The spread rating the report assigned — Meaning no evidence was found of the content breaking out beyond the network's own sites and accounts

<!-- stat-card -->
**11** — Domains on the new high-risk list — Content generated automatically and published externally, an item on the old list, is absent from this one

## Manipulating What an AI Reads as a Source Is Now Banned

A section headed "Do Not Engage in Deceptive Campaigns or Artificial Activity" stands in the usage policy that took effect on November 12. Seven things were reworked in this revision, and the arrival of this section sits first on the announcement's list. Anthropic gathered prohibitions that had been scattered across the elections, fraud, privacy, and misinformation sections into this one, and said it applies whether the purpose is political or commercial. Of the several lines written into that section, one is the sentence below.

"Manipulate the sources from which search engines or AI systems draw answers by seeding them with content that misrepresents its origin, authorship, or independence (e.g., networks of sites posing as unaffiliated sources corroborating the same claims)"

Anthropic Usage Policy, "Do Not Engage in Deceptive Campaigns or Artificial Activity" section. Effective November 12, 2026.

Three words draw the boundary: origin, authorship, independence. The test is not what the writing says. It is whether the writing tells the truth about where it came from, whose hand produced it, and whose interests it stands apart from. The example the policy puts in parentheses points at the same place, a cluster of sites posing as unaffiliated sources that corroborate one another's claims.

That line is not the only one in the section. Impersonating real people or organizations and disguising the source of content through fake personas and accounts, concealing the sponsorship of content aimed at public opinion or decision-makers, spreading content through networks of fake outlets and accounts to hide that they share a source, and building tools that make such activity easier are all written in alongside it.

Read the announcement of October 8 to the end, though, and search engines and AI answers never come up. The words "search engine," "AI system," "authorship," and "independence" appear in it not once. The deceptive conduct the announcement described was hiding who is behind a message or amplifying content through fake accounts, and building the tools and infrastructure to run influence operations. The line aimed at the sources an AI will pick up shows itself only when you open the policy text separately. The table below sets the two documents side by side on the same words.

| Word searched for | Announcement of October 8 | Policy text effective November 12 |
| --- | --- | --- |
| search engine · AI system | Does not appear | Written in as what must not be manipulated |
| authorship · independence | Does not appear | Two of the three tests that sort out false labeling |
| Deceptive conduct described | Fake accounts and fake news sites, tooling for influence operations | Those three plus source manipulation, concealed sponsorship, networks disguised as independent outlets |

▲ The same words searched for in Anthropic's announcement (2026-10-08) and in the usage policy text (effective 2026-11-12).

This line was not the most widely cited change either. The same update brought in a clause prohibiting sustained and needless abuse of the models, and most coverage put that one in the headline. That clause and the way it is enforced were taken up separately in an [earlier article](../../anthropic-usage-policy-model-abuse-clause/en/).

## A Network Posing as Independent Newsrooms Prompted the Clause

As its reason for the new section, the announcement pointed to a piece it had published a month earlier. The company had seen state media outlets, government propaganda bodies, and commercial firms use Claude to run networks of fake accounts and manipulated news sites. The document carrying those cases is the threat report released on September 10, which covers what was observed from December 2025 through August 2026.

The case in that report closest to this clause is the one coded GTG-54002. About 70 news sites were dressed up as independent local newsrooms, and Anthropic traced the operation to LKM Company, a France-based digital advertising agency. The domains for all 70 were registered from France within a ten-week window in mid-2025. The network published at least 8,913 articles in about 20 languages. Each site had one X account paired with it, and a separate layer of commenting accounts created during the exact same timeframe as the sites. More than 250 of those commenting accounts were counted, many of them using AI-generated profile photos.

The way it ran was closer to a sales business than to propaganda. The report says the actors leaned again and again on rewriting one source article in opposing ideological directions, shifting political stances to support whoever was paying at the time. It also says it could not independently confirm which customers commissioned the content, and that it found no evidence of direction by any government.

What pulled the cluster apart was not what the articles said. All 70 properties sat on shared infrastructure behind a single deployment, and on September 11, 2025, almost identical articles about the DRC-Rwanda conflict went up across the network's sites within three minutes of each other. The production left its own traces. Every prompt given to Claude demanded a fixed JSON output structure, formatted HTML, exact character limits, and three to four internal links per article.

▲ Original Pebblous diagram. The four traces are drawn from the GTG-54002 case as described in Anthropic's threat report (2026-09-10).

The same report holds one more case. Coded GTG-84005, it is a synthetic news outlet in Malaysia called "Malaysia Pulse." The outlet scraped legitimate Malaysian reporting, had the model rewrite it several times, and republished it under fabricated bylines. It also republished articles from Russian and Chinese state-aligned outlets, including TV BRICS, Xinhua, Sputnik/RIA, and CGTN, stripping out the state attribution to present them as independent Malaysian reporting. Roughly a thousand fake X accounts were attached to it.

All three of the things the clause names went wrong at once in this one outlet. Where the articles came from, who wrote them, and whose interests they stood apart from all differed from what was shown. The report put this outlet at Category Two as well, meaning its assets were distributed across multiple platforms but without evidence of breakout into authentic communities.

## Nothing in the Report Shows Those Articles Reached an AI Answer

By size alone it reads like an operation that worked. Yet in writing up the 70-site case, the report nailed down the outcome in two sentences.

"most of the content we identified generated little observable engagement from real audiences"

"we would assess this activity as Category Two: content distributed across the network's own websites and matching social media accounts, with no evidence of breakout beyond its own activity"

Anthropic, Countering misuse of AI: September 2026. The rating follows the Brookings Institution's Breakout Scale.

This is where the gap opens. What the clause works against is an AI picking such writing up as grounds while it builds an answer. What the published documents confirm is two networks that never got that far. Anthropic wrote that it cut off the operation behind the 70 sites early, before a real audience had formed. What the record holds is that the road to that point was open.

So this article reads the clause as closer to a rule that shuts a route still open than to one that punishes something already done. There is no fault to find in acting early. It does mean that reading the wording of the clause and sizing up its effect call for different measures. The wording is precise, but the scale of the harm it aims at has not yet been measured by anyone.

The scope has a line around it too. What the usage policy binds is whoever uses Anthropic's products. It does not reach writing already on the web that was made with other tools, and it holds no power to take such writing down. How Claude should handle sources like that when it meets them while building an answer is not what this document speaks to either. What the terms prohibit is using Claude to make such writing.

## Auto-Generated Content Is Gone From the High-Risk List

One more thing changed quietly in the same update. Anthropic's usage policy carries a list of high-risk uses, and two things are required of anything that falls on it. A qualified person has to review the output in practice and hold the authority to correct it, and the people affected have to be told that AI was used.

The earlier version of that list carried an item for media and journalistic content. It read "Media or professional journalistic content: Use cases related to using our products or services to automatically generate content and publish it for external consumption." Generating content automatically and sending it out for external consumption was itself classed as high risk, which is why human review and disclosure of AI use came with it.

The new high-risk list runs to 11 domains: law, medicine, finance, credit, insurance, housing, employment, education and qualifications, access to medical services, public benefits and services, and legal status, judgments and determinations. Media and journalism is not among them. The announcement said the high-risk requirements themselves had not changed, and explained that it had rewritten the section because users kept asking which uses fall under it. It did not say what had come off the list.

Lay the two changes over each other and you can see where the line of prohibition has moved. The first question used to be whether something was produced and sent out without passing through human hands. Now the question is whether who wrote it and whose money paid for it have been hidden. Writing produced automatically does not fall under the deceptive campaigns clause if it goes out under its own name, and writing composed by hand one sentence at a time does fall under it if it goes out posing as an unaffiliated outlet. This contrast is this article's reading. Anthropic has never said it moved the axis.

▲ Original Pebblous diagram, drawn from comparing the high-risk list and deceptive campaigns section wording across the two policy versions.

One spot here is easy to misread. Coming off the high-risk list is not a guarantee of permission. It means the two requirements attached to high-risk uses no longer follow automatically, while the prohibitions in other sections stay where they are. Churning out writing automatically still runs into the deceptive campaigns section if the origin and authorship are faked, and into the democratic processes section if it is aimed at an election.

## Why Pebblous Is Watching This Clause

This news usually gets consumed as a regulatory item for the marketing industry. Seen from the data side, something else is left over. What returned the 70 sites to a single bundle was not what the writing said but the traces of its production. When the domains were registered, the hosting they sat on, the hour the articles went up, the three or four internal links driven into every piece alike. Not one of those clues came from reading the body text.

Planted writing is even in its traces. It comes off one pipeline, so the lengths and the structures and the intervals come out alike. Writing built up honestly runs the other way. Dates scatter, lengths run uneven, and the marks of revision stay behind. The trouble is that this unevenness does not become evidence on its own. It is evidence only if it sits somewhere that can be checked from outside. With no record, honest writing and planted writing both look like web pages.

The questions to put to your own content and data take the same shape.

- For every page you publish, is who wrote it and which organization issued it recorded outside the page, in a form a machine can read? A single name under the body text is something a person recognizes and a crawler walks past.
- Are the first publication date and the revision dates kept apart? With only one date there is no telling when the piece was written and when it was touched up, and nothing separates it from a bundle that came up all in one stretch.
- If a piece was paid for or carries an affiliation, is that written inside the piece? Concealing sponsorship is prohibited by name in the same section.

The same three get used from the other side as well. Whoever filters a corpus for training or citation ends up narrowing the field with signals like writing whose origin is undeclared, domains that came up all in one stretch, and articles with no author. The side that gets caught unfairly at that point is not the side that lied but the side that built honestly and left no record. A clause arriving does not shift that cost onto the side doing the planting. Only the side holding a record that proves the difference pays less of it.

Thank you for reading this far. The clause wording and the high-risk list were checked in the [usage policy text that took effect November 12](https://www.anthropic.com/legal/aup), the background to the revision and the announcement's wording in the [announcement of October 8](https://www.anthropic.com/news/2026-usage-policy-update), and the case figures and detection clues in the [threat report of September 10](https://www.anthropic.com/threat-intelligence-report-september-2026). We would be glad to hear where your team keeps the authorship and revision history of what it publishes.

## References

### Official documents

- 1.Anthropic. (2026-10-08). "[2026 Usage Policy update](https://www.anthropic.com/news/2026-usage-policy-update)." Anthropic News.
- 2.Anthropic. "[Usage Policy](https://www.anthropic.com/legal/aup)" (effective 2026-11-12). Anthropic Legal.
- 3.Anthropic. (2026-09-10). "[Countering misuse of AI: September 2026](https://www.anthropic.com/threat-intelligence-report-september-2026)." Anthropic Threat Intelligence.

### Industry analysis

- 4.unite.ai. "[Anthropic Updates Usage Policy, Adding Model Abuse and Deception Rules](https://www.unite.ai/anthropic-updates-usage-policy-adding-model-abuse-and-deception-rules/)."
- 5.relevantaudience.com. "[Anthropic bans Claude for seeding fake AI answer sources](https://www.relevantaudience.com/geo/anthropic-usage-policy-bans-seeding-ai-answer-sources/)."
- 6.tofubofu.com. "[Anthropic's Usage Policy Now Names AI Answers. Where Is the Line for AEO?](https://tofubofu.com/blog/anthropic-usage-policy-ai-search-manipulation)"
- 7.seosherpa.com. "[Anthropic Targets GEO Spam: What Claude's New AI Search Rules Mean for Businesses](https://seosherpa.com/anthropic-targets-geo-spam/)."
