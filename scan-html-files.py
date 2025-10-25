#!/usr/bin/env python3

"""
HTML Files Scanner for Pebblous Blog
Scans all HTML files in the repository and creates files-index.json

Usage: python3 scan-html-files.py
"""

import json
import os
from pathlib import Path
from datetime import datetime

# Configuration
ROOT_DIR = Path(__file__).parent
OUTPUT_FILE = ROOT_DIR / 'files-index.json'
ARTICLES_FILE = ROOT_DIR / 'articles.json'

# Exclude patterns
EXCLUDE_DIRS = {'.git', '.github', 'node_modules', '.DS_Store'}
EXCLUDE_FILES = {'index.html', 'admin.html', 'googleafeea08cc3f0ef3b.html'}


def load_articles():
    """Load existing articles.json"""
    try:
        with open(ARTICLES_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
            return data.get('articles', [])
    except Exception as e:
        print(f'⚠️  Warning: Could not load articles.json: {e}')
        return []


def scan_html_files():
    """Scan repository for HTML files"""
    html_files = []

    for root, dirs, files in os.walk(ROOT_DIR):
        # Remove excluded directories
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]

        # Get relative path from root
        rel_root = Path(root).relative_to(ROOT_DIR)

        for file in files:
            if file.endswith('.html') and file not in EXCLUDE_FILES:
                file_path = rel_root / file
                html_files.append(str(file_path))

    return sorted(html_files)


def match_with_articles(html_files, articles):
    """Match HTML files with registered articles"""
    results = []
    registered_paths = {article.get('path'): article.get('id') for article in articles}

    for html_path in html_files:
        # Normalize path (remove leading './')
        normalized_path = html_path.replace('\\', '/')

        is_registered = normalized_path in registered_paths
        article_id = registered_paths.get(normalized_path)

        results.append({
            'path': normalized_path,
            'registered': is_registered,
            'articleId': article_id
        })

    return results


def generate_index():
    """Generate files-index.json"""
    try:
        print('🔍 Scanning HTML files...')

        # Load articles
        articles = load_articles()
        print(f'   Found {len(articles)} registered articles')

        # Scan HTML files
        html_files = scan_html_files()
        print(f'   Found {len(html_files)} HTML files')

        # Match files with articles
        matched_files = match_with_articles(html_files, articles)

        # Count statistics
        registered_count = sum(1 for f in matched_files if f['registered'])
        unregistered_count = len(matched_files) - registered_count

        # Create index
        index = {
            'scannedAt': datetime.utcnow().isoformat() + 'Z',
            'statistics': {
                'totalHtmlFiles': len(matched_files),
                'registeredArticles': registered_count,
                'unregisteredFiles': unregistered_count
            },
            'files': matched_files
        }

        # Write to file
        with open(OUTPUT_FILE, 'w', encoding='utf-8') as f:
            json.dump(index, f, indent=2, ensure_ascii=False)

        print(f'\n✅ files-index.json generated successfully!')
        print(f'   Location: {OUTPUT_FILE}')
        print(f'   📊 Statistics:')
        print(f'      Total HTML files: {len(matched_files)}')
        print(f'      Registered: {registered_count}')
        print(f'      Unregistered: {unregistered_count}')

        if unregistered_count > 0:
            print(f'\n⚠️  Unregistered HTML files:')
            for file in matched_files:
                if not file['registered']:
                    print(f'      - {file["path"]}')

    except Exception as error:
        print(f'❌ Error generating files index: {error}')
        raise


if __name__ == '__main__':
    generate_index()
