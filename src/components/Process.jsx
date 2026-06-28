import { useTranslation } from 'react-i18next';
import { MessageCircle, Layout, Code2, Rocket } from 'lucide-react';
import { process } from '@/data/process';

const iconMap = {
  MessageCircle,
  Layout,
  Code2,
  Code: Code2,
  Rocket,
};

export function Process() {
  const { t } = useTranslation();

  return (
    <section id="process" className="overflow-hidden border-t border-hairline py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center" data-reveal="fade-up">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            04 — {t('nav.process')}
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
            {t('process.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {t('process.subtitle')}
          </p>
        </div>

        <div className="relative mt-10">
          {/* Vertical timeline line (desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-hairline md:block" />

          <div className="space-y-10 md:space-y-0">
            {process.map((step, idx) => {
              const Icon = iconMap[step.icon] || Code2;
              const isEven = idx % 2 === 0;
              const revealType = idx === 0 ? 'scale-in' : 'fade-up';

              return (
                <div
                  key={step.step}
                  data-reveal={revealType}
                  data-reveal-delay={String(idx * 120)}
                  className={`relative md:flex md:items-center md:gap-8 ${
                    idx > 0 ? 'md:mt-12' : ''
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 ${
                      isEven ? 'md:text-right md:pr-12' : 'md:order-2 md:pl-12'
                    }`}
                  >
                    <div className="rounded-3xl border border-hairline bg-card p-5 transition-all duration-300 hover:border-brand/40 hover:shadow-md hover:shadow-brand/5 hover:-translate-y-0.5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-soft text-brand transition-all duration-300 hover:bg-brand hover:text-brand-foreground hover:scale-110">
                          <Icon className="h-4 w-4" />
                        </div>
                        <h3 className="font-display text-base font-bold text-ink">
                          {t(step.titleKey)}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {t(step.descKey)}
                      </p>
                    </div>
                  </div>

                  {/* Step number circle (center on desktop) */}
                  <div className="absolute left-1/2 top-5 hidden -translate-x-1/2 md:flex md:items-center md:justify-center">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-brand bg-background font-display text-xs font-bold text-brand transition-all duration-300 hover:bg-brand hover:text-brand-foreground hover:scale-110">
                      {step.step}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className={`hidden flex-1 md:block ${isEven ? '' : 'md:order-1'}`} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
