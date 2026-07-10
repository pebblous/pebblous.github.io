---
title: Physical AI에 돈이 몰린다
subtitle: 빅테크, 스타트업, 그리고 한국, 각자의 판 읽기
date: 2026-04-24
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Physical AI에 돈이 몰린다

_빅테크, 스타트업, 그리고 한국, 각자의 판 읽기_

## Executive Summary

> [!callout]
> "Physical AI"라는 말은 모두가 쓰지만, 실제로 누가 이 판을 만들고 있는지는 잘 보이지 않는다. 2025년 로봇 스타트업 VC 투자는 $138억을 돌파했고, 휴머노이드 특화 투자는 전년 대비 300% 급증했다. Figure AI 밸류에이션은 18개월 만에 15배, Skild AI는 7개월 만에 3배가 됐다.

> 이 리포트는 Physical AI 생태계를 세 층위로 해부한다. 풀스택 빅테크(NVIDIA, Google, Tesla, Amazon), 하드웨어+AI 스타트업(Figure AI, Skild AI, Apptronik, 1X, PI), 그리고 한국(Rainbow Robotics, HD Hyundai, K-Humanoid Alliance). 각 플레이어는 서로 다른 역할과 전략으로 이 시장에 참전했다.

> 진짜 경쟁은 로봇 한 대가 아니다. "누가 로봇 OS를 장악하는가"가 이 전쟁의 핵심이다. NVIDIA는 Isaac 생태계로 이미 Figure AI, Boston Dynamics, Agility, Skild AI를 끌어들였다. 이 플랫폼 전쟁의 승자가 하드웨어 위의 소프트웨어 세금을 걷는다. 이 글은 [피지컬 AI](/project/PhysicalAI/ko/) 시리즈의 산업 지형 편으로, 자본과 플랫폼이 어디로 흐르는지를 읽는 자리다.

$138억

2025년 로봇 스타트업 VC  
(전년 +77%)

$61억

2025년 휴머노이드 특화  
(전년 +300%)

15×

Figure AI 밸류에이션  
18개월 성장

3×

Skild AI 밸류에이션  
7개월 성장

## Physical AI란 무엇인가 — 용어 정리

"Physical AI"는 NVIDIA가 2025년 CES에서 전면에 내세운 용어지만, 개념 자체는 더 넓다. 디지털 세계가 아닌 물리 세계에서 작동하는 AI 전반을 가리킨다. ChatGPT가 텍스트 토큰을 예측한다면, Physical AI는 카메라와 센서로 현실을 인식하고 모터와 액추에이터로 물리 세계에 행동한다.

### Physical AI의 범위

- •휴머노이드 로봇 — 양발 직립 보행, 손 조작 가능
- •매니퓰레이터 로봇 — 산업용 팔 로봇, 정밀 조작
- •자율주행 차량 — Tesla FSD, Waymo
- •AMR (자율 이동 로봇) — 물류 창고 자동화
- •드론/UAV, 수술 로봇

> [!callout]
> 이 리포트의 초점은 VLA 기반 휴머노이드, 매니퓰레이터 로봇 생태계다 — AI가 행동 정책을 직접 학습하는 영역. 텍스트 예측 오류는 수정 가능하지만, 로봇 행동 오류는 물리적 결과를 낳는다. 이것이 Physical AI가 LLM과 근본적으로 다른 이유다.

## 생태계 지도 — 세 층위의 플레이어

Physical AI 생태계는 단순하지 않다. 빅테크, 스타트업, 부품, 소프트웨어 전문회사까지 세 층위가 서로 다른 역할로 얽혀 있다. 완성 로봇을 만드는 회사와 그 위에서 돌아가는 AI를 만드는 회사, 그리고 부품을 공급하는 회사 — 이 구조를 이해하지 않으면 투자 흐름을 읽을 수 없다.

층위 1 · 풀스택 빅테크

### AI + 하드웨어 + 플랫폼 수직계열화

