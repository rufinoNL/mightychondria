import type { CellHotspot, CellHotspotId } from "@/types/hotspots";

export const cellHotspots: CellHotspot[] = [
  {
    id: "cell-membrane",
    label: "Cell membrane",
    shortLabel: "Membrane",
    explanation:
      "The cell membrane is a selective boundary that helps control what enters and leaves the cell."
  },
  {
    id: "nutrient-transporter",
    label: "Nutrient entry and transporter",
    shortLabel: "Transporter",
    explanation:
      "Transport proteins help useful nutrients cross the membrane so the cell can process them."
  },
  {
    id: "cytoplasm",
    label: "Cytoplasm",
    shortLabel: "Cytoplasm",
    explanation:
      "The cytoplasm is the fluid workspace where many molecules move and early energy-processing steps begin."
  },
  {
    id: "nucleus",
    label: "Nucleus",
    shortLabel: "Nucleus",
    explanation:
      "The nucleus stores DNA instructions that guide how the cell builds proteins and responds to energy needs."
  },
  {
    id: "mitochondrion",
    label: "Mitochondrion",
    shortLabel: "Mitochondrion",
    explanation:
      "Mitochondria use nutrient-derived molecules and oxygen-dependent pathways to make ATP available to the cell."
  }
];

export const cellHotspotById: Record<CellHotspotId, CellHotspot> =
  Object.fromEntries(
    cellHotspots.map((hotspot) => [hotspot.id, hotspot])
  ) as Record<CellHotspotId, CellHotspot>;
