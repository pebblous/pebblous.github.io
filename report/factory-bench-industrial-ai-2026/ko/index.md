---
title: 공장 AI는 기계를 진짜 이해할까 — FactoryBench가 폭로한 LLM의 한계
subtitle: 모든 LLM의 L4 의사결정 정확도 18% 미만 — 산업 로봇 텔레메트리에서 실증된 데이터 병목의 결정적 증거
date: 2026-05-12
category: business
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 공장 AI는 기계를 진짜 이해할까 — FactoryBench가 폭로한 LLM의 한계

_모든 LLM의 L4 의사결정 정확도 18% 미만 — 산업 로봇 텔레메트리에서 실증된 데이터 병목의 결정적 증거_

## Executive Summary

> [!callout]
> FactoryBench(arXiv:2605.07675)는 산업 로봇의 시계열 센서 데이터를 Pearl의 인과 사다리(Causation Ladder) 4단계로 평가하는 최초의 LLM 벤치마크다. 약 71,000개 Q&A, 15,000 에피소드, 27가지 결함 유형, 100개 이상의 센서 채널로 구성된 이 벤치마크에서 최고 모델(Claude Sonnet 4.6)도 L1-L3 구조화 추론에서 47% 미만, GPT-5.1은 L4 의사결정에서 17.7%에 그쳤다. 현재 LLM은 산업 기계의 시계열 신호를 근본적으로 "이해"하지 못한다.

> 이 결과는 VLM(비전-언어 모델) 영역의 실증과 수렴한다. BlueprintSymVL에서 최고 VLM(Gemini 2.5 Pro)도 도면 기호 인식 EMR 50.5%, NVIDIA Cosmos VLM은 웨이퍼 결함 zero-shot 14.37%에서 파인튜닝 후 96.8%로 **82.4pp** 상승했다. Florence-2(0.23B)는 400개 도메인 데이터로 GPT-4o를 F1 52.4% 앞질렀다. 모달리티(시계열/이미지)와 무관하게, 모델이 아니라 데이터가 병목이라는 Data-Centric AI 논지가 양쪽에서 동시에 정량 입증된 것이다.

> 제조 AI 시장은 **$34.18B**(2025)에서 **$155.04B**(2030, CAGR 35.3%)로 성장 중이나, 95%가 투자하고 48%가 파일럿하면서도 유의미한 재무 수익을 보는 기업은 5.5%에 불과하다. FactoryBench는 이 "파일럿 퍼거토리(Pilot Purgatory)"의 근본 원인이 데이터 품질임을 최초의 LLM 시계열 벤치마크 수치로 실증한다.

<!-- stat-card -->
**<18%** — 모든 LLM의 L4 의사결정 정확도 상한 — FactoryBench · GPT-5.1 최고 17.7%

<!-- stat-card -->
**82.4pp** — zero-shot vs fine-tuning 정확도 격차 — NVIDIA Cosmos · 14.37% → 96.8%

<!-- stat-card -->
**$34B→$155B** — 제조 AI 시장 (2025→2030) — CAGR 35.3% · MarketsandMarkets

## FactoryBench — 산업 기계 이해의 첫 번째 시험지

FactoryBench(arXiv:2605.07675, Merzouki et al., 2026)는 LLM이 산업 로봇의 시계열 센서 데이터를 얼마나 잘 "이해"하는지 평가하는 최초의 전문 벤치마크다. 기존 산업 AI 벤치마크가 이미지 기반 결함 검출이나 도면 해석에 집중한 것과 달리, FactoryBench는 LLM에게 로봇 센서의 시계열 텔레메트리를 직접 제시하고 인과적 추론을 요구한다. 이 접근의 핵심은 Pearl의 인과 사다리(Causation Ladder) 4단계 체계에 있다.

### 1.1. Pearl의 인과 사다리 4단계

Pearl의 인과 사다리는 인과적 추론의 난이도를 네 수준으로 구분한다. FactoryBench는 이 체계를 산업 로봇 텔레메트리에 최초로 적용하여, LLM의 산업 데이터 이해 수준을 계층적으로 측정한다.

