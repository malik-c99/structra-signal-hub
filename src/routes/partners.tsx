import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Factory, Network, ShieldCheck, Sun, GraduationCap, Pill, Smartphone } from "lucide-react";
import { Section, SectionHead } from "@/components/section";
import { Link } from "@tanstack/react-router";
import technostreamLogo from "@/assets/technostream-logo.png.asset.json";
import mrshadeLogo from "@/assets/mrshade-logo.png.asset.json";

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
    logo: technostreamLogo.url,
    logoAlt: "Technostream Group logo",
    name: "TECHNOSTREAM",
    kicker: "Sister company · Engineering group",
    lead:
      "A diversified engineering group delivering integrated industrial, engineering, technology, and healthcare solutions across the UAE and Saudi Arabia.",
    body:
      "Technostream's divisions span light-gauge-steel (LGS) prefab construction, security and automation systems, technical education and training, pharmaceuticals, and mobile services. Its industrial division's prefab and LGS expertise is a natural fit with Structra's prefab monitoring focus, while the group's engineering depth gives Structra an operational backbone across the region.",
    divisions: [
      { icon: Factory, label: "Industries" },
      { icon: ShieldCheck, label: "Security & Automation" },
      { icon: GraduationCap, label: "Technical Education" },
      { icon: Pill, label: "Pharmaceuticals" },
      { icon: Smartphone, label: "Mobile Services" },
    ],
  },
  {
    id: "mr-shade",
    logo: mrshadeLogo.url,
    logoAlt: "Mister Shade ME logo",
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

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {partners.map((p) => (
            <article
              key={p.id}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-surface transition-colors hover:border-signal/40"
            >
              {/* Logo panel */}
              <div className="relative flex h-44 items-center justify-center border-b border-border bg-background/60 px-10">
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-[0.35]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, oklch(var(--border)) 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div
                  aria-hidden
                  className="absolute left-1/2 top-1/2 h-32 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-60"
                />
                <img
                  src={p.logo}
                  alt={p.logoAlt}
                  className="relative h-16 w-auto max-w-full object-contain sm:h-20"
                  loading="lazy"
                />
                <span className="label-mono absolute left-4 top-4 text-[10px]">{p.kicker}</span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-8 sm:p-10">
                <h2 className="break-words font-display text-xl font-extrabold tracking-tight sm:text-3xl">
                  {p.name}
                </h2>
                <p className="mt-4 text-base text-foreground/90">{p.lead}</p>
                <p className="mt-4 text-sm text-muted-foreground">{p.body}</p>

                <div className="mt-auto flex flex-wrap gap-2 pt-8">
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
