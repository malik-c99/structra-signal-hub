import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHead } from "@/components/section";
import daniel from "@/assets/daniel.png.asset.json";
import qusai from "@/assets/qusai-photo.jpg.asset.json";
import mahdi from "@/assets/mahdi-alsalahat.jpg.asset.json";
import abdullah from "@/assets/abdullah-ishraq-2.jpg.asset.json";
import adham from "@/assets/adham-elbahaa.jpg.asset.json";
import abdulmaliik from "@/assets/abdulmaliik-chaqif.jpg.asset.json";

export const Route = createFileRoute("/board")({
  head: () => ({
    meta: [
      { title: "The Board | Structra" },
      {
        name: "description",
        content:
          "Meet the Structra board and leadership building continuous structural intelligence — engineering, structural validation, research, and partnerships.",
      },
      { property: "og:title", content: "The Board | Structra" },
      {
        property: "og:description",
        content: "Built to ship the stack — and unlock the sites.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BoardPage,
});

const leaders = [
  {
    photo: qusai.url,
    name: "Qusai Al Daour",
    role: "Co-Founder & CEO",
    tag: "Operations · Strategy · Growth",
    body: "Runs the business end to end — operations, commercial strategy, partnerships, and pilot deployments that keep Structra growing.",
  },
  {
    photo: daniel.url,
    name: "Daniel Shihat",
    role: "Co-Founder & CTO",
    tag: "Product · Engineering · Technical Strategy",
    body: "Leads the product — from sensing hardware and monitoring software to the engineering that powers every Structra deployment.",
  },
];


const interns = [
  {
    photo: mahdi.url,
    name: "Mahdi Alsalahat",
    role: "Engineering",
    bio: null,
  },
  { photo: abdullah.url, name: "Abdullah Ishraq", role: "Software", bio: null },
  { photo: adham.url, name: "Adham Elbahaa", role: "Software", bio: null },
  { photo: abdulmaliik.url, name: "Abdulmaliik Chaqif", role: "Software", bio: null },
];

function BoardPage() {
  return (
    <>
      <Section>
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-sm border border-signal/40 bg-signal/10 px-4 py-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute h-2 w-2 rounded-full bg-signal pulse-ring" />
            <span className="h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-signal">
            Youth-led
          </span>
        </div>
        <SectionHead
          eyebrow="The Board"
          title="Built to ship the stack — and unlock the sites."
          lead="A youth-led founding team pairing sensing hardware and structural physics with field access in Dubai — young engineers building institutional-grade monitoring."
        />


        <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {leaders.map((m) => (
            <article
              key={m.name}
              className="group overflow-hidden rounded-sm border border-border bg-surface transition-colors hover:border-signal/50"
            >
              <div className="h-1 w-full bg-signal/70" />
              <img
                src={m.photo}
                alt={`${m.name}, ${m.role} at Structra`}
                loading="lazy"
                className="aspect-square w-full object-cover transition-all duration-500"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{m.name}</h3>
                <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                  {m.role}
                </div>
                <p className="mt-4 text-xs text-muted-foreground">{m.tag}</p>
                <p className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
                  {m.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="border-b-0">
        <div className="mb-6 inline-flex items-center gap-2.5 rounded-sm border border-signal/40 bg-signal/10 px-4 py-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute h-2 w-2 rounded-full bg-signal pulse-ring" />
            <span className="h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-signal">
            Youth-led
          </span>
        </div>
        <SectionHead
          eyebrow="Interns & growth"
          title="Structra Interns"

          lead="Youth-led, hands-on — one team, one vision: learning, building, and shaping the future of structural engineering together."
        />
        <div className="mx-auto mt-12 grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {interns.map((intern) => (
            <article
              key={intern.name}
              className="group overflow-hidden rounded-sm border border-border bg-surface"
            >
              <div className="h-1 w-full bg-signal/70" />
              <img
                src={intern.photo}
                alt={
                  intern.role
                    ? `${intern.name}, ${intern.role} at Structra`
                    : `Structra intern profile slot ${intern.name}`
                }
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h3
                  className={
                    intern.role
                      ? "text-base font-semibold"
                      : "font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground"
                  }
                >
                  {intern.name}
                </h3>
                {intern.role ? (
                  <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                    {intern.role}
                  </div>
                ) : null}
                <p className="mt-3 border-t border-border pt-3 text-xs text-muted-foreground">
                  {intern.bio ?? " "}
                </p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          With many more coming soon
        </p>
      </Section>
    </>
  );
}
