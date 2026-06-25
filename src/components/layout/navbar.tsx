"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { NAV } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { FullscreenMenu } from "./fullscreen-menu";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(y > 24);
    if (open) return;
    setHidden(y > prev && y > 240);
  });

  return (
    <>
      <motion.header
        initial={{ y: -120 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-[80]"
      >
        <div
          className={cn(
            "transition-colors duration-500",
            scrolled
              ? "border-b border-white/10 bg-ink-950/70 backdrop-blur-xl"
              : "border-b border-transparent bg-transparent",
          )}
        >
          <nav className="container-wide flex h-20 items-center justify-between gap-6">
            <Link href="/" aria-label="LCCI Centre home" className="shrink-0">
              <Logo />
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {NAV.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                        active
                          ? "text-ivory"
                          : "text-mist hover:text-ivory",
                      )}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-pill"
                          className="absolute inset-0 -z-10 rounded-full bg-white/5 ring-1 ring-inset ring-white/10"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-3">
              <Link href="/book" className="hidden sm:block">
                <Button size="sm" className="group">
                  Book a Venue
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
              <button
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-ivory transition-colors hover:border-gold-400/50 hover:bg-white/5 lg:hidden"
              >
                <span className="flex flex-col gap-[5px]">
                  <span className="block h-px w-5 bg-current" />
                  <span className="block h-px w-5 bg-current" />
                  <span className="block h-px w-3.5 bg-current" />
                </span>
              </button>
              <button
                onClick={() => setOpen(true)}
                className="hidden items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs uppercase tracking-[0.2em] text-mist transition-colors hover:border-gold-400/50 hover:text-ivory lg:flex"
              >
                Menu
                <span className="flex flex-col gap-[3px]">
                  <span className="block h-px w-4 bg-current" />
                  <span className="block h-px w-4 bg-current" />
                </span>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && <FullscreenMenu onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
