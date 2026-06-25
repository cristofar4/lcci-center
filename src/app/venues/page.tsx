import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { VenueExplorer } from "@/components/sections/venue-explorer";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/anim/reveal";
import { Button } from "@/components/ui/button";
import { VenueSceneLazy } from "@/components/three/venue-scene-lazy";
import { VENUES } from "@/lib/data";
import { IMG } from "@/lib/images";
import { formatNumber } from "@/lib/utils";
import { Move3d, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Venues",
  description:
    "Explore the halls and event spaces at LCCI Conference and Exhibition Centre, from the 6,000 seat Grand Hall to executive boardrooms, with capacities, floor plans and amenities.",
};

export default function VenuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Venues and Spaces"
        title="Spaces engineered for every kind of gathering"
        goldWords={[2]}
        description="Twelve versatile venues under one roof, each crafted for a different scale and style of event."
        image={IMG.grandHall}
        crumbs={[{ label: "Venues", href: "/venues" }]}
      />

      {/* Explorer */}
      <section className="relative py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Explore the Spaces"
            title="Find the venue for your vision"
            goldWords={[4]}
            className="max-w-2xl"
            description="Hover any space to preview it and toggle through to the floor plan."
          />
          <div className="mt-14">
            <VenueExplorer venues={VENUES} />
          </div>
        </div>
      </section>

      {/* 3D visualization */}
      <section className="relative overflow-hidden bg-ink-950/50 py-24 md:py-32">
        <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal>
              <span className="eyebrow">Virtual Exploration</span>
            </Reveal>
            <h2 className="mt-5 font-display text-h2 font-light text-balance text-ivory">
              See the Centre in three dimensions
            </h2>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-pretty leading-relaxed text-mist">
                Drag to orbit our architectural massing and understand how the
                halls, pavilion, auditorium and tower connect into one seamless
                campus for your event.
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-8 flex items-center gap-3 text-sm text-gold-300">
              <Move3d className="h-5 w-5" />
              Drag to rotate the model
            </Reveal>
            <Reveal delay={0.3} className="mt-8">
              <Link href="/book">
                <Button variant="outline">
                  Plan a site visit
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-ink-radial">
              <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:48px_48px] opacity-20" />
              <VenueSceneLazy className="absolute inset-0" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="relative py-24 md:py-32">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Compare at a Glance"
            title="Capacities and configurations"
            goldWords={[0]}
            className="max-w-2xl"
          />
          <Reveal className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            <div className="hidden grid-cols-[1.5fr_1fr_1fr_1fr] bg-white/5 px-6 py-4 text-xs uppercase tracking-[0.16em] text-mist md:grid">
              <span>Venue</span>
              <span className="text-right">Seated</span>
              <span className="text-right">Banquet</span>
              <span className="text-right">Floor area</span>
            </div>
            <div className="divide-y divide-white/8">
              {VENUES.map((v) => (
                <div
                  key={v.slug}
                  className="grid grid-cols-2 gap-y-2 px-6 py-5 transition-colors hover:bg-white/[0.03] md:grid-cols-[1.5fr_1fr_1fr_1fr] md:items-center"
                >
                  <div className="col-span-2 md:col-span-1">
                    <div className="font-display text-lg text-ivory">{v.name}</div>
                    <div className="text-xs text-slate">{v.kind}</div>
                  </div>
                  <div className="md:text-right">
                    <span className="text-xs text-slate md:hidden">Seated: </span>
                    <span className="text-mist">{formatNumber(v.seated)}</span>
                  </div>
                  <div className="md:text-right">
                    <span className="text-xs text-slate md:hidden">Banquet: </span>
                    <span className="text-mist">{v.banquet > 0 ? formatNumber(v.banquet) : "·"}</span>
                  </div>
                  <div className="md:text-right">
                    <span className="text-xs text-slate md:hidden">Area: </span>
                    <span className="text-mist">{v.area}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title="Reserve the perfect space for your event"
        goldWords={[2]}
        eyebrow="Book a Venue"
      />
    </>
  );
}
