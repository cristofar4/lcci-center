"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import { TESTIMONIALS } from "@/lib/data";
import { EASE, cn } from "@/lib/utils";

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setI((p) => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/[0.05] blur-[160px]" />
      <div className="container-wide">
        <div className="mx-auto max-w-4xl text-center">
          <span className="eyebrow justify-center">Client Testimonials</span>

          <Quote className="mx-auto mt-8 h-10 w-10 text-gold-400/50" />

          <div className="mt-6 flex items-center justify-center gap-1.5" aria-label="Five star rating">
            {Array.from({ length: 5 }).map((_, s) => (
              <Star key={s} className="h-5 w-5 fill-gold-400 text-gold-400" />
            ))}
          </div>

          <div className="relative mt-6 min-h-[200px] md:min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: EASE.expo }}
                className="font-display text-2xl font-light leading-snug text-balance text-ivory md:text-4xl"
              >
                &ldquo;{t.quote}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-4">
            {TESTIMONIALS.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => setI(idx)}
                aria-label={`Show testimonial from ${item.name}`}
                className={cn(
                  "relative h-12 w-12 overflow-hidden rounded-full ring-1 transition-all duration-300",
                  idx === i
                    ? "scale-110 ring-2 ring-gold-400"
                    : "opacity-50 ring-white/15 hover:opacity-100",
                )}
              >
                <SmartImage id={item.image} alt={item.name} sizes="48px" className="h-full w-full" />
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`name-${i}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-5"
            >
              <div className="font-medium text-ivory">{t.name}</div>
              <div className="text-sm text-mist">{t.role}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
