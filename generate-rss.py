#!/usr/bin/env python3

"""
RSS Feed Generator for Pebblous Blog
Generates an RSS 2.0 feed from articles.json

Usage: python3 generate-rss.py
"""

import json
import html
from datetime import datetime
from pathlib import Path

SITE_URL = 'https://blog.pebblous.ai'
RSS_PATH = Path(__file__).parent / 'rss.xml'
ARTICLES_PATH = Path(__file__).parent / 'articles.json'


def format_date(date_string):
    """Convert YYYY-MM-DD to RFC 822 format"""
    date = datetime.strptime(date_string, '%Y-%m-%d')
    return date.strftime('%a, %d %b %Y 00:00:00 GMT')


def generate_rss():
    try:
        # Read articles.json
        with open(ARTICLES_PATH, 'r', encoding='utf-8') as f:
            articles_data = json.load(f)

        # Filter published articles and sort by date (newest first)
        articles = [a for a in articles_data['articles'] if a.get('published')]
        articles.sort(key=lambda x: x['date'], reverse=True)

        now = datetime.utcnow().strftime('%a, %d %b %Y %H:%M:%S GMT')

        # Category mapping
        category_map = {
            'art': 'Data Art',
            'tech': 'Tech Insights',
            'story': 'Data Stories'
        }

        # Generate RSS feed
        rss = f'''<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
    <title>Pebblous Blog</title>
    <link>{SITE_URL}/</link>
    <atom:link href="{SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>페블러스는 눈에 보이지 않는 데이터의 우주를 탐험하고, 그 본질을 만질 수 있는 형태로 바꾸어 새로운 문화와 가치를 창조합니다.</description>
    <language>ko</language>
    <lastBuildDate>{now}</lastBuildDate>
    <generator>Pebblous RSS Generator</generator>
    <image>
        <url>{SITE_URL}/image/Pebblous_BM_Orange_RGB.png</url>
        <title>Pebblous Blog</title>
        <link>{SITE_URL}/</link>
    </image>
'''

        # Add items
        for article in articles:
            category_name = category_map.get(article['category'], article['category'])

            link = article['path'] if article.get('external') else f"{SITE_URL}/{article['path']}"

            image_tag = ''
            if article.get('image'):
                image_tag = f'<enclosure url="{html.escape(article["image"])}" type="image/jpeg" />'

            rss += f'''
    <item>
        <title>{html.escape(article['title'])}</title>
        <link>{html.escape(link)}</link>
        <guid isPermaLink="true">{html.escape(link)}</guid>
        <description>{html.escape(article['description'])}</description>
        <category>{html.escape(category_name)}</category>
        <pubDate>{format_date(article['date'])}</pubDate>
        {image_tag}
'''

            # Add tags as categories
            for tag in article.get('tags', []):
                rss += f'        <category>{html.escape(tag)}</category>\n'

            rss += '    </item>\n'

        rss += '''</channel>
</rss>'''

        # Write RSS file
        with open(RSS_PATH, 'w', encoding='utf-8') as f:
            f.write(rss)

        print(f'✅ RSS feed generated successfully!')
        print(f'   Location: {RSS_PATH}')
        print(f'   Total items: {len(articles)}')
        if articles:
            print(f'   Latest: {articles[0]["title"]}')

    except Exception as error:
        print(f'❌ Error generating RSS feed: {error}')
        raise


if __name__ == '__main__':
    generate_rss()
