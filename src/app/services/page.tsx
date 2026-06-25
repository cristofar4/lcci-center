import type { Metadata } from "next";
import {
  ClipboardList,
  Volume2,
  Presentation,
  LayoutGrid,
  UtensilsCrossed,
  ShieldCheck,
  Check,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { ProcessPinned } from "@/components/sections/process-pinned";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/anim/reveal";
import { SERVICES } from "@/lib/data";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Event management, audio visual, conference facilities, exhibition support, hospitality and security services at LCCI Conference and Exhibition Centre.",
};

const ICONS: Record<string, LucideIcon> = {
  ClipboardList,
  Volume2,
  Presentation,
  LayoutGrid,
  UtensilsCrossed,
  ShieldCheck,
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services and Support"
        title="One partner for every part of your event"
        goldWords={[2]}
        description="From first plan to final ovation, our in house teams deliver everything under one roof and one point of accountability."
        image={IMG.av}
        crumbs={[{ label: "Services", href: "/services" }]}
      />

      <section className="relative py-20 md:py-28">
        <div className="container-wide">
          <SectionHeading
            eyebrow="What We Offer"
            title="Turnkey solutions, delivered in house"
            goldWords={[1]}
            className="max-w-2xl"
            description="Six pillars of service that remove complexity and let you focus on your guests."
          />

          <Reveal staggerChildren stagger={0.08} className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => {
              const Icon = ICONS[s.icon] ?? ClipboardList;
              return (
                <div
                  key={s.title}
                  className="group flex flex-col rounded-2xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/30"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-500/10 text-gold-300">
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-ivory">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{s.copy}</p>
                  <ul className="mt-5 flex flex-col gap-2.5 border-t border-white/8 pt-5">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-mist">
                        <Check className="h-4 w-4 shrink-0 text-gold-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <ProcessPinned />

      <CTA
        title="Let our team carry the complexity"
        goldWords={[5]}
        eyebrow="Work With Us"
        description="Share your brief and we will assemble the people and technology to deliver it flawlessly."
      />
    </>
  );
}