| 회사 | 전략 | 주요 자산 |
| --- | --- | --- |
| NVIDIA | AI 인프라 + 플랫폼 장악 | Isaac, Cosmos, GR00T, Jetson |
| Google/DeepMind | AI 모델 + 파트너십 | Gemini Robotics, RT-X 역사 |
| Tesla | 수직계열화 (자체 HW+AI) | Optimus, FSD 데이터, Dojo |
| Amazon | 배포(창고) + 투자 | Agility Robotics 인수, Digit |

층위 2 · 하드웨어 + AI 스타트업

### 유니콘을 넘어 데카콘으로

| 회사 | 설립 | 밸류에이션 | 주요 투자자 |
| --- | --- | --- | --- |
| Figure AI | 2022 | $390억 | NVIDIA, Microsoft, OpenAI, Bezos |
| Skild AI | 2023 | $140억 | SoftBank, NVIDIA |
| Apptronik | 2016 | $53억 | Google, Mercedes, John Deere |
| 1X Technologies | 2014 | ~$100억 | OpenAI |
| Physical Intelligence | 2023 | 비공개 | OpenAI, Bezos, Khosla |
| Boston Dynamics | 1992 | Hyundai 소유 | Hyundai, SoftBank |

층위 3 · 컴포넌트, 소프트웨어 특화

### 하드웨어 무관 — 모든 로봇에 붙는 레이어

| 분야 | 주요 플레이어 |
| --- | --- |
| 조작 AI | Covariant (Amazon 투자), Intrinsic (Google) |
| 범용 정책 | Skild AI ("Universal Brain"), Physical Intelligence |
| 시뮬레이션 | NVIDIA Isaac Sim, MuJoCo (DeepMind) |
| 로봇 OS | ROS 2, Isaac ROS (NVIDIA) |
| 액추에이터/부품 | 한국, 일본 공급망 |

## NVIDIA — 로봇 인프라 장악 전략

NVIDIA의 Physical AI 전략은 칩 판매로 끝나지 않는다. GPU(학습) → 시뮬레이터(Isaac Sim) → 파운데이션 모델(GR00T) → 온디바이스 칩(Jetson Thor) → 배포 플랫폼(Isaac ROS)까지 수직계열화 전체를 장악하는 것이 목표다. "AI 시대의 인텔이 되겠다"는 선언이 물리 세계로 확장되고 있다.

### Isaac 생태계의 핵심 구성 요소

NVIDIA Isaac은 단일 제품이 아니라 로봇 개발 전 과정을 커버하는 스택이다. 학습부터 배포까지 개발자가 NVIDIA 도구를 벗어나지 않도록 설계됐다.

Isaac Sim물리 정확도 높은 시뮬레이터. 합성 데이터를 무한 생성해 실세계 데이터 부족 문제를 해결.

Isaac Lab로봇 학습 프레임워크. 강화학습 + 모방학습을 GPU 병렬로 수행.

Isaac ROSROS 2 기반 GPU 가속 배포 레이어. 실시간 추론에 최적화.

Cosmos월드 파운데이션 모델. Predict(미래 예측) + Reason(물리 추론) + Policy(행동 정책).

GR00T N1.7오픈 VLA 파운데이션 모델. 오픈소스 공개 — 무료로 배포, 인프라로 수익.

Jetson Thor로봇 탑재 온디바이스 AI 칩. Atlas(Boston Dynamics)가 Jetson Thor를 탑재.

Newton오픈소스 물리 엔진 (2025.09 공개). MuJoCo와 경쟁.

### 이미 확보한 파트너십

Figure AI, Boston Dynamics, Agility Robotics, Franka Robotics, Skild AI, Disney Research — 모두 Isaac 생태계를 채택했다. NVIDIA의 전략이 작동하고 있다는 신호다.

