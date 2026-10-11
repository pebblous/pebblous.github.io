# polish-en — 변경 메모

대상: `report/deepseek-china-ai-safety-disclosure-census/en/index.html`
단계: report-produce 파이프라인 `polish-en` (blog-polish Step 3). 입력은 `ko-changes.md`.
본문 54,411자. 표·수치·인용·링크·참고문헌·SVG 데이터는 전부 불변.

---

## A. 제목 3슬롯 — 손대지 않음

`ko-changes.md` §A 지시대로 `mainTitle`·`subtitle`·`pageTitle`·`og:title`·`twitter:title`·
`citation_title` 전부 보존했다. KO 와 프레이밍이 일치하고(회사를 지목하지 않고 계수 조건만 말함),
write-ko 가 기각한 "딥시크는 안전 결과를 내지 않는다" 틀이 EN 슬롯에 남아 있지 않은 것도 확인했다.
→ 뒤 단계 `title-gate` 가 KO 를 다시 지으면 **EN 여섯 칸을 같이 고칠 것.**

## B. 인계받은 사실·정합 교정 (ko-changes §B)

| 항목 | 처리 |
|---|---|
| B-1 SVG "Six of the fifteen" ↔ 본문 "six of those nine" | **고침.** SVG 안 캡션을 `Zhipu's six are more than any other company's, and three bars sit at zero.` 로, `fig-caption` 에 두 수가 왜 둘 다 맞는지(열다섯 중 우려+제안 아홉에 즈푸 여섯이 통째로 들어감)와 "막대 0은 셋인데 본문은 다섯 곳 침묵"(본문의 다섯은 창업자·최고경영자만 센 수)을 적었다 |
| B-2 보고서 그림 번호 | **손대지 않음.** EN 은 원래 번호 없이 그림 이름으로 가리켰다(오라클) |
| B-3 "nine binding rules China has on the books" 무귀속 | **고침.** Exec → `Of the nine instruments the report lists as binding`. §5 표 캡션에 ⚠️ 로 Legal status 칸 두 건을 다 이름으로 달았다(GB/T 45654-2025 = recommended national standard, 2026-05 지능체 실시의견 = policy guidance). h2 §5 는 지시대로 보존 |
| B-4 h3 2.2 `Most` 과장 | **고침.** → `More than half of the thirty-one disclosures sit on the output side` (18/31 = 58%) |

## C. 헤딩 4건 (ko-changes §C)

| 자리 | 전 | 후 |
|---|---|---|
| h2 §1 | A census that opened 857 releases one row at a time | The census opened all 857 releases one row at a time |
| h2 §4 | The ruler that decides "disclosed at launch" is a date | **A date decides whether a result was disclosed at launch** |
| h3 1.3 | Two caveats the report put there itself | The report put two caveats on its own figures |
| h3 6.3 | Two counterarguments from inside China | Two counterarguments from inside China sit in the report as well |

h2 §4 는 parity 복제가 아니라 **EN 자체 결함** — `ruler` 가 통치자/자로 갈린다. ko-changes 권고안을
그대로 썼고 `ruler`(잣대 뜻)는 본문 3곳에 그대로 남아 모호하지 않다. TOC 두 줄 동기화.

## D. EN 코퍼스 census — 인계 표를 믿지 않고 따로 측정

사본 EN 글 **672편**(`report/*/en`, `blog/*/en`) 본문 `<p>` 기준. SVG·표·스크립트 제외.

