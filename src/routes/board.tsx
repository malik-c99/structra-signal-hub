import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHead } from "@/components/section";
import daniel from "@/assets/daniel.png.asset.json";
import ammar from "@/assets/ammar.jpg.asset.json";
import qusai from "@/assets/qusai.jpg.asset.json";
import mahdi from "@/assets/mahdi-alsalahat.jpg.asset.json";
import intern2 from "@/assets/interns-2.jpg.asset.json";
import intern3 from "@/assets/interns-3.jpg.asset.json";
import intern4 from "@/assets/interns-4.jpg.asset.json";

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
    role: "Cofounder & CEO",
    tag: "Operations · Strategy · Growth",
    body: "Runs the business end to end — operations, commercial strategy, partnerships, and pilot deployments that keep Structra growing.",
  },
  {
    photo: daniel.url,
    name: "Daniel Shihat",
    role: "Cofounder & CTO",
    tag: "Product · Engineering · Technical Strategy",
    body: "Leads the product — from sensing hardware and monitoring software to the engineering that powers every Structra deployment.",
  },
];

const ammarProfile = {
  photo: ammar.url,
  name: "Ammar Alalawi",
  role: "Civil Engineering Lead - Intern",
  tag: "Structural Validation & Failure Physics",
  body: "Structural validation, failure modes, and engineering physics.",
};

const interns = [
  {
    photo: mahdi.url,
    name: "Mahdi Alsalahat",
    role: "Engineering",
    bio: null,
  },
  { photo: intern2.url, name: "Intern 02", role: null, bio: "Personal photo and bio coming soon." },
  { photo: intern3.url, name: "Intern 03", role: null, bio: "Personal photo and bio coming soon." },
  { photo: intern4.url, name: "Intern 04", role: null, bio: "Personal photo and bio coming soon." },
];

function BoardPage() {
  return (
    <>
      <Section>
        <SectionHead
          eyebrow="The Board"
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
          <article className="group overflow-hidden rounded-sm border border-border bg-surface">
            <div className="h-1 w-full bg-signal/70" />
            <img
              src={ammarProfile.photo}
              alt={`${ammarProfile.name}, ${ammarProfile.role} at Structra`}
              loading="lazy"
              className="aspect-square w-full object-cover"
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

        <div className="mx-auto mt-6 grid w-full max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {internPhotos.map((photo, i) => (
            <article
              key={photo}
              className="group overflow-hidden rounded-sm border border-border bg-surface"
            >
              <div className="h-1 w-full bg-signal/70" />
              <img
                src={photo}
                alt={`Structra intern profile slot ${i + 1}`}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-5">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                  Intern {String(i + 1).padStart(2, "0")}
                </h3>
                <p className="mt-3 border-t border-border pt-3 text-xs text-muted-foreground">
                  Personal photo and bio coming soon.
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
