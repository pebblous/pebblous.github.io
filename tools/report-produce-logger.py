#!/usr/bin/env python3
"""
report-produce 파이프라인 단계별 로거.

오케스트레이터가 각 Phase 종료 시 한 번씩 호출한다. 로그는 글과 함께
영구 보관되도록 `report/[slug]/log/`에 저장한다.

저장 위치:
  report/[slug]/log/report-produce-YYYY-MM-DD.jsonl  (기계용 raw, append-only)
  report/[slug]/log/report-produce-YYYY-MM-DD.md     (사람용 요약, finalize 시 생성/갱신)

⛔ 색인 방지 (Option C): articles.json/sitemap에 등록하지 않고, 어떤 페이지에서도
   링크하지 않는다. URL을 직접 알면 접근 가능 — 재현성·투명성 목적.

Usage:
  # Phase 시작
  python3 tools/report-produce-logger.py start \
    --slug korea-ai-fund-2026 \
    --phase 1 \
    --agent report-planner \
    --model opus \
    --mode standard

  # Phase 종료
  python3 tools/report-produce-logger.py end \
    --slug korea-ai-fund-2026 \
    --phase 1 \
    --agent report-planner \
    --status ok \
    --output-path _workspace/report/00_plan.md \
    --notes "페블러스 관심 이유 4축 포함"

  # 자유 형식 노트 (theme adequity 등)
  python3 tools/report-produce-logger.py note \
    --slug korea-ai-fund-2026 \
    --kind adequity \
    --content "value=비추천이지만 --express 모드라 진행함"

  # 실행 요약 .md 생성/갱신
  python3 tools/report-produce-logger.py finalize \
    --slug korea-ai-fund-2026 \
    --topic "한국 AI 펀드 2026" \
    --mode express

설계 메모:
  - start/end는 같은 (phase, agent) 쌍으로 매칭. duration은 finalize 시점에 계산.
  - jsonl의 라인 순서가 곧 실행 순서. 동시 실행(병렬 Phase 2)도 wall-clock 순으로 기록.
  - .md는 jsonl을 다시 읽어서 재생성 — 중복 호출 안전.
"""

import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent


def slug_log_dir(slug: str) -> Path:
    d = REPO_ROOT / "report" / slug / "log"
    d.mkdir(parents=True, exist_ok=True)
    return d


def today_str() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%d")


def now_iso() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def jsonl_path(slug: str, date: str | None = None) -> Path:
    return slug_log_dir(slug) / f"report-produce-{date or today_str()}.jsonl"


def md_path(slug: str, date: str | None = None) -> Path:
    return slug_log_dir(slug) / f"report-produce-{date or today_str()}.md"


def append(slug: str, record: dict, date: str | None = None) -> None:
    record.setdefault("ts", now_iso())
    with jsonl_path(slug, date).open("a", encoding="utf-8") as f:
        f.write(json.dumps(record, ensure_ascii=False) + "\n")


def cmd_start(args) -> None:
    append(args.slug, {
        "event": "phase_start",
        "phase": args.phase,
        "agent": args.agent,
        "model": args.model,
        "mode": args.mode,
    })
    print(f"[logger] phase_start phase={args.phase} agent={args.agent} model={args.model}")


def cmd_end(args) -> None:
    append(args.slug, {
        "event": "phase_end",
        "phase": args.phase,
        "agent": args.agent,
        "status": args.status,
        "output_path": args.output_path,
        "notes": args.notes,
    })
    print(f"[logger] phase_end phase={args.phase} agent={args.agent} status={args.status}")


def cmd_note(args) -> None:
    append(args.slug, {
        "event": "note",
        "kind": args.kind,
        "content": args.content,
    })
    print(f"[logger] note kind={args.kind}")


