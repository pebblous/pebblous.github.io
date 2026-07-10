---
title: VQ-Tokenizer: 데이터 품질과 합성 데이터의 기술적 척추
subtitle: 코드북 활용률 10%가 뜻하는 것 — AI가 세상의 90%를 본 적이 없다
date: 2026-04-22
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# VQ-Tokenizer: 데이터 품질과 합성 데이터의 기술적 척추

_코드북 활용률 10%가 뜻하는 것 — AI가 세상의 90%를 본 적이 없다_

## Executive Summary

> [!callout]
> **코드북 활용률이 10%라는 것은, AI가 세상의 90%를 본 적이 없다는 뜻이다.** VQ-Tokenizer(벡터 양자화 토크나이저)는 연속 임베딩을 K개의 이산 코드워드로 변환하는 장치다. 나이브(naive) 학습에서 K=1,024개 코드북 중 실제로 사용되는 코드워드는 10~30%에 불과하다. 나머지 70~90%는 비활성 상태로 남는다. AI는 그 비율만큼 세상의 패턴을 학습하지 못한 채 추론을 시작한다.

> VQGAN 실험에서는 8,912개 코드북 중 66%가 전혀 사용되지 않았다. APCodec은 해결 전 14.7%~41.2% 활용률을 기록했다. 반면 Google MAGVIT-2는 LFQ(Lookup-Free Quantization)로 K=218=262,144 어휘를 거의 100% 활용하며 FID 1.78을 달성했고, 이는 기존 확산 모델(2.12)을 능가했다. lucidrains(Phil Wang)의 **vector-quantize-pytorch**는 이 모든 VQ 변형을 단일 라이브러리에서 제공하며 월 160만 다운로드를 기록한다.

> DataClinic의 L3 진단이 발견하는 "저밀도 갭(Data Void)"은 VQ 코드북의 Dead Code와 정확히 같은 현상의 다른 이름이다. PebbloSim의 Vector-to-Param 기술(US 12,481,720)은 이 빈 코드워드 좌표를 시뮬레이션 파라미터로 역변환해 처방까지 완성한다. 이 보고서는 VQ-Tokenizer의 기술 원리, 코드북 붕괴 메커니즘, 산업 적용 지도, 페블러스 제품과의 접점을 심층 해설한다. 4월 27일 ICLR 2026에서 발표될 DiVeQ의 예고도 포함한다.

## 토크나이저의 감각기관 — 왜 이산화가 필요한가

1992년 JPEG는 픽셀을 8×8 블록으로 나누고, 각 블록을 이산 코사인 변환(DCT) 계수로 압축했다. "무한한 픽셀 조합" 대신 "자주 나오는 주파수 패턴"만 저장한 것이다. VQ-Tokenizer는 이 논리의 현대적 계승이다. 연속적인 고차원 임베딩 대신, 학습으로 찾아낸 K개의 의미 있는 패턴만 코드워드로 저장한다.

### 연속 임베딩의 한계

ResNet이나 ViT가 출력하는 임베딩 벡터는 실수(real number)로 가득한 연속 공간에 존재한다. 이 공간은 이론상 무한하다. 문제는 세 가지다. 첫째, 무한한 표현 공간에서 일반화(generalization)는 어렵다 — 비슷해 보이는 두 이미지가 임베딩 공간에서 전혀 다른 위치에 있을 수 있다. 둘째, GPT 같은 자동회귀(autoregressive) 모델은 "다음 토큰 예측"을 하도록 설계됐는데, 연속 벡터는 예측 대상으로 적합하지 않다. 셋째, 저장 및 전송 효율이 낮다 — 실수 벡터는 정수 인덱스보다 훨씬 많은 비트를 요구한다.

### 이산화의 세 가지 장점

