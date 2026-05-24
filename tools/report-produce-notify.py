#!/usr/bin/env python3
"""
report-produce --express 종료 알림.

설계 (Plan A — 2026-05-23 전환):
  - iMessage: 이 스크립트가 osascript로 직접 발송 (~600자, 한 손에 잡히는 요약)
  - Email   : 이 스크립트는 **payload만 stdout으로 출력**, 실제 발송은
              호출자(Claude 세션)가 Gmail MCP `create_draft`로 처리.
              Mail.app outgoing 큐 정체 회피 + 풍부 본문 + Drafts 영구 보관.

iMessage가 잘 동작하고 즉시 도달성이 좋으므로 SMS는 push 채널.
Gmail Draft는 검색/아카이브 + 풍부 본문 + 단계별 표를 담는 영구 기록 채널.

Usage (iMessage 발송 + 이메일 payload 출력):
  python3 tools/report-produce-notify.py \
    --slug korea-ai-fund-2026 \
    --topic "한국 AI 펀드 2026" \
    --pr-url "https://github.com/.../pull/123" \
    --preview-ko-url "https://xxx.trycloudflare.com/report/.../ko/" \
    --preview-en-url "https://xxx.trycloudflare.com/report/.../en/" \
    --ko-url  "https://blog.pebblous.ai/report/.../ko/" \
    --en-url  "https://blog.pebblous.ai/report/.../en/" \
    --duration "32m 14s" \
    --status   "success" \
    --adequity "value=추천, coverage=신규" \
    --log-md   "report/[slug]/log/report-produce-YYYY-MM-DD.md" \
    --meta     "_workspace/report/04_write_meta.json" \
    --emit-email-payload _workspace/report/_notify_email.json
  # → iMessage 발송 + _notify_email.json에 {to, subject, body} 저장
  # → Claude가 그 JSON을 읽어 mcp__claude_ai_Gmail__create_draft 호출

옵션:
  --no-sms             iMessage 발송 생략
  --dry-run            아무것도 발송하지 않고 stdout에 모든 본문 출력
  --legacy-mail        (deprecated) Mail.app osascript로 발송. 정체 가능성.
"""

import argparse
import json
import subprocess
import sys
from pathlib import Path


DEFAULT_PHONE = "+82-10-8719-3580"
DEFAULT_EMAIL = "joohaeng@pebblous.ai"


def _read_text(path: str) -> str:
    if not path:
        return ""
    try:
        return Path(path).read_text(encoding="utf-8")
    except (OSError, UnicodeDecodeError):
        return ""


def _read_json(path: str) -> dict:
    if not path:
        return {}
    try:
        return json.loads(Path(path).read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError, UnicodeDecodeError):
        return {}


def _count_or_value(v):
    """meta 필드 값 정규화 — dict/list면 의미 있는 정수, scalar면 그대로."""
    if v is None:
        return None
    if isinstance(v, list):
        return len(v)
    if isinstance(v, dict):
        # references 같은 카테고리 dict: total 우선, 없으면 모든 _count 합산, 없으면 len(keys)
        if "total" in v:
            return v["total"]
        counts = [val for key, val in v.items() if key.endswith("_count") and isinstance(val, int)]
        if counts:
            return sum(counts)
        return len(v)
    return v  # int / str 그대로


def _hub_name(v):
    """hub_proposal — dict면 name key, 문자열이면 그대로."""
    if v is None:
        return None
    if isinstance(v, dict):
        return v.get("name") or v.get("slug_candidate") or "(hub 제안)"
    return str(v)


def _section_count(v):
    """sections — list면 길이, 정수면 그대로."""
    if v is None:
        return None
    if isinstance(v, list):
        return len(v)
    if isinstance(v, dict):
        return v.get("total", len(v))
    return v


def build_sms(args, meta: dict) -> str:
    """SMS는 ~600자 — 한 손에 잡히는 핵심만."""
    lines = [
        f"[report-produce/express] {args.status.upper()}",
        f"주제: {args.topic}",
    ]
    summary_bits = []
    if meta.get("wordCount"):
        summary_bits.append(f"KO {meta['wordCount']:,}자")
    if meta.get("en_wordCount"):
        summary_bits.append(f"EN {meta['en_wordCount']:,}w")
    sec = _section_count(meta.get("sections"))
    if sec:
        summary_bits.append(f"{sec}섹션")
    faq = _count_or_value(meta.get("faqs"))
    if faq:
        summary_bits.append(f"FAQ{faq}")
    ref = _count_or_value(meta.get("references"))
    if ref:
        summary_bits.append(f"ref{ref}")
    if summary_bits:
        lines.append(" · ".join(summary_bits))
    lines.append(f"소요: {args.duration}")
    if args.pr_url:
        lines.append(f"PR: {args.pr_url}")
    if args.preview_url:
        lines.append(f"Preview: {args.preview_url}")
    elif args.preview_ko_url or args.preview_en_url:
        if args.preview_ko_url:
            lines.append(f"Preview KO: {args.preview_ko_url}")
        if args.preview_en_url:
            lines.append(f"Preview EN: {args.preview_en_url}")
    if args.adequity:
        lines.append(f"adequity: {args.adequity}")
    body = "\n".join(lines)
    return body[:600]


