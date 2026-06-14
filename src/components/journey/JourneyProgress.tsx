interface JourneyProgressProps {
  current: number;
  total: number;
  label?: string;
}

export function JourneyProgress({
  current,
  total,
  label = "Journey progress"
}: JourneyProgressProps) {
  const percent = Math.round((current / total) * 100);

  return (
    <div
      aria-label={`${label}: step ${current} of ${total}`}
      className="w-full"
      role="group"
    >
      <div className="flex items-center justify-between text-sm font-medium text-ink/70">
        <span>
          Step {current} of {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div
        className="mt-2 h-2 overflow-hidden rounded-full bg-ink/10"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={total}
        aria-valuenow={current}
        aria-valuetext={`Step ${current} of ${total}`}
      >
        <div
          className="h-full rounded-full bg-leaf"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
