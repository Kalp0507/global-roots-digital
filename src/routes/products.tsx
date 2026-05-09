import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import turmericImg from "@/assets/product-turmeric.jpg";
import cuminImg from "@/assets/product-cumin.jpg";
import sesameImg from "@/assets/product-sesame.jpg";
import riceImg from "@/assets/product-rice.jpg";
import corianderImg from "@/assets/product-coriander.jpg";
import chilliImg from "@/assets/product-chilli.jpg";
import onionImg from "@/assets/product-onion.jpg";
import tomatoImg from "@/assets/product-tomato.jpg";
import greenChilliImg from "@/assets/product-green-chilli.jpg";
import bananaImg from "@/assets/product-banana.jpg";
import guavaImg from "@/assets/product-guava.jpg";
import chikooImg from "@/assets/product-chikoo.jpg";
import watermelonImg from "@/assets/product-watermelon.jpg";
import heroImg from "@/assets/hero-contact.jpg";
import { PageHero } from "@/components/PageHero";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — FarmAxis Global" },
      { name: "description", content: "Premium Indian spices, seeds, rice, fresh fruits and vegetables — sourced, processed and exported to international standards." },
      { property: "og:title", content: "Products — FarmAxis Global" },
      { property: "og:description", content: "Spices, grains, fresh fruits and vegetables, export-ready with full certification." },
    ],
  }),
  component: Products,
});

type Category = "Spices" | "Grains" | "Vegetables" | "Fruits";

interface Product {
  name: string;
  img: string;
  category: Category;
  origin: string;
  grade: string;
  pack: string;
  harvest: string;
}

const catalogue: Product[] = [
  { name: "Turmeric", img: turmericImg, category: "Spices", origin: "Erode, Tamil Nadu", grade: "Curcumin 3–5%", pack: "25/50 kg PP bags", harvest: "Jan – Mar" },
  { name: "Cumin Seeds", img: cuminImg, category: "Spices", origin: "Unjha, Gujarat", grade: "Singapore / Europe quality", pack: "25 kg jute / PP", harvest: "Feb – Apr" },
  { name: "Sesame Seeds", img: sesameImg, category: "Grains", origin: "Saurashtra, Gujarat", grade: "99.95% purity, hulled & natural", pack: "25 kg PP / FIBC", harvest: "Oct – Dec" },
  { name: "Basmati Rice", img: riceImg, category: "Grains", origin: "Punjab & Haryana", grade: "1121 / 1509 / Pusa, aged", pack: "5/10/25 kg, private label", harvest: "Year-round" },
  { name: "Coriander Seeds", img: corianderImg, category: "Spices", origin: "Rajasthan & MP", grade: "Eagle / Scooter / Parrot", pack: "25/50 kg", harvest: "Mar – May" },
  { name: "Red Chilli", img: chilliImg, category: "Spices", origin: "Guntur, Andhra Pradesh", grade: "Teja / Sannam / 334", pack: "25 kg jute", harvest: "Dec – Mar" },
  { name: "Onion", img: onionImg, category: "Vegetables", origin: "Nashik, Maharashtra", grade: "Red / Pink, 50–80 mm", pack: "5/10/25 kg mesh bags", harvest: "Year-round" },
  { name: "Tomato", img: tomatoImg, category: "Vegetables", origin: "Karnataka & Maharashtra", grade: "Hybrid, firm export grade", pack: "5/10 kg CFB cartons", harvest: "Year-round" },
  { name: "Green Chillies", img: greenChilliImg, category: "Vegetables", origin: "Andhra Pradesh & Karnataka", grade: "G4 / Pusa Jwala", pack: "5/10 kg CFB cartons", harvest: "Year-round" },
  { name: "Banana", img: bananaImg, category: "Fruits", origin: "Maharashtra & Tamil Nadu", grade: "Cavendish / Grand Naine", pack: "13.5 kg CFB cartons", harvest: "Year-round" },
  { name: "Guava", img: guavaImg, category: "Fruits", origin: "Uttar Pradesh & Maharashtra", grade: "Allahabad Safeda / Pink", pack: "4/5 kg CFB cartons", harvest: "Aug – Mar" },
  { name: "Chikoo (Sapodilla)", img: chikooImg, category: "Fruits", origin: "Gujarat & Maharashtra", grade: "Kalipatti, hand-picked", pack: "3/5 kg CFB cartons", harvest: "Oct – Mar" },
  { name: "Watermelon", img: watermelonImg, category: "Fruits", origin: "Maharashtra & Karnataka", grade: "Sugar Baby / Kiran, 3–6 kg", pack: "Bulk / palletised", harvest: "Feb – Jun" },
];

const filters: ReadonlyArray<"All" | Category> = ["All", "Spices", "Grains", "Fruits", "Vegetables"];

function Products() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: catalogue.length };
    for (const p of catalogue) c[p.category] = (c[p.category] ?? 0) + 1;
    return c;
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return catalogue.filter((p) => {
      const matchCat = active === "All" || p.category === active;
      if (!matchCat) return false;
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.origin.toLowerCase().includes(q) ||
        p.grade.toLowerCase().includes(q)
      );
    });
  }, [active, query]);

  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Catalogue"
        title={<>A curated harvest, <span className="italic text-gold">export-ready.</span></>}
        description="Spices, grains, fresh fruits and vegetables — sourced from origin clusters, processed at certified facilities and shipped with documentation that meets international buyer protocols."
        overlay="dark"
      />

      <section className="container-prose py-24">
        {/* Filters */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => {
              const isActive = active === f;
              return (
                <button
                  key={f}
                  type="button"
                  onClick={() => setActive(f)}
                  className={cn(
                    "px-4 py-2 rounded-sm text-sm font-medium border transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-elegant"
                      : "bg-card text-foreground/80 border-border hover:border-primary/50 hover:text-primary",
                  )}
                  aria-pressed={isActive}
                >
                  {f}
                  <span className={cn("ml-2 text-xs", isActive ? "opacity-80" : "text-muted-foreground")}>
                    {counts[f] ?? 0}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="md:w-72">
            <Input
              type="search"
              placeholder="Search by name, origin, grade…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search products"
            />
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-24 border border-dashed border-border rounded-sm">
            <p className="text-muted-foreground">No products match your filters.</p>
            <button
              type="button"
              onClick={() => { setActive("All"); setQuery(""); }}
              className="mt-4 text-sm text-primary hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((p, i) => (
              <article
                key={p.name}
                className="group bg-card border border-border rounded-sm overflow-hidden hover:shadow-elegant hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="aspect-[4/5] overflow-hidden bg-secondary relative">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={1024}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] bg-background/90 text-foreground/90 backdrop-blur-sm rounded-sm border border-border">
                    {p.category}
                  </span>
                </div>
                <div className="p-7">
                  <p className="text-xs uppercase tracking-[0.25em] text-gold mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </p>
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
        )}

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
