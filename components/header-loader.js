/**
 * Pebblous Header Loader
 * Automatically loads the common header component
 *
 * Usage:
 * 1. Add this line at the beginning of <body>:
 *    <div id="header-placeholder"></div>
 * 2. Include this script:
 *    <script src="/components/header-loader.js"></script>
 */

(function() {
    // Load header HTML
    function loadHeader() {
        const placeholder = document.getElementById('header-placeholder');

        if (!placeholder) {
            console.warn('Header placeholder not found. Add <div id="header-placeholder"></div> to your HTML.');
            return;
        }

        // Use absolute path from root
        fetch('/components/header.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load header: ${response.status} ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                placeholder.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading header:', error);
                placeholder.innerHTML = '<p class="text-center text-gray-500 py-8">Header could not be loaded.</p>';
            });
    }

    // Load header when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadHeader);
    } else {
        loadHeader();
    }
})();
