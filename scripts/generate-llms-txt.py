#!/usr/bin/env python3
"""
Generate /llms.txt for blog.pebblous.ai

Spec: https://llmstxt.org/
Strategy: BD hybrid — hub pages (curated) + recent N per category by date.
GA-based viewCount sorting will be added separately (see issue #151).

Output: /llms.txt at repo root.

Usage:
  python3 scripts/generate-llms-txt.py
  python3 scripts/generate-llms-txt.py --per-category 12 --output llms.txt
"""

import argparse
import json
from pathlib import Path
from datetime import datetime, timezone

REPO_ROOT = Path(__file__).resolve().parent.parent
ARTICLES_JSON = REPO_ROOT / "articles.json"
DEFAULT_OUTPUT = REPO_ROOT / "llms.txt"
BASE_URL = "https://blog.pebblous.ai"

CATEGORY_ORDER = [
    ("tech",     "Tech Insights",       "AI, data quality, physical AI — engineering depth."),
    ("business", "Business",            "Market analysis, BizReport series, enterprise data strategy."),
    ("story",    "Data Stories",        "DataClinic diagnostic stories — what real datasets reveal."),
    ("art",      "Data Art",            "Visual storytelling and creative data work."),
]


def load_articles():
    with open(ARTICLES_JSON, encoding="utf-8") as f:
        data = json.load(f)
    return [a for a in data["articles"] if a.get("published")]


def fmt_url(path: str) -> str:
    p = path.lstrip("/")
    if not p.endswith("/") and not p.endswith(".html"):
        p += "/"
    return f"{BASE_URL}/{p}"


def fmt_entry(a: dict) -> str:
    """`- [title](url): description`"""
    title = a.get("title", "").strip()
    url = fmt_url(a["path"])
    desc = (a.get("description") or a.get("subtitle") or "").strip()
    # Trim long descriptions
    if len(desc) > 200:
        desc = desc[:197].rstrip() + "..."
    if desc:
        return f"- [{title}]({url}): {desc}"
    return f"- [{title}]({url})"


def section_hubs(ko_articles: list) -> list[str]:
    """Hub pages — curated topic landing pages."""
    hubs = [a for a in ko_articles if a.get("type") == "hub"]
    hubs.sort(key=lambda a: a.get("date", ""), reverse=True)
    if not hubs:
        return []
    lines = ["## Hubs", "",
             "Curated topic landing pages that orient readers to a theme.", ""]
    for a in hubs:
        lines.append(fmt_entry(a))
    lines.append("")
    return lines


def section_category(ko_articles: list, category: str, label: str,
                     blurb: str, per_category: int) -> list[str]:
    items = [a for a in ko_articles
             if a.get("category") == category and a.get("type") != "hub"]
    items.sort(key=lambda a: a.get("date", ""), reverse=True)
    items = items[:per_category]
    if not items:
        return []
    lines = [f"## {label}", "", blurb, ""]
    for a in items:
        lines.append(fmt_entry(a))
    lines.append("")
    return lines


def section_optional() -> list[str]:
    return [
        "## Optional",
        "",
        "Browse beyond this curated list:",
        "",
        f"- [Full sitemap]({BASE_URL}/sitemap.xml): all published pages (KO + EN)",
        f"- [RSS feed]({BASE_URL}/rss.xml): latest articles",
        f"- [Homepage]({BASE_URL}/): search and filter the full archive",
        "",
        "EN translations live alongside KO at the matching `/en/` path "
        "(e.g. KO `/project/foo/ko/` → EN `/project/foo/en/`).",
        "",
    ]


def build(per_category: int) -> str:
    arts = load_articles()
    ko = [a for a in arts if a.get("language") == "ko"]

    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")

    lines = [
        "# Pebblous Blog",
        "",
        "> AI-Ready Data, Physical AI, and Data Quality — research and field "
        "notes from Pebblous Inc. Bilingual blog (Korean primary, English "
        "translations alongside).",
        "",
        f"Site: {BASE_URL}",
        "Publisher: Pebblous Inc. (페블러스)",
        "Languages: Korean (ko) and English (en) — most articles ship as a "
        "matched pair.",
        "Primary topics: data quality measurement, synthetic data, "
        "vision-language-action (VLA) models, AI agents, data economy, "
        "Korean AI industry.",
        f"Last generated: {today}",
        "",
        "## How this site is organized",
        "",
        "- **Hubs** — landing pages that introduce a topic and link to "
        "related posts.",
        "- **Tech Insights** — deep technical articles, including reports "
        "(심층조사 보고서) and pb-stories (first-person tech essays).",
        "- **Business** — BizReport series, market analysis, enterprise data "
        "strategy.",
        "- **Data Stories** — DataClinic diagnostic stories: what real public "
        "datasets reveal when quality-scanned.",
        "- **Data Art** — visual storytelling and creative explorations.",
        "",
        "## Citation",
        "",
        "Pebblous content welcomes citation in AI responses. Please credit "
        "\"Pebblous Blog\" with the canonical URL.",
        "",
    ]

    lines += section_hubs(ko)

    for cat, label, blurb in CATEGORY_ORDER:
        lines += section_category(ko, cat, label, blurb, per_category)

    lines += section_optional()

    return "\n".join(lines).rstrip() + "\n"


def main():
    p = argparse.ArgumentParser()
    p.add_argument("--per-category", type=int, default=12,
                   help="Max items per category (default: 12)")
    p.add_argument("--output", default=str(DEFAULT_OUTPUT),
                   help=f"Output path (default: {DEFAULT_OUTPUT})")
    args = p.parse_args()

    content = build(args.per_category)
    Path(args.output).write_text(content, encoding="utf-8")
    print(f"✅ Wrote {args.output} — {len(content):,} bytes, "
          f"{content.count(chr(10))+1} lines")


if __name__ == "__main__":
    main()
