---
title: Your Data Has an Expiration Date
subtitle: A 7-Point Data Freshness Checklist for AI-Ready Data
date: 2026-06-04
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Your Data Has an Expiration Date

_A 7-Point Data Freshness Checklist for AI-Ready Data_

## Executive Summary

> [!callout]
> When we talk about data quality, we usually think of accuracy and completeness. The dimension we miss most often is time. A dashboard that opens in 50ms can be showing you data from two hours ago. A fast system and fresh data are not the same thing. Data freshness is the gap between the moment a real event happens and the moment a model can actually use that event as data. The wider this gap grows, the more quietly — and the more reliably — AI gets things wrong.

> An ML model fed stale inputs returns the wrong prediction with exactly the same confidence as a correct one. Because it does not look like an error, it goes unnoticed. In the age of AI agents the problem is amplified. A prediction a human used to review once a quarter, an agent now runs once a second, and if a feature refreshes only once an hour, every decision in that hour is stacked on the same stale context. This time dimension — which academia has measured for years under the name Age of Information (AoI) — has now become a core item on practical SLAs.

> This article first sets out what freshness is and how it breaks down, then works through setting SLAs by use case and the mechanics of Training-Serving Skew, and closes with a 7-point checklist you can apply directly and a guide to the tools. Pebblous has been diagnosing the five signals of AI-Ready Data; freshness is the sixth question — whether those signals still hold up along the axis of time.

<!-- stat-card -->
**<1 sec** — sub-second requirement — fraud detection, real-time agents

<!-- stat-card -->
**3,600** — decisions on one context — when a feature refreshes once an hour

<!-- stat-card -->
**60%** — AI projects projected to be abandoned — Gartner, without AI-Ready data

<!-- stat-card -->
**5 dims** — data observability — freshness, volume, schema, distribution, lineage

## The Paradox of Data Without a Sell-By Date

A carton of milk has a printed expiration date. Data does not. So many teams treat a feature computed yesterday and a feature computed a minute ago with the same confidence. The trouble is that some data spoils faster than milk. In fraud detection, a feature like "number of transactions in the last 15 minutes" that carries an hour-old value is no longer about the last 15 minutes at all. Data that has lost its freshness looks structurally intact while its meaning has drained away.

![Manufacturing (MFD) and expiration (EXP) dates printed on a product label — the sell-by date that data lacks](./image/img-01-expiration-date.jpg)
*▲ Food carries a manufacturing date and an expiration date; data carries neither. Freshness is a value we have to define ourselves. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Expiration_dates_of_food_products_in_Israel_02.jpg)*

Start by separating two concepts. Latency is how long a query takes to respond. Freshness is the gap between the moment an event actually happened and the moment that event was reflected in the system as data. The two are independent. A dashboard that responds in 50ms may be drawing a snapshot from two hours ago, and a query that takes three seconds to return may reflect an event from one second ago. The fact that something is fast is no guarantee at all that its data is new.

Academia treats this gap through a metric called Age of Information (AoI): a measure of how old the most recently generated update is, relative to now. In domains where real-time decisions translate directly into safety and revenue — autonomous driving, IoT, financial trading — minimizing AoI has long been a research topic, and it has re-emerged recently as a core metric in discussions of 6G networks and the real-time response quality of generative AI (Yates et al., 2021; Cheng et al., 2025). It sounds academic, but in practice it is the same as a plain question: "This feature — how many minutes old is it right now?"

> [!callout]
> **Key observation**: a fast system does not guarantee fresh data. Cutting latency and preserving freshness are different jobs, and if neither is measured, both collapse. If data does not come stamped with an expiration date, then that expiration date is something we have to define and measure ourselves.

## AI Fails Confidently on Stale Data

The most dangerous thing about stale data is that the model does not know it is stale. Whether the input feature carries an hour-old value or a one-second-old value, the model outputs its prediction with the same conviction. A confidence of 0.97 is not 0.97 because the data was fresh. It is simply 0.97 with respect to the numbers the model received. A stale feature produces a confident but wrong prediction, and because that prediction does not look like an error, no alert ever fires.

