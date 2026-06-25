"use client";

import { cn } from "@/lib/utils";

export function Marquee({
  items,
  className,
  renderItem,
}: {
  items: string[];
  className?: string;
  renderItem?: (item: string, i: number) => React.ReactNode;
}) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn("group relative flex overflow-hidden", className)}
      aria-hidden
    >
      <div className="flex shrink-0 animate-marquee items-center gap-16 pr-16 group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <div key={i} className="shrink-0">
            {renderItem ? renderItem(item, i) : <span>{item}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
