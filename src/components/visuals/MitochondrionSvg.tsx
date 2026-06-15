import { VisualFrame } from "./VisualFrame";

export function MitochondrionSvg() {
  return (
    <VisualFrame title="Mitochondrion structure">
      <ellipse cx="200" cy="150" rx="128" ry="72" fill="#fbd6b7" stroke="#8b5f3c" strokeWidth="5" />
      <ellipse cx="200" cy="150" rx="102" ry="50" fill="#fff4e8" stroke="#8b5f3c" strokeWidth="3" />
      <path
        d="M104 148c28-40 54 40 82 0s54 40 82 0 38 18 48 28"
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="140" cy="116" r="9" fill="#d89216" />
      <circle cx="162" cy="122" r="7" fill="#2878b8" />
      <text x="132" y="96" className="fill-ink text-xs font-semibold">
        NADH
      </text>
      <text x="200" y="132" textAnchor="middle" className="fill-ink text-xs font-semibold">
        inner membrane
      </text>
      <text x="200" y="264" textAnchor="middle" className="fill-ink text-sm font-semibold">
        Mitochondria convert nutrient energy into ATP
      </text>
    </VisualFrame>
  );
}