| 틀 | 전 | 후 | 코퍼스 |
|---|---|---|---|
| `counted` | **9** | 7 | max 7 · p99 6 — 초과였다. §3.1 `counted by different rules`→`follow different counting rules`, §6.2 `What the report counted`→`tallied` 두 자리만 갈았다(나머지는 이 글의 축) |
| `open the next field` | **2** | 1 | max 0 — 코퍼스에 없는 자작 비유의 2회 반복. §3.3 쪽을 `Look one step past it` 으로 |
| `What separates them` | **2** | 1 | max 1 — 관심 절 안에서 두 문단 건너 축자 쌍둥이. 뒤엣것 → `The divide is` |
| `close to twice` | **2**(+FAQ 1) | 1(+FAQ 1) | max 1 — Exec 쪽을 `nearly double` 로 |
| `Pebblous redrew` | **4** | 2 | max 0 — EN 코퍼스 캡션은 행위자를 안 세운다(`Our measurement`, `Values taken from…`). 캡션 여섯이 전부 `Pebblous <동사>` 로 열려 둘만 어순을 바꿨다 |
| em-dash | 7 | 7 | max 86 · p99 56 — 여유 |
| `census` 12 · `denominator` 13 · `the report` 69 | — | — | 전부 코퍼스 max 아래. 주제어라 유지 |

`세어지다`에 해당하는 피동 과적은 EN 에 없었다(`gets counted` 2 = 코퍼스 max 2).

## E. 축자 쌍둥이

- **E-1 IDAIS 문장이 EN 에선 3회였다** (ko-changes 는 "KO 만큼 축자는 아니다"로 봤지만,
  `no Chinese frontier text model has yet shipped` 가 §2.2·§4.3·§6.2 에서 6-gram 축자였다).
  KO 와 같은 방식으로 §6.2 를 되짚기로 바꿨다 → `The other is the zero section 2.2 already recorded:
  not a single Chinese frontier text model has gone out carrying a dangerous-capability evaluation of
  the risk domains the IDAIS statements name.` ("domains" 는 1차 표현이라 유지 — 능력 쪽으로 옮기면
  IDAIS 가 이름 붙인 대상이 바뀐다.) 남은 2회는 §2.2 원진술 + §4.3 의 보고서 귀속 재인용이라 정상.
- **E-2 관심 §4 h3↔본문** — ko-changes 지시대로 **EN 을 건드리지 않았다**(EN 이 오라클이었음).

교정으로 새로 생긴 쌍둥이도 되쟀다 — 처음 쓴 §4 캡션 `The footnote under the report's quarterly
chart` 가 19줄 위 본문과 축자라 `That footnote, drawn here as a band by Pebblous` 로, §6.2 캡션의
`founder or chief executive has said nothing` 이 본문과 축자라 `the body's tally of five silent
companies looks only at the top of the house` 로 다시 고쳤다. 최종 6-gram 3회 반복 0건.

## F. 재검산·검사

- 수치 전수 재검산 이상 없음: 표 세 열 합 857/31/9 · 회사별 비율 아홉 줄 전부 · 집단 317(20, 6.3%)·
  540(11, 2%) · 여섯 칸 9+16+6=31, 31+10+3+813=857 · 분기 막대 15개 합 767 = 857−90(82+8) ·
  창 안 54+54+45+23=176 = 767의 23% · 32인 10+4+8+10 · 열세 편 6+7 · 리더 발언 6+3+3+1+1+1+0+0+0=15 ·
  2026-09-15 −349일 = 2025-10-01 · 2025-01-20 → 2026-01-04 = 349일 · 3→101 ≒ 서른 배.
- 구조: TOC 10 ↔ section id 10 · h2 9 · h3 29 · SVG 6 · FAQ 12 — **KO 와 전부 일치**.
- 금지 안티패턴 grep 전항 0(DOMContentLoaded·share-buttons.js·H1 하드코딩·`class="mb-16"`·
  `/css/styles.css`) · 태그 균형 무오류.
- reinforce 가 넘긴 "떨어뜨리면 거짓이 되는 한정어 넷"(딥시크 R1·V3.1·V4 의 at launch, 서울 약속의
  at the time, 세계 최엄격의 content·process 한정, 즈푸 서명을 약속 위반으로 엮지 않기) 전부 EN 에
  살아 있음을 확인했다.

## G. 다음 단계

커밋하지 않았다 — KO·`references.json`·이미지와 같이 worktree 에 둔 채 publish-prep 몫.
