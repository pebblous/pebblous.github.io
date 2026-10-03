---
title: When Tencent Rents AI Chips From Oracle, Where Does the Data Go?
subtitle: The Financial Times reports a five-year lease on 100,000 AI chips in Oracle
date: 2026-10-03
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# When Tencent Rents AI Chips From Oracle, Where Does the Data Go?

_The Financial Times reports a five-year lease on 100,000 AI chips in Oracle_

## Executive Summary

> [!callout]
> This article reads a Financial Times report that Tencent has agreed to lease about 100,000 high-end AI chips in Oracle's Southeast Asian data centers for five years. The shape of the deal is plain. No chip is sold; only the right to use one changes hands. US export controls keep those chips out of China, and they say nothing about a company sitting in China that reaches across the sea to use them.

> The price is $7 billion over five years, and Tencent pays roughly 30% of that at the start. The prepayment flipped a sign on the balance sheet. Free cash flow for the second quarter came in at negative 13.8 billion yuan, and the company said it would have been positive by 37.6 billion yuan without the prepayments for compute. Neither Tencent nor Oracle has confirmed the agreement, and the exact sites and chip models have not been disclosed.

> Sections 1 through 3 stay with what the Financial Times and the Wall Street Journal reported, what Tencent published in its earnings disclosure, and what the US House recorded in its vote. Sections 4 and 5 read the same material again through the eyes of someone who works with data, and that reading belongs to this article.

### Key figures

Two kinds of numbers hang on this deal. The first pair is the transaction itself: how much compute is leased, and what it costs. The second pair is the mark that cost left on Tencent's books, and the clock running underneath the whole structure.

Sources: [TNW on the Financial Times report (2026-10-01)](https://thenextweb.com/news/tencent-oracle-100000-ai-chips-7bn-lease-ft), [Tencent Q2 2026 earnings coverage](https://www.ciw.news/p/tencent-q2-2026), [US House Roll Call 13](https://clerk.house.gov/Votes/2026013).

<!-- stat-card -->
**100,000** — AI chips Tencent leases — Five years of use and nothing more. The chips stay in Southeast Asia and never become Tencent assets

<!-- stat-card -->
**$7B** — Five-year lease payment — About 30% of it falls due at signing rather than over the term

<!-- stat-card -->
**−13.8B yuan** — Tencent Q2 free cash flow — Without the prepayments for compute it would have been positive by 37.6 billion yuan, the company said

<!-- stat-card -->
**369 to 22** — House vote on the remote-access bill — Passed on January 12, 2026, then held in the Senate, so it is not law yet

## Leasing 100,000 chips, with 30% paid up front

On October 1 the Financial Times reported that Tencent had signed a five-year lease with Oracle. The scale is roughly 100,000 high-end AI chips, and the value roughly $7 billion. The chips sit scattered across several Oracle data centers in Southeast Asia, and Tencent does not buy any of them. When the term runs out, no equipment stays behind. By the report's account this is the largest lease Tencent has signed outside China.

![Eight Nvidia Blackwell-generation GPUs mounted in an HGX B200 NVL8 AI server](./image/img-01-dgx-b200-gpu.jpg)
*▲ An Nvidia Blackwell-generation HGX B200 GPU server. The 100,000 chips Tencent leases from Oracle are the same generation, spread across racks like this one | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Nvidia_DGX-B200-HGX.jpg)*

Sorting the disclosed from the undisclosed goes like this. The quantity, the value, the term and the condition that about 30% of the contract value is paid up front all appeared in the reporting. Which country and which site, and which chip model, did not. Tencent and Oracle have both declined to confirm the transaction, and Reuters, carrying the report the same day, wrote that it could not independently verify the figures. The market still moved. Oracle shares rose more than 2.5% in after-hours trading once the report landed.

That prepayment condition is not an accounting curiosity. Its mark already shows in Tencent's second-quarter results. Capital expenditure reached 52.8 billion yuan, up 176% from a year earlier and 65% above the previous quarter. Free cash flow came in at negative 13.8 billion yuan. In the same disclosure the company said free cash flow would have been positive by 37.6 billion yuan had the prepayments for compute been excluded. What produced the deficit was not the operating business but the practice of buying compute in advance.

The cash cushion thinned as well. Net cash fell from 146.9 billion yuan at the end of March to 58.2 billion yuan at the end of June, less than half in a single quarter. New AI products lost 10.5 billion yuan in the second quarter, up from 8.8 billion in the first. Revenue grew 11% to 204.8 billion yuan, so the business itself did not wobble. What wobbled is the rhythm by which cash used to pile up.

