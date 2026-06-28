import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
	{ id: 'home', labelKey: 'nav.home' },
	{ id: 'about', labelKey: 'nav.about' },
	{ id: 'services', labelKey: 'nav.services' },
	{ id: 'portfolio', labelKey: 'nav.portfolio' },
	{ id: 'contact', labelKey: 'nav.contact' },
];

export function Navbar() {
	const { t, i18n } = useTranslation();
	const [active, setActive] = useState('home');
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll);
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	useEffect(() => {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(e => {
					if (e.isIntersecting) setActive(e.target.id);
				});
			},
			{ rootMargin: '-45% 0px -50% 0px', threshold: 0 },
		);
		navLinks.forEach(l => {
			const el = document.getElementById(l.id);
			if (el) observer.observe(el);
		});
		return () => observer.disconnect();
	}, []);

	const toggleLang = () => {
		i18n.changeLanguage(i18n.language === 'en' ? 'id' : 'en');
	};

	return (
		<header className={cn('fixed inset-x-0 top-0 z-50 transition-all duration-300', scrolled ? 'border-b border-hairline bg-background/80 backdrop-blur-xl' : 'border-b border-transparent')}>
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
				<a href="#home" className="font-display text-2xl font-bold tracking-tight">
					Feri DW
				</a>

				<div className="flex items-center gap-3">
					<nav className="hidden items-center gap-1 rounded-full border border-hairline bg-card/60 p-1 md:flex">
						{navLinks.map(l => (
							<a
								key={l.id}
								href={`#${l.id}`}
								className={cn(
									'rounded-full px-4 py-1.5 text-sm font-medium transition-colors',
									active === l.id ? 'bg-ink text-primary-foreground' : 'text-muted-foreground hover:text-foreground',
								)}
							>
								{t(l.labelKey)}
							</a>
						))}
					</nav>

					<button
						type="button"
						onClick={toggleLang}
						className="flex items-center gap-1.5 rounded-full border border-hairline bg-card/60 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
						aria-label="Toggle language"
					>
						<Globe className="h-3.5 w-3.5" />
						{i18n.language === 'en' ? 'ID' : 'EN'}
					</button>

					<button type="button" onClick={() => setOpen(v => !v)} className="rounded-full border border-hairline p-2 md:hidden" aria-label="Toggle menu">
						{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
					</button>
				</div>
			</div>

			{open && (
				<div className="border-t border-hairline bg-background md:hidden">
					<nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
						{navLinks.map(l => (
							<a
								key={l.id}
								href={`#${l.id}`}
								onClick={() => setOpen(false)}
								className={cn('rounded-md px-3 py-2.5 text-sm font-medium', active === l.id ? 'bg-muted text-foreground' : 'text-muted-foreground')}
							>
								{t(l.labelKey)}
							</a>
						))}
					</nav>
				</div>
			)}
		</header>
	);
}
