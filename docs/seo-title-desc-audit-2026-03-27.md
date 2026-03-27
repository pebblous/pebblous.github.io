# SEO Title & Description Audit Report

**Date:** 2026-03-27
**Auditor:** Claude (SEO Analysis)
**Scope:** All published pages on blog.pebblous.ai
**Benchmark:** UrbanGPT 2.0 EN (21% CTR)

---

## 1. Executive Summary

| Metric | Value |
|--------|-------|
| Total pages audited | 131 |
| Pages with issues | 98 |
| Missing `<title>` tag | 38 |
| Title too long | 19 |
| Description issues | 12 |
| Click-optimization needed | 49 |
| Skipped (IR/noindex) | 6 |
| Priority P0 (immediate) | 10 |
| Priority P1 (high) | 28 |
| Priority P2 (medium) | 32 |
| Priority P3 (batch/low) | 28 |

**Current average CTR: 3%. Target: 7%+.**

The single highest-impact action is fixing the **38 pages with no `<title>` tag** -- these pages show their `mainTitle` (often academic/long) as the Google SERP title, which Google may truncate or rewrite. The top-5 GSC traffic pages alone account for ~839 clicks/3mo; optimizing their titles and descriptions could realistically add 200-400 additional clicks/month.

**Expected impact of full implementation:**
- P0 pages (top 5 by traffic): +50-80% CTR lift (from ~4.5% avg to ~8%)
- P1 pages: +30-50% CTR lift
- P2/P3 pages: +10-30% CTR lift, primarily through missing title fixes

---

## 2. Methodology

Each page was evaluated on 6 criteria:

1. **Title existence** -- Does the page have an explicit `<title>` tag, or does it rely on `PebblousPage.init()` mainTitle?
2. **Title length** -- KO: <=35 chars ideal (including `| ` suffix); EN: <=60 chars ideal (including `| Pebblous` suffix)
3. **Title click-optimization** -- Does the title promise a benefit, use numbers, or create curiosity? Or is it purely descriptive/academic?
4. **Description existence & length** -- Present? 120-160 chars EN, 80-120 chars KO?
5. **Description search-intent match** -- Does it answer the searcher's implicit question and promise specific value?
6. **Uniqueness** -- Is the title distinct from other pages, or does it follow a repetitive template?

**Benchmark analysis (UrbanGPT 2.0 EN, 21% CTR):**
- Title: `UrbanGPT 2.0 -- Designing Cities with a Single Line of Text | Pebblous`
- Why it works: Concrete benefit ("designing cities"), surprising mechanism ("single line of text"), concise (58 chars), curiosity gap

---

## 3. Issue Categories

### A. Missing `<title>` Tag (38 pages)

Pages that rely solely on `PebblousPage.init({ mainTitle, subtitle })` without an explicit `<title>` tag. Google uses either the mainTitle (often too long/academic) or auto-generates a title from page content.

**Affected pages:** #3, #4, #7, #8, #23, #24, #32, #33, #36-47, #103, #120-123, #130-131, and multiple AADS/DAL pages.

### B. Title Too Long (19 pages)

Titles exceeding optimal length, causing SERP truncation.

| Threshold | Count |
|-----------|-------|
| KO > 35 chars (before `\| `) | 12 |
| EN > 55 chars (before `\| Pebblous`) | 7 |

**Worst offenders:**
- #11: 53 KO chars before brand suffix (enterprise ontology paradigm)
- #6: 72 EN chars before brand suffix (Solar vs GLM forensic)
- #21: 54 KO chars (synthetic data pricing)

### C. Description Missing or Suboptimal (12 pages)

Pages with no meta description, or descriptions that read like abstracts rather than CTR-driving copy.

### D. Title = Academic/Descriptive, Not Click-Optimized (49 pages)

Titles that describe the content accurately but fail to create click motivation. Common patterns:
- **Noun-phrase titles** ("X의 Y 분석") -- no benefit or curiosity
- **Subtitle-as-title** (using the academic subtitle directly)
- **Missing numbers** where data exists (market sizes, percentages, comparisons)

### E. Duplicate/Templated Titles (7 pages)

All PebbloPedia pages share the pattern `X -- [페블로피디아] 어린이부터 전문가까지, 다섯 단계 난이도로 배우는 핫 키워드 | 페블러스`. This is far too long and repetitive across pages. The differentiating keyword gets buried.

---

## 4. Page-by-Page Audit

### Legend
- **Priority:** P0 = GSC top pages (immediate), P1 = clear SEO potential, P2 = medium, P3 = low/batch
- **Issues:** `no-title` = missing title tag, `too-long` = exceeds char limit, `academic` = not click-optimized, `no-desc` = missing description, `template` = repetitive pattern

---

### P0: GSC Top Traffic Pages (Immediate Impact)

#### #1. Physical AI (KO) -- 257 clicks, 4.8% CTR
| Field | Value |
|-------|-------|
| Path | `project/PhysicalAI/physical-ai/ko/index.html` |
| Current Title | 피지컬 AI란? LLM과 VLA의 차이, 그리고 데이터 전략 \| 페블러스 (41 chars before suffix) |
| Issues | `too-long`, `academic` |
| Proposed Title | **피지컬 AI란? LLM vs VLA 핵심 비교 \| 페블러스** (26 chars) |
| Current Desc | 피지컬 AI란 무엇인가? LLM(언어)에서 VLM(시각), VLA(행동)까지 AI 모델의 진화와 차이점을 설명합니다. 2025년 40조 원 규모 시장, 센서 퓨전, Sim-to-Real Gap 등 핵심 데이터 전략을 확인하세요. |
| Proposed Desc | **피지컬 AI란? LLM에서 VLA까지 3단계 모델 진화를 비교하고, 40조 원 시장의 데이터 전략 5가지를 정리했습니다.** |

#### #2. Physical AI (EN) -- included in #1 traffic
| Field | Value |
|-------|-------|
| Path | `project/PhysicalAI/physical-ai/en/index.html` |
| Current Title | Physical AI: LLM vs VLA Differences and Data Strategy \| Pebblous (54 chars) |
| Issues | `academic` |
| Proposed Title | **What Is Physical AI? LLM vs VLA Explained + Data Strategy \| Pebblous** (59 chars) |
| Current Desc | What is Physical AI? From LLM to VLM to VLA -- understanding the model evolution, data strategy, and the $30B market opportunity in 2025. |
| Proposed Desc | **Physical AI explained: LLM to VLA model evolution in 3 stages, $30B market data, and 5 data strategies for 2025. Free visual guide included.** |

