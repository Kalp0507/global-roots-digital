import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import heroImg from "@/assets/hero-contact.jpg";
import { PageHero } from "@/components/PageHero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — FarmAxis Global" },
      { name: "description", content: "Request a quotation, sample, or schedule a partnership conversation with FarmAxis Global." },
      { property: "og:title", content: "Contact FarmAxis Global" },
      { property: "og:description", content: "Begin your global sourcing journey with a trusted Indian export partner." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Inquiry Portal"
        title={<>Start your global <span className="italic text-gold">sourcing journey.</span></>}
        description="Quotations, samples, packaging, shipment planning — tell us what you need."
        overlay="dark"
      />

      <section className="container-prose pb-24 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-gold mb-2">Trade desk</h3>
            <p className="text-lg">trade@farmaxisglobal.com</p>
            <p className="text-lg">+91 00000 00000</p>
          </div>
          <div>
            <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-gold mb-2">Investor relations</h3>
            <p className="text-lg">ir@farmaxisglobal.com</p>
          </div>
          <div>
            <h3 className="font-serif text-xs uppercase tracking-[0.25em] text-gold mb-2">Headquarters</h3>
            <p className="text-lg">Mumbai, India</p>
          </div>
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Typical response within one business day. For urgent shipment inquiries, call directly.
            </p>
          </div>
        </div>

        <form
          className="lg:col-span-7 bg-card border border-border p-8 lg:p-10 space-y-5 shadow-soft"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Full name" name="name" required />
            <Field label="Company" name="company" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Country" name="country" />
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Inquiry type</label>
            <select className="w-full bg-background border border-input px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary">
              <option>Request quotation</option>
              <option>Sample request</option>
              <option>Packaging inquiry</option>
              <option>Shipment / logistics</option>
              <option>Investor / partnership</option>
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Message</label>
            <textarea rows={5} required className="w-full bg-background border border-input px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary" />
          </div>

          <button
            type="submit"
            className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-sm font-medium hover:opacity-90 transition shadow-soft"
          >
            {sent ? "Inquiry received — we'll be in touch" : "Send inquiry"}
          </button>
        </form>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-background border border-input px-4 py-3 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
}
