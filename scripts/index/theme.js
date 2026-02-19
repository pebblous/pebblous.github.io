// ============================================================
// Theme System (sync load - prevents FOUC)
// ============================================================

(function() {
    const THEMES = ['dark', 'light', 'beige'];
    const THEME_STORAGE_KEY = 'pebblous-theme';
    const LOGO_URLS = {
        dark: 'https://pebblous.github.io/image/Pebblous_BM_White_RGB.png',
        light: 'https://pebblous.github.io/image/Pebblous_BM_Black_RGB.png',
        beige: 'https://pebblous.github.io/image/Pebblous_BM_Orange_RGB.png'
    };

    function getSavedTheme() {
        const saved = localStorage.getItem(THEME_STORAGE_KEY);
        return THEMES.includes(saved) ? saved : 'light';
    }

    function updateLogo(theme) {
        const logo = document.getElementById('header-logo');
        if (logo && LOGO_URLS[theme]) {
            logo.src = LOGO_URLS[theme];
        }
    }

    function applyTheme(theme) {
        requestAnimationFrame(() => {
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem(THEME_STORAGE_KEY, theme);
            updateLogo(theme);
        });
    }

    let themeRotateTimeout;
    function rotateTheme() {
        if (themeRotateTimeout) {
            clearTimeout(themeRotateTimeout);
        }

        themeRotateTimeout = setTimeout(() => {
            const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
            const currentIndex = THEMES.indexOf(currentTheme);
            const nextIndex = (currentIndex + 1) % THEMES.length;
            applyTheme(THEMES[nextIndex]);
        }, 100);
    }

    // Apply theme immediately (before DOMContentLoaded) to prevent flash
    const savedTheme = getSavedTheme();
    document.documentElement.setAttribute('data-theme', savedTheme);

    // Bind toggle buttons after DOM is ready
    document.addEventListener('DOMContentLoaded', () => {
        applyTheme(getSavedTheme());

        const desktopToggle = document.getElementById('theme-toggle-btn');
        const mobileToggle = document.getElementById('theme-toggle-btn-mobile');

        if (desktopToggle) {
            desktopToggle.addEventListener('click', rotateTheme);
        }

        if (mobileToggle) {
            mobileToggle.addEventListener('click', rotateTheme);
        }
    });
})();
