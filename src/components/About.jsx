import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, Briefcase, Award, Clock, Quote } from 'lucide-react';
import aboutPortrait from '@/assets/about-portrait.jpeg';

const stats = [
  { labelKey: 'about.stat1', value: '10+', icon: Briefcase },
  { labelKey: 'about.stat2', value: '10+', icon: Award },
  { labelKey: 'about.stat3', value: '3+', icon: Clock },
];

const openToWorkKeys = ['about.rotate1', 'about.rotate2', 'about.rotate3', 'about.rotate4'];

export function About() {
	const { t } = useTranslation();
	const [workTextIdx, setWorkTextIdx] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setWorkTextIdx(prev => (prev + 1) % openToWorkKeys.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section id="about" className="overflow-hidden border-t border-hairline bg-surface/40 pt-16 pb-8 md:pt-24 md:pb-12">
			<div className="mx-auto max-w-5xl px-5">
				<div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
					<div className="flex flex-col">
						<div data-reveal="scale-in">
							<div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">02 — {t('nav.about')}</div>
						</div>
						<div data-reveal="fade-up" data-reveal-delay="80">
							<h2 className="mt-2 font-display text-3xl font-bold leading-tight text-ink md:text-4xl">
								{t('about.title')} <span className="text-brand">{t('about.titleHighlight')}</span>.
							</h2>
						</div>
						<div data-reveal="fade-up" data-reveal-delay="120">
							<p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">{t('about.desc')}</p>
						</div>

						{/* Quote card */}
						<div data-reveal="fade-up" data-reveal-delay="160">
							<div className="mt-6 rounded-3xl border border-hairline bg-card p-5 transition-all hover:border-brand/30 hover:shadow-md hover:shadow-brand/5">
								<Quote className="h-4 w-4 text-brand" />
								<p className="mt-2 font-display text-base font-medium leading-snug text-ink md:text-lg">&ldquo;{t('about.motto')}&rdquo;</p>
								<div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{t('about.mottoLabel')}</div>
							</div>
						</div>

						<div data-reveal="fade-up" data-reveal-delay="200">
							<div className="mt-6">
								<a
									href="#portfolio"
									className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-ink/90 hover:shadow-lg hover:scale-105 active:scale-95"
								>
									<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
									{t('about.cta')}
									<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
								</a>
							</div>
						</div>
					</div>

					{/* Portrait — scale in + glow */}
					<div data-reveal="scale-in" data-reveal-delay="200" className="relative mx-auto w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px]">
						<div className="overflow-hidden rounded-3xl transition-all duration-300 hover:scale-95 hover:shadow-xl hover:shadow-brand/10">
							<img src={aboutPortrait} alt="Feri working" width={800} height={900} loading="lazy" className="aspect-[4/5] w-full object-cover" />
						</div>
						{/* Open to work badge — bounces in */}
						<div className="absolute -bottom-3 -left-3 flex items-center gap-2 rounded-full border border-hairline bg-card px-3 py-1.5 shadow-sm animate-float">
							<span className="relative flex h-2 w-2">
								<span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-brand opacity-60" />
								<span className="relative inline-flex h-2 w-2 rounded-full bg-brand" />
							</span>
							<span key={workTextIdx} className="text-xs font-medium animate-fade-text">
								{t(openToWorkKeys[workTextIdx])}
							</span>
						</div>
						<div className="absolute -right-3 top-5 hidden rounded-3xl border border-hairline bg-card px-3 py-2 shadow-sm md:block">
							<div className="text-[10px] uppercase tracking-widest text-muted-foreground">{t('about.basedIn')}</div>
							<div className="font-display text-sm font-semibold">Bali, ID</div>
						</div>
					</div>
				</div>

				{/* Stats — staggered from bottom */}
				<div className="mt-10 grid gap-3 sm:grid-cols-3">
					{stats.map((s, idx) => {
						const Icon = s.icon;
						return (
							<div
								key={s.labelKey}
								data-reveal="fade-up"
								data-reveal-delay={String(100 + idx * 100)}
								className="group rounded-3xl border border-hairline bg-card p-5 transition-all hover:border-brand/40 hover:shadow-md hover:shadow-brand/5 hover:-translate-y-1"
							>
								<div className="flex items-center justify-between">
									<Icon className="h-4 w-4 text-muted-foreground transition-all duration-300 group-hover:text-brand group-hover:scale-110" />
									<span className="text-xs uppercase tracking-widest text-muted-foreground">{t(s.labelKey)}</span>
								</div>
								<div className="mt-4 font-display text-4xl font-bold tracking-tight text-ink transition-all duration-300 group-hover:scale-105 group-hover:text-brand">{s.value}</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
