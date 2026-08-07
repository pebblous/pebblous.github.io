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

### 자동 머지 함 — 검토 관문은 진본 PR

> 초기 설계는 "PR만 만들고 머지는 사람이"였다. 자산 2/3이 단방향 미러라 PR이 쌓이기만 해서
> 2026-07 자동 머지로 전환했다(PR #188). 아래는 그 전환 이후의 실제 동작이다.

clean PR은 워크플로우가 스스로 머지한다. 사람이 개입하는 건 **자동 머지가 실패했을 때뿐**이다.

- 사본은 라이브 사이트지만, 자산 2/3은 콘텐츠가 아니라 진본의 미러 — 검토는 진본 PR에서 끝낸다
- 따라서 **진본 main에 머지하는 순간 사본에도 나간다**고 보고 진본 단계에서 diff를 봐야 한다
- 사본 PR이 열린 채 남아 있다면 그건 검토 대기가 아니라 **사고 신호**다 (아래 트러블슈팅)

### 머지 결과는 PR 상태로 검증한다

`gh pr merge --auto` 는 *auto-merge를 켜는* 명령이지 머지하는 명령이 아니다. 충돌이 있어도
"켜기"에는 성공해 **exit 0** 을 반환한다. 그러면 GitHub은 머지 불가 상태로 무한 대기하고,
워크플로우는 `✅ auto-merge 활성화됨` 을 찍고 초록으로 끝난다.

이 때문에 2026-08-06까지 사본에 충돌 PR이 쌓이는 동안 진본 Actions 는 sync 실행 30건이
전부 `success` 로 보였다. **충돌이 진본에서 보이지 않는 상태**였다.

그래서 워크플로우는 머지 명령의 종료 코드를 믿지 않고 실제 PR 상태를 확인한다:

1. `mergeable` 이 확정될 때까지 대기(최대 30초) — `CONFLICTING` 이면 머지 시도 없이 즉시 실패
2. 머지 시도 (`--auto` → 실패 시 즉시 `--squash`)
3. `state` 가 `MERGED` 가 될 때까지 폴링(최대 90초)
4. 90초 안에 머지되지 않으면 **job 실패** + `::error` 어노테이션에 PR 링크·`mergeStateStatus` 노출

즉 사본에 나가지 못한 변경은 진본 Actions 에서 빨간불로 즉시 드러난다.

## 갈라짐 정기 감사

충돌의 근본 원인은 거의 항상 reverse-divergence다. 그런데 **어느 파일이 갈라졌는지**를 알 방법이
없으면 복구를 시작할 수 없다. 자산 2/3은 178개 파일이라 눈으로 비교하는 건 불가능하다.

워크플로우: [`.github/workflows/audit-sabon-divergence.yml`](../../.github/workflows/audit-sabon-divergence.yml)
도구: [`tools/audit-sabon-divergence.js`](../../tools/audit-sabon-divergence.js)

- 트리거: 매주 월요일 00:00 UTC + **수동 실행**(`workflow_dispatch`)
- 충돌 PR을 조사할 때는 이 감사를 수동으로 돌리는 게 첫 단계다
- reverse-diverged 파일이 하나라도 있으면 **job 실패** — 진본 Actions 에서 빨간불로 보인다

### 감사가 보는 것

`sync-to-sabon.yml` 의 rsync 규칙을 그대로 미러링해 비교한다(`docs/seo/` 제외 포함). 어긋나면
sync 가 건드리지도 않는 파일을 갈라졌다고 보고하는 오탐이 난다.

| 분류 | 의미 |
|---|---|
| `identical` | 정상 |
| `diverged` | 양쪽 존재, 내용 다름 |
| `sabon-only` | 사본에만 존재 (rsync `--delete` 미사용이라 보존됨) |
| `jinbon-only` | 진본에만 존재 → sync 가 아직 안 들어감 |

**내용이 다르다는 사실만으로는 부족하다.** "사본이 고쳤다"와 "진본 변경이 아직 안 들어갔다"는
둘 다 `diverged` 로 보인다. 그래서 사본의 git 히스토리로 가른다 — 해당 경로를 **마지막으로 건드린
커밋이 sync 봇**(`blog-service-sync-bot` 또는 `auto-sync:` 제목)이면 reverse-divergence가 아니라
막힌 sync PR이고, 사람·다른 에이전트면 reverse-divergence 확정이다. 리포트에서 ⛔ 로 표시된다.

같은 이유로 사본 checkout 은 `fetch-depth: 0` 이어야 한다. shallow clone 이면 판정이 전부 빈다.

### 로컬 실행

```bash
node tools/audit-sabon-divergence.js --sabon <사본경로> [--json report.json]
node tools/audit-sabon-divergence.test.js   # 단위 테스트
```

## 트러블슈팅

### 워크플로우가 graceful skip만 한다

`SABON_SYNC_TOKEN` secret 미설정. 위 Setup 단계 진행.

### PR 생성에 실패

- PAT 권한 부족 — `repo` scope 확인
- PAT 만료 — 새 토큰으로 갱신
- 사본 레포에 같은 이름의 브랜치 충돌 — 워크플로우에서 timestamp 사용해 유니크하지만 매우 빠른 연속 push 시 가능

### 사본에 auto-sync PR이 열린 채 쌓여 있다

가장 흔한 사고. 진본 Actions 가 초록이어도 발생할 수 있다(위 "머지 결과는 PR 상태로 검증한다" 참조 —
2026-08-06 이전 워크플로우는 이 상태를 성공으로 보고했다).

**증상 구분** — 사본 PR의 `mergeable_state` 를 본다:

| 값 | 의미 | 조치 |
|---|---|---|
| `dirty` | 충돌 — reverse-divergence | 아래 복구 절차 |
| `blocked` | 필수 체크 실패/대기 | 사본 CI 로그 확인 |

**왜 하나가 아니라 여러 개인가 (캐스케이드)**

한 번 막히면 그 뒤가 전부 막힌다:

1. 사본에서 자산 2/3 파일을 직접 수정 → 진본 미러와 갈라짐
2. 진본이 같은 파일을 변경 → sync PR 충돌 → PR 열린 채 방치
3. 사본 main 은 그 변경을 **못 받은 상태 그대로** 유지
4. 다음 진본 push → 새 sync 브랜치를 그 사본 main 에서 따옴 → **같은 파일에서 같은 충돌**
5. 3~4 반복 — 진본이 자산 2/3을 건드릴 때마다 충돌 PR이 하나씩 늘어난다

**복구 — 사본에서 충돌만 풀면 재발한다**

사본 PR에서 충돌을 해결하고 머지해도 진본은 여전히 옛 내용이라 다음 sync 때 똑같이 충돌한다.
반드시 진본을 고쳐야 끝난다:

1. **[Audit 사본 divergence](../../.github/workflows/audit-sabon-divergence.yml) 를 수동 실행**해
   갈라진 파일 목록을 확보한다 (위 "갈라짐 정기 감사"). ⛔ 표시된 행이 작업 대상이다
2. ⛔ 파일별로 판단:
   - 사본 변경이 살릴 가치가 있으면 → **진본에 reverse-sync PR** (사본 → 진본, 수동)
   - 실수·구버전이면 → 진본 버전 채택하고 사본 PR 머지
3. 진본 머지 → 자동 sync 재트리거 → 사본이 올바른 내용으로 덮어써짐
4. 쌓여 있던 나머지 auto-sync PR들은 내용이 같아지므로 자연 해소 — 남으면 닫는다
5. 감사를 다시 돌려 reverse-divergence 0 을 확인한다

⚠️ 감사 결과 reverse-diverged 가 **0건**인데도 PR이 막혀 있다면 원인은 divergence 가 아니다.
사본 CI 필수 체크(`blocked`) 쪽을 보라.

재발 방지는 하나뿐이다: **사본의 자산 2/3을 직접 수정하지 않는다** (`CLAUDE.md` 정책).

### 사본 PR이 너무 자주 생성

진본 main에 작은 변경마다 PR이 생김. 합리적 운영 위해:

- 진본에서 작업할 때 PR을 거쳐 main에 들어가도록 (직접 push 금지 권장)
- 작은 변경 묶어서 한 번에 머지 → 사본 PR 한 개

## 관련

- [decision-log.md](./decision-log.md) — B단계 진입 + 진본/사본 모델 결정
- [architecture.md](./architecture.md) — 3-자산 분리 비전
- 사본 정책 ([`pebblous.github.io/CLAUDE.md`의 Branch Policy](https://github.com/pebblous/pebblous.github.io/blob/main/CLAUDE.md))
