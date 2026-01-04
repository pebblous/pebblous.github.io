#!/usr/bin/env node
/**
 * OG Image Generator for Pebblous Blog
 *
 * Usage:
 *   node tools/generate-og-image.js "제목" "부제목" output.png
 *   node tools/generate-og-image.js "제목" output.png              # 부제목 없이
 *   node tools/generate-og-image.js --category business "제목" output.png
 *
 * Options:
 *   --category  tech|business|story (default: tech)
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

// Category color themes
const THEMES = {
    tech: {
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        accent: '#3B82F6',
        badge: 'Tech'
    },
    business: {
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #2d1810 100%)',
        accent: '#F86825',
        badge: 'Business'
    },
    story: {
        gradient: 'linear-gradient(135deg, #1a1a2e 0%, #0d2818 100%)',
        accent: '#14B8A6',
        badge: 'Story'
    }
};

function parseArgs(args) {
    let category = 'tech';
    let title = '';
    let subtitle = '';
    let output = '';

    const filtered = [];
    for (let i = 0; i < args.length; i++) {
        if (args[i] === '--category' && args[i + 1]) {
            category = args[++i];
        } else {
            filtered.push(args[i]);
        }
    }

    if (filtered.length === 2) {
        [title, output] = filtered;
    } else if (filtered.length === 3) {
        [title, subtitle, output] = filtered;
    } else {
        console.error('Usage: generate-og-image.js [--category tech|business|story] "제목" ["부제목"] output.png');
        process.exit(1);
    }

    return { category, title, subtitle, output };
}

function generateHTML(title, subtitle, theme, logoPath) {
    // Split long titles
    const maxCharsPerLine = 20;
    let displayTitle = title;
    if (title.length > maxCharsPerLine) {
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
            color: white;
            font-size: 56px;
            font-weight: 800;
            line-height: 1.3;
            margin-bottom: 20px;
        }

        .title span {
            color: ${theme.accent};
        }

        .subtitle {
            color: #94a3b8;
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
            color: white;
            font-size: 28px;
            font-weight: 700;
            letter-spacing: -0.5px;
        }

        .url {
            color: #64748b;
            font-size: 20px;
        }

        /* Decorative elements */
        .decoration {
            position: absolute;
            right: 60px;
            top: 50%;
            transform: translateY(-50%);
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, ${theme.accent}20 0%, transparent 70%);
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="decoration"></div>

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

async function generateOGImage(title, subtitle, outputPath, category, projectRoot) {
    const theme = THEMES[category] || THEMES.tech;

    // Read logo as base64 to avoid file path issues
    const logoFile = path.join(projectRoot, 'image', 'Pebblous_BM_Orange_RGB.png');
    const logoBase64 = fs.readFileSync(logoFile).toString('base64');
    const logoDataUri = `data:image/png;base64,${logoBase64}`;

    const html = generateHTML(title, subtitle, theme, logoDataUri);

    console.log(`Generating OG image...`);
    console.log(`  Title: ${title}`);
    console.log(`  Subtitle: ${subtitle || '(none)'}`);
    console.log(`  Category: ${category}`);
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

// Main
const args = process.argv.slice(2);
if (args.length < 2) {
    console.log(`
OG Image Generator for Pebblous Blog

Usage:
  node tools/generate-og-image.js "제목" output.png
  node tools/generate-og-image.js "제목" "부제목" output.png
  node tools/generate-og-image.js --category business "제목" output.png

Categories:
  tech     - Blue theme (default)
  business - Orange theme
  story    - Teal theme

Examples:
  node tools/generate-og-image.js "Data Greenhouse 전략" project/DataGreenhouse/image/og.png
  node tools/generate-og-image.js --category business "시장 분석" "가트너 AI 검증" output.png
    `);
    process.exit(0);
}

const { category, title, subtitle, output } = parseArgs(args);
const projectRoot = path.resolve(__dirname, '..');
generateOGImage(title, subtitle, output, category, projectRoot).catch(console.error);
