import { Hero } from "@/components/sections/hero";
import { Partners } from "@/components/sections/partners";
import { Stats } from "@/components/sections/stats";
import { WhyChoose } from "@/components/sections/why-choose";
import { VenueShowcase } from "@/components/sections/venue-showcase";
import { EventsSpectrum } from "@/components/sections/events-spectrum";
import { ExhibitionsStory } from "@/components/sections/exhibitions-story";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { ProcessPinned } from "@/components/sections/process-pinned";
import { Testimonials } from "@/components/sections/testimonials";
import { Location } from "@/components/sections/location";
import { CTA } from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Partners />
      <Stats />
      <WhyChoose />
      <VenueShowcase />
      <EventsSpectrum />
      <ExhibitionsStory />
      <GalleryPreview />
      <ProcessPinned />
      <Testimonials />
      <Location />
      <CTA />
    </>
  );
}
