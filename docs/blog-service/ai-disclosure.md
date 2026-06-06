# AI 생성 콘텐츠 표시(Disclosure) 표준 — 결정 문서

> 이슈 [#39](https://github.com/joohaeng-pbls/blog-service/issues/39) 게이트(⛔ 표준 웹 조사) 결과 + 페블러스 고지 정책 확정.
> 작성: 2026-06-05 · 자산 2(메서드론). 사본(`pebblous/pebblous.github.io`)에 자동 미러됨.

## 1. 결정 요약

1. **카드 `prov-badge` 축소/제거** — 인덱스/허브/관련글 카드는 너무 좁아 AI 고지에 부적합. disclosure 용도 폐기.
2. **provenance STATE 관리 유지** — `articles.json`의 `provenance`(mode·gates·humanReviewed·publishReview) + validator([PR #37](https://github.com/joohaeng-pbls/blog-service/pull/37)). 데이터 층은 진실 소스로 유지.
3. **disclosure를 본문 byline으로 이전** — hero-meta 줄에 사람판독 고지 문구를 provenance에서 derive.
4. **고지 정책 = 항상 자발적 고지** — EU AI Act §50(4) 면제 충족 여부와 무관하게 모든 AI 생성 글에 고지. 페블러스가 *data provenance* 회사라는 브랜드 정합 + EC 초안 가이드라인도 자발적 고지를 금지하지 않음.

## 2. 핵심 모델 — 2축 직교 (Two Orthogonal Axes)

표준 조사로 확인된 가장 중요한 사실: **"어떻게 만들어졌나"와 "누가 편집 책임을 지나"는 별개 축이다.** 우리 provenance 스키마가 이미 이 둘을 분리하고 있다는 점이 표준과 정합한다.

| 축 | 질문 | provenance 소스 | 표준 |
|---|---|---|---|
| **생성 방식** (기계판독) | AI가 만들었나? | `mode` / `humanReviewed`(생성시) | IPTC Digital Source Type, C2PA assertion |
| **편집 책임** (면제 판단) | 사람이 실질 검토하고 책임지나? | `publishReview` (+ `humanReviewed`) | EU AI Act §50(4) 면제 조항 |

IPTC Digital Source Type는 *생성 방식*만 기술한다 — 사람이 사후 검토했는지는 담지 않는다. 따라서 **무인 생성**이든 **무인 생성+검수**든 생성 방식 enum은 동일(`trainedAlgorithmicMedia`)하고, 차이는 편집 책임 축에서만 드러난다. 이 직교성이 두 축을 모두 유지해야 하는 이유다.

## 3. 표준 레퍼런스 (2026-06 현재)

### 3.1 IPTC Digital Source Type — 기계판독 controlled vocabulary
출처: [cv.iptc.org/newscodes/digitalsourcetype](https://cv.iptc.org/newscodes/digitalsourcetype/) · [IPTC synthetic media 가이드](https://iptc.org/news/iptc-publishes-metadata-guidance-for-ai-generated-synthetic-media/)

이미지/미디어 메타데이터용 vocab. 우리에게 해당되는 값:

| ID | 라벨 | 의미 |
|---|---|---|
| `trainedAlgorithmicMedia` | Created using Generative AI | 생성형 AI가 만든 미디어 |
| `compositeWithTrainedAlgorithmicMedia` | Edited using Generative AI | 생성형 AI로 보정/편집(inpainting 등) |
| `digitalCreation` | Digital creation | 사람이 비생성 도구로 창작 |
| `humanEdits` | Human-edited media | 사람이 비생성 도구로 편집 |

> URI 형식: `http://cv.iptc.org/newscodes/digitalsourcetype/<ID>`. 이미지 IPTC `DigitalSourceType` 필드 또는 C2PA assertion에 넣는다.

### 3.2 EU AI Act 제50조 — 텍스트 고지 의무 + 면제
출처: [artificialintelligenceact.eu/article/50](https://artificialintelligenceact.eu/article/50/) · [EC 초안 가이드라인 해설(2026-05)](https://www.globalpolicywatch.com/2026/05/10-takeaways-european-commission-draft-guidelines-on-ai-transparency-under-the-eu-ai-act/)

- **§50(2)** — provider는 생성 산출물을 *기계판독 형식으로 표시*하고 AI 생성임을 탐지 가능하게 해야 함. **구체 기술 표준(C2PA/IPTC 등)은 아직 미지정** — Code of Practice + EU 표준화 작업 진행 중.
- **§50(4)** — *"Deployers of an AI system that generates or manipulates text which is published with the purpose of informing the public on matters of public interest shall disclose that the text has been artificially generated or manipulated."*
- **§50(4) 면제(verbatim)** — *"This obligation shall not apply where the use is authorised by law to detect, prevent, investigate or prosecute criminal offences or where the AI-generated content has undergone a process of human review or editorial control and where a natural or legal person holds editorial responsibility for the publication of the content."*
- **§50(5)** — 고지는 *"clear and distinguishable manner at the latest at the time of the first interaction or exposure."*
- **타임라인** — §50 전면 적용 **2026-08**. 초안 가이드라인 의견수렴 ~2026-06-03 종료.

#### ⚠️ 면제는 우리 축과 "부분만" 1:1 — 실질 검토 요건
이슈 #39의 가설은 "면제 = `humanReviewed`/`publishReview`와 1:1 매핑"이었으나, EC 초안 가이드라인의 **엄격 해석**으로 단서가 붙는다:

- 면제되려면 사람 검토가 **"deliberate examination of the substance of the content"** (내용 실질에 대한 의도적 검토)여야 한다.
- **맞춤법·문법·형식적 승인 등 피상적 검수는 면제 불가.**
- **문서화된 편집 워크플로우 + 책임자 명시** 필요.

→ 결과: 축은 매핑되지만 **`publishReview`의 *내용*이 실질 검토여야** 면제가 성립한다.
- ✅ 워크플로우 문서화 → `provenance.gates` + `engine.runId`
- ✅ 책임자 명시 → `publishReview.reviewedBy`(사람 이름)
- ⚠️ **실질성** → `publishReview.reviewedBy`가 "컨벤션·SEO·AI문체 QA"처럼 형식 검수만 기술하면 면제 미달 위험. **사실·주장·논지 검토를 명시**할 것.

> 예: data-freshness 글의 `reviewedBy: "JH (pre-publish QA: 컨벤션·SEO·AI문체)"` → 엄격 해석상 형식 검수. 면제를 주장하려면 `"JH (사실·논지 검토 + 컨벤션·SEO)"`처럼 실질 검토를 포함해 기록.

### 3.3 C2PA / Content Credentials
출처: [C2PA Spec 2.x](https://spec.c2pa.org/specifications/specifications/2.4/specs/C2PA_Specification.html) · [Explainer](https://spec.c2pa.org/specifications/specifications/2.2/explainer/_attachments/Explainer.pdf)

서명된 manifest에 assertion(생성 모델·프롬프트·편집 행위 등) 기록. **탐지기가 아니라 서명된 주장.** 이미지/미디어 중심(Adobe·OpenAI·Stability가 산출물에 임베드). 우리 provenance가 이미 동형 구조 — 이미지에 C2PA를 붙이면 IPTC DST를 assertion으로 운반 가능.

### 3.4 Schema.org — AI 저작 전용 속성 없음
출처: [schema.org/creativeWorkStatus](https://schema.org/creativeWorkStatus)

`creativeWorkStatus`는 라이프사이클(Draft/Published/Obsolete)용일 뿐 AI 저작 표시가 아니다. **HTML 텍스트 본문엔 견고한 기계판독 표준이 없다.** → 기계판독은 **이미지(OG/hero)에 IPTC DST(+선택 C2PA)** 로만, 텍스트 본문엔 박지 않는다.

### 3.5 언론 라벨 관행
단일 강제 표준 없음. "AI-generated content", "This image was created using artificial intelligence", Washington Times "AI News Desk" 바이라인 등. 실질적이고 사람이 읽히는 문구면 충분.

## 4. provenance → 고지 derive 명세 (정본)

byline은 hero-meta 줄 끝에 1개 span으로 붙는다:
`2026-06-05 · 페블러스 데이터커뮤니케이션팀 · ~6분 · ENG · AI 생성·사람 검수`

| provenance 상태 | 사람판독 byline (KO) | byline (EN) | 기계판독 IPTC DST(이미지) |
|---|---|---|---|
| `humanReviewed:false`, `publishReview` 없음/`reviewed:false` | **AI 자동 생성** | AI-generated | `trainedAlgorithmicMedia` |
| `humanReviewed:false` + `publishReview.reviewed:true` | **AI 생성 · 사람 검수** | AI-generated, editor-reviewed | `trainedAlgorithmicMedia` |
| `humanReviewed:true` | **AI 작성 · 사람 편집** | AI-assisted, human-edited | `compositeWithTrainedAlgorithmicMedia` |
| `provenance` 블록 없음 (수동·레거시) | (고지 없음) | — | — |

- **derive 함수**(예정): `PebblousProvenance.deriveDisclosure(provenance, isEn)` → `{ label, iptcSourceType, title }`.
- **툴팁(title)**: `증적: <라벨> · <reviewedBy 또는 trigger.source> · <recordedAt>` — 카드 배지의 기존 title 패턴 재사용.
- **고지 정책**: 위 표의 상위 3행은 `provenance`만 있으면 **항상** byline 노출(면제 여부 무관). 4행(수동)은 고지 없음.

## 5. 목표 구조 (2층)

- **기계판독**: 이미지(OG/hero)에 IPTC `DigitalSourceType` (+선택 C2PA assertion). 텍스트 본문엔 미적용(Schema.org 표준 부재).
- **사람판독**: hero-meta byline 고지 문구 (provenance에서 derive, KO+EN).

## 6. 구현 계획 (이슈 #39 다음 단계)

1. ✅ 표준 웹 조사 → 본 문서 (2026-06-05).
2. ✅ **byline 고지 컴포넌트** — 사본 `scripts/common-utils.js` hero-meta `parts[]`에 disclosure span. `PebblousProvenance.deriveDisclosure(provenance, isEn)` 신규. 소스 = `config.provenance`(no-fetch). (사본 PR #276)
3. ✅ **카드 `prov-badge` 축소** — 아이콘 전용. `card-renderer.js` + `css/card-styles.css`·`styles.css`. (사본 PR #276)
4. ✅ **provenance → HTML init 주입 도구** — `tools/inject-provenance.js`(진본, **node** — publish-prep 가 Engine 컨테이너에서 돌고 python3 부재(#33)이므로). articles.json 의 `provenance` 를 글 HTML 의 `PebblousPage.init({...})` 에 동기화(멱등). `blog-publish` 스킬 Step 2.6 + 백필. *이게 있어야 byline 이 실제 라이브에 노출됨* — provenance 진실 소스는 articles.json, 도구가 HTML init 으로 sync.
5. **(선택) 기계판독 메타 임베드** — `tools/generate-og-image.js` 또는 별도 단계에서 OG/hero 이미지에 IPTC DST 기록. C2PA는 후순위.

### 기존 작업과의 관계
- ✅ **유지**: [PR #37](https://github.com/joohaeng-pbls/blog-service/pull/37) provenance.publishReview 검증 모델 — 상태 관리 층.
- ⏸ **대체**: 사본 `feat/badge-3state-reviewed`(3-state 카드 렌더러) — 머지 보류, byline 방향으로 대체.
- #268(data-freshness) 카드 배지 결정 — byline 고지로 흡수.

## 7. 열린 질문

- ~~byline disclosure를 HTML init config로 주입할지 vs articles.json fetch할지~~ → **결정(2026-06-05): `config.provenance` 주입.** `no-fetch` 원칙 정합. ~~엔진 측 변경~~ → **구현 = 결정적 도구 `tools/inject-provenance.js`**(node — #33 컨테이너 정합; LLM 편집 의존 대신): articles.json provenance 를 HTML init 으로 sync. `blog-publish` Step 2.6 에서 호출 + 기존 글 일괄 백필. 멱등.
- 기계판독 임베드 범위 — OG 이미지만 vs hero 포함. §50(2) 기술 표준 확정(2026-08) 전까지는 OG부터.
- §50(4) 면제 주장 여부 — 정책상 "항상 고지"이므로 면제에 의존하지 않으나, `publishReview.reviewedBy`에 **실질 검토**를 기록하는 운영 규칙은 별도로 정착시킬 것(엔진 게이트/스킬).
