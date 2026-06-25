import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { VenueExplorer } from "./venue-explorer";
import { VENUES } from "@/lib/data";

export function VenueShowcase() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-gold-500/[0.06] blur-[160px]" />
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Venues and Spaces"
            title="Twelve spaces, one standard of excellence"
            goldWords={[3]}
            description="Explore halls engineered for conventions, exhibitions, galas and executive gatherings. Hover to preview each space and its floor plan."
            className="max-w-2xl"
          />
          <Link
            href="/venues"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
          >
            View all venues
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14">
          <VenueExplorer venues={VENUES} />
        </div>
      </div>
    </section>
  );
}
