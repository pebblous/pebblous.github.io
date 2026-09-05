# 모델 라우팅 — 고정 id · effort · 과부하 폴백

> 엔진(`service/blog-service-engine`)이 단계마다 어떤 클로드 모델을 어떤 세기로 부르는지, 그 배정을
> 누가 어디서 바꾸는지의 정본. 코드는 `src/core/models.ts`(순수 함수) · `src/core/config.ts`(상수) ·
> `src/core/claude.ts`(CLI 플래그) · `src/core/retry-policy.ts`(백오프 루프) · `src/core/pipelines.ts`
> `runPhaseWithRetry`(배선). 테스트: `node test/model-routing.test.cjs`(순수 함수·PIPELINES 등급 전수) ·
> `node test/model-routing-exec.test.cjs`(가짜 claude 바이너리·백오프 루프).

## 왜 고정 id 인가

2026-08-08 에 별칭 `opus` 가 가리키는 모델이 `claude-opus-4-8` 에서 `claude-opus-5` 로 바뀌었다. 엔진은
별칭만 넘겼으므로 어느 글이 어느 모델로 쓰였는지 state 에 남지 않았고, 그 뒤 품질 변동의 출처를 추적할 수
없었다(30일 실측: opus-5 1,192 세션 · opus-4-8 64 세션이 같은 `opus` 아래 섞여 있다).

지금은 기본값이 고정 id 이고, 바꿀 때는 env 로 명시한다. 별칭도 여전히 받지만, 무엇을 넘겼든 실제로 넘긴
값이 `state.phases[i].model` 에 기록된다.

## 현재 배정 (PIPELINES 기본값)

| 단계 | 모델 | effort 등급 | 30일 비용(USD) | 세션당 | 중앙 소요(분) |
|---|---|---|---:|---:|---:|
| write-ko | claude-opus-5 | writing | 829.71 | 5.15 | 10.9 |
| write-en | claude-opus-5 | writing | 758.20 | 4.86 | 8.5 |
| reinforce | claude-opus-5 | writing | 540.65 | 3.53 | 7.3 |
| ko-prose-humanizer | claude-opus-5 | writing | 444.65 | 2.93 | 6.7 |
| polish-ko | claude-opus-5 | writing | 424.70 | 2.79 | 6.3 |
| sns-write | claude-opus-5 | writing | 402.40 | 2.06 | 4.6 |
| polish-en | claude-opus-5 | writing | 261.51 | 1.72 | 3.3 |
| synthesis (report) | claude-opus-5 | writing | 222.60 | 4.12 | 12.4 |
| planning (report) | claude-opus-5 | writing | 146.81 | 3.12 | 9.7 |
| discover | claude-opus-5 | writing | 55.55 | 1.85 | 7.7 |
| storyline · quality-check (dc-story) | claude-opus-5 | writing | — | — | — |
| apply-revision (revise) | claude-opus-5 | writing | 3.65 | 3.65 | 8.1 |
| image-reinforce | claude-sonnet-5 | mechanical | 239.55 | 1.56 | 6.0 |
| research-arxiv · -industry · -data | claude-sonnet-5 | mechanical | 226.47 | 1.47 | 7.7 |
| publish-prep | claude-sonnet-5 | mechanical | 153.08 | 1.00 | 3.2 |
| bibliography | claude-sonnet-5 | mechanical | 149.27 | 0.98 | 3.2 |
| seo | claude-sonnet-5 | mechanical | 135.81 | 0.89 | 3.0 |
| research (blog) | claude-sonnet-5 | mechanical | 95.23 | 0.84 | 4.7 |
| pre-risk | claude-sonnet-5 | mechanical | 52.83 | 0.73 | 3.9 |
| collect · analysis-l1/l2/l3 (dc-story) | claude-sonnet-5 | mechanical | — | — | — |
| title-gate (결정론 + §0 위반 시 자동 교정 호출) | claude-sonnet-5 (`MODEL_SONNET` 직접, 우회 호출) | — (등급 없음) | 7.34 | 0.67 | 2.7 |
| manuscript · revise-publish | (결정론, 모델 호출 없음) | — | — | — | — |

