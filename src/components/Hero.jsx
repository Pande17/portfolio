import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import heroImg from '@/assets/hero-portrait-new.jpg';
import { skillGroups } from '@/data/skills';

const allSkills = skillGroups.flatMap(g => g.skills);

const rotateKeys = ['hero.rotate1', 'hero.rotate2', 'hero.rotate3', 'hero.rotate4'];

export function Hero() {
	const { t } = useTranslation();
	const [textIndex, setTextIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTextIndex(prev => (prev + 1) % rotateKeys.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section id="home" className="relative overflow-hidden bg-background pt-16 pb-12 md:pt-28 md:pb-20">
			<div className="mx-auto max-w-5xl px-5">
				<div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
					<div className="flex flex-col">
						{/* Badge — slides from left */}
						<div data-reveal="fade-up">
							<div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-3 py-1 text-xs font-medium text-muted-foreground min-h-[28px]">
								<span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-ring" />
								<span key={textIndex} className="animate-fade-text">
									{t(rotateKeys[textIndex])}
								</span>
							</div>
						</div>

						{/* Heading — fades up with scale */}
						<div data-reveal="fade-up" data-reveal-delay="100">
							<h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl">
								{t('hero.line1')}
								<br />
								<span
									className="text-brand animate-gradient bg-gradient-to-r from-brand via-blue-400 to-brand bg-clip-text"
									style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
								>
									{t('hero.line2')}
								</span>
								<br />
								{t('hero.line3')}
							</h1>
						</div>

						{/* Subtitle — fades up */}
						<div data-reveal="fade-up" data-reveal-delay="200">
							<p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">{t('hero.subtitle')}</p>
						</div>

						{/* CTAs — scale in */}
						<div data-reveal="scale-in" data-reveal-delay="300">
							<div className="mt-6 flex flex-wrap items-center gap-3">
								<a
									href="#portfolio"
									className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-brand-foreground transition-all hover:shadow-lg hover:shadow-brand/30 hover:scale-105 active:scale-95"
								>
									<span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
									{t('hero.cta1')}
									<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
								</a>
								<a
									href="#contact"
									className="inline-flex items-center gap-2 rounded-full border border-hairline bg-card px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted hover:scale-105 active:scale-95 hover:border-brand/40"
								>
									{t('hero.cta2')}
									<ArrowUpRight className="h-4 w-4" />
								</a>
							</div>
						</div>

						{/* Tech stack — slide from left */}
						<div data-reveal="fade-in" data-reveal-delay="400" className="mt-7">
							<div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground">
								<Sparkles className="h-3.5 w-3.5" />
								{t('hero.stack')}
							</div>
							<div className="mt-2 flex flex-wrap gap-2">
								{allSkills.slice(0, 13).map((s, idx) => (
									<span
										key={s}
										className="rounded-full border border-hairline bg-card px-2.5 py-0.5 text-xs font-medium text-foreground transition-all hover:border-brand/40 hover:bg-brand/5 hover:scale-105 cursor-default"
									>
										{s}
									</span>
								))}
							</div>
						</div>
					</div>

					{/* Hero image — scale in with float */}
					<div data-reveal="scale-in" data-reveal-delay="200" className="relative mx-auto w-full max-w-[260px] sm:max-w-[280px] md:max-w-[300px] lg:max-w-[320px]">
						<div className="absolute -inset-3 -z-10 rounded-[2rem] bg-brand-soft/60 blur-2xl animate-pulse" />
						<div className="overflow-hidden rounded-3xl transition-all duration-300 hover:scale-95 hover:shadow-xl hover:shadow-brand/10">
							<img src={heroImg} alt="Web Developer" width={500} height={600} className="aspect-[4/5] w-full object-cover" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