def _extract_log_section(log_md: str, header_keyword: str) -> str:
    """log .md에서 특정 ## 헤더 아래 내용을 추출 (다음 ## 직전까지)."""
    if not log_md:
        return ""
    lines = log_md.split("\n")
    out, in_section = [], False
    for line in lines:
        if line.startswith("## "):
            if in_section:
                break
            if header_keyword in line:
                in_section = True
                continue
        if in_section:
            out.append(line)
    return "\n".join(out).strip()


def build_email_body(args, meta: dict, log_md: str) -> str:
    """Mail은 풍부하게 — log + meta + 모든 링크."""
    parts = []
    parts.append("=" * 60)
    parts.append(f"report-produce --express  /  {args.status.upper()}")
    parts.append("=" * 60)
    parts.append("")
    parts.append(f"주제      : {args.topic}")
    parts.append(f"slug      : {args.slug}")
    if meta.get("publishDate"):
        parts.append(f"실행일    : {meta['publishDate']}")
    parts.append(f"총 소요   : {args.duration}")
    parts.append("")

    if meta:
        parts.append("─ 보고서 메타 ─")
        if meta.get("mainTitle"):
            parts.append(f"  Title (KO)    : {meta['mainTitle']}")
        if meta.get("en_mainTitle"):
            parts.append(f"  Title (EN)    : {meta['en_mainTitle']}")
        if meta.get("subtitle"):
            parts.append(f"  Subtitle      : {meta['subtitle']}")
        if meta.get("category"):
            parts.append(f"  Category      : {meta['category']}")
        size_bits = []
        if meta.get("wordCount"):
            size_bits.append(f"KO {meta['wordCount']:,}자")
        if meta.get("en_wordCount"):
            size_bits.append(f"EN {meta['en_wordCount']:,} words")
        sec = _section_count(meta.get("sections"))
        if sec:
            size_bits.append(f"{sec} 섹션")
        faq = _count_or_value(meta.get("faqs"))
        if faq:
            size_bits.append(f"FAQ {faq}")
        ref = _count_or_value(meta.get("references"))
        if ref:
            size_bits.append(f"refs {ref}")
        if size_bits:
            parts.append(f"  Size          : {' / '.join(size_bits)}")
        hub = _hub_name(meta.get("hub_proposal"))
        if hub:
            parts.append(f"  Hub 제안      : {hub}")
        parts.append("")

    parts.append("─ 링크 ─")
    parts.append(f"  PR        : {args.pr_url or '(없음)'}")
    if args.preview_url or args.preview_ko_url or args.preview_en_url:
        parts.append("  Preview (cloudflared 임시 — 세션 종료 시 만료):")
        if args.preview_ko_url:
            parts.append(f"    KO      : {args.preview_ko_url}")
        if args.preview_en_url:
            parts.append(f"    EN      : {args.preview_en_url}")
        if args.preview_url and not (args.preview_ko_url or args.preview_en_url):
            parts.append(f"    URL     : {args.preview_url}")
    parts.append("  Live (배포 후 — 머지 전에는 미접속):")
    parts.append(f"    KO      : {args.ko_url or '(없음)'}")
    parts.append(f"    EN      : {args.en_url or '(없음)'}")
    parts.append("")

    if args.adequity:
        parts.append("─ Theme adequity (기록 전용, 차단 아님) ─")
        parts.append(f"  {args.adequity}")
        parts.append("")

    phase_table = _extract_log_section(log_md, "단계별 실행")
    if phase_table:
        parts.append("─ 단계별 실행 ─")
        parts.append(phase_table)
        parts.append("")

    phase_notes = _extract_log_section(log_md, "단계별 노트")
    if phase_notes:
        parts.append("─ 단계별 노트 ─")
        parts.append(phase_notes)
        parts.append("")

    free_notes = _extract_log_section(log_md, "자유 노트")
    if free_notes:
        parts.append("─ 자유 노트 (warning / info) ─")
        parts.append(free_notes)
        parts.append("")

    parts.append("─ 로그 위치 ─")
    parts.append(f"  report/{args.slug}/log/report-produce-*.md (색인 안 됨)")
    parts.append("")
    parts.append("— Claude (report-produce-express)")
    return "\n".join(parts)


def applescript_imessage(phone: str, body: str) -> str:
    body_q = body.replace('\\', '\\\\').replace('"', '\\"')
    phone_q = phone.replace('"', '\\"')
    return (
        f'tell application "Messages"\n'
        f'  set targetService to id of 1st service whose service type = iMessage\n'
        f'  set targetBuddy to buddy "{phone_q}" of service id targetService\n'
        f'  send "{body_q}" to targetBuddy\n'
        f'end tell'
    )


