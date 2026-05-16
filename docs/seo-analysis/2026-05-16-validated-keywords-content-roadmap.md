# 검증된 키워드 인벤토리와 후속 콘텐츠 로드맵 (2026-05-16)

## 목적

봇 노이즈를 제거하고 **사람 트래픽이 검증된** 키워드만 추려, 어디에 후속 콘텐츠를 더 만들면 ROI가 가장 높은지 결정한다.

## 검증된 강한 키워드 (28일, 사람 검색)

**필터링 기준**: clicks ≥ 3 AND impressions ≥ 10 (우연 클릭이 아닌 일관된 사람 신호)

상위 1000개 쿼리 중 **29개**가 통과. 이 29개의 합계: 405 clicks / 7,068 impressions / **CTR 5.7%**. 진짜 사람 활동 영역.

## 토픽 클러스터 — 7개 그룹

| Cluster | 쿼리 수 | Clicks | Imp | CTR | Best Pos | 기존 페이지 |
|---|---:|---:|---:|---:|---:|---|
| **UrbanGPT (Spatial AI)** | 8 | 241 | 2,237 | **10.8%** | 1.9 | 1개 (urbangpt2-pebblous) |
| **GitNexus** | 1 | 63 | 512 | 12.3% | 4.2 | 1개 + 인접 1 (graphrag) |
| **ISO/IEC 5259** | 4 | 26 | 88 | **29.5%** | 1.5 | 8+개 (풍부) |
| **AI Scientist (Sakana)** | 2 | 14 | 94 | 14.9% | 4.7 | 1개 + 인접 (ai-science-new-era) |
| **팔란티어 (Palantir)** | 6 | 60 | 951 | 6.3% | 1.9 | 5+개 (분산) |
| **VLM/VLA** | 5 | 59 | 2,429 | 2.4% | 1.9 | 3개 (physical-ai 중심) |
| **기타 단일** (nanoclaw, x402, nemotron) | 3 | 15 | 757 | 2.0% | 8.1 | 각각 1~3개 |

## 클러스터별 진단과 후속 전략

### 🥇 UrbanGPT — 가장 강한 입지, 가장 큰 기회

**현황**: 8개 변종 쿼리가 안정적으로 잡힘, 단일 페이지에서 241 클릭. CTR 10.8%는 매우 건강.
**미국 노출 91K 폭발의 진원지** — 비평글이 "단일 키워드 집중"이라 우려한 그 키워드.
**기존 자산**: `project/UrbanGPT/urbangpt2-pebblous/` (KO+EN)

**진짜 문제**: 한 페이지가 8개 변종을 다 잡고 있음. **클러스터로 확장하면 노출과 클릭이 같이 늘어남**.

**후속 콘텐츠 후보** (우선순위 순):

1. **UrbanGPT 2.0 vs UrbanGPT 1.0 — 무엇이 바뀌었나** (`urban gpt 1.0`, `urbangpt original` 같은 새 쿼리 잡기)
2. **Spatial AI 비교: UrbanGPT vs Cesium vs Esri GeoAI** ("urbangpt geospatial" 88 노출 / 0 클릭 — 이미 의도 있음)
3. **Pebblous PebbloSim × UrbanGPT — Physical AI를 위한 시뮬레이션·생성 결합** ⭐ (브랜드 결합)
4. **STF Labs UrbanGPT 활용 사례 모음** (STF Labs 자체가 거의 안 알려져 있어 우리가 정보 허브화)

**ROI 평가**: 매우 높음. 이미 검증된 트래픽 노드. 1편당 추가 50~200 클릭 기대.

---

### 🥈 GitNexus — 단일 페이지 12.3% CTR, 후속만 만들면 됨

**현황**: 단 1개 페이지가 63 클릭. CTR 12.3%, position 4.2. **순위만 더 올라도 클릭 자동 증가**.
**기존 자산**: `blog/gitnexus-code-knowledge-graph-2026/` + 인접 `report/graphrag-ontology-auto-construction/`

**후속 콘텐츠 후보**:

1. **GitNexus vs GitHub Copilot Workspace — 코드 지식 그래프 비교** (제품 비교 글)
2. **Code Knowledge Graph의 부상 — GitNexus, Cursor, Bloop 종합 분석** (시리즈화)
3. **Pebblous가 보는 Code Knowledge Graph** ⭐ (브랜드 트랙)
4. **GraphRAG와 GitNexus — 코드용 RAG의 진화** (이미 인접 글 있음, 연결 강화)

**ROI 평가**: 높음. 단일 강한 페이지를 토픽 클러스터로 확장하는 표준 케이스.

---

### 🥉 ISO/IEC 5259 — CTR 29.5% (가장 높음), 의외의 보석

