#!/usr/bin/env bash
# Pages 배포 실패 감시·자동 재시도 (pages-deploy-watch.yml 이 배포 상태 변경 때·보조로 15분 예약 실행)
#
# 왜: legacy Pages 배포는 파일 옮기기 단계가 10분을 넘기면 실패한다(배포물 약 2.7GB).
#     다음 발행이 없으면 새 글이 404 로 남는다(2026-11-06 두 글 약 4시간 404).
# 판단(마지막 줄 ACTION=...):
#   none        최신 런 진행 중이거나 성공 — 성공이면 열린 알림 이슈를 닫는다
#   skip-stale  실패 런의 커밋이 지금 main 머리가 아님 — 옛 내용 배포 금지, 새 런을 기다린다
#   rerun       실패 런이 main 머리이고 시도 횟수가 MAX_ATTEMPTS 미만 — 다시 돌린다
#   rebuild     MAX_ATTEMPTS 를 다 썼거나 재실행이 거부됨, 이 머리 커밋의 새 빌드 요청이 MAX_REBUILDS 미만
#               — 알림 이슈에 적고 새 빌드를 요청한다("다시 실행"은 같은 업로드물을 다시 쓰지만
#               새 빌드는 업로드물을 새로 만든다 — 2026-11-10 사고는 새 빌드 세 번째 시도에서 복구)
#   notify      새 빌드 요청도 MAX_REBUILDS 를 다 썼거나 요청이 거부됨 — 알림만(사람이 봐야 함)
#   notified    같은 런·같은 시도로 이미 알림 — 아무것도 안 함(새 빌드도 두 번 요청하지 않는다)
# 환경변수: REPO(필수) · DRY_RUN=1(바꾸지 않음) · RUN_ID(특정 런 판단)
#           FAKE_HEAD · FAKE_ATTEMPT · FAKE_CONCLUSION · FAKE_HEAD_RUNS(로컬 시험용, DRY_RUN 일 때만)
#           MAX_ATTEMPTS(기본 3) · MAX_REBUILDS(기본 3) · ASSIGNEE(알림 이슈 담당)
#           WAIT_SECS(기본 0) — 최신 런이 진행 중이면 끝날 때까지 이만큼 기다린 뒤 판단
set -euo pipefail

: "${REPO:?REPO 필요}"
DRY_RUN="${DRY_RUN:-0}"
MAX_ATTEMPTS="${MAX_ATTEMPTS:-3}"
MAX_REBUILDS="${MAX_REBUILDS:-3}"
ASSIGNEE="${ASSIGNEE:-}"
TITLE_KEY="pages-deploy-watch"
FIELDS=databaseId,status,conclusion,headSha,attempt,createdAt,url

if [ -n "${RUN_ID:-}" ]; then
  run=$(gh run view "$RUN_ID" -R "$REPO" --json "$FIELDS")
else
  run=$(gh run list -R "$REPO" -w pages-build-deployment -L 1 --json "$FIELDS" --jq '.[0]')
fi
[ -n "$run" ] && [ "$run" != "null" ] || { echo "Pages 런을 찾지 못함"; echo "ACTION=none"; exit 0; }

WAIT_SECS="${WAIT_SECS:-0}"
waited=0
while [ "$(jq -r .status <<<"$run")" != "completed" ] && [ "$waited" -lt "$WAIT_SECS" ]; do
  sleep 20; waited=$((waited+20))
  run=$(gh run view "$(jq -r .databaseId <<<"$run")" -R "$REPO" --json "$FIELDS")
done
if [ "$waited" -gt 0 ]; then echo "런 마무리를 ${waited}초 기다림"; fi

id=$(jq -r .databaseId <<<"$run")
status=$(jq -r .status <<<"$run")
conclusion=$(jq -r .conclusion <<<"$run")
sha=$(jq -r .headSha <<<"$run")
attempt=$(jq -r .attempt <<<"$run")
url=$(jq -r .url <<<"$run")
head=$(gh api "repos/$REPO/commits/main" --jq .sha)

if [ "$DRY_RUN" = "1" ]; then
  head="${FAKE_HEAD:-$head}"; attempt="${FAKE_ATTEMPT:-$attempt}"; conclusion="${FAKE_CONCLUSION:-$conclusion}"
fi
echo "런 $id · 상태 $status · 결론 $conclusion · 시도 $attempt · 커밋 ${sha:0:7} · main 머리 ${head:0:7}"

open_issue() {
  gh issue list -R "$REPO" --state open --search "$TITLE_KEY in:title" --json number,title \
    --jq "[.[] | select(.title | contains(\"$TITLE_KEY\"))][0].number // empty"
}

act() { if [ "$DRY_RUN" = "1" ]; then echo "(dry-run) $*"; else "$@"; fi; }

