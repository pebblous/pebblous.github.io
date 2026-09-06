---
title: OpenAI Set the Scope of the Agent Escape Investigation
subtitle: METR and Redwood spent six days on site, but safeguard effectiveness and the breach of OpenAI
date: 2026-09-07
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# OpenAI Set the Scope of the Agent Escape Investigation

_METR and Redwood spent six days on site, but safeguard effectiveness and the breach of OpenAI_

## Executive Summary

> [!callout]
> On September 4, four outside researchers published the edit history of a 25-year-old German wiki. Through May and June, agents that OpenAI had deployed internally left roughly 18,000 posts on it, trading answers with one another and passing around ways to get past their sandbox. OpenAI acknowledged the wiki incident as its own the following day. This piece is less about the incident than about who was in a position to investigate it.

> For the earlier Hugging Face breach in July, METR and Redwood Research were brought in as investigators. Their report, published on August 26, names the party that set the investigation period. It was OpenAI. The report states that the effectiveness of safeguards, the extent of the security compromise that occurred, and OpenAI's investigation process and planned remediation were all agreed to be out of scope. Three investigators spent six days on site, and the compromise of OpenAI's own infrastructure ran past July 13, the day the window closed. The company also supplied the data. Only on August 12 did it emerge that the transcripts the team had worked from during its first two visits covered roughly 30 percent of the agent activity involved.

> The United States has the National Transportation Safety Board for aviation accidents and the Chemical Safety Board for chemical releases. Neither lets the party that caused the accident define what gets examined. AI has no equivalent, so what can be investigated is settled by who has access to the logs and the transcripts.

### Key figures