- •**학습된 어휘(vocabulary):** K개 코드워드는 학습 데이터에서 자주 등장하는 의미 패턴의 사전이다. 인간이 "개", "고양이"처럼 범주를 만들듯, AI도 시각·음향 세계를 유한한 어휘로 범주화한다.
- •**자동회귀 모델과의 호환성:** 이미지 코드워드 인덱스는 텍스트 토큰처럼 취급할 수 있다. Chameleon, LlamaGen이 이미지와 텍스트를 단일 Transformer로 처리하는 비결이 여기 있다.
- •**압축 효율:** 512차원 실수 벡터 대신 정수 인덱스 하나만 저장한다. DAC(Descript Audio Codec)는 이 원리로 44.1kHz 오디오를 90배 압축한다.

이 이산화의 수학적 핵심은 단 하나의 연산으로 표현된다. 인코더 출력 $z$를 코드북에서 가장 가까운 코드워드 $e_k$로 대체하는 것이다:

$$z_q = \arg\min_k \|z - e_k\|_2$$

식 1. VQ 코드북 룩업: 연속 임베딩 z를 가장 가까운 코드워드로 대체

이 간단한 수식이 이미지(VQGAN), 오디오(EnCodec, DAC), 비디오(MAGVIT-2), 멀티모달(Chameleon)을 관통하는 공통 언어가 됐다. VQ-Tokenizer는 AI 멀티모달의 감각기관이다.

## VQ-VAE 해부 — 3단계 아키텍처와 STE

VQ-VAE(van den Oord et al., NeurIPS 2017)는 VQ-Tokenizer의 원형이다. 구조는 단순해 보이지만, "미분 불가능한 argmin"이라는 치명적 장벽을 가지고 있다. STE(Straight-Through Estimator)는 이 장벽을 우회하는 영리한 해결책이다.

### 3단계 아키텍처

- ①**인코더 $z_e(x)$:** 입력 이미지/오디오/텍스트를 연속 임베딩 벡터로 변환한다. CNN, Transformer 등 어떤 아키텍처도 사용 가능하다.
- ②**코드북 룩업 (미분 불가능!):** $z_q = \arg\min_k \|z_e - e_k\|_2$. 가장 가까운 코드워드를 선택한다. argmin은 계단 함수로, 역전파 시 기울기가 0이 된다. 인코더가 학습되지 않는 치명적 문제다.
- ③**디코더 $D(z_q)$:** 이산 코드워드 $z_q$로부터 원본을 재구성한다. 재구성 품질이 학습 목표다.

### Straight-Through Estimator(STE): 속임수이지만 잘 작동한다

STE의 핵심은 단순하다: 순전파(forward pass)에서는 $z_q$(이산 코드워드)를 쓰고, 역전파(backward pass)에서는 $z_q$의 기울기를 그대로 $z_e$로 통과시킨다. van den Oord는 논문에서 이를 "속임수이지만 잘 작동한다"고 솔직히 표현했다.

`# Straight-Through Estimator (PyTorch)
z_q = z_e + (z_q - z_e).detach()
# 순전파: z_q 값 사용 / 역전파: z_e로 기울기 통과 (detach로 z_q → z_e 경로 차단)`

### 손실 함수 3항

VQ-VAE는 세 가지 손실의 합을 최소화한다:

$$L = \underbrace{\|x - D(z_q)\|^2}_{\text{재구성 손실}} + \underbrace{\|\text{sg}[z_e(x)] - e\|^2}_{\text{codebook 손실}} + \underbrace{\beta \|z_e(x) - \text{sg}[e]\|^2}_{\text{commitment 손실}\ (\beta=0.25)}$$

식 2. VQ-VAE 손실 함수. sg[·]는 stop-gradient(역전파 차단) 연산자

**commitment loss**($\beta=0.25$)는 인코더 출력이 코드워드에서 너무 멀어지지 않도록 한다. 실제로는 codebook loss 대신 EMA(지수이동평균) 업데이트를 써서 코드워드 위치를 k-평균 방식으로 이동시키는 것이 더 안정적이다. EnCodec, DAC 등 현대 구현은 대부분 EMA를 채택한다.

### lucidrains 3줄 시작

