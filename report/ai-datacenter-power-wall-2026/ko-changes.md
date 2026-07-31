# polish-ko — 변경사항 메모 (EN 번역 시 반영)

대상: `report/ai-datacenter-power-wall-2026/ko/index.html`
성격: Pebblous Warm Expert Tone / ko-prose-humanizer 마감 패스. **제목(mainTitle·subtitle·pageTitle)·표·차트·링크·수치·FAQ 전부 보존.** 섹션 인트로의 AI 문체 tell(T4 메타 예고문, T1 줄표 동격)만 최소 수정.

## 제목 — 변경 없음
mainTitle / subtitle / pageTitle 모두 그대로 유지(정본 위반 없음). EN 제목도 기존 번역 유지.

## 문단 수정 (4곳) — EN도 동일 취지로 반영

1. **§1 인트로** — 메타·자기지시 문장 제거
   - 삭제: "남들이 뭉갠 인과를 우리는 나눠 보겠습니다."
   - "그대로 받아 쓰면 사실관계를 한 번 뭉개게 됩니다" → "한 문장으로 정리해 버리면 사실관계가 뭉개집니다"
   - 두 축 설정 문장은 의미 보존, 표현만 정돈("서로 다른 두 개의 축" → "성격이 다른 두 개의 축").
   - EN: drop any "let us separate what others blurred" self-referential line; keep the two-axis framing.

2. **§3 인트로** — 메타 예고문 제거
   - 삭제: "그리고 그 불확실성 자체가 이 절의 메시지입니다."
   - 나머지는 흐름 유지, 표현 자연화("방법론이 다른"→"방법론이 제각각인", "유용합니다"→"쓸모 있습니다").
   - EN: remove "the uncertainty itself is this section's message"; fold the point into the flow.

3. **§4 인트로** — 가장 강한 T4 tell 제거 + T1 줄표 동격 제거 (핵심)
   - 삭제: "이 절은 그 새 통화 — '와트당 유용한 결과(useful output per watt)' — 를 정의하고, 그것을 갉아먹는 낭비를 해부한 뒤 … 근거로 보입니다. 이 글에서 가장 중요한 절입니다."
   - 대체: "이 글의 핵심이 여기 있습니다. '와트당 유용한 결과(useful output per watt)'가 어떤 통화이고, 무엇이 그 통화를 갉아먹으며, 그 낭비를 줄이는 가장 값싼 레버가 왜 데이터 효율인지를 이어서 봅니다."
   - `<strong>같은 전기로 누가 더 유용한 결과를 뽑느냐</strong>` 볼드 보존.
   - EN: avoid the "This section defines … dissects … proves … The most important section" scaffold and the em-dash appositive around the term; use a plain signpost.

4. **§6 인트로** — 메타 예고문 제거
   - "앞의 다섯 절을 하나의 실무 질문으로 수렴시켜 보겠습니다." → "그렇다면 실무자의 질문은 하나로 좁혀집니다."
   - 이어지는 질문형 "전력이 병목이라면, 무엇부터 손대야 할까요."는 보존.
   - EN: replace "let me converge the previous five sections …" with a natural pivot; keep the question.

## 지표
- em-dash: 25 → 23 (본문 1/477자) — T1 완화
- T4 메타 예고문(보겠습니다·이 절의 메시지·해부한 뒤·가장 중요한 절): 0
- T2 명사형 종결(-이다.): 0 (원래 -습니다 산문체, 유지)
- FAQ 8, number-badge/section 구조·수치·링크·표·차트 전부 무변경
