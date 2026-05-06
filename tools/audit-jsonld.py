#!/usr/bin/env python3
"""
Audit JSON-LD schema coverage across all published articles.

Reads articles.json, opens each article's HTML file, checks for:
  - Article/TechArticle/BlogPosting JSON-LD in <head>
  - BreadcrumbList (auto-injected by PebblousPage — usually fine)
  - FAQPage (config.faqs presence)

Outputs:
  - tools/jsonld-audit-report.md  : human-readable report
  - tools/jsonld-audit-report.json: machine-readable for CI/automation

Usage:
  python3 tools/audit-jsonld.py                 # full audit
  python3 tools/audit-jsonld.py --missing-only  # show only failing pages
  python3 tools/audit-jsonld.py --category tech # filter by category
"""

import argparse
import json
import re
import sys
from pathlib import Path
from collections import Counter

REPO_ROOT = Path(__file__).resolve().parent.parent
ARTICLES_JSON = REPO_ROOT / "articles.json"
REPORT_MD = REPO_ROOT / "tools" / "jsonld-audit-report.md"
REPORT_JSON = REPO_ROOT / "tools" / "jsonld-audit-report.json"

ARTICLE_TYPES = {"Article", "TechArticle", "NewsArticle", "BlogPosting"}


def find_jsonld_blocks(html: str) -> list[dict]:
    """Extract all <script type="application/ld+json"> JSON blobs from HTML."""
    blocks = []
    pattern = re.compile(
        r'<script\s+type=["\']application/ld\+json["\']\s*>(.*?)</script>',
        re.DOTALL | re.IGNORECASE,
    )
    for m in pattern.finditer(html):
        raw = m.group(1).strip()
        try:
            blocks.append(json.loads(raw))
        except json.JSONDecodeError:
            blocks.append({"_parse_error": raw[:200]})
    return blocks


