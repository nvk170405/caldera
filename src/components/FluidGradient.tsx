import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const FluidGradient = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createGradient = (x: number, y: number, radius: number, color1: string, color2: string) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);
      return gradient;
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      time += 0.005;
      
      // Create multiple fluid blobs with orange theme
      const blob1X = canvas.width * 0.2 + Math.sin(time * 0.8) * 100;
      const blob1Y = canvas.height * 0.3 + Math.cos(time * 0.6) * 80;
      const blob1Radius = 200 + Math.sin(time) * 50;
      
      const blob2X = canvas.width * 0.8 + Math.cos(time * 0.7) * 120;
      const blob2Y = canvas.height * 0.7 + Math.sin(time * 0.9) * 90;
      const blob2Radius = 180 + Math.cos(time * 1.2) * 40;
      
      const blob3X = canvas.width * 0.5 + Math.sin(time * 1.1) * 80;
      const blob3Y = canvas.height * 0.5 + Math.cos(time * 0.8) * 100;
      const blob3Radius = 150 + Math.sin(time * 0.9) * 30;

      // Blob 1 - Primary orange
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = createGradient(
        blob1X, 
        blob1Y, 
        blob1Radius,
        'rgba(255, 103, 0, 0.15)', // Primary orange with transparency
        'rgba(255, 103, 0, 0)'
      );
      ctx.beginPath();
      ctx.arc(blob1X, blob1Y, blob1Radius, 0, Math.PI * 2);
      ctx.fill();

      // Blob 2 - Primary glow
      ctx.fillStyle = createGradient(
        blob2X, 
        blob2Y, 
        blob2Radius,
        'rgba(255, 123, 31, 0.12)', // Primary glow with transparency
        'rgba(255, 123, 31, 0)'
      );
      ctx.beginPath();
      ctx.arc(blob2X, blob2Y, blob2Radius, 0, Math.PI * 2);
      ctx.fill();

      // Blob 3 - Accent orange
      ctx.fillStyle = createGradient(
        blob3X, 
        blob3Y, 
        blob3Radius,
        'rgba(255, 103, 0, 0.08)', // Lighter orange
        'rgba(255, 103, 0, 0)'
      );
      ctx.beginPath();
      ctx.arc(blob3X, blob3Y, blob3Radius, 0, Math.PI * 2);
      ctx.fill();

      // Additional floating particles
      for (let i = 0; i < 20; i++) {
        const particleX = (canvas.width * 0.1) + (i * canvas.width * 0.04) + Math.sin(time + i) * 20;
        const particleY = canvas.height * 0.8 + Math.cos(time * 0.5 + i) * 30;
        const particleRadius = 2 + Math.sin(time + i) * 1;
        
        ctx.globalCompositeOperation = 'lighter';
        ctx.fillStyle = `rgba(255, 103, 0, ${0.3 + Math.sin(time + i) * 0.2})`;
        ctx.beginPath();
        ctx.arc(particleX, particleY, particleRadius, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <motion.canvas
      ref={canvasRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="absolute inset-0 w-full h-full"
      style={{ 
        background: 'linear-gradient(180deg, hsl(210 11% 7%), hsl(210 9% 10%))',
        mixBlendMode: 'multiply'
      }}
    />
  );
};

export default FluidGradient;