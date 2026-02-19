// ============================================================
// Article Rendering + Card Interactions
// ============================================================

window.IndexPage = window.IndexPage || {};

// Card Interaction Initialization (Optimized)
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

        // Tags scroll functionality
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

                card.addEventListener('mouseenter', function onMouseEnter() {
                    scroll.style.transform = `translateX(-${scrollDistance}px)`;
                    scroll.style.transition = `transform ${scrollDuration}ms linear`;

                    setTimeout(() => {
                        if (scroll.style.transform.includes('-')) {
                            container.classList.add('scrolled');
                        }
                    }, 300);
                });

                card.addEventListener('mouseleave', function onMouseLeave() {
                    scroll.style.transform = 'translateX(0)';
                    scroll.style.transition = `transform ${scrollDuration * 0.7}ms linear`;

                    setTimeout(() => {
                        container.classList.remove('scrolled');
                    }, 300);
                });
            }
        }

        // Video hover functionality
        const video = card.querySelector('video[data-animated]');

        if (video) {
            card.addEventListener('mouseenter', function onMouseEnter() {
                video.play().catch(err => {
                    console.log('Video autoplay prevented:', err);
                });
            });

            card.addEventListener('mouseleave', function onMouseLeave() {
                video.pause();
                video.currentTime = 0;
            });

            card.addEventListener('touchstart', function onTouchStart(e) {
                card.classList.add('touch-active');
                video.play().catch(err => {
                    console.log('Video autoplay prevented:', err);
                });
            }, { passive: true });

            card.addEventListener('touchend', function onTouchEnd() {
                card.classList.remove('touch-active');
                video.pause();
                video.currentTime = 0;
            }, { passive: true });
        }

        // Image hover swap functionality
        const img = card.querySelector('img[data-static][data-animated]');

        if (img) {
            const staticSrc = img.dataset.static;
            const animatedSrc = img.dataset.animated;

            let animatedLoaded = false;

            const preloadImg = new Image();
            preloadImg.onload = () => { animatedLoaded = true; };
            preloadImg.src = animatedSrc;

            card.addEventListener('mouseenter', function onMouseEnter() {
                if (!animatedLoaded) return;
                img.src = animatedSrc;
            });

            card.addEventListener('mouseleave', function onMouseLeave() {
                if (img.src.includes(animatedSrc)) {
                    img.src = staticSrc;
                }
            });

            card.addEventListener('touchstart', function onTouchStart(e) {
                if (!animatedLoaded) return;
                card.classList.add('touch-active');
                img.src = animatedSrc;
            }, { passive: true });

            card.addEventListener('touchend', function onTouchEnd() {
                card.classList.remove('touch-active');
                if (img.src.includes(animatedSrc)) {
                    img.src = staticSrc;
                }
            }, { passive: true });
        }

        // Card particle canvas
        const particleCanvas = card.querySelector('.card-particles');
        if (particleCanvas) {
            initCardParticle(card, particleCanvas);
        }
    });
}

