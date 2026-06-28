import { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

const PER_PAGE = 3;
const AUTOPLAY_MS = 5000;

export function Testimonials() {
  const { t } = useTranslation();
  const totalPages = Math.max(1, Math.ceil(testimonials.length / PER_PAGE));
  const [page, setPage] = useState(0);

  const nextPage = useCallback(() => {
    setPage((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setPage((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  // Auto-slide
  useEffect(() => {
    if (totalPages <= 1) return;
    const timer = setInterval(nextPage, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [totalPages, nextPage]);

  const pageItems = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  return (
    <section id="testimonials" className="overflow-hidden border-t border-hairline py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        {/* Header */}
        <div className="text-center" data-reveal="fade-up">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            06 — {t('testimonials.label')}
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
            {t('testimonials.title')}
          </h2>
        </div>

        {/* Cards */}
        <div className="relative mt-10">
          <div className="grid gap-5 md:grid-cols-3">
            {pageItems.map((item, idx) => (
              <div
                key={item.name}
                data-reveal="scale-in"
                data-reveal-delay={String(idx * 100)}
                className="flex flex-col rounded-3xl border border-hairline bg-card p-5 transition-all duration-300 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5 hover:-translate-y-1"
              >
                {/* Stars */}
                <div className="flex gap-0.5 text-brand">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current transition-transform hover:scale-125" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
                  &ldquo;{t(item.quoteKey)}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="mt-5 flex items-center gap-3 border-t border-hairline pt-3">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-8 w-8 rounded-full object-cover transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-brand/40"
                    />
                  ) : (
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-soft font-display text-xs font-semibold text-brand transition-all duration-300 hover:bg-brand hover:text-brand-foreground hover:scale-110">
                      {item.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                  )}
                  <div>
                    <div className="text-sm font-semibold text-ink">{item.name}</div>
                    <div className="text-xs text-muted-foreground">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination — only shows when > 1 page */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prevPage}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-card text-muted-foreground transition-all hover:border-brand/40 hover:text-brand hover:scale-110 active:scale-90"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page
                      ? 'w-6 bg-brand'
                      : 'w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-card text-muted-foreground transition-all hover:border-brand/40 hover:text-brand hover:scale-110 active:scale-90"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
