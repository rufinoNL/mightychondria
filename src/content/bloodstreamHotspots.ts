import type {
  BloodstreamHotspot,
  BloodstreamHotspotId
} from "@/types/hotspots";

export const bloodstreamHotspots: BloodstreamHotspot[] = [
  {
    id: "blood-vessel",
    label: "Blood vessel",
    shortLabel: "Vessel",
    explanation:
      "Blood vessels provide the transport route that carries useful molecules through the body toward working tissues."
  },
  {
    id: "nutrient-particles",
    label: "Nutrient particles",
    shortLabel: "Nutrients",
    explanation:
      "Absorbed nutrients travel in circulation so cells can take them up and use their chemical energy."
  },
  {
    id: "oxygen-particles",
    label: "Oxygen particles",
    shortLabel: "Oxygen",
    explanation:
      "Oxygen moves through the blood to cells, where mitochondria use it to help release energy efficiently."
  },
  {
    id: "cell-destination",
    label: "Cell destination",
    shortLabel: "Cell",
    explanation:
      "The destination cell receives delivered nutrients and oxygen before the journey zooms into cellular energy pathways."
  }
];

export const bloodstreamHotspotById: Record<
  BloodstreamHotspotId,
  BloodstreamHotspot
> = Object.fromEntries(
  bloodstreamHotspots.map((hotspot) => [hotspot.id, hotspot])
) as Record<BloodstreamHotspotId, BloodstreamHotspot>;
