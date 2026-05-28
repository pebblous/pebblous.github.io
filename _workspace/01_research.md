# 리서치: AlphaTransit — AI가 도시의 버스 노선을 직접 설계할 수 있을까

> **express 모드 — 다음 라이터/오케스트레이터를 위한 단일 SSOT 문서.**
> 이 문서는 사용자 입력 메모(`00_input.md`)와 웹 리서치 결과를 교차 검증한 최종 사실 기반 리서치다.
> 본 문서가 정본이며, 라이터는 이 문서의 사실을 그대로 사용한다.

---

## ⚠️ 입력 메모 사실 정정 (라이터 필독)

사용자 `00_input.md`의 일부 정보가 1차 출처와 불일치한다. 아래 사실로 덮어써서 작성한다.

| 항목 | 입력 메모 (00_input.md) | **실제 사실 (arXiv:2512.19767 본문 + 저자 페이지)** |
|------|------------------------|-------------------------------------------------|
| arXiv ID | 2605.28730 | **2512.19767** (저자 페이지·arXiv 검색 모두 일치) |
| 저자 | Bibek Poudel, Sai Swaminathan, Weizi Li (3명) | **Bibek Poudel, Weizi Li (2명)** |
| 핵심 메커니즘 | "MCTS + neural policy-value network" | **End-to-end RL (PPO) + Graph Attention Network (GAT v2)**. MCTS 사용 안 함 |
| 결과 수치 (mixed) | 54.6% | **45.19%** (RL, transit center init, α=0.3) vs 실제망 42.28% |
| 결과 수치 (full) | 82.1% | **73.10%** (RL, transit center init, α=1.0) vs 실제망 58.20% |
| 비교 baseline | "RL 단독", "MCTS 단독" | **실제망, random walk, greedy demand coverage, greedy shortest path** 등 5개 휴리스틱 |
| 핵심 명제 | "MCTS + learned guidance가 단독보다 효과적" | **"End-to-end RL + two-level reward로 long-horizon credit assignment 해결"** |

### 정정 근거

