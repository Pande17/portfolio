import { ScrollReveal } from "./ScrollReveal";

export function Footer() {
  return (
    <footer className="border-t border-hairline py-10">
      <ScrollReveal variant="fade-in" delay={0.1} duration={0.6}>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span>© {new Date().getFullYear()} Feri DW. Crafted with care.</span>
          </div>
          <nav className="flex items-center gap-5">
            <a href="#home" className="hover:text-foreground">
              Home
            </a>
            <a href="#about" className="hover:text-foreground">
              About
            </a>
            <a href="#portfolio" className="hover:text-foreground">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
          </nav>
        </div>
      </ScrollReveal>
    </footer>
  );
}
