import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-investors.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/investors")({
  head: () => ({
    meta: [
      { title: "Investors — FarmAxis Global" },
      { name: "description", content: "FarmAxis Global is building India's next institutional agricultural export house. Strategic positioning, scalable systems, long-term vision." },
      { property: "og:title", content: "Investor Relations — FarmAxis Global" },
      { property: "og:description", content: "A scalable platform connecting Indian agriculture with global demand." },
    ],
  }),
  component: Investors,
});

const stats = [
  { v: "12,400+", l: "Tons annual capacity" },
  { v: "18", l: "Export destinations" },
  { v: "240+", l: "Supplier partners" },
  { v: "94%", l: "Repeat buyer rate" },
];

const pillars = [
  { t: "Defensible Sourcing", d: "Multi-region grower partnerships create resilience against weather and price shock." },
  { t: "Vertical Integration", d: "Processing and quality control inside the chain, not outsourced." },
  { t: "Compliance Moat", d: "APEDA, FSSAI, ISO 22000 and HACCP — the credentials buyers screen for." },
  { t: "Digital Transparency", d: "Batch traceability and trade intelligence as a structural advantage." },
];

function Investors() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Investor Relations"
        title={<>Building India's next institutional <span className="italic text-gold">agri-export</span> house.</>}
        description="A global trade ecosystem at the intersection of Indian sourcing depth and worldwide demand for trusted, compliant supply."
        overlay="dark"
      />

      <section className="container-prose py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.l} className="border-t border-gold pt-6">
              <div className="font-serif text-5xl text-primary mb-2">{s.v}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-charcoal text-ivory py-24">
        <div className="container-prose">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 max-w-2xl">Why FarmAxis Global is structurally different.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((p) => (
              <div key={p.t} className="border border-ivory/15 p-8">
                <h3 className="font-serif text-2xl text-gold mb-3">{p.t}</h3>
                <p className="opacity-80 leading-relaxed">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-prose py-24 text-center max-w-2xl">
        <h2 className="font-serif text-4xl mb-6">Let's talk.</h2>
        <p className="text-foreground/70 mb-8">
          For investor decks, financial summaries and partnership conversations, get in touch.
        </p>
        <Link to="/contact" className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-sm font-medium hover:opacity-90">
          Request investor pack
        </Link>
      </section>
    </>
  );
}
