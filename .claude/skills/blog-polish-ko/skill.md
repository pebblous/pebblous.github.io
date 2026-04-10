---
name: blog-polish-ko
description: diagnosis.json을 기반으로 KO HTML 블로그 포스트의 제목·리드·섹션 헤딩·인트로 문단을 Pebblous Warm Expert Tone으로 재작성. 표·코드·링크는 보존. blog-ko-polisher 에이전트가 사용.
agent: blog-ko-polisher
---

# blog-polish-ko

`blog-polish` 파이프라인의 Step 2. `diagnosis.json` 진단 결과를 기반으로 KO HTML의 표현·구조·톤을 개선한다.

## 역할

`blog-ko-polisher` 에이전트를 호출하여:

- 제목 → 관점/주장 중심으로 재작성
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
