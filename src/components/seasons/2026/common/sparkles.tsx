"use client";

import { useEffect, useRef } from "react";

export default function Sparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;

    const resize = () => {
      const w = window.innerWidth;
      const h = document.body.scrollHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    // 350 particles (up from 200) across 3 depth layers
    const particles = Array.from({ length: 350 }, (_, i) => {
      const layer = i < 170 ? 0 : i < 280 ? 1 : 2;
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * document.body.scrollHeight,
        layer,
        r:
          layer === 0
            ? Math.random() * 1 + 0.3
            : layer === 1
              ? Math.random() * 2 + 1
              : Math.random() * 3.5 + 1.5,
        alpha:
          layer === 0
            ? Math.random() * 0.15 + 0.05
            : layer === 1
              ? Math.random() * 0.25 + 0.1
              : Math.random() * 0.35 + 0.15,
        speed:
          layer === 0
            ? Math.random() * 0.006 + 0.002
            : layer === 1
              ? Math.random() * 0.012 + 0.005
              : Math.random() * 0.02 + 0.01,
        phase: Math.random() * Math.PI * 2,
        vx:
          (Math.random() - 0.5) *
          (layer === 0 ? 0.08 : layer === 1 ? 0.2 : 0.4),
        vy:
          (Math.random() - 0.5) *
          (layer === 0 ? 0.05 : layer === 1 ? 0.12 : 0.25),
      };
    });

    const pageHeight = () => document.body.scrollHeight;
    const pageWidth = () => window.innerWidth;

    let frame: number;
    function draw() {
      ctx.clearRect(0, 0, pageWidth(), pageHeight());

      particles.forEach((p) => {
        p.phase += p.speed;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = pageWidth();
        if (p.x > pageWidth()) p.x = 0;
        if (p.y < 0) p.y = pageHeight();
        if (p.y > pageHeight()) p.y = 0;

        const a = (Math.sin(p.phase) * 0.5 + 0.5) * p.alpha;
        if (a < 0.02) return;

        // --- Outer bloom (wide, very soft) ---
        const outerSize = p.r * (p.layer === 2 ? 22 : p.layer === 1 ? 14 : 8);
        const outerGrd = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          outerSize,
        );
        outerGrd.addColorStop(0, `rgba(210, 160, 255, ${a * 0.5})`);
        outerGrd.addColorStop(0.3, `rgba(180, 120, 255, ${a * 0.2})`);
        outerGrd.addColorStop(1, `rgba(140, 80, 255, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, outerSize, 0, Math.PI * 2);
        ctx.fillStyle = outerGrd;
        ctx.fill();

        // --- Inner halo (tight, bright centre) ---
        const haloSize = p.r * (p.layer === 2 ? 9 : p.layer === 1 ? 6 : 4);
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, haloSize);
        grd.addColorStop(0, `rgba(255, 240, 255, ${a})`);
        grd.addColorStop(0.25, `rgba(230, 190, 255, ${a * 0.85})`);
        grd.addColorStop(0.6, `rgba(190, 130, 255, ${a * 0.35})`);
        grd.addColorStop(1, `rgba(150, 90, 255, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, haloSize, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // --- No hard circle fill — the gradient IS the sparkle ---

        // --- Soft cross lines using shadowBlur instead of sharp strokes ---
        if (p.layer >= 1 && p.r > 1.2) {
          const len = p.r * (p.layer === 2 ? 12 : 7);
          const lineAlpha = a * 0.75;

          ctx.save();
          ctx.shadowColor = `rgba(220, 180, 255, ${lineAlpha})`;
          ctx.shadowBlur = p.layer === 2 ? 8 : 5;
          ctx.globalAlpha = lineAlpha;

          // Horizontal arm
          const grad1 = ctx.createLinearGradient(
            p.x - len,
            p.y,
            p.x + len,
            p.y,
          );
          grad1.addColorStop(0, `rgba(200, 160, 255, 0)`);
          grad1.addColorStop(0.5, `rgba(230, 200, 255, 1)`);
          grad1.addColorStop(1, `rgba(200, 160, 255, 0)`);
          ctx.beginPath();
          ctx.moveTo(p.x - len, p.y);
          ctx.lineTo(p.x + len, p.y);
          ctx.strokeStyle = grad1;
          ctx.lineWidth = p.layer === 2 ? 0.8 : 0.5;
          ctx.stroke();

          // Vertical arm
          const grad2 = ctx.createLinearGradient(
            p.x,
            p.y - len,
            p.x,
            p.y + len,
          );
          grad2.addColorStop(0, `rgba(200, 160, 255, 0)`);
          grad2.addColorStop(0.5, `rgba(230, 200, 255, 1)`);
          grad2.addColorStop(1, `rgba(200, 160, 255, 0)`);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - len);
          ctx.lineTo(p.x, p.y + len);
          ctx.strokeStyle = grad2;
          ctx.lineWidth = p.layer === 2 ? 0.8 : 0.5;
          ctx.stroke();

          ctx.restore();
        }
      });

      frame = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
    />
  );
}