def _parse_ts(ts: str) -> datetime:
    return datetime.strptime(ts, "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=timezone.utc)


def _duration_seconds(start_ts: str, end_ts: str) -> float:
    return (_parse_ts(end_ts) - _parse_ts(start_ts)).total_seconds()


def _format_duration(seconds: float) -> str:
    if seconds < 60:
        return f"{seconds:.1f}s"
    m, s = divmod(seconds, 60)
    if m < 60:
        return f"{int(m)}m {int(s)}s"
    h, m = divmod(m, 60)
    return f"{int(h)}h {int(m)}m {int(s)}s"


def _read_jsonl(path: Path) -> list[dict]:
    if not path.exists():
        return []
    records = []
    with path.open("r", encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line:
                continue
            records.append(json.loads(line))
    return records


def cmd_finalize(args) -> None:
    """Render the .md summary from the jsonl log of the same date."""
    date = args.date or today_str()
    records = _read_jsonl(jsonl_path(args.slug, date))
    if not records:
        print(f"[logger] no records for {args.slug} on {date}", file=sys.stderr)
        sys.exit(1)

    starts: dict[tuple, dict] = {}
    pairs: list[dict] = []
    notes: list[dict] = []

    for rec in records:
        event = rec.get("event")
        if event == "phase_start":
            key = (rec.get("phase"), rec.get("agent"))
            starts[key] = rec
        elif event == "phase_end":
            key = (rec.get("phase"), rec.get("agent"))
            start = starts.pop(key, None)
            duration = None
            if start:
                try:
                    duration = _duration_seconds(start["ts"], rec["ts"])
                except Exception:
                    duration = None
            pairs.append({
                "phase": rec.get("phase"),
                "agent": rec.get("agent"),
                "model": start.get("model") if start else None,
                "mode": start.get("mode") if start else None,
                "start_ts": start["ts"] if start else None,
                "end_ts": rec["ts"],
                "duration_s": duration,
                "status": rec.get("status"),
                "output_path": rec.get("output_path"),
                "notes": rec.get("notes"),
            })
        elif event == "note":
            notes.append(rec)

    # Unmatched starts (still running or crashed)
    for key, start in starts.items():
        pairs.append({
            "phase": start.get("phase"),
            "agent": start.get("agent"),
            "model": start.get("model"),
            "mode": start.get("mode"),
            "start_ts": start["ts"],
            "end_ts": None,
            "duration_s": None,
            "status": "unfinished",
            "output_path": None,
            "notes": None,
        })

    pairs.sort(key=lambda p: (p["start_ts"] or "", str(p["phase"]) or ""))

    total_duration = sum(p["duration_s"] for p in pairs if p["duration_s"] is not None)
    first_start = min((p["start_ts"] for p in pairs if p["start_ts"]), default=None)
    last_end = max((p["end_ts"] for p in pairs if p["end_ts"]), default=None)

    lines = []
    lines.append(f"# report-produce 실행 로그 — {args.topic or args.slug}")
    lines.append("")
    lines.append(f"- slug: `{args.slug}`")
    lines.append(f"- 실행일: {date}")
    lines.append(f"- 모드: `{args.mode or 'standard'}`")
    if first_start:
        lines.append(f"- 시작: {first_start}")
    if last_end:
        lines.append(f"- 종료: {last_end}")
    lines.append(f"- 총 소요 (단계 합): {_format_duration(total_duration)}")
    lines.append("")
    lines.append("> ⛔ 이 파일은 색인되지 않는다 (articles.json/sitemap 미등록). 재현성·투명성 목적으로 보관.")
    lines.append("")
    lines.append("## 단계별 실행")
    lines.append("")
    lines.append("| Phase | 에이전트 | 모델 | 상태 | 소요 | 산출물 |")
    lines.append("|-------|---------|------|------|------|--------|")
    for p in pairs:
        dur = _format_duration(p["duration_s"]) if p["duration_s"] is not None else "—"
        out = p["output_path"] or "—"
        out_short = out if len(out) < 60 else "…" + out[-57:]
        lines.append(
            f"| {p['phase'] or '—'} | {p['agent'] or '—'} | "
            f"{p['model'] or '—'} | {p['status'] or '—'} | {dur} | `{out_short}` |"
        )
    lines.append("")

    interesting_notes = [p for p in pairs if p.get("notes")]
    if interesting_notes:
        lines.append("## 단계별 노트")
        lines.append("")
        for p in interesting_notes:
            lines.append(f"- **Phase {p['phase']} ({p['agent']})**: {p['notes']}")
        lines.append("")

    if notes:
        lines.append("## 자유 노트 (theme adequity, intervention 등)")
        lines.append("")
        for n in notes:
            kind = n.get("kind", "note")
            lines.append(f"- `{kind}` ({n['ts']}): {n.get('content', '')}")
        lines.append("")

    out_path = md_path(args.slug, date)
    out_path.write_text("\n".join(lines), encoding="utf-8")
    print(f"[logger] wrote {out_path.relative_to(REPO_ROOT)}")


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(description="report-produce phase logger")
    sub = p.add_subparsers(dest="cmd", required=True)

    s = sub.add_parser("start", help="record phase start")
    s.add_argument("--slug", required=True)
    s.add_argument("--phase", required=True)
    s.add_argument("--agent", required=True)
    s.add_argument("--model", default="")
    s.add_argument("--mode", default="standard", help="standard | express")
    s.set_defaults(func=cmd_start)

    e = sub.add_parser("end", help="record phase end")
    e.add_argument("--slug", required=True)
    e.add_argument("--phase", required=True)
    e.add_argument("--agent", required=True)
    e.add_argument("--status", default="ok", help="ok | fail | partial")
    e.add_argument("--output-path", default="")
    e.add_argument("--notes", default="")
    e.set_defaults(func=cmd_end)

    n = sub.add_parser("note", help="record a free-form note (adequity, intervention…)")
    n.add_argument("--slug", required=True)
    n.add_argument("--kind", required=True, help="adequity | intervention | warning | info")
    n.add_argument("--content", required=True)
    n.set_defaults(func=cmd_note)

    f = sub.add_parser("finalize", help="render the .md summary from jsonl")
    f.add_argument("--slug", required=True)
    f.add_argument("--topic", default="")
    f.add_argument("--mode", default="standard")
    f.add_argument("--date", default="", help="YYYY-MM-DD; default today (UTC)")
    f.set_defaults(func=cmd_finalize)

    return p


def main() -> None:
    args = build_parser().parse_args()
    args.func(args)


if __name__ == "__main__":
    main()
