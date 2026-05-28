# 입력 메모 — AlphaTransit 블로그 (express)

## 사용자 메시지
:microscope: 자연과학 일반

1. AlphaTransit: AI가 도시 전체 대중교통 노선을 설계한다 — 강화학습 기반 모델이 도시 규모 버스·지하철 노선 최적화에 도전
링크: https://arxiv.org/abs/2605.28730
→ 추천 이유: "AI가 도시를 디자인한다"는 직관적인 서사. 교통 계획이라는 현실 문제에 AI를 적용한 사례로, 데이터 실무자뿐 아니라 일반 독자의 호기심도 자극. 도시 인프라 최적화가 실제 어떻게 ML 문제로 변환되는지 보여주는 좋은 예시.

## 1차 출처 (verbatim 확인됨)
- 정식 제목: "AlphaTransit: Learning to Design City-scale Transit Routes"
- 저자: Bibek Poudel, Sai Swaminathan, Weizi Li
- 제출일: 2026-05-27 (어제)
- 핵심 메커니즘: MCTS + neural policy-value network. Policy proposes route extensions, value estimates downstream design quality.
- 벤치마크: Bloomington TRNDP (realistic road topology + census-derived demand)
- 결과:
  - 서비스율 54.6% (mixed demand) / 82.1% (full transit demand)
  - RL 단독 대비 +9.9% / +11.4%
  - MCTS 단독(learned guidance 없는) 대비 +2.5% / +11.2%
- 핵심 명제: "coupling learned guidance with MCTS is more effective than either approach alone"
- 코드: https://github.com/poudel-bibek/AlphaTransit
- 문제 정의: TRNDP = Transit Route Network Design Problem — delayed-feedback 문제

## UrbanGPT 시리즈 (기존 글 — 자연스러운 hub 인용)
- project/UrbanGPT/urbangpt2-pebblous/ko/ — "UrbanGPT 2.0 — 텍스트 한 줄로 도시를 설계하다"
- project/UrbanGPT/urbangpt2-pebblous/en/ — "Designing Cities with a Single Line of Text"
- project/UrbanGPT/spatial-ai-pebblous/ko/ — "Spatial AI에 점수를 매긴다면 — PebbloSim 관점의 평가 5기준"
- project/UrbanGPT/spatial-ai-pebblous/en/ — "Should We Score Spatial AI? Five Criteria from PebbloSim's Perspective"

## 슬러그 / 카테고리
- 슬러그: alphatransit-rl-city-transit-design
- 카테고리: tech (블로그 글이므로 /blog/ 경로)
- 경로: blog/alphatransit-rl-city-transit-design/ko/

## 톤
사색적·날카롭되 따뜻한 JH 보이스. "AI가 도시를 디자인한다"는 직관적 서사를 살리고, UrbanGPT 시리즈의 "텍스트로 도시 설계"와 자연스럽게 묶기.

## Mode
express — 정지점 없음, PR까지만, 마지막에 preview tunnel + iMessage/Gmail Draft 알림.
