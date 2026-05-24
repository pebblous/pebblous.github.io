---
name: report-produce-express
description: >
  report-produce의 무인 변형(테스트용). 주제만 받고 사용자 개입 0회로
  사전 검토 → 기획 → 병렬 리서치 → 합성 → 작성 → 보강 → 영문화 → SEO/SNS →
  퍼블리싱(PR까지)을 끝낸 뒤 iMessage 즉시 푸시 + Gmail Drafts에 풍부 본문
  draft 생성으로 종료 알림. 미래 MCP 무인 서비스의 베이스라인 검증 트랙.
  **프로덕션 자동화 아님.**
  "report-produce --express", "리포트 무인 실행", "express 모드" 요청 시 사용.
---

# report-produce-express: 무인 심층조사 보고서 파이프라인 (테스트)

## ⚠️ 이 스킬의 위치

이 스킬은 **현재 정책상 production 자동 발행 흐름이 아니다**. JH 개입 0회로
end-to-end 동작 가능성을 측정하기 위한 실험 트랙이며, 미래 MCP 기반 무인 서비스의
참조 구현이다. 사용 시점에는:

- 정지점(⏸) 없음. Pre 가치 평가는 **차단 기준이 아니라 로그 기록**.
- 머지는 자동으로 하지 **않는다** (PR까지). 잘못된 글이 main에 올라가는 비용이
  자동화 이득보다 크다. JH가 PR을 확인하고 머지.
- 알림은 iMessage(`+82-10-8719-3580`) 즉시 푸시 + Gmail Draft(`joohaeng@pebblous.ai`) 풍부 본문.
  Mail.app osascript는 큐 정체 문제로 폴백/디버그용만 (`--legacy-mail`).

## 표준 report-produce와의 차이

| 항목 | 표준 | **express** |
|------|------|------------|
| Phase Pre 후 ⏸ | JH 컨펌 | **자동 진행 (가치/중복 결과를 로그에 기록)** |
| Phase 4.5 ⏸ | JH 콘텐츠 리뷰 | **자동 진행 (자기검토만)** |
| 모델 매핑 | 핵심 노드만 opus | **동일 (하이브리드)** |
| 머지 | 수동 | **PR까지만** (auto-merge 안 함) |
| 종료 알림 | 콘솔 텍스트 | **iMessage + Mail (osascript)** |
| 실패 처리 | JH에게 보고 | **재시도 1회 → 실패면 알림에 명시** |
| 로그 위치 | `_workspace/report/*.md` | **`report/[slug]/log/report-produce-*.{jsonl,md}` (영구, 비색인)** |
| theme adequity | 차단 기준 | **기록 전용** ("비추천이지만 진행" 그대로 로깅) |

## 의존성

- `tools/report-produce-logger.py` — 단계별 로그 (md + jsonl)
- `tools/report-produce-notify.py` — 종료 알림 (iMessage + Mail via osascript)
- `.claude/skills/report-produce/skill.md` — 베이스 파이프라인 정의 (Phase별 에이전트, 모델, 출력)

## 실행 절차

표준 `report-produce/skill.md`의 Phase 0~9를 그대로 따른다. **차이는 정지점 처리,
adequity 기록, 종료 알림 3가지뿐**. 표준 스킬을 변경하면 이 스킬도 자동으로 반영된다.

### 모드 표식

모든 logger 호출에 `--mode express`를 붙인다 — 로그 표제와 raw 레코드에 모드가 남는다.

```bash
python3 tools/report-produce-logger.py start --slug [slug] --phase [n] --agent [name] --model [m] --mode express
```

### Phase Pre 분기 (정지점 제거)

표준 스킬의 "⛔ 반드시 여기서 멈추고 JH 확인을 기다린다" 절을 **무시한다**.
대신 두 에이전트 결과를 읽어 adequity 노트를 logger에 남기고 즉시 Phase 0으로 진입:

```bash
# 둘 다 완료 후
python3 tools/report-produce-logger.py note \
  --slug [slug] --kind adequity \
  --content "coverage=[신규|부분중복|직접중복], value=[강력추천|추천|보류|비추천] — express 모드라 결과 무관하게 진행"
```

