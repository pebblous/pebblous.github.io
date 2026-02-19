// ============================================================
// Index Page Initialization (Orchestrator)
// ============================================================

window.IndexPage = window.IndexPage || {};

// Shared state
window.IndexPage._allArticles = [];
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

async function loadArticles() {
    try {
        const response = await fetch('articles.json', { cache: 'no-store' });
        const data = await response.json();

        // Store in shared state
        window.IndexPage._categories = data.categories;
        window.IndexPage._allArticles = data.articles.filter(a => a.published);

        const allArticles = window.IndexPage._allArticles;

        // Update category titles
        window.IndexPage.updateCategoryTitles();

        // Sort function: featured first, then by date
        const sortArticles = (articles) => {
            return articles.sort((a, b) => {
                if (a.featured && !b.featured) return -1;
                if (!a.featured && b.featured) return 1;
                return new Date(b.date) - new Date(a.date);
            });
        };

        const artArticles = sortArticles(allArticles.filter(a => a.category === 'art'));
        const techArticles = sortArticles(allArticles.filter(a => a.category === 'tech'));
        const businessArticles = sortArticles(allArticles.filter(a => a.category === 'business'));
        const storyArticles = sortArticles(allArticles.filter(a => a.category === 'story'));

        // Render Latest section
        const latestArticles = [...allArticles]
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 4);
        window.IndexPage.renderArticles('featured-articles', latestArticles, 'featured');

        // Render category articles
        window.IndexPage.renderArticles('art-articles', artArticles);
        window.IndexPage.renderArticles('tech-articles', techArticles);
        window.IndexPage.renderArticles('business-articles', businessArticles);
        window.IndexPage.renderArticles('story-articles', storyArticles);

        // Setup search
        window.IndexPage.setupSearch();

        // Setup statistics modal
        window.IndexPage.setupStatsModal(artArticles, techArticles, businessArticles, storyArticles);
    } catch (error) {
        console.error('Failed to load articles:', error);
        ['art-articles', 'tech-articles', 'business-articles', 'story-articles'].forEach(id => {
            document.getElementById(id).innerHTML = '<p class="text-slate-400 text-center py-10">기사를 불러오는데 실패했습니다.</p>';
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
