import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHead } from "@/components/section";
import daniel from "@/assets/daniel.png.asset.json";
import qusai from "@/assets/qusai-photo.jpg.asset.json";
import mahdi from "@/assets/mahdi-alsalahat.jpg.asset.json";
import abdullah from "@/assets/abdullah-ishraq-2.jpg.asset.json";
import adham from "@/assets/adham-elbahaa.jpg.asset.json";
import abdulmaliik from "@/assets/abdulmaliik-chaqif.jpg.asset.json";
import karim from "@/assets/karim-yacoub.jpg.asset.json";

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
  { photo: karim.url, name: "Karim Yacoub", role: "Operations Intern", bio: null },
];

function BoardPage() {
  return (
    <div className="board-page">
      <Section className="board-leadership-section">
        <div className="board-title-rail">
          <div className="inline-flex items-center gap-2.5 border border-signal/40 bg-signal/10 px-4 py-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-2 w-2 rounded-full bg-signal pulse-ring" />
              <span className="h-2 w-2 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[11px] font-medium uppercase text-signal">
              Youth-led
            </span>
          </div>
          <span className="board-registry-code">GOV / 01</span>
        </div>
        <SectionHead
          eyebrow="Leadership registry"
          title="Built to ship the stack — and unlock the sites."
          lead="A youth-led founding team pairing sensing hardware and structural physics with field access in Dubai — young engineers building institutional-grade monitoring."
        />

        <div className="board-founders mt-14">
          {leaders.map((m, index) => (
            <article
              key={m.name}
              className="board-founder group"
            >
              <div className="board-founder-portrait">
                <img
                  src={m.photo}
                  alt={`${m.name}, ${m.role} at Structra`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                />
                <span className="board-founder-index">0{index + 1}</span>
                <div className="board-founder-scan" />
              </div>
              <div className="board-founder-copy">
                <div className="board-founder-role">{m.role}</div>
                <h3>{m.name}</h3>
                <div className="board-founder-tag">
                  <span className="h-1.5 w-1.5 bg-signal shadow-signal" />
                  {m.tag}
                </div>
                <p>{m.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="board-cohort-section border-b-0">
        <div className="board-cohort-heading">
          <SectionHead
            eyebrow="Cohort / 05"
            title="Structra Interns"
            lead="Youth-led, hands-on — one team, one vision: learning, building, and shaping the future of structural engineering together."
          />
          <div className="board-cohort-status" aria-hidden="true">
            <span>ACTIVE ROSTER</span>
            <strong>05</strong>
          </div>
        </div>
        <div className="board-interns mt-12">
          {interns.map((intern, index) => (
            <article
              key={intern.name}
              className="board-intern group"
            >
              <div className="board-intern-image">
                <img
                  src={intern.photo}
                  alt={`${intern.name}, ${intern.role} at Structra`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-500"
                />
                <span>0{index + 1}</span>
              </div>
              <div className="board-intern-copy">
                <h3>{intern.name}</h3>
                <div>{intern.role}</div>
              </div>
            </article>
          ))}
        </div>
        <p className="board-cohort-footer">
          With many more coming soon
        </p>
      </Section>
    </div>
  );
}