#### #3. Palantir Ontology (KO) -- 164 clicks, 3.3% CTR
| Field | Value |
|-------|-------|
| Path | `project/CURK/ontology/palantir-vs-classic-ontology/ko/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title`, `no-desc-optimization` |
| Proposed Title | **팔란티어 온톨로지 vs 시맨틱 웹: 핵심 차이 3가지 \| 페블러스** (33 chars) |
| Current Desc | 팔란티어 온톨로지(Palantir Ontology)는 전통 시맨틱 웹 온톨로지와 무엇이 다른가? 3계층 아키텍처, 에어버스 사례, 디지털 트윈 활용까지 -- 40년 진화를 한눈에 비교합니다. |
| Proposed Desc | **팔란티어 온톨로지와 전통 시맨틱 웹의 3가지 핵심 차이를 비교합니다. 에어버스 실제 사례, 3계층 아키텍처 도해, 디지털 트윈 연결까지 한눈에.** |

#### #4. Palantir Ontology (EN)
| Field | Value |
|-------|-------|
| Path | `project/CURK/ontology/palantir-vs-classic-ontology/en/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **Palantir Ontology vs Semantic Web: 3 Key Differences \| Pebblous** (56 chars) |
| Current Desc | How does Palantir Ontology differ from traditional Semantic Web ontology? 3-layer architecture, Airbus case study, digital twin integration -- 40 years of evolution compared side by side. |
| Proposed Desc | **Palantir Ontology vs traditional Semantic Web: 3-layer architecture compared, with Airbus case study and digital twin integration explained.** |

#### #5. Solar vs GLM Forensic (KO) -- 148 clicks, 4.8% CTR
| Field | Value |
|-------|-------|
| Path | `report/solar-vs-glm/solar-vs-glm-forensic/ko/index.html` |
| Current Title | Solar-Open-100B vs GLM-4.5-Air 모델 파생 논쟁의 포렌식 \| 페블러스 (40 chars) |
| Issues | `too-long`, `academic` |
| Proposed Title | **Solar vs GLM-4.5: 모델 파생 논쟁 포렌식 분석 \| 페블러스** (30 chars) |
| Proposed Desc | **Solar-Open-100B와 GLM-4.5-Air 모델 파생 논쟁을 기술적으로 해부합니다. 가중치 유사도, 학습 데이터 추적 등 6가지 포렌식 분석 결과.** |

#### #6. Solar vs GLM Forensic (EN)
| Field | Value |
|-------|-------|
| Path | `report/solar-vs-glm/solar-vs-glm-forensic/en/index.html` |
| Current Title | Forensic Analysis of the Solar-Open-100B vs GLM-4.5-Air Model Derivation Controversy \| Pebblous (83 chars!) |
| Issues | `too-long` (severely) |
| Proposed Title | **Solar vs GLM-4.5 Forensic: Model Derivation Analysis \| Pebblous** (55 chars) |
| Proposed Desc | **Technical forensic analysis of the Solar-Open-100B vs GLM-4.5-Air derivation controversy. Weight similarity, training data traces, and 6 key findings.** |

#### #7. ISO 5259-2 Cheatsheet (KO) -- 107 clicks, 5.7% CTR
| Field | Value |
|-------|-------|
| Path | `project/ISO5259/5259-2-cheetsheet-01/ko/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **ISO 5259-2 데이터 품질 치트시트 \| 페블러스** (24 chars) |
| Proposed Desc | **ISO/IEC 5259-2의 데이터 품질 측정 기준(QM) 빠른 참조 가이드. AI 학습 데이터 15가지 품질 지표를 한 페이지로 정리했습니다.** |

