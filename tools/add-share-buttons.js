#!/usr/bin/env node
/**
 * Add Share Buttons to HTML files
 *
 * Usage:
 *   node tools/add-share-buttons.js project/PhysicalAI/physical-ai.html
 *   node tools/add-share-buttons.js --all  # Process all files missing share buttons
 */

const fs = require('fs');
const path = require('path');

// Share button CSS to add in <style> section
const SHARE_CSS = `
        /* Share Button Styles */
        .share-container {
            display: flex;
            gap: 1rem;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            margin-top: 1rem;
        }

        .share-label {
            font-size: 0.875rem;
            color: var(--text-muted, #94a3b8);
            font-weight: 500;
        }

        .share-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.375rem;
            padding: 0;
            background: none;
            border: none;
            color: var(--text-muted, #64748b);
            cursor: pointer;
            transition: color 0.2s;
            font-size: 0.875rem;
            text-decoration: none;
        }

        .share-btn:hover {
            color: var(--accent-color, #F86825);
        }

        .share-btn svg {
            width: 1.25rem;
            height: 1.25rem;
        }
`;

// Share button HTML
const SHARE_HTML = `
                    <div class="share-container">
                        <span class="share-label">공유하기:</span>
                        <button id="copy-url-btn" class="share-btn" title="URL 복사">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                            </svg>
                            <span>URL 복사</span>
                        </button>
                        <a id="twitter-share" class="share-btn" target="_blank" rel="noopener noreferrer">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                            </svg>
                            <span>트위터</span>
                        </a>
                        <a id="facebook-share" class="share-btn" target="_blank" rel="noopener noreferrer">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                            </svg>
                            <span>페이스북</span>
                        </a>
                        <a id="linkedin-share" class="share-btn" target="_blank" rel="noopener noreferrer">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                            </svg>
                            <span>링크드인</span>
                        </a>
                    </div>`;

// Share button JavaScript
const SHARE_JS = `
            // Share button functionality
            const pageUrl = window.location.href;
            const pageTitle = document.title;

            // Copy URL button
            const copyBtn = document.getElementById('copy-url-btn');
            if (copyBtn) {
                copyBtn.addEventListener('click', async () => {
                    try {
                        await navigator.clipboard.writeText(pageUrl);
                        const originalText = copyBtn.querySelector('span').textContent;
                        copyBtn.querySelector('span').textContent = '복사됨!';
                        setTimeout(() => {
                            copyBtn.querySelector('span').textContent = originalText;
                        }, 2000);
                    } catch (err) {
                        console.error('Failed to copy:', err);
                    }
                });
            }

            // Social share links
            const twitterShare = document.getElementById('twitter-share');
            if (twitterShare) {
                twitterShare.href = \`https://twitter.com/intent/tweet?url=\${encodeURIComponent(pageUrl)}&text=\${encodeURIComponent(pageTitle)}\`;
            }

            const facebookShare = document.getElementById('facebook-share');
            if (facebookShare) {
                facebookShare.href = \`https://www.facebook.com/sharer/sharer.php?u=\${encodeURIComponent(pageUrl)}\`;
            }

            const linkedinShare = document.getElementById('linkedin-share');
            if (linkedinShare) {
                linkedinShare.href = \`https://www.linkedin.com/sharing/share-offsite/?url=\${encodeURIComponent(pageUrl)}\`;
            }`;

