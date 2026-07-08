---
name: blog-polish-ko
description: diagnosis.json을 기반으로 KO HTML 블로그 포스트의 리드·섹션 헤딩·인트로 문단을 Pebblous Warm Expert Tone으로 재작성. 제목(mainTitle·subtitle·pageTitle)은 보존 — 정본 위반 시에만 최소 수정. 표·코드·링크는 보존. blog-ko-polisher 에이전트가 사용.
agent: blog-ko-polisher
---

# blog-polish-ko

`blog-polish` 파이프라인의 Step 2. `diagnosis.json` 진단 결과를 기반으로 KO HTML의 표현·구조·톤을 개선한다.

## 역할

`blog-ko-polisher` 에이전트를 호출하여:

- **⛔ 제목(mainTitle·subtitle·pageTitle) → 재작성 금지** (2026-07-08 확정):
  제목의 정본은 `docs/title-strategy.md` §0(보도기사·고급 매거진 스타일). blog-write가 그 규칙으로
  최종 결정하고, 제목의 AI 문체 교정은 **ko-prose-humanizer 한 곳에서만** 한다. polish가 제목을
  또 갈아엎으면 단계마다 다른 스타일로 표류한다(한 제목이 3~4개의 손을 거치던 문제의 근원).
  **예외 두 가지**: (1) title-strategy §0·§3.1 금지 패턴(따옴표·대조공식·줄표 동격) 명백 위반 시
  최소 수정, (2) 사용자가 명시적으로 제목 수정을 요청한 경우("제목이 어색해" 등 standalone
  blog-polish 흐름) — 이때는 §0 보도기사·매거진 기준으로 수정. 두 경우 모두 `ko-changes.md`에
  수정 근거를 기록한다.
- 리드 → 독자에게 말 거는 형식으로
- 섹션 헤딩 → 질문형 또는 주장형으로
- 인트로 문단 → Warm Expert Tone 적용
- 표·코드·링크·차트 → 보존 (콘텐츠 변경 금지)

## 입력

`diagnosis.json`
`blog/{slug}/ko/index.html`

## 출력

`blog/{slug}/ko/index.html` (수정됨)
`ko-changes.md` (변경사항 메모 → EN 번역 시 참조)

## 에이전트

`.claude/agents/blog-ko-polisher.md` 참조

## 파이프라인 위치

```
blog-polish
  Step 1: blog-diagnose
  Step 2: blog-polish-ko  ← 여기
  Step 3: blog-polish-en
```

## 참고

- 이 스킬의 정본은 레포 파일입니다. 시스템 등록 스킬은 레포의 미러입니다.
