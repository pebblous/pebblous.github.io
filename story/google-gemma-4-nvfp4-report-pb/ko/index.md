---
title: Gemma 4 31B, 24GB GPU에서 돌아간다
subtitle: NVIDIA NVFP4 양자화 심층 분석
date: 2026-04-05
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# Gemma 4 31B, 24GB GPU에서 돌아간다

_NVIDIA NVFP4 양자화 심층 분석_

> [!callout]
## Executive Summary

> Google DeepMind가 Apache 2.0 라이선스로 Gemma 4 패밀리를 공개한 지 사흘 뒤,
>                             NVIDIA가 31B Dense 모델의 NVFP4 양자화 버전을 Hugging Face에 올렸다.
>                             이번이 의미 있는 이유는 단순히 "더 작아졌다"가 아니다.
>                             **GPQA Diamond 기준 정확도 손실 0.25%, 256K 컨텍스트 유지,
>                             24GB GPU에서 일상 추론 가능** — 이 세 가지가 동시에 성립한다.

> [Gemma 4 1편: Apache 2.0으로 열린 소버린 AI의 문](https://blog.pebblous.ai/story/google-gemma-4-report-pb/ko/)에서
>                             라이선스와 아키텍처를 다뤘다면, 이번 편은 그 모델을 실제로 어떻게 구동하는지에 대한 이야기다.

## NVFP4가 뭔가

Gemma 4 31B NVFP4를 이해하려면 먼저 NVFP4 형식 자체를 알아야 한다.

### 4-bit floating point의 구조

NVFP4는 비트 구성이 단순하다: **1 부호 비트 + 2 지수 비트 + 1 가수 비트**.
                        표현 범위는 약 -6에서 6까지.

S

E E

M

= 4 bits total (1 sign + 2 exp + 1 mantissa)

이 좁은 범위를 어떻게 대형 언어 모델 가중치에 적용하면서 정확도를 유지할까?
                        답은 **듀얼 레벨 블록 스케일링**에 있다.

<!-- stat-card -->
**1단계: 미세 블록 스케일링** — 16개 값마다 FP8(E4M3) 스케일 팩터 하나를 공유한다.
                                    경쟁 포맷인 MXFP4가 32개 값 단위로 묶는 것과 비교해 **2배 더 세밀**하다. — 2단계: 전체 텐서 스케일링 — FP8 스케일 블록 위에 FP32 스칼라를 한 번 더 씌워,
                                    미세 블록들이 사실상 2의 제곱수가 아닌 값으로도 표현되도록 한다.

결과적으로 실효 비트 수는 **4.5 bits/value**
                        (4bit 가중치 + FP8 스케일 오버헤드). 이게 FP16 대비 **3.5배 메모리 절약**,
                        FP8 대비 **1.8배 절약**이라는 수치로 이어진다.

NVIDIA Blackwell의 5세대 Tensor Core는 이 미세 블록 그룹핑과 동적 스케일링, 4-bit 행렬 연산을
                        하드웨어 수준에서 자동 처리한다. H100(Hopper)에서도 테스트됐지만,
                        최대 성능은 Blackwell 아키텍처에서 나온다.

## 정확도 손실: 실측값

이론보다 숫자가 말해준다. NVIDIA가 공개한 벤치마크다.

| 벤치마크 | BF16 원본 | NVFP4 | 손실 |
| --- | --- | --- | --- |
| GPQA Diamond | 75.71% | 75.46% | -0.25% |
| AIME 2025 | 66.25% | 65.94% | -0.31% |
| MMLU Pro | 85.25% | 84.94% | -0.31% |
| LiveCodeBench (pass@1) | 70.90% | 70.63% | -0.27% |
| Scicode subtask | 33.61% | 33.18% | -0.43% |
| Terminal-Bench Hard | 27.08% | 27.08% | 0% |

모든 벤치마크에서 절대값 기준 **0.5% 미만 손실**.
                        인간 평가자 간 재현성 오차 범위 안에 있는 수준이다.
                        "4배 작아지면서 사실상 같은 성능"이라는 주장이 과장이 아니다.

양자화 방법은 **PTQ(Post-Training Quantization)** —
                        재학습 없이 가중치와 활성화를 NVFP4로 변환했다.
                        캘리브레이션 데이터셋은 CNN DailyMail 뉴스 기사 30만 건.
                        NVIDIA Model Optimizer v0.42.0 사용.

## 1편 대비 달라진 것

1편에서 다뤘던 Gemma 4 원본 스펙과 비교하면 주목할 세 가지 변화가 있다.

### ① 컨텍스트 윈도우: 128K → 256K

<!-- stat-card -->
**1편에서 128K 컨텍스트로 소개한 31B가 NVFP4 버전 HF 모델 카드에서는
                                **256K 토큰**을 명시한다.
                                Gemma 4 아키텍처 업데이트와 맞물린 것으로,
                                소비자 GPU에서 단일 긴 문서를 처리하는 실용성이 크게 높아졌다.**

### ② 멀티모달: 이미지 → 이미지 + 비디오

<!-- stat-card -->
**이미지만 처리하던 것에서
                                **비디오(MP4/WebM, 최대 60초, 1fps 샘플링)**까지 지원한다.
                                비주얼 토큰 버짓은 70, 140, 280, 560, 1120 중 선택 가능하다.**

### ③ 라이선스 주의사항

<!-- stat-card -->
**1편의 핵심 주제였던 Apache 2.0은 Google의 원본 모델에 해당한다.
                                이번 NVFP4 양자화 버전은
                                **NVIDIA Open Model License Agreement + Apache 2.0**
                                혼합 라이선스가 적용된다. 상업 배포는 가능하지만, NVIDIA 약관을 별도로 검토해야 한다.**

## VRAM 현실

LinkedIn 포스트에서 자주 언급되는 수치들을 실제 사용 시나리오별로 정리한다.

| 사용 시나리오 | 필요 VRAM | 해당 GPU |
| --- | --- | --- |
| 가중치만 로드 | ~16–21 GB | RTX 4090 (24GB) 가능 |
| 일상 추론 (짧은 컨텍스트) | 24 GB | RTX 4090, RTX 5090 |
| 256K 풀 컨텍스트 | ~32 GB | RTX 5090 (32GB) |
| 데이터센터 배포 | tensor-parallel 8 | H100 × 8 |

<!-- stat-card -->
****주의:**
                            HF 공식 모델 카드의 예시 명령어는 `--tensor-parallel-size 8`을 권장한다.
                            이는 데이터센터 운용 기준이고, 소비자 GPU 싱글 카드 추론은 커뮤니티 검증 수치 기반이다.
                            RTX 4090 단일 카드로 긴 컨텍스트 처리 시 OOM이 발생할 수 있다.**

## 구동 방법

vLLM v0.17.2rc1 이상에서 지원한다. 싱글 GPU 환경 기준:

<!-- stat-card -->
**`pip install vllm>=0.17.2rc1

vllm serve nvidia/Gemma-4-31B-IT-NVFP4 \
  --quantization modelopt \
  --tensor-parallel-size 1`**

멀티모달 입력 처리 시 `--limit-mm-per-prompt` 옵션으로
                        비주얼 토큰 버짓을 조정할 수 있다.
                        비디오 처리는 최대 60초 / 1fps 기준이며, 긴 영상은 직접 프레임 추출 후 이미지 배치로 전달하는 것이 권장된다.

## 이것이 의미하는 것

Gemma 4 NVFP4는 "양자화된 오픈 모델"이라는 카테고리에서 몇 가지 기준점을 세웠다.

<!-- stat-card -->
**정확도 손실과 메모리 절약의 트레이드오프가 대폭 개선됐다** — 이전 INT4 방식들은 몇 퍼센트 손실이 일반적이었다. 0.25% 손실은 설계 결정의 차이다 —
                                16값 단위 미세 블록 스케일링이 실제로 작동한다는 뜻이다.

<!-- stat-card -->
**프론티어급 추론이 소비자 하드웨어 범주로 내려왔다** — GPQA Diamond 75%는 GPT-4 수준의 과학적 추론 능력이다.
                                RTX 4090 한 장으로 이걸 로컬에서 돌릴 수 있다는 건,
                                1년 전 기준으로는 상상하기 어려운 일이었다.

<!-- stat-card -->
**소버린 AI 인프라의 하드웨어 요건이 현실적이 됐다** — 클라우드 API 없이, 데이터가 외부로 나가지 않는 환경에서, 프론티어 수준의 AI를 구동하는 것.
                                이것이 엔터프라이즈 소버린 AI 논의의 실질적 전제 조건이다.

> [!callout]
> 1편에서 라이선스가 "문을 열었다"고 했다면, NVFP4가 "그 문 안으로 실제로 들어가는" 방법이다.

<!-- stat-card -->
**🔍 소버린 AI의 다음 병목: 데이터 품질** — 하드웨어 문이 열렸다면, 다음 병목은 무엇을 돌릴 것인가다.
                            Gemma 4 31B를 온프레미스에서 구동하는 것 자체는 이제 가능해졌지만,
                            모델에 공급하는 데이터의 품질이 결과를 결정한다.
                            파인튜닝, RAG 인덱싱, 에이전트 컨텍스트 — 어느 방식이든
                            [DataClinic](https://dataclinic.ai)의
                            진단 레이어가 데이터 분포 이상, 중복, 라벨 오류를 사전에 걸러낼 때
                            온프레미스 AI의 실질 성능이 나온다.

## 참고 자료

- [NVIDIA Gemma-4-31B-IT-NVFP4 (Hugging Face)](https://huggingface.co/nvidia/Gemma-4-31B-IT-NVFP4)
- [Bringing AI Closer to the Edge and On-Device with Gemma 4 | NVIDIA Technical Blog](https://developer.nvidia.com/blog/bringing-ai-closer-to-the-edge-and-on-device-with-gemma-4/)
- [Introducing NVFP4 for Efficient and Accurate Low-Precision Inference | NVIDIA Technical Blog](https://developer.nvidia.com/blog/introducing-nvfp4-for-efficient-and-accurate-low-precision-inference/)
- [Gemma 4 1편: Apache 2.0으로 열린 소버린 AI의 문 | 페블러스](https://blog.pebblous.ai/story/google-gemma-4-report-pb/ko/)
