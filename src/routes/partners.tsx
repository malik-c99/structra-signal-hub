import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Factory, Network, ShieldCheck, Sun, GraduationCap, Pill, Smartphone } from "lucide-react";
import { Section, SectionHead } from "@/components/section";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Partners & Sister Companies | Structra" },
      {
        name: "description",
        content:
          "Structra operates within a wider engineering network — sister companies Technostream and Mr Shade.",
      },
      { property: "og:title", content: "Partners & Sister Companies | Structra" },
      {
        property: "og:description",
        content: "Meet Technostream and Mr Shade — the sister companies behind the Structra network.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});

const partners = [
  {
    id: "technostream",
    name: "TECHNOSTREAM",
    kicker: "Sister company · Engineering group",
    lead:
      "A diversified engineering group headquartered in Dubai, delivering integrated industrial, engineering, technology, and healthcare solutions across the UAE and Saudi Arabia.",
    body:
      "Technostream's divisions span light-gauge-steel (LGS) prefab construction, security and automation systems, technical education and training, pharmaceuticals, and mobile services. Its industrial division's prefab and LGS expertise is a natural fit with Structra's prefab monitoring focus, while the group's engineering depth gives Structra an operational backbone across the region.",
    divisions: [
      { icon: Factory, label: "Industries" },
      { icon: ShieldCheck, label: "Security & Automation" },
      { icon: GraduationCap, label: "Technical Education" },
      { icon: Pill, label: "Pharmaceuticals" },
      { icon: Smartphone, label: "Mobile Services" },
    ],
    points: [
      ["Headquarters", "Dubai, United Arab Emirates"],
      ["Footprint", "UAE and Saudi Arabia"],
      ["Focus", "Industrial, engineering, technology, healthcare"],
    ],
  },
  {
    id: "mr-shade",
    name: "MR SHADE",
    kicker: "Sister company · Shade structures",
    lead:
      "A Middle East pioneer in tensile shade structures, established in 1996 — specialists in car park canopies, PTFE membrane structures, and utility structures across the region.",
    body:
      "From its base in the UAE, Mr Shade has designed and delivered shade and canopy structures across the UAE, Oman, Qatar, and Africa — for clients including government entities and major developers. Every shade structure is a steel structure exposed to wind, heat, and load cycles, which makes it a natural proving ground for Structra's continuous monitoring approach.",
    divisions: [
      { icon: Sun, label: "Car Park Shades" },
      { icon: Network, label: "PTFE Membrane Structures" },
      { icon: Factory, label: "Utility Structures" },
    ],
    points: [
      ["Established", "1996"],
      ["Footprint", "UAE, Oman, Qatar, Africa"],
      ["Focus", "Tensile and steel shade structures"],
    ],
  },
];

function PartnersPage() {
  return (
    <>
      <Section className="border-b-0">
        <SectionHead
          eyebrow="The network"
          title="Built on a wider engineering network."
          lead="Structra doesn't operate alone. Two sister companies — Technostream and Mr Shade — provide the engineering depth, fabrication capability, and regional delivery experience behind our always-on monitoring platform."
        />

        <div className="mt-14 space-y-8">
          {partners.map((p) => (
            <article
              key={p.id}
              className="rounded-sm border border-border bg-surface p-8 transition-colors hover:border-signal/40 sm:p-12"
            >
              <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
                <div>
                  <div className="label-mono">{p.kicker}</div>
                  <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {p.name}
                  </h2>
                  <p className="mt-5 text-base text-foreground/90">{p.lead}</p>
                  <p className="mt-4 text-sm text-muted-foreground">{p.body}</p>

                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.divisions.map((d) => (
                      <span
                        key={d.label}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs text-muted-foreground"
                      >
                        <d.icon className="h-3.5 w-3.5 text-signal" />
                        {d.label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-sm border border-border bg-surface-raised p-6 sm:p-8">
                  <div className="label-mono">At a glance</div>
                  <ul className="mt-5 space-y-5">
                    {p.points.map(([label, value]) => (
                      <li key={label} className="border-l border-signal/50 pl-4">
                        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          {label}
                        </div>
                        <div className="mt-1 text-sm font-semibold">{value}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-sm border border-border bg-surface p-10 sm:p-14">
          <div className="label-mono">Partner with Structra</div>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Bring continuous monitoring to your network.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            We work with asset owners, developers, and engineering firms ready to host a focused
            90-day pilot deployment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Request a Pilot <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