Management has framed the spending as temporary. President Martin Lau said the capital expenditure going into the AI business is not an annual recurrence but a one-off investment concentrated in this year and next, and pointed to the option of renting that infrastructure out at cost recovery in the worst case as clear downside protection. Chief Strategy Officer James Mitchell said that renting all of the compute capacity out would bring respectable revenue right away, and that the company chose instead to grow its own models with a longer horizon of returns in view. The plan is to train the Hunyuan family on borrowed compute and put it to work in Tencent services.

## Why renting compute does not count as an export

US export controls govern the movement of goods. Selling Nvidia's top AI chips to a Chinese customer, or shipping them into China, is prohibited. Current rules, though, do not count logging in to a server across the ocean and using nothing but its computation as an export. A Blackwell server cannot be carried to Beijing, yet someone in Beijing can rent hours on that same server in a rack in Bangkok. What the Bureau of Industry and Security handles is a shipment, and a remote login is not one.

This is not a clever reading that pries open a gap in the rules. It is a line regulators have held for years. The bureau has treated the provision of compute capacity over the cloud as a service rather than an export of goods, which placed it outside the Export Administration Regulations, and the party named as exporter is the customer using the capacity rather than the business selling it. A Chinese firm can send training data to a server in Malaysia, run a model on the GPUs there and pull the weights back, and because the chips never leave their rack, no event that could be called an export takes place at all.

So the same compute turns into two different things under the rules, depending on how a company obtains it. Laid out item by item, the difference between the two routes comes into focus.

| Item | Buying chips and importing them | Leasing the compute |
| --- | --- | --- |
| What crosses the border | The chip, as a physical good | The workload and the training data |
| After the term ends | The equipment remains as an asset | Only the trained model remains, with no hardware |
| Under current export controls | Prohibited | Not covered |
| Installation, power, cooling | Your own responsibility | The operator's responsibility |
| Where training data is processed | Inside your own country | A third-country data center |
| What can bring it to a halt | Failure and obsolescence | A rule change, a host-country decision, a cancelled contract |

▲ What changes with the procurement route even when the compute is identical. The last two rows are the ground this article wants to stand on.

This deal did not cut the path. The Wall Street Journal reported that INF Tech, an AI startup in Shanghai, has been accessing 2,304 Nvidia Blackwell chips installed in Jakarta, Indonesia. The route ran as follows. Nvidia sold the chips to Aivres, a US entity, and the Indonesian carrier Indosat Ooredoo Hutchison bought 32 GB200 racks from Aivres for roughly $100 million. At 72 Blackwell chips per rack, that comes to 2,304. Indosat purchased the racks only after Aivres had connected INF Tech to it as a customer. Indosat confirmed that INF Tech has no physical access to the chips, and the export-control lawyers quoted in the report judged that the structure breaks no current rule.

Tencent has its own precedent. Last December the Financial Times reported that Tencent had gone through a third party to sign a lease worth more than $1.2 billion with Japan's Data Section, giving it the use of 15,000 Blackwell GPUs. The term is three years, and Data Section's facilities are split between Japan and Australia. The company has disclosed a cluster of 5,000 B200 chips in Osaka and an installation of 10,000 B300 chips in Sydney. The Oracle arrangement takes the same approach and multiplies it several times over.

Regulatory history widened the path as well. The Biden administration built the so-called AI diffusion rule to target exactly this kind of detour through the cloud, and the Trump administration scrapped it in May 2025. Because the know-your-customer guidance was withdrawn alongside it, observers pointed out that data centers in Thailand, Singapore, Malaysia and Japan could now sell compute to Chinese companies without verifying who the end user is.

The door on the goods side has narrowed again since then. On May 31, 2026, separately from its decision not to enforce the diffusion rule, the Bureau of Industry and Security issued guidance stating that exporting advanced computing items to a company headquartered in China or Macau, or whose ultimate parent company sits there, requires a license no matter which country that company is in. The guidance confirmed that a provision written into the regulations back in November 2023 is still alive. Industry had asked whether an overseas subsidiary of a Chinese company could simply buy controlled items on the strength of being a local entity, and the answer was no. The same guidance told data center operators that they need not stop using, storing or servicing items already installed on account of it, while leaving the "bona fide operators" who receive that reprieve undefined.

The boundary now sits in sharper relief. A license threshold has been set back in front of the route where a Chinese company establishes an overseas entity and buys controlled items directly, and the route of reaching chips owned by a third party remains open. In Indonesia the equipment belonged to Indosat, in Japan to Data Section. The contract Tencent signed with Oracle takes the latter shape. A US company owns the chips, and what Tencent receives is time on them.

