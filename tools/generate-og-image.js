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

// Category themes — Pebblous 디자인 토큰만 사용 (오렌지 단일 accent·플랫 배경·중립 텍스트).
// ⛔ 파랑·틸·그라데이션 금지(2026-07-01 교정: 옛 tech=#3B82F6 파랑, story=#14B8A6 틸, gradient 제거).
const ACCENT = '#F86825';
const THEMES_DARK = {
    tech:     { gradient: '#171719', accent: ACCENT, badge: 'Tech Insight',     titleColor: '#FFFFFF', subtitleColor: '#A9A9AD', logoTextColor: '#FFFFFF', urlColor: '#808080', decorationOpacity: '20' },
    business: { gradient: '#171719', accent: ACCENT, badge: 'Business Insight', titleColor: '#FFFFFF', subtitleColor: '#A9A9AD', logoTextColor: '#FFFFFF', urlColor: '#808080', decorationOpacity: '20' },
    story:    { gradient: '#171719', accent: ACCENT, badge: 'Data Story',       titleColor: '#FFFFFF', subtitleColor: '#A9A9AD', logoTextColor: '#FFFFFF', urlColor: '#808080', decorationOpacity: '20' },
    art:      { gradient: '#171719', accent: ACCENT, badge: 'Data Art Lab',     titleColor: '#FFFFFF', subtitleColor: '#A9A9AD', logoTextColor: '#FFFFFF', urlColor: '#808080', decorationOpacity: '20' }
};

const THEMES_LIGHT = {
    tech:     { gradient: '#FFFFFF', accent: ACCENT, badge: 'Tech Insight',     titleColor: '#171719', subtitleColor: '#808080', logoTextColor: '#171719', urlColor: '#808080', decorationOpacity: '15' },
    business: { gradient: '#FFFFFF', accent: ACCENT, badge: 'Business Insight', titleColor: '#171719', subtitleColor: '#808080', logoTextColor: '#171719', urlColor: '#808080', decorationOpacity: '12' },
    story:    { gradient: '#FFFFFF', accent: ACCENT, badge: 'Data Story',       titleColor: '#171719', subtitleColor: '#808080', logoTextColor: '#171719', urlColor: '#808080', decorationOpacity: '15' },
    art:      { gradient: '#FFFFFF', accent: ACCENT, badge: 'Data Art Lab',     titleColor: '#171719', subtitleColor: '#808080', logoTextColor: '#171719', urlColor: '#808080', decorationOpacity: '15' }
};

function getTheme(category, light) {
    const themes = light ? THEMES_LIGHT : THEMES_DARK;
    return { ...(themes[category] || themes.tech), light };
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

// 정품 조약돌 SVG (디자인 시스템 assets/pebble → tools/assets/pebbles) 로드·캐시
let _pebbleShapes = null;
function loadPebbleShapes() {
    if (_pebbleShapes) return _pebbleShapes;
    const dir = path.join(__dirname, 'assets', 'pebbles');
    const out = [];
    for (const n of [1, 2, 3, 5]) { // 둥글고 귀여운 조약돌만 (4·6·7 각짐 제외)
        try {
            const svg = fs.readFileSync(path.join(dir, `Pebble-${n}.svg`), 'utf-8');
            const vb = svg.match(/viewBox="([^"]+)"/);
            const d = svg.match(/<path[^>]*\sd="([^"]+)"/);
            if (vb && d) out.push({ viewBox: vb[1], d: d[1] });
        } catch { /* asset 없으면 건너뜀 */ }
    }
    _pebbleShapes = out;
    return out;
}

/**
 * 매끈한 조약돌(블롭) path 생성 — 원 둘레의 점들을 catmull-rom→베지어로 이어 부드러운 곡선.
 * 다각형(공식 SVG)의 각진 면 없이, 크게 써도 매끈한 유기적 형태. viewBox 0 0 200 200.
 */
function smoothBlobPath(seed) {
    const cx = 100, cy = 100, R = 84;
    const n = 6 + seed(3);                 // 6~8 꼭짓점
    const pts = [];
    for (let i = 0; i < n; i++) {
        const ang = (i / n) * Math.PI * 2 + (seed(24) - 12) / 100; // 각도 살짝 흔들기
        const rr = R * (0.80 + seed(34) / 100);                    // 반지름 0.80~1.14 변주
        pts.push([cx + Math.cos(ang) * rr, cy + Math.sin(ang) * rr]);
    }
    const P = (i) => pts[((i % n) + n) % n];
    const f = (v) => v.toFixed(1);
    let d = `M${f(P(0)[0])},${f(P(0)[1])}`;
    for (let i = 0; i < n; i++) {
        const p0 = P(i - 1), p1 = P(i), p2 = P(i + 1), p3 = P(i + 2);
        const c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
        const c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
        d += ` C${f(c1x)},${f(c1y)} ${f(c2x)},${f(c2y)} ${f(p2[0])},${f(p2[1])}`;
    }
    return d + 'Z';
}

