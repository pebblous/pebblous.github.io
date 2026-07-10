---
title: UrbanGPT 2.0 — Designing Cities with a Single Line of Text
subtitle: How STF Labs
date: 2026-03-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# UrbanGPT 2.0 — Designing Cities with a Single Line of Text

_How STF Labs_

## Executive Summary

> [!callout]
> In early 2026, STF Labs (Studio Tim Fu) unveiled **UrbanGPT 2.0 Beta**, a paradigm-shifting tool for urban design. When architects and urban planners type a single line of text, AI generates 3D city layouts in real time and automatically optimizes GFA (Gross Floor Area).

> GPT-4o's language understanding, the real-time diffusion model's spatial generation capabilities, and the precise geometric processing of the parametric design tool Rhino/Grasshopper have been unified into a single workflow. Designers can instantly visualize complex urban planning scenarios with natural language commands like "70% residential, 30% commercial, target FAR 450%."

> As this technology matures, the demand for AI model training data quality, 3D visualization of generated spaces, and synthetic simulation data for real-world urban environments will grow exponentially. Pebblous's DataClinic, PebbloScope, PebbloSim, and Data Greenhouse are positioned to become core infrastructure for this emerging demand.

> **Related Research:**[CityCraft: A Real Crafter for 3D City Generation](https://arxiv.org/abs/2406.04983) (Deng et al., 2024) ·
>                             [UrbanWorld: An Urban World Model for 3D City Generation](https://arxiv.org/abs/2407.11965) (Shang et al., KDD 2024) ·
>                             [UrbanGPT: Spatio-Temporal Large Language Models](https://arxiv.org/abs/2403.00813) (Li et al., KDD 2024)

## 1. From Urban-GPT Alpha to UrbanGPT 2.0

UrbanGPT 2.0 is the evolved version of **Urban-GPT Alpha**, developed by Studio Tim Fu. Urban-GPT Alpha was an experimental prototype that first connected text commands to 3D city layout generation. It received immediate attention from the architecture and urban planning community, which led STF Labs to develop the full-fledged beta version, UrbanGPT 2.0.

The Core Idea Behind Urban-GPT Alpha

"If a language model can understand the grammar of cities, architects can design cities with language rather than code."

Version 2.0 goes beyond Alpha's proof of concept, achieving a level of stability and precision suitable for integration into real design workflows. Through direct integration with the Rhino/Grasshopper environment, designers can immediately edit and refine AI-generated outputs without abandoning their existing tools.

![CityCraft pipeline: user text conditions → Layout Generator creates 2D city layout → CityPlanner places 3D assets → completed 3D city](https://arxiv.org/html/2406.04983v1/x1.png)
*▲ Pipeline for generating 3D cities from text conditions. When users specify density and use ratios, a 2D layout is automatically generated, then converted to a 3D city. | Source: [CityCraft (Deng et al., 2024)](https://arxiv.org/abs/2406.04983)*

| Category | Urban-GPT Alpha | UrbanGPT 2.0 Beta |
| --- | --- | --- |
| Purpose | Proof of Concept (POC) | Production workflow integration |
| Language Model | Early GPT integration | GPT-4o based |
| Spatial Generation | 2D layout focused | Real-time 3D + diffusion model |
| Grasshopper Integration | Limited | Direct integration |
| GFA Optimization | Not supported | Automatic calculation & optimization |

## 2. Tech Stack: Three Layers

The strength of UrbanGPT 2.0 lies in the organic integration of three distinct technology layers. Each layer is powerful on its own, but it is only when combined that they deliver the full value of urban design AI.

💬

Text Input

Natural language

→

🧠

GPT-4o

Spatial language

→

🎨

Diffusion Model

3D space generation

→

📐

Grasshopper

Parametric editing

### 2.1 GPT-4o — The Brain That Understands Spatial Language

The natural language commands that designers input are complex texts mixing urban planning terminology, building regulations, and spatial relationships. GPT-4o parses commands like "mixed-use development within 500m radius of a transit station, 2,000 sqm ground-floor commercial, 200 residential units" into spatial constraints and program allocations.

> [!callout]
#### Parsing Spatial Language

> This is not simple translation. GPT-4o understands that **"FAR 450%"** refers to the ratio of total building floor area to site area, and converts it into a combination of floor count and building coverage ratio, structuring it into spatial parameters that can be passed to the diffusion model.

### 2.2 Real-Time Diffusion Model — The Engine That Draws Cities

The principles of diffusion models, proven in image generation AI, have been applied to 3D spatial generation. This approach — reverse-engineering meaningful spatial structures from noise — is fundamentally different from traditional parametric design in that it can generate diverse design alternatives even under identical conditions.

As designers get closer to their desired result, they refine their prompts, and the AI responds in real time. This process enables **Conversational Design** between designers and AI.

![UrbanWorld framework: OSM-based layout generation → MLLM scene design → diffusion-based texture rendering → MLLM refinement, a 4-stage 3D city generation pipeline](https://arxiv.org/html/2407.11965v1/x1.png)
*▲ UrbanWorld's 4-stage framework. The diffusion model generates textures for 3D city assets from text/image conditions, while the MLLM designs and refines the entire scene. | Source: [UrbanWorld (Shang et al., KDD 2024)](https://arxiv.org/abs/2407.11965)*

### 2.3 Rhino/Grasshopper — The Hands That Add Precision

AI-generated layouts are passed directly to Grasshopper scripts. Architects receive the AI output as a parametric model, enabling immediate editing and connection to structural analysis or solar simulation plugins.

**Key workflow advantage:** There is no need to replace existing BIM tools or the Rhino environment. UrbanGPT 2.0 **adds an AI layer on top of existing tools**, simultaneously boosting both design speed and creativity.

## 3. Core Features: Three Game-Changers

### 3.1 Text → Real-Time 3D City Layout Generation

This is UrbanGPT 2.0's most intuitive feature. When designers enter requirements as text, 3D city massing is generated within seconds. The initial mass study phase, which previously took experienced CAD designers hours to days, is reduced to mere seconds.

![UrbanWorld 3D city scene evolution: untextured gray massing → initial texture application → MLLM-refined final city scene](https://arxiv.org/html/2407.11965v1/x3.png)
*▲ Evolution of AI-generated 3D city massing. Starting from gray volumes, the diffusion model applies textures, and the MLLM refines the scene. | Source: [UrbanWorld (Shang et al., 2024)](https://arxiv.org/abs/2407.11965)*

Natural Language+Spatial Constraints=Instant 3D Layout

Initial design generation time: hours → seconds

### 3.2 Automatic GFA (Floor Area Ratio) Optimization

GFA (Gross Floor Area) optimization is one of the most complex tasks in urban design. Dozens of regulations — FAR limits, building coverage restrictions, solar access rights, road setback requirements — must all be satisfied simultaneously while maximizing developable floor area.

UrbanGPT 2.0 automates this process. When regulatory parameters are entered, the AI proposes optimal massing that maximizes GFA within the allowed range, updating area calculations in real time with every change.

> [!callout]
#### Application to Development Feasibility Analysis

> Automatic GFA optimization opens possibilities beyond a mere design tool — it becomes a business viability analysis tool. Commands like "Compare the 5 most profitable development scenarios for this site" become a reality.

### 3.3 Automatic Program & Area Tracking

Every time the design changes, the areas of residential, commercial, office, and public spaces are automatically tracked and updated. Previously, area schedules had to be manually recalculated after every design modification.

- **Real-time area dashboard:** Area totals by use type update simultaneously with design changes.
- **Program ratio visualization:** Composition ratios for residential/commercial/office are instantly displayed in charts.
- **Regulatory compliance check:** Permitted uses and area limits by zoning district are automatically verified.

## 4. Future Roadmap: GIS and Environmental Data Integration

The next phase outlined by STF Labs for UrbanGPT goes beyond current 3D layout generation to full integration with real-world urban data. When this roadmap is realized, urban design AI will evolve from a simple form-generation tool into a **spatial decision-making system**.

now

Text → 3D Layout + GFA Optimization

Rhino/Grasshopper integration, real-time area tracking

near

GIS Data Layer Integration

Integration with real terrain, road networks, cadastral maps, and zoning data. Commands like "Generate the legally maximum development volume for this parcel" become possible

future

Environmental Data Analysis Integration

Incorporating environmental parameters such as solar simulation, wind corridors, flood risk zones, and urban heat island effects from the earliest design stages

vision

Dynamic Urban Simulation

Simulating temporal urban changes such as population movement, traffic flow, and commercial district formation to support long-term development strategy

> [!callout]
#### What the Roadmap Implies

> Each stage of the roadmap demands more data at higher quality. GIS integration requires accurate spatial data, environmental simulation needs reliable climate data, and dynamic simulation presupposes vast urban behavioral data. **Data quality becomes the critical variable that determines the success or failure of AI urban design.**

## 5. The Critical Challenge: Data Quality in AI Urban Design

Generating cities from text is impressive, but for AI-generated spaces to become cities where people can actually live, the quality of the data the model learns from is decisive. Let us examine the core challenges currently facing AI urban design models.

### 5.1 Regional Bias in Training Data

Most urban design AI models are trained on publicly available Western city data. High-density Korean cities, alleyway structures, and lot subdivision patterns are not sufficiently represented in training data. This means AI-generated layouts can produce **"spatial hallucinations"** that do not fit the urban fabric of specific cultural contexts.

![Comparison of 2D layout quality between CityCraft and existing AI city generation models (InfiniCity, CityDreamer, CityGen) — clear differences in road network precision and building placement diversity](https://arxiv.org/html/2406.04983v1/x3.png)
*▲ Comparison of AI-generated city layouts. The quality and diversity of training data determine the realism of results. Models trained on single-region data repeat uniform patterns. | Source: [CityCraft (Deng et al., 2024)](https://arxiv.org/abs/2406.04983)*

### 5.2 Quality Imbalance in 3D Spatial Data

GIS data primarily exists as 2D cadastral information, and building height and 3D form data vary significantly in quality from city to city. For AI to generate accurate 3D city layouts, consistently high-quality 3D spatial data is needed — but this has not been secured in most cities worldwide.

### 5.3 Synthetic Data Realism (Sim-to-Real Gap)

The Sim-to-Real Gap — when environmental simulation data differs from reality — is particularly critical in urban design. A simulation might indicate favorable solar conditions, but in reality shadows from nearby buildings may form differently than predicted, or wind corridor analysis may not match actual climate patterns. This is not a simple software error — it directly impacts design decisions for buildings housing thousands of residents.

## 6. Where Pebblous Connects

The data quality challenges facing UrbanGPT 2.0 overlap precisely with the areas where the Pebblous product suite can propose solutions. Let us examine specifically what role each product can play at which stage of AI urban design.

🔬

#### DataClinic

Diagnoses and certifies the quality of urban spatial data (GIS, architectural drawings, 3D models) used for training UrbanGPT 2.0's models against ISO 5259 standards.

> [!callout]
> **Use cases:** Regional bias detection, incomplete GIS data identification, training dataset quality certification

[→ Learn more about DataClinic](/project/DataClinic/data-quality/ko/) · [dataclinic.ai](https://dataclinic.ai)

🔭

#### PebbloScope

Explores and analyzes AI-generated city layout data in an interactive 3D environment. Visualizes complex urban spatial data so that designers and decision-makers can intuitively understand it.

> [!callout]
> **Use cases:** 3D preview of AI-generated urban plans, floor-by-floor/use-by-use data exploration, spatial quality metric visualization

[→ See the PebbloScope vision](/project/PhysicalAI/data-greenhouse-vision/ko/)

⚡

#### PebbloSim

Generates high-quality urban environment synthetic data to narrow the Sim-to-Real Gap. Simulates diverse climate conditions, population densities, and urban structure scenarios to improve AI model generalizability.

> [!callout]
> **Use cases:** Korea-specific urban training data generation, solar/wind simulation data, extreme climate scenario synthesis

[→ See PebbloSim design strategy](/project/PebbloSim/pebblosim-design-strategy/ko/)

🌱

#### Data Greenhouse

Automates the entire urban data pipeline — from GIS source data collection to quality diagnostics, synthetic data generation, and AI model training — on a single platform.

> [!callout]
> **Use cases:** Multi-source urban data integration, preprocessing automation, UrbanGPT training data pipeline construction

[→ Learn more about Data Greenhouse](/project/DataClinic/data-greenhouse/ko/) · [Investment strategy](/project/DataGreenhouse/data-greenhouse-strategy/ko/)

#### 🏙 The Complete Data Layer for AI Urban Design

DataClinic diagnoses the data, PebbloSim fills in the gaps, Data Greenhouse automates the pipeline, and PebbloScope visualizes the results. The Pebblous product suite forms **an infrastructure stack precisely targeting the data quality challenges UrbanGPT 2.0 currently faces**.

## 7. Conclusion: Data Infrastructure for the Spatial AI Era

UrbanGPT 2.0 is an important signal that AI has begun functioning as a practical tool in urban design. Processing 3D city layouts from text, GFA optimization, and program tracking in real time was closer to science fiction just a few years ago.

But cities are data. People's movement patterns, building energy consumption, solar access and wind, subsurface geological data — for AI to design better cities, it needs more data, and that data must be of higher quality.

The Spatial AI Equation

Good Urban Design AI = Powerful Models × **High-Quality Urban Data**

Model evolution is progressing rapidly. The bottleneck is now the data.

If STF Labs' UrbanGPT 2.0 evolves according to its roadmap, demand for urban design AI will expand beyond the design software market into the **urban data infrastructure market**. Pebblous is positioned to play a pivotal role at this turning point.

![Visual quality comparison of 3D city scenes generated by CityCraft, SGAM, InfiniCity, CityDreamer, and CityGen — distinct differences in architectural diversity and realism](https://arxiv.org/html/2406.04983v1/x4.png)
*▲ Comparison of 3D city scenes generated by various AI models. Model capabilities are evolving rapidly, but what determines final quality is the depth of training data. | Source: [CityCraft (Deng et al., 2024)](https://arxiv.org/abs/2406.04983)*

The era of designing cities with a single line of text is approaching. For those cities to become truly livable places, we need AI that has learned from the right data.

## References

1. Deng, J. et al. "CityCraft: A Real Crafter for 3D City Generation." 2024. [arXiv: 2406.04983](https://arxiv.org/abs/2406.04983)
2. Shang, Y. et al. "UrbanWorld: An Urban World Model for 3D City Generation." KDD 2024. [arXiv: 2407.11965](https://arxiv.org/abs/2407.11965)
3. Li, Z. et al. "UrbanGPT: Spatio-Temporal Large Language Models." KDD 2024. [arXiv: 2403.00813](https://arxiv.org/abs/2403.00813)
4. STF Labs. "UrbanGPT 2.0 Beta." 2026. [stf-labs.com](https://www.stf-labs.com/)
5. Grand View Research. "Generative AI in Architecture Market Size Report." 2024.
6. McKinsey & Company. "The Economic Potential of Generative AI." 2023. [mckinsey.com](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier)
