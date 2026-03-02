// Card Particle System — "데이터의 우주"
// Shared module: used by index page and hub pages (ISO5259, IR, etc.)
// Configure via window.CardParticleConfig before this script loads.

var CardParticleDefaults = {
    particleCount: 22,
    maxDistance: 75,
    colors: [
        { r: 248, g: 104, b: 37, weight: 0.3 },
        { r: 20,  g: 184, b: 166, weight: 0.7 }
    ],
    idle: {
        lineOpacity: 0.18,
        particleOpacity: 0.25,
        velocity: 0.15,
        drift: 0.012,
        damping: 0.99
    },
    hover: {
        lineOpacityMax: 0.55,
        particleOpacityMax: 0.82,
        easing: 0.055,
        lineWidthBase: 0.5,
        lineWidthBoost: 1.0,
        radiusBoost: 0.6,
        breatheAmplitude: 0.15,
        breatheFrequency: 1.2,
        velocityBoost: 1.4
    },
    baseRadiusMin: 0.5,
    baseRadiusMax: 3.0
};

function initCardParticle(card, canvas) {
    var ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    // Merge user config with defaults
    var userCfg = window.CardParticleConfig || {};
    var cfg = {
        particleCount: userCfg.particleCount !== undefined ? userCfg.particleCount : CardParticleDefaults.particleCount,
        maxDistance: userCfg.maxDistance !== undefined ? userCfg.maxDistance : CardParticleDefaults.maxDistance,
        colors: userCfg.colors || CardParticleDefaults.colors,
        baseRadiusMin: userCfg.baseRadiusMin !== undefined ? userCfg.baseRadiusMin : CardParticleDefaults.baseRadiusMin,
        baseRadiusMax: userCfg.baseRadiusMax !== undefined ? userCfg.baseRadiusMax : CardParticleDefaults.baseRadiusMax
    };

    var di = CardParticleDefaults.idle;
    var ui = userCfg.idle || {};
    cfg.idle = {
        lineOpacity:     ui.lineOpacity !== undefined ? ui.lineOpacity : di.lineOpacity,
        particleOpacity: ui.particleOpacity !== undefined ? ui.particleOpacity : di.particleOpacity,
        velocity:        ui.velocity !== undefined ? ui.velocity : di.velocity,
        drift:           ui.drift !== undefined ? ui.drift : di.drift,
        damping:         ui.damping !== undefined ? ui.damping : di.damping
    };

    var dh = CardParticleDefaults.hover;
    var uh = userCfg.hover || {};
    cfg.hover = {
        lineOpacityMax:     uh.lineOpacityMax !== undefined ? uh.lineOpacityMax : dh.lineOpacityMax,
        particleOpacityMax: uh.particleOpacityMax !== undefined ? uh.particleOpacityMax : dh.particleOpacityMax,
        easing:             uh.easing !== undefined ? uh.easing : dh.easing,
        lineWidthBase:      uh.lineWidthBase !== undefined ? uh.lineWidthBase : dh.lineWidthBase,
        lineWidthBoost:     uh.lineWidthBoost !== undefined ? uh.lineWidthBoost : dh.lineWidthBoost,
        radiusBoost:        uh.radiusBoost !== undefined ? uh.radiusBoost : dh.radiusBoost,
        breatheAmplitude:   uh.breatheAmplitude !== undefined ? uh.breatheAmplitude : dh.breatheAmplitude,
        breatheFrequency:   uh.breatheFrequency !== undefined ? uh.breatheFrequency : dh.breatheFrequency,
        velocityBoost:      uh.velocityBoost !== undefined ? uh.velocityBoost : dh.velocityBoost
    };

    var width, height;
    var dpr = window.devicePixelRatio || 1;
    var particles = [];
    var isHovering = false;
    var hoverIntensity = 0;
    var animationId = null;

    function sizeCanvas() {
        var rect = canvas.parentElement.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        if (width === 0 || height === 0) return false;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        return true;
    }

    function pickColor(index) {
        var cumulative = 0;
        var threshold = index / cfg.particleCount;
        for (var c = 0; c < cfg.colors.length; c++) {
            cumulative += cfg.colors[c].weight;
            if (threshold < cumulative) return cfg.colors[c];
        }
        return cfg.colors[cfg.colors.length - 1];
    }

    function createParticles() {
        particles.length = 0;
        var radiusRange = cfg.baseRadiusMax - cfg.baseRadiusMin;
        for (var i = 0; i < cfg.particleCount; i++) {
            var color = pickColor(i);
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * cfg.idle.velocity,
                vy: (Math.random() - 0.5) * cfg.idle.velocity,
                baseRadius: Math.random() * radiusRange + cfg.baseRadiusMin,
                phase: Math.random() * Math.PI * 2,
                color: color
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        var lineAlpha = cfg.idle.lineOpacity + hoverIntensity * (cfg.hover.lineOpacityMax - cfg.idle.lineOpacity);
        var particleAlpha = cfg.idle.particleOpacity + hoverIntensity * (cfg.hover.particleOpacityMax - cfg.idle.particleOpacity);

        // Connection lines
        for (var i = 0; i < particles.length; i++) {
            for (var j = i + 1; j < particles.length; j++) {
                var dx = particles[i].x - particles[j].x;
                var dy = particles[i].y - particles[j].y;
                var dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < cfg.maxDistance) {
                    var alpha = (1 - dist / cfg.maxDistance) * lineAlpha;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = 'rgba(248, 104, 37, ' + alpha + ')';
                    ctx.lineWidth = cfg.hover.lineWidthBase + hoverIntensity * cfg.hover.lineWidthBoost;
                    ctx.stroke();
                }
            }
        }

        // Particles with gentle breathing
        var time = Date.now() * 0.001;
        for (var k = 0; k < particles.length; k++) {
            var p = particles[k];
            var breathe = 1 + Math.sin(time * cfg.hover.breatheFrequency + p.phase) * cfg.hover.breatheAmplitude * hoverIntensity;
            var r = p.baseRadius * (1 + hoverIntensity * cfg.hover.radiusBoost) * breathe;
            ctx.beginPath();
            ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(' + p.color.r + ', ' + p.color.g + ', ' + p.color.b + ', ' + particleAlpha + ')';
            ctx.fill();
        }
    }

    function update() {
        var target = isHovering ? 1 : 0;
        hoverIntensity += (target - hoverIntensity) * cfg.hover.easing;
        if (Math.abs(hoverIntensity - target) < 0.002) hoverIntensity = target;

        var velocityMult = 1 + hoverIntensity * (cfg.hover.velocityBoost - 1);

        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];
            p.vx += (Math.random() - 0.5) * cfg.idle.drift;
            p.vy += (Math.random() - 0.5) * cfg.idle.drift;
            p.vx *= cfg.idle.damping;
            p.vy *= cfg.idle.damping;

            p.x += p.vx * velocityMult;
            p.y += p.vy * velocityMult;

            if (p.x < 0) p.x = width;
            if (p.x > width) p.x = 0;
            if (p.y < 0) p.y = height;
            if (p.y > height) p.y = 0;
        }
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

    card.addEventListener('mouseenter', function() {
        isHovering = true;
        if (!animationId) animate();
    });

    card.addEventListener('mouseleave', function() {
        isHovering = false;
    });

    // Initialize
    if (sizeCanvas()) {
        createParticles();
        draw();
    }
}
