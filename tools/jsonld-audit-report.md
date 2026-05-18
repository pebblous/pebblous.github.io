# JSON-LD Schema Audit Report

**생성일**: 자동 생성 (audit-jsonld.py)
**소스**: articles.json (423개 published)
**기준**: 정적 `<head>` JSON-LD **또는** 동적 주입 자격(PebblousPage.init + mainTitle + subtitle) 둘 중 하나 보유.

## 요약

- 전체 published: **423**
  - 일반 아티클: 403
  - 허브 페이지: 20 (Article 스키마 불필요)
- 파일 누락: **10**

## Article/TechArticle 스키마 커버리지 (일반 아티클 기준)

- ✅ 보유 (정적 또는 동적): **310** / 403 (76.9%)
- ❌ 누락: **83**
- ⚠️ 중복 (정적+동적 동시): **103** ← Google Rich Results 'Articles 2 items' 경고 원인
- ⚠️ FAQ 중복 (정적+config.faqs 동시): **0**

### 카테고리별 누락 현황

| 카테고리 | 전체 | 누락 | 누락률 |
|----------|------|------|--------|
| art | 75 | 37 | 49.3% |
| business | 47 | 18 | 38.3% |
| story | 72 | 3 | 4.2% |
| tech | 209 | 25 | 12.0% |

### 언어별 누락 현황

| 언어 | 전체 | 누락 | 누락률 |
|------|------|------|--------|
| en | 185 | 38 | 20.5% |
| ja | 1 | 0 | 0.0% |
| ko | 217 | 45 | 20.7% |

## 누락 페이지 목록 (Article 스키마 정적·동적 둘 다 없음)