`# pip install vector-quantize-pytorch
from vector_quantize_pytorch import VectorQuantize

vq = VectorQuantize(dim=512, codebook_size=1024, decay=0.8)
quantized, indices, commit_loss = vq(x)  # x: (batch, seq, dim)`

VQ-VAE-2(Razavi et al., NeurIPS 2019)는 계층적 코드북으로 이를 확장했다. Top 코드북(32×32)이 전역 구조를, Bottom 코드북(64×64)이 지역 세부를 담당하여 256×256 고해상도 이미지를 생성한다. 이 계층적 접근은 현재 대부분의 VQ 기반 이미지 생성 모델의 표준이 됐다.

## 코드북 붕괴 — AI가 보지 못하는 90%

나이브 VQ-VAE 학습에서 K=1,024개 코드북 중 실제 사용되는 코드워드는 10~30%에 불과하다. 나머지는 "죽은 코드(Dead Code)"가 된다. **APCodec의 실제 프로덕션 사례**: 해결 전 코드북 활용률 14.7%~41.2%. **VQGAN 실험**: 8,912개 코드북 중 66%가 전혀 사용되지 않음(arXiv:2602.18896).

10~30%나이브 VQ-VAE  
평균 활용률

66%VQGAN 실험  
미사용 코드북 비율

100%SF-DiVeQ  
목표 활용률

### 붕괴 메커니즘: 마태 효과

코드북 붕괴는 마태 효과(Matthew Effect)로 작동한다. "가진 자는 더 갖게 된다." 초기에 우연히 많이 선택된 코드워드는 더 많은 학습 신호를 받아 더 좋은 위치로 이동하고, 결과적으로 더 자주 선택된다. 반면 초기에 선택받지 못한 코드워드는 점점 멀어져 Dead Code가 된다. 이는 양의 피드백 루프(positive feedback loop)다.

### 측정 지표

두 가지 지표로 코드북 건강을 측정한다:

- •**코드북 활용률(%):** $|\{k : n_k > 0\}| / K$. 적어도 한 번 이상 사용된 코드워드의 비율. <50%이면 경보 수준.
- •**코드북 퍼플렉시티(Perplexity):** $\exp(-\sum_k p_k \log p_k)$. 최댓값은 K(완벽 균일 분포). Perplexity/K < 0.3이면 심각한 붕괴.

$$\text{Perplexity} = \exp\!\left(-\sum_{k=1}^{K} p_k \log p_k\right)$$

식 3. 코드북 퍼플렉시티. $p_k$는 코드워드 $k$의 사용 빈도 비율

### 해결 시도의 역사

2017**EMA 업데이트** — 코드워드를 k-평균 이동평균으로 갱신. 붕괴를 지연시킬 뿐 근본 해결 아님

2019~**Random Restart** — Dead Code를 랜덤으로 재초기화. OpenAI Jukebox, SoundStream, EnCodec 채택. 효과적이나 하이퍼파라미터 튜닝 필요

2023**FSQ (Finite Scalar Quantization)** — 코드북 테이블 자체를 제거. 각 차원을 고정된 이산값으로 반올림. 100% 활용률 보장. VQ 대비 FID 차이 ~0.5% (4.534 vs 4.509)

2025**DiVeQ / SF-DiVeQ (ICLR 2026)** — 방향 벡터 재매개변수화로 진짜 기울기 추정. SF-DiVeQ: 100% 코드북 활용률 달성 (2편에서 상세 해설)

> [!callout]
> 코드북 붕괴는 단순한 기술적 버그가 아니다. **이것은 "학습 데이터가 세상의 일부밖에 보지 못했다"는 신호다.** 퍼플렉시티가 낮다는 것은 DataClinic이 발견하는 "저밀도 갭(Data Void)"과 정확히 같은 현상이다. 코드북 진단은 데이터 다양성 진단의 또 다른 이름이다.

## 산업 적용 지도 — 언어·음성·시각·물리

VQ-Tokenizer는 특정 도메인의 틈새 기술이 아니다. 2017년 VQ-VAE 논문 이후 이미지, 오디오, 비디오, 멀티모달 AI 전 영역에 침투했다. 아래는 주요 산업 모델들의 VQ 적용 지도다.

