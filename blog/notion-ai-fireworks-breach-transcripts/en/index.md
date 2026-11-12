---
title: Notion AI Chat Transcripts Leak From the Company Running the Models
subtitle: Fireworks AI, the provider Notion hired to run part of its AI, was breached, and the chats from under 1% of all workspaces went out with it
date: 2026-11-13
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Notion AI Chat Transcripts Leak From the Company Running the Models

_Fireworks AI, the provider Notion hired to run part of its AI, was breached, and the chats from under 1% of all workspaces went out with it_

## Executive Summary

> [!callout]
> Conversations that Notion users had with Notion AI ended up in an attacker's hands. The company that was broken into is not Notion. It is Fireworks AI, a US inference provider that Notion had hired to run part of its AI features. Notion says its own systems were not compromised and that no other feature was involved.

> Fewer than 1% of all workspaces are affected. What went out were the chat transcripts used by the Insights feature, and they carry any input to or output from the model that was written to the chat. Notion says that for most of the affected workspaces those transcripts were unattributable, with nothing marking who wrote them or which workspace they came from. The same advisory still tells customers to treat passwords and API keys pasted into Notion AI during the incident window as exposed and to rotate them.

> The dates, figures, and quotations in sections 1 through 4 come from Notion's security advisory, the separate Q&A page Notion published about the same incident, Fireworks' November 9 update, and reporting by TechCrunch, BleepingComputer, and VentureBeat. The reading in the second half of section 4, that the two companies' public documents do not identify which Fireworks feature was holding the transcripts, and all of section 5 are this article's interpretation.

### Key numbers

Four numbers are worth pulling out. The first two measure the size and the pace of what happened on Notion's side. The other two say why this will not stop with Notion.