When a fraud detection model looks at "transaction frequency over the last 15 minutes" and that feature arrives an hour late, the model mistakes an anomalous spike for the usual pattern. In a recommendation system, if you keep recommending a product the user just bought half an hour later, the freshness gap becomes a user-experience gap directly. In inventory optimization, a stock count refreshed by last night's batch cannot predict this afternoon's stockout. In all three cases the model itself is fine; what broke was the time of the input.

![A real-time payment terminal showing a transaction confirmation screen — the freshness of the recent-transaction features a fraud model depends on](./image/img-02-payment-terminal.jpg)
*▲ The instant a terminal approves a transaction, a feature like "transaction frequency over the last 15 minutes" changes by the second. An hour-late input makes the model read a spike as the usual pattern. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:%E3%83%9D%E3%83%BC%E3%82%BF%E3%83%96%E3%83%AB%E3%81%AA%E3%82%AD%E3%83%A3%E3%83%83%E3%82%B7%E3%83%A5%E3%83%AC%E3%82%B9%E6%B1%BA%E6%B8%88%E7%AB%AF%E6%9C%AB_Portable_cashless_payment_device.jpg)*

Accumulated at business scale, this quiet failure turns into numbers. Gartner has projected that 60% of AI projects not supported by AI-Ready data will be abandoned by 2026, and in IBM's 2025 study 43% of COOs named data quality as their top priority. Freshness is the least-measured dimension within that data quality. The accuracy report shows 95% computed on yesterday's data, but no one asks whether that 95% still holds today.

> [!callout]
> **Why it's caught late**: the freshness gap is the accuracy gap. But this gap leaves no trace in the error logs. Because the model outputs high confidence even on stale inputs, performance decay is discovered only after the quarterly report comes out — unless freshness is monitored on its own.

## AI Agents Moved the Threshold

Traditional ML models lived in an environment relatively forgiving of freshness. One inference per session, one per page load was enough, and a feature that was hours stale rarely led to a serious incident. AI agents break that premise. An agent makes a judgment on every event and turns that judgment straight into action.

The numbers make the difference plain. If an agent makes a decision once a second while a feature refreshes only once an hour, then all 3,600 decisions made during that hour rest on the same stale context. The first decision and the 3,600th see the same world, while the real world has kept moving the entire time. Hourly refresh — a cadence that used to be perfectly adequate — becomes a 3,600x amplified risk in an agent environment.

![An analog stopwatch measuring to a tenth of a second — agent decision frequency and data freshness (Age of Information)](./image/img-03-stopwatch.jpg)
*▲ As decision frequency drops to seconds, acceptable staleness drops with it. Age of Information is the clock that answers "this feature — how many minutes old is it right now?" | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Stoppuhr_hanhart.jpg)*

The more fundamental difference is the nature of the outcome. When a recommendation model is wrong, the user glances at a product they do not care about and moves on. When an agent is wrong, it processes the wrong ticket, approves the wrong transaction, and routes a shipment to the wrong address. An agent does not merely output a wrong answer; it executes a wrong action. That is why, in domains where agents act — fraud detection, real-time bidding, autonomous operations — sub-second freshness is no longer a luxury but a baseline requirement.

> [!callout]
> **The agent-era bar**: in the agent era, the freshness requirement rises in proportion to decision frequency. The moment you hand a human-reviewed prediction over to an agent, acceptable staleness drops from hours to seconds. That is precisely why, before deploying an agent, you should first check "how often does this feature refresh?"

## Freshness SLAs Differ by Use Case

Demand sub-second freshness for all your data and the cost becomes unbearable; refresh everything via nightly batch and real-time decision-making collapses. The answer is to explicitly define the maximum acceptable staleness for each data asset. The table below orders use cases from the highest freshness requirement down, and you can use it as a starting point for SLA design.

| Use case | Max acceptable staleness | Notes |
| --- | --- | --- |
| Financial trading & fraud detection | < 1 second (sub-second) | Real-time decisions, directly tied to losses |
| AI agents | Seconds to 1 minute | Includes executing actions |
| Real-time dashboards | < 60 seconds | Operational monitoring standard |
| Inventory & pricing optimization | Minutes to 15 minutes | Stockouts, dynamic pricing |
| Recommendation systems | Minutes to 1 hour | Refreshed per session |
| Analytics reporting | Hours to days | Acceptable |
| Batch ML retraining | Days to weeks | Regular retraining cadence |

****************************