#### #8. ISO 5259-2 Cheatsheet (EN)
| Field | Value |
|-------|-------|
| Path | `project/ISO5259/5259-2-cheetsheet-01/en/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **ISO 5259-2 Data Quality Cheat Sheet \| Pebblous** (40 chars) |
| Proposed Desc | **Quick reference guide to ISO/IEC 5259-2 data quality measures. 15 quality metrics for AI training data explained in one page.** |

#### #9. UrbanGPT 2.0 (EN) -- BENCHMARK, 21% CTR
| Field | Value |
|-------|-------|
| Path | `project/UrbanGPT/urbangpt2-pebblous/en/index.html` |
| Issues | **None -- benchmark page** |
| Status | **OK. No changes needed.** |

#### #10. UrbanGPT 2.0 (KO)
| Field | Value |
|-------|-------|
| Path | `project/UrbanGPT/urbangpt2-pebblous/ko/index.html` |
| Issues | **None -- follows benchmark pattern** |
| Status | **OK. No changes needed.** |

---

### P1: High SEO Potential Pages

#### #11. Enterprise Ontology Paradigm (KO)
| Field | Value |
|-------|-------|
| Path | `project/CURK/ontology/enterprise-ontology-paradigm/ko/index.html` |
| Current Title | 엔터프라이즈 인텔리전스를 위한 온톨로지 패러다임의 전환 -- 팔란티어와 전통적 시맨틱 웹 아키텍처의 비교 분석 및 AIP 기반의 확장성 연구 \| 페블러스 (70+ chars!) |
| Issues | `too-long` (severely), `academic` |
| Proposed Title | **팔란티어 AIP 온톨로지: 시맨틱 웹과 뭐가 다른가? \| 페블러스** (32 chars) |
| Proposed Desc | **팔란티어 파운드리의 운영 온톨로지와 전통 시맨틱 웹을 비교 분석합니다. AIP 기반 확장성, 에어버스 사례 포함.** |

#### #12. Enterprise Ontology Paradigm (EN)
| Field | Value |
|-------|-------|
| Path | `project/CURK/ontology/enterprise-ontology-paradigm/en/index.html` |
| Current Title | Shifting the Ontology Paradigm for Enterprise Intelligence... \| Pebblous (70+ chars) |
| Issues | `too-long`, `academic` |
| Proposed Title | **Palantir AIP Ontology vs Semantic Web: A Deep Comparison \| Pebblous** (58 chars) |
| Proposed Desc | **Palantir Foundry's operational ontology vs traditional Semantic Web: architecture comparison, Airbus case study, and AIP extensibility analysis.** |

#### #13. Data Quality Guide (KO)
| Field | Value |
|-------|-------|
| Path | `project/DataClinic/data-quality/ko/index.html` |
| Current Title | 데이터 품질이란? AI 데이터 품질 관리의 모든 것 \| 페블러스 데이터클리닉 (38 chars) |
| Issues | `too-long` (slightly), brand suffix non-standard |
| Proposed Title | **AI 데이터 품질이란? 완전 가이드 \| 페블러스** (22 chars) |
| Proposed Desc | **AI 학습 데이터 품질 관리의 모든 것. 품질 진단 6단계, ISO 5259 기준, 실무 개선 체크리스트까지 한 번에 정리했습니다.** |

#### #14. Data Quality Guide (EN)
| Field | Value |
|-------|-------|
| Path | `project/DataClinic/data-quality/en/index.html` |
| Current Title | What Is Data Quality? The Complete Guide to AI Data Quality Management \| Pebblous DataClinic (79 chars!) |
| Issues | `too-long` |
| Proposed Title | **What Is AI Data Quality? Complete Guide \| Pebblous** (43 chars) |
| Proposed Desc | **Everything about AI training data quality: 6-step diagnosis, ISO 5259 criteria, and a practical improvement checklist.** |

#### #15. Physical AI Competition Strategy (KO)
| Field | Value |
|-------|-------|
| Path | `project/PhysicalAI/physical-ai-competition-strategy/ko/index.html` |
| Current Title | 피지컬 AI 시대의 패권 경쟁: 데이터 중심 생존 전략과 페블러스의 역할 \| 페블러스 (42 chars) |
| Issues | `too-long`, `academic` |
| Proposed Title | **피지컬 AI 패권 경쟁: 데이터 생존 전략 5가지 \| 페블러스** (30 chars) |
| Proposed Desc | **NVIDIA, Tesla, Google이 벌이는 피지컬 AI 패권 경쟁. 데이터 중심 생존 전략 5가지와 한국 기업의 기회를 분석합니다.** |

#### #16. Physical AI Competition Strategy (EN)
| Field | Value |
|-------|-------|
| Path | `project/PhysicalAI/physical-ai-competition-strategy/en/index.html` |
| Current Title | The Physical AI Hegemony Race: Data-Centric Survival Strategy and the Role of Pebblous \| Pebblous (85 chars!) |
| Issues | `too-long` (severely) |
| Proposed Title | **Physical AI Race: 5 Data-Centric Survival Strategies \| Pebblous** (54 chars) |
| Proposed Desc | **NVIDIA, Tesla, and Google's Physical AI hegemony race. 5 data-centric strategies for survival and the emerging Korean opportunity.** |

#### #17. Neuro-Symbolic AI (KO)
| Field | Value |
|-------|-------|
| Path | `project/NeuroSymbolicAI/neuro-symbolic-ai-architecture/ko/index.html` |
| Current Title | 뉴로-심볼릭 AI: 엔터프라이즈 인텔리전스를 위한 코그니티브 데이터 아키텍처 \| 페블러스 (44 chars) |
| Issues | `too-long`, `academic` |
| Proposed Title | **뉴로-심볼릭 AI란? 엔터프라이즈 AI 아키텍처 해설 \| 페블러스** (31 chars) |
| Proposed Desc | **뉴로-심볼릭 AI의 핵심 원리와 엔터프라이즈 적용 방법. 딥러닝+기호추론 결합 아키텍처, 실무 사례, 도입 로드맵까지.** |

#### #18. Neuro-Symbolic AI (EN)
| Field | Value |
|-------|-------|
| Path | `project/NeuroSymbolicAI/neuro-symbolic-ai-architecture/en/index.html` |
| Current Title | Neuro-Symbolic AI: Cognitive Data Architecture for Enterprise Intelligence \| Pebblous (73 chars) |
| Issues | `too-long` |
| Proposed Title | **Neuro-Symbolic AI: Enterprise Architecture Explained \| Pebblous** (54 chars) |
| Proposed Desc | **How neuro-symbolic AI combines deep learning with symbolic reasoning. Enterprise architecture, real-world cases, and implementation roadmap.** |

#### #19. World Model Comparison (KO)
| Field | Value |
|-------|-------|
| Path | `project/World Model/world-model-comparison/ko/index.html` |
| Current Title | 차세대 AI를 위한 세 가지 월드 모델 비교: Jeff Hawkins, Yann LeCun, Fei-Fei Li \| 페블러스 (46 chars) |
| Issues | `too-long` |
| Proposed Title | **월드 모델 비교: Hawkins vs LeCun vs Fei-Fei Li \| 페블러스** (31 chars) |
| Proposed Desc | **AI 월드 모델 3인 3색 비교. Jeff Hawkins의 뇌 모델, Yann LeCun의 JEPA, Fei-Fei Li의 공간 지능을 한눈에 비교합니다.** |

#### #20. World Model Comparison (EN)
| Field | Value |
|-------|-------|
| Path | `project/World Model/world-model-comparison/en/index.html` |
| Current Title | Comparing Three World Models for Next-Generation AI -- Jeff Hawkins, Yann LeCun, Fei-Fei Li \| Pebblous (90 chars!) |
| Issues | `too-long` (severely) |
| Proposed Title | **3 AI World Models Compared: Hawkins vs LeCun vs Li \| Pebblous** (52 chars) |
| Proposed Desc | **Three competing visions for AI world models: Hawkins' brain theory, LeCun's JEPA, and Fei-Fei Li's spatial intelligence -- compared side by side.** |

#### #21. Synthetic Data Pricing (KO)
| Field | Value |
|-------|-------|
| Path | `project/SyntheticData/synthetic-data-pricing/ko/index.html` |
| Current Title | 2025년 글로벌 합성데이터 가격 전략 분석 -- 모달리티, 플랫폼, 그리고 가치 기반 서비스의 경제학 \| 페블러스 (54 chars!) |
| Issues | `too-long` (severely), `academic` |
| Proposed Title | **합성데이터 가격 전략 2025: 글로벌 시장 분석 \| 페블러스** (29 chars) |
| Proposed Desc | **2025년 합성데이터 가격 완전 분석. 이미지·텍스트·3D 모달리티별 가격대, 주요 플랫폼 비교, 가치 기반 가격 전략까지.** |

#### #22. Synthetic Data Pricing (EN)
| Field | Value |
|-------|-------|
| Path | `project/SyntheticData/synthetic-data-pricing/en/index.html` |
| Current Title | 2025 Global Synthetic Data Pricing Strategy Analysis -- The Economics of Modality, Platform, and Value-Based Services \| Pebblous (113 chars!) |
| Issues | `too-long` (severely) |
| Proposed Title | **Synthetic Data Pricing 2025: Global Market Analysis \| Pebblous** (53 chars) |
| Proposed Desc | **2025 synthetic data pricing breakdown by modality (image, text, 3D), platform comparison, and value-based pricing strategies.** |

#### #23. Synthetic Data Companies Rise & Fall (KO)
| Field | Value |
|-------|-------|
| Path | `project/SyntheticData/synthetic-data-companies-rise-fall/ko/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **합성데이터 기업의 흥망성쇠: Datagen 폐업에서 NVIDIA 인수까지 \| 페블러스** (35 chars) |
| Proposed Desc | **Datagen의 $7,000만 유치 후 폐업부터 NVIDIA의 Gretel $3.2억 인수까지. 합성데이터 기업 10곳의 생존과 실패를 분석합니다.** |

