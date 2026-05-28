# 리서치 A (Official) — AlphaTransit 1차 출처 정밀 분석

> **이 문서는 SSOT의 보조 문서다.** 메인 리서치는 `01_research.md`를 본다.
> 본 문서는 1차 출처(arXiv:2512.19767)의 사실을 정밀하게 정리한 부속 자료.
> ⚠️ 이전 작업의 잔재("Vibe Physics" 관련 내용)는 모두 폐기됨. 본 파일은 AlphaTransit 전용.

---

## 논문 메타

- **정식 제목**: "Learning to Design City-scale Transit Routes"
- **저자**: Bibek Poudel, Weizi Li (2명)
- **소속**: Fluidic City Lab, Min H. Kao Department of Electrical Engineering and Computer Science, **University of Tennessee, Knoxville**
- **arXiv ID**: **2512.19767**
- **공개일**: 2025년 12월 (v1) / 갱신본 2026년 5월
- **프로젝트 별칭**: "AlphaTransit" (저자 본인이 GitHub/홈페이지에서 사용)
- **시연 영상**: [https://youtu.be/Z_cvsM0MqFs](https://youtu.be/Z_cvsM0MqFs)

---

## 핵심 기여 (논문 본문 요지)

논문이 명시하는 주된 기여 3가지:

1. **End-to-end RL framework** based on graph attention networks for sequential transit network construction
2. **Two-level reward structure** pairing incremental topological feedback with simulation-based terminal rewards → long-horizon credit assignment 문제 해결
3. **새로운 real-world 벤치마크** — Bloomington, Indiana, 실제 도로망 + 인구조사 OD + 실존 노선

---

## 방법론 상세

### 아키텍처
- **백본**: Graph Attention Network v2 (GAT v2) — actor와 critic이 공유
- **출력**: Actor head(엣지 선택 정책), Critic head(상태 가치)
- **학습 알고리즘**: Proximal Policy Optimization (PPO)
- ❌ **MCTS는 사용하지 않음** — 입력 메모에 적힌 "MCTS + policy-value network"는 부정확

### Two-Level Reward
- **Incremental (per-step) reward**: 노선 한 엣지 추가 시 즉시 산출. 토폴로지 기반 (연결성·중복 회피·잠재 수요 커버리지 등)
- **Terminal reward**: K개 노선 완성 후 시뮬레이션 기반. 서비스율(service rate)이 주된 측정값
- **목적**: long-horizon credit assignment 해결. "한 엣지의 선택이 60단계 뒤 최종 서비스율에 미치는 영향"을 학습 가능하게

### 순차 구성 (sequential construction)
- 그래프 위에서 시작 노드에서 출발, 인접 노드로 한 엣지씩 노선을 연장
- 노선 종료 → 다음 노선 시작 → K개 노선 완성 시 에피소드 종료
- 초기화 방식 2종:
  - **transit center init**: 기존 transit center에서 시작
  - **random init**: 무작위 노드에서 시작

---

## 벤치마크 데이터 — Bloomington, Indiana

| 항목 | 수치 |
|------|------|
| 노드 (교차로) | **143** |
| 양방향 엣지 | **243** |
| 커버리지 면적 | **152.3 km²** |
| Census blocks | 2,399 → **1,475** (전처리 후) |
| 실존 노선 | **16개** (Bloomington Transit 운영) |
| OD 수요 출처 | **U.S. Census LODES** commuting data |
| Peak-hour 스케일 | 일일 통근 데이터의 **11%**를 첨두로, **150%** 스케일 (비통근 트립 포함) |

### 모달 스플릿 (transit adoption) 시나리오
- **α = 0.3**: mixed demand. 자가용·도보·자전거 등이 섞임
- **α = 1.0**: full transit demand. 모든 OD가 대중교통을 이용한다고 가정

---

## 실험 결과 (정확한 수치)

### Service Rate (transit center 초기화)

| 시나리오 | 실제 운영망 | AlphaTransit (RL) | 개선 |
|---------|-----------|-------------------|------|
| Mixed (α=0.3) | 42.28% | **45.19%** | +2.91%p |
| Full transit (α=1.0) | 58.20% | **73.10%** | +14.90%p |

### 추가 보고 수치 (다른 시나리오)
- Real-world 대비: **+25.6%** higher service rate
- Wait time: **-30.9%** shorter
- Bus utilization: **+21.0%** better
- (Random init, α=1.0) Service rate vs greedy shortest path: **+6.4%p**
- (Random init, α=1.0) Service rate vs greedy demand coverage: **+14.4%p**
- (Random init, α=1.0) Route efficiency vs shortest path: **+47.3%**

### 비교 baseline (5종 휴리스틱)
1. 실제 Bloomington Transit 노선 (real-world)
2. Random walk
3. Greedy demand coverage
4. Greedy shortest path
5. (논문에 명시된 추가 휴리스틱)

> ⚠️ "RL 단독 vs MCTS 단독" 비교는 본 논문에 없음. 입력 메모의 해당 부분은 사실 오류.

---

## 입력 메모(`00_input.md`)와의 불일치 정리

| 항목 | 입력 메모 | 실제 (1차 출처) |
|------|----------|----------------|
| arXiv ID | 2605.28730 | 2512.19767 |
| 저자 수 | 3명 (Poudel, Swaminathan, Li) | **2명 (Poudel, Li)** |
| 방법 | MCTS + neural policy-value | **GAT v2 + PPO + two-level reward** |
| Mixed service rate | 54.6% | **45.19%** (transit center, α=0.3) |
| Full service rate | 82.1% | **73.10%** (transit center, α=1.0) |
| RL 대비 개선 | +9.9% / +11.4% | 본 논문에 RL-only baseline 비교 없음 |
| MCTS 대비 개선 | +2.5% / +11.2% | 본 논문에 MCTS-only baseline 비교 없음 |

**라이터 지침**: 본문 작성 시 위 "실제 (1차 출처)" 열의 수치만 사용. 입력 메모의 수치는 인용하지 말 것.

---

## 학술 계보 (라이터가 §4에서 참고)

### 직전 transit RL 연구
- **Lemoy et al. (2024/2025)** — arXiv:2404.05894 / Transportmetrica B 13(1), 2025
  - 방법: GNN(GAT)으로 evolutionary algorithm의 휴리스틱을 학습
  - 벤치마크: Mumford 합성 + Laval 시뮬레이션
  - 결과: 운영비 19% 절감 (Laval), Mumford SOTA
  - **AlphaTransit과의 차이**: 외피가 evolutionary, AlphaTransit은 end-to-end

### AlphaGo / AlphaZero 계보
- **Silver et al. (2017)** — *Mastering the Game of Go without Human Knowledge*, Nature 550
  - MCTS + policy-value network로 self-play
  - AlphaTransit은 MCTS는 안 쓰지만, **"순차 결정 + 시뮬레이션 기반 terminal reward"** 패턴은 공유
- **AlphaRouter (Vehicle routing)** — MCTS와 RL을 결합한 vehicle routing 연구. 본 논문과 결이 가까운 동시기 응용

### 도시 교통 RL 일반
- **신호등 제어** — SUMO/MATSim 기반 multi-agent RL (2018~)
- **DesRUTGe (2025)** — Decentralized Federated Learning + SUMO로 24시간 트래픽 패턴 생성

---

## 라이터를 위한 직접 인용 가능 어구

> "End-to-end reinforcement learning framework based on graph attention networks for sequential transit network construction."

> "Two-level reward structure combining incremental topological feedback with simulation-based terminal rewards."

> "Real-world dataset from Bloomington, Indiana with topologically accurate road networks, census-derived demand, and existing transit routes."

> "The learned policies substantially outperform existing designs and traditional heuristics."

(원문에서 추가 인용 필요 시 arXiv HTML v1 본문 참조)
