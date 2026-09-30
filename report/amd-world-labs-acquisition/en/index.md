---
title: AMD Buys World Labs, and the Robot Scorecard Lives Inside a Chart
subtitle: AMD is acquiring World Labs for $8.2 billion in stock. The robot success rates sit only on a blog chart
date: 2026-10-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# AMD Buys World Labs, and the Robot Scorecard Lives Inside a Chart

_AMD is acquiring World Labs for $8.2 billion in stock. The robot success rates sit only on a blog chart_

## Executive Summary

> [!callout]
> This article reads the part of AMD's $8.2 billion acquisition of World Labs, announced on September 28, 2026, that the press walked past. Most coverage filed the deal as a chip company hiring a star AI researcher. Read the AMD press release to the end, though, and the list of assets being acquired closes with "technology for robotic learning and simulation." Follow World Labs' own writing and you find where that technology came from. A company called SceniX, which World Labs bought two months earlier.

> What that engine produced went public in July, in a single blog post. Policies learned entirely in simulation, with no real-world training data, transferred directly to five kinds of physical robot. Not one success rate appears in the prose. Open the figure and the situation changes. The axes carry success-rate ticks, the legend names the two policies under evaluation as models built by NVIDIA and Physical Intelligence, and the horizontal axis is labeled post-training iterations. The chart says what the text does not.

> In the same post World Labs rewrote the standard for quality. A simulation worth using does not have to match the real success rate; it has to lead you to the same decision you would reach in reality. That is a reasonable relaxation. The trouble comes next. A metric that scores exactly this proposition has existed since 2024, and the lab that built it is the one Fei-Fei Li came from. World Labs did not use it, and did not release the tooling that would let anyone else measure the same way. When the party that builds the generator also holds the yardstick, the seat left empty is the independent measurer's.

±5.9 pp

Error left by 100 real trials

Half-width of the 95% confidence interval near a success rate of 0.9. World Labs ran 100 real trials per checkpoint. Pebblous calculation

0

Benchmarks and baselines cited in the robotics post

A full-text search of the source page returns zero hits for benchmark, baseline, rank correlation, and cited literature alike

69 days

From the SceniX deal to the AMD announcement

The gap between July 21, 2026, when World Labs bought the robot simulation company SceniX, and the day AMD announced

20 : 1

Simulated trials per real trial

2,000 simulated against 100 real trials per checkpoint. This holds for the ALOHA cube-handover task, and it counts evaluations, not training data

## The $8.2 billion is not a settled price

The $8.2 billion in the headline is not what AMD will actually pay at closing. No cash changes hands; the consideration is entirely AMD common stock, and the number of shares to be exchanged has not been fixed. The Form 8-K covering the merger agreement AMD signed on September 26, 2026 says so in the company's own words.

"the number of shares to be issued … **is not known**"

AMD, Form 8-K (amd-20260926), signed September 26, 2026 · The same document states that the share count will be set from the volume-weighted average price over the ten trading days ending two trading days before closing.

The announcement landed at 4:05 p.m. Eastern on September 28, after the regular session had closed. Closing is scheduled for the end of 2026, subject to regulatory approval and the usual conditions. Until then AMD will run World Labs separately from its semiconductor business, CNBC reported. The legal entity is World Labs Technologies, Inc., headquartered in San Francisco.

Which item the 8-K was filed under is worth reading too. There is exactly one: Item 3.02, unregistered sales of equity securities. Not Item 1.01, which reports entry into a material agreement, and the exhibit list carries no merger agreement. So the break fee, the regulatory-approval covenants, the retention terms, the treatment of existing investors' stakes are simply absent from the public record. The issuance is not a public offering either. The same filing cites Section 4(a)(2) of the Securities Act of 1933 and Rule 506 of Regulation D. Half the reason this article will keep saying "not disclosed" sits right here. The document that would carry those terms was never filed, so there is nothing to read. Even the figure the 8-K gives is "approximately $8.2 billion…subject to customary adjustments," which hangs an adjustment clause on the total itself.

