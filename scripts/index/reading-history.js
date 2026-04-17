// ============================================================
// Reading History Drawer — Index Page
// Shows articles the user has previously visited
// ============================================================

window.IndexPage = window.IndexPage || {};

(function() {
    var STORAGE_KEY = 'pebblous-reading-history';

    function getHistory() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
        } catch (e) { return {}; }
    }

    function getHistoryList() {
        var history = getHistory();
        return Object.keys(history).map(function(path) {
            var entry = history[path];
            return {
                path: path,
                title: entry.title,
                date: entry.date,
                visits: entry.visits,
                lastVisit: entry.lastVisit
            };
        }).sort(function(a, b) {
            return new Date(b.lastVisit) - new Date(a.lastVisit);
        });
    }

    function formatDateTime(isoStr) {
        if (!isoStr) return '';
        var d = new Date(isoStr);
        var pad = function(n) { return n < 10 ? '0' + n : n; };
        return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) +
               ' ' + pad(d.getHours()) + ':' + pad(d.getMinutes());
    }

    function renderDrawerContent() {
        var list = getHistoryList();
        var container = document.getElementById('reading-history-list');
        if (!container) return;

        if (list.length === 0) {
            var t = window.IndexPage.t || function(k) { return k; };
            container.innerHTML = '<p class="reading-history-empty">' + t('history.empty') + '</p>';
            return;
        }

        container.innerHTML = list.map(function(item) {
            return '<a href="' + item.path + '" class="reading-history-item">' +
                '<div class="reading-history-title">' + item.title + '</div>' +
                '<div class="reading-history-meta">' +
                    '<span>' + (item.date || '') + '</span>' +
                    '<span class="reading-history-dot"></span>' +
                    '<span>' + formatDateTime(item.lastVisit) + '</span>' +
                    '<span class="reading-history-dot"></span>' +
                    '<span class="reading-history-visits">' + item.visits + 'x</span>' +
                '</div>' +
            '</a>';
        }).join('');
    }

    function openDrawer() {
        var drawer = document.getElementById('reading-history-drawer');
        var overlay = document.getElementById('reading-history-overlay');
        if (!drawer || !overlay) return;

        renderDrawerContent();
        overlay.classList.add('is-open');
        drawer.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeDrawer() {
        var drawer = document.getElementById('reading-history-drawer');
        var overlay = document.getElementById('reading-history-overlay');
        if (!drawer || !overlay) return;

        overlay.classList.remove('is-open');
        drawer.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    function getHistoryCount() {
        return Object.keys(getHistory()).length;
    }

    function updateBadge() {
        var badge = document.getElementById('reading-history-badge');
        var count = getHistoryCount();
        if (badge) {
            badge.textContent = count;
            badge.style.display = count > 0 ? '' : 'none';
        }
    }

    document.addEventListener('DOMContentLoaded', function() {
        // Toggle button(s)
        document.querySelectorAll('.reading-history-toggle').forEach(function(btn) {
            btn.addEventListener('click', openDrawer);
        });

        // Close button
        var closeBtn = document.getElementById('reading-history-close');
        if (closeBtn) closeBtn.addEventListener('click', closeDrawer);

        // Overlay click
        var overlay = document.getElementById('reading-history-overlay');
        if (overlay) overlay.addEventListener('click', closeDrawer);

        // ESC key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeDrawer();
        });

        updateBadge();
    });

    // Export
    window.IndexPage.openReadingHistory = openDrawer;
    window.IndexPage.closeReadingHistory = closeDrawer;
    window.IndexPage.getReadingHistoryCount = getHistoryCount;
})();
