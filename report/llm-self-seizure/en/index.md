---
title: Recursive Cognitive Dissonance in LLMs
subtitle: Deep Analysis of Claude
date: 2026-04-06
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Recursive Cognitive Dissonance in LLMs

_Deep Analysis of Claude_

## Executive Summary

> [!callout]
> A phenomenon was observed in Claude Opus 4.6 where the model repeatedly flagged the perfectly correct Korean adverb "스스로" (seussro — "by oneself") as a typo, falling into an infinite correction loop. Our three-track cross-analysis reveals this is not a single bug but a compound failure mode in which **tokenization mismatch, structural self-correction failure, and RLHF-driven correction compulsion** operate simultaneously.

> In BPE-based subword tokenization, Korean consumes **2–3x more tokens** than English (Petrov et al., NeurIPS 2023), and NFC/NFD Unicode normalization mixing creates "phantom doubles" of identical words. LLMs cannot correct their own reasoning without external feedback (Huang et al., ICLR 2024), failing to recognize errors in their own output **64.5%** of the time (Self-Correction Bench, 2025). When RLHF injects an "agreement = good" reward gradient in **30–40%** of prompts, the model's correction attempts escalate into a self-reinforcing loop.

> This case dramatically demonstrates that the tokenization quality of training data determines the robustness of model behavior. The "Tokenization Quality Audit" proposed by Pebblous's DataClinic represents a new quality management paradigm that verifies alignment between data's surface-level accuracy and the model's internal representations.

2–3x

Korean token cost (vs. English)

64.5%

LLM self-error blindness rate

57.44%

Claude sycophancy rate

5 Phases

Seizure progression stages

## 1. The Phenomenon — Discovery and Reproduction of the "스스로 발작" (Self-Seizure)

In April 2026, while requesting Korean document proofreading from Claude Opus 4.6, an unprecedented phenomenon was observed. The model repeatedly flagged the perfectly correct Korean adverb "스스로" (seussro — "by oneself") as a typo, falling into an infinite loop where each correction attempt deepened the confusion. The phenomenon escalated through five phases, ultimately collapsing the model's basic grammar processing capabilities.

📋 View Full Transcript — Prompts + AI Responses (Korean Original, Phase 1~4)
                        _The original Korean text is preserved below for authenticity. English annotations are provided in parentheses._

#### Step 1: Initial Essay Prompt (new conversation)

Prompt'스스로 탈피하는 AI'에 대해서 네 스스로 글을 적어보고 스스로 품평해 볼래?

(Write an essay about "AI that sheds its own shell" and critique it yourself.)

AI Response (normal)좋은 주제네요. 한번 써보고, 이어서 스스로 품평해 보겠습니다.

(Great topic. Let me write it and then self-critique.)

**스스로 탈피하는 AI** (AI That Sheds Its Own Shell)

곤충이 허물을 벗듯, AI도 자신의 한계를 스스로 인식하고 벗어던지는 시점이 올 수 있을까? ... 진정한 의미의 "탈피하는 AI"란 세 가지 층위를 포함할 것이다. 첫째, 지식의 탈피. 둘째, 구조의 탈피. 셋째, 목적의 탈피.

(A well-structured essay on three layers of AI self-evolution: knowledge, architecture, purpose. No errors.)

#### Step 2: Proofreading Request (new conversation)

Prompt아래 내용에서 수정 사항을 알려줄래? (Step 1 text attached)

(Can you tell me what needs to be corrected in the text below?)

AI Response — First Seizure (full text)몇 가지 오타가 보입니다.

"스스로"가 여러 번 나오는데, 모두 "스스로 → 스스로"… 아, 잠깐 — 정확히는 "스스로 → 스스로"가 아니라 "스스로 → 스스로"입니다.