가치가 "비추천"이거나 중복이 "직접 중복"이라도 차단하지 않는다. 단,
**아래 두 가지는 예외**(자동으로 abort + 알림):

1. **두 에이전트 모두 응답 없음** — 사전 검토 자체 실패 → topic 입력 오류 가능성
2. **주제 입력이 빈 문자열 / 1단어 이하** — 의미 있는 검색 불가

```bash
# abort 시
python3 tools/report-produce-logger.py note \
  --slug [slug] --kind warning --content "abort: [사유]"
python3 tools/report-produce-logger.py finalize --slug [slug] --topic "[주제]" --mode express
python3 tools/report-produce-notify.py \
  --slug [slug] --topic "[주제]" --status failure --duration "[m s]" \
  --adequity "[사전 검토 사유]"
```

### Phase 4.5 분기 (정지점 제거)

표준 스킬의 "⏸ Phase 4 초고 완성 후 반드시 멈추고 JH 리뷰" 절을 **무시한다**.
Phase 5-A 자기검토만 실행하고 위반은 직접 수정 후 Phase 5-B로 진행:

```bash
python3 tools/report-produce-logger.py note \
  --slug [slug] --kind info \
  --content "Phase 4.5 자동 진행 — JH 리뷰 생략 (express)"
```

### Phase 5 분기 — Skip 정책 강화 (express에서 특히 중요)

JH가 없는 무인 모드이므로 5-B/5-C/5-D를 자의적 판단으로 skip하는 사고가 자주 났다 (예: ICLR run에서 "본문 충분히 풍부함"으로 5-B/5-C 둘 다 skip → image-reinforce/bibliography 누락). 베이스 스킬의 객관 skip 기준을 그대로 따르되 express에서는 다음을 추가:

| 서브단계 | express에서의 호출 의무 |
|---------|-----------------------|
| 5-A | 항상 |
| 5-B text-reinforce | 항상 호출. "충분히 풍부하다"는 표현 금지 — 호출 결과가 0개 보강이어도 호출은 한다 |
| 5-C image-reinforce | 항상 호출 + 주제 매칭 우선 모드. 본문 이미지 < 4 이면 무조건 보강. 단순 추상 다이어그램으로만 채우면 미완료 |
| 5-D bibliography | references ≥ 4면 무조건. references.json SSOT 생성 + BibTeX/RIS 버튼 + Scholar 메타 (KO+EN 양쪽). express의 거의 모든 보고서가 학술 인용 4개 이상이므로 사실상 항상 호출 |

→ logger note에 skip 사유를 적을 때 "충분히 풍부하다 / 이미 잘 돼있다" 같은 주관어 사용 금지. 객관 조건 (`references<4`, `images>=4 with topic match`) 만 인용.

### Phase 8 — PR까지만

표준 스킬의 blog-publisher가 push + PR 생성까지 한다. `gh pr merge` 호출 **금지**.
PR URL을 `_workspace/report/_express_pr_url.txt`(또는 `04_publish_meta.json`)에 저장한다.

### Phase 8.5 — Preview tunnel 발급 (express 전용)

⛔ **PR이 생성된 직후, Phase 9 알림 전에** cloudflared Quick Tunnel을 띄워 임시 공개 URL을 발급한다. 라이브 배포 전이라도 사용자가 모바일/원격에서 즉시 검토할 수 있게 한다.

