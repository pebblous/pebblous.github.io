# polish-ko 변경사항 — ai-fallen-unicorns-pre-chatgpt

대상: `blog/ai-fallen-unicorns-pre-chatgpt/ko/index.html`
단계: blog-produce 파이프라인 `polish-ko` (제목·리드·섹션 헤딩·인트로 톤 다듬기)

## 진단 요약

write-ko + reinforce 산출물이 이미 Pebblous Warm Expert Tone을 충실히 따르고 있었다.
- **제목 3슬롯**: mainTitle "68%가 사라진 자리"(감성 후킹), subtitle(관점형), pageTitle(키워드 앞배치) — 모두 양호, 변경 없음.
- **섹션 헤딩 6개**: 전부 주장형/암시형("유니콘의 절반이 멈췄다", "SaaS의 존재 이유가 지워진다", "투자자가 지금 보는 한 가지" 등). 목차형(예: "1. 시장 현황")이 아님 — 변경 없음.
- **섹션 인트로**: S2 "왜 하필 SaaS가…", S6 "그렇다면 …무엇을 해야 할까" 등 질문/장면 제시형으로 이미 독자를 끌어들임 — 변경 없음.

→ 과편집은 잘 쓰인 산문을 해치고 AI-tell을 새로 들일 위험이 있어 **최소 개입** 원칙으로 진행.

## 변경 1건 (유일)

**위치**: Executive Summary 세 번째 문단 마지막 문장.

**문제**: Executive Summary 안에 `이 글은 … 따라간다`(1문단)와 `이 글은 그 기준이 만들어진 메커니즘을 짚고 … 마무리한다`(3문단), 두 개의 `이 글은 ~한다` 메타 자기지시가 중복. T4(메타 예고문) 위험 + 리드 흡인력 약화.

**조치**: 1문단의 framing 문장은 유지(자기지시 1회는 Exec Summary 기능상 허용), 3문단 마지막 문장을 메타 없는 **독자 흡인용 질문**으로 전환.

- 변경 전: `… 명료한 기준이다. 이 글은 그 기준이 만들어진 메커니즘을 짚고, 다운라운드도 IPO도 인수도 어려워진 회사들이 택할 수 있는 두 갈래 생존 전략으로 마무리한다.`
- 변경 후: `… 명료한 기준이다. 그 기준은 어떻게 만들어졌고, 다운라운드도 IPO도 인수도 막힌 회사들에게는 어떤 길이 남아 있을까.`

**효과**: `이 글은 ~한다` 중복 제거(잔존 1회), Exec Summary가 질문으로 닫혀 본문으로의 흡인력↑, T4 메타예고문 grep 0건 유지.

## EN 반영 가이드 (polish-en 참조)

EN `Executive Summary` 3번째 문단의 대응 closing 문장도 동일하게:
- 메타 자기지시("This article maps…", "this piece closes with…") 중 **하나만** 남기고,
- 마지막 문장을 직역이 아닌 자연스러운 **수사 의문문**으로 전환.
  예시 방향: `How did that test come to be — and what road is left for companies locked out of down-rounds, IPOs, and acquisitions alike?`
- 나머지 제목/헤딩/인트로는 KO와 마찬가지로 이미 양호 → 톤 변경 불필요, 의미 보존 번역 유지.

## 검증

- 안티패턴 grep 전부 0 (DOMContentLoaded / share-buttons.js / text-2xl mb-6 / H1 하드코딩 / bare mb-16).
- FAQ 7개 유지, italic 0.
- 본문 em-dash 0개(4개는 모두 meta/alt 속성) — JH 보이스 캘리브레이션 수준.
- 표·이미지·링크·차트·참고문헌 콘텐츠 무변경.
