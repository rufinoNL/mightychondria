import { VisualFrame } from "./VisualFrame";
import {
  getVisualLayerMetadata,
  type VisualLayerMetadata
} from "./visualLayers";

interface HumanBodySvgProps {
  metadata?: VisualLayerMetadata;
}

export function HumanBodySvg({ metadata }: HumanBodySvgProps) {
  const frameMetadata = metadata ?? getVisualLayerMetadata("human-body");

  return (
    <VisualFrame
      title="Body systems deliver nutrients and oxygen"
      metadata={frameMetadata}
    >
      <circle cx="200" cy="48" r="28" fill="#f2c9a0" />
      <path d="M168 88h64l24 126h-112z" fill="#f7d7bd" stroke="#17211d" strokeWidth="3" />
      <path d="M188 90v132" stroke="#1f7a5a" strokeWidth="8" strokeLinecap="round" />
      <path d="M212 104c38 16 48 58 18 88" fill="none" stroke="#2878b8" strokeWidth="8" strokeLinecap="round" />
      <path d="M184 116c-24 22-20 50 4 70" fill="none" stroke="#d89216" strokeWidth="8" strokeLinecap="round" />
    </VisualFrame>
  );
}
