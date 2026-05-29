import { ArrowRight, ArrowUpRight, Sparkles } from "lucide-react";
import gif from "@/assets/Hero.gif";
import { ScrollReveal } from "./ScrollReveal";

const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Go",
  "PHP",
  "MySQL",
  "MongoDB",
  "Wordpress",
];

export function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
          <ScrollReveal variant="stagger-container" className="flex flex-col">
            <ScrollReveal variant="stagger-item">
              <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                Available for work · 2026
              </div>
            </ScrollReveal>

            <ScrollReveal variant="stagger-item">
              <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
                Building clean,
                <br />
                thoughtful <span className="text-brand">web</span>
                <br /> experiences.
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="stagger-item">
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Hi, I'm Feri — a web developer who designs and ships fast, accessible interfaces
                with care for typography, structure, and the smallest details.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="stagger-item">
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#portfolio"
                  className="group inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-brand-foreground transition-colors hover:bg-brand/90"
                >
                  View Portfolio
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                >
                  Contact Me
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="stagger-item" className="mt-10">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5" />
                  Core stack
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-hairline bg-card px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </ScrollReveal>

          <ScrollReveal
            variant="scale-up"
            delay={0.2}
            className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[400px]"
          >
            <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-brand-soft/60 blur-2xl" />
            <div className="overflow-hidden rounded-3xl hover:scale-95 hover:transition-all hover:duration-200 hover:ease-in-out">
              <img
                src={gif}
                alt="Web Developer"
                width={600}
                height={800}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            {/* <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-full border border-hairline bg-card px-4 py-2 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
              </span>
              <span className="text-xs font-medium">Open to work</span>
            </div>
            <div className="absolute -right-3 top-6 hidden rounded-2xl border border-hairline bg-card px-4 py-3 shadow-sm md:block">
              <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                Based in
              </div>
              <div className="font-display text-sm font-semibold">Bali, ID</div>
            </div> */}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
