import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Section, SectionHead } from "@/components/section";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Nodes, Activation & Monitoring | Structra" },
      {
        name: "description",
        content:
          "Transparent SHM pricing: $200 per node with volume discounts, $750+ site activation, and monitoring from $55/month. Pilot properties start at AED 2,500.",
      },
      { property: "og:title", content: "Pricing — Nodes, Activation & Monitoring | Structra" },
      {
        property: "og:description",
        content:
          "Priced for the middle 90%. Start with one property, prove the signal, then scale across the portfolio.",
      },
    ],
  }),
  component: PricingPage,
});

function nodeUnitPrice(n: number) {
  if (n >= 50) return 165;
  if (n >= 10) return 185;
  return 200;
}

function monthlyPrice(n: number) {
  if (n <= 4) return 55;
  if (n <= 8) return 95;
  if (n <= 16) return 165;
  return 0;
}

function PricingPage() {
  const [nodes, setNodes] = useState(4);
  const activation = 750;

  const calc = useMemo(() => {
    const unit = nodeUnitPrice(nodes);
    const hardware = unit * nodes;
    const monthly = monthlyPrice(nodes);
    return {
      unit,
      hardware,
      upfront: hardware + activation,
      monthly,
      yearOne: hardware + activation + monthly * 12,
    };
  }, [nodes]);

  return (
    <>
      <Section>
        <SectionHead
          eyebrow="Client pricing"
          title="Priced for the middle 90%."
          lead="Quote the node as equipment, not the entire solution. Pilot properties start at AED 2,500."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <Tier
            n="01"
            kicker="Structra Node"
            label="Public list price"
            price="$200"
            unit="per node"
            body="Volume pricing: $185 at 10+ nodes and $165 at 50+ nodes."
          />
          <Tier
            n="02"
            kicker="Site Activation"
            label="One-time"
            price="$750+"
            unit="gateway + install"
            body="Gateway hardware, mounting, commissioning, and connectivity setup. A typical four-node property is $1,550 upfront."
          />
          <Tier
            n="03"
            kicker="Monitoring SaaS"
            label="Recurring"
            price="$55"
            unit="property / month"
            body="For 1–4 nodes. $95/month for 5–8 nodes and $165/month for 9–16 nodes. Larger portfolios are quoted by site."
            highlight
          />
        </div>
      </Section>

      <Section>
        <SectionHead
          eyebrow="Estimate"
          title="Size your deployment."
          lead="Move the slider to see node volume pricing, activation, and recurring monitoring for one property."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-sm border border-border bg-surface p-8">
            <div className="flex items-baseline justify-between">
              <span className="label-mono">Nodes on site</span>
              <span className="font-mono text-3xl font-semibold text-signal">{nodes}</span>
            </div>
            <input
              type="range"
              min={1}
              max={60}
              value={nodes}
              onChange={(e) => setNodes(Number(e.target.value))}
              aria-label="Number of nodes"
              className="mt-8 w-full accent-[var(--signal)]"
            />
            <div className="mt-3 flex justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span>1</span>
              <span>60</span>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Node unit price at this volume:{" "}
              <span className="font-semibold text-foreground">${calc.unit}</span>
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            <Cell label="Node hardware" value={`$${calc.hardware.toLocaleString()}`} />
            <Cell label="Site activation" value={`$${activation.toLocaleString()}`} />
            <Cell label="Upfront total" value={`$${calc.upfront.toLocaleString()}`} accent />
            <Cell
              label="Monitoring / month"
              value={calc.monthly ? `$${calc.monthly}` : "Quoted by site"}
            />
            <div className="bg-surface p-7 sm:col-span-2">
              <div className="label-mono">Year one total</div>
              <div className="mt-2 text-3xl font-semibold">
                {calc.monthly ? `$${calc.yearOne.toLocaleString()}` : "Contact us"}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Indicative estimate. Portfolios above 16 nodes per property are quoted by site.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start gap-4 rounded-sm border border-signal/40 bg-surface-raised p-8 signal-glow sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="label-mono">Pilot properties</div>
            <div className="mt-2 text-2xl font-semibold">Start at AED 2,500</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Standard 4-node site: $2,210 year one / $660 recurring.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm bg-signal px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request a Pilot <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      <Section className="border-b-0">
        <SectionHead
          eyebrow="Competitive position"
          title="Public quotes: $26K+. Structra: AED 2,500."
          lead="Same SHM category, a sharper entry point. Public contracts; scopes differ; not list prices."
        />
        <div className="mt-12 overflow-x-auto rounded-sm border border-border">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="bg-surface-raised">
                {["Provider", "Category", "Entry point", "Notes"].map((h) => (
                  <th
                    key={h}
                    className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "Structra",
                  "Property-first SHM",
                  "From AED 2,500",
                  "Start with one property, establish the baseline, then repeat across the portfolio.",
                ],
                [
                  "Siemens",
                  "Building X / Desigo CC",
                  "$34K–$38K per year",
                  "Public BAS service contract on an installed system.",
                ],
                [
                  "Honeywell",
                  "Forge / BMS controls",
                  "$58K–$287K per upgrade",
                  "$108K/year service; $932K multi-building package.",
                ],
                [
                  "Johnson Controls",
                  "Metasys BMS / OpenBlue",
                  "$26K–$89K public quotes",
                  "Metasys tie-in through full building hardware upgrade.",
                ],
              ].map(([a, b, c, d], i) => (
                <tr
                  key={a}
                  className={`border-t border-border ${i === 0 ? "bg-surface-raised" : "bg-surface"}`}
                >
                  <td
                    className={`px-6 py-5 text-sm font-semibold ${i === 0 ? "text-signal" : ""}`}
                  >
                    {a}
                  </td>
                  <td className="px-6 py-5 text-sm text-muted-foreground">{b}</td>
                  <td className="px-6 py-5 text-sm font-semibold">{c}</td>
                  <td className="px-6 py-5 text-sm text-muted-foreground">{d}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Sources: Evanston, St. Petersburg, Hidalgo County, Schaumburg public contracts.
        </p>
      </Section>
    </>
  );
}

function Tier({
  n,
  kicker,
  label,
  price,
  unit,
  body,
  highlight,
}: {
  n: string;
  kicker: string;
  label: string;
  price: string;
  unit: string;
  body: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-sm border p-8 ${highlight ? "border-signal/40 bg-surface-raised signal-glow" : "border-border bg-surface"}`}
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-sm text-signal">{n}</span>
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </span>
      </div>
      <div className="mt-6 text-sm font-semibold uppercase tracking-wide">{kicker}</div>
      <div className="mt-4 flex items-end gap-2">
        <span className="text-4xl font-semibold">{price}</span>
        <span className="pb-1 text-xs uppercase tracking-wide text-muted-foreground">{unit}</span>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}

function Cell({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="bg-surface p-7">
      <div className="label-mono">{label}</div>
      <div className={`mt-2 text-2xl font-semibold ${accent ? "text-signal" : ""}`}>{value}</div>
    </div>
  );
}
