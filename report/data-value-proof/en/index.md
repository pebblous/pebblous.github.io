---
title: Pricing Data
subtitle: Value Proof, Blockchain, and the Agent Economy
date: 2026-04-11
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Pricing Data

_Value Proof, Blockchain, and the Agent Economy_

## Executive Summary

170x

Data brokers ($319B) vs marketplaces ($1.8B) market gap

Zero

Pure data marketplace unicorns in 10 years

$3.1T

Annual U.S. economic loss from poor-quality data (IBM)

2026.08.02

EU AI Act data quality obligation effective date

> [!callout]
> Data is the core asset of the AI economy, yet its trading market is structurally paralyzed. The global data broker market stands at **$319B**, while the pure data marketplace platform market is a mere **$1.8B** — and not a single unicorn has emerged in a decade. The key bottleneck is information asymmetry: a lemon market problem where buyers cannot verify data quality before purchase is blocking market formation itself.

> Three technology pillars are maturing simultaneously to solve this problem. Data valuation research that began with Data Shapley (2019) has advanced to efficient LLM-specific approximations (2025); blockchain is being redefined as an immutable record system for data provenance and quality (DataBOM); and agent payment infrastructure such as Coinbase x402 and Skyfire KYAPay is making micropayments a reality.

> The Pebblous patent (10-2912944) sits at the intersection of these three pillars. It is a "diagnose-supplement-prove" pipeline that diagnoses data quality through virtual-environment simulation, fills gaps with synthetic data, and records the results on blockchain. When EU AI Act Article 10 takes effect in August 2026, data quality proof becomes a legal obligation — and in the agent economy, a machine-readable data trust infrastructure.

## 1. Data Has No Price Tag — The 170x Gap and the Lemon Market

The paradox of the data economy is laid bare by the numbers. According to Grand View Research, the global data broker market is worth **$319.2B** (CAGR 9.3%). Yet MarketsandMarkets estimates the pure data marketplace platform market at just **$1.8B**. That is a 170x gap. Opaque brokered deals thrive, but transparent platform-based trading has failed to take hold.

CB Insights analysis shows that over the past decade, the number of pure data marketplace unicorns is **zero**. McKinsey estimates the failure rate of data marketplace startups at roughly **70%**. Gartner placed data marketplaces in the "Trough of Disillusionment." Investors, enterprises, and analysts have all reached the same conclusion.

### The Lemon Market: Quality Is Unknown Before Purchase

The cause is clear: the classic **lemon market** problem from economics. Just as a used-car buyer cannot know the vehicle's true condition beforehand, a data buyer has no way to verify data quality before purchase. In a World Economic Forum survey, **85%** of data suppliers reported "not enough buyers," while **72%** of data buyers said "quality cannot be trusted" (Zhang et al., 2024). Suppliers want to sell, buyers want to buy, but there is no trust mechanism connecting the two sides.

### The Economic Scale of the Quality Problem

The cost of absent trust is enormous. According to IBM, the annual loss to the U.S. economy from poor-quality data reaches **$3.1T** (including opportunity costs). A Gartner survey found that **80%** of AI projects fail due to data quality issues. An Anaconda report shows that **45%** of data scientists spend their working hours on data cleansing. All these figures point in the same direction: without technology that can attach a trustworthy price tag to data, the data economy realizes only a fraction of its potential.

> [!callout]
> **Key Takeaway:** The challenge in the data trading market is not "a shortage of data." It is the inability to prove to buyers that "this data is actually worth using." Closing the 170x gap requires not more data, but technology that confers trust upon data.

## 2. Patent Anatomy — Virtual-Environment Simulation + Synthetic Data + Blockchain

The Pebblous patent (Korea 10-2912944 / U.S. US 12,481,720 B2) combines three technology pillars of data value proof into a single pipeline. We dissect the academic foundations and technical mechanisms of each pillar.

### 2.1 The Science of Pricing Data: Data Shapley

The academic origin of "putting a price on data" is Ghorbani and Zou's **Data Shapley** (2019, ICML). It applies the Shapley value from cooperative game theory to ML data valuation, fairly allocating each data point's contribution to model performance. Over the following five years, a benchmark and library ecosystem emerged — SVBench (VLDB 2025), OpenDataVal (NeurIPS 2023), pyDVL — and by 2025, efficient Shapley approximation for LLM DPO training and extensions to asymmetric Shapley had been achieved.