Here, batch processing is the structural enemy of freshness. The best freshness a nightly or hourly batch can achieve is the batch interval itself. An hourly batch, no matter how fast it runs, produces data that is on average 30 minutes — and at worst a full hour — old. Once the freshness requirement drops below the minute, running the batch faster only goes so far; the essential fix is a shift to event-driven streaming.

When defining an SLA, it is more practical to set two tiers rather than a single threshold. At the warning threshold you only send an alert so an operator becomes aware; once the error threshold is crossed, you block the pipeline or explicitly propagate the stale state downstream. Freshness operated without thresholds is, in effect, the same as freshness that is never measured.

## Training-Serving Skew Won't Be Fixed by Retraining

The place where freshness problems appear in their hardest-to-detect form is Training-Serving Skew. This is the mismatch that arises when the data a model saw during training differs from the data it receives while serving. If drift is the statistical phenomenon of a data distribution shifting naturally over time, skew is a bug in which the training path and the serving path produce different values at the very same moment.

Skew has many causes. Feature-transformation logic differs subtly between training and serving code, null-handling diverges, or time zones fall out of alignment — these are common. Among them, the cause directly entangled with freshness is "a feature derived from a stale source." During training you compute the feature on completed, historical data, but during serving you compute the same feature on a real-time source that has not yet refreshed — so a feature with the same name ends up carrying different freshness in training versus serving.

Skew is dangerous because its symptoms are quiet. Model performance degrades gradually without any clear error, and it looks fine in offline evaluation while accuracy drops only in production. The starting point for diagnosis is to stamp both the training data and the serving data with timestamps and compare the freshness of the two paths directly. If the same feature comes from sources that differ by days between training time and serving time, that feature is the prime suspect for skew.

> [!callout]
> **Diagnosis order**: skew is a bug, not a statistical phenomenon. So it is not fixed by retraining; it disappears only when you align the feature definitions and freshness of both the training and serving paths. If your offline scores are good but only your production scores are bad, it is faster to check for a freshness mismatch before you suspect drift.

## A 7-Point AI-Ready Data Freshness Checklist

We've seen enough of why freshness matters; now it's time to check what to do about it. The seven items below are arranged so that data engineers and MLOps practitioners can map them directly onto their own pipelines. The order follows the flow of measure → define → automate → watch.

### 1. Measure latency across the entire pipeline

From the moment an event occurs to the moment a model can use that data, leave a timestamp at every stage. If you cannot see where time leaks across ingestion, loading, transformation, and serving, you cannot improve freshness. What is not measured is not managed.

### 2. Specify a freshness SLA per data asset

Write down a concrete freshness target for each asset, like "this feature within 5 minutes, that table within an hour." The use-case table in Section 4 is your starting point. Freshness operated without targets only reveals itself as a problem after the fact.

### 3. Embed automated freshness checks in the pipeline

Put dbt's `source freshness`, Great Expectations' recency checks, and your observability tool's freshness monitors inside the pipeline so that threshold breaches are caught automatically, without a human having to check every time. The first line of defense should be code, not people.

### 4. Manage timestamps on training data

Record the point in time the training data is from, and compare it side by side with the point in time of the serving data. This comparison is the most direct way to catch Training-Serving Skew early. When the two freshness values for the same feature drift far apart, sound the alarm.

### 5. Monitor staleness in the Feature Store

Set a freshness SLO per feature group and track how old each group is. It helps to watch upstream Kafka consumer lag alongside it. Growing lag is the earliest signal that the stream processor has hit a bottleneck and the features are starting to go stale.

### 6. Propagate batch-job failures downstream

When a scheduled batch fails to run, the data quietly freezes at yesterday's value. Explicitly notify downstream systems of batch failures so the model does not mistake stale data for normal data. A silent batch is the most dangerous kind.

### 7. Integrate freshness into the five dimensions of observability

Freshness is one of the five dimensions of data observability. Only when you watch it on one screen together with volume, schema, distribution, and lineage can you trace "why did freshness drop?" Monitoring that looks at freshness in isolation does not lead to root-cause analysis.

![A data observability dashboard gathering throughput, response time, and status-code distribution on one screen — freshness watched alongside the other dimensions](./image/img-04-monitoring-dashboard.jpg)
*▲ An observability dashboard gathering throughput, average response time, and status-code distribution on one screen. Freshness leads to root-cause analysis only when watched this way — next to volume, schema, distribution, and lineage. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Grafana_Dashboard_(2017).jpg)*

