import { site } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="border-t border-card-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          About
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
          A little about me
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-base leading-relaxed text-muted">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-card-border bg-card p-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                Currently
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-foreground">
                <li className="flex justify-between gap-4 border-b border-card-border pb-3">
                  <span className="text-muted">Based in</span>
                  <span>{site.currently.basedIn}</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-card-border pb-3">
                  <span className="text-muted">Studying</span>
                  <span>{site.currently.studying}</span>
                </li>
                <li className="flex justify-between gap-4 border-b border-card-border pb-3">
                  <span className="text-muted">Working on</span>
                  <span>{site.currently.workingOn}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="text-muted">Open to</span>
                  <span>{site.currently.openTo}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-card-border bg-card p-6">
              <h3 className="text-sm font-medium uppercase tracking-wider text-muted">
                Skills
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {site.skills.flatMap((group) =>
                  group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-card-border bg-background px-3 py-1.5 text-sm text-foreground"
                    >
                      {item}
                    </span>
                  )),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
