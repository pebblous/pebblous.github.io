#!/usr/bin/env node
/**
 * OG Image Generator for Pebblous Blog
 *
 * Usage:
 *   node tools/generate-og-image.js "제목" "부제목" output.png
 *   node tools/generate-og-image.js "제목" output.png              # 부제목 없이
 *   node tools/generate-og-image.js --category business "제목" output.png
 *   node tools/generate-og-image.js --from-html path/to/post.html  # HTML에서 자동 추출
 *
 * Options:
 *   --category   tech|business|story|art (default: tech)
 *   --from-html  HTML 파일에서 제목/카테고리 자동 추출
 *   --force      이미지가 이미 존재해도 재생성
 *   --light      밝은 배경 테마 사용 (기본: 다크)
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Category color themes (dark variant)
const THEMES_DARK = {
    tech: {
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        accent: '#3B82F6',
        badge: 'Tech Insight',
        titleColor: 'white',
        subtitleColor: '#94a3b8',
        logoTextColor: 'white',
        urlColor: '#64748b',
        decorationOpacity: '20'
    },
    business: {
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2d1810 100%)',
        accent: '#F86825',
        badge: 'Business Insight',
        titleColor: 'white',
        subtitleColor: '#94a3b8',
        logoTextColor: 'white',
        urlColor: '#64748b',
        decorationOpacity: '20'
    },
    story: {
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #0d2818 100%)',
        accent: '#14B8A6',
        badge: 'Data Story',
        titleColor: 'white',
        subtitleColor: '#94a3b8',
        logoTextColor: 'white',
        urlColor: '#64748b',
        decorationOpacity: '20'
    },
    art: {
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2e1a0e 100%)',
        accent: '#F86825',
        badge: 'Data Art Lab',
        titleColor: 'white',
        subtitleColor: '#94a3b8',
        logoTextColor: 'white',
        urlColor: '#64748b',
        decorationOpacity: '20'
    }
};

// Category color themes (light variant)
const THEMES_LIGHT = {
    tech: {
        gradient: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        accent: '#3B82F6',
        badge: 'Tech Insight',
        titleColor: '#0f172a',
        subtitleColor: '#475569',
        logoTextColor: '#1e293b',
        urlColor: '#94a3b8',
        decorationOpacity: '15'
    },
    business: {
        gradient: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
        accent: '#F86825',
        badge: 'Business Insight',
        titleColor: '#0f172a',
        subtitleColor: '#475569',
        logoTextColor: '#1e293b',
        urlColor: '#94a3b8',
        decorationOpacity: '12',
        sectionBar: true
    },
    story: {
        gradient: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
        accent: '#14B8A6',
        badge: 'Data Story',
        titleColor: '#0f172a',
        subtitleColor: '#475569',
        logoTextColor: '#1e293b',
        urlColor: '#94a3b8',
        decorationOpacity: '15'
    },
    art: {
        gradient: 'linear-gradient(135deg, #fffbf5 0%, #ffedd5 100%)',
        accent: '#F86825',
        badge: 'Data Art Lab',
        titleColor: '#0f172a',
        subtitleColor: '#475569',
        logoTextColor: '#1e293b',
        urlColor: '#94a3b8',
        decorationOpacity: '15'
    }
};

function getTheme(category, light) {
    const themes = light ? THEMES_LIGHT : THEMES_DARK;
    return themes[category] || themes.tech;
}

function parseArgs(args) {
    let category = 'tech';
    let light = false;
    let title = '';
    let subtitle = '';
    let output = '';

    const filtered = [];
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--category' && args[i + 1]) {
            category = args[++i];
        } else if (args[i] === '--light') {
            light = true;
        } else {
            filtered.push(args[i]);
        }
    }

    if (filtered.length === 2) {
        [title, output] = filtered;
    } else if (filtered.length === 3) {
        [title, subtitle, output] = filtered;
    } else {
        console.error('Usage: generate-og-image.js [--category tech|business|story] [--light] "제목" ["부제목"] output.png');
        process.exit(1);
    }

    return { category, title, subtitle, output, light };
}

function generatePebbles(title, accent, opacity) {
    // Simple hash from title for consistent but "random" pebbles
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
        hash = ((hash << 5) - hash) + title.charCodeAt(i);
        hash |= 0;
    }
    const seed = (n) => {
        hash = (hash * 1103515245 + 12345) & 0x7fffffff;
        return hash % n;
    };

    const pebbles = [];
    const count = 4 + seed(3); // 4~6 pebbles
    for (let i = 0; i < count; i++) {
        const size = 50 + seed(180); // 50~230px
        const right = -20 + seed(350); // -20~330px from right
        const top = 20 + seed(500); // 20~520px from top
        const op = (6 + seed(12)) / 100; // 0.06~0.18 opacity
        // Irregular but convex border-radius (pebble-like)
        const r1 = 40 + seed(20); // 40~60%
        const r2 = 40 + seed(20);
        const r3 = 40 + seed(20);
        const r4 = 40 + seed(20);
        const r5 = 40 + seed(20);
        const r6 = 40 + seed(20);
        const r7 = 40 + seed(20);
        const r8 = 40 + seed(20);
        pebbles.push(`<div style="position:absolute;right:${right}px;top:${top}px;width:${size}px;height:${size * (0.8 + seed(40)/100)}px;background:${accent};opacity:${op};border-radius:${r1}% ${r2}% ${r3}% ${r4}% / ${r5}% ${r6}% ${r7}% ${r8}%;"></div>`);
    }
    return pebbles.join('\n        ');
}

function generateHTML(title, subtitle, theme, logoPath) {
    // Handle manual line breaks first
    let displayTitle = title.replace(/\n/g, '<br>');

    // Split long titles (only if no manual breaks)
    const maxCharsPerLine = 30;
    if (!title.includes('\n') && title.length > maxCharsPerLine) {
        const words = title.split(' ');
        let lines = [];
        let currentLine = '';

        for (const word of words) {
            if ((currentLine + ' ' + word).trim().length <= maxCharsPerLine) {
                currentLine = (currentLine + ' ' + word).trim();
            } else {
                if (currentLine) lines.push(currentLine);
                currentLine = word;
            }
        }
        if (currentLine) lines.push(currentLine);
        displayTitle = lines.join('<br>');
    }

    const pebbleHTML = generatePebbles(title, theme.accent, theme.decorationOpacity);
    const sectionBar = theme.sectionBar
        ? `<div style="position:absolute;top:0;left:0;right:0;height:6px;background:${theme.accent};"></div>`
        : '';

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            width: 1200px;
            height: 630px;
            font-family: 'Pretendard', -apple-system, sans-serif;
        }

        .container {
            width: 100%;
            height: 100%;
            background: ${theme.gradient};
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 60px;
            position: relative;
            overflow: hidden;
        }

        .badge {
            display: inline-block;
            background: ${theme.accent};
            color: white;
            font-size: 18px;
            font-weight: 600;
            padding: 8px 20px;
            border-radius: 20px;
            letter-spacing: 1px;
        }

        .content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .title {
            color: ${theme.titleColor};
            font-size: 56px;
            font-weight: 800;
            line-height: 1.3;
            margin-bottom: 20px;
        }

        .title span {
            color: ${theme.accent};
        }

        .subtitle {
            color: ${theme.subtitleColor};
            font-size: 28px;
            font-weight: 400;
            line-height: 1.5;
        }

        .footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .logo img {
            height: 48px;
            width: auto;
        }

        .logo-text {
            color: ${theme.logoTextColor};
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }

        .url {
            color: ${theme.urlColor};
            font-size: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        ${sectionBar}
        ${pebbleHTML}

        <div class="badge">${theme.badge}</div>

        <div class="content">
            <h1 class="title">${displayTitle}</h1>
            ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ''}
        </div>

        <div class="footer">
            <div class="logo">
                <img src="${logoPath}" alt="Pebblous">
            </div>
            <span class="url">blog.pebblous.ai</span>
        </div>
    </div>
</body>
</html>
    `;
}

async function generateOGImage(title, subtitle, outputPath, category, projectRoot, light = false) {
    const theme = getTheme(category, light);

    // Read logo as base64 to avoid file path issues
    const logoFile = path.join(projectRoot, 'image', 'Pebblous_BM_Orange_RGB.png');
    const logoBase64 = fs.readFileSync(logoFile).toString('base64');
    const logoDataUri = `data:image/png;base64,${logoBase64}`;

    const html = generateHTML(title, subtitle, theme, logoDataUri);

    console.log(`Generating OG image...`);
    console.log(`  Title: ${title}`);
    console.log(`  Subtitle: ${subtitle || '(none)'}`);
    console.log(`  Category: ${category}`);
    console.log(`  Theme: ${light ? 'light' : 'dark'}`);
    console.log(`  Output: ${outputPath}`);

    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1200, height: 630 });
        await page.setContent(html, { waitUntil: 'networkidle0' });

        // Wait for fonts to load
        await page.evaluate(() => document.fonts.ready);
        await new Promise(resolve => setTimeout(resolve, 500));

        // Ensure output directory exists
        const outputDir = path.dirname(outputPath);
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir, { recursive: true });
        }

        await page.screenshot({
            path: outputPath,
            type: 'png'
        });

        console.log(`\n✅ OG image generated: ${outputPath}`);

        // Get file size
        const stats = fs.statSync(outputPath);
        console.log(`   Size: ${Math.round(stats.size / 1024)}KB`);

    } finally {
        await browser.close();
    }
}

// Extract info from HTML file with articles.json fallback
function extractFromHTML(htmlPath, projectRoot) {
    const htmlContent = fs.readFileSync(htmlPath, 'utf-8');
    const relativePath = path.relative(projectRoot, htmlPath);

    // Load articles.json for fallback data
    let articleData = null;
    const articlesPath = path.join(projectRoot, 'articles.json');
    if (fs.existsSync(articlesPath)) {
        const data = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));
        // Match by exact path, or path with/without index.html, or directory path
        const relativeDir = path.dirname(relativePath) + '/';
        articleData = data.articles?.find(a =>
            a.path === relativePath ||
            a.path === relativeDir ||
            a.path + 'index.html' === relativePath
        );
    }

    // Extract title: og-image-title (manual override) → og:title → <title> → articles.json → <h1>
    let title = '';
    const ogImageTitleMatch = htmlContent.match(/<meta\s+name="og-image-title"\s+content="([^"]+)"/i);
    if (ogImageTitleMatch) {
        // Decode &#10; → \n for manual line break control
        title = ogImageTitleMatch[1].replace(/&#10;/g, '\n');
        console.log(`  [og-image-title] Using custom OG image title`);
    }
    const ogTitleMatch = htmlContent.match(/<meta\s+property="og:title"\s+content="([^"]+)"/i);
    if (!title && ogTitleMatch) {
        title = ogTitleMatch[1];
    } else if (!title) {
        const titleMatch = htmlContent.match(/<title>([^<]+)<\/title>/i);
        if (titleMatch) {
            title = titleMatch[1];
        }
    }
    // Clean up title: remove site name suffixes
    title = title.replace(/\s*[|\-–—]\s*(Pebblous|Data Greenhouse|페블러스).*$/i, '').trim();

    // Fallback to articles.json title
    if (!title && articleData?.title) {
        title = articleData.title;
        console.log(`  [fallback] Using title from articles.json`);
    }

    // Fallback to first <h1>
    if (!title) {
        const h1Match = htmlContent.match(/<h1[^>]*>([^<]+)<\/h1>/i);
        if (h1Match) {
            title = h1Match[1].trim();
            console.log(`  [fallback] Using title from <h1>`);
        }
    }

    // Extract subtitle: og:description → meta description → articles.json
    let subtitle = '';
    const ogDescMatch = htmlContent.match(/<meta\s+property="og:description"\s+content="([^"]+)"/i);
    if (ogDescMatch) {
        subtitle = ogDescMatch[1];
    } else {
        const metaDescMatch = htmlContent.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
        if (metaDescMatch) {
            subtitle = metaDescMatch[1];
        }
    }

    // Fallback to articles.json description
    if (!subtitle && articleData?.description) {
        subtitle = articleData.description;
        console.log(`  [fallback] Using description from articles.json`);
    }

    // Truncate if too long
    if (subtitle && subtitle.length > 80) {
        subtitle = subtitle.substring(0, 77) + '...';
    }

    // Determine category: articles.json is authoritative, path-based is fallback only
    let category = 'tech';
    if (articleData?.category) {
        category = articleData.category;
    } else {
        // Fallback: detect from path only when not in articles.json
        if (htmlPath.includes('/report/') || htmlPath.includes('market') || htmlPath.includes('business')) {
            category = 'business';
        } else if (htmlPath.includes('/story/') || htmlPath.includes('review')) {
            category = 'story';
        }
        console.log(`  [fallback] Category detected from path: ${category}`);
    }

    // Detect light theme from HTML data-theme attribute
    const themeMatch = htmlContent.match(/data-theme="(\w+)"/);
    const light = themeMatch ? themeMatch[1] === 'light' : false;

    // Determine output path: same folder as HTML, in image/ subfolder
    const htmlDir = path.dirname(htmlPath);
    const htmlName = path.basename(htmlPath, '.html');
    const outputPath = path.join(htmlDir, 'image', `${htmlName}.png`);

    return { title, subtitle, category, output: outputPath, light };
}

// Main
const args = process.argv.slice(2);

// Check for --from-html mode
const fromHtmlIndex = args.indexOf('--from-html');
const forceIndex = args.indexOf('--force');
const force = forceIndex !== -1;

if (fromHtmlIndex !== -1 && args[fromHtmlIndex + 1]) {
    // --from-html mode
    const htmlPath = path.resolve(args[fromHtmlIndex + 1]);
    const projectRoot = path.resolve(__dirname, '..');

    if (!fs.existsSync(htmlPath)) {
        console.error(`❌ HTML file not found: ${htmlPath}`);
        process.exit(1);
    }

    const lightFlag = args.indexOf('--light') !== -1;
    const { title, subtitle, category, output, light: autoLight } = extractFromHTML(htmlPath, projectRoot);
    const useLight = lightFlag || autoLight;

    if (!title) {
        console.error('❌ Could not extract title from HTML');
        process.exit(1);
    }

    // Check if image already exists
    if (fs.existsSync(output) && !force) {
        console.log(`⏭️  OG image already exists: ${output}`);
        console.log('   Use --force to regenerate');
        process.exit(0);
    }

    generateOGImage(title, subtitle, output, category, projectRoot, useLight).catch(console.error);

} else if (args.length < 2) {
    console.log(`
OG Image Generator for Pebblous Blog

Usage:
  node tools/generate-og-image.js "제목" output.png
  node tools/generate-og-image.js "제목" "부제목" output.png
  node tools/generate-og-image.js --category business "제목" output.png
  node tools/generate-og-image.js --from-html path/to/post.html
  node tools/generate-og-image.js --from-html path/to/post.html --force

Categories:
  tech     - Blue theme (default)
  business - Orange theme
  story    - Teal theme
  art      - Orange/warm theme (Data Art Lab)

Options:
  --from-html  Extract title/category from HTML file automatically
  --force      Regenerate even if image already exists
  --light      Use light background (auto-detected from data-theme="light" in --from-html mode)

Examples:
  node tools/generate-og-image.js "Data Greenhouse 전략" project/DataGreenhouse/image/og.png
  node tools/generate-og-image.js --category business "시장 분석" "가트너 AI 검증" output.png
  node tools/generate-og-image.js --light "제목" output.png
  node tools/generate-og-image.js --from-html project/DataGreenhouse/data-greenhouse-strategy.html
    `);
    process.exit(0);
} else {
    // Manual mode
    const { category, title, subtitle, output, light } = parseArgs(args);
    const projectRoot = path.resolve(__dirname, '..');
    generateOGImage(title, subtitle, output, category, projectRoot, light).catch(console.error);
}
