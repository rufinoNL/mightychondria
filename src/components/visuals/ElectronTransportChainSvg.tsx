import { VisualFrame } from "./VisualFrame";

export function ElectronTransportChainSvg() {
  const complexes = ["I", "II", "III", "IV", "ATP"];

  return (
    <VisualFrame title="Electron transport chain">
      <rect x="48" y="132" width="304" height="36" rx="18" fill="#f2dfcf" />
      {complexes.map((label, index) => (
        <g key={label}>
          <rect
            x={68 + index * 62}
            y="104"
            width="42"
            height="92"
            rx="10"
            fill={label === "ATP" ? "#1f7a5a" : "#2878b8"}
          />
          <text x={89 + index * 62} y="154" textAnchor="middle" className="fill-white text-sm font-bold">
            {label}
          </text>
        </g>
      ))}
      <path d="M96 88h186" stroke="#d89216" strokeWidth="5" strokeLinecap="round" />
      <text x="188" y="76" textAnchor="middle" className="fill-ink text-xs font-semibold">
        electrons move toward oxygen
      </text>
      <text x="200" y="264" textAnchor="middle" className="fill-ink text-sm font-semibold">
        Electron flow builds a proton gradient
      </text>
    </VisualFrame>
  );
}
