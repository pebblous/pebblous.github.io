---
title: Can Computing Power Be Traded Like Electricity?
subtitle: Liquid Compute emerges with a $15M seed and pending CFTC exchange and clearing applications — two compute futures list on NYMEX on October 5
date: 2026-09-17
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Can Computing Power Be Traded Like Electricity?

_Liquid Compute emerges with a $15M seed and pending CFTC exchange and clearing applications — two compute futures list on NYMEX on October 5_

## Executive Summary

> [!callout]
> This article looks at how the compute that runs AI is turning into something people buy and sell. On September 15, Liquid Compute of New York came out of stealth with a $15 million seed round co-led by FirstMark and Chemistry. The company plans to build a market where capacity actually changes hands, then place a cash-settled financial market above it, and it has applications pending before the US Commodity Futures Trading Commission for both exchange status and clearinghouse status so that it can list and clear that financial market itself.

> Three companies have moved into this market. Silicon Data announced a $30.5 million initial closing of its Series A on August 11, and two compute futures that settle against its indexes are due to list on NYMEX on October 5. Ornn announced GPU compute futures with Intercontinental Exchange on May 19 and raised a $33 million seed in June. All three run into the same wall: one hour of compute is not another hour of compute. Silicon Data says as much in its own announcement: identical chips, wired together differently, end up delivering different performance.

> Sections 1 through 4 follow what the three companies, the exchanges, the in-house research notes, and two earlier analyses of this market have written down. The claim that a specification has to come before a futures market belongs to the people building the venue, who put it in their own launch post. Carrying that material over to the question of data quality grading, in section 5, is this article's own reading.

### Key Figures