// Card Particle System — "데이터의 우주"
function initCardParticle(card, canvas) {
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width, height;
    const dpr = window.devicePixelRatio || 1;
    const particleCount = 22;
    const maxDistance = 75;
    const particles = [];
    let isHovering = false;
    let hoverIntensity = 0; // 0→1 smooth lerp
    let animationId = null;

    function sizeCanvas() {
        const rect = canvas.parentElement.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        if (width === 0 || height === 0) return false;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        return true;
    }

    function createParticles() {
        particles.length = 0;
        for (let i = 0; i < particleCount; i++) {
            const isTeal = i >= particleCount * 0.7;
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.15,
                vy: (Math.random() - 0.5) * 0.15,
                baseRadius: Math.random() * 2.5 + 0.5,
                phase: Math.random() * Math.PI * 2,
                color: isTeal
                    ? { r: 20, g: 184, b: 166 }
                    : { r: 248, g: 104, b: 37 }
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        const lineAlpha = 0.03 + hoverIntensity * 0.42;
        const particleAlpha = 0.06 + hoverIntensity * 0.7;

        // Connection lines
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < maxDistance) {
                    const alpha = (1 - dist / maxDistance) * lineAlpha;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(248, 104, 37, ${alpha})`;
                    ctx.lineWidth = 0.5 + hoverIntensity * 0.8;
                    ctx.stroke();
                }
            }
        }

        // Particles with gentle breathing
        const time = Date.now() * 0.001;
        particles.forEach(p => {
            const breathe = 1 + Math.sin(time * 1.2 + p.phase) * 0.12 * hoverIntensity;
            const r = p.baseRadius * (1 + hoverIntensity * 0.5) * breathe;
            ctx.beginPath();
            ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${particleAlpha})`;
            ctx.fill();
        });
    }

    function update() {
        // Smooth hover transition (~1s fade)
        const target = isHovering ? 1 : 0;
        hoverIntensity += (target - hoverIntensity) * 0.035;
        if (Math.abs(hoverIntensity - target) < 0.002) hoverIntensity = target;

        particles.forEach(p => {
            // Gentle random drift
            p.vx += (Math.random() - 0.5) * 0.012;
            p.vy += (Math.random() - 0.5) * 0.012;
            p.vx *= 0.99;
            p.vy *= 0.99;

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;
        });
    }

    function animate() {
        update();
        draw();

        // Auto-stop when fully settled
        if (!isHovering && hoverIntensity < 0.002) {
            animationId = null;
            draw();
            return;
        }

        animationId = requestAnimationFrame(animate);
    }

    card.addEventListener('mouseenter', () => {
        isHovering = true;
        if (!animationId) animate();
    });

    card.addEventListener('mouseleave', () => {
        isHovering = false;
    });

    // Initialize
    if (sizeCanvas()) {
        createParticles();
        draw();
    }
}

