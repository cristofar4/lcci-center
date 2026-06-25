"use client";

import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("./particle-field"), {
  ssr: false,
  loading: () => null,
});

export function ParticleFieldLazy(props: { className?: string; count?: number }) {
  return <ParticleField {...props} />;
}