However, most academic research focuses on measuring "contribution to ML model performance." Determining data prices in a real market requires factoring in supply-demand dynamics, bundling strategies, and externalities — a gap that persists. Pebblous's approach lies in converting academic valuation into **market-tradable quality certification**.

### 2.2 Virtual-Environment Simulation: A Digital Twin for Data Quality

The patent's first stage is virtual-environment simulation. Before feeding data into actual model training, it predicts the performance impact in a virtual environment. While conventional data quality assessment relies on "static inspection" such as profiling or statistical validation, this approach amounts to a **"dynamic stress test."**

Academically, this methodology shares structural similarity with the Sim-to-Real paradigm in robotics. For simulation results to accurately predict real-world performance, the "reality gap" must be minimized. In the data quality context, the key challenge is whether simulation can reliably predict "how much will model performance improve if this data is used for training." Sajith and Kathala (2024) experimentally showed that 100% duplication in training data causes accuracy to plummet by **40%**, and Zhou et al. (2025) demonstrated the systematic impact of six quality dimensions on 19 ML algorithms.

### 2.3 Synthetic Data Augmentation: Generation Alone Is Not Enough

The second stage fills gaps with synthetic data. Weaknesses uncovered during simulation — missing conditions or underrepresented scenarios — are addressed with synthetic data. A 2024 survey found that synthetic data should be evaluated along three axes: **Quality, Diversity, and Complexity**. For tabular data, four requirements apply: utility, consistency, fidelity, and privacy (2025 survey).

Gartner projects that by 2030, **over 60%** of AI training data will be synthetic. The synthetic data market is growing at $422M (CAGR 33.1%). Yet as the failure cases of Datagen (shut down after $70M in investment), Synthesis AI (absorbed via merger), and AI.Reverie (disbanded) demonstrate, "generation alone cannot sustain a business." The value of synthetic data is only realized when combined with diagnosis and proof.

### 2.4 Blockchain Proof: Immutable Quality Records

The third stage records simulation results and quality metrics on blockchain. The DataBOM (Data Bill of Materials, 2024) study applied the software SBOM concept to the data supply chain, achieving a **95% reduction** in provenance disputes. Here, blockchain functions not as mere cryptocurrency, but as a **"digital registry for data"** — immutably recording data provenance, quality verification results, and transaction history.

Integrating these three stages yields the following pipeline.

1Diagnose (DataClinic)

Diagnose data quality via virtual-environment simulation; identify gaps

↓

2Supplement (PebbloSim)

Fill gaps with synthetic data; QDC 3-axis quality verification

↓

3Prove (Blockchain)

Record quality metrics + simulation results immutably on blockchain

> [!callout]
> **Key Takeaway:** Each individual technology already exists. Data Shapley evaluates value, synthetic data tools fill gaps, and blockchain keeps records. But combining "diagnose-supplement-prove" into a single pipeline that produces a market-tradable price tag is structurally novel.

## 3. Competitive Landscape — Ocean Protocol, Anomalo, Cloud Marketplaces

Several companies are approaching the data value proof problem from different angles. We map this landscape along three axes: transaction infrastructure, quality monitoring, and synthetic data.

### 3.1 Cloud Marketplaces: Trading Exists, Certification Does Not

Snowflake Marketplace (annual **$2B+** data sharing), Databricks Marketplace, and AWS Data Exchange are the de facto standards for cloud data trading. These platforms have massive customer bases and payment infrastructure, but lack a third-party quality certification layer. Buyers must rely on data providers' reputation, and there is no upfront guarantee that "this data will actually improve my model's performance."

### 3.2 Ocean Protocol: Lessons from a Pioneer

Ocean Protocol is the quintessential pioneer of blockchain-based data marketplaces. It introduced Compute-to-Data — a technically elegant approach that brings computation to the data instead of moving data. Yet actual transaction volume remains negligible. The key bottleneck was not technology but the absence of "pre-purchase data quality verification." They built a marketplace on blockchain but lacked the mechanism to prove to buyers that "this data is worth using."

### 3.3 Data Quality Tools: They Monitor, but Cannot Prove

Data observability tools such as Anomalo, Monte Carlo, and Great Expectations excel at detecting and monitoring anomalies in data pipelines. Gartner included "data contract SLAs" as an official evaluation criterion in its 2026 MQ for Augmented Data Quality Solutions. However, these tools focus on maintaining quality within an organization and have not extended to "externally tradable value certification."