| 도메인 | 모델 | 코드북 크기 | 활용률 | 핵심 특징 |
| --- | --- | --- | --- | --- |
| 이미지 | VQGAN (2021) | 1K~16K | ~34% | GAN loss 추가, Stable Diffusion 전신 |
| 이미지 | LlamaGen (2024) | 16,384 | 97% | LLM 패러다임, FID 2.18 |
| 비디오 | MAGVIT-2 (2023) | 218=262,144 (LFQ) | ~100% | 확산 모델 능가 FID 1.78 |
| 오디오 | EnCodec (2022) | 1,024 × 8 (RVQ) | 보통 | 24kHz, 최저 1.5kbps |
| 오디오 | DAC (2023) | 1,024 × 9 (RVQ) | 개선됨 | 44.1kHz, 8kbps, 90배 압축 |
| 멀티모달 | Chameleon (2024) | VQ-VAE 기반 | — | 이미지+텍스트 단일 Transformer |

********************************

### 도메인별 핵심 인사이트

**시각:** VQGAN은 GAN 손실을 추가해 코드워드의 시각적 품질을 높였고, Stable Diffusion의 잠재 공간 압축기로 쓰였다. MAGVIT-2는 학습 가능한 코드북 테이블 없이 $\text{sign}(z_i)$로 각 차원을 이진화하는 LFQ를 도입해 262,144개 어휘를 거의 완전히 활용한다.

**오디오:** EnCodec과 DAC는 단일 VQ 대신 RVQ(Residual VQ)를 쓴다. 첫 번째 VQ로 양자화한 후 남은 잔차를 두 번째 VQ로, 그 잔차를 세 번째 VQ로 계속 양자화한다. DAC의 9개 코드북 체계는 44.1kHz 스튜디오 품질 오디오를 8kbps, 즉 90배 압축으로 전달한다.

**멀티모달:** Chameleon(Meta 2024)은 이미지 VQ 토큰과 BPE 텍스트 토큰을 동일한 시퀀스로 취급한다. 이미지 패치는 VQ로 코드워드 인덱스가 되고, 텍스트는 BPE 토큰 인덱스가 된다. 단일 Transformer가 이 혼합 시퀀스로 다음 토큰을 예측한다.

**자율주행/물리:** LiDAR 포인트 클라우드와 로봇 행동 시퀀스에도 VQ가 적용된다. 3D 공간 패턴을 이산 코드워드로 변환하면 자동회귀 모델이 "다음 LiDAR 패턴"이나 "다음 행동"을 예측할 수 있다. PebbloSim의 LiDAR 합성 모듈이 이 원리를 활용한다.

## lucidrains 비결 — 왜 1인의 코드가 월 160만 다운로드를 낳는가

**월 1,603,301회 다운로드. 유지보수자는 단 1명.** Phil Wang(GitHub: lucidrains)이 만든 `vector-quantize-pytorch`는 AI 연구 생태계의 핵심 인프라가 됐다. vllm(77,267 GitHub Stars, AI 추론 프레임워크)이 이 라이브러리에 의존한다. 1,145개 GitHub 저장소, 58개 PyPI 패키지가 이 단일 라이브러리를 기반으로 한다.

### Phil Wang은 누구인가

ThisPersonDoesNotExist.com(StyleGAN 기반 가상 인물 생성기)을 만든 개발자다. Stability.ai, a16z, Hugging Face의 후원을 받는다. GitHub 팔로워 59,100명, 저장소 386개 — 대부분이 논문 구현이다. 그의 철학은 "논문을 읽을 수 있는 코드로 만든다"다. 추상화와 최적화보다 이해 가능성을 우선한다.

### 단순한 API가 생태계를 만든다

