import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GalleryGrid } from "./gallery-grid";
import { GALLERY } from "@/lib/data";

export function GalleryPreview() {
  return (
    <section className="relative bg-ink-950/40 py-24 md:py-32">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Moments at the Centre"
            title="A look inside our events"
            goldWords={[4]}
            description="A glimpse of the conferences, exhibitions and galas brought to life on our floors."
            className="max-w-2xl"
          />
          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-medium text-gold-300 transition-colors hover:text-gold-200"
          >
            Open full gallery
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-14">
          <GalleryGrid items={GALLERY.slice(0, 6)} showFilter={false} />
        </div>
      </div>
    </section>
  );
}
