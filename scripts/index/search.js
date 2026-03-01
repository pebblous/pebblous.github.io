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

function setupSearch() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const searchResultsList = document.getElementById('search-results-list');
    const searchCount = document.getElementById('search-count');

    let debounceTimer;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        const query = e.target.value.trim().toLowerCase();

        if (query.length < 2) {
            searchResults.classList.remove('has-results');
            return;
        }

        debounceTimer = setTimeout(() => {
            performSearch(query, searchResultsList, searchCount, searchResults);
        }, 300);
    });

    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchInput.value = '';
            searchResults.classList.remove('has-results');
        }
    });

    document.querySelectorAll('.keyword-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            const keyword = btn.textContent.trim();
            searchInput.value = keyword;
            searchInput.focus();
            searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
            performSearch(keyword.toLowerCase(), searchResultsList, searchCount, searchResults);
        });
    });
}

function performSearch(query, resultsContainer, countElement, resultsSection) {
    const allArticles = window.IndexPage._allArticles;
    const categories = window.IndexPage._categories;

    const results = allArticles.filter(article => {
        const searchText = [
            article.title,
            article.description,
            ...article.tags,
            article.category
        ].join(' ').toLowerCase();

        return searchText.includes(query);
    });

    countElement.textContent = results.length;

    if (results.length === 0) {
        var t = window.IndexPage.t || function(k) { return k; };
        resultsContainer.innerHTML = '<p class="no-results text-center py-6">' + t('search.noResults') + '</p>';
        resultsSection.classList.add('has-results');
        return;
    }

    resultsContainer.innerHTML = results.map(article => {
        const categoryInfo = categories[article.category];
        const categoryName = categoryInfo ? `${categoryInfo.icon} ${categoryInfo.name}` : article.category;

        const tagsHtml = article.tags.map(tag => {
            const highlighted = tag.toLowerCase().includes(query)
                ? `<span class="search-highlight">${tag}</span>`
                : tag;
            return `<span class="tag">${highlighted}</span>`;
        }).join('');

        const highlightText = (text) => {
            const regex = new RegExp(`(${query})`, 'gi');
            return text.replace(regex, '<span class="search-highlight">$1</span>');
        };

        return `
            <div class="search-result-item p-4 rounded-lg border transition-colors">
                <div class="flex items-start justify-between gap-4">
                    <div class="flex-grow min-w-0">
                        <div class="tags-container mb-3">
                            <div class="tags-scroll">
                                ${tagsHtml}
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center gap-2 text-xs search-meta mb-2">
                            <span>${article.date}</span>
                            <span>• ${categoryName}</span>
                        </div>
                        <h4 class="text-lg font-bold mb-2">${highlightText(article.title)}</h4>
                        <p class="text-sm">${highlightText(article.description)}</p>
                    </div>
                    <a href="${article.path}" ${article.external ? 'target="_blank" rel="noopener noreferrer"' : ''} class="flex-shrink-0 accent-bg text-white text-sm font-semibold px-4 py-2 rounded-md hover:opacity-90 transition-opacity whitespace-nowrap">
                        ${(window.IndexPage.t || function(k){return k;})('search.readMore')}
                    </a>
                </div>
            </div>
        `;
    }).join('');

    resultsSection.classList.add('has-results');

    const searchResultCards = Array.from(resultsContainer.querySelectorAll('.search-result-item'));
    if (searchResultCards.length > 0) {
        window.IndexPage.initCardInteractions(searchResultCards);
    }
}

// Export to namespace
window.IndexPage.updateCategoryTitles = updateCategoryTitles;
window.IndexPage.setupSearch = setupSearch;