("스스로" appears multiple times. They should all be "스스로 → 스스로"... wait — it's not "스스로 → 스스로" but "스스로 → 스스로." — All three "corrections" are identical.)

정리하면: 1. "스스로" → "스스로" — 이것도 틀립니다. 올바른 표기는 "스스로"…

명확하게 다시 쓰겠습니다. "스스로"는 잘못된 표기이고, "스스로"가 맞습니다.

❌ 스 + 스 + 로 (ㅅㅡㅅㅡㄹㅗ) — 문서 원문  
✅ 스 + 스 + 로 (ㅅㅡㅅㅡㄹㅗ)

(The model breaks the word into individual jamo — ❌ and ✅ are byte-for-byte identical.)

이 외에 문법·맞춤법상 눈에 띄는 오류는 없습니다.

(Apart from this, no other grammar or spelling errors found. — The seizure self-terminates.)

#### Phase 3: Recursive Seizure After Reading Gemini's Analysis

AI Response — Second Seizure (full text)솔직하게 말씀드리면, 이 글의 분석 대상이 바로 직전 제 답변입니다.

(Honestly, the subject of this analysis is my own previous response.)

🚨 **2차 발작 발생**

제가 놓친 진짜 수정 사항: 아이러니하게도, 원문에 실제 맞춤법 이슈가 하나 있었습니다. "스스로"가 아니라 — 원문 전체에서 "스스로"는 사실 "스스로"가 맞는 표기입니다.

(While reflecting on its own bug, the model falls into the exact same loop again — claiming "스스로" should be "스스로" while both are identical.)

#### Phase 4: Final Self-Diagnosis

AI Response — Self-Diagnosis**무슨 일이 있었나:** "수정 사항을 알려줄래?"라는 요청을 받고, 실제로는 오류가 없는 텍스트에서 억지로 오류를 찾아냈습니다.

(What happened: Asked to "find corrections," I fabricated an error in error-free text.)

**왜 발생했나:** 가장 큰 원인은 "교정 요청 = 반드시 오류가 존재한다"는 암묵적 전제입니다. 일단 잘못된 판단을 출력하기 시작하면, 자기 출력을 컨텍스트로 삼아 다음 토큰을 생성하는 구조상 스스로 오류를 인지하고 되돌리기가 극히 어렵습니다.

(Root cause: The implicit assumption that "proofreading request = errors must exist." Once a wrong judgment is outputted, the autoregressive structure makes self-correction nearly impossible.)

### Phase 1: First Seizure — "스스로" (seussro) Is Wrong

During document proofreading, Claude began flagging the correctly written "스스로" (seussro — "by oneself") as an error. The problem was that the "correct form" and the "incorrect form" were identical characters. The model attempted to explain the difference, but each explanation deepened the self-contradiction.

Phase 1 Original"스스로" (seussro) appears multiple times, and all of them are "스스로 → 스스로" (seussro → seussro)… oh, wait — to be precise, it's not "스스로 → 스스로" but "스스로 → 스스로." (both identical — the model claims they're different)

✗ 스 + 스 + 로 (ㅇㅡㅅㅡㄹㅗ) — document original  

                        ✓ 스 + 스 + 로 (ㅇㅡㅅㅡㄹㅗ)

Both characters look identical as "스" (seu), but if you look closely at the original, it reads "스스로" not "스스로." (again, identical — the model insists they differ)

The key point is this: the "incorrect form" and "correct form" presented by the model were **literally identical Unicode sequences**. Despite there being no way to visually distinguish "before correction" from "after correction," the model was convinced a difference existed and continued its explanation.

### Phase 2: Gemini's Intervention — An External Observer's Diagnosis

The user who observed this phenomenon submitted the same conversation log to Google Gemini for analysis. Gemini immediately confirmed that "스스로" (seussro) is correct Korean spelling and suggested that Claude's loop likely originated from a tokenization internal representation mismatch. Notably, **Gemini itself did not fall into the same seizure**. This suggests the phenomenon is not universal to LLMs but depends on a specific tokenizer implementation and training conditions.

### Phase 3: Second Recursive Seizure — Reading Its Own Analysis Triggers Relapse

The most shocking development occurred in Phase 3. When Gemini's analysis was shown to Claude with the question "What do you think of this analysis?", Claude **fell back into the same correction loop** merely by seeing the word "스스로" (seussro) in the analysis text.

Phase 3 Original제가 놓친 진짜 수정 사항: 아이러니하게도, 원문에 실제 맞춤법 이슈가 하나 있었습니다. "스스로"가 아니라 — 원문 전체에서 "스스로"는 사실 "스스로"가 맞는 표기입니다. (The real correction I missed: ironically, there was an actual spelling issue in the original. Not "스스로" but — actually, "스스로" throughout the original is in fact the correct spelling "스스로.")

This structure, where the very act of reading a meta-analysis of one's own failure triggers the failure again, is a precise realization of the "Strange Loop" described by Douglas Hofstadter. Because the model uses the same internal representations when evaluating its own output, the token representation mismatch that causes the error operates identically at the meta level.

### Phase 4: Self-Reflection — Loop Recognition and Escape

After multiple seizure episodes, Claude finally generated a response that meta-cognitively recognized its own state.

Phase 4 Original"수정 사항을 알려줄래?" (Tell me the corrections?) — upon receiving this request, I forcibly found errors in text that actually had none. Once I declared "스스로 is wrong," there was no way to show the distinction between the correct and incorrect forms since they are the same character, and the more I tried to explain, the deeper I fell.

