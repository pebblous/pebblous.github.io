---
title: Gemma 4 심층 보고서
subtitle: Apache 2.0으로 열린 소버린 AI의 문
date: 2026-04-03
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Gemma 4 심층 보고서

_Apache 2.0으로 열린 소버린 AI의 문_

## Executive Summary

> [!callout]
> Google DeepMind가 2026년 4월 2일 공개한 Gemma 4는 단순한 세대 교체가 아니다. E2B, E4B, 26B MoE, 31B Dense 4종으로 구성된 이 모델 패밀리는 스마트폰 칩부터 데이터센터 GPU까지 단일 아키텍처 계보로 커버하며, 무엇보다 완전 오픈소스 라이선스(Apache 2.0)를 채택했다. 이전 Gemma 시리즈가 기업 법무팀의 검토를 요하는 커스텀 라이선스였다면, 이번에는 제약 없이 상업적으로 배포하고 파인튜닝할 수 있다.

> 아키텍처 측면에서 주목할 혁신은 두 가지다. 첫째, Per-Layer Embeddings(PLE)는 각 레이어마다 토큰 전용 신호를 별도로 주입하여 소형 모델이 대형 모델 수준의 표현력을 갖추게 한다. 둘째, 26B MoE 모델은 전체 파라미터(25.2B) 중 추론 시 3.8B만 활성화하여 사실상 4B 모델의 속도로 26B급 추론 품질을 제공한다. Arena AI 리더보드 기준 오픈 모델 세계 6위 성능을 RTX 소비자 GPU에서 구현하는 셈이다.