> [!callout]
> **Practical tip**: you do not need to adopt all seven items at once. Even putting just item 1 (measure) and item 2 (define an SLA) in place starts to reveal which data is at risk. The moment it becomes visible, the priority of the remaining five sorts itself out.

## Pick Freshness Tooling to Match Your Environment

Freshness checking is not finished by a single do-it-all tool. The right tool differs depending on where your data lives and how it flows. Below is a summary of the tools commonly used by environment, useful as a reference when you decide where to attach each item in the checklist.

| Environment | Tool | How it checks freshness |
| --- | --- | --- |
| SQL data warehouse | dbt source freshness | Two-tier warning/error thresholds on MAX(loaded_at) |
| Pipeline data validation | Great Expectations | Auto-validate load time with a recency expectation |
| Real-time features | Feast, RisingWave, Tecton | Per-feature-group freshness SLO + alert |
| Streaming pipelines | Kafka consumer lag monitoring | Rising lag = early signal of falling freshness |
| End-to-end monitoring | Monte Carlo, Acceldata | Integrated freshness watch across the five observability dimensions |

****``****************

The criterion for choosing a tool is simple. If your data accumulates in a static warehouse, dbt and Great Expectations are enough; if real-time features flow into the model, the Feature Store's freshness monitoring becomes the core. If streaming is involved, watching consumer lag is the earliest alarm; and if you need to see many pipelines at a glance, an observability platform ties the five dimensions together. What matters is not the name of the tool but whether each item on the 7-point checklist has a monitoring mechanism accountable for it.

## Freshness Is the Sixth Signal of AI-Ready Data

Pebblous has been diagnosing whether image data is AI-Ready through five signals: integrity, balance, pixel diversity, feature-space distribution, and class separability. These five signals are the result of looking at data at a single point in time, like a still frame. But data does not stand still. A dataset where all five signals were green yesterday becomes stale data today if its updates stop. Freshness is the sixth question — whether those five signals still hold up along the axis of time.

If a diagnosis is a photograph of a single moment, freshness is the warranty that the photograph is still valid now. This is exactly why Pebblous places Data Greenhouse (agentic, autonomous data operations) as the step after DataClinic's diagnosis. A diagnosis tells you the state of the data once; operations autonomously refresh and monitor so that state keeps holding. Freshness is the bridge of time that connects diagnosis and operations.

Back in practice, the question is simple. Of the features going into your model right now, how many have a defined freshness SLA? Of those, how many are monitored automatically? If both answers are "almost none," then before you gather new data or swap out the model, it is time to check the axis of time first. If data has no expiration date, defining that expiration date is the next step toward AI-Ready.

> [!callout]
> **Closing question**: of the seven items in this article's checklist, how many can you answer right now? The items where the answer is blank are exactly the work list for your next sprint. Freshness that has not been measured is, until it is measured, nothing more than an assumption left to luck.

## References

### Academic

- 1.Shisher, M. K. C., & Sun, Y. (2022). "[How Does Data Freshness Affect Real-time Supervised Learning?](https://arxiv.org/abs/2208.06948)" arXiv:2208.06948.
- 2.Cheng, N., et al. (2025). "[Redefining Information Freshness: AoGI for Generative AI in 6G Networks](https://arxiv.org/abs/2504.04414)." arXiv:2504.04414.
- 3.Yates, R. D., et al. (2021). "Age of Information: An Introduction and Survey." _IEEE Journal on Selected Areas in Communications_, 39(5).
- 4.Berkeley EECS. (2025). "Ensuring Data Freshness Across Clouds for Model Serving." UC Berkeley Technical Report.

### Industry & Press

- 5.Gartner. (2025). "60% of AI projects unsupported by AI-ready data will be abandoned by 2026."
- 6.IBM Institute for Business Value. (2025). "C-Suite Study: 43% of COOs rank data quality as the biggest priority."
- 7.Tacnode. "[What is Stale Data?](https://tacnode.io/post/what-is-stale-data)" Tacnode Blog.
- 8.RisingWave. "[Feature Pipeline Observability & Freshness Monitoring](https://risingwave.com/blog/feature-pipeline-observability-freshness-monitoring/)." RisingWave Blog.
