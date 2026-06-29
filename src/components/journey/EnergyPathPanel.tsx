import type { JourneyStep } from "@/types/content";

interface EnergyPathPanelProps {
  activeStepId: JourneyStep["id"];
}

const energyPathSteps = [
  {
    id: "cell",
    label: "Cell",
    summary: "nutrients enter",
    activeCopy: "Nutrients have crossed into the cell and are being prepared for mitochondrial pathways."
  },
  {
    id: "mitochondrion",
    label: "Mitochondrion",
    summary: "carriers bring electrons",
    activeCopy: "Fuel energy is now packaged into electron carriers that feed the inner membrane."
  },
  {
    id: "electron-transport-chain",
    label: "ETC",
    summary: "gradient builds",
    activeCopy: "Electron flow helps build the proton gradient that stores usable energy."
  },
  {
    id: "atp-production",
    label: "ATP",
    summary: "usable energy",
    activeCopy: "The gradient is converted into ATP, the cell's immediate energy currency."
  }
] as const;

export function EnergyPathPanel({ activeStepId }: EnergyPathPanelProps) {
  const activeIndex = energyPathSteps.findIndex(
    (step) => step.id === activeStepId
  );

  if (activeIndex === -1) {
    return null;
  }

  const activeStep = energyPathSteps[activeIndex];

  return (
    <section
      aria-label="Energy path"
      className="mt-5 rounded-md border border-ink/10 bg-ink/[0.025] p-4"
    >
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold text-ink">Energy path</h3>
        <span className="text-xs font-semibold text-ink/50">
          {activeIndex + 1} of {energyPathSteps.length}
        </span>
      </div>
      <ol className="mt-3 grid gap-2 sm:grid-cols-4">
        {energyPathSteps.map((step, index) => {
          const isActive = index === activeIndex;
          const isPast = index < activeIndex;

          return (
            <li key={step.id} className="min-w-0">
              <div
                aria-current={isActive ? "step" : undefined}
                className={`h-full rounded-md border p-2 ${
                  isActive
                    ? "border-leaf bg-white text-ink shadow-sm"
                    : isPast
                      ? "border-leaf/20 bg-leaf/10 text-ink/70"
                      : "border-ink/10 bg-white/70 text-ink/55"
                }`}
              >
                <p className="truncate text-xs font-semibold">{step.label}</p>
                <p className="mt-1 text-[0.7rem] leading-4">{step.summary}</p>
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-3 text-sm leading-6 text-ink/75">
        {activeStep.activeCopy}
      </p>
    </section>
  );
}
