/**
 * Daily DAL (Data Art Lab) - "오늘의 달"
 *
 * 매일 하나의 Data Art Lab 작품을 선택하여 소개합니다.
 * "달" = DAL (Data Art Lab)의 언어유희
 */
class DailyDal {
    constructor() {
        this.modalId = 'daily-dal-modal';
        this.storageKey = 'pebblous-daily-dal-last-seen';
        this.today = new Date().toISOString().split('T')[0];
        this.artworks = [];
        this.selectedArtwork = null;
    }

    async init() {
        // Load artworks from articles.json
        await this.loadArtworks();

        if (this.artworks.length === 0) return;

        // Select random artwork
        this.selectedArtwork = this.selectRandomArtwork();

        this.createDOM();

        // Auto-show after a short delay
        setTimeout(() => this.show(), 1500);
    }

    async loadArtworks() {
        try {
            const response = await fetch('/articles.json', { cache: 'no-store' });
            const data = await response.json();

            // Filter published art category articles
            this.artworks = data.articles.filter(a => a.published && a.category === 'art');
        } catch (error) {
            console.error('Failed to load artworks:', error);
            this.artworks = [];
        }
    }

    selectRandomArtwork() {
        if (this.artworks.length === 0) return null;

        // Select completely random artwork
        const index = Math.floor(Math.random() * this.artworks.length);

        return this.artworks[index];
    }

    createDOM() {
        if (document.getElementById(this.modalId)) return;
        if (!this.selectedArtwork) return;

        const artwork = this.selectedArtwork;

        // Get image URL (prefer cardImage, fallback to image)
        let imageUrl = artwork.cardImage || artwork.image || '';
        if (imageUrl && !imageUrl.startsWith('http')) {
            imageUrl = imageUrl.startsWith('/')
                ? `https://blog.pebblous.ai${imageUrl}`
                : `https://blog.pebblous.ai/${imageUrl}`;
        }

        const modal = document.createElement('div');
        modal.id = this.modalId;
        modal.className = 'daily-dal-modal';
        modal.innerHTML = `
            <div class="daily-dal-content">
                <div class="daily-dal-header">
                    <span class="daily-dal-date">${this.today}</span>
                    <h2 class="daily-dal-title">오늘의 달 (Daily DAL)</h2>
                    <p class="daily-dal-subtitle">Data Art Lab</p>
                </div>
                <div class="daily-dal-artwork">
                    ${imageUrl ? `<img src="${imageUrl}" alt="${artwork.title}" class="daily-dal-image">` : ''}
                    <div class="daily-dal-info">
                        <h3 class="daily-dal-artwork-title">${artwork.title}</h3>
                        <p class="daily-dal-artwork-desc">${artwork.description}</p>
                        ${artwork.tags && artwork.tags.length > 0 ? `
                            <div class="daily-dal-tags">
                                ${artwork.tags.slice(0, 5).map(tag => `<span class="tag">${tag}</span>`).join('')}
                            </div>
                        ` : ''}
                    </div>
                </div>
                <div class="daily-dal-footer">
                    <a href="${artwork.path}"
                       ${artwork.external ? 'target="_blank" rel="noopener noreferrer"' : ''}
                       class="daily-dal-view-btn">
                        작품 보러 가기 →
                    </a>
                    <button id="daily-dal-close" class="daily-dal-close-btn">
                        달이 진다 (Close)
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Event Listeners
        document.getElementById('daily-dal-close').addEventListener('click', () => this.hide());

        // Close on background click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) this.hide();
        });

        // Close on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
                this.hide();
            }
        });
    }

    show() {
        const modal = document.getElementById(this.modalId);
        if (modal) {
            modal.classList.add('is-visible');
            document.body.style.overflow = 'hidden';
        }
    }

    hide() {
        const modal = document.getElementById(this.modalId);
        if (modal) {
            modal.classList.add('is-closing');
            modal.classList.remove('is-visible');

            // Wait for animation to finish
            setTimeout(() => {
                modal.classList.remove('is-closing');
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }, 1000); // Match CSS animation duration
        }
    }
}

// Initialize on load - only if URL path is '/dal' (not /dal.html)
// Note: /dal.html is the gallery page, so we don't show the modal there
window.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname;
    // Only show modal on redirect page (/dal or /dal/), not on the gallery page (/dal.html)
    if (currentPath === '/dal' || currentPath === '/dal/' || currentPath === '/dal/index.html') {
        const dailyDal = new DailyDal();
        dailyDal.init();
    }
});
