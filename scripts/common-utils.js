/**
 * Pebblous Blog - Common Utilities
 * Shared JavaScript utilities for all blog pages
 */

// ========================================
// Theme Management
// ========================================
const PebblousTheme = {
    themes: {
        dark: {
            logoImage: "https://pebblous.github.io/image/Pebblous_BM_Orange_RGB.png",
            name: "dark"
        },
        light: {
            logoImage: "https://pebblous.github.io/image/Pebblous_BM_Black_RGB.png",
            name: "light"
        },
        beige: {
            logoImage: "https://pebblous.github.io/image/Pebblous_BM_Orange_RGB.png",
            name: "beige"
        }
    },

    icons: {
        dark: 'M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z',
        light: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z',
        beige: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
    },

    /**
     * Initialize theme switcher
     * @param {string} defaultTheme - Default theme name (dark, light, beige)
     */
    init(defaultTheme = 'dark') {
        const switcher = document.getElementById('theme-switcher');
        if (!switcher) {
            console.warn('Theme switcher element not found');
            return;
        }

        // Create theme buttons
        Object.keys(this.themes).forEach(name => {
            const btn = document.createElement('button');
            btn.dataset.theme = name;
            btn.className = 'p-1 rounded-full transition-colors duration-300';
            btn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${this.icons[name]}"></path></svg>`;
            btn.onclick = () => this.apply(name);
            switcher.appendChild(btn);
        });

        // Apply initial theme from URL or default
        const urlTheme = new URLSearchParams(window.location.search).get('theme');
        const initialTheme = (urlTheme && this.themes[urlTheme]) ? urlTheme : defaultTheme;
        this.apply(initialTheme);
    },

    /**
     * Apply theme
     * @param {string} themeName - Theme name to apply
     */
    apply(themeName) {
        const theme = this.themes[themeName];
        if (!theme) {
            console.warn(`Theme ${themeName} not found`);
            return;
        }

        // Update logo
        const pageLogo = document.getElementById('page-logo');
        if (pageLogo) {
            pageLogo.src = theme.logoImage;
        }

        // Update theme attribute
        document.documentElement.setAttribute('data-theme', themeName);

        // Update active button
        const buttons = document.querySelectorAll('#theme-switcher button');
        buttons.forEach(btn => {
            if (btn.dataset.theme === themeName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }
};

// ========================================
// Component Loader
// ========================================
const PebblousComponents = {
    /**
     * Load header component
     */
    async loadHeader() {
        try {
            const response = await fetch('/components/header.html');
            const html = await response.text();
            const placeholder = document.getElementById('header-placeholder');
            if (placeholder) {
                placeholder.innerHTML = html;
            }
        } catch (error) {
            console.error('Error loading header:', error);
        }
    },

    /**
     * Load footer component
     */
    async loadFooter() {
        try {
            const response = await fetch('/components/footer.html');
            const html = await response.text();
            const placeholder = document.getElementById('footer-placeholder');
            if (placeholder) {
                placeholder.innerHTML = html;
            }
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    },

    /**
     * Load share buttons component
     */
    async loadShareButtons() {
        try {
            const response = await fetch('/components/share-buttons.html');
            const html = await response.text();
            const placeholder = document.getElementById('share-buttons-placeholder');
            if (placeholder) {
                placeholder.innerHTML = html;
            }
        } catch (error) {
            console.error('Error loading share buttons:', error);
        }
    },

    /**
     * Load all components
     */
    async loadAll() {
        await Promise.all([
            this.loadHeader(),
            this.loadFooter(),
            this.loadShareButtons()
        ]);
    }
};

// ========================================
// UI Utilities
// ========================================
const PebblousUI = {
    /**
     * Initialize scroll-to-top button
     */
    initScrollToTop() {
        const scrollTopBtn = document.getElementById('scrollTopBtn');
        if (!scrollTopBtn) return;

        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                scrollTopBtn.classList.remove('hidden');
            } else {
                scrollTopBtn.classList.add('hidden');
            }
        }, { passive: true });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    /**
     * Initialize Table of Contents active link tracking
     * @param {string} tocSelector - Selector for TOC links (default: '#toc-links a')
     * @param {string} sectionSelector - Selector for sections (default: 'main section[id]')
     */
    initTOC(tocSelector = '#toc-links a', sectionSelector = 'main section[id]') {
        const tocLinks = document.querySelectorAll(tocSelector);
        if (tocLinks.length === 0) return;

        const sections = Array.from(document.querySelectorAll(sectionSelector));

        window.addEventListener('scroll', () => {
            let currentSectionId = '';
            const scrollY = window.pageYOffset;

            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                if (scrollY >= sectionTop) {
                    currentSectionId = section.getAttribute('id');
                }
            });

            tocLinks.forEach(link => {
                link.classList.remove('themeable-toc-link-active');
                link.classList.add('border-transparent');
                const href = link.getAttribute('href');
                if (href === `#${currentSectionId}`) {
                    link.classList.add('themeable-toc-link-active');
                    link.classList.remove('border-transparent');
                }
            });
        }, { passive: true });
    },

    /**
     * Initialize mobile TOC toggle
     */
    initMobileTOC() {
        const mobileTocToggle = document.getElementById('mobile-toc-toggle');
        const mobileTocMenu = document.getElementById('mobile-toc-menu');
        if (!mobileTocToggle || !mobileTocMenu) return;

        // Toggle menu
        mobileTocToggle.addEventListener('click', () => {
            mobileTocMenu.classList.toggle('show');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.mobile-toc-item').forEach(item => {
            item.addEventListener('click', () => {
                mobileTocMenu.classList.remove('show');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileTocMenu.contains(e.target) && !mobileTocToggle.contains(e.target)) {
                mobileTocMenu.classList.remove('show');
            }
        });
    },

    /**
     * Initialize fade-in card animations
     */
    initFadeInCards() {
        const fadeInCards = document.querySelectorAll('.fade-in-card');
        if (fadeInCards.length === 0) return;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeInCards.forEach(card => {
            observer.observe(card);
        });
    },

    /**
     * Initialize all UI features
     */
    initAll() {
        this.initScrollToTop();
        this.initTOC();
        this.initMobileTOC();
        this.initFadeInCards();
    }
};

// ========================================
// Page Configuration Helper
// ========================================
const PebblousPage = {
    /**
     * Apply static page configuration
     * @param {object} config - Page configuration object
     */
    applyConfig(config) {
        // Set title
        if (config.mainTitle && config.subtitle) {
            const h1Element = document.getElementById('page-h1-title');
            if (h1Element) {
                h1Element.innerHTML = `
                    <span class="block text-4xl md:text-5xl font-bold themeable-heading" style="font-size: 3rem !important; font-weight: 700 !important; line-height: 1.3 !important;">${config.mainTitle}</span>
                    <span class="block mt-4 text-2xl md:text-3xl themeable-text-muted font-normal" style="font-size: 1.875rem !important; font-weight: 400 !important; margin-top: 1rem !important; line-height: 1.5 !important;">${config.subtitle}</span>
                `;
            }
        }

        // Set meta info
        if (config.publishDate) {
            const publishDate = document.getElementById('publish-date');
            if (publishDate) {
                publishDate.textContent = `발행일: ${config.publishDate}`;
            }
        }

        if (config.publisher) {
            const publisher = document.getElementById('publisher');
            if (publisher) {
                publisher.textContent = `기획: ${config.publisher}`;
            }
        }

        // Set page title
        if (config.pageTitle) {
            document.title = config.pageTitle;
            const pageTitleEl = document.getElementById('page-title');
            if (pageTitleEl) {
                pageTitleEl.textContent = config.pageTitle;
            }
        }
    },

    /**
     * Initialize page with config
     * @param {object} config - Page configuration
     */
    async init(config) {
        // Load components first
        await PebblousComponents.loadAll();

        // Initialize theme after header is loaded
        PebblousTheme.init(config.defaultTheme || 'dark');

        // Apply page config
        this.applyConfig(config);

        // Initialize UI features
        PebblousUI.initAll();

        // Initialize comments if enabled
        if (config.enableComments !== false) {
            PebblousComments.init(config.commentsMessage);
        }

        // Render math if KaTeX is available
        if (window.renderMathInElement) {
            renderMathInElement(document.body, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false}
                ]
            });
        }
    }
};

