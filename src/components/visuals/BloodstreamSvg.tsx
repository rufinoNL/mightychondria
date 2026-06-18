import { VisualFrame } from "./VisualFrame";
import { ZoomTargetRing } from "./ZoomTargetRing";
import type { VisualLayerMetadata } from "./visualLayers";

const particles: Array<{ cx: number; cy: number; fill: string }> = [
  { cx: 86, cy: 112, fill: "#d89216" },
  { cx: 142, cy: 136, fill: "#f0c14b" },
  { cx: 208, cy: 116, fill: "#1f7a5a" },
  { cx: 122, cy: 194, fill: "#1f7a5a" },
  { cx: 202, cy: 184, fill: "#d89216" },
  { cx: 260, cy: 166, fill: "#2878b8" }
];

interface BloodstreamSvgProps {
  metadata: VisualLayerMetadata;
}

export function BloodstreamSvg({ metadata }: BloodstreamSvgProps) {
  return (
    <VisualFrame title="Nutrients and oxygen move through circulation" metadata={metadata}>
      <rect x="42" y="62" width="316" height="176" rx="34" fill="#f8fbff" opacity="0.92" />
      <path
        d="M58 116c48-34 98-34 148 0s98 34 146 0"
        fill="none"
        stroke="#c73535"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.94"
      />
      <path
        d="M58 184c48 34 98 34 148 0s98-34 146 0"
        fill="none"
        stroke="#2878b8"
        strokeWidth="24"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.92"
      />
      <path
        d="M58 116c48-34 98-34 148 0s98 34 146 0"
        fill="none"
        stroke="#ffffff"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.16"
      />
      <path
        d="M58 184c48 34 98 34 148 0s98-34 146 0"
        fill="none"
        stroke="#ffffff"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.16"
      />
      {particles.map(({ cx, cy, fill }) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="9" fill={fill} opacity="0.95" />
      ))}
      <ellipse cx="306" cy="154" rx="36" ry="26" fill="#e9f7f1" opacity="0.95" />
      <ellipse
        cx="306"
        cy="154"
        rx="36"
        ry="26"
        fill="none"
        stroke="#1f7a5a"
        strokeWidth="3"
      />
      <circle cx="306" cy="154" r="10" fill="#dbeafe" stroke="#2878b8" strokeWidth="2" />
      <ZoomTargetRing cx={306} cy={154} r={40} />
      <path
        d="M320 104h24l-10-10"
        fill="none"
        stroke="#17211d"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.82"
      />
      <path
        d="M80 196h-24l10 10"
        fill="none"
        stroke="#17211d"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.82"
      />
    </VisualFrame>
  );
}
