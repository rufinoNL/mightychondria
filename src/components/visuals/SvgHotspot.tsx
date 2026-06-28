import { useState, type KeyboardEvent, type ReactNode } from "react";

interface SvgHotspotProps {
  label: string;
  isSelected: boolean;
  onSelect: () => void;
  children: ReactNode;
  marker: ReactNode;
  focusRing: ReactNode;
  selectedRing: ReactNode;
}

export function SvgHotspot({
  label,
  isSelected,
  onSelect,
  children,
  marker,
  focusRing,
  selectedRing
}: SvgHotspotProps) {
  const [isFocused, setIsFocused] = useState(false);

  function handleKeyDown(event: KeyboardEvent<SVGGElement>) {
    if (event.key !== "Enter" && event.key !== " ") {
      return;
    }

    event.preventDefault();
    onSelect();
  }

  return (
    <g
      role="button"
      tabIndex={0}
      aria-label={label}
      aria-pressed={isSelected}
      onClick={onSelect}
      onFocus={() => {
        setIsFocused(true);
        onSelect();
      }}
      onBlur={() => setIsFocused(false)}
      onKeyDown={handleKeyDown}
      className="cursor-pointer focus:outline-none"
    >
      <g aria-hidden="true">{marker}</g>
      {children}
      {isSelected ? <g aria-hidden="true">{selectedRing}</g> : null}
      {isFocused ? <g aria-hidden="true">{focusRing}</g> : null}
    </g>
  );
}
