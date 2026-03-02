// ============================================================
// PebblousHubCards — Common hub page card system
// Provides index-page-level card rendering for project hub pages
// Dependencies: card-particles.js (loaded before this script)
// ============================================================

window.PebblousHubCards = (function() {
    'use strict';

    const GRID_CLASS = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8';

    // ---- Card Interactions (adapted from scripts/index/articles.js) ----

    function initCardInteractions(cards) {
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
                    entry.target.classList.add('visible');
                    fadeInObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        cards.forEach(card => {
            if (card.classList.contains('fade-in')) {
                fadeInObserver.observe(card);
            }

            // Tags scroll on hover
            const container = card.querySelector('.tags-container');
            const scroll = card.querySelector('.tags-scroll');
            if (container && scroll) {
                const containerWidth = container.offsetWidth;
                const scrollWidth = scroll.scrollWidth;
                const scrollDistance = scrollWidth - containerWidth;

                if (scrollDistance > 0) {
                    container.classList.add('scrollable');
                    const scrollDuration = (scrollDistance / 50) * 1000;

                    card.addEventListener('mouseenter', () => {
                        scroll.style.transform = `translateX(-${scrollDistance}px)`;
                        scroll.style.transition = `transform ${scrollDuration}ms linear`;
                        setTimeout(() => {
                            if (scroll.style.transform.includes('-')) container.classList.add('scrolled');
                        }, 300);
                    });

                    card.addEventListener('mouseleave', () => {
                        scroll.style.transform = 'translateX(0)';
                        scroll.style.transition = `transform ${scrollDuration * 0.7}ms linear`;
                        setTimeout(() => container.classList.remove('scrolled'), 300);
                    });
                }
            }

            // Video hover play/pause
            const video = card.querySelector('video[data-animated]');
            if (video) {
                card.addEventListener('mouseenter', () => video.play().catch(() => {}));
                card.addEventListener('mouseleave', () => { video.pause(); video.currentTime = 0; });
                card.addEventListener('touchstart', () => {
                    card.classList.add('touch-active');
                    video.play().catch(() => {});
                }, { passive: true });
                card.addEventListener('touchend', () => {
                    card.classList.remove('touch-active');
                    video.pause(); video.currentTime = 0;
                }, { passive: true });
            }

            // Image GIF swap on hover
            const img = card.querySelector('img[data-static][data-animated]');
            if (img) {
                const staticSrc = img.dataset.static;
                const animatedSrc = img.dataset.animated;
                let animatedLoaded = false;
                const preloadImg = new Image();
                preloadImg.onload = () => { animatedLoaded = true; };
                preloadImg.src = animatedSrc;

                card.addEventListener('mouseenter', () => { if (animatedLoaded) img.src = animatedSrc; });
                card.addEventListener('mouseleave', () => { if (img.src.includes(animatedSrc)) img.src = staticSrc; });
                card.addEventListener('touchstart', () => {
                    if (!animatedLoaded) return;
                    card.classList.add('touch-active');
                    img.src = animatedSrc;
                }, { passive: true });
                card.addEventListener('touchend', () => {
                    card.classList.remove('touch-active');
                    if (img.src.includes(animatedSrc)) img.src = staticSrc;
                }, { passive: true });
            }

            // Particle canvas
            const particleCanvas = card.querySelector('.card-particles');
            if (particleCanvas && typeof initCardParticle === 'function') {
                initCardParticle(card, particleCanvas);
            }
        });
    }

    // ---- Responsive column detection ----

    function getColumnsPerRow() {
        const w = window.innerWidth;
        if (w < 640) return 1;
        if (w < 1024) return 2;
        if (w < 1280) return 3;
        return 4;
    }

    // ---- Card HTML rendering (adapted from renderCard in articles.js) ----

    function renderCard(article, index, initialLimit) {
        const isFeatured = article.featured || false;
        const isExternal = article.external || false;

        // Image resolution: cardImage > image > particle fallback
        let displayImage = (article.cardImage && article.cardImage.trim()) ? article.cardImage : article.image;
        if (displayImage && !displayImage.startsWith('http')) {
            const baseUrl = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
                ? location.origin
                : 'https://blog.pebblous.ai';
            displayImage = displayImage.startsWith('/')
                ? baseUrl + displayImage
                : baseUrl + '/' + displayImage;
        }

        const featuredBadge = isFeatured
            ? '<span class="featured-badge">Featured</span>'
            : '';

        // Media: animated video > animated GIF swap > art image > particle canvas
        const isAnimatedVideo = article.imageAnimated && (
            article.imageAnimated.toLowerCase().endsWith('.mp4') ||
            article.imageAnimated.toLowerCase().endsWith('.m4v')
        );
        const isArt = article.category === 'art';

        let imageTag;
        if (isAnimatedVideo) {
            const mimeType = article.imageAnimated.toLowerCase().endsWith('.m4v') ? 'video/x-m4v' : 'video/mp4';
            imageTag = `<div class="relative w-full aspect-[1200/630] overflow-hidden bg-slate-900 group/img">
                <video class="w-full h-full object-cover rounded-md" data-animated muted loop playsinline preload="metadata">
                    <source src="${article.imageAnimated}" type="${mimeType}">
                </video>
            </div>`;
        } else if (article.imageAnimated && displayImage) {
            imageTag = `<div class="relative w-full aspect-[1200/630] overflow-hidden bg-slate-900 group/img">
                <img src="${displayImage}" alt="${article.title}" class="w-full h-full object-cover rounded-md"
                     data-static="${displayImage}" data-animated="${article.imageAnimated}" loading="lazy">
            </div>`;
        } else if (isArt && displayImage) {
            imageTag = `<div class="relative w-full aspect-[1200/630] overflow-hidden bg-slate-900 group/img">
                <img src="${displayImage}" alt="${article.title}" class="w-full h-full object-cover rounded-md" loading="lazy">
            </div>`;
        } else {
            imageTag = `<div class="relative w-full aspect-[1200/630] overflow-hidden card-particle-area">
                <canvas class="card-particles"></canvas>
            </div>`;
        }

        const tagsHtml = (article.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('');
        const delay = index < initialLimit ? `style="animation-delay: ${index * 0.1}s;"` : '';
        const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : '';
        const href = article.path.startsWith('/') ? article.path : '/' + article.path;

        return `
            <a href="${href}"${target} class="card rounded-lg overflow-hidden group flex flex-col fade-in" ${delay}>
                <div class="p-6 flex-grow">
                    <div class="flex items-center gap-2 mb-2">
                        <span class="text-xs text-slate-500">${article.date}</span>
                        ${featuredBadge}
                    </div>
                    <div class="tags-container mb-3">
                        <div class="tags-scroll">${tagsHtml}</div>
                    </div>
                    <h3 class="text-2xl font-bold group-hover:accent-color transition-colors">${article.title}</h3>
                    <p class="mt-3 text-sm">${article.description}</p>
                </div>
                ${imageTag}
            </a>`;
    }

    // ---- Placeholder cells for incomplete last row ----

    function fillPlaceholders(container) {
        container.querySelectorAll('.card-placeholder').forEach(p => p.remove());
        const cardCount = container.querySelectorAll('.card').length;
        const cols = getColumnsPerRow();
        const remainder = cardCount % cols;
        const empty = remainder === 0 ? 0 : cols - remainder;
        for (let i = 0; i < empty; i++) {
            const ph = document.createElement('div');
            ph.className = 'card-placeholder';
            container.appendChild(ph);
        }
    }

    // ---- Show More / Show Less buttons ----

    function addNavButtons(container, articles, currentCount, initialLimit, renderAndInit) {
        container.querySelectorAll('.hub-nav-buttons').forEach(el => el.remove());

        const hasMore = currentCount < articles.length;
        const hasLess = currentCount > initialLimit;
        if (!hasMore && !hasLess) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'hub-nav-buttons col-span-full flex flex-nowrap justify-center items-center gap-3 mt-8';

        if (hasLess) {
            const btn = document.createElement('button');
            btn.className = 'show-less-btn px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-md transition-colors whitespace-nowrap';
            btn.textContent = 'Show Less';
            btn.type = 'button';
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const decrement = getColumnsPerRow() * 2;
                renderAndInit(Math.max(currentCount - decrement, initialLimit));
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, { passive: false });
            wrapper.appendChild(btn);
        }

        if (hasMore) {
            const btn = document.createElement('button');
            btn.className = 'load-more-btn px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-md transition-colors whitespace-nowrap';
            const remaining = articles.length - currentCount;
            btn.textContent = `Show More (${remaining})`;
            btn.type = 'button';
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const increment = getColumnsPerRow() * 2;
                renderAndInit(Math.min(currentCount + increment, articles.length));
            }, { passive: false });
            wrapper.appendChild(btn);
        }

        container.appendChild(wrapper);
    }

    // ---- Public API ----

    /**
     * PebblousHubCards.init(options)
     *
     * @param {Object} options
     * @param {string} options.containerId  - DOM id for the card grid container
     * @param {string} options.pathFilter   - substring match against article.path (e.g. 'ISO5259', 'IR/')
     * @param {string} options.language     - 'ko' | 'en'
     * @param {number} [options.gridCols=4] - max columns at xl breakpoint (unused — always 4-col responsive)
     * @param {boolean} [options.showFeaturedBadge=true] - show featured badges
     * @param {number} [options.maxCards=0] - 0 = all articles
     */
    async function init(options) {
        const containerId = options.containerId;
        const pathFilter = options.pathFilter;
        const language = options.language || 'ko';
        const maxCards = options.maxCards || 0;

        try {
            const response = await fetch('/articles.json');
            const data = await response.json();

            let articles = data.articles
                .filter(a => a.path && a.path.includes(pathFilter) && a.published && (a.language || 'ko') === language)
                .sort((a, b) => new Date(b.date) - new Date(a.date));

            if (maxCards > 0) {
                articles = articles.slice(0, maxCards);
            }

            const container = document.getElementById(containerId);
            if (!container) return;

            // Apply responsive grid classes
            container.className = GRID_CLASS + ' mx-auto mb-16';

            const initialLimit = getColumnsPerRow() * 2;

            // Render function for initial + pagination
            function renderAll(count) {
                const visible = articles.slice(0, count);
                container.innerHTML = visible.map((a, i) => renderCard(a, i, initialLimit)).join('');

                fillPlaceholders(container);

                const cards = container.querySelectorAll('.card');
                initCardInteractions(Array.from(cards));

                addNavButtons(container, articles, count, initialLimit, renderAll);
            }

            renderAll(Math.min(articles.length, initialLimit));

        } catch (error) {
            console.error('PebblousHubCards: Failed to load articles:', error);
        }
    }

    return { init: init };
})();
