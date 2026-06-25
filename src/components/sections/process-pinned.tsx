"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, useGSAP, prefersReducedMotion } from "@/lib/gsap";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROCESS } from "@/lib/data";

export function ProcessPinned() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    setReduced(prefersReducedMotion());
  }, []);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const getAmount = () => track.scrollWidth - window.innerWidth + 96;

      gsap.to(track, {
        x: () => -getAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getAmount()}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (barRef.current) {
              barRef.current.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section className="relative bg-ink-950/50 py-24 md:py-0">
      <div className="container-wide pt-0 md:pt-32">
        <SectionHeading
          eyebrow="Event Planning Process"
          title="From first brief to final ovation"
          goldWords={[5]}
          description="A proven, transparent process that turns ambition into a flawlessly delivered event."
          className="max-w-2xl"
        />
      </div>

      {reduced ? (
        <div className="container-wide mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p) => (
            <div key={p.no} className="rounded-2xl glass p-7">
              <span className="font-display text-4xl font-light text-gradient-gold">
                {p.no}
              </span>
              <h3 className="mt-4 font-display text-xl text-ivory">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist">{p.copy}</p>
            </div>
          ))}
        </div>
      ) : (
        <div ref={sectionRef} className="relative mt-12 h-screen overflow-hidden md:mt-0 md:flex md:items-center">
          <div
            ref={trackRef}
            className="flex items-stretch gap-6 px-6 will-change-transform md:gap-8 md:px-12"
          >
            {PROCESS.map((p, i) => (
              <div
                key={p.no}
                className="group relative flex w-[78vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-charcoal-800/40 p-8 md:w-[36vw] md:p-10 lg:w-[30vw]"
              >
                <div className="absolute -right-4 -top-8 font-display text-[12rem] font-light leading-none text-white/[0.03]">
                  {p.no}
                </div>
                <div className="relative">
                  <span className="inline-flex h-12 items-center rounded-full border border-gold-400/30 bg-gold-500/10 px-5 font-display text-lg text-gold-300">
                    Step {p.no}
                  </span>
                </div>
                <div className="relative">
                  <h3 className="font-display text-2xl font-light text-ivory md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-pretty leading-relaxed text-mist">
                    {p.copy}
                  </p>
                  <div className="mt-8 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate">
                    <span>{String(i + 1).padStart(2, "0")}</span>
                    <span className="h-px w-12 bg-white/15" />
                    <span>{String(PROCESS.length).padStart(2, "0")}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute inset-x-12 bottom-10 hidden h-px bg-white/10 md:block">
            <div
              ref={barRef}
              className="h-full origin-left scale-x-0 bg-gold-sheen"
            />
          </div>
        </div>
      )}
    </section>
  );
}
