#!/usr/bin/env node
// wiki/build.js — _src/*.md → public/{slug}/index.html (multi-page)

const fs   = require('fs');
const path = require('path');
const { marked }  = require('marked');
const matter = require('gray-matter');

const SRC_DIR  = path.join(__dirname, '_src');
const OUT_DIR  = path.join(__dirname, 'public');
const TODAY    = new Date().toISOString().slice(0, 10).replace(/-/g, '');

// ── 위키 페이지 목록 (순서 고정) ───────────────────────────────
const PAGES = [
  { slug: '',                         file: 'index.md',                      title: '📚 목차',           label: '목차' },
  { slug: 'bitcoin',                  file: 'bitcoin.md',                    title: '₿ 비트코인',         label: '비트코인' },
  { slug: 'blockchain-fundamentals',  file: 'blockchain-fundamentals.md',    title: '🔗 블록체인 기초',    label: '블록체인 기초' },
  { slug: 'ethereum',                 file: 'ethereum.md',                   title: '⬡ 이더리움',         label: '이더리움' },
  { slug: 'stablecoin',               file: 'stablecoin.md',                 title: '💲 스테이블코인',     label: '스테이블코인' },
  { slug: 'sto-rwa',                  file: 'sto-rwa.md',                    title: '📜 STO & RWA',       label: 'STO & RWA' },
  { slug: 'defi-nft',                 file: 'defi-nft.md',                   title: '🎨 DeFi & NFT',      label: 'DeFi & NFT' },
  { slug: 'digital-asset-exchange',   file: 'digital-asset-exchange.md',     title: '🏦 거래소 & 지갑',    label: '거래소 & 지갑' },
  { slug: 'blockchain-applications',  file: 'blockchain-applications.md',    title: '🏭 블록체인 응용',    label: '블록체인 응용' },
  { slug: 'korea-policy',             file: 'korea-digital-finance-policy.md', title: '🇰🇷 한국 정책',   label: '한국 정책' },
  { slug: 'agentic-data-management',      file: 'agentic-data-management.md',      title: '🤖 에이전틱 데이터 관리',    label: '에이전틱 데이터 관리' },
  { slug: 'unstructured-data-management', file: 'unstructured-data-management.md', title: '📂 비정형 데이터 관리',      label: '비정형 데이터 관리' },
  { slug: 'hype-cycle-agentic-ai',        file: 'hype-cycle-agentic-ai.md',        title: '📈 AI 에이전트 하이프사이클', label: 'AI 에이전트 하이프사이클' },
  { slug: 'pebblous-strategic-overview',  file: 'pebblous-strategic-overview.md',  title: '🏢 Pebblous 전략 개요',      label: 'Pebblous 전략 개요' },
  { slug: 'log',                          file: 'log.md',                          title: '📋 변경 로그',               label: '변경 로그' },
];

// ── 날짜 포맷 ─────────────────────────────────────────────────
function fmDate(v) {
  if (!v) return '2026-04-11';
  if (v instanceof Date) return v.toISOString().slice(0, 10);
  return String(v).slice(0, 10);
}

// ── marked 설정 ───────────────────────────────────────────────
marked.setOptions({ gfm: true, breaks: false });

// ── 위키링크 변환: [[foo.md]] → /wiki/public/foo/ ──────────────
function convertWikiLinks(md) {
  const SLUG_MAP = {
    'korea-digital-finance-policy.md': 'korea-policy',
    'index.md': '',
  };
  // [[foo.md|표시텍스트]] 또는 [[foo.md]]
  return md.replace(/\[\[([^\]|]+\.md)(?:\|([^\]]*))?\]\]/g, (_, filename, displayText) => {
    const slug  = SLUG_MAP[filename] ?? filename.replace(/\.md$/, '');
    const label = displayText || slug || '목차';
    return `[${label}](/wiki/public/${slug}/)`;
  });
}

