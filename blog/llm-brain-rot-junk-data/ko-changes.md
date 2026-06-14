# polish-ko 변경 메모 (→ blog-polish-en 참조용)

대상: `blog/llm-brain-rot-junk-data/ko/index.html`

## 판정

write-ko 단계에서 이미 Pebblous Warm Expert Tone이 적용된 상태(질문·주장형 헤딩, 대화체 리드, 서사 중심 산문). reinforce 단계도 의도적 무편집. 따라서 **light-touch 폴리시** — 사실·수치·인용·구조·표·이미지·링크는 전부 보존하고, 산문 질감만 다듬음.

## 진단 (ko-prose-humanizer 기준)

- T2 명사형 종결: 0 (건강)
- T1 em-dash: 본문 프로즈가 아니라 figcaption "Source:" 구분/참고문헌 주석에 집중 (건강)
- T4 메타 예고문: 3 → 1 (남은 1건은 "데이터를 다루는…", Editor's Note의 "일을 다룹니다" — 정상 용법)
- T3 "한 X": 2 → 1

## 적용한 편집 (3건, 표현만)

1. **Exec Summary 1문단 마무리** — "이 글은 그 실험과, 무엇보다 회복이 되지 않았다는 결과를 **다룹니다**."
   → "아래에서는 그 실험을, 그리고 무엇보다 회복되지 않았다는 결과를 **따라갑니다**."
   (T4 메타-예고 제거 + "회복이 되지" → "회복되지" 정리)
   - EN: 자기지시("this article covers…") 대신 "What follows traces the experiment — and, above all, the fact that recovery never came." 식 능동 서술 권장.

2. **Exec Summary 3문단 마무리** — "이 글은 그 전환을 신경과학의 결정적 시기 비유로 **풀어 봅니다**."
   → "그 전환이 왜 자연스러운지는 신경과학의 결정적 시기 비유가 또렷하게 **보여 줍니다**."
   (예고문 → 주장문으로 전환)
   - EN: "We'll unpack…" 회피. "The neuroscience of critical periods makes this shift feel almost inevitable." 식 권장.

3. **§6 마지막 결론 문장** — "…되돌리기 어렵다는 것. **이 한 줄이 이 글이 남기려는 결론입니다.**"
   → "…되돌리기 어렵다는 것. **파일럿이 남긴 신호는 모두 이 결론으로 모입니다.**"
   (T3 "한 줄" + 자기지시 메타 제거)
   - EN: "This one line is the article's takeaway" 류 회피. "Every signal from this pilot converges on that conclusion." 식 권장.

## 보존 확인

- 수치 전부 보존: 74.9→57.2, 84.4→52.3, 17.7pt, 32.1pt, 70~75%, 60→25%
- 제목 3슬롯 / OG / Twitter / JSON-LD config / FAQ 8개 / 이미지 4개 / 참고문헌 5건 무변경
- 컨벤션 grep 전부 통과 (DOMContentLoaded·share-buttons·h2 비표준·H1 하드코딩·fade-in-card 누락·css/styles.css = 0, FAQ=8)
