import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { faqs } from '@/data/faq';

export function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="overflow-hidden border-t border-hairline bg-surface/40 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5">
        <div className="text-center" data-reveal="fade-up">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            07 — FAQ
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
            {t('faq.title')}
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.questionKey}
                data-reveal="fade-up"
                data-reveal-delay={String(idx * 60)}
                className="overflow-hidden rounded-3xl border border-hairline bg-card transition-all duration-300 hover:border-brand/40 hover:shadow-sm hover:shadow-brand/5"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between gap-4 p-4 text-left"
                >
                  <span className="font-display text-base font-semibold text-ink">
                    {t(faq.questionKey)}
                  </span>
                  <ChevronDown
                    className={cn(
                      'h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300',
                      isOpen && 'rotate-180 text-brand',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid transition-all duration-300 ease-in-out',
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">
                      {t(faq.answerKey)}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
