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
      <circle cx="300" cy="88" r="11" fill="#2878b8" />
      <text x="300" y="92" textAnchor="middle" className="fill-white text-xs font-bold">
        O2
      </text>
      <circle cx="328" cy="88" r="9" fill="#8ecae6" />
      <text x="326" y="68" textAnchor="middle" className="fill-ink text-xs font-semibold">
        water
      </text>
      <path d="M106 210c46 18 108 18 184 0" fill="none" stroke="#1f7a5a" strokeWidth="5" strokeLinecap="round" strokeDasharray="8 8" />
      <text x="198" y="226" textAnchor="middle" className="fill-ink text-xs font-semibold">
        proton gradient
      </text>
      <text x="188" y="76" textAnchor="middle" className="fill-ink text-xs font-semibold">
        electrons move toward oxygen
      </text>
      <text x="200" y="264" textAnchor="middle" className="fill-ink text-sm font-semibold">
        Electron flow builds a proton gradient
      </text>
    </VisualFrame>
  );
}
