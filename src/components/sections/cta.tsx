import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SplitText } from "@/components/anim/split-text";
import { Reveal } from "@/components/anim/reveal";
import { ParticleFieldLazy } from "@/components/three/particle-field-lazy";
import { SITE } from "@/lib/site";

export function CTA({
  title = "Let us host your next defining event",
  goldWords = [5],
  eyebrow = "Book a Venue",
  description = "Tell us your vision and our team will craft a proposal tailored to your event, your audience and your ambition.",
}: {
  title?: string;
  goldWords?: number[];
  eyebrow?: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="container-wide py-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-ink-radial px-6 py-20 md:px-16 md:py-28">
          <ParticleFieldLazy className="absolute inset-0" count={700} />
          <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:60px_60px] opacity-20" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

          <div className="relative mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="eyebrow justify-center">{eyebrow}</span>
            </Reveal>
            <h2 className="mt-6 font-display text-h1 font-light leading-[1.02] text-balance text-ivory">
              <SplitText text={title} goldWords={goldWords} />
            </h2>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-mist">
                {description}
              </p>
            </Reveal>
            <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/book">
                <Button size="lg">
                  Start your booking
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
              <a href={`tel:${SITE.phoneHref}`}>
                <Button size="lg" variant="outline">
                  <Phone className="h-4 w-4" />
                  {SITE.phone}
                </Button>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
