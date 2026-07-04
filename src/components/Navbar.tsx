"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-card-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {site.shortName}
        </Link>

        <ul className="hidden items-center gap-8 sm:flex">
          {site.nav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : "text-muted"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href={`mailto:${site.email}`}
            className="rounded-full border border-card-border bg-card px-4 py-1.5 text-sm text-foreground transition-colors hover:border-accent/50 hover:text-accent"
          >
            Email
          </a>
        </div>
      </nav>
    </header>
  );
}
