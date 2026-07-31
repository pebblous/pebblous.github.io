---
title: 재현할 수 없는 도구로 하는 과학
subtitle: 오픈AI가 10만 과학자에게 챗GPT를 무료로 열었지만, 모델 가중치와 학습 데이터는 공개하지 않았다
date: 2026-08-01
category: tech
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 재현할 수 없는 도구로 하는 과학

_오픈AI가 10만 과학자에게 챗GPT를 무료로 열었지만, 모델 가중치와 학습 데이터는 공개하지 않았다_

## Executive Summary

> [!callout]
> 오픈AI가 2026년 7월, 전 세계 학계에 챗GPT를 무료로 여는 프로그램을 시작했습니다. 1만 명으로 출발해 2027년까지 10만 명으로 늘리고, 최신 모델과 더 큰 사용량 한도, 확장된 딥리서치를 제공합니다. 과학의 도구가 그만큼 강력해진 셈입니다. 그런데 이 선물에는 눈에 잘 띄지 않는 빈자리가 하나 있습니다. 그 도구로 한 실험을, 나중에 같은 조건으로 다시 돌릴 수 있는가 하는 물음입니다.

> 빠진 것은 모델 가중치와 학습 데이터입니다. API 뒤의 모델은 공지 없이 바뀔 수 있고, 실제로 바뀝니다. 한 추적 연구에서 같은 이름의 GPT-4는 몇 달 사이 소수 판별 정확도가 84%에서 51%로 떨어졌습니다. 버전 번호는 그대로였는데 행동이 달라졌습니다. 실험을 떠받치는 도구가 이렇게 조용히 흔들리면, 결과의 재현 가능성은 그것을 확인할 수단부터 잃습니다.

> 과학의 신뢰는 남이 같은 조건에서 같은 결과를 얻을 수 있다는 데서 나옵니다. 그 조건의 핵심 부품이 열어 볼 수 없는 API라면, 재현성은 폐쇄 모델 뒤에 갇힙니다. 왜 이것이 실험실 밖이 아니라 실험실 안의 문제인지, 데이터와 모델 프로버넌스의 관점에서 함께 따라가 보겠습니다.

### 주요 수치

본문에서 하나씩 풀어 갈 근거를 네 숫자로 먼저 모아 둡니다. 프로그램이 연 규모부터, 같은 이름의 모델이 실제로 달라진 폭, 그 변화가 상용 API에서 얼마나 흔한지, 나아가 AI 연구의 재현성 문제가 이 프로그램 이전부터 얼마나 컸는지까지를 담았습니다.

출처: 본문에 인용된 오픈AI 발표, Chen 외(2023) 드리프트 연구, OECD 보고 (각 절의 링크 참조)

<!-- stat-card -->
**10만 명** — 무료 접근 대상 과학자 — 1만 명으로 시작해 2027년까지 확대

<!-- stat-card -->
**84% → 51%** — 같은 GPT-4의 정확도 — 몇 달 사이 소수 판별 정확도가 이렇게 하락

<!-- stat-card -->
**60%+** — 시간에 따라 바뀐 상용 API — 63개 상용 ML API 종단 분석에서 관측

<!-- stat-card -->
**70%** — 재현 불가능 추정 AI 연구 — 한 추정치가 지목한 비재현 비율

## 오픈AI, 10만 과학자에게 챗GPT를 연다

