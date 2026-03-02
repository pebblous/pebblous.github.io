// ============================================================
// Article Rendering — Index Page
// Delegates card rendering/interactions to PebblousCardRenderer
// ============================================================

window.IndexPage = window.IndexPage || {};

// View mode state
let currentViewMode = localStorage.getItem('pebblous-view-mode') || 'card';

const CR = window.PebblousCardRenderer;

// List Item Rendering
function renderListItem(article, index) {
    const isExternal = article.external || false;
    const hasModal = article.hasModal || false;
    const isFeatured = article.featured || false;

    const tagsHtml = article.tags.slice(0, 3).map(tag => `<span class="tag">${tag}</span>`).join('');
    const delay = index < 20 ? `style="animation-delay: ${index * 0.03}s;"` : '';
    const dateClass = isFeatured ? 'list-date featured' : 'list-date';

    const inner = `
        <span class="${dateClass}">${article.date}</span>
        <h3 class="list-title">${article.title}</h3>
        <div class="list-tags">${tagsHtml}</div>
    `;

    if (hasModal) {
        return `<div class="list-item fade-in" ${delay} onclick="openModal('${article.modalId}')" role="button" tabindex="0">${inner}</div>`;
    }
    return `<a href="${article.path}" ${isExternal ? 'target="_blank" rel="noopener noreferrer"' : ''} class="list-item fade-in" ${delay}>${inner}</a>`;
}

