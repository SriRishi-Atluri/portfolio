import Image from "next/image";
import { site } from "@/lib/site";

export function Experience() {
  return (
    <section id="experience" className="border-t border-card-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Experience
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
          Where I&apos;ve been working
        </h2>

        <div className="mt-10 space-y-8">
          {site.experience.map((job) => (
            <article
              key={`${job.company}-${job.role}`}
              className="grid gap-4 border-l-2 border-accent/40 pl-6 sm:grid-cols-[10rem_1fr]"
            >
              <p className="text-sm font-medium text-accent">{job.period}</p>
              <div className="flex items-start gap-4">
                {"logo" in job && job.logo && (
                  <Image
                    src={job.logo}
                    alt={`${job.company} logo`}
                    width={96}
                    height={26}
                    className="mt-1 h-6 w-auto shrink-0 object-contain"
                  />
                )}
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {job.role}
                    <span className="text-muted"> · {job.company}</span>
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-muted">
                    {job.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {site.education.length > 0 && (
          <div className="mt-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Education
            </p>
            <div className="mt-8 space-y-6">
              {site.education.map((edu) => (
                <article
                  key={`${edu.school}-${edu.degree}`}
                  className="flex items-center gap-4 border-l-2 border-card-border pl-6"
                >
                  {"logo" in edu && edu.logo && (
                    <Image
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      width={48}
                      height={48}
                      className="h-12 w-12 shrink-0 object-contain"
                    />
                  )}
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="mt-1 text-muted">{edu.school}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
