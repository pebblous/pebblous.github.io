# 인계 문서 — 시그니처 1호 발행 (B-5)

> **목적**: 다음 세션 클로드가 이 문서만 읽고 시그니처 1호 발행 작업을 마칠 수 있게 한다.
> **작성일**: 2026-05-16
> **수행자**: 다음 세션 (이 세션은 기획까지만)

---

## 작업 한 줄 요약

**"Pebblous가 보는 UrbanGPT — Spatial AI 평가 5가지 기준 제안"** 보고서를 KO+EN으로 작성·발행한다.

## 발행 정보 (확정됨)

| 항목 | 값 |
|---|---|
| 제목 (SEO `<title>`) | `UrbanGPT 평가하기 — Spatial AI 데이터 품질 5가지 기준 \| 페블러스` |
| 본문 제목 (`mainTitle`) | `Spatial AI에 점수를 매긴다면` |
| 부제 (`subtitle`) | `페블러스가 PebbloSim 관점에서 제안하는 Spatial AI 평가 프레임워크 5가지` |
| 슬러그 | `project/UrbanGPT/spatial-ai-pebblous/` (KO+EN) |
| 카테고리 | `report` |
| 발행일 | 2026-05-19 (5월 셋째 주 월요일 권장) |
| 카테고리 컬러 | tech/business 톤 |

## 핵심 톤 원칙 ⛔ 절대 어기지 말 것

**"Pebblous가 본다" = 우리의 관점·제안, 기존 IP의 공유가 아니다.**

| ❌ 절대 쓰지 말 것 | ✅ 반드시 이 표현 |
|---|---|
| "페블러스가 PebbloSim 운영 경험에서 도출한 5가지 기준" | "페블러스가 PebbloSim 관점에서 제안하는 5가지 평가 기준" |
| "우리가 실무에서 사용하는 평가 방법" | "우리가 제안하는 평가 프레임워크" |
| "PebbloSim 팀의 내부 표준" | "PebbloSim 팀이 Spatial AI를 평가한다면 — 5가지 제안" |

이유: 실제로 페블러스에는 이런 평가 기준이 *없음*. 가설로 제안하는 글이라는 점이 명확해야 시리즈 전체 신뢰가 유지된다.

## 본문 구조 (7섹션)

```
Executive Summary
  └─ Spatial AI 폭증, 평가 합의 부재. 페블러스가 PebbloSim 관점에서 5가지 제안.

1. Spatial AI의 부상 — UrbanGPT를 사례로
  └─ UrbanGPT 2.0 등장. 비슷한 흐름: Cesium AI, Esri GeoAI, Mapbox GenAI
  └─ 공통: 자연어 → 공간 구조 생성

2. 왜 평가가 어려운가
  └─ Spatial AI 출력 = 3D 모델 + 메타데이터 + 시나리오
  └─ 기존 LLM 벤치마크(MMLU 등)로는 측정 불가능
  └─ 시각적 그럴듯함 ≠ 실제 사용 가능성

3. 페블러스가 제안하는 5가지 평가 기준 ⭐ (핵심 섹션)
  ├─ 3.1. Geo 정합성 (Geographic Coherence) — 생성된 좌표·축척이 실제 지리와 맞는가
  ├─ 3.2. Scale 일관성 (Scale Consistency) — 건물·도로·식재 크기 비율이 현실적인가
  ├─ 3.3. GFA 검증 (Gross Floor Area Validation) — 용적률·건폐율이 법규와 충돌하지 않는가
  ├─ 3.4. 시나리오 다양성 (Scenario Coverage) — 단일 시드에서 얼마나 다양한 변형 생성하나
  └─ 3.5. Sim-to-Real Gap 측정 — 실제 도시 데이터와의 거리(F-distance 등)

4. UrbanGPT 2.0에 5기준 적용 — 평가 결과 (가설)
  └─ 각 기준별 점수/관찰 (표 형식)
  └─ 강점: Geo 정합성, Scale 일관성
  └─ 약점: GFA 검증(법규 미연동), Sim-to-Real Gap 측정 도구 없음
  ※ 이 평가는 외부에서 관찰 가능한 정보 기반의 *추정*임을 명시

5. PebbloSim과의 결합 가능성 ⭐ (브랜드 결합 섹션)
  └─ UrbanGPT 출력 → PebbloSim 시뮬레이션 → 평가 결과 피드백
  └─ 구체 워크플로우 다이어그램
  └─ "이 결합은 페블러스가 STF Labs와 가능성을 탐색 중인 영역"
  ※ "이미 실험 중"은 사실 확인 안 됐으면 "가능성을 탐색 중" 또는 "제안"으로

6. Spatial AI 평가의 미래
  └─ ISO/IEC 23894 (AI 신뢰성), ISO/IEC 5259 데이터 품질
  └─ Spatial AI에 표준 적용은 우리가 관심 두는 영역

7. 결론 — 평가가 곧 시장 진입 장벽
  └─ 평가 프레임워크를 가진 팀이 시장을 선점
  └─ 페블러스가 이 자리를 노리는 이유

References / FAQ
```

