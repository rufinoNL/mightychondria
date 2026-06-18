import { VisualFrame } from "./VisualFrame";
import { ZoomTargetRing } from "./ZoomTargetRing";
import type { VisualLayerMetadata } from "./visualLayers";

interface MitochondrionSvgProps {
  metadata: VisualLayerMetadata;
}

export function MitochondrionSvg({ metadata }: MitochondrionSvgProps) {
  return (
    <VisualFrame title="Mitochondria convert nutrient energy into ATP" metadata={metadata}>
      <ellipse cx="200" cy="150" rx="132" ry="74" fill="#fbd6b7" opacity="0.72" />
      <ellipse
        cx="200"
        cy="150"
        rx="132"
        ry="74"
        fill="none"
        stroke="#8b5f3c"
        strokeWidth="4"
      />
      <ellipse cx="200" cy="150" rx="106" ry="52" fill="#fff4e8" opacity="0.92" />
      <ellipse
        cx="200"
        cy="150"
        rx="106"
        ry="52"
        fill="none"
        stroke="#8b5f3c"
        strokeWidth="2.5"
      />
      <path
        d="M112 148c18-26 38-26 56 0s38 26 56 0 38-26 56 0"
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M128 174c16-18 34-18 50 0s34 18 50 0 34-18 50 0"
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <circle cx="136" cy="118" r="10" fill="#d89216" opacity="0.92" />
      <circle cx="160" cy="124" r="8" fill="#2878b8" opacity="0.9" />
      <text x="126" y="98" className="fill-ink text-xs font-semibold">
        NADH
      </text>
      <text x="168" y="108" className="fill-ink text-xs font-semibold">
        FADH2
      </text>
      <text x="200" y="132" textAnchor="middle" className="fill-ink text-xs font-semibold">
        cristae
      </text>
      <ZoomTargetRing cx={220} cy={150} r={58} />
    </VisualFrame>
  );
}