비용·소요는 스튜디오 30일 세션 로그 집계(`q2-agent/phase_usage_30d.json`, 2026-09-05 기준, 단계 20개 합계
$5,150.17 = `cost_by_token_type_30d.json` ALL.total 과 일치). 단가는 opus-5 $5/$25, sonnet-5 $2/$10
(입력/출력 MTok). 30일 총 $5,150 중 opus-5 가 78%(opus-4-8 까지 합치면 80%).

title-gate 는 PIPELINES 에 `deterministic` 으로 적혀 있지만 제목 규칙(§0) 위반이 남으면
`runTitleGate`(pipelines.ts) 가 `runClaudeCode({ model: MODEL_SONNET })` 로 자동 교정을 한 번 부른다 —
30일 11세션 $7.34. 이 호출은 `runPhaseWithRetry` 를 거치지 않으므로 아래 '우회 호출' 예외에 든다.

## env 표

| env | 뜻 | 기본 | 예 |
|---|---|---|---|
| `BLOG_MODEL_OPUS` | 글 짓는 역할의 모델 | `claude-opus-5` | `claude-fable-5-1`, `fable` |
| `BLOG_MODEL_SONNET` | 기계적 역할의 모델 | `claude-sonnet-5` | `sonnet` |
| `BLOG_MODEL_PHASE_<이름>` | 단계 하나만 덮어쓰기. 이름은 대문자, `-`→`_` | (없음) | `BLOG_MODEL_PHASE_WRITE_KO=claude-fable-5-1` |
| `BLOG_EFFORT_WRITING` | writing 등급 단계의 `--effort` | (없음 = 플래그 안 넘김) | `high` |
| `BLOG_EFFORT_MECHANICAL` | mechanical 등급 단계의 `--effort` | (없음) | `low` |
| `BLOG_FALLBACK_MODEL` | `--fallback-model <id>` — 과부하 시 CLI 자체 폴백 | (없음) | `claude-sonnet-5` |
| `BLOG_OVERLOAD_BACKOFF_SEC` | 과부하 백오프 첫 대기(초). 두 번째는 3배 | `60` | `30` |

우선순위: `BLOG_MODEL_PHASE_<이름>` > `BLOG_MODEL_OPUS`/`SONNET` > 고정 id.
effort 값은 `low · medium · high · xhigh · max` 만 받는다. 목록 밖이면 경고 로그 후 무시(플래그 없이 실행).

등급 소속: writing = write-ko · reinforce · write-en · polish-ko · polish-en · ko-prose-humanizer · synthesis ·
planning · discover · sns-write · storyline · quality-check · apply-revision.
mechanical = research* · image-reinforce · bibliography · seo · publish-prep · pre-risk · collect · analysis-*.
결정론 단계(title-gate · manuscript · revise-publish)는 모델을 부르지 않는다.

env 는 **스튜디오 `~/blog-engine/.env`** 에 적는다. `deploy/run-engine.sh` 가 기동 때 `set -a` 로 이 파일을
읽어 환경으로 올린다(`install-launchd.sh` 는 plist `EnvironmentVariables` 를 쓰지 않는다 — plist 에 적어도
효과 없음). 예:

```bash
# ~/blog-engine/.env 에 추가
BLOG_EFFORT_WRITING=high
BLOG_EFFORT_MECHANICAL=low
```

바꾼 뒤엔 엔진 재기동이 필요하다(상수는 기동 시 한 번 읽는다) — 워커 0 확인 후
`launchctl kickstart -k gui/$(id -u)/<label>`.

## 실행 시 증적

`runPhaseWithRetry` 가 단계 실행 직전에 `resolvePhaseExecution()` 으로 모델·effort·fallback 을 한 번에
확정하고, 그 값을 **즉시 `state.json` 에 쓴다**(`recordPhaseModel` + `writeRunState`). 단계 도중 엔진이
죽어도 무엇으로 돌고 있었는지 남는다. `phase-started` audit·이벤트도 같은 함수의 확정값을 쓴다 —
`BLOG_MODEL_PHASE_*` 로 덮어쓴 경우 state 와 audit 이 서로 다른 모델을 말하지 않는다.

