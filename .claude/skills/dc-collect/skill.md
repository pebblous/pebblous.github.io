---
name: dc-collect
description: DataClinic 리포트 데이터 수집 스킬. API 텍스트, CDN 이미지, JS 렌더링 차트, 아웃라이어, 유사도 샘플, 클래스 목록을 수집하여 collected.json으로 저장. dc-story-produce 파이프라인의 Stage 1.
agent: dc-collector
---

# dc-collect

`dc-story-produce` 파이프라인의 Stage 1. DataClinic 리포트 데이터를 수집하여 `collected.json`으로 저장한다.

## 역할

`dc-collector` 에이전트를 호출하여 다음을 수집:

- API 텍스트 (레벨 1·2·3 진단 결과)
- CDN 정적 이미지 URL
- JS 렌더링 차트 (Playwright 스크린샷)
- 아웃라이어 샘플 (고밀도/저밀도)
- 유사도 샘플 (nearest/farthest)
- 클래스 목록

## 출력

`/tmp/dc-{reportId}/collected.json`

## 에이전트

`.claude/agents/dc-collector.md` 참조

## 파이프라인 위치

```
dc-story
  Stage 1: dc-collect  ← 여기
  Stage 2: dc-analyze
  Stage 3: dc-write-ko
  Stage 4: dc-write-en
  Stage 5: dc-publish
```

## 참고

- DataClinic MCP 툴 사용 (`mcp__dataclinic__*`)
- 이 스킬의 정본은 레포 파일입니다. 시스템 등록 스킬은 레포의 미러입니다.
