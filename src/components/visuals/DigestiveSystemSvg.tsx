import { VisualFrame } from "./VisualFrame";

export function DigestiveSystemSvg() {
  return (
    <VisualFrame title="Digestive system">
      <circle cx="120" cy="56" r="18" fill="#d89216" />
      <path d="M140 60c50 22 68 42 60 82" fill="none" stroke="#8b5f3c" strokeWidth="12" strokeLinecap="round" />
      <ellipse cx="210" cy="154" rx="48" ry="30" fill="#f4b38a" stroke="#17211d" strokeWidth="3" />
      <path
        d="M184 196c-44 6-48 54-2 58 52 4 66-52 20-58-52-6-66 48-20 58"
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <text x="200" y="280" textAnchor="middle" className="fill-ink text-sm font-semibold">
        Food breaks into absorbable nutrients
      </text>
    </VisualFrame>
  );
}