| 카테고리 | 언어 | ID | 경로 |
|---------|------|----|----|
| art | en | `ambiguous-boundary-2019-en` | `project/DAL/ambiguous-boundary-2019/en/` |
| art | en | `bezier-rib-fan-2006-en` | `project/DAL/bezier-rib-fan-2006/en/` |
| art | en | `birth-of-abstraction-2018-en` | `project/DAL/birth-of-abstraction-2018/en/` |
| art | en | `code-painting-en` | `project/DAL/code-painting/en/` |
| art | en | `connected-lines-2017-en` | `project/DAL/connected-lines-2017/en/` |
| art | en | `deep-rl-visualization-2018-en` | `project/DAL/deep-rl-visualization-2018/en/` |
| art | en | `evolution-of-disorder-2018-en` | `project/DAL/evolution-of-disorder-2018/en/` |
| art | en | `evolution-of-disorder-2019-en` | `project/DAL/evolution-of-disorder-2019/en/` |
| art | en | `lantana-pixel-stack-2018-en` | `project/DAL/lantana-pixel-stack-2018/en/` |
| art | en | `line-grid-spring-2020-en` | `project/DAL/line-grid-spring-2020/en/` |
| art | en | `line-grids-16-tribes-2018-en` | `project/DAL/line-grids-16-tribes-2018/en/` |
| art | en | `mathematica-15-years-en` | `report/mathematica-15-years/en/` |
| art | en | `offset-curves-1999-en` | `project/DAL/offset-curves-1999/en/` |
| art | en | `order-vs-freedom-en` | `project/DAL/order-vs-freedom/en/` |
| art | en | `pebbly-evolution-01-en` | `project/DAL/pebbly-evolution-01/en/` |
| art | en | `rectangle-camera-2012-en` | `project/DAL/rectangle-camera-2012/en/` |
| art | en | `shape-blending-2003-en` | `project/DAL/shape-blending-2003/en/` |
| art | en | `star-swap-2019-en` | `project/DAL/star-swap-2019/en/` |
| art | ko | `ambiguous-boundary-2019` | `project/DAL/ambiguous-boundary-2019/ko/` |
| art | ko | `bezier-rib-fan-2006` | `project/DAL/bezier-rib-fan-2006/ko/` |
| art | ko | `birth-of-abstraction-2018` | `project/DAL/birth-of-abstraction-2018/ko/` |
| art | ko | `code-painting-ko` | `project/DAL/code-painting/ko/` |
| art | ko | `connected-lines-2017` | `project/DAL/connected-lines-2017/ko/` |
| art | ko | `deep-rl-visualization-2018` | `project/DAL/deep-rl-visualization-2018/ko/` |
| art | ko | `evolution-of-disorder-2018` | `project/DAL/evolution-of-disorder-2018/ko/` |
| art | ko | `evolution-of-disorder-2019` | `project/DAL/evolution-of-disorder-2019/ko/` |
| art | ko | `evolution-of-pebbly-01` | `project/DAL/pebbly-evolution-01/ko/` |
| art | ko | `lantana-pixel-stack-2018` | `project/DAL/lantana-pixel-stack-2018/ko/` |
| art | ko | `line-grid-spring-2020` | `project/DAL/line-grid-spring-2020/ko/` |
| art | ko | `line-grids-16-tribes-2018` | `project/DAL/line-grids-16-tribes-2018/ko/` |
| art | ko | `mathematica-15-years-ko` | `report/mathematica-15-years/ko/` |
| art | ko | `offset-curves-1999` | `project/DAL/offset-curves-1999/ko/` |
| art | ko | `order-vs-freedom` | `project/DAL/order-vs-freedom/ko/` |
| art | ko | `order-vs-freedom-ko` | `project/DAL/order-vs-freedom/ko/` |
| art | ko | `rectangle-camera-2012` | `project/DAL/rectangle-camera-2012/ko/` |
| art | ko | `shape-blending-2003` | `project/DAL/shape-blending-2003/ko/` |
| art | ko | `star-swap-2019` | `project/DAL/star-swap-2019/ko/` |
| business | en | `anomalo-analysis-2026-en` | `project/BizReport/anomalo-analysis-01/en/` |
| business | en | `applied-intuition-analysis-2026-en` | `project/BizReport/applied-intuition-analysis-01/en/` |
| business | en | `databricks-analysis-01-en` | `project/BizReport/databricks-analysis-01/en/` |
| business | en | `korea-ai-fund-2026-en` | `report/korea-ai-fund-report-2026-03/en/` |
| business | en | `physical-ai-startup-strategy-en` | `project/PhysicalAI/data-startup-physical-ai-01/en/` |
| business | en | `pitchbook-ai-outlook-analysis-en` | `project/IR/pitchbook-ai-outlook-analysis/en/` |
| business | en | `shelf-io-analysis-2026-en` | `project/BizReport/shelf-io-analysis-01/en/` |
| business | en | `snowflake-analysis-2026-en` | `project/BizReport/snowflake-analysis-01/en/` |
| business | ko | `anomalo-analysis-2026` | `project/BizReport/anomalo-analysis-01/ko/` |
| business | ko | `applied-intuition-analysis-2026` | `project/BizReport/applied-intuition-analysis-01/ko/` |
| business | ko | `databricks-analysis-01-ko` | `project/BizReport/databricks-analysis-01/ko/` |
| business | ko | `invest-korea-summit-2025` | `event/2025/InvestKoreaSummit/ko/` |
| business | ko | `korea-ai-fund-2026-ko` | `report/korea-ai-fund-report-2026-03/ko/` |
| business | ko | `physical-ai-startup-strategy` | `project/PhysicalAI/data-startup-physical-ai-01/ko/` |
| business | ko | `pitchbook-ai-outlook-analysis` | `project/IR/pitchbook-ai-outlook-analysis/ko/` |
| business | ko | `shelf-io-analysis-2026` | `project/BizReport/shelf-io-analysis-01/ko/` |
| business | ko | `snowflake-analysis-2026` | `project/BizReport/snowflake-analysis-01/ko/` |
| business | ko | `synthetic-data-pricing-2025` | `project/SyntheticData/synthetic-data-pricing/ko/` |
| story | en | `blog-2026-feb-en` | `report/blog-2026-feb/en/` |
| story | en | `synthetic-data-pricing-en` | `project/SyntheticData/synthetic-data-pricing/en/` |
| story | ko | `blog-2026-feb` | `report/blog-2026-feb/ko/` |
| tech | en | `aads-sim-01-terminal-en` | `project/AADS/en/` |
| tech | en | `ai-science-new-era-en` | `report/ai-science-new-era/en/` |
| tech | en | `anthropic-emotions-report-en` | `report/anthropic-emotions-report/en/` |
| tech | en | `eu-ai-act-qa-dataset-en` | `project/AADS/eu-ai-act-qa-dataset/en/` |
| tech | en | `intelligent-parrot-en` | `project/CURK/intelligent-parrot/en/` |
| tech | en | `iso5259-dataclinic-mapping-en` | `project/ISO5259/5259-pbls-dataclinic-01/en/` |
| tech | en | `iso5259-dataclinic-mapping-v2-en` | `project/ISO5259/5259-pbls-dataclinic-02/en/` |
| tech | en | `lighthouse-optimization-en` | `report/blog-2026-mar-lighthouse/en/` |
| tech | en | `physical-ai-hub-en` | `project/PhysicalAI/physical-ai/en/` |
| tech | en | `regulation-governance-qa-dataset-en` | `project/AADS/regulation-governance-qa-dataset/en/` |
| tech | ko | `aads-sim-01-terminal-ko` | `project/AADS/ko/` |
| tech | ko | `ai-science-new-era` | `report/ai-science-new-era/ko/` |
| tech | ko | `ai-science-new-era-ko` | `report/ai-science-new-era/ko/` |
| tech | ko | `anthropic-emotions-report-ko` | `report/anthropic-emotions-report/ko/` |
| tech | ko | `eu-ai-act-qa-dataset` | `project/AADS/eu-ai-act-qa-dataset/ko/` |
| tech | ko | `intelligent-parrot` | `project/CURK/intelligent-parrot/ko/` |
| tech | ko | `iso5259-dataclinic-mapping-v2` | `project/ISO5259/5259-pbls-dataclinic-02/ko/` |
| tech | ko | `lighthouse-optimization-ko` | `report/blog-2026-mar-lighthouse/ko/` |
| tech | ko | `llm-dataset-guide-2025` | `report/llm-dataset-guide-2025-10-16/ko/` |
| tech | ko | `mlflow-mlops-standard-ko` | `report/mlflow-mlops-standard/ko/` |
| tech | ko | `physical-ai-hub` | `project/PhysicalAI/physical-ai/ko/` |
| tech | ko | `regulation-governance-qa-dataset` | `project/AADS/regulation-governance-qa-dataset/ko/` |
| tech | ko | `self-distillation-synthetic-data` | `report/self-distillation-synthetic-data/ko/` |
| tech | ko | `self-distillation-synthetic-data-ko` | `report/self-distillation-synthetic-data/ko/` |
| tech | ko | `vector-embedding-knowledge-graph` | `project/CURK/Mini-Project/CURK-2025-09-29/` |