/**
 * 우하단에 매끈한 조약돌(블롭) 2~3개를 정돈되게 겹침. 반투명 주황 → 겹침이 부드럽게 깊어짐.
 * 제목 해시로 시드 → 글마다 다른 조약돌.
 */
function generatePebbles(title, isLight) {
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
        hash = ((hash << 5) - hash) + title.charCodeAt(i);
        hash |= 0;
    }
    const seed = (n) => {
        hash = (hash * 1103515245 + 12345) & 0x7fffffff;
        return hash % n;
    };

    // 매끈한 블롭 여러 개를 반투명 주황으로 우하단에 부드럽게 겹침 → airy·소프트, 겹침이 자연스레 깊어짐
    const tones = ['#F86825', '#F86825', '#C64900', '#FFA24E']; // 기본 위주 + 딥·라이트
    const blend = isLight ? 'multiply' : 'normal'; // 라이트: 겹치는 곳이 진해짐
    const count = 3;                        // 딱 3개
    const focalRight = -70 - seed(120);     // 오른쪽으로 크게 bleed (본문과 안 겹침)
    const topBase = 120 + seed(70);         // 시작 높이(url 아래) — 위로 올려 오른쪽을 세로로 채움
    const vgap = 135 + seed(50);            // 세로 간격(서로 겹치게)
    const items = [];
    for (let i = 0; i < count; i++) {
        const d = smoothBlobPath(seed);
        const size = 220 + seed(220);              // 220~440px
        const right = focalRight + (-30 + seed(100));
        const top = topBase + i * vgap + (seed(60) - 30);  // 위→아래로 오른쪽을 채우며 겹침
        const rot = seed(360);                     // 자유 회전(매끈 블롭이라 자연스러움)
        const tone = tones[seed(tones.length)];
        const op = (44 + seed(36)) / 100;          // 0.44~0.80 반투명
        items.push(
            `<div style="position:absolute;right:${right}px;top:${top}px;width:${size}px;height:${size}px;transform:rotate(${rot}deg);opacity:${op};mix-blend-mode:${blend};">` +
            `<svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><path d="${d}" fill="${tone}"/></svg>` +
            `</div>`
        );
    }
    return items.join('\n        ');
}

// Split words into 2 balanced lines (minimize length difference)
function balancedSplit(words) {
    const full = words.join(' ');
    const target = Math.ceil(full.length / 2);
    let bestSplit = 1;
    let bestDiff = Infinity;

    for (let i = 1; i < words.length; i++) {
        const line1 = words.slice(0, i).join(' ');
        const line2 = words.slice(i).join(' ');
        const diff = Math.abs(line1.length - line2.length);
        if (diff < bestDiff) {
            bestDiff = diff;
            bestSplit = i;
        }
    }

    return words.slice(0, bestSplit).join(' ') + '<br>' + words.slice(bestSplit).join(' ');
}

