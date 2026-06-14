"use client";

import { useMemo, useState } from "react";
import type { JourneyStep, LearningMode } from "@/types/content";
import { JourneyVisual } from "@/components/visuals/JourneyVisual";
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
  const [isComplete, setIsComplete] = useState(false);

  const activeStep = steps[activeStepIndex];
  const totalSteps = steps.length;
  const isLastStep = activeStepIndex === totalSteps - 1;

  const completionSummary = useMemo(
    () => [
      "Food was broken into absorbable nutrients.",
      "Nutrients and oxygen reached cells through circulation.",
      "Mitochondria converted energy from nutrients into ATP, with oxygen helping complete the electron transport process."
    ],
    []
  );

  function goBack() {
    setIsComplete(false);
    setActiveStepIndex((index) => Math.max(0, index - 1));
  }

  function goNext() {
    if (isLastStep) {
      setIsComplete(true);
      return;
    }

    setActiveStepIndex((index) => Math.min(totalSteps - 1, index + 1));
  }

  function restart() {
    setActiveStepIndex(0);
    setIsComplete(false);
  }

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
    <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)] lg:px-8">
      <div className="space-y-5">
        <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-sm">
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <JourneyProgress
              current={isComplete ? totalSteps : activeStepIndex + 1}
              total={totalSteps}
            />
          </div>
          <ol
            className="mb-5 grid grid-cols-3 gap-2 text-xs font-medium text-ink/60 sm:grid-cols-5 lg:grid-cols-9"
            aria-label="Journey stages"
          >
            {steps.map((step, index) => {
              const isActive = !isComplete && index === activeStepIndex;
              const isVisited = isComplete || index < activeStepIndex;

              return (
                <li
                  key={step.id}
                  aria-current={isActive ? "step" : undefined}
                  className={`rounded-md border px-2 py-2 text-center ${
                    isActive
                      ? "border-leaf bg-leaf text-white"
                      : isVisited
                        ? "border-leaf/20 bg-leaf/10 text-leaf"
                        : "border-ink/10 bg-white"
                  }`}
                >
                  {index + 1}
                  <span className="sr-only">. {step.title}</span>
                </li>
              );
            })}
          </ol>
          {isComplete ? (
            <div className="flex min-h-[320px] flex-col justify-center rounded-lg bg-leaf/10 p-6 sm:min-h-[420px] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-leaf">
                Journey complete
              </p>
              <h2 className="mt-3 text-3xl font-bold text-ink">
                Food has become usable cellular energy.
              </h2>
              <ul className="mt-6 space-y-3 text-base leading-7 text-ink/75">
                {completionSummary.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ) : (
            <JourneyVisual type={activeStep.visualType} />
          )}
        </div>
      </div>

      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4">
          <LearningModeToggle value={learningMode} onChange={setLearningMode} />
        </div>
        {!isComplete ? (
          <JourneyStagePanel step={activeStep} mode={learningMode} />
        ) : (
          <div className="rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
            <h2 className="text-2xl font-bold text-ink">What you completed</h2>
            <p className="mt-4 text-base leading-7 text-ink/75">
              You followed nutrients from digestion through bloodstream delivery,
              cellular entry, mitochondrial electron transport, and ATP production.
            </p>
          </div>
        )}
        <JourneyControls
          canGoBack={activeStepIndex > 0}
          isLastStep={isLastStep}
          isComplete={isComplete}
          currentStepTitle={activeStep.title}
          onBack={goBack}
          onNext={goNext}
          onRestart={restart}
        />
      </div>
    </div>
  );
}
