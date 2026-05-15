# 실험: HAI AI Index 2026 EN 메타 재작성으로 CTR 개선

## 메타데이터

| 항목 | 값 |
|---|---|
| 실험 ID | `EXP-2026-05-16-001` |
| 시작일 | 2026-05-16 |
| 측정 예정일 | 2026-05-30 (D+14), 2026-06-13 (D+28) |
| 대상 페이지 | `report/hai-ai-index-2026-part1/en/` |
| 대상 URL | https://blog.pebblous.ai/report/hai-ai-index-2026-part1/en/ |
| 브랜치 | `fix/en-meta-ctr-hai-index` |
| 커밋 | `d2c1d86f` |
| PR | https://github.com/pebblous/pebblous.github.io/pull/new/fix/en-meta-ctr-hai-index |

---

## 출발점 (Why)

비평글이 우리 블로그를 "트래픽은 자라지만 회사 홍보 자산으로는 반쪽짜리"로 진단함. 핵심 문제 중 하나는 **미국 노출 91K vs 클릭 70 (CTR 0.1%)** — 영문 페이지의 검색 의도 미스매치 의심.

GSC Pages.csv 분석 결과, 미국 노출 91K의 정체는 상위 13개 영문 페이지에서 발생하는 "노출 폭발 + 클릭 0" 패턴이었음. 그 중 1순위 타겟이 이 페이지.

## 가설

> "Stanford AI Index 2026" 페이지가 23,537 노출 중 0 클릭인 이유는, 검색자가 **구체적 데이터 포인트**(RLBench 89.4%, 362 incidents, DeepSeek-R1, ninth edition)를 찾고 있는데 우리 메타는 "15 Findings the Industry Isn't Talking About" 같은 **포괄적 후크**라서 의도가 안 맞기 때문이다.
>
> 메타에 구체 수치를 박으면 long-tail 쿼리 의도와 매칭되어 CTR이 올라갈 것이다.

## Baseline (28일, 2026-04-17 ~ 2026-05-15)

GSC Performance 리포트 기준:

| 지표 | 값 |
|---|---|
| Clicks | 0 |
| Impressions | 23,537 |
| CTR | 0.0% |
| Average position | 7.39 |

**관련 쿼리 샘플** (총 60개 쿼리, 총 노출 779):
```
stanford ai index 2026 gemini deep think imo gold medal   — 103 imp / 0 clk
stanford ai index 2026 deepseek-r1                         —  31 imp / 0 clk
stanford ai index 2026 ai incidents 362 2025               —  29 imp / 0 clk
stanford ai index 2026 us private ai investment $285.9b    —  20 imp / 0 clk
"ai index report 2026" stanford pdf                        —  38 imp / 0 clk
"ai index report 2026" "ninth edition" or "9th edition"    —  35 imp / 0 clk
```

23,537 노출 중 60개 HAI 쿼리가 차지하는 건 779회. 나머지 22,758회는 broad 쿼리에서 7~10위로 노출 추정.

## 변경 내용

`docs/title-strategy.md`의 "SEO 제목 ≠ 본문 제목" 원칙을 따름:
- HTML `<title>`: 검색 키워드 중심으로 변경
- `mainTitle` (h1): "The Most Capable AI Discloses the Least" 그대로 유지 (감성 후크)
- `articles.json`: 손대지 않음 (사이트 카드/RSS는 본문 제목과 동기화)

### Before → After

| 항목 | Before | After |
|---|---|---|
| `<title>` | Stanford HAI AI Index 2026: 15 Findings the Industry Isn't Talking About \| Pebblous | Stanford AI Index 2026 Decoded — $581.7B, 362 Incidents, DeepSeek-R1 Impact \| Pebblous |
| `description` | $581.7B invested, yet transparency scores hit a 3-year low. DeepSeek changed the US-China equation. A data-quality lens on the world's most comprehensive AI report. | Stanford HAI AI Index 2026 (9th edition) full breakdown: $581.7B investment, 362 AI incidents, DeepSeek-R1's US-China impact, RLBench 89.4%, GenAI 53% adoption. 15 findings decoded. |
| `og:title` | Stanford HAI AI Index 2026: 15 Findings the Industry Isn't Talking About | AI Index 2026 Decoded — Investment, Incidents, Benchmarks, DeepSeek |
| `og:description` | (= description) | Stanford HAI AI Index 2026 (9th edition): $581.7B investment, 362 AI incidents, DeepSeek-R1's US-China impact, RLBench 89.4%, GenAI 53% adoption. 15 findings, one breakdown. |
| `twitter:title` | The Most Capable AI Discloses the Least — Stanford HAI AI Index 2026 | AI Index 2026 Decoded — $581.7B, 362 Incidents, DeepSeek-R1 |
| `twitter:description` | Stanford HAI AI Index 2026: 15 key findings. $581.7B in global AI investment, 53% GenAI adoption, and how DeepSeek closed the US-China performance gap. | Stanford HAI AI Index 2026 (9th edition): $581.7B investment, 362 incidents, DeepSeek-R1's US-China impact, RLBench 89.4%, GenAI 53%. 15 findings decoded. |

