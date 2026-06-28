import type { DigestiveHotspot, DigestiveHotspotId } from "@/types/hotspots";

export const digestiveHotspots: DigestiveHotspot[] = [
  {
    id: "mouth",
    label: "Mouth",
    shortLabel: "Mouth",
    explanation:
      "Chewing breaks food into smaller pieces while saliva moistens it and starts starch digestion."
  },
  {
    id: "esophagus",
    label: "Esophagus",
    shortLabel: "Esophagus",
    explanation:
      "The esophagus moves the swallowed bolus toward the stomach using coordinated muscle waves called peristalsis."
  },
  {
    id: "stomach",
    label: "Stomach",
    shortLabel: "Stomach",
    explanation:
      "The stomach churns food with acid and enzymes, turning it into chyme for the next digestive step."
  },
  {
    id: "small-intestine",
    label: "Small intestine",
    shortLabel: "Small intestine",
    explanation:
      "The small intestine finishes much of digestion and moves nutrients close to the absorptive surface."
  },
  {
    id: "villi",
    label: "Absorption and villi area",
    shortLabel: "Villi",
    explanation:
      "Villi and microvilli create a large surface area so digested nutrients can pass into blood and lymph."
  }
];

export const digestiveHotspotById: Record<
  DigestiveHotspotId,
  DigestiveHotspot
> = Object.fromEntries(
  digestiveHotspots.map((hotspot) => [hotspot.id, hotspot])
) as Record<DigestiveHotspotId, DigestiveHotspot>;
