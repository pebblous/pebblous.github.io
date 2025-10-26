/**
 * Pebblous Footer Loader
 * Automatically loads the common footer component
 *
 * Usage:
 * 1. Add this line before </body>:
 *    <div id="footer-placeholder"></div>
 * 2. Include this script:
 *    <script src="/components/footer-loader.js"></script>
 */

(function() {
    // Load footer HTML
    function loadFooter() {
        const placeholder = document.getElementById('footer-placeholder');

        if (!placeholder) {
            console.warn('Footer placeholder not found. Add <div id="footer-placeholder"></div> to your HTML.');
            return;
        }

        // Use absolute path from root
        fetch('/components/footer.html')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load footer: ${response.status} ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                placeholder.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading footer:', error);
                placeholder.innerHTML = '<p class="text-center text-gray-500 py-8">Footer could not be loaded.</p>';
            });
    }

    // Load footer when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', loadFooter);
    } else {
        loadFooter();
    }
})();
