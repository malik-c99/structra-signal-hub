import { Instagram, Linkedin } from "lucide-react";

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/structra.ae/",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/getstructra/",
    Icon: Linkedin,
  },
];

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {socials.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Structra on ${label} (opens in a new tab)`}
          title={`Structra on ${label}`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border bg-background text-muted-foreground transition-colors hover:border-signal/60 hover:text-signal focus-visible:outline-2 focus-visible:outline-signal"
        >
          <Icon className="h-4.5 w-4.5" />
        </a>
      ))}
    </div>
  );
}
