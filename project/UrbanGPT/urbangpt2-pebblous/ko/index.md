---
title: UrbanGPT 2.0 — 텍스트 한 줄로 도시를 설계하다
subtitle: STF Labs의 공간 AI가 바꾸는 도시설계 워크플로우, 그리고 페블러스의 역할
date: 2026-03-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# UrbanGPT 2.0 — 텍스트 한 줄로 도시를 설계하다

_STF Labs의 공간 AI가 바꾸는 도시설계 워크플로우, 그리고 페블러스의 역할_

## Executive Summary

> [!callout]
> 2026년 초, STF Labs(Studio Tim Fu)가 공개한 **UrbanGPT 2.0 Beta**는 도시설계의 패러다임을 바꾸는 도구입니다. 건축가와 도시계획가가 텍스트 한 줄을 입력하면, AI가 3D 도시 레이아웃을 실시간으로 생성하고 GFA(총 허용 건축면적, Gross Floor Area)를 자동으로 최적화합니다.

> GPT-4o의 언어 이해 능력과 실시간 디퓨전 모델의 공간 생성 능력, 그리고 파라메트릭 설계 도구 Rhino/Grasshopper의 정밀한 기하학 처리가 하나의 워크플로우로 통합되었습니다. 설계자는 "주거 70%, 상업 30%로 용적률 450%를 맞춰줘"와 같은 자연어 명령으로 복잡한 도시 계획 시나리오를 즉시 시각화할 수 있습니다.

> 이 기술이 본격화될수록 AI 모델의 학습 데이터 품질, 생성된 공간의 3D 시각화, 그리고 현실 도시 환경의 합성 시뮬레이션 데이터 수요가 폭발적으로 증가할 것입니다. 페블러스의 DataClinic, PebbloScope, PebbloSim, Data Greenhouse는 이 새로운 수요의 핵심 인프라로 자리잡을 수 있습니다.

