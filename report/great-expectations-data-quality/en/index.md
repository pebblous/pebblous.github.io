---
title: Great Expectations Deep Dive — The First Line of Defense for ML Pipeline Data Quality and Its Limits
subtitle: What GX can do, what it cannot — and what lies beyond
date: 2026-04-14
category: report
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Great Expectations Deep Dive — The First Line of Defense for ML Pipeline Data Quality and Its Limits

_What GX can do, what it cannot — and what lies beyond_

## Executive Summary

> [!callout]
> "Good models start with good data." This is not a slogan — it is a measurable engineering proposition. Google's data validation system automatically detected real data errors in 6% of training runs across more than 700 ML pipelines (Schelter et al., MLSys 2019). Even ML benchmark datasets we trust as "curated gold standards" contain an average label error rate of 3.4% (Northcutt et al., NeurIPS 2021). Data quality problems are not something that "might happen" — they are something that will happen.

> Great Expectations (GX) is the most mature open-source data validation framework built to tackle this problem through engineering. It reached v1.0 GA (General Availability) in August 2024, earning its production-ready designation. As of now, GX has 11,398 GitHub Stars and roughly 28.35 million monthly PyPI downloads. For schema validation, statistical range checks, automated documentation (Data Docs), and pipeline gating on structured data such as CSV, Parquet, and SQL tables, GX has become the industry standard.

> Yet GX has structural limitations. Visual quality assessment for unstructured data like images, audio, and point clouds; AI-driven class imbalance diagnosis; and label corruption detection — the real quality problems in ML training data — all fall outside GX's scope. This report honestly dissects what GX does well and what it cannot, and presents a dual defense architecture of GX (rule-based validation gate) + DataClinic (AI-driven ML data diagnosis) that completes a true AI-Ready Data pipeline.

## The GIGO Era — Why ML Data Quality Matters Now

GIGO — Garbage In, Garbage Out. It is one of the oldest principles in computer science, but in the age of deep learning, its implications have taken on an entirely new dimension. When a model with billions of parameters trains on flawed data, it produces errors at a scale commensurate with its size — and with far greater confidence.

### 1.1 The Scale of the Problem: Data Quality in Numbers

The numbers paint a stark picture of how pervasive data quality issues really are.

- •6% error rate in Google's data pipelines: Google deployed a TFX-based data validation system across more than 700 ML pipelines. Over a 30-day observation window, real data errors were detected in 6% of training runs (Schelter et al., MLSys 2019). Even at Google's scale, 1 in 17 training runs starts with corrupted data.
- •Label errors in benchmark datasets: Northcutt et al. from MIT CSAIL (NeurIPS 2021) analyzed 10 major ML benchmark datasets including ImageNet and CIFAR-10. The average label error rate was 3.4%. CIFAR-100 had 6% (roughly 3,000 errors), and QuickDraw reached 10.12%. Even datasets we consider "curated gold standards" can have 1 in 10 labels wrong.
- •Time spent on data preparation: A widely cited CrowdFlower (2016) survey found that data scientists spend 60% of their work time on data cleaning. More recent surveys from Anaconda's State of Data Science (2023-2024) show data preparation still accounts for over 45% of total work time. That data prep is the single largest time sink for data scientists is a consistent finding across studies.
- •Data vs. Model — the data wins: In the Data-Centric AI Competition (2021), hosted by DeepLearning.AI and Landing AI, participants used an identical model architecture and improved only the data. The result? Accuracy jumped from 64.4% to 85.8% — a roughly 33 percentage-point increase. As model architecture competition reaches maturity, the competitive edge now comes from data quality engineering.

> [!callout]
> Sculley et al. (NIPS 2015) noted in "Hidden Technical Debt in Machine Learning Systems" that the bulk of a real-world ML system is not ML code but data infrastructure, feature engineering, and configuration code. The ML code is the tip of the iceberg — the largest mass beneath it is the data layer.

### 1.2 Paradigm Shift: From Model-Centric to Data-Centric

For years, the ML community raced toward bigger models and more sophisticated architectures. That changed when Andrew Ng launched the Data-Centric AI movement in 2021. The core thesis is simple: systematically improving the data with a fixed model often yields greater performance gains than improving the model with fixed data.

This paradigm shift spawned a new ecosystem of tools — tools that test data quality like code, auto-document validation results, and serve as pipeline gates. Among them, Great Expectations (GX) is the most widely adopted.

### 1.3 Why GX Now — What v1.0 GA Means

