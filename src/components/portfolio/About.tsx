import { ArrowRight, Briefcase, Award, Clock, Quote } from "lucide-react";
import aboutPortrait from "@/assets/about-portrait.jpeg";

const stats = [
  { label: "Projects shipped", value: "3+", icon: Briefcase },
  { label: "Achievements", value: "4+", icon: Award },
  { label: "Years of experience", value: "3+", icon: Clock },
];

export function About() {
  return (
    <section id="about" className="border-t border-hairline bg-surface/40 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              02 — About
            </div>
            <h2 className="mt-3 font-display text-4xl font-bold leading-tight text-ink md:text-5xl">
              A developer who cares about the <span className="text-brand">details</span>.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              I'm Feri, a web developer based in Indonesia. Over the past three years,
              I've honed my skills to high-quality, high-performance projects—with a
              focus on design systems, clean code, and modern interfaces.
            </p>

            <div className="mt-8 rounded-2xl border border-hairline bg-card p-6">
              <Quote className="h-5 w-5 text-brand" />
              <p className="mt-3 font-display text-lg font-medium leading-snug text-ink md:text-xl">
                "Turning complex problems into elegant, functional digital solutions."
              </p>
              <div className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
                My motto
              </div>
            </div>

            <a
              href="#portfolio"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-ink/90"
            >
              See my work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px] md:max-w-[380px] lg:max-w-[400px]">
            <div className="overflow-hidden rounded-3xl hover:scale-95 hover:transition-all hover:duration-200 hover:ease-in-out">
              <img
                src={aboutPortrait}
                alt="Feri working"
                width={800}
                height={900}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 flex items-center gap-2 rounded-full border border-hairline bg-card px-4 py-2 shadow-sm">
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
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-3">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="group rounded-2xl border border-hairline bg-card p-6 transition-colors hover:border-brand/40"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-brand" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    {s.label}
                  </span>
                </div>
                <div className="mt-6 font-display text-5xl font-bold tracking-tight text-ink">
                  {s.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
