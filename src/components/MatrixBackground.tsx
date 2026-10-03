import { useEffect, useRef } from 'react';
import { prefersReducedMotion } from '../hooks';

const GLYPHS = 'アイウエオカキクケコサシスセソ0123456789ABCDEF<>/{}[];=+*';

export function MatrixBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const size = 16;
    let cols = 0;
    let drops: number[] = [];
    let raf = 0;
    let last = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(window.innerWidth / size);
      drops = Array.from({ length: cols }, () => Math.random() * -50);
      ctx.fillStyle = '#07070a';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    };

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      if (now - last < 70) return;
      last = now;
      ctx.fillStyle = 'rgba(7,7,10,0.14)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.font = `${size}px "JetBrains Mono Variable", monospace`;
      for (let i = 0; i < cols; i++) {
        const ch = GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
        const y = drops[i] * size;
        ctx.fillStyle = Math.random() > 0.975 ? '#fff6a8' : '#fcee0a';
        ctx.fillText(ch, i * size, y);
        if (y > window.innerHeight && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };

    const onVisibility = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !prefersReducedMotion()) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    document.addEventListener('visibilitychange', onVisibility);
    if (!prefersReducedMotion()) raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="matrix" aria-hidden="true" />;
}
