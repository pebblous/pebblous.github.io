# 진본→사본 자동 동기화

진본(`joohaeng-pbls/blog-service`)에서 자산 2/3을 변경하면 사본(`pebblous/pebblous.github.io`)에 PR이 자동 생성되도록 하는 GitHub Action.

**워크플로우**: [`.github/workflows/sync-to-sabon.yml`](../../.github/workflows/sync-to-sabon.yml)

## 작동 방식

```
진본 main에 push/merge
       ↓
paths 매치 확인
(tools/, .claude/skills/, .claude/agents/, CLAUDE.md, docs/)
       ↓
사본 레포 checkout (SABON_SYNC_TOKEN 사용)
       ↓
rsync로 자산 2/3 복사 (--delete 없음, 보수적)
       ↓
변경 있으면 사본에 새 브랜치 + commit
       ↓
gh pr create — 자동 PR 생성 (auto-sync/<timestamp>-<sha>)
       ↓
gh pr merge --squash --auto → 실패 시 즉시 squash 머지
       ↓
둘 다 실패(충돌 등)해야 PR이 열린 채 남음 → 그때만 사람 검토
```

### 자동 머지 (기본 동작)

자산 2/3은 진본→사본 **단방향 미러**라, PR을 쌓아두면 stall만 생긴다. 그래서 워크플로우가
PR을 만든 직후 스스로 머지한다. 단계적 폴백으로 안전망을 남긴다:

1. `gh pr merge --squash --delete-branch --auto` — 필수 체크가 있으면 통과 후 머지
2. 실패 시 즉시 `--squash` 머지 (필수 체크가 없는 경우)
3. 둘 다 실패하면 **PR을 열어둔 채 종료** — 충돌·reverse-divergence 가능성, 사람이 검토

실측: 최근 auto-sync PR 6건 모두 **생성 후 3~4초 내 머지**됐다(2026-07-19 ~ 07-24).

> ⚠️ 그래서 **사본 PR은 검토 관문이 아니다.** 진본 main에 머지하는 순간 사본에도 나간다고
> 보고, 검토는 진본 PR 단계에서 끝내야 한다.

## Setup (한 번만)

### 1. PAT 생성

[GitHub Settings → Developer settings → Personal access tokens (classic)](https://github.com/settings/tokens) 에서 새 토큰 발급:

- **Note**: `blog-service sync to 사본`
- **Expiration**: 1년 (또는 정책에 맞게)
- **Scopes**: `repo` (사본에 push + PR 생성 권한)

> GitHub App을 쓰면 더 안전하지만 초기는 PAT로 단순화.

### 2. 진본 레포에 secret 등록

[`joohaeng-pbls/blog-service` Settings → Secrets and variables → Actions](https://github.com/joohaeng-pbls/blog-service/settings/secrets/actions) 에서:

- **Name**: `SABON_SYNC_TOKEN`
- **Secret**: 위에서 생성한 PAT 값

### 3. 검증

진본 main에 자산 2/3 영역의 작은 변경(예: `docs/blog-service/sync.md` 본 문서) push 후:

1. 진본 [Actions 탭](https://github.com/joohaeng-pbls/blog-service/actions)에서 `Sync to 사본` 워크플로우 success 확인
2. 사본 [PR 목록](https://github.com/pebblous/pebblous.github.io/pulls)에서 `auto-sync: 진본 blog-service@<sha>` PR 확인 — 이미 머지돼 있으면 정상이므로 **closed 포함해서** 볼 것 (`gh pr list --repo pebblous/pebblous.github.io --state all --search auto-sync`)
3. 머지된 PR의 diff로 의도한 파일만 갔는지 확인. 열린 채 남아 있다면 자동 머지가 실패한 것 — 충돌 확인

## 정책

### 보수적 모드 (`--delete` 없음)

현재 워크플로우는 `rsync`를 `--delete` 없이 사용. 의미:

- ✅ 진본에서 추가된 파일 → 사본에 추가
- ✅ 진본에서 변경된 파일 → 사본에 같은 경로의 파일을 진본 내용으로 덮어쓰기
- ❌ 진본에서 삭제된 파일 → **사본에 그대로 남음** (수동 정리 필요)
- ❌ 사본에만 있는 파일 → **그대로 유지** (반대 방향 sync 없음)

이유: **reverse-divergence** 가능성. 사본에서만 발전한 자산 2/3 파일(예: 다른 세션의 PR #188 `report-produce` 변경)이 존재. `--delete` 또는 강한 덮어쓰기는 그 변경을 손실시킴.

### Reverse-divergence 정리 후 `--delete` 활성화 검토

장기 정책 정착 시:

1. 사본의 자산 2/3 직접 수정 금지 정책 안내
2. 현재 reverse-diverged 파일들을 진본에 reverse-sync (수동)
3. `rsync -a --delete` 활성화

이때부터 진본·사본의 자산 2/3이 완전 일치 보장.

### 자동 머지 안 함

PR 자동 생성은 하지만 머지는 사람이 수동:

- 사본은 라이브 사이트 — 자동 머지 위험
- 머지 직전 diff 검토로 reverse-divergence·의외 변경 감지
- 사본의 다른 PR(콘텐츠 변경)과 충돌 시점 조정 가능

## 트러블슈팅

### 워크플로우가 graceful skip만 한다

`SABON_SYNC_TOKEN` secret 미설정. 위 Setup 단계 진행.

### PR 생성에 실패

- PAT 권한 부족 — `repo` scope 확인
- PAT 만료 — 새 토큰으로 갱신
- 사본 레포에 같은 이름의 브랜치 충돌 — 워크플로우에서 timestamp 사용해 유니크하지만 매우 빠른 연속 push 시 가능

### 사본 PR이 너무 자주 생성

진본 main에 작은 변경마다 PR이 생김. 합리적 운영 위해:

- 진본에서 작업할 때 PR을 거쳐 main에 들어가도록 (직접 push 금지 권장)
- 작은 변경 묶어서 한 번에 머지 → 사본 PR 한 개

## 관련

- [decision-log.md](./decision-log.md) — B단계 진입 + 진본/사본 모델 결정
- [architecture.md](./architecture.md) — 3-자산 분리 비전
- 사본 정책 ([`pebblous.github.io/CLAUDE.md`의 Branch Policy](https://github.com/pebblous/pebblous.github.io/blob/main/CLAUDE.md))
