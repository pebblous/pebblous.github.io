# 설계 제안: 결정형 발행(B) + 해시 기반 재개(D)

> **비유 한 줄**: 사진관에서 "인화·봉투에 넣기·택배 접수"를 매번 예술가한테 시키다 보니 시간이 터진다 — 그건 기계가 할 일이다.
>
> **무엇**: publish-prep가 하는 기계적 작업(OG·사이드카·changelog·git·PR)을 LLM 에이전트 밖 순수 코드로 빼고(B), 작업 단위에 콘텐츠 해시를 붙여 죽어도 실패 지점부터 재개(D).
> **왜**: 발행은 95%가 판단 없는 결정형인데 에이전트 턴(고정 50)으로 돌려서 리포트가 자주 한도 초과로 죽는다. 근본 미스매치.
> **효과**: publish 단계 에이전트 턴 → 0(턴 한도 소멸). 어떤 단계 죽음도 자동·저비용 복구. 중복 접수 정확 차단.

계기: 2026-07-01 `run-1782864589379-d1o9iy`(EU CJEU 저작권 리포트)가 본문·OG·사이드카·changelog 다 만들고 **커밋+PR 직전 50턴 초과로 영구 실패** → 수동 복구. 로그상 publish-prep는 여러 런에서 반복적으로 턴 한도에 걸림.

---

## 문제 정의

엔진은 각 phase를 `claude -p`(maxTurns=50)로 실행한다. `publish-prep`(특히 report)는:

1. 스킬·CLAUDE.md 읽기
2. OG 이미지 생성 ko (`node tools/generate-og-image.js`)
3. OG 이미지 생성 en
4. `articles.d/<slug>-{ko,en}.json` 사이드카 작성
5. sitemap 갱신
6. `history/changelog.jsonl` append
7. Tailwind 빌드
8. `git add/commit`
9. `gh pr create`

**2~9는 전부 판단이 필요 없는 결정형**이다. 그런데 이걸 에이전트가 "생각→도구호출→결과" 턴으로 하나씩 처리 → report는 50턴 초과. 랜덤 버그가 아니라 *고정 턴 예산 vs 작업량*의 구조적 미스매치.

---

## B. 결정형 발행 (publish를 코드로)

에이전트 프롬프트 대신 엔진의 순수 TS 함수로 이관. 입력은 이미 앞 단계가 만든 산출물(`04_write_meta.json` 등)이라 새 판단이 없다.

```ts
// core/publish.ts  (에이전트 아님, 결정형)
export async function publish(run: RunContext): Promise<PublishResult> {
  const meta = readMeta(run);                    // 04_write_meta.json (+ en)
  await genOgImage(run, 'ko');                    // node tools/generate-og-image.js
  await genOgImage(run, 'en');
  writeSidecar(run, 'ko', meta);                  // articles.d/<slug>-ko.json (스키마 고정)
  writeSidecar(run, 'en', metaEn);
  appendChangelog(run, meta);                     // history/changelog.jsonl 1줄
  await buildTailwind(run);                       // 필요 시(또는 CI 위임)
  const sha = commitAll(run);                     // git add -A(화이트리스트) && commit
  const pr  = await openPR(run);                  // gh pr create
  return { sha, prUrl: pr.url, files: [...] };
}
```

- **에이전트 턴 = 0** → 턴 한도 개념 자체가 사라진다.
- 사이드카 스키마·changelog 포맷을 코드가 강제 → 스키마 드리프트 제거(지금은 에이전트가 매번 재현).
- 실패는 **명시적 예외**(OgGenError, GitPushError…)로 잡혀 "exited code=1" 같은 제네릭 미궁이 사라진다.
- 판단이 필요한 잔여(있다면: 커밋 메시지 요약 정도)만 선택적으로 짧은 `claude -p` 호출로 남기되, 발행의 성패 경로에서는 뺀다.

**Strangler 이행**: `publish-prep`를 에이전트→`publish()` 함수로 교체하되, 앞 단계(research/write/polish=진짜 판단)는 그대로. 한 phase만 바꾸므로 위험 격리.

---

## D. 해시 기반 재개 (복원력)

작업 단위에 **두 겹 해시**를 부여:

1. **입력 콘텐츠 해시(멱등키)** = `H(정규화(topic ‖ hook ‖ angle ‖ sourceURL ‖ category))`
   - 같은 주제 재접수 → 같은 키 → "이미 발행/진행 중" 정확 감지(현 제목 유사도 휴리스틱 대체·보완).
   - 발행물 provenance에 `task_hash` 각인 → 재현·감사.
2. **단계별 산출물 해시(재개키)** = 각 phase 완료 시 산출물 해시를 `state.json`에 체크포인트.
   - 죽은 런을 재개하면 **해시가 일치하는 완료 단계는 건너뛰고 실패 지점부터**. 이번 EU 글이면 "publish만 재개"로 자동 복구.

그린하우스의 CAS 사상과 동일: `run_hash = H(dataset_hash ‖ workflow_hash)` → 여기선 `task_hash = H(input_hash ‖ pipeline_hash)`. (reference_data_substrate_cas)

```jsonc
// state.json (확장)
{
  "taskHash": "sha256:…",              // 멱등키
  "pipelineHash": "sha256:…",          // 스킬/프롬프트 버전
  "steps": {
    "write-ko":   { "status": "done", "artifactHash": "…" },
    "publish":    { "status": "failed", "error": "GitPushError: …" }
  }
}
```

`recoverInterruptedRuns`를 "처음부터 재실행"이 아니라 "steps 체크포인트 기준 재개"로 승격.

---

## 이행 순서 (계획→리뷰→실행)

1. **스톱갭(즉시)**: publish-prep maxTurns 50→100. 오늘 밤 무인 런 보호. (되돌리기 쉬움)
2. **B 1차**: `core/publish.ts` 결정형 함수 + `publish-prep` phase를 이 함수 호출로 교체. 사이드카/changelog/og/git/PR을 코드화. 테스트=기존 완료 런 산출물로 골든 비교.
3. **D 1차**: `state.json`에 taskHash + step 체크포인트 기록. `recoverInterruptedRuns`를 재개형으로.
4. **D 2차**: 입력 해시 dedup을 접수 단계에 배선(현 유사도 게이트와 병행→대체).

## 리스크·주의

- 사이드카/changelog 스키마를 코드에 고정할 때 **현행 CI(auto-assemble articles.json)와 정합** 확인 필수.
- OG 생성 node 도구가 worktree cwd 상대경로 의존 → 함수도 동일 cwd 규약 유지.
- git 화이트리스트 커밋(절대 `node_modules` 등 포함 금지).
- 전부 **진본(`joohaeng-pbls/blog-service`)** 변경 → 형님 diff 리뷰 후 실행. 사본 직접수정 금지.

## 기대 효과

- publish 단계 실패 원인 1위(턴 초과) **제거**.
- 수동 복구(이번 EU 글 같은) **불필요** — 죽어도 자동 재개.
- 중복 주제 정확 차단 + 발행물 재현·감사(task_hash).
