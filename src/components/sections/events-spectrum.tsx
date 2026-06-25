import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/anim/reveal";
import { SmartImage } from "@/components/ui/smart-image";
import { EVENTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function EventsSpectrum() {
  return (
    <section className="relative bg-ink-950/40 py-24 md:py-32">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The Full Spectrum of Events"
            title="Every gathering has a home here"
            goldWords={[4]}
            description="From global summits to intimate boardrooms, the Centre is configured for the complete range of business events."
            className="max-w-2xl"
          />
          <Link
            href="/events"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
          >
            All event formats
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <Reveal
          staggerChildren
          stagger={0.06}
          className="mt-14 grid auto-rows-[200px] grid-cols-2 gap-4 lg:auto-rows-[230px] lg:grid-cols-4"
        >
          {EVENTS.map((e, i) => (
            <Link
              key={e.slug}
              href="/events"
              className={cn(
                "group relative overflow-hidden rounded-2xl border border-white/10",
                i === 0 && "col-span-2 row-span-1 lg:row-span-2",
              )}
            >
              <SmartImage
                id={e.image}
                alt={e.title}
                sizes="(max-width:1024px) 50vw, 25vw"
                className="absolute inset-0 h-full w-full"
                imgClassName="transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/30 to-transparent transition-opacity duration-500 group-hover:from-ink-950/95" />

              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3 className="font-display text-lg font-medium text-ivory md:text-xl">
                  {e.title}
                </h3>
                <div className="mt-2 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                  <p className="text-sm leading-relaxed text-mist">{e.copy}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {e.formats.map((f) => (
                      <span
                        key={f}
                        className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[0.7rem] text-ivory/80"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-ink-950/40 text-ivory opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
