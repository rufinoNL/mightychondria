import type { JourneyStep } from "@/types/content";

export const journeySteps: JourneyStep[] = [
  {
    id: "mouth",
    title: "Mouth",
    description:
      "Your mouth starts the journey by breaking food into smaller pieces and mixing it with saliva. This turns a meal into a soft bolus that is easier to move and digest.",
    advancedDescription:
      "Chewing increases surface area, and salivary amylase begins breaking starch into shorter carbohydrate chains. The mixed food becomes a bolus, which is easier for the esophagus to transport and for later enzymes to reach.",
    whyThisMatters:
      "Mechanical breakdown is not just about swallowing. Smaller food pieces expose more surface area, which helps digestive enzymes work more efficiently downstream.",
    visualType: "mouth",
    zoomLevel: 2,
    duration: 8,
    keyConcepts: ["chewing", "saliva", "surface area", "amylase"],
    relatedArticleSlug: "what-happens-after-eating"
  },
  {
    id: "esophagus",
    title: "Esophagus",
    description:
      "The esophagus is a transport tube. It moves swallowed food toward the stomach with coordinated waves of muscle contraction.",
    advancedDescription:
      "Peristalsis pushes the bolus downward in a controlled sequence. This stage is mostly transport, but it matters because digestion depends on reliable movement from one compartment to the next.",
    whyThisMatters:
      "Reliable transport keeps digestion moving even when body position changes. The process is active, not simply gravity doing the work.",
    visualType: "esophagus",
    zoomLevel: 2,
    duration: 6,
    keyConcepts: ["peristalsis", "transport", "bolus", "smooth muscle"],
    relatedArticleSlug: "what-happens-after-eating"
  },
  {
    id: "stomach",
    title: "Stomach",
    description:
      "The stomach stores and churns food with acid and enzymes. The meal becomes chyme, a thick mixture released gradually into the small intestine.",
    advancedDescription:
      "Gastric acid denatures proteins and helps activate pepsin, while muscular mixing spreads acid and enzymes through the meal. The stomach also meters chyme into the small intestine so absorption machinery is not overloaded.",
    whyThisMatters:
      "Controlled release gives the intestine time to neutralize acid, add enzymes and bile, and absorb nutrients efficiently.",
    visualType: "stomach",
    zoomLevel: 2,
    duration: 10,
    keyConcepts: ["acid", "pepsin", "chyme", "controlled release"],
    relatedArticleSlug: "what-happens-after-eating"
  },
  {
    id: "small-intestine",
    title: "Small Intestine",
    description:
      "The small intestine finishes most chemical digestion and absorbs nutrients into the body. This is where food becomes molecules that can travel to cells.",
    advancedDescription:
      "Pancreatic enzymes and bile help convert carbohydrates, fats, and proteins into absorbable molecules such as glucose, fatty acids, and amino acids. Folds, villi, and microvilli create a large absorptive surface.",
    whyThisMatters:
      "Absorption is the handoff from digestion to metabolism. Without this step, nutrients remain in the gut instead of becoming available to tissues.",
    visualType: "small-intestine",
    zoomLevel: 2,
    duration: 12,
    keyConcepts: ["glucose", "fatty acids", "amino acids", "villi", "absorption"],
    relatedArticleSlug: "what-happens-after-eating"
  },
  {
    id: "bloodstream",
    title: "Bloodstream",
    description:
      "Nutrients and oxygen travel through circulation to tissues that need fuel. Blood is the delivery network connecting digestion, breathing, and cellular energy use.",
    advancedDescription:
      "Glucose and amino acids enter blood directly, while many fats first travel through lymph before joining circulation. Oxygen from the lungs travels mainly bound to hemoglobin, then diffuses into tissues where oxygen demand is high.",
    whyThisMatters:
      "Cells need both fuel molecules and oxygen. Fuel supplies electrons and carbon skeletons; oxygen helps mitochondrial electron transport keep moving.",
    visualType: "bloodstream",
    zoomLevel: 3,
    duration: 10,
    keyConcepts: ["circulation", "nutrient delivery", "oxygen", "hemoglobin"],
    relatedArticleSlug: "what-happens-after-eating"
  },
  {
    id: "cell",
    title: "Cell",
    description:
      "Cells take in nutrients and begin processing them into smaller metabolic fuels. Some ATP can be made in the cytoplasm, but the high-yield pathway depends on mitochondria.",
    advancedDescription:
      "Membrane transporters and enzymes route nutrients into pathways such as glycolysis and beta oxidation. These pathways produce intermediates and electron carriers that can feed mitochondrial metabolism.",
    whyThisMatters:
      "Mitochondria do not receive whole food. The cell has to convert absorbed nutrients into molecules that mitochondrial pathways can actually use.",
    visualType: "cell",
    zoomLevel: 4,
    duration: 10,
    keyConcepts: ["cell membrane", "transporters", "glycolysis", "metabolic intermediates"],
    relatedArticleSlug: "how-glucose-becomes-energy"
  },
  {
    id: "mitochondrion",
    title: "Mitochondrion",
    description:
      "Mitochondria receive prepared fuel and capture part of its energy in electron carriers. Their folded inner membranes create the workspace for high-output ATP production.",
    advancedDescription:
      "Fuel-derived intermediates feed mitochondrial reactions that transfer high-energy electrons to NADH and FADH2. The inner membrane and cristae give the electron transport chain enough surface area to support ATP production.",
    whyThisMatters:
      "Electron carriers are the bridge between nutrient breakdown and ATP production. They move usable energy from fuel reactions into the electron transport chain.",
    visualType: "mitochondrion",
    zoomLevel: 5,
    duration: 12,
    keyConcepts: ["matrix", "cristae", "NADH", "FADH2", "inner membrane"],
    relatedArticleSlug: "what-are-mitochondria"
  },
  {
    id: "electron-transport-chain",
    title: "Electron Transport Chain",
    description:
      "Electrons move through proteins in the inner mitochondrial membrane. Their movement helps pump protons and build a gradient.",
    advancedDescription:
      "NADH and FADH2 donate electrons to complexes in the inner mitochondrial membrane. As electrons move toward oxygen, several complexes pump protons across the membrane. Oxygen is the final electron acceptor and combines with electrons and protons to form water.",
    whyThisMatters:
      "The proton gradient stores usable potential energy. ATP synthase depends on that gradient, so electron flow and oxygen availability are directly tied to ATP output.",
    visualType: "electron-transport-chain",
    zoomLevel: 6,
    duration: 14,
    keyConcepts: ["Complex I-IV", "oxygen", "water", "proton gradient"],
    relatedArticleSlug: "how-mitochondria-produce-atp"
  },
  {
    id: "atp-production",
    title: "ATP Production",
    description:
      "ATP synthase uses the proton gradient to make ATP, the cell's immediate energy currency. ATP then powers work throughout the cell.",
    advancedDescription:
      "ATP synthase uses the proton motive force to phosphorylate ADP into ATP. Not all nutrient energy becomes ATP: some becomes heat, and small electron leaks can contribute to reactive oxygen species.",
    whyThisMatters:
      "ATP is the practical output of the journey. It powers muscle contraction, nerve signaling, membrane transport, repair, and many other cell tasks.",
    visualType: "atp-production",
    zoomLevel: 7,
    duration: 12,
    keyConcepts: ["ATP synthase", "ATP", "ADP", "heat", "ROS"],
    relatedArticleSlug: "how-mitochondria-produce-atp"
  }
];