Sources: [Liquid Compute announcement (2026-09-15)](https://www.businesswire.com/news/home/20260915989921/en/) · [Silicon Data announcement (2026-08-11)](https://www.businesswire.com/news/home/20260811404419/en/)

<!-- stat-card -->
**$15M** — Liquid Compute seed — The price on a plan to build a physical market and a regulated financial market above it. It entered Y Combinator's Winter 2025 batch under the name Pluto

<!-- stat-card -->
**2 contracts** — Listing on October 5 — One tracks the Nvidia H100 rental index, the other the B200, and a single contract equals a month's rent for that GPU. The date is subject to regulatory review

<!-- stat-card -->
**9 indexes** — Silicon Data's financial-grade family — The company started with a $4.7 million seed in March 2025 and by its own account spent two years building price and performance history before a futures market existed

<!-- stat-card -->
**0 delivered** — Physically settled contracts with a listing date — Both October 5 contracts settle in cash. Liquid Compute aims at a venue that handles cash and physical settlement together, and its applications are still pending

## What Happened on September 15

Liquid Compute opened its doors with a $15 million seed round. FirstMark and Chemistry co-led it, with K8 Capital, Night Capital, TrueBridge, Brainchild Holdings, UFO Holdings and Y Combinator taking part, and Dmitry Balyasny joining as an angel. The founders are Ronit Jain and Aarav Patel, who met as engineering students at the University of California, Berkeley. The company was called Pluto before this, and went through Y Combinator's Winter 2025 batch.

The part of the announcement worth reading twice is not the round but the regulatory filing. The company has two applications pending before the Commodity Futures Trading Commission. One is for status as a Designated Contract Market, the other as a Derivatives Clearing Organization. The first is exchange status, which allows a venue to list contracts such as futures and let them trade. The second is clearinghouse status, which puts an institution on the other side of every trade so that the contract still performs when one party cannot pay. Filing for both at once means the company intends to open the venue and settle the trades itself rather than borrow someone else's exchange. A footnote on the company site names PMEX Markets as the filing entity. Liquid Compute is also hiring across compliance and market operations to carry the applications through.

The design has two layers. The lower layer is a physical market that matches buyers and sellers of capacity scattered across locations, hardware and time periods. The upper layer is a financial market that references the prices formed below. The body of the press release describes that upper layer only as cash-settled, and the About paragraph does the same. Jain's own launch post, published the same day, draws the line wider: the plan there is the first regulated exchange to trade both cash and physically settled contracts on AI infrastructure, and the company site and the Y Combinator profile carry that same sentence. Cash settlement means that at expiry nobody hands over a GPU, and the two sides exchange the difference between the reference price and the contract price instead. A buyer of compute sheds the risk of prices rising and a seller sheds the risk of prices falling, through that difference. None of it happens without approval, and the release closes with a line stating that regulatory outcomes are not guaranteed.

![Data center aisle lined with GPU server racks and networking equipment](./image/img-01-datacenter-racks.jpg)
*▲ The "compute capacity" Liquid Compute wants to trade is, in the end, scattered across racks like these | Source: [Carl Lender, Wikimedia Commons (CC BY 2.0)](https://commons.wikimedia.org/wiki/File:Datacenter_Server_Racks_(22370909788).jpg)*

The financial counterparties are in place already. Liquid Compute has signed trading and data licensing partnerships with Susquehanna Predictions, BGC Group and Wintermute. Arran Rowsell, Head of Strategy at BGC Group, said in the release that the data partnership supports the firm's buildout of an over-the-counter market for compute. Prices, in other words, started changing hands off-exchange before the exchange exists. Ronit Jain put the company's ambition this way.

“Our goal is to be the regulated financial infrastructure for a new asset class, similar to what NYMEX was to oil, CBOE was to volatility, and Kalshi was to event contracts.”

Do for compute what NYMEX did for crude, CBOE for volatility, and Kalshi for event contracts. The phrase carrying the weight is new asset class. Until now compute has sat inside cloud providers, GPU operators, data centers and private contracts, with no widely quoted reference price and no mature derivatives market above it. Jain's launch post runs a similar list with one name changed, putting ICE in the energy slot, and explains the choice: all of them arrived late, and all of them ended up capturing most of the financial value created as their asset classes were commoditized, because they secured regulatory status while digging deep into the physical particulars of their own markets.

## Why a Grid and Not a Barrel

The premise the two founders arrived at appears in the release like this: compute should be organized more like a power grid than a conventional commodity market such as oil. Three reasons follow. Capacity is heterogeneous, it is location-dependent, and it is perishable. The first two are easy enough to picture and the third decides everything. A GPU hour nobody used this afternoon is not a good you shelve and sell tomorrow. It evaporates. So the central problem of this market is not inventory management but matching supply and demand across time, geography and infrastructure.

![High-voltage transmission towers and power lines against the sky](./image/img-02-power-transmission-lines.jpg)
*▲ The founders reach for this, not a barrel of oil, when they explain what compute should look like | Source: [Varistor60, Wikimedia Commons (CC BY-SA 4.0)](https://commons.wikimedia.org/wiki/File:500kV_3-Phase_Transmission_Lines.png)*

That premise sets the order of construction. Mark Goldberg, Managing Partner at Chemistry, reached for the oil-versus-power contrast when explaining the investment.

“Most people building in this space are treating compute as a fungible commodity like oil, and most of the infrastructure being built reflects that. Liquid Compute started from a different premise. They are building the physical market first, then the regulated financial layer on top of it, closer to how power markets actually work.”

Treat compute as an oil-like good that swaps one barrel for another, and the fast route is to publish an index and hang futures off it. Treat it as electricity and the order inverts. Build the floor where real capacity changes hands, let prices form there, then put the financial layer on top of those prices. That is why Liquid Compute is building the physical market first.

Which analogy wins is not settled. At CME Group, which lists the October contracts, the executive who owns this product is Pete Keavey, Global Head of Energy and Environmental Products, and the words left in that announcement point at oil: just as crude fueled the twentieth-century economy and grew from spot trading into a global derivatives market, compute will now become a standardized, tradable commodity. The launch post Liquid Compute published takes the other side, and the phrase pinned into its own URL reads: compute is a grid, not a barrel. The exchange filed compute next to energy products, and the company trying to build a new venue says that within energy the right comparison is electricity rather than oil.

A research note the company published in August tightens the analogy one more turn. Compute borrows a property each from power, from oil, and from single-name corporate credit, and belongs to none of them. The note rests on two grounds. The first is that you cannot buy a cheap hour today, warehouse it, and deliver it next year, so no cash-and-carry arbitrage ties the forward price to the spot price. The curve is expectation plus risk premium, with no anchor underneath. The second is that value does not erode smoothly but jumps on the dates when new chips ship. Underneath those jumps sits residual value, which the note calls the number everyone prices and nobody can verify until the event.

The power-grid analogy turns up outside the company too. An analysis Otto Salmi wrote in November 2025 sets the commoditization of compute against three precedents: oil, power, and spectrum. Oil defined deliverable grades, Brent and WTI and Dubai, and let basis differentials handle everything else. In power, regional grid operators such as PJM, ERCOT and CAISO built spot markets, forward curves and ancillary service auctions, and the key innovation was expressive bidding, which let participants state complex preferences as they actually held them. In spectrum, Paul Milgrom's combinatorial auctions let bidders bid on bundles of band, region and license type, which made a complicated reallocation possible. The third precedent is not only an analogy either. Salmi reports that Milgrom is now working with OneChronos to build a tradeable financial market for compute, which the two of them call the world's largest unhedged asset.

> [!callout]
> The three precedents say one thing together. Goods do not have to be identical to trade. They need a specification precise enough to write down how they differ, and once that exists the difference moves into the spread and the trade clears. Salmi points out that electricity cannot be stored at scale and must be consumed instantly, which makes it even less fungible than compute. Power markets run anyway.

## Who Opens the Venue, Who Measures the Price

Three companies moved in the same quarter, which does not mean the three are building the same thing. The split runs between building the exchange itself and supplying the settlement price to an exchange that already exists. Liquid Compute sits on the first side, Silicon Data and Ornn on the second.

| Company | This round | What it builds | Where contracts list |
| --- | --- | --- | --- |
| Liquid Compute | $15M seedco-led by FirstMark and Chemistry | Physical matching market plus a cash-settled market above it | Its own exchange and clearinghouseCFTC applications pending |
| Silicon Data | $30.5M initial closing of Series Aled by the Valor Atreides AI Fund | Price indexes and performance benchmarks | NYMEX, under CME Group ruleslisting October 5 |
| Ornn | $33M seedco-led by Galaxy Ventures and a16z crypto | Compute marketplace and the OCPI price index | Intercontinental Exchangesubject to regulatory approval |

Each row follows that company's own announcement and the exchange notices. The Silicon Data round also drew in CME Ventures, DRW, F-Prime, Samsung Next, VanEck, Jump and Wintermute among others. Ornn's round was co-led by Galaxy Ventures and a16z's crypto fund.

The shape of the October contracts is already public. There are two of them, Silicon Data H100 Rental Index Futures and Silicon Data B200 Rental Index Futures, and both settle against indexes that track hourly on-demand rental rates at neoclouds rather than at hyperscalers. One contract equals a month's rent for that GPU, and the contracts are listed on NYMEX under CME Group rules. Carmen Li, Chief Executive Officer of Silicon Data, whose company publishes the indexes, described what the product changes.

“For years, two companies buying the exact same GPU capacity could pay wildly different prices with no way to know who got the better deal. They will now have a benchmark to check that against. … Silicon Data’s benchmarks make that price real; CME makes it tradable.”

Two buyers of identical GPU capacity paid very different prices and had no way to learn who bought well. Having something to check against is the use of this product, and in the Series A announcement Carmen Li compared that reference to the independent referees mature markets develop, the benchmarks that tell participants what something is worth, whether it performs as promised, and how risk should be measured. The same announcement also carries a line calling the infrastructure for measuring and managing compute remarkably immature.

![Exterior of the New York Mercantile Exchange (NYMEX) building](./image/img-03-nymex-building.jpg)
*▲ The New York Mercantile Exchange (NYMEX), where Silicon Data's two compute futures list on October 5 | Source: [Kidfly182, Wikimedia Commons (CC BY-SA 4.0)](https://commons.wikimedia.org/wiki/File:New_York_Mercantile_Exchange_004.jpg)*

So the real divergence is not between exchanges but between indexes. The three build their prices in different ways. Ornn's OCPI is described in the ICE announcement as the first compute index built only from printed transactions, it is distributed on the Bloomberg Terminal, and it covers the H100, H200, B200 and RTX 5090. Silicon Data gathers rental records and private transactions across neoclouds, hyperscalers, colocation markets and private rental platforms, adjusts them onto a common basis, and publishes once per business day. Liquid Compute already licenses an index of its own to institutional counterparties, drawn from its internal quote log and public sources, and at the foot of its research note the company attaches its own caveat: those figures are not audited and reflect small sample sizes. All three carry the words compute price index in their names, and each counts something different.

The gap shows up in the numbers too. Silicon Data publishes its H100 index in two segments, neocloud and hyperscaler, and as of September 17, 2026 the first reads $2.66 an hour and the second $7.18. Same chip name, roughly 2.7 times apart. The October contracts follow the first of those, the neocloud index. A company that buys its compute from a hyperscaler and hedges with these contracts is therefore holding on to a curve that differs from the rate it pays.

## What Goes on the Grade Sheet

The phrase GPU hour is convenient, which is why it gets used so often, but those hours are not interchangeable goods. A primer on compute derivatives that Dave Friedman wrote in June lists what actually moves the price: region, interconnect, uptime, interruptibility, storage, CPU, RAM, security, and cluster scale, each of them changing the real economic value. An index has to normalize those attributes, and normalizing is a decision about what counts as the same thing.

A specification sheet still leaves something out. Silicon Data said part of its Series A goes to SiliconMark, which independently benchmarks how physical GPU infrastructure actually performs. The reason the company gives points straight at the issue: two clusters built on identical chips can deliver meaningfully different real-world output depending on networking, topology, and configuration. The chip name in the catalog matches while the result in your hands does not. Normalizing across GPU performance lets market participants hedge that output risk, the company adds, and paves the way for physical delivery of compute later on.

Salmi left a one-line example of what a grade sheet for compute might look like: an A-class FP8 GPU-hour, at least 80GB of HBM3 memory, at least 400 Gbps of intra-node interconnect, the US-East-1 zone, 99 percent uptime. Add the interruptibility that Friedman lists and there are six boxes. Where Salmi placed that line matters as much as the line. The piece sorts the possible futures of this market into three, and the tight specification belongs to the third and most distant one, with a caveat attached: it needs deep liquidity and regulatory clarity, which makes it a decade-plus vision. The minimum Salmi names for right now is smaller. Chip class, region, and uptime tier, three of them.

One box missing from that list moves the price more than any other. It opens the research note Stanley Lee, Chief Product Officer at Liquid Compute, published in August: the same GPU rents at three different prices today, depending on how long you commit. The illustrative levels the company gives are $9.00 an hour on demand, $5.75 for a reservation of three to twelve months, and $3.85 for a multi-year term. Same chip, same week, and the range is more than double. Rental type is also the first of the four attributes Silicon Data adjusts for when it builds its index. The grade sheet has seven boxes rather than six, and the seventh happens to be the largest.
