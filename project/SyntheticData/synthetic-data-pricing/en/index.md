---
title: Take Apart a Synthetic-Data Price Tag and You
subtitle: Comparing MOSTLY AI, Gretel, and Tonic, pricing split into three layers — and in the end the data type set the price
date: November 7, 2025
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Take Apart a Synthetic-Data Price Tag and You

_Comparing MOSTLY AI, Gretel, and Tonic, pricing split into three layers — and in the end the data type set the price_

## Executive Summary

<!-- stat-card -->
**The Illusion of "Data Points" and the Reality of "Value Services"** — Pricing in the global synthetic data market has rapidly converged away from the initial simplistic metric of "cost per data point" toward a highly sophisticated **'Three-Part Tariff'** structure. This report demonstrates that this Three-Part Tariff model serves as a universal framework explaining the revenue models of existing enterprise-grade synthetic data vendors.

### Three-Part Tariff Model

<!-- stat-card -->
**1** — A three-layer structure of Platform Floor + Variable Meter + Value-Add Services has been established as the industry standard

### Modality Determines Price

<!-- stat-card -->
**2** — The composition ratio of the Three-Part Tariff fundamentally varies based on the characteristics of tabular/text/image data

### Solution-Centric Sales

<!-- stat-card -->
**3** — Enterprise customers purchase 'problem-solving solutions' and 'infrastructure access,' not 'data'

## The Three Layers Hidden in a Synthetic-Data Price Tag

The most common error when analyzing synthetic data pricing is mistaking simple "cost per data point" as the market standard. Actual enterprise-level project quotes far exceed platform usage fees, and this is explained by a **Three-Part Tariff structure** combining three elements.

### Layer 1 · Platform Floor — the fixed cost of opening the door

#### Tabular Data (Low-Mid Tier)

- • **Tonic.ai:** $199/mo
- • **Gretel.ai:** $295/mo
- • **Hazy:** $500/mo

#### Enterprise Tier

- • **MOSTLY AI:** $3,000/mo
- • **Synthesis AI:** $3,000/mo
- • **Rendered.ai (Teams):** $5,000/mo
- • **Rendered.ai (Organizations):** $15,000/mo

<!-- stat-card -->
**The 'Platform Floor' is the minimum fixed cost (MRC or ARC) that customers must pay to maintain vendor software licenses, basic support, and security/compliance (e.g., SOC 2, HIPAA). This is a 'base fee' incurred regardless of usage ($0).** — From $199 for tabular data to $15,000 for computer vision, the 'Platform Floor' cost shows **approximately 75x variation** depending on modality. This difference directly reflects the initial capital investment (CapEx) and infrastructure maintenance costs required to generate each modality.

### Layer 2 · Usage Metering — it comes down to what gets counted

#### Compute-Based

#### Data Volume-Based

#### Source Volume-Based

#### Token/Word-Based

#### Image Count-Based

<!-- stat-card -->
**The 'Variable Meter' is the pay-as-you-go cost based on actual usage. What a vendor measures is the most critical indicator revealing their business model and cost structure.** — **** — **** — **** — **** — ****

### Layer 3 · Value-Add — not an ‘option’ but effectively a must

<!-- stat-card -->
********

## Data Type Sets the Price ① Tabular & Time-Series

****

### Table 1 · Tabular & Time-Series Vendor Pricing

| Vendor | Core Product | Platform Floor | Variable Meter | BMS Project Cost Impact |
| --- | --- | --- | --- | --- |
| MOSTLY AI | Platform (VPC) | $3,000/mo | vCPU/vGPU hours (credits) | More complex physics constraint models directly increase 'Variable Meter' costs (credits) |
| YData (SDK) | SDK (API) | $0 (PAYG) | $1 / 1M data points | 'Variable Meter' cost is fixed at $172.80. 'Professional Services' ($18k) charged separately |
| YData (Fabric) | Platform (VPC) | Undisclosed (Enterprise) | AWS infra costs (CPU/GPU) | Platform license + AWS costs + Professional Services. Most complex TCO |
| Gretel.ai | Platform (SaaS) | $295/mo | $2.20/credit (runtime/token) | Similar to MOSTLY AI, complex tasks (runtime) consume more 'Variable Meter' costs |
| Tonic (Structural) | Platform (SaaS) | $199/mo | Source DB size (e.g., 2TB) | Charges based on 5-day original data size. 4x augmentation (output) is cost-irrelevant |

********

#### Strategic Implications

<!-- stat-card -->
********

## Data Type Sets the Price ② Text & Language

****

### Table 2 · Text Vendor Pricing

| Use Case | Key Vendor | Pricing Unit (Meter) | Cost Determinant |
| --- | --- | --- | --- |
| Anonymization / Masking | Tonic Textual | Processed word count | Total volume of original documents to protect |
| LLM Training Data(Specialized Models) | Gretel.ai | Generated token count or job runtime | Volume of data to generate + privacy (DP) application |
| LLM Training Data(SOTA Utilization) | AWS Bedrock | Teacher model input/output tokens | API pricing of the chosen teacher model (e.g., Claude 3) |

