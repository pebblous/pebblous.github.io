#!/usr/bin/env node

/**
 * Sitemap Generator for Pebblous Blog
 *
 * Generates sitemap.xml from articles.json
 * - Includes only published articles (published: true)
 * - Excludes external links (external: true)
 * - Uses actual article dates for lastmod
 * - Prioritizes featured content
 * - News-like update frequency for recent content
 */

const fs = require('fs');
const path = require('path');

// Configuration
const SITE_URL = 'https://blog.pebblous.ai';

// Asset 1 (content repo) location.
// Priority: BLOG_CONTENT_REPO env var → ROOT (parent of tools/, i.e. repo root)
const ROOT = path.resolve(__dirname, '..');
const BLOG_CONTENT_REPO = process.env.BLOG_CONTENT_REPO || ROOT;
const ARTICLES_FILE = path.join(BLOG_CONTENT_REPO, 'articles.json');
const SITEMAP_FILE = path.join(BLOG_CONTENT_REPO, 'sitemap.xml');

// Read articles.json
const articlesData = JSON.parse(fs.readFileSync(ARTICLES_FILE, 'utf8'));
const articles = articlesData.articles || [];

// Non-HTML file extensions and partial HTML paths to exclude from sitemap
// These cause "Crawled - currently not indexed" in GSC
const EXCLUDED_PATH_PATTERNS = [
    /\.json$/i,
    /\.owl$/i,
    /\.ttl$/i,
    /\.pdf$/i,
    /\.xml$/i,
    /^components\//i,   // partial HTML (header.html, footer.html, etc.)
];

function isExcludedPath(path) {
    return EXCLUDED_PATH_PATTERNS.some(pattern => pattern.test(path));
}

// Filter: only published, non-external, non-locked articles
// locked: true → password-protected/noindex pages (IR confidential, etc.)
// Also exclude non-HTML resources (json, owl, ttl, pdf, xml, components/)
const publishedArticles = articles.filter(article =>
    article.published === true &&
    article.external !== true &&
    article.locked !== true &&
    !isExcludedPath(article.path || '')
);

// Sort by date (newest first)
publishedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));

// Helper: Calculate changefreq based on article age
function getChangeFreq(dateString) {
    const articleDate = new Date(dateString);
    const now = new Date();
    const daysDiff = Math.floor((now - articleDate) / (1000 * 60 * 60 * 24));

    if (daysDiff <= 7) return 'daily';      // Last week: check daily
    if (daysDiff <= 30) return 'weekly';    // Last month: check weekly
    if (daysDiff <= 90) return 'monthly';   // Last 3 months: check monthly
    return 'yearly';                        // Older: check yearly
}

// Helper: Calculate priority
function getPriority(article, index) {
    if (article.featured) return '1.0';
    if (index === 0) return '1.0';  // Most recent article
    if (index < 5) return '0.9';     // Top 5 recent articles
    if (index < 10) return '0.8';    // Top 10 recent articles
    return '0.7';                    // Others
}

// Build sitemap XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
`;

// Add homepage
xml += `
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

// URL-encode each path segment (slashes preserved), then XML-escape.
// 폴더명에 공백이 있으면(예: "World Model") <loc>에 raw space가 들어가 sitemap XML이
// 무효가 되고 canonical(%20)과 어긋난다 — Google이 그 URL을 거부 (2026-07-14 감사).
function encodePathForLoc(p) {
    return p.split('/').map(seg => encodeURIComponent(seg)).join('/');
}
function xmlEscape(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Add published articles
publishedArticles.forEach((article, index) => {
    const url = article.path.startsWith('http')
        ? xmlEscape(article.path)
        : `${SITE_URL}/${xmlEscape(encodePathForLoc(article.path))}`;

    const lastmod = article.date || new Date().toISOString().split('T')[0];
    const changefreq = getChangeFreq(article.date);
    const priority = getPriority(article, index);

    xml += `
  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>`;

    // Add image if available (image:loc도 <loc>와 동일하게 세그먼트 인코딩 — 공백 폴더명 %20)
    if (article.image) {
        const imageUrl = article.image.startsWith('http')
            ? xmlEscape(article.image)
            : `${SITE_URL}/${xmlEscape(encodePathForLoc(article.image))}`;

        xml += `
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${xmlEscape(article.title)}</image:title>
    </image:image>`;
    }

    // Add news metadata for recent articles (last 2 days for Google News)
    const articleDate = new Date(article.date);
    const twoDaysAgo = new Date();
    twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

    if (articleDate >= twoDaysAgo && (article.category === 'tech' || article.category === 'story')) {
        xml += `
    <news:news>
      <news:publication>
        <news:name>Pebblous Blog</news:name>
        <news:language>ko</news:language>
      </news:publication>
      <news:publication_date>${lastmod}</news:publication_date>
      <news:title>${article.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</news:title>
    </news:news>`;
    }

    xml += `
  </url>`;
});

xml += `
</urlset>`;

// Write sitemap.xml
fs.writeFileSync(SITEMAP_FILE, xml, 'utf8');

console.log('✅ Sitemap generated successfully!');
console.log(`📊 Total URLs: ${publishedArticles.length + 1}`);
console.log(`📝 Published articles: ${publishedArticles.length}`);
console.log(`📅 Last updated: ${new Date().toISOString()}`);
console.log(`📄 Sitemap location: ${SITEMAP_FILE}`);
