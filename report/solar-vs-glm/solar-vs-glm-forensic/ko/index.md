---
title: Solar vs GLM-4.5: 모델 파생 논쟁 포렌식 분석
subtitle: 182 시그마 LayerNorm 유사도 vs 구조적 수렴성 — 업스테이지와 커뮤니티의 적극적 검증으로 논란 종결
date: 2026-01-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Solar vs GLM-4.5: 모델 파생 논쟁 포렌식 분석

_182 시그마 LayerNorm 유사도 vs 구조적 수렴성 — 업스테이지와 커뮤니티의 적극적 검증으로 논란 종결_

## Executive Summary

> [!callout]
> 2025년 12월, Sionic AI가 Upstage의 Solar-Open-100B 모델이 Zhipu AI의 GLM-4.5-Air에서 파생되었다는 의혹을 제기하면서 한국 AI 업계에 큰 논란이 발생했습니다. 핵심 근거는 두 모델 간 LayerNorm 가중치의 Cosine 유사도가 0.989(182 시그마)에 달한다는 통계적 분석이었습니다.

> 이에 대해 Hyunwoong Ko 교수는 제3의 모델(Microsoft Phi-3.5-MoE)과도 유사한 유사도가 나타남을 보여주며, RMSNorm의 구조적 수렴 현상으로 설명할 수 있다고 반박했습니다. 이후 NYU 조경현 교수가 피어슨 상관계수 분석을 통해 두 모델의 실질적 상관관계가 0.0054에 불과함을 밝혀, "Weak Evidence, Inconclusive"라는 판정을 내렸습니다.

> 2026년 1월 2일 Upstage의 공개 검증 세션에서 W&B 학습 로그와 체크포인트가 공개되어 독자 개발이 99.9996% 수준으로 입증되었으며, 이후 Sionic AI CEO가 공식 사과문을 게시하고 원본 저장소를 폐쇄함으로써 논란은 완전히 종결되었습니다. 이 사례는 LLM 오픈 웨이트 시대에 모델 포렌식의 과학적 방법론과 투명한 검증의 중요성을 보여주는 모범 사례로 기록됩니다.

## 요약 (Executive Summary)

본 보고서는 대한민국 AI 기업 **Upstage**의 **Solar-Open-100B** 모델이
                        중국 Zhipu AI의 **GLM-4.5-Air** 모델에서 파생되었는지에 대한 논쟁을 다룹니다.
                        논란은 의혹 제기에서 시작되어, 정황적 반박을 거쳐, **조경현 교수(NYU)의 통계적 검증**으로 기술적 종결에 이르렀습니다.

| 단계 | 주체 | 주장 핵심 | 판세 |
| --- | --- | --- | --- |
| 1. 의혹 제기 | Sionic AI | "코드가 같고, 가중치 유사도가 0.99다. 이건 100% 베낀 것이다." | 🚨 Solar 위기 |
| 2. 정황 반박 | Hyunwoong Ko | "MS Phi-2도 코드는 똑같다. 코드는 그냥 표준 템플릿 쓴 거다." | 🛡️ 반격 시작 |
| 3. 기술 검증 | 조경현 교수 | "가중치 유사도 0.99는 수학적 착시일 뿐이다. 실제 패턴(Pearson)은 다르다." | ⚖️ 종결 |

********

> [!callout]
> **최종 결론:**
>                             조경현 교수의 피어슨 상관계수 분석 결과 **0.0054** — 두 모델의 가중치 패턴이
>                             **전혀 상관관계가 없음(독립적 학습)**을 통계적으로 입증했습니다.
>                             이후 의혹 제기자는 사과문을 게시하고 해당 저장소를 폐쇄했습니다.

<!-- stat-card -->
****"Weak Evidence, Inconclusive"** — Sionic AI의 주장은 증거 불충분/결정적이지 않음.**

## 배경 (Background)

### 분석 대상 모델

이번 논쟁의 주인공은 **Solar-Open-100B(Upstage)**와 **GLM-4.5-Air(Zhipu AI)**,
                        그리고 대조군인 **Phi-3.5-MoE(Microsoft)**입니다.
                        세 모델 모두 MoE 아키텍처와 RMSNorm을 채택하고 있어, 이 구조적 공통점이 논쟁의 핵심 변수가 됩니다.

| 모델명 | 개발사 | 파라미터 | 아키텍처 특징 |
| --- | --- | --- | --- |
| Solar-Open-100B | Upstage (한국) | ~100B | MoE, 48 Layers, DUS 기법 적용 추정 |
| GLM-4.5-Air | Zhipu AI (중국) | 106B | MoE, 46 Layers, 96 Heads |
| Phi-3.5-MoE | Microsoft (미국) | ~42B | MoE, 32 Layers, 대조군 모델 |

### 논쟁의 출처

#### 파생설 (Sionic AI)

<!-- stat-card -->
**sionic-ai/solar-vs-glm**

#### 독립설 (Hyunwoongko)

<!-- stat-card -->
**hyunwoongko/solar-vs-glm-vs-phi**