// Calculate font size to fit title in max 2 lines
// OG image: 1200px wide, 60px padding each side = 1080px content
// At 56px font, ~25 English chars or ~20 Korean chars per line
function calcTitleFontSize(title) {
    // 한 글자의 대략적 폭(폰트크기 대비): 한글 1.0em, 영문/숫자 0.60em(TT Firs Neue 볼드),
    // 공백 0.30em, 기타 0.55em. 어절(단어) 단위 픽셀 폭.
    function wordPx(w, F) {
        let u = 0;
        for (const c of w) {
            if (/[\uac00-\ud7af\u3000-\u9fff\u3040-\u30ff]/.test(c)) u += 1.0;
            else if (/[A-Za-z0-9]/.test(c)) u += 0.60;
            else u += 0.55;
        }
        return u * F;
    }

    // 수동 <br>/\n·nbsp를 공백으로 펴서 어절로 나눔. 수동 줄 수는 하한으로 존중.
    const plain = title.replace(/<br\s*\/?>/gi, ' ').replace(/\n/g, ' ').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim();
    const forced = title.replace(/\n/g, '<br>').split(/<br\s*\/?>/i).length;
    const words = plain.split(' ').filter(Boolean);

    // 유튜브 커버처럼 큼직하게: 폰트는 크게 고정(76)하고 길이는 "줄 수"로 흡수.
    // 줄 수는 어절을 720px 폭에 greedy 패킹해 실제 줄바꿈(및 text-wrap:balance의 최소 줄 수)과
    // 일치시킨다 — 긴 단어(예: "Colonization")를 무시하던 총량-추정 버그를 없앤다. 넘칠 때만 축소.
    const AVAIL = 720, SPACE = 0.30, LH = 1.3, HBUD = 250, MAXF = 76, MINF = 40;
    for (let F = MAXF; F >= MINF; F -= 2) {
        let lines = 1, cur = 0;
        for (const w of words) {
            const ww = wordPx(w, F);
            const add = cur > 0 ? SPACE * F + ww : ww;
            if (cur > 0 && cur + add > AVAIL) { lines++; cur = ww; }
            else cur += add;
        }
        lines = Math.max(lines, forced);
        if (lines * F * LH <= HBUD) return F;
    }
    return MINF;
}
// 부제를 2줄 한도에서 문장/문구 경계로 깔끔히 끝낸다(단어 중간 절단 방지).
// 문장 종결(마침표·물음표·느낌표)로 끝나면 말줄임표 없이, 아니면 절/어절 경계 + "…".
function fitSubtitle(s) {
    if (!s) return '';
    s = s.replace(/\s+/g, ' ').trim();
    const AVAIL = 720, LINES = 2;
    // em-폭 근사: 한글 1.0 · 영문/기호 0.5 · 공백 0.3 (Pretendard 본문 28px)
    const ulen = str => { let l = 0; for (const c of str) l += (c === ' ' || c === ' ') ? 0.3 : (/[가-힣ぁ-ヿ一-鿿]/.test(c) ? 1.0 : 0.5); return l; };
    const budget = (AVAIL / 27) * LINES;   // ≈ 53 단위(2줄)
    if (ulen(s) <= budget) return s;       // 통째로 2줄 안에 들어감
    // 말줄임표 자리(1.2) 남기고 예산 안 최장 prefix
    let cut = s.length;
    while (cut > 0 && ulen(s.slice(0, cut)) > budget - 1.2) cut--;
    const head = s.slice(0, cut);
    // 1) 문장 종결부호가 예산 내 있으면 거기까지 — 완결 문장이라 말줄임표 없음
    let end = -1;
    for (let i = 0; i < head.length; i++) if ('.!?…。'.includes(head[i])) end = i;
    if (end >= 0 && ulen(head.slice(0, end + 1)) >= budget * 0.5) return head.slice(0, end + 1).trim();
    // 2) 절 경계(쉼표·가운뎃점·세미콜론·콜론·줄표)까지 + "…"
    let cl = -1;
    for (let i = 0; i < head.length; i++) if (',、·;:—'.includes(head[i])) cl = i;
    if (cl >= 0 && ulen(head.slice(0, cl)) >= budget * 0.4) return head.slice(0, cl).replace(/[\s,、·;:—]+$/, '').trim() + '…';
    // 3) 마지막 어절(공백) 경계 + "…"
    const sp = head.lastIndexOf(' ');
    return (sp > 0 ? head.slice(0, sp) : head).trim() + '…';
}

function getFontFaces(projectRoot) {
    const fontsDir = path.join(projectRoot, 'tools', 'fonts');
    const weights = [
        { weight: 900, file: 'Pretendard-Black.woff2' },
        { weight: 800, file: 'Pretendard-ExtraBold.woff2' },
        { weight: 700, file: 'Pretendard-Bold.woff2' },
        { weight: 600, file: 'Pretendard-SemiBold.woff2' },
        { weight: 400, file: 'Pretendard-Regular.woff2' },
    ];

    const faces = weights.map(({ weight, file }) => {
        const fontPath = path.join(fontsDir, file);
        if (fs.existsSync(fontPath)) {
            const b64 = fs.readFileSync(fontPath).toString('base64');
            return `@font-face { font-family: 'Pretendard'; font-weight: ${weight}; font-display: block; src: url('data:font/woff2;base64,${b64}') format('woff2'); }`;
        }
        return '';
    }).filter(Boolean);

    // TT Firs Neue (영문 디스플레이/강조) — 브랜드 폰트(가변 OTF). 한글은 Pretendard로 폴백.
    const firsPath = path.join(fontsDir, 'TT-Firs-Neue-Variable.otf');
    if (fs.existsSync(firsPath)) {
        const b64 = fs.readFileSync(firsPath).toString('base64');
        faces.push(`@font-face { font-family: 'TT Firs Neue'; font-weight: 100 900; font-display: block; src: url('data:font/otf;base64,${b64}') format('opentype'); }`);
    }
    return faces.join('\n        ');
}

