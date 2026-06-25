"use client";

import { Marquee } from "@/components/anim/marquee";
import { PARTNERS } from "@/lib/data";

export function Partners() {
  return (
    <section className="relative border-y border-white/8 bg-ink-950/60 py-12">
      <div className="container-wide mb-8 flex items-center justify-center">
        <p className="text-center text-xs uppercase tracking-[0.28em] text-slate">
          Trusted by Nigeria&apos;s leading organisations and global brands
        </p>
      </div>
      <Marquee
        items={PARTNERS}
        renderItem={(name) => (
          <span className="font-display text-xl font-light tracking-tight text-mist/70 transition-colors hover:text-ivory md:text-2xl">
            {name}
          </span>
        )}
      />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ink-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ink-950 to-transparent" />
    </section>
  );
}