> [!callout]
> NVIDIA의 진짜 무기는 GR00T 모델 하나가 아니다. 로봇 개발자가 NVIDIA 도구로 학습하고, NVIDIA 칩으로 추론하고, NVIDIA 플랫폼에서 배포하는 생태계를 구축하는 것이다. GR00T를 오픈소스로 공개한 것도 이 전략의 일부 — 모델은 무료로 줘도 인프라에서 수익을 낸다.

## Google/DeepMind — 모델 우위 + 하드웨어 중립

Google의 로봇공학 역사는 깊다. 2023년 RT-X(Robotics Transformer-X)로 다기관 로봇 데이터 공동학습의 선례를 만들었고, Gemini 2.0이 등장하면서 언어 추론 능력을 로봇 행동과 통합하는 Gemini Robotics 계열이 본격화됐다.

### Google의 차별점

- •하드웨어 중립: 특정 로봇 플랫폼에 묶이지 않는다. Apptronik, ALOHA 등 다양한 파트너와 협력.
- •Apptronik 투자: Google이 Apptronik의 주요 투자자. Apollo 휴머노이드가 Gemini Robotics 정책을 실행.
- •Gemini Robotics On-Device (2025.07): 클라우드 없이 로봇 내부에서 실행 가능한 경량 버전 출시.
- •멀티-임보디먼트: Motion Transfer로 단일 체크포인트가 여러 하드웨어 플랫폼을 지원.

### Google의 제한점

로봇 하드웨어 자체를 만들지 않는다 — 파트너십 의존. Gemini Robotics는 API 기반이어서 오픈소스 모델 대비 커스터마이징에 제한이 있다. NVIDIA처럼 칩-시뮬레이터-플랫폼으로 이어지는 수직 생태계가 없다.

> [!callout]
> Google의 포지션은 "최고의 AI 모델을 만들고, 하드웨어는 파트너에게 맡긴다"는 전략이다. 이것은 강점이기도 하고 약점이기도 하다. 어떤 하드웨어가 시장을 지배해도 Google 모델이 그 위에 올라가지만, 반대로 로봇 OS 차원에서의 영향력은 NVIDIA에 비해 제한적이다.

## Tesla — 데이터 플라이휠 + 수직계열화

Tesla Optimus는 2025년 말 기준 1,000대 이상이 공장 내 배포됐다. 하지만 Musk 본인이 인정했듯 아직 "유용한 일"을 하는 로봇은 없다. 학습과 반복을 위한 데이터 수집 단계다. Optimus V3는 2026년 하반기 프리몬트 생산 시작 예정.

### Tesla의 진짜 무기

FSD(완전 자율주행) 데이터 파이프라인이다. 수백만 대의 Tesla 차량이 쌓은 실세계 주행 데이터와 Dojo 슈퍼컴퓨터가 Optimus 학습에 전용될 수 있다는 가설이 시장의 기대를 높인다. 하지만 자율주행 데이터가 매니퓰레이션 학습에 실제로 얼마나 전이 가능한지는 아직 검증되지 않았다.

> [!callout]
> Tesla의 포지션은 완전한 수직계열화다 — Dojo 슈퍼컴퓨터(학습) + FSD 파이프라인(데이터) + Optimus(하드웨어) + 자체 공장(배포). 외부 로봇에는 이 인프라가 개방되지 않는다. 폐쇄형 생태계의 강점과 약점을 동시에 가진다. 발표와 실제 배포 사이의 갭이 가장 큰 플레이어이기도 하다.

## 스타트업 생태계 — 돈과 비전이 만나는 곳

2025년 Physical AI 스타트업 생태계에서 가장 눈에 띄는 현상은 밸류에이션 속도다. 불과 7~18개월 만에 3배, 15배 성장한 기업들이 등장했다. 이것이 실제 매출 기반인지, AI 투자 열기의 프리미엄인지 — 그 답은 2026-2027년 상업 배포 결과가 말해줄 것이다.

Figure AI

$390억15× / 18개월

