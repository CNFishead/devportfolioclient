"use client";
import React, { useRef, useEffect } from "react";

interface ParallaxParticlesProps {
  layerCount?: number;
  particleCount?: number;
  maxDistance?: number;
  colors?: string[];
}

const ParallaxParticles: React.FC<ParallaxParticlesProps> = ({
  layerCount = 3,
  particleCount = 40,
  maxDistance = 150,
  colors = [],
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.scale(dpr, dpr);

    interface Particle {
      x: number;
      y: number;
      z: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    }

    const particles: Particle[] = [];

    for (let l = 0; l < layerCount; l++) {
      const layerDepth = (l + 1) / layerCount;
      const count = particleCount * (layerDepth * 1.5);
      const color = colors.length === layerCount ? colors[l] : `rgba(255, 255, 255, ${0.3 + layerDepth * 0.5})`;

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: layerDepth,
          radius: 1 + layerDepth * 2,
          vx: (Math.random() - 0.5) * 0.5 * layerDepth,
          vy: (Math.random() - 0.5) * 0.5 * layerDepth,
          color,
        });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const isSameLayer = Math.abs(a.z - b.z) < 0.01;
            const alpha = isSameLayer ? 0.15 + (1 - dist / maxDistance) * 0.5 : 0.05 * (1 - dist / maxDistance);

            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };

    let resizeTimeout: NodeJS.Timeout;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 200);
    };

    window.addEventListener("resize", debouncedResize);
    return () => window.removeEventListener("resize", debouncedResize);
  }, [layerCount, particleCount, maxDistance, colors]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100svw",
        height: "100svh",
        display: "block",
        background: "#111",
        zIndex: -1,
      }}
    />
  );
};

export default ParallaxParticles;
