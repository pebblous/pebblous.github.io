---
title: My Data, My Asset
subtitle: How Web3 Rewrites the Economics of Data Ownership
date: 2026-04-17
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# My Data, My Asset

_How Web3 Rewrites the Economics of Data Ownership_

## Executive Summary

> [!callout]
> As the AI training data market grows from $2.8B to a projected $7-8B by 2030, Web3 technologies -- DataDAOs, DePIN, and Proof-of-Contribution -- are driving a structural shift in data ownership from platforms to individuals and communities. The 170x gap between the data broker market (**$291-313B**) and data marketplace platforms (**$1.8B**) lays bare how much value intermediaries capture. Web3 aims to rewrite this structure through a triple mechanism of ownership, exchange, and reward.

> DePIN has crossed from theory into the real economy. With 41.8 million active devices, $72M in FY25 on-chain revenue, and real partnerships at DIMO (425K+ vehicles with Progressive/Liberty Mutual) and Helium (2M DAU with AT&T), the model works. DataDAOs, however, have proven the ownership model but not the revenue model. Vana's 300+ DataDAOs and 1.3M users have not stopped token value from declining, and the absence of data quality verification has emerged as the structural bottleneck.

> Payment infrastructure (x402, AP2) is in place, but the "quality oracle" layer -- one that lets agents identify trustworthy data -- remains empty. If Chainlink is the price-feed oracle, a data quality-feed oracle is the missing layer of the agent economy. This is Pebblous's opportunity.

41.8M

DePIN active devices (DePINscan)

300+

Vana DataDAOs deployed, 1.3M users

$47.1B

AI agent market by 2030 (CAGR 44.8%)

170x

Data brokers ($313B) vs. marketplaces ($1.8B)

## Who Owns the Data? The Structural Ownership Gap

![Centralized vs decentralized network structure comparison](image/img-01-decentralization.svg)
*Centralized (A) vs decentralized (B) network structures. The direction of data ownership transformation. (CC BY-SA 4.0)*

Start with the most fundamental question in the data economy: who owns the data you produce every day? Legally, "data ownership" remains undefined. The EU Data Act grants rights of access, use, and portability -- but deliberately avoids the word "ownership." A Hohfeldian property-rights analysis shows this omission is intentional: because data is non-rivalrous, traditional ownership concepts do not map cleanly onto it.

The market distortion this legal gap creates is visible in the numbers. The global data broker market stands at **$291-313B** (2025), while pure data marketplace platforms account for just **$1.81-1.86B**. That is a 170x gap. Opaque intermediary trading thrives, yet transparent markets where data producers participate directly have barely formed.

### 1.1 Platforms Harvesting Data Labor

Reddit signed AI licensing deals worth $60M/year with Google, an estimated ~$70M with OpenAI, and a cumulative $203M in total. Stack Overflow's $115M revenue (+17%) increasingly depends on AI licensing. Both platforms monetize user-generated content at scale, yet none of that revenue flows back to the contributors. The "data as labor" framework proposed by Arrieta-Ibarra (2018) is gaining renewed attention for good reason.

### 1.2 Exploding Demand for AI Training Data

The AI training dataset market is projected to grow from **$2.82-3.2B** (2024) to **$7.23-8.6B** (2030). The synthetic data market is expanding even faster at a CAGR of 35-42%. Data labeling alone is a $2.23-3.77B business. At the very moment data demand is exploding, there is no consensus on who owns it -- a structural time bomb.

### 1.3 The Rise of Data Sovereignty Frameworks

Teichmann's three-dimensional model of data sovereignty identifies the core imbalance. Of the three dimensions -- "protection" (GDPR), "participation" (economic reward), and "provision" (public benefit) -- the market has focused almost exclusively on protection while sidelining economic participation. The EU Data Act, DGA (Data Governance Act), and GAIA-X aim to restore this balance, but the Data Governance Trilemma (DGT) remains an inherent tension: rights protection, economic value, and public benefit are difficult to satisfy simultaneously.

A CNIL survey of EU consumers found that the willingness-to-accept price for personal data is **EUR 120-360/year**, with 35% refusing at any price. South Korea's data industry grew from **KRW 27.15 trillion** (2023, confirmed) to an estimated **KRW 30.75 trillion** (2024) -- roughly $20-23B -- driven by the MyData 2.0 initiative and expanding data voucher programs.

