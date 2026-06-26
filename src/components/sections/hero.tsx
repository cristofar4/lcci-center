"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { SplitText } from "@/components/anim/split-text";
import { ParticleFieldLazy } from "@/components/three/particle-field-lazy";
import { IMG, HERO_VIDEOS } from "@/lib/images";
import { EASE } from "@/lib/utils";

const HIGHLIGHTS = [
  { id: IMG.grandHall, name: "The Grand Hall", meta: "6,000 capacity" },
  { id: IMG.expoHall, name: "Exhibition Pavilion", meta: "3,600 sqm floor" },
  { id: IMG.auditorium, name: "Summit Auditorium", meta: "Broadcast ready" },
  { id: IMG.gala, name: "The Ballroom", meta: "Gala and banquets" },
];

const HERO_STATS = [
  { v: "6,000", l: "Seated capacity" },
  { v: "12", l: "Versatile venues" },
  { v: "1,800+", l: "Events delivered" },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedRef = useRef(false);
  const resumeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto advance cinematic background, paused while the visitor browses cards
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const t = setInterval(() => {
      if (!pausedRef.current) setActive((i) => (i + 1) % HIGHLIGHTS.length);
    }, 5200);
    return () => {
      clearInterval(t);
      if (resumeRef.current) clearTimeout(resumeRef.current);
    };
  }, []);

  // The background follows the highlight the visitor selects, then gently resumes
  const selectHighlight = (i: number) => {
    pausedRef.current = true;
    setActive(i);
    if (resumeRef.current) clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => {
      pausedRef.current = false;
    }, 9000);
  };

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE.expo } },
  };

  return (
    <section className="relative flex min-h-[100svh] w-full flex-col overflow-hidden">
      {/* Background image slideshow (always works, real photography) */}
      {HIGHLIGHTS.map((h, i) => (
        <div
          key={h.id}
          className={`absolute inset-0 transition-opacity [transition-duration:1600ms] ease-expo ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        >
          <SmartImage
            id={h.id}
            alt={h.name}
            priority={i === 0}
            sizes="100vw"
            className="h-full w-full animate-kenburns will-change-transform motion-reduce:animate-none"
          />
        </div>
      ))}

      {/* Optional video layer, fades in only if it can play */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoReady ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        poster=""
        onPlaying={() => setVideoReady(true)}
      >
        {HERO_VIDEOS.map((src) => (
          <source key={src} src={src} type="video/mp4" />
        ))}
      </video>

      {/* Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/92 via-ink-950/55 to-ink-950/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/10 to-ink-950/60" />
      <ParticleFieldLazy className="absolute inset-0" count={900} />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:80px_80px] opacity-20" />

      {/* Content */}
      <div className="container-wide relative z-10 flex flex-1 flex-col pb-12 pt-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-full max-w-4xl flex-1 flex-col justify-center"
        >
          <motion.div variants={item}>
            <span className="eyebrow text-gold-300">
              Conference and Exhibition Centre · Lagos, Nigeria
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-display font-light leading-[0.95] text-balance text-ivory"
          >
            <span className="block">
              <SplitText text="Where Industry" delay={0.3} />
            </span>
            <span className="block">
              <SplitText text="Convenes in Lagos" delay={0.5} goldWords={[0]} />
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-mist"
          >
            The premier destination for conferences, exhibitions, trade fairs and
            business summits. World class halls, technology forward spaces and a
            team obsessed with flawless delivery.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="/book">
              <Button size="lg">
                Book a Venue
                <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
            <Link href="/venues">
              <Button size="lg" variant="outline">
                <Play className="h-4 w-4" />
                Explore the Venues
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom bar: stats + interactive venue highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9, ease: EASE.expo }}
          className="mt-10 w-full shrink-0"
        >
          <div className="flex flex-col gap-6 rounded-2xl glass p-5 md:flex-row md:items-center md:justify-between md:p-6">
              <div className="flex divide-x divide-white/10">
                {HERO_STATS.map((s) => (
                  <div key={s.l} className="px-5 first:pl-0">
                    <div className="font-display text-2xl font-light text-ivory md:text-3xl">
                      {s.v}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.18em] text-mist">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 overflow-x-auto">
                {HIGHLIGHTS.map((h, i) => (
                  <button
                    key={h.id}
                    onMouseEnter={() => selectHighlight(i)}
                    onFocus={() => selectHighlight(i)}
                    onClick={() => selectHighlight(i)}
                    className={`group relative flex shrink-0 items-center gap-3 rounded-xl border p-2 pr-4 text-left transition-all duration-300 ${
                      i === active
                        ? "border-gold-400/50 bg-white/5"
                        : "border-white/10 hover:border-white/20"
                    }`}
                    aria-label={`Show ${h.name}`}
                  >
                    <span className="relative h-11 w-14 overflow-hidden rounded-lg">
                      <SmartImage id={h.id} alt={h.name} sizes="56px" className="h-full w-full" />
                    </span>
                    <span className="hidden sm:block">
                      <span className="block text-sm text-ivory">{h.name}</span>
                      <span className="block text-xs text-mist">{h.meta}</span>
                    </span>
                  </button>
                ))}
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
