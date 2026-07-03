import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="border-t border-card-border px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Contact
        </p>
        <h2 className="mt-3 font-serif text-3xl tracking-tight text-foreground sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 max-w-lg text-muted">
          I&apos;m always happy to chat about projects, ideas, or opportunities.
          The best way to reach me is email.
        </p>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <Mail className="h-4 w-4" />
            {site.email}
          </a>

          <div className="flex items-center gap-6">
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
