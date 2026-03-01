// ============================================================
// Index Page Initialization (Orchestrator)
// ============================================================

window.IndexPage = window.IndexPage || {};

// Shared state
window.IndexPage._allArticles = [];
window.IndexPage._unfilteredArticles = [];
window.IndexPage._categories = {};

// ============================================================
// Mobile Menu Toggle
// ============================================================

(function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.toggle('is-open');
            mobileMenuBtn.setAttribute('aria-expanded', isOpen);
        });
    }
})();

// ============================================================
// Hero Animation Trigger
// ============================================================

window.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero-fade-in');
    setTimeout(() => {
        heroElements.forEach(el => el.classList.add('animate'));
    }, 100);
});

// ============================================================
// Header Scroll Effect
// ============================================================

(function() {
    const header = document.getElementById('main-header');
    if (!header) return;

    let lastScrollY = 0;
    let scrollTimeout;

    function updateHeader() {
        const currentScrollY = window.scrollY || window.pageYOffset;

        if (currentScrollY > 50) {
            if (!header.classList.contains('backdrop-blur-md')) {
                header.classList.add('backdrop-blur-md', 'shadow-lg');
            }
        } else {
            header.classList.remove('backdrop-blur-md', 'shadow-lg');
        }

        lastScrollY = currentScrollY;
    }

    window.addEventListener('scroll', () => {
        if (scrollTimeout) return;
        scrollTimeout = setTimeout(() => {
            scrollTimeout = null;
            updateHeader();
        }, 10);
    }, { passive: true });

    updateHeader();
})();

// ============================================================
// Load Articles & Initialize
// ============================================================

// ============================================================
// Language Filter
// ============================================================

function applyLanguageFilter(lang) {
    const all = window.IndexPage._unfilteredArticles;
    if (!all || all.length === 0) return;

    // Filter by language
    const filtered = all.filter(function(a) {
        if (!a.language) return true;
        return a.language === lang;
    });

    window.IndexPage._allArticles = filtered;

    // Sort function: featured first, then by date
    var sortArticles = function(articles) {
        return articles.sort(function(a, b) {
            if (a.featured && !b.featured) return -1;
            if (!a.featured && b.featured) return 1;
            return new Date(b.date) - new Date(a.date);
        });
    };

    var artArticles = sortArticles(filtered.filter(function(a) { return a.category === 'art'; }));
    var techArticles = sortArticles(filtered.filter(function(a) { return a.category === 'tech'; }));
    var businessArticles = sortArticles(filtered.filter(function(a) { return a.category === 'business'; }));
    var storyArticles = sortArticles(filtered.filter(function(a) { return a.category === 'story'; }));

    var latestArticles = filtered.slice().sort(function(a, b) {
        return new Date(b.date) - new Date(a.date);
    }).slice(0, 4);

    window.IndexPage._categorizedArticles = {
        featured: latestArticles,
        art: artArticles,
        tech: techArticles,
        business: businessArticles,
        story: storyArticles
    };

    window.IndexPage.renderArticles('featured-articles', latestArticles, 'featured');
    window.IndexPage.renderArticles('art-articles', artArticles, 'art');
    window.IndexPage.renderArticles('tech-articles', techArticles, 'tech');
    window.IndexPage.renderArticles('business-articles', businessArticles, 'business');
    window.IndexPage.renderArticles('story-articles', storyArticles, 'story');

    // Update stats modal
    if (window.IndexPage.setupStatsModal) {
        window.IndexPage.setupStatsModal(artArticles, techArticles, businessArticles, storyArticles);
    }

    // Re-trigger search if active
    var searchInput = document.getElementById('search-input');
    if (searchInput && searchInput.value.trim().length >= 2) {
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
    }

    // Apply translations to any dynamically rendered elements
    if (window.IndexPage.applyTranslations) {
        window.IndexPage.applyTranslations();
    }
}

window.IndexPage.applyLanguageFilter = applyLanguageFilter;

// ============================================================
// Load Articles & Initialize
// ============================================================

async function loadArticles() {
    try {
        const response = await fetch('articles.json', { cache: 'no-store' });
        const data = await response.json();

        // Store in shared state
        window.IndexPage._categories = data.categories;
        window.IndexPage._unfilteredArticles = data.articles.filter(a => a.published);

        // Update category titles
        window.IndexPage.updateCategoryTitles();

        // Apply language filter (handles categorization + rendering)
        const currentLang = window.IndexPage.getCurrentLanguage
            ? window.IndexPage.getCurrentLanguage()
            : 'ko';
        applyLanguageFilter(currentLang);

        // Wire view toggle buttons
        const savedMode = localStorage.getItem('pebblous-view-mode') || 'card';
        window.IndexPage.updateToggleButtons(savedMode);

        const cardBtn = document.getElementById('view-card-btn');
        const listBtn = document.getElementById('view-list-btn');
        if (cardBtn) cardBtn.addEventListener('click', () => window.IndexPage.setViewMode('card'));
        if (listBtn) listBtn.addEventListener('click', () => window.IndexPage.setViewMode('list'));

        // Setup search
        window.IndexPage.setupSearch();
    } catch (error) {
        console.error('Failed to load articles:', error);
        ['art-articles', 'tech-articles', 'business-articles', 'story-articles'].forEach(id => {
            var t = window.IndexPage.t || function(k) { return k; };
            document.getElementById(id).innerHTML = '<p class="text-slate-400 text-center py-10">' + t('articles.loadError') + '</p>';
        });
    }
}

document.addEventListener('DOMContentLoaded', loadArticles);

// ============================================================
// Service Worker Registration
// ============================================================

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('Service Worker registered:', registration.scope);
            })
            .catch(error => {
                console.log('Service Worker registration failed:', error);
            });
    });
}
