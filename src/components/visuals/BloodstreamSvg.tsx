import { VisualFrame } from "./VisualFrame";

const particles: Array<{ cx: number; cy: number; fill: string }> = [
  { cx: 90, cy: 106, fill: "#d89216" },
  { cx: 152, cy: 142, fill: "#f0c14b" },
  { cx: 236, cy: 118, fill: "#1f7a5a" },
  { cx: 286, cy: 184, fill: "#d89216" },
  { cx: 118, cy: 196, fill: "#1f7a5a" }
];

export function BloodstreamSvg() {
  return (
    <VisualFrame title="Bloodstream nutrient transport">
      <rect x="38" y="62" width="324" height="176" rx="32" fill="#f8fbff" />
      <path d="M36 112c84-70 142 68 220 0 36-32 72-36 108-10" fill="none" stroke="#c73535" strokeWidth="28" strokeLinecap="round" />
      <path d="M36 184c84 70 142-68 220 0 36 32 72 36 108 10" fill="none" stroke="#2878b8" strokeWidth="28" strokeLinecap="round" />
      <text x="68" y="76" className="fill-ink text-xs font-semibold">
        nutrients
      </text>
      <text x="286" y="228" className="fill-ink text-xs font-semibold">
        oxygen
      </text>
      {particles.map(({ cx, cy, fill }) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="10" fill={fill} />
      ))}
      <path d="M320 104l26 0-10-10" fill="none" stroke="#17211d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M72 190l-26 0 10 10" fill="none" stroke="#17211d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <text x="200" y="264" textAnchor="middle" className="fill-ink text-sm font-semibold">
        Nutrients and oxygen move through circulation
      </text>
    </VisualFrame>
  );
}
