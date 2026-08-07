// ============================================================
// Search Functionality & Category Titles
// ============================================================

window.IndexPage = window.IndexPage || {};

function updateCategoryTitles() {
    const categoryIcons = {
        art: `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>`,
        tech: `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>`,
        business: `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>`,
        story: `<svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>`
    };

    const defaultCategories = {
        tech: { name: 'Tech Insights', description: '기술 혁신과 제품 소개' },
        business: { name: 'Business', description: '투자, 특허, 시장 분석, 정책 전략' },
        art: { name: 'Data Art', description: '데이터를 예술로 표현하는 작품들' },
        story: { name: 'Data Stories', description: '튜토리얼, 가이드, 사례 연구' }
    };

    const categories = (window.IndexPage._categories && Object.keys(window.IndexPage._categories).length > 0)
        ? window.IndexPage._categories
        : defaultCategories;

    Object.keys(categories).forEach(categoryKey => {
        const category = categories[categoryKey];
        const titleElement = document.getElementById(`${categoryKey}-title`);

        if (titleElement) {
            titleElement.innerHTML = `
                <span class="inline-flex items-center gap-3">
                    ${categoryIcons[categoryKey] || ''}
                    <span>${category.name}</span>
                </span>
            `;

            titleElement.title = category.description;
        }
    });
}

// ============================================================
// Search v2 — 다단어 AND + 가중 랭킹 + 결과 상한 + URL 상태 +
//             Pagefind 본문 검색 (인덱스 없으면 조용히 생략)
// ============================================================

// Current search type filter: 'all' | 'article' | 'hub'
let currentSearchFilter = 'all';

const SEARCH_PAGE_SIZE = 20;
const FULLTEXT_MAX = 10;

let searchGeneration = 0;   // 비동기(본문 검색) 결과의 최신성 보장
let visibleCount = SEARCH_PAGE_SIZE;
let lastScored = [];        // 마지막 검색의 전체 결과 (더 보기용)
let lastTokens = [];
let lastTrackedQuery = '';  // GTM 중복 push 방지

function escapeRegExp(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function tokenize(query) {
    return query.toLowerCase().split(/\s+/).filter(Boolean);
}

// 필드 가중 점수: 제목 3 · 태그 2 · 설명 1 · 카테고리 1. 토큰 전부 매치(AND) 필수.
function scoreArticle(article, tokens) {
    const title = (article.title || '').toLowerCase();
    const desc = (article.description || '').toLowerCase();
    const tags = (article.tags || []).join(' ').toLowerCase();
    const cat = (article.category || '').toLowerCase();
    let total = 0;
    for (const tk of tokens) {
        let s = 0;
        if (title.includes(tk)) s += 3;
        if (tags.includes(tk)) s += 2;
        if (desc.includes(tk)) s += 1;
        if (cat.includes(tk)) s += 1;
        if (s === 0) return 0;
        total += s;
    }
    return total;
}

function updateSearchURL(query) {
    const params = new URLSearchParams(location.search);
    if (query) params.set('q', query); else params.delete('q');
    const qs = params.toString();
    history.replaceState(null, '', qs ? '?' + qs : location.pathname);
}

// 이 사이트는 GTM이 아니라 gtag.js 직결(G-44LQ2ZLX78) — GA4 이벤트는 gtag('event')로
// 보내야 수집된다. dataLayer.push({event:...})는 GTM 문법이라 gtag 단독 환경에선 무시됨.
function sendAnalyticsEvent(name, params) {
    if (typeof window.gtag === 'function') {
        window.gtag('event', name, params);
    } else {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(Object.assign({ event: name }, params));
    }
}

function trackSearch(query, metaCount, fulltextCount) {
    if (query === lastTrackedQuery) return;
    lastTrackedQuery = query;
    sendAnalyticsEvent('blog_search', {
        search_term: query,
        results_count: metaCount,
        search_filter: currentSearchFilter,
        search_language: (window.IndexPage.getCurrentLanguage && window.IndexPage.getCurrentLanguage()) || 'ko'
    });
}

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchResultsList = document.getElementById('search-results-list');
    const searchCount = document.getElementById('search-count');

    let debounceTimer;

    function hideResults() {
        searchGeneration++;
        searchResults.classList.remove('has-results');
        searchResults.hidden = true;
        updateSearchURL('');
    }

    function triggerSearch() {
        const query = searchInput.value.trim();
        if (query.replace(/\s+/g, '').length < 2) {
            hideResults();
            return;
        }
        visibleCount = SEARCH_PAGE_SIZE;
        performSearch(query, searchResultsList, searchCount, searchResults);
    }

    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(triggerSearch, 300);
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            hideResults();
        }
        if (e.key === 'Enter') {
            clearTimeout(debounceTimer);
            triggerSearch();
        }
    });

    // Search type filter buttons
    document.querySelectorAll('.search-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.search-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentSearchFilter = btn.dataset.filter;
            triggerSearch();
        });
    });

    document.querySelectorAll('.keyword-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            searchInput.value = btn.textContent.trim();
            searchInput.focus();
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            triggerSearch();
        });
    });

    // "더 보기" — 결과 컨테이너 이벤트 위임
    searchResults.addEventListener('click', (e) => {
        if (e.target.closest('.search-load-more')) {
            visibleCount += SEARCH_PAGE_SIZE;
            renderMetaResults(searchResultsList, searchCount, searchResults);
        }
    });

    // 언어 전환 시 현재 검색 재실행 (applyLanguageFilter가 _allArticles를 갱신한 뒤)
    window.IndexPage.onLanguageChanged = () => {
        if (searchInput.value.trim().replace(/\s+/g, '').length >= 2) triggerSearch();
    };

    // URL 상태 복원: /?q=검색어 → 즉시 검색, /?q= (빈 값) → 포커스만
    const initialQ = new URLSearchParams(location.search).get('q');
    if (initialQ !== null) {
        searchInput.value = initialQ;
        searchInput.scrollIntoView({ behavior: 'auto', block: 'center' });
        searchInput.focus();
        if (initialQ.trim().replace(/\s+/g, '').length >= 2) triggerSearch();
    }
}