> **관련 연구:**[CityCraft: A Real Crafter for 3D City Generation](https://arxiv.org/abs/2406.04983) (Deng et al., 2024) ·
>                             [UrbanWorld: An Urban World Model for 3D City Generation](https://arxiv.org/abs/2407.11965) (Shang et al., KDD 2024) ·
>                             [UrbanGPT: Spatio-Temporal Large Language Models](https://arxiv.org/abs/2403.00813) (Li et al., KDD 2024)

## 1. Urban-GPT Alpha에서 UrbanGPT 2.0으로

UrbanGPT 2.0은 Studio Tim Fu가 개발한 **Urban-GPT Alpha**의 발전 버전입니다. Urban-GPT Alpha는 처음으로 텍스트 명령을 3D 도시 레이아웃 생성과 연결한 실험적 프로토타입이었습니다. 건축가와 도시계획가 커뮤니티에서 즉각적인 반응을 얻었고, 이를 바탕으로 STF Labs는 본격적인 베타 버전인 UrbanGPT 2.0을 개발했습니다.

Urban-GPT Alpha의 핵심 아이디어

"언어 모델이 도시의 문법을 이해할 수 있다면, 건축가는 코드가 아닌 언어로 도시를 설계할 수 있다."

2.0 버전에서는 Alpha의 개념 검증을 넘어 실제 설계 워크플로우에 통합 가능한 수준의 안정성과 정밀도를 확보했습니다. Rhino/Grasshopper 환경과의 직접 연동으로 설계자는 기존 도구를 버리지 않고도 AI 생성 결과물을 즉시 편집하고 수정할 수 있습니다.

![CityCraft 파이프라인: 사용자 텍스트 조건 → Layout Generator로 2D 도시 레이아웃 생성 → CityPlanner가 3D 에셋 배치 → 완성된 3D 도시](https://arxiv.org/html/2406.04983v1/x1.png)
*▲ 텍스트 조건에서 3D 도시를 생성하는 파이프라인. 사용자가 밀도·용도 비율을 지정하면 2D 레이아웃 → 3D 도시가 자동 생성된다. | Source: [CityCraft (Deng et al., 2024)](https://arxiv.org/abs/2406.04983)*

| 구분 | Urban-GPT Alpha | UrbanGPT 2.0 Beta |
| --- | --- | --- |
| 목적 | 개념 검증 (POC) | 실무 워크플로우 통합 |
| 언어 모델 | 초기 GPT 통합 | GPT-4o 기반 |
| 공간 생성 | 2D 레이아웃 중심 | 실시간 3D + 디퓨전 모델 |
| Grasshopper 연동 | 제한적 | 직접 통합 |
| GFA 최적화 | 미지원 | 자동 계산 및 최적화 |

## 2. 기술 스택: 세 개의 레이어

UrbanGPT 2.0의 강점은 서로 다른 세 가지 기술 레이어의 유기적인 통합에 있습니다. 각 레이어는 독립적으로 강력하지만, 통합될 때 비로소 도시설계 AI의 완전한 가치를 발휘합니다.

💬

텍스트 입력

자연어 명령

→

🧠

GPT-4o

공간 언어 이해

→

🎨

디퓨전 모델

3D 공간 생성

→

📐

Grasshopper

파라메트릭 편집

### 2.1 GPT-4o — 공간의 언어를 이해하는 두뇌

설계자가 입력하는 자연어 명령은 도시계획 용어와 건축 규제, 공간 관계가 뒤섞인 복잡한 텍스트입니다. GPT-4o는 "역세권 500m 반경에 복합 용도 개발, 저층부 상업 2,000㎡, 주거 200세대"와 같은 명령을 공간적 제약 조건과 프로그램 배분으로 파싱합니다.

> [!callout]
#### 공간 언어의 파싱

> 단순한 번역이 아닙니다. GPT-4o는 **"용적률 450%"**가 대지 면적 대비 건축물 연면적의 비율임을 이해하고, 이를 층수와 건폐율의 조합으로 변환하여 디퓨전 모델에 전달할 수 있는 공간 파라미터로 구조화합니다.

### 2.2 실시간 디퓨전 모델 — 도시를 그리는 엔진

이미지 생성 AI에서 검증된 디퓨전 모델의 원리를 3D 공간 생성에 적용했습니다. 노이즈에서 출발해 의미 있는 공간 구조를 역산해내는 이 접근법은 동일한 조건에서도 다양한 설계 대안을 생성할 수 있다는 점에서 기존 파라메트릭 설계와 근본적으로 다릅니다.

설계자가 원하는 결과에 가까워질수록 프롬프트를 정제하고, AI는 실시간으로 반응합니다. 이 과정은 설계자와 AI 사이의 **대화형 설계(Conversational Design)**를 가능하게 합니다.

![UrbanWorld 프레임워크: OSM 기반 레이아웃 생성 → MLLM 장면 설계 → 디퓨전 기반 텍스처 렌더링 → MLLM 정제의 4단계 3D 도시 생성 파이프라인](https://arxiv.org/html/2407.11965v1/x1.png)
*▲ UrbanWorld의 4단계 프레임워크. 디퓨전 모델이 텍스트·이미지 조건으로 3D 도시 에셋의 텍스처를 생성하고, MLLM이 장면 전체를 설계·정제한다. | Source: [UrbanWorld (Shang et al., KDD 2024)](https://arxiv.org/abs/2407.11965)*

### 2.3 Rhino/Grasshopper — 정밀도를 더하는 손

AI가 생성한 레이아웃은 Grasshopper 스크립트로 직접 전달됩니다. 건축가는 AI 결과물을 파라메트릭 모델로 받아 즉시 수정하고, 구조 해석이나 일조 시뮬레이션 플러그인과 연결할 수 있습니다.

**워크플로우의 핵심 장점:** 기존 BIM 도구나 Rhino 환경을 교체할 필요가 없습니다. UrbanGPT 2.0은 기존 도구 위에 **AI 레이어를 추가**하는 방식으로 설계 속도와 창의성을 동시에 높입니다.

## 3. 핵심 기능: 설계를 바꾸는 세 가지

### 3.1 텍스트 → 3D 도시 레이아웃 실시간 생성

UrbanGPT 2.0의 가장 직관적인 기능입니다. 설계자가 텍스트로 요구사항을 입력하면 초 단위로 3D 도시 매스가 생성됩니다. 종전에는 숙련된 CAD 설계자가 수 시간에서 수 일이 걸리던 초기 매스스터디(Mass Study) 단계가 수십 초로 단축됩니다.

![UrbanWorld의 3D 도시 장면 진화: 텍스처 없는 회색 매스 → 초기 텍스처 적용 → MLLM 정제된 최종 도시 장면](https://arxiv.org/html/2407.11965v1/x3.png)
*▲ AI가 생성한 3D 도시 매스의 진화 과정. 회색 볼륨에서 시작해 디퓨전 모델로 텍스처를 입히고, MLLM이 장면을 정제한다. | Source: [UrbanWorld (Shang et al., 2024)](https://arxiv.org/abs/2407.11965)*

자연어 명령+공간 제약 조건=즉시 3D 레이아웃

초기 설계안 생성 시간: 수 시간 → 수십 초

### 3.2 GFA(용적률) 자동 최적화

GFA(Gross Floor Area) 최적화는 도시설계에서 가장 복잡한 작업 중 하나입니다. 용적률 한도, 건폐율 제한, 일조권, 도로 사선 제한 등 수십 가지 규제를 동시에 만족하면서 개발 가능 면적을 극대화해야 합니다.

UrbanGPT 2.0은 이 과정을 자동화합니다. 규제 파라미터를 입력하면 AI가 허용 범위 안에서 GFA를 최대화하는 최적 매스를 제안하고, 변경할 때마다 실시간으로 면적 현황을 업데이트합니다.

> [!callout]
#### 개발사업 타당성 분석에의 활용

> GFA 자동 최적화는 단순한 설계 도구를 넘어 사업성 분석 도구로서의 가능성을 열어줍니다. "이 대지에서 수익성이 가장 높은 개발 시나리오 5가지를 비교해줘"와 같은 명령이 현실이 됩니다.

### 3.3 프로그램 & 면적 자동 추적

설계가 변경될 때마다 주거, 상업, 업무, 공용 공간의 면적이 자동으로 추적되고 업데이트됩니다. 기존에는 설계 수정 후 면적표를 다시 수작업으로 계산해야 했습니다.

- **실시간 면적 대시보드:** 설계 변경과 동시에 용도별 면적 현황이 업데이트됩니다.
- **프로그램 비율 시각화:** 주거/상업/업무 등의 구성 비율을 차트로 즉시 확인합니다.
- **규제 준수 체크:** 용도지역별 허용 용도와 면적 한도를 자동으로 검증합니다.

## 4. 미래 로드맵: GIS와 환경 데이터의 통합

STF Labs가 제시한 UrbanGPT의 다음 단계는 현재의 3D 레이아웃 생성 기능을 넘어, 실제 도시 데이터와의 완전한 통합입니다. 이 로드맵이 실현될 때 도시설계 AI는 단순한 형태 생성 도구에서 **공간 의사결정 시스템**으로 진화합니다.

현재

텍스트 → 3D 레이아웃 + GFA 최적화

Rhino/Grasshopper 통합, 실시간 면적 추적

near

GIS 데이터 레이어 연동

실제 지형, 도로망, 지적도, 용도지역 데이터와 통합. "이 필지의 법적 최대 개발 볼륨을 생성해줘" 수준의 명령 가능

future

환경 데이터 분석 통합

일조 시뮬레이션, 바람길, 홍수 위험 구역, 도시 열섬 효과 등 환경 파라미터를 설계 초기 단계부터 반영

vision

다이내믹 도시 시뮬레이션

인구 이동, 교통 흐름, 상권 형성 등 도시의 시간적 변화를 시뮬레이션하여 장기 개발 전략 수립 지원

> [!callout]
#### 로드맵이 의미하는 것

> 로드맵의 각 단계는 더 많은 데이터를, 더 높은 품질로 요구합니다. GIS 통합은 정확한 공간 데이터를, 환경 시뮬레이션은 신뢰할 수 있는 기후 데이터를, 다이내믹 시뮬레이션은 방대한 도시 행동 데이터를 전제로 합니다. **데이터 품질이 AI 도시설계의 성패를 결정하는 핵심 변수가 됩니다.**

## 5. AI 도시설계의 핵심 과제: 데이터 품질

텍스트에서 도시를 만드는 것은 인상적이지만, AI가 생성한 공간이 실제로 사람이 살 수 있는 도시가 되려면 모델이 학습하는 데이터의 품질이 결정적입니다. 현재 AI 도시설계 모델들이 직면한 핵심 과제들을 살펴봅니다.

### 5.1 학습 데이터의 지역적 편향

대부분의 도시설계 AI 모델은 공개된 서구권 도시 데이터로 학습됩니다. 고밀도 한국 도시, 골목길 구조, 필지 분할 방식 등은 학습 데이터에 충분히 반영되지 않습니다. 이는 AI가 생성한 레이아웃이 특정 문화권의 도시 구조에는 맞지 않는 **"공간적 할루시네이션"**을 만들 수 있음을 의미합니다.

![CityCraft와 기존 AI 도시 생성 모델(InfiniCity, CityDreamer, CityGen)의 2D 레이아웃 품질 비교 — 도로망 정밀도와 건물 배치 다양성에서 차이가 확연하다](https://arxiv.org/html/2406.04983v1/x3.png)
*▲ AI 생성 도시 레이아웃 비교. 학습 데이터의 품질과 다양성이 결과물의 현실성을 좌우한다. 단일 지역 데이터로 학습된 모델은 획일적인 패턴을 반복한다. | Source: [CityCraft (Deng et al., 2024)](https://arxiv.org/abs/2406.04983)*

### 5.2 3D 공간 데이터의 품질 불균형

GIS 데이터는 2D 지적 정보 중심으로 존재하고, 건물 높이나 3D 형태 데이터는 도시마다 품질 편차가 큽니다. AI가 정확한 3D 도시 레이아웃을 생성하려면 일관된 품질의 3D 공간 데이터가 필요하지만, 이는 현재 전 세계 대부분의 도시에서 확보되지 않았습니다.

### 5.3 합성 데이터의 현실성 (Sim-to-Real Gap)

환경 시뮬레이션 데이터가 실제 현실과 다를 때 발생하는 Sim-to-Real Gap은 도시설계에서 특히 치명적입니다. 시뮬레이션에서 일조 조건이 좋다고 나왔지만 실제로는 인근 건물의 그림자가 예측과 다르게 형성되거나, 바람길 분석이 현실 기후와 맞지 않는 경우가 발생할 수 있습니다. 이는 단순한 소프트웨어 오류가 아니라 수천 세대가 거주하는 건물의 설계 결정에 직접적인 영향을 미칩니다.

## 6. 페블러스가 연결되는 지점

UrbanGPT 2.0이 직면한 데이터 품질 과제들은 페블러스 제품군이 해결을 제안할 수 있는 영역과 정확히 겹칩니다. 각 제품이 AI 도시설계의 어느 단계에서 어떤 역할을 할 수 있는지 구체적으로 살펴봅니다.

🔬

#### DataClinic

UrbanGPT 2.0의 모델이 학습하는 도시 공간 데이터(GIS, 건축 도면, 3D 모델)의 품질을 ISO 5259 기준으로 진단하고 인증합니다.

> [!callout]
> **활용:** 지역별 편향 탐지, 불완전한 GIS 데이터 식별, 학습 데이터셋 품질 인증

[→ DataClinic 자세히 보기](/project/DataClinic/data-quality/ko/) · [dataclinic.ai](https://dataclinic.ai)

🔭

#### PebbloScope

AI가 생성한 도시 레이아웃 데이터를 인터랙티브 3D 환경에서 탐색하고 분석합니다. 복잡한 도시 공간 데이터를 설계자와 의사결정자가 직관적으로 이해할 수 있도록 시각화합니다.

> [!callout]
> **활용:** AI 생성 도시안의 3D 프리뷰, 층별/용도별 데이터 탐색, 공간 품질 지표 시각화

[→ PebbloScope 비전 보기](/project/PhysicalAI/data-greenhouse-vision/ko/)

⚡

#### PebbloSim

Sim-to-Real Gap을 좁히기 위한 고품질 도시 환경 합성 데이터를 생성합니다. 다양한 기후 조건, 인구 밀도, 도시 구조 시나리오를 시뮬레이션하여 AI 모델의 범용성을 높입니다.

> [!callout]
> **활용:** 한국 도시 특화 훈련 데이터 생성, 일조/바람 시뮬레이션 데이터, 극단적 기후 시나리오 합성

[→ PebbloSim 설계 전략 보기](/project/PebbloSim/pebblosim-design-strategy/ko/)

🌱

#### Data Greenhouse

GIS 원천 데이터 수집부터 품질 진단, 합성 데이터 생성, AI 모델 학습까지 전체 도시 데이터 파이프라인을 하나의 플랫폼에서 자동화합니다.

> [!callout]
> **활용:** 멀티소스 도시 데이터 통합, 전처리 자동화, UrbanGPT 학습 데이터 파이프라인 구축

[→ Data Greenhouse 자세히 보기](/project/DataClinic/data-greenhouse/ko/) · [투자 전략](/project/DataGreenhouse/data-greenhouse-strategy/ko/)

#### 🏙 AI 도시설계의 완전한 데이터 레이어

DataClinic이 데이터를 진단하고, PebbloSim이 부족한 데이터를 채우며, Data Greenhouse가 파이프라인을 자동화하고, PebbloScope가 결과를 시각화합니다. 페블러스의 제품군은 **UrbanGPT 2.0이 현재 직면한 데이터 품질 문제를 정확히 겨냥한 인프라 스택**을 구성합니다.

## 7. 결론: 공간 AI 시대의 데이터 인프라

UrbanGPT 2.0은 도시설계에서 AI가 실질적인 도구로 작동하기 시작했음을 보여주는 중요한 신호입니다. 텍스트에서 3D 도시 레이아웃을, GFA 최적화를, 프로그램 추적을 실시간으로 처리하는 것은 불과 몇 년 전까지 SF에 가까웠습니다.

그러나 도시는 데이터입니다. 사람들의 이동 패턴, 건물의 에너지 소비, 일조와 바람, 지하의 지반 데이터까지 — AI가 더 나은 도시를 설계하려면 더 많은 데이터가 필요하고, 그 데이터는 더 높은 품질이어야 합니다.

공간 AI의 방정식

좋은 도시설계 AI = 강력한 모델 × **고품질 도시 데이터**

모델의 진화는 빠르게 진행되고 있습니다. 이제 병목은 데이터입니다.

STF Labs의 UrbanGPT 2.0이 로드맵대로 진화한다면, 도시설계 AI의 수요는 설계 소프트웨어 시장을 넘어 **도시 데이터 인프라 시장**으로 확장됩니다. 페블러스는 이 전환점에서 중요한 역할을 담당할 수 있는 위치에 있습니다.

![CityCraft, SGAM, InfiniCity, CityDreamer, CityGen이 생성한 3D 도시 장면의 시각적 품질 비교 — 건축 다양성과 현실감에서 뚜렷한 차이](https://arxiv.org/html/2406.04983v1/x4.png)
*▲ 다양한 AI 모델이 생성한 3D 도시 장면 비교. 모델의 역량은 빠르게 진화하고 있지만, 최종 품질을 결정하는 것은 학습 데이터의 깊이다. | Source: [CityCraft (Deng et al., 2024)](https://arxiv.org/abs/2406.04983)*

텍스트 한 줄로 도시를 설계하는 시대가 오고 있습니다. 그 도시가 실제로 살기 좋은 곳이 되기 위해서는, 올바른 데이터로 배운 AI가 필요합니다.

## 참고문헌

1. Deng, J. et al. "CityCraft: A Real Crafter for 3D City Generation." 2024. [arXiv: 2406.04983](https://arxiv.org/abs/2406.04983)
2. Shang, Y. et al. "UrbanWorld: An Urban World Model for 3D City Generation." KDD 2024. [arXiv: 2407.11965](https://arxiv.org/abs/2407.11965)
3. Li, Z. et al. "UrbanGPT: Spatio-Temporal Large Language Models." KDD 2024. [arXiv: 2403.00813](https://arxiv.org/abs/2403.00813)
4. STF Labs. "UrbanGPT 2.0 Beta." 2026. [stf-labs.com](https://www.stf-labs.com/)
5. Grand View Research. "Generative AI in Architecture Market Size Report." 2024.
6. McKinsey & Company. "The Economic Potential of Generative AI." 2023. [mckinsey.com](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-economic-potential-of-generative-ai-the-next-productivity-frontier)
