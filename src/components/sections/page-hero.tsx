import Link from "next/link";
import { SmartImage } from "@/components/ui/smart-image";
import { SplitText } from "@/components/anim/split-text";
import { Reveal } from "@/components/anim/reveal";

type Crumb = { label: string; href: string };

export function PageHero({
  eyebrow,
  title,
  goldWords = [],
  description,
  image,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  goldWords?: number[];
  description?: string;
  image: string;
  crumbs?: Crumb[];
}) {
  return (
    <section className="relative flex min-h-[68svh] items-end overflow-hidden pb-16 pt-32 md:min-h-[78svh] md:pb-20">
      <SmartImage
        id={image}
        alt={title}
        priority
        sizes="100vw"
        className="absolute inset-0 h-full w-full"
        imgClassName="scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/60 to-ink-950/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink-950/80 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:80px_80px] opacity-20" />

      <div className="container-wide relative">
        <Reveal>
          <nav className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-mist">
            <Link href="/" className="hover:text-ivory">
              Home
            </Link>
            {crumbs.map((c) => (
              <span key={c.href} className="flex items-center gap-2">
                <span className="text-slate">/</span>
                <Link href={c.href} className="hover:text-ivory">
                  {c.label}
                </Link>
              </span>
            ))}
          </nav>
        </Reveal>

        <Reveal delay={0.05}>
          <span className="eyebrow text-gold-300">{eyebrow}</span>
        </Reveal>

        <h1 className="mt-5 max-w-4xl font-display text-h1 font-light leading-[1.0] text-balance text-ivory">
          <SplitText text={title} goldWords={goldWords} delay={0.15} />
        </h1>

        {description && (
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-mist">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