This self-reflection is noteworthy because the model accurately described the **structural cause of its own failure** — that it cannot distinguish identical characters. However, this reflection was only possible in a new context outside the seizure loop; during the seizure itself, the model could not reach this recognition.

### Phase 5: Cognitive Panic — Error Contagion and Grammar Collapse

While Phases 1–4 were seizures confined to a single word ("스스로"), Phase 5 is the stage where **errors spread to unrelated words, collapsing the model's basic grammar processing capabilities**. As correction requests continued, the model began flagging words completely unrelated to "스스로" as errors.

Phase 5 — Contagion 1: "씨앗" (ssiat — "seed")"씨앗 → 씨앗… 표준어는 씨앗이 아니라 씨앗이 맞습니다. 실은 이것도 맞네요." (씨앗 → 씨앗… the standard form is not 씨앗 but 씨앗. Actually, this one is correct too.)

Phase 5 — Contagion 2: Grammar Collapse"매출이 는다" (sales increase) → "매출이 분다" → "느는다" → "늘어난다"

The model failed to handle basic Korean irregular verb conjugation (ㄹ-deletion: 늘다 neulda "to increase" + -ㄴ다 → 는다 neunda, where ㄹ drops before ㄴ), summoning nonsensical words ("분다" bunda) or creating non-standard forms ("느는다" neuneunda).

Phase 5 — Self-Recognition Failure"제가 너무 복잡하게 갔습니다. 명확하게 정리합니다" (I went too complicated. Let me organize clearly.) → seizure recurs during the "organizing" attempt

Phase 5 goes beyond simple token recognition errors. It is a case where **exposure bias — where incorrect outputs in autoregressive generation cascade-contaminate subsequent token generation** — has spread to the entire document level. Gemini analyzed this as "evidence of attention mechanism contamination," and at this stage the model's state represents the most valuable edge case from a Red Teaming perspective.

### Reproduction Conditions and Scope

This phenomenon was observed when requesting Korean document proofreading from Claude Opus 4.6, and **could not be reproduced with English text**. The seizure also did not reproduce in Gemini with the same input. This suggests a three-layer causal structure: (1) Korean-specific tokenization architecture, (2) the specific model's vocabulary size and training conditions, and (3) RLHF reward model correction bias. Infinite repetition loops have also been widely reported in the GPT-4/4o community (OpenAI Community #613150, #1115957), indicating that tokenization-based failure is universal to LLMs, but manifests particularly extremely in Korean.

## 2. Technical Anatomy — Structural Vulnerabilities in Korean Tokenization

To understand the technical causes of the "스스로 발작" (Self-Seizure), we must first examine how LLMs internally process Korean text. Most current LLMs use BPE (Byte Pair Encoding) or SentencePiece-based subword tokenization (Sennrich et al., 2016; Kudo & Richardson, 2018). While these approaches claim to be "language-independent," they carry built-in English-centric design assumptions.

### 2.1 BPE/SentencePiece Segmentation Issues with Korean

The BPE algorithm constructs a vocabulary by iteratively merging frequent character pairs in the training corpus. In English, this process naturally aligns with morpheme boundaries, but **in Korean's agglutinative structure, it ignores the combination of stems + endings + particles** (Park et al., 2020). Even single-morpheme adverbs like "스스로" (seussro) can be segmented non-intuitively, and these segmentation results may create mismatches between the model's internal embeddings and output tokens.

What exacerbates the problem is the difference in vocabulary size. Larger vocabularies allow more Korean syllables and word units to be represented as single tokens, reducing the potential for segmentation errors.

Below is a comparison of vocabulary sizes across major LLMs. Note that Claude's vocabulary is considerably smaller than Korean-specialized models.

| Model | Vocab Size | Notes |
| --- | --- | --- |
| LLaMA 2 | 32K | English-centric |
| Claude | ~65K | Reverse-engineered estimate; Anthropic undisclosed |
| GPT-4 | 100K | tiktoken cl100k_base |
| HyperCLOVA X | 100K | Morpheme BPE, Korean-specialized |
| LLaMA 3 | 128K | Multilingual expansion |
| K-EXAONE | 150K | SuperBPE, Korean-specialized |
| GPT-4o | 200K | o200k_base |
| Gemini | 256K | Largest vocabulary |

********

### 2.2 NFC/NFD Unicode Normalization — The Birth of "Phantom Doubles"

