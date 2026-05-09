import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#experiences", label: "Experiences" },
  { href: "#gallery", label: "Gallery" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border/60" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-18 md:h-20 flex items-center justify-between py-5">
        <a href="#home" className={`font-serif text-xl md:text-2xl tracking-wide ${scrolled ? "text-foreground" : "text-cream"}`}>
          Sage <span className="italic opacity-80">Farm Cafe</span>
        </a>
        <ul className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-[13px] uppercase tracking-[0.18em] transition-opacity hover:opacity-60 ${
                  scrolled ? "text-foreground" : "text-cream/90"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-cream"}`}
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-px bg-current" />
            <span className="block w-6 h-px bg-current" />
            <span className="block w-4 h-px bg-current ml-auto" />
          </div>
        </button>
      </nav>
      {open && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="px-6 py-6 space-y-5">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm uppercase tracking-[0.2em] text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