- `state.phases[i].model` — 실행 직전 확정된 모델 id(단계 env 반영). 실행 전엔 PIPELINES 기본값.
- `state.phases[i].effort` — **실제로** `--effort` 로 넘긴 등급. 미설정이면 필드 없음. 구버전 CLI 가 플래그를
  거부해 플래그 없이 돈 경우엔 필드를 지운다(앞서 적어 둔 요청값이 남으면 증적이 거짓이 된다).
- audit `phase-started` detail `model=… effort=…` — 확정값.
- audit `flag-dropped` — 요청한 플래그를 넘기지 못했을 때: CLI 가 `--effort` 를 거부(구버전), 또는
  `BLOG_FALLBACK_MODEL` 이 그 단계의 모델과 같아 `--fallback-model` 을 뺀 경우.
- 엔진 로그 `Executing Claude Code (model=… effort=… fallback=…)`.

**우회 호출 — 이 절의 증적·effort·fallback·과부하 백오프가 적용되지 않는 곳.** `runPhaseWithRetry` 를
거치지 않고 `runClaudeCode` 를 직접 부르는 네 곳은 모델만 `MODEL_OPUS`/`MODEL_SONNET`(역할 env 반영)로
넘기고 `--effort`·`--fallback-model` 을 붙이지 않으며, 실패해도 백오프 없이 그 자리의 오류 처리를 따른다:

| 호출처 | 모델 | 용도 |
|---|---|---|
| `pipelines.ts` `revisePipeline` | `MODEL_OPUS` | 게이트에서 사람이 준 수정 지시 반영 |
| `pipelines.ts` `runTitleGate` | `MODEL_SONNET` | 제목 §0 위반 자동 교정(1회) |
| `http-server.ts` `POST /query` | `MODEL_SONNET` | 블로그 레포 질의응답 |
| `mcp-server.ts` `blog_query` | `MODEL_SONNET` | 같은 질의응답의 MCP 경로 |

이 네 곳은 명세(W4) 범위 밖이라 그대로 뒀다. `state.phases[i].effort` 가 없는 단계를 보고 "effort 가
안 넘어갔다" 고 판단하기 전에 여기 목록인지 먼저 본다.

## 과부하 폴백

`claude -p` 가 **0 이 아닌 종료코드로 끝났고**(시그널 종료 제외) stderr 또는 stdout 꼬리 2,000자에 아래
API 오류 형태 중 하나가 있으면 과부하로 본다(`src/core/models.ts` `OVERLOAD_PATTERNS`):

- API 오류 타입 `overloaded_error` · `rate_limit_error`
- SDK 예외 이름 `OverloadedError` · `RateLimitError`
- CLI 출력 형식 `API Error: 529` · `API Error: 429`
- 상태코드 문맥 `status 529` · `HTTP 429` 등
- API 메시지 `Overloaded`(대문자 O, 단어 단독)
- 문맥이 붙은 `rate limit` — 같은 줄 안에 try again · retry · exceeded · reached · hit 이 있을 때만

종전 `/overloaded|529|rate.?limit/i` 는 글 주제가 API 한도인 max-turns 실패의 본문 꼬리(소문자
`overloaded`, 문맥 없는 `rate limit`)까지 과부하로 오판할 수 있었다. 오판 한 번이면 2회 시도가 4회(+4분
대기)로 늘어 opus 30분 단계에서 최대 +1시간·토큰 2배다. 타임아웃(SIGTERM) 종료도 꼬리 문구와 무관하게
과부하로 치지 않는다.

과부하면 즉시 재시도하지 않고 60초 → 180초 기다렸다 최대 2회 더 시도한다. 매 대기는 audit 에
`phase-failed: overload backoff 60s, retry 1/2: …` 로 남는다. 그 뒤에도 실패하면 종전 정책(일반 실패 1회
즉시 재시도)이 한 번 더 남아 있고, 그것도 실패하면 단계 실패다. 취소된 run 은 대기 중이라도 재시도하지 않는다.
루프는 `src/core/retry-policy.ts` `runWithOverloadBackoff` 에 있고 `test/model-routing-exec.test.cjs` 가
순서(백오프 → 백오프 → 일반 재시도 → 실패)와 취소 중단을 가짜 오류로 돌린다.

