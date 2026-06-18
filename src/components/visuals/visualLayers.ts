import type { JourneyVisualType } from "@/types/content";

export interface VisualLayerMetadata {
  zoomLayer: number;
  layerLabel: string;
  focusLabel: string;
  zoomProgressLabel: string;
  nextLayerLabel?: string;
}

export const zoomPathLayers = [
  "Body",
  "Digestive tract",
  "Bloodstream",
  "Cell",
  "Mitochondrion",
  "ETC",
  "ATP"
] as const;

const totalLayers = zoomPathLayers.length;

function createMetadata(
  zoomLayer: number,
  layerLabel: string,
  focusLabel: string
): VisualLayerMetadata {
  const nextLayerLabel = zoomPathLayers[zoomLayer];

  return {
    zoomLayer,
    layerLabel,
    focusLabel,
    zoomProgressLabel: `Layer ${zoomLayer} of ${totalLayers}`,
    nextLayerLabel
  };
}

export const visualLayerMetadata: Record<
  JourneyVisualType,
  VisualLayerMetadata
> = {
  "human-body": createMetadata(1, "Human body", "Whole-body overview"),
  mouth: createMetadata(2, "Digestive tract", "Mouth"),
  esophagus: createMetadata(2, "Digestive tract", "Esophagus"),
  stomach: createMetadata(2, "Digestive tract", "Stomach"),
  "small-intestine": createMetadata(2, "Digestive tract", "Small intestine"),
  bloodstream: createMetadata(3, "Bloodstream", "Nutrient and oxygen delivery"),
  cell: createMetadata(4, "Cell", "Nutrient entry"),
  mitochondrion: createMetadata(5, "Mitochondrion", "Inner membrane workspace"),
  "electron-transport-chain": createMetadata(
    6,
    "Electron transport chain",
    "Proton gradient"
  ),
  "atp-production": createMetadata(7, "ATP production", "ATP synthase")
};

export function getVisualLayerMetadata(type: JourneyVisualType) {
  return visualLayerMetadata[type];
}
