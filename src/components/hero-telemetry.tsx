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
              viewBox={`0 0 ${impact.width} 64`}
              preserveAspectRatio="none"
              role="presentation"
            >
              <path
                className="telemetry-waveform-trace"
                d={`M0 32 H${Math.max(0, impact.x - 56)} L${Math.max(0, impact.x - 48)} 30 L${Math.max(0, impact.x - 40)} 35 L${Math.max(0, impact.x - 32)} 26 L${Math.max(0, impact.x - 24)} 44 L${Math.max(0, impact.x - 16)} 8 L${impact.x} 56 L${Math.min(impact.width, impact.x + 16)} 18 L${Math.min(impact.width, impact.x + 24)} 40 L${Math.min(impact.width, impact.x + 32)} 29 L${Math.min(impact.width, impact.x + 40)} 34 L${Math.min(impact.width, impact.x + 48)} 31 H${impact.width}`}
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
