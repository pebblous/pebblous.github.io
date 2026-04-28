---
name: dc-write-ko
description: DataClinic 진단 스토리 한국어 HTML 작성 스킬. analysis.json을 기반으로 PebblousPage 컨벤션에 맞는 완전한 한국어 블로그 포스트를 작성. dc-story-produce 파이프라인의 Stage 3.
agent: dc-story-writer-ko
---

# dc-write-ko

`dc-story-produce` 파이프라인의 Stage 3. `analysis.json`을 기반으로 데이터 저널리즘 내러티브의 한국어 HTML 블로그 포스트를 작성한다.

## 역할

`dc-story-writer-ko` 에이전트를 호출하여:

- `analysis.json` 데이터 해석
- PebblousPage 컨벤션(`html-conventions.md`) 준수 HTML 작성
- 데이터 저널리즘 스타일 (사실 기반, 수치 명시)
- KO OG 이미지 생성

## 입력

`/tmp/dc-{reportId}/analysis.json`

## 출력

`blog/{slug}/ko/index.html`
`blog/{slug}/ko/image/index.png` (OG 이미지)

## 에이전트

`.claude/agents/dc-story-writer-ko.md` 참조

## HTML 컨벤션

`.claude/skills/blog-write/references/html-conventions.md` 참조

## 파이프라인 위치

```
dc-story
  Stage 1: dc-collect
  Stage 2: dc-analyze
  Stage 3: dc-write-ko  ← 여기
  Stage 4: dc-write-en
  Stage 5: dc-publish
```

## 참고

- 이 스킬의 정본은 레포 파일입니다. 시스템 등록 스킬은 레포의 미러입니다.