****

#### Paradigm Shift: Teacher Model Cost Linkage

<!-- stat-card -->
******** — ****

## Data Type Sets the Price ③ Image & Vision

****

### Rendered.ai

<!-- stat-card -->
**Organizations: $15,000/mo** — Variable Meter — Max instances, storage (GB), number of users — Professional Services — TAM (Technical Account Manager) included in Organizations plan

### Synthesis AI

<!-- stat-card -->
**Platform Subscription** — Annual subscription: from $3,000/mo — Custom Projects — Minimum $10,000 one-time cost — Model — Clear separation of PaaS subscription and DaaS projects

#### Key Insight: 1 Image = 10 Text Rows

<!-- stat-card -->
**Datagen.in's credit model (30,000 credits = 30,000 text rows or 3,000 images) is quantitative evidence that the vendor itself acknowledges CV data generation has **10x the value or cost** compared to tabular data generation.** — The reason the CV market's 'Platform Floor' ($3,000 - $15,000) is overwhelmingly higher than tabular/text ($0 - $500) is clear. The CV market does not sell data; it sells access to highly specialized **3D simulation software and infrastructure**.

## How You Receive It: API, Subscription, On-Premise

Synthetic data pricing is heavily influenced not only by 'what' you buy (modality) but also by 'how' it is delivered (delivery model).

### API-Based (Public SaaS)

<!-- stat-card -->
**Pricing Model** — Pure PAYG. Per token, API call, or record — Advantages — $0 initial cost, instant use — Disadvantages — Data leak risk - sensitive source data sent to vendor

### Platform Subscription (VPC)

<!-- stat-card -->
**Pricing Model** — Platform Floor + Variable Meter + cloud infrastructure costs (double billing) — Advantages — Maximum data security - source data never leaves the VPC — Disadvantages — Dual cost structure (license fee + infrastructure fee)

### On-Premise

<!-- stat-card -->
**Pricing Model** — Expensive annual license (typically $80,000 - $200,000/year) — Advantages — Highest security level, complete operational control — Disadvantages — Highest initial cost, self-maintained infrastructure burden

### Project-Based (Managed Service)

<!-- stat-card -->
**Pricing Model** — One-time project cost (NRE) — Advantages — Fixed cost, no platform learning curve, deliverable guaranteed — Disadvantages — Limited scalability (new contract needed per dataset)

### Table 3 · TCO & Security by Delivery Model

| Delivery Model | Cost Structure | Security Level | Data Portability | BMS Project Strategy |
| --- | --- | --- | --- | --- |
| API (Public SaaS) | PAYG (low initial cost) | Low (external data transfer) | High | For simple demos or non-sensitive data augmentation |
| VPC (Marketplace) | $3K+ MRC + infra costs (double billing) | High (processed within VPC) | None | When BMS source data security is critical (must explain 'double billing' to clients) |
| On-Premise (License) | $80K+ ARC (high initial cost) | Highest (Air-gapped) | None | For finance/defense clients requiring maximum security |
| Project (Managed) | $10K+ NRE (fixed cost) | High (vendor/partner handles) | Low (deliverables only) | Current PoC model. Most efficient for removing platform adoption barriers |

****

## Wrapping Up — What to Choose, and Why

### Validation of Internal Analysis

<!-- stat-card -->
**The three-part pricing model of (Platform Floor) + (Usage) + (Professional Services) established for BMS time-series data augmentation PoC has been **validated as the standard model** in the global synthetic data market, particularly in the high-value enterprise segment.** — Furthermore, the estimated PoC cost range of $10,000 - $40,000 and annual enterprise license cost of $80,000 - $200,000 are **highly realistic and aligned with market standards**.

### Core Conclusion: Data Type Determines the Price Structure

#### Tabular/Time-Series (BMS)

#### Text (LLM)

#### Image/Vision (CV)

<!-- stat-card -->
**Customers buy 'solutions,' not 'data'** — What enterprise customers actually purchase is not simply '1TB of data' or '1 million records.' For tabular data, it is **domain expertise**; for text data, it is **SOTA LLM access**; for image data, it is **3D simulation infrastructure**. This is why 'cost per data point' cannot explain actual market pricing. — Variable Meter: $172 (negligible) — 99% of cost is Professional Services ($18,000) — -> Domain constraints (Physics/Rules) are the core value — Variable Meter is a significant portion of cost — Directly linked to teacher LLM inference cost — -> Based on API token costs — Platform Floor: $5,000 - $15,000 — Majority of cost is Platform Floor — -> 3D simulation infrastructure + TAM costs

### Pricing Breakdown: Comparison by Modality

<!-- stat-card -->
**The chart below visualizes the proportion of the Three-Part Tariff components (Platform Floor, Variable Meter, Value-Add) in the total cost for each data modality. You can see that cost structures fundamentally differ based on modality characteristics.** — **Platform Floor:** Minimum commitment — **Variable Meter:** Usage-based — **Value-Add:** Professional services

### Strategic Recommendations

#### Strategic Selection of 'Variable Meter'

#### Strengthen 'Professional Services' Packaging

