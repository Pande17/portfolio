import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowUpRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { projects } from '@/data/projects';
import { techstack, techCategories } from '@/data/techstack';

const PROJECTS_PER_PAGE = 6;

const mainTabs = [
  { id: 'projects', labelKey: 'portfolio.tabProjects' },
  { id: 'techstack', labelKey: 'portfolio.tabTechstack' },
];

const projectFilters = [
  { id: 'all', labelKey: 'portfolio.filterAll' },
  { id: 'landing', labelKey: 'portfolio.filterLanding' },
  { id: 'webapp', labelKey: 'portfolio.filterWebapp' },
];

const techFilters = [
  { id: 'all', labelKey: 'portfolio.filterAll' },
  ...techCategories.map((c) => ({ id: c, labelKey: `skills.${c}` })),
];

const iconUrl = (slug) => {
  const map = {
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    nextjs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    tailwindcss: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
    html5: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    css3: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    nodejs: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    go: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    php: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    express: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
    mongodb: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
    postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    git: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    docker: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    wordpress: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
    figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    vite: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
    linux: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
    npm: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
  };
  return map[slug] || `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;
};

export function Portfolio() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('projects');
  const [activeFilter, setActiveFilter] = useState('all');
  const [projectPage, setProjectPage] = useState(1);

  const filters = activeTab === 'projects' ? projectFilters : techFilters;

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveFilter('all');
    setProjectPage(1);
  };

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
    setProjectPage(1);
  };

  // Filtered projects
  const filteredProjects = projects.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter,
  );
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (projectPage - 1) * PROJECTS_PER_PAGE,
    projectPage * PROJECTS_PER_PAGE,
  );

  return (
    <section id="portfolio" className="overflow-hidden border-t border-hairline bg-surface/40 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        {/* Header */}
        <div data-reveal="fade-up">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            05 — {t('nav.portfolio')}
          </div>
          <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
            {t('portfolio.title')}
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {t('portfolio.subtitle')}
          </p>
        </div>

        {/* Main Tabs */}
        <div className="mt-6 flex items-center gap-1 rounded-full border border-hairline bg-card p-1 w-fit" data-reveal="fade-up" data-reveal-delay="80">
          {mainTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                'rounded-full px-5 py-2 text-sm font-medium transition-all duration-300',
                activeTab === tab.id
                  ? 'bg-ink text-primary-foreground shadow-sm scale-105'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted',
              )}
            >
              {t(tab.labelKey)}
            </button>
          ))}
        </div>

        {/* Sub Filters */}
        <div className="mt-4 flex flex-wrap items-center gap-1.5 rounded-full border border-hairline bg-card/50 p-1 w-fit" data-reveal="fade-up" data-reveal-delay="120">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => handleFilterChange(f.id)}
              className={cn(
                'rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-300 sm:px-4 sm:text-sm',
                activeFilter === f.id
                  ? 'bg-brand text-brand-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted',
              )}
            >
              {t(f.labelKey)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-8">
          {activeTab === 'projects' ? (
            <>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {paginatedProjects.map((p, idx) => (
                  <div
                    key={p.id}
                    data-reveal="fade-up"
                    data-reveal-delay={String(Math.min(idx * 80, 240))}
                    className="group flex h-full"
                  >
                    <div className="flex w-full flex-col overflow-hidden rounded-3xl border border-hairline bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/10">
                      <div className="overflow-hidden bg-surface">
                        <img
                          src={p.image}
                          alt={p.title}
                          width={900}
                          height={640}
                          loading="lazy"
                          className="aspect-[16/11] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                      </div>
                      <div className="flex flex-1 flex-col gap-2.5 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-display text-base font-semibold text-ink transition-colors group-hover:text-brand">
                            {p.title}
                          </h3>
                          <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-brand group-hover:rotate-45" />
                        </div>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {t(p.descriptionKey)}
                        </p>
                        <div className="flex flex-wrap gap-1.5 pt-1.5">
                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground transition-all hover:bg-brand/10 hover:text-brand"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="mt-auto pt-3">
                          <a
                            href={p.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/btn relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-brand-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:shadow-brand/25 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                          >
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-full" />
                            <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                            <span>{t('portfolio.demo')}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination — only show when > 1 page */}
              {totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-2" data-reveal="fade-up" data-reveal-delay="200">
                  {/* Prev button */}
                  <button
                    onClick={() => setProjectPage((p) => Math.max(1, p - 1))}
                    disabled={projectPage === 1}
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-card transition-all duration-300',
                      projectPage === 1
                        ? 'cursor-not-allowed opacity-40'
                        : 'hover:border-brand/40 hover:bg-muted hover:scale-105 active:scale-95',
                    )}
                  >
                    <ChevronLeft className="h-4 w-4 text-foreground" />
                  </button>

                  {/* Page numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setProjectPage(page)}
                      className={cn(
                        'flex h-9 min-w-[36px] items-center justify-center rounded-full px-2 text-sm font-medium transition-all duration-300',
                        projectPage === page
                          ? 'bg-brand text-brand-foreground shadow-sm shadow-brand/20 scale-105'
                          : 'border border-hairline bg-card text-muted-foreground hover:border-brand/40 hover:text-foreground hover:scale-105 active:scale-95',
                      )}
                    >
                      {page}
                    </button>
                  ))}

                  {/* Next button */}
                  <button
                    onClick={() => setProjectPage((p) => Math.min(totalPages, p + 1))}
                    disabled={projectPage === totalPages}
                    className={cn(
                      'flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-card transition-all duration-300',
                      projectPage === totalPages
                        ? 'cursor-not-allowed opacity-40'
                        : 'hover:border-brand/40 hover:bg-muted hover:scale-105 active:scale-95',
                    )}
                  >
                    <ChevronRight className="h-4 w-4 text-foreground" />
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {techstack
                .filter((s) => activeFilter === 'all' || s.category === activeFilter)
                .map((tech, idx) => (
                  <div
                    key={tech.name}
                    data-reveal="scale-in"
                    data-reveal-delay={String(Math.min(idx * 40, 200))}
                    className="group flex flex-col items-center gap-2.5 rounded-3xl border border-hairline bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5"
                  >
                    <div className="relative h-10 w-10">
                      <img
                        src={iconUrl(tech.icon)}
                        alt={tech.name}
                        width={40}
                        height={40}
                        className="h-10 w-10 object-contain transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                        loading="lazy"
                      />
                    </div>
                    <span className="text-sm font-medium text-ink">{tech.name}</span>
                    <div className="h-1 w-full overflow-hidden rounded-full bg-surface">
                      <div
                        className="h-full rounded-full bg-brand transition-all duration-1000"
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
