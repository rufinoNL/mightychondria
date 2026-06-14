import { VisualFrame } from "./VisualFrame";

export function ATPProductionSvg() {
  return (
    <VisualFrame title="ATP production">
      <rect x="64" y="144" width="272" height="30" rx="15" fill="#f2dfcf" />
      <rect x="176" y="84" width="48" height="110" rx="18" fill="#1f7a5a" />
      <circle cx="200" cy="76" r="30" fill="#1f7a5a" />
      <text x="200" y="82" textAnchor="middle" className="fill-white text-sm font-bold">
        ATP
      </text>
      {[116, 146, 254, 286].map((cx) => (
        <circle key={cx} cx={cx} cy="214" r="14" fill="#d89216" />
      ))}
      <text x="200" y="264" textAnchor="middle" className="fill-ink text-sm font-semibold">
        ATP synthase uses the gradient to produce ATP
      </text>
    </VisualFrame>
  );
}
