---
title: 150 Korean Foods Dissected by Data
subtitle: Korean Food Image DataClinic Diagnostic — The Truth Behind a Quality Score of 71 (Fair)
date: 2026-03-16
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 150 Korean Foods Dissected by Data

_Korean Food Image DataClinic Diagnostic — The Truth Behind a Quality Score of 71 (Fair)_

## Korean Food Story — The Broth Culture AI Discovered

- • **Banchan (Side Dishes)** — Small dishes served alongside the main course, typically 3 to 10 per meal. This is why items like pickled perilla leaves (kkaennip-jangajji) may look unfamiliar when plated individually.
- • **Broth Culture (Guk-mul Culture)** — Soups, stews, and hot pots are essential to Korean meals. This is exactly why general-purpose AI splits Korean food into two clusters.
- • **Seasonal Foods** — Songpyeon is eaten only during Chuseok (Korean Thanksgiving). The repetition of half-moon shapes and pastel colors in standardized photos makes it the "most typical" food for AI.
- • **Cooking State** — Samgyeopsal (pork belly) includes raw (pink), grilling (smoky), and cooked (brown) images all in the same class. This is the structural reason it produces the most outliers.

### 🤖 For AI Researchers: Why Korean Food Data Is Fascinating

- **Fine-grained Classification at Its Extreme** — Mul-naengmyeon (cold broth noodles) and bibim-naengmyeon (spicy mixed noodles) are both naengmyeon, but the presence or absence of broth makes their appearance completely different. Doenjang-jjigae and kimchi-jjigae share similar bowl compositions but differ in color. This is why ImageNet-level general models fall short.
- **Intra-class Variance Imbalance** — Songpyeon (very low intra-class variance) vs. Gimbap (very high intra-class variance): even when the number of images per class is nearly identical, learning difficulty varies dramatically. A balanced dataset does not necessarily guarantee balanced learning.
- **The Power of Domain Specialization** — Two clusters in the general-purpose lens (L2) merge into one under the domain-specialized lens (L3). The feature space created by a Korean-food-specific backbone has a fundamentally different structure.

<!-- stat-card -->
**"**Guk-mul-do eop-da**" — literally "there isn't even broth," but its real meaning is "there's absolutely nothing" or "not a single penny." In Korean culture, broth (guk-mul) represents the most basic thing one should share, the minimum unit of a meal. This single idiom captures the essence of Korean cuisine.** — The traditional Korean table is built on a triangular structure of **bap (rice) + guk (soup) + banchan (side dishes)**. Galbitang, samgyetang, doenjang-jjigae, miyeok-guk... No matter how simple the meal, at least one bowl of soup is considered proper Korean dining etiquette. It is no coincidence that a large proportion of the 150 classes in this Korean food dataset are soup-based dishes. And as we will see later, this fact is faithfully reflected in AI as well. — The global spread of K-pop and K-dramas (the Korean Wave, or Hallyu) has ignited explosive interest in Korean food. Scenes of grilling samgyeopsal with soju, or cooking a late-night bowl of ramyeon, are now familiar to fans worldwide. In an era where a single Netflix drama can multiply global search volume for a particular Korean dish by dozens of times, Korean food categories in food-recognition AI are no longer optional. — 🌍 A Guide for Those New to Korean Food — Korean food image recognition is like compressing several hard problems in computer vision into a single dataset.

## Executive Summary

