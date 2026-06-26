"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import { cn, formatNumber } from "@/lib/utils";

const useIso = typeof window !== "undefined" ? useLayoutEffect : useEffect;

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  duration?: number;
};

export function Counter({
  value,
  prefix = "",
  suffix = "",
  className,
  duration = 2,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useIso(() => {
    const el = ref.current;
    if (!el) return;
    const render = (n: number) => {
      el.textContent = `${prefix}${formatNumber(Math.round(n))}${suffix}`;
    };

    if (prefersReducedMotion()) {
      render(value);
      return;
    }

    render(0);
    let played = false;
    const obj = { n: 0 };
    const play = () => {
      if (played) return;
      played = true;
      gsap.to(obj, {
        n: value,
        duration,
        ease: "power2.out",
        onUpdate: () => render(obj.n),
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          play();
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);

    const t = window.setTimeout(() => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) play();
    }, 500);

    return () => {
      io.disconnect();
      window.clearTimeout(t);
      gsap.killTweensOf(obj);
    };
  }, [value, prefix, suffix, duration]);

  return (
    <span ref={ref} className={cn(className)}>
      {prefix}0{suffix}
    </span>
  );
}
