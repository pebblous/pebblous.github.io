# polish-ko 변경 메모 (→ EN 번역 시 참조)

대상: `blog/california-sb947-no-robo-bosses/ko/index.html`
기준: `docs/ko-style-standard.md` §4-1(해라체 정본) · §4-2 v3(제목 두 시험) + Pebblous Warm Expert Tone + ko-prose-humanizer T1~T11 렌즈

> 이 파이프라인에는 `blog-diagnose` 단계가 없어 스킬이 입력으로 적은 `diagnosis.json`이 존재하지 않는다.
> 같은 기준으로 자가 진단해 `_workspace/.runs/<run>/polish-ko_diagnosis.json`에 남겼다.

## 진단 요약

| 점검 대상 | 판정 |
|---|---|
| 제목 3슬롯 (mainTitle·subtitle·pageTitle) | §4-2 v3 두 시험 통과 + 금지 위반 없음 → **보존** |
| 리드 (Executive Summary 3문단) | ¶1 "이 글은 … 본다" 개시는 정본 문체, ¶3이 사실/해석 경계를 라벨링 → 유지 |
| 섹션 헤딩 5종 | 2·3·4가 명사구 라벨 → **3건 재작성** (1은 이미 질문형, 5는 정본 고정) |
| 섹션 인트로 문단 5개 | 전부 사실 한 컷 또는 조문 위치로 열림 → 유지 |
| 종결체 | 해라체 157 · 합쇼체 0 · 해요체 0 → 유지 |
| 표·SVG 도식·이미지·링크·수치·FAQ·references | 변경 금지 → 손대지 않음 |

계량기(전/후 모두 통과):

- `python3 tools/check-ko-prose.py` → 임계 초과 0건 (T1 9건 7.65/1만자 · T4·T7·V1~V3 0 · R1 비해라체 0%)
- `python3 tools/title-census.py --check-html` → `ok: true` (10 / 9 / 10)

write-ko + reinforce 산출물이 이미 강해 **헤딩만 손대는 light-touch 폴리시**로 마감했다.

## 적용한 변경 (3건 — 모두 h2 헤딩, TOC 항목 동시 수정)

1. **2절 헤딩 — 명사구 라벨 → 주장형**
   - before: `사람이 다시 확인한다는 말`
   - after: `확인할 자료가 없으면 그 출력은 못 쓴다`
   - 의도: §1522(c)가 실제로 정한 결과(뒷받침하지 못하거나 검토자가 부정확하다고 판단하면 그 출력을
     결정에 쓸 수 없다)를 헤딩으로 올렸다. 이 절의 본문이 그 결론까지 가므로 헤딩이 본문보다 앞서
     나가지 않는다. 본문은 한 자도 고치지 않았다.

2. **3절 헤딩 — 목차형 명사구 → 질문형**
   - before: `노동자가 받는 설명`
   - after: `노동자가 요구할 수 있는 설명은 어디까지인가`
   - 의도: 다섯 헤딩 중 가장 목차형에 가까웠다. 본문이 답하는 것이 설명의 *범위*(§1520 employee data
     가 추론된 값까지 포함하는 넓이 + §1522(e)가 남의 정보를 익명화하라며 긋는 한계)라 "어디까지"가
     물음과 답을 맞춘다.

3. **4절 헤딩 — `~이유` 중복 해소, 질문형**
   - before: `작년에 막힌 법이 올해 통과한 이유`
   - after: `작년에 막힌 법이 올해는 왜 통과했나`
   - 의도: 바로 다음 5절이 `페블러스가 이 법을 주목하는 이유`(정본 고정 헤딩)라 목차에 `~이유`가
     연달아 두 번 찍혔다. 고정된 5절 대신 4절만 물음으로 돌렸다.

## 검토했으나 하지 않은 변경

- **제목 3슬롯**: `AI가 내린 해고, 그 근거를 다시 꺼낼 수 있을까?` — 질문형, 22자, 주어 먼저,
  과거형 서술 종결·제목 안 수치·낯선 고유명사·AI 어투 없음. 두 시험 모두 통과라 §4-2 v3 절차상
  손대지 않는다. 부제의 줄표는 동격 재진술이 아니라 구분자 1개(정본 허용 형태).
- **1절 헤딩 `무엇이 통과됐나`**: 이미 질문형. 짧아서 2~4절의 긴 헤딩과 리듬이 갈린다.
- **5절 헤딩 `페블러스가 이 법을 주목하는 이유`**: 시리즈 정본 고정 문구라 고치지 않는다.
- **맺음 문단의 "여기까지 읽어 주셔서 감사하다"**: 정본 문체.
- **T1 줄표 9건**: 전부 SVG 도식 라벨(`… — §1522(b)(2)` 꼴)과 캡션·부제의 구분자다. 동격 재진술
  아님 → 손대지 않는다.

## EN 판본에 옮길 때 (polish-en 용 — 아래 영문은 **제안이지 검증된 문구가 아니다**)

EN 파일의 h2와 `#toc-links` 항목을 **둘 다** 고쳐야 한다(현재 EN TOC 라벨 = h2 텍스트 그대로).

| 절 | EN 현재 | 제안 | 비고 |
|---|---|---|---|
| 2 | `The Human Check` | `If You Can't Corroborate It, You Can't Use It` | KO가 주장형으로 바뀐 것에 맞춘다. EN 본문이 §1522(c) 원문을 그대로 인용하므로 인용문 문구(`shall not use the ADS output`)와 헤딩이 축자로 겹치지 않게 고를 것 |
| 3 | `The Explanation a Worker Can Ask For` | `How Far Does That Explanation Reach?` | KO가 질문형이 됐다. **물음표를 빠뜨리지 말 것** — KO 질문 헤딩이 EN에서 평서 명사구로 주저앉는 사례가 반복됐다 |
| 4 | `Why the Bill That Died Last Year Passed This Year` | `Why Did the Bill Vetoed Last Year Pass This Year?` | 두 가지. ① KO가 물음이므로 EN도 물음표를 붙인다. ② **`died`는 사실이 어긋난다** — SB 7은 의회를 통과했고 주지사가 거부권을 행사해 상원으로 돌아갔다(부결·폐기가 아니다). `vetoed`로 바꿀 것 |
| 1·5 | `What Passed` / `Why Pebblous Is Watching This Law` | 유지 | 5절은 시리즈 정본 고정 |

EN 본문 산문은 이번 폴리시에서 손대지 않았다. 다만 polish-en은 KO에 없던 EN 전용 tell(em-dash 증식,
`What … is that` pseudo-cleft, 무주어 수동태, 꼬리 `, though.`)을 따로 훑어야 한다 — KO 계량기는
그 자리를 재지 않는다.
