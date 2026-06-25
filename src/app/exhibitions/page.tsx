import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { ExhibitionsStory } from "@/components/sections/exhibitions-story";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/anim/reveal";
import { IMG } from "@/lib/images";
import { Store, Boxes, Building2, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Exhibitions",
  description:
    "Host trade fairs, consumer expos and industry pavilions on West Africa's premier exhibition floors at LCCI Conference and Exhibition Centre.",
};

const FORMATS = [
  { icon: Store, title: "Trade Fairs", copy: "Large scale international fairs with dense stand grids and heavy logistics." },
  { icon: Boxes, title: "Consumer Expos", copy: "High footfall public expos with activations, demos and experiential zones." },
  { icon: Building2, title: "Industry Pavilions", copy: "Curated sector pavilions that group exhibitors by industry and theme." },
  { icon: Handshake, title: "B2B Matchmaking", copy: "Structured meeting zones that connect buyers and suppliers with intent." },
];

const CALENDAR = [
  { period: "First Quarter", name: "Manufacturing and Industry Summit", category: "Industrial" },
  { period: "Second Quarter", name: "Nigeria Tech and Innovation Expo", category: "Technology" },
  { period: "Third Quarter", name: "Agriculture and Agribusiness Fair", category: "Agribusiness" },
  { period: "Fourth Quarter", name: "Lagos International Trade Fair", category: "Flagship" },
];

export default function ExhibitionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Exhibitions and Trade Fairs"
        title="Where the continent comes to trade"
        goldWords={[5]}
        description="Flexible, high capacity exhibition floors built for the most important fairs and expos in West Africa."
        image={IMG.expoHall}
        crumbs={[{ label: "Exhibitions", href: "/exhibitions" }]}
      />

      {/* Formats */}
      <section className="relative py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Exhibition Formats"
            title="Configured for every kind of showcase"
            goldWords={[2]}
            className="max-w-2xl"
          />
          <Reveal staggerChildren stagger={0.08} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FORMATS.map((f) => (
              <div key={f.title} className="group rounded-2xl glass p-7 transition-transform duration-500 hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-500/10 text-gold-300">
                  <f.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-xl text-ivory">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{f.copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Success stories */}
      <ExhibitionsStory />

      {/* Calendar */}
      <section className="relative bg-ink-950/40 py-24 md:py-32">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Trade Fair Calendar"
            title="A year of flagship gatherings"
            goldWords={[2]}
            className="max-w-2xl"
            description="A snapshot of the recurring fairs that fill our halls through the year."
          />
          <Reveal staggerChildren stagger={0.08} className="mt-12 overflow-hidden rounded-2xl border border-white/10">
            {CALENDAR.map((c) => (
              <div
                key={c.name}
                className="group flex flex-col gap-2 border-b border-white/8 px-6 py-6 transition-colors last:border-0 hover:bg-white/[0.03] md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-baseline gap-5">
                  <span className="w-32 text-xs uppercase tracking-[0.16em] text-gold-300">
                    {c.period}
                  </span>
                  <span className="font-display text-xl text-ivory md:text-2xl">
                    {c.name}
                  </span>
                </div>
                <span className="rounded-full border border-white/12 bg-white/5 px-4 py-1.5 text-xs text-mist">
                  {c.category}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <CTA
        title="Secure your stand at the next fair"
        goldWords={[5]}
        eyebrow="Exhibit With Us"
        description="Reserve exhibition space and let our team handle logistics, power, connectivity and stand build."
      />
    </>
  );
}
