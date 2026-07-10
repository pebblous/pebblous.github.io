---
title: The Mathematics of Data Quality
subtitle: What Shannon entropy and topological sort tell us about clean data
date: 2026-04-16
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# The Mathematics of Data Quality

_What Shannon entropy and topological sort tell us about clean data_

## Executive Summary

> [!callout]
> "The data is messy" is a phrase everyone understands — but what does it mean mathematically? In 1948, Claude Shannon proposed a formula — $H(S) = -\sum_{i} p_i \log_2(p_i)$ — that compresses the disorder of any dataset into a single number between 0 and 1. That elegant formula now drives the branching logic of decision trees, the loss functions of neural networks, and the anomaly signals of monitoring systems.

> But data quality is not only about disorder within a dataset. Data depends on other data — without a valid customer ID, an order record is meaningless. The mathematical tool for resolving these dependencies is topological sort: an algorithm that orders nodes in a directed acyclic graph (DAG) so every prerequisite is processed before anything that relies on it. This is the operational backbone of modern data pipelines — Airflow, dbt, and AI agent frameworks like LangGraph all run on it.

> Where the two concepts converge is Topological Data Analysis (TDA). By tracking the geometric structure of data — its shapes, clusters, and holes — TDA detects quality failures that entropy alone misses. In 2024, researchers applied TDA to 1.4 million banking transactions and identified money mule and smurfing patterns without any labeled training data. Entropy measures the disorder within data; topological sort defines its processing order; TDA unifies both to diagnose structural defects in data quality.

## 1. What Is Data Quality?

Before diving into the math, consider a thought experiment. You pull patient records from a hospital database: half the birth date fields are empty, the same person is registered twice under slightly different name spellings, and blood type appears as both "O+" in some records and "O positive" in others. Can you feed this directly into an AI model? Of course not.

Data quality is typically measured across six dimensions. They are not independent — when one collapses, the others tend to follow.

Accuracy

Does the data correctly represent the real world? Is the customer's address actually their address?

Completeness

Are all required fields populated? Is the NULL rate within acceptable bounds?

Consistency

Is the same entity represented the same way across systems and time? "O+" vs. "O positive" is an inconsistency.

Timeliness

Is data current when it's needed? A three-year-old shipping address causes delivery failures.

Validity

Does data conform to defined formats, ranges, and rules? A future birth date is invalid.

Uniqueness

Are there no duplicate records? The same customer under two IDs skews every downstream analysis.

The problem with evaluating these dimensions intuitively is that "the data looks a bit off" cannot be a shared organizational standard. Mathematical definitions make quality measurable — and only what is measurable can be systematically improved.

> [!callout]
> Data quality comes down to two fundamental questions: **(1) How disordered is this data?** — measured by entropy. **(2) In what order should this data be processed?** — determined by topological sort. Together, these questions define the mathematical foundations of data quality.

## 2. Entropy — Disorder as a Number

Entropy originated in thermodynamics — the second law states that closed systems tend toward greater disorder over time. In 1948, mathematician Claude Shannon carried the concept into information theory. His insight was deceptively simple: the uncertainty in any message, dataset, or signal can be quantified.

### The Shannon Entropy Formula

Think of a coin flip. With a fair coin, you cannot predict the next outcome — maximum uncertainty. If both sides show heads, the result is always certain — zero uncertainty. Shannon captured this as:

$$H(S) = -\sum_{i} p_i \log_2(p_i)$$

Shannon Entropy (1948) — $p_i$ is the probability of each outcome; the sum runs over all possible outcomes

The result falls between 0 (perfectly ordered, no uncertainty) and 1 (maximum disorder, maximum uncertainty). In data quality terms: a low-entropy dataset is predictable and consistent. A high-entropy dataset is chaotic and likely riddled with quality issues.

### Entropy in Decision Trees — The Most Intuitive Application

Decision trees use entropy as their core splitting criterion. At every branch, the algorithm asks: "Which split reduces entropy the most?" This reduction is called **Information Gain**.

$$IG(S, A) = H(S) - \sum_{v \in \text{Values}(A)} \frac{|S_v|}{|S|} \cdot H(S_v)$$

Information Gain — the drop in entropy after splitting on feature A. The larger the gain, the better the split.

Take a manufacturing defect dataset with an overall entropy of 0.94 (near-maximum disorder). If splitting on "temperature > 80°C" produces two groups with entropies of 0.2 and 0.3, that split has dramatically reduced disorder — it is a good split. Decision trees work by iteratively maximizing information gain, building up data purity (low entropy) at each level until leaf nodes contain only one class.

### 33 Entropy Variants — Choosing the Right Tool

Since Shannon, researchers have developed more than 33 entropy variants, each suited to specific analytical challenges:

