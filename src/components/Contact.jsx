import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Instagram, Mail, ArrowUpRight, MessageCircle } from 'lucide-react';
import personal from '@/data/personal';

const socials = [
  {
    name: 'GitHub',
    handle: '@Pande17',
    icon: Github,
    href: 'https://github.com/Pande17',
  },
  {
    name: 'LinkedIn',
    handle: 'Pande Feri',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/pande-feri-146a17411/',
  },
  {
    name: 'Instagram',
    handle: '@pandefw',
    icon: Instagram,
    href: 'https://instagram.com/pandefw',
  },
];

const waNumber = personal.whatsapp;
const waMessageContact = personal.waMessageContact;
const waMessageTalk = personal.waMessageTalk;

export function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="overflow-hidden border-t border-hairline py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
          <div data-reveal="fade-up" className="flex flex-col">
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                08 — {t('nav.contact')}
              </div>
              <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
                {t('contact.title')}
                <br />
                {t('contact.titleLine2')}
              </h2>
            </div>
            <div data-reveal="fade-up" data-reveal-delay="80">
              <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                {t('contact.desc')}
              </p>
            </div>

            <div data-reveal="scale-in" data-reveal-delay="120">
              <a
                href={`mailto:${personal.email}?subject=Portfolio%20Inquiry`}
                className="group mt-6 inline-flex w-full items-center gap-3 rounded-3xl border border-hairline bg-card px-5 py-3 transition-all duration-300 hover:border-brand/40 hover:shadow-md hover:shadow-brand/5 hover:-translate-y-0.5 sm:w-auto"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-brand-foreground group-hover:scale-110">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="flex flex-col text-left">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    Email
                  </span>
                  <span className="font-display text-sm font-semibold text-ink">
                    {personal.email}
                  </span>
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-brand group-hover:rotate-45" />
              </a>
            </div>

            <div data-reveal="scale-in" data-reveal-delay="160">
              <a
                href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessageContact)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex w-full items-center gap-3 rounded-3xl border border-hairline bg-card px-5 py-3 transition-all duration-300 hover:border-brand/40 hover:shadow-md hover:shadow-brand/5 hover:-translate-y-0.5 sm:w-auto"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft text-brand transition-all duration-300 group-hover:bg-brand group-hover:text-brand-foreground group-hover:scale-110">
                  <MessageCircle className="h-4 w-4" />
                </span>
                <span className="flex flex-col text-left">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    WhatsApp
                  </span>
                  <span className="font-display text-sm font-semibold text-ink">
                    {t('contact.whatsapp')}
                  </span>
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-brand group-hover:rotate-45" />
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3" data-reveal="fade-up" data-reveal-delay="200">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-3xl border border-hairline bg-card p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md hover:shadow-brand/5"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted text-foreground transition-all duration-300 group-hover:bg-brand group-hover:text-brand-foreground group-hover:scale-110">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex flex-col text-left">
                      <span className="text-sm font-medium text-foreground">{s.name}</span>
                      <span className="text-xs text-muted-foreground">{s.handle}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Decorative right column */}
          <div
            data-reveal="scale-in"
            data-reveal-delay="200"
            className="relative hidden lg:flex lg:items-center lg:justify-center"
          >
            <div className="relative overflow-hidden rounded-3xl border border-hairline bg-card p-8 transition-all duration-300 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10">
              <div className="absolute inset-0 bg-brand-soft/30 animate-gradient" style={{ background: 'linear-gradient(135deg, var(--brand-soft) 0%, transparent 50%, var(--brand-soft) 100%)', backgroundSize: '200% 200%' }} />
              <div className="relative flex flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-brand-foreground animate-float">
                  <Mail className="h-7 w-7" />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink">
                  {t('contact.openToProjects')}
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {t('contact.openToProjectsDesc')}
                </p>
                <a
                  href={`https://wa.me/${waNumber}?text=${encodeURIComponent(waMessageTalk)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition-all duration-300 hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/25 hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  <MessageCircle className="h-4 w-4" />
                  {t('contact.letsTalk')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
