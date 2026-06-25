import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/anim/reveal";
import { LOCATION_ADVANTAGES } from "@/lib/data";
import { SITE } from "@/lib/site";

export function Location() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Stylised map */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-ink-950">
            <svg viewBox="0 0 600 450" className="absolute inset-0 h-full w-full" aria-hidden>
              <defs>
                <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0V40" fill="none" stroke="#1b202b" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="600" height="450" fill="url(#map-grid)" />
              <path d="M0 250 Q150 200 300 250 T600 230" fill="none" stroke="#2a3140" strokeWidth="8" />
              <path d="M300 0 L300 450" stroke="#2a3140" strokeWidth="10" />
              <path d="M120 0 L160 450" stroke="#222834" strokeWidth="6" />
              <path d="M480 0 L440 450" stroke="#222834" strokeWidth="6" />
              <path d="M0 120 L600 90" stroke="#222834" strokeWidth="5" />
              <path d="M0 250 Q150 200 300 250 T600 230" fill="none" stroke="#d6b26b" strokeWidth="2" strokeDasharray="2 10" opacity="0.5" />
            </svg>

            {/* Marker */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-pulse-ring rounded-full border border-gold-400/60" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gold-sheen text-ink-950 shadow-gold-soft">
                <MapPin className="h-5 w-5" />
              </span>
            </div>

            <div className="absolute bottom-5 left-5 rounded-xl glass px-4 py-3">
              <div className="text-sm font-medium text-ivory">{SITE.shortName}</div>
              <div className="text-xs text-mist">
                {SITE.address.line1}, {SITE.address.line2}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="Location Advantages"
            title="At the centre of it all in Lagos"
            goldWords={[2]}
            description="Positioned in the commercial heart of Lagos with effortless access from the airport, premium hotels and the city's business districts."
          />

          <Reveal
            staggerChildren
            stagger={0.08}
            className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            {LOCATION_ADVANTAGES.map((a) => (
              <div key={a.label} className="bg-ink-900/60 p-6">
                <div className="font-display text-3xl font-light text-gradient-gold">
                  {a.stat}
                </div>
                <div className="mt-2 text-sm leading-snug text-mist">{a.label}</div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.15} className="mt-8">
            <Link href="/contact">
              <Button variant="outline">
                <Navigation className="h-4 w-4" />
                Get directions
              </Button>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