// Article Rendering
function renderArticles(containerId, articles, category) {
    const container = document.getElementById(containerId);

    if (articles.length === 0) {
        var t = window.IndexPage.t || function(k) { return k; };
        container.innerHTML = '<p class="text-slate-400 text-center py-10">' + t('articles.empty') + '</p>';
        return;
    }

    // Featured section always card mode; others follow toggle
    const effectiveMode = (category === 'featured') ? 'card' : currentViewMode;

    // List mode: simple rendering, all items
    if (effectiveMode === 'list') {
        container.className = 'list-view-container';
        container.innerHTML = articles.map((a, i) => renderListItem(a, i)).join('');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        container.querySelectorAll('.list-item').forEach(el => observer.observe(el));
        return;
    }

    // Card mode: restore grid classes (skip featured — it has its own grid)
    if (category !== 'featured') {
        container.className = CR.GRID_CLASS;
    }

    const initialColumnsPerRow = CR.getColumnsPerRow();
    const initialLimit = initialColumnsPerRow * 2;
    let currentDisplayCount = initialLimit;
    let previousDisplayCount = 0;

    var t = window.IndexPage.t || function(k) { return k; };

    const updateDisplay = (isIncreasing) => {
        const existingButtons = container.querySelectorAll('.col-span-full');
        existingButtons.forEach(btn => btn.remove());

        if (isIncreasing) {
            const newArticles = articles.slice(previousDisplayCount, currentDisplayCount);

            const oldPlaceholders = container.querySelectorAll('.card-placeholder');
            oldPlaceholders.forEach(p => p.remove());

            newArticles.forEach((article, index) => {
                const cardDiv = document.createElement('div');
                cardDiv.innerHTML = CR.renderCard(article, previousDisplayCount + index, { initialLimit: initialLimit, t: t });
                container.appendChild(cardDiv.firstElementChild);
            });

            const newCards = Array.from(container.querySelectorAll('.card')).slice(-newArticles.length);
            CR.initCardInteractions(newCards);
        } else {
            const cardsToKeep = currentDisplayCount;
            const allCards = container.querySelectorAll('.card, .card-placeholder');

            for (let i = allCards.length - 1; i >= cardsToKeep; i--) {
                allCards[i].remove();
            }

            const oldPlaceholders = container.querySelectorAll('.card-placeholder');
            oldPlaceholders.forEach(p => p.remove());
        }

        CR.fillPlaceholders(container);

        const hasMore = currentDisplayCount < articles.length;
        const hasLess = currentDisplayCount > initialLimit;

        if (hasMore || hasLess) {
            const navWrapper = document.createElement('div');
            navWrapper.className = 'col-span-full flex flex-nowrap justify-center items-center gap-3 mt-8';

            if (hasLess) {
                const showLessBtn = document.createElement('button');
                showLessBtn.id = `showless-${category}`;
                showLessBtn.className = 'show-less-btn px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-md transition-colors whitespace-nowrap';
                showLessBtn.textContent = t('articles.showLess');
                showLessBtn.setAttribute('type', 'button');

                showLessBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    previousDisplayCount = currentDisplayCount;
                    const columnsPerRow = CR.getColumnsPerRow();
                    const decrement = columnsPerRow * 2;
                    currentDisplayCount = Math.max(currentDisplayCount - decrement, initialLimit);
                    updateDisplay(false);
                    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, { passive: false });

                navWrapper.appendChild(showLessBtn);
            }

            if (hasMore) {
                const loadMoreBtn = document.createElement('button');
                loadMoreBtn.id = `loadmore-${category}`;
                loadMoreBtn.className = 'load-more-btn px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-md transition-colors whitespace-nowrap';
                const remaining = articles.length - currentDisplayCount;
                loadMoreBtn.textContent = t('articles.showMore') + ` (${remaining})`;
                loadMoreBtn.setAttribute('type', 'button');

                loadMoreBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    previousDisplayCount = currentDisplayCount;
                    const columnsPerRow = CR.getColumnsPerRow();
                    const increment = columnsPerRow * 2;
                    currentDisplayCount = Math.min(currentDisplayCount + increment, articles.length);
                    updateDisplay(true);
                }, { passive: false });

                navWrapper.appendChild(loadMoreBtn);
            }

            container.appendChild(navWrapper);
        }

        previousDisplayCount = currentDisplayCount;
    };

    // Initial render
    const initialArticles = articles.slice(0, initialLimit);
    const cardsHtml = initialArticles.map((article, index) => CR.renderCard(article, index, { initialLimit: initialLimit, t: t })).join('');
    container.innerHTML = cardsHtml;

    CR.fillPlaceholders(container);

    const initialCards = container.querySelectorAll('.card');
    CR.initCardInteractions(Array.from(initialCards));

    if (articles.length > initialLimit) {
        const loadMoreWrapper = document.createElement('div');
        loadMoreWrapper.className = 'col-span-full flex flex-nowrap justify-center items-center mt-8';

        const loadMoreBtn = document.createElement('button');
        loadMoreBtn.id = `loadmore-${category}`;
        loadMoreBtn.className = 'load-more-btn px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-md transition-colors whitespace-nowrap';
        const remaining = articles.length - initialLimit;
        loadMoreBtn.textContent = t('articles.showMore') + ` (${remaining})`;
        loadMoreBtn.setAttribute('type', 'button');

        loadMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            previousDisplayCount = currentDisplayCount;
            const columnsPerRow = CR.getColumnsPerRow();
            const increment = columnsPerRow * 2;
            currentDisplayCount = Math.min(currentDisplayCount + increment, articles.length);
            updateDisplay(true);
        }, { passive: false });

        loadMoreWrapper.appendChild(loadMoreBtn);
        container.appendChild(loadMoreWrapper);
    }
}

// View Mode Toggle
function setViewMode(mode) {
    currentViewMode = mode;
    localStorage.setItem('pebblous-view-mode', mode);

    const cats = window.IndexPage._categorizedArticles;
    if (!cats) return;

    renderArticles('featured-articles', cats.featured, 'featured');
    renderArticles('tech-articles', cats.tech, 'tech');
    renderArticles('business-articles', cats.business, 'business');
    renderArticles('art-articles', cats.art, 'art');
    renderArticles('story-articles', cats.story, 'story');

    updateToggleButtons(mode);
}

function updateToggleButtons(mode) {
    const cardBtn = document.getElementById('view-card-btn');
    const listBtn = document.getElementById('view-list-btn');
    if (!cardBtn || !listBtn) return;

    cardBtn.classList.toggle('active', mode === 'card');
    listBtn.classList.toggle('active', mode === 'list');
}

// Export to namespace
window.IndexPage.renderArticles = renderArticles;
window.IndexPage.initCardInteractions = CR.initCardInteractions;
window.IndexPage.setViewMode = setViewMode;
window.IndexPage.updateToggleButtons = updateToggleButtons;
