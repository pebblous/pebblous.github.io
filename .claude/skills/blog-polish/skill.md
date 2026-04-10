---
name: blog-polish
description: 기존 블로그 포스트(KO+EN HTML)의 제목·리드·섹션 헤딩을 Pebblous Warm Expert Tone으로 다듬는 오케스트레이터. '이 블로그 다듬어줘', '제목이 어색해', '섹션 헤딩 개선해줘', '블로그 포스팅 polish' 요청 시 반드시 이 스킬을 사용. 콘텐츠(표·코드·링크)는 보존하고 표현·구조·톤만 개선.
argument-hint: "[slug]"
---

# blog-polish

기존 블로그 포스트의 표현·구조·톤을 Pebblous Warm Expert Tone으로 개선하는 오케스트레이터.

`blog-produce`(신규 작성)와의 역할 구분:
- `blog-produce`: 새 포스트 처음부터 작성
- `blog-polish`: 기존 포스트 표현 개선 (콘텐츠 보존)

## 트리거 예시

- "이 블로그 다듬어줘"
- "제목이 어색해"
- "섹션 헤딩 개선해줘"
- "블로그 포스팅 polish"
- "톤이 딱딱해"

## 파이프라인

```
Step 1: blog-diagnose   — KO HTML 진단 → diagnosis.json
Step 2: blog-polish-ko  — KO HTML 개선
Step 3: blog-polish-en  — EN HTML 대응 번역·수정
```

## 각 Step 스킬 참조

- Step 1: `.claude/skills/blog-diagnose/skill.md`
- Step 2: `.claude/skills/blog-polish-ko/skill.md`
- Step 3: `.claude/skills/blog-polish-en/skill.md`

## 보존 원칙

- 표·코드·링크·차트·이미지 — 변경 금지
- 수치·사실·인용 — 변경 금지
- 개선 대상: 제목, 리드, 섹션 헤딩, 인트로 문단의 표현과 톤

## 참고

- 이 스킬의 정본은 레포 파일입니다. 시스템 등록 스킬은 레포의 미러입니다.