> [!callout]
> This post presents the key insights from the [quality diagnostic report #59](https://dataclinic.ai/en/report/59) of the Korean Food Image dataset, conducted using Pebblous [DataClinic](https://dataclinic.ai).

> The Korean Food Image dataset is a large-scale Korean cuisine vision dataset comprising 150 classes and 150,507 images, ranging from galbitang to fried chicken. The DataClinic overall diagnosis resulted in a **quality score of 71 (Fair)**. In terms of class balance, image counts range from a minimum of 992 to a maximum of 1,125 with a standard deviation of just 16.8 — a textbook-level distribution.

> At [L2](https://dataclinic.ai/data-clinic/skill) (feature space analysis) using Wolfram ImageIdentify Net V2 (1,280 dimensions), a pattern was discovered where general-purpose AI splits Korean food into two clusters: **soup-based foods and dry foods**. In contrast, at [L3](https://dataclinic.ai/data-clinic/skill) (domain-optimized analysis, 129 dimensions), these two clusters merge into a single Korean food space.

> The most "typical" food was **Songpyeon**, while the most heterogeneous images were found in **Gimbap**. Data Diet (deduplication) is recommended for classes with low visual diversity.

## Dataset Overview — A World of 150 Korean Foods

## Overall Diagnosis — Quality Score 71 (Fair)

| Diagnostic Item | Result | Notes |
| --- | --- | --- |
| Class Balance | ✅ Good | Std. dev. 16.8 (textbook-level) |
| Missing Values | ✅ Good | 0.07% (103 / 150,610 images) |
| Channel Composition | ✅ Good | 99.42% RGB |
| Image Resolution | ⚠️ Fair | 121×91px ~ 6,048×4,032px |
| Intra-class Diversity | ⚠️ Fair | Dense duplicates in Songpyeon, Mul-naengmyeon, etc. |
| Commercial Use | ✅ Permitted | Source: AIHub |

## Level 1: Basic Quality Check — A Pixel-Level Health Exam

### ✅ Class Balance: Textbook Level

### ⚠️ Image Resolution: A Wide Spectrum

### ✅ Channel Composition: Stable

### ✅ Missing Values: Negligible

## Level 2: Korean Food Through a General AI's Eyes — Two Worlds

### 🌊 Two Clusters: Soup vs. Dry

### 📊 Distribution: Bell-shaped — Healthy

### 🔬 Per-class Density Comparison — Portraits of 6 Foods

## Level 3: The Korean Food Specialist Lens — Two Worlds Become One

### 🎯 Cluster Unification: Two → One

### 📈 Distribution: Still Bell-shaped — Stable

### 🔬 L3 Per-class Density — What the Domain Lens Changed

## Outlier Analysis — Why Songpyeon Is the Most "Typical"

### 🏆 High-density Samples — What AI Considers "Typical Korean Food"

- Uniform half-moon silhouette
- Standardized color palette of white, pink, and green
- Neatly arranged composition on plates
- Often simple backgrounds with uniform lighting

### ⚠️ Low-density Samples — The Identity of Outliers

- **Gimbap** — cross-section view (revealing pickled radish and egg fillings) vs. side view (cylindrical exterior). Often confused with Japanese maki rolls by foreigners, but Gimbap is an entirely different food using sesame-oil-coated rice and Korean-style ingredients. This visual diversity is the cause of its low density.
- **Samgyeopsal** — pink before grilling vs. brown after grilling. The color difference is extreme.
- **Kkaennip-jangajji (pickled perilla leaves)** — plated alone on a dish vs. used as a wrap. A classic banchan dilemma.
- **Sundae (Korean blood sausage)** — whole form vs. sliced cross-section view.

### ↔️ Most Different Pair: Hangwa vs. Gimbap

## Recommendations — A Data Diet Prescription

### 🥗 What Is a Data Diet?

- **Songpyeon** — Dense with half-moon-shaped, pastel-colored images. Supplementing with images of the shaping process, rustic styles, and varied lighting conditions would make the model more robust in real-world environments.
- **Mul-naengmyeon** — Repetitive center-of-bowl compositions. Supplementing with diverse angles and plating styles is recommended.
- **High-density classes overall** — Ideally, duplicate images should be removed and replaced with images from diverse shooting environments such as restaurants, homes, and street food stalls.

### 💊 Is Data Bulkup (Augmentation) Unnecessary?

## Conclusion — Three Discoveries from 150 Korean Foods in Data

| Level | Key Finding | Implication |
| --- | --- | --- |
| L1 | Class balance std. dev. 16.8 | Extremely low risk of biased learning |
| L2 | General AI forms soup/dry 2-cluster split | Possible soup-vs-dry confusion with general backbone |
| L3 | Clusters merge under Korean food lens | Clear benefit of domain-specialized feature extractor |
| Outliers | Songpyeon high density, Gimbap low density | Data Diet target: remove high-density class duplicates |
