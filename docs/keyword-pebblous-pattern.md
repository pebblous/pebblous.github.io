# `{keyword}-pebblous` 패턴 — 검증된 브랜드 누적 슬러그 컨벤션

## 한 줄 요약

**검증된 강한 키워드** 옆에 **Pebblous(우리 회사명/제품명)를 슬러그·타이틀·메타에 함께 박아** 브랜드 검색 트랙을 같이 깐다.

## 왜 이 패턴인가 — GSC가 증명한 사례

`project/UrbanGPT/urbangpt2-pebblous/ko/` 페이지가 28일 기준 GSC에서 보여준 수치:

| 지표 | 값 |
|---|---|
| Position | 평균 ~2.7 |
| CTR | **31.8%** (블로그 전체 평균의 6배) |
| 잡힌 쿼리 | `urbangpt 2.0` (88 imp), `urban gpt 2.0` (83 imp), `urbangpt 2.0 beta` (72 imp) 등 8개 변종 |

같은 영역의 다른 페이지들과 비교:
- 평균 단일 페이지 CTR: 3~6%
- `urbangpt2-pebblous/ko/` CTR: 31.8% — **6배 차이**

**이 페이지가 검증한 가설**: 슬러그·타이틀·메타에 *제품명 + 회사명*을 함께 박으면, Google이 두 키워드를 묶어서 인지하고 **브랜드 결합 쿼리에 우선 노출**한다.

## 5가지 구성 요소

성공 사례를 분석한 결과 다음 5가지가 모두 충족되어야 효과가 난다:

### 1. 슬러그: `{keyword}-pebblous` 또는 `{keyword}-{product}`

```
project/UrbanGPT/urbangpt2-pebblous/    ✅
project/Palantir/palantir-foundry-pebblous/  ← 예시
blog/gitnexus-pebblous-perspective/      ← 예시
```

**규칙**:
- 검증된 강한 키워드를 앞에 둠 (Google이 URL 키워드를 가중치 부여)
- `-pebblous` 또는 `-{product}` (PebbloSim, DataClinic, AADS, NanoClaw 등)로 끝맺음
- 영문 슬러그만 사용 (한글 슬러그는 URL 인코딩 문제)

### 2. `<title>` (SEO 제목): 검색 키워드 중심 + 자연스러운 회사명

✅ **좋은 예** (검증된 사례):
```
UrbanGPT 2.0 — 텍스트 한 줄로 도시를 설계하다 | 페블러스
```

- "UrbanGPT 2.0" 정확 키워드 앞에 배치
- 후크 ("텍스트 한 줄로 도시를 설계하다") 추가
- ` | 페블러스` 접미사로 브랜드 매번 노출

❌ **나쁜 예**:
```
UrbanGPT 2.0 분석                       ← 회사명 없음, 브랜드 누적 안 됨
페블러스가 본 UrbanGPT 2.0              ← 검색 키워드가 뒤로 밀림
```

### 3. `mainTitle` (h1, 본문 제목): 감성 후크 (검색 키워드 ≠ 본문 제목)

```
mainTitle: "UrbanGPT 2.0 — 텍스트 한 줄로 도시를 설계하다"
subtitle:  "STF Labs의 공간 AI가 바꾸는 도시설계 워크플로우, 그리고 페블러스의 역할"
```

- subtitle에 **"페블러스의 역할" 명시** — 본문 상단에서 우리 관점이 무엇인지 약속
- `docs/title-strategy.md`의 "SEO 제목 ≠ 본문 제목" 원칙과 일치

### 4. `description` (메타): 두 키워드를 한 문장에 자연스럽게 결합

✅ **좋은 예** (검증된 사례):
```
UrbanGPT 2.0 Beta — STF Labs가 공개한 AI 도시설계 도구. 텍스트 한 줄로 3D 도시
레이아웃을 생성하고 GFA를 최적화하는 공간 AI의 현재와 페블러스 제품의 연계
가능성을 분석합니다.
```

- 외부 키워드("UrbanGPT 2.0 Beta", "STF Labs", "GFA", "공간 AI")
- 페블러스 키워드("페블러스 제품의 연계")
- 한 문장 안에서 자연 결합

### 5. `tags`: 외부 키워드 + 페블러스 제품명 혼합

```json
"tags": ["UrbanGPT", "도시설계AI", "STF Labs", "GPT-4o", "Grasshopper",
         "GFA", "DataClinic", "PebbloSim", "합성데이터", "공간AI"]
```