`BLOG_FALLBACK_MODEL` 이 있으면 CLI 가 자체적으로 폴백 모델로 갈아탄다(`--fallback-model`, `-p` 전용).
이 경우 실제 사용 모델은 CLI 세션 로그에만 남으므로, 품질 추적이 필요한 기간엔 비워 두는 편이 낫다.
값이 그 단계의 모델과 같으면(예: sonnet 단계에 `BLOG_FALLBACK_MODEL=claude-sonnet-5`) 플래그를 빼고 경고
로그 + audit `flag-dropped` 를 남긴다 — CLI 번들에 'Fallback model cannot be the same as the main model'
문구가 있어 경로에 따라 거부될 수 있다(로컬 2.1.251 실측은 같은 값도 exit 0).

## 구버전 CLI 호환

`--effort` · `--fallback-model` 은 값이 있을 때만 붙인다. CLI 가 플래그를 모르면(`error: unknown option
'--effort'`) 경고 로그를 남기고 플래그 없이 1회 재시도한 뒤, **그 프로세스에서는 다시 붙이지 않는다**(모듈
변수로 기억 — 재시도·5편·단계 수만큼 '붙임→거부→뺌' 두 번 spawn 이 되풀이되지 않게). 이때
`state.phases[i].effort` 는 지워지고 audit 에 `flag-dropped: effort dropped …` 가 남는다. 그러니 env 를 먼저
켜도 엔진이 멈추진 않지만, effort 가 적용되지 않은 채 돌게 되므로 CLI 를 먼저 올리는 것이 맞다.

## 스튜디오 CLI 업데이트 절차

스튜디오(맥스튜디오) CLI 는 2.1.225, 이 맥은 2.1.251. 로컬 2.1.251 은 `claude --help` 실측으로
`--effort <level>` · `--fallback-model <model>` 둘 다 있다(`q2-agent/local_claude_help.txt`).
**스튜디오 2.1.225 는 실측하지 않았다.** CHANGELOG 근거만 있다 — 메인 CLI `--effort` 는 2.1.72 항목("Fixed
`--effort` CLI flag being reset …")으로 그 전부터 있었고, `--fallback-model` 은 2.1.143 항목("`/bg` … preserve
`--fallback-model`")으로 그 전부터 있었다. 배포 뒤 스튜디오에서 아래를 돌려 이 문단을 실측으로 바꾼다:

```bash
claude --version; claude --help | grep -E -- '--effort|--fallback-model'
```

2.1.226~2.1.251 사이에 effort 관련 수정이 여러 건 있다(`q2-agent/changelog_hits_narrow.md`).

전제: **워커 0 일 때만** (`curl -s localhost:<port>/runs | jq '[.[]|select(.status=="running")]|length'` 가 0).
실행 중인 `claude -p` 자식은 바이너리 교체와 무관하게 끝까지 돌지만, 새 단계가 새 바이너리를 잡으므로
한 run 안에서 버전이 섞인다.

```bash
# 0) 엔진이 잡는 바이너리가 어느 것인지 먼저 — 이걸 건너뛰면 아래 절차 전체가 헛일이 된다.
#    deploy/run-engine.sh 의 PATH 는 /opt/homebrew/bin 이 ~/.local/bin 보다 앞이다. `which -a claude` 의
#    첫 줄이 /opt/homebrew/bin/claude 면 설치기(~/.local/bin)를 올려도 엔진은 Homebrew 것을 계속 쓴다.
#    그 경우 Homebrew 쪽을 지우거나(brew uninstall) run-engine.sh PATH 순서를 바꾼 뒤 진행한다.
which -a claude          # 첫 줄이 $HOME/.local/bin/claude 여야 한다
claude --version; ls -l ~/.local/bin/claude

# 1) 설치 (최신)
curl -fsSL https://claude.ai/install.sh | bash
# 1') 특정 버전 고정
curl -fsSL https://claude.ai/install.sh | bash -s 2.1.251

# 2) 심링크 확인 — 설치기는 ~/.local/bin/claude 를 ~/.local/share/claude/versions/<ver> 로 건다
ls -l ~/.local/bin/claude ~/.local/share/claude/versions/
claude --version

# 3) 플래그 확인
claude --help | grep -E -- '--effort|--fallback-model'

# 4) 엔진 재기동(env 바꿨을 때만) — 형님 직접, 워커 0 확인 후
launchctl kickstart -k gui/$(id -u)/<label>
```

롤백: 이전 버전 디렉토리가 남아 있으므로 심링크만 되돌린다.

```bash
ln -sfn ~/.local/share/claude/versions/2.1.225 ~/.local/bin/claude && claude --version
```

(버전 디렉토리가 지워졌으면 `bash -s 2.1.225` 로 재설치.) 롤백 뒤에도 0) 단계의 `which -a claude` 로
엔진이 잡는 바이너리를 다시 확인한다.

