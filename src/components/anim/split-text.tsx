"use client";

import { useRef, type ElementType } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

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
 * Word by word masked rise reveal driven by GSAP ScrollTrigger.
 * Accessible: the full string is announced via aria-label, the visual
 * split is hidden from assistive tech.
 */
export function SplitText({
  text,
  className,
  as: Tag = "span",
  delay = 0,
  stagger = 0.08,
  start = "top 88%",
  goldWords = [],
}: SplitTextProps) {
  const ref = useRef<HTMLElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const el = ref.current;
      if (!el) return;
      const inners = el.querySelectorAll<HTMLElement>(".st-inner");
      gsap.set(inners, { yPercent: 120 });
      gsap.to(inners, {
        yPercent: 0,
        duration: 1.1,
        delay,
        ease: "expo.out",
        stagger,
        scrollTrigger: { trigger: el, start, once: true },
      });
    },
    { scope: ref },
  );

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
