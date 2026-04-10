---
name: dc-story
description: DataClinic 진단 스토리 전체 파이프라인 오케스트레이터. 리포트 ID를 받아 데이터 수집 → 시각 분석 → 한국어 작성 → 영어 번역 → 퍼블리시까지 5단계를 자동 실행. 'DataClinic 스토리 작성해줘', 'DC 리포트 N번 스토리', '진단 스토리 만들어줘' 등으로 트리거.
argument-hint: "[reportId]"
---

# dc-story

DataClinic 진단 스토리 생성 전체 파이프라인 오케스트레이터.

리포트 ID 하나를 받아 5단계를 순차 실행한다.

## 파이프라인

```
Stage 1: dc-collect   — 데이터 수집 → collected.json
Stage 2: dc-analyze   — 시각 분석 → analysis.json
Stage 3: dc-write-ko  — 한국어 HTML 작성
Stage 4: dc-write-en  — 영어 번역
Stage 5: dc-publish   — OG 이미지 + articles.json + git push
```

## 트리거 예시

- "DataClinic 스토리 작성해줘"
- "DC 리포트 42번 스토리"
- "진단 스토리 만들어줘"
- "reportId N번으로 스토리"

## 각 Stage 스킬 참조

- Stage 1: `.claude/skills/dc-collect/skill.md`
- Stage 2: `.claude/skills/dc-analyze/skill.md`
- Stage 3: `.claude/skills/dc-write-ko/skill.md`
- Stage 4: `.claude/skills/dc-write-en/skill.md`
- Stage 5: `.claude/skills/dc-publish/skill.md`

## 에이전트

각 Stage는 전용 에이전트를 호출:
- `dc-collector`, `dc-visual-analyst`, `dc-story-writer-ko`, `dc-story-writer-en`
- Stage 5 (dc-publish)는 pb가 직접 실행

## 참고

- 이 스킬의 정본은 레포 파일입니다. 시스템 등록 스킬은 레포의 미러입니다.
