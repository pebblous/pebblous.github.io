// ============================================================
// Statistics Modal
// ============================================================

window.IndexPage = window.IndexPage || {};

function setupStatsModal(artArticles, techArticles, businessArticles, storyArticles) {
    const statsContent = document.getElementById('stats-content');
    const statsUpdateDate = document.getElementById('stats-update-date');
    const categories = window.IndexPage._categories;

    const totalArticles = artArticles.length + techArticles.length + businessArticles.length + storyArticles.length;

    const categoryIcons = {
        art: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>`,
        tech: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        </svg>`,
        business: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>`,
        story: `<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>`
    };

    const stats = [
        {
            key: 'art',
            name: categories.art?.name || 'Data Art',
            count: artArticles.length,
            icon: categoryIcons.art,
            color: '#F86825'
        },
        {
            key: 'tech',
            name: categories.tech?.name || 'Tech Insights',
            count: techArticles.length,
            icon: categoryIcons.tech,
            color: '#14b8a6'
        },
        {
            key: 'business',
            name: categories.business?.name || 'Business',
            count: businessArticles.length,
            icon: categoryIcons.business,
            color: '#f59e0b'
        },
        {
            key: 'story',
            name: categories.story?.name || 'Data Stories',
            count: storyArticles.length,
            icon: categoryIcons.story,
            color: '#8b5cf6'
        }
    ];

    statsContent.innerHTML = `
        <div class="stats-category" style="border-color: rgba(100, 116, 139, 0.5);">
            <div class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                    <svg class="w-10 h-10" style="color: #94a3b8;" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    <div>
                        <h3 class="text-lg font-semibold text-white">${(window.IndexPage.t || function(k){return k;})('stats.totalPosts')}</h3>
                        <p class="text-sm text-slate-400">Total Articles</p>
                    </div>
                </div>
                <div class="text-right">
                    <p class="text-3xl font-bold text-white">${totalArticles}</p>
                </div>
            </div>
        </div>
        ${stats.map(stat => `
            <div class="stats-category">
                <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <div style="color: ${stat.color};">${stat.icon}</div>
                        <div>
                            <h3 class="text-base font-semibold text-white">${stat.name}</h3>
                            <div class="w-full bg-slate-700 rounded-full h-2 mt-1">
                                <div class="h-2 rounded-full transition-all duration-500"
                                     style="width: ${totalArticles > 0 ? (stat.count / totalArticles * 100) : 0}%; background-color: ${stat.color};"></div>
                            </div>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-2xl font-bold text-white">${stat.count}</p>
                        <p class="text-xs text-slate-400">${totalArticles > 0 ? Math.round(stat.count / totalArticles * 100) : 0}%</p>
                    </div>
                </div>
            </div>
        `).join('')}
    `;

    const today = new Date();
    statsUpdateDate.textContent = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const modal = document.getElementById('stats-modal');
    const closeBtn = document.getElementById('stats-modal-close');
    const statsBtn = document.getElementById('stats-icon-btn');
    const statsBtnMobile = document.getElementById('stats-icon-btn-mobile');

    const openModal = () => showStatsModal();
    if (statsBtn) statsBtn.addEventListener('click', openModal);
    if (statsBtnMobile) statsBtnMobile.addEventListener('click', openModal);

    const closeModal = () => hideStatsModal();
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('is-open')) {
            closeModal();
        }
    });
}

function showStatsModal() {
    const modal = document.getElementById('stats-modal');
    if (modal) {
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
}

function hideStatsModal() {
    const modal = document.getElementById('stats-modal');
    if (modal) {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
}

// Export to namespace
window.IndexPage.setupStatsModal = setupStatsModal;
