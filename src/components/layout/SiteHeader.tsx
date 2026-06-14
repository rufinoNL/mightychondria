import Link from "next/link";
import { siteConfig } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-base font-bold text-ink">
          {siteConfig.name}
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-4 text-sm">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-medium text-ink/70 transition hover:text-leaf focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