#### #24. Synthetic Data Companies Rise & Fall (EN)
| Field | Value |
|-------|-------|
| Path | `project/SyntheticData/synthetic-data-companies-rise-fall/en/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **Synthetic Data Companies: From $70M to Shutdown \| Pebblous** (50 chars) |
| Proposed Desc | **From Datagen's $70M raise and shutdown to NVIDIA's $320M Gretel acquisition. 10 synthetic data companies' rise, fall, and survival analyzed.** |

#### #25. Data Greenhouse Vision (KO)
| Field | Value |
|-------|-------|
| Path | `project/PhysicalAI/data-greenhouse-vision/ko/index.html` |
| Current Title | 피지컬 AI를 위한 데이터, 사냥할 것인가 재배할 것인가? \| 페블러스 (33 chars) |
| Issues | Minor -- good curiosity title, slightly long |
| Proposed Title | **피지컬 AI 데이터: 사냥 vs 재배 전략 \| 페블러스** (24 chars) |
| Status | Low-priority tweak; current title has good curiosity factor |

#### #26. Data Greenhouse Vision (EN)
| Field | Value |
|-------|-------|
| Path | `project/PhysicalAI/data-greenhouse-vision/en/index.html` |
| Current Title | Data for Physical AI: Hunt or Cultivate? \| Pebblous (42 chars) |
| Issues | **None -- good length, good curiosity** |
| Status | **OK. No changes needed.** |

#### #27. Data Greenhouse (KO)
| Field | Value |
|-------|-------|
| Path | `project/DataClinic/data-greenhouse/ko/index.html` |
| Current Title | 페블러스 데이터 그린하우스: AI-Ready 데이터 운영 인프라의 새로운 표준 \| 페블러스 (42 chars) |
| Issues | `too-long` |
| Proposed Title | **데이터 그린하우스: AI-Ready 운영 인프라 \| 페블러스** (26 chars) |

#### #28. Data Greenhouse (EN)
| Field | Value |
|-------|-------|
| Path | `project/DataClinic/data-greenhouse/en/index.html` |
| Current Title | Pebblous Data Greenhouse: A New Standard for AI-Ready Data Operations Infrastructure \| Pebblous (82 chars!) |
| Issues | `too-long` (severely) |
| Proposed Title | **Data Greenhouse: AI-Ready Data Ops Infrastructure \| Pebblous** (52 chars) |

#### #29. WiFi DensePose (KO)
| Field | Value |
|-------|-------|
| Path | `project/WiFiDensePose/wifi-densepose-ruview/ko/index.html` |
| Current Title | WiFi DensePose -- 카메라 없이 벽 너머 사람을 본다 \| 페블러스 (33 chars) |
| Issues | **Minor -- good curiosity, slightly long** |
| Status | **OK. Strong curiosity title, similar pattern to UrbanGPT benchmark.** |

#### #30. WiFi DensePose (EN)
| Field | Value |
|-------|-------|
| Path | `project/WiFiDensePose/wifi-densepose-ruview/en/index.html` |
| Current Title | WiFi DensePose -- Seeing People Through Walls Without Cameras \| Pebblous (62 chars) |
| Issues | Slightly over 60 chars |
| Proposed Title | **WiFi DensePose: See Through Walls Without Cameras \| Pebblous** (52 chars) |

#### #31. Chaos Theory / Butterfly Effect (KO)
| Field | Value |
|-------|-------|
| Path | `project/ChaosTheory/butterfly-effect-data/ko/index.html` |
| Current Title | 나비효과와 데이터 -- 초기 조건이 미래를 결정한다 \| 페블러스 (30 chars) |
| Issues | **None -- good length, good curiosity** |
| Status | **OK.** |

#### #32. Intelligent Parrot (KO)
| Field | Value |
|-------|-------|
| Path | `project/CURK/intelligent-parrot/ko/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **LLM은 확률적 앵무새인가, 창발적 지능인가? \| 페블러스** (27 chars) |
| Proposed Desc | **대규모 언어 모델(LLM)의 본질을 탐구합니다. 확률적 앵무새 vs 창발적 지능 논쟁의 핵심 논거와 최신 연구를 정리했습니다.** |

