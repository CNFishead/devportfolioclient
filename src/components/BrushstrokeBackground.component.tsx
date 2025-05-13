"use client";
import React, { useRef, useEffect } from "react";

const BrushstrokeBackground: React.FC = () => {
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

    interface Stroke {
      x: number;
      y: number;
      length: number;
      angle: number;
      life: number;
      alpha: number;
      color: string;
    }

    const strokes: Stroke[] = [];
    const colors = ["#ffffff", "#cccccc", "#dddddd"];

    const createStroke = (): Stroke => {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        length: Math.random() * 40 + 20,
        angle: Math.random() * Math.PI * 2,
        life: Math.random() * 100 + 100,
        alpha: 1,
        color: colors[Math.floor(Math.random() * colors.length)],
      };
    };

    const animate = () => {
      ctx.fillStyle = "rgba(17, 17, 17, 0.1)";
      ctx.fillRect(0, 0, width, height);

      // Add new strokes
      if (strokes.length < 100) strokes.push(createStroke());

      for (let i = strokes.length - 1; i >= 0; i--) {
        const s = strokes[i];
        const dx = Math.cos(s.angle) * s.length;
        const dy = Math.sin(s.angle) * s.length;

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + dx, s.y + dy);
        ctx.strokeStyle = s.color;
        ctx.globalAlpha = s.alpha;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        s.life--;
        s.alpha -= 0.01;
        if (s.life <= 0 || s.alpha <= 0) strokes.splice(i, 1);
      }

      ctx.globalAlpha = 1.0;
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
  }, []);

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

export default BrushstrokeBackground;
