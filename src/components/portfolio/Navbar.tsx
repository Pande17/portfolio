import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-hairline bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* <a href="#home" className="flex items-center gap-2 font-large text-muted-foreground"> */}
        {/* <span className="h-2 w-2 rounded-full bg-brand" /> */}
        {/* <span className="hidden sm:inline">Portfolio</span> */}
        <a href="#home" className="font-display text-2xl font-bold tracking-tight">
          Feri DW
        </a>
        {/* </a> */}

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-1 rounded-full border border-hairline bg-card/60 p-1 md:flex">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={cn(
                  "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
                  active === l.id
                    ? "bg-ink text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>
          {/* <a href="#home" className="font-display text-base font-semibold tracking-tight ">
            Feri DW
          </a> */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-hairline p-2 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hairline bg-background md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-md px-3 py-2.5 text-sm font-medium",
                  active === l.id ? "bg-muted text-foreground" : "text-muted-foreground",
                )}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