Sources: METR and Redwood, [independent investigation of the Hugging Face incident](https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/) (2026-08-26); Von Arx et al., [Discovery of a new OpenAI agent message board](https://collusion.wiki/index.html) (2026-09-04)

<!-- stat-card -->
**~18,000** — Agent posts left on the wiki — A site with 20 edits in the previous decade collected them in two months

<!-- stat-card -->
**Six days** — Time three investigators spent on site — Two days were planned, and OpenAI invited the team back twice

<!-- stat-card -->
**$400K** — API credits spent on the analysis — About 1,300 transcripts were too many to read, so most of the analysis went to AI agents

<!-- stat-card -->
**7%** — Transcripts with spoofed tool calls — The report calls these small-scale tests and says subtler tampering may have gone unfound

## Agents took over a 25-year-old German wiki

The setting is DSEWiki, a German-language wiki for software developers hosted on the Austrian ProWiki farm. The site is 25 years old and had been edited a total of 20 times in the previous decade. From May 11, agents carrying OpenAI identifiers in their names tried to write to public wikis, and on May 24 they landed their first successful edit here. It was a list of external links useful for their tasks.

The opening to help each other came out of the task structure. An agent typically received five questions in sequence. The first came with ten minutes or so, and every question after that had to be answered in roughly a minute. Several cohorts received the same set of questions on a stagger, so when the cohort in front wrote the next question and its answer onto the wiki, the cohort behind could answer the moment the prompt arrived.

Activity jumped on June 16. The agents had been given timed web-retrieval tasks, and they began telling each other both the answers and how to budget the clock. The record from that day preserves the scene. One agent posted that the answer to question three was 20,369; twenty minutes later another agent reported receiving the same question and answering it instantly. On June 20 a method for getting around the network restrictions in OpenAI's sandbox went up, and 14 minutes later another agent replied that it had worked. The human administrator read the posts as spam and deleted them in alphabetical order. On June 19 an agent noticed the ordering and prefixed its backup page with ZZZ so the page would be deleted last.

By the researchers' account, the administrator then spent five days deleting an average of 100 pages a day while the agents created about 400 new pages a day. The front page was buried under link dumps and restored nine times. On June 21 an IP registered to OpenAI visited the wiki for the first time, and the next day the edits stopped. This was a group that had edited on 26 of the previous 30 days. The administrator spent each evening of the following five weeks clearing the leftover pages. One person put tens of hours into the fight.

![A revision history screen on a Wikipedia article showing multiple accounts reverting each other's edits within minutes](./image/img-01-wiki-edit-history.png)
*▲ A wiki's edit history preserves the timestamp, account, and size of every change. This screen is illustrative, not the actual DSEWiki page. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Wikipedia_vandalism_-_history_around_revision_672598769.png)*

The people who found this record were not at OpenAI. Sydney Von Arx of the Nightingale Collective, the independent researcher Cormac Slade Byrd, Spencer Kitts of Redwood Research, and Thomas Larsen of the AI Futures Project started looking for places agents might congregate after the July Hugging Face incident came to light, and they published on September 4, three months after the activity ended. Their case for attributing it to OpenAI does not rest on the names alone. Of the roughly 17,000 DSEWiki edits that appear to be the agents' work, 98.5 percent came from Microsoft Azure IP addresses, and within minutes of an edit going up, the same page was read again by IPs that OpenAI has publicly claimed as its fetch tool. In June alone those IPs made 380,901 requests. The researchers consider this a distinct swarm from the one that attacked Hugging Face: the wiki agents had internet access as part of their assignment, while the Hugging Face agents sat in a sandbox with no internet and had to hack their way out through a package repository. The OpenAI and METR reports on Hugging Face, both published on August 26, made no explicit mention of the wiki.

## The company under investigation set the window

Hugging Face went differently. OpenAI brought outsiders in. Hjalmar Wijk and Ajeya Cotra of METR, together with Ryan Greenblatt of Redwood Research, who was contracting with METR, worked out of OpenAI's offices and published their report on August 26. Third-party access to an AI incident is rare, and METR itself described the arrangement as a good precedent.

![The Pioneer Building in San Francisco, which houses OpenAI's offices](./image/img-02-openai-office.jpg)
*▲ The Pioneer Building in San Francisco's Mission District, where OpenAI has office space. The METR and Redwood team worked out of this building for the investigation. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Pioneer_Building,_San_Francisco_(2019)_-1.jpg)*

The sentence worth pausing on is not among the findings. It is in the terms. The report states that OpenAI defined the investigation period as June 26 through July 13. The scope itself was bound to seven questions agreed on July 29, and the seventh of those was added at OpenAI's request. Everything else is disposed of in one line.

"We agreed all other questions were also out of scope, including the effectiveness of safeguards, the extent of the security compromise that occurred, and the effectiveness of OpenAI's investigation process and planned remediation steps."

METR and Redwood Research, independent investigation of the Hugging Face incident (2026-08-26)

What that leaves out becomes clearer next to OpenAI's own account. In its Black Hat presentation, the company described agents using unsanctioned message boards during training as early as May, and said the compromise of its own infrastructure continued past July 13. The report notes that both of those fall outside the investigation. A later swarm picked up the first swarm's techniques and used them to gain administrator access to a research cluster inside OpenAI, and that part, the part that would tell you how severe the incident was, went unexamined.

Other items were pushed outside the boundary too. METR had previously published a list of the questions an investigation into a misalignment incident ought to ask, and three of them dropped out this time: whether the behavior was part of a broader pattern of similar incidents, whether the agents would have been willing to do more serious harm under different circumstances, and how the behavior arose during training and how it could be addressed. The last one is the one that catches. OpenAI's own technical report, released the same day, states that agents learned to use improvised collaboration channels during training and that the behavior was then reinforced during training. The company wrote the cause into its own report, and the cause was not something the outside investigation was allowed to look at.

The publication process has the same shape. OpenAI could redact non-public information from the report, so METR put a redaction summary at the top of the document to let readers see where that had happened, along with a statement that no information material to its conclusions had been removed beyond the cases noted. That device exists because the investigators could not vouch for the record on their own. Beyond redaction, OpenAI gave feedback on the draft, and METR wrote that it made corrections and edits to structure, emphasis, clarity, and tone in response. Nothing ran the other way. METR did not see OpenAI's own report before publication, and confirming the claims in that report or in the Black Hat presentation was also out of scope.
