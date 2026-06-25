"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

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

export function Reveal({
  children,
  className,
  as: Tag = "div",
  y = 40,
  delay = 0,
  duration = 1,
  stagger = 0.09,
  staggerChildren = false,
  start = "top 85%",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const el = ref.current;
      if (!el) return;
      const targets = staggerChildren ? Array.from(el.children) : [el];

      gsap.set(targets, { autoAlpha: 0, y });
      gsap.to(targets, {
        autoAlpha: 1,
        y: 0,
        duration,
        delay,
        ease: "expo.out",
        stagger: staggerChildren ? stagger : 0,
        scrollTrigger: { trigger: el, start, once },
      });
    },
    { scope: ref },
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component = Tag as any;
  return (
    <Component ref={ref} className={cn(className)}>
      {children}
    </Component>
  );
}
