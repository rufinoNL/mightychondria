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
