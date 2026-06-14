interface JourneyProgressProps {
  current: number;
  total: number;
}

export function JourneyProgress({ current, total }: JourneyProgressProps) {
  const percent = Math.round((current / total) * 100);

  return (
    <div aria-label={`Step ${current} of ${total}`} className="w-full">
      <div className="flex items-center justify-between text-sm font-medium text-ink/70">
        <span>
          Step {current} of {total}
        </span>
        <span>{percent}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-ink/10">
        <div
          className="h-full rounded-full bg-leaf"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