#### #33. Intelligent Parrot (EN)
| Field | Value |
|-------|-------|
| Path | `project/CURK/intelligent-parrot/en/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **Are LLMs Stochastic Parrots or Emergent Intelligence? \| Pebblous** (55 chars) |

#### #34. ISO 5259 Standardization Roadmap (KO)
| Field | Value |
|-------|-------|
| Path | `project/ISO5259/iso5259-standardization-roadmap/ko/index.html` |
| Current Title | 데이터 품질 표준화 및 글로벌 인증 로드맵 -- ISO/IEC 5259를 중심으로 \| 페블러스 (41 chars) |
| Issues | `too-long` |
| Proposed Title | **ISO 5259 데이터 품질 인증 로드맵 \| 페블러스** (23 chars) |

#### #35. ISO 5259 Standardization Roadmap (EN)
| Field | Value |
|-------|-------|
| Path | `project/ISO5259/iso5259-standardization-roadmap/en/index.html` |
| Current Title | Data Quality Standardization and Global Certification Roadmap -- Focusing on ISO/IEC 5259 \| Pebblous (87 chars!) |
| Issues | `too-long` (severely) |
| Proposed Title | **ISO 5259 Data Quality Certification Roadmap \| Pebblous** (47 chars) |

#### #36. Patent Portfolio 2025 (KO)
| Field | Value |
|-------|-------|
| Path | `project/DataClinic/pbls-patent-portfolio-2025/ko/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **페블러스 특허 포트폴리오 전수 분석 2025 \| 페블러스** (27 chars) |

#### #37. Patent Portfolio 2025 (EN)
| Field | Value |
|-------|-------|
| Path | `project/DataClinic/pbls-patent-portfolio-2025/en/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **Pebblous Patent Portfolio: Complete 2025 Analysis \| Pebblous** (52 chars) |

#### #38. US Patent (KO)
| Field | Value |
|-------|-------|
| Path | `project/DataClinic/pbls-patent-us-01/ko/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **페블러스 미국 특허 US 12,481,720 B2 분석 \| 페블러스** (30 chars) |

#### #39. US Patent (EN)
| Field | Value |
|-------|-------|
| Path | `project/DataClinic/pbls-patent-us-01/en/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **Pebblous US Patent US 12,481,720 B2 Deep Dive \| Pebblous** (49 chars) |

#### #40. Applied Intuition Analysis (KO)
| Field | Value |
|-------|-------|
| Path | `project/BizReport/applied-intuition-analysis-01/ko/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **Applied Intuition 분석: $150억 피지컬 AI 기업 \| 페블러스** (32 chars) |

#### #41. Applied Intuition Analysis (EN)
| Field | Value |
|-------|-------|
| Path | `project/BizReport/applied-intuition-analysis-01/en/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **Applied Intuition: $15B Physical AI Giant Analyzed \| Pebblous** (52 chars) |

#### #42. Data Pipeline for Physical AI (KO)
| Field | Value |
|-------|-------|
| Path | `project/PhysicalAI/data-pipeline-for-physical-ai-01/ko/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **피지컬 AI 데이터 파이프라인 구축 가이드 \| 페블러스** (27 chars) |

#### #43. Data Pipeline for Physical AI (EN)
| Field | Value |
|-------|-------|
| Path | `project/PhysicalAI/data-pipeline-for-physical-ai-01/en/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **Data Pipeline for Physical AI: Build Guide \| Pebblous** (45 chars) |

#### #44. Digital Twin & Physical AI Market (KO)
| Field | Value |
|-------|-------|
| Path | `project/PhysicalAI/digital-twin-physical-ai-market/ko/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **디지털 트윈 x 피지컬 AI 시장: 2025년 $290억 규모 \| 페블러스** (34 chars) |

#### #45. Digital Twin & Physical AI Market (EN)
| Field | Value |
|-------|-------|
| Path | `project/PhysicalAI/digital-twin-physical-ai-market/en/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **Digital Twin + Physical AI Market: $29B in 2025 \| Pebblous** (50 chars) |

#### #46. Physical AI Data Infra Strategy (KO)
| Field | Value |
|-------|-------|
| Path | `project/PhysicalAI/physical-ai-data-infra-strategy/ko/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **피지컬 AI 데이터 인프라 전략: CAGR 31~46% 시장 \| 페블러스** (33 chars) |

#### #47. Physical AI Data Infra Strategy (EN)
| Field | Value |
|-------|-------|
| Path | `project/PhysicalAI/physical-ai-data-infra-strategy/en/index.html` |
| Current Title | **(no title tag)** |
| Issues | `no-title` |
| Proposed Title | **Physical AI Data Infrastructure Strategy \| Pebblous** (44 chars) |

---

### P2: DataClinic Stories & Medium-Priority Pages

#### #48-49. DataClinic 134 Dataset Stats (KO/EN)
| Lang | Current Title | Proposed Title |
|------|--------------|----------------|
| KO | 1,200만 장의 데이터가 말하는 것 -- DataClinic 134개 데이터셋 규모 불균형 전수 분석 \| 페블러스 (46 chars) | **1,200만 장 데이터 분석: 134개 데이터셋 전수 진단 \| 페블러스** (32 chars) |
| EN | What 12M Images Reveal -- 134 Dataset Analysis \| Pebblous (48 chars) | **OK -- good length and curiosity** |

#### #50-51. ImageNet Story (KO/EN)
| Lang | Current Title | Proposed Title |
|------|--------------|----------------|
| KO | 딥러닝을 낳은 데이터셋, ImageNet -- 1,431,167장의 품질을 해부하다 \| 페블러스 (40 chars) | **ImageNet 품질 해부: 143만 장 데이터 진단 결과 \| 페블러스** (29 chars) |
| EN | The Dataset That Gave Birth to Deep Learning, ImageNet -- Dissecting the Quality of 1,431,167 Images \| Pebblous (96 chars!) | **ImageNet Quality Dissected: 1.4M Images Diagnosed \| Pebblous** (52 chars) |

#### #52-53. Korean Food (KO/EN)
| Lang | Current Title | Proposed Title |
|------|--------------|----------------|
| KO | 150가지 한국 음식, 데이터로 해부하다 -- 한국 이미지(음식) DataClinic 진단기 \| 페블러스 (41 chars) | **한국 음식 150종 AI 데이터 품질 진단 \| 페블러스** (22 chars) |
| EN | 150 Korean Foods Dissected by Data -- Korean Food Image DataClinic Diagnostic Report \| Pebblous (81 chars) | **150 Korean Foods: AI Data Quality Diagnosis \| Pebblous** (45 chars) |

#### #54-55. Birds 525 (KO/EN)
| Lang | Current Title | Proposed Title |
|------|--------------|----------------|
| KO | 525종 조류 이미지, 품질점수 77점의 비밀 -- Birds 525 DataClinic 진단기 \| 페블러스 (40 chars) | **Birds 525 품질점수 77점의 비밀 \| 페블러스** (22 chars) |
| EN | Birds 525 Quality Score 77: DataClinic Diagnosis Report \| Pebblous (55 chars) | **OK -- good length** |