## 메타 4종 (HTML)

```html
<title>UrbanGPT 평가하기 — Spatial AI 데이터 품질 5가지 기준 | 페블러스</title>
<meta name="description" content="UrbanGPT 2.0 같은 Spatial AI를 어떻게 평가할까. 페블러스가 PebbloSim 관점에서 제안하는 5가지 데이터 품질 기준 — Geo 정합성, Scale 일관성, GFA 검증, 시나리오 다양성, Sim-to-Real Gap. 실무 도구로 사용 가능한 체크리스트 형식.">

<meta property="og:title" content="Spatial AI에 점수를 매긴다면 — 페블러스가 제안하는 5가지 평가 기준">
<meta property="og:description" content="UrbanGPT 2.0을 사례로, PebbloSim 관점에서 본 Spatial AI 평가 프레임워크 5가지 제안.">
```

EN 메타는 다음 톤으로 (KO 직역 금지, 영어권 검색의도 기준):

```html
<title>How to Evaluate Spatial AI — 5 Quality Criteria from PebbloSim's Perspective | Pebblous</title>
<meta name="description" content="UrbanGPT 2.0 case study. Five data quality criteria proposed from PebbloSim's perspective — geographic coherence, scale consistency, GFA validation, scenario coverage, Sim-to-Real gap. A practical checklist for evaluating Spatial AI.">
```

## tags (articles.json)

```json
["UrbanGPT", "Spatial AI", "AI 도시설계", "데이터 품질", "PebbloSim",
 "Sim-to-Real Gap", "GFA", "Geo Validation", "평가 프레임워크", "STF Labs"]
```

EN:
```json
["UrbanGPT", "Spatial AI", "Urban AI", "Data Quality", "PebbloSim",
 "Sim-to-Real Gap", "GFA", "Geo Validation", "Evaluation Framework", "STF Labs"]
```

## 실행 방법 (강력 권장: report-produce)

```
/report-produce "Pebblous가 보는 UrbanGPT — Spatial AI 평가 5가지 기준 제안"
```

또는 명시적 호출:
```
report-produce 스킬 실행. 주제는 본 문서의 "발행 정보" 표대로.
다음 파일들을 컨텍스트로 사용:
  - docs/seo-analysis/HANDOFF-signature-001-publish.md (본 문서)
  - docs/seo-analysis/signature-001-pebblous-sees-urbangpt-plan.md (원 기획서)
  - docs/keyword-pebblous-pattern.md (슬러그 컨벤션)
  - docs/title-strategy.md (제목 전략)
  - project/UrbanGPT/urbangpt2-pebblous/ko/index.html (기존 페이지 — 중복 피하기)
```

리서치 트랙별 키워드:
- **논문 (arxiv-researcher)**: "Spatial AI evaluation", "3D scene quality metrics", "Sim-to-Real gap urban", "Fréchet distance 3D"
- **업계 (industry-researcher)**: UrbanGPT 2.0, Cesium AI, Esri GeoAI, Mapbox GenAI, STF Labs 동향
- **데이터 (data-researcher)**: 도시설계 AI 시장 규모, GFA·용적률 자동검증 솔루션 현황, 합성 도시데이터 시장

## 브랜치 정책

**현재 main에 시그니처 1호 PR이 안 머지된 상태**. 작업 순서:

1. `feat/signature-001-urbangpt-plan` PR을 먼저 main에 머지 (또는 새 브랜치를 main에서 따고 시작)
2. 새 브랜치 생성: `feat/signature-001-urbangpt-publish`
3. report-produce 실행 (스킬이 자동으로 새 브랜치 사용할 수 있으니 확인)
4. 발행 작업 (HTML + articles.json + OG + seo-check + changelog)
5. PR 생성, 사용자 머지 대기