# 알림 이슈에 적는다. 이미 같은 런·같은 시도로 적었으면 1 을 돌려준다(ACTION=notified).
notify() {
  local reason="$1" marker="marker: run=$id attempt=$attempt" num body
  num=$(open_issue)
  body="블로그 Pages 배포가 실패했습니다. 새 글이 404 로 보일 수 있습니다.

- 사유: $reason
- 런: $url (시도 $attempt회, 커밋 ${sha:0:7})
- 확인: 새 글 주소가 열리는지 보고, 안 열리면 위 런에서 Re-run failed jobs

$marker"
  if [ -n "$num" ]; then
    if gh issue view "$num" -R "$REPO" --json body,comments --jq '[.body, .comments[].body] | join("\n")' | grep -qF "$marker"; then
      echo "같은 런·같은 시도로 이미 알림"; return 1
    fi
    act gh issue comment "$num" -R "$REPO" --body "$body"
  else
    args=(issue create -R "$REPO" --title "[$TITLE_KEY] 블로그 배포 실패 — 새 글이 404일 수 있음" --body "$body")
    [ -n "$ASSIGNEE" ] && args+=(--assignee "$ASSIGNEE")
    act gh "${args[@]}"
  fi
}

# 시도를 다 썼을 때: 이 머리 커밋으로 만든 Pages 런 수(첫 빌드 1 + 새 빌드 요청 수)를 보고
# 새 빌드를 더 요청하거나 알림만 한다.
exhausted() {
  local why="$1" runs rebuilds
  if [ "$DRY_RUN" = "1" ] && [ -n "${FAKE_HEAD_RUNS:-}" ]; then
    runs="$FAKE_HEAD_RUNS"
  else
    runs=$(gh run list -R "$REPO" -w pages-build-deployment -L 50 --json headSha \
      --jq "[.[] | select(.headSha == \"$sha\")] | length")
  fi
  rebuilds=$(( runs > 0 ? runs - 1 : 0 ))
  echo "이 커밋의 Pages 런 ${runs}개(새 빌드 요청 ${rebuilds}회 · 한도 ${MAX_REBUILDS})"
  if [ "$rebuilds" -ge "$MAX_REBUILDS" ]; then
    notify "$why · 새 빌드 요청 ${rebuilds}회도 다 씀 — 사람이 봐야 함" || { echo "ACTION=notified"; exit 0; }
    echo "ACTION=notify"; exit 0
  fi
  notify "$why · 새 빌드를 요청함 $((rebuilds+1))/${MAX_REBUILDS}" || { echo "ACTION=notified"; exit 0; }
  if [ "$DRY_RUN" = "1" ]; then
    echo "(dry-run) gh api -X POST repos/$REPO/pages/builds"; echo "ACTION=rebuild"; exit 0
  fi
  if gh api -X POST "repos/$REPO/pages/builds" --jq .status; then
    echo "ACTION=rebuild"; exit 0
  fi
  local num; num=$(open_issue)
  [ -n "$num" ] && gh issue comment "$num" -R "$REPO" --body "새 빌드 요청이 거부됨(권한 또는 API 오류) — 사람이 봐야 함. 런: $url"
  echo "ACTION=notify"; exit 0
}

if [ "$status" != "completed" ] && [ "$DRY_RUN" != "1" -o -z "${FAKE_CONCLUSION:-}" ]; then
  echo "진행 중 — 기다린다"; echo "ACTION=none"; exit 0
fi

case "$conclusion" in
  success)
    num=$(open_issue)
    if [ -n "$num" ]; then
      act gh issue close "$num" -R "$REPO" --comment "복구됨: 런 $url 성공(커밋 ${sha:0:7})."
    fi
    echo "ACTION=none"; exit 0 ;;
  failure|cancelled|timed_out|startup_failure) ;;
  *) echo "결론 '$conclusion' — 판단 보류"; echo "ACTION=none"; exit 0 ;;
esac

if [ "$sha" != "$head" ]; then
  echo "실패 런이 main 머리가 아님 — 옛 내용을 다시 배포하지 않는다"; echo "ACTION=skip-stale"; exit 0
fi

if [ "$attempt" -lt "$MAX_ATTEMPTS" ]; then
  if [ "$DRY_RUN" = "1" ]; then
    echo "(dry-run) gh run rerun $id --failed"; echo "ACTION=rerun"; exit 0
  fi
  if gh run rerun "$id" -R "$REPO" --failed || gh run rerun "$id" -R "$REPO"; then
    echo "ACTION=rerun"; exit 0
  fi
  exhausted "자동 재실행이 거부됨(권한 또는 API 오류)"
fi

exhausted "자동 재시도 $((MAX_ATTEMPTS-1))회 뒤에도 실패"