| 레벨 | 타입 | 평가 내용 | 예시 질문 |
| --- | --- | --- | --- |
| L1 | State (상태 파악) | 현재 센서 상태 읽기 | "리프팅 페이즈 분리를 위한 15-timestep 윈도우 시작점은?" |
| L2 | Intervention (개입 예측) | 이벤트 후 행동 예측 | "T=850ms 충돌 후 신호 세그먼트를 순서대로 정렬하라" |
| L3 | Counterfactual (반사실) | 가상 시나리오 추론 | "페이로드 스파이크 발생 시 T+500ms 가속도 예측" |
| L4 | Decision (의사결정) | 문제 진단 + 최적화 | "센서 스트림에서 근본 원인과 복구 단계를 식별하라" |

### 1.2. 데이터셋의 규모와 구성

FactoryBench의 데이터셋은 세 개의 소스에서 수집된 약 **15,000개 에피소드**로 구성되어 있다. FactoryWave(신규 수집, 8,983 에피소드)는 UR3 코봇(125Hz)과 KUKA KR10 산업 로봇팔(83Hz)에서 직접 기록되었다. 여기에 기존 데이터셋 AURSAD(4,094 에피소드)와 voraus-AD(2,122 에피소드)를 통합하여 총 약 **71,000개 Q&A**를 생성했다. 센서 채널은 관절 상태, 토크, 힘, TCP 포즈, 그리퍼 상태, 태스크 페이즈 등 **100개 이상**이며, **27가지 결함 유형**이 체계적으로 주입되어 있다.

이 데이터셋의 설계에서 주목할 점은 두 가지다. 첫째, 두 종류의 로봇(코봇과 산업 로봇팔)을 포함하여 로봇 유형 간 일반화 가능성을 평가한다. 둘째, 샘플링 주파수가 다른 데이터(125Hz vs 83Hz)를 의도적으로 혼합하여, LLM이 주파수 차이에 강건한지 테스트한다. Pearl의 4단계 체계와 결합된 이 데이터 구조는 "LLM이 산업 시계열을 얼마나 깊이 이해하는가"를 계층적으로 밝히는 도구가 된다.

> [!callout]
> FactoryBench는 두 가지 점에서 기존 벤치마크와 근본적으로 다르다. 첫째, 평가 대상이 VLM(이미지)이 아니라 LLM(시계열 텍스트)이다. 둘째, 성능 측정이 단순 정확도가 아니라 Pearl의 인과 사다리로 계층화되어 있어, "어디까지 이해하는가"를 구분할 수 있다.

## SOTA LLM/VLM의 성적표 — 인간 전문가와의 격차

FactoryBench에서 6개 LLM을 제로샷으로 평가한 결과는 산업 AI의 현주소를 선명하게 보여준다. 구조화 추론(L1-L3)에서 Claude Sonnet 4.6이 선두를 차지했으나, L1 46.8%, L2 47.1%, L3 45.9%로 모두 50%에 미달한다. 비LLM 기준선(28.4%)을 유의미하게 초과하는 모델은 3개에 불과했다.

| 모델 | L1 (상태) | L2 (개입) | L3 (반사실) | L4 (의사결정) |
| --- | --- | --- | --- | --- |
| Claude Sonnet 4.6 | 46.8% | 47.1% | 45.9% | 4.3% |
| GPT-5.1 | 30.9% | 30.0% | 31.7% | 17.7% |
| Qwen3-235B | 36.0% | — | 43.6% | — |
| Mistral Large 3 | 34.6% | 31.7% | 36.3% | — |
| DeepSeek V3.2 | 25.0% | 29.1% | 28.5% | — |
| Qwen3-4B | 21.8% | 27.5% | 28.8% | — |
| 비LLM 기준선 | 28.4% | — | — | — |

출처: Merzouki et al. (2026), FactoryBench, arXiv:2605.07675. 기회 보정(chance-corrected) 정확도 %.

### 2.1. 프로토콜-신호 해리 현상

이 성적표에서 가장 주목할 패턴은 "프로토콜-신호 해리(Protocol-Signal Dissociation)"다. GPT-5.1은 L1-L3 구조화 추론에서 4위에 머물렀으나, L4 의사결정에서는 **17.7%로 1위**를 기록했다. L4 의사결정 항목은 매뉴얼과 프로토콜 형태의 텍스트 지식을 검색하여 답할 수 있는 문제가 포함되어 있다. 반면, L1-L3은 실제 센서 시계열의 패턴을 직접 읽고 해석해야 한다.

