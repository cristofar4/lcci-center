import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/anim/reveal";
import { SmartImage } from "@/components/ui/smart-image";
import { Button } from "@/components/ui/button";
import { EVENTS } from "@/lib/data";
import { IMG } from "@/lib/images";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Conferences, summits, exhibitions, product launches, corporate meetings, training programs, networking and executive events at LCCI Conference and Exhibition Centre.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Full Spectrum"
        title="Every format of business event, delivered with excellence"
        goldWords={[6]}
        description="Whatever the scale or style, the Centre is configured to bring your event to life."
        image={IMG.keynote}
        crumbs={[{ label: "Events", href: "/events" }]}
      />

      <section className="relative py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What We Host"
            title="Eight ways to convene"
            goldWords={[1]}
            className="max-w-2xl"
            description="From global summits to focused training, explore the formats we deliver every week."
          />

          <div className="mt-16 flex flex-col gap-20 md:gap-28">
            {EVENTS.map((e, i) => {
              const reversed = i % 2 === 1;
              return (
                <div
                  key={e.slug}
                  className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16"
                >
                  <Reveal
                    className={`relative ${reversed ? "lg:order-2" : ""}`}
                  >
                    <div className="relative aspect-[5/4] overflow-hidden rounded-3xl border border-white/10">
                      <SmartImage
                        id={e.image}
                        alt={e.title}
                        sizes="50vw"
                        className="h-full w-full"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-950/60 to-transparent" />
                      <span className="absolute left-6 top-6 font-display text-6xl font-light text-white/20">
                        0{i + 1}
                      </span>
                    </div>
                  </Reveal>

                  <div className={reversed ? "lg:order-1" : ""}>
                    <Reveal>
                      <span className="eyebrow">{e.title}</span>
                    </Reveal>
                    <h3 className="mt-5 font-display text-h3 font-light text-ivory md:text-4xl">
                      {e.title}
                    </h3>
                    <Reveal delay={0.1}>
                      <p className="mt-5 max-w-md text-pretty leading-relaxed text-mist">
                        {e.copy}
                      </p>
                    </Reveal>
                    <Reveal delay={0.15} className="mt-6 flex flex-wrap gap-2">
                      {e.formats.map((f) => (
                        <span
                          key={f}
                          className="rounded-full border border-white/12 bg-white/5 px-4 py-2 text-sm text-mist"
                        >
                          {f}
                        </span>
                      ))}
                    </Reveal>
                    <Reveal delay={0.2} className="mt-8">
                      <Link href="/book">
                        <Button variant="outline" size="sm">
                          Plan this event
                          <ArrowUpRight className="h-4 w-4" />
                        </Button>
                      </Link>
                    </Reveal>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA
        title="Tell us about the event you imagine"
        goldWords={[6]}
        eyebrow="Start Planning"
      />
    </>
  );
}
