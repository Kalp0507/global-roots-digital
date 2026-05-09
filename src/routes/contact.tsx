import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import heroImg from "@/assets/hero-contact.jpg";
import { PageHero } from "@/components/PageHero";
import { submitContact } from "@/lib/contact.functions";
import { toast } from "sonner";

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

const inquiryTypes = [
  { id: "quote", label: "Request Quotation", desc: "Pricing, MOQ & Incoterms" },
  { id: "sample", label: "Sample Request", desc: "Lab & buyer samples" },
  { id: "packaging", label: "Packaging Inquiry", desc: "Private label & bulk" },
  { id: "logistics", label: "Shipment / Logistics", desc: "Containers & freight" },
  { id: "partnership", label: "Investor / Partnership", desc: "Long-term collaboration" },
];

const channels = [
  {
    title: "Trade Desk",
    lines: ["trade@farmaxisglobal.com", "+91 00000 00000"],
    icon: (
      <path d="M3 7l9 6 9-6M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" />
    ),
  },
  {
    title: "Investor Relations",
    lines: ["ir@farmaxisglobal.com"],
    icon: <path d="M3 21V10l9-7 9 7v11M9 21v-6h6v6" />,
  },
  {
    title: "Headquarters",
    lines: ["Mumbai, India"],
    icon: (
      <>
        <path d="M12 22s8-7.5 8-13a8 8 0 10-16 0c0 5.5 8 13 8 13z" />
        <circle cx="12" cy="9" r="2.5" />
      </>
    ),
  },
];

