---
name: dc-analyze
description: DataClinic 차트 시각 분석 스킬. collected.json의 차트 이미지를 시각적으로 분석하고 API 텍스트와 비교하여 불일치를 탐지. dc-story-produce 파이프라인의 Stage 2.
agent: dc-visual-analyst
---

# dc-analyze

`dc-story-produce` 파이프라인의 Stage 2. `collected.json`의 차트 이미지를 시각적으로 분석하고 API 텍스트 클레임과 비교하여 불일치를 탐지한다.

## 역할

`dc-visual-analyst` 에이전트를 호출하여:

- CDN 이미지 및 렌더링된 차트를 시각적으로 분석
- API 텍스트(숫자, 퍼센트, 레이블)와 차트 실제 값 비교
- 불일치(discrepancy) 탐지 및 기록
- `analysis.json` 생성

## 입력

`/tmp/dc-{reportId}/collected.json`

## 출력

`/tmp/dc-{reportId}/analysis.json`

## 에이전트

`.claude/agents/dc-visual-analyst.md` 참조

## 파이프라인 위치

```
dc-story
  Stage 1: dc-collect
  Stage 2: dc-analyze  ← 여기
  Stage 3: dc-write-ko
  Stage 4: dc-write-en
  Stage 5: dc-publish
```

## 참고

- 이 스킬의 정본은 레포 파일입니다. 시스템 등록 스킬은 레포의 미러입니다.
