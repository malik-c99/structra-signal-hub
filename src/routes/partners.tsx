import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Factory, Network, ShieldCheck, Sun, GraduationCap, Pill, Smartphone } from "lucide-react";
import { Section, SectionHead } from "@/components/section";
import { Link } from "@tanstack/react-router";
import technostreamLogo from "@/assets/technostream-logo.png.asset.json";
import mrshadeLogo from "@/assets/mrshade-logo.png.asset.json";

export const Route = createFileRoute("/partners")({
  head: () => ({
    meta: [
      { title: "Keystone — Strategic Partners | Structra" },
      {
        name: "description",
        content:
          "Structra stands on a wider engineering backbone — a strategic alliance with Technostream and Mr Shade.",
      },
      { property: "og:title", content: "Keystone — Strategic Partners | Structra" },
      {
        property: "og:description",
        content: "The engineering backbone behind Structra — Technostream and Mr Shade.",
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
      "Integrated engineering and industrial products — from light-gauge-steel prefab building systems to security, automation, and smart infrastructure solutions.",
    body:
      "Technostream designs and delivers complete product systems for the built environment: turnkey LGS prefab structures engineered off-site and assembled on location, integrated security and automation installations, technical education and training programs, pharmaceutical supply, and mobile service solutions. Every product is delivered end-to-end — design, fabrication, installation, and support.",
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
      "Engineered tensile shade products — car park canopies, PTFE membrane structures, and utility structures built to withstand the region's harshest conditions.",
    body:
      "Mr Shade manufactures and installs complete shade product lines: cantilever and column car park shades, architecturally tensed PTFE and PVC membrane roofs, walkway and entrance canopies, and custom utility and storage structures. Each product is engineered for wind, heat, and load from the ground up — fabricated in-house and installed with its own steel framing and anchoring systems.",
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
                <h2 className="whitespace-nowrap font-display text-[clamp(1.1rem,5.4vw,1.875rem)] font-extrabold tracking-tight">
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
