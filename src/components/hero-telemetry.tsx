import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";

type Impact = {
  id: number;
  x: number;
  y: number;
  node: string;
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

export function HeroTelemetry({ children }: HeroTelemetryProps) {
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

  function registerImpact(event: MouseEvent<HTMLElement>) {
    if (event.button !== 0) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const id = nextId.current;
    const alignRight = x + HUD_OFFSET + HUD_WIDTH > bounds.width - 12;
    const preferredX = alignRight ? x - HUD_OFFSET - HUD_WIDTH : x + HUD_OFFSET;
    const labelX = Math.min(Math.max(preferredX, 12), Math.max(12, bounds.width - HUD_WIDTH - 12));
    const labelY = Math.min(Math.max(y - HUD_HEIGHT - 12, 12), bounds.height - HUD_HEIGHT - 12);

    nextId.current += 1;
    setImpacts((current) => [
      ...current,
      {
        id,
        x,
        y,
        node: String(Math.floor(Math.random() * 9) + 1).padStart(2, "0"),
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
    <section
      className="hero-telemetry relative cursor-crosshair overflow-hidden border-b border-border/60"
      onMouseDown={registerImpact}
      aria-label="Interactive structural monitoring display"
    >
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
      <div className="telemetry-scan pointer-events-none absolute inset-0" aria-hidden="true" />

      {impacts.map((impact) => (
        <div key={impact.id} className="telemetry-impact pointer-events-none absolute inset-0 z-20" aria-hidden="true">
          <span className="telemetry-impact-core" style={{ left: impact.x, top: impact.y }} />
          <span className="telemetry-ring telemetry-ring-primary" style={{ left: impact.x, top: impact.y }} />
          <span className="telemetry-ring telemetry-ring-secondary" style={{ left: impact.x, top: impact.y }} />
          <svg
            className="telemetry-waveform"
            style={{ left: impact.x, top: impact.y }}
            viewBox="0 0 240 64"
            role="presentation"
          >
            <path
              className="telemetry-waveform-trace"
              d="M0 32 H64 L72 30 L80 35 L88 26 L96 44 L104 8 L112 56 L120 18 L128 40 L136 29 L144 34 L152 31 H240"
            />
          </svg>
          <span
            className="telemetry-hud"
            style={{ left: impact.labelX, top: impact.labelY }}
          >
            NODE {impact.node} — IMPACT DETECTED
          </span>
        </div>
      ))}

      <div className="relative z-10">{children}</div>
    </section>
  );
}