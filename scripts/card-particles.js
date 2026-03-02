// Card Particle System — "데이터의 우주"
// Shared module: used by index page and hub pages (ISO5259, IR, etc.)
function initCardParticle(card, canvas) {
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let width, height;
    const dpr = window.devicePixelRatio || 1;
    const particleCount = 22;
    const maxDistance = 75;
    const particles = [];
    let isHovering = false;
    let hoverIntensity = 0;
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

        const lineAlpha = 0.12 + hoverIntensity * 0.33;
        const particleAlpha = 0.18 + hoverIntensity * 0.58;

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
