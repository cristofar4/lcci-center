import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { Faq } from "@/components/sections/faq";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/anim/reveal";
import { SITE } from "@/lib/site";
import { IMG } from "@/lib/images";
import { Mail, MapPin, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with LCCI Conference and Exhibition Centre in Lagos. Call, email or send us a message to plan your next conference, exhibition or corporate event.",
};

const CHANNELS = [
  { icon: Phone, label: "Call us", value: SITE.phone, href: `tel:${SITE.phoneHref}` },
  { icon: Mail, label: "Email us", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: MapPin, label: "Visit us", value: `${SITE.address.line1}, ${SITE.address.line2}` },
  { icon: Clock, label: "Opening hours", value: SITE.hours },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let us plan something extraordinary"
        goldWords={[4]}
        description="Our events team is ready to help you find the perfect space and craft a flawless event."
        image={IMG.lobby}
        crumbs={[{ label: "Contact", href: "/contact" }]}
      />

      {/* Channels */}
      <section className="relative py-16 md:py-20">
        <div className="container-wide">
          <Reveal staggerChildren stagger={0.08} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CHANNELS.map((c) => {
              const Inner = (
                <>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-500/10 text-gold-300">
                    <c.icon className="h-5 w-5" strokeWidth={1.6} />
                  </div>
                  <div className="mt-5 text-xs uppercase tracking-[0.18em] text-slate">{c.label}</div>
                  <div className="mt-1.5 text-pretty text-ivory">{c.value}</div>
                </>
              );
              return c.href ? (
                <a key={c.label} href={c.href} className="group rounded-2xl glass p-7 transition-all duration-500 hover:-translate-y-1 hover:border-gold-400/30">
                  {Inner}
                </a>
              ) : (
                <div key={c.label} className="rounded-2xl glass p-7">
                  {Inner}
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* Form + map */}
      <section className="relative py-16 md:py-24">
        <div className="container-wide grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Send a Message"
              title="Tell us about your event"
              goldWords={[3]}
            />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col">
            <SectionHeading
              eyebrow="Find Us"
              title="In the heart of Lagos"
              goldWords={[4]}
            />
            <div className="relative mt-8 aspect-[4/3] flex-1 overflow-hidden rounded-3xl border border-white/10 bg-ink-950">
              <svg viewBox="0 0 600 450" className="absolute inset-0 h-full w-full" aria-hidden>
                <defs>
                  <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M40 0H0V40" fill="none" stroke="#1b202b" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="600" height="450" fill="url(#contact-grid)" />
                <path d="M0 230 Q200 180 600 250" fill="none" stroke="#2a3140" strokeWidth="9" />
                <path d="M310 0 L290 450" stroke="#2a3140" strokeWidth="11" />
                <path d="M0 230 Q200 180 600 250" fill="none" stroke="#d6b26b" strokeWidth="2" strokeDasharray="2 10" opacity="0.5" />
              </svg>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 animate-pulse-ring rounded-full border border-gold-400/60" />
                <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gold-sheen text-ink-950 shadow-gold-soft">
                  <MapPin className="h-5 w-5" />
                </span>
              </div>
              <div className="absolute bottom-5 left-5 rounded-xl glass px-4 py-3">
                <div className="text-sm font-medium text-ivory">{SITE.shortName}</div>
                <div className="text-xs text-mist">{SITE.address.line1}, {SITE.address.line2}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative bg-ink-950/40 py-24 md:py-32">
        <div className="container-wide">
          <SectionHeading
            align="center"
            eyebrow="Questions and Answers"
            title="Everything you need to know"
            goldWords={[3]}
            description="The details organisers ask us most. If your question is not here, just reach out."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <Faq />
          </div>
        </div>
      </section>
    </>
  );
}