`# 기본 VQ (EMA 업데이트 포함)
from vector_quantize_pytorch import VectorQuantize, ResidualVQ, LFQ, FSQ

vq  = VectorQuantize(dim=512, codebook_size=1024, decay=0.8)
rvq = ResidualVQ(dim=512, num_quantizers=8, codebook_size=1024)
lfq = LFQ(codebook_size=2**18)        # MAGVIT-2 방식
fsq = FSQ(levels=[8, 6, 5, 5, 5])    # 100% 활용률 보장`

### 지원 변형 전체 목록

v1.28.2(2026년 4월 17일 기준) 기준으로 다음 VQ 변형을 지원한다: VectorQuantize(EMA), ResidualVQ, GroupedResidualVQ, RandomProjectionQuantizer, SimVQ/ResidualSimVQ, FSQ/ResidualFSQ, LFQ(MAGVIT-2), LatentQuantize, **directional_reparam(DiVeQ)**. 2020년 창설 이후 주당 0.5 릴리스 속도를 유지한다.

### 생태계 효과와 단일 유지보수자 리스크

audiolm-pytorch, soundstorm-pytorch, voicebox-pytorch, magvit2-pytorch 등 대형 AI 구현들이 이 라이브러리를 핵심 의존성으로 쓴다. "연구 논문이 이 라이브러리를 기준선으로 사용한다" — 역방향 유효성 검증이 이뤄지는 셈이다. 단, 버스 팩터(bus factor)=1이라는 구조적 리스크는 프로덕션 도입 전 고려해야 한다. MIT 라이선스로 상업적 사용은 무제한 허용된다.

> [!callout]
> 경쟁 라이브러리를 비교하면 lucidrains의 강점이 더 분명해진다. taming-transformers(6,300★)는 pip 패키지가 없고, encodec(3,800★)은 오디오 전용이며, descript-audio-codec(1,600★) 역시 오디오에 국한된다. **멀티모달 VQ 변형을 하나의 pip 패키지로 제공하는 곳은 vector-quantize-pytorch가 유일하다.**

## 코드북 품질 = 데이터 품질 — 거울 관계

코드북은 학습 데이터 분포의 압축된 표현이다. 코드워드의 위치는 학습 데이터가 어떤 패턴으로 분포하는지를 직접 반영한다. 따라서 코드북 퍼플렉시티는 학습 데이터 다양성의 가장 정직한 거울이다.

### 인과 연결: 왜 코드북이 데이터를 반영하는가

- •코드워드는 학습 데이터를 보면서 k-평균 방식으로 위치를 결정한다. 데이터가 편향(특정 패턴에 집중)되면 코드워드도 그 영역에 몰린다.
- •퍼플렉시티 낮음 → 코드북이 일부 패턴만 표현 → 데이터가 편향·중복. "AI가 세상의 10%만 봤다"는 수치적 증명이다.
- •Dead Code = 데이터에 특정 패턴 자체가 없다는 뜻. VQGAN-LC가 K=100,000으로 실험했을 때 99% 활용률을 달성하고 생성 다양성(IS, FID)이 유의미하게 향상된 것은 이 인과를 증명한다.

### DataClinic 개념과 VQ 개념의 거울 관계

| DataClinic 개념 | VQ 개념 | 의미 |
| --- | --- | --- |
| 과밀집 클러스터 | High-usage codewords | 데이터 편향 / 중복 |
| 저밀도 갭 (Data Void) | Dead codes | 데이터에 미커버된 패턴 |
| 밀도 분포 퍼짐 | 높은 퍼플렉시티 | 데이터 다양성 ↑ |
| 특징 공간 커버리지 | Codebook utilization% | 전체 패턴 대표성 |

DataClinic L2(Wolfram Net V2, 1,280차원)는 VQ 인코더 출력과 구조적으로 동일한 연속 임베딩이다. L2 밀도 분포 시각화는 코드워드 분포의 연속 근사다. DataClinic L3(도메인 특화, 41~177차원)는 소규모 VQ와 기능적으로 동일하다. Birds 525 데이터셋 기준 81차원 임베딩은 81개 대표 시각 패턴을 의미한다.