이 비대칭은 명확한 메시지를 담고 있다. LLM이 산업 매뉴얼을 "검색"하는 능력과, 센서 시계열 데이터를 "이해"하는 능력은 완전히 별개의 역량이다. GPT-5.1의 L4 성적에서도 문제해결 태스크는 79.6%가 완전성공 또는 완전실패로 양극화되었고, 최적화 태스크에서는 한 번도 완벽 점수를 받지 못했다. 구체적 파라미터 대신 일반적 조언만 생성하는 패턴이 관찰된 것이다.

### 2.2. VLM도 같은 난관에 직면해 있다

LLM의 시계열 이해 한계는 VLM의 산업 이미지 이해 한계와 수렴한다. BlueprintSymVL에서 최고 VLM(Gemini 2.5 Pro)도 공학 도면 기호 인식 EMR **50.5%**에 그쳤다. iSafetyBench에서 산업 안전 비디오 분류 최고 정확도는 **43.8%**(Ovis2-8B)였으며, GPT-4o는 38.8%로 소형 오픈소스 모델에도 뒤처졌다. MVTec AD 2(2025 신규 버전)에서는 SOTA 방법도 평균 AU-PRO가 **60% 미만**으로 하락했다. 범용 벤치마크 MMMU에서 85% 이상을 기록하는 모델들이, 산업 도메인에서는 30-50%대로 추락하는 극적인 격차가 모든 벤치마크에서 일관되게 관찰된다.

> [!callout]
> FactoryBench의 핵심 발견은 두 가지다. 첫째, 현재 최고 LLM도 산업 시계열 데이터를 50% 수준으로밖에 이해하지 못한다. 둘째, 프로토콜 검색 능력과 신호 이해 능력이 분리되어 있어, "AI가 정비 매뉴얼을 잘 찾아주지만 실제 센서 데이터에서 고장 원인을 진단하지는 못한다"는 현장의 경험적 관찰을 수치로 입증한다.

## 왜 AI는 공장에서 실패하는가 — 도메인 갭의 해부학

FactoryBench 성적의 근본 원인은 모델 아키텍처가 아니라 데이터에 있다. 사전학습 데이터에서 산업 도메인(시계열/텔레메트리)은 극단적으로 과소 대표되어 있다. LAION-5B 등 대규모 웹 크롤링 데이터셋에서 산업 로봇 센서의 시계열 데이터는 사실상 존재하지 않는다. LLM이 본 적 없는 데이터를 이해하라고 요구하는 것이다.

### 3.1. 산업 시계열 데이터의 특수성

산업 로봇의 센서 데이터는 일반 텍스트나 이미지와 근본적으로 다르다. FactoryBench가 사용한 데이터만 해도 100개 이상의 채널(관절 상태, 토크, 힘, TCP 포즈, 그리퍼 상태)이 125Hz(UR3) 또는 83Hz(KUKA)로 동시 기록된다. 채널 간 물리적 상관관계가 존재하고, 결함 시그니처는 수 밀리초 단위로 나타나며, 정상과 비정상의 구분이 미묘하여 전문가만 해석 가능한 도메인 지식을 요구한다.

이러한 특수성은 "모델을 키우면 된다"는 접근이 왜 작동하지 않는지 설명한다. FactoryBench에서도 모델 크기가 클수록 성능이 좋아진다는 보장은 관찰되지 않았다. Qwen3-235B가 Qwen3-4B보다 L1에서 14.2pp 높았으나, L3에서는 그 격차가 14.8pp로 일정하지 않았고, 일부 지표에서는 소형 모델이 대형 모델을 앞서기도 했다.

### 3.2. 데이터가 모델을 이긴 세 가지 실증

"모델이 아니라 데이터가 병목"이라는 논지는 세 가지 독립적 실증에 의해 뒷받침된다.