- **Approximate Entropy** — measures irregularity in time series; used for EEG and cardiac data quality assessment
- **Permutation Entropy** — measures complexity of ordering patterns; applied to sensor data anomaly detection
- **Cross Entropy** — the neural network loss function; measures divergence between predicted and actual distributions
- **Sample Entropy** — stable irregularity measure for short time series; widely used in medical data quality diagnostics

> [!callout]
> Entropy's core insight for data quality: **quality is not binary — it is a matter of degree.** Entropy quantifies that degree. A sudden spike in a dataset's entropy is a signal: either anomalies have entered the data, or the collection process has broken down.

## 3. Topological Sort — The Mathematics of Dependencies

Data does not exist in isolation. Order data depends on customer data; shipment data depends on order data; billing depends on confirmed delivery. Ignore these dependencies and process tables out of sequence — loading the orders table before the customers table — and you get foreign key errors, NULL explosions, and referential integrity failures. That, too, is a data quality problem.

### DAGs and the Mathematics of Topological Sort

Topological sort operates on a **Directed Acyclic Graph (DAG)**, governed by two rules:

- **Directed** — arrows point one way. A→B means "A is a prerequisite for B"
- **Acyclic** — no cycles. A→B→C→A is forbidden — an infinite prerequisite loop cannot be executed

The algorithm finds a linear ordering in which every predecessor node comes before every successor. A concrete example:

Data Pipeline Execution Order — Example

raw_customers → cleaned_customers → customer_segments  

                            raw_orders → cleaned_orders → order_summary  

                            customer_segments + order_summary → revenue_report

Topological sort result: raw_customers, raw_orders → cleaned_customers, cleaned_orders → customer_segments, order_summary → revenue_report  
No matter which valid order is chosen, all dependencies are guaranteed to be satisfied.

### Two Standard Implementations

**Kahn's Algorithm (BFS-based)** — Start with nodes whose in-degree (number of incoming edges) is zero. Process and remove them; update in-degrees. Add newly zero-in-degree nodes to the queue. If processed count is less than total nodes at the end, a cycle exists — topological sort is impossible.

**DFS-based Algorithm** — Depth-first traversal; push fully explored nodes onto a stack and output in reverse. Naturally recursive, and well-suited to very deep dependency graphs.

### Topological Sort in Modern Data Tools

Apache Airflow DAGs are literally topological sort in action — the scheduler uses it to determine task execution order. dbt represents model dependencies as a DAG and uses topological sort to optimize build sequences. AI agent frameworks like LangGraph and CrewAI connect agent nodes in DAGs and rely on topological sort to guarantee execution ordering.

> [!callout]
> Topological sort's core insight for data quality: **data quality is not only about individual records — it is also about the relationships between them.** A perfectly clean record processed out of sequence can corrupt everything downstream.

## 4. Where They Meet: Topological Data Analysis (TDA)

If entropy measures "how disordered is the data" and topological sort determines "in what order should it be processed," their intersection is **Topological Data Analysis (TDA)** — a framework that analyzes the geometric structure of data (its shape, connectivity, and holes) to detect quality failures.

### Persistent Homology — Tracking Structure Across Scales

Imagine data points scattered across a space. Depending on how close together they are, clusters (connected components) and loops (holes) appear and disappear. **Persistent homology** tracks which structures emerge at which scales and persist long enough to be meaningful rather than noise.

The connection to data quality: clean data forms stable clusters at predictable scales. Outliers and contaminated records disrupt that structure — unexpected clusters appear, or holes open up in normally solid ones. TDA combines this structural disruption with entropy signals to flag anomalies that neither method catches alone.

### The Mapper Algorithm — Compressing High Dimensions into Graphs

Banking transaction data has hundreds of variables — impossible to visualize directly. The **Mapper algorithm** compresses this high-dimensional data into an interpretable graph:

Project data into a lower-dimensional space using a filter function (e.g., principal component analysis)

Divide the projected space into overlapping intervals (open cover)

Cluster the data within each interval → create nodes

Connect nodes that share data points → complete the graph

The structural properties of the resulting graph — node connectivity, cluster sizes — become data quality indicators. Nodes whose structure diverges from the normal pattern are anomaly candidates.

### Proof of Concept: Financial Fraud Detection Across 1.4 Million Customers

A 2024 paper (arXiv:2508.14136) applied TDA to 1.4 million banking customers with no labeled training data — pure unsupervised learning — and successfully detected two fraud patterns:

- **Money mule activity** — large inflows followed immediately by full outflows
- **Smurfing** — multiple small transfers followed immediately by cash withdrawals

These patterns are largely invisible when examining the entropy of individual transactions. But in the topological structure of the transaction graph, they produce a fundamentally different shape from normal customers — the synergy of entropy and topology in action.

