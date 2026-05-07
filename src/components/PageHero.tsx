import type { ReactNode } from "react";

interface PageHeroProps {
  image: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  overlay?: "dark" | "light";
}

export function PageHero({
  image,
  eyebrow,
  title,
  description,
  align = "left",
  overlay = "dark",
}: PageHeroProps) {
  const isDark = overlay === "dark";
  return (
    <section className="relative pt-40 pb-28 lg:pb-36 overflow-hidden min-h-[70vh] flex items-center">
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
      />
      {isDark ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/85" />
          <div className="absolute inset-0 gradient-hero opacity-60" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      )}

      <div
        className={`container-prose relative z-10 ${
          align === "center" ? "text-center mx-auto" : ""
        } ${isDark ? "text-ivory" : "text-foreground"}`}
      >
        <div className={`flex items-center gap-3 mb-6 animate-fade-up ${align === "center" ? "justify-center" : ""}`}>
          <span className="divider-gold" />
          <span className={`text-xs uppercase tracking-[0.3em] ${isDark ? "text-gold animate-shimmer" : "text-muted-foreground"}`}>
            {eyebrow}
          </span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl max-w-4xl leading-[1.05] animate-fade-up-delay">
          {title}
        </h1>
        {description && (
          <p className={`text-lg md:text-xl mt-6 max-w-2xl leading-relaxed animate-fade-up-delay-2 ${isDark ? "text-ivory/85" : "text-foreground/75"}`}>
            {description}
          </p>
        )}
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-float-slow">
        <div className={`w-px h-12 ${isDark ? "bg-ivory/40" : "bg-foreground/30"}`} />
      </div>
    </section>
  );
}