**현황**: 4개 변종 쿼리에서 평균 CTR 29.5%, 1위에 가까운 position. **숨은 가장 강한 입지**.
**기존 자산**: 이미 8개+ 페이지 보유 (cheetsheet, image-guide, text-qa, eval, roadmap...). 자산은 풍부.

**진짜 문제**: 노출 자체가 작음 (88회). **검색 수요가 작거나, 우리가 검색에 잘 안 잡힘**.

**확인 필요**: 진짜 검색 수요가 작은지 (틈새 표준이라 그럴 수도), 아니면 우리 콘텐츠가 ISO 5259 메인 키워드를 잘 못 잡고 있는지.

**후속 콘텐츠 후보**:

1. **ISO/IEC 5259-2 한글 완전 해설 가이드** — 1페이지 통합 (현재 분산된 8+ 페이지를 hub로)
2. **AI 데이터 품질 표준 비교: ISO 5259 vs ISO 24029 vs ISO 23894** (인접 표준 잡기)
3. **Pebblous DataClinic × ISO 5259 — 표준을 제품에 어떻게 녹였나** ⭐ (브랜드 트랙)
4. **ISO 5259-2 측정 항목 11가지 (QM cheatsheet 2026)** — long-tail 잡기

**ROI 평가**: 중상. 절대 노출이 작아서 임팩트는 제한적이지만, **표준 권위 브랜딩**에 매우 중요.

---

### 4️⃣ AI Scientist v2 (Sakana) — 검증된 niche

**현황**: 2개 쿼리, 14 클릭, CTR 14.9%. niche이지만 깨끗한 사람 트래픽.
**기존 자산**: `project/AgenticAI/ai-scientist-v2/` + 인접 `report/ai-science-new-era/`

**후속 콘텐츠 후보**:

1. **AI Scientist v3 출시 분석** (Sakana 후속 모델 트래킹)
2. **AI for Science 시리즈: AI Scientist, AlphaFold 3, GNoME 비교**
3. **Pebblous가 보는 AI Science의 데이터 품질 문제** ⭐ (브랜드 트랙)

**ROI 평가**: 중. niche라 노출 폭발은 어렵지만 권위 누적.

---

### 5️⃣ 팔란티어 — 잠재력 큰데 분산되어 있음

**현황**: 6개 쿼리, 60 클릭, CTR 6.3%. position 1.9까지 가능.
**기존 자산**: 5+개 페이지 (palantir-analysis-2026, palantir-vs-classic-ontology, palantir-technological-republic, technological-republic 등) — **분산**.

**진짜 문제**: 페이지가 너무 많이 분산되어 한 페이지의 권위가 안 쌓임. **Hub 페이지로 통합 필요**.

**후속 콘텐츠 후보**:

1. **Palantir Hub 페이지** — 우리 5+개 글을 한 곳에서 가이드 (`/topic/palantir-hub/` 같은 형태)
2. **팔란티어 온톨로지 vs 페블러스 CURK 온톨로지** ⭐ (브랜드 결합)
3. **Pebblous가 보는 팔란티어 모델** ⭐ (브랜드 트랙)
4. **Palantir Foundry 한국 시장 진출 분석** (시의성형)

**ROI 평가**: 매우 높음. 트래픽 노드가 분산되어 있어 통합만으로 CTR/순위 동시 상승 가능.

---

### 6️⃣ VLM/VLA — 노출 2,429 있지만 CTR 2.4%

**현황**: 5개 쿼리, 59 클릭. 노출은 많은데 CTR 낮음. "vla" 단일 쿼리에서 2,121 노출 / 37 클릭.
**기존 자산**: 3개 페이지 (physical-ai, world-model-rise, eupe-universal-encoder)

**진짜 문제**: "vla"가 인기 검색어인데 우리 page rank가 5.8로 1페이지 끄트머리. **순위 강화 필요**.

**후속 콘텐츠 후보**:

1. **VLA 모델 비교 2026: π0 vs OpenVLA vs Helix vs RT-2** (벤치마크형 — VLA 검색자가 정확히 찾는 것)
2. **VLA 벤치마크: RLBench 89.4% vs LIBERO — 무엇이 진짜 지표인가** (long-tail에 정확 수치)
3. **Pebblous PebbloSim × VLA — 시뮬레이션이 VLA 학습을 어떻게 돕는가** ⭐ (브랜드 결합)
4. **VLA 다음은? — World Model의 등장** (이미 인접 글 있음, 연결 강화)

**ROI 평가**: 높음. 노출 2,429 × CTR 5% = 잠재 클릭 120 (현재 37의 3배).

---

### 7️⃣ 기타 단일 — nanoclaw, x402, nemotron

각각 단일 페이지에서 작지만 깨끗한 트래픽. 시리즈화 필요한 토픽 아님. 현재 유지.

