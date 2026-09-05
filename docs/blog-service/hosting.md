# Blog Service Engine — 배포·운영 명세서

> 이 문서는 Blog Service Engine을 **상시 호스팅**(Fly.io / VM / on-prem)할 때의 운영 기준이다.
> 개발용 실행 모드·MCP 등록은 [`service/blog-service-engine/README.md`](../../service/blog-service-engine/README.md)를, REST 계약은 [`openapi.yaml`](./openapi.yaml)를 본다.

## 1. 핵심 원칙

- **순수 서버리스 불가.** Engine은 파이프라인 단계마다 `claude` CLI를 **자식 프로세스로 spawn**한다(`claude -p <file> --model ...`). 따라서 node + claude CLI + git + gh를 한 이미지에 담아 **상시 컨테이너**로 운영한다.
- **단일 이미지, 그대로 운반.** 로컬 `docker compose up`으로 검증한 그 이미지(`pebblous/blog-service-engine`)가 외부/사내 호스트로 **동일하게** 올라간다. 이식 시 바뀌는 건 **인그레스(앞단 HTTPS 프록시)**와 **시크릿 주입 위치**뿐 — "내 맥에선 되는데 리눅스에선 깨짐" 드리프트가 없다.
- **시크릿은 이미지에 굽지 않는다.** 전부 런타임 env로 주입(compose `env_file` / 호스트 시크릿 스토어).

## 2. 이미지

`service/blog-service-engine/Dockerfile` — 멀티스테이지(`node:20-bookworm-slim`).

| 포함 | 비고 |
|---|---|
| Node.js 20 | 런타임. 엔진은 ESM(`"type":"module"`), `engines.node >=20`. |
| Claude Code CLI | `CLAUDE_VERSION` 핀(현재 `2.1.144`). 각 파이프라인 단계를 spawn. |
| git, gh | clone·commit·push·`gh pr create`(publish-prep 자율 운반). |
| curl, gnupg, ca-certificates | 설치·HTTPS. |
| tini | **PID 1** — SIGTERM 전파 + 좀비 수거(아래 §7). |