> [!callout]
> **Key takeaway:** The legal void around data ownership has produced a 170x market asymmetry. Platforms earn hundreds of millions from user data while contributors receive nothing. Web3 is attempting to change this structure.

## Web3's Answer -- DataDAO, DePIN, and Proof-of-Contribution

![Blockchain-based data transaction flow](image/img-02-crypto-transaction.svg)
*Blockchain transaction flow: sender → blockchain verification → receiver. The same transparency applies to data trading. (CC0)*

Web3 addresses the data ownership gap through three mechanisms: collective ownership (DataDAO), decentralized collection (DePIN), and contribution verification (Proof-of-Contribution). Yet quality verification and governance centralization remain structural limitations.

### 2.1 DataDAO: Communities Own the Data

A DataDAO is best understood as a "blockchain-native data cooperative." In Buehler's taxonomy of data cooperatives, trusts, commons, and unions, it represents the most programmable model. Contributors submit data to a community treasury and receive token rewards proportional to their contribution. Governance runs on token voting.

MIT's Pentland research group has compared value creation between platforms and data cooperatives as digital commons. Li proposed a public data trust model that licenses AI training data and shares revenue. The theoretical foundation is solid.

However, Kioupkiolis's analysis warns of structural flaws in DAO governance: declining participation, re-centralization of decision-making, and failure to adapt to changing conditions. More DataDAOs do not automatically mean better governance.

### 2.2 DePIN: Decentralizing Physical Data Infrastructure

DePIN (Decentralized Physical Infrastructure Networks) is a model where individuals operate physical hardware -- dashcams, hotspots, GPS sensors -- and earn token rewards. Under Zichichi's three-axis classification (distributed ledger, cryptoeconomics, physical infrastructure), AI-related projects account for **59.3%** of all DePIN activity.

The core incentive insight behind DePIN is that speculative token value can bootstrap infrastructure before market demand materializes. Token rewards attract early participants, and network effects eventually generate real demand. Research shows, however, that monetary incentives alone are insufficient for sustainability; non-monetary incentives -- community belonging, data access rights -- must complement them.

### 2.3 Proof-of-Contribution and Data Valuation

Proof-of-Contribution is the mechanism that verifies data submissions and distributes token rewards. The central challenge is measuring the value of a contribution. Shapley-value-based data valuation has become computationally feasible even for LLM fine-tuning. Yet in practice, most Web3 projects limit quality checks to schema validation, and none apply ML-grade contribution assessment at scale.

### 2.4 Compute-to-Data: Privacy-Preserving Exchange

Privacy-preserving data exchange is another pillar of the Web3 data economy. SMPC (Secure Multi-Party Computation) combined with blockchain, and the Compute-to-Data (C2D) pattern, bring computation to the data instead of moving data to the computation. The D2M framework integrates on-chain auctions, off-chain federated learning, and incentive-compatible revenue sharing. ZKP (Zero-Knowledge Proof)-based verifiable ML is also advancing toward full-pipeline verifiability across training, testing, and inference.

> [!callout]
> **Key takeaway:** Web3 is restructuring data ownership through DataDAO (collective ownership), DePIN (decentralized collection), and Proof-of-Contribution (verification). But token incentives that drive data volume also incentivize low-quality or fabricated submissions. Quality verification is the structural blank spot.

## Project Landscape -- Who Is Building What

As of 2026, a clear gap is emerging between projects that have achieved product-market fit (PMF) and those still validating their model. The DePIN market cap has corrected from a peak of $19.2B to ~$9-10B, and valuation multiples have normalized from 1,000x+ to 10-25x revenue. This landscape maps nine projects across three tiers, examining the mechanics, key metrics, partnerships, and weaknesses of each.

The tier criteria are as follows. **Tier 1 (PMF achieved)** projects have validated real-economy partnerships and recurring enterprise revenue. Growth is driven by paying customers, not token price. **Tier 2 (Promising)** projects have secured technology and a user base but have yet to prove a revenue model. Token incentives power growth, and the challenge is converting to real demand. **Tier 3 (Early/Struggling)** projects have a valid concept but weak market traction, and are either burning through capital or effectively inactive.

