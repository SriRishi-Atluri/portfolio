import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";

export function LandingHighlights() {
  return (
    <section className="border-t border-card-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Explore
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
          More about me
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {site.nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`group animate-fade-up-delay-${index + 1} rounded-2xl border border-card-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl text-foreground transition-colors group-hover:text-accent">
                  {item.label}
                </h3>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
