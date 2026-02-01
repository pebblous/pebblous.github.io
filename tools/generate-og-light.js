const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const LIGHT_THEMES = {
    tech: {
        gradient: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
        accent: '#3B82F6',
        accentGradient: 'linear-gradient(90deg, #3B82F6, #14B8A6)',
        badge: 'Tech',
        titleColor: '#0f172a',
        subtitleColor: '#475569',
        urlColor: '#64748b'
    },
    business: {
        gradient: 'linear-gradient(135deg, #ffffff 0%, #fff7ed 100%)',
        accent: '#F86825',
        accentGradient: 'linear-gradient(90deg, #F86825, #f97316)',
        badge: 'Business',
        titleColor: '#0f172a',
        subtitleColor: '#475569',
        urlColor: '#64748b'
    },
    story: {
        gradient: 'linear-gradient(135deg, #ffffff 0%, #f0fdfa 100%)',
        accent: '#14B8A6',
        accentGradient: 'linear-gradient(90deg, #14B8A6, #0d9488)',
        badge: 'Story',
        titleColor: '#0f172a',
        subtitleColor: '#475569',
        urlColor: '#64748b'
    }
};

function generateHTML(title, subtitle, theme, logoPath) {
    let displayTitle = title.replace(/\n/g, '<br>');
    const maxCharsPerLine = 20;
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

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { width: 1200px; height: 630px; font-family: 'Pretendard', -apple-system, sans-serif; }
        .container {
            width: 100%;
            height: 100%;
            background: ${theme.gradient};
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 60px;
            padding-left: 80px;
            position: relative;
            overflow: hidden;
        }
        /* Top accent bar */
        .top-bar {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 6px;
            background: ${theme.accentGradient};
        }
        /* Left accent line */
        .left-line {
            position: absolute;
            left: 0;
            top: 60px;
            bottom: 60px;
            width: 6px;
            background: ${theme.accentGradient};
            border-radius: 0 3px 3px 0;
        }
        .badge {
            display: inline-block;
            background: ${theme.accent};
            color: white;
            font-size: 16px;
            font-weight: 600;
            padding: 8px 20px;
            border-radius: 20px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
        .content { flex: 1; display: flex; flex-direction: column; justify-content: center; }
        .title {
            color: ${theme.titleColor};
            font-size: 54px;
            font-weight: 800;
            line-height: 1.3;
            margin-bottom: 20px;
        }
        .subtitle {
            color: ${theme.subtitleColor};
            font-size: 26px;
            font-weight: 400;
            line-height: 1.5;
            max-width: 900px;
        }
        .footer { display: flex; align-items: center; justify-content: space-between; }
        .logo { display: flex; align-items: center; gap: 16px; }
        .logo img { height: 44px; width: auto; }
        .url { color: ${theme.urlColor}; font-size: 18px; font-weight: 500; }
        /* Decorative circles */
        .decoration-1 {
            position: absolute;
            right: -50px;
            top: -50px;
            width: 250px;
            height: 250px;
            background: radial-gradient(circle, ${theme.accent}12 0%, transparent 70%);
            border-radius: 50%;
        }
        .decoration-2 {
            position: absolute;
            right: 100px;
            bottom: -80px;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, ${theme.accent}08 0%, transparent 70%);
            border-radius: 50%;
        }
        .decoration-3 {
            position: absolute;
            right: 60px;
            top: 50%;
            transform: translateY(-50%);
            width: 200px;
            height: 200px;
            border: 2px solid ${theme.accent}20;
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="top-bar"></div>
        <div class="left-line"></div>
        <div class="decoration-1"></div>
        <div class="decoration-2"></div>
        <div class="decoration-3"></div>
        <div class="badge">${theme.badge}</div>
        <div class="content">
            <h1 class="title">${displayTitle}</h1>
            ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ''}
        </div>
        <div class="footer">
            <div class="logo"><img src="${logoPath}" alt="Pebblous"></div>
            <span class="url">blog.pebblous.ai</span>
        </div>
    </div>
</body>
</html>`;
}

async function main() {
    const projectRoot = '/Users/joohaeng/BeerGraph Dropbox/Joo-Haeng Lee/Dev/github/pebblous.github.io';
    const theme = LIGHT_THEMES.tech;
    const title = '뉴로-심볼릭 AI: 엔터프라이즈 인텔리전스를 위한 코그니티브 데이터 아키텍처';
    const subtitle = '딥러닝과 상징적 추론을 통합하는 뉴로-심볼릭 AI의 역사, 현재, 미래를 분석합니다. 차세대 엔터프라이즈 AI 아키텍처의 방향성을 제시합니다.';
    const outputPath = '/tmp/og-light-preview.png';

    const logoFile = path.join(projectRoot, 'image', 'Pebblous_BM_Orange_RGB.png');
    const logoBase64 = fs.readFileSync(logoFile).toString('base64');
    const logoDataUri = `data:image/png;base64,${logoBase64}`;

    const html = generateHTML(title, subtitle, theme, logoDataUri);

    const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 630 });
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.evaluate(() => document.fonts.ready);
    await new Promise(resolve => setTimeout(resolve, 500));
    await page.screenshot({ path: outputPath, type: 'png' });
    await browser.close();

    console.log('Light theme preview generated:', outputPath);
}

main().catch(console.error);