def check_article(article: dict) -> dict:
    """Check a single article from articles.json. Returns audit result dict."""
    rel_path = article.get("path", "")
    file_path = REPO_ROOT / rel_path / "index.html"

    result = {
        "id": article.get("id"),
        "title": article.get("title", "")[:80],
        "path": rel_path,
        "language": article.get("language"),
        "category": article.get("category"),
        "type": article.get("type", "article"),
        "file_exists": file_path.exists(),
        "has_article_schema": False,
        "schema_type": None,
        "has_breadcrumb_schema": False,
        "has_faq_schema": False,
        "has_faqs_in_init": False,
        "issues": [],
    }

    if not file_path.exists():
        result["issues"].append("FILE_MISSING")
        return result

    html = file_path.read_text(encoding="utf-8", errors="replace")

    # Extract <head> only — JSON-LD should be in head
    head_match = re.search(r"<head[^>]*>(.*?)</head>", html, re.DOTALL | re.IGNORECASE)
    head = head_match.group(1) if head_match else html

    blocks = find_jsonld_blocks(head)
    for blk in blocks:
        if not isinstance(blk, dict):
            continue
        t = blk.get("@type")
        if isinstance(t, list):
            types = set(t)
        else:
            types = {t} if t else set()

        if types & ARTICLE_TYPES:
            result["has_article_schema"] = True
            result["schema_type"] = list(types & ARTICLE_TYPES)[0]
        if "BreadcrumbList" in types:
            result["has_breadcrumb_schema"] = True
        if "FAQPage" in types:
            result["has_faq_schema"] = True

    # Check if PebblousPage.init has faqs: [...]
    if re.search(r"faqs\s*:\s*\[", html):
        result["has_faqs_in_init"] = True

    # Hub pages don't strictly need Article schema (they're list pages)
    if result["type"] == "hub":
        # Hubs are OK without Article schema
        pass
    elif not result["has_article_schema"]:
        result["issues"].append("MISSING_ARTICLE_SCHEMA")

    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--missing-only", action="store_true", help="Show only pages with issues")
    parser.add_argument("--category", help="Filter by category (tech, business, art, story)")
    parser.add_argument("--language", help="Filter by language (ko, en)")
    parser.add_argument("--no-write", action="store_true", help="Print to stdout, don't write report files")
    args = parser.parse_args()

    if not ARTICLES_JSON.exists():
        print(f"ERROR: {ARTICLES_JSON} not found")
        sys.exit(1)

    data = json.loads(ARTICLES_JSON.read_text(encoding="utf-8"))
    articles = data.get("articles", [])

    # Filter to published only
    pub = [a for a in articles if a.get("published")]
    if args.category:
        pub = [a for a in pub if a.get("category") == args.category]
    if args.language:
        pub = [a for a in pub if a.get("language") == args.language]

    print(f"Auditing {len(pub)} published articles...", file=sys.stderr)

    results = [check_article(a) for a in pub]

    # Summary
    total = len(results)
    article_pages = [r for r in results if r["type"] != "hub"]
    hub_pages = [r for r in results if r["type"] == "hub"]
    file_missing = [r for r in results if "FILE_MISSING" in r["issues"]]
    article_ok = [r for r in article_pages if r["has_article_schema"]]
    article_missing = [r for r in article_pages if not r["has_article_schema"] and "FILE_MISSING" not in r["issues"]]

    summary = {
        "total_published": total,
        "article_pages": len(article_pages),
        "hub_pages": len(hub_pages),
        "file_missing": len(file_missing),
        "article_schema_ok": len(article_ok),
        "article_schema_missing": len(article_missing),
        "coverage_percent": round(len(article_ok) / max(len(article_pages), 1) * 100, 1),
    }

    # Build markdown report
    md_lines = [
        "# JSON-LD Schema Audit Report",
        "",
        f"**생성일**: 자동 생성 (audit-jsonld.py)",
        f"**소스**: articles.json ({total}개 published)",
        "",
        "## 요약",
        "",
        f"- 전체 published: **{total}**",
        f"  - 일반 아티클: {len(article_pages)}",
        f"  - 허브 페이지: {len(hub_pages)} (Article 스키마 불필요)",
        f"- 파일 누락: **{len(file_missing)}**",
        "",
        "## Article/TechArticle 스키마 커버리지 (일반 아티클 기준)",
        "",
        f"- ✅ 보유: **{len(article_ok)}** / {len(article_pages)} ({summary['coverage_percent']}%)",
        f"- ❌ 누락: **{len(article_missing)}**",
        "",
    ]

    # By category breakdown
    cat_counter = Counter()
    cat_missing = Counter()
    for r in article_pages:
        c = r["category"] or "?"
        cat_counter[c] += 1
        if not r["has_article_schema"]:
            cat_missing[c] += 1

    md_lines.append("### 카테고리별 누락 현황")
    md_lines.append("")
    md_lines.append("| 카테고리 | 전체 | 누락 | 누락률 |")
    md_lines.append("|----------|------|------|--------|")
    for c in sorted(cat_counter.keys()):
        miss = cat_missing[c]
        total_c = cat_counter[c]
        pct = round(miss / total_c * 100, 1)
        md_lines.append(f"| {c} | {total_c} | {miss} | {pct}% |")
    md_lines.append("")

    # By language
    lang_counter = Counter()
    lang_missing = Counter()
    for r in article_pages:
        lng = r["language"] or "?"
        lang_counter[lng] += 1
        if not r["has_article_schema"]:
            lang_missing[lng] += 1

    md_lines.append("### 언어별 누락 현황")
    md_lines.append("")
    md_lines.append("| 언어 | 전체 | 누락 | 누락률 |")
    md_lines.append("|------|------|------|--------|")
    for lng in sorted(lang_counter.keys()):
        miss = lang_missing[lng]
        total_l = lang_counter[lng]
        pct = round(miss / total_l * 100, 1)
        md_lines.append(f"| {lng} | {total_l} | {miss} | {pct}% |")
    md_lines.append("")

    # Missing list
    if article_missing:
        md_lines.append("## 누락 페이지 목록")
        md_lines.append("")
        md_lines.append("| 카테고리 | 언어 | ID | 경로 |")
        md_lines.append("|---------|------|----|----|")
        for r in sorted(article_missing, key=lambda x: (x["category"] or "", x["language"] or "", x["id"] or "")):
            md_lines.append(
                f"| {r['category']} | {r['language']} | `{r['id']}` | `{r['path']}` |"
            )
        md_lines.append("")

    # File missing
    if file_missing:
        md_lines.append("## ⚠️ 파일 누락 (articles.json에는 있지만 디스크에 없음)")
        md_lines.append("")
        for r in file_missing:
            md_lines.append(f"- `{r['id']}` → `{r['path']}`")
        md_lines.append("")

    # Output
    if args.no_write:
        print("\n".join(md_lines))
    else:
        # Filter for missing-only mode
        if args.missing_only:
            results_for_json = [r for r in results if r["issues"]]
        else:
            results_for_json = results

        REPORT_MD.write_text("\n".join(md_lines), encoding="utf-8")
        REPORT_JSON.write_text(
            json.dumps({"summary": summary, "results": results_for_json}, ensure_ascii=False, indent=2),
            encoding="utf-8",
        )
        print(f"✅ Report written:", file=sys.stderr)
        print(f"   {REPORT_MD.relative_to(REPO_ROOT)}", file=sys.stderr)
        print(f"   {REPORT_JSON.relative_to(REPO_ROOT)}", file=sys.stderr)
        print(f"\n📊 Coverage: {len(article_ok)}/{len(article_pages)} ({summary['coverage_percent']}%)", file=sys.stderr)
        if article_missing:
            print(f"❌ Missing Article schema: {len(article_missing)} pages", file=sys.stderr)


if __name__ == "__main__":
    main()
