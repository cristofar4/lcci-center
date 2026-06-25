import { cn } from "@/lib/utils";

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        <svg viewBox="0 0 48 48" className="h-10 w-10" aria-hidden>
          <defs>
            <linearGradient id="lcci-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#E7CE97" />
              <stop offset="0.55" stopColor="#D6B26B" />
              <stop offset="1" stopColor="#C9A24B" />
            </linearGradient>
          </defs>
          <rect
            x="1.25"
            y="1.25"
            width="45.5"
            height="45.5"
            rx="11"
            fill="none"
            stroke="url(#lcci-g)"
            strokeWidth="1.25"
            opacity="0.7"
          />
          <path
            d="M14 33 V20 a10 10 0 0 1 20 0 V33"
            fill="none"
            stroke="url(#lcci-g)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M19 33 V22 a5 5 0 0 1 10 0 V33"
            fill="none"
            stroke="url(#lcci-g)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.65"
          />
          <line
            x1="11"
            y1="33"
            x2="37"
            y2="33"
            stroke="url(#lcci-g)"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg font-medium tracking-tight text-ivory">
            LCCI
          </span>
          <span className="text-[0.6rem] uppercase tracking-[0.28em] text-mist">
            Conference & Exhibition
          </span>
        </span>
      )}
    </span>
  );
}