### 3.4 Synthetic Data Companies: Even $70M in Funding Could Not Guarantee Survival

The lessons from the synthetic data market are dramatic. **Datagen** raised $70M in funding and still shut down. **Synthesis AI** was absorbed via merger, and **AI.Reverie** was disbanded. Rapid advances in generative AI commoditized synthetic data generation itself, erasing the competitive advantage of single-function tools. In contrast, NVIDIA's acquisition of Gretel (**$320M+**, March 2025) shows that synthetic data is valued only when integrated into a larger platform.

The following table summarizes each approach's positioning.

| Category | Key Players | Focus | Value Proof |
| --- | --- | --- | --- |
| Cloud Marketplace | Snowflake, AWS, Databricks | Transaction infrastructure | Absent |
| Blockchain Marketplace | Ocean Protocol | Decentralized trading | Absent |
| Data Observability | Anomalo, Monte Carlo | Internal monitoring | Internal only |
| Synthetic Data | Gretel, Mostly AI | Data generation | Absent |
| Value Proof Infra | Pebblous | Diagnose-Supplement-Prove | End-to-end |

> [!callout]
> **Key Takeaway:** Existing players each focus on transaction infrastructure, internal monitoring, or data generation. The "value proof infrastructure" space — directly targeting the market's core bottleneck of "pre-purchase quality verification" — remains essentially vacant.

## 4. Regulation-Driven Market — EU AI Act, ISO 5259

Data value proof is unlikely to grow on voluntary market demand alone. But the moment when regulation forces that demand is fast approaching.

### 4.1 EU AI Act Article 10: Quality Proof Becomes a Legal Obligation

EU AI Act Article 10 requires proof of **"relevance, representativeness, accuracy, and completeness"** for training, validation, and test data of high-risk AI systems. Violations carry fines of up to **3% of revenue (EUR 15M)**. The effective date is **August 2, 2026** — roughly four months from the publication of this report.

The regulation's impact is confirmed by the numbers. EU companies' AI Act compliance investment is projected at **EUR 31B** (cumulative 2024-2027), and the AI Act compliance solutions market is expected to reach **$1.5B** by 2027. "How do we prove data quality?" is becoming the central question for regulatory compliance.

### 4.2 ISO 5259 and Industry Standardization

In November 2025, SGS issued the world's first **ISO/IEC 5259-3** certification. An international standard for AI training data quality management processes has begun to establish itself as a certification framework. Gartner also officially included "data contract SLAs" as an evaluation criterion in its 2026 MQ (Magic Quadrant). The industry's voluntary quality competition and regulatory mandates are operating simultaneously.

### 4.3 Korea's Data Industry: Excess Demand, Missing Standards

Korea's data industry has reached **KRW 25.3 trillion** (11.2% annual growth, Korea Data Agency 2024). The legal foundation was established after the Data 3 Acts (2020), and competition for government data vouchers stands at **10.2:1**, indicating excess demand. While the Korea Exchange (KRX) is pursuing a transition to a data marketplace, the biggest bottleneck is the **"absence of data pricing standards."** There is no agreed-upon methodology for determining how much data should sell for.

> [!callout]
> **Key Takeaway:** The EU AI Act is shifting data quality proof from "nice to have" to "prove it or pay fines." The emergence of the ISO 5259 certification framework and Gartner's MQ inclusion demonstrate that this shift is solidifying as an industry standard, not a temporary regulation.

## 5. The Agent Economy and Data Trading — x402, Stablecoins, M2M

The ultimate consumers of data value proof may not be humans. An era is approaching in which AI agents autonomously buy and sell data.

### 5.1 The Scale of the Agent Economy

According to MarketsandMarkets, the AI agent market is projected to grow from $5.1B to **$47.1B** by 2030 (CAGR 44.8%). McKinsey estimates the M2M (Machine-to-Machine) transaction market at **$150B+** (2030). Hadfield and Koh (2025) academically established the future in which AI agents transact autonomously as economic actors, while Xu (2026) proposed a blockchain-based five-layer architecture (DePIN, DID, Account Abstraction).

For agents to autonomously trade data, three types of infrastructure must be in place.

