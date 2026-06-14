import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-sm text-ink/70 sm:px-6 md:grid-cols-[1fr_auto] lg:px-8">
        <p>
          The Human Energy Journey is educational content, not medical advice.
        </p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-4">
          <Link href="/privacy" className="hover:text-leaf">
            Privacy
          </Link>
          <Link href="/cookies" className="hover:text-leaf">
            Cookies
          </Link>
          <Link href="/disclaimer" className="hover:text-leaf">
            Disclaimer
          </Link>
        </nav>
      </div>
    </footer>
  );
}