- •**Florence-2(0.23B) vs GPT-4o** — 400개 마이크로칩 도면 데이터로 파인튜닝한 0.23B 소형 오픈소스 VLM이 GPT-4o를 F1에서 **+52.4%** 앞질렀고, 할루시네이션을 **43.15%** 줄였다(Manganini et al., 2025). 파라미터 수 100배 차이를 400개 도메인 데이터가 역전한 사례다.
- •**NVIDIA Cosmos VLM** — 동일 모델이 웨이퍼 결함 분류에서 zero-shot **14.37%**, 도메인 데이터로 파인튜닝 후 **96.8%**를 기록했다. **82.4pp** 격차는 모델 아키텍처가 아니라 데이터가 성능을 결정한다는 가장 깨끗한 실증이다.
- •**Data-Centric AI 서베이** — Zha et al.(2024)의 ACM Computing Surveys 종합 서베이에 따르면, ImageNet/CIFAR-10/IMDB에서 **모델 변경 없이** 데이터 최적화만으로 2.3-6.8% 정확도 향상이 달성되었다. 산업 도메인에서는 이 효과가 더 극대화될 가능성이 높다.

MaViLa (J. of Manufacturing Systems, 2025)
                            "성능이 반드시 데이터셋 크기에 비례하지 않는다." — 사전학습 backbone의 지식 덕분에 제한된 인스트럭션 파인튜닝 데이터로도 고품질 출력이 가능하며, 이는 데이터의 양보다 질이 중요함을 입증한다.

> [!callout]
> 세 가지 실증의 공통 메시지는 명확하다. 산업 AI 성능의 병목은 모델 아키텍처가 아니라 데이터다. Florence-2(0.23B)가 GPT-4o를 앞지르고, Cosmos가 82.4pp를 뛰어넘고, FactoryBench에서 모든 LLM이 50% 미만에 머무는 현상은 동일한 원인을 가리킨다 — 산업 도메인 데이터의 부재 또는 품질 부족이다.

## 산업 AI 벤치마크 지형도 — FactoryBench의 위치

FactoryBench는 고립된 연구가 아니다. 2024-2026년 사이 산업 AI 벤치마크 생태계가 폭발적으로 확장되고 있으며, 각 벤치마크는 산업 도메인의 서로 다른 측면을 조명한다. 이 생태계의 등장 자체가 "산업 AI 성능의 객관적 측정 → 데이터 투자 정당화" 루프가 가능해지기 시작했음을 의미한다.

아래 표는 주요 산업 AI 벤치마크를 대상 모달리티, 평가 능력, 최고 성능으로 비교한 것이다.

| 벤치마크 | 대상 모델 | 모달리티 | 평가 축 | SOTA 성능 |
| --- | --- | --- | --- | --- |
| FactoryBench | LLM | 시계열/텔레메트리 | Pearl 인과 사다리 4단계 | L1-L3 <47%, L4 <18% |
| BlueprintSymVL | VLM | 공학 도면 이미지 | 기호 인식 (EMR) | 50.5% (Gemini 2.5 Pro) |
| iSafetyBench | VLM | 산업 안전 비디오 | 행동 분류 | 43.8% (Ovis2-8B) |
| MVTec AD 2 | FM/NFM | 산업 제품 이미지 | 이상 탐지 (AU-PRO) | <60% |
| MaViLa | VLM | 제조 이미지 + 텍스트 | 제조 도메인 5 태스크 | 범용 VLM 대비 SOTA |
| VLABench | VLA | 로보틱스 시뮬레이션 | 언어 조건 조작 (100태스크) | 장기 추론 한계 |

출처: 각 벤치마크 논문 종합. 성능 수치는 제로샷 또는 best-reported 기준.

FactoryBench만의 차별점은 세 가지다. 첫째, 평가 대상이 VLM이 아닌 **LLM**이다. 시계열 센서 데이터를 텍스트로 변환하여 LLM에 제시하며, 이미지 처리 능력이 아닌 시계열 패턴 해석 능력을 평가한다. 둘째, Pearl의 인과 사다리라는 **계층적 평가 체계**를 사용하여 "어디까지 이해하는가"를 구분한다. 셋째, 27가지 결함 유형이 체계적으로 주입된 **실제 산업 로봇 데이터**를 기반으로 한다. 이 세 요소의 결합은 산업 AI 벤치마크 생태계에서 유일무이한 위치를 점한다.

> [!callout]
> 산업 AI 벤치마크들이 공통적으로 보여주는 패턴이 있다. 범용 벤치마크(MMMU 85%+)에서의 높은 점수가 산업 도메인에서는 30-50%대로 추락한다는 것이다. 이 "범용-산업 격차"는 LLM(FactoryBench)과 VLM(BlueprintSymVL, iSafetyBench, MVTec AD 2) 모두에서 일관되게 나타나며, 모달리티와 무관한 구조적 문제임을 시사한다.

