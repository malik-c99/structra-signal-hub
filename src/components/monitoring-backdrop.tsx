// Monitored high-rise building rendered as an engineering elevation.
const COLS = [520, 620, 720, 820, 920];
const FLOORS = [120, 175, 230, 285, 340, 395, 450, 505, 560, 615, 670];
const ROOF = 120;
const GROUND = 690;

const NODES: [number, number, string, number][] = [
  // x, y, label, pulse delay (s)
  [520, 230, "N-01", 0],
  [720, 175, "N-02", 0.9],
  [920, 340, "N-03", 1.8],
  [620, 450, "N-04", 2.7],
  [820, 505, "N-05", 3.6],
  [520, 560, "N-06", 1.4],
  [920, 615, "N-07", 2.3],
  [720, 395, "N-08", 3.2],
];

function BuildingFrame({ prefix }: { prefix: string }) {
  return (
    <>
      {/* exterior walls */}
      <line x1={COLS[0]} y1={ROOF} x2={COLS[0]} y2={GROUND} />
      <line x1={COLS[COLS.length - 1]} y1={ROOF} x2={COLS[COLS.length - 1]} y2={GROUND} />
      {/* roof slab */}
      <line x1={COLS[0]} y1={ROOF} x2={COLS[COLS.length - 1]} y2={ROOF} />
      {/* antenna mast + beacon tick */}
      <line x1={720} y1={ROOF} x2={720} y2={56} />
      <line x1={706} y1={56} x2={734} y2={56} />
      {/* interior columns */}
      {COLS.slice(1, -1).map((x) => (
        <line key={`${prefix}c${x}`} x1={x} y1={ROOF} x2={x} y2={GROUND} />
      ))}
      {/* floor slabs */}
      {FLOORS.slice(1).map((y) => (
        <line key={`${prefix}f${y}`} x1={COLS[0]} y1={y} x2={COLS[COLS.length - 1]} y2={y} />
      ))}
      {/* core shear wall hatch: diagonal bracing in center bay */}
      {FLOORS.slice(0, -1).map((y, i) => (
        <line
          key={`${prefix}b${i}`}
          x1={i % 2 === 0 ? 620 : 820}
          y1={y}
          x2={i % 2 === 0 ? 820 : 620}
          y2={FLOORS[i + 1]}
        />
      ))}
      {/* ground line */}
      <line
        x1={40}
        y1={GROUND}
        x2={1400}
        y2={GROUND}
        className="site-monitor-ground"
      />
    </>
  );
}

export function MonitoringBackdrop() {
  return (
    <div className="site-monitor" aria-hidden="true">
      <div className="site-monitor-ambient" />
      <div className="site-monitor-grid" />
      <svg
        className="site-monitor-truss site-monitor-truss-far"
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
      >
        <g
          className="site-monitor-structure"
          transform="translate(120 130) scale(0.6)"
        >
          <BuildingFrame prefix="far" />
        </g>
      </svg>
      <svg
        className="site-monitor-truss"
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="site-monitor-structure">
          <BuildingFrame prefix="main" />
        </g>

        {NODES.map(([x, y, label, delay]) => (
          <g key={label} className="site-monitor-node">
            <circle
              cx={x}
              cy={y}
              r={14}
              className="site-monitor-node-aura"
              style={{ animationDelay: `${delay}s` }}
            />
            <circle cx={x} cy={y} r={3} className="site-monitor-node-core" />
            <text x={x} y={y - 22} className="site-monitor-node-label" textAnchor="middle">
              {label}
            </text>
          </g>
        ))}
        {/* antenna beacon */}
        <g className="site-monitor-node">
          <circle cx={720} cy={56} r={14} className="site-monitor-node-aura" />
          <circle cx={720} cy={56} r={3} className="site-monitor-node-core" />
        </g>
      </svg>
      <div className="site-monitor-scan" />
      <div className="site-monitor-noise" />
    </div>
  );
}
