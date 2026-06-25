import type { Metadata } from "next";
import { BookingWizard } from "@/components/sections/booking-wizard";
import { Reveal } from "@/components/anim/reveal";
import { SplitText } from "@/components/anim/split-text";

export const metadata: Metadata = {
  title: "Book a Venue",
  description:
    "Reserve your space at LCCI Conference and Exhibition Centre with our guided booking experience. Select a venue, date, capacity and requirements in minutes.",
};

export default function BookPage() {
  return (
    <section className="relative overflow-hidden pb-24 pt-32 md:pb-32 md:pt-40">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold-500/[0.07] blur-[160px]" />
      <div className="container-wide relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="eyebrow justify-center text-gold-300">Book a Venue</span>
          </Reveal>
          <h1 className="mt-6 font-display text-h1 font-light leading-[1.02] text-balance text-ivory">
            <SplitText text="Reserve your space in a few simple steps" goldWords={[4]} />
          </h1>
          <Reveal delay={0.1}>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-mist">
              Tell us what you are planning and our events team will return with a
              tailored proposal within one business day.
            </p>
          </Reveal>
        </div>

        <div className="mt-16">
          <BookingWizard />
        </div>
      </div>
    </section>
  );
}
