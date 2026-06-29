export type LearningMode = "simple" | "advanced";

export type JourneyVisualType =
  | "human-body"
  | "mouth"
  | "esophagus"
  | "stomach"
  | "small-intestine"
  | "bloodstream"
  | "cell"
  | "mitochondrion"
  | "electron-transport-chain"
  | "atp-production";

export interface JourneyStep {
  id: string;
  title: string;
  description: string;
  advancedDescription: string;
  whyThisMatters: string;
  visualType: JourneyVisualType;
  zoomLevel: number;
  duration: number;
  keyConcepts: string[];
  relatedArticleSlug?: string;
  guidedPrompt?: string;
  targetHotspotId?: string;
  targetHotspotSuccessMessage?: string;
}

export type PhysiologyDomain =
  | "digestion"
  | "blood-glucose"
  | "sleep"
  | "oxygen"
  | "mitochondria"
  | "atp";

export interface SimulationRecipeStage extends JourneyStep {
  id: JourneyVisualType;
}

export interface SimulationRecipe {
  id: string;
  title: string;
  summary: string;
  questionExamples: string[];
  domains: PhysiologyDomain[];
  assumptions: string[];
  limitations: string[];
  stages: SimulationRecipeStage[];
}

export type ArticleCategory =
  | "Nutrition"
  | "Metabolism"
  | "Mitochondria"
  | "Exercise"
  | "Fasting"
  | "Lifestyle";

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  featured: boolean;
  body: string[];
}
