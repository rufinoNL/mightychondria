import { VisualFrame } from "./VisualFrame";

export function CellSvg() {
  return (
    <VisualFrame title="Cell nutrient entry">
      <ellipse cx="200" cy="148" rx="126" ry="88" fill="#e9f7f1" stroke="#1f7a5a" strokeWidth="5" />
      <circle cx="198" cy="144" r="34" fill="#dbeafe" stroke="#2878b8" strokeWidth="4" />
      <ellipse cx="276" cy="164" rx="30" ry="16" fill="#f8c8a4" stroke="#8b5f3c" strokeWidth="3" />
      <path d="M262 164c8-10 18 10 28 0" fill="none" stroke="#1f7a5a" strokeWidth="3" strokeLinecap="round" />
      <circle cx="92" cy="126" r="10" fill="#d89216" />
      <path d="M106 130h48" stroke="#d89216" strokeWidth="5" strokeLinecap="round" />
      <path d="M146 122l12 8-13 7" fill="none" stroke="#d89216" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <text x="198" y="148" textAnchor="middle" className="fill-ink text-xs font-semibold">
        nucleus
      </text>
      <text x="276" y="202" textAnchor="middle" className="fill-ink text-xs font-semibold">
        mitochondrion
      </text>
      <text x="200" y="264" textAnchor="middle" className="fill-ink text-sm font-semibold">
        Cells prepare nutrients for ATP pathways
      </text>
    </VisualFrame>
  );
}