2022년 창업. 2024년 2월 $26억에서 2025년 9월 $390억으로 급성장. BMW 공장 배포로 수익 가능성 입증. NVIDIA, Microsoft, OpenAI, Bezos 공동 투자. 자체 VLA 모델(Helix)과 GR00T 병용.

Skild AI

$140억3× / 7개월

2023년 창업, CMU 출신 로봇공학자 팀. SoftBank, NVIDIA가 $14억 투자. "Skild Brain" — 어떤 로봇, 어떤 작업에도 적용 가능한 범용 행동 정책을 목표로 한다.

Apptronik

$53억($935M 조달)

Apollo 휴머노이드. Google, Mercedes-Benz, John Deere, Qatar 국부펀드 투자. 제조, 물류 중심 상업 배포 전략. Google Gemini Robotics를 정책 레이어로 채택.

1X Technologies

~$100억(협상 중)

노르웨이 기반. OpenAI가 초기 투자. Neo 모델 개발. 유럽 로봇 스타트업 중 가장 큰 규모.

Physical Intelligence (π)

비공개

하드웨어 없이 소프트웨어(정책)만. OpenAI, Bezos, Khosla 투자. π0 오픈소스 공개로 커뮤니티 확보. 하드웨어 무관 전략으로 모든 로봇 파트너에 정책 제공.

### Agility Robotics — 유일한 실제 배포

2026년 기준 의미 있는 규모로 상업 배포된 휴머노이드는 Agility의 Digit가 유일하다. Amazon, GXO, Toyota 공장에서 빈 토트(tote) 이동 작업을 수행 중이다. Amazon이 인수해 내부 물류에 우선 배포하고 있다.

> [!callout]
> "가장 멋진 데모"와 "실제로 돈을 버는 로봇"은 다르다. 현재까지 후자는 Agility Digit뿐이다. 나머지 스타트업들은 여전히 데모와 파일럿 단계에 있다. 2026-2027년이 이 갭을 좁히는 결정적 시기가 될 것이다 (ABI Research 전망).

## 한국 Physical AI 🇰🇷 — 공급망의 숨겨진 강자

글로벌 분석가들이 "한국이 조용한 승자"라고 부르는 이유가 있다. 완성 로봇이 아니라 부품 공급망이다. 감속기, 모터, 액추에이터, 센서 — 어떤 로봇 회사가 만들어도 이 부품들은 한국, 일본이 공급한다. 현대·삼성·SK가 이 공급망에 깊숙이 자리잡고 있다.

### Rainbow Robotics — KAIST에서 삼성으로

KAIST 오준호 교수팀이 창업. 2005년 한국 최초 휴머노이드 HUBO를 만든 팀의 후속 상업화 회사다. 2024년 말 삼성전자가 콜옵션을 행사해 지분 14.7%→35%로 올려 사실상 삼성 자회사가 됐다. 20년 축적된 관절·제어·액추에이터 노하우가 핵심 자산이다.

### HD Hyundai Robotics + Boston Dynamics

현대모비스가 2026년 1월 Boston Dynamics와 파트너십 체결. Atlas 상업용 버전의 액추에이터를 현대모비스가 생산한다. Hyundai가 보유한 Boston Dynamics는 이 협력으로 생산 능력을 강화했다.

### K-Humanoid Alliance

2025년 12월 출범. 삼성전자·현대자동차·SK Inc.·Rainbow Robotics + 부품 전문 중소기업들이 결합. 한국 정부 과기부의 "Physical AI 핵심기술 PoC" 사업은 KAIST가 총괄 연구책임을 맡았다.

> [!callout]
> 한국의 포지션은 독특하다. 완성 로봇 경쟁에서는 Figure AI나 Boston Dynamics와 직접 맞붙기 어렵지만, 누가 최종 승자가 되든 그 로봇의 내장 부품은 한국에서 나온다. 이것이 "조용한 승자" 전략의 핵심이다. Rainbow Robotics(삼성 자회사)는 소프트웨어+하드웨어 통합 쪽에서 추가 경쟁력을 쌓고 있다.

