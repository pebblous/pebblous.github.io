# 후보4 설계 — 외부 노출 (Phase 4 / G)

> **비유**: 우리 식구 밥만 짓던 자동 주방을, 손님마다 **출입카드(API 키)** 를 주고 **누가 얼마나 썼는지 계량**하며
> **방을 분리**해 주는 공유 키친으로 바꾸는 일.
>
> **무엇**: 단일 토큰·단일 운영자 전제의 Blog Service Engine을 **멀티테넌트**로 진화시키는 설계.
> **왜**: 후보1~3로 "페블러스 전용 자동 발행 엔진"이 완성됐고, worktree per-run 검증으로 병렬 격리의 토대가 생겼다(#117). 다음은 "남도 쓰는 서비스"다.
> **효과**: 키별 신원·권한·사용량·격리. 빌링/외부 개방은 **수요가 생길 때** 이 토대 위에 얹는다(지금은 비목적).

---

## 0. 범위 — 무엇을 *지금* 하고, 무엇을 *미루나*

후보4(Phase 4) 전체 = **멀티테넌시 + 빌링 + 외부 사용자 개방**. 하지만 **빌링·외부 개방은 실제 외부 수요가 있을 때** 켜야 한다(없는데 만들면 과설계). 그래서 이 설계는 단계를 나눈다.

| 단계 | 내용 | 지금? |
|---|---|---|
| **4-A 멀티테넌시 기반** | 키 발급/관리, 키별 신원·권한(scope), 테넌트 격리, 사용량 추적 | ✅ **지금 가치 있음 — 내부 dogfood로 검증** |
| 4-B 외부 파일럿 | 신뢰 외부 사용자에게 수동 키 발급, 무과금 운영 | ⏸ 첫 외부 관심 시 |
| 4-C 셀프서브 + 빌링 | 키 자가 발급, 사용량 기반 과금, 한도 | ⏸ 외부 수요 검증 후 |

**비목적(지금 안 함)**: 빌링/결제, 외부 레포 발행(자격증명 위임), 셀프서브 키 발급 UI, 요금제. → §6 리스크에 근거.

> 로드맵상 Phase 4 앞에 **Phase 3(자산 분리)** 가 있으나, 이번 캠페인에서 "지금 아님"으로 합의됨. 4-A는 자산 분리 없이도 **현 레포 내부에서** 진행 가능(엔진 코드=자산3에 국한).

---

## 1. 현재 → 목표 (진화 축)

| 축 | 현재 (단일테넌트) | 목표 (4-A) |
|---|---|---|
| 인증 | `BLOG_SERVICE_API_TOKEN` 1개, Bearer | **키 레지스트리** — 키마다 `tenant_id` + `scopes` |
| 신원 | `trigger.actor`(자유 문자열) | 키에서 파생된 `tenant_id`(검증된 신원) |
| 권한 | all-or-nothing | scope (`pipeline:run`, `pipeline:read`, `discover`, `admin`) |
| 격리 | 단일 네임스페이스 (`_workspace/.runs/*`) | **테넌트별 네임스페이스** (runs·worktree·브랜치) |
| 사용량 | 없음 | **append-only 사용량 원장** + `/usage` 집계 |
| 발행 타겟 | 고정 `pebblous.github.io` | (4-B+) 테넌트별 타겟 레포 |

핵심 불변식: **인터페이스(HTTP/MCP) 2개, Pipeline Engine 1개** — 이 원칙은 유지. 멀티테넌시는 엔진 *앞단*(인증·네임스페이스·계량)에 얹고, 파이프라인 로직은 건드리지 않는다.

---

## 2. 핵심 설계 결정 4가지

### 2-1. 키 모델 — 단일 토큰 → 키 레지스트리

```
키 = { keyHash, tenant_id, scopes[], label, createdAt, disabled? }
```

- **저장 v0**: 정적 파일 `~/blog-engine-data/engine/keys.json`(또는 env JSON). DB 불필요.
  - 키 원문은 저장 안 함 — **해시(sha256)만**. 발급 시 1회 표시.
- **검증**: 기존 `safeEqual`(상수시간) 재사용. Bearer 토큰 → 해시 → 레지스트리 조회 → `tenant_id`+`scopes` 주입(Hono `c.set('tenant', ...)`).
- **하위호환**: 기존 `BLOG_SERVICE_API_TOKEN` = **`tenant_id: "pebblous-root"`, scope `admin`** 로 자동 흡수. 키 레지스트리 비어 있으면 현 동작 그대로(무중단 이행).
- **선례**: 이미 2번째 자격증명 패턴 존재 — `/webhooks/*`의 `X-Webhook-Secret`(DataClinic). 키 모델은 이를 일반화.
- **scope 최소 집합**: `pipeline:run` · `pipeline:read` · `discover` · `admin`. 미들웨어가 경로×메서드 → 필요 scope 매핑.

### 2-2. 격리 경계 — 테넌트별 네임스페이스

한 테넌트가 **남의 run·글·worktree를 못 보게**. 3겹:

| 자원 | 현재 | 목표 |
|---|---|---|
| run 상태 | `_workspace/.runs/<runId>/` | `_workspace/.runs/<tenant_id>/<runId>/` |
| worktree | `worktrees/<runId>` | `worktrees/<tenant_id>/<runId>` (reaper 경로 규칙도 동반 수정) |
| 콘텐츠 브랜치 | `nanoclaw/<type>/<slug>` | `tenant/<tenant_id>/<type>/<slug>` |
| 목록 조회 | `listRuns()` 전체 | `listRuns(tenant_id)` 필터 (admin scope는 전체) |

- **발행 타겟 레포**: 4-A에선 전부 `pebblous.github.io` 고정(내부 dogfood이므로). 테넌트별 타겟 레포는 4-B의 핵심 난제(§6).
- worktree 격리는 #117에서 이미 검증된 메커니즘 위에 디렉토리 한 겹만 추가.

### 2-3. 사용량 스키마 — append-only 원장

```jsonc
// ~/blog-engine-data/engine/usage/<YYYY-MM>.jsonl  (월별 샤딩 — articles.json 교훈)
{ "at": "...", "tenant_id": "...", "runId": "...", "type": "blog",
  "phase_tokens": { "research": 12000, ... }, "total_tokens": 84000,
  "published": true, "prUrl": "...", "outcome": "completed" }
```

- run 완료/실패 시 1줄 append(이미 `completion.json`·audit 있음 → 거기서 파생).
- `GET /usage?tenant=&from=&to=` → 집계(run 수·토큰·발행 수·실패율). admin은 전체, 일반 키는 자기 것만.
- **빌링은 이 원장 위에 순수 집계로 얹는다**(4-C). 지금은 데이터만 쌓아 둔다 = 나중 과금의 토대 + 지금도 운영 가시성.
- 월별 샤딩 = articles.json 충돌 교훈(append 동시성 안전).

### 2-4. 단계적 개방 — dogfood → 파일럿 → 셀프서브

1. **내부 멀티키 dogfood (4-A)**: `pebblous-root`(admin) + `nanoclaw`(pipeline:run) + `scheduler`(discover+run) + `admin-ui`(read) 키 분리. → 누가 뭘 했는지 추적이 *당장* 켜짐.
2. **외부 파일럿 (4-B)**: 신뢰 사용자에게 수동 키 발급. 발행 타겟·자격증명 위임 문제 해결 필요(§6).
3. **셀프서브 + 빌링 (4-C)**: 키 자가 발급 UI, 사용량 기반 과금, 한도/레이트리밋.

---

## 3. 변경 영향 지점 (4-A)

| 파일 | 변경 |
|---|---|
| `http-server.ts` 인증 미들웨어 | 단일 토큰 비교 → 키 레지스트리 조회 + `tenant`/`scopes` 주입 + scope 가드 |
| `mcp-server.ts` | 동일 키 모델 적용(MCP도 같은 엔진 공유) |
| `core/runs.ts` | run 디렉토리·`listRuns`에 `tenant_id` 네임스페이스 |
| `core/pipelines.ts` | worktree 경로·브랜치 prefix에 `tenant_id`; **reaper(#117) 경로 규칙 동반 수정**; 완료 시 사용량 원장 append |
| `core/keys.ts` (신규) | 키 레지스트리 로드·해시 검증·scope 매핑 |
| `core/usage.ts` (신규) | 원장 append + 집계 |
| `docs/blog-service/openapi.yaml` | 키 인증·`/usage`·scope 문서화 |

모두 **엔진 앞단**(자산3). 파이프라인 단계 로직·스킬(자산2)·콘텐츠(자산1)는 불변.

---

## 4. 마일스톤 (4-A)

- **M1 키 레지스트리** — `keys.ts` + 미들웨어 키 검증(하위호환: 레지스트리 비면 현 동작). scope 가드.
- **M2 사용량 원장** — `usage.ts` + 완료 훅 append + `/usage` 집계.
- **M3 테넌트 격리** — runs/worktree/브랜치 네임스페이스 + `listRuns(tenant)` 필터 + reaper 경로.
- **M4 dogfood 검증** — 4키 분리 운영, `/usage`로 키별 활동 확인. (캠페인 원칙: 마일스톤마다 무인 발행 테스트.)

각 M = 1 PR. M1→M2→M3 순(격리가 가장 큼). M4는 통합 검증.

---

## 5. 결정 사항 (JH 컨펌, 2026-06-22)

1. ✅ **키 저장 = 정적 파일** — `keys.json`에 해시만. 외부 셀프서브(4-C) 전엔 키 수가 적어 DB 불필요. 필요 시 4-C에서 SQLite 이행.
3. ✅ **격리 강도 = 디렉토리 네임스페이스** — 같은 엔진 프로세스 공유, runs/worktree/브랜치만 테넌트 네임스페이스(#117 위 한 겹). 프로세스 분리는 4-C(빌링/SLA) 때.

### 아직 열린 결정 (M1 착수 전 확정)
2. **scope 입도**: 4개(run/read/discover/admin)면 충분한가, 더 세분(테넌트별 타입 제한 등)? → 권장 **4개로 시작**, 필요 시 확장.
4. **사용량 토큰 계량 출처**: phase별 `claude -p` 토큰을 어디서 얻나(claude.ts 출력 파싱 vs 추정)? → 정확 과금엔 실측 필요, **4-A에선 run/발행 수 카운트로 시작**(토큰 실측은 4-C 과금 직전).

---

## 6. 리스크 / 비목적 근거 (왜 4-B/C를 미루나)

- **외부 레포 발행 = 자격증명 위임 난제**: 외부 테넌트는 자기 레포에 발행해야 한다 → GitHub App 설치·토큰 위임·권한 범위. 작지 않다. 4-A는 전부 `pebblous.github.io` 내부 발행이라 이 문제를 피한다.
- **콘텐츠 거버넌스**: 외부인이 우리 스킬·톤·anti-slop 룰브릭을 그대로 쓰는가? 테넌트별 스킬 오버라이드는 자산2 분리(Phase 3)와 얽힘.
- **비용 폭증**: 외부가 opus 무제한 호출 → 한도·레이트리밋 없이 개방 불가. 4-C 빌링/한도의 선결.
- **PII·보안**: 외부 입력(topic)·산출물 격리, 키 유출 대응(disable). 4-B 전 보안 리뷰 필요.

이 4가지가 해소되기 전엔 4-A(내부 멀티테넌시)까지가 **안전하고 즉시 유용한** 경계다.

---

*작성 2026-06-22 · 선결(worktree per-run #117) 완료 후 진입 · 4-A부터 단계 착수 예정*
