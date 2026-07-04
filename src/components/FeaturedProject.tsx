import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function FeaturedProject() {
  const project = site.projects.find((p) => p.featured);
  if (!project) return null;

  return (
    <section className="border-t border-card-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="animate-fade-up text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Featured work
        </p>

        <a
          href={project.href}
          {...(project.href.startsWith("http")
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="animate-fade-up-delay-1 group mt-6 block rounded-2xl border border-card-border bg-card p-8 transition-colors hover:border-accent/50 sm:p-10"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h2 className="font-serif text-3xl tracking-tight text-foreground transition-colors group-hover:text-accent sm:text-4xl">
              {project.title}
            </h2>
            <ArrowUpRight className="mt-1 h-6 w-6 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
          </div>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {project.description}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-accent-muted/50 px-3 py-1 text-xs font-medium text-accent"
              >
                {tag}
              </li>
            ))}
          </ul>
        </a>
      </div>
    </section>
  );
}