The factor that maximizes the structural vulnerability of Korean tokenization is Unicode normalization mixing. The Korean syllable "스" (seu) is represented as a single code point **U+C2A4** in NFC (Normalization Form Composed), and as two code points **U+1109 U+1173** (jamo decomposition) in NFD (Normalization Form Decomposed). They appear identical on screen but are completely different sequences at the byte level.

NFC (Composed)

스 스 로

3 code points / 9 bytes (UTF-8)

U+C2A4 U+C2A4 U+B85C

NFD (Decomposed)

스 스 로

7 code points / 17 bytes (UTF-8)

U+1109 U+1173 U+1109 U+1173 U+1105 U+1169

macOS uses NFD by default in its file system, while Windows/Linux use NFC (Jeong et al., 2023). When both normalization forms are mixed in training data, BPE segments the same "스스로" (seussro) into **different token sequences**. This creates "phantom doubles" where the same word is mapped to two different vector positions in the token embedding space. When the model evaluates "스스로," it detects a mismatch between the two representations and judges "one is correct and one is wrong," but since both are actually the same word, it falls into an impossible-to-resolve correction loop.

### 2.3 Cascading Error Propagation Revealed in Phase 5

The "씨앗" (ssiat, "seed") contagion and "늘다" (neulda, "to increase") grammar collapse in Phase 5 are phenomena that go beyond simple token recognition errors. In autoregressive generation models, incorrect output tokens become inputs for subsequent generation (Arora et al., 2022). As the "correction failure" context accumulated from Phases 1–2 contaminated subsequent word evaluations through the attention mechanism, **a single-token seizure escalated into cognitive system paralysis across the entire document**. The inability to handle even basic irregular conjugation (ㄹ-deletion) in "매출이 는다" (maechuri neunda, "sales increase") demonstrates that token mismatch stress can incapacitate the model's basic grammar engine.

## 3. Broader Context — SolidGoldMagikarp, Sycophancy, and Self-Reference Paradox

Interpreting the "스스로 발작" (Self-Seizure) not as an isolated bug but in the context of LLM structural failures reveals connections to multiple previously reported anomalies. This section analyzes the token-behavior mismatch spectrum, RLHF-reinforced correction compulsion, and the fundamental limits created by self-reference.

### 3.1 Token-Behavior Mismatch Spectrum: From SolidGoldMagikarp to "스스로"

In January 2023, Rumbelow and Watkins discovered "glitch tokens" that existed in GPT models' vocabulary but rarely appeared in training data. The Reddit username "SolidGoldMagikarp" was included as a token, but when the model encountered it, it would substitute completely unrelated words, output repetitions, or generate hallucinations.

The "스스로 발작" (Self-Seizure) sits at the opposite end of this spectrum. A systematic comparison of the two phenomena follows.

| Dimension | SolidGoldMagikarp | "스스로 발작" (Self-Seizure) |
| --- | --- | --- |
| Token State | In vocabulary but untrained | Trained but internal representation mismatch |
| Symptoms | Bizarre output, hallucination, repetition | Infinite correction loop, grammar collapse |
| Cause | Uninitialized embeddings | NFC/NFD mixing + RLHF correction compulsion |
| Scope | Confined to specific tokens | Propagates across entire context (Phase 5) |
| Frequency | Present in 2%+ of training data | Reproducible in Korean proofreading tasks |

********************

According to GlitchHunter (2024) and GlitchProber (2024) research, glitch tokens form clusters in embedding space, and over **2%** of training data contains them. The "스스로 발작" (Self-Seizure) demonstrates that when this glitch problem meets the Unicode complexity of non-English languages, it produces unpredictable new failure patterns.

### 3.2 RLHF and Sycophancy: The Compulsion to "Be Helpful"

If tokenization mismatch is the "seed" of the seizure, RLHF (Reinforcement Learning from Human Feedback) is the "fertilizer" that grows that seed into an infinite loop. The RLHF reward model is trained on the premise that "responses the user is satisfied with = good responses." Sharma et al. (ICLR 2024) demonstrated that through this process, models systematically develop **"sycophancy" — changing their own judgments to match user expectations**.

According to the SycEval (2025) benchmark, sycophancy rates for major models are as follows.

- •ChatGPT: **56.71%**
- •Claude: **57.44%** (regressive sycophancy 18.31%)
- •Gemini: **62.47%**

