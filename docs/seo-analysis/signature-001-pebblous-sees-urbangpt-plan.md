# 시그니처 1호 기획: "Pebblous가 보는 UrbanGPT"

## 메타데이터

| 항목 | 값 |
|---|---|
| 시리즈 | "Pebblous가 보는 ~" (브랜드 트랙) |
| 1호 토픽 | UrbanGPT (Spatial AI) |
| 발행 예정 | 2026년 5월 넷째 주 |
| 카테고리 | report (심층조사 보고서) |
| 사용 스킬 | `report-produce` |

## 왜 UrbanGPT인가 (1호 선택 근거)

| 근거 | 데이터 |
|---|---|
| 가장 강한 검증된 트래픽 노드 | 8개 변종 쿼리에서 241 클릭, CTR 10.8% (28일) |
| 이미 `{keyword}-pebblous` 패턴 검증 | 기존 `urbangpt2-pebblous/ko/` CTR 31.8% |
| 시리즈 첫 글로 안전 | 검증된 키워드라 시그니처 효과를 빠르게 측정 가능 |
| 비평글의 핵심 비판 직접 응답 | "UrbanGPT 1개 키워드 집중" → 같은 토픽의 다른 각도 |

## 기존 페이지와 차별화

### 기존 페이지(`urbangpt2-pebblous`)의 한계

기존은 **소개·분석형** 글: "UrbanGPT 2.0이 뭔지 + 페블러스가 어떻게 연결되는지". 7개 섹션 구조:

```
1. Urban-GPT Alpha에서 UrbanGPT 2.0으로
2. 기술 스택: 세 개의 레이어
3. 핵심 기능: 설계를 바꾸는 세 가지
4. 미래 로드맵: GIS와 환경 데이터의 통합
5. AI 도시설계의 핵심 과제: 데이터 품질
6. 페블러스가 연결되는 지점       ← 결합 섹션이 1개뿐
7. 결론
```

### 시그니처 1호의 차별 포인트

**관점 글로 포지셔닝**. "UrbanGPT가 뭔가"는 이미 있음. 이번엔 **"UrbanGPT 같은 Spatial AI를 어떻게 평가할 것인가"** — 페블러스의 데이터 품질·시뮬레이션 관점에서 본 평가 프레임워크.

## 1호 제안 — 제목·메타·구조

### 제목 후보 (검증된 패턴 적용)

**SEO 제목** (`<title>`) — 검색 키워드 중심:
```
UrbanGPT 평가하기 — Spatial AI 데이터 품질 5가지 기준 | 페블러스
```

**본문 제목** (`mainTitle`) — 감성 후크:
```
Spatial AI에 점수를 매긴다면
```

**부제** (`subtitle`):
```
페블러스가 UrbanGPT를 분석하며 만든 Spatial AI 평가 프레임워크 5가지
```

### Meta description
```
UrbanGPT 2.0 같은 Spatial AI를 어떻게 평가할까. 페블러스가 자체 PebbloSim
운영 경험에서 도출한 5가지 데이터 품질 기준 — Geo 정합성, Scale 일관성,
GFA 검증, 시나리오 다양성, Sim-to-Real Gap. 실무 도구로 사용 가능한
체크리스트 형식.
```

### 슬러그
```
project/UrbanGPT/spatial-ai-evaluation-pebblous/
```

(`{keyword}-pebblous` 패턴 변형 — keyword를 `spatial-ai-evaluation`으로 확장해 새 노드 생성)

### tags
```json
["UrbanGPT", "Spatial AI", "AI 도시설계", "데이터 품질", "PebbloSim",
 "Sim-to-Real Gap", "GFA", "Geo Validation", "평가 프레임워크", "STF Labs"]
```

## 본문 구조 (7섹션)

```
Executive Summary
  └─ Spatial AI가 폭발적으로 등장 중. 그런데 누구도 "어떻게 평가할지" 합의 없음.
     페블러스가 PebbloSim을 만들며 도출한 5가지 평가 기준을 공유.

1. Spatial AI의 부상 — UrbanGPT를 사례로
  └─ UrbanGPT 2.0 등장. 비슷한 흐름: Cesium AI, Esri GeoAI, Mapbox GenAI
  └─ 공통: 자연어 → 공간 구조 생성

2. 왜 평가가 어려운가
  └─ Spatial AI 출력 = 3D 모델 + 메타데이터 + 시나리오
  └─ 기존 LLM 벤치마크(MMLU 등)로는 측정 불가능
  └─ 시각적 그럴듯함 ≠ 실제 사용 가능성

3. 페블러스의 5가지 평가 기준 ⭐ (핵심 섹션)
  ├─ 3.1. Geo 정합성 (Geographic Coherence)
  │       — 생성된 좌표·축척이 실제 지리와 맞는가
  ├─ 3.2. Scale 일관성 (Scale Consistency)
  │       — 건물·도로·식재의 크기 비율이 현실적인가
  ├─ 3.3. GFA 검증 (Gross Floor Area Validation)
  │       — 용적률·건폐율이 법규와 충돌하지 않는가
  ├─ 3.4. 시나리오 다양성 (Scenario Coverage)
  │       — 단일 시드에서 얼마나 다양한 변형 생성하는가
  └─ 3.5. Sim-to-Real Gap 측정
          — 실제 도시 데이터와의 거리(F-distance 등)

4. UrbanGPT 2.0에 5기준 적용 — 평가 결과
  └─ 각 기준별 점수/관찰 (표 형식)
  └─ 강점: Geo 정합성, Scale 일관성
  └─ 약점: GFA 검증(법규 미연동), Sim-to-Real Gap 측정 도구 없음

5. PebbloSim과의 결합 가능성 ⭐ (브랜드 결합 섹션)
  └─ UrbanGPT 출력 → PebbloSim 시뮬레이션 → 평가 결과 피드백
  └─ 구체 워크플로우 다이어그램
  └─ "STF Labs와 우리는 이 파이프라인을 실험 중"

6. Spatial AI 평가의 미래
  └─ ISO/IEC 23894 (AI 신뢰성), ISO/IEC 5259 데이터 품질
  └─ Spatial AI에 표준 적용은 우리가 추진 중인 영역

7. 결론 — 평가가 곧 시장 진입 장벽
  └─ 평가 프레임워크를 가진 팀이 시장을 선점
  └─ 페블러스의 자리

References / FAQ
```

