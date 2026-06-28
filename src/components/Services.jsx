import { useTranslation } from 'react-i18next';
import { Check, Star, MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { services } from '@/data/services';
import personal from '@/data/personal';

const waNumber = personal.whatsapp;

export function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="overflow-hidden border-t border-hairline bg-surface/40 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="text-center" data-reveal="fade-up">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            03 — {t('nav.services')}
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
            {t('services.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((svc, idx) => (
            <div
              key={svc.id}
              data-reveal="fade-up"
              data-reveal-delay={String(idx * 100)}
              className={cn(
                'relative flex flex-col rounded-3xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg',
                svc.popular
                  ? 'border-brand shadow-lg shadow-brand/10 scale-[1.02] md:scale-105 hover:shadow-brand/20 hover:scale-[1.04]'
                  : 'border-hairline hover:border-brand/40 hover:shadow-brand/5',
              )}
            >
              {svc.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 rounded-full bg-brand px-4 py-1 text-xs font-semibold text-brand-foreground">
                    <Star className="h-3 w-3 fill-current animate-pulse" />
                    {t('services.popular')}
                  </div>
                </div>
              )}

              <div>
                <h3 className="font-display text-lg font-bold text-ink">
                  {t(svc.nameKey)}
                </h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {t(svc.descriptionKey)}
                </p>
              </div>

              <div className="mt-4">
                {svc.priceDisplay ? (
                  <>
                    <span className="font-display text-3xl font-bold text-ink transition-colors duration-300 group-hover:text-brand">
                      {svc.priceDisplay}
                    </span>
                    {svc.priceNote && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {t(svc.priceNote)}
                      </p>
                    )}
                  </>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="font-display text-xl font-bold text-ink">
                      {t('services.customPrice')}
                    </span>
                  </div>
                )}
              </div>

              <ul className="mt-4 flex-1 space-y-2.5">
                {svc.featuresKeys.map((fk) => (
                  <li key={fk} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand transition-transform duration-300 hover:scale-125" />
                    <span className="text-sm text-foreground">{t(fk)}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent(svc.waMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  'mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95',
                  svc.id === 'custom'
                    ? 'border border-hairline bg-card text-foreground hover:bg-muted hover:border-brand/40'
                    : svc.popular
                      ? 'bg-brand text-brand-foreground hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/25'
                      : 'border border-hairline bg-card text-foreground hover:bg-muted hover:border-brand/40',
                )}
              >
                {svc.id === 'custom' ? (
                  <ArrowRight className="h-4 w-4" />
                ) : (
                  <MessageCircle className="h-4 w-4" />
                )}
                {t(svc.ctaKey)}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
