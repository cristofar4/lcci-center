"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { IMG } from "@/lib/images";
import { SmartImage } from "@/components/ui/smart-image";
import { Logo } from "./logo";

const PREVIEW: Record<string, string> = {
  "/": IMG.heroConference,
  "/about": IMG.atrium,
  "/venues": IMG.grandHall,
  "/events": IMG.keynote,
  "/exhibitions": IMG.expoHall,
  "/gallery": IMG.gala,
  "/services": IMG.av,
  "/contact": IMG.lobby,
};

const ease = [0.16, 1, 0.3, 1] as const;

export function FullscreenMenu({ onClose }: { onClose: () => void }) {
  const [hover, setHover] = useState<string>("/");

  useEffect(() => {
    const html = document.documentElement;
    html.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[95] bg-ink-950"
      initial={{ clipPath: "inset(0 0 100% 0)" }}
      animate={{ clipPath: "inset(0 0 0% 0)" }}
      exit={{ clipPath: "inset(0 0 100% 0)" }}
      transition={{ duration: 0.7, ease }}
      data-lenis-prevent
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:64px_64px] opacity-30" />
      <div className="container-wide flex h-20 items-center justify-between">
        <Logo />
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ivory transition-colors hover:border-gold-400/50 hover:bg-white/5"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="container-wide grid h-[calc(100%-5rem)] grid-cols-1 items-center gap-12 pb-12 lg:grid-cols-[1.4fr_1fr]">
        <nav>
          <ul className="flex flex-col">
            {NAV.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.7, ease }}
                onMouseEnter={() => setHover(item.href)}
                className="group border-b border-white/8"
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="flex items-baseline gap-5 py-3 md:py-4"
                >
                  <span className="font-sans text-xs text-gold-400/70">
                    0{i + 1}
                  </span>
                  <span className="font-display text-[2rem] font-light leading-none text-mist transition-colors duration-300 group-hover:text-ivory md:text-[3.25rem]">
                    {item.label}
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-mist"
          >
            <a href={`mailto:${SITE.email}`} className="link-underline">
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phoneHref}`} className="link-underline">
              {SITE.phone}
            </a>
          </motion.div>
        </nav>

        <motion.div
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.9, ease }}
          className="relative hidden h-[60vh] overflow-hidden rounded-2xl lg:block"
        >
          {NAV.map((item) => (
            <SmartImage
              key={item.href}
              id={PREVIEW[item.href]}
              alt={item.label}
              sizes="40vw"
              className={`absolute inset-0 h-full w-full transition-opacity duration-700 ${
                hover === item.href ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="eyebrow">Explore</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
