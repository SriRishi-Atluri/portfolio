import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";

export function Projects() {
  return (
    <section id="projects" className="border-t border-card-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Projects
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
          Things I&apos;ve built
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          A selection of work I&apos;m proud of — research tools, data pipelines,
          and software that solves real problems.
        </p>

        <ul className="mt-10 divide-y divide-card-border border-y border-card-border">
          {site.projects.map((project) => (
            <li key={project.title}>
              <a
                href={project.href}
                {...(project.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex flex-col gap-4 py-8 transition-colors sm:flex-row sm:items-start sm:justify-between"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3">
                    <h3 className="font-serif text-2xl text-foreground transition-colors group-hover:text-accent">
                      {project.title}
                    </h3>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                  </div>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-accent-muted/50 px-3 py-1 text-xs font-medium text-accent"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
