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
          <h1>From the founders.</h1>
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

      <article className="insights-feature">
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
    </Section>
  );
}