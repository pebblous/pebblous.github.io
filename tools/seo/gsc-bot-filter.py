#!/usr/bin/env python3
"""
GSC Bot-Noise Filter

Estimates the share of GSC impressions likely attributable to bots /
non-human traffic (AI training crawlers, SEO monitoring tools, etc.)
versus real human searches.

Method
------
1. Device-based estimate: Mobile + Tablet CTR is treated as a reasonable
   proxy for "true human CTR". Desktop has the same human CTR; the
   excess desktop impressions over that implied baseline are attributed
   to bots.

2. Query-pattern flags (top-1000 queries only): integer position with
   zero clicks, hash IDs, arxiv IDs, long natural-language strings, etc.

Inputs
------
A GSC Performance export folder containing:
  - Devices.csv
  - Queries.csv (top 1000 only — GSC limit)
  - Pages.csv (optional)

Usage
-----
    python3 tools/seo/gsc-bot-filter.py <export_dir>

Example
-------
    python3 tools/seo/gsc-bot-filter.py \
        "~/Screenshots/2026-05-15 PBLS Blog GSC/https___blog.pebblous.ai_-Performance-on-Search-2026-05-15"
"""

import csv
import re
import sys
from pathlib import Path


HASH_PAT = re.compile(r"[a-f0-9]{16,}", re.I)
ARXIV_PAT = re.compile(r"\b\d{4}\.\d{4,5}\b")
LONG_NUM_PAT = re.compile(r"\d{3,}\.\d+%?")


def is_integer_pos(row):
    try:
        p = float(row["Position"])
        return p == int(p)
    except (KeyError, ValueError):
        return False


def has_bot_query_signal(q):
    if HASH_PAT.search(q):
        return True
    if ARXIV_PAT.search(q):
        return True
    if LONG_NUM_PAT.search(q):
        return True
    if len(q.split()) >= 10:
        return True
    return False


def classify_query(row):
    imp = int(row["Impressions"])
    clk = int(row["Clicks"])
    if is_integer_pos(row) and clk == 0 and imp >= 10:
        return "bot"
    if has_bot_query_signal(row["Top queries"]) and clk == 0:
        return "bot"
    return "human"


def analyze(export_dir):
    export = Path(export_dir).expanduser()
    if not export.exists():
        sys.exit(f"Export dir not found: {export}")

    devices_csv = export / "Devices.csv"
    queries_csv = export / "Queries.csv"

    if not devices_csv.exists():
        sys.exit(f"Devices.csv missing in {export}")
    if not queries_csv.exists():
        sys.exit(f"Queries.csv missing in {export}")

    devices = {}
    with devices_csv.open() as f:
        for r in csv.DictReader(f):
            devices[r["Device"]] = {
                "clicks": int(r["Clicks"]),
                "impressions": int(r["Impressions"]),
                "ctr_pct": float(r["CTR"].rstrip("%")),
                "position": float(r["Position"]),
            }

    total_clk = sum(d["clicks"] for d in devices.values())
    total_imp = sum(d["impressions"] for d in devices.values())
    overall_ctr = total_clk / total_imp * 100 if total_imp else 0

    mobile_imp = devices.get("Mobile", {}).get("impressions", 0)
    mobile_clk = devices.get("Mobile", {}).get("clicks", 0)
    tablet_imp = devices.get("Tablet", {}).get("impressions", 0)
    tablet_clk = devices.get("Tablet", {}).get("clicks", 0)
    desktop_imp = devices.get("Desktop", {}).get("impressions", 0)
    desktop_clk = devices.get("Desktop", {}).get("clicks", 0)

    human_proxy_ctr = (mobile_clk + tablet_clk) / max(mobile_imp + tablet_imp, 1)
    implied_human_desktop_imp = (
        desktop_clk / human_proxy_ctr if human_proxy_ctr > 0 else 0
    )
    implied_bot_desktop_imp = max(desktop_imp - implied_human_desktop_imp, 0)
    est_human_imp = mobile_imp + tablet_imp + implied_human_desktop_imp
    est_bot_imp = implied_bot_desktop_imp
    est_human_ctr = total_clk / max(est_human_imp, 1) * 100

    queries = list(csv.DictReader(queries_csv.open()))
    bot_q = [q for q in queries if classify_query(q) == "bot"]
    human_q = [q for q in queries if classify_query(q) == "human"]
    bot_q_imp = sum(int(q["Impressions"]) for q in bot_q)
    human_q_imp = sum(int(q["Impressions"]) for q in human_q)
    human_q_clk = sum(int(q["Clicks"]) for q in human_q)
    human_q_ctr = human_q_clk / max(human_q_imp, 1) * 100

    print(f"GSC Export: {export.name}")
    print("=" * 70)
    print()
    print("DEVICE SPLIT (full data, all queries)")
    print("-" * 70)
    for name, d in devices.items():
        print(
            f"  {name:8s}  clk={d['clicks']:>5}  imp={d['impressions']:>8,}  "
            f"ctr={d['ctr_pct']:>5.2f}%  pos={d['position']:.2f}"
        )
    print()
    print(f"  Total      clk={total_clk:>5}  imp={total_imp:>8,}  ctr={overall_ctr:>5.2f}%")
    print()

    print("DEVICE-BASED HUMAN/BOT ESTIMATE")
    print("-" * 70)
    print(f"  Human-proxy CTR (Mobile+Tablet):  {human_proxy_ctr*100:.2f}%")
    print(f"  Implied human desktop impressions: {implied_human_desktop_imp:>10,.0f}")
    print(f"  Implied bot desktop impressions:   {implied_bot_desktop_imp:>10,.0f}  "
          f"({implied_bot_desktop_imp/desktop_imp*100:.1f}% of desktop)")
    print()
    print(f"  Estimated TRUE HUMAN impressions:  {est_human_imp:>10,.0f}  "
          f"({est_human_imp/total_imp*100:.1f}% of total)")
    print(f"  Estimated BOT/NOISE impressions:   {est_bot_imp:>10,.0f}  "
          f"({est_bot_imp/total_imp*100:.1f}% of total)")
    print(f"  Estimated TRUE HUMAN CTR:          {est_human_ctr:>5.2f}%   "
          f"(vs raw {overall_ctr:.2f}%)")
    print()

    print("QUERY-PATTERN CHECK (top 1000 queries only)")
    print("-" * 70)
    print(f"  Bot-flagged queries:   {len(bot_q):>4}  imp={bot_q_imp:>6,}  clk=0")
    print(f"  Human-flagged queries: {len(human_q):>4}  imp={human_q_imp:>6,}  "
          f"clk={human_q_clk:>4}  ctr={human_q_ctr:.2f}%")
    print()

    print("TOP 10 BOT-SUSPECT QUERIES")
    print("-" * 70)
    for q in sorted(bot_q, key=lambda x: int(x["Impressions"]), reverse=True)[:10]:
        qry = q["Top queries"]
        if len(qry) > 55:
            qry = qry[:52] + "..."
        print(f"  {qry:55s} imp={q['Impressions']:>4} pos={q['Position']:>6}")
    print()

    return {
        "total_impressions": total_imp,
        "total_clicks": total_clk,
        "raw_ctr_pct": overall_ctr,
        "est_human_impressions": int(est_human_imp),
        "est_bot_impressions": int(est_bot_imp),
        "est_human_ctr_pct": est_human_ctr,
        "bot_share_pct": est_bot_imp / total_imp * 100,
    }


if __name__ == "__main__":
    if len(sys.argv) != 2:
        print(__doc__)
        sys.exit(1)
    analyze(sys.argv[1])
