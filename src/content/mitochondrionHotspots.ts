import type {
  MitochondrionHotspot,
  MitochondrionHotspotId
} from "@/types/hotspots";

export const mitochondrionHotspots: MitochondrionHotspot[] = [
  {
    id: "outer-membrane",
    label: "Outer membrane",
    shortLabel: "Outer membrane",
    explanation:
      "The outer membrane forms the mitochondrion's boundary and helps separate mitochondrial reactions from the rest of the cell."
  },
  {
    id: "inner-membrane",
    label: "Inner membrane",
    shortLabel: "Inner membrane",
    explanation:
      "The inner membrane holds the electron transport chain and helps maintain the proton gradient used to make ATP."
  },
  {
    id: "cristae",
    label: "Cristae",
    shortLabel: "Cristae",
    explanation:
      "Cristae are folds of the inner membrane that increase surface area for energy-converting membrane proteins."
  },
  {
    id: "matrix",
    label: "Matrix",
    shortLabel: "Matrix",
    explanation:
      "The matrix is the inner fluid space where fuel-derived molecules are processed and electron carriers are loaded."
  },
  {
    id: "electron-carriers",
    label: "NADH and FADH2 carriers",
    shortLabel: "NADH / FADH2",
    explanation:
      "NADH and FADH2 carry high-energy electrons from fuel breakdown toward the electron transport chain."
  },
  {
    id: "etc-zoom-target",
    label: "ETC zoom target",
    shortLabel: "ETC target",
    explanation:
      "This target marks where the journey zooms next: the inner membrane machinery that passes electrons and pumps protons."
  }
];

export const mitochondrionHotspotById: Record<
  MitochondrionHotspotId,
  MitochondrionHotspot
> = Object.fromEntries(
  mitochondrionHotspots.map((hotspot) => [hotspot.id, hotspot])
) as Record<MitochondrionHotspotId, MitochondrionHotspot>;
