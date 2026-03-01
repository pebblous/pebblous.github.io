// ============================================================
// Language Filter & Translation System (sync load in <head>)
// ============================================================

(function() {
    var LANGUAGES = ['ko', 'en'];  // Future: add 'jp', 'cn', etc.
    var STORAGE_KEY = 'pebblous-language';
    var DEFAULT_LANG = 'ko';

    // ── Translation Dictionary ──
    var translations = {
        ko: {
            // Hero
            'hero.title': '사람과 데이터 사이,<br><span class="accent-color">기술과 예술</span>로 더 가까이',
            'hero.desc': '페블러스는 흩어지는 모래알 같은 데이터를 손에 꼭 잡히는 멋진 조약돌로 만들어 갑니다.',
            // Sections
            'section.latest': '<span class="accent-color">Latest</span> Posts',
            'section.viewAll': '전체 보기 →',
            'section.tech': 'Tech Insights',
            'section.techDesc': 'Physical AI, 데이터 품질 표준, ISO/IEC 인증 등 AI 기술의 최신 동향과 심층 분석',
            'section.business': 'Business',
            'section.businessDesc': '투자, 특허, 시장 분석, 정책 전략 - IR, IP 포트폴리오, 비즈니스 인사이트',
            'section.art': 'Data Art',
            'section.artDesc': '데이터를 예술로 표현하는 작품들 - 인터랙티브 미디어 아트, 제너러티브 아트, 데이터 시각화',
            'section.story': 'Data Stories',
            'section.storyDesc': '튜토리얼, 가이드, 사례 연구 - LLM 데이터셋, SQL 실습, 도구 활용',
            // Search
            'search.placeholder': '기사 검색... (제목, 설명, 태그)',
            'search.results': '검색 결과',
            'search.noResults': '검색 결과가 없습니다.',
            'search.readMore': '자세히 보기 →',
            // Articles
            'articles.empty': '게시된 기사가 없습니다.',
            'articles.showMore': '더 보기',
            'articles.showLess': '접기',
            'articles.featured': 'FEATURED',
            'articles.loadError': '기사를 불러오는데 실패했습니다.',
            // Subscribe
            'subscribe.title': '새 글을 놓치지 마세요',
            'subscribe.desc': 'RSS 피드를 구독하면 페블러스의 최신 글을 받아볼 수 있습니다.',
            'subscribe.btn': 'RSS 구독하기',
            // Stats
            'stats.title': '📊 블로그 통계',
            'stats.close': '닫기',
            'stats.totalPosts': '전체 포스트',
            'stats.lastUpdate': '마지막 업데이트:',
            // Topics
            'topics.title': 'Topics & Keywords'
        },
        en: {
            // Hero
            'hero.title': 'Where Technology Meets Art,<br><span class="accent-color">People Meet Data.</span>',
            'hero.desc': 'Pebblous transforms scattered data into meaningful, tangible pebbles you can hold.',
            // Sections
            'section.latest': '<span class="accent-color">Latest</span> Posts',
            'section.viewAll': 'View All →',
            'section.tech': 'Tech Insights',
            'section.techDesc': 'Latest trends and in-depth analysis in Physical AI, data quality standards, ISO/IEC certification',
            'section.business': 'Business',
            'section.businessDesc': 'Investment, patents, market analysis, policy strategy - IR, IP portfolio, business insights',
            'section.art': 'Data Art',
            'section.artDesc': 'Interactive media art, generative art, and data visualization works',
            'section.story': 'Data Stories',
            'section.storyDesc': 'Tutorials, guides, case studies - LLM datasets, SQL practice, tool usage',
            // Search
            'search.placeholder': 'Search articles... (title, description, tags)',
            'search.results': 'Search Results',
            'search.noResults': 'No search results found.',
            'search.readMore': 'Read More →',
            // Articles
            'articles.empty': 'No published articles.',
            'articles.showMore': 'Show More',
            'articles.showLess': 'Show Less',
            'articles.featured': 'FEATURED',
            'articles.loadError': 'Failed to load articles.',
            // Subscribe
            'subscribe.title': "Don't Miss New Posts",
            'subscribe.desc': 'Subscribe to the RSS feed to receive the latest posts from Pebblous.',
            'subscribe.btn': 'Subscribe to RSS',
            // Stats
            'stats.title': '📊 Blog Statistics',
            'stats.close': 'Close',
            'stats.totalPosts': 'Total Posts',
            'stats.lastUpdate': 'Last updated:',
            // Topics
            'topics.title': 'Topics & Keywords'
        }
    };

    function getSavedLanguage() {
        var saved = localStorage.getItem(STORAGE_KEY);
        return LANGUAGES.indexOf(saved) !== -1 ? saved : DEFAULT_LANG;
    }

    function t(key) {
        var lang = getSavedLanguage();
        var dict = translations[lang] || translations[DEFAULT_LANG];
        return dict[key] || key;
    }

    function setLanguage(lang) {
        if (LANGUAGES.indexOf(lang) === -1) return;
        localStorage.setItem(STORAGE_KEY, lang);
        updateToggleUI(lang);
        applyTranslations();
        if (window.IndexPage && window.IndexPage.applyLanguageFilter) {
            window.IndexPage.applyLanguageFilter(lang);
        }
    }

    function updateToggleUI(lang) {
        document.querySelectorAll('.lang-toggle-btn').forEach(function(btn) {
            var isActive = btn.dataset.lang === lang;
            btn.classList.toggle('active', isActive);
        });
    }

    function applyTranslations() {
        var lang = getSavedLanguage();

        // Translate data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(function(el) {
            var key = el.getAttribute('data-i18n');
            var translated = t(key);
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translated;
            } else {
                el.innerHTML = translated;
            }
        });

        // Show/hide data-lang elements (exclude toggle buttons)
        document.querySelectorAll('[data-lang]:not(.lang-toggle-btn)').forEach(function(el) {
            var elLang = el.getAttribute('data-lang');
            el.style.display = (elLang === lang) ? '' : 'none';
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        var currentLang = getSavedLanguage();
        updateToggleUI(currentLang);
        applyTranslations();

        document.querySelectorAll('.lang-toggle-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                setLanguage(btn.dataset.lang);
            });
        });
    });

    window.IndexPage = window.IndexPage || {};
    window.IndexPage.getCurrentLanguage = getSavedLanguage;
    window.IndexPage.setLanguage = setLanguage;
    window.IndexPage.t = t;
    window.IndexPage.applyTranslations = applyTranslations;
    window.IndexPage.LANGUAGES = LANGUAGES;
})();
