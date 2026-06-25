"use client";

import dynamic from "next/dynamic";

const VenueScene = dynamic(() => import("./venue-scene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-12 w-12 animate-pulse-ring rounded-full border border-gold-400/40" />
    </div>
  ),
});

export function VenueSceneLazy({ className }: { className?: string }) {
  return <VenueScene className={className} />;
}