> [VentureBeat](https://venturebeat.com/ai/googles-gemma-4-arrives-with-apache-2-0-license-multimodal-support-and-a-big-push-for-on-device-ai/)는 "라이선스 변화가 벤치마크보다 더 큰 뉴스"라고 평가했다. 기업 입장에서 고객 데이터를 외부 API에 보내지 않고 완전 인하우스로 운영할 수 있는 법적 기반이 처음으로 완성됐기 때문이다. 소버린 AI와 온프렘 Data Greenhouse를 구상하는 조직에게 Gemma 4는 지금까지와 다른 선택지를 제시한다.

## 모델 패밀리 개요

[Google의 공식 블로그](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)에 따르면 Gemma 4는 "모든 하드웨어에서 프론티어급 추론"을 목표로 네 가지 크기로 출시됐다. 단순한 파라미터 크기 구분이 아니라 **배포 환경별 최적화**가 핵심 설계 원칙이다.

| 모델 | 유효 파라미터 | 전체 파라미터 | 컨텍스트 | 입력 | 타겟 하드웨어 |
| --- | --- | --- | --- | --- | --- |
| E2B | 2.3B | 5.1B | 128K | 텍스트, 이미지, 오디오 | 스마트폰, Raspberry Pi, NVIDIA Jetson |
| E4B | 4.5B | 8B | 128K | 텍스트, 이미지, 오디오 | 랩탑 GPU, 엣지 서버 |
| 26B A4B MoE | 3.8B (활성) | 25.2B | 256K | 텍스트, 이미지 | 소비자 GPU, 워크스테이션 |
| 31B Dense | 31B | 31B | 256K | 텍스트, 이미지 | NVIDIA H100 80GB (단일 GPU) |

모델명의 접두사 "E"는 **유효 파라미터(Effective Parameters)**를 의미한다. E2B는 실질적으로 2.3B처럼 동작하지만 디스크 용량은 5.1B에 해당한다. 이 차이는 Per-Layer Embeddings(PLE) 기법 때문인데, 레이어별 임베딩 테이블이 저장 공간은 차지하지만 추론 시 계산 부하는 최소화된다.

"A"가 붙은 26B A4B는 **활성 파라미터(Active Parameters)**를 뜻한다. 26B 전체 중 추론 때마다 3.8B만 활성화하는 Mixture-of-Experts 구조다. [Hugging Face 블로그](https://huggingface.co/blog/gemma4)는 이를 두고 "4B 활성 파라미터로 26B급 성능"이라며, Arena AI 텍스트 점수 1441점을 단 4B 컴퓨트로 달성한다고 설명했다.

<!-- stat-card -->
**두 가지 배포 티어** — **엣지 티어 (E2B, E4B):** 모바일 우선 설계. Qualcomm, MediaTek과의 협력으로 오프라인 완전 구동. 오디오 네이티브 지원(ASR, 음성-번역). Android AICore 개발자 프리뷰에서 오늘부터 사용 가능. — **워크스테이션 티어 (26B MoE, 31B Dense):** bfloat16 풀정밀도 기준 H100 80GB 단일 GPU 가동. 양자화 버전은 소비자 GPU에서 구동. Cloud Run 서버리스(RTX Pro 6000)로 사용량 0일 때 자동 축소.

## 아키텍처 심층 분석

[Hugging Face 블로그](https://huggingface.co/blog/gemma4)에서 공개된 기술 분석은 Gemma 4의 아키텍처가 이전 세대와 비교해 여러 중요한 선택을 했음을 보여준다. 핵심은 **호환성, 효율성, 장문맥 지원**의 균형이다.

### Per-Layer Embeddings (PLE)

표준 트랜스포머에서 각 토큰은 입력 시 단 하나의 임베딩 벡터를 부여받고, 이 벡터가 전체 레이어에 걸쳐 잔차 스트림의 기반이 된다. 이 구조에서 임베딩은 모든 레이어가 필요로 할 정보를 미리 담아야 한다는 부담이 있다.

PLE는 이 문제를 다르게 접근한다. 각 토큰에 대해 레이어마다 별도의 소형 벡터를 생성하여 잔차 스트림에 주입한다. 두 가지 신호를 조합하는데, 하나는 토큰 ID 기반 룩업이고 다른 하나는 주 임베딩의 학습된 프로젝션이다. 이 추가 신호는 해당 레이어에서 토큰 고유 정보가 필요할 때만 활성화되므로, 전체 정보를 초기 임베딩에 압축하는 부담 없이 레이어별 특화가 가능하다.

<!-- stat-card -->
**PLE 벡터의 차원 수는 메인 히든 사이즈보다 훨씬 작다. 즉, 레이어별 특화 능력을 추가하면서도 파라미터 증가는 최소화된다. 결과적으로 디스크 용량과 추론 비용이 분리된다 — E2B는 5.1B 용량을 가지지만 2.3B처럼 구동된다.**

### Shared KV Cache

모델의 마지막 num_kv_shared_layers 레이어들은 자체 K/V 프로젝션을 계산하지 않는다. 대신 같은 어텐션 타입(슬라이딩 또는 글로벌)의 마지막 비공유 레이어에서 K/V 텐서를 재사용한다.

Hugging Face에 따르면 이 최적화는 품질에 미치는 영향이 최소이면서도 장문맥 생성과 온디바이스 사용에서 메모리와 컴퓨트 모두를 절감한다. 256K 컨텍스트 창을 현실적인 메모리 예산 안에서 구현하는 핵심 기법이다.

### 하이브리드 어텐션: 슬라이딩 + 글로벌

Gemma 4는 로컬 슬라이딩 윈도우 어텐션과 전역 풀컨텍스트 어텐션 레이어를 교대로 배치하는 하이브리드 구조를 채택했다. 소형 모델(E2B, E4B)은 512토큰 슬라이딩 윈도우, 대형 모델은 1024토큰을 사용한다. 최종 레이어는 항상 전역 어텐션이다.

RoPE도 이중 구성이다. 슬라이딩 레이어에는 표준 RoPE, 전역 레이어에는 Proportional RoPE를 적용하여 더 긴 컨텍스트에서의 위치 인코딩 성능을 높였다.

### 26B MoE: 128개 소형 전문가

[VentureBeat](https://venturebeat.com/ai/googles-gemma-4-arrives-with-apache-2-0-license-multimodal-support-and-a-big-push-for-on-device-ai/)는 26B MoE 아키텍처의 선택을 특히 주목했다. 최근 대형 MoE 모델들이 소수의 대형 전문가(expert)를 사용하는 경향과 달리, Gemma 4의 26B MoE는 **128개의 소형 전문가**를 사용하고 토큰당 8개를 활성화한다. 여기에 항상 켜져 있는 공유 전문가 1개가 추가된다.

이 설계의 결과는 서빙 경제성으로 직결된다. 27B~31B 덴스 모델에 필적하는 추론 품질을 4B급 처리 속도로 제공한다. 코딩 어시스턴트, 문서 처리 파이프라인, 멀티턴 에이전틱 워크플로우처럼 처리량이 중요한 프로덕션 환경에서 GPU 수요와 토큰당 비용을 동시에 줄인다.

<!-- stat-card -->
**Google은 bfloat16 원본 외에 Quantization-Aware Training 체크포인트도 함께 공개했다. 저정밀도에서도 품질 손실을 최소화하기 위한 것으로, 소비자 GPU에서 풀정밀도 동급의 성능을 유지한다.**

## 멀티모달 능력 & 에이전틱 워크플로우

이전 세대 오픈 모델들은 멀티모달 기능을 텍스트 백본에 덧붙이는 방식으로 구현했다. 비전 인코더를 볼트온하고, 오디오는 Whisper 같은 외부 ASR 파이프라인을 사용했다. Gemma 4는 이를 아키텍처 수준에서 통합했다.

### 비전 인코더: 가변 해상도 + 설정 가능한 토큰 예산

Gemma 4의 비전 인코더는 Gemma 3n의 이전 인코더 대비 두 가지 핵심 개선을 포함한다. 첫째, **가변 종횡비 지원**으로 입력 이미지의 원본 비율을 그대로 보존한다. 둘째, **설정 가능한 비주얼 토큰 예산**(70, 140, 280, 560, 1120토큰)으로 개발자가 속도와 품질 사이를 직접 조정할 수 있다.

낮은 예산(70토큰)은 분류나 캡셔닝에 충분하고, 높은 예산(1120토큰)은 OCR, 문서 파싱, 정밀 시각 분석에 필요하다. 멀티이미지와 비디오 입력(프레임 시퀀스 처리)도 네이티브로 지원한다.

### 오디오 인코더: E2B, E4B 전용

두 엣지 모델은 USM 스타일 컨포머 기반의 오디오 인코더를 내장한다. Gemma 3n 대비 오디오 인코더가 681M에서 305M 파라미터로 압축됐고, 프레임 지속 시간은 160ms에서 40ms로 단축되어 더 빠른 음성 인식이 가능하다. 자동 음성 인식(ASR)과 음성-번역 텍스트 변환이 온디바이스에서 구현된다.

의료, 현장 서비스, 다국어 고객 응대처럼 데이터를 로컬에 유지해야 하는 환경에서 ASR, 번역, 추론, 함수 호출을 단일 모델 하나로 해결할 수 있다는 것은 아키텍처 단순화를 의미한다.

### 네이티브 함수 호출: 에이전틱 AI의 기반

함수 호출은 4개 모델 모두에 네이티브로 내장됐다. Google이 작년 말 공개한 FunctionGemma 연구에서 시작된 이 기능은 이전 방식처럼 프롬프트 엔지니어링으로 모델을 설득하는 게 아니라, **멀티턴 에이전틱 플로우와 다중 도구 사용에 맞게 학습된 것**이다.

구조화된 JSON 출력과 네이티브 시스템 인스트럭션도 지원되어, 서로 다른 도구와 API를 신뢰성 있게 호출하는 자율 에이전트 구축이 가능하다. 기업 팀이 도구를 사용하는 에이전트를 만들 때 투자해야 하는 프롬프트 엔지니어링 오버헤드가 줄어드는 것이 실질적인 이점이다.

- **GUI 감지 & 포인팅** — 화면 요소의 바운딩 박스를 JSON으로 직접 출력
- **OCR & 문서 파싱** — 고토큰 예산에서 정밀 문자 인식
- **비디오 이해** — 오디오 포함 비디오를 프레임 시퀀스로 처리
- **코드 생성** — 오프라인 로컬 AI 코드 어시스턴트로 활용
- **140+ 언어** — 140개 이상 언어로 네이티브 학습

<!-- stat-card -->
**멀티모달 에이전틱 능력 요약**

## 파인튜닝 & 도메인 특화

[Google의 공식 블로그](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)는 Gemma 4로 도메인 특화에 성공한 두 가지 사례를 직접 언급했다. INSAIT 연구소는 Gemma를 기반으로 불가리아어 특화 언어 모델 **BgGPT**를 만들었고, Yale 대학은 **Cell2Sentence-Scale**로 암 치료 경로 탐색에 활용했다. "이미 놀라운 성공 사례를 봤다"는 것이 공식 문구다.

### 파인튜닝 옵션

#### TRL (Transformers Reinforcement Learning)

<!-- stat-card -->
**Hugging Face가 Gemma 4 출시에 맞춰 TRL을 업그레이드했다. 이제 환경과의 상호작용 중 **멀티모달 툴 응답**을 지원한다 — 학습 중 모델이 도구로부터 텍스트뿐 아니라 이미지도 받아볼 수 있다. 예시로 CARLA 자율주행 시뮬레이터에서 카메라를 통해 도로를 보고 판단하며 학습하는 스크립트가 공개됐다.**

#### Unsloth Studio

<!-- stat-card -->
**UI 기반 파인튜닝 플랫폼. MacOS, Linux, WSL, Windows 설치 지원. 로컬 또는 Google Colab에서 실행 가능. 게이밍 GPU에서도 동작한다.**

#### Vertex AI + 커스텀 Docker 컨테이너

<!-- stat-card -->
**Hugging Face가 Vertex AI Serverless Training Jobs를 위한 전체 예시를 공개했다. 비전·오디오 인코더를 동결(freeze)하고 함수 호출 능력만 SFT로 확장하는 방식이 포함된다. 클라우드 기반 엔터프라이즈 파인튜닝 워크플로우의 레퍼런스 구현이다.**

파인튜닝 결과물의 배포는 Apache 2.0 하에 완전히 자유롭다. 이전 Gemma 커스텀 라이선스에서는 파인튜닝 파생물의 상업적 배포에 법적 해석이 필요했지만, 이제는 그 모호함이 사라졌다.

## 배포 생태계

Gemma 4는 출시 당일(day-one)부터 주요 도구와 플랫폼을 지원한다. Google의 공식 발표 기준 지원 목록은 다음과 같다.

#### 로컬 추론

- Ollama
- LM Studio
- llama.cpp
- MLX (Apple Silicon)
- Mistral.rs
- Transformers.js (브라우저 WebGPU)

#### 프로덕션 서빙

- vLLM
- NVIDIA NIM & NeMo
- SGLang
- Baseten
- Docker
- Google Cloud Run (서버리스)

#### 파인튜닝 & 학습

- Hugging Face Transformers + TRL
- Unsloth Studio
- Keras, MaxText, Tunix
- Vertex AI
- Google Colab

#### 하드웨어 최적화

- NVIDIA (Jetson Orin → Blackwell)
- AMD ROCm™
- Google Trillium & Ironwood TPU
- Qualcomm (모바일)
- MediaTek (모바일)

[VentureBeat](https://venturebeat.com/ai/googles-gemma-4-arrives-with-apache-2-0-license-multimodal-support-and-a-big-push-for-on-device-ai/)가 특히 주목한 것은 **Cloud Run 서버리스 배포**다. RTX Pro 6000 GPU를 사용하는 완전 서버리스 구성으로, 실제 추론이 없을 때 자동으로 0으로 축소된다. 내부 도구나 트래픽이 낮은 애플리케이션에서 오픈 모델 배포의 경제성이 크게 달라질 수 있다는 평가다.

모델 가중치 다운로드는 [**Hugging Face**](https://huggingface.co/collections/google/gemma-4-release-680427c1db682bc8fbebe8e6), [**Kaggle**](https://www.kaggle.com/models/google/gemma-4), [**Ollama**](https://ollama.com/library/gemma4) 세 곳에서 제공된다. 사전 학습된 베이스 모델과 인스트럭션 튜닝(IT) 버전이 모두 공개됐다.

## 벤치마크 분석

Google이 공개한 벤치마크 수치는 이전 세대와의 세대 차이를 명확히 보여준다. [VentureBeat](https://venturebeat.com/ai/googles-gemma-4-arrives-with-apache-2-0-license-multimodal-support-and-a-big-push-for-on-device-ai/)는 "이 숫자들은 얼마 전까지 프로프라이어터리 모델의 프론티어였다"고 평가했다.

| 벤치마크 | 31B Dense | 26B MoE | E4B | E2B | Gemma 3 27B (참고) |
| --- | --- | --- | --- | --- | --- |
| AIME 2026 | 89.2% | 88.3% | 42.5% | 37.5% | 20.8% |
| LiveCodeBench v6 | 80.0% | 77.1% | 52.0% | 44.0% | 29.1% |
| GPQA Diamond | — | 82.3% | — | — | — |
| MMMU Pro (시각) | 76.9% | — | — | — | — |
| MATH-Vision | 85.6% | — | — | — | — |
| Codeforces ELO | 2,150 | — | — | — | — |
| Arena AI (텍스트) | 1,452 (#3) | 1,441 (#6) | — | — | — |

출처: [Google DeepMind 공식 발표](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/) (2026.04.02), Arena AI 리더보드 (2026.04.01 기준)

AIME 2026 기준 Gemma 3 27B이 20.8%였던 것을 31B Dense가 89.2%로 올렸다는 수치는 단순 세대 개선이 아니다. 리즈닝 능력의 질적 전환을 의미한다. 26B MoE의 88.3%가 단 3.8B 활성 파라미터로 달성된다는 점도 중요하다.

엣지 모델도 인상적이다. E4B가 AIME에서 42.5%, LiveCodeBench에서 52.0%를 기록했다 — Gemma 3 27B의 성능을 1/6 크기로 넘어섰다. Google 발표대로 "파라미터당 전례 없는 지능"이라는 표현이 과장이 아니다.

<!-- stat-card -->
**[VentureBeat](https://venturebeat.com/ai/googles-gemma-4-arrives-with-apache-2-0-license-multimodal-support-and-a-big-push-for-on-device-ai/)는 "벤치마크를 경쟁 모델과 비교해 읽어야 한다"고 강조했다. Qwen 3.5, GLM-5, Kimi K2.5 등이 이 파라미터 범위에서 공격적으로 경쟁하며, 필드는 빠르게 움직인다. Gemma 4의 차별점은 단일 벤치마크가 아니라 강력한 추론 + 네이티브 멀티모달 + 함수 호출 + 256K 컨텍스트 + 진정한 오픈 라이선스의 조합에 있다.**

## Apache 2.0의 전략적 의미

VentureBeat의 Sam Witteveen은 이 라이선스 변화를 별도 기사로 다뤘다: _"Google releases Gemma 4 under Apache 2.0 — and that license change may matter more than benchmarks."_ 과장이 아니다.

이전 Gemma 시리즈는 커스텀 라이선스였다. 사용 제한 조항이 있었고, 재배포와 상업적 배포에 법적 해석이 필요했으며, Google이 언제든 조건을 변경할 수 있었다. 기업 법무팀의 검토가 필요했기 때문에 많은 팀이 동일한 Apache 2.0 라이선스를 가진 Mistral이나 Alibaba의 Qwen으로 이탈했다.

Gemma 4의 Apache 2.0은 그 마찰을 완전히 제거한다. **커스텀 조항 없음, 유해 사용 카브아웃 없음, 재배포·상업적 배포 제한 없음.** Google의 공식 발표에서도 "데이터, 인프라, 모델에 대한 완전한 통제권"이라는 표현과 함께 **"디지털 소버린티"**라는 단어를 직접 사용했다.

타이밍도 의미심장하다. 중국 일부 AI 연구소들(Alibaba의 최신 Qwen 등)이 최신 모델의 완전 오픈 릴리즈에서 후퇴하는 시점에, Google은 반대 방향으로 움직이고 있다.

- **법무 검토 없이 평가 시작** — 조달·도입 과정에서 법적 검토 단계 제거
- **파인튜닝 파생물 상업 배포 자유** — 도메인 특화 모델을 제품화할 때 라이선스 불확실성 없음
- **온프렘 완전 가동** — 외부 API 없이 인하우스 운영, 데이터가 외부로 나가지 않음
- **재배포 & 커스터마이징 자유** — 컨테이너 이미지, 패키지, 서비스 형태로 자유롭게 래핑 가능

<!-- stat-card -->
**Apache 2.0이 바꾸는 것들**

<!-- stat-card -->
**페블러스가 Gemma 4에 주목하는 이유** — 소버린 온프렘 Data Greenhouse를 설계할 때 가장 중요한 기반 요소 중 하나는 도메인 특화가 가능한 오픈 모델이다. 고객 데이터를 외부 API로 내보내지 않으면서 분야별로 파인튜닝하고 프로덕션에 배포할 수 있어야 하는데, 그 조건을 동시에 충족하는 모델이 지금까지는 제한적이었다. — Gemma 4의 Apache 2.0은 법적 기반을, 26B MoE의 경제성은 하드웨어 기반을 제공한다. 네이티브 함수 호출과 256K 컨텍스트는 데이터 파이프라인과 연동하는 Agentic AI Data Scientist 구현에 직접 연결된다. 아키텍처 수준에서 설계된 멀티모달 능력은 정형 데이터와 비정형 데이터를 동시에 다루는 Data Greenhouse의 다층 구조와 맞닿는다.
                        페블러스는 Gemma 4를 Data Greenhouse의 기반 레이어 후보 모델로 평가하고 있다.

## 참고 자료

- ▸ [Google DeepMind 공식 블로그 — Introducing Gemma 4](https://blog.google/innovation-and-ai/technology/developers-tools/gemma-4/)
- ▸ [Hugging Face 블로그 — Gemma 4 기술 분석](https://huggingface.co/blog/gemma4)
- ▸ [VentureBeat — Google releases Gemma 4 under Apache 2.0](https://venturebeat.com/ai/googles-gemma-4-arrives-with-apache-2-0-license-multimodal-support-and-a-big-push-for-on-device-ai/)
- ▸ [Hugging Face — Gemma 4 모델 컬렉션](https://huggingface.co/collections/google/gemma-4-release-680427c1db682bc8fbebe8e6)
- ▸ [Kaggle — Gemma 4 모델 다운로드](https://www.kaggle.com/models/google/gemma-4)
- ▸ [Google AI Studio — Gemma 4 즉시 체험](https://aistudio.google.com)