Since its debut in 2017, GX had long been known as a "powerful but complex tool." The YAML-based configuration, convoluted DataContext setup, and extensive boilerplate code of v0.x created a steep learning curve. That frustration finally led to the v1.0 GA release on August 22, 2024.

v1.x completely redesigned the data source connection model around a Python Fluent API. It eliminated YAML configuration and simplified everything into consistent, code-first patterns. The community response has been broadly positive regarding the API direction. v1.x signals that GX has finally entered the stage where it can be used reliably in production. That is why this report is timely.

## GX Core Concepts — Expectations, Data Docs, Checkpoints

The core idea behind GX is simple. Declare what your data "should look like" in code. GX will then validate it automatically and generate an HTML report of the results. The validation logic is the documentation. This "single source of truth" design is what sets GX apart from other tools.

### 2.1 Expectations — Assert Statements for Data

Expectations are the basic unit of GX. Just as you use `assert` in unit tests to verify code logic, GX lets you express assertions about data in a declarative style.

`import great_expectations as gx

# Connect to data source (v1.x Fluent API)
context = gx.get_context()
data_source = context.data_sources.add_pandas("my_datasource")
data_asset = data_source.add_dataframe_asset("my_asset")

# Define Expectation Suite
suite = context.suites.add(gx.ExpectationSuite(name="my_suite"))

# Declare core Expectations
suite.add_expectation(
    gx.expectations.ExpectColumnValuesToNotBeNull(column="user_id")
)
suite.add_expectation(
    gx.expectations.ExpectColumnMeanToBeBetween(
        column="age", min_value=18, max_value=90
    )
)
suite.add_expectation(
    gx.expectations.ExpectColumnValuesToBeBetween(
        column="score", min_value=0, max_value=100
    )
)`
                        As of v1.x, the official gallery includes 47 core Expectations. During the v0.x era, more than 300 Expectations had accumulated, but user feedback that "too many options create confusion" led to a redesign in v1.x that retained only the most commonly used types. Writing custom Expectations in Python is also supported, and the community ecosystem enables further extension.

### 2.2 Data Docs — Validation Results That Become Documentation

One of GX's most distinctive features is Data Docs. When you run an Expectation Suite, GX automatically generates the validation results as an HTML document. Which Expectations are defined, whether each validation passed or failed, and what statistical distributions look like — all of it is rendered into a visual report.

This matters for three reasons. First, sharing across teams is easy. Since the output is an HTML file, you can host it on S3 or an internal wiki so that data engineers, ML engineers, and analysts all see the same document. Second, it creates an audit trail. A history of when specific data passed which validation criteria accumulates automatically. Third, it supports regulatory compliance. In finance or healthcare, where you need to submit evidence of data quality checks, Data Docs can serve as that documentation.

### 2.3 Checkpoints — Automating Pipeline Gates

A Checkpoint is the unit that automates Expectation Suite execution. Insert a Checkpoint into an Airflow DAG, Dagster job, or Vertex AI Kubeflow Pipeline, and validation runs automatically before data advances to the next stage. If validation fails, the pipeline halts and alerts are triggered.

> [!callout]
> A real-world case from Avanade illustrates this value well. In an ML pipeline consolidating data from multiple sources, an upstream data model change occurred. A GX Checkpoint automatically detected that a key feature's values had collapsed to zero. The pipeline stopped before any stakeholder noticed the problem, preventing corrupted data from entering model training (Avanade Case Study, Great Expectations official blog).

### 2.4 From v0.x to v1.x — Must-Know Changes

Most GX tutorials in circulation were written for v0.x between 2021 and 2022. If you try to configure v1.x based on a v0.x tutorial, you will inevitably run into errors. Three key changes to know:

- •Complete overhaul of data source connections: The v0.x YAML-based datasource configuration was replaced by the Python Fluent Datasources API. Block-style Data Sources were removed entirely.
- •Checkpoint configuration restructured: The v0.x "Validations list" approach was replaced by "Expectation Bindings" in v1.x.
- •Databricks environment caveats: When using EphemeralDataContext, `.sources` attribute errors are frequently reported. This reflects API changes in v1.x, and consulting the official v1.x migration guide is essential.

### 2.5 GX Cloud — From Open Source to SaaS

GX Cloud is the fully managed SaaS layer built on top of open-source GX. In February 2025, it launched ExpectAI — a feature that generates Expectations automatically from natural-language descriptions of data quality requirements, with initial support for Snowflake environments. The Enterprise plan guarantees 99.5% uptime SLA and includes Slack/PagerDuty alerting, scheduled validation runs, and team collaboration features.

