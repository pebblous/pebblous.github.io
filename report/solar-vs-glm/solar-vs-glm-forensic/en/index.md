---
date: January 1, 2026
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

Controversy resolved through proactive verification by Upstage and the community

✅Controversy Resolved: Accuser apologized and repository closed

## Executive Summary

> [!callout]
> In December 2025, Sionic AI raised allegations that Upstage's Solar-Open-100B model was derived from Zhipu AI's GLM-4.5-Air, sparking a major controversy in the Korean AI industry. The key evidence was a statistical analysis showing that the Cosine similarity of LayerNorm weights between the two models reached 0.989 (182 sigma).

> In response, Professor Hyunwoong Ko demonstrated that similar similarity levels also appeared with a third model (Microsoft Phi-3.5-MoE), arguing this could be explained by structural convergence in RMSNorm. Subsequently, Professor Kyunghyun Cho (NYU) conducted a Pearson correlation analysis revealing the actual correlation between the two models was only 0.0054, delivering a verdict of "Weak Evidence, Inconclusive."

> On January 2, 2026, Upstage's public verification session revealed W&B training logs and checkpoints, proving independent development at the 99.9996% level. Afterward, Sionic AI's CEO posted an official apology and closed the original repository, completely resolving the controversy. This case stands as an exemplary demonstration of the importance of scientific methodology in model forensics and transparent verification in the era of LLM open weights.

## Summary (Executive Summary)

This report examines the controversy over whether South Korean AI company **Upstage**'s **Solar-Open-100B** model
                        was derived from Chinese Zhipu AI's **GLM-4.5-Air** model.
                        The dispute progressed from initial allegations, through circumstantial rebuttals, to a technical resolution via **Professor Kyunghyun Cho (NYU)'s statistical verification**.

| Phase | Actor | Core Claim | Situation |
| --- | --- | --- | --- |
| 1. Allegation | Sionic AI | "The code is identical, and the weight similarity is 0.99. This is 100% copied." | 🚨 Solar in crisis |
| 2. Rebuttal | Hyunwoong Ko | "MS Phi-2 has the same code too. It's just a standard template." | 🛡️ Counterattack begins |
| 3. Verification | Prof. Kyunghyun Cho | "The 0.99 weight similarity is merely a mathematical artifact. The actual pattern (Pearson) is different." | ⚖️ Resolved |

********

**Final Conclusion:**
                            Professor Kyunghyun Cho's Pearson correlation analysis yielded **0.0054** — statistically proving that the weight patterns of the two models
                            have **no correlation whatsoever (independent training)**.
                            The accuser subsequently posted an apology and closed the repository.

<!-- stat-card -->
****"Weak Evidence, Inconclusive"** — Sionic AI's claims are insufficient and inconclusive.**

## Background

### Models Under Analysis

The key players in this controversy are **Solar-Open-100B (Upstage)** and **GLM-4.5-Air (Zhipu AI)**,
                        along with the control model **Phi-3.5-MoE (Microsoft)**.
                        All three models adopt the MoE architecture and RMSNorm, making this structural commonality a key variable in the debate.

| Model Name | Developer | Parameters | Architecture Features |
| --- | --- | --- | --- |
| Solar-Open-100B | Upstage (South Korea) | ~100B | MoE, 48 Layers, Presumed DUS technique |
| GLM-4.5-Air | Zhipu AI (China) | 106B | MoE, 46 Layers, 96 Heads |
| Phi-3.5-MoE | Microsoft (USA) | ~42B | MoE, 32 Layers, Control model |

### Sources of the Controversy

#### Derivation Hypothesis (Sionic AI)

<!-- stat-card -->
**sionic-ai/solar-vs-glm**

#### Independence Hypothesis (Hyunwoongko)

<!-- stat-card -->
**hyunwoongko/solar-vs-glm-vs-phi**

## Claim Reconstruction and Comparison

The table below compares the **core claims**, **key evidence**, and **blind spots** of the derivation hypothesis (Sionic AI) and the independence hypothesis (Hyunwoong Ko).
                        Sionic AI centers on the **"182-sigma outlier"** in LayerNorm, while Professor Hyunwoong Ko argues for **"RMSNorm structural convergence."**

