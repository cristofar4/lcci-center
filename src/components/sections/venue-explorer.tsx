"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Maximize2, Users, Grid3x3, LayoutPanelTop } from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import { FloorPlan } from "@/components/ui/floor-plan";
import { Button } from "@/components/ui/button";
import { formatNumber, cn, EASE } from "@/lib/utils";
import type { Venue } from "@/lib/data";

export function VenueExplorer({ venues }: { venues: Venue[] }) {
  const [active, setActive] = useState(0);
  const [showPlan, setShowPlan] = useState(false);
  const v = venues[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:gap-12">
      {/* Index */}
      <div className="flex flex-col">
        <ul className="flex flex-col">
          {venues.map((venue, i) => {
            const isActive = i === active;
            return (
              <li key={venue.slug}>
                <button
                  onMouseEnter={() => {
                    setActive(i);
                    setShowPlan(false);
                  }}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group w-full border-b border-white/10 py-5 text-left"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-4">
                      <span
                        className={cn(
                          "font-sans text-xs transition-colors",
                          isActive ? "text-gold-400" : "text-slate",
                        )}
                      >
                        0{i + 1}
                      </span>
                      <span
                        className={cn(
                          "font-display text-2xl font-light transition-colors duration-300 md:text-[1.7rem]",
                          isActive ? "text-ivory" : "text-mist group-hover:text-ivory",
                        )}
                      >
                        {venue.name}
                      </span>
                    </div>
                    <ArrowUpRight
                      className={cn(
                        "h-5 w-5 shrink-0 transition-all duration-300",
                        isActive
                          ? "translate-x-0 text-gold-400 opacity-100"
                          : "-translate-x-2 text-slate opacity-0 group-hover:opacity-60",
                      )}
                    />
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE.expo }}
                        className="overflow-hidden"
                      >
                        <p className="pt-3 text-sm leading-relaxed text-mist">
                          {venue.blurb}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Stage */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
          {venues.map((venue, i) => (
            <div
              key={venue.slug}
              className={cn(
                "absolute inset-0 transition-opacity duration-700",
                i === active && !showPlan ? "opacity-100" : "opacity-0",
              )}
            >
              <SmartImage id={venue.image} alt={venue.name} sizes="50vw" className="h-full w-full" />
            </div>
          ))}

          <div
            className={cn(
              "absolute inset-0 flex items-center justify-center bg-ink-950 p-8 transition-opacity duration-500",
              showPlan ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            <FloorPlan seed={v.slug} className="h-full w-full" />
          </div>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent" />

          {/* Plan toggle */}
          <button
            onClick={() => setShowPlan((s) => !s)}
            className="absolute right-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border border-white/15 bg-ink-950/60 px-4 py-2 text-xs uppercase tracking-[0.16em] text-ivory backdrop-blur transition-colors hover:border-gold-400/50"
          >
            {showPlan ? <LayoutPanelTop className="h-3.5 w-3.5" /> : <Grid3x3 className="h-3.5 w-3.5" />}
            {showPlan ? "View Space" : "Floor Plan"}
          </button>

          {/* Meta overlay */}
          <div className="absolute inset-x-0 bottom-0 p-6">
            <span className="text-xs uppercase tracking-[0.2em] text-gold-300">
              {v.kind}
            </span>
            <h3 className="mt-1 font-display text-2xl font-light text-ivory md:text-3xl">
              {v.name}
            </h3>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-mist">
              <span className="inline-flex items-center gap-2">
                <Users className="h-4 w-4 text-gold-400" />
                {formatNumber(v.seated)} seated
              </span>
              {v.banquet > 0 && (
                <span className="inline-flex items-center gap-2">
                  <Users className="h-4 w-4 text-gold-400" />
                  {formatNumber(v.banquet)} banquet
                </span>
              )}
              <span className="inline-flex items-center gap-2">
                <Maximize2 className="h-4 w-4 text-gold-400" />
                {v.area}
              </span>
            </div>
          </div>
        </div>

        {/* Features + CTA */}
        <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {v.features.map((f) => (
              <span
                key={f}
                className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-mist"
              >
                {f}
              </span>
            ))}
          </div>
          <Link href="/book" className="shrink-0">
            <Button size="sm" variant="outline">
              Reserve this space
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
