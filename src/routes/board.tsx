import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHead } from "@/components/section";
import daniel from "@/assets/daniel.png.asset.json";
import qusai from "@/assets/qusai-photo.jpg.asset.json";
import mahdi from "@/assets/mahdi-alsalahat.jpg.asset.json";
import abdullah from "@/assets/abdullah-ishraq-2.jpg.asset.json";
import adham from "@/assets/adham-elbahaa.jpg.asset.json";
import abdulmaliik from "@/assets/abdulmaliik-chaqif.jpg.asset.json";
import karim from "@/assets/karim-yacoub.jpg.asset.json";
import yousef from "@/assets/yousef-zouaoui.jpg.asset.json";

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
  },
  {
    photo: daniel.url,
    name: "Daniel Shihat",
    role: "Co-Founder & CTO",
  },
];


const interns = [
  {
    photo: mahdi.url,
    name: "Mahdi Alsalahat",
    role: "Engineering Intern",
    bio: null,
  },
  { photo: abdullah.url, name: "Abdullah Ishraq", role: "Software Intern", bio: null },
  { photo: adham.url, name: "Adham Elbahaa", role: "Software Intern", bio: null },
  { photo: abdulmaliik.url, name: "Abdulmaliik Chaqif", role: "Software Intern", bio: null },
  { photo: karim.url, name: "Karim Yacoub", role: "Operations Intern", bio: null },
  { photo: yousef.url, name: "Yousef Zouaoui", role: "Contracts Intern", bio: null },
];

function BoardPage() {
  return (
    <div className="board-page">
      <Section className="board-leadership-section">
        <div className="board-aura board-aura-one" aria-hidden="true" />
        <div className="board-aura board-aura-two" aria-hidden="true" />
        <div className="board-command-heading">
          <span className="board-command-kicker">People behind the signal</span>
          <h1>Structra <span>Board</span></h1>
          <div className="board-command-line" aria-hidden="true" />
          <div className="board-command-status">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-2 w-2 rounded-full bg-signal pulse-ring" />
              <span className="h-2 w-2 rounded-full bg-signal" />
            </span>
            Youth-led
          </div>
        </div>

        <div className="board-cluster-label">
          <span aria-hidden="true" />
          <h2>Founders</h2>
          <span aria-hidden="true" />
        </div>

        <div className="board-founders">
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
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="board-cohort-section border-b-0">
        <div className="board-cohort-heading">
          <div>
            <span className="board-command-kicker">Emerging talent / 06</span>
            <h2>Interns</h2>
            <p>Youth-led, hands-on — one team learning, building, and shaping the future of structural engineering together.</p>
          </div>
          <div className="board-cohort-status" aria-hidden="true">
            <span>INTERNS</span>
            <strong>06</strong>
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
        <div className="board-system-bar" aria-hidden="true">
          <span>REGISTRY / STRUCTRA-07</span>
          <span><i /> INTERNS</span>
          <span>YOUTH-LED / DUBAI</span>
        </div>
      </Section>
    </div>
  );
}
