import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { useScrollReveal } from './hooks/useScrollReveal';

export default function App() {
	// Custom scroll-reveal — replaces AOS
	useScrollReveal();

	// Prevent browser from auto-scrolling to hash/previous position on page load
	// Fixes: page scrolling down on refresh, hiding hero badge behind navbar
	useEffect(() => {
		if ('scrollRestoration' in history) {
			history.scrollRestoration = 'manual';
		}
		// Temporarily disable smooth scroll for initial positioning
		const html = document.documentElement;
		html.style.scrollBehavior = 'auto';
		window.scrollTo(0, 0);
		// Re-enable smooth scroll after first paint
		requestAnimationFrame(() => {
			html.style.scrollBehavior = '';
		});
	}, []);

	const jsonLd = {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'Person',
				'@id': 'https://feridw.dev/#person',
				name: 'Feri DW',
				jobTitle: 'Web Developer',
				url: 'https://feridw.dev',
				sameAs: ['https://github.com/Pande17', 'https://www.linkedin.com/in/pande-feri-146a17411/', 'https://instagram.com/pandefw'],
			},
			{
				'@type': 'ProfessionalService',
				'@id': 'https://feridw.dev/#service',
				name: 'Feri DW - Freelance Web Developer',
				description: 'Freelance web developer specializing in React, Next.js, Tailwind CSS, and modern web applications.',
				provider: { '@id': 'https://feridw.dev/#person' },
				areaServed: 'ID',
				url: 'https://feridw.dev',
			},
		],
	};

	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
			{/* <div className="min-h-screen overflow-x-hidden bg-background text-foreground"> */} {/* Ini dicommand biar ga munculin scrollbar tambahan di kanan */}
			<Navbar />
			<main>
				<Hero />
				<About />
				<Services />
				<Process />
				<Portfolio />
				<Testimonials />
				<FAQ />
				<Contact />
			</main>
			<Footer />
			<FloatingWhatsApp />
			{/* </div> */}
		</>
	);
}