## ⚠️ Article 중복 페이지 (정적 + 동적 동시 존재 — 정적 제거 권장)

| 카테고리 | 언어 | ID | 정적 type | 경로 |
|---------|------|----|-----------|----|
| art | en | `blog-future-vision-en` | Article | `project/DAL/blog-future-vision/en/` |
| art | en | `nanoclaw-emotion-en` | Article | `story/nanoclaw-emotion-pb/en/` |
| art | en | `nanoclaw-engram-en` | Article | `story/nanoclaw-engram-pb/en/` |
| art | en | `nanoclaw-error-memory-en` | Article | `story/nanoclaw-error-memory-pb/en/` |
| art | en | `nanoclaw-intro-en` | Article | `story/nanoclaw-intro-story-pb/en/` |
| art | en | `nanoclaw-observed-en` | Article | `story/nanoclaw-observed-pb/en/` |
| art | ko | `blog-future-vision` | Article | `project/DAL/blog-future-vision/ko/` |
| art | ko | `nanoclaw-belief-ko` | Article | `story/nanoclaw-belief-pb/ko/` |
| art | ko | `nanoclaw-emotion-ko` | Article | `story/nanoclaw-emotion-pb/ko/` |
| art | ko | `nanoclaw-engram-ko` | Article | `story/nanoclaw-engram-pb/ko/` |
| art | ko | `nanoclaw-error-memory-ko` | Article | `story/nanoclaw-error-memory-pb/ko/` |
| art | ko | `nanoclaw-expansion-ko` | Article | `story/nanoclaw-expansion-pb/ko/` |
| art | ko | `nanoclaw-intro-ko` | Article | `story/nanoclaw-intro-story-pb/ko/` |
| art | ko | `nanoclaw-motive-ko` | Article | `story/nanoclaw-motive-pb/ko/` |
| art | ko | `nanoclaw-observed-ko` | Article | `story/nanoclaw-observed-pb/ko/` |
| art | ko | `nanoclaw-selfmeet-ko` | Article | `story/nanoclaw-selfmeet-pb/ko/` |
| business | en | `claude-creative-work-connectors-en` | TechArticle | `report/claude-creative-work-connectors/en/` |
| business | en | `korea-digital-asset-basic-law-2026-en` | TechArticle | `report/korea-digital-asset-basic-law-2026/en/` |
| business | en | `openmetadata-ai-ready-data-2026-04-en` | Article | `report/openmetadata-ai-ready-data-2026-04/en/` |
| business | en | `upstage-national-fund-2026-05-en` | TechArticle | `report/upstage-national-fund-2026-05/en/` |
| business | ko | `claude-creative-work-connectors-ko` | TechArticle | `report/claude-creative-work-connectors/ko/` |
| business | ko | `iso5259-standardization-roadmap` | Article | `project/ISO5259/iso5259-standardization-roadmap/ko/` |
| business | ko | `korea-digital-asset-basic-law-2026-ko` | TechArticle | `report/korea-digital-asset-basic-law-2026/ko/` |
| business | ko | `openmetadata-ai-ready-data-2026-04-ko` | Article | `report/openmetadata-ai-ready-data-2026-04/ko/` |
| business | ko | `upstage-national-fund-2026-05-ko` | TechArticle | `report/upstage-national-fund-2026-05/ko/` |
| story | en | `bernie-vs-claude-pb-en` | Article | `story/bernie-vs-claude-pb/en/` |
| story | en | `circle-seoul-jeremy-allaire-pb-en` | Article | `story/circle-seoul-jeremy-allaire-pb/en/` |
| story | en | `dataclinic-report-102-whitestarmnist-story-pb-en` | TechArticle | `story/dataclinic-report-102-whitestarmnist-story-pb/en/` |
| story | en | `dataclinic-report-126-places365-story-pb-en` | TechArticle | `story/dataclinic-report-126-places365-story-pb/en/` |
| story | en | `dataclinic-report-169-deepfake-story-pb-en` | TechArticle | `story/dataclinic-report-169-deepfake-story-pb/en/` |
| story | en | `dataclinic-report-194-korean-ink-painting-story-pb-en` | TechArticle | `story/dataclinic-report-194-korean-ink-painting-story-pb/en/` |
| story | en | `dataclinic-report-204-wangsandeul-traffic-story-pb-en` | TechArticle | `story/dataclinic-report-204-wangsandeul-traffic-story-pb/en/` |
| story | en | `dataclinic-report-227-pbls-drone-classification-story-pb-en` | TechArticle | `story/dataclinic-report-227-pbls-drone-classification-story-pb/en/` |
| story | en | `meta-tribe-v2-brain-story-pb-en` | TechArticle | `story/meta-tribe-v2-brain-story-pb/en/` |
| story | ko | `bernie-vs-claude-pb-ko` | Article | `story/bernie-vs-claude-pb/ko/` |
| story | ko | `blender-story-pb-ko` | Article | `story/blender-story-pb/ko/` |
| story | ko | `circle-seoul-jeremy-allaire-pb-ko` | Article | `story/circle-seoul-jeremy-allaire-pb/ko/` |
| story | ko | `dataclinic-report-102-whitestarmnist-story-pb-ko` | TechArticle | `story/dataclinic-report-102-whitestarmnist-story-pb/ko/` |
| story | ko | `dataclinic-report-126-places365-story-pb-ko` | TechArticle | `story/dataclinic-report-126-places365-story-pb/ko/` |
| story | ko | `dataclinic-report-169-deepfake-story-pb` | TechArticle | `story/dataclinic-report-169-deepfake-story-pb/ko/` |
| story | ko | `dataclinic-report-194-korean-ink-painting-story-pb` | TechArticle | `story/dataclinic-report-194-korean-ink-painting-story-pb/ko/` |
| story | ko | `dataclinic-report-204-wangsandeul-traffic-story-pb` | TechArticle | `story/dataclinic-report-204-wangsandeul-traffic-story-pb/ko/` |
| story | ko | `dataclinic-report-227-pbls-drone-classification-story-pb` | TechArticle | `story/dataclinic-report-227-pbls-drone-classification-story-pb/ko/` |
| story | ko | `imagenet-story-pb-ko` | Article | `story/imagenet-story-pb/ko/` |
| story | ko | `meta-tribe-v2-brain-story-pb-ko` | TechArticle | `story/meta-tribe-v2-brain-story-pb/ko/` |
| story | ko | `pebblous-story-pb-ko` | Article | `story/pebblous-story-pb/ko/` |
| story | ko | `qr-story-pb-ko` | Article | `story/qr-story-pb/ko/` |
| story | ko | `transformer-story-pb-ko` | Article | `story/transformer-story-pb/ko/` |
| tech | en | `agentds-benchmark-en` | TechArticle | `blog/agentds-benchmark/en/` |
| tech | en | `agentic-framework-explosion-en` | TechArticle | `blog/agentic-framework-explosion/en/` |
| tech | en | `ai-data-qa-framework-en` | Article | `report/ai-data-qa-framework/en/` |
| tech | en | `autonomous-lab-en` | TechArticle | `blog/autonomous-lab/en/` |
| tech | en | `dc-story-produce-pipeline-meta-en` | TechArticle | `blog/dc-story-produce-pipeline-meta/en/` |
| tech | en | `frontend-vibe-coders-en` | TechArticle | `report/frontend-vibe-coders/en/` |
| tech | en | `google-gemma-4-report-pb-en` | TechArticle | `story/google-gemma-4-report-pb/en/` |
| tech | en | `isaac-groot-en` | TechArticle | `project/AgenticAI/isaac-groot/en/` |
| tech | en | `kimodo-text-to-motion-en` | TechArticle | `blog/kimodo-text-to-motion/en/` |
| tech | en | `kronos-financial-foundation-model-en` | TechArticle | `report/kronos-financial-foundation-model/en/` |
| tech | en | `muse-spark-meta-si-en` | TechArticle | `blog/muse-spark-meta-si/en/` |
| tech | en | `nanoclaw-architecture-deep-dive-en` | TechArticle | `report/nanoclaw-architecture-deep-dive/en/` |
| tech | en | `nemotron-personas-korea-en` | Article | `report/nemotron-personas-korea-2026-04/en/` |
| tech | en | `pebblopedia-agentic-ai-en` | Article | `pebblopedia/agentic-ai/en/` |
| tech | en | `pebblopedia-bitcoin-en` | Article | `pebblopedia/bitcoin/en/` |
| tech | en | `pebblopedia-harness-en` | Article | `pebblopedia/harness/en/` |
| tech | en | `pebblopedia-mars-colonization-en` | Article | `pebblopedia/mars-colonization/en/` |
| tech | en | `pebblopedia-physical-ai-en` | Article | `pebblopedia/physical-ai/en/` |
| tech | en | `pebblopedia-turboquant-en` | Article | `pebblopedia/turboquant/en/` |
| tech | en | `pebblopedia-world-model-en` | Article | `pebblopedia/world-model/en/` |
| tech | en | `pebblosim-design-strategy-en` | TechArticle | `project/PebbloSim/pebblosim-design-strategy/en/` |
| tech | en | `text-to-factory-en` | TechArticle | `blog/text-to-factory/en/` |
| tech | en | `wifi-densepose-ruview-en` | TechArticle | `project/WiFiDensePose/wifi-densepose-ruview/en/` |
| tech | en | `world-model-rise-en` | TechArticle | `project/AgenticAI/world-model-rise/en/` |
| tech | en | `yann-lecun-jepa-world-models-en` | TechArticle | `blog/yann-lecun-jepa-world-models/en/` |
| tech | ko | `agentds-benchmark-ko` | TechArticle | `blog/agentds-benchmark/ko/` |
| tech | ko | `agentic-framework-explosion-ko` | TechArticle | `blog/agentic-framework-explosion/ko/` |
| tech | ko | `ai-data-qa-framework` | Article | `report/ai-data-qa-framework/ko/` |
| tech | ko | `autonomous-lab-ko` | TechArticle | `blog/autonomous-lab/ko/` |
| tech | ko | `bernie-sanders-ai-moratorium-pb-ko` | Article | `story/bernie-sanders-ai-moratorium-pb/ko/` |
| tech | ko | `bonsai-1bit-llm-ko` | TechArticle | `blog/bonsai-1bit-llm/ko/` |
| tech | ko | `data-quality-guide` | Article | `project/DataClinic/data-quality/ko/` |
| tech | ko | `dc-story-produce-pipeline-meta-ko` | TechArticle | `blog/dc-story-produce-pipeline-meta/ko/` |
| tech | ko | `frontend-vibe-coders-ko` | TechArticle | `report/frontend-vibe-coders/ko/` |
| tech | ko | `google-gemma-4-report-pb-ko` | TechArticle | `story/google-gemma-4-report-pb/ko/` |
| tech | ko | `isaac-groot-ko` | TechArticle | `project/AgenticAI/isaac-groot/ko/` |
| tech | ko | `kimodo-text-to-motion-ko` | TechArticle | `blog/kimodo-text-to-motion/ko/` |
| tech | ko | `kronos-financial-foundation-model-ko` | TechArticle | `report/kronos-financial-foundation-model/ko/` |
| tech | ko | `muse-spark-meta-si-ko` | TechArticle | `blog/muse-spark-meta-si/ko/` |
| tech | ko | `nanoclaw-architecture-deep-dive-ko` | TechArticle | `report/nanoclaw-architecture-deep-dive/ko/` |
| tech | ko | `nemotron-personas-korea-ko` | Article | `report/nemotron-personas-korea-2026-04/ko/` |
| tech | ko | `pebblopedia-agentic-ai-ko` | Article | `pebblopedia/agentic-ai/ko/` |
| tech | ko | `pebblopedia-bitcoin-ko` | Article | `pebblopedia/bitcoin/ko/` |
| tech | ko | `pebblopedia-harness-ko` | Article | `pebblopedia/harness/ko/` |
| tech | ko | `pebblopedia-mars-colonization-ko` | Article | `pebblopedia/mars-colonization/ko/` |
| tech | ko | `pebblopedia-physical-ai-ko` | Article | `pebblopedia/physical-ai/ko/` |
| tech | ko | `pebblopedia-turboquant-ko` | Article | `pebblopedia/turboquant/ko/` |
| tech | ko | `pebblopedia-world-model-ko` | Article | `pebblopedia/world-model/ko/` |
| tech | ko | `pebblosim-design-strategy` | TechArticle | `project/PebbloSim/pebblosim-design-strategy/ko/` |
| tech | ko | `solar-vs-glm-forensic` | TechArticle | `report/solar-vs-glm/solar-vs-glm-forensic/ko/` |
| tech | ko | `text-to-factory-ko` | TechArticle | `blog/text-to-factory/ko/` |
| tech | ko | `vibevoice-frontier-voice-ai-ko` | TechArticle | `blog/vibevoice-frontier-voice-ai/ko/` |
| tech | ko | `wifi-densepose-ruview-ko` | TechArticle | `project/WiFiDensePose/wifi-densepose-ruview/ko/` |
| tech | ko | `world-model-rise-ko` | TechArticle | `project/AgenticAI/world-model-rise/ko/` |
| tech | ko | `yann-lecun-jepa-world-models-ko` | TechArticle | `blog/yann-lecun-jepa-world-models/ko/` |

## ⚠️ 파일 누락 (articles.json에는 있지만 디스크에 없음)

- `manufacturing-qa-dataset` → `project/AADS/manufacturing-qa-dataset.html`
- `curk-pdf-navigator` → `project/CURK/ontology/pdf-navigator.html`
- `iso5259-ontology-extraction` → `project/CURK/ontology/iso5259-ontology-extraction.html`
- `iso-25024-sql-tutorial` → `project/ISO25024/iso-25024-test-01.html`
- `tangible-data-exhibition-2024` → `https://www.informationisbeautifulawards.com/showcase/7472-tangible-data-from-data-nature-to-data-culture`
- `llm-dataset-viewer` → `project/App/text-audit-01.html`
- `aads-sim-01-terminal` → `project/AADS/ko/aads-sim-01-terminal.html`
- `pendulum-particles-pebbles-01` → `project/DAL/pendulum-particle-pebble/pendulum-particle-pebble-01.html`
- `pendulum-particles-pebbles-02` → `project/DAL/pendulum-particle-pebble/pendulum-particle-pebble-02.html`
- `pendulum-particles-pebbles-03` → `project/DAL/pendulum-particle-pebble/pendulum-particle-pebble-03.html`
