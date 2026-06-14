"use client";

import { useMemo, useState } from "react";
import { journeySteps } from "@/content/journey";
import type { LearningMode } from "@/types/content";
import { JourneyVisual } from "@/components/visuals/JourneyVisual";
import { JourneyControls } from "./JourneyControls";
import { JourneyProgress } from "./JourneyProgress";
import { JourneyStagePanel } from "./JourneyStagePanel";
import { LearningModeToggle } from "./LearningModeToggle";

export function JourneyExperience() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [learningMode, setLearningMode] = useState<LearningMode>("simple");
  const [isComplete, setIsComplete] = useState(false);

  const activeStep = journeySteps[activeStepIndex];
  const isLastStep = activeStepIndex === journeySteps.length - 1;

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

    setActiveStepIndex((index) => Math.min(journeySteps.length - 1, index + 1));
  }

  function restart() {
    setActiveStepIndex(0);
    setIsComplete(false);
  }

  return (
    <div className="mx-auto grid max-w-6xl gap-6 px-4 pb-16 sm:px-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(320px,0.8fr)] lg:px-8">
      <div className="space-y-5">
        <div className="rounded-lg border border-ink/10 bg-white p-4 shadow-sm">
          <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <JourneyProgress
              current={isComplete ? journeySteps.length : activeStepIndex + 1}
              total={journeySteps.length}
            />
          </div>
          {isComplete ? (
            <div className="flex min-h-[420px] flex-col justify-center rounded-lg bg-leaf/10 p-8">
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
          onBack={goBack}
          onNext={goNext}
          onRestart={restart}
        />
      </div>
    </div>
  );
}