## 투자 동향 — 숫자로 보는 Physical AI 붐

2025년은 Physical AI 투자에서 역사적 변곡점이다. 로봇 스타트업 VC 총액이 2021년 AI 붐 고점($131억)을 처음 돌파했고, 휴머노이드 특화 투자는 4년 만에 143배 성장했다.

| 연도 | 로봇 스타트업 VC 총액 | 휴머노이드 특화 | 비고 |
| --- | --- | --- | --- |
| 2020 | — | $4,260만 | 기저 |
| 2023 | $80억 | $15억 | VLA 등장 전후 |
| 2024 | $78억 | $15억 | GR00T 발표 전 |
| 2025 | $138억 (+77%) | $61억 (+300%) | 2021 고점 돌파 |

### 주요 투자자별 포지셔닝

누가 어디에 베팅했는지 보면 전략이 보인다. NVIDIA는 Isaac 생태계 파트너 전방위 투자, OpenAI는 소프트웨어 정책 레이어 베팅, SoftBank는 범용 뇌(Skild AI) 집중 투자다.

| 투자자 | 주요 베팅 |
| --- | --- |
| NVIDIA | Figure AI, Apptronik, Skild AI + 전략적 파트너십 다수 |
| SoftBank | Skild AI ($14B) — 과거 Boston Dynamics 투자 경험 |
| OpenAI | Figure AI, 1X Technologies, Physical Intelligence |
| Bezos | Figure AI, Physical Intelligence |
| Google | Apptronik |
| Microsoft | Figure AI |
| John Deere | Apptronik (농기계→휴머노이드 전략) |

> [!callout]
> ABI Research는 2026-2027년을 Physical AI의 상업적 변곡점으로 지목했다. 139개 딜, +300% 성장 — 숫자는 인상적이지만, 이 투자들이 실제 제품과 배포로 이어질 때까지 "버블인가, 붐인가"의 질문은 계속될 것이다.

## 플랫폼 전쟁 — 누가 로봇 OS를 지배하는가

스마트폰 전쟁을 생각해보자. 노키아, 모토로라, 삼성 중 누가 이겼는가? 하드웨어가 아니라 iOS와 Android — 소프트웨어 플랫폼이 이겼다. 로봇도 같다. 어떤 하드웨어가 만들어지든 그 위에서 실행되는 소프트웨어 플랫폼이 생태계를 통제한다.

### 현재 플랫폼 경쟁 구도

아래는 생태계 영향력 기준의 상대적 포지션이다. 채택 파트너 수, 수직 통합 깊이, 개발자 도구 완성도를 종합한 평가다.

NVIDIA Isaac

Figure, Atlas, Agility, Skild

ROS 2 (오픈소스)

중립 기반, Isaac ROS와 공존

Google (API)

Apptronik 파트너, 하드웨어 없음

Tesla (폐쇄형)

Optimus 전용, 외부 개방 없음

### NVIDIA의 오픈소스 전략

NVIDIA가 GR00T를 무료 오픈소스로 푼 이유는 자선이 아니다. 모델이 무료여도 학습에는 DGX(NVIDIA GPU 서버)가 필요하고, 추론에는 Jetson이 필요하다. 에코시스템이 NVIDIA 위에 구축될수록 칩 수요가 증가한다.

> [!callout]
> "로봇 OS 전쟁"의 현 스코어: NVIDIA Isaac 우세. 이미 주요 하드웨어 플레이어 대부분이 Isaac 생태계에 편입됐다. ROS 2는 중립 기반으로 공존 중이고, Google은 모델 레이어에서 강하지만 플랫폼 레이어는 약하다. Tesla는 폐쇄형으로 외부 생태계와 단절돼 있다. 이 구도가 바뀌려면 Google이나 새 플레이어가 하드웨어 파트너십을 대폭 확대해야 한다.