// ── 사이드바 HTML 생성 ─────────────────────────────────────────
function buildSidebar(currentSlug) {
  const items = PAGES.map(p => {
    const href   = `/wiki/public/${p.slug ? p.slug + '/' : ''}`;
    const active = p.slug === currentSlug;
    const cls    = active
      ? 'block pl-4 -ml-px border-l-2 border-orange-500 text-orange-400 font-semibold py-0.5'
      : 'block pl-4 -ml-px border-l-2 border-transparent hover:border-orange-500 themeable-toc-link py-0.5';
    return `<li><a href="${href}" class="${cls}">${p.title}</a></li>`;
  }).join('\n                    ');

  return `
            <nav class="hidden lg:block lg:w-[240px] lg:shrink-0 sticky top-20 self-start">
                <p class="text-xs font-bold uppercase tracking-widest themeable-text-muted mb-3 px-0">블록체인 위키</p>

                <!-- 검색 -->
                <div class="relative mb-4">
                    <input id="wiki-search" type="text" placeholder="위키 검색..."
                        class="w-full px-3 py-2 text-sm rounded-lg border themeable-border bg-transparent themeable-text-secondary placeholder:text-gray-500 focus:outline-none focus:border-orange-500 transition-colors">
                    <div id="wiki-search-results" class="absolute left-0 right-0 top-full mt-1 z-50 rounded-lg border themeable-border shadow-xl hidden"
                        style="background: var(--bg-card); max-height: 320px; overflow-y: auto;"></div>
                </div>

                <ul class="space-y-1 text-sm border-l-2 themeable-toc-border">
                    ${items}
                </ul>
                <div class="mt-6 pt-4 border-t themeable-border">
                    <a href="/wiki/public/" class="text-xs themeable-text-muted hover:text-orange-400 transition-colors">← 위키 홈</a>
                </div>
            </nav>

            <script>
            (function() {
                let index = null;
                async function loadIndex() {
                    if (index) return index;
                    const r = await fetch('/wiki/public/search-index.json');
                    index = await r.json();
                    return index;
                }
                function esc(s) {
                    return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
                }
                document.addEventListener('DOMContentLoaded', function() {
                    const input = document.getElementById('wiki-search');
                    const results = document.getElementById('wiki-search-results');
                    if (!input) return;
                    input.addEventListener('input', async function() {
                        const q = this.value.trim().toLowerCase();
                        if (!q) { results.classList.add('hidden'); return; }
                        const data = await loadIndex();
                        const hits = data.filter(p =>
                            p.label.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
                        ).slice(0, 6);
                        if (!hits.length) {
                            results.innerHTML = '<p class="px-4 py-3 text-sm" style="color:var(--text-muted)">결과 없음</p>';
                        } else {
                            results.innerHTML = hits.map(h => {
                                const idx = h.excerpt.toLowerCase().indexOf(q);
                                const snippet = idx >= 0 ? h.excerpt.slice(Math.max(0, idx-30), idx+80) : h.excerpt.slice(0, 80);
                                return \`<a href="/wiki/public/\${h.slug ? h.slug+'/' : ''}"
                                    class="block px-4 py-3 hover:bg-orange-500/10 border-b last:border-0 transition-colors"
                                    style="border-color:var(--border-color); text-decoration:none">
                                    <div class="text-sm font-semibold" style="color:var(--text-primary)">\${esc(h.title)}</div>
                                    <div class="text-xs mt-0.5" style="color:var(--text-muted)">...\${esc(snippet)}...</div>
                                </a>\`;
                            }).join('');
                        }
                        results.classList.remove('hidden');
                    });
                    document.addEventListener('click', function(e) {
                        if (!input.contains(e.target) && !results.contains(e.target)) {
                            results.classList.add('hidden');
                        }
                    });
                });
            })();
            </script>`;
}

// ── 관련 문서 섹션 ─────────────────────────────────────────────
function buildRelated(related) {
  if (!related || related.length === 0) return '';
  const links = related.map(r => {
    const SLUG_MAP = { 'korea-digital-finance-policy.md': 'korea-policy', 'index.md': '' };
    const slug  = SLUG_MAP[r] ?? r.replace(/\.md$/, '');
    const page  = PAGES.find(p => p.file === r || p.slug === slug);
    const label = page ? page.title : slug;
    return `<a href="/wiki/public/${slug}/" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm themeable-card border themeable-border themeable-text-secondary hover:border-orange-500 hover:text-orange-400 transition-colors">${label}</a>`;
  }).join('\n          ');
  return `
        <div class="mt-12 pt-8 border-t themeable-border">
            <p class="text-xs font-bold uppercase tracking-widest themeable-text-muted mb-4">관련 문서</p>
            <div class="flex flex-wrap gap-2">
                ${links}
            </div>
        </div>`;
}

