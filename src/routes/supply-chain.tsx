import { createFileRoute } from "@tanstack/react-router";
import shippingImg from "@/assets/shipping.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/supply-chain")({
  head: () => ({
    meta: [
      { title: "Supply Chain — FarmAxis Global" },
      { name: "description", content: "From farm to port: how FarmAxis Global controls quality, traceability and logistics across every shipment." },
      { property: "og:title", content: "Supply Chain — FarmAxis Global" },
      { property: "og:description", content: "Six controlled stages from soil to shelf, with full traceability." },
    ],
  }),
  component: SupplyChain,
});

const journey = [
  { n: "01", t: "Farm Sourcing", d: "Long-term partnerships with grower collectives across Tamil Nadu, Gujarat, Punjab, Rajasthan and Andhra Pradesh." },
  { n: "02", t: "Procurement & Aggregation", d: "Cluster-level aggregation with weight, moisture and visual quality recorded at intake." },
  { n: "03", t: "Processing", d: "Cleaning, de-stoning, grading, hulling and steam sterilisation at FSSAI/HACCP-certified units." },
  { n: "04", t: "Quality Lab", d: "Third-party validated tests for moisture, microbial load, pesticide residue, and buyer-specific protocols." },
  { n: "05", t: "Packaging", d: "PP, jute, FIBC, vacuum and private-label configurations — built around the buyer's market." },
  { n: "06", t: "Logistics & Documentation", d: "Container consolidation at Mundra / Nhava Sheva / Tuticorin with full APEDA, phyto and shipping docs." },
];

function SupplyChain() {
  return (
    <>
      <PageHero
        image={shippingImg}
        eyebrow="Soil to Shelf"
        title={<>One unbroken <span className="italic text-gold">chain of trust.</span></>}
        description="Six controlled stages — from grower collective to buyer's door."
        overlay="dark"
      />

      <section className="container-prose py-24">
        <div className="space-y-px bg-border border border-border">
          {journey.map((s, i) => (
            <div
              key={s.n}
              className="bg-background grid md:grid-cols-12 gap-6 p-8 lg:p-10 hover:bg-secondary/40 hover:pl-12 transition-all duration-500 group animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="md:col-span-2">
                <span className="font-serif text-4xl text-gold group-hover:scale-110 inline-block transition-transform duration-500">{s.n}</span>
              </div>
              <div className="md:col-span-3">
                <h3 className="font-serif text-2xl group-hover:text-primary transition-colors">{s.t}</h3>
              </div>
              <p className="md:col-span-7 text-foreground/75 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container-prose grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-4xl mb-4">Batch traceability, on demand.</h2>
            <p className="text-foreground/80 leading-relaxed">
              Every consignment carries a unique batch code. Buyers receive farm origin,
              lab certificates, packaging records and shipment documents in a single audit
              trail — because trust is something you should be able to verify.
            </p>
          </div>
          <div className="bg-background border border-border p-8 font-mono text-sm">
            <div className="text-xs text-muted-foreground mb-2">BATCH</div>
            <div className="font-serif text-2xl mb-6">FAX-TUR-2026-0418</div>
            <div className="space-y-2 text-foreground/80">
              <div className="flex justify-between"><span>Origin</span><span>Erode, TN</span></div>
              <div className="flex justify-between"><span>Curcumin</span><span>4.2%</span></div>
              <div className="flex justify-between"><span>Moisture</span><span>8.1%</span></div>
              <div className="flex justify-between"><span>Microbial</span><span>Within limits</span></div>
              <div className="flex justify-between"><span>Vessel</span><span>MV Auriga</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
