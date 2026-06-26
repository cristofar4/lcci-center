"use client";

import Image from "next/image";
import { useState } from "react";
import { cn, seededRandom } from "@/lib/utils";
import { unsplash } from "@/lib/images";

type SmartImageProps = {
  /** Unsplash photo id (preferred) or a full src url */
  id?: string;
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
  /** snappier fade in, better for dense grids like the gallery */
  fast?: boolean;
  width?: number;
  quality?: number;
  /** seed for the deterministic branded fallback */
  seed?: string;
};

export function SmartImage({
  id,
  src,
  alt,
  className,
  imgClassName,
  sizes = "100vw",
  priority = false,
  loading,
  fast = false,
  width = 1600,
  quality = 80,
  seed,
}: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  const finalSrc = src ?? (id ? unsplash(id, { w: width, q: quality }) : undefined);
  const s = seed ?? id ?? src ?? alt;
  const r = seededRandom(s);
  const gx = 20 + Math.round(r * 60);
  const gy = 10 + Math.round(seededRandom(s + "y") * 50);

  return (
    <div className={cn("relative overflow-hidden bg-charcoal-800", className)}>
      {/* Branded fallback always rendered underneath */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background: `radial-gradient(80% 80% at ${gx}% ${gy}%, rgba(214,178,107,0.22), rgba(20,26,40,0.4) 45%, #080B12 100%)`,
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.5] mix-blend-soft-light"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(255,255,255,0.06) 0%, transparent 35%, transparent 65%, rgba(255,255,255,0.04) 100%)",
        }}
      />
      {!loaded && (
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-2xl tracking-[0.3em] text-gold-400/30"
        >
          LCCI
        </div>
      )}

      {finalSrc && !errored && (
        <Image
          src={finalSrc}
          alt={alt}
          fill
          sizes={sizes}
          quality={quality}
          priority={priority}
          {...(!priority && loading ? { loading } : {})}
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={cn(
            "object-cover transition-[opacity,transform] ease-expo",
            fast ? "duration-500" : "duration-1000",
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.06]",
            imgClassName,
          )}
        />
      )}
    </div>
  );
}
