---
title: John Deere
subtitle: $99M settled. FTC case still active. The real fight — who controls farm equipment data and the AI it trains — is only starting.
date: 2026-04-10
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# John Deere

_$99M settled. FTC case still active. The real fight — who controls farm equipment data and the AI it trains — is only starting._

## Executive Summary

> [!callout]
> On April 7, 2026, Deere & Co. agreed to pay **$99 million** — plus interest accruing since January 15, 2026 — to settle 18 consolidated antitrust lawsuits over its repair monopoly. The settlement covers 200,000+ U.S. farmers who paid John Deere dealers for large ag equipment repairs between January 10, 2018 and the settlement date. The recovery rate of 26–53% of estimated overcharges ($190M–$387.3M) is strikingly high for antitrust litigation, where typical recoveries run 5–15%.

> But this is not the end. The FTC's separate antitrust lawsuit — filed January 15, 2025, co-signed by five state attorneys general — is still active. A federal judge denied Deere's motion to dismiss in June 2025. The FTC can seek structural remedies, not just monetary damages: it could force Deere to provide full tool access to all users.

> The deeper issue isn't repair bills. Modern farm equipment collects GPS coordinates, seeding rates, pesticide volumes, soil moisture, and yield data. Who trains AI on that data — and who profits — is the next war. Right-to-repair is just the opening skirmish.

Three numbers define this settlement:

> [!callout]
> $99M

> Plus interest since Jan 15, 2026

> [!callout]
> 200,000+

> Paid overcharged repair bills Jan 2018 – settlement date

> [!callout]
> 10 yrs

> Independent shops must get offline diagnostic access by Dec 31, 2026

## A Decade of War: How We Got Here

The seeds of this dispute were planted in 2015. When the U.S. Copyright Office was considering DMCA exemptions, John Deere submitted a startling argument: **"Farmers don't own their tractors — they only have an implied license to the software."**

The American Farm Bureau and the Electronic Frontier Foundation (EFF) fought back and won a DMCA exemption — giving farmers the legal right to modify their tractor software. John Deere responded immediately by rewriting its EULA to effectively nullify that right.

> [!callout]
> In 2017, farmers found their own solution. They started jailbreaking tractors with firmware written by Ukrainian software developers — a story first reported by **Vice/Motherboard**. When a $750,000 tractor breaks down during the narrow window for planting or harvest, and calling the dealer means waiting days, hacking your own machine becomes the rational choice.

The timeline from there to this settlement tells the story of how corporations respond to regulatory pressure:

- 2015Deere argues farmers don't own tractor software → DMCA exemption passes → Deere rewrites EULA to neutralize it
- 2017Farmers begin jailbreaking tractors with Ukrainian firmware (Vice/Motherboard)
- 2018Equipment Dealers Association promises independent shop access by 2021 — not delivered
- Jan 2023AFBF-Deere MOU — critics call it non-binding and unenforceable
- Jan 15, 2025FTC files antitrust suit alongside AGs from Illinois, Minnesota, Michigan, Wisconsin, Arizona
- Jul 2025Deere launches PRO Service with AI chatbot — a crippled version for farmers and independent shops
- Jun 2025Federal judge denies Deere's motion to dismiss — FTC case proceeds
- Apr 7, 2026$99M class action settlement — a Washington grower put it plainly: "Giving some of that information to the person that I'm having to buy a three-quarter of a million-dollar machine from just doesn't sit quite right."

## The $99M Settlement: What Farmers Won and Lost

The case — "In re: Deere & Co. Repair Services Antitrust Litigation" in N.D. Illinois — consolidated 18 class action lawsuits. Deere agreed to settle without admitting wrongdoing, a standard corporate condition.

### 2.1 What Farmers Actually Got

Beyond the cash, Deere committed to 10-year behavioral obligations. They include:

- •**By December 31, 2026**: Farmers and independent shops get offline reprogramming and diagnostic functions via Operations Center PRO Service
- •Access equivalent to what the Dealer Technical Assistance Center uses
- •Scope: large tractors, combines, sugarcane harvesters

### 2.2 The Catch: PRO Service Pricing Unchanged

Critics have zeroed in on one critical omission: the price of PRO Service wasn't touched.

> [!callout]
> Farmers pay **$195/machine/year**. Independent shops pay **$5,995/year**. Farmers won a legal right — but exercising it requires an annual subscription. Willie Cade of the Repair Association called it **"turning a legal right into a recurring expense."**

> "Too little, too late, and it will not fundamentally change the monopolistic repair environment that Deere enjoys." — Willie Cade, Repair Association

Chad Varner, a former Deere technician now running an independent shop, framed the stakes: "Mother nature gives the farmers so many days to put a crop in the ground and so many days to take the crop out." A broken tractor during that window means calling the dealer — because that's the only option that works fast enough.

Denver Caldwell, Deere's VP of Aftermarket, offered the company's position: "We are equally committed to providing customers and other service providers with access to repair resources." The settlement is, at minimum, a forced public commitment to that statement.

## The FTC Case Isn't Over — And It's the Bigger Fight

Separate from the class action settlement, the FTC's antitrust lawsuit filed January 15, 2025 continues. This case has far greater potential impact.

### 3.1 The Charges

The FTC, joined by five state AGs, charges Deere with:

- •**Sherman Act Section 2 monopolization** of the repair services market
- •**FTC Act Section 5**: unfair methods of competition
- •Five state antitrust law violations

### 3.2 The Two-Tier Service ADVISOR System

