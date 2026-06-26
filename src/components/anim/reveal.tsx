"use client";

import { useEffect, useLayoutEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  y?: number;
  delay?: number;
  duration?: number;
  stagger?: number;
  /** When true, direct children animate in sequence. */
  staggerChildren?: boolean;
  start?: string;
  once?: boolean;
};

/**
 * Reveal driven by IntersectionObserver rather than global ScrollTrigger.
 * This fires reliably on mount after a soft navigation, so content never
 * gets stuck hidden when moving between pages.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  y = 40,
  delay = 0,
  duration = 1,
  stagger = 0.09,
  staggerChildren = false,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useIso(() => {
    const el = ref.current;
    if (!el) return;
    const targets = staggerChildren ? Array.from(el.children) : [el];

    if (prefersReducedMotion()) {
      gsap.set(targets, { autoAlpha: 1, y: 0 });
      return;
    }

    gsap.set(targets, { autoAlpha: 0, y });
    let played = false;
    const play = () => {
      if (played) return;
      played = true;
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        ease: "expo.out",
        stagger: staggerChildren ? stagger : 0,
        overwrite: "auto",
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          play();
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    io.observe(el);

    // Safety net: if already on screen at mount, reveal even if IO is late.
    const t = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) play();
    }, 500);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
      gsap.killTweensOf(targets);
    };
  }, [staggerChildren, y, delay, duration, stagger]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;
  return (
    <Component ref={ref} className={cn(className)}>
      {children}
    </Component>
  );
}
