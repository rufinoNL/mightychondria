import type { ReactNode } from "react";
import { type VisualLayerMetadata, zoomPathLayers } from "./visualLayers";

interface VisualFrameProps {
  title: string;
  metadata: VisualLayerMetadata;
  children: ReactNode;
  detail?: ReactNode;
  interactive?: boolean;
}

export function VisualFrame({
  title,
  metadata,
  children,
  detail,
  interactive = false
}: VisualFrameProps) {
  return (
    <figure className="overflow-hidden rounded-lg border border-ink/10 bg-white shadow-soft">
      <div className="border-b border-ink/10 bg-white px-4 py-3 sm:px-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="rounded-full bg-leaf/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-leaf">
            {metadata.layerLabel}
          </span>
          <span className="text-xs font-semibold text-ink/55">
            {metadata.zoomProgressLabel}
          </span>
        </div>
        <h3 className="mt-2 text-lg font-bold text-ink">{metadata.focusLabel}</h3>
        <nav
          aria-label="Visual zoom path"
          className="mt-3 overflow-hidden rounded-md border border-ink/10 bg-ink/[0.025] p-2"
        >
          <ol className="flex max-w-full flex-wrap gap-1.5 text-[0.68rem] font-semibold sm:gap-2">
            {zoomPathLayers.map((layer, index) => {
              const layerNumber = index + 1;
              const isCurrent = layerNumber === metadata.zoomLayer;
              const isPrevious = layerNumber < metadata.zoomLayer;

              return (
                <li key={layer} className="min-w-0">
                  <span
                    className={`inline-flex max-w-full items-center rounded-full border px-2 py-1 ${
                      isCurrent
                        ? "border-leaf bg-leaf text-white"
                        : isPrevious
                          ? "border-leaf/20 bg-leaf/10 text-leaf"
                          : "border-ink/10 bg-white text-ink/40"
                    }`}
                  >
                    <span className="truncate">{layer}</span>
                  </span>
                </li>
              );
            })}
          </ol>
        </nav>
        <p className="mt-3 text-sm leading-6 text-ink/70">
          <span className="font-semibold text-ink">Current focus:</span>{" "}
          {metadata.focusLabel}
          {metadata.nextLayerLabel ? (
            <>
              <span className="mx-2 text-ink/30">/</span>
              <span className="font-semibold text-ink">Next zoom:</span>{" "}
              {metadata.nextLayerLabel}
            </>
          ) : null}
        </p>
      </div>
      <div className="bg-[linear-gradient(135deg,#f8fbff_0%,#eef8f2_52%,#fff7ed_100%)] p-4 sm:p-6">
        <svg
          role={interactive ? "group" : "img"}
          aria-labelledby={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}
          viewBox="0 0 400 300"
          className="aspect-[4/3] h-auto w-full"
        >
          <title id={`${title.replace(/\s+/g, "-").toLowerCase()}-title`}>
            {title}
          </title>
          {children}
        </svg>
        {detail ? (
          <div className="mt-4 rounded-md border border-leaf/20 bg-white/90 p-3 text-sm leading-6 text-ink/75 shadow-sm">
            {detail}
          </div>
        ) : null}
      </div>
      <figcaption className="border-t border-ink/10 bg-white px-4 py-3 text-sm text-ink/70 sm:px-5">
        {title}
      </figcaption>
    </figure>
  );
}
