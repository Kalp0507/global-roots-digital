import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-about.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — FarmAxis Global" },
      { name: "description", content: "FarmAxis Global is a heritage Indian agricultural export house, built on trust, quality, and global capability." },
      { property: "og:title", content: "About FarmAxis Global" },
      { property: "og:description", content: "Our mission, vision and the values that ground every shipment." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Our Story"
        title={<>A heritage trading house, built for the <span className="italic text-gold">digital era.</span></>}
        description="Rooted in Indian soil. Engineered for global trade."
        overlay="dark"
      />

      <section className="container-prose py-20 grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-serif text-3xl mb-4">Mission</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">
            To connect Indian agricultural excellence with global demand through trusted
            sourcing, rigorous quality assurance, and transparent supply chains.
          </p>
        </div>
        <div>
          <h2 className="font-serif text-3xl mb-4">Vision</h2>
          <p className="text-foreground/80 leading-relaxed text-lg">
            To become one of the most trusted global trade houses representing Indian
            agriculture — across commodities, processed foods and supply-chain services.
          </p>
        </div>
      </section>

      <section className="bg-secondary/40 border-y border-border py-20">
        <div className="container-prose">
          <h2 className="font-serif text-4xl mb-12">What we stand for.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { t: "Traditional Trust", d: "Legacy, integrity, and relationship-driven business." },
              { t: "Premium Quality", d: "Process control, certifications, international standards." },
              { t: "Global Capability", d: "Logistics expertise across continents and corridors." },
              { t: "Digital Intelligence", d: "Data-driven decisions and complete transparency." },
              { t: "Authentic Sourcing", d: "Direct partnerships with grower collectives." },
              { t: "Long-Term Vision", d: "Building an institution, not chasing transactions." },
            ].map((v, i) => (
              <div
                key={v.t}
                className="bg-background p-8 border border-border hover-lift hover:border-primary/40 animate-fade-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <h3 className="font-serif text-xl mb-2 text-primary">{v.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
