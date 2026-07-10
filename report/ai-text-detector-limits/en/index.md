---
title: 750 Out of 10,000 Are Wrongly Accused
subtitle: The Structural Failure of AI Text Detectors and the Shift in Educational Assessment
date: 2026-05-25
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 750 Out of 10,000 Are Wrongly Accused

_The Structural Failure of AI Text Detectors and the Shift in Educational Assessment_

## Executive Summary

> [!callout]
> The failure of AI detectors is not a matter of insufficient technology but a **mathematical inevitability** rooted in the inherent diversity of human writing. Garland (2026) demonstrates through a composite hypothesis testing framework that the simple fact that every student writes differently creates an unbreakable mathematical wall against detector performance. This wall holds even if AI models never improve at all, as long as the student population is sufficiently diverse.

> Concretely, maintaining 80% detection power means **at least 750 students out of 10,000** will be wrongly flagged for AI use (Theorem 1). Capping the false positive rate at 1% causes detection power to **collapse to just 6%**, catching only 6 out of every 100 AI-written papers (Theorem 2). Liang et al. (2023) showed that **61.22%** of TOEFL essays were misclassified as AI-generated, and Weber-Wulff et al. (2023) found that **none of the 14 tools tested achieved 80% accuracy**. By 2026, false positive harm has reached the courts, with a student winning the first lawsuit against a university over an AI detection ruling.

> This problem cannot be solved by building a better detector. The FPR-TPR tradeoff of AI detectors is structurally isomorphic to the precision-recall tradeoff in data quality diagnostics, demanding multidimensional assessment rather than single-classifier scores. The answer lies not in better detection technology, but in redesigning assessment systems that do not depend on detection at all.

<!-- stat-card -->
**61.3%** — TOEFL Essay False Positive Rate — Liang et al. 2023

<!-- stat-card -->
**~750** — Theoretical FP Floor per 10,000 — Garland Theorem 1

<!-- stat-card -->
**0 / 14** — Tools Reaching 80% Accuracy — Weber-Wulff et al. 2023

<!-- stat-card -->
**6%** — Detection Ceiling at 1% FPR — Garland Theorem 2

## Why This Matters — The Promise and Reality of AI Detectors

Since ChatGPT's launch in November 2022, fears about students using AI to complete assignments have swept through educational institutions worldwide. In response, commercial AI detection tools like Turnitin, GPTZero, and Originality.ai grew rapidly. **Turnitin alone deployed its AI detection feature to over 16,000 educational institutions**, with these tools uniformly marketing 98-99% accuracy.

Independent verification, however, paints a starkly different picture. When Weber-Wulff et al. (2023) independently tested 14 AI detection tools, **not a single one achieved 80% accuracy**. OpenAI launched its own text classifier in January 2023, but withdrew it just five months later after it detected only 26% of AI text while misclassifying 9% of human text. Turnitin's claimed FPR of under 1% was measured in controlled conditions; independent testing found general false positive rates of 2-5%, rising to 50-61% for non-native English speakers (ESL).

False positives are not mere "errors" because they change students' lives. In February 2026, Moira Olmsted, an autistic student at Adelphi University, was disciplined after Turnitin flagged her essay as 100% AI-generated. Two other detectors classified the same essay as human-written. The court ruled the school's decision was **"arbitrary and capricious"** and sided with the student. In May 2026, a Palo Alto high school student expelled over an AI detector false positive faced visa revocation and filed a federal civil rights lawsuit.

> [!callout]
> **The core question:** A severe gap exists between what detectors promise and what they can actually deliver. Whether this gap stems from technical immaturity or from a fundamentally insurmountable barrier is the starting point of this report.

## Core Paper Analysis — Garland (2026)'s Mathematical Framework

Garland (2026)'s paper "AI Detectors Fail Diverse Student Populations" (arXiv:2603.20254) reframes AI text detection as a composite hypothesis testing problem. To understand why this shift matters, we first need to see how unrealistic the assumptions of prior approaches were.

### 2.1 Simple vs. Composite Hypothesis: The Unrealistic "Known Human Distribution" Assumption