The following table organizes major projects by tier.

| Tier | Project | Key Metrics | Revenue Signal |
| --- | --- | --- | --- |
| Tier 1 (PMF) | DIMO | 425K+ vehicles, 350% growth | Progressive/Liberty Mutual insurance, 50+ OEMs |
| Tier 1 | Helium | 2M DAU, 450K subs (300% YoY) | AT&T partnership, telecom revenue |
| Tier 1 | Hivemapper | 34% of global roads, 644M km | VW autonomous driving, Lyft |
| Tier 1 | Grass | 8.5M users | AI training data sales |
| Tier 1 | Numerai | Series C $30M, $500M valuation | JP Morgan $500M commitment |
| Tier 2 (Promising) | Vana | 300+ DataDAOs, 1.3M users | Token declining, revenue model unclear |
| Tier 2 | io.net | 327K GPUs, $20M+ revenue | Agent Cloud launched (Mar 2026) |
| Tier 2 | Ocean Protocol | Predictoor $2B volume | Enterprise v1 hinges on Q3 2026 |
| Tier 3 (Early) | GenomesDAO | ATH -90.4% | Limited pharma partnerships |

### 3.1 DIMO -- Putting Drivers Back in the Driver's Seat

DIMO transfers vehicle telematics data ownership from OEMs to drivers. The mechanics are straightforward: a driver installs a hardware device (Macaron or AutoPi) or connects a Tesla directly, and driving data flows into the DIMO network. Insurers and OEMs purchase the data via API, and drivers earn DIMO tokens in return. Each vehicle is represented as an on-chain NFT, giving the owner direct control over data-sharing permissions.

The differentiation becomes clear when compared to the traditional telematics market. Legacy data brokers like Verisk and LexisNexis acquire data from OEMs and resell it to insurers without driver consent. GM's class-action lawsuit exposed how broken that structure is. DIMO flips the model: drivers opt in and get paid.

The numbers are compelling. Over **180,000** connected vehicles (425K+ trajectories), more than **20,000** Teslas, and integrations with **50+ OEMs**. Partnerships include Progressive and Liberty Mutual (insurance), Ownli (insurance savings), Grupo Kaufmann (Latin American dealer network), and Toyota Blockchain Lab (Japan). That said, compared to the hundreds of millions of vehicles in the traditional telematics market, DIMO is still small, and hardware cost plus installation friction remain bottlenecks for mass adoption.

### 3.2 Helium -- When a Decentralized Network Meets AT&T

Helium is a decentralized telecom network where individuals deploy hotspots to provide Wi-Fi and mobile coverage in exchange for HNT token rewards. Its migration to Solana in April 2023 resolved scalability issues, and growth has accelerated since.

The decisive turning point was the AT&T partnership. With **118 million** AT&T subscribers able to auto-connect to Helium hotspots via Passpoint, the project began generating real telecom revenue rather than relying on token speculation. Helium Mobile originally launched at $20/month unlimited, then restructured to the $15/month Air Plan in January 2026.

On the metrics side, **385,000** hotspots are deployed and DAU first broke **2 million** in November 2025. Subscribers stand at **450,000** (300% year-over-year growth). In April 2025, the SEC determined that HNT, MOBILE, and IoT tokens are not securities, largely resolving the regulatory overhang. However, the plan restructuring hints at unit-economics challenges, and coverage gaps outside urban areas remain a weakness.

### 3.3 Hivemapper -- Outpacing Google Street View at 5x the Speed

Hivemapper crowdsources mapping data through dashcams. Drivers install the Bee dashcam ($19/month subscription), and road imagery is automatically captured during trips and processed into structured map data by AI. Enterprise customers purchase the data, and contributors earn HONEY tokens.

The results speak for themselves. **34%** of global roads mapped, covering **644 million km**, with over **100,000** active dashcams. The core competitive edge is a **5x faster refresh rate** than Google Street View. VW's autonomous driving division ADMT committed to using Hivemapper data for its 2026 autonomous fleet. Lyft uses it for routing, and Pantera Capital invested $32M. The Bee Maps MCP, launched in January 2026, lets AI agents query road information in natural language -- opening a direct interface with the agent economy.