## Two moves aimed at the gap, and the missing authority

Washington is looking at this structure too. Congress and the executive are working on it separately, and neither has finished.

### 3.1. A bill the House has already passed

Late on January 12, 2026, the US House passed the Remote Access Security Act by 369 to 22. A total of 167 Republicans and 202 Democrats voted in favor, and the vote was taken under suspension of the rules, so it needed two-thirds and cleared that bar comfortably. Representative Mike Lawler of New York introduced the bill in April 2025, and the House Foreign Affairs Committee reported it 51 to 0 the same month. The text is short. It amends the Export Control Reform Act of 2018 so that "remote access" to controlled items can be treated like an export. A framework that has covered exports, reexports and in-country transfers gains a fourth item.

Lawler, who introduced it, said US export controls are only as strong as their weakest link, and that the Chinese Communist Party now holds a very real means of getting around these prohibitions. Representative Bill Huizenga, who chairs the House Foreign Affairs subcommittee with jurisdiction over the bureau, put it more briefly: "In other words and in plain English, you can't buy it, so you shouldn't be able to rent it either." The votes against had their reasons as well. Representative Thomas Massie's office said he opposed the bill because it would bring ordinary cloud computing, remote collaboration and software development under federal control.

![Interior of the US House of Representatives chamber, with seats arranged in a semicircle facing the rostrum](./image/img-02-house-chamber.jpg)
*▲ The US House of Representatives chamber. On January 12, 2026, it passed the Remote Access Security Act (H.R. 2683) 369 to 22 | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:United_States_House_of_Representatives_chamber.jpg)*

### 3.2. A draft rule being written at Commerce

A separate effort is under way on the executive side. In August 2026 The Information reported that a small group inside the Commerce Department was writing a narrower version of the scrapped AI diffusion rule. The target is third countries such as Thailand and Singapore, whose export controls do not line up with those of the United States. One approach under discussion would require data center operators or large buyers in those countries to block remote access by Chinese companies when advanced AI chips are exported there. In practice that places a know-your-customer duty on compute leases. The draft was said to be ready for sharing with industry groups as early as September, and as of October 2026 nothing has been proposed, published or put into force.

Alongside the rules still to be written, a review of deals already signed has begun. Bloomberg reported in August 2026 that the Bureau of Industry and Security was examining the full set of lawful routes by which Chinese AI companies have reached offshore GPUs. The focus shifted from catching smuggling to asking whether structures that break no law have sidestepped the purpose of export controls. The examples cited include Moonshot AI, INF Tech, and the contract through which Tencent came to use 15,000 Blackwell chips via Japan's Data Section. ByteDance was named as well. Tencent's previous deal, far smaller than this Oracle one, was already on that list.

### 3.3. Where the authority is missing

Between those two moves lies a hollow. A lawyer at Baker McKenzie told The Information that it is widely accepted in export-control practice that the Commerce Department cannot enforce a rule on remote access under current law. The bureau was built to govern the movement of goods, and a remote login moves nothing. Granting that authority is precisely what the bill passed by the House would do, and that bill went to the Senate Banking Committee on January 13 and has sat still ever since, pending a decision on whether to attach it to the annual defense authorization act.

> [!callout]
> Lined up in order, those pieces explain the timing of this lease. The law that would grant enforcement authority is in the Senate. The rule that would depend on that authority is a draft. A five-year contract was signed in the stretch where neither has arrived. The economics of this procurement structure rest not only on the price of chips and power, but on the fact that the rules have yet to catch up.

## The chips stay put and the data travels

Conversations about export controls mostly ask where the chips are. Under a lease, though, the chips do not move. What moves is whatever travels toward them. Training a model means sending the training data to that data center, or at least running the computation that reads it there. The harder the border around hardware grows, the more it is the data that actually crosses.

▲ What crosses the border under a lease, and what does not. Drawn from the Financial Times report (2026-10-01) and US export control rules.

Southeast Asian data centers therefore occupy a strange position. They fall squarely under neither US nor Chinese jurisdiction. The operator is an American company, the facility stands on third-country soil, and the customer is Chinese. According to the Financial Times, the largest customers of data centers in this region are already ByteDance and Alibaba. The training compute of China's big tech is concentrated in a place that no single body of law fully governs.