- 외부 핵심 키워드: UrbanGPT, 도시설계AI, STF Labs 등
- 페블러스 제품: DataClinic, PebbloSim
- 둘이 같은 tag 리스트에 있어 Google이 토픽 연관성 인지

## 본문 구조 — 정렬되어야 할 콘텐츠 형식

브랜드 누적이 효과를 내려면 글 자체가 다음 구조여야 한다:

```
1. 도입부 — 외부 키워드를 정의 (UrbanGPT가 뭔지)
2. 분석 본문 — 우리의 관점 (페블러스가 어떻게 보는지)
3. 결합 섹션 ⭐ — "{외부 키워드}와 {페블러스 제품} 결합 가능성"
4. 결론 — 우리 제품 인용 (자연스럽게, 광고 톤 X)
```

특히 **3번 결합 섹션**이 핵심. 페블러스 제품(PebbloSim, DataClinic, AADS, NanoClaw 등)과 어떻게 시너지가 나는지 구체적으로 적는다.

✅ **좋은 결합 섹션 예**:
> "UrbanGPT 2.0이 생성한 3D 도시 레이아웃은 그 자체로는 가설일 뿐이다. 페블러스 PebbloSim이 이 레이아웃 위에 교통·인구·환경 시나리오를 시뮬레이션하면, '실행 가능한 도시 설계안'으로 진화한다. 우리는 이 결합을 STF Labs와의 협업에서 검증 중이다."

❌ **나쁜 결합 섹션 예**:
> "참고로 페블러스도 비슷한 제품이 있다."  ← 광고 톤, 구체성 없음

## 발행 후 단계

1. **GSC Request indexing** — 발행 후 24시간 안에 GSC에서 새 URL 강제 크롤링 요청
2. **2주차 측정** — `{외부키워드} pebblous` 같은 결합 쿼리에 노출 시작했는지 확인
3. **4주차 측정** — `{외부키워드}` 단일 쿼리에서도 우리 페이지 순위 상승했는지 (검색 의도 결합 효과)

## 적용 가이드

새로운 시그니처 글 작성 시 체크리스트:

- [ ] 슬러그가 `{keyword}-pebblous` 또는 `{keyword}-{product}` 형식인가
- [ ] `<title>`에 외부 키워드가 앞쪽 1/3에 있고 ` | 페블러스` 접미사가 있는가
- [ ] `subtitle`에 "페블러스의 역할" 또는 "{제품}과의 연계" 같은 표현이 있는가
- [ ] `description`이 외부 키워드 + 페블러스를 한 문장에 자연 결합하는가
- [ ] `tags`에 외부 키워드 + 페블러스 제품명이 함께 있는가
- [ ] 본문에 "결합 섹션"이 구체적으로 작성되어 있는가
- [ ] 광고 톤이 아닌 분석가 톤인가

## 시리즈 적용 후보 (B-1 로드맵에서)

이 패턴을 적용할 1차 후보 5편:

| # | 외부 키워드 | 결합 제품 | 슬러그 후보 |
|---|---|---|---|
| 1 | UrbanGPT | PebbloSim | `urbangpt-pebblosim` 또는 새 `urbangpt-pebblous-perspective` |
| 2 | Palantir Ontology | CURK Ontology | `palantir-curk-ontology` |
| 3 | GitNexus | (Code 분석 자산) | `gitnexus-pebblous-perspective` |
| 4 | VLA Models | PebbloSim + AADS | `vla-pebblous-data-infra` |
| 5 | ISO 5259 | DataClinic | `iso5259-dataclinic-pebblous` |

## 주의 — 과용 금지

이 패턴은 **검증된 강한 외부 키워드**에만 적용한다. 검증 안 된 키워드에 회사명 결합하면:
- Google이 "키워드 스터핑"으로 의심 (페널티 위험)
- 사용자에게도 자기 홍보 톤으로 보임 (CTR 하락)

**검증 기준**: 해당 외부 키워드가 GSC에서 clicks ≥ 3, impressions ≥ 10, CTR ≥ 5%인 검증된 노드일 때만.

## 참조

- 검증 사례: `project/UrbanGPT/urbangpt2-pebblous/ko/index.html`
- 원본 패턴 발견: `docs/seo-analysis/2026-05-16-validated-keywords-content-roadmap.md`
- 상위 전략 가이드: `docs/title-strategy.md`
- 관련 SEO 분석: `docs/seo-analysis/2026-05-16-bot-traffic-kpi-redefinition.md`