function Contact() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [inquiry, setInquiry] = useState("quote");
  const [tons, setTons] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (submitting || sent) return;
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const payload = {
      inquiry_type: inquiry,
      name: String(fd.get("name") || "").trim(),
      company: String(fd.get("company") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim() || null,
      country: String(fd.get("country") || "").trim() || null,
      volume_tons: tons ? Number(tons) : null,
      message: String(fd.get("message") || "").trim(),
    };

    const { error } = await supabase.from("contact_submissions").insert(payload);
    setSubmitting(false);

    if (error) {
      toast.error("Couldn't send your inquiry. Please try again or email trade@farmaxisglobal.com.");
      return;
    }
    setSent(true);
    toast.success("Inquiry received — our trade desk will be in touch shortly.");
  }

  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Inquiry Portal"
        title={<>Start your global <span className="italic text-gold">sourcing journey.</span></>}
        description="Quotations, samples, packaging, shipment planning — tell us what you need."
        overlay="dark"
      />

      {/* Channel cards */}
      <section className="container-prose -mt-20 relative z-20 grid md:grid-cols-3 gap-5">
        {channels.map((c, i) => (
          <div
            key={c.title}
            className="bg-card border border-border p-7 shadow-elegant rounded-sm hover:border-primary/40 hover:-translate-y-1 transition-all duration-500 animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="w-11 h-11 rounded-sm gradient-gold flex items-center justify-center mb-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 text-charcoal">
                {c.icon}
              </svg>
            </div>
            <h3 className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">{c.title}</h3>
            {c.lines.map((l) => (
              <p key={l} className="font-serif text-lg leading-snug">{l}</p>
            ))}
          </div>
        ))}
      </section>

      {/* Form */}
      <section className="container-prose py-24 grid lg:grid-cols-12 gap-12">
        <aside className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start space-y-8">
          <div>
            <span className="divider-gold mb-4 block" />
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">How we respond</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">
              A real trade desk. <span className="italic text-primary">Real answers.</span>
            </h2>
          </div>
          <ul className="space-y-5 text-foreground/80">
            {[
              { t: "Reply within 1 business day", d: "Often within hours during IST trade hours." },
              { t: "Indicative quote with samples", d: "FOB / CIF pricing with packaging options." },
              { t: "Documentation included", d: "Phyto, COO, COA, packing list & B/L plan." },
            ].map((s, i) => (
              <li key={s.t} className="flex gap-4">
                <span className="font-serif text-gold text-2xl leading-none mt-0.5">0{i + 1}</span>
                <div>
                  <p className="font-medium">{s.t}</p>
                  <p className="text-sm text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </aside>

        <form
          className="lg:col-span-8 bg-card border border-border rounded-sm shadow-soft overflow-hidden"
          onSubmit={handleSubmit}
        >
          {/* Form header */}
          <div className="bg-primary text-primary-foreground px-8 lg:px-10 py-6 flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] opacity-70">Step 01</p>
              <h3 className="font-serif text-2xl">Tell us about your inquiry</h3>
            </div>
            <span className="hidden md:inline-block divider-gold" />
          </div>

          <div className="p-8 lg:p-10 space-y-8">
            {/* Inquiry type chips */}
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Inquiry type
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {inquiryTypes.map((t) => {
                  const active = inquiry === t.id;
                  return (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setInquiry(t.id)}
                      className={`text-left p-4 rounded-sm border transition-all duration-300 ${
                        active
                          ? "border-primary bg-primary/5 shadow-soft"
                          : "border-border bg-background hover:border-primary/40 hover:bg-secondary/40"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className={`font-medium text-sm ${active ? "text-primary" : "text-foreground"}`}>
                            {t.label}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">{t.desc}</p>
                        </div>
                        <span
                          className={`mt-1 w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                            active ? "border-primary bg-primary" : "border-border"
                          }`}
                        >
                          {active && <span className="w-1.5 h-1.5 rounded-full bg-primary-foreground" />}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
              <input type="hidden" name="inquiry" value={inquiry} />
            </div>

            <div className="h-px bg-border" />

            {/* Identity */}
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full name" name="name" required placeholder="e.g. Rohan Mehta" />
              <Field label="Company" name="company" required placeholder="e.g. Atlas Foods Ltd." />
              <Field label="Work email" name="email" type="email" required placeholder="you@company.com" />
              <Field label="Phone (with code)" name="phone" type="tel" placeholder="+44 20 7946 0000" />
              <Field label="Country" name="country" placeholder="United Arab Emirates" />
              <div>
                <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  Approx. volume
                </label>
                <div className="relative">
                  <input
                    name="volume"
                    value={tons}
                    onChange={(e) => setTons(e.target.value.replace(/[^0-9.]/g, ""))}
                    inputMode="decimal"
                    placeholder="e.g. 25"
                    className="w-full bg-background border border-input px-4 py-3 pr-16 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs uppercase tracking-wider text-muted-foreground">
                    Tons
                  </span>
                </div>
              </div>
            </div>

            <div className="h-px bg-border" />

            {/* Message */}
            <div>
              <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                rows={5}
                name="message"
                required
                placeholder="Products of interest, target market, packaging requirements, expected shipment date…"
                className="w-full bg-background border border-input px-4 py-3 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition resize-none"
              />
            </div>

            {/* NDA / consent */}
            <label className="flex items-start gap-3 text-sm text-muted-foreground cursor-pointer group">
              <input type="checkbox" defaultChecked className="mt-1 accent-primary w-4 h-4" />
              <span className="leading-relaxed group-hover:text-foreground transition-colors">
                I consent to FarmAxis Global processing this inquiry and contacting me about my request. Conversations remain confidential.
              </span>
            </label>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={sent || submitting}
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-sm font-medium hover:bg-primary/90 hover:shadow-elegant transition-all disabled:opacity-70 disabled:cursor-default"
              >
                <span>{sent ? "Inquiry received — we'll be in touch" : submitting ? "Sending…" : "Send inquiry"}</span>
                {!sent && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-4 h-4 group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                )}
              </button>
              <p className="text-xs text-muted-foreground">
                Or write directly to <span className="text-foreground">trade@farmaxisglobal.com</span>
              </p>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">
        {label}
        {required && <span className="text-gold ml-1">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full bg-background border border-input px-4 py-3 rounded-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition placeholder:text-muted-foreground/60"
      />
    </div>
  );
}
