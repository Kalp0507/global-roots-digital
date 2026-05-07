import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-farm.jpg";
import productsImg from "@/assets/products.jpg";
import shippingImg from "@/assets/shipping.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const products = [
  { name: "Turmeric", origin: "Erode, Tamil Nadu", note: "High-curcumin, vibrant pigment" },
  { name: "Cumin", origin: "Unjha, Gujarat", note: "Steam sterilised, export grade" },
  { name: "Sesame Seeds", origin: "Saurashtra", note: "Hulled & natural, 99.95% purity" },
  { name: "Basmati Rice", origin: "Punjab & Haryana", note: "Aged long-grain, premium tier" },
];

const stages = [
  { n: "01", t: "Farm", d: "Direct partnerships with grower collectives across India." },
  { n: "02", t: "Processing", d: "Cleaning, grading and steam sterilisation at certified facilities." },
  { n: "03", t: "Quality Lab", d: "Moisture, microbial and pesticide testing per buyer protocols." },
  { n: "04", t: "Packaging", d: "Custom packaging, private-label and bulk export configurations." },
  { n: "05", t: "Port", d: "Consolidated containers from Mundra, Nhava Sheva and Tuticorin." },
  { n: "06", t: "Buyer", d: "Door-delivered with full traceability and shipment intelligence." },
];

const stats = [
  { v: "12,400+", l: "Tons capacity" },
  { v: "18", l: "Countries served" },
  { v: "240+", l: "Supplier partners" },
  { v: "94%", l: "Repeat buyers" },
];

const certs = ["APEDA", "FSSAI", "ISO 22000", "HACCP", "Spices Board"];

const markets = [
  "United Arab Emirates", "Saudi Arabia", "Singapore",
  "United Kingdom", "Germany", "Vietnam", "United States", "Japan",
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Indian farmland at golden hour"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/60" />

        <div className="container-prose relative z-10 pt-32 pb-20 text-ivory">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-up">
              <span className="divider-gold" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold animate-shimmer">
                Heritage. Quality. Global Trade.
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6 animate-fade-up">
              Connecting Indian
              <br />
              Agriculture to
              <br />
              <span className="italic text-gold">Global Markets.</span>
            </h1>
            <p className="text-lg md:text-xl opacity-85 max-w-xl mb-10 leading-relaxed animate-fade-up-delay">
              A legacy of sourcing, quality assurance, and trusted trade — built for the
              international buyers of tomorrow.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-2">
              <Link
                to="/contact"
                className="px-8 py-4 bg-gold text-gold-foreground rounded-sm font-medium hover:opacity-90 transition shadow-elegant"
              >
                Request Quote
              </Link>
              <Link
                to="/investors"
                className="px-8 py-4 border border-ivory/40 rounded-sm font-medium hover:bg-ivory/10 transition"
              >
                Investor Relations
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom credentials strip */}
        <div className="absolute bottom-0 inset-x-0 z-10 border-t border-ivory/15 bg-charcoal/40 backdrop-blur-sm">
          <div className="container-prose py-5 flex flex-wrap justify-center md:justify-between items-center gap-4 text-ivory/80 text-xs uppercase tracking-[0.2em]">
            {certs.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Story / Promise */}
      <section className="py-28 container-prose">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <span className="divider-gold mb-4 block" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Our Promise</p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Rooted in Indian agriculture. Trusted across global markets.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-4 space-y-5 text-foreground/80 text-lg leading-relaxed">
            <p>
              FarmAxis Global is a heritage trading institution built for the digital era.
              We exist at the intersection of authentic Indian sourcing and the world's
              growing demand for transparent, reliable supply.
            </p>
            <p>
              Every shipment is a covenant — verified at the farm, certified at the lab,
              and delivered with complete traceability. That is the FarmAxis standard.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-28 bg-secondary/40 border-y border-border">
        <div className="container-prose">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="divider-gold mb-4 inline-block" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">The Catalogue</p>
            <h2 className="font-serif text-4xl md:text-5xl">A curated harvest, export-ready.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div
                key={p.name}
                className="group relative bg-card border border-border rounded-sm overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={productsImg}
                    alt={p.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    style={{ objectPosition: `${20 + i * 15}% center` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-ivory/80">
                    0{i + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-1">{p.name}</h3>
                  <p className="text-xs uppercase tracking-wider text-gold mb-3">{p.origin}</p>
                  <p className="text-sm text-muted-foreground">{p.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="text-sm font-medium text-primary hover:text-gold transition">
              Explore the full catalogue →
            </Link>
          </div>
        </div>
      </section>

      {/* Supply chain journey */}
      <section className="py-28 container-prose">
        <div className="max-w-2xl mb-16">
          <span className="divider-gold mb-4 block" />
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Soil to Shelf</p>
          <h2 className="font-serif text-4xl md:text-5xl">Six stages. One unbroken chain of trust.</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {stages.map((s) => (
            <div key={s.n} className="bg-background p-8 hover:bg-secondary/50 transition-colors">
              <div className="font-serif text-gold text-sm mb-3">{s.n}</div>
              <h3 className="font-serif text-2xl mb-2">{s.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Global presence */}
      <section className="relative py-28 overflow-hidden">
        <img
          src={shippingImg}
          alt="Global shipping"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="container-prose relative z-10 text-ivory">
          <div className="max-w-2xl mb-12">
            <span className="divider-gold mb-4 block" />
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">Global Presence</p>
            <h2 className="font-serif text-4xl md:text-5xl">Trade routes that span continents.</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ivory/15">
            {markets.map((m) => (
              <div key={m} className="bg-charcoal/60 p-6 text-sm tracking-wide">
                {m}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor stats */}
      <section className="py-28 container-prose">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="divider-gold mb-4 inline-block" />
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">By the Numbers</p>
          <h2 className="font-serif text-4xl md:text-5xl">Built for institutional confidence.</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.l} className="text-center border-t border-gold pt-6">
              <div className="font-serif text-5xl md:text-6xl text-primary mb-2">{s.v}</div>
              <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-primary text-primary-foreground">
        <div className="container-prose text-center max-w-3xl">
          <span className="divider-gold mb-6 inline-block" />
          <h2 className="font-serif text-4xl md:text-5xl mb-6 leading-tight">
            Start your global sourcing journey with a partner who understands both farm and freight.
          </h2>
          <p className="opacity-80 mb-10 text-lg">
            Tell us what you need — quotation, samples, packaging, or shipment planning.
          </p>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 bg-gold text-gold-foreground rounded-sm font-medium hover:opacity-90 transition shadow-elegant"
          >
            Begin Inquiry
          </Link>
        </div>
      </section>
    </>
  );
}
