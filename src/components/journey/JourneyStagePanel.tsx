import Link from "next/link";
import type { JourneyStep, LearningMode } from "@/types/content";
import { getArticleBySlug } from "@/content/articles";

interface JourneyStagePanelProps {
  step: JourneyStep;
  mode: LearningMode;
  selectedHotspotId?: string | null;
}

export function JourneyStagePanel({
  step,
  mode,
  selectedHotspotId = null
}: JourneyStagePanelProps) {
  const copy = mode === "simple" ? step.description : step.advancedDescription;
  const hasFoundTarget =
    Boolean(step.targetHotspotId) && selectedHotspotId === step.targetHotspotId;
  const relatedArticle = step.relatedArticleSlug
    ? getArticleBySlug(step.relatedArticleSlug)
    : undefined;

  return (
    <aside className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-leaf/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-leaf">
          Zoom level {step.zoomLevel}
        </span>
        <span className="rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold text-ink/65">
          Suggested pause {step.duration}s
        </span>
      </div>
      <h2 className="mt-3 text-2xl font-bold text-ink">{step.title}</h2>
      <p className="mt-4 text-base leading-7 text-ink/75">{copy}</p>
      {step.guidedPrompt ? (
        <div
          className={`mt-5 rounded-md border p-4 ${
            hasFoundTarget
              ? "border-leaf/30 bg-leaf/10"
              : "border-oxygen/20 bg-oxygen/10"
          }`}
        >
          <h3 className="text-sm font-semibold text-ink">Guided focus</h3>
          <p className="mt-2 text-sm leading-6 text-ink/75">
            {hasFoundTarget && step.targetHotspotSuccessMessage
              ? step.targetHotspotSuccessMessage
              : step.guidedPrompt}
          </p>
          {hasFoundTarget ? (
            <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-leaf">
              Keep exploring any hotspot or continue when ready.
            </p>
          ) : null}
        </div>
      ) : null}
      <div className="mt-5 rounded-md border border-glucose/20 bg-glucose/10 p-4">
        <h3 className="text-sm font-semibold text-ink">Why this matters</h3>
        <p className="mt-2 text-sm leading-6 text-ink/75">
          {step.whyThisMatters}
        </p>
      </div>
      <div className="mt-5">
        <h3 className="text-sm font-semibold text-ink">Key concepts</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {step.keyConcepts.map((concept) => (
            <span
              key={concept}
              className="rounded-full bg-oxygen/10 px-3 py-1 text-xs font-medium text-oxygen"
            >
              {concept}
            </span>
          ))}
        </div>
      </div>
      {relatedArticle ? (
        <div className="mt-5 rounded-md border border-leaf/20 bg-leaf/10 p-4">
          <h3 className="text-sm font-semibold text-ink">Learn more</h3>
          <Link
            href={`/learn/${relatedArticle.slug}`}
            className="mt-2 inline-flex text-sm font-semibold text-leaf hover:text-ink focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2"
          >
            {relatedArticle.title}
          </Link>
          <p className="mt-2 text-sm leading-6 text-ink/70">
            {relatedArticle.description}
          </p>
        </div>
      ) : null}
    </aside>
  );
}