- 1**Quality Proof** — Machine-readable data quality certification. The human approach of reading reports and making judgments does not work for agents.
- 2**Payment Layer** — x402 protocol, stablecoin micropayments. Granular transactions at the level of "0.001 USDC per data record" must be possible.
- 3**Identity Verification** — DID (Decentralized Identifier), blockchain-based agent identity verification. It must be possible to confirm that a counterparty is a trustworthy agent.

### 5.2 Payment Infrastructure: Already a Reality

Agent payment infrastructure is no longer theoretical — it is real. In 2024, stablecoin transaction volume reached **$27.6T**, 2.2x that of Visa, and grew to **$33T** in 2025. Coinbase's **x402 protocol** (launched May 2025) standardized M2M payments using the HTTP 402 status code, and the April 2026 "Upto" upgrade added usage-based dynamic billing. Skyfire's **KYAPay** (Know Your AI-agent Pay) combines agent identity verification with autonomous payments, integrating with Visa Intelligent Commerce. Stripe Agent Toolkit connects LLMs to payment infrastructure via MCP servers.

### 5.3 A Digital Registry for Data

Payment infrastructure (Infrastructure 2) and identity verification (Infrastructure 3) are materializing rapidly. But quality proof (Infrastructure 1) remains a blank space. There is no standardized mechanism for an agent to programmatically verify "is this data's quality certified?" when purchasing data. Simulation-based quality certification recorded on blockchain — a **"digital registry for data"** — can fill that void.

For a deeper analysis of the agent economy's structure and outlook, see the [Pebblous Agent Economy Hub](/project/AgentEconomy/).

> [!callout]
> **Key Takeaway:** In the agent economy, data transactions happen on the millisecond scale. Human review and approval cannot keep pace. Quality proof infrastructure that is machine-readable, immutably recorded on blockchain, and automatically integrated with payment flows becomes the trust foundation of the agent economy.

## 6. Questions This Research Poses for Pebblous

Pebblous's business sits at the intersection of the three currents analyzed in this report: technology, market, and regulation. We examine what this intersection concretely means from four angles.

### Diagnose-Supplement-Prove: A Unique Position from Integrating Three Technologies

The Pebblous patent (10-2912944) combines DataClinic (data quality diagnosis), PebbloSim (synthetic data augmentation), and blockchain value proof into a single pipeline. As confirmed in Section 3, existing players each focus on transaction infrastructure (Snowflake, AWS), internal monitoring (Anomalo, Monte Carlo), or data generation (Gretel, Mostly AI). The position of performing "diagnosis through proof" end-to-end is a vacant space in the current competitive landscape.

DataClinic's virtual-environment simulation performs a "dynamic stress test" that conventional profiling and statistical validation cannot. PebbloSim, building on the failure lessons of Datagen and Synthesis AI, redefines synthetic data not as a "generation tool" but as a "quality augmentation mechanism." As NVIDIA's Gretel acquisition ($320M+) demonstrates, synthetic data is valuable only when integrated into a larger platform.

### Academic Consensus: Training Data Quality Determines Model Performance

A 40% accuracy plunge from 100% training data duplication (Sajith & Kathala, 2024), the systematic impact of six quality dimensions on 19 ML algorithms (Zhou et al., 2025), 80% of AI projects failing due to data quality (Gartner) — the causal link "high-quality data = high-performance model" is now established. DataClinic's simulation converts this causal relationship into **measurable metrics**. Once quantitative proof that "this data can improve model performance by X%" becomes possible, the economic basis for pricing data is created.

### Practical Challenges Facing Customers and Partners

This analysis yields four practical implications. First, companies entering the EU market must complete data quality documentation for high-risk AI systems by August 2026, and DataClinic plus blockchain proof can serve as the technical backend for Article 10/11 compliance. Second, providing a third-party quality certification layer to cloud marketplaces like Snowflake or Databricks could serve as trust infrastructure that resolves the buyer's "quality trust deficit" (72%). Third, for AI agent developers, machine-readable quality certification becomes a "data quality receipt" that integrates with x402/Skyfire payment flows. Fourth, the KRX data marketplace transition and data voucher program (10.2:1 competition ratio) demand a technical solution for "data pricing standards."

### Questions to Explore Going Forward

Parameta's "Broof" blockchain certificate (2025 MOU), Sooho.io's AI data sourcing platform (2025 MOU), and the AADS joint research with KISTI form the execution axes of this vision. But open questions remain.

