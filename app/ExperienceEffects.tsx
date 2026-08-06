"use client";

import { useEffect } from "react";

const TERMINAL_LINES = [
  "$ nova build --for-real",
  "10:12:01  reading business context",
  "10:12:02  mapping workflow",
  "10:12:03  selecting AI scenarios",
  "10:12:05  building agent prototype",
  "10:12:07  testing with real data",
  "10:12:09  preparing delivery",
];

export function ExperienceEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".pageSection"));
    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav]"));

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const element = entry.target as HTMLElement;
        const siblings = Array.from(element.parentElement?.querySelectorAll(":scope > [data-reveal]") ?? []);
        const order = Math.max(0, siblings.indexOf(element));
        element.style.setProperty("--reveal-delay", `${Math.min(order * 150, 600)}ms`);
        element.classList.add("isVisible");
        revealObserver.unobserve(element);
      });
    }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });

    if (reduceMotion) revealItems.forEach((item) => item.classList.add("isVisible"));
    else revealItems.forEach((item) => revealObserver.observe(item));

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = (entry.target as HTMLElement).id;
        navLinks.forEach((link) => link.classList.toggle("isActive", link.dataset.nav === id));
        document.body.classList.toggle("themeDark", id === "services");
      });
    }, { rootMargin: "-44% 0px -44% 0px" });
    sections.forEach((section) => sectionObserver.observe(section));

    let recorderStart = performance.now();
    let recorderFrame = 0;
    const recorder = document.querySelector<HTMLElement>("[data-rec-time]");
    const updateRecorder = (now: number) => {
      if (recorder) {
        const seconds = Math.floor((now - recorderStart) / 1000);
        const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
        const ss = String(seconds % 60).padStart(2, "0");
        recorder.textContent = `00:${mm}:${ss}`;
      }
      recorderFrame = requestAnimationFrame(updateRecorder);
    };
    if (!reduceMotion) recorderFrame = requestAnimationFrame(updateRecorder);

    const buildRoot = document.querySelector<HTMLElement>("[data-build]");
    const typed = buildRoot?.querySelector<HTMLElement>("[data-typed]");
    const label = buildRoot?.querySelector<HTMLElement>("[data-compile-label]");
    const number = buildRoot?.querySelector<HTMLElement>("[data-progress-num]");
    const bar = buildRoot?.querySelector<HTMLElement>("[data-progress-bar]");
    const fullText = TERMINAL_LINES.join("\n");
    let buildFrame = 0;
    let buildStart = 0;
    let buildRunning = false;

    const drawBuild = (now: number) => {
      if (!buildRunning || !typed) return;
      if (!buildStart) buildStart = now;
      const cycle = 7600;
      const elapsed = (now - buildStart) % (cycle + 900);
      const progress = elapsed < cycle ? Math.min(100, elapsed / cycle * 100) : 100;
      typed.textContent = fullText.slice(0, Math.floor(fullText.length * Math.min(1, progress / 92)));
      if (number) number.textContent = `${Math.round(progress)}%`;
      if (bar) bar.style.width = `${progress}%`;
      if (label) label.textContent = progress < 18 ? "mapping..." : progress < 70 ? "building..." : progress < 94 ? "testing..." : progress < 100 ? "delivering..." : "ready";
      buildFrame = requestAnimationFrame(drawBuild);
    };

    const buildObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          buildRunning = false;
          cancelAnimationFrame(buildFrame);
          return;
        }
        if (reduceMotion) {
          if (typed) typed.textContent = fullText;
          if (number) number.textContent = "100%";
          if (bar) bar.style.width = "100%";
          if (label) label.textContent = "ready";
          return;
        }
        buildRunning = true;
        buildStart = 0;
        buildFrame = requestAnimationFrame(drawBuild);
      });
    }, { rootMargin: "-18% 0px -18% 0px" });
    if (buildRoot) buildObserver.observe(buildRoot);

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      buildObserver.disconnect();
      cancelAnimationFrame(recorderFrame);
      cancelAnimationFrame(buildFrame);
      document.body.classList.remove("themeDark");
    };
  }, []);

  return null;
}