## A/B 설계 — Opus 5 vs Fable 5.1 (채택 보류)

목적: 같은 주제 2편을 두 모델로 써서 한국어 슬롭 계량이 갈리는지 본다. 비용은 Fable 5.1 이 2배(출력 $50 vs $25)
이므로, 계량이 뚜렷이 좋을 때만 writing 등급 전환을 검토한다.

1. 주제 2건을 고른다(발굴 후보 중 유사도 낮은 것). 각 주제를 두 run 으로 낸다 — run A 는 기본,
   run B 는 `BLOG_MODEL_OPUS=claude-fable-5-1` 로 기동한 엔진(또는 `BLOG_MODEL_PHASE_WRITE_KO` 등 writing 단계만).
   mechanical 단계는 두 run 모두 sonnet-5 로 같게 둔다.
2. 네 run 의 `state.phases[].model` 로 배정이 의도대로였는지 코드로 확인한다.
3. 산출 KO 본문을 `scratchpad/slop-measure` 스크립트에 넣는다 — `01_select_and_extract.py`(본문 추출) →
   `02_run_metrics.sh`(im-not-ai 계량) → `03_aggregate.py`. 비교 지표는 1천 자당 정규화 카운트
   (쉼표 계열·risk_band·ending_diversity·interference_index 는 길이·기준선 교란으로 제외).
4. 비용·소요는 스튜디오 세션 로그를 `q2-agent/studio_usage_collect_v2.py` → `analyze_usage.py` 로 집계한다.
5. 판정은 289편 분포의 p50·p90 대비 위치로 한다. 2편은 표본이 작으므로 결과는 "전환 후보" 까지만 — 채택은 보류.

## 관련

- 조사 산출물: `scratchpad/q2-agent/README.md` (30일 모델·단계·비용 실측)
- `docs/blog-service/hosting.md` — 배포·환경변수 전반


## 런 단위 글쓰기 모델 선택 — `writingModel` (2026-09-05)

블로그 품질의 기준선은 **Opus 5**(일일 배치와 동일)다. 사람이 발행 요청에서 명시적으로 고를 때만 글쓰기 단계를 **Fable 5.1**로 올린다.

| 어디서 | 값 | 효과 |
|---|---|---|
| 콘솔 발행 요청 → '글쓰기 모델' 메뉴 | 기본 / Fable 5.1 | `POST /pipelines` body `writingModel: "fable"` |
| HTTP `POST /pipelines` | `writingModel: 'opus' \| 'fable'` | 400 if other |
| MCP `blog_run_pipeline` | `writingModel` | 동일 |

- 적용 범위: `WRITING_PHASES`(write-ko·reinforce·write-en·polish-ko·polish-en·ko-prose-humanizer·synthesis·planning·sns-write 등)만. research·image-reinforce·bibliography·seo·publish-prep 같은 기계 단계는 그대로 Sonnet 5.
- 우선순위: **런의 명시 선택 > `BLOG_MODEL_PHASE_<이름>` > 역할 env > 고정 id.** 메뉴의 선택은 그 런에 대한 사람의 명시적 의도라 운영자의 전역 env 보다 앞선다. Fable id 는 `BLOG_MODEL_FABLE`(기본 `claude-fable-5-1`)로 바꿀 수 있다.
- 증적: `state.writingModel`, 각 단계의 실제 모델은 `state.phases[i].model`.
- 비용: Fable 5.1 은 Opus 5 보다 비싸다(2026-09-05 스모크: 한 줄 응답 $0.084). 일일 배치 기본 경로에는 쓰지 않는다. 채택 판단은 A/B(같은 주제 2편, im-not-ai 계량 + 사람 판독)로.
