import { seededRandom } from "@/lib/utils";

/**
 * Abstract architectural floor plan, generated deterministically from a seed.
 * Gold linework on deep navy keeps it on brand and avoids external assets.
 */
export function FloorPlan({ seed, className }: { seed: string; className?: string }) {
  const r = (k: string) => seededRandom(seed + k);
  const cols = 3 + Math.floor(r("c") * 3); // 3..5
  const rows = 2 + Math.floor(r("r") * 2); // 2..3
  const cellW = 360 / cols;
  const cellH = 150 / rows;

  return (
    <svg
      viewBox="0 0 420 260"
      className={className}
      role="img"
      aria-label="Floor plan schematic"
    >
      <defs>
        <linearGradient id={`fp-${seed}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E7CE97" />
          <stop offset="1" stopColor="#C9A24B" />
        </linearGradient>
      </defs>

      {/* Outer shell */}
      <rect
        x="14"
        y="14"
        width="392"
        height="232"
        rx="10"
        fill="none"
        stroke={`url(#fp-${seed})`}
        strokeWidth="1.5"
        opacity="0.7"
      />

      {/* Stage */}
      <rect x="30" y="30" width="360" height="34" rx="4" fill="#d6b26b" opacity="0.16" />
      <rect x="30" y="30" width="360" height="34" rx="4" fill="none" stroke="#d6b26b" strokeWidth="1" opacity="0.6" />
      <text x="210" y="51" textAnchor="middle" fontSize="11" fill="#e7ce97" letterSpacing="3">
        STAGE
      </text>

      {/* Seating / stand grid */}
      <g>
        {Array.from({ length: rows }).map((_, ry) =>
          Array.from({ length: cols }).map((_, cx) => {
            const x = 30 + cx * cellW + 5;
            const y = 80 + ry * cellH + 5;
            const w = cellW - 14;
            const h = cellH - 12;
            const lit = r(`${cx}-${ry}`) > 0.55;
            return (
              <rect
                key={`${cx}-${ry}`}
                x={x}
                y={y}
                width={w}
                height={h}
                rx="3"
                fill={lit ? "#d6b26b" : "#1b202b"}
                fillOpacity={lit ? 0.18 : 0.5}
                stroke="#d6b26b"
                strokeOpacity="0.35"
                strokeWidth="0.8"
              />
            );
          }),
        )}
      </g>

      {/* Entrances */}
      <circle cx="14" cy="130" r="6" fill="#05070d" stroke="#e7ce97" strokeWidth="1.2" />
      <circle cx="406" cy="130" r="6" fill="#05070d" stroke="#e7ce97" strokeWidth="1.2" />
      <text x="210" y="250" textAnchor="middle" fontSize="9" fill="#6b7385" letterSpacing="2">
        MAIN ENTRANCE
      </text>
    </svg>
  );
}
