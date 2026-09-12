import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHead } from "@/components/section";
import daniel from "@/assets/daniel.png.asset.json";
import ammar from "@/assets/ammar.jpg.asset.json";
import qusai from "@/assets/qusai.jpg.asset.json";
import intern1 from "@/assets/interns-1.jpg.asset.json";
import intern2 from "@/assets/interns-2.jpg.asset.json";
import intern3 from "@/assets/interns-3.jpg.asset.json";
import intern4 from "@/assets/interns-4.jpg.asset.json";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Team & Leadership | Structra" },
      {
        name: "description",
        content:
          "Meet the Structra leadership team building continuous structural intelligence — engineering, structural validation, research, and partnerships.",
      },
      { property: "og:title", content: "Team & Leadership | Structra" },
      {
        property: "og:description",
        content: "Built to ship the stack — and unlock the sites.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TeamPage,
});

const leaders = [
  {
    photo: daniel.url,
    name: "Daniel Shihat",
    role: "Founder & CTO",
    tag: "Forward Deployed Engineer · Technical Strategy",
    body: "Hardware architecture, sensing algorithms, and the technical roadmap.",
  },
  {
    photo: qusai.url,
    name: "Qusai Al Daour",
    role: "Founding Partner, CEO & Head of PR",
    tag: "Industry partnerships · Pilot deployments",
    body: "Industry partners, pilot deployments, and site relationships.",
  },
];

const ammarProfile = {
  photo: ammar.url,
  name: "Ammar Alalawi",
  role: "Civil Engineering Lead - Intern",
  tag: "Structural Validation & Failure Physics",
  body: "Structural validation, failure modes, and engineering physics.",
};

const internPhotos = [intern1.url, intern2.url, intern3.url, intern4.url];

function TeamPage() {
  return (
    <>
      <Section>
        <SectionHead
          eyebrow="Team"
          title="Built to ship the stack — and unlock the sites."
          lead="A founding team pairing sensing hardware and structural physics with field access in Dubai."
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
        <SectionHead
          eyebrow="Interns & growth"
          title="Structra Interns"
          lead="One team, one vision — learning, building, and shaping the future of structural engineering together."
        />
        <div className="mx-auto mt-12 w-full max-w-xs">
          <article className="overflow-hidden rounded-sm border border-border bg-surface">
            <div className="h-1 w-full bg-signal/70" />
            <img
              src={ammarProfile.photo}
              alt={`${ammarProfile.name}, ${ammarProfile.role} at Structra`}
              loading="lazy"
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold">{ammarProfile.name}</h3>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
                {ammarProfile.role}
              </div>
              <p className="mt-4 text-xs text-muted-foreground">{ammarProfile.tag}</p>
              <p className="mt-4 border-t border-border pt-4 text-sm text-muted-foreground">
                {ammarProfile.body}
              </p>
            </div>
          </article>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {internPhotos.map((photo, i) => (
            <figure
              key={photo}
              className="group aspect-square overflow-hidden rounded-sm border border-border bg-surface"
            >
              <div className="h-1 w-full bg-signal/70" />
              <img
                src={photo}
                alt={`Structra interns collaborating on site, photo ${i + 1}`}
                loading="lazy"
                className="h-[calc(100%-0.25rem)] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </figure>
          ))}
        </div>
        <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          With many more coming soon
        </p>
      </Section>
    </>
  );
}