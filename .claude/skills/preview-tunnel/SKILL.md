---
name: preview-tunnel
description: 로컬 변경분을 외부 공개 URL로 노출 — Cloudflare Quick Tunnel로 모바일/원격 리뷰용 임시 프리뷰 링크 발급. "프리뷰 링크", "preview", "/preview" 요청 시 사용.
argument-hint: "[ko | en | <article-path>]"
---

## Overview

로컬 작업물(미커밋 또는 feature branch)을 외부에서 접근 가능한 공개 URL로 노출하는 스킬. `python3 http.server` + `cloudflared tunnel`을 사용하여 즉시 발급되는 Quick Tunnel URL을 생성한다.

**언제 사용:**
- 사용자가 "프리뷰 링크", "preview", "/preview" 등으로 요청할 때
- 블로그/리포트 초고를 사람·다른 에이전트가 모바일/원격에서 검토해야 할 때
- `report-produce`, `dc-story-produce` 등 파이프라인의 사람 검토 단계
- main 브랜치 머지 전에 실제 렌더링 확인이 필요할 때

**왜 필요한가:**
이 블로그 레포는 MCP로 노출되어 다른 에이전트들이 사용한다. 로컬 미리보기(localhost)만으로는 그들이 접근 불가능하므로, 임시 공개 URL이 필요하다. 모바일 디바이스에서 실제 렌더링을 확인하기 위해서도 마찬가지다.

## 사전 조건

```bash
which cloudflared || brew install cloudflared
```
- macOS: `/opt/homebrew/bin/cloudflared` (brew install)
- Linux/CI: 바이너리 다운로드 (이슈 #122 참조)

## 인자 처리

| 인자 | 동작 |
|------|------|
| (없음) | 루트 URL만 발급 |
| `ko` | `<base-url>/<current-article-path>/ko/` 형태로 KO 페이지 직접 링크 |
| `en` | `<base-url>/<current-article-path>/en/` 형태로 EN 페이지 직접 링크 |
| `<path>` | 임의 경로(`report/foo/ko/`)를 base-url에 붙인 직접 링크 |

`ko`/`en` 사용 시 현재 작업 중인 아티클 경로를 컨텍스트에서 추론한다. 추론 실패하면 사용자에게 경로를 물어본다.

## 표준 절차

```bash
# 1) 레포 루트에서 로컬 HTTP 서버 (포트 8000)
cd "$(git rev-parse --show-toplevel)"
python3 -m http.server 8000 > /tmp/pebblous-http.log 2>&1 &

# 2) cloudflared 터널 (백그라운드 + 로그 캡처)
cloudflared tunnel --url http://localhost:8000 > /tmp/pebblous-cf.log 2>&1 &

# 3) URL 추출 (터널이 준비될 때까지 대기 후 grep)
until grep -q "trycloudflare.com" /tmp/pebblous-cf.log 2>/dev/null; do sleep 2; done
BASE_URL=$(grep -oE "https://[a-z0-9-]+\.trycloudflare\.com" /tmp/pebblous-cf.log | head -1)
echo "$BASE_URL"
```

`ko`/`en`/`<path>` 인자가 있으면 `$BASE_URL` 뒤에 경로를 붙여서 사용자에게 전달.

## 검증

```bash
URL="$BASE_URL/<article-path>/ko/"
curl -s -o /dev/null -w "%{http_code}\n" "$URL"
```

HTTP 200이 나오면 정상. 404면 경로 또는 로컬 파일 누락 확인.

## 정리

세션 종료 또는 사용자가 "프리뷰 종료" 요청 시:

```bash
pkill -f "cloudflared tunnel"
pkill -f "http.server 8000"
rm -f /tmp/pebblous-http.log /tmp/pebblous-cf.log
```

## 메모

- **Quick Tunnel URL은 매번 새로 발급되며 영속성 없음** — 세션 종료 시 사라짐
- `*.trycloudflare.com` 도메인은 인증 없이 즉시 사용 가능 (계정 불필요, 무료)
- 업타임 보장 없음 — 프로덕션 용도 아님, 리뷰 전용
- 민감한 콘텐츠(IR 자료 등) 공개 전 주의 — 초고가 일시적으로 공개됨
- 8000번 포트 충돌 시: 기존 프로세스 종료 후 재시작 (`lsof -i:8000` 확인)

## 호출 패턴 예시

```
사용자: 프리뷰 링크 줘
→ 스킬 실행: 루트 URL만 발급

사용자: /preview ko
→ 스킬 실행: 현재 작업 중인 아티클의 KO URL 직접 발급

사용자: /preview report/multiagent-industrial-data-operations/ko/
→ 스킬 실행: 해당 경로 URL 직접 발급
```

## 관련 이슈

- 이슈 #122: 본 스킬의 원본 요구사항
- 이슈 #88: Wiki/블로그 브랜치 워크플로우 + Preview Deploy (장기적으로 GitHub Pages preview env로 대체 가능)
