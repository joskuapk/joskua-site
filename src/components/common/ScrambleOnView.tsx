"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";

type ScrambleOnViewProps = {
  text: string;
  className?: string;

  /** Total animation duration in ms */
  duration?: number;

  /** Interval between frames in ms */
  stepMs?: number;

  /** Characters used for scrambling */
  charset?: string;

  /** IntersectionObserver threshold (0..1). 0.5 = 50% visible */
  threshold?: number;

  /** rootMargin lets you trigger earlier/later, e.g. "0px 0px -20% 0px" */
  rootMargin?: string;

  /** Run only once (default) */
  once?: boolean;

  /** Called when scramble finishes */
  onDone?: () => void;
};

const DEFAULT_CHARSET = '-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!';

export default function ScrambleOnView({
  text,
  className,
  duration = 900,
  stepMs = 40,
  charset = DEFAULT_CHARSET,
  threshold = 0.5,
  rootMargin = "0px 0px -10% 0px",
  once = true,
  onDone,
}: ScrambleOnViewProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(text);
  const [started, setStarted] = useState(false);

  // SSR-safe reduced-motion check
  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    );
  }, []);

  // Keep display synced if text changes
  useEffect(() => {
    setDisplay(text);
    // If the text changes (e.g. locale), allow re-run when it appears again
    setStarted(false);
  }, [text]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion) {
      // If reduced motion, just show final text immediately
      setDisplay(text);
      return;
    }

    let cancelled = false;

    const runScramble = () => {
      if (started) return;
      setStarted(true);

      let frame = 0;
      const totalFrames = Math.max(1, Math.floor(duration / stepMs));

      const interval = window.setInterval(() => {
        if (cancelled) {
          window.clearInterval(interval);
          return;
        }

        frame += 1;
        const progress = frame / totalFrames;
        const revealCount = Math.floor(progress * text.length);

        const next = text
          .split("")
          .map((ch, i) => {
            // keep spaces/punct stable so it reads cleaner
            if (ch === " " || ch === "." || ch === "," || ch === "—") return ch;
            if (i < revealCount) return ch;
            return charset[Math.floor(Math.random() * charset.length)];
          })
          .join("");

        setDisplay(next);

        if (frame >= totalFrames) {
          window.clearInterval(interval);
          setDisplay(text);
          onDone?.();
        }
      }, stepMs);
    };

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;

        if (entry.isIntersecting) {
          runScramble();
          if (once) io.disconnect();
        } else if (!once) {
          // Allow it to trigger again if you want repeated animations
          setStarted(false);
          setDisplay(text);
        }
      },
      { threshold, rootMargin },
    );

    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
    };
  }, [
    text,
    duration,
    stepMs,
    charset,
    threshold,
    rootMargin,
    once,
    onDone,
    prefersReducedMotion,
    started,
  ]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