function highlightTokens(text, tokens) {
    if (!tokens.length) return text;
    const re = new RegExp('(' + tokens.map(escapeRegExp).join('|') + ')', 'gi');
    return text.replace(re, '<span class="search-highlight">$1</span>');
}

function articleCardHTML(article, tokens, categories) {
    const categoryInfo = categories[article.category];
    const categoryName = categoryInfo ? `${categoryInfo.icon} ${categoryInfo.name}` : article.category;

    const tagsHtml = (article.tags || []).map(tag =>
        `<span class="tag">${highlightTokens(tag, tokens)}</span>`
    ).join('');

    const hubBadge = article.type === 'hub'
        ? '<span class="inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400 ml-2">HUB</span>'
        : '';

    return `
        <div class="search-result-item p-4 rounded-lg border transition-colors">
            <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
                <div class="flex-grow min-w-0">
                    <div class="flex flex-wrap items-center gap-2 text-xs search-meta mb-2">
                        <span>${article.date}</span>
                        <span>• ${categoryName}</span>${hubBadge}
                    </div>
                    <h4 class="text-base sm:text-lg font-bold mb-1">${highlightTokens(article.title, tokens)}</h4>
                    <p class="text-sm search-desc">${highlightTokens(article.description, tokens)}</p>
                    <div class="tags-container mt-2">
                        <div class="tags-scroll">
                            ${tagsHtml}
                        </div>
                    </div>
                </div>
                <a href="${article.path}" ${article.external ? 'target="_blank" rel="noopener noreferrer"' : ''} class="flex-shrink-0 accent-bg text-white text-sm font-semibold px-4 py-2 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap self-start">
                    ${(window.IndexPage.t || function(k){ return k; })('search.readMore')}
                </a>
            </div>
        </div>
    `;
}

function renderMetaResults(resultsContainer, countElement, resultsSection) {
    const t = window.IndexPage.t || function(k) { return k; };
    const categories = window.IndexPage._categories || {};

    countElement.textContent = lastScored.length;

    if (lastScored.length === 0) {
        resultsContainer.innerHTML = '<p class="no-results text-center py-6">' + t('search.noResults') + '</p>';
    } else {
        const visible = lastScored.slice(0, visibleCount);
        let html = visible.map(s => articleCardHTML(s.article, lastTokens, categories)).join('');
        if (lastScored.length > visibleCount) {
            html += `
                <div class="text-center pt-2">
                    <button type="button" class="search-load-more accent-bg text-white text-sm font-semibold px-6 py-2 rounded-md hover:opacity-90 transition-opacity">
                        ${t('search.loadMore')} (${lastScored.length - visibleCount})
                    </button>
                </div>`;
        }
        resultsContainer.innerHTML = html;
    }

    resultsSection.hidden = false;
    resultsSection.classList.add('has-results');

    const cards = Array.from(resultsContainer.querySelectorAll('.search-result-item'));
    if (cards.length > 0 && window.IndexPage.initCardInteractions) {
        window.IndexPage.initCardInteractions(cards);
    }
}

