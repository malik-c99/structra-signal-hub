import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight, Building2, Mail, MapPin } from "lucide-react";
import { Section, SectionHead } from "@/components/section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a 90-Day Pilot | Structra" },
      {
        name: "description",
        content:
          "Asset owners, developers, and facilities leaders: apply for a 90-day Structra field deployment. Pilot properties start at AED 2,500.",
      },
      { property: "og:title", content: "Request a 90-Day Pilot | Structra" },
      {
        property: "og:description",
        content: "Host a focused 90-day structural monitoring deployment on your asset.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().min(1, "Company is required").max(120),
  role: z.string().trim().max(120).optional(),
  assetType: z.string().trim().min(1, "Select an asset type"),
  message: z.string().trim().max(1000).optional(),
});

const assetTypes = ["Prefab structure", "Commercial property", "Parking", "Campus", "Industrial", "Bridge"];

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse(Object.fromEntries(fd.entries()));
    if (!result.success) {
      const next: Record<string, string> = {};
      for (const issue of result.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields");
      return;
    }
    setErrors({});
    setSent(true);
    toast.success("Pilot request received — we'll reply within two business days.");
    e.currentTarget.reset();
  }

  return (
    <>
      <Section className="border-b-0">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHead
              eyebrow="The ask"
              title="Open pilot sites."
              lead="For asset owners, developers, and facilities leaders ready to host a focused 90-day field deployment."
            />
            <ul className="mt-10 space-y-6">
              {[
                ["Pilot hosts", "Deploy and validate on a prefab, parking, campus, industrial, or bridge asset."],
                ["Strategic investors", "Fund hardware hardening, platform completion, and field validation."],
                ["Commercial channels", "Connect us with owners, developers, structural firms, and municipal teams."],
              ].map(([t, d]) => (
                <li key={t} className="border-l border-signal/50 pl-5">
                  <div className="text-sm font-semibold">{t}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-signal" /> hello@getstructra.com
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-signal" /> Dubai South Business Hub Free Zone
              </div>
              <div className="flex items-center gap-3">
                <Building2 className="h-4 w-4 text-signal" /> Supported by Technostream Network
              </div>
            </div>
          </div>

          <div className="rounded-sm border border-border bg-surface p-8 sm:p-10">
            <div className="label-mono">Pilot application</div>
            <h2 className="mt-3 text-2xl font-semibold">Request a 90-day deployment</h2>
            {sent ? (
              <p className="mt-3 text-sm text-signal">
                Thanks — your request is logged. We'll be in touch shortly.
              </p>
            ) : (
              <p className="mt-3 text-sm text-muted-foreground">
                Pilot properties start at AED 2,500.
              </p>
            )}

            <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
              <Field label="Full name" name="name" error={errors["name"]} />
              <Field label="Work email" name="email" type="email" error={errors["email"]} />
              <Field label="Company" name="company" error={errors["company"]} />
              <Field label="Role" name="role" error={errors["role"]} optional />

              <div>
                <label
                  htmlFor="assetType"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  Asset type
                </label>
                <select
                  id="assetType"
                  name="assetType"
                  defaultValue=""
                  className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-signal"
                >
                  <option value="" disabled>
                    Select an asset type
                  </option>
                  {assetTypes.map((a) => (
                    <option key={a} value={a}>
                      {a}
                    </option>
                  ))}
                </select>
                {errors["assetType"] ? (
                  <p className="mt-1.5 text-xs text-destructive">{errors["assetType"]}</p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
                >
                  What would you like monitored?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-signal"
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-signal px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Request a Pilot <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  optional,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string | undefined;
  optional?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
        {optional ? " (optional)" : ""}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        maxLength={255}
        className="mt-2 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-signal"
      />
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
