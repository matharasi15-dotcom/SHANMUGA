import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  isConstellationNode: boolean;
}

interface FloatingGlyph {
  symbol: string;
  angle: number;
  orbitRatio: number;
  speed: number;
  size: number;
  alpha: number;
}

const ZODIAC_GLYPHS = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];

export function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let glyphs: FloatingGlyph[] = [];

    const initScene = () => {
      const count = Math.min(115, Math.max(48, Math.floor((width * height) / 13500)));
      stars = Array.from({ length: count }, (_, idx) => {
        const isNode = idx % 3 === 0;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.14,
          vy: -(Math.random() * 0.14 + 0.03),
          radius: isNode ? Math.random() * 1.55 + 0.8 : Math.random() * 1.15 + 0.35,
          baseAlpha: isNode ? Math.random() * 0.45 + 0.35 : Math.random() * 0.35 + 0.15,
          twinkleSpeed: Math.random() * 0.016 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          isConstellationNode: isNode,
        };
      });

      glyphs = ZODIAC_GLYPHS.map((symbol, idx) => ({
        symbol,
        angle: (idx / ZODIAC_GLYPHS.length) * Math.PI * 2,
        orbitRatio: idx % 2 === 0 ? 0.34 : 0.44,
        speed: idx % 2 === 0 ? 0.00055 : -0.00038,
        size: idx % 2 === 0 ? 18 : 14,
        alpha: idx % 2 === 0 ? 0.22 : 0.15,
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initScene();
    };

    const drawGalaxyNebula = (tick: number) => {
      const shiftX = prefersReducedMotion ? 0 : Math.sin(tick * 0.0025) * 35;
      const shiftY = prefersReducedMotion ? 0 : Math.cos(tick * 0.002) * 24;

      // Upper-right neon purple & orange cosmic glow
      const grad1 = ctx.createRadialGradient(
        width * 0.74 + shiftX,
        height * 0.24 + shiftY,
        20,
        width * 0.74 + shiftX,
        height * 0.24 + shiftY,
        Math.max(width, height) * 0.5,
      );
      grad1.addColorStop(0, 'rgba(168, 85, 247, 0.14)');
      grad1.addColorStop(0.42, 'rgba(255, 122, 0, 0.06)');
      grad1.addColorStop(1, 'rgba(8, 7, 14, 0)');
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      // Lower-left neon yellow & warm amber mist
      const grad2 = ctx.createRadialGradient(
        width * 0.22 - shiftX * 0.6,
        height * 0.72 - shiftY * 0.6,
        10,
        width * 0.22 - shiftX * 0.6,
        height * 0.72 - shiftY * 0.6,
        Math.max(width, height) * 0.45,
      );
      grad2.addColorStop(0, 'rgba(255, 230, 0, 0.08)');
      grad2.addColorStop(0.5, 'rgba(255, 122, 0, 0.04)');
      grad2.addColorStop(1, 'rgba(8, 7, 14, 0)');
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);
    };

    const drawGlowingGoldenCircles = (tick: number) => {
      const cx = width * 0.5;
      const cy = Math.min(height * 0.44, 420);
      const baseRadius = Math.min(width, height) * 0.36;
      const rotation = prefersReducedMotion ? 0 : tick * 0.00045;

      ctx.save();
      ctx.translate(cx, cy);

      // Outer neon purple ring
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 1.25, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.14)';
      ctx.lineWidth = 1;
      ctx.shadowColor = 'rgba(168, 85, 247, 0.38)';
      ctx.shadowBlur = 14;
      ctx.stroke();

      // Middle dashed orbital orange-yellow ring
      ctx.save();
      ctx.rotate(rotation);
      ctx.setLineDash([4, 10]);
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.96, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 230, 0, 0.15)';
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();

      // Inner warm orange circle
      ctx.beginPath();
      ctx.arc(0, 0, baseRadius * 0.68, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 122, 0, 0.13)';
      ctx.lineWidth = 0.9;
      ctx.stroke();

      ctx.restore();

      // Orbiting zodiac symbols
      const maxDim = Math.min(width, height);
      ctx.save();
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      for (const g of glyphs) {
        const theta = prefersReducedMotion ? g.angle : g.angle + tick * g.speed;
        const rx = cx + Math.cos(theta) * (maxDim * g.orbitRatio * 1.15);
        const ry = cy + Math.sin(theta) * (maxDim * g.orbitRatio * 0.85);
        ctx.font = `${g.size}px "Cinzel", Georgia, serif`;
        ctx.fillStyle = `rgba(255, 204, 51, ${g.alpha})`;
        ctx.fillText(g.symbol, rx, ry);
      }
      ctx.restore();
    };

    const drawStarsAndConstellations = (tick: number) => {
      const linkDistance = Math.min(135, Math.max(90, width * 0.095));

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        if (!prefersReducedMotion) {
          s.x += s.vx;
          s.y += s.vy;
          if (s.y < -6) {
            s.y = height + 6;
            s.x = Math.random() * width;
          }
          if (s.x < -6) s.x = width + 6;
          if (s.x > width + 6) s.x = -6;
        }
      }

      // Draw moving constellation lines between nearby constellation nodes
      ctx.save();
      ctx.lineWidth = 0.7;
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i];
        if (!a.isConstellationNode) continue;
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j];
          if (!b.isConstellationNode) continue;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < linkDistance * linkDistance) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / linkDistance) * 0.18;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.stroke();
          }
        }
      }
      ctx.restore();

      // Draw golden stars
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        const twinkle = prefersReducedMotion
          ? 0
          : Math.sin(tick * s.twinkleSpeed + s.twinklePhase) * 0.22;
        const alpha = Math.max(0.08, Math.min(0.9, s.baseAlpha + twinkle));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
        ctx.fillStyle = s.isConstellationNode
          ? `rgba(255, 229, 160, ${alpha})`
          : `rgba(212, 175, 55, ${alpha * 0.85})`;
        ctx.fill();
      }
    };

    const drawFrame = (tick: number) => {
      ctx.clearRect(0, 0, width, height);
      drawGalaxyNebula(tick);
      drawGlowingGoldenCircles(tick);
      drawStarsAndConstellations(tick);
    };

    resize();
    window.addEventListener('resize', resize);

    if (prefersReducedMotion) {
      drawFrame(0);
    } else {
      let tick = 0;
      const render = () => {
        tick += 1;
        drawFrame(tick);
        animationFrameId = window.requestAnimationFrame(render);
      };
      animationFrameId = window.requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 pointer-events-none opacity-90"
    />
  );
}