## 주장 재구성 및 상호 비교

아래 표는 파생설(Sionic AI)과 독립설(Hyunwoong Ko)의 **핵심 주장**, **중심 증거**, **각 주장의 맹점**을 비교합니다.
                        시오닉 AI는 LayerNorm의 **"182 시그마 이상치"**를, 현웅 고 교수는 **"RMSNorm 구조적 수렴"**을 핵심 논거로 삼습니다.

| 구분 | Sionic AI (파생설) | Hyunwoongko (독립설) |
| --- | --- | --- |
| 핵심 주장 | Solar는 GLM의 파생작이며, 증거는 동일 레이어 LayerNorm의 비정상적 유사도(≈0.989)와 선택적 보존 | RMSNorm은 정보량이 낮고 구조적 제약이 강하므로, 높은 Cosine 유사도는 아키텍처적 필연(수렴)이지 표절의 증거가 아님 |
| 중심 증거 | • 동일 레이어 간 LN Cosine ≈ 0.99                                         • 모델 내부 베이스라인(0.377) 대비 182σ                                         • "선택적 보존" 패턴 | • Phi-3.5-MoE와 GLM 간에도 0.9+ 유사도 발생                                         • 타 모델 간에도 LN 유사도 0.99 관측                                         • RMSNorm의 벡터 방향성 편향 특성 |
| 맹점/한계 | 결정적 증거가 저정보 파라미터(LayerNorm)에 과도하게 의존. RMSNorm의 수학적 특성 미고려 | Attention/MoE의 '0에 가까운 유사도(재학습 증거)'를 직접 반박하지 않음. "선택적 보존" 발생 이유 설명 부재 |

********  
****  
  
  
****

## 상호 검증이 필요한 핵심 질문

논쟁 해결의 핵심은 **"고정보 텐서(Attention/MoE)"**에서도 유사도가 높게 나오는가입니다.
                        파생설은 "선택적 보존 패턴이 유지되는가"를, 독립설은 "Solar-GLM이 Solar-Phi보다 유의미하게 가까운가"를 묻습니다.
                        아래 두 질문은 사실상 **동일한 실험**을 요구하며, 그 결과에 따라 파생설 강화 또는 독립설 확정으로 이어집니다.

#### 파생설 검증 질문

<!-- stat-card -->
**"선택적 보존 패턴(LN은 같고 나머지는 다름)이, RMSNorm의 수학적 특성을 제거하고
                                **고정보 텐서(Attention Weight)**를 비교했을 때도 유지되는가?"**

#### 독립설 검증 질문

<!-- stat-card -->
**"RMSNorm을 배제했을 때, Solar와 GLM 사이의 거리가 Solar와 Phi 사이의 거리보다
                                **통계적으로 유의미하게 가까운가?**"**

> [!callout]
> **결합 검증 프레임워크:**
>                             Sionic의 '선택적 보존' 가설을 유지하되, 대상 변수를 RMSNorm에서
>                             **Attention / MoE / FFN**으로 변경하여
>                             Solar–GLM–Phi 3자 비교를 수행합니다.

#### 결과 A (파생설 강화)

<!-- stat-card -->
**고정보 텐서에서도 Solar-GLM 유사도가 타 모델 대비 유의미하게 높게 측정됨**

#### 결과 B (독립설 확정)

<!-- stat-card -->
**고정보 텐서에서는 모든 모델 간 유사도가 낮거나 비슷하게 측정됨**

## 각 주장의 세부 데이터 분석

### 파생설: "182 시그마의 충격"

시오닉 AI의 분석은 텐서 유형별로 극단적인 유사도 차이를 보여줍니다.
                        아래 표는 Solar-Open-100B와 GLM-4.5-Air 간의 텐서별 Cosine 유사도입니다.

| 텐서 유형 | Cosine 유사도 | 시오닉 측 해석 | 비고 |
| --- | --- | --- | --- |
| input_layernorm | 0.949 | 원본 보존 | 구조적 뼈대 |
| post_attention_layernorm | 0.986 | 원본 보존 | 구조적 뼈대 |
| k_proj / v_proj | 0.001 | 재학습됨 | Attention (지능) |
| mlp.gate | 0.004 | 재학습됨 | MoE Router (지능) |
| embed_tokens | 0.002 | 재학습됨 | 어휘 확장 |

********

#### 시오닉 AI의 논리

<!-- stat-card -->
**독립적으로 학습된 모델이라면 우연히 0.99 유사도가 나올 수 없습니다(P-value < 10^(-1000)).
                            따라서 **뼈대(LN)를 가져다 놓고 근육(Attn/MLP)만 갈아끼운 것**입니다.**

### 독립설: "RMSNorm의 함정"

현웅 고 교수는 제3의 모델인 Phi-3.5-MoE를 도입하여 이 '유사도'가 허상임을 증명했습니다.
                        아래는 10번째 레이어 LayerNorm Cosine 유사도 매트릭스입니다.