- •How well do simulation-based quality certification results correlate with actual model training performance? How can the reality gap be narrowed?
- •What standardization work is needed for blockchain-based quality records to technically integrate with x402 payment flows?
- •What are the minimum requirements that simultaneously satisfy ISO 5259 certification and EU AI Act Article 10 compliance?
- •What policy touchpoints are needed for adoption as a "data pricing standard" in Korea's data voucher program?

> [!callout]
> Data value proof is not a single technology but the integration of diagnosis, augmentation, and certification. The moment when this integration aligns simultaneously with regulation (EU AI Act), market (cloud marketplaces), and future infrastructure (agent economy) is now. Pebblous's challenge is to convert its technical moat at this intersection into an industry standard.

## Frequently Asked Questions

Key questions and answers on data value proof, blockchain, and the agent economy.

## References

### Papers & Academic Sources

1. Ghorbani & Zou, "Data Shapley: Equitable Valuation of Data for Machine Learning," ICML 2019. arXiv:1904.02868
2. Zhang et al., "A Survey on Data Markets," 2024. arXiv:2411.07267
3. Zhang et al., "A Survey of Data Pricing for Data Marketplaces," 2023. arXiv:2303.04810
4. Lin et al., "A Comprehensive Study of Shapley Value in Data Analytics," VLDB 2025. arXiv:2412.01460
5. "Data Valuation for LLM Fine-Tuning: Efficient Shapley Value Approximation," 2025. arXiv:2512.15765
6. "Towards Data Valuation via Asymmetric Data Shapley," 2024. arXiv:2411.00388
7. Bauer et al., "Comprehensive Exploration of Synthetic Data Generation: A Survey," 2024. arXiv:2401.02524
8. "Surveying the Effects of Quality, Diversity, and Complexity in Synthetic Data from LLMs," 2024. arXiv:2412.02980
9. "A Survey on Tabular Data Generation," 2025. arXiv:2503.05954
10. Zhou et al., "A Survey on Data Quality Dimensions and Tools for ML," IEEE AITest 2024. arXiv:2406.19614
11. Sajith & Kathala, "Is Training Data Quality or Quantity More Impactful to SLM Performance?" 2024. arXiv:2411.15821
12. Anjum et al., "Towards Modeling Data Quality and ML Model Performance," 2024. arXiv:2412.05882
13. "Blockchain-Enabled Accountability in Data Supply Chain: A DataBOM Approach," 2024. arXiv:2408.08536
14. Xu, "The Agent Economy: A Blockchain-Based Foundation for Autonomous AI Agents," 2026. arXiv:2602.14219
15. Hadfield & Koh, "An Economy of AI Agents," 2025. arXiv:2509.01063
16. "Agent Exchange: Shaping the Future of AI Agent Economics," 2025. arXiv:2507.03904
17. "Towards Fair and Trustworthy Agent-to-Agent Negotiations," 2025. arXiv:2506.00073
18. "AI Data Governance — Overlaps Between the AI Act and the GDPR," Journal of Internet Law, 2026.

### Industry Reports & Corporate Sources

1. Grand View Research — Data broker market $319.2B, CAGR 9.3%
2. MarketsandMarkets — Data marketplace platform $1.8B / Synthetic data $422M / AI agents $5.1B~$47.1B
3. Gartner — 2026 MQ for Augmented Data Quality Solutions
4. IBM — Poor-quality data U.S. economic loss $3.1T (2016)
5. Visa Onchain Analytics / CEX.IO — Stablecoin transaction volume $27.6T (2024)
6. CB Insights — Zero pure data marketplace unicorns
7. McKinsey — Data marketplace failure rate ~70%, M2M transaction market $150B+ estimate
8. WEF — "Synthetic Data: The New Data Frontier," 2025-09
9. Coinbase — x402 protocol, Agentic Wallets, "Upto" upgrade (2025~2026)
10. Skyfire — KYAPay, Visa Intelligent Commerce integration
11. Stripe — Agent Toolkit, x402 USDC payment integration
12. NVIDIA — Gretel $320M+ acquisition (2025-03)
13. SGS — World's first ISO/IEC 5259-3 certification (2025-11)
14. EU AI Act — Article 10, 11, 99 (effective date 2026-08-02)
15. Korea Data Agency — Data Industry Survey 2024 (KRW 25.3T)
16. AI Times (aitimes.kr) — Pebblous patent 10-2912944 coverage
17. AI Times / Decenter — Parameta-Pebblous MOU, Sooho.io-Pebblous MOU coverage
