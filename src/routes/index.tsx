import { createFileRoute, Link } from "@tanstack/react-router";
import { Activity, ArrowRight, CircleDot, Radio, ShieldCheck, Waves } from "lucide-react";
import heroImage from "@/assets/hero-telemetry.jpg";
import { Section, SectionHead } from "@/components/section";
import { HeroTelemetry } from "@/components/hero-telemetry";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "STRUCTRA — Continuous Signal. Engineering Intelligence." },
      {
        name: "description",
        content:
          "Always-on structural health monitoring for commercial properties, prefab assets, and infrastructure. Pilot properties start at AED 2,500.",
      },
      { property: "og:title", content: "STRUCTRA — Continuous Signal. Engineering Intelligence." },
      {
        property: "og:description",
        content:
          "Bridging the invisible gaps between periodic engineering visits with always-on structural intelligence.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <HeroTelemetry>
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>
      <div className="relative z-[1]">
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="grid-lines pointer-events-none absolute inset-0 opacity-40" />
        <div className="telemetry-scan pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-20 sm:pt-28">
          <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute h-1.5 w-1.5 rounded-full bg-signal pulse-ring" />
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  Structural health monitoring · Live
                </span>
              </div>

              <h1 className="mt-7 text-4xl font-extrabold leading-[1.05] sm:text-6xl">
                Continuous Signal.
                <br />
                <span className="text-signal-gradient">Engineering Intelligence.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                Always-on structural intelligence for commercial properties, prefab assets, and
                infrastructure — bridging the invisible gaps between periodic engineering visits.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Request a Pilot <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
                >
                  Explore Pricing
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-sm border border-border bg-surface signal-glow">
                <img
                  src={heroImage}
                  alt="Structural truss with live telemetry nodes and anomaly detection graph"
                  width={1600}
                  height={1104}
                  className="w-full"
                />
              </div>
              <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-sm border border-border bg-background/95 px-4 py-3 backdrop-blur">
                <Activity className="h-4 w-4 text-signal" />
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    Node 04 · Frequency deviation
                  </div>
                  <div className="text-sm font-semibold">Anomaly flagged · 0.8s</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24 flex flex-col gap-4 border-t border-border/60 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:items-center sm:gap-10">
            <span className="text-signal">Trusted foundation</span>
            <span>Incorporated in Dubai South Business Hub Free Zone</span>
            <span>Supported by Technostream Network</span>
          </div>
        </div>
      </section>

      <Section>
        <SectionHead
          eyebrow="01 / The Problem"
          title="Inspections are snapshots. Structures keep changing."
          lead="Periodic engineering visits capture one moment. Structra adds the continuous signal in between."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-sm border border-border bg-surface p-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Periodic inspection
            </div>
            <h3 className="mt-3 text-xl font-semibold">Blind between visits</h3>
            <ul className="mt-6 space-y-4">
              {[
                ["Periodic", "One inspection at a time, months apart."],
                ["Invisible", "Change can emerge and settle between visits."],
                ["Reactive", "Teams learn only after concern appears."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-signal/40 bg-surface-raised p-8 signal-glow">
            <div className="label-mono">Structra continuous signal</div>
            <h3 className="mt-3 text-xl font-semibold">Always-on baseline tracking</h3>
            <ul className="mt-6 space-y-4">
              {[
                ["Continuous", "Vibration captured 24/7 on every monitored asset."],
                ["Visible", "Baseline learned per structure, deviation flagged live."],
                ["Proactive", "Alerts arrive before the next scheduled visit."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-3">
                  <Waves className="mt-0.5 h-4 w-4 shrink-0 text-signal" />
                  <div>
                    <div className="text-sm font-semibold">{t}</div>
                    <div className="text-sm text-muted-foreground">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="02 / How it works"
          title="Attach a node. Learn normal. Flag change."
          lead="One closed loop turns vibration into an operator-ready signal — engineering judgment stays in the loop."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              n: "01",
              icon: Radio,
              kicker: "Structra Node",
              title: "Capture",
              body: "Wireless sensing designed for fast installation and continuous vibration capture.",
            },
            {
              n: "02",
              icon: Activity,
              kicker: "Structra Cloud",
              title: "Learn",
              body: "A secure pipeline builds each structure's baseline and flags live frequency deviation.",
            },
            {
              n: "03",
              icon: ShieldCheck,
              kicker: "Structra Dashboard",
              title: "Flag",
              body: "Unified interface for asset alerts, baseline trends, and instant anomaly investigation.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="group rounded-sm border border-border bg-surface p-8 transition-colors hover:border-signal/50"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-2xl font-semibold text-signal">{s.n}</span>
                <s.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-signal" />
              </div>
              <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                {s.kicker}
              </div>
              <h3 className="mt-2 text-2xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHead
            eyebrow="03 / Proof"
            title="We already closed the loop in the lab."
            lead="Dual MPU-6050 accelerometers on a physical truss model, controlled resonance load, and Python baseline detection with live deviation flagging."
          />
          <Link
            to="/proof"
            className="inline-flex items-center gap-2 text-sm font-semibold text-signal hover:opacity-80"
          >
            See the validation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["< 1s", "Lab response time"],
            ["100%", "Events flagged in lab"],
            ["Dual", "Simultaneous sensors"],
            ["3rd Place", "AUS Physics Competition, 50+ teams"],
          ].map(([v, l]) => (
            <div key={l} className="bg-surface p-8">
              <div className="text-3xl font-semibold text-signal">{v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-b-0">
        <div className="rounded-sm border border-border bg-surface p-10 sm:p-14">
          <div className="label-mono">04 / The ask</div>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Open pilot sites. Pilot properties start at AED 2,500.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Host a focused 90-day deployment on a prefab, parking, campus, industrial, or bridge
            asset — and see your structure's real baseline.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request a Pilot <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-accent"
            >
              Explore Pricing
            </Link>
          </div>
        </div>
      </Section>
      </div>
    </HeroTelemetry>
  );
}
