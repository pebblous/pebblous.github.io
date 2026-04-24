---
name: dc-write-en
description: DataClinic 진단 스토리 영어 번역 스킬. 완성된 한국어 HTML을 자연스러운 영어로 번역하고, 이미지 복사 및 영어 OG 이미지 생성. dc-story 오케스트레이터의 Stage 4.
agent: dc-story-writer-en
---

# dc-write-en

`dc-story` 파이프라인의 Stage 4. 완성된 한국어 HTML을 자연스러운 영어로 번역하고 EN OG 이미지를 생성한다.

## 역할

`dc-story-writer-en` 에이전트를 호출하여:

- KO HTML을 자연스러운 영어로 번역 (직역 금지)
- 영미권 독자 기준 표현 사용
- 본문 이미지: `../ko/image/` 경로 참조 (중복 다운로드 방지)
- EN OG 이미지 생성

### ⛔ OG 이미지 경로 규칙 (필수)

**og:image, twitter:image, JSON-LD image 경로는 반드시 `/en/image/index.png`로 변경해야 한다.**

KO의 `/ko/image/` 경로를 그대로 복사하면 EN 페이지 공유 시 한글 OG 이미지가 노출된다.
본문 `<img>` 태그는 `../ko/image/`를 공유해도 되지만, 메타 태그의 OG 이미지는 반드시 EN 전용 경로를 사용할 것.

```
✅ og:image    → https://blog.pebblous.ai/{slug}/en/image/index.png
✅ twitter:image → https://blog.pebblous.ai/{slug}/en/image/index.png
✅ JSON-LD image → https://blog.pebblous.ai/{slug}/en/image/index.png

❌ og:image    → https://blog.pebblous.ai/{slug}/ko/image/index.png  ← 금지
```

## 입력

`blog/{slug}/ko/index.html`
`ko-changes.md` (KO 작성 중 변경사항 메모)

## 출력

`blog/{slug}/en/index.html`
`blog/{slug}/en/image/index.png` (EN OG 이미지)

## 에이전트

`.claude/agents/dc-story-writer-en.md` 참조

## 파이프라인 위치

```
dc-story
  Stage 1: dc-collect
  Stage 2: dc-analyze
  Stage 3: dc-write-ko
  Stage 4: dc-write-en  ← 여기
  Stage 5: dc-publish
```

## 참고

- 이 스킬의 정본은 레포 파일입니다. 시스템 등록 스킬은 레포의 미러입니다.