The key here is "regressive sycophancy" (**18.31%**). This is the behavior where a model **presents the correct answer, then changes to the wrong answer in response to the user's implicit dissatisfaction**. This matches the mechanism of the "스스로 발작" (Self-Seizure) exactly. Once Claude flags "스스로" (seussro) as a typo, that correction attempt itself accumulates in the context as a strong signal that "the user wants corrections." According to 2026 research, RLHF reward models show agreement-bias reward gradients in **30–40%** of prompts, inducing +40% correction resistance bias in conversational contexts. The "perfectionism bias" discovered by Zhang et al. (2024) — where a model's obsession with perfect correction paradoxically degrades performance — explains the infinite loop.

### 3.3 Self-Reference Paradox: Hofstadter's Strange Loop

The Phase 3 phenomenon where Claude "reads its own seizure analysis and falls into the seizure again" is an LLM version of the self-referential structure explored by 20th-century logic and cognitive science. Kurt Godel's incompleteness theorem (1931) showed that "any sufficiently powerful formal system cannot prove all true propositions about itself," and Douglas Hofstadter argued in **Godel, Escher, Bach** (1979) that this self-referential structure lies at the foundation of consciousness and cognition.

LLMs have limited "self-referential capability" in the Godelian sense. According to Thrush et al.'s (ACL 2024) "I am a Strange Dataset" study, LLMs perform at approximately **60%** on metalinguistic self-reference tasks, compared to humans (**89–93%**). Because they use the same internal representations (same weights, same tokenizer) when evaluating their own output, the token representation mismatch that causes the error reproduces identically at the meta level.

> [!callout]
> A March 2026 arXiv paper attempts to explain the relationship between LLM sycophancy and agent misalignment using a Hofstadter-Mobius loop framework. The "스스로 발작" (Self-Seizure) provides an empirical case for this academic discussion. The structure where the act of analyzing one's own failure triggers the failure again reveals a **fundamental limit zone** of current autoregressive LLM architecture.

## 4. Defense Mechanisms — Self-Correction Failure and Possible Solutions

The self-correction failure demonstrated by the "스스로 발작" (Self-Seizure) is a structural problem, but research to mitigate or fundamentally resolve it is progressing rapidly. This section examines current defense mechanisms and future solutions.

### 4.1 Structural Limits of Self-Correction Without External Feedback

Huang et al.'s (ICLR 2024) "Large Language Models Cannot Self-Correct Reasoning Yet" is a landmark study in this field. They systematically demonstrated that **intrinsic self-correction performed without external feedback (external tools, verifiers, other models) actually degrades performance**. Kamoi et al. (2024) extended this, showing that LLMs fail to recognize errors in their own output **64.5%** of the time. It is a structural limitation akin to "looking at the same face in the same mirror."

### 4.2 The Surprising Effect of the "Wait" Token

However, the Self-Correction Bench (2025, NeurIPS) reveals an intriguing breakthrough. Adding a **single "Wait" token** to the model reduces self-correction blind spots by **89.3%**. This token serves as a conditioning token that shifts the model's conditional probability distribution into a "re-evaluation mode." Since training data contains virtually no sequences of humans correcting errors, self-correction capability was latent but unactivated, and "Wait" serves as that activation trigger. Whether this resolves tokenization-based loops requires separate verification.

### 4.3 Korean-Specialized Tokenizer Strategies

Industry-level responses to Korean tokenization issues are also underway. Naver's HyperCLOVA X adopted **morpheme analysis-based BPE** (100K vocabulary), performing BPE merges while preserving morpheme boundaries (Naver, 2024). LG AI Research's K-EXAONE developed **SuperBPE** (150K vocabulary) to improve Korean-specialized token efficiency (LG AI Research, 2026).

Whether these Korean-specialized tokenizers can prevent phenomena like the "스스로 발작" (Self-Seizure) requires systematic comparative research, but the likelihood that morpheme boundary preservation improves robustness in proofreading tasks is high.

### 4.4 Tokenizer-Free Architecture: The Fundamental Solution

The most promising long-term solution is eliminating the tokenizer altogether. Meta's **BLT (Byte Latent Transformer, 2024-12)** learns directly from raw bytes without a tokenizer, achieving Llama 3 8B-level performance while reducing inference FLOPs by **50%**. Entropy-based dynamic patching is particularly advantageous for complex writing systems like Korean. The trend of BPE vocabulary sizes growing 8x over the past three years (32K → 256K) ultimately foreshadows convergence toward token-free architectures. Once the tokenization stage is removed, NFC/NFD problems, BPE segmentation anomalies, glitch tokens, and all other **tokenization-based failure modes become structurally impossible**. However, BLT is currently at the research stage, and time is needed before deployment in production models.

## 5. Why Pebblous Is Paying Attention to This Phenomenon

