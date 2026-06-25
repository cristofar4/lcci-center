import {
  Maximize,
  Cpu,
  Sparkles,
  MapPin,
  PackageCheck,
  Leaf,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/anim/reveal";
import { WHY } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  Maximize,
  Cpu,
  Sparkles,
  MapPin,
  PackageCheck,
  Leaf,
};

export function WhyChoose() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            eyebrow="Why Choose the Centre"
            title="A venue that works as hard as you do"
            goldWords={[5]}
            description="Every detail of the Centre is engineered to make ambitious events effortless, from architecture to the people who run it."
          />
          <Reveal delay={0.1}>
            <p className="text-pretty text-sm leading-relaxed text-slate lg:pb-2">
              We pair world class infrastructure with a service culture that
              treats your event as our own. The result is a venue that organisers
              return to, year after year.
            </p>
          </Reveal>
        </div>

        <Reveal
          staggerChildren
          stagger={0.08}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {WHY.map((w, i) => {
            const Icon = ICONS[w.icon] ?? Sparkles;
            return (
              <div
                key={w.title}
                className="group relative overflow-hidden rounded-2xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/30"
              >
                <div className="absolute -right-6 -top-6 font-display text-7xl font-light text-white/[0.03] transition-colors group-hover:text-gold-500/10">
                  0{i + 1}
                </div>
                <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-500/10 text-gold-300">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="relative mt-6 font-display text-xl font-medium text-ivory">
                  {w.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-mist">
                  {w.copy}
                </p>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