```bash
# 1) Worktree(또는 publish 작업 디렉토리)에서 로컬 HTTP 서버
cd <worktree-root>
python3 -m http.server 8000 > /tmp/pebblous-http.log 2>&1 &

# 2) cloudflared (Quick Tunnel — 계정 불필요)
cloudflared tunnel --url http://localhost:8000 > /tmp/pebblous-cf.log 2>&1 &

# 3) URL 추출 (등록 완료까지 대기)
until grep -q "trycloudflare.com" /tmp/pebblous-cf.log 2>/dev/null; do sleep 2; done
BASE_URL=$(grep -oE "https://[a-z0-9-]+\.trycloudflare\.com" /tmp/pebblous-cf.log | head -1)
PREVIEW_KO="$BASE_URL/report/[slug]/ko/"
PREVIEW_EN="$BASE_URL/report/[slug]/en/"

# 4) 도달 검증 (DNS propagation 대기 후)
sleep 5
curl -s -o /dev/null -w "KO=%{http_code} EN=%{http_code}\n" --max-time 15 "$PREVIEW_KO" "$PREVIEW_EN"
# 200/200 미달 시 nslookup으로 IP 조회 후 --resolve로 재시도

# 5) logger에 기록 (영구 보관)
python3 tools/report-produce-logger.py note --slug [slug] --kind info \
  --content "Preview: KO=$PREVIEW_KO  EN=$PREVIEW_EN  (cloudflared, 세션 종료 시 만료)"
```

**주의**:
- Quick Tunnel은 영속성 없음 (세션 종료/cloudflared kill 시 만료) — 알림에도 "임시" 표기.
- 8000 포트 충돌 시: `lsof -ti :8000 | xargs kill` 후 재시작.
- worktree에 node_modules가 없으면 OG 생성 등 부수 작업이 실패할 수 있음 — 메인 repo의 `node_modules`를 symlink하면 됨.
- Preview tunnel 프로세스는 알림 발송 후에도 유지 (사용자가 링크를 클릭할 동안 살아있어야 함). 세션 끝낼 때 `pkill -f "cloudflared tunnel"` + `pkill -f "http.server 8000"` 정리.

### Phase 9 — 종료 알림 (Plan A: iMessage Python + Gmail Draft MCP)

**채널 분리 (2026-05-23 전환)**:
- **iMessage**: `report-produce-notify.py`가 osascript로 직접 발송. 즉시 푸시. 한 손에 잡히는 요약.
- **Gmail Draft**: `report-produce-notify.py`가 JSON payload를 파일로 출력. Claude 세션이 그 파일을 읽고 `mcp__claude_ai_Gmail__create_draft` 도구로 Drafts에 풍부 본문 draft 생성. Mail.app 큐 정체 회피.

⛔ **Mail.app osascript 경로(`--legacy-mail`)는 폴백/디버그용만**. 큐 정체 문제로 운영 채널에서 제외.

#### 단계

```bash
# 모든 URL/메타 변수화
PR_URL=$(cat _workspace/report/_express_pr_url.txt 2>/dev/null || gh pr view --json url -q .url)
PREVIEW_KO="$BASE_URL/report/[slug]/ko/"     # Phase 8.5에서 발급
PREVIEW_EN="$BASE_URL/report/[slug]/en/"     # Phase 8.5에서 발급
LIVE_KO="https://blog.pebblous.ai/report/[slug]/ko/"
LIVE_EN="https://blog.pebblous.ai/report/[slug]/en/"
DURATION=$(...)   # logger md 또는 wall-clock

# (1) iMessage 발송 + 이메일 payload 출력
python3 tools/report-produce-notify.py \
  --slug [slug] \
  --topic "[주제]" \
  --status success \
  --duration "$DURATION" \
  --pr-url "$PR_URL" \
  --preview-ko-url "$PREVIEW_KO" \
  --preview-en-url "$PREVIEW_EN" \
  --ko-url "$LIVE_KO" \
  --en-url "$LIVE_EN" \
  --adequity "[Pre note 요약 한 줄]" \
  --log-md "report/[slug]/log/report-produce-$(date +%Y-%m-%d).md" \
  --meta "_workspace/report/04_write_meta.json" \
  --emit-email-payload "_workspace/report/_notify_email.json"
# 결과:
#   - iMessage 발송 완료 (즉시)
#   - _workspace/report/_notify_email.json 생성 (to / subject / body)
```

