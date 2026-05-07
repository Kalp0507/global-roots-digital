import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/supply-chain", label: "Supply Chain" },
  { to: "/investors", label: "Investors" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/85 backdrop-blur-md border-b border-border shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container-prose flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-sm gradient-gold flex items-center justify-center shadow-soft">
            <span className="font-serif text-charcoal text-xl font-bold">F</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-serif text-lg font-semibold tracking-wide">FarmAxis</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Global</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm tracking-wide text-foreground/80 hover:text-primary transition-colors relative"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-all shadow-soft"
          >
            Request Quote
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden w-10 h-10 flex items-center justify-center"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-px bg-foreground" />
            <span className="block w-6 h-px bg-foreground" />
            <span className="block w-6 h-px bg-foreground" />
          </div>
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-prose py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="text-base">
                {n.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="px-5 py-2.5 bg-primary text-primary-foreground text-sm text-center rounded-sm">
              Request Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
