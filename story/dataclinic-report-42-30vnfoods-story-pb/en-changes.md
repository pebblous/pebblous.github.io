# polish-en 변경 메모 — DataClinic #42 (30VNFoods) EN

**판정: 교정 불필요 (verified clean). EN HTML 변경 0건.**

`polish-ko`가 KO를 VERIFIED CLEAN(산문 변경 0)으로 종결했고, EN HTML은 `write-en`
단계에서 직역이 아닌 자연스러운 영어로 새로 작성되었다. 영어 LLM-tell + 제목·리드·헤딩
자연스러움 기준으로 재진단한 결과 통과 임계치 아래여서 인위적 수정을 하지 않았다(과교정 금지).

## 영어 LLM-tell 진단

| 항목 | 결과 |
|------|------|
| delve / moreover / furthermore / in conclusion | 0건 |
| leverage / robust / seamless / underscore / showcase | 0건 |
| tapestry / testament to / plays a crucial role / navigate the | 0건 |
| it is worth noting / notably, / importantly, / ultimately, | 0건 |
| em-dash(전체) | 54개 — 대부분 구조(TOC 라벨 `L1 —`, 캡션, stat-card 서브라벨, class-name span) |
| em-dash(본문 산문) | ~8–9개 / 약 6,000+ 단어 ≈ 1/700단어. 모두 삽입구·강조 용도, AI식 동격 재진술 아님 → 영어 관용 범위 내 |

## 제목·리드·헤딩 (자연스러움 / 직역 여부)

- title `One Photo, Two Labels — A DataClinic Diagnosis of 30 Vietnamese Dishes` — 발견/주장형, 관용적
- subtitle `A DataClinic Diagnosis of 30VNFoods (30 Vietnamese Dishes)` — 시리즈 표준
- 섹션 헤딩 모두 비직역·관점형:
  - `30 Flavors of the Vietnamese Street` (KO `베트남 거리의 30가지 맛`)
  - `L1 — What the Mean Image Says` / `L2 — Food Seen in 1,280 Dimensions` / `L3 — A Lens Narrowed to 61 Dimensions`
  - `Real-World Impact — Three Cracks` / `Conclusion — A Small Dataset's Big Lesson`
  - `Crack ① One plate, two labels` (KO `균열 ① 한 접시, 두 개의 이름표`)
- 본문 관용 표현 양호: "plenty of numbers, but thin on information"(수는 많지만 정보는 적은),
  "a trailer for the … story that plays out in full at L2 and L3", "So what:" 반복 디바이스 등
  한국어 문장 구조 잔재 없음.

## 결론

EN HTML: **변경 없음** — 깨끗하고 관용적인 번역을 인위적 수정으로 훼손하지 않는 정직한 no-op.
bilingual parity 유지. git 커밋은 publish 단계 담당.
