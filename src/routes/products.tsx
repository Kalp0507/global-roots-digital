import { createFileRoute, Link } from "@tanstack/react-router";
import productsImg from "@/assets/products.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — FarmAxis Global" },
      { name: "description", content: "Premium Indian spices, seeds and rice — sourced, processed and exported to international standards." },
      { property: "og:title", content: "Products — FarmAxis Global" },
      { property: "og:description", content: "Turmeric, cumin, sesame, basmati rice and more, export-ready with full certification." },
    ],
  }),
  component: Products,
});

const catalogue = [
  { name: "Turmeric", origin: "Erode, Tamil Nadu", grade: "Curcumin 3–5%", pack: "25/50 kg PP bags", harvest: "Jan – Mar" },
  { name: "Cumin Seeds", origin: "Unjha, Gujarat", grade: "Singapore / Europe quality", pack: "25 kg jute / PP", harvest: "Feb – Apr" },
  { name: "Sesame Seeds", origin: "Saurashtra, Gujarat", grade: "99.95% purity, hulled & natural", pack: "25 kg PP / FIBC", harvest: "Oct – Dec" },
  { name: "Basmati Rice", origin: "Punjab & Haryana", grade: "1121 / 1509 / Pusa, aged", pack: "5/10/25 kg, private label", harvest: "Year-round" },
  { name: "Coriander Seeds", origin: "Rajasthan & MP", grade: "Eagle / Scooter / Parrot", pack: "25/50 kg", harvest: "Mar – May" },
  { name: "Red Chilli", origin: "Guntur, Andhra Pradesh", grade: "Teja / Sannam / 334", pack: "25 kg jute", harvest: "Dec – Mar" },
];

function Products() {
  return (
    <>
      <section className="pt-40 pb-16 container-prose">
        <span className="divider-gold mb-4 block" />
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Catalogue</p>
        <h1 className="font-serif text-5xl md:text-7xl max-w-3xl leading-[1.05]">
          A curated harvest, export-ready.
        </h1>
        <p className="text-lg text-foreground/70 mt-6 max-w-2xl">
          Every product is sourced from origin clusters, processed at certified facilities
          and shipped with documentation that meets international buyer protocols.
        </p>
      </section>

      <section className="container-prose pb-24">
        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {catalogue.map((p, i) => (
            <article key={p.name} className="bg-background p-8 lg:p-10 hover:bg-secondary/40 transition">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold mb-2">0{i + 1}</p>
                  <h2 className="font-serif text-3xl">{p.name}</h2>
                </div>
                <div className="w-20 h-20 rounded-sm overflow-hidden border border-border">
                  <img src={productsImg} alt={p.name} loading="lazy" className="w-full h-full object-cover" style={{ objectPosition: `${15 + i * 12}% center` }} />
                </div>
              </div>
              <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
                <dt className="text-muted-foreground">Origin</dt><dd>{p.origin}</dd>
                <dt className="text-muted-foreground">Grade</dt><dd>{p.grade}</dd>
                <dt className="text-muted-foreground">Packaging</dt><dd>{p.pack}</dd>
                <dt className="text-muted-foreground">Harvest</dt><dd>{p.harvest}</dd>
              </dl>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/contact" className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-sm font-medium hover:opacity-90 shadow-soft">
            Request a quotation
          </Link>
        </div>
      </section>
    </>
  );
}
