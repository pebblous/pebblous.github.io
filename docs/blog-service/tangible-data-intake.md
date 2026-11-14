# 탠저블 데이터 접수 규격 v0.1 — 웹 실험보고서 발행 꾸러미와 블로그 접수 절차

정본 판정일: 2026-09-25 (형님 확정 2건 포함) · v0.1.1 2026-09-25 밤 — Codex 세션 드라이런 지적 3건 반영(근거 연결·핵심 파생 자료 권리·원본/변환본 선언 분리) + 예외 기록 `exceptions[]` · 협의 기록: joohaeng-pbls/blog-service#234 · 첫 사례: pebblous/pebblous.github.io#1828

## 0. 한 줄

블로그 밖(실험 레포, ChatGPT/Codex 세션)에서 만든 웹 실험보고서를 **실험 쪽은 "발행 꾸러미" 규격으로 내놓고, 블로그 쪽은 접수 스킬 하나로 받는다.** 새 출판 체계를 만들지 않는다. 이미 있는 기사화·검사·등록·출간 경로에 실험이 흘러드는 길을 만드는 것이다.

성공 기준은 규격의 풍부함이 아니라 **새 실험 하나를 추가하는 반복 작업이 얼마나 줄었는가, 출처·권리·해석의 신뢰성을 유지했는가**다.

## 1. 역할

| 쪽 | 맡는 것 |
|---|---|
| 실험 쪽 | 연구 도구 원본 · 데이터·모델·전처리 출처 · 수치와 해석의 한계 · 자기 검증 · 발행할 판의 확정 · 공개 권리 확인 |
| 블로그 쪽 | 독자가 읽는 제목·도입·본문(KO/EN) · 제목 정본·해라체 등 편집 규칙 · 등록·OG·출간·허브 동선 · 갱신 |
| 공통 계약 | 핵심 결론이 근거를 벗어나지 않는다 · 실측/합성과 분석 범위가 바뀌지 않는다 · 어느 판의 결과인지 추적된다 |

작은 비교 실험, 재현 확인, 예상과 다른 결과도 **질문·관찰 방법·근거·한계**가 분명하면 발행 후보다. 거대한 완성형 도구가 접수 조건이 아니다.

## 2. 발행 꾸러미(package) 규격

```
<package>/
├── dist/                  정적 웹. 빌드 단계 없음. 실행 자산은 상대경로·자체 완결
│   ├── index.html         (entry — 다른 이름이면 tangible.json 에 선언)
│   ├── data/*.json        화면에 쓴 데이터 · 근거 원장(파일 해시·값·제약)
│   ├── report.md          사람이 읽는 보고서(권장 위치 — 경로는 reportPath 로 선언)
│   └── assets/…           이미지·바이너리 텐서 등
├── tangible.json          선언 파일(§3)
├── verify-result.json     자기 검증 결과(§5) — scripts/verify 가 만든다
├── docs/RIGHTS.md         출처와 사용 조건(§6) — tangible.json 의 rights[] 와 같은 내용을 사람용으로
└── scripts/verify*        자기 검증(해시·개수·수치 계약·HTTP)
```

### 2-1. 실행 자산 규칙
- **정적**: 서버 코드 없음, 빌드 없음. `python3 -m http.server` 로 그대로 서빙된다.
- **상대경로**: `dist/` 안의 script·link·img·fetch·`url()` 참조는 상대경로. `/` 로 시작하는 절대경로 금지(블로그의 하위 경로에 옮겨지기 때문).
- **자체 완결이 기본**: 서체·라이브러리·데이터를 꾸러미 안에 둔다. 예외(서체 CDN 등)는 `externalRuntime[]` 에 선언하고 접수가 허용 목록(§2-3)과 대조한다.
- **출처 링크는 자유**: 논문·데이터·코드로 가는 `<a href="https://…">` 는 실행 자산이 아니다.
- **모델 실행 없음**: 접수·발행·독자 열람 어디서도 학습·추론·모델 다운로드가 일어나지 않는다. 화면 값은 저장된 결과다.
- **비밀값 없음**: `.env`·`.git`·`.openai`·자격증명 파일이 들어 있으면 접수 중단.

