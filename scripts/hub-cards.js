// ============================================================
// PebblousHubCards — Hub page card system
// Delegates card rendering/interactions to PebblousCardRenderer
// Dependencies: card-particles.js, card-renderer.js (loaded before)
// ============================================================

window.PebblousHubCards = (function() {
    'use strict';

    var CR = window.PebblousCardRenderer;

    // ---- Show More / Show Less buttons ----

    function addNavButtons(container, articles, currentCount, initialLimit, renderAndInit) {
        container.querySelectorAll('.hub-nav-buttons').forEach(function(el) { el.remove(); });

        var hasMore = currentCount < articles.length;
        var hasLess = currentCount > initialLimit;
        if (!hasMore && !hasLess) return;

        var wrapper = document.createElement('div');
        wrapper.className = 'hub-nav-buttons col-span-full flex flex-nowrap justify-center items-center gap-3 mt-8';

        if (hasLess) {
            var btn = document.createElement('button');
            btn.className = 'show-less-btn px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-md transition-colors whitespace-nowrap';
            btn.textContent = 'Show Less';
            btn.type = 'button';
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                var decrement = CR.getColumnsPerRow() * 2;
                renderAndInit(Math.max(currentCount - decrement, initialLimit));
                container.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, { passive: false });
            wrapper.appendChild(btn);
        }

        if (hasMore) {
            var btn2 = document.createElement('button');
            btn2.className = 'load-more-btn px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-md transition-colors whitespace-nowrap';
            var remaining = articles.length - currentCount;
            btn2.textContent = 'Show More (' + remaining + ')';
            btn2.type = 'button';
            btn2.addEventListener('click', function(e) {
                e.preventDefault();
                var increment = CR.getColumnsPerRow() * 2;
                renderAndInit(Math.min(currentCount + increment, articles.length));
            }, { passive: false });
            wrapper.appendChild(btn2);
        }

        container.appendChild(wrapper);
    }

    // ---- Public API ----

    async function init(options) {
        var containerId = options.containerId;
        var pathFilter = options.pathFilter;
        var extraPaths = options.extraPaths || [];
        var language = options.language || 'ko';
        var maxCards = options.maxCards || 0;

        try {
            var response = await fetch('/articles.json');
            var data = await response.json();

            var articles = data.articles
                .filter(function(a) {
                    return a.path && a.published && (a.language || 'ko') === language &&
                        (a.path.includes(pathFilter) || extraPaths.some(function(ep) { return a.path.includes(ep); }));
                })
                .sort(function(a, b) { return new Date(b.date) - new Date(a.date); });

            if (maxCards > 0) {
                articles = articles.slice(0, maxCards);
            }

            var container = document.getElementById(containerId);
            if (!container) return;

            container.className = CR.GRID_CLASS + ' mx-auto mb-16';

            var initialLimit = CR.getColumnsPerRow() * 2;

            function renderAll(count) {
                var visible = articles.slice(0, count);
                container.innerHTML = visible.map(function(a, i) {
                    return CR.renderCard(a, i, { initialLimit: initialLimit });
                }).join('');

                CR.fillPlaceholders(container);
                CR.initCardInteractions(Array.from(container.querySelectorAll('.card')));
                addNavButtons(container, articles, count, initialLimit, renderAll);
            }

            renderAll(Math.min(articles.length, initialLimit));

        } catch (error) {
            console.error('PebblousHubCards: Failed to load articles:', error);
        }
    }

    return { init: init };
})();
