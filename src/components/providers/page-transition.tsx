"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLenis } from "lenis/react";
import { ScrollTrigger } from "@/lib/gsap";

/**
 * Route change handler. It deliberately does NOT wrap the page in an
 * opacity animating element: doing so previously left whole pages stuck
 * invisible after a soft navigation. Per element reveals provide the
 * entrance motion, while this resets the scroll position and recalculates
 * any scroll driven animations after the new page mounts.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    try {
      lenis?.scrollTo(0, { immediate: true });
    } catch {}
    window.scrollTo(0, 0);

    const ids = [120, 360, 800].map((d) =>
      window.setTimeout(() => ScrollTrigger.refresh(), d),
    );
    return () => ids.forEach((id) => window.clearTimeout(id));
  }, [pathname, lenis]);

  return <>{children}</>;
}
