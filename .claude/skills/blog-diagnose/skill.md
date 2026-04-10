---
name: blog-diagnose
description: 블로그 포스트 HTML을 Pebblous Warm Expert Tone 기준으로 진단. 제목이 설명문 나열형인지, 리드가 자기소개형인지, 섹션 헤딩이 목차형인지 등을 검사하고 diagnosis.json 생성. blog-diagnostician 에이전트가 사용.
agent: blog-diagnostician
---

# blog-diagnose

기존 블로그 포스트 HTML을 Pebblous Warm Expert Tone 기준으로 진단하고 `diagnosis.json`을 생성한다.

`blog-polish` 오케스트레이터의 Step 1.

## 역할

`blog-diagnostician` 에이전트를 호출하여:

- 제목이 설명문 나열형인지 검사 (나쁜 예: "A가 B를 했습니다")
- 리드가 자기소개형인지 검사 (나쁜 예: "이 글에서는 ~을 살펴봅니다")
- 섹션 헤딩이 목차형인지 검사 (나쁜 예: "배경", "결론")
- 톤이 Warm Expert인지 검사
- 개선 방향 제안

## 출력

`/tmp/blog-polish-{slug}/diagnosis.json`

## 에이전트

`.claude/agents/blog-diagnostician.md` 참조

## 파이프라인 위치

```
blog-polish
  Step 1: blog-diagnose   ← 여기
  Step 2: blog-polish-ko
  Step 3: blog-polish-en
```

## 참고

- 이 스킬의 정본은 레포 파일입니다. 시스템 등록 스킬은 레포의 미러입니다.