- arXiv ID `2605.28730`은 형식상 2026년 5월이지만, 실제 검색·논문 PDF·저자 홈페이지 모두 **arXiv:2512.19767**(2025년 12월 제출본의 갱신)을 가리킨다. 같은 논문의 같은 저자가 운영하는 GitHub와 [Fluidic City Lab 페이지](https://fluidic-city.github.io/)에서도 이 ID로 연결된다.
- 사용자 메모 자체에서 "1차 출처 verbatim 확인됨"이라 했으나, arXiv 원문(HTML v1)을 직접 fetch한 결과 MCTS 어휘가 본문에 등장하지 않고 PPO + GAT v2 구조만 나온다.
- 본 블로그는 사실 정확성이 우선이므로, 마케팅성 메모보다 1차 출처를 따른다.

> 📌 **글을 쓸 때 메시지 흐름은 입력 메모의 의도(서사·톤·hub 연결)를 살리되, 기술 수치와 메커니즘은 위 표의 "실제 사실"을 사용한다.**

---

## 주제 정의

AlphaTransit은 도시 도로망 위에서 **버스 노선 한 가닥씩을 순차적으로 그려 나가는** 강화학습 에이전트다. 기존의 노선 최적화 연구가 "이미 짜인 노선의 운영 효율(배차·환승)을 다듬는" 데 머물렀다면, AlphaTransit은 **노선 네트워크 그 자체를 처음부터 설계**한다. Bloomington(인디애나주, 인구 약 8만, 16개 실존 노선)을 벤치마크로, 인구조사 기반 출발-목적지(OD) 수요와 실제 도로 토폴로지 위에서 실험했고 — 실제 운영망보다 서비스율을 끌어올렸다.

핵심은 두 가지 기술적 결정이다:
1. **Graph Attention Network (GAT v2)**: 도로망의 그래프 구조에서 노드(교차로)의 중요도를 동적으로 가중. Actor-Critic 분리 head로 PPO 학습.
2. **Two-level Reward**: 노선을 한 엣지씩 늘릴 때마다 받는 **즉시 토폴로지 보상**(연결성·중복 회피) + 노선 네트워크 완성 후 시뮬레이션으로 측정한 **최종 보상**(서비스율). 노선 설계 특유의 **delayed feedback** 문제 — "한 가닥 잘못 그려도 전체가 완성될 때까지 모름" — 를 해결하기 위한 구조.

---

## 독자 페르소나

이 글은 두 독자를 동시에 겨냥한다.

**독자 A — 일반 시민 / 도시 거주자**
- 출퇴근 버스 노선을 매일 타지만 그 노선이 어떻게 정해졌는지 모른다
- "AI가 도시를 디자인한다"는 헤드라인에 호기심을 갖되, 수식은 부담스러워한다
- 알고 싶은 것: "내가 타는 버스 노선이 AI로 다시 그려진다면 무엇이 바뀌나?"

**독자 B — 데이터 사이언티스트 / ML 엔지니어 / 도시·교통 연구자**
- 강화학습·GNN의 작동 원리는 알지만, 도시 인프라 응용은 처음
- 알고 싶은 것: "노선 설계라는 NP-hard 문제를 RL이 어떻게 푸는가? 보상 설계가 핵심이지 않나? Bloomington 같은 작은 도시 벤치마크가 서울·도쿄 규모로 스케일되는가?"

**JH 보이스 적용**: 사색적이되 친근하게. 일반 독자에게는 "당신이 매일 타는 버스" 비유로 진입, 데이터 실무자에게는 "delayed feedback과 two-level reward"의 우아함을 짚어 준다.

---

## 핵심 질문 (4개)

1. **버스 노선은 어떻게 정해지는가?** 도시 계획가의 직관·민원·정치가 섞인 수십 년의 결과물이다. 이것을 알고리즘으로 푼다는 게 무슨 의미인가?
2. **TRNDP는 왜 어려운가?** 한 노선을 그릴 때마다 다음 노선의 의미가 바뀐다. 게다가 "노선이 좋은지"는 모든 노선이 그려진 후에야 시뮬레이션으로 알 수 있다 — 강화학습의 가장 어려운 케이스인 **long-horizon credit assignment**.
3. **AlphaTransit은 무엇을 새롭게 보여줬나?** 합성 도시(70~150 노드 벤치마크, Mumford 등)가 아닌 **실제 도시의 실제 도로망**에서 실제 운영망을 이겼다는 점. 그리고 GAT + PPO + two-level reward라는 비교적 단순한 조합으로.
4. **그래서 우리 도시는 바뀔까?** Bloomington은 작다. 서울(8,200개 정류장, 360+ 노선)·도쿄·런던 같은 메가시티로 갈 때 알고리즘이 그대로 작동할 것인가? 그리고 정치·예산·기존 종사자라는 **알고리즘이 다루지 않는 변수**가 있다.

---

## SEO 키워드

### 메인 키워드 (KO)
- **AlphaTransit** (브랜드 키워드 — 검색 유입 핵심)
- **AI 대중교통 설계**
- **강화학습 도시 계획**
- **버스 노선 AI**

### 메인 키워드 (EN, hreflang 영문판용)
- AlphaTransit transit route design
- reinforcement learning transit network
- AI urban planning bus routes

### Long-tail (KO)
- "AI가 버스 노선을 설계하면 어떻게 될까"
- "강화학습으로 도시 교통을 짠다"
- "TRNDP 강화학습 해법"
- "Bloomington 버스 노선 AI"
- "그래프 신경망 도시 설계"

### 시리즈 키워드 (Pebblous hub 연결)
- 도시 설계 AI
- Spatial AI 평가
- UrbanGPT 시리즈

---

## 경쟁 콘텐츠 분석

### 1. 학술 원문 자체 — arXiv:2512.19767 (Poudel & Li, 2025-12 / v2: 2026-05)
- **장점**: 1차 출처, 모든 수치의 진본
- **약점**: 일반 독자 진입 장벽 매우 높음. "왜 중요한가"의 서사 부재
- **차별화 포인트**: 우리는 **시민 + 데이터 실무자 양쪽**을 동시에 끌고 간다. Pebblous의 다른 도시 설계 글(UrbanGPT, Spatial AI)과 묶어 **"도시 설계 AI 시리즈"**의 한 챕터로 자리매김

### 2. Lemoy et al. (arXiv:2404.05894), "Learning Heuristics for Transit Network Design" (2024-04, Transportmetrica B 2025)
- 같은 문제(TRNDP)를 GNN+RL로 다른 방식으로 푼 직전 연구. Laval(캐나다, 합성 변형) + Mumford 합성 벤치마크. RL이 evolutionary algorithm의 휴리스틱을 학습하는 하이브리드 구조
- **AlphaTransit과의 차이**: Lemoy는 evolutionary 외피, AlphaTransit은 end-to-end. Lemoy는 합성 벤치마크에 초점, AlphaTransit은 **실제 도시 + 실제 OD + 실제 도로망**
- 우리 글에서 **§4(학술 계보) 참고문헌으로 인용**

### 3. Streetsblog USA (2018-09), "What American Cities Can Learn From Seoul's 2004 Bus Redesign"
- 알고리즘이 아니라 **인간이** 도시 단위로 버스망을 다시 그린 실제 사례. 일일 승객 14% 증가, 만족도 14.2% → 36.9% — 우리 본문의 "도시 단위 노선 개편은 정말 효과가 있다"의 사실 근거
- 우리 글 §3 또는 §5에서 **"인간 도시계획가가 한 일을 AI가 다시 하면"** 대조점으로 사용

### 우리 글의 차별화 (3가지)
1. **이중 진입로**: 일반 독자에게는 "내가 타는 버스가 다시 그려진다면" 서사, 실무자에게는 "delayed feedback을 two-level reward로 푼 우아함"을 동시에 제공
2. **시리즈 연결**: UrbanGPT(텍스트 → 도시 설계) + Spatial AI 평가 5기준과 묶어 **"AI가 도시를 만든다"**라는 Pebblous의 큰 그림 안에 배치
3. **현실 거리감을 정직하게**: Bloomington은 작다. 서울·도쿄로 가는 길에 무엇이 필요한지 정직하게 짚는다 (스케일, 정치, 환승, 형평성)

---

## 아웃라인 (7 섹션)

### 도입: "당신이 매일 타는 버스는 어떻게 그 노선이 되었나"
- 버스 정류장 풍경에서 시작. "왜 이 노선이 여기를 지나는가"는 대부분의 시민이 물어본 적 없는 질문
- 도시 계획가의 직관·민원·역사·정치의 누적물 vs **알고리즘이 백지에서 새로 그려본다면**
- AlphaTransit의 등장 — Bloomington이라는 작은 도시에서, RL 에이전트가 실제 운영망을 이긴 사건

### §1. TRNDP — 왜 이 문제가 60년간 풀리지 않았나
- TRNDP(Transit Route Network Design Problem)의 정의: 도시 도로망(그래프) 위에 K개의 노선을 배치, 수요를 만족시키되 운영비를 최소화
- **NP-hard** — 유전 알고리즘, 시뮬레이티드 어닐링, 정수 계획법(MILP)이 1970년대부터 시도되었으나 도시 규모로 가면 폭발
- 어려움의 본질: **delayed feedback**. 한 노선의 가치는 다른 노선이 모두 그려진 후에야 평가된다. RL의 가장 어려운 케이스 — "long-horizon credit assignment"

**독자 인사이트**: 도시 교통은 단순히 "AI가 풀어버린" 문제가 아니라, 60년간 풀리지 않은 학술적 난제다. 그 무게를 느껴야 다음 섹션의 우아함이 보인다.

### §2. AlphaTransit의 작동 방식 — Graph Attention + Two-Level Reward
- **에이전트가 하는 일**: 도로망 그래프 위에서 한 엣지씩 노선을 연장한다. K개 노선이 완성될 때까지 순차 결정
- **Graph Attention Network (GAT v2)**: 각 교차로의 "중요도"가 주변 노드와 OD 수요에 따라 동적으로 결정됨. CNN처럼 고정된 receptive field가 아닌, attention으로 유연하게
- **Two-Level Reward**:
  - 즉시 보상(per-step): 연결성·중복 회피·도달 가능 인구 등 토폴로지 기반 빠른 피드백
  - 최종 보상(terminal): K개 노선 완성 후 시뮬레이션으로 측정한 서비스율
  - 이 둘의 합성이 long-horizon credit assignment를 푼다 — "이 한 엣지가 60단계 뒤의 최종 성능에 미치는 영향"을 학습 가능하게
- **PPO로 학습** — actor와 critic이 GAT 백본을 공유

**독자 인사이트** (실무자): 보상 설계가 알고리즘이다. "어떤 신호를 언제 주느냐"가 long-horizon 문제의 성패를 가른다. AlphaTransit의 진짜 기여는 GAT가 아니라 **이중 보상 구조의 단순함**일 수 있다.

### §3. Bloomington 벤치마크 — 합성에서 실제로
- 그동안의 TRNDP 벤치마크: Mumford(60·100·150 노드 합성), Mandl(15 노드) — 학술용 toy
- AlphaTransit의 새 벤치마크: **Bloomington 실제 도로망**
  - 143 노드, 243 양방향 엣지, 152.3 km²
  - 1,475 census block(2,399에서 정제)의 LODES 통근 데이터 기반 OD
  - 16개 실존 노선과 직접 비교
- **결과 수치 (transit center 초기화)**:
  - Mixed demand (α=0.3, 환승 일부): RL **45.19%** vs 실제 운영망 **42.28%** 서비스율
  - Full transit demand (α=1.0): RL **73.10%** vs 실제 운영망 **58.20%**
- 다른 시나리오에서는 wait time **-30.9%**, bus utilization **+21.0%**

**독자 인사이트**: 차이가 극적이지 않다 — mixed에서 +2.9%p. 그러나 **풀 트랜짓 가정에서는 +14.9%p로 갈라진다**. 이는 "현재 인프라 위에서 미세 조정"이 아니라 **"도시가 자동차에서 대중교통으로 모드 전환할 때 AI 설계가 큰 차이를 만든다"**는 신호다.

### §4. AlphaGo가 도시에 도착하다 — 학술 계보
- 이름의 출처: **AlphaGo / AlphaZero** 계보. 비록 본 논문이 MCTS를 쓰지 않지만, "한 수씩 두면서 최종 결과를 보상으로 받는다"는 **에이전트형 순차 결정** 패러다임은 같다
- 도시 교통 RL의 직전 흐름:
  - 신호등 제어: Multi-agent RL (수많은 SUMO·MATSim 연구, 2018~)
  - 노선 휴리스틱 학습: Lemoy et al. 2024 (GNN으로 evolutionary algorithm의 휴리스틱 학습) — Laval, Mumford
  - 차량 라우팅: AlphaRouter 등 (MCTS + RL을 조합한 vehicle routing)
- AlphaTransit의 새로움: 휴리스틱을 **돕는** RL이 아니라, **노선 자체를 처음부터 그리는** end-to-end RL
- DeepMind의 AlphaFold가 단백질 접힘에서 그랬듯, AlphaTransit은 **"도시 인프라 설계"**라는 사회과학 영역에 RL을 직접 적용한 초기 사례 중 하나

**독자 인사이트**: 도시 인프라의 RL화는 게임·바이오에서 검증된 패러다임이 사회 시스템으로 확장되는 흐름이다. 다음 차례는 무엇일까 — 학군? 응급실 배치? 우편 분류?

### §5. 서울이라면 어떨까 — Bloomington과 서울 사이의 거리
- 2004년 서울 버스 개편: 인간 도시계획가들이 1년 반 동안 설계. 일일 승객 +14%, 만족도 14.2% → 36.9%. **인간이 도시 단위로 노선을 다시 그릴 수 있음을 증명한 역사적 사례**
- AlphaTransit이 서울에 적용된다면 마주칠 변수들:
  - **규모**: Bloomington 143 노드 → 서울 2,500+ 정류장 (10배 이상). 강화학습 sample efficiency는?
  - **다중 모드**: 지하철 12개 노선과의 환승 최적화는 본 논문 범위 밖
  - **정치적 변수**: 노선 폐지 = 종사자 일자리·노선 인근 상권. 알고리즘이 다루지 않는다
  - **형평성**: 서비스율 최대화는 인구 밀집 지역에 노선을 몰아 넣을 수 있음. 변두리 노약자는?
- 그러나 **부분 적용**은 이미 가능 — 마을버스 같은 feeder 라인 재설계, 신도시 초기 노선 설계, 폐지 후보 노선 시뮬레이션

**독자 인사이트**: AlphaTransit은 "AI가 서울 버스를 다시 그린다"의 데모가 아니다. **"인간 도시계획가의 의사결정을 보조하는 시뮬레이터"**의 첫 진지한 모델이다. 그 거리감을 정직하게 인정할 때 응용이 시작된다.

### §6. UrbanGPT와 만나는 자리 — Pebblous가 보는 도시 설계 AI
- **UrbanGPT 2.0**(텍스트 한 줄로 도시를 설계): "공원이 있고 학교 옆에 카페가 있는 거리" → 평면도
- **AlphaTransit**(강화학습으로 노선을 설계): "이 도시의 OD가 이렇다" → 노선 네트워크
- 둘은 같은 흐름의 다른 단면이다 — **AI가 도시의 형태와 흐름을 생성한다**
- Pebblous의 [Spatial AI 평가 5기준](/project/UrbanGPT/spatial-ai-pebblous/ko/) 관점에서 AlphaTransit:
  - 공간 추론(spatial reasoning): GAT가 도로망 위상을 다룸 ✓
  - 의미 정합성(semantic coherence): OD 수요에 응답 ✓
  - 다중 스케일(multi-scale): 현재는 도시 1개. 광역망 미해결 ✗
  - 인간 협업(human-in-the-loop): 시뮬레이션 보상에 종속, 시민 피드백 루프 없음 △
  - 위험 추적(risk-aware): 형평성·접근성 패널티 부재 △
- **다음 도전**: Pebblous는 데이터의 품질(DataGreenhouse)로 이 시스템이 학습하는 OD·도로망의 정합성을 보증하는 자리에 있다 — 학습 데이터가 편향되면 노선도 편향된다

**독자 인사이트**: AlphaTransit은 강력하지만 5기준 중 3개에서 △/✗다. 도시 설계 AI는 알고리즘 문제가 아니라 **데이터 + 알고리즘 + 사회 시스템의 합산** 문제다.

### §7. 도시 설계 AI의 다음 한 걸음
- AlphaTransit이 푼 것: TRNDP를 도시 규모 실제 데이터에서 end-to-end RL로 해결 가능함을 보임
- 남은 것:
  - 메가시티 스케일링 (서울·도쿄·NYC)
  - 다중 모드 통합 (버스 + 지하철 + 자전거 공유)
  - 동적 수요 (출퇴근·심야·이벤트)
  - 형평성·접근성 제약을 보상에 반영
  - 시민 피드백을 학습 신호로 통합
- **마지막 질문**: 도시는 알고리즘이 설계하는가, 시민이 설계하는가, 둘이 함께 설계하는가? AlphaTransit은 그 대화의 시작이다 — 답이 아니다

---

## 추천 제목

### KO mainTitle 후보 (3개)
1. "당신이 타는 버스를 AI가 다시 그린다면 — AlphaTransit이 본 도시"
2. "AI는 60년 묵은 버스 노선 문제를 풀었다 — AlphaTransit과 도시 설계의 다음"
3. "강화학습이 도시의 동맥을 그리다 — AlphaTransit 읽기"

→ **권장**: 1번. "당신이 타는"으로 일반 독자 진입, 부제로 실무자 신호.

### KO subtitle 후보
- "Bloomington 143개 교차로 위에서 강화학습이 16개 실존 노선을 이긴 사건"
- "Graph Attention + Two-Level Reward — 도시 인프라 설계 RL의 우아한 한 수"

### EN mainTitle 후보
1. "If AI Redrew the Bus Line You Take Every Day"
2. "AlphaTransit and the 60-Year Problem of Designing City Buses"

### EN subtitle 후보
- "How reinforcement learning beat real-world transit networks on a real city's roads"
- "Graph attention, two-level reward, and the elegance of learning to design cities"

---

## 메타데이터 (articles.json + PebblousPage.init 입력)

```json
{
  "category": "tech",
  "tags": [
    "AlphaTransit",
    "강화학습",
    "도시 설계 AI",
    "대중교통",
    "버스 노선 최적화",
    "Graph Attention Network",
    "TRNDP",
    "Spatial AI",
    "PPO",
    "Bloomington"
  ],
  "estimatedReadTime": "10-12분",
  "predicted_word_count_ko": 4500
}
```

- **카테고리**: `tech` (블로그 글 — `/blog/` 경로)
- **슬러그**: `alphatransit-rl-city-transit-design`
- **경로 (KO)**: `blog/alphatransit-rl-city-transit-design/ko/`
- **경로 (EN)**: `blog/alphatransit-rl-city-transit-design/en/`
- **publisher**: `(주)페블러스 데이터 커뮤니케이션팀`

---

## 1차 출처 (Bibliography seed)

라이터가 본문에서 인용하거나 references.json에 등록할 1차/주요 2차 출처:

1. **Poudel, B., & Li, W. (2025/2026).** *Learning to Design City-scale Transit Routes*. arXiv:2512.19767. [https://arxiv.org/abs/2512.19767](https://arxiv.org/abs/2512.19767)
2. **Fluidic City Lab.** University of Tennessee, Knoxville. [https://fluidic-city.github.io/](https://fluidic-city.github.io/)
3. **Bibek Poudel — Personal page.** [https://poudel-bibek.github.io/](https://poudel-bibek.github.io/) — AlphaTransit 프로젝트 소개·시연 영상 링크 ([https://youtu.be/Z_cvsM0MqFs](https://youtu.be/Z_cvsM0MqFs))
4. **Lemoy, R., et al. (2024/2025).** *Learning Heuristics for Transit Network Design and Improvement with Deep Reinforcement Learning*. arXiv:2404.05894 / Transportmetrica B 13(1). [https://arxiv.org/abs/2404.05894](https://arxiv.org/abs/2404.05894)
5. **Seoul Solution / Seoul Metropolitan Government (2005-2010).** *Reforming Public Transportation in Seoul*. [https://www.seoulsolution.kr/en/content/1803](https://www.seoulsolution.kr/en/content/1803)
6. **UN-Habitat (2013).** *Bus reform in Seoul, Republic of Korea*. Case study report. [https://unhabitat.org/sites/default/files/2013/06/GRHS.2013.Case_.Study_.Seoul_.Korea_.pdf](https://unhabitat.org/sites/default/files/2013/06/GRHS.2013.Case_.Study_.Seoul_.Korea_.pdf)
7. **Streetsblog USA (2018).** *What American Cities Can Learn From Seoul's 2004 Bus Redesign*. [https://usa.streetsblog.org/2018/09/04/what-american-cities-can-learn-from-seouls-2004-bus-redesign](https://usa.streetsblog.org/2018/09/04/what-american-cities-can-learn-from-seouls-2004-bus-redesign)
8. **Eclipse SUMO.** *Simulation of Urban MObility*. [https://eclipse.dev/sumo/](https://eclipse.dev/sumo/) — 도시 교통 RL의 표준 시뮬레이터
9. **Silver, D., et al. (2017).** *Mastering the Game of Go without Human Knowledge* (AlphaZero). *Nature*, 550. — 학술 계보 §4 참고

### Pebblous 내부 시리즈 hub
- `/project/UrbanGPT/urbangpt2-pebblous/ko/` — "UrbanGPT 2.0 — 텍스트 한 줄로 도시를 설계하다"
- `/project/UrbanGPT/spatial-ai-pebblous/ko/` — "Spatial AI에 점수를 매긴다면 — PebbloSim 관점의 평가 5기준"

---

## 라이터를 위한 톤 노트

1. **JH 보이스 — 사색적이되 친근하게**. 일반 시민 진입 + 실무자 보상.
2. **현실 거리감을 정직하게**. "AI가 서울 버스를 다시 그린다"는 과장 금지. Bloomington은 작다.
3. **숫자는 정확히**. 입력 메모의 54.6%/82.1% 대신 본 문서의 45.19%/73.10%을 사용. (다른 시나리오 수치 인용 시 어떤 시나리오인지 명시)
4. **시리즈 연결을 자연스럽게**. UrbanGPT·Spatial AI 글은 §6에서 한 번씩 본문 링크로. Series Notice 카드는 본문 끝에 별도.
5. **MCTS 단어 사용 금지** — 본 논문에 없음. AlphaGo 계보 언급은 §4에서 "이름의 출처"로만, "MCTS를 쓴다"고 쓰지 말 것.
6. **표 1개, 다이어그램 0~1개 추천**: §3의 Bloomington 결과 비교표. §2의 two-level reward 다이어그램은 옵션.
7. **FAQ 7개 이상**: 일반 독자형 4개 + 실무자형 3개 (PebblousPage.init faqs[]에 등록).

---

## 작성 체크리스트 (라이터 자율 점검)

- [ ] 본문에 "MCTS" 단어 없음 (또는 §4에서 명시적 정정으로만 등장)
- [ ] 저자는 Poudel & Li 2명으로 통일
- [ ] arXiv ID는 2512.19767로 통일
- [ ] 결과 수치는 45.19% / 73.10% (또는 시나리오 명시한 다른 수치)
- [ ] Bloomington 규모(143 노드, 16 노선)와 서울 규모의 거리감 §5에서 명시
- [ ] UrbanGPT·Spatial AI 본문 링크 1회씩
- [ ] FAQ 7개 이상, faqs[]에 등록 (HTML 하드코딩 금지)
- [ ] H1 비어있음, mainTitle + subtitle은 PebblousPage.init 설정
- [ ] fade-in-card 모든 section에 누락 없음
- [ ] EN 버전 hreflang 연결