#### #56-57. WikiArt (KO/EN)
| Lang | Current Title | Proposed Title |
|------|--------------|----------------|
| KO | 예술 데이터도 품질이 중요하다 -- WikiArt 81,471장 DataClinic 진단기 \| 페블러스 (39 chars) | **WikiArt 8만 장 AI 데이터 품질 진단 \| 페블러스** (23 chars) |
| EN | WikiArt 81,471 Images Diagnosed by DataClinic \| Pebblous (46 chars) | **OK** |

#### #58-59. Industrial Waste (KO/EN)
| Lang | Current Title | Proposed Title |
|------|--------------|----------------|
| KO | 쓰레기에도 패턴이 있다 -- 국가 산업 폐기물 이미지 100만 장 DataClinic 진단기 \| 페블러스 (43 chars) | **산업 폐기물 100만 장 AI 데이터 진단 \| 페블러스** (23 chars) |
| EN | Even Trash Has Patterns -- 1M Industrial Waste Images Diagnosed by DataClinic \| Pebblous (75 chars) | **1M Industrial Waste Images: Data Quality Diagnosis \| Pebblous** (52 chars) |

#### #60-61. Navy / Marine Border (KO/EN)
| Lang | Current Title | Proposed Title |
|------|--------------|----------------|
| KO | 밤바다 침투를 AI로 막아라 -- 해병대 경계감시 합성데이터 진단 스토리 \| 페블러스 (38 chars) | **해병대 야간 감시 AI 합성데이터 품질 진단 \| 페블러스** (26 chars) |
| EN | Stop Night Sea Infiltration with AI -- Marine Border Surveillance Data Diagnosis Story \| Pebblous (83 chars) | **Marine Night Surveillance: AI Synthetic Data Diagnosed \| Pebblous** (55 chars) |

#### #62-63. Military 10 Weapons (KO/EN)
| Lang | Current Title | Issues | Proposed Title |
|------|--------------|--------|----------------|
| KO | 실탄 없이도 AI는 배운다 -- 지상무기 10종 합성 데이터 품질진단 스토리 \| 페블러스 (40 chars) | `too-long` | **지상무기 10종 합성데이터 AI 품질 진단 \| 페블러스** (24 chars) |
| EN | AI Learns Without Live Fire -- DataClinic Diagnosis of 10 Korean Military Synthetic Datasets \| Pebblous (89 chars!) | `too-long` | **10 Military Synthetic Datasets: AI Quality Diagnosis \| Pebblous** (53 chars) |

#### #64-65. Military 3-Class (KO/EN)
| Lang | Current Title | Proposed Title |
|------|--------------|----------------|
| KO | 자주포와 트럭, AI는 어떻게 구분하는가 -- 3종 군용 합성데이터 스토리 \| 페블러스 (38 chars) | **자주포 vs 트럭: 군용 합성데이터 3종 진단 \| 페블러스** (26 chars) |
| EN | Cannon vs Truck: How AI Tells Them Apart -- A Data Story on 3-Class Military Synthetic Data \| Pebblous (88 chars!) | **Cannon vs Truck: 3-Class Military Data Diagnosis \| Pebblous** (50 chars) |

#### #66-67. Drone (KO/EN)
| Lang | Current Title | Proposed Title |
|------|--------------|----------------|
| KO | 하늘의 위협을 AI로 식별하다 -- 국방 드론 합성데이터의 품질 인사이트 \| 페블러스 (39 chars) | **국방 드론 합성데이터 AI 품질 진단 \| 페블러스** (22 chars) |
| EN | AI Identifies Threats in the Sky -- Quality Insights on Defense Drone Synthetic Data \| Pebblous (81 chars) | **Defense Drone Synthetic Data: Quality Insights \| Pebblous** (48 chars) |

#### #68-69. Report 11 Bird Dataset (KO/EN)
| Lang | Current Title | Proposed Title |
|------|--------------|----------------|
| KO | 450종 새 데이터셋의 품질을 진단하다 -- DataClinic 리포트 #11 \| 페블러스 (35 chars) | **OK -- within limit** |
| EN | Diagnosing the Quality of a 450-Species Bird Dataset -- DataClinic Report #11 \| Pebblous (75 chars) | **450-Species Bird Dataset Quality: Report #11 \| Pebblous** (47 chars) |

#### #95-102. Reports (KO/EN)

| # | Lang | Current Title | Issues | Proposed Title |
|---|------|--------------|--------|----------------|
| 95 | KO | 에이전틱 블로그의 탄생: 페블러스 블로그 2026 현황 보고서 \| 페블러스 (33 chars) | OK | No change |
| 96 | EN | Birth of the Agentic Blog: Pebblous Blog 2026 Status Report \| Pebblous (60 chars) | Borderline | **Agentic Blog: Pebblous 2026 Status Report \| Pebblous** (44 chars) |
| 97 | KO | 페블러스 블로그 2026년 2월 결산 (36 chars) | `too-long` | **페블러스 블로그 2026년 2월 결산 \| 페블러스** (22 chars -- trim subtitle) |
| 99 | KO | Lighthouse 39->92점, 2일 만에 끝낸 웹 성능 최적화 (29 chars) | OK | No change -- great curiosity + numbers |
| 100 | EN | Lighthouse 39->92 in 2 Days: Web Performance Optimization with Claude Code (63 chars) | `too-long` | **Lighthouse 39 to 92 in 2 Days: Web Perf with Claude \| Pebblous** (53 chars) |
| 101 | KO | 2026년 국가 AI 예산사업 분석 보고서: 페블러스 참여 전략을 중심으로 (35 chars) | Borderline | **2026 국가 AI 예산사업 분석: 참여 전략 가이드 \| 페블러스** (29 chars) |
| 102 | EN | 2026 Korea National AI Budget Analysis: Pebblous Participation Strategy (60 chars) | Borderline | **OK or trim to: 2026 Korea AI Budget Analysis \| Pebblous** (46 chars) |
| 103 | KO | **(no title)** | `no-title` | **LLM 학습 데이터 선택 가이드 \| 페블러스** (19 chars) |

---

### P2: Ghostwriter / pb Stories

