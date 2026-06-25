import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTA } from "@/components/sections/cta";
import { GalleryGrid } from "@/components/sections/gallery-grid";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A visual journey through conferences, exhibitions, galas and corporate events hosted at LCCI Conference and Exhibition Centre.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Moments made memorable"
        goldWords={[2]}
        description="A window into the conferences, exhibitions and celebrations brought to life on our floors."
        image={IMG.gala}
        crumbs={[{ label: "Gallery", href: "/gallery" }]}
      />

      <section className="relative py-20 md:py-28">
        <div className="container-wide">
          <GalleryGrid />
        </div>
      </section>

      <CTA
        title="Picture your event in this space"
        goldWords={[4]}
        eyebrow="Book a Venue"
      />
    </>
  );
}
