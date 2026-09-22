import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  Factory,
  Network,
  ShieldCheck,
  Sun,
  GraduationCap,
  Pill,
  Landmark,
  Compass,
  Hammer,
} from "lucide-react";
import { Section, SectionHead } from "@/components/section";
import { Link } from "@tanstack/react-router";
import technostreamLogo from "@/assets/technostream-logo.png.asset.json";
import mrshadeLogo from "@/assets/mrshade-logo.png.asset.json";

export const Route = createFileRoute("/group")({
  head: () => ({
    meta: [
      { title: "The Group | Structra" },
        {
          name: "description",
          content:
            "One group. Two sister companies — Technostream and Mr Shade ME — with Structra as the focused structural-intelligence division: their building strength, our always-on signal layer.",
        },
        { property: "og:title", content: "The Group | Structra" },
        {
          property: "og:description",
          content:
            "One group. Two sister companies. Technostream and Mr Shade ME alongside Structra's focused structural-intelligence division.",
        },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PartnersPage,
});

const groupRoles = [
  {
    icon: Landmark,
    title: "Investors",
    body: "Patient capital from operators who build for a living — funding Structra's platform, deployments, and growth.",
  },
  {
    icon: Compass,
    title: "Advisors",
    body: "Decades of engineering judgment sharpen our product, our pilots, and every structural standard we hold ourselves to.",
  },
  {
    icon: Hammer,
    title: "Builders",
    body: "Fabrication lines, installation crews, and delivery networks inside the group turn every Structra deployment into reality.",
  },
];

const partners = [
  {
    id: "technostream",
    site: "https://technostream.org",
    logo: technostreamLogo.url,
    logoAlt: "Technostream Group logo",
    name: "TECHNOSTREAM",
    kicker: "Sister company · Engineering systems",
    lead:
      "A diversified group of companies creating value across advanced construction, smart technologies, education, and healthcare.",
    body:
      "Technostream creates value across diverse sectors — from advanced construction and smart technologies to education and healthcare — and continues to expand its impact through innovation, integration, and sustainable growth. Every product is delivered end-to-end — design, fabrication, installation, and support.",
    divisions: [
      { icon: Factory, label: "Industries" },
      { icon: ShieldCheck, label: "Security & Automation" },
      { icon: GraduationCap, label: "Technical Education" },
      { icon: Pill, label: "Pharmaceuticals" },
    ],
  },
  {
    id: "mr-shade",
    site: "https://www.mistershademe.com",
    logo: mrshadeLogo.url,
    logoAlt: "Mr Shade ME logo",
    name: "MR SHADE ME",
    kicker: "Sister company · Shade structures",
    lead:
      "Engineered tensile shade products — car park canopies, PTFE membrane structures, and utility structures built to withstand the region's harshest conditions.",
    body:
      "Mr Shade ME manufactures and installs complete shade product lines: cantilever and column car park shades, architecturally tensed PTFE and PVC membrane roofs, walkway and entrance canopies, and custom utility and storage structures. Each product is engineered for wind, heat, and load from the ground up — fabricated in-house and installed with its own steel framing and anchoring systems.",
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
          eyebrow="One group · Three companies"
          title="A stronger backbone. A sharper signal."
          lead="Structra grew out of a family of engineering companies that has spent decades designing, fabricating, and delivering real structures across the region. Technostream and Mr Shade ME are our sister companies — and together we form one group. Within it, Structra is the focused structural-intelligence division: they bring the building strength, we bring the always-on signal layer."
        />

        {/* Group structure diagram */}
        <div className="relative mt-16 overflow-hidden rounded-sm border border-border bg-surface/60 px-6 py-12 sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, oklch(var(--border)) 1px, transparent 0)",
              backgroundSize: "22px 22px",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-0 h-56 w-[36rem] max-w-full -translate-x-1/2 -translate-y-1/3 rounded-full bg-signal/10 blur-3xl"
          />

          <div className="relative">
            <div className="label-mono text-center text-[10px]">Group structure</div>

            {/* Sister companies */}
            <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
              {partners.map((p) => (
                <a
                  key={p.id}
                  href={p.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.name} website (opens in a new tab)`}
                  className="flex min-h-32 flex-col items-center justify-center gap-4 rounded-sm border border-border bg-background/70 px-6 py-6 transition-colors hover:border-signal/50 focus-visible:outline-2 focus-visible:outline-signal"
                >
                  <img
                    src={p.logo}
                    alt={p.logoAlt}
                    className="h-12 w-auto max-w-full object-contain sm:h-14"
                    loading="lazy"
                  />
                  <span className="label-mono text-[9px] text-signal">Sister company</span>
                </a>
              ))}
            </div>

            <div aria-hidden className="mx-auto grid max-w-3xl grid-cols-2">
              <div className="flex justify-center"><div className="h-9 w-px bg-signal/35" /></div>
              <div className="flex justify-center"><div className="h-9 w-px bg-signal/35" /></div>
            </div>
            <div aria-hidden className="mx-auto h-px max-w-3xl bg-gradient-to-r from-transparent via-signal/45 to-transparent" />
            <div aria-hidden className="flex justify-center"><div className="h-9 w-px bg-signal/50" /></div>

            <div className="flex justify-center">
              <div className="relative flex min-h-32 flex-col items-center justify-center rounded-sm border border-signal/50 bg-background px-8 py-6 text-center shadow-[0_0_50px_-12px_oklch(var(--signal)/0.5)]">
                <div
                  aria-hidden
                  className="absolute left-1/2 top-1/2 h-20 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/15 blur-2xl"
                />
                <div className="label-mono relative text-[10px] text-signal">
                  Group division · Structural intelligence
                </div>
                <div className="relative mt-2 font-display text-2xl font-extrabold tracking-tight">
                  STRUCTRA
                </div>
                <div className="relative mt-1 text-xs text-muted-foreground">
                  Continuous signal · Engineering intelligence
                </div>
              </div>
            </div>
            <p className="label-mono mt-4 text-center text-[9px] text-muted-foreground">
              Shared group support · Focused operating division
            </p>
          </div>
        </div>

        {/* Group roles */}
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {groupRoles.map((r) => (
            <div
              key={r.title}
              className="group rounded-sm border border-border bg-surface p-7 transition-colors hover:border-signal/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-signal/30 bg-signal/10">
                <r.icon className="h-5 w-5 text-signal" />
              </div>
              <h3 className="mt-5 font-display text-lg font-bold tracking-tight">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
            </div>
          ))}
        </div>

        {/* Partner detail cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {partners.map((p) => (
            <a
              key={p.id}
              href={p.site}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${p.name} — visit website (opens in a new tab)`}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-border bg-surface transition-colors hover:border-signal/40 focus-visible:outline-2 focus-visible:outline-signal"
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
                  className="absolute left-1/2 top-1/2 h-32 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal/10 opacity-60 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
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
                <span className="label-mono mt-2 inline-flex items-center gap-1.5 text-[10px] text-signal">
                  Visit website
                  <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
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
            </a>
          ))}
        </div>

        <div className="mt-12 rounded-sm border border-border bg-surface p-10 sm:p-14">
          <div className="label-mono">Within the group</div>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold sm:text-4xl">
            Held by engineers. Built for asset owners.
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Inside the group, Structra never starts from zero. Our sister companies bring
            fabrication capacity, installation crews, and decades of field experience — we bring
            the signal layer that tells those structures how they perform. For asset owners, that
            means a single partner: the people who build the structure, and the division that keeps
            watch over it. We work with asset owners, developers, and engineering firms ready to
            host a focused 90-day pilot deployment.
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
