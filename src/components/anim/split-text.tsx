"use client";

import { useEffect, useLayoutEffect, useRef, type ElementType } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type SplitTextProps = {
  text: string;
  className?: string;
  as?: ElementType;
  delay?: number;
  stagger?: number;
  start?: string;
  /** highlight specific words by index with the gold gradient */
  goldWords?: number[];
};

/**
 * Word by word masked rise reveal, triggered by IntersectionObserver so it
 * always fires on mount, including after a client side navigation.
 * Accessible: the full string is announced via aria-label.
 */
export function SplitText({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  stagger = 0.08,
  goldWords = [],
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useIso(() => {
    const el = ref.current;
    if (!el) return;
    const inners = el.querySelectorAll<HTMLElement>(".st-inner");

    if (prefersReducedMotion()) {
      gsap.set(inners, { yPercent: 0 });
      return;
    }

    gsap.set(inners, { yPercent: 120 });
    let played = false;
    const play = () => {
      if (played) return;
      played = true;
      gsap.to(inners, {
        yPercent: 0,
        duration: 1.1,
        delay,
        ease: "expo.out",
        stagger,
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
      { rootMargin: "0px 0px -5% 0px", threshold: 0.01 },
    );
    io.observe(el);

    const t = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) play();
    }, 500);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
      gsap.killTweensOf(inners);
    };
  }, [text, delay, stagger]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;
  return (
    <Component ref={ref} className={cn("inline", className)} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={i}
          aria-hidden
          className="inline-block overflow-hidden align-bottom"
        >
          <span
            className={cn(
              "st-inner inline-block will-change-transform",
              goldWords.includes(i) && "text-gradient-gold italic",
            )}
          >
            {word}
          </span>
          {i < words.length - 1 && <span className="inline-block">&nbsp;</span>}
        </span>
      ))}
    </Component>
  );
}
