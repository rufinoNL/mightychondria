import type { JourneyStep } from "@/types/content";

export const journeySteps: JourneyStep[] = [
  {
    id: "mouth",
    title: "Mouth",
    description:
      "Digestion begins as chewing breaks food into smaller pieces and saliva starts separating nutrients from the meal.",
    advancedDescription:
      "Mechanical digestion increases surface area while salivary enzymes begin carbohydrate digestion. The meal becomes a bolus that can move through the digestive tract.",
    visualType: "digestive-system",
    zoomLevel: 2,
    duration: 8,
    keyConcepts: ["chewing", "saliva", "carbohydrate digestion"]
  },
  {
    id: "esophagus",
    title: "Esophagus",
    description:
      "The swallowed food travels down the esophagus toward the stomach through coordinated muscle movement.",
    advancedDescription:
      "Peristalsis moves the bolus through the esophagus. This stage is mostly transport, not nutrient absorption.",
    visualType: "digestive-system",
    zoomLevel: 2,
    duration: 6,
    keyConcepts: ["peristalsis", "transport", "bolus"]
  },
  {
    id: "stomach",
    title: "Stomach",
    description:
      "The stomach churns food with acid and enzymes, turning it into a partially digested mixture.",
    advancedDescription:
      "Gastric acid denatures proteins and activates digestive enzymes. The stomach meters chyme into the small intestine for absorption.",
    visualType: "digestive-system",
    zoomLevel: 2,
    duration: 10,
    keyConcepts: ["acid", "enzymes", "chyme"]
  },
  {
    id: "small-intestine",
    title: "Small Intestine",
    description:
      "Food is broken into absorbable nutrients such as glucose, fatty acids, and amino acids.",
    advancedDescription:
      "Digestive enzymes and bile help convert carbohydrates, fats, and proteins into absorbable molecules that cross the intestinal lining.",
    visualType: "digestive-system",
    zoomLevel: 2,
    duration: 12,
    keyConcepts: ["glucose", "fatty acids", "amino acids", "absorption"]
  },
  {
    id: "bloodstream",
    title: "Bloodstream",
    description:
      "Absorbed nutrients enter circulation and travel through the body to reach cells that need fuel.",
    advancedDescription:
      "Glucose and amino acids move through blood, while many fats first travel through lymph before entering circulation. Oxygen from breathing also travels in blood.",
    visualType: "bloodstream",
    zoomLevel: 3,
    duration: 10,
    keyConcepts: ["circulation", "nutrient delivery", "oxygen"]
  },
  {
    id: "cell",
    title: "Cell",
    description:
      "Cells take in nutrients and prepare them for pathways that can convert their stored energy into ATP.",
    advancedDescription:
      "Transporters and metabolic enzymes move nutrients into cellular pathways such as glycolysis and beta oxidation, producing intermediates used by mitochondria.",
    visualType: "cell",
    zoomLevel: 4,
    duration: 10,
    keyConcepts: ["cell membrane", "glycolysis", "metabolic intermediates"]
  },
  {
    id: "mitochondrion",
    title: "Mitochondrion",
    description:
      "Mitochondria convert energy from nutrients into forms the cell can use to make ATP.",
    advancedDescription:
      "Inside mitochondria, fuel-derived intermediates feed reactions that transfer high-energy electrons to NADH and FADH2 for the electron transport chain.",
    visualType: "mitochondrion",
    zoomLevel: 5,
    duration: 12,
    keyConcepts: ["matrix", "cristae", "NADH", "FADH2"]
  },
  {
    id: "electron-transport-chain",
    title: "Electron Transport Chain",
    description:
      "Electrons move through protein complexes, helping pump protons across the inner mitochondrial membrane.",
    advancedDescription:
      "NADH and FADH2 donate electrons to the electron transport chain. Oxygen acts as the final electron acceptor, helping form water while proton pumping builds a gradient.",
    visualType: "electron-transport-chain",
    zoomLevel: 6,
    duration: 14,
    keyConcepts: ["Complex I-IV", "oxygen", "water", "proton gradient"]
  },
  {
    id: "atp-production",
    title: "ATP Production",
    description:
      "The proton gradient powers ATP synthase, which produces ATP that cells use for work.",
    advancedDescription:
      "ATP synthase uses the proton motive force to phosphorylate ADP into ATP. Some energy is released as heat, and small electron leaks can contribute to ROS generation.",
    visualType: "atp-production",
    zoomLevel: 7,
    duration: 12,
    keyConcepts: ["ATP synthase", "ATP", "heat", "ROS"]
  }
];
