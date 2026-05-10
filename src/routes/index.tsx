import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-farm.jpg";
import shippingImg from "@/assets/shipping.jpg";
import turmericImg from "@/assets/product-turmeric.jpg";
import riceImg from "@/assets/product-rice.jpg";
import bananaImg from "@/assets/product-banana.jpg";
import onionImg from "@/assets/product-onion.jpg";

export const Route = createFileRoute("/")({
  component: Home,
});

const products = [
  { name: "Turmeric", img: turmericImg, origin: "Erode, Tamil Nadu", note: "Spices — high-curcumin, vibrant pigment" },
  { name: "Basmati Rice", img: riceImg, origin: "Punjab & Haryana", note: "Grains — aged long-grain, premium tier" },
  { name: "Banana", img: bananaImg, origin: "Maharashtra & Tamil Nadu", note: "Fruits — Cavendish, export-grade cartons" },
  { name: "Onion", img: onionImg, origin: "Nashik, Maharashtra", note: "Vegetables — red, 50–80 mm, mesh-bagged" },
];

const stages = [
  { n: "01", t: "Farm", d: "Building direct relationships with growers we personally visit and trust." },
  { n: "02", t: "Processing", d: "Partnered with certified facilities for cleaning, grading and sterilisation." },
  { n: "03", t: "Quality Lab", d: "Independent lab checks for moisture, microbial load and pesticide residues." },
  { n: "04", t: "Packaging", d: "Flexible packaging — bulk, retail or private-label as the buyer needs." },
  { n: "05", t: "Port", d: "Shipping through Mundra and Nhava Sheva with experienced freight partners." },
  { n: "06", t: "Buyer", d: "Hands-on coordination and full documentation, every single shipment." },
];

const stats = [
  { v: "Day 1", l: "Founders on the ground" },
  { v: "4", l: "Product categories" },
  { v: "13", l: "SKUs ready to ship" },
  { v: "100%", l: "Personally checked" },
];

const certs = ["APEDA Registered", "FSSAI", "Lab-Tested", "Spices Board"];

const markets = [
  "United Arab Emirates", "Saudi Arabia", "Singapore", "United Kingdom",
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
                New Venture. Honest Sourcing. Big Ambition.
              </span>
            </div>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] mb-6 animate-fade-up">
              Indian Farms.
              <br />
              World Tables.
              <br />
              <span className="italic text-gold">One Honest Shipment at a Time.</span>
            </h1>
            <p className="text-lg md:text-xl opacity-85 max-w-xl mb-10 leading-relaxed animate-fade-up-delay">
              We're a young, founder-led export house built on a simple idea: source it
              ourselves, check it ourselves, and stand behind every box that leaves the port.
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
              A small team. A high standard. No shortcuts.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-4 space-y-5 text-foreground/80 text-lg leading-relaxed">
            <p>
              FarmAxis Global is just getting started — and that's exactly why it matters
              who you work with. Every grower we partner with, every lot we accept, every
              container we load is decided by the founders, not a faceless desk.
            </p>
            <p>
              We may be early, but the standard isn't. Lab-tested, photographed at loading,
              and shipped with full documentation. If something isn't right, you hear it
              from us first.
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
            <h2 className="font-serif text-4xl md:text-5xl">One pick from each shelf.</h2>
            <p className="text-muted-foreground mt-4">A taste of what we ship — spices, grains, fruits and vegetables.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((p, i) => (
              <div
                key={p.name}
                className="group relative bg-card border border-border rounded-sm overflow-hidden hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] text-ivory/90">
                    0{i + 1}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
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
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-3">First Markets</p>
            <h2 className="font-serif text-4xl md:text-5xl">Starting close. Aiming far.</h2>
            <p className="text-ivory/80 mt-4 max-w-xl">Initial focus markets where we're actively quoting and building buyer relationships.</p>
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
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Where We Are</p>
          <h2 className="font-serif text-4xl md:text-5xl">Small numbers. Honest ones.</h2>
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