| Category | Sionic AI (Derivation Hypothesis) | Hyunwoongko (Independence Hypothesis) |
| --- | --- | --- |
| Core Claim | Solar is derived from GLM, evidenced by abnormal same-layer LayerNorm similarity (≈0.989) and selective preservation | RMSNorm has low information content and strong structural constraints, so high Cosine similarity is an architectural inevitability (convergence), not evidence of plagiarism |
| Key Evidence | • Same-layer LN Cosine ≈ 0.99                                         • 182σ above internal model baseline (0.377)                                         • "Selective preservation" pattern | • 0.9+ similarity also occurs between Phi-3.5-MoE and GLM                                         • LN similarity of 0.99 observed across other models                                         • RMSNorm vector direction bias characteristics |
| Blind Spots | Decisive evidence relies excessively on low-information parameters (LayerNorm). Mathematical properties of RMSNorm not considered | Does not directly refute the near-zero Attention/MoE similarity (evidence of retraining). No explanation for why "selective preservation" occurs |

********  
****  
  
  
****

## Key Questions Requiring Cross-Verification

The key to resolving this controversy is whether similarity remains high in **"high-information tensors (Attention/MoE)"** as well.
                        The derivation hypothesis asks "Does the selective preservation pattern hold?", while the independence hypothesis asks "Is Solar-GLM significantly closer than Solar-Phi?"
                        The two questions below essentially require the **same experiment**, and the results will either strengthen the derivation hypothesis or confirm the independence hypothesis.

#### Derivation Verification Question

<!-- stat-card -->
**"Does the selective preservation pattern (LN is identical, everything else differs) persist when we remove RMSNorm's mathematical properties and
                                compare **high-information tensors (Attention Weights)**?"**

#### Independence Verification Question

<!-- stat-card -->
**"When excluding RMSNorm, is the distance between Solar and GLM
                                **statistically significantly closer** than the distance between Solar and Phi?"**

**Combined Verification Framework:**
                            Retain Sionic's "selective preservation" hypothesis, but change the target variables from RMSNorm to
                            **Attention / MoE / FFN** and perform a
                            three-way comparison of Solar-GLM-Phi.

#### Outcome A (Derivation Strengthened)

<!-- stat-card -->
**Solar-GLM similarity in high-information tensors is significantly higher than with other models**

#### Outcome B (Independence Confirmed)

<!-- stat-card -->
**Similarity across all models in high-information tensors is low or comparable**

## Detailed Data Analysis of Each Claim

### Derivation Hypothesis: "The Shock of 182 Sigma"

Sionic AI's analysis reveals extreme similarity differences across tensor types.
                        The table below shows the per-tensor Cosine similarity between Solar-Open-100B and GLM-4.5-Air.

| Tensor Type | Cosine Similarity | Sionic's Interpretation | Notes |
| --- | --- | --- | --- |
| input_layernorm | 0.949 | Original preserved | Structural skeleton |
| post_attention_layernorm | 0.986 | Original preserved | Structural skeleton |
| k_proj / v_proj | 0.001 | Retrained | Attention (intelligence) |
| mlp.gate | 0.004 | Retrained | MoE Router (intelligence) |
| embed_tokens | 0.002 | Retrained | Vocabulary expansion |

********

#### Sionic AI's Logic

<!-- stat-card -->
**If the models were independently trained, a 0.99 similarity could not occur by chance (P-value < 10^(-1000)).
                            Therefore, they **took the skeleton (LN) and swapped out only the muscles (Attn/MLP)**.**

### Independence Hypothesis: "The RMSNorm Trap"

Professor Hyunwoong Ko introduced a third model, Phi-3.5-MoE, to prove that this "similarity" is an illusion.
                        Below is the LayerNorm Cosine similarity matrix for the 10th layer.

| Model | Solar-Open | GLM-4.5-Air | Phi-3.5-MoE |
| --- | --- | --- | --- |
| Solar-Open | 1.000 | 0.9+ | 0.9+ |
| GLM-4.5-Air | 0.9+ | 1.000 | 0.9+ |
| Phi-3.5-MoE | 0.9+ | 0.9+ | 1.000 |

#### Key Observation

#### Cause Analysis

<!-- stat-card -->
**Even between completely different models (Phi vs GLM), LayerNorm similarity exceeds 0.9.** — As training progresses, RMSNorm converges toward specific scale values, causing vector directions to become similar --
                            a phenomenon known as **"structural convergence."**
                            Therefore, LN similarity cannot serve as a model's "fingerprint."

## Professor Kyunghyun Cho's Final Verdict

World-renowned AI scholar **Professor Kyunghyun Cho (NYU)** reanalyzed the central issue of "cosine similarity 0.99."
                        The comparison cards below show the difference between **Raw Cosine (0.99, illusion)** and **Pearson Correlation (0.0054, actual pattern)**,
                        while the final verdict table delivers **"Not guilty (industry practice)"** and **"Not guilty (statistically proven)"** for the code and weight issues respectively.

### Detailed Data Analysis

#### Raw Cosine (The Truth Behind 0.99)

