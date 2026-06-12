# polish-ko 변경 메모 (→ EN 번역 시 참조)

## 진단 요약 (ko-prose-humanizer T1~T11)

갓 작성된 KO HTML(`blog/vc-300b-q1-2026-data-layer/ko/index.html`)을 Pebblous Warm Expert Tone 기준으로 점검.

| 코드 | 패턴 | 판정 |
|------|------|------|
| T1 | em-dash 동격 재진술 | 본문 7개 / 한글 3,260자 = 1/466 (경계선). 산문 내 2건만 동격 재진술 tell → 수정 |
| T2 | 명사형 종결 일색 | 21건이나 동사 종결과 섞여 단조롭지 않음 → 유지 |
| T3 | "한 X" 반복 | 0 → 통과 |
| T4 | 메타 예고문 | 0 → 통과 |
| T5 | 영어 병기 강박 | 고유명사(Scale AI 등)·법령(EU AI Act)만, 정당 → 통과 |
| T7 | 번역투 | 0 → 통과 |
| T11 | 자사 연결 작위성 | 5장 페블러스 연결이 'AI-Ready Data=자산화'라는 본문 논지에서 자연 도출 → 통과 |

전반적으로 write-ko + reinforce 단계 산출물이 이미 강함. 제목(주장형), 리드(독자 호명), 섹션 헤딩(질문/주장형) 모두 Warm Expert Tone 충족 → light-touch 폴리시.

## 적용한 변경 (2건, 모두 T1 em-dash 동격 재진술 제거)

1. Executive Summary 주요 수치 도입부
   - before: `…이 분기의 전모를 압축한다 — 사상 최대 총액, …`
   - after: `…이 분기의 전모를 압축한다. 사상 최대 총액, …`

2. Section 4 (Reddit 소송 문단)
   - before: `…소송이 줄을 이었다 — Reddit 대 Anthropic, Reddit 대 Perplexity, NYT 대 OpenAI.`
   - after: `…소송이 줄을 이었다. Reddit 대 Anthropic, Reddit 대 Perplexity, NYT 대 OpenAI까지.`

결과: 산문 em-dash 동격 재진술 2건 제거 → 남은 em-dash는 통계 카드·figcaption 출처 등 관용 용법뿐.

## 보존 (변경 금지 — EN도 동일하게 유지)

- 모든 수치($300B/80%/$188B/$29B, 멀티플 20~34배, 라이선스 단가 등)
- 표·통계 카드·이미지(figure/figcaption)·링크·references
- 제목/부제/섹션 헤딩 5종 — 그대로 영문 번역
- PebblousPage.init() config(faqs 7개 포함)

## EN 번역 시 주의

- 제목 `모델은 비싸졌다. 데이터는 더 비싸진다.` → 영어도 2문장 대구 유지 권장 (예: "Models got expensive. Data gets more expensive.")
- T1 교정 의도(동격 재진술 em-dash 회피)를 EN에서도 적용 — 영어 산문에서도 불필요한 em-dash 나열 자제
