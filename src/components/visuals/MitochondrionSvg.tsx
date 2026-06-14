import { VisualFrame } from "./VisualFrame";

export function MitochondrionSvg() {
  return (
    <VisualFrame title="Mitochondrion structure">
      <ellipse cx="200" cy="150" rx="128" ry="72" fill="#fbd6b7" stroke="#8b5f3c" strokeWidth="5" />
      <path
        d="M104 148c28-40 54 40 82 0s54 40 82 0 38 18 48 28"
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <text x="200" y="132" textAnchor="middle" className="fill-ink text-xs font-semibold">
        inner membrane
      </text>
      <text x="200" y="264" textAnchor="middle" className="fill-ink text-sm font-semibold">
        Mitochondria convert nutrient energy into ATP
      </text>
    </VisualFrame>
  );
}
