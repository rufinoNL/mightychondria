import { VisualFrame } from "./VisualFrame";
import { ZoomTargetRing } from "./ZoomTargetRing";
import type { VisualLayerMetadata } from "./visualLayers";

interface ATPProductionSvgProps {
  metadata: VisualLayerMetadata;
}

export function ATPProductionSvg({ metadata }: ATPProductionSvgProps) {
  return (
    <VisualFrame title="ATP synthase uses the gradient to produce ATP" metadata={metadata}>
      <style>
        {`
          .atp-proton-flow {
            transform-box: fill-box;
            transform-origin: center;
            animation: atp-proton-through-synthase 4.8s ease-in-out infinite;
          }

          .atp-proton-flow-2 {
            animation-delay: 1.4s;
          }

          .atp-proton-flow-3 {
            animation-delay: 2.8s;
          }

          .atp-output-emphasis {
            transform-box: fill-box;
            transform-origin: center;
            animation: atp-output-breathe 4.8s ease-in-out infinite;
          }

          @keyframes atp-proton-through-synthase {
            0% {
              opacity: 0.2;
              transform: translateY(48px) scale(0.86);
            }
            24% {
              opacity: 0.95;
            }
            78% {
              opacity: 0.95;
            }
            100% {
              opacity: 0.2;
              transform: translateY(-42px) scale(0.86);
            }
          }

          @keyframes atp-output-breathe {
            0%,
            100% {
              opacity: 0.24;
              transform: scale(0.94);
            }
            50% {
              opacity: 0.48;
              transform: scale(1.04);
            }
          }

          @media (prefers-reduced-motion: reduce) {
            .atp-proton-flow,
            .atp-output-emphasis {
              animation: none;
              opacity: 0.9;
              transform: none;
            }
          }
        `}
      </style>
      <rect x="58" y="142" width="284" height="44" rx="22" fill="#f2dfcf" opacity="0.96" />
      <rect x="70" y="154" width="260" height="20" rx="10" fill="#fff4e8" opacity="0.75" />
      <rect x="176" y="100" width="48" height="112" rx="18" fill="#1f7a5a" />
      <rect x="188" y="122" width="24" height="70" rx="10" fill="#f8fbff" opacity="0.14" />
      <g aria-hidden="true">
        <circle
          className="atp-proton-flow"
          cx="192"
          cy="164"
          r="5"
          fill="#fff7ed"
          stroke="#d89216"
          strokeWidth="2"
        />
        <circle
          className="atp-proton-flow atp-proton-flow-2"
          cx="200"
          cy="172"
          r="5"
          fill="#fff7ed"
          stroke="#d89216"
          strokeWidth="2"
        />
        <circle
          className="atp-proton-flow atp-proton-flow-3"
          cx="208"
          cy="164"
          r="5"
          fill="#fff7ed"
          stroke="#d89216"
          strokeWidth="2"
        />
      </g>
      <circle
        className="atp-output-emphasis"
        cx="200"
        cy="80"
        r="43"
        fill="#1f7a5a"
        opacity="0.24"
      />
      <circle cx="200" cy="80" r="34" fill="#1f7a5a" />
      <circle cx="200" cy="80" r="24" fill="#f8fbff" opacity="0.12" />
      <text x="200" y="85" textAnchor="middle" className="fill-white text-sm font-bold">
        ATP
      </text>
      <g>
        <circle cx="104" cy="118" r="17" fill="#f8fbff" stroke="#d89216" strokeWidth="3" />
        <text x="104" y="122" textAnchor="middle" className="fill-ink text-xs font-bold">
          ADP
        </text>
        <circle cx="146" cy="118" r="14" fill="#fff7ed" stroke="#d89216" strokeWidth="2.5" />
        <text x="146" y="122" textAnchor="middle" className="fill-ink text-xs font-bold">
          Pi
        </text>
        <path
          d="M164 118h34"
          stroke="#17211d"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M190 110l10 8-10 8"
          fill="none"
          stroke="#17211d"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.85"
        />
      </g>
      {[112, 146, 254, 288].map((cx) => (
        <circle key={cx} cx={cx} cy="224" r="13" fill="#d89216" opacity="0.95" />
      ))}
      <path
        d="M112 202v-28M146 202v-28M254 202v-28M288 202v-28"
        stroke="#1f7a5a"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <text x="118" y="250" textAnchor="middle" className="fill-ink text-xs font-semibold">
        H+
      </text>
      <text x="282" y="250" textAnchor="middle" className="fill-ink text-xs font-semibold">
        H+
      </text>
      <ZoomTargetRing cx={200} cy={80} r={46} label="ATP" labelY={36} />
    </VisualFrame>
  );
}