### 1.1. What the Xilinx precedent shows about the spread

How far apart the announced price and the closing price can drift in an all-stock deal is answered by AMD's own history. The Xilinx acquisition was announced on October 27, 2020 at roughly $35 billion and closed on February 14, 2022. The accounting purchase consideration at closing was $48.8 billion, the figure recorded in the FY2022 Form 10-K. That is 39.4% above the announcement.

Which makes the widely repeated line about AMD's "second-largest deal ever" a comparison with mismatched axes. Articles that put Xilinx at $49 billion are using the closing figure, while World Labs' $8.2 billion is an announcement figure. Compare announcement to announcement and it is $35 billion against $8.2 billion. The ranking does not change, but any sentence that sets the two numbers side by side and derives a multiple is multiplying and dividing values measured at different moments.

Put the two deals in one table and the mismatch shows. The last row of the table below is the least-reported number in this article.

| Item | Xilinx | World Labs |
| --- | --- | --- |
| Announced | 2020-10-27 · about $35B | 2026-09-28 · about $8.2B |
| Form of consideration | All AMD common stock | All AMD common stock |
| Closed | 2022-02-14 | Expected end of 2026 |
| Accounting consideration at closing | $48.8B | Not determined |
| Move from announced price | +39.4 % | Not determined |
| Shares issued | 429 million | Not set · about 13.5M at the 9/28 close |

Table 1. Xilinx values come from AMD's FY2022 Form 10-K and the 2020 announcement; World Labs values come from the September 28, 2026 press release and the Form 8-K. The $48.8 billion for Xilinx is the $48.5 billion fair value of 429 million AMD shares plus $275 million in replacement equity awards, struck at the February 11, 2022 closing price of $113.18. The 13.5 million shares for World Labs is $8.2 billion divided by the September 28 close, so the number actually issued will move with the share price through closing.

Read the first row against the last and a picture emerges that runs against the intuition. By announced price Xilinx is roughly four times World Labs. By share count the gap is thirty-two times. AMD stock was $113 at the Xilinx close and is above $600 now, so the cost of paying the same money in stock fell along with the rise. This comparison carries one caution as well. The 429 million Xilinx shares were actually issued at closing, while the 13.5 million for World Labs is a conversion at the September 28 close. AMD's dilution works out to 0.83%, $8.2 billion over the market capitalization at that close.

Market cap   1,632,000,000 shares × $607.87 = $992B
Dilution     $8.2B ÷ $992B = 0.83 %
Share count  $8.2B ÷ $607.87 = about 13.5M shares
vs. Xilinx   429M shares ÷ 13.5M = about 32×

Shares outstanding come from AMD's Form 10-Q as of June 27, 2026, with no treasury stock. The price is the September 28 close. All three values fix that one closing price, so they differ from the ten-day weighted-average method the 8-K specifies.

### 1.2. The day the stock priced the news was September 29

The most common date error in writing about this deal sits here. AMD stock fell 3.61% on September 28, but the announcement came after that day's close. The drop was a broad pullback in semiconductor names, not a reaction to this deal. The first regular session to price the news was September 29. The stock rose as much as 1.3% intraday that day before fading to close at $607.57, down 0.05% and effectively flat. Analyst reaction was broadly favorable, according to multiple outlets. Rosenblatt and Stifel kept buy ratings and BofA raised its target to $720.

### 1.3. How heavy is $8.2 billion for AMD

A dilution figure of 0.83% makes the deal look small for AMD shareholders. On the income statement the impression is different. The $8.2 billion equals 71% of AMD's FY2026 second-quarter revenue of $11.5 billion, and 1.66 times the $4.928 billion of R&D spending in the first half of that year. This is a deal that puts roughly seven-tenths of a quarter's revenue on one lab, and it is larger than half a year of research budget.