## 제조 AI의 현실 — 파일럿 퍼거토리와 데이터 병목

제조업의 AI 투자는 "넓지만 얕다." Rockwell Automation의 2025년 서베이에 따르면 산업 기업의 **95%**가 AI에 투자하고 있다. 그러나 그 투자가 실질적 가치로 전환되는 경로는 극적으로 좁아진다. Grant Thornton 서베이는 **48%**가 파일럿 단계에 머물러 있고 **10%**만 프로덕션에 통합되었으며 ROI를 실현한 기업은 **0%**라고 보고했다. McKinsey는 유의미한 재무 수익을 거두는 기업이 **5.5%**에 불과하다고 분석했다.

95% — AI에 투자 (Rockwell, 2025)

48% — 파일럿 단계 (Grant Thornton, 2026)

10% — 프로덕션 통합 (Grant Thornton, 2026)

5.5% — 유의미한 재무 수익 (McKinsey, 2025)

BCG는 기업의 **60%**가 AI에서 가치를 창출하지 못하고 있다고 보고했고, Deloitte의 2025 스마트 제조 서베이에서는 **47%**의 산업 리더가 데이터 품질을 프로젝트 실패의 핵심 원인으로 지목했다. FactoryBench와 VLM 벤치마크 결과는 이 ROI 격차의 기술적 근거를 제공한다 — 현재 AI 모델은 산업 데이터를 충분히 이해하지 못하며, 그 원인은 도메인 데이터의 품질과 양에 있다.

### 5.1. 선도 기업의 공통점: 데이터 역량

파일럿 퍼거토리를 탈출한 소수의 기업에는 공통점이 있다. Toyota는 공장 직원이 직접 **10,000개 AI 모델**을 생성하여 **10,000시간**을 절감했다. BMW는 AI 비전 검사로 결함을 약 **40%** 줄였다. 현대차그룹은 NVIDIA Blackwell 기반 AI 팩토리 구축을 추진 중이다. 이들 기업은 대규모 자체 데이터와 파인튜닝 역량을 갖춘 예외적 사례다.

나머지 94.5%에게 필요한 것은 범용 모델 구매가 아니다. 자사 보유 센서/기계 데이터의 AI-Ready 여부를 객관적으로 진단하고, 식별된 데이터 공백을 체계적으로 채우는 인프라가 필요하다. NVIDIA Cosmos의 **82.4pp** 격차(zero-shot vs fine-tuning)는 "데이터 투자가 모델 투자보다 ROI가 높다"는 근거를 정량적으로 제공한다.

### 5.2. 빅테크의 풀스택에서 빠진 조각

NVIDIA(Cosmos + Omniverse + IGX Thor), Siemens(Industrial Copilot + 멀티모달), Cognex(In-Sight + OneVision)가 모델-플랫폼-데이터를 수직 통합하고 있다. 그러나 이들의 전략은 합성 데이터 생성(NVIDIA Omniverse)과 모델 최적화에 집중되어 있으며, 산업 현장의 실제 센서 데이터에 대한 **체계적 품질 진단과 개선**은 이 풀스택에 포함되어 있지 않다. 41%의 제조업체가 AI Vision을 2026년 최우선 기술로 선정했으나(A3 서베이), FactoryBench와 BlueprintSymVL이 보여주듯 현재 AI가 산업 기계를 "이해"하는 수준은 아직 불충분하다. "급하지만 준비 안 된" 역설이 존재한다.

> [!callout]
> 제조 AI 시장은 $34.18B(2025)에서 $155.04B(2030, CAGR 35.3%)로 성장하고 있으나, 이 성장의 질은 파일럿 퍼거토리를 탈출하는 기업의 비율에 달려 있다. FactoryBench 결과가 제시하는 전략적 시사점은 명확하다 — 모델을 사서 배포하는 것만으로는 불충분하고, 자사의 센서/기계 데이터를 AI-Ready로 만드는 투자가 선행되어야 한다.

## 페블러스가 이 연구에 주목하는 이유 — 시계열 데이터 품질이라는 새로운 전선