**예외**: **nanoclaw**는 우리 내부 프로젝트라 별도 시리즈 운영 가치 있음. 이미 `story/nanoclaw-*-pb` 시리즈가 있음.

---

## 통합 우선순위 매트릭스

| 우선순위 | 작업 | 예상 추가 클릭/월 | 작업량 |
|---|---|---:|---|
| 🔴 **P0** | Palantir Hub 페이지 (분산 5+개 통합) | +100~200 | 중 (구조화) |
| 🔴 **P0** | UrbanGPT × Pebblous PebbloSim ⭐ | +50~150 | 대 (신규 글) |
| 🟠 **P1** | VLA 모델 비교 2026 (π0/OpenVLA/Helix/RT-2) | +80~200 | 대 (리서치 깊이 필요) |
| 🟠 **P1** | GitNexus vs GitHub Copilot Workspace 비교 | +40~100 | 중 |
| 🟡 **P2** | DataClinic × ISO 5259 ⭐ | +20~50 | 중 |
| 🟡 **P2** | UrbanGPT 2.0 vs 1.0 변천사 | +30~80 | 중 |
| 🟢 **P3** | ISO 5259 통합 Hub | +20~40 | 중 |
| 🟢 **P3** | AI for Science 비교 시리즈 | +20~50 | 중 |

⭐ = "Pebblous가 보는 ~" 브랜드 트랙 (비평글 진단 해결)

## 브랜드 검색 트랙 — 시그니처 시리즈 ⭐

비평글의 핵심 진단 "**브랜드 검색 트래픽 없음**"의 해결책. 검증된 키워드 옆에 "Pebblous"를 자연스럽게 박아 브랜드 누적.

**검증된 사례**: `urbangpt2-pebblous/ko/` 페이지 CTR 31.8% — **제품명 + 회사명을 슬러그/타이틀에 묶었더니 브랜드 누적 시작**.

### 시리즈 컨셉
- 제목 형식: **"Pebblous가 보는 {강한 키워드}"** (KO) / **"How Pebblous Sees {Strong Keyword}"** (EN)
- 슬러그 형식: `{keyword}-pebblous` (KO 사례 검증된 패턴)
- 톤: 분석가 시점 (warm expert), 우리 제품·연구를 자연스럽게 인용
- 분기 발행: 매월 1편 (12개월 = 12편)

### 1차 후보 (검증된 키워드 × 브랜드 결합)
1. **Pebblous가 보는 UrbanGPT — Spatial AI의 데이터 전략** (P0)
2. **Pebblous가 보는 Palantir — 온톨로지 비교 분석** (P0)
3. **Pebblous가 보는 GitNexus — Code Knowledge Graph 시대** (P1)
4. **Pebblous가 보는 VLA — Physical AI 데이터 인프라 관점** (P1)
5. **Pebblous가 보는 ISO 5259 — 표준을 제품으로 옮기는 법** (P2)

## 작업 일정 제안

| 시점 | 작업 |
|---|---|
| 5월 셋째 주 | P0 1편 — Palantir Hub 페이지 (기존 자산 통합, 신규 글 작성 부담 작음) |
| 5월 넷째 주 | P0 1편 — "Pebblous가 보는 UrbanGPT" (시그니처 1호) |
| 6월 첫째 주 | HAI Index 메타 실험 D+28 결과 검토, 패턴 검증 시 12개 일괄 적용 |
| 6월 둘째 주 | P1 1편 — VLA 모델 비교 2026 |
| 6월 셋째 주 | P1 1편 — "Pebblous가 보는 Palantir" (시그니처 2호) |
| 6월 넷째 주 | 1차 효과 측정 + 7월 계획 수립 |

## 측정 지표

매월 다음을 GSC에서 확인:
- **사람 클릭 절대값** (KPI 재정의 결과 적용)
- **브랜드 쿼리 노출 수** ("pebblous", "페블러스" 단독 또는 제품명 결합)
- **{cluster} 쿼리의 노출/클릭 합계** (클러스터별 성장)
- **CTR by device** (모바일+태블릿 CTR을 진짜 KPI로)

## 사용한 도구
- `tools/seo/gsc-bot-filter.py`
- GSC export: `~/Screenshots/2026-05-15 PBLS Blog GSC/`

## 다음 단계
- B-1 ✅ 완료 (본 문서)
- B-2: "Pebblous가 보는 ~" 시그니처 시리즈 첫 글 (UrbanGPT) 기획
- B-3: `{keyword}-pebblous` 슬러그 컨벤션 문서화
- B-4: 6개월 콘텐츠 로드맵 캘린더 정리
- B-5: 첫 글 발행 (report-produce 또는 blog-produce)