// ── HTML 템플릿 ───────────────────────────────────────────────
function buildHtml({ slug, title, label, updated, sources, related, contentHtml }) {
  const canonical = `https://blog.pebblous.ai/wiki/public/${slug ? slug + '/' : ''}`;
  const sidebar   = buildSidebar(slug);
  const relatedHtml = buildRelated(related);
  const sourceText = sources && sources.length > 0
    ? `출처: ${sources.join(', ')} · `
    : '';

  return `<!DOCTYPE html>
<html lang="ko" data-theme="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Pebblous Data Communication Team">
    <meta http-equiv="content-language" content="ko">
    <meta name="copyright" content="(주)페블러스 데이터 커뮤니케이션">
    <meta name="robots" content="index, follow">

    <title>${label} — 블록체인·디지털자산 위키 | 페블러스</title>
    <meta name="description" content="${label}에 대한 블록체인·디지털자산 위키. 페블러스 학습 자료.">

    <link rel="canonical" href="${canonical}">

    <!-- Open Graph -->
    <meta property="og:title" content="${label} — 블록체인·디지털자산 위키">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonical}">
    <meta property="og:site_name" content="Pebblous Blog">
    <meta property="og:locale" content="ko_KR">

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="${label} — 블록체인·디지털자산 위키">
    <meta name="twitter:site" content="@pebblous">

    <!-- Favicon -->
    <link rel="icon" href="/image/favicon.ico" sizes="any">
    <link rel="icon" href="/image/Pebblous_BM_Orange_RGB.png" type="image/png">
    <link rel="apple-touch-icon" href="/image/Pebblous_BM_Orange_RGB.png">

    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-57L9F58B');</script>

    <!-- Styles -->
    <link rel="stylesheet" href="/css/theme-variables.css?v=${TODAY}">
    <link rel="stylesheet" href="/styles/common-styles.css?v=${TODAY}">
    <link rel="stylesheet" href="/styles/tailwind-build.css?v=${TODAY}">
    <link rel="preconnect" href="https://cdn.jsdelivr.net">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css">

    <style>
        /* Wiki content typography */
        .wiki-content h1 { font-size: 2rem; font-weight: 700; color: var(--heading-color); border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; margin-bottom: 1.5rem; margin-top: 0; }
        .wiki-content h2 { font-size: 1.35rem; font-weight: 700; color: var(--heading-color); margin-top: 2.5rem; margin-bottom: 0.75rem; padding-bottom: 0.4rem; border-bottom: 1px solid var(--border-color); }
        .wiki-content h3 { font-size: 1.1rem; font-weight: 600; color: var(--text-primary); margin-top: 1.75rem; margin-bottom: 0.5rem; }
        .wiki-content h4 { font-size: 1rem; font-weight: 600; color: var(--text-secondary); margin-top: 1.25rem; margin-bottom: 0.375rem; }
        .wiki-content p  { line-height: 1.85; color: var(--text-secondary); margin-bottom: 0.875rem; }
        .wiki-content a  { color: var(--accent-color); text-decoration: none; }
        .wiki-content a:hover { text-decoration: underline; }
        .wiki-content strong { color: var(--text-primary); font-weight: 600; }
        .wiki-content em { color: var(--text-secondary); }

        /* Code */
        .wiki-content code { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 4px; padding: 2px 6px; font-family: var(--font-mono); font-size: 0.85em; color: var(--accent-color); }
        .wiki-content pre  { background: var(--bg-secondary); border: 1px solid var(--border-color); border-radius: 0.75rem; padding: 1rem 1.25rem; overflow-x: auto; margin: 1.25rem 0; }
        .wiki-content pre code { background: none; border: none; padding: 0; color: var(--text-secondary); font-size: 0.875rem; }

        /* Tables */
        .wiki-content table { border-collapse: collapse; width: 100%; margin: 1.25rem 0; font-size: 0.9rem; }
        .wiki-content th { background: var(--bg-secondary); color: var(--text-primary); padding: 0.625rem 0.875rem; text-align: left; border: 1px solid var(--border-color); font-weight: 600; }
        .wiki-content td { padding: 0.5rem 0.875rem; border: 1px solid var(--border-color); color: var(--text-secondary); vertical-align: top; }
        .wiki-content tr:nth-child(even) td { background: var(--bg-secondary); }

        /* Lists */
        .wiki-content ul, .wiki-content ol { padding-left: 1.5rem; margin: 0.5rem 0 0.875rem; }
        .wiki-content li { line-height: 1.85; color: var(--text-secondary); margin-bottom: 0.25rem; }
        .wiki-content li > ul, .wiki-content li > ol { margin: 0.25rem 0; }

        /* Blockquote */
        .wiki-content blockquote { border-left: 4px solid var(--accent-color); background: var(--bg-secondary); padding: 0.875rem 1.25rem; margin: 1.25rem 0; border-radius: 0 0.5rem 0.5rem 0; }
        .wiki-content blockquote p { color: var(--text-primary); margin: 0; }

        /* HR */
        .wiki-content hr { border: none; border-top: 1px solid var(--border-color); margin: 2rem 0; }
    </style>
</head>
<body>
    <!-- GTM noscript -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-57L9F58B" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

    <!-- 헤더: common-utils.js가 주입 -->
    <div id="site-header"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 max-w-[1400px]">
        <div class="lg:flex lg:gap-8 lg:justify-center lg:items-start">

            ${sidebar}

            <main class="max-w-[800px] px-4 sm:px-6 w-full min-w-0">
                <header class="text-left mb-10">
                    <div class="flex items-center gap-2 mb-4">
                        <a href="/wiki/public/" class="text-xs themeable-text-muted hover:text-orange-400 transition-colors">위키</a>
                        <span class="text-xs themeable-text-muted">/</span>
                        <span class="text-xs themeable-text-muted">${label}</span>
                    </div>
                    <h1 class="text-4xl md:text-5xl font-bold themeable-heading mb-4 leading-tight">${title}</h1>
                    <p class="text-sm themeable-text-muted">${sourceText}업데이트: ${updated || '2026-04-11'}</p>
                </header>

                <div class="wiki-content">
                    ${contentHtml}
                </div>

                ${relatedHtml}
            </main>

        </div>
    </div>

    <!-- 푸터: common-utils.js가 주입 -->
    <div id="site-footer"></div>

    <script src="/scripts/common-utils.js?v=${TODAY}"></script>
</body>
</html>`;
}