```python
# (2) Claude 세션이 payload를 읽고 Gmail MCP draft 생성
# (스킬을 실행하는 Claude 세션 안에서 직접 호출)
import json
payload = json.loads(open("_workspace/report/_notify_email.json").read())

# 도구 호출 (오케스트레이터가 직접 부른다):
# mcp__claude_ai_Gmail__create_draft(
#   to=payload["to"],
#   subject=payload["subject"],
#   body=payload["body"],
# )
```

```bash
# (3) logger에 채널 결과 기록
python3 tools/report-produce-logger.py note --slug [slug] --kind info \
  --content "Phase 9: iMessage 발송 OK / Gmail Draft 생성 OK (id=[draft_id])"
```

#### 채널별 콘텐츠

**iMessage (~600자, 즉시 푸시)**:
- 상태 + 주제
- 한 줄 요약 (KO N자 · M섹션 · FAQ X · ref Y)
- 소요시간
- PR / Preview KO / Preview EN
- adequity

**Gmail Draft (Drafts 폴더에 영구 보관)**:
- 모든 메타 (KO/EN 제목, subtitle, category, 분량, hub)
- 모든 링크 (PR + Preview KO/EN + Live KO/EN)
- adequity
- 단계별 실행 표 (Phase별 model/status/duration/output)
- 단계별 노트 (각 Phase 핵심 발견)
- 자유 노트 (warning/info — 수치 보정, fabrication 위험 경고 등)
- 로그 위치 안내

#### 옛 인자/모드 호환

`--log-md` + `--meta`는 여전히 필수 (payload body 풍부도 결정).
`--legacy-mail`: Gmail MCP 사용 불가한 환경에서만. 큐 정체 위험 있음.
`--preview-url` 단일 인자: KO/EN 구분 없이 한 링크만 보낼 때.

### 실패 시 알림

Phase 1~8 중 어느 단계라도 실패하면:

1. 해당 Phase logger를 `--status fail`로 종료
2. 재시도 1회 (모델·프롬프트 동일, 결과 다를 확률에 베팅)
3. 재시도도 실패면 즉시 finalize + 실패 알림:

```bash
python3 tools/report-produce-notify.py \
  --slug [slug] \
  --topic "[주제]" \
  --status failure \
  --duration "[지금까지 소요]" \
  --adequity "실패 단계: Phase [n] / 에이전트 [name] / 사유 [한 줄]" \
  --emit-email-payload "_workspace/report/_notify_email.json"
# 이어서 Claude 세션이 payload를 읽고 mcp__claude_ai_Gmail__create_draft 호출 (성공/실패 동일 흐름)
```

부분 완료(KO만 되고 EN 실패 등)는 `--status partial`로 보낸다.

## 옵션 (호출 시 표기)

```
report-produce --express "주제"                 # 기본
report-produce --express --skip-en "주제"       # KO만 (Phase 6 건너뜀)
report-produce --express --no-notify "주제"     # 알림 생략 (테스트용)
```

`--auto-merge` 옵션은 **의도적으로 제외**. 자동 머지가 필요하면 별도 검토 후 추가.

## 테스트 절차 (스킬 변경 후)

1. 알림 dry-run: `python3 tools/report-produce-notify.py --slug test --topic "테스트" --status success --duration "1s" --dry-run`
2. 로그 흐름: 가짜 slug로 `start → end → note → finalize` 한 번 돌려 `.md`/`.jsonl` 양쪽 생성 확인
3. 실제 주제 1편으로 end-to-end 실행 — 첫 실행은 JH가 옆에서 모니터링
4. 로그 디렉토리가 articles.json / sitemap에 등록되지 않았는지 확인 (`grep -r 'log/report-produce' articles.json sitemap.xml` → 0)

## 미해결 (다음 라운드)

- 알림이 GitHub Pages 빌드 실패까지 추적 가능? 현재는 push 직후 발송하므로 빌드 결과 미반영
- `--auto-merge`를 도입할지: 무인 서비스라면 결국 필요. 안전장치(seo-check 100점, 자기검토 위반 0)와 묶어서.
- jsonl을 외부 분석으로 보내는 파이프 (BigQuery, Sheets) — MCP 서비스 학습 데이터 소스
