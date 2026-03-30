---
name: pb-story-produce
description: "\"안녕하세요, 저는 ~입니다\" pb 스토리 시리즈 전체 제작 파이프라인 오케스트레이터. 주제 입력 → 리서치 → KO+EN 크로스 토의 → KO+EN HTML 작성 → 이미지 보강 → OG 이미지 → articles.json 등록 → git push 까지 end-to-end 진행. 새 pb 스토리 글 하나를 완성하려면 이 스킬을 사용할 것."
argument-hint: "[주제명] e.g. 'Linux', 'GPS', 'WiFi'"
---

# pb-story-produce

"안녕하세요, 저는 ~입니다" 시리즈 제작 오케스트레이터.
주제명 하나를 받아 발행 완료까지 전체 파이프라인을 실행한다.

## 파이프라인 개요

```
[주제명 입력]
    ↓
[Phase 1] pb-story-researcher → _workspace/pb_story_[slug]/01_research.md
    ↓
[Phase 1.5] 크로스 토의 (KO ↔ EN 병렬 보강 리서치 + 피어 DM + 공동 아웃라인)
    writer-ko: KO 문화권 보강 리서치 수행
    writer-en: EN 문화권 보강 리서치 수행
    → 서로 인사이트 공유 (SendMessage peer DM)
    → 공동 아웃라인 합의 → _workspace/pb_story_[slug]/01.5_shared_outline.md
    ↓
[Phase 2a] pb-story-writer (KO) → story/[slug]-story-pb/ko/index.html
[Phase 2b] pb-story-writer (EN) → story/[slug]-story-pb/en/index.html  (병렬)
    ↓
[Phase 2.5] image-reinforce --auto (KO + EN 각각)
    ↓
[Phase 3] OG 이미지 생성 (KO + EN)
    ↓
[Phase 4] articles.json 등록
    ↓
[Phase 5] git push
```

## 실행 방식: 에이전트 팀

4명 팀원 + 오케스트레이터(pb):

| 에이전트 | 역할 |
|---------|------|
| researcher | pb-story-research 스킬 실행 |
| writer-ko | pb-story-write 스킬 — KO 작성 |
| writer-en | pb-story-write 스킬 — EN 작성 |
| img-agent | image-reinforce --auto — KO+EN 이미지 보강 |

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

### Phase 1.5: 크로스 토의 (Cross-Discussion)

**목적**: 각 언어 작가가 자신의 문화권 시각으로 보강 리서치를 하고, 서로 인사이트를 교환해 핵심 내러티브를 합의한 뒤 각자 자연스러운 언어로 작성.

**실행 순서:**

1. writer-ko, writer-en 동시에:
   - `_workspace/pb_story_[slug]/01_research.md` 읽기
   - 자신의 언어권 시각으로 보강 리서치 (웹 검색, 추가 사실 발굴)
     - writer-ko: 한국/아시아 사용 맥락, 국내 커뮤니티 반응, 한국어권 독자에게 특히 흥미로운 각도
     - writer-en: 서구 미디어 시각, 영어권 유저 사례, EN 독자에게 공명하는 프레이밍

2. 보강 완료 후 → **피어 DM으로 인사이트 공유** (SendMessage):
   - writer-ko → writer-en: "KO 보강 인사이트: [핵심 3가지]"
   - writer-en → writer-ko: "EN 보강 인사이트: [핵심 3가지]"

3. 상대의 메시지 수신 후 → **공동 아웃라인 협의:**
   - 핵심 사실 5~7개 (양쪽이 반드시 포함할 팩트)
   - 감정 호 (emotional arc) — 도입 긴장감 → 절정 → 해소
   - 각 언어에서 강조할 차별 각도

4. **공동 아웃라인 파일 저장:**
   ```
   _workspace/pb_story_[slug]/01.5_shared_outline.md
   ```
   형식:
   ```markdown
   # 공동 아웃라인: [주제명]

   ## 합의된 핵심 팩트 (양 언어 필수 포함)
   1. ...
   2. ...

   ## 감정 호 (Emotional Arc)
   - 도입: ...
   - 절정: ...
   - 해소: ...

   ## KO 차별 각도
   - ...

   ## EN 차별 각도
   - ...
   ```

5. 공동 아웃라인 저장 완료 → Phase 2 (HTML 작성) 진행

**중요:** 토의는 필수, 작성은 여전히 독립적. 공통 사실과 감정 호만 공유하고 표현은 각 언어에 맞게.

### Phase 2: KO + EN 병렬 작성

writer-ko, writer-en 동시에 작업:
- `_workspace/pb_story_[slug]/01_research.md` + `01.5_shared_outline.md` 참조
- writer-ko → KO HTML + 이미지 디렉토리 생성 (KO 차별 각도 반영)
- writer-en → EN HTML + 이미지 디렉토리 생성 (EN 차별 각도 반영)

### Phase 2.5: 이미지 보강

writer-ko, writer-en 완료 후 → img-agent에게 KO+EN 각각 실행:

img-agent는 `image-reinforce` 스킬을 `--auto` 모드로 실행:
```
Skill: image-reinforce
Args: story/[slug]-story-pb/ko/index.html --auto
```
```
Skill: image-reinforce
Args: story/[slug]-story-pb/en/index.html --auto
```

- KO+EN 병렬 실행 가능
- 목표: 각 포스트에 4~6개 맥락 이미지 삽입
- 실패한 슬롯은 조용히 스킵, 결과만 보고
- 이미지는 `ko/image/` `en/image/` 에 다운로드 (로컬 저장)
- 완료 후 오케스트레이터에게 결과 보고

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
| 이미지 보강 | 슬롯별 스킵 허용, 0개여도 계속 |
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
