#!/usr/bin/env bash
# Pages 배포 실패 감시·자동 재시도 (pages-deploy-watch.yml 이 15분마다 실행)
#
# 왜: legacy Pages 배포는 파일 옮기기 단계가 10분을 넘기면 실패한다(배포물 약 2.7GB).
#     다음 발행이 없으면 새 글이 404 로 남는다(2026-11-06 두 글 약 4시간 404).
# 판단(마지막 줄 ACTION=...):
#   none        최신 런 진행 중이거나 성공 — 성공이면 열린 알림 이슈를 닫는다
#   skip-stale  실패 런의 커밋이 지금 main 머리가 아님 — 옛 내용 배포 금지, 새 런을 기다린다
#   rerun       실패 런이 main 머리이고 시도 횟수가 MAX_ATTEMPTS 미만 — 다시 돌린다
#   notify      MAX_ATTEMPTS 를 다 썼거나 재실행이 거부됨 — 알림 이슈를 열거나 댓글
#   notified    같은 런·같은 시도로 이미 알림 — 아무것도 안 함
# 환경변수: REPO(필수) · DRY_RUN=1(바꾸지 않음) · RUN_ID(특정 런 판단)
#           FAKE_HEAD · FAKE_ATTEMPT · FAKE_CONCLUSION(로컬 시험용, DRY_RUN 일 때만)
#           MAX_ATTEMPTS(기본 3) · ASSIGNEE(알림 이슈 담당)
set -euo pipefail

: "${REPO:?REPO 필요}"
DRY_RUN="${DRY_RUN:-0}"
MAX_ATTEMPTS="${MAX_ATTEMPTS:-3}"
ASSIGNEE="${ASSIGNEE:-}"
TITLE_KEY="pages-deploy-watch"
FIELDS=databaseId,status,conclusion,headSha,attempt,createdAt,url

if [ -n "${RUN_ID:-}" ]; then
  run=$(gh run view "$RUN_ID" -R "$REPO" --json "$FIELDS")
else
  run=$(gh run list -R "$REPO" -w pages-build-deployment -L 1 --json "$FIELDS" --jq '.[0]')
fi
[ -n "$run" ] && [ "$run" != "null" ] || { echo "Pages 런을 찾지 못함"; echo "ACTION=none"; exit 0; }

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
      echo "ACTION=notified"; return
    fi
    act gh issue comment "$num" -R "$REPO" --body "$body"
  else
    args=(issue create -R "$REPO" --title "[$TITLE_KEY] 블로그 배포 실패 — 새 글이 404일 수 있음" --body "$body")
    [ -n "$ASSIGNEE" ] && args+=(--assignee "$ASSIGNEE")
    act gh "${args[@]}"
  fi
  echo "ACTION=notify"
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
  notify "자동 재실행이 거부됨(권한 또는 API 오류)"; exit 0
fi

notify "자동 재시도 $((MAX_ATTEMPTS-1))회 뒤에도 실패"
