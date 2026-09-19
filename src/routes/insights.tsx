import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/section";
import foundersMessage from "@/assets/founders-message.png.asset.json";
import qusaiFounderNote from "@/assets/qusai-founder-note.png.asset.json";
import danielFounderNote from "@/assets/daniel-founder-note.png.asset.json";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights | Structra" },
      {
        name: "description",
        content:
          "The Structra business profile: the product, the market, and the Structra Dashboard for continuous structural monitoring.",
      },
      { property: "og:title", content: "Insights | Structra" },
      {
        property: "og:description",
        content:
          "The product, the market, and the dashboard — how Structra puts always-on structural intelligence to work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsightsPage,
});

const productCards = [
  {
    tag: "01 / Structra Node",
    title: "Capture",
    body: "Wireless sensing designed for fast installation and continuous vibration capture — mounted with minimal operational disruption.",
  },
  {
    tag: "02 / Structra Cloud",
    title: "Learn",
    body: "A secure pipeline builds each structure’s baseline signature and compares behavior over time — the signal between engineering visits.",
  },
  {
    tag: "03 / Structra Dashboard",
    title: "Flag",
    body: "A focused operator view that flags live frequency deviation as it emerges — before concern appears.",
  },
];

const marketCards = [
  {
    tag: "The gap",
    title: "Inspections are snapshots",
    body: "Periodic visits, invisible change between them, and teams that learn after concern appears. Structures keep changing — Structra adds the continuous signal between engineering visits.",
  },
  {
    tag: "The position",
    title: "Property-first SHM",
    body: "Established platforms are configured around critical infrastructure and major projects. Structra starts with a single property, establishes the baseline, then repeats across the portfolio.",
  },
  {
    tag: "The pathway",
    title: "90-day pilots",
    body: "A real field pathway is already open: scope a representative structure, install wireless nodes, validate against engineer observations, then refine and scale.",
  },
];

const dashboardCards = [
  {
    tag: "Alerts",
    title: "Unified alert inbox",
    body: "Every anomaly across the portfolio lands in one focused inbox — ranked, timestamped, and traceable to the node that raised it.",
  },
  {
    tag: "Trends",
    title: "Baseline deviation charts",
    body: "Each structure carries a continuous behavioral history, so deviation is read against its own learned normal — not a generic threshold.",
  },
  {
    tag: "Asset status",
    title: "Portfolio at a glance",
    body: "One view of every monitored asset: which structures are nominal, which are trending, and which need an engineer’s eyes.",
  },
  {
    tag: "Investigation",
    title: "One-click anomaly review",
    body: "When the signal changes, jump straight into the raw vibration data behind the flag — engineering judgment stays in the loop.",
  },
];

function InsightsPage() {
  return (
    <Section className="insights-page border-b-0">
      <div className="insights-aura" aria-hidden="true" />
      <header className="insights-heading">
        <div>
          <span className="label-mono text-signal">Insights / 01</span>
          <h1>What we build. Where we play. Why we exist.</h1>
        </div>
        <p>The product, the market, and the people behind Structra.</p>
      </header>

      <section className="insights-block">
        <div className="insights-block-head">
          <span className="label-mono text-signal">02 / The product</span>
          <h2>Attach a node. Learn normal. Flag change.</h2>
          <p>
            One closed loop turns vibration into an operator-ready signal.
            Continuous signal — engineering judgment stays in the loop.
          </p>
        </div>
        <div className="insights-grid">
          {productCards.map((c) => (
            <article className="insights-card" key={c.tag}>
              <span className="label-mono text-signal">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
        <div className="insights-chips">
          <span className="label-mono">Built for</span>
          <span className="insights-chip">Commercial properties</span>
          <span className="insights-chip">Prefab assets</span>
          <span className="insights-chip">Infrastructure</span>
        </div>
      </section>

      <section className="insights-block">
        <div className="insights-block-head">
          <span className="label-mono text-signal">03 / The market</span>
          <h2>Same SHM category. A sharper entry point.</h2>
          <p>
            Structural health monitoring is an established category. Structra
            enters it from the property side — where the assets are, and where
            the continuous signal is missing.
          </p>
        </div>
        <div className="insights-grid insights-grid-market">
          {marketCards.map((c) => (
            <article className="insights-card" key={c.tag}>
              <span className="label-mono text-signal">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
        <p className="insights-market-line">
          Start small. Prove the signal. Scale across the portfolio.
        </p>
      </section>

      <section className="insights-block">
        <div className="insights-block-head">
          <span className="label-mono text-signal">04 / The dashboard</span>
          <h2>Structra Dashboard. Monitoring, in one focused view.</h2>
          <p>
            The layer your team actually opens: alerts, trends, asset status,
            and anomaly investigation — the operator surface of always-on
            structural intelligence.
          </p>
        </div>

        <div className="insights-screen" aria-hidden="true">
          <div className="insights-screen-bar">
            <span className="insights-screen-dot" />
            <span className="insights-screen-dot" />
            <span className="insights-screen-dot" />
            <span className="label-mono">STRUCTRA DASHBOARD — LIVE</span>
          </div>
          <div className="insights-screen-metrics">
            <div>
              <span className="label-mono text-signal">FREQUENCY</span>
              <strong>14.2 Hz</strong>
            </div>
            <div>
              <span className="label-mono text-signal">STRAIN</span>
              <strong>0.02%</strong>
            </div>
            <div>
              <span className="label-mono text-signal">SENSORS</span>
              <strong>100%</strong>
            </div>
            <div>
              <span className="label-mono text-signal">ALERTS</span>
              <strong>0 OPEN</strong>
            </div>
          </div>
          <svg
            className="insights-screen-wave"
            viewBox="0 0 600 80"
            preserveAspectRatio="none"
          >
            <path d="M0 40 H120 L130 40 L138 12 L146 66 L154 40 H300 L308 40 L316 18 L324 62 L332 40 H600" />
          </svg>
        </div>

        <div className="insights-grid insights-grid-dash">
          {dashboardCards.map((c) => (
            <article className="insights-card" key={c.tag}>
              <span className="label-mono text-signal">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </article>
          ))}
        </div>
      </section>

      <header className="insights-heading">
        <div>
          <span className="label-mono text-signal">05 / The founders</span>
          <h2>From the founders.</h2>
        </div>
        <p>Perspectives from the people building Structra.</p>
      </header>

      <article className="insights-feature">
        <div className="insights-feature-rail" aria-hidden="true">
          <span>FOUNDERS’ MESSAGE</span>
          <span>01 / STRUCTRA</span>
        </div>
        <img
          src={foundersMessage.url}
          alt="Founders’ message from Qusai Al Daour and Daniel Shihat: Two perspectives. One direction."
          className="insights-feature-image"
        />
      </article>

      <div className="insights-duo">
        <article className="insights-feature insights-note">
          <div className="insights-feature-rail" aria-hidden="true">
            <span>FOUNDER NOTE</span>
            <span>02 / QUSAI AL DAOUR</span>
          </div>
          <img
            src={qusaiFounderNote.url}
            alt="A personal note from Qusai Al Daour, Co-Founder & CEO — “The confidence to begin.”"
            className="insights-feature-image"
          />
        </article>

        <article className="insights-feature insights-note">
          <div className="insights-feature-rail" aria-hidden="true">
            <span>FOUNDER NOTE</span>
            <span>03 / DANIEL SHIHAT</span>
          </div>
          <img
            src={danielFounderNote.url}
            alt="A personal note from Daniel Shihat, Co-Founder & CTO — “Structra is personal to me.”"
            className="insights-feature-image"
          />
        </article>
      </div>
    </Section>
  );
}