// ========================================
// Comments System (giscus)
// ========================================
const PebblousComments = {
    /**
     * Initialize giscus comments with auto-injection
     * Purpose: Commercial - User engagement, question collection, contact point gathering
     * @param {string} customMessage - Optional custom message for this article (e.g., "데이터 품질에 대한 질문이나 의견이 있으신가요?")
     */
    init(customMessage = null) {
        console.log('🔧 [PebblousComments] Initializing comments...', {
            customMessage,
            pathname: window.location.pathname
        });

        let commentsContainer = document.getElementById('comments-section');

        // Auto-create comments section if it doesn't exist
        if (!commentsContainer) {
            console.log('📝 [PebblousComments] No existing comments section found, creating one...');
            commentsContainer = this.createCommentsSection(customMessage);
            if (!commentsContainer) {
                console.warn('❌ [PebblousComments] Failed to create comments section');
                return;
            }
            console.log('✅ [PebblousComments] Comments section created successfully');
        } else {
            console.log('✅ [PebblousComments] Found existing comments section');
        }

        // Find the actual container for giscus (inside the card)
        const giscusContainer = commentsContainer.querySelector('.themeable-card');
        if (!giscusContainer) {
            console.warn('❌ [PebblousComments] Comments card container not found');
            return;
        }

        // Create giscus script
        console.log('🚀 [PebblousComments] Loading giscus script...');
        const script = document.createElement('script');
        script.src = 'https://giscus.app/client.js';
        script.setAttribute('data-repo', 'pebblous/pebblous.github.io');
        script.setAttribute('data-repo-id', 'R_kgDOP3KO9Q');
        script.setAttribute('data-category', 'Blog Comments');
        script.setAttribute('data-category-id', 'DIC_kwDOP3KO9c4Cxo0P');
        script.setAttribute('data-mapping', 'pathname');
        script.setAttribute('data-strict', '0');
        script.setAttribute('data-reactions-enabled', '1');
        script.setAttribute('data-emit-metadata', '1'); // Enable metadata for contact collection
        script.setAttribute('data-input-position', 'top');
        script.setAttribute('data-theme', 'dark'); // Match Pebblous dark theme
        script.setAttribute('data-lang', 'ko');
        script.setAttribute('data-loading', 'lazy');
        script.crossOrigin = 'anonymous';
        script.async = true;

        script.onload = () => console.log('✅ [PebblousComments] giscus script loaded');
        script.onerror = () => console.error('❌ [PebblousComments] Failed to load giscus script');

        giscusContainer.appendChild(script);
        console.log('📌 [PebblousComments] giscus script appended to DOM');

        // Listen for giscus events (for commercial tracking)
        window.addEventListener('message', (event) => {
            if (event.origin !== 'https://giscus.app') return;

            const giscusData = event.data?.giscus;
            if (!giscusData) return;

            // Track user engagement
            if (giscusData.discussion) {
                console.log('📊 Comment engagement:', {
                    discussion: giscusData.discussion,
                    reactions: giscusData.discussion.reactions
                });

                // Future: Send to analytics for contact point collection
                // Analytics tracking can be added here
            }
        });
    },

    /**
     * Create comments section HTML dynamically
     * @param {string} customMessage - Optional custom message
     * @returns {HTMLElement} The created comments section
     */
    createCommentsSection(customMessage) {
        console.log('🏗️ [PebblousComments] Creating comments section...', { customMessage });

        // Find main element to append to
        const mainElement = document.querySelector('main');
        if (!mainElement) {
            console.warn('❌ [PebblousComments] Main element not found');
            return null;
        }
        console.log('✅ [PebblousComments] Found main element');

        // Create section element
        const section = document.createElement('section');
        section.id = 'comments-section';
        section.className = 'mb-16 fade-in-card is-visible';

        // Build intro message
        const introMessage = customMessage
            ? `<p class="mt-2">${customMessage} GitHub 계정으로 로그인하여 댓글을 남겨주세요. 여러분의 소중한 의견은 더 나은 콘텐츠를 만드는 데 큰 도움이 됩니다.</p>`
            : `<p class="mt-2">GitHub 계정으로 로그인하여 댓글을 남겨주세요. 여러분의 소중한 의견은 더 나은 콘텐츠를 만드는 데 큰 도움이 됩니다.</p>`;

        // Build section HTML
        section.innerHTML = `
            <h2 class="text-2xl font-bold themeable-heading mb-6">💬 의견 나누기</h2>
            <div class="themeable-card rounded-xl p-8">
                <div class="comments-info">
                    <strong>독자 여러분의 의견을 듣고 싶습니다!</strong>
                    ${introMessage}
                    <p class="mt-2 text-xs opacity-75">
                        💼 <strong>비즈니스 문의:</strong> 페블러스 DataClinic에 대한 상담이 필요하시다면
                        <a href="https://dataclinic.ai/ko/contact" class="text-orange-500 hover:underline" target="_blank">여기</a>를
                        클릭하거나, GitHub 프로필에 LinkedIn을 연결하여 댓글로 문의해 주세요.
                    </p>
                </div>
                <!-- giscus comments will be loaded here -->
            </div>
        `;

        // Append to main element
        mainElement.appendChild(section);
        console.log('✅ [PebblousComments] Comments section appended to main element');

        return section;
    }
};

// Export to global scope
window.PebblousTheme = PebblousTheme;
window.PebblousComponents = PebblousComponents;
window.PebblousUI = PebblousUI;
window.PebblousPage = PebblousPage;
window.PebblousComments = PebblousComments;
