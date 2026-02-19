/**
 * HTML 생성기
 * 파싱된 마크다운 데이터를 HTML로 변환
 */

const { marked } = require('marked');
const path = require('path');

/**
 * HTML 생성
 * @param {Object} parsed - 파싱된 마크다운 데이터
 * @param {Object} config - 설정
 * @returns {string} HTML 문자열
 */
async function generateHTML(parsed, config) {
    const { title, meta, sections } = parsed;
    const { category, template, password, tags, theme, sourcePath } = config;

    // 섹션 ID 생성
    const sectionIds = sections.map((s, i) => ({
        ...s,
        id: `section-${i + 1}`,
        slug: slugify(s.title)
    }));

    // 템플릿 선택
    if (template === 'password' && password) {
        return generatePasswordProtectedHTML(parsed, sectionIds, config);
    }

    return generateStandardHTML(parsed, sectionIds, config);
}

/**
 * 표준 HTML 생성
 */
function generateStandardHTML(parsed, sections, config) {
    const { title, meta } = parsed;
    const { category, tags, theme, sourcePath } = config;

    const today = new Date().toISOString().split('T')[0];
    const tagsArray = Array.isArray(tags) ? tags : [];
    const tagsJSON = JSON.stringify(tagsArray);

    // 섹션 HTML 생성
    const sectionsHTML = sections.map(section => {
        const contentHTML = marked.parse(section.content);
        return `
            <!-- ${section.title} -->
            <section id="${section.slug}" class="mb-12">
                <div class="section-header">
                    <div class="icon-wrapper">
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                    </div>
                    <h2>${section.title}</h2>
                </div>
                <div class="themeable-card rounded-xl p-6">
                    <div class="themeable-text leading-relaxed prose prose-sm max-w-none">
                        ${contentHTML}
                    </div>
                </div>
            </section>`;
    }).join('\n');

    // TOC 생성
    const tocHTML = sections.map(section =>
        `<li><a href="#${section.slug}" class="block pl-4 -ml-px border-l-2 border-transparent hover:border-orange-500 themeable-toc-link">${section.title}</a></li>`
    ).join('\n                    ');

    return `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Pebblous">
    <meta name="language" content="Korean">
    <meta name="robots" content="index, follow">

    <title>${title} | 페블러스</title>
    <meta name="description" content="${meta.description}">
    <meta name="keywords" content="${tagsArray.join(', ')}">

    <!-- Open Graph -->
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="${meta.description}">
    <meta property="og:type" content="article">
    <meta property="og:site_name" content="Pebblous Blog">
    <meta property="og:locale" content="ko_KR">
    <meta property="article:published_time" content="${today}">

    <!-- Favicon -->
    <link rel="icon" href="/image/favicon.ico" sizes="any">
    <link rel="icon" href="/image/Pebblous_BM_Orange_RGB.png" type="image/png">

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-57L9F58B');</script>

    <!-- JSON-LD: Article -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "TechArticle",
        "headline": "${title}",
        "description": "${meta.description}",
        "author": {
            "@type": "Organization",
            "name": "Pebblous"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Pebblous",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.pebblous.ai/image/Pebblous_BM_Orange_RGB.png"
            }
        },
        "datePublished": "${today}",
        "dateModified": "${today}",
        "keywords": ${tagsJSON}
    }
    </script>

    <!-- Styles -->
    <link rel="stylesheet" href="/styles/common-styles.css">
    <link rel="stylesheet" href="/styles/tailwind-build.css">
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css">
    <style>
        body { font-family: 'Pretendard Variable', sans-serif; }
        .section-header { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
        .section-header h2 { font-size: 1.5rem; font-weight: 700; color: var(--heading-color); margin: 0; }
        .icon-wrapper { width: 2.5rem; height: 2.5rem; background: linear-gradient(135deg, #F86825, #ff8a50); border-radius: 0.75rem; display: flex; align-items: center; justify-content: center; }
        .icon-wrapper svg { width: 1.25rem; height: 1.25rem; color: white; }
        .prose h3 { font-size: 1.125rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; }
        .prose p { margin-bottom: 1rem; }
        .prose ul, .prose ol { margin-left: 1.5rem; margin-bottom: 1rem; }
        .prose li { margin-bottom: 0.25rem; }
        .prose strong { font-weight: 600; }
    </style>
</head>
<body class="themeable-bg min-h-screen">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57L9F58B" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    <div id="header-placeholder"></div>

    <div class="flex justify-center pt-24 pb-16">
        <!-- TOC Sidebar -->
        <nav class="hidden lg:block sticky top-24 h-fit w-56 pr-8 text-sm">
            <h4 class="font-semibold themeable-heading mb-4">목차</h4>
            <ul class="space-y-2 themeable-muted">
                ${tocHTML}
            </ul>
        </nav>

        <!-- Main Content -->
        <main class="max-w-[800px] px-4 sm:px-6 py-8">
            <!-- Breadcrumb -->
            <nav class="text-sm mb-6 themeable-muted">
                <a href="/" class="hover:text-orange-400">Home</a>
                <span class="mx-2">/</span>
                <span class="themeable-text">${title}</span>
            </nav>

            <!-- Hero -->
            <header class="text-center mb-12">
                <h1 class="text-3xl md:text-4xl font-bold themeable-heading mb-4" style="color: #F86825;">
                    ${title}
                </h1>
                ${meta.subtitle ? `<p class="text-xl themeable-text">${meta.subtitle}</p>` : ''}
                <p class="text-sm themeable-muted mt-4">${today}</p>
            </header>

            ${sectionsHTML}

            <!-- Related Articles -->
            <section id="related-articles" class="mt-16 pt-8 border-t themeable-border">
                <h3 class="text-xl font-bold themeable-heading mb-6">관련 기사</h3>
                <div id="related-articles-container" class="grid md:grid-cols-2 gap-4">
                    <!-- Populated by JavaScript -->
                </div>
            </section>
        </main>
    </div>

    <div id="footer-placeholder"></div>

    <!-- Scripts -->
    <script src="/js/common-utils.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', async function() {
            const config = {
                currentPath: '${sourcePath}',
                tags: ${tagsJSON},
                relatedContainer: 'related-articles-container',
                maxRelated: 4,
                defaultTheme: '${theme}'
            };

            if (typeof PebblousPage !== 'undefined') {
                await PebblousPage.init(config);
            }
        });
    </script>
</body>
</html>`;
}