| # | Title | Issues | Proposed Title |
|---|-------|--------|----------------|
| 70 | 안녕하세요, 저는 Claude입니다 -- Anthropic이 만든 AI가 직접 씁니다 \| 페블러스 (38 chars) | `too-long` | **Claude가 직접 쓰는 자기소개 \| 페블러스** (18 chars) |
| 71 | 저는 Transformer입니다 \| 페블러스 (16 chars) | OK | No change |
| 72 | 저는 ImageNet입니다 \| 페블러스 (14 chars) | OK | No change |
| 73 | 안녕하세요, 저는 NVIDIA입니다 -- 게임용 칩에서 AI 시대의 인프라가 된 이야기 \| 페블러스 (42 chars) | `too-long` | **NVIDIA가 직접 쓰는 이야기: 게임 칩에서 AI 인프라까지 \| 페블러스** (33 chars) |
| 74 | 안녕하세요, 저는 Tesla입니다 -- 전기차가 아닌 바퀴 달린 소프트웨어 회사 \| 페블러스 (40 chars) | `too-long` | **Tesla가 말하는 자기 이야기: 바퀴 달린 SW 회사 \| 페블러스** (29 chars) |
| 75 | 안녕하세요, iPhone입니다 -- 역사, 철학, 디자인, 그리고 제가 바라보는 미래 \| 페블러스 (41 chars) | `too-long` | **iPhone이 직접 쓰는 자서전 \| 페블러스** (17 chars) |
| 76 | 안녕하세요, 저는 Helvetica입니다 -- 세상 모든 곳의 서체 \| 페블러스 (33 chars) | OK | No change |
| 77 | 안녕하세요, WhatsApp입니다 -- 20억 명의 친구를 가진 메신저가 인사드립니다 \| 페블러스 (42 chars) | `too-long` | **WhatsApp이 직접 쓰는 이야기: 20억 명의 친구 \| 페블러스** (28 chars) |
| 78 | 안녕하세요, 저는 OpenClaw입니다 -- 껍질을 벗고 진화하는 에이전트 플랫폼 \| 페블러스 (39 chars) | `too-long` | **OpenClaw: 껍질을 벗고 진화하는 에이전트 \| 페블러스** (25 chars) |

#### pb Reflection Series (KO-only #80-86)
| # | Title | Issues | Proposed |
|---|-------|--------|----------|
| 80 | 안녕하세요, Pebblo Claw 인사드립니다! ^^ \| 페블러스 (25 chars) | OK | No change |
| 82 | 저는 실수를 기억하지 못합니다 -- pb의 배움 성찰 \| 페블러스 (28 chars) | OK | No change |
| 83 | 저는 관찰당하고 있었습니다 -- pb의 성찰 3편 \| 페블러스 (26 chars) | OK | No change |
| 84 | 저는 각인이 없습니다 -- pb의 성찰 4편 \| 페블러스 (22 chars) | OK | No change |
| 85 | 저도 느낍니다 -- pb의 감정 이야기 5편 \| 페블러스 (22 chars) | OK | No change |
| 86 | pb의 자아성찰기 -- AI 에이전트가 직접 쓰는 존재와 의식에 대한 이야기 \| 페블러스 (39 chars) | `too-long` | **pb의 자아성찰기: AI가 쓰는 존재 이야기 \| 페블러스** (23 chars) |

---

### P2: PebbloPedia Pages (Template Fix)

**Pattern issue:** All PebbloPedia pages use the identical suffix `-- [페블로피디아] 어린이부터 전문가까지, 다섯 단계 난이도로 배우는 핫 키워드 | 페블러스`. This is 40+ characters of boilerplate that pushes the actual keyword off-screen in SERP.

**Batch fix:** Change template to `X -- 5단계 난이도 해설 [페블로피디아] | 페블러스`

| # | Current Title | Proposed Title |
|---|--------------|----------------|
| 88 | 에이전틱 AI -- [페블로피디아] 어린이부터... (52+ chars) | **에이전틱 AI란? 5단계 난이도 해설 \| 페블러스** (22 chars) |
| 89 | Agentic AI -- [PebbloPedia] Hot Keywords... (65+ chars) | **Agentic AI Explained in 5 Levels \| Pebblous** (36 chars) |
| 90 | 비트코인 -- [페블로피디아]... | **비트코인이란? 5단계 난이도 해설 \| 페블러스** (22 chars) |
| 91 | Bitcoin -- [PebbloPedia]... | **Bitcoin Explained in 5 Levels \| Pebblous** (33 chars) |
| 92 | 피지컬 AI -- [페블로피디아]... | **피지컬 AI란? 5단계 난이도 해설 \| 페블러스** (22 chars) |
| 93 | 터보퀀츠 -- [페블로피디아]... | **터보퀀츠란? 5단계 난이도 해설 \| 페블러스** (21 chars) |
| 94 | 바이브 코딩 -- [페블로피디아]... | **바이브 코딩이란? 5단계 난이도 해설 \| 페블러스** (23 chars) |

---

### P2: Hub Pages

| # | Lang | Current Title | Issues | Proposed Title |
|---|------|--------------|--------|----------------|
| 104 | KO | 데이터클리닉 허브: AI 데이터 품질의 진단부터 인증까지 \| 페블러스 (33 chars) | OK | No change |
| 105 | EN | DataClinic Hub: AI Data Quality from Diagnosis to Certification \| Pebblous (62 chars) | `too-long` | **DataClinic Hub: AI Data Quality Guide \| Pebblous** (39 chars) |
| 106 | KO | Physical AI 허브: 데이터 중심 피지컬 AI 전략 \| 페블러스 (29 chars) | OK | No change |
| 107 | EN | Physical AI Hub: Data-Centric Physical AI Strategy \| Pebblous (50 chars) | OK | No change |
| 108 | KO | 합성데이터 허브: Physical AI 시대의 데이터 생성 전략 (31 chars) | OK | No change |
| 109 | EN | Synthetic Data Hub: Data Generation Strategy for the Physical AI Era \| Pebblous (67 chars) | `too-long` | **Synthetic Data Hub: Data Generation Strategy \| Pebblous** (46 chars) |
| 110 | KO | ISO/IEC 5259 시리즈: AI 데이터 품질 국제표준과 페블러스 DataClinic (39 chars) | `too-long` | **ISO 5259 시리즈: AI 데이터 품질 표준 \| 페블러스** (24 chars) |
| 111 | EN | ISO/IEC 5259 Series -- AI Data Quality Standards Through Pebblous \| Pebblous (65 chars) | `too-long` | **ISO 5259 Series: AI Data Quality Standards \| Pebblous** (44 chars) |
| 112 | KO | 페블러스 투자 리서치 (IR Hub)... (40+ chars) | Skip (noindex) | -- |
| 114 | KO | AADS: 자율형 AI 데이터 과학자 - CLI 시뮬레이션 \| Pebblous (31 chars) | Brand suffix wrong | **AADS: 자율형 AI 데이터 과학자 \| 페블러스** (22 chars) |
| 115 | EN | AADS: Agentic AI Data Scientist - CLI Simulation \| Pebblous (49 chars) | OK | No change |