### 키워드 매핑 의도

| 박힌 키워드 | 잡으려는 long-tail 쿼리 |
|---|---|
| "Stanford AI Index 2026" | 정확한 보고서명 |
| "9th edition" | "ninth edition" / "9th edition" 쿼리 (38 + 17 + ... 노출) |
| "$581.7B" | "us private ai investment $285.9b" 등 투자 액수 쿼리 |
| "362 incidents" | "ai incidents 362 2025" (29 노출) |
| "RLBench 89.4%" | "rlbench 89.4%" (20 노출) |
| "DeepSeek-R1" | "deepseek-r1" 관련 쿼리 (61 노출 합계) |
| "Decoded" / "breakdown" | 일반 long-tail 의도 매칭 |

## 성공 기준

| 등급 | CTR (D+28 시점) | 클릭 추정 |
|---|---|---|
| Minimum | 0.3% (3배) | ~70 |
| **Target** | **0.5% (5배)** | ~120 |
| Stretch | 1.0%+ (10배+) | ~230+ |

추가 관전 포인트:
- Average position이 7.39에서 어떻게 변하는지 (개선되면 메타 외 다른 신호도 강화된 것)
- 기존 60개 HAI 쿼리의 CTR 변화 (메타 효과 직접 측정)
- 새로운 쿼리 등장 (예: "rlbench" 단독 쿼리에서 우리 페이지 노출)

## 측정 일정

| 시점 | 날짜 | 할 일 |
|---|---|---|
| D+0 | 2026-05-16 | PR 머지 + GSC Request indexing |
| D+3 | 2026-05-19 | URL Inspection으로 "Last crawl" 확인 (새 메타 인덱싱됐는지) |
| D+14 | 2026-05-30 | Performance 리포트로 중간 점검 (스케줄 알림) |
| D+28 | 2026-06-13 | 본격 Before/After 비교, `/docs/seo-audit/2026-06-13-after/` 생성 |

## 위험 요소

1. **타이틀 길이 88자**: Google이 60자 전후 자름. "...Impact"가 잘릴 수 있지만 핵심 키워드 "$581.7B, 362 Incidents"는 살아남음
2. **메타 길이 185자**: 160자 전후 잘림. "15 findings decoded" 안 보일 가능성
3. **노출 감소 가능성**: 키워드 의도 정렬로 broad 쿼리 노출이 줄어 impressions 자체가 떨어질 수 있음. CTR은 올라도 절대 클릭 수 증가폭이 제한적일 수 있음
4. **Google 알고리즘 변동**: D+28 시점에 알고리즘 업데이트가 있으면 변수 분리가 어려워짐

## 후속 실험 후보 (이 실험 성공 시)

이 패턴이 효과 있으면 다음 12개 페이지에 동일 방식 적용:

1. ai-science-new-era/en/ (19,222 / 2)
2. palantir-vs-classic-ontology/en/ (7,837 / 14)
3. timesfm-industrial-forecasting/en/ (7,766 / 10)
4. karpathy-llm-wiki/en/ (6,469 / 12)
5. anthropic-emotions-report/en/ (5,179 / 6)
6. x402-protocol-ai-payment-2026/en/ (5,171 / 0)
7. meta-tribe-v2-brain-story-pb/en/ (5,166 / 10)
8. world-model-rise/en/ (5,012 / 10) — VLA 키워드는 그대로 유지
9. kimodo-text-to-motion/en/ (4,702 / 15)
10. kronos-financial-foundation-model/en/ (4,650 / 3)
11. synthetic-data-companies-rise-fall/en/ (4,333 / 3)
12. google-gemma-4-report-pb/en/ (3,765 / 3)

## 참조 자료

- 실험 직전 GSC 캡처: `~/Screenshots/2026-05-15 PBLS Blog GSC/` (CSV 7개 zip)
- 분석 결과: 본 문서
- 제목 전략 가이드: `docs/title-strategy.md`
- changelog 기록: `history/changelog.jsonl` (2026-05-16T00:00:00Z)