/**
 * 비밀번호 보호 HTML 생성
 */
function generatePasswordProtectedHTML(parsed, sections, config) {
    const standardHTML = generateStandardHTML(parsed, sections, config);

    // 비밀번호 보호 스크립트 삽입
    const passwordScript = `
    <script>
        (function() {
            const PASSWORD = '${config.password}';
            const STORAGE_KEY = 'blog_auth_${slugify(parsed.title)}';

            if (sessionStorage.getItem(STORAGE_KEY) === 'true') {
                return; // 이미 인증됨
            }

            document.body.innerHTML = \`
                <div class="min-h-screen flex items-center justify-center bg-gray-100">
                    <div class="bg-white p-8 rounded-xl shadow-lg max-w-md w-full">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4 text-center">🔐 비밀번호 필요</h2>
                        <p class="text-gray-600 mb-6 text-center">이 페이지는 비밀번호로 보호되어 있습니다.</p>
                        <input type="password" id="password-input"
                            class="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="비밀번호를 입력하세요" />
                        <button onclick="checkPassword()"
                            class="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                            확인
                        </button>
                        <p id="error-message" class="text-red-500 text-center mt-4 hidden">비밀번호가 올바르지 않습니다.</p>
                    </div>
                </div>
            \`;

            window.checkPassword = function() {
                const input = document.getElementById('password-input').value;
                if (input === PASSWORD) {
                    sessionStorage.setItem(STORAGE_KEY, 'true');
                    location.reload();
                } else {
                    document.getElementById('error-message').classList.remove('hidden');
                }
            };

            document.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') checkPassword();
            });
        })();
    </script>`;

    // </body> 앞에 스크립트 삽입
    return standardHTML.replace('</body>', `${passwordScript}\n</body>`);
}

/**
 * 문자열을 URL 친화적 slug로 변환
 */
function slugify(text) {
    return text
        .toLowerCase()
        .replace(/[^a-z0-9가-힣]+/g, '-')
        .replace(/^-|-$/g, '')
        .substring(0, 50);
}

module.exports = {
    generateHTML,
    generateStandardHTML,
    generatePasswordProtectedHTML,
    slugify
};
