import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHead } from "@/components/section";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Structra" },
      {
        name: "description",
        content:
          "How Structra collects, uses, and protects structural monitoring data and contact information.",
      },
      { property: "og:title", content: "Privacy Policy | Structra" },
      {
        property: "og:description",
        content: "Structra's approach to monitoring data, retention, and contact information.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section className="border-b-0">
      <SectionHead
        eyebrow="Legal"
        title="Privacy Policy"
        lead="How we handle monitoring data and the information you share with us."
      />
      <div className="mt-12 max-w-3xl space-y-8 text-sm leading-relaxed text-muted-foreground">
        {[
          [
            "Information we collect",
            "Contact details submitted through the pilot application form (name, work email, company, role, asset type, and message), and structural telemetry captured by deployed Structra nodes on assets you own or operate.",
          ],
          [
            "How we use it",
            "To evaluate and coordinate pilot deployments, build and compare each structure's vibration baseline, and communicate alerts and findings to authorised contacts.",
          ],
          [
            "Sharing",
            "Monitoring data is not sold. It is shared only with people you authorise, and with service providers strictly needed to operate the platform.",
          ],
          [
            "Retention",
            "Asset telemetry is retained for the life of the monitoring agreement so baselines remain meaningful. Contact records are retained until you ask us to remove them.",
          ],
          [
            "Contact",
            "For access, correction, or deletion requests, write to hello@getstructra.com. Structra is incorporated in Dubai South Business Hub Free Zone.",
          ],
        ].map(([t, d]) => (
          <section key={t}>
            <h2 className="text-lg font-semibold text-foreground">{t}</h2>
            <p className="mt-2">{d}</p>
          </section>
        ))}
      </div>
    </Section>
  );
}
