import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/site";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);
}

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center px-6 pt-24 pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_20%_0%,rgba(212,165,116,0.08),transparent)]"
      />

      <div className="relative mx-auto grid w-full max-w-5xl gap-12 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16">
        <div className="animate-fade-up flex justify-center lg:justify-start">
          <div
            aria-hidden
            className="flex h-28 w-28 items-center justify-center rounded-full border border-card-border bg-card font-serif text-3xl tracking-tight text-accent sm:h-32 sm:w-32 sm:text-4xl"
          >
            {initials(site.name)}
          </div>
        </div>

        <div>
          <p className="animate-fade-up-delay-1 text-sm text-muted">
            Hi, I&apos;m {site.shortName} —
          </p>

          <h1 className="animate-fade-up-delay-1 mt-2 font-serif text-4xl leading-[1.15] tracking-tight text-foreground sm:text-6xl">
            {site.title}
          </h1>

          <p className="animate-fade-up-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {site.tagline}
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
            >
              About me
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-card-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Mail className="h-4 w-4" />
              Say hello
            </a>
          </div>

          <div className="animate-fade-up-delay-3 mt-8 flex items-center gap-5">
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <span className="text-sm text-muted">{site.location}</span>
          </div>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-accent"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