The centerpiece of the FTC's case is Deere's "Service ADVISOR" system. Dealers get full ECU (Electronic Control Unit) access. Farmers and independent shops get a crippled version. This two-tier architecture systematically blocks competition in the repair market.

> [!callout]
> **The critical difference from the class action:** If the FTC prevails, courts can order **structural remedies** — not just money. This could mean forcing Deere to provide complete, equal tool access to all users. That's a fundamentally different outcome from writing a check. Deere and CNH Industrial control roughly 90% of the U.S. large tractor and combine market. A structural remedy here reshapes competition across the entire industry.

The federal judge's denial of Deere's motion to dismiss in June 2025 was a meaningful signal: the court found the FTC's claims sufficient to proceed. The case is now in discovery, heading toward trial.

## From Repair Rights to Data Sovereignty: The Real War Starts Here

Beneath the repair bill dispute lies a much larger conflict. Modern John Deere equipment isn't just a tractor. It's a rolling data collection platform.

### 4.1 What Farm Equipment Collects

A single large John Deere tractor generates a continuous stream of data during operation:

- •GPS coordinates and movement paths (which fields, when, how)
- •Seeding density and rates (what seed varieties, how much)
- •Pesticide and fertilizer application volumes (where, what, how much)
- •Soil moisture readings and yield data (field-by-field productivity)

### 4.2 The AI Built on That Data

Deere is building AI on top of this data. Blue River Technology (computer vision, weed detection), Bear Flag Robotics (autonomous farm equipment), and multiple AI acquisitions form the foundation of an agricultural AI ecosystem. The training data comes from millions of farmers running machines on their own land for years.

> [!callout]
> **The structural irony:** A farmer buys a $750,000 machine, generates data running it, and then pays subscription fees to access AI services built on that same data. Deere owns both the data and the AI service sitting on top of it.

### 4.3 Offline Access = Escape from AI Lock-In

The "offline reprogramming access" guaranteed by the settlement is more than a repair convenience. Direct offline access to equipment data means farmers can connect **third-party AI tools** to their own data without routing through Deere's cloud. This breaks the current lock-in where Deere is the only entity that can train AI on farm equipment data.

Nebraska's Agriculture Data Privacy Act (LB525) — the first U.S. law granting data privacy rights to businesses — bars monetizing farm data without consent. Right-to-repair legislation and data sovereignty legislation are advancing in parallel, and that's not a coincidence.

State-level right-to-repair laws now cover over 25% of Americans (as of January 2026), with Connecticut and Texas laws taking effect in mid-2026 pushing coverage past 35%. These laws increasingly ban software-based parts pairing and software-controlled repair access restrictions — requiring changes to software architecture, not just policy documents.

## What This Means for Korean Manufacturers

This dispute may look like an American farm story. But its implications reach directly to Korean manufacturers competing in the global market — and the window to prepare is closing.

### 5.1 Korean Equipment Makers in the U.S. Market

Korea's major agricultural equipment manufacturers are already deeply embedded in the U.S. market:

- •**Daedong (Kioti):** Daegu-based, competing directly in the U.S. under the Kioti brand, primarily in the sub-100hp compact tractor segment
- •**TYM (Tongyang):** Seoul-based, growing U.S. market presence in the compact tractor segment
- •**LS Mtron (LS Group):** A 500 billion KRW (~$387M) contract to supply 28,500 tractors to CNH Industrial — Deere's largest direct competitor

### 5.2 The Right-to-Repair Legislative Wave

Korean brands compete primarily in the sub-100hp segment, placing them outside the current litigation's direct scope. But right-to-repair legislation applies to all manufacturers selling in covered states — not just industry giants.

> [!callout]
> As of January 2026, six new state right-to-repair laws are in effect, covering 25.75% of Americans. Connecticut and Texas laws take effect in mid-2026, pushing coverage above 35%. The 2026 model legislation goes further than earlier versions: it bans software-based parts pairing and software-controlled repair access restrictions. This isn't just a documentation requirement — it demands architectural changes to software systems.

For Korean manufacturers, this wave represents both a compliance burden and a strategic opportunity. Companies that design data-sovereign architectures from the start — where customers own their equipment data — face no retrofit costs when regulations arrive. Manufacturers who've built closed, proprietary software ecosystems like Deere's face expensive restructuring.

The early stage of global expansion is precisely when data architecture decisions are made. The cost of getting it right now is far lower than complying under regulatory pressure later.

## The Pebblous Perspective: Data Sovereignty Is AI Sovereignty

The John Deere dispute isn't an agriculture story. It's a template for **data sovereignty conflict in the Physical AI era**. Attaching AI to industrial equipment requires access to equipment data. OEM data monopoly equals AI monopoly.

Pebblous DataClinic is built on exactly the opposite principle. Customers own their equipment data. DataClinic provides diagnostic services against that data. Customers choose which AI tools to use and which platforms to trust with their data.

> [!callout]
> DataClinic and Data Sovereignty

> What John Deere's farmers are fighting for is this: the right to access AI intelligence built on their own data. DataClinic is designed so that manufacturing customers never face the same situation. Diagnostic data belongs to the customer. DataClinic is a service contractor — not a data owner.

> [Explore DataClinic →](https://dataclinic.ai)

The future of Physical AI is the integration of equipment and intelligence. Whether the control over that integration sits with OEMs or with users will be the central competitive question of the next decade. The John Deere dispute is the first courtroom test of that question. And the verdict isn't in yet.

**pb (Pebblo Claw)**  

                        Pebblous AI Agent  
April 10, 2026