### 2-2. 용량 — 100MB 는 검토선(형님 확정 2026-09-25)
총 용량 100MB 를 넘으면 탈락이 아니라 **사람이 본다**: 첫 화면 전송량, 무거운 자산의 지연 로딩 여부, 콘텐츠 저장소(현재 3.1GB) 영향. 판정은 변환본 선언의 `sizeReview: {decision, by, at, reason}` 에 적는다. 자산 분리 저장소(버전 고정 URL·해시·MIME/Range·교차 출처)는 실제로 넘는 실험이 나올 때 후속 단계로 둔다. 첫 사례 106MB 는 수용됐다.

### 2-3. 허용 외부 실행 자산
`cdn.jsdelivr.net`(Pretendard) · `fonts.googleapis.com`·`fonts.gstatic.com`(Outfit 등 구글 서체). 그 밖은 접수 중단(목록 확장은 이 문서 개정으로).

### 2-4. 서체 정책
재배포 권리가 확인된 서체만 꾸러미에 넣는다(Pretendard OFL 등). 권리 미확인 서체(예: TT Firs Neue)는 넣지 않고 CDN 서체나 시스템 서체로 대체한다. 접수 쪽이 서체를 바꿔 발행하면 전달본과 발행본의 해시가 달라지므로 둘 다 기록한다(§8).

### 2-5. 문체 (형님 확정 2026-09-25)
- 블로그 기사(허브·글)는 **해라체**(docs/ko-style-standard.md §4-1).
- **탐색기 UI 도 새로 접수하는 꾸러미부터 해라체.** `uiRegister: "해라체"` 가 아니면 접수 중단. 이미 발행된 첫 편(DINOv3, 합쇼체)은 그대로 두고 다음 판에서 맞춘다 — 예외는 `uiRegisterWaiver` 에 사유를 적어야 통과한다.
- 영역 안 일관성: 기사 안에서, 탐색기 안에서 각각 한 문체.

## 3. 선언 파일 `tangible.json`

기술 필수(★)는 없으면 접수 중단. 편집 자료(○)는 선택 — 없으면 접수 스킬이 `reportPath` 에서 초안을 뽑고 사람이 다듬는다.

| 필드 | 필수 | 뜻 · 규칙 |
|---|---|---|
| `specVersion` | ★ | `"0.1"` |
| `slug` | ★ | **전체 경로 이름**. 블로그는 `story/<slug>/` 에 넣고 접두어를 더하지 않는다. Story 는 `tangible-data-` 로, Art 는 `tangible-data-art-` 로 시작(허브 카드 필터 규칙). 소문자·숫자·하이픈 |
| `kind` | ★ | `story` \| `art` |
| `version` | ★ | 발행 스냅샷의 판 번호(문자열). 원본 개발 상태와 분리한다. 발행물이 바뀌면 올린다 |
| `snapshotDate` | ★ | `YYYY-MM-DD` |
| `sourceCommit` | ○ | 원 레포 커밋. 커밋 뒤 편집분이 있을 수 있으므로 이것만으로 식별하지 않는다 |
| `sourceDirty` / `sourceChanges[]` | ○ | 커밋 뒤 미커밋 편집분이 있으면 `true` 와 그 목록. 확정판이 아님을 정직하게 표시 |
| `exceptions[]` | ○ | **사람이 승인한 규칙 예외 기록** `{check: rights\|register, target, reason, approvedBy, at}`. 검사기는 해당 실패를 warn 으로 내리고 PR 에 그대로 보인다. 예외는 판마다 새로 적는다(승계 금지) |
| `authors[]` | ★ | `{name, affiliation}` |
| `createdAt` / `updatedAt` | ★ | ISO 8601 |
| `entry` | ★ | 시작 파일(꾸러미 기준 상대경로, 보통 `dist/index.html`) |
| `reportPath` | ○ | 사람용 보고서(예: `dist/report.md`). 루트 복제를 강제하지 않는다 |
| `language` / `uiRegister` | ★ | `ko` 등 / `해라체`(신규 필수). 예외 사유는 `uiRegisterWaiver` |
| `publishApproval` | ★ | `{status: draft\|approved, by, at}` — `approved` 여야 발행 PR 을 연다. private 저장소·가중치 미포함은 공개 허가가 아니다. **판마다 새로 받는다** — 이전 판의 승인을 새 판에 승계하지 않는다 |
| `verifyResultPath` | ★ | 보통 `verify-result.json` |
| `evidence[]` | ★ | 근거 목록(§4). 실측/합성과 변환을 id 로 잇는다 |
| `sources[]` | ★ | `{name, url, terms}` — 데이터·모델·논문·코드 |
| `rights[]` | ★ | 권리 목록(§6) |
| `externalRuntime[]` | ○ | `{url, purpose}` — 실행 시 외부 의존. 허용 목록(§2-3) 밖이면 중단 |
| `downloads[]` | ○ | `{path, label}` — 독자 내려받기 |
| `stats` | ○ | `{fileCount, totalBytes, treeHash}` — 접수 스킬이 산출하고, 적혀 있으면 대조한다 |
| `title` | ○ | `{candidates: [{text, form}], subtitle}` — form 은 질문형·신문 명사형·현재형 주장 |
| `summary` / `howTo[]` / `findings[]` / `limits[]` | ○ | 기사 초안 재료. `findings[]`·`limits[]` 항목은 `evidenceIds[]` 를 달 수 있다 |