For small teams or individual projects, starting with the open-source version and migrating to Cloud as the team grows or collaboration needs arise is a natural path. This is also GX's open-source-to-enterprise upsell strategy.

## What GX Does Well vs. Where It Falls Short — An Honest Assessment

Adopt GX as a silver bullet, and you will be disappointed within six months. Understanding both its strengths and limitations clearly is the only way to extract its real value. Acknowledging the limits honestly is the first step toward using GX well.

### 3.1 Where GX Excels

- •Structured data schema and statistical validation: For column types, null ratios, value ranges, and statistical distributions in CSV, Parquet, and SQL tables, GX is dominant. It can validate datasets with millions of rows at speed.
- •Pipeline gating: Checkpoints allow automatic pipeline halts on validation failure, preventing corrupted data from reaching model training or production.
- •Automated documentation (Data Docs): Validation results automatically become HTML documents — a single source of truth for team sharing, audit trails, and regulatory compliance.
- •Ecosystem integration: Official integrations with Airflow, Dagster, Vertex AI, and dbt are supported. A dedicated Dagster library is also available (currently in legacy mode; v1.x migration recommended).
- •Synthetic data statistical validation: GX can automatically verify whether synthetic data generated by tools like DataGreenhouse preserves the original data's per-column mean, standard deviation, value range, and null ratio.

### 3.2 Where GX Falls Short — The Blind Spots in ML Training Data

In Akande et al.'s survey of data quality tools (arXiv 2406.19614, 2024), only 4 out of 17 tools reviewed were designed specifically for ML. GX was not among them. GX is powerful, but it was never built as a dedicated ML training data tool.

Here are the structural limitations in detail:

| Validation Type | GX | Better Tool |
| --- | --- | --- |
| Structured data schema, null, range validation | Strength | — |
| Pipeline gate (auto-halt on failure) | Strength | — |
| Auto-documentation, audit trail | Strength | — |
| Synthetic data distribution validation | Capable | — |
| Image/audio visual quality diagnosis | Not supported | DataClinic |
| AI-driven class imbalance diagnosis | Not supported | DataClinic |
| Automatic label corruption detection | Not supported | DataClinic, Cleanlab |
| Post-serving drift detection | Weak | Evidently AI, Arize AI |
| Spark large-scale processing optimization | Performance issues reported | — |

### 3.3 Real User Pain Points — The "Abandoned After Six Months" Pattern

There are recurring churn patterns reported in the GX community. Addressing them honestly rather than glossing over them leads to smarter adoption decisions.

- •Expectations overload: Creating too many Expectations at once during initial adoption causes a maintenance burden that spirals out of control. You end up with a sprawling list that nobody manages. Start with the 10-20 that actually matter.
- •v0 to v1 migration confusion: Multiple cases have been reported of teams getting stuck on API mismatches when trying to configure v1.x based on v0.x tutorials. Always start from the official v1.x documentation.
- •Spark performance degradation: Cases of count/collect operations taking more than 2x longer on large Spark datasets have been reported. Performance testing before full deployment on Spark is strongly recommended.

> [!callout]
> When NOT to use GX: If you already use dbt and don't need source-layer validation, dbt-expectations may be sufficient. If non-technical users are the primary audience, Soda Core has a lower barrier to entry. If all you need is Pandas DataFrame type validation, Pandera is lighter. If post-serving monitoring is the primary objective, Evidently AI or Arize AI is a better fit.

## MLOps Data Quality Tool Landscape 2025 — Where GX Stands

When choosing a data quality tool, "Which one is better?" is the wrong question. "Which layer is each tool responsible for?" is the right one. Under the same umbrella of "data quality tools" sit tools with fundamentally different roles.

### 4.1 Open-Source Validation Tool Comparison

The following comparison is based on actual GitHub API metrics as of April 14, 2026.

| Tool | Target Data | Approach | Stars | Responsible Layer |
| --- | --- | --- | --- | --- |
| GX | Structured (CSV/SQL/Parquet) | Python Fluent API, rule-based | 11.4k | Source ingestion / ML pipeline |
| dbt Tests | Structured SQL | SQL declarative | 12.6k | SQL transformation layer |
| Soda Core | Structured | YAML/SodaCL declarative | 2.3k | Validation / monitoring |
| Pandera | Structured DataFrame | Python schema | 4.3k | Within analysis code |
| whylogs | Structured + semi-structured | Statistical profiling | 2.8k | Serving monitoring |
| DataClinic | Unstructured (images, etc.) | AI-driven diagnosis | Commercial | ML training data diagnosis |

### 4.2 Three Industry Shifts in 2025-2026

Three notable changes are reshaping the tool landscape.

