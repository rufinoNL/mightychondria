"use client";

import Link from "next/link";
import { useCallback, useMemo, useState } from "react";
import type { Article, JourneyStep, LearningMode } from "@/types/content";
import { JourneyVisual } from "@/components/visuals/JourneyVisual";
import { getArticleBySlug } from "@/content/articles";
import { JourneyControls } from "./JourneyControls";
import { JourneyProgress } from "./JourneyProgress";
import { JourneyStagePanel } from "./JourneyStagePanel";
import { LearningModeToggle } from "./LearningModeToggle";

interface JourneyExperienceProps {
  steps: JourneyStep[];
}

export function JourneyExperience({ steps }: JourneyExperienceProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [learningMode, setLearningMode] = useState<LearningMode>("simple");
  const [hasStarted, setHasStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [selectedHotspotId, setSelectedHotspotId] = useState<string | null>(
    null
  );

  const activeStep = steps[activeStepIndex];
  const totalSteps = steps.length;
  const isLastStep = activeStepIndex === totalSteps - 1;
  const compactStageLabels: Record<string, string> = {
    "small-intestine": "Intestine",
    "electron-transport-chain": "ETC",
    "atp-production": "ATP"
  };

  const completionSummary = useMemo(
    () => [
      "Food was broken into absorbable nutrients.",
      "Nutrients and oxygen reached cells through circulation.",
      "Mitochondria converted energy from nutrients into ATP, with oxygen helping complete the electron transport process."
    ],
    []
  );
  const relatedArticles = useMemo(() => {
    const slugs = new Set(
      steps
        .map((step) => step.relatedArticleSlug)
        .filter((slug): slug is string => Boolean(slug))
    );

    return Array.from(slugs)
      .map((slug) => getArticleBySlug(slug))
      .filter((article): article is Article => Boolean(article));
  }, [steps]);

  function goBack() {
    setIsComplete(false);
    setSelectedHotspotId(null);
    setActiveStepIndex((index) => Math.max(0, index - 1));
  }

  function startJourney() {
    setHasStarted(true);
    setIsComplete(false);
    setSelectedHotspotId(null);
    setActiveStepIndex(0);
  }

  function goToStep(index: number) {
    setHasStarted(true);
    setIsComplete(false);
    setSelectedHotspotId(null);
    setActiveStepIndex(Math.max(0, Math.min(totalSteps - 1, index)));
  }

  function goNext() {
    setHasStarted(true);
    setSelectedHotspotId(null);

    if (isLastStep) {
      setIsComplete(true);
      return;
    }

    setActiveStepIndex((index) => Math.min(totalSteps - 1, index + 1));
  }

  function restart() {
    setActiveStepIndex(0);
    setHasStarted(false);
    setIsComplete(false);
    setSelectedHotspotId(null);
    setLearningMode("simple");
  }

  const handleHotspotSelect = useCallback((hotspotId: string | null) => {
    setSelectedHotspotId(hotspotId);
  }, []);

  if (!activeStep) {
    return (
      <div className="mx-auto max-w-3xl px-4 pb-16 text-center sm:px-6 lg:px-8">
        <div className="rounded-lg border border-ink/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-ink">Journey unavailable</h2>
          <p className="mt-3 text-ink/70">
            No journey stages are available yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(320px,0.85fr)] lg:items-start lg:px-8">
      <div className="space-y-5">
        <div className="rounded-lg border border-ink/10 bg-white p-3 shadow-soft sm:p-5">
          {hasStarted ? (
            <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <JourneyProgress
                current={isComplete ? totalSteps : activeStepIndex + 1}
                total={totalSteps}
              />
            </div>
          ) : null}
          <div className="mb-5 overflow-hidden rounded-lg border border-ink/10 bg-ink/[0.03] px-2 py-3">
            <ol
              className="flex max-w-full gap-2 overflow-x-auto px-1 py-1 text-xs font-medium text-ink/60 md:grid md:grid-cols-9 md:overflow-visible"
              aria-label="Journey stages"
            >
              {steps.map((step, index) => {
                const isActive =
                  hasStarted && !isComplete && index === activeStepIndex;
                const isVisited =
                  isComplete || (hasStarted && index < activeStepIndex);
                const status = isActive ? "Current" : isVisited ? "Done" : "Stage";
                const compactLabel = compactStageLabels[step.id] ?? step.title;

                return (
                  <li key={step.id} className="min-w-[5.5rem] md:min-w-0">
                    <button
                      type="button"
                      onClick={() => goToStep(index)}
                      aria-current={isActive ? "step" : undefined}
                      aria-label={`Go to stage ${index + 1}: ${step.title}`}
                      className={`h-full min-h-14 w-full rounded-md border px-2 py-2 text-center transition focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2 ${
                        isActive
                          ? "border-leaf bg-leaf text-white shadow-sm"
                          : isVisited
                            ? "border-leaf/20 bg-white text-leaf hover:border-leaf"
                            : "border-ink/10 bg-white text-ink/65 hover:border-leaf hover:text-leaf"
                      }`}
                    >
                      <span className="block text-[0.65rem] font-bold uppercase tracking-wide opacity-70">
                        {status} {index + 1}
                      </span>
                      <span className="mt-1 block truncate text-xs font-semibold leading-4">
                        {compactLabel}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
          {!hasStarted ? (
            <div className="grid min-h-[360px] place-items-center rounded-lg bg-[linear-gradient(135deg,#e9f7f1_0%,#f8fbff_55%,#fff7ed_100%)] p-6 text-center sm:min-h-[440px] sm:p-8">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-wide text-leaf">
                  Interactive ATP journey
                </p>
                <h2 className="mt-3 text-3xl font-bold text-ink">
                  Trace one meal into cellular ATP.
                </h2>
                <p className="mt-4 text-base leading-7 text-ink/75">
                  Move through {totalSteps} stages, from the first bite to
                  ATP synthase. Switch between simple and advanced explanations
                  at any point.
                </p>
                <div className="mt-6 grid gap-3 text-left sm:grid-cols-3">
                  <div className="rounded-md bg-white/80 p-3">
                    <p className="text-sm font-semibold text-ink">Digest</p>
                    <p className="mt-1 text-xs leading-5 text-ink/70">
                      Break food into absorbable molecules.
                    </p>
                  </div>
                  <div className="rounded-md bg-white/80 p-3">
                    <p className="text-sm font-semibold text-ink">Deliver</p>
                    <p className="mt-1 text-xs leading-5 text-ink/70">
                      Move nutrients and oxygen to cells.
                    </p>
                  </div>
                  <div className="rounded-md bg-white/80 p-3">
                    <p className="text-sm font-semibold text-ink">Convert</p>
                    <p className="mt-1 text-xs leading-5 text-ink/70">
                      Use mitochondria to make ATP available.
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={startJourney}
                  className="mt-7 rounded-md bg-leaf px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2"
                >
                  Begin journey
                </button>
              </div>
            </div>
          ) : isComplete ? (
            <div className="flex min-h-[320px] flex-col justify-center rounded-lg bg-[linear-gradient(135deg,#e9f7f1_0%,#fff7ed_100%)] p-6 sm:min-h-[420px] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-leaf">
                Journey complete
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink">
                You followed food all the way to ATP.
              </h2>
              <p className="mt-4 text-base leading-7 text-ink/75">
                The core pattern is now visible: digestion creates absorbable
                nutrients, circulation delivers nutrients and oxygen, and cells
                use mitochondrial pathways to convert nutrient energy into ATP.
              </p>
              <ul className="mt-6 grid gap-3 text-base leading-7 text-ink/75">
                {completionSummary.map((item) => (
                  <li key={item} className="rounded-md bg-white/80 p-3">
                    {item}
                  </li>
                ))}
              </ul>
              {relatedArticles.length > 0 ? (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/70">
                    Keep exploring
                  </h3>
                  <div className="mt-3 grid gap-2 sm:grid-cols-3">
                    {relatedArticles.slice(0, 3).map((article) => (
                      <Link
                        key={article.slug}
                        href={`/learn/${article.slug}`}
                        className="rounded-md bg-white/80 p-3 text-sm font-semibold text-ink transition hover:text-leaf focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2"
                      >
                        {article.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/learn"
                  className="rounded-md bg-leaf px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2"
                >
                  Continue learning
                </Link>
                <button
                  type="button"
                  onClick={restart}
                  className="rounded-md border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-leaf hover:text-leaf focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2"
                >
                  Restart from intro
                </button>
              </div>
            </div>
          ) : (
            <JourneyVisual
              type={activeStep.visualType}
              onHotspotSelect={handleHotspotSelect}
            />
          )}
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <LearningModeToggle value={learningMode} onChange={setLearningMode} />
        </div>
        {!hasStarted ? (
          <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-bold text-ink">What you will learn</h2>
            <p className="mt-4 text-base leading-7 text-ink/75">
              This journey connects everyday food choices to the cellular
              chemistry that powers movement, repair, temperature regulation,
              and thinking.
            </p>
            <div className="mt-5 grid gap-3 text-sm text-ink/75">
              <div className="rounded-md bg-leaf/10 p-3">
                <span className="font-semibold text-ink">Zoom levels:</span>{" "}
                body systems to mitochondria to ATP synthase.
              </div>
              <div className="rounded-md bg-oxygen/10 p-3">
                <span className="font-semibold text-ink">Two modes:</span>{" "}
                simple explanations first, advanced terms when wanted.
              </div>
              <div className="rounded-md bg-glucose/10 p-3">
                <span className="font-semibold text-ink">Key concepts:</span>{" "}
                oxygen, electron carriers, gradients, heat, ATP, and ROS.
              </div>
            </div>
          </div>
        ) : !isComplete ? (
          <JourneyStagePanel
            step={activeStep}
            mode={learningMode}
            selectedHotspotId={selectedHotspotId}
          />
        ) : (
          <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-bold text-ink">Key takeaway</h2>
            <p className="mt-4 text-base leading-7 text-ink/75">
              ATP production depends on a chain of connected systems. Digestion,
              circulation, oxygen delivery, cell metabolism, and mitochondrial
              membranes all matter.
            </p>
          </div>
        )}
        {hasStarted ? (
          <JourneyControls
            canGoBack={activeStepIndex > 0}
            isLastStep={isLastStep}
            isComplete={isComplete}
            currentStepTitle={activeStep.title}
            onBack={goBack}
            onNext={goNext}
            onRestart={restart}
          />
        ) : null}
      </div>
    </div>
  );
}
