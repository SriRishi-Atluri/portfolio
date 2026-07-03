import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-muted">
          © {year} {site.name}
        </p>
        <p className="text-sm text-muted">
          Built by me with Next.js
        </p>
      </div>
    </footer>
  );
}