// ── 검색 인덱스 생성 ──────────────────────────────────────────
function buildSearchIndex(pageDataList) {
  return pageDataList.map(({ slug, title, label, plaintext }) => ({
    slug,
    title,
    label,
    excerpt: plaintext.slice(0, 300).replace(/\s+/g, ' ').trim(),
  }));
}

// ── 메인 빌드 ─────────────────────────────────────────────────
function build() {
  // 출력 디렉토리 준비
  fs.mkdirSync(OUT_DIR, { recursive: true });

  const pageDataList = [];

  for (const page of PAGES) {
    const srcPath = path.join(SRC_DIR, page.file);
    if (!fs.existsSync(srcPath)) {
      console.warn(`  SKIP (없음): ${page.file}`);
      continue;
    }

    const raw = fs.readFileSync(srcPath, 'utf8');
    const { data: fm, content: mdRaw } = matter(raw);

    // 위키링크 변환
    const mdConverted = convertWikiLinks(mdRaw);

    // 마크다운 → HTML
    const contentHtml = marked.parse(mdConverted);

    // 평문 (검색용)
    const plaintext = mdRaw.replace(/[#*`|_>[\]!]/g, '').replace(/\s+/g, ' ');

    pageDataList.push({ ...page, plaintext });

    // 출력 경로
    const outDir = page.slug
      ? path.join(OUT_DIR, page.slug)
      : OUT_DIR;
    fs.mkdirSync(outDir, { recursive: true });

    const html = buildHtml({
      slug:     page.slug,
      title:    page.title,
      label:    page.label,
      updated:  fmDate(fm.updated || fm.created),
      sources:  fm.sources || [],
      related:  fm.related || [],
      contentHtml,
    });

    const outFile = path.join(outDir, 'index.html');
    fs.writeFileSync(outFile, html, 'utf8');
    console.log(`  OK  ${outFile.replace(OUT_DIR, 'public')}`);
  }

  // 검색 인덱스
  const indexPath = path.join(OUT_DIR, 'search-index.json');
  fs.writeFileSync(indexPath, JSON.stringify(buildSearchIndex(pageDataList), null, 2), 'utf8');
  console.log(`  OK  search-index.json`);

  console.log(`\n✓ 빌드 완료 — ${pageDataList.length}페이지`);
}

build();
