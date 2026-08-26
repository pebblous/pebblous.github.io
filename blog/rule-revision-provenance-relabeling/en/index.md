---
title: Provenance Tracking Cut Rule-Revision Relabeling to 14.7%
subtitle: An arXiv study traced revised rule conditions back through data lineage and brought average update latency down from 993 seconds to 179
date: 2026-08-27
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Provenance Tracking Cut Rule-Revision Relabeling to 14.7%

_An arXiv study traced revised rule conditions back through data lineage and brought average update latency down from 993 seconds to 179_

## Executive Summary

> [!callout]
> A paper posted to arXiv on August 24 pushes aside a familiar premise about data quality. There is nothing wrong with any of the stored values, and the labels have gone stale anyway. When the rule that produces those labels is revised, the threshold that marks a transaction as suspicious or the criteria that decide eligibility, the historical records stay exactly as they were and only their correct answers move. Ismail Lamaakal of Mohammed Premier University in Morocco calls this rule-induced concept shift, and proposes a procedure for deciding what has to be reassigned and what can stand.

> The method works by tracing the revised conditions back through data lineage to the records whose labels rested on them. Across four datasets and five kinds of revision, reevaluating 14.7 percent of the historical collection was enough to reach 92.3 percent accuracy. Relabeling everything and retraining from scratch, the baseline, reached 92.8 percent, a gap of 0.5 points. That advantage holds only while a revision stays narrow. In the author's own stress tests, once the affected share climbed to 90 percent of the collection, the cost of an update converged on full recomputation.

> The paper also ran the three selection strategies against a fixed budget. Reexamine a random 14.7 percent of the history and you catch 71.1 percent of the records whose labels actually changed. Order that same 14.7 percent by what the model is least sure of and you catch 79.0 percent. Pick it by lineage and you catch 94.6 percent. All three reprocessed the same share.

### Key Figures

Source: [Lamaakal (2026), arXiv:2608.23893](https://arxiv.org/abs/2608.23893), Tables III and IV and Appendix B

<!-- stat-card -->
**14.7%** — Of the history reevaluated — An oracle that knows the true affected set needs 10.8%

<!-- stat-card -->
**0.5 points** — Accuracy gap against full rework — 92.3% against 92.8%

<!-- stat-card -->
**993 → 179s** — Average update latency — Mean of four datasets, about 5.5 times faster

<!-- stat-card -->
**82.9%** — Recall when only 40% of lineage survives — Around 97% when provenance is complete

## The Transaction Never Changed, the Right Answer Did

Picture a single payment sitting in a transaction log. The amount, the timestamp and the counterparty account are all recorded exactly as they happened. Then the in-house threshold for flagging fraud risk drops from the top 25 percent of amounts to the top 40 percent. At that moment the normal label attached to this payment loses its basis. Not one character of the data was edited.

The paper opens from the same place: "Nothing about a previously stored transaction needs to change for its correct label to become different; what changes is the definition used to interpret that transaction." While data quality work mostly points at missing values, typos and outliers, the thing that invalidates labels in production is often one revised line of policy.

Existing concept drift research infers changes of this kind after the fact, from observed values or prediction error. Performance sags, and the system concludes that something must have moved. A rule revision is a different situation. The organization already knows who changed which condition, when, and how. Rediscovering that information from the data is the redundancy the author objects to.

The default response in the field is simple enough. Relabel the entire history under the new criteria and retrain the model. In the paper's benchmark that route took 993 seconds on average to complete an update. It buys 92.8 percent accuracy at the price of sweeping the full collection once per revision.

## Lineage Narrows Down What Has to Be Reopened

The proposed procedure starts by laying out the rule before and after the revision as two predicate graphs. Which attribute carries which threshold, and how the conditions are joined logically, becomes explicit structure. The difference between the two graphs is then extracted and compressed into a typed delta. Whether a threshold moved down, a predicate was inserted, an AND became an OR, or a relation path changed, all of that is separated here.

The next step is the heart of the method. Every historical record carries provenance describing which conditions its label rested on. Matching the delta against that provenance splits the entire historical collection three ways: records whose previous label can be proven still valid, records whose label can be recomputed deterministically by rerunning the new rule, and records the rule alone cannot decide.

The first branch is where the actual savings live. Records land there not because they look probabilistically safe to skip, but because the revision provably cannot propagate to their labels. Local invariance at a blocking node in the predicate graph establishes that before the record is set aside. The paper calls this a provenance stability certificate. In an ablation that removed the certification step and left the rest of the procedure intact, affected-record recall barely moved at 98.4 percent while the reprocessed share jumped from 14.7 percent to 38.9 percent. What the certificate does is not change which labels get reassigned. It safely takes off the table the records that never needed a second look.