// Article Rendering
function renderArticles(containerId, articles, category) {
    const container = document.getElementById(containerId);

    if (articles.length === 0) {
        container.innerHTML = '<p class="text-slate-400 text-center py-10">게시된 기사가 없습니다.</p>';
        return;
    }

    const getColumnsPerRow = () => {
        const width = window.innerWidth;
        if (width < 640) return 1;
        if (width < 1024) return 2;
        if (width < 1280) return 3;
        return 4;
    };

    const initialColumnsPerRow = getColumnsPerRow();
    const initialLimit = initialColumnsPerRow * 2;
    let currentDisplayCount = initialLimit;
    let previousDisplayCount = 0;

    const renderCard = (article, startIndex) => {
        const isExternal = article.external || false;
        const hasModal = article.hasModal || false;
        const isFeatured = article.featured || false;

        const hasCardImage = article.cardImage && article.cardImage.trim() !== '';
        let displayImage = hasCardImage ? article.cardImage : article.image;

        if (displayImage && !displayImage.startsWith('http')) {
            const baseUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
                ? window.location.origin
                : 'https://blog.pebblous.ai';
            displayImage = displayImage.startsWith('/')
                ? `${baseUrl}${displayImage}`
                : `${baseUrl}/${displayImage}`;
        }

        const featuredBadge = isFeatured
            ? `<span class="featured-badge">FEATURED</span>`
            : '';

        const isAnimatedVideo = article.imageAnimated && (
            article.imageAnimated.toLowerCase().endsWith('.mp4') ||
            article.imageAnimated.toLowerCase().endsWith('.m4v')
        );

        const isArt = article.category === 'art';

        const imageTag = isAnimatedVideo
            ? `<div class="relative w-full aspect-[1200/630] overflow-hidden bg-slate-900 group/img">
                <video class="w-full h-full object-cover rounded-md"
                       data-animated muted loop playsinline preload="metadata">
                    <source src="${article.imageAnimated}" type="${article.imageAnimated.toLowerCase().endsWith('.m4v') ? 'video/x-m4v' : 'video/mp4'}">
                </video>
               </div>`
            : (article.imageAnimated && displayImage)
                ? `<div class="relative w-full aspect-[1200/630] overflow-hidden bg-slate-900 group/img">
                    <img src="${displayImage}" alt="${article.title}"
                         class="w-full h-full object-cover rounded-md"
                         data-static="${displayImage}" data-animated="${article.imageAnimated}"
                         loading="lazy">
                   </div>`
                : (isArt && displayImage)
                    ? `<div class="relative w-full aspect-[1200/630] overflow-hidden bg-slate-900 group/img">
                        <img src="${displayImage}" alt="${article.title}"
                             class="w-full h-full object-cover rounded-md"
                             loading="lazy">
                       </div>`
                    : `<div class="relative w-full aspect-[1200/630] overflow-hidden card-particle-area">
                        <canvas class="card-particles"></canvas>
                       </div>`;

        const tagsHtml = article.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        const tagsScrollHtml = `
            <div class="tags-container mb-3">
                <div class="tags-scroll">
                    ${tagsHtml}
                </div>
            </div>
        `;

        const animationDelay = startIndex < initialLimit ? `style="animation-delay: ${startIndex * 0.1}s;"` : '';

        if (isExternal) {
            return `
                <a href="${article.path}" target="_blank" rel="noopener noreferrer" class="card rounded-lg overflow-hidden group flex flex-col fade-in" ${animationDelay}>
                    <div class="p-6 flex-grow">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-xs text-slate-500">${article.date}</span>
                            ${featuredBadge}
                        </div>
                        ${tagsScrollHtml}
                        <h3 class="text-2xl font-bold text-white group-hover:accent-color transition-colors">${article.title}</h3>
                        <p class="mt-3 text-sm text-slate-400">${article.description}</p>
                    </div>
                    ${imageTag}
                </a>
            `;
        } else if (hasModal) {
            return `
                <div class="card rounded-lg overflow-hidden flex flex-col group fade-in" ${animationDelay}>
                    <div class="p-6 flex-grow">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-xs text-slate-500">${article.date}</span>
                            ${featuredBadge}
                        </div>
                        ${tagsScrollHtml}
                        <h3 class="text-2xl font-bold text-white mb-3">${article.title}</h3>
                        <p class="text-sm text-slate-400">${article.description}</p>
                    </div>
                    <div class="pl-6 pr-3 pb-0 flex justify-end">
                        <div class="icon-panel">
                            <button onclick="openModal('${article.modalId}')" class="icon-button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </button>
                            <a href="${article.path}" target="_blank" rel="noopener noreferrer" class="icon-button">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    ${imageTag}
                </div>
            `;
        } else {
            return `
                <a href="${article.path}" class="card rounded-lg overflow-hidden group flex flex-col fade-in" ${animationDelay}>
                    <div class="p-6 flex-grow">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="text-xs text-slate-500">${article.date}</span>
                            ${featuredBadge}
                        </div>
                        ${tagsScrollHtml}
                        <h3 class="text-2xl font-bold text-white group-hover:accent-color transition-colors">${article.title}</h3>
                        <p class="mt-3 text-sm text-slate-400">${article.description}</p>
                    </div>
                    ${imageTag}
                </a>
            `;
        }
    };

    const updateDisplay = (isIncreasing) => {
        const existingButtons = container.querySelectorAll('.col-span-full');
        existingButtons.forEach(btn => btn.remove());

        if (isIncreasing) {
            const newArticles = articles.slice(previousDisplayCount, currentDisplayCount);

            const oldPlaceholders = container.querySelectorAll('.card-placeholder');
            oldPlaceholders.forEach(p => p.remove());

            newArticles.forEach((article, index) => {
                const cardDiv = document.createElement('div');
                cardDiv.innerHTML = renderCard(article, previousDisplayCount + index);
                container.appendChild(cardDiv.firstElementChild);
            });

            const newCards = Array.from(container.querySelectorAll('.card')).slice(-newArticles.length);
            initCardInteractions(newCards);
        } else {
            const cardsToKeep = currentDisplayCount;
            const allCards = container.querySelectorAll('.card, .card-placeholder');

            for (let i = allCards.length - 1; i >= cardsToKeep; i--) {
                allCards[i].remove();
            }

            const oldPlaceholders = container.querySelectorAll('.card-placeholder');
            oldPlaceholders.forEach(p => p.remove());
        }

        const currentCards = container.querySelectorAll('.card').length;
        const columnsPerRow = getColumnsPerRow();
        const cardsInLastRow = currentCards % columnsPerRow;
        const emptySlots = cardsInLastRow === 0 ? 0 : columnsPerRow - cardsInLastRow;

        for (let i = 0; i < emptySlots; i++) {
            const placeholder = document.createElement('div');
            placeholder.className = 'card-placeholder';
            container.appendChild(placeholder);
        }

        const hasMore = currentDisplayCount < articles.length;
        const hasLess = currentDisplayCount > initialLimit;

        if (hasMore || hasLess) {
            const navWrapper = document.createElement('div');
            navWrapper.className = 'col-span-full flex flex-nowrap justify-center items-center gap-3 mt-8';

            if (hasLess) {
                const showLessBtn = document.createElement('button');
                showLessBtn.id = `showless-${category}`;
                showLessBtn.className = 'show-less-btn px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-md transition-colors whitespace-nowrap';
                showLessBtn.textContent = '적게 보기';
                showLessBtn.setAttribute('type', 'button');

                showLessBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    previousDisplayCount = currentDisplayCount;
                    const columnsPerRow = getColumnsPerRow();
                    const decrement = columnsPerRow * 2;
                    currentDisplayCount = Math.max(currentDisplayCount - decrement, initialLimit);
                    updateDisplay(false);
                    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, { passive: false });

                navWrapper.appendChild(showLessBtn);
            }

            if (hasMore) {
                const loadMoreBtn = document.createElement('button');
                loadMoreBtn.id = `loadmore-${category}`;
                loadMoreBtn.className = 'load-more-btn px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-md transition-colors whitespace-nowrap';
                const remaining = articles.length - currentDisplayCount;
                loadMoreBtn.textContent = `더 보기 (${remaining})`;
                loadMoreBtn.setAttribute('type', 'button');

                loadMoreBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    previousDisplayCount = currentDisplayCount;
                    const columnsPerRow = getColumnsPerRow();
                    const increment = columnsPerRow * 2;
                    currentDisplayCount = Math.min(currentDisplayCount + increment, articles.length);
                    updateDisplay(true);
                }, { passive: false });

                navWrapper.appendChild(loadMoreBtn);
            }

            container.appendChild(navWrapper);
        }

        previousDisplayCount = currentDisplayCount;
    };

    // Initial render
    const initialArticles = articles.slice(0, initialLimit);
    const cardsHtml = initialArticles.map((article, index) => renderCard(article, index)).join('');
    container.innerHTML = cardsHtml;

    const columnsPerRow = getColumnsPerRow();
    const cardsInLastRow = initialLimit % columnsPerRow;
    const emptySlots = cardsInLastRow === 0 ? 0 : columnsPerRow - cardsInLastRow;
    for (let i = 0; i < emptySlots; i++) {
        const placeholder = document.createElement('div');
        placeholder.className = 'card-placeholder';
        container.appendChild(placeholder);
    }

    const initialCards = container.querySelectorAll('.card');
    initCardInteractions(Array.from(initialCards));

    if (articles.length > initialLimit) {
        const loadMoreWrapper = document.createElement('div');
        loadMoreWrapper.className = 'col-span-full flex flex-nowrap justify-center items-center mt-8';

        const loadMoreBtn = document.createElement('button');
        loadMoreBtn.id = `loadmore-${category}`;
        loadMoreBtn.className = 'load-more-btn px-4 sm:px-8 py-3 text-sm sm:text-base font-semibold rounded-md transition-colors whitespace-nowrap';
        const remaining = articles.length - initialLimit;
        loadMoreBtn.textContent = `더 보기 (${remaining})`;
        loadMoreBtn.setAttribute('type', 'button');

        loadMoreBtn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            previousDisplayCount = currentDisplayCount;
            const columnsPerRow = getColumnsPerRow();
            const increment = columnsPerRow * 2;
            currentDisplayCount = Math.min(currentDisplayCount + increment, articles.length);
            updateDisplay(true);
        }, { passive: false });

        loadMoreWrapper.appendChild(loadMoreBtn);
        container.appendChild(loadMoreWrapper);
    }
}

// Export to namespace
window.IndexPage.renderArticles = renderArticles;
window.IndexPage.initCardInteractions = initCardInteractions;
