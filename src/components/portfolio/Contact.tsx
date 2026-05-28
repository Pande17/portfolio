import { Github, Linkedin, Instagram, Mail, ArrowUpRight, Star } from "lucide-react";

const socials = [
  { name: "GitHub", handle: "@Pande17", icon: Github, href: "https://github.com/Pande17" },
  { name: "LinkedIn", handle: "Pande Feri", icon: Linkedin, href: "https://www.linkedin.com/in/pande-feri-146a17411/" },
  // { name: "", handle: "@pandefw", icon: Twitter, href: "https://twitter.com/pandefw" },
  { name: "Instagram", handle: "@pandefw", icon: Instagram, href: "https://instagram.com/pandefw" },
];

const testimonials = [
  {
    quote:
      "Feri shipped our entire marketing site in two weeks. The level of polish is unreal.",
    name: "Arya Dinatha",
    role: "Founder, Northwind",
  },
  {
    quote:
      "Rare combination — strong eye for design and rigorous, well-documented code.",
    name: "David Hartono",
    role: "Engineering Lead, Stack OS",
  },
  {
    quote:
      "Reliable, fast, and proactive. He treats every project like it's his own product.",
    name: "Ayu Pratiwi",
    role: "Product Designer, Lumen",
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-hairline bg-surface/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              04 — Contact
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
              Let's build<br />something good.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              I'm currently taking on a few new projects. The fastest way to reach me
              is by email — I'll get back within a day.
            </p>

            <a
              href="mailto:pandedwiwjy@gmail.com subject=Personal Website"
              className="group mt-8 inline-flex items-center gap-3 rounded-2xl border border-hairline bg-card px-5 py-4 transition-colors hover:border-brand/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Mail className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">
                  Email
                </span>
                <span className="font-display text-base font-semibold text-ink">
                  pandedwiwjy@gmail.com
                </span>
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-colors group-hover:text-brand" />
            </a>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    className="group flex items-center gap-3 rounded-2xl border border-hairline bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-brand/40"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted text-foreground transition-colors group-hover:bg-ink group-hover:text-primary-foreground">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-medium text-foreground">{s.name}</span>
                      <span className="text-xs text-muted-foreground">{s.handle}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Testimonials
            </div>
            <div className="mt-3 flex flex-col gap-4">
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl border border-hairline bg-card p-6 transition-colors hover:border-brand/40"
                >
                  <div className="flex gap-0.5 text-brand">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 flex items-center gap-3 border-t border-hairline pt-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft font-display text-sm font-semibold text-brand">
                      {t.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-ink">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
