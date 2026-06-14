import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
}

export function ButtonLink({
  href,
  children,
  variant = "primary"
}: ButtonLinkProps) {
  const className =
    variant === "primary"
      ? "inline-flex items-center justify-center rounded-md bg-leaf px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-ink focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2"
      : "inline-flex items-center justify-center rounded-md border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-leaf hover:text-leaf focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2";

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
