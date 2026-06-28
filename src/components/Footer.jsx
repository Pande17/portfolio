import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

const footerSocials = [
  { icon: Github, href: 'https://github.com/Pande17', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/pande-feri-146a17411/', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com/pandefw', label: 'Instagram' },
];

const footerLinks = [
  { id: 'home', labelKey: 'nav.home' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'services', labelKey: 'nav.services' },
  { id: 'portfolio', labelKey: 'nav.portfolio' },
  { id: 'contact', labelKey: 'nav.contact' },
];

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-hairline py-8" data-reveal="fade-up">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 px-5 md:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          <span>
            &copy; {new Date().getFullYear()} Feri DW. {t('footer.crafted')}{' '}
            <Heart className="inline-block h-3 w-3 fill-current text-brand" />
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-5">
          {footerLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(l.labelKey)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {footerSocials.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
