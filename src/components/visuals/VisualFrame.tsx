import type { ReactNode } from "react";

interface VisualFrameProps {
  title: string;
  children: ReactNode;
}

export function VisualFrame({ title, children }: VisualFrameProps) {
  return (
    <div className="aspect-[4/3] w-full rounded-lg border border-ink/10 bg-white p-4 shadow-soft">
      <svg
        role="img"
        aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}
        viewBox="0 0 400 300"
        className="h-full w-full"
      >
        <title id={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}>
          {title}
        </title>
        {children}
      </svg>
    </div>
  );
}
