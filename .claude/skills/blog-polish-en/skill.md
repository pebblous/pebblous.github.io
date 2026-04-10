---
name: blog-polish-en
description: ko-changes.md와 diagnosis.json을 기반으로 EN HTML의 제목·리드·섹션 헤딩을 자연스러운 영어로 번역·수정. 직역 금지, 영미권 독자 기준 표현 사용. blog-en-polisher 에이전트가 사용.
agent: blog-en-polisher
---

# blog-polish-en

`blog-polish` 파이프라인의 Step 3. KO 변경사항을 기반으로 EN HTML의 제목·리드·섹션 헤딩을 자연스러운 영어로 대응 번역·수정한다.

## 역할

`blog-en-polisher` 에이전트를 호출하여:

- `ko-changes.md` 변경사항 파악
- KO 제목/리드/헤딩 → 영미권 독자 기준 자연스러운 영어로
- 직역 금지 (한국어 문장 구조 그대로 영어화 금지)
- EN HTML 콘텐츠(표·코드·링크) 보존

## 입력

`ko-changes.md`
`diagnosis.json`
`blog/{slug}/en/index.html`

## 출력

`blog/{slug}/en/index.html` (수정됨)

## 에이전트

`.claude/agents/blog-en-polisher.md` 참조

## 파이프라인 위치

```
blog-polish
  Step 1: blog-diagnose
  Step 2: blog-polish-ko
  Step 3: blog-polish-en  ← 여기
```

## 참고

- 이 스킬의 정본은 레포 파일입니다. 시스템 등록 스킬은 레포의 미러입니다.
