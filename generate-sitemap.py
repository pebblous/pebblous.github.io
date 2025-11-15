#!/usr/bin/env python3

"""
Sitemap Generator for Pebblous Blog

Generates sitemap.xml from articles.json
- Includes only published articles (published: true)
- Excludes external links (external: true)
- Uses actual article dates for lastmod
- Prioritizes featured content
- News-like update frequency for recent content
"""

import json
import sys
from datetime import datetime, timedelta
from pathlib import Path

# Configuration
SITE_URL = "https://blog.pebblous.ai"
ARTICLES_FILE = Path(__file__).parent / "articles.json"
SITEMAP_FILE = Path(__file__).parent / "sitemap.xml"


def get_change_freq(date_string):
    """Calculate changefreq based on article age"""
    try:
        article_date = datetime.strptime(date_string, '%Y-%m-%d')
        days_diff = (datetime.now() - article_date).days

        if days_diff <= 7:
            return 'daily'      # Last week: check daily
        elif days_diff <= 30:
            return 'weekly'     # Last month: check weekly
        elif days_diff <= 90:
            return 'monthly'    # Last 3 months: check monthly
        else:
            return 'yearly'     # Older: check yearly
    except Exception as e:
        print(f"⚠️ Warning: Invalid date format '{date_string}': {e}", file=sys.stderr)
        return 'monthly'


def get_priority(article, index):
    """Calculate priority based on featured status and recency"""
    if article.get('featured'):
        return '1.0'
    if index == 0:
        return '1.0'    # Most recent article
    if index < 5:
        return '0.9'    # Top 5 recent articles
    if index < 10:
        return '0.8'    # Top 10 recent articles
    return '0.7'        # Others


def escape_xml(text):
    """Escape special XML characters"""
    return (text
            .replace('&', '&amp;')
            .replace('<', '&lt;')
            .replace('>', '&gt;')
            .replace('"', '&quot;')
            .replace("'", '&apos;'))


def main():
    """Main function to generate sitemap"""
    try:
        # Read articles.json
        if not ARTICLES_FILE.exists():
            print(f"❌ Error: {ARTICLES_FILE} not found", file=sys.stderr)
            sys.exit(1)

        print(f"📖 Reading {ARTICLES_FILE}...")
        with open(ARTICLES_FILE, 'r', encoding='utf-8') as f:
            articles_data = json.load(f)
            articles = articles_data.get('articles', [])

        if not articles:
            print("⚠️ Warning: No articles found in articles.json", file=sys.stderr)
            sys.exit(1)

        # Filter: only published, non-external articles
        published_articles = [
            article for article in articles
            if article.get('published') is True and article.get('external') is not True
        ]

        print(f"✅ Found {len(published_articles)} published articles (out of {len(articles)} total)")

        # Sort by date (newest first)
        published_articles.sort(key=lambda x: x.get('date', ''), reverse=True)

        # Build sitemap XML
        xml_lines = [
            '<?xml version="1.0" encoding="UTF-8"?>',
            '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
            '        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"',
            '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
            ''
        ]

        # Add homepage
        today = datetime.now().strftime('%Y-%m-%d')
        xml_lines.extend([
            '  <!-- Homepage -->',
            '  <url>',
            f'    <loc>{SITE_URL}/</loc>',
            f'    <lastmod>{today}</lastmod>',
            '    <changefreq>daily</changefreq>',
            '    <priority>1.0</priority>',
            '  </url>',
            ''
        ])

        # Add RSS feed
        xml_lines.extend([
            '  <!-- RSS Feed -->',
            '  <url>',
            f'    <loc>{SITE_URL}/rss.xml</loc>',
            f'    <lastmod>{today}</lastmod>',
            '    <changefreq>daily</changefreq>',
            '    <priority>0.8</priority>',
            '  </url>',
            ''
        ])

        # Add published articles
        for index, article in enumerate(published_articles):
            title = article.get('title', 'Untitled')
            path = article.get('path', '')

            if not path:
                print(f"⚠️ Warning: Article '{title}' has no path, skipping", file=sys.stderr)
                continue

            # Build full URL
            url = path if path.startswith('http') else f"{SITE_URL}/{path}"

            lastmod = article.get('date', today)
            changefreq = get_change_freq(lastmod)
            priority = get_priority(article, index)

            xml_lines.extend([
                f'  <!-- {escape_xml(title)} -->',
                '  <url>',
                f'    <loc>{url}</loc>',
                f'    <lastmod>{lastmod}</lastmod>',
                f'    <changefreq>{changefreq}</changefreq>',
                f'    <priority>{priority}</priority>'
            ])

            # Add image if available
            image = article.get('image', '')
            if image:
                image_url = image if image.startswith('http') else f"{SITE_URL}/{image}"
                xml_lines.extend([
                    '    <image:image>',
                    f'      <image:loc>{image_url}</image:loc>',
                    f'      <image:title>{escape_xml(title)}</image:title>',
                    '    </image:image>'
                ])

            # Add news metadata for recent articles (last 2 days for Google News)
            try:
                article_date = datetime.strptime(lastmod, '%Y-%m-%d')
                two_days_ago = datetime.now() - timedelta(days=2)

                category = article.get('category', '')
                if article_date >= two_days_ago and category in ['tech', 'story']:
                    xml_lines.extend([
                        '    <news:news>',
                        '      <news:publication>',
                        '        <news:name>Pebblous Blog</news:name>',
                        '        <news:language>ko</news:language>',
                        '      </news:publication>',
                        f'      <news:publication_date>{lastmod}</news:publication_date>',
                        f'      <news:title>{escape_xml(title)}</news:title>',
                        '    </news:news>'
                    ])
            except Exception as e:
                print(f"⚠️ Warning: Could not add news metadata for '{title}': {e}", file=sys.stderr)

            xml_lines.extend([
                '  </url>',
                ''
            ])

        xml_lines.append('</urlset>')

        # Write sitemap.xml
        print(f"💾 Writing sitemap to {SITEMAP_FILE}...")
        with open(SITEMAP_FILE, 'w', encoding='utf-8') as f:
            f.write('\n'.join(xml_lines))

        # Success summary
        print('✅ Sitemap generated successfully!')
        print(f'📊 Total URLs: {len(published_articles) + 2}')
        print(f'📝 Published articles: {len(published_articles)}')
        print(f'📅 Last updated: {datetime.now().isoformat()}')
        print(f'📄 Sitemap location: {SITEMAP_FILE}')

        return 0

    except json.JSONDecodeError as e:
        print(f"❌ Error: Invalid JSON in {ARTICLES_FILE}: {e}", file=sys.stderr)
        return 1
    except Exception as e:
        print(f"❌ Error: {type(e).__name__}: {e}", file=sys.stderr)
        import traceback
        traceback.print_exc()
        return 1


if __name__ == '__main__':
    sys.exit(main())