> [!callout]
> TDA's core paradox: **data quality problems often hide not in individual records, but in the relational structure between them.** Each transaction may look normal in isolation; the topology of the pattern reveals the anomaly.

## 5. In Practice — How AI Pipelines Use Both

These are not academic abstractions. Modern data engineering and machine learning pipelines depend on both concepts simultaneously.

### Entropy-Based Data Quality Monitoring

In production pipelines, entropy is used to detect data drift. The feature distribution entropy of training data is stored as a baseline. New incoming data is periodically compared. When entropy diverges beyond a threshold — either the data collection process changed, a new user population arrived, or a bug was introduced.

Practical Pattern: Entropy-Based Data Drift Alerting

1. Compute and store daily per-feature entropy  

                            2. Calculate the ratio of current entropy to 7-day moving average  

                            3. Alert when ratio > 1.3 (30%+ increase)  

                            4. Root cause analysis: collection error? population shift? intentional change?

### Topological Sort for Pipeline Stability

Apache Airflow, dbt, and Prefect all use DAGs at their core. Topological sort guarantees correct execution order — but pairing it with entropy analysis takes it further. Which transformation nodes cause entropy to spike? Those are the data quality bottlenecks.

Modern data observability tools integrate both: they use DAG lineage (topological sort's dependency analysis) to trace which upstream step affected a downstream one, while measuring entropy changes at each step to quantify data distribution shift.

### AI Agent Workflows

Frameworks like LangGraph and CrewAI structure agent execution as DAGs. Monitoring the entropy of each agent node's output — and using topological sort to enforce execution order — makes it possible to track output quality mathematically across the entire agent pipeline.

This is particularly valuable in RAG (Retrieval-Augmented Generation) pipelines. If retrieved documents have high entropy — conflicting perspectives and inconsistent information — the generated answer's reliability is likely lower. Entropy of context becomes a signal for output quality.

> [!callout]
> The practical takeaway: **topological sort ensures the pipeline runs in the right order; entropy measures whether data quality is being maintained at each step.** Neither is sufficient alone.

## 6. The Future of Data Quality Mathematics

As of 2025, the mathematics of data quality is developing in three directions.

### Graph Entropy and Hierarchical Structure

A 2025 paper (arXiv:2509.18417) analyzed the mathematical relationship between graph entropy and hierarchical structure in networks. The key finding: the more clearly a DAG (a topologically sortable graph) organizes data into hierarchy, the lower the graph's overall entropy. In other words, clearer dependency order produces lower entropy — the two concepts mathematically reinforce each other.

### Topology Entropy for Graph Partitioning

A 2025 Nature Scientific Reports paper proposed using topology entropy to optimize graph partitioning. By finding natural boundaries in a dataset — mathematically guaranteed cluster quality — this method brings a new level of rigor to unsupervised learning data quality.

### Entropy-Conserving Algorithms

Research since 2022 has mathematically modeled how much entropy sorting and filtering algorithms preserve or reduce. This has direct applications in data transformation pipeline quality assurance — which transformations minimize information loss?

### Data Quality Math in the LLM Era

Large language models have added a new dimension to data quality. Training data entropy shapes model diversity and bias. If fine-tuning data entropy is too low (repetitive patterns only), the model overfits. If too high (random noise dominates), training fails to converge. Optimal training data quality means maintaining entropy within a target range — making entropy a first-class data curation metric.

> [!callout]
> Data quality mathematics is no longer an academic concern. Entropy and topological sort have become the foundational mathematics of the modern data stack. **For anyone working with data at scale, fluency in these two concepts is rapidly shifting from optional to essential.**

## Frequently Asked Questions

## References

- Shannon, C.E. (1948). A Mathematical Theory of Communication. Bell System Technical Journal, 27(3), 379–423.
- Applications of Entropy in Data Analysis and Machine Learning: A Review (2024). MDPI Entropy. PMC11675792.
- Topological Data Analysis for Unsupervised Anomaly Detection and Customer Segmentation on Banking Data (2024). arXiv:2508.14136.
- Graph entropy, degree assortativity, and hierarchical structures in networks (2025). arXiv:2509.18417.
- Topology entropy: Enhancing graph partitioning for TAD identification (2025). Nature Scientific Reports.
- Entropy conservation for comparison-based algorithms (2022). Scientia Iranica.
- Topological Information Data Analysis (2019). ResearchGate.
- Network Entropy Based on Topology Configuration (2008). Chinese Physics Letters.
- Topological Analysis for Detecting Anomalies (TADA) in dependent sequences (2024). JMLR.
- The 6 Data Quality Dimensions: Key Metrics & Best Practices (2026). OvalEdge.
- Gini Impurity and Entropy in Decision Tree (2025). GeeksforGeeks.
- Topological deep learning: a review of an emerging paradigm (2024). Artificial Intelligence Review, Springer.
