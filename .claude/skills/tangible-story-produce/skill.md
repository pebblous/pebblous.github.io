---
name: tangible-story-produce
description: >
  탠저블 데이터 발행 꾸러미(웹 실험보고서)를 블로그에 접수해 Tangible Data Story 로 발행한다.
  꾸러미 경로를 받아 규격 검사 → 탐색기 복사·해시 → 기사 초안(KO/EN) → 제목·문체·등록 검사 →
  OG·사이드카·changelog → PR(사람 검토 셋) → 라이브 확인. '탠저블 데이터 접수', '실험 꾸러미 발행',
  'tangible-story-produce <package>' 요청 시 이 스킬 사용. 갱신(새 판)도 같은 절차.
argument-hint: "<package-dir> [--update]"
---

# tangible-story-produce: 실험 꾸러미 → Tangible Data Story

정본 = `docs/blog-service/tangible-data-intake.md` (v0.1). 협의 기록 = joohaeng-pbls/blog-service#234. 참조 구현 = 사본 `story/tangible-data-dinov3-beans/`(KO/EN 기사 + `app/`).

## ⛔ 먼저 읽는다
1. `docs/blog-service/tangible-data-intake.md` — 규격과 절차(단일 정본)
2. `docs/ko-style-standard.md` §4-1(해라체)·§4-2(제목 정본 v3, 부제 시험)
3. `.claude/skills/story-style-guide/SKILL.md` — 스토리 HTML 골격
4. `.claude/skills/blog-write/references/html-conventions.md`

## 하지 않는 것
- 학습·추론·모델 다운로드 · 전달받은 검증 코드를 배포 자격증명이 있는 환경에서 실행 · 꾸러미의 데이터·수치·결론 수정
- 규격 위반을 접수 쪽에서 몰래 고쳐 통과시키기(서체 등 변환은 PR 에 내역을 적고 해시 둘을 기록)
- `articles.json` 직접 편집 · `git add -A` · 형님 검토 전 머지

## 절차

### 1. 규격 검사
```bash
python3 tools/tangible-intake-check.py <package>           # 사람용
python3 tools/tangible-intake-check.py <package> --json    # PR 본문에 첨부
```
❌ 가 하나라도 있으면 여기서 끝. 실패 항목을 그대로 실험 쪽에 돌려준다(이슈 댓글 또는 회신). ⚠️ 는 PR 에 적고 사람이 본다(100MB 검토선, 선택 자산 미확인, uiRegisterWaiver).

### 2. 복사와 해시
- 새 가지: `git fetch && git checkout -B feat/tangible-<slug> origin/main` (사본 저장소)
- `rsync -a <package>/dist/ story/<slug>/app/` — slug 는 선언 파일 값 그대로(접두어 추가 금지)
- 해시: 전달본 `stats.treeHash`(검사기가 산출) 와 발행본(`app/` 산출) 둘 다 기록. 접수 쪽이 무엇을 바꿨으면(예: 권리 미확인 서체 제외) 변환 내역을 함께 적는다. 바꾼 것이 없으면 두 해시가 같아야 한다.
- 갱신(`--update`)이면 `app/` 통째 교체, 이전 판은 git 이력에 남는다. 변경 분류 `copy|design|data|analysis|conclusion` 을 PR 에 적는다.

### 3. 기사 초안 (KO 필수, EN 권장)
`story/<slug>/ko/index.html`, `story/<slug>/en/index.html`. 참조 구현의 골격을 그대로 쓴다:
1. 핵심 요약(`key-insight`) — `summary` 또는 `reportPath` 요약부에서
2. 탐색기 — `<iframe class="tangible-frame" src="../app/">` + "새 창에서 크게 열기" 링크. 용량 안내 한 줄
3. 이렇게 써 본다 — `howTo[]`
4. 무엇을 볼 수 있나 — `findings[]`(각 항목 끝에 evidence id 를 `data-evidence` 속성이나 각주로)
5. 무엇을 알 수 없나 — `limits[]`
6. 데이터·출처·권리 — `sources[]`·`rights[]`·`downloads[]`·만든 과정(사람 검토 명시)
7. 시리즈 — Tangible Data Story 안내 + 허브 링크 `/project/tangible-data/<lang>/`
- 제목: `title.candidates` 가 있으면 그중 검사기 통과분을 후보로, 없으면 v3 규칙으로 세 형태 후보를 지어 PR 에 올린다. **최종 선택은 사람.**
- 문체: 기사 해라체. 탐색기 UI 는 꾸러미 그대로(신규는 규격상 해라체).
- 메타: title(검색 변형)·description·og/twitter·JSON-LD TechArticle(`isPartOf` = 허브)·hreflang.
- 사이드카: `articles.d/<slug>-ko.json`·`-en.json` — category `story`, provenance `{mode: attended, humanReviewed: true, trigger: {source: manual, actor}}`, image `story/<slug>/<lang>/image/index.png`, tags 에 "Tangible Data Story".

### 4. 검사
```bash
python3 tools/title-census.py --check-html story/<slug>/ko/index.html --check-html story/<slug>/en/index.html
python3 tools/check-ko-prose.py story/<slug>/ko/index.html
python3 tools/assemble-articles.py && node tools/validate-articles.js && git checkout -- articles.json
```
로컬 서버(`python3 -m http.server 8000`)로 허브·기사·`app/` 렌더, 콘솔 오류 0, 390px 가로 스크롤 없음, 허브 Story 그리드에 카드 등장을 확인한다.

### 5. OG · 기록
```bash
node tools/generate-og-image.js --from-html story/<slug>/ko/index.html
node tools/generate-og-image.js --from-html story/<slug>/en/index.html
```
`changelog.jsonl` 에 `{"type":"publish","slug":"story/<slug>",…}` 한 줄. 커밋은 경로 지정(`app/`·기사·사이드카·changelog).

### 6. PR — 사람 검토 셋
TL;DR(비유 1줄 + 무엇/왜/효과) 뒤에:
- 판 · 전달본 해시 · 발행본 해시 · 변환 내역 · 검사기 JSON 요약 · ⚠️ 항목
- **검토 ① 제목**: 두 시험(중학생·클릭) 판정, 후보 목록
- **검토 ② 권리**: `rights[]` 중 unconfirmed·excluded 와 그 처리
- **검토 ③ 과장 여부**: 기사의 결론 문장마다 evidence id 를 붙여 실험 조건·결론이 부풀려지지 않았는지 대조
머지는 형님이 한다.

### 7. 머지 뒤
assemble 워크플로가 `articles.json` 을 재조립한다(수 분). 라이브 `/project/tangible-data/ko/` · `/story/<slug>/ko/` · `/story/<slug>/app/` 200 과 허브 카드 등장을 확인하고 보고한다.

## 허브 규칙(변경 시 이 스킬도 고친다)
- Story 는 slug `tangible-data-*` 로 `project/tangible-data/` 허브 Story 그리드에 자동 등장(`tangible-data-art-*`·외부 URL 항목 제외).
- Art 는 slug `tangible-data-art-*`. 현재 Art 절은 수동 카드 — 내부 작품 페이지가 늘면 자동 그리드로 바꾼다.
