import Link from "next/link";
import { SITE, NAV } from "@/lib/site";
import { Logo } from "./logo";
import { Reveal } from "@/components/anim/reveal";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-ink-950">
      <div className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:72px_72px] opacity-[0.18]" />
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-gold-500/10 blur-[140px]" />

      <div className="container-wide relative py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <Reveal className="flex flex-col gap-6">
            <Logo />
            <p className="max-w-xs text-pretty text-sm leading-relaxed text-mist">
              The official home of conferences, exhibitions and business events
              in Lagos. Engineered for scale, delivered with excellence.
            </p>
            <div className="flex gap-3">
              {SITE.socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-xs text-mist transition-colors hover:border-gold-400/50 hover:text-ivory"
                  aria-label={s.label}
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.24em] text-gold-400">
              Explore
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-mist">
              {NAV.slice(0, 5).map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-underline hover:text-ivory">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.24em] text-gold-400">
              Discover
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-mist">
              {NAV.slice(5).map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="link-underline hover:text-ivory">
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/book" className="link-underline hover:text-ivory">
                  Book a Venue
                </Link>
              </li>
            </ul>
          </Reveal>

          <Reveal className="flex flex-col gap-4">
            <h3 className="text-xs uppercase tracking-[0.24em] text-gold-400">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-mist">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                <span>
                  {SITE.address.line1}
                  <br />
                  {SITE.address.line2}, {SITE.address.country}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`tel:${SITE.phoneHref}`} className="hover:text-ivory">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                <a href={`mailto:${SITE.email}`} className="hover:text-ivory">
                  {SITE.email}
                </a>
              </li>
            </ul>
            <Link
              href="/book"
              className="mt-2 inline-flex w-fit items-center gap-2 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
            >
              Plan your event
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate md:flex-row md:items-center">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-mist">
              Privacy
            </Link>
            <Link href="/contact" className="hover:text-mist">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-mist">
              Accessibility
            </Link>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="select-none px-6 pb-6 text-center font-display text-[20vw] font-light leading-[0.8] tracking-tighter text-white/[0.025] md:text-[16vw]"
      >
        LCCI
      </div>
    </footer>
  );
}