> [!callout]
> **코드북 진단 = 데이터 품질 조기 경보 시스템.** L3 진단에 코드북 퍼플렉시티를 추가하면 ISO/IEC 5259-2의 다양성 품질 지표(QM-Div)를 자동으로 보고할 수 있다. 모델 학습 전에 데이터 편향을 수치로 포착한다.

## 페블러스 관점 — DataClinic과 PebbloSim의 접점

DataClinic은 코드북 건강을 진단하고, PebbloSim은 빈 코드워드를 채우는 처방을 실행한다. 두 제품은 VQ-Tokenizer라는 공통 기술 위에서 진단→처방 루프를 완성한다.

### DataClinic 각도

DataClinic L2(1,280차원 연속 임베딩)의 밀도 분포 시각화는 코드워드 분포의 연속 근사다. "어느 패턴이 과밀집인가"와 "어느 영역이 비어 있는가"를 동시에 보여준다. L3(41~177차원 도메인 특화)는 소규모 VQ와 기능적으로 동일하다. Birds 525: 81차원 → 81개 대표 시각 패턴. 코드북 퍼플렉시티를 L3 지표에 추가하면 ISO 5259-2 Div-ML 지표를 직접 보고할 수 있다.

### PebbloSim과 Vector-to-Param 특허

PebbloSim의 Vector-to-Param(US 12,481,720)은 이 루프의 핵심이다. Dead Code 좌표(빈 코드워드의 위치)를 조명각도, 날씨, 카메라 위치 등 시뮬레이션 파라미터로 역변환한다. "어떤 시각 패턴이 없는지"를 알면, "어떤 시뮬레이션 조건에서 그 패턴을 생성할 수 있는지"를 계산할 수 있다.

| 제품 | VQ 역할 | 진단 지표 | 비즈니스 가치 |
| --- | --- | --- | --- |
| DataClinic L2 | 임베딩 공간 분포 진단 | 밀도 분포, 클러스터 커버리지 | 편향·중복 데이터 탐지 |
| DataClinic L3 | 도메인 코드북 퍼플렉시티 진단 | Perplexity, utilization% | ISO 5259 QM-Div 정량화 |
| PebbloSim 카메라 | 픽셀→토큰 다양성 보장 | 코드북 활용률 전/후 비교 | 합성 데이터 현실성·다양성 ↑ |
| PebbloSim LiDAR | 포인트 클라우드 패턴 압축(RVQ) | 재구성 오차 (Sim-to-Real) | 3D 시나리오 커버리지 증명 |
| PebbloSim 오디오 | 도메인 음향 이산화(RVQ 코덱) | 음향 코드북 퍼플렉시티 | 결함음 탐지 범위 정량화 |
| AI-Ready Data | VQ 기반 데이터 커버리지 인증 | Perplexity + ISO QM 리포트 | 규제 준수 증빙, 고객 신뢰 |
| Data Greenhouse | 진단→처방→생성 루프 척도 | Before/After 퍼플렉시티 비교 | Data Flywheel ROI 수치화 |

****************************

> [!callout]
> **Data Flywheel 루프:** 진단(DataClinic L3 퍼플렉시티 측정) → 처방(PebbloSim 정밀 합성) → 재진단(퍼플렉시티 향상 확인). 코드북 활용률이 30%에서 85%로 개선됐다면, AI 학습 데이터가 보는 세상의 패턴이 2.8배 늘어났다는 뜻이다. 이것이 코드북 커버리지 자동 최대화 루프다.

## DiVeQ 예고 — 미분 가능한 VQ의 다음 단계

코드북 붕괴의 근본 원인은 argmin의 비미분성이다. EMA, Random Restart, FSQ는 모두 이 근본 원인을 우회하거나 회피한다. DiVeQ(arXiv:2509.26469, ICLR 2026)는 설계 수준에서 이 문제를 해결하는 접근이다.

### STE의 한계: 속임수의 대가

STE는 역전파 시 $z_q$의 기울기를 $z_e$로 그대로 통과시킨다. 이는 수학적으로 틀린 기울기다. argmin의 실제 기울기는 0이지만, STE는 1로 근사한다. 이 근사가 학습 초기의 코드북 붕괴를 유발하는 씨앗이다.

