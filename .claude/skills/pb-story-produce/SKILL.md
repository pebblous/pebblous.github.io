---
name: pb-story-produce
description: "\"안녕하세요, 저는 ~입니다\" pb 스토리 시리즈 전체 제작 파이프라인 오케스트레이터. 주제 입력 → 리서치 → KO+EN HTML 작성 → OG 이미지 → articles.json 등록 → git push 까지 end-to-end 진행. 새 pb 스토리 글 하나를 완성하려면 이 스킬을 사용할 것."
argument-hint: "[주제명] e.g. 'Linux', 'GPS', 'WiFi'"
---

# pb-story-produce

"안녕하세요, 저는 ~입니다" 시리즈 제작 오케스트레이터.
주제명 하나를 받아 발행 완료까지 전체 파이프라인을 실행한다.

## 파이프라인 개요

```
[주제명 입력]
    ↓
[Phase 1] pb-story-researcher → _workspace/01_pb_research.md
    ↓
[Phase 2a] pb-story-writer (KO) → story/[slug]-story-pb/ko/index.html
[Phase 2b] pb-story-writer (EN) → story/[slug]-story-pb/en/index.html  (병렬)
    ↓
[Phase 3] OG 이미지 생성 (KO + EN)
    ↓
[Phase 4] articles.json 등록
    ↓
[Phase 5] git push
```

## 실행 방식: 에이전트 팀

3명 팀원 + 오케스트레이터(pb):

| 에이전트 | 역할 |
|---------|------|
| researcher | pb-story-research 스킬 실행 |
| writer-ko | pb-story-write 스킬 — KO 작성 |
| writer-en | pb-story-write 스킬 — EN 작성 |

### 팀 구성

```python
# pb가 실행하는 팀 구성
TeamCreate("pb-story-[slug]")
# researcher, writer-ko, writer-en 스폰
```

## Phase별 상세

### Phase 1: 리서치

researcher에게:
- 주제명 전달
- `pb-story-research` 스킬 실행 지시
- 출력: `_workspace/01_pb_research.md`

리서치 완료 후 → writer-ko, writer-en에게 동시 전달.

### Phase 2: KO + EN 병렬 작성

writer-ko, writer-en 동시에 작업:
- 동일한 `_workspace/01_pb_research.md` 참조
- writer-ko → KO HTML + 이미지 디렉토리 생성
- writer-en → EN HTML + 이미지 디렉토리 생성

### Phase 3: OG 이미지 생성

두 HTML 완성 후:
```bash
cd /workspace/extra/repos/pebblous.github.io
PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium \
  node tools/generate-og-image.js --from-html story/[slug]-story-pb/ko/index.html --force
PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium \
  node tools/generate-og-image.js --from-html story/[slug]-story-pb/en/index.html --force
```

실패 시: 1회 재시도. 실패해도 계속 진행.

### Phase 4: articles.json 등록

`_workspace/02_pb_write_meta.json`의 두 항목을 `articles.json` 맨 앞에 삽입:

```python
import json
with open('articles.json') as f:
    data = json.load(f)
# EN 먼저, KO 두 번째 순서로 insert(0)
data['articles'].insert(0, ko_entry)
data['articles'].insert(0, en_entry)
with open('articles.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
```

CRITICAL: `{"categories": {...}, "articles": [...]}` wrapper 유지.

### Phase 5: Git Push

```bash
git add -A
git commit -m "feat: 저는 [이름]입니다 — pb 스토리 KO+EN 추가"
git push origin main
```

## 에러 핸들링

| 단계 | 실패 시 |
|------|---------|
| 리서치 | 도메인 지식 기반 계속 진행 |
| KO 작성 실패 | EN만으로 진행, 사용자 알림 |
| OG 이미지 | 1회 재시도 → 실패해도 계속 |
| articles.json | 백업(`articles.json.bak`) 후 중단 |
| git push | 로컬 커밋 유지, 사용자 알림 |

## 테스트 시나리오

### 정상 흐름
입력: "GPS"
1. researcher: GPS 역사, 군사 → 민간 개방, 24개 위성, 정확도 진화 리서치
2. writer-ko: "안녕하세요, 저는 GPS입니다" KO HTML
3. writer-en: "Hello, I'm GPS" EN HTML
4. OG 이미지 2개 생성
5. articles.json에 gps-story-pb-ko, gps-story-pb-en 추가
6. git push

### 에러 흐름
OG 이미지 생성 실패 → 1회 재시도 → 실패 → "수동 OG 생성 필요" 알림 후 articles.json 등록으로 이동.
