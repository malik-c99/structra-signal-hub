import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

type Impact = {
  id: number;
  x: number;
  y: number;
  width: number;
  node: string;
  status: "IMPACT DETECTED" | "ANOMALY DETECTED";
  labelX: number;
  labelY: number;
};

type HeroTelemetryProps = {
  children: ReactNode;
};

const IMPACT_LIFETIME = 1800;
const HUD_WIDTH = 214;
const HUD_HEIGHT = 30;
const HUD_OFFSET = 22;

function createHeartbeatPath(width: number, impactX: number) {
  const point = (offset: number) => Math.min(width, Math.max(0, impactX + offset));

  return [
    "M0 48",
    `H${point(-150)}`,
    `C${point(-142)} 48 ${point(-138)} 43 ${point(-130)} 43`,
    `C${point(-122)} 43 ${point(-118)} 50 ${point(-110)} 50`,
    `L${point(-96)} 52`,
    `L${point(-86)} 38`,
    `L${point(-76)} 76`,
    `L${point(-64)} 7`,
    `L${point(-50)} 84`,
    `L${point(-38)} 43`,
    `C${point(-27)} 43 ${point(-22)} 34 ${point(-12)} 34`,
    `C${point(-2)} 34 ${point(4)} 48 ${point(18)} 48`,
    `H${point(42)}`,
    `C${point(50)} 48 ${point(54)} 45 ${point(61)} 45`,
    `C${point(68)} 45 ${point(72)} 50 ${point(79)} 50`,
    `L${point(88)} 51`,
    `L${point(95)} 42`,
    `L${point(102)} 67`,
    `L${point(111)} 24`,
    `L${point(121)} 70`,
    `L${point(130)} 45`,
    `C${point(138)} 45 ${point(142)} 39 ${point(150)} 39`,
    `C${point(158)} 39 ${point(164)} 48 ${point(176)} 48`,
    `H${width}`,
  ].join(" ");
}

/**
 * Home-page telemetry layer. Scoped to the Home page only:
 * clicking anywhere else on the site does nothing.
 */
export function HeroTelemetry({ children }: HeroTelemetryProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [impacts, setImpacts] = useState<Impact[]>([]);
  const nextId = useRef(0);
  const cleanupTimers = useRef<Map<number, ReturnType<typeof setTimeout>>>(new Map());

  useEffect(() => {
    const timers = cleanupTimers.current;
    return () => {
      timers.forEach((timer) => clearTimeout(timer));
      timers.clear();
    };
  }, []);

  function registerImpact(event: MouseEvent<HTMLDivElement>) {
    const target = event.target;
    if (
      target instanceof Element &&
      target.closest("a, button, input, select, textarea, label, [role='button']")
    ) {
      return;
    }

    const bounds = sectionRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const id = nextId.current;
    const alignRight = x + HUD_OFFSET + HUD_WIDTH > bounds.width - 12;
    const preferredX = alignRight ? x - HUD_OFFSET - HUD_WIDTH : x + HUD_OFFSET;
    const labelX = Math.min(Math.max(preferredX, 12), Math.max(12, bounds.width - HUD_WIDTH - 12));
    const labelY = Math.min(Math.max(y - HUD_HEIGHT - 12, 12), Math.max(12, bounds.height - HUD_HEIGHT - 12));

    nextId.current += 1;
    setImpacts((current) => [
      ...current,
      {
        id,
        x,
        y,
        width: bounds.width,
        node: String(Math.floor(Math.random() * 9) + 1).padStart(2, "0"),
        status: Math.random() > 0.5 ? "IMPACT DETECTED" : "ANOMALY DETECTED",
        labelX,
        labelY,
      },
    ]);

    const timer = setTimeout(() => {
      setImpacts((current) => current.filter((impact) => impact.id !== id));
      cleanupTimers.current.delete(id);
    }, IMPACT_LIFETIME);

    cleanupTimers.current.set(id, timer);
  }

  return (
    <div
      ref={sectionRef}
      className="relative"
      onClick={registerImpact}
      aria-label="Interactive structural monitoring display"
    >
      {/* Full-bleed effects canvas: stretches across the whole hero, never blocks clicks */}
      <div className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-hidden" aria-hidden="true">
        {impacts.map((impact) => (
          <div key={impact.id} className="telemetry-impact pointer-events-none absolute inset-0">
            <span className="telemetry-impact-core" style={{ left: impact.x, top: impact.y }} />
            <span className="telemetry-ring telemetry-ring-primary" style={{ left: impact.x, top: impact.y }} />
            <span className="telemetry-ring telemetry-ring-secondary" style={{ left: impact.x, top: impact.y }} />
            <svg
              className="telemetry-waveform"
              style={{ left: 0, top: impact.y }}
              viewBox={`0 0 ${impact.width} 96`}
              preserveAspectRatio="none"
              role="presentation"
            >
              <path
                className="telemetry-waveform-trace"
                pathLength="1"
                d={createHeartbeatPath(impact.width, impact.x)}
              />
            </svg>
            <span className="telemetry-hud" style={{ left: impact.labelX, top: impact.labelY }}>
              NODE {impact.node} — {impact.status}
            </span>
          </div>
        ))}
      </div>

      {children}
    </div>
  );
}
