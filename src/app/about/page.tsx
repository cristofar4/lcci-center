import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { Stats } from "@/components/sections/stats";
import { SectionHeading } from "@/components/ui/section-heading";
import { SplitText } from "@/components/anim/split-text";
import { Reveal } from "@/components/anim/reveal";
import { SmartImage } from "@/components/ui/smart-image";
import { Parallax } from "@/components/anim/parallax";
import { IMG } from "@/lib/images";
import { MILESTONES } from "@/lib/data";
import { Award, Globe2, Lightbulb, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "The Centre",
  description:
    "Discover the story, vision and values behind LCCI Conference and Exhibition Centre, the premier home of business events in Lagos, Nigeria.",
};

const VALUES = [
  { icon: Globe2, title: "Scale", copy: "The most flexible event canvas in the region, ready for forty guests or six thousand." },
  { icon: Award, title: "Excellence", copy: "Flawless execution and white glove service in every detail, every time." },
  { icon: Lightbulb, title: "Innovation", copy: "Technology forward spaces that keep our clients ahead of the curve." },
  { icon: Users, title: "Connection", copy: "Where industries, ideas and people converge to shape the future." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the Centre"
        title="The home of Nigeria's biggest ideas"
        goldWords={[5]}
        description="For decades we have given conferences, exhibitions and landmark gatherings a stage worthy of their ambition."
        image={IMG.atrium}
        crumbs={[{ label: "The Centre", href: "/about" }]}
      />

      {/* Vision */}
      <section className="relative py-24 md:py-32">
        <div className="container-wide grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-20">
          <div>
            <Reveal>
              <span className="eyebrow">Our Vision</span>
            </Reveal>
            <p className="mt-6 font-display text-3xl font-light leading-snug text-balance text-ivory md:text-[2.75rem]">
              <SplitText
                text="We give the boldest ideas in business a stage worthy of them."
                goldWords={[9, 10, 11]}
              />
            </p>
            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-pretty leading-relaxed text-mist">
                <p>
                  Born from a heritage of commerce and industry, the Centre was
                  built on a simple belief. When the right people gather in the
                  right space, progress follows.
                </p>
                <p>
                  Today we are the definitive destination for conferences,
                  exhibitions and corporate events in West Africa. Our halls have
                  hosted heads of state, global brands and the entrepreneurs
                  building the continent&apos;s future.
                </p>
              </div>
            </Reveal>
          </div>

          <Parallax speed={8}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
              <SmartImage id={IMG.grandHall} alt="Inside the Centre" sizes="45vw" className="h-full w-full" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 to-transparent p-6">
                <span className="font-display text-lg text-ivory">The Grand Hall</span>
              </div>
            </div>
          </Parallax>
        </div>
      </section>

      {/* Values */}
      <section className="relative bg-ink-950/40 py-24 md:py-32">
        <div className="container-wide">
          <SectionHeading
            align="center"
            eyebrow="What We Stand For"
            title="Four values, one promise"
            goldWords={[2]}
            description="The principles that guide every event we deliver."
          />
          <Reveal staggerChildren stagger={0.08} className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div key={v.title} className="group rounded-2xl glass p-7 text-center transition-transform duration-500 hover:-translate-y-1">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-400/30 bg-gold-500/10 text-gold-300">
                  <v.icon className="h-6 w-6" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-display text-xl text-ivory">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist">{v.copy}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 md:py-32">
        <div className="container-wide">
          <SectionHeading
            eyebrow="Our Journey"
            title="A legacy of bringing people together"
            goldWords={[2]}
            className="max-w-2xl"
          />
          <div className="relative mt-16">
            <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-gold-500/60 via-white/10 to-transparent md:left-1/2" />
            <Reveal staggerChildren stagger={0.12} className="flex flex-col gap-12">
              {MILESTONES.map((m, i) => (
                <div
                  key={m.year}
                  className={`relative pl-10 md:w-1/2 md:pl-0 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
                  }`}
                >
                  <span
                    className={`absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-gold-400 bg-ink-950 md:left-auto ${
                      i % 2 === 0 ? "md:-right-2" : "md:-left-2"
                    }`}
                  />
                  <span className="font-display text-3xl font-light text-gradient-gold">
                    {m.year}
                  </span>
                  <h3 className="mt-2 font-display text-xl text-ivory">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist md:max-w-sm md:[&]:inline-block">
                    {m.copy}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <Stats />
      <CTA
        title="Become part of our next chapter"
        goldWords={[4]}
        eyebrow="Work With Us"
        description="Join the organisations who trust the Centre to deliver their most important events."
      />
    </>
  );
}