function generateHTML(title, subtitle, theme, logoPath, fontFaces) {
    // 합성어 하이픈("AI-레디"·"GPT-4"·"AI-Ready")은 줄바꿈에서 안 쪼개지게
    // 한글이 붙은 하이픈만 비분리(U+2011)로("AI-레디"). 영어 하이픈·긴 합성어는 유지.
    const nbHyphen = (x) => (x || "").replace(/(\S)-(\S)/g, (m,a,b) => (/[가-힣]/.test(a) || /[가-힣]/.test(b)) ? a+"\u2011"+b : m);
    title = nbHyphen(title);
    subtitle = nbHyphen(subtitle);
    // 괄호 묶음 "(AI BOM)"·"（…）"은 줄바꿈에서 절대 안 쪼개지게 내부 공백을 nbsp로 보호
    title = title.replace(/[（(]([^）)]*)[）)]/g, (m) => m.replace(/ /g, '\u00A0'));

    // 수동 줄바꿈만 존중(og-image-title의 \n). 그 외 줄나눔은 브라우저의
    // text-wrap: balance 가 균형 있게 처리 — 수동 분할이 폰트 크기와 어긋나
    // 4줄 넘침을 일으키던 문제를 없앤다.
    let displayTitle = title.replace(/\n/g, '<br>');

    // 부제는 2줄 한도에서 문장/문구 경계로 깔끔히 끝낸다(단어 중간 절단 방지)
    subtitle = fitSubtitle(subtitle);

    const titleFontSize = calcTitleFontSize(displayTitle);
    // 영문(TT Firs Neue)은 줄간격이 넓어 보여 타이트하게, 한글은 넉넉히 유지
    const cjkCount = (displayTitle.match(/[가-힯　-鿿]/g) || []).length;
    const latinCount = (displayTitle.match(/[A-Za-z]/g) || []).length;
    const isEnglish = cjkCount === 0 || latinCount > cjkCount * 2;
    const titleLineHeight = isEnglish ? 1.14 : (titleFontSize <= 44 ? 1.35 : 1.3);

    const pebbleHTML = generatePebbles(title, theme.light);
    const sectionBar = theme.sectionBar
        ? `<div style="position:absolute;top:0;left:0;right:0;height:6px;background:${theme.accent};"></div>`
        : '';

    return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        ${fontFaces}

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

        .topbar {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: relative;
            z-index: 2;
        }

        .badge {
            display: inline-block;
            background: ${theme.accent};
            color: white;
            font-family: 'TT Firs Neue', 'Pretendard', sans-serif;
            font-size: 18px;
            font-weight: 700;
            padding: 8px 20px;
            border-radius: 20px;
            letter-spacing: 1px;
        }

        .content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;   /* 중앙정렬 아님 — 배지에서 고정 간격 아래 */
            padding-top: 64px;             /* 섹션명(배지)과 제목 사이 고정 간격 */
            max-width: 720px;              /* 제목/부제는 왼쪽에 머문다 — 우하단 조약돌 칸 침범 방지 */
            position: relative;
            z-index: 2;
        }

        .title {
            color: ${theme.titleColor};
            font-family: 'TT Firs Neue', 'Pretendard', -apple-system, sans-serif;
            font-size: ${titleFontSize}px;
            font-weight: 800;
            line-height: ${titleLineHeight};
            margin-bottom: 20px;
            word-break: keep-all;   /* 한글 낱말 중간 안 끊김 + 영문 단어 보존 */
            overflow-wrap: break-word;
            text-wrap: balance;     /* 브라우저가 줄을 균형 있게 나눔(수동 분할 대체) */
        }

        .title span {
            color: ${theme.accent};
        }

        .subtitle {
            color: ${theme.subtitleColor};
            font-size: 28px;
            font-weight: 400;
            line-height: 1.5;
            word-break: keep-all;   /* 부제도 한글 낱말 안 끊기게(제목과 동일) */
            overflow-wrap: break-word;
            display: -webkit-box;
            -webkit-line-clamp: 2;      /* 2줄 안전망 — fitSubtitle이 이미 문구 경계로 자름 */
            -webkit-box-orient: vertical;
            overflow: hidden;
            border-left: 4px solid ${theme.accent};   /* 부제 앞 주황 세로 바 (복구 2026-07-12) */
            padding-left: 20px;
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

        <div class="topbar">
            <div class="badge">${theme.badge}</div>
            <span class="url">blog.pebblous.ai</span>
        </div>

        <div class="content">
            <h1 class="title">${displayTitle}</h1>
            ${subtitle ? `<p class="subtitle">${subtitle}</p>` : ''}
        </div>

        <div class="footer">
            <div class="logo">
                <img src="${logoPath}" alt="Pebblous">
            </div>
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

    // Embed fonts as base64 for reliable rendering (no CDN dependency)
    const fontFaces = getFontFaces(projectRoot);

    const html = generateHTML(title, subtitle, theme, logoDataUri, fontFaces);

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
        await page.setContent(html, { waitUntil: 'domcontentloaded' });

        // Wait for embedded fonts to render
        await page.evaluate(() => document.fonts.ready);
        await new Promise(resolve => setTimeout(resolve, 200));

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
    // 본문 제목(mainTitle) = 글의 진짜 제목 → OG 이미지는 이걸 그린다.
    // SEO 메타(og:title·<title>)는 검색엔진용이라 뒤로. (2026-07-01: AI BOM stale-og 재발 방지)
    if (!title) {
        const mtMatch = htmlContent.match(/mainTitle:\s*(["'])((?:\\.|(?!\1).)*)\1/);
        if (mtMatch) {
            title = mtMatch[2]
                .replace(/\\u([0-9a-fA-F]{4})/g, (_, h) => String.fromCharCode(parseInt(h, 16)))
                .replace(/\\"/g, '"').replace(/\\'/g, "'").replace(/\\\\/g, '\\')
                .replace(/<br\s*\/?>/gi, ' ').trim();
            console.log(`  [mainTitle] Using body title`);
        }
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

    // 자르지 않고 전체를 넘긴다 — generateHTML의 fitSubtitle이 2줄 한도에서 문구 경계로 정리
    subtitle = (subtitle || '').trim();

    // Determine category: articles.json → HTML config.category → path-based fallback
    let category = 'tech';
    if (articleData?.category) {
        category = articleData.category;
    } else {
        // Try HTML config.category first
        const configCatMatch = htmlContent.match(/category:\s*['"](\w+)['"]/);
        if (configCatMatch) {
            category = configCatMatch[1];
            console.log(`  [config] Category from HTML config: ${category}`);
        } else {
            // Final fallback: detect from path
            if (htmlPath.includes('/report/') || htmlPath.includes('market') || htmlPath.includes('business')) {
                category = 'business';
            } else if (htmlPath.includes('/story/') || htmlPath.includes('review')) {
                category = 'story';
            }
            console.log(`  [fallback] Category detected from path: ${category}`);
        }
    }

    // Detect theme from HTML data-theme attribute (default: light)
    const themeMatch = htmlContent.match(/<html[^>]+data-theme="(\w+)"/);
    const light = themeMatch ? themeMatch[1] !== 'dark' : true;

    // Determine output path: same folder as HTML, in image/ subfolder
    const htmlDir = path.dirname(htmlPath);
    const htmlName = path.basename(htmlPath, '.html');
    const outputPath = path.join(htmlDir, 'image', `${htmlName}.png`);

    return { title, subtitle, category, output: outputPath, light };
}

// 다른 도구(리뷰 서버 등)가 함수를 재사용할 수 있게 export
module.exports = { extractFromHTML, generateOGImage, generateHTML, getTheme, getFontFaces, calcTitleFontSize };

// CLI로 직접 실행될 때만 아래 main 로직 수행 (require 시엔 skip)
if (require.main === module) {
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

    generateOGImage(title, subtitle, output, category, projectRoot, useLight).then(() => {
        // After generating index.png, check for og-cover.* (special OG image override)
        const imageDir = path.dirname(output);
        const ogCoverPattern = ['og-cover.jpeg', 'og-cover.jpg', 'og-cover.png', 'og-cover.webp'];
        const ogCover = ogCoverPattern.find(f => fs.existsSync(path.join(imageDir, f)));

        if (ogCover) {
            const ogCoverPath = path.join(imageDir, ogCover);
            const relOgCover = path.relative(projectRoot, ogCoverPath);
            console.log(`\n🎨 Special OG cover found: ${ogCover}`);
            console.log(`   → og:image will use: ${relOgCover} (instead of index.png)`);
            console.log(`   To revert to standard OG, delete ${ogCover}`);
        }
    }).catch(console.error);

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
} // end require.main === module
