"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { SmartImage } from "@/components/ui/smart-image";
import { GALLERY, GALLERY_CATEGORIES, type GalleryItem } from "@/lib/data";
import { EASE, cn } from "@/lib/utils";

export function GalleryGrid({
  items = GALLERY,
  showFilter = true,
}: {
  items?: GalleryItem[];
  showFilter?: boolean;
}) {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);

  const filtered = useMemo(
    () => (cat === "All" ? items : items.filter((g) => g.category === cat)),
    [cat, items],
  );

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: number) =>
      setOpen((o) =>
        o === null ? o : (o + dir + filtered.length) % filtered.length,
      ),
    [filtered.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, close, go]);

  const current = open !== null ? filtered[open] : null;

  return (
    <div>
      {showFilter && (
        <div className="mb-10 flex flex-wrap gap-2">
          {GALLERY_CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm transition-all duration-300",
                cat === c
                  ? "border-gold-400/50 bg-white/5 text-ivory"
                  : "border-white/10 text-mist hover:border-white/25 hover:text-ivory",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      <motion.div layout className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
        <AnimatePresence>
          {filtered.map((g, i) => (
            <motion.button
              layout
              key={g.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, ease: EASE.expo }}
              onClick={() => setOpen(i)}
              className={cn(
                "group relative block w-full overflow-hidden rounded-2xl border border-white/10",
                g.span === "tall" ? "aspect-[3/4]" : g.span === "wide" ? "aspect-[16/10]" : "aspect-square",
              )}
            >
              <SmartImage
                id={g.src}
                alt={g.title}
                width={700}
                quality={70}
                fast
                sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                className="h-full w-full"
                imgClassName="transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs uppercase tracking-[0.18em] text-gold-300">
                  {g.category}
                </span>
                <h3 className="mt-1 font-display text-lg text-ivory">{g.title}</h3>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[97] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-md md:p-10"
            onClick={close}
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 text-ivory transition-colors hover:border-gold-400/50"
            >
              <X className="h-5 w-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              aria-label="Previous"
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-ivory transition-colors hover:border-gold-400/50 md:left-8"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); go(1); }}
              aria-label="Next"
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-ivory transition-colors hover:border-gold-400/50 md:right-8"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <motion.div
              key={current.title}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: EASE.expo }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <SmartImage id={current.src} alt={current.title} width={1500} priority fast sizes="90vw" className="h-full w-full" />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.18em] text-gold-300">
                    {current.category}
                  </span>
                  <h3 className="font-display text-xl text-ivory">{current.title}</h3>
                </div>
                <span className="text-sm text-slate">
                  {(open ?? 0) + 1} / {filtered.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