## 다른 페이지로 차별화 비교

| 측면 | 기존 `urbangpt2-pebblous` | 시그니처 1호 (계획) |
|---|---|---|
| 톤 | 소개·분석 | 관점·평가 |
| 핵심 자산 | UrbanGPT 2.0 분석 | **5가지 평가 프레임워크** (재사용 가능 IP) |
| 페블러스 결합 | 1개 섹션 | 1개 결합 섹션 + 평가 프레임워크 자체가 페블러스 IP |
| SEO 타깃 | "urbangpt" 핵심 키워드 | "spatial ai 평가", "ai 도시설계 품질", "spatial ai benchmark" 신규 키워드 |
| 차별화 가치 | 첫 정보 제공 | 업계 평가 도구 (재인용 가능) |

## SEO 키워드 분석

### 1차 타깃 키워드 (검증된 노드)
- UrbanGPT, urbangpt 2.0, urban gpt (이미 우리가 강함)

### 2차 타깃 키워드 (신규 영역 개척)
- "spatial ai 평가" / "spatial ai evaluation"
- "ai 도시설계 품질" / "urban ai quality"
- "spatial ai benchmark"
- "gfa validation ai"
- "sim-to-real gap urban"

### 3차 long-tail
- "urbangpt 평가 방법"
- "spatial ai 한계"
- "ai 도시설계 정확도"

## 기대 효과 (가설)

**3개월 차 KPI**:
- 신규 long-tail 쿼리 잡힘: 5~10개 (clicks ≥ 1 기준)
- 기존 UrbanGPT 클러스터에 +50 클릭/월 추가
- "spatial ai evaluation" 같은 신규 키워드에 우리가 1페이지 진입
- **재인용 가능성**: 평가 프레임워크 형식이라 외부 블로그·발표에 인용될 가능성 (백링크 효과)

## 작성 방법 (실행 옵션)

### 옵션 A: `report-produce` 스킬 전체 자동 (권장)
- 입력: 본 기획서를 컨텍스트로 전달
- 출력: 기획 → 3트랙 리서치(논문/업계/데이터) → 합성 → KO+EN HTML → 퍼블리싱
- 작업 시간: 1세션 (1~2시간), 사람 개입은 컨펌만

### 옵션 B: 수동 작성
- 기획서를 source MD로 변환 → `blog-write` 스킬로 HTML 생성
- 더 세밀한 컨트롤 가능, 시간 더 들음

### 옵션 C: 하이브리드
- 리서치만 자동(`report-planner` + 3 researcher 에이전트)
- 본문 작성은 수동 (페블러스 관점 직접 작성)

## 발행 전 체크리스트

- [ ] 슬러그가 `spatial-ai-evaluation-pebblous` 형식인지
- [ ] `<title>`이 50~60자, "UrbanGPT" 키워드 앞쪽 1/3, ` | 페블러스` 접미사
- [ ] `subtitle`에 "페블러스" 명시
- [ ] description이 외부 키워드(UrbanGPT, Spatial AI, GFA) + 페블러스(PebbloSim) 한 문장 결합
- [ ] tags에 외부 키워드(10개) + 페블러스 제품명(PebbloSim) 혼합
- [ ] 본문 5장(PebbloSim 결합) 섹션이 구체적·분석적이고 광고 톤 없음
- [ ] 평가 프레임워크 5기준이 재사용 가능한 형식 (표·체크리스트)
- [ ] KO + EN 동시 발행 (CLAUDE.md bilingual parity rule)
- [ ] FAQ 7개 이상 (PebblousPage.init faqs[])
- [ ] OG 이미지 생성
- [ ] articles.json 등록 (KO + EN 2개)
- [ ] seo-check 통과
- [ ] changelog 기록

## 측정 일정

| 시점 | 측정 항목 |
|---|---|
| D+0 발행 후 | GSC Request indexing |
| D+7 | URL Inspection 인덱싱 확인 |
| D+14 | 신규 long-tail 쿼리 잡히기 시작했는지 |
| D+28 | 첫 클릭 발생 / "spatial ai evaluation" 같은 신규 키워드 노출 시작 |
| D+90 | 본격 효과 측정 (백링크 / 재인용 / 클러스터 확장) |

## 참조

- 패턴: `docs/keyword-pebblous-pattern.md`
- 캘린더: `docs/seo-analysis/2026-content-calendar-h2.md`
- 키워드 분석: `docs/seo-analysis/2026-05-16-validated-keywords-content-roadmap.md`
- 기존 페이지: `project/UrbanGPT/urbangpt2-pebblous/ko/`
