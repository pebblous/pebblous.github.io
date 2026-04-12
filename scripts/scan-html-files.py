#!/usr/bin/env python3
"""
scan-html-files.py — HTML → articles.json 메타데이터 동기화

각 아티클 HTML에서 메타데이터를 추출하여 articles.json을 업데이트한다.

추출 항목:
  - publisher: PebblousPage.init() config에서
  - wordCount: <main> 본문 텍스트 글자 수
  - modified: git log에서 최종 수정일

Usage:
  python3 scripts/scan-html-files.py           # 전체 스캔
  python3 scripts/scan-html-files.py --dry-run  # 변경 없이 미리보기
  python3 scripts/scan-html-files.py --clean    # 비표준 필드 정리 포함
"""

import json
import os
import re
import subprocess
import sys
from pathlib import Path
from html.parser import HTMLParser

ROOT = Path(__file__).resolve().parent.parent
ARTICLES_JSON = ROOT / "articles.json"

# ========================================
# HTML Text Extractor
# ========================================
class MainTextExtractor(HTMLParser):
    """<main> 태그 내부의 visible text만 추출"""
    def __init__(self):
        super().__init__()
        self.in_main = False
        self.in_script = False
        self.in_style = False
        self.texts = []

    def handle_starttag(self, tag, attrs):
        if tag == "main":
            self.in_main = True
        if tag in ("script", "style"):
            self.in_script = True
            self.in_style = True

    def handle_endtag(self, tag):
        if tag == "main":
            self.in_main = False
        if tag in ("script", "style"):
            self.in_script = False
            self.in_style = False

    def handle_data(self, data):
        if self.in_main and not self.in_script and not self.in_style:
            stripped = data.strip()
            if stripped:
                self.texts.append(stripped)

    def get_text(self):
        return " ".join(self.texts)


def count_words(html_content):
    """HTML에서 <main> 내부 텍스트 글자 수 계산"""
    extractor = MainTextExtractor()
    try:
        extractor.feed(html_content)
    except Exception:
        return 0
    text = extractor.get_text()
    # 한글+영어 혼합: 글자 수 기준 (공백 제외)
    return len(re.sub(r'\s+', '', text))


def extract_config_field(html_content, field_name):
    """PebblousPage.init() config에서 특정 필드 값 추출"""
    # publishDate: "2026-04-11" or publisher: "팀명"
    pattern = rf'{field_name}\s*:\s*["\']([^"\']+)["\']'
    match = re.search(pattern, html_content)
    return match.group(1) if match else None


def get_git_modified_date(filepath):
    """git log에서 파일의 최종 수정일 추출 (YYYY-MM-DD)"""
    try:
        result = subprocess.run(
            ["git", "log", "-1", "--format=%aI", "--", str(filepath)],
            capture_output=True, text=True, cwd=ROOT, timeout=10
        )
        if result.stdout.strip():
            # 2026-04-12T10:30:00+09:00 → 2026-04-12
            return result.stdout.strip()[:10]
    except Exception:
        pass
    return None


def scan_html_file(filepath):
    """단일 HTML 파일에서 메타데이터 추출"""
    try:
        content = filepath.read_text(encoding="utf-8")
    except Exception:
        return None

    result = {}

    # publisher
    publisher = extract_config_field(content, "publisher")
    if publisher:
        result["publisher"] = publisher

    # wordCount
    wc = count_words(content)
    if wc > 0:
        result["wordCount"] = wc

    # modified (git)
    modified = get_git_modified_date(filepath)
    if modified:
        result["modified"] = modified

    return result


# ========================================
# Banned field cleanup
# ========================================
BANNED_FIELDS = {"cardTitle", "cardDescription", "cardSubtitle", "cardImage", "url", "lang", "publishDate"}

def clean_banned_fields(article):
    """비표준 필드 제거. cardTitle→title 등 값 보존 필요 시 이관"""
    cleaned = 0
    # cardTitle이 있고 title이 없으면 이관
    if "cardTitle" in article and "title" not in article:
        article["title"] = article["cardTitle"]
    # cardDescription이 있고 description이 없으면 이관
    if "cardDescription" in article and "description" not in article:
        article["description"] = article["cardDescription"]

    for field in BANNED_FIELDS:
        if field in article:
            del article[field]
            cleaned += 1
    return cleaned


# ========================================
# Main
# ========================================
def main():
    dry_run = "--dry-run" in sys.argv
    do_clean = "--clean" in sys.argv

    # Load articles.json
    with open(ARTICLES_JSON, "r", encoding="utf-8") as f:
        data = json.load(f)

    articles = data["articles"]
    print(f"Loaded {len(articles)} articles from articles.json")

    # Build path → article index
    path_map = {}
    for i, art in enumerate(articles):
        p = art.get("path", "")
        path_map[p] = i

    updated = 0
    cleaned_total = 0
    errors = []

    for art in articles:
        path = art.get("path", "")
        if not path:
            continue

        # Resolve HTML file path
        html_path = ROOT / path
        if html_path.is_dir():
            html_path = html_path / "index.html"
        if not html_path.suffix:
            html_path = Path(str(html_path) + "index.html")
        if not html_path.exists():
            # Try without trailing slash
            alt = ROOT / (path.rstrip("/") + ".html")
            if alt.exists():
                html_path = alt
            else:
                continue

        # Scan
        meta = scan_html_file(html_path)
        if meta is None:
            errors.append(path)
            continue

        changed = False

        # Update fields (only if not already set or value changed)
        for field in ["publisher", "wordCount", "modified"]:
            if field in meta:
                if art.get(field) != meta[field]:
                    art[field] = meta[field]
                    changed = True

        # Clean banned fields
        if do_clean:
            c = clean_banned_fields(art)
            if c > 0:
                cleaned_total += c
                changed = True

        if changed:
            updated += 1

    print(f"\nResults:")
    print(f"  Updated: {updated} articles")
    print(f"  Errors: {len(errors)}")
    if do_clean:
        print(f"  Banned fields removed: {cleaned_total}")

    if errors:
        print(f"\n  Error files:")
        for e in errors[:10]:
            print(f"    {e}")

    # Save
    if not dry_run and updated > 0:
        with open(ARTICLES_JSON, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"\n articles.json saved ({len(articles)} articles)")
    elif dry_run:
        print(f"\n[DRY RUN] No changes saved")
    else:
        print(f"\nNo changes needed")


if __name__ == "__main__":
    main()
