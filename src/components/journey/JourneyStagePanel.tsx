import type { JourneyStep, LearningMode } from "@/types/content";

interface JourneyStagePanelProps {
  step: JourneyStep;
  mode: LearningMode;
}

export function JourneyStagePanel({ step, mode }: JourneyStagePanelProps) {
  const copy = mode === "simple" ? step.description : step.advancedDescription;

  return (
    <aside className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-wide text-leaf">
        Zoom level {step.zoomLevel}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-ink">{step.title}</h2>
      <p className="mt-4 text-base leading-7 text-ink/75">{copy}</p>
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
    </aside>
  );
}
