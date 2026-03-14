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

    const particles = Array.from({ length: 200 }, (_, i) => {
      const layer = i < 100 ? 0 : i < 160 ? 1 : 2;
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

        const haloSize = p.r * (p.layer === 2 ? 7 : p.layer === 1 ? 5 : 3);
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, haloSize);
        grd.addColorStop(0, `rgba(230, 190, 255, ${a * 0.9})`);
        grd.addColorStop(0.4, `rgba(190, 140, 255, ${a * 0.4})`);
        grd.addColorStop(1, `rgba(150, 100, 255, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, haloSize, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 245, 255, ${Math.min(a * 1.4, 1)})`;
        ctx.fill();

        if (p.layer >= 1 && p.r > 1.2) {
          const len = p.r * (p.layer === 2 ? 8 : 5);

          const grad1 = ctx.createLinearGradient(
            p.x - len,
            p.y,
            p.x + len,
            p.y,
          );
          grad1.addColorStop(0, `rgba(200,160,255,0)`);
          grad1.addColorStop(0.5, `rgba(220,190,255,${a * 0.9})`);
          grad1.addColorStop(1, `rgba(200,160,255,0)`);
          ctx.beginPath();
          ctx.moveTo(p.x - len, p.y);
          ctx.lineTo(p.x + len, p.y);
          ctx.strokeStyle = grad1;
          ctx.lineWidth = p.layer === 2 ? 1.2 : 0.7;
          ctx.stroke();

          const grad2 = ctx.createLinearGradient(
            p.x,
            p.y - len,
            p.x,
            p.y + len,
          );
          grad2.addColorStop(0, `rgba(200,160,255,0)`);
          grad2.addColorStop(0.5, `rgba(220,190,255,${a * 0.9})`);
          grad2.addColorStop(1, `rgba(200,160,255,0)`);
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - len);
          ctx.lineTo(p.x, p.y + len);
          ctx.strokeStyle = grad2;
          ctx.lineWidth = p.layer === 2 ? 1.2 : 0.7;
          ctx.stroke();
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