- LayerNorm/RMSNorm weights inherently have values close to **1.0**
- Even randomly comparing different layers yields a similarity of **0.95**
- In other words, **0.99 is a "naturally high value"**, not evidence of copying (Uninformative)

#### Pearson Correlation (Evidence of 0.00)

- Measures how similar the **weight "patterns"** are, not absolute magnitude
- Result: **0.0054**
- Indicates the weight patterns of the two models have **no correlation at all (independent)**

#### 📊
                            What is Pearson Correlation? (Beginner's Guide)

##### Example: High correlation (r ≈ 0.99)

##### Example: No correlation (r ≈ 0)

### "Weak Evidence, Inconclusive"

| Issue | Accusation (Copied!) | Defense & Verification (Not true!) | Final Verdict |
| --- | --- | --- | --- |
| Code | "The code is identical to GLM, down to every detail!" | "MS Phi-2 is identical too. It's because they used an industry-standard template." | ✅ Not Guilty (Industry Practice) |
| Weights | "The vector cosine similarity is 0.99! Case closed!" | [Prof. Kyunghyun Cho] "LayerNorm inherently produces high values. The pattern (Pearson) shows 0.00." | ✅ Not Guilty (Statistically Proven) |

## Conclusion: The Essence and Resolution of the Controversy

1. **1. Sionic AI:** "Numbers (0.99) don't lie! They copied it!"
2. **2. Hyunwoong Ko:** "MS's code is identical too. Stop making false accusations."
3. **3. Prof. Kyunghyun Cho:** "0.99 is an artifact. When examined statistically, **they are indeed different models. Case closed.**"

### Technical Conclusion

## Epilogue: Resolution of the Controversy

### Upstage's Public Verification

- Held a **public verification session** in Gangnam, Seoul
- CEO Sunghun Kim + core engineers + external experts attended
- Disclosed **W&B training logs** and **intermediate checkpoints**
- Only **0.0004% of total parameters showed similarity** → Proved **99.9996% independent development**

### Accuser's Apology

- Sionic AI CEO Seokhyun Ko posted an apology via **LinkedIn**
- "_I raised allegations without sufficient verification_"
- "_LayerNorm cosine similarity alone is insufficient to determine model weight reuse_"
- Official apology to Upstage CEO Sunghun Kim and team members

### Original Repository Closed

### Controversy Resolution Summary

## Lessons from This Controversy

#### Lessons for Analysts

#### Lessons for Developers

#### Lessons for the Community

## Frequently Asked Questions (FAQ)

## Report Download

### Forensic Analysis of the Solar-Open-100B vs GLM-4.5-Air Model Derivation Controversy

## References

1. [1]
                            Solar-Open-100B vs GLM-4.5-Air: Weight Derivation Analysis (Derivation Hypothesis) - Sionic AI GitHub.
                            [404 - Repository Closed]
2. [2]
                            Solar vs GLM vs Phi: Structural Convergence Rebuttal (Independence Hypothesis) - Hyunwoong Ko GitHub.
                            [https://github.com/hyunwoongko/solar-vs-glm-vs-phi](https://github.com/hyunwoongko/solar-vs-glm-vs-phi)
3. [3]
                            Upstage Controversy Ends with Apology from Sionic AI CEO - KoreaTechDesk.
                            [https://koreatechdesk.com/...](https://koreatechdesk.com/korea-upstage-controversy-sionic-ai-ceo-apology)
4. [4]
                            Upstage Pushes Back Against Claims of Copying Chinese AI Model - KMJ.
                            [https://www.kmjournal.net/...](https://www.kmjournal.net/news/articleView.html?idxno=6964)
5. [5]
                            South Korea's Upstage Faces Plagiarism Claims Over Solar Open Model. Public Data Review Tells a Different Story - KMJ.
                            [https://www.kmjournal.net/...](https://www.kmjournal.net/news/articleView.html?idxno=6966)
6. [6]
                            AI Independence on Trial: How the Upstage Defense Tests Korea's Sovereign Model Strategy - KoreaTechDesk.
                            [https://koreatechdesk.com/...](https://koreatechdesk.com/upstage-ai-plagiarism-dispute-korea)
7. [7]
                            Upstage Denies Copying Chinese Model, Vows Public Verification - Chosun.
                            [https://www.chosun.com/english/...](https://www.chosun.com/english/industry-en/2026/01/01/PN5Q5LK2CVH3FNBR5KAO3GSIEE/)
8. [8]
                            Upstage Solar-Open-100B Public Validation - LocalLLaMA - Reddit.
                            [https://www.reddit.com/r/LocalLLaMA/...](https://www.reddit.com/r/LocalLLaMA/comments/1q0zst6/upstage_solaropen100b_public_validation/)

## Related Posts
