# ko-prose-gate — 한국어 본문 코드 계량 게이트

> 한 줄 비유: 휴머나이저(LLM)가 "다 고쳤다"고 말하면, 그 말을 믿는 대신 저울에 올려 본다.

- 무엇: 발행 직전 한국어 본문(`ko/index.html` 의 `<main>`)을 **코드로** 계량해 문체 임계를 넘었는지 판정하고 기록하는 결정론 단계.
- 왜: 지금까지 본문 문체 검수는 `ko-prose-humanizer` 의 자기보고뿐이었다. 최근 60일 289편 계량에서 medium 판정 비율이 8월 중순부터 5~10%→27~30% 로 뛰었지만 파이프라인은 그것을 알 길이 없었다.
- 효과: 글마다 수치가 남고(일자 집계·admin KPI), 임계를 넘은 글은 PR 본문에 표시되며, 가장 자주 넘는 지표가 다음 글의 휴머나이저 프롬프트로 되먹임된다. 발행은 막지 않는다(무인 야간 배치).

## 1. 위치와 동작

```
… → polish-ko → polish-en → ko-prose-humanizer → [ko-prose-gate] → seo → sns-write → title-gate → manuscript → publish-prep
```

blog · report · dc-story 파이프라인 공통. 휴머나이저 **바로 다음, seo 앞**이다 — 뒤에 두면 SNS·SEO 산출물이 옛 본문 기준으로 남는다.

| 구성요소 | 위치 |
|---|---|
| 단계 구현 | `service/blog-service-engine/src/core/prose-gate.ts` (`runProseGate`) |
| 계량기 | `service/blog-service-engine/vendor/im-not-ai/measure.py` (파이썬 표준 라이브러리만, 3.9 호환) |
| 어휘 티 사전 | `service/blog-service-engine/vendor/im-not-ai/lexical-tells.json` |
| 임계값 | `service/blog-service-engine/config/prose-gate-thresholds.json` (스크립트 산출물, 손으로 고치지 않는다) |
| 임계 도출 | `service/blog-service-engine/scripts/derive-prose-thresholds.py` |
| 일자 집계·되먹임 | `service/blog-service-engine/src/core/quality.ts` |
| 기록 | `$BLOG_REPO/_workspace/quality/YYYY-MM-DD/<runId>.json`, `state.quality.prose`, audit `prose-gate` |
| 조회 | `GET /quality?days=7` (Bearer), admin KPI '슬롭 지수(7일)' |
| 테스트 | `service/blog-service-engine/test/prose-gate.test.cjs` |

대상 글 탐색은 커밋·미커밋·미추적을 모두 본다: `git diff --name-status main...HEAD` ∪ `git status --porcelain -uall` ∪ `git ls-files --others --exclude-standard`. 워커가 중간 단계에서 커밋해 버리면 porcelain 만 보는 탐지기는 눈이 먼다(title-gate·manuscript 무음 생략 사고). 이 헬퍼(`listRunFiles`)는 `prose-gate.ts` 안에 함수 하나로 고립돼 있어, 공용 `gitfiles.ts` 가 생기면 그 함수만 바꾼다.

- **대상은 이 run 이 새로 만든 `ko/index.html` 만이다**(diff 의 `A`, porcelain 의 `A`/`??`, 미추적). 파이프라인이 기존 글의 `ko/index.html` 을 부수적으로 고친 경우(관련 링크 등)는 `existingModified` 로 기록만 하고 계량·재실행하지 않는다 — enforce 의 겨냥 재실행이 남의 글을 다시 쓰는 일을 막는다. rename 은 새 경로로 보되 새 글로 치지 않는다.
- 세 git 명령에 `-c core.quotepath=false` 를 붙인다. 기본값이면 한글 슬러그(사본에 `report/개정-개인정보보호법-ai-데이터` 가 실재)가 8진 이스케이프+따옴표로 나와 경로 정규식에 걸리지 않아 매번 '대상 없음' 이 된다.

**단계 표가 바뀌어도 옛 run 이 밀리지 않는다.** `executeNextPhase` 는 다음 단계 정의를 `state.phases` 의 **이름**으로 찾는다(이 묶음에서 index 조회를 이름 조회로 바꿨다). `state.phases` 는 run 생성 시 표의 스냅샷이라, 표 중간에 `ko-prose-gate` 를 끼운 채 index 로 이으면 배포 전에 만들어진 run(게이트 대기·중단 후 자동 재개)이 한 칸씩 밀려 `publish-prep` 이 영영 실행되지 않은 채 completed 로 끝난다(발행 유실). 이름 조회면 옛 run 은 `ko-prose-gate` 를 건너뛰고 나머지는 제 이름대로 간다.

