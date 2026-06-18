interface JourneyControlsProps {
  canGoBack: boolean;
  isLastStep: boolean;
  isComplete: boolean;
  currentStepTitle?: string;
  onBack: () => void;
  onNext: () => void;
  onRestart: () => void;
}

export function JourneyControls({
  canGoBack,
  isLastStep,
  isComplete,
  currentStepTitle,
  onBack,
  onNext,
  onRestart
}: JourneyControlsProps) {
  if (isComplete) {
    return (
      <button
        type="button"
        onClick={onRestart}
        aria-label="Restart the human energy journey from the first step"
        className="w-full rounded-md bg-leaf px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2 sm:w-auto"
      >
        Restart journey
      </button>
    );
  }

  return (
    <div className="grid gap-3 sm:flex sm:flex-wrap">
      <button
        type="button"
        onClick={onBack}
        disabled={!canGoBack}
        aria-label="Go to the previous journey step"
        className="rounded-md border border-ink/15 bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:border-leaf hover:text-leaf focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-45"
      >
        Previous
      </button>
      <button
        type="button"
        onClick={onNext}
        aria-label={
          isLastStep
            ? "Complete the human energy journey"
            : `Go to the next journey step after ${currentStepTitle ?? "the current step"}`
        }
        className="rounded-md bg-leaf px-5 py-3 text-sm font-semibold text-white transition hover:bg-ink focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2"
      >
        {isLastStep ? "Complete journey" : "Next step"}
      </button>
    </div>
  );
}
