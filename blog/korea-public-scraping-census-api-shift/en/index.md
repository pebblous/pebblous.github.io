---
title: Korea Counts 3,164 Screen Scraping Cases on Public Websites
subtitle: A PIPC survey found 754 businesses logging in with users
date: 2026-11-28
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Korea Counts 3,164 Screen Scraping Cases on Public Websites

_A PIPC survey found 754 businesses logging in with users_

## Executive Summary

> [!callout]
> Korea now has a number for how often a business logs into a public website as you and takes what it finds there. The count is 3,164. Korea's Personal Information Protection Commission (PIPC) released the figure on November 26, 2026, at a government policy coordination meeting chaired by the Prime Minister, where it discussed a plan with other ministries for moving personal data to its owner safely. The survey ran from June through August of this year and covered businesses: 754 of them were using this route against 129 websites operated by 35 public agencies. The label the press release puts on the 3,164 is "prior consultation applications (scraping status)." Businesses declared these themselves when they applied, so the figure reads as a floor rather than a full audit.

> The concentration is more striking than the total. The top 10 websites account for 81.5% of all cases, among them Government24, Hometax, the National Health Insurance Service and the traffic penalty portal eFine. Take Government24 alone and 30 of the 41 record types businesses were scraping, or 73.2%, already had a safe transfer route in place. Nothing was missing on the technical side. The old path simply stayed in use. From 2027 the government plans to have each agency rebuild these connections around APIs and similar transfer methods.

> Sections 1 through 3 and section 5 are facts confirmed in the press release, same-day reporting and the statute. Sections 4 and 6, which read this collection method as structurally the same as an AI agent signing into someone else's service with a person's account, are this article's own interpretation. The phrase "AI agent" appears nowhere in the government's announcement.

### Key figures

Source: PIPC and the Government-wide MyData Taskforce press release of [November 26, 2026](https://www.korea.kr/briefing/pressReleaseView.do?newsId=156790953), full text in the attachment, with same-day reporting by [ZDNet Korea](https://zdnet.co.kr/view/?no=20261126003020) and [Digital Daily](https://www.ddaily.co.kr/page/view/2026112607381864876)

Four numbers carry the survey. The first two give the size and the concentration; the last two show why the concentration is described as habit rather than necessity.

<!-- stat-card -->
**3,164** — scraping cases surfaced by prior consultation — 754 businesses, against 129 websites run by 35 public agencies

<!-- stat-card -->
**81.5%** — share held by the top 10 websites — Government24, Hometax, National Health Insurance and eFine are among them

<!-- stat-card -->
**73.2%** — replaceable records at Government24 — 30 of the 41 record types scraped already had a safe transfer route

<!-- stat-card -->
**45%** — finance's share of the 754 businesses — Banks and insurers. The rest spread across tax, health care and platforms

## 3,164 cases across 129 public websites

Between June and August of this year the PIPC asked businesses what scraping they were running. The answer came back as 754 businesses, 35 agencies, 129 websites and 3,164 cases. One business scrapes several websites and one website is scraped by several businesses, so the case count runs more than four times the number of businesses.

The survey also published what the scraping was for. Loan and guarantee screening, credit assessment, identity and customer verification, tax and accounting work, and filing on clients' behalf for the four major social insurance programs account for most of it. What moved across was largely the paperwork public agencies issue: resident registration certificates in full and abridged form, income and tax payment certificates, vehicle registration records. From birth and family relations through health and medical records to income and tax, in the press release's phrase, information covering an entire life was in transit. Sorted by business type, banks, insurers and the rest of the financial sector make up 45% of the 754. The remainder spread across tax, health care and platform services, and no ranking within that remainder was published.

The concentration is steeper still. The top 10 websites hold 81.5% of all cases. Government24, Hometax, the National Health Insurance Service and eFine, all on that list, are counters most of the country uses. Scraping is not happening in some quiet corner of the public web. It sits on the busiest paths.

> [!callout]
> The weight of this survey lies less in how large the numbers are than in the fact that numbers now exist. Scraping was known to be widespread, but how many firms were scraping which sites how many times had never been published. The press release says as much where it states the survey's significance: it confirmed a practice that had been running below the surface. Without a measure of the scale, no transition schedule can be set.

## The business decides what gets taken

The definition the PIPC uses runs like this. A service provider receives the user's ID, password, certificate and the like, logs into the website of a public agency or other sender on the user's behalf, and then, through automated tools, collects the user's information indiscriminately and unilaterally. Two handovers sit inside that sentence. One is the credential. The other is the authority to decide what will be taken with it.

How far the second handover reaches is something the press release states outright in a sentence of its own.

Scraping is a method in which the service provider, not I, decides on my behalf what personal data is transmitted, when, where to, how and why.

What stands out is that the sentence counts five things separately. The annex breaks the five out as the data transmitted, the purpose of use, the destination, the start and duration of use, and the transmission method, and says the business decides all of them arbitrarily "on behalf of" the person. The same table lists the data subject and the sender side by side as parties with little room to intervene. The agency handing over the data stands outside this structure too.

From the receiving agency's side, what arrived is the user. The login is valid, so there are no grounds to refuse it, and nothing distinguishes a person from an automated tool at the door. That is why the agency cannot set the scope of what leaves. Which of the items visible on screen get taken is decided entirely by the business's code.

API transfer reverses the order. The data subject requests a transfer and the agency sends only the items that were agreed in advance. In the diagram below, the upper row is scraping as it works today; the lower row is what the government wants in place from 2027.
