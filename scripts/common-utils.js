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
    currentTheme: null,
    themeOrder: ['dark', 'light', 'beige'],

    init(defaultTheme = 'light') {
        const switcher = document.getElementById('theme-switcher');
        if (!switcher) {
            console.warn('Theme switcher element not found');
            return;
        }

        // Create desktop theme buttons
        Object.keys(this.themes).forEach(name => {
            const btn = document.createElement('button');
            btn.dataset.theme = name;
            btn.className = 'transition-colors duration-300';
            btn.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${this.icons[name]}"></path></svg>`;
            btn.onclick = () => this.apply(name);
            switcher.appendChild(btn);
        });

        // Mobile cycle button
        const cycleBtn = document.getElementById('theme-cycle-btn');
        if (cycleBtn) {
            cycleBtn.onclick = () => {
                const idx = this.themeOrder.indexOf(this.currentTheme);
                const next = this.themeOrder[(idx + 1) % this.themeOrder.length];
                this.apply(next);
            };
        }

        // Apply initial theme: URL param > default (no OS preference override)
        const urlTheme = new URLSearchParams(window.location.search).get('theme');
        let initialTheme = defaultTheme;
        if (urlTheme && this.themes[urlTheme]) {
            initialTheme = urlTheme;
        }
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

        this.currentTheme = themeName;

        // Update logo
        const pageLogo = document.getElementById('page-logo');
        if (pageLogo) {
            pageLogo.src = theme.logoImage;
        }

        // Update theme attribute
        document.documentElement.setAttribute('data-theme', themeName);

        // Update desktop active button
        const buttons = document.querySelectorAll('#theme-switcher button');
        buttons.forEach(btn => {
            if (btn.dataset.theme === themeName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update mobile cycle button icon
        const cycleBtn = document.getElementById('theme-cycle-btn');
        if (cycleBtn) {
            cycleBtn.innerHTML = `<svg class="w-5 h-5 themeable-heading" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${this.icons[themeName]}"></path></svg>`;
        }

        // Update giscus theme if present
        const giscusFrame = document.querySelector('iframe.giscus-frame');
        if (giscusFrame) {
            const giscusTheme = themeName === 'light' ? 'light' : 'dark';
            giscusFrame.contentWindow.postMessage(
                { giscus: { setConfig: { theme: giscusTheme } } },
                'https://giscus.app'
            );
        }
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
                // Initialize mobile menu toggle
                const menuBtn = document.getElementById('mobile-menu-btn');
                const mobileMenu = document.getElementById('mobile-menu');
                const overlay = document.getElementById('mobile-menu-overlay');

                function openSidebar() {
                    mobileMenu.classList.add('is-open');
                    overlay.classList.add('is-open');
                    menuBtn.setAttribute('aria-expanded', 'true');
                    document.body.style.overflow = 'hidden';
                }
                function closeSidebar() {
                    mobileMenu.classList.remove('is-open');
                    overlay.classList.remove('is-open');
                    menuBtn.setAttribute('aria-expanded', 'false');
                    document.body.style.overflow = '';
                }

                if (menuBtn && mobileMenu) {
                    menuBtn.addEventListener('click', () => {
                        mobileMenu.classList.contains('is-open') ? closeSidebar() : openSidebar();
                    });
                    if (overlay) overlay.addEventListener('click', closeSidebar);
                    mobileMenu.querySelectorAll('a').forEach(link => {
                        link.addEventListener('click', closeSidebar);
                    });
                }
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
                // Extract <style> and move to <head> to prevent flex layout interference
                const temp = document.createElement('div');
                temp.innerHTML = html;
                const styleEl = temp.querySelector('style');
                if (styleEl) {
                    document.head.appendChild(styleEl);
                }
                // Only insert the share-container (not <style>)
                const container = temp.querySelector('.share-container');
                placeholder.innerHTML = '';
                if (container) {
                    // Force tight layout regardless of parent flex context
                    container.style.cssText = 'display:inline-flex !important;gap:0.25rem;width:fit-content;flex:0 0 auto;';
                    placeholder.appendChild(container);
                }
                // Initialize share buttons after HTML is loaded
                this.initShareButtons();
            }
        } catch (error) {
            console.error('Error loading share buttons:', error);
        }
    },

    /**
     * Initialize share buttons event listeners
     */
    initShareButtons() {
        const pageUrl = window.location.href;

        // Try multiple sources for page title
        let pageTitle = document.title;
        const h1Title = document.getElementById('page-h1-title');
        const metaTitle = document.getElementById('page-title');
        const ogTitle = document.querySelector('meta[property="og:title"]');

        if (h1Title && h1Title.textContent.trim()) {
            pageTitle = h1Title.textContent.trim();
        } else if (metaTitle && metaTitle.textContent.trim()) {
            pageTitle = metaTitle.textContent.trim();
        } else if (ogTitle && ogTitle.getAttribute('content')) {
            pageTitle = ogTitle.getAttribute('content');
        }

        // URL 복사
        const copyBtn = document.getElementById('copy-url-btn');
        if (copyBtn) {
            copyBtn.addEventListener('click', async function() {
                try {
                    await navigator.clipboard.writeText(pageUrl);
                    const span = this.querySelector('span');
                    if (span) {
                        const originalText = span.textContent;
                        span.textContent = '복사됨!';
                        setTimeout(() => {
                            span.textContent = originalText;
                        }, 2000);
                    }
                } catch (err) {
                    console.error('URL 복사 실패:', err);
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = pageUrl;
                    textArea.style.position = 'fixed';
                    textArea.style.opacity = '0';
                    document.body.appendChild(textArea);
                    textArea.select();
                    try {
                        document.execCommand('copy');
                        const span = this.querySelector('span');
                        if (span) {
                            const originalText = span.textContent;
                            span.textContent = '복사됨!';
                            setTimeout(() => {
                                span.textContent = originalText;
                            }, 2000);
                        }
                    } catch (err2) {
                        console.error('Fallback 복사 실패:', err2);
                        alert('URL 복사에 실패했습니다.');
                    }
                    document.body.removeChild(textArea);
                }
            });
        }

        // Twitter 공유
        const twitterBtn = document.getElementById('share-twitter-btn');
        if (twitterBtn) {
            twitterBtn.addEventListener('click', function() {
                const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(pageTitle)}`;
                window.open(twitterUrl, '_blank', 'width=550,height=420');
            });
        }

        // Facebook 공유
        const facebookBtn = document.getElementById('share-facebook-btn');
        if (facebookBtn) {
            facebookBtn.addEventListener('click', function() {
                const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
                window.open(facebookUrl, '_blank', 'width=550,height=420');
            });
        }

        // LinkedIn 공유
        const linkedinBtn = document.getElementById('share-linkedin-btn');
        if (linkedinBtn) {
            linkedinBtn.addEventListener('click', function() {
                const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
                window.open(linkedinUrl, '_blank', 'width=550,height=420');
            });
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
     * Auto-injects the button if #scrollTopBtn doesn't exist in the HTML
     */
    initScrollToTop() {
        let scrollTopBtn = document.getElementById('scrollTopBtn');

        // Auto-inject if not present
        if (!scrollTopBtn) {
            scrollTopBtn = document.createElement('button');
            scrollTopBtn.id = 'scrollTopBtn';
            scrollTopBtn.className = 'hidden p-3 rounded-full themeable-accent-bg themeable-accent-text shadow-lg transition-opacity duration-300';
            scrollTopBtn.setAttribute('aria-label', 'Scroll to top');
            scrollTopBtn.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>';
            document.body.appendChild(scrollTopBtn);
        }

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
     * Auto-injects toggle + menu by cloning links from desktop #toc-links if elements are absent
     */
    initMobileTOC() {
        let mobileTocToggle = document.getElementById('mobile-toc-toggle');
        let mobileTocMenu = document.getElementById('mobile-toc-menu');

        // Auto-inject from desktop TOC if not present
        if (!mobileTocToggle || !mobileTocMenu) {
            const desktopTocLinks = document.querySelectorAll('#toc-links a');
            if (desktopTocLinks.length === 0) return;

            const isEn = document.documentElement.lang === 'en';

            // Create toggle button
            mobileTocToggle = document.createElement('button');
            mobileTocToggle.id = 'mobile-toc-toggle';
            mobileTocToggle.className = 'lg:hidden p-3 rounded-full themeable-card border shadow-lg';
            mobileTocToggle.setAttribute('aria-label', 'Toggle table of contents');
            mobileTocToggle.innerHTML = '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>';

            // Create menu
            mobileTocMenu = document.createElement('nav');
            mobileTocMenu.id = 'mobile-toc-menu';
            mobileTocMenu.className = 'lg:hidden themeable-card rounded-lg border p-4';
            mobileTocMenu.setAttribute('aria-label', isEn ? 'Table of contents' : '목차');

            const heading = document.createElement('h3');
            heading.className = 'font-bold themeable-heading mb-4 text-lg';
            heading.textContent = isEn ? 'Contents' : '목차';

            const ul = document.createElement('ul');
            ul.className = 'space-y-3 text-sm';

            desktopTocLinks.forEach(link => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link.getAttribute('href');
                a.className = 'block themeable-toc-link mobile-toc-item';
                a.textContent = link.textContent.trim();
                li.appendChild(a);
                ul.appendChild(li);
            });

            mobileTocMenu.appendChild(heading);
            mobileTocMenu.appendChild(ul);

            document.body.appendChild(mobileTocToggle);
            document.body.appendChild(mobileTocMenu);
        }

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
        }, { threshold: 0, rootMargin: '0px 0px -40px 0px' });

        fadeInCards.forEach(card => {
            observer.observe(card);
        });
    },

    /**
     * Calculate and display reading time
     * Korean reading speed: ~400 characters/minute
     * @param {string} contentSelector - Selector for main content (default: 'main')
     */
    initReadingTime(contentSelector = 'main') {
        const readingTimeEl = document.getElementById('reading-time');
        if (!readingTimeEl) return;

        const content = document.querySelector(contentSelector);
        if (!content) return;

        // Get text content, excluding scripts and styles
        const text = content.innerText || content.textContent;

        // Count characters (for Korean) and words (for English)
        const koreanChars = (text.match(/[\uAC00-\uD7AF]/g) || []).length;
        const englishWords = (text.match(/[a-zA-Z]+/g) || []).length;

        // Korean: ~400 chars/min, English: ~200 words/min
        const koreanMinutes = koreanChars / 400;
        const englishMinutes = englishWords / 200;
        const totalMinutes = Math.ceil(koreanMinutes + englishMinutes);

        // Minimum 1 minute
        const minutes = Math.max(1, totalMinutes);

        const isEn = document.documentElement.lang === 'en';
        readingTimeEl.textContent = isEn ? `Reading time: ~${minutes} min` : `읽는 시간: 약 ${minutes}분`;
    },

    /**
     * Initialize all UI features
     */
    initAll() {
        this.initScrollToTop();
        this.initTOC();
        this.initMobileTOC();
        this.initFadeInCards();
        this.initReadingTime();
    }
};

// ========================================
// Page Configuration Helper
// ========================================
const PebblousPage = {
    /**
     * Load serif fonts for subtitles (Playfair Display for EN, Nanum Myeongjo for KO)
     */
    loadSubtitleFont() {
        if (!document.querySelector('link[href*="Cormorant+Garamond"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Do+Hyeon&display=swap';
            document.head.appendChild(link);
        }
    },

    /**
     * Apply static page configuration
     * @param {object} config - Page configuration object
     */
    applyConfig(config) {
        const isEn = document.documentElement.lang === 'en';

        // Set title
        if (config.mainTitle && config.subtitle) {
            const h1Element = document.getElementById('page-h1-title');
            if (h1Element) {
                h1Element.innerHTML = `
                    <span class="block font-bold themeable-heading hero-main-title">${config.mainTitle}</span>
                    <span class="block font-normal hero-subtitle">${config.subtitle}</span>
                `;

                // Inject unified hero-meta-group after h1
                const heroContainer = h1Element.closest('header');
                if (heroContainer) {
                    // Remove old meta lines and share placeholder
                    heroContainer.querySelectorAll('p.text-sm, .hero-meta-group, #share-buttons-placeholder, div[id="share-buttons-placeholder"]').forEach(el => el.remove());

                    // Date
                    const date = config.publishDate || '';

                    // Publisher
                    const publisher = config.publisher || '';

                    // ReadTime: from config.wordCount or count main text
                    let readTime = '';
                    if (config.wordCount) {
                        const mins = Math.max(1, Math.ceil(config.wordCount / 500));
                        readTime = isEn ? `~${mins} min` : `~${mins}분`;
                    } else {
                        const mainEl = document.querySelector('main');
                        if (mainEl) {
                            const textLen = mainEl.textContent.replace(/\s+/g, '').length;
                            if (textLen > 0) {
                                const mins = Math.max(1, Math.ceil(textLen / 500));
                                readTime = isEn ? `~${mins} min` : `~${mins}분`;
                            }
                        }
                    }

                    // Language switch link
                    const langPath = isEn ? '../ko/' : '../en/';
                    const langLabel = isEn ? '한국어' : 'English';

                    // Build meta row
                    const metaDiv = document.createElement('div');
                    metaDiv.className = 'hero-meta-group themeable-muted';

                    let parts = [];
                    if (date) parts.push(`<span>${date}</span>`);
                    if (publisher) parts.push(`<span>${publisher}</span>`);
                    if (readTime) parts.push(`<span>${readTime}</span>`);

                    // Language link with existence check
                    const langLink = document.createElement('a');
                    langLink.href = langPath;
                    langLink.className = 'text-orange-400 hover:text-orange-300 transition-colors';
                    langLink.textContent = langLabel;
                    // Check if alt-lang page exists; if not, redirect to ko
                    fetch(langPath, { method: 'HEAD' }).then(r => {
                        if (!r.ok) {
                            langLink.href = isEn ? langPath : '../ko/';
                            langLink.title = isEn ? 'Korean version' : '한국어 버전만 제공';
                        }
                    }).catch(() => {});

                    parts.push('__LANG__');
                    metaDiv.innerHTML = parts.join('<span class="meta-sep">|</span>') + '<span id="share-buttons-placeholder" style="display:inline-flex !important;align-items:center;flex:0 0 auto;width:fit-content;margin-left:0.375rem;"></span>';

                    // Replace __LANG__ placeholder with actual link element
                    const langPlaceholder = metaDiv.querySelector('span:last-of-type');
                    // Find the text node with __LANG__
                    const walker = document.createTreeWalker(metaDiv, NodeFilter.SHOW_TEXT);
                    while (walker.nextNode()) {
                        if (walker.currentNode.textContent.includes('__LANG__')) {
                            const parent = walker.currentNode.parentNode;
                            parent.replaceChild(langLink, walker.currentNode);
                            break;
                        }
                    }

                    heroContainer.appendChild(metaDiv);
                }
            }
        }

        // Set meta info
        if (config.publishDate) {
            const publishDate = document.getElementById('publish-date');
            if (publishDate) {
                publishDate.textContent = isEn ? `Published: ${config.publishDate}` : `발행일: ${config.publishDate}`;
            }
        }

        if (config.publisher) {
            const publisher = document.getElementById('publisher');
            if (publisher) {
                publisher.textContent = isEn ? `By: ${config.publisher}` : `기획: ${config.publisher}`;
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
    /**
     * Initialize collapsible summary toggle box
     * HTML pattern: #summaryToggle (click target), #summaryContent (collapsible), #toggleIcon (arrow)
     */
    initSummaryToggle() {
        const toggle = document.getElementById('summaryToggle');
        const content = document.getElementById('summaryContent');
        const icon = document.getElementById('toggleIcon');
        if (toggle && content && icon) {
            toggle.addEventListener('click', () => {
                content.classList.toggle('collapsed');
                icon.classList.toggle('collapsed');
            });
        }
    },

    async init(config) {
        // Load subtitle serif font
        this.loadSubtitleFont();

        // Apply default theme immediately (before component fetch) to prevent FOUC
        const defaultTheme = config.defaultTheme || 'light';
        document.documentElement.setAttribute('data-theme', defaultTheme);

        // Initialize DOM-ready UI features immediately (no component dependency)
        PebblousUI.initFadeInCards();
        PebblousUI.initScrollToTop();
        PebblousUI.initTOC();
        PebblousUI.initMobileTOC();
        PebblousUI.initReadingTime();

        // Apply page config (hero section, metadata)
        this.applyConfig(config);

        // Initialize summary toggle (collapsible summary box)
        this.initSummaryToggle();

        // Load components (header, footer, share buttons) — async fetch
        await PebblousComponents.loadAll();

        // Initialize theme switcher UI (needs header to be loaded for #theme-switcher)
        PebblousTheme.init(defaultTheme);

        // SEO: Inject Article Schema
        PebblousSchema.injectArticleSchema(config);

        // SEO: Inject Author Schema (always for article pages)
        if (config.mainTitle && config.subtitle) {
            PebblousSchema.injectAuthorSchema(config.publisher);
        }

        // SEO: Inject FAQ Schema (if FAQs provided)
        if (config.faqs) {
            PebblousSchema.injectFAQSchema(config.faqs);
        }

        // Render FAQ HTML (if FAQs provided and container exists)
        if (config.faqs && config.faqs.length > 0) {
            this.renderFAQ(config.faqs);
        }

        // SEO: Initialize Breadcrumbs with Schema
        PebblousBreadcrumbs.init(config);

        // SEO: Initialize Related Posts
        await PebblousRelatedPosts.init(config);

        // Initialize CTA section (before comments)
        if (config.enableCTA !== false) {
            PebblousCTA.init();
        }

        // Initialize comments (disabled by default — set enableComments: true to show)
        if (config.enableComments === true) {
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

        // Align TOC top with first content section (after hero)
        this.alignTOC();
    },

    /**
     * Render FAQ items into #faq-container as an accessible accordion
     * @param {Array} faqs - Array of {question, answer} objects
     */
    renderFAQ(faqs) {
        const container = document.getElementById('faq-container');
        if (!container || !faqs || faqs.length === 0) return;

        container.innerHTML = faqs.map((faq, i) => `
            <details class="faq-item" style="border:1px solid var(--border-color);border-radius:0.75rem;overflow:hidden;">
                <summary style="cursor:pointer;padding:1rem 1.25rem;font-weight:600;list-style:none;display:flex;justify-content:space-between;align-items:center;background:var(--bg-card);color:var(--text-primary);">
                    <span>Q. ${faq.question}</span>
                    <svg class="faq-chevron" style="width:18px;height:18px;flex-shrink:0;transition:transform 0.2s;color:var(--accent-color);" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div style="padding:1rem 1.25rem;color:var(--text-muted);line-height:1.75;background:var(--bg-primary);border-top:1px solid var(--border-color);">
                    ${faq.answer}
                </div>
            </details>
        `).join('');

        // Rotate chevron on open/close
        container.querySelectorAll('details').forEach(detail => {
            detail.addEventListener('toggle', () => {
                const chevron = detail.querySelector('.faq-chevron');
                if (chevron) chevron.style.transform = detail.open ? 'rotate(180deg)' : '';
            });
        });
    },

    /**
     * Align desktop TOC so "목차" starts at the same Y as the first section after hero
     */
    alignTOC() {
        const tocNav = document.querySelector('#toc-links')?.closest('nav');
        if (!tocNav) return;

        // Find the first section after hero (executive-summary or first section[id])
        const firstSection = document.querySelector('main section[id]');
        if (!firstSection) return;

        // Get hero header element (the <header> inside <main>)
        const hero = document.querySelector('main > header');
        if (!hero) return;

        // Calculate: how far from flex container top to firstSection
        const flexContainer = tocNav.parentElement;
        if (!flexContainer) return;

        const flexTop = flexContainer.getBoundingClientRect().top;
        const sectionTop = firstSection.getBoundingClientRect().top;
        const offset = sectionTop - flexTop;

        // Apply margin-top to TOC nav so "목차" aligns with firstSection
        if (offset > 0) {
            tocNav.style.marginTop = offset + 'px';
        }
    }
};

// ========================================
// CTA (Call-to-Action) — Blog → Business Funnel
// ========================================
const PebblousCTA = {
    /**
     * Detect language from URL path (/en/ or /ko/)
     * @returns {'en'|'ko'}
     */
    detectLang() {
        return window.location.pathname.includes('/en/') ? 'en' : 'ko';
    },

    /**
     * Initialize CTA section — auto-injected into <main> before comments
     */
    init() {
        const main = document.querySelector('main');
        if (!main) return;

        const lang = this.detectLang();
        const section = document.createElement('section');
        section.id = 'cta-section';
        section.className = 'mb-16 fade-in-card is-visible';

        const i18n = this.getStrings(lang);
        const calendlyUrl = lang === 'en'
            ? 'https://calendly.com/joohaeng-pebblous/joohaeng-lee-pebblous'
            : 'https://calendly.com/jeongwon-mf7/jeongwon-lee-pebblous';

        const privacyLabel = lang === 'en'
            ? '<span>(Required)</span> I agree to the <button type="button" class="text-orange-500 hover:underline cta-privacy-toggle">privacy policy</button>.'
            : '<span>(필수)</span> <button type="button" class="text-orange-500 hover:underline cta-privacy-toggle">개인정보 수집 및 이용</button>에 동의합니다.';
        const privacyText = lang === 'en'
            ? 'We collect minimal personal information for newsletter delivery. Collected data is not used for other purposes and is destroyed immediately upon service termination or unsubscription.'
            : '뉴스레터 발송을 위한 최소한의 개인정보를 수집하고 이용합니다. 수집된 정보는 발송 외 다른 목적으로 이용되지 않으며, 서비스가 종료되거나 구독을 해지할 경우 즉시 파기됩니다.';

        section.innerHTML = `
            <h2 class="text-2xl font-bold themeable-heading mb-6">${i18n.heading}</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <!-- Newsletter (inline form) -->
                <div class="cta-card themeable-card rounded-xl p-6">
                    <div class="text-3xl mb-3">📬</div>
                    <h3 class="text-lg font-bold themeable-heading mb-2">${i18n.newsletter.title}</h3>
                    <p class="text-sm themeable-muted leading-relaxed mb-4">${i18n.newsletter.desc}</p>
                    <form class="cta-subscribe-form" data-action="https://stibee.com/api/v1.0/lists/pet__FOyQpp5sYVTk0iZUI2CO3B9NA==/public/subscribers">
                        <input type="email" name="email" required
                               placeholder="${lang === 'en' ? 'your@email.com' : 'your@email.com'}"
                               class="w-full px-3 py-2 rounded-lg text-sm themeable-bg border border-[var(--border-color)] themeable-text mb-2 focus:outline-none focus:border-orange-500">
                        <label class="flex items-start gap-2 text-xs themeable-muted mb-3 cursor-pointer">
                            <input type="checkbox" name="cta_privacy" required class="mt-0.5 shrink-0">
                            <span>${privacyLabel}</span>
                        </label>
                        <div class="cta-privacy-detail hidden text-xs themeable-muted mb-3 p-2 rounded border border-[var(--border-color)]">
                            ${privacyText}
                        </div>
                        <button type="submit"
                                class="w-full py-2 rounded-lg text-sm font-semibold text-white transition-colors"
                                style="background-color: #F86825;"
                                onmouseover="this.style.backgroundColor='#e55a1b'"
                                onmouseout="this.style.backgroundColor='#F86825'">
                            ${i18n.newsletter.cta}
                        </button>
                        <div class="cta-subscribe-msg hidden mt-2 text-sm font-semibold text-center"></div>
                    </form>
                </div>
                <!-- Meeting -->
                <a href="${calendlyUrl}" target="_blank" rel="noopener"
                   class="cta-card themeable-card rounded-xl p-6 block hover:scale-[1.02] transition-transform no-underline">
                    <div class="text-3xl mb-3">📅</div>
                    <h3 class="text-lg font-bold themeable-heading mb-2">${i18n.meeting.title}</h3>
                    <p class="text-sm themeable-muted leading-relaxed">${i18n.meeting.desc}</p>
                    <span class="inline-block mt-3 text-sm font-semibold text-orange-500">${i18n.meeting.cta} →</span>
                </a>
                <!-- DataClinic -->
                <a href="https://dataclinic.ai/${lang === 'en' ? 'en' : 'ko'}/auth/firebase/login" target="_blank" rel="noopener"
                   class="cta-card themeable-card rounded-xl p-6 block hover:scale-[1.02] transition-transform no-underline">
                    <div class="text-3xl mb-3">🔬</div>
                    <h3 class="text-lg font-bold themeable-heading mb-2">${i18n.dataclinic.title}</h3>
                    <p class="text-sm themeable-muted leading-relaxed">${i18n.dataclinic.desc}</p>
                    <span class="inline-block mt-3 text-sm font-semibold text-orange-500">${i18n.dataclinic.cta} →</span>
                </a>
            </div>
        `;

        // Insert before comments-section if exists, otherwise append to main
        const comments = document.getElementById('comments-section');
        if (comments) {
            comments.parentNode.insertBefore(section, comments);
        } else {
            main.appendChild(section);
        }

        // Privacy toggle
        const privacyToggle = section.querySelector('.cta-privacy-toggle');
        const privacyDetail = section.querySelector('.cta-privacy-detail');
        if (privacyToggle && privacyDetail) {
            privacyToggle.addEventListener('click', () => {
                privacyDetail.classList.toggle('hidden');
            });
        }

        // Subscribe form handler
        const form = section.querySelector('.cta-subscribe-form');
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const emailInput = form.querySelector('input[name="email"]');
                const privacyCheck = form.querySelector('input[name="cta_privacy"]');
                const msgEl = form.querySelector('.cta-subscribe-msg');
                const submitBtn = form.querySelector('button[type="submit"]');

                if (!privacyCheck.checked) {
                    msgEl.textContent = lang === 'en' ? 'Please agree to the privacy policy.' : '개인정보 수집에 동의해주세요.';
                    msgEl.className = 'cta-subscribe-msg mt-2 text-sm font-semibold text-center text-red-500';
                    msgEl.classList.remove('hidden');
                    return;
                }

                submitBtn.disabled = true;
                submitBtn.textContent = '...';

                try {
                    const res = await fetch(form.dataset.action, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ subscribers: [{ email: emailInput.value }] })
                    });

                    if (res.ok) {
                        msgEl.textContent = lang === 'en' ? 'Subscribed! Check your email.' : '구독 완료! 이메일을 확인해주세요.';
                        msgEl.className = 'cta-subscribe-msg mt-2 text-sm font-semibold text-center text-teal-500';
                        emailInput.value = '';
                        privacyCheck.checked = false;
                    } else {
                        throw new Error('API error');
                    }
                } catch {
                    msgEl.textContent = lang === 'en' ? 'Something went wrong. Try again.' : '오류가 발생했습니다. 다시 시도해주세요.';
                    msgEl.className = 'cta-subscribe-msg mt-2 text-sm font-semibold text-center text-red-500';
                }

                msgEl.classList.remove('hidden');
                submitBtn.disabled = false;
                submitBtn.textContent = lang === 'en' ? 'Subscribe Free' : '무료 구독';
            });
        }
    },

    /**
     * Bilingual strings
     */
    getStrings(lang) {
        if (lang === 'en') {
            return {
                heading: 'Take the Next Step',
                newsletter: {
                    title: 'Newsletter',
                    desc: 'Get weekly insights on AI-Ready Data, Physical AI, and data quality standards.',
                    cta: 'Subscribe Free'
                },
                meeting: {
                    title: 'Schedule a Meeting',
                    desc: 'Talk with our team about your data challenges. 30-min free consultation.',
                    cta: 'Book a Time'
                },
                dataclinic: {
                    title: 'DataClinic™',
                    desc: 'AI-powered data quality diagnostics. Try our platform with a free account.',
                    cta: 'Get Started'
                }
            };
        }
        return {
            heading: '다음 단계로',
            newsletter: {
                title: '뉴스레터 구독',
                desc: 'AI-Ready 데이터, Physical AI, 데이터 품질 표준에 대한 주간 인사이트를 받아보세요.',
                cta: '무료 구독'
            },
            meeting: {
                title: '미팅 예약',
                desc: '데이터 과제에 대해 페블러스 팀과 상담하세요. 30분 무료 상담.',
                cta: '시간 예약'
            },
            dataclinic: {
                title: 'DataClinic™',
                desc: 'AI 기반 데이터 품질 진단 플랫폼. 무료 계정으로 시작하세요.',
                cta: '시작하기'
            }
        };
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
        let commentsContainer = document.getElementById('comments-section');

        // Auto-create comments section if it doesn't exist
        if (!commentsContainer) {
            commentsContainer = this.createCommentsSection(customMessage);
            if (!commentsContainer) {
                console.warn('Failed to create comments section');
                return;
            }
        }

        // Find the actual container for giscus (inside the card)
        const giscusContainer = commentsContainer.querySelector('.themeable-card');
        if (!giscusContainer) {
            console.warn('Comments card container not found');
            return;
        }

        // Create giscus script
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
        // Set giscus theme based on current page theme
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const giscusTheme = currentTheme === 'light' ? 'light' : 'dark';
        script.setAttribute('data-theme', giscusTheme);
        script.setAttribute('data-lang', 'ko');
        script.setAttribute('data-loading', 'lazy');
        script.crossOrigin = 'anonymous';
        script.async = true;

        giscusContainer.appendChild(script);

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
        // Find main element to append to
        const mainElement = document.querySelector('main');
        if (!mainElement) {
            console.warn('Main element not found');
            return null;
        }

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
                        <a href="https://pebblous.ai/en/request" class="text-orange-500 hover:underline" target="_blank">여기</a>를
                        클릭하거나, GitHub 프로필에 LinkedIn을 연결하여 댓글로 문의해 주세요.
                    </p>
                </div>
                <!-- giscus comments will be loaded here -->
            </div>
        `;

        // Append to main element
        mainElement.appendChild(section);

        return section;
    }
};

// ========================================
// Related Posts (Tag-based Recommendations)
// ========================================
const PebblousRelatedPosts = {
    /**
     * Calculate similarity score between two articles based on common tags
     * @param {array} tags1 - Tags of first article
     * @param {array} tags2 - Tags of second article
     * @returns {number} Similarity score (number of common tags)
     */
    calculateSimilarity(tags1, tags2) {
        if (!tags1 || !tags2) return 0;
        const commonTags = tags1.filter(tag => tags2.includes(tag));
        return commonTags.length;
    },

    /**
     * Find related articles based on tag similarity
     * @param {string} currentPath - Current article path
     * @param {array} currentTags - Current article tags
     * @param {number} limit - Maximum number of related posts to return (default: 3)
     * @returns {Promise<array>} Array of related articles
     */
    async findRelatedArticles(currentPath, currentTags, limit = 3) {
        try {
            // Fetch articles.json
            const response = await fetch('/articles.json');
            const data = await response.json();

            // Detect current page language
            const pageLang = document.documentElement.lang || 'ko';

            // Derive base path (without /ko/ or /en/) to exclude self in any language
            const basePath = currentPath.replace(/\/(ko|en)\/(index\.html)?$/, '').replace(/\/index\.html$/, '');

            // Filter: published, not self (any language), same language, has tags
            const candidates = data.articles.filter(article => {
                if (!article.published || !article.tags || article.tags.length === 0) return false;
                // Exclude self (compare base paths to catch ko/en variants)
                const articleBase = (article.path || '').replace(/\/(ko|en)\/(index\.html)?$/, '').replace(/\/index\.html$/, '');
                if (articleBase === basePath) return false;
                // Match language: article.language field or detect from path
                const articleLang = article.language || (article.path && article.path.includes('/en/') ? 'en' : 'ko');
                if (articleLang !== pageLang) return false;
                return true;
            });

            // Calculate similarity scores
            const scored = candidates.map(article => ({
                ...article,
                score: this.calculateSimilarity(currentTags, article.tags)
            }));

            // Sort by score (descending), then by date (newest first)
            scored.sort((a, b) => {
                if (b.score !== a.score) {
                    return b.score - a.score;
                }
                return new Date(b.date) - new Date(a.date);
            });

            // Return top N articles with score > 0
            return scored.filter(article => article.score > 0).slice(0, limit);
        } catch (error) {
            console.error('Error fetching related articles:', error);
            return [];
        }
    },

    /**
     * Render related posts component
     * @param {array} relatedArticles - Array of related articles
     * @returns {HTMLElement} Related posts section element
     */
    renderRelatedPosts(relatedArticles) {
        if (relatedArticles.length === 0) return null;

        const section = document.createElement('section');
        section.className = 'mb-16 fade-in-card is-visible';

        // Use PebblousCardRenderer if available (same style as main/hub pages)
        const useCardRenderer = typeof PebblousCardRenderer !== 'undefined' && PebblousCardRenderer.renderCard;

        let cardsHTML = '';
        relatedArticles.forEach((article, index) => {
            if (useCardRenderer) {
                cardsHTML += PebblousCardRenderer.renderCard(article, index, { initialLimit: 3 });
            } else {
                // Fallback: simple card
                var href = article.path ? (article.path.startsWith('/') ? article.path : '/' + article.path) : '#';
                cardsHTML += '<a href="' + href + '" class="card rounded-lg overflow-hidden group flex flex-col fade-in">'
                    + '<div class="p-6 flex-grow">'
                    + '<span class="text-xs text-slate-500">' + article.date + '</span>'
                    + '<h3 class="text-xl font-bold text-white mt-2">' + (article.cardTitle || article.title) + '</h3>'
                    + '<p class="mt-2 text-sm text-slate-400">' + (article.description || '') + '</p>'
                    + '</div></a>';
            }
        });

        // Related posts grid: 3 columns within 800px content area
        const gridClass = 'grid grid-cols-1 sm:grid-cols-3 gap-4';

        const isKo = document.documentElement.lang !== 'en';
        const heading = isKo ? '관련 글' : 'Related Posts';

        section.innerHTML = '<h2 class="text-2xl font-bold themeable-heading mb-6">' + heading + '</h2>'
            + '<div class="' + gridClass + '">' + cardsHTML + '</div>';

        // Compact card styling for related posts
        section.querySelectorAll('.card h3').forEach(function(h3) {
            h3.classList.remove('text-2xl');
            h3.classList.add('text-lg');
        });
        section.querySelectorAll('.card p.text-sm').forEach(function(p) {
            p.classList.remove('text-sm');
            p.classList.add('text-xs', 'line-clamp-2');
        });
        // Compact tags: smaller font + tighter padding + reduce gap above title
        section.querySelectorAll('.card .tags-container').forEach(function(tc) {
            tc.classList.remove('mb-3');
            tc.classList.add('mb-1');
        });
        section.querySelectorAll('.card .tag').forEach(function(tag) {
            tag.style.fontSize = '0.625rem';
            tag.style.padding = '2px 8px';
        });

        // Initialize card interactions (particles, hover effects) if renderer available
        if (useCardRenderer) {
            requestAnimationFrame(function() {
                var cards = section.querySelectorAll('.card');
                PebblousCardRenderer.initCardInteractions(cards);
            });
        }

        return section;
    },

    /**
     * Initialize related posts component
     * @param {object} config - Page configuration with path and tags
     */
    async init(config) {
        // Only show on article pages
        if (!config.articlePath || !config.tags || config.tags.length === 0) {
            return;
        }

        // Find related articles
        const relatedArticles = await this.findRelatedArticles(config.articlePath, config.tags, 3);

        if (relatedArticles.length === 0) {
            console.log('📊 No related articles found');
            return;
        }

        // Dynamically load card CSS + JS if not already loaded
        if (typeof PebblousCardRenderer === 'undefined') {
            // Load card CSS
            if (!document.querySelector('link[href*="card-styles"]')) {
                const css = document.createElement('link');
                css.rel = 'stylesheet';
                css.href = '/css/card-styles.css';
                document.head.appendChild(css);
            }
            // Load card JS
            await new Promise((resolve) => {
                const s1 = document.createElement('script');
                s1.src = '/scripts/card-particles.js';
                s1.onload = () => {
                    const s2 = document.createElement('script');
                    s2.src = '/scripts/card-renderer.js';
                    s2.onload = resolve;
                    document.head.appendChild(s2);
                };
                document.head.appendChild(s1);
            });
        }

        // Render and inject into page
        const relatedSection = this.renderRelatedPosts(relatedArticles);
        if (relatedSection) {
            const mainElement = document.querySelector('main');
            const commentsSection = document.getElementById('comments-section');

            if (mainElement) {
                // Insert before comments section if it exists, otherwise append to main
                if (commentsSection) {
                    mainElement.insertBefore(relatedSection, commentsSection);
                } else {
                    mainElement.appendChild(relatedSection);
                }

                console.log(`🔗 Related Posts injected: ${relatedArticles.length} articles`);
            }
        }
    }
};

// ========================================
// Breadcrumbs Component
// ========================================
const PebblousBreadcrumbs = {
    /**
     * Get category display name
     * @param {string} category - Category ID (art, tech, story)
     * @returns {string} Display name
     */
    getCategoryName(category) {
        const categoryNames = {
            'art': 'Data Art',
            'tech': 'Tech Insights',
            'business': 'Business',
            'story': 'Data Stories'
        };
        return categoryNames[category] || category;
    },

    /**
     * Render breadcrumb navigation as hero-badge style pill
     * @param {string} category - Article category
     * @param {string} title - Article title
     * @returns {HTMLElement} Breadcrumb navigation element
     */
    renderBreadcrumbs(category, title) {
        const nav = document.createElement('nav');
        nav.className = 'mb-4';
        nav.setAttribute('aria-label', 'Breadcrumb');

        const categoryName = this.getCategoryName(category);

        nav.innerHTML = `
            <div class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-5 py-2 rounded-full" style="color: var(--accent-color, #F86825); background: rgba(248, 104, 37, 0.12);">
                <a href="/" class="hover:opacity-70 transition-opacity" style="color: inherit; text-decoration: none;">Home</a>
                <span style="opacity: 0.5;">/</span>
                <a href="/#${category}" class="hover:opacity-70 transition-opacity" style="color: inherit; text-decoration: none;">${categoryName}</a>
            </div>
        `;

        return nav;
    },

    /**
     * Initialize breadcrumbs component
     * @param {object} config - Page configuration
     */
    init(config) {
        // Only show on article pages
        if (!config.category || !config.mainTitle) {
            return;
        }

        // Find the title element to insert breadcrumbs before it
        const titleElement = document.getElementById('page-h1-title');
        if (!titleElement) {
            console.warn('Title element not found for breadcrumbs');
            return;
        }

        // Render and inject breadcrumbs
        const breadcrumbs = this.renderBreadcrumbs(config.category, config.mainTitle);
        titleElement.parentNode.insertBefore(breadcrumbs, titleElement);

        // Inject Breadcrumb Schema
        PebblousSchema.injectBreadcrumbSchema(this.getCategoryName(config.category), config.mainTitle);

        console.log('🍞 Breadcrumbs injected');
    }
};

// ========================================
// Schema.org Structured Data (SEO)
// ========================================
const PebblousSchema = {
    /**
     * Inject Article Schema for SEO and AI agent citation
     * @param {object} config - Page configuration
     */
    injectArticleSchema(config) {
        // Only inject on article pages (not main index)
        if (!config.mainTitle || !config.subtitle) return;

        // Check if schema already exists
        const existingSchema = document.querySelector('script[type="application/ld+json"][data-schema="article"]');
        if (existingSchema) return;

        // Build schema object
        const schema = {
            "@context": "https://schema.org",
            "@type": "TechArticle",
            "headline": config.mainTitle,
            "description": config.subtitle,
            "author": {
                "@type": "Person",
                "name": config.publisher || "이주행",
                "url": "https://blog.pebblous.ai/",
                "jobTitle": "CEO & Co-founder",
                "worksFor": {
                    "@type": "Organization",
                    "name": "Pebblous Inc.",
                    "url": "https://www.pebblous.ai"
                }
            },
            "publisher": {
                "@type": "Organization",
                "name": "Pebblous Inc.",
                "url": "https://www.pebblous.ai",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://blog.pebblous.ai/image/Pebblous_BM_Orange_RGB.png",
                    "width": 600,
                    "height": 60
                }
            },
            "datePublished": config.publishDate || new Date().toISOString().split('T')[0],
            "dateModified": config.publishDate || new Date().toISOString().split('T')[0],
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": window.location.href
            }
        };

        // Add image if available in config
        if (config.image) {
            schema.image = config.image;
        }

        // Add keywords if available in config
        if (config.keywords && Array.isArray(config.keywords)) {
            schema.keywords = config.keywords.join(', ');
        }

        // Create script element
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'article');
        script.textContent = JSON.stringify(schema, null, 2);

        // Inject into head
        document.head.appendChild(script);

        console.log('📊 Article Schema injected for SEO');
    },

    /**
     * Inject Breadcrumb Schema
     * @param {string} category - Category name
     * @param {string} title - Article title
     */
    injectBreadcrumbSchema(category, title) {
        const existingSchema = document.querySelector('script[type="application/ld+json"][data-schema="breadcrumb"]');
        if (existingSchema) return;

        const schema = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://blog.pebblous.ai/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": category,
                    "item": `https://blog.pebblous.ai/#${category.toLowerCase()}`
                },
                {
                    "@type": "ListItem",
                    "position": 3,
                    "name": title
                }
            ]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'breadcrumb');
        script.textContent = JSON.stringify(schema, null, 2);
        document.head.appendChild(script);
    },

    /**
     * Inject Author (Person) Schema
     * @param {string} authorName - Author name (default: "이주행")
     */
    injectAuthorSchema(authorName = "이주행") {
        const existingSchema = document.querySelector('script[type="application/ld+json"][data-schema="person"]');
        if (existingSchema) return;

        const schema = {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": authorName,
            "url": "https://blog.pebblous.ai/",
            "jobTitle": "CEO & Co-founder",
            "worksFor": {
                "@type": "Organization",
                "name": "Pebblous Inc.",
                "url": "https://www.pebblous.ai",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://blog.pebblous.ai/image/Pebblous_BM_Orange_RGB.png",
                    "width": 600,
                    "height": 60
                }
            },
            "sameAs": [
                "https://www.linkedin.com/company/pebblous",
                "https://github.com/pebblous"
            ]
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'person');
        script.textContent = JSON.stringify(schema, null, 2);
        document.head.appendChild(script);

        console.log('👤 Author Schema injected');
    },

    /**
     * Inject FAQ Schema for Google Rich Results
     * @param {array} faqs - Array of FAQ objects with question and answer properties
     */
    injectFAQSchema(faqs) {
        if (!faqs || !Array.isArray(faqs) || faqs.length === 0) return;

        // Check for dynamically injected FAQ schema
        const existingDynamicSchema = document.querySelector('script[type="application/ld+json"][data-schema="faq"]');
        if (existingDynamicSchema) return;

        // Check for static FAQPage in any JSON-LD script (prevents Google duplicate error)
        const allJsonLd = document.querySelectorAll('script[type="application/ld+json"]');
        for (const script of allJsonLd) {
            try {
                const data = JSON.parse(script.textContent);
                if (data['@type'] === 'FAQPage') {
                    console.warn('⚠️ Static FAQPage already exists! Skipping dynamic injection to prevent Google duplicate error.');
                    return;
                }
            } catch (e) { /* ignore parse errors */ }
        }


        // Build FAQ entities
        const mainEntity = faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }));

        const schema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": mainEntity
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-schema', 'faq');
        script.textContent = JSON.stringify(schema, null, 2);
        document.head.appendChild(script);

        console.log(`❓ FAQ Schema injected: ${faqs.length} questions`);
    }
};

