'use client';
import React, { useRef, useEffect } from 'react';

const WaveGridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const gridSpacing = 40;
    const waveAmplitude = 10;
    const waveFrequency = 0.002;

    const draw = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
      ctx.lineWidth = 1;

      for (let y = 0; y < height; y += gridSpacing) {
        for (let x = 0; x < width; x += gridSpacing) {
          const offset = Math.sin(x * waveFrequency + time * 0.002) * waveAmplitude;
          ctx.beginPath();
          ctx.arc(x, y + offset, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        }
      }

      requestAnimationFrame(draw);
    };

    requestAnimationFrame(draw);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100svw',
        height: '100svh',
        zIndex: -1,
        background: '#111',
        filter: 'blur(1px)',
      }}
    />
  );
};

export default WaveGridBackground;
