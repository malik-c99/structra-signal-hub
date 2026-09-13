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

function createHeartbeatPaths(width: number, impactX: number) {
  const point = (offset: number) => Math.min(width, Math.max(0, impactX + offset));

  return {
    left: `M0 80 H${point(-126)}`,
    pulse: [
      `M${point(-126)} 80`,
      `C${point(-116)} 80 ${point(-111)} 74 ${point(-103)} 74`,
      `C${point(-95)} 74 ${point(-91)} 84 ${point(-84)} 84`,
      `L${point(-72)} 88`,
      `L${point(-57)} 8`,
      `L${point(-34)} 138`,
      `L${point(-8)} 5`,
      `L${point(19)} 148`,
      `L${point(39)} 58`,
      `L${point(55)} 101`,
      `L${point(70)} 68`,
      `L${point(84)} 91`,
      `L${point(98)} 75`,
      `C${point(108)} 75 ${point(114)} 80 ${point(126)} 80`,
    ].join(" "),
    right: `M${point(126)} 80 H${width}`,
  };
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
    const spikeX = Math.min(Math.max(x, Math.min(132, bounds.width / 2)), Math.max(bounds.width - 132, bounds.width / 2));
    const id = nextId.current;
    const alignRight = spikeX + HUD_OFFSET + HUD_WIDTH > bounds.width - 12;
    const preferredX = alignRight ? spikeX - HUD_OFFSET - HUD_WIDTH : spikeX + HUD_OFFSET;
    const labelX = Math.min(Math.max(preferredX, 12), Math.max(12, bounds.width - HUD_WIDTH - 12));
    const labelY = Math.min(Math.max(y - HUD_HEIGHT - 12, 12), Math.max(12, bounds.height - HUD_HEIGHT - 12));

    nextId.current += 1;
    setImpacts((current) => [
      ...current,
      {
        id,
        x: spikeX,
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
        {impacts.map((impact) => {
          const paths = createHeartbeatPaths(impact.width, impact.x);

          return (
          <div key={impact.id} className="telemetry-impact pointer-events-none absolute inset-0">
            <span className="telemetry-impact-core" style={{ left: impact.x, top: impact.y }} />
            <span className="telemetry-ring telemetry-ring-primary" style={{ left: impact.x, top: impact.y }} />
            <svg
              className="telemetry-waveform"
              style={{ left: 0, top: impact.y }}
              viewBox={`0 0 ${impact.width} 160`}
              preserveAspectRatio="none"
              role="presentation"
            >
              {(["left", "pulse", "right"] as const).flatMap((segment) => [
                <path
                  key={`${segment}-aura`}
                  className={`telemetry-waveform-trace telemetry-waveform-${segment} telemetry-waveform-aura`}
                  pathLength="1"
                  d={paths[segment]}
                />,
                <path
                  key={`${segment}-core`}
                  className={`telemetry-waveform-trace telemetry-waveform-${segment} telemetry-waveform-core`}
                  pathLength="1"
                  d={paths[segment]}
                />,
              ])}
            </svg>
            <span className="telemetry-hud" style={{ left: impact.labelX, top: impact.labelY }}>
              NODE {impact.node} — {impact.status}
            </span>
          </div>
          );
        })}
      </div>

      {children}
    </div>
  );
}