The ladder on the World Labs side is short too. When the company came out of stealth in September 2024, its valuation was reported at about $1 billion, and the $1 billion round led by Autodesk on February 18, 2026 was discussed at $5 billion. That $5 billion first appeared in a Bloomberg story dated January 23, 2026, headlined "Fei-Fei Li's AI Startup World Labs in Funding Talks at $5 Billion Valuation," which World Labs neither confirmed nor denied. The February round announcement carried no valuation either. Saying that $8.2 billion is 1.6 times that figure is accurate, but the denominator is a reported number and the numerator is a conversion at announcement, so the multiple rests on two layers of uncertainty.

Another figure needs flagging here. Some tertiary sources put the valuation of that round in the $1.2 billion range, but that figure is the cumulative capital World Labs has raised since founding. Move it into the valuation column and the number changes meaning. The named investors in the February round include AMD itself along with Autodesk, Emerson Collective, Fidelity, NVIDIA, and Sea. That list appears verbatim on the World Labs blog.

## The robot-training engine came from SceniX

The engine behind the robot-training capability AMD is buying was not built by World Labs. It came from another company, acquired two months earlier. That attribution is not a Pebblous inference; it is a sentence World Labs wrote about itself. And the company's name appears nowhere in CNBC, Tom's Hardware, or The Japan Times.

The starting point is the body of AMD's press release. The sentence describing what World Labs builds ends with a clause tacked on.

"World Labs develops spatial-intelligence models that generate, reconstruct and simulate interactive 3D environments from text, image and video inputs, **as well as technology for robotic learning and simulation**."

AMD, "AMD to Acquire World Labs to Advance the Future of AI Compute," September 28, 2026

Where the asset behind that closing phrase, "technology for robotic learning and simulation," actually came from is written on the World Labs blog. The company acquired a robot simulation firm called SceniX on July 21, 2026, and a week later described in a post what that firm had been building.

"On July 21, SceniX, a robotics and simulation company, joined World Labs. SceniX has been building systems that turn real robots, environments, and interactions into simulations for policy training and evaluation, **developing a real-to-sim-to-real (R2S2R) engine** that turns one physical task into many controllable, reusable worlds, helping robotics teams train policy models and test changes faster, uncover failures earlier, and reduce costly experimentation on hardware."

World Labs, "Building Worlds That Train Robots," July 28, 2026

R2S2R names the round trip that carries a physical setup into simulation and brings the policy learned there back out to hardware. That is the robot-training apparatus World Labs is handing to AMD, and the company itself names SceniX as the party that built the engine. Sixty-nine days passed between that post and the acquisition announcement.

![Diagram of the R2S2R pipeline: a real robot manipulation task is carried into an aligned simulation, then systematically varied across appearance, object configuration, clutter, physics, robot state, and camera to generate many controllable worlds](./image/img-01-real-to-sim-to-real.jpg)
*▲ One real task is carried into an aligned simulation, then varied across six axes — appearance, object configuration, clutter, physics, robot state, camera — to produce many controllable worlds | Source: [World Labs, "Building Worlds That Train Robots"](https://www.worldlabs.ai/blog/real-to-sim-to-real)*

Nor does the attribution rest on the July post alone. The same sentence reappears in the piece Fei-Fei Li published under her own name on the day of the announcement. Listing what the company had built since its 2024 founding, she writes that "with the acquisition of SceniX, we're building towards an industry leading capability for robotics simulation." On the day the company passes to AMD, its CEO names SceniX as the source of the robotics capability. The document that omits the name is the AMD press release.

### 2.1. Four things inside sixty-nine days

Lay the four events out by date and it becomes clear which way the center of gravity tipped. A week separates the SceniX acquisition from the R2S2R release, and less than four weeks separate the Atlas release from the AMD announcement. The moment the company turned toward robotics and the moment it announced the sale fall inside the same quarter.
