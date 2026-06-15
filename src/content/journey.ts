import type { JourneyStep } from "@/types/content";

export const journeySteps: JourneyStep[] = [
  {
    id: "mouth",
    title: "Mouth",
    description:
      "Your mouth starts the journey by breaking food into smaller pieces and mixing it with saliva.",
    advancedDescription:
      "Chewing increases surface area, and salivary amylase begins breaking starch into smaller carbohydrates. The mixed food becomes a bolus that can be swallowed.",
    whyThisMatters:
      "Good breakdown at the start gives enzymes more surface area to work on later.",
    visualType: "mouth",
    zoomLevel: 2,
    duration: 8,
    keyConcepts: ["chewing", "saliva", "carbohydrate digestion"]
  },
  {
    id: "esophagus",
    title: "Esophagus",
    description:
      "The esophagus moves swallowed food to the stomach with wave-like muscle contractions.",
    advancedDescription:
      "Peristalsis pushes the bolus downward. This stage is mainly transport; meaningful digestion and absorption happen elsewhere.",
    whyThisMatters:
      "Reliable transport keeps digestion moving without relying on gravity alone.",
    visualType: "esophagus",
    zoomLevel: 2,
    duration: 6,
    keyConcepts: ["peristalsis", "transport", "bolus"]
  },
  {
    id: "stomach",
    title: "Stomach",
    description:
      "The stomach churns food with acid and enzymes, turning it into a thick mixture called chyme.",
    advancedDescription:
      "Gastric acid denatures proteins and helps activate pepsin. The stomach also meters chyme into the small intestine so the next stage is not overloaded.",
    whyThisMatters:
      "Controlled release helps the intestine absorb nutrients more efficiently.",
    visualType: "stomach",
    zoomLevel: 2,
    duration: 10,
    keyConcepts: ["acid", "enzymes", "chyme"]
  },
  {
    id: "small-intestine",
    title: "Small Intestine",
    description:
      "The small intestine finishes most digestion and absorbs nutrients into the body.",
    advancedDescription:
      "Pancreatic enzymes and bile help convert carbohydrates, fats, and proteins into absorbable molecules such as glucose, fatty acids, and amino acids.",
    whyThisMatters:
      "This is where food becomes molecules that can actually reach cells.",
    visualType: "small-intestine",
    zoomLevel: 2,
    duration: 12,
    keyConcepts: ["glucose", "fatty acids", "amino acids", "absorption"]
  },
  {
    id: "bloodstream",
    title: "Bloodstream",
    description:
      "Nutrients and oxygen travel through circulation to tissues that need fuel.",
    advancedDescription:
      "Glucose and amino acids enter blood directly, while many fats first travel through lymph before joining circulation. Oxygen from the lungs travels mainly bound to hemoglobin.",
    whyThisMatters:
      "Cells need both fuel molecules and oxygen to support high-efficiency ATP production.",
    visualType: "bloodstream",
    zoomLevel: 3,
    duration: 10,
    keyConcepts: ["circulation", "nutrient delivery", "oxygen"]
  },
  {
    id: "cell",
    title: "Cell",
    description:
      "Cells take in nutrients and begin processing them into usable metabolic fuel.",
    advancedDescription:
      "Membrane transporters and enzymes route nutrients into pathways such as glycolysis and beta oxidation, producing intermediates that mitochondria can use.",
    whyThisMatters:
      "ATP production starts before the mitochondrion; the cell has to prepare fuel first.",
    visualType: "cell",
    zoomLevel: 4,
    duration: 10,
    keyConcepts: ["cell membrane", "glycolysis", "metabolic intermediates"]
  },
  {
    id: "mitochondrion",
    title: "Mitochondrion",
    description:
      "Mitochondria receive prepared fuel and capture its energy in electron carriers.",
    advancedDescription:
      "Fuel-derived intermediates feed mitochondrial reactions that transfer high-energy electrons to NADH and FADH2, preparing them for the electron transport chain.",
    whyThisMatters:
      "Electron carriers are the bridge between nutrient breakdown and ATP production.",
    visualType: "mitochondrion",
    zoomLevel: 5,
    duration: 12,
    keyConcepts: ["matrix", "cristae", "NADH", "FADH2"]
  },
  {
    id: "electron-transport-chain",
    title: "Electron Transport Chain",
    description:
      "Electrons move through membrane proteins, helping build a proton gradient.",
    advancedDescription:
      "NADH and FADH2 donate electrons to complexes in the inner mitochondrial membrane. Oxygen is the final electron acceptor and combines with electrons and protons to form water.",
    whyThisMatters:
      "The proton gradient stores usable potential energy for ATP synthase.",
    visualType: "electron-transport-chain",
    zoomLevel: 6,
    duration: 14,
    keyConcepts: ["Complex I-IV", "oxygen", "water", "proton gradient"]
  },
  {
    id: "atp-production",
    title: "ATP Production",
    description:
      "ATP synthase uses the proton gradient to make ATP, the cell's immediate energy currency.",
    advancedDescription:
      "ATP synthase uses the proton motive force to phosphorylate ADP into ATP. Some nutrient energy becomes heat, and small electron leaks can contribute to reactive oxygen species.",
    whyThisMatters:
      "ATP powers muscle contraction, nerve signaling, transport, repair, and many other cell tasks.",
    visualType: "atp-production",
    zoomLevel: 7,
    duration: 12,
    keyConcepts: ["ATP synthase", "ATP", "heat", "ROS"]
  }
];
