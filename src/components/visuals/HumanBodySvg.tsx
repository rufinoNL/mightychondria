import { VisualFrame } from "./VisualFrame";

export function HumanBodySvg() {
  return (
    <VisualFrame title="Human body overview">
      <circle cx="200" cy="48" r="28" fill="#f2c9a0" />
      <path d="M168 88h64l24 126h-112z" fill="#f7d7bd" stroke="#17211d" strokeWidth="3" />
      <path d="M188 90v132" stroke="#1f7a5a" strokeWidth="8" strokeLinecap="round" />
      <path d="M212 104c38 16 48 58 18 88" fill="none" stroke="#2878b8" strokeWidth="8" strokeLinecap="round" />
      <path d="M184 116c-24 22-20 50 4 70" fill="none" stroke="#d89216" strokeWidth="8" strokeLinecap="round" />
      <text x="200" y="264" textAnchor="middle" className="fill-ink text-sm font-semibold">
        Body systems deliver nutrients and oxygen
      </text>
    </VisualFrame>
  );
}
