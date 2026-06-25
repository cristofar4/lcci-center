import { Counter } from "@/components/anim/counter";
import { Reveal } from "@/components/anim/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { STATS } from "@/lib/data";

export function Stats() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[1px] w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
      <div className="container-wide">
        <SectionHeading
          align="center"
          eyebrow="Capacity at a Glance"
          title="Built for scale and ambition"
          goldWords={[2]}
          description="From an intimate boardroom of forty to a plenary of six thousand, the Centre flexes to the size of your vision."
        />

        <Reveal
          staggerChildren
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 lg:grid-cols-4"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="group relative bg-ink-900/60 p-8 text-center transition-colors duration-500 hover:bg-charcoal-800 md:p-10"
            >
              <div className="font-display text-5xl font-light tracking-tight text-ivory md:text-6xl">
                <Counter
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  className="text-gradient-gold"
                />
              </div>
              <div className="mt-3 text-sm uppercase tracking-[0.18em] text-mist">
                {s.label}
              </div>
              <span className="pointer-events-none absolute inset-x-8 bottom-6 h-px scale-x-0 bg-gold-500/40 transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