## 자주 묻는 질문

### Physical AI와 소프트웨어 AI의 차이는?

소프트웨어 AI(LLM, 생성 AI)는 텍스트·이미지 등 디지털 데이터를 처리한다. Physical AI는 카메라·센서로 물리 세계를 인식하고, 모터·액추에이터로 물리 세계에 행동한다. 핵심 차이는 "현실 세계의 물리 법칙과 씨름해야 한다"는 점이다. 텍스트 예측 오류는 수정 가능하지만, 로봇 행동 오류는 물리적 결과를 낳는다.

### 왜 갑자기 2025년에 투자가 폭발했나?

세 가지 조건이 동시에 충족됐다. 첫째, VLA 모델의 등장으로 "범용 로봇 정책"이 기술적으로 가능해졌다. 둘째, Figure AI, Boston Dynamics Atlas 등 하드웨어 성숙도가 배포 수준에 도달했다. 셋째, ChatGPT 이후 AI 투자 심리가 과열되면서 "다음 AI 물결"로 로봇이 부상했다.

### 한국 기업들은 어떤 역할을 하는가?

한국은 완성 로봇보다 부품 공급망에서 강점이 있다. 감속기, 모터, 액추에이터 — 어떤 로봇 하드웨어 회사가 성공해도 이 부품들을 한국, 일본에서 구입한다. Rainbow Robotics(Samsung 자회사)는 소프트웨어+하드웨어 통합 쪽에서 경쟁하며, K-Humanoid Alliance는 국가 차원의 협력 체계를 구축 중이다.

### Tesla Optimus는 실제로 얼마나 진행됐나?

2026년 4월 기준, Musk 본인이 "아직 유용한 일을 하는 Optimus는 없다"고 인정했다. 1,000대 이상이 공장에 배포됐지만 데이터 수집과 학습 목적이 주다. 상업 생산은 2026년 하반기 시작 예정. 발표와 실제 사이의 갭이 가장 큰 플레이어다.

### Figure AI가 $390억 밸류에이션을 받은 근거는 무엇인가?

투자자들의 논리는 세 가지다. BMW 공장 실제 배포로 수익 가능성 입증. NVIDIA, Microsoft, OpenAI, Bezos 모두 투자해 강력한 전략적 지지. 그리고 로봇 섹터 전체에 대한 낙관론이 반영된 프리미엄. 18개월 만에 15배 성장은 현재 매출보다 미래 잠재력에 베팅한 것이다.

### Skild AI가 "Universal Brain"이라고 부르는 이유는?

Skild AI의 목표는 특정 작업이나 플랫폼에 특화된 모델이 아니라, 어떤 로봇, 어떤 작업에도 쓸 수 있는 범용 행동 정책을 만드는 것이다. Physical Intelligence의 π 시리즈와 유사한 포지셔닝이지만, Skild Brain은 더 넓은 범용성을 주장한다. SoftBank+NVIDIA라는 투자 조합이 이 가설에 큰 베팅을 한 것이다.

### 이 중 누가 살아남을 것인가?

2026년 현재 유일하게 의미 있는 규모로 상업 배포된 휴머노이드는 Agility의 Digit다. 하드웨어+AI+배포 파이프라인을 모두 갖춘 회사가 살아남을 가능성이 높다. 단순히 멋진 데모만 있는 회사는 자본 소모전에서 버티기 어렵다. 플랫폼 경쟁에서는 NVIDIA가 현재 가장 유리한 위치에 있다.

<!-- stat-card -->
**📚 피지컬 AI 시리즈** — 이 글은 [피지컬 AI](/project/PhysicalAI/ko/)에서 큐레이션하는 시리즈의 일부입니다. 로봇이 환경을 보고, 이해하고, 행동하기까지 — 데이터·시뮬레이션·모델·산업 지형을 한자리에서 묶어 읽는 자리.
