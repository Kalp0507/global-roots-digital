import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-charcoal text-ivory mt-32">
      <div className="container-prose py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm gradient-gold flex items-center justify-center">
              <span className="font-serif text-charcoal text-xl font-bold">F</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg">FarmAxis Global</span>
              <span className="text-[10px] uppercase tracking-[0.25em] opacity-60">Est. 2024</span>
            </div>
          </div>
          <p className="text-sm opacity-70 max-w-md leading-relaxed">
            Rooted in Indian Agriculture. Trusted Across Global Markets. A heritage trading
            institution connecting Indian farms with international buyers.
          </p>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/supply-chain">Supply Chain</Link></li>
            <li><Link to="/investors">Investors</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li>Jeel Patel</li>
            <li>+91 7383322120</li>
            <li>Mumbai, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-prose py-6 flex flex-col md:flex-row justify-between gap-2 text-xs opacity-60">
          <span>© {new Date().getFullYear()} FarmAxis Global. All rights reserved.</span>
          <span>APEDA · FSSAI · ISO · HACCP</span>
        </div>
      </div>
    </footer>
  );
}