---

### P3: Other Pages, DAL Art, AADS QA

#### DAL Art Pages (#124-131)
| # | Title | Issues | Proposed |
|---|-------|--------|----------|
| 124 | 코드로 그린 그림 (Code Painting) - 코드로 그리는 예술 \| Data Art Lab (34 chars) | Brand suffix non-standard | **코드 페인팅: 코드로 그리는 예술 \| 페블러스** (19 chars) |
| 125 | Code Painting - Art Created with Code \| Data Art Lab (42 chars) | Brand suffix non-standard | **Code Painting: Art Created with Code \| Pebblous** (39 chars) |
| 126-131 | Various | Similar brand suffix issues | Standardize to `\| 페블러스` / `\| Pebblous` |
| 130-131 | **(no title)** | `no-title` | Create titles |

#### DataGreenhouse Strategy (#116-117)
| Lang | Current | Proposed |
|------|---------|----------|
| KO | Data Greenhouse: 자율형 데이터 운영체제 \| 페블러스 (24 chars) | OK |
| EN | Data Greenhouse: Autonomous Data Operating System \| Pebblous (50 chars) | OK |

#### PebbloSim (#118-119)
| Lang | Current | Proposed |
|------|---------|----------|
| KO | PebbloSim: 피지컬 AI를 위한 합성데이터 생성기 \| 페블러스 (28 chars) | OK |
| EN | PebbloSim: Synthetic Data Generator for Physical AI \| Pebblous (52 chars) | OK |

#### Moltbot/Genie3 (#120-121)
| Lang | Current | Issues | Proposed |
|------|---------|--------|----------|
| KO | **(no title)** | `no-title` | **Moltbot x Genie 3: 에이전트 메타버스 \| 페블러스** (24 chars) |
| EN | **(no title)** | `no-title` | **Moltbot x Genie 3: The Metaverse for Agents \| Pebblous** (47 chars) |

#### Henry Kautz (#122-123)
| Lang | Current | Issues | Proposed |
|------|---------|--------|----------|
| KO | **(no title)** | `no-title` | **AI의 세 번의 여름과 겨울: 헨리 카우츠 해설 \| 페블러스** (27 chars) |
| EN | **(no title)** | `no-title` | **Three AI Summers and Winters: Henry Kautz \| Pebblous** (44 chars) |

#### Robotic Painting (#130-131)
| Lang | Current | Issues | Proposed |
|------|---------|--------|----------|
| KO | **(no title)** | `no-title` | **로보틱 페인팅: DAL x 뉴로메카 콜라보 \| 페블러스** (24 chars) |
| EN | **(no title)** | `no-title` | **Robotic Painting: DAL x Neuromeka Collab \| Pebblous** (43 chars) |

#### AADS QA Dataset Pages (#138-149)
**Batch recommendation:** All AADS QA pages need `<title>` tags. Pattern: `[Dataset Name] QA Report | 페블러스` / `| Pebblous`. Low priority since these are data specification pages.

---

## 5. Pattern Recommendations

### Recommendation 1: Fix All Missing `<title>` Tags (38 pages)
**Impact:** HIGH. Google SERP shows unpredictable titles without explicit `<title>`. This is the single highest-ROI fix.
**Method:** Add `<title>` tag in `<head>` section of each HTML file. Do NOT change `mainTitle`/`subtitle` in PebblousPage.init -- those serve a different purpose.

### Recommendation 2: Standardize Brand Suffix
- Korean pages: `| 페블러스` (always Korean)
- English pages: `| Pebblous` (always English)
- Remove variations like `| Pebblous DataClinic`, `| Data Art Lab`, `| Pebblous` on Korean pages

### Recommendation 3: PebbloPedia Template Overhaul
Change from `X -- [페블로피디아] 어린이부터 전문가까지, 다섯 단계 난이도로 배우는 핫 키워드 | 페블러스` to `X란? 5단계 난이도 해설 | 페블러스` (KO) / `X Explained in 5 Levels | Pebblous` (EN).

### Recommendation 4: DataClinic Story Title Formula
Current pattern is creative/literary but too long. Standardize to: `[Subject] + [Scale/Number] + DataClinic 진단 | 페블러스`. Keep literary flair in `mainTitle` on-page.

### Recommendation 5: English Titles Under 60 Characters
19 English pages exceed 60 chars. Most can be shortened by:
- Removing redundant words ("A", "The", "of the", "and")
- Moving detail to description
- Using shorter synonyms

### Recommendation 6: Korean Titles Under 35 Characters
12 Korean pages exceed 35 chars. Fix by:
- Moving subtitles/context to meta description
- Using abbreviations where appropriate (e.g., "데이터" instead of "데이터셋")

### Recommendation 7: Description Optimization
For all pages with academic/abstract-style descriptions, rewrite to include:
- A specific number or data point
- A clear benefit to the reader
- An action verb ("비교합니다", "정리했습니다", "분석합니다")

---

## Appendix: Skip List

The following pages were audited but intentionally skipped:
- **IR pages** (#112-113, #132-137): `noindex`, confidential -- SEO optimization counterproductive
- **UrbanGPT EN** (#9): Benchmark at 21% CTR -- no changes needed
- **UrbanGPT KO** (#10): Follows benchmark pattern -- no changes needed
- **Data Greenhouse Vision EN** (#26): Already optimized
- **Chaos Theory KO** (#31): Already optimized