def applescript_mail(to: str, subject: str, body: str) -> str:
    body_q = body.replace('\\', '\\\\').replace('"', '\\"')
    to_q = to.replace('"', '\\"')
    subject_q = subject.replace('"', '\\"')
    return (
        f'tell application "Mail"\n'
        f'  activate\n'
        f'  set newMessage to make new outgoing message with properties '
        f'{{subject:"{subject_q}", content:"{body_q}", visible:false}}\n'
        f'  tell newMessage\n'
        f'    make new to recipient at end of to recipients with properties {{address:"{to_q}"}}\n'
        f'    send\n'
        f'  end tell\n'
        f'end tell'
    )


def run_osascript(script: str) -> tuple[int, str]:
    try:
        result = subprocess.run(
            ["osascript", "-e", script],
            capture_output=True,
            text=True,
            timeout=30,
        )
        return result.returncode, (result.stderr or result.stdout or "").strip()
    except FileNotFoundError:
        return 127, "osascript not found (non-macOS environment?)"
    except subprocess.TimeoutExpired:
        return 124, "osascript timed out (30s)"


def main() -> int:
    p = argparse.ArgumentParser()
    p.add_argument("--slug", required=True)
    p.add_argument("--topic", required=True)
    p.add_argument("--status", default="success", help="success | failure | partial")
    p.add_argument("--duration", default="—")
    p.add_argument("--ko-url", default="", help="라이브 KO URL (머지 후 도달 가능)")
    p.add_argument("--en-url", default="", help="라이브 EN URL (머지 후 도달 가능)")
    p.add_argument("--pr-url", default="", help="GitHub PR URL")
    p.add_argument("--preview-url", default="", help="단일 cloudflared preview URL (KO/EN 구분 없이)")
    p.add_argument("--preview-ko-url", default="", help="cloudflared preview KO URL")
    p.add_argument("--preview-en-url", default="", help="cloudflared preview EN URL")
    p.add_argument("--adequity", default="")
    p.add_argument("--log-md", default="", help="실행 로그 .md 경로 (단계별 표·노트를 Mail에 포함)")
    p.add_argument("--meta", default="", help="write_meta.json 경로 (제목/분량/섹션 등 메타)")
    p.add_argument("--phone", default=DEFAULT_PHONE)
    p.add_argument("--email", default=DEFAULT_EMAIL)
    p.add_argument("--no-sms", action="store_true", help="iMessage 발송 생략")
    p.add_argument("--emit-email-payload", default="",
                   help="이메일 payload(JSON)를 이 경로에 저장. Claude 세션이 Gmail MCP로 발송.")
    p.add_argument("--legacy-mail", action="store_true",
                   help="(deprecated) Mail.app osascript로 발송. 큐 정체 가능성 있음. Gmail MCP 권장.")
    p.add_argument("--dry-run", action="store_true")
    args = p.parse_args()

    meta = _read_json(args.meta)
    log_md = _read_text(args.log_md)

    sms_body = build_sms(args, meta)
    email_subject = f"[report-produce/express] {args.status.upper()} — {args.topic}"
    email_body = build_email_body(args, meta, log_md)

    if args.dry_run:
        print("=== SMS (iMessage) ===")
        print(f"to: {args.phone}")
        print(sms_body)
        print()
        print("=== EMAIL (payload — Claude가 Gmail MCP로 발송) ===")
        print(f"to: {args.email}")
        print(f"subject: {email_subject}")
        print(email_body)
        return 0

    failures: list[str] = []

    if not args.no_sms:
        rc, msg = run_osascript(applescript_imessage(args.phone, sms_body))
        if rc != 0:
            failures.append(f"iMessage failed (rc={rc}): {msg}")
        else:
            print(f"[notify] iMessage sent to {args.phone}")

    # 이메일 payload — Claude 세션이 읽고 Gmail MCP로 발송할 JSON.
    if args.emit_email_payload:
        payload = {
            "to": [args.email],
            "subject": email_subject,
            "body": email_body,
        }
        try:
            Path(args.emit_email_payload).write_text(
                json.dumps(payload, ensure_ascii=False, indent=2),
                encoding="utf-8",
            )
            print(f"[notify] email payload → {args.emit_email_payload}")
            print(f"[notify] 다음 단계: Claude 세션에서 이 JSON을 읽어 "
                  f"mcp__claude_ai_Gmail__create_draft 호출")
        except OSError as e:
            failures.append(f"email payload write failed: {e}")

    # Legacy: Mail.app osascript (큐 정체 가능성 — 폴백/디버그용)
    if args.legacy_mail:
        rc, msg = run_osascript(applescript_mail(args.email, email_subject, email_body))
        if rc != 0:
            failures.append(f"Mail (legacy) failed (rc={rc}): {msg}")
        else:
            print(f"[notify] Mail (legacy, osascript) sent to {args.email}")

    if failures:
        for f in failures:
            print(f"[notify][warn] {f}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