| 미포함 (의도) | 영향 |
|---|---|
| **python3** | publish-prep는 이제 **python hard-dep 없음** — `validate-articles`(Step 2.5)·`inject-provenance`(Step 2.6)를 node로 포팅(#33). precheck 게이트(`tools/precheck-gate.js`)의 외부 precheck CLI만 python일 수 있으나 ENOENT를 inert로 처리해 완충. 콘텐츠 인덱싱 python 도구(`scan-articles-meta.py` 등)는 사본 CI에서 돌아 영향 없음. |

- `EXPOSE 8910`, 기본 CMD = `node dist/http-server.js`.
- 컨테이너 기본값: `BLOG_SERVICE_HTTP_HOST=0.0.0.0`(앞단 프록시 전제), `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC=1`.

## 3. 런타임 요구사항

- **아웃바운드 네트워크**: `api.anthropic.com`(claude), `github.com`(clone/push/PR). 제한망이면 이 두 곳 egress 허용 필수.
- **디스크**: 사본 clone + run 작업 공간. Fresh-clone 모드는 `os.tmpdir()` 아래에 매 실행 clone(기본 ephemeral).
- **인증 컨텍스트**: 컨테이너엔 keychain/OAuth가 없다 → `ANTHROPIC_API_KEY` **필수**(없으면 단계 spawn 실패), `GH_TOKEN`(git/gh 인증).

## 4. 환경변수 (전체)

### 콘텐츠 레포 (둘 중 하나 필수)
| 변수 | 필수 | 설명 |
|---|---|---|
| `BLOG_CONTENT_REPO_URL` | ✅ (택1) | Fresh-clone 모드. 사본 git URL. **상시 호스팅 권장.** |
| `BLOG_CONTENT_REPO` | ✅ (택1) | Existing-worktree 모드. 절대 경로(개발용). |
| `BLOG_CONTENT_REPO_BASE` | ❌ | clone 베이스. 기본 `os.tmpdir()`. 볼륨에 두면 재시작 간 유지. |
| `BLOG_CONTENT_REPO_KEEP` | ❌ | `1`이면 종료 후 clone 보존(디버깅). |

> 둘 다 설정되면 `_URL`(fresh clone) 우선. 둘 다 없으면 startup error.

### 인증 시크릿 (런타임 주입, 이미지에 굽지 않음)
| 변수 | 필수 | 설명 |
|---|---|---|
| `ANTHROPIC_API_KEY` | ✅ | claude 호출. 미설정 시 entrypoint가 경고 후 단계 spawn 실패. |
| `GH_TOKEN` | ✅(운반 시) | clone·push·`gh pr create`. entrypoint가 `url.insteadOf`로 git https에도 라우팅. |
| `GIT_AUTHOR_EMAIL` / `GIT_AUTHOR_NAME` | ❌ | publish-prep 커밋 아이덴티티. 기본 `blog-engine@pebblous.ai` / `Pebblous Blog Engine`. |

### HTTP 표면
| 변수 | 필수 | 설명 |
|---|---|---|
| `BLOG_SERVICE_HTTP_PORT` | ❌ | 기본 8910. |
| `BLOG_SERVICE_HTTP_HOST` | ❌ | 코드 기본 `127.0.0.1`, 컨테이너 기본 `0.0.0.0`. |
| `BLOG_SERVICE_API_TOKEN` | ❌(강권) | 설정 시 Bearer 인증 활성 — `/healthz`·`/webhooks/*`·`GET /admin` 제외 전 endpoint 401. **공개 호스트면 반드시 설정.** |
| `BLOG_SERVICE_CORS_ORIGIN` | ❌ | CORS Origin 화이트리스트. 기본 `*`(공개 시 좁힐 것). |
| `BLOG_SERVICE_WEBHOOK_SECRET` | ❌ | 설정 시 `/webhooks/*` 활성(`X-Webhook-Secret` 검증). 미설정 시 webhook 503(무인증 오픈 금지). Bearer와 별개. |

### 예약 발굴·자동 작성 (in-process 스케줄러)
엔진 안의 타이머가 매일 정해진 시각(로컬 시각 = 스튜디오 KST)에 discover run 을 띄우고, 그 run 의 후보를 순서대로 작성한다. 로직은 `src/core/discovery-schedule.ts`, 착수·발화 장부는 `<콘텐츠 클론>/_workspace/.discovery-ledger.json`.

| 변수 | 필수 | 기본 | 설명 |
|---|---|---|---|
| `BLOG_DISCOVER_AT` | ❌ | (미설정=off) | 매일 발굴 시각. `"2"` 또는 `"5:30"`. 기동 시 오늘 예정 시각이 지났고 오늘 `completed`·`running` 인 discover 가 없으며 예정+12시간 이내면 1회 만회 발화(로그 `catch-up`). 만회 판정은 중단 run 자동 재개(`recoverInterruptedRuns`)가 **끝난 뒤** 한다 — 재개 전에 판정하면 오늘 새벽 discover 가 아직 `interrupted` 라 두 번 돈다. 12시간 창은 기동 시각으로 잰다(재개가 오래 걸려도 창을 놓치지 않음). |
| `BLOG_DISCOVER_RETRIES` | ❌ | `2` | discover 실패 시 재시도 횟수. 끝내 실패면 **그날 자동 작성 생략** — 전날 후보를 재사용하지 않는다(2026-08-18 사고). 로그·장부(`fires[]`)·run 이 생긴 시도 중 가장 최근 것의 audit 에 남는다. 모든 시도가 run 생성 전에 예외(`spawn ENOENT` 형)면 남길 run 이 없어 **audit 는 장부 `fires[]`·로그에만** 남는다. **실패일 비용 상한**: discover 는 opus·900초 상한이고 단계 내부가 이미 1회 재시도하므로 기본값에서 최악은 opus 호출 6회(3시도×2)·약 1시간 5분 지연(02:00 발화가 03:05 이후) 뒤 그날 작성 생략. 12시간 창 안에 재기동이 되풀이되면 catch-up 마다 다시 3시도. 비용을 줄이려면 `1` 로. |
| `BLOG_DISCOVER_RETRY_MIN` | ❌ | `30` | 재시도 간격(분). |
| `BLOG_DISCOVER_AUTOWRITE` | ❌ | (off) | `1`이면 이번 발화가 만든 discover run 의 후보를 topPick 부터 순차 작성. 같은 `(discoverRunId, n)` 은 장부로 한 번만 착수(출처 URL 로는 판정하지 않음). |
| `BLOG_DISCOVER_AUTOWRITE_MAX` | ❌ | (전체) | 하루 작성 편수 상한. |
| `BLOG_DISCOVER_AUTOPUBLISH` | ❌ | (off) | `1`이면 발간 게이트 없이 PR 생성 + CI 통과 시 자동 머지. 미설정이면 발간 직전 게이트에서 사람 승인 대기. |

장부 `fires[]` 의 `autoWrite` 값: `started:N/M`(작성 착수) · `off`(AUTOWRITE 미설정) · `skipped:no-candidates` · `skipped:discover-failed` · `skipped:load`(발화 시점에 동시 running ≥ 3 이라 그날 발굴을 띄우지 않음). 어느 경로로 끝나든 한 줄 남는다 — 로그만 남고 장부에 없는 '조용한 건너뜀'은 없다. 클론 동기화·제목 센서스 같은 발화 후처리는 옛 코드처럼 `started:` 인 날만 돈다.

### 기타
| 변수 | 필수 | 설명 |
|---|---|---|
| `BLOG_PRECHECK_CMD` | ❌ | publish-prep Step 3.5 precheck 진입점. 미설정/ENOENT면 게이트 inert. |
| `BLOG_PRECHECK_SKIP` | ❌ | `1`이면 precheck 게이트 강제 스킵. |
| `ONECLI_CA` | ❌ | NanoClaw/OneCLI gateway 환경 전용 CA. |
| `CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC` | ❌ | 컨테이너 기본 `1`. |

## 5. HTTP 표면 & 인증

진입점 `dist/http-server.js`(Hono). 상세 계약은 [`openapi.yaml`](./openapi.yaml).

| Method · Path | 용도 | 인증 |
|---|---|---|
| `GET /healthz` | liveness probe (`{ok,repo,build,drift}` — `build`: 빌드 스탬프 sha·shortSha·branch·dirty·builtAt·distHash…, `drift`: 진본 main 대조 결과 status ok/behind/dirty/unknown + reason — behind 는 engine-changed/not-in-main(미머지 가지 배포)/uncountable 로 갈린다) | **면제** |
| `GET /admin` | 운영 콘솔 HTML shell | 면제(데이터 호출은 페이지 JS가 토큰으로) |
| `GET /articles`, `/articles/{meta,toc,exec-summary,seo}` | INSPECT(콘텐츠 조회) | Bearer |
| `POST /pipelines` | 파이프라인 시작(게이트/완료까지 blocking) | Bearer |
| `GET /pipelines` · `GET /pipelines/:id` | run 목록·상태 | Bearer |
| `POST /pipelines/:id/resume\|cancel\|pr` | run 제어 | Bearer |
| `GET /pipelines/:id/stream` | SSE 실시간 phase/gate/terminal | Bearer |
| `GET /pipelines/:id/draft?language=ko\|en` | 현재 draft HTML | Bearer |
| `POST /webhooks/dataclinic/report-completed` | DataClinic → dc-story 킥오프(H-1) | `X-Webhook-Secret` |

- **Bearer**(`BLOG_SERVICE_API_TOKEN`): 설정 시 위 면제 3종 외 전 endpoint 401.
- **Webhook 시크릿**(`BLOG_SERVICE_WEBHOOK_SECRET`): `/webhooks/*` 전용. 미설정 시 해당 경로 503(오픈 금지).

## 6. 인그레스

- **포트를 직접 노출하지 말 것.** 앞단에 **HTTPS 리버스 프록시(Caddy/nginx) + TLS**를 두고 8910으로 프록시.
- 공개 호스트면 `BLOG_SERVICE_API_TOKEN` 설정 + `BLOG_SERVICE_CORS_ORIGIN`을 실제 운영 콘솔 Origin으로 좁힌다.
- `GET /healthz`를 로드밸런서/프록시 헬스체크에 사용(인증 면제).

## 7. 수명주기 & 시그널

- `tini`가 PID 1 → 컨테이너 SIGTERM이 node로 전파 → `installShutdownHandlers()`가 **활성 `claude` 자식 프로세스를 정리**(종료/취소 시 orphan·zombie 없음).
- compose `restart: unless-stopped` — 크래시·호스트 재부팅 후 자동 복구.
- entrypoint(`docker/entrypoint.sh`): git identity 설정 → `GH_TOKEN` insteadOf 라우팅 → `ANTHROPIC_API_KEY` 부재 경고 → `exec "$@"`.

## 8. 상태 영속성 & 스케일링

- **run 상태**는 파일시스템(`<runDir>/state.json`)에 저장된다. 공유 DB가 아니다 → **인스턴스 간 공유 없음.**
- 기본 작업 공간은 `os.tmpdir()`(ephemeral) — 재시작 시 run 이력이 사라진다. 유지하려면 `BLOG_CONTENT_REPO_BASE`를 **마운트된 볼륨**으로 지정.
- `POST /pipelines`·`/resume`는 현재 **게이트/완료까지 blocking**(D-3 SSE는 추가됐고, 별도 task queue 분리는 예정).
- ⛔ **다중 레플리카(수평 스케일) 미지원**: 공유 상태 저장소가 없어 run이 인스턴스에 고정된다. **단일 인스턴스 모델**로 운영할 것. 멀티 테넌시·수평 스케일은 로드맵 **Phase G**(Issue #137).

## 9. 배포 대상별 메모

이미지는 동일. 차이는 인그레스 + 시크릿 주입 위치뿐.

- **로컬 VM 시뮬레이션**: `docker compose up --build` → `127.0.0.1:8910`, `.env`로 시크릿.
- **Fly.io**: 같은 이미지 배포, 시크릿은 `fly secrets set`, 앞단 TLS는 Fly가 처리. 단일 머신(스케일 1) 권장(§8).
- **VM / on-prem**: 컨테이너 런타임 + 호스트 시크릿 스토어로 env 주입, Caddy/nginx로 TLS 종단. 재시작 정책 `unless-stopped`.

## 10. 배포 체크리스트

**사전**
- [ ] `ANTHROPIC_API_KEY`·`GH_TOKEN` 시크릿 주입(이미지 미포함 확인)
- [ ] `BLOG_CONTENT_REPO_URL` 설정(fresh-clone 권장)
- [ ] 공개 시: `BLOG_SERVICE_API_TOKEN` 설정 + `CORS_ORIGIN` 좁힘
- [ ] 앞단 HTTPS 프록시 + TLS, 8910 직접 노출 안 함
- [ ] egress 허용: `api.anthropic.com`, `github.com`
- [ ] run 이력 유지 필요 시 볼륨 마운트(`BLOG_CONTENT_REPO_BASE`)

**사후**
- [ ] `GET /healthz` → `{ok:true, build:{sha:…}, drift:{status:…}}` (`build.sha` 가 null 이면 스탬프 없는 빌드 — `npm run build` 가 scripts/build-info.mjs 를 돌렸는지 확인)
- [ ] Bearer로 `GET /pipelines` 200 / 무토큰 401 확인
- [ ] 테스트 파이프라인 1회(`POST /pipelines`) → SSE(`/stream`)로 phase 흐름 확인 → cancel

## 관련

- [`service/blog-service-engine/README.md`](../../service/blog-service-engine/README.md) — 실행 모드·MCP 등록
- [`openapi.yaml`](./openapi.yaml) — REST 계약 v0.2.0-draft
- [`architecture.md`](./architecture.md) · [`decision-log.md`](./decision-log.md)
- `service/blog-service-engine/Dockerfile` · `docker/entrypoint.sh` · `docker-compose.yml`
- Issue [#33](https://github.com/joohaeng-pbls/blog-service/issues/33) — 컨테이너 python3 부재
- Issue [#137](https://github.com/pebblous/pebblous.github.io/issues/137) — Blog Service 분리 로드맵