## 2. 지표 정의

계량기는 [im-not-ai](https://github.com/epoko77-ai/im-not-ai) 2.3.2 의 `metrics.py`·`metrics_v2.py` 를 바이트 그대로 벤더링해 쓴다(§7). 판정에 쓰는 지표는 일곱이다. 카운트형 여섯은 **1천 자당 정규화**한다.

| 지표 | 뜻 | 단위 |
|---|---|---|
| `antithesis` | "X가 아니라 Y" 류 부정-긍정 대구 | 1천 자당 건수 |
| `relative_clause_nesting` | 관형형 어미(-ㄴ/-는/-ㄹ/-한/-된)가 한 문장에 3개 이상 겹친 문장 | 1천 자당 문장 수 |
| `da_streak` | "-다" 종결 문장이 4개 이상 연달아 이어진 구간 | 1천 자당 구간 수 |
| `by_passive` | "~에 의해 + 피동" (영어 수동태 직역) | 1천 자당 건수 |
| `double_passive` | 되어진다·보여진다·잊혀진 류 이중 피동 | 1천 자당 건수 |
| `inanimate_subject` | 추상·무정물 주어 + 만능 동사(보여준다·시사한다·만든다) 문장 | 1천 자당 문장 수 (벤더의 문장 비율 × 문장 수) |
| `lexical_tell_count` | `lexical-tells.json` 의 어휘·구문 티 총 건수 | 건수 (정규화 안 함) |

`lexical-tells.json` 은 상류 `diagnosis-rules.md` 의 S1(1회로 확신) 항목 중 정규식으로 잡히는 것(A-1·A-3·A-7·A-8·C-8)과, 상류 라우터가 세던 S2 구문 티(D-8 분열문·D-10 이유다·D-11 시간지평·D-12 반론 슬롯·D-14 은유 가족·A-20 피동 진행·F-7 범용 정책동사)를 같은 정규식으로 담는다. S2 를 넣은 이유: 289편에서 가장 자주 잡힌 티가 이 묶음(분열문 35%·은유 가족 26%·피동 진행 21% 문서)이라, S1 만 세면 계량이 눈을 감는다. "한 문단 3회+ 밀집" 시그니처(A-1)는 문단 안 적중만 센다. D-14(은유 가족)에서 **'청사진' 은 뺐다** — 페블러스 정본 용어(책 『청사진을 수확으로』, 데이터 청사진)라 티가 아니며, 두면 되먹임·겨냥 재실행 프롬프트가 이 낱말을 지우라고 지시하게 된다(289편에서 9회, D-14 전체 163회 중).

### 2-1. 종결체(`register`) — 통계 지표가 아니라 규칙 항목

2026-09-05 결정: **블로그·리포트·스토리 본문 종결은 언제나 해라체(~다). 합쇼체·해요체 금지, 직접 인용문 안만 예외**
(정본 [`docs/ko-style-standard.md`](../ko-style-standard.md) §4-1). 계량기가 `<main>` 본문에서 **`<blockquote>` 를 통째로 지운 사본**(`strip_blockquotes`, HTML 단계)을 따로 만들어 따옴표(" " ' ') 안을 지운 뒤 문장마다 종결을 하나로 분류해 센다 — `tools/check-ko-prose.py` 의 `extract_main_for_register` 와 같은 자다. 통계 지표·`char_count` 는 기준선 추출기(`extract_main_text`) 그대로라 임계와 어긋나지 않는다. 평문 입력(`--html` 없음)과 기준선 `01_input.txt` 에는 blockquote 경계가 남아 있지 않으므로 그 경로에서는 인용 안 문장도 세어진다(아래 기준선 수치가 그렇다 — 사본 HTML 로 다시 세어도 `register_off` 138편은 같았다).

| 필드 | 뜻 |
|---|---|
| `register.hapsyo` | 합쇼체 문장 수 — `(?<!아)니다[.!?]` ("아니다" 는 해라체) |
| `register.haeyo` | 해요체 문장 수 — `(해요\|예요\|에요\|죠\|네요\|거예요)[.!?]` |
| `register.haera` | 해라체 문장 수 — `(?<!(?<!아)니)다[.!?]` (합쇼체가 아닌 "-다" 전부) |
| `register.non_haera_ratio` | (합쇼체+해요체)/(셋의 합), 소수 4자리. 종결이 하나도 없으면 0 |
| `examples.register` | 합쇼체·해요체 문장 예 ≤3 — 겨냥 재실행 프롬프트용 |

판정: `thresholds.register = {canon: "haera", max_non_haera_ratio: 0.10}` 이 있을 때 `non_haera_ratio > 0.10` 이면
`verdict.register_off = true`, `flags` 에 `register_off`, 그리고 **장르 무관 단독 exceed** 다. 합성 규칙("2개 이상 p95")과
별개로 두는 이유: 이것은 분포에서 벗어난 정도가 아니라 규칙 위반이라, p90/p95 로 재는 대상이 아니다. `verdict.stat_status`
에 종결체를 뺀 통계 판정을 따로 남긴다 — `status=exceed` 인데 `stat_status=ok` 면 종결체만으로 걸린 것이다.

`register` 블록은 분포에서 도출하지 않는다(손으로 정한 규칙). `derive-prose-thresholds.py` 는 기존 config 의 `register`
블록 중 결정값(`canon`·`max_non_haera_ratio`·`decided`·`why`)을 보존하고 설명문(`measure`·`rule`)은 코드의 기본값으로 새로 쓰며(자가 바뀌면 설명도 따라간다), `expected_rates` 의 ok/warn/exceed 는 `stat_status` 로 세며 종결체 이탈은
`register_off_n`·`register_off_rate` 로 따로 적는다. 기준선 289편에 되돌려 적용한 수치: **블로그 131/208 (63.0%)·리포트
5/79 (6.3%)·스토리 2/2·전체 138/289 (47.8%)** 가 `register_off` 다 — 이것을 exceed 에 합치면 "exceed ≤ 15%" 검사가 뜻을 잃으므로 분리했다.
세는 자의 틀린 판례(`[^습입]다.` 등)는 정본 문서 §4-1 에 있다.

`lexical_tell_count` 는 명세대로 **절대 건수**다. 8월 중순 이후 글 길이가 두 배가 됐으므로 길이에 끌려갈 수 있다(장르별 p95 블로그 4·리포트 8.1 이 일부 흡수). audit 기간에 `tells_exceed` 가 `long` 플래그와 같이 뜨는지 본다 — 겹치면 1천 자당으로 바꾸고 이 절과 임계를 같이 고친다(§7 3번).

### 왜 쉼표 계열·risk_band 등을 판정에서 빼는가

- **쉼표 계열**(`comma_inclusion_rate`·`ending_comma_rate` 등)과 그 z-score 로 만드는 `risk_band`: 상류 기준선은 에세이·시·초록 코퍼스다. 우리 장르(기술 블로그·리포트)에서는 289편 **전부**가 `ending_comma_rate` z ≥ 1, 99% 가 z ≥ 2 로 나왔다. 기준선이 어긋나 있어 판정에 쓰면 모든 글이 걸린다. 참고값(`reference_only`)으로만 남긴다.
- **길이 교란**: `relative_clause_nesting`·`antithesis` 원값은 글자 수와 상관 0.85·0.78, `lexical_diversity` 는 −0.83 이다. 8월 중순부터 글 길이가 두 배(블로그 중앙 5.7k→10k자, 리포트 10.6k→27.8k자)가 되면서 medium 판정도 같이 뛰었다 — 길이가 판정을 끌고 간 것이다. 1천 자당 정규화 뒤에는 상관이 −0.06·−0.11 로 사라진다. `ending_diversity`·`interference_index` 도 길이·기준선에 흔들려 뺀다.
- 길이 자체는 `char_count` 가 장르 p90(블로그 10,614자·리포트 27,397자)을 넘으면 `flags: ['long']` 으로 **기록만** 한다.

## 3. 임계 도출 절차

1. 표본: 최근 60일 KO 발행글 289편(블로그 208·리포트 79·스토리 2). 사본 블로그 HTML 의 `<main>` 을 추출한 텍스트(`slop-measure/runs/*/01_input.txt`).
2. `scripts/derive-prose-thresholds.py` 가 **게이트가 쓰는 계량기 그 자체**(`measure.py`)로 289편을 다시 재고, 장르별 p90·p95 를 선형 보간으로 계산해 JSON 을 만든다. 상류 `00_metrics.json` 은 같은 텍스트를 쟀는지(`char_count` 동일) 대조하는 데만 쓴다 — 두 벌의 계산이 다른 판정을 내는 것을 막는다(대조 결과 불일치 0건).
3. 장르는 글 경로 접두어로 정한다(`blog`/`report`/`story`, `project`→blog). 표본 5편 미만인 장르(story 2편)는 blog 임계로 폴백한다.
4. 같은 스크립트가 판정 규칙을 289편에 되돌려 적용해 `expected_rates` 를 남긴다.

```
python3 scripts/derive-prose-thresholds.py --runs <slop-measure/runs> --selected <selected_articles.json> \
  --out config/prose-gate-thresholds.json --date 2026-09-05
```

### 판정 규칙

- `warn` = 어느 한 지표가 장르 p90 초과.
- `exceed` = 지표 **2개 이상**이 장르 p95 초과, 또는 `lexical_tell_count` ≥ 장르 p95.
- **`exceed` (단독)** = `register.non_haera_ratio` > 0.10 — 종결체 이탈(§2-1). 장르 무관, `flags: ['register_off']`.
- 그 외 `ok`.

지표별 p90 을 따로 두고 하나라도 넘으면 걸리게 하면 289편의 70.6% 가 걸린다 — 그래서 합성 규칙이다. p95 가 0 인 지표(`by_passive`·`double_passive`)는 1건이라도 있으면 초과로 센다(둘 다 1회로 확신하는 티).

### 2026-09-05 도출 결과 (`expected_rates`)

| 장르 | n | ok | warn | exceed | long |
|---|---|---|---|---|---|
| blog | 208 | 64.9% | 25.5% | **9.6%** | 9.6% |
| report | 79 | 57.0% | 35.4% | **7.6%** | 10.1% |
| 전체 | 289 | 63.0% | 28.0% | **9.0%** | 9.7% |

목표 exceed ≤ 15% 를 만족해 규칙을 조정하지 않았다. exceed 26편의 초과 지표는 관형절 중첩·무정물 주어·-다 연쇄·대구가 각 15편, 어휘 티 7편, 이중 피동 3편이다. 규칙을 바꾸면 이 표와 근거를 같이 고친다.

'청사진' 을 어휘 사전에서 뺀 뒤 재도출(같은 날): 바뀐 셀은 리포트 `lexical_tell_count` p90 6.2→6.0·p95 9.2→8.1 뿐이고, 리포트 warn 1편이 ok 로 옮겨 갔다(exceed 는 변화 없음). 위 표는 재도출 값이다.

종결체 규칙(§2-1)을 넣고 같은 날 다시 도출: 장르별 p50/p90/p95·char_count 셀은 **한 값도 바뀌지 않았고** 위 표(ok/warn/exceed)도 그대로다
(종결체는 `stat_status` 밖에서 센다). 추가된 것은 `register` 블록과 `expected_rates.*.register_off_n/rate` 뿐이다.

## 4. 모드 (`BLOG_PROSE_GATE`)

| 값 | 동작 |
|---|---|
| `off` | 계량 생략. `status: skipped` 로 기록. |
| `audit` (기본) | 계량·판정을 기록만 한다. exceed 면 `prNote` 를 남긴다. |
| `enforce` | exceed 면 `ko-prose-humanizer` 를 **겨냥 재실행 1회**(opus, 초과 지표 이름·수치·해당 문장 예 3개를 프롬프트에 주입, 20분 타임아웃) 후 재계량. `register_off` 면 프롬프트에 비해라체 비율·합쇼체/해요체/해라체 문장 수·위반 문장 예와 함께 **"종결체를 해라체(~다)로 통일한다(직접 인용문 안은 제외)"** 지시가 들어간다(따옴표 안·`<blockquote>` 안은 그대로 두라고 명시 — 계량기도 그 안은 세지 않는다). 규칙 2의 "-다 연쇄는 종결을 섞어" 는 **해라체 안에서**(-는가·-자·-ㄴ다) 섞으라고 적어 해라체 통일 지시와 충돌하지 않게 했다(`da_streak` 은 '니다' 도 -다 로 세므로 해라체 전환이 이 지표를 올리지 않는다). 두 결과를 `attempts[0]`·`attempts[1]` 로 기록. 그래도 exceed 면 `status: exceeded`. 재실행 뒤 **재계량이 실패**하면 1차 결과를 `attempts[1]` 로 복사하지 않는다('두 번째가 첫 번째와 같다' 는 거짓 자료가 된다) — `attempts` 는 1개만 남고 `rerun.remeasureError`·`target.error` 에 사유를 적으며, 효과를 확인하지 못했으므로 `exceeded` 로 둔다. |

어느 모드에서도 **발행을 막지 않는다.** 결정론 단계 안에서 `paused_at_gate` 를 세워도 프레임워크가 무시하고 다음 단계로 가므로 사람 대기는 쓰지 않는다(무인 야간 배치).

**초과가 사람 눈에 닿는 길 = PR 본문.** exceed/exceeded 면 `state.quality.prose.prNote`('문체 게이트 초과 (ko-prose-gate exceeded, 겨냥 재실행 후에도): 대구 2.4>1.99, 종결체 이탈 비해라체 0.63>0.1, …') 가 채워지고, `pipelines.ts` 가 두 곳에서 읽는다:

1. `publish-prep` 프롬프트 — 스킬에게 `gh pr create --body` 첫 단락에 이 한 줄을 글자 그대로 넣으라고 지시한다.
2. `ensurePullRequest` — 엔진이 PR 을 직접 만들 때는 본문에 붙이고, 스킬이 만든 PR 이 있을 때는 본문에 '문체 게이트 초과' 가 없으면 `gh pr comment` 로 보완한다(실패해도 발행은 계속, audit `prose-gate` 에 남김).

그 밖에 audit 이벤트(`kind: prose-gate`)·엔진 로그·`_workspace/quality` 파일·`GET /quality` 로도 드러난다.

실패는 조용히 지나가지 않는다: 파이썬 부재·벤더 미배포·크래시·60초 타임아웃·`<main>` 없음·대상 글 없음은 모두 `status: unavailable` 로 사유와 함께 기록(state·audit·quality 파일)하고 로그를 남긴 뒤 통과한다.

환경변수(`.env.example` 에 주석으로 있음): `BLOG_PROSE_GATE`, `BLOG_PROSE_GATE_PYTHON`(기본 `python3`), `BLOG_PROSE_GATE_VENDOR_DIR`, `BLOG_PROSE_GATE_THRESHOLDS`, `BLOG_QUALITY_DIR`.

## 5. 되먹임

`ko-prose-humanizer` 단계 프롬프트에 `quality.ts` 의 `proseFeedbackSection(7)` 이 붙는다: 최근 7일 계량된 글에서 **1차 계량(재실행 전)** 기준으로 가장 자주 p90 을 넘은 지표 상위 3 을 이름·설명·편수와 함께 넣는다. LLM 자기보고 파일은 쓰지 않는다. 기록이 없거나 초과 지표가 없으면 문장을 넣지 않는다(빈 문자열).

1차 계량을 쓰는 이유: 재실행 후 값은 게이트가 고친 결과라, 휴머나이저가 "만들어 내는" 문체를 보려면 재실행 전 값이어야 한다.

## 6. 집계와 조회

- `GET /quality?days=7` → `{days, tz, from, to, n, n_total, unavailable, warn_rate, exceed_rate, stat_exceed_rate, median_per_1k, median_lexical_tell_count, top_exceeded_metrics[3], long_share, register_off_rate, by_genre, rerun}`. `exceed_rate` 는 exceed+exceeded, 분모는 계량된 글(unavailable·skipped 제외). **`exceed_rate` 는 종결체 단독 exceed(`register_off`)를 포함하므로 임계 JSON `expected_rates.exceed_rate`(종결체를 뺀 통계 판정, 목표 ≤ 15%)와 같은 눈금이 아니다** — 기준선 블로그 63% 가 `register_off` 라 admin 큰 숫자가 그만큼 올라간다. 통계 눈금은 `stat_exceed_rate`(마지막 계량의 `stat_status === 'exceed'` 비율, 옛 기록은 `status` 로 대신) 로 따로 낸다. `register_off_rate` 는 1차 계량에서 `register_off` 가 뜬 글의 비율(같은 분모) — 종결체는 `top_exceeded_metrics`(p90/p95 지표 표)에 섞지 않는다.
- admin KPI '슬롭 지수(7일)': 큰 숫자 = exceed 비율(종결체 포함), 아래 줄 = warn 비율·**통계 exceed 비율(`stat_exceed_rate`)**·편수·종결체 이탈 비율·최다 초과 지표. 툴팁 한 줄에 두 눈금의 차이와 종결체 뜻을 적었다.
- 되먹임(§5)에도 종결체 이탈이 있으면 "최근 n편 중 k편이 이탈 — 본문 종결은 해라체(~다)로 쓴다" 한 줄이 붙는다.
- **날짜는 한국 시간(`tz: Asia/Seoul`)** — 기록 폴더 `YYYY-MM-DD` 와 `days` 창 모두. 02:00 KST 야간 배치가 UTC 로는 전날 폴더에 들어가 admin '7일' 라벨과 어긋나던 것을 통일했다. 쓰기와 읽기가 같은 `dayOf` 를 쓴다.
- admin 감사 타임라인의 `KIND_LABEL` 에는 `prose-gate` 가 없어 원문 kind 가 그대로 뜬다(허용 범위 밖 — 후속 묶음).

## 7. 롤아웃 계획

1. **audit 3일**: 기본 모드로 배포. `/quality?days=3` 에서 exceed·warn 비율이 도출값(전체 9.0%·28.0%)과 크게 다르지 않은지, unavailable 이 0 인지(스튜디오 python 3.9.6 에서 계량기가 돈다는 뜻) 본다. 되먹임 문장이 휴머나이저 프롬프트(`_workspace/.runs/<id>/.current-prompt.md`)에 실리는지, exceed 글의 PR 본문에 '문체 게이트 초과' 줄이 실리는지(스킬이 빠뜨리면 엔진 댓글) 확인한다.
2. exceed 가 15% 를 넘거나 특정 지표가 매번 걸리면 임계가 아니라 지표 정의를 먼저 의심한다(`lexical-tells.json` 오탐 등). 고치면 임계를 다시 도출한다.
3. `tells_exceed` 가 `long` 플래그와 같이 뜨는지 본다(§2). 겹치면 `lexical_tell_count` 를 1천 자당으로 바꾸고 임계를 재도출한다 — 규칙 변경이라 이 문서에 근거를 적는다.
4. **enforce 전환**: `BLOG_PROSE_GATE=enforce`. 비용: 289편 되돌려 적용 exceed 기대율 9% × opus 1회(글당 최대 20분) — 하루 5편이면 평균 0.45회/일. 전환 뒤 3일 동안 재실행 회복률(`rerun.recovered / rerun.n`)을 보고 유지 여부를 정한다. 회복률이 낮으면 겨냥 프롬프트를 손본다. 전환 결정과 이 수치는 결정 원장에 적는다.
   - `dc-story` 파이프라인: story 장르는 표본 2편이라 blog 임계로 폴백한다(설정 파일 `genres.story.why`). 이 사실을 알고 켠다.
5. 임계 재도출은 분기마다, 또는 계량기·어휘 사전이 바뀔 때(`vendor/im-not-ai/UPSTREAM.md` 갱신 절차).

배포 시 알아둘 것:
- `deploy/redeploy.sh`·`deploy/bootstrap-server.sh` 둘 다 `vendor/`·`config/` 를 dist 옆에 복사한다. `vendor/` 는 `--delete` 로 거울처럼, `config/` 는 `--delete` 없이(운영 머신의 다른 파일을 지우지 않는다). 배포 직전 `ls ~/blog-engine-data/engine/config` 한 번.
- 단계 표가 바뀌지만 옛 run 은 이름 조회로 이어지므로(§1) 재개돼도 밀리지 않는다. 그래도 게이트 대기·중단 run 이 0건일 때 배포하는 편이 깨끗하다.

## 8. 벤더 라이선스

`vendor/im-not-ai/` 의 `metrics.py`·`metrics_v2.py`·`baseline.json`·`baseline_v2.json` 은 [epoko77-ai/im-not-ai](https://github.com/epoko77-ai/im-not-ai) 2.3.2(커밋 31a66d1)에서 수정 없이 가져왔다. **MIT 라이선스**이며 원문은 `vendor/im-not-ai/LICENSE` 에 있다. 출처·복사 목록·갱신 절차는 `vendor/im-not-ai/UPSTREAM.md`. `measure.py`·`lexical-tells.json` 은 우리가 쓴 것이다.