오픈AI가 2026년 7월 말 발표한 [ChatGPT for Academic Researchers](https://openai.com/index/chatgpt-for-academic-researchers/) 프로그램은 학계를 겨냥한 대규모 지원책입니다. 1만 명으로 시작해 2027년까지 10만 명의 연구자에게 챗GPT와 코덱스, 최신 모델을 무료로 열고, 더 높은 사용량 한도와 더 큰 컨텍스트, 확장된 딥리서치를 제공합니다. 승인된 참가자는 동료 몇 명을 초대할 수 있고, 12개월간 무료 워크스페이스가 따라옵니다.

발표에는 성능 지표도 함께 붙었습니다. 최신 모델이 고난도 수학·유전체 벤치마크에서 이전 세대를 크게 앞선다는 수치입니다. 다만 이 숫자들은 모델을 만든 쪽이 스스로 측정해 발표한 값이고, 각 연구실 고유의 데이터와 파이프라인에서 다시 검증된 것은 아닙니다. [보도](https://siliconangle.com/2026/07/29/openai-opens-new-chatgpt-academic-researchers-program-100000-scientists/)도 대체로 규모와 스펙에 초점을 맞췄습니다. 얼마나 많이, 얼마나 좋은 도구를 주는가에 관한 이야기였습니다.

![오픈AI 샌프란시스코 본사 건물 — 챗GPT 학술 연구자 프로그램을 발표한 곳](./image/img-01-openai-hq.jpg)
*▲ 오픈AI의 샌프란시스코 본사. 이곳에서 10만 과학자 대상 무료 접근 프로그램이 발표됐다 | Source: [Wikimedia Commons (Coolcaesar, CC BY 4.0)](https://commons.wikimedia.org/wiki/File:1515_Third_Street.jpg)*

## 열린 접근, 닫힌 내부

무료로 열린 것은 '접근'이지 '내부'가 아닙니다. 모델 가중치와 학습 데이터는 여전히 공개되지 않습니다. 이 프로그램을 다룬 한 [기사](https://www.techtimes.com/articles/322124/20260729/openai-launches-free-ai-access-scientists-apply-now-model-weights-still-off-limits.htm)의 제목이 그 간극을 그대로 요약합니다. "모델 가중치는 여전히 접근 불가." 도구는 손에 쥐었지만, 그 도구가 어떻게 만들어졌고 무엇으로 학습됐는지는 볼 수 없습니다.

연구자에게 이것은 단순한 불편이 아닙니다. [보도](https://www.axios.com/2026/07/29/openai-academics-research-chatgpt-sol)는 이 프로그램이 모델 행동을 독립적으로 검사해야 하는 AI 연구자들의 핵심 우려를 해소하지 못한다고 지적했습니다. 무엇을 학습했는지 모르면 결과의 편향을 추적할 수 없고, 내부를 볼 수 없으면 왜 그런 출력이 나왔는지 검증할 수 없습니다. 과학은 '무엇으로 그런 결론에 이르렀는가'를 따지는 일인데, 그 무엇의 상당 부분이 API 뒤에 가려집니다.

![열려 있는 항공기 비행기록장치(블랙박스) — 'DO NOT OPEN' 경고문이 적힌 채 내부가 노출된 모습](./image/img-02-closed-blackbox.jpg)
*▲ 항공 사고 조사에서는 'DO NOT OPEN'이 적힌 블랙박스도 결국 열어 내부를 검증한다. AI 모델의 블랙박스는 그렇지 않다 | Source: [Wikimedia Commons (Public Domain)](https://commons.wikimedia.org/wiki/File:Black_box.aeroplane.JPG)*

> [!callout]
> **핵심**: 무료 접근과 내부 공개는 다른 문제입니다. 도구를 쓸 수 있게 됐다고 해서, 그 도구의 작동을 검증하거나 재현할 수 있게 된 것은 아닙니다.

## 조용히 바뀌는 모델, 사라지는 재현성

폐쇄 모델의 진짜 문제는 API가 살아 있는 표적이라는 데 있습니다. 스탠퍼드 연구진의 [드리프트 추적](https://arxiv.org/abs/2307.09009)은 같은 이름의 GPT-4를 시점을 달리해 같은 과제에 붙였습니다. 결과는 소수 판별 정확도가 84%에서 51%로 떨어졌고, 실행 가능한 코드를 내놓는 비율은 52%에서 10%로 주저앉았습니다. 버전 표시는 바뀌지 않았는데 행동이 바뀐 것입니다. 연구진의 표현으로는 '버전 변경 없는 행동 변화'입니다.

이것이 예외적 사건도 아닙니다. 상용 머신러닝 API 63개를 시간에 걸쳐 관찰한 [종단 데이터셋](https://arxiv.org/abs/2209.08443) 분석에서는 그중 다수, 절반을 훌쩍 넘는 API의 예측이 시간에 따라 실질적으로 달라졌습니다. 어제와 오늘, 같은 입력에 다른 답이 나오는 일이 상용 AI 서비스에서는 드물지 않습니다.

![서버 랙이 늘어선 데이터센터 통로 — API 뒤편에서 모델이 조용히 교체되거나 업데이트되는 인프라를 상징](./image/img-03-datacenter-drift.jpg)
*▲ 모델은 이런 서버 뒤에서 서빙된다. 같은 이름의 API라도 그 뒤의 모델은 공지 없이 바뀔 수 있다 (예시 이미지) | Source: [Wikimedia Commons (CC BY-SA 2.0)](https://commons.wikimedia.org/wiki/File:Virginia_Tech_-_data_center.jpg)*

가장 가까운 사례는 2025년 4월의 GPT-4o입니다. 오픈AI는 변경 로그를 앞세우지 않은 채 모델을 업데이트했고, 며칠 만에 지나치게 아첨하는 응답이 눈에 띄어 결국 그 업데이트를 되돌렸습니다. 사용자가 먼저 알아챈 뒤에야 확인된 변화였습니다. 조용한 업데이트가 관측 가능한 행동 변화를 실제로 일으킨다는 것을, 이 사건이 공개적으로 보여 주었습니다.

> [!callout]
> **왜 치명적인가**: 과학 실험은 '같은 조건이면 같은 결과'라는 전제 위에 섭니다. 그런데 조건의 핵심인 모델이 예고 없이 바뀌면, 지난달의 실험과 이달의 실험은 사실 다른 도구로 한 서로 다른 실험이 됩니다.

## 소프트웨어처럼 고정할 수 없다

전통적인 과학 소프트웨어에는 재현의 안전장치가 있습니다. 패키지 버전을 고정하고, 같은 코드를 다시 돌리면 몇 년 뒤에도 같은 결과가 나옵니다. 방법론에 'scikit-learn 1.3.0을 썼다'고 적으면, 그 한 줄이 실험 환경을 통째로 재현할 좌표가 됩니다. API로 서빙되는 LLM에는 그 좌표가 없습니다. '2026년 7월의 최신 챗GPT를 썼다'는 문장은 다음 업데이트가 지나가는 순간 재현 불가능한 기록이 됩니다. 고정할 수 없는 것을 고정하라고 요구받는 셈입니다.

학계는 이 변화를 이미 논의하고 있습니다. 한 [평론](https://elephantinthelab.org/the-invisible-orchestrator-how-chatgpt-5-redefines-scientific-reproducibility/)은 연구 파이프라인 곳곳에 스며든 대형 모델을 '보이지 않는 지휘자'라고 불렀습니다. 결과에 깊이 관여하지만 그 개입을 추적하거나 고정할 수 없는 존재라는 뜻입니다. 문제의 규모도 작지 않습니다. 한 추정치는 AI 연구의 70%가 재현 불가능하다고 지적했습니다. 폐쇄 API 위에서 하는 자연과학 실험은 이 오래된 재현성 위기 위에 새로운 불투명성을 한 겹 더 얹습니다.

재현성이 나아지고 있다는 신호가 없지는 않습니다. 한 대규모 분석에서 코드와 데이터를 함께 공개하는 논문의 비율은 2014년 11%에서 2024년 64%로 올랐습니다. 다만 이 개선은 '무엇을 썼는지 공개할 수 있는' 연구에서만 성립합니다. 모델의 내부가 API 뒤에 잠겨 애초에 공개할 것이 없다면, 폐쇄 모델 위의 실험은 이 흐름의 바깥에 남습니다. 도구가 좋아질수록 그 도구의 이력만은 오히려 더 흐려집니다.

## 실험실에도 필요한 검증 가능한 데이터

완전한 해법은 아니어도, 재현성을 지키는 최소 조건은 있습니다. 시점이 고정된 모델 스냅샷을 쓰고, 논문 방법론에 정확한 모델 버전과 평가 날짜, 접근 시점을 남기는 것입니다. 무엇으로 실험했는지 증명할 수 있게 기록을 붙여 두는 일입니다. 제도도 이 방향으로 움직입니다. EU AI Act는 범용 AI 모델 제공자에게 학습 데이터 요약 공개를 의무로 지웠고, 그 집행 권한은 2026년 8월부터 활성화됩니다. 오픈 웨이트가 일부 의무를 면제받더라도 학습 데이터 요약만큼은 남긴다는 점이 중요합니다.

![벨기에 브뤼셀 EU 집행위원회 베를레몽 청사 입구 표지판 — EU AI Act를 관장하는 기관](./image/img-04-eu-ai-act.jpg)
*▲ 브뤼셀의 EU 집행위원회 베를레몽 청사. EU AI Act의 학습 데이터 요약 공개 의무를 관장하는 곳이다 | Source: [Wikimedia Commons (Ank Kumar, CC BY-SA 4.0)](https://commons.wikimedia.org/wiki/File:European_Commission_headquarters,_The_Berlaymont_Building,_Brussels,_Belgium_(_Ank_Kumar,_Infosys_Limited_).jpg)*

이 조건들을 한마디로 줄이면 결국 하나의 물음으로 모입니다. 이 결과가 '무엇으로 만들어졌는지' 증명할 수 있는가. 어떤 모델의 어느 버전이, 무엇을 학습해, 언제 어떤 조건에서 그 출력을 냈는가. 이것이 데이터와 모델의 프로버넌스입니다. 재현성은 결국 프로버넌스의 다른 이름입니다. 출처와 이력을 추적할 수 없는 결과는, 아무리 인상적이어도 검증 가능한 지식이 되기 어렵습니다.

10만 과학자에게 열린 최신 모델은 분명 강력한 도구입니다. 다만 그 도구가 열어 볼 수 없고 조용히 바뀔 수 있다면, 그것으로 얻은 결과에는 프로버넌스라는 안전장치가 함께 붙어야 합니다. 과학의 신뢰는 결과의 화려함이 아니라 재현 가능성에서 나오고, 지금 그 재현 가능성은 상당 부분 API 뒤에 붙들려 있습니다.

<!-- stat-card -->
**Editor's Note** — 페블러스는 데이터와 모델이 '무엇이었는지'를 증명 가능하게 만드는 검증 가능한 데이터를 다뤄 왔습니다. 그 문제의식은 산업 현장의 AI뿐 아니라 실험실의 과학에도 그대로 적용됩니다. 결과를 신뢰하려면 그 결과를 만든 데이터와 모델의 출처·이력을 따라갈 수 있어야 한다는 것, 이번 프로그램이 남긴 공백이 다시 확인해 준 지점입니다.

## 참고문헌

### R.1. 업계·보도

- 1.OpenAI. (2026). "[ChatGPT for Academic Researchers](https://openai.com/index/chatgpt-for-academic-researchers/)." OpenAI. — 10만 과학자 대상 무료 접근 프로그램 공식 발표.
- 2.Axios. (2026). "[OpenAI opens ChatGPT to academic researchers](https://www.axios.com/2026/07/29/openai-academics-research-chatgpt-sol)." Axios. — 벤치마크 수치와 함께, 모델 가중치·학습 데이터 비공개가 독립 검사가 필요한 연구자들의 우려를 남긴다는 지적.
- 3.SiliconAngle. (2026). "[OpenAI opens new ChatGPT program for 100,000 scientists](https://siliconangle.com/2026/07/29/openai-opens-new-chatgpt-academic-researchers-program-100000-scientists/)." SiliconAngle. — 프로그램 규모·확대 일정·모델 스펙 정리.
- 4.TechTimes. (2026). "[OpenAI Launches Free AI Access for Scientists — Model Weights Still Off-Limits](https://www.techtimes.com/articles/322124/20260729/openai-launches-free-ai-access-scientists-apply-now-model-weights-still-off-limits.htm)." TechTimes. — 접근은 열되 가중치는 닫힌 구조를 제목으로 요약.

### R.2. 학술·연구

- 5.Chen, L., Zaharia, M., & Zou, J. (2023). "[How Is ChatGPT's Behavior Changing over Time?](https://arxiv.org/abs/2307.09009)." _arXiv:2307.09009_. — 동일 GPT-4의 소수 판별 정확도 84%→51%, 실행 가능 코드 비율 52%→10%. 버전 변경 없는 행동 변화의 실증.
- 6.Chen, L., Zaharia, M., & Zou, J. (2022). "[HAPI: A Large-scale Longitudinal Dataset of Commercial ML API Predictions](https://arxiv.org/abs/2209.08443)." _NeurIPS 2022 / arXiv:2209.08443_. — 상용 ML API 63개 종단 분석. 다수 API의 예측이 시간에 따라 변화.
- 7.Elephant in the Lab. "[The Invisible Orchestrator: How ChatGPT Redefines Scientific Reproducibility](https://elephantinthelab.org/the-invisible-orchestrator-how-chatgpt-5-redefines-scientific-reproducibility/)." — 연구 파이프라인에 스며든 대형 모델을 '보이지 않는 지휘자'로 개념화.