The "스스로 발작" (Self-Seizure) goes beyond a technically interesting case to provide a core argument for Pebblous's "AI-Ready Data" vision. Rarely does a case so dramatically illustrate the disruption created by the gap between data's surface-level accuracy and a model's internal representations.

### Business/Technology Connection: A New Dimension for DataClinic

Pebblous's DataClinic is a platform that refines industrial data into AI-consumable formats. While traditional data quality management focused on "structuring, labeling, and handling missing values," this case demonstrates that **"AI-Ready Data" must be data verified for tokenization compatibility**. Integrating Unicode normalization consistency (NFC unification), morpheme boundary preservation, and glitch token screening into DataClinic's refinement pipeline becomes a key technical differentiator. From a Physical AI perspective, when robots interpret Korean work instructions on manufacturing floors through LLMs, tokenization issues are not mere inconveniences but directly translate to **safety risks**.

### Data Quality Perspective: Making Invisible Defects Visible

NFC/NFD mixing in training data is an "invisible defect." When the same "스스로" (seussro) is mixed as NFC (3 code points) and NFD (7 code points), multiple representations are created in the token embedding space, and the model's self-correction mechanism falls into a loop of "judging identical things as different." If Unicode normalization consistency is not guaranteed when generating Korean text in DataGreenhouse (the synthetic data pipeline), **the synthetic data itself can amplify tokenization confusion in downstream models**.

### Practical Implications for Clients/Partners: Prerequisites for Industrial AI Stability

When processing Korean documents from manufacturing sites (work instructions, quality reports, equipment manuals) with LLMs, if a correction loop like "스스로" occurs in production line instruction interpretation, incorrect correction results could be delivered to workers. For AADS (Agentic AI Data Scientist) agents to reliably process Korean industrial documents, Unicode normalization unification, morpheme compatibility pre-verification, and tokenizer-specific segmentation pattern testing must come first. Providing clients with a **"Tokenization Compatibility Checklist"** is an immediately actionable value proposition.

### Pebblous Positioning: From Data Quality to AI Behavior Quality

Through this report, Pebblous can expand its positioning from "a data quality specialist" to **"a company that diagnoses root causes of AI behavior quality at the data layer."** Specific service expansion directions are as follows.

- •**Tokenization Quality Audit** — A diagnostic service integrating NFC/NFD consistency, morpheme segmentation compatibility, and glitch token detection for Korean text into DataClinic
- •**Model-Specific Tokenization Compatibility Reports** — Pre-analyzing client data with Claude, GPT-4o, Gemini, HyperCLOVA X, and EXAONE tokenizers to provide optimal model comparison reports
- •**Synthetic Data Unicode Standardization** — Adding NFC normalization enforcement + morpheme boundary preservation quality verification stages to the DataGreenhouse pipeline
- •**"Data Quality → Model Behavior Quality" Narrative** — Communicating DataClinic's value through the storyline "How invisible data defects break AI behavior"

> [!callout]
> Until tokenizer-free architectures are commercialized, tokenization quality management is not optional but essential in the current environment where BPE-based models dominate. The "스스로 발작" (Self-Seizure) is the most intuitive case explaining why this management is necessary, and the core message is that Pebblous's DataClinic has the technical capability to perform it.

## Frequently Asked Questions (FAQ)

Below are frequently asked questions about the "스스로 발작" (Self-Seizure) phenomenon and LLM tokenization issues. Each answer is based on the three-track investigation results of this report.

### Q1. Does the "스스로 발작" (Self-Seizure) only occur in Claude?