function addShareButtons(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Check if already has share buttons
    if (content.includes('share-container') || content.includes('copy-url-btn')) {
        console.log(`⏭️  Already has share buttons: ${filePath}`);
        return false;
    }

    let modified = false;

    // 1. Add CSS before </style>
    const styleEndMatch = content.match(/<\/style>\s*\n?\s*<\/head>/i);
    if (styleEndMatch) {
        content = content.replace(/<\/style>(\s*\n?\s*<\/head>)/i, `${SHARE_CSS}    </style>$1`);
        modified = true;
    }

    // 2. Add HTML after header section (look for </header> tag in main content)
    // Find the header that contains the title, not the navigation header
    const headerPatterns = [
        // Pattern 1: </header> after hero section
        /(<header[^>]*class="[^"]*text-center[^"]*"[^>]*>[\s\S]*?<\/header>)/i,
        // Pattern 2: Simple header close after meta info
        /(<p class="[^"]*themeable-muted[^"]*">[^<]*업데이트[^<]*<\/p>\s*<\/header>)/i,
        // Pattern 3: After reading-time or date info
        /(<\/header>)(\s*\n\s*<!-- (?:Definition|Section|Content))/i
    ];

    let htmlAdded = false;
    for (const pattern of headerPatterns) {
        if (pattern.test(content) && !htmlAdded) {
            content = content.replace(pattern, (match, group1, group2) => {
                if (group2) {
                    return group1.replace('</header>', SHARE_HTML + '\n                </header>') + group2;
                } else {
                    return group1.replace('</header>', SHARE_HTML + '\n                </header>');
                }
            });
            htmlAdded = true;
            modified = true;
            break;
        }
    }

    // Alternative: Insert after last meta info line before </header>
    if (!htmlAdded) {
        const altPattern = /(<p[^>]*>[^<]*(?:업데이트|Update|최종)[^<]*<\/p>)(\s*<\/header>)/i;
        if (altPattern.test(content)) {
            content = content.replace(altPattern, `$1${SHARE_HTML}$2`);
            htmlAdded = true;
            modified = true;
        }
    }

    // 3. Add JS after PebblousPage.init(config);
    const initPattern = /(await\s+PebblousPage\.init\(config\);)/;
    if (initPattern.test(content)) {
        content = content.replace(initPattern, `$1\n${SHARE_JS}`);
        modified = true;
    }

    if (modified) {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log(`✅ Added share buttons: ${filePath}`);
        return true;
    } else {
        console.log(`⚠️  Could not find insertion points: ${filePath}`);
        return false;
    }
}

// Files to process
const FILES_TO_PROCESS = [
    'project/PhysicalAI/physical-ai.html',
    'project/PhysicalAI/data-greenhouse-vision.html',
    'project/DataClinic/data-quality.html',
    'project/DataClinic/data-greenhouse.html',
    'project/DataClinic/data-greenhouse-investment.html',
    'project/SyntheticData/synthetic-data-pricing-01.html',
    'project/IR/pitchbook-ai-outlook-analysis.html',
    'project/IR/PBLS-IR-Physical-AI-01.html',
    'project/ISO5259/iso5259-standardization-roadmap.html',
    'project/CURK/ontology/enterprise-ontology-paradigm.html',
    'project/CURK/ontology/palantir-vs-classic-ontology.html',
    'project/DAL/code-painting.html',
    'project/DAL/blog-future-vision.html',
    'project/PhysicalAI/physical-ai-competition-strategy.html',
    'project/PhysicalAI/data-startup-physical-ai-01.html',
    'project/DataGreenhouse/data-greenhouse-strategy.html',
    'project/PebbloSim/pebblosim-design-strategy.html',
    'project/DataClinic/pbls-patent-us-01.html',
    'project/DataClinic/pbls-patent-portfolio-2025.html',
    'project/DataClinic/ai-data-qa-framework-01.html',
    'project/CURK/intelligent-parrot.html',
    'project/AADS/korea-ai-strategy-aads-alignment.html'
];

// Main
const args = process.argv.slice(2);
const projectRoot = path.resolve(__dirname, '..');

if (args[0] === '--all') {
    console.log('Processing all files...\n');
    let success = 0, skipped = 0, failed = 0;

    for (const file of FILES_TO_PROCESS) {
        const fullPath = path.join(projectRoot, file);
        if (fs.existsSync(fullPath)) {
            const result = addShareButtons(fullPath);
            if (result === true) success++;
            else if (result === false) skipped++;
        } else {
            console.log(`❌ File not found: ${file}`);
            failed++;
        }
    }

    console.log(`\n=== Summary ===`);
    console.log(`✅ Added: ${success}`);
    console.log(`⏭️  Skipped: ${skipped}`);
    console.log(`❌ Failed: ${failed}`);
} else if (args[0]) {
    const filePath = path.resolve(args[0]);
    if (fs.existsSync(filePath)) {
        addShareButtons(filePath);
    } else {
        console.error(`❌ File not found: ${args[0]}`);
        process.exit(1);
    }
} else {
    console.log(`
Add Share Buttons to HTML files

Usage:
  node tools/add-share-buttons.js project/XXX/file.html
  node tools/add-share-buttons.js --all

This tool adds:
  1. Share button CSS styles
  2. Share button HTML (URL copy, Twitter, Facebook, LinkedIn)
  3. Share button JavaScript functionality
`);
}