// ========================================
// Chart Utilities (Chart.js Wrapper)
// ========================================
const PebblousChart = {
    // Default color palette (Pebblous brand colors)
    colors: {
        orange: '#F86825',
        teal: '#14B8A6',
        purple: '#A855F7',
        blue: '#3B82F6',
        emerald: '#10B981',
        amber: '#F59E0B',
        slate: '#64748B',
        violet: '#7C3AED'
    },

    // Default palette array for datasets
    palette: ['#F86825', '#14B8A6', '#A855F7', '#3B82F6', '#10B981', '#F59E0B', '#7C3AED', '#64748B'],

    // Common Chart.js options
    baseOptions: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    boxWidth: 8,
                    font: { family: "'Pretendard', sans-serif" }
                }
            },
            tooltip: {
                backgroundColor: 'rgba(17, 24, 39, 0.9)',
                padding: 12,
                cornerRadius: 8,
                titleFont: { family: "'Pretendard', sans-serif" },
                bodyFont: { family: "'Pretendard', sans-serif" }
            }
        }
    },

    /**
     * Split long labels for multi-line display
     * @param {string} str - Label string
     * @param {number} maxLen - Maximum characters per line
     * @returns {string|array} - Original string or array of lines
     */
    splitLabel(str, maxLen = 16) {
        if (!str || str.length <= maxLen) return str;
        const words = str.split(' ');
        const lines = [];
        let currentLine = words[0];

        for (let i = 1; i < words.length; i++) {
            if ((currentLine + ' ' + words[i]).length < maxLen) {
                currentLine += ' ' + words[i];
            } else {
                lines.push(currentLine);
                currentLine = words[i];
            }
        }
        lines.push(currentLine);
        return lines;
    },

    /**
     * Create a Bar Chart
     * @param {string} canvasId - Canvas element ID
     * @param {object} config - Chart configuration
     * @returns {Chart} Chart.js instance
     */
    bar(canvasId, config) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) {
            console.warn(`PebblousChart: Canvas #${canvasId} not found`);
            return null;
        }

        const {
            labels,
            datasets,
            data,           // Simple mode: single dataset
            colors,         // Simple mode: colors for single dataset
            horizontal = false,
            stacked = false,
            showLegend = true,
            yMax = null,
            yFormat = null, // 'percent' or custom callback
            wrapLabels = false,
            wrapLength = 16
        } = config;

        // Process labels
        const processedLabels = wrapLabels
            ? labels.map(l => this.splitLabel(l, wrapLength))
            : labels;

        // Build datasets
        let chartDatasets;
        if (datasets) {
            // Multi-dataset mode
            chartDatasets = datasets.map((ds, i) => ({
                label: ds.label,
                data: ds.data,
                backgroundColor: ds.color || this.palette[i % this.palette.length],
                borderColor: ds.borderColor || ds.color || this.palette[i % this.palette.length],
                borderWidth: ds.borderWidth || 1,
                borderRadius: ds.borderRadius || 4,
                barPercentage: ds.barPercentage || 0.7
            }));
        } else {
            // Simple single dataset mode
            const bgColors = colors === 'auto'
                ? data.map((v, i) => this._autoColor(v, data))
                : (Array.isArray(colors) ? colors : this.palette.slice(0, data.length));

            chartDatasets = [{
                data: data,
                backgroundColor: bgColors,
                borderRadius: 4,
                barPercentage: 0.7
            }];
        }

        // Build scales
        const scales = {
            x: {
                stacked: stacked,
                grid: { display: horizontal },
                ticks: { font: { family: "'Pretendard', sans-serif" } }
            },
            y: {
                stacked: stacked,
                beginAtZero: true,
                grid: { color: 'rgba(0, 0, 0, 0.05)' },
                ticks: { font: { family: "'Pretendard', sans-serif" } }
            }
        };

        if (yMax !== null) scales.y.max = yMax;
        if (yFormat === 'percent') {
            scales.y.ticks.callback = (value) => value + '%';
        } else if (typeof yFormat === 'function') {
            scales.y.ticks.callback = yFormat;
        }

        if (horizontal) {
            scales.x.grid = { display: false };
            scales.y.grid = { display: false };
        }

        return new Chart(ctx, {
            type: 'bar',
            data: {
                labels: processedLabels,
                datasets: chartDatasets
            },
            options: {
                ...this.baseOptions,
                indexAxis: horizontal ? 'y' : 'x',
                scales: scales,
                plugins: {
                    ...this.baseOptions.plugins,
                    legend: { display: showLegend && (datasets?.length > 1 || false) }
                }
            }
        });
    },

    /**
     * Create a Stacked Bar Chart
     * @param {string} canvasId - Canvas element ID
     * @param {object} config - Chart configuration
     * @returns {Chart} Chart.js instance
     */
    stackedBar(canvasId, config) {
        return this.bar(canvasId, { ...config, stacked: true, showLegend: true });
    },

    /**
     * Create a Doughnut/Pie Chart
     * @param {string} canvasId - Canvas element ID
     * @param {object} config - Chart configuration
     * @returns {Chart} Chart.js instance
     */
    doughnut(canvasId, config) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) {
            console.warn(`PebblousChart: Canvas #${canvasId} not found`);
            return null;
        }

        const {
            labels,
            data,
            colors = this.palette,
            cutout = '65%',
            legendPosition = 'bottom',
            wrapLabels = false,
            wrapLength = 16
        } = config;

        const processedLabels = wrapLabels
            ? labels.map(l => this.splitLabel(l, wrapLength))
            : labels;

        return new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: processedLabels,
                datasets: [{
                    data: data,
                    backgroundColor: colors.slice(0, data.length),
                    borderWidth: 0,
                    hoverOffset: 15
                }]
            },
            options: {
                ...this.baseOptions,
                cutout: cutout,
                plugins: {
                    ...this.baseOptions.plugins,
                    legend: {
                        position: legendPosition,
                        labels: { usePointStyle: true }
                    }
                }
            }
        });
    },

    /**
     * Create a Pie Chart (alias for doughnut with cutout: 0)
     */
    pie(canvasId, config) {
        return this.doughnut(canvasId, { ...config, cutout: '0%' });
    },

    /**
     * Create a Bubble Chart
     * @param {string} canvasId - Canvas element ID
     * @param {object} config - Chart configuration
     * @returns {Chart} Chart.js instance
     */
    bubble(canvasId, config) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) {
            console.warn(`PebblousChart: Canvas #${canvasId} not found`);
            return null;
        }

        const {
            data,           // Array of { x, y, r, label, color? }
            xTitle = '',
            yTitle = '',
            xMin = 0,
            xMax = 10,
            yMin = 0,
            yMax = 10,
            colorFn = null  // Function to determine color based on data point
        } = config;

        const defaultColorFn = (point) => {
            const idx = Math.floor(point.x / 2) % this.palette.length;
            return this.palette[idx] + 'B3'; // Add transparency
        };

        return new Chart(ctx, {
            type: 'bubble',
            data: {
                datasets: [{
                    label: 'Data',
                    data: data,
                    backgroundColor: (ctx) => {
                        const fn = colorFn || defaultColorFn;
                        return fn(ctx.raw || {});
                    },
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                ...this.baseOptions,
                scales: {
                    x: {
                        min: xMin, max: xMax,
                        title: { display: !!xTitle, text: xTitle },
                        grid: { display: false }
                    },
                    y: {
                        min: yMin, max: yMax,
                        title: { display: !!yTitle, text: yTitle },
                        grid: { color: '#F3F4F6' }
                    }
                },
                plugins: {
                    ...this.baseOptions.plugins,
                    legend: { display: false },
                    tooltip: {
                        ...this.baseOptions.plugins.tooltip,
                        callbacks: {
                            title: (items) => items[0]?.raw?.label || '',
                            label: (ctx) => `(${ctx.raw.x}, ${ctx.raw.y}) Size: ${ctx.raw.r}`
                        }
                    }
                }
            }
        });
    },

    /**
     * Create a Line Chart
     * @param {string} canvasId - Canvas element ID
     * @param {object} config - Chart configuration
     * @returns {Chart} Chart.js instance
     */
    line(canvasId, config) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) {
            console.warn(`PebblousChart: Canvas #${canvasId} not found`);
            return null;
        }

        const {
            labels,
            datasets,
            data,           // Simple mode: single dataset
            color = this.colors.teal,
            fill = false,
            tension = 0.3,
            showPoints = true,
            showLegend = false
        } = config;

        let chartDatasets;
        if (datasets) {
            chartDatasets = datasets.map((ds, i) => ({
                label: ds.label,
                data: ds.data,
                borderColor: ds.color || this.palette[i % this.palette.length],
                backgroundColor: ds.fill ? (ds.color || this.palette[i % this.palette.length]) + '33' : 'transparent',
                fill: ds.fill || false,
                tension: ds.tension || tension,
                pointRadius: ds.showPoints !== false ? 4 : 0,
                pointHoverRadius: 6
            }));
        } else {
            chartDatasets = [{
                data: data,
                borderColor: color,
                backgroundColor: fill ? color + '33' : 'transparent',
                fill: fill,
                tension: tension,
                pointRadius: showPoints ? 4 : 0,
                pointHoverRadius: 6
            }];
        }

        return new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: chartDatasets
            },
            options: {
                ...this.baseOptions,
                plugins: {
                    ...this.baseOptions.plugins,
                    legend: { display: showLegend || datasets?.length > 1 }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { font: { family: "'Pretendard', sans-serif" } }
                    },
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(0, 0, 0, 0.05)' },
                        ticks: { font: { family: "'Pretendard', sans-serif" } }
                    }
                }
            }
        });
    },

    /**
     * Create a Radar Chart
     * @param {string} canvasId - Canvas element ID
     * @param {object} config - Chart configuration
     * @returns {Chart} Chart.js instance
     */
    radar(canvasId, config) {
        const ctx = document.getElementById(canvasId);
        if (!ctx) {
            console.warn(`PebblousChart: Canvas #${canvasId} not found`);
            return null;
        }

        const {
            labels,
            datasets,
            max = 5,
            min = 0,
            stepSize = 1,
            legendPosition = 'bottom',
            wrapLabels = false,
            wrapLength = 16
        } = config;

        const processedLabels = wrapLabels
            ? labels.map(l => this.splitLabel(l, wrapLength))
            : labels;

        const chartDatasets = datasets.map((ds, i) => ({
            label: ds.label,
            data: ds.data,
            backgroundColor: (ds.color || this.palette[i % this.palette.length]) + '26',
            borderColor: ds.color || this.palette[i % this.palette.length],
            borderWidth: ds.borderWidth || 3,
            pointBackgroundColor: ds.color || this.palette[i % this.palette.length],
            pointBorderColor: '#fff',
            pointBorderWidth: 2,
            pointRadius: ds.pointRadius || 5
        }));

        return new Chart(ctx, {
            type: 'radar',
            data: {
                labels: processedLabels,
                datasets: chartDatasets
            },
            options: {
                ...this.baseOptions,
                scales: {
                    r: {
                        angleLines: { color: 'rgba(128, 128, 128, 0.2)' },
                        grid: { color: 'rgba(128, 128, 128, 0.2)' },
                        pointLabels: {
                            font: { size: 13, weight: 'bold' },
                            color: '#111827'
                        },
                        ticks: {
                            display: true,
                            showLabelBackdrop: false,
                            color: '#4B5563',
                            stepSize: stepSize,
                            max: max,
                            min: min,
                            beginAtZero: true,
                            font: { size: 11, weight: 'bold' }
                        },
                        suggestedMin: min,
                        suggestedMax: max
                    }
                },
                plugins: {
                    ...this.baseOptions.plugins,
                    legend: {
                        position: legendPosition,
                        labels: { font: { size: 14 } }
                    },
                    tooltip: {
                        ...this.baseOptions.plugins.tooltip,
                        callbacks: {
                            title: function(tooltipItems) {
                                const item = tooltipItems[0];
                                let label = item.chart.data.labels[item.dataIndex];
                                return Array.isArray(label) ? label.join(' ') : label;
                            }
                        }
                    }
                }
            }
        });
    },

    /**
     * Auto-color based on value thresholds (for single dataset bars)
     * @private
     */
    _autoColor(value, allValues) {
        const max = Math.max(...allValues);
        const ratio = value / max;

        if (ratio >= 0.8) return this.colors.orange;
        if (ratio >= 0.5) return this.colors.teal;
        if (ratio >= 0.3) return this.colors.blue;
        return this.colors.slate;
    }
};

