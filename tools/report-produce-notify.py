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
    --ko-url  "https://blog.pebblous.ai/report/.../ko/" \
    --en-url  "https://blog.pebblous.ai/report/.../en/" \
    --duration "32m 14s" \
    --status   "success" \
    --adequity "value=추천, coverage=신규" \
    [--phone +82-10-8719-3580] [--email joohaeng@pebblous.ai] \
    [--dry-run]

설계 메모:
  - dry-run은 osascript를 실행하지 않고 stdout에 메시지를 출력. CI/유닛 테스트용.
  - osascript 실패 시 stderr에 사유를 남기고 exit 0 (알림 실패가 파이프라인 전체를 죽이지 않도록).
  - 메시지가 너무 길면 iMessage가 잘릴 수 있으므로 본문은 ~600자로 제한.
"""

import argparse
import subprocess
import sys
import textwrap


DEFAULT_PHONE = "+82-10-8719-3580"
DEFAULT_EMAIL = "joohaeng@pebblous.ai"


def build_sms(args) -> str:
    lines = [
        f"[report-produce/express] {args.status.upper()}",
        f"주제: {args.topic}",
        f"소요: {args.duration}",
    ]
    if args.ko_url:
        lines.append(f"KO: {args.ko_url}")
    if args.en_url:
        lines.append(f"EN: {args.en_url}")
    if args.pr_url:
        lines.append(f"PR: {args.pr_url}")
    if args.adequity:
        lines.append(f"adequity: {args.adequity}")
    body = "\n".join(lines)
    return body[:600]


def build_email_body(args) -> str:
    return textwrap.dedent(f"""\
        report-produce --express 실행 종료

        상태: {args.status}
        주제: {args.topic}
        slug: {args.slug}
        소요: {args.duration}

        KO: {args.ko_url or '(없음)'}
        EN: {args.en_url or '(없음)'}
        PR: {args.pr_url or '(없음)'}

        Theme adequity (참고용 기록, 차단 아님):
          {args.adequity or '(기록 없음)'}

        실행 로그: report/{args.slug}/log/report-produce-*.md (색인 안 됨)

        — Claude (report-produce-express)
    """)


def applescript_imessage(phone: str, body: str) -> str:
    body_q = body.replace('\\', '\\\\').replace('"', '\\"')
    phone_q = phone.replace('"', '\\"')
    return (
        f'tell application "Messages"\n'
        f'  set targetService to 1st account whose service type = iMessage\n'
        f'  set targetBuddy to participant "{phone_q}" of targetService\n'
        f'  send "{body_q}" to targetBuddy\n'
        f'end tell'
    )


def applescript_mail(to: str, subject: str, body: str) -> str:
    body_q = body.replace('\\', '\\\\').replace('"', '\\"')
    to_q = to.replace('"', '\\"')
    subject_q = subject.replace('"', '\\"')
    return (
        f'tell application "Mail"\n'
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
    p.add_argument("--ko-url", default="")
    p.add_argument("--en-url", default="")
    p.add_argument("--pr-url", default="")
    p.add_argument("--adequity", default="")
    p.add_argument("--phone", default=DEFAULT_PHONE)
    p.add_argument("--email", default=DEFAULT_EMAIL)
    p.add_argument("--no-sms", action="store_true")
    p.add_argument("--no-email", action="store_true")
    p.add_argument("--dry-run", action="store_true")
    args = p.parse_args()

    sms_body = build_sms(args)
    email_subject = f"[report-produce/express] {args.status.upper()} — {args.topic}"
    email_body = build_email_body(args)

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