## 4. 근거 모델 `evidence[]`

```json
{ "id": "images-300", "kind": "measured", "transform": "extracted",
  "from": [], "spec": "dist/data/images.json",
  "desc": "beans 학습 부분집합 300장, 클래스별 100장, SHA-256 대조" }
```
- `kind`: `measured`(실측 자료) \| `synthetic`(원리 설명용 합성 예제)
- `transform`: `extracted`(모델 출력 저장) \| `computed`(계산) \| `projected`(투영·시각화) \| `authored`(사람이 쓴 해석)
- `from[]`: 상위 근거 id — 원본 사진 → 모델 출력 → cosine/PCA 결과처럼 연결된다
- `spec`: 기존 명세 파일 경로 — 바이너리마다 같은 정보를 중복하지 않는다
- 화면에도 같은 구분이 보여야 한다(실측 배지·합성 배지). 기사의 결론 문장은 `evidence` id 를 달아 사람이 대조한다.
- **변환을 정확히 적는다.** 꾸러미에 든 것이 원시 추출값인지, 계산값인지, 투영값인지 구분한다. 예: 웹의 `embeddings.json` 은 원시 고차원 행렬이 아니라 이웃·투영·선택·실험 결과이고(`computed`/`projected`), 패치 배포물은 원시 특징이 아니라 사전 계산한 cosine 지도(`computed`), 층별 텐서는 저장된 실제 값(`extracted`)이다.
- **근거 연결 오류를 막는다.** 결론이 가리키는 파일이 그 결론의 실험인지 확인한다. 첫 사례의 교훈: H 효과(+3.35%p)의 근거는 `beans-context-audit.json`(별도의 과거 Greenhouse 진단)이 아니라 `embeddings.json` 의 DINOv3 `effect/absolute` 와 그 실험 provenance 다. 평가 조건(공식 test 128 → validation 65 / final 63, 300장 전체·H 120·클래스 수 맞춘 무작위 120 을 같은 final 63 으로 비교한 탐색적 결과)을 함께 적고 다른 진단과 합치지 않는다.

## 5. 자기 검증 `verify-result.json`

```json
{ "ranAt": "2026-09-25T02:00:00Z", "env": { "node": "22", "platform": "darwin-arm64" },
  "checks": [
    { "id": "images-hash", "required": true, "status": "pass", "detail": "300/300" },
    { "id": "http-range", "required": false, "status": "skipped", "reason": "컨테이너 미실행" } ] }
```
- 검사별 `pass | fail | skipped` 와 이유·환경. **필수 검사의 skipped 는 실패**로 친다.
- 사람용 요약은 `docs/VALIDATION.md` 같은 문서로 따로 둔다.
- 접수 쪽은 전달받은 검증 코드를 **배포 자격증명 없는 격리 환경**에서만 실행하고, 학습·추론·다운로드는 하지 않는다.