// ========================================
// Tab Component
// ========================================
const PebblousTabs = {
    /**
     * Initialize tab functionality
     * @param {object} options - Configuration options
     */
    init(options = {}) {
        const {
            containerSelector = '[data-tabs]',
            buttonSelector = '[data-tab-button]',
            contentSelector = '[data-tab-content]',
            activeClass = 'active',
            hiddenClass = 'hidden',
            onChange = null
        } = options;

        const containers = document.querySelectorAll(containerSelector);

        containers.forEach(container => {
            const buttons = container.querySelectorAll(buttonSelector);
            const contents = container.querySelectorAll(contentSelector);

            if (buttons.length === 0) {
                // Fallback: look for common tab patterns
                this._initLegacyTabs(container);
                return;
            }

            buttons.forEach(button => {
                button.addEventListener('click', () => {
                    const targetId = button.dataset.tabButton || button.dataset.target;

                    // Deactivate all
                    buttons.forEach(b => b.classList.remove(activeClass));
                    contents.forEach(c => c.classList.add(hiddenClass));

                    // Activate selected
                    button.classList.add(activeClass);
                    const targetContent = container.querySelector(`[data-tab-content="${targetId}"]`)
                        || document.getElementById(targetId);

                    if (targetContent) {
                        targetContent.classList.remove(hiddenClass);
                    }

                    // Callback
                    if (typeof onChange === 'function') {
                        onChange(targetId, button, targetContent);
                    }
                });
            });
        });

        console.log(`🗂️ PebblousTabs: Initialized ${containers.length} tab container(s)`);
    },

    /**
     * Initialize legacy tab patterns (for backward compatibility)
     * @private
     */
    _initLegacyTabs(container) {
        // Pattern 1: .tab-button + .tab-content
        const tabButtons = container.querySelectorAll('.tab-button, .tab-btn');
        const tabContents = container.querySelectorAll('.tab-content, .tab-panel');

        if (tabButtons.length === 0) return;

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetId = button.dataset.target || button.dataset.tab;

                // Deactivate all
                tabButtons.forEach(b => {
                    b.classList.remove('active', 'bg-orange-500', 'text-white');
                    b.classList.add('bg-slate-700', 'text-slate-300');
                });
                tabContents.forEach(c => c.classList.add('hidden'));

                // Activate selected
                button.classList.add('active', 'bg-orange-500', 'text-white');
                button.classList.remove('bg-slate-700', 'text-slate-300');

                const target = document.getElementById(targetId);
                if (target) {
                    target.classList.remove('hidden');
                }
            });
        });
    },

    /**
     * Programmatically switch to a specific tab
     * @param {string} tabId - Tab ID to activate
     * @param {string} containerSelector - Container selector (optional)
     */
    switchTo(tabId, containerSelector = '[data-tabs]') {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        const button = container.querySelector(`[data-tab-button="${tabId}"], [data-target="${tabId}"]`);
        if (button) {
            button.click();
        }
    }
};

// Export to global scope
window.PebblousTheme = PebblousTheme;
window.PebblousComponents = PebblousComponents;
window.PebblousUI = PebblousUI;
window.PebblousPage = PebblousPage;
window.PebblousComments = PebblousComments;
window.PebblousRelatedPosts = PebblousRelatedPosts;
window.PebblousBreadcrumbs = PebblousBreadcrumbs;
window.PebblousSchema = PebblousSchema;
window.PebblousChart = PebblousChart;
window.PebblousTabs = PebblousTabs;
