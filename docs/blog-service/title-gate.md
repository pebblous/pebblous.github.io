# title-gate — 제목 게이트 (결정론 검사 + 눈감은 심판)

> 한 줄 비유: 형태 검사기는 자[尺]고, 심판은 제목만 보고 기사를 짐작하는 독자다. 자로 잰 뒤 독자에게 묻는다.

- 무엇: 발행 직전(`sns-write` 뒤, `manuscript` 앞) 이 run 이 만든 글의 제목 3슬롯(mainTitle·subtitle·pageTitle)을 결정론 검사기로 재고, ko 제목은 LLM 심판이 제목만 보고 두 시험(중학생·클릭)을 매긴다.
- 왜: 제목 정본 v2(2026-09-11) 아래서 발행된 10편 중 8편이 형님 판정에서 실패했는데, 결정론 검사기는 그 8편에 9~10점을 줬다. 형태 규칙은 필요조건일 뿐이다. 정본 v3(`docs/ko-style-standard.md` §4-2, 2026-09-13)의 두 시험은 읽는 쪽이 판정해야 한다.
- 효과: 제목마다 심판의 추측·점수·판정이 audit 에 남고, 미달 제목은 발행 전에 한 번 다시 지어진다. 발행은 막지 않는다(차단 여부는 형님 미결).

## 1. 흐름

```
결정론 검사(tools/title-census.py --check-html) ─ 위반 ─▶ sonnet 교정 1회 ─▶ 재검사
        │ 통과(또는 교정 뒤)
        ▼
눈감은 심판(ko 만) 1단계: mainTitle 만 → {guess, understand, click, natural}

> 심판 호출은 프롬프트를 **본문으로**(`inlinePrompt: true`) 넘긴다. 다른 단계처럼 `.current-prompt.md` 경로만 넘기면 Read 가 금지된 심판은 파일을 못 열고 "내용을 붙여 달라"고 되묻다 끝난다 — 2026-09-15 배포 뒤 09-18 까지 심판 12편이 전부 "1단계 JSON 파싱 불가"로 생략된 원인(2026-09-18 수리). `promptArgFor` 는 disallowedTools 에 Read 가 있으면 플래그와 무관하게 본문을 넘긴다.
                    2단계: 1단계 답 + subtitle + <main> 첫 <p> 둘 → {accurate, misleading}
        │ 임계 미달(understand<4 · click<3 · accurate<4 · misleading)
        ▼
글쓰기 등급 모델(opus 계열)로 제목 재작성 1회 ─▶ 결정론 검사 ─▶ 심판 한 번 더 ─▶ audit (여기서 끝, 발행 계속)
```

| 구성요소 | 위치 |
|---|---|
| 단계 본체 | `service/blog-service-engine/src/core/pipelines.ts` (`runTitleGate`) |
| 심판(프롬프트·파싱·판정·재작성 프롬프트) | `service/blog-service-engine/src/core/title-judge.ts` |
| 결정론 검사기(규칙의 단일 정본, TS 에 중복 구현하지 않는다) | `tools/title-census.py` |
| 규칙 본문 | `docs/ko-style-standard.md` §4-2 v3 — 교정·재작성 프롬프트가 워커에게 먼저 Read 하게 한다 |

- 1단계는 제목 밖의 것을 보지 않는다 — 호출을 둘로 나눈 이유다. 2단계는 1단계 답을 고치지 못하고 글과 대조만 한다.
- 심판 모델은 `MODEL_SONNET`, 재작성 모델은 `resolvePhaseExecution('title-gate', MODEL_OPUS)` — title-gate 는 `WRITING_PHASES` 밖이라 런의 fable 선택은 적용되지 않는다. `BLOG_MODEL_PHASE_TITLE_GATE` 로 덮어쓸 수 있다.
- en 파일은 결정론 검사만 받는다. 심판·재작성은 ko 파일만이다.
- 재작성 상한은 1회다. 재작성 뒤 결정론 위반이 새로 생겨도 더 부르지 않고 audit 에만 남긴다.

## 2. 비차단과 실패

어느 경우에도 발행을 막지 않는다. 심판 호출 실패·타임아웃(단계당 180초)·JSON 파싱 불가·mainTitle 없음은 `심판 생략 — <사유>` 로 audit 에 남기고 통과 처리한다. 재작성 호출이 실패하면 원제목으로 발행한다. 결과가 미달로 끝난 제목은 제목 검토 콘솔에서 사후 정리한다.

## 3. 환경변수

| env | 뜻 | 기본 |
|---|---|---|
| `BLOG_TITLE_JUDGE` | 심판 켜고 끄기 — `on` \| `off`. 모르는 값은 `on` 으로 간주하고 로그 | `on` |
| `BLOG_MODEL_PHASE_TITLE_GATE` | 재작성 모델 덮어쓰기(models.ts 공통 규칙) | (없음 = `MODEL_OPUS`) |

## 4. audit 형식 (kind `title-gate`, phase `title-gate`)

한 제목당 한 줄, 사후 집계가 정규식으로 읽도록 형식을 고정했다.

```
<file>: 심판 통과 :: "<제목>" :: {"guess":"…","understand":5,"click":4,"natural":4,"accurate":5,"misleading":false}
<file>: 심판 미달 :: "<제목>" :: {…} :: 미달 understand 2<4 (중학생 시험) · click 1<3 (클릭 시험)
심판 미달 → 제목 재작성 1회(<model>): <file>
<file>: 재작성 후 심판 통과 :: "<새 제목>" :: {…} (원제목 "<옛 제목>")
심판 생략 — <사유> :: "<제목>"
```

결정론 검사의 audit(`§0 위반 감지 …`·`자동 교정 후 §0 재판정 통과`·`교정 후 위반 잔존`)은 종전 그대로다 — `§0` 은 게이트 이름(호환)일 뿐, 규칙은 v3 다.
