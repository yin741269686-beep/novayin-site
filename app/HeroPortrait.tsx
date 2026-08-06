"use client";

import { useEffect, useRef } from "react";

type Particle = {
  sx: number;
  sy: number;
  tx: number;
  ty: number;
  x: number;
  y: number;
  r: number;
  g: number;
  b: number;
  size: number;
  delay: number;
  duration: number;
  phase: number;
};

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);

export function HeroPortrait() {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const frame = frameRef.current;
    const image = imageRef.current;
    const canvas = canvasRef.current;
    if (!frame || !image || !canvas) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      frame.classList.add("isSettled");
      return;
    }

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    let particles: Particle[] = [];
    let animationFrame = 0;
    let resizeTimer = 0;
    let startedAt = performance.now();
    let frameWidth = 0;
    let frameHeight = 0;
    let extension = 0;
    let canvasWidth = 0;
    let dpr = 1;
    const mouse = { x: -9999, y: -9999, active: false };

    const measure = () => {
      const rect = frame.getBoundingClientRect();
      frameWidth = rect.width;
      frameHeight = rect.height;
      extension = frameWidth * 0.46;
      canvasWidth = frameWidth + extension;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvasWidth * dpr);
      canvas.height = Math.round(frameHeight * dpr);
      canvas.style.width = `${canvasWidth}px`;
      canvas.style.height = `${frameHeight}px`;
      canvas.style.left = `${-extension}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const buildParticles = () => {
      const sampleSize = window.innerWidth < 700 ? 180 : 240;
      const offscreen = document.createElement("canvas");
      offscreen.width = sampleSize;
      offscreen.height = sampleSize;
      const offscreenContext = offscreen.getContext("2d", { willReadFrequently: true });
      if (!offscreenContext) return;
      offscreenContext.drawImage(image, 0, 0, sampleSize, sampleSize);
      const pixels = offscreenContext.getImageData(0, 0, sampleSize, sampleSize).data;
      const step = window.innerWidth < 700 ? 3 : 2;
      const next: Particle[] = [];

      for (let y = 0; y < sampleSize; y += step) {
        for (let x = 0; x < sampleSize; x += step) {
          const index = (y * sampleSize + x) * 4;
          const alpha = pixels[index + 3];
          if (alpha < 30) continue;
          const nx = x / sampleSize;
          const ny = y / sampleSize;
          const tx = extension + nx * frameWidth;
          const ty = ny * frameHeight;
          const sx = extension * (0.02 + Math.random() * 0.83);
          const sy = ty + (Math.random() - 0.5) * frameHeight * 0.42;
          next.push({
            sx,
            sy,
            tx,
            ty,
            x: sx,
            y: sy,
            r: pixels[index],
            g: pixels[index + 1],
            b: pixels[index + 2],
            size: 0.65 + Math.random() * 1.05,
            delay: nx * 720 + Math.random() * 280,
            duration: 850 + Math.random() * 620,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }
      particles = next;
    };

    const draw = (now: number) => {
      const elapsed = now - startedAt;
      const time = now * 0.001;
      context.clearRect(0, 0, canvasWidth, frameHeight);

      for (const particle of particles) {
        let opacity = 1;
        let px = particle.tx;
        let py = particle.ty;

        if (elapsed < 2300) {
          const local = (elapsed - particle.delay) / particle.duration;
          const progress = local <= 0 ? 0 : local >= 1 ? 1 : easeOut(local);
          px = particle.sx + (particle.tx - particle.sx) * progress;
          py = particle.sy + (particle.ty - particle.sy) * progress;
          opacity = Math.max(0, Math.min(1, local + 0.18));
        } else {
          px += Math.sin(time * 0.95 + particle.phase) * 0.6;
          py += Math.cos(time * 0.72 + particle.phase) * 0.7;

          if (mouse.active) {
            const dx = px - mouse.x;
            const dy = py - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy) || 1;
            const radius = Math.max(90, frameWidth * 0.22);
            if (distance < radius) {
              const force = (1 - distance / radius) * 28;
              px += (dx / distance) * force;
              py += (dy / distance) * force;
            }
          }
        }

        if (opacity <= 0.01) continue;
        context.fillStyle = `rgba(${particle.r},${particle.g},${particle.b},${opacity * 0.14})`;
        context.fillRect(px - 0.8, py - 0.8, particle.size + 1.6, particle.size + 1.6);
        context.fillStyle = `rgba(${particle.r},${particle.g},${particle.b},${opacity * 0.88})`;
        context.fillRect(px, py, particle.size, particle.size);
      }

      animationFrame = requestAnimationFrame(draw);
    };

    const start = () => {
      measure();
      buildParticles();
      startedAt = performance.now();
      frame.classList.add("isMotionReady");
      animationFrame = requestAnimationFrame(draw);
    };

    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        measure();
        buildParticles();
        startedAt = performance.now() - 2400;
      }, 160);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active = mouse.x >= 0 && mouse.x <= canvasWidth && mouse.y >= 0 && mouse.y <= frameHeight;
    };

    const onPointerLeave = () => { mouse.active = false; };

    if (image.complete && image.naturalWidth) start();
    else image.addEventListener("load", start, { once: true });

    window.addEventListener("resize", onResize);
    frame.addEventListener("pointermove", onPointerMove);
    frame.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      frame.removeEventListener("pointermove", onPointerMove);
      frame.removeEventListener("pointerleave", onPointerLeave);
      image.removeEventListener("load", start);
    };
  }, []);

  return (
    <div className="portraitFrame portraitMotion" ref={frameRef}>
      <div className="portraitGhosts" aria-hidden="true">
        <img className="ghost ghostOne" src="/nova-portrait.jpg" alt="" />
        <img className="ghost ghostTwo" src="/nova-portrait.jpg" alt="" />
        <img className="ghost ghostThree" src="/nova-portrait.jpg" alt="" />
      </div>
      <img ref={imageRef} className="portraitBase" src="/nova-portrait.jpg" alt="Nova 尹阳阳阳儿个人形象照" />
      <canvas ref={canvasRef} className="portraitParticles" aria-hidden="true" />
    </div>
  );
}