- •WhyLabs acquired by Apple in January 2025: WhyLabs Inc.'s commercial operations have ceased. The whylogs open-source library continues to be maintained, but the WhyLabs SaaS product no longer exists. Referring to "WhyLabs" as an active competing commercial tool is now misinformation.
- •Soda Core v4 adopts Data Contracts (January 2026): Soda v4 moves beyond simple YAML checks by adopting Data Contracts as a first-class concept — formalizing data quality responsibilities between teams as contractual obligations. The paradigm: the team providing the data guarantees its quality through a contract.
- •dbt's built-in unit testing matures (2024): Since dbt Core 1.8, the built-in unit testing framework has been significantly strengthened. More teams are concluding that "dbt alone is enough," making the GX vs. dbt-expectations choice a real community debate.

### 4.3 Layer-Based Tool Selection Guide

The following principles can reduce selection confusion.

- •Validating data at source ingestion → GX
- •Post-SQL-transformation validation (dbt ecosystem) → dbt Tests or dbt-expectations
- •Accessibility for non-technical users → Soda Core
- •Type safety in Python data science workflows → Pandera
- •Post-serving drift monitoring → Evidently AI, Arize AI
- •ML training image/unstructured data quality diagnosis → DataClinic

A common production stack is GX (source ingestion / ML pipeline layer) + dbt Tests (SQL transformation layer) + Soda (continuous production monitoring). Because each tool handles a different layer, they form a complementary relationship rather than a competitive one.

## The Pebblous Perspective — A Dual Defense with GX + DataClinic

Once you understand both GX's strengths and its limitations, one question naturally follows: Who handles what GX cannot see — visual defects in images, class imbalance, label corruption, distribution drift?

### 5.1 Two Questions, Two Layers

An AI-Ready Data pipeline must answer two fundamentally different questions.

- •Layer 1 (GX): "Does this data conform to the expected format?" — Is the schema correct? Are there nulls? Are values within the allowed range? Data that passes the Checkpoint advances to the next layer.
- •Layer 2 (DataClinic): "Is this data fit to train an AI?" — Are there visual defects in the images? Is the class distribution severely imbalanced? Is there label corruption? These questions require AI-driven diagnosis.

What GX cannot catch is precisely what DataClinic detects. The two tools are not competitors — they operate as complementary layers.

### 5.2 Dual Defense Architecture

In a production AI-Ready Data pipeline, these two layers operate in sequence.

> [!callout]
> [Data Source] → GX Checkpoint  
>
>                                 ├── Schema validation  
>
>                                 ├── Null ratio validation  
>
>                                 ├── Statistical range validation  
>
>                                 └── Pass → DataClinic Diagnosis  
>
>                                     ├── AI-driven image quality diagnosis  
>
>                                     ├── Class imbalance analysis  
>
>                                     ├── Label corruption detection  
>
>                                     └── Pass → ML Pipeline

### 5.3 DataGreenhouse 3-Stage Flow

> GX also plays a key role in synthetic data generation workflows. After generating synthetic data with DataGreenhouse, GX can automatically verify whether the synthetic data's statistical properties preserve those of the original, and only data that passes validation enters the AI pipeline — a 3-stage flow.

> [!callout]
> DataGreenhouse (synthetic data generation)  
>
>                             → GX Checkpoint (statistical distribution validation)  
>
>                                 ├── Per-column mean/stddev preservation  
>
>                                 ├── Null ratio consistency  
>
>                                 └── Category distribution preservation  
>
>                             → AI Pipeline

### 5.4 "AI-Ready Data" — Where GX and Pebblous Converge

> GX's official blog features AI-Ready Data as its central message. "Only good data produces good AI models." This is the same proposition as Pebblous's brand philosophy: "Good models start with good data."

> The implication is clear. Understanding GX deeply means understanding the full scope of data quality problems. And the team that knows GX's limits also understands why a layer beyond GX is necessary. DataClinic starts where GX stops.

> The data quality tools market is projected to grow from approximately $2.78 billion in 2025 to $7.39 billion by 2031 (Mordor Intelligence, CAGR 17.7%). The MLOps market is expected to reach $16.6 billion by 2030 (Grand View Research, CAGR 40.5%). This growth signals that investing in data quality is shifting from optional to essential.

> The GX + DataClinic dual defense is a practical answer to what this era demands for AI-Ready Data pipelines. GX filters data that conforms to the expected format; DataClinic diagnoses whether data is fit for AI. Both questions must be answered for a truly AI-Ready Data pipeline to be complete.

## Frequently Asked Questions
