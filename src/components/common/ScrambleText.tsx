"use client";

import React, { useEffect, useMemo, useState } from "react";

type ScrambleTextProps = {
  text: string;
  className?: string;

  /** Total animation duration in ms */
  duration?: number;

  /** Interval between frames in ms (lower = smoother) */
  stepMs?: number;

  /** Characters used for scrambling */
  charset?: string;

  /**
   * Change this value to re-run the scramble (e.g. language switch, route, button)
   * Example: triggerKey={`${lang}-${text}`}
   */
  triggerKey?: string | number;

  /** Called when the animation finishes */
  onDone?: () => void;
};

const DEFAULT_CHARSET = '-+*/|}{[]~\\":;?/.><=+-_)(*&^%$#@!';

export default function ScrambleText({
  text,
  className,
  duration = 900,
  stepMs = 40,
  charset = DEFAULT_CHARSET,
  triggerKey,
  onDone,
}: ScrambleTextProps) {
  // SSR-safe: start with the real text so server & client match.
  const [display, setDisplay] = useState(text);

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return (
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
    );
  }, []);

  useEffect(() => {
    // Keep in sync if text changes.
    setDisplay(text);
  }, [text]);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let frame = 0;
    const totalFrames = Math.max(1, Math.floor(duration / stepMs));

    // Start scramble on client after mount (still SSR-safe because initial HTML was final text)
    const interval = window.setInterval(() => {
      frame += 1;

      const progress = frame / totalFrames; // 0..1
      const revealCount = Math.floor(progress * text.length);

      const next = text
        .split("")
        .map((ch, i) => {
          // preserve spaces/punctuation early so it doesn't look messy
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

    return () => window.clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, duration, stepMs, charset, triggerKey, prefersReducedMotion]);

  return <span className={className}>{display}</span>;
}
