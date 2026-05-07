import { createFileRoute, Link } from "@tanstack/react-router";
import turmericImg from "@/assets/product-turmeric.jpg";
import cuminImg from "@/assets/product-cumin.jpg";
import sesameImg from "@/assets/product-sesame.jpg";
import riceImg from "@/assets/product-rice.jpg";
import corianderImg from "@/assets/product-coriander.jpg";
import chilliImg from "@/assets/product-chilli.jpg";
import heroImg from "@/assets/hero-contact.jpg";
import { PageHero } from "@/components/PageHero";

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
  { name: "Turmeric", img: turmericImg, origin: "Erode, Tamil Nadu", grade: "Curcumin 3–5%", pack: "25/50 kg PP bags", harvest: "Jan – Mar" },
  { name: "Cumin Seeds", img: cuminImg, origin: "Unjha, Gujarat", grade: "Singapore / Europe quality", pack: "25 kg jute / PP", harvest: "Feb – Apr" },
  { name: "Sesame Seeds", img: sesameImg, origin: "Saurashtra, Gujarat", grade: "99.95% purity, hulled & natural", pack: "25 kg PP / FIBC", harvest: "Oct – Dec" },
  { name: "Basmati Rice", img: riceImg, origin: "Punjab & Haryana", grade: "1121 / 1509 / Pusa, aged", pack: "5/10/25 kg, private label", harvest: "Year-round" },
  { name: "Coriander Seeds", img: corianderImg, origin: "Rajasthan & MP", grade: "Eagle / Scooter / Parrot", pack: "25/50 kg", harvest: "Mar – May" },
  { name: "Red Chilli", img: chilliImg, origin: "Guntur, Andhra Pradesh", grade: "Teja / Sannam / 334", pack: "25 kg jute", harvest: "Dec – Mar" },
];

function Products() {
  return (
    <>
      <section className="pt-40 pb-16 container-prose">
        <span className="divider-gold mb-4 block" />
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">Catalogue</p>
        <h1 className="font-serif text-5xl md:text-7xl max-w-3xl leading-[1.05]">
          A curated harvest, <span className="italic text-primary">export-ready.</span>
        </h1>
        <p className="text-lg text-foreground/70 mt-6 max-w-2xl">
          Every product is sourced from origin clusters, processed at certified facilities
          and shipped with documentation that meets international buyer protocols.
        </p>
      </section>

      <section className="container-prose pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogue.map((p, i) => (
            <article
              key={p.name}
              className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-elegant hover:border-primary/40 hover:-translate-y-1 transition-all duration-500"
            >
              <div className="aspect-[4/5] overflow-hidden bg-secondary">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-7">
                <p className="text-xs uppercase tracking-[0.25em] text-gold mb-2">0{i + 1}</p>
                <h2 className="font-serif text-2xl mb-4 group-hover:text-primary transition-colors">{p.name}</h2>
                <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                  <dt className="text-muted-foreground">Origin</dt><dd className="text-foreground/90">{p.origin}</dd>
                  <dt className="text-muted-foreground">Grade</dt><dd className="text-foreground/90">{p.grade}</dd>
                  <dt className="text-muted-foreground">Packaging</dt><dd className="text-foreground/90">{p.pack}</dd>
                  <dt className="text-muted-foreground">Harvest</dt><dd className="text-foreground/90">{p.harvest}</dd>
                </dl>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-sm font-medium hover:bg-primary/90 hover:shadow-elegant transition-all"
          >
            Request a quotation
          </Link>
        </div>
      </section>
    </>
  );
}