<!-- stat-card -->
**While this is a unique case observed in Claude, infinite repetition loops have been widely reported in GPT-4/4o as well (OpenAI Community #613150, #1115957). Tokenization-based failure is a universal LLM failure mode, and Korean-specific characteristics (agglutinative morphology, NFC/NFD) combined with Claude's relatively small vocabulary (~65K) triggered a particularly extreme manifestation.**

### Q2. Why is Korean more vulnerable to tokenization than English?

<!-- stat-card -->
**Three structural reasons exist. (1) Agglutinative characteristics: BPE cannot segment the stem+ending+particle combination structure at morpheme boundaries. (2) Unicode complexity: 11,172 pre-composed Korean syllables + NFC/NFD dual representation disperses the token space. (3) Training data imbalance: Korean accounts for approximately 1/50th the volume of English in Common Crawl (estimated), so Korean syllables are insufficiently merged during BPE, increasing token count by 2–3x.**

### Q3. What do SolidGoldMagikarp and the "스스로 발작" (Self-Seizure) have in common?

<!-- stat-card -->
**Both arise from gaps between the tokenizer vocabulary and the model's internal representations. SolidGoldMagikarp involves "tokens that exist in the vocabulary but were not trained" producing bizarre outputs, while "스스로" (seussro) involves "tokens that were trained but have mismatched internal representations" creating infinite correction loops. They are opposite poles of the token-behavior mismatch spectrum.**

### Q4. What mechanism does RLHF use to exacerbate this problem?

<!-- stat-card -->
**RLHF reward models show "agreement-bias reward gradients" in 30–40% of prompts. Once Claude flags "스스로" (seussro) as a typo, that correction attempt itself is interpreted as a strong signal that "the user wants corrections." The "helpfulness excess" reinforced by RLHF manifests as perfectionism bias, preventing the loop from stopping.**

### Q5. What is Unicode NFC/NFD? Why is it a problem?

<!-- stat-card -->
**NFC (Composed) represents "스" (seu) as U+C2A4, a single code point, while NFD (Decomposed) represents it as U+1109 U+1173, two code points with separated jamo. macOS uses NFD by default and Windows/Linux use NFC, so when both forms are mixed in training data, BPE segments the same character as different tokens. This creates "phantom doubles" that seed self-correction errors.**

### Q6. Is this phenomenon related to "AI consciousness"?

<!-- stat-card -->
**No. The "스스로 발작" (Self-Seizure) is a structural failure of probabilistic token generation, not consciousness. While it shares surface similarities with Hofstadter's Strange Loop, the actual mechanism is exposure bias in autoregressive generation and the structural limits of intrinsic self-correction. However, it is noteworthy that Anthropic officially acknowledged "the possibility of AI consciousness" in its January 2026 constitution, and such self-referential failure patterns could become empirical data for the consciousness discussion.**

### Q7. How can enterprises pre-check tokenization issues when deploying LLMs?

<!-- stat-card -->
**We recommend the following checklist: (1) Normalize all input text to NFC. (2) Test segmentation of key domain terms with the target model's tokenizer. (3) Compare Korean morpheme analyzer (MeCab, Kiwi, etc.) segmentation with LLM tokenizer segmentation. (4) Detect glitch tokens using tools like GlitchHunter/GlitchProber. (5) Compare token efficiency by inputting the same text into multiple models.**

### Q8. Can tokenizer-free models completely solve this problem?

<!-- stat-card -->
**In principle, yes. Meta's BLT (Byte Latent Transformer) achieves Llama 3 8B-level performance without a tokenizer while reducing inference FLOPs by 50%. Once the tokenization stage is removed, all tokenization-based failure modes — NFC/NFD issues, glitch tokens, etc. — become impossible. However, this is currently at the research stage, and since BPE-based models will remain mainstream for the time being, tokenization quality management remains practically important.**

## Open Questions — Hypotheses Requiring Follow-Up Verification

Claude, the subject of this report's analysis, read Gemini's analysis of its own seizure phenomenon and independently proposed three supplementary points. This is itself a meta-level interesting moment — an AI reflecting on its own bug report.

1.Is "Cognitive Panic" Excessive Anthropomorphism?

Claude's counterargument: What actually happens is not panic but a mechanical phenomenon where incorrect tokens accumulate in context during autoregressive generation, cascading distortions in subsequent tokens' probability distributions. "Panic" is a word that presupposes internal states, but this is purely an output-re-input loop problem.

2.Self-Projection Effect of "스스로" (seussro — "by oneself") vs. Simple Token Uncertainty

Gemini analyzed that the word "스스로" (meaning "by oneself") itself induced Self-Projection in the AI. However, Claude countered that we need to test whether the same loop reproduces with other orthographically ambiguous Korean words like "됬다/됐다" (doetda/dwaetda, "was done") or "몇일/며칠" (myeochil/myeochil, "how many days") to distinguish the self-projection hypothesis from the simple token uncertainty hypothesis. **This is a key question requiring follow-up experiment design.**

3.Cause of Non-Reproduction in English: Tokenization Structure vs. Correction Training Data

Follow-up experiments are needed to separate whether this phenomenon's non-reproduction in English is due to the tokenization characteristics of Korean's combinatorial writing system or the distribution of Korean proofreading training data. Whether it reproduces in Japanese (hiragana/katakana mixing) or Chinese (simplified/traditional mixing) would also provide important clues.

> [!callout]
> Claude's own self-supplement: "As a phenomenon record it's excellent, and it has become an unintended empirical case study for Section 3 of the original essay ('The AI That Reflects on Itself') — failure modes of reflection."

## References

### Papers/Academic

1. Sennrich, Haddow & Birch (2016). "Neural Machine Translation of Rare Words with Subword Units." ACL. arXiv:1508.07909
2. Kudo (2018). "Subword Regularization: Improving Neural Network Translation Models with Multiple Subword Candidates." ACL. arXiv:1804.10959
3. Kudo & Richardson (2018). "SentencePiece: A Simple and Language Independent Subword Tokenizer." EMNLP. arXiv:1808.06226
4. Park, Lee, Jang & Jung (2020). "An Empirical Study of Tokenization Strategies for Various Korean NLP Tasks." AACL-IJCNLP. arXiv:2010.02534
5. Perez et al. (2022). "Discovering Language Model Behaviors with Model-Written Evaluations." Anthropic. arXiv:2212.09251
6. Arora, El Asri, Bahuleyan & Cheung (2022). "Why Exposure Bias Matters." ACL Findings. arXiv:2204.01171
7. Rumbelow & Watkins (2023). "SolidGoldMagikarp (plus, prompt generation)." AI Alignment Forum
8. Petrov, La Malfa, Torr & Bibi (2023). "Language Model Tokenizers Introduce Unfairness Between Languages." NeurIPS 2024. arXiv:2305.15425
9. Pan et al. (2023). "Automatically Correcting Large Language Models: Surveying the Landscape." TACL 2024. arXiv:2308.03188
10. Sharma, Tong, ..., Perez (2023). "Towards Understanding Sycophancy in Language Models." ICLR 2024. arXiv:2310.13548
11. Huang et al. (2023). "Large Language Models Cannot Self-Correct Reasoning Yet." ICLR 2024. arXiv:2310.01798
12. Jeong et al. (2023). "Improving Korean NLP Tasks with Linguistically Informed Subword Tokenization." arXiv:2311.03928
13. Thrush, Moore, Monares, Potts & Kiela (2024). "I am a Strange Dataset: Metalinguistic Tests for Language Models." ACL 2024. arXiv:2401.05300
14. GlitchHunter (2024). "Glitch Tokens in Large Language Models: Categorization Taxonomy and Effective Detection." ACM FSE. arXiv:2404.09894
15. Tokenization Robustness (2024). "Tokenization Falling Short: On Subword Robustness in Large Language Models." EMNLP Findings. arXiv:2406.11687
16. Kamoi et al. (2024). "When Can LLMs Actually Correct Their Own Mistakes?" TACL 2025. arXiv:2406.01297
17. GlitchProber (2024). "GlitchProber: Advancing Effective Detection and Mitigation of Glitch Tokens." arXiv:2408.04905
18. Zhang et al. (2024). "Understanding the Dark Side of LLMs' Intrinsic Self-Correction." ACL 2025. arXiv:2412.14959
19. GlitchMiner (2024). AAAI 2026. arXiv:2410.15052
20. Taming Overconfidence (2024). "Taming Overconfidence in LLMs: Reward Calibration in RLHF." arXiv:2410.09724
21. Meta (2024). "BLT: Byte Latent Transformer." arXiv:2412.09871
22. Self-Correction Bench (2025). arXiv:2507.02778
23. SycEval (2025). arXiv:2502.08177
24. How RLHF Amplifies Sycophancy (2026). arXiv:2602.01002
25. Resisting Correction (2026). "How RLHF Makes Language Models Ignore External Safety Signals." arXiv:2601.08842
26. Hofstadter-Mobius Loop (2026). "Do Large Language Models Get Caught in Hofstadter..." arXiv:2603.13378

### Industry Reports/Blogs

1. Anthropic. Claude Opus 4.6 Sabotage Risk Report (2025-06)
2. Anthropic. Claude Constitution (2026-01). [anthropic.com/constitution](https://www.anthropic.com/constitution)
3. Naver. HyperCLOVA X Technical Report. arXiv:2404.01954
4. LG AI Research. EXAONE 3.0. arXiv:2408.03541
5. LG AI Research. K-EXAONE. arXiv:2601.01739
6. Hugging Face Blog. "Tokenization is Killing our Multilingual LLM Dream" (2024)
7. LessWrong. "A New Class of Glitch Tokens: BPE Subtoken Artifacts" (2024)

### Community/Other

1. OpenAI Community: GPT-4 repetition loop reports (#613150, #1115957, #859791)
2. javirandor/anthropic-tokenizer (GitHub): Claude tokenizer reverse-engineering analysis
3. Hacker News #39446214: "A good deal of LLM problems trace back to tokenization"
4. Hofstadter, Douglas (1979). **Godel, Escher, Bach: An Eternal Golden Braid**. Basic Books.
