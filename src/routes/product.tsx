import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowRight, Radio, ShieldCheck } from "lucide-react";
import { Section, SectionHead } from "@/components/section";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — Structra Node, Cloud & Dashboard" },
      {
        name: "description",
        content:
          "The Structra stack: wireless vibration capture, cloud baseline learning, and a dashboard that flags anomalies in real time.",
      },
      { property: "og:title", content: "Product — Structra Node, Cloud & Dashboard" },
      {
        property: "og:description",
        content:
          "Capture, learn, and flag: the three-step Structra stack for continuous structural health monitoring.",
      },
    ],
  }),
  component: ProductPage,
});

const steps = [
  {
    n: "01",
    icon: Radio,
    kicker: "Structra Node",
    title: "Capture",
    body: "Wireless sensing designed for fast installation and continuous vibration capture. Mounted with minimal operational disruption on prefab, parking, campus, industrial, or bridge assets.",
    points: [
      "Dual-axis accelerometer sensing",
      "Battery-backed wireless mesh to gateway",
      "Install without shutting the asset down",
    ],
  },
  {
    n: "02",
    icon: Activity,
    kicker: "Structra Cloud",
    title: "Learn",
    body: "A secure pipeline builds each structure's baseline signature and compares behaviour over time, flagging live frequency deviation as it emerges.",
    points: [
      "Per-asset baseline detection",
      "Live frequency deviation flagging",
      "Continuous behavioural history per structure",
    ],
  },
  {
    n: "03",
    icon: ShieldCheck,
    kicker: "Structra Dashboard",
    title: "Flag",
    body: "A focused operator view of alerts, baseline trends, asset status, and anomaly investigation — engineering judgment stays in the loop.",
    points: [
      "Unified alert inbox across the portfolio",
      "Baseline trend and deviation charts",
      "One-click anomaly investigation",
    ],
  },
];

function ProductPage() {
  return (
    <>
      <Section>
        <SectionHead
          eyebrow="Product"
          title="Attach a node. Learn normal. Flag change."
          lead="One closed loop turns raw vibration into an operator-ready signal — the continuous layer between engineering visits."
        />
      </Section>

      {steps.map((s, i) => (
        <Section key={s.n}>
          <div
            className={`grid gap-10 lg:grid-cols-2 lg:items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-3xl font-semibold text-signal">{s.n}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {s.kicker}
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">{s.title}</h2>
              <p className="mt-4 text-muted-foreground">{s.body}</p>
              <ul className="mt-6 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    <span className="text-muted-foreground">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-border bg-surface p-10">
              <div className="grid-lines pointer-events-none absolute inset-0 opacity-50" />
              <div className="relative flex h-56 items-center justify-center">
                <span className="absolute h-24 w-24 rounded-full border border-signal/40 pulse-ring" />
                <span className="absolute h-24 w-24 rounded-full border border-signal/25" />
                <s.icon className="relative h-12 w-12 text-signal" />
              </div>
            </div>
          </div>
        </Section>
      ))}

      <Section className="border-b-0">
        <div className="flex flex-col items-start gap-4 rounded-sm border border-border bg-surface p-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-lg font-semibold">
            Ready to see the baseline of your own structure?
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a Pilot <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>
    </>
  );
}
