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
        content: "Read the founders’ message from Structra — two perspectives, one direction.",
      },
      { property: "og:title", content: "Insights | Structra" },
      {
        property: "og:description",
        content: "Two perspectives. One direction. A message from Structra’s founders.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsightsPage,
});

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
          <article className="insights-card">
            <span className="label-mono text-signal">01 / Structra Node</span>
            <h3>Capture</h3>
            <p>
              Wireless sensing designed for fast installation and continuous
              vibration capture on commercial properties, prefab assets, and
              infrastructure.
            </p>
          </article>
          <article className="insights-card">
            <span className="label-mono text-signal">02 / Structra Cloud</span>
            <h3>Learn</h3>
            <p>
              A secure pipeline builds each structure’s baseline and compares
              behavior over time — the signal between engineering visits.
            </p>
          </article>
          <article className="insights-card">
            <span className="label-mono text-signal">03 / Structra Dashboard</span>
            <h3>Flag</h3>
            <p>
              A focused view of alerts, trends, asset status, and anomaly
              investigation — so teams learn before concern appears.
            </p>
          </article>
        </div>
      </section>

      <section className="insights-block">
        <div className="insights-block-head">
          <span className="label-mono text-signal">03 / The market</span>
          <h2>Same SHM category. A sharper entry point.</h2>
          <p>
            Established platforms are configured around critical infrastructure
            and major projects. Structra is property-first: start with one
            property, establish the baseline, then repeat across the portfolio.
          </p>
        </div>
        <div className="insights-grid insights-grid-market">
          <article className="insights-card">
            <span className="label-mono text-signal">The gap</span>
            <h3>Inspections are snapshots</h3>
            <p>
              Periodic visits, invisible change between them, and teams that
              learn after concern appears. Structures keep changing — Structra
              adds the continuous signal between engineering visits.
            </p>
          </article>
          <article className="insights-card">
            <span className="label-mono text-signal">The position</span>
            <h3>Property-first SHM</h3>
            <p>
              Where incumbents sell configured project systems and broad sensor
              suites, Structra starts with a single property and proves the
              signal before scaling.
            </p>
          </article>
          <article className="insights-card">
            <span className="label-mono text-signal">The pathway</span>
            <h3>90-day pilots</h3>
            <p>
              A real field pathway is already open: scope a representative
              structure, install wireless nodes, validate against engineer
              observations, then refine and scale.
            </p>
          </article>
        </div>
        <p className="insights-market-line">
          Start small. Prove the signal. Scale across the portfolio.
        </p>
      </section>

      <header className="insights-heading">
        <div>
          <span className="label-mono text-signal">04 / The founders</span>
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