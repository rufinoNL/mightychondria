"use client";

import type { LearningMode } from "@/types/content";

interface LearningModeToggleProps {
  value: LearningMode;
  onChange: (mode: LearningMode) => void;
}

export function LearningModeToggle({ value, onChange }: LearningModeToggleProps) {
  return (
    <div
      className="inline-flex rounded-md border border-ink/10 bg-white p-1"
      role="group"
      aria-label="Choose learning mode"
    >
      {(["simple", "advanced"] as const).map((mode) => (
        <button
          key={mode}
          type="button"
          onClick={() => onChange(mode)}
          aria-label={`Use ${mode} explanation mode`}
          className={`rounded px-3 py-2 text-sm font-semibold capitalize transition focus:outline-none focus:ring-2 focus:ring-leaf ${
            value === mode
              ? "bg-leaf text-white"
              : "text-ink/70 hover:bg-leaf/10 hover:text-leaf"
          }`}
          aria-pressed={value === mode}
        >
          {mode}
        </button>
      ))}
    </div>
  );
}