Sources: [Notion, Fireworks AI incident](https://www.notion.com/security/advisories/security-incident-involving-a-third-party-ai-vendor), [TechCrunch (2026-11-12)](https://techcrunch.com/2026/11/12/cyberattack-on-fireworks-ai-allowed-hackers-to-access-notion-customers-chat-transcripts/).

<!-- stat-card -->
**Under 1%** — Notion workspaces affected — Notion's own wording. TechCrunch reported it as around 1%

<!-- stat-card -->
**6 days** — First notice to the confirmed dataset — On the November 2 call it was synthetic testing data; the real scope only landed on the 8th

<!-- stat-card -->
**2** — Fireworks incidents, 18 days apart — A first incident confirmed on October 6, then access reaching development machines on October 24

<!-- stat-card -->
**Tens of thousands** — Customers Fireworks claims — The legal AI company Harvey and the coding tool Cursor sit on the public list

## Six Days From Test Data to Customer Data

The first call Notion got did not sound urgent. On the evening of November 2, Fireworks reported that a malicious actor had accessed some data, and said the data appeared to be Notion AI synthetic testing data. Synthetic testing data is material invented to exercise a feature, not anything a person actually wrote. Notion disconnected from Fireworks the next day. It stopped the traffic and deleted all of its data sitting in Fireworks systems.

The story changed four days later. On November 6, Fireworks reported that customer data may have been accessed after all, and Notion opened an internal investigation. On November 8, Fireworks confirmed the final affected dataset and handed it over. Inside it were the Notion AI chat transcripts used for the Insights feature. Notion reached out to impacted customers the following day and made its advisory public. On November 11, it revoked the exposed Notion API keys that users had typed into their conversations.

| Date | What Fireworks reported | What Notion did |
| --- | --- | --- |
| November 2 | Data was accessed, and it looks like Notion AI synthetic testing data | Takes the call |
| November 3 | — | Disconnects and deletes its data on the Fireworks side |
| November 6 | Customer data may have been accessed | Opens an internal investigation |
| November 8 | Confirms the final affected dataset and hands it over | Finds the Insights transcripts inside it |
| November 9 | — | Reaches out to impacted customers and publishes the advisory |
| November 11 | — | Revokes the exposed Notion API keys found in affected user messages |

▲ Taken from the timeline in Notion's security advisory on the Fireworks AI incident.

Those six days are the part of this incident most worth looking at. By November 3, Notion had already done everything it could do. It disconnected and wiped its data at Fireworks. It still had no way to know what had gone out. There was nothing to do but wait for the breached company to finish counting its own damage and report back. When the incident happens inside data you handed to a vendor, the clock on the response belongs to them, not to you.

## What Fireworks Handled for Notion

Fireworks runs open-weight models on behalf of other companies' products. Rather than building and selling a model of its own, it hosts published models on its own hardware and takes requests from other companies. It claims tens of thousands of customers worldwide, and the public list includes the legal AI company Harvey and the coding tool Cursor. The flow of capital into this kind of company is something we covered separately in an [earlier report](../../../report/inference-serving-capital-2026/en/).

Notion gave this provider two jobs. One was serving open-weight models inside the Notion product. The other was the classification work behind Insights. Insights is the feature that shows an administrator how a team is using AI. Counting that usage means sorting each conversation by the kind of work it represents, and handing off the sorting means handing over the conversations themselves. That is why the transcripts that leaked were the Insights ones.

This was not the first incident on the Fireworks side. In the first one, confirmed on October 6, API keys and tokens held in environment variables were exposed, as BleepingComputer reported. The second reached development machines through a third-party cloud provider. Fireworks dated that access to October 24 in its own update, while some reporting put it at October 23. Eighteen days separated the two.

Fireworks believes the attackers were after money. The goal, as the company reads it, was to break into accounts with access to large language models and resell the tokens. In its November 9 update, the company said the exposure covered resource metadata and billing information, plus incomplete model weights and datasets for some customers. Notion's transcripts sat in the dataset part of that list.

## The Exposed Data Is the Whole Insights Transcript

Notion was fairly specific about what went out. It was the Notion AI chat transcripts used for the Insights feature, and TechCrunch reported that those transcripts include any input to or output from the model that was written to the chat. That means the whole exchange, not a fragment of one.

The facts that narrow the damage are on the record too. Notion says that for most of the impacted workspaces the transcripts were unattributable. Nothing in them marked who had written the text or which workspace it came from. Results that the model fetched by calling an external tool were not included either. The content went out, but the ownership of that content did not go with it.

> [!callout]
> Unattributable is not the same as harmless. Content often names its own owner. Internal system names, customer names, dates that have not been announced yet, and pasted credentials all say where they came from without any label attached. The fact that Notion went looking for Notion API keys inside those conversations on November 11 and revoked them is itself proof that the transcripts held things that work with no label on them.

Notion's advice to users points at the same spot. Treat any password, API key, or other credential pasted into Notion AI during that window as exposed, and rotate it. What Notion could collect on its own was limited to keys for its own service. If credentials for an internal server, a payment processor, or a cloud account were mixed into those conversations, rotating them falls to whoever pasted them. Owners of affected workspaces can review the data directly under the security incident review item in the Notion web app, and can send members a link to download their own records.

Notion changed three things on its own side. Insights is switched off until the investigation closes, serving open-weight models through Fireworks has stopped, and the company says it is auditing critical vendors, including inference providers and data processors, to verify that they abide by data minimization practices. Switching Insights off and ending the model serving close this particular path. The audit is a promise to go and check whether the same thing is happening at other vendors.

## A Contract Said Keep Nothing, and the Data Was Still There

In the [Q&A page](https://www.notion.com/help/security-incident-involving-a-third-party-ai-vendor) it published about this incident, Notion says Fireworks contractually committed to zero data retention for Notion's use of its platform. Zero data retention is a promise to hold data only while a request is being processed and to keep nothing afterward. Had the promise held in full, there could have been no transcripts inside the dataset handed over on November 8. There were.

That same page, published alongside the incident notice, also sets out how far that commitment reaches. Notion writes that zero data retention is its commitment for enterprise customers and that it applies to the API requests Notion sends to third-party model vendors to generate responses to Notion AI requests. Then it names the features that sit outside that reach: chat history, and features like Insights that only work if the requests and responses are stored. For Insights, Notion says, it sent those stored requests and responses to Fireworks to run the analysis it shows the administrator. The stored copy is exactly what went out.

Stopping there would make the contract and the incident two unrelated stories. Notion did not stop there. It notes that during the investigation it learned that data was retained from the Fireworks endpoints it had been using. The explanation that storage-dependent features were outside the clause, and the admission that data was sitting right where that promise had been obtained, appear in the same document.

The Fireworks update of November 9 sidesteps this point. It says the company has "not detected any impact to Inference, Training SDK and Nexus, which are all zero data retention (ZDR) by default." That lists the products with no detected impact; it does not say which product was holding Notion's records. VentureBeat noted that the same list reads differently in CEO Lin Qiao's post on X, where it becomes "Inference (excluding batch inference), Training SDK, and Nexus." One qualifier appears there that the update does not carry.

The qualifier points somewhere specific. Fireworks documentation cited by VentureBeat says retention is off by default, with a handful of features that do store customer content: stored responses, batch jobs, and training. During the investigation the company disabled the self-serve dataset uploads and downloads used by Batch Inference and dataset-based training. That measure tells you where the storage happens.

So the open question is not the reach of the promise but the location of the data. Which Fireworks feature actually held Notion's records, and for how long, is something neither company has put in writing. VentureBeat points at the same gap. Which of the three candidates above it was cannot be settled from the public documents, and that reading is this article's.

One thing is worth stating plainly. Zero data retention is a promise about what is left behind, not a lock on the door. Even a clause honored to the letter would not have kept an attacker away from a development machine. What it reduces is the volume of data waiting there when someone gets in. This time that volume was not zero.

## Why Pebblous Is Watching This Incident

This news usually gets read as a security notice for Notion users. From where we sit, working with data, a different part stays with us. What an employee typed into Notion did not stay inside Notion. A company running the models on Notion's behalf was holding the full text of it, and no Notion customer ever picked that company. Notion signed the contract, Notion took the breach call, and the schedule for counting the damage belonged to Fireworks.

The diagram below traces the path as it was disclosed. An employee stands at the left end, and at the right end sit the records the attacker reached. Of the four boxes, users can name the relationship behind only the first two.

▲ Pebblous original diagram. The role of each box is taken from the description in Notion's security advisory.

It is hard to argue that Notion was unusually careless here. What it disclosed is on the detailed side, in fact. The day it cut the connection, the scope of the deletion, the state of the records, and the recommended action all come with dates. The trouble is that this structure is not specific to Notion. A company that puts an open-weight model into its product usually does not run that model itself. So behind almost any AI feature we use, one or two companies we have never heard of are standing in line.

Which puts a set of questions ahead of the usual one about whether a service is safe.

- Can we write out, as a list, which companies' infrastructure our AI features pass through? It has to be a list by feature, because inside one product the summarizing may run on an in-house model while the classifying goes to an outside provider.
- If there is a clause about keeping no data, how far does it reach by feature and by plan? If it covers only the requests that generate an answer, and storage-dependent features fall outside, as Notion describes, then the clause is there and the data stays anyway.
- When something happens at that provider, how many hands does our notice pass through and how many days does it take? Notion waited six days, and Notion's customers waited one more.
- When an employee pastes a credential into an AI window, can we find it and revoke it? That is precisely what Notion was able to do here.

None of the four is easy to answer once an incident is underway. A list that reaches down to the vendor's vendor, a record of which data leaves for where under which feature, and a procedure that keeps that record current. An organization that holds those three in ordinary times is the one that can count its own exposure when something breaks. The vendor audit Notion announced after the fact is, in the end, that list being built late.

## References

### Primary Sources (Notion)

- 1.Notion. (2026-11-10). "Fireworks AI incident." Notion Security Advisories. [notion.com](https://www.notion.com/security/advisories/security-incident-involving-a-third-party-ai-vendor)
- 2.Notion. "Notice about the Fireworks AI incident that may impact some Notion workspaces." Notion Help Center. [notion.com](https://www.notion.com/help/security-incident-involving-a-third-party-ai-vendor)

### Primary Sources (Fireworks AI)

- 3.Fireworks AI. (2026-11-09). "Update on October 2026 security incident." Fireworks AI Security Bulletins. [fireworks.ai](https://fireworks.ai/security/bulletins/october-2026-security-incident-update)

### Reporting

- 4.Whittaker, Z. (2026-11-12). "Cyberattack on Fireworks AI allowed hackers to access Notion customers' chat transcripts." _TechCrunch_. [techcrunch.com](https://techcrunch.com/2026/11/12/cyberattack-on-fireworks-ai-allowed-hackers-to-access-notion-customers-chat-transcripts/)
- 5.Toulas, B. (2026-11-11). "Notion says Fireworks breach exposed customer AI chat transcripts." _BleepingComputer_. [bleepingcomputer.com](https://www.bleepingcomputer.com/news/security/notion-says-fireworks-breach-exposed-customer-ai-chat-transcripts/)
- 6.Columbus, L. (2026-11-11). "Attackers breached the Fireworks AI storage where Notion AI chats sat outside zero data retention." _VentureBeat_. [venturebeat.com](https://venturebeat.com/security/attackers-breached-the-fireworks-ai-storage-where-notion-ai-chats-sat-outside-zero-data-retention)
