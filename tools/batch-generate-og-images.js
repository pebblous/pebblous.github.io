#!/usr/bin/env node
/**
 * Batch OG Image Generator for Pebblous Blog
 *
 * Finds all non-art articles missing OG images and generates them.
 *
 * Usage:
 *   node tools/batch-generate-og-images.js          # Dry run (preview only)
 *   node tools/batch-generate-og-images.js --run    # Actually generate images
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = path.resolve(__dirname, '..');
const articlesPath = path.join(projectRoot, 'articles.json');
const dryRun = !process.argv.includes('--run');

console.log('='.repeat(60));
console.log('Batch OG Image Generator for Pebblous Blog');
console.log('='.repeat(60));
console.log(`Mode: ${dryRun ? 'DRY RUN (use --run to generate)' : 'GENERATING IMAGES'}`);
console.log('');

// Load articles.json
if (!fs.existsSync(articlesPath)) {
    console.error('❌ articles.json not found');
    process.exit(1);
}

const data = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));

// Filter non-art articles
const nonArtArticles = data.articles.filter(a => a.category !== 'art');
console.log(`Total non-art articles: ${nonArtArticles.length}`);

// Check each article for OG image
const missingOG = [];
const skipped = [];
const errors = [];

for (const article of nonArtArticles) {
    const htmlPath = path.join(projectRoot, article.path);

    // Skip external URLs
    if (article.path.startsWith('http')) {
        skipped.push({ path: article.path, reason: 'External URL' });
        continue;
    }

    // Check if HTML exists
    if (!fs.existsSync(htmlPath)) {
        skipped.push({ path: article.path, reason: 'HTML not found' });
        continue;
    }

    // Read HTML and check for og:image
    const content = fs.readFileSync(htmlPath, 'utf-8');
    const ogMatch = content.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i);

    let needsOG = false;
    let reason = '';

    if (!ogMatch) {
        needsOG = true;
        reason = 'No og:image tag';
    } else if (ogMatch[1].includes('Pebblous_BM')) {
        needsOG = true;
        reason = 'Default logo only';
    }

    if (needsOG) {
        missingOG.push({
            path: article.path,
            title: article.title,
            category: article.category,
            reason: reason
        });
    }
}

console.log(`Articles missing OG image: ${missingOG.length}`);
console.log(`Skipped: ${skipped.length}`);
console.log('');

// Show what will be generated
console.log('-'.repeat(60));
console.log('Articles to process:');
console.log('-'.repeat(60));

for (const item of missingOG) {
    console.log(`📄 ${item.path}`);
    console.log(`   Category: ${item.category} | Reason: ${item.reason}`);
    console.log(`   Title: ${item.title?.substring(0, 50)}...`);
    console.log('');
}

if (dryRun) {
    console.log('');
    console.log('='.repeat(60));
    console.log('DRY RUN complete. Use --run to actually generate images.');
    console.log('='.repeat(60));
    process.exit(0);
}

// Generate images
console.log('');
console.log('='.repeat(60));
console.log('Starting image generation...');
console.log('='.repeat(60));
console.log('');

let successCount = 0;
let failCount = 0;

for (let i = 0; i < missingOG.length; i++) {
    const item = missingOG[i];
    const htmlPath = path.join(projectRoot, item.path);

    console.log(`[${i + 1}/${missingOG.length}] ${item.path}`);

    try {
        const result = execSync(
            `node "${path.join(__dirname, 'generate-og-image.js')}" --from-html "${htmlPath}"`,
            {
                cwd: projectRoot,
                encoding: 'utf-8',
                timeout: 60000 // 1 minute timeout per image
            }
        );
        console.log(result);
        successCount++;
    } catch (error) {
        console.error(`   ❌ Error: ${error.message}`);
        errors.push({ path: item.path, error: error.message });
        failCount++;
    }

    console.log('');
}

// Summary
console.log('='.repeat(60));
console.log('SUMMARY');
console.log('='.repeat(60));
console.log(`✅ Success: ${successCount}`);
console.log(`❌ Failed: ${failCount}`);
console.log(`⏭️  Skipped: ${skipped.length}`);

if (errors.length > 0) {
    console.log('');
    console.log('Errors:');
    for (const e of errors) {
        console.log(`  - ${e.path}: ${e.error}`);
    }
}

console.log('');
console.log('Done!');
