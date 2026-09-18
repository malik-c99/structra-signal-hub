const NODES: [number, number, string, number][] = [
  // x, y, label, pulse delay (s)
  [80, 470, "N-01", 0],
  [320, 330, "N-02", 0.9],
  [640, 330, "N-03", 1.8],
  [960, 330, "N-04", 2.7],
  [1120, 330, "N-05", 3.6],
  [1360, 470, "N-06", 1.4],
  [800, 470, "N-07", 2.3],
  [480, 470, "N-08", 3.2],
];

const TOP_X = [320, 480, 640, 800, 960, 1120];
const PANEL = 160;

export function MonitoringBackdrop() {
  const verticals = TOP_X.map((x) => [x, 330, x, 470] as const);
  const diagonals = TOP_X.filter((x) => x > 320).map(
    (x) => [x, 330, x - PANEL, 470] as const,
  );

  return (
    <div className="site-monitor" aria-hidden="true">
      <div className="site-monitor-grid" />
      <svg
        className="site-monitor-truss"
        viewBox="0 0 1440 720"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="site-monitor-structure">
          {/* bottom chord / deck */}
          <line x1={80} y1={470} x2={1360} y2={470} />
          {/* top chord */}
          <line x1={320} y1={330} x2={1120} y2={330} />
          {/* end posts */}
          <line x1={80} y1={470} x2={320} y2={330} />
          <line x1={1360} y1={470} x2={1120} y2={330} />
          {/* verticals */}
          {verticals.map(([x1, y1, x2, y2]) => (
            <line key={`v${x1}`} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
          {/* diagonals */}
          {diagonals.map(([x1, y1, x2, y2]) => (
            <line key={`d${x1}`} x1={x1} y1={y1} x2={x2} y2={y2} />
          ))}
          {/* piers to ground */}
          <line x1={320} y1={470} x2={320} y2={690} />
          <line x1={1120} y1={470} x2={1120} y2={690} />
          <line x1={40} y1={690} x2={1400} y2={690} className="site-monitor-ground" />
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
      </svg>
      <div className="site-monitor-scan" />
    </div>
  );
}
