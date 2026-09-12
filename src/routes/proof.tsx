import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, ArrowRight } from "lucide-react";
import { Section, SectionHead } from "@/components/section";

export const Route = createFileRoute("/proof")({
  head: () => ({
    meta: [
      { title: "Proof — Lab-Validated Anomaly Detection | Structra" },
      {
        name: "description",
        content:
          "Dual MPU-6050 accelerometers on a physical truss model, sub-second response, and 100% of lab events flagged. 3rd place of 50+ teams at the AUS Physics Competition.",
      },
      { property: "og:title", content: "Proof — Lab-Validated Anomaly Detection | Structra" },
      {
        property: "og:description",
        content: "Sensed, compared, detected, alerted — the loop already closed in the lab.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProofPage,
});

function ProofPage() {
  return (
    <>
      <Section>
        <SectionHead
          eyebrow="Proof"
          title="We already closed the loop in the lab."
          lead="AUS Physics Lab demo: sensed → compared → detected → alerted."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
          {[
            ["Dual", "Simultaneous MPU-6050 sensors"],
            ["< 1s", "Lab response time"],
            ["100%", "Events flagged in lab"],
          ].map(([v, l]) => (
            <div key={l} className="bg-surface p-8">
              <div className="text-4xl font-semibold text-signal">{v}</div>
              <div className="mt-2 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {[
            [
              "Hardware",
              "Dual MPU-6050 accelerometers mounted on a physical truss bridge model.",
            ],
            ["Load", "DC motor generating controlled resonance frequencies."],
            ["Software", "Python baseline detection with live deviation flagging."],
            ["Output", "Real-time anomaly alerts when the vibration signature changed."],
          ].map(([t, d]) => (
            <div key={t} className="rounded-sm border border-border bg-surface p-8">
              <div className="label-mono">{t}</div>
              <p className="mt-3 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col items-start gap-5 rounded-sm border border-signal/40 bg-surface-raised p-8 signal-glow sm:flex-row sm:items-center">
          <Award className="h-10 w-10 shrink-0 text-signal" />
          <div>
            <div className="text-2xl font-semibold">3rd Place · AUS Physics Competition</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Out of 50+ competing teams, with a working sensing-to-alert pipeline.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Pilot pathway"
          title="A real field pathway is already open."
          lead="Working with a prefab manufacturer serving Sobha Realty and other major clients."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Scope", "Active", "Select a representative prefab structure and align monitoring objectives."],
            ["02", "Install", "Next", "Mount wireless nodes with minimal operational disruption."],
            ["03", "Validate", "90 days", "Learn the baseline and compare against engineer observations."],
            ["04", "Refine + Scale", "Future", "Use field data to refine hardware, analytics, and the commercial playbook."],
          ].map(([n, t, s, d]) => (
            <div key={n} className="rounded-sm border border-border bg-surface p-7">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl font-semibold text-signal">{n}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {s}
                </span>
              </div>
              <div className="mt-6 text-lg font-semibold">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-b-0">
        <div className="flex flex-col items-start gap-4 rounded-sm border border-border bg-surface p-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-lg font-semibold">Bring the loop to your asset.</p>
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
