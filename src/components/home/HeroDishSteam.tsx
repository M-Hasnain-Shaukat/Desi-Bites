import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  spawnX: number;
  spawnY: number;
  life: number;
  maxLife: number;
  vy: number;
  vx: number;
  swayFreq: number;
  swayAmp: number;
  phase: number;
  initialRadius: number;
  maxRadius: number;
  peakAlpha: number;
  rotation: number;
  rotSpeed: number;
  aspectStretch: number;
}

interface WispStrand {
  points: { x: number; y: number }[];
  life: number;
  maxLife: number;
  spawnX: number;
  spawnY: number;
  length: number;
  peakAlpha: number;
}

export const HeroDishSteam: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isRunning = true;

    // Desktop master artwork: 1024 x 479 (widescreen, right-aligned)
    const DESK_ASPECT = 1024 / 479;
    // Mobile master artwork: 941 x 1672 (portrait, centered)
    const MOB_ASPECT = 941 / 1672;

    const particles: Particle[] = [];
    const wisps: WispStrand[] = [];
    const MAX_PARTICLES = 48;
    const MAX_WISPS = 4;

    // Handle high DPI displays smoothly
    const resizeCanvas = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Calculate exact canvas coordinates of the chicken karahi for desktop or mobile/tablet
    const getDishGeometry = (width: number, height: number) => {
      const isMobile = width <= 1040 || height > width;

      if (isMobile) {
        // Mobile image: 941 x 1672, centered background-size: cover
        const screenAspect = width / height;
        let imgW: number, imgH: number, imgX: number, imgY: number;

        if (screenAspect < MOB_ASPECT) {
          imgH = height;
          imgW = height * MOB_ASPECT;
          imgX = (width - imgW) / 2;
          imgY = 0;
        } else {
          imgW = width;
          imgH = width / MOB_ASPECT;
          imgX = 0;
          imgY = (height - imgH) / 2;
        }

        // Exact measured bounds of chicken curry inside mobile.png
        return {
          isMobile: true,
          centerX: imgX + 0.575 * imgW,
          rimY: imgY + 0.604 * imgH,
          rx: 0.20 * imgW,
          ry: 0.04 * imgH,
        };
      }

      // Desktop image: 1024 x 479, right-aligned background-size: cover
      const screenAspect = width / height;
      let imgW: number, imgH: number, imgX: number, imgY: number;

      if (screenAspect < DESK_ASPECT) {
        imgH = height;
        imgW = height * DESK_ASPECT;
        imgX = width - imgW;
        imgY = 0;
      } else {
        imgW = width;
        imgH = width / DESK_ASPECT;
        imgX = 0;
        imgY = (height - imgH) / 2;
      }

      // Exact measured bounds of chicken curry inside hero-bg.jpg
      return {
        isMobile: false,
        centerX: imgX + 0.772 * imgW,
        rimY: imgY + 0.582 * imgH,
        rx: 0.105 * imgW,
        ry: 0.032 * imgH,
      };
    };

    const createParticle = (width: number, height: number, initialProgress = 0): Particle => {
      const geom = getDishGeometry(width, height);
      const isMobile = geom.isMobile;

      // Spawn within the oval surface of the bubbling chicken karahi
      const angle = Math.random() * Math.PI * 2;
      const rad = Math.sqrt(Math.random()) * 0.95;
      const spawnX = geom.centerX + Math.cos(angle) * geom.rx * rad;
      const spawnY = geom.rimY + Math.sin(angle) * geom.ry * rad;

      const maxLife = (isMobile ? 120 : 140) + Math.random() * 70;
      const initialLife = initialProgress > 0 ? initialProgress * maxLife : 0;

      return {
        x: spawnX,
        y: spawnY,
        spawnX,
        spawnY,
        life: initialLife,
        maxLife,
        vy: isMobile ? (-0.85 - Math.random() * 0.75) : (-0.95 - Math.random() * 0.9), // Gentle thermal upward lift
        vx: (Math.random() - 0.5) * (isMobile ? 0.2 : 0.25),
        swayFreq: 0.02 + Math.random() * 0.025,
        swayAmp: isMobile ? (12 + Math.random() * 16) : (18 + Math.random() * 26),
        phase: Math.random() * Math.PI * 2,
        initialRadius: isMobile ? (8 + Math.random() * 7) : (10 + Math.random() * 10),
        maxRadius: isMobile ? (40 + Math.random() * 24) : (55 + Math.random() * 40),
        peakAlpha: 0.17 + Math.random() * 0.16,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.008,
        aspectStretch: 1.15 + Math.random() * 0.35,
      };
    };

    const createWisp = (width: number, height: number): WispStrand => {
      const geom = getDishGeometry(width, height);
      const isMobile = geom.isMobile;

      const angle = Math.random() * Math.PI * 2;
      const rad = Math.sqrt(Math.random()) * 0.7;
      const spawnX = geom.centerX + Math.cos(angle) * geom.rx * rad;
      const spawnY = geom.rimY + Math.sin(angle) * geom.ry * rad;

      return {
        points: [{ x: spawnX, y: spawnY }],
        life: 0,
        maxLife: (isMobile ? 80 : 100) + Math.random() * 50,
        spawnX,
        spawnY,
        length: isMobile ? (40 + Math.random() * 30) : (60 + Math.random() * 40),
        peakAlpha: 0.12 + Math.random() * 0.12,
      };
    };

    // Pre-populate particles across their lifecycles so steam is already rising immediately
    const rect = canvas.getBoundingClientRect();
    for (let i = 0; i < MAX_PARTICLES; i++) {
      particles.push(createParticle(rect.width, rect.height, Math.random()));
    }
    for (let i = 0; i < MAX_WISPS; i++) {
      wisps.push(createWisp(rect.width, rect.height));
    }

    let lastTime = performance.now();

    const render = (time: number) => {
      if (!isRunning) return;

      const delta = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // 1. Render Volumetric Steam Puffs
      ctx.save();
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.life += delta * 60;

        if (p.life >= p.maxLife) {
          particles[i] = createParticle(width, height);
          continue;
        }

        const progress = p.life / p.maxLife; // 0 to 1

        // Position: upward thermal ascent + natural convective sinuous curl
        const curl = Math.sin(p.life * p.swayFreq + p.phase) * (p.swayAmp * progress);
        p.y = p.spawnY + p.vy * p.life;
        p.x = p.spawnX + p.vx * p.life + curl;
        p.rotation += p.rotSpeed;

        // Realistic alpha curve: soft fade in -> sustained simmer -> delicate dissipation
        let alpha = 0;
        if (progress < 0.15) {
          alpha = (progress / 0.15) * p.peakAlpha;
        } else if (progress < 0.5) {
          alpha = p.peakAlpha;
        } else {
          alpha = (1 - (progress - 0.5) / 0.5) * p.peakAlpha;
        }

        // Radius expands smoothly as the steam cloud rises and cools
        const currentRadius = p.initialRadius + (p.maxRadius - p.initialRadius) * Math.pow(progress, 0.7);

        // Draw soft volumetric gradient particle
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.scale(1, p.aspectStretch);

        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, currentRadius);
        // Subtle warm ivory core capturing the Mughal lantern ambient glow
        grad.addColorStop(0, `rgba(255, 252, 244, ${alpha * 0.95})`);
        grad.addColorStop(0.35, `rgba(254, 245, 230, ${alpha * 0.65})`);
        grad.addColorStop(0.7, `rgba(250, 244, 235, ${alpha * 0.25})`);
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, currentRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();

      // 2. Render Delicate Sinuous Tendril Wisps
      ctx.save();
      for (let i = 0; i < wisps.length; i++) {
        const w = wisps[i];
        w.life += delta * 60;

        if (w.life >= w.maxLife) {
          wisps[i] = createWisp(width, height);
          continue;
        }

        const progress = w.life / w.maxLife;
        let alpha = 0;
        if (progress < 0.2) {
          alpha = (progress / 0.2) * w.peakAlpha;
        } else {
          alpha = (1 - (progress - 0.2) / 0.8) * w.peakAlpha;
        }

        const headY = w.spawnY - progress * w.length * 1.8;
        const headX = w.spawnX + Math.sin(progress * 4) * 14;

        ctx.strokeStyle = `rgba(255, 250, 240, ${alpha * 0.8})`;
        ctx.lineWidth = 2.5 * (1 - progress * 0.6);
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(w.spawnX, w.spawnY);
        ctx.quadraticCurveTo(
          w.spawnX + Math.sin(progress * 2) * 16,
          w.spawnY - (progress * w.length * 0.9),
          headX,
          headY
        );
        ctx.stroke();
      }
      ctx.restore();

      // Continuous unpaused playback
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none z-10 select-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};
