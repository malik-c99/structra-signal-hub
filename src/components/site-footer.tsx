import { Link } from "@tanstack/react-router";
import { SocialLinks } from "@/components/social-links";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="font-mono text-sm font-semibold tracking-[0.34em]">STRUCTRA</div>
            <p className="mt-3 text-sm text-muted-foreground">
              Always-on structural intelligence for commercial properties, prefab assets, and
              infrastructure.
            </p>
            <div className="label-mono mt-6 text-[10px]">Follow the signal</div>
            <SocialLinks className="mt-3" />
          </div>
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            <FooterCol
              title="Product"
              links={[
                { to: "/product", label: "How it works" },
                { to: "/proof", label: "Validation" },
              ]}
            />
            <FooterCol
              title="Documentation"
              links={[{ to: "/product", label: "Node specs" }]}
            />
            <FooterCol
              title="Company"
              links={[
                { to: "/board", label: "Board" },
                { to: "/group", label: "Group" },
                { to: "/contact", label: "Contact" },
              ]}
            />
            <FooterCol title="Legal" links={[{ to: "/privacy", label: "Privacy" }]} />
          </div>
        </div>
        <div className="mt-12 flex flex-wrap items-center gap-3 rounded-sm border border-signal/35 bg-signal/10 px-5 py-4">
          <span className="relative flex h-2 w-2">
            <span className="absolute h-2 w-2 rounded-full bg-signal pulse-ring" />
            <span className="h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-signal">
            Youth-led engineering
          </span>
          <span className="hidden h-3 w-px bg-signal/30 sm:block" aria-hidden="true" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            The next generation of structural engineers, already shipping
          </span>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-border/70 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:flex-row sm:justify-between">
          <span>getstructra.com</span>
          <span>Dubai South Free Zone</span>
          <span>2026</span>
        </div>

      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { to: string; label: string }[];
}) {
  return (
    <div>
      <div className="label-mono">{title}</div>
      <ul className="mt-3 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              to={l.to}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