function performSearch(query, resultsContainer, countElement, resultsSection) {
    const gen = ++searchGeneration;
    const tokens = tokenize(query);
    const allArticles = window.IndexPage._allArticles || [];

    const scored = [];
    for (const article of allArticles) {
        if (currentSearchFilter === 'hub' && article.type !== 'hub') continue;
        if (currentSearchFilter === 'article' && article.type === 'hub') continue;
        const score = scoreArticle(article, tokens);
        if (score > 0) scored.push({ article, score });
    }
    scored.sort((a, b) => (b.score - a.score) || (new Date(b.article.date) - new Date(a.article.date)));

    lastScored = scored;
    lastTokens = tokens;
    renderMetaResults(resultsContainer, countElement, resultsSection);

    updateSearchURL(query);
    trackSearch(query, scored.length);
    renderFulltextSection(query, gen, resultsContainer, scored);
}

// ============================================================
// Pagefind 본문 검색 (lazy) — /pagefind/ 인덱스는 CI가 생성.
// 인덱스가 없거나 로드 실패하면 메타 검색만 동작 (조용히 생략).
// ============================================================

let pagefindMod = null;
let pagefindLang = null;
let pagefindBroken = false;

async function getPagefind() {
    if (pagefindBroken) return null;
    const lang = (window.IndexPage.getCurrentLanguage && window.IndexPage.getCurrentLanguage()) || 'ko';
    try {
        if (!pagefindMod) {
            document.documentElement.lang = lang;
            pagefindMod = await import('/pagefind/pagefind.js');
            await pagefindMod.init();
            pagefindLang = lang;
        } else if (pagefindLang !== lang && pagefindMod.destroy) {
            await pagefindMod.destroy();
            document.documentElement.lang = lang;
            await pagefindMod.init();
            pagefindLang = lang;
        }
        return pagefindMod;
    } catch (err) {
        pagefindBroken = true;
        return null;
    }
}

async function renderFulltextSection(query, gen, resultsContainer, metaScored) {
    const pf = await getPagefind();
    if (!pf || gen !== searchGeneration) return;

    let res;
    try {
        res = await pf.search(query);
    } catch (err) {
        return;
    }
    if (gen !== searchGeneration) return;

    // 메타 검색에 이미 나온 글 제외 (path 정규화: 선행/후행 슬래시)
    const known = new Set(metaScored.map(s => '/' + String(s.article.path || '').replace(/^\/+/, '')));
    const picks = [];
    for (const r of res.results) {
        if (picks.length >= FULLTEXT_MAX) break;
        const d = await r.data();
        if (gen !== searchGeneration) return;
        if (known.has(d.url)) continue;
        picks.push(d);
    }
    if (gen !== searchGeneration || picks.length === 0) return;

    const t = window.IndexPage.t || function(k) { return k; };
    const itemsHtml = picks.map(d => {
        const title = (d.meta && d.meta.title) ? d.meta.title : d.url;
        return `
            <a href="${d.url}" class="search-fulltext-item block p-4 rounded-lg border transition-colors">
                <h4 class="text-base font-bold mb-1">${title}</h4>
                <p class="search-excerpt text-sm search-desc">${d.excerpt || ''}</p>
            </a>`;
    }).join('');

    const section = document.createElement('div');
    section.id = 'search-fulltext';
    section.innerHTML = `
        <h3 class="text-lg font-bold mt-8 mb-1">${t('search.fulltext')} (${res.results.length})</h3>
        <p class="text-xs search-meta mb-4">${t('search.fulltextNote')}</p>
        <div class="space-y-3">${itemsHtml}</div>`;
    const old = document.getElementById('search-fulltext');
    if (old) old.remove();
    resultsContainer.appendChild(section);

    sendAnalyticsEvent('blog_search_fulltext', {
        search_term: query,
        fulltext_count: res.results.length
    });
}

// Export to namespace
window.IndexPage.updateCategoryTitles = updateCategoryTitles;
window.IndexPage.setupSearch = setupSearch;
