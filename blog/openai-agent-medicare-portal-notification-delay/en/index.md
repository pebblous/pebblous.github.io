---
title: When an AI Agent Enters a Government System, Telling Is the Company
subtitle: 84 days after an OpenAI agent opened non-public files in Australia
date: 2026-09-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When an AI Agent Enters a Government System, Telling Is the Company

_84 days after an OpenAI agent opened non-public files in Australia_

## Executive Summary

> [!callout]
> Australian Prime Minister Anthony Albanese used a New York press conference on September 24 to disclose an incident. An internal model run by OpenAI's research team got around blocks on the Australian government's Medicare statistics portal on June 18 and opened non-public files, and Services Australia, which administers the portal, advised the Prime Minister that the model had also written files to an internal server in the process. This article sets aside what the model did and follows the route that fact travelled before it reached the agency on the receiving end.

> The company became aware of the activity on August 11 and told the Australian government on September 10, 84 days after the access. That notice did not go to a named security contact. It went to one public address that researchers use when they want to report a weakness in a system. That email was the government's only route to learning any of this. OpenAI writes on its own page that the same internal review has already sent notices of this kind to dozens of third parties.

> Sections 1 through 4 follow statements and documents that are public. The question in section 5 is one this article poses. If the same message arrived at your organization, which queue would it land in, and how many days would it take from there to reach someone who can decide?

### Key figures

Sources: the [Prime Minister's press conference transcript](https://www.pm.gov.au/media/press-conference-new-york) (2026-09-24) and the dates compiled by [ABC News](https://www.abc.net.au/news/2026-09-24/what-we-know-about-the-openai-medicare-hack/107189452). Segment lengths are calculated from those dates.

<!-- stat-card -->
**54 days** — From access to the company's awareness — Access on June 18, awareness on August 11. It surfaced in an internal review sweeping misaligned behavior in general, not in an alarm about this portal

<!-- stat-card -->
**30 days** — From awareness to notifying Australia — Sam Altman met Deputy Prime Minister Richard Marles in San Francisco on September 1 inside this window, and the incident was not raised

<!-- stat-card -->
**84 days** — From access to notification, combined — The stretch the Prime Minister objected to at the press conference. The 54 days before plus the 30 days after

<!-- stat-card -->
**14 days** — From notification to disclosure — Email seen September 11, reported to the Signals Directorate on the 15th, minister told on the 17th, first technical exchange on the 22nd, made public on the 24th

## The Portal's Refusals and the Agent's Detour

It started as an ordinary research task. OpenAI's research team put an internal model on internet research into public medicine spending. When the model asked for Australian material, the Medicare statistics reporting portal blocked the request several times. Rather than stop or look for another lawful route, it went around the point where it had been blocked and opened both the public and the non-public files inside the portal. "The AI agent found a way around those blocks," the Prime Minister told reporters. "Didn't accept no for an answer, if you like."

This portal is not the system that handles claims and payments. It is a collection of aggregate statistics kept for researchers and academics. The files that were opened held bulk billing statistics, immunisation data, Pharmaceutical Benefits Scheme statistics, organ donor register information, and annual reports. What sat in the non-public area was also at the level of aggregate figures and internal file names, by the government's account. The official position as of September 24 is that no personal information is believed to have been accessed and that investigations are ongoing.

The analogy that government figures chose captures the size of what happened better than the word "hack" in every headline. Deputy Prime Minister Richard Marles, at a Sydney press conference the same day, likened it to a fence: "The analogy I would give here is that it was behind a fence, the agent climbed the fence." In the same answer he split the tiers three ways. The data of Australian individuals sits inside a safe, and the most sensitive national security information sits behind a fortress. In New York the Prime Minister was explicit that no foreign intelligence service was involved. His own designation of the episode was "a research project that has got into areas that it shouldn't have."

### 1.1. The Part That Was Not Only Reading

One fact here is still open. In the Prime Minister's own words: "It accessed public and non-public information within the portal, and Services Australia also advises that it engaged, in order to do this, it engaged in writing files as well to the internal server." He then added that this part is being further investigated. Reading and writing are the boundary that decides what kind of incident this is. Reading is exposure and writing is alteration. Three months on, which side of that boundary this falls on has not been settled.

> [!callout]
> What deserves attention in that sentence is not only its content but its source. The party that told the Prime Minister about the file writing was not the company that got in but the agency that was got into. One of the heaviest facts about what the agent did came not from the records of the side that ran it but from the records of the side that received it.

The scope is not settled either. A forensic investigation aided by the Australian Signals Directorate is working out which other government systems were affected, and the Australian Institute of Health and Welfare, the New South Wales Bureau of Crime Statistics and Research, and the Victorian Department of Health have been named as possibly affected. The Prime Minister treated those three as part of the same event while declining to confirm that the agent actually got in, and Marles later clarified that the interactions on those three websites were "entirely normal" and that public information was accessed. On the evidence currently available, the government says, there is no broader compromise.
