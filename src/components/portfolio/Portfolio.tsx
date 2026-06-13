import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import p1 from "@/assets/enz.png";
import p2 from "@/assets/viotrack.png";
import p3 from "@/assets/natora.png";
import a1 from "@/assets/sekolah-beta.jpeg";
import a2 from "@/assets/certificate-internship.png";
import a3 from "@/assets/workshop-nextgen.png";
import a4 from "@/assets/juara-pnbrc25.png";
import { ScrollReveal } from "./ScrollReveal";

const projects = [
  {
    title: "ENZ",
    desc: "Web App for generate Certificate with Grade",
    tags: ["React", "Tailwind CSS", "Go", "MongoDB", "Docker"],
    image: p1,
    liveUrl: "#",
  },
  {
    title: "Viotrack",
    desc: "Web App for Tracking and Monitoring Violation in school. Manage by  ",
    tags: ["PHP", "HTML", "Tailwind CSS", "MySQL"],
    image: p2,
    liveUrl: "#",
  },
  {
    title: "Natora",
    desc: "Natora's company profile website displays the advantages, products and manufacturing process of these products.",
    tags: ["HTML", "Tailwind CSS", "JavaScript"],
    image: p3,
    liveUrl: "#",
  },
  // { title: "Pulse Insights", desc: "Marketing analytics with anomaly detection.", tags: ["TypeScript", "D3"], image: p4 },
  // { title: "Field Studio", desc: "Landing page system for a creative agency.", tags: ["Astro", "MDX"], image: p5 },
  // { title: "Stack OS", desc: "Internal tooling for a fintech, built in a week.", tags: ["Remix", "Prisma"], image: p6 },
];

const achievements = [
  { title: "Workshop Junior Backend Developer", org: "Sekolah Beta", year: "2023", image: a1 },
  { title: "Certificate Internship Web Developer", org: "BTW Edutech", year: "2024", image: a2 },
  { title: "Workshop AI", org: "Stikom Bali", year: "2025", image: a3 },
  { title: "1st Place of PNBRC 2025", org: "Politeknik Negeri Bali", year: "2025", image: a4 },
];

const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Javascript", "HTML", "CSS"],
  },
  {
    label: "Backend",
    items: ["Go", "PHP", "Node.js", "MySQL", "MongoDB", "Rest API"],
  },
  {
    label: "Tools & Craft",
    items: ["VS Code", "Figma", "Git", "Vite", "Docker", "Postman", "GitHub"],
  },
];

const tabs = ["Projects", "Achievements", "Skills"] as const;
type Tab = (typeof tabs)[number];

export function Portfolio() {
  const [tab, setTab] = useState<Tab>("Projects");

  return (
    <section id="portfolio" className="border-t border-hairline py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <ScrollReveal>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              03 — Portfolio
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
              Selected work & craft.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex items-center gap-1 rounded-full border border-hairline bg-card p-1">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    tab === t
                      ? "bg-ink text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {t}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12">
          {tab === "Projects" && (
            <ScrollReveal
              key="Projects"
              variant="stagger-container"
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {projects.map((p) => (
                <ScrollReveal key={p.title} variant="stagger-item" className="h-full flex">
                  <div className="group flex flex-col w-full overflow-hidden rounded-2xl border border-hairline bg-card transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-sm">
                    <div className="overflow-hidden bg-surface">
                      <img
                        src={p.image}
                        alt={p.title}
                        width={900}
                        height={640}
                        loading="lazy"
                        className="aspect-[16/11] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-5">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-lg font-semibold text-ink">{p.title}</h3>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-brand" />
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-auto pt-4">
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-brand-foreground shadow-sm transition-all hover:shadow-md hover:shadow-brand/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        >
                          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                          <ExternalLink className="h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                          <span>Live Demo</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </ScrollReveal>
          )}

          {tab === "Achievements" && (
            <ScrollReveal
              key="Achievements"
              variant="stagger-container"
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {achievements.map((a) => (
                <ScrollReveal key={a.title} variant="stagger-item" className="h-full">
                  <div className="group h-full overflow-hidden rounded-2xl border border-hairline bg-card transition-all hover:-translate-y-0.5 hover:border-brand/40">
                    <div className="overflow-hidden bg-surface">
                      <img
                        src={a.image}
                        alt={a.title}
                        width={900}
                        height={640}
                        loading="lazy"
                        className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-[11px] uppercase tracking-widest text-brand">
                        {a.year}
                      </div>
                      <h3 className="mt-1 font-display text-base font-semibold text-ink">
                        {a.title}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">{a.org}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </ScrollReveal>
          )}

          {tab === "Skills" && (
            <ScrollReveal
              key="Skills"
              variant="stagger-container"
              className="grid gap-5 md:grid-cols-3"
            >
              {skillGroups.map((g) => (
                <ScrollReveal key={g.label} variant="stagger-item" className="h-full">
                  <div className="rounded-2xl border border-hairline bg-card p-6 h-full">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-lg font-semibold text-ink">{g.label}</h3>
                      <span className="text-xs text-muted-foreground">{g.items.length} skills</span>
                    </div>
                    <ul className="mt-5 space-y-3">
                      {g.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-center justify-between border-b border-hairline pb-3 last:border-none last:pb-0"
                        >
                          <span className="text-sm font-medium text-foreground">{item}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              ))}
            </ScrollReveal>
          )}
        </div>
      </div>
    </section>
  );
}