The undisclosed site snags on that point again. Southeast Asia does not apply one rule to sending data out across a border. Singapore permits a transfer when consent has been obtained or when the receiving side guarantees protection comparable to its own law. Thailand has yet to recognize a single country as adequate, so transfers there lean on standard contractual clauses approved by the authority, on binding corporate rules, or on explicit consent given after the risk has been disclosed. Indonesia requires local storage for certain categories, and Vietnam has written data localization into its cybersecurity law as an obligation. ASEAN's Data Management Framework and Model Contractual Clauses for Cross Border Data Flows, both released in 2021, do exist, yet they form a voluntary framework that companies adopt by choice, and ASEAN itself wrote that using the clauses does not amount to compliance with each member state's domestic law. Not knowing which country holds those 100,000 chips means not knowing which rule applies to the data passing over them.

A case where this structure turned political has already surfaced. On July 22, 2026, White House Office of Science and Technology Policy director Michael Kratsios alleged that China's Moonshot AI held Nvidia GB300 servers and had also accessed the same systems located in Thailand, and that this compute was likely used to train Kimi K3. A company was named in a public setting, yet no access logs or server ownership records were released alongside the claim, and Moonshot AI did not respond. What matters here is less whether the allegation holds than the form it takes. The question stands even though no chip ever entered China.

So which law covers the training data passing through that data center? Three layers settle the answer: the data processing clauses of the contract between Tencent and Oracle, the domestic law of the country where the data center stands, and US rules on reexport and remote access. Not one of the three has been made public. Only the parties see the contract, the host country has never been identified, and the remote-access rules are still being drafted. Pebblous wrote from this same place earlier, [reading the open-weight release of Kimi K3](/blog/kimi-k3-open-weights-data-sovereignty/en/). Publishing weights does not create sovereignty, and where the infrastructure that trains a model sits is what sets the terms.

## Why Pebblous is watching this lease

For a company trying to grow its own model, the choice between buying and leasing usually ends on a cost sheet. Equipment you own carries depreciation, power and cooling with it. A lease cuts the upfront spend and sizes the usage to the need. Drawn that way, leasing wins almost every time. The sheet is missing two rows. One is which jurisdiction processes the training data. The other is who is able to change the terms.

The second row is the unfamiliar one. When a company owns its equipment, what stops that equipment is failure and age. When it leases compute, a single line of regulation does the same work. Should the bill that passed the House clear the Senate, or the Commerce draft take effect, transactions shaped like this five-year contract all come up for review at once. The life of a procurement plan ends up tied to a legislative calendar rather than to a contract term.

There is a line Pebblous repeats whenever it talks about AI-Ready Data. Where data has been matters as much as where it is. A model improves on good data, and when no record survives of which country's facility processed that data and under what conditions, there is no way afterward to account for how the model came to be. The day a regulation changes and a particular route closes, the difference between an organization that can isolate how much was trained through that route and one that cannot shows up for the first time.

At a smaller scale the structure is identical. A team fine-tuning a model on in-house data, using GPU instances in an overseas cloud, has picked up for a few thousand dollars a month the question Tencent framed at $7 billion. Which region processed that data, where in the contract the reasoning behind that region is written down, and who hears about it first when a rule changes. If those three answers do not exist on paper today, the choice was made on the cost sheet alone.

