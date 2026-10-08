---
title: McDonald
subtitle: A consumer class action in the Northern District of Illinois turns on one question: whose confidential sales data went into the recommendation engine
date: 2026-10-09
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# McDonald

_A consumer class action in the Northern District of Illinois turns on one question: whose confidential sales data went into the recommendation engine_

## Executive Summary

> [!callout]
> This article reads three documents that appeared within three days of each other in late September 2026. On September 29 Reuters published an investigation of McDonald's price recommendation engine. On October 1 McDonald's posted a rebuttal headed "AI Does Not Set Prices at McDonald's." On October 2 a consumer class action was filed in the Northern District of Illinois. All three describe the same machine, and they describe it differently.

> Lay them on top of each other and the dispute sits on data movement rather than on agreement. Quoting the franchise disclosure document, the complaint says the parent company requires franchisees to run its point-of-sale system, receives the transaction-level records on its own servers, and bars franchisees from disclosing that data to anyone else without approval. Tying those clauses together, the complaint concludes that the parent is the only channel through which one franchisee's data can reach a rival's price. McDonald's answers that the tool offers recommendations rather than prices, and that people make the final call.

> That much is what the three documents say. What follows is not in the documents: this article reads them as conditions on a data pipeline. The question of how much of someone else's numbers may go into a model already has an answer written in figures, and the current answer is the third draft of it. A safety zone issued jointly by the U.S. antitrust agencies in 1996 put the age of exchanged data at three months; in 2023 both agencies withdrew that safety zone, citing advances in machine learning; a 2025 consent decree in a rental-housing case rewrote the number as twelve months. This article does not rule on whether the engine pushed prices up or down. It looks at what went into the model.

<!-- stat-card -->
**3 months → 12 months** — How long a rival's confidential data must sit before a model may use it — The 1996 DOJ–FTC joint safety zone and the 2025 RealPage consent decree. A withdrawal sits between them

<!-- stat-card -->
**95%** — Share of U.S. McDonald's restaurants owned and run by separate legal entities — 13,706 U.S. restaurants per the FY2025 10-K. Horizontal collusion requires competitors

<!-- stat-card -->
**+28%** — Margin increase in markets where both rivals adopted algorithmic pricing — German gasoline retail evidence. Markets with a single adopter showed no significant change (Assad et al., JPE 2024)

<!-- stat-card -->
**~90%** — Alleged rate at which hotels followed the algorithm's recommendations — Cornish-Adebiyi. The power to reject or override did not justify dismissal

## Three Documents in Three Days

On September 29, 2026, Reuters published "Inside McDonald's push to have AI price your Big Mac." The piece states its methods in the text: reporters reviewed August screenshots of the pricing engine as franchisees see it, and interviewed nine people with direct knowledge of the strategy. Its central claim is that McDonald's uses machine learning to continuously analyze millions of daily transactions across more than 14,000 U.S. restaurants and produce, per restaurant and per item, what the company calls an optimal price. The screens carry messages such as "Your restaurant is showing MEDIUM SENSITIVITY to Price."

Two days later, on October 1, McDonald's posted a document titled "Separating Fact from Fiction: AI Does Not Set Prices at McDonald's." It pairs rumor with fact across six FICTION/FACT entries, and it closes on one sentence.

"AI does not set McDonald's menu prices. People do."
                        Source: McDonald's, "Separating Fact from Fiction," 2026-10-01.

The next day, October 2, a consumer class action was filed in the Northern District of Illinois. It is **Thomas v. McDonald's USA, LLC**, No. 1:26-cv-12149, and it names two defendants, McDonald's USA and McDonald's Corporation. The body runs to 132 numbered paragraphs and pleads four counts: two under Section 1 of the Sherman Act (price fixing and information exchange), one under the Illinois Antitrust Act, and one under the Illinois Consumer Fraud and Deceptive Business Practices Act. The plaintiff demands a jury trial.

![The federal courthouse in Chicago where the consumer class action was filed in the Northern District of Illinois](./image/img-01-courthouse.jpg)
*▲ The federal building in Chicago housing the Northern District of Illinois, where the complaint was filed | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Dirksen_United_States_Courthouse,_Chicago_Loop,_Chicago,_Illinois_(11004376983).jpg)*

The scale is worth putting down first. Per the FY2025 annual report McDonald's filed with the SEC, there are 13,706 U.S. restaurants, and 95% of them are owned and operated by separate legal entities rather than by the parent. That is how many recipients one engine sends recommendations to. Because horizontal collusion is something that happens only among competitors, that 95% is the starting condition of the suit.

The order of the three documents matters. The complaint takes its factual skeleton from the Reuters piece, and it says so. Paragraph 79 states that McDonald's use of the tool in pricing was "not widely known until Reuters published an article describing it on September 29, 2026." Paragraphs 49, 55, 57, 58, 59, 62 and 64 all cite the Reuters reporting by footnote. The starting point of this case, in other words, is not the complaint but a story filed three days earlier. That is why this article keeps the complaint, the Reuters piece and the rebuttal open side by side rather than working from secondary coverage.

The timeline below traces what led up to those three documents. Everything from the 2019 acquisition through the January 2026 change in standards is background; the ten days marked in bold are the stretch this article reads.
