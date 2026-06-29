import { VisualFrame } from "./VisualFrame";
import { ZoomTargetRing } from "./ZoomTargetRing";
import type { VisualLayerMetadata } from "./visualLayers";

interface ElectronTransportChainSvgProps {
  metadata: VisualLayerMetadata;
}

export function ElectronTransportChainSvg({
  metadata
}: ElectronTransportChainSvgProps) {
  const complexes = [
    { label: "I", x: 70, fill: "#2878b8" },
    { label: "II", x: 128, fill: "#2878b8" },
    { label: "III", x: 186, fill: "#2878b8" },
    { label: "IV", x: 244, fill: "#2878b8" }
  ];

  return (
    <VisualFrame title="Electron flow builds a proton gradient" metadata={metadata}>
      <style>
        {`
          .etc-electron {
            transform-box: fill-box;
            transform-origin: center;
            animation: etc-electron-flow 4.8s ease-in-out infinite;
          }

          .etc-electron-2 {
            animation-delay: 1.2s;
          }

          .etc-electron-3 {
            animation-delay: 2.4s;
          }

          @keyframes etc-electron-flow {
            0% {
              opacity: 0.25;
              transform: translateX(-18px) scale(0.85);
            }
            18% {
              opacity: 0.95;
            }
            82% {
              opacity: 0.95;
            }
            100% {
              opacity: 0.25;
              transform: translateX(38px) scale(0.85);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .etc-electron {
              animation: none;
              opacity: 0.9;
              transform: none;
            }
          }
        `}
      </style>
      <rect x="46" y="128" width="308" height="44" rx="22" fill="#f2dfcf" opacity="0.96" />
      <rect x="58" y="140" width="284" height="20" rx="10" fill="#fff4e8" opacity="0.76" />
      {complexes.map(({ label, x, fill }) => (
        <g key={label}>
          <rect
            x={x}
            y="104"
            width="40"
            height="92"
            rx="12"
            fill={fill}
            opacity="0.95"
          />
          <rect x={x + 7} y="118" width="26" height="64" rx="8" fill="#f8fbff" opacity="0.14" />
          <text x={x + 20} y="155" textAnchor="middle" className="fill-white text-sm font-bold">
            {label}
          </text>
        </g>
      ))}
      <g>
        <rect x="314" y="98" width="46" height="104" rx="18" fill="#1f7a5a" />
        <circle cx="337" cy="84" r="24" fill="#1f7a5a" />
        <text x="337" y="89" textAnchor="middle" className="fill-white text-xs font-bold">
          ATP
        </text>
      </g>
      <text x="90" y="96" textAnchor="middle" className="fill-ink text-xs font-semibold">
        NADH
      </text>
      <text x="148" y="96" textAnchor="middle" className="fill-ink text-xs font-semibold">
        FADH2
      </text>
      <path
        d="M94 86h188"
        stroke="#d89216"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M270 78l14 8-14 8"
        fill="none"
        stroke="#d89216"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g aria-hidden="true">
        <circle
          className="etc-electron"
          cx="112"
          cy="86"
          r="4"
          fill="#fff7ed"
          stroke="#d89216"
          strokeWidth="2"
        />
        <circle
          className="etc-electron etc-electron-2"
          cx="174"
          cy="86"
          r="4"
          fill="#fff7ed"
          stroke="#d89216"
          strokeWidth="2"
        />
        <circle
          className="etc-electron etc-electron-3"
          cx="236"
          cy="86"
          r="4"
          fill="#fff7ed"
          stroke="#d89216"
          strokeWidth="2"
        />
      </g>
      <circle cx="300" cy="86" r="12" fill="#2878b8" />
      <text x="300" y="90" textAnchor="middle" className="fill-white text-xs font-bold">
        O2
      </text>
      <circle cx="328" cy="86" r="9" fill="#8ecae6" opacity="0.9" />
      <path
        d="M96 214c52 18 126 18 202 0"
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="8 8"
        opacity="0.86"
      />
      {[112, 150, 226, 270].map((cx) => (
        <text key={cx} x={cx} y="206" textAnchor="middle" className="fill-ink text-xs font-bold">
          H+
        </text>
      ))}
      <ZoomTargetRing cx={337} cy={150} r={34} />
    </VisualFrame>
  );
}
