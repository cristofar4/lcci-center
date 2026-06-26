"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "@/lib/gsap";
import { EASE } from "@/lib/utils";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenis = useLenis();

  const resetTop = () => {
    try {
      lenis?.scrollTo(0, { immediate: true });
    } catch {}
    window.scrollTo(0, 0);
  };

  // Safety net: after a soft navigation recalculate every ScrollTrigger so
  // above the fold reveals fire even though there was no full page reload.
  useEffect(() => {
    resetTop();
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 240);
    const id2 = window.setTimeout(() => ScrollTrigger.refresh(), 720);
    return () => {
      window.clearTimeout(id);
      window.clearTimeout(id2);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={resetTop}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.5, ease: EASE.expo }}
        onAnimationComplete={() => ScrollTrigger.refresh()}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