Prior work, including Sadasivan et al. (2023), modeled AI detection as a **simple hypothesis test** by setting the null hypothesis $H_0$ as "the text comes from a single, known human distribution $p$." Under this assumption, they showed that as LLMs converge toward the human distribution, total variation (TV) distance shrinks and detection becomes impossible.

But in reality, "human writing" is not a single distribution. With 10,000 students come 10,000 distinct writing distributions. A student whose first language is Korean, one whose first language is English, an autistic student, and students in law versus creative writing each exhibit different vocabularies, sentence structures, and perplexity profiles. Garland redefines the null hypothesis as $H_0: \theta \in \Theta$ — meaning the text comes from **one of many unknown, student-specific distributions $p_{\theta_i}$**. This is composite hypothesis testing.

![Diagram comparing simple hypothesis testing (prior work) vs. composite hypothesis testing (Garland 2026). Left: prior theory assumes a single human distribution p_H and a single AI distribution p_M. Right: real university settings have student-specific writing distributions p_theta, and the detector cannot know which one.](https://arxiv.org/html/2603.20254v1/x1.png)
*Figure 1 (Garland 2026, Figure 1): Prior work (left) assumes a "single known human distribution," but real university settings (right) feature a composite null hypothesis structure where each student has a unique writing distribution. Non-native speakers and students with specialized coursework may have distributions whose TV distance to the AI distribution is very small.*

### 2.2 Theorem 1: Average-Case Bound — Want Detection Power? Accept False Positives.

Garland's first theorem proves a lower bound on a detector's average false positive rate (FPR). The key inequality follows.

Understanding the variables makes the inequality's meaning clear. $\bar{\alpha}$ is the average FPR across the entire student population, $\pi(\Theta^*)$ is the fraction of students whose natural writing overlaps with AI output within TV distance $\delta^*$, and $\beta_0$ is the detector's target detection power (true positive rate). Intuitively, this inequality formalizes the structural relationship: the more students who write similarly to AI, and the higher the detection power target, the more innocent students will inevitably be flagged.

Theorem 1 (Average-Case Bound)

$$\bar{\alpha} \;\geq\; \pi(\Theta^*)\,(\beta_0 - \delta)$$

Here $\bar{\alpha}$ is the average FPR, $\pi(\Theta^*)$ is the fraction of students within TV distance $\delta^*$ of AI output, $\beta_0$ is the target detection power, and $\delta$ is the tolerance. This inequality means the FPR is **bounded from below** by the product of "the share of AI-similar writers" and "detection power." No algorithm, however brilliant, can push below this floor.

![Garland 2026 Figure 2: Heatmap showing the lower bound of average FPR across the parameter space when detection power is held at 80%. Higher AI-similar student fractions and larger TV distance tolerances yield higher FPR floors.](https://arxiv.org/html/2603.20254v1/x2.png)
*Figure 2 (Garland 2026, Figure 2): With detection power fixed at $\beta_0 = 80\%$, this graph shows the average FPR lower bound across the full parameter space $(\pi(\Theta^*), \delta)$. The FPR floor rises as the AI-similar student fraction and TV distance tolerance increase. The point at 10% / $\delta$=0.05 corresponds to the "750 students" scenario.*

Numerical Scenario
                            In a 10,000-student institution with AI-similar student fraction $\pi(\Theta^*) = 10\%$, target detection power $\beta_0 = 80\%$, and tolerance $\delta = 0.05$: $\bar{\alpha} \geq 0.10 \times (0.80 - 0.05) = 7.5\%$. That means **at least 750 students** are wrongly suspected of using AI. This is the best case; the actual number may be higher.

### 2.3 Theorem 2: Worst-Case Bound — Suppress False Positives, Lose Detection Power

If Theorem 1 says "want detection power? accept false positives," Theorem 2 proves the converse. When an individual student's FPR is capped at $\alpha_0 = 1\%$ and the TV distance between student and AI output is $\delta^* = 0.05$ or less, the upper bound on detection power is:

This theorem analyzes the worst case. When a student exists whose natural writing is statistically closest to AI output, guaranteeing that student's FPR stays below $\alpha_0$ means detection power $\beta$ cannot exceed $\alpha_0 + \delta^*$. The striking insight is that simply adding two numbers — the FPR cap and the TV distance — gives the ceiling of detection capability.

Theorem 2 (Worst-Case Bound)

$$\beta \;\leq\; \alpha_0 + \delta^* = 1\% + 5\% = 6\%$$

**Only 6 out of 100 AI-generated texts are caught.** Suppressing false positives effectively disarms detection. This tradeoff is not a "design flaw" but a mathematical necessity arising from the structure of composite hypothesis testing.

### 2.4 Theorem 3: Subgroup Mixture Bound — The Mathematical Structure of Demographic Discrimination

Theorem 3 partitions the student population into subgroups (non-native speakers, native speakers, etc.) and proves that when a particular subgroup's writing distribution is closer to AI output (smaller TV distance), that group's FPR is structurally elevated. This is **discrimination** that arises automatically from the geometric arrangement of distributions, regardless of the detector developer's intent.

### 2.5 Two Independent Sources of Detection Failure

Garland's most important contribution is separating detection failure into two distinct sources. **First, AI quality convergence:** as LLMs approach the human distribution, TV distance shrinks. Sadasivan et al. (2023) already identified this, and watermarking can partially address it. **Second, population diversity:** even if AI models never improve, a sufficiently diverse student cohort guarantees that some students' natural writing overlaps with the AI output region. This second source is a structural barrier independent of technology, insurmountable by any algorithm.

> [!callout]
> **Key takeaway:** This limit comes from mathematics, not technology. Even if AI stays exactly where it is, human diversity alone makes detection structurally impossible.

## Who Gets Hurt the Most — Structural Inequality for Non-Native and Neurodivergent Students

The structural discrimination predicted by Garland's Theorem 3 is already observable at scale. The most compelling empirical evidence comes from Liang et al. (2023)'s Stanford study.

### 3.1 61.22% of TOEFL Essays Misclassified — Liang et al. (2023)

The research team tested 91 non-native TOEFL essays against 7 AI detectors. The results were alarming: an average of **61.22%** were misclassified as AI-generated, and **97.8% (89 essays)** were flagged by at least one detector. The share flagged unanimously by all detectors reached **19.8%**.

The study's decisive contribution lies in a causal reverse experiment. When native-speaker essays were rewritten with non-native-style simple vocabulary and structure, the false positive rate **surged from 5.19% to 56.65%**. This demonstrates that detectors are not detecting "AI-ness" but "simplicity." The fact that non-native speakers' clear, concise writing statistically overlaps with AI's polished output is not their fault but a structural problem arising from the geometric arrangement of distributions.

![Liang et al. 2023 Figure 1: FPR comparison of 7 AI detectors on TOEFL non-native essays vs. US college admission essays. Non-native essays averaged 61% misclassification while native essays showed low FPR.](https://arxiv.org/html/2304.02819v3/x1.png)
*Figure 3 (Liang et al. 2023, Figure 1): FPR comparison of 7 AI detectors on non-native (TOEFL) vs. native (US college admission) essays. The average FPR for non-native essays is 61.22%, starkly different from native essays (5.19%). Simple vocabulary and repetitive structure statistically overlap with AI writing patterns. (Source: arXiv:2304.02819)*

### 3.2 Detectors Deemed "Unfit" for EFL Learners — Hadra et al. (2026)

Hadra et al. (2026) evaluated AI detector results on EFL (English as a Foreign Language) learners' writing and concluded that the tools are "unfit as authoritative arbiters" for this population. Non-native learners' low perplexity (predictable word choices), repetitive structure, and limited vocabulary systematically overlap with the statistical properties of AI output.

### 3.3 Korean Students — A Structurally At-Risk Group

When Korean university students write papers or assignments in English, the situation is structurally identical to the conditions in Liang et al.'s experiment. The hallmarks of English academic writing by Korean-language-native students — relatively simple vocabulary, repetitive formal expressions, preference for short sentences over complex subordinate clauses — are precisely the patterns AI detectors interpret as signals of "AI-ness." Korean students studying at overseas universities face structural false positive risk equal to or greater than other non-native groups.

### 3.4 The Repetitive Patterns of Neurodivergent Students

Neurodivergent students — those on the autism spectrum, with ADHD, or with dyslexia — tend toward repetitive expression patterns, formal diction, and limited vocabulary range. As the Adelphi University case of Moira Olmsted shows, these writing characteristics trigger AI detector false positives. **One tool flagged 100% AI while two others classified the same essay as human-written**, starkly revealing the inconsistency among detectors.

> [!callout]
> **Key takeaway:** The statistical overlap between non-native speakers' "clear writing" and AI's "polished writing" is a structural problem, not their fault. Detectors are detecting "simplicity," not "AI-ness," and this limitation is a mathematical consequence of Garland's Theorem 3.

## Detection Technology: Current State and Structural Limits

Current AI text detection technology falls into three main approaches. Let us examine the principles and structural limitations of each.

### 4.1 Perplexity-Based Detection

The core assumption of early detectors was that "AI-generated text has lower perplexity." Since AI predicts next tokens with high probability, the reasoning went, its output should have lower perplexity (prediction uncertainty) than human writing. DetectGPT (Mitchell et al. 2023) leveraged this principle as a zero-shot detection method. However, this assumption breaks down for two reasons. First, formal academic writing and non-native speakers' concise prose also exhibit low perplexity. Second, modern LLMs deliberately increase diversity to produce human-like perplexity profiles.

### 4.2 Neural Network Classifiers

Most commercial tools — Turnitin, GPTZero, Originality.ai — use supervised neural network classifiers, trained on large volumes of human and AI text for binary classification. The fundamental problem is training data bias and generalization failure across new models. A classifier trained on GPT-4 output suffers dramatic performance drops on Claude or Gemini output, leaving it perpetually one step behind in the detection-evasion arms race.

### 4.3 Watermarking: The Only Mathematical Guarantee, but Not a Universal Solution

KGW watermarking (Kirchenbauer et al. 2023) and Google DeepMind's SynthID-Text (Vyas et al. 2024) embed statistical watermarks at text generation time. Under selective prediction, SynthID achieved TPR 95% / FPR 1% — the only post-hoc detection method with a mathematical FPR guarantee.

However, four structural limitations prevent universal adoption.

- •**Requires generator cooperation** — Watermarks must be embedded at generation time, making them impossible without cooperation from API providers (OpenAI, Google, etc.).
- •**Does not cover open-source/local models** — There is no way to embed watermarks in locally run models like Llama or Mistral.
- •**Vulnerable to paraphrasing/translation** — Sadasivan et al. (2023) demonstrated that recursive paraphrasing can remove watermarks, and showed that spoofing is possible with 92.5% green-list overlap.
- •**Cannot be applied retroactively** — Watermarks cannot be added to already-generated text, leaving previously submitted assignments unverifiable.

### 4.4 Six Commercial Tools Compared

The gap between marketing claims and independent verification for major commercial AI detection tools is summarized below. The "Self-Claimed FPR" column shows the false positive rate each tool promotes in official marketing, while "Independent FPR" reflects rates measured by third-party researchers outside controlled environments. The "ESL Performance" column shows false positive rates for non-native speakers — the sharp increase here directly corresponds to the structural discrimination predicted by Garland's Theorem 3.

| Tool | Self-Claimed FPR | Independent FPR | ESL Performance | Notes |
| --- | --- | --- | --- | --- |
| Turnitin | <1% | 2-5% | 50-61% FP | 16,000+ institutions. Admits 15% FPR tolerance for 85% TPR |
| GPTZero | 1% FPR / 99% recall | Controlled conditions only | 55-75% on humanized text | Controlled 99.3% vs. real-world gap |
| Originality.ai | ~99% | Lacks independent testing | No systematic data disclosed | Subscription-based. Aggressive marketing |
| Copyleaks | ~99% | Undisclosed | No ESL-specific benchmarks | Claims multilingual support |
| Pangram Labs | AUC 0.98+ | Includes ESL benchmark | Relatively better (self-reported) | EditLens model. Used in ICLR 2026 analysis |
| OpenAI (withdrawn) | - | TPR 26% / FPR 9% | - | Launched Jan 2023, withdrawn 5 months later |

************************

The pattern this matrix reveals is clear. There exists a gap of **several- to tenfold** between self-reported and independently verified metrics, and most tools either avoid disclosing ESL performance or lack systematic data entirely.

### 4.5 The Rise of Humanization Tools and the Arms Race

Alongside detector advances, tools that "humanize" AI text — making it look human-written — have grown rapidly. Research such as MASH (arXiv:2601.08564) demonstrates style transfer techniques that evade detectors. This means the detection-evasion arms race is inherently unending. When a detector learns a new pattern, an evasion tool finds a new bypass, and this cycle repeats indefinitely.

> [!callout]
> **Key takeaway:** All three approaches have structural limits, and the rise of humanization tools makes a detection-evasion arms race inevitable. Only watermarking offers a mathematical guarantee, but it cannot serve as a universal solution.

## A Data Quality Reinterpretation — The Trustworthiness of AI Judgments

An AI detector's output is fundamentally "data." A verdict like "this text has an 87% probability of being AI-written" is a single data point, and if the quality of that data point is unverified, it should not be used as the basis for decision-making. Reinterpreting the AI detector problem through a data quality framework maps it onto familiar concepts.

### 5.1 FPR-TPR Tradeoff = Precision-Recall Tradeoff

The FPR-TPR tradeoff proven by Garland's Theorems 1 and 2 is mathematically isomorphic to the precision-recall tradeoff in classifier evaluation. Raising detector sensitivity (improving recall) increases false positives (lowering precision); suppressing false positives (improving precision) collapses detection power (lowering recall). This is a universal dilemma that appears identically in data quality diagnostics. When detecting outliers in a dataset, increasing sensitivity likewise raises the rate of normal data misclassified as outliers.

### 5.2 Diagnosing Detectors Through the Five Dimensions of Data Quality

Applying DataClinic's five-dimensional data quality framework to AI detectors reveals failures across every dimension. The five dimensions are Accuracy, Completeness, Consistency, Lineage, and Bias — a framework for verifying whether data is trustworthy before being used for decision-making. The "Question Applied to Detectors" column below translates each dimension into the AI detection context, while the "Reality" column fills in each dimension with the empirical evidence reviewed in this report.

| Quality Dimension | Question Applied to Detectors | Reality |
| --- | --- | --- |
| Accuracy | Does the detection result correctly identify the true author? | Turnitin FPR: self-reported <1% vs. independent 2-5% vs. ESL 50-61% |
| Completeness | Does it catch all AI-generated text? | Theorem 2: detection power drops to 6% when FPR capped at 1% |
| Consistency | Does it produce consistent results for the same text? | Adelphi case: Turnitin 100% AI vs. two other tools classifying as human |
| Lineage | Is the basis for the verdict traceable? | Most are black boxes. Only probability scores provided |
| Bias | Does differential performance exist across subgroups? | Theorem 3: structurally inevitable. ESL 61% vs. native 5% |

********************

**Not a single dimension passes.** The failure of the "Bias" dimension is especially significant: it is mathematically inevitable under Garland's Theorem 3, revealing a fundamental limitation of single-score-based detectors. To make detector output trustworthy data, multidimensional diagnosis beyond single-classifier scores is necessary.

This structure is isomorphic to the thesis "reviews are data too" from Pebblous's previously published [ICLR 2026 Peer Review Report](/report/iclr-2026-ai-peer-review-crisis/en/). Just as AI reviewer quality in academic peer review can be diagnosed through the same five dimensions, AI detector verdicts must also be treated as verifiable data.

## Alternatives — An Assessment Paradigm Beyond Detection

Now that the structural limits of detection have been mathematically proven, the solution lies not in improving detection technology but in redesigning assessment systems. Global educational institutions are already beginning this transition. Curtin University (Australia) deactivated Turnitin's AI detection feature in January 2026, Vanderbilt University chose not to adopt AI detection tools from the start, and the University of Melbourne banned using detector scores as sole evidence.

### 6.1 Garland's Audit Protocol: Transitional Practical Guidelines

In Section 4.5 of the paper, Garland (2026) proposes a transitional audit protocol for institutions that cannot immediately discontinue AI detectors.

- •**Build a stratified corpus** — Report FPR separately for each subgroup: non-native speakers, neurodivergent students, discipline-specific cohorts, etc.
- •**Restrict deployment by assignment type** — Do not use detectors on formulaic assignments (500-word summaries, etc.). Use them only as supplementary tools for open-ended or reflective assignments.
- •**Identify appropriate combinations** — Pre-test which "subgroup + assignment type" combinations yield meaningful detector performance.

### 6.2 Process-Based Assessment: Evaluating the Journey, Not Just the Destination

Unlike detectors that judge only the final product, process-based assessment uses the entire writing journey as evidence.

- •**Draft history tracking** — Record the student's idea development process (outlines, drafts, revision history).
- •**Oral defense** — Have students verbally explain their writing. It is difficult to deeply explain text generated by AI.
- •**Longitudinal writing profiles** — Track writing style changes over the semester to detect sudden stylistic shifts.

### 6.3 Assignment Redesign: Widening the Distribution Gap

The most direct alternative suggested by Garland's theoretical framework is redesigning assignments themselves. Constrained assignments (formulaic summaries, short answers) narrow the gap between student and AI distributions, making detection harder. In contrast, open-ended assignments (personal experience-based reflections, locally contextualized analysis, metacognitive writing about the learning process) require students to draw on unique personal experiences, widening the statistical separation from AI distributions.

### 6.4 Practical Recommendations for Korean Educational Institutions

Major Korean universities (Korea University, Yonsei University, Seoul National University, KAIST, Sungkyunkwan University) currently prioritize educational approaches over formal adoption of AI detection tools. Korea University established the country's first ChatGPT usage guidelines, and the Ministry of Education distributed "Guidelines for AI Use in Teaching and Assessment" in February 2026.

Based on this report's analysis, the following practical recommendations apply to Korean educational institutions.

- •**Do not blanket-apply AI detectors to English assignments** — Korean students' English writing is a structural false positive risk group. Institutions must recognize the mathematical basis of Garland's Theorem 3.
- •**Institutionalize the multiple-evidence principle** — Explicitly prohibit using detector scores as the sole evidence of academic dishonesty and guarantee students the right to defend themselves.
- •**Innovate assignment design** — Expand open-ended, reflective, and context-specific assignments to create an assessment environment where detection is unnecessary.

> [!callout]
> **Key takeaway:** The answer is not a better detector but an assessment system where detection is unnecessary. The goal of education is learning itself, not catching cheaters, and assessment design must serve that goal.

## Why Pebblous Cares About This Research

The AI detector problem is not confined to education. It is one facet of a more fundamental question — **how do we measure and guarantee the reliability of AI outputs?** — and is structurally isomorphic to the very problem Pebblous tackles through DataClinic.

### Business/Technical Connection: The Same Mathematical Structure

An AI detector is a binary classifier. DataClinic faces an identical binary classification challenge when diagnosing label quality in training datasets. The FPR-TPR bounds under composite hypotheses proven by Garland (2026) — "the more diverse the population, the more structural false positives become inevitable" — have the same mathematical structure as the precision-recall tradeoff DataClinic encounters when diagnosing datasets across diverse domains. When AI-Ready Data defines "data on which models can safely learn and infer," the mathematical foundation of that "safety" is precisely the total variation distance this paper addresses.

### Data Quality Perspective: The Danger of Single Scores

As Section 5 demonstrated, diagnosing detector output through DataClinic's five dimensions reveals failure across all five. What this diagnosis implies is that **every AI judgment system that relies on a single classifier score** is exposed to the same risk. Autonomous vehicle object recognition, medical AI diagnostic assistance, financial AI fraud detection — all operate under the precision-recall tradeoff, with structurally possible subgroup biases.

### Practical Implications for Clients and Partners: The Need for Stratified Audits

When Pebblous clients (public sector, education, and enterprise AI-adopting organizations) deploy AI detection tools or, more broadly, verify the reliability of AI outputs, the principles from Garland's audit protocol — report performance separately by subgroup, never use a single score as the sole basis for decisions, and restrict the application context — align precisely with DataClinic's diagnostic philosophy.

### Questions for Future Exploration

The questions raised by this research extend beyond AI detection.

- •Can FPR bounds under composite hypotheses be directly applied to data quality diagnostics? When DataClinic diagnoses data across diverse domains, can Garland's mathematical framework predict the theoretical limits of diagnostic accuracy?
- •What methodology can automatically diagnose the "bias" dimension of AI outputs? Can the differential subgroup performance predicted by Theorem 3 be detected without labeled subgroup information?
- •Unifying "reviews are data too" (ICLR report) and "detector verdicts are data too" (this report) — how can we design a quality assurance (QA) framework for AI outputs in general?

The structural limits of AI detectors are not a problem that "building a better detector" can solve. This is one chapter of a larger question — **how do we verify the reliability of AI outputs multidimensionally?** — and it serves as external proof of why DataClinic's five-dimensional diagnostic approach must go beyond single classifier scores.

## Frequently Asked Questions

## References

### Core Papers

1. Garland, N. (2026). "AI Detectors Fail Diverse Student Populations: A Mathematical Framing of Structural Detection Limits." arXiv:2603.20254.
2. Sadasivan, V. S. et al. (2023). "Can AI-Generated Text be Reliably Detected?" arXiv:2303.11156. TMLR.
3. Liang, W. et al. (2023). "GPT Detectors Are Biased Against Non-Native English Writers." **Patterns** 4(8), 100779. arXiv:2304.02819.
4. Ganie, A. G. (2025). "Uncertainty in Authorship: Why Perfect AI Detection Is Mathematically Impossible." arXiv:2509.11915.
5. Kirchenbauer, J. et al. (2023). "A Watermark for Large Language Models." ICML 2023. arXiv:2301.10226.
6. Vyas, N. et al. (2024). "Scalable watermarking for identifying large language model outputs." **Nature** 634. SynthID-Text.
7. Weber-Wulff, D. et al. (2023). "Testing of detection tools for AI-generated text." IJEI 19(1), 26. arXiv:2306.15666.
8. Mitchell, E. et al. (2023). "DetectGPT: Zero-Shot Machine-Generated Text Detection using Probability Curvature." ICML 2023. arXiv:2301.11305.
9. Hadra et al. (2026). Study on AI detector evaluation for EFL learners.

### Independent Benchmarks

1. Jabarian, F. & Imas, A. (2025). "Artificial Writing and Automated Detection." Chicago Booth BFI Working Paper 2025-116.
2. Perkins et al. (2024). Comparative study of AI detection sensitivity.

### Industry/Policy Sources

1. Curtin University (2026). ["Update on Turnitin AI-Detection Tool."](https://www.curtin.edu.au/news/oasis-news/update-on-turnitin-ai-detection-tool/)
2. OpenAI (2023). ["New AI classifier for indicating AI-written text."](https://openai.com/index/new-ai-classifier-for-indicating-ai-written-text/)
3. Turnitin (2025). "AI detector shows no bias against ELLs." Turnitin Blog.
4. University of Melbourne (2024). Academic Integrity AI policy.
5. Vanderbilt University (2024). Academic Integrity and Generative AI.
6. Korea University (2023). [ChatGPT Usage Guidelines.](https://www.korea.ac.kr/bbs/ko/42/70858/artclView.do)
7. Korea Ministry of Education (2026). Guidelines for AI Use in Teaching and Assessment.

### Press Coverage

1. Inside Higher Ed (2026-02-11). "Adelphi Student Wins AI Plagiarism Lawsuit."
2. SF Standard (2026-05-11). "Palo Alto high schooler accused of AI cheating."
3. Yale Daily News (2025-02-24). "SOM student sues Yale."
4. Bloomberg (2024-10-18). "Do AI Detectors Work?"
5. Washington Post (2023-08-14). Investigation report on AI detection false positives.
6. The Markup (2023-08-14). "AI Detection Tools Falsely Accuse International Students."
7. TechCrunch (2023-07-25). "OpenAI scuttles AI-written text detector."

### Detection Evasion

1. arXiv:2601.08564 (2026). "Evading Black-Box AI-Generated Text Detectors via Style Humanization." (MASH)
