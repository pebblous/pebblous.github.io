---
title: 가장 
subtitle: K-Fashion 이미지 97만 장 DataClinic 진단기
date: 2026-06-20
category: story
source: index.html
note: HTML-중립 본문 원고(자동 역추출). 출간 후 본문 수정은 이 파일에서.
---

# 가장 

_K-Fashion 이미지 97만 장 DataClinic 진단기_

## Executive Summary

> [!callout]
> 이 글은 **[DataClinic 리포트 #127](https://dataclinic.ai/report/127)**을 바탕으로 작성됐습니다. 진단 대상은 AI Hub의 **K-Fashion 이미지** 데이터셋입니다. 스트리트·모던·로맨틱·페미닌부터 펑크·힙합까지 **24개 스타일**로 라벨링된 **967,806장**의 한국 패션 사진을 DataClinic의 세 단계 렌즈로 들여다봤습니다.

> 데이터셋의 공식 성능표는 우수합니다. AI Hub가 공개한 스타일 분류 벤치마크는 **Recall@3 91.11%**. 숫자만 보면 "잘 되는 데이터"입니다. 그런데 DataClinic으로 분포를 펼쳐 보면 정확도가 가린 세 가지가 드러납니다. 스트리트 한 클래스가 전체의 **46.5%**를 차지하는 극단적 불균형, 한 촬영 세션에서 쏟아진 거의 같은 사진들(near-duplicate), 그리고 사람조차 합의하기 어려운 **스타일 경계의 모호성**입니다.

> 가장 선명한 증거는 클래스 구별 렌즈(L3)가 뽑은 '**가장 전형적인 스트리트**' 1·2위였습니다. 두 이미지를 열어 보니 화이트 스튜디오 배경에 꽃무늬 쉬폰 블라우스와 스키니진을 입은, 누가 봐도 로맨틱한 코디였습니다. 정작 도시 창가에서 찍힌 오버사이즈 그래픽 맨투맨은 '비전형'으로 밀려나 있었습니다. AI가 배운 '스트리트의 전형'은 옷이 아니라 **촬영 포맷**이었던 셈입니다. 이 글은 그 역설을 실제 이미지로 따라갑니다.

967,806

진단 이미지 수

24

스타일 클래스

46.5%

스트리트 비중 (최대)

382

펑크 이미지 수 (최소)

## 데이터셋 소개 — 97만 장의 한국 패션

![서울 홍대 거리 — 번화한 거리를 걷는 사람들과 실제 도시 맥락의 한국 패션](./images/img-01-hongdae-street.jpg)
*▲ 서울 홍대 거리 (2022). 데이터셋이 '스트리트'로 라벨링한 스튜디오 룩북 컷과 달리, 실제 한국 거리 패션은 도시 공간과 사람들 속에 있습니다. | Source: [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Street_hongdae_Seoul.jpg) (CC BY-SA 4.0)*

## L1 — 데이터 위생은 합격, 다양성은 질문으로

## L2 — 범용 렌즈로 본 24개 스타일의 분포

## L3 — 클래스 구별 렌즈로 다시 보다

## 가장 스트리트다운 옷의 정체

> [!callout]

## 실전 임팩트 — 이 데이터로 패션 AI를 학습하면

### ⚠️ 시나리오: "스트리트 룩"을 검색하면

## 결론 — 라벨이 맞다고 데이터가 옳은 건 아니다

| 프레임 | 무엇을 비교하나 | 드러난 것 |
| --- | --- | --- |
| ① 공식 91% ↔ 구조 | AI Hub 스타일 분류 Recall@3 91.11% vs DataClinic 분포 분석 | 정확도는 불균형·배치 촬영·라벨 경계 모호성을 보여주지 않는다. near-duplicate가 누수로 정확도를 부풀릴 여지도 있다. |
| ② 주관적 스타일 도메인 | WikiArt(예술 사조)·Places365(장소)·한국 음식 등 경계가 흐린 데이터셋 | 스타일·장르·취향처럼 사람도 합의하기 어려운 라벨은 클러스터가 겹친다. K-Fashion도 같은 함정에 불균형과 배치 bias가 더해진다. |
| ③ 클래스 불균형 | 스트리트 449,494장 vs 펑크 382장 | 약 1,177배 격차. 표준편차(91,811)가 평균(40,325)보다 큰 롱테일. 소수 클래스는 충분히 배우기 어렵다. |

## 참고문헌

### 진단 리포트

- 1.DataClinic. (2026). [K-Fashion 이미지 DataClinic 진단 리포트 #127](https://dataclinic.ai/report/127). DataClinic (Pebblous Inc.)

### 데이터셋·기술 문서

- 2.OpinionLive (이화여자대학교·한국패션산업연구원·AI.M·Wearly 참여). (2020). [K-Fashion 이미지 데이터셋 (번호 51)](https://www.aihub.or.kr/aihubdata/data/view.do?currMenu=115&topMenu=100&dataSetSn=51). AI Hub. 조회 66,321회·다운로드 4,059회 (2026-06 기준). 스타일 분류 Recall@3 91.11%, 아이템 탐지 AP@50 81.48%.
- 3.Wolfram Research. (2023). [Wolfram ImageIdentify Net V2](https://resources.wolframcloud.com/NeuralNetRepository/resources/Wolfram-ImageIdentify-Net-V1/). Wolfram Neural Net Repository. DataClinic L2/L3 분석에서 기저 신경망으로 사용 (관찰 차원 L2: 1,280, L3: 150).