Weaknesses include the ongoing $19/month cost acting as participation friction, limited coverage in developing countries, and data uniformity issues stemming from camera quality variance.

### 3.4 Grass -- 8 Million Users Turning Idle Bandwidth into AI Training Fuel

Grass has built the largest user base with the simplest participation model. Users install a browser extension, and their idle internet bandwidth is contributed as a network node. Institutional customers -- primarily AI research labs -- tap this network for web scraping and AI training data collection. Contributors earn GRASS tokens. Importantly, personal browsing data is never collected, and ZK (zero-knowledge) technology verifies the authenticity of data collection.

The scale is striking. **8.5 million** users, over **2.5 million** active nodes, scraping approximately **100 TB** of data daily across **190+** countries. The project raised $10M (Polychain Capital, Tribe Capital), and Season 2 airdrop is scheduled for April 29, 2026. The difference from a similar project like Swash is clear: Swash collects personal browsing behavior data, while Grass only shares bandwidth.

The main risks are legal exposure from users acting as exit nodes (IP address visibility) and uncertain user retention after the airdrop ends. The sustainability of the bandwidth-sharing model will only be tested once airdrop incentives expire.

### 3.5 Numerai -- A Hedge Fund Run by 30,000 Data Scientists

Numerai operates the most distinctive model among Web3 data projects. It distributes obfuscated financial datasets for free, and data scientists worldwide submit ML models. Participants stake NMR tokens -- earning up to 25% weekly returns for strong performance, and losing their stake when models underperform. Thousands of individual models are ensembled into a metamodel that runs a global equities fund.

Performance validates the model. Over **1,000 rounds** completed, with **30,000+** participants submitting more than **1,200** staked models weekly. The flagship fund returned **25.45%** in 2024 (an all-time high). AUM surged from $60M to **$550M**, backed by a $30M Series C ($500M valuation) and a **$500M** capacity commitment from JP Morgan.

From a data ownership perspective, Numerai's structure is unusual. Scientists own their models but not the underlying data -- intellectual property (the model) and data ownership are separated. Weaknesses include the inability for participants to independently verify prediction targets due to data obfuscation, and the 25% weekly stake burn acting as a significant barrier to entry.

### 3.6 Vana -- The Project That Defined the DataDAO Archetype

Founded by an MIT Media Lab team, Vana launched its L1 mainnet in December 2024. It holds an important place in this landscape as the project that created the working prototype of the DataDAO concept. Communities pool specific data types -- Reddit posts, Spotify history, genomic data -- and verify contributions via Proof-of-Contribution before distributing token rewards. The revenue model is selling the pooled data for AI training.

By the numbers, over **300** DataDAOs have been deployed, with **1.3 million** users and **12.7 million** data points collected. The Reddit DataDAO (r/datadao) alone has **140,000 commits**. However, the $VANA token trades around ~$1.38-1.41, well below its all-time high, with a market cap of roughly $42M.

Vana's dilemma encapsulates the structural challenge of the Web3 data economy. The ownership proof model works, but the revenue model does not -- yet. Token price decline weakens participation incentives, which in turn risks reducing data contributions in a self-reinforcing downward spiral.

### 3.7 io.net -- Distributed GPUs Becoming the Agent Cloud

io.net aggregates idle GPUs -- from data centers, crypto miners, and individuals -- into an AI compute marketplace. Rather than decentralizing data itself, it decentralizes data processing infrastructure, making it a natural complement to data ownership projects.

Verified GPUs stand at **327,000** (as of March 2025), with total aggregated GPUs exceeding **1 million**. Annualized revenue tops **$20M**. Agent Cloud, launched in March 2026, is purpose-built compute infrastructure for AI agents, integrating MCP libraries so that agents can source GPU resources directly. The IDE (Incentive Dynamic Engine) dynamically adjusts token supply based on real-time GPU utilization.

Two weaknesses stand out. Analysts have questioned the verifiability of reported GPU supply figures, and enterprise-grade stability and SLAs have yet to be proven.

### 3.8 Ocean Protocol -- The Original Data Marketplace Navigating a Pivot

Founded in 2017, Ocean Protocol enjoys the first-mover advantage as the original decentralized data marketplace protocol. Its core technology, Compute-to-Data (C2D), sends computation to the data rather than moving data to the computation -- a privacy-preserving trading model that implements the technical foundations discussed in Section 2.

