import { VisualFrame } from "./VisualFrame";
import { ZoomTargetRing } from "./ZoomTargetRing";
import type { VisualLayerMetadata } from "./visualLayers";

interface CellSvgProps {
  metadata: VisualLayerMetadata;
}

export function CellSvg({ metadata }: CellSvgProps) {
  return (
    <VisualFrame title="Cells prepare nutrients for ATP pathways" metadata={metadata}>
      <ellipse cx="200" cy="150" rx="132" ry="88" fill="#e9f7f1" opacity="0.9" />
      <ellipse
        cx="200"
        cy="150"
        rx="132"
        ry="88"
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="4"
      />
      <ellipse cx="200" cy="150" rx="106" ry="66" fill="#f8fbff" opacity="0.35" />
      <circle cx="190" cy="144" r="36" fill="#dbeafe" opacity="0.92" />
      <circle
        cx="190"
        cy="144"
        r="36"
        fill="none"
        stroke="#2878b8"
        strokeWidth="3"
      />
      <circle cx="184" cy="138" r="10" fill="#2878b8" opacity="0.14" />
      <ellipse cx="278" cy="164" rx="34" ry="20" fill="#fbd6b7" opacity="0.95" />
      <ellipse
        cx="278"
        cy="164"
        rx="34"
        ry="20"
        fill="none"
        stroke="#8b5f3c"
        strokeWidth="3"
      />
      <path
        d="M254 164c10-12 20 12 30 0s18-10 28 2"
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="88" cy="128" r="10" fill="#d89216" opacity="0.95" />
      <path
        d="M104 130h48"
        stroke="#d89216"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M144 122l12 8-12 8"
        fill="none"
        stroke="#d89216"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="150" y="116" width="14" height="30" rx="7" fill="#1f7a5a" />
      <rect x="154" y="122" width="6" height="18" rx="3" fill="#f8fbff" opacity="0.2" />
      <ZoomTargetRing cx={276} cy={164} r={40} />
    </VisualFrame>
  );
}