Thanks for reading this far. The Tencent and Oracle lease can be read in the original coverage at [AI Times](https://www.aitimes.com/news/articleView.html?idxno=215909) and [TNW](https://thenextweb.com/news/tencent-oracle-100000-ai-chips-7bn-lease-ft), and the relationship between sovereignty and infrastructure is gathered in [the Sovereign AI landscape](/project/SovereignAI/en/). It is worth checking where your own organization rents the compute it trains on, and whether the contract says where the data stays. We would be glad to hear what you find.

## References

### Deal and earnings coverage

- 1.AI Times. (2026). "[Tencent leases 100,000 AI chips from Oracle, a $7 billion deal over five years](https://www.aitimes.com/news/articleView.html?idxno=215909)." 2026-10-02. In Korean.
- 2.TNW. (2026). "[Tencent leases 100,000 AI chips from Oracle in a $7bn deal, FT reports](https://thenextweb.com/news/tencent-oracle-100000-ai-chips-7bn-lease-ft)." 2026-10-01.
- 3.Newspim. (2026). "[[China movers] Tencent spends 9 trillion won to lease 100,000 AI chips from Oracle](https://www.newspim.com/news/view/20261001001019)." 2026-10-01. In Korean.
- 4.TNW. (2026). "[Tencent capex jumped 176% and free cash flow went negative](https://thenextweb.com/news/tencent-q2-2026-capex-176-percent-free-cash-flow-negative-ai)." Tencent Q2 2026 results.
- 5.China Internet Watch. (2026). "[Tencent's AI bet hardens at RMB10.5B Q2 cost](https://www.ciw.news/p/tencent-q2-2026)." Free cash flow excluding prepayments, and the change in net cash.

### Investigations into workaround structures

- 6.Tom's Hardware. (2026). "[Chinese AI startup gets access to 2,300 banned Blackwell GPUs by exploiting cloud loophole](https://www.tomshardware.com/tech-industry/artificial-intelligence/chinese-ai-startup-gets-access-to-2-300-banned-blackwell-gpus-by-exploiting-cloud-loophole-rents-compute-from-indonesian-firm-with-32-nvidia-gb200-server-racks)." Summarizing the Wall Street Journal investigation.
- 7.Seeking Alpha. (2025). "[Tencent obtains access to Nvidia Blackwell chips via Japanese third-party: report](https://seekingalpha.com/news/4533603-tencent-obtains-access-to-nvidia-blackwell-chips-via-japanese-third-party-report)." 2025-12.
- 8.The Hill. (2026). "[White House official accuses Chinese startup of improperly using Anthropic's latest model, accessing restricted Nvidia chips](https://thehill.com/policy/technology/5984510-white-house-moonshot-ai-anthropic-nvidia/)." 2026-07.

### Legislative and regulatory record

- 9.U.S. House of Representatives. (2026). "[Roll Call 13 — H.R. 2683, 119th Congress, 2nd Session](https://clerk.house.gov/Votes/2026013)." 2026-01-12.
- 10.GovTrack. "[H.R. 2683: Remote Access Security Act](https://www.govtrack.us/congress/bills/119/hr2683)." Introduction, committee action and Senate referral.
- 11.Export Compliance Daily. (2026). "[House Backs Ending Remote Access Export Control 'Loophole' for Chips](https://exportcompliancedaily.com/article/2026/01/14/house-backs-ending-remote-access-export-control-loophole-for-chips-2601130006)." 2026-01-14. Remarks by Huizenga and Massie.
- 12.The Register. (2026). "[Congress votes to kick China off remote GPU services](https://www.theregister.com/2026/01/13/congress_votes_china_gpu_cloud/)." 2026-01-13. Remarks by Lawler and Moolenaar.
- 13.Baker McKenzie. (2026). "[US House Passes Remote Access Security Act](https://sanctionsnews.bakermckenzie.com/us-house-passes-remote-access-security-act/)." What the amendment to the Export Control Reform Act would do.
- 14.Gear Live. (2026). "[The US Is Reportedly Drafting a Rule to Stop China Renting the AI Chips It Can't Buy](https://www.gearlive.com/news/article/us-rule-china-remote-access-ai-chips-report)." Summarizing The Information, 2026-08.
- 15.Baker McKenzie. (2026). "[BIS Clarifies That License Requirements for Advanced Computing Items to Country Group D:5- and Macau-Headquartered Entities Remain in Force Despite AI Diffusion Rule Non-Enforcement](https://sanctionsnews.bakermckenzie.com/bis-clarifies-that-license-requirements-for-advanced-computing-items-to-country-group-d5-and-macau-headquartered-entities-remain-in-force-despite-ai-diffusion-rule-non-enforcement/)." BIS guidance of 2026-05-31.
- 16.Holland & Knight. (2026). "[BIS Publishes Guidance on License Requirements for Advanced Computing Items](https://www.hklaw.com/en/insights/publications/2026/06/bis-publishes-guidance-license-requirements-advanced-computing-items)." The reprieve for "bona fide operators" and the gap in its definition.
- 17.Tech Times. (2026). "[BIS Targets Legal Cloud Compute as China AI Firms Bypass Export Controls](https://www.techtimes.com/articles/323532/20260807/bis-targets-legal-cloud-compute-china-ai-firms-bypass-export-controls.htm)." 2026-08-07. Summarizing Bloomberg on the full review of lawful routes.

### Cross-border data rules

- 18.Pertama Partners. (2026). "[Cross-Border Data Transfers in Asia: Complete Guide 2026](https://www.pertamapartners.com/insights/cross-border-data-transfers-asia)." Country-by-country transfer requirements for Singapore, Thailand, Indonesia and Vietnam.
- 19.ASEAN. (2021). "[ASEAN Model Contractual Clauses for Cross Border Data Flows](https://asean.org/wp-content/uploads/3-ASEAN-Model-Contractual-Clauses-for-Cross-Border-Data-Flows_Final.pdf)." Voluntary adoption, and whether the clauses guarantee compliance with domestic law.
