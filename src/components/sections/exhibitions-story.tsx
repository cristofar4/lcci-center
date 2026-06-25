import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SmartImage } from "@/components/ui/smart-image";
import { SplitText } from "@/components/anim/split-text";
import { Reveal } from "@/components/anim/reveal";
import { EXHIBITIONS } from "@/lib/data";

export function ExhibitionsStory() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-wide grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <span className="eyebrow">Exhibition Success Stories</span>
          </Reveal>
          <h2 className="mt-5 font-display text-h2 font-light text-balance text-ivory">
            <SplitText text="Where the continent comes to trade" goldWords={[5]} />
          </h2>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-mist">
              Our exhibition floors have hosted West Africa&apos;s most important
              trade fairs and expos, connecting hundreds of thousands of buyers
              with the brands shaping the region&apos;s economy.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-8 flex flex-wrap gap-4">
            <Link href="/exhibitions">
              <Button>
                Explore exhibitions
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/book">
              <Button variant="outline">Reserve floor space</Button>
            </Link>
          </Reveal>
        </div>

        <Reveal staggerChildren stagger={0.1} className="flex flex-col gap-5">
          {EXHIBITIONS.map((ex) => (
            <article
              key={ex.title}
              className="group grid grid-cols-1 overflow-hidden rounded-2xl border border-white/10 bg-charcoal-800/40 transition-colors duration-500 hover:border-gold-400/30 sm:grid-cols-[180px_1fr]"
            >
              <div className="relative h-44 overflow-hidden sm:h-full">
                <SmartImage
                  id={ex.image}
                  alt={ex.title}
                  sizes="200px"
                  className="h-full w-full"
                  imgClassName="transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-between gap-4 p-6">
                <div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-[0.16em] text-gold-300">
                    <span>{ex.category}</span>
                    <span className="h-1 w-1 rounded-full bg-slate" />
                    <span className="text-slate">{ex.year}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-medium text-ivory">
                    {ex.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{ex.copy}</p>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-display text-3xl font-light text-gradient-gold">
                      {ex.stat}
                    </span>
                    <span className="ml-2 text-xs uppercase tracking-[0.16em] text-mist">
                      {ex.statLabel}
                    </span>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold-400" />
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
