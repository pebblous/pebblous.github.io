#!/usr/bin/env node

/**
 * RSS Feed Generator for Pebblous Blog
 * Generates an RSS 2.0 feed from articles.json
 *
 * Usage: node generate-rss.js
 */

const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://blog.pebblous.ai';
const RSS_PATH = path.join(__dirname, 'rss.xml');
const ARTICLES_PATH = path.join(__dirname, 'articles.json');

function escapeXml(unsafe) {
    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toUTCString();
}

function generateRSS() {
    try {
        // Read articles.json
        const articlesData = JSON.parse(fs.readFileSync(ARTICLES_PATH, 'utf8'));

        // Filter published articles and sort by date (newest first)
        const articles = articlesData.articles
            .filter(a => a.published)
            .sort((a, b) => new Date(b.date) - new Date(a.date));

        const now = new Date().toUTCString();

        // Generate RSS feed
        let rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
    <title>Pebblous Blog</title>
    <link>${SITE_URL}/</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>페블러스는 눈에 보이지 않는 데이터의 우주를 탐험하고, 그 본질을 만질 수 있는 형태로 바꾸어 새로운 문화와 가치를 창조합니다.</description>
    <language>ko</language>
    <lastBuildDate>${now}</lastBuildDate>
    <generator>Pebblous RSS Generator</generator>
    <image>
        <url>${SITE_URL}/image/Pebblous_BM_Orange_RGB.png</url>
        <title>Pebblous Blog</title>
        <link>${SITE_URL}/</link>
    </image>
`;

        // Add items
        articles.forEach(article => {
            const categoryName = {
                'art': 'Data Art',
                'tech': 'Tech Insights',
                'story': 'Data Stories'
            }[article.category] || article.category;

            const link = article.external
                ? article.path
                : `${SITE_URL}/${article.path}`;

            const imageTag = article.image
                ? `<enclosure url="${escapeXml(article.image)}" type="image/jpeg" />`
                : '';

            rss += `
    <item>
        <title>${escapeXml(article.title)}</title>
        <link>${escapeXml(link)}</link>
        <guid isPermaLink="true">${escapeXml(link)}</guid>
        <description>${escapeXml(article.description)}</description>
        <category>${escapeXml(categoryName)}</category>
        <pubDate>${formatDate(article.date)}</pubDate>
        ${imageTag}
`;

            // Add tags as categories
            article.tags.forEach(tag => {
                rss += `        <category>${escapeXml(tag)}</category>\n`;
            });

            rss += `    </item>
`;
        });

        rss += `</channel>
</rss>`;

        // Write RSS file
        fs.writeFileSync(RSS_PATH, rss, 'utf8');

        console.log(`✅ RSS feed generated successfully!`);
        console.log(`   Location: ${RSS_PATH}`);
        console.log(`   Total items: ${articles.length}`);
        console.log(`   Latest: ${articles[0]?.title || 'N/A'}`);

    } catch (error) {
        console.error('❌ Error generating RSS feed:', error.message);
        process.exit(1);
    }
}

// Run generator
generateRSS();
