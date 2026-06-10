# polish-ko 변경 메모 — Robinhood 에이전틱 신용카드 (KO)

Run: `run-1781053787631-41p4ox`
Phase: `polish-ko` (blog-polish 파이프라인 Step 2)
대상: `report/robinhood-agentic-card-2026/ko/index.html`

## 진단 요약 (Warm Expert Tone)

폴리시 대상 요소(제목·deck·리드·섹션 헤딩·인트로 문단)를 점검한 결과, **대부분 이미 Warm Expert Tone 기준을 충족**한다. write-ko + reinforce 단계가 강하게 마감한 산출물이다.

| 요소 | 진단 | 조치 |
|------|------|------|
| mainTitle "AI가 내 돈을 쓴다 — 자율 결제 시대의 데이터 신뢰 조건" | 주장·관점 중심, 합격 | 유지 |
| 리드(Exec Summary 1문단) | 사건 제시 후 "편의성 뉴스가 아니라 데이터 인프라 문제로 읽는다" — 관점 선언형, 합격 | 유지 |
| 섹션 헤딩 1~5 + 결론 | 전부 주장형/서사형("AI가 결제 버튼을 누른다", "한 글자만 틀려도 돈이 나간다", "지갑을 맡기기 전에 데이터를 묻는다") — 목차형 0건, 합격 | 유지 |
| 각 섹션 인트로 문단 | 서사·주장 훅으로 시작("Robinhood만 움직인 게 아니다", "모델이 텍스트를 환각할 때는…") — 자기소개형 0건, 합격 | 유지 |
| **subtitle(deck)** | **명사 나열형 — "…네트워크 토큰이 드러낸, 에이전틱 결제의 데이터 품질 요건". 주장이 아니라 요약 설명문.** | **재작성(아래)** |

## 적용한 변경 (1건)

### subtitle (deck) — 명사 나열형 → 주장형 deck

- **위치**: `PebblousPage.init({ subtitle })` (line ~445). deck은 H1 아래 렌더링되는 부제.
- **전**: `Robinhood 에이전틱 신용카드와 Mastercard·Visa 네트워크 토큰이 드러낸, 에이전틱 결제의 데이터 품질 요건`
- **후**: `Robinhood가 AI에게 지갑을 맡겼다 — 자율 결제의 병목은 모델이 아니라 데이터 신뢰성이다`
- **이유**: 전(前)은 주어·서술이 없는 명사구 나열(요약 캡션). 후(後)는 Robinhood라는 구체 행위자 + 본문 전체의 논리축("병목은 모델이 아니라 데이터 신뢰성")을 한 문장 주장으로 압축. og:description·twitter:description의 톤과도 정렬된다.
- **부수 영향 없음**: subtitle은 deck 렌더링에만 쓰임. mainTitle·pageTitle·og:title·twitter:title·citation_title은 변경 없음. OG 이미지 재생성 불필요(이미지는 mainTitle 기반).

## 보존 확인

- 표(섹션 5 거버넌스 비교표), 코드 없음, 내부/외부 링크(x402·스테이블코인·AP2, 참고문헌 14건), 차트 없음, 이미지 3건(figure/figcaption/source) — **전부 무변경**.
- 수치·사실·인용(80만+, −40%, 39.3%, $33.41B, arXiv 2510.00332, Cleanlab Tau²-Bench 등) — **전부 무변경**.
- FAQ 8개 — 무변경.

## polish-en 단계 지침 (mirroring)

EN subtitle도 동일한 명사 나열형이다(line ~445):

- **현재 EN**: `What Robinhood's agentic credit card and the Mastercard·Visa network tokens reveal about the data-quality requirements of agentic payments`
- **권장 EN(주장형 deck, 직역 금지)**: `Robinhood handed AI the wallet — the bottleneck in autonomous payments isn't the model, it's data trust.`
  - 또는 동등한 자연스러운 영어. 핵심: 구체 행위자(Robinhood) + 논리축(병목 = 데이터 신뢰성)을 한 주장으로.
- EN의 제목·리드·섹션 헤딩·인트로는 KO와 마찬가지로 이미 Warm Expert 기준을 충족할 가능성이 높음 — deck 외에는 점검 후 유지 권장.

## 후속 단계 주의

- `ko-prose-humanizer` 단계(별도, 이후)가 산문 질감(T1~T11)을 본격 점검한다. polish-ko는 제목·deck·헤딩·인트로 톤에 한정했고, 본문 산문은 손대지 않았다.
- 섹션 5 마지막 문단(line ~352)은 Gartner·Juniper·수렴 신호·magnitude를 한 문단에 집약 — 산문 밀도(T8/T10) 관점에서 ko-prose-humanizer가 분절 검토 대상으로 볼 수 있음(폴리시 범위 밖이라 이번엔 미수정).