#### Customer Segmentation via 'Delivery Model'

<!-- stat-card -->
********

### Reference: Pebblous DataClinic Pricing

#### Free

- Free public dataset diagnostics
- Basic quality report
- Community support

#### Basic

- 10,000 images/mo diagnostics
- Detailed quality report
- Email support

#### Pro

- 20,000 images/mo diagnostics
- Custom data upload support
- Custom quality criteria
- Priority tech support

#### Enterprise

- 200,000 images/mo diagnostics
- Data quality improvement services
- Dedicated TAM
- SLA guarantee & custom solutions

<!-- stat-card -->
**(removing unnecessary data),
                    and Data Bulk-up (augmenting insufficient data with synthetic data),
                    we offer various data improvement options tailored to customer needs.** — $0 — /mo — Public dataset quality diagnosis — ~$8 — /mo — 10,000 images/mo diagnostic credits — ~$400 — /mo — 20,000 images/mo, custom data support — ~$4,000 — /mo — 200,000 images/mo, data improvement services — [View DataClinic Pricing Details](https://dataclinic.ai/ko/data-clinic/price)

### Original PDF Report

<!-- stat-card -->
**Download or view the full content of this report in PDF format for offline reading.** — [Download PDF](/project/SyntheticData/source/%ED%95%A9%EC%84%B1%20%EB%8D%B0%EC%9D%B4%ED%84%B0%20%EB%B2%A4%EB%8D%94%20%EA%B0%80%EA%B2%A9%20%EC%A0%95%EC%B1%85%20%EB%B6%84%EC%84%9D.pdf)

## References

1. [1] Amazon Bedrock pricing. [https://aws.amazon.com/bedrock/pricing/](https://aws.amazon.com/bedrock/pricing/)
2. [2] Solutions Pricing for AI Synthetic Data Generation Needs. [https://rendered.ai/pricing/](https://rendered.ai/pricing/)
3. [3] Human Faces Synthetic Dataset - AWS Marketplace. [https://aws.amazon.com/marketplace/pp/prodview-hkxlb5jtkrics](https://aws.amazon.com/marketplace/pp/prodview-hkxlb5jtkrics)
4. [4] YData data quality for Data Science | Synthetic data Data-Centric AI. [https://ydata.ai/](https://ydata.ai/)
5. [5] Pricing - Tonic.ai. [https://www.tonic.ai/pricing](https://www.tonic.ai/pricing)
6. [6] Pay-As-You-Go Cloud Solution from Tonic. [https://www.tonic.ai/blog/](https://www.tonic.ai/blog/tonic-now-offers-a-pay-as-you-go-cloud-based-solution)
7. [7] Gretel.ai Reviews 2025: Pricing & Features. [https://tekpon.com/software/gretel-ai/reviews/](https://tekpon.com/software/gretel-ai/reviews/)
8. [8] Gretel.ai | BrXnd.ai Landscape. [https://landscape.brxnd.ai/companies/gretelai](https://landscape.brxnd.ai/companies/gretelai)
9. [9] Hazy: Set your data free with synthetic data solutions. [https://dynamicbusiness.com/ai-tools/](https://dynamicbusiness.com/ai-tools/hazy-set-your-data-free-with-synthetic-data-solutions.html)
10. [10] Pricing - MOSTLY AI. [https://mostly.ai/pricing](https://mostly.ai/pricing)
11. [11] AWS Marketplace: MOSTLY AI Data Intelligence Platform. [https://aws.amazon.com/marketplace/pp/prodview-clqfgzfzznfoc](https://aws.amazon.com/marketplace/pp/prodview-clqfgzfzznfoc)
12. [12] synthetic data platform as a service (paas) - Rendered.ai. [https://rendered.ai/platform/](https://rendered.ai/platform/)
13. [13] Usage and credits - Docs - Mostly AI. [https://docs.mostly.ai/usage](https://docs.mostly.ai/usage)
14. [14] What's new in MOSTLY AI. [https://mostly.ai/docs/whats-new](https://mostly.ai/docs/whats-new)
15. [15] Gretel.ai Pricing 2025. [https://www.g2.com/products/gretel-ai/pricing](https://www.g2.com/products/gretel-ai/pricing)
16. [16] DataGen - AI Synthetic Data Solutions. [https://datagen.in/](https://datagen.in/)
17. [17] Billing and Usage | Gretel.ai. [https://docs.gretel.ai/](https://docs.gretel.ai/operate-and-manage-gretel/enterprise-support/billing-and-usage)
18. [18] What Is Synthetic Data? - Salesforce. [https://www.salesforce.com/data/synthetic-data/](https://www.salesforce.com/data/synthetic-data/)
19. [19] What is the ROI of synthetic data? - Syntho. [https://www.syntho.ai/](https://www.syntho.ai/what-is-the-roi-of-synthetic-data/)
20. [20] Synthetic data tools: Open source or commercial? - Medium. [https://medium.com/statice/](https://medium.com/statice/synthetic-data-tools-open-source-or-commercial-a-guide-to-building-vs-buying-580ddeee30e8)
