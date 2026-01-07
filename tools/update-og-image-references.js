#!/usr/bin/env node
/**
 * Update OG Image References
 *
 * Updates HTML og:image meta tags and articles.json thumbnails
 * for articles that have generated OG images.
 *
 * Usage:
 *   node tools/update-og-image-references.js          # Dry run
 *   node tools/update-og-image-references.js --run    # Actually update
 */

const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const articlesPath = path.join(projectRoot, 'articles.json');
const dryRun = !process.argv.includes('--run');
const siteUrl = 'https://blog.pebblous.ai';

console.log('='.repeat(60));
console.log('Update OG Image References');
console.log('='.repeat(60));
console.log(`Mode: ${dryRun ? 'DRY RUN (use --run to update)' : 'UPDATING FILES'}`);
console.log('');

// Load articles.json
const data = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));

// Filter non-art articles
const nonArtArticles = data.articles.filter(a => a.category !== 'art');

const updates = [];
const skipped = [];

for (const article of nonArtArticles) {
    // Skip external URLs
    if (article.path.startsWith('http')) {
        skipped.push({ path: article.path, reason: 'External URL' });
        continue;
    }

    const htmlPath = path.join(projectRoot, article.path);

    // Check if HTML exists
    if (!fs.existsSync(htmlPath)) {
        skipped.push({ path: article.path, reason: 'HTML not found' });
        continue;
    }

    // Determine expected OG image path
    const htmlDir = path.dirname(article.path);
    const htmlName = path.basename(article.path, '.html');
    const ogImageRelativePath = `${htmlDir}/image/${htmlName}.png`;
    const ogImageFullPath = path.join(projectRoot, ogImageRelativePath);

    // Check if OG image exists
    if (!fs.existsSync(ogImageFullPath)) {
        skipped.push({ path: article.path, reason: 'No OG image file' });
        continue;
    }

    // Check current state
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    const ogMatch = htmlContent.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);
    const currentOgImage = ogMatch ? ogMatch[1] : null;
    const expectedOgImageUrl = `${siteUrl}/${ogImageRelativePath}`;

    // Check if already correct
    if (currentOgImage === expectedOgImageUrl) {
        // Check articles.json too
        if (article.image === expectedOgImageUrl && article.cardImage === ogImageRelativePath) {
            skipped.push({ path: article.path, reason: 'Already up to date' });
            continue;
        }
    }

    updates.push({
        articlePath: article.path,
        htmlPath: htmlPath,
        ogImageRelativePath: ogImageRelativePath,
        ogImageUrl: expectedOgImageUrl,
        currentOgImage: currentOgImage,
        currentArticleImage: article.image,
        currentCardImage: article.cardImage
    });
}

console.log(`Articles to update: ${updates.length}`);
console.log(`Skipped: ${skipped.length}`);
console.log('');

// Show updates
console.log('-'.repeat(60));
console.log('Updates to apply:');
console.log('-'.repeat(60));

for (const update of updates) {
    console.log(`\n📄 ${update.articlePath}`);
    console.log(`   OG Image: ${update.ogImageRelativePath}`);
    if (update.currentOgImage !== update.ogImageUrl) {
        console.log(`   HTML og:image: ${update.currentOgImage || '(none)'} → ${update.ogImageUrl}`);
    }
    if (update.currentArticleImage !== update.ogImageUrl) {
        console.log(`   articles.json image: needs update`);
    }
    if (update.currentCardImage !== update.ogImageRelativePath) {
        console.log(`   articles.json cardImage: needs update`);
    }
}

if (dryRun) {
    console.log('\n' + '='.repeat(60));
    console.log('DRY RUN complete. Use --run to apply updates.');
    console.log('='.repeat(60));
    process.exit(0);
}

// Apply updates
console.log('\n' + '='.repeat(60));
console.log('Applying updates...');
console.log('='.repeat(60));

let htmlUpdated = 0;
let articlesUpdated = 0;

for (const update of updates) {
    // Update HTML file
    let htmlContent = fs.readFileSync(update.htmlPath, 'utf-8');

    // Update or add og:image meta tag
    const ogImageTag = `<meta property="og:image" content="${update.ogImageUrl}">`;

    if (htmlContent.match(/<meta\s+property="og:image"\s+content="[^"]*"/i)) {
        // Replace existing
        htmlContent = htmlContent.replace(
            /<meta\s+property="og:image"\s+content="[^"]*"/i,
            `<meta property="og:image" content="${update.ogImageUrl}"`
        );
    } else {
        // Add after og:description or og:title
        if (htmlContent.match(/<meta\s+property="og:description"/i)) {
            htmlContent = htmlContent.replace(
                /(<meta\s+property="og:description"[^>]*>)/i,
                `$1\n    ${ogImageTag}`
            );
        } else if (htmlContent.match(/<meta\s+property="og:title"/i)) {
            htmlContent = htmlContent.replace(
                /(<meta\s+property="og:title"[^>]*>)/i,
                `$1\n    ${ogImageTag}`
            );
        }
    }

    fs.writeFileSync(update.htmlPath, htmlContent);
    htmlUpdated++;
    console.log(`✅ Updated HTML: ${update.articlePath}`);

    // Update articles.json entry
    const articleIndex = data.articles.findIndex(a => a.path === update.articlePath);
    if (articleIndex !== -1) {
        data.articles[articleIndex].image = update.ogImageUrl;
        data.articles[articleIndex].cardImage = update.ogImageRelativePath;
        articlesUpdated++;
    }
}

// Save articles.json
fs.writeFileSync(articlesPath, JSON.stringify(data, null, 2));
console.log(`\n✅ Updated articles.json (${articlesUpdated} entries)`);

// Summary
console.log('\n' + '='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));
console.log(`✅ HTML files updated: ${htmlUpdated}`);
console.log(`✅ articles.json entries updated: ${articlesUpdated}`);
console.log(`⏭️  Skipped: ${skipped.length}`);
console.log('\nDone!');