The Predictoor product has logged **$2B** in volume, with over **1.4 million** active nodes across **70+** countries. However, Ocean's October 2025 departure from the ASI Alliance (Fetch.ai, SingularityNET) came with a $120M settlement and a liquidity hit. The move signals Ocean's intent to pursue an independent enterprise strategy, but it has weakened market confidence in the short term.

**Ocean Enterprise v1**, slated for Q3 2026, is the inflection point. Eight years of technical accumulation either crystallizes into a viable enterprise data trading platform, or the first-mover advantage is surrendered to later entrants.

### 3.9 GenomesDAO and the Lessons of Failure

GenomesDAO set out to let individuals store genomic data in encrypted vaults and earn rewards for research consent. The concept is undeniably valid -- 23andMe's bankruptcy and genomic data breaches made a dramatic case for personal control over genetic information. But the token has crashed **-90.4%** from its all-time high, and 24-hour trading volume sits at roughly $99. The project is effectively inactive.

GenomesDAO is not an isolated case. In Q1 2026, Polynomial, ZeroLend, and Parsec shut down. Over **300** gaming dApps went inactive in Q2 2025, and X's (formerly Twitter) API policy changes cut off the data source for InfoFi projects entirely.

Three lessons emerge from these failures. First, **token incentives alone are not sustainable.** Projects dependent on token price without real-world demand do not survive a downturn. Second, niche markets like genomic data take longer to reach PMF, increasing the risk of running out of capital. Third, models that depend on external platforms (e.g., X's API) for data sources are one policy change away from collapse.

> [!callout]
> **Key takeaway:** The DePIN ecosystem is transitioning from speculation to the real economy. Valuations have normalized from 1,000x to 10-25x revenue multiples, and enterprise partnerships are the survival threshold. DIMO, Helium, and Hivemapper have each secured real-world demand in insurance, telecom, and autonomous driving respectively, while Numerai has validated the crowdsourced financial data model with $550M in AUM. Vana and Ocean, despite strong technology and user bases, still face the challenge of revenue model conversion. GenomesDAO's effective inactivity illustrates the limits of token-dependent models. What all these projects have in common is the absence of a data quality certification layer.

## Regulatory Boundaries -- Data Sovereignty Meets Web3

National regulations are both an accelerant and a constraint for Web3 data ownership models. The EU Data Act (effective September 2025) codifies data access rights, lending momentum to decentralized ownership -- but the potential classification of tokens as securities creates a regulatory headwind.

### 4.1 EU: Codifying Data Sovereignty

In the four-model taxonomy of digital sovereignty, the EU represents the "rights-based" approach. The EU Data Act's core obligations took effect on September 12, 2025; product design obligations follow on September 12, 2026; and cloud switching obligations on January 12, 2027. Violations carry fines of **4-5%** of global revenue.

GAIA-X now has **350+** confirmed members working to standardize European data spaces. The DGA (Data Governance Act) introduced "data altruism" -- a legal framework for individuals to voluntarily contribute data for the public good. This regulatory ecosystem is structurally compatible with Web3's community-based data ownership model.

### 4.2 South Korea: MyData 2.0 and the Data Industry

Following its Data Three Acts (2020), South Korea launched MyData 2.0 in June 2025. The system has linked **165 million** data records, with KakaoPay alone at **20 million** subscribers. The push to transform KDX (Korea Exchange) into a data marketplace, combined with high demand in data voucher programs, signals strong appetite for data trading infrastructure -- and a growing need for objective data pricing mechanisms.

### 4.3 United States and Singapore: Market-Driven Approaches

The United States lacks a federal data privacy law, with **19 states** enforcing individual privacy statutes. However, SEC Chair Atkins signaled at ETHDenver 2026 that no-action letters for tokenization and DePIN are under consideration. Singapore balances PDPA with a data innovation sandbox. Legal recognition of DAOs is progressing in Wyoming (2021), the Marshall Islands (2022), and UAE RAK.

Gartner projects that **25%** of enterprises will use Web3 services by 2027. Regulatory uncertainty remains, but the trend is clear: codification of data access rights is spreading globally.

> [!callout]
> **Key takeaway:** The EU Data Act's mandatory data access provisions have created a legal demand for quality certification. Combining ISO/IEC 5259 with Web3 provenance proofs is a positioning that satisfies both regulatory compliance and market trust.

## When Agents Buy Data -- The Agent Economy and Web3 Data Layers

The AI agent market is projected to grow from $5.1B (2024) to **$47.1B** (2030) at a CAGR of 44.8%. The M2M services market is expected to reach **$164.2B** (2030, CAGR 25.5%). An economy where agents autonomously buy and sell data is no longer hypothetical -- it is materializing.

### 5.1 Payments Are Solved. Trust Is Not.

Payment infrastructure for the agent economy is coming together fast. Coinbase's [x402 protocol](/blog/x402-protocol-ai-payment-2026/en/) standardizes M2M payments using the HTTP 402 status code. Google's [AP2 (Agent Payment Protocol)](/blog/google-ap2-agent-payment-protocol-2025/en/) implements trust-based agent payments. [Stablecoin infrastructure](/blog/stablecoin-data-ai-agent-economy-2026/en/) is also maturing. Each of these is covered in dedicated analyses, so we will not repeat the details here.

The crux is this: "how to pay" is being solved, but **"what to trust and buy"** remains wide open. Already, **37%** of The Graph API users are AI agents. In a world where agents autonomously source data, there is no "trust structure" to verify the quality and provenance of what they are buying.

### 5.2 DataDAOs and DePIN Become the Agent Supply Chain

In the five-layer architecture of the agent economy, the "data asset layer" sits between payment infrastructure and data sourcing. DataDAOs become the agent's data sourcing channel; DePIN becomes the real-time data supply chain.

Concretely, autonomous driving agents could purchase DIMO's vehicle data directly, or delivery agents could source Hivemapper's latest map data in real time. AI Agent crypto projects already number **550+**, with a combined market cap of **$4.34B**. io.net launched Agent Cloud in March 2026, providing compute infrastructure purpose-built for AI agents.

### 5.3 The Missing Layer: Data Quality Proof

IBis proposed blockchain-based provenance tracking for AI training data -- bidirectional tracing between datasets and models. Longpre identified the fundamental inadequacy of current data provenance frameworks: "authentication, consent, credit, and compensation" are all broken.

A full stack connecting data quality proof, ownership proof, and automated payment must be in place for agent data transactions to function at scale. The payment layer is covered by x402 and AP2. Data sourcing is handled by DataDAOs and DePIN. But the "trust bridge" between these two -- the **quality proof layer** -- is empty. The "diagnose-remediate-certify" pipeline analyzed in our [Data Value Proof report](/report/data-value-proof/en/) addresses precisely this gap.

> [!callout]
> **Key takeaway:** In the agent economy, data transactions will happen in milliseconds. Between payment infrastructure (x402, AP2) and data sourcing (DataDAO, DePIN), a "quality proof" trust bridge is needed. This is the missing layer of the agent economy.

## Why Pebblous Cares -- The Data Quality Oracle

The four threads analyzed in this report -- ownership shifts, project landscape, regulatory environment, and the agent economy -- converge on a single intersection. Token incentives drive explosive data volume, but quality goes unverified. Most projects cap their validation at schema checks. This structural gap is Pebblous's opportunity.

### Business Alignment: Four Solutions, One Web3 Position

The following table maps Pebblous solutions to their roles in the Web3 data ecosystem.

| Solution | Web3 Ecosystem Role | Problem Solved |
| --- | --- | --- |
| DataClinic | Quality certification | Low-quality data influx driven by token incentives |
| AI-Ready Data | AI fitness verification | No ML-readiness guarantee for crowdsourced data |
| Data Greenhouse | Decentralized data refinery | Integration and refinement of DataDAO data |
| PebbloSim | Synthetic data augmentation | Gaps and bias in DataDAO datasets |

### Positioning: If Chainlink Does Price, Pebblous Does Quality

Chainlink became the trust foundation of DeFi by providing on-chain price-feed oracles. By the same logic, a **"data quality oracle"** that publishes AI-Ready quality scores for DataDAO/DePIN data on-chain could become the trust foundation of the Web3 data ecosystem. Combining ISO/IEC 5259 with Web3 provenance proofs satisfies both regulatory compliance and market trust.

### Scale of the Opportunity

The synthetic data market is growing at a CAGR of 35-42%. The enterprise data monetization market is projected to expand from $4.78-5.22B (2025) to **$48.55B** (2035). Enterprise data monetization adoption has already reached **68%**. DePIN startups alone raised $1B in funding in 2025. Across all these markets, demand for quality verification partners is rising.

When DIMO's vehicle data and Hivemapper's mapping data are repurposed for AI training, quality verification is not optional -- it is mandatory. In South Korea, the KDX data marketplace transition and data voucher programs both require technical solutions for data pricing. In the Data Governance Trilemma, the "quality assurance" layer that bridges "economic value" and "rights protection" is precisely where Pebblous sits.

> [!callout]
> The Web3 data economy has ownership (DataDAO), collection (DePIN), and payment (x402/AP2) -- but quality verification is missing. A "data quality oracle" that resolves the volume-versus-quality dilemma created by token incentives will become the ecosystem's trust foundation. Pebblous's diagnose-remediate-certify pipeline is positioned to fill that role.

## Frequently Asked Questions

Key questions and answers about Web3 data ownership, DataDAOs, DePIN, and the agent economy.

## References

### Academic Papers and Research

1. Teichmann et al., ["Data Sovereignty in Information Systems"](https://link.springer.com/article/10.1007/s12525-024-00693-4), _Electronic Markets_, 2024
2. [Hohfeldian property-rights analysis of EU Data Act IoT data rights](https://link.springer.com/article/10.1007/s10657-023-09791-8), _European Journal of Law and Economics_, 2024
3. [Four models of digital sovereignty: rights-based (EU), market-driven (US), centralized, state-based](https://link.springer.com/article/10.1007/s44206-024-00146-7), _Digital Society_, 2024
4. Buehler et al., [taxonomy of data cooperatives / trusts / commons / unions](https://arxiv.org/abs/2504.10058), arXiv, 2025
5. Buehler, Calzada, Pentland et al., [MIT Pentland, digital commons value creation in platforms vs. data cooperatives](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4413371), SSRN, 2023
6. Stuermer et al., [Data Governance Trilemma (DGT): rights protection vs. economic value vs. public benefit](https://link.springer.com/article/10.1007/s44206-023-00058-y), _Digital Society_, 2023
7. Li et al., [Li, public data trust model: AI training data licensing + revenue sharing](https://dl.acm.org/doi/10.1145/3600211.3604658), AAAI/ACM AIES, 2023
8. Kioupkiolis et al., [Kioupkiolis, structural flaws in DAO governance: declining participation, re-centralization](https://arxiv.org/abs/2409.01823), arXiv, 2024
9. Vipra & Mahari, [unique economic properties of data: non-rivalry, context-dependence, emergent rivalry](https://arxiv.org/abs/2510.24990), arXiv, 2025
10. Arrieta-Ibarra et al., ["Should We Treat Data as Labor?" proposal](https://www.aeaweb.org/articles?id=10.1257/pandp.20181003), _AEA Papers and Proceedings_, 2018
11. Zichichi et al., [DePIN three-axis taxonomy: DLT + cryptoeconomics + physical infrastructure](https://ieeexplore.ieee.org/document/10737386/), _IEEE Network_, 2024
12. [Multi-agent simulation: efficiency analysis of decentralized infrastructure](https://arxiv.org/abs/2404.08306), arXiv, 2024
13. [DePIN framework: speculative-value-driven infrastructure bootstrapping before market demand](https://arxiv.org/abs/2311.00551), arXiv, 2023
14. Bhatia et al., [SMPC + blockchain privacy-preserving data exchange](https://dl.acm.org/doi/10.1145/3652162), _ACM TOPS_, 2024
15. [BlockDaSh reference architecture: data processing-sharing-storage three-layer model](https://dl.acm.org/doi/10.1145/3718082), _ACM Computing Surveys_, 2025
16. [D2M: on-chain auction + off-chain federated learning + incentive-compatible revenue sharing](https://arxiv.org/pdf/2512.10372), arXiv, 2025
17. [Incentive design: effectiveness of combined monetary and non-monetary incentives](https://link.springer.com/article/10.1007/s44248-024-00006-2), _Discover Data_, 2024
18. Baghcheband et al., [Shapley-value data valuation: practical-scale computation for LLM fine-tuning](https://link.springer.com/article/10.1007/s42452-025-07328-z), _Discover Applied Sciences_, 2025
19. Akbar et al., [IBis: blockchain-based AI training data provenance tracking](https://arxiv.org/abs/2404.06077), arXiv, 2024
20. [ISO/IEC 9126-based blockchain data provenance quality attributes](https://link.springer.com/article/10.1007/s40012-025-00419-7), _CSI Transactions_, 2025
21. Longpre et al., [Longpre, fundamental inadequacy of current data provenance frameworks](https://arxiv.org/pdf/2404.12691), arXiv, 2024
22. [ZKP-based verifiable ML: full-pipeline verification across training/testing/inference](https://arxiv.org/abs/2310.14848), arXiv, 2025

### Industry Reports and Data

1. [Grand View Research / GlobeNewswire](https://www.grandviewresearch.com/industry-analysis/data-broker-market-report) -- Data broker market $291-313B (2025), marketplace $1.81-1.86B
2. [Grand View / Straits Research](https://www.grandviewresearch.com/press-release/global-ai-training-dataset-market) -- AI training datasets $2.82-3.2B (2024) → $7.23-8.6B (2030)
3. [MarketsandMarkets](https://www.prnewswire.com/news-releases/ai-agents-market-worth-47-1-billion-by-2030---exclusive-report-by-marketsandmarkets-302246356.html) -- AI agent market $5.1B → $47.1B (2030), CAGR 44.8%
4. Research & Markets -- M2M services market $164.2B (2030), CAGR 25.5%
5. [Messari State of DePIN 2025](https://messari.io/report/state-of-depin-2025) -- DePIN FY25 on-chain revenue $72M, startup funding ~$1B (2025)
6. [DePINscan](https://depinscan.io) -- 41.8M active devices
7. [CoinGecko DePIN](https://www.coingecko.com/en/categories/depin) -- DePIN market cap ~$9-10B (current), peak $19.2B
8. Han et al., ["DAO Governance"](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4346581) -- DAO total treasury $24.5B, 13,000+ DAOs
9. [Vana official](https://www.vana.org/posts/datadao-deepdive) -- 300+ DataDAOs, 1.3M users, 12.7M data points
10. [DappRadar](https://dappradar.com/blog/best-ai-coins-dapps-projects-web3-blockchain-industry) -- AI Agent crypto 550+, combined market cap $4.34B
11. [TechCrunch](https://techcrunch.com/2024/02/22/reddit-says-its-made-203m-so-far-licensing-its-data/) -- Reddit AI licensing cumulative $203M
12. [CNIL France](https://www.cnil.fr/en/monetisation-personal-data-how-much-our-data-worth) -- EU consumer willingness-to-accept for personal data €120-360/year
13. [KDATA (Korea Data Agency)](https://www.kdata.or.kr/) -- South Korea data industry KRW 27.15T (2023) → KRW 30.75T (2024 est.)
14. [Financial Services Commission](https://www.fsc.go.kr/no010101/84780) -- MyData 2.0: 165M records linked, KakaoPay 20M subscribers
15. [IAPP](https://iapp.org/resources/article/us-state-privacy-legislation-tracker) -- 19 US state privacy laws enforced, no federal law
16. Gartner -- 25% of enterprises to use Web3 services by 2027
17. [EU / Clifford Chance](https://www.cliffordchance.com/insights/resources/blogs/talking-tech/en/articles/2025/09/eu-data-act--a-new-era-for-data-sharing-has-begun.html) -- EU Data Act fines at 4-5% of revenue
18. [House of Chimera / ETHNews](https://www.ethnews.com/the-depin-sector-now-has-over-650-active-projects-the-march-2026-landscape-shows-where-the-build-is-happening/) -- 650+ active DePIN projects
19. [Precedence Research](https://www.precedenceresearch.com/data-monetization-market) -- Enterprise data monetization $4.78-5.22B (2025) → $48.55B (2035)
20. [InsightAce](https://www.insightaceanalytic.com/report/web-30-blockchain-market/1635) -- Web3 blockchain market $2.7B → $114.9B (2034), CAGR 45.6%