| 구분 | Solar-Open | GLM-4.5-Air | Phi-3.5-MoE |
| --- | --- | --- | --- |
| Solar-Open | 1.000 | 0.9+ | 0.9+ |
| GLM-4.5-Air | 0.9+ | 1.000 | 0.9+ |
| Phi-3.5-MoE | 0.9+ | 0.9+ | 1.000 |

#### 핵심 관찰

#### 원인 분석

<!-- stat-card -->
**서로 전혀 다른 모델(Phi vs GLM)끼리도 LayerNorm 유사도는 0.9를 넘습니다.** — RMSNorm은 학습이 진행될수록 특정 값(Scale)으로 수렴하며, 벡터의 방향성이 유사해지는
                            **'구조적 수렴(Convergence)'** 현상이 발생합니다.
                            따라서 LN 유사도는 모델의 '지문'이 될 수 없습니다.

## 조경현 교수의 최종 판정 (The Verdict)

세계적인 AI 석학 **조경현 교수(NYU)**가 핵심 쟁점인 "코사인 유사도 0.99"를 재분석했습니다.
                        아래 비교 카드는 **Raw Cosine(0.99, 착시)**과 **Pearson Correlation(0.0054, 실제 패턴)**의 차이를 보여주며,
                        최종 판정표는 코드와 가중치 두 쟁점에 대해 각각 **"무죄(관행)"**와 **"무죄(통계적 입증)"**를 선고합니다.

### 데이터 분석 상세

#### Raw Cosine (0.99의 진실)

- LayerNorm/RMSNorm의 가중치는 특성상 대부분 **1.0 근처**의 값을 가짐
- 무작위로 다른 레이어끼리 비교해도 유사도가 **0.95**가 나옴
- 즉, **0.99는 '원래 높게 나오는 값'**이지, 베꼈다는 증거가 될 수 없음 (Uninformative)

#### Pearson Correlation (0.00의 증거)

- 값의 절대적 크기가 아니라 **가중치의 '모양(Pattern)'**이 얼마나 비슷한지 측정
- 결과값: **0.0054**
- 두 모델의 가중치 패턴이 **전혀 상관관계가 없음(독립적)**을 의미

#### 📊
                            Pearson Correlation이란? (초보자용 설명)

##### 예시: 상관관계가 높은 경우 (r ≈ 0.99)

##### 예시: 상관관계가 없는 경우 (r ≈ 0)

> [!callout]
### "Weak Evidence, Inconclusive"

| 쟁점 | 공격 측 (베꼈다!) | 방어 및 검증 (아니다!) | 최종 판정 |
| --- | --- | --- | --- |
| 코드 | "GLM이랑 코드가 토씨 하나까지 똑같다!" | "MS Phi-2도 똑같다. 그건 업계 표준 템플릿이라 그렇다." | ✅ 무죄 (관행) |
| 가중치 | "벡터 코사인 유사도가 0.99다! 빼박이다!" | [조경현 교수] "LayerNorm 특성상 원래 높게 나온다. 패턴(Pearson)을 보니 0.00이다." | ✅ 무죄 (통계적 입증) |

## 결론: 논란의 본질과 해결

> [!callout]
1. **1. Sionic AI:** "숫자(0.99)는 거짓말 안 한다! 베꼈다!"
2. **2. Hyunwoong Ko:** "코드는 MS도 똑같다. 억까 하지 마라."
3. **3. 조경현 교수:** "0.99는 착시(Artifact)다. 통계적으로 뜯어보니 **서로 다른 모델 맞다. 땅땅땅.**"

### 기술적 결론

## 에필로그: 논란의 종결

### 업스테이지의 공개 검증

- 서울 강남에서 **공개 검증 세션** 개최
- CEO 김성훈 + 핵심 엔지니어 + 외부 전문가 참석
- **W&B 학습 로그**와 **중간 체크포인트** 공개
- 전체 파라미터 중 **0.0004%만 유사** → **99.9996% 독자 개발** 입증

### 의혹 제기자의 사과

- Sionic AI 고석현 CEO, **LinkedIn**을 통해 사과문 게시
- "_충분한 검증 없이 의혹을 제기했다_" 인정
- "_LayerNorm 코사인 유사도만으로는 모델 가중치 재사용을 판단하기 어렵다_"
- 업스테이지 CEO 김성훈과 팀원들에게 공식 사과

### 원본 저장소 폐쇄

### 논란 종결 요약

## 이 논쟁이 남기는 교훈

#### 분석가를 위한 교훈

#### 개발사를 위한 교훈

#### 커뮤니티를 위한 교훈

> [!callout]

## 리포트 다운로드

### Solar-Open-100B vs GLM-4.5-Air 모델 파생 논쟁의 포렌식

## 참고문헌

1. [1]
                            Solar-Open-100B vs GLM-4.5-Air: 가중치 파생 분석 (파생설) - Sionic AI GitHub.
                            [404 - 저장소 폐쇄됨]
2. [2]
                            Solar vs GLM vs Phi: 구조적 수렴성 반박 (독립설) - Hyunwoong Ko GitHub.
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