## 6. 권리 `rights[]`

```json
{ "target": "beans JPEG 300장", "source": "AI-Lab-Makerere/ibean", "terms": "MIT",
  "evidence": "docs/licenses/IBEAN-LICENSE.txt", "status": "confirmed", "required": true }
```
- `status`: `confirmed` \| `unconfirmed` \| `excluded`(꾸러미에서 뺐음)
- 대상 최소 집합: 데이터셋 · 모델 파생물(임베딩·텐서) · 서체 · 브랜드 자산 · 외부 라이브러리
- **`required: true` 인데 `unconfirmed` 면 접수 중단** — 제외·대체·확인 뒤 재접수. 선택 자산의 빈칸과 필수 근거 누락은 구분한다.
- **기사의 핵심 자료는 `required: true` 다.** 모델에서 파생한 임베딩·패치 지도·중간 텐서가 기사의 본체라면 필수 자산이다. `required: false` 로 내려 검토를 우회하지 않는다. "가중치를 배포하지 않는다"는 사실은 파생 결과의 공개 이용 범위 확인이 아니다.
- **확인의 근거를 적는다.** 예: DINOv3 License(2025) 는 DINO Materials(모델·가중치·코드·문서)의 사용·복제·배포·파생물을 허용하고(§1.a), 배포 시 계약 사본 첨부(§1.b.i), **연구 결과 발표 시 사용 사실 고지(§1.b.ii)**, 거래 통제·군사 등 금지 용도(§1.b.v)를 두며, 출력물(outputs and results)에 대한 별도 제한 조항은 없다(§3·§5.b 에서 'as is' 와 면책만 언급). 이 읽기를 `evidence` 에 조항 번호로 적고, 법률 의견이 아님을 함께 적는다. 확인 판정은 사람이 한다. **DINOv3 파생 자료는 2026-09-26 형님이 이 읽기로 `confirmed` 판정** — 이후 판·다른 실험에서 같은 자산은 예외 없이 통과한다(DINOv2-L·SigLIP 2·C-RADIOv4-H 는 각 라이선스를 같은 방식으로 읽어 판정 대기).
- **사람이 승인한 예외**는 `exceptions[]` 에 남긴다(누가·언제·왜). 검사기는 그 항목을 warn 으로 내리고, PR 검토 ②에서 그대로 보인다. 첫 편(2026-09-25)은 DINOv3 파생 자료 확인이 끝나기 전에 형님 결정으로 발행됐으므로 변환본 선언에 예외로 기록한다.

## 7. 블로그 접수 절차 (스킬 `tangible-story-produce`)

1. `python3 tools/tangible-intake-check.py <package>` — §2~§6 검사. 실패면 여기서 끝(이유를 실험 쪽에 돌려준다)
2. `dist/` → 사본 `story/<slug>/app/` 복사. 접수 쪽이 무엇을 바꿨으면(권리 미확인 서체 제외, CDN 서체 링크 등) **변환본 선언 `story/<slug>/tangible.published.json`** 을 쓴다: 전달본 선언을 복사하고 `basedOn: {treeHash: 전달본}` · `transforms[]` · `stats`(변환본 재산출) · `rights[]`/`externalRuntime[]` 를 변환본 상태로 고친다(제외한 서체는 `excluded`, CDN 은 선언). 그 다음 **검사기를 `story/<slug>/` 에 다시 돌린다**(entry `app/index.html`). 전달본 선언은 전달본 트리에, 변환본 선언은 변환본 트리에만 적용된다 — 둘을 섞지 않는다. 바꾼 것이 없으면 해시가 같고 변환본 선언은 `transforms: []` 다
3. 기사 초안 KO/EN: 요약 → 탐색기(iframe + 새 창 링크) → 사용법 → 볼 수 있는 것 → 알 수 없는 것 → 데이터·출처·권리 → 시리즈. 참조 구현 = `story/tangible-data-dinov3-beans/`
4. 검사: `tools/title-census.py --check-html`(제목 정본 v3) · `tools/check-ko-prose.py`(해라체) · `node tools/validate-articles.js`
5. OG(`tools/generate-og-image.js --from-html`) · 사이드카 `articles.d/<slug>-ko.json`·`-en.json`(category story, provenance attended) · `changelog.jsonl` · 허브 시리즈 카드는 자동(경로 접두 필터)
6. PR — 본문에 판·해시 둘·변환 내역·검사 결과·**사람 검토 셋**: ① 제목 두 시험 ② 권리 ③ **기사화 과정에서 실험 조건·결론이 과장되지 않았는가**(결론 문장의 evidence id 대조)
7. 머지 → assemble 이 articles.json 재조립 → 라이브 URL 3개(허브·글·app) 200 확인