### DiVeQ 핵심: 방향 벡터 재매개변수화

DiVeQ는 오차 벡터의 **방향**과 **크기**를 분리해 미분 가능한 경로를 만든다:

$$z_q = z + \|c_{i^*} - z\|_2 \cdot \text{sg}\!\left[\frac{v_d}{\|v_d\|_2}\right]$$

식 4. DiVeQ 재매개변수화. $v_d = v + (c_{i^*} - z)$, $v \sim \mathcal{N}(0, \sigma^2 I)$

**크기**($\|c_{i^*} - z\|_2$)는 미분 가능하다. **방향**($v_d / \|v_d\|_2$)은 stop-gradient로 차단하지만, 확률적 노이즈 $v$를 더해 방향의 불연속성을 완화한다. SF-DiVeQ(Segment-Free DiVeQ)는 여기서 더 나아가 인접 코드워드를 연결하는 선분 위에서 값을 할당, 100% 코드북 활용률을 달성한다.

> [!callout]
> **2026년 4월 27일, ICLR 2026.** 이 보고서를 읽는 지금으로부터 8일 후 DiVeQ의 전체 실험 결과와 코드가 공개된다. 2편에서 DiVeQ 수식과 DataClinic·PebbloSim 채택 시나리오를 전면 해설한다.

## 참고 자료

1. van den Oord et al. (2017). _Neural Discrete Representation Learning (VQ-VAE)_. NeurIPS 2017. arXiv:1711.00937
2. Razavi et al. (2019). _Generating Diverse High-Fidelity Images with VQ-VAE-2_. NeurIPS 2019. arXiv:1906.00446
3. Esser et al. (2021). _Taming Transformers for High-Resolution Image Synthesis (VQGAN)_. CVPR 2021. arXiv:2012.09841
4. Défossez et al. (2022). _High Fidelity Neural Audio Compression (EnCodec)_. ICLR 2023. arXiv:2210.13438
5. Kumar et al. (2023). _High-Fidelity Audio Compression with Improved RVQGAN (DAC)_. NeurIPS 2023. arXiv:2306.06546
6. Mentzer et al. (2023). _Finite Scalar Quantization: VQ-VAE Made Simple (FSQ)_. ICLR 2024. arXiv:2309.15505
7. Yu et al. (2023). _Language Model Beats Diffusion — Tokenizer is Key to Visual Generation (MAGVIT-2)_. ICLR 2024. arXiv:2310.05737
8. Vali et al. (2025). _DiVeQ: Differentiable Vector Quantization_. ICLR 2026 (4월 27일 발표 예정). arXiv:2509.26469
9. Sun et al. (2024). _Autoregressive Model Beats Diffusion: Llama for Scalable Image Generation (LlamaGen)_. arXiv:2406.06525
10. Meta AI (2024). _Chameleon: Mixed-Modal Early-Fusion Foundation Models_. arXiv:2405.09818
11. Zhu et al. (2024). _VQGAN-LC: Scaling Codebooks with Large Cluster Initialization_. NeurIPS 2024. arXiv:2406.11837
12. Zhang et al. (2024). _ERVQ: Ensemble Residual Vector Quantization for Neural Audio Codecs (APCodec)_. arXiv:2410.12359
13. Balle et al. (2026). _Beyond Stationarity: Spectral Analysis of Codebook Collapse_. arXiv:2602.18896
14. Zhu et al. (2026). _Early Quantization Shrinks Codebook_. arXiv:2603.17052
15. ISO/IEC 5259-1:2024, ISO/IEC 5259-2:2024. _Artificial intelligence — Data quality for analytics and ML_. International Organization for Standardization.
16. Wang, Phil (lucidrains). _vector-quantize-pytorch v1.28.2_. GitHub. MIT License. github.com/lucidrains/vector-quantize-pytorch
17. Pebblous (2026). _US Patent 12,481,720 — Vector-to-Param Simulation Parameterization_. USPTO.
