#!/usr/bin/env python3
"""
remove-hero-meta-hardcoding.py — Hero 메타 하드코딩 일괄 제거

PebblousPage.init()이 메타를 동적 생성하므로, HTML의 하드코딩된
메타 라인과 공유 버튼 placeholder를 제거한다.

제거 대상 (hero <header> 내부):
  1. <p class="text-sm themeable-muted">...</p>  (날짜/팀명/읽는시간)
  2. <div id="share-buttons-placeholder" ...>...</div>
  3. 기존 <div class="hero-meta-group">...</div> (프로토타입 잔재)

보존:
  - <h1 id="page-h1-title">
  - PebblousPage.init() config
  - <header> 태그 자체

Usage:
  python3 scripts/remove-hero-meta-hardcoding.py --dry-run
  python3 scripts/remove-hero-meta-hardcoding.py
"""

import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DRY_RUN = "--dry-run" in sys.argv


def process_file(filepath):
    """단일 HTML 파일에서 hero 메타 하드코딩 제거"""
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()

    if "PebblousPage.init" not in content:
        return False

    original = content

    # 1. Remove <p class="text-sm themeable-muted">...</p> lines
    #    (including variations with mt-1, etc.)
    content = re.sub(
        r'\s*<p\s+class="text-sm\s+themeable-muted[^"]*"[^>]*>.*?</p>',
        '', content, flags=re.DOTALL
    )

    # 2. Remove standalone <div id="share-buttons-placeholder" ...>...</div>
    #    but NOT if it's inside a hero-meta-group (those are recreated by JS)
    content = re.sub(
        r'\s*<div\s+id="share-buttons-placeholder"[^>]*>.*?</div>',
        '', content, flags=re.DOTALL
    )

    # 3. Remove <div class="hero-meta-group ...">...</div> blocks
    #    (protoype pages that already have inline hero-meta-group)
    content = re.sub(
        r'\s*<div\s+class="hero-meta-group[^"]*"[^>]*>.*?</div>\s*</div>',
        '', content, flags=re.DOTALL
    )

    # 4. Clean up empty lines left behind (max 2 consecutive)
    content = re.sub(r'\n{3,}', '\n\n', content)

    if content != original:
        if not DRY_RUN:
            with open(filepath, "w", encoding="utf-8") as f:
                f.write(content)
        return True
    return False


def main():
    modified = 0
    total = 0

    for dirpath, dirs, files in os.walk(ROOT):
        # Skip .git, node_modules
        dirs[:] = [d for d in dirs if d not in ('.git', 'node_modules', '.claude')]
        for f in files:
            if not f.endswith('.html'):
                continue
            filepath = os.path.join(dirpath, f)
            total += 1
            if process_file(filepath):
                modified += 1
                if DRY_RUN:
                    rel = os.path.relpath(filepath, ROOT)
                    print(f"  Would modify: {rel}")

    print(f"\nTotal HTML files scanned: {total}")
    print(f"Modified: {modified}")
    if DRY_RUN:
        print("[DRY RUN] No files changed")


if __name__ == "__main__":
    main()
