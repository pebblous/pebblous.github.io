// ============================================================
// PebblousCardRenderer — Shared card rendering & interactions
// Used by: index page (articles.js) + hub pages (hub-cards.js)
// Dependencies: card-particles.js (loaded before this script)
// ============================================================

window.PebblousCardRenderer = (function() {
    'use strict';

    const GRID_CLASS = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8';

    // ---- Responsive column detection ----

    function getColumnsPerRow() {
        const w = window.innerWidth;
        if (w < 640) return 1;
        if (w < 1024) return 2;
        if (w < 1280) return 3;
        return 4;
    }

    // ---- Image URL resolution ----

    function resolveImageUrl(path) {
        if (!path || path.startsWith('http')) return path;
        const baseUrl = (location.hostname === 'localhost' || location.hostname === '127.0.0.1')
            ? location.origin
            : 'https://blog.pebblous.ai';
        return path.startsWith('/') ? baseUrl + path : baseUrl + '/' + path;
    }

    // ---- Card Interactions ----

    function initCardInteractions(cards) {
        const fadeInObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
                    entry.target.classList.add('visible');
                    fadeInObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

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
                    const scrollSpeed = 50;
                    const scrollDuration = (scrollDistance / scrollSpeed) * 1000;

                    card.addEventListener('mouseenter', function() {
                        scroll.style.transform = 'translateX(-' + scrollDistance + 'px)';
                        scroll.style.transition = 'transform ' + scrollDuration + 'ms linear';
                        setTimeout(function() {
                            if (scroll.style.transform.includes('-')) {
                                container.classList.add('scrolled');
                            }
                        }, 300);
                    });

                    card.addEventListener('mouseleave', function() {
                        scroll.style.transform = 'translateX(0)';
                        scroll.style.transition = 'transform ' + (scrollDuration * 0.7) + 'ms linear';
                        setTimeout(function() {
                            container.classList.remove('scrolled');
                        }, 300);
                    });
                }
            }

            // Video hover play/pause
            var video = card.querySelector('video[data-animated]');
            if (video) {
                card.addEventListener('mouseenter', function() {
                    video.play().catch(function(err) {
                        console.log('Video autoplay prevented:', err);
                    });
                });
                card.addEventListener('mouseleave', function() {
                    video.pause();
                    video.currentTime = 0;
                });
                card.addEventListener('touchstart', function() {
                    card.classList.add('touch-active');
                    video.play().catch(function() {});
                }, { passive: true });
                card.addEventListener('touchend', function() {
                    card.classList.remove('touch-active');
                    video.pause();
                    video.currentTime = 0;
                }, { passive: true });
            }

            // Image GIF swap on hover
            var img = card.querySelector('img[data-static][data-animated]');
            if (img) {
                var staticSrc = img.dataset.static;
                var animatedSrc = img.dataset.animated;
                var animatedLoaded = false;
                var preloadImg = new Image();
                preloadImg.onload = function() { animatedLoaded = true; };
                preloadImg.src = animatedSrc;

                card.addEventListener('mouseenter', function() {
                    if (animatedLoaded) img.src = animatedSrc;
                });
                card.addEventListener('mouseleave', function() {
                    if (img.src.includes(animatedSrc)) img.src = staticSrc;
                });
                card.addEventListener('touchstart', function() {
                    if (!animatedLoaded) return;
                    card.classList.add('touch-active');
                    img.src = animatedSrc;
                }, { passive: true });
                card.addEventListener('touchend', function() {
                    card.classList.remove('touch-active');
                    if (img.src.includes(animatedSrc)) img.src = staticSrc;
                }, { passive: true });
            }

            // Particle canvas
            var particleCanvas = card.querySelector('.card-particles');
            if (particleCanvas && typeof initCardParticle === 'function') {
                initCardParticle(card, particleCanvas);
            }
        });
    }

    // ---- Card HTML rendering ----

    /**
     * @param {Object} article     - Article data from articles.json
     * @param {number} index       - Index for animation delay
     * @param {Object} [options]
     * @param {number} [options.initialLimit=8] - Delay applies only below this index
     * @param {Function} [options.t]            - Translation fn (default: identity)
     * @param {string} [options.cardType]       - 'link' | 'external' | 'modal' (default: auto-detect)
     */
    // Default translations when no t() function is provided
    var DEFAULT_LABELS = {
        'articles.featured': 'Featured',
        'articles.locked': 'Password required'
    };

    function renderCard(article, index, options) {
        options = options || {};
        var initialLimit = options.initialLimit || 8;
        var t = options.t || function(k) { return DEFAULT_LABELS[k] || k; };

        var isFeatured = article.featured || false;
        var isExternal = article.external || false;
        var hasModal = article.hasModal || false;
        var cardType = options.cardType || (hasModal ? 'modal' : (isExternal ? 'external' : 'link'));

        // Image resolution: cardImage > image > particle fallback
        var displayImage = (article.cardImage && article.cardImage.trim()) ? article.cardImage : article.image;
        displayImage = resolveImageUrl(displayImage);

        var featuredBadge = isFeatured
            ? '<span class="featured-badge">' + t('articles.featured') + '</span>'
            : '';

        // Media: animated video > animated GIF swap > art image > particle canvas
        var isAnimatedVideo = article.imageAnimated && (
            article.imageAnimated.toLowerCase().endsWith('.mp4') ||
            article.imageAnimated.toLowerCase().endsWith('.m4v')
        );
        var isArt = article.category === 'art';

        var imageTag;
        if (isAnimatedVideo) {
            var mimeType = article.imageAnimated.toLowerCase().endsWith('.m4v') ? 'video/x-m4v' : 'video/mp4';
            imageTag = '<div class="relative w-full aspect-[1200/630] overflow-hidden bg-slate-900 group/img">'
                + '<video class="w-full h-full object-cover rounded-md" data-animated muted loop playsinline preload="metadata">'
                + '<source src="' + article.imageAnimated + '" type="' + mimeType + '">'
                + '</video></div>';
        } else if (article.imageAnimated && displayImage) {
            imageTag = '<div class="relative w-full aspect-[1200/630] overflow-hidden bg-slate-900 group/img">'
                + '<img src="' + displayImage + '" alt="' + article.title + '" class="w-full h-full object-cover rounded-md"'
                + ' data-static="' + displayImage + '" data-animated="' + article.imageAnimated + '" loading="lazy">'
                + '</div>';
        } else if (isArt && displayImage) {
            imageTag = '<div class="relative w-full aspect-[1200/630] overflow-hidden bg-slate-900 group/img">'
                + '<img src="' + displayImage + '" alt="' + article.title + '" class="w-full h-full object-cover rounded-md" loading="lazy">'
                + '</div>';
        } else {
            imageTag = '<div class="relative w-full aspect-[1200/630] overflow-hidden card-particle-area">'
                + '<canvas class="card-particles"></canvas></div>';
        }

        var isLocked = article.locked || false;

        var tagsHtml = (article.tags || []).map(function(tag) { return '<span class="tag">' + tag + '</span>'; }).join('');
        var tagsScrollHtml = '<div class="tags-container mb-3"><div class="tags-scroll">' + tagsHtml + '</div></div>';
        var animationDelay = index < initialLimit ? 'style="animation-delay: ' + (index * 0.1) + 's;"' : '';
        var href = article.path ? (article.path.startsWith('/') ? article.path : '/' + article.path) : '#';

        // Lock badge for password-protected posts
        var lockBadge = isLocked
            ? '<span class="card-lock-badge" title="' + t('articles.locked') + '">'
                + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="14" height="14">'
                + '<path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />'
                + '</svg></span>'
            : '';

        // Append lock notice to description for locked posts
        var descText = article.description || '';
        if (isLocked && descText.indexOf('암호') === -1 && descText.indexOf('password') === -1 && descText.indexOf('Password') === -1) {
            var lockNotice = (article.language === 'en') ? ' (Password required)' : ' (암호 필요)';
            descText += lockNotice;
        }

        // Content block (shared across all types)
        var contentBlock = '<div class="p-6 flex-grow">'
            + '<div class="flex items-center gap-2 mb-2">'
            + '<span class="text-xs text-slate-500">' + article.date + '</span>'
            + featuredBadge
            + lockBadge
            + '</div>'
            + tagsScrollHtml
            + '<h3 class="text-2xl font-bold text-white group-hover:accent-color transition-colors">' + article.title + '</h3>'
            + '<p class="mt-3 text-sm text-slate-400">' + descText + '</p>'
            + '</div>';

        if (cardType === 'modal') {
            return '<div class="card rounded-lg overflow-hidden flex flex-col group fade-in" ' + animationDelay + '>'
                + contentBlock.replace('group-hover:accent-color transition-colors', 'mb-3')
                    .replace('mt-3 text-sm', 'text-sm')
                + '<div class="pl-6 pr-3 pb-0 flex justify-end">'
                + '<div class="icon-panel">'
                + '<button onclick="openModal(\'' + article.modalId + '\')" class="icon-button">'
                + '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">'
                + '<path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />'
                + '<path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />'
                + '</svg></button>'
                + '<a href="' + href + '" target="_blank" rel="noopener noreferrer" class="icon-button">'
                + '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">'
                + '<path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />'
                + '</svg></a>'
                + '</div></div>'
                + imageTag
                + '</div>';
        } else if (cardType === 'external') {
            return '<a href="' + href + '" target="_blank" rel="noopener noreferrer" class="card rounded-lg overflow-hidden group flex flex-col fade-in" ' + animationDelay + '>'
                + contentBlock + imageTag + '</a>';
        } else {
            // Default: link
            return '<a href="' + href + '" class="card rounded-lg overflow-hidden group flex flex-col fade-in" ' + animationDelay + '>'
                + contentBlock + imageTag + '</a>';
        }
    }

    // ---- Placeholder cells for grid alignment ----

    function fillPlaceholders(container) {
        container.querySelectorAll('.card-placeholder').forEach(function(p) { p.remove(); });
        var cardCount = container.querySelectorAll('.card').length;
        var cols = getColumnsPerRow();
        var remainder = cardCount % cols;
        var empty = remainder === 0 ? 0 : cols - remainder;
        for (var i = 0; i < empty; i++) {
            var ph = document.createElement('div');
            ph.className = 'card-placeholder';
            container.appendChild(ph);
        }
    }

    // ---- Public API ----

    return {
        GRID_CLASS: GRID_CLASS,
        getColumnsPerRow: getColumnsPerRow,
        resolveImageUrl: resolveImageUrl,
        initCardInteractions: initCardInteractions,
        renderCard: renderCard,
        fillPlaceholders: fillPlaceholders
    };
})();
