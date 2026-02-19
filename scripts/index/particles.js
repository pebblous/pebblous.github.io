// ============================================================
// Particle Canvas Animation (Desktop Only)
// ============================================================

(function() {
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        || window.innerWidth < 768;

    if (isMobile) return;

    const canvas = document.getElementById('particle-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let particles = [];
    const particleCount = 100;
    const maxDistance = 150;

    function setCanvasSize() {
        const dpr = window.devicePixelRatio || 1;
        const rect = canvas.getBoundingClientRect();

        canvas.style.width = rect.width + 'px';
        canvas.style.height = rect.height + 'px';

        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;

        ctx.scale(dpr, dpr);
    }

    class Particle {
        constructor() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.radius = Math.random() * 2 + 1;

            const speedCluster = Math.random();
            let speedMultiplier;

            if (speedCluster < 0.33) {
                speedMultiplier = 2.0 + Math.random() * 1.0;
                this.cluster = 'fast';
            } else if (speedCluster < 0.66) {
                speedMultiplier = 1.0 + Math.random() * 1.0;
                this.cluster = 'medium';
            } else {
                speedMultiplier = 0.5 + Math.random() * 0.5;
                this.cluster = 'slow';
            }

            this.vx = (Math.random() - 0.5) * 0.6 * speedMultiplier;
            this.vy = (Math.random() - 0.5) * 0.6 * speedMultiplier;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(248, 104, 37, 1)';
            ctx.fill();
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            if (this.x < 0) this.x = window.innerWidth;
            if (this.x > window.innerWidth) this.x = 0;
            if (this.y < 0) this.y = window.innerHeight;
            if (this.y > window.innerHeight) this.y = 0;
        }
    }

    function initParticles() {
        if (particles.length === 0) {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }
    }

    function connectParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < maxDistance) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(248, 104, 37, ${(1 - distance / maxDistance) * 0.8})`;
                    ctx.lineWidth = 1.5;
                    ctx.stroke();
                }
            }
        }
    }

    let lastTime = 0;
    const fps = 30;
    const interval = 1000 / fps;

    function animate(currentTime) {
        requestAnimationFrame(animate);

        const elapsed = currentTime - lastTime;
        if (elapsed < interval) return;

        lastTime = currentTime - (elapsed % interval);

        const rect = canvas.getBoundingClientRect();
        ctx.clearRect(0, 0, rect.width, rect.height);

        particles.forEach(p => {
            p.update();
            p.draw();
        });

        connectParticles();
    }

    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            particles = [];
            setCanvasSize();
            initParticles();
        }, 250);
    });

    setCanvasSize();
    initParticles();
    requestAnimationFrame(animate);
})();