FactoryBench가 드러낸 "산업 시계열 데이터의 AI-Ready 여부가 모델 성능을 결정한다"는 실증은 페블러스의 핵심 가치 제안과 직결된다. "모델을 고치지 않고 데이터를 고친다"는 Data-Centric AI 접근법이, LLM+시계열과 VLM+이미지 양쪽에서 정량적으로 입증된 것이다.

### 비즈니스와 기술의 교차점

DataClinic의 3단계 진단 체계는 FactoryBench가 노출한 데이터 과제에 구조적으로 대응한다. Level 1(기본 품질)에서 시계열 결측값, 센서 이상치, 샘플링 불일치를 탐지하고, Level 2(임베딩 분석)에서 정상/결함 에피소드의 분포와 클러스터 분리도를 측정하며, Level 3(도메인 특화)에서 27가지 결함 유형별 데이터 커버리지를 평가할 수 있다. DataGreenhouse의 Data Bulk-up은 FactoryBench가 사용한 것과 같은 희귀 결함 에피소드를 합성하여, L4 의사결정 학습 데이터를 체계적으로 보강하는 경로를 제공한다.

### 데이터 품질이 모델 성능을 결정하는 메커니즘

FactoryBench 데이터에서 식별된 품질 과제는 구체적이다. 100개 이상 센서 채널의 복잡한 상관관계, 27가지 결함 유형의 불균일한 분포, FactoryWave(8,983) vs AURSAD(4,094) vs voraus-AD(2,122) 간 소스 불균형, UR3(125Hz)와 KUKA(83Hz)의 샘플링 주파수 차이 등이 LLM 파인튜닝 성능에 직접 영향을 미친다. 이러한 데이터 레벨의 문제는 모델 아키텍처 변경으로는 해결되지 않으며, 체계적 진단과 개선이 필요하다.

### 고객 실무에서의 함의

FactoryBench가 사용한 UR3 코봇과 KUKA KR10은 현대차그룹, 조선, 국방 분야에서 실제 운영되는 로봇 유형과 유사하다. 용접 로봇, 도장 로봇, 조립 로봇의 센서 텔레메트리도 동일한 시계열 데이터 품질 과제를 안고 있다. DataClinic으로 용접 결함 데이터 진단 시 50%에서 97-99% 정확도를 달성한 레퍼런스는, 시계열 텔레메트리 영역으로 확장 가능한 검증된 패턴이다. FactoryBench 결과는 이들 고객에게 "보유 로봇/기계 센서 데이터를 AI-Ready로 만들어야 LLM/VLM 활용 가치가 실현된다"는 명확한 메시지를 전달한다.

### 빅테크 보완 포지셔닝과 앞으로의 질문

NVIDIA Cosmos + Omniverse는 합성 데이터 생성에, Siemens Industrial Copilot은 모델 배포에 집중한다. 실제 산업 데이터의 체계적 품질 진단은 이 풀스택에 아직 포함되어 있지 않다. DataClinic(진단) + PebbloSim(물리 기반 합성) + DataGreenhouse(운영 자동화)의 통합은 이 빈자리를 채울 수 있는 접근이다. 데이터 라벨링/큐레이션 시장이 $18.63B(2024)에서 $57.63B(2030, CAGR 20.3%)으로 성장하는 가운데, 산업/제조 라벨링이 가장 빠른 성장 세그먼트(CAGR 22.84%)라는 점도 이 방향을 뒷받침한다. FactoryBench 같은 벤치마크의 등장은 "진단 → 개선 → 재측정" 루프의 측정 단계를 외부에서 검증 가능하게 만들며, 이 루프 자체가 데이터 플라이휠의 구조적 해자가 될 수 있다.

> [!callout]
> FactoryBench의 실증은 하나의 질문으로 수렴한다 — "AI가 공장 기계를 이해하려면 무엇이 필요한가?" 답은 더 큰 모델이 아니라, 더 나은 데이터다. 이 답이 LLM 시계열과 VLM 이미지 양쪽에서 동시에 입증되었다는 것이 2026년의 전환점이다. 산업 AI의 다음 단계는 모델 경쟁이 아니라 데이터 품질 경쟁이 될 것이며, 그 경쟁에서 "진단 → 합성 보정 → 재진단"의 체계적 루프를 제공하는 인프라가 결정적 역할을 한다.

## 참고문헌

### 학술 논문

