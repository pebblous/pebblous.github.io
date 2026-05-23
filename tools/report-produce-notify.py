#!/usr/bin/env python3
"""
report-produce --express 종료 알림 — macOS iMessage + Mail.app.

외부 키 없이 osascript로 보낸다. SMS는 iMessage 게이트웨이를 통해 처리되며,
수신 단말이 iPhone/iPad/Mac 중 하나에 iMessage가 켜져 있으면 도달한다.

Usage:
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
    [--phone +82-10-8719-3580] [--email joohaeng@pebblous.ai] \
    [--dry-run]

알림 구성:
  - PR URL: 가장 위 (검토용)
  - Preview URLs: cloudflared 임시 (세션 종료 시 만료)
  - Live URLs: 배포 후 (머지 전에는 미접속, 표시는 유지)

설계 메모:
  - dry-run은 osascript를 실행하지 않고 stdout에 메시지를 출력. CI/유닛 테스트용.
  - osascript 실패 시 stderr에 사유를 남기고 exit 0 (알림 실패가 파이프라인 전체를 죽이지 않도록).
  - 메시지가 너무 길면 iMessage가 잘릴 수 있으므로 본문은 ~600자로 제한.
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
    if meta.get("sections"):
        summary_bits.append(f"{meta['sections']}섹션")
    if meta.get("faqs"):
        summary_bits.append(f"FAQ{meta['faqs']}")
    if meta.get("references"):
        summary_bits.append(f"ref{meta['references']}")
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
        if meta.get("sections"):
            size_bits.append(f"{meta['sections']} 섹션")
        if meta.get("faqs"):
            size_bits.append(f"FAQ {meta['faqs']}")
        if meta.get("references"):
            size_bits.append(f"refs {meta['references']}")
        if size_bits:
            parts.append(f"  Size          : {' / '.join(size_bits)}")
        if meta.get("hub_proposal"):
            parts.append(f"  Hub 제안      : {meta['hub_proposal']}")
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
    p.add_argument("--no-sms", action="store_true")
    p.add_argument("--no-email", action="store_true")
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
        print("=== EMAIL ===")
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

    if not args.no_email:
        rc, msg = run_osascript(applescript_mail(args.email, email_subject, email_body))
        if rc != 0:
            failures.append(f"Mail failed (rc={rc}): {msg}")
        else:
            print(f"[notify] Mail sent to {args.email}")

    if failures:
        for f in failures:
            print(f"[notify][warn] {f}", file=sys.stderr)
    return 0


if __name__ == "__main__":
    sys.exit(main())