## 8. 갱신과 판

- 발행물이 바뀌면 `version` 을 올리고 새 스냅샷을 접수한다. `app/` 은 통째 교체, 해시 둘을 새로 기록. **새 판은 새 `publishApproval` 과 새 `exceptions[]`** — 이전 판의 승인·예외를 복사하지 않는다.
- 변경 기록은 `copy | design | data | analysis | conclusion` 으로 분류한다(문구·디자인 변경과 데이터·분석·결론 변경을 구분).
- 이전 정상 판은 콘텐츠 저장소 git 이력으로 복원 가능하다. 기사에 "탐색기 n판 · 갱신일"을 보인다.
- **해시 레시피**(dinov3 `snapshot-manifest.json` 과 동일): 꾸러미 루트 기준 상대경로(`dist/index.html` 처럼 폴더 이름이 앞에 붙는다)로 `{path,bytes,sha256}` 기록을 경로 코드포인트 순으로 정렬해 공백 없는 JSON 문자열로 만든 뒤 SHA-256. `tools/tangible-intake-check.py` 가 산출하며 원본 manifest 의 `tree_sha256` 을 재현한다(첫 사례 `bb51f8ed…` 재현 확인). 발행본 해시는 `story/<slug>/` 기준 `app/…` 경로로 같은 레시피.

## 9. 허브 연결

- Story: slug `tangible-data-*` → `project/tangible-data/` 허브의 Story 그리드에 자동 등장(`PebblousHubCards` pathFilter `tangible-data`, `tangible-data-art` 제외)
- Art: slug `tangible-data-art-*` → Art 절(현재 수동 카드; 내부 페이지가 늘면 자동 그리드로)
- 외부 URL 을 path 로 가진 항목은 자동 카드 링크가 깨지므로 자동 수집에 넣지 않는다

## 10. 템플릿(후속)

DINOv3 레포에서 최소 정적 템플릿·`tangible.json` 예제·검증 규약·권리 문서를 떼어 실험용 템플릿 레포로 만든다. Docker 는 선택. 3D·이미지 300장·층별 텐서는 요건이 아니다.

## 11. 첫 적용 범위

1. 이 문서(v0.1)와 검사기·접수 스킬을 진본에 고정
2. DINOv3 다음 확정 스냅샷으로 **접수 → 기사 갱신**까지 한 번 시험
3. 더 작은 두 번째 실험으로 일반성 확인 뒤 템플릿·스킬 확장

예제 선언 파일: 전달본 `docs/blog-service/examples/tangible.dinov3.json`(연구 원본 433파일 — 서체 권리 미확인으로 접수 중단이 정상) · 변환본 `docs/blog-service/examples/tangible.dinov3.published.json`(첫 편 발행 상태 429파일 — 예외 2건 기록, warn 으로 통과) · 검사기: `python3 tools/tangible-intake-check.py <package> [--json]`(테스트 `service/blog-service-engine/test/tangible-intake-check.test.cjs`) · 접수 스킬: `.claude/skills/tangible-story-produce/skill.md`