- 1.Merzouki, Y. et al. "[FactoryBench: Evaluating Industrial Machine Understanding](https://arxiv.org/abs/2605.07675)." arXiv:2605.07675, 2026.
- 2.Shteriyanov, V. et al. "BlueprintSymVL: A discriminative benchmark for VLM symbol recognition in engineering blueprints." Results in Engineering, 2025. DOI:10.5281/zenodo.17250377.
- 3.Manganini, G. et al. "Evaluating and Fine-Tuning Vision-Language Models for Industrial Manufacturing in Low-Data Regimes." IOS Press, 2025. DOI:10.3233/FAIA251459.
- 4.Abdullah et al. "[iSafetyBench: A video-language benchmark for safety in industrial environment](https://arxiv.org/abs/2508.00399)." ICCV 2025 Workshop. arXiv:2508.00399.
- 5.(다수 저자). "[Large Scale Foundation Models for Intelligent Manufacturing Applications: A Survey](https://arxiv.org/abs/2312.06718)." J. of Intelligent Manufacturing (Springer), 2025. arXiv:2312.06718.
- 6.MVTec. "[The MVTec AD 2 Dataset](https://arxiv.org/abs/2503.21622)." arXiv:2503.21622, 2025.
- 7.(다수 저자). "MaViLa: Unlocking new potentials in smart manufacturing through vision language models." J. of Manufacturing Systems, 2025.
- 8.Zhang et al. "[VLABench: A Large-Scale Benchmark for Language-Conditioned Robotics Manipulation](https://arxiv.org/abs/2412.18194)." ICCV 2025. arXiv:2412.18194.
- 9.Zha, D., Bhat, Z. et al. "[Data-centric Artificial Intelligence: A Survey](https://arxiv.org/abs/2303.10158)." ACM Computing Surveys, 2024. arXiv:2303.10158.
- 10.Chen, D. et al. "[Leveraging Vision-Language Models for Manufacturing Feature Recognition in CAD Designs](https://arxiv.org/abs/2411.02810)." ASME J. Comput. Inf. Sci. Eng., 2025.
- 11.Picard, C., Edwards, K. et al. "[From concept to manufacturing: evaluating vision-language models for engineering design](https://arxiv.org/abs/2311.12668)." AI Review (Springer), 2025.
- 12.(다수 저자). "[A Survey on Foundation-Model-Based Industrial Defect Detection](https://arxiv.org/abs/2502.19106)." arXiv:2502.19106, 2025.
- 13.(다수 저자). "[A Comprehensive Survey for Real-World Industrial Defect Detection](https://arxiv.org/abs/2507.13378)." arXiv:2507.13378, 2025.
- 14.Fan, J. et al. "Vision-language model-based human-robot collaboration for smart manufacturing." Frontiers of Engineering Management (Springer), 2025.

### 시장 데이터 및 서베이

- 15.MarketsandMarkets. "AI in Manufacturing Market." $34.18B(2025) → $155.04B(2030), CAGR 35.3%.
- 16.Grand View Research. "AI in Manufacturing / Data Labeling Market." $18.63B(2024) → $57.63B(2030), CAGR 20.3%.
- 17.Grant Thornton. "Manufacturing AI Impact Survey." 48% 파일럿, 10% 통합, 2026.
- 18.McKinsey. "State of AI 2025." 5.5%만 유의미한 재무 수익.
- 19.BCG. "Build for the Future 2025." 60% 가치 미창출.
- 20.Deloitte. "2025 Smart Manufacturing Survey." 47% 데이터 품질을 실패 원인으로 지목.
- 21.Rockwell Automation. "2025 AI Investment Report." 산업 기업 95% AI 투자.
- 22.Cognex. "AI in Manufacturing Survey 2026." 57% 머신 비전에 AI 사용.
- 23.A3 (Association for Advancing Automation). 41% 제조업체 AI Vision 최우선, 2026.

### 업계 사례 및 기술 블로그

- 24.NVIDIA. Hannover Messe 2026 Blog: AI Manufacturing / Cosmos VLM 웨이퍼 결함 분류 기술 블로그.
- 25.Toyota. 10,000 AI Models / Invisible AI Partnership, 2025.
- 26.BMW. AI Vision Inspection (-40% Defects) / SORDI Dataset.
- 27.Hyundai Motor Group. NVIDIA Blackwell AI Factory 구축, 2025.
- 28.Siemens. Industrial Copilot CES 2026.