## 발행 전 체크리스트

- [ ] 슬러그가 `project/UrbanGPT/spatial-ai-pebblous/{ko,en}/index.html`
- [ ] `<title>` 길이 50~60자 (` | 페블러스` 포함), "UrbanGPT" 앞쪽 1/3
- [ ] `subtitle`에 "페블러스" + "PebbloSim 관점" + "제안" 명시
- [ ] description: 외부 키워드 + PebbloSim 한 문장 결합, 160자 이내
- [ ] tags: 외부 키워드 + PebbloSim 혼합 (10개)
- [ ] 본문 톤: 모든 "5가지 기준" 언급에서 "제안" 형식 유지 (도출/사용/확립 금지)
- [ ] 5장 PebbloSim 결합 섹션: 구체적, 광고 톤 없음, "가능성 탐색 중" 톤
- [ ] KO + EN 동시 발행
- [ ] FAQ 7개 이상 (PebblousPage.init faqs[])
- [ ] OG 이미지 KO + EN 각각
- [ ] articles.json KO + EN 2개 등록 (필드명 컨벤션 — CLAUDE.md 참조)
- [ ] seo-check 통과
- [ ] changelog.jsonl 기록
- [ ] PR description에 본 인계 문서 링크

## 발행 후 사용자 액션 (안내해줄 것)

1. **GSC Request indexing** (배포 ~5분 후): URL 입력 → "Request indexing"
2. **D+14 측정 스케줄**: 기존 routine `trig_013X91SdsobXV63MKXga3jip`가 5/30에 HAI Index 측정함. 시그니처 1호용 D+14 스케줄(6/2)도 같은 방식으로 등록 권장

## 다음 작업 (시그니처 2호 Palantir) — 같은 세션 또는 후속

이 글 발행 후 같은 세션 또는 다음 세션에서 시그니처 2호 진행:

- 토픽: Palantir (검증된 두 번째 키워드, 6 쿼리 60 클릭)
- 슬러그: `palantir-pebblous` 또는 `palantir-curk-pebblous` (CURK 온톨로지와 결합)
- 부산물: 분산된 5+개 Palantir 관련 페이지를 본문에서 인용·연결해서 자연스럽게 hub 효과
- 동일한 톤 원칙 (제안형) 유지

## 참조 문서

- 기획 원문: `docs/seo-analysis/signature-001-pebblous-sees-urbangpt-plan.md`
- 슬러그 컨벤션: `docs/keyword-pebblous-pattern.md`
- 캘린더: `docs/seo-analysis/2026-content-calendar-h2.md`
- 키워드 분석: `docs/seo-analysis/2026-05-16-validated-keywords-content-roadmap.md`
- KPI 재정의: `docs/seo-analysis/2026-05-16-bot-traffic-kpi-redefinition.md`
- 봇 분석 도구: `tools/seo/gsc-bot-filter.py`
- 제목 전략: `docs/title-strategy.md`
- 블로그 작성 규칙: `CLAUDE.md` (Branch Policy + ⛔ Blog Article Mandatory Protocol)
- 기존 UrbanGPT 페이지 (참조 — 중복 피하기): `project/UrbanGPT/urbangpt2-pebblous/{ko,en}/index.html`

## 이번 세션 컨텍스트 한 줄 요약

블로그 CTR 0.1% 문제를 파고들다가:
1. canonical 깨짐 55개 발견 (영향 미미, P3 강등)
2. 봇 트래픽 85% 추정 (KPI 재정의, `gsc-bot-filter.py` 작성)
3. 진짜 사람 CTR은 5%로 정상 (비평글의 CTR 진단 무효화)
4. 진짜 문제는 콘텐츠 포트폴리오 (비평글의 정당한 진단 3개)
5. 검증된 7개 키워드 클러스터 인벤토리화
6. `{keyword}-pebblous` 슬러그 패턴 (UrbanGPT KO CTR 31.8%) 컨벤션 문서화
7. 시그니처 시리즈 "Pebblous가 보는 ~" 6편 캘린더 작성
8. 시그니처 1호(UrbanGPT) 기획서 확정 — **이제 발행만 남음**

병행 진행 중:
- HAI Index EN 메타 수정 실험 (커밋 `d2c1d86f`) — D+14 측정 스케줄 `trig_013X91SdsobXV63MKXga3jip` 등록됨 (5/30 자동 깨어남)
